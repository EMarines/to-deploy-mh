(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function fe(){}const Uf=t=>t;function Ut(t,e){for(const n in e)t[n]=e[n];return t}function Ff(t){return t()}function Wc(){return Object.create(null)}function Qe(t){t.forEach(Ff)}function Do(t){return typeof t=="function"}function Be(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Dr;function _n(t,e){return Dr||(Dr=document.createElement("a")),Dr.href=e,t===Dr.href}function yg(t){return Object.keys(t).length===0}function wl(t,...e){if(t==null)return fe;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function qs(t){let e;return wl(t,n=>e=n)(),e}function We(t,e,n){t.$$.on_destroy.push(wl(e,n))}function bl(t,e,n,s){if(t){const i=Vf(t,e,n,s);return t[0](i)}}function Vf(t,e,n,s){return t[1]&&s?Ut(n.ctx.slice(),t[1](s(e))):n.ctx}function El(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function Il(t,e,n,s,i,r){if(i){const o=Vf(e,n,s,r);t.p(o,i)}}function Tl(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Qr(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Yr(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function Qc(t){return t==null?"":t}function Mt(t,e,n){return t.set(n),e}const Bf=typeof window<"u";let wg=Bf?()=>window.performance.now():()=>Date.now(),kl=Bf?t=>requestAnimationFrame(t):fe;const Us=new Set;function jf(t){Us.forEach(e=>{e.c(t)||(Us.delete(e),e.f())}),Us.size!==0&&kl(jf)}function bg(t){let e;return Us.size===0&&kl(jf),{promise:new Promise(n=>{Us.add(e={c:t,f:n})}),abort(){Us.delete(e)}}}function u(t,e){t.appendChild(e)}function qf(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Eg(t){const e=p("style");return Ig(qf(t),e),e.sheet}function Ig(t,e){return u(t.head||t,e),e.sheet}function T(t,e,n){t.insertBefore(e,n||null)}function I(t){t.parentNode.removeChild(t)}function ot(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function b(){return k(" ")}function bn(){return k("")}function x(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Hs(t){return function(e){return e.preventDefault(),t.call(this,e)}}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function dn(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:m(t,s,e[s])}function bt(t,e,n){const s=new Set;for(let i=0;i<t.length;i+=1)t[i].checked&&s.add(t[i].__value);return n||s.delete(e),Array.from(s)}function Hf(t){return t===""?null:+t}function Tg(t){return Array.from(t.childNodes)}function de(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Se(t,e){t.value=e==null?"":e}function tt(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function hn(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function xs(t,e,n){t.classList[n?"add":"remove"](e)}function xf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function Yc(t,e){return new t(e)}const Xr=new Map;let Jr=0;function kg(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Sg(t,e){const n={stylesheet:Eg(e),rules:{}};return Xr.set(t,n),n}function Xc(t,e,n,s,i,r,o,a=0){const l=16.666/s;let c=`{
`;for(let w=0;w<=1;w+=l){const E=e+(n-e)*r(w);c+=w*100+`%{${o(E,1-E)}}
`}const h=c+`100% {${o(n,1-n)}}
}`,f=`__svelte_${kg(h)}_${a}`,d=qf(t),{stylesheet:g,rules:_}=Xr.get(d)||Sg(d,t);_[f]||(_[f]=!0,g.insertRule(`@keyframes ${f} ${h}`,g.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${s}ms linear ${i}ms 1 both`,Jr+=1,f}function Cg(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),Jr-=i,Jr||Ag())}function Ag(){kl(()=>{Jr||(Xr.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&I(e)}),Xr.clear())})}let Li;function Si(t){Li=t}function Ji(){if(!Li)throw new Error("Function called outside component initialization");return Li}function Dg(t){Ji().$$.on_mount.push(t)}function Rg(t){Ji().$$.on_destroy.push(t)}function zf(){const t=Ji();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=xf(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Ci(t,e){return Ji().$$.context.set(t,e),e}function Jn(t){return Ji().$$.context.get(t)}function Ng(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const yi=[],zs=[],Vr=[],Fa=[],Kf=Promise.resolve();let Va=!1;function Gf(){Va||(Va=!0,Kf.then(Wf))}function Og(){return Gf(),Kf}function at(t){Vr.push(t)}function Zr(t){Fa.push(t)}const fa=new Set;let Rr=0;function Wf(){const t=Li;do{for(;Rr<yi.length;){const e=yi[Rr];Rr++,Si(e),Pg(e.$$)}for(Si(null),yi.length=0,Rr=0;zs.length;)zs.pop()();for(let e=0;e<Vr.length;e+=1){const n=Vr[e];fa.has(n)||(fa.add(n),n())}Vr.length=0}while(yi.length);for(;Fa.length;)Fa.pop()();Va=!1,fa.clear(),Si(t)}function Pg(t){if(t.fragment!==null){t.update(),Qe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(at)}}let _i;function Lg(){return _i||(_i=Promise.resolve(),_i.then(()=>{_i=null})),_i}function da(t,e,n){t.dispatchEvent(xf(`${e?"intro":"outro"}${n}`))}const Br=new Set;let Rn;function zt(){Rn={r:0,c:[],p:Rn}}function Kt(){Rn.r||Qe(Rn.c),Rn=Rn.p}function B(t,e){t&&t.i&&(Br.delete(t),t.i(e))}function z(t,e,n,s){if(t&&t.o){if(Br.has(t))return;Br.add(t),Rn.c.push(()=>{Br.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Mg={duration:0};function pn(t,e,n,s){let i=e(t,n),r=s?0:1,o=null,a=null,l=null;function c(){l&&Cg(t,l)}function h(d,g){const _=d.b-r;return g*=Math.abs(_),{a:r,b:d.b,d:_,duration:g,start:d.start,end:d.start+g,group:d.group}}function f(d){const{delay:g=0,duration:_=300,easing:v=Uf,tick:w=fe,css:E}=i||Mg,S={start:wg()+g,b:d};d||(S.group=Rn,Rn.r+=1),o||a?a=S:(E&&(c(),l=Xc(t,r,d,_,g,v,E)),d&&w(0,1),o=h(S,_),at(()=>da(t,d,"start")),bg($=>{if(a&&$>a.start&&(o=h(a,_),a=null,da(t,o.b,"start"),E&&(c(),l=Xc(t,r,o.b,o.duration,0,v,i.css))),o){if($>=o.end)w(r=o.b,1-r),da(t,o.b,"end"),a||(o.b?c():--o.group.r||Qe(o.group.c)),o=null;else if($>=o.start){const P=$-o.start;r=o.a+o.d*v(P/o.duration),w(r,1-r)}}return!!(o||a)}))}return{run(d){Do(i)?Lg().then(()=>{i=i(),f(d)}):f(d)},end(){c(),o=a=null}}}function vn(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(s[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[r]=a}else for(const l in o)i[l]=1}for(const o in s)o in n||(n[o]=void 0);return n}function Ks(t){return typeof t=="object"&&t!==null?t:{}}function eo(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function se(t){t&&t.c()}function ee(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||at(()=>{const o=t.$$.on_mount.map(Ff).filter(Do);t.$$.on_destroy?t.$$.on_destroy.push(...o):Qe(o),t.$$.on_mount=[]}),r.forEach(at)}function te(t,e){const n=t.$$;n.fragment!==null&&(Qe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $g(t,e){t.$$.dirty[0]===-1&&(yi.push(t),Gf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ze(t,e,n,s,i,r,o,a=[-1]){const l=Li;Si(t);const c=t.$$={fragment:null,ctx:[],props:r,update:fe,not_equal:i,bound:Wc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Wc(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...g)=>{const _=g.length?g[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),h&&$g(t,f)),d}):[],c.update(),h=!0,Qe(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const f=Tg(e.target);c.fragment&&c.fragment.l(f),f.forEach(I)}else c.fragment&&c.fragment.c();e.intro&&B(t.$$.fragment),ee(t,e.target,e.anchor,e.customElement),Wf()}Si(l)}class Ke{$destroy(){te(this,1),this.$destroy=fe}$on(e,n){if(!Do(n))return fe;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!yg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Jc=t=>typeof t>"u",Qf=t=>typeof t=="function",Yf=t=>typeof t=="number";function Ug(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Xf(){let t=0;return()=>t++}function Fg(){return Math.random().toString(36).substring(2)}const Zn=typeof window>"u";function Jf(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const Ba=(t,e)=>t?{}:{style:e},Ps=t=>({"aria-hidden":"true",...Ba(t,"display:none;")}),Rs=[];function Vg(t,e){return{subscribe:Lt(t,e).subscribe}}function Lt(t,e=fe){let n;const s=new Set;function i(a){if(Be(t,a)&&(t=a,n)){const l=!Rs.length;for(const c of s)c[1](),Rs.push(c,t);if(l){for(let c=0;c<Rs.length;c+=2)Rs[c][0](Rs[c+1]);Rs.length=0}}}function r(a){i(a(t))}function o(a,l=fe){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||fe),a(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}function Bg(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,r=e.length<2;return Vg(n,o=>{let a=!1;const l=[];let c=0,h=fe;const f=()=>{if(c)return;h();const g=e(s?l[0]:l,o);r?o(g):h=Do(g)?g:fe},d=i.map((g,_)=>wl(g,v=>{l[_]=v,c&=~(1<<_),a&&f()},()=>{c|=1<<_}));return a=!0,f(),function(){Qe(d),h()}})}const Zi=t=>`@@svnav-ctx__${t}`,ja=Zi("LOCATION"),Gs=Zi("ROUTER"),Zf=Zi("ROUTE"),jg=Zi("ROUTE_PARAMS"),qg=Zi("FOCUS_ELEM"),ed=/^:(.+)/,wi=(t,e,n)=>t.substr(e,n),qa=(t,e)=>wi(t,0,e.length)===e,Hg=t=>t==="",xg=t=>ed.test(t),td=t=>t[0]==="*",zg=t=>t.replace(/\*.*$/,""),nd=t=>t.replace(/(^\/+|\/+$)/g,"");function yn(t,e=!1){const n=nd(t).split("/");return e?n.filter(Boolean):n}const pa=(t,e)=>t+(e?`?${e}`:""),Sl=t=>`/${nd(t)}`;function er(...t){const e=s=>yn(s,!0).join("/"),n=t.map(e).join("/");return Sl(n)}const Cl=1,Ro=2,gs=3,Kg=4,sd=5,Gg=6,id=7,Wg=8,Qg=9,rd=10,od=11,Yg={[Cl]:"Link",[Ro]:"Route",[gs]:"Router",[Kg]:"useFocus",[sd]:"useLocation",[Gg]:"useMatch",[id]:"useNavigate",[Wg]:"useParams",[Qg]:"useResolvable",[rd]:"useResolve",[od]:"navigate"},Al=t=>Yg[t];function Xg(t,e){let n;return t===Ro?n=e.path?`path="${e.path}"`:"default":t===Cl?n=`to="${e.to}"`:t===gs&&(n=`basepath="${e.basepath||""}"`),`<${Al(t)} ${n||""} />`}function Jg(t,e,n,s){const i=n&&Xg(s||t,n),r=i?`

Occurred in: ${i}`:"",o=Al(t),a=Qf(e)?e(o):e;return`<${o}> ${a}${r}`}const ad=t=>(...e)=>t(Jg(...e)),ld=ad(t=>{throw new Error(t)}),to=ad(console.warn),Zc=4,Zg=3,e_=2,t_=1,n_=1;function s_(t,e){const n=t.default?0:yn(t.fullPath).reduce((s,i)=>{let r=s;return r+=Zc,Hg(i)?r+=n_:xg(i)?r+=e_:td(i)?r-=Zc+t_:r+=Zg,r},0);return{route:t,score:n,index:e}}function i_(t){return t.map(s_).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function cd(t,e){let n,s;const[i]=e.split("?"),r=yn(i),o=r[0]==="",a=i_(t);for(let l=0,c=a.length;l<c;l++){const{route:h}=a[l];let f=!1;const d={},g=E=>({...h,params:d,uri:E});if(h.default){s=g(e);continue}const _=yn(h.fullPath),v=Math.max(r.length,_.length);let w=0;for(;w<v;w++){const E=_[w],S=r[w];if(!Jc(E)&&td(E)){const P=E==="*"?"*":E.slice(1);d[P]=r.slice(w).map(decodeURIComponent).join("/");break}if(Jc(S)){f=!0;break}const $=ed.exec(E);if($&&!o){const P=decodeURIComponent(S);d[$[1]]=P}else if(E!==S){f=!0;break}}if(!f){n=g(er(...r.slice(0,w)));break}}return n||s||null}function ud(t,e){return cd([t],e)}function r_(t,e){if(qa(t,"/"))return t;const[n,s]=t.split("?"),[i]=e.split("?"),r=yn(n),o=yn(i);if(r[0]==="")return pa(i,s);if(!qa(r[0],".")){const c=o.concat(r).join("/");return pa((i==="/"?"":"/")+c,s)}const a=o.concat(r),l=[];return a.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),pa(`/${l.join("/")}`,s)}function eu(t,e){const{pathname:n,hash:s="",search:i="",state:r}=t,o=yn(e,!0),a=yn(n,!0);for(;o.length;)o[0]!==a[0]&&ld(gs,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:er(...a),hash:s,search:i,state:r}}const tu=t=>t.length===1?"":t,Dl=t=>{const e=t.indexOf("?"),n=t.indexOf("#"),s=e!==-1,i=n!==-1,r=i?tu(wi(t,n)):"",o=i?wi(t,0,n):t,a=s?tu(wi(o,e)):"";return{pathname:(s?wi(o,0,e):o)||"/",search:a,hash:r}},o_=t=>{const{pathname:e,search:n,hash:s}=t;return e+n+s};function a_(t,e,n){return er(n,r_(t,e))}function l_(t,e){const n=Sl(zg(t)),s=yn(n,!0),i=yn(e,!0).slice(0,s.length),r=ud({fullPath:n},er(...i));return r&&r.uri}const ma="POP",c_="PUSH",u_="REPLACE";function ga(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function h_(t){let e=[],n=ga(t),s=ma;const i=(r=e)=>r.forEach(o=>o({location:n,action:s}));return{get location(){return n},listen(r){e.push(r);const o=()=>{n=ga(t),s=ma,i([r])};i([r]);const a=Jf(t,"popstate",o);return()=>{a(),e=e.filter(l=>l!==r)}},navigate(r,o){const{state:a={},replace:l=!1}=o||{};if(s=l?u_:c_,Yf(r))o&&to(od,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=ma,t.history.go(r);else{const c={...a,_key:Fg()};try{t.history[l?"replaceState":"pushState"](c,"",r)}catch{t.location[l?"replace":"assign"](r)}}n=ga(t),i()}}}function _a(t,e){return{...Dl(e),state:t}}function f_(t="/"){let e=0,n=[_a(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(s,i,r){e++,n=n.slice(0,e),n.push(_a(s,r))},replaceState(s,i,r){n[e]=_a(s,r)},go(s){const i=e+s;i<0||i>n.length-1||(e=i)}}}}const d_=!!(!Zn&&window.document&&window.document.createElement),p_=!Zn&&window.location.origin==="null",m_=h_(d_&&!p_?window:f_());let Dn=null,hd=!0;function g_(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const i=n[s],r=Number(i.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function __(t){(!Dn||t.level>Dn.level||t.level===Dn.level&&g_(t.routerId,Dn.routerId))&&(Dn=t)}function v_(){Dn=null}function y_(){hd=!1}function nu(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=Jf(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function w_(t,e){return Number(t.dataset.svnavRouteEnd)===e}function b_(t){return/^H[1-6]$/i.test(t.tagName)}function su(t,e=document){return e.querySelector(t)}function E_(t){let n=su(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!w_(n,t);){if(b_(n))return n;const s=su("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function I_(t){Promise.resolve(qs(t.focusElement)).then(e=>{const n=e||E_(t.id);n||to(gs,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,Ro),!nu(n)&&nu(document.documentElement)})}const T_=(t,e,n)=>(s,i)=>Og().then(()=>{if(!Dn||hd){y_();return}if(s&&I_(Dn.route),t.announcements&&i){const{path:r,fullPath:o,meta:a,params:l,uri:c}=Dn.route,h=t.createAnnouncement({path:r,fullPath:o,meta:a,params:l,uri:c},qs(n));Promise.resolve(h).then(f=>{e.set(f)})}v_()}),iu="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function k_(t){let e,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},Ba(t[6],iu)],i={};for(let r=0;r<s.length;r+=1)i=Ut(i,s[r]);return{c(){e=p("div"),n=k(t[0]),dn(e,i)},m(r,o){T(r,e,o),u(e,n)},p(r,o){o[0]&1&&de(n,r[0]),dn(e,i=vn(s,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},Ba(r[6],iu)]))},d(r){r&&I(e)}}}function S_(t){let e,n,s,i,r,o=[Ps(t[6]),{"data-svnav-router":t[3]}],a={};for(let f=0;f<o.length;f+=1)a=Ut(a,o[f]);const l=t[22].default,c=bl(l,t,t[21],null);let h=t[2]&&t[4]&&t[1].announcements&&k_(t);return{c(){e=p("div"),n=b(),c&&c.c(),s=b(),h&&h.c(),i=bn(),dn(e,a)},m(f,d){T(f,e,d),T(f,n,d),c&&c.m(f,d),T(f,s,d),h&&h.m(f,d),T(f,i,d),r=!0},p(f,d){dn(e,a=vn(o,[Ps(f[6]),{"data-svnav-router":f[3]}])),c&&c.p&&(!r||d[0]&2097152)&&Il(c,l,f,f[21],r?El(l,f[21],d,null):Tl(f[21]),null),f[2]&&f[4]&&f[1].announcements&&h.p(f,d)},i(f){r||(B(c,f),r=!0)},o(f){z(c,f),r=!1},d(f){f&&I(e),f&&I(n),c&&c.d(f),f&&I(s),h&&h.d(f),f&&I(i)}}}const C_=Xf(),ru="/";function A_(t,e,n){let s,i,r,o,a,{$$slots:l={},$$scope:c}=e,{basepath:h=ru}=e,{url:f=null}=e,{history:d=m_}=e,{primary:g=!0}=e,{a11y:_={}}=e,{disableInlineStyles:v=!1}=e;const w={createAnnouncement:A=>`Navigated to ${A.uri}`,announcements:!0,..._},E=h,S=Sl(h),$=Jn(ja),P=Jn(Gs),O=!$,L=C_(),M=g&&!(P&&!P.manageFocus),H=Lt("");We(t,H,A=>n(0,a=A));const N=P?P.disableInlineStyles:v,D=Lt([]);We(t,D,A=>n(20,o=A));const W=Lt(null);We(t,W,A=>n(18,i=A));let U=!1;const X=O?0:P.level+1,K=O?Lt((()=>eu(Zn?Dl(f):d.location,S))()):$;We(t,K,A=>n(17,s=A));const F=Lt(s);We(t,F,A=>n(19,r=A));const oe=T_(w,H,K),R=A=>ae=>ae.filter(be=>be.id!==A);function G(A){if(Zn){if(U)return;const ae=ud(A,s.pathname);if(ae)return U=!0,ae}else D.update(ae=>{const be=R(A.id)(ae);return be.push(A),be})}function ie(A){D.update(R(A))}return!O&&h!==ru&&to(gs,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:h}),O&&(Dg(()=>d.listen(ae=>{const be=eu(ae.location,S);F.set(s),K.set(be)})),Ci(ja,K)),Ci(Gs,{activeRoute:W,registerRoute:G,unregisterRoute:ie,manageFocus:M,level:X,id:L,history:O?d:P.history,basepath:O?S:P.basepath,disableInlineStyles:N}),t.$$set=A=>{"basepath"in A&&n(11,h=A.basepath),"url"in A&&n(12,f=A.url),"history"in A&&n(13,d=A.history),"primary"in A&&n(14,g=A.primary),"a11y"in A&&n(15,_=A.a11y),"disableInlineStyles"in A&&n(16,v=A.disableInlineStyles),"$$scope"in A&&n(21,c=A.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&2048&&h!==E&&to(gs,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&1179648){const A=cd(o,s.pathname);W.set(A)}if(t.$$.dirty[0]&655360&&O){const A=!!s.hash,ae=!A&&M,be=!A||s.pathname!==r.pathname;oe(ae,be)}t.$$.dirty[0]&262144&&M&&i&&i.primary&&__({level:X,routerId:L,route:i})},[a,w,O,L,M,H,N,D,W,K,F,h,f,d,g,_,v,s,i,r,o,c,l]}class Rl extends Ke{constructor(e){super(),ze(this,e,A_,S_,Be,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function tr(t,e,n=Gs,s=gs){Jn(n)||ld(t,r=>`You cannot use ${r} outside of a ${Al(s)}.`,e)}const D_=t=>{const{subscribe:e}=Jn(t);return{subscribe:e}};function fd(){return tr(sd),D_(ja)}function dd(){const{history:t}=Jn(Gs);return t}function pd(){const t=Jn(Zf);return t?Bg(t,e=>e.base):Lt("/")}function md(){tr(rd);const t=pd(),{basepath:e}=Jn(Gs);return s=>a_(s,qs(t),e)}function Nl(){tr(id);const t=md(),{navigate:e}=dd();return(s,i)=>{const r=Yf(s)?s:t(s);return e(r,i)}}const R_=t=>({params:t&16,location:t&8}),ou=t=>({params:Zn?qs(t[10]):t[4],location:t[3],navigate:t[11]});function au(t){let e,n;return e=new Rl({props:{primary:t[1],$$slots:{default:[P_]},$$scope:{ctx:t}}}),{c(){se(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},p(s,i){const r={};i&2&&(r.primary=s[1]),i&528409&&(r.$$scope={dirty:i,ctx:s}),e.$set(r)},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function N_(t){let e;const n=t[18].default,s=bl(n,t,t[19],ou);return{c(){s&&s.c()},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&524312)&&Il(s,n,i,i[19],e?El(n,i[19],r,R_):Tl(i[19]),ou)},i(i){e||(B(s,i),e=!0)},o(i){z(s,i),e=!1},d(i){s&&s.d(i)}}}function O_(t){let e,n,s;const i=[{location:t[3]},{navigate:t[11]},Zn?qs(t[10]):t[4],t[12]];var r=t[0];function o(a){let l={};for(let c=0;c<i.length;c+=1)l=Ut(l,i[c]);return{props:l}}return r&&(e=Yc(r,o())),{c(){e&&se(e.$$.fragment),n=bn()},m(a,l){e&&ee(e,a,l),T(a,n,l),s=!0},p(a,l){const c=l&7192?vn(i,[l&8&&{location:a[3]},l&2048&&{navigate:a[11]},l&1040&&Ks(Zn?qs(a[10]):a[4]),l&4096&&Ks(a[12])]):{};if(r!==(r=a[0])){if(e){zt();const h=e;z(h.$$.fragment,1,0,()=>{te(h,1)}),Kt()}r?(e=Yc(r,o()),se(e.$$.fragment),B(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){s||(e&&B(e.$$.fragment,a),s=!0)},o(a){e&&z(e.$$.fragment,a),s=!1},d(a){a&&I(n),e&&te(e,a)}}}function P_(t){let e,n,s,i;const r=[O_,N_],o=[];function a(l,c){return l[0]!==null?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),s=bn()},m(l,c){o[e].m(l,c),T(l,s,c),i=!0},p(l,c){let h=e;e=a(l),e===h?o[e].p(l,c):(zt(),z(o[h],1,1,()=>{o[h]=null}),Kt(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),B(n,1),n.m(s.parentNode,s))},i(l){i||(B(n),i=!0)},o(l){z(n),i=!1},d(l){o[e].d(l),l&&I(s)}}}function L_(t){let e,n,s,i,r,o=[Ps(t[7]),{"data-svnav-route-start":t[5]}],a={};for(let f=0;f<o.length;f+=1)a=Ut(a,o[f]);let l=t[2]&&au(t),c=[Ps(t[7]),{"data-svnav-route-end":t[5]}],h={};for(let f=0;f<c.length;f+=1)h=Ut(h,c[f]);return{c(){e=p("div"),n=b(),l&&l.c(),s=b(),i=p("div"),dn(e,a),dn(i,h)},m(f,d){T(f,e,d),T(f,n,d),l&&l.m(f,d),T(f,s,d),T(f,i,d),r=!0},p(f,[d]){dn(e,a=vn(o,[Ps(f[7]),{"data-svnav-route-start":f[5]}])),f[2]?l?(l.p(f,d),d&4&&B(l,1)):(l=au(f),l.c(),B(l,1),l.m(s.parentNode,s)):l&&(zt(),z(l,1,1,()=>{l=null}),Kt()),dn(i,h=vn(c,[Ps(f[7]),{"data-svnav-route-end":f[5]}]))},i(f){r||(B(l),r=!0)},o(f){z(l),r=!1},d(f){f&&I(e),f&&I(n),l&&l.d(f),f&&I(s),f&&I(i)}}}const M_=Xf();function $_(t,e,n){let s;const i=["path","component","meta","primary"];let r=Yr(e,i),o,a,l,c,{$$slots:h={},$$scope:f}=e,{path:d=""}=e,{component:g=null}=e,{meta:_={}}=e,{primary:v=!0}=e;tr(Ro,e);const w=M_(),{registerRoute:E,unregisterRoute:S,activeRoute:$,disableInlineStyles:P}=Jn(Gs);We(t,$,U=>n(16,o=U));const O=pd();We(t,O,U=>n(17,l=U));const L=fd();We(t,L,U=>n(3,a=U));const M=Lt(null);let H;const N=Lt(),D=Lt({});We(t,D,U=>n(4,c=U)),Ci(Zf,N),Ci(jg,D),Ci(qg,M);const W=Nl();return Zn||Rg(()=>S(w)),t.$$set=U=>{n(24,e=Ut(Ut({},e),Qr(U))),n(12,r=Yr(e,i)),"path"in U&&n(13,d=U.path),"component"in U&&n(0,g=U.component),"meta"in U&&n(14,_=U.meta),"primary"in U&&n(1,v=U.primary),"$$scope"in U&&n(19,f=U.$$scope)},t.$$.update=()=>{if(t.$$.dirty&155658){const U=d==="",X=er(l,d),J={id:w,path:d,meta:_,default:U,fullPath:U?"":X,base:U?l:l_(X,a.pathname),primary:v,focusElement:M};N.set(J),n(15,H=E(J))}if(t.$$.dirty&98304&&n(2,s=!!(H||o&&o.id===w)),t.$$.dirty&98308&&s){const{params:U}=H||o;D.set(U)}},e=Qr(e),[g,v,s,a,c,w,$,P,O,L,D,W,r,d,_,H,o,l,h,f]}class Qt extends Ke{constructor(e){super(),ze(this,e,$_,L_,Be,{path:13,component:0,meta:14,primary:1})}}function U_(t){let e,n,s,i;const r=t[13].default,o=bl(r,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],l={};for(let c=0;c<a.length;c+=1)l=Ut(l,a[c]);return{c(){e=p("a"),o&&o.c(),dn(e,l)},m(c,h){T(c,e,h),o&&o.m(e,null),n=!0,s||(i=x(e,"click",t[4]),s=!0)},p(c,[h]){o&&o.p&&(!n||h&4096)&&Il(o,r,c,c[12],n?El(r,c[12],h,null):Tl(c[12]),null),dn(e,l=vn(a,[(!n||h&1)&&{href:c[0]},h&4&&c[2],h&2&&c[1]]))},i(c){n||(B(o,c),n=!0)},o(c){z(o,c),n=!1},d(c){c&&I(e),o&&o.d(c),s=!1,i()}}}function F_(t,e,n){let s,i,r,o,a,l;const c=["to","replace","state","getProps"];let h=Yr(e,c),f,{$$slots:d={},$$scope:g}=e,{to:_}=e,{replace:v=!1}=e,{state:w={}}=e,{getProps:E=null}=e;tr(Cl,e);const S=fd();We(t,S,M=>n(11,f=M));const $=zf(),P=md(),{navigate:O}=dd();function L(M){$("click",M),Ug(M)&&(M.preventDefault(),O(s,{state:w,replace:o||v}))}return t.$$set=M=>{n(19,e=Ut(Ut({},e),Qr(M))),n(18,h=Yr(e,c)),"to"in M&&n(5,_=M.to),"replace"in M&&n(6,v=M.replace),"state"in M&&n(7,w=M.state),"getProps"in M&&n(8,E=M.getProps),"$$scope"in M&&n(12,g=M.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,s=P(_,f)),t.$$.dirty&2049&&n(10,i=qa(f.pathname,s)),t.$$.dirty&2049&&n(9,r=s===f.pathname),t.$$.dirty&2049&&(o=Dl(s)===o_(f)),t.$$.dirty&512&&n(2,a=r?{"aria-current":"page"}:{}),n(1,l=(()=>{if(Qf(E)){const M=E({location:f,href:s,isPartiallyCurrent:i,isCurrent:r});return{...h,...M}}return h})())},e=Qr(e),[s,l,a,S,L,_,v,w,E,r,i,f,g,d]}class Ct extends Ke{constructor(e){super(),ze(this,e,F_,U_,Be,{to:5,replace:6,state:7,getProps:8})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const gd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},V_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),s.push(n[h],n[f],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):V_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const g=a<<4&240|c>>2;if(s.push(g),f!==64){const _=c<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},B_=function(t){const e=gd(t);return _d.encodeByteArray(e,!0)},no=function(t){return B_(t).replace(/\./g,"")},vd=function(t){try{return _d.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function j_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function q_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function H_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function x_(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function z_(){return typeof indexedDB=="object"}function K_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function G_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const W_=()=>G_().__FIREBASE_DEFAULTS__,Q_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Y_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vd(t[1]);return e&&JSON.parse(e)},Ol=()=>{try{return W_()||Q_()||Y_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yd=t=>{var e,n;return(n=(e=Ol())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},X_=t=>{const e=yd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},J_=()=>{var t;return(t=Ol())===null||t===void 0?void 0:t.config},wd=t=>{var e;return(e=Ol())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ev(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[no(JSON.stringify(n)),no(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv="FirebaseError";class Bn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=tv,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?nv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bn(i,a,s)}}function nv(t,e){return t.replace(sv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const sv=/\{\$([^}]+)}/g;function iv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function so(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(lu(r)&&lu(o)){if(!so(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function lu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function bi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Ei(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rv(t,e){const n=new ov(t,e);return n.subscribe.bind(n)}class ov{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");av(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=va),i.error===void 0&&(i.error=va),i.complete===void 0&&(i.complete=va);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function av(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function va(){}/**
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
 */function Ft(t){return t&&t._delegate?t._delegate:t}class _s{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Z_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uv(e))try{this.getOrInitializeService({instanceIdentifier:cs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cs){return this.instances.has(e)}getOptions(e=cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=cs){return this.component?this.component.multipleInstances?e:cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cv(t){return t===cs?void 0:t}function uv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(De||(De={}));const fv={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},dv=De.INFO,pv={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},mv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=pv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pl{constructor(e){this.name=e,this._logLevel=dv,this._logHandler=mv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const gv=(t,e)=>e.some(n=>t instanceof n);let cu,uu;function _v(){return cu||(cu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vv(){return uu||(uu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bd=new WeakMap,Ha=new WeakMap,Ed=new WeakMap,ya=new WeakMap,Ll=new WeakMap;function yv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Gn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bd.set(n,t)}).catch(()=>{}),Ll.set(e,t),e}function wv(t){if(Ha.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ha.set(t,e)}let xa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ha.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ed.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bv(t){xa=t(xa)}function Ev(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(wa(this),e,...n);return Ed.set(s,e.sort?e.sort():[e]),Gn(s)}:vv().includes(t)?function(...e){return t.apply(wa(this),e),Gn(bd.get(this))}:function(...e){return Gn(t.apply(wa(this),e))}}function Iv(t){return typeof t=="function"?Ev(t):(t instanceof IDBTransaction&&wv(t),gv(t,_v())?new Proxy(t,xa):t)}function Gn(t){if(t instanceof IDBRequest)return yv(t);if(ya.has(t))return ya.get(t);const e=Iv(t);return e!==t&&(ya.set(t,e),Ll.set(e,t)),e}const wa=t=>Ll.get(t);function Tv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Gn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Gn(o.result),l.oldVersion,l.newVersion,Gn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const kv=["get","getKey","getAll","getAllKeys","count"],Sv=["put","add","delete","clear"],ba=new Map;function hu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ba.get(e))return ba.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Sv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||kv.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ba.set(e,r),r}bv(t=>({...t,get:(e,n,s)=>hu(e,n)||t.get(e,n,s),has:(e,n)=>!!hu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Av(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Av(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const za="@firebase/app",fu="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Pl("@firebase/app"),Dv="@firebase/app-compat",Rv="@firebase/analytics-compat",Nv="@firebase/analytics",Ov="@firebase/app-check-compat",Pv="@firebase/app-check",Lv="@firebase/auth",Mv="@firebase/auth-compat",$v="@firebase/database",Uv="@firebase/database-compat",Fv="@firebase/functions",Vv="@firebase/functions-compat",Bv="@firebase/installations",jv="@firebase/installations-compat",qv="@firebase/messaging",Hv="@firebase/messaging-compat",xv="@firebase/performance",zv="@firebase/performance-compat",Kv="@firebase/remote-config",Gv="@firebase/remote-config-compat",Wv="@firebase/storage",Qv="@firebase/storage-compat",Yv="@firebase/firestore",Xv="@firebase/firestore-compat",Jv="firebase",Zv="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="[DEFAULT]",ey={[za]:"fire-core",[Dv]:"fire-core-compat",[Nv]:"fire-analytics",[Rv]:"fire-analytics-compat",[Pv]:"fire-app-check",[Ov]:"fire-app-check-compat",[Lv]:"fire-auth",[Mv]:"fire-auth-compat",[$v]:"fire-rtdb",[Uv]:"fire-rtdb-compat",[Fv]:"fire-fn",[Vv]:"fire-fn-compat",[Bv]:"fire-iid",[jv]:"fire-iid-compat",[qv]:"fire-fcm",[Hv]:"fire-fcm-compat",[xv]:"fire-perf",[zv]:"fire-perf-compat",[Kv]:"fire-rc",[Gv]:"fire-rc-compat",[Wv]:"fire-gcs",[Qv]:"fire-gcs-compat",[Yv]:"fire-fst",[Xv]:"fire-fst-compat","fire-js":"fire-js",[Jv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new Map,Ga=new Map;function ty(t,e){try{t.container.addComponent(e)}catch(n){vs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ws(t){const e=t.name;if(Ga.has(e))return vs.debug(`There were multiple attempts to register component ${e}.`),!1;Ga.set(e,t);for(const n of io.values())ty(n,t);return!0}function Ml(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wn=new nr("app","Firebase",ny);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=Zv;function Id(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ka,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Wn.create("bad-app-name",{appName:String(i)});if(n||(n=J_()),!n)throw Wn.create("no-options");const r=io.get(i);if(r){if(so(n,r.options)&&so(s,r.config))return r;throw Wn.create("duplicate-app",{appName:i})}const o=new hv(i);for(const l of Ga.values())o.addComponent(l);const a=new sy(n,s,o);return io.set(i,a),a}function Td(t=Ka){const e=io.get(t);if(!e&&t===Ka)return Id();if(!e)throw Wn.create("no-app",{appName:t});return e}function Qn(t,e,n){var s;let i=(s=ey[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vs.warn(a.join(" "));return}Ws(new _s(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const iy="firebase-heartbeat-database",ry=1,Mi="firebase-heartbeat-store";let Ea=null;function kd(){return Ea||(Ea=Tv(iy,ry,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mi)}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),Ea}async function oy(t){var e;try{return(await kd()).transaction(Mi).objectStore(Mi).get(Sd(t))}catch(n){if(n instanceof Bn)vs.warn(n.message);else{const s=Wn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});vs.warn(s.message)}}}async function du(t,e){var n;try{const i=(await kd()).transaction(Mi,"readwrite");return await i.objectStore(Mi).put(e,Sd(t)),i.done}catch(s){if(s instanceof Bn)vs.warn(s.message);else{const i=Wn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});vs.warn(i.message)}}}function Sd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ay=1024,ly=30*24*60*60*1e3;class cy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ly}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pu(),{heartbeatsToSend:n,unsentEntries:s}=uy(this._heartbeatsCache.heartbeats),i=no(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function pu(){return new Date().toISOString().substring(0,10)}function uy(t,e=ay){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),mu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class hy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z_()?K_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return du(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return du(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mu(t){return no(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t){Ws(new _s("platform-logger",e=>new Cv(e),"PRIVATE")),Ws(new _s("heartbeat",e=>new cy(e),"PRIVATE")),Qn(za,fu,t),Qn(za,fu,"esm2017"),Qn("fire-js","")}fy("");var dy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z,$l=$l||{},me=dy||self;function ro(){}function No(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function rr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function py(t){return Object.prototype.hasOwnProperty.call(t,Ia)&&t[Ia]||(t[Ia]=++my)}var Ia="closure_uid_"+(1e9*Math.random()>>>0),my=0;function gy(t,e,n){return t.call.apply(t.bind,arguments)}function _y(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Rt=gy:Rt=_y,Rt.apply(null,arguments)}function Nr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function kt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function is(){this.s=this.s,this.o=this.o}var vy=0;is.prototype.s=!1;is.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vy!=0)&&py(this)};is.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ul(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function gu(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(No(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Nt.prototype.h=function(){this.defaultPrevented=!0};var yy=function(){if(!me.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{me.addEventListener("test",ro,e),me.removeEventListener("test",ro,e)}catch{}return t}();function oo(t){return/^[\s\xa0]*$/.test(t)}var _u=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ta(t,e){return t<e?-1:t>e?1:0}function Oo(){var t=me.navigator;return t&&(t=t.userAgent)?t:""}function fn(t){return Oo().indexOf(t)!=-1}function Fl(t){return Fl[" "](t),t}Fl[" "]=ro;function wy(t){var e=Iy;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var by=fn("Opera"),Qs=fn("Trident")||fn("MSIE"),Ad=fn("Edge"),Wa=Ad||Qs,Dd=fn("Gecko")&&!(Oo().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge"))&&!(fn("Trident")||fn("MSIE"))&&!fn("Edge"),Ey=Oo().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge");function Rd(){var t=me.document;return t?t.documentMode:void 0}var ao;e:{var ka="",Sa=function(){var t=Oo();if(Dd)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ad)return/Edge\/([\d\.]+)/.exec(t);if(Qs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ey)return/WebKit\/(\S+)/.exec(t);if(by)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Sa&&(ka=Sa?Sa[1]:""),Qs){var Ca=Rd();if(Ca!=null&&Ca>parseFloat(ka)){ao=String(Ca);break e}}ao=ka}var Iy={};function Ty(){return wy(function(){let t=0;const e=_u(String(ao)).split("."),n=_u("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ta(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ta(i[2].length==0,r[2].length==0)||Ta(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Qa;if(me.document&&Qs){var vu=Rd();Qa=vu||parseInt(ao,10)||void 0}else Qa=void 0;var ky=Qa;function $i(t,e){if(Nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Dd){e:{try{Fl(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Sy[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$i.X.h.call(this)}}kt($i,Nt);var Sy={2:"touch",3:"pen",4:"mouse"};$i.prototype.h=function(){$i.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var or="closure_listenable_"+(1e6*Math.random()|0),Cy=0;function Ay(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Cy,this.ba=this.ea=!1}function Po(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Vl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Nd(t){const e={};for(const n in t)e[n]=t[n];return e}const yu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Od(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<yu.length;r++)n=yu[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Lo(t){this.src=t,this.g={},this.h=0}Lo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Xa(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Ay(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Ya(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Cd(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Po(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xa(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Bl="closure_lm_"+(1e6*Math.random()|0),Aa={};function Pd(t,e,n,s,i){if(s&&s.once)return Md(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Pd(t,e[r],n,s,i);return null}return n=Hl(n),t&&t[or]?t.N(e,n,rr(s)?!!s.capture:!!s,i):Ld(t,e,n,!1,s,i)}function Ld(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=rr(i)?!!i.capture:!!i,a=ql(t);if(a||(t[Bl]=a=new Lo(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Dy(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)yy||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ud(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Dy(){function t(n){return e.call(t.src,t.listener,n)}const e=Ry;return t}function Md(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Md(t,e[r],n,s,i);return null}return n=Hl(n),t&&t[or]?t.O(e,n,rr(s)?!!s.capture:!!s,i):Ld(t,e,n,!0,s,i)}function $d(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)$d(t,e[r],n,s,i);else s=rr(s)?!!s.capture:!!s,n=Hl(n),t&&t[or]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Xa(r,n,s,i),-1<n&&(Po(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ql(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xa(e,n,s,i)),(n=-1<t?e[t]:null)&&jl(n))}function jl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[or])Ya(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ud(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ql(e))?(Ya(n,t),n.h==0&&(n.src=null,e[Bl]=null)):Po(t)}}}function Ud(t){return t in Aa?Aa[t]:Aa[t]="on"+t}function Ry(t,e){if(t.ba)t=!0;else{e=new $i(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&jl(t),t=n.call(s,e)}return t}function ql(t){return t=t[Bl],t instanceof Lo?t:null}var Da="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hl(t){return typeof t=="function"?t:(t[Da]||(t[Da]=function(e){return t.handleEvent(e)}),t[Da])}function yt(){is.call(this),this.i=new Lo(this),this.P=this,this.I=null}kt(yt,is);yt.prototype[or]=!0;yt.prototype.removeEventListener=function(t,e,n,s){$d(this,t,e,n,s)};function Tt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Nt(e,t);else if(e instanceof Nt)e.target=e.target||t;else{var i=e;e=new Nt(s,t),Od(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Or(o,s,!0,e)&&i}if(o=e.g=t,i=Or(o,s,!0,e)&&i,i=Or(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Or(o,s,!1,e)&&i}yt.prototype.M=function(){if(yt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Po(n[s]);delete t.g[e],t.h--}}this.I=null};yt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};yt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Or(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Ya(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var xl=me.JSON.stringify;function Ny(){var t=Bd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Oy{constructor(){this.h=this.g=null}add(e,n){const s=Fd.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Fd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Py,t=>t.reset());class Py{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ly(t){me.setTimeout(()=>{throw t},0)}function Vd(t,e){Ja||My(),Za||(Ja(),Za=!0),Bd.add(t,e)}var Ja;function My(){var t=me.Promise.resolve(void 0);Ja=function(){t.then($y)}}var Za=!1,Bd=new Oy;function $y(){for(var t;t=Ny();){try{t.h.call(t.g)}catch(n){Ly(n)}var e=Fd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Za=!1}function Mo(t,e){yt.call(this),this.h=t||1,this.g=e||me,this.j=Rt(this.lb,this),this.l=Date.now()}kt(Mo,yt);Z=Mo.prototype;Z.ca=!1;Z.R=null;Z.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Tt(this,"tick"),this.ca&&(zl(this),this.start()))}};Z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Z.M=function(){Mo.X.M.call(this),zl(this),delete this.g};function Kl(t,e,n){if(typeof t=="function")n&&(t=Rt(t,n));else if(t&&typeof t.handleEvent=="function")t=Rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:me.setTimeout(t,e||0)}function jd(t){t.g=Kl(()=>{t.g=null,t.i&&(t.i=!1,jd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Uy extends is{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:jd(this)}M(){super.M(),this.g&&(me.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ui(t){is.call(this),this.h=t,this.g={}}kt(Ui,is);var wu=[];function qd(t,e,n,s){Array.isArray(n)||(n&&(wu[0]=n.toString()),n=wu);for(var i=0;i<n.length;i++){var r=Pd(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Hd(t){Vl(t.g,function(e,n){this.g.hasOwnProperty(n)&&jl(e)},t),t.g={}}Ui.prototype.M=function(){Ui.X.M.call(this),Hd(this)};Ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $o(){this.g=!0}$o.prototype.Aa=function(){this.g=!1};function Fy(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Vy(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Ls(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+jy(t,n)+(s?" "+s:"")})}function By(t,e){t.info(function(){return"TIMEOUT: "+e})}$o.prototype.info=function(){};function jy(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xl(n)}catch{return e}}var ks={},bu=null;function Uo(){return bu=bu||new yt}ks.Pa="serverreachability";function xd(t){Nt.call(this,ks.Pa,t)}kt(xd,Nt);function Fi(t){const e=Uo();Tt(e,new xd(e))}ks.STAT_EVENT="statevent";function zd(t,e){Nt.call(this,ks.STAT_EVENT,t),this.stat=e}kt(zd,Nt);function $t(t){const e=Uo();Tt(e,new zd(e,t))}ks.Qa="timingevent";function Kd(t,e){Nt.call(this,ks.Qa,t),this.size=e}kt(Kd,Nt);function ar(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return me.setTimeout(function(){t()},e)}var Fo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Gd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Gl(){}Gl.prototype.h=null;function Eu(t){return t.h||(t.h=t.i())}function Wd(){}var lr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Wl(){Nt.call(this,"d")}kt(Wl,Nt);function Ql(){Nt.call(this,"c")}kt(Ql,Nt);var el;function Vo(){}kt(Vo,Gl);Vo.prototype.g=function(){return new XMLHttpRequest};Vo.prototype.i=function(){return{}};el=new Vo;function cr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Ui(this),this.O=qy,t=Wa?125:void 0,this.T=new Mo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Qd}function Qd(){this.i=null,this.g="",this.h=!1}var qy=45e3,tl={},lo={};Z=cr.prototype;Z.setTimeout=function(t){this.O=t};function nl(t,e,n){t.K=1,t.v=jo(Mn(e)),t.s=n,t.P=!0,Yd(t,null)}function Yd(t,e){t.F=Date.now(),ur(t),t.A=Mn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),ip(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Qd,t.g=kp(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Uy(Rt(t.La,t,t.g),t.N)),qd(t.S,t.g,"readystatechange",t.ib),e=t.H?Nd(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Fi(),Fy(t.j,t.u,t.A,t.m,t.U,t.s)}Z.ib=function(t){t=t.target;const e=this.L;e&&Nn(t)==3?e.l():this.La(t)};Z.La=function(t){try{if(t==this.g)e:{const h=Nn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>h)&&(h!=3||Wa||this.g&&(this.h.h||this.g.fa()||Su(this.g)))){this.I||h!=4||e==7||(e==8||0>=f?Fi(3):Fi(2)),Bo(this);var n=this.g.aa();this.Y=n;t:if(Xd(this)){var s=Su(this.g);t="";var i=s.length,r=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){us(this),Ai(this);var o="";break t}this.h.i=new me.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Vy(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oo(a)){var c=a;break t}}c=null}if(n=c)Ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,sl(this,n);else{this.i=!1,this.o=3,$t(12),us(this),Ai(this);break e}}this.P?(Jd(this,h,o),Wa&&this.i&&h==3&&(qd(this.S,this.T,"tick",this.hb),this.T.start())):(Ls(this.j,this.m,o,null),sl(this,o)),h==4&&us(this),this.i&&!this.I&&(h==4?bp(this.l,this):(this.i=!1,ur(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,$t(12)):(this.o=0,$t(13)),us(this),Ai(this)}}}catch{}finally{}};function Xd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Jd(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Hy(t,n),i==lo){e==4&&(t.o=4,$t(14),s=!1),Ls(t.j,t.m,null,"[Incomplete Response]");break}else if(i==tl){t.o=4,$t(15),Ls(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ls(t.j,t.m,i,null),sl(t,i);Xd(t)&&i!=lo&&i!=tl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,$t(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),nc(e),e.K=!0,$t(11))):(Ls(t.j,t.m,n,"[Invalid Chunked Response]"),us(t),Ai(t))}Z.hb=function(){if(this.g){var t=Nn(this.g),e=this.g.fa();this.C<e.length&&(Bo(this),Jd(this,t,e),this.i&&t!=4&&ur(this))}};function Hy(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?lo:(n=Number(e.substring(n,s)),isNaN(n)?tl:(s+=1,s+n>e.length?lo:(e=e.substr(s,n),t.C=s+n,e)))}Z.cancel=function(){this.I=!0,us(this)};function ur(t){t.V=Date.now()+t.O,Zd(t,t.O)}function Zd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ar(Rt(t.gb,t),e)}function Bo(t){t.B&&(me.clearTimeout(t.B),t.B=null)}Z.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(By(this.j,this.A),this.K!=2&&(Fi(),$t(17)),us(this),this.o=2,Ai(this)):Zd(this,this.V-t)};function Ai(t){t.l.G==0||t.I||bp(t.l,t)}function us(t){Bo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,zl(t.T),Hd(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function sl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||il(n.h,t))){if(!t.J&&il(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ho(n),xo(n);else break e;tc(n),$t(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ar(Rt(n.cb,n),6e3));if(1>=ap(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else hs(n,11)}else if((t.J||n.g==t)&&ho(n),!oo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const h=c[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const f=c[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=s.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Yl(r,r.h),r.h=null))}if(s.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,He(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Tp(s,s.H?s.ka:null,s.V),o.J){lp(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Bo(a),ur(a)),s.g=o}else yp(s);0<n.i.length&&zo(n)}else c[0]!="stop"&&c[0]!="close"||hs(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?hs(n,7):ec(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Fi(4)}catch{}}function xy(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(No(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function zy(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(No(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function ep(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(No(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=zy(t),s=xy(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ky(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ds(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ds){this.h=e!==void 0?e:t.h,co(this,t.j),this.s=t.s,this.g=t.g,uo(this,t.m),this.l=t.l,e=t.i;var n=new Vi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Iu(this,n),this.o=t.o}else t&&(n=String(t).match(tp))?(this.h=!!e,co(this,n[1]||"",!0),this.s=Ii(n[2]||""),this.g=Ii(n[3]||"",!0),uo(this,n[4]),this.l=Ii(n[5]||"",!0),Iu(this,n[6]||"",!0),this.o=Ii(n[7]||"")):(this.h=!!e,this.i=new Vi(null,this.h))}ds.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ti(e,Tu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ti(e,Tu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ti(n,n.charAt(0)=="/"?Qy:Wy,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ti(n,Xy)),t.join("")};function Mn(t){return new ds(t)}function co(t,e,n){t.j=n?Ii(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function uo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Iu(t,e,n){e instanceof Vi?(t.i=e,Jy(t.i,t.h)):(n||(e=Ti(e,Yy)),t.i=new Vi(e,t.h))}function He(t,e,n){t.i.set(e,n)}function jo(t){return He(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ii(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ti(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Gy),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Gy(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Tu=/[#\/\?@]/g,Wy=/[#\?:]/g,Qy=/[#\?]/g,Yy=/[#\?@]/g,Xy=/#/g;function Vi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rs(t){t.g||(t.g=new Map,t.h=0,t.i&&Ky(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Z=Vi.prototype;Z.add=function(t,e){rs(this),this.i=null,t=ni(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function np(t,e){rs(t),e=ni(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sp(t,e){return rs(t),e=ni(t,e),t.g.has(e)}Z.forEach=function(t,e){rs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};Z.oa=function(){rs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};Z.W=function(t){rs(this);let e=[];if(typeof t=="string")sp(this,t)&&(e=e.concat(this.g.get(ni(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Z.set=function(t,e){return rs(this),this.i=null,t=ni(this,t),sp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function ip(t,e,n){np(t,e),0<n.length&&(t.i=null,t.g.set(ni(t,e),Ul(n)),t.h+=n.length)}Z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function ni(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Jy(t,e){e&&!t.j&&(rs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(np(this,s),ip(this,i,n))},t)),t.j=e}var Zy=class{constructor(t,e){this.h=t,this.g=e}};function rp(t){this.l=t||e0,me.PerformanceNavigationTiming?(t=me.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(me.g&&me.g.Ga&&me.g.Ga()&&me.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var e0=10;function op(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ap(t){return t.h?1:t.g?t.g.size:0}function il(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yl(t,e){t.g?t.g.add(e):t.h=e}function lp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}rp.prototype.cancel=function(){if(this.i=cp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ul(t.i)}function Xl(){}Xl.prototype.stringify=function(t){return me.JSON.stringify(t,void 0)};Xl.prototype.parse=function(t){return me.JSON.parse(t,void 0)};function t0(){this.g=new Xl}function n0(t,e,n){const s=n||"";try{ep(t,function(i,r){let o=i;rr(i)&&(o=xl(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function s0(t,e){const n=new $o;if(me.Image){const s=new Image;s.onload=Nr(Pr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Nr(Pr,n,s,"TestLoadImage: error",!1,e),s.onabort=Nr(Pr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Nr(Pr,n,s,"TestLoadImage: timeout",!1,e),me.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Pr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function hr(t){this.l=t.ac||null,this.j=t.jb||!1}kt(hr,Gl);hr.prototype.g=function(){return new qo(this.l,this.j)};hr.prototype.i=function(t){return function(){return t}}({});function qo(t,e){yt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Jl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}kt(qo,yt);var Jl=0;Z=qo.prototype;Z.open=function(t,e){if(this.readyState!=Jl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bi(this)};Z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||me).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fr(this)),this.readyState=Jl};Z.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bi(this)),this.g&&(this.readyState=3,Bi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof me.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;up(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function up(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Z.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fr(this):Bi(this),this.readyState==3&&up(this)}};Z.Va=function(t){this.g&&(this.response=this.responseText=t,fr(this))};Z.Ua=function(t){this.g&&(this.response=t,fr(this))};Z.ga=function(){this.g&&fr(this)};function fr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bi(t)}Z.setRequestHeader=function(t,e){this.v.append(t,e)};Z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Bi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var i0=me.JSON.parse;function Ye(t){yt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hp,this.K=this.L=!1}kt(Ye,yt);var hp="",r0=/^https?$/i,o0=["POST","PUT"];Z=Ye.prototype;Z.Ka=function(t){this.L=t};Z.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():el.g(),this.C=this.u?Eu(this.u):Eu(el),this.g.onreadystatechange=Rt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){ku(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=me.FormData&&t instanceof me.FormData,!(0<=Cd(o0,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pp(this),0<this.B&&((this.K=a0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Rt(this.qa,this)):this.A=Kl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){ku(this,r)}};function a0(t){return Qs&&Ty()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Z.qa=function(){typeof $l<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Tt(this,"timeout"),this.abort(8))};function ku(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fp(t),Ho(t)}function fp(t){t.D||(t.D=!0,Tt(t,"complete"),Tt(t,"error"))}Z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Tt(this,"complete"),Tt(this,"abort"),Ho(this))};Z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ho(this,!0)),Ye.X.M.call(this)};Z.Ha=function(){this.s||(this.F||this.v||this.l?dp(this):this.fb())};Z.fb=function(){dp(this)};function dp(t){if(t.h&&typeof $l<"u"&&(!t.C[1]||Nn(t)!=4||t.aa()!=2)){if(t.v&&Nn(t)==4)Kl(t.Ha,0,t);else if(Tt(t,"readystatechange"),Nn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(tp)[1]||null;if(!i&&me.self&&me.self.location){var r=me.self.location.protocol;i=r.substr(0,r.length-1)}s=!r0.test(i?i.toLowerCase():"")}n=s}if(n)Tt(t,"complete"),Tt(t,"success");else{t.m=6;try{var o=2<Nn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",fp(t)}}finally{Ho(t)}}}}function Ho(t,e){if(t.g){pp(t);const n=t.g,s=t.C[0]?ro:null;t.g=null,t.C=null,e||Tt(t,"ready");try{n.onreadystatechange=s}catch{}}}function pp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(me.clearTimeout(t.A),t.A=null)}function Nn(t){return t.g?t.g.readyState:0}Z.aa=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}};Z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Z.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),i0(e)}};function Su(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Z.Ea=function(){return this.m};Z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mp(t){let e="";return Vl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Zl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=mp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):He(t,e,n))}function vi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gp(t){this.Ca=0,this.i=[],this.j=new $o,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=vi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=vi("baseRetryDelayMs",5e3,t),this.bb=vi("retryDelaySeedMs",1e4,t),this.$a=vi("forwardChannelMaxRetries",2,t),this.ta=vi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new rp(t&&t.concurrentRequestLimit),this.Fa=new t0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Z=gp.prototype;Z.ma=8;Z.G=1;function ec(t){if(_p(t),t.G==3){var e=t.U++,n=Mn(t.F);He(n,"SID",t.I),He(n,"RID",e),He(n,"TYPE","terminate"),dr(t,n),e=new cr(t,t.j,e,void 0),e.K=2,e.v=jo(Mn(n)),n=!1,me.navigator&&me.navigator.sendBeacon&&(n=me.navigator.sendBeacon(e.v.toString(),"")),!n&&me.Image&&(new Image().src=e.v,n=!0),n||(e.g=kp(e.l,null),e.g.da(e.v)),e.F=Date.now(),ur(e)}Ip(t)}function xo(t){t.g&&(nc(t),t.g.cancel(),t.g=null)}function _p(t){xo(t),t.u&&(me.clearTimeout(t.u),t.u=null),ho(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&me.clearTimeout(t.m),t.m=null)}function zo(t){op(t.h)||t.m||(t.m=!0,Vd(t.Ja,t),t.C=0)}function l0(t,e){return ap(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ar(Rt(t.Ja,t,e),Ep(t,t.C)),t.C++,!0)}Z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new cr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Nd(r),Od(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vp(this,i,e),n=Mn(this.F),He(n,"RID",t),He(n,"CVER",22),this.D&&He(n,"X-HTTP-Session-Id",this.D),dr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(mp(r)))+"&"+e:this.o&&Zl(n,this.o,r)),Yl(this.h,i),this.Ya&&He(n,"TYPE","init"),this.O?(He(n,"$req",e),He(n,"SID","null"),i.Z=!0,nl(i,n,null)):nl(i,n,e),this.G=2}}else this.G==3&&(t?Cu(this,t):this.i.length==0||op(this.h)||Cu(this))};function Cu(t,e){var n;e?n=e.m:n=t.U++;const s=Mn(t.F);He(s,"SID",t.I),He(s,"RID",n),He(s,"AID",t.T),dr(t,s),t.o&&t.s&&Zl(s,t.o,t.s),n=new cr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=vp(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Yl(t.h,n),nl(n,s,e)}function dr(t,e){t.ia&&Vl(t.ia,function(n,s){He(e,s,n)}),t.l&&ep({},function(n,s){He(e,s,n)})}function vp(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Rt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const h=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{n0(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function yp(t){t.g||t.u||(t.Z=1,Vd(t.Ia,t),t.A=0)}function tc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ar(Rt(t.Ia,t),Ep(t,t.A)),t.A++,!0)}Z.Ia=function(){if(this.u=null,wp(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ar(Rt(this.eb,this),t)}};Z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,$t(10),xo(this),wp(this))};function nc(t){t.B!=null&&(me.clearTimeout(t.B),t.B=null)}function wp(t){t.g=new cr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Mn(t.sa);He(e,"RID","rpc"),He(e,"SID",t.I),He(e,"CI",t.L?"0":"1"),He(e,"AID",t.T),He(e,"TYPE","xmlhttp"),dr(t,e),t.o&&t.s&&Zl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=jo(Mn(e)),n.s=null,n.P=!0,Yd(n,t)}Z.cb=function(){this.v!=null&&(this.v=null,xo(this),tc(this),$t(19))};function ho(t){t.v!=null&&(me.clearTimeout(t.v),t.v=null)}function bp(t,e){var n=null;if(t.g==e){ho(t),nc(t),t.g=null;var s=2}else if(il(t.h,e))n=e.D,lp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Uo(),Tt(s,new Kd(s,n)),zo(t)}else yp(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&l0(t,e)||s==2&&tc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:hs(t,5);break;case 4:hs(t,10);break;case 3:hs(t,6);break;default:hs(t,2)}}}function Ep(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function hs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Rt(t.kb,t);n||(n=new ds("//www.google.com/images/cleardot.gif"),me.location&&me.location.protocol=="http"||co(n,"https"),jo(n)),s0(n.toString(),s)}else $t(2);t.G=0,t.l&&t.l.va(e),Ip(t),_p(t)}Z.kb=function(t){t?(this.j.info("Successfully pinged google.com"),$t(2)):(this.j.info("Failed to ping google.com"),$t(1))};function Ip(t){if(t.G=0,t.la=[],t.l){const e=cp(t.h);(e.length!=0||t.i.length!=0)&&(gu(t.la,e),gu(t.la,t.i),t.h.i.length=0,Ul(t.i),t.i.length=0),t.l.ua()}}function Tp(t,e,n){var s=n instanceof ds?Mn(n):new ds(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),uo(s,s.m);else{var i=me.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ds(null,void 0);s&&co(r,s),e&&(r.g=e),i&&uo(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&He(s,n,e),He(s,"VER",t.ma),dr(t,s),s}function kp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ye(new hr({jb:!0})):new Ye(t.ra),e.Ka(t.H),e}function Sp(){}Z=Sp.prototype;Z.xa=function(){};Z.wa=function(){};Z.va=function(){};Z.ua=function(){};Z.Ra=function(){};function fo(){if(Qs&&!(10<=Number(ky)))throw Error("Environmental error: no available transport.")}fo.prototype.g=function(t,e){return new Gt(t,e)};function Gt(t,e){yt.call(this),this.g=new gp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!oo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!oo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new si(this)}kt(Gt,yt);Gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;$t(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Tp(t,null,t.V),zo(t)};Gt.prototype.close=function(){ec(this.g)};Gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xl(t),t=n);e.i.push(new Zy(e.ab++,t)),e.G==3&&zo(e)};Gt.prototype.M=function(){this.g.l=null,delete this.j,ec(this.g),delete this.g,Gt.X.M.call(this)};function Cp(t){Wl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}kt(Cp,Wl);function Ap(){Ql.call(this),this.status=1}kt(Ap,Ql);function si(t){this.g=t}kt(si,Sp);si.prototype.xa=function(){Tt(this.g,"a")};si.prototype.wa=function(t){Tt(this.g,new Cp(t))};si.prototype.va=function(t){Tt(this.g,new Ap)};si.prototype.ua=function(){Tt(this.g,"b")};fo.prototype.createWebChannel=fo.prototype.g;Gt.prototype.send=Gt.prototype.u;Gt.prototype.open=Gt.prototype.m;Gt.prototype.close=Gt.prototype.close;Fo.NO_ERROR=0;Fo.TIMEOUT=8;Fo.HTTP_ERROR=6;Gd.COMPLETE="complete";Wd.EventType=lr;lr.OPEN="a";lr.CLOSE="b";lr.ERROR="c";lr.MESSAGE="d";yt.prototype.listen=yt.prototype.N;Ye.prototype.listenOnce=Ye.prototype.O;Ye.prototype.getLastError=Ye.prototype.Oa;Ye.prototype.getLastErrorCode=Ye.prototype.Ea;Ye.prototype.getStatus=Ye.prototype.aa;Ye.prototype.getResponseJson=Ye.prototype.Sa;Ye.prototype.getResponseText=Ye.prototype.fa;Ye.prototype.send=Ye.prototype.da;Ye.prototype.setWithCredentials=Ye.prototype.Ka;var c0=function(){return new fo},u0=function(){return Uo()},Ra=Fo,h0=Gd,f0=ks,Au={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},d0=hr,Lr=Wd,p0=Ye;const Du="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Pl("@firebase/firestore");function Ru(){return ys.logLevel}function re(t,...e){if(ys.logLevel<=De.DEBUG){const n=e.map(sc);ys.debug(`Firestore (${ii}): ${t}`,...n)}}function $n(t,...e){if(ys.logLevel<=De.ERROR){const n=e.map(sc);ys.error(`Firestore (${ii}): ${t}`,...n)}}function rl(t,...e){if(ys.logLevel<=De.WARN){const n=e.map(sc);ys.warn(`Firestore (${ii}): ${t}`,...n)}}function sc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ve(t="Unexpected state"){const e=`FIRESTORE (${ii}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function Me(t,e){t||ve()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class m0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class g0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _0{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Yn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string"),new Dp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new At(e)}}class v0{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=At.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Me(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class y0{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new v0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class w0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.A=n.token,new w0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=E0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Ne(t,e){return t<e?-1:t>e?1:0}function Ys(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ue(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ue(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ue(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new lt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new lt(0,0))}static max(){return new Ee(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,s){n===void 0?n=0:n>e.length&&ve(),s===void 0?s=e.length-n:s>e.length-n&&ve(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ji.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ji?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends ji{construct(e,n,s){return new xe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(j.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const I0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends ji{construct(e,n,s){return new Dt(e,n,s)}static isValidIdentifier(e){return I0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ue(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ue(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ue(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ue(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(n)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(xe.fromString(e))}static fromName(e){return new ce(xe.fromString(e).popFirst(5))}static empty(){return new ce(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new xe(e.slice()))}}function T0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Ee.fromTimestamp(s===1e9?new lt(n+1,0):new lt(n,s));return new es(i,ce.empty(),e)}function k0(t){return new es(t.readTime,t.key,-1)}class es{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new es(Ee.min(),ce.empty(),-1)}static max(){return new es(Ee.max(),ce.empty(),-1)}}function S0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:Ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class A0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==C0)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,s)=>{n(e)})}static reject(e){return new q((n,s)=>{s(e)})}static waitFor(e){return new q((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=q.resolve(!1);for(const s of e)n=n.next(i=>i?q.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new q((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new q((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function mr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ic{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Np(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ic.at=-1;class ut{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new ut(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mr(this.root,e,this.comparator,!0)}}class Mr{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Et.RED,this.left=i!=null?i:Et.EMPTY,this.right=r!=null?r:Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Et(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Et.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ve();const e=this.left.check();if(e!==this.right.check())throw ve();return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw ve()}get value(){throw ve()}get color(){throw ve()}get left(){throw ve()}get right(){throw ve()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ou(this.data.getIterator())}getIteratorFrom(e){return new Ou(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class Ou{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new ct(Dt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ys(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const D0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ts(t){if(Me(!!t),typeof t=="string"){let e=0;const n=D0.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xs(t){return typeof t=="string"?Pt.fromBase64String(t):Pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pp(t){const e=t.mapValue.fields.__previous_value__;return Op(e)?Pp(e):e}function qi(t){const e=ts(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Hi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hi&&e.projectId===this.projectId&&e.database===this.database}}function Ko(t){return t==null}function po(t){return t===0&&1/t==-1/0}function N0(t){return typeof t=="number"&&Number.isInteger(t)&&!po(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ws(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Op(t)?4:O0(t)?9007199254740991:10:ve()}function wn(t,e){if(t===e)return!0;const n=ws(t);if(n!==ws(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qi(t).isEqual(qi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ts(s.timestampValue),o=ts(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Xs(s.bytesValue).isEqual(Xs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return st(s.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return st(s.integerValue)===st(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=st(s.doubleValue),o=st(i.doubleValue);return r===o?po(r)===po(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ys(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Nu(r)!==Nu(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!wn(r[a],o[a])))return!1;return!0}(t,e);default:return ve()}}function xi(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function Js(t,e){if(t===e)return 0;const n=ws(t),s=ws(e);if(n!==s)return Ne(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ne(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=st(i.integerValue||i.doubleValue),a=st(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Pu(t.timestampValue,e.timestampValue);case 4:return Pu(qi(t),qi(e));case 5:return Ne(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Xs(i),a=Xs(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Ne(o[l],a[l]);if(c!==0)return c}return Ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Ne(st(i.latitude),st(r.latitude));return o!==0?o:Ne(st(i.longitude),st(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Js(o[l],a[l]);if(c)return c}return Ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===$r.mapValue&&r===$r.mapValue)return 0;if(i===$r.mapValue)return 1;if(r===$r.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const f=Ne(a[h],c[h]);if(f!==0)return f;const d=Js(o[a[h]],l[c[h]]);if(d!==0)return d}return Ne(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ve()}}function Pu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ne(t,e);const n=ts(t),s=ts(e),i=Ne(n.seconds,s.seconds);return i!==0?i:Ne(n.nanos,s.nanos)}function Fs(t){return ol(t)}function ol(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=ts(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Xs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ce.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ol(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ol(s.fields[a])}`;return r+"}"}(t.mapValue):ve();var e,n}function al(t){return!!t&&"integerValue"in t}function rc(t){return!!t&&"arrayValue"in t}function Lu(t){return!!t&&"nullValue"in t}function Mu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jr(t){return!!t&&"mapValue"in t}function Di(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ss(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Di(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Di(t.arrayValue.values[n]);return e}return Object.assign({},t)}function O0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!jr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Di(n)}setAll(e){let n=Dt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Di(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());jr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];jr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Ss(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new qt(Di(this.value))}}function Lp(t){const e=[];return Ss(t.fields,(n,s)=>{const i=new Dt([n]);if(jr(s)){const r=Lp(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new It(e,0,Ee.min(),Ee.min(),qt.empty(),0)}static newFoundDocument(e,n,s){return new It(e,1,n,Ee.min(),s,0)}static newNoDocument(e,n){return new It(e,2,n,Ee.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new It(e,3,n,Ee.min(),qt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function $u(t,e=null,n=[],s=[],i=null,r=null,o=null){return new P0(t,e,n,s,i,r,o)}function oc(t){const e=ye(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Fs(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ko(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Fs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Fs(s)).join(",")),e.ht=n}return e.ht}function L0(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Fs(s.value)}`;var s}).join(", ")}]`),Ko(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Fs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Fs(n)).join(",")),`Target(${e})`}function ac(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!q0(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!wn(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fu(t.startAt,e.startAt)&&Fu(t.endAt,e.endAt)}function ll(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ht extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new M0(e,n,s):n==="array-contains"?new F0(e,s):n==="in"?new V0(e,s):n==="not-in"?new B0(e,s):n==="array-contains-any"?new j0(e,s):new Ht(e,n,s)}static lt(e,n,s){return n==="in"?new $0(e,s):new U0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Js(n,this.value)):n!==null&&ws(this.value)===ws(n)&&this.ft(Js(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class M0 extends Ht{constructor(e,n,s){super(e,n,s),this.key=ce.fromName(s.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.ft(n)}}class $0 extends Ht{constructor(e,n){super(e,"in",n),this.keys=Mp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class U0 extends Ht{constructor(e,n){super(e,"not-in",n),this.keys=Mp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Mp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ce.fromName(s.referenceValue))}class F0 extends Ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rc(n)&&xi(n.arrayValue,this.value)}}class V0 extends Ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xi(this.value.arrayValue,n)}}class B0 extends Ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xi(this.value.arrayValue,n)}}class j0 extends Ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>xi(this.value.arrayValue,s))}}class mo{constructor(e,n){this.position=e,this.inclusive=n}}class Ri{constructor(e,n="asc"){this.field=e,this.dir=n}}function q0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Uu(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ce.comparator(ce.fromName(o.referenceValue),n.key):s=Js(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function H0(t,e,n,s,i,r,o,a){return new Go(t,e,n,s,i,r,o,a)}function $p(t){return new Go(t)}function Vu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function x0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function z0(t){for(const e of t.filters)if(e.dt())return e.field;return null}function K0(t){return t.collectionGroup!==null}function zi(t){const e=ye(t);if(e._t===null){e._t=[];const n=z0(e),s=x0(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Ri(n)),e._t.push(new Ri(Dt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ri(Dt.keyField(),r))}}}return e._t}function Un(t){const e=ye(t);if(!e.wt)if(e.limitType==="F")e.wt=$u(e.path,e.collectionGroup,zi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of zi(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ri(r.field,o))}const s=e.endAt?new mo(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new mo(e.startAt.position,e.startAt.inclusive):null;e.wt=$u(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function cl(t,e,n){return new Go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wo(t,e){return ac(Un(t),Un(e))&&t.limitType===e.limitType}function Up(t){return`${oc(Un(t))}|lt:${t.limitType}`}function ul(t){return`Query(target=${L0(Un(t))}; limitType=${t.limitType})`}function lc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ce.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Uu(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,zi(n),s)||n.endAt&&!function(i,r,o){const a=Uu(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,zi(n),s))}(t,e)}function G0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fp(t){return(e,n)=>{let s=!1;for(const i of zi(t)){const r=W0(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function W0(t,e,n){const s=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Js(a,l):ve()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:po(e)?"-0":e}}function Bp(t){return{integerValue:""+t}}function Q0(t,e){return N0(e)?Bp(e):Vp(t,e)}/**
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
 */class Qo{constructor(){this._=void 0}}function Y0(t,e,n){return t instanceof go?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Ki?qp(t,e):t instanceof Gi?Hp(t,e):function(s,i){const r=jp(s,i),o=Bu(r)+Bu(s.yt);return al(r)&&al(s.yt)?Bp(o):Vp(s.It,o)}(t,e)}function X0(t,e,n){return t instanceof Ki?qp(t,e):t instanceof Gi?Hp(t,e):n}function jp(t,e){return t instanceof _o?al(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class go extends Qo{}class Ki extends Qo{constructor(e){super(),this.elements=e}}function qp(t,e){const n=xp(e);for(const s of t.elements)n.some(i=>wn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Gi extends Qo{constructor(e){super(),this.elements=e}}function Hp(t,e){let n=xp(e);for(const s of t.elements)n=n.filter(i=>!wn(i,s));return{arrayValue:{values:n}}}class _o extends Qo{constructor(e,n){super(),this.It=e,this.yt=n}}function Bu(t){return st(t.integerValue||t.doubleValue)}function xp(t){return rc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function J0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ki&&s instanceof Ki||n instanceof Gi&&s instanceof Gi?Ys(n.elements,s.elements,wn):n instanceof _o&&s instanceof _o?wn(n.yt,s.yt):n instanceof go&&s instanceof go}(t.transform,e.transform)}class Z0{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yo{}function zp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cc(t.key,an.none()):new gr(t.key,t.data,an.none());{const n=t.data,s=qt.empty();let i=new ct(Dt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new os(t.key,s,new Xt(i.toArray()),an.none())}}function e1(t,e,n){t instanceof gr?function(s,i,r){const o=s.value.clone(),a=qu(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof os?function(s,i,r){if(!qr(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=qu(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Kp(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Ni(t,e,n,s){return t instanceof gr?function(i,r,o,a){if(!qr(i.precondition,r))return o;const l=i.value.clone(),c=Hu(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof os?function(i,r,o,a){if(!qr(i.precondition,r))return o;const l=Hu(i.fieldTransforms,a,r),c=r.data;return c.setAll(Kp(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,r,o){return qr(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function t1(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=jp(s.transform,i||null);r!=null&&(n===null&&(n=qt.empty()),n.set(s.field,r))}return n||null}function ju(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ys(n,s,(i,r)=>J0(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class gr extends Yo{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class os extends Yo{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Kp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function qu(t,e,n){const s=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,X0(o,a,n[i]))}return s}function Hu(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Y0(r,o,e))}return s}class cc extends Yo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n1 extends Yo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,ke;function i1(t){switch(t){default:return ve();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function Gp(t){if(t===void 0)return $n("GRPC error has no .code"),j.UNKNOWN;switch(t){case nt.OK:return j.OK;case nt.CANCELLED:return j.CANCELLED;case nt.UNKNOWN:return j.UNKNOWN;case nt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case nt.INTERNAL:return j.INTERNAL;case nt.UNAVAILABLE:return j.UNAVAILABLE;case nt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case nt.NOT_FOUND:return j.NOT_FOUND;case nt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case nt.ABORTED:return j.ABORTED;case nt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case nt.DATA_LOSS:return j.DATA_LOSS;default:return ve()}}(ke=nt||(nt={}))[ke.OK=0]="OK",ke[ke.CANCELLED=1]="CANCELLED",ke[ke.UNKNOWN=2]="UNKNOWN",ke[ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ke[ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ke[ke.NOT_FOUND=5]="NOT_FOUND",ke[ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",ke[ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",ke[ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",ke[ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ke[ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ke[ke.ABORTED=10]="ABORTED",ke[ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",ke[ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",ke[ke.INTERNAL=13]="INTERNAL",ke[ke.UNAVAILABLE=14]="UNAVAILABLE",ke[ke.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ss(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Np(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=new ut(ce.comparator);function Fn(){return r1}const Wp=new ut(ce.comparator);function ki(...t){let e=Wp;for(const n of t)e=e.insert(n.key,n);return e}function Qp(t){let e=Wp;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function fs(){return Oi()}function Yp(){return Oi()}function Oi(){return new ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const o1=new ut(ce.comparator),a1=new ct(ce.comparator);function Ie(...t){let e=a1;for(const n of t)e=e.add(n);return e}const l1=new ct(Ne);function Xp(){return l1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,_r.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Xo(Ee.min(),i,Xp(),Fn(),Ie())}}class _r{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new _r(s,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class Jp{constructor(e,n){this.targetId=e,this.At=n}}class Zp{constructor(e,n,s=Pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class xu{constructor(){this.Rt=0,this.bt=Ku(),this.Pt=Pt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Ie(),n=Ie(),s=Ie();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:ve()}}),new _r(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Ku()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class c1{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Fn(),this.qt=zu(),this.Kt=new ct(Ne)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:ve()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(ll(r))if(s===0){const o=new ce(r.path);this.jt(n,o,It.newNoDocument(o,Ee.min()))}else Me(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&ll(a.target)){const l=new ce(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,It.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=Ie();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new Xo(e,n,this.Kt,this.Ut,s);return this.Ut=Fn(),this.qt=zu(),this.Kt=new ct(Ne),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new xu,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ct(Ne),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new xu),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function zu(){return new ut(ce.comparator)}function Ku(){return new ut(ce.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),h1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class f1{constructor(e,n){this.databaseId=e,this.gt=n}}function vo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function em(t,e){return t.gt?e.toBase64():e.toUint8Array()}function d1(t,e){return vo(t,e.toTimestamp())}function Ln(t){return Me(!!t),Ee.fromTimestamp(function(e){const n=ts(e);return new lt(n.seconds,n.nanos)}(t))}function uc(t,e){return function(n){return new xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function tm(t){const e=xe.fromString(t);return Me(im(e)),e}function hl(t,e){return uc(t.databaseId,e.path)}function Na(t,e){const n=tm(e);if(n.get(1)!==t.databaseId.projectId)throw new ue(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ue(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(nm(n))}function fl(t,e){return uc(t.databaseId,e)}function p1(t){const e=tm(t);return e.length===4?xe.emptyPath():nm(e)}function dl(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nm(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gu(t,e,n){return{name:hl(t,e),fields:n.value.mapValue.fields}}function m1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(Me(c===void 0||typeof c=="string"),Pt.fromBase64String(c||"")):(Me(c===void 0||c instanceof Uint8Array),Pt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?j.UNKNOWN:Gp(l.code);return new ue(c,l.message||"")}(o);n=new Zp(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Na(t,s.document.name),r=Ln(s.document.updateTime),o=new qt({mapValue:{fields:s.document.fields}}),a=It.newFoundDocument(i,r,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new Hr(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Na(t,s.document),r=s.readTime?Ln(s.readTime):Ee.min(),o=It.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Hr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Na(t,s.document),r=s.removedTargetIds||[];n=new Hr([],r,i,null)}else{if(!("filter"in e))return ve();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new s1(i),o=s.targetId;n=new Jp(o,r)}}return n}function g1(t,e){let n;if(e instanceof gr)n={update:Gu(t,e.key,e.value)};else if(e instanceof cc)n={delete:hl(t,e.key)};else if(e instanceof os)n={update:Gu(t,e.key,e.data),updateMask:S1(e.fieldMask)};else{if(!(e instanceof n1))return ve();n={verify:hl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof go)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ki)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Gi)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof _o)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw ve()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:d1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ve()}(t,e.precondition)),n}function _1(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Ln(s.updateTime):Ln(i);return r.isEqual(Ee.min())&&(r=Ln(i)),new Z0(r,s.transformResults||[])}(n,e))):[]}function v1(t,e){return{documents:[fl(t,e.path)]}}function y1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=fl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(h=>function(f){if(f.op==="=="){if(Mu(f.value))return{unaryFilter:{field:Ns(f.field),op:"IS_NAN"}};if(Lu(f.value))return{unaryFilter:{field:Ns(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Mu(f.value))return{unaryFilter:{field:Ns(f.field),op:"IS_NOT_NAN"}};if(Lu(f.value))return{unaryFilter:{field:Ns(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(f.field),op:I1(f.op),value:f.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Ns(h.field),direction:E1(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||Ko(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function w1(t){let e=p1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Me(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=sm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new Ri(Ms(f.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Ko(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new mo(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new mo(d,f)}(n.endAt)),H0(e,i,o,r,a,"F",l,c)}function b1(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ve()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function sm(t){return t?t.unaryFilter!==void 0?[k1(t)]:t.fieldFilter!==void 0?[T1(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>sm(e)).reduce((e,n)=>e.concat(n)):ve():[]}function E1(t){return u1[t]}function I1(t){return h1[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function Ms(t){return Dt.fromServerFormat(t.fieldPath)}function T1(t){return Ht.create(Ms(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ve()}}(t.fieldFilter.op),t.fieldFilter.value)}function k1(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ms(t.unaryFilter.field);return Ht.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ms(t.unaryFilter.field);return Ht.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ms(t.unaryFilter.field);return Ht.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ms(t.unaryFilter.field);return Ht.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ve()}}function S1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function im(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&e1(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ni(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ni(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Yp();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=zp(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Ee.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&Ys(this.mutations,e.mutations,(n,s)=>ju(n,s))&&Ys(this.baseMutations,e.baseMutations,(n,s)=>ju(n,s))}}class hc{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Me(e.mutations.length===s.length);let i=o1;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new hc(e,n,s,i)}}/**
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
 */class A1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ps{constructor(e,n,s,i,r=Ee.min(),o=Ee.min(),a=Pt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ps(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ps(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ps(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.re=e}}function R1(t){const e=w1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.Ye=new O1}addToCollectionParentIndex(e,n){return this.Ye.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(es.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(es.min())}updateCollectionGroup(e,n,s){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class O1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ct(xe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ct(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Zs(0)}static vn(){return new Zs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(){this.changes=new ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?q.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class L1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&Ni(s.mutation,i,Xt.empty(),lt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ie()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ie()){const i=fs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ki();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ie()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Fn();const o=Oi(),a=Oi();return n.forEach((l,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof os)?r=r.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),Ni(h.mutation,c,h.mutation.getFieldMask(),lt.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new L1(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Oi();let i=new ut((o,a)=>o-a),r=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=s.get(l)||Xt.empty();h=a.applyToLocalView(c,h),s.set(l,h);const f=(i.get(a.batchId)||Ie()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=Yp();h.forEach(d=>{if(!r.has(d)){const g=zp(n.get(d),s.get(d));g!==null&&f.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return q.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return ce.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):K0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):q.resolve(fs());let a=-1,l=r;return o.next(c=>q.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?q.resolve():this.getBaseDocument(e,h,f).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Ie())).next(h=>({batchId:a,changes:Qp(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(s=>{let i=ki();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=ki();return this.indexManager.getCollectionParents(e,i).next(o=>q.forEach(o,a=>{const l=function(c,h){return new Go(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((h,f)=>{r=r.insert(h,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,It.newInvalidDocument(c)))});let o=ki();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Ni(c.mutation,l,Xt.empty(),lt.now()),lc(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):q.resolve(It.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return q.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ln(s.createTime)}),q.resolve()}getNamedQuery(e,n){return q.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:R1(s.bundledQuery),readTime:Ln(s.readTime)}}(n)),q.resolve()}}/**
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
 */class U1{constructor(){this.overlays=new ut(ce.comparator),this.es=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const s=fs();return q.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),q.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),q.resolve()}getOverlaysForCollection(e,n,s){const i=fs(),r=n.length+1,o=new ce(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return q.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ut((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=fs(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=fs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return q.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new A1(n,s));let r=this.es.get(n);r===void 0&&(r=Ie(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.ns=new ct(vt.ss),this.rs=new ct(vt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new vt(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new vt(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new ce(new xe([])),s=new vt(n,e),i=new vt(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new ce(new xe([])),s=new vt(n,e),i=new vt(n,e+1);let r=Ie();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new vt(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class vt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return ce.comparator(e.key,n.key)||Ne(e._s,n._s)}static os(e,n){return Ne(e._s,n._s)||ce.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ct(vt.ss)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new C1(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new vt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return q.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new vt(n,0),i=new vt(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),q.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ct(Ne);return n.forEach(i=>{const r=new vt(i,0),o=new vt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),q.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ce.isDocumentKey(r)||(r=r.child(""));const o=new vt(new ce(r),0);let a=new ct(Ne);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),q.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return q.forEach(n.mutations,i=>{const r=new vt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new vt(n,0),i=this.gs.firstAfterOrEqual(s);return q.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.Es=e,this.docs=new ut(ce.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return q.resolve(s?s.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let s=Fn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():It.newInvalidDocument(i))}),q.resolve(s)}getAllFromCollection(e,n,s){let i=Fn();const r=new ce(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||S0(k0(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,s,i){ve()}As(e,n){return q.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new B1(this)}getSize(e){return q.resolve(this.size)}}class B1 extends P1{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),q.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.persistence=e,this.Rs=new ri(n=>oc(n),ac),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.bs=0,this.Ps=new fc,this.targetCount=0,this.vs=Zs.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),q.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Zs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.Dn(n),q.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),q.waitFor(r).next(()=>i)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return q.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),q.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),q.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),q.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return q.resolve(s)}containsKey(e,n){return q.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new ic(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new j1(this),this.indexManager=new N1,this.remoteDocumentCache=function(s){return new V1(s)}(s=>this.referenceDelegate.xs(s)),this.It=new D1(n),this.Ns=new $1(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new U1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new F1(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){re("MemoryPersistence","Starting transaction:",e);const i=new H1(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return q.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class H1 extends A0{constructor(e){super(),this.currentSequenceNumber=e}}class dc{constructor(e){this.persistence=e,this.Fs=new fc,this.$s=null}static Bs(e){return new dc(e)}get Ls(){if(this.$s)return this.$s;throw ve()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),q.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),q.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Ls,s=>{const i=ce.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,Ee.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return q.or([()=>q.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=Ie(),i=Ie();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new pc(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Vu(n))return q.resolve(null);let s=Un(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cl(n,null,"F"),s=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Ie(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,cl(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return Vu(n)||i.isEqual(Ee.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Ru()<=De.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ul(n)),this.Bi(e,o,n,T0(i,-1)))})}Fi(e,n){let s=new ct(Fp(e));return n.forEach((i,r)=>{lc(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Ru()<=De.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",ul(n)),this.Ni.getDocumentsMatchingQuery(e,n,es.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new ut(Ne),this.qi=new ri(r=>oc(r),ac),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new M1(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function K1(t,e,n,s){return new z1(t,e,n,s)}async function rm(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Ie();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function G1(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const h=l.batch,f=h.keys();let d=q.resolve();return f.forEach(g=>{d=d.next(()=>c.getEntry(a,g)).next(_=>{const v=l.docVersions.get(g);Me(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Ie();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function om(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function W1(t,e){const n=ye(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,f)=>{const d=i.get(f);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,f)));let g=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(Pt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(f,g),function(_,v,w){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,g,h)&&a.push(n.Cs.updateTargetData(r,g))});let l=Fn(),c=Ie();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Q1(r,o,e.documentUpdates).next(h=>{l=h.Wi,c=h.zi})),!s.isEqual(Ee.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return q.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=i,r))}function Q1(t,e,n){let s=Ie(),i=Ie();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Fn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):re("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function Y1(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function X1(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,q.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new ps(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function pl(t,e,n){const s=ye(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!mr(o))throw o;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function Wu(t,e,n){const s=ye(t);let i=Ee.min(),r=Ie();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const h=ye(a),f=h.qi.get(c);return f!==void 0?q.resolve(h.Ui.get(f)):h.Cs.getTargetData(l,c)}(s,o,Un(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:Ee.min(),n?r:Ie())).next(a=>(J1(s,G0(e),a),{documents:a,Hi:r})))}function J1(t,e,n){let s=t.Ki.get(e)||Ee.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class Qu{constructor(){this.activeTargetIds=Xp()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Z1{constructor(){this.Lr=new Qu,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Qu,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);re("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(re("RestConnection","Received: ",l),l),l=>{throw rl("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+ii,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=tw[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new p0;a.setWithCredentials(!0),a.listenOnce(h0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ra.NO_ERROR:const c=a.getResponseJson();re("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Ra.TIMEOUT:re("Connection",'RPC "'+e+'" timed out'),o(new ue(j.DEADLINE_EXCEEDED,"Request time out"));break;case Ra.HTTP_ERROR:const h=a.getStatus();if(re("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const d=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(_)>=0?_:j.UNKNOWN}(f.status);o(new ue(d,f.message))}else o(new ue(j.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ue(j.UNAVAILABLE,"Connection failed."));break;default:ve()}}finally{re("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=c0(),o=u0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new d0({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");re("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let h=!1,f=!1;const d=new nw({Hr:_=>{f?re("Connection","Not sending because WebChannel is closed:",_):(h||(re("Connection","Opening WebChannel transport."),c.open(),h=!0),re("Connection","WebChannel sending:",_),c.send(_))},Jr:()=>c.close()}),g=(_,v,w)=>{_.listen(v,E=>{try{w(E)}catch(S){setTimeout(()=>{throw S},0)}})};return g(c,Lr.EventType.OPEN,()=>{f||re("Connection","WebChannel transport opened.")}),g(c,Lr.EventType.CLOSE,()=>{f||(f=!0,re("Connection","WebChannel transport closed"),d.io())}),g(c,Lr.EventType.ERROR,_=>{f||(f=!0,rl("Connection","WebChannel transport errored:",_),d.io(new ue(j.UNAVAILABLE,"The operation could not be completed")))}),g(c,Lr.EventType.MESSAGE,_=>{var v;if(!f){const w=_.data[0];Me(!!w);const E=w,S=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(S){re("Connection","WebChannel received error:",S);const $=S.status;let P=function(L){const M=nt[L];if(M!==void 0)return Gp(M)}($),O=S.message;P===void 0&&(P=j.INTERNAL,O="Unknown error status: "+$+" with message "+S.message),f=!0,d.io(new ue(P,O)),c.close()}else re("Connection","WebChannel received:",w),d.ro(w)}}),g(o,f0.STAT_EVENT,_=>{_.stat===Au.PROXY?re("Connection","Detected buffering proxy"):_.stat===Au.NOPROXY&&re("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Oa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){return new f1(t,!0)}class am{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&re("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new am(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===j.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new ue(j.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iw extends lm{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=m1(this.It,e),s=function(i){if(!("targetChange"in i))return Ee.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?Ee.min():r.readTime?Ln(r.readTime):Ee.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=dl(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=ll(a)?{documents:v1(i,a)}:{query:y1(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=em(i,r.resumeToken):r.snapshotVersion.compareTo(Ee.min())>0&&(o.readTime=vo(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=b1(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=dl(this.It),n.removeTarget=e,this.Lo(n)}}class rw extends lm{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=_1(e.writeResults,e.commitTime),s=Ln(e.commitTime);return this.listener.tu(s,n)}return Me(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=dl(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>g1(this.It,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new ue(j.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ue(j.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.So._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ue(j.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class aw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?($n(n),this.uu=!1):re("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(o=>{s.enqueueAndForget(async()=>{Cs(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ye(a);l.wu.add(4),await vr(l),l.yu.set("Unknown"),l.wu.delete(4),await Zo(l)}(this))})}),this.yu=new aw(s,i)}}async function Zo(t){if(Cs(t))for(const e of t.mu)await e(!0)}async function vr(t){for(const e of t.mu)await e(!1)}function cm(t,e){const n=ye(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),_c(n)?gc(n):oi(n).Oo()&&mc(n,e))}function um(t,e){const n=ye(t),s=oi(n);n._u.delete(e),s.Oo()&&hm(n,e),n._u.size===0&&(s.Oo()?s.$o():Cs(n)&&n.yu.set("Unknown"))}function mc(t,e){t.pu.Mt(e.targetId),oi(t).Ho(e)}function hm(t,e){t.pu.Mt(e),oi(t).Jo(e)}function gc(t){t.pu=new c1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),oi(t).start(),t.yu.cu()}function _c(t){return Cs(t)&&!oi(t).ko()&&t._u.size>0}function Cs(t){return ye(t).wu.size===0}function fm(t){t.pu=void 0}async function cw(t){t._u.forEach((e,n)=>{mc(t,e)})}async function uw(t,e){fm(t),_c(t)?(t.yu.lu(e),gc(t)):t.yu.set("Unknown")}async function hw(t,e,n){if(t.yu.set("Online"),e instanceof Zp&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await yo(t,s)}else if(e instanceof Hr?t.pu.Gt(e):e instanceof Jp?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(Ee.min()))try{const s=await om(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i._u.get(l);c&&i._u.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(Pt.EMPTY_BYTE_STRING,l.snapshotVersion)),hm(i,a);const c=new ps(l.target,a,1,l.sequenceNumber);mc(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){re("RemoteStore","Failed to raise snapshot:",s),await yo(t,s)}}async function yo(t,e,n){if(!mr(e))throw e;t.wu.add(1),await vr(t),t.yu.set("Offline"),n||(n=()=>om(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Zo(t)})}function dm(t,e){return e().catch(n=>yo(t,n,e))}async function ea(t){const e=ye(t),n=ns(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;fw(e);)try{const i=await Y1(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,dw(e,i)}catch(i){await yo(e,i)}pm(e)&&mm(e)}function fw(t){return Cs(t)&&t.du.length<10}function dw(t,e){t.du.push(e);const n=ns(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function pm(t){return Cs(t)&&!ns(t).ko()&&t.du.length>0}function mm(t){ns(t).start()}async function pw(t){ns(t).nu()}async function mw(t){const e=ns(t);for(const n of t.du)e.Zo(n.mutations)}async function gw(t,e,n){const s=t.du.shift(),i=hc.from(s,e,n);await dm(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ea(t)}async function _w(t,e){e&&ns(t).Xo&&await async function(n,s){if(i=s.code,i1(i)&&i!==j.ABORTED){const r=n.du.shift();ns(n).Fo(),await dm(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ea(n)}var i}(t,e),pm(t)&&mm(t)}async function Xu(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const s=Cs(n);n.wu.add(3),await vr(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Zo(n)}async function vw(t,e){const n=ye(t);e?(n.wu.delete(2),await Zo(n)):e||(n.wu.add(2),await vr(n),n.yu.set("Unknown"))}function oi(t){return t.Iu||(t.Iu=function(e,n,s){const i=ye(e);return i.iu(),new iw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:cw.bind(null,t),Zr:uw.bind(null,t),zo:hw.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),_c(t)?gc(t):t.yu.set("Unknown")):(await t.Iu.stop(),fm(t))})),t.Iu}function ns(t){return t.Tu||(t.Tu=function(e,n,s){const i=ye(e);return i.iu(),new rw(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:pw.bind(null,t),Zr:_w.bind(null,t),eu:mw.bind(null,t),tu:gw.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await ea(t)):(await t.Tu.stop(),t.du.length>0&&(re("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new vc(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yc(t,e){if($n("AsyncQueue",`${e}: ${t}`),mr(t))return new ue(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ce.comparator(n.key,s.key):(n,s)=>ce.comparator(n.key,s.key),this.keyedMap=ki(),this.sortedSet=new ut(this.comparator)}static emptySet(e){return new Vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Vs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.Eu=new ut(ce.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):ve():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ei{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ei(e,n,Vs.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(){this.Ru=void 0,this.listeners=[]}}class ww{constructor(){this.queries=new ri(e=>Up(e),Wo),this.onlineState="Unknown",this.bu=new Set}}async function bw(t,e){const n=ye(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new yw),i)try{r.Ru=await n.onListen(s)}catch(o){const a=yc(o,`Initialization of query '${ul(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&wc(n)}async function Ew(t,e){const n=ye(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Iw(t,e){const n=ye(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Ru=i}}s&&wc(n)}function Tw(t,e,n){const s=ye(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function wc(t){t.bu.forEach(e=>{e.next()})}class kw{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ei(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.key=e}}class _m{constructor(e){this.key=e}}class Sw{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Ie(),this.mutatedKeys=Ie(),this.Gu=Fp(e),this.Qu=new Vs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new Ju,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const d=i.get(h),g=lc(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;d&&g?d.data.isEqual(g.data)?_!==v&&(s.track({type:3,doc:g}),w=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),w=!0,(l&&this.Gu(g,l)>0||c&&this.Gu(g,c)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),w=!0):d&&!g&&(s.track({type:1,doc:d}),w=!0,(l||c)&&(a=!0)),w&&(g?(o=o.add(g),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((c,h)=>function(f,d){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve()}};return g(f)-g(d)}(c.type,h.type)||this.Gu(c.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,r.length!==0||l?{snapshot:new ei(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Ju,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Ie(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new _m(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new gm(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=Ie();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ei.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Cw{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Aw{constructor(e){this.key=e,this.nc=!1}}class Dw{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ri(a=>Up(a),Wo),this.rc=new Map,this.oc=new Set,this.uc=new ut(ce.comparator),this.cc=new Map,this.ac=new fc,this.hc={},this.lc=new Map,this.fc=Zs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Rw(t,e){const n=Bw(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await X1(n.localStore,Un(e));n.isPrimaryClient&&cm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Nw(n,e,s,a==="current",o.resumeToken)}return i}async function Nw(t,e,n,s,i){t._c=(f,d,g)=>async function(_,v,w,E){let S=v.view.Wu(w);S.$i&&(S=await Wu(_.localStore,v.query,!1).then(({documents:O})=>v.view.Wu(O,S)));const $=E&&E.targetChanges.get(v.targetId),P=v.view.applyChanges(S,_.isPrimaryClient,$);return eh(_,v.targetId,P.Xu),P.snapshot}(t,f,d,g);const r=await Wu(t.localStore,e,!0),o=new Sw(e,r.Hi),a=o.Wu(r.documents),l=_r.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);eh(t,n,c.Xu);const h=new Cw(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function Ow(t,e){const n=ye(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!Wo(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await pl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),um(n.remoteStore,s.targetId),ml(n,s.targetId)}).catch(pr)):(ml(n,s.targetId),await pl(n.localStore,s.targetId,!0))}async function Pw(t,e,n){const s=jw(t);try{const i=await function(r,o){const a=ye(r),l=lt.now(),c=o.reduce((d,g)=>d.add(g.key),Ie());let h,f;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Fn(),_=Ie();return a.Gi.getEntries(d,c).next(v=>{g=v,g.forEach((w,E)=>{E.isValidDocument()||(_=_.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{h=v;const w=[];for(const E of o){const S=t1(E,h.get(E.key).overlayedDocument);S!=null&&w.push(new os(E.key,S,Lp(S.value.mapValue),an.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(v=>{f=v;const w=v.applyToLocalDocumentSet(h,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,w)})}).then(()=>({batchId:f.batchId,changes:Qp(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new ut(Ne)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await yr(s,i.changes),await ea(s.remoteStore)}catch(i){const r=yc(i,"Failed to persist write");n.reject(r)}}async function vm(t,e){const n=ye(t);try{const s=await W1(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Me(o.nc):i.removedDocuments.size>0&&(Me(o.nc),o.nc=!1))}),await yr(n,s,e)}catch(s){await pr(s)}}function Zu(t,e,n){const s=ye(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=ye(r);a.onlineState=o;let l=!1;a.queries.forEach((c,h)=>{for(const f of h.listeners)f.Pu(o)&&(l=!0)}),l&&wc(a)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Lw(t,e,n){const s=ye(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new ut(ce.comparator);o=o.insert(r,It.newNoDocument(r,Ee.min()));const a=Ie().add(r),l=new Xo(Ee.min(),new Map,new ct(Ne),o,a);await vm(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),bc(s)}else await pl(s.localStore,e,!1).then(()=>ml(s,e,n)).catch(pr)}async function Mw(t,e){const n=ye(t),s=e.batch.batchId;try{const i=await G1(n.localStore,e);wm(n,s,null),ym(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await yr(n,i)}catch(i){await pr(i)}}async function $w(t,e,n){const s=ye(t);try{const i=await function(r,o){const a=ye(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(Me(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);wm(s,e,n),ym(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await yr(s,i)}catch(i){await pr(i)}}function ym(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function wm(t,e,n){const s=ye(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function ml(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||bm(t,s)})}function bm(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(um(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),bc(t))}function eh(t,e,n){for(const s of n)s instanceof gm?(t.ac.addReference(s.key,e),Uw(t,s)):s instanceof _m?(re("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||bm(t,s.key)):ve()}function Uw(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(re("SyncEngine","New document in limbo: "+n),t.oc.add(s),bc(t))}function bc(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new ce(xe.fromString(e)),s=t.fc.next();t.cc.set(s,new Aw(n)),t.uc=t.uc.insert(n,s),cm(t.remoteStore,new ps(Un($p(n.path)),s,2,ic.at))}}async function yr(t,e,n){const s=ye(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=pc.Ci(l.targetId,c);r.push(h)}}))}),await Promise.all(o),s.sc.zo(i),await async function(a,l){const c=ye(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>q.forEach(l,f=>q.forEach(f.Si,d=>c.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>q.forEach(f.Di,d=>c.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!mr(h))throw h;re("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=c.Ui.get(f),g=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(g);c.Ui=c.Ui.insert(f,_)}}}(s.localStore,r))}async function Fw(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const s=await rm(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new ue(j.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await yr(n,s.ji)}}function Vw(t,e){const n=ye(t),s=n.cc.get(e);if(s&&s.nc)return Ie().add(s.key);{let i=Ie();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Bw(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lw.bind(null,e),e.sc.zo=Iw.bind(null,e.eventManager),e.sc.wc=Tw.bind(null,e.eventManager),e}function jw(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$w.bind(null,e),e}class qw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Jo(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return K1(this.persistence,new x1,e.initialUser,this.It)}yc(e){return new q1(dc.Bs,this.It)}gc(e){return new Z1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Hw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Zu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fw.bind(null,this.syncEngine),await vw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ww}createDatastore(e){const n=Jo(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new sw(i));var i;return function(r,o,a,l){return new ow(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Zu(this.syncEngine,a,0),o=Yu.C()?new Yu:new ew,new lw(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const h=new Dw(s,i,r,o,a,l);return c&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ye(e);re("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await vr(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t,e,n){if(!n)throw new ue(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xw(t,e,n,s){if(e===!0&&s===!0)throw new ue(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function th(t){if(!ce.isDocumentKey(t))throw new ue(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function nh(t){if(ce.isDocumentKey(t))throw new ue(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ve()}function bs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ue(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ec(t);throw new ue(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new Map;class ih{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,xw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ih({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ue(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ue(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ih(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new m0;switch(n.type){case"gapi":const s=n.client;return new y0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ue(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sh.get(e);n&&(re("ComponentProvider","Removing Datastore"),sh.delete(e),n.terminate())}(this),Promise.resolve()}}function zw(t,e,n,s={}){var i;const r=(t=bs(t,ta))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&rl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=At.MOCK_USER;else{o=ev(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new ue(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new At(l)}t._authCredentials=new g0(new Dp(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jt(this.firestore,e,this._key)}}class na{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new na(this.firestore,e,this._query)}}class Xn extends na{constructor(e,n,s){super(e,n,$p(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jt(this.firestore,null,new ce(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function ss(t,e,...n){if(t=Ft(t),Em("collection","path",e),t instanceof ta){const s=xe.fromString(e,...n);return nh(s),new Xn(t,null,s)}{if(!(t instanceof Jt||t instanceof Xn))throw new ue(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return nh(s),new Xn(t.firestore,null,s)}}function Es(t,e,...n){if(t=Ft(t),arguments.length===1&&(e=Rp.R()),Em("doc","path",e),t instanceof ta){const s=xe.fromString(e,...n);return th(s),new Jt(t,null,new ce(s))}{if(!(t instanceof Jt||t instanceof Xn))throw new ue(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xe.fromString(e,...n));return th(s),new Jt(t.firestore,t instanceof Xn?t.converter:null,new ce(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=At.UNAUTHENTICATED,this.clientId=Rp.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{re("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(re("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ue(j.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=yc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ww(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await rm(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Qw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Yw(t);re("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Xu(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Xu(e.remoteStore,r)),t.onlineComponents=e}async function Yw(t){return t.offlineComponents||(re("FirestoreClient","Using default OfflineComponentProvider"),await Ww(t,new qw)),t.offlineComponents}async function Im(t){return t.onlineComponents||(re("FirestoreClient","Using default OnlineComponentProvider"),await Qw(t,new Hw)),t.onlineComponents}function Xw(t){return Im(t).then(e=>e.syncEngine)}async function Jw(t){const e=await Im(t),n=e.eventManager;return n.onListen=Rw.bind(null,e.syncEngine),n.onUnlisten=Ow.bind(null,e.syncEngine),n}function Zw(t,e,n={}){const s=new Yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Kw({next:f=>{r.enqueueAndForget(()=>Ew(i,h)),f.fromCache&&a.source==="server"?l.reject(new ue(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new kw(o,c,{includeMetadataChanges:!0,ku:!0});return bw(i,h)}(await Jw(t),t.asyncQueue,e,n,s)),s.promise}class eb{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new am(this,"async_queue_retry"),this.Wc=()=>{const n=Oa();n&&re("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Oa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Oa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Yn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!mr(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw $n("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=vc.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&ve()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class wr extends ta{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new eb,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||km(this),this._firestoreClient.terminate()}}function tb(t,e){const n=typeof t=="object"?t:Td(),s=typeof t=="string"?t:e||"(default)",i=Ml(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=X_("firestore");r&&zw(i,...r)}return i}function Tm(t){return t._firestoreClient||km(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function km(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new R0(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Gw(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ti(Pt.fromBase64String(e))}catch(n){throw new ue(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ti(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ue(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ue(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ue(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=/^__.*__$/;class sb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new gr(e,this.data,n,this.fieldTransforms)}}class Sm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new os(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Cm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve()}}class kc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new kc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return wo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Cm(this.sa)&&nb.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class ib{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||Jo(e)}da(e,n,s,i=!1){return new kc({sa:e,methodName:n,fa:s,path:Dt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Am(t){const e=t._freezeSettings(),n=Jo(t._databaseId);return new ib(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rb(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);Sc("Data must be an object, but it was:",o,s);const a=Dm(s,o);let l,c;if(r.merge)l=new Xt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const d=gl(e,f,n);if(!o.contains(d))throw new ue(j.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Nm(h,d)||h.push(d)}l=new Xt(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new sb(new qt(a),l,c)}class ia extends Ic{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ia}}function ob(t,e,n,s){const i=t.da(1,e,n);Sc("Data must be an object, but it was:",i,s);const r=[],o=qt.empty();Ss(s,(l,c)=>{const h=Cc(e,l,n);c=Ft(c);const f=i.ca(h);if(c instanceof ia)r.push(h);else{const d=ra(c,f);d!=null&&(r.push(h),o.set(h,d))}});const a=new Xt(r);return new Sm(o,a,i.fieldTransforms)}function ab(t,e,n,s,i,r){const o=t.da(1,e,n),a=[gl(e,s,n)],l=[i];if(r.length%2!=0)throw new ue(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(gl(e,r[d])),l.push(r[d+1]);const c=[],h=qt.empty();for(let d=a.length-1;d>=0;--d)if(!Nm(c,a[d])){const g=a[d];let _=l[d];_=Ft(_);const v=o.ca(g);if(_ instanceof ia)c.push(g);else{const w=ra(_,v);w!=null&&(c.push(g),h.set(g,w))}}const f=new Xt(c);return new Sm(h,f,o.fieldTransforms)}function ra(t,e){if(Rm(t=Ft(t)))return Sc("Unsupported field value:",e,t),Dm(t,e);if(t instanceof Ic)return function(n,s){if(!Cm(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ra(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Q0(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=lt.fromDate(n);return{timestampValue:vo(s.It,i)}}if(n instanceof lt){const i=new lt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:vo(s.It,i)}}if(n instanceof Tc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ti)return{bytesValue:em(s.It,n._byteString)};if(n instanceof Jt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:uc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Ec(n)}`)}(t,e)}function Dm(t,e){const n={};return Np(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ss(t,(s,i)=>{const r=ra(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Rm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof Tc||t instanceof ti||t instanceof Jt||t instanceof Ic)}function Sc(t,e,n){if(!Rm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ec(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function gl(t,e,n){if((e=Ft(e))instanceof sa)return e._internalPath;if(typeof e=="string")return Cc(t,e);throw wo("Field path arguments must be of type string or ",t,!1,void 0,n)}const lb=new RegExp("[~\\*/\\[\\]]");function Cc(t,e,n){if(e.search(lb)>=0)throw wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sa(...e.split("."))._internalPath}catch{throw wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wo(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new ue(j.INVALID_ARGUMENT,a+t+l)}function Nm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Pm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cb extends Om{data(){return super.data()}}function Pm(t,e){return typeof e=="string"?Cc(t,e):e instanceof sa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ue(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{convertValue(e,n="none"){switch(ws(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ve()}}convertObject(e,n){const s={};return Ss(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Tc(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Pp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(qi(e));default:return null}}convertTimestamp(e){const n=ts(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=xe.fromString(e);Me(im(s));const i=new Hi(s.get(1),s.get(3)),r=new ce(s.popFirst(5));return i.isEqual(n)||$n(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class db extends Om{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Pm("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class xr extends db{data(e={}){return super.data(e)}}class pb{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ur(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new xr(this._firestore,this._userDataWriter,s.key,s,new Ur(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ue(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new xr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ur(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new xr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ur(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:mb(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve()}}class gb extends hb{constructor(e){super(),this.firestore=e}convertBytes(e){return new ti(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Jt(this.firestore,null,n)}}function oa(t){t=bs(t,na);const e=bs(t.firestore,wr),n=Tm(e),s=new gb(e);return ub(t._query),Zw(n,t._query).then(i=>new pb(e,s,t,i))}function Ac(t,e,n,...s){t=bs(t,Jt);const i=bs(t.firestore,wr),r=Am(i);let o;return o=typeof(e=Ft(e))=="string"||e instanceof sa?ab(r,"updateDoc",t._key,e,n,s):ob(r,"updateDoc",t._key,e),Rc(i,[o.toMutation(t._key,an.exists(!0))])}function Dc(t){return Rc(bs(t.firestore,wr),[new cc(t._key,an.none())])}function bo(t,e){const n=bs(t.firestore,wr),s=Es(t),i=fb(t.converter,e);return Rc(n,[rb(Am(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,an.exists(!1))]).then(()=>s)}function Rc(t,e){return function(n,s){const i=new Yn;return n.asyncQueue.enqueueAndForget(async()=>Pw(await Xw(n),s,i)),i.promise}(Tm(t),e)}(function(t,e=!0){(function(n){ii=n})(ir),Ws(new _s("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new wr(new _0(n.getProvider("auth-internal")),new b0(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ue(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hi(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Qn(Du,"3.7.1",t),Qn(Du,"3.7.1","esm2017")})();const Lm="/to-deploy-mh/assets/schedule.20f01954.png";function Mm(t){const e=t-1;return e*e*e+1}function rh(t){return t===0||t===1?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function Eo(t,{delay:e=0,duration:n=400,easing:s=Uf}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}function Io(t,{delay:e=0,duration:n=400,easing:s=Mm,x:i=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,h=l*(1-o);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${c} translate(${(1-f)*i}px, ${(1-f)*r}px);
			opacity: ${l-h*d}`}}function oh(t,{delay:e=0,duration:n=400,easing:s=Mm,start:i=0,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,h=a*(1-r);return{delay:e,duration:n,easing:s,css:(f,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${a-h*d}
		`}}const Yt=Lt(""),_l=Lt([]),Ve=Lt({typeContact:"",name:"",lastname:"",lastContact:"",telephon:"",email:"",selecMC:"",propCont:"",comContact:"",rangeProp:"",contMode:"",budget:"",numBeds:"",numBaths:"",halfBathroom:"",numParks:"",modePay:"",selecTP:"",contactType:"",contactStage:"",createdAt:"",locaProperty:[],tagsProperty:[],sendedProperties:[]}),on=Lt({task:"",isComplete:"",createdAt:"",endTask:"",timeTask:"",notes:"",user:""});var _b="firebase",vb="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(_b,vb,"app");function Nc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function $m(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yb=$m,Um=new nr("auth","Firebase",$m());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new Pl("@firebase/auth");function zr(t,...e){ah.logLevel<=De.ERROR&&ah.error(`Auth (${ir}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw Oc(t,...e)}function mn(t,...e){return Oc(t,...e)}function wb(t,e,n){const s=Object.assign(Object.assign({},yb()),{[e]:n});return new nr("auth","Firebase",s).create(e,{appName:t.name})}function Oc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Um.create(t,...e)}function pe(t,e,...n){if(!t)throw Oc(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zr(e),new Error(e)}function Vn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new Map;function Pn(t){Vn(t instanceof Function,"Expected a class definition");let e=lh.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t,e){const n=Ml(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(so(r,e!=null?e:{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function Eb(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ib(){return ch()==="http:"||ch()==="https:"}function ch(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ib()||q_()||"connection"in navigator)?navigator.onLine:!0}function kb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=j_()||H_()}get(){return Tb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=new br(3e4,6e4);function Er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ir(t,e,n,s,i={}){return Vm(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=sr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Fm.fetch()(Bm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Vm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Sb),e);try{const i=new Ab(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Fr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Fr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Fr(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw wb(t,h,c);ln(t,h)}}catch(i){if(i instanceof Bn)throw i;ln(t,"network-request-failed")}}async function Tr(t,e,n,s,i={}){const r=await Ir(t,e,n,s,i);return"mfaPendingCredential"in r&&ln(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Bm(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Pc(t.config,i):`${t.config.apiScheme}://${i}`}class Ab{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(mn(this.auth,"network-request-failed")),Cb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=mn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(t,e){return Ir(t,"POST","/v1/accounts:delete",e)}async function Rb(t,e){return Ir(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nb(t,e=!1){const n=Ft(t),s=await n.getIdToken(e),i=Lc(s);pe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Pi(Pa(i.auth_time)),issuedAtTime:Pi(Pa(i.iat)),expirationTime:Pi(Pa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Pa(t){return Number(t)*1e3}function Lc(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return zr("JWT malformed, contained fewer than 3 sections"),null;try{const r=vd(s);return r?JSON.parse(r):(zr("Failed to decode base64 JWT payload"),null)}catch(r){return zr("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function Ob(t){const e=Lc(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Bn&&Pb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Pb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pi(this.lastLoginAt),this.creationTime=Pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Wi(t,Rb(n,{idToken:s}));pe(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ub(r.providerUserInfo):[],a=$b(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new jm(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Mb(t){const e=Ft(t);await To(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $b(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Ub(t){return t.map(e=>{var{providerId:n}=e,s=Nc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(t,e){const n=await Vm(t,{},async()=>{const s=sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Bm(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ob(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return pe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Fb(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Qi;return s&&(pe(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(pe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(pe(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ms{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Nc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new jm(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Nb(this,e)}reload(){return Mb(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await To(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wi(this,Db(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:$,emailVerified:P,isAnonymous:O,providerData:L,stsTokenManager:M}=n;pe($&&M,e,"internal-error");const H=Qi.fromJSON(this.name,M);pe(typeof $=="string",e,"internal-error"),qn(f,e.name),qn(d,e.name),pe(typeof P=="boolean",e,"internal-error"),pe(typeof O=="boolean",e,"internal-error"),qn(g,e.name),qn(_,e.name),qn(v,e.name),qn(w,e.name),qn(E,e.name),qn(S,e.name);const N=new ms({uid:$,auth:e,email:d,emailVerified:P,displayName:f,isAnonymous:O,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:H,createdAt:E,lastLoginAt:S});return L&&Array.isArray(L)&&(N.providerData=L.map(D=>Object.assign({},D))),w&&(N._redirectEventId=w),N}static async _fromIdTokenResponse(e,n,s=!1){const i=new Qi;i.updateFromServerResponse(n);const r=new ms({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await To(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qm.type="NONE";const uh=qm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Kr(this.userKey,i.apiKey,r),this.fullPersistenceKey=Kr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Bs(Pn(uh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Pn(uh);const o=Kr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=ms._fromJSON(e,h);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Bs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Bs(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gm(e))return"Blackberry";if(Wm(e))return"Webos";if(Mc(e))return"Safari";if((e.includes("chrome/")||xm(e))&&!e.includes("edge/"))return"Chrome";if(Km(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Hm(t=Ot()){return/firefox\//i.test(t)}function Mc(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xm(t=Ot()){return/crios\//i.test(t)}function zm(t=Ot()){return/iemobile/i.test(t)}function Km(t=Ot()){return/android/i.test(t)}function Gm(t=Ot()){return/blackberry/i.test(t)}function Wm(t=Ot()){return/webos/i.test(t)}function aa(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vb(t=Ot()){var e;return aa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Bb(){return x_()&&document.documentMode===10}function Qm(t=Ot()){return aa(t)||Km(t)||Wm(t)||Gm(t)||/windows phone/i.test(t)||zm(t)}function jb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e=[]){let n;switch(t){case"Browser":n=hh(Ot());break;case"Worker":n=`${hh(Ot())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ir}/${s}`}/**
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
 */class qb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fh(this),this.idTokenSubscription=new fh(this),this.beforeStateQueue=new qb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Um,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await To(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ft(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return pe(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ym(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function kr(t){return Ft(t)}class fh{constructor(e){this.auth=e,this.observer=null,this.addObserver=rv(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xb(t,e,n){const s=kr(t);pe(s._canInitEmulator,s,"emulator-config-failed"),pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Xm(e),{host:o,port:a}=zb(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Kb()}function Xm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zb(t){const e=Xm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:dh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:dh(o)}}}function dh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Kb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function Gb(t,e){return Ir(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(t,e){return Tr(t,"POST","/v1/accounts:signInWithPassword",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(t,e){return Tr(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}async function Yb(t,e){return Tr(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends $c{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Yi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Yi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Wb(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qb(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Gb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Yb(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e){return Tr(t,"POST","/v1/accounts:signInWithIdp",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb="http://localhost";class Is extends $c{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Nc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Is(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,js(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:Xb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zb(t){const e=bi(Ei(t)).link,n=e?bi(Ei(e)).deep_link_id:null,s=bi(Ei(t)).deep_link_id;return(s?bi(Ei(s)).link:null)||s||n||e||t}class Uc{constructor(e){var n,s,i,r,o,a;const l=bi(Ei(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,f=Jb((i=l.mode)!==null&&i!==void 0?i:null);pe(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Zb(e);try{return new Uc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(e,n){return Yi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Uc.parseLink(n);return pe(s,"argument-error"),Yi._fromEmailAndCode(e,s.code,s.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Jm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Sr{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Is._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return xn.credential(n,s)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Sr{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Sr{constructor(){super("twitter.com")}static credential(e,n){return Is._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Kn.credential(n,s)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(t,e){return Tr(t,"POST","/v1/accounts:signUp",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ms._fromIdTokenResponse(e,s,i),o=ph(s);return new Ts({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=ph(s);return new Ts({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function ph(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends Bn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ko.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ko(e,n,s,i)}}function Zm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ko._fromErrorAndOperation(t,r,e,s):r})}async function tE(t,e,n=!1){const s=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ts._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await Wi(t,Zm(i,r,e,t),n);pe(o.idToken,i,"internal-error");const a=Lc(o.idToken);pe(a,i,"internal-error");const{sub:l}=a;return pe(t.uid===l,i,"user-mismatch"),Ts._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&ln(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(t,e,n=!1){const s="signIn",i=await Zm(t,s,e),r=await Ts._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function sE(t,e){return eg(kr(t),e)}async function iE(t,e,n){const s=kr(t),i=await eE(s,{returnSecureToken:!0,email:e,password:n}),r=await Ts._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function rE(t,e,n){return sE(Ft(t),ai.credential(e,n))}function oE(t,e,n,s){return Ft(t).onIdTokenChanged(e,n,s)}function aE(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}const So="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(So,"1"),this.storage.removeItem(So),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(){const t=Ot();return Mc(t)||aa(t)}const cE=1e3,uE=10;class ng extends tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lE()&&jb(),this.fallbackToPolling=Qm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Bb()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},cE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ng.type="LOCAL";const hE=ng;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg extends tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sg.type="SESSION";const ig=sg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new la(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await fE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Fc("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function pE(t){gn().location.href=t}/**
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
 */function rg(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function mE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _E(){return rg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="firebaseLocalStorageDb",vE=1,Co="firebaseLocalStorage",ag="fbase_key";class Cr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ca(t,e){return t.transaction([Co],e?"readwrite":"readonly").objectStore(Co)}function yE(){const t=indexedDB.deleteDatabase(og);return new Cr(t).toPromise()}function yl(){const t=indexedDB.open(og,vE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Co,{keyPath:ag})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Co)?e(s):(s.close(),await yE(),e(await yl()))})})}async function mh(t,e,n){const s=ca(t,!0).put({[ag]:e,value:n});return new Cr(s).toPromise()}async function wE(t,e){const n=ca(t,!1).get(e),s=await new Cr(n).toPromise();return s===void 0?null:s.value}function gh(t,e){const n=ca(t,!0).delete(e);return new Cr(n).toPromise()}const bE=800,EE=3;class lg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>EE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(_E()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mE(),!this.activeServiceWorker)return;this.sender=new dE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yl();return await mh(e,So,"1"),await gh(e,So),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>mh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>wE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ca(i,!1).getAll();return new Cr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lg.type="LOCAL";const IE=lg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=mn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",TE().appendChild(s)})}function SE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new br(3e4,6e4);/**
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
 */function CE(t,e){return e?Pn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends $c{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AE(t){return eg(t.auth,new Vc(t),t.bypassAuthState)}function DE(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),nE(n,new Vc(t),t.bypassAuthState)}async function RE(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),tE(n,new Vc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AE;case"linkViaPopup":case"linkViaRedirect":return RE;case"reauthViaPopup":case"reauthViaRedirect":return DE;default:ln(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=new br(2e3,1e4);class $s extends cg{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,$s.currentPopupAction&&$s.currentPopupAction.cancel(),$s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Fc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,NE.get())};e()}}$s.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="pendingRedirect",Gr=new Map;class PE extends cg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Gr.get(this.auth._key());if(!e){try{const s=await LE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Gr.set(this.auth._key(),e)}return this.bypassAuthState||Gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LE(t,e){const n=UE(e),s=$E(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function ME(t,e){Gr.set(t._key(),e)}function $E(t){return Pn(t._redirectPersistence)}function UE(t){return Kr(OE,t.config.apiKey,t.name)}async function FE(t,e,n=!1){const s=kr(t),i=CE(s,e),o=await new PE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=10*60*1e3;class BE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ug(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VE&&this.cachedEventUids.clear(),this.cachedEventUids.has(_h(e))}saveEventToCache(e){this.cachedEventUids.add(_h(e)),this.lastProcessedEventTime=Date.now()}}function _h(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ug({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ug(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(t,e={}){return Ir(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xE=/^https?/;async function zE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qE(t);for(const n of e)try{if(KE(n))return}catch{}ln(t,"unauthorized-domain")}function KE(t){const e=vl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!xE.test(n))return!1;if(HE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const GE=new br(3e4,6e4);function vh(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WE(t){return new Promise((e,n)=>{var s,i,r;function o(){vh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vh(),n(mn(t,"network-request-failed"))},timeout:GE.get()})}if(!((i=(s=gn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=gn().gapi)===null||r===void 0)&&r.load)o();else{const a=SE("iframefcb");return gn()[a]=()=>{gapi.load?o():n(mn(t,"network-request-failed"))},kE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function QE(t){return Wr=Wr||WE(t),Wr}/**
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
 */const YE=new br(5e3,15e3),XE="__/auth/iframe",JE="emulator/auth/iframe",ZE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tI(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pc(e,JE):`https://${t.config.authDomain}/${XE}`,s={apiKey:e.apiKey,appName:t.name,v:ir},i=eI.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${sr(s).slice(1)}`}async function nI(t){const e=await QE(t),n=gn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:tI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),a=gn().setTimeout(()=>{r(o)},YE.get());function l(){gn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const sI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iI=500,rI=600,oI="_blank",aI="http://localhost";class yh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lI(t,e,n,s=iI,i=rI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sI),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ot().toLowerCase();n&&(a=xm(c)?oI:n),Hm(c)&&(e=e||aI,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(Vb(c)&&a!=="_self")return cI(e||"",a),new yh(null);const f=window.open(e||"",a,h);pe(f,t,"popup-blocked");try{f.focus()}catch{}return new yh(f)}function cI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const uI="__/auth/handler",hI="emulator/auth/handler";function wh(t,e,n,s,i,r){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ir,eventId:i};if(e instanceof Jm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Sr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${fI(t)}?${sr(a).slice(1)}`}function fI({config:t}){return t.emulator?Pc(t,hI):`https://${t.authDomain}/${uI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="webStorageSupport";class dI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ig,this._completeRedirectFn=FE,this._overrideRedirectResult=ME}async _openPopup(e,n,s,i){var r;Vn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=wh(e,n,s,vl(),i);return lI(e,o,Fc())}async _openRedirect(e,n,s,i){return await this._originValidation(e),pE(wh(e,n,s,vl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Vn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await nI(e),s=new BE(e);return n.register("authEvent",i=>(pe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(La,{type:La},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[La];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qm()||Mc()||aa()}}const pI=dI;var bh="@firebase/auth",Eh="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _I(t){Ws(new _s("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{pe(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),pe(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ym(t)},h=new Hb(a,l,c);return Eb(h,n),h})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ws(new _s("auth-internal",e=>{const n=kr(e.getProvider("auth").getImmediate());return(s=>new mI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(bh,Eh,gI(t)),Qn(bh,Eh,"esm2017")}/**
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
 */const vI=5*60,yI=wd("authIdTokenMaxAge")||vI;let Ih=null;const wI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>yI)return;const i=n==null?void 0:n.token;Ih!==i&&(Ih=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bI(t=Td()){const e=Ml(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bb(t,{popupRedirectResolver:pI,persistence:[IE,hE,ig]}),s=wd("authTokenSyncURL");if(s){const r=wI(s);aE(n,r,()=>r(n.currentUser)),oE(n,o=>r(o))}const i=yd("auth");return i&&xb(n,`http://${i}`),n}_I("Browser");let Ao=[],Xi=[],Bc=[];const EI={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},hg=Id(EI),xt=tb(hg),fg=bI(hg),II=ss(xt,"binnacles"),dg=ss(xt,"contacts"),TI=ss(xt,"properties"),kI=ss(xt,"todos");console.log(dg);oa(II).then(t=>t.docs.map(e=>({...e.data(),id:e.id})));oa(dg).then(t=>Ao=t.docs.map(e=>({...e.data(),id:e.id})));oa(TI).then(t=>Xi=t.docs.map(e=>({...e.data(),id:e.id})));oa(kI).then(t=>Bc=t.docs.map(e=>({...e.data(),id:e.id})));const SI=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xE1bado"],CI=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];function Zt(t){typeof t=="string"?t=new Date(t):t=new Date(t);let e=t.getDate()+1;e<10&&(e="0"+e);let n=CI[t.getMonth()],s=t.getFullYear();return`${e}/${n}/${s}`}function AI(t){t=new Date(t);let e=t.getMinutes();e.length<2&&(e="0"+e);let n=t.getHours();return n>12&&(n=n-12),n<10&&(n="0"+n),t.getDate(),`${n}:${e}`}function DI(t){return t=new Date(+t),`${SI[t.getDay()]}-`}async function pg(t,e){if(console.log("estas en la funcion"),t==="todoAdding"){const n=ss(xt,"todos");await bo(n,e)}else t==="todoUpdate"?await Ac(Es(xt,"todos",e.id),e):t==="todoDelete"&&await Dc(Es(xt,"todos",e.id));e=""}function RI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,w,E,S,$,P,O,L,M,H;return{c(){e=p("body"),n=p("div"),i=b(),r=p("div"),o=p("div"),a=p("input"),l=b(),c=p("div"),h=p("input"),f=b(),d=p("input"),g=b(),_=p("div"),v=p("textarea"),w=b(),E=p("div"),S=p("button"),S.textContent="Guardar",$=b(),P=p("button"),P.textContent="Cancelar",m(n,"class","background svelte-5uk41o"),m(a,"type","text"),m(a,"class","inputTask svelte-5uk41o"),m(a,"placeholder","Agrega una Tarea o Cita"),m(h,"type","time"),m(h,"class","inputDate svelte-5uk41o"),m(d,"type","date"),m(d,"class","inputDate svelte-5uk41o"),m(c,"class","contDate"),m(v,"name","notes"),m(v,"cols","56"),m(v,"rows","5"),m(v,"placeholder","descripci\xF3n"),m(S,"class","btnShedule svelte-5uk41o"),m(P,"class","btnShedule svelte-5uk41o"),m(r,"class","pop-up svelte-5uk41o")},m(N,D){T(N,e,D),u(e,n),u(e,i),u(e,r),u(r,o),u(o,a),Se(a,t[0]),u(r,l),u(r,c),u(c,h),Se(h,t[1].timeTask),u(c,f),u(c,d),Se(d,t[1].endTask),u(r,g),u(r,_),u(_,v),Se(v,t[1].notes),u(r,w),u(r,E),u(E,S),u(E,$),u(E,P),L=!0,M||(H=[x(window,"keydown",t[4]),x(n,"click",t[2]),x(a,"input",t[5]),x(h,"input",t[6]),x(d,"input",t[7]),x(v,"input",t[8]),x(S,"click",t[3]),x(P,"click",t[2])],M=!0)},p(N,[D]){D&1&&a.value!==N[0]&&Se(a,N[0]),D&2&&Se(h,N[1].timeTask),D&2&&Se(d,N[1].endTask),D&2&&Se(v,N[1].notes)},i(N){L||(at(()=>{s||(s=pn(n,Eo,{},!0)),s.run(1)}),at(()=>{O||(O=pn(r,Io,{},!0)),O.run(1)}),L=!0)},o(N){s||(s=pn(n,Eo,{},!1)),s.run(0),O||(O=pn(r,Io,{},!1)),O.run(0),L=!1},d(N){N&&I(e),N&&s&&s.end(),N&&O&&O.end(),M=!1,Qe(H)}}}function NI(t,e,n){let s,i,r;We(t,on,$=>n(10,s=$)),We(t,Yt,$=>n(11,i=$)),We(t,Ve,$=>n(12,r=$));const o=zf();let a=`${r.name} ${r.lastname}`,l=[],c=[],h=new Date,f=h.getTime();console.log(f),l={task:"",isComplete:"",createdAt:"",timeTask:"",notes:"",user:""};function d(){o("closeIt"),Mt(Yt,i="contSelect",i),Mt(on,s="",s)}const g=async()=>{Mt(Yt,i="todoAdding",i),c=a,n(1,l={...l,endTask:f}),Mt(on,s={...l,task:c},s),pg(i,s),console.log(s),d()},_=$=>{$.key==="Enter"&&g()};function v(){a=this.value,n(0,a)}function w(){l.timeTask=this.value,n(1,l)}function E(){l.endTask=this.value,n(1,l)}function S(){l.notes=this.value,n(1,l)}return[a,l,d,g,_,v,w,E,S]}class OI extends Ke{constructor(e){super(),ze(this,e,NI,RI,Be,{})}}function Th(t,e,n){const s=t.slice();return s[19]=e[n],s}function kh(t,e,n){const s=t.slice();return s[19]=e[n],s}function PI(t){let e;return{c(){e=k("Editar")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function LI(t){let e;return{c(){e=k("Guardar")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function Sh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){T(n,e,s)},p:fe,d(n){n&&I(e)}}}function Ch(t){let e,n,s,i,r,o,a,l,c,h,f=Zt(t[19].endTask)+"",d,g,_=t[19].task+"",v,w,E,S;function $(){return t[11](t[19])}function P(){return t[12](t[19])}function O(){return t[13](t[19])}let L=t[19].notes&&Ah(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=b(),o=p("button"),o.textContent="\u2716",a=b(),l=p("button"),l.textContent="\u2714\u2716",c=b(),h=p("spam"),d=k(f),g=k(` -*-\r
                              `),v=k(_),w=k(` -*-\r
                              `),L&&L.c(),m(n,"class","schedule svelte-1e3ab80"),xs(n,"complete",t[19].isComplete)},m(M,H){T(M,e,H),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a),u(s,l),u(n,c),u(n,h),u(h,d),u(h,g),u(h,v),u(h,w),L&&L.m(h,null),E||(S=[x(i,"click",$),x(o,"click",P),x(l,"click",O)],E=!0)},p(M,H){t=M,H&2&&f!==(f=Zt(t[19].endTask)+"")&&de(d,f),H&2&&_!==(_=t[19].task+"")&&de(v,_),t[19].notes?L?L.p(t,H):(L=Ah(t),L.c(),L.m(h,null)):L&&(L.d(1),L=null),H&2&&xs(n,"complete",t[19].isComplete)},d(M){M&&I(e),L&&L.d(),E=!1,Qe(S)}}}function Ah(t){let e=t[19].notes+"",n;return{c(){n=k(e)},m(s,i){T(s,n,i)},p(s,i){i&2&&e!==(e=s[19].notes+"")&&de(n,e)},d(s){s&&I(n)}}}function Dh(t){let e,n=!t[19].timeTask&&Ch(t);return{c(){n&&n.c(),e=bn()},m(s,i){n&&n.m(s,i),T(s,e,i)},p(s,i){s[19].timeTask?n&&(n.d(1),n=null):n?n.p(s,i):(n=Ch(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&I(e)}}}function Rh(t){let e;return{c(){e=p("p"),e.textContent="No Hay Tareas Pendientes"},m(n,s){T(n,e,s)},p:fe,d(n){n&&I(e)}}}function Nh(t){let e,n,s,i,r,o,a,l,c,h,f=t[19].timeTask+"",d,g,_=Zt(t[19].endTask)+"",v,w,E=t[19].task+"",S,$,P,O;function L(){return t[14](t[19])}function M(){return t[15](t[19])}function H(){return t[16](t[19])}let N=t[19].notes&&Oh(t);return{c(){e=p("div"),n=p("li"),s=p("span"),i=p("button"),i.textContent="\u2714",r=b(),o=p("button"),o.textContent="\u2716",a=b(),l=p("button"),l.textContent="\u2714\u2716",c=b(),h=p("spam"),d=k(f),g=k(` -*-\r
                                 `),v=k(_),w=k(` -*-\r
                                 `),S=k(E),$=k(` -*-\r
                                 `),N&&N.c(),m(n,"class","schedule svelte-1e3ab80"),xs(n,"complete",t[19].isComplete)},m(D,W){T(D,e,W),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a),u(s,l),u(n,c),u(n,h),u(h,d),u(h,g),u(h,v),u(h,w),u(h,S),u(h,$),N&&N.m(h,null),P||(O=[x(i,"click",L),x(o,"click",M),x(l,"click",H),x(e,"dblclick",t[17])],P=!0)},p(D,W){t=D,W&2&&f!==(f=t[19].timeTask+"")&&de(d,f),W&2&&_!==(_=Zt(t[19].endTask)+"")&&de(v,_),W&2&&E!==(E=t[19].task+"")&&de(S,E),t[19].notes?N?N.p(t,W):(N=Oh(t),N.c(),N.m(h,null)):N&&(N.d(1),N=null),W&2&&xs(n,"complete",t[19].isComplete)},d(D){D&&I(e),N&&N.d(),P=!1,Qe(O)}}}function Oh(t){let e=t[19].notes+"",n;return{c(){n=k(e)},m(s,i){T(s,n,i)},p(s,i){i&2&&e!==(e=s[19].notes+"")&&de(n,e)},d(s){s&&I(n)}}}function Ph(t){let e,n=t[19].timeTask&&Nh(t);return{c(){n&&n.c(),e=bn()},m(s,i){n&&n.m(s,i),T(s,e,i)},p(s,i){s[19].timeTask?n?n.p(s,i):(n=Nh(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&I(e)}}}function MI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,w,E,S,$,P,O,L,M,H,N,D,W,U,X,J,K,F,oe,R,G,ie,A,ae,be,ge,V,Y,Ge;function Ce(ne,Fe){return ne[0]?PI:LI}let Oe=Ce(t),Le=Oe(t),je=t[1],$e=[];for(let ne=0;ne<je.length;ne+=1)$e[ne]=Dh(kh(t,je,ne));let Te=null;je.length||(Te=Sh());let Ue=t[1],qe=[];for(let ne=0;ne<Ue.length;ne+=1)qe[ne]=Ph(Th(t,Ue,ne));let Ae=null;return Ue.length||(Ae=Rh()),{c(){e=p("div"),n=p("h1"),n.textContent="Agenda",s=b(),i=p("img"),o=b(),a=p("div"),l=p("div"),h=b(),f=p("div"),d=p("div"),g=p("input"),_=b(),v=p("div"),w=p("input"),E=b(),S=p("input"),$=b(),P=p("div"),O=p("textarea"),L=b(),M=p("div"),H=p("button"),Le.c(),N=b(),D=p("button"),D.textContent="Cancelar",U=b(),X=p("div"),J=p("h3"),J.textContent="Tareas",K=b(),F=p("ol");for(let ne=0;ne<$e.length;ne+=1)$e[ne].c();Te&&Te.c(),oe=b(),R=p("p"),R.textContent=`${Lh}`,G=b(),ie=p("h3"),ie.textContent="Agenda",A=b(),ae=p("ol");for(let ne=0;ne<qe.length;ne+=1)qe[ne].c();Ae&&Ae.c(),be=b(),ge=p("p"),ge.textContent=`${Lh}`,_n(i.src,r=Lm)||m(i,"src",r),m(i,"alt","schedule"),m(i,"class","imgTitle svelte-1e3ab80"),m(l,"class","background"),m(g,"type","text"),m(g,"class","inputTask"),m(g,"cols","56"),m(g,"rows","1"),m(g,"placeholder","Agrega una Tarea o Cita"),m(w,"type","time"),m(w,"class","inputDate"),m(S,"type","date"),m(S,"class","inputDate"),m(v,"class","contDate"),m(O,"name","notes"),m(O,"id",""),m(O,"cols","56"),m(O,"rows","5"),m(O,"placeholder","descripci\xF3n"),m(f,"class","pop-up"),m(a,"class","container"),m(R,"class","error"),m(ge,"class","error"),m(X,"class","container"),m(e,"class","container")},m(ne,Fe){T(ne,e,Fe),u(e,n),u(e,s),u(e,i),u(e,o),u(e,a),u(a,l),u(a,h),u(a,f),u(f,d),u(d,g),Se(g,t[2].task),u(f,_),u(f,v),u(v,w),Se(w,t[2].timeTask),u(v,E),u(v,S),Se(S,t[2].endTask),u(f,$),u(f,P),u(P,O),Se(O,t[2].notes),u(f,L),u(f,M),u(M,H),Le.m(H,null),u(M,N),u(M,D),u(e,U),u(e,X),u(X,J),u(X,K),u(X,F);for(let _e=0;_e<$e.length;_e+=1)$e[_e].m(F,null);Te&&Te.m(F,null),u(F,oe),u(F,R),u(X,G),u(X,ie),u(X,A),u(X,ae);for(let _e=0;_e<qe.length;_e+=1)qe[_e].m(ae,null);Ae&&Ae.m(ae,null),u(ae,be),u(ae,ge),V=!0,Y||(Ge=[x(l,"click",t[6]),x(g,"input",t[7]),x(w,"input",t[8]),x(S,"input",t[9]),x(O,"input",t[10]),x(H,"click",t[3]),x(D,"click",t[6])],Y=!0)},p(ne,[Fe]){if(Fe&4&&g.value!==ne[2].task&&Se(g,ne[2].task),Fe&4&&Se(w,ne[2].timeTask),Fe&4&&Se(S,ne[2].endTask),Fe&4&&Se(O,ne[2].notes),Oe!==(Oe=Ce(ne))&&(Le.d(1),Le=Oe(ne),Le&&(Le.c(),Le.m(H,null))),Fe&50){je=ne[1];let _e;for(_e=0;_e<je.length;_e+=1){const Xe=kh(ne,je,_e);$e[_e]?$e[_e].p(Xe,Fe):($e[_e]=Dh(Xe),$e[_e].c(),$e[_e].m(F,oe))}for(;_e<$e.length;_e+=1)$e[_e].d(1);$e.length=je.length,!je.length&&Te?Te.p(ne,Fe):je.length?Te&&(Te.d(1),Te=null):(Te=Sh(),Te.c(),Te.m(F,oe))}if(Fe&50){Ue=ne[1];let _e;for(_e=0;_e<Ue.length;_e+=1){const Xe=Th(ne,Ue,_e);qe[_e]?qe[_e].p(Xe,Fe):(qe[_e]=Ph(Xe),qe[_e].c(),qe[_e].m(ae,be))}for(;_e<qe.length;_e+=1)qe[_e].d(1);qe.length=Ue.length,!Ue.length&&Ae?Ae.p(ne,Fe):Ue.length?Ae&&(Ae.d(1),Ae=null):(Ae=Rh(),Ae.c(),Ae.m(ae,be))}},i(ne){V||(at(()=>{c||(c=pn(l,Eo,{},!0)),c.run(1)}),at(()=>{W||(W=pn(f,Io,{},!0)),W.run(1)}),V=!0)},o(ne){c||(c=pn(l,Eo,{},!1)),c.run(0),W||(W=pn(f,Io,{},!1)),W.run(0),V=!1},d(ne){ne&&I(e),ne&&c&&c.end(),Le.d(),ne&&W&&W.end(),ot($e,ne),Te&&Te.d(),ot(qe,ne),Ae&&Ae.d(),Y=!1,Qe(Ge)}}}let Lh="";function $I(t,e,n){let s;We(t,on,O=>n(2,s=O));let i=!1,r=[];n(1,r=Bc.sort((O,L)=>O.endTask<L.endTask?1:O.endTask>L.endTask?-1:0));async function o(){if(i)await Ac(Es(xt,"todos",s.id),s),n(0,i=!1);else{const O=ss(xt,"todos");await bo(O,s)}Mt(on,s=[],s),location.href="/contactos"}async function a(O){confirm("Quieres borrarlo definitivmente?")==!0&&(console.log(O),await Dc(Es(xt,"todos",O)))}async function l(O){Mt(on,s=O,s),console.log(s),n(0,i=!0)}function c(){Mt(on,s=[],s),location.href="/contactos"}function h(){s.task=this.value,on.set(s)}function f(){s.timeTask=this.value,on.set(s)}function d(){s.endTask=this.value,on.set(s)}function g(){s.notes=this.value,on.set(s)}return[i,r,s,o,a,l,c,h,f,d,g,O=>(O.id,void 0),O=>a(O.id),O=>l(O),O=>(O.id,void 0),O=>a(O.id),O=>l(O),()=>l]}class mg extends Ke{constructor(e){super(),ze(this,e,$I,MI,Be,{})}}function UI(t){let e;return{c(){e=p("h1"),e.textContent="Estas en Sinergias"},m(n,s){T(n,e,s)},p:fe,i:fe,o:fe,d(n){n&&I(e)}}}class gg extends Ke{constructor(e){super(),ze(this,e,null,UI,Be,{})}}function FI(t){let e;return{c(){e=k("Inicia sesi\xF3n")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function VI(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,w,E,S,$,P,O,L,M,H,N,D,W,U,X;return D=new Ct({props:{to:"/login",$$slots:{default:[FI]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("br"),s=p("br"),i=p("br"),r=b(),o=p("div"),a=p("h1"),a.textContent="Registra tu cuenta",l=b(),c=p("div"),h=p("input"),f=b(),d=p("div"),g=p("input"),_=b(),v=p("br"),w=b(),E=p("div"),S=p("button"),S.textContent="Registrarse",$=b(),P=p("p"),P.textContent="O tambi\xE9n",O=b(),L=p("br"),M=b(),H=p("p"),N=k("\xBFYa tienes cuenta? "),se(D.$$.fragment),m(a,"class","text-center text-login svelte-ftg4em"),m(h,"name","email"),m(h,"type","email"),m(h,"class","input-form svelte-ftg4em"),m(h,"placeholder","Correo"),h.required=!0,m(c,"class","center svelte-ftg4em"),m(g,"name","password"),m(g,"type","password"),m(g,"class","input-form svelte-ftg4em"),m(g,"placeholder","Contrase\xF1a"),m(d,"class","center svelte-ftg4em"),m(S,"class","button-signup fondo-color-signup svelte-ftg4em"),m(E,"class","center svelte-ftg4em"),m(P,"class","text-center svelte-ftg4em"),m(H,"class","text-center svelte-ftg4em"),m(o,"class","form-signin svelte-ftg4em")},m(J,K){T(J,e,K),u(e,n),u(e,s),u(e,i),u(e,r),u(e,o),u(o,a),u(o,l),u(o,c),u(c,h),u(o,f),u(o,d),u(d,g),u(o,_),u(o,v),u(o,w),u(o,E),u(E,S),u(o,$),u(o,P),u(o,O),u(o,L),u(o,M),u(o,H),u(H,N),ee(D,H,null),W=!0,U||(X=[x(h,"input",t[2]),x(g,"input",t[3]),x(S,"click",t[1])],U=!0)},p(J,[K]){const F={};K&64&&(F.$$scope={dirty:K,ctx:J}),D.$set(F)},i(J){W||(B(D.$$.fragment,J),W=!0)},o(J){z(D.$$.fragment,J),W=!1},d(J){J&&I(e),te(D),U=!1,Qe(X)}}}function BI(t){const e=Nl();let n={email:"",password:""};const s=a=>{n={...n,[a.target.name]:a.target.value}};return[s,async()=>{try{await iE(fg,n.email,n.password),e("/")}catch(a){console.log(a)}},a=>s(a),a=>s(a)]}class jc extends Ke{constructor(e){super(),ze(this,e,BI,VI,Be,{})}}function Mh(t,e,n){const s=t.slice();return s[1]=e[n],s}function $h(t,e,n){const s=t.slice();return s[1]=e[n],s}function jI(t){let e,n,s=Zt(t[1].endTask)+"",i,r,o=t[1].task+"",a,l,c=t[1].notes&&qI(t);return{c(){e=p("ul"),n=p("li"),i=k(s),r=k(` - -\r
                    `),a=k(o),l=k(` - -\r
                    `),c&&c.c(),xs(n,"complete",t[1].isComplete)},m(h,f){T(h,e,f),u(e,n),u(n,i),u(n,r),u(n,a),u(n,l),c&&c.m(n,null)},p(h,f){h[1].notes&&c.p(h,f)},d(h){h&&I(e),c&&c.d()}}}function qI(t){let e=t[1].notes+"",n;return{c(){n=k(e)},m(s,i){T(s,n,i)},p:fe,d(s){s&&I(n)}}}function Uh(t){let e,n=!t[1].timeTask&&jI(t);return{c(){n&&n.c(),e=bn()},m(s,i){n&&n.m(s,i),T(s,e,i)},p(s,i){s[1].timeTask||n.p(s,i)},d(s){n&&n.d(s),s&&I(e)}}}function HI(t){let e,n,s,i=DI(t[1].endTask)+"",r,o,a=AI(t[1].endTask)+"",l,c,h=Zt(t[1].endTask)+"",f,d,g=t[1].task+"",_,v,w=t[1].notes&&xI(t);return{c(){e=p("ul"),n=p("li"),s=p("spam"),r=k(i),o=b(),l=k(a),c=k(` - -\r
                      `),f=k(h),d=b(),_=k(g),v=k(` - -\r
                      `),w&&w.c(),m(s,"type","number"),xs(n,"complete",t[1].isComplete)},m(E,S){T(E,e,S),u(e,n),u(n,s),u(s,r),u(s,o),u(s,l),u(s,c),u(s,f),u(s,d),u(s,_),u(s,v),w&&w.m(s,null)},p(E,S){E[1].notes&&w.p(E,S)},d(E){E&&I(e),w&&w.d()}}}function xI(t){let e=t[1].notes+"",n;return{c(){n=k(e)},m(s,i){T(s,n,i)},p:fe,d(s){s&&I(n)}}}function Fh(t){let e,n=t[1].timeTask&&HI(t);return{c(){n&&n.c(),e=b()},m(s,i){n&&n.m(s,i),T(s,e,i)},p(s,i){s[1].timeTask&&n.p(s,i)},d(s){n&&n.d(s),s&&I(e)}}}function zI(t){let e,n,s,i,r,o,a,l,c,h,f=t[0],d=[];for(let v=0;v<f.length;v+=1)d[v]=Uh($h(t,f,v));let g=t[0],_=[];for(let v=0;v<g.length;v+=1)_[v]=Fh(Mh(t,g,v));return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h1"),i.textContent="Agenda",r=b(),o=p("h3"),o.textContent="Tareas",a=b();for(let v=0;v<d.length;v+=1)d[v].c();l=b(),c=p("h3"),c.textContent="Citas",h=b();for(let v=0;v<_.length;v+=1)_[v].c();m(i,"class","title svelte-13rvwi6"),m(o,"class","subtitle svelte-13rvwi6"),m(c,"class","subtitle svelte-13rvwi6"),m(s,"class","schedule"),m(n,"class","container"),m(e,"class","show-home")},m(v,w){T(v,e,w),u(e,n),u(n,s),u(s,i),u(s,r),u(s,o),u(s,a);for(let E=0;E<d.length;E+=1)d[E].m(s,null);u(s,l),u(s,c),u(s,h);for(let E=0;E<_.length;E+=1)_[E].m(s,null)},p(v,[w]){if(w&1){f=v[0];let E;for(E=0;E<f.length;E+=1){const S=$h(v,f,E);d[E]?d[E].p(S,w):(d[E]=Uh(S),d[E].c(),d[E].m(s,l))}for(;E<d.length;E+=1)d[E].d(1);d.length=f.length}if(w&1){g=v[0];let E;for(E=0;E<g.length;E+=1){const S=Mh(v,g,E);_[E]?_[E].p(S,w):(_[E]=Fh(S),_[E].c(),_[E].m(s,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=g.length}},i:fe,o:fe,d(v){v&&I(e),ot(d,v),ot(_,v)}}}function KI(t){return[Bc]}class GI extends Ke{constructor(e){super(),ze(this,e,KI,zI,Be,{})}}const _g="/to-deploy-mh/assets/add-user.1bd66bde.png",WI="/to-deploy-mh/assets/house.99302696.png",QI="/to-deploy-mh/assets/team.31fda88c.png",Vh=Lt(!1);function YI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=b(),o=p("h1"),o.textContent="Contactos",_n(s.src,i=_g)||m(s,"src",i),m(s,"alt","Buzon"),m(s,"class","profile-img svelte-1gg3zdr"),m(o,"class","name svelte-1gg3zdr"),m(n,"class","optionCard svelte-1gg3zdr"),m(e,"class","container")},m(a,l){T(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&I(e)}}}function XI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=b(),o=p("h1"),o.textContent="Propiedades",_n(s.src,i=WI)||m(s,"src",i),m(s,"alt","propiedad"),m(s,"class","profile-img svelte-1gg3zdr"),m(o,"class","name svelte-1gg3zdr"),m(n,"class","optionCard svelte-1gg3zdr"),m(e,"class","container")},m(a,l){T(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&I(e)}}}function JI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=b(),o=p("h1"),o.textContent="Agenda",_n(s.src,i=Lm)||m(s,"src",i),m(s,"alt","agenda"),m(s,"class","profile-img svelte-1gg3zdr"),m(o,"class","name svelte-1gg3zdr"),m(n,"class","optionCard svelte-1gg3zdr"),m(e,"class","container")},m(a,l){T(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&I(e)}}}function ZI(t){let e,n,s,i,r,o;return{c(){e=p("div"),n=p("div"),s=p("img"),r=b(),o=p("h1"),o.textContent="Sinergias",_n(s.src,i=QI)||m(s,"src",i),m(s,"alt","sinergias"),m(s,"class","profile-img svelte-1gg3zdr"),m(o,"class","name svelte-1gg3zdr"),m(n,"class","optionCard svelte-1gg3zdr"),m(e,"class","container")},m(a,l){T(a,e,l),u(e,n),u(n,s),u(n,r),u(n,o)},p:fe,d(a){a&&I(e)}}}function eT(t){let e,n,s,i,r,o,a,l;return e=new Ct({props:{to:"/contactos",title:"contactos",$$slots:{default:[YI]},$$scope:{ctx:t}}}),s=new Ct({props:{to:"/propiedades",title:"propiedades",$$slots:{default:[XI]},$$scope:{ctx:t}}}),r=new Ct({props:{to:"/agenda",title:"agenda",$$slots:{default:[JI]},$$scope:{ctx:t}}}),a=new Ct({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[ZI]},$$scope:{ctx:t}}}),{c(){se(e.$$.fragment),n=b(),se(s.$$.fragment),i=b(),se(r.$$.fragment),o=b(),se(a.$$.fragment)},m(c,h){ee(e,c,h),T(c,n,h),ee(s,c,h),T(c,i,h),ee(r,c,h),T(c,o,h),ee(a,c,h),l=!0},p(c,h){const f={};h&1&&(f.$$scope={dirty:h,ctx:c}),e.$set(f);const d={};h&1&&(d.$$scope={dirty:h,ctx:c}),s.$set(d);const g={};h&1&&(g.$$scope={dirty:h,ctx:c}),r.$set(g);const _={};h&1&&(_.$$scope={dirty:h,ctx:c}),a.$set(_)},i(c){l||(B(e.$$.fragment,c),B(s.$$.fragment,c),B(r.$$.fragment,c),B(a.$$.fragment,c),l=!0)},o(c){z(e.$$.fragment,c),z(s.$$.fragment,c),z(r.$$.fragment,c),z(a.$$.fragment,c),l=!1},d(c){te(e,c),c&&I(n),te(s,c),c&&I(i),te(r,c),c&&I(o),te(a,c)}}}function tT(t){let e,n;return e=new mg({}),{c(){se(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function nT(t){let e,n;return e=new gg({}),{c(){se(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function sT(t){let e,n;return e=new jc({}),{c(){se(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function iT(t){let e,n;return e=new jc({}),{c(){se(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function rT(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v;return s=new Rl({props:{$$slots:{default:[eT]},$$scope:{ctx:t}}}),r=new Qt({props:{path:"/agenda",$$slots:{default:[tT]},$$scope:{ctx:t}}}),a=new Qt({props:{path:"/sinergias",$$slots:{default:[nT]},$$scope:{ctx:t}}}),c=new Qt({props:{path:"/login",$$slots:{default:[sT]},$$scope:{ctx:t}}}),f=new Qt({props:{path:"/registro",$$slots:{default:[iT]},$$scope:{ctx:t}}}),_=new GI({props:{"(orderTodos)":!0}}),{c(){e=p("body"),n=p("div"),se(s.$$.fragment),i=b(),se(r.$$.fragment),o=b(),se(a.$$.fragment),l=b(),se(c.$$.fragment),h=b(),se(f.$$.fragment),d=b(),g=p("div"),se(_.$$.fragment),m(n,"class","wrapper-grid svelte-1gg3zdr"),m(g,"class","")},m(w,E){T(w,e,E),u(e,n),ee(s,n,null),u(n,i),ee(r,n,null),u(n,o),ee(a,n,null),u(n,l),ee(c,n,null),u(n,h),ee(f,n,null),u(e,d),u(e,g),ee(_,g,null),v=!0},p(w,[E]){const S={};E&1&&(S.$$scope={dirty:E,ctx:w}),s.$set(S);const $={};E&1&&($.$$scope={dirty:E,ctx:w}),r.$set($);const P={};E&1&&(P.$$scope={dirty:E,ctx:w}),a.$set(P);const O={};E&1&&(O.$$scope={dirty:E,ctx:w}),c.$set(O);const L={};E&1&&(L.$$scope={dirty:E,ctx:w}),f.$set(L)},i(w){v||(B(s.$$.fragment,w),B(r.$$.fragment,w),B(a.$$.fragment,w),B(c.$$.fragment,w),B(f.$$.fragment,w),B(_.$$.fragment,w),v=!0)},o(w){z(s.$$.fragment,w),z(r.$$.fragment,w),z(a.$$.fragment,w),z(c.$$.fragment,w),z(f.$$.fragment,w),z(_.$$.fragment,w),v=!1},d(w){w&&I(e),te(s),te(r),te(a),te(c),te(f),te(_)}}}class oT extends Ke{constructor(e){super(),ze(this,e,null,rT,Be,{})}}function aT(t){let e,n,s,i,r,o,a,l,c,h,f=Zt(t[2])+"",d,g,_,v,w,E,S,$,P,O,L,M,H,N,D,W,U,X,J;return{c(){e=p("div"),n=p("div"),s=p("div"),i=p("h5"),r=k(t[0]),o=b(),a=k(t[1]),l=b(),c=p("h5"),h=k("Alta "),d=k(f),g=b(),_=p("div"),v=p("p"),w=k(t[3]),E=b(),S=p("p"),$=k("tel: "),P=k(t[4]),O=k(" email: "),L=k(t[5]),M=b(),H=p("p"),N=k("Presupuesto "),D=k(t[6]),W=b(),U=p("p"),X=k("Rango "),J=k(t[7]),m(s,"class","namePerson svelte-1uuhgxf"),m(_,"class","nameDate svelte-1uuhgxf"),m(n,"class","contactCard"),m(e,"class","container contact svelte-1uuhgxf")},m(K,F){T(K,e,F),u(e,n),u(n,s),u(s,i),u(i,r),u(i,o),u(i,a),u(s,l),u(s,c),u(c,h),u(c,d),u(n,g),u(n,_),u(_,v),u(v,w),u(_,E),u(_,S),u(S,$),u(S,P),u(S,O),u(S,L),u(_,M),u(_,H),u(H,N),u(H,D),u(_,W),u(_,U),u(U,X),u(U,J)},p(K,[F]){F&1&&de(r,K[0]),F&2&&de(a,K[1]),F&4&&f!==(f=Zt(K[2])+"")&&de(d,f),F&8&&de(w,K[3]),F&16&&de(P,K[4]),F&32&&de(L,K[5]),F&64&&de(D,K[6]),F&128&&de(J,K[7])},i:fe,o:fe,d(K){K&&I(e)}}}function lT(t,e,n){let{name:s,lastname:i,createdAt:r,contactStage:o,telephon:a,email:l,budget:c,rangeProp:h}=e;return t.$$set=f=>{"name"in f&&n(0,s=f.name),"lastname"in f&&n(1,i=f.lastname),"createdAt"in f&&n(2,r=f.createdAt),"contactStage"in f&&n(3,o=f.contactStage),"telephon"in f&&n(4,a=f.telephon),"email"in f&&n(5,l=f.email),"budget"in f&&n(6,c=f.budget),"rangeProp"in f&&n(7,h=f.rangeProp)},[s,i,r,o,a,l,c,h]}class cT extends Ke{constructor(e){super(),ze(this,e,lT,aT,Be,{name:0,lastname:1,createdAt:2,contactStage:3,telephon:4,email:5,budget:6,rangeProp:7})}}function uT(t){let e,n,s,i;return{c(){e=p("div"),n=p("input"),m(n,"class","searchInput svelte-6bonih"),m(n,"type","text"),m(n,"id","search-field"),m(n,"placeholder","Enter Search Term"),m(n,"autocomplete","off"),m(e,"id","search-input-cont")},m(r,o){T(r,e,o),u(e,n),Se(n,t[0]),s||(i=[x(n,"input",t[2]),x(n,"input",t[1])],s=!0)},p(r,[o]){o&1&&n.value!==r[0]&&Se(n,r[0])},i:fe,o:fe,d(r){r&&I(e),s=!1,Qe(i)}}}function hT(t,e,n){let{searchTerm:s}=e;function i(o){Ng.call(this,t,o)}function r(){s=this.value,n(0,s)}return t.$$set=o=>{"searchTerm"in o&&n(0,s=o.searchTerm)},[s,i,r]}class vg extends Ke{constructor(e){super(),ze(this,e,hT,uT,Be,{searchTerm:0})}}function fT(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,w,E,S,$,P,O,L,M,H,N,D,W,U,X,J,K,F,oe,R,G,ie,A,ae,be,ge;return{c(){e=p("main"),n=p("section"),s=p("figure"),i=p("img"),o=b(),a=p("div"),l=k(t[1]),c=b(),h=p("figcaption"),f=k(t[2]),d=b(),g=p("section"),_=p("section"),v=p("div"),w=p("div"),E=k(t[3]),S=k(" Rec\xE1maras"),$=b(),P=p("div"),O=k(t[4]),L=k(" Ba\xF1os"),M=b(),H=p("div"),N=k(t[5]),D=k(" Estacionamientos"),W=b(),U=p("div"),X=k(t[6]),J=k(" m2 de Contruccion"),K=b(),F=p("div"),oe=k(t[7]),R=k(" m2 de Terreno"),G=b(),ie=p("br"),A=b(),ae=p("div"),be=k("Precio $: "),ge=k(t[8]),_n(i.src,r=t[0])||m(i,"src",r),m(i,"alt",t[1]),m(i,"class","bkcover svelte-1w1p4eb"),m(a,"class","language svelte-1w1p4eb"),m(h,"class","svelte-1w1p4eb"),m(s,"class","bkcont svelte-1w1p4eb"),m(n,"class","book-top-info svelte-1w1p4eb"),m(v,"class","buy-options-cont svelte-1w1p4eb"),m(_,"class","from-pariyatti available-at svelte-1w1p4eb"),m(g,"class","book-bottom-links svelte-1w1p4eb")},m(V,Y){T(V,e,Y),u(e,n),u(n,s),u(s,i),u(s,o),u(s,a),u(a,l),u(s,c),u(s,h),u(h,f),u(e,d),u(e,g),u(g,_),u(_,v),u(v,w),u(w,E),u(w,S),u(v,$),u(v,P),u(P,O),u(P,L),u(v,M),u(v,H),u(H,N),u(H,D),u(v,W),u(v,U),u(U,X),u(U,J),u(v,K),u(v,F),u(F,oe),u(F,R),u(v,G),u(v,ie),u(v,A),u(v,ae),u(ae,be),u(ae,ge)},p(V,[Y]){Y&1&&!_n(i.src,r=V[0])&&m(i,"src",r),Y&2&&m(i,"alt",V[1]),Y&2&&de(l,V[1]),Y&4&&de(f,V[2]),Y&8&&de(E,V[3]),Y&16&&de(O,V[4]),Y&32&&de(N,V[5]),Y&64&&de(X,V[6]),Y&128&&de(oe,V[7]),Y&256&&de(ge,V[8])},i:fe,o:fe,d(V){V&&I(e)}}}function dT(t,e,n){let{urlImage:s,claveEB:i,nameProperty:r,beds:o,bathroom:a,park:l,areaBuilding:c,areaTotal:h,price:f}=e;return t.$$set=d=>{"urlImage"in d&&n(0,s=d.urlImage),"claveEB"in d&&n(1,i=d.claveEB),"nameProperty"in d&&n(2,r=d.nameProperty),"beds"in d&&n(3,o=d.beds),"bathroom"in d&&n(4,a=d.bathroom),"park"in d&&n(5,l=d.park),"areaBuilding"in d&&n(6,c=d.areaBuilding),"areaTotal"in d&&n(7,h=d.areaTotal),"price"in d&&n(8,f=d.price)},[s,i,r,o,a,l,c,h,f]}class pT extends Ke{constructor(e){super(),ze(this,e,dT,fT,Be,{urlImage:0,claveEB:1,nameProperty:2,beds:3,bathroom:4,park:5,areaBuilding:6,areaTotal:7,price:8})}}let ls;function mT(t){return t<=1e6?ls="PRM":t<=25e5?ls="SGN":t<=5e6?ls="TRC":t<=8e6?ls="CRT":t<=12e6?ls="QNT":t>12e6&&(ls="SXT"),ls}let Ma,$a;function gT(t){let e=Xi;return e=e.filter(n=>n.selectTP===t.selecTP),console.log("filtraste por tipo de propiedad",e),t.numBeds>0&&(e=e.filter(n=>n.beds>=t.numBeds)),t.numBaths>0&&(e=e.filter(n=>n.bathroom>=t.numBaths)),t.numParks>0&&(e=e.filter(n=>n.park>=t.numParks)),console.log("Por caracteristicas",e),t.budget?(console.log("filtraste por budget"),Ma=t.budget*.7,$a=t.budget*1.1,console.log(Ma,$a),e=e.filter(n=>n.price>=Ma&&n.price<=$a)):(console.log("filtraste por rango"),e=e.filter(n=>mT(n.price)===t.rangeProp)),console.log("filtraste presupuesto",e),t.locaProperty.length>0&&(e=e.filter(n=>t.locaProperty.some(s=>n.locaProperty.includes(s)))),console.log("Filtraste por Ubicacion",e),t.tagsProperty.length>0&&(e=e.filter(n=>t.tagsProperty.every(s=>n.tagsProperty.includes(s)))),console.log("Filtraste por localizacion",e),e.length===0||""+e.length,_l.set(e)}const Bh=["Casa","Terreno","Departamento","Casa o Departamento","Local Comercial","Casa de Campo"],jh=["Lona en Propiedad","Propiedades.com","NocNok","Mercado Libre","Vivanuncios","Lamudi","Inmuebles24","Referido","Otro"],qh=["Comprador","Arrendador","Propietario","Agente Asociado","Agente Inmobiliario","Constructor","Inversionista","Otro"],Hh=["Contado","Credito Hipotecario","INFONAVIT","COFINAVIT","FOVISSSTE","ALIADOS","Conyugal"],xh=["Rango","PRM","SGN","TRC","CRT","QNT","SXT","SPT"],zh=[0,1,2,3,4,5],Os=[0,1,2,3,4];function _T(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,w,E,S,$,P,O,L,M,H,N,D,W,U,X,J,K,F,oe,R,G,ie,A,ae,be,ge,V,Y,Ge;return{c(){e=p("div"),n=p("div"),s=p("label"),i=k(`/Norte\\\r
			`),r=p("input"),o=b(),a=p("div"),l=p("label"),c=k(`/Noroeste\r
			`),h=p("input"),f=b(),d=p("label"),g=p("input"),_=k("NorEste\\"),v=b(),w=p("div"),E=p("label"),S=k(`/Oeste\r
			`),$=p("input"),P=b(),O=p("label"),L=k(`Centro Norte\r
			`),M=p("input"),H=b(),N=p("label"),D=p("input"),W=k("Este\\"),U=b(),X=p("div"),J=p("label"),K=k(`Centro Sur\r
			`),F=p("input"),oe=b(),R=p("div"),G=p("label"),ie=k(`/SurOeste\r
			`),A=p("input"),ae=b(),be=p("label"),ge=p("input"),V=k("SurEste\\"),r.__value="Norte",r.value=r.__value,m(r,"id","north"),m(r,"type","checkbox"),t[2][0].push(r),m(s,"for","north"),m(n,"class","filterLocationOne svelte-1lvjb5r"),h.__value="Noroeste",h.value=h.__value,m(h,"id","northwest"),m(h,"type","checkbox"),t[2][0].push(h),m(l,"for","northwest"),g.__value="Noreste",g.value=g.__value,m(g,"id","northeast"),m(g,"type","checkbox"),t[2][0].push(g),m(d,"for","northeast"),m(a,"class","filterLocationOne svelte-1lvjb5r"),$.__value="Oeste",$.value=$.__value,m($,"id","west"),m($,"type","checkbox"),t[2][0].push($),m(E,"for","west"),M.__value="Centronorte",M.value=M.__value,m(M,"id","townNorth"),m(M,"type","checkbox"),t[2][0].push(M),m(O,"for","townNorth"),D.__value="Este",D.value=D.__value,m(D,"id","east"),m(D,"type","checkbox"),t[2][0].push(D),m(N,"for","east"),m(w,"class","filterLocationOne svelte-1lvjb5r"),F.__value="CentroSur",F.value=F.__value,m(F,"id","townsouth"),m(F,"type","checkbox"),t[2][0].push(F),m(J,"for","townsouth"),m(X,"class","filterLocationOne svelte-1lvjb5r"),A.__value="SurOeste",A.value=A.__value,m(A,"id","southwest"),m(A,"type","checkbox"),t[2][0].push(A),m(G,"for","southwest"),ge.__value="SurEste",ge.value=ge.__value,m(ge,"id","southeast"),m(ge,"type","checkbox"),t[2][0].push(ge),m(be,"for","southeast"),m(R,"class","filterLocationOne svelte-1lvjb5r"),m(e,"class","containerUbication svelte-1lvjb5r")},m(Ce,Oe){T(Ce,e,Oe),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(e,o),u(e,a),u(a,l),u(l,c),u(l,h),h.checked=~t[0].indexOf(h.__value),u(a,f),u(a,d),u(d,g),g.checked=~t[0].indexOf(g.__value),u(d,_),u(e,v),u(e,w),u(w,E),u(E,S),u(E,$),$.checked=~t[0].indexOf($.__value),u(w,P),u(w,O),u(O,L),u(O,M),M.checked=~t[0].indexOf(M.__value),u(w,H),u(w,N),u(N,D),D.checked=~t[0].indexOf(D.__value),u(N,W),u(e,U),u(e,X),u(X,J),u(J,K),u(J,F),F.checked=~t[0].indexOf(F.__value),u(e,oe),u(e,R),u(R,G),u(G,ie),u(G,A),A.checked=~t[0].indexOf(A.__value),u(R,ae),u(R,be),u(be,ge),ge.checked=~t[0].indexOf(ge.__value),u(be,V),Y||(Ge=[x(r,"change",t[1]),x(h,"change",t[3]),x(g,"change",t[4]),x($,"change",t[5]),x(M,"change",t[6]),x(D,"change",t[7]),x(F,"change",t[8]),x(A,"change",t[9]),x(ge,"change",t[10])],Y=!0)},p(Ce,[Oe]){Oe&1&&(r.checked=~Ce[0].indexOf(r.__value)),Oe&1&&(h.checked=~Ce[0].indexOf(h.__value)),Oe&1&&(g.checked=~Ce[0].indexOf(g.__value)),Oe&1&&($.checked=~Ce[0].indexOf($.__value)),Oe&1&&(M.checked=~Ce[0].indexOf(M.__value)),Oe&1&&(D.checked=~Ce[0].indexOf(D.__value)),Oe&1&&(F.checked=~Ce[0].indexOf(F.__value)),Oe&1&&(A.checked=~Ce[0].indexOf(A.__value)),Oe&1&&(ge.checked=~Ce[0].indexOf(ge.__value))},i:fe,o:fe,d(Ce){Ce&&I(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(h),1),t[2][0].splice(t[2][0].indexOf(g),1),t[2][0].splice(t[2][0].indexOf($),1),t[2][0].splice(t[2][0].indexOf(M),1),t[2][0].splice(t[2][0].indexOf(D),1),t[2][0].splice(t[2][0].indexOf(F),1),t[2][0].splice(t[2][0].indexOf(A),1),t[2][0].splice(t[2][0].indexOf(ge),1),Y=!1,Qe(Ge)}}}function vT(t,e,n){let{ubication:s}=e;const i=[[]];function r(){s=bt(i[0],this.__value,this.checked),n(0,s)}function o(){s=bt(i[0],this.__value,this.checked),n(0,s)}function a(){s=bt(i[0],this.__value,this.checked),n(0,s)}function l(){s=bt(i[0],this.__value,this.checked),n(0,s)}function c(){s=bt(i[0],this.__value,this.checked),n(0,s)}function h(){s=bt(i[0],this.__value,this.checked),n(0,s)}function f(){s=bt(i[0],this.__value,this.checked),n(0,s)}function d(){s=bt(i[0],this.__value,this.checked),n(0,s)}function g(){s=bt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=_=>{"ubication"in _&&n(0,s=_.ubication)},[s,r,i,o,a,l,c,h,f,d,g]}class yT extends Ke{constructor(e){super(),ze(this,e,vT,_T,Be,{ubication:0})}}function wT(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,w,E,S,$,P,O,L,M,H,N,D,W,U,X,J,K,F,oe;return{c(){e=p("section"),n=p("div"),s=p("label"),i=k(`Fracc. Privado\r
		   `),r=p("input"),o=b(),a=p("label"),l=k(`Frente a Parque\r
         `),c=p("input"),h=b(),f=p("label"),d=k(`Una Planta\r
         `),g=p("input"),_=b(),v=p("div"),w=p("label"),E=k(`Recamara en P.B.\r
		`),S=p("input"),$=b(),P=p("label"),O=k(`Patio Amplio\r
   `),L=p("input"),M=b(),H=p("label"),N=k(`Lista para Habitarse\r
   `),D=p("input"),W=b(),U=p("div"),X=p("label"),J=k(`Nueva\r
		`),K=p("input"),m(r,"type","checkbox"),r.__value="Fracc. Privado",r.value=r.__value,t[2][0].push(r),m(c,"type","checkbox"),c.__value="Frente a Parque",c.value=c.__value,t[2][0].push(c),m(g,"type","checkbox"),g.__value="Una Planta",g.value=g.__value,t[2][0].push(g),m(n,"class","svelte-1b9bvt0"),m(S,"type","checkbox"),S.__value="Recamara en PB",S.value=S.__value,t[2][0].push(S),m(L,"type","checkbox"),L.__value="Patio Amplio",L.value=L.__value,t[2][0].push(L),m(D,"type","checkbox"),D.__value="Lista Habitarse",D.value=D.__value,t[2][0].push(D),m(v,"class","svelte-1b9bvt0"),m(K,"type","checkbox"),K.__value="Nueva",K.value=K.__value,t[2][0].push(K),m(U,"class","svelte-1b9bvt0"),m(e,"class","svelte-1b9bvt0")},m(R,G){T(R,e,G),u(e,n),u(n,s),u(s,i),u(s,r),r.checked=~t[0].indexOf(r.__value),u(n,o),u(n,a),u(a,l),u(a,c),c.checked=~t[0].indexOf(c.__value),u(n,h),u(n,f),u(f,d),u(f,g),g.checked=~t[0].indexOf(g.__value),u(e,_),u(e,v),u(v,w),u(w,E),u(w,S),S.checked=~t[0].indexOf(S.__value),u(v,$),u(v,P),u(P,O),u(P,L),L.checked=~t[0].indexOf(L.__value),u(v,M),u(v,H),u(H,N),u(H,D),D.checked=~t[0].indexOf(D.__value),u(e,W),u(e,U),u(U,X),u(X,J),u(X,K),K.checked=~t[0].indexOf(K.__value),F||(oe=[x(r,"change",t[1]),x(c,"change",t[3]),x(g,"change",t[4]),x(S,"change",t[5]),x(L,"change",t[6]),x(D,"change",t[7]),x(K,"change",t[8])],F=!0)},p(R,[G]){G&1&&(r.checked=~R[0].indexOf(r.__value)),G&1&&(c.checked=~R[0].indexOf(c.__value)),G&1&&(g.checked=~R[0].indexOf(g.__value)),G&1&&(S.checked=~R[0].indexOf(S.__value)),G&1&&(L.checked=~R[0].indexOf(L.__value)),G&1&&(D.checked=~R[0].indexOf(D.__value)),G&1&&(K.checked=~R[0].indexOf(K.__value))},i:fe,o:fe,d(R){R&&I(e),t[2][0].splice(t[2][0].indexOf(r),1),t[2][0].splice(t[2][0].indexOf(c),1),t[2][0].splice(t[2][0].indexOf(g),1),t[2][0].splice(t[2][0].indexOf(S),1),t[2][0].splice(t[2][0].indexOf(L),1),t[2][0].splice(t[2][0].indexOf(D),1),t[2][0].splice(t[2][0].indexOf(K),1),F=!1,Qe(oe)}}}function bT(t,e,n){let{tag:s}=e;const i=[[]];function r(){s=bt(i[0],this.__value,this.checked),n(0,s)}function o(){s=bt(i[0],this.__value,this.checked),n(0,s)}function a(){s=bt(i[0],this.__value,this.checked),n(0,s)}function l(){s=bt(i[0],this.__value,this.checked),n(0,s)}function c(){s=bt(i[0],this.__value,this.checked),n(0,s)}function h(){s=bt(i[0],this.__value,this.checked),n(0,s)}function f(){s=bt(i[0],this.__value,this.checked),n(0,s)}return t.$$set=d=>{"tag"in d&&n(0,s=d.tag)},[s,r,i,o,a,l,c,h,f]}class ET extends Ke{constructor(e){super(),ze(this,e,bT,wT,Be,{tag:0})}}function Kh(t,e,n){const s=t.slice();return s[24]=e[n],s}function Gh(t,e,n){const s=t.slice();return s[27]=e[n],s}function Wh(t,e,n){const s=t.slice();return s[30]=e[n],s}function Qh(t,e,n){const s=t.slice();return s[33]=e[n],s}function Yh(t,e,n){const s=t.slice();return s[36]=e[n],s}function Xh(t,e,n){const s=t.slice();return s[39]=e[n],s}function Jh(t,e,n){const s=t.slice();return s[42]=e[n],s}function Zh(t,e,n){const s=t.slice();return s[45]=e[n],s}function ef(t,e,n){const s=t.slice();return s[48]=e[n],s}function tf(t,e,n){const s=t.slice();return s[51]=e[n],s}function IT(t){let e,n=Zt(t[2].createdAt)+"",s,i,r;return{c(){e=p("h3"),s=k(n),m(e,"class","dataInput svelte-1myljlf")},m(o,a){T(o,e,a),u(e,s),i||(r=x(e,"dblclick",t[3]),i=!0)},p(o,a){a[0]&4&&n!==(n=Zt(o[2].createdAt)+"")&&de(s,n)},d(o){o&&I(e),i=!1,r()}}}function TT(t){let e,n,s;return{c(){e=p("input"),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","date")},m(i,r){T(i,e,r),Se(e,t[2].createdAt),n||(s=x(e,"input",t[4]),n=!0)},p(i,r){r[0]&5&&Se(e,i[2].createdAt)},d(i){i&&I(e),n=!1,s()}}}function nf(t){let e,n=t[51]+"",s,i;return{c(){e=p("option"),s=k(n),m(e,"class","dataInput svelte-1myljlf"),m(e,"type","checkbox"),e.__value=i=t[51],e.value=e.__value},m(r,o){T(r,e,o),u(e,s)},p(r,o){o[0]&1&&n!==(n=r[51]+"")&&de(s,n),o[0]&1&&i!==(i=r[51])&&(e.__value=i,e.value=e.__value)},d(r){r&&I(e)}}}function sf(t){let e,n=t[48]+"",s;return{c(){e=p("option"),s=k(n),m(e,"type","checkbox"),e.__value=t[48],e.value=e.__value},m(i,r){T(i,e,r),u(e,s)},p:fe,d(i){i&&I(e)}}}function rf(t){let e,n=t[45]+"",s;return{c(){e=p("option"),s=k(n),m(e,"type","checkbox"),e.__value=t[45],e.value=e.__value},m(i,r){T(i,e,r),u(e,s)},p:fe,d(i){i&&I(e)}}}function of(t){let e,n=t[42]+"",s;return{c(){e=p("option"),s=k(n),m(e,"type","checkbox"),e.__value=t[42],e.value=e.__value},m(i,r){T(i,e,r),u(e,s)},p:fe,d(i){i&&I(e)}}}function af(t){let e,n=t[39]+"",s;return{c(){e=p("option"),s=k(n),m(e,"type","checkbox"),e.__value=t[39],e.value=e.__value},m(i,r){T(i,e,r),u(e,s)},p:fe,d(i){i&&I(e)}}}function lf(t){let e,n=t[36]+"",s;return{c(){e=p("option"),s=k(n),m(e,"type","checkbox"),e.__value=t[36],e.value=e.__value},m(i,r){T(i,e,r),u(e,s)},p:fe,d(i){i&&I(e)}}}function cf(t){let e,n=t[33]+"",s,i;return{c(){e=p("option"),s=k(n),i=k(" Rec\xE1maras"),m(e,"type","checkbox"),e.__value=t[33],e.value=e.__value},m(r,o){T(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&I(e)}}}function uf(t){let e,n=t[30]+"",s,i;return{c(){e=p("option"),s=k(n),i=k(" ba\xF1os"),m(e,"type","checkbox"),e.__value=t[30],e.value=e.__value},m(r,o){T(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&I(e)}}}function hf(t){let e,n=t[27]+"",s,i;return{c(){e=p("option"),s=k(n),i=k(" Medios ba\xF1os"),m(e,"type","checkbox"),e.__value=t[27],e.value=e.__value},m(r,o){T(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&I(e)}}}function ff(t){let e,n=t[24]+"",s,i;return{c(){e=p("option"),s=k(n),i=k(" Estacionamientos"),m(e,"type","checkbox"),e.__value=t[24],e.value=e.__value},m(r,o){T(r,e,o),u(e,s),u(e,i)},p:fe,d(r){r&&I(e)}}}function kT(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,w,E,S,$,P,O,L,M,H,N,D,W,U,X,J,K,F,oe,R,G,ie,A,ae,be,ge,V,Y,Ge,Ce,Oe,Le,je,$e,Te,Ue,qe,Ae,ne,Fe,_e,Xe,en,cn,tn,En;function li(y,Q){return y[1]?TT:IT}let nn=li(t),Vt=nn(t),In=t[0],Je=[];for(let y=0;y<In.length;y+=1)Je[y]=nf(tf(t,In,y));let Tn=qh,it=[];for(let y=0;y<Tn.length;y+=1)it[y]=sf(ef(t,Tn,y));let kn=jh,ht=[];for(let y=0;y<kn.length;y+=1)ht[y]=rf(Zh(t,kn,y));let sn=Hh,ft=[];for(let y=0;y<sn.length;y+=1)ft[y]=of(Jh(t,sn,y));let Sn=Bh,dt=[];for(let y=0;y<Sn.length;y+=1)dt[y]=af(Xh(t,Sn,y));let rn=xh,pt=[];for(let y=0;y<rn.length;y+=1)pt[y]=lf(Yh(t,rn,y));let Cn=zh,Pe=[];for(let y=0;y<Cn.length;y+=1)Pe[y]=cf(Qh(t,Cn,y));let Wt=Os,wt=[];for(let y=0;y<Wt.length;y+=1)wt[y]=uf(Wh(t,Wt,y));let un=Os,Ze=[];for(let y=0;y<un.length;y+=1)Ze[y]=hf(Gh(t,un,y));let An=Os,et=[];for(let y=0;y<An.length;y+=1)et[y]=ff(Kh(t,An,y));function Ar(y){t[21](y)}let ci={};t[2].locaProperty!==void 0&&(ci.ubication=t[2].locaProperty),ne=new yT({props:ci}),zs.push(()=>eo(ne,"ubication",Ar));function ui(y){t[22](y)}let jn={};return t[2].tagsProperty!==void 0&&(jn.tag=t[2].tagsProperty),Xe=new ET({props:jn}),zs.push(()=>eo(Xe,"tag",ui)),{c(){e=p("h1"),e.textContent="Alta Contactos",n=b(),s=p("div"),i=p("div"),Vt.c(),r=b(),o=p("div"),a=p("input"),l=b(),c=p("input"),h=b(),f=p("div"),d=p("input"),g=b(),_=p("input"),v=b(),w=p("div"),E=p("select"),S=p("option"),S.textContent="Propiedad de Contacto";for(let y=0;y<Je.length;y+=1)Je[y].c();$=b(),P=p("input"),O=b(),L=p("div"),M=p("input"),H=b(),N=p("select"),D=p("option"),D.textContent="Tipo de Contacto";for(let y=0;y<it.length;y+=1)it[y].c();W=b(),U=p("select"),X=p("option"),X.textContent="Modo de Contacto";for(let y=0;y<ht.length;y+=1)ht[y].c();J=b(),K=p("select"),F=p("option"),F.textContent="Modo de Pago";for(let y=0;y<ft.length;y+=1)ft[y].c();oe=b(),R=p("select"),G=p("option"),G.textContent="Tipo de Propiedad";for(let y=0;y<dt.length;y+=1)dt[y].c();ie=b(),A=p("select"),ae=p("option"),ae.textContent="Rango de Busqueda";for(let y=0;y<pt.length;y+=1)pt[y].c();be=b(),ge=p("select"),V=p("option"),V.textContent="# Rec\xE1maras";for(let y=0;y<Pe.length;y+=1)Pe[y].c();Y=b(),Ge=p("select"),Ce=p("option"),Ce.textContent="# Ba\xF1os";for(let y=0;y<wt.length;y+=1)wt[y].c();Oe=b(),Le=p("select"),je=p("option"),je.textContent="# Medios Ba\xF1os";for(let y=0;y<Ze.length;y+=1)Ze[y].c();$e=b(),Te=p("select"),Ue=p("option"),Ue.textContent="# Estacionamientos";for(let y=0;y<et.length;y+=1)et[y].c();qe=b(),Ae=p("div"),se(ne.$$.fragment),_e=b(),se(Xe.$$.fragment),m(e,"class","sectionTitle"),m(a,"class","dataInput svelte-1myljlf"),m(a,"type","text"),m(a,"placeholder","Nombre"),m(c,"class","dataInput svelte-1myljlf"),m(c,"type","text"),m(c,"placeholder","Apellido"),m(o,"class","contactInput"),m(d,"class","dataInput svelte-1myljlf"),m(d,"type","tel"),m(d,"placeholder","tel\xE9fono"),m(_,"class","dataInput svelte-1myljlf"),m(_,"type","email"),m(_,"placeholder","email"),m(f,"class","contactInput"),m(s,"class",""),S.disabled=!0,S.selected=!0,S.__value="",S.value=S.__value,m(E,"class","dataInput svelte-1myljlf"),m(E,"id","selTP"),m(E,"name","selTP"),t[2].propCont===void 0&&at(()=>t[9].call(E)),m(P,"class","dataInput svelte-1myljlf"),m(P,"type","number"),m(P,"placeholder","Presupuesto"),m(w,"class","col"),m(M,"class","textareaInput svelte-1myljlf"),m(M,"type","textarea"),m(M,"placeholder","Comentarios"),m(L,"class","col"),D.disabled=!0,D.selected=!0,D.__value="",D.value=D.__value,m(N,"class","othersInput svelte-1myljlf"),t[2].typeContact===void 0&&at(()=>t[12].call(N)),X.disabled=!0,X.selected=!0,X.__value="",X.value=X.__value,m(U,"class","othersInput svelte-1myljlf"),t[2].selecMC===void 0&&at(()=>t[13].call(U)),F.disabled=!0,F.selected=!0,F.__value="",F.value=F.__value,m(K,"class","othersInput svelte-1myljlf"),t[2].modePay===void 0&&at(()=>t[14].call(K)),G.disabled=!0,G.selected=!0,G.__value="",G.value=G.__value,m(R,"class","othersInput svelte-1myljlf"),m(R,"id","selTP"),m(R,"name","selTP"),t[2].selecTP===void 0&&at(()=>t[15].call(R)),ae.disabled=!0,ae.selected=!0,ae.__value="",ae.value=ae.__value,m(A,"class","othersInput svelte-1myljlf"),m(A,"id","ranges"),m(A,"name","ranges"),t[2].rangeProp===void 0&&at(()=>t[16].call(A)),V.disabled=!0,V.selected=!0,V.__value="",V.value=V.__value,m(ge,"class","othersInput svelte-1myljlf"),t[2].numBeds===void 0&&at(()=>t[17].call(ge)),Ce.disabled=!0,Ce.selected=!0,Ce.__value="",Ce.value=Ce.__value,m(Ge,"class","othersInput svelte-1myljlf"),t[2].numBaths===void 0&&at(()=>t[18].call(Ge)),je.disabled=!0,je.selected=!0,je.__value="",je.value=je.__value,m(Le,"class","othersInput svelte-1myljlf"),t[2].halfBathroom===void 0&&at(()=>t[19].call(Le)),Ue.disabled=!0,Ue.selected=!0,Ue.__value="",Ue.value=Ue.__value,m(Te,"class","othersInput svelte-1myljlf"),t[2].numParks===void 0&&at(()=>t[20].call(Te)),m(Ae,"class","ubiTags svelte-1myljlf")},m(y,Q){T(y,e,Q),T(y,n,Q),T(y,s,Q),u(s,i),Vt.m(i,null),u(s,r),u(s,o),u(o,a),Se(a,t[2].name),u(o,l),u(o,c),Se(c,t[2].lastname),u(s,h),u(s,f),u(f,d),Se(d,t[2].telephon),u(f,g),u(f,_),Se(_,t[2].email),T(y,v,Q),T(y,w,Q),u(w,E),u(E,S);for(let he=0;he<Je.length;he+=1)Je[he].m(E,null);tt(E,t[2].propCont),u(w,$),u(w,P),Se(P,t[2].budget),T(y,O,Q),T(y,L,Q),u(L,M),Se(M,t[2].comContact),T(y,H,Q),T(y,N,Q),u(N,D);for(let he=0;he<it.length;he+=1)it[he].m(N,null);tt(N,t[2].typeContact),T(y,W,Q),T(y,U,Q),u(U,X);for(let he=0;he<ht.length;he+=1)ht[he].m(U,null);tt(U,t[2].selecMC),T(y,J,Q),T(y,K,Q),u(K,F);for(let he=0;he<ft.length;he+=1)ft[he].m(K,null);tt(K,t[2].modePay),T(y,oe,Q),T(y,R,Q),u(R,G);for(let he=0;he<dt.length;he+=1)dt[he].m(R,null);tt(R,t[2].selecTP),T(y,ie,Q),T(y,A,Q),u(A,ae);for(let he=0;he<pt.length;he+=1)pt[he].m(A,null);tt(A,t[2].rangeProp),T(y,be,Q),T(y,ge,Q),u(ge,V);for(let he=0;he<Pe.length;he+=1)Pe[he].m(ge,null);tt(ge,t[2].numBeds),T(y,Y,Q),T(y,Ge,Q),u(Ge,Ce);for(let he=0;he<wt.length;he+=1)wt[he].m(Ge,null);tt(Ge,t[2].numBaths),T(y,Oe,Q),T(y,Le,Q),u(Le,je);for(let he=0;he<Ze.length;he+=1)Ze[he].m(Le,null);tt(Le,t[2].halfBathroom),T(y,$e,Q),T(y,Te,Q),u(Te,Ue);for(let he=0;he<et.length;he+=1)et[he].m(Te,null);tt(Te,t[2].numParks),T(y,qe,Q),T(y,Ae,Q),ee(ne,Ae,null),u(Ae,_e),ee(Xe,Ae,null),cn=!0,tn||(En=[x(a,"input",t[5]),x(c,"input",t[6]),x(d,"input",t[7]),x(_,"input",t[8]),x(E,"change",t[9]),x(P,"input",t[10]),x(M,"input",t[11]),x(N,"change",t[12]),x(U,"change",t[13]),x(K,"change",t[14]),x(R,"change",t[15]),x(A,"change",t[16]),x(ge,"change",t[17]),x(Ge,"change",t[18]),x(Le,"change",t[19]),x(Te,"change",t[20])],tn=!0)},p(y,Q){if(nn===(nn=li(y))&&Vt?Vt.p(y,Q):(Vt.d(1),Vt=nn(y),Vt&&(Vt.c(),Vt.m(i,null))),Q[0]&5&&a.value!==y[2].name&&Se(a,y[2].name),Q[0]&5&&c.value!==y[2].lastname&&Se(c,y[2].lastname),Q[0]&5&&Se(d,y[2].telephon),Q[0]&5&&_.value!==y[2].email&&Se(_,y[2].email),Q[0]&1){In=y[0];let C;for(C=0;C<In.length;C+=1){const we=tf(y,In,C);Je[C]?Je[C].p(we,Q):(Je[C]=nf(we),Je[C].c(),Je[C].m(E,null))}for(;C<Je.length;C+=1)Je[C].d(1);Je.length=In.length}if(Q[0]&5&&tt(E,y[2].propCont),Q[0]&5&&Hf(P.value)!==y[2].budget&&Se(P,y[2].budget),Q[0]&5&&Se(M,y[2].comContact),Q&0){Tn=qh;let C;for(C=0;C<Tn.length;C+=1){const we=ef(y,Tn,C);it[C]?it[C].p(we,Q):(it[C]=sf(we),it[C].c(),it[C].m(N,null))}for(;C<it.length;C+=1)it[C].d(1);it.length=Tn.length}if(Q[0]&5&&tt(N,y[2].typeContact),Q&0){kn=jh;let C;for(C=0;C<kn.length;C+=1){const we=Zh(y,kn,C);ht[C]?ht[C].p(we,Q):(ht[C]=rf(we),ht[C].c(),ht[C].m(U,null))}for(;C<ht.length;C+=1)ht[C].d(1);ht.length=kn.length}if(Q[0]&5&&tt(U,y[2].selecMC),Q&0){sn=Hh;let C;for(C=0;C<sn.length;C+=1){const we=Jh(y,sn,C);ft[C]?ft[C].p(we,Q):(ft[C]=of(we),ft[C].c(),ft[C].m(K,null))}for(;C<ft.length;C+=1)ft[C].d(1);ft.length=sn.length}if(Q[0]&5&&tt(K,y[2].modePay),Q&0){Sn=Bh;let C;for(C=0;C<Sn.length;C+=1){const we=Xh(y,Sn,C);dt[C]?dt[C].p(we,Q):(dt[C]=af(we),dt[C].c(),dt[C].m(R,null))}for(;C<dt.length;C+=1)dt[C].d(1);dt.length=Sn.length}if(Q[0]&5&&tt(R,y[2].selecTP),Q&0){rn=xh;let C;for(C=0;C<rn.length;C+=1){const we=Yh(y,rn,C);pt[C]?pt[C].p(we,Q):(pt[C]=lf(we),pt[C].c(),pt[C].m(A,null))}for(;C<pt.length;C+=1)pt[C].d(1);pt.length=rn.length}if(Q[0]&5&&tt(A,y[2].rangeProp),Q&0){Cn=zh;let C;for(C=0;C<Cn.length;C+=1){const we=Qh(y,Cn,C);Pe[C]?Pe[C].p(we,Q):(Pe[C]=cf(we),Pe[C].c(),Pe[C].m(ge,null))}for(;C<Pe.length;C+=1)Pe[C].d(1);Pe.length=Cn.length}if(Q[0]&5&&tt(ge,y[2].numBeds),Q&0){Wt=Os;let C;for(C=0;C<Wt.length;C+=1){const we=Wh(y,Wt,C);wt[C]?wt[C].p(we,Q):(wt[C]=uf(we),wt[C].c(),wt[C].m(Ge,null))}for(;C<wt.length;C+=1)wt[C].d(1);wt.length=Wt.length}if(Q[0]&5&&tt(Ge,y[2].numBaths),Q&0){un=Os;let C;for(C=0;C<un.length;C+=1){const we=Gh(y,un,C);Ze[C]?Ze[C].p(we,Q):(Ze[C]=hf(we),Ze[C].c(),Ze[C].m(Le,null))}for(;C<Ze.length;C+=1)Ze[C].d(1);Ze.length=un.length}if(Q[0]&5&&tt(Le,y[2].halfBathroom),Q&0){An=Os;let C;for(C=0;C<An.length;C+=1){const we=Kh(y,An,C);et[C]?et[C].p(we,Q):(et[C]=ff(we),et[C].c(),et[C].m(Te,null))}for(;C<et.length;C+=1)et[C].d(1);et.length=An.length}Q[0]&5&&tt(Te,y[2].numParks);const he={};!Fe&&Q[0]&4&&(Fe=!0,he.ubication=y[2].locaProperty,Zr(()=>Fe=!1)),ne.$set(he);const as={};!en&&Q[0]&4&&(en=!0,as.tag=y[2].tagsProperty,Zr(()=>en=!1)),Xe.$set(as)},i(y){cn||(B(ne.$$.fragment,y),B(Xe.$$.fragment,y),cn=!0)},o(y){z(ne.$$.fragment,y),z(Xe.$$.fragment,y),cn=!1},d(y){y&&I(e),y&&I(n),y&&I(s),Vt.d(),y&&I(v),y&&I(w),ot(Je,y),y&&I(O),y&&I(L),y&&I(H),y&&I(N),ot(it,y),y&&I(W),y&&I(U),ot(ht,y),y&&I(J),y&&I(K),ot(ft,y),y&&I(oe),y&&I(R),ot(dt,y),y&&I(ie),y&&I(A),ot(pt,y),y&&I(be),y&&I(ge),ot(Pe,y),y&&I(Y),y&&I(Ge),ot(wt,y),y&&I(Oe),y&&I(Le),ot(Ze,y),y&&I($e),y&&I(Te),ot(et,y),y&&I(qe),y&&I(Ae),te(ne),te(Xe),tn=!1,Qe(En)}}}function ST(t,e,n){let s;We(t,Ve,W=>n(2,s=W));var i=[];let r=Xi,o=!1;(()=>{for(let W of r){let U=`${W.nameProperty} ${W.claveEB} - ${(W.price/1e6).toFixed(2)}`;n(0,i=[...i,U])}return n(0,i=i.sort())})();function a(){n(1,o=!0)}function l(){s.createdAt=this.value,Ve.set(s),n(0,i)}function c(){s.name=this.value,Ve.set(s),n(0,i)}function h(){s.lastname=this.value,Ve.set(s),n(0,i)}function f(){s.telephon=this.value,Ve.set(s),n(0,i)}function d(){s.email=this.value,Ve.set(s),n(0,i)}function g(){s.propCont=hn(this),Ve.set(s),n(0,i)}function _(){s.budget=Hf(this.value),Ve.set(s),n(0,i)}function v(){s.comContact=this.value,Ve.set(s),n(0,i)}function w(){s.typeContact=hn(this),Ve.set(s),n(0,i)}function E(){s.selecMC=hn(this),Ve.set(s),n(0,i)}function S(){s.modePay=hn(this),Ve.set(s),n(0,i)}function $(){s.selecTP=hn(this),Ve.set(s),n(0,i)}function P(){s.rangeProp=hn(this),Ve.set(s),n(0,i)}function O(){s.numBeds=hn(this),Ve.set(s),n(0,i)}function L(){s.numBaths=hn(this),Ve.set(s),n(0,i)}function M(){s.halfBathroom=hn(this),Ve.set(s),n(0,i)}function H(){s.numParks=hn(this),Ve.set(s),n(0,i)}function N(W){t.$$.not_equal(s.locaProperty,W)&&(s.locaProperty=W,Ve.set(s))}function D(W){t.$$.not_equal(s.tagsProperty,W)&&(s.tagsProperty=W,Ve.set(s))}return[i,o,s,a,l,c,h,f,d,g,_,v,w,E,S,$,P,O,L,M,H,N,D]}class CT extends Ke{constructor(e){super(),ze(this,e,ST,kT,Be,{},null,[-1,-1])}}function AT(t){let e;return{c(){e=k("Editar")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function DT(t){let e;return{c(){e=k("Guardar")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function RT(t){let e,n,s,i,r,o,a,l,c,h;n=new CT({});function f(_,v){return _[0]?AT:DT}let d=f(t),g=d(t);return{c(){e=p("div"),se(n.$$.fragment),s=b(),i=p("div"),r=p("button"),g.c(),o=b(),a=p("button"),a.textContent="Cancel",m(r,"class","btn-save"),m(a,"class","btn-cancel"),m(i,"class","contSavCan svelte-1at07r"),m(e,"class","altaContactos")},m(_,v){T(_,e,v),ee(n,e,null),u(e,s),u(e,i),u(i,r),g.m(r,null),u(i,o),u(i,a),l=!0,c||(h=[x(r,"click",t[5]),x(a,"click",t[3])],c=!0)},p(_,[v]){d!==(d=f(_))&&(g.d(1),g=d(_),g&&(g.c(),g.m(r,null)))},i(_){l||(B(n.$$.fragment,_),l=!0)},o(_){z(n.$$.fragment,_),l=!1},d(_){_&&I(e),te(n),g.d(),c=!1,Qe(h)}}}function NT(t,e,n){let s,i;We(t,Yt,f=>n(7,s=f)),We(t,Ve,f=>n(1,i=f));let r=!1,o;async function a(f){if(o=Date.now(),f={...f,createdAt:o},s!="contEditing"){const d=ss(xt,"contacts");await bo(d,f)}else await Ac(Es(xt,"contacts",f.id),f),n(0,r=!1);f=[],Mt(Yt,s="contSelect",s)}function l(f){try{console.log("se dio de alta a: ");const d=ss(xt,"todos");bo(d,f)}catch(d){console.log("error",d)}}function c(){n(0,r=!0),location.href="/"}return[r,i,a,c,l,()=>a(i)]}class OT extends Ke{constructor(e){super(),ze(this,e,NT,RT,Be,{addContact:4})}get addContact(){return this.$$.ctx[4]}}function df(t,e,n){const s=t.slice();return s[40]=e[n],s}function pf(t,e,n){const s=t.slice();return s[43]=e[n],s}function mf(t){let e,n,s,i,r,o=t[8].name+"",a,l,c=t[8].lastname+"",h,f,d,g,_=Zt(t[8].createdAt)+"",v,w,E,S,$=t[8].selecTP+"",P,O,L=t[8].numBeds+"",M,H,N=t[8].numBaths+"",D,W,U=t[8].numParks+"",X,J,K,F,oe,R,G=t[8].budget+"",ie,A,ae,be=t[8].selecTP+"",ge,V,Y,Ge,Ce,Oe=t[8].telephon+"",Le,je,$e,Te=t[8].email+"",Ue,qe,Ae,ne,Fe=t[8].tagsProperty.join(",  ")+"",_e,Xe,en,cn,tn=t[8].locaProperty.join(",  ")+"",En,li,nn,Vt,In,Je,Tn,it,kn,ht,sn=t[8].contactStage+"",ft,Sn,dt,rn=t[8].comContact+"",pt,Cn,Pe,Wt,wt,un,Ze,An,et,Ar,ci,ui,jn,y,Q,he,as,C,we,qc,hi,fi,Hc,di,xc,As,pi,zc,mi,ua,gi,rt,ha,Kc,Ds=t[8].sendedProperties,Bt=[];for(let le=0;le<Ds.length;le+=1)Bt[le]=gf(pf(t,Ds,le));let jt=t[0]&&_f(t),mt=t[2]&&vf(t),gt=t[7]&&yf(t),_t=t[6]&&wf(t);return{c(){e=p("div"),n=p("div"),s=p("h4"),s.textContent="Contacto",i=b(),r=p("h2"),a=k(o),l=b(),h=k(c),f=b(),d=p("p"),g=k("Fecha Alta: "),v=k(_),w=b(),E=p("p"),S=k("Busca  "),P=k($),O=k(", de "),M=k(L),H=k(" rec\xE1maras,  "),D=k(N),W=k(" ba\xF1os y "),X=k(U),J=k(" estacionamientos"),K=b(),F=p("p"),oe=k("Presupuesto tope: "),R=p("strong"),ie=k(G),A=k(" : Tipo de propiedad buscada: "),ae=p("strong"),ge=k(be),V=b(),Y=p("p"),Ge=k("Tel\xE9fono: "),Ce=p("strong"),Le=k(Oe),je=k(" ---- Email: "),$e=p("strong"),Ue=k(Te),qe=b(),Ae=p("p"),ne=k("Preferencias: "),_e=k(Fe),Xe=b(),en=p("p"),cn=k("Ubicaciones: "),En=k(tn),li=b(),nn=p("div"),Vt=p("p"),Vt.textContent="Propiedades enviadas:",In=b(),Je=p("div");for(let le=0;le<Bt.length;le+=1)Bt[le].c();Tn=b(),it=p("div"),jt&&jt.c(),kn=b(),ht=p("p"),ft=k(sn),Sn=b(),dt=p("p"),pt=k(rn),Cn=b(),Pe=p("div"),Wt=p("button"),Wt.textContent="Programar Evento",wt=b(),mt&&mt.c(),un=b(),Ze=p("button"),Ze.textContent="Ver Propiedades de Interes",An=b(),et=p("button"),et.textContent="Buscar Propiedad",Ar=b(),gt&&gt.c(),ci=b(),ui=p("div"),jn=p("button"),jn.textContent="Cancelar",y=b(),Q=p("div"),he=p("div"),as=p("link"),C=b(),we=p("textarea"),qc=b(),hi=p("div"),fi=p("button"),fi.textContent="Enviar WhatsApp",Hc=b(),di=p("button"),di.textContent="Guardar Info",xc=b(),As=p("div"),pi=p("i"),pi.textContent="edit",zc=b(),mi=p("i"),mi.textContent="delete_forever",ua=b(),_t&&_t.c(),gi=bn(),m(Je,"class","mostImage svelte-ce274g"),m(nn,"class","propMost"),m(Wt,"class","btnCommon"),m(Ze,"class","btnCommon"),m(et,"class","btnCommon"),m(jn,"class","btnCommon btnCancel"),m(as,"href","https://fonts.googleapis.com/icon?family=Material+Icons"),m(as,"rel","stylesheet"),m(we,"class","texArea"),m(we,"cols","65"),m(we,"rows","5"),m(we,"placeholder","Ingresa un comentario"),m(fi,"class","btnCommon btnWhatsApp"),m(di,"class","btnCommon"),m(pi,"class","material-icons edit"),m(mi,"class","material-icons delete"),m(As,"class","iconContent"),m(e,"class","container")},m(le,Re){T(le,e,Re),u(e,n),u(n,s),u(n,i),u(n,r),u(r,a),u(r,l),u(r,h),u(n,f),u(n,d),u(d,g),u(d,v),u(n,w),u(n,E),u(E,S),u(E,P),u(E,O),u(E,M),u(E,H),u(E,D),u(E,W),u(E,X),u(E,J),u(n,K),u(n,F),u(F,oe),u(F,R),u(R,ie),u(F,A),u(F,ae),u(ae,ge),u(n,V),u(n,Y),u(Y,Ge),u(Y,Ce),u(Ce,Le),u(Y,je),u(Y,$e),u($e,Ue),u(n,qe),u(n,Ae),u(Ae,ne),u(Ae,_e),u(n,Xe),u(n,en),u(en,cn),u(en,En),u(n,li),u(n,nn),u(nn,Vt),u(nn,In),u(nn,Je);for(let St=0;St<Bt.length;St+=1)Bt[St].m(Je,null);u(e,Tn),u(e,it),jt&&jt.m(it,null),u(e,kn),u(e,ht),u(ht,ft),u(e,Sn),u(e,dt),u(dt,pt),u(e,Cn),u(e,Pe),u(Pe,Wt),u(Pe,wt),mt&&mt.m(Pe,null),u(Pe,un),u(Pe,Ze),u(Pe,An),u(Pe,et),u(Pe,Ar),gt&&gt.m(Pe,null),u(e,ci),u(e,ui),u(ui,jn),u(e,y),u(e,Q),u(Q,he),u(he,as),u(he,C),u(he,we),Se(we,t[4]),u(he,qc),u(he,hi),u(hi,fi),u(hi,Hc),u(hi,di),u(Q,xc),u(Q,As),u(As,pi),u(As,zc),u(As,mi),T(le,ua,Re),_t&&_t.m(le,Re),T(le,gi,Re),rt=!0,ha||(Kc=[x(Wt,"click",t[27]),x(Ze,"click",t[28]),x(et,"click",t[14]),x(jn,"click",t[17]),x(we,"keypress",t[18]),x(we,"input",t[30]),x(fi,"click",t[23]),x(di,"click",t[24]),x(pi,"click",t[19]),x(mi,"click",t[20])],ha=!0)},p(le,Re){if((!rt||Re[0]&256)&&o!==(o=le[8].name+"")&&de(a,o),(!rt||Re[0]&256)&&c!==(c=le[8].lastname+"")&&de(h,c),(!rt||Re[0]&256)&&_!==(_=Zt(le[8].createdAt)+"")&&de(v,_),(!rt||Re[0]&256)&&$!==($=le[8].selecTP+"")&&de(P,$),(!rt||Re[0]&256)&&L!==(L=le[8].numBeds+"")&&de(M,L),(!rt||Re[0]&256)&&N!==(N=le[8].numBaths+"")&&de(D,N),(!rt||Re[0]&256)&&U!==(U=le[8].numParks+"")&&de(X,U),(!rt||Re[0]&256)&&G!==(G=le[8].budget+"")&&de(ie,G),(!rt||Re[0]&256)&&be!==(be=le[8].selecTP+"")&&de(ge,be),(!rt||Re[0]&256)&&Oe!==(Oe=le[8].telephon+"")&&de(Le,Oe),(!rt||Re[0]&256)&&Te!==(Te=le[8].email+"")&&de(Ue,Te),(!rt||Re[0]&256)&&Fe!==(Fe=le[8].tagsProperty.join(",  ")+"")&&de(_e,Fe),(!rt||Re[0]&256)&&tn!==(tn=le[8].locaProperty.join(",  ")+"")&&de(En,tn),Re[0]&6402){Ds=le[8].sendedProperties;let St;for(St=0;St<Ds.length;St+=1){const Gc=pf(le,Ds,St);Bt[St]?Bt[St].p(Gc,Re):(Bt[St]=gf(Gc),Bt[St].c(),Bt[St].m(Je,null))}for(;St<Bt.length;St+=1)Bt[St].d(1);Bt.length=Ds.length}le[0]?jt?jt.p(le,Re):(jt=_f(le),jt.c(),jt.m(it,null)):jt&&(jt.d(1),jt=null),(!rt||Re[0]&256)&&sn!==(sn=le[8].contactStage+"")&&de(ft,sn),(!rt||Re[0]&256)&&rn!==(rn=le[8].comContact+"")&&de(pt,rn),le[2]?mt?(mt.p(le,Re),Re[0]&4&&B(mt,1)):(mt=vf(le),mt.c(),B(mt,1),mt.m(Pe,un)):mt&&(zt(),z(mt,1,1,()=>{mt=null}),Kt()),le[7]?gt?(gt.p(le,Re),Re[0]&128&&B(gt,1)):(gt=yf(le),gt.c(),B(gt,1),gt.m(Pe,null)):gt&&(zt(),z(gt,1,1,()=>{gt=null}),Kt()),Re[0]&16&&Se(we,le[4]),le[6]?_t?(_t.p(le,Re),Re[0]&64&&B(_t,1)):(_t=wf(le),_t.c(),B(_t,1),_t.m(gi.parentNode,gi)):_t&&(zt(),z(_t,1,1,()=>{_t=null}),Kt())},i(le){rt||(B(mt),B(gt),B(_t),rt=!0)},o(le){z(mt),z(gt),z(_t),rt=!1},d(le){le&&I(e),ot(Bt,le),jt&&jt.d(),mt&&mt.d(),gt&&gt.d(),le&&I(ua),_t&&_t.d(le),le&&I(gi),ha=!1,Qe(Kc)}}}function gf(t){let e,n=t[43]+"",s,i,r,o;function a(){return t[25](t[43])}return{c(){e=p("p"),s=k(n),m(e,"value",i=t[43])},m(l,c){T(l,e,c),u(e,s),r||(o=[x(e,"mouseenter",a),x(e,"mouseout",t[12]),x(e,"dblclick",t[26])],r=!0)},p(l,c){t=l,c[0]&256&&n!==(n=t[43]+"")&&de(s,n),c[0]&256&&i!==(i=t[43])&&m(e,"value",i)},d(l){l&&I(e),r=!1,Qe(o)}}}function _f(t){let e,n=t[1][0].nameProperty+"",s,i,r,o,a;return{c(){e=p("h3"),s=k(n),i=b(),r=p("img"),m(e,"class","svelte-ce274g"),m(r,"class","imgPropContSelect"),m(r,"height","200"),_n(r.src,o=t[1][0].urlImage)||m(r,"src",o),m(r,"alt",a=t[1][0].claveEB)},m(l,c){T(l,e,c),u(e,s),T(l,i,c),T(l,r,c)},p(l,c){c[0]&2&&n!==(n=l[1][0].nameProperty+"")&&de(s,n),c[0]&2&&!_n(r.src,o=l[1][0].urlImage)&&m(r,"src",o),c[0]&2&&a!==(a=l[1][0].claveEB)&&m(r,"alt",a)},d(l){l&&I(e),l&&I(i),l&&I(r)}}}function vf(t){let e,n;const s=[t[8]];let i={};for(let r=0;r<s.length;r+=1)i=Ut(i,s[r]);return e=new OI({props:i}),e.$on("closeIt",t[21]),{c(){se(e.$$.fragment)},m(r,o){ee(e,r,o),n=!0},p(r,o){const a=o[0]&256?vn(s,[Ks(r[8])]):{};e.$set(a)},i(r){n||(B(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){te(e,r)}}}function yf(t){let e,n,s;function i(o){t[29](o)}let r={};return t[3]!==void 0&&(r.searchTerm=t[3]),e=new vg({props:r}),zs.push(()=>eo(e,"searchTerm",i)),e.$on("input",t[15]),{c(){se(e.$$.fragment)},m(o,a){ee(e,o,a),s=!0},p(o,a){const l={};!n&&a[0]&8&&(n=!0,l.searchTerm=o[3],Zr(()=>n=!1)),e.$set(l)},i(o){s||(B(e.$$.fragment,o),s=!0)},o(o){z(e.$$.fragment,o),s=!1},d(o){te(e,o)}}}function wf(t){let e,n,s,i=t[10].length+"",r,o,a,l,c=t[10],h=[];for(let g=0;g<c.length;g+=1)h[g]=bf(df(t,c,g));const f=g=>z(h[g],1,1,()=>{h[g]=null});let d=t[10].length===0&&Ef();return{c(){e=p("main"),n=p("h3"),s=k("Propiedades encontradas: "),r=k(i),o=b();for(let g=0;g<h.length;g+=1)h[g].c();a=b(),d&&d.c(),m(n,"class","svelte-ce274g"),m(e,"id","bookshelf"),m(e,"class","svelte-ce274g")},m(g,_){T(g,e,_),u(e,n),u(n,s),u(n,r),u(e,o);for(let v=0;v<h.length;v+=1)h[v].m(e,null);u(e,a),d&&d.m(e,null),l=!0},p(g,_){if((!l||_[0]&1024)&&i!==(i=g[10].length+"")&&de(r,i),_[0]&4195360){c=g[10];let v;for(v=0;v<c.length;v+=1){const w=df(g,c,v);h[v]?(h[v].p(w,_),B(h[v],1)):(h[v]=bf(w),h[v].c(),B(h[v],1),h[v].m(e,a))}for(zt(),v=c.length;v<h.length;v+=1)f(v);Kt()}g[10].length===0?d||(d=Ef(),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(g){if(!l){for(let _=0;_<c.length;_+=1)B(h[_]);l=!0}},o(g){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)z(h[_]);l=!1},d(g){g&&I(e),ot(h,g),d&&d.d()}}}function bf(t){let e,n,s,i,r,o,a,l,c;const h=[t[40]];let f={};for(let d=0;d<h.length;d+=1)f=Ut(f,h[d]);return r=new pT({props:f}),{c(){e=p("section"),n=p("input"),i=b(),se(r.$$.fragment),m(n,"type","checkbox"),n.__value=s=t[40].urlProp,n.value=n.__value,m(n,"class","form-check"),t[32][0].push(n),m(e,"class","property svelte-ce274g")},m(d,g){T(d,e,g),u(e,n),n.checked=~t[5].indexOf(n.__value),u(e,i),ee(r,e,null),a=!0,l||(c=[x(n,"change",t[31]),x(e,"click",t[22])],l=!0)},p(d,g){t=d,(!a||g[0]&1024&&s!==(s=t[40].urlProp))&&(n.__value=s,n.value=n.__value),g[0]&32&&(n.checked=~t[5].indexOf(n.__value));const _=g[0]&1024?vn(h,[Ks(t[40])]):{};r.$set(_)},i(d){a||(B(r.$$.fragment,d),at(()=>{o||(o=pn(e,oh,{duration:500,easing:rh},!0)),o.run(1)}),a=!0)},o(d){z(r.$$.fragment,d),o||(o=pn(e,oh,{duration:500,easing:rh},!1)),o.run(0),a=!1},d(d){d&&I(e),t[32][0].splice(t[32][0].indexOf(n),1),te(r),d&&o&&o.end(),l=!1,Qe(c)}}}function Ef(t){let e;return{c(){e=p("h3"),e.textContent='"No hay Propiedades para este contacto"',m(e,"class","svelte-ce274g")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function PT(t){let e,n,s=t[9]==="contSelect"&&mf(t);return{c(){e=p("main"),s&&s.c()},m(i,r){T(i,e,r),s&&s.m(e,null),n=!0},p(i,r){i[9]==="contSelect"?s?(s.p(i,r),r[0]&512&&B(s,1)):(s=mf(i),s.c(),B(s,1),s.m(e,null)):s&&(zt(),z(s,1,1,()=>{s=null}),Kt())},i(i){n||(B(s),n=!0)},o(i){z(s),n=!1},d(i){i&&I(e),s&&s.d()}}}function LT(t){window.open(t)}function MT(t,e,n){let s,i,r;We(t,Ve,ie=>n(8,s=ie)),We(t,Yt,ie=>n(9,i=ie)),We(t,_l,ie=>n(10,r=ie));let o=!1,a,l=!1,c,h,f=[],d=!1,g=!1;console.log(i);function _(ie){n(0,o=!0),n(1,a=Xi.filter(A=>A.claveEB===ie))}function v(){n(0,o=!1)}function w(){console.log("estas en addSchedule"),n(2,l=!0)}function E(){n(7,g=!0)}const S=()=>(n(6,d=!0),Mt(_l,r=Xi.filter(ie=>(ie.nameProperty+" "+ie.colonia+" "+ie.claveEB).toLowerCase().includes(c.toLowerCase())),r));function $(ie){gT(ie),n(6,d=!0)}const P=()=>{Mt(Yt,i="start",i)};function O(){}function L(){Mt(Yt,i="contEditing",i)}async function M(){confirm("Deseas eleiminar definitivamente al contacto?")&&(await Dc(Es(xt,"contacts",s.id)),window.location.href="/")}function H(){n(2,l=!1)}function N(){console.log(f)}function D(){console.log(f);let ie=`https://api.whatsapp.com/send?phone=52${s.telephon}&text=${f}`;window.open(ie),pg()}function W(){console.log(f)}const U=[[]],X=ie=>_(ie),J=()=>LT(a[0].urlProp),K=()=>w(),F=()=>$(s);function oe(ie){c=ie,n(3,c)}function R(){h=this.value,n(4,h)}function G(){f=bt(U[0],this.__value,this.checked),n(5,f)}return[o,a,l,c,h,f,d,g,s,i,r,_,v,w,E,S,$,P,O,L,M,H,N,D,W,X,J,K,F,oe,R,G,U]}class $T extends Ke{constructor(e){super(),ze(this,e,MT,PT,Be,{},null,[-1,-1])}}function If(t,e,n){const s=t.slice();return s[22]=e[n],s[24]=n,s}function Tf(t,e,n){const s=t.slice();return s[24]=e[n],s}function kf(t,e,n){const s=t.slice();return s[12]=e[n],s[24]=n,s}function Sf(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,w,E,S,$,P,O,L;function M(R){t[14](R)}let H={};t[3]!==void 0&&(H.searchTerm=t[3]),r=new vg({props:H}),zs.push(()=>eo(r,"searchTerm",M)),r.$on("input",t[11]);let N=t[1],D=[];for(let R=0;R<N.length;R+=1)D[R]=Af(kf(t,N,R));const W=R=>z(D[R],1,1,()=>{D[R]=null});let U=t[0]>1&&Df(t),X=[3,2,1],J=[];for(let R=0;R<3;R+=1)J[R]=Nf(Tf(t,X,R));let K=Array(3),F=[];for(let R=0;R<K.length;R+=1)F[R]=Pf(If(t,K,R));let oe=t[0]<t[5]&&Lf(t);return{c(){e=p("h2"),e.textContent=`${Ao.length} Contactos a Mostrar`,n=b(),s=p("button"),s.textContent="Alta de Contacto",i=b(),se(r.$$.fragment),a=b(),l=p("div"),c=p("div");for(let R=0;R<D.length;R+=1)D[R].c();h=b(),f=p("div"),d=p("ul"),U&&U.c(),g=b();for(let R=0;R<3;R+=1)J[R].c();_=b(),v=p("li"),w=p("span"),E=k(t[0]),S=b();for(let R=0;R<F.length;R+=1)F[R].c();$=b(),oe&&oe.c(),m(s,"class","altaContacto svelte-4ycvq1"),m(f,"class","container pagination"),m(l,"class","mosPag svelte-4ycvq1")},m(R,G){T(R,e,G),T(R,n,G),T(R,s,G),T(R,i,G),ee(r,R,G),T(R,a,G),T(R,l,G),u(l,c);for(let ie=0;ie<D.length;ie+=1)D[ie].m(c,null);u(l,h),u(l,f),u(f,d),U&&U.m(d,null),u(d,g);for(let ie=0;ie<3;ie+=1)J[ie].m(d,null);u(d,_),u(d,v),u(v,w),u(w,E),u(d,S);for(let ie=0;ie<F.length;ie+=1)F[ie].m(d,null);u(d,$),oe&&oe.m(d,null),P=!0,O||(L=x(s,"click",t[9]),O=!0)},p(R,G){const ie={};if(!o&&G&8&&(o=!0,ie.searchTerm=R[3],Zr(()=>o=!1)),r.$set(ie),G&1046){N=R[1];let A;for(A=0;A<N.length;A+=1){const ae=kf(R,N,A);D[A]?(D[A].p(ae,G),B(D[A],1)):(D[A]=Af(ae),D[A].c(),B(D[A],1),D[A].m(c,null))}for(zt(),A=N.length;A<D.length;A+=1)W(A);Kt()}if(R[0]>1?U?U.p(R,G):(U=Df(R),U.c(),U.m(d,g)):U&&(U.d(1),U=null),G&257){X=[3,2,1];let A;for(A=0;A<3;A+=1){const ae=Tf(R,X,A);J[A]?J[A].p(ae,G):(J[A]=Nf(ae),J[A].c(),J[A].m(d,_))}for(;A<3;A+=1)J[A].d(1)}if((!P||G&1)&&de(E,R[0]),G&289){K=Array(3);let A;for(A=0;A<K.length;A+=1){const ae=If(R,K,A);F[A]?F[A].p(ae,G):(F[A]=Pf(ae),F[A].c(),F[A].m(d,$))}for(;A<F.length;A+=1)F[A].d(1);F.length=K.length}R[0]<R[5]?oe?oe.p(R,G):(oe=Lf(R),oe.c(),oe.m(d,null)):oe&&(oe.d(1),oe=null)},i(R){if(!P){B(r.$$.fragment,R);for(let G=0;G<N.length;G+=1)B(D[G]);P=!0}},o(R){z(r.$$.fragment,R),D=D.filter(Boolean);for(let G=0;G<D.length;G+=1)z(D[G]);P=!1},d(R){R&&I(e),R&&I(n),R&&I(s),R&&I(i),te(r,R),R&&I(a),R&&I(l),ot(D,R),U&&U.d(),ot(J,R),ot(F,R),oe&&oe.d(),O=!1,L()}}}function Cf(t){let e,n,s,i,r,o;const a=[t[12]];let l={};for(let h=0;h<a.length;h+=1)l=Ut(l,a[h]);n=new cT({props:l});function c(){return t[15](t[12])}return{c(){e=p("div"),se(n.$$.fragment),s=b(),m(e,"class","selecContact")},m(h,f){T(h,e,f),ee(n,e,null),u(e,s),i=!0,r||(o=x(e,"click",c),r=!0)},p(h,f){t=h;const d=f&2?vn(a,[Ks(t[12])]):{};n.$set(d)},i(h){i||(B(n.$$.fragment,h),i=!0)},o(h){z(n.$$.fragment,h),i=!1},d(h){h&&I(e),te(n),r=!1,o()}}}function Af(t){let e,n,s=t[24]>=t[4]&&t[24]<t[2]&&Cf(t);return{c(){s&&s.c(),e=bn()},m(i,r){s&&s.m(i,r),T(i,e,r),n=!0},p(i,r){i[24]>=i[4]&&i[24]<i[2]?s?(s.p(i,r),r&20&&B(s,1)):(s=Cf(i),s.c(),B(s,1),s.m(e.parentNode,e)):s&&(zt(),z(s,1,1,()=>{s=null}),Kt())},i(i){n||(B(s),n=!0)},o(i){z(s),n=!1},d(i){s&&s.d(i),i&&I(e)}}}function Df(t){let e,n,s,i,r,o,a,l,c;return{c(){e=p("li"),n=p("a"),n.textContent="first",s=b(),i=p("li"),r=p("a"),o=k("previous"),m(n,"href","/blog"),m(r,"href",a="/blog/"+(t[0]-1))},m(h,f){T(h,e,f),u(e,n),T(h,s,f),T(h,i,f),u(i,r),u(r,o),l||(c=[x(n,"click",Hs(t[16])),x(r,"click",Hs(t[17]))],l=!0)},p(h,f){f&1&&a!==(a="/blog/"+(h[0]-1))&&m(r,"href",a)},d(h){h&&I(e),h&&I(s),h&&I(i),l=!1,Qe(c)}}}function Rf(t){let e,n,s=t[0]-t[24]+"",i,r,o,a;function l(){return t[18](t[24])}return{c(){e=p("li"),n=p("a"),i=k(s),m(n,"href",r="/blog/"+(t[0]-t[24]))},m(c,h){T(c,e,h),u(e,n),u(n,i),o||(a=x(n,"click",Hs(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]-t[24]+"")&&de(i,s),h&1&&r!==(r="/blog/"+(t[0]-t[24]))&&m(n,"href",r)},d(c){c&&I(e),o=!1,a()}}}function Nf(t){let e,n=t[0]-t[24]>0&&Rf(t);return{c(){n&&n.c(),e=bn()},m(s,i){n&&n.m(s,i),T(s,e,i)},p(s,i){s[0]-s[24]>0?n?n.p(s,i):(n=Rf(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&I(e)}}}function Of(t){let e,n,s=t[0]+(t[24]+1)+"",i,r,o,a;function l(){return t[19](t[24])}return{c(){e=p("li"),n=p("a"),i=k(s),m(n,"href",r="/blog/"+(t[0]+(t[24]+1)))},m(c,h){T(c,e,h),u(e,n),u(n,i),o||(a=x(n,"click",Hs(l)),o=!0)},p(c,h){t=c,h&1&&s!==(s=t[0]+(t[24]+1)+"")&&de(i,s),h&1&&r!==(r="/blog/"+(t[0]+(t[24]+1)))&&m(n,"href",r)},d(c){c&&I(e),o=!1,a()}}}function Pf(t){let e,n=t[0]+(t[24]+1)<=t[5]&&Of(t);return{c(){n&&n.c(),e=bn()},m(s,i){n&&n.m(s,i),T(s,e,i)},p(s,i){s[0]+(s[24]+1)<=s[5]?n?n.p(s,i):(n=Of(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&I(e)}}}function Lf(t){let e,n,s,i,r,o,a,l,c,h,f;return{c(){e=p("li"),n=p("a"),s=k("next"),r=b(),o=p("li"),a=p("a"),l=k("last"),m(n,"href",i="/blog/"+(t[0]+1)),m(a,"href",c="/blog/"+t[5])},m(d,g){T(d,e,g),u(e,n),u(n,s),T(d,r,g),T(d,o,g),u(o,a),u(a,l),h||(f=[x(n,"click",Hs(t[20])),x(a,"click",Hs(t[21]))],h=!0)},p(d,g){g&1&&i!==(i="/blog/"+(d[0]+1))&&m(n,"href",i),g&32&&c!==(c="/blog/"+d[5])&&m(a,"href",c)},d(d){d&&I(e),d&&I(r),d&&I(o),h=!1,Qe(f)}}}function Mf(t){let e,n,s;return n=new $T({props:{$contact:t[7]}}),{c(){e=p("div"),se(n.$$.fragment)},m(i,r){T(i,e,r),ee(n,e,null),s=!0},p(i,r){const o={};r&128&&(o.$contact=i[7]),n.$set(o)},i(i){s||(B(n.$$.fragment,i),s=!0)},o(i){z(n.$$.fragment,i),s=!1},d(i){i&&I(e),te(n)}}}function $f(t){let e,n,s,i;const r=[t[7]];let o={};for(let a=0;a<r.length;a+=1)o=Ut(o,r[a]);return s=new OT({props:o}),{c(){e=p("div"),n=p("div"),se(s.$$.fragment),m(n,"class","container")},m(a,l){T(a,e,l),u(e,n),ee(s,n,null),i=!0},p(a,l){const c=l&128?vn(r,[Ks(a[7])]):{};s.$set(c)},i(a){i||(B(s.$$.fragment,a),i=!0)},o(a){z(s.$$.fragment,a),i=!1},d(a){a&&I(e),te(s)}}}function UT(t){let e,n,s,i,r,o,a,l,c,h,f=t[6]==="start"&&Sf(t),d=t[6]==="contSelect"&&Mf(t),g=(t[6]==="contEditing"||t[6]==="contAdding")&&$f(t);return{c(){e=p("main"),n=p("div"),s=p("h1"),s.textContent="Contactos",i=b(),r=p("img"),a=b(),f&&f.c(),l=b(),d&&d.c(),c=b(),g&&g.c(),_n(r.src,o=_g)||m(r,"src",o),m(r,"alt","contactos"),m(r,"class","svelte-4ycvq1"),m(e,"class","container")},m(_,v){T(_,e,v),u(e,n),u(n,s),u(n,i),u(n,r),u(e,a),f&&f.m(e,null),u(e,l),d&&d.m(e,null),u(e,c),g&&g.m(e,null),h=!0},p(_,[v]){_[6]==="start"?f?(f.p(_,v),v&64&&B(f,1)):(f=Sf(_),f.c(),B(f,1),f.m(e,l)):f&&(zt(),z(f,1,1,()=>{f=null}),Kt()),_[6]==="contSelect"?d?(d.p(_,v),v&64&&B(d,1)):(d=Mf(_),d.c(),B(d,1),d.m(e,c)):d&&(zt(),z(d,1,1,()=>{d=null}),Kt()),_[6]==="contEditing"||_[6]==="contAdding"?g?(g.p(_,v),v&64&&B(g,1)):(g=$f(_),g.c(),B(g,1),g.m(e,null)):g&&(zt(),z(g,1,1,()=>{g=null}),Kt())},i(_){h||(B(f),B(d),B(g),h=!0)},o(_){z(f),z(d),z(g),h=!1},d(_){_&&I(e),f&&f.d(),d&&d.d(),g&&g.d()}}}let Ua=15;function FT(t,e,n){let s,i,r,o,a,l;We(t,Yt,N=>n(6,a=N)),We(t,Ve,N=>n(7,l=N));let c;Mt(Yt,a="start",a);let h,f=1,d=[];const g=N=>{n(0,f=N)},_=()=>{Mt(Yt,a="contAdding",a)},v=N=>{n(3,c=""),Mt(Ve,l=N,l),Mt(Yt,a="contSelect",a)};function w(){return n(1,d=Ao.filter(N=>(N.name+" "+N.lastname).toLowerCase().includes(c.toLowerCase())))}n(1,d=Ao.sort((N,D)=>N.createdAt<D.createdAt?1:N.createdAt>D.createdAt?-1:0));function E(N){c=N,n(3,c)}const S=N=>v(N),$=()=>g(1),P=()=>g(f-1),O=N=>g(f-N),L=N=>g(f+(N+1)),M=()=>g(f+1),H=()=>g(i);return t.$$.update=()=>{t.$$.dirty&2&&n(13,s=d.length),t.$$.dirty&8192&&n(5,i=Math.ceil(s/Ua)),t.$$.dirty&1&&n(2,r=f*Ua),t.$$.dirty&4&&n(4,o=r-Ua)},[f,d,r,c,o,i,a,l,g,_,v,w,h,s,E,S,$,P,O,L,M,H]}class VT extends Ke{constructor(e){super(),ze(this,e,FT,UT,Be,{})}}function BT(t){let e;return{c(){e=p("h1"),e.textContent="Estas en About"},m(n,s){T(n,e,s)},p:fe,i:fe,o:fe,d(n){n&&I(e)}}}class jT extends Ke{constructor(e){super(),ze(this,e,null,BT,Be,{})}}function qT(t){let e,n,s,i;return{c(){e=p("div"),n=p("div"),s=k(t[0]),m(n,"id","snackbar"),m(n,"class",i=Qc(t[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(r,o){T(r,e,o),u(e,n),u(n,s)},p(r,[o]){o&1&&de(s,r[0]),o&2&&i!==(i=Qc(r[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&m(n,"class",i)},i:fe,o:fe,d(r){r&&I(e)}}}function HT(t,e,n){let{message:s=""}=e,{show:i=!1}=e;return t.$$set=r=>{"message"in r&&n(0,s=r.message),"show"in r&&n(1,i=r.show)},[s,i]}class xT extends Ke{constructor(e){super(),ze(this,e,HT,qT,Be,{message:0,show:1})}}function zT(t){let e;return{c(){e=k("Registrarse")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function KT(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,w,E,S,$,P,O,L,M,H,N,D,W,U,X,J,K;return n=new xT({props:{message:t[0],show:t[1]}}),U=new Ct({props:{to:"/register",$$slots:{default:[zT]},$$scope:{ctx:t}}}),{c(){e=p("div"),se(n.$$.fragment),s=b(),i=p("br"),r=p("br"),o=p("br"),a=b(),l=p("div"),c=p("h1"),c.textContent="Inicia sesi\xF3n en tu cuenta",h=b(),f=p("div"),d=p("input"),g=b(),_=p("div"),v=p("input"),w=b(),E=p("br"),S=b(),$=p("div"),P=p("button"),P.textContent="Iniciar sesi\xF3n",O=b(),L=p("p"),L.textContent="O tambi\xE9n",M=b(),H=p("br"),N=b(),D=p("p"),W=k("\xBFA\xFAn no tienes cuenta? "),se(U.$$.fragment),m(c,"class","text-center text-login svelte-ftg4em"),m(d,"name","email"),m(d,"type","text"),m(d,"class","input-form svelte-ftg4em"),m(d,"placeholder","Correo"),m(f,"class","center svelte-ftg4em"),m(v,"name","password"),m(v,"type","password"),m(v,"class","input-form svelte-ftg4em"),m(v,"placeholder","Contrase\xF1a"),m(_,"class","center svelte-ftg4em"),m(P,"class","button-signup fondo-color-signup svelte-ftg4em"),m($,"class","center svelte-ftg4em"),m(L,"class","text-center svelte-ftg4em"),m(D,"class","text-center svelte-ftg4em"),m(l,"class","form-signin svelte-ftg4em")},m(F,oe){T(F,e,oe),ee(n,e,null),u(e,s),u(e,i),u(e,r),u(e,o),u(e,a),u(e,l),u(l,c),u(l,h),u(l,f),u(f,d),u(l,g),u(l,_),u(_,v),u(l,w),u(l,E),u(l,S),u(l,$),u($,P),u(l,O),u(l,L),u(l,M),u(l,H),u(l,N),u(l,D),u(D,W),ee(U,D,null),X=!0,J||(K=[x(d,"input",t[4]),x(v,"input",t[5]),x(P,"click",t[3])],J=!0)},p(F,[oe]){const R={};oe&1&&(R.message=F[0]),oe&2&&(R.show=F[1]),n.$set(R);const G={};oe&512&&(G.$$scope={dirty:oe,ctx:F}),U.$set(G)},i(F){X||(B(n.$$.fragment,F),B(U.$$.fragment,F),X=!0)},o(F){z(n.$$.fragment,F),z(U.$$.fragment,F),X=!1},d(F){F&&I(e),te(n),te(U),J=!1,Qe(K)}}}function GT(t,e,n){const s=Nl();let i={email:"",password:""},r="",o=!1;const a=d=>{n(0,r=d),n(1,o=!0),setTimeout(()=>{n(1,o=!1)},2800)},l=d=>{i={...i,[d.target.name]:d.target.value}};return[r,o,l,async()=>{try{await rE(fg,i.email,i.password),s("/")}catch(d){d.message==="Firebase: Error (auth/wrong-password)."&&a("Contrase\xF1a incorrecta")}},d=>l(d),d=>l(d)]}class WT extends Ke{constructor(e){super(),ze(this,e,GT,KT,Be,{})}}class QT extends Ke{constructor(e){super(),ze(this,e,null,null,Be,{})}}function YT(t){let e;return{c(){e=k("Home")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function XT(t){let e;return{c(){e=k("Contactos")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function JT(t){let e;return{c(){e=k("Propiedades")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function ZT(t){let e;return{c(){e=k("Captaci\xF3n")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function ek(t){let e;return{c(){e=k("Agenda")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function tk(t){let e;return{c(){e=k("Sinergias")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function nk(t){let e;return{c(){e=k("LogOut")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function sk(t){let e;return{c(){e=k("About")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function ik(t){let e;return{c(){e=k("Registro")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function rk(t){let e;return{c(){e=k("Login")},m(n,s){T(n,e,s)},d(n){n&&I(e)}}}function ok(t){let e,n;return e=new oT({}),{c(){se(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function ak(t){let e,n;return e=new VT({}),{c(){se(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function lk(t){let e,n;return e=new mg({}),{c(){se(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function ck(t){let e,n;return e=new gg({}),{c(){se(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function uk(t){let e,n;return e=new jT({}),{c(){se(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function hk(t){let e,n;return e=new QT({}),{c(){se(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function fk(t){let e,n;return e=new WT({}),{c(){se(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function dk(t){let e,n;return e=new jc({}),{c(){se(e.$$.fragment)},m(s,i){ee(e,s,i),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){te(e,s)}}}function pk(t){let e,n,s,i,r,o,a,l,c,h,f,d,g,_,v,w,E,S,$,P,O,L,M,H,N,D,W,U,X,J,K,F,oe,R,G,ie,A,ae,be,ge;return i=new Ct({props:{to:"/",$$slots:{default:[YT]},$$scope:{ctx:t}}}),o=new Ct({props:{to:"contactos",$$slots:{default:[XT]},$$scope:{ctx:t}}}),l=new Ct({props:{to:"propiedades",$$slots:{default:[JT]},$$scope:{ctx:t}}}),h=new Ct({props:{to:"captacion",$$slots:{default:[ZT]},$$scope:{ctx:t}}}),d=new Ct({props:{to:"agenda",$$slots:{default:[ek]},$$scope:{ctx:t}}}),_=new Ct({props:{to:"sinergias",$$slots:{default:[tk]},$$scope:{ctx:t}}}),w=new Ct({props:{to:"/about",$$slots:{default:[nk]},$$scope:{ctx:t}}}),w.$on("click",t[0]),S=new Ct({props:{to:"about",$$slots:{default:[sk]},$$scope:{ctx:t}}}),P=new Ct({props:{to:"register",$$slots:{default:[ik]},$$scope:{ctx:t}}}),L=new Ct({props:{to:"login",$$slots:{default:[rk]},$$scope:{ctx:t}}}),N=new Qt({props:{path:"/",$$slots:{default:[ok]},$$scope:{ctx:t}}}),W=new Qt({props:{path:"/contactos",$$slots:{default:[ak]},$$scope:{ctx:t}}}),X=new Qt({props:{path:"agenda",$$slots:{default:[lk]},$$scope:{ctx:t}}}),K=new Qt({props:{path:"sinergias",$$slots:{default:[ck]},$$scope:{ctx:t}}}),oe=new Qt({props:{path:"about",$$slots:{default:[uk]},$$scope:{ctx:t}}}),G=new Qt({props:{path:"logout",$$slots:{default:[hk]},$$scope:{ctx:t}}}),A=new Qt({props:{path:"login",$$slots:{default:[fk]},$$scope:{ctx:t}}}),be=new Qt({props:{path:"register",$$slots:{default:[dk]},$$scope:{ctx:t}}}),{c(){e=p("div"),n=p("header"),s=p("nav"),se(i.$$.fragment),r=b(),se(o.$$.fragment),a=b(),se(l.$$.fragment),c=b(),se(h.$$.fragment),f=b(),se(d.$$.fragment),g=b(),se(_.$$.fragment),v=b(),se(w.$$.fragment),E=b(),se(S.$$.fragment),$=b(),se(P.$$.fragment),O=b(),se(L.$$.fragment),M=b(),H=p("main"),se(N.$$.fragment),D=b(),se(W.$$.fragment),U=b(),se(X.$$.fragment),J=b(),se(K.$$.fragment),F=b(),se(oe.$$.fragment),R=b(),se(G.$$.fragment),ie=b(),se(A.$$.fragment),ae=b(),se(be.$$.fragment),m(e,"class","navMenu")},m(V,Y){T(V,e,Y),u(e,n),u(n,s),ee(i,s,null),u(s,r),ee(o,s,null),u(s,a),ee(l,s,null),u(s,c),ee(h,s,null),u(s,f),ee(d,s,null),u(s,g),ee(_,s,null),u(s,v),ee(w,s,null),u(s,E),ee(S,s,null),u(s,$),ee(P,s,null),u(s,O),ee(L,s,null),T(V,M,Y),T(V,H,Y),ee(N,H,null),u(H,D),ee(W,H,null),u(H,U),ee(X,H,null),u(H,J),ee(K,H,null),u(H,F),ee(oe,H,null),u(H,R),ee(G,H,null),u(H,ie),ee(A,H,null),u(H,ae),ee(be,H,null),ge=!0},p(V,Y){const Ge={};Y&8&&(Ge.$$scope={dirty:Y,ctx:V}),i.$set(Ge);const Ce={};Y&8&&(Ce.$$scope={dirty:Y,ctx:V}),o.$set(Ce);const Oe={};Y&8&&(Oe.$$scope={dirty:Y,ctx:V}),l.$set(Oe);const Le={};Y&8&&(Le.$$scope={dirty:Y,ctx:V}),h.$set(Le);const je={};Y&8&&(je.$$scope={dirty:Y,ctx:V}),d.$set(je);const $e={};Y&8&&($e.$$scope={dirty:Y,ctx:V}),_.$set($e);const Te={};Y&8&&(Te.$$scope={dirty:Y,ctx:V}),w.$set(Te);const Ue={};Y&8&&(Ue.$$scope={dirty:Y,ctx:V}),S.$set(Ue);const qe={};Y&8&&(qe.$$scope={dirty:Y,ctx:V}),P.$set(qe);const Ae={};Y&8&&(Ae.$$scope={dirty:Y,ctx:V}),L.$set(Ae);const ne={};Y&8&&(ne.$$scope={dirty:Y,ctx:V}),N.$set(ne);const Fe={};Y&8&&(Fe.$$scope={dirty:Y,ctx:V}),W.$set(Fe);const _e={};Y&8&&(_e.$$scope={dirty:Y,ctx:V}),X.$set(_e);const Xe={};Y&8&&(Xe.$$scope={dirty:Y,ctx:V}),K.$set(Xe);const en={};Y&8&&(en.$$scope={dirty:Y,ctx:V}),oe.$set(en);const cn={};Y&8&&(cn.$$scope={dirty:Y,ctx:V}),G.$set(cn);const tn={};Y&8&&(tn.$$scope={dirty:Y,ctx:V}),A.$set(tn);const En={};Y&8&&(En.$$scope={dirty:Y,ctx:V}),be.$set(En)},i(V){ge||(B(i.$$.fragment,V),B(o.$$.fragment,V),B(l.$$.fragment,V),B(h.$$.fragment,V),B(d.$$.fragment,V),B(_.$$.fragment,V),B(w.$$.fragment,V),B(S.$$.fragment,V),B(P.$$.fragment,V),B(L.$$.fragment,V),B(N.$$.fragment,V),B(W.$$.fragment,V),B(X.$$.fragment,V),B(K.$$.fragment,V),B(oe.$$.fragment,V),B(G.$$.fragment,V),B(A.$$.fragment,V),B(be.$$.fragment,V),ge=!0)},o(V){z(i.$$.fragment,V),z(o.$$.fragment,V),z(l.$$.fragment,V),z(h.$$.fragment,V),z(d.$$.fragment,V),z(_.$$.fragment,V),z(w.$$.fragment,V),z(S.$$.fragment,V),z(P.$$.fragment,V),z(L.$$.fragment,V),z(N.$$.fragment,V),z(W.$$.fragment,V),z(X.$$.fragment,V),z(K.$$.fragment,V),z(oe.$$.fragment,V),z(G.$$.fragment,V),z(A.$$.fragment,V),z(be.$$.fragment,V),ge=!1},d(V){V&&I(e),te(i),te(o),te(l),te(h),te(d),te(_),te(w),te(S),te(P),te(L),V&&I(M),V&&I(H),te(N),te(W),te(X),te(K),te(oe),te(G),te(A),te(be)}}}function mk(t){let e,n,s,i,r;return n=new Rl({props:{$$slots:{default:[pk]},$$scope:{ctx:t}}}),{c(){e=p("div"),se(n.$$.fragment),s=b(),i=p("section"),m(e,"class","nav svelte-pt16o2")},m(o,a){T(o,e,a),ee(n,e,null),u(e,s),u(e,i),r=!0},p(o,[a]){const l={};a&8&&(l.$$scope={dirty:a,ctx:o}),n.$set(l)},i(o){r||(B(n.$$.fragment,o),r=!0)},o(o){z(n.$$.fragment,o),r=!1},d(o){o&&I(e),te(n)}}}function gk(t,e,n){let s;We(t,Vh,r=>n(2,s=r)),console.log("logged? ",s),Vh.subscribe(r=>{});async function i(){console.log(s)}return[i]}class _k extends Ke{constructor(e){super(),ze(this,e,gk,mk,Be,{})}}function vk(t){let e,n,s,i,r;return n=new _k({}),{c(){e=p("nav"),se(n.$$.fragment),s=b(),i=p("main"),m(e,"class","navBar svelte-1ab8rao")},m(o,a){T(o,e,a),ee(n,e,null),T(o,s,a),T(o,i,a),r=!0},p:fe,i(o){r||(B(n.$$.fragment,o),r=!0)},o(o){z(n.$$.fragment,o),r=!1},d(o){o&&I(e),te(n),o&&I(s),o&&I(i)}}}class yk extends Ke{constructor(e){super(),ze(this,e,null,vk,Be,{})}}new yk({target:document.getElementById("app")});
