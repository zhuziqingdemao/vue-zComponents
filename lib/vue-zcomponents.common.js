module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "99ae":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c41b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "da24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("99ae");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"493274fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dragWrap/src/index.vue?vue&type=template&id=c017568e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"wrap",on:{"dragenter":function($event){$event.preventDefault();},"dragover":function($event){$event.preventDefault();}}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/dragWrap/src/index.vue?vue&type=template&id=c017568e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dragWrap/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'ZDragWrap',
  props: {
    data: {
      type: Array,
      default() { return []; },
    },
  },
  created() {
    this.toDom = '';
    this.fromDom = '';
    this.children = [];
    this.$on('dragstart', this.onDragstart);
    this.$on('dragenter', this.onDragenter);
    this.$on('dragend', this.onDragend);
    this.$on('putChild', (child) => {
      this.children.push(child);
    });
  },
  methods: {
    onDragstart(el) {
      // 开始拖拽
      this.fromDom = el;
    },
    onDragenter(el) {
      this.toDom = el;
      console.log('emter', el);
      // eslint-disable-next-line
      if (this.fromDom === this.toDom) return;
      if (this.isPrevNode(this.fromDom, this.toDom)) {
        this.$refs.wrap.insertBefore(this.fromDom, this.toDom);
      } else {
        this.$refs.wrap.insertBefore(this.fromDom, this.toDom.nextSibling);
      }
    },
    onDragend() {
      if (!this.data.length) return;
      const realDomOrder = [...this.$el.children].filter((child) => child.classList.contains('__drag_item'));
      this.getDataOrder(realDomOrder, this.children);
    },
    // 获取真实的数据的顺序
    getDataOrder(realList, dragAfterList) {
      const order = realList.map((realItem) => dragAfterList.findIndex((dragItem) => realItem === dragItem));
      // order 现在的排列顺序的index
      const newData = [];
      order.forEach((item, i) => {
        newData[i] = this.data[item];
      });
      this.$emit('watchData', newData);
    },
    // 判断前后关系
    isPrevNode(from, to) {
      /**
       * previousSibling
       * DOM属性
       * 获取上一个兄弟节点
       */
      while (from.previousSibling !== null) {
        if (from.previousSibling === to) return true;
        // eslint-disable-next-line
        from = from.previousSibling;
      }
    },
  },
});

// CONCATENATED MODULE: ./packages/dragWrap/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var dragWrap_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/dragWrap/src/index.vue





/* normalize component */

