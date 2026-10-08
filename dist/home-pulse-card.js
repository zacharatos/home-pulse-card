function e(e,t,o,i){var n,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(s=(a<3?n(s):a>3?n(t,o,s):n(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,o=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let a=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&n.set(t,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new a(o,e,i)},r=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,_=m.trustedTypes,g=_?_.emptyScript:"",f=m.reactiveElementPolyfillSupport,y=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},b=(e,t)=>!c(e,t),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&l(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const a=i?.call(this);n?.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(o)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of i){const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=o.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:v).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=i;const a=n.fromAttribute(t,e.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,o,i=!1,n){if(void 0!==e){const a=this.constructor;if(!1===i&&(n=this[e]),o??=a.getPropertyOptions(e),!((o.hasChanged??b)(n,t)||o.useDefault&&o.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:n},a){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==n||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,f?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,k=e=>e,A=$.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,O=`<${P}>`,M=document,z=()=>M.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,j="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,U=/>/g,I=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,R=/"/g,W=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),F=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),G=new WeakMap,Y=M.createTreeWalker(M,129);function V(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const J=(e,t)=>{const o=e.length-1,i=[];let n,a=2===t?"<svg>":3===t?"<math>":"",s=D;for(let t=0;t<o;t++){const o=e[t];let r,c,l=-1,d=0;for(;d<o.length&&(s.lastIndex=d,c=s.exec(o),null!==c);)d=s.lastIndex,s===D?"!--"===c[1]?s=H:void 0!==c[1]?s=U:void 0!==c[2]?(W.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=I):void 0!==c[3]&&(s=I):s===I?">"===c[0]?(s=n??D,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,r=c[1],s=void 0===c[3]?I:'"'===c[3]?R:L):s===R||s===L?s=I:s===H||s===U?s=D:(s=I,n=void 0);const h=s===I&&e[t+1].startsWith("/>")?" ":"";a+=s===D?o+O:l>=0?(i.push(r),o.slice(0,l)+E+o.slice(l)+C+h):o+C+(-2===l?t:h)}return[V(e,a+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class K{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,a=0;const s=e.length-1,r=this.parts,[c,l]=J(e,t);if(this.el=K.createElement(c,o),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Y.nextNode())&&r.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(E)){const t=l[a++],o=i.getAttribute(e).split(C),s=/([.?@])?(.*)/.exec(t);r.push({type:1,index:n,name:s[2],strings:o,ctor:"."===s[1]?te:"?"===s[1]?oe:"@"===s[1]?ie:ee}),i.removeAttribute(e)}else e.startsWith(C)&&(r.push({type:6,index:n}),i.removeAttribute(e));if(W.test(i.tagName)){const e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=A?A.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],z()),Y.nextNode(),r.push({type:2,index:++n});i.append(e[t],z())}}}else if(8===i.nodeType)if(i.data===P)r.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(C,e+1));)r.push({type:7,index:n}),e+=C.length-1}n++}}static createElement(e,t){const o=M.createElement("template");return o.innerHTML=e,o}}function Z(e,t,o=e,i){if(t===F)return t;let n=void 0!==i?o._$Co?.[i]:o._$Cl;const a=N(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e),n._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=n:o._$Cl=n),void 0!==n&&(t=Z(e,n._$AS(e,t.values),n,i)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??M).importNode(t,!0);Y.currentNode=i;let n=Y.nextNode(),a=0,s=0,r=o[0];for(;void 0!==r;){if(a===r.index){let t;2===r.type?t=new Q(n,n.nextSibling,this,e):1===r.type?t=new r.ctor(n,r.name,r.strings,this,e):6===r.type&&(t=new ne(n,this,e)),this._$AV.push(t),r=o[++s]}a!==r?.index&&(n=Y.nextNode(),a++)}return Y.currentNode=M,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),N(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=K.createElement(V(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new X(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new K(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new Q(this.O(z()),this.O(z()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=q}_$AI(e,t=this,o,i){const n=this.strings;let a=!1;if(void 0===n)e=Z(this,e,t,0),a=!N(e)||e!==this._$AH&&e!==F,a&&(this._$AH=e);else{const i=e;let s,r;for(e=n[0],s=0;s<n.length-1;s++)r=Z(this,i[o+s],t,s),r===F&&(r=this._$AH[s]),a||=!N(r)||r!==this._$AH[s],r===q?e=q:e!==q&&(e+=(r??"")+n[s+1]),this._$AH[s]=r}a&&!i&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class oe extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class ie extends ee{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??q)===F)return;const o=this._$AH,i=e===q&&o!==q||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==q&&(o===q||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ae=$.litHtmlPolyfillSupport;ae?.(K,Q),($.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;let re=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=o?.renderBefore??null;i._$litPart$=n=new Q(t.insertBefore(z(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};re._$litElement$=!0,re.finalized=!0,se.litElementHydrateSupport?.({LitElement:re});const ce=se.litElementPolyfillSupport;ce?.({LitElement:re}),(se.litElementVersions??=[]).push("4.2.2");const le={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},de=(e=le,t,o)=>{const{kind:i,metadata:n}=o;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),a.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const n=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,n,e,!0,o)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=o;return function(o){const n=this[i];t.call(this,o),this.requestUpdate(i,n,e,!0,o)}}throw Error("Unsupported decorator location: "+i)};function he(e){return(t,o)=>"object"==typeof o?de(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function pe(e){return he({...e,state:!0,attribute:!1})}const ue=1,me=6,_e=e=>(...t)=>({_$litDirective$:e,values:t});let ge=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const fe=_e(class extends ge{constructor(e){if(super(e),e.type!==ue||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return F}}),ye="important",ve=" !"+ye,be=_e(class extends ge{constructor(e){if(super(e),e.type!==ue||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const i=e[o];return null==i?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?o.removeProperty(e):o[e]=null);for(const e in t){const i=t[e];if(null!=i){this.ft.add(e);const t="string"==typeof i&&i.endsWith(ve);e.includes("-")||t?o.setProperty(e,t?i.slice(0,-11):i,t?ye:""):o[e]=i}}return F}}),we=["greeting","status","alerts","nudges","modes","alarm","pulse","shortcuts"],xe=["greeting","status","alerts","nudges","modes","shortcuts"],$e=["moisture","smoke","gas","carbon_monoxide","safety","problem","tamper"],ke=["alerts","lights","doors","windows","covers","locks","fans","switches","media","climate","batteries"],Ae=["alerts","lights","doors","windows","locks","media","climate","batteries"],Se=["arm_home","arm_away","arm_night","arm_vacation","arm_custom_bypass"],Ee=["arm_home","arm_away"],Ce={arm_home:1,arm_away:2,arm_night:4,arm_custom_bypass:16,arm_vacation:32},Pe=e=>e.split(".")[0],Oe=e=>e?.attributes.device_class;function Me(e){const t=(e??"").trim().split(/\s+/)[0]??"";return t?t.charAt(0).toUpperCase()+t.slice(1):""}function ze(e,t,o=!1){const i=e.entities?.[t];return!i||!i.hidden&&("config"!==i.entity_category&&!("diagnostic"===i.entity_category&&!o))}const Ne=e=>(t,o)=>String(e.states[t]?.attributes.friendly_name??t).localeCompare(String(e.states[o]?.attributes.friendly_name??o));function Te(e,t,o){if("none"!==o)return o||Object.keys(e.states).filter(o=>Pe(o)===t&&ze(e,o)&&"unavailable"!==e.states[o].state).sort(Ne(e))[0]}function je(e){return"home"===e?.state}function De(e,t){const o=Object.fromEntries(ke.map(e=>[e,[]])),i=new Set(t.exclude_entities??[]),n=new Set(t.alert_classes??$e);for(const t of Object.keys(e.states)){if(i.has(t))continue;const a=e.states[t],s=Pe(t),r=Oe(a);if("sensor"!==s&&"binary_sensor"!==s||"battery"!==r){if(ze(e,t)&&!Array.isArray(a.attributes.entity_id))switch(s){case"light":o.lights.push(t);break;case"fan":o.fans.push(t);break;case"switch":o.switches.push(t);break;case"cover":o.covers.push(t);break;case"lock":o.locks.push(t);break;case"media_player":o.media.push(t);break;case"climate":o.climate.push(t);break;case"binary_sensor":"window"===r?o.windows.push(t):"door"===r||"garage_door"===r||"opening"===r?o.doors.push(t):r&&n.has(r)&&o.alerts.push(t)}}else ze(e,t,!0)&&o.batteries.push(t)}for(const t of ke)o[t].sort(Ne(e));return o}function He(e,t,o=20){if(!t)return!1;switch(e){case"lights":case"fans":case"switches":case"doors":case"windows":case"alerts":return"on"===t.state;case"covers":return"open"===t.state||"opening"===t.state;case"locks":return["unlocked","open","opening","jammed"].includes(t.state);case"media":return"playing"===t.state;case"climate":{const e=t.attributes.hvac_action;return e?["heating","cooling","drying","fan"].includes(e):"off"!==t.state&&"unavailable"!==t.state&&"unknown"!==t.state}case"batteries":return"binary_sensor"===Pe(t.entity_id)?"on"===t.state:""!==t.state&&!Number.isNaN(Number(t.state))&&Number(t.state)<=o}}function Ue(e){switch(e){case"alerts":case"batteries":case"locks":return"bad";case"doors":case"windows":return"warn";case"lights":return"on";default:return""}}function Ie(e,t,o){const i=t.battery_threshold??20;return(t.pulse??Ae).filter(e=>ke.includes(e)).map(t=>{const n=o[t];return{id:t,entities:n,active:n.filter(o=>He(t,e.states[o],i))}}).filter(e=>e.entities.length>0)}function Le(e,t){const o=e.entities?.[t],i=o?.area_id??(o?.device_id?e.devices?.[o.device_id]?.area_id:void 0);return i?e.areas?.[i]?.name??void 0:void 0}function Re(e,t=Ee){if(!e)return;const o=e.state,i="disarmed"===o?"disarmed":"triggered"===o?"triggered":"arming"===o||"pending"===o||"disarming"===o?"pending":o.startsWith("armed")?"armed":"unknown",n=null!=e.attributes.code_format,a=e.attributes.supported_features;let s=[];if("disarmed"===i){const o=n&&!1!==e.attributes.code_arm_required;s=t.filter(e=>void 0!==Ce[e]).filter(e=>void 0===a||0!==(a&Ce[e])).map(e=>({mode:e,service:`alarm_control_panel.alarm_${e}`,needsCode:o}))}else"unknown"!==i&&(s=[{mode:"disarm",service:"alarm_control_panel.alarm_disarm",needsCode:n}]);return{state:o,tone:i,buttons:s}}const We=["doors","windows","locks","lights","media"];function Be(e,t){if(!e||e.startsWith("/")||e.startsWith("#")||e.startsWith("?"))return e;return`/${t.split("/").filter(Boolean)[0]??"lovelace"}/${e}`}function Fe(e,t){return e.tap_action?e.tap_action:e.navigation_path?{action:"navigate",navigation_path:Be(e.navigation_path,t)}:e.entity?{action:"more-info",entity:e.entity}:void 0}const qe=new Set(["on","open","opening","playing","unlocked","cleaning","home","heat","cool","heat_cool","auto","dry","fan_only"]);function Ge(e,t){return!!t.entity&&qe.has(e.states[t.entity]?.state??"")}function Ye(e){return e.badge&&ke.includes(e.badge)?Ue(e.badge):""}function Ve(e){return/^(#|rgb|hsl|var\()/i.test(e)?e:"primary"===e||"accent"===e?`var(--${e}-color)`:`var(--${e}-color, ${e})`}const Je={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",exceptional:"mdi:alert-circle-outline",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant"};function Ke(e){return Je[e]??"mdi:weather-partly-cloudy"}function Ze(e){const t=e?.attributes.temperature;if("number"==typeof t)return`${Math.round(t)}°`}const Xe={daily:1,hourly:2,twice_daily:4};function Qe(e){const t=Number(e?.attributes.supported_features??0);return["daily","twice_daily","hourly"].find(e=>0!==(t&Xe[e]))}const et=e=>e.split(".")[0],tt=[[/away|leave|εκτός|έξω|απουσ/i,"mdi:home-export-outline"],[/night|sleep|bed|νύχτ|ύπνο|βράδ/i,"mdi:weather-night"],[/movie|cinema|film|tv|ταινί|σινεμ/i,"mdi:movie-open-outline"],[/guest|visit|επισκ|καλεσμ/i,"mdi:account-group-outline"],[/vacation|holiday|travel|διακοπ|ταξίδ/i,"mdi:airplane"],[/morning|wake|πρωί|ξύπνη/i,"mdi:weather-sunset-up"],[/work|office|focus|δουλει|γραφεί/i,"mdi:briefcase-outline"],[/party|πάρτ/i,"mdi:party-popper"],[/dinner|eat|φαγητ|δείπν/i,"mdi:silverware-fork-knife"],[/home|σπίτι|normal|κανονικ|day|ημέρα/i,"mdi:home-outline"]];function ot(e,t){if("none"!==t.mode_entity)return t.mode_entity?t.mode_entity:Object.keys(e.states).find(t=>("input_select"===et(t)||"select"===et(t))&&/(^|\.|_)(house|home)_mode$/.test(t)&&!e.entities?.[t]?.hidden)}function it(e){const t=e?Date.parse(e.state):NaN;return Number.isNaN(t)?-1/0:t}function nt(e,t){const o=ot(e,t),i=o?e.states[o]:void 0,n=(t.modes??[]).filter(e=>e&&(e.name||e.option||e.entity||e.tap_action)),a=n.length?n:(i?.attributes.options??[]).map(e=>({option:e})),s=a.map(e=>e.entity).filter(e=>!!e&&"scene"===et(e)),r=s.reduce((t,o)=>it(e.states[o])>it(t?e.states[t]:void 0)?o:t,void 0);return a.map(t=>{const n=t.option??(!o||t.entity||t.tap_action?void 0:t.name),a=t.entity?e.states[t.entity]:void 0,s=t.name??n??String(a?.attributes.friendly_name??t.entity??""),c=t.icon??a?.attributes.icon??function(e){for(const[t,o]of tt)if(t.test(e))return o;return"mdi:circle-outline"}(s);let l={action:"none"},d=!1;return t.tap_action?l=t.tap_action:void 0!==n&&o?l={action:"perform-action",perform_action:`${et(o)}.select_option`,target:{entity_id:o},data:{option:n}}:t.entity&&(l=function(e){const t=et(e);return"scene"===t||"script"===t?{action:"perform-action",perform_action:`${t}.turn_on`,target:{entity_id:e}}:"button"===t||"input_button"===t?{action:"perform-action",perform_action:`${t}.press`,target:{entity_id:e}}:"input_select"===t||"select"===t||"automation"===t?{action:"more-info",entity:e}:{action:"toggle",entity:e}}(t.entity)),void 0!==n&&i?d=i.state===n:t.entity&&"scene"===et(t.entity)?d=t.entity===r&&it(a)>-1/0:a&&(d="on"===a.state),{name:s,icon:c,color:t.color,active:d,entity:t.entity??o,tap_action:l,hold_action:t.hold_action}})}function at(e,t){const o=[],i=ot(e,t);i&&o.push(i);for(const e of t.modes??[])e.entity&&o.push(e.entity);return o}const st=new Set(["","unknown","unavailable","none","off","0"]);function rt(e){if(!1!==e.today)return!0===e.today||void 0===e.today?{}:e.today}function ct(e,t){const o=rt(t);return o?o.calendars?.length?o.calendars:Object.keys(e.states).filter(t=>"calendar"===(e=>e.split(".")[0])(t)&&!e.entities?.[t]?.hidden).sort():[]}function lt(e){const t=rt(e);return(t?.entities??[]).map(e=>"string"==typeof e?{entity:e}:e)}function dt(e){if("string"!=typeof e||!e)return;const t=new Date(/^\d{4}-\d{2}-\d{2}$/.test(e)?`${e}T00:00:00`:e.replace(" ","T"));return Number.isNaN(t.getTime())?void 0:t}function ht(e,t){const o=new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime();return Math.round((i-o)/864e5)}const pt=(e,t)=>0===e?0:1===e&&t?1:void 0;function ut(e,t,o){const i=String(e.attributes.message??"").trim(),n=dt(e.attributes.start_time);if(!i||!n)return;const a=!!e.attributes.all_day,s=dt(e.attributes.end_time);if("on"===e.state)return{entity:e.entity_id,title:i,day:0,until:a?void 0:s,allDay:a,dated:!1};if(s&&s.getTime()<=t.getTime())return;const r=pt(ht(t,n),o);return void 0!==r?{entity:e.entity_id,title:i,day:r,start:a?void 0:n,allDay:a,dated:!1}:void 0}const mt=new Set(["d","day","days","ημέρες","μέρες"]);function _t(e,t,o,i){const n=t??String(e.attributes.friendly_name??e.entity_id),a=(t,o)=>{const a=pt(t,i);return void 0===a?void 0:{entity:e.entity_id,title:n,day:a,start:o,allDay:!o,dated:!0}},s=e.attributes.daysTo??e.attributes.days_to;if("number"==typeof s)return a(s);const r=e.attributes.device_class;if("date"===r){const t=dt(e.state);return t?a(ht(o,t)):void 0}if("timestamp"===r){const t=dt(e.state);if(!t||t.getTime()<o.getTime())return;return a(ht(o,t),t)}return mt.has(String(e.attributes.unit_of_measurement??"").toLowerCase())&&!Number.isNaN(Number(e.state))?a(Number(e.state)):st.has(e.state.trim().toLowerCase())?void 0:{entity:e.entity_id,title:t?`${t}: ${e.state}`:e.state,allDay:!0,dated:!1}}const gt=_e(class extends ge{constructor(e){if(super(e),e.type!==me)throw new Error("actionHandler must be used on an element")}update(e,[t]){const o=e.element;return o.__hpcOptions=t??{},function(e){if(e.__hpcBound)return;let t,o;e.__hpcBound=!0;let i=!1,n=0,a=0;const s=t=>e.dispatchEvent(new CustomEvent("hpc-action",{detail:{action:t},bubbles:!1,composed:!1})),r=()=>{t&&window.clearTimeout(t),t=void 0};e.addEventListener("pointerdown",o=>{e.__hpcOptions?.disabled||0!==o.button||(i=!1,n=o.clientX,a=o.clientY,e.__hpcOptions?.hasHold&&(t=window.setTimeout(()=>{i=!0,t=void 0,navigator.vibrate&&navigator.vibrate(30),s("hold")},500)))}),e.addEventListener("pointermove",e=>{t&&(Math.abs(e.clientX-n)>10||Math.abs(e.clientY-a)>10)&&r()}),e.addEventListener("pointercancel",r),e.addEventListener("pointerleave",r),e.addEventListener("contextmenu",t=>{e.__hpcOptions?.hasHold&&t.preventDefault()}),e.addEventListener("pointerup",n=>{if(e.__hpcOptions?.disabled||0!==n.button)return;const a=!!t;r(),i?i=!1:!a&&e.__hpcOptions?.hasHold||(e.__hpcOptions?.hasDoubleTap?o?(window.clearTimeout(o),o=void 0,s("double_tap")):o=window.setTimeout(()=>{o=void 0,s("tap")},250):s("tap"))}),e.addEventListener("keydown",t=>{e.__hpcOptions?.disabled||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),s("tap"))})}(o),F}render(e){return F}}),ft={greet_morning:"Good morning",greet_afternoon:"Good afternoon",greet_evening:"Good evening",greet_night:"Good night",greet_with_name:"{greet}, {name}",home:"Home",away:"Away",alarm_disarmed:"Disarmed",alarm_armed_home:"Armed home",alarm_armed_away:"Armed away",alarm_armed_night:"Armed night",alarm_armed_vacation:"Armed vacation",alarm_armed_custom_bypass:"Armed custom",alarm_arming:"Arming",alarm_pending:"Pending",alarm_disarming:"Disarming",alarm_triggered:"Triggered",alarm_btn_arm_home:"Home",alarm_btn_arm_away:"Away",alarm_btn_arm_night:"Night",alarm_btn_arm_vacation:"Vacation",alarm_btn_arm_custom_bypass:"Custom",alarm_btn_disarm:"Disarm",just_now:"just now",today_today:"today",today_tomorrow:"tomorrow",today_until:"until {time}",door_open:"{n} door open",doors_open:"{n} doors open",doors_closed:"Doors closed",window_open:"{n} window open",windows_open:"{n} windows open",windows_closed:"Windows closed",cover_open:"{n} cover open",covers_open_n:"{n} covers open",covers_closed:"Covers closed",lock_unlocked:"{n} unlocked",locks_locked:"Locked",light_on:"{n} light on",lights_on_n:"{n} lights on",lights_off_all:"Lights off",fan_on:"{n} fan on",fans_on_n:"{n} fans on",fans_off_all:"Fans off",switch_on:"{n} switch on",switches_on_n:"{n} switches on",switches_off_all:"Switches off",media_playing_n:"{n} playing",media_idle:"Media idle",climate_on:"{n} climate running",climate_on_n:"{n} climate running",climate_off:"Climate off",alert:"Alert",alerts_n:"{n} alerts",alerts_none:"No alerts",battery_low:"{n} low battery",batteries_low:"{n} low batteries",batteries_ok:"Batteries OK",all_quiet:"All quiet",nudge_nobody_home:"Nobody's home",nudge_away_alarm:"Alarm is off",nudge_fix_lights:"Lights off",nudge_fix_media:"Pause media",nudge_fix_alarm:"Arm away",nudge_unlocked:"{n} lock unlocked",nudge_unlocked_n:"{n} locks unlocked",nudge_fix_locks:"Lock",nudge_fix_doors:"Show doors",nudge_fix_windows:"Show windows",weather_range:"High {high}, low {low}",weather_high:"High {high}",g_alerts:"Safety alerts",g_lights:"Lights",g_doors:"Doors",g_windows:"Windows",g_covers:"Covers",g_locks:"Locks",g_fans:"Fans",g_switches:"Switches & plugs",g_media:"Media",g_climate:"Climate",g_batteries:"Batteries",n_of_m_active:"{n} of {m} active",no_area:"No area",turn_all_on:"All on",turn_all_off:"All off",open_all:"Open all",close_all:"Close all",lock_all:"Lock all",pause_all:"Pause all",close:"Close",ed_section_greeting:"Greeting",ed_section_status:"People, weather & chips",ed_section_alarm:"Alarm",ed_section_modes:"House modes",ed_sec_modes:"House modes",ed_mode_entity:"Mode selector (input_select or select)",ed_modes_hint:"Pick a mode selector to get one button per option, or add modes that run a scene, a script or any action.",ed_modes_hint_auto:"One button per option of the selector. Add modes here to rename, reorder or pick icons and colours.",ed_add_mode:"Add mode",ed_mode_n:"Mode {n}",ed_option:"Option it selects (default: the name)",ed_today_show:"Today line under the date",ed_today_tomorrow:"Include tomorrow",ed_today_calendars:"Calendars (empty = all)",ed_today_entities:"Extra sensors (waste collection, dates, text)",ed_section_pulse:"Home pulse",ed_section_shortcuts:"Shortcuts",ed_sections:"Blocks to show, in order",ed_sec_greeting:"Greeting",ed_sec_status:"People & alarm",ed_sec_alerts:"Safety alerts (only when one trips)",ed_sec_nudges:"Nobody's home hints (only when needed)",ed_sec_alarm:"Alarm panel with buttons",ed_sec_pulse:"Home pulse (lights, windows, …)",ed_sec_shortcuts:"Shortcuts",ed_layout:"Layout",ed_layout_default:"Default",ed_layout_compact:"Compact",ed_appearance:"Appearance",ed_appearance_card:"Card",ed_appearance_flat:"Flat (no background)",ed_title:"Greeting text ({name} = your first name)",ed_show_date:"Show today's date",ed_center_greeting:"Centre the greeting",ed_persons:"People (empty = everyone)",ed_show_away:"Show people who are away",ed_weather_entity:"Weather",ed_alarm_entity:"Alarm panel",ed_alarm_modes:"Arm buttons",ed_pulse:"Groups, in order",ed_show_inactive:"Show groups with nothing active",ed_nudges:"Hints when nobody is home",ed_alert_classes:"Alert device classes",ed_exclude_entities:"Exclude entities",ed_battery_threshold:"Low battery threshold (%)",ed_columns:"Tiles per row",ed_show_names:"Show names under icons",ed_add_shortcut:"Add shortcut",ed_shortcut_n:"Shortcut {n}",ed_name:"Name",ed_icon:"Icon",ed_color:"Icon colour",ed_navigation_path:"Open view (e.g. lights or /lovelace/lights)",ed_entity:"Entity (tints the tile when on)",ed_badge:"Badge",ed_badge_none:"None",ed_badge_entity:"Badge from entity state",ed_tap_action:"Tap action (overrides the view)",ed_hold_action:"Hold action",ed_double_tap_action:"Double tap action",ed_remove:"Remove",ed_move_up:"Move up",ed_move_down:"Move down",ed_none:"None",ed_auto:"Automatic",ed_chips_yaml:"Extra chips are set in YAML (chips:). See the README."},yt={en:ft,el:{greet_morning:"Καλημέρα",greet_afternoon:"Καλό απόγευμα",greet_evening:"Καλησπέρα",greet_night:"Καληνύχτα",greet_with_name:"{greet}, {name}",home:"Σπίτι",away:"Εκτός",alarm_disarmed:"Αφοπλισμένος",alarm_armed_home:"Οπλισμένος (σπίτι)",alarm_armed_away:"Οπλισμένος (εκτός)",alarm_armed_night:"Οπλισμένος (νύχτα)",alarm_armed_vacation:"Οπλισμένος (διακοπές)",alarm_armed_custom_bypass:"Οπλισμένος (προσαρμ.)",alarm_arming:"Όπλιση",alarm_pending:"Σε αναμονή",alarm_disarming:"Αφόπλιση",alarm_triggered:"Ενεργοποιήθηκε",alarm_btn_arm_home:"Σπίτι",alarm_btn_arm_away:"Εκτός",alarm_btn_arm_night:"Νύχτα",alarm_btn_arm_vacation:"Διακοπές",alarm_btn_arm_custom_bypass:"Προσαρμ.",alarm_btn_disarm:"Αφόπλιση",just_now:"μόλις τώρα",today_today:"σήμερα",today_tomorrow:"αύριο",today_until:"έως {time}",door_open:"{n} πόρτα ανοιχτή",doors_open:"{n} πόρτες ανοιχτές",doors_closed:"Πόρτες κλειστές",window_open:"{n} παράθυρο ανοιχτό",windows_open:"{n} παράθυρα ανοιχτά",windows_closed:"Παράθυρα κλειστά",cover_open:"{n} ρολό ανοιχτό",covers_open_n:"{n} ρολά ανοιχτά",covers_closed:"Ρολά κλειστά",lock_unlocked:"{n} ξεκλείδωτη",locks_locked:"Κλειδωμένα",light_on:"{n} φως αναμμένο",lights_on_n:"{n} φώτα αναμμένα",lights_off_all:"Φώτα σβηστά",fan_on:"{n} ανεμιστήρας",fans_on_n:"{n} ανεμιστήρες",fans_off_all:"Ανεμιστήρες off",switch_on:"{n} διακόπτης on",switches_on_n:"{n} διακόπτες on",switches_off_all:"Διακόπτες off",media_playing_n:"{n} σε αναπαραγωγή",media_idle:"Media σε αδράνεια",climate_on:"{n} κλιματισμός σε λειτουργία",climate_on_n:"{n} κλιματισμοί σε λειτουργία",climate_off:"Κλιματισμός off",alert:"Συναγερμός",alerts_n:"{n} ειδοποιήσεις",alerts_none:"Καμία ειδοποίηση",battery_low:"{n} χαμηλή μπαταρία",batteries_low:"{n} χαμηλές μπαταρίες",batteries_ok:"Μπαταρίες εντάξει",all_quiet:"Όλα ήσυχα",nudge_nobody_home:"Δεν είναι κανείς σπίτι",nudge_away_alarm:"Ο συναγερμός είναι κλειστός",nudge_fix_lights:"Σβήσε τα φώτα",nudge_fix_media:"Παύση media",nudge_fix_alarm:"Όπλιση εκτός",nudge_unlocked:"{n} κλειδαριά ξεκλείδωτη",nudge_unlocked_n:"{n} κλειδαριές ξεκλείδωτες",nudge_fix_locks:"Κλείδωσε",nudge_fix_doors:"Δες τις πόρτες",nudge_fix_windows:"Δες τα παράθυρα",weather_range:"Μέγιστη {high}, ελάχιστη {low}",weather_high:"Μέγιστη {high}",g_alerts:"Ειδοποιήσεις ασφαλείας",g_lights:"Φώτα",g_doors:"Πόρτες",g_windows:"Παράθυρα",g_covers:"Ρολά",g_locks:"Κλειδαριές",g_fans:"Ανεμιστήρες",g_switches:"Διακόπτες & πρίζες",g_media:"Media",g_climate:"Κλιματισμός",g_batteries:"Μπαταρίες",n_of_m_active:"{n} από {m} ενεργά",no_area:"Χωρίς χώρο",turn_all_on:"Όλα on",turn_all_off:"Όλα off",open_all:"Άνοιγμα όλων",close_all:"Κλείσιμο όλων",lock_all:"Κλείδωμα όλων",pause_all:"Παύση όλων",close:"Κλείσιμο",ed_section_greeting:"Χαιρετισμός",ed_section_status:"Άτομα, καιρός & chips",ed_section_alarm:"Συναγερμός",ed_section_modes:"Λειτουργίες σπιτιού",ed_sec_modes:"Λειτουργίες σπιτιού",ed_mode_entity:"Επιλογέας λειτουργίας (input_select ή select)",ed_modes_hint:"Διάλεξε επιλογέα για ένα κουμπί ανά επιλογή, ή πρόσθεσε λειτουργίες που τρέχουν σκηνή, script ή οποιαδήποτε ενέργεια.",ed_modes_hint_auto:"Ένα κουμπί ανά επιλογή του επιλογέα. Πρόσθεσε λειτουργίες εδώ για μετονομασία, σειρά, εικονίδια και χρώματα.",ed_add_mode:"Προσθήκη λειτουργίας",ed_mode_n:"Λειτουργία {n}",ed_option:"Επιλογή που ενεργοποιεί (προεπιλογή: το όνομα)",ed_today_show:"Γραμμή «Σήμερα» κάτω από την ημερομηνία",ed_today_tomorrow:"Και τα αυριανά",ed_today_calendars:"Ημερολόγια (κενό = όλα)",ed_today_entities:"Επιπλέον αισθητήρες (απορρίμματα, ημερομηνίες, κείμενο)",ed_section_pulse:"Παλμός σπιτιού",ed_section_shortcuts:"Συντομεύσεις",ed_sections:"Τμήματα προς εμφάνιση, με σειρά",ed_sec_greeting:"Χαιρετισμός",ed_sec_status:"Άτομα & συναγερμός",ed_sec_alerts:"Ειδοποιήσεις ασφαλείας (μόνο όταν ενεργοποιηθούν)",ed_sec_nudges:"Υποδείξεις όταν δεν είναι κανείς σπίτι (μόνο όταν χρειάζεται)",ed_sec_alarm:"Πίνακας συναγερμού με κουμπιά",ed_sec_pulse:"Παλμός σπιτιού (φώτα, παράθυρα, …)",ed_sec_shortcuts:"Συντομεύσεις",ed_layout:"Διάταξη",ed_layout_default:"Κανονική",ed_layout_compact:"Συμπαγής",ed_appearance:"Εμφάνιση",ed_appearance_card:"Κάρτα",ed_appearance_flat:"Επίπεδη (χωρίς φόντο)",ed_title:"Κείμενο χαιρετισμού ({name} = το μικρό σου όνομα)",ed_show_date:"Εμφάνιση σημερινής ημερομηνίας",ed_center_greeting:"Χαιρετισμός στο κέντρο",ed_persons:"Άτομα (κενό = όλοι)",ed_show_away:"Εμφάνιση όσων είναι εκτός",ed_weather_entity:"Καιρός",ed_alarm_entity:"Πίνακας συναγερμού",ed_alarm_modes:"Κουμπιά όπλισης",ed_pulse:"Ομάδες, με σειρά",ed_show_inactive:"Εμφάνιση ομάδων χωρίς ενεργά",ed_nudges:"Υποδείξεις όταν δεν είναι κανείς σπίτι",ed_alert_classes:"Κλάσεις συσκευών ειδοποίησης",ed_exclude_entities:"Εξαίρεση οντοτήτων",ed_battery_threshold:"Όριο χαμηλής μπαταρίας (%)",ed_columns:"Πλακίδια ανά σειρά",ed_show_names:"Ονόματα κάτω από τα εικονίδια",ed_add_shortcut:"Προσθήκη συντόμευσης",ed_shortcut_n:"Συντόμευση {n}",ed_name:"Όνομα",ed_icon:"Εικονίδιο",ed_color:"Χρώμα εικονιδίου",ed_navigation_path:"Άνοιγμα προβολής (π.χ. lights ή /lovelace/lights)",ed_entity:"Οντότητα (χρωματίζει το πλακίδιο όταν είναι on)",ed_badge:"Σήμα",ed_badge_none:"Κανένα",ed_badge_entity:"Σήμα από κατάσταση οντότητας",ed_tap_action:"Ενέργεια πατήματος (αντί για την προβολή)",ed_hold_action:"Ενέργεια παρατεταμένου πατήματος",ed_double_tap_action:"Ενέργεια διπλού πατήματος",ed_remove:"Αφαίρεση",ed_move_up:"Πάνω",ed_move_down:"Κάτω",ed_none:"Κανένα",ed_auto:"Αυτόματα",ed_chips_yaml:"Τα επιπλέον chips ορίζονται σε YAML (chips:). Δες το README."}};function vt(e,t,o={}){const i=function(e){return(e?.locale?.language||e?.language||"en").split("-")[0]}(e);let n=yt[i]?.[t]??ft[t]??t;for(const[e,t]of Object.entries(o))n=n.replace(`{${e}}`,String(t));return n}function bt(e,t,o=Date.now()){const i=Date.parse(t);if(Number.isNaN(i))return"";const n=Math.round((i-o)/1e3);if(Math.abs(n)<45)return vt(e,"just_now");const a=new Intl.RelativeTimeFormat(e?.locale?.language||e?.language||"en",{numeric:"auto"}),s=[["day",86400],["hour",3600],["minute",60]];for(const[e,t]of s)if(Math.abs(n)>=t)return a.format(Math.round(n/t),e);return a.format(Math.round(n/60),"minute")}const wt=s`
  :host {
    /* Every variable reads the shared Pulse token first (set by the Pulse theme), then Home Assistant's
       own variable, then the value this card always used. Without the Pulse theme nothing changes. */
    --hpc-accent: var(--pulse-accent, var(--primary-color));
    /* Colours with a meaning: on (lights), needs a look, problem, all good, information. */
    --hpc-amber: var(--pulse-active, var(--amber-color, #ffc107));
    --hpc-orange: var(--pulse-warn, var(--orange-color, #ff9800));
    --hpc-red: var(--pulse-bad, var(--red-color, #f44336));
    --hpc-green: var(--pulse-ok, var(--green-color, #4caf50));
    --hpc-blue: var(--pulse-info, var(--blue-color, #2196f3));
    /* Category colours: Home Assistant's palette (the Pulse theme mutes it). */
    --hpc-deep-orange: var(--deep-orange-color, #ff6f22);
    --hpc-light-blue: var(--light-blue-color, #03a9f4);
    --hpc-cyan: var(--cyan-color, #00bcd4);
    --hpc-teal: var(--teal-color, #009688);
    --hpc-indigo: var(--indigo-color, #3f51b5);
    --hpc-purple: var(--purple-color, #926bc7);
    /* Surfaces: the same two neutral steps Area Pulse uses. */
    --hpc-neutral-bg: var(--pulse-surface-neutral, color-mix(in srgb, var(--primary-text-color) 5%, transparent));
    --hpc-neutral-bg-hover: var(--pulse-surface-neutral-hover, color-mix(in srgb, var(--primary-text-color) 9%, transparent));
    --hpc-neutral-strong: var(--pulse-surface-neutral-strong, color-mix(in srgb, var(--primary-text-color) 14%, transparent));
    --hpc-radius: var(--pulse-radius, var(--ha-card-border-radius, 12px));
    --hpc-control-radius: var(--pulse-control-radius, var(--ha-card-features-border-radius, var(--feature-border-radius, 12px)));
    --hpc-chip-height: var(--pulse-chip-height, 30px);
    /* An overview breathes a little more than a room card: the family's gap and padding plus 4px. */
    --hpc-gap: calc(var(--pulse-gap, 12px) + 4px);
    /* Corner glow: warm sun by day, cool moon by night, at the theme's glow strength. Override per theme if you like. */
    --hpc-glow-day: var(--pulse-glow-day, var(--hpc-orange));
    --hpc-glow-night: var(--pulse-glow-night, var(--hpc-blue));
    --hpc-glow-strength: calc(var(--pulse-glow-alpha, 0.16) * 100%);
    --hpc-pad: calc(var(--pulse-pad, 12px) + 4px);
    /* Weather: the sun in the theme's gold (the glow colour is too pale for an icon on a light card),
       the moon in the night glow, snow and hail cold. */
    --hpc-sun: var(--hpc-amber);
    --hpc-moon: var(--pulse-glow-night, var(--hpc-light-blue));
    --hpc-cold: var(--pulse-cold, var(--hpc-light-blue));
    /* Motion: the theme's rhythm, else the durations the card always used. */
    --hpc-motion-fast: var(--pulse-motion-fast, 120ms);
    --hpc-motion-normal: var(--pulse-motion-normal, 200ms);
    --hpc-motion-slow: var(--pulse-motion-slow, 250ms);
    --hpc-ease: var(--pulse-ease, ease);
    display: block;
    height: 100%;
  }

  ha-card {
    position: relative;
    height: 100%;
    overflow: hidden;
    container-type: inline-size;
  }
  :host([appearance="flat"]) ha-card {
    background: none;
    border: none;
    box-shadow: none;
    overflow: visible;
  }
  .glow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      130% 95% at 0% 0%,
      color-mix(in srgb, var(--hpc-glow) var(--hpc-glow-strength), transparent) 0%,
      transparent 58%
    );
    transition: background 1s ease;
  }
  ha-card.day {
    --hpc-glow: var(--hpc-glow-day);
  }
  ha-card.night {
    --hpc-glow: var(--hpc-glow-night);
  }
  :host([appearance="flat"]) .glow {
    display: none;
  }
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--hpc-gap);
    padding: var(--hpc-pad);
  }
  :host([appearance="flat"]) .content {
    padding: 0;
  }

  button {
    font: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  /* ---- Greeting ---- */
  .greeting {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    min-width: 0;
    padding: 2px 2px 4px;
  }
  .hello-text {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .hello {
    margin: 0;
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
    letter-spacing: -0.4px;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .date {
    font-size: 14px;
    line-height: 20px;
    color: var(--secondary-text-color);
  }
  .greeting.center {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
  }
  .greeting.center .hello-text {
    align-items: center;
  }
  .greeting.center .hello {
    font-size: 28px;
    line-height: 34px;
    white-space: normal;
  }
  .greeting.center .weather {
    align-items: center;
  }

  .weather {
    flex: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    padding: 4px 6px;
    margin: -4px -6px;
    border: none;
    border-radius: var(--hpc-control-radius);
    background: none;
    color: var(--primary-text-color);
    cursor: pointer;
  }
  .weather:hover {
    background: var(--hpc-neutral-bg);
  }
  .weather:focus-visible {
    outline: 2px solid var(--hpc-accent);
  }
  .weather-main {
    display: flex;
    align-items: center;
    gap: 6px;
    --mdc-icon-size: 24px;
  }
  .weather-main ha-icon {
    color: var(--c, var(--secondary-text-color));
  }
  .temp {
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: -0.5px;
    font-variant-numeric: tabular-nums;
  }
  .weather-cond {
    font-size: 13px;
    line-height: 18px;
    color: var(--secondary-text-color);
  }
  /* Today's high and low from the forecast, one quiet line. */
  .weather-range {
    display: flex;
    gap: 8px;
    font-size: 12px;
    line-height: 16px;
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
    --mdc-icon-size: 12px;
  }
  .weather-range > span {
    display: inline-flex;
    align-items: center;
    gap: 1px;
  }
  .greeting.center .weather-range {
    justify-content: center;
  }

  /* ---- Status row: people, alarm, extra chips ---- */
  .status {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    scrollbar-width: none;
    margin: 0 calc(-1 * var(--hpc-pad));
    padding: 0 var(--hpc-pad);
    scroll-padding: 0 var(--hpc-pad);
    scroll-snap-type: x proximity;
  }
  .status::-webkit-scrollbar {
    display: none;
  }
  .status.overflow {
    -webkit-mask-image: linear-gradient(to right, #000 calc(100% - 32px), transparent);
    mask-image: linear-gradient(to right, #000 calc(100% - 32px), transparent);
  }
  :host([appearance="flat"]) .status {
    margin: 0;
    padding: 0;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .chip {
    --c: var(--primary-text-color);
    flex: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: var(--hpc-chip-height);
    padding: 0 12px 0 9px;
    border-radius: calc(var(--hpc-chip-height) / 2);
    border: none;
    font-size: 12px;
    font-weight: 500;
    color: var(--primary-text-color);
    background: var(--hpc-neutral-bg);
    cursor: pointer;
    white-space: nowrap;
    max-width: 100%;
    box-sizing: border-box;
    scroll-snap-align: start;
    user-select: none;
    -webkit-user-select: none;
    transition: background-color var(--hpc-motion-normal) var(--hpc-ease), transform var(--hpc-motion-fast) var(--hpc-ease);
    --mdc-icon-size: 16px;
  }
  .chip ha-icon,
  .chip ha-state-icon {
    color: var(--secondary-text-color);
  }
  .chip:hover {
    background: var(--hpc-neutral-bg-hover);
  }
  .chip:active {
    transform: scale(0.96);
  }
  .chip:focus-visible {
    outline: 2px solid var(--hpc-accent);
    outline-offset: 1px;
  }
  /* Home pulse: neutral fill and text, only the icon carries the meaning (Area Pulse's chip_colors: state). */
  .chip.active ha-icon {
    color: var(--c);
  }
  .chip.idle {
    color: var(--secondary-text-color);
  }
  .chip.colored ha-icon,
  .chip.colored ha-state-icon {
    color: var(--c);
  }
  .chip.calm {
    color: var(--secondary-text-color);
    cursor: default;
  }
  .chip.calm:active {
    transform: none;
  }
  .chip.alarm.loud {
    color: color-mix(in srgb, var(--c) 80%, var(--primary-text-color));
    background: color-mix(in srgb, var(--c) 16%, transparent);
  }
  .chip.alarm.loud ha-icon {
    color: var(--c);
    /* A few blinks when it starts, then still: the tinted chip keeps the attention. */
    animation: hpc-blink 1.4s ease-in-out 3;
  }
  .chip .label {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .chip .muted {
    color: var(--secondary-text-color);
    font-weight: 400;
  }

  /* People: green when home, quieter when away. */
  .chip.person {
    padding-left: 4px;
  }
  .avatar {
    flex: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--hpc-neutral-strong);
    color: var(--primary-text-color);
    background-size: cover;
    background-position: center;
    font-size: 11px;
    font-weight: 600;
  }
  .avatar {
    position: relative;
  }
  .person.home .avatar:not(.pic) {
    background: color-mix(in srgb, var(--hpc-green) 22%, transparent);
    color: var(--hpc-green);
  }
  .person.home .avatar::after {
    content: "";
    position: absolute;
    right: -2px;
    bottom: -2px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--hpc-green);
    border: 2px solid var(--ha-card-background, var(--card-background-color, #fff));
    box-sizing: border-box;
  }
  .person.away {
    color: var(--secondary-text-color);
  }
  .person.away .avatar {
    opacity: 0.55;
    filter: grayscale(1);
  }

  /* ---- Alarm block (opt-in) ---- */
  .alarm-row {
    --c: var(--secondary-text-color);
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 8px 8px 10px;
    border-radius: var(--hpc-control-radius);
    background: var(--hpc-neutral-bg);
    min-width: 0;
  }
  .alarm-row.triggered {
    background: color-mix(in srgb, var(--hpc-red) 14%, transparent);
  }
  .alarm-main {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    border-radius: var(--hpc-control-radius);
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
  .alarm-main:focus-visible {
    box-shadow: 0 0 0 2px var(--hpc-accent);
  }
  .alarm-icon {
    flex: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in srgb, var(--c) 20%, transparent);
    color: var(--c);
    --mdc-icon-size: 22px;
  }
  .alarm-row.triggered .alarm-icon,
  .alarm-row.pending .alarm-icon {
    background: color-mix(in srgb, var(--c) 20%, transparent);
  }
  .alarm-row.triggered .alarm-icon ha-icon,
  .alarm-row.pending .alarm-icon ha-icon {
    animation: hpc-blink 1.4s ease-in-out 3;
  }
  .alarm-titles {
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .alarm-state {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .alarm-sub {
    font-size: 12px;
    line-height: 16px;
    color: var(--secondary-text-color);
  }
  .alarm-buttons {
    flex: none;
    display: flex;
    gap: 6px;
  }
  .alarm-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-width: 40px;
    height: 40px;
    padding: 0 10px;
    box-sizing: border-box;
    border: none;
    border-radius: var(--hpc-control-radius);
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    background: var(--hpc-neutral-bg-hover);
    cursor: pointer;
    transition: background-color var(--hpc-motion-normal) var(--hpc-ease), transform var(--hpc-motion-fast) var(--hpc-ease);
    --mdc-icon-size: 20px;
  }
  .alarm-btn ha-icon {
    color: var(--b);
  }
  .alarm-btn:hover {
    background: var(--hpc-neutral-strong);
  }
  .alarm-btn:active {
    transform: scale(0.94);
  }
  .alarm-btn:focus-visible {
    outline: 2px solid var(--hpc-accent);
    outline-offset: 1px;
  }
  .alarm-btn .label {
    display: none;
  }
  @container (min-width: 460px) {
    .alarm-btn .label {
      display: inline;
    }
    .alarm-btn {
      padding: 0 14px 0 10px;
    }
  }

  /* ---- Alerts and pulse (pulse is opt-in) ---- */
  .pulse {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  /* The alert line is Area Pulse's alert banner: the one red block, a few blinks, then still. */
  .banner {
    --c: var(--hpc-red);
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 44px;
    padding: 8px 12px;
    box-sizing: border-box;
    border-radius: var(--hpc-control-radius);
    background: color-mix(in srgb, var(--c) 14%, transparent);
    color: var(--c);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    --mdc-icon-size: 20px;
  }
  .banner.alert ha-icon.lead {
    animation: hpc-blink 1.4s ease-in-out 3;
  }
  .banner .text {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* "Nobody's home": neutral block and text, the icon says it needs a look; the fixes are actions. */
  .banner.nudge {
    align-items: flex-start;
    gap: 12px;
    padding: 12px 14px;
    background: var(--hpc-neutral-bg);
    color: var(--primary-text-color);
    cursor: default;
  }
  .banner.nudge ha-icon.lead {
    margin-top: 1px;
    color: var(--hpc-orange);
  }
  .nudge-body {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .nudge-title {
    font-weight: 500;
  }
  .nudge-what {
    font-weight: 400;
    color: var(--secondary-text-color);
  }
  .nudge-fixes {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
  }
  .banner .fix {
    flex: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: var(--hpc-chip-height);
    padding: 0 12px 0 9px;
    border: none;
    border-radius: calc(var(--hpc-chip-height) / 2);
    font-size: 12px;
    font-weight: 500;
    color: var(--primary-text-color);
    background: var(--hpc-neutral-bg-hover);
    cursor: pointer;
    transition: background-color var(--hpc-motion-normal) var(--hpc-ease), transform var(--hpc-motion-fast) var(--hpc-ease);
    --mdc-icon-size: 16px;
  }
  .banner .fix ha-icon {
    color: var(--hpc-accent);
  }
  .banner .fix:hover {
    background: var(--hpc-neutral-strong);
  }
  .banner .fix:active {
    transform: scale(0.96);
  }
  .banner .fix:focus-visible {
    outline: 2px solid var(--hpc-accent);
    outline-offset: 1px;
  }
  @keyframes hpc-blink {
    50% {
      opacity: 0.35;
    }
  }

  /* ---- Today line (under the date) ---- */
  .today {
    display: flex;
    align-items: center;
    gap: 5px;
    max-width: 100%;
    margin: 3px 0 0 -4px;
    padding: 2px 6px 2px 4px;
    border: none;
    border-radius: 8px;
    background: none;
    font-size: 13px;
    line-height: 18px;
    color: var(--primary-text-color);
    text-align: left;
    cursor: pointer;
    --mdc-icon-size: 15px;
  }
  .today ha-icon {
    flex: none;
    color: var(--hpc-accent);
  }
  .today:hover {
    background: var(--hpc-neutral-bg);
  }
  .today:focus-visible {
    outline: 2px solid var(--hpc-accent);
  }
  .today {
    align-items: flex-start;
  }
  .today ha-icon {
    margin-top: 1px;
  }
  /* Up to two lines, then an ellipsis. */
  .today-text {
    min-width: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .greeting.center .today {
    align-self: center;
    margin-left: 0;
  }

  /* ---- House modes: a segmented control ---- */
  .modes {
    display: flex;
    gap: 4px;
    padding: 4px;
    border-radius: calc(var(--hpc-control-radius) + 4px);
    background: var(--hpc-neutral-bg);
  }
  .mode {
    --c: var(--hpc-accent);
    flex: 1 1 0;
    min-width: 0;
    height: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 0 4px;
    border: none;
    border-radius: var(--hpc-control-radius);
    background: none;
    color: var(--secondary-text-color);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: background-color var(--hpc-motion-slow) var(--hpc-ease), color var(--hpc-motion-slow) var(--hpc-ease),
      transform var(--hpc-motion-fast) var(--hpc-ease);
    --mdc-icon-size: 20px;
  }
  .mode:hover {
    background: var(--hpc-neutral-bg-hover);
  }
  .mode:active {
    transform: scale(0.96);
  }
  .mode:focus-visible {
    outline: 2px solid var(--c);
    outline-offset: -2px;
  }
  /* Like an active tile: a stronger neutral fill and the text colour; the mode's colour stays on the icon. */
  .mode.active,
  .mode.active:hover {
    color: var(--primary-text-color);
    background: var(--hpc-neutral-strong);
  }
  .mode.active ha-icon {
    color: var(--c);
  }
  .mode-name {
    max-width: 100%;
    font-size: 11px;
    line-height: 14px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* Wide cards: icon beside the name. */
  @container (min-width: 480px) {
    .mode {
      flex-direction: row;
      gap: 8px;
      height: 46px;
    }
    .mode-name {
      font-size: 13px;
    }
  }

  /* ---- Shortcuts: the main feature ---- */
  .shortcuts {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  /* Rows are balanced in code (7 → 4 + 3); every tile in a row shares the width. */
  .shortcut-row {
    display: flex;
    gap: 10px;
  }
  .shortcut {
    --c: var(--hpc-accent);
    position: relative;
    flex: 1 1 0;
    min-width: 0;
    height: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 6px;
    box-sizing: border-box;
    border: none;
    border-radius: var(--hpc-control-radius);
    color: var(--primary-text-color);
    background: var(--hpc-neutral-bg);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: background-color var(--hpc-motion-normal) var(--hpc-ease), transform var(--hpc-motion-fast) var(--hpc-ease);
    --mdc-icon-size: 26px;
  }
  .shortcut.named {
    height: 92px;
  }
  .shortcut ha-icon,
  .shortcut ha-state-icon {
    color: var(--c);
  }
  .shortcut:hover {
    background: var(--hpc-neutral-bg-hover);
  }
  .shortcut:active {
    transform: scale(0.97);
  }
  .shortcut:focus-visible {
    outline: 2px solid var(--hpc-accent);
    outline-offset: 1px;
  }
  /* Its entity is on: like an active tile, a stronger neutral fill; the colour stays on the icon. */
  .shortcut.active,
  .shortcut.active:hover {
    background: var(--hpc-neutral-strong);
  }
  .shortcut .name {
    max-width: 100%;
    font-size: 13px;
    line-height: 18px;
    font-weight: 500;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .badge {
    position: absolute;
    top: 8px;
    right: 8px;
    min-width: 20px;
    height: 20px;
    max-width: calc(100% - 16px);
    padding: 0 6px;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 11px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    /* Neutral, unless the count means something (lights on, open, problems): then its tone. */
    color: var(--primary-text-color);
    background: color-mix(in srgb, var(--primary-text-color) 16%, var(--ha-card-background, var(--card-background-color, #fff)));
  }
  .badge.toned {
    color: color-mix(in srgb, var(--t) 70%, var(--primary-text-color));
    background: color-mix(in srgb, var(--t) 26%, var(--ha-card-background, var(--card-background-color, #fff)));
  }

  .warning {
    padding: 16px;
    color: var(--warning-color, #ffa600);
    display: flex;
    gap: 8px;
    align-items: center;
  }

  /* ---- Compact ---- */
  :host([layout="compact"]) {
    --hpc-gap: 10px;
    --hpc-pad: 10px;
  }
  :host([layout="compact"]) .greeting {
    gap: 12px;
    padding: 0;
  }
  :host([layout="compact"]) .hello {
    font-size: 18px;
    line-height: 24px;
  }
  :host([layout="compact"]) .date,
  :host([layout="compact"]) .weather-cond {
    font-size: 12px;
    line-height: 16px;
  }
  :host([layout="compact"]) .temp {
    font-size: 18px;
    line-height: 24px;
  }
  :host([layout="compact"]) .weather-main {
    --mdc-icon-size: 20px;
  }
  :host([layout="compact"]) .status,
  :host([layout="compact"]) .shortcuts,
  :host([layout="compact"]) .shortcut-row {
    gap: 6px;
  }
  :host([layout="compact"]) .chip {
    height: 26px;
  }
  :host([layout="compact"]) .avatar {
    width: 18px;
    height: 18px;
  }
  :host([layout="compact"]) .mode {
    height: 40px;
    --mdc-icon-size: 18px;
  }
  :host([layout="compact"]) .mode-name {
    font-size: 10px;
  }
  :host([layout="compact"]) .shortcut {
    height: 52px;
    --mdc-icon-size: 22px;
  }
  :host([layout="compact"]) .shortcut.named {
    height: 64px;
    gap: 4px;
    --mdc-icon-size: 22px;
  }
  :host([layout="compact"]) .badge {
    top: 6px;
    right: 6px;
    min-width: 18px;
    height: 18px;
    border-radius: 9px;
  }
  :host([layout="compact"]) .banner.nudge {
    padding: 10px 12px;
  }
  :host([layout="compact"]) .shortcut .name {
    font-size: 11px;
  }

  @media (prefers-reduced-motion: reduce) {
    .banner.alert ha-icon.lead,
    .alarm-row ha-icon,
    .chip.alarm.loud ha-icon {
      animation: none !important;
    }
    .glow,
    .chip,
    .mode,
    .shortcut,
    .banner .fix,
    .alarm-btn {
      transition: none;
    }
  }
`,xt=s`
  dialog.hpc-popup {
    --c: var(--hpc-accent);
    padding: 0;
    border: none;
    background: transparent;
    width: min(640px, calc(100vw - 32px));
    max-width: none;
    max-height: min(80vh, 760px);
    color: var(--primary-text-color);
    overflow: visible;
  }
  dialog.hpc-popup::backdrop {
    background: rgba(0, 0, 0, 0.45);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }
  dialog.hpc-popup[open] .popup-surface {
    animation: hpc-pop 200ms cubic-bezier(0.2, 0.9, 0.3, 1.1);
  }
  @keyframes hpc-pop {
    from { opacity: 0; transform: translateY(12px) scale(0.98); }
  }
  .popup-surface {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: min(80vh, 760px);
    padding: 20px;
    box-sizing: border-box;
    border-radius: var(--ha-dialog-border-radius, 28px);
    background: var(--ha-dialog-surface-background, var(--mdc-theme-surface, var(--card-background-color, #fff)));
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }
  .popup-head {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .popup-icon {
    flex: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--hpc-neutral-bg);
    color: var(--secondary-text-color);
    --mdc-icon-size: 22px;
  }
  .popup-icon.active {
    background: color-mix(in srgb, var(--c) 18%, transparent);
    color: var(--c);
  }
  .popup-titles { flex: 1; min-width: 0; }
  .popup-title { font-size: 20px; line-height: 26px; font-weight: 500; }
  .popup-sub { font-size: 13px; color: var(--secondary-text-color); }
  .popup-close {
    flex: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: none;
    color: var(--secondary-text-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    --mdc-icon-size: 22px;
  }
  .popup-close:hover { background: var(--hpc-neutral-bg); }
  .popup-bulk { display: flex; gap: 8px; flex-wrap: wrap; }
  .bulk {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 36px;
    padding: 0 14px 0 10px;
    border: none;
    border-radius: 18px;
    font: inherit;
    font-size: 13px;
    font-weight: 500;
    /* A bulk button is an action, not a state: neutral fill and text, the icon in the accent (as in Area Pulse). */
    color: var(--primary-text-color);
    background: var(--hpc-neutral-bg);
    cursor: pointer;
    --mdc-icon-size: 18px;
  }
  .bulk ha-icon { color: var(--hpc-accent); }
  .bulk:hover { background: var(--hpc-neutral-bg-hover); }
  .popup-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(220px, 100%), 1fr));
    gap: 8px;
    overflow-y: auto;
    padding: 2px;
    margin: -2px;
  }

  /* Fallback tiles (only when HA's card helpers are unavailable) */
  .mini-tile {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: var(--ha-card-border-radius, 12px);
    border: 1px solid var(--divider-color);
    background: var(--ha-card-background, var(--card-background-color));
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    outline: none;
    --mdc-icon-size: 20px;
  }
  .mini-tile:focus-visible { box-shadow: 0 0 0 2px var(--c); }
  .mt-icon {
    flex: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--hpc-neutral-bg);
    color: var(--secondary-text-color);
  }
  .mini-tile.active .mt-icon {
    background: color-mix(in srgb, var(--c) 20%, transparent);
    color: var(--c);
  }
  .mt-text { min-width: 0; }
  .mt-name, .mt-state { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .mt-name { font-size: 14px; font-weight: 500; line-height: 20px; }
  .mt-state { font-size: 12px; color: var(--secondary-text-color); line-height: 16px; }

  .popup-body {
    display: flex;
    flex-direction: column;
    gap: 14px;
    overflow-y: auto;
    padding: 2px;
    margin: -2px;
  }
  .popup-body .popup-grid {
    overflow: visible;
  }
  .area-head {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    margin: 0 2px -6px;
  }

  @media (max-width: 600px) {
    dialog.hpc-popup {
      width: 100vw;
      max-width: 100vw;
      margin: auto 0 0;
    }
    .popup-surface {
      max-height: 86vh;
      border-radius: var(--ha-dialog-border-radius, 28px) var(--ha-dialog-border-radius, 28px) 0 0;
    }
  }
`,$t=[...$e,"vibration","cold","heat","sound","light"],kt={layout:"default",appearance:"card",sections:xe,show_date:!0,center_greeting:!1,show_away:!0,alarm_modes:Ee,pulse:Ae,show_inactive:!1,nudges:!0,battery_threshold:20,columns:4,show_names:!0};function At(e){const t={};for(const[o,i]of Object.entries(e))null!=i&&""!==i&&(Array.isArray(i)&&0===i.length||(t[o]=i));return t}const St=(e,t)=>JSON.stringify(e)===JSON.stringify(t);class Et extends re{constructor(){super(...arguments),this._open=new Set,this._ready=!1,this._t=(e,t)=>vt(this.hass,e,t),this._label=e=>["layout","appearance","sections","title","show_date","center_greeting","persons","show_away","weather_entity","alarm_entity","alarm_modes","pulse","show_inactive","nudges","battery_threshold","alert_classes","exclude_entities","columns","show_names","name","icon","color","navigation_path","entity","badge","tap_action","hold_action","double_tap_action","today_show","today_tomorrow","today_calendars","today_entities","mode_entity","option"].includes(e.name)?this._t(`ed_${e.name}`):e.name}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-form")||!customElements.get("ha-selector"))try{const e=await(window.loadCardHelpers?.()),t=await(e?.createCardElement({type:"entities",entities:[]}));await(t?.constructor?.getConfigElement?.())}catch{}}().then(()=>this._ready=!0)}setConfig(e){this._config=e}_mainSchema(){const e=this._t,t=(e,t={})=>({select:{mode:"dropdown",options:e,...t}});return[{type:"grid",name:"",schema:[{name:"layout",selector:t([{value:"default",label:e("ed_layout_default")},{value:"compact",label:e("ed_layout_compact")}])},{name:"appearance",selector:t([{value:"card",label:e("ed_appearance_card")},{value:"flat",label:e("ed_appearance_flat")}])}]},{name:"sections",selector:{select:{multiple:!0,reorder:!0,mode:"list",options:we.map(t=>({value:t,label:e(`ed_sec_${t}`)}))}}},{type:"expandable",name:"",title:e("ed_section_greeting"),icon:"mdi:hand-wave-outline",flatten:!0,schema:[{name:"title",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_date",selector:{boolean:{}}},{name:"center_greeting",selector:{boolean:{}}}]},{type:"grid",name:"",schema:[{name:"today_show",selector:{boolean:{}}},{name:"today_tomorrow",selector:{boolean:{}}}]},{name:"today_calendars",selector:{entity:{multiple:!0,filter:{domain:"calendar"}}}},{name:"today_entities",selector:{entity:{multiple:!0}}}]},{type:"expandable",name:"",title:e("ed_section_status"),icon:"mdi:account-group-outline",flatten:!0,schema:[{name:"persons",selector:{entity:{multiple:!0,filter:{domain:"person"}}}},{name:"show_away",selector:{boolean:{}}},{name:"weather_entity",selector:{entity:{filter:{domain:"weather"}}}}]},{type:"expandable",name:"",title:e("ed_section_modes"),icon:"mdi:home-switch-outline",flatten:!0,schema:[{name:"mode_entity",selector:{entity:{filter:[{domain:"input_select"},{domain:"select"}]}}}]},{type:"expandable",name:"",title:e("ed_section_alarm"),icon:"mdi:shield-home-outline",flatten:!0,schema:[{name:"alarm_entity",selector:{entity:{filter:{domain:"alarm_control_panel"}}}},{name:"alarm_modes",selector:{select:{multiple:!0,mode:"list",options:Se.map(t=>({value:t,label:e(`alarm_btn_${t}`)}))}}}]},{type:"expandable",name:"",title:e("ed_section_pulse"),icon:"mdi:heart-pulse",flatten:!0,schema:[{name:"pulse",selector:{select:{multiple:!0,reorder:!0,mode:"list",options:ke.map(t=>({value:t,label:e(`g_${t}`)}))}}},{name:"show_inactive",selector:{boolean:{}}},{name:"nudges",selector:{boolean:{}}},{name:"battery_threshold",selector:{number:{min:1,max:100,mode:"box",unit_of_measurement:"%"}}},{name:"alert_classes",selector:{select:{multiple:!0,custom_value:!0,mode:"dropdown",options:$t.map(e=>({value:e,label:e.replace(/_/g," ")}))}}},{name:"exclude_entities",selector:{entity:{multiple:!0}}}]},{type:"grid",name:"",schema:[{name:"columns",selector:{number:{min:1,max:8,mode:"slider"}}},{name:"show_names",selector:{boolean:{}}}]}]}_shortcutSchema(){const e=this._t;return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{name:"navigation_path",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"color",selector:{ui_color:{}}},{name:"badge",selector:{select:{mode:"dropdown",custom_value:!0,options:[{value:"none",label:e("ed_badge_none")},...ke.map(t=>({value:t,label:e(`g_${t}`)}))]}}}]},{name:"entity",selector:{entity:{}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}},{name:"double_tap_action",selector:{ui_action:{}}}]}_modeSchema(){return[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{type:"grid",name:"",schema:[{name:"option",selector:{text:{}}},{name:"color",selector:{ui_color:{}}}]},{name:"entity",selector:{entity:{filter:[{domain:"scene"},{domain:"script"},{domain:"input_boolean"},{domain:"switch"}]}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}}]}_formData(){const e=this._config,t="object"==typeof e.today?e.today:{};return{...kt,...e,today_show:!1!==e.today,today_tomorrow:!1!==t.tomorrow,today_calendars:t.calendars??[],today_entities:(t.entities??[]).map(e=>"string"==typeof e?e:e.entity)}}_todayFrom(e){const t="object"==typeof this._config?.today?this._config.today:{};if(!1===e.today_show)return!1;const o=new Map((t.entities??[]).filter(e=>"object"==typeof e).map(e=>[e.entity,e])),i=(e.today_entities??[]).map(e=>o.get(e)??e),n=At({...t,calendars:e.today_calendars,entities:i,tomorrow:!1!==e.today_tomorrow&&void 0});return Object.keys(n).length?n:void 0}_mainChanged(e){e.stopPropagation();const t={...e.detail.value},o=this._todayFrom(t);for(const e of["today_show","today_tomorrow","today_calendars","today_entities"])delete t[e];for(const[e,o]of Object.entries(kt))St(t[e],o)&&delete t[e];const i=At({...t,today:o,shortcuts:this._config?.shortcuts,modes:this._config?.modes});!1===o&&(i.today=!1),this._commit(i)}_items(e){return[...this._config?.[e]??[]]}_setItems(e,t){this._commit(At({...this._config,[e]:t}))}_itemChanged(e,t,o){o.stopPropagation();const i=this._items(e),n={...o.detail.value};"none"===n.badge&&delete n.badge,i[t]=At(n),this._setItems(e,i)}_addItem(e){const t=this._items(e);t.push("shortcuts"===e?{icon:"mdi:view-dashboard-outline"}:{}),this._open=new Set([...this._open,`${e}:${t.length-1}`]),this._setItems(e,t)}_removeItem(e,t){const o=this._items(e);o.splice(t,1),this._open=new Set,this._setItems(e,o)}_moveItem(e,t,o){const i=this._items(e),n=t+o;n<0||n>=i.length||([i[t],i[n]]=[i[n],i[t]],this._open=new Set,this._setItems(e,i))}_toggleOpen(e){const t=new Set(this._open);t.has(e)?t.delete(e):t.add(e),this._open=t}_commit(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}render(){if(!this.hass||!this._config||!this._ready)return q;const e=this._config.shortcuts??[],t=this._config.modes??[];return B`
      <ha-form
        .hass=${this.hass}
        .data=${this._formData()}
        .schema=${this._mainSchema()}
        .computeLabel=${this._label}
        @value-changed=${this._mainChanged}
      ></ha-form>
      ${this._config.chips?.length?q:B`<p class="hint">${this._t("ed_chips_yaml")}</p>`}

      <div class="section">
        <div class="section-title"><ha-icon icon="mdi:home-switch-outline"></ha-icon>${this._t("ed_section_modes")}</div>
        <p class="hint">${this._t(this._config.mode_entity&&!t.length?"ed_modes_hint_auto":"ed_modes_hint")}</p>
        ${t.map((e,o)=>this._renderItem("modes",e,o,t.length,e.name||e.option||e.entity||this._t("ed_mode_n",{n:o+1}),e.icon,this._modeSchema(),{}))}
        <button class="add" @click=${()=>this._addItem("modes")}>
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("ed_add_mode")}
        </button>
      </div>

      <div class="section">
        <div class="section-title"><ha-icon icon="mdi:view-grid-outline"></ha-icon>${this._t("ed_section_shortcuts")}</div>
        ${e.map((t,o)=>this._renderItem("shortcuts",t,o,e.length,t.name||t.navigation_path||t.entity||this._t("ed_shortcut_n",{n:o+1}),t.icon,this._shortcutSchema(),{badge:"none"}))}
        <button class="add" @click=${()=>this._addItem("shortcuts")}>
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("ed_add_shortcut")}
        </button>
      </div>
    `}_renderItem(e,t,o,i,n,a,s,r){const c=`${e}:${o}`,l=this._open.has(c);return B`
      <div class="item">
        <div class="item-head">
          <button class="head-main" @click=${()=>this._toggleOpen(c)} aria-expanded=${String(l)}>
            <ha-icon .icon=${l?"mdi:chevron-down":"mdi:chevron-right"}></ha-icon>
            ${a?B`<ha-icon class="sc-icon" .icon=${a}></ha-icon>`:q}
            <span>${n}</span>
          </button>
          <button class="icon-btn" title=${this._t("ed_move_up")} ?disabled=${0===o} @click=${()=>this._moveItem(e,o,-1)}>
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </button>
          <button class="icon-btn" title=${this._t("ed_move_down")} ?disabled=${o===i-1} @click=${()=>this._moveItem(e,o,1)}>
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </button>
          <button class="icon-btn danger" title=${this._t("ed_remove")} @click=${()=>this._removeItem(e,o)}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>
        ${l?B`
              <div class="item-body">
                <ha-form
                  .hass=${this.hass}
                  .data=${{...r,...t}}
                  .schema=${s}
                  .computeLabel=${this._label}
                  @value-changed=${t=>this._itemChanged(e,o,t)}
                ></ha-form>
              </div>
            `:q}
      </div>
    `}}Et.styles=s`
    :host { display: block; }
    .section { margin-top: 24px; display: flex; flex-direction: column; gap: 8px; }
    .section-title {
      display: flex; align-items: center; gap: 8px;
      font-weight: 500; font-size: 15px; color: var(--primary-text-color);
      --mdc-icon-size: 20px;
    }
    .section-title ha-icon { color: var(--secondary-text-color); }
    .item { border: 1px solid var(--divider-color); border-radius: 12px; overflow: hidden; }
    .item-head { display: flex; align-items: center; gap: 2px; padding: 4px; }
    button {
      font: inherit; color: var(--primary-text-color); background: none; border: none; cursor: pointer;
      border-radius: 8px; --mdc-icon-size: 20px;
    }
    button:hover:not([disabled]) { background: color-mix(in srgb, var(--primary-text-color) 8%, transparent); }
    button[disabled] { opacity: 0.35; cursor: default; }
    .head-main { flex: 1; display: flex; align-items: center; gap: 6px; padding: 8px; text-align: left; min-width: 0; }
    .head-main span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .sc-icon { color: var(--secondary-text-color); }
    .icon-btn { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; }
    .icon-btn.danger ha-icon { color: var(--error-color, #db4437); }
    .item-body { padding: 4px 12px 12px; border-top: 1px solid var(--divider-color); }
    .hint { margin: 8px 0 0; font-size: 13px; color: var(--secondary-text-color); }
    .add {
      display: flex; align-items: center; justify-content: center; gap: 6px;
      padding: 10px; border: 1px dashed var(--divider-color); border-radius: 12px; color: var(--primary-color);
      font-weight: 500;
    }
  `,e([he({attribute:!1})],Et.prototype,"hass",void 0),e([pe()],Et.prototype,"_config",void 0),e([pe()],Et.prototype,"_open",void 0),e([pe()],Et.prototype,"_ready",void 0),customElements.get("home-pulse-card-editor")||customElements.define("home-pulse-card-editor",Et);const Ct={alerts:{icon:"mdi:alert",iconOff:"mdi:shield-check",keys:["alert","alerts_n","alerts_none"]},lights:{icon:"mdi:lightbulb-on",iconOff:"mdi:lightbulb-outline",keys:["light_on","lights_on_n","lights_off_all"]},doors:{icon:"mdi:door-open",iconOff:"mdi:door-closed",keys:["door_open","doors_open","doors_closed"]},windows:{icon:"mdi:window-open-variant",iconOff:"mdi:window-closed-variant",keys:["window_open","windows_open","windows_closed"]},covers:{icon:"mdi:window-shutter-open",iconOff:"mdi:window-shutter",keys:["cover_open","covers_open_n","covers_closed"]},locks:{icon:"mdi:lock-open-variant",iconOff:"mdi:lock",keys:["lock_unlocked","lock_unlocked","locks_locked"]},fans:{icon:"mdi:fan",iconOff:"mdi:fan-off",keys:["fan_on","fans_on_n","fans_off_all"]},switches:{icon:"mdi:power-socket-eu",iconOff:"mdi:power-plug-off-outline",keys:["switch_on","switches_on_n","switches_off_all"]},media:{icon:"mdi:play-circle",iconOff:"mdi:speaker",keys:["media_playing_n","media_playing_n","media_idle"]},climate:{icon:"mdi:thermostat",iconOff:"mdi:thermostat",keys:["climate_on","climate_on_n","climate_off"]},batteries:{icon:"mdi:battery-alert-variant-outline",iconOff:"mdi:battery",keys:["battery_low","batteries_low","batteries_ok"]}},Pt={"":"var(--secondary-text-color)",on:"var(--hpc-amber)",warn:"var(--hpc-orange)",bad:"var(--hpc-red)"},Ot={disarmed:"mdi:shield-off-outline",armed_home:"mdi:shield-home",armed_away:"mdi:shield-lock",armed_night:"mdi:shield-moon",armed_vacation:"mdi:shield-airplane",armed_custom_bypass:"mdi:shield-star",arming:"mdi:shield-sync",pending:"mdi:shield-sync",disarming:"mdi:shield-sync",triggered:"mdi:bell-ring"},Mt={arm_home:"mdi:shield-home",arm_away:"mdi:shield-lock",arm_night:"mdi:shield-moon",arm_vacation:"mdi:shield-airplane",arm_custom_bypass:"mdi:shield-star",disarm:"mdi:shield-off"},zt={sunny:"var(--hpc-sun)",partlycloudy:"var(--hpc-sun)","clear-night":"var(--hpc-moon)",rainy:"var(--hpc-blue)",pouring:"var(--hpc-blue)",lightning:"var(--hpc-orange)","lightning-rainy":"var(--hpc-orange)",snowy:"var(--hpc-cold)","snowy-rainy":"var(--hpc-cold)",hail:"var(--hpc-cold)"},Nt=e=>zt[e]??"var(--secondary-text-color)";function Tt(e){const t="triggered"===e?"var(--hpc-red)":["arming","pending","disarming"].includes(e)?"var(--hpc-orange)":e.startsWith("armed")?"var(--hpc-green)":"var(--hpc-blue)";return`var(--state-alarm_control_panel-${e}-color, ${t})`}class jt extends re{constructor(){super(...arguments),this.layout="default",this.appearance="card",this._popupEntities=[],this._onDialogClosed=()=>{if(this._reopen){const e=this._reopen;this._reopen=void 0,this._openPopup(e)}},this._indexDeps=[],this._persons=[],this._calendars=[],this._watched=new Set,this._checkStatusOverflow=()=>{const e=this.renderRoot.querySelector(".status");e&&e.classList.toggle("overflow",e.scrollLeft+e.clientWidth<e.scrollWidth-4)},this._t=(e,t)=>vt(this.hass,e,t)}static getConfigElement(){return document.createElement("home-pulse-card-editor")}static getStubConfig(){return{shortcuts:[{name:"Lights",icon:"mdi:lightbulb-group",navigation_path:"lights",badge:"lights"},{name:"Climate",icon:"mdi:thermostat",navigation_path:"climate"},{name:"Security",icon:"mdi:shield-half-full",navigation_path:"security"},{name:"Energy",icon:"mdi:lightning-bolt",navigation_path:"/energy"}]}}setConfig(e){if(!e)throw new Error("Invalid configuration");for(const t of["shortcuts","chips","persons","sections","pulse","alarm_modes","exclude_entities"])if(void 0!==e[t]&&!Array.isArray(e[t]))throw new Error(`\`${t}\` must be a list`);for(const t of e.chips??[])if(!t||"object"!=typeof t||!t.entity)throw new Error("Every item in `chips` needs an `entity`");const t=(e.sections??[]).filter(e=>!we.includes(e));if(t.length)throw new Error(`Unknown section(s): ${t.join(", ")}. Use ${we.join(", ")}.`);this._config={...e},this.layout="compact"===e.layout?"compact":"default",this.appearance="flat"===e.appearance?"flat":"card",this._popup=void 0,this._indexDeps=[]}getCardSize(){const e=this._config?.sections??xe;return Math.max(1,e.length+("compact"===this.layout?0:1))}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),this._ticker=window.setInterval(()=>this.requestUpdate(),6e4),window.addEventListener("dialog-closed",this._onDialogClosed)}disconnectedCallback(){super.disconnectedCallback(),this._ticker&&window.clearInterval(this._ticker),window.removeEventListener("dialog-closed",this._onDialogClosed),this._unsubscribeForecast()}_syncForecast(){const e=this.hass,t=this._config?.sections??xe,o=(t.includes("greeting")||t.includes("status"))&&this.isConnected?this._weather:void 0,i=o?Qe(e?.states[o]):void 0,n=o&&i?`${o}|${i}`:void 0;n!==this._forecastFor&&(this._unsubscribeForecast(),n&&e?.connection&&(this._forecastFor=n,this._forecastUnsub=e.connection.subscribeMessage(e=>{this._forecast=Array.isArray(e?.forecast)?e.forecast:void 0,this.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:i,entity_id:o}).catch(()=>{})))}_unsubscribeForecast(){this._forecastUnsub?.then(e=>e?.()),this._forecastUnsub=void 0,this._forecastFor=void 0,this._forecast=void 0}shouldUpdate(e){if(!this._config)return!1;if(e.has("hass")&&this.hass)for(const e of this._tiles?.values()??[])e.hass=this.hass;if(!e.has("hass")||e.size>1)return!0;const t=e.get("hass"),o=this.hass;if(!t||!o)return!0;if(t.entities!==o.entities||t.devices!==o.devices||t.areas!==o.areas||t.user!==o.user||t.locale!==o.locale||t.language!==o.language||t.themes!==o.themes)return!0;for(const e of this._watched)if(t.states[e]!==o.states[e])return!0;return!1}willUpdate(){const e=this.hass,t=this._config;if(!e||!t)return;const o=[e.entities,e.devices,t];this._index&&!o.some((e,t)=>e!==this._indexDeps[t])||(this._index=De(e,t),this._persons=function(e,t){return t.persons?.length?t.persons.filter(t=>e.states[t]):Object.keys(e.states).filter(t=>"person"===Pe(t)&&ze(e,t)).sort(Ne(e))}(e,t),this._weather=Te(e,"weather",t.weather_entity),this._alarm=Te(e,"alarm_control_panel",t.alarm_entity),this._modeEntity=ot(e,t),this._calendars=ct(e,t),this._watched=function(e,t,o,i){const n=new Set(o);for(const e of i)e&&n.add(e);for(const t of e.chips??[])t.entity&&n.add(t.entity);for(const t of e.shortcuts??[])t.entity&&n.add(t.entity),t.badge&&t.badge.includes(".")&&n.add(t.badge);const a=e.sections??xe,s=new Set;if(a.includes("pulse"))for(const t of e.pulse??Ae)s.add(t);if(a.includes("alerts")&&s.add("alerts"),a.includes("nudges")&&!1!==e.nudges)for(const e of We)s.add(e);for(const t of e.shortcuts??[])t.badge&&ke.includes(t.badge)&&s.add(t.badge);for(const e of s)for(const o of t[e]??[])n.add(o);return n}(t,this._index,this._persons,[this._weather,this._alarm,"sun.sun",...at(e,{...t,mode_entity:this._modeEntity??"none"}),...this._calendars,...lt(t).map(e=>e.entity)]),this._indexDeps=o)}updated(){this._syncForecast(),this._checkStatusOverflow();const e=this.renderRoot.querySelector("dialog.hpc-popup");if(e&&!e.open)try{e.showModal()}catch{e.setAttribute("open","")}}render(){const e=this.hass,t=this._config;if(!e||!t)return q;const o=this._index??De(e,t),i=(t.sections??xe).filter(e=>we.includes(e)),n=i.includes("greeting"),a=!i.includes("alarm"),s=i.includes("pulse")?Ie(e,t,o):[],r=(c=e.states["sun.sun"],l=(new Date).getHours(),"below_horizon"===c?.state||"above_horizon"!==c?.state&&(l>=20||l<7));var c,l;const d={greeting:()=>this._renderGreeting(function(e){return e>=5&&e<12?"greet_morning":e>=12&&e<17?"greet_afternoon":e>=17&&e<22?"greet_evening":"greet_night"}((new Date).getHours())),status:()=>this._renderStatus(!n,a),alerts:()=>this._renderAlerts(o),nudges:()=>this._renderNudgeBlock(o),modes:()=>this._renderModes(),alarm:()=>this._renderAlarm(),pulse:()=>this._renderPulse(s),shortcuts:()=>this._renderShortcuts(o)};return B`
      <ha-card class=${r?"night":"day"}>
        <div class="glow"></div>
        <div class="content">${i.map(e=>d[e]())}</div>
      </ha-card>
      ${this._popup?this._renderPopup(Ie(e,{...t,pulse:[this._popup]},o)[0]??this._groupFromIndex(this._popup,o)):q}
    `}_renderGreeting(e){const t=this._config,o=Me(this.hass.user?.name),i=this._t(e),n=t.title?t.title.replace("{name}",o).replace("{greeting}",i):o?this._t("greet_with_name",{greet:i,name:o}):i,a=!1===t.show_date?void 0:new Intl.DateTimeFormat(this.hass.locale?.language||this.hass.language||"en",{weekday:"long",day:"numeric",month:"long"}).format(new Date),s=this._weather?this.hass.states[this._weather]:void 0;return B`
      <div class=${fe({greeting:!0,center:!!t.center_greeting})}>
        <div class="hello-text">
          <h2 class="hello">${n}</h2>
          ${a?B`<div class="date">${a}</div>`:q}
          ${this._renderToday()}
        </div>
        ${s?this._renderWeather(s):q}
      </div>
    `}_renderToday(){const e=this.hass,t=this._config,o=function(e,t,o,i=ct(e,t)){const n=rt(t);if(!n)return[];const a=!1!==n.tomorrow,s=[];for(const t of i){const i=e.states[t],n=i&&ut(i,o,a);n&&s.push(n)}for(const{entity:i,name:n}of lt(t)){const t=e.states[i],r=t&&_t(t,n,o,a);r&&s.push(r)}const r=e=>e.until?0:0===e.day?1:1===e.day?2:3;return s.sort((e,t)=>r(e)-r(t)||(e.start?.getTime()??0)-(t.start?.getTime()??0))}(e,t,new Date,this._calendars);if(!o.length)return q;const i=e.locale?.language||e.language||"en",n=e.locale?.time_format,a=new Intl.DateTimeFormat(i,{hour:"numeric",minute:"2-digit",..."24"===n?{hourCycle:"h23"}:"12"===n?{hourCycle:"h12"}:{}}),s=e=>a.format(e),r=o.map(e=>function(e,t,o){if(e.until)return`${e.title} ${t("today_until",{time:o(e.until)})}`;const i=[e.title];return 1===e.day?i.push(t("today_tomorrow")):0===e.day&&e.dated&&i.push(t("today_today")),e.start&&i.push(o(e.start)),i.join(" ")}(e,this._t,s)).join(" · "),c="object"==typeof t.today&&t.today.tap_action||{action:"more-info"};return B`
      <button
        class="today"
        title=${r}
        @click=${()=>this._fireAction({entity:o[0].entity,tap_action:c},"tap")}
      >
        <ha-icon icon="mdi:calendar-today-outline"></ha-icon><span class="today-text">${r}</span>
      </button>
    `}_renderModes(){const e=nt(this.hass,{...this._config,mode_entity:this._modeEntity??"none"});return e.length?B`
      <div class="modes" role="group">
        ${e.map(e=>this._renderMode(e))}
      </div>
    `:q}_renderMode(e){return B`
      <button
        class=${fe({mode:!0,active:e.active})}
        style=${be({"--c":e.color?Ve(e.color):"var(--hpc-accent)"})}
        aria-pressed=${String(e.active)}
        title=${e.name}
        ${gt({hasHold:!!e.hold_action})}
        @hpc-action=${t=>this._fireAction({entity:e.entity,tap_action:e.tap_action,hold_action:e.hold_action},t.detail.action)}
      >
        <ha-icon .icon=${e.icon}></ha-icon>
        <span class="mode-name">${e.name}</span>
      </button>
    `}_renderStatus(e,t){const o=this.hass,i=this._config,n=this._persons.filter(e=>!1!==i.show_away||je(o.states[e])),a=e&&this._weather?o.states[this._weather]:void 0,s=t&&this._alarm?o.states[this._alarm]:void 0,r=i.chips??[];return n.length||a||s||r.length?B`
      <div class="status" @scroll=${this._checkStatusOverflow}>
        ${a?this._renderWeatherChip(a):q}
        ${s?this._renderAlarmChip(s):q}
        ${n.map(e=>this._renderPerson(o.states[e]))}
        ${r.map(e=>this._renderExtraChip(e))}
      </div>
    `:q}_renderWeather(e){const t=Ze(e),o=Qe(e),i=o&&this._forecastFor?.startsWith(`${e.entity_id}|`)?function(e,t,o=new Date){if(!Array.isArray(e)||!e.length)return;const i=e.map(e=>({i:e,d:new Date(e.datetime)})).filter(({i:e,d:t})=>"number"==typeof e.temperature&&!Number.isNaN(t.getTime())),n=i.filter(({d:e})=>((e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate())(e,o)).map(({i:e})=>e);let a;if(a="daily"===t?n.length?[n[0]]:i.length?[i[0].i]:[]:"twice_daily"===t||n.length>=3?n:[],!a.length)return;const s=a.map(e=>e.temperature),r=a.map(e=>"number"==typeof e.templow?e.templow:"daily"===t?void 0:e.temperature),c=r.filter(e=>"number"==typeof e),l=Math.round(Math.max(...s)),d=c.length?Math.round(Math.min(...c)):void 0;return void 0!==d&&d<l?{high:l,low:d}:{high:l}}(this._forecast,o):void 0,n=i?void 0===i.low?this._t("weather_high",{high:`${i.high}°`}):this._t("weather_range",{high:`${i.high}°`,low:`${i.low}°`}):"";return B`
      <button
        class="weather"
        title=${n?`${this._format(e)} · ${n}`:this._format(e)}
        style=${be({"--c":Nt(e.state)})}
        @click=${()=>this._moreInfo(e.entity_id)}
      >
        <span class="weather-main">
          <ha-icon .icon=${Ke(e.state)}></ha-icon>${t?B`<span class="temp">${t}</span>`:q}
        </span>
        <span class="weather-cond">${this._format(e)}</span>
        ${i?B`<span class="weather-range" aria-label=${n}>
              <span><ha-icon icon="mdi:arrow-up"></ha-icon>${i.high}°</span>
              ${void 0!==i.low?B`<span><ha-icon icon="mdi:arrow-down"></ha-icon>${i.low}°</span>`:q}
            </span>`:q}
      </button>
    `}_renderWeatherChip(e){const t=Ze(e);return B`
      <button class="chip colored" style=${be({"--c":Nt(e.state)})} @click=${()=>this._moreInfo(e.entity_id)}>
        <ha-icon .icon=${Ke(e.state)}></ha-icon>
        <span class="label">${t?B`${t}<span class="muted"> · ${this._format(e)}</span>`:this._format(e)}</span>
      </button>
    `}_renderAlarmChip(e){const t=Re(e,this._config.alarm_modes),o=this.hass.formatEntityState?.(e)??this._t(`alarm_${e.state}`);return B`
      <button
        class=${fe({chip:!0,colored:!0,alarm:!0,loud:"triggered"===t?.tone||"pending"===t?.tone})}
        style=${be({"--c":Tt(e.state)})}
        @click=${()=>this._moreInfo(e.entity_id)}
      >
        <ha-icon .icon=${Ot[e.state]??"mdi:shield-outline"}></ha-icon>
        <span class="label">${o}</span>
      </button>
    `}_renderAlerts(e){const t=this.hass,o=e.alerts.filter(e=>"on"===t.states[e]?.state);return o.length?this._renderAlertBanner({id:"alerts",entities:e.alerts,active:o}):q}_renderPerson(e){if(!e)return q;const t=je(e),o=Me(String(e.attributes.friendly_name??e.entity_id.split(".")[1])),i=e.attributes.entity_picture,n=t?"":"not_home"===e.state?this._t("away"):this._format(e);return B`
      <button
        class=${fe({chip:!0,person:!0,home:t,away:!t})}
        title=${`${e.attributes.friendly_name??o}: ${t?this._t("home"):n}`}
        @click=${()=>this._moreInfo(e.entity_id)}
      >
        <span
          class=${fe({avatar:!0,pic:!!i})}
          style=${be(i?{backgroundImage:`url("${i}")`}:{})}
          >${i?q:o.charAt(0)}</span
        >
        <span class="label">${o}${n?B`<span class="muted"> · ${n}</span>`:q}</span>
      </button>
    `}_renderExtraChip(e){const t=this.hass.states[e.entity];if(!t)return q;const o=this._format(t),i=e.color?Ve(e.color):"var(--secondary-text-color)";return B`
      <button
        class=${fe({chip:!0,colored:!!e.color})}
        style=${be({"--c":i})}
        ${gt({hasHold:!!e.hold_action})}
        @hpc-action=${t=>this._fireAction({entity:e.entity,tap_action:e.tap_action??{action:"more-info"},hold_action:e.hold_action},t.detail.action)}
      >
        ${e.icon?B`<ha-icon .icon=${e.icon}></ha-icon>`:B`<ha-state-icon .hass=${this.hass} .stateObj=${t}></ha-state-icon>`}
        <span class="label">${e.name?B`${e.name}<span class="muted"> · ${o}</span>`:o}</span>
      </button>
    `}_renderAlarm(){if(!this._alarm)return q;const e=this.hass.states[this._alarm],t=Re(e,this._config.alarm_modes);if(!e||!t)return q;const o=this.hass.formatEntityState?.(e)??this._t(`alarm_${e.state}`);return B`
      <div class=${fe({"alarm-row":!0,[t.tone]:!0})} style=${be({"--c":Tt(e.state)})}>
        <div
          class="alarm-main"
          role="button"
          tabindex="0"
          @click=${()=>this._moreInfo(e.entity_id)}
          @keydown=${t=>("Enter"===t.key||" "===t.key)&&this._moreInfo(e.entity_id)}
        >
          <div class="alarm-icon"><ha-icon .icon=${Ot[e.state]??"mdi:shield-outline"}></ha-icon></div>
          <div class="alarm-titles">
            <span class="alarm-state">${o}</span>
            <span class="alarm-sub">${bt(this.hass,e.last_changed)}</span>
          </div>
        </div>
        <div class="alarm-buttons">${t.buttons.map(t=>this._renderAlarmButton(t,e.entity_id))}</div>
      </div>
    `}_renderAlarmButton(e,t){const o=this._t(`alarm_btn_${e.mode}`),i="disarm"===e.mode?"disarmed":`armed_${e.mode.replace("arm_","")}`;return B`
      <button
        class="alarm-btn"
        style=${be({"--b":Tt(i)})}
        title=${o}
        aria-label=${o}
        @click=${()=>e.needsCode?this._moreInfo(t):this._fireAction({tap_action:{action:"perform-action",perform_action:e.service,target:{entity_id:t}}},"tap")}
      >
        <ha-icon .icon=${Mt[e.mode]}></ha-icon><span class="label">${o}</span>
      </button>
    `}_renderPulse(e){const t=this._config;this.hass;const o=e.filter(e=>e.active.length>0||t.show_inactive),i=!o.some(e=>e.active.length);return B`
      <div class="pulse">
        <div class="chips">
          ${i?B`<span class="chip calm"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${this._t("all_quiet")}</span>`:q}
          ${o.map(e=>this._renderPulseChip(e))}
        </div>
      </div>
    `}_renderAlertBanner(e){const t=1===e.active.length?this.hass.states[e.active[0]]:void 0,o=t?String(t.attributes.friendly_name??t.entity_id):this._t("alerts_n",{n:e.active.length});return B`
      <div class="banner alert" role="button" tabindex="0" @click=${()=>this._groupClick(e)}>
        <ha-icon class="lead" icon="mdi:alert"></ha-icon>
        <span class="text">${o}</span>
      </div>
    `}_renderNudgeBlock(e){if(!1===this._config.nudges)return q;const t=this.hass,o=Ie(t,{...this._config,pulse:We},e),i=function(e,t,o,i){if(!t.length||t.some(t=>je(e.states[t])))return[];const n=[],a=e=>o.find(t=>t.id===e)?.active??[];for(const e of["doors","windows"]){const t=a(e);t.length&&n.push({id:`away_${e}`,n:t.length,entities:t,popup:e})}const s=a("locks");s.length&&n.push({id:"away_locks",n:s.length,entities:s,action:{action:"perform-action",perform_action:"lock.lock",target:{entity_id:s}}});const r=a("lights");r.length&&n.push({id:"away_lights",n:r.length,entities:r,action:{action:"perform-action",perform_action:"light.turn_off",target:{entity_id:r}}});const c=a("media");c.length&&n.push({id:"away_media",n:c.length,entities:c,action:{action:"perform-action",perform_action:"media_player.media_pause",target:{entity_id:c}}});const l=i?Re(e.states[i]):void 0,d=l?.buttons.find(e=>"arm_away"===e.mode);return"disarmed"===l?.tone&&d&&n.push({id:"away_alarm",n:1,entities:[i],action:d.needsCode?{action:"more-info",entity:i}:{action:"perform-action",perform_action:d.service,target:{entity_id:i}}}),n}(t,this._persons,o,this._alarm);return i.length?this._renderNudges(i):q}_renderNudges(e){const t={away_doors:["door_open","doors_open"],away_windows:["window_open","windows_open"],away_locks:["nudge_unlocked","nudge_unlocked_n"],away_lights:["light_on","lights_on_n"],away_media:["media_playing_n","media_playing_n"],away_alarm:["nudge_away_alarm","nudge_away_alarm"]},o=e.map(e=>this._t(t[e.id][1===e.n?0:1],{n:e.n})),i={away_doors:{key:"nudge_fix_doors",icon:"mdi:door-open"},away_windows:{key:"nudge_fix_windows",icon:"mdi:window-open-variant"},away_locks:{key:"nudge_fix_locks",icon:"mdi:lock"},away_lights:{key:"nudge_fix_lights",icon:"mdi:lightbulb-group-off-outline"},away_media:{key:"nudge_fix_media",icon:"mdi:pause"},away_alarm:{key:"nudge_fix_alarm",icon:"mdi:shield-lock"}};return B`
      <div class="banner nudge">
        <ha-icon class="lead" icon="mdi:home-export-outline"></ha-icon>
        <div class="nudge-body">
          <div class="nudge-title">${this._t("nudge_nobody_home")}</div>
          <div class="nudge-what">${o.join(" · ")}</div>
          <div class="nudge-fixes">
            ${e.map(e=>B`<button
                class="fix"
                @click=${()=>e.popup?this._groupClick({id:e.popup,entities:e.entities,active:e.entities}):this._fireAction({entity:e.entities[0],tap_action:e.action},"tap")}
              >
                <ha-icon .icon=${i[e.id].icon}></ha-icon>${this._t(i[e.id].key)}
              </button>`)}
          </div>
        </div>
      </div>
    `}_renderPulseChip(e){const t=Ct[e.id],o=e.active.length,i=this._t(0===o?t.keys[2]:1===o?t.keys[0]:t.keys[1],{n:o});return B`
      <button
        class=${fe({chip:!0,active:o>0,idle:0===o})}
        style=${be({"--c":Pt[Ue(e.id)]})}
        @click=${()=>this._groupClick(e)}
      >
        <ha-icon .icon=${o?t.icon:t.iconOff}></ha-icon>
        <span class="label">${i}</span>
      </button>
    `}_groupColor(e){const t=Ue(e);return t?Pt[t]:"var(--hpc-accent)"}_renderShortcuts(e){const t=this._config,o=t.shortcuts??[];if(!o.length)return q;const i=Math.min(8,Math.max(1,Math.round(t.columns??4)));let n=0;return B`
      <div class="shortcuts">
        ${function(e,t){if(e<=0)return[];const o=Math.max(1,Math.floor(t)),i=Math.ceil(e/o),n=Math.floor(e/i),a=e%i;return Array.from({length:i},(e,t)=>n+(t<a?1:0))}(o.length,i).map(t=>{const i=o.slice(n,n+=t);return B`<div class="shortcut-row">${i.map(t=>this._renderShortcut(t,e))}</div>`})}
      </div>
    `}_renderShortcut(e,t){const o=this.hass,i=function(e,t,o,i=20){const n=t.badge;if(!n)return;if(ke.includes(n)){const t=o[n].filter(t=>He(n,e.states[t],i)).length;return t?String(t):void 0}const a=e.states[n];if(!a||"unavailable"===a.state||"unknown"===a.state)return;if("0"===a.state||"off"===a.state)return;const s=a.attributes.unit_of_measurement;return"%"===s?`${a.state}%`:"°C"===s||"°F"===s?`${a.state}°`:a.state}(o,e,t,this._config.battery_threshold??20),n=e.entity?o.states[e.entity]:void 0,a=e.name??(n?String(n.attributes.friendly_name??""):e.navigation_path??""),s=!1!==this._config.show_names&&!!a;return B`
      <button
        class=${fe({shortcut:!0,active:Ge(o,e),named:s})}
        style=${be({"--c":e.color?Ve(e.color):"var(--hpc-accent)"})}
        title=${a}
        aria-label=${i?`${a} (${i})`:a}
        ${gt({hasHold:!!e.hold_action,hasDoubleTap:!!e.double_tap_action})}
        @hpc-action=${t=>this._shortcutAction(e,t.detail.action)}
      >
        ${e.icon||!n?B`<ha-icon .icon=${e.icon??"mdi:gesture-tap-button"}></ha-icon>`:B`<ha-state-icon .hass=${o} .stateObj=${n}></ha-state-icon>`}
        ${s?B`<span class="name">${a}</span>`:q}
        ${i?B`<span
              class=${fe({badge:!0,toned:!!Ye(e)})}
              style=${be(Ye(e)?{"--t":Pt[Ye(e)]}:{})}
              >${i}</span
            >`:q}
      </button>
    `}_shortcutAction(e,t){this._fireAction({entity:e.entity,tap_action:Fe(e,window.location.pathname),hold_action:e.hold_action,double_tap_action:e.double_tap_action},t)}_groupClick(e){const t=e.active.length?e.active:e.entities;1===t.length?this._moreInfo(t[0]):this._openPopup(e.id)}_fireAction(e,t){const o=e[`${t}_action`];o&&"none"!==o.action&&this.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:e,action:t}}))}_moreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}}))}_format(e){if(this.hass?.formatEntityState)return this.hass.formatEntityState(e);const t=e.attributes.unit_of_measurement,o=e.state.replace(/[_-]/g," ");return t?`${e.state} ${t}`:o.charAt(0).toUpperCase()+o.slice(1)}_groupFromIndex(e,t){return{id:e,entities:t[e]??[],active:[]}}async _openPopup(e){const t=this.hass,o=Ie(t,{...this._config,pulse:[e]},this._index??De(t,this._config))[0];if(!o)return;let i;this._popupEntities=o.active.length?[...o.active]:[...o.entities],this._popup=e,this._tiles=void 0;try{i=await(window.loadCardHelpers?.())}catch{i=void 0}if(this._popup!==e)return;if(!i)return void(this._tiles=null);const n=new Map;await Promise.all(this._popupEntities.map(async e=>{const t=await i.createCardElement(this._tileConfig(e));t.hass=this.hass,n.set(e,t)})),this._popup===e&&(this._tiles=n)}_tileConfig(e){const t=this.hass.states[e],o=e.split(".")[0],i=[];if("light"===o){(t?.attributes.supported_color_modes??[]).some(e=>"onoff"!==e)&&i.push({type:"light-brightness"})}else"cover"===o?i.push({type:"cover-open-close"}):"climate"===o?i.push({type:"target-temperature"}):"media_player"===o&&i.push({type:"media-player-playback"});return{type:"tile",entity:e,...i.length?{features:i,features_position:"light"===o||"climate"===o?"inline":"bottom"}:{}}}_closePopup(){this.renderRoot.querySelector("dialog.hpc-popup")?.close()}_onPopupClosed(){this._popup=void 0,this._tiles=void 0}_onPopupClick(e){e.target===e.currentTarget&&this._closePopup()}_onPopupMoreInfo(){this._reopen=this._popup,this._closePopup()}_bulkActions(e){if(!e.active.length)return[];const t=this._t;switch(e.id){case"lights":return[{label:t("turn_all_off"),icon:"mdi:lightbulb-group-off-outline",service:"light.turn_off"}];case"switches":return[{label:t("turn_all_off"),icon:"mdi:power-plug-off-outline",service:"switch.turn_off"}];case"fans":return[{label:t("turn_all_off"),icon:"mdi:fan-off",service:"fan.turn_off"}];case"covers":return[{label:t("close_all"),icon:"mdi:arrow-down",service:"cover.close_cover"}];case"locks":return[{label:t("lock_all"),icon:"mdi:lock",service:"lock.lock"}];case"media":return[{label:t("pause_all"),icon:"mdi:pause",service:"media_player.media_pause"}];default:return[]}}_renderPopup(e){const t=this.hass,o=Ct[e.id],i=e.active.length>0,n=this._t(`g_${e.id}`),a=this._t("n_of_m_active",{n:e.active.length,m:e.entities.length}),s=this._bulkActions(e),r=function(e,t){const o=new Map;for(const i of t){const t=Le(e,i);o.has(t)||o.set(t,[]),o.get(t).push(i)}return[...o.entries()].sort(([e],[t])=>void 0===e?1:void 0===t?-1:e.localeCompare(t)).map(([e,t])=>({area:e,entities:t}))}(t,this._popupEntities);return B`
      <dialog
        class="hpc-popup"
        aria-label=${n}
        style=${be({"--c":this._groupColor(e.id)})}
        @close=${this._onPopupClosed}
        @click=${this._onPopupClick}
        @hass-more-info=${this._onPopupMoreInfo}
      >
        <div class="popup-surface">
          <header class="popup-head">
            <div class=${fe({"popup-icon":!0,active:i})}>
              <ha-icon .icon=${i?o.icon:o.iconOff}></ha-icon>
            </div>
            <div class="popup-titles">
              <div class="popup-title">${n}</div>
              <div class="popup-sub">${a}</div>
            </div>
            <button class="popup-close" aria-label=${this._t("close")} @click=${()=>this._closePopup()}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </header>
          ${s.length?B`<div class="popup-bulk">
                ${s.map(t=>B`<button
                    class="bulk"
                    @click=${()=>this._fireAction({tap_action:{action:"perform-action",perform_action:t.service,target:{entity_id:[...e.active]}}},"tap")}
                  >
                    <ha-icon .icon=${t.icon}></ha-icon>${t.label}
                  </button>`)}
              </div>`:q}
          <div class="popup-body">
            ${void 0===this._tiles?q:r.map(t=>B`
                    ${r.length>1||t.area?B`<div class="area-head">${t.area??this._t("no_area")}</div>`:q}
                    <div class="popup-grid">
                      ${t.entities.map(t=>this._tiles?this._tiles.get(t)??q:this._miniTile(t,e.active.includes(t),this._groupColor(e.id)))}
                    </div>
                  `)}
          </div>
        </div>
      </dialog>
    `}_miniTile(e,t,o){const i=this.hass.states[e];return i?B`
      <div
        class=${fe({"mini-tile":!0,active:t})}
        style=${be({"--c":o})}
        role="button"
        tabindex="0"
        @click=${()=>this._moreInfo(e)}
      >
        <div class="mt-icon"><ha-state-icon .hass=${this.hass} .stateObj=${i}></ha-state-icon></div>
        <div class="mt-text">
          <div class="mt-name">${i.attributes.friendly_name??e}</div>
          <div class="mt-state">${this._format(i)} · ${bt(this.hass,i.last_changed)}</div>
        </div>
      </div>
    `:q}}jt.styles=[wt,xt],e([he({attribute:!1})],jt.prototype,"hass",void 0),e([he({reflect:!0})],jt.prototype,"layout",void 0),e([he({reflect:!0})],jt.prototype,"appearance",void 0),e([pe()],jt.prototype,"_config",void 0),e([pe()],jt.prototype,"_popup",void 0),e([pe()],jt.prototype,"_tiles",void 0),customElements.get("home-pulse-card")||(customElements.define("home-pulse-card",jt),window.customCards=window.customCards||[],window.customCards.push({type:"home-pulse-card",name:"Home Pulse Card",description:"Greeting, people, weather, alarm, a whole-home pulse and shortcuts to your other views.",preview:!0}),console.info("%c HOME-PULSE-CARD %c v0.1.0 ","color:#fff;background:#03a9f4;font-weight:700;border-radius:4px 0 0 4px;padding:2px 4px","color:#03a9f4;background:#fff0;font-weight:700;padding:2px 4px"));export{jt as HomePulseCard};
