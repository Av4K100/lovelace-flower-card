/*! For license information please see flower-card.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;class s{constructor(t,e,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=a.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&a.set(i,t))}return t}toString(){return this.cssText}}const n=(i,a)=>{if(e)i.adoptedStyleSheets=a.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of a){const a=document.createElement("style"),s=t.litNonce;void 0!==s&&a.setAttribute("nonce",s),a.textContent=e.cssText,i.appendChild(a)}},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:r,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,g=globalThis,u=g.trustedTypes,m=u?u.emptyScript:"",_=g.reactiveElementPolyfillSupport,y=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!r(t,e),b={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,e);void 0!==a&&l(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){const{get:a,set:s}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:a,set(e){const n=a?.call(this);s?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(void 0!==a&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(a):this.setAttribute(a,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,a=i._$Eh.get(t);if(void 0!==a&&this._$Em!==a){const t=i.getPropertyOptions(a),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=a;const n=s.fromAttribute(e,t.type);this[a]=n??this._$Ej?.get(a)??n,this._$Em=null}}requestUpdate(t,e,i,a=!1,s){if(void 0!==t){const n=this.constructor;if(!1===a&&(s=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??v)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:s},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==s||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===a&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,a=this[e];!0!==t||this._$AL.has(e)||void 0===a||this.C(e,void 0,i,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,_?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,x=t=>t,A=$.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,M="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+E,C=`<${D}>`,N=document,L=()=>N.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,I="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,T=/>/g,P=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,H=/"/g,R=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),F=B(1),W=(B(2),B(3),Symbol.for("lit-noChange")),Q=Symbol.for("lit-nothing"),V=new WeakMap,Z=N.createTreeWalker(N,129);function Y(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const q=(t,e)=>{const i=t.length-1,a=[];let s,n=2===e?"<svg>":3===e?"<math>":"",o=j;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===j?"!--"===l[1]?o=U:void 0!==l[1]?o=T:void 0!==l[2]?(R.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=P):void 0!==l[3]&&(o=P):o===P?">"===l[0]?(o=s??j,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,r=l[1],o=void 0===l[3]?P:'"'===l[3]?H:z):o===H||o===z?o=P:o===U||o===T?o=j:(o=P,s=void 0);const h=o===P&&t[e+1].startsWith("/>")?" ":"";n+=o===j?i+C:c>=0?(a.push(r),i.slice(0,c)+M+i.slice(c)+E+h):i+E+(-2===c?e:h)}return[Y(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),a]};class X{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let s=0,n=0;const o=t.length-1,r=this.parts,[l,c]=q(t,e);if(this.el=X.createElement(l,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=Z.nextNode())&&r.length<o;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(M)){const e=c[n++],i=a.getAttribute(t).split(E),o=/([.?@])?(.*)/.exec(e);r.push({type:1,index:s,name:o[2],strings:i,ctor:"."===o[1]?et:"?"===o[1]?it:"@"===o[1]?at:tt}),a.removeAttribute(t)}else t.startsWith(E)&&(r.push({type:6,index:s}),a.removeAttribute(t));if(R.test(a.tagName)){const t=a.textContent.split(E),e=t.length-1;if(e>0){a.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)a.append(t[i],L()),Z.nextNode(),r.push({type:2,index:++s});a.append(t[e],L())}}}else if(8===a.nodeType)if(a.data===D)r.push({type:2,index:s});else{let t=-1;for(;-1!==(t=a.data.indexOf(E,t+1));)r.push({type:7,index:s}),t+=E.length-1}s++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,a){if(e===W)return e;let s=void 0!==a?i._$Co?.[a]:i._$Cl;const n=k(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,a)),void 0!==a?(i._$Co??=[])[a]=s:i._$Cl=s),void 0!==s&&(e=J(t,s._$AS(t,e.values),s,a)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,a=(t?.creationScope??N).importNode(e,!0);Z.currentNode=a;let s=Z.nextNode(),n=0,o=0,r=i[0];for(;void 0!==r;){if(n===r.index){let e;2===r.type?e=new K(s,s.nextSibling,this,t):1===r.type?e=new r.ctor(s,r.name,r.strings,this,t):6===r.type&&(e=new st(s,this,t)),this._$AV.push(e),r=i[++o]}n!==r?.index&&(s=Z.nextNode(),n++)}return Z.currentNode=N,a}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),k(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,a="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(e);else{const t=new G(a,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new X(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,a=0;for(const s of t)a===e.length?e.push(i=new K(this.O(L()),this.O(L()),this,this.options)):i=e[a],i._$AI(s),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,s){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(t,e=this,i,a){const s=this.strings;let n=!1;if(void 0===s)t=J(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const a=t;let o,r;for(t=s[0],o=0;o<s.length-1;o++)r=J(this,a[i+o],e,o),r===W&&(r=this._$AH[o]),n||=!k(r)||r!==this._$AH[o],r===Q?t=Q:t!==Q&&(t+=(r??"")+s[o+1]),this._$AH[o]=r}n&&!a&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class at extends tt{constructor(t,e,i,a,s){super(t,e,i,a,s),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??Q)===W)return;const i=this._$AH,a=t===Q&&i!==Q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==Q&&(i===Q||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const nt=$.litHtmlPolyfillSupport;nt?.(X,K),($.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;class rt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const a=i?.renderBefore??e;let s=a._$litPart$;if(void 0===s){const t=i?.renderBefore??null;a._$litPart$=s=new K(e.insertBefore(L(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}rt._$litElement$=!0,rt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:rt});const lt=ot.litElementPolyfillSupport;lt?.({LitElement:rt}),(ot.litElementVersions??=[]).push("4.2.2");const ct={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:v},dt=(t=ct,e,i)=>{const{kind:a,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===a){const{name:a}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(a,s,t,!0,i)},init(e){return void 0!==e&&this.C(a,void 0,t,e),e}}}if("setter"===a){const{name:a}=i;return function(i){const s=this[a];e.call(this,i),this.requestUpdate(a,s,t,!0,i)}}throw Error("Unsupported decorator location: "+a)};function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const a=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),a?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function pt(t){return ht({...t,state:!0,attribute:!1})}const gt=((t,...e)=>{const a=1===t.length?t[0]:e.reduce((e,i,a)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[a+1],t[0]);return new s(a,t,i)})`
.card-margin-top {
  margin-top: 32px;
}
.attributes {
  display: flex;
  white-space: nowrap;
  padding: 8px;
}
.attributes.width-100 {
  padding: 2px;

}
.attribute ha-icon {
  margin-right: 10px;
  margin-left: 5px;
}
.attribute {
  white-space: nowrap;
  display: flex;  
  align-items: center;
  width: 50%;
}
#battery {
  float: right;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: 16px;
  margin-left: 8px;
}
/* Fork: badges come before the name and float right, so a long name wraps onto
   two lines beside them instead of running underneath. The header grows to fit. */