var component = normalizeComponent(
  dragWrap_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dragWrap_src = (component.exports);
// CONCATENATED MODULE: ./packages/dragWrap/index.js


dragWrap_src.install = Vue => Vue.component(dragWrap_src.name, dragWrap_src)

/* harmony default export */ var dragWrap = (dragWrap_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"493274fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dragItem/src/index.vue?vue&type=template&id=7e1a4b80&
var srcvue_type_template_id_7e1a4b80_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__drag_item",style:({cursor: !_vm.$slots.drag ? 'move': ''}),attrs:{"draggable":!_vm.$slots.drag || _vm.isDrag},on:{"dragstart":function($event){$event.stopPropagation();return _vm.onDragstart($event)},"dragenter":function($event){$event.stopPropagation();return _vm.onDragenter($event)},"dragend":function($event){$event.stopPropagation();return _vm.onDragend($event)}}},[_vm._t("drag"),_vm._t("default")],2)}
var srcvue_type_template_id_7e1a4b80_staticRenderFns = []


// CONCATENATED MODULE: ./packages/dragItem/src/index.vue?vue&type=template&id=7e1a4b80&

// CONCATENATED MODULE: ./packages/utils/emitter.js
function broadcast(componentName, eventName, params) {
  this.$children.forEach((child) => {
    const { name } = child.$options;

    if (name === componentName) {
      // eslint-disable-next-line
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

/* harmony default export */ var emitter = ({
  methods: { // 混入mixin使用
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root; // 找父组件
      let { name } = parent.$options; // 父组件的name属性

      while (parent && (!name || name !== componentName)) { // 和传入的componentName进行匹配
        parent = parent.$parent; // 一直向上查找

        if (parent) {
          name = parent.$options.name; // 重新赋值name
        }
      }
      if (parent) { // 找到匹配的组件实例
        // eslint-disable-next-line prefer-spread
        parent.$emit.apply(parent, [eventName].concat(params)); // $emit触发自定义事件
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    },
  },
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dragItem/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var dragItem_srcvue_type_script_lang_js_ = ({
  name: 'ZDragItem',
  mixins: [emitter],
  data() {
    return {
      isDrag: false,
    };
  },
  mounted() {
    if (this.$slots.drag) {
      this.setSlotAttr();
    }
    this.dispatch('ZDragWrap', 'putChild', this.$el);
  },
  methods: {
    onDragstart() {
      this.$el.style.opacity = '0.3';
      this.dispatch('ZDragWrap', 'dragstart', this.$el);
    },
    onDragenter() {
      console.log('dragenter')
      this.dispatch('ZDragWrap', 'dragenter', this.$el);
    },
    onDragend() {
      this.$el.style.opacity = '1';
      this.dispatch('ZDragWrap', 'dragend');
    },
    setSlotAttr() {
      const slotVNode = this.$slots.default.find((vnode) => !vnode.data && vnode.text !== '');
      const dragDom = slotVNode.elm.previousSibling;
      if (dragDom.previousSibling !== null) {
        throw '具名插槽只能有一个根节点';
      }
      dragDom.addEventListener('mouseenter', () => {
        this.isDrag = true;
      });
      dragDom.addEventListener('mouseleave', () => {
        this.isDrag = false;
      });
      dragDom.style.cursor = 'move';
    },
  },
});

// CONCATENATED MODULE: ./packages/dragItem/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_dragItem_srcvue_type_script_lang_js_ = (dragItem_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/dragItem/src/index.vue?vue&type=style&index=0&lang=css&
var srcvue_type_style_index_0_lang_css_ = __webpack_require__("da24");

// CONCATENATED MODULE: ./packages/dragItem/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  packages_dragItem_srcvue_type_script_lang_js_,
  srcvue_type_template_id_7e1a4b80_render,
  srcvue_type_template_id_7e1a4b80_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dragItem_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/dragItem/index.js


dragItem_src.install = Vue => Vue.component(dragItem_src.name, dragItem_src);

/* harmony default export */ var dragItem = (dragItem_src);
// CONCATENATED MODULE: ./packages/watermark/src/watermark.js
/* harmony default export */ var watermark = ({
    inserted(el, binding) {
      const {
        src,
        text,
        opacity = 0.3,
        rotate = 20,
        fontSize = 20,
        type = "repeat"
      } = binding.value;
      el.src = src;
      el.addEventListener("load", e => {
        const canvas1 = document.createElement("canvas");
        const ctx1 = canvas1.getContext("2d");
        const canvas2 = document.createElement("canvas");
        const ctx2 = canvas2.getContext("2d");
        const width = e.target.width;
        const height = e.target.height;
  
        canvas1.width = width;
        canvas1.height = height;
        canvas2.width = width;
        canvas2.height = height;
  
        ctx2.font = `${fontSize}px Arial`;
        ctx2.fillStyle = `rgba(0,0,0,${opacity})`;
        ctx2.textBaseLine = "middle";
        const textWidth = ctx2.measureText(text).width + 50;
        if (type === "repeat") {
          ctx2.rotate((-rotate * Math.PI) / 180);
          const xN = Math.ceil(width / textWidth) + 15;
          const yN = Math.ceil(height / textWidth) + 15;
          for (let i = 0; i < xN; i++) {
            for (let j = 0; j < yN; j++) {
              ctx2.fillText(
                text,
                i * textWidth - Math.min(rotate, 90) - textWidth * 3,
                j * (textWidth / 2) - Math.min(rotate, 90) - textWidth * 3
              );
            }
          }
        } else if (type === "left-top") {
          ctx2.fillText(text, 30, 30 + fontSize);
        } else if (type === "right-top") {
          ctx2.fillText(text, width - 30 - textWidth, 30 + fontSize);
        } else if (type === "right-bottom") {
          ctx2.fillText(text, width - 30 - textWidth, height - 30);
        } else if (type === "left-bottom") {
          ctx2.fillText(text, 30, height - 30);
        }
  
        ctx1.clearRect(0, 0, width, height);
        ctx1.drawImage(el, 0, 0, width, height);
        ctx1.drawImage(canvas2, 0, 0, width, height);
        el.parentNode.appendChild(canvas1);
  
        setTimeout(() => {
          el.parentNode.removeChild(el);
        }, 0);
      });
    }
  });
// CONCATENATED MODULE: ./packages/watermark/index.js

watermark.install = function (Vue) {
  Vue.directive('watermark', watermark)
}
/* harmony default export */ var packages_watermark = (watermark);
// EXTERNAL MODULE: ./packages/common.css
var common = __webpack_require__("c41b");

// CONCATENATED MODULE: ./packages/index.js





const components = [
    dragItem,
    dragWrap
];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = Vue => {
    if(install.installed) return;
    components.map(component => Vue.component(component.name,component));
    Vue.use(packages_watermark); // 按需加载
}
// 判断是否直接引入文件
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
    // 导出的方法必须有install  才能够被Vue.uer方法安装
    install,
    ZDragWrap: dragWrap,
    ZDragItem: dragItem
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });