/*! For license information please see hogenbejn-theme.js.LICENSE.txt */
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=(window.__sw__.assetPath + '/bundles/hogenbejntheme/'),n(n.s="eruJ")}({"/Tal":function(e,t,n){var o=n("HDb4");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("P8hj").default)("410cae7f",o,!0,{})},"0mtS":function(e,t,n){var o=n("FCXk");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("P8hj").default)("6fb7eb5b",o,!0,{})},"32vN":function(e,t,n){},"6sMS":function(e,t,n){var o=n("RHZp");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("P8hj").default)("86fc7856",o,!0,{})},B7LO:function(e,t,n){},FCXk:function(e,t,n){},FomA:function(e,t,n){var o=n("Irfp");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("P8hj").default)("3ef000d5",o,!0,{})},HDb4:function(e,t,n){},Irfp:function(e,t,n){},ItIn:function(e,t,n){var o=n("32vN");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("P8hj").default)("2b7ebbb3",o,!0,{})},JAcI:function(e,t,n){var o=n("oZEy");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("P8hj").default)("1ee4a250",o,!0,{})},"NHq/":function(e,t,n){},P8hj:function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],s=r[0],a={id:e+":"+i,css:r[1],media:r[2],sourceMap:r[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},s=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,c=!1,m=function(){},u=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,i){c=n,u=i||{};var s=o(e,t);return v(s),function(t){for(var n=[],i=0;i<s.length;i++){var a=s[i];(l=r[a.id]).refs--,n.push(l)}t?v(s=o(e,t)):s=[];for(i=0;i<n.length;i++){var l;if(0===(l=n[i]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete r[l.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],o=r[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(g(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(g(n.parts[i]));r[n.id]={id:n.id,refs:1,parts:s}}}}function h(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var t,n,o=document.querySelector("style["+d+'~="'+e.id+'"]');if(o){if(c)return m;o.parentNode.removeChild(o)}if(f){var i=l++;o=a||(a=h()),t=b.bind(null,o,i,!1),n=b.bind(null,o,i,!0)}else o=h(),t=_.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var w,y=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function b(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function _(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),u.ssrId&&e.setAttribute(d,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},RHZp:function(e,t,n){},bqoh:function(e,t,n){var o=n("NHq/");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("P8hj").default)("2255a0de",o,!0,{})},d6uB:function(e,t,n){},eruJ:function(e,t,n){"use strict";n.r(t);var o=Shopware,i=o.Component,r=o.Data;i.override("sw-cms-el-config-form",{template:'{% block sw_cms_el_form_config_content_form_type_options %}\n    {% parent %}\n    <option value="offer">\n        {{ $tc(\'sw-cms.elements.form.config.label.typeOffer\') }}\n    </option>\n{% endblock %}\n\n\n        {% block sw_cms_el_form_config_tab_options %}\n            <sw-tabs-item\n                    v-if="[\'contact\', ...formTypes.map(item => item.toLowerCase())].includes(element.config.type.value)"\n                    :title="$tc(\'sw-cms.elements.general.config.tab.settings\')"\n                    name="options"\n                    :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n            </sw-tabs-item>\n        {% endblock %}\n\n\n{% block sw_cms_el_form_config_content_form_confirmation_text %}\n    <sw-textarea-field\n            v-if="[\'contact\', ...formTypes.map(item => item.toLowerCase())].includes(element.config.type.value)"\n            v-model="element.config.confirmationText.value"\n            :label="$tc(\'sw-cms.elements.form.config.label.confirmationText\')"\n    />\n{% endblock %}\n{% block sw_cms_el_form_config_options %}\n    <sw-container\n            v-else-if="active === \'options\' && [\'contact\', ...formTypes.map(item => item.toLowerCase())].includes(element.config.type.value)"\n            class="sw-cms-el-config-form__tab-options"\n    >\n        <sw-entity-multi-id-select\n                v-if="element.config.type.value === \'offer\'"\n                :label="$tc(\'sw-cms.elements.form.config.label.selectProducts\')"\n                :ids="element.config.products.value"\n                :repository="productRepository"\n                :criteria="productCriteria"\n                @change="selectProducts">\n        </sw-entity-multi-id-select>\n        <sw-tagged-field\n                v-model="element.config.mailReceiver.value"\n                :class="getLastMailClass"\n                :label="$tc(\'sw-cms.elements.form.config.label.receiverEmail\')"\n                name="mailReceiver"\n                placeholder="john@doe.com"\n                @change="updateMailReceiver"\n        />\n        <sw-select-field\n                v-model="element.config.action.value"\n                :label="$tc(\'sw-cms.elements.form.config.label.action\')"\n        >\n            <option value="frontend.form.contact.send">\n                {{ $tc(\'sw-cms.elements.form.config.label.actionContact\') }}\n            </option>\n            <option value="frontend.form.newsletter.register.handle">\n                {{ $tc(\'sw-cms.elements.form.config.label.actionNewsletter\') }}\n            </option>\n            <option v-for="type in formTypes" :value="\'frontend.form.\' + type.toLowerCase() + \'.send\'">\n                {{ $tc(\'sw-cms.elements.form.config.label.action\' + type) }}\n            </option>\n        </sw-select-field>\n\n        <sw-select-field\n                v-model="element.config.submitText.value"\n                :label="$tc(\'sw-cms.elements.form.config.label.submitText\')"\n        >\n            <option value="contact.formSubmit">\n                {{ $tc(\'sw-cms.elements.form.config.label.submitTextContact\') }}\n            </option>\n            <option value="newsletter.formSubmit">\n                {{ $tc(\'sw-cms.elements.form.config.label.submitTextNewsletter\') }}\n            </option>\n\n            <option v-for="type in formTypes" :value="type.toLowerCase() + \'.formSubmit\'">\n                {{ $tc(\'sw-cms.elements.form.config.label.submitText\' + type) }}\n            </option>\n        </sw-select-field>\n    </sw-container>\n{% endblock %}\n',inject:["repositoryFactory"],computed:{productRepository:function(){return this.repositoryFactory.create("product")},productCriteria:function(){return new r.Criteria(1,25)},formTypes:function(){return c}},methods:{selectProducts:function(e){this.element.config.products.value=e}}});var s={template:'<div class="sw-cms-el-form-contact">\n    <h3\n        v-if="formSettings.title.value.length > 0"\n        class="sw-cms-el-form-headline"\n    >\n        {{ formSettings.title.value }}\n    </h3>\n\n    <div class="sw-cms-el-form-contact-form-group three-items">\n        <sw-select-field :label="$tc(\'sw-cms.elements.form.element.label.salutation\')">\n            <option\n                value=""\n                disabled\n                selected\n            >\n                {{ $tc(\'sw-cms.elements.form.element.label.salutationUndisclosed\') }}\n            </option>\n        </sw-select-field>\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.firstName\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.firstName\')"\n        />\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.lastName\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.lastName\')"\n        />\n    </div>\n\n    <div class="sw-cms-el-form-contact-form-group two-items">\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.email\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.email\')"\n        />\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.phone\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.phone\')"\n        />\n    </div>\n\n    <sw-text-field\n        :label="$tc(\'sw-cms.elements.form.element.label.subject\')"\n        :value="$tc(\'sw-cms.elements.form.element.placeholder.subject\')"\n    />\n\n    <sw-textarea-field\n        :label="$tc(\'sw-cms.elements.form.element.label.message\')"\n        :value="$tc(\'sw-cms.elements.form.element.placeholder.message\')"\n    />\n\n    <h4>{{ $tc(\'sw-cms.elements.form.element.label.privacy\') }}</h4>\n\n    <sw-checkbox-field :label="$tc(\'sw-cms.elements.form.element.helpText.privacy\')" />\n\n    <p class="sw-cms-el-form-note">\n        {{ $tc(\'sw-cms.elements.form.element.helpText.requiredFields\') }}\n    </p>\n\n    <div class="sw-cms-el-form__action">\n        {{ $tc(\'sw-cms.elements.form.element.label.send\') }}\n    </div>\n</div>\n',props:["formSettings"]};Shopware.Component.override("sw-cms-el-form",{components:{offer:s}});var a=Shopware.Service,l=a("cmsService").getCmsElementConfigByName("form"),c=["Offer"];l.defaultConfig.action={source:"static",value:null},l.defaultConfig.submitText={source:"static",value:null},l.defaultConfig.products={source:"static",entity:{name:"product"},value:null},a("cmsService").registerCmsElement(l);n("6sMS");var m=Shopware,u=m.Component,d=m.Mixin;u.register("sw-cms-el-component-everything-modal-settings",{template:'{% block sw_cms_el_component_everything_modal_settings %}\n    <div class="sw-cms-el-component-everything-modal-settings" style="min-height:50px">\n        <h3>{{ $t(\'sw-cms.elements.everything-modal.headline\') }}</h3>\n    </div>\n{% endblock %}\n',mixins:[d.getByName("cms-element")],computed:{parentScope:function(){return this.$parent.$parent}},created:function(){this.createdComponent(),this.parentScope.settings.headline=this.element.config.headline.value,this.parentScope.settings.label=this.element.config.label.value,this.parentScope.settings.showButton=this.element.config.showButton.value,this.parentScope.settings.modalId=this.element.config.modalId.value,this.parentScope.settings.closable=this.element.config.closable.value},methods:{createdComponent:function(){this.initElementConfig("everything-modal-settings"),this.initElementData("everything-modal-settings")}}});n("JAcI");var f=Shopware,p=f.Component,v=f.Mixin,h=f.Utils;p.register("sw-cms-el-config-everything-modal-settings",{template:'{% block sw_cms_element_everything_modal_settings_config %}\n    <div class="sw-cms-el-config-everything-modal-settings">\n        <sw-checkbox-field v-model="element.config.showButton.value" :label="$t(\'sw-cms.elements.everything-modal.config.showButton\')"></sw-checkbox-field>\n        <sw-text-field v-model="element.config.label.value" :label="$t(\'sw-cms.elements.everything-modal.config.label\')"></sw-text-field>\n        <sw-text-field v-model="element.config.headline.value" :label="$t(\'sw-cms.elements.everything-modal.config.headline\')"></sw-text-field>\n        <sw-checkbox-field v-model="element.config.closable.value" :label="$t(\'sw-cms.elements.everything-modal.config.closable\')"></sw-checkbox-field>\n    </div>\n{% endblock %}\n',inject:["repositoryFactory"],computed:{parentScope:function(){return this.$parent.$parent.$parent}},mixins:[v.getByName("cms-element")],watch:{"element.config":{deep:!0,handler:function(e){var t;null!==(t=this.parentScope)&&void 0!==t&&t.settings&&(this.parentScope.settings.headline=e.headline.value,this.parentScope.settings.label=e.label.value,this.parentScope.settings.showButton=e.showButton.value,this.parentScope.settings.closable=e.closable.value,e.modalId.value||(this.element.config.modalId.value="modal_"+h.createId()),this.parentScope.settings.modalId=e.modalId.value)}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("everything-modal-settings")}}});n("wuow");Shopware.Component.register("sw-cms-el-preview-everything-modal-settings",{template:'{% block sw_cms_element_everything_modal_settings_preview %}\n    <div class="sw-cms-el-preview-everything-modal-settings">\n        everything-modal-settings\n    </div>\n{% endblock %}\n'}),Shopware.Service("cmsService").registerCmsElement({name:"everything-modal-settings",label:"sw-cms.elements.everything-modal-settings.label",component:"sw-cms-el-component-everything-modal-settings",configComponent:"sw-cms-el-config-everything-modal-settings",previewComponent:"sw-cms-el-preview-everything-modal-settings",defaultConfig:{showButton:{source:"static",value:!1},closable:{source:"static",value:!0},headline:{source:"static",value:""},label:{source:"static",value:""},modalId:{source:"static",value:""}},defaultData:{}});n("q5mH");function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){w=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function c(e,t,n,i){var r=t&&t.prototype instanceof d?t:d,s=Object.create(r.prototype),a=new $(i||[]);return o(s,"_invoke",{value:S(e,n,a)}),s}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u={};function d(){}function f(){}function p(){}var v={};l(v,r,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(L([])));y&&y!==t&&n.call(y,r)&&(v=y);var b=p.prototype=d.prototype=Object.create(v);function _(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function i(o,r,s,a){var l=m(e[o],e,r);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==g(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){i("next",e,s,a)}),(function(e){i("throw",e,s,a)})):t.resolve(u).then((function(e){c.value=e,s(c)}),(function(e){return i("throw",e,s,a)}))}a(l.arg)}var r;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){i(e,n,t,o)}))}return r=r?r.then(o,o):o()}})}function S(e,t,n){var o="suspendedStart";return function(i,r){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===i)throw r;return E()}for(n.method=i,n.arg=r;;){var s=n.delegate;if(s){var a=C(s,n);if(a){if(a===u)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var l=m(e,t,n);if("normal"===l.type){if(o=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o="completed",n.method="throw",n.arg=l.arg)}}}function C(e,t){var n=t.method,o=e.iterator[n];if(void 0===o)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,C(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),u;var i=m(o,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,u;var r=i.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(n.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=p,o(b,"constructor",{value:p,configurable:!0}),o(p,"constructor",{value:f,configurable:!0}),f.displayName=l(p,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,a,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},_(x.prototype),l(x.prototype,s,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,o,i,r){void 0===r&&(r=Promise);var s=new x(c(t,n,o,i),r);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},_(b),l(b,a,"Generator"),l(b,r,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var o in t)n.push(o);return n.reverse(),function e(){for(;n.length;){var o=n.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=L,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(n,o){return s.type="throw",s.arg=e,t.next=n,o&&(t.method="next",t.arg=void 0),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],s=r.completion;if("root"===r.tryLoc)return o("end");if(r.tryLoc<=this.prev){var a=n.call(r,"catchLoc"),l=n.call(r,"finallyLoc");if(a&&l){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(a){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return o(r.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=e,s.arg=t,r?(this.method="next",this.next=r.finallyLoc,u):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var i=o.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}function y(e,t,n,o,i,r,s){try{var a=e[r](s),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(o,i)}var b=Shopware,_=b.Component,x=b.Mixin;_.register("sw-cms-el-component-media-video",{template:'{% block sw_cms_el_component_media_video %}\n    <div class="sw-cms-el-component-media-video" style="min-height:50px">\n        <video style="width:100%;" v-if="media">\n            <source :src="media.url" type="media.mimeType"/>\n        </video>\n    </div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[x.getByName("cms-element")],data:function(){return{media:{}}},watch:{"element.config":{deep:!0,handler:function(){var e,t=this;return(e=w().mark((function e(){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.mediaRepository.get(t.element.config.media.value,Shopware.Context.api);case 2:t.media=e.sent,console.log(t,t.media);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function s(e){y(r,o,i,s,a,"next",e)}function a(e){y(r,o,i,s,a,"throw",e)}s(void 0)}))})()}}},computed:{mediaRepository:function(){return this.repositoryFactory.create("media")}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("media-video"),this.initElementData("media-video")}}});n("0mtS");var S=Shopware,C=S.Component,k=S.Mixin;C.register("sw-cms-el-config-media-video",{template:'{% block sw_cms_element_media_video_config %}\n    <div class="sw-cms-el-config-media-video">\n        <sw-media-field :mediaId="element.config.media.value" @media-id-change="item => element.config.media.value = item"/>\n    </div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[k.getByName("cms-element")],created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("media-video")}}});n("FomA");Shopware.Component.register("sw-cms-el-preview-media-video",{template:'{% block sw_cms_element_media_video_preview %}\n    <div class="sw-cms-el-preview-media-video">\n        <div class="sw-cms-preview-parallax-section__image" style="position: relative; height:100%;">\n            <img\n                    :src="\'/administration/static/img/cms/preview_camera_small.jpg\' | asset"\n                    alt=""\n                    style="\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n"\n            >\n            <div style="position:absolute; top:0; left:0; width: 100%; height: 100%; display:flex; justify-content: center; align-items: center">\n                <sw-icon color="#fff" name="solid-play"/>\n            </div>\n        </div>\n    </div>\n{% endblock %}\n'}),Shopware.Service("cmsService").registerCmsElement({name:"media-video",label:"sw-cms.elements.media-video.label",component:"sw-cms-el-component-media-video",configComponent:"sw-cms-el-config-media-video",previewComponent:"sw-cms-el-preview-media-video",defaultConfig:{media:{source:"static",value:"",entity:{name:"media"}}},collect:Shopware.Service("cmsService").getCollectFunction(),defaultData:{}});var j=Shopware,$=j.Component;j.Feature;$.register("sw-cms-block-everything-modal",{template:'{% block sw_cms_block_everything_modal %}\n    <div class="sw-cms-block-everything-modal">\n        <slot name="settings"></slot>\n        <sw-card title="true">\n            <template #title>\n            {{ settings.headline }}\n            </template>\n            <template #header-right v-if="settings.closable">&times;</template>\n            <slot name="content"></slot>\n        </sw-card>\n        <sw-button v-if="settings.showButton">{{ settings.label }}</sw-button>\n        <sw-button @click="copyButton"><sw-icon name="regular-copy"></sw-icon>\n            {{ $t(\'sw-cms.elements.everything-modal.copyButton\') }}</sw-button>\n    </div>\n{% endblock %}\n',data:function(){return{settings:{headline:"",label:"",showButton:!1,closable:!0,modalId:""}}},computed:{button:function(){return'<button data-bs-target="#'.concat(this.settings.modalId,'" data-bs-toggle="modal" data-toggle="modal" data-target="#').concat(this.settings.modalId,'">').concat(this.settings.label,"</button>")}},methods:{copyButton:function(){window.navigator.clipboard.writeText(this.button)}}});n("ItIn");Shopware.Component.register("sw-cms-preview-everything-modal",{template:'{% block sw_cms_block_everything_modal_preview %}\n    <div class="sw-cms-preview-everything-modal">\n        everything modal\n    </div>\n{% endblock %}\n'}),Shopware.Service("cmsService").registerCmsBlock({name:"everything-modal",label:"sw-cms.blocks.everything-modal.label",category:"commerce",component:"sw-cms-block-everything-modal",previewComponent:"sw-cms-preview-everything-modal",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{settings:{type:"everything-modal-settings",default:{locked:!0,config:{showButton:{source:"static",value:!1},closable:{source:"static",value:!0},headline:{source:"static",value:""},label:{source:"static",value:""},modalId:{source:"static",value:""}}}},content:"text"}});n("/Tal");Shopware.Component.register("sw-cms-block-hero",{template:'{% block sw_cms_block_hero %}\n    <div class="sw-cms-block-hero">\n        <div class="hero-image">\n            <slot name="image"></slot>\n        </div>\n        <div class="hero-content">\n            <slot name="content"></slot>\n        </div>\n    </div>\n{% endblock %}\n'});n("bqoh");Shopware.Component.register("sw-cms-preview-hero",{template:'{% block sw_cms_block_hero_preview %}\n\n    <div class="sw-cms-block-hero preview">\n        <div class="hero-image">\n            <img\n                    :src="\'/administration/static/img/cms/preview_mountain_small.jpg\' | asset"\n                    alt=""\n            >\n        </div>\n        <div class="hero-content">\n            Lorem ipsum dolor sit amet, consectetur adipisicing\n        </div>\n    </div>\n{% endblock %}\n'}),Shopware.Service("cmsService"),Shopware.Service("cmsService").registerCmsBlock({name:"hero",label:"sw-cms.blocks.hero.label",category:"text-image",component:"sw-cms-block-hero",previewComponent:"sw-cms-preview-hero",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{content:"text",image:{type:"image",default:{config:{displayMode:{source:"static",value:"standard"}},data:{media:{value:"framework/assets/default/cms/preview_mountain_large.jpg",source:"default"}}}}}})},oZEy:function(e,t,n){},q5mH:function(e,t,n){var o=n("d6uB");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("P8hj").default)("6bb063c0",o,!0,{})},wuow:function(e,t,n){var o=n("B7LO");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("P8hj").default)("91d8d16c",o,!0,{})}});
//# sourceMappingURL=hogenbejn-theme.js.map