ha-card > .header > #battery {
  margin-top: 14px;
}
ha-card > .header-compact > #battery {
  margin-top: 6px;
}
.header {
  padding-top: 8px;
  height: 72px;
}
/* Fork: only the card's own top header grows to fit a two-line name. Bar rows also
   use the .header class, so these rules are limited to ha-card's direct child. */
ha-card > .header {
  min-height: 72px;
  height: auto;
}
ha-card > .header::after {
  content: "";
  display: block;
  clear: both;
}
ha-card > .header:not(.no-image) > #name,
ha-card > .header:not(.no-image) > #species {
  margin-left: 120px;
}
/* overflow: hidden would make the species line avoid the floated badges and drop
   below them; let it wrap beside them instead. */
ha-card > .header > #species {
  overflow: visible;
  white-space: normal;
}
.header-compact {
  padding-top: 4px;
  height: 55px;
}
.attribute .header, .attribute .header-compact {
  height: auto;
  padding-top: 0px;
}
.header > img {
  border-radius: 50%;
  width: 88px;
  height: 88px;
  object-fit: cover;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: -32px;
  float: left;
  box-shadow: var( --ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) );
}
.header-compact > img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 0px;
  float: left;
  box-shadow: var( --ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) );
}
.header.no-image {
  height: auto;
  padding: 16px;
}
.header.no-image + .divider {
  margin-top: 0;
}
.header-compact.no-image {
  height: auto;
  padding: 8px 16px;
}
.header.no-image > #name,
.header-compact.no-image > #name {
  margin-top: 0;
  margin-left: 0;
}
.header > #name {
  font-weight: bold;
  width: 100%;
  margin-top: 16px;
  display: block;
}
ha-card > .header > #name {
  width: auto;
  line-height: 1.25;
  overflow-wrap: anywhere;
}
.header-compact > #name {
  font-weight: bold;
  width: 100%;
  margin-top: 8px;
  display: block;
  white-space: nowrap;
}
#name ha-icon {
    color: rgb(240, 163, 163);
}
.header > #species {
  color: #8c96a5;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header-compact > #species {
  line-height: 85%;
  color: #8c96a5;
  font-size: 0.8em;
  margin-top: 0px;
  margin-right: 4px;
  opacity: 0.4;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.meter {
  height: 8px;
  background-color: var(--primary-background-color);
  border-radius: 2px;
  display: inline-grid;
  overflow: hidden;
}
.meter.red {
  flex-grow: 1;
  margin-right: 5px;
  max-width: 5%
}
.meter.green {
  flex-grow: 10;
  margin-right: 5px;
  max-width: 40%
}
.attribute.tooltip.width-100 .meter.green {
  max-width: 90%;
}
.attribute.tooltip.width-100.has-units .meter.green {
  max-width: 70%;
}
.meter > span {
  grid-row: 1;
  grid-column: 1;
  height: 100%;
}
.meter > .good {
  background-color: rgba(43,194,83,1);
}
.meter > .bad {
  background-color: rgba(240,163,163);
}
.meter > .unavailable {
  background-color: rgba(158,158,158,1);
}
.divider {
  height: 1px;
  background-color: #727272;
  opacity: 0.25;
  margin-left: 8px;
  margin-right: 8px;
}
.tooltip {
  position: relative;
}
.tooltip .tip {
  display: none;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  padding: 6px 10px;
  top: 3.3em;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-180%);
          transform: translateX(-50%) translateY(-180%);
  background: grey;
  color: white;
  white-space: nowrap;
  z-index: 2;
  border-radius: 2px;
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
}
.battery.tooltip .tip {
  top: 2em;
}
.extra-badge {
  display: inline-block;
  margin-right: 8px;
  cursor: pointer;
}
.extra-badge .badge-text {
  font-size: 0.9em;
  margin-left: 2px;
  vertical-align: middle;
}
.extra-badge.tooltip .tip {
  top: 2em;
}
.extra-badge.two-line {
  white-space: nowrap;
}
.extra-badge.two-line .badge-text {
  display: inline-flex;
  flex-direction: column;
  line-height: 1.15;
}
.extra-badge .badge-next {
  font-size: 0.8em;
  opacity: 0.7;
}
.extra-badge .badge-next.today {
  color: #FFA726;
  opacity: 1;
}
.extra-badge .badge-next.late {
  color: #EF5350;
  opacity: 1;
}
.extra-badge .badge-due.today {
  color: #FFA726;
}
.extra-badge .badge-due.late {
  color: #EF5350;
}
.extra-badge .badge-last {
  font-size: 0.8em;
  opacity: 0.7;
}
.tooltip:hover .tip, .tooltip:active .tip {
  display: block;
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateX(-50%) translateY(-200%);
          transform: translateX(-50%) translateY(-200%);
}
.width-100 {
  width: 100%;
  margin-bottom: 3px;
  margin-right: 5px;
}
@media (max-width: 600px) {
  .header > .unit {
    display: none;
  }
}
.care-info {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.care-item {
  display: flex;
  flex-direction: column;
}
.care-heading {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  margin-bottom: 2px;
}
.care-heading ha-icon {
  color: var(--secondary-text-color);
}
.care-text {
  white-space: normal;
  overflow-wrap: break-word;
  line-height: 1.4;
  color: var(--secondary-text-color);
}
.care-info--dialog {
  padding: 4px 4px 8px;
}
.care-info-empty {
  padding: 8px 4px;
  color: var(--secondary-text-color);
}
.has-lightbox {
  cursor: pointer;
}
.image-dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image-dialog img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}
.image-dialog-caption {
  margin-top: 8px;
  text-align: center;
  color: var(--primary-text-color);
  font-weight: 500;
}
`;var ut;!function(t){t.Full="full",t.Compact="compact"}(ut||(ut={}));const mt={en:JSON.parse('{"moisture":"Soil moisture","conductivity":"Conductivity","temperature":"Temperature","illuminance":"Illuminance","humidity":"Air humidity","dli":"Daily light integral","dli_24h":"DLI (24h rolling)","co2":"CO2","soil_temperature":"Soil temperature","vpd":"Vapour pressure deficit","care":"Care","care_watering":"Watering","care_sunlight":"Sunlight","care_soil":"Soil","care_pruning":"Pruning","care_fertilization":"Fertilization","no_care_info":"No care information available.","settings_bars":"Bars","settings_care_info":"Care Info","settings_appearance":"Appearance","settings_entity":"Entity","settings_display_name":"Display Name","settings_display_type":"Display Type","settings_image_entity":"Picture from entity (e.g. Planta image)","settings_battery_sensor":"Battery Sensor","settings_show_bars":"Show Bars","settings_show_care_info":"Show Care Info","settings_hide_species":"Hide Species","settings_hide_image":"Hide Image","settings_hide_units":"Hide Units","settings_full":"Full","settings_compact":"Compact","badge_today":"today","badge_days_ago":"{days} d ago","badge_in_days":"in {days} d","badge_next_in":"next in {days} d","badge_due_today":"due today","badge_days_late":"{days} d late","badge_last":"last {value}"}'),de:JSON.parse('{"moisture":"Bodenfeuchtigkeit","conductivity":"Leitfähigkeit","temperature":"Temperatur","illuminance":"Beleuchtungsstärke","humidity":"Luftfeuchtigkeit","dli":"Tägliches Lichtintegral","dli_24h":"DLI (24h rollierend)","co2":"CO2","soil_temperature":"Bodentemperatur","vpd":"Dampfdruckdefizit","care":"Pflege","care_watering":"Bewässerung","care_sunlight":"Sonnenlicht","care_soil":"Erde","care_pruning":"Rückschnitt","care_fertilization":"Düngung","no_care_info":"Keine Pflegeinformationen verfügbar.","settings_bars":"Balken","settings_care_info":"Pflegeinfo","settings_appearance":"Darstellung","settings_entity":"Entität","settings_display_name":"Anzeigename","settings_display_type":"Darstellungstyp","settings_battery_sensor":"Batteriesensor","settings_show_bars":"Balken anzeigen","settings_show_care_info":"Pflegeinfos anzeigen","settings_hide_species":"Spezies ausblenden","settings_hide_image":"Bild ausblenden","settings_hide_units":"Einheiten ausblenden","settings_full":"Voll","settings_compact":"Kompakt","badge_today":"heute","badge_days_ago":"vor {days} T.","badge_in_days":"in {days} T."}'),nl:JSON.parse('{"moisture":"Bodemvochtigheid","conductivity":"Geleidbaarheid","temperature":"Temperatuur","illuminance":"Verlichtingssterkte","humidity":"Luchtvochtigheid","dli":"Dagelijkse lichtintegraal","dli_24h":"DLI (24u voortschrijdend)","co2":"CO2","soil_temperature":"Bodemtemperatuur","vpd":"Dampdrukdeficit","care":"Verzorging","care_watering":"Water geven","care_sunlight":"Zonlicht","care_soil":"Grond","care_pruning":"Snoeien","care_fertilization":"Bemesting","no_care_info":"Geen verzorgingsinformatie beschikbaar.","settings_bars":"Balken","settings_care_info":"Verzorgingsinfo","settings_appearance":"Weergave","settings_entity":"Entiteit","settings_display_name":"Weergavenaam","settings_display_type":"Weergavetype","settings_battery_sensor":"Batterijsensor","settings_show_bars":"Balken tonen","settings_show_care_info":"Verzorgingsinfo tonen","settings_hide_species":"Soortnaam verbergen","settings_hide_image":"Afbeelding verbergen","settings_hide_units":"Eenheden verbergen","settings_full":"Volledig","settings_compact":"Compact","badge_today":"vandaag","badge_days_ago":"{days} d geleden","badge_in_days":"over {days} d"}')},_t=(t,e="en")=>{var i;return(null===(i=null==t?void 0:t.locale)||void 0===i?void 0:i.language)||(null==t?void 0:t.language)||e},yt=(t,e)=>{var i;const a=_t(t).toLowerCase().replace("_","-").split("-")[0];return(null===(i=mt[a])||void 0===i?void 0:i[e])||mt.en[e]||e},ft="flower-card",vt=["moisture","conductivity","temperature","illuminance","humidity","dli"],bt=(t="en")=>[{label:yt({language:t},"moisture"),value:"moisture"},{label:yt({language:t},"conductivity"),value:"conductivity"},{label:yt({language:t},"temperature"),value:"temperature"},{label:yt({language:t},"illuminance"),value:"illuminance"},{label:yt({language:t},"humidity"),value:"humidity"},{label:yt({language:t},"dli"),value:"dli"},{label:yt({language:t},"dli_24h"),value:"dli_24h"},{label:yt({language:t},"co2"),value:"co2"},{label:yt({language:t},"soil_temperature"),value:"soil_temperature"},{label:yt({language:t},"vpd"),value:"vpd"}],wt=(bt("en"),(t="en")=>[{label:yt({language:t},"care_watering"),value:"care_watering"},{label:yt({language:t},"care_sunlight"),value:"care_sunlight"},{label:yt({language:t},"care_soil"),value:"care_soil"},{label:yt({language:t},"care_pruning"),value:"care_pruning"},{label:yt({language:t},"care_fertilization"),value:"care_fertilization"}]),$t=wt("en"),xt={care_watering:"mdi:watering-can-outline",care_sunlight:"mdi:white-balance-sunny",care_soil:"mdi:shovel",care_pruning:"mdi:content-cut",care_fertilization:"mdi:bottle-tonic-outline"};var At,St;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(At||(At={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(St||(St={})),new Set(["fan","input_boolean","light","switch","group","automation"]);const Mt=(t,e,i,a)=>{a=a||{},i=i??{};const s=new Event(e,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return s.detail=i,t.dispatchEvent(s),s};new Set(["call-service","divider","section","weblink","cast","select"]);const Et=(t,e)=>{Mt(t,"hass-more-info",{entityId:e},{bubbles:!1,composed:!0})},Dt=t=>{var e;return null!==(e=null==t?void 0:t.startsWith("media-source://"))&&void 0!==e&&e},Ct=t=>{if(!t)return!1;const[e,i]=t.split(".").map(Number);return e>2025||2025===e&&i>=11},Nt=(t,e,i)=>{var a;if("string"==typeof i&&i)return i;const s=t.formatEntityName;return"function"!=typeof s?e.attributes.friendly_name||e.entity_id:"object"==typeof i&&null!==i&&Ct(null===(a=t.config)||void 0===a?void 0:a.version)?s(e,i):s(e)},Lt=(t,e=new Date)=>{if(null==t||""===t)return null;const i=t instanceof Date?t:new Date(String(t));if(isNaN(i.getTime()))return null;const a=t=>new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime();return Math.round((a(e)-a(i))/864e5)},kt=(t,e,i="en")=>t&&e&&0!==e.length?wt(i).filter(t=>e.includes(t.value)).map(e=>({key:e.value,label:e.label,icon:xt[e.value],text:t[e.value]})).filter(t=>"string"==typeof t.text&&""!==t.text.trim()):[],Ot=t=>F`
    ${t.map(t=>F`
        <div class="care-item">
            <div class="care-heading">
                <ha-icon .icon="${t.icon}"></ha-icon>
                <span>${t.label}</span>
            </div>
            <div class="care-text">${t.text}</div>
        </div>
    `)}
