(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function z(){}function ie(n,e){for(const t in e)n[t]=e[t];return n}function Fr(n){return n()}function Xn(){return Object.create(null)}function ke(n){n.forEach(Fr)}function vn(n){return typeof n=="function"}function Z(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let wt;function ni(n,e){return wt||(wt=document.createElement("a")),wt.href=e,n===wt.href}function ri(n){return Object.keys(n).length===0}function bn(n,...e){if(n==null)return z;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function We(n){let e;return bn(n,t=>e=t)(),e}function ce(n,e,t){n.$$.on_destroy.push(bn(e,t))}function In(n,e,t,r){if(n){const s=xr(n,e,t,r);return n[0](s)}}function xr(n,e,t,r){return n[1]&&r?ie(t.ctx.slice(),n[1](r(e))):t.ctx}function yn(n,e,t,r){if(n[2]&&r){const s=n[2](r(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let c=0;c<o;c+=1)i[c]=e.dirty[c]|s[c];return i}return e.dirty|s}return e.dirty}function wn(n,e,t,r,s,i){if(s){const o=xr(e,t,r,i);n.p(o,s)}}function En(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function Ot(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function Pt(n,e){const t={};e=new Set(e);for(const r in n)!e.has(r)&&r[0]!=="$"&&(t[r]=n[r]);return t}function Qn(n){return n==null?"":n}function h(n,e){n.appendChild(e)}function N(n,e,t){n.insertBefore(e,t||null)}function O(n){n.parentNode.removeChild(n)}function m(n){return document.createElement(n)}function J(n){return document.createTextNode(n)}function S(){return J(" ")}function Tn(){return J("")}function Oe(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function E(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function le(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const r in e)e[r]==null?n.removeAttribute(r):r==="style"?n.style.cssText=e[r]:r==="__value"?n.value=n[r]=e[r]:t[r]&&t[r].set?n[r]=e[r]:E(n,r,e[r])}function si(n){return Array.from(n.childNodes)}function Hr(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function ii(n,e,{bubbles:t=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(n,t,r,e),s}function Zn(n,e){return new n(e)}let nt;function Ze(n){nt=n}function ct(){if(!nt)throw new Error("Function called outside component initialization");return nt}function oi(n){ct().$$.on_mount.push(n)}function ai(n){ct().$$.on_destroy.push(n)}function ci(){const n=ct();return(e,t,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[e];if(s){const i=ii(e,t,{cancelable:r});return s.slice().forEach(o=>{o.call(n,i)}),!i.defaultPrevented}return!0}}function et(n,e){return ct().$$.context.set(n,e),e}function Te(n){return ct().$$.context.get(n)}const Je=[],er=[],St=[],tr=[],jr=Promise.resolve();let on=!1;function Vr(){on||(on=!0,jr.then(Wr))}function li(){return Vr(),jr}function an(n){St.push(n)}const Gt=new Set;let Et=0;function Wr(){const n=nt;do{for(;Et<Je.length;){const e=Je[Et];Et++,Ze(e),ui(e.$$)}for(Ze(null),Je.length=0,Et=0;er.length;)er.pop()();for(let e=0;e<St.length;e+=1){const t=St[e];Gt.has(t)||(Gt.add(t),t())}St.length=0}while(Je.length);for(;tr.length;)tr.pop()();on=!1,Gt.clear(),Ze(n)}function ui(n){if(n.fragment!==null){n.update(),ke(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(an)}}const kt=new Set;let Ce;function xt(){Ce={r:0,c:[],p:Ce}}function Ht(){Ce.r||ke(Ce.c),Ce=Ce.p}function _(n,e){n&&n.i&&(kt.delete(n),n.i(e))}function w(n,e,t,r){if(n&&n.o){if(kt.has(n))return;kt.add(n),Ce.c.push(()=>{kt.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function ze(n,e){const t={},r={},s={$$scope:1};let i=n.length;for(;i--;){const o=n[i],c=e[i];if(c){for(const a in o)a in c||(r[a]=1);for(const a in c)s[a]||(t[a]=c[a],s[a]=1);n[i]=c}else for(const a in o)s[a]=1}for(const o in r)o in t||(t[o]=void 0);return t}function nr(n){return typeof n=="object"&&n!==null?n:{}}function D(n){n&&n.c()}function A(n,e,t,r){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),r||an(()=>{const o=n.$$.on_mount.map(Fr).filter(vn);n.$$.on_destroy?n.$$.on_destroy.push(...o):ke(o),n.$$.on_mount=[]}),i.forEach(an)}function C(n,e){const t=n.$$;t.fragment!==null&&(ke(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function di(n,e){n.$$.dirty[0]===-1&&(Je.push(n),Vr(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function te(n,e,t,r,s,i,o,c=[-1]){const a=nt;Ze(n);const l=n.$$={fragment:null,ctx:[],props:i,update:z,not_equal:s,bound:Xn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Xn(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};o&&o(l.root);let d=!1;if(l.ctx=t?t(n,e.props||{},(u,f,...v)=>{const b=v.length?v[0]:f;return l.ctx&&s(l.ctx[u],l.ctx[u]=b)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](b),d&&di(n,u)),f}):[],l.update(),d=!0,ke(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const u=si(e.target);l.fragment&&l.fragment.l(u),u.forEach(O)}else l.fragment&&l.fragment.c();e.intro&&_(n.$$.fragment),A(n,e.target,e.anchor,e.customElement),Wr()}Ze(a)}class ne{$destroy(){C(this,1),this.$destroy=z}$on(e,t){if(!vn(t))return z;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ri(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const rr=n=>typeof n>"u",zr=n=>typeof n=="function",qr=n=>typeof n=="number";function fi(n){return!n.defaultPrevented&&n.button===0&&!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Gr(){let n=0;return()=>n++}function hi(){return Math.random().toString(36).substring(2)}const Se=typeof window>"u";function Kr(n,e,t){return n.addEventListener(e,t),()=>n.removeEventListener(e,t)}const cn=(n,e)=>n?{}:{style:e},Fe=n=>({"aria-hidden":"true",...cn(n,"display:none;")}),Be=[];function pi(n,e){return{subscribe:se(n,e).subscribe}}function se(n,e=z){let t;const r=new Set;function s(c){if(Z(n,c)&&(n=c,t)){const a=!Be.length;for(const l of r)l[1](),Be.push(l,n);if(a){for(let l=0;l<Be.length;l+=2)Be[l][0](Be[l+1]);Be.length=0}}}function i(c){s(c(n))}function o(c,a=z){const l=[c,a];return r.add(l),r.size===1&&(t=e(s)||z),c(n),()=>{r.delete(l),r.size===0&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function mi(n,e,t){const r=!Array.isArray(n),s=r?[n]:n,i=e.length<2;return pi(t,o=>{let c=!1;const a=[];let l=0,d=z;const u=()=>{if(l)return;d();const v=e(r?a[0]:a,o);i?o(v):d=vn(v)?v:z},f=s.map((v,b)=>bn(v,g=>{a[b]=g,l&=~(1<<b),c&&u()},()=>{l|=1<<b}));return c=!0,u(),function(){ke(f),d()}})}const lt=n=>`@@svnav-ctx__${n}`,ln=lt("LOCATION"),qe=lt("ROUTER"),Jr=lt("ROUTE"),gi=lt("ROUTE_PARAMS"),_i=lt("FOCUS_ELEM"),Yr=/^:(.+)/,Ye=(n,e,t)=>n.substr(e,t),un=(n,e)=>Ye(n,0,e.length)===e,vi=n=>n==="",bi=n=>Yr.test(n),Xr=n=>n[0]==="*",Ii=n=>n.replace(/\*.*$/,""),Qr=n=>n.replace(/(^\/+|\/+$)/g,"");function fe(n,e=!1){const t=Qr(n).split("/");return e?t.filter(Boolean):t}const Kt=(n,e)=>n+(e?`?${e}`:""),Sn=n=>`/${Qr(n)}`;function ut(...n){const e=r=>fe(r,!0).join("/"),t=n.map(e).join("/");return Sn(t)}const kn=1,jt=2,De=3,yi=4,Zr=5,wi=6,es=7,Ei=8,Ti=9,ts=10,ns=11,Si={[kn]:"Link",[jt]:"Route",[De]:"Router",[yi]:"useFocus",[Zr]:"useLocation",[wi]:"useMatch",[es]:"useNavigate",[Ei]:"useParams",[Ti]:"useResolvable",[ts]:"useResolve",[ns]:"navigate"},Rn=n=>Si[n];function ki(n,e){let t;return n===jt?t=e.path?`path="${e.path}"`:"default":n===kn?t=`to="${e.to}"`:n===De&&(t=`basepath="${e.basepath||""}"`),`<${Rn(n)} ${t||""} />`}function Ri(n,e,t,r){const s=t&&ki(r||n,t),i=s?`

Occurred in: ${s}`:"",o=Rn(n),c=zr(e)?e(o):e;return`<${o}> ${c}${i}`}const rs=n=>(...e)=>n(Ri(...e)),ss=rs(n=>{throw new Error(n)}),Dt=rs(console.warn),sr=4,$i=3,Ai=2,Ci=1,Oi=1;function Pi(n,e){const t=n.default?0:fe(n.fullPath).reduce((r,s)=>{let i=r;return i+=sr,vi(s)?i+=Oi:bi(s)?i+=Ai:Xr(s)?i-=sr+Ci:i+=$i,i},0);return{route:n,score:t,index:e}}function Di(n){return n.map(Pi).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index)}function is(n,e){let t,r;const[s]=e.split("?"),i=fe(s),o=i[0]==="",c=Di(n);for(let a=0,l=c.length;a<l;a++){const{route:d}=c[a];let u=!1;const f={},v=U=>({...d,params:f,uri:U});if(d.default){r=v(e);continue}const b=fe(d.fullPath),g=Math.max(i.length,b.length);let I=0;for(;I<g;I++){const U=b[I],F=i[I];if(!rr(U)&&Xr(U)){const $=U==="*"?"*":U.slice(1);f[$]=i.slice(I).map(decodeURIComponent).join("/");break}if(rr(F)){u=!0;break}const R=Yr.exec(U);if(R&&!o){const $=decodeURIComponent(F);f[R[1]]=$}else if(U!==F){u=!0;break}}if(!u){t=v(ut(...i.slice(0,I)));break}}return t||r||null}function os(n,e){return is([n],e)}function Ni(n,e){if(un(n,"/"))return n;const[t,r]=n.split("?"),[s]=e.split("?"),i=fe(t),o=fe(s);if(i[0]==="")return Kt(s,r);if(!un(i[0],".")){const l=o.concat(i).join("/");return Kt((s==="/"?"":"/")+l,r)}const c=o.concat(i),a=[];return c.forEach(l=>{l===".."?a.pop():l!=="."&&a.push(l)}),Kt(`/${a.join("/")}`,r)}function ir(n,e){const{pathname:t,hash:r="",search:s="",state:i}=n,o=fe(e,!0),c=fe(t,!0);for(;o.length;)o[0]!==c[0]&&ss(De,`Invalid state: All locations must begin with the basepath "${e}", found "${t}"`),o.shift(),c.shift();return{pathname:ut(...c),hash:r,search:s,state:i}}const or=n=>n.length===1?"":n,$n=n=>{const e=n.indexOf("?"),t=n.indexOf("#"),r=e!==-1,s=t!==-1,i=s?or(Ye(n,t)):"",o=s?Ye(n,0,t):n,c=r?or(Ye(o,e)):"";return{pathname:(r?Ye(o,0,e):o)||"/",search:c,hash:i}},Li=n=>{const{pathname:e,search:t,hash:r}=n;return e+t+r};function Mi(n,e,t){return ut(t,Ni(n,e))}function Ui(n,e){const t=Sn(Ii(n)),r=fe(t,!0),s=fe(e,!0).slice(0,r.length),i=os({fullPath:t},ut(...s));return i&&i.uri}const Jt="POP",Bi="PUSH",Fi="REPLACE";function Yt(n){return{...n.location,pathname:encodeURI(decodeURI(n.location.pathname)),state:n.history.state,_key:n.history.state&&n.history.state._key||"initial"}}function xi(n){let e=[],t=Yt(n),r=Jt;const s=(i=e)=>i.forEach(o=>o({location:t,action:r}));return{get location(){return t},listen(i){e.push(i);const o=()=>{t=Yt(n),r=Jt,s([i])};s([i]);const c=Kr(n,"popstate",o);return()=>{c(),e=e.filter(a=>a!==i)}},navigate(i,o){const{state:c={},replace:a=!1}=o||{};if(r=a?Fi:Bi,qr(i))o&&Dt(ns,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),r=Jt,n.history.go(i);else{const l={...c,_key:hi()};try{n.history[a?"replaceState":"pushState"](l,"",i)}catch{n.location[a?"replace":"assign"](i)}}t=Yt(n),s()}}}function Xt(n,e){return{...$n(e),state:n}}function Hi(n="/"){let e=0,t=[Xt(null,n)];return{get entries(){return t},get location(){return t[e]},addEventListener(){},removeEventListener(){},history:{get state(){return t[e].state},pushState(r,s,i){e++,t=t.slice(0,e),t.push(Xt(r,i))},replaceState(r,s,i){t[e]=Xt(r,i)},go(r){const s=e+r;s<0||s>t.length-1||(e=s)}}}}const ji=!!(!Se&&window.document&&window.document.createElement),Vi=!Se&&window.location.origin==="null",Wi=xi(ji&&!Vi?window:Hi());let he=null,as=!0;function zi(n,e){const t=document.querySelectorAll("[data-svnav-router]");for(let r=0;r<t.length;r++){const s=t[r],i=Number(s.dataset.svnavRouter);if(i===n)return!0;if(i===e)return!1}return!1}function qi(n){(!he||n.level>he.level||n.level===he.level&&zi(n.routerId,he.routerId))&&(he=n)}function Gi(){he=null}function Ki(){as=!1}function ar(n){if(!n)return!1;const e="tabindex";try{if(!n.hasAttribute(e)){n.setAttribute(e,"-1");let t;t=Kr(n,"blur",()=>{n.removeAttribute(e),t()})}return n.focus(),document.activeElement===n}catch{return!1}}function Ji(n,e){return Number(n.dataset.svnavRouteEnd)===e}function Yi(n){return/^H[1-6]$/i.test(n.tagName)}function cr(n,e=document){return e.querySelector(n)}function Xi(n){let t=cr(`[data-svnav-route-start="${n}"]`).nextElementSibling;for(;!Ji(t,n);){if(Yi(t))return t;const r=cr("h1,h2,h3,h4,h5,h6",t);if(r)return r;t=t.nextElementSibling}return null}function Qi(n){Promise.resolve(We(n.focusElement)).then(e=>{const t=e||Xi(n.id);t||Dt(De,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,n,jt),!ar(t)&&ar(document.documentElement)})}const Zi=(n,e,t)=>(r,s)=>li().then(()=>{if(!he||as){Ki();return}if(r&&Qi(he.route),n.announcements&&s){const{path:i,fullPath:o,meta:c,params:a,uri:l}=he.route,d=n.createAnnouncement({path:i,fullPath:o,meta:c,params:a,uri:l},We(t));Promise.resolve(d).then(u=>{e.set(u)})}Gi()}),lr="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function eo(n){let e,t,r=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},cn(n[6],lr)],s={};for(let i=0;i<r.length;i+=1)s=ie(s,r[i]);return{c(){e=m("div"),t=J(n[0]),le(e,s)},m(i,o){N(i,e,o),h(e,t)},p(i,o){o[0]&1&&Hr(t,i[0]),le(e,s=ze(r,[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},cn(i[6],lr)]))},d(i){i&&O(e)}}}function to(n){let e,t,r,s,i,o=[Fe(n[6]),{"data-svnav-router":n[3]}],c={};for(let u=0;u<o.length;u+=1)c=ie(c,o[u]);const a=n[22].default,l=In(a,n,n[21],null);let d=n[2]&&n[4]&&n[1].announcements&&eo(n);return{c(){e=m("div"),t=S(),l&&l.c(),r=S(),d&&d.c(),s=Tn(),le(e,c)},m(u,f){N(u,e,f),N(u,t,f),l&&l.m(u,f),N(u,r,f),d&&d.m(u,f),N(u,s,f),i=!0},p(u,f){le(e,c=ze(o,[Fe(u[6]),{"data-svnav-router":u[3]}])),l&&l.p&&(!i||f[0]&2097152)&&wn(l,a,u,u[21],i?yn(a,u[21],f,null):En(u[21]),null),u[2]&&u[4]&&u[1].announcements&&d.p(u,f)},i(u){i||(_(l,u),i=!0)},o(u){w(l,u),i=!1},d(u){u&&O(e),u&&O(t),l&&l.d(u),u&&O(r),d&&d.d(u),u&&O(s)}}}const no=Gr(),ur="/";function ro(n,e,t){let r,s,i,o,c,{$$slots:a={},$$scope:l}=e,{basepath:d=ur}=e,{url:u=null}=e,{history:f=Wi}=e,{primary:v=!0}=e,{a11y:b={}}=e,{disableInlineStyles:g=!1}=e;const I={createAnnouncement:k=>`Navigated to ${k.uri}`,announcements:!0,...b},U=d,F=Sn(d),R=Te(ln),$=Te(qe),x=!R,H=no(),P=v&&!($&&!$.manageFocus),j=se("");ce(n,j,k=>t(0,c=k));const q=$?$.disableInlineStyles:g,B=se([]);ce(n,B,k=>t(20,o=k));const K=se(null);ce(n,K,k=>t(18,s=k));let y=!1;const Y=x?0:$.level+1,G=x?se((()=>ir(Se?$n(u):f.location,F))()):R;ce(n,G,k=>t(17,r=k));const L=se(r);ce(n,L,k=>t(19,i=k));const p=Zi(I,j,G),M=k=>Q=>Q.filter(re=>re.id!==k);function $e(k){if(Se){if(y)return;const Q=os(k,r.pathname);if(Q)return y=!0,Q}else B.update(Q=>{const re=M(k.id)(Q);return re.push(k),re})}function yt(k){B.update(M(k))}return!x&&d!==ur&&Dt(De,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:d}),x&&(oi(()=>f.listen(Q=>{const re=ir(Q.location,F);L.set(r),G.set(re)})),et(ln,G)),et(qe,{activeRoute:K,registerRoute:$e,unregisterRoute:yt,manageFocus:P,level:Y,id:H,history:x?f:$.history,basepath:x?F:$.basepath,disableInlineStyles:q}),n.$$set=k=>{"basepath"in k&&t(11,d=k.basepath),"url"in k&&t(12,u=k.url),"history"in k&&t(13,f=k.history),"primary"in k&&t(14,v=k.primary),"a11y"in k&&t(15,b=k.a11y),"disableInlineStyles"in k&&t(16,g=k.disableInlineStyles),"$$scope"in k&&t(21,l=k.$$scope)},n.$$.update=()=>{if(n.$$.dirty[0]&2048&&d!==U&&Dt(De,'You cannot change the "basepath" prop. It is ignored.'),n.$$.dirty[0]&1179648){const k=is(o,r.pathname);K.set(k)}if(n.$$.dirty[0]&655360&&x){const k=!!r.hash,Q=!k&&P,re=!k||r.pathname!==i.pathname;p(Q,re)}n.$$.dirty[0]&262144&&P&&s&&s.primary&&qi({level:Y,routerId:H,route:s})},[c,I,x,H,P,j,q,B,K,G,L,d,u,f,v,b,g,r,s,i,o,l,a]}class An extends ne{constructor(e){super(),te(this,e,ro,to,Z,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}function dt(n,e,t=qe,r=De){Te(t)||ss(n,i=>`You cannot use ${i} outside of a ${Rn(r)}.`,e)}const so=n=>{const{subscribe:e}=Te(n);return{subscribe:e}};function cs(){return dt(Zr),so(ln)}function ls(){const{history:n}=Te(qe);return n}function us(){const n=Te(Jr);return n?mi(n,e=>e.base):se("/")}function ds(){dt(ts);const n=us(),{basepath:e}=Te(qe);return r=>Mi(r,We(n),e)}function Cn(){dt(es);const n=ds(),{navigate:e}=ls();return(r,s)=>{const i=qr(r)?r:n(r);return e(i,s)}}const io=n=>({params:n&16,location:n&8}),dr=n=>({params:Se?We(n[10]):n[4],location:n[3],navigate:n[11]});function fr(n){let e,t;return e=new An({props:{primary:n[1],$$slots:{default:[co]},$$scope:{ctx:n}}}),{c(){D(e.$$.fragment)},m(r,s){A(e,r,s),t=!0},p(r,s){const i={};s&2&&(i.primary=r[1]),s&528409&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function oo(n){let e;const t=n[18].default,r=In(t,n,n[19],dr);return{c(){r&&r.c()},m(s,i){r&&r.m(s,i),e=!0},p(s,i){r&&r.p&&(!e||i&524312)&&wn(r,t,s,s[19],e?yn(t,s[19],i,io):En(s[19]),dr)},i(s){e||(_(r,s),e=!0)},o(s){w(r,s),e=!1},d(s){r&&r.d(s)}}}function ao(n){let e,t,r;const s=[{location:n[3]},{navigate:n[11]},Se?We(n[10]):n[4],n[12]];var i=n[0];function o(c){let a={};for(let l=0;l<s.length;l+=1)a=ie(a,s[l]);return{props:a}}return i&&(e=Zn(i,o())),{c(){e&&D(e.$$.fragment),t=Tn()},m(c,a){e&&A(e,c,a),N(c,t,a),r=!0},p(c,a){const l=a&7192?ze(s,[a&8&&{location:c[3]},a&2048&&{navigate:c[11]},a&1040&&nr(Se?We(c[10]):c[4]),a&4096&&nr(c[12])]):{};if(i!==(i=c[0])){if(e){xt();const d=e;w(d.$$.fragment,1,0,()=>{C(d,1)}),Ht()}i?(e=Zn(i,o()),D(e.$$.fragment),_(e.$$.fragment,1),A(e,t.parentNode,t)):e=null}else i&&e.$set(l)},i(c){r||(e&&_(e.$$.fragment,c),r=!0)},o(c){e&&w(e.$$.fragment,c),r=!1},d(c){c&&O(t),e&&C(e,c)}}}function co(n){let e,t,r,s;const i=[ao,oo],o=[];function c(a,l){return a[0]!==null?0:1}return e=c(n),t=o[e]=i[e](n),{c(){t.c(),r=Tn()},m(a,l){o[e].m(a,l),N(a,r,l),s=!0},p(a,l){let d=e;e=c(a),e===d?o[e].p(a,l):(xt(),w(o[d],1,1,()=>{o[d]=null}),Ht(),t=o[e],t?t.p(a,l):(t=o[e]=i[e](a),t.c()),_(t,1),t.m(r.parentNode,r))},i(a){s||(_(t),s=!0)},o(a){w(t),s=!1},d(a){o[e].d(a),a&&O(r)}}}function lo(n){let e,t,r,s,i,o=[Fe(n[7]),{"data-svnav-route-start":n[5]}],c={};for(let u=0;u<o.length;u+=1)c=ie(c,o[u]);let a=n[2]&&fr(n),l=[Fe(n[7]),{"data-svnav-route-end":n[5]}],d={};for(let u=0;u<l.length;u+=1)d=ie(d,l[u]);return{c(){e=m("div"),t=S(),a&&a.c(),r=S(),s=m("div"),le(e,c),le(s,d)},m(u,f){N(u,e,f),N(u,t,f),a&&a.m(u,f),N(u,r,f),N(u,s,f),i=!0},p(u,[f]){le(e,c=ze(o,[Fe(u[7]),{"data-svnav-route-start":u[5]}])),u[2]?a?(a.p(u,f),f&4&&_(a,1)):(a=fr(u),a.c(),_(a,1),a.m(r.parentNode,r)):a&&(xt(),w(a,1,1,()=>{a=null}),Ht()),le(s,d=ze(l,[Fe(u[7]),{"data-svnav-route-end":u[5]}]))},i(u){i||(_(a),i=!0)},o(u){w(a),i=!1},d(u){u&&O(e),u&&O(t),a&&a.d(u),u&&O(r),u&&O(s)}}}const uo=Gr();function fo(n,e,t){let r;const s=["path","component","meta","primary"];let i=Pt(e,s),o,c,a,l,{$$slots:d={},$$scope:u}=e,{path:f=""}=e,{component:v=null}=e,{meta:b={}}=e,{primary:g=!0}=e;dt(jt,e);const I=uo(),{registerRoute:U,unregisterRoute:F,activeRoute:R,disableInlineStyles:$}=Te(qe);ce(n,R,y=>t(16,o=y));const x=us();ce(n,x,y=>t(17,a=y));const H=cs();ce(n,H,y=>t(3,c=y));const P=se(null);let j;const q=se(),B=se({});ce(n,B,y=>t(4,l=y)),et(Jr,q),et(gi,B),et(_i,P);const K=Cn();return Se||ai(()=>F(I)),n.$$set=y=>{t(24,e=ie(ie({},e),Ot(y))),t(12,i=Pt(e,s)),"path"in y&&t(13,f=y.path),"component"in y&&t(0,v=y.component),"meta"in y&&t(14,b=y.meta),"primary"in y&&t(1,g=y.primary),"$$scope"in y&&t(19,u=y.$$scope)},n.$$.update=()=>{if(n.$$.dirty&155658){const y=f==="",Y=ut(a,f),W={id:I,path:f,meta:b,default:y,fullPath:y?"":Y,base:y?a:Ui(Y,c.pathname),primary:g,focusElement:P};q.set(W),t(15,j=U(W))}if(n.$$.dirty&98304&&t(2,r=!!(j||o&&o.id===I)),n.$$.dirty&98308&&r){const{params:y}=j||o;B.set(y)}},e=Ot(e),[v,g,r,c,l,I,R,$,x,H,B,K,i,f,b,j,o,a,d,u]}class ae extends ne{constructor(e){super(),te(this,e,fo,lo,Z,{path:13,component:0,meta:14,primary:1})}}function ho(n){let e,t,r,s;const i=n[13].default,o=In(i,n,n[12],null);let c=[{href:n[0]},n[2],n[1]],a={};for(let l=0;l<c.length;l+=1)a=ie(a,c[l]);return{c(){e=m("a"),o&&o.c(),le(e,a)},m(l,d){N(l,e,d),o&&o.m(e,null),t=!0,r||(s=Oe(e,"click",n[4]),r=!0)},p(l,[d]){o&&o.p&&(!t||d&4096)&&wn(o,i,l,l[12],t?yn(i,l[12],d,null):En(l[12]),null),le(e,a=ze(c,[(!t||d&1)&&{href:l[0]},d&4&&l[2],d&2&&l[1]]))},i(l){t||(_(o,l),t=!0)},o(l){w(o,l),t=!1},d(l){l&&O(e),o&&o.d(l),r=!1,s()}}}function po(n,e,t){let r,s,i,o,c,a;const l=["to","replace","state","getProps"];let d=Pt(e,l),u,{$$slots:f={},$$scope:v}=e,{to:b}=e,{replace:g=!1}=e,{state:I={}}=e,{getProps:U=null}=e;dt(kn,e);const F=cs();ce(n,F,P=>t(11,u=P));const R=ci(),$=ds(),{navigate:x}=ls();function H(P){R("click",P),fi(P)&&(P.preventDefault(),x(r,{state:I,replace:o||g}))}return n.$$set=P=>{t(19,e=ie(ie({},e),Ot(P))),t(18,d=Pt(e,l)),"to"in P&&t(5,b=P.to),"replace"in P&&t(6,g=P.replace),"state"in P&&t(7,I=P.state),"getProps"in P&&t(8,U=P.getProps),"$$scope"in P&&t(12,v=P.$$scope)},n.$$.update=()=>{n.$$.dirty&2080&&t(0,r=$(b,u)),n.$$.dirty&2049&&t(10,s=un(u.pathname,r)),n.$$.dirty&2049&&t(9,i=r===u.pathname),n.$$.dirty&2049&&(o=$n(r)===Li(u)),n.$$.dirty&512&&t(2,c=i?{"aria-current":"page"}:{}),t(1,a=(()=>{if(zr(U)){const P=U({location:u,href:r,isPartiallyCurrent:s,isCurrent:i});return{...d,...P}}return d})())},e=Ot(e),[r,a,c,F,H,b,g,I,U,i,s,u,v,f]}class ee extends ne{constructor(e){super(),te(this,e,po,ho,Z,{to:5,replace:6,state:7,getProps:8})}}function mo(n){let e;return{c(){e=m("h1"),e.textContent="Estas en Agenda"},m(t,r){N(t,e,r)},p:z,i:z,o:z,d(t){t&&O(e)}}}class fs extends ne{constructor(e){super(),te(this,e,null,mo,Z,{})}}function go(n){let e;return{c(){e=m("h1"),e.textContent="Estas en Sinergias"},m(t,r){N(t,e,r)},p:z,i:z,o:z,d(t){t&&O(e)}}}class hs extends ne{constructor(e){super(),te(this,e,null,go,Z,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ps=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},_o=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ms={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,a=s+2<n.length,l=a?n[s+2]:0,d=i>>2,u=(i&3)<<4|c>>4;let f=(c&15)<<2|l>>6,v=l&63;a||(v=64,o||(f=64)),r.push(t[d],t[u],t[f],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ps(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_o(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||l==null||u==null)throw Error();const f=i<<2|c>>4;if(r.push(f),l!==64){const v=c<<4&240|l>>2;if(r.push(v),u!==64){const b=l<<6&192|u;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},vo=function(n){const e=ps(n);return ms.encodeByteArray(e,!0)},gs=function(n){return vo(n).replace(/\./g,"")},_s=function(n){try{return ms.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(X())}function Io(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wo(){const n=X();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Eo(){return typeof indexedDB=="object"}function To(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function So(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ko=()=>So().__FIREBASE_DEFAULTS__,Ro=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$o=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_s(n[1]);return e&&JSON.parse(e)},On=()=>{try{return ko()||Ro()||$o()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ao=n=>{var e,t;return(t=(e=On())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Co=()=>{var n;return(n=On())===null||n===void 0?void 0:n.config},vs=n=>{var e;return(e=On())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="FirebaseError";class Re extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Po,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ft.prototype.create)}}class ft{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Do(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Re(s,c,r)}}function Do(n,e){return n.replace(No,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const No=/\{\$([^}]+)}/g;function Lo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Nt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(hr(i)&&hr(o)){if(!Nt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function hr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xe(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qe(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Mo(n,e){const t=new Uo(n,e);return t.subscribe.bind(t)}class Uo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Bo(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Qt),s.error===void 0&&(s.error=Qt),s.complete===void 0&&(s.complete=Qt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bo(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qt(){}/**
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
 */function Ue(n){return n&&n._delegate?n._delegate:n}class Ge{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Oo;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ho(e))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ae){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ae){return this.instances.has(e)}getOptions(e=Ae){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xo(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ae){return this.component?this.component.multipleInstances?e:Ae:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xo(n){return n===Ae?void 0:n}function Ho(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const Vo={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},Wo=V.INFO,zo={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},qo=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=zo[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bs{constructor(e){this.name=e,this._logLevel=Wo,this._logHandler=qo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const Go=(n,e)=>e.some(t=>n instanceof t);let pr,mr;function Ko(){return pr||(pr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jo(){return mr||(mr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Is=new WeakMap,dn=new WeakMap,ys=new WeakMap,Zt=new WeakMap,Pn=new WeakMap;function Yo(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(we(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Is.set(t,n)}).catch(()=>{}),Pn.set(e,n),e}function Xo(n){if(dn.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});dn.set(n,e)}let fn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return dn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ys.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return we(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Qo(n){fn=n(fn)}function Zo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(en(this),e,...t);return ys.set(r,e.sort?e.sort():[e]),we(r)}:Jo().includes(n)?function(...e){return n.apply(en(this),e),we(Is.get(this))}:function(...e){return we(n.apply(en(this),e))}}function ea(n){return typeof n=="function"?Zo(n):(n instanceof IDBTransaction&&Xo(n),Go(n,Ko())?new Proxy(n,fn):n)}function we(n){if(n instanceof IDBRequest)return Yo(n);if(Zt.has(n))return Zt.get(n);const e=ea(n);return e!==n&&(Zt.set(n,e),Pn.set(e,n)),e}const en=n=>Pn.get(n);function ta(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=we(o);return r&&o.addEventListener("upgradeneeded",a=>{r(we(o.result),a.oldVersion,a.newVersion,we(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const na=["get","getKey","getAll","getAllKeys","count"],ra=["put","add","delete","clear"],tn=new Map;function gr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tn.get(e))return tn.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=ra.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||na.includes(t)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[t](...c),s&&a.done]))[0]};return tn.set(e,i),i}Qo(n=>({...n,get:(e,t,r)=>gr(e,t)||n.get(e,t,r),has:(e,t)=>!!gr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ia(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ia(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hn="@firebase/app",_r="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new bs("@firebase/app"),oa="@firebase/app-compat",aa="@firebase/analytics-compat",ca="@firebase/analytics",la="@firebase/app-check-compat",ua="@firebase/app-check",da="@firebase/auth",fa="@firebase/auth-compat",ha="@firebase/database",pa="@firebase/database-compat",ma="@firebase/functions",ga="@firebase/functions-compat",_a="@firebase/installations",va="@firebase/installations-compat",ba="@firebase/messaging",Ia="@firebase/messaging-compat",ya="@firebase/performance",wa="@firebase/performance-compat",Ea="@firebase/remote-config",Ta="@firebase/remote-config-compat",Sa="@firebase/storage",ka="@firebase/storage-compat",Ra="@firebase/firestore",$a="@firebase/firestore-compat",Aa="firebase",Ca="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="[DEFAULT]",Oa={[hn]:"fire-core",[oa]:"fire-core-compat",[ca]:"fire-analytics",[aa]:"fire-analytics-compat",[ua]:"fire-app-check",[la]:"fire-app-check-compat",[da]:"fire-auth",[fa]:"fire-auth-compat",[ha]:"fire-rtdb",[pa]:"fire-rtdb-compat",[ma]:"fire-fn",[ga]:"fire-fn-compat",[_a]:"fire-iid",[va]:"fire-iid-compat",[ba]:"fire-fcm",[Ia]:"fire-fcm-compat",[ya]:"fire-perf",[wa]:"fire-perf-compat",[Ea]:"fire-rc",[Ta]:"fire-rc-compat",[Sa]:"fire-gcs",[ka]:"fire-gcs-compat",[Ra]:"fire-fst",[$a]:"fire-fst-compat","fire-js":"fire-js",[Aa]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Map,mn=new Map;function Pa(n,e){try{n.container.addComponent(e)}catch(t){Ne.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rt(n){const e=n.name;if(mn.has(e))return Ne.debug(`There were multiple attempts to register component ${e}.`),!1;mn.set(e,n);for(const t of Lt.values())Pa(t,n);return!0}function ws(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ee=new ft("app","Firebase",Da);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=Ca;function Es(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pn,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ee.create("bad-app-name",{appName:String(s)});if(t||(t=Co()),!t)throw Ee.create("no-options");const i=Lt.get(s);if(i){if(Nt(t,i.options)&&Nt(r,i.config))return i;throw Ee.create("duplicate-app",{appName:s})}const o=new jo(s);for(const a of mn.values())o.addComponent(a);const c=new Na(t,r,o);return Lt.set(s,c),c}function La(n=pn){const e=Lt.get(n);if(!e&&n===pn)return Es();if(!e)throw Ee.create("no-app",{appName:n});return e}function He(n,e,t){var r;let s=(r=Oa[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ne.warn(c.join(" "));return}rt(new Ge(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ma="firebase-heartbeat-database",Ua=1,st="firebase-heartbeat-store";let nn=null;function Ts(){return nn||(nn=ta(Ma,Ua,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(st)}}}).catch(n=>{throw Ee.create("idb-open",{originalErrorMessage:n.message})})),nn}async function Ba(n){var e;try{return(await Ts()).transaction(st).objectStore(st).get(Ss(n))}catch(t){if(t instanceof Re)Ne.warn(t.message);else{const r=Ee.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});Ne.warn(r.message)}}}async function vr(n,e){var t;try{const s=(await Ts()).transaction(st,"readwrite");return await s.objectStore(st).put(e,Ss(n)),s.done}catch(r){if(r instanceof Re)Ne.warn(r.message);else{const s=Ee.create("idb-set",{originalErrorMessage:(t=r)===null||t===void 0?void 0:t.message});Ne.warn(s.message)}}}function Ss(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Fa=1024,xa=30*24*60*60*1e3;class Ha{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Va(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=br();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=xa}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=br(),{heartbeatsToSend:t,unsentEntries:r}=ja(this._heartbeatsCache.heartbeats),s=gs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function br(){return new Date().toISOString().substring(0,10)}function ja(n,e=Fa){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ir(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ir(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Va{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eo()?To().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ba(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return vr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return vr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ir(n){return gs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(n){rt(new Ge("platform-logger",e=>new sa(e),"PRIVATE")),rt(new Ge("heartbeat",e=>new Ha(e),"PRIVATE")),He(hn,_r,n),He(hn,_r,"esm2017"),He("fire-js","")}Wa("");var za="firebase",qa="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He(za,qa,"app");function Dn(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function ks(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ga=ks,Rs=new ft("auth","Firebase",ks());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new bs("@firebase/auth");function Rt(n,...e){yr.logLevel<=V.ERROR&&yr.error(`Auth (${Vt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n,...e){throw Nn(n,...e)}function ue(n,...e){return Nn(n,...e)}function Ka(n,e,t){const r=Object.assign(Object.assign({},Ga()),{[e]:t});return new ft("auth","Firebase",r).create(e,{appName:n.name})}function Nn(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Rs.create(n,...e)}function T(n,e,...t){if(!n)throw Nn(e,...t)}function pe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Rt(e),new Error(e)}function ge(n,e){n||pe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Map;function me(n){ge(n instanceof Function,"Expected a class definition");let e=wr.get(n);return e?(ge(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,wr.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n,e){const t=ws(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Nt(i,e!=null?e:{}))return s;oe(s,"already-initialized")}return t.initialize({options:e})}function Ya(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(me);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Xa(){return Er()==="http:"||Er()==="https:"}function Er(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xa()||Io()||"connection"in navigator)?navigator.onLine:!0}function Za(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ge(t>e,"Short delay should be less than long delay!"),this.isMobile=bo()||yo()}get(){return Qa()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n,e){ge(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=new pt(3e4,6e4);function mt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function gt(n,e,t,r,s={}){return As(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=ht(Object.assign({key:n.config.apiKey},o)).slice(1),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/json",n.languageCode&&(a["X-Firebase-Locale"]=n.languageCode),$s.fetch()(Cs(n,n.config.apiHost,t,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function As(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ec),e);try{const s=new nc(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tt(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tt(n,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Tt(n,"email-already-in-use",o);if(a==="USER_DISABLED")throw Tt(n,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ka(n,d,l);oe(n,d)}}catch(s){if(s instanceof Re)throw s;oe(n,"network-request-failed")}}async function _t(n,e,t,r,s={}){const i=await gt(n,e,t,r,s);return"mfaPendingCredential"in i&&oe(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Cs(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Ln(n.config,s):`${n.config.apiScheme}://${s}`}class nc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ue(this.auth,"network-request-failed")),tc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tt(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ue(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(n,e){return gt(n,"POST","/v1/accounts:delete",e)}async function sc(n,e){return gt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ic(n,e=!1){const t=Ue(n),r=await t.getIdToken(e),s=Mn(r);T(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:tt(rn(s.auth_time)),issuedAtTime:tt(rn(s.iat)),expirationTime:tt(rn(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function rn(n){return Number(n)*1e3}function Mn(n){var e;const[t,r,s]=n.split(".");if(t===void 0||r===void 0||s===void 0)return Rt("JWT malformed, contained fewer than 3 sections"),null;try{const i=_s(r);return i?JSON.parse(i):(Rt("Failed to decode base64 JWT payload"),null)}catch(i){return Rt("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function oc(n){const e=Mn(n);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Re&&ac(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ac({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){((e=t)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=tt(this.lastLoginAt),this.creationTime=tt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(n){var e;const t=n.auth,r=await n.getIdToken(),s=await it(n,sc(t,{idToken:r}));T(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?dc(i.providerUserInfo):[],c=uc(n.providerData,o),a=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),d=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Os(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function lc(n){const e=Ue(n);await Mt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uc(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dc(n){return n.map(e=>{var{providerId:t}=e,r=Dn(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(n,e){const t=await As(n,{},async()=>{const r=ht({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Cs(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",$s.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await fc(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new ot;return r&&(T(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(T(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(T(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ot,this.toJSON())}_performRefresh(){return pe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n,e){T(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pe{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Dn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Os(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await it(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ic(this,e)}reload(){return lc(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Pe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Mt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await it(this,rc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,a,l,d;const u=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(s=t.email)!==null&&s!==void 0?s:void 0,v=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(c=t.tenantId)!==null&&c!==void 0?c:void 0,I=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,U=(l=t.createdAt)!==null&&l!==void 0?l:void 0,F=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:R,emailVerified:$,isAnonymous:x,providerData:H,stsTokenManager:P}=t;T(R&&P,e,"internal-error");const j=ot.fromJSON(this.name,P);T(typeof R=="string",e,"internal-error"),_e(u,e.name),_e(f,e.name),T(typeof $=="boolean",e,"internal-error"),T(typeof x=="boolean",e,"internal-error"),_e(v,e.name),_e(b,e.name),_e(g,e.name),_e(I,e.name),_e(U,e.name),_e(F,e.name);const q=new Pe({uid:R,auth:e,email:f,emailVerified:$,displayName:u,isAnonymous:x,photoURL:b,phoneNumber:v,tenantId:g,stsTokenManager:j,createdAt:U,lastLoginAt:F});return H&&Array.isArray(H)&&(q.providerData=H.map(B=>Object.assign({},B))),I&&(q._redirectEventId=I),q}static async _fromIdTokenResponse(e,t,r=!1){const s=new ot;s.updateFromServerResponse(t);const i=new Pe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Mt(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ps.type="NONE";const Tr=Ps;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n,e,t){return`firebase:${n}:${e}:${t}`}class je{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$t(this.userKey,s.apiKey,i),this.fullPersistenceKey=$t("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new je(me(Tr),e,r);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||me(Tr);const o=$t(r,e.config.apiKey,e.name);let c=null;for(const l of t)try{const d=await l._get(o);if(d){const u=Pe._fromJSON(e,d);l!==i&&(c=u),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new je(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new je(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ls(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ds(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Us(e))return"Blackberry";if(Bs(e))return"Webos";if(Un(e))return"Safari";if((e.includes("chrome/")||Ns(e))&&!e.includes("edge/"))return"Chrome";if(Ms(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ds(n=X()){return/firefox\//i.test(n)}function Un(n=X()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ns(n=X()){return/crios\//i.test(n)}function Ls(n=X()){return/iemobile/i.test(n)}function Ms(n=X()){return/android/i.test(n)}function Us(n=X()){return/blackberry/i.test(n)}function Bs(n=X()){return/webos/i.test(n)}function Wt(n=X()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function hc(n=X()){var e;return Wt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pc(){return wo()&&document.documentMode===10}function Fs(n=X()){return Wt(n)||Ms(n)||Bs(n)||Us(n)||/windows phone/i.test(n)||Ls(n)}function mc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n,e=[]){let t;switch(n){case"Browser":t=Sr(X());break;case"Worker":t=`${Sr(X())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vt}/${r}`}/**
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
 */class gc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(t=s)===null||t===void 0?void 0:t.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kr(this),this.idTokenSubscription=new kr(this),this.beforeStateQueue=new gc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rs,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=me(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await je.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a==null?void 0:a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Mt(e)}catch(r){if(((t=r)===null||t===void 0?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Za()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ue(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(me(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ft("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&me(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await je.create(this,[me(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function vt(n){return Ue(n)}class kr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mo(t=>this.observer=t)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function vc(n,e,t){const r=vt(n);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=Hs(e),{host:o,port:c}=bc(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Ic()}function Hs(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bc(n){const e=Hs(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Rr(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Rr(o)}}}function Rr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ic(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pe("not implemented")}_getIdTokenResponse(e){return pe("not implemented")}_linkToIdToken(e,t){return pe("not implemented")}_getReauthenticationResolver(e){return pe("not implemented")}}async function yc(n,e){return gt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(n,e){return _t(n,"POST","/v1/accounts:signInWithPassword",mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(n,e){return _t(n,"POST","/v1/accounts:signInWithEmailLink",mt(n,e))}async function Tc(n,e){return _t(n,"POST","/v1/accounts:signInWithEmailLink",mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Bn{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new at(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new at(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return wc(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ec(e,{email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return yc(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tc(e,{idToken:t,email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(n,e){return _t(n,"POST","/v1/accounts:signInWithIdp",mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="http://localhost";class Le extends Bn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):oe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Dn(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Le(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ve(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ve(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ve(e,t)}buildRequest(){const e={requestUri:Sc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ht(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rc(n){const e=Xe(Qe(n)).link,t=e?Xe(Qe(e)).deep_link_id:null,r=Xe(Qe(n)).deep_link_id;return(r?Xe(Qe(r)).link:null)||r||t||e||n}class Fn{constructor(e){var t,r,s,i,o,c;const a=Xe(Qe(e)),l=(t=a.apiKey)!==null&&t!==void 0?t:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,u=kc((s=a.mode)!==null&&s!==void 0?s:null);T(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Rc(e);try{return new Fn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(){this.providerId=Ke.PROVIDER_ID}static credential(e,t){return at._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Fn.parseLink(t);return T(r,"argument-error"),at._fromEmailAndCode(e,r.code,r.tenantId)}}Ke.PROVIDER_ID="password";Ke.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ke.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends js{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends bt{constructor(){super("facebook.com")}static credential(e){return Le._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ve.credential(e.oauthAccessToken)}catch{return null}}}ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";ve.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends bt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Le._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return be.credential(t,r)}catch{return null}}}be.GOOGLE_SIGN_IN_METHOD="google.com";be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends bt{constructor(){super("github.com")}static credential(e){return Le._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch{return null}}}Ie.GITHUB_SIGN_IN_METHOD="github.com";Ie.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends bt{constructor(){super("twitter.com")}static credential(e,t){return Le._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ye.credential(t,r)}catch{return null}}}ye.TWITTER_SIGN_IN_METHOD="twitter.com";ye.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(n,e){return _t(n,"POST","/v1/accounts:signUp",mt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Pe._fromIdTokenResponse(e,r,s),o=$r(r);return new Me({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=$r(r);return new Me({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function $r(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Re{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ut.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ut(e,t,r,s)}}function Vs(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ut._fromErrorAndOperation(n,i,e,r):i})}async function Ac(n,e,t=!1){const r=await it(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Me._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cc(n,e,t=!1){var r;const{auth:s}=n,i="reauthenticate";try{const o=await it(n,Vs(s,i,e,n),t);T(o.idToken,s,"internal-error");const c=Mn(o.idToken);T(c,s,"internal-error");const{sub:a}=c;return T(n.uid===a,s,"user-mismatch"),Me._forOperation(n,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&oe(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(n,e,t=!1){const r="signIn",s=await Vs(n,r,e),i=await Me._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Oc(n,e){return Ws(vt(n),e)}async function Pc(n,e,t){const r=vt(n),s=await $c(r,{returnSecureToken:!0,email:e,password:t}),i=await Me._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Dc(n,e,t){return Oc(Ue(n),Ke.credential(e,t))}function Nc(n,e,t,r){return Ue(n).onIdTokenChanged(e,t,r)}function Lc(n,e,t){return Ue(n).beforeAuthStateChanged(e,t)}const Bt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bt,"1"),this.storage.removeItem(Bt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(){const n=X();return Un(n)||Wt(n)}const Uc=1e3,Bc=10;class qs extends zs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mc()&&mc(),this.fallbackToPolling=Fs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pc()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Bc):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Uc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qs.type="LOCAL";const Fc=qs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends zs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gs.type="SESSION";const Ks=Gs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new zt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(t.origin,i)),a=await xc(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=xn("",20);s.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const f=u;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(f.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return window}function jc(n){de().location.href=n}/**
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
 */function Js(){return typeof de().WorkerGlobalScope<"u"&&typeof de().importScripts=="function"}async function Vc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wc(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function zc(){return Js()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="firebaseLocalStorageDb",qc=1,Ft="firebaseLocalStorage",Xs="fbase_key";class It{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qt(n,e){return n.transaction([Ft],e?"readwrite":"readonly").objectStore(Ft)}function Gc(){const n=indexedDB.deleteDatabase(Ys);return new It(n).toPromise()}function _n(){const n=indexedDB.open(Ys,qc);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ft,{keyPath:Xs})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ft)?e(r):(r.close(),await Gc(),e(await _n()))})})}async function Ar(n,e,t){const r=qt(n,!0).put({[Xs]:e,value:t});return new It(r).toPromise()}async function Kc(n,e){const t=qt(n,!1).get(e),r=await new It(t).toPromise();return r===void 0?null:r.value}function Cr(n,e){const t=qt(n,!0).delete(e);return new It(t).toPromise()}const Jc=800,Yc=3;class Qs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _n(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Yc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Js()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zt._getInstance(zc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Vc(),!this.activeServiceWorker)return;this.sender=new Hc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _n();return await Ar(e,Bt,"1"),await Cr(e,Bt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ar(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Kc(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=qt(s,!1).getAll();return new It(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qs.type="LOCAL";const Xc=Qs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Zc(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ue("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Qc().appendChild(r)})}function el(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new pt(3e4,6e4);/**
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
 */function tl(n,e){return e?me(e):(T(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Bn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ve(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ve(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nl(n){return Ws(n.auth,new Hn(n),n.bypassAuthState)}function rl(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),Cc(t,new Hn(n),n.bypassAuthState)}async function sl(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),Ac(t,new Hn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nl;case"linkViaPopup":case"linkViaRedirect":return sl;case"reauthViaPopup":case"reauthViaRedirect":return rl;default:oe(this.auth,"internal-error")}}resolve(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new pt(2e3,1e4);class xe extends Zs{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xe.currentPopupAction&&xe.currentPopupAction.cancel(),xe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){ge(this.filter.length===1,"Popup operations only handle one event");const e=xn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ue(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,il.get())};e()}}xe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="pendingRedirect",At=new Map;class al extends Zs{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=At.get(this.auth._key());if(!e){try{const r=await cl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}At.set(this.auth._key(),e)}return this.bypassAuthState||At.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cl(n,e){const t=dl(e),r=ul(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function ll(n,e){At.set(n._key(),e)}function ul(n){return me(n._redirectPersistence)}function dl(n){return $t(ol,n.config.apiKey,n.name)}async function fl(n,e,t=!1){const r=vt(n),s=tl(r,e),o=await new al(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=10*60*1e3;class pl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ml(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ei(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ue(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Or(e))}saveEventToCache(e){this.cachedEventUids.add(Or(e)),this.lastProcessedEventTime=Date.now()}}function Or(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ei({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ml(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ei(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(n,e={}){return gt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vl=/^https?/;async function bl(n){if(n.config.emulator)return;const{authorizedDomains:e}=await gl(n);for(const t of e)try{if(Il(t))return}catch{}oe(n,"unauthorized-domain")}function Il(n){const e=gn(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!vl.test(t))return!1;if(_l.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const yl=new pt(3e4,6e4);function Pr(){const n=de().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function wl(n){return new Promise((e,t)=>{var r,s,i;function o(){Pr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pr(),t(ue(n,"network-request-failed"))},timeout:yl.get()})}if(!((s=(r=de().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=de().gapi)===null||i===void 0)&&i.load)o();else{const c=el("iframefcb");return de()[c]=()=>{gapi.load?o():t(ue(n,"network-request-failed"))},Zc(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>t(a))}}).catch(e=>{throw Ct=null,e})}let Ct=null;function El(n){return Ct=Ct||wl(n),Ct}/**
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
 */const Tl=new pt(5e3,15e3),Sl="__/auth/iframe",kl="emulator/auth/iframe",Rl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$l=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Al(n){const e=n.config;T(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ln(e,kl):`https://${n.config.authDomain}/${Sl}`,r={apiKey:e.apiKey,appName:n.name,v:Vt},s=$l.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ht(r).slice(1)}`}async function Cl(n){const e=await El(n),t=de().gapi;return T(t,n,"internal-error"),e.open({where:document.body,url:Al(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rl,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ue(n,"network-request-failed"),c=de().setTimeout(()=>{i(o)},Tl.get());function a(){de().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const Ol={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pl=500,Dl=600,Nl="_blank",Ll="http://localhost";class Dr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ml(n,e,t,r=Pl,s=Dl){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Ol),{width:r.toString(),height:s.toString(),top:i,left:o}),l=X().toLowerCase();t&&(c=Ns(l)?Nl:t),Ds(l)&&(e=e||Ll,a.scrollbars="yes");const d=Object.entries(a).reduce((f,[v,b])=>`${f}${v}=${b},`,"");if(hc(l)&&c!=="_self")return Ul(e||"",c),new Dr(null);const u=window.open(e||"",c,d);T(u,n,"popup-blocked");try{u.focus()}catch{}return new Dr(u)}function Ul(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Bl="__/auth/handler",Fl="emulator/auth/handler";function Nr(n,e,t,r,s,i){T(n.config.authDomain,n,"auth-domain-config-required"),T(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Vt,eventId:s};if(e instanceof js){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Lo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,l]of Object.entries(i||{}))o[a]=l}if(e instanceof bt){const a=e.getScopes().filter(l=>l!=="");a.length>0&&(o.scopes=a.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const a of Object.keys(c))c[a]===void 0&&delete c[a];return`${xl(n)}?${ht(c).slice(1)}`}function xl({config:n}){return n.emulator?Ln(n,Fl):`https://${n.authDomain}/${Bl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="webStorageSupport";class Hl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ks,this._completeRedirectFn=fl,this._overrideRedirectResult=ll}async _openPopup(e,t,r,s){var i;ge((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Nr(e,t,r,gn(),s);return Ml(e,o,xn())}async _openRedirect(e,t,r,s){return await this._originValidation(e),jc(Nr(e,t,r,gn(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ge(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Cl(e),r=new pl(e);return t.register("authEvent",s=>(T(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sn,{type:sn},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[sn];o!==void 0&&t(!!o),oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fs()||Un()||Wt()}}const jl=Hl;var Lr="@firebase/auth",Mr="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zl(n){rt(new Ge("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((c,a)=>{T(i&&!i.includes(":"),"invalid-api-key",{appName:c.name}),T(!(o!=null&&o.includes(":")),"argument-error",{appName:c.name});const l={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xs(n)},d=new _c(c,a,l);return Ya(d,t),d})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),rt(new Ge("auth-internal",e=>{const t=vt(e.getProvider("auth").getImmediate());return(r=>new Vl(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(Lr,Mr,Wl(n)),He(Lr,Mr,"esm2017")}/**
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
 */const ql=5*60,Gl=vs("authIdTokenMaxAge")||ql;let Ur=null;const Kl=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Gl)return;const s=t==null?void 0:t.token;Ur!==s&&(Ur=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jl(n=La()){const e=ws(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ja(n,{popupRedirectResolver:jl,persistence:[Xc,Fc,Ks]}),r=vs("authTokenSyncURL");if(r){const i=Kl(r);Lc(t,i,()=>i(t.currentUser)),Nc(t,o=>i(o))}const s=Ao("auth");return s&&vc(t,`http://${s}`),t}zl("Browser");const Yl={apiKey:"AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",authDomain:"match-home-7d1f9.firebaseapp.com",databaseURL:"https://match-home-7d1f9-default-rtdb.firebaseio.com",projectId:"match-home-7d1f9",storageBucket:"match-home-7d1f9.appspot.com",messagingSenderId:"747751099607",appId:"1:747751099607:web:29d1e5beda87c847dfb492"},Xl=Es(Yl),ti=Jl(Xl);function Ql(n){let e;return{c(){e=J("Inicia sesi\xF3n")},m(t,r){N(t,e,r)},d(t){t&&O(e)}}}function Zl(n){let e,t,r,s,i,o,c,a,l,d,u,f,v,b,g,I,U,F,R,$,x,H,P,j,q,B,K,y,Y;return B=new ee({props:{to:"/login",$$slots:{default:[Ql]},$$scope:{ctx:n}}}),{c(){e=m("div"),t=m("br"),r=m("br"),s=m("br"),i=S(),o=m("div"),c=m("h1"),c.textContent="Registra tu cuenta",a=S(),l=m("div"),d=m("input"),u=S(),f=m("div"),v=m("input"),b=S(),g=m("br"),I=S(),U=m("div"),F=m("button"),F.textContent="Registrarse",R=S(),$=m("p"),$.textContent="O tambi\xE9n",x=S(),H=m("br"),P=S(),j=m("p"),q=J("\xBFYa tienes cuenta? "),D(B.$$.fragment),E(c,"class","text-center text-login svelte-ftg4em"),E(d,"name","email"),E(d,"type","email"),E(d,"class","input-form svelte-ftg4em"),E(d,"placeholder","Correo"),d.required=!0,E(l,"class","center svelte-ftg4em"),E(v,"name","password"),E(v,"type","password"),E(v,"class","input-form svelte-ftg4em"),E(v,"placeholder","Contrase\xF1a"),E(f,"class","center svelte-ftg4em"),E(F,"class","button-signup fondo-color-signup svelte-ftg4em"),E(U,"class","center svelte-ftg4em"),E($,"class","text-center svelte-ftg4em"),E(j,"class","text-center svelte-ftg4em"),E(o,"class","form-signin svelte-ftg4em")},m(W,G){N(W,e,G),h(e,t),h(e,r),h(e,s),h(e,i),h(e,o),h(o,c),h(o,a),h(o,l),h(l,d),h(o,u),h(o,f),h(f,v),h(o,b),h(o,g),h(o,I),h(o,U),h(U,F),h(o,R),h(o,$),h(o,x),h(o,H),h(o,P),h(o,j),h(j,q),A(B,j,null),K=!0,y||(Y=[Oe(d,"input",n[2]),Oe(v,"input",n[3]),Oe(F,"click",n[1])],y=!0)},p(W,[G]){const L={};G&64&&(L.$$scope={dirty:G,ctx:W}),B.$set(L)},i(W){K||(_(B.$$.fragment,W),K=!0)},o(W){w(B.$$.fragment,W),K=!1},d(W){W&&O(e),C(B),y=!1,ke(Y)}}}function eu(n){const e=Cn();let t={email:"",password:""};const r=c=>{t={...t,[c.target.name]:c.target.value}};return[r,async()=>{try{await Pc(ti,t.email,t.password),e("/")}catch(c){console.log(c)}},c=>r(c),c=>r(c)]}class jn extends ne{constructor(e){super(),te(this,e,eu,Zl,Z,{})}}const tu="/to-deploy-mh/assets/team.31fda88c.png";function nu(n){let e,t,r,s,i,o,c,a;return{c(){e=m("div"),t=m("div"),r=m("p"),r.textContent="Sinergias",s=S(),i=m("img"),c=S(),a=m("h1"),a.textContent="Sinergias",ni(i.src,o=tu)||E(i,"src",o),E(i,"alt","sinergias"),E(i,"class","profile-img"),E(a,"class","name svelte-zdqvq1"),E(t,"class","optionCard svelte-zdqvq1"),E(e,"class","container")},m(l,d){N(l,e,d),h(e,t),h(t,r),h(t,s),h(t,i),h(t,c),h(t,a)},p:z,d(l){l&&O(e)}}}function ru(n){let e,t;return e=new ee({props:{to:"/sinergias",title:"sinergias",$$slots:{default:[nu]},$$scope:{ctx:n}}}),{c(){D(e.$$.fragment)},m(r,s){A(e,r,s),t=!0},p(r,s){const i={};s&1&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function su(n){let e,t;return e=new fs({}),{c(){D(e.$$.fragment)},m(r,s){A(e,r,s),t=!0},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function iu(n){let e,t;return e=new hs({}),{c(){D(e.$$.fragment)},m(r,s){A(e,r,s),t=!0},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function ou(n){let e,t;return e=new jn({}),{c(){D(e.$$.fragment)},m(r,s){A(e,r,s),t=!0},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function au(n){let e,t;return e=new jn({}),{c(){D(e.$$.fragment)},m(r,s){A(e,r,s),t=!0},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function cu(n){let e,t,r,s,i,o,c,a,l,d,u,f,v,b;return r=new An({props:{$$slots:{default:[ru]},$$scope:{ctx:n}}}),i=new ae({props:{path:"/agenda",$$slots:{default:[su]},$$scope:{ctx:n}}}),c=new ae({props:{path:"/sinergias",$$slots:{default:[iu]},$$scope:{ctx:n}}}),l=new ae({props:{path:"/login",$$slots:{default:[ou]},$$scope:{ctx:n}}}),u=new ae({props:{path:"/registro",$$slots:{default:[au]},$$scope:{ctx:n}}}),{c(){e=m("body"),t=m("div"),D(r.$$.fragment),s=S(),D(i.$$.fragment),o=S(),D(c.$$.fragment),a=S(),D(l.$$.fragment),d=S(),D(u.$$.fragment),f=S(),v=m("div"),E(t,"class","wrapper-grid svelte-zdqvq1"),E(v,"class","")},m(g,I){N(g,e,I),h(e,t),A(r,t,null),h(t,s),A(i,t,null),h(t,o),A(c,t,null),h(t,a),A(l,t,null),h(t,d),A(u,t,null),h(e,f),h(e,v),b=!0},p(g,[I]){const U={};I&1&&(U.$$scope={dirty:I,ctx:g}),r.$set(U);const F={};I&1&&(F.$$scope={dirty:I,ctx:g}),i.$set(F);const R={};I&1&&(R.$$scope={dirty:I,ctx:g}),c.$set(R);const $={};I&1&&($.$$scope={dirty:I,ctx:g}),l.$set($);const x={};I&1&&(x.$$scope={dirty:I,ctx:g}),u.$set(x)},i(g){b||(_(r.$$.fragment,g),_(i.$$.fragment,g),_(c.$$.fragment,g),_(l.$$.fragment,g),_(u.$$.fragment,g),b=!0)},o(g){w(r.$$.fragment,g),w(i.$$.fragment,g),w(c.$$.fragment,g),w(l.$$.fragment,g),w(u.$$.fragment,g),b=!1},d(g){g&&O(e),C(r),C(i),C(c),C(l),C(u)}}}class lu extends ne{constructor(e){super(),te(this,e,null,cu,Z,{})}}function uu(n){let e;return{c(){e=m("h1"),e.textContent="Estas en About"},m(t,r){N(t,e,r)},p:z,i:z,o:z,d(t){t&&O(e)}}}class du extends ne{constructor(e){super(),te(this,e,null,uu,Z,{})}}function fu(n){let e,t,r,s;return{c(){e=m("div"),t=m("div"),r=J(n[0]),E(t,"id","snackbar"),E(t,"class",s=Qn(n[1]?"animation-in":"not-show")+" svelte-1e3w4r3")},m(i,o){N(i,e,o),h(e,t),h(t,r)},p(i,[o]){o&1&&Hr(r,i[0]),o&2&&s!==(s=Qn(i[1]?"animation-in":"not-show")+" svelte-1e3w4r3")&&E(t,"class",s)},i:z,o:z,d(i){i&&O(e)}}}function hu(n,e,t){let{message:r=""}=e,{show:s=!1}=e;return n.$$set=i=>{"message"in i&&t(0,r=i.message),"show"in i&&t(1,s=i.show)},[r,s]}class pu extends ne{constructor(e){super(),te(this,e,hu,fu,Z,{message:0,show:1})}}function mu(n){let e;return{c(){e=J("Registrarse")},m(t,r){N(t,e,r)},d(t){t&&O(e)}}}function gu(n){let e,t,r,s,i,o,c,a,l,d,u,f,v,b,g,I,U,F,R,$,x,H,P,j,q,B,K,y,Y,W,G;return t=new pu({props:{message:n[0],show:n[1]}}),y=new ee({props:{to:"/register",$$slots:{default:[mu]},$$scope:{ctx:n}}}),{c(){e=m("div"),D(t.$$.fragment),r=S(),s=m("br"),i=m("br"),o=m("br"),c=S(),a=m("div"),l=m("h1"),l.textContent="Inicia sesi\xF3n en tu cuenta",d=S(),u=m("div"),f=m("input"),v=S(),b=m("div"),g=m("input"),I=S(),U=m("br"),F=S(),R=m("div"),$=m("button"),$.textContent="Iniciar sesi\xF3n",x=S(),H=m("p"),H.textContent="O tambi\xE9n",P=S(),j=m("br"),q=S(),B=m("p"),K=J("\xBFA\xFAn no tienes cuenta? "),D(y.$$.fragment),E(l,"class","text-center text-login svelte-ftg4em"),E(f,"name","email"),E(f,"type","text"),E(f,"class","input-form svelte-ftg4em"),E(f,"placeholder","Correo"),E(u,"class","center svelte-ftg4em"),E(g,"name","password"),E(g,"type","password"),E(g,"class","input-form svelte-ftg4em"),E(g,"placeholder","Contrase\xF1a"),E(b,"class","center svelte-ftg4em"),E($,"class","button-signup fondo-color-signup svelte-ftg4em"),E(R,"class","center svelte-ftg4em"),E(H,"class","text-center svelte-ftg4em"),E(B,"class","text-center svelte-ftg4em"),E(a,"class","form-signin svelte-ftg4em")},m(L,p){N(L,e,p),A(t,e,null),h(e,r),h(e,s),h(e,i),h(e,o),h(e,c),h(e,a),h(a,l),h(a,d),h(a,u),h(u,f),h(a,v),h(a,b),h(b,g),h(a,I),h(a,U),h(a,F),h(a,R),h(R,$),h(a,x),h(a,H),h(a,P),h(a,j),h(a,q),h(a,B),h(B,K),A(y,B,null),Y=!0,W||(G=[Oe(f,"input",n[4]),Oe(g,"input",n[5]),Oe($,"click",n[3])],W=!0)},p(L,[p]){const M={};p&1&&(M.message=L[0]),p&2&&(M.show=L[1]),t.$set(M);const $e={};p&512&&($e.$$scope={dirty:p,ctx:L}),y.$set($e)},i(L){Y||(_(t.$$.fragment,L),_(y.$$.fragment,L),Y=!0)},o(L){w(t.$$.fragment,L),w(y.$$.fragment,L),Y=!1},d(L){L&&O(e),C(t),C(y),W=!1,ke(G)}}}function _u(n,e,t){const r=Cn();let s={email:"",password:""},i="",o=!1;const c=f=>{t(0,i=f),t(1,o=!0),setTimeout(()=>{t(1,o=!1)},2800)},a=f=>{s={...s,[f.target.name]:f.target.value}};return[i,o,a,async()=>{try{await Dc(ti,s.email,s.password),r("/")}catch(f){f.message==="Firebase: Error (auth/wrong-password)."&&c("Contrase\xF1a incorrecta")}},f=>a(f),f=>a(f)]}class vu extends ne{constructor(e){super(),te(this,e,_u,gu,Z,{})}}const bu=se(!1);function Iu(n){let e;return{c(){e=J("Home")},m(t,r){N(t,e,r)},d(t){t&&O(e)}}}function yu(n){let e;return{c(){e=J("Contactos")},m(t,r){N(t,e,r)},d(t){t&&O(e)}}}function wu(n){let e;return{c(){e=J("Propiedades")},m(t,r){N(t,e,r)},d(t){t&&O(e)}}}function Eu(n){let e;return{c(){e=J("Captaci\xF3n")},m(t,r){N(t,e,r)},d(t){t&&O(e)}}}function Tu(n){let e;return{c(){e=J("Agenda")},m(t,r){N(t,e,r)},d(t){t&&O(e)}}}function Su(n){let e;return{c(){e=J("Sinergias")},m(t,r){N(t,e,r)},d(t){t&&O(e)}}}function ku(n){let e;return{c(){e=J("About")},m(t,r){N(t,e,r)},d(t){t&&O(e)}}}function Br(n){let e,t,r,s;return e=new ee({props:{to:"register",$$slots:{default:[Ru]},$$scope:{ctx:n}}}),r=new ee({props:{to:"login",$$slots:{default:[$u]},$$scope:{ctx:n}}}),{c(){D(e.$$.fragment),t=S(),D(r.$$.fragment)},m(i,o){A(e,i,o),N(i,t,o),A(r,i,o),s=!0},i(i){s||(_(e.$$.fragment,i),_(r.$$.fragment,i),s=!0)},o(i){w(e.$$.fragment,i),w(r.$$.fragment,i),s=!1},d(i){C(e,i),i&&O(t),C(r,i)}}}function Ru(n){let e;return{c(){e=J("Registro")},m(t,r){N(t,e,r)},d(t){t&&O(e)}}}function $u(n){let e;return{c(){e=J("Login")},m(t,r){N(t,e,r)},d(t){t&&O(e)}}}function Au(n){let e,t;return e=new lu({}),{c(){D(e.$$.fragment)},m(r,s){A(e,r,s),t=!0},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function Cu(n){let e,t;return e=new fs({}),{c(){D(e.$$.fragment)},m(r,s){A(e,r,s),t=!0},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function Ou(n){let e,t;return e=new hs({}),{c(){D(e.$$.fragment)},m(r,s){A(e,r,s),t=!0},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function Pu(n){let e,t;return e=new du({}),{c(){D(e.$$.fragment)},m(r,s){A(e,r,s),t=!0},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function Du(n){let e,t;return e=new vu({}),{c(){D(e.$$.fragment)},m(r,s){A(e,r,s),t=!0},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function Nu(n){let e,t;return e=new jn({}),{c(){D(e.$$.fragment)},m(r,s){A(e,r,s),t=!0},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function Lu(n){let e,t,r,s,i,o,c,a,l,d,u,f,v,b,g,I,U,F,R,$,x,H,P,j,q,B,K,y,Y,W,G;s=new ee({props:{to:"/",$$slots:{default:[Iu]},$$scope:{ctx:n}}}),o=new ee({props:{to:"contactos",$$slots:{default:[yu]},$$scope:{ctx:n}}}),a=new ee({props:{to:"propiedades",$$slots:{default:[wu]},$$scope:{ctx:n}}}),d=new ee({props:{to:"captacion",$$slots:{default:[Eu]},$$scope:{ctx:n}}}),f=new ee({props:{to:"agenda",$$slots:{default:[Tu]},$$scope:{ctx:n}}}),b=new ee({props:{to:"sinergias",$$slots:{default:[Su]},$$scope:{ctx:n}}}),I=new ee({props:{to:"about",$$slots:{default:[ku]},$$scope:{ctx:n}}});let L=!n[0]&&Br(n);return $=new ae({props:{path:"/",$$slots:{default:[Au]},$$scope:{ctx:n}}}),H=new ae({props:{path:"agenda",$$slots:{default:[Cu]},$$scope:{ctx:n}}}),j=new ae({props:{path:"sinergias",$$slots:{default:[Ou]},$$scope:{ctx:n}}}),B=new ae({props:{path:"about",$$slots:{default:[Pu]},$$scope:{ctx:n}}}),y=new ae({props:{path:"login",$$slots:{default:[Du]},$$scope:{ctx:n}}}),W=new ae({props:{path:"register",$$slots:{default:[Nu]},$$scope:{ctx:n}}}),{c(){e=m("div"),t=m("header"),r=m("nav"),D(s.$$.fragment),i=S(),D(o.$$.fragment),c=S(),D(a.$$.fragment),l=S(),D(d.$$.fragment),u=S(),D(f.$$.fragment),v=S(),D(b.$$.fragment),g=S(),D(I.$$.fragment),U=S(),L&&L.c(),F=S(),R=m("main"),D($.$$.fragment),x=S(),D(H.$$.fragment),P=S(),D(j.$$.fragment),q=S(),D(B.$$.fragment),K=S(),D(y.$$.fragment),Y=S(),D(W.$$.fragment),E(e,"class","navMenu")},m(p,M){N(p,e,M),h(e,t),h(t,r),A(s,r,null),h(r,i),A(o,r,null),h(r,c),A(a,r,null),h(r,l),A(d,r,null),h(r,u),A(f,r,null),h(r,v),A(b,r,null),h(r,g),A(I,r,null),h(r,U),L&&L.m(r,null),N(p,F,M),N(p,R,M),A($,R,null),h(R,x),A(H,R,null),h(R,P),A(j,R,null),h(R,q),A(B,R,null),h(R,K),A(y,R,null),h(R,Y),A(W,R,null),G=!0},p(p,M){const $e={};M&2&&($e.$$scope={dirty:M,ctx:p}),s.$set($e);const yt={};M&2&&(yt.$$scope={dirty:M,ctx:p}),o.$set(yt);const k={};M&2&&(k.$$scope={dirty:M,ctx:p}),a.$set(k);const Q={};M&2&&(Q.$$scope={dirty:M,ctx:p}),d.$set(Q);const re={};M&2&&(re.$$scope={dirty:M,ctx:p}),f.$set(re);const Vn={};M&2&&(Vn.$$scope={dirty:M,ctx:p}),b.$set(Vn);const Wn={};M&2&&(Wn.$$scope={dirty:M,ctx:p}),I.$set(Wn),p[0]?L&&(xt(),w(L,1,1,()=>{L=null}),Ht()):L?M&1&&_(L,1):(L=Br(p),L.c(),_(L,1),L.m(r,null));const zn={};M&2&&(zn.$$scope={dirty:M,ctx:p}),$.$set(zn);const qn={};M&2&&(qn.$$scope={dirty:M,ctx:p}),H.$set(qn);const Gn={};M&2&&(Gn.$$scope={dirty:M,ctx:p}),j.$set(Gn);const Kn={};M&2&&(Kn.$$scope={dirty:M,ctx:p}),B.$set(Kn);const Jn={};M&2&&(Jn.$$scope={dirty:M,ctx:p}),y.$set(Jn);const Yn={};M&2&&(Yn.$$scope={dirty:M,ctx:p}),W.$set(Yn)},i(p){G||(_(s.$$.fragment,p),_(o.$$.fragment,p),_(a.$$.fragment,p),_(d.$$.fragment,p),_(f.$$.fragment,p),_(b.$$.fragment,p),_(I.$$.fragment,p),_(L),_($.$$.fragment,p),_(H.$$.fragment,p),_(j.$$.fragment,p),_(B.$$.fragment,p),_(y.$$.fragment,p),_(W.$$.fragment,p),G=!0)},o(p){w(s.$$.fragment,p),w(o.$$.fragment,p),w(a.$$.fragment,p),w(d.$$.fragment,p),w(f.$$.fragment,p),w(b.$$.fragment,p),w(I.$$.fragment,p),w(L),w($.$$.fragment,p),w(H.$$.fragment,p),w(j.$$.fragment,p),w(B.$$.fragment,p),w(y.$$.fragment,p),w(W.$$.fragment,p),G=!1},d(p){p&&O(e),C(s),C(o),C(a),C(d),C(f),C(b),C(I),L&&L.d(),p&&O(F),p&&O(R),C($),C(H),C(j),C(B),C(y),C(W)}}}function Mu(n){let e,t,r,s,i;return t=new An({props:{$$slots:{default:[Lu]},$$scope:{ctx:n}}}),{c(){e=m("div"),D(t.$$.fragment),r=S(),s=m("section"),E(e,"class","nav svelte-pt16o2")},m(o,c){N(o,e,c),A(t,e,null),h(e,r),h(e,s),i=!0},p(o,[c]){const a={};c&3&&(a.$$scope={dirty:c,ctx:o}),t.$set(a)},i(o){i||(_(t.$$.fragment,o),i=!0)},o(o){w(t.$$.fragment,o),i=!1},d(o){o&&O(e),C(t)}}}function Uu(n,e,t){let r=!1;return bu.subscribe(s=>{t(0,r=s)}),[r]}class Bu extends ne{constructor(e){super(),te(this,e,Uu,Mu,Z,{})}}function Fu(n){let e,t,r,s,i;return t=new Bu({}),{c(){e=m("nav"),D(t.$$.fragment),r=S(),s=m("main"),E(e,"class","navBar svelte-1ab8rao")},m(o,c){N(o,e,c),A(t,e,null),N(o,r,c),N(o,s,c),i=!0},p:z,i(o){i||(_(t.$$.fragment,o),i=!0)},o(o){w(t.$$.fragment,o),i=!1},d(o){o&&O(e),C(t),o&&O(r),o&&O(s)}}}class xu extends ne{constructor(e){super(),te(this,e,null,Fu,Z,{})}}new xu({target:document.getElementById("app")});