`,It=t=>{var e;return null!==(e=t.fields)&&void 0!==e?e:$t.map(t=>t.value)},jt=(t,e)=>{var i,a;if((t=>"care_info"===t.type)(e))return((t,e)=>{const{icon:i,color:a,tip:s}=((t,e="en")=>{var i,a,s;return{icon:null!==(i=t.icon)&&void 0!==i?i:"mdi:sprout",color:null!==(a=t.color)&&void 0!==a?a:"var(--secondary-text-color)",tip:null!==(s=t.title)&&void 0!==s?s:yt({language:e},"care")}})(e,_t(t._hass));return F`
        <div class="extra-badge tooltip" @click="${i=>{i.stopPropagation(),t.openCareDialog(e)}}">
            <div class="tip" style="text-align:center;">${s}</div>
            <ha-icon .icon="${i}" style="color: ${a}"></ha-icon>
        </div>
    `})(t,e);if(e.text){const t="none"===(null===(i=e.icon)||void 0===i?void 0:i.toLowerCase()),a=e.color||"var(--secondary-text-color)";if(t&&e.show_state)return F`
                <div class="extra-badge tooltip">
                    <div class="tip" style="text-align:center;">${e.text}</div>
                    <span class="badge-text" style="color: ${a}">${e.text}</span>
                </div>
            `;const s=t?"":e.icon||"mdi:information";return F`
            <div class="extra-badge tooltip">
                <div class="tip" style="text-align:center;">${e.text}</div>
                ${t?"":F`<ha-icon .icon="${s}" style="color: ${a}"></ha-icon>`}
                ${e.show_state?F`<span class="badge-text">${e.text}</span>`:""}
            </div>
        `}if(!e.entity&&e.icon){const t=e.color||"var(--secondary-text-color)";return F`
            <div class="extra-badge">
                <ha-icon .icon="${e.icon}" style="color: ${t}"></ha-icon>
            </div>
        `}if(!e.entity)return F``;const s=e.entity,n=t._hass.states[s];if(!n)return F``;const o=s.startsWith("binary_sensor."),r=n.state,l=Nt(t._hass,n);let c,d,h,p=e.icon||n.attributes.icon;if(!p)if(o){const t=n.attributes.device_class,e="on"===r,i={battery:["mdi:battery","mdi:battery-outline"],battery_charging:["mdi:battery-charging","mdi:battery"],cold:["mdi:snowflake","mdi:snowflake-off"],connectivity:["mdi:check-network-outline","mdi:close-network-outline"],door:["mdi:door-open","mdi:door-closed"],garage_door:["mdi:garage-open","mdi:garage"],gas:["mdi:alert-circle","mdi:check-circle"],heat:["mdi:fire","mdi:fire-off"],light:["mdi:brightness-7","mdi:brightness-5"],lock:["mdi:lock-open","mdi:lock"],moisture:["mdi:water","mdi:water-off"],motion:["mdi:motion-sensor","mdi:motion-sensor-off"],moving:["mdi:motion","mdi:motion-off"],occupancy:["mdi:home","mdi:home-outline"],opening:["mdi:square-outline","mdi:square"],plug:["mdi:power-plug","mdi:power-plug-off"],power:["mdi:power","mdi:power-off"],presence:["mdi:home","mdi:home-outline"],problem:["mdi:alert-circle","mdi:check-circle"],running:["mdi:play","mdi:stop"],safety:["mdi:alert-circle","mdi:check-circle"],smoke:["mdi:smoke-detector-alert","mdi:smoke-detector"],sound:["mdi:music-note","mdi:music-note-off"],tamper:["mdi:alert-circle","mdi:check-circle"],update:["mdi:package-up","mdi:package"],vibration:["mdi:vibrate","mdi:vibrate-off"],window:["mdi:window-open","mdi:window-closed"]};p=t&&i[t]?e?i[t][0]:i[t][1]:e?"mdi:checkbox-marked-circle":"mdi:checkbox-blank-circle-outline"}else p="mdi:information";if(c=o&&!e.attribute?"on"===r?e.color_on||"var(--primary-color)":e.color_off||"var(--disabled-text-color)":e.color||"var(--secondary-text-color)",e.attribute){const i=n.attributes[e.attribute];if(h=e.attribute,null==i)d="N/A";else if("last_changed"===e.attribute||"last_updated"===e.attribute){const t="last_changed"===e.attribute?n.last_changed:n.last_updated;d=t?new Date(t).toLocaleString():String(i)}else d=t._hass.formatEntityAttributeValue?t._hass.formatEntityAttributeValue(n,e.attribute):String(i)}else h=l,d=o?r:t._hass.formatEntityState(n);if("relative"===e.format){const i=((t,e,i=new Date)=>{const a=Lt(t,i);return null===a?null:0===a?yt(e,"badge_today"):yt(e,a>0?"badge_days_ago":"badge_in_days").replace("{days}",String(Math.abs(a)))})("last_changed"===e.attribute?n.last_changed:"last_updated"===e.attribute?n.last_updated:e.attribute?n.attributes[e.attribute]:r,t._hass);i&&(d=i)}const g=e.next_entity?null===(a=t._hass.states[e.next_entity])||void 0===a?void 0:a.state:void 0,u=g?((t,e,i=new Date)=>{const a=Lt(t,i);if(null===a)return null;if(0===a){const t=yt(e,"badge_due_today");return{text:t,short:t,state:"today"}}if(a>0){const t=yt(e,"badge_days_late").replace("{days}",String(a));return{text:t,short:t,state:"late"}}return{text:yt(e,"badge_next_in").replace("{days}",String(-a)),short:yt(e,"badge_in_days").replace("{days}",String(-a)),state:"upcoming"}})(g,t._hass):null,m=`${h}: ${d}${u?` · ${u.text}`:""}`;return F`
        <div class="extra-badge tooltip${u?" two-line":""}" @click="${i=>{i.stopPropagation(),((t,e,i)=>{e.tap_action?Mt(t,"hass-action",{config:{entity:i,tap_action:e.tap_action},action:"tap"},{bubbles:!0,composed:!0}):Et(t,i)})(t,e,s)}}">
            <div class="tip" style="text-align:center;">${m}</div>
            <ha-icon .icon="${p}" style="color: ${c}"></ha-icon>
            ${u&&e.next_primary?F`<span class="badge-text"><span class="badge-line badge-due ${u.state}">${u.short}</span>${e.show_state?F`<span class="badge-last">${yt(t._hass,"badge_last").replace("{value}",d)}</span>`:""}</span>`:e.show_state||u?F`<span class="badge-text">${e.show_state?F`<span class="badge-line">${d}</span>`:""}${u?F`<span class="badge-next ${u.state}">${u.text}</span>`:""}</span>`:""}
        </div>
    `},Ut=F`<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>`,Tt=(t,e)=>{var i,a,s;const n=(null===(i=t.config)||void 0===i?void 0:i.display_type)===ut.Compact,o=null!==(s=null===(a=t.config)||void 0===a?void 0:a.bars_per_row)&&void 0!==s?s:n?1:2,r=1===o,l=((t,e)=>Object.values(t).reduce((t,i,a)=>{const s=Math.floor(a/e);return t[s]||(t[s]=[]),t[s].push(i),t},[]))(e,o),c="attributes "+(r?"width-100":"");return l.map(e=>F`<div class="${c}">${e.map(e=>e?F`${((t,e)=>{var i,a,s,n,o,r;const{max:l,min:c}=e.limits,d=e.unit_of_measurement,h="lx"===e.unit_of_measurement,p=e.icon||"mdi:help-circle-outline",g=null!==(i=e.current)&&void 0!==i?i:0,u=!isNaN(g)&&null!=g,m=e.display_state,_=!h||g<=0||c<=0?100*Math.max(0,Math.min(1,(g-c)/(l-c))):100*Math.max(0,Math.min(1,(Math.log(g)-Math.log(c))/(Math.log(l)-Math.log(c)))),y=((t,e)=>{var i;return(null===(i=null==t?void 0:t.localize)||void 0===i?void 0:i.call(t,`component.plant.entity.sensor.${e}.name`))||yt(t,e)})(t._hass,e.name),f=u?F`${y}: ${g} ${d}<br>(${c} ~ ${l} ${d})`:t._hass.localize("state.default.unavailable"),v="dli"===e.name||"dli_24h"===e.name?Ut:d,b=(null===(a=t.config)||void 0===a?void 0:a.display_type)===ut.Compact,w=null!==(n=null===(s=t.config)||void 0===s?void 0:s.bars_per_row)&&void 0!==n?n:b?1:2,$=!(null!==(r=null===(o=t.config)||void 0===o?void 0:o.hide_units)&&void 0!==r?r:b),x=1===w;return F`
        <div class="${`attribute tooltip ${x?"width-100":""}${x&&$?" has-units":""}`}" @click="${()=>((t,e,i)=>{var a,s;const n=t.config,o=null!==(s=null===(a=null==n?void 0:n.bar_tap_actions)||void 0===a?void 0:a[e])&&void 0!==s?s:null==n?void 0:n.bar_tap_action;o?Mt(t,"hass-action",{config:{entity:i,tap_action:o},action:"tap"},{bubbles:!0,composed:!0}):Et(t,i)})(t,e.name,e.sensor)}">
            <div class="tip" style="text-align:center;">${f}</div>
            <ha-icon .icon="${p}"></ha-icon>
            <div class="meter red">
                <span class="${u?g<c||g>l?"bad":"good":"unavailable"}" style="width: 100%;"></span>
            </div>
            <div class="meter green">
                <span class="${u?g>l?"bad":"good":"unavailable"}" style="width:${u?_:"0"}%;"></span>
            </div>
            <div class="meter red">
                <span class="bad" style="width:${u?g>l?100:0:"0"}%;"></span>
            </div>
            ${$?F`<div class="header"><span class="value">${m}</span>&nbsp;<span class='unit'>${v}</span></div>`:""}
        </div>
    `})(t,e)}`:"")}</div>`).flat()};var Pt=function(t,e,i,a){var s,n=arguments.length,o=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,a);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},zt=function(t,e,i,a){return new(i||(i=Promise))(function(s,n){function o(t){try{l(a.next(t))}catch(t){n(t)}}function r(t){try{l(a.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(o,r)}l((a=a.apply(t,e||[])).next())})};console.info("%c FLOWER-CARD %c 2026.11.2","color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;");const Ht=()=>{var t,e;if("undefined"==typeof document)return;const i=document.querySelector("home-assistant");return null===(e=null===(t=null==i?void 0:i.hass)||void 0===t?void 0:t.config)||void 0===e?void 0:e.version};window.customCards=window.customCards||[],window.customCards.some(t=>t.type===ft)||window.customCards.push({type:ft,name:"Flower card",preview:!0,description:"Custom flower card for https://github.com/Olen/homeassistant-plant",getEntitySuggestion:(t,e)=>"plant"!==e.split(".")[0]?null:[{label:"Full",config:{type:`custom:${ft}`,entity:e}},{label:"Compact",config:{type:`custom:${ft}`,entity:e,display_type:ut.Compact}}]});class Rt extends rt{constructor(){super(...arguments),this._careDialogOpen=!1,this._careDialogFields=[],this._careDialogTitle="",this._imageDialogOpen=!1,this.previousFetchDate=0,this._fetchedOnce=!1,this.plantinfo={result:{}}}set hass(t){var e,i,a,s;this._hass=t,this.stateObj=(null===(e=this.config)||void 0===e?void 0:e.entity)?t.states[this.config.entity]:void 0;const n=(null===(i=this.config)||void 0===i?void 0:i.image_entity)?t.states[this.config.image_entity]:void 0,o=(null==n?void 0:n.attributes.entity_picture)||(null===(a=this.stateObj)||void 0===a?void 0:a.attributes.entity_picture);o!==this._lastEntityPicture&&(this._lastEntityPicture=o,this._resolveEntityPicture(t,o));const r=null===(s=this.stateObj)||void 0===s?void 0:s.last_updated,l=r!==this._lastPlantUpdate,c=this.isConnected&&this.getClientRects().length>0;(!this._fetchedOnce||c&&(l||Date.now()>this.previousFetchDate+6e4))&&Date.now()>this.previousFetchDate+1e3&&(this._fetchedOnce=!0,this._lastPlantUpdate=r,this.previousFetchDate=Date.now(),this.get_data(t).then(()=>{this.requestUpdate()}))}_resolveEntityPicture(t,e){return zt(this,void 0,void 0,function*(){e?Dt(e)?(this._resolvedImageUrl=yield((t,e)=>function(t,e,i,a){return new(i||(i=Promise))(function(s,n){function o(t){try{l(a.next(t))}catch(t){n(t)}}function r(t){try{l(a.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(o,r)}l((a=a.apply(t,e||[])).next())})}(void 0,void 0,void 0,function*(){if(!Dt(e))return e;try{return(yield t.callWS({type:"media_source/resolve_media",media_content_id:e})).url}catch(t){return console.error("Failed to resolve media source:",t),""}}))(t,e),this.requestUpdate()):this._resolvedImageUrl=e:this._resolvedImageUrl=void 0})}static getConfigForm(){const t="undefined"==typeof document?"en":(null===(e=document.documentElement)||void 0===e?void 0:e.lang)||"en";var e,i;return{schema:[{name:"entity",required:!0,selector:{entity:{domain:"plant"}}},(i=Ht(),Ct(i)?{name:"name",selector:{entity_name:{}},context:{entity:"entity"}}:{name:"name",selector:{text:{}}}),{name:"image_entity",selector:{entity:{domain:"image"}}},{name:"battery_sensor",selector:{entity:{domain:"sensor",device_class:"battery"}}},{type:"expandable",name:"",title:yt({language:t},"settings_bars"),schema:[{name:"show_bars",selector:{select:{multiple:!0,options:bt(t)}}}]},{type:"expandable",name:"",title:yt({language:t},"settings_care_info"),schema:[{name:"show_care",selector:{select:{multiple:!0,options:wt(t)}}}]},{type:"expandable",name:"",title:yt({language:t},"settings_appearance"),schema:[{name:"display_type",selector:{select:{options:[{value:"full",label:yt({language:t},"settings_full")},{value:"compact",label:yt({language:t},"settings_compact")}]}}},{name:"hide_species",selector:{boolean:{}}},{name:"hide_image",selector:{boolean:{}}},{name:"hide_units",selector:{boolean:{}}}]}],computeLabel:e=>({entity:yt({language:t},"settings_entity"),name:yt({language:t},"settings_display_name"),display_type:yt({language:t},"settings_display_type"),battery_sensor:yt({language:t},"settings_battery_sensor"),show_bars:yt({language:t},"settings_show_bars"),show_care:yt({language:t},"settings_show_care_info"),hide_species:yt({language:t},"settings_hide_species"),hide_image:yt({language:t},"settings_hide_image"),hide_units:yt({language:t},"settings_hide_units")}[e.name]||e.name)}}static getStubConfig(t){const e=t=>"object"==typeof t&&null!==t&&"entity_id"in t&&"string"==typeof t.entity_id&&t.entity_id.startsWith("plant.");let i=[];try{i=Object.values(t.states).filter(e)}catch(t){console.info(`Unable to get ha-data: ${t}`)}return{entity:i.length>0?i[0].entity_id:"plant.my_plant",battery_sensor:"sensor.myflower_battery",show_bars:vt}}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this.config=t}openCareDialog(t){const{open:e,fields:i,title:a}=((t,e="en")=>{var i;return{open:!0,fields:It(t),title:null!==(i=t.title)&&void 0!==i?i:yt({language:e},"care")}})(t,_t(this._hass));this._careDialogFields=i,this._careDialogTitle=a,this._careDialogOpen=e}_closeCareDialog(){this._careDialogOpen=!1}renderCareDialog(){var t,e,i;const a=null===(t=this.config)||void 0===t?void 0:t.entity,s=a?null===(i=null===(e=this._hass)||void 0===e?void 0:e.states[a])||void 0===i?void 0:i.attributes:void 0,n=_t(this._hass),o=kt(s,this._careDialogFields,n);return F`
            <ha-dialog
                open
                header-title="${this._careDialogTitle}"
                heading="${this._careDialogTitle}"
                @closed="${()=>this._closeCareDialog()}"
            >
                ${o.length>0?F`<div class="care-info care-info--dialog">${Ot(o)}</div>`:F`<div class="care-info-empty">${yt({language:n},"no_care_info")}</div>`}
            </ha-dialog>
        `}openImageDialog(){this._imageDialogOpen=!0}_closeImageDialog(){this._imageDialogOpen=!1}renderImageDialog(){var t;const e=this.stateObj?Nt(this._hass,this.stateObj,null===(t=this.config)||void 0===t?void 0:t.name):"";return F`
            <ha-dialog open @closed="${()=>this._closeImageDialog()}">
                <div class="image-dialog">
                    <img src="${this._resolvedImageUrl}" alt="${e}">
                    ${e?F`<div class="image-dialog-caption">${e}</div>`:""}
                </div>
            </ha-dialog>
        `}render(){var t,e;if(!this.config||!this._hass)return F``;if(!this.stateObj)return this._careDialogOpen=!1,this._imageDialogOpen=!1,F`
                <hui-warning>
                Entity not available: ${this.config.entity}
                </hui-warning>
              `;const i=this.stateObj,a=i.attributes.species,s=Nt(this._hass,i,this.config.name),n=null!==(t=this.config.hide_species)&&void 0!==t&&t,o=null!==(e=this.config.hide_image)&&void 0!==e&&e,r=((t,e)=>!t&&!!e)(o,this._resolvedImageUrl),l=this.config.display_type===ut.Compact?"header-compact":"header",c=this.config.display_type===ut.Compact||o?"":"card-margin-top";return F`
            <ha-card class="${c}">
            <div class="${l}${o?" no-image":""}" @click="${()=>((t,e)=>{var i;const a=null===(i=t.config)||void 0===i?void 0:i.name_tap_action;a?Mt(t,"hass-action",{config:{entity:e,tap_action:a},action:"tap"},{bubbles:!0,composed:!0}):Et(t,e)})(this,i.entity_id)}">
                ${o?"":F`<img
                    src="${this._resolvedImageUrl||"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiIHJvbGU9ImltZyIgYXJpYS1oaWRkZW49InRydWUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICAgIDxnPgogICAgICA8IS0tP2xpdCQ0MTM0MjMxNjkkLS0+PHBhdGggZD0iTTMsMTNBOSw5IDAgMCwwIDEyLDIyQzEyLDE3IDcuOTcsMTMgMywxM00xMiw1LjVBMi41LDIuNSAwIDAsMSAxNC41LDhBMi41LDIuNSAwIDAsMSAxMiwxMC41QTIuNSwyLjUgMCAwLDEgOS41LDhBMi41LDIuNSAwIDAsMSAxMiw1LjVNNS42LDEwLjI1QTIuNSwyLjUgMCAwLDAgOC4xLDEyLjc1QzguNjMsMTIuNzUgOS4xMiwxMi41OCA5LjUsMTIuMzFDOS41LDEyLjM3IDkuNSwxMi40MyA5LjUsMTIuNUEyLjUsMi41IDAgMCwwIDEyLDE1QTIuNSwyLjUgMCAwLDAgMTQuNSwxMi41QzE0LjUsMTIuNDMgMTQuNSwxMi4zNyAxNC41LDEyLjMxQzE0Ljg4LDEyLjU4IDE1LjM3LDEyLjc1IDE1LjksMTIuNzVDMTcuMjgsMTIuNzUgMTguNCwxMS42MyAxOC40LDEwLjI1QzE4LjQsOS4yNSAxNy44MSw4LjQgMTYuOTcsOEMxNy44MSw3LjYgMTguNCw2Ljc0IDE4LjQsNS43NUMxOC40LDQuMzcgMTcuMjgsMy4yNSAxNS45LDMuMjVDMTUuMzcsMy4yNSAxNC44OCwzLjQxIDE0LjUsMy42OUMxNC41LDMuNjMgMTQuNSwzLjU2IDE0LjUsMy41QTIuNSwyLjUgMCAwLDAgMTIsMUEyLjUsMi41IDAgMCwwIDkuNSwzLjVDOS41LDMuNTYgOS41LDMuNjMgOS41LDMuNjlDOS4xMiwzLjQxIDguNjMsMy4yNSA4LjEsMy4yNUEyLjUsMi41IDAgMCwwIDUuNiw1Ljc1QzUuNiw2Ljc0IDYuMTksNy42IDcuMDMsOEM2LjE5LDguNCA1LjYsOS4yNSA1LjYsMTAuMjVNMTIsMjJBOSw5IDAgMCwwIDIxLDEzQzE2LDEzIDEyLDE3IDEyLDIyWiI+PC9wYXRoPgogICAgICA8L2c+Cjwvc3ZnPgo="}"
                    class="${r?"has-lightbox":""}"
                    @click="${t=>{r&&(t.stopPropagation(),this.openImageDialog())}}">`}
                <span id="battery">${(t=>{var e;const i=null===(e=t.config)||void 0===e?void 0:e.extra_badges;return i&&0!==i.length?i.map(e=>jt(t,e)):F``})(this)}${(t=>{var e,i;const a=t.config;if(!(null==a?void 0:a.battery_sensor))return F``;const s=a.battery_sensor,n=t._hass.states[s];if(!n)return F``;const o=parseInt(n.state),r=null!==(e=a.battery_warn_level)&&void 0!==e?e:20,l=null!==(i=a.battery_ok_level)&&void 0!==i?i:40,c=([{threshold:90,icon:"mdi:battery"},{threshold:80,icon:"mdi:battery-90"},{threshold:70,icon:"mdi:battery-80"},{threshold:60,icon:"mdi:battery-70"},{threshold:50,icon:"mdi:battery-60"},{threshold:40,icon:"mdi:battery-50"},{threshold:30,icon:"mdi:battery-40"},{threshold:20,icon:"mdi:battery-30"},{threshold:10,icon:"mdi:battery-20"},{threshold:0,icon:"mdi:battery-10"},{threshold:-1/0,icon:"mdi:battery-alert-variant-outline"}].find(({threshold:t})=>o>t)||{threshold:-1/0,icon:"mdi:battery-alert-variant-outline"}).icon,d=(h=o)>=l?"green":h>=r?"orange":"red";var h;return F`
        <div class="battery tooltip" @click="${e=>{e.stopPropagation(),Et(t,s)}}">
            <div class="tip" style="text-align:center;">${o}%</div>
            <ha-icon .icon="${c}" style="color: ${d}"></ha-icon>
        </div>
    `})(this)}</span>
                <span id="name"> ${s}${"problem"==i.state.toLowerCase()?F` <ha-icon .icon="mdi:alert-circle-outline"></ha-icon>`:""}
                </span>
                ${n?"":F`<span id="species">${a}</span>`}
            </div>
            <div class="divider"></div>
            ${(t=>{var e,i;const a={},s=(null===(e=t.config)||void 0===e?void 0:e.show_bars)||vt;if(t.plantinfo&&t.plantinfo.result){const e=t.plantinfo.result;for(const n of s)if(e[n])try{const{max:s,min:o,current:r,icon:l,sensor:c}=e[n],d=t._hass.states[c];if(!d)continue;const h=t._hass.formatEntityState(d).replace(/[^\d,.+-]/g,""),p=(null===(i=null==d?void 0:d.attributes)||void 0===i?void 0:i.unit_of_measurement)||e[n].unit_of_measurement||"",g={max:Number(s),min:Number(o)};a[n]={name:n,current:Number(r),limits:g,icon:String(l),sensor:String(c),unit_of_measurement:String(p),display_state:h}}catch(t){console.warn(`Flower card: Error processing ${n}:`,t)}}return Tt(t,a)})(this)}
            ${(t=>{var e;const i=t.config;if(!i)return F``;const a=i.entity,s=a?null===(e=t._hass.states[a])||void 0===e?void 0:e.attributes:void 0,n=kt(s,i.show_care,_t(t._hass));return 0===n.length?F``:F`
        <div class="care-info">
            ${Ot(n)}
        </div>
    `})(this)}
            </ha-card>
            ${this._careDialogOpen?this.renderCareDialog():F``}
            ${this._imageDialogOpen?this.renderImageDialog():F``}
            `}get_data(t){return zt(this,void 0,void 0,function*(){var e,i;try{this.plantinfo=yield t.callWS({type:"plant/get_info",entity_id:null===(e=this.config)||void 0===e?void 0:e.entity})}catch(t){console.warn(`Flower card: Failed to fetch data for ${null===(i=this.config)||void 0===i?void 0:i.entity}:`,t),this.plantinfo&&this.plantinfo.result&&0!==Object.keys(this.plantinfo.result).length||(this.plantinfo={result:{}})}})}getCardSize(){return 5}static get styles(){return gt}}Pt([ht()],Rt.prototype,"_hass",void 0),Pt([ht()],Rt.prototype,"config",void 0),Pt([pt()],Rt.prototype,"_careDialogOpen",void 0),Pt([pt()],Rt.prototype,"_careDialogFields",void 0),Pt([pt()],Rt.prototype,"_careDialogTitle",void 0),Pt([pt()],Rt.prototype,"_imageDialogOpen",void 0),customElements.get(ft)||customElements.define(ft,Rt)})();