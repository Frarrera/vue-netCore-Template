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
/******/ 	__webpack_require__.p = "/wwwroot/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/process/browser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/setimmediate/setImmediate.js":
/*!***********************************************************!*\
  !*** (webpack)/node_modules/setimmediate/setImmediate.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buildin/global.js */ "../../../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js")))

/***/ }),

/***/ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/timers-browserify/main.js":
/*!********************************************************!*\
  !*** (webpack)/node_modules/timers-browserify/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buildin/global.js */ "../../../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounce.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/bounce.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n.bounce {\n  animation-name: bounce;\n  transform-origin: center bottom;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceIn.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/bounceIn.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.bounceIn {\n  animation-name: bounceIn;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceInDown.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/bounceInDown.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInDown {\n  animation-name: bounceInDown;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceInLeft.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/bounceInLeft.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInLeft {\n  animation-name: bounceInLeft;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceInRight.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/bounceInRight.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInRight {\n  animation-name: bounceInRight;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceInUp.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/bounceInUp.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInUp {\n  animation-name: bounceInUp;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceOut.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/bounceOut.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes bounceOut {\n  20% {\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n.bounceOut {\n  animation-name: bounceOut;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceOutDown.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/bounceOutDown.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.bounceOutDown {\n  animation-name: bounceOutDown;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceOutLeft.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/bounceOutLeft.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.bounceOutLeft {\n  animation-name: bounceOutLeft;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceOutRight.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/bounceOutRight.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.bounceOutRight {\n  animation-name: bounceOutRight;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceOutUp.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/bounceOutUp.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.bounceOutUp {\n  animation-name: bounceOutUp;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeIn.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeIn.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInDown.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeInDown.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInDown {\n  animation-name: fadeInDown;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInDownBig.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeInDownBig.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInDownBig {\n  animation-name: fadeInDownBig;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInLeft.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeInLeft.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInLeft {\n  animation-name: fadeInLeft;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInLeftBig.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeInLeftBig.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInLeftBig {\n  animation-name: fadeInLeftBig;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInRight.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeInRight.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInRight {\n  animation-name: fadeInRight;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInRightBig.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeInRightBig.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInRightBig {\n  animation-name: fadeInRightBig;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInUp.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeInUp.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInUpBig.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeInUpBig.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInUpBig {\n  animation-name: fadeInUpBig;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOut.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeOut.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutDown.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeOutDown.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown {\n  animation-name: fadeOutDown;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutDownBig.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeOutDownBig.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.fadeOutDownBig {\n  animation-name: fadeOutDownBig;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutLeft.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeOutLeft.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.fadeOutLeft {\n  animation-name: fadeOutLeft;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutLeftBig.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeOutLeftBig.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.fadeOutLeftBig {\n  animation-name: fadeOutLeftBig;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutRight.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeOutRight.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.fadeOutRight {\n  animation-name: fadeOutRight;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutRightBig.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeOutRightBig.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.fadeOutRightBig {\n  animation-name: fadeOutRightBig;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutUp.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeOutUp.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp {\n  animation-name: fadeOutUp;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutUpBig.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/fadeOutUpBig.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.fadeOutUpBig {\n  animation-name: fadeOutUpBig;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/flash.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/flash.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  animation-name: flash;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/flip.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/flip.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes flip {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px);\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  backface-visibility: visible;\n  animation-name: flip;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/flipInX.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/flipInX.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes flipInX {\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n\n.flipInX {\n  backface-visibility: visible !important;\n  animation-name: flipInX;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/flipInY.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/flipInY.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes flipInY {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n\n.flipInY {\n  backface-visibility: visible !important;\n  animation-name: flipInY;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/flipOutX.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/flipOutX.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes flipOutX {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  animation-name: flipOutX;\n  backface-visibility: visible !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/flipOutY.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/flipOutY.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes flipOutY {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  backface-visibility: visible !important;\n  animation-name: flipOutY;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/headShake.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/headShake.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes headShake {\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n}\n\n.headShake {\n  animation-timing-function: ease-in-out;\n  animation-name: headShake;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/hinge.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/hinge.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes hinge {\n  0% {\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  animation-name: hinge;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/jello.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/jello.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes jello {\n  from, 11.1%, to {\n    transform: none;\n  }\n\n  22.2% {\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n.jello {\n  animation-name: jello;\n  transform-origin: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/lightSpeedIn.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/lightSpeedIn.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes lightSpeedIn {\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  animation-name: lightSpeedIn;\n  animation-timing-function: ease-out;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/lightSpeedOut.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/lightSpeedOut.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  animation-name: lightSpeedOut;\n  animation-timing-function: ease-in;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/pulse.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/pulse.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.pulse {\n  animation-name: pulse;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rollIn.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/rollIn.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.rollIn {\n  animation-name: rollIn;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rollOut.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/rollOut.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n.rollOut {\n  animation-name: rollOut;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateIn.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/rotateIn.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes rotateIn {\n  from {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: center;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  animation-name: rotateIn;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateInDownLeft.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/rotateInDownLeft.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes rotateInDownLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  animation-name: rotateInDownLeft;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateInDownRight.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/rotateInDownRight.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes rotateInDownRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  animation-name: rotateInDownRight;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateInUpLeft.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/rotateInUpLeft.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes rotateInUpLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  animation-name: rotateInUpLeft;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateInUpRight.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/rotateInUpRight.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes rotateInUpRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  animation-name: rotateInUpRight;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateOut.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/rotateOut.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes rotateOut {\n  from {\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  animation-name: rotateOut;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateOutDownLeft.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/rotateOutDownLeft.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes rotateOutDownLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  animation-name: rotateOutDownLeft;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateOutDownRight.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/rotateOutDownRight.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes rotateOutDownRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  animation-name: rotateOutDownRight;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateOutUpLeft.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/rotateOutUpLeft.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes rotateOutUpLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  animation-name: rotateOutUpLeft;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateOutUpRight.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/rotateOutUpRight.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes rotateOutUpRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  animation-name: rotateOutUpRight;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rubberBand.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/rubberBand.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes rubberBand {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.rubberBand {\n  animation-name: rubberBand;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/shake.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/shake.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes shake {\n  from, to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake {\n  animation-name: shake;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideInDown.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/slideInDown.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInDown {\n  animation-name: slideInDown;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideInLeft.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/slideInLeft.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes slideInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft {\n  animation-name: slideInLeft;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideInRight.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/slideInRight.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes slideInRight {\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight {\n  animation-name: slideInRight;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideInUp.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/slideInUp.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes slideInUp {\n  from {\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInUp {\n  animation-name: slideInUp;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideOutDown.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/slideOutDown.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.slideOutDown {\n  animation-name: slideOutDown;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideOutLeft.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/slideOutLeft.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes slideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.slideOutLeft {\n  animation-name: slideOutLeft;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideOutRight.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/slideOutRight.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.slideOutRight {\n  animation-name: slideOutRight;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideOutUp.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/slideOutUp.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes slideOutUp {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.slideOutUp {\n  animation-name: slideOutUp;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/swing.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/swing.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes swing {\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n.swing {\n  transform-origin: top center;\n  animation-name: swing;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/tada.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/tada.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.tada {\n  animation-name: tada;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/wobble.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/wobble.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@keyframes wobble {\n  from {\n    transform: none;\n  }\n\n  15% {\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.wobble {\n  animation-name: wobble;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomIn.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/zoomIn.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  animation-name: zoomIn;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomInDown.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/zoomInDown.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInDown {\n  animation-name: zoomInDown;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomInLeft.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/zoomInLeft.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInLeft {\n  animation-name: zoomInLeft;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomInRight.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/zoomInRight.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInRight {\n  animation-name: zoomInRight;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomInUp.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/zoomInUp.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInUp {\n  animation-name: zoomInUp;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomOut.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/zoomOut.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.zoomOut {\n  animation-name: zoomOut;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomOutDown.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/zoomOutDown.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutDown {\n  animation-name: zoomOutDown;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomOutLeft.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/zoomOutLeft.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n  }\n}\n\n.zoomOutLeft {\n  animation-name: zoomOutLeft;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomOutRight.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/zoomOutRight.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n  }\n}\n\n.zoomOutRight {\n  animation-name: zoomOutRight;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomOutUp.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/animate/zoomOutUp.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutUp {\n  animation-name: zoomOutUp;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/fontawesome/fontawesome.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/fontawesome/fontawesome.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * Font Awesome Free 5.5.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n\n .fa,.fab,.fal,.far,.fas{\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  display:inline-block;\n  font-style:normal;\n  font-variant:normal;\n  text-rendering:auto;\n  line-height:1\n}\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  left: 0;\n  position: absolute;\n  text-align: center;\n  width: 100%; }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\nreaders do not read off random characters that represent icons */\n.fa-500px:before {\n  content: \"\\F26E\"; }\n\n.fa-accessible-icon:before {\n  content: \"\\F368\"; }\n\n.fa-accusoft:before {\n  content: \"\\F369\"; }\n\n.fa-acquisitions-incorporated:before {\n  content: \"\\F6AF\"; }\n\n.fa-ad:before {\n  content: \"\\F641\"; }\n\n.fa-address-book:before {\n  content: \"\\F2B9\"; }\n\n.fa-address-card:before {\n  content: \"\\F2BB\"; }\n\n.fa-adjust:before {\n  content: \"\\F042\"; }\n\n.fa-adn:before {\n  content: \"\\F170\"; }\n\n.fa-adversal:before {\n  content: \"\\F36A\"; }\n\n.fa-affiliatetheme:before {\n  content: \"\\F36B\"; }\n\n.fa-air-freshener:before {\n  content: \"\\F5D0\"; }\n\n.fa-algolia:before {\n  content: \"\\F36C\"; }\n\n.fa-align-center:before {\n  content: \"\\F037\"; }\n\n.fa-align-justify:before {\n  content: \"\\F039\"; }\n\n.fa-align-left:before {\n  content: \"\\F036\"; }\n\n.fa-align-right:before {\n  content: \"\\F038\"; }\n\n.fa-alipay:before {\n  content: \"\\F642\"; }\n\n.fa-allergies:before {\n  content: \"\\F461\"; }\n\n.fa-amazon:before {\n  content: \"\\F270\"; }\n\n.fa-amazon-pay:before {\n  content: \"\\F42C\"; }\n\n.fa-ambulance:before {\n  content: \"\\F0F9\"; }\n\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\"; }\n\n.fa-amilia:before {\n  content: \"\\F36D\"; }\n\n.fa-anchor:before {\n  content: \"\\F13D\"; }\n\n.fa-android:before {\n  content: \"\\F17B\"; }\n\n.fa-angellist:before {\n  content: \"\\F209\"; }\n\n.fa-angle-double-down:before {\n  content: \"\\F103\"; }\n\n.fa-angle-double-left:before {\n  content: \"\\F100\"; }\n\n.fa-angle-double-right:before {\n  content: \"\\F101\"; }\n\n.fa-angle-double-up:before {\n  content: \"\\F102\"; }\n\n.fa-angle-down:before {\n  content: \"\\F107\"; }\n\n.fa-angle-left:before {\n  content: \"\\F104\"; }\n\n.fa-angle-right:before {\n  content: \"\\F105\"; }\n\n.fa-angle-up:before {\n  content: \"\\F106\"; }\n\n.fa-angry:before {\n  content: \"\\F556\"; }\n\n.fa-angrycreative:before {\n  content: \"\\F36E\"; }\n\n.fa-angular:before {\n  content: \"\\F420\"; }\n\n.fa-ankh:before {\n  content: \"\\F644\"; }\n\n.fa-app-store:before {\n  content: \"\\F36F\"; }\n\n.fa-app-store-ios:before {\n  content: \"\\F370\"; }\n\n.fa-apper:before {\n  content: \"\\F371\"; }\n\n.fa-apple:before {\n  content: \"\\F179\"; }\n\n.fa-apple-alt:before {\n  content: \"\\F5D1\"; }\n\n.fa-apple-pay:before {\n  content: \"\\F415\"; }\n\n.fa-archive:before {\n  content: \"\\F187\"; }\n\n.fa-archway:before {\n  content: \"\\F557\"; }\n\n.fa-arrow-alt-circle-down:before {\n  content: \"\\F358\"; }\n\n.fa-arrow-alt-circle-left:before {\n  content: \"\\F359\"; }\n\n.fa-arrow-alt-circle-right:before {\n  content: \"\\F35A\"; }\n\n.fa-arrow-alt-circle-up:before {\n  content: \"\\F35B\"; }\n\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\"; }\n\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\"; }\n\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\"; }\n\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\"; }\n\n.fa-arrow-down:before {\n  content: \"\\F063\"; }\n\n.fa-arrow-left:before {\n  content: \"\\F060\"; }\n\n.fa-arrow-right:before {\n  content: \"\\F061\"; }\n\n.fa-arrow-up:before {\n  content: \"\\F062\"; }\n\n.fa-arrows-alt:before {\n  content: \"\\F0B2\"; }\n\n.fa-arrows-alt-h:before {\n  content: \"\\F337\"; }\n\n.fa-arrows-alt-v:before {\n  content: \"\\F338\"; }\n\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\"; }\n\n.fa-asterisk:before {\n  content: \"\\F069\"; }\n\n.fa-asymmetrik:before {\n  content: \"\\F372\"; }\n\n.fa-at:before {\n  content: \"\\F1FA\"; }\n\n.fa-atlas:before {\n  content: \"\\F558\"; }\n\n.fa-atom:before {\n  content: \"\\F5D2\"; }\n\n.fa-audible:before {\n  content: \"\\F373\"; }\n\n.fa-audio-description:before {\n  content: \"\\F29E\"; }\n\n.fa-autoprefixer:before {\n  content: \"\\F41C\"; }\n\n.fa-avianex:before {\n  content: \"\\F374\"; }\n\n.fa-aviato:before {\n  content: \"\\F421\"; }\n\n.fa-award:before {\n  content: \"\\F559\"; }\n\n.fa-aws:before {\n  content: \"\\F375\"; }\n\n.fa-backspace:before {\n  content: \"\\F55A\"; }\n\n.fa-backward:before {\n  content: \"\\F04A\"; }\n\n.fa-balance-scale:before {\n  content: \"\\F24E\"; }\n\n.fa-ban:before {\n  content: \"\\F05E\"; }\n\n.fa-band-aid:before {\n  content: \"\\F462\"; }\n\n.fa-bandcamp:before {\n  content: \"\\F2D5\"; }\n\n.fa-barcode:before {\n  content: \"\\F02A\"; }\n\n.fa-bars:before {\n  content: \"\\F0C9\"; }\n\n.fa-baseball-ball:before {\n  content: \"\\F433\"; }\n\n.fa-basketball-ball:before {\n  content: \"\\F434\"; }\n\n.fa-bath:before {\n  content: \"\\F2CD\"; }\n\n.fa-battery-empty:before {\n  content: \"\\F244\"; }\n\n.fa-battery-full:before {\n  content: \"\\F240\"; }\n\n.fa-battery-half:before {\n  content: \"\\F242\"; }\n\n.fa-battery-quarter:before {\n  content: \"\\F243\"; }\n\n.fa-battery-three-quarters:before {\n  content: \"\\F241\"; }\n\n.fa-bed:before {\n  content: \"\\F236\"; }\n\n.fa-beer:before {\n  content: \"\\F0FC\"; }\n\n.fa-behance:before {\n  content: \"\\F1B4\"; }\n\n.fa-behance-square:before {\n  content: \"\\F1B5\"; }\n\n.fa-bell:before {\n  content: \"\\F0F3\"; }\n\n.fa-bell-slash:before {\n  content: \"\\F1F6\"; }\n\n.fa-bezier-curve:before {\n  content: \"\\F55B\"; }\n\n.fa-bible:before {\n  content: \"\\F647\"; }\n\n.fa-bicycle:before {\n  content: \"\\F206\"; }\n\n.fa-bimobject:before {\n  content: \"\\F378\"; }\n\n.fa-binoculars:before {\n  content: \"\\F1E5\"; }\n\n.fa-birthday-cake:before {\n  content: \"\\F1FD\"; }\n\n.fa-bitbucket:before {\n  content: \"\\F171\"; }\n\n.fa-bitcoin:before {\n  content: \"\\F379\"; }\n\n.fa-bity:before {\n  content: \"\\F37A\"; }\n\n.fa-black-tie:before {\n  content: \"\\F27E\"; }\n\n.fa-blackberry:before {\n  content: \"\\F37B\"; }\n\n.fa-blender:before {\n  content: \"\\F517\"; }\n\n.fa-blender-phone:before {\n  content: \"\\F6B6\"; }\n\n.fa-blind:before {\n  content: \"\\F29D\"; }\n\n.fa-blogger:before {\n  content: \"\\F37C\"; }\n\n.fa-blogger-b:before {\n  content: \"\\F37D\"; }\n\n.fa-bluetooth:before {\n  content: \"\\F293\"; }\n\n.fa-bluetooth-b:before {\n  content: \"\\F294\"; }\n\n.fa-bold:before {\n  content: \"\\F032\"; }\n\n.fa-bolt:before {\n  content: \"\\F0E7\"; }\n\n.fa-bomb:before {\n  content: \"\\F1E2\"; }\n\n.fa-bone:before {\n  content: \"\\F5D7\"; }\n\n.fa-bong:before {\n  content: \"\\F55C\"; }\n\n.fa-book:before {\n  content: \"\\F02D\"; }\n\n.fa-book-dead:before {\n  content: \"\\F6B7\"; }\n\n.fa-book-open:before {\n  content: \"\\F518\"; }\n\n.fa-book-reader:before {\n  content: \"\\F5DA\"; }\n\n.fa-bookmark:before {\n  content: \"\\F02E\"; }\n\n.fa-bowling-ball:before {\n  content: \"\\F436\"; }\n\n.fa-box:before {\n  content: \"\\F466\"; }\n\n.fa-box-open:before {\n  content: \"\\F49E\"; }\n\n.fa-boxes:before {\n  content: \"\\F468\"; }\n\n.fa-braille:before {\n  content: \"\\F2A1\"; }\n\n.fa-brain:before {\n  content: \"\\F5DC\"; }\n\n.fa-briefcase:before {\n  content: \"\\F0B1\"; }\n\n.fa-briefcase-medical:before {\n  content: \"\\F469\"; }\n\n.fa-broadcast-tower:before {\n  content: \"\\F519\"; }\n\n.fa-broom:before {\n  content: \"\\F51A\"; }\n\n.fa-brush:before {\n  content: \"\\F55D\"; }\n\n.fa-btc:before {\n  content: \"\\F15A\"; }\n\n.fa-bug:before {\n  content: \"\\F188\"; }\n\n.fa-building:before {\n  content: \"\\F1AD\"; }\n\n.fa-bullhorn:before {\n  content: \"\\F0A1\"; }\n\n.fa-bullseye:before {\n  content: \"\\F140\"; }\n\n.fa-burn:before {\n  content: \"\\F46A\"; }\n\n.fa-buromobelexperte:before {\n  content: \"\\F37F\"; }\n\n.fa-bus:before {\n  content: \"\\F207\"; }\n\n.fa-bus-alt:before {\n  content: \"\\F55E\"; }\n\n.fa-business-time:before {\n  content: \"\\F64A\"; }\n\n.fa-buysellads:before {\n  content: \"\\F20D\"; }\n\n.fa-calculator:before {\n  content: \"\\F1EC\"; }\n\n.fa-calendar:before {\n  content: \"\\F133\"; }\n\n.fa-calendar-alt:before {\n  content: \"\\F073\"; }\n\n.fa-calendar-check:before {\n  content: \"\\F274\"; }\n\n.fa-calendar-minus:before {\n  content: \"\\F272\"; }\n\n.fa-calendar-plus:before {\n  content: \"\\F271\"; }\n\n.fa-calendar-times:before {\n  content: \"\\F273\"; }\n\n.fa-camera:before {\n  content: \"\\F030\"; }\n\n.fa-camera-retro:before {\n  content: \"\\F083\"; }\n\n.fa-campground:before {\n  content: \"\\F6BB\"; }\n\n.fa-cannabis:before {\n  content: \"\\F55F\"; }\n\n.fa-capsules:before {\n  content: \"\\F46B\"; }\n\n.fa-car:before {\n  content: \"\\F1B9\"; }\n\n.fa-car-alt:before {\n  content: \"\\F5DE\"; }\n\n.fa-car-battery:before {\n  content: \"\\F5DF\"; }\n\n.fa-car-crash:before {\n  content: \"\\F5E1\"; }\n\n.fa-car-side:before {\n  content: \"\\F5E4\"; }\n\n.fa-caret-down:before {\n  content: \"\\F0D7\"; }\n\n.fa-caret-left:before {\n  content: \"\\F0D9\"; }\n\n.fa-caret-right:before {\n  content: \"\\F0DA\"; }\n\n.fa-caret-square-down:before {\n  content: \"\\F150\"; }\n\n.fa-caret-square-left:before {\n  content: \"\\F191\"; }\n\n.fa-caret-square-right:before {\n  content: \"\\F152\"; }\n\n.fa-caret-square-up:before {\n  content: \"\\F151\"; }\n\n.fa-caret-up:before {\n  content: \"\\F0D8\"; }\n\n.fa-cart-arrow-down:before {\n  content: \"\\F218\"; }\n\n.fa-cart-plus:before {\n  content: \"\\F217\"; }\n\n.fa-cat:before {\n  content: \"\\F6BE\"; }\n\n.fa-cc-amazon-pay:before {\n  content: \"\\F42D\"; }\n\n.fa-cc-amex:before {\n  content: \"\\F1F3\"; }\n\n.fa-cc-apple-pay:before {\n  content: \"\\F416\"; }\n\n.fa-cc-diners-club:before {\n  content: \"\\F24C\"; }\n\n.fa-cc-discover:before {\n  content: \"\\F1F2\"; }\n\n.fa-cc-jcb:before {\n  content: \"\\F24B\"; }\n\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\"; }\n\n.fa-cc-paypal:before {\n  content: \"\\F1F4\"; }\n\n.fa-cc-stripe:before {\n  content: \"\\F1F5\"; }\n\n.fa-cc-visa:before {\n  content: \"\\F1F0\"; }\n\n.fa-centercode:before {\n  content: \"\\F380\"; }\n\n.fa-certificate:before {\n  content: \"\\F0A3\"; }\n\n.fa-chair:before {\n  content: \"\\F6C0\"; }\n\n.fa-chalkboard:before {\n  content: \"\\F51B\"; }\n\n.fa-chalkboard-teacher:before {\n  content: \"\\F51C\"; }\n\n.fa-charging-station:before {\n  content: \"\\F5E7\"; }\n\n.fa-chart-area:before {\n  content: \"\\F1FE\"; }\n\n.fa-chart-bar:before {\n  content: \"\\F080\"; }\n\n.fa-chart-line:before {\n  content: \"\\F201\"; }\n\n.fa-chart-pie:before {\n  content: \"\\F200\"; }\n\n.fa-check:before {\n  content: \"\\F00C\"; }\n\n.fa-check-circle:before {\n  content: \"\\F058\"; }\n\n.fa-check-double:before {\n  content: \"\\F560\"; }\n\n.fa-check-square:before {\n  content: \"\\F14A\"; }\n\n.fa-chess:before {\n  content: \"\\F439\"; }\n\n.fa-chess-bishop:before {\n  content: \"\\F43A\"; }\n\n.fa-chess-board:before {\n  content: \"\\F43C\"; }\n\n.fa-chess-king:before {\n  content: \"\\F43F\"; }\n\n.fa-chess-knight:before {\n  content: \"\\F441\"; }\n\n.fa-chess-pawn:before {\n  content: \"\\F443\"; }\n\n.fa-chess-queen:before {\n  content: \"\\F445\"; }\n\n.fa-chess-rook:before {\n  content: \"\\F447\"; }\n\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\"; }\n\n.fa-chevron-circle-left:before {\n  content: \"\\F137\"; }\n\n.fa-chevron-circle-right:before {\n  content: \"\\F138\"; }\n\n.fa-chevron-circle-up:before {\n  content: \"\\F139\"; }\n\n.fa-chevron-down:before {\n  content: \"\\F078\"; }\n\n.fa-chevron-left:before {\n  content: \"\\F053\"; }\n\n.fa-chevron-right:before {\n  content: \"\\F054\"; }\n\n.fa-chevron-up:before {\n  content: \"\\F077\"; }\n\n.fa-child:before {\n  content: \"\\F1AE\"; }\n\n.fa-chrome:before {\n  content: \"\\F268\"; }\n\n.fa-church:before {\n  content: \"\\F51D\"; }\n\n.fa-circle:before {\n  content: \"\\F111\"; }\n\n.fa-circle-notch:before {\n  content: \"\\F1CE\"; }\n\n.fa-city:before {\n  content: \"\\F64F\"; }\n\n.fa-clipboard:before {\n  content: \"\\F328\"; }\n\n.fa-clipboard-check:before {\n  content: \"\\F46C\"; }\n\n.fa-clipboard-list:before {\n  content: \"\\F46D\"; }\n\n.fa-clock:before {\n  content: \"\\F017\"; }\n\n.fa-clone:before {\n  content: \"\\F24D\"; }\n\n.fa-closed-captioning:before {\n  content: \"\\F20A\"; }\n\n.fa-cloud:before {\n  content: \"\\F0C2\"; }\n\n.fa-cloud-download-alt:before {\n  content: \"\\F381\"; }\n\n.fa-cloud-meatball:before {\n  content: \"\\F73B\"; }\n\n.fa-cloud-moon:before {\n  content: \"\\F6C3\"; }\n\n.fa-cloud-moon-rain:before {\n  content: \"\\F73C\"; }\n\n.fa-cloud-rain:before {\n  content: \"\\F73D\"; }\n\n.fa-cloud-showers-heavy:before {\n  content: \"\\F740\"; }\n\n.fa-cloud-sun:before {\n  content: \"\\F6C4\"; }\n\n.fa-cloud-sun-rain:before {\n  content: \"\\F743\"; }\n\n.fa-cloud-upload-alt:before {\n  content: \"\\F382\"; }\n\n.fa-cloudscale:before {\n  content: \"\\F383\"; }\n\n.fa-cloudsmith:before {\n  content: \"\\F384\"; }\n\n.fa-cloudversify:before {\n  content: \"\\F385\"; }\n\n.fa-cocktail:before {\n  content: \"\\F561\"; }\n\n.fa-code:before {\n  content: \"\\F121\"; }\n\n.fa-code-branch:before {\n  content: \"\\F126\"; }\n\n.fa-codepen:before {\n  content: \"\\F1CB\"; }\n\n.fa-codiepie:before {\n  content: \"\\F284\"; }\n\n.fa-coffee:before {\n  content: \"\\F0F4\"; }\n\n.fa-cog:before {\n  content: \"\\F013\"; }\n\n.fa-cogs:before {\n  content: \"\\F085\"; }\n\n.fa-coins:before {\n  content: \"\\F51E\"; }\n\n.fa-columns:before {\n  content: \"\\F0DB\"; }\n\n.fa-comment:before {\n  content: \"\\F075\"; }\n\n.fa-comment-alt:before {\n  content: \"\\F27A\"; }\n\n.fa-comment-dollar:before {\n  content: \"\\F651\"; }\n\n.fa-comment-dots:before {\n  content: \"\\F4AD\"; }\n\n.fa-comment-slash:before {\n  content: \"\\F4B3\"; }\n\n.fa-comments:before {\n  content: \"\\F086\"; }\n\n.fa-comments-dollar:before {\n  content: \"\\F653\"; }\n\n.fa-compact-disc:before {\n  content: \"\\F51F\"; }\n\n.fa-compass:before {\n  content: \"\\F14E\"; }\n\n.fa-compress:before {\n  content: \"\\F066\"; }\n\n.fa-concierge-bell:before {\n  content: \"\\F562\"; }\n\n.fa-connectdevelop:before {\n  content: \"\\F20E\"; }\n\n.fa-contao:before {\n  content: \"\\F26D\"; }\n\n.fa-cookie:before {\n  content: \"\\F563\"; }\n\n.fa-cookie-bite:before {\n  content: \"\\F564\"; }\n\n.fa-copy:before {\n  content: \"\\F0C5\"; }\n\n.fa-copyright:before {\n  content: \"\\F1F9\"; }\n\n.fa-couch:before {\n  content: \"\\F4B8\"; }\n\n.fa-cpanel:before {\n  content: \"\\F388\"; }\n\n.fa-creative-commons:before {\n  content: \"\\F25E\"; }\n\n.fa-creative-commons-by:before {\n  content: \"\\F4E7\"; }\n\n.fa-creative-commons-nc:before {\n  content: \"\\F4E8\"; }\n\n.fa-creative-commons-nc-eu:before {\n  content: \"\\F4E9\"; }\n\n.fa-creative-commons-nc-jp:before {\n  content: \"\\F4EA\"; }\n\n.fa-creative-commons-nd:before {\n  content: \"\\F4EB\"; }\n\n.fa-creative-commons-pd:before {\n  content: \"\\F4EC\"; }\n\n.fa-creative-commons-pd-alt:before {\n  content: \"\\F4ED\"; }\n\n.fa-creative-commons-remix:before {\n  content: \"\\F4EE\"; }\n\n.fa-creative-commons-sa:before {\n  content: \"\\F4EF\"; }\n\n.fa-creative-commons-sampling:before {\n  content: \"\\F4F0\"; }\n\n.fa-creative-commons-sampling-plus:before {\n  content: \"\\F4F1\"; }\n\n.fa-creative-commons-share:before {\n  content: \"\\F4F2\"; }\n\n.fa-creative-commons-zero:before {\n  content: \"\\F4F3\"; }\n\n.fa-credit-card:before {\n  content: \"\\F09D\"; }\n\n.fa-critical-role:before {\n  content: \"\\F6C9\"; }\n\n.fa-crop:before {\n  content: \"\\F125\"; }\n\n.fa-crop-alt:before {\n  content: \"\\F565\"; }\n\n.fa-cross:before {\n  content: \"\\F654\"; }\n\n.fa-crosshairs:before {\n  content: \"\\F05B\"; }\n\n.fa-crow:before {\n  content: \"\\F520\"; }\n\n.fa-crown:before {\n  content: \"\\F521\"; }\n\n.fa-css3:before {\n  content: \"\\F13C\"; }\n\n.fa-css3-alt:before {\n  content: \"\\F38B\"; }\n\n.fa-cube:before {\n  content: \"\\F1B2\"; }\n\n.fa-cubes:before {\n  content: \"\\F1B3\"; }\n\n.fa-cut:before {\n  content: \"\\F0C4\"; }\n\n.fa-cuttlefish:before {\n  content: \"\\F38C\"; }\n\n.fa-d-and-d:before {\n  content: \"\\F38D\"; }\n\n.fa-d-and-d-beyond:before {\n  content: \"\\F6CA\"; }\n\n.fa-dashcube:before {\n  content: \"\\F210\"; }\n\n.fa-database:before {\n  content: \"\\F1C0\"; }\n\n.fa-deaf:before {\n  content: \"\\F2A4\"; }\n\n.fa-delicious:before {\n  content: \"\\F1A5\"; }\n\n.fa-democrat:before {\n  content: \"\\F747\"; }\n\n.fa-deploydog:before {\n  content: \"\\F38E\"; }\n\n.fa-deskpro:before {\n  content: \"\\F38F\"; }\n\n.fa-desktop:before {\n  content: \"\\F108\"; }\n\n.fa-dev:before {\n  content: \"\\F6CC\"; }\n\n.fa-deviantart:before {\n  content: \"\\F1BD\"; }\n\n.fa-dharmachakra:before {\n  content: \"\\F655\"; }\n\n.fa-diagnoses:before {\n  content: \"\\F470\"; }\n\n.fa-dice:before {\n  content: \"\\F522\"; }\n\n.fa-dice-d20:before {\n  content: \"\\F6CF\"; }\n\n.fa-dice-d6:before {\n  content: \"\\F6D1\"; }\n\n.fa-dice-five:before {\n  content: \"\\F523\"; }\n\n.fa-dice-four:before {\n  content: \"\\F524\"; }\n\n.fa-dice-one:before {\n  content: \"\\F525\"; }\n\n.fa-dice-six:before {\n  content: \"\\F526\"; }\n\n.fa-dice-three:before {\n  content: \"\\F527\"; }\n\n.fa-dice-two:before {\n  content: \"\\F528\"; }\n\n.fa-digg:before {\n  content: \"\\F1A6\"; }\n\n.fa-digital-ocean:before {\n  content: \"\\F391\"; }\n\n.fa-digital-tachograph:before {\n  content: \"\\F566\"; }\n\n.fa-directions:before {\n  content: \"\\F5EB\"; }\n\n.fa-discord:before {\n  content: \"\\F392\"; }\n\n.fa-discourse:before {\n  content: \"\\F393\"; }\n\n.fa-divide:before {\n  content: \"\\F529\"; }\n\n.fa-dizzy:before {\n  content: \"\\F567\"; }\n\n.fa-dna:before {\n  content: \"\\F471\"; }\n\n.fa-dochub:before {\n  content: \"\\F394\"; }\n\n.fa-docker:before {\n  content: \"\\F395\"; }\n\n.fa-dog:before {\n  content: \"\\F6D3\"; }\n\n.fa-dollar-sign:before {\n  content: \"\\F155\"; }\n\n.fa-dolly:before {\n  content: \"\\F472\"; }\n\n.fa-dolly-flatbed:before {\n  content: \"\\F474\"; }\n\n.fa-donate:before {\n  content: \"\\F4B9\"; }\n\n.fa-door-closed:before {\n  content: \"\\F52A\"; }\n\n.fa-door-open:before {\n  content: \"\\F52B\"; }\n\n.fa-dot-circle:before {\n  content: \"\\F192\"; }\n\n.fa-dove:before {\n  content: \"\\F4BA\"; }\n\n.fa-download:before {\n  content: \"\\F019\"; }\n\n.fa-draft2digital:before {\n  content: \"\\F396\"; }\n\n.fa-drafting-compass:before {\n  content: \"\\F568\"; }\n\n.fa-dragon:before {\n  content: \"\\F6D5\"; }\n\n.fa-draw-polygon:before {\n  content: \"\\F5EE\"; }\n\n.fa-dribbble:before {\n  content: \"\\F17D\"; }\n\n.fa-dribbble-square:before {\n  content: \"\\F397\"; }\n\n.fa-dropbox:before {\n  content: \"\\F16B\"; }\n\n.fa-drum:before {\n  content: \"\\F569\"; }\n\n.fa-drum-steelpan:before {\n  content: \"\\F56A\"; }\n\n.fa-drumstick-bite:before {\n  content: \"\\F6D7\"; }\n\n.fa-drupal:before {\n  content: \"\\F1A9\"; }\n\n.fa-dumbbell:before {\n  content: \"\\F44B\"; }\n\n.fa-dungeon:before {\n  content: \"\\F6D9\"; }\n\n.fa-dyalog:before {\n  content: \"\\F399\"; }\n\n.fa-earlybirds:before {\n  content: \"\\F39A\"; }\n\n.fa-ebay:before {\n  content: \"\\F4F4\"; }\n\n.fa-edge:before {\n  content: \"\\F282\"; }\n\n.fa-edit:before {\n  content: \"\\F044\"; }\n\n.fa-eject:before {\n  content: \"\\F052\"; }\n\n.fa-elementor:before {\n  content: \"\\F430\"; }\n\n.fa-ellipsis-h:before {\n  content: \"\\F141\"; }\n\n.fa-ellipsis-v:before {\n  content: \"\\F142\"; }\n\n.fa-ello:before {\n  content: \"\\F5F1\"; }\n\n.fa-ember:before {\n  content: \"\\F423\"; }\n\n.fa-empire:before {\n  content: \"\\F1D1\"; }\n\n.fa-envelope:before {\n  content: \"\\F0E0\"; }\n\n.fa-envelope-open:before {\n  content: \"\\F2B6\"; }\n\n.fa-envelope-open-text:before {\n  content: \"\\F658\"; }\n\n.fa-envelope-square:before {\n  content: \"\\F199\"; }\n\n.fa-envira:before {\n  content: \"\\F299\"; }\n\n.fa-equals:before {\n  content: \"\\F52C\"; }\n\n.fa-eraser:before {\n  content: \"\\F12D\"; }\n\n.fa-erlang:before {\n  content: \"\\F39D\"; }\n\n.fa-ethereum:before {\n  content: \"\\F42E\"; }\n\n.fa-etsy:before {\n  content: \"\\F2D7\"; }\n\n.fa-euro-sign:before {\n  content: \"\\F153\"; }\n\n.fa-exchange-alt:before {\n  content: \"\\F362\"; }\n\n.fa-exclamation:before {\n  content: \"\\F12A\"; }\n\n.fa-exclamation-circle:before {\n  content: \"\\F06A\"; }\n\n.fa-exclamation-triangle:before {\n  content: \"\\F071\"; }\n\n.fa-expand:before {\n  content: \"\\F065\"; }\n\n.fa-expand-arrows-alt:before {\n  content: \"\\F31E\"; }\n\n.fa-expeditedssl:before {\n  content: \"\\F23E\"; }\n\n.fa-external-link-alt:before {\n  content: \"\\F35D\"; }\n\n.fa-external-link-square-alt:before {\n  content: \"\\F360\"; }\n\n.fa-eye:before {\n  content: \"\\F06E\"; }\n\n.fa-eye-dropper:before {\n  content: \"\\F1FB\"; }\n\n.fa-eye-slash:before {\n  content: \"\\F070\"; }\n\n.fa-facebook:before {\n  content: \"\\F09A\"; }\n\n.fa-facebook-f:before {\n  content: \"\\F39E\"; }\n\n.fa-facebook-messenger:before {\n  content: \"\\F39F\"; }\n\n.fa-facebook-square:before {\n  content: \"\\F082\"; }\n\n.fa-fantasy-flight-games:before {\n  content: \"\\F6DC\"; }\n\n.fa-fast-backward:before {\n  content: \"\\F049\"; }\n\n.fa-fast-forward:before {\n  content: \"\\F050\"; }\n\n.fa-fax:before {\n  content: \"\\F1AC\"; }\n\n.fa-feather:before {\n  content: \"\\F52D\"; }\n\n.fa-feather-alt:before {\n  content: \"\\F56B\"; }\n\n.fa-female:before {\n  content: \"\\F182\"; }\n\n.fa-fighter-jet:before {\n  content: \"\\F0FB\"; }\n\n.fa-file:before {\n  content: \"\\F15B\"; }\n\n.fa-file-alt:before {\n  content: \"\\F15C\"; }\n\n.fa-file-archive:before {\n  content: \"\\F1C6\"; }\n\n.fa-file-audio:before {\n  content: \"\\F1C7\"; }\n\n.fa-file-code:before {\n  content: \"\\F1C9\"; }\n\n.fa-file-contract:before {\n  content: \"\\F56C\"; }\n\n.fa-file-csv:before {\n  content: \"\\F6DD\"; }\n\n.fa-file-download:before {\n  content: \"\\F56D\"; }\n\n.fa-file-excel:before {\n  content: \"\\F1C3\"; }\n\n.fa-file-export:before {\n  content: \"\\F56E\"; }\n\n.fa-file-image:before {\n  content: \"\\F1C5\"; }\n\n.fa-file-import:before {\n  content: \"\\F56F\"; }\n\n.fa-file-invoice:before {\n  content: \"\\F570\"; }\n\n.fa-file-invoice-dollar:before {\n  content: \"\\F571\"; }\n\n.fa-file-medical:before {\n  content: \"\\F477\"; }\n\n.fa-file-medical-alt:before {\n  content: \"\\F478\"; }\n\n.fa-file-pdf:before {\n  content: \"\\F1C1\"; }\n\n.fa-file-powerpoint:before {\n  content: \"\\F1C4\"; }\n\n.fa-file-prescription:before {\n  content: \"\\F572\"; }\n\n.fa-file-signature:before {\n  content: \"\\F573\"; }\n\n.fa-file-upload:before {\n  content: \"\\F574\"; }\n\n.fa-file-video:before {\n  content: \"\\F1C8\"; }\n\n.fa-file-word:before {\n  content: \"\\F1C2\"; }\n\n.fa-fill:before {\n  content: \"\\F575\"; }\n\n.fa-fill-drip:before {\n  content: \"\\F576\"; }\n\n.fa-film:before {\n  content: \"\\F008\"; }\n\n.fa-filter:before {\n  content: \"\\F0B0\"; }\n\n.fa-fingerprint:before {\n  content: \"\\F577\"; }\n\n.fa-fire:before {\n  content: \"\\F06D\"; }\n\n.fa-fire-extinguisher:before {\n  content: \"\\F134\"; }\n\n.fa-firefox:before {\n  content: \"\\F269\"; }\n\n.fa-first-aid:before {\n  content: \"\\F479\"; }\n\n.fa-first-order:before {\n  content: \"\\F2B0\"; }\n\n.fa-first-order-alt:before {\n  content: \"\\F50A\"; }\n\n.fa-firstdraft:before {\n  content: \"\\F3A1\"; }\n\n.fa-fish:before {\n  content: \"\\F578\"; }\n\n.fa-fist-raised:before {\n  content: \"\\F6DE\"; }\n\n.fa-flag:before {\n  content: \"\\F024\"; }\n\n.fa-flag-checkered:before {\n  content: \"\\F11E\"; }\n\n.fa-flag-usa:before {\n  content: \"\\F74D\"; }\n\n.fa-flask:before {\n  content: \"\\F0C3\"; }\n\n.fa-flickr:before {\n  content: \"\\F16E\"; }\n\n.fa-flipboard:before {\n  content: \"\\F44D\"; }\n\n.fa-flushed:before {\n  content: \"\\F579\"; }\n\n.fa-fly:before {\n  content: \"\\F417\"; }\n\n.fa-folder:before {\n  content: \"\\F07B\"; }\n\n.fa-folder-minus:before {\n  content: \"\\F65D\"; }\n\n.fa-folder-open:before {\n  content: \"\\F07C\"; }\n\n.fa-folder-plus:before {\n  content: \"\\F65E\"; }\n\n.fa-font:before {\n  content: \"\\F031\"; }\n\n.fa-font-awesome:before {\n  content: \"\\F2B4\"; }\n\n.fa-font-awesome-alt:before {\n  content: \"\\F35C\"; }\n\n.fa-font-awesome-flag:before {\n  content: \"\\F425\"; }\n\n.fa-font-awesome-logo-full:before {\n  content: \"\\F4E6\"; }\n\n.fa-fonticons:before {\n  content: \"\\F280\"; }\n\n.fa-fonticons-fi:before {\n  content: \"\\F3A2\"; }\n\n.fa-football-ball:before {\n  content: \"\\F44E\"; }\n\n.fa-fort-awesome:before {\n  content: \"\\F286\"; }\n\n.fa-fort-awesome-alt:before {\n  content: \"\\F3A3\"; }\n\n.fa-forumbee:before {\n  content: \"\\F211\"; }\n\n.fa-forward:before {\n  content: \"\\F04E\"; }\n\n.fa-foursquare:before {\n  content: \"\\F180\"; }\n\n.fa-free-code-camp:before {\n  content: \"\\F2C5\"; }\n\n.fa-freebsd:before {\n  content: \"\\F3A4\"; }\n\n.fa-frog:before {\n  content: \"\\F52E\"; }\n\n.fa-frown:before {\n  content: \"\\F119\"; }\n\n.fa-frown-open:before {\n  content: \"\\F57A\"; }\n\n.fa-fulcrum:before {\n  content: \"\\F50B\"; }\n\n.fa-funnel-dollar:before {\n  content: \"\\F662\"; }\n\n.fa-futbol:before {\n  content: \"\\F1E3\"; }\n\n.fa-galactic-republic:before {\n  content: \"\\F50C\"; }\n\n.fa-galactic-senate:before {\n  content: \"\\F50D\"; }\n\n.fa-gamepad:before {\n  content: \"\\F11B\"; }\n\n.fa-gas-pump:before {\n  content: \"\\F52F\"; }\n\n.fa-gavel:before {\n  content: \"\\F0E3\"; }\n\n.fa-gem:before {\n  content: \"\\F3A5\"; }\n\n.fa-genderless:before {\n  content: \"\\F22D\"; }\n\n.fa-get-pocket:before {\n  content: \"\\F265\"; }\n\n.fa-gg:before {\n  content: \"\\F260\"; }\n\n.fa-gg-circle:before {\n  content: \"\\F261\"; }\n\n.fa-ghost:before {\n  content: \"\\F6E2\"; }\n\n.fa-gift:before {\n  content: \"\\F06B\"; }\n\n.fa-git:before {\n  content: \"\\F1D3\"; }\n\n.fa-git-square:before {\n  content: \"\\F1D2\"; }\n\n.fa-github:before {\n  content: \"\\F09B\"; }\n\n.fa-github-alt:before {\n  content: \"\\F113\"; }\n\n.fa-github-square:before {\n  content: \"\\F092\"; }\n\n.fa-gitkraken:before {\n  content: \"\\F3A6\"; }\n\n.fa-gitlab:before {\n  content: \"\\F296\"; }\n\n.fa-gitter:before {\n  content: \"\\F426\"; }\n\n.fa-glass-martini:before {\n  content: \"\\F000\"; }\n\n.fa-glass-martini-alt:before {\n  content: \"\\F57B\"; }\n\n.fa-glasses:before {\n  content: \"\\F530\"; }\n\n.fa-glide:before {\n  content: \"\\F2A5\"; }\n\n.fa-glide-g:before {\n  content: \"\\F2A6\"; }\n\n.fa-globe:before {\n  content: \"\\F0AC\"; }\n\n.fa-globe-africa:before {\n  content: \"\\F57C\"; }\n\n.fa-globe-americas:before {\n  content: \"\\F57D\"; }\n\n.fa-globe-asia:before {\n  content: \"\\F57E\"; }\n\n.fa-gofore:before {\n  content: \"\\F3A7\"; }\n\n.fa-golf-ball:before {\n  content: \"\\F450\"; }\n\n.fa-goodreads:before {\n  content: \"\\F3A8\"; }\n\n.fa-goodreads-g:before {\n  content: \"\\F3A9\"; }\n\n.fa-google:before {\n  content: \"\\F1A0\"; }\n\n.fa-google-drive:before {\n  content: \"\\F3AA\"; }\n\n.fa-google-play:before {\n  content: \"\\F3AB\"; }\n\n.fa-google-plus:before {\n  content: \"\\F2B3\"; }\n\n.fa-google-plus-g:before {\n  content: \"\\F0D5\"; }\n\n.fa-google-plus-square:before {\n  content: \"\\F0D4\"; }\n\n.fa-google-wallet:before {\n  content: \"\\F1EE\"; }\n\n.fa-gopuram:before {\n  content: \"\\F664\"; }\n\n.fa-graduation-cap:before {\n  content: \"\\F19D\"; }\n\n.fa-gratipay:before {\n  content: \"\\F184\"; }\n\n.fa-grav:before {\n  content: \"\\F2D6\"; }\n\n.fa-greater-than:before {\n  content: \"\\F531\"; }\n\n.fa-greater-than-equal:before {\n  content: \"\\F532\"; }\n\n.fa-grimace:before {\n  content: \"\\F57F\"; }\n\n.fa-grin:before {\n  content: \"\\F580\"; }\n\n.fa-grin-alt:before {\n  content: \"\\F581\"; }\n\n.fa-grin-beam:before {\n  content: \"\\F582\"; }\n\n.fa-grin-beam-sweat:before {\n  content: \"\\F583\"; }\n\n.fa-grin-hearts:before {\n  content: \"\\F584\"; }\n\n.fa-grin-squint:before {\n  content: \"\\F585\"; }\n\n.fa-grin-squint-tears:before {\n  content: \"\\F586\"; }\n\n.fa-grin-stars:before {\n  content: \"\\F587\"; }\n\n.fa-grin-tears:before {\n  content: \"\\F588\"; }\n\n.fa-grin-tongue:before {\n  content: \"\\F589\"; }\n\n.fa-grin-tongue-squint:before {\n  content: \"\\F58A\"; }\n\n.fa-grin-tongue-wink:before {\n  content: \"\\F58B\"; }\n\n.fa-grin-wink:before {\n  content: \"\\F58C\"; }\n\n.fa-grip-horizontal:before {\n  content: \"\\F58D\"; }\n\n.fa-grip-vertical:before {\n  content: \"\\F58E\"; }\n\n.fa-gripfire:before {\n  content: \"\\F3AC\"; }\n\n.fa-grunt:before {\n  content: \"\\F3AD\"; }\n\n.fa-gulp:before {\n  content: \"\\F3AE\"; }\n\n.fa-h-square:before {\n  content: \"\\F0FD\"; }\n\n.fa-hacker-news:before {\n  content: \"\\F1D4\"; }\n\n.fa-hacker-news-square:before {\n  content: \"\\F3AF\"; }\n\n.fa-hackerrank:before {\n  content: \"\\F5F7\"; }\n\n.fa-hammer:before {\n  content: \"\\F6E3\"; }\n\n.fa-hamsa:before {\n  content: \"\\F665\"; }\n\n.fa-hand-holding:before {\n  content: \"\\F4BD\"; }\n\n.fa-hand-holding-heart:before {\n  content: \"\\F4BE\"; }\n\n.fa-hand-holding-usd:before {\n  content: \"\\F4C0\"; }\n\n.fa-hand-lizard:before {\n  content: \"\\F258\"; }\n\n.fa-hand-paper:before {\n  content: \"\\F256\"; }\n\n.fa-hand-peace:before {\n  content: \"\\F25B\"; }\n\n.fa-hand-point-down:before {\n  content: \"\\F0A7\"; }\n\n.fa-hand-point-left:before {\n  content: \"\\F0A5\"; }\n\n.fa-hand-point-right:before {\n  content: \"\\F0A4\"; }\n\n.fa-hand-point-up:before {\n  content: \"\\F0A6\"; }\n\n.fa-hand-pointer:before {\n  content: \"\\F25A\"; }\n\n.fa-hand-rock:before {\n  content: \"\\F255\"; }\n\n.fa-hand-scissors:before {\n  content: \"\\F257\"; }\n\n.fa-hand-spock:before {\n  content: \"\\F259\"; }\n\n.fa-hands:before {\n  content: \"\\F4C2\"; }\n\n.fa-hands-helping:before {\n  content: \"\\F4C4\"; }\n\n.fa-handshake:before {\n  content: \"\\F2B5\"; }\n\n.fa-hanukiah:before {\n  content: \"\\F6E6\"; }\n\n.fa-hashtag:before {\n  content: \"\\F292\"; }\n\n.fa-hat-wizard:before {\n  content: \"\\F6E8\"; }\n\n.fa-haykal:before {\n  content: \"\\F666\"; }\n\n.fa-hdd:before {\n  content: \"\\F0A0\"; }\n\n.fa-heading:before {\n  content: \"\\F1DC\"; }\n\n.fa-headphones:before {\n  content: \"\\F025\"; }\n\n.fa-headphones-alt:before {\n  content: \"\\F58F\"; }\n\n.fa-headset:before {\n  content: \"\\F590\"; }\n\n.fa-heart:before {\n  content: \"\\F004\"; }\n\n.fa-heartbeat:before {\n  content: \"\\F21E\"; }\n\n.fa-helicopter:before {\n  content: \"\\F533\"; }\n\n.fa-highlighter:before {\n  content: \"\\F591\"; }\n\n.fa-hiking:before {\n  content: \"\\F6EC\"; }\n\n.fa-hippo:before {\n  content: \"\\F6ED\"; }\n\n.fa-hips:before {\n  content: \"\\F452\"; }\n\n.fa-hire-a-helper:before {\n  content: \"\\F3B0\"; }\n\n.fa-history:before {\n  content: \"\\F1DA\"; }\n\n.fa-hockey-puck:before {\n  content: \"\\F453\"; }\n\n.fa-home:before {\n  content: \"\\F015\"; }\n\n.fa-hooli:before {\n  content: \"\\F427\"; }\n\n.fa-hornbill:before {\n  content: \"\\F592\"; }\n\n.fa-horse:before {\n  content: \"\\F6F0\"; }\n\n.fa-hospital:before {\n  content: \"\\F0F8\"; }\n\n.fa-hospital-alt:before {\n  content: \"\\F47D\"; }\n\n.fa-hospital-symbol:before {\n  content: \"\\F47E\"; }\n\n.fa-hot-tub:before {\n  content: \"\\F593\"; }\n\n.fa-hotel:before {\n  content: \"\\F594\"; }\n\n.fa-hotjar:before {\n  content: \"\\F3B1\"; }\n\n.fa-hourglass:before {\n  content: \"\\F254\"; }\n\n.fa-hourglass-end:before {\n  content: \"\\F253\"; }\n\n.fa-hourglass-half:before {\n  content: \"\\F252\"; }\n\n.fa-hourglass-start:before {\n  content: \"\\F251\"; }\n\n.fa-house-damage:before {\n  content: \"\\F6F1\"; }\n\n.fa-houzz:before {\n  content: \"\\F27C\"; }\n\n.fa-hryvnia:before {\n  content: \"\\F6F2\"; }\n\n.fa-html5:before {\n  content: \"\\F13B\"; }\n\n.fa-hubspot:before {\n  content: \"\\F3B2\"; }\n\n.fa-i-cursor:before {\n  content: \"\\F246\"; }\n\n.fa-id-badge:before {\n  content: \"\\F2C1\"; }\n\n.fa-id-card:before {\n  content: \"\\F2C2\"; }\n\n.fa-id-card-alt:before {\n  content: \"\\F47F\"; }\n\n.fa-image:before {\n  content: \"\\F03E\"; }\n\n.fa-images:before {\n  content: \"\\F302\"; }\n\n.fa-imdb:before {\n  content: \"\\F2D8\"; }\n\n.fa-inbox:before {\n  content: \"\\F01C\"; }\n\n.fa-indent:before {\n  content: \"\\F03C\"; }\n\n.fa-industry:before {\n  content: \"\\F275\"; }\n\n.fa-infinity:before {\n  content: \"\\F534\"; }\n\n.fa-info:before {\n  content: \"\\F129\"; }\n\n.fa-info-circle:before {\n  content: \"\\F05A\"; }\n\n.fa-instagram:before {\n  content: \"\\F16D\"; }\n\n.fa-internet-explorer:before {\n  content: \"\\F26B\"; }\n\n.fa-ioxhost:before {\n  content: \"\\F208\"; }\n\n.fa-italic:before {\n  content: \"\\F033\"; }\n\n.fa-itunes:before {\n  content: \"\\F3B4\"; }\n\n.fa-itunes-note:before {\n  content: \"\\F3B5\"; }\n\n.fa-java:before {\n  content: \"\\F4E4\"; }\n\n.fa-jedi:before {\n  content: \"\\F669\"; }\n\n.fa-jedi-order:before {\n  content: \"\\F50E\"; }\n\n.fa-jenkins:before {\n  content: \"\\F3B6\"; }\n\n.fa-joget:before {\n  content: \"\\F3B7\"; }\n\n.fa-joint:before {\n  content: \"\\F595\"; }\n\n.fa-joomla:before {\n  content: \"\\F1AA\"; }\n\n.fa-journal-whills:before {\n  content: \"\\F66A\"; }\n\n.fa-js:before {\n  content: \"\\F3B8\"; }\n\n.fa-js-square:before {\n  content: \"\\F3B9\"; }\n\n.fa-jsfiddle:before {\n  content: \"\\F1CC\"; }\n\n.fa-kaaba:before {\n  content: \"\\F66B\"; }\n\n.fa-kaggle:before {\n  content: \"\\F5FA\"; }\n\n.fa-key:before {\n  content: \"\\F084\"; }\n\n.fa-keybase:before {\n  content: \"\\F4F5\"; }\n\n.fa-keyboard:before {\n  content: \"\\F11C\"; }\n\n.fa-keycdn:before {\n  content: \"\\F3BA\"; }\n\n.fa-khanda:before {\n  content: \"\\F66D\"; }\n\n.fa-kickstarter:before {\n  content: \"\\F3BB\"; }\n\n.fa-kickstarter-k:before {\n  content: \"\\F3BC\"; }\n\n.fa-kiss:before {\n  content: \"\\F596\"; }\n\n.fa-kiss-beam:before {\n  content: \"\\F597\"; }\n\n.fa-kiss-wink-heart:before {\n  content: \"\\F598\"; }\n\n.fa-kiwi-bird:before {\n  content: \"\\F535\"; }\n\n.fa-korvue:before {\n  content: \"\\F42F\"; }\n\n.fa-landmark:before {\n  content: \"\\F66F\"; }\n\n.fa-language:before {\n  content: \"\\F1AB\"; }\n\n.fa-laptop:before {\n  content: \"\\F109\"; }\n\n.fa-laptop-code:before {\n  content: \"\\F5FC\"; }\n\n.fa-laravel:before {\n  content: \"\\F3BD\"; }\n\n.fa-lastfm:before {\n  content: \"\\F202\"; }\n\n.fa-lastfm-square:before {\n  content: \"\\F203\"; }\n\n.fa-laugh:before {\n  content: \"\\F599\"; }\n\n.fa-laugh-beam:before {\n  content: \"\\F59A\"; }\n\n.fa-laugh-squint:before {\n  content: \"\\F59B\"; }\n\n.fa-laugh-wink:before {\n  content: \"\\F59C\"; }\n\n.fa-layer-group:before {\n  content: \"\\F5FD\"; }\n\n.fa-leaf:before {\n  content: \"\\F06C\"; }\n\n.fa-leanpub:before {\n  content: \"\\F212\"; }\n\n.fa-lemon:before {\n  content: \"\\F094\"; }\n\n.fa-less:before {\n  content: \"\\F41D\"; }\n\n.fa-less-than:before {\n  content: \"\\F536\"; }\n\n.fa-less-than-equal:before {\n  content: \"\\F537\"; }\n\n.fa-level-down-alt:before {\n  content: \"\\F3BE\"; }\n\n.fa-level-up-alt:before {\n  content: \"\\F3BF\"; }\n\n.fa-life-ring:before {\n  content: \"\\F1CD\"; }\n\n.fa-lightbulb:before {\n  content: \"\\F0EB\"; }\n\n.fa-line:before {\n  content: \"\\F3C0\"; }\n\n.fa-link:before {\n  content: \"\\F0C1\"; }\n\n.fa-linkedin:before {\n  content: \"\\F08C\"; }\n\n.fa-linkedin-in:before {\n  content: \"\\F0E1\"; }\n\n.fa-linode:before {\n  content: \"\\F2B8\"; }\n\n.fa-linux:before {\n  content: \"\\F17C\"; }\n\n.fa-lira-sign:before {\n  content: \"\\F195\"; }\n\n.fa-list:before {\n  content: \"\\F03A\"; }\n\n.fa-list-alt:before {\n  content: \"\\F022\"; }\n\n.fa-list-ol:before {\n  content: \"\\F0CB\"; }\n\n.fa-list-ul:before {\n  content: \"\\F0CA\"; }\n\n.fa-location-arrow:before {\n  content: \"\\F124\"; }\n\n.fa-lock:before {\n  content: \"\\F023\"; }\n\n.fa-lock-open:before {\n  content: \"\\F3C1\"; }\n\n.fa-long-arrow-alt-down:before {\n  content: \"\\F309\"; }\n\n.fa-long-arrow-alt-left:before {\n  content: \"\\F30A\"; }\n\n.fa-long-arrow-alt-right:before {\n  content: \"\\F30B\"; }\n\n.fa-long-arrow-alt-up:before {\n  content: \"\\F30C\"; }\n\n.fa-low-vision:before {\n  content: \"\\F2A8\"; }\n\n.fa-luggage-cart:before {\n  content: \"\\F59D\"; }\n\n.fa-lyft:before {\n  content: \"\\F3C3\"; }\n\n.fa-magento:before {\n  content: \"\\F3C4\"; }\n\n.fa-magic:before {\n  content: \"\\F0D0\"; }\n\n.fa-magnet:before {\n  content: \"\\F076\"; }\n\n.fa-mail-bulk:before {\n  content: \"\\F674\"; }\n\n.fa-mailchimp:before {\n  content: \"\\F59E\"; }\n\n.fa-male:before {\n  content: \"\\F183\"; }\n\n.fa-mandalorian:before {\n  content: \"\\F50F\"; }\n\n.fa-map:before {\n  content: \"\\F279\"; }\n\n.fa-map-marked:before {\n  content: \"\\F59F\"; }\n\n.fa-map-marked-alt:before {\n  content: \"\\F5A0\"; }\n\n.fa-map-marker:before {\n  content: \"\\F041\"; }\n\n.fa-map-marker-alt:before {\n  content: \"\\F3C5\"; }\n\n.fa-map-pin:before {\n  content: \"\\F276\"; }\n\n.fa-map-signs:before {\n  content: \"\\F277\"; }\n\n.fa-markdown:before {\n  content: \"\\F60F\"; }\n\n.fa-marker:before {\n  content: \"\\F5A1\"; }\n\n.fa-mars:before {\n  content: \"\\F222\"; }\n\n.fa-mars-double:before {\n  content: \"\\F227\"; }\n\n.fa-mars-stroke:before {\n  content: \"\\F229\"; }\n\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\"; }\n\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\"; }\n\n.fa-mask:before {\n  content: \"\\F6FA\"; }\n\n.fa-mastodon:before {\n  content: \"\\F4F6\"; }\n\n.fa-maxcdn:before {\n  content: \"\\F136\"; }\n\n.fa-medal:before {\n  content: \"\\F5A2\"; }\n\n.fa-medapps:before {\n  content: \"\\F3C6\"; }\n\n.fa-medium:before {\n  content: \"\\F23A\"; }\n\n.fa-medium-m:before {\n  content: \"\\F3C7\"; }\n\n.fa-medkit:before {\n  content: \"\\F0FA\"; }\n\n.fa-medrt:before {\n  content: \"\\F3C8\"; }\n\n.fa-meetup:before {\n  content: \"\\F2E0\"; }\n\n.fa-megaport:before {\n  content: \"\\F5A3\"; }\n\n.fa-meh:before {\n  content: \"\\F11A\"; }\n\n.fa-meh-blank:before {\n  content: \"\\F5A4\"; }\n\n.fa-meh-rolling-eyes:before {\n  content: \"\\F5A5\"; }\n\n.fa-memory:before {\n  content: \"\\F538\"; }\n\n.fa-menorah:before {\n  content: \"\\F676\"; }\n\n.fa-mercury:before {\n  content: \"\\F223\"; }\n\n.fa-meteor:before {\n  content: \"\\F753\"; }\n\n.fa-microchip:before {\n  content: \"\\F2DB\"; }\n\n.fa-microphone:before {\n  content: \"\\F130\"; }\n\n.fa-microphone-alt:before {\n  content: \"\\F3C9\"; }\n\n.fa-microphone-alt-slash:before {\n  content: \"\\F539\"; }\n\n.fa-microphone-slash:before {\n  content: \"\\F131\"; }\n\n.fa-microscope:before {\n  content: \"\\F610\"; }\n\n.fa-microsoft:before {\n  content: \"\\F3CA\"; }\n\n.fa-minus:before {\n  content: \"\\F068\"; }\n\n.fa-minus-circle:before {\n  content: \"\\F056\"; }\n\n.fa-minus-square:before {\n  content: \"\\F146\"; }\n\n.fa-mix:before {\n  content: \"\\F3CB\"; }\n\n.fa-mixcloud:before {\n  content: \"\\F289\"; }\n\n.fa-mizuni:before {\n  content: \"\\F3CC\"; }\n\n.fa-mobile:before {\n  content: \"\\F10B\"; }\n\n.fa-mobile-alt:before {\n  content: \"\\F3CD\"; }\n\n.fa-modx:before {\n  content: \"\\F285\"; }\n\n.fa-monero:before {\n  content: \"\\F3D0\"; }\n\n.fa-money-bill:before {\n  content: \"\\F0D6\"; }\n\n.fa-money-bill-alt:before {\n  content: \"\\F3D1\"; }\n\n.fa-money-bill-wave:before {\n  content: \"\\F53A\"; }\n\n.fa-money-bill-wave-alt:before {\n  content: \"\\F53B\"; }\n\n.fa-money-check:before {\n  content: \"\\F53C\"; }\n\n.fa-money-check-alt:before {\n  content: \"\\F53D\"; }\n\n.fa-monument:before {\n  content: \"\\F5A6\"; }\n\n.fa-moon:before {\n  content: \"\\F186\"; }\n\n.fa-mortar-pestle:before {\n  content: \"\\F5A7\"; }\n\n.fa-mosque:before {\n  content: \"\\F678\"; }\n\n.fa-motorcycle:before {\n  content: \"\\F21C\"; }\n\n.fa-mountain:before {\n  content: \"\\F6FC\"; }\n\n.fa-mouse-pointer:before {\n  content: \"\\F245\"; }\n\n.fa-music:before {\n  content: \"\\F001\"; }\n\n.fa-napster:before {\n  content: \"\\F3D2\"; }\n\n.fa-neos:before {\n  content: \"\\F612\"; }\n\n.fa-network-wired:before {\n  content: \"\\F6FF\"; }\n\n.fa-neuter:before {\n  content: \"\\F22C\"; }\n\n.fa-newspaper:before {\n  content: \"\\F1EA\"; }\n\n.fa-nimblr:before {\n  content: \"\\F5A8\"; }\n\n.fa-nintendo-switch:before {\n  content: \"\\F418\"; }\n\n.fa-node:before {\n  content: \"\\F419\"; }\n\n.fa-node-js:before {\n  content: \"\\F3D3\"; }\n\n.fa-not-equal:before {\n  content: \"\\F53E\"; }\n\n.fa-notes-medical:before {\n  content: \"\\F481\"; }\n\n.fa-npm:before {\n  content: \"\\F3D4\"; }\n\n.fa-ns8:before {\n  content: \"\\F3D5\"; }\n\n.fa-nutritionix:before {\n  content: \"\\F3D6\"; }\n\n.fa-object-group:before {\n  content: \"\\F247\"; }\n\n.fa-object-ungroup:before {\n  content: \"\\F248\"; }\n\n.fa-odnoklassniki:before {\n  content: \"\\F263\"; }\n\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\"; }\n\n.fa-oil-can:before {\n  content: \"\\F613\"; }\n\n.fa-old-republic:before {\n  content: \"\\F510\"; }\n\n.fa-om:before {\n  content: \"\\F679\"; }\n\n.fa-opencart:before {\n  content: \"\\F23D\"; }\n\n.fa-openid:before {\n  content: \"\\F19B\"; }\n\n.fa-opera:before {\n  content: \"\\F26A\"; }\n\n.fa-optin-monster:before {\n  content: \"\\F23C\"; }\n\n.fa-osi:before {\n  content: \"\\F41A\"; }\n\n.fa-otter:before {\n  content: \"\\F700\"; }\n\n.fa-outdent:before {\n  content: \"\\F03B\"; }\n\n.fa-page4:before {\n  content: \"\\F3D7\"; }\n\n.fa-pagelines:before {\n  content: \"\\F18C\"; }\n\n.fa-paint-brush:before {\n  content: \"\\F1FC\"; }\n\n.fa-paint-roller:before {\n  content: \"\\F5AA\"; }\n\n.fa-palette:before {\n  content: \"\\F53F\"; }\n\n.fa-palfed:before {\n  content: \"\\F3D8\"; }\n\n.fa-pallet:before {\n  content: \"\\F482\"; }\n\n.fa-paper-plane:before {\n  content: \"\\F1D8\"; }\n\n.fa-paperclip:before {\n  content: \"\\F0C6\"; }\n\n.fa-parachute-box:before {\n  content: \"\\F4CD\"; }\n\n.fa-paragraph:before {\n  content: \"\\F1DD\"; }\n\n.fa-parking:before {\n  content: \"\\F540\"; }\n\n.fa-passport:before {\n  content: \"\\F5AB\"; }\n\n.fa-pastafarianism:before {\n  content: \"\\F67B\"; }\n\n.fa-paste:before {\n  content: \"\\F0EA\"; }\n\n.fa-patreon:before {\n  content: \"\\F3D9\"; }\n\n.fa-pause:before {\n  content: \"\\F04C\"; }\n\n.fa-pause-circle:before {\n  content: \"\\F28B\"; }\n\n.fa-paw:before {\n  content: \"\\F1B0\"; }\n\n.fa-paypal:before {\n  content: \"\\F1ED\"; }\n\n.fa-peace:before {\n  content: \"\\F67C\"; }\n\n.fa-pen:before {\n  content: \"\\F304\"; }\n\n.fa-pen-alt:before {\n  content: \"\\F305\"; }\n\n.fa-pen-fancy:before {\n  content: \"\\F5AC\"; }\n\n.fa-pen-nib:before {\n  content: \"\\F5AD\"; }\n\n.fa-pen-square:before {\n  content: \"\\F14B\"; }\n\n.fa-pencil-alt:before {\n  content: \"\\F303\"; }\n\n.fa-pencil-ruler:before {\n  content: \"\\F5AE\"; }\n\n.fa-penny-arcade:before {\n  content: \"\\F704\"; }\n\n.fa-people-carry:before {\n  content: \"\\F4CE\"; }\n\n.fa-percent:before {\n  content: \"\\F295\"; }\n\n.fa-percentage:before {\n  content: \"\\F541\"; }\n\n.fa-periscope:before {\n  content: \"\\F3DA\"; }\n\n.fa-person-booth:before {\n  content: \"\\F756\"; }\n\n.fa-phabricator:before {\n  content: \"\\F3DB\"; }\n\n.fa-phoenix-framework:before {\n  content: \"\\F3DC\"; }\n\n.fa-phoenix-squadron:before {\n  content: \"\\F511\"; }\n\n.fa-phone:before {\n  content: \"\\F095\"; }\n\n.fa-phone-slash:before {\n  content: \"\\F3DD\"; }\n\n.fa-phone-square:before {\n  content: \"\\F098\"; }\n\n.fa-phone-volume:before {\n  content: \"\\F2A0\"; }\n\n.fa-php:before {\n  content: \"\\F457\"; }\n\n.fa-pied-piper:before {\n  content: \"\\F2AE\"; }\n\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\"; }\n\n.fa-pied-piper-hat:before {\n  content: \"\\F4E5\"; }\n\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\"; }\n\n.fa-piggy-bank:before {\n  content: \"\\F4D3\"; }\n\n.fa-pills:before {\n  content: \"\\F484\"; }\n\n.fa-pinterest:before {\n  content: \"\\F0D2\"; }\n\n.fa-pinterest-p:before {\n  content: \"\\F231\"; }\n\n.fa-pinterest-square:before {\n  content: \"\\F0D3\"; }\n\n.fa-place-of-worship:before {\n  content: \"\\F67F\"; }\n\n.fa-plane:before {\n  content: \"\\F072\"; }\n\n.fa-plane-arrival:before {\n  content: \"\\F5AF\"; }\n\n.fa-plane-departure:before {\n  content: \"\\F5B0\"; }\n\n.fa-play:before {\n  content: \"\\F04B\"; }\n\n.fa-play-circle:before {\n  content: \"\\F144\"; }\n\n.fa-playstation:before {\n  content: \"\\F3DF\"; }\n\n.fa-plug:before {\n  content: \"\\F1E6\"; }\n\n.fa-plus:before {\n  content: \"\\F067\"; }\n\n.fa-plus-circle:before {\n  content: \"\\F055\"; }\n\n.fa-plus-square:before {\n  content: \"\\F0FE\"; }\n\n.fa-podcast:before {\n  content: \"\\F2CE\"; }\n\n.fa-poll:before {\n  content: \"\\F681\"; }\n\n.fa-poll-h:before {\n  content: \"\\F682\"; }\n\n.fa-poo:before {\n  content: \"\\F2FE\"; }\n\n.fa-poo-storm:before {\n  content: \"\\F75A\"; }\n\n.fa-poop:before {\n  content: \"\\F619\"; }\n\n.fa-portrait:before {\n  content: \"\\F3E0\"; }\n\n.fa-pound-sign:before {\n  content: \"\\F154\"; }\n\n.fa-power-off:before {\n  content: \"\\F011\"; }\n\n.fa-pray:before {\n  content: \"\\F683\"; }\n\n.fa-praying-hands:before {\n  content: \"\\F684\"; }\n\n.fa-prescription:before {\n  content: \"\\F5B1\"; }\n\n.fa-prescription-bottle:before {\n  content: \"\\F485\"; }\n\n.fa-prescription-bottle-alt:before {\n  content: \"\\F486\"; }\n\n.fa-print:before {\n  content: \"\\F02F\"; }\n\n.fa-procedures:before {\n  content: \"\\F487\"; }\n\n.fa-product-hunt:before {\n  content: \"\\F288\"; }\n\n.fa-project-diagram:before {\n  content: \"\\F542\"; }\n\n.fa-pushed:before {\n  content: \"\\F3E1\"; }\n\n.fa-puzzle-piece:before {\n  content: \"\\F12E\"; }\n\n.fa-python:before {\n  content: \"\\F3E2\"; }\n\n.fa-qq:before {\n  content: \"\\F1D6\"; }\n\n.fa-qrcode:before {\n  content: \"\\F029\"; }\n\n.fa-question:before {\n  content: \"\\F128\"; }\n\n.fa-question-circle:before {\n  content: \"\\F059\"; }\n\n.fa-quidditch:before {\n  content: \"\\F458\"; }\n\n.fa-quinscape:before {\n  content: \"\\F459\"; }\n\n.fa-quora:before {\n  content: \"\\F2C4\"; }\n\n.fa-quote-left:before {\n  content: \"\\F10D\"; }\n\n.fa-quote-right:before {\n  content: \"\\F10E\"; }\n\n.fa-quran:before {\n  content: \"\\F687\"; }\n\n.fa-r-project:before {\n  content: \"\\F4F7\"; }\n\n.fa-rainbow:before {\n  content: \"\\F75B\"; }\n\n.fa-random:before {\n  content: \"\\F074\"; }\n\n.fa-ravelry:before {\n  content: \"\\F2D9\"; }\n\n.fa-react:before {\n  content: \"\\F41B\"; }\n\n.fa-reacteurope:before {\n  content: \"\\F75D\"; }\n\n.fa-readme:before {\n  content: \"\\F4D5\"; }\n\n.fa-rebel:before {\n  content: \"\\F1D0\"; }\n\n.fa-receipt:before {\n  content: \"\\F543\"; }\n\n.fa-recycle:before {\n  content: \"\\F1B8\"; }\n\n.fa-red-river:before {\n  content: \"\\F3E3\"; }\n\n.fa-reddit:before {\n  content: \"\\F1A1\"; }\n\n.fa-reddit-alien:before {\n  content: \"\\F281\"; }\n\n.fa-reddit-square:before {\n  content: \"\\F1A2\"; }\n\n.fa-redo:before {\n  content: \"\\F01E\"; }\n\n.fa-redo-alt:before {\n  content: \"\\F2F9\"; }\n\n.fa-registered:before {\n  content: \"\\F25D\"; }\n\n.fa-renren:before {\n  content: \"\\F18B\"; }\n\n.fa-reply:before {\n  content: \"\\F3E5\"; }\n\n.fa-reply-all:before {\n  content: \"\\F122\"; }\n\n.fa-replyd:before {\n  content: \"\\F3E6\"; }\n\n.fa-republican:before {\n  content: \"\\F75E\"; }\n\n.fa-researchgate:before {\n  content: \"\\F4F8\"; }\n\n.fa-resolving:before {\n  content: \"\\F3E7\"; }\n\n.fa-retweet:before {\n  content: \"\\F079\"; }\n\n.fa-rev:before {\n  content: \"\\F5B2\"; }\n\n.fa-ribbon:before {\n  content: \"\\F4D6\"; }\n\n.fa-ring:before {\n  content: \"\\F70B\"; }\n\n.fa-road:before {\n  content: \"\\F018\"; }\n\n.fa-robot:before {\n  content: \"\\F544\"; }\n\n.fa-rocket:before {\n  content: \"\\F135\"; }\n\n.fa-rocketchat:before {\n  content: \"\\F3E8\"; }\n\n.fa-rockrms:before {\n  content: \"\\F3E9\"; }\n\n.fa-route:before {\n  content: \"\\F4D7\"; }\n\n.fa-rss:before {\n  content: \"\\F09E\"; }\n\n.fa-rss-square:before {\n  content: \"\\F143\"; }\n\n.fa-ruble-sign:before {\n  content: \"\\F158\"; }\n\n.fa-ruler:before {\n  content: \"\\F545\"; }\n\n.fa-ruler-combined:before {\n  content: \"\\F546\"; }\n\n.fa-ruler-horizontal:before {\n  content: \"\\F547\"; }\n\n.fa-ruler-vertical:before {\n  content: \"\\F548\"; }\n\n.fa-running:before {\n  content: \"\\F70C\"; }\n\n.fa-rupee-sign:before {\n  content: \"\\F156\"; }\n\n.fa-sad-cry:before {\n  content: \"\\F5B3\"; }\n\n.fa-sad-tear:before {\n  content: \"\\F5B4\"; }\n\n.fa-safari:before {\n  content: \"\\F267\"; }\n\n.fa-sass:before {\n  content: \"\\F41E\"; }\n\n.fa-save:before {\n  content: \"\\F0C7\"; }\n\n.fa-schlix:before {\n  content: \"\\F3EA\"; }\n\n.fa-school:before {\n  content: \"\\F549\"; }\n\n.fa-screwdriver:before {\n  content: \"\\F54A\"; }\n\n.fa-scribd:before {\n  content: \"\\F28A\"; }\n\n.fa-scroll:before {\n  content: \"\\F70E\"; }\n\n.fa-search:before {\n  content: \"\\F002\"; }\n\n.fa-search-dollar:before {\n  content: \"\\F688\"; }\n\n.fa-search-location:before {\n  content: \"\\F689\"; }\n\n.fa-search-minus:before {\n  content: \"\\F010\"; }\n\n.fa-search-plus:before {\n  content: \"\\F00E\"; }\n\n.fa-searchengin:before {\n  content: \"\\F3EB\"; }\n\n.fa-seedling:before {\n  content: \"\\F4D8\"; }\n\n.fa-sellcast:before {\n  content: \"\\F2DA\"; }\n\n.fa-sellsy:before {\n  content: \"\\F213\"; }\n\n.fa-server:before {\n  content: \"\\F233\"; }\n\n.fa-servicestack:before {\n  content: \"\\F3EC\"; }\n\n.fa-shapes:before {\n  content: \"\\F61F\"; }\n\n.fa-share:before {\n  content: \"\\F064\"; }\n\n.fa-share-alt:before {\n  content: \"\\F1E0\"; }\n\n.fa-share-alt-square:before {\n  content: \"\\F1E1\"; }\n\n.fa-share-square:before {\n  content: \"\\F14D\"; }\n\n.fa-shekel-sign:before {\n  content: \"\\F20B\"; }\n\n.fa-shield-alt:before {\n  content: \"\\F3ED\"; }\n\n.fa-ship:before {\n  content: \"\\F21A\"; }\n\n.fa-shipping-fast:before {\n  content: \"\\F48B\"; }\n\n.fa-shirtsinbulk:before {\n  content: \"\\F214\"; }\n\n.fa-shoe-prints:before {\n  content: \"\\F54B\"; }\n\n.fa-shopping-bag:before {\n  content: \"\\F290\"; }\n\n.fa-shopping-basket:before {\n  content: \"\\F291\"; }\n\n.fa-shopping-cart:before {\n  content: \"\\F07A\"; }\n\n.fa-shopware:before {\n  content: \"\\F5B5\"; }\n\n.fa-shower:before {\n  content: \"\\F2CC\"; }\n\n.fa-shuttle-van:before {\n  content: \"\\F5B6\"; }\n\n.fa-sign:before {\n  content: \"\\F4D9\"; }\n\n.fa-sign-in-alt:before {\n  content: \"\\F2F6\"; }\n\n.fa-sign-language:before {\n  content: \"\\F2A7\"; }\n\n.fa-sign-out-alt:before {\n  content: \"\\F2F5\"; }\n\n.fa-signal:before {\n  content: \"\\F012\"; }\n\n.fa-signature:before {\n  content: \"\\F5B7\"; }\n\n.fa-simplybuilt:before {\n  content: \"\\F215\"; }\n\n.fa-sistrix:before {\n  content: \"\\F3EE\"; }\n\n.fa-sitemap:before {\n  content: \"\\F0E8\"; }\n\n.fa-sith:before {\n  content: \"\\F512\"; }\n\n.fa-skull:before {\n  content: \"\\F54C\"; }\n\n.fa-skull-crossbones:before {\n  content: \"\\F714\"; }\n\n.fa-skyatlas:before {\n  content: \"\\F216\"; }\n\n.fa-skype:before {\n  content: \"\\F17E\"; }\n\n.fa-slack:before {\n  content: \"\\F198\"; }\n\n.fa-slack-hash:before {\n  content: \"\\F3EF\"; }\n\n.fa-slash:before {\n  content: \"\\F715\"; }\n\n.fa-sliders-h:before {\n  content: \"\\F1DE\"; }\n\n.fa-slideshare:before {\n  content: \"\\F1E7\"; }\n\n.fa-smile:before {\n  content: \"\\F118\"; }\n\n.fa-smile-beam:before {\n  content: \"\\F5B8\"; }\n\n.fa-smile-wink:before {\n  content: \"\\F4DA\"; }\n\n.fa-smog:before {\n  content: \"\\F75F\"; }\n\n.fa-smoking:before {\n  content: \"\\F48D\"; }\n\n.fa-smoking-ban:before {\n  content: \"\\F54D\"; }\n\n.fa-snapchat:before {\n  content: \"\\F2AB\"; }\n\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\"; }\n\n.fa-snapchat-square:before {\n  content: \"\\F2AD\"; }\n\n.fa-snowflake:before {\n  content: \"\\F2DC\"; }\n\n.fa-socks:before {\n  content: \"\\F696\"; }\n\n.fa-solar-panel:before {\n  content: \"\\F5BA\"; }\n\n.fa-sort:before {\n  content: \"\\F0DC\"; }\n\n.fa-sort-alpha-down:before {\n  content: \"\\F15D\"; }\n\n.fa-sort-alpha-up:before {\n  content: \"\\F15E\"; }\n\n.fa-sort-amount-down:before {\n  content: \"\\F160\"; }\n\n.fa-sort-amount-up:before {\n  content: \"\\F161\"; }\n\n.fa-sort-down:before {\n  content: \"\\F0DD\"; }\n\n.fa-sort-numeric-down:before {\n  content: \"\\F162\"; }\n\n.fa-sort-numeric-up:before {\n  content: \"\\F163\"; }\n\n.fa-sort-up:before {\n  content: \"\\F0DE\"; }\n\n.fa-soundcloud:before {\n  content: \"\\F1BE\"; }\n\n.fa-spa:before {\n  content: \"\\F5BB\"; }\n\n.fa-space-shuttle:before {\n  content: \"\\F197\"; }\n\n.fa-speakap:before {\n  content: \"\\F3F3\"; }\n\n.fa-spider:before {\n  content: \"\\F717\"; }\n\n.fa-spinner:before {\n  content: \"\\F110\"; }\n\n.fa-splotch:before {\n  content: \"\\F5BC\"; }\n\n.fa-spotify:before {\n  content: \"\\F1BC\"; }\n\n.fa-spray-can:before {\n  content: \"\\F5BD\"; }\n\n.fa-square:before {\n  content: \"\\F0C8\"; }\n\n.fa-square-full:before {\n  content: \"\\F45C\"; }\n\n.fa-square-root-alt:before {\n  content: \"\\F698\"; }\n\n.fa-squarespace:before {\n  content: \"\\F5BE\"; }\n\n.fa-stack-exchange:before {\n  content: \"\\F18D\"; }\n\n.fa-stack-overflow:before {\n  content: \"\\F16C\"; }\n\n.fa-stamp:before {\n  content: \"\\F5BF\"; }\n\n.fa-star:before {\n  content: \"\\F005\"; }\n\n.fa-star-and-crescent:before {\n  content: \"\\F699\"; }\n\n.fa-star-half:before {\n  content: \"\\F089\"; }\n\n.fa-star-half-alt:before {\n  content: \"\\F5C0\"; }\n\n.fa-star-of-david:before {\n  content: \"\\F69A\"; }\n\n.fa-star-of-life:before {\n  content: \"\\F621\"; }\n\n.fa-staylinked:before {\n  content: \"\\F3F5\"; }\n\n.fa-steam:before {\n  content: \"\\F1B6\"; }\n\n.fa-steam-square:before {\n  content: \"\\F1B7\"; }\n\n.fa-steam-symbol:before {\n  content: \"\\F3F6\"; }\n\n.fa-step-backward:before {\n  content: \"\\F048\"; }\n\n.fa-step-forward:before {\n  content: \"\\F051\"; }\n\n.fa-stethoscope:before {\n  content: \"\\F0F1\"; }\n\n.fa-sticker-mule:before {\n  content: \"\\F3F7\"; }\n\n.fa-sticky-note:before {\n  content: \"\\F249\"; }\n\n.fa-stop:before {\n  content: \"\\F04D\"; }\n\n.fa-stop-circle:before {\n  content: \"\\F28D\"; }\n\n.fa-stopwatch:before {\n  content: \"\\F2F2\"; }\n\n.fa-store:before {\n  content: \"\\F54E\"; }\n\n.fa-store-alt:before {\n  content: \"\\F54F\"; }\n\n.fa-strava:before {\n  content: \"\\F428\"; }\n\n.fa-stream:before {\n  content: \"\\F550\"; }\n\n.fa-street-view:before {\n  content: \"\\F21D\"; }\n\n.fa-strikethrough:before {\n  content: \"\\F0CC\"; }\n\n.fa-stripe:before {\n  content: \"\\F429\"; }\n\n.fa-stripe-s:before {\n  content: \"\\F42A\"; }\n\n.fa-stroopwafel:before {\n  content: \"\\F551\"; }\n\n.fa-studiovinari:before {\n  content: \"\\F3F8\"; }\n\n.fa-stumbleupon:before {\n  content: \"\\F1A4\"; }\n\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\"; }\n\n.fa-subscript:before {\n  content: \"\\F12C\"; }\n\n.fa-subway:before {\n  content: \"\\F239\"; }\n\n.fa-suitcase:before {\n  content: \"\\F0F2\"; }\n\n.fa-suitcase-rolling:before {\n  content: \"\\F5C1\"; }\n\n.fa-sun:before {\n  content: \"\\F185\"; }\n\n.fa-superpowers:before {\n  content: \"\\F2DD\"; }\n\n.fa-superscript:before {\n  content: \"\\F12B\"; }\n\n.fa-supple:before {\n  content: \"\\F3F9\"; }\n\n.fa-surprise:before {\n  content: \"\\F5C2\"; }\n\n.fa-swatchbook:before {\n  content: \"\\F5C3\"; }\n\n.fa-swimmer:before {\n  content: \"\\F5C4\"; }\n\n.fa-swimming-pool:before {\n  content: \"\\F5C5\"; }\n\n.fa-synagogue:before {\n  content: \"\\F69B\"; }\n\n.fa-sync:before {\n  content: \"\\F021\"; }\n\n.fa-sync-alt:before {\n  content: \"\\F2F1\"; }\n\n.fa-syringe:before {\n  content: \"\\F48E\"; }\n\n.fa-table:before {\n  content: \"\\F0CE\"; }\n\n.fa-table-tennis:before {\n  content: \"\\F45D\"; }\n\n.fa-tablet:before {\n  content: \"\\F10A\"; }\n\n.fa-tablet-alt:before {\n  content: \"\\F3FA\"; }\n\n.fa-tablets:before {\n  content: \"\\F490\"; }\n\n.fa-tachometer-alt:before {\n  content: \"\\F3FD\"; }\n\n.fa-tag:before {\n  content: \"\\F02B\"; }\n\n.fa-tags:before {\n  content: \"\\F02C\"; }\n\n.fa-tape:before {\n  content: \"\\F4DB\"; }\n\n.fa-tasks:before {\n  content: \"\\F0AE\"; }\n\n.fa-taxi:before {\n  content: \"\\F1BA\"; }\n\n.fa-teamspeak:before {\n  content: \"\\F4F9\"; }\n\n.fa-teeth:before {\n  content: \"\\F62E\"; }\n\n.fa-teeth-open:before {\n  content: \"\\F62F\"; }\n\n.fa-telegram:before {\n  content: \"\\F2C6\"; }\n\n.fa-telegram-plane:before {\n  content: \"\\F3FE\"; }\n\n.fa-temperature-high:before {\n  content: \"\\F769\"; }\n\n.fa-temperature-low:before {\n  content: \"\\F76B\"; }\n\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\"; }\n\n.fa-terminal:before {\n  content: \"\\F120\"; }\n\n.fa-text-height:before {\n  content: \"\\F034\"; }\n\n.fa-text-width:before {\n  content: \"\\F035\"; }\n\n.fa-th:before {\n  content: \"\\F00A\"; }\n\n.fa-th-large:before {\n  content: \"\\F009\"; }\n\n.fa-th-list:before {\n  content: \"\\F00B\"; }\n\n.fa-the-red-yeti:before {\n  content: \"\\F69D\"; }\n\n.fa-theater-masks:before {\n  content: \"\\F630\"; }\n\n.fa-themeco:before {\n  content: \"\\F5C6\"; }\n\n.fa-themeisle:before {\n  content: \"\\F2B2\"; }\n\n.fa-thermometer:before {\n  content: \"\\F491\"; }\n\n.fa-thermometer-empty:before {\n  content: \"\\F2CB\"; }\n\n.fa-thermometer-full:before {\n  content: \"\\F2C7\"; }\n\n.fa-thermometer-half:before {\n  content: \"\\F2C9\"; }\n\n.fa-thermometer-quarter:before {\n  content: \"\\F2CA\"; }\n\n.fa-thermometer-three-quarters:before {\n  content: \"\\F2C8\"; }\n\n.fa-think-peaks:before {\n  content: \"\\F731\"; }\n\n.fa-thumbs-down:before {\n  content: \"\\F165\"; }\n\n.fa-thumbs-up:before {\n  content: \"\\F164\"; }\n\n.fa-thumbtack:before {\n  content: \"\\F08D\"; }\n\n.fa-ticket-alt:before {\n  content: \"\\F3FF\"; }\n\n.fa-times:before {\n  content: \"\\F00D\"; }\n\n.fa-times-circle:before {\n  content: \"\\F057\"; }\n\n.fa-tint:before {\n  content: \"\\F043\"; }\n\n.fa-tint-slash:before {\n  content: \"\\F5C7\"; }\n\n.fa-tired:before {\n  content: \"\\F5C8\"; }\n\n.fa-toggle-off:before {\n  content: \"\\F204\"; }\n\n.fa-toggle-on:before {\n  content: \"\\F205\"; }\n\n.fa-toilet-paper:before {\n  content: \"\\F71E\"; }\n\n.fa-toolbox:before {\n  content: \"\\F552\"; }\n\n.fa-tooth:before {\n  content: \"\\F5C9\"; }\n\n.fa-torah:before {\n  content: \"\\F6A0\"; }\n\n.fa-torii-gate:before {\n  content: \"\\F6A1\"; }\n\n.fa-tractor:before {\n  content: \"\\F722\"; }\n\n.fa-trade-federation:before {\n  content: \"\\F513\"; }\n\n.fa-trademark:before {\n  content: \"\\F25C\"; }\n\n.fa-traffic-light:before {\n  content: \"\\F637\"; }\n\n.fa-train:before {\n  content: \"\\F238\"; }\n\n.fa-transgender:before {\n  content: \"\\F224\"; }\n\n.fa-transgender-alt:before {\n  content: \"\\F225\"; }\n\n.fa-trash:before {\n  content: \"\\F1F8\"; }\n\n.fa-trash-alt:before {\n  content: \"\\F2ED\"; }\n\n.fa-tree:before {\n  content: \"\\F1BB\"; }\n\n.fa-trello:before {\n  content: \"\\F181\"; }\n\n.fa-tripadvisor:before {\n  content: \"\\F262\"; }\n\n.fa-trophy:before {\n  content: \"\\F091\"; }\n\n.fa-truck:before {\n  content: \"\\F0D1\"; }\n\n.fa-truck-loading:before {\n  content: \"\\F4DE\"; }\n\n.fa-truck-monster:before {\n  content: \"\\F63B\"; }\n\n.fa-truck-moving:before {\n  content: \"\\F4DF\"; }\n\n.fa-truck-pickup:before {\n  content: \"\\F63C\"; }\n\n.fa-tshirt:before {\n  content: \"\\F553\"; }\n\n.fa-tty:before {\n  content: \"\\F1E4\"; }\n\n.fa-tumblr:before {\n  content: \"\\F173\"; }\n\n.fa-tumblr-square:before {\n  content: \"\\F174\"; }\n\n.fa-tv:before {\n  content: \"\\F26C\"; }\n\n.fa-twitch:before {\n  content: \"\\F1E8\"; }\n\n.fa-twitter:before {\n  content: \"\\F099\"; }\n\n.fa-twitter-square:before {\n  content: \"\\F081\"; }\n\n.fa-typo3:before {\n  content: \"\\F42B\"; }\n\n.fa-uber:before {\n  content: \"\\F402\"; }\n\n.fa-uikit:before {\n  content: \"\\F403\"; }\n\n.fa-umbrella:before {\n  content: \"\\F0E9\"; }\n\n.fa-umbrella-beach:before {\n  content: \"\\F5CA\"; }\n\n.fa-underline:before {\n  content: \"\\F0CD\"; }\n\n.fa-undo:before {\n  content: \"\\F0E2\"; }\n\n.fa-undo-alt:before {\n  content: \"\\F2EA\"; }\n\n.fa-uniregistry:before {\n  content: \"\\F404\"; }\n\n.fa-universal-access:before {\n  content: \"\\F29A\"; }\n\n.fa-university:before {\n  content: \"\\F19C\"; }\n\n.fa-unlink:before {\n  content: \"\\F127\"; }\n\n.fa-unlock:before {\n  content: \"\\F09C\"; }\n\n.fa-unlock-alt:before {\n  content: \"\\F13E\"; }\n\n.fa-untappd:before {\n  content: \"\\F405\"; }\n\n.fa-upload:before {\n  content: \"\\F093\"; }\n\n.fa-usb:before {\n  content: \"\\F287\"; }\n\n.fa-user:before {\n  content: \"\\F007\"; }\n\n.fa-user-alt:before {\n  content: \"\\F406\"; }\n\n.fa-user-alt-slash:before {\n  content: \"\\F4FA\"; }\n\n.fa-user-astronaut:before {\n  content: \"\\F4FB\"; }\n\n.fa-user-check:before {\n  content: \"\\F4FC\"; }\n\n.fa-user-circle:before {\n  content: \"\\F2BD\"; }\n\n.fa-user-clock:before {\n  content: \"\\F4FD\"; }\n\n.fa-user-cog:before {\n  content: \"\\F4FE\"; }\n\n.fa-user-edit:before {\n  content: \"\\F4FF\"; }\n\n.fa-user-friends:before {\n  content: \"\\F500\"; }\n\n.fa-user-graduate:before {\n  content: \"\\F501\"; }\n\n.fa-user-injured:before {\n  content: \"\\F728\"; }\n\n.fa-user-lock:before {\n  content: \"\\F502\"; }\n\n.fa-user-md:before {\n  content: \"\\F0F0\"; }\n\n.fa-user-minus:before {\n  content: \"\\F503\"; }\n\n.fa-user-ninja:before {\n  content: \"\\F504\"; }\n\n.fa-user-plus:before {\n  content: \"\\F234\"; }\n\n.fa-user-secret:before {\n  content: \"\\F21B\"; }\n\n.fa-user-shield:before {\n  content: \"\\F505\"; }\n\n.fa-user-slash:before {\n  content: \"\\F506\"; }\n\n.fa-user-tag:before {\n  content: \"\\F507\"; }\n\n.fa-user-tie:before {\n  content: \"\\F508\"; }\n\n.fa-user-times:before {\n  content: \"\\F235\"; }\n\n.fa-users:before {\n  content: \"\\F0C0\"; }\n\n.fa-users-cog:before {\n  content: \"\\F509\"; }\n\n.fa-ussunnah:before {\n  content: \"\\F407\"; }\n\n.fa-utensil-spoon:before {\n  content: \"\\F2E5\"; }\n\n.fa-utensils:before {\n  content: \"\\F2E7\"; }\n\n.fa-vaadin:before {\n  content: \"\\F408\"; }\n\n.fa-vector-square:before {\n  content: \"\\F5CB\"; }\n\n.fa-venus:before {\n  content: \"\\F221\"; }\n\n.fa-venus-double:before {\n  content: \"\\F226\"; }\n\n.fa-venus-mars:before {\n  content: \"\\F228\"; }\n\n.fa-viacoin:before {\n  content: \"\\F237\"; }\n\n.fa-viadeo:before {\n  content: \"\\F2A9\"; }\n\n.fa-viadeo-square:before {\n  content: \"\\F2AA\"; }\n\n.fa-vial:before {\n  content: \"\\F492\"; }\n\n.fa-vials:before {\n  content: \"\\F493\"; }\n\n.fa-viber:before {\n  content: \"\\F409\"; }\n\n.fa-video:before {\n  content: \"\\F03D\"; }\n\n.fa-video-slash:before {\n  content: \"\\F4E2\"; }\n\n.fa-vihara:before {\n  content: \"\\F6A7\"; }\n\n.fa-vimeo:before {\n  content: \"\\F40A\"; }\n\n.fa-vimeo-square:before {\n  content: \"\\F194\"; }\n\n.fa-vimeo-v:before {\n  content: \"\\F27D\"; }\n\n.fa-vine:before {\n  content: \"\\F1CA\"; }\n\n.fa-vk:before {\n  content: \"\\F189\"; }\n\n.fa-vnv:before {\n  content: \"\\F40B\"; }\n\n.fa-volleyball-ball:before {\n  content: \"\\F45F\"; }\n\n.fa-volume-down:before {\n  content: \"\\F027\"; }\n\n.fa-volume-mute:before {\n  content: \"\\F6A9\"; }\n\n.fa-volume-off:before {\n  content: \"\\F026\"; }\n\n.fa-volume-up:before {\n  content: \"\\F028\"; }\n\n.fa-vote-yea:before {\n  content: \"\\F772\"; }\n\n.fa-vr-cardboard:before {\n  content: \"\\F729\"; }\n\n.fa-vuejs:before {\n  content: \"\\F41F\"; }\n\n.fa-walking:before {\n  content: \"\\F554\"; }\n\n.fa-wallet:before {\n  content: \"\\F555\"; }\n\n.fa-warehouse:before {\n  content: \"\\F494\"; }\n\n.fa-water:before {\n  content: \"\\F773\"; }\n\n.fa-weebly:before {\n  content: \"\\F5CC\"; }\n\n.fa-weibo:before {\n  content: \"\\F18A\"; }\n\n.fa-weight:before {\n  content: \"\\F496\"; }\n\n.fa-weight-hanging:before {\n  content: \"\\F5CD\"; }\n\n.fa-weixin:before {\n  content: \"\\F1D7\"; }\n\n.fa-whatsapp:before {\n  content: \"\\F232\"; }\n\n.fa-whatsapp-square:before {\n  content: \"\\F40C\"; }\n\n.fa-wheelchair:before {\n  content: \"\\F193\"; }\n\n.fa-whmcs:before {\n  content: \"\\F40D\"; }\n\n.fa-wifi:before {\n  content: \"\\F1EB\"; }\n\n.fa-wikipedia-w:before {\n  content: \"\\F266\"; }\n\n.fa-wind:before {\n  content: \"\\F72E\"; }\n\n.fa-window-close:before {\n  content: \"\\F410\"; }\n\n.fa-window-maximize:before {\n  content: \"\\F2D0\"; }\n\n.fa-window-minimize:before {\n  content: \"\\F2D1\"; }\n\n.fa-window-restore:before {\n  content: \"\\F2D2\"; }\n\n.fa-windows:before {\n  content: \"\\F17A\"; }\n\n.fa-wine-bottle:before {\n  content: \"\\F72F\"; }\n\n.fa-wine-glass:before {\n  content: \"\\F4E3\"; }\n\n.fa-wine-glass-alt:before {\n  content: \"\\F5CE\"; }\n\n.fa-wix:before {\n  content: \"\\F5CF\"; }\n\n.fa-wizards-of-the-coast:before {\n  content: \"\\F730\"; }\n\n.fa-wolf-pack-battalion:before {\n  content: \"\\F514\"; }\n\n.fa-won-sign:before {\n  content: \"\\F159\"; }\n\n.fa-wordpress:before {\n  content: \"\\F19A\"; }\n\n.fa-wordpress-simple:before {\n  content: \"\\F411\"; }\n\n.fa-wpbeginner:before {\n  content: \"\\F297\"; }\n\n.fa-wpexplorer:before {\n  content: \"\\F2DE\"; }\n\n.fa-wpforms:before {\n  content: \"\\F298\"; }\n\n.fa-wpressr:before {\n  content: \"\\F3E4\"; }\n\n.fa-wrench:before {\n  content: \"\\F0AD\"; }\n\n.fa-x-ray:before {\n  content: \"\\F497\"; }\n\n.fa-xbox:before {\n  content: \"\\F412\"; }\n\n.fa-xing:before {\n  content: \"\\F168\"; }\n\n.fa-xing-square:before {\n  content: \"\\F169\"; }\n\n.fa-y-combinator:before {\n  content: \"\\F23B\"; }\n\n.fa-yahoo:before {\n  content: \"\\F19E\"; }\n\n.fa-yandex:before {\n  content: \"\\F413\"; }\n\n.fa-yandex-international:before {\n  content: \"\\F414\"; }\n\n.fa-yelp:before {\n  content: \"\\F1E9\"; }\n\n.fa-yen-sign:before {\n  content: \"\\F157\"; }\n\n.fa-yin-yang:before {\n  content: \"\\F6AD\"; }\n\n.fa-yoast:before {\n  content: \"\\F2B1\"; }\n\n.fa-youtube:before {\n  content: \"\\F167\"; }\n\n.fa-youtube-square:before {\n  content: \"\\F431\"; }\n\n.fa-zhihu:before {\n  content: \"\\F63F\"; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n\n\n@font-face {\n  font-family: 'Font Awesome 5 Brands';\n  font-style: normal;\n  font-weight: normal;\n  src: url(" + escape(__webpack_require__(/*! ./fa-brands-400.woff2 */ "./node_modules/quasar-extras/fontawesome/fa-brands-400.woff2")) + ") format(\"woff2\"), url(" + escape(__webpack_require__(/*! ./fa-brands-400.woff */ "./node_modules/quasar-extras/fontawesome/fa-brands-400.woff")) + ") format(\"woff\"); }\n\n.fab {\n  font-family: 'Font Awesome 5 Brands'; }\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__(/*! ./fa-regular-400.woff2 */ "./node_modules/quasar-extras/fontawesome/fa-regular-400.woff2")) + ") format(\"woff2\"), url(" + escape(__webpack_require__(/*! ./fa-regular-400.woff */ "./node_modules/quasar-extras/fontawesome/fa-regular-400.woff")) + ") format(\"woff\"); }\n\n.far {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 400; }\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 900;\n  src: url(" + escape(__webpack_require__(/*! ./fa-solid-900.woff2 */ "./node_modules/quasar-extras/fontawesome/fa-solid-900.woff2")) + ") format(\"woff2\"), url(" + escape(__webpack_require__(/*! ./fa-solid-900.woff */ "./node_modules/quasar-extras/fontawesome/fa-solid-900.woff")) + ") format(\"woff\"); }\n.fa,\n.fas {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/ionicons/ionicons.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/ionicons/ionicons.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*!\n  Ionicons, v4.4.5\n  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/\n  https://twitter.com/benjsperry  https://twitter.com/ionicframework\n  MIT License: https://github.com/driftyco/ionicons\n\n  Android-style icons originally built by Google’s\n  Material Design Icons: https://github.com/google/material-design-icons\n  used under CC BY http://creativecommons.org/licenses/by/4.0/\n  Modified icons to fit ionicon’s grid from original.\n*/\n@font-face {\n  font-family: \"Ionicons\";\n  src: url(" + escape(__webpack_require__(/*! ./ionicons.woff2 */ "./node_modules/quasar-extras/ionicons/ionicons.woff2")) + ") format(\"woff2\"), url(" + escape(__webpack_require__(/*! ./ionicons.woff */ "./node_modules/quasar-extras/ionicons/ionicons.woff")) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n.ionicons:before {\n  display: inline-block;\n  font-family: \"Ionicons\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-rendering: auto;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.ion-ios-add:before {\n  content: \"\\F102\";\n}\n\n.ion-ios-add-circle:before {\n  content: \"\\F101\";\n}\n\n.ion-ios-add-circle-outline:before {\n  content: \"\\F100\";\n}\n\n.ion-ios-airplane:before {\n  content: \"\\F137\";\n}\n\n.ion-ios-alarm:before {\n  content: \"\\F3C8\";\n}\n\n.ion-ios-albums:before {\n  content: \"\\F3CA\";\n}\n\n.ion-ios-alert:before {\n  content: \"\\F104\";\n}\n\n.ion-ios-american-football:before {\n  content: \"\\F106\";\n}\n\n.ion-ios-analytics:before {\n  content: \"\\F3CE\";\n}\n\n.ion-ios-aperture:before {\n  content: \"\\F108\";\n}\n\n.ion-ios-apps:before {\n  content: \"\\F10A\";\n}\n\n.ion-ios-appstore:before {\n  content: \"\\F10C\";\n}\n\n.ion-ios-archive:before {\n  content: \"\\F10E\";\n}\n\n.ion-ios-arrow-back:before {\n  content: \"\\F3CF\";\n}\n\n.ion-ios-arrow-down:before {\n  content: \"\\F3D0\";\n}\n\n.ion-ios-arrow-dropdown:before {\n  content: \"\\F110\";\n}\n\n.ion-ios-arrow-dropdown-circle:before {\n  content: \"\\F125\";\n}\n\n.ion-ios-arrow-dropleft:before {\n  content: \"\\F112\";\n}\n\n.ion-ios-arrow-dropleft-circle:before {\n  content: \"\\F129\";\n}\n\n.ion-ios-arrow-dropright:before {\n  content: \"\\F114\";\n}\n\n.ion-ios-arrow-dropright-circle:before {\n  content: \"\\F12B\";\n}\n\n.ion-ios-arrow-dropup:before {\n  content: \"\\F116\";\n}\n\n.ion-ios-arrow-dropup-circle:before {\n  content: \"\\F12D\";\n}\n\n.ion-ios-arrow-forward:before {\n  content: \"\\F3D1\";\n}\n\n.ion-ios-arrow-round-back:before {\n  content: \"\\F117\";\n}\n\n.ion-ios-arrow-round-down:before {\n  content: \"\\F118\";\n}\n\n.ion-ios-arrow-round-forward:before {\n  content: \"\\F119\";\n}\n\n.ion-ios-arrow-round-up:before {\n  content: \"\\F11A\";\n}\n\n.ion-ios-arrow-up:before {\n  content: \"\\F3D8\";\n}\n\n.ion-ios-at:before {\n  content: \"\\F3DA\";\n}\n\n.ion-ios-attach:before {\n  content: \"\\F11B\";\n}\n\n.ion-ios-backspace:before {\n  content: \"\\F11D\";\n}\n\n.ion-ios-barcode:before {\n  content: \"\\F3DC\";\n}\n\n.ion-ios-baseball:before {\n  content: \"\\F3DE\";\n}\n\n.ion-ios-basket:before {\n  content: \"\\F11F\";\n}\n\n.ion-ios-basketball:before {\n  content: \"\\F3E0\";\n}\n\n.ion-ios-battery-charging:before {\n  content: \"\\F120\";\n}\n\n.ion-ios-battery-dead:before {\n  content: \"\\F121\";\n}\n\n.ion-ios-battery-full:before {\n  content: \"\\F122\";\n}\n\n.ion-ios-beaker:before {\n  content: \"\\F124\";\n}\n\n.ion-ios-bed:before {\n  content: \"\\F139\";\n}\n\n.ion-ios-beer:before {\n  content: \"\\F126\";\n}\n\n.ion-ios-bicycle:before {\n  content: \"\\F127\";\n}\n\n.ion-ios-bluetooth:before {\n  content: \"\\F128\";\n}\n\n.ion-ios-boat:before {\n  content: \"\\F12A\";\n}\n\n.ion-ios-body:before {\n  content: \"\\F3E4\";\n}\n\n.ion-ios-bonfire:before {\n  content: \"\\F12C\";\n}\n\n.ion-ios-book:before {\n  content: \"\\F3E8\";\n}\n\n.ion-ios-bookmark:before {\n  content: \"\\F12E\";\n}\n\n.ion-ios-bookmarks:before {\n  content: \"\\F3EA\";\n}\n\n.ion-ios-bowtie:before {\n  content: \"\\F130\";\n}\n\n.ion-ios-briefcase:before {\n  content: \"\\F3EE\";\n}\n\n.ion-ios-browsers:before {\n  content: \"\\F3F0\";\n}\n\n.ion-ios-brush:before {\n  content: \"\\F132\";\n}\n\n.ion-ios-bug:before {\n  content: \"\\F134\";\n}\n\n.ion-ios-build:before {\n  content: \"\\F136\";\n}\n\n.ion-ios-bulb:before {\n  content: \"\\F138\";\n}\n\n.ion-ios-bus:before {\n  content: \"\\F13A\";\n}\n\n.ion-ios-business:before {\n  content: \"\\F1A3\";\n}\n\n.ion-ios-cafe:before {\n  content: \"\\F13C\";\n}\n\n.ion-ios-calculator:before {\n  content: \"\\F3F2\";\n}\n\n.ion-ios-calendar:before {\n  content: \"\\F3F4\";\n}\n\n.ion-ios-call:before {\n  content: \"\\F13E\";\n}\n\n.ion-ios-camera:before {\n  content: \"\\F3F6\";\n}\n\n.ion-ios-car:before {\n  content: \"\\F140\";\n}\n\n.ion-ios-card:before {\n  content: \"\\F142\";\n}\n\n.ion-ios-cart:before {\n  content: \"\\F3F8\";\n}\n\n.ion-ios-cash:before {\n  content: \"\\F144\";\n}\n\n.ion-ios-cellular:before {\n  content: \"\\F13D\";\n}\n\n.ion-ios-chatboxes:before {\n  content: \"\\F3FA\";\n}\n\n.ion-ios-chatbubbles:before {\n  content: \"\\F146\";\n}\n\n.ion-ios-checkbox:before {\n  content: \"\\F148\";\n}\n\n.ion-ios-checkbox-outline:before {\n  content: \"\\F147\";\n}\n\n.ion-ios-checkmark:before {\n  content: \"\\F3FF\";\n}\n\n.ion-ios-checkmark-circle:before {\n  content: \"\\F14A\";\n}\n\n.ion-ios-checkmark-circle-outline:before {\n  content: \"\\F149\";\n}\n\n.ion-ios-clipboard:before {\n  content: \"\\F14C\";\n}\n\n.ion-ios-clock:before {\n  content: \"\\F403\";\n}\n\n.ion-ios-close:before {\n  content: \"\\F406\";\n}\n\n.ion-ios-close-circle:before {\n  content: \"\\F14E\";\n}\n\n.ion-ios-close-circle-outline:before {\n  content: \"\\F14D\";\n}\n\n.ion-ios-cloud:before {\n  content: \"\\F40C\";\n}\n\n.ion-ios-cloud-circle:before {\n  content: \"\\F152\";\n}\n\n.ion-ios-cloud-done:before {\n  content: \"\\F154\";\n}\n\n.ion-ios-cloud-download:before {\n  content: \"\\F408\";\n}\n\n.ion-ios-cloud-outline:before {\n  content: \"\\F409\";\n}\n\n.ion-ios-cloud-upload:before {\n  content: \"\\F40B\";\n}\n\n.ion-ios-cloudy:before {\n  content: \"\\F410\";\n}\n\n.ion-ios-cloudy-night:before {\n  content: \"\\F40E\";\n}\n\n.ion-ios-code:before {\n  content: \"\\F157\";\n}\n\n.ion-ios-code-download:before {\n  content: \"\\F155\";\n}\n\n.ion-ios-code-working:before {\n  content: \"\\F156\";\n}\n\n.ion-ios-cog:before {\n  content: \"\\F412\";\n}\n\n.ion-ios-color-fill:before {\n  content: \"\\F159\";\n}\n\n.ion-ios-color-filter:before {\n  content: \"\\F414\";\n}\n\n.ion-ios-color-palette:before {\n  content: \"\\F15B\";\n}\n\n.ion-ios-color-wand:before {\n  content: \"\\F416\";\n}\n\n.ion-ios-compass:before {\n  content: \"\\F15D\";\n}\n\n.ion-ios-construct:before {\n  content: \"\\F15F\";\n}\n\n.ion-ios-contact:before {\n  content: \"\\F41A\";\n}\n\n.ion-ios-contacts:before {\n  content: \"\\F161\";\n}\n\n.ion-ios-contract:before {\n  content: \"\\F162\";\n}\n\n.ion-ios-contrast:before {\n  content: \"\\F163\";\n}\n\n.ion-ios-copy:before {\n  content: \"\\F41C\";\n}\n\n.ion-ios-create:before {\n  content: \"\\F165\";\n}\n\n.ion-ios-crop:before {\n  content: \"\\F41E\";\n}\n\n.ion-ios-cube:before {\n  content: \"\\F168\";\n}\n\n.ion-ios-cut:before {\n  content: \"\\F16A\";\n}\n\n.ion-ios-desktop:before {\n  content: \"\\F16C\";\n}\n\n.ion-ios-disc:before {\n  content: \"\\F16E\";\n}\n\n.ion-ios-document:before {\n  content: \"\\F170\";\n}\n\n.ion-ios-done-all:before {\n  content: \"\\F171\";\n}\n\n.ion-ios-download:before {\n  content: \"\\F420\";\n}\n\n.ion-ios-easel:before {\n  content: \"\\F173\";\n}\n\n.ion-ios-egg:before {\n  content: \"\\F175\";\n}\n\n.ion-ios-exit:before {\n  content: \"\\F177\";\n}\n\n.ion-ios-expand:before {\n  content: \"\\F178\";\n}\n\n.ion-ios-eye:before {\n  content: \"\\F425\";\n}\n\n.ion-ios-eye-off:before {\n  content: \"\\F17A\";\n}\n\n.ion-ios-fastforward:before {\n  content: \"\\F427\";\n}\n\n.ion-ios-female:before {\n  content: \"\\F17B\";\n}\n\n.ion-ios-filing:before {\n  content: \"\\F429\";\n}\n\n.ion-ios-film:before {\n  content: \"\\F42B\";\n}\n\n.ion-ios-finger-print:before {\n  content: \"\\F17C\";\n}\n\n.ion-ios-fitness:before {\n  content: \"\\F1AB\";\n}\n\n.ion-ios-flag:before {\n  content: \"\\F42D\";\n}\n\n.ion-ios-flame:before {\n  content: \"\\F42F\";\n}\n\n.ion-ios-flash:before {\n  content: \"\\F17E\";\n}\n\n.ion-ios-flash-off:before {\n  content: \"\\F12F\";\n}\n\n.ion-ios-flashlight:before {\n  content: \"\\F141\";\n}\n\n.ion-ios-flask:before {\n  content: \"\\F431\";\n}\n\n.ion-ios-flower:before {\n  content: \"\\F433\";\n}\n\n.ion-ios-folder:before {\n  content: \"\\F435\";\n}\n\n.ion-ios-folder-open:before {\n  content: \"\\F180\";\n}\n\n.ion-ios-football:before {\n  content: \"\\F437\";\n}\n\n.ion-ios-funnel:before {\n  content: \"\\F182\";\n}\n\n.ion-ios-gift:before {\n  content: \"\\F191\";\n}\n\n.ion-ios-git-branch:before {\n  content: \"\\F183\";\n}\n\n.ion-ios-git-commit:before {\n  content: \"\\F184\";\n}\n\n.ion-ios-git-compare:before {\n  content: \"\\F185\";\n}\n\n.ion-ios-git-merge:before {\n  content: \"\\F186\";\n}\n\n.ion-ios-git-network:before {\n  content: \"\\F187\";\n}\n\n.ion-ios-git-pull-request:before {\n  content: \"\\F188\";\n}\n\n.ion-ios-glasses:before {\n  content: \"\\F43F\";\n}\n\n.ion-ios-globe:before {\n  content: \"\\F18A\";\n}\n\n.ion-ios-grid:before {\n  content: \"\\F18C\";\n}\n\n.ion-ios-hammer:before {\n  content: \"\\F18E\";\n}\n\n.ion-ios-hand:before {\n  content: \"\\F190\";\n}\n\n.ion-ios-happy:before {\n  content: \"\\F192\";\n}\n\n.ion-ios-headset:before {\n  content: \"\\F194\";\n}\n\n.ion-ios-heart:before {\n  content: \"\\F443\";\n}\n\n.ion-ios-heart-dislike:before {\n  content: \"\\F13F\";\n}\n\n.ion-ios-heart-empty:before {\n  content: \"\\F19B\";\n}\n\n.ion-ios-heart-half:before {\n  content: \"\\F19D\";\n}\n\n.ion-ios-help:before {\n  content: \"\\F446\";\n}\n\n.ion-ios-help-buoy:before {\n  content: \"\\F196\";\n}\n\n.ion-ios-help-circle:before {\n  content: \"\\F198\";\n}\n\n.ion-ios-help-circle-outline:before {\n  content: \"\\F197\";\n}\n\n.ion-ios-home:before {\n  content: \"\\F448\";\n}\n\n.ion-ios-hourglass:before {\n  content: \"\\F103\";\n}\n\n.ion-ios-ice-cream:before {\n  content: \"\\F19A\";\n}\n\n.ion-ios-image:before {\n  content: \"\\F19C\";\n}\n\n.ion-ios-images:before {\n  content: \"\\F19E\";\n}\n\n.ion-ios-infinite:before {\n  content: \"\\F44A\";\n}\n\n.ion-ios-information:before {\n  content: \"\\F44D\";\n}\n\n.ion-ios-information-circle:before {\n  content: \"\\F1A0\";\n}\n\n.ion-ios-information-circle-outline:before {\n  content: \"\\F19F\";\n}\n\n.ion-ios-jet:before {\n  content: \"\\F1A5\";\n}\n\n.ion-ios-journal:before {\n  content: \"\\F189\";\n}\n\n.ion-ios-key:before {\n  content: \"\\F1A7\";\n}\n\n.ion-ios-keypad:before {\n  content: \"\\F450\";\n}\n\n.ion-ios-laptop:before {\n  content: \"\\F1A8\";\n}\n\n.ion-ios-leaf:before {\n  content: \"\\F1AA\";\n}\n\n.ion-ios-link:before {\n  content: \"\\F22A\";\n}\n\n.ion-ios-list:before {\n  content: \"\\F454\";\n}\n\n.ion-ios-list-box:before {\n  content: \"\\F143\";\n}\n\n.ion-ios-locate:before {\n  content: \"\\F1AE\";\n}\n\n.ion-ios-lock:before {\n  content: \"\\F1B0\";\n}\n\n.ion-ios-log-in:before {\n  content: \"\\F1B1\";\n}\n\n.ion-ios-log-out:before {\n  content: \"\\F1B2\";\n}\n\n.ion-ios-magnet:before {\n  content: \"\\F1B4\";\n}\n\n.ion-ios-mail:before {\n  content: \"\\F1B8\";\n}\n\n.ion-ios-mail-open:before {\n  content: \"\\F1B6\";\n}\n\n.ion-ios-mail-unread:before {\n  content: \"\\F145\";\n}\n\n.ion-ios-male:before {\n  content: \"\\F1B9\";\n}\n\n.ion-ios-man:before {\n  content: \"\\F1BB\";\n}\n\n.ion-ios-map:before {\n  content: \"\\F1BD\";\n}\n\n.ion-ios-medal:before {\n  content: \"\\F1BF\";\n}\n\n.ion-ios-medical:before {\n  content: \"\\F45C\";\n}\n\n.ion-ios-medkit:before {\n  content: \"\\F45E\";\n}\n\n.ion-ios-megaphone:before {\n  content: \"\\F1C1\";\n}\n\n.ion-ios-menu:before {\n  content: \"\\F1C3\";\n}\n\n.ion-ios-mic:before {\n  content: \"\\F461\";\n}\n\n.ion-ios-mic-off:before {\n  content: \"\\F45F\";\n}\n\n.ion-ios-microphone:before {\n  content: \"\\F1C6\";\n}\n\n.ion-ios-moon:before {\n  content: \"\\F468\";\n}\n\n.ion-ios-more:before {\n  content: \"\\F1C8\";\n}\n\n.ion-ios-move:before {\n  content: \"\\F1CB\";\n}\n\n.ion-ios-musical-note:before {\n  content: \"\\F46B\";\n}\n\n.ion-ios-musical-notes:before {\n  content: \"\\F46C\";\n}\n\n.ion-ios-navigate:before {\n  content: \"\\F46E\";\n}\n\n.ion-ios-notifications:before {\n  content: \"\\F1D3\";\n}\n\n.ion-ios-notifications-off:before {\n  content: \"\\F1D1\";\n}\n\n.ion-ios-notifications-outline:before {\n  content: \"\\F133\";\n}\n\n.ion-ios-nuclear:before {\n  content: \"\\F1D5\";\n}\n\n.ion-ios-nutrition:before {\n  content: \"\\F470\";\n}\n\n.ion-ios-open:before {\n  content: \"\\F1D7\";\n}\n\n.ion-ios-options:before {\n  content: \"\\F1D9\";\n}\n\n.ion-ios-outlet:before {\n  content: \"\\F1DB\";\n}\n\n.ion-ios-paper:before {\n  content: \"\\F472\";\n}\n\n.ion-ios-paper-plane:before {\n  content: \"\\F1DD\";\n}\n\n.ion-ios-partly-sunny:before {\n  content: \"\\F1DF\";\n}\n\n.ion-ios-pause:before {\n  content: \"\\F478\";\n}\n\n.ion-ios-paw:before {\n  content: \"\\F47A\";\n}\n\n.ion-ios-people:before {\n  content: \"\\F47C\";\n}\n\n.ion-ios-person:before {\n  content: \"\\F47E\";\n}\n\n.ion-ios-person-add:before {\n  content: \"\\F1E1\";\n}\n\n.ion-ios-phone-landscape:before {\n  content: \"\\F1E2\";\n}\n\n.ion-ios-phone-portrait:before {\n  content: \"\\F1E3\";\n}\n\n.ion-ios-photos:before {\n  content: \"\\F482\";\n}\n\n.ion-ios-pie:before {\n  content: \"\\F484\";\n}\n\n.ion-ios-pin:before {\n  content: \"\\F1E5\";\n}\n\n.ion-ios-pint:before {\n  content: \"\\F486\";\n}\n\n.ion-ios-pizza:before {\n  content: \"\\F1E7\";\n}\n\n.ion-ios-planet:before {\n  content: \"\\F1EB\";\n}\n\n.ion-ios-play:before {\n  content: \"\\F488\";\n}\n\n.ion-ios-play-circle:before {\n  content: \"\\F113\";\n}\n\n.ion-ios-podium:before {\n  content: \"\\F1ED\";\n}\n\n.ion-ios-power:before {\n  content: \"\\F1EF\";\n}\n\n.ion-ios-pricetag:before {\n  content: \"\\F48D\";\n}\n\n.ion-ios-pricetags:before {\n  content: \"\\F48F\";\n}\n\n.ion-ios-print:before {\n  content: \"\\F1F1\";\n}\n\n.ion-ios-pulse:before {\n  content: \"\\F493\";\n}\n\n.ion-ios-qr-scanner:before {\n  content: \"\\F1F3\";\n}\n\n.ion-ios-quote:before {\n  content: \"\\F1F5\";\n}\n\n.ion-ios-radio:before {\n  content: \"\\F1F9\";\n}\n\n.ion-ios-radio-button-off:before {\n  content: \"\\F1F6\";\n}\n\n.ion-ios-radio-button-on:before {\n  content: \"\\F1F7\";\n}\n\n.ion-ios-rainy:before {\n  content: \"\\F495\";\n}\n\n.ion-ios-recording:before {\n  content: \"\\F497\";\n}\n\n.ion-ios-redo:before {\n  content: \"\\F499\";\n}\n\n.ion-ios-refresh:before {\n  content: \"\\F49C\";\n}\n\n.ion-ios-refresh-circle:before {\n  content: \"\\F135\";\n}\n\n.ion-ios-remove:before {\n  content: \"\\F1FC\";\n}\n\n.ion-ios-remove-circle:before {\n  content: \"\\F1FB\";\n}\n\n.ion-ios-remove-circle-outline:before {\n  content: \"\\F1FA\";\n}\n\n.ion-ios-reorder:before {\n  content: \"\\F1FD\";\n}\n\n.ion-ios-repeat:before {\n  content: \"\\F1FE\";\n}\n\n.ion-ios-resize:before {\n  content: \"\\F1FF\";\n}\n\n.ion-ios-restaurant:before {\n  content: \"\\F201\";\n}\n\n.ion-ios-return-left:before {\n  content: \"\\F202\";\n}\n\n.ion-ios-return-right:before {\n  content: \"\\F203\";\n}\n\n.ion-ios-reverse-camera:before {\n  content: \"\\F49F\";\n}\n\n.ion-ios-rewind:before {\n  content: \"\\F4A1\";\n}\n\n.ion-ios-ribbon:before {\n  content: \"\\F205\";\n}\n\n.ion-ios-rocket:before {\n  content: \"\\F14B\";\n}\n\n.ion-ios-rose:before {\n  content: \"\\F4A3\";\n}\n\n.ion-ios-sad:before {\n  content: \"\\F207\";\n}\n\n.ion-ios-save:before {\n  content: \"\\F1A6\";\n}\n\n.ion-ios-school:before {\n  content: \"\\F209\";\n}\n\n.ion-ios-search:before {\n  content: \"\\F4A5\";\n}\n\n.ion-ios-send:before {\n  content: \"\\F20C\";\n}\n\n.ion-ios-settings:before {\n  content: \"\\F4A7\";\n}\n\n.ion-ios-share:before {\n  content: \"\\F211\";\n}\n\n.ion-ios-share-alt:before {\n  content: \"\\F20F\";\n}\n\n.ion-ios-shirt:before {\n  content: \"\\F213\";\n}\n\n.ion-ios-shuffle:before {\n  content: \"\\F4A9\";\n}\n\n.ion-ios-skip-backward:before {\n  content: \"\\F215\";\n}\n\n.ion-ios-skip-forward:before {\n  content: \"\\F217\";\n}\n\n.ion-ios-snow:before {\n  content: \"\\F218\";\n}\n\n.ion-ios-speedometer:before {\n  content: \"\\F4B0\";\n}\n\n.ion-ios-square:before {\n  content: \"\\F21A\";\n}\n\n.ion-ios-square-outline:before {\n  content: \"\\F15C\";\n}\n\n.ion-ios-star:before {\n  content: \"\\F4B3\";\n}\n\n.ion-ios-star-half:before {\n  content: \"\\F4B1\";\n}\n\n.ion-ios-star-outline:before {\n  content: \"\\F4B2\";\n}\n\n.ion-ios-stats:before {\n  content: \"\\F21C\";\n}\n\n.ion-ios-stopwatch:before {\n  content: \"\\F4B5\";\n}\n\n.ion-ios-subway:before {\n  content: \"\\F21E\";\n}\n\n.ion-ios-sunny:before {\n  content: \"\\F4B7\";\n}\n\n.ion-ios-swap:before {\n  content: \"\\F21F\";\n}\n\n.ion-ios-switch:before {\n  content: \"\\F221\";\n}\n\n.ion-ios-sync:before {\n  content: \"\\F222\";\n}\n\n.ion-ios-tablet-landscape:before {\n  content: \"\\F223\";\n}\n\n.ion-ios-tablet-portrait:before {\n  content: \"\\F24E\";\n}\n\n.ion-ios-tennisball:before {\n  content: \"\\F4BB\";\n}\n\n.ion-ios-text:before {\n  content: \"\\F250\";\n}\n\n.ion-ios-thermometer:before {\n  content: \"\\F252\";\n}\n\n.ion-ios-thumbs-down:before {\n  content: \"\\F254\";\n}\n\n.ion-ios-thumbs-up:before {\n  content: \"\\F256\";\n}\n\n.ion-ios-thunderstorm:before {\n  content: \"\\F4BD\";\n}\n\n.ion-ios-time:before {\n  content: \"\\F4BF\";\n}\n\n.ion-ios-timer:before {\n  content: \"\\F4C1\";\n}\n\n.ion-ios-today:before {\n  content: \"\\F14F\";\n}\n\n.ion-ios-train:before {\n  content: \"\\F258\";\n}\n\n.ion-ios-transgender:before {\n  content: \"\\F259\";\n}\n\n.ion-ios-trash:before {\n  content: \"\\F4C5\";\n}\n\n.ion-ios-trending-down:before {\n  content: \"\\F25A\";\n}\n\n.ion-ios-trending-up:before {\n  content: \"\\F25B\";\n}\n\n.ion-ios-trophy:before {\n  content: \"\\F25D\";\n}\n\n.ion-ios-tv:before {\n  content: \"\\F115\";\n}\n\n.ion-ios-umbrella:before {\n  content: \"\\F25F\";\n}\n\n.ion-ios-undo:before {\n  content: \"\\F4C7\";\n}\n\n.ion-ios-unlock:before {\n  content: \"\\F261\";\n}\n\n.ion-ios-videocam:before {\n  content: \"\\F4CD\";\n}\n\n.ion-ios-volume-high:before {\n  content: \"\\F11C\";\n}\n\n.ion-ios-volume-low:before {\n  content: \"\\F11E\";\n}\n\n.ion-ios-volume-mute:before {\n  content: \"\\F263\";\n}\n\n.ion-ios-volume-off:before {\n  content: \"\\F264\";\n}\n\n.ion-ios-walk:before {\n  content: \"\\F266\";\n}\n\n.ion-ios-wallet:before {\n  content: \"\\F18B\";\n}\n\n.ion-ios-warning:before {\n  content: \"\\F268\";\n}\n\n.ion-ios-watch:before {\n  content: \"\\F269\";\n}\n\n.ion-ios-water:before {\n  content: \"\\F26B\";\n}\n\n.ion-ios-wifi:before {\n  content: \"\\F26D\";\n}\n\n.ion-ios-wine:before {\n  content: \"\\F26F\";\n}\n\n.ion-ios-woman:before {\n  content: \"\\F271\";\n}\n\n.ion-logo-android:before {\n  content: \"\\F225\";\n}\n\n.ion-logo-angular:before {\n  content: \"\\F227\";\n}\n\n.ion-logo-apple:before {\n  content: \"\\F229\";\n}\n\n.ion-logo-bitbucket:before {\n  content: \"\\F193\";\n}\n\n.ion-logo-bitcoin:before {\n  content: \"\\F22B\";\n}\n\n.ion-logo-buffer:before {\n  content: \"\\F22D\";\n}\n\n.ion-logo-chrome:before {\n  content: \"\\F22F\";\n}\n\n.ion-logo-closed-captioning:before {\n  content: \"\\F105\";\n}\n\n.ion-logo-codepen:before {\n  content: \"\\F230\";\n}\n\n.ion-logo-css3:before {\n  content: \"\\F231\";\n}\n\n.ion-logo-designernews:before {\n  content: \"\\F232\";\n}\n\n.ion-logo-dribbble:before {\n  content: \"\\F233\";\n}\n\n.ion-logo-dropbox:before {\n  content: \"\\F234\";\n}\n\n.ion-logo-euro:before {\n  content: \"\\F235\";\n}\n\n.ion-logo-facebook:before {\n  content: \"\\F236\";\n}\n\n.ion-logo-flickr:before {\n  content: \"\\F107\";\n}\n\n.ion-logo-foursquare:before {\n  content: \"\\F237\";\n}\n\n.ion-logo-freebsd-devil:before {\n  content: \"\\F238\";\n}\n\n.ion-logo-game-controller-a:before {\n  content: \"\\F13B\";\n}\n\n.ion-logo-game-controller-b:before {\n  content: \"\\F181\";\n}\n\n.ion-logo-github:before {\n  content: \"\\F239\";\n}\n\n.ion-logo-google:before {\n  content: \"\\F23A\";\n}\n\n.ion-logo-googleplus:before {\n  content: \"\\F23B\";\n}\n\n.ion-logo-hackernews:before {\n  content: \"\\F23C\";\n}\n\n.ion-logo-html5:before {\n  content: \"\\F23D\";\n}\n\n.ion-logo-instagram:before {\n  content: \"\\F23E\";\n}\n\n.ion-logo-ionic:before {\n  content: \"\\F150\";\n}\n\n.ion-logo-ionitron:before {\n  content: \"\\F151\";\n}\n\n.ion-logo-javascript:before {\n  content: \"\\F23F\";\n}\n\n.ion-logo-linkedin:before {\n  content: \"\\F240\";\n}\n\n.ion-logo-markdown:before {\n  content: \"\\F241\";\n}\n\n.ion-logo-model-s:before {\n  content: \"\\F153\";\n}\n\n.ion-logo-no-smoking:before {\n  content: \"\\F109\";\n}\n\n.ion-logo-nodejs:before {\n  content: \"\\F242\";\n}\n\n.ion-logo-npm:before {\n  content: \"\\F195\";\n}\n\n.ion-logo-octocat:before {\n  content: \"\\F243\";\n}\n\n.ion-logo-pinterest:before {\n  content: \"\\F244\";\n}\n\n.ion-logo-playstation:before {\n  content: \"\\F245\";\n}\n\n.ion-logo-polymer:before {\n  content: \"\\F15E\";\n}\n\n.ion-logo-python:before {\n  content: \"\\F246\";\n}\n\n.ion-logo-reddit:before {\n  content: \"\\F247\";\n}\n\n.ion-logo-rss:before {\n  content: \"\\F248\";\n}\n\n.ion-logo-sass:before {\n  content: \"\\F249\";\n}\n\n.ion-logo-skype:before {\n  content: \"\\F24A\";\n}\n\n.ion-logo-slack:before {\n  content: \"\\F10B\";\n}\n\n.ion-logo-snapchat:before {\n  content: \"\\F24B\";\n}\n\n.ion-logo-steam:before {\n  content: \"\\F24C\";\n}\n\n.ion-logo-tumblr:before {\n  content: \"\\F24D\";\n}\n\n.ion-logo-tux:before {\n  content: \"\\F2AE\";\n}\n\n.ion-logo-twitch:before {\n  content: \"\\F2AF\";\n}\n\n.ion-logo-twitter:before {\n  content: \"\\F2B0\";\n}\n\n.ion-logo-usd:before {\n  content: \"\\F2B1\";\n}\n\n.ion-logo-vimeo:before {\n  content: \"\\F2C4\";\n}\n\n.ion-logo-vk:before {\n  content: \"\\F10D\";\n}\n\n.ion-logo-whatsapp:before {\n  content: \"\\F2C5\";\n}\n\n.ion-logo-windows:before {\n  content: \"\\F32F\";\n}\n\n.ion-logo-wordpress:before {\n  content: \"\\F330\";\n}\n\n.ion-logo-xbox:before {\n  content: \"\\F34C\";\n}\n\n.ion-logo-xing:before {\n  content: \"\\F10F\";\n}\n\n.ion-logo-yahoo:before {\n  content: \"\\F34D\";\n}\n\n.ion-logo-yen:before {\n  content: \"\\F34E\";\n}\n\n.ion-logo-youtube:before {\n  content: \"\\F34F\";\n}\n\n.ion-md-add:before {\n  content: \"\\F273\";\n}\n\n.ion-md-add-circle:before {\n  content: \"\\F272\";\n}\n\n.ion-md-add-circle-outline:before {\n  content: \"\\F158\";\n}\n\n.ion-md-airplane:before {\n  content: \"\\F15A\";\n}\n\n.ion-md-alarm:before {\n  content: \"\\F274\";\n}\n\n.ion-md-albums:before {\n  content: \"\\F275\";\n}\n\n.ion-md-alert:before {\n  content: \"\\F276\";\n}\n\n.ion-md-american-football:before {\n  content: \"\\F277\";\n}\n\n.ion-md-analytics:before {\n  content: \"\\F278\";\n}\n\n.ion-md-aperture:before {\n  content: \"\\F279\";\n}\n\n.ion-md-apps:before {\n  content: \"\\F27A\";\n}\n\n.ion-md-appstore:before {\n  content: \"\\F27B\";\n}\n\n.ion-md-archive:before {\n  content: \"\\F27C\";\n}\n\n.ion-md-arrow-back:before {\n  content: \"\\F27D\";\n}\n\n.ion-md-arrow-down:before {\n  content: \"\\F27E\";\n}\n\n.ion-md-arrow-dropdown:before {\n  content: \"\\F280\";\n}\n\n.ion-md-arrow-dropdown-circle:before {\n  content: \"\\F27F\";\n}\n\n.ion-md-arrow-dropleft:before {\n  content: \"\\F282\";\n}\n\n.ion-md-arrow-dropleft-circle:before {\n  content: \"\\F281\";\n}\n\n.ion-md-arrow-dropright:before {\n  content: \"\\F284\";\n}\n\n.ion-md-arrow-dropright-circle:before {\n  content: \"\\F283\";\n}\n\n.ion-md-arrow-dropup:before {\n  content: \"\\F286\";\n}\n\n.ion-md-arrow-dropup-circle:before {\n  content: \"\\F285\";\n}\n\n.ion-md-arrow-forward:before {\n  content: \"\\F287\";\n}\n\n.ion-md-arrow-round-back:before {\n  content: \"\\F288\";\n}\n\n.ion-md-arrow-round-down:before {\n  content: \"\\F289\";\n}\n\n.ion-md-arrow-round-forward:before {\n  content: \"\\F28A\";\n}\n\n.ion-md-arrow-round-up:before {\n  content: \"\\F28B\";\n}\n\n.ion-md-arrow-up:before {\n  content: \"\\F28C\";\n}\n\n.ion-md-at:before {\n  content: \"\\F28D\";\n}\n\n.ion-md-attach:before {\n  content: \"\\F28E\";\n}\n\n.ion-md-backspace:before {\n  content: \"\\F28F\";\n}\n\n.ion-md-barcode:before {\n  content: \"\\F290\";\n}\n\n.ion-md-baseball:before {\n  content: \"\\F291\";\n}\n\n.ion-md-basket:before {\n  content: \"\\F292\";\n}\n\n.ion-md-basketball:before {\n  content: \"\\F293\";\n}\n\n.ion-md-battery-charging:before {\n  content: \"\\F294\";\n}\n\n.ion-md-battery-dead:before {\n  content: \"\\F295\";\n}\n\n.ion-md-battery-full:before {\n  content: \"\\F296\";\n}\n\n.ion-md-beaker:before {\n  content: \"\\F297\";\n}\n\n.ion-md-bed:before {\n  content: \"\\F160\";\n}\n\n.ion-md-beer:before {\n  content: \"\\F298\";\n}\n\n.ion-md-bicycle:before {\n  content: \"\\F299\";\n}\n\n.ion-md-bluetooth:before {\n  content: \"\\F29A\";\n}\n\n.ion-md-boat:before {\n  content: \"\\F29B\";\n}\n\n.ion-md-body:before {\n  content: \"\\F29C\";\n}\n\n.ion-md-bonfire:before {\n  content: \"\\F29D\";\n}\n\n.ion-md-book:before {\n  content: \"\\F29E\";\n}\n\n.ion-md-bookmark:before {\n  content: \"\\F29F\";\n}\n\n.ion-md-bookmarks:before {\n  content: \"\\F2A0\";\n}\n\n.ion-md-bowtie:before {\n  content: \"\\F2A1\";\n}\n\n.ion-md-briefcase:before {\n  content: \"\\F2A2\";\n}\n\n.ion-md-browsers:before {\n  content: \"\\F2A3\";\n}\n\n.ion-md-brush:before {\n  content: \"\\F2A4\";\n}\n\n.ion-md-bug:before {\n  content: \"\\F2A5\";\n}\n\n.ion-md-build:before {\n  content: \"\\F2A6\";\n}\n\n.ion-md-bulb:before {\n  content: \"\\F2A7\";\n}\n\n.ion-md-bus:before {\n  content: \"\\F2A8\";\n}\n\n.ion-md-business:before {\n  content: \"\\F1A4\";\n}\n\n.ion-md-cafe:before {\n  content: \"\\F2A9\";\n}\n\n.ion-md-calculator:before {\n  content: \"\\F2AA\";\n}\n\n.ion-md-calendar:before {\n  content: \"\\F2AB\";\n}\n\n.ion-md-call:before {\n  content: \"\\F2AC\";\n}\n\n.ion-md-camera:before {\n  content: \"\\F2AD\";\n}\n\n.ion-md-car:before {\n  content: \"\\F2B2\";\n}\n\n.ion-md-card:before {\n  content: \"\\F2B3\";\n}\n\n.ion-md-cart:before {\n  content: \"\\F2B4\";\n}\n\n.ion-md-cash:before {\n  content: \"\\F2B5\";\n}\n\n.ion-md-cellular:before {\n  content: \"\\F164\";\n}\n\n.ion-md-chatboxes:before {\n  content: \"\\F2B6\";\n}\n\n.ion-md-chatbubbles:before {\n  content: \"\\F2B7\";\n}\n\n.ion-md-checkbox:before {\n  content: \"\\F2B9\";\n}\n\n.ion-md-checkbox-outline:before {\n  content: \"\\F2B8\";\n}\n\n.ion-md-checkmark:before {\n  content: \"\\F2BC\";\n}\n\n.ion-md-checkmark-circle:before {\n  content: \"\\F2BB\";\n}\n\n.ion-md-checkmark-circle-outline:before {\n  content: \"\\F2BA\";\n}\n\n.ion-md-clipboard:before {\n  content: \"\\F2BD\";\n}\n\n.ion-md-clock:before {\n  content: \"\\F2BE\";\n}\n\n.ion-md-close:before {\n  content: \"\\F2C0\";\n}\n\n.ion-md-close-circle:before {\n  content: \"\\F2BF\";\n}\n\n.ion-md-close-circle-outline:before {\n  content: \"\\F166\";\n}\n\n.ion-md-cloud:before {\n  content: \"\\F2C9\";\n}\n\n.ion-md-cloud-circle:before {\n  content: \"\\F2C2\";\n}\n\n.ion-md-cloud-done:before {\n  content: \"\\F2C3\";\n}\n\n.ion-md-cloud-download:before {\n  content: \"\\F2C6\";\n}\n\n.ion-md-cloud-outline:before {\n  content: \"\\F2C7\";\n}\n\n.ion-md-cloud-upload:before {\n  content: \"\\F2C8\";\n}\n\n.ion-md-cloudy:before {\n  content: \"\\F2CB\";\n}\n\n.ion-md-cloudy-night:before {\n  content: \"\\F2CA\";\n}\n\n.ion-md-code:before {\n  content: \"\\F2CE\";\n}\n\n.ion-md-code-download:before {\n  content: \"\\F2CC\";\n}\n\n.ion-md-code-working:before {\n  content: \"\\F2CD\";\n}\n\n.ion-md-cog:before {\n  content: \"\\F2CF\";\n}\n\n.ion-md-color-fill:before {\n  content: \"\\F2D0\";\n}\n\n.ion-md-color-filter:before {\n  content: \"\\F2D1\";\n}\n\n.ion-md-color-palette:before {\n  content: \"\\F2D2\";\n}\n\n.ion-md-color-wand:before {\n  content: \"\\F2D3\";\n}\n\n.ion-md-compass:before {\n  content: \"\\F2D4\";\n}\n\n.ion-md-construct:before {\n  content: \"\\F2D5\";\n}\n\n.ion-md-contact:before {\n  content: \"\\F2D6\";\n}\n\n.ion-md-contacts:before {\n  content: \"\\F2D7\";\n}\n\n.ion-md-contract:before {\n  content: \"\\F2D8\";\n}\n\n.ion-md-contrast:before {\n  content: \"\\F2D9\";\n}\n\n.ion-md-copy:before {\n  content: \"\\F2DA\";\n}\n\n.ion-md-create:before {\n  content: \"\\F2DB\";\n}\n\n.ion-md-crop:before {\n  content: \"\\F2DC\";\n}\n\n.ion-md-cube:before {\n  content: \"\\F2DD\";\n}\n\n.ion-md-cut:before {\n  content: \"\\F2DE\";\n}\n\n.ion-md-desktop:before {\n  content: \"\\F2DF\";\n}\n\n.ion-md-disc:before {\n  content: \"\\F2E0\";\n}\n\n.ion-md-document:before {\n  content: \"\\F2E1\";\n}\n\n.ion-md-done-all:before {\n  content: \"\\F2E2\";\n}\n\n.ion-md-download:before {\n  content: \"\\F2E3\";\n}\n\n.ion-md-easel:before {\n  content: \"\\F2E4\";\n}\n\n.ion-md-egg:before {\n  content: \"\\F2E5\";\n}\n\n.ion-md-exit:before {\n  content: \"\\F2E6\";\n}\n\n.ion-md-expand:before {\n  content: \"\\F2E7\";\n}\n\n.ion-md-eye:before {\n  content: \"\\F2E9\";\n}\n\n.ion-md-eye-off:before {\n  content: \"\\F2E8\";\n}\n\n.ion-md-fastforward:before {\n  content: \"\\F2EA\";\n}\n\n.ion-md-female:before {\n  content: \"\\F2EB\";\n}\n\n.ion-md-filing:before {\n  content: \"\\F2EC\";\n}\n\n.ion-md-film:before {\n  content: \"\\F2ED\";\n}\n\n.ion-md-finger-print:before {\n  content: \"\\F2EE\";\n}\n\n.ion-md-fitness:before {\n  content: \"\\F1AC\";\n}\n\n.ion-md-flag:before {\n  content: \"\\F2EF\";\n}\n\n.ion-md-flame:before {\n  content: \"\\F2F0\";\n}\n\n.ion-md-flash:before {\n  content: \"\\F2F1\";\n}\n\n.ion-md-flash-off:before {\n  content: \"\\F169\";\n}\n\n.ion-md-flashlight:before {\n  content: \"\\F16B\";\n}\n\n.ion-md-flask:before {\n  content: \"\\F2F2\";\n}\n\n.ion-md-flower:before {\n  content: \"\\F2F3\";\n}\n\n.ion-md-folder:before {\n  content: \"\\F2F5\";\n}\n\n.ion-md-folder-open:before {\n  content: \"\\F2F4\";\n}\n\n.ion-md-football:before {\n  content: \"\\F2F6\";\n}\n\n.ion-md-funnel:before {\n  content: \"\\F2F7\";\n}\n\n.ion-md-gift:before {\n  content: \"\\F199\";\n}\n\n.ion-md-git-branch:before {\n  content: \"\\F2FA\";\n}\n\n.ion-md-git-commit:before {\n  content: \"\\F2FB\";\n}\n\n.ion-md-git-compare:before {\n  content: \"\\F2FC\";\n}\n\n.ion-md-git-merge:before {\n  content: \"\\F2FD\";\n}\n\n.ion-md-git-network:before {\n  content: \"\\F2FE\";\n}\n\n.ion-md-git-pull-request:before {\n  content: \"\\F2FF\";\n}\n\n.ion-md-glasses:before {\n  content: \"\\F300\";\n}\n\n.ion-md-globe:before {\n  content: \"\\F301\";\n}\n\n.ion-md-grid:before {\n  content: \"\\F302\";\n}\n\n.ion-md-hammer:before {\n  content: \"\\F303\";\n}\n\n.ion-md-hand:before {\n  content: \"\\F304\";\n}\n\n.ion-md-happy:before {\n  content: \"\\F305\";\n}\n\n.ion-md-headset:before {\n  content: \"\\F306\";\n}\n\n.ion-md-heart:before {\n  content: \"\\F308\";\n}\n\n.ion-md-heart-dislike:before {\n  content: \"\\F167\";\n}\n\n.ion-md-heart-empty:before {\n  content: \"\\F1A1\";\n}\n\n.ion-md-heart-half:before {\n  content: \"\\F1A2\";\n}\n\n.ion-md-help:before {\n  content: \"\\F30B\";\n}\n\n.ion-md-help-buoy:before {\n  content: \"\\F309\";\n}\n\n.ion-md-help-circle:before {\n  content: \"\\F30A\";\n}\n\n.ion-md-help-circle-outline:before {\n  content: \"\\F16D\";\n}\n\n.ion-md-home:before {\n  content: \"\\F30C\";\n}\n\n.ion-md-hourglass:before {\n  content: \"\\F111\";\n}\n\n.ion-md-ice-cream:before {\n  content: \"\\F30D\";\n}\n\n.ion-md-image:before {\n  content: \"\\F30E\";\n}\n\n.ion-md-images:before {\n  content: \"\\F30F\";\n}\n\n.ion-md-infinite:before {\n  content: \"\\F310\";\n}\n\n.ion-md-information:before {\n  content: \"\\F312\";\n}\n\n.ion-md-information-circle:before {\n  content: \"\\F311\";\n}\n\n.ion-md-information-circle-outline:before {\n  content: \"\\F16F\";\n}\n\n.ion-md-jet:before {\n  content: \"\\F315\";\n}\n\n.ion-md-journal:before {\n  content: \"\\F18D\";\n}\n\n.ion-md-key:before {\n  content: \"\\F316\";\n}\n\n.ion-md-keypad:before {\n  content: \"\\F317\";\n}\n\n.ion-md-laptop:before {\n  content: \"\\F318\";\n}\n\n.ion-md-leaf:before {\n  content: \"\\F319\";\n}\n\n.ion-md-link:before {\n  content: \"\\F22E\";\n}\n\n.ion-md-list:before {\n  content: \"\\F31B\";\n}\n\n.ion-md-list-box:before {\n  content: \"\\F31A\";\n}\n\n.ion-md-locate:before {\n  content: \"\\F31C\";\n}\n\n.ion-md-lock:before {\n  content: \"\\F31D\";\n}\n\n.ion-md-log-in:before {\n  content: \"\\F31E\";\n}\n\n.ion-md-log-out:before {\n  content: \"\\F31F\";\n}\n\n.ion-md-magnet:before {\n  content: \"\\F320\";\n}\n\n.ion-md-mail:before {\n  content: \"\\F322\";\n}\n\n.ion-md-mail-open:before {\n  content: \"\\F321\";\n}\n\n.ion-md-mail-unread:before {\n  content: \"\\F172\";\n}\n\n.ion-md-male:before {\n  content: \"\\F323\";\n}\n\n.ion-md-man:before {\n  content: \"\\F324\";\n}\n\n.ion-md-map:before {\n  content: \"\\F325\";\n}\n\n.ion-md-medal:before {\n  content: \"\\F326\";\n}\n\n.ion-md-medical:before {\n  content: \"\\F327\";\n}\n\n.ion-md-medkit:before {\n  content: \"\\F328\";\n}\n\n.ion-md-megaphone:before {\n  content: \"\\F329\";\n}\n\n.ion-md-menu:before {\n  content: \"\\F32A\";\n}\n\n.ion-md-mic:before {\n  content: \"\\F32C\";\n}\n\n.ion-md-mic-off:before {\n  content: \"\\F32B\";\n}\n\n.ion-md-microphone:before {\n  content: \"\\F32D\";\n}\n\n.ion-md-moon:before {\n  content: \"\\F32E\";\n}\n\n.ion-md-more:before {\n  content: \"\\F1C9\";\n}\n\n.ion-md-move:before {\n  content: \"\\F331\";\n}\n\n.ion-md-musical-note:before {\n  content: \"\\F332\";\n}\n\n.ion-md-musical-notes:before {\n  content: \"\\F333\";\n}\n\n.ion-md-navigate:before {\n  content: \"\\F334\";\n}\n\n.ion-md-notifications:before {\n  content: \"\\F338\";\n}\n\n.ion-md-notifications-off:before {\n  content: \"\\F336\";\n}\n\n.ion-md-notifications-outline:before {\n  content: \"\\F337\";\n}\n\n.ion-md-nuclear:before {\n  content: \"\\F339\";\n}\n\n.ion-md-nutrition:before {\n  content: \"\\F33A\";\n}\n\n.ion-md-open:before {\n  content: \"\\F33B\";\n}\n\n.ion-md-options:before {\n  content: \"\\F33C\";\n}\n\n.ion-md-outlet:before {\n  content: \"\\F33D\";\n}\n\n.ion-md-paper:before {\n  content: \"\\F33F\";\n}\n\n.ion-md-paper-plane:before {\n  content: \"\\F33E\";\n}\n\n.ion-md-partly-sunny:before {\n  content: \"\\F340\";\n}\n\n.ion-md-pause:before {\n  content: \"\\F341\";\n}\n\n.ion-md-paw:before {\n  content: \"\\F342\";\n}\n\n.ion-md-people:before {\n  content: \"\\F343\";\n}\n\n.ion-md-person:before {\n  content: \"\\F345\";\n}\n\n.ion-md-person-add:before {\n  content: \"\\F344\";\n}\n\n.ion-md-phone-landscape:before {\n  content: \"\\F346\";\n}\n\n.ion-md-phone-portrait:before {\n  content: \"\\F347\";\n}\n\n.ion-md-photos:before {\n  content: \"\\F348\";\n}\n\n.ion-md-pie:before {\n  content: \"\\F349\";\n}\n\n.ion-md-pin:before {\n  content: \"\\F34A\";\n}\n\n.ion-md-pint:before {\n  content: \"\\F34B\";\n}\n\n.ion-md-pizza:before {\n  content: \"\\F354\";\n}\n\n.ion-md-planet:before {\n  content: \"\\F356\";\n}\n\n.ion-md-play:before {\n  content: \"\\F357\";\n}\n\n.ion-md-play-circle:before {\n  content: \"\\F174\";\n}\n\n.ion-md-podium:before {\n  content: \"\\F358\";\n}\n\n.ion-md-power:before {\n  content: \"\\F359\";\n}\n\n.ion-md-pricetag:before {\n  content: \"\\F35A\";\n}\n\n.ion-md-pricetags:before {\n  content: \"\\F35B\";\n}\n\n.ion-md-print:before {\n  content: \"\\F35C\";\n}\n\n.ion-md-pulse:before {\n  content: \"\\F35D\";\n}\n\n.ion-md-qr-scanner:before {\n  content: \"\\F35E\";\n}\n\n.ion-md-quote:before {\n  content: \"\\F35F\";\n}\n\n.ion-md-radio:before {\n  content: \"\\F362\";\n}\n\n.ion-md-radio-button-off:before {\n  content: \"\\F360\";\n}\n\n.ion-md-radio-button-on:before {\n  content: \"\\F361\";\n}\n\n.ion-md-rainy:before {\n  content: \"\\F363\";\n}\n\n.ion-md-recording:before {\n  content: \"\\F364\";\n}\n\n.ion-md-redo:before {\n  content: \"\\F365\";\n}\n\n.ion-md-refresh:before {\n  content: \"\\F366\";\n}\n\n.ion-md-refresh-circle:before {\n  content: \"\\F228\";\n}\n\n.ion-md-remove:before {\n  content: \"\\F368\";\n}\n\n.ion-md-remove-circle:before {\n  content: \"\\F367\";\n}\n\n.ion-md-remove-circle-outline:before {\n  content: \"\\F176\";\n}\n\n.ion-md-reorder:before {\n  content: \"\\F369\";\n}\n\n.ion-md-repeat:before {\n  content: \"\\F36A\";\n}\n\n.ion-md-resize:before {\n  content: \"\\F36B\";\n}\n\n.ion-md-restaurant:before {\n  content: \"\\F36C\";\n}\n\n.ion-md-return-left:before {\n  content: \"\\F36D\";\n}\n\n.ion-md-return-right:before {\n  content: \"\\F36E\";\n}\n\n.ion-md-reverse-camera:before {\n  content: \"\\F36F\";\n}\n\n.ion-md-rewind:before {\n  content: \"\\F370\";\n}\n\n.ion-md-ribbon:before {\n  content: \"\\F371\";\n}\n\n.ion-md-rocket:before {\n  content: \"\\F179\";\n}\n\n.ion-md-rose:before {\n  content: \"\\F372\";\n}\n\n.ion-md-sad:before {\n  content: \"\\F373\";\n}\n\n.ion-md-save:before {\n  content: \"\\F1A9\";\n}\n\n.ion-md-school:before {\n  content: \"\\F374\";\n}\n\n.ion-md-search:before {\n  content: \"\\F375\";\n}\n\n.ion-md-send:before {\n  content: \"\\F376\";\n}\n\n.ion-md-settings:before {\n  content: \"\\F377\";\n}\n\n.ion-md-share:before {\n  content: \"\\F379\";\n}\n\n.ion-md-share-alt:before {\n  content: \"\\F378\";\n}\n\n.ion-md-shirt:before {\n  content: \"\\F37A\";\n}\n\n.ion-md-shuffle:before {\n  content: \"\\F37B\";\n}\n\n.ion-md-skip-backward:before {\n  content: \"\\F37C\";\n}\n\n.ion-md-skip-forward:before {\n  content: \"\\F37D\";\n}\n\n.ion-md-snow:before {\n  content: \"\\F37E\";\n}\n\n.ion-md-speedometer:before {\n  content: \"\\F37F\";\n}\n\n.ion-md-square:before {\n  content: \"\\F381\";\n}\n\n.ion-md-square-outline:before {\n  content: \"\\F380\";\n}\n\n.ion-md-star:before {\n  content: \"\\F384\";\n}\n\n.ion-md-star-half:before {\n  content: \"\\F382\";\n}\n\n.ion-md-star-outline:before {\n  content: \"\\F383\";\n}\n\n.ion-md-stats:before {\n  content: \"\\F385\";\n}\n\n.ion-md-stopwatch:before {\n  content: \"\\F386\";\n}\n\n.ion-md-subway:before {\n  content: \"\\F387\";\n}\n\n.ion-md-sunny:before {\n  content: \"\\F388\";\n}\n\n.ion-md-swap:before {\n  content: \"\\F389\";\n}\n\n.ion-md-switch:before {\n  content: \"\\F38A\";\n}\n\n.ion-md-sync:before {\n  content: \"\\F38B\";\n}\n\n.ion-md-tablet-landscape:before {\n  content: \"\\F38C\";\n}\n\n.ion-md-tablet-portrait:before {\n  content: \"\\F38D\";\n}\n\n.ion-md-tennisball:before {\n  content: \"\\F38E\";\n}\n\n.ion-md-text:before {\n  content: \"\\F38F\";\n}\n\n.ion-md-thermometer:before {\n  content: \"\\F390\";\n}\n\n.ion-md-thumbs-down:before {\n  content: \"\\F391\";\n}\n\n.ion-md-thumbs-up:before {\n  content: \"\\F392\";\n}\n\n.ion-md-thunderstorm:before {\n  content: \"\\F393\";\n}\n\n.ion-md-time:before {\n  content: \"\\F394\";\n}\n\n.ion-md-timer:before {\n  content: \"\\F395\";\n}\n\n.ion-md-today:before {\n  content: \"\\F17D\";\n}\n\n.ion-md-train:before {\n  content: \"\\F396\";\n}\n\n.ion-md-transgender:before {\n  content: \"\\F397\";\n}\n\n.ion-md-trash:before {\n  content: \"\\F398\";\n}\n\n.ion-md-trending-down:before {\n  content: \"\\F399\";\n}\n\n.ion-md-trending-up:before {\n  content: \"\\F39A\";\n}\n\n.ion-md-trophy:before {\n  content: \"\\F39B\";\n}\n\n.ion-md-tv:before {\n  content: \"\\F17F\";\n}\n\n.ion-md-umbrella:before {\n  content: \"\\F39C\";\n}\n\n.ion-md-undo:before {\n  content: \"\\F39D\";\n}\n\n.ion-md-unlock:before {\n  content: \"\\F39E\";\n}\n\n.ion-md-videocam:before {\n  content: \"\\F39F\";\n}\n\n.ion-md-volume-high:before {\n  content: \"\\F123\";\n}\n\n.ion-md-volume-low:before {\n  content: \"\\F131\";\n}\n\n.ion-md-volume-mute:before {\n  content: \"\\F3A1\";\n}\n\n.ion-md-volume-off:before {\n  content: \"\\F3A2\";\n}\n\n.ion-md-walk:before {\n  content: \"\\F3A4\";\n}\n\n.ion-md-wallet:before {\n  content: \"\\F18F\";\n}\n\n.ion-md-warning:before {\n  content: \"\\F3A5\";\n}\n\n.ion-md-watch:before {\n  content: \"\\F3A6\";\n}\n\n.ion-md-water:before {\n  content: \"\\F3A7\";\n}\n\n.ion-md-wifi:before {\n  content: \"\\F3A8\";\n}\n\n.ion-md-wine:before {\n  content: \"\\F3A9\";\n}\n\n.ion-md-woman:before {\n  content: \"\\F3AA\";\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/material-icons/material-icons.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/material-icons/material-icons.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__(/*! ./web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2 */ "./node_modules/quasar-extras/material-icons/web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2")) + ") format('woff2'), url(" + escape(__webpack_require__(/*! ./web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff */ "./node_modules/quasar-extras/material-icons/web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff")) + ") format('woff');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/mdi/mdi.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/mdi/mdi.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* MaterialDesignIcons.com 3.0.39 */\n@font-face {\n  font-family: \"Material Design Icons\";\n  src: url(" + escape(__webpack_require__(/*! ./mdi.woff2 */ "./node_modules/quasar-extras/mdi/mdi.woff2")) + ") format(\"woff2\"), url(" + escape(__webpack_require__(/*! ./mdi.woff */ "./node_modules/quasar-extras/mdi/mdi.woff")) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n.mdi:before,\n.mdi-set {\n  display: inline-block;\n  font: normal normal normal 24px/1 \"Material Design Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.mdi-access-point:before {\n  content: \"\\F002\";\n}\n\n.mdi-access-point-network:before {\n  content: \"\\F003\";\n}\n\n.mdi-account:before {\n  content: \"\\F004\";\n}\n\n.mdi-account-alert:before {\n  content: \"\\F005\";\n}\n\n.mdi-account-alert-outline:before {\n  content: \"\\FB2C\";\n}\n\n.mdi-account-arrow-left:before {\n  content: \"\\FB2D\";\n}\n\n.mdi-account-arrow-left-outline:before {\n  content: \"\\FB2E\";\n}\n\n.mdi-account-arrow-right:before {\n  content: \"\\FB2F\";\n}\n\n.mdi-account-arrow-right-outline:before {\n  content: \"\\FB30\";\n}\n\n.mdi-account-box:before {\n  content: \"\\F006\";\n}\n\n.mdi-account-box-multiple:before {\n  content: \"\\F933\";\n}\n\n.mdi-account-box-outline:before {\n  content: \"\\F007\";\n}\n\n.mdi-account-card-details:before {\n  content: \"\\F5D2\";\n}\n\n.mdi-account-check:before {\n  content: \"\\F008\";\n}\n\n.mdi-account-child:before {\n  content: \"\\FA88\";\n}\n\n.mdi-account-child-circle:before {\n  content: \"\\FA89\";\n}\n\n.mdi-account-circle:before {\n  content: \"\\F009\";\n}\n\n.mdi-account-circle-outline:before {\n  content: \"\\FB31\";\n}\n\n.mdi-account-clock:before {\n  content: \"\\FB32\";\n}\n\n.mdi-account-clock-outline:before {\n  content: \"\\FB33\";\n}\n\n.mdi-account-convert:before {\n  content: \"\\F00A\";\n}\n\n.mdi-account-details:before {\n  content: \"\\F631\";\n}\n\n.mdi-account-edit:before {\n  content: \"\\F6BB\";\n}\n\n.mdi-account-group:before {\n  content: \"\\F848\";\n}\n\n.mdi-account-group-outline:before {\n  content: \"\\FB34\";\n}\n\n.mdi-account-heart:before {\n  content: \"\\F898\";\n}\n\n.mdi-account-key:before {\n  content: \"\\F00B\";\n}\n\n.mdi-account-location:before {\n  content: \"\\F00C\";\n}\n\n.mdi-account-minus:before {\n  content: \"\\F00D\";\n}\n\n.mdi-account-minus-outline:before {\n  content: \"\\FAEB\";\n}\n\n.mdi-account-multiple:before {\n  content: \"\\F00E\";\n}\n\n.mdi-account-multiple-check:before {\n  content: \"\\F8C4\";\n}\n\n.mdi-account-multiple-minus:before {\n  content: \"\\F5D3\";\n}\n\n.mdi-account-multiple-outline:before {\n  content: \"\\F00F\";\n}\n\n.mdi-account-multiple-plus:before {\n  content: \"\\F010\";\n}\n\n.mdi-account-multiple-plus-outline:before {\n  content: \"\\F7FF\";\n}\n\n.mdi-account-network:before {\n  content: \"\\F011\";\n}\n\n.mdi-account-off:before {\n  content: \"\\F012\";\n}\n\n.mdi-account-outline:before {\n  content: \"\\F013\";\n}\n\n.mdi-account-plus:before {\n  content: \"\\F014\";\n}\n\n.mdi-account-plus-outline:before {\n  content: \"\\F800\";\n}\n\n.mdi-account-question:before {\n  content: \"\\FB35\";\n}\n\n.mdi-account-question-outline:before {\n  content: \"\\FB36\";\n}\n\n.mdi-account-remove:before {\n  content: \"\\F015\";\n}\n\n.mdi-account-remove-outline:before {\n  content: \"\\FAEC\";\n}\n\n.mdi-account-search:before {\n  content: \"\\F016\";\n}\n\n.mdi-account-search-outline:before {\n  content: \"\\F934\";\n}\n\n.mdi-account-settings:before {\n  content: \"\\F630\";\n}\n\n.mdi-account-star:before {\n  content: \"\\F017\";\n}\n\n.mdi-account-supervisor:before {\n  content: \"\\FA8A\";\n}\n\n.mdi-account-supervisor-circle:before {\n  content: \"\\FA8B\";\n}\n\n.mdi-account-switch:before {\n  content: \"\\F019\";\n}\n\n.mdi-accusoft:before {\n  content: \"\\F849\";\n}\n\n.mdi-adjust:before {\n  content: \"\\F01A\";\n}\n\n.mdi-adobe:before {\n  content: \"\\F935\";\n}\n\n.mdi-air-conditioner:before {\n  content: \"\\F01B\";\n}\n\n.mdi-airballoon:before {\n  content: \"\\F01C\";\n}\n\n.mdi-airplane:before {\n  content: \"\\F01D\";\n}\n\n.mdi-airplane-landing:before {\n  content: \"\\F5D4\";\n}\n\n.mdi-airplane-off:before {\n  content: \"\\F01E\";\n}\n\n.mdi-airplane-takeoff:before {\n  content: \"\\F5D5\";\n}\n\n.mdi-airplay:before {\n  content: \"\\F01F\";\n}\n\n.mdi-airport:before {\n  content: \"\\F84A\";\n}\n\n.mdi-alarm:before {\n  content: \"\\F020\";\n}\n\n.mdi-alarm-bell:before {\n  content: \"\\F78D\";\n}\n\n.mdi-alarm-check:before {\n  content: \"\\F021\";\n}\n\n.mdi-alarm-light:before {\n  content: \"\\F78E\";\n}\n\n.mdi-alarm-multiple:before {\n  content: \"\\F022\";\n}\n\n.mdi-alarm-off:before {\n  content: \"\\F023\";\n}\n\n.mdi-alarm-plus:before {\n  content: \"\\F024\";\n}\n\n.mdi-alarm-snooze:before {\n  content: \"\\F68D\";\n}\n\n.mdi-album:before {\n  content: \"\\F025\";\n}\n\n.mdi-alert:before {\n  content: \"\\F026\";\n}\n\n.mdi-alert-box:before {\n  content: \"\\F027\";\n}\n\n.mdi-alert-circle:before {\n  content: \"\\F028\";\n}\n\n.mdi-alert-circle-outline:before {\n  content: \"\\F5D6\";\n}\n\n.mdi-alert-decagram:before {\n  content: \"\\F6BC\";\n}\n\n.mdi-alert-octagon:before {\n  content: \"\\F029\";\n}\n\n.mdi-alert-octagram:before {\n  content: \"\\F766\";\n}\n\n.mdi-alert-outline:before {\n  content: \"\\F02A\";\n}\n\n.mdi-alien:before {\n  content: \"\\F899\";\n}\n\n.mdi-all-inclusive:before {\n  content: \"\\F6BD\";\n}\n\n.mdi-alpha:before {\n  content: \"\\F02B\";\n}\n\n.mdi-alpha-a:before {\n  content: \"A\";\n}\n\n.mdi-alpha-a-box:before {\n  content: \"\\FAED\";\n}\n\n.mdi-alpha-b:before {\n  content: \"B\";\n}\n\n.mdi-alpha-b-box:before {\n  content: \"\\FAEE\";\n}\n\n.mdi-alpha-c:before {\n  content: \"C\";\n}\n\n.mdi-alpha-c-box:before {\n  content: \"\\FAEF\";\n}\n\n.mdi-alpha-d:before {\n  content: \"D\";\n}\n\n.mdi-alpha-d-box:before {\n  content: \"\\FAF0\";\n}\n\n.mdi-alpha-e:before {\n  content: \"E\";\n}\n\n.mdi-alpha-e-box:before {\n  content: \"\\FAF1\";\n}\n\n.mdi-alpha-f:before {\n  content: \"F\";\n}\n\n.mdi-alpha-f-box:before {\n  content: \"\\FAF2\";\n}\n\n.mdi-alpha-g:before {\n  content: \"G\";\n}\n\n.mdi-alpha-g-box:before {\n  content: \"\\FAF3\";\n}\n\n.mdi-alpha-h:before {\n  content: \"H\";\n}\n\n.mdi-alpha-h-box:before {\n  content: \"\\FAF4\";\n}\n\n.mdi-alpha-i:before {\n  content: \"I\";\n}\n\n.mdi-alpha-i-box:before {\n  content: \"\\FAF5\";\n}\n\n.mdi-alpha-j:before {\n  content: \"J\";\n}\n\n.mdi-alpha-j-box:before {\n  content: \"\\FAF6\";\n}\n\n.mdi-alpha-k:before {\n  content: \"K\";\n}\n\n.mdi-alpha-k-box:before {\n  content: \"\\FAF7\";\n}\n\n.mdi-alpha-l:before {\n  content: \"L\";\n}\n\n.mdi-alpha-l-box:before {\n  content: \"\\FAF8\";\n}\n\n.mdi-alpha-m:before {\n  content: \"M\";\n}\n\n.mdi-alpha-m-box:before {\n  content: \"\\FAF9\";\n}\n\n.mdi-alpha-n:before {\n  content: \"N\";\n}\n\n.mdi-alpha-n-box:before {\n  content: \"\\FAFA\";\n}\n\n.mdi-alpha-o:before {\n  content: \"O\";\n}\n\n.mdi-alpha-o-box:before {\n  content: \"\\FAFB\";\n}\n\n.mdi-alpha-p:before {\n  content: \"P\";\n}\n\n.mdi-alpha-p-box:before {\n  content: \"\\FAFC\";\n}\n\n.mdi-alpha-q:before {\n  content: \"Q\";\n}\n\n.mdi-alpha-q-box:before {\n  content: \"\\FAFD\";\n}\n\n.mdi-alpha-r:before {\n  content: \"R\";\n}\n\n.mdi-alpha-r-box:before {\n  content: \"\\FAFE\";\n}\n\n.mdi-alpha-s:before {\n  content: \"S\";\n}\n\n.mdi-alpha-s-box:before {\n  content: \"\\FAFF\";\n}\n\n.mdi-alpha-t:before {\n  content: \"T\";\n}\n\n.mdi-alpha-t-box:before {\n  content: \"\\FB00\";\n}\n\n.mdi-alpha-u:before {\n  content: \"U\";\n}\n\n.mdi-alpha-u-box:before {\n  content: \"\\FB01\";\n}\n\n.mdi-alpha-v:before {\n  content: \"V\";\n}\n\n.mdi-alpha-v-box:before {\n  content: \"\\FB02\";\n}\n\n.mdi-alpha-w:before {\n  content: \"W\";\n}\n\n.mdi-alpha-w-box:before {\n  content: \"\\FB03\";\n}\n\n.mdi-alpha-x:before {\n  content: \"X\";\n}\n\n.mdi-alpha-x-box:before {\n  content: \"\\FB04\";\n}\n\n.mdi-alpha-y:before {\n  content: \"Y\";\n}\n\n.mdi-alpha-y-box:before {\n  content: \"\\FB05\";\n}\n\n.mdi-alpha-z:before {\n  content: \"Z\";\n}\n\n.mdi-alpha-z-box:before {\n  content: \"\\FB06\";\n}\n\n.mdi-alphabetical:before {\n  content: \"\\F02C\";\n}\n\n.mdi-altimeter:before {\n  content: \"\\F5D7\";\n}\n\n.mdi-amazon:before {\n  content: \"\\F02D\";\n}\n\n.mdi-amazon-alexa:before {\n  content: \"\\F8C5\";\n}\n\n.mdi-amazon-drive:before {\n  content: \"\\F02E\";\n}\n\n.mdi-ambulance:before {\n  content: \"\\F02F\";\n}\n\n.mdi-ampersand:before {\n  content: \"\\FA8C\";\n}\n\n.mdi-amplifier:before {\n  content: \"\\F030\";\n}\n\n.mdi-anchor:before {\n  content: \"\\F031\";\n}\n\n.mdi-android:before {\n  content: \"\\F032\";\n}\n\n.mdi-android-auto:before {\n  content: \"\\FA8D\";\n}\n\n.mdi-android-debug-bridge:before {\n  content: \"\\F033\";\n}\n\n.mdi-android-head:before {\n  content: \"\\F78F\";\n}\n\n.mdi-android-studio:before {\n  content: \"\\F034\";\n}\n\n.mdi-angle-acute:before {\n  content: \"\\F936\";\n}\n\n.mdi-angle-obtuse:before {\n  content: \"\\F937\";\n}\n\n.mdi-angle-right:before {\n  content: \"\\F938\";\n}\n\n.mdi-angular:before {\n  content: \"\\F6B1\";\n}\n\n.mdi-angularjs:before {\n  content: \"\\F6BE\";\n}\n\n.mdi-animation:before {\n  content: \"\\F5D8\";\n}\n\n.mdi-animation-outline:before {\n  content: \"\\FA8E\";\n}\n\n.mdi-animation-play:before {\n  content: \"\\F939\";\n}\n\n.mdi-animation-play-outline:before {\n  content: \"\\FA8F\";\n}\n\n.mdi-anvil:before {\n  content: \"\\F89A\";\n}\n\n.mdi-apple:before {\n  content: \"\\F035\";\n}\n\n.mdi-apple-finder:before {\n  content: \"\\F036\";\n}\n\n.mdi-apple-icloud:before {\n  content: \"\\F038\";\n}\n\n.mdi-apple-ios:before {\n  content: \"\\F037\";\n}\n\n.mdi-apple-keyboard-caps:before {\n  content: \"\\F632\";\n}\n\n.mdi-apple-keyboard-command:before {\n  content: \"\\F633\";\n}\n\n.mdi-apple-keyboard-control:before {\n  content: \"\\F634\";\n}\n\n.mdi-apple-keyboard-option:before {\n  content: \"\\F635\";\n}\n\n.mdi-apple-keyboard-shift:before {\n  content: \"\\F636\";\n}\n\n.mdi-apple-safari:before {\n  content: \"\\F039\";\n}\n\n.mdi-application:before {\n  content: \"\\F614\";\n}\n\n.mdi-apps:before {\n  content: \"\\F03B\";\n}\n\n.mdi-arch:before {\n  content: \"\\F8C6\";\n}\n\n.mdi-archive:before {\n  content: \"\\F03C\";\n}\n\n.mdi-arrange-bring-forward:before {\n  content: \"\\F03D\";\n}\n\n.mdi-arrange-bring-to-front:before {\n  content: \"\\F03E\";\n}\n\n.mdi-arrange-send-backward:before {\n  content: \"\\F03F\";\n}\n\n.mdi-arrange-send-to-back:before {\n  content: \"\\F040\";\n}\n\n.mdi-arrow-all:before {\n  content: \"\\F041\";\n}\n\n.mdi-arrow-bottom-left:before {\n  content: \"\\F042\";\n}\n\n.mdi-arrow-bottom-left-bold-outline:before {\n  content: \"\\F9B6\";\n}\n\n.mdi-arrow-bottom-left-thick:before {\n  content: \"\\F9B7\";\n}\n\n.mdi-arrow-bottom-right:before {\n  content: \"\\F043\";\n}\n\n.mdi-arrow-bottom-right-bold-outline:before {\n  content: \"\\F9B8\";\n}\n\n.mdi-arrow-bottom-right-thick:before {\n  content: \"\\F9B9\";\n}\n\n.mdi-arrow-collapse:before {\n  content: \"\\F615\";\n}\n\n.mdi-arrow-collapse-all:before {\n  content: \"\\F044\";\n}\n\n.mdi-arrow-collapse-down:before {\n  content: \"\\F791\";\n}\n\n.mdi-arrow-collapse-horizontal:before {\n  content: \"\\F84B\";\n}\n\n.mdi-arrow-collapse-left:before {\n  content: \"\\F792\";\n}\n\n.mdi-arrow-collapse-right:before {\n  content: \"\\F793\";\n}\n\n.mdi-arrow-collapse-up:before {\n  content: \"\\F794\";\n}\n\n.mdi-arrow-collapse-vertical:before {\n  content: \"\\F84C\";\n}\n\n.mdi-arrow-decision:before {\n  content: \"\\F9BA\";\n}\n\n.mdi-arrow-decision-auto:before {\n  content: \"\\F9BB\";\n}\n\n.mdi-arrow-decision-auto-outline:before {\n  content: \"\\F9BC\";\n}\n\n.mdi-arrow-decision-outline:before {\n  content: \"\\F9BD\";\n}\n\n.mdi-arrow-down:before {\n  content: \"\\F045\";\n}\n\n.mdi-arrow-down-bold:before {\n  content: \"\\F72D\";\n}\n\n.mdi-arrow-down-bold-box:before {\n  content: \"\\F72E\";\n}\n\n.mdi-arrow-down-bold-box-outline:before {\n  content: \"\\F72F\";\n}\n\n.mdi-arrow-down-bold-circle:before {\n  content: \"\\F047\";\n}\n\n.mdi-arrow-down-bold-circle-outline:before {\n  content: \"\\F048\";\n}\n\n.mdi-arrow-down-bold-hexagon-outline:before {\n  content: \"\\F049\";\n}\n\n.mdi-arrow-down-bold-outline:before {\n  content: \"\\F9BE\";\n}\n\n.mdi-arrow-down-box:before {\n  content: \"\\F6BF\";\n}\n\n.mdi-arrow-down-drop-circle:before {\n  content: \"\\F04A\";\n}\n\n.mdi-arrow-down-drop-circle-outline:before {\n  content: \"\\F04B\";\n}\n\n.mdi-arrow-down-thick:before {\n  content: \"\\F046\";\n}\n\n.mdi-arrow-expand:before {\n  content: \"\\F616\";\n}\n\n.mdi-arrow-expand-all:before {\n  content: \"\\F04C\";\n}\n\n.mdi-arrow-expand-down:before {\n  content: \"\\F795\";\n}\n\n.mdi-arrow-expand-horizontal:before {\n  content: \"\\F84D\";\n}\n\n.mdi-arrow-expand-left:before {\n  content: \"\\F796\";\n}\n\n.mdi-arrow-expand-right:before {\n  content: \"\\F797\";\n}\n\n.mdi-arrow-expand-up:before {\n  content: \"\\F798\";\n}\n\n.mdi-arrow-expand-vertical:before {\n  content: \"\\F84E\";\n}\n\n.mdi-arrow-left:before {\n  content: \"\\F04D\";\n}\n\n.mdi-arrow-left-bold:before {\n  content: \"\\F730\";\n}\n\n.mdi-arrow-left-bold-box:before {\n  content: \"\\F731\";\n}\n\n.mdi-arrow-left-bold-box-outline:before {\n  content: \"\\F732\";\n}\n\n.mdi-arrow-left-bold-circle:before {\n  content: \"\\F04F\";\n}\n\n.mdi-arrow-left-bold-circle-outline:before {\n  content: \"\\F050\";\n}\n\n.mdi-arrow-left-bold-hexagon-outline:before {\n  content: \"\\F051\";\n}\n\n.mdi-arrow-left-bold-outline:before {\n  content: \"\\F9BF\";\n}\n\n.mdi-arrow-left-box:before {\n  content: \"\\F6C0\";\n}\n\n.mdi-arrow-left-drop-circle:before {\n  content: \"\\F052\";\n}\n\n.mdi-arrow-left-drop-circle-outline:before {\n  content: \"\\F053\";\n}\n\n.mdi-arrow-left-right-bold-outline:before {\n  content: \"\\F9C0\";\n}\n\n.mdi-arrow-left-thick:before {\n  content: \"\\F04E\";\n}\n\n.mdi-arrow-right:before {\n  content: \"\\F054\";\n}\n\n.mdi-arrow-right-bold:before {\n  content: \"\\F733\";\n}\n\n.mdi-arrow-right-bold-box:before {\n  content: \"\\F734\";\n}\n\n.mdi-arrow-right-bold-box-outline:before {\n  content: \"\\F735\";\n}\n\n.mdi-arrow-right-bold-circle:before {\n  content: \"\\F056\";\n}\n\n.mdi-arrow-right-bold-circle-outline:before {\n  content: \"\\F057\";\n}\n\n.mdi-arrow-right-bold-hexagon-outline:before {\n  content: \"\\F058\";\n}\n\n.mdi-arrow-right-bold-outline:before {\n  content: \"\\F9C1\";\n}\n\n.mdi-arrow-right-box:before {\n  content: \"\\F6C1\";\n}\n\n.mdi-arrow-right-drop-circle:before {\n  content: \"\\F059\";\n}\n\n.mdi-arrow-right-drop-circle-outline:before {\n  content: \"\\F05A\";\n}\n\n.mdi-arrow-right-thick:before {\n  content: \"\\F055\";\n}\n\n.mdi-arrow-split-horizontal:before {\n  content: \"\\F93A\";\n}\n\n.mdi-arrow-split-vertical:before {\n  content: \"\\F93B\";\n}\n\n.mdi-arrow-top-left:before {\n  content: \"\\F05B\";\n}\n\n.mdi-arrow-top-left-bold-outline:before {\n  content: \"\\F9C2\";\n}\n\n.mdi-arrow-top-left-thick:before {\n  content: \"\\F9C3\";\n}\n\n.mdi-arrow-top-right:before {\n  content: \"\\F05C\";\n}\n\n.mdi-arrow-top-right-bold-outline:before {\n  content: \"\\F9C4\";\n}\n\n.mdi-arrow-top-right-thick:before {\n  content: \"\\F9C5\";\n}\n\n.mdi-arrow-up:before {\n  content: \"\\F05D\";\n}\n\n.mdi-arrow-up-bold:before {\n  content: \"\\F736\";\n}\n\n.mdi-arrow-up-bold-box:before {\n  content: \"\\F737\";\n}\n\n.mdi-arrow-up-bold-box-outline:before {\n  content: \"\\F738\";\n}\n\n.mdi-arrow-up-bold-circle:before {\n  content: \"\\F05F\";\n}\n\n.mdi-arrow-up-bold-circle-outline:before {\n  content: \"\\F060\";\n}\n\n.mdi-arrow-up-bold-hexagon-outline:before {\n  content: \"\\F061\";\n}\n\n.mdi-arrow-up-bold-outline:before {\n  content: \"\\F9C6\";\n}\n\n.mdi-arrow-up-box:before {\n  content: \"\\F6C2\";\n}\n\n.mdi-arrow-up-down-bold-outline:before {\n  content: \"\\F9C7\";\n}\n\n.mdi-arrow-up-drop-circle:before {\n  content: \"\\F062\";\n}\n\n.mdi-arrow-up-drop-circle-outline:before {\n  content: \"\\F063\";\n}\n\n.mdi-arrow-up-thick:before {\n  content: \"\\F05E\";\n}\n\n.mdi-artist:before {\n  content: \"\\F802\";\n}\n\n.mdi-artstation:before {\n  content: \"\\FB37\";\n}\n\n.mdi-aspect-ratio:before {\n  content: \"\\FA23\";\n}\n\n.mdi-assistant:before {\n  content: \"\\F064\";\n}\n\n.mdi-asterisk:before {\n  content: \"\\F6C3\";\n}\n\n.mdi-at:before {\n  content: \"\\F065\";\n}\n\n.mdi-atlassian:before {\n  content: \"\\F803\";\n}\n\n.mdi-atom:before {\n  content: \"\\F767\";\n}\n\n.mdi-attachment:before {\n  content: \"\\F066\";\n}\n\n.mdi-audio-video:before {\n  content: \"\\F93C\";\n}\n\n.mdi-audiobook:before {\n  content: \"\\F067\";\n}\n\n.mdi-augmented-reality:before {\n  content: \"\\F84F\";\n}\n\n.mdi-auto-fix:before {\n  content: \"\\F068\";\n}\n\n.mdi-auto-upload:before {\n  content: \"\\F069\";\n}\n\n.mdi-autorenew:before {\n  content: \"\\F06A\";\n}\n\n.mdi-av-timer:before {\n  content: \"\\F06B\";\n}\n\n.mdi-axe:before {\n  content: \"\\F8C7\";\n}\n\n.mdi-azure:before {\n  content: \"\\F804\";\n}\n\n.mdi-babel:before {\n  content: \"\\FA24\";\n}\n\n.mdi-baby:before {\n  content: \"\\F06C\";\n}\n\n.mdi-baby-buggy:before {\n  content: \"\\F68E\";\n}\n\n.mdi-backburger:before {\n  content: \"\\F06D\";\n}\n\n.mdi-backspace:before {\n  content: \"\\F06E\";\n}\n\n.mdi-backspace-outline:before {\n  content: \"\\FB38\";\n}\n\n.mdi-backup-restore:before {\n  content: \"\\F06F\";\n}\n\n.mdi-badminton:before {\n  content: \"\\F850\";\n}\n\n.mdi-balloon:before {\n  content: \"\\FA25\";\n}\n\n.mdi-ballot:before {\n  content: \"\\F9C8\";\n}\n\n.mdi-ballot-outline:before {\n  content: \"\\F9C9\";\n}\n\n.mdi-bandcamp:before {\n  content: \"\\F674\";\n}\n\n.mdi-bank:before {\n  content: \"\\F070\";\n}\n\n.mdi-bank-transfer:before {\n  content: \"\\FA26\";\n}\n\n.mdi-bank-transfer-in:before {\n  content: \"\\FA27\";\n}\n\n.mdi-bank-transfer-out:before {\n  content: \"\\FA28\";\n}\n\n.mdi-barcode:before {\n  content: \"\\F071\";\n}\n\n.mdi-barcode-scan:before {\n  content: \"\\F072\";\n}\n\n.mdi-barley:before {\n  content: \"\\F073\";\n}\n\n.mdi-barley-off:before {\n  content: \"\\FB39\";\n}\n\n.mdi-barn:before {\n  content: \"\\FB3A\";\n}\n\n.mdi-barrel:before {\n  content: \"\\F074\";\n}\n\n.mdi-baseball:before {\n  content: \"\\F851\";\n}\n\n.mdi-baseball-bat:before {\n  content: \"\\F852\";\n}\n\n.mdi-basecamp:before {\n  content: \"\\F075\";\n}\n\n.mdi-basket:before {\n  content: \"\\F076\";\n}\n\n.mdi-basket-fill:before {\n  content: \"\\F077\";\n}\n\n.mdi-basket-unfill:before {\n  content: \"\\F078\";\n}\n\n.mdi-basketball:before {\n  content: \"\\F805\";\n}\n\n.mdi-bat:before {\n  content: \"\\FB3B\";\n}\n\n.mdi-battery:before {\n  content: \"\\F079\";\n}\n\n.mdi-battery-10:before {\n  content: \"\\F07A\";\n}\n\n.mdi-battery-10-bluetooth:before {\n  content: \"\\F93D\";\n}\n\n.mdi-battery-20:before {\n  content: \"\\F07B\";\n}\n\n.mdi-battery-20-bluetooth:before {\n  content: \"\\F93E\";\n}\n\n.mdi-battery-30:before {\n  content: \"\\F07C\";\n}\n\n.mdi-battery-30-bluetooth:before {\n  content: \"\\F93F\";\n}\n\n.mdi-battery-40:before {\n  content: \"\\F07D\";\n}\n\n.mdi-battery-40-bluetooth:before {\n  content: \"\\F940\";\n}\n\n.mdi-battery-50:before {\n  content: \"\\F07E\";\n}\n\n.mdi-battery-50-bluetooth:before {\n  content: \"\\F941\";\n}\n\n.mdi-battery-60:before {\n  content: \"\\F07F\";\n}\n\n.mdi-battery-60-bluetooth:before {\n  content: \"\\F942\";\n}\n\n.mdi-battery-70:before {\n  content: \"\\F080\";\n}\n\n.mdi-battery-70-bluetooth:before {\n  content: \"\\F943\";\n}\n\n.mdi-battery-80:before {\n  content: \"\\F081\";\n}\n\n.mdi-battery-80-bluetooth:before {\n  content: \"\\F944\";\n}\n\n.mdi-battery-90:before {\n  content: \"\\F082\";\n}\n\n.mdi-battery-90-bluetooth:before {\n  content: \"\\F945\";\n}\n\n.mdi-battery-alert:before {\n  content: \"\\F083\";\n}\n\n.mdi-battery-alert-bluetooth:before {\n  content: \"\\F946\";\n}\n\n.mdi-battery-bluetooth:before {\n  content: \"\\F947\";\n}\n\n.mdi-battery-bluetooth-variant:before {\n  content: \"\\F948\";\n}\n\n.mdi-battery-charging:before {\n  content: \"\\F084\";\n}\n\n.mdi-battery-charging-10:before {\n  content: \"\\F89B\";\n}\n\n.mdi-battery-charging-100:before {\n  content: \"\\F085\";\n}\n\n.mdi-battery-charging-20:before {\n  content: \"\\F086\";\n}\n\n.mdi-battery-charging-30:before {\n  content: \"\\F087\";\n}\n\n.mdi-battery-charging-40:before {\n  content: \"\\F088\";\n}\n\n.mdi-battery-charging-50:before {\n  content: \"\\F89C\";\n}\n\n.mdi-battery-charging-60:before {\n  content: \"\\F089\";\n}\n\n.mdi-battery-charging-70:before {\n  content: \"\\F89D\";\n}\n\n.mdi-battery-charging-80:before {\n  content: \"\\F08A\";\n}\n\n.mdi-battery-charging-90:before {\n  content: \"\\F08B\";\n}\n\n.mdi-battery-charging-outline:before {\n  content: \"\\F89E\";\n}\n\n.mdi-battery-charging-wireless:before {\n  content: \"\\F806\";\n}\n\n.mdi-battery-charging-wireless-10:before {\n  content: \"\\F807\";\n}\n\n.mdi-battery-charging-wireless-20:before {\n  content: \"\\F808\";\n}\n\n.mdi-battery-charging-wireless-30:before {\n  content: \"\\F809\";\n}\n\n.mdi-battery-charging-wireless-40:before {\n  content: \"\\F80A\";\n}\n\n.mdi-battery-charging-wireless-50:before {\n  content: \"\\F80B\";\n}\n\n.mdi-battery-charging-wireless-60:before {\n  content: \"\\F80C\";\n}\n\n.mdi-battery-charging-wireless-70:before {\n  content: \"\\F80D\";\n}\n\n.mdi-battery-charging-wireless-80:before {\n  content: \"\\F80E\";\n}\n\n.mdi-battery-charging-wireless-90:before {\n  content: \"\\F80F\";\n}\n\n.mdi-battery-charging-wireless-alert:before {\n  content: \"\\F810\";\n}\n\n.mdi-battery-charging-wireless-outline:before {\n  content: \"\\F811\";\n}\n\n.mdi-battery-minus:before {\n  content: \"\\F08C\";\n}\n\n.mdi-battery-negative:before {\n  content: \"\\F08D\";\n}\n\n.mdi-battery-outline:before {\n  content: \"\\F08E\";\n}\n\n.mdi-battery-plus:before {\n  content: \"\\F08F\";\n}\n\n.mdi-battery-positive:before {\n  content: \"\\F090\";\n}\n\n.mdi-battery-unknown:before {\n  content: \"\\F091\";\n}\n\n.mdi-battery-unknown-bluetooth:before {\n  content: \"\\F949\";\n}\n\n.mdi-battlenet:before {\n  content: \"\\FB3C\";\n}\n\n.mdi-beach:before {\n  content: \"\\F092\";\n}\n\n.mdi-beaker:before {\n  content: \"\\F68F\";\n}\n\n.mdi-beats:before {\n  content: \"\\F097\";\n}\n\n.mdi-bed-empty:before {\n  content: \"\\F89F\";\n}\n\n.mdi-beer:before {\n  content: \"\\F098\";\n}\n\n.mdi-behance:before {\n  content: \"\\F099\";\n}\n\n.mdi-bell:before {\n  content: \"\\F09A\";\n}\n\n.mdi-bell-off:before {\n  content: \"\\F09B\";\n}\n\n.mdi-bell-off-outline:before {\n  content: \"\\FA90\";\n}\n\n.mdi-bell-outline:before {\n  content: \"\\F09C\";\n}\n\n.mdi-bell-plus:before {\n  content: \"\\F09D\";\n}\n\n.mdi-bell-plus-outline:before {\n  content: \"\\FA91\";\n}\n\n.mdi-bell-ring:before {\n  content: \"\\F09E\";\n}\n\n.mdi-bell-ring-outline:before {\n  content: \"\\F09F\";\n}\n\n.mdi-bell-sleep:before {\n  content: \"\\F0A0\";\n}\n\n.mdi-bell-sleep-outline:before {\n  content: \"\\FA92\";\n}\n\n.mdi-beta:before {\n  content: \"\\F0A1\";\n}\n\n.mdi-betamax:before {\n  content: \"\\F9CA\";\n}\n\n.mdi-bible:before {\n  content: \"\\F0A2\";\n}\n\n.mdi-bike:before {\n  content: \"\\F0A3\";\n}\n\n.mdi-billiards:before {\n  content: \"\\FB3D\";\n}\n\n.mdi-billiards-rack:before {\n  content: \"\\FB3E\";\n}\n\n.mdi-bing:before {\n  content: \"\\F0A4\";\n}\n\n.mdi-binoculars:before {\n  content: \"\\F0A5\";\n}\n\n.mdi-bio:before {\n  content: \"\\F0A6\";\n}\n\n.mdi-biohazard:before {\n  content: \"\\F0A7\";\n}\n\n.mdi-bitbucket:before {\n  content: \"\\F0A8\";\n}\n\n.mdi-bitcoin:before {\n  content: \"\\F812\";\n}\n\n.mdi-black-mesa:before {\n  content: \"\\F0A9\";\n}\n\n.mdi-blackberry:before {\n  content: \"\\F0AA\";\n}\n\n.mdi-blender:before {\n  content: \"\\F0AB\";\n}\n\n.mdi-blinds:before {\n  content: \"\\F0AC\";\n}\n\n.mdi-block-helper:before {\n  content: \"\\F0AD\";\n}\n\n.mdi-blogger:before {\n  content: \"\\F0AE\";\n}\n\n.mdi-bluetooth:before {\n  content: \"\\F0AF\";\n}\n\n.mdi-bluetooth-audio:before {\n  content: \"\\F0B0\";\n}\n\n.mdi-bluetooth-connect:before {\n  content: \"\\F0B1\";\n}\n\n.mdi-bluetooth-off:before {\n  content: \"\\F0B2\";\n}\n\n.mdi-bluetooth-settings:before {\n  content: \"\\F0B3\";\n}\n\n.mdi-bluetooth-transfer:before {\n  content: \"\\F0B4\";\n}\n\n.mdi-blur:before {\n  content: \"\\F0B5\";\n}\n\n.mdi-blur-linear:before {\n  content: \"\\F0B6\";\n}\n\n.mdi-blur-off:before {\n  content: \"\\F0B7\";\n}\n\n.mdi-blur-radial:before {\n  content: \"\\F0B8\";\n}\n\n.mdi-bomb:before {\n  content: \"\\F690\";\n}\n\n.mdi-bomb-off:before {\n  content: \"\\F6C4\";\n}\n\n.mdi-bone:before {\n  content: \"\\F0B9\";\n}\n\n.mdi-book:before {\n  content: \"\\F0BA\";\n}\n\n.mdi-book-lock:before {\n  content: \"\\F799\";\n}\n\n.mdi-book-lock-open:before {\n  content: \"\\F79A\";\n}\n\n.mdi-book-minus:before {\n  content: \"\\F5D9\";\n}\n\n.mdi-book-multiple:before {\n  content: \"\\F0BB\";\n}\n\n.mdi-book-multiple-minus:before {\n  content: \"\\FA93\";\n}\n\n.mdi-book-multiple-plus:before {\n  content: \"\\FA94\";\n}\n\n.mdi-book-multiple-remove:before {\n  content: \"\\FA95\";\n}\n\n.mdi-book-multiple-variant:before {\n  content: \"\\F0BC\";\n}\n\n.mdi-book-open:before {\n  content: \"\\F0BD\";\n}\n\n.mdi-book-open-outline:before {\n  content: \"\\FB3F\";\n}\n\n.mdi-book-open-page-variant:before {\n  content: \"\\F5DA\";\n}\n\n.mdi-book-open-variant:before {\n  content: \"\\F0BE\";\n}\n\n.mdi-book-outline:before {\n  content: \"\\FB40\";\n}\n\n.mdi-book-plus:before {\n  content: \"\\F5DB\";\n}\n\n.mdi-book-remove:before {\n  content: \"\\FA96\";\n}\n\n.mdi-book-variant:before {\n  content: \"\\F0BF\";\n}\n\n.mdi-bookmark:before {\n  content: \"\\F0C0\";\n}\n\n.mdi-bookmark-check:before {\n  content: \"\\F0C1\";\n}\n\n.mdi-bookmark-minus:before {\n  content: \"\\F9CB\";\n}\n\n.mdi-bookmark-minus-outline:before {\n  content: \"\\F9CC\";\n}\n\n.mdi-bookmark-music:before {\n  content: \"\\F0C2\";\n}\n\n.mdi-bookmark-off:before {\n  content: \"\\F9CD\";\n}\n\n.mdi-bookmark-off-outline:before {\n  content: \"\\F9CE\";\n}\n\n.mdi-bookmark-outline:before {\n  content: \"\\F0C3\";\n}\n\n.mdi-bookmark-plus:before {\n  content: \"\\F0C5\";\n}\n\n.mdi-bookmark-plus-outline:before {\n  content: \"\\F0C4\";\n}\n\n.mdi-bookmark-remove:before {\n  content: \"\\F0C6\";\n}\n\n.mdi-boombox:before {\n  content: \"\\F5DC\";\n}\n\n.mdi-bootstrap:before {\n  content: \"\\F6C5\";\n}\n\n.mdi-border-all:before {\n  content: \"\\F0C7\";\n}\n\n.mdi-border-all-variant:before {\n  content: \"\\F8A0\";\n}\n\n.mdi-border-bottom:before {\n  content: \"\\F0C8\";\n}\n\n.mdi-border-bottom-variant:before {\n  content: \"\\F8A1\";\n}\n\n.mdi-border-color:before {\n  content: \"\\F0C9\";\n}\n\n.mdi-border-horizontal:before {\n  content: \"\\F0CA\";\n}\n\n.mdi-border-inside:before {\n  content: \"\\F0CB\";\n}\n\n.mdi-border-left:before {\n  content: \"\\F0CC\";\n}\n\n.mdi-border-left-variant:before {\n  content: \"\\F8A2\";\n}\n\n.mdi-border-none:before {\n  content: \"\\F0CD\";\n}\n\n.mdi-border-none-variant:before {\n  content: \"\\F8A3\";\n}\n\n.mdi-border-outside:before {\n  content: \"\\F0CE\";\n}\n\n.mdi-border-right:before {\n  content: \"\\F0CF\";\n}\n\n.mdi-border-right-variant:before {\n  content: \"\\F8A4\";\n}\n\n.mdi-border-style:before {\n  content: \"\\F0D0\";\n}\n\n.mdi-border-top:before {\n  content: \"\\F0D1\";\n}\n\n.mdi-border-top-variant:before {\n  content: \"\\F8A5\";\n}\n\n.mdi-border-vertical:before {\n  content: \"\\F0D2\";\n}\n\n.mdi-bottle-wine:before {\n  content: \"\\F853\";\n}\n\n.mdi-bow-tie:before {\n  content: \"\\F677\";\n}\n\n.mdi-bowl:before {\n  content: \"\\F617\";\n}\n\n.mdi-bowling:before {\n  content: \"\\F0D3\";\n}\n\n.mdi-box:before {\n  content: \"\\F0D4\";\n}\n\n.mdi-box-cutter:before {\n  content: \"\\F0D5\";\n}\n\n.mdi-box-shadow:before {\n  content: \"\\F637\";\n}\n\n.mdi-boxing-glove:before {\n  content: \"\\FB41\";\n}\n\n.mdi-braille:before {\n  content: \"\\F9CF\";\n}\n\n.mdi-brain:before {\n  content: \"\\F9D0\";\n}\n\n.mdi-bridge:before {\n  content: \"\\F618\";\n}\n\n.mdi-briefcase:before {\n  content: \"\\F0D6\";\n}\n\n.mdi-briefcase-check:before {\n  content: \"\\F0D7\";\n}\n\n.mdi-briefcase-download:before {\n  content: \"\\F0D8\";\n}\n\n.mdi-briefcase-edit:before {\n  content: \"\\FA97\";\n}\n\n.mdi-briefcase-minus:before {\n  content: \"\\FA29\";\n}\n\n.mdi-briefcase-outline:before {\n  content: \"\\F813\";\n}\n\n.mdi-briefcase-plus:before {\n  content: \"\\FA2A\";\n}\n\n.mdi-briefcase-remove:before {\n  content: \"\\FA2B\";\n}\n\n.mdi-briefcase-search:before {\n  content: \"\\FA2C\";\n}\n\n.mdi-briefcase-upload:before {\n  content: \"\\F0D9\";\n}\n\n.mdi-brightness-1:before {\n  content: \"\\F0DA\";\n}\n\n.mdi-brightness-2:before {\n  content: \"\\F0DB\";\n}\n\n.mdi-brightness-3:before {\n  content: \"\\F0DC\";\n}\n\n.mdi-brightness-4:before {\n  content: \"\\F0DD\";\n}\n\n.mdi-brightness-5:before {\n  content: \"\\F0DE\";\n}\n\n.mdi-brightness-6:before {\n  content: \"\\F0DF\";\n}\n\n.mdi-brightness-7:before {\n  content: \"\\F0E0\";\n}\n\n.mdi-brightness-auto:before {\n  content: \"\\F0E1\";\n}\n\n.mdi-broom:before {\n  content: \"\\F0E2\";\n}\n\n.mdi-brush:before {\n  content: \"\\F0E3\";\n}\n\n.mdi-buddhism:before {\n  content: \"\\F94A\";\n}\n\n.mdi-buffer:before {\n  content: \"\\F619\";\n}\n\n.mdi-bug:before {\n  content: \"\\F0E4\";\n}\n\n.mdi-bug-check:before {\n  content: \"\\FA2D\";\n}\n\n.mdi-bug-check-outline:before {\n  content: \"\\FA2E\";\n}\n\n.mdi-bug-outline:before {\n  content: \"\\FA2F\";\n}\n\n.mdi-bulldozer:before {\n  content: \"\\FB07\";\n}\n\n.mdi-bulletin-board:before {\n  content: \"\\F0E5\";\n}\n\n.mdi-bullhorn:before {\n  content: \"\\F0E6\";\n}\n\n.mdi-bullhorn-outline:before {\n  content: \"\\FB08\";\n}\n\n.mdi-bullseye:before {\n  content: \"\\F5DD\";\n}\n\n.mdi-bullseye-arrow:before {\n  content: \"\\F8C8\";\n}\n\n.mdi-bus:before {\n  content: \"\\F0E7\";\n}\n\n.mdi-bus-alert:before {\n  content: \"\\FA98\";\n}\n\n.mdi-bus-articulated-end:before {\n  content: \"\\F79B\";\n}\n\n.mdi-bus-articulated-front:before {\n  content: \"\\F79C\";\n}\n\n.mdi-bus-clock:before {\n  content: \"\\F8C9\";\n}\n\n.mdi-bus-double-decker:before {\n  content: \"\\F79D\";\n}\n\n.mdi-bus-school:before {\n  content: \"\\F79E\";\n}\n\n.mdi-bus-side:before {\n  content: \"\\F79F\";\n}\n\n.mdi-cached:before {\n  content: \"\\F0E8\";\n}\n\n.mdi-cake:before {\n  content: \"\\F0E9\";\n}\n\n.mdi-cake-layered:before {\n  content: \"\\F0EA\";\n}\n\n.mdi-cake-variant:before {\n  content: \"\\F0EB\";\n}\n\n.mdi-calculator:before {\n  content: \"\\F0EC\";\n}\n\n.mdi-calculator-variant:before {\n  content: \"\\FA99\";\n}\n\n.mdi-calendar:before {\n  content: \"\\F0ED\";\n}\n\n.mdi-calendar-alert:before {\n  content: \"\\FA30\";\n}\n\n.mdi-calendar-blank:before {\n  content: \"\\F0EE\";\n}\n\n.mdi-calendar-blank-outline:before {\n  content: \"\\FB42\";\n}\n\n.mdi-calendar-check:before {\n  content: \"\\F0EF\";\n}\n\n.mdi-calendar-clock:before {\n  content: \"\\F0F0\";\n}\n\n.mdi-calendar-edit:before {\n  content: \"\\F8A6\";\n}\n\n.mdi-calendar-export:before {\n  content: \"\\FB09\";\n}\n\n.mdi-calendar-heart:before {\n  content: \"\\F9D1\";\n}\n\n.mdi-calendar-import:before {\n  content: \"\\FB0A\";\n}\n\n.mdi-calendar-multiple:before {\n  content: \"\\F0F1\";\n}\n\n.mdi-calendar-multiple-check:before {\n  content: \"\\F0F2\";\n}\n\n.mdi-calendar-multiselect:before {\n  content: \"\\FA31\";\n}\n\n.mdi-calendar-outline:before {\n  content: \"\\FB43\";\n}\n\n.mdi-calendar-plus:before {\n  content: \"\\F0F3\";\n}\n\n.mdi-calendar-question:before {\n  content: \"\\F691\";\n}\n\n.mdi-calendar-range:before {\n  content: \"\\F678\";\n}\n\n.mdi-calendar-range-outline:before {\n  content: \"\\FB44\";\n}\n\n.mdi-calendar-remove:before {\n  content: \"\\F0F4\";\n}\n\n.mdi-calendar-search:before {\n  content: \"\\F94B\";\n}\n\n.mdi-calendar-star:before {\n  content: \"\\F9D2\";\n}\n\n.mdi-calendar-text:before {\n  content: \"\\F0F5\";\n}\n\n.mdi-calendar-today:before {\n  content: \"\\F0F6\";\n}\n\n.mdi-calendar-week:before {\n  content: \"\\FA32\";\n}\n\n.mdi-calendar-week-begin:before {\n  content: \"\\FA33\";\n}\n\n.mdi-call-made:before {\n  content: \"\\F0F7\";\n}\n\n.mdi-call-merge:before {\n  content: \"\\F0F8\";\n}\n\n.mdi-call-missed:before {\n  content: \"\\F0F9\";\n}\n\n.mdi-call-received:before {\n  content: \"\\F0FA\";\n}\n\n.mdi-call-split:before {\n  content: \"\\F0FB\";\n}\n\n.mdi-camcorder:before {\n  content: \"\\F0FC\";\n}\n\n.mdi-camcorder-box:before {\n  content: \"\\F0FD\";\n}\n\n.mdi-camcorder-box-off:before {\n  content: \"\\F0FE\";\n}\n\n.mdi-camcorder-off:before {\n  content: \"\\F0FF\";\n}\n\n.mdi-camera:before {\n  content: \"\\F100\";\n}\n\n.mdi-camera-account:before {\n  content: \"\\F8CA\";\n}\n\n.mdi-camera-burst:before {\n  content: \"\\F692\";\n}\n\n.mdi-camera-control:before {\n  content: \"\\FB45\";\n}\n\n.mdi-camera-enhance:before {\n  content: \"\\F101\";\n}\n\n.mdi-camera-enhance-outline:before {\n  content: \"\\FB46\";\n}\n\n.mdi-camera-front:before {\n  content: \"\\F102\";\n}\n\n.mdi-camera-front-variant:before {\n  content: \"\\F103\";\n}\n\n.mdi-camera-gopro:before {\n  content: \"\\F7A0\";\n}\n\n.mdi-camera-image:before {\n  content: \"\\F8CB\";\n}\n\n.mdi-camera-iris:before {\n  content: \"\\F104\";\n}\n\n.mdi-camera-metering-center:before {\n  content: \"\\F7A1\";\n}\n\n.mdi-camera-metering-matrix:before {\n  content: \"\\F7A2\";\n}\n\n.mdi-camera-metering-partial:before {\n  content: \"\\F7A3\";\n}\n\n.mdi-camera-metering-spot:before {\n  content: \"\\F7A4\";\n}\n\n.mdi-camera-off:before {\n  content: \"\\F5DF\";\n}\n\n.mdi-camera-party-mode:before {\n  content: \"\\F105\";\n}\n\n.mdi-camera-rear:before {\n  content: \"\\F106\";\n}\n\n.mdi-camera-rear-variant:before {\n  content: \"\\F107\";\n}\n\n.mdi-camera-switch:before {\n  content: \"\\F108\";\n}\n\n.mdi-camera-timer:before {\n  content: \"\\F109\";\n}\n\n.mdi-cancel:before {\n  content: \"\\F739\";\n}\n\n.mdi-candle:before {\n  content: \"\\F5E2\";\n}\n\n.mdi-candycane:before {\n  content: \"\\F10A\";\n}\n\n.mdi-cannabis:before {\n  content: \"\\F7A5\";\n}\n\n.mdi-caps-lock:before {\n  content: \"\\FA9A\";\n}\n\n.mdi-car:before {\n  content: \"\\F10B\";\n}\n\n.mdi-car-battery:before {\n  content: \"\\F10C\";\n}\n\n.mdi-car-connected:before {\n  content: \"\\F10D\";\n}\n\n.mdi-car-convertible:before {\n  content: \"\\F7A6\";\n}\n\n.mdi-car-door:before {\n  content: \"\\FB47\";\n}\n\n.mdi-car-electric:before {\n  content: \"\\FB48\";\n}\n\n.mdi-car-estate:before {\n  content: \"\\F7A7\";\n}\n\n.mdi-car-hatchback:before {\n  content: \"\\F7A8\";\n}\n\n.mdi-car-key:before {\n  content: \"\\FB49\";\n}\n\n.mdi-car-limousine:before {\n  content: \"\\F8CC\";\n}\n\n.mdi-car-multiple:before {\n  content: \"\\FB4A\";\n}\n\n.mdi-car-pickup:before {\n  content: \"\\F7A9\";\n}\n\n.mdi-car-side:before {\n  content: \"\\F7AA\";\n}\n\n.mdi-car-sports:before {\n  content: \"\\F7AB\";\n}\n\n.mdi-car-wash:before {\n  content: \"\\F10E\";\n}\n\n.mdi-caravan:before {\n  content: \"\\F7AC\";\n}\n\n.mdi-card:before {\n  content: \"\\FB4B\";\n}\n\n.mdi-card-bulleted:before {\n  content: \"\\FB4C\";\n}\n\n.mdi-card-bulleted-off:before {\n  content: \"\\FB4D\";\n}\n\n.mdi-card-bulleted-off-outline:before {\n  content: \"\\FB4E\";\n}\n\n.mdi-card-bulleted-outline:before {\n  content: \"\\FB4F\";\n}\n\n.mdi-card-bulleted-settings:before {\n  content: \"\\FB50\";\n}\n\n.mdi-card-bulleted-settings-outline:before {\n  content: \"\\FB51\";\n}\n\n.mdi-card-outline:before {\n  content: \"\\FB52\";\n}\n\n.mdi-card-text:before {\n  content: \"\\FB53\";\n}\n\n.mdi-card-text-outline:before {\n  content: \"\\FB54\";\n}\n\n.mdi-cards:before {\n  content: \"\\F638\";\n}\n\n.mdi-cards-club:before {\n  content: \"\\F8CD\";\n}\n\n.mdi-cards-diamond:before {\n  content: \"\\F8CE\";\n}\n\n.mdi-cards-heart:before {\n  content: \"\\F8CF\";\n}\n\n.mdi-cards-outline:before {\n  content: \"\\F639\";\n}\n\n.mdi-cards-playing-outline:before {\n  content: \"\\F63A\";\n}\n\n.mdi-cards-spade:before {\n  content: \"\\F8D0\";\n}\n\n.mdi-cards-variant:before {\n  content: \"\\F6C6\";\n}\n\n.mdi-carrot:before {\n  content: \"\\F10F\";\n}\n\n.mdi-cart:before {\n  content: \"\\F110\";\n}\n\n.mdi-cart-off:before {\n  content: \"\\F66B\";\n}\n\n.mdi-cart-outline:before {\n  content: \"\\F111\";\n}\n\n.mdi-cart-plus:before {\n  content: \"\\F112\";\n}\n\n.mdi-case-sensitive-alt:before {\n  content: \"\\F113\";\n}\n\n.mdi-cash:before {\n  content: \"\\F114\";\n}\n\n.mdi-cash-100:before {\n  content: \"\\F115\";\n}\n\n.mdi-cash-multiple:before {\n  content: \"\\F116\";\n}\n\n.mdi-cash-refund:before {\n  content: \"\\FA9B\";\n}\n\n.mdi-cash-usd:before {\n  content: \"\\F117\";\n}\n\n.mdi-cassette:before {\n  content: \"\\F9D3\";\n}\n\n.mdi-cast:before {\n  content: \"\\F118\";\n}\n\n.mdi-cast-connected:before {\n  content: \"\\F119\";\n}\n\n.mdi-cast-off:before {\n  content: \"\\F789\";\n}\n\n.mdi-castle:before {\n  content: \"\\F11A\";\n}\n\n.mdi-cat:before {\n  content: \"\\F11B\";\n}\n\n.mdi-cctv:before {\n  content: \"\\F7AD\";\n}\n\n.mdi-ceiling-light:before {\n  content: \"\\F768\";\n}\n\n.mdi-cellphone:before {\n  content: \"\\F11C\";\n}\n\n.mdi-cellphone-android:before {\n  content: \"\\F11D\";\n}\n\n.mdi-cellphone-arrow-down:before {\n  content: \"\\F9D4\";\n}\n\n.mdi-cellphone-basic:before {\n  content: \"\\F11E\";\n}\n\n.mdi-cellphone-dock:before {\n  content: \"\\F11F\";\n}\n\n.mdi-cellphone-erase:before {\n  content: \"\\F94C\";\n}\n\n.mdi-cellphone-iphone:before {\n  content: \"\\F120\";\n}\n\n.mdi-cellphone-key:before {\n  content: \"\\F94D\";\n}\n\n.mdi-cellphone-link:before {\n  content: \"\\F121\";\n}\n\n.mdi-cellphone-link-off:before {\n  content: \"\\F122\";\n}\n\n.mdi-cellphone-lock:before {\n  content: \"\\F94E\";\n}\n\n.mdi-cellphone-message:before {\n  content: \"\\F8D2\";\n}\n\n.mdi-cellphone-off:before {\n  content: \"\\F94F\";\n}\n\n.mdi-cellphone-screenshot:before {\n  content: \"\\FA34\";\n}\n\n.mdi-cellphone-settings:before {\n  content: \"\\F123\";\n}\n\n.mdi-cellphone-settings-variant:before {\n  content: \"\\F950\";\n}\n\n.mdi-cellphone-sound:before {\n  content: \"\\F951\";\n}\n\n.mdi-cellphone-text:before {\n  content: \"\\F8D1\";\n}\n\n.mdi-cellphone-wireless:before {\n  content: \"\\F814\";\n}\n\n.mdi-certificate:before {\n  content: \"\\F124\";\n}\n\n.mdi-chair-school:before {\n  content: \"\\F125\";\n}\n\n.mdi-chart-arc:before {\n  content: \"\\F126\";\n}\n\n.mdi-chart-areaspline:before {\n  content: \"\\F127\";\n}\n\n.mdi-chart-bar:before {\n  content: \"\\F128\";\n}\n\n.mdi-chart-bar-stacked:before {\n  content: \"\\F769\";\n}\n\n.mdi-chart-bubble:before {\n  content: \"\\F5E3\";\n}\n\n.mdi-chart-donut:before {\n  content: \"\\F7AE\";\n}\n\n.mdi-chart-donut-variant:before {\n  content: \"\\F7AF\";\n}\n\n.mdi-chart-gantt:before {\n  content: \"\\F66C\";\n}\n\n.mdi-chart-histogram:before {\n  content: \"\\F129\";\n}\n\n.mdi-chart-line:before {\n  content: \"\\F12A\";\n}\n\n.mdi-chart-line-stacked:before {\n  content: \"\\F76A\";\n}\n\n.mdi-chart-line-variant:before {\n  content: \"\\F7B0\";\n}\n\n.mdi-chart-multiline:before {\n  content: \"\\F8D3\";\n}\n\n.mdi-chart-pie:before {\n  content: \"\\F12B\";\n}\n\n.mdi-chart-scatterplot-hexbin:before {\n  content: \"\\F66D\";\n}\n\n.mdi-chart-timeline:before {\n  content: \"\\F66E\";\n}\n\n.mdi-chat:before {\n  content: \"\\FB55\";\n}\n\n.mdi-chat-alert:before {\n  content: \"\\FB56\";\n}\n\n.mdi-chat-processing:before {\n  content: \"\\FB57\";\n}\n\n.mdi-check:before {\n  content: \"\\F12C\";\n}\n\n.mdi-check-all:before {\n  content: \"\\F12D\";\n}\n\n.mdi-check-circle:before {\n  content: \"\\F5E0\";\n}\n\n.mdi-check-circle-outline:before {\n  content: \"\\F5E1\";\n}\n\n.mdi-check-decagram:before {\n  content: \"\\F790\";\n}\n\n.mdi-check-outline:before {\n  content: \"\\F854\";\n}\n\n.mdi-checkbook:before {\n  content: \"\\FA9C\";\n}\n\n.mdi-checkbox-blank:before {\n  content: \"\\F12E\";\n}\n\n.mdi-checkbox-blank-circle:before {\n  content: \"\\F12F\";\n}\n\n.mdi-checkbox-blank-circle-outline:before {\n  content: \"\\F130\";\n}\n\n.mdi-checkbox-blank-outline:before {\n  content: \"\\F131\";\n}\n\n.mdi-checkbox-intermediate:before {\n  content: \"\\F855\";\n}\n\n.mdi-checkbox-marked:before {\n  content: \"\\F132\";\n}\n\n.mdi-checkbox-marked-circle:before {\n  content: \"\\F133\";\n}\n\n.mdi-checkbox-marked-circle-outline:before {\n  content: \"\\F134\";\n}\n\n.mdi-checkbox-marked-outline:before {\n  content: \"\\F135\";\n}\n\n.mdi-checkbox-multiple-blank:before {\n  content: \"\\F136\";\n}\n\n.mdi-checkbox-multiple-blank-circle:before {\n  content: \"\\F63B\";\n}\n\n.mdi-checkbox-multiple-blank-circle-outline:before {\n  content: \"\\F63C\";\n}\n\n.mdi-checkbox-multiple-blank-outline:before {\n  content: \"\\F137\";\n}\n\n.mdi-checkbox-multiple-marked:before {\n  content: \"\\F138\";\n}\n\n.mdi-checkbox-multiple-marked-circle:before {\n  content: \"\\F63D\";\n}\n\n.mdi-checkbox-multiple-marked-circle-outline:before {\n  content: \"\\F63E\";\n}\n\n.mdi-checkbox-multiple-marked-outline:before {\n  content: \"\\F139\";\n}\n\n.mdi-checkerboard:before {\n  content: \"\\F13A\";\n}\n\n.mdi-chef-hat:before {\n  content: \"\\FB58\";\n}\n\n.mdi-chemical-weapon:before {\n  content: \"\\F13B\";\n}\n\n.mdi-chess-bishop:before {\n  content: \"\\F85B\";\n}\n\n.mdi-chess-king:before {\n  content: \"\\F856\";\n}\n\n.mdi-chess-knight:before {\n  content: \"\\F857\";\n}\n\n.mdi-chess-pawn:before {\n  content: \"\\F858\";\n}\n\n.mdi-chess-queen:before {\n  content: \"\\F859\";\n}\n\n.mdi-chess-rook:before {\n  content: \"\\F85A\";\n}\n\n.mdi-chevron-double-down:before {\n  content: \"\\F13C\";\n}\n\n.mdi-chevron-double-left:before {\n  content: \"\\F13D\";\n}\n\n.mdi-chevron-double-right:before {\n  content: \"\\F13E\";\n}\n\n.mdi-chevron-double-up:before {\n  content: \"\\F13F\";\n}\n\n.mdi-chevron-down:before {\n  content: \"\\F140\";\n}\n\n.mdi-chevron-down-box:before {\n  content: \"\\F9D5\";\n}\n\n.mdi-chevron-down-box-outline:before {\n  content: \"\\F9D6\";\n}\n\n.mdi-chevron-down-circle:before {\n  content: \"\\FB0B\";\n}\n\n.mdi-chevron-down-circle-outline:before {\n  content: \"\\FB0C\";\n}\n\n.mdi-chevron-left:before {\n  content: \"\\F141\";\n}\n\n.mdi-chevron-left-box:before {\n  content: \"\\F9D7\";\n}\n\n.mdi-chevron-left-box-outline:before {\n  content: \"\\F9D8\";\n}\n\n.mdi-chevron-left-circle:before {\n  content: \"\\FB0D\";\n}\n\n.mdi-chevron-left-circle-outline:before {\n  content: \"\\FB0E\";\n}\n\n.mdi-chevron-right:before {\n  content: \"\\F142\";\n}\n\n.mdi-chevron-right-box:before {\n  content: \"\\F9D9\";\n}\n\n.mdi-chevron-right-box-outline:before {\n  content: \"\\F9DA\";\n}\n\n.mdi-chevron-right-circle:before {\n  content: \"\\FB0F\";\n}\n\n.mdi-chevron-right-circle-outline:before {\n  content: \"\\FB10\";\n}\n\n.mdi-chevron-up:before {\n  content: \"\\F143\";\n}\n\n.mdi-chevron-up-box:before {\n  content: \"\\F9DB\";\n}\n\n.mdi-chevron-up-box-outline:before {\n  content: \"\\F9DC\";\n}\n\n.mdi-chevron-up-circle:before {\n  content: \"\\FB11\";\n}\n\n.mdi-chevron-up-circle-outline:before {\n  content: \"\\FB12\";\n}\n\n.mdi-chili-hot:before {\n  content: \"\\F7B1\";\n}\n\n.mdi-chili-medium:before {\n  content: \"\\F7B2\";\n}\n\n.mdi-chili-mild:before {\n  content: \"\\F7B3\";\n}\n\n.mdi-chip:before {\n  content: \"\\F61A\";\n}\n\n.mdi-christianity:before {\n  content: \"\\F952\";\n}\n\n.mdi-church:before {\n  content: \"\\F144\";\n}\n\n.mdi-circle:before {\n  content: \"\\F764\";\n}\n\n.mdi-circle-edit-outline:before {\n  content: \"\\F8D4\";\n}\n\n.mdi-circle-medium:before {\n  content: \"\\F9DD\";\n}\n\n.mdi-circle-outline:before {\n  content: \"\\F765\";\n}\n\n.mdi-circle-slice-1:before {\n  content: \"\\FA9D\";\n}\n\n.mdi-circle-slice-2:before {\n  content: \"\\FA9E\";\n}\n\n.mdi-circle-slice-3:before {\n  content: \"\\FA9F\";\n}\n\n.mdi-circle-slice-4:before {\n  content: \"\\FAA0\";\n}\n\n.mdi-circle-slice-5:before {\n  content: \"\\FAA1\";\n}\n\n.mdi-circle-slice-6:before {\n  content: \"\\FAA2\";\n}\n\n.mdi-circle-slice-7:before {\n  content: \"\\FAA3\";\n}\n\n.mdi-circle-slice-8:before {\n  content: \"\\FAA4\";\n}\n\n.mdi-circle-small:before {\n  content: \"\\F9DE\";\n}\n\n.mdi-cisco-webex:before {\n  content: \"\\F145\";\n}\n\n.mdi-city:before {\n  content: \"\\F146\";\n}\n\n.mdi-city-variant:before {\n  content: \"\\FA35\";\n}\n\n.mdi-city-variant-outline:before {\n  content: \"\\FA36\";\n}\n\n.mdi-clipboard:before {\n  content: \"\\F147\";\n}\n\n.mdi-clipboard-account:before {\n  content: \"\\F148\";\n}\n\n.mdi-clipboard-alert:before {\n  content: \"\\F149\";\n}\n\n.mdi-clipboard-arrow-down:before {\n  content: \"\\F14A\";\n}\n\n.mdi-clipboard-arrow-left:before {\n  content: \"\\F14B\";\n}\n\n.mdi-clipboard-check:before {\n  content: \"\\F14C\";\n}\n\n.mdi-clipboard-check-outline:before {\n  content: \"\\F8A7\";\n}\n\n.mdi-clipboard-flow:before {\n  content: \"\\F6C7\";\n}\n\n.mdi-clipboard-outline:before {\n  content: \"\\F14D\";\n}\n\n.mdi-clipboard-plus:before {\n  content: \"\\F750\";\n}\n\n.mdi-clipboard-pulse:before {\n  content: \"\\F85C\";\n}\n\n.mdi-clipboard-pulse-outline:before {\n  content: \"\\F85D\";\n}\n\n.mdi-clipboard-text:before {\n  content: \"\\F14E\";\n}\n\n.mdi-clipboard-text-outline:before {\n  content: \"\\FA37\";\n}\n\n.mdi-clippy:before {\n  content: \"\\F14F\";\n}\n\n.mdi-clock:before {\n  content: \"\\F953\";\n}\n\n.mdi-clock-alert:before {\n  content: \"\\F954\";\n}\n\n.mdi-clock-alert-outline:before {\n  content: \"\\F5CE\";\n}\n\n.mdi-clock-end:before {\n  content: \"\\F151\";\n}\n\n.mdi-clock-fast:before {\n  content: \"\\F152\";\n}\n\n.mdi-clock-in:before {\n  content: \"\\F153\";\n}\n\n.mdi-clock-out:before {\n  content: \"\\F154\";\n}\n\n.mdi-clock-outline:before {\n  content: \"\\F150\";\n}\n\n.mdi-clock-start:before {\n  content: \"\\F155\";\n}\n\n.mdi-close:before {\n  content: \"\\F156\";\n}\n\n.mdi-close-box:before {\n  content: \"\\F157\";\n}\n\n.mdi-close-box-outline:before {\n  content: \"\\F158\";\n}\n\n.mdi-close-circle:before {\n  content: \"\\F159\";\n}\n\n.mdi-close-circle-outline:before {\n  content: \"\\F15A\";\n}\n\n.mdi-close-network:before {\n  content: \"\\F15B\";\n}\n\n.mdi-close-octagon:before {\n  content: \"\\F15C\";\n}\n\n.mdi-close-octagon-outline:before {\n  content: \"\\F15D\";\n}\n\n.mdi-close-outline:before {\n  content: \"\\F6C8\";\n}\n\n.mdi-closed-caption:before {\n  content: \"\\F15E\";\n}\n\n.mdi-cloud:before {\n  content: \"\\F15F\";\n}\n\n.mdi-cloud-alert:before {\n  content: \"\\F9DF\";\n}\n\n.mdi-cloud-braces:before {\n  content: \"\\F7B4\";\n}\n\n.mdi-cloud-check:before {\n  content: \"\\F160\";\n}\n\n.mdi-cloud-circle:before {\n  content: \"\\F161\";\n}\n\n.mdi-cloud-download:before {\n  content: \"\\F162\";\n}\n\n.mdi-cloud-download-outline:before {\n  content: \"\\FB59\";\n}\n\n.mdi-cloud-off-outline:before {\n  content: \"\\F164\";\n}\n\n.mdi-cloud-outline:before {\n  content: \"\\F163\";\n}\n\n.mdi-cloud-print:before {\n  content: \"\\F165\";\n}\n\n.mdi-cloud-print-outline:before {\n  content: \"\\F166\";\n}\n\n.mdi-cloud-question:before {\n  content: \"\\FA38\";\n}\n\n.mdi-cloud-search:before {\n  content: \"\\F955\";\n}\n\n.mdi-cloud-search-outline:before {\n  content: \"\\F956\";\n}\n\n.mdi-cloud-sync:before {\n  content: \"\\F63F\";\n}\n\n.mdi-cloud-tags:before {\n  content: \"\\F7B5\";\n}\n\n.mdi-cloud-upload:before {\n  content: \"\\F167\";\n}\n\n.mdi-cloud-upload-outline:before {\n  content: \"\\FB5A\";\n}\n\n.mdi-clover:before {\n  content: \"\\F815\";\n}\n\n.mdi-code-array:before {\n  content: \"\\F168\";\n}\n\n.mdi-code-braces:before {\n  content: \"\\F169\";\n}\n\n.mdi-code-brackets:before {\n  content: \"\\F16A\";\n}\n\n.mdi-code-equal:before {\n  content: \"\\F16B\";\n}\n\n.mdi-code-greater-than:before {\n  content: \"\\F16C\";\n}\n\n.mdi-code-greater-than-or-equal:before {\n  content: \"\\F16D\";\n}\n\n.mdi-code-less-than:before {\n  content: \"\\F16E\";\n}\n\n.mdi-code-less-than-or-equal:before {\n  content: \"\\F16F\";\n}\n\n.mdi-code-not-equal:before {\n  content: \"\\F170\";\n}\n\n.mdi-code-not-equal-variant:before {\n  content: \"\\F171\";\n}\n\n.mdi-code-parentheses:before {\n  content: \"\\F172\";\n}\n\n.mdi-code-string:before {\n  content: \"\\F173\";\n}\n\n.mdi-code-tags:before {\n  content: \"\\F174\";\n}\n\n.mdi-code-tags-check:before {\n  content: \"\\F693\";\n}\n\n.mdi-codepen:before {\n  content: \"\\F175\";\n}\n\n.mdi-coffee:before {\n  content: \"\\F176\";\n}\n\n.mdi-coffee-outline:before {\n  content: \"\\F6C9\";\n}\n\n.mdi-coffee-to-go:before {\n  content: \"\\F177\";\n}\n\n.mdi-coffin:before {\n  content: \"\\FB5B\";\n}\n\n.mdi-cogs:before {\n  content: \"\\F8D5\";\n}\n\n.mdi-coin:before {\n  content: \"\\F178\";\n}\n\n.mdi-coins:before {\n  content: \"\\F694\";\n}\n\n.mdi-collage:before {\n  content: \"\\F640\";\n}\n\n.mdi-collapse-all:before {\n  content: \"\\FAA5\";\n}\n\n.mdi-collapse-all-outline:before {\n  content: \"\\FAA6\";\n}\n\n.mdi-color-helper:before {\n  content: \"\\F179\";\n}\n\n.mdi-comment:before {\n  content: \"\\F17A\";\n}\n\n.mdi-comment-account:before {\n  content: \"\\F17B\";\n}\n\n.mdi-comment-account-outline:before {\n  content: \"\\F17C\";\n}\n\n.mdi-comment-alert:before {\n  content: \"\\F17D\";\n}\n\n.mdi-comment-alert-outline:before {\n  content: \"\\F17E\";\n}\n\n.mdi-comment-arrow-left:before {\n  content: \"\\F9E0\";\n}\n\n.mdi-comment-arrow-left-outline:before {\n  content: \"\\F9E1\";\n}\n\n.mdi-comment-arrow-right:before {\n  content: \"\\F9E2\";\n}\n\n.mdi-comment-arrow-right-outline:before {\n  content: \"\\F9E3\";\n}\n\n.mdi-comment-check:before {\n  content: \"\\F17F\";\n}\n\n.mdi-comment-check-outline:before {\n  content: \"\\F180\";\n}\n\n.mdi-comment-eye:before {\n  content: \"\\FA39\";\n}\n\n.mdi-comment-eye-outline:before {\n  content: \"\\FA3A\";\n}\n\n.mdi-comment-multiple:before {\n  content: \"\\F85E\";\n}\n\n.mdi-comment-multiple-outline:before {\n  content: \"\\F181\";\n}\n\n.mdi-comment-outline:before {\n  content: \"\\F182\";\n}\n\n.mdi-comment-plus:before {\n  content: \"\\F9E4\";\n}\n\n.mdi-comment-plus-outline:before {\n  content: \"\\F183\";\n}\n\n.mdi-comment-processing:before {\n  content: \"\\F184\";\n}\n\n.mdi-comment-processing-outline:before {\n  content: \"\\F185\";\n}\n\n.mdi-comment-question:before {\n  content: \"\\F816\";\n}\n\n.mdi-comment-question-outline:before {\n  content: \"\\F186\";\n}\n\n.mdi-comment-remove:before {\n  content: \"\\F5DE\";\n}\n\n.mdi-comment-remove-outline:before {\n  content: \"\\F187\";\n}\n\n.mdi-comment-search:before {\n  content: \"\\FA3B\";\n}\n\n.mdi-comment-search-outline:before {\n  content: \"\\FA3C\";\n}\n\n.mdi-comment-text:before {\n  content: \"\\F188\";\n}\n\n.mdi-comment-text-multiple:before {\n  content: \"\\F85F\";\n}\n\n.mdi-comment-text-multiple-outline:before {\n  content: \"\\F860\";\n}\n\n.mdi-comment-text-outline:before {\n  content: \"\\F189\";\n}\n\n.mdi-compare:before {\n  content: \"\\F18A\";\n}\n\n.mdi-compass:before {\n  content: \"\\F18B\";\n}\n\n.mdi-compass-off:before {\n  content: \"\\FB5C\";\n}\n\n.mdi-compass-off-outline:before {\n  content: \"\\FB5D\";\n}\n\n.mdi-compass-outline:before {\n  content: \"\\F18C\";\n}\n\n.mdi-console:before {\n  content: \"\\F18D\";\n}\n\n.mdi-console-line:before {\n  content: \"\\F7B6\";\n}\n\n.mdi-console-network:before {\n  content: \"\\F8A8\";\n}\n\n.mdi-contact-mail:before {\n  content: \"\\F18E\";\n}\n\n.mdi-contacts:before {\n  content: \"\\F6CA\";\n}\n\n.mdi-contain:before {\n  content: \"\\FA3D\";\n}\n\n.mdi-contain-end:before {\n  content: \"\\FA3E\";\n}\n\n.mdi-contain-start:before {\n  content: \"\\FA3F\";\n}\n\n.mdi-content-copy:before {\n  content: \"\\F18F\";\n}\n\n.mdi-content-cut:before {\n  content: \"\\F190\";\n}\n\n.mdi-content-duplicate:before {\n  content: \"\\F191\";\n}\n\n.mdi-content-paste:before {\n  content: \"\\F192\";\n}\n\n.mdi-content-save:before {\n  content: \"\\F193\";\n}\n\n.mdi-content-save-all:before {\n  content: \"\\F194\";\n}\n\n.mdi-content-save-outline:before {\n  content: \"\\F817\";\n}\n\n.mdi-content-save-settings:before {\n  content: \"\\F61B\";\n}\n\n.mdi-content-save-settings-outline:before {\n  content: \"\\FB13\";\n}\n\n.mdi-contrast:before {\n  content: \"\\F195\";\n}\n\n.mdi-contrast-box:before {\n  content: \"\\F196\";\n}\n\n.mdi-contrast-circle:before {\n  content: \"\\F197\";\n}\n\n.mdi-controller-classic:before {\n  content: \"\\FB5E\";\n}\n\n.mdi-controller-classic-outline:before {\n  content: \"\\FB5F\";\n}\n\n.mdi-cookie:before {\n  content: \"\\F198\";\n}\n\n.mdi-copyright:before {\n  content: \"\\F5E6\";\n}\n\n.mdi-cordova:before {\n  content: \"\\F957\";\n}\n\n.mdi-corn:before {\n  content: \"\\F7B7\";\n}\n\n.mdi-counter:before {\n  content: \"\\F199\";\n}\n\n.mdi-cow:before {\n  content: \"\\F19A\";\n}\n\n.mdi-crane:before {\n  content: \"\\F861\";\n}\n\n.mdi-creation:before {\n  content: \"\\F1C9\";\n}\n\n.mdi-credit-card:before {\n  content: \"\\F19B\";\n}\n\n.mdi-credit-card-multiple:before {\n  content: \"\\F19C\";\n}\n\n.mdi-credit-card-off:before {\n  content: \"\\F5E4\";\n}\n\n.mdi-credit-card-plus:before {\n  content: \"\\F675\";\n}\n\n.mdi-credit-card-refund:before {\n  content: \"\\FAA7\";\n}\n\n.mdi-credit-card-scan:before {\n  content: \"\\F19D\";\n}\n\n.mdi-credit-card-settings:before {\n  content: \"\\F8D6\";\n}\n\n.mdi-crop:before {\n  content: \"\\F19E\";\n}\n\n.mdi-crop-free:before {\n  content: \"\\F19F\";\n}\n\n.mdi-crop-landscape:before {\n  content: \"\\F1A0\";\n}\n\n.mdi-crop-portrait:before {\n  content: \"\\F1A1\";\n}\n\n.mdi-crop-rotate:before {\n  content: \"\\F695\";\n}\n\n.mdi-crop-square:before {\n  content: \"\\F1A2\";\n}\n\n.mdi-crosshairs:before {\n  content: \"\\F1A3\";\n}\n\n.mdi-crosshairs-gps:before {\n  content: \"\\F1A4\";\n}\n\n.mdi-crown:before {\n  content: \"\\F1A5\";\n}\n\n.mdi-cryengine:before {\n  content: \"\\F958\";\n}\n\n.mdi-crystal-ball:before {\n  content: \"\\FB14\";\n}\n\n.mdi-cube:before {\n  content: \"\\F1A6\";\n}\n\n.mdi-cube-outline:before {\n  content: \"\\F1A7\";\n}\n\n.mdi-cube-scan:before {\n  content: \"\\FB60\";\n}\n\n.mdi-cube-send:before {\n  content: \"\\F1A8\";\n}\n\n.mdi-cube-unfolded:before {\n  content: \"\\F1A9\";\n}\n\n.mdi-cup:before {\n  content: \"\\F1AA\";\n}\n\n.mdi-cup-off:before {\n  content: \"\\F5E5\";\n}\n\n.mdi-cup-water:before {\n  content: \"\\F1AB\";\n}\n\n.mdi-cupcake:before {\n  content: \"\\F959\";\n}\n\n.mdi-curling:before {\n  content: \"\\F862\";\n}\n\n.mdi-currency-bdt:before {\n  content: \"\\F863\";\n}\n\n.mdi-currency-brl:before {\n  content: \"\\FB61\";\n}\n\n.mdi-currency-btc:before {\n  content: \"\\F1AC\";\n}\n\n.mdi-currency-chf:before {\n  content: \"\\F7B8\";\n}\n\n.mdi-currency-cny:before {\n  content: \"\\F7B9\";\n}\n\n.mdi-currency-eth:before {\n  content: \"\\F7BA\";\n}\n\n.mdi-currency-eur:before {\n  content: \"\\F1AD\";\n}\n\n.mdi-currency-gbp:before {\n  content: \"\\F1AE\";\n}\n\n.mdi-currency-inr:before {\n  content: \"\\F1AF\";\n}\n\n.mdi-currency-jpy:before {\n  content: \"\\F7BB\";\n}\n\n.mdi-currency-krw:before {\n  content: \"\\F7BC\";\n}\n\n.mdi-currency-kzt:before {\n  content: \"\\F864\";\n}\n\n.mdi-currency-ngn:before {\n  content: \"\\F1B0\";\n}\n\n.mdi-currency-php:before {\n  content: \"\\F9E5\";\n}\n\n.mdi-currency-rub:before {\n  content: \"\\F1B1\";\n}\n\n.mdi-currency-sign:before {\n  content: \"\\F7BD\";\n}\n\n.mdi-currency-try:before {\n  content: \"\\F1B2\";\n}\n\n.mdi-currency-twd:before {\n  content: \"\\F7BE\";\n}\n\n.mdi-currency-usd:before {\n  content: \"\\F1B3\";\n}\n\n.mdi-currency-usd-off:before {\n  content: \"\\F679\";\n}\n\n.mdi-current-ac:before {\n  content: \"\\F95A\";\n}\n\n.mdi-current-dc:before {\n  content: \"\\F95B\";\n}\n\n.mdi-cursor-default:before {\n  content: \"\\F1B4\";\n}\n\n.mdi-cursor-default-outline:before {\n  content: \"\\F1B5\";\n}\n\n.mdi-cursor-move:before {\n  content: \"\\F1B6\";\n}\n\n.mdi-cursor-pointer:before {\n  content: \"\\F1B7\";\n}\n\n.mdi-cursor-text:before {\n  content: \"\\F5E7\";\n}\n\n.mdi-database:before {\n  content: \"\\F1B8\";\n}\n\n.mdi-database-check:before {\n  content: \"\\FAA8\";\n}\n\n.mdi-database-edit:before {\n  content: \"\\FB62\";\n}\n\n.mdi-database-export:before {\n  content: \"\\F95D\";\n}\n\n.mdi-database-import:before {\n  content: \"\\F95C\";\n}\n\n.mdi-database-lock:before {\n  content: \"\\FAA9\";\n}\n\n.mdi-database-minus:before {\n  content: \"\\F1B9\";\n}\n\n.mdi-database-plus:before {\n  content: \"\\F1BA\";\n}\n\n.mdi-database-search:before {\n  content: \"\\F865\";\n}\n\n.mdi-death-star:before {\n  content: \"\\F8D7\";\n}\n\n.mdi-death-star-variant:before {\n  content: \"\\F8D8\";\n}\n\n.mdi-deathly-hallows:before {\n  content: \"\\FB63\";\n}\n\n.mdi-debian:before {\n  content: \"\\F8D9\";\n}\n\n.mdi-debug-step-into:before {\n  content: \"\\F1BB\";\n}\n\n.mdi-debug-step-out:before {\n  content: \"\\F1BC\";\n}\n\n.mdi-debug-step-over:before {\n  content: \"\\F1BD\";\n}\n\n.mdi-decagram:before {\n  content: \"\\F76B\";\n}\n\n.mdi-decagram-outline:before {\n  content: \"\\F76C\";\n}\n\n.mdi-decimal-decrease:before {\n  content: \"\\F1BE\";\n}\n\n.mdi-decimal-increase:before {\n  content: \"\\F1BF\";\n}\n\n.mdi-delete:before {\n  content: \"\\F1C0\";\n}\n\n.mdi-delete-circle:before {\n  content: \"\\F682\";\n}\n\n.mdi-delete-circle-outline:before {\n  content: \"\\FB64\";\n}\n\n.mdi-delete-empty:before {\n  content: \"\\F6CB\";\n}\n\n.mdi-delete-forever:before {\n  content: \"\\F5E8\";\n}\n\n.mdi-delete-forever-outline:before {\n  content: \"\\FB65\";\n}\n\n.mdi-delete-outline:before {\n  content: \"\\F9E6\";\n}\n\n.mdi-delete-restore:before {\n  content: \"\\F818\";\n}\n\n.mdi-delete-sweep:before {\n  content: \"\\F5E9\";\n}\n\n.mdi-delete-variant:before {\n  content: \"\\F1C1\";\n}\n\n.mdi-delta:before {\n  content: \"\\F1C2\";\n}\n\n.mdi-desk-lamp:before {\n  content: \"\\F95E\";\n}\n\n.mdi-deskphone:before {\n  content: \"\\F1C3\";\n}\n\n.mdi-desktop-classic:before {\n  content: \"\\F7BF\";\n}\n\n.mdi-desktop-mac:before {\n  content: \"\\F1C4\";\n}\n\n.mdi-desktop-mac-dashboard:before {\n  content: \"\\F9E7\";\n}\n\n.mdi-desktop-tower:before {\n  content: \"\\F1C5\";\n}\n\n.mdi-desktop-tower-monitor:before {\n  content: \"\\FAAA\";\n}\n\n.mdi-details:before {\n  content: \"\\F1C6\";\n}\n\n.mdi-developer-board:before {\n  content: \"\\F696\";\n}\n\n.mdi-deviantart:before {\n  content: \"\\F1C7\";\n}\n\n.mdi-dialpad:before {\n  content: \"\\F61C\";\n}\n\n.mdi-diamond:before {\n  content: \"\\FB66\";\n}\n\n.mdi-diamond-outline:before {\n  content: \"\\FB67\";\n}\n\n.mdi-diamond-stone:before {\n  content: \"\\F1C8\";\n}\n\n.mdi-dice-1:before {\n  content: \"\\F1CA\";\n}\n\n.mdi-dice-2:before {\n  content: \"\\F1CB\";\n}\n\n.mdi-dice-3:before {\n  content: \"\\F1CC\";\n}\n\n.mdi-dice-4:before {\n  content: \"\\F1CD\";\n}\n\n.mdi-dice-5:before {\n  content: \"\\F1CE\";\n}\n\n.mdi-dice-6:before {\n  content: \"\\F1CF\";\n}\n\n.mdi-dice-d10:before {\n  content: \"\\F76E\";\n}\n\n.mdi-dice-d12:before {\n  content: \"\\F866\";\n}\n\n.mdi-dice-d20:before {\n  content: \"\\F5EA\";\n}\n\n.mdi-dice-d4:before {\n  content: \"\\F5EB\";\n}\n\n.mdi-dice-d6:before {\n  content: \"\\F5EC\";\n}\n\n.mdi-dice-d8:before {\n  content: \"\\F5ED\";\n}\n\n.mdi-dice-multiple:before {\n  content: \"\\F76D\";\n}\n\n.mdi-dictionary:before {\n  content: \"\\F61D\";\n}\n\n.mdi-dip-switch:before {\n  content: \"\\F7C0\";\n}\n\n.mdi-directions:before {\n  content: \"\\F1D0\";\n}\n\n.mdi-directions-fork:before {\n  content: \"\\F641\";\n}\n\n.mdi-disc:before {\n  content: \"\\F5EE\";\n}\n\n.mdi-disc-alert:before {\n  content: \"\\F1D1\";\n}\n\n.mdi-disc-player:before {\n  content: \"\\F95F\";\n}\n\n.mdi-discord:before {\n  content: \"\\F66F\";\n}\n\n.mdi-dishwasher:before {\n  content: \"\\FAAB\";\n}\n\n.mdi-disqus:before {\n  content: \"\\F1D2\";\n}\n\n.mdi-disqus-outline:before {\n  content: \"\\F1D3\";\n}\n\n.mdi-division:before {\n  content: \"\\F1D4\";\n}\n\n.mdi-division-box:before {\n  content: \"\\F1D5\";\n}\n\n.mdi-dlna:before {\n  content: \"\\FA40\";\n}\n\n.mdi-dna:before {\n  content: \"\\F683\";\n}\n\n.mdi-dns:before {\n  content: \"\\F1D6\";\n}\n\n.mdi-dns-outline:before {\n  content: \"\\FB68\";\n}\n\n.mdi-do-not-disturb:before {\n  content: \"\\F697\";\n}\n\n.mdi-do-not-disturb-off:before {\n  content: \"\\F698\";\n}\n\n.mdi-docker:before {\n  content: \"\\F867\";\n}\n\n.mdi-doctor:before {\n  content: \"\\FA41\";\n}\n\n.mdi-dog:before {\n  content: \"\\FA42\";\n}\n\n.mdi-dog-service:before {\n  content: \"\\FAAC\";\n}\n\n.mdi-dog-side:before {\n  content: \"\\FA43\";\n}\n\n.mdi-dolby:before {\n  content: \"\\F6B2\";\n}\n\n.mdi-domain:before {\n  content: \"\\F1D7\";\n}\n\n.mdi-donkey:before {\n  content: \"\\F7C1\";\n}\n\n.mdi-door:before {\n  content: \"\\F819\";\n}\n\n.mdi-door-closed:before {\n  content: \"\\F81A\";\n}\n\n.mdi-door-open:before {\n  content: \"\\F81B\";\n}\n\n.mdi-doorbell-video:before {\n  content: \"\\F868\";\n}\n\n.mdi-dot-net:before {\n  content: \"\\FAAD\";\n}\n\n.mdi-dots-horizontal:before {\n  content: \"\\F1D8\";\n}\n\n.mdi-dots-horizontal-circle:before {\n  content: \"\\F7C2\";\n}\n\n.mdi-dots-horizontal-circle-outline:before {\n  content: \"\\FB69\";\n}\n\n.mdi-dots-vertical:before {\n  content: \"\\F1D9\";\n}\n\n.mdi-dots-vertical-circle:before {\n  content: \"\\F7C3\";\n}\n\n.mdi-dots-vertical-circle-outline:before {\n  content: \"\\FB6A\";\n}\n\n.mdi-douban:before {\n  content: \"\\F699\";\n}\n\n.mdi-download:before {\n  content: \"\\F1DA\";\n}\n\n.mdi-download-multiple:before {\n  content: \"\\F9E8\";\n}\n\n.mdi-download-network:before {\n  content: \"\\F6F3\";\n}\n\n.mdi-download-outline:before {\n  content: \"\\FB6B\";\n}\n\n.mdi-drag:before {\n  content: \"\\F1DB\";\n}\n\n.mdi-drag-horizontal:before {\n  content: \"\\F1DC\";\n}\n\n.mdi-drag-variant:before {\n  content: \"\\FB6C\";\n}\n\n.mdi-drag-vertical:before {\n  content: \"\\F1DD\";\n}\n\n.mdi-drawing:before {\n  content: \"\\F1DE\";\n}\n\n.mdi-drawing-box:before {\n  content: \"\\F1DF\";\n}\n\n.mdi-dribbble:before {\n  content: \"\\F1E0\";\n}\n\n.mdi-dribbble-box:before {\n  content: \"\\F1E1\";\n}\n\n.mdi-drone:before {\n  content: \"\\F1E2\";\n}\n\n.mdi-dropbox:before {\n  content: \"\\F1E3\";\n}\n\n.mdi-drupal:before {\n  content: \"\\F1E4\";\n}\n\n.mdi-duck:before {\n  content: \"\\F1E5\";\n}\n\n.mdi-dumbbell:before {\n  content: \"\\F1E6\";\n}\n\n.mdi-ear-hearing:before {\n  content: \"\\F7C4\";\n}\n\n.mdi-ear-hearing-off:before {\n  content: \"\\FA44\";\n}\n\n.mdi-earth:before {\n  content: \"\\F1E7\";\n}\n\n.mdi-earth-box:before {\n  content: \"\\F6CC\";\n}\n\n.mdi-earth-box-off:before {\n  content: \"\\F6CD\";\n}\n\n.mdi-earth-off:before {\n  content: \"\\F1E8\";\n}\n\n.mdi-edge:before {\n  content: \"\\F1E9\";\n}\n\n.mdi-egg:before {\n  content: \"\\FAAE\";\n}\n\n.mdi-egg-easter:before {\n  content: \"\\FAAF\";\n}\n\n.mdi-eight-track:before {\n  content: \"\\F9E9\";\n}\n\n.mdi-eject:before {\n  content: \"\\F1EA\";\n}\n\n.mdi-eject-outline:before {\n  content: \"\\FB6D\";\n}\n\n.mdi-elephant:before {\n  content: \"\\F7C5\";\n}\n\n.mdi-elevation-decline:before {\n  content: \"\\F1EB\";\n}\n\n.mdi-elevation-rise:before {\n  content: \"\\F1EC\";\n}\n\n.mdi-elevator:before {\n  content: \"\\F1ED\";\n}\n\n.mdi-email:before {\n  content: \"\\F1EE\";\n}\n\n.mdi-email-alert:before {\n  content: \"\\F6CE\";\n}\n\n.mdi-email-check:before {\n  content: \"\\FAB0\";\n}\n\n.mdi-email-check-outline:before {\n  content: \"\\FAB1\";\n}\n\n.mdi-email-lock:before {\n  content: \"\\F1F1\";\n}\n\n.mdi-email-mark-as-unread:before {\n  content: \"\\FB6E\";\n}\n\n.mdi-email-open:before {\n  content: \"\\F1EF\";\n}\n\n.mdi-email-open-outline:before {\n  content: \"\\F5EF\";\n}\n\n.mdi-email-outline:before {\n  content: \"\\F1F0\";\n}\n\n.mdi-email-plus:before {\n  content: \"\\F9EA\";\n}\n\n.mdi-email-plus-outline:before {\n  content: \"\\F9EB\";\n}\n\n.mdi-email-search:before {\n  content: \"\\F960\";\n}\n\n.mdi-email-search-outline:before {\n  content: \"\\F961\";\n}\n\n.mdi-email-variant:before {\n  content: \"\\F5F0\";\n}\n\n.mdi-ember:before {\n  content: \"\\FB15\";\n}\n\n.mdi-emby:before {\n  content: \"\\F6B3\";\n}\n\n.mdi-emoticon:before {\n  content: \"\\F1F2\";\n}\n\n.mdi-emoticon-cool:before {\n  content: \"\\F1F3\";\n}\n\n.mdi-emoticon-dead:before {\n  content: \"\\F69A\";\n}\n\n.mdi-emoticon-devil:before {\n  content: \"\\F1F4\";\n}\n\n.mdi-emoticon-excited:before {\n  content: \"\\F69B\";\n}\n\n.mdi-emoticon-happy:before {\n  content: \"\\F1F5\";\n}\n\n.mdi-emoticon-neutral:before {\n  content: \"\\F1F6\";\n}\n\n.mdi-emoticon-poop:before {\n  content: \"\\F1F7\";\n}\n\n.mdi-emoticon-sad:before {\n  content: \"\\F1F8\";\n}\n\n.mdi-emoticon-tongue:before {\n  content: \"\\F1F9\";\n}\n\n.mdi-engine:before {\n  content: \"\\F1FA\";\n}\n\n.mdi-engine-off:before {\n  content: \"\\FA45\";\n}\n\n.mdi-engine-off-outline:before {\n  content: \"\\FA46\";\n}\n\n.mdi-engine-outline:before {\n  content: \"\\F1FB\";\n}\n\n.mdi-equal:before {\n  content: \"\\F1FC\";\n}\n\n.mdi-equal-box:before {\n  content: \"\\F1FD\";\n}\n\n.mdi-eraser:before {\n  content: \"\\F1FE\";\n}\n\n.mdi-eraser-variant:before {\n  content: \"\\F642\";\n}\n\n.mdi-escalator:before {\n  content: \"\\F1FF\";\n}\n\n.mdi-et:before {\n  content: \"\\FAB2\";\n}\n\n.mdi-ethereum:before {\n  content: \"\\F869\";\n}\n\n.mdi-ethernet:before {\n  content: \"\\F200\";\n}\n\n.mdi-ethernet-cable:before {\n  content: \"\\F201\";\n}\n\n.mdi-ethernet-cable-off:before {\n  content: \"\\F202\";\n}\n\n.mdi-etsy:before {\n  content: \"\\F203\";\n}\n\n.mdi-ev-station:before {\n  content: \"\\F5F1\";\n}\n\n.mdi-eventbrite:before {\n  content: \"\\F7C6\";\n}\n\n.mdi-evernote:before {\n  content: \"\\F204\";\n}\n\n.mdi-exclamation:before {\n  content: \"\\F205\";\n}\n\n.mdi-exit-run:before {\n  content: \"\\FA47\";\n}\n\n.mdi-exit-to-app:before {\n  content: \"\\F206\";\n}\n\n.mdi-expand-all:before {\n  content: \"\\FAB3\";\n}\n\n.mdi-expand-all-outline:before {\n  content: \"\\FAB4\";\n}\n\n.mdi-exponent:before {\n  content: \"\\F962\";\n}\n\n.mdi-exponent-box:before {\n  content: \"\\F963\";\n}\n\n.mdi-export:before {\n  content: \"\\F207\";\n}\n\n.mdi-export-variant:before {\n  content: \"\\FB6F\";\n}\n\n.mdi-eye:before {\n  content: \"\\F208\";\n}\n\n.mdi-eye-circle:before {\n  content: \"\\FB70\";\n}\n\n.mdi-eye-circle-outline:before {\n  content: \"\\FB71\";\n}\n\n.mdi-eye-off:before {\n  content: \"\\F209\";\n}\n\n.mdi-eye-off-outline:before {\n  content: \"\\F6D0\";\n}\n\n.mdi-eye-outline:before {\n  content: \"\\F6CF\";\n}\n\n.mdi-eye-plus:before {\n  content: \"\\F86A\";\n}\n\n.mdi-eye-plus-outline:before {\n  content: \"\\F86B\";\n}\n\n.mdi-eye-settings:before {\n  content: \"\\F86C\";\n}\n\n.mdi-eye-settings-outline:before {\n  content: \"\\F86D\";\n}\n\n.mdi-eyedropper:before {\n  content: \"\\F20A\";\n}\n\n.mdi-eyedropper-variant:before {\n  content: \"\\F20B\";\n}\n\n.mdi-face:before {\n  content: \"\\F643\";\n}\n\n.mdi-face-outline:before {\n  content: \"\\FB72\";\n}\n\n.mdi-face-profile:before {\n  content: \"\\F644\";\n}\n\n.mdi-facebook:before {\n  content: \"\\F20C\";\n}\n\n.mdi-facebook-box:before {\n  content: \"\\F20D\";\n}\n\n.mdi-facebook-messenger:before {\n  content: \"\\F20E\";\n}\n\n.mdi-facebook-workplace:before {\n  content: \"\\FB16\";\n}\n\n.mdi-factory:before {\n  content: \"\\F20F\";\n}\n\n.mdi-fan:before {\n  content: \"\\F210\";\n}\n\n.mdi-fan-off:before {\n  content: \"\\F81C\";\n}\n\n.mdi-fast-forward:before {\n  content: \"\\F211\";\n}\n\n.mdi-fast-forward-outline:before {\n  content: \"\\F6D1\";\n}\n\n.mdi-fax:before {\n  content: \"\\F212\";\n}\n\n.mdi-feather:before {\n  content: \"\\F6D2\";\n}\n\n.mdi-feature-search:before {\n  content: \"\\FA48\";\n}\n\n.mdi-feature-search-outline:before {\n  content: \"\\FA49\";\n}\n\n.mdi-fedora:before {\n  content: \"\\F8DA\";\n}\n\n.mdi-ferry:before {\n  content: \"\\F213\";\n}\n\n.mdi-file:before {\n  content: \"\\F214\";\n}\n\n.mdi-file-account:before {\n  content: \"\\F73A\";\n}\n\n.mdi-file-alert:before {\n  content: \"\\FA4A\";\n}\n\n.mdi-file-alert-outline:before {\n  content: \"\\FA4B\";\n}\n\n.mdi-file-cabinet:before {\n  content: \"\\FAB5\";\n}\n\n.mdi-file-chart:before {\n  content: \"\\F215\";\n}\n\n.mdi-file-check:before {\n  content: \"\\F216\";\n}\n\n.mdi-file-cloud:before {\n  content: \"\\F217\";\n}\n\n.mdi-file-compare:before {\n  content: \"\\F8A9\";\n}\n\n.mdi-file-delimited:before {\n  content: \"\\F218\";\n}\n\n.mdi-file-document:before {\n  content: \"\\F219\";\n}\n\n.mdi-file-document-box:before {\n  content: \"\\F21A\";\n}\n\n.mdi-file-document-box-multiple:before {\n  content: \"\\FAB6\";\n}\n\n.mdi-file-document-box-multiple-outline:before {\n  content: \"\\FAB7\";\n}\n\n.mdi-file-document-box-outline:before {\n  content: \"\\F9EC\";\n}\n\n.mdi-file-document-outline:before {\n  content: \"\\F9ED\";\n}\n\n.mdi-file-download:before {\n  content: \"\\F964\";\n}\n\n.mdi-file-download-outline:before {\n  content: \"\\F965\";\n}\n\n.mdi-file-excel:before {\n  content: \"\\F21B\";\n}\n\n.mdi-file-excel-box:before {\n  content: \"\\F21C\";\n}\n\n.mdi-file-export:before {\n  content: \"\\F21D\";\n}\n\n.mdi-file-find:before {\n  content: \"\\F21E\";\n}\n\n.mdi-file-find-outline:before {\n  content: \"\\FB73\";\n}\n\n.mdi-file-hidden:before {\n  content: \"\\F613\";\n}\n\n.mdi-file-image:before {\n  content: \"\\F21F\";\n}\n\n.mdi-file-import:before {\n  content: \"\\F220\";\n}\n\n.mdi-file-lock:before {\n  content: \"\\F221\";\n}\n\n.mdi-file-move:before {\n  content: \"\\FAB8\";\n}\n\n.mdi-file-multiple:before {\n  content: \"\\F222\";\n}\n\n.mdi-file-music:before {\n  content: \"\\F223\";\n}\n\n.mdi-file-outline:before {\n  content: \"\\F224\";\n}\n\n.mdi-file-pdf:before {\n  content: \"\\F225\";\n}\n\n.mdi-file-pdf-box:before {\n  content: \"\\F226\";\n}\n\n.mdi-file-percent:before {\n  content: \"\\F81D\";\n}\n\n.mdi-file-plus:before {\n  content: \"\\F751\";\n}\n\n.mdi-file-powerpoint:before {\n  content: \"\\F227\";\n}\n\n.mdi-file-powerpoint-box:before {\n  content: \"\\F228\";\n}\n\n.mdi-file-presentation-box:before {\n  content: \"\\F229\";\n}\n\n.mdi-file-question:before {\n  content: \"\\F86E\";\n}\n\n.mdi-file-remove:before {\n  content: \"\\FB74\";\n}\n\n.mdi-file-replace:before {\n  content: \"\\FB17\";\n}\n\n.mdi-file-replace-outline:before {\n  content: \"\\FB18\";\n}\n\n.mdi-file-restore:before {\n  content: \"\\F670\";\n}\n\n.mdi-file-send:before {\n  content: \"\\F22A\";\n}\n\n.mdi-file-tree:before {\n  content: \"\\F645\";\n}\n\n.mdi-file-undo:before {\n  content: \"\\F8DB\";\n}\n\n.mdi-file-upload:before {\n  content: \"\\FA4C\";\n}\n\n.mdi-file-upload-outline:before {\n  content: \"\\FA4D\";\n}\n\n.mdi-file-video:before {\n  content: \"\\F22B\";\n}\n\n.mdi-file-word:before {\n  content: \"\\F22C\";\n}\n\n.mdi-file-word-box:before {\n  content: \"\\F22D\";\n}\n\n.mdi-file-xml:before {\n  content: \"\\F22E\";\n}\n\n.mdi-film:before {\n  content: \"\\F22F\";\n}\n\n.mdi-filmstrip:before {\n  content: \"\\F230\";\n}\n\n.mdi-filmstrip-off:before {\n  content: \"\\F231\";\n}\n\n.mdi-filter:before {\n  content: \"\\F232\";\n}\n\n.mdi-filter-outline:before {\n  content: \"\\F233\";\n}\n\n.mdi-filter-remove:before {\n  content: \"\\F234\";\n}\n\n.mdi-filter-remove-outline:before {\n  content: \"\\F235\";\n}\n\n.mdi-filter-variant:before {\n  content: \"\\F236\";\n}\n\n.mdi-finance:before {\n  content: \"\\F81E\";\n}\n\n.mdi-find-replace:before {\n  content: \"\\F6D3\";\n}\n\n.mdi-fingerprint:before {\n  content: \"\\F237\";\n}\n\n.mdi-fire:before {\n  content: \"\\F238\";\n}\n\n.mdi-fire-truck:before {\n  content: \"\\F8AA\";\n}\n\n.mdi-firebase:before {\n  content: \"\\F966\";\n}\n\n.mdi-firefox:before {\n  content: \"\\F239\";\n}\n\n.mdi-fish:before {\n  content: \"\\F23A\";\n}\n\n.mdi-flag:before {\n  content: \"\\F23B\";\n}\n\n.mdi-flag-checkered:before {\n  content: \"\\F23C\";\n}\n\n.mdi-flag-minus:before {\n  content: \"\\FB75\";\n}\n\n.mdi-flag-outline:before {\n  content: \"\\F23D\";\n}\n\n.mdi-flag-plus:before {\n  content: \"\\FB76\";\n}\n\n.mdi-flag-remove:before {\n  content: \"\\FB77\";\n}\n\n.mdi-flag-triangle:before {\n  content: \"\\F23F\";\n}\n\n.mdi-flag-variant:before {\n  content: \"\\F240\";\n}\n\n.mdi-flag-variant-outline:before {\n  content: \"\\F23E\";\n}\n\n.mdi-flash:before {\n  content: \"\\F241\";\n}\n\n.mdi-flash-auto:before {\n  content: \"\\F242\";\n}\n\n.mdi-flash-circle:before {\n  content: \"\\F81F\";\n}\n\n.mdi-flash-off:before {\n  content: \"\\F243\";\n}\n\n.mdi-flash-outline:before {\n  content: \"\\F6D4\";\n}\n\n.mdi-flash-red-eye:before {\n  content: \"\\F67A\";\n}\n\n.mdi-flashlight:before {\n  content: \"\\F244\";\n}\n\n.mdi-flashlight-off:before {\n  content: \"\\F245\";\n}\n\n.mdi-flask:before {\n  content: \"\\F093\";\n}\n\n.mdi-flask-empty:before {\n  content: \"\\F094\";\n}\n\n.mdi-flask-empty-outline:before {\n  content: \"\\F095\";\n}\n\n.mdi-flask-outline:before {\n  content: \"\\F096\";\n}\n\n.mdi-flattr:before {\n  content: \"\\F246\";\n}\n\n.mdi-flip-to-back:before {\n  content: \"\\F247\";\n}\n\n.mdi-flip-to-front:before {\n  content: \"\\F248\";\n}\n\n.mdi-floor-lamp:before {\n  content: \"\\F8DC\";\n}\n\n.mdi-floor-plan:before {\n  content: \"\\F820\";\n}\n\n.mdi-floppy:before {\n  content: \"\\F249\";\n}\n\n.mdi-floppy-variant:before {\n  content: \"\\F9EE\";\n}\n\n.mdi-flower:before {\n  content: \"\\F24A\";\n}\n\n.mdi-flower-outline:before {\n  content: \"\\F9EF\";\n}\n\n.mdi-flower-tulip:before {\n  content: \"\\F9F0\";\n}\n\n.mdi-flower-tulip-outline:before {\n  content: \"\\F9F1\";\n}\n\n.mdi-folder:before {\n  content: \"\\F24B\";\n}\n\n.mdi-folder-account:before {\n  content: \"\\F24C\";\n}\n\n.mdi-folder-account-outline:before {\n  content: \"\\FB78\";\n}\n\n.mdi-folder-clock:before {\n  content: \"\\FAB9\";\n}\n\n.mdi-folder-clock-outline:before {\n  content: \"\\FABA\";\n}\n\n.mdi-folder-download:before {\n  content: \"\\F24D\";\n}\n\n.mdi-folder-edit:before {\n  content: \"\\F8DD\";\n}\n\n.mdi-folder-google-drive:before {\n  content: \"\\F24E\";\n}\n\n.mdi-folder-image:before {\n  content: \"\\F24F\";\n}\n\n.mdi-folder-key:before {\n  content: \"\\F8AB\";\n}\n\n.mdi-folder-key-network:before {\n  content: \"\\F8AC\";\n}\n\n.mdi-folder-lock:before {\n  content: \"\\F250\";\n}\n\n.mdi-folder-lock-open:before {\n  content: \"\\F251\";\n}\n\n.mdi-folder-move:before {\n  content: \"\\F252\";\n}\n\n.mdi-folder-multiple:before {\n  content: \"\\F253\";\n}\n\n.mdi-folder-multiple-image:before {\n  content: \"\\F254\";\n}\n\n.mdi-folder-multiple-outline:before {\n  content: \"\\F255\";\n}\n\n.mdi-folder-network:before {\n  content: \"\\F86F\";\n}\n\n.mdi-folder-open:before {\n  content: \"\\F76F\";\n}\n\n.mdi-folder-outline:before {\n  content: \"\\F256\";\n}\n\n.mdi-folder-plus:before {\n  content: \"\\F257\";\n}\n\n.mdi-folder-plus-outline:before {\n  content: \"\\FB79\";\n}\n\n.mdi-folder-remove:before {\n  content: \"\\F258\";\n}\n\n.mdi-folder-remove-outline:before {\n  content: \"\\FB7A\";\n}\n\n.mdi-folder-search:before {\n  content: \"\\F967\";\n}\n\n.mdi-folder-search-outline:before {\n  content: \"\\F968\";\n}\n\n.mdi-folder-star:before {\n  content: \"\\F69C\";\n}\n\n.mdi-folder-star-outline:before {\n  content: \"\\FB7B\";\n}\n\n.mdi-folder-upload:before {\n  content: \"\\F259\";\n}\n\n.mdi-font-awesome:before {\n  content: \"\\F03A\";\n}\n\n.mdi-food:before {\n  content: \"\\F25A\";\n}\n\n.mdi-food-apple:before {\n  content: \"\\F25B\";\n}\n\n.mdi-food-croissant:before {\n  content: \"\\F7C7\";\n}\n\n.mdi-food-fork-drink:before {\n  content: \"\\F5F2\";\n}\n\n.mdi-food-off:before {\n  content: \"\\F5F3\";\n}\n\n.mdi-food-variant:before {\n  content: \"\\F25C\";\n}\n\n.mdi-football:before {\n  content: \"\\F25D\";\n}\n\n.mdi-football-australian:before {\n  content: \"\\F25E\";\n}\n\n.mdi-football-helmet:before {\n  content: \"\\F25F\";\n}\n\n.mdi-forklift:before {\n  content: \"\\F7C8\";\n}\n\n.mdi-format-align-bottom:before {\n  content: \"\\F752\";\n}\n\n.mdi-format-align-center:before {\n  content: \"\\F260\";\n}\n\n.mdi-format-align-justify:before {\n  content: \"\\F261\";\n}\n\n.mdi-format-align-left:before {\n  content: \"\\F262\";\n}\n\n.mdi-format-align-middle:before {\n  content: \"\\F753\";\n}\n\n.mdi-format-align-right:before {\n  content: \"\\F263\";\n}\n\n.mdi-format-align-top:before {\n  content: \"\\F754\";\n}\n\n.mdi-format-annotation-minus:before {\n  content: \"\\FABB\";\n}\n\n.mdi-format-annotation-plus:before {\n  content: \"\\F646\";\n}\n\n.mdi-format-bold:before {\n  content: \"\\F264\";\n}\n\n.mdi-format-clear:before {\n  content: \"\\F265\";\n}\n\n.mdi-format-color-fill:before {\n  content: \"\\F266\";\n}\n\n.mdi-format-color-text:before {\n  content: \"\\F69D\";\n}\n\n.mdi-format-columns:before {\n  content: \"\\F8DE\";\n}\n\n.mdi-format-float-center:before {\n  content: \"\\F267\";\n}\n\n.mdi-format-float-left:before {\n  content: \"\\F268\";\n}\n\n.mdi-format-float-none:before {\n  content: \"\\F269\";\n}\n\n.mdi-format-float-right:before {\n  content: \"\\F26A\";\n}\n\n.mdi-format-font:before {\n  content: \"\\F6D5\";\n}\n\n.mdi-format-font-size-decrease:before {\n  content: \"\\F9F2\";\n}\n\n.mdi-format-font-size-increase:before {\n  content: \"\\F9F3\";\n}\n\n.mdi-format-header-1:before {\n  content: \"\\F26B\";\n}\n\n.mdi-format-header-2:before {\n  content: \"\\F26C\";\n}\n\n.mdi-format-header-3:before {\n  content: \"\\F26D\";\n}\n\n.mdi-format-header-4:before {\n  content: \"\\F26E\";\n}\n\n.mdi-format-header-5:before {\n  content: \"\\F26F\";\n}\n\n.mdi-format-header-6:before {\n  content: \"\\F270\";\n}\n\n.mdi-format-header-decrease:before {\n  content: \"\\F271\";\n}\n\n.mdi-format-header-equal:before {\n  content: \"\\F272\";\n}\n\n.mdi-format-header-increase:before {\n  content: \"\\F273\";\n}\n\n.mdi-format-header-pound:before {\n  content: \"\\F274\";\n}\n\n.mdi-format-horizontal-align-center:before {\n  content: \"\\F61E\";\n}\n\n.mdi-format-horizontal-align-left:before {\n  content: \"\\F61F\";\n}\n\n.mdi-format-horizontal-align-right:before {\n  content: \"\\F620\";\n}\n\n.mdi-format-indent-decrease:before {\n  content: \"\\F275\";\n}\n\n.mdi-format-indent-increase:before {\n  content: \"\\F276\";\n}\n\n.mdi-format-italic:before {\n  content: \"\\F277\";\n}\n\n.mdi-format-letter-case:before {\n  content: \"\\FB19\";\n}\n\n.mdi-format-letter-case-lower:before {\n  content: \"\\FB1A\";\n}\n\n.mdi-format-letter-case-upper:before {\n  content: \"\\FB1B\";\n}\n\n.mdi-format-line-spacing:before {\n  content: \"\\F278\";\n}\n\n.mdi-format-line-style:before {\n  content: \"\\F5C8\";\n}\n\n.mdi-format-line-weight:before {\n  content: \"\\F5C9\";\n}\n\n.mdi-format-list-bulleted:before {\n  content: \"\\F279\";\n}\n\n.mdi-format-list-bulleted-type:before {\n  content: \"\\F27A\";\n}\n\n.mdi-format-list-checkbox:before {\n  content: \"\\F969\";\n}\n\n.mdi-format-list-checks:before {\n  content: \"\\F755\";\n}\n\n.mdi-format-list-numbers:before {\n  content: \"\\F27B\";\n}\n\n.mdi-format-page-break:before {\n  content: \"\\F6D6\";\n}\n\n.mdi-format-paint:before {\n  content: \"\\F27C\";\n}\n\n.mdi-format-paragraph:before {\n  content: \"\\F27D\";\n}\n\n.mdi-format-pilcrow:before {\n  content: \"\\F6D7\";\n}\n\n.mdi-format-quote-close:before {\n  content: \"\\F27E\";\n}\n\n.mdi-format-quote-open:before {\n  content: \"\\F756\";\n}\n\n.mdi-format-rotate-90:before {\n  content: \"\\F6A9\";\n}\n\n.mdi-format-section:before {\n  content: \"\\F69E\";\n}\n\n.mdi-format-size:before {\n  content: \"\\F27F\";\n}\n\n.mdi-format-strikethrough:before {\n  content: \"\\F280\";\n}\n\n.mdi-format-strikethrough-variant:before {\n  content: \"\\F281\";\n}\n\n.mdi-format-subscript:before {\n  content: \"\\F282\";\n}\n\n.mdi-format-superscript:before {\n  content: \"\\F283\";\n}\n\n.mdi-format-text:before {\n  content: \"\\F284\";\n}\n\n.mdi-format-textdirection-l-to-r:before {\n  content: \"\\F285\";\n}\n\n.mdi-format-textdirection-r-to-l:before {\n  content: \"\\F286\";\n}\n\n.mdi-format-title:before {\n  content: \"\\F5F4\";\n}\n\n.mdi-format-underline:before {\n  content: \"\\F287\";\n}\n\n.mdi-format-vertical-align-bottom:before {\n  content: \"\\F621\";\n}\n\n.mdi-format-vertical-align-center:before {\n  content: \"\\F622\";\n}\n\n.mdi-format-vertical-align-top:before {\n  content: \"\\F623\";\n}\n\n.mdi-format-wrap-inline:before {\n  content: \"\\F288\";\n}\n\n.mdi-format-wrap-square:before {\n  content: \"\\F289\";\n}\n\n.mdi-format-wrap-tight:before {\n  content: \"\\F28A\";\n}\n\n.mdi-format-wrap-top-bottom:before {\n  content: \"\\F28B\";\n}\n\n.mdi-forum:before {\n  content: \"\\F28C\";\n}\n\n.mdi-forum-outline:before {\n  content: \"\\F821\";\n}\n\n.mdi-forward:before {\n  content: \"\\F28D\";\n}\n\n.mdi-fountain:before {\n  content: \"\\F96A\";\n}\n\n.mdi-foursquare:before {\n  content: \"\\F28E\";\n}\n\n.mdi-freebsd:before {\n  content: \"\\F8DF\";\n}\n\n.mdi-fridge:before {\n  content: \"\\F290\";\n}\n\n.mdi-fridge-bottom:before {\n  content: \"\\F292\";\n}\n\n.mdi-fridge-outline:before {\n  content: \"\\F28F\";\n}\n\n.mdi-fridge-top:before {\n  content: \"\\F291\";\n}\n\n.mdi-fuel:before {\n  content: \"\\F7C9\";\n}\n\n.mdi-fullscreen:before {\n  content: \"\\F293\";\n}\n\n.mdi-fullscreen-exit:before {\n  content: \"\\F294\";\n}\n\n.mdi-function:before {\n  content: \"\\F295\";\n}\n\n.mdi-function-variant:before {\n  content: \"\\F870\";\n}\n\n.mdi-gamepad:before {\n  content: \"\\F296\";\n}\n\n.mdi-gamepad-variant:before {\n  content: \"\\F297\";\n}\n\n.mdi-garage:before {\n  content: \"\\F6D8\";\n}\n\n.mdi-garage-alert:before {\n  content: \"\\F871\";\n}\n\n.mdi-garage-open:before {\n  content: \"\\F6D9\";\n}\n\n.mdi-gas-cylinder:before {\n  content: \"\\F647\";\n}\n\n.mdi-gas-station:before {\n  content: \"\\F298\";\n}\n\n.mdi-gate:before {\n  content: \"\\F299\";\n}\n\n.mdi-gate-and:before {\n  content: \"\\F8E0\";\n}\n\n.mdi-gate-nand:before {\n  content: \"\\F8E1\";\n}\n\n.mdi-gate-nor:before {\n  content: \"\\F8E2\";\n}\n\n.mdi-gate-not:before {\n  content: \"\\F8E3\";\n}\n\n.mdi-gate-or:before {\n  content: \"\\F8E4\";\n}\n\n.mdi-gate-xnor:before {\n  content: \"\\F8E5\";\n}\n\n.mdi-gate-xor:before {\n  content: \"\\F8E6\";\n}\n\n.mdi-gauge:before {\n  content: \"\\F29A\";\n}\n\n.mdi-gauge-empty:before {\n  content: \"\\F872\";\n}\n\n.mdi-gauge-full:before {\n  content: \"\\F873\";\n}\n\n.mdi-gauge-low:before {\n  content: \"\\F874\";\n}\n\n.mdi-gavel:before {\n  content: \"\\F29B\";\n}\n\n.mdi-gender-female:before {\n  content: \"\\F29C\";\n}\n\n.mdi-gender-male:before {\n  content: \"\\F29D\";\n}\n\n.mdi-gender-male-female:before {\n  content: \"\\F29E\";\n}\n\n.mdi-gender-transgender:before {\n  content: \"\\F29F\";\n}\n\n.mdi-gentoo:before {\n  content: \"\\F8E7\";\n}\n\n.mdi-gesture:before {\n  content: \"\\F7CA\";\n}\n\n.mdi-gesture-double-tap:before {\n  content: \"\\F73B\";\n}\n\n.mdi-gesture-pinch:before {\n  content: \"\\FABC\";\n}\n\n.mdi-gesture-spread:before {\n  content: \"\\FABD\";\n}\n\n.mdi-gesture-swipe-down:before {\n  content: \"\\F73C\";\n}\n\n.mdi-gesture-swipe-horizontal:before {\n  content: \"\\FABE\";\n}\n\n.mdi-gesture-swipe-left:before {\n  content: \"\\F73D\";\n}\n\n.mdi-gesture-swipe-right:before {\n  content: \"\\F73E\";\n}\n\n.mdi-gesture-swipe-up:before {\n  content: \"\\F73F\";\n}\n\n.mdi-gesture-swipe-vertical:before {\n  content: \"\\FABF\";\n}\n\n.mdi-gesture-tap:before {\n  content: \"\\F740\";\n}\n\n.mdi-gesture-two-double-tap:before {\n  content: \"\\F741\";\n}\n\n.mdi-gesture-two-tap:before {\n  content: \"\\F742\";\n}\n\n.mdi-ghost:before {\n  content: \"\\F2A0\";\n}\n\n.mdi-ghost-off:before {\n  content: \"\\F9F4\";\n}\n\n.mdi-gift:before {\n  content: \"\\F2A1\";\n}\n\n.mdi-git:before {\n  content: \"\\F2A2\";\n}\n\n.mdi-github-box:before {\n  content: \"\\F2A3\";\n}\n\n.mdi-github-circle:before {\n  content: \"\\F2A4\";\n}\n\n.mdi-github-face:before {\n  content: \"\\F6DA\";\n}\n\n.mdi-gitlab:before {\n  content: \"\\FB7C\";\n}\n\n.mdi-glass-cocktail:before {\n  content: \"\\F356\";\n}\n\n.mdi-glass-flute:before {\n  content: \"\\F2A5\";\n}\n\n.mdi-glass-mug:before {\n  content: \"\\F2A6\";\n}\n\n.mdi-glass-stange:before {\n  content: \"\\F2A7\";\n}\n\n.mdi-glass-tulip:before {\n  content: \"\\F2A8\";\n}\n\n.mdi-glass-wine:before {\n  content: \"\\F875\";\n}\n\n.mdi-glassdoor:before {\n  content: \"\\F2A9\";\n}\n\n.mdi-glasses:before {\n  content: \"\\F2AA\";\n}\n\n.mdi-globe-model:before {\n  content: \"\\F8E8\";\n}\n\n.mdi-gmail:before {\n  content: \"\\F2AB\";\n}\n\n.mdi-gnome:before {\n  content: \"\\F2AC\";\n}\n\n.mdi-gog:before {\n  content: \"\\FB7D\";\n}\n\n.mdi-golf:before {\n  content: \"\\F822\";\n}\n\n.mdi-gondola:before {\n  content: \"\\F685\";\n}\n\n.mdi-google:before {\n  content: \"\\F2AD\";\n}\n\n.mdi-google-allo:before {\n  content: \"\\F801\";\n}\n\n.mdi-google-analytics:before {\n  content: \"\\F7CB\";\n}\n\n.mdi-google-assistant:before {\n  content: \"\\F7CC\";\n}\n\n.mdi-google-cardboard:before {\n  content: \"\\F2AE\";\n}\n\n.mdi-google-chrome:before {\n  content: \"\\F2AF\";\n}\n\n.mdi-google-circles:before {\n  content: \"\\F2B0\";\n}\n\n.mdi-google-circles-communities:before {\n  content: \"\\F2B1\";\n}\n\n.mdi-google-circles-extended:before {\n  content: \"\\F2B2\";\n}\n\n.mdi-google-circles-group:before {\n  content: \"\\F2B3\";\n}\n\n.mdi-google-controller:before {\n  content: \"\\F2B4\";\n}\n\n.mdi-google-controller-off:before {\n  content: \"\\F2B5\";\n}\n\n.mdi-google-drive:before {\n  content: \"\\F2B6\";\n}\n\n.mdi-google-earth:before {\n  content: \"\\F2B7\";\n}\n\n.mdi-google-fit:before {\n  content: \"\\F96B\";\n}\n\n.mdi-google-glass:before {\n  content: \"\\F2B8\";\n}\n\n.mdi-google-hangouts:before {\n  content: \"\\F2C9\";\n}\n\n.mdi-google-home:before {\n  content: \"\\F823\";\n}\n\n.mdi-google-keep:before {\n  content: \"\\F6DB\";\n}\n\n.mdi-google-lens:before {\n  content: \"\\F9F5\";\n}\n\n.mdi-google-maps:before {\n  content: \"\\F5F5\";\n}\n\n.mdi-google-nearby:before {\n  content: \"\\F2B9\";\n}\n\n.mdi-google-pages:before {\n  content: \"\\F2BA\";\n}\n\n.mdi-google-photos:before {\n  content: \"\\F6DC\";\n}\n\n.mdi-google-physical-web:before {\n  content: \"\\F2BB\";\n}\n\n.mdi-google-play:before {\n  content: \"\\F2BC\";\n}\n\n.mdi-google-plus:before {\n  content: \"\\F2BD\";\n}\n\n.mdi-google-plus-box:before {\n  content: \"\\F2BE\";\n}\n\n.mdi-google-spreadsheet:before {\n  content: \"\\F9F6\";\n}\n\n.mdi-google-translate:before {\n  content: \"\\F2BF\";\n}\n\n.mdi-google-wallet:before {\n  content: \"\\F2C0\";\n}\n\n.mdi-gpu:before {\n  content: \"\\F8AD\";\n}\n\n.mdi-gradient:before {\n  content: \"\\F69F\";\n}\n\n.mdi-graphql:before {\n  content: \"\\F876\";\n}\n\n.mdi-grave-stone:before {\n  content: \"\\FB7E\";\n}\n\n.mdi-grease-pencil:before {\n  content: \"\\F648\";\n}\n\n.mdi-greater-than:before {\n  content: \"\\F96C\";\n}\n\n.mdi-greater-than-or-equal:before {\n  content: \"\\F96D\";\n}\n\n.mdi-grid:before {\n  content: \"\\F2C1\";\n}\n\n.mdi-grid-large:before {\n  content: \"\\F757\";\n}\n\n.mdi-grid-off:before {\n  content: \"\\F2C2\";\n}\n\n.mdi-group:before {\n  content: \"\\F2C3\";\n}\n\n.mdi-guitar-acoustic:before {\n  content: \"\\F770\";\n}\n\n.mdi-guitar-electric:before {\n  content: \"\\F2C4\";\n}\n\n.mdi-guitar-pick:before {\n  content: \"\\F2C5\";\n}\n\n.mdi-guitar-pick-outline:before {\n  content: \"\\F2C6\";\n}\n\n.mdi-guy-fawkes-mask:before {\n  content: \"\\F824\";\n}\n\n.mdi-hackernews:before {\n  content: \"\\F624\";\n}\n\n.mdi-hail:before {\n  content: \"\\FAC0\";\n}\n\n.mdi-halloween:before {\n  content: \"\\FB7F\";\n}\n\n.mdi-hamburger:before {\n  content: \"\\F684\";\n}\n\n.mdi-hammer:before {\n  content: \"\\F8E9\";\n}\n\n.mdi-hand:before {\n  content: \"\\FA4E\";\n}\n\n.mdi-hand-okay:before {\n  content: \"\\FA4F\";\n}\n\n.mdi-hand-peace:before {\n  content: \"\\FA50\";\n}\n\n.mdi-hand-peace-variant:before {\n  content: \"\\FA51\";\n}\n\n.mdi-hand-pointing-down:before {\n  content: \"\\FA52\";\n}\n\n.mdi-hand-pointing-left:before {\n  content: \"\\FA53\";\n}\n\n.mdi-hand-pointing-right:before {\n  content: \"\\F2C7\";\n}\n\n.mdi-hand-pointing-up:before {\n  content: \"\\FA54\";\n}\n\n.mdi-hanger:before {\n  content: \"\\F2C8\";\n}\n\n.mdi-hard-hat:before {\n  content: \"\\F96E\";\n}\n\n.mdi-harddisk:before {\n  content: \"\\F2CA\";\n}\n\n.mdi-hat-fedora:before {\n  content: \"\\FB80\";\n}\n\n.mdi-headphones:before {\n  content: \"\\F2CB\";\n}\n\n.mdi-headphones-bluetooth:before {\n  content: \"\\F96F\";\n}\n\n.mdi-headphones-box:before {\n  content: \"\\F2CC\";\n}\n\n.mdi-headphones-off:before {\n  content: \"\\F7CD\";\n}\n\n.mdi-headphones-settings:before {\n  content: \"\\F2CD\";\n}\n\n.mdi-headset:before {\n  content: \"\\F2CE\";\n}\n\n.mdi-headset-dock:before {\n  content: \"\\F2CF\";\n}\n\n.mdi-headset-off:before {\n  content: \"\\F2D0\";\n}\n\n.mdi-heart:before {\n  content: \"\\F2D1\";\n}\n\n.mdi-heart-box:before {\n  content: \"\\F2D2\";\n}\n\n.mdi-heart-box-outline:before {\n  content: \"\\F2D3\";\n}\n\n.mdi-heart-broken:before {\n  content: \"\\F2D4\";\n}\n\n.mdi-heart-circle:before {\n  content: \"\\F970\";\n}\n\n.mdi-heart-circle-outline:before {\n  content: \"\\F971\";\n}\n\n.mdi-heart-half:before {\n  content: \"\\F6DE\";\n}\n\n.mdi-heart-half-full:before {\n  content: \"\\F6DD\";\n}\n\n.mdi-heart-half-outline:before {\n  content: \"\\F6DF\";\n}\n\n.mdi-heart-multiple:before {\n  content: \"\\FA55\";\n}\n\n.mdi-heart-multiple-outline:before {\n  content: \"\\FA56\";\n}\n\n.mdi-heart-off:before {\n  content: \"\\F758\";\n}\n\n.mdi-heart-outline:before {\n  content: \"\\F2D5\";\n}\n\n.mdi-heart-pulse:before {\n  content: \"\\F5F6\";\n}\n\n.mdi-helicopter:before {\n  content: \"\\FAC1\";\n}\n\n.mdi-help:before {\n  content: \"\\F2D6\";\n}\n\n.mdi-help-box:before {\n  content: \"\\F78A\";\n}\n\n.mdi-help-circle:before {\n  content: \"\\F2D7\";\n}\n\n.mdi-help-circle-outline:before {\n  content: \"\\F625\";\n}\n\n.mdi-help-network:before {\n  content: \"\\F6F4\";\n}\n\n.mdi-help-rhombus:before {\n  content: \"\\FB81\";\n}\n\n.mdi-help-rhombus-outline:before {\n  content: \"\\FB82\";\n}\n\n.mdi-hexagon:before {\n  content: \"\\F2D8\";\n}\n\n.mdi-hexagon-multiple:before {\n  content: \"\\F6E0\";\n}\n\n.mdi-hexagon-outline:before {\n  content: \"\\F2D9\";\n}\n\n.mdi-hexagon-slice-1:before {\n  content: \"\\FAC2\";\n}\n\n.mdi-hexagon-slice-2:before {\n  content: \"\\FAC3\";\n}\n\n.mdi-hexagon-slice-3:before {\n  content: \"\\FAC4\";\n}\n\n.mdi-hexagon-slice-4:before {\n  content: \"\\FAC5\";\n}\n\n.mdi-hexagon-slice-5:before {\n  content: \"\\FAC6\";\n}\n\n.mdi-hexagon-slice-6:before {\n  content: \"\\FAC7\";\n}\n\n.mdi-hexagram:before {\n  content: \"\\FAC8\";\n}\n\n.mdi-hexagram-outline:before {\n  content: \"\\FAC9\";\n}\n\n.mdi-high-definition:before {\n  content: \"\\F7CE\";\n}\n\n.mdi-high-definition-box:before {\n  content: \"\\F877\";\n}\n\n.mdi-highway:before {\n  content: \"\\F5F7\";\n}\n\n.mdi-hinduism:before {\n  content: \"\\F972\";\n}\n\n.mdi-history:before {\n  content: \"\\F2DA\";\n}\n\n.mdi-hockey-puck:before {\n  content: \"\\F878\";\n}\n\n.mdi-hockey-sticks:before {\n  content: \"\\F879\";\n}\n\n.mdi-hololens:before {\n  content: \"\\F2DB\";\n}\n\n.mdi-home:before {\n  content: \"\\F2DC\";\n}\n\n.mdi-home-account:before {\n  content: \"\\F825\";\n}\n\n.mdi-home-alert:before {\n  content: \"\\F87A\";\n}\n\n.mdi-home-assistant:before {\n  content: \"\\F7CF\";\n}\n\n.mdi-home-automation:before {\n  content: \"\\F7D0\";\n}\n\n.mdi-home-circle:before {\n  content: \"\\F7D1\";\n}\n\n.mdi-home-currency-usd:before {\n  content: \"\\F8AE\";\n}\n\n.mdi-home-heart:before {\n  content: \"\\F826\";\n}\n\n.mdi-home-lock:before {\n  content: \"\\F8EA\";\n}\n\n.mdi-home-lock-open:before {\n  content: \"\\F8EB\";\n}\n\n.mdi-home-map-marker:before {\n  content: \"\\F5F8\";\n}\n\n.mdi-home-minus:before {\n  content: \"\\F973\";\n}\n\n.mdi-home-modern:before {\n  content: \"\\F2DD\";\n}\n\n.mdi-home-outline:before {\n  content: \"\\F6A0\";\n}\n\n.mdi-home-plus:before {\n  content: \"\\F974\";\n}\n\n.mdi-home-variant:before {\n  content: \"\\F2DE\";\n}\n\n.mdi-home-variant-outline:before {\n  content: \"\\FB83\";\n}\n\n.mdi-hook:before {\n  content: \"\\F6E1\";\n}\n\n.mdi-hook-off:before {\n  content: \"\\F6E2\";\n}\n\n.mdi-hops:before {\n  content: \"\\F2DF\";\n}\n\n.mdi-horseshoe:before {\n  content: \"\\FA57\";\n}\n\n.mdi-hospital:before {\n  content: \"\\F2E0\";\n}\n\n.mdi-hospital-building:before {\n  content: \"\\F2E1\";\n}\n\n.mdi-hospital-marker:before {\n  content: \"\\F2E2\";\n}\n\n.mdi-hot-tub:before {\n  content: \"\\F827\";\n}\n\n.mdi-hotel:before {\n  content: \"\\F2E3\";\n}\n\n.mdi-houzz:before {\n  content: \"\\F2E4\";\n}\n\n.mdi-houzz-box:before {\n  content: \"\\F2E5\";\n}\n\n.mdi-hulu:before {\n  content: \"\\F828\";\n}\n\n.mdi-human:before {\n  content: \"\\F2E6\";\n}\n\n.mdi-human-child:before {\n  content: \"\\F2E7\";\n}\n\n.mdi-human-female:before {\n  content: \"\\F649\";\n}\n\n.mdi-human-female-boy:before {\n  content: \"\\FA58\";\n}\n\n.mdi-human-female-female:before {\n  content: \"\\FA59\";\n}\n\n.mdi-human-female-girl:before {\n  content: \"\\FA5A\";\n}\n\n.mdi-human-greeting:before {\n  content: \"\\F64A\";\n}\n\n.mdi-human-handsdown:before {\n  content: \"\\F64B\";\n}\n\n.mdi-human-handsup:before {\n  content: \"\\F64C\";\n}\n\n.mdi-human-male:before {\n  content: \"\\F64D\";\n}\n\n.mdi-human-male-boy:before {\n  content: \"\\FA5B\";\n}\n\n.mdi-human-male-female:before {\n  content: \"\\F2E8\";\n}\n\n.mdi-human-male-girl:before {\n  content: \"\\FA5C\";\n}\n\n.mdi-human-male-male:before {\n  content: \"\\FA5D\";\n}\n\n.mdi-human-pregnant:before {\n  content: \"\\F5CF\";\n}\n\n.mdi-humble-bundle:before {\n  content: \"\\F743\";\n}\n\n.mdi-ice-cream:before {\n  content: \"\\F829\";\n}\n\n.mdi-image:before {\n  content: \"\\F2E9\";\n}\n\n.mdi-image-album:before {\n  content: \"\\F2EA\";\n}\n\n.mdi-image-area:before {\n  content: \"\\F2EB\";\n}\n\n.mdi-image-area-close:before {\n  content: \"\\F2EC\";\n}\n\n.mdi-image-broken:before {\n  content: \"\\F2ED\";\n}\n\n.mdi-image-broken-variant:before {\n  content: \"\\F2EE\";\n}\n\n.mdi-image-filter:before {\n  content: \"\\F2EF\";\n}\n\n.mdi-image-filter-black-white:before {\n  content: \"\\F2F0\";\n}\n\n.mdi-image-filter-center-focus:before {\n  content: \"\\F2F1\";\n}\n\n.mdi-image-filter-center-focus-weak:before {\n  content: \"\\F2F2\";\n}\n\n.mdi-image-filter-drama:before {\n  content: \"\\F2F3\";\n}\n\n.mdi-image-filter-frames:before {\n  content: \"\\F2F4\";\n}\n\n.mdi-image-filter-hdr:before {\n  content: \"\\F2F5\";\n}\n\n.mdi-image-filter-none:before {\n  content: \"\\F2F6\";\n}\n\n.mdi-image-filter-tilt-shift:before {\n  content: \"\\F2F7\";\n}\n\n.mdi-image-filter-vintage:before {\n  content: \"\\F2F8\";\n}\n\n.mdi-image-move:before {\n  content: \"\\F9F7\";\n}\n\n.mdi-image-multiple:before {\n  content: \"\\F2F9\";\n}\n\n.mdi-image-off:before {\n  content: \"\\F82A\";\n}\n\n.mdi-image-outline:before {\n  content: \"\\F975\";\n}\n\n.mdi-image-plus:before {\n  content: \"\\F87B\";\n}\n\n.mdi-image-search:before {\n  content: \"\\F976\";\n}\n\n.mdi-image-search-outline:before {\n  content: \"\\F977\";\n}\n\n.mdi-import:before {\n  content: \"\\F2FA\";\n}\n\n.mdi-inbox:before {\n  content: \"\\F686\";\n}\n\n.mdi-inbox-arrow-down:before {\n  content: \"\\F2FB\";\n}\n\n.mdi-inbox-arrow-up:before {\n  content: \"\\F3D1\";\n}\n\n.mdi-inbox-multiple:before {\n  content: \"\\F8AF\";\n}\n\n.mdi-inbox-multiple-outline:before {\n  content: \"\\FB84\";\n}\n\n.mdi-incognito:before {\n  content: \"\\F5F9\";\n}\n\n.mdi-infinity:before {\n  content: \"\\F6E3\";\n}\n\n.mdi-information:before {\n  content: \"\\F2FC\";\n}\n\n.mdi-information-outline:before {\n  content: \"\\F2FD\";\n}\n\n.mdi-information-variant:before {\n  content: \"\\F64E\";\n}\n\n.mdi-instagram:before {\n  content: \"\\F2FE\";\n}\n\n.mdi-instapaper:before {\n  content: \"\\F2FF\";\n}\n\n.mdi-internet-explorer:before {\n  content: \"\\F300\";\n}\n\n.mdi-invert-colors:before {\n  content: \"\\F301\";\n}\n\n.mdi-ip:before {\n  content: \"\\FA5E\";\n}\n\n.mdi-ip-network:before {\n  content: \"\\FA5F\";\n}\n\n.mdi-islam:before {\n  content: \"\\F978\";\n}\n\n.mdi-itunes:before {\n  content: \"\\F676\";\n}\n\n.mdi-jeepney:before {\n  content: \"\\F302\";\n}\n\n.mdi-jira:before {\n  content: \"\\F303\";\n}\n\n.mdi-jquery:before {\n  content: \"\\F87C\";\n}\n\n.mdi-jsfiddle:before {\n  content: \"\\F304\";\n}\n\n.mdi-json:before {\n  content: \"\\F626\";\n}\n\n.mdi-judaism:before {\n  content: \"\\F979\";\n}\n\n.mdi-karate:before {\n  content: \"\\F82B\";\n}\n\n.mdi-keg:before {\n  content: \"\\F305\";\n}\n\n.mdi-kettle:before {\n  content: \"\\F5FA\";\n}\n\n.mdi-key:before {\n  content: \"\\F306\";\n}\n\n.mdi-key-change:before {\n  content: \"\\F307\";\n}\n\n.mdi-key-minus:before {\n  content: \"\\F308\";\n}\n\n.mdi-key-plus:before {\n  content: \"\\F309\";\n}\n\n.mdi-key-remove:before {\n  content: \"\\F30A\";\n}\n\n.mdi-key-variant:before {\n  content: \"\\F30B\";\n}\n\n.mdi-keyboard:before {\n  content: \"\\F30C\";\n}\n\n.mdi-keyboard-backspace:before {\n  content: \"\\F30D\";\n}\n\n.mdi-keyboard-caps:before {\n  content: \"\\F30E\";\n}\n\n.mdi-keyboard-close:before {\n  content: \"\\F30F\";\n}\n\n.mdi-keyboard-off:before {\n  content: \"\\F310\";\n}\n\n.mdi-keyboard-outline:before {\n  content: \"\\F97A\";\n}\n\n.mdi-keyboard-return:before {\n  content: \"\\F311\";\n}\n\n.mdi-keyboard-settings:before {\n  content: \"\\F9F8\";\n}\n\n.mdi-keyboard-settings-outline:before {\n  content: \"\\F9F9\";\n}\n\n.mdi-keyboard-tab:before {\n  content: \"\\F312\";\n}\n\n.mdi-keyboard-variant:before {\n  content: \"\\F313\";\n}\n\n.mdi-kickstarter:before {\n  content: \"\\F744\";\n}\n\n.mdi-knife:before {\n  content: \"\\F9FA\";\n}\n\n.mdi-knife-military:before {\n  content: \"\\F9FB\";\n}\n\n.mdi-kodi:before {\n  content: \"\\F314\";\n}\n\n.mdi-label:before {\n  content: \"\\F315\";\n}\n\n.mdi-label-off:before {\n  content: \"\\FACA\";\n}\n\n.mdi-label-off-outline:before {\n  content: \"\\FACB\";\n}\n\n.mdi-label-outline:before {\n  content: \"\\F316\";\n}\n\n.mdi-label-variant:before {\n  content: \"\\FACC\";\n}\n\n.mdi-label-variant-outline:before {\n  content: \"\\FACD\";\n}\n\n.mdi-ladybug:before {\n  content: \"\\F82C\";\n}\n\n.mdi-lambda:before {\n  content: \"\\F627\";\n}\n\n.mdi-lamp:before {\n  content: \"\\F6B4\";\n}\n\n.mdi-lan:before {\n  content: \"\\F317\";\n}\n\n.mdi-lan-connect:before {\n  content: \"\\F318\";\n}\n\n.mdi-lan-disconnect:before {\n  content: \"\\F319\";\n}\n\n.mdi-lan-pending:before {\n  content: \"\\F31A\";\n}\n\n.mdi-language-c:before {\n  content: \"\\F671\";\n}\n\n.mdi-language-cpp:before {\n  content: \"\\F672\";\n}\n\n.mdi-language-csharp:before {\n  content: \"\\F31B\";\n}\n\n.mdi-language-css3:before {\n  content: \"\\F31C\";\n}\n\n.mdi-language-go:before {\n  content: \"\\F7D2\";\n}\n\n.mdi-language-html5:before {\n  content: \"\\F31D\";\n}\n\n.mdi-language-java:before {\n  content: \"\\FB1C\";\n}\n\n.mdi-language-javascript:before {\n  content: \"\\F31E\";\n}\n\n.mdi-language-lua:before {\n  content: \"\\F8B0\";\n}\n\n.mdi-language-php:before {\n  content: \"\\F31F\";\n}\n\n.mdi-language-python:before {\n  content: \"\\F320\";\n}\n\n.mdi-language-python-text:before {\n  content: \"\\F321\";\n}\n\n.mdi-language-r:before {\n  content: \"\\F7D3\";\n}\n\n.mdi-language-ruby-on-rails:before {\n  content: \"\\FACE\";\n}\n\n.mdi-language-swift:before {\n  content: \"\\F6E4\";\n}\n\n.mdi-language-typescript:before {\n  content: \"\\F6E5\";\n}\n\n.mdi-laptop:before {\n  content: \"\\F322\";\n}\n\n.mdi-laptop-chromebook:before {\n  content: \"\\F323\";\n}\n\n.mdi-laptop-mac:before {\n  content: \"\\F324\";\n}\n\n.mdi-laptop-off:before {\n  content: \"\\F6E6\";\n}\n\n.mdi-laptop-windows:before {\n  content: \"\\F325\";\n}\n\n.mdi-laravel:before {\n  content: \"\\FACF\";\n}\n\n.mdi-lastfm:before {\n  content: \"\\F326\";\n}\n\n.mdi-lastpass:before {\n  content: \"\\F446\";\n}\n\n.mdi-launch:before {\n  content: \"\\F327\";\n}\n\n.mdi-lava-lamp:before {\n  content: \"\\F7D4\";\n}\n\n.mdi-layers:before {\n  content: \"\\F328\";\n}\n\n.mdi-layers-off:before {\n  content: \"\\F329\";\n}\n\n.mdi-layers-off-outline:before {\n  content: \"\\F9FC\";\n}\n\n.mdi-layers-outline:before {\n  content: \"\\F9FD\";\n}\n\n.mdi-lead-pencil:before {\n  content: \"\\F64F\";\n}\n\n.mdi-leaf:before {\n  content: \"\\F32A\";\n}\n\n.mdi-led-off:before {\n  content: \"\\F32B\";\n}\n\n.mdi-led-on:before {\n  content: \"\\F32C\";\n}\n\n.mdi-led-outline:before {\n  content: \"\\F32D\";\n}\n\n.mdi-led-strip:before {\n  content: \"\\F7D5\";\n}\n\n.mdi-led-variant-off:before {\n  content: \"\\F32E\";\n}\n\n.mdi-led-variant-on:before {\n  content: \"\\F32F\";\n}\n\n.mdi-led-variant-outline:before {\n  content: \"\\F330\";\n}\n\n.mdi-less-than:before {\n  content: \"\\F97B\";\n}\n\n.mdi-less-than-or-equal:before {\n  content: \"\\F97C\";\n}\n\n.mdi-library:before {\n  content: \"\\F331\";\n}\n\n.mdi-library-books:before {\n  content: \"\\F332\";\n}\n\n.mdi-library-music:before {\n  content: \"\\F333\";\n}\n\n.mdi-library-plus:before {\n  content: \"\\F334\";\n}\n\n.mdi-library-shelves:before {\n  content: \"\\FB85\";\n}\n\n.mdi-lifebuoy:before {\n  content: \"\\F87D\";\n}\n\n.mdi-light-switch:before {\n  content: \"\\F97D\";\n}\n\n.mdi-lightbulb:before {\n  content: \"\\F335\";\n}\n\n.mdi-lightbulb-on:before {\n  content: \"\\F6E7\";\n}\n\n.mdi-lightbulb-on-outline:before {\n  content: \"\\F6E8\";\n}\n\n.mdi-lightbulb-outline:before {\n  content: \"\\F336\";\n}\n\n.mdi-lighthouse:before {\n  content: \"\\F9FE\";\n}\n\n.mdi-lighthouse-on:before {\n  content: \"\\F9FF\";\n}\n\n.mdi-link:before {\n  content: \"\\F337\";\n}\n\n.mdi-link-off:before {\n  content: \"\\F338\";\n}\n\n.mdi-link-variant:before {\n  content: \"\\F339\";\n}\n\n.mdi-link-variant-off:before {\n  content: \"\\F33A\";\n}\n\n.mdi-linkedin:before {\n  content: \"\\F33B\";\n}\n\n.mdi-linkedin-box:before {\n  content: \"\\F33C\";\n}\n\n.mdi-linux:before {\n  content: \"\\F33D\";\n}\n\n.mdi-linux-mint:before {\n  content: \"\\F8EC\";\n}\n\n.mdi-litecoin:before {\n  content: \"\\FA60\";\n}\n\n.mdi-loading:before {\n  content: \"\\F771\";\n}\n\n.mdi-lock:before {\n  content: \"\\F33E\";\n}\n\n.mdi-lock-alert:before {\n  content: \"\\F8ED\";\n}\n\n.mdi-lock-clock:before {\n  content: \"\\F97E\";\n}\n\n.mdi-lock-open:before {\n  content: \"\\F33F\";\n}\n\n.mdi-lock-open-outline:before {\n  content: \"\\F340\";\n}\n\n.mdi-lock-outline:before {\n  content: \"\\F341\";\n}\n\n.mdi-lock-pattern:before {\n  content: \"\\F6E9\";\n}\n\n.mdi-lock-plus:before {\n  content: \"\\F5FB\";\n}\n\n.mdi-lock-question:before {\n  content: \"\\F8EE\";\n}\n\n.mdi-lock-reset:before {\n  content: \"\\F772\";\n}\n\n.mdi-lock-smart:before {\n  content: \"\\F8B1\";\n}\n\n.mdi-locker:before {\n  content: \"\\F7D6\";\n}\n\n.mdi-locker-multiple:before {\n  content: \"\\F7D7\";\n}\n\n.mdi-login:before {\n  content: \"\\F342\";\n}\n\n.mdi-login-variant:before {\n  content: \"\\F5FC\";\n}\n\n.mdi-logout:before {\n  content: \"\\F343\";\n}\n\n.mdi-logout-variant:before {\n  content: \"\\F5FD\";\n}\n\n.mdi-looks:before {\n  content: \"\\F344\";\n}\n\n.mdi-loop:before {\n  content: \"\\F6EA\";\n}\n\n.mdi-loupe:before {\n  content: \"\\F345\";\n}\n\n.mdi-lumx:before {\n  content: \"\\F346\";\n}\n\n.mdi-lyft:before {\n  content: \"\\FB1D\";\n}\n\n.mdi-magnet:before {\n  content: \"\\F347\";\n}\n\n.mdi-magnet-on:before {\n  content: \"\\F348\";\n}\n\n.mdi-magnify:before {\n  content: \"\\F349\";\n}\n\n.mdi-magnify-close:before {\n  content: \"\\F97F\";\n}\n\n.mdi-magnify-minus:before {\n  content: \"\\F34A\";\n}\n\n.mdi-magnify-minus-cursor:before {\n  content: \"\\FA61\";\n}\n\n.mdi-magnify-minus-outline:before {\n  content: \"\\F6EB\";\n}\n\n.mdi-magnify-plus:before {\n  content: \"\\F34B\";\n}\n\n.mdi-magnify-plus-cursor:before {\n  content: \"\\FA62\";\n}\n\n.mdi-magnify-plus-outline:before {\n  content: \"\\F6EC\";\n}\n\n.mdi-mail-ru:before {\n  content: \"\\F34C\";\n}\n\n.mdi-mailbox:before {\n  content: \"\\F6ED\";\n}\n\n.mdi-map:before {\n  content: \"\\F34D\";\n}\n\n.mdi-map-legend:before {\n  content: \"\\FA00\";\n}\n\n.mdi-map-marker:before {\n  content: \"\\F34E\";\n}\n\n.mdi-map-marker-circle:before {\n  content: \"\\F34F\";\n}\n\n.mdi-map-marker-distance:before {\n  content: \"\\F8EF\";\n}\n\n.mdi-map-marker-minus:before {\n  content: \"\\F650\";\n}\n\n.mdi-map-marker-multiple:before {\n  content: \"\\F350\";\n}\n\n.mdi-map-marker-off:before {\n  content: \"\\F351\";\n}\n\n.mdi-map-marker-outline:before {\n  content: \"\\F7D8\";\n}\n\n.mdi-map-marker-plus:before {\n  content: \"\\F651\";\n}\n\n.mdi-map-marker-radius:before {\n  content: \"\\F352\";\n}\n\n.mdi-map-minus:before {\n  content: \"\\F980\";\n}\n\n.mdi-map-outline:before {\n  content: \"\\F981\";\n}\n\n.mdi-map-plus:before {\n  content: \"\\F982\";\n}\n\n.mdi-map-search:before {\n  content: \"\\F983\";\n}\n\n.mdi-map-search-outline:before {\n  content: \"\\F984\";\n}\n\n.mdi-mapbox:before {\n  content: \"\\FB86\";\n}\n\n.mdi-margin:before {\n  content: \"\\F353\";\n}\n\n.mdi-markdown:before {\n  content: \"\\F354\";\n}\n\n.mdi-marker:before {\n  content: \"\\F652\";\n}\n\n.mdi-marker-check:before {\n  content: \"\\F355\";\n}\n\n.mdi-mastodon:before {\n  content: \"\\FAD0\";\n}\n\n.mdi-mastodon-variant:before {\n  content: \"\\FAD1\";\n}\n\n.mdi-material-design:before {\n  content: \"\\F985\";\n}\n\n.mdi-material-ui:before {\n  content: \"\\F357\";\n}\n\n.mdi-math-compass:before {\n  content: \"\\F358\";\n}\n\n.mdi-matrix:before {\n  content: \"\\F628\";\n}\n\n.mdi-maxcdn:before {\n  content: \"\\F359\";\n}\n\n.mdi-medal:before {\n  content: \"\\F986\";\n}\n\n.mdi-medical-bag:before {\n  content: \"\\F6EE\";\n}\n\n.mdi-medium:before {\n  content: \"\\F35A\";\n}\n\n.mdi-meetup:before {\n  content: \"\\FAD2\";\n}\n\n.mdi-memory:before {\n  content: \"\\F35B\";\n}\n\n.mdi-menu:before {\n  content: \"\\F35C\";\n}\n\n.mdi-menu-down:before {\n  content: \"\\F35D\";\n}\n\n.mdi-menu-down-outline:before {\n  content: \"\\F6B5\";\n}\n\n.mdi-menu-left:before {\n  content: \"\\F35E\";\n}\n\n.mdi-menu-left-outline:before {\n  content: \"\\FA01\";\n}\n\n.mdi-menu-open:before {\n  content: \"\\FB87\";\n}\n\n.mdi-menu-right:before {\n  content: \"\\F35F\";\n}\n\n.mdi-menu-right-outline:before {\n  content: \"\\FA02\";\n}\n\n.mdi-menu-swap:before {\n  content: \"\\FA63\";\n}\n\n.mdi-menu-swap-outline:before {\n  content: \"\\FA64\";\n}\n\n.mdi-menu-up:before {\n  content: \"\\F360\";\n}\n\n.mdi-menu-up-outline:before {\n  content: \"\\F6B6\";\n}\n\n.mdi-message:before {\n  content: \"\\F361\";\n}\n\n.mdi-message-alert:before {\n  content: \"\\F362\";\n}\n\n.mdi-message-alert-outline:before {\n  content: \"\\FA03\";\n}\n\n.mdi-message-bulleted:before {\n  content: \"\\F6A1\";\n}\n\n.mdi-message-bulleted-off:before {\n  content: \"\\F6A2\";\n}\n\n.mdi-message-draw:before {\n  content: \"\\F363\";\n}\n\n.mdi-message-image:before {\n  content: \"\\F364\";\n}\n\n.mdi-message-outline:before {\n  content: \"\\F365\";\n}\n\n.mdi-message-plus:before {\n  content: \"\\F653\";\n}\n\n.mdi-message-processing:before {\n  content: \"\\F366\";\n}\n\n.mdi-message-reply:before {\n  content: \"\\F367\";\n}\n\n.mdi-message-reply-text:before {\n  content: \"\\F368\";\n}\n\n.mdi-message-settings:before {\n  content: \"\\F6EF\";\n}\n\n.mdi-message-settings-variant:before {\n  content: \"\\F6F0\";\n}\n\n.mdi-message-text:before {\n  content: \"\\F369\";\n}\n\n.mdi-message-text-outline:before {\n  content: \"\\F36A\";\n}\n\n.mdi-message-video:before {\n  content: \"\\F36B\";\n}\n\n.mdi-meteor:before {\n  content: \"\\F629\";\n}\n\n.mdi-metronome:before {\n  content: \"\\F7D9\";\n}\n\n.mdi-metronome-tick:before {\n  content: \"\\F7DA\";\n}\n\n.mdi-micro-sd:before {\n  content: \"\\F7DB\";\n}\n\n.mdi-microphone:before {\n  content: \"\\F36C\";\n}\n\n.mdi-microphone-minus:before {\n  content: \"\\F8B2\";\n}\n\n.mdi-microphone-off:before {\n  content: \"\\F36D\";\n}\n\n.mdi-microphone-outline:before {\n  content: \"\\F36E\";\n}\n\n.mdi-microphone-plus:before {\n  content: \"\\F8B3\";\n}\n\n.mdi-microphone-settings:before {\n  content: \"\\F36F\";\n}\n\n.mdi-microphone-variant:before {\n  content: \"\\F370\";\n}\n\n.mdi-microphone-variant-off:before {\n  content: \"\\F371\";\n}\n\n.mdi-microscope:before {\n  content: \"\\F654\";\n}\n\n.mdi-microsoft:before {\n  content: \"\\F372\";\n}\n\n.mdi-microsoft-dynamics:before {\n  content: \"\\F987\";\n}\n\n.mdi-midi:before {\n  content: \"\\F8F0\";\n}\n\n.mdi-midi-port:before {\n  content: \"\\F8F1\";\n}\n\n.mdi-minecraft:before {\n  content: \"\\F373\";\n}\n\n.mdi-mini-sd:before {\n  content: \"\\FA04\";\n}\n\n.mdi-minidisc:before {\n  content: \"\\FA05\";\n}\n\n.mdi-minus:before {\n  content: \"\\F374\";\n}\n\n.mdi-minus-box:before {\n  content: \"\\F375\";\n}\n\n.mdi-minus-box-outline:before {\n  content: \"\\F6F1\";\n}\n\n.mdi-minus-circle:before {\n  content: \"\\F376\";\n}\n\n.mdi-minus-circle-outline:before {\n  content: \"\\F377\";\n}\n\n.mdi-minus-network:before {\n  content: \"\\F378\";\n}\n\n.mdi-mixcloud:before {\n  content: \"\\F62A\";\n}\n\n.mdi-mixed-reality:before {\n  content: \"\\F87E\";\n}\n\n.mdi-mixer:before {\n  content: \"\\F7DC\";\n}\n\n.mdi-molecule:before {\n  content: \"\\FB88\";\n}\n\n.mdi-monitor:before {\n  content: \"\\F379\";\n}\n\n.mdi-monitor-cellphone:before {\n  content: \"\\F988\";\n}\n\n.mdi-monitor-cellphone-star:before {\n  content: \"\\F989\";\n}\n\n.mdi-monitor-dashboard:before {\n  content: \"\\FA06\";\n}\n\n.mdi-monitor-multiple:before {\n  content: \"\\F37A\";\n}\n\n.mdi-more:before {\n  content: \"\\F37B\";\n}\n\n.mdi-motorbike:before {\n  content: \"\\F37C\";\n}\n\n.mdi-mouse:before {\n  content: \"\\F37D\";\n}\n\n.mdi-mouse-bluetooth:before {\n  content: \"\\F98A\";\n}\n\n.mdi-mouse-off:before {\n  content: \"\\F37E\";\n}\n\n.mdi-mouse-variant:before {\n  content: \"\\F37F\";\n}\n\n.mdi-mouse-variant-off:before {\n  content: \"\\F380\";\n}\n\n.mdi-move-resize:before {\n  content: \"\\F655\";\n}\n\n.mdi-move-resize-variant:before {\n  content: \"\\F656\";\n}\n\n.mdi-movie:before {\n  content: \"\\F381\";\n}\n\n.mdi-movie-roll:before {\n  content: \"\\F7DD\";\n}\n\n.mdi-muffin:before {\n  content: \"\\F98B\";\n}\n\n.mdi-multiplication:before {\n  content: \"\\F382\";\n}\n\n.mdi-multiplication-box:before {\n  content: \"\\F383\";\n}\n\n.mdi-mushroom:before {\n  content: \"\\F7DE\";\n}\n\n.mdi-mushroom-outline:before {\n  content: \"\\F7DF\";\n}\n\n.mdi-music:before {\n  content: \"\\F759\";\n}\n\n.mdi-music-box:before {\n  content: \"\\F384\";\n}\n\n.mdi-music-box-outline:before {\n  content: \"\\F385\";\n}\n\n.mdi-music-circle:before {\n  content: \"\\F386\";\n}\n\n.mdi-music-circle-outline:before {\n  content: \"\\FAD3\";\n}\n\n.mdi-music-note:before {\n  content: \"\\F387\";\n}\n\n.mdi-music-note-bluetooth:before {\n  content: \"\\F5FE\";\n}\n\n.mdi-music-note-bluetooth-off:before {\n  content: \"\\F5FF\";\n}\n\n.mdi-music-note-eighth:before {\n  content: \"\\F388\";\n}\n\n.mdi-music-note-half:before {\n  content: \"\\F389\";\n}\n\n.mdi-music-note-off:before {\n  content: \"\\F38A\";\n}\n\n.mdi-music-note-quarter:before {\n  content: \"\\F38B\";\n}\n\n.mdi-music-note-sixteenth:before {\n  content: \"\\F38C\";\n}\n\n.mdi-music-note-whole:before {\n  content: \"\\F38D\";\n}\n\n.mdi-music-off:before {\n  content: \"\\F75A\";\n}\n\n.mdi-nas:before {\n  content: \"\\F8F2\";\n}\n\n.mdi-nativescript:before {\n  content: \"\\F87F\";\n}\n\n.mdi-nature:before {\n  content: \"\\F38E\";\n}\n\n.mdi-nature-people:before {\n  content: \"\\F38F\";\n}\n\n.mdi-navigation:before {\n  content: \"\\F390\";\n}\n\n.mdi-near-me:before {\n  content: \"\\F5CD\";\n}\n\n.mdi-needle:before {\n  content: \"\\F391\";\n}\n\n.mdi-netflix:before {\n  content: \"\\F745\";\n}\n\n.mdi-network:before {\n  content: \"\\F6F2\";\n}\n\n.mdi-network-strength-1:before {\n  content: \"\\F8F3\";\n}\n\n.mdi-network-strength-1-alert:before {\n  content: \"\\F8F4\";\n}\n\n.mdi-network-strength-2:before {\n  content: \"\\F8F5\";\n}\n\n.mdi-network-strength-2-alert:before {\n  content: \"\\F8F6\";\n}\n\n.mdi-network-strength-3:before {\n  content: \"\\F8F7\";\n}\n\n.mdi-network-strength-3-alert:before {\n  content: \"\\F8F8\";\n}\n\n.mdi-network-strength-4:before {\n  content: \"\\F8F9\";\n}\n\n.mdi-network-strength-4-alert:before {\n  content: \"\\F8FA\";\n}\n\n.mdi-network-strength-off:before {\n  content: \"\\F8FB\";\n}\n\n.mdi-network-strength-off-outline:before {\n  content: \"\\F8FC\";\n}\n\n.mdi-network-strength-outline:before {\n  content: \"\\F8FD\";\n}\n\n.mdi-new-box:before {\n  content: \"\\F394\";\n}\n\n.mdi-newspaper:before {\n  content: \"\\F395\";\n}\n\n.mdi-nfc:before {\n  content: \"\\F396\";\n}\n\n.mdi-nfc-tap:before {\n  content: \"\\F397\";\n}\n\n.mdi-nfc-variant:before {\n  content: \"\\F398\";\n}\n\n.mdi-ninja:before {\n  content: \"\\F773\";\n}\n\n.mdi-nintendo-switch:before {\n  content: \"\\F7E0\";\n}\n\n.mdi-nodejs:before {\n  content: \"\\F399\";\n}\n\n.mdi-not-equal:before {\n  content: \"\\F98C\";\n}\n\n.mdi-not-equal-variant:before {\n  content: \"\\F98D\";\n}\n\n.mdi-note:before {\n  content: \"\\F39A\";\n}\n\n.mdi-note-multiple:before {\n  content: \"\\F6B7\";\n}\n\n.mdi-note-multiple-outline:before {\n  content: \"\\F6B8\";\n}\n\n.mdi-note-outline:before {\n  content: \"\\F39B\";\n}\n\n.mdi-note-plus:before {\n  content: \"\\F39C\";\n}\n\n.mdi-note-plus-outline:before {\n  content: \"\\F39D\";\n}\n\n.mdi-note-text:before {\n  content: \"\\F39E\";\n}\n\n.mdi-notebook:before {\n  content: \"\\F82D\";\n}\n\n.mdi-notification-clear-all:before {\n  content: \"\\F39F\";\n}\n\n.mdi-npm:before {\n  content: \"\\F6F6\";\n}\n\n.mdi-npm-variant:before {\n  content: \"\\F98E\";\n}\n\n.mdi-npm-variant-outline:before {\n  content: \"\\F98F\";\n}\n\n.mdi-nuke:before {\n  content: \"\\F6A3\";\n}\n\n.mdi-null:before {\n  content: \"\\F7E1\";\n}\n\n.mdi-numeric:before {\n  content: \"\\F3A0\";\n}\n\n.mdi-numeric-0:before {\n  content: \"0\";\n}\n\n.mdi-numeric-0-box:before {\n  content: \"\\F3A1\";\n}\n\n.mdi-numeric-0-box-multiple-outline:before {\n  content: \"\\F3A2\";\n}\n\n.mdi-numeric-0-box-outline:before {\n  content: \"\\F3A3\";\n}\n\n.mdi-numeric-1:before {\n  content: \"1\";\n}\n\n.mdi-numeric-1-box:before {\n  content: \"\\F3A4\";\n}\n\n.mdi-numeric-1-box-multiple-outline:before {\n  content: \"\\F3A5\";\n}\n\n.mdi-numeric-1-box-outline:before {\n  content: \"\\F3A6\";\n}\n\n.mdi-numeric-2:before {\n  content: \"2\";\n}\n\n.mdi-numeric-2-box:before {\n  content: \"\\F3A7\";\n}\n\n.mdi-numeric-2-box-multiple-outline:before {\n  content: \"\\F3A8\";\n}\n\n.mdi-numeric-2-box-outline:before {\n  content: \"\\F3A9\";\n}\n\n.mdi-numeric-3:before {\n  content: \"3\";\n}\n\n.mdi-numeric-3-box:before {\n  content: \"\\F3AA\";\n}\n\n.mdi-numeric-3-box-multiple-outline:before {\n  content: \"\\F3AB\";\n}\n\n.mdi-numeric-3-box-outline:before {\n  content: \"\\F3AC\";\n}\n\n.mdi-numeric-4:before {\n  content: \"4\";\n}\n\n.mdi-numeric-4-box:before {\n  content: \"\\F3AD\";\n}\n\n.mdi-numeric-4-box-multiple-outline:before {\n  content: \"\\F3AE\";\n}\n\n.mdi-numeric-4-box-outline:before {\n  content: \"\\F3AF\";\n}\n\n.mdi-numeric-5:before {\n  content: \"5\";\n}\n\n.mdi-numeric-5-box:before {\n  content: \"\\F3B0\";\n}\n\n.mdi-numeric-5-box-multiple-outline:before {\n  content: \"\\F3B1\";\n}\n\n.mdi-numeric-5-box-outline:before {\n  content: \"\\F3B2\";\n}\n\n.mdi-numeric-6:before {\n  content: \"6\";\n}\n\n.mdi-numeric-6-box:before {\n  content: \"\\F3B3\";\n}\n\n.mdi-numeric-6-box-multiple-outline:before {\n  content: \"\\F3B4\";\n}\n\n.mdi-numeric-6-box-outline:before {\n  content: \"\\F3B5\";\n}\n\n.mdi-numeric-7:before {\n  content: \"7\";\n}\n\n.mdi-numeric-7-box:before {\n  content: \"\\F3B6\";\n}\n\n.mdi-numeric-7-box-multiple-outline:before {\n  content: \"\\F3B7\";\n}\n\n.mdi-numeric-7-box-outline:before {\n  content: \"\\F3B8\";\n}\n\n.mdi-numeric-8:before {\n  content: \"8\";\n}\n\n.mdi-numeric-8-box:before {\n  content: \"\\F3B9\";\n}\n\n.mdi-numeric-8-box-multiple-outline:before {\n  content: \"\\F3BA\";\n}\n\n.mdi-numeric-8-box-outline:before {\n  content: \"\\F3BB\";\n}\n\n.mdi-numeric-9:before {\n  content: \"9\";\n}\n\n.mdi-numeric-9-box:before {\n  content: \"\\F3BC\";\n}\n\n.mdi-numeric-9-box-multiple-outline:before {\n  content: \"\\F3BD\";\n}\n\n.mdi-numeric-9-box-outline:before {\n  content: \"\\F3BE\";\n}\n\n.mdi-numeric-9-plus-box:before {\n  content: \"\\F3BF\";\n}\n\n.mdi-numeric-9-plus-box-multiple-outline:before {\n  content: \"\\F3C0\";\n}\n\n.mdi-numeric-9-plus-box-outline:before {\n  content: \"\\F3C1\";\n}\n\n.mdi-nut:before {\n  content: \"\\F6F7\";\n}\n\n.mdi-nutrition:before {\n  content: \"\\F3C2\";\n}\n\n.mdi-oar:before {\n  content: \"\\F67B\";\n}\n\n.mdi-octagon:before {\n  content: \"\\F3C3\";\n}\n\n.mdi-octagon-outline:before {\n  content: \"\\F3C4\";\n}\n\n.mdi-octagram:before {\n  content: \"\\F6F8\";\n}\n\n.mdi-octagram-outline:before {\n  content: \"\\F774\";\n}\n\n.mdi-odnoklassniki:before {\n  content: \"\\F3C5\";\n}\n\n.mdi-office:before {\n  content: \"\\F3C6\";\n}\n\n.mdi-office-building:before {\n  content: \"\\F990\";\n}\n\n.mdi-oil:before {\n  content: \"\\F3C7\";\n}\n\n.mdi-oil-temperature:before {\n  content: \"\\F3C8\";\n}\n\n.mdi-omega:before {\n  content: \"\\F3C9\";\n}\n\n.mdi-one-up:before {\n  content: \"\\FB89\";\n}\n\n.mdi-onedrive:before {\n  content: \"\\F3CA\";\n}\n\n.mdi-onenote:before {\n  content: \"\\F746\";\n}\n\n.mdi-onepassword:before {\n  content: \"\\F880\";\n}\n\n.mdi-opacity:before {\n  content: \"\\F5CC\";\n}\n\n.mdi-open-in-app:before {\n  content: \"\\F3CB\";\n}\n\n.mdi-open-in-new:before {\n  content: \"\\F3CC\";\n}\n\n.mdi-open-source-initiative:before {\n  content: \"\\FB8A\";\n}\n\n.mdi-openid:before {\n  content: \"\\F3CD\";\n}\n\n.mdi-opera:before {\n  content: \"\\F3CE\";\n}\n\n.mdi-orbit:before {\n  content: \"\\F018\";\n}\n\n.mdi-origin:before {\n  content: \"\\FB2B\";\n}\n\n.mdi-ornament:before {\n  content: \"\\F3CF\";\n}\n\n.mdi-ornament-variant:before {\n  content: \"\\F3D0\";\n}\n\n.mdi-owl:before {\n  content: \"\\F3D2\";\n}\n\n.mdi-pac-man:before {\n  content: \"\\FB8B\";\n}\n\n.mdi-package:before {\n  content: \"\\F3D3\";\n}\n\n.mdi-package-down:before {\n  content: \"\\F3D4\";\n}\n\n.mdi-package-up:before {\n  content: \"\\F3D5\";\n}\n\n.mdi-package-variant:before {\n  content: \"\\F3D6\";\n}\n\n.mdi-package-variant-closed:before {\n  content: \"\\F3D7\";\n}\n\n.mdi-page-first:before {\n  content: \"\\F600\";\n}\n\n.mdi-page-last:before {\n  content: \"\\F601\";\n}\n\n.mdi-page-layout-body:before {\n  content: \"\\F6F9\";\n}\n\n.mdi-page-layout-footer:before {\n  content: \"\\F6FA\";\n}\n\n.mdi-page-layout-header:before {\n  content: \"\\F6FB\";\n}\n\n.mdi-page-layout-sidebar-left:before {\n  content: \"\\F6FC\";\n}\n\n.mdi-page-layout-sidebar-right:before {\n  content: \"\\F6FD\";\n}\n\n.mdi-page-next:before {\n  content: \"\\FB8C\";\n}\n\n.mdi-page-next-outline:before {\n  content: \"\\FB8D\";\n}\n\n.mdi-page-previous:before {\n  content: \"\\FB8E\";\n}\n\n.mdi-page-previous-outline:before {\n  content: \"\\FB8F\";\n}\n\n.mdi-palette:before {\n  content: \"\\F3D8\";\n}\n\n.mdi-palette-advanced:before {\n  content: \"\\F3D9\";\n}\n\n.mdi-palette-swatch:before {\n  content: \"\\F8B4\";\n}\n\n.mdi-pan:before {\n  content: \"\\FB90\";\n}\n\n.mdi-pan-bottom-left:before {\n  content: \"\\FB91\";\n}\n\n.mdi-pan-bottom-right:before {\n  content: \"\\FB92\";\n}\n\n.mdi-pan-down:before {\n  content: \"\\FB93\";\n}\n\n.mdi-pan-horizontal:before {\n  content: \"\\FB94\";\n}\n\n.mdi-pan-left:before {\n  content: \"\\FB95\";\n}\n\n.mdi-pan-right:before {\n  content: \"\\FB96\";\n}\n\n.mdi-pan-top-left:before {\n  content: \"\\FB97\";\n}\n\n.mdi-pan-top-right:before {\n  content: \"\\FB98\";\n}\n\n.mdi-pan-up:before {\n  content: \"\\FB99\";\n}\n\n.mdi-pan-vertical:before {\n  content: \"\\FB9A\";\n}\n\n.mdi-panda:before {\n  content: \"\\F3DA\";\n}\n\n.mdi-pandora:before {\n  content: \"\\F3DB\";\n}\n\n.mdi-panorama:before {\n  content: \"\\F3DC\";\n}\n\n.mdi-panorama-fisheye:before {\n  content: \"\\F3DD\";\n}\n\n.mdi-panorama-horizontal:before {\n  content: \"\\F3DE\";\n}\n\n.mdi-panorama-vertical:before {\n  content: \"\\F3DF\";\n}\n\n.mdi-panorama-wide-angle:before {\n  content: \"\\F3E0\";\n}\n\n.mdi-paper-cut-vertical:before {\n  content: \"\\F3E1\";\n}\n\n.mdi-paperclip:before {\n  content: \"\\F3E2\";\n}\n\n.mdi-parking:before {\n  content: \"\\F3E3\";\n}\n\n.mdi-passport:before {\n  content: \"\\F7E2\";\n}\n\n.mdi-patreon:before {\n  content: \"\\F881\";\n}\n\n.mdi-pause:before {\n  content: \"\\F3E4\";\n}\n\n.mdi-pause-circle:before {\n  content: \"\\F3E5\";\n}\n\n.mdi-pause-circle-outline:before {\n  content: \"\\F3E6\";\n}\n\n.mdi-pause-octagon:before {\n  content: \"\\F3E7\";\n}\n\n.mdi-pause-octagon-outline:before {\n  content: \"\\F3E8\";\n}\n\n.mdi-paw:before {\n  content: \"\\F3E9\";\n}\n\n.mdi-paw-off:before {\n  content: \"\\F657\";\n}\n\n.mdi-paypal:before {\n  content: \"\\F882\";\n}\n\n.mdi-peace:before {\n  content: \"\\F883\";\n}\n\n.mdi-pen:before {\n  content: \"\\F3EA\";\n}\n\n.mdi-pencil:before {\n  content: \"\\F3EB\";\n}\n\n.mdi-pencil-box:before {\n  content: \"\\F3EC\";\n}\n\n.mdi-pencil-box-outline:before {\n  content: \"\\F3ED\";\n}\n\n.mdi-pencil-circle:before {\n  content: \"\\F6FE\";\n}\n\n.mdi-pencil-circle-outline:before {\n  content: \"\\F775\";\n}\n\n.mdi-pencil-lock:before {\n  content: \"\\F3EE\";\n}\n\n.mdi-pencil-off:before {\n  content: \"\\F3EF\";\n}\n\n.mdi-pentagon:before {\n  content: \"\\F6FF\";\n}\n\n.mdi-pentagon-outline:before {\n  content: \"\\F700\";\n}\n\n.mdi-percent:before {\n  content: \"\\F3F0\";\n}\n\n.mdi-periodic-table:before {\n  content: \"\\F8B5\";\n}\n\n.mdi-periodic-table-co2:before {\n  content: \"\\F7E3\";\n}\n\n.mdi-periscope:before {\n  content: \"\\F747\";\n}\n\n.mdi-pharmacy:before {\n  content: \"\\F3F1\";\n}\n\n.mdi-phone:before {\n  content: \"\\F3F2\";\n}\n\n.mdi-phone-bluetooth:before {\n  content: \"\\F3F3\";\n}\n\n.mdi-phone-classic:before {\n  content: \"\\F602\";\n}\n\n.mdi-phone-forward:before {\n  content: \"\\F3F4\";\n}\n\n.mdi-phone-hangup:before {\n  content: \"\\F3F5\";\n}\n\n.mdi-phone-in-talk:before {\n  content: \"\\F3F6\";\n}\n\n.mdi-phone-incoming:before {\n  content: \"\\F3F7\";\n}\n\n.mdi-phone-lock:before {\n  content: \"\\F3F8\";\n}\n\n.mdi-phone-log:before {\n  content: \"\\F3F9\";\n}\n\n.mdi-phone-minus:before {\n  content: \"\\F658\";\n}\n\n.mdi-phone-missed:before {\n  content: \"\\F3FA\";\n}\n\n.mdi-phone-outgoing:before {\n  content: \"\\F3FB\";\n}\n\n.mdi-phone-paused:before {\n  content: \"\\F3FC\";\n}\n\n.mdi-phone-plus:before {\n  content: \"\\F659\";\n}\n\n.mdi-phone-return:before {\n  content: \"\\F82E\";\n}\n\n.mdi-phone-rotate-landscape:before {\n  content: \"\\F884\";\n}\n\n.mdi-phone-rotate-portrait:before {\n  content: \"\\F885\";\n}\n\n.mdi-phone-settings:before {\n  content: \"\\F3FD\";\n}\n\n.mdi-phone-voip:before {\n  content: \"\\F3FE\";\n}\n\n.mdi-pi:before {\n  content: \"\\F3FF\";\n}\n\n.mdi-pi-box:before {\n  content: \"\\F400\";\n}\n\n.mdi-piano:before {\n  content: \"\\F67C\";\n}\n\n.mdi-pickaxe:before {\n  content: \"\\F8B6\";\n}\n\n.mdi-pier:before {\n  content: \"\\F886\";\n}\n\n.mdi-pier-crane:before {\n  content: \"\\F887\";\n}\n\n.mdi-pig:before {\n  content: \"\\F401\";\n}\n\n.mdi-pill:before {\n  content: \"\\F402\";\n}\n\n.mdi-pillar:before {\n  content: \"\\F701\";\n}\n\n.mdi-pin:before {\n  content: \"\\F403\";\n}\n\n.mdi-pin-off:before {\n  content: \"\\F404\";\n}\n\n.mdi-pin-off-outline:before {\n  content: \"\\F92F\";\n}\n\n.mdi-pin-outline:before {\n  content: \"\\F930\";\n}\n\n.mdi-pine-tree:before {\n  content: \"\\F405\";\n}\n\n.mdi-pine-tree-box:before {\n  content: \"\\F406\";\n}\n\n.mdi-pinterest:before {\n  content: \"\\F407\";\n}\n\n.mdi-pinterest-box:before {\n  content: \"\\F408\";\n}\n\n.mdi-pinwheel:before {\n  content: \"\\FAD4\";\n}\n\n.mdi-pinwheel-outline:before {\n  content: \"\\FAD5\";\n}\n\n.mdi-pipe:before {\n  content: \"\\F7E4\";\n}\n\n.mdi-pipe-disconnected:before {\n  content: \"\\F7E5\";\n}\n\n.mdi-pipe-leak:before {\n  content: \"\\F888\";\n}\n\n.mdi-pirate:before {\n  content: \"\\FA07\";\n}\n\n.mdi-pistol:before {\n  content: \"\\F702\";\n}\n\n.mdi-piston:before {\n  content: \"\\F889\";\n}\n\n.mdi-pizza:before {\n  content: \"\\F409\";\n}\n\n.mdi-plane-shield:before {\n  content: \"\\F6BA\";\n}\n\n.mdi-play:before {\n  content: \"\\F40A\";\n}\n\n.mdi-play-box-outline:before {\n  content: \"\\F40B\";\n}\n\n.mdi-play-circle:before {\n  content: \"\\F40C\";\n}\n\n.mdi-play-circle-outline:before {\n  content: \"\\F40D\";\n}\n\n.mdi-play-network:before {\n  content: \"\\F88A\";\n}\n\n.mdi-play-pause:before {\n  content: \"\\F40E\";\n}\n\n.mdi-play-protected-content:before {\n  content: \"\\F40F\";\n}\n\n.mdi-play-speed:before {\n  content: \"\\F8FE\";\n}\n\n.mdi-playlist-check:before {\n  content: \"\\F5C7\";\n}\n\n.mdi-playlist-edit:before {\n  content: \"\\F8FF\";\n}\n\n.mdi-playlist-minus:before {\n  content: \"\\F410\";\n}\n\n.mdi-playlist-play:before {\n  content: \"\\F411\";\n}\n\n.mdi-playlist-plus:before {\n  content: \"\\F412\";\n}\n\n.mdi-playlist-remove:before {\n  content: \"\\F413\";\n}\n\n.mdi-playstation:before {\n  content: \"\\F414\";\n}\n\n.mdi-plex:before {\n  content: \"\\F6B9\";\n}\n\n.mdi-plus:before {\n  content: \"\\F415\";\n}\n\n.mdi-plus-box:before {\n  content: \"\\F416\";\n}\n\n.mdi-plus-box-outline:before {\n  content: \"\\F703\";\n}\n\n.mdi-plus-circle:before {\n  content: \"\\F417\";\n}\n\n.mdi-plus-circle-multiple-outline:before {\n  content: \"\\F418\";\n}\n\n.mdi-plus-circle-outline:before {\n  content: \"\\F419\";\n}\n\n.mdi-plus-minus:before {\n  content: \"\\F991\";\n}\n\n.mdi-plus-minus-box:before {\n  content: \"\\F992\";\n}\n\n.mdi-plus-network:before {\n  content: \"\\F41A\";\n}\n\n.mdi-plus-one:before {\n  content: \"\\F41B\";\n}\n\n.mdi-plus-outline:before {\n  content: \"\\F704\";\n}\n\n.mdi-pocket:before {\n  content: \"\\F41C\";\n}\n\n.mdi-podcast:before {\n  content: \"\\F993\";\n}\n\n.mdi-pokeball:before {\n  content: \"\\F41D\";\n}\n\n.mdi-pokemon-go:before {\n  content: \"\\FA08\";\n}\n\n.mdi-poker-chip:before {\n  content: \"\\F82F\";\n}\n\n.mdi-polaroid:before {\n  content: \"\\F41E\";\n}\n\n.mdi-poll:before {\n  content: \"\\F41F\";\n}\n\n.mdi-poll-box:before {\n  content: \"\\F420\";\n}\n\n.mdi-polymer:before {\n  content: \"\\F421\";\n}\n\n.mdi-pool:before {\n  content: \"\\F606\";\n}\n\n.mdi-popcorn:before {\n  content: \"\\F422\";\n}\n\n.mdi-pot:before {\n  content: \"\\F65A\";\n}\n\n.mdi-pot-mix:before {\n  content: \"\\F65B\";\n}\n\n.mdi-pound:before {\n  content: \"\\F423\";\n}\n\n.mdi-pound-box:before {\n  content: \"\\F424\";\n}\n\n.mdi-power:before {\n  content: \"\\F425\";\n}\n\n.mdi-power-cycle:before {\n  content: \"\\F900\";\n}\n\n.mdi-power-off:before {\n  content: \"\\F901\";\n}\n\n.mdi-power-on:before {\n  content: \"\\F902\";\n}\n\n.mdi-power-plug:before {\n  content: \"\\F6A4\";\n}\n\n.mdi-power-plug-off:before {\n  content: \"\\F6A5\";\n}\n\n.mdi-power-settings:before {\n  content: \"\\F426\";\n}\n\n.mdi-power-sleep:before {\n  content: \"\\F903\";\n}\n\n.mdi-power-socket:before {\n  content: \"\\F427\";\n}\n\n.mdi-power-socket-au:before {\n  content: \"\\F904\";\n}\n\n.mdi-power-socket-eu:before {\n  content: \"\\F7E6\";\n}\n\n.mdi-power-socket-uk:before {\n  content: \"\\F7E7\";\n}\n\n.mdi-power-socket-us:before {\n  content: \"\\F7E8\";\n}\n\n.mdi-power-standby:before {\n  content: \"\\F905\";\n}\n\n.mdi-powershell:before {\n  content: \"\\FA09\";\n}\n\n.mdi-prescription:before {\n  content: \"\\F705\";\n}\n\n.mdi-presentation:before {\n  content: \"\\F428\";\n}\n\n.mdi-presentation-play:before {\n  content: \"\\F429\";\n}\n\n.mdi-printer:before {\n  content: \"\\F42A\";\n}\n\n.mdi-printer-3d:before {\n  content: \"\\F42B\";\n}\n\n.mdi-printer-alert:before {\n  content: \"\\F42C\";\n}\n\n.mdi-printer-settings:before {\n  content: \"\\F706\";\n}\n\n.mdi-printer-wireless:before {\n  content: \"\\FA0A\";\n}\n\n.mdi-priority-high:before {\n  content: \"\\F603\";\n}\n\n.mdi-priority-low:before {\n  content: \"\\F604\";\n}\n\n.mdi-professional-hexagon:before {\n  content: \"\\F42D\";\n}\n\n.mdi-progress-check:before {\n  content: \"\\F994\";\n}\n\n.mdi-progress-clock:before {\n  content: \"\\F995\";\n}\n\n.mdi-progress-download:before {\n  content: \"\\F996\";\n}\n\n.mdi-progress-upload:before {\n  content: \"\\F997\";\n}\n\n.mdi-projector:before {\n  content: \"\\F42E\";\n}\n\n.mdi-projector-screen:before {\n  content: \"\\F42F\";\n}\n\n.mdi-publish:before {\n  content: \"\\F6A6\";\n}\n\n.mdi-pulse:before {\n  content: \"\\F430\";\n}\n\n.mdi-pumpkin:before {\n  content: \"\\FB9B\";\n}\n\n.mdi-puzzle:before {\n  content: \"\\F431\";\n}\n\n.mdi-puzzle-outline:before {\n  content: \"\\FA65\";\n}\n\n.mdi-qi:before {\n  content: \"\\F998\";\n}\n\n.mdi-qqchat:before {\n  content: \"\\F605\";\n}\n\n.mdi-qrcode:before {\n  content: \"\\F432\";\n}\n\n.mdi-qrcode-edit:before {\n  content: \"\\F8B7\";\n}\n\n.mdi-qrcode-scan:before {\n  content: \"\\F433\";\n}\n\n.mdi-quadcopter:before {\n  content: \"\\F434\";\n}\n\n.mdi-quality-high:before {\n  content: \"\\F435\";\n}\n\n.mdi-quality-low:before {\n  content: \"\\FA0B\";\n}\n\n.mdi-quality-medium:before {\n  content: \"\\FA0C\";\n}\n\n.mdi-quicktime:before {\n  content: \"\\F436\";\n}\n\n.mdi-rabbit:before {\n  content: \"\\F906\";\n}\n\n.mdi-radar:before {\n  content: \"\\F437\";\n}\n\n.mdi-radiator:before {\n  content: \"\\F438\";\n}\n\n.mdi-radiator-disabled:before {\n  content: \"\\FAD6\";\n}\n\n.mdi-radiator-off:before {\n  content: \"\\FAD7\";\n}\n\n.mdi-radio:before {\n  content: \"\\F439\";\n}\n\n.mdi-radio-handheld:before {\n  content: \"\\F43A\";\n}\n\n.mdi-radio-tower:before {\n  content: \"\\F43B\";\n}\n\n.mdi-radioactive:before {\n  content: \"\\F43C\";\n}\n\n.mdi-radiobox-blank:before {\n  content: \"\\F43D\";\n}\n\n.mdi-radiobox-marked:before {\n  content: \"\\F43E\";\n}\n\n.mdi-raspberrypi:before {\n  content: \"\\F43F\";\n}\n\n.mdi-ray-end:before {\n  content: \"\\F440\";\n}\n\n.mdi-ray-end-arrow:before {\n  content: \"\\F441\";\n}\n\n.mdi-ray-start:before {\n  content: \"\\F442\";\n}\n\n.mdi-ray-start-arrow:before {\n  content: \"\\F443\";\n}\n\n.mdi-ray-start-end:before {\n  content: \"\\F444\";\n}\n\n.mdi-ray-vertex:before {\n  content: \"\\F445\";\n}\n\n.mdi-react:before {\n  content: \"\\F707\";\n}\n\n.mdi-read:before {\n  content: \"\\F447\";\n}\n\n.mdi-receipt:before {\n  content: \"\\F449\";\n}\n\n.mdi-record:before {\n  content: \"\\F44A\";\n}\n\n.mdi-record-player:before {\n  content: \"\\F999\";\n}\n\n.mdi-record-rec:before {\n  content: \"\\F44B\";\n}\n\n.mdi-recycle:before {\n  content: \"\\F44C\";\n}\n\n.mdi-reddit:before {\n  content: \"\\F44D\";\n}\n\n.mdi-redo:before {\n  content: \"\\F44E\";\n}\n\n.mdi-redo-variant:before {\n  content: \"\\F44F\";\n}\n\n.mdi-reflect-horizontal:before {\n  content: \"\\FA0D\";\n}\n\n.mdi-reflect-vertical:before {\n  content: \"\\FA0E\";\n}\n\n.mdi-refresh:before {\n  content: \"\\F450\";\n}\n\n.mdi-regex:before {\n  content: \"\\F451\";\n}\n\n.mdi-registered-trademark:before {\n  content: \"\\FA66\";\n}\n\n.mdi-relative-scale:before {\n  content: \"\\F452\";\n}\n\n.mdi-reload:before {\n  content: \"\\F453\";\n}\n\n.mdi-reminder:before {\n  content: \"\\F88B\";\n}\n\n.mdi-remote:before {\n  content: \"\\F454\";\n}\n\n.mdi-remote-desktop:before {\n  content: \"\\F8B8\";\n}\n\n.mdi-rename-box:before {\n  content: \"\\F455\";\n}\n\n.mdi-reorder-horizontal:before {\n  content: \"\\F687\";\n}\n\n.mdi-reorder-vertical:before {\n  content: \"\\F688\";\n}\n\n.mdi-repeat:before {\n  content: \"\\F456\";\n}\n\n.mdi-repeat-off:before {\n  content: \"\\F457\";\n}\n\n.mdi-repeat-once:before {\n  content: \"\\F458\";\n}\n\n.mdi-replay:before {\n  content: \"\\F459\";\n}\n\n.mdi-reply:before {\n  content: \"\\F45A\";\n}\n\n.mdi-reply-all:before {\n  content: \"\\F45B\";\n}\n\n.mdi-reproduction:before {\n  content: \"\\F45C\";\n}\n\n.mdi-resistor:before {\n  content: \"\\FB1F\";\n}\n\n.mdi-resistor-nodes:before {\n  content: \"\\FB20\";\n}\n\n.mdi-resize:before {\n  content: \"\\FA67\";\n}\n\n.mdi-resize-bottom-right:before {\n  content: \"\\F45D\";\n}\n\n.mdi-responsive:before {\n  content: \"\\F45E\";\n}\n\n.mdi-restart:before {\n  content: \"\\F708\";\n}\n\n.mdi-restore:before {\n  content: \"\\F99A\";\n}\n\n.mdi-restore-clock:before {\n  content: \"\\F6A7\";\n}\n\n.mdi-rewind:before {\n  content: \"\\F45F\";\n}\n\n.mdi-rewind-outline:before {\n  content: \"\\F709\";\n}\n\n.mdi-rhombus:before {\n  content: \"\\F70A\";\n}\n\n.mdi-rhombus-medium:before {\n  content: \"\\FA0F\";\n}\n\n.mdi-rhombus-outline:before {\n  content: \"\\F70B\";\n}\n\n.mdi-rhombus-split:before {\n  content: \"\\FA10\";\n}\n\n.mdi-ribbon:before {\n  content: \"\\F460\";\n}\n\n.mdi-rice:before {\n  content: \"\\F7E9\";\n}\n\n.mdi-ring:before {\n  content: \"\\F7EA\";\n}\n\n.mdi-road:before {\n  content: \"\\F461\";\n}\n\n.mdi-road-variant:before {\n  content: \"\\F462\";\n}\n\n.mdi-robot:before {\n  content: \"\\F6A8\";\n}\n\n.mdi-robot-industrial:before {\n  content: \"\\FB21\";\n}\n\n.mdi-robot-vacuum:before {\n  content: \"\\F70C\";\n}\n\n.mdi-robot-vacuum-variant:before {\n  content: \"\\F907\";\n}\n\n.mdi-rocket:before {\n  content: \"\\F463\";\n}\n\n.mdi-rollupjs:before {\n  content: \"\\FB9C\";\n}\n\n.mdi-room-service:before {\n  content: \"\\F88C\";\n}\n\n.mdi-rotate-3d:before {\n  content: \"\\F464\";\n}\n\n.mdi-rotate-left:before {\n  content: \"\\F465\";\n}\n\n.mdi-rotate-left-variant:before {\n  content: \"\\F466\";\n}\n\n.mdi-rotate-right:before {\n  content: \"\\F467\";\n}\n\n.mdi-rotate-right-variant:before {\n  content: \"\\F468\";\n}\n\n.mdi-rounded-corner:before {\n  content: \"\\F607\";\n}\n\n.mdi-router-wireless:before {\n  content: \"\\F469\";\n}\n\n.mdi-router-wireless-settings:before {\n  content: \"\\FA68\";\n}\n\n.mdi-routes:before {\n  content: \"\\F46A\";\n}\n\n.mdi-rowing:before {\n  content: \"\\F608\";\n}\n\n.mdi-rss:before {\n  content: \"\\F46B\";\n}\n\n.mdi-rss-box:before {\n  content: \"\\F46C\";\n}\n\n.mdi-ruler:before {\n  content: \"\\F46D\";\n}\n\n.mdi-run:before {\n  content: \"\\F70D\";\n}\n\n.mdi-run-fast:before {\n  content: \"\\F46E\";\n}\n\n.mdi-safe:before {\n  content: \"\\FA69\";\n}\n\n.mdi-sale:before {\n  content: \"\\F46F\";\n}\n\n.mdi-salesforce:before {\n  content: \"\\F88D\";\n}\n\n.mdi-sass:before {\n  content: \"\\F7EB\";\n}\n\n.mdi-satellite:before {\n  content: \"\\F470\";\n}\n\n.mdi-satellite-uplink:before {\n  content: \"\\F908\";\n}\n\n.mdi-satellite-variant:before {\n  content: \"\\F471\";\n}\n\n.mdi-sausage:before {\n  content: \"\\F8B9\";\n}\n\n.mdi-saxophone:before {\n  content: \"\\F609\";\n}\n\n.mdi-scale:before {\n  content: \"\\F472\";\n}\n\n.mdi-scale-balance:before {\n  content: \"\\F5D1\";\n}\n\n.mdi-scale-bathroom:before {\n  content: \"\\F473\";\n}\n\n.mdi-scanner:before {\n  content: \"\\F6AA\";\n}\n\n.mdi-scanner-off:before {\n  content: \"\\F909\";\n}\n\n.mdi-school:before {\n  content: \"\\F474\";\n}\n\n.mdi-scissors-cutting:before {\n  content: \"\\FA6A\";\n}\n\n.mdi-screen-rotation:before {\n  content: \"\\F475\";\n}\n\n.mdi-screen-rotation-lock:before {\n  content: \"\\F476\";\n}\n\n.mdi-screwdriver:before {\n  content: \"\\F477\";\n}\n\n.mdi-script:before {\n  content: \"\\FB9D\";\n}\n\n.mdi-script-outline:before {\n  content: \"\\F478\";\n}\n\n.mdi-script-text:before {\n  content: \"\\FB9E\";\n}\n\n.mdi-script-text-outline:before {\n  content: \"\\FB9F\";\n}\n\n.mdi-sd:before {\n  content: \"\\F479\";\n}\n\n.mdi-seal:before {\n  content: \"\\F47A\";\n}\n\n.mdi-search-web:before {\n  content: \"\\F70E\";\n}\n\n.mdi-seat-flat:before {\n  content: \"\\F47B\";\n}\n\n.mdi-seat-flat-angled:before {\n  content: \"\\F47C\";\n}\n\n.mdi-seat-individual-suite:before {\n  content: \"\\F47D\";\n}\n\n.mdi-seat-legroom-extra:before {\n  content: \"\\F47E\";\n}\n\n.mdi-seat-legroom-normal:before {\n  content: \"\\F47F\";\n}\n\n.mdi-seat-legroom-reduced:before {\n  content: \"\\F480\";\n}\n\n.mdi-seat-recline-extra:before {\n  content: \"\\F481\";\n}\n\n.mdi-seat-recline-normal:before {\n  content: \"\\F482\";\n}\n\n.mdi-security:before {\n  content: \"\\F483\";\n}\n\n.mdi-security-account:before {\n  content: \"\\F88E\";\n}\n\n.mdi-security-account-outline:before {\n  content: \"\\FA11\";\n}\n\n.mdi-security-close:before {\n  content: \"\\F99B\";\n}\n\n.mdi-security-home:before {\n  content: \"\\F689\";\n}\n\n.mdi-security-lock:before {\n  content: \"\\F99C\";\n}\n\n.mdi-security-network:before {\n  content: \"\\F484\";\n}\n\n.mdi-security-off:before {\n  content: \"\\F99D\";\n}\n\n.mdi-select:before {\n  content: \"\\F485\";\n}\n\n.mdi-select-all:before {\n  content: \"\\F486\";\n}\n\n.mdi-select-compare:before {\n  content: \"\\FAD8\";\n}\n\n.mdi-select-drag:before {\n  content: \"\\FA6B\";\n}\n\n.mdi-select-inverse:before {\n  content: \"\\F487\";\n}\n\n.mdi-select-off:before {\n  content: \"\\F488\";\n}\n\n.mdi-selection:before {\n  content: \"\\F489\";\n}\n\n.mdi-selection-drag:before {\n  content: \"\\FA6C\";\n}\n\n.mdi-selection-off:before {\n  content: \"\\F776\";\n}\n\n.mdi-send:before {\n  content: \"\\F48A\";\n}\n\n.mdi-send-lock:before {\n  content: \"\\F7EC\";\n}\n\n.mdi-serial-port:before {\n  content: \"\\F65C\";\n}\n\n.mdi-server:before {\n  content: \"\\F48B\";\n}\n\n.mdi-server-minus:before {\n  content: \"\\F48C\";\n}\n\n.mdi-server-network:before {\n  content: \"\\F48D\";\n}\n\n.mdi-server-network-off:before {\n  content: \"\\F48E\";\n}\n\n.mdi-server-off:before {\n  content: \"\\F48F\";\n}\n\n.mdi-server-plus:before {\n  content: \"\\F490\";\n}\n\n.mdi-server-remove:before {\n  content: \"\\F491\";\n}\n\n.mdi-server-security:before {\n  content: \"\\F492\";\n}\n\n.mdi-set-all:before {\n  content: \"\\F777\";\n}\n\n.mdi-set-center:before {\n  content: \"\\F778\";\n}\n\n.mdi-set-center-right:before {\n  content: \"\\F779\";\n}\n\n.mdi-set-left:before {\n  content: \"\\F77A\";\n}\n\n.mdi-set-left-center:before {\n  content: \"\\F77B\";\n}\n\n.mdi-set-left-right:before {\n  content: \"\\F77C\";\n}\n\n.mdi-set-none:before {\n  content: \"\\F77D\";\n}\n\n.mdi-set-right:before {\n  content: \"\\F77E\";\n}\n\n.mdi-set-top-box:before {\n  content: \"\\F99E\";\n}\n\n.mdi-settings:before {\n  content: \"\\F493\";\n}\n\n.mdi-settings-box:before {\n  content: \"\\F494\";\n}\n\n.mdi-settings-helper:before {\n  content: \"\\FA6D\";\n}\n\n.mdi-settings-outline:before {\n  content: \"\\F8BA\";\n}\n\n.mdi-shape:before {\n  content: \"\\F830\";\n}\n\n.mdi-shape-circle-plus:before {\n  content: \"\\F65D\";\n}\n\n.mdi-shape-outline:before {\n  content: \"\\F831\";\n}\n\n.mdi-shape-plus:before {\n  content: \"\\F495\";\n}\n\n.mdi-shape-polygon-plus:before {\n  content: \"\\F65E\";\n}\n\n.mdi-shape-rectangle-plus:before {\n  content: \"\\F65F\";\n}\n\n.mdi-shape-square-plus:before {\n  content: \"\\F660\";\n}\n\n.mdi-share:before {\n  content: \"\\F496\";\n}\n\n.mdi-share-outline:before {\n  content: \"\\F931\";\n}\n\n.mdi-share-variant:before {\n  content: \"\\F497\";\n}\n\n.mdi-shield:before {\n  content: \"\\F498\";\n}\n\n.mdi-shield-half-full:before {\n  content: \"\\F77F\";\n}\n\n.mdi-shield-key:before {\n  content: \"\\FBA0\";\n}\n\n.mdi-shield-key-outline:before {\n  content: \"\\FBA1\";\n}\n\n.mdi-shield-outline:before {\n  content: \"\\F499\";\n}\n\n.mdi-shield-plus:before {\n  content: \"\\FAD9\";\n}\n\n.mdi-shield-plus-outline:before {\n  content: \"\\FADA\";\n}\n\n.mdi-shield-remove:before {\n  content: \"\\FADB\";\n}\n\n.mdi-shield-remove-outline:before {\n  content: \"\\FADC\";\n}\n\n.mdi-ship-wheel:before {\n  content: \"\\F832\";\n}\n\n.mdi-shoe-formal:before {\n  content: \"\\FB22\";\n}\n\n.mdi-shoe-heel:before {\n  content: \"\\FB23\";\n}\n\n.mdi-shopify:before {\n  content: \"\\FADD\";\n}\n\n.mdi-shopping:before {\n  content: \"\\F49A\";\n}\n\n.mdi-shopping-music:before {\n  content: \"\\F49B\";\n}\n\n.mdi-shovel:before {\n  content: \"\\F70F\";\n}\n\n.mdi-shovel-off:before {\n  content: \"\\F710\";\n}\n\n.mdi-shower:before {\n  content: \"\\F99F\";\n}\n\n.mdi-shower-head:before {\n  content: \"\\F9A0\";\n}\n\n.mdi-shredder:before {\n  content: \"\\F49C\";\n}\n\n.mdi-shuffle:before {\n  content: \"\\F49D\";\n}\n\n.mdi-shuffle-disabled:before {\n  content: \"\\F49E\";\n}\n\n.mdi-shuffle-variant:before {\n  content: \"\\F49F\";\n}\n\n.mdi-sigma:before {\n  content: \"\\F4A0\";\n}\n\n.mdi-sigma-lower:before {\n  content: \"\\F62B\";\n}\n\n.mdi-sign-caution:before {\n  content: \"\\F4A1\";\n}\n\n.mdi-sign-direction:before {\n  content: \"\\F780\";\n}\n\n.mdi-sign-text:before {\n  content: \"\\F781\";\n}\n\n.mdi-signal:before {\n  content: \"\\F4A2\";\n}\n\n.mdi-signal-2g:before {\n  content: \"\\F711\";\n}\n\n.mdi-signal-3g:before {\n  content: \"\\F712\";\n}\n\n.mdi-signal-4g:before {\n  content: \"\\F713\";\n}\n\n.mdi-signal-5g:before {\n  content: \"\\FA6E\";\n}\n\n.mdi-signal-cellular-1:before {\n  content: \"\\F8BB\";\n}\n\n.mdi-signal-cellular-2:before {\n  content: \"\\F8BC\";\n}\n\n.mdi-signal-cellular-3:before {\n  content: \"\\F8BD\";\n}\n\n.mdi-signal-cellular-outline:before {\n  content: \"\\F8BE\";\n}\n\n.mdi-signal-hspa:before {\n  content: \"\\F714\";\n}\n\n.mdi-signal-hspa-plus:before {\n  content: \"\\F715\";\n}\n\n.mdi-signal-off:before {\n  content: \"\\F782\";\n}\n\n.mdi-signal-variant:before {\n  content: \"\\F60A\";\n}\n\n.mdi-silo:before {\n  content: \"\\FB24\";\n}\n\n.mdi-silverware:before {\n  content: \"\\F4A3\";\n}\n\n.mdi-silverware-fork:before {\n  content: \"\\F4A4\";\n}\n\n.mdi-silverware-fork-knife:before {\n  content: \"\\FA6F\";\n}\n\n.mdi-silverware-spoon:before {\n  content: \"\\F4A5\";\n}\n\n.mdi-silverware-variant:before {\n  content: \"\\F4A6\";\n}\n\n.mdi-sim:before {\n  content: \"\\F4A7\";\n}\n\n.mdi-sim-alert:before {\n  content: \"\\F4A8\";\n}\n\n.mdi-sim-off:before {\n  content: \"\\F4A9\";\n}\n\n.mdi-sina-weibo:before {\n  content: \"\\FADE\";\n}\n\n.mdi-sitemap:before {\n  content: \"\\F4AA\";\n}\n\n.mdi-skip-backward:before {\n  content: \"\\F4AB\";\n}\n\n.mdi-skip-forward:before {\n  content: \"\\F4AC\";\n}\n\n.mdi-skip-next:before {\n  content: \"\\F4AD\";\n}\n\n.mdi-skip-next-circle:before {\n  content: \"\\F661\";\n}\n\n.mdi-skip-next-circle-outline:before {\n  content: \"\\F662\";\n}\n\n.mdi-skip-previous:before {\n  content: \"\\F4AE\";\n}\n\n.mdi-skip-previous-circle:before {\n  content: \"\\F663\";\n}\n\n.mdi-skip-previous-circle-outline:before {\n  content: \"\\F664\";\n}\n\n.mdi-skull:before {\n  content: \"\\F68B\";\n}\n\n.mdi-skull-crossbones:before {\n  content: \"\\FBA2\";\n}\n\n.mdi-skull-crossbones-outline:before {\n  content: \"\\FBA3\";\n}\n\n.mdi-skull-outline:before {\n  content: \"\\FBA4\";\n}\n\n.mdi-skype:before {\n  content: \"\\F4AF\";\n}\n\n.mdi-skype-business:before {\n  content: \"\\F4B0\";\n}\n\n.mdi-slack:before {\n  content: \"\\F4B1\";\n}\n\n.mdi-slackware:before {\n  content: \"\\F90A\";\n}\n\n.mdi-sleep:before {\n  content: \"\\F4B2\";\n}\n\n.mdi-sleep-off:before {\n  content: \"\\F4B3\";\n}\n\n.mdi-smog:before {\n  content: \"\\FA70\";\n}\n\n.mdi-smoke-detector:before {\n  content: \"\\F392\";\n}\n\n.mdi-smoking:before {\n  content: \"\\F4B4\";\n}\n\n.mdi-smoking-off:before {\n  content: \"\\F4B5\";\n}\n\n.mdi-snapchat:before {\n  content: \"\\F4B6\";\n}\n\n.mdi-snowflake:before {\n  content: \"\\F716\";\n}\n\n.mdi-snowman:before {\n  content: \"\\F4B7\";\n}\n\n.mdi-soccer:before {\n  content: \"\\F4B8\";\n}\n\n.mdi-soccer-field:before {\n  content: \"\\F833\";\n}\n\n.mdi-sofa:before {\n  content: \"\\F4B9\";\n}\n\n.mdi-solar-power:before {\n  content: \"\\FA71\";\n}\n\n.mdi-solid:before {\n  content: \"\\F68C\";\n}\n\n.mdi-sort:before {\n  content: \"\\F4BA\";\n}\n\n.mdi-sort-alphabetical:before {\n  content: \"\\F4BB\";\n}\n\n.mdi-sort-ascending:before {\n  content: \"\\F4BC\";\n}\n\n.mdi-sort-descending:before {\n  content: \"\\F4BD\";\n}\n\n.mdi-sort-numeric:before {\n  content: \"\\F4BE\";\n}\n\n.mdi-sort-variant:before {\n  content: \"\\F4BF\";\n}\n\n.mdi-soundcloud:before {\n  content: \"\\F4C0\";\n}\n\n.mdi-source-branch:before {\n  content: \"\\F62C\";\n}\n\n.mdi-source-commit:before {\n  content: \"\\F717\";\n}\n\n.mdi-source-commit-end:before {\n  content: \"\\F718\";\n}\n\n.mdi-source-commit-end-local:before {\n  content: \"\\F719\";\n}\n\n.mdi-source-commit-local:before {\n  content: \"\\F71A\";\n}\n\n.mdi-source-commit-next-local:before {\n  content: \"\\F71B\";\n}\n\n.mdi-source-commit-start:before {\n  content: \"\\F71C\";\n}\n\n.mdi-source-commit-start-next-local:before {\n  content: \"\\F71D\";\n}\n\n.mdi-source-fork:before {\n  content: \"\\F4C1\";\n}\n\n.mdi-source-merge:before {\n  content: \"\\F62D\";\n}\n\n.mdi-source-pull:before {\n  content: \"\\F4C2\";\n}\n\n.mdi-soy-sauce:before {\n  content: \"\\F7ED\";\n}\n\n.mdi-space-invaders:before {\n  content: \"\\FBA5\";\n}\n\n.mdi-speaker:before {\n  content: \"\\F4C3\";\n}\n\n.mdi-speaker-bluetooth:before {\n  content: \"\\F9A1\";\n}\n\n.mdi-speaker-off:before {\n  content: \"\\F4C4\";\n}\n\n.mdi-speaker-wireless:before {\n  content: \"\\F71E\";\n}\n\n.mdi-speedometer:before {\n  content: \"\\F4C5\";\n}\n\n.mdi-spellcheck:before {\n  content: \"\\F4C6\";\n}\n\n.mdi-spider-web:before {\n  content: \"\\FBA6\";\n}\n\n.mdi-spotify:before {\n  content: \"\\F4C7\";\n}\n\n.mdi-spotlight:before {\n  content: \"\\F4C8\";\n}\n\n.mdi-spotlight-beam:before {\n  content: \"\\F4C9\";\n}\n\n.mdi-spray:before {\n  content: \"\\F665\";\n}\n\n.mdi-spray-bottle:before {\n  content: \"\\FADF\";\n}\n\n.mdi-square:before {\n  content: \"\\F763\";\n}\n\n.mdi-square-edit-outline:before {\n  content: \"\\F90B\";\n}\n\n.mdi-square-inc:before {\n  content: \"\\F4CA\";\n}\n\n.mdi-square-inc-cash:before {\n  content: \"\\F4CB\";\n}\n\n.mdi-square-medium:before {\n  content: \"\\FA12\";\n}\n\n.mdi-square-medium-outline:before {\n  content: \"\\FA13\";\n}\n\n.mdi-square-outline:before {\n  content: \"\\F762\";\n}\n\n.mdi-square-root:before {\n  content: \"\\F783\";\n}\n\n.mdi-square-root-box:before {\n  content: \"\\F9A2\";\n}\n\n.mdi-square-small:before {\n  content: \"\\FA14\";\n}\n\n.mdi-squeegee:before {\n  content: \"\\FAE0\";\n}\n\n.mdi-ssh:before {\n  content: \"\\F8BF\";\n}\n\n.mdi-stack-exchange:before {\n  content: \"\\F60B\";\n}\n\n.mdi-stack-overflow:before {\n  content: \"\\F4CC\";\n}\n\n.mdi-stadium:before {\n  content: \"\\F71F\";\n}\n\n.mdi-stairs:before {\n  content: \"\\F4CD\";\n}\n\n.mdi-standard-definition:before {\n  content: \"\\F7EE\";\n}\n\n.mdi-star:before {\n  content: \"\\F4CE\";\n}\n\n.mdi-star-box:before {\n  content: \"\\FA72\";\n}\n\n.mdi-star-box-outline:before {\n  content: \"\\FA73\";\n}\n\n.mdi-star-circle:before {\n  content: \"\\F4CF\";\n}\n\n.mdi-star-circle-outline:before {\n  content: \"\\F9A3\";\n}\n\n.mdi-star-face:before {\n  content: \"\\F9A4\";\n}\n\n.mdi-star-four-points:before {\n  content: \"\\FAE1\";\n}\n\n.mdi-star-four-points-outline:before {\n  content: \"\\FAE2\";\n}\n\n.mdi-star-half:before {\n  content: \"\\F4D0\";\n}\n\n.mdi-star-off:before {\n  content: \"\\F4D1\";\n}\n\n.mdi-star-outline:before {\n  content: \"\\F4D2\";\n}\n\n.mdi-star-three-points:before {\n  content: \"\\FAE3\";\n}\n\n.mdi-star-three-points-outline:before {\n  content: \"\\FAE4\";\n}\n\n.mdi-steam:before {\n  content: \"\\F4D3\";\n}\n\n.mdi-steam-box:before {\n  content: \"\\F90C\";\n}\n\n.mdi-steering:before {\n  content: \"\\F4D4\";\n}\n\n.mdi-steering-off:before {\n  content: \"\\F90D\";\n}\n\n.mdi-step-backward:before {\n  content: \"\\F4D5\";\n}\n\n.mdi-step-backward-2:before {\n  content: \"\\F4D6\";\n}\n\n.mdi-step-forward:before {\n  content: \"\\F4D7\";\n}\n\n.mdi-step-forward-2:before {\n  content: \"\\F4D8\";\n}\n\n.mdi-stethoscope:before {\n  content: \"\\F4D9\";\n}\n\n.mdi-sticker:before {\n  content: \"\\F5D0\";\n}\n\n.mdi-sticker-emoji:before {\n  content: \"\\F784\";\n}\n\n.mdi-stocking:before {\n  content: \"\\F4DA\";\n}\n\n.mdi-stop:before {\n  content: \"\\F4DB\";\n}\n\n.mdi-stop-circle:before {\n  content: \"\\F666\";\n}\n\n.mdi-stop-circle-outline:before {\n  content: \"\\F667\";\n}\n\n.mdi-store:before {\n  content: \"\\F4DC\";\n}\n\n.mdi-store-24-hour:before {\n  content: \"\\F4DD\";\n}\n\n.mdi-stove:before {\n  content: \"\\F4DE\";\n}\n\n.mdi-strava:before {\n  content: \"\\FB25\";\n}\n\n.mdi-subdirectory-arrow-left:before {\n  content: \"\\F60C\";\n}\n\n.mdi-subdirectory-arrow-right:before {\n  content: \"\\F60D\";\n}\n\n.mdi-subtitles:before {\n  content: \"\\FA15\";\n}\n\n.mdi-subtitles-outline:before {\n  content: \"\\FA16\";\n}\n\n.mdi-subway:before {\n  content: \"\\F6AB\";\n}\n\n.mdi-subway-variant:before {\n  content: \"\\F4DF\";\n}\n\n.mdi-summit:before {\n  content: \"\\F785\";\n}\n\n.mdi-sunglasses:before {\n  content: \"\\F4E0\";\n}\n\n.mdi-surround-sound:before {\n  content: \"\\F5C5\";\n}\n\n.mdi-surround-sound-2-0:before {\n  content: \"\\F7EF\";\n}\n\n.mdi-surround-sound-3-1:before {\n  content: \"\\F7F0\";\n}\n\n.mdi-surround-sound-5-1:before {\n  content: \"\\F7F1\";\n}\n\n.mdi-surround-sound-7-1:before {\n  content: \"\\F7F2\";\n}\n\n.mdi-svg:before {\n  content: \"\\F720\";\n}\n\n.mdi-swap-horizontal:before {\n  content: \"\\F4E1\";\n}\n\n.mdi-swap-horizontal-bold:before {\n  content: \"\\FBA9\";\n}\n\n.mdi-swap-horizontal-variant:before {\n  content: \"\\F8C0\";\n}\n\n.mdi-swap-vertical:before {\n  content: \"\\F4E2\";\n}\n\n.mdi-swap-vertical-bold:before {\n  content: \"\\FBAA\";\n}\n\n.mdi-swap-vertical-variant:before {\n  content: \"\\F8C1\";\n}\n\n.mdi-swim:before {\n  content: \"\\F4E3\";\n}\n\n.mdi-switch:before {\n  content: \"\\F4E4\";\n}\n\n.mdi-sword:before {\n  content: \"\\F4E5\";\n}\n\n.mdi-sword-cross:before {\n  content: \"\\F786\";\n}\n\n.mdi-symfony:before {\n  content: \"\\FAE5\";\n}\n\n.mdi-sync:before {\n  content: \"\\F4E6\";\n}\n\n.mdi-sync-alert:before {\n  content: \"\\F4E7\";\n}\n\n.mdi-sync-off:before {\n  content: \"\\F4E8\";\n}\n\n.mdi-tab:before {\n  content: \"\\F4E9\";\n}\n\n.mdi-tab-minus:before {\n  content: \"\\FB26\";\n}\n\n.mdi-tab-plus:before {\n  content: \"\\F75B\";\n}\n\n.mdi-tab-remove:before {\n  content: \"\\FB27\";\n}\n\n.mdi-tab-unselected:before {\n  content: \"\\F4EA\";\n}\n\n.mdi-table:before {\n  content: \"\\F4EB\";\n}\n\n.mdi-table-border:before {\n  content: \"\\FA17\";\n}\n\n.mdi-table-column:before {\n  content: \"\\F834\";\n}\n\n.mdi-table-column-plus-after:before {\n  content: \"\\F4EC\";\n}\n\n.mdi-table-column-plus-before:before {\n  content: \"\\F4ED\";\n}\n\n.mdi-table-column-remove:before {\n  content: \"\\F4EE\";\n}\n\n.mdi-table-column-width:before {\n  content: \"\\F4EF\";\n}\n\n.mdi-table-edit:before {\n  content: \"\\F4F0\";\n}\n\n.mdi-table-large:before {\n  content: \"\\F4F1\";\n}\n\n.mdi-table-merge-cells:before {\n  content: \"\\F9A5\";\n}\n\n.mdi-table-of-contents:before {\n  content: \"\\F835\";\n}\n\n.mdi-table-plus:before {\n  content: \"\\FA74\";\n}\n\n.mdi-table-remove:before {\n  content: \"\\FA75\";\n}\n\n.mdi-table-row:before {\n  content: \"\\F836\";\n}\n\n.mdi-table-row-height:before {\n  content: \"\\F4F2\";\n}\n\n.mdi-table-row-plus-after:before {\n  content: \"\\F4F3\";\n}\n\n.mdi-table-row-plus-before:before {\n  content: \"\\F4F4\";\n}\n\n.mdi-table-row-remove:before {\n  content: \"\\F4F5\";\n}\n\n.mdi-table-search:before {\n  content: \"\\F90E\";\n}\n\n.mdi-table-settings:before {\n  content: \"\\F837\";\n}\n\n.mdi-tablet:before {\n  content: \"\\F4F6\";\n}\n\n.mdi-tablet-android:before {\n  content: \"\\F4F7\";\n}\n\n.mdi-tablet-cellphone:before {\n  content: \"\\F9A6\";\n}\n\n.mdi-tablet-ipad:before {\n  content: \"\\F4F8\";\n}\n\n.mdi-taco:before {\n  content: \"\\F761\";\n}\n\n.mdi-tag:before {\n  content: \"\\F4F9\";\n}\n\n.mdi-tag-faces:before {\n  content: \"\\F4FA\";\n}\n\n.mdi-tag-heart:before {\n  content: \"\\F68A\";\n}\n\n.mdi-tag-heart-outline:before {\n  content: \"\\FBAB\";\n}\n\n.mdi-tag-minus:before {\n  content: \"\\F90F\";\n}\n\n.mdi-tag-multiple:before {\n  content: \"\\F4FB\";\n}\n\n.mdi-tag-outline:before {\n  content: \"\\F4FC\";\n}\n\n.mdi-tag-plus:before {\n  content: \"\\F721\";\n}\n\n.mdi-tag-remove:before {\n  content: \"\\F722\";\n}\n\n.mdi-tag-text-outline:before {\n  content: \"\\F4FD\";\n}\n\n.mdi-tape-measure:before {\n  content: \"\\FB28\";\n}\n\n.mdi-target:before {\n  content: \"\\F4FE\";\n}\n\n.mdi-target-account:before {\n  content: \"\\FBAC\";\n}\n\n.mdi-target-variant:before {\n  content: \"\\FA76\";\n}\n\n.mdi-taxi:before {\n  content: \"\\F4FF\";\n}\n\n.mdi-teach:before {\n  content: \"\\F88F\";\n}\n\n.mdi-teamviewer:before {\n  content: \"\\F500\";\n}\n\n.mdi-telegram:before {\n  content: \"\\F501\";\n}\n\n.mdi-telescope:before {\n  content: \"\\FB29\";\n}\n\n.mdi-television:before {\n  content: \"\\F502\";\n}\n\n.mdi-television-box:before {\n  content: \"\\F838\";\n}\n\n.mdi-television-classic:before {\n  content: \"\\F7F3\";\n}\n\n.mdi-television-classic-off:before {\n  content: \"\\F839\";\n}\n\n.mdi-television-guide:before {\n  content: \"\\F503\";\n}\n\n.mdi-television-off:before {\n  content: \"\\F83A\";\n}\n\n.mdi-temperature-celsius:before {\n  content: \"\\F504\";\n}\n\n.mdi-temperature-fahrenheit:before {\n  content: \"\\F505\";\n}\n\n.mdi-temperature-kelvin:before {\n  content: \"\\F506\";\n}\n\n.mdi-tennis:before {\n  content: \"\\F507\";\n}\n\n.mdi-tent:before {\n  content: \"\\F508\";\n}\n\n.mdi-terrain:before {\n  content: \"\\F509\";\n}\n\n.mdi-test-tube:before {\n  content: \"\\F668\";\n}\n\n.mdi-test-tube-empty:before {\n  content: \"\\F910\";\n}\n\n.mdi-test-tube-off:before {\n  content: \"\\F911\";\n}\n\n.mdi-text:before {\n  content: \"\\F9A7\";\n}\n\n.mdi-text-shadow:before {\n  content: \"\\F669\";\n}\n\n.mdi-text-short:before {\n  content: \"\\F9A8\";\n}\n\n.mdi-text-subject:before {\n  content: \"\\F9A9\";\n}\n\n.mdi-text-to-speech:before {\n  content: \"\\F50A\";\n}\n\n.mdi-text-to-speech-off:before {\n  content: \"\\F50B\";\n}\n\n.mdi-textbox:before {\n  content: \"\\F60E\";\n}\n\n.mdi-textbox-password:before {\n  content: \"\\F7F4\";\n}\n\n.mdi-texture:before {\n  content: \"\\F50C\";\n}\n\n.mdi-theater:before {\n  content: \"\\F50D\";\n}\n\n.mdi-theme-light-dark:before {\n  content: \"\\F50E\";\n}\n\n.mdi-thermometer:before {\n  content: \"\\F50F\";\n}\n\n.mdi-thermometer-lines:before {\n  content: \"\\F510\";\n}\n\n.mdi-thermostat:before {\n  content: \"\\F393\";\n}\n\n.mdi-thermostat-box:before {\n  content: \"\\F890\";\n}\n\n.mdi-thought-bubble:before {\n  content: \"\\F7F5\";\n}\n\n.mdi-thought-bubble-outline:before {\n  content: \"\\F7F6\";\n}\n\n.mdi-thumb-down:before {\n  content: \"\\F511\";\n}\n\n.mdi-thumb-down-outline:before {\n  content: \"\\F512\";\n}\n\n.mdi-thumb-up:before {\n  content: \"\\F513\";\n}\n\n.mdi-thumb-up-outline:before {\n  content: \"\\F514\";\n}\n\n.mdi-thumbs-up-down:before {\n  content: \"\\F515\";\n}\n\n.mdi-ticket:before {\n  content: \"\\F516\";\n}\n\n.mdi-ticket-account:before {\n  content: \"\\F517\";\n}\n\n.mdi-ticket-confirmation:before {\n  content: \"\\F518\";\n}\n\n.mdi-ticket-outline:before {\n  content: \"\\F912\";\n}\n\n.mdi-ticket-percent:before {\n  content: \"\\F723\";\n}\n\n.mdi-tie:before {\n  content: \"\\F519\";\n}\n\n.mdi-tilde:before {\n  content: \"\\F724\";\n}\n\n.mdi-timelapse:before {\n  content: \"\\F51A\";\n}\n\n.mdi-timeline:before {\n  content: \"\\FBAD\";\n}\n\n.mdi-timeline-outline:before {\n  content: \"\\FBAE\";\n}\n\n.mdi-timeline-text:before {\n  content: \"\\FBAF\";\n}\n\n.mdi-timeline-text-outline:before {\n  content: \"\\FBB0\";\n}\n\n.mdi-timer:before {\n  content: \"\\F51B\";\n}\n\n.mdi-timer-10:before {\n  content: \"\\F51C\";\n}\n\n.mdi-timer-3:before {\n  content: \"\\F51D\";\n}\n\n.mdi-timer-off:before {\n  content: \"\\F51E\";\n}\n\n.mdi-timer-sand:before {\n  content: \"\\F51F\";\n}\n\n.mdi-timer-sand-empty:before {\n  content: \"\\F6AC\";\n}\n\n.mdi-timer-sand-full:before {\n  content: \"\\F78B\";\n}\n\n.mdi-timetable:before {\n  content: \"\\F520\";\n}\n\n.mdi-toggle-switch:before {\n  content: \"\\F521\";\n}\n\n.mdi-toggle-switch-off:before {\n  content: \"\\F522\";\n}\n\n.mdi-toggle-switch-off-outline:before {\n  content: \"\\FA18\";\n}\n\n.mdi-toggle-switch-outline:before {\n  content: \"\\FA19\";\n}\n\n.mdi-toilet:before {\n  content: \"\\F9AA\";\n}\n\n.mdi-toolbox:before {\n  content: \"\\F9AB\";\n}\n\n.mdi-toolbox-outline:before {\n  content: \"\\F9AC\";\n}\n\n.mdi-tooltip:before {\n  content: \"\\F523\";\n}\n\n.mdi-tooltip-edit:before {\n  content: \"\\F524\";\n}\n\n.mdi-tooltip-image:before {\n  content: \"\\F525\";\n}\n\n.mdi-tooltip-image-outline:before {\n  content: \"\\FBB1\";\n}\n\n.mdi-tooltip-outline:before {\n  content: \"\\F526\";\n}\n\n.mdi-tooltip-plus:before {\n  content: \"\\FBB2\";\n}\n\n.mdi-tooltip-plus-outline:before {\n  content: \"\\F527\";\n}\n\n.mdi-tooltip-text:before {\n  content: \"\\F528\";\n}\n\n.mdi-tooltip-text-outline:before {\n  content: \"\\FBB3\";\n}\n\n.mdi-tooth:before {\n  content: \"\\F8C2\";\n}\n\n.mdi-tooth-outline:before {\n  content: \"\\F529\";\n}\n\n.mdi-tor:before {\n  content: \"\\F52A\";\n}\n\n.mdi-tournament:before {\n  content: \"\\F9AD\";\n}\n\n.mdi-tower-beach:before {\n  content: \"\\F680\";\n}\n\n.mdi-tower-fire:before {\n  content: \"\\F681\";\n}\n\n.mdi-towing:before {\n  content: \"\\F83B\";\n}\n\n.mdi-track-light:before {\n  content: \"\\F913\";\n}\n\n.mdi-trackpad:before {\n  content: \"\\F7F7\";\n}\n\n.mdi-trackpad-lock:before {\n  content: \"\\F932\";\n}\n\n.mdi-tractor:before {\n  content: \"\\F891\";\n}\n\n.mdi-trademark:before {\n  content: \"\\FA77\";\n}\n\n.mdi-traffic-light:before {\n  content: \"\\F52B\";\n}\n\n.mdi-train:before {\n  content: \"\\F52C\";\n}\n\n.mdi-train-car:before {\n  content: \"\\FBB4\";\n}\n\n.mdi-train-variant:before {\n  content: \"\\F8C3\";\n}\n\n.mdi-tram:before {\n  content: \"\\F52D\";\n}\n\n.mdi-transcribe:before {\n  content: \"\\F52E\";\n}\n\n.mdi-transcribe-close:before {\n  content: \"\\F52F\";\n}\n\n.mdi-transfer:before {\n  content: \"\\F530\";\n}\n\n.mdi-transit-transfer:before {\n  content: \"\\F6AD\";\n}\n\n.mdi-transition:before {\n  content: \"\\F914\";\n}\n\n.mdi-transition-masked:before {\n  content: \"\\F915\";\n}\n\n.mdi-translate:before {\n  content: \"\\F5CA\";\n}\n\n.mdi-trash-can:before {\n  content: \"\\FA78\";\n}\n\n.mdi-trash-can-outline:before {\n  content: \"\\FA79\";\n}\n\n.mdi-treasure-chest:before {\n  content: \"\\F725\";\n}\n\n.mdi-tree:before {\n  content: \"\\F531\";\n}\n\n.mdi-trello:before {\n  content: \"\\F532\";\n}\n\n.mdi-trending-down:before {\n  content: \"\\F533\";\n}\n\n.mdi-trending-neutral:before {\n  content: \"\\F534\";\n}\n\n.mdi-trending-up:before {\n  content: \"\\F535\";\n}\n\n.mdi-triangle:before {\n  content: \"\\F536\";\n}\n\n.mdi-triangle-outline:before {\n  content: \"\\F537\";\n}\n\n.mdi-triforce:before {\n  content: \"\\FBB5\";\n}\n\n.mdi-trophy:before {\n  content: \"\\F538\";\n}\n\n.mdi-trophy-award:before {\n  content: \"\\F539\";\n}\n\n.mdi-trophy-outline:before {\n  content: \"\\F53A\";\n}\n\n.mdi-trophy-variant:before {\n  content: \"\\F53B\";\n}\n\n.mdi-trophy-variant-outline:before {\n  content: \"\\F53C\";\n}\n\n.mdi-truck:before {\n  content: \"\\F53D\";\n}\n\n.mdi-truck-delivery:before {\n  content: \"\\F53E\";\n}\n\n.mdi-truck-fast:before {\n  content: \"\\F787\";\n}\n\n.mdi-truck-trailer:before {\n  content: \"\\F726\";\n}\n\n.mdi-tshirt-crew:before {\n  content: \"\\FA7A\";\n}\n\n.mdi-tshirt-crew-outline:before {\n  content: \"\\F53F\";\n}\n\n.mdi-tshirt-v:before {\n  content: \"\\FA7B\";\n}\n\n.mdi-tshirt-v-outline:before {\n  content: \"\\F540\";\n}\n\n.mdi-tumble-dryer:before {\n  content: \"\\F916\";\n}\n\n.mdi-tumblr:before {\n  content: \"\\F541\";\n}\n\n.mdi-tumblr-box:before {\n  content: \"\\F917\";\n}\n\n.mdi-tumblr-reblog:before {\n  content: \"\\F542\";\n}\n\n.mdi-tune:before {\n  content: \"\\F62E\";\n}\n\n.mdi-tune-vertical:before {\n  content: \"\\F66A\";\n}\n\n.mdi-twitch:before {\n  content: \"\\F543\";\n}\n\n.mdi-twitter:before {\n  content: \"\\F544\";\n}\n\n.mdi-twitter-box:before {\n  content: \"\\F545\";\n}\n\n.mdi-twitter-circle:before {\n  content: \"\\F546\";\n}\n\n.mdi-twitter-retweet:before {\n  content: \"\\F547\";\n}\n\n.mdi-two-factor-authentication:before {\n  content: \"\\F9AE\";\n}\n\n.mdi-uber:before {\n  content: \"\\F748\";\n}\n\n.mdi-ubisoft:before {\n  content: \"\\FBB6\";\n}\n\n.mdi-ubuntu:before {\n  content: \"\\F548\";\n}\n\n.mdi-ultra-high-definition:before {\n  content: \"\\F7F8\";\n}\n\n.mdi-umbraco:before {\n  content: \"\\F549\";\n}\n\n.mdi-umbrella:before {\n  content: \"\\F54A\";\n}\n\n.mdi-umbrella-closed:before {\n  content: \"\\F9AF\";\n}\n\n.mdi-umbrella-outline:before {\n  content: \"\\F54B\";\n}\n\n.mdi-undo:before {\n  content: \"\\F54C\";\n}\n\n.mdi-undo-variant:before {\n  content: \"\\F54D\";\n}\n\n.mdi-unfold-less-horizontal:before {\n  content: \"\\F54E\";\n}\n\n.mdi-unfold-less-vertical:before {\n  content: \"\\F75F\";\n}\n\n.mdi-unfold-more-horizontal:before {\n  content: \"\\F54F\";\n}\n\n.mdi-unfold-more-vertical:before {\n  content: \"\\F760\";\n}\n\n.mdi-ungroup:before {\n  content: \"\\F550\";\n}\n\n.mdi-unity:before {\n  content: \"\\F6AE\";\n}\n\n.mdi-unreal:before {\n  content: \"\\F9B0\";\n}\n\n.mdi-untappd:before {\n  content: \"\\F551\";\n}\n\n.mdi-update:before {\n  content: \"\\F6AF\";\n}\n\n.mdi-upload:before {\n  content: \"\\F552\";\n}\n\n.mdi-upload-multiple:before {\n  content: \"\\F83C\";\n}\n\n.mdi-upload-network:before {\n  content: \"\\F6F5\";\n}\n\n.mdi-usb:before {\n  content: \"\\F553\";\n}\n\n.mdi-van-passenger:before {\n  content: \"\\F7F9\";\n}\n\n.mdi-van-utility:before {\n  content: \"\\F7FA\";\n}\n\n.mdi-vanish:before {\n  content: \"\\F7FB\";\n}\n\n.mdi-variable:before {\n  content: \"\\FAE6\";\n}\n\n.mdi-vector-arrange-above:before {\n  content: \"\\F554\";\n}\n\n.mdi-vector-arrange-below:before {\n  content: \"\\F555\";\n}\n\n.mdi-vector-bezier:before {\n  content: \"\\FAE7\";\n}\n\n.mdi-vector-circle:before {\n  content: \"\\F556\";\n}\n\n.mdi-vector-circle-variant:before {\n  content: \"\\F557\";\n}\n\n.mdi-vector-combine:before {\n  content: \"\\F558\";\n}\n\n.mdi-vector-curve:before {\n  content: \"\\F559\";\n}\n\n.mdi-vector-difference:before {\n  content: \"\\F55A\";\n}\n\n.mdi-vector-difference-ab:before {\n  content: \"\\F55B\";\n}\n\n.mdi-vector-difference-ba:before {\n  content: \"\\F55C\";\n}\n\n.mdi-vector-ellipse:before {\n  content: \"\\F892\";\n}\n\n.mdi-vector-intersection:before {\n  content: \"\\F55D\";\n}\n\n.mdi-vector-line:before {\n  content: \"\\F55E\";\n}\n\n.mdi-vector-point:before {\n  content: \"\\F55F\";\n}\n\n.mdi-vector-polygon:before {\n  content: \"\\F560\";\n}\n\n.mdi-vector-polyline:before {\n  content: \"\\F561\";\n}\n\n.mdi-vector-radius:before {\n  content: \"\\F749\";\n}\n\n.mdi-vector-rectangle:before {\n  content: \"\\F5C6\";\n}\n\n.mdi-vector-selection:before {\n  content: \"\\F562\";\n}\n\n.mdi-vector-square:before {\n  content: \"\\F001\";\n}\n\n.mdi-vector-triangle:before {\n  content: \"\\F563\";\n}\n\n.mdi-vector-union:before {\n  content: \"\\F564\";\n}\n\n.mdi-venmo:before {\n  content: \"\\F578\";\n}\n\n.mdi-verified:before {\n  content: \"\\F565\";\n}\n\n.mdi-vhs:before {\n  content: \"\\FA1A\";\n}\n\n.mdi-vibrate:before {\n  content: \"\\F566\";\n}\n\n.mdi-video:before {\n  content: \"\\F567\";\n}\n\n.mdi-video-3d:before {\n  content: \"\\F7FC\";\n}\n\n.mdi-video-4k-box:before {\n  content: \"\\F83D\";\n}\n\n.mdi-video-account:before {\n  content: \"\\F918\";\n}\n\n.mdi-video-image:before {\n  content: \"\\F919\";\n}\n\n.mdi-video-input-antenna:before {\n  content: \"\\F83E\";\n}\n\n.mdi-video-input-component:before {\n  content: \"\\F83F\";\n}\n\n.mdi-video-input-hdmi:before {\n  content: \"\\F840\";\n}\n\n.mdi-video-input-svideo:before {\n  content: \"\\F841\";\n}\n\n.mdi-video-minus:before {\n  content: \"\\F9B1\";\n}\n\n.mdi-video-off:before {\n  content: \"\\F568\";\n}\n\n.mdi-video-off-outline:before {\n  content: \"\\FBB7\";\n}\n\n.mdi-video-outline:before {\n  content: \"\\FBB8\";\n}\n\n.mdi-video-plus:before {\n  content: \"\\F9B2\";\n}\n\n.mdi-video-stabilization:before {\n  content: \"\\F91A\";\n}\n\n.mdi-video-switch:before {\n  content: \"\\F569\";\n}\n\n.mdi-video-vintage:before {\n  content: \"\\FA1B\";\n}\n\n.mdi-view-agenda:before {\n  content: \"\\F56A\";\n}\n\n.mdi-view-array:before {\n  content: \"\\F56B\";\n}\n\n.mdi-view-carousel:before {\n  content: \"\\F56C\";\n}\n\n.mdi-view-column:before {\n  content: \"\\F56D\";\n}\n\n.mdi-view-dashboard:before {\n  content: \"\\F56E\";\n}\n\n.mdi-view-dashboard-outline:before {\n  content: \"\\FA1C\";\n}\n\n.mdi-view-dashboard-variant:before {\n  content: \"\\F842\";\n}\n\n.mdi-view-day:before {\n  content: \"\\F56F\";\n}\n\n.mdi-view-grid:before {\n  content: \"\\F570\";\n}\n\n.mdi-view-headline:before {\n  content: \"\\F571\";\n}\n\n.mdi-view-list:before {\n  content: \"\\F572\";\n}\n\n.mdi-view-module:before {\n  content: \"\\F573\";\n}\n\n.mdi-view-parallel:before {\n  content: \"\\F727\";\n}\n\n.mdi-view-quilt:before {\n  content: \"\\F574\";\n}\n\n.mdi-view-sequential:before {\n  content: \"\\F728\";\n}\n\n.mdi-view-split-horizontal:before {\n  content: \"\\FBA7\";\n}\n\n.mdi-view-split-vertical:before {\n  content: \"\\FBA8\";\n}\n\n.mdi-view-stream:before {\n  content: \"\\F575\";\n}\n\n.mdi-view-week:before {\n  content: \"\\F576\";\n}\n\n.mdi-vimeo:before {\n  content: \"\\F577\";\n}\n\n.mdi-violin:before {\n  content: \"\\F60F\";\n}\n\n.mdi-virtual-reality:before {\n  content: \"\\F893\";\n}\n\n.mdi-visual-studio:before {\n  content: \"\\F610\";\n}\n\n.mdi-visual-studio-code:before {\n  content: \"\\FA1D\";\n}\n\n.mdi-vk:before {\n  content: \"\\F579\";\n}\n\n.mdi-vk-box:before {\n  content: \"\\F57A\";\n}\n\n.mdi-vk-circle:before {\n  content: \"\\F57B\";\n}\n\n.mdi-vlc:before {\n  content: \"\\F57C\";\n}\n\n.mdi-voice:before {\n  content: \"\\F5CB\";\n}\n\n.mdi-voicemail:before {\n  content: \"\\F57D\";\n}\n\n.mdi-volleyball:before {\n  content: \"\\F9B3\";\n}\n\n.mdi-volume-high:before {\n  content: \"\\F57E\";\n}\n\n.mdi-volume-low:before {\n  content: \"\\F57F\";\n}\n\n.mdi-volume-medium:before {\n  content: \"\\F580\";\n}\n\n.mdi-volume-minus:before {\n  content: \"\\F75D\";\n}\n\n.mdi-volume-mute:before {\n  content: \"\\F75E\";\n}\n\n.mdi-volume-off:before {\n  content: \"\\F581\";\n}\n\n.mdi-volume-plus:before {\n  content: \"\\F75C\";\n}\n\n.mdi-vote:before {\n  content: \"\\FA1E\";\n}\n\n.mdi-vote-outline:before {\n  content: \"\\FA1F\";\n}\n\n.mdi-vpn:before {\n  content: \"\\F582\";\n}\n\n.mdi-vuejs:before {\n  content: \"\\F843\";\n}\n\n.mdi-walk:before {\n  content: \"\\F583\";\n}\n\n.mdi-wall:before {\n  content: \"\\F7FD\";\n}\n\n.mdi-wall-sconce:before {\n  content: \"\\F91B\";\n}\n\n.mdi-wall-sconce-flat:before {\n  content: \"\\F91C\";\n}\n\n.mdi-wall-sconce-variant:before {\n  content: \"\\F91D\";\n}\n\n.mdi-wallet:before {\n  content: \"\\F584\";\n}\n\n.mdi-wallet-giftcard:before {\n  content: \"\\F585\";\n}\n\n.mdi-wallet-membership:before {\n  content: \"\\F586\";\n}\n\n.mdi-wallet-outline:before {\n  content: \"\\FBB9\";\n}\n\n.mdi-wallet-travel:before {\n  content: \"\\F587\";\n}\n\n.mdi-wan:before {\n  content: \"\\F588\";\n}\n\n.mdi-washing-machine:before {\n  content: \"\\F729\";\n}\n\n.mdi-watch:before {\n  content: \"\\F589\";\n}\n\n.mdi-watch-export:before {\n  content: \"\\F58A\";\n}\n\n.mdi-watch-export-variant:before {\n  content: \"\\F894\";\n}\n\n.mdi-watch-import:before {\n  content: \"\\F58B\";\n}\n\n.mdi-watch-import-variant:before {\n  content: \"\\F895\";\n}\n\n.mdi-watch-variant:before {\n  content: \"\\F896\";\n}\n\n.mdi-watch-vibrate:before {\n  content: \"\\F6B0\";\n}\n\n.mdi-water:before {\n  content: \"\\F58C\";\n}\n\n.mdi-water-off:before {\n  content: \"\\F58D\";\n}\n\n.mdi-water-percent:before {\n  content: \"\\F58E\";\n}\n\n.mdi-water-pump:before {\n  content: \"\\F58F\";\n}\n\n.mdi-watermark:before {\n  content: \"\\F612\";\n}\n\n.mdi-waves:before {\n  content: \"\\F78C\";\n}\n\n.mdi-waze:before {\n  content: \"\\FBBA\";\n}\n\n.mdi-weather-cloudy:before {\n  content: \"\\F590\";\n}\n\n.mdi-weather-fog:before {\n  content: \"\\F591\";\n}\n\n.mdi-weather-hail:before {\n  content: \"\\F592\";\n}\n\n.mdi-weather-hurricane:before {\n  content: \"\\F897\";\n}\n\n.mdi-weather-lightning:before {\n  content: \"\\F593\";\n}\n\n.mdi-weather-lightning-rainy:before {\n  content: \"\\F67D\";\n}\n\n.mdi-weather-night:before {\n  content: \"\\F594\";\n}\n\n.mdi-weather-partlycloudy:before {\n  content: \"\\F595\";\n}\n\n.mdi-weather-pouring:before {\n  content: \"\\F596\";\n}\n\n.mdi-weather-rainy:before {\n  content: \"\\F597\";\n}\n\n.mdi-weather-snowy:before {\n  content: \"\\F598\";\n}\n\n.mdi-weather-snowy-rainy:before {\n  content: \"\\F67E\";\n}\n\n.mdi-weather-sunny:before {\n  content: \"\\F599\";\n}\n\n.mdi-weather-sunset:before {\n  content: \"\\F59A\";\n}\n\n.mdi-weather-sunset-down:before {\n  content: \"\\F59B\";\n}\n\n.mdi-weather-sunset-up:before {\n  content: \"\\F59C\";\n}\n\n.mdi-weather-windy:before {\n  content: \"\\F59D\";\n}\n\n.mdi-weather-windy-variant:before {\n  content: \"\\F59E\";\n}\n\n.mdi-web:before {\n  content: \"\\F59F\";\n}\n\n.mdi-webcam:before {\n  content: \"\\F5A0\";\n}\n\n.mdi-webhook:before {\n  content: \"\\F62F\";\n}\n\n.mdi-webpack:before {\n  content: \"\\F72A\";\n}\n\n.mdi-wechat:before {\n  content: \"\\F611\";\n}\n\n.mdi-weight:before {\n  content: \"\\F5A1\";\n}\n\n.mdi-weight-kilogram:before {\n  content: \"\\F5A2\";\n}\n\n.mdi-weight-pound:before {\n  content: \"\\F9B4\";\n}\n\n.mdi-whatsapp:before {\n  content: \"\\F5A3\";\n}\n\n.mdi-wheelchair-accessibility:before {\n  content: \"\\F5A4\";\n}\n\n.mdi-whistle:before {\n  content: \"\\F9B5\";\n}\n\n.mdi-white-balance-auto:before {\n  content: \"\\F5A5\";\n}\n\n.mdi-white-balance-incandescent:before {\n  content: \"\\F5A6\";\n}\n\n.mdi-white-balance-iridescent:before {\n  content: \"\\F5A7\";\n}\n\n.mdi-white-balance-sunny:before {\n  content: \"\\F5A8\";\n}\n\n.mdi-widgets:before {\n  content: \"\\F72B\";\n}\n\n.mdi-wifi:before {\n  content: \"\\F5A9\";\n}\n\n.mdi-wifi-off:before {\n  content: \"\\F5AA\";\n}\n\n.mdi-wifi-strength-1:before {\n  content: \"\\F91E\";\n}\n\n.mdi-wifi-strength-1-alert:before {\n  content: \"\\F91F\";\n}\n\n.mdi-wifi-strength-1-lock:before {\n  content: \"\\F920\";\n}\n\n.mdi-wifi-strength-2:before {\n  content: \"\\F921\";\n}\n\n.mdi-wifi-strength-2-alert:before {\n  content: \"\\F922\";\n}\n\n.mdi-wifi-strength-2-lock:before {\n  content: \"\\F923\";\n}\n\n.mdi-wifi-strength-3:before {\n  content: \"\\F924\";\n}\n\n.mdi-wifi-strength-3-alert:before {\n  content: \"\\F925\";\n}\n\n.mdi-wifi-strength-3-lock:before {\n  content: \"\\F926\";\n}\n\n.mdi-wifi-strength-4:before {\n  content: \"\\F927\";\n}\n\n.mdi-wifi-strength-4-alert:before {\n  content: \"\\F928\";\n}\n\n.mdi-wifi-strength-4-lock:before {\n  content: \"\\F929\";\n}\n\n.mdi-wifi-strength-alert-outline:before {\n  content: \"\\F92A\";\n}\n\n.mdi-wifi-strength-lock-outline:before {\n  content: \"\\F92B\";\n}\n\n.mdi-wifi-strength-off:before {\n  content: \"\\F92C\";\n}\n\n.mdi-wifi-strength-off-outline:before {\n  content: \"\\F92D\";\n}\n\n.mdi-wifi-strength-outline:before {\n  content: \"\\F92E\";\n}\n\n.mdi-wii:before {\n  content: \"\\F5AB\";\n}\n\n.mdi-wiiu:before {\n  content: \"\\F72C\";\n}\n\n.mdi-wikipedia:before {\n  content: \"\\F5AC\";\n}\n\n.mdi-window-close:before {\n  content: \"\\F5AD\";\n}\n\n.mdi-window-closed:before {\n  content: \"\\F5AE\";\n}\n\n.mdi-window-maximize:before {\n  content: \"\\F5AF\";\n}\n\n.mdi-window-minimize:before {\n  content: \"\\F5B0\";\n}\n\n.mdi-window-open:before {\n  content: \"\\F5B1\";\n}\n\n.mdi-window-restore:before {\n  content: \"\\F5B2\";\n}\n\n.mdi-windows:before {\n  content: \"\\F5B3\";\n}\n\n.mdi-windows-classic:before {\n  content: \"\\FA20\";\n}\n\n.mdi-wiper:before {\n  content: \"\\FAE8\";\n}\n\n.mdi-wordpress:before {\n  content: \"\\F5B4\";\n}\n\n.mdi-worker:before {\n  content: \"\\F5B5\";\n}\n\n.mdi-wrap:before {\n  content: \"\\F5B6\";\n}\n\n.mdi-wrap-disabled:before {\n  content: \"\\FBBB\";\n}\n\n.mdi-wrench:before {\n  content: \"\\F5B7\";\n}\n\n.mdi-wrench-outline:before {\n  content: \"\\FBBC\";\n}\n\n.mdi-wunderlist:before {\n  content: \"\\F5B8\";\n}\n\n.mdi-xamarin:before {\n  content: \"\\F844\";\n}\n\n.mdi-xamarin-outline:before {\n  content: \"\\F845\";\n}\n\n.mdi-xaml:before {\n  content: \"\\F673\";\n}\n\n.mdi-xbox:before {\n  content: \"\\F5B9\";\n}\n\n.mdi-xbox-controller:before {\n  content: \"\\F5BA\";\n}\n\n.mdi-xbox-controller-battery-alert:before {\n  content: \"\\F74A\";\n}\n\n.mdi-xbox-controller-battery-charging:before {\n  content: \"\\FA21\";\n}\n\n.mdi-xbox-controller-battery-empty:before {\n  content: \"\\F74B\";\n}\n\n.mdi-xbox-controller-battery-full:before {\n  content: \"\\F74C\";\n}\n\n.mdi-xbox-controller-battery-low:before {\n  content: \"\\F74D\";\n}\n\n.mdi-xbox-controller-battery-medium:before {\n  content: \"\\F74E\";\n}\n\n.mdi-xbox-controller-battery-unknown:before {\n  content: \"\\F74F\";\n}\n\n.mdi-xbox-controller-off:before {\n  content: \"\\F5BB\";\n}\n\n.mdi-xda:before {\n  content: \"\\F5BC\";\n}\n\n.mdi-xing:before {\n  content: \"\\F5BD\";\n}\n\n.mdi-xing-box:before {\n  content: \"\\F5BE\";\n}\n\n.mdi-xing-circle:before {\n  content: \"\\F5BF\";\n}\n\n.mdi-xml:before {\n  content: \"\\F5C0\";\n}\n\n.mdi-xmpp:before {\n  content: \"\\F7FE\";\n}\n\n.mdi-yahoo:before {\n  content: \"\\FB2A\";\n}\n\n.mdi-yammer:before {\n  content: \"\\F788\";\n}\n\n.mdi-yeast:before {\n  content: \"\\F5C1\";\n}\n\n.mdi-yelp:before {\n  content: \"\\F5C2\";\n}\n\n.mdi-yin-yang:before {\n  content: \"\\F67F\";\n}\n\n.mdi-youtube:before {\n  content: \"\\F5C3\";\n}\n\n.mdi-youtube-creator-studio:before {\n  content: \"\\F846\";\n}\n\n.mdi-youtube-gaming:before {\n  content: \"\\F847\";\n}\n\n.mdi-youtube-tv:before {\n  content: \"\\F448\";\n}\n\n.mdi-z-wave:before {\n  content: \"\\FAE9\";\n}\n\n.mdi-zend:before {\n  content: \"\\FAEA\";\n}\n\n.mdi-zip-box:before {\n  content: \"\\F5C4\";\n}\n\n.mdi-zip-disk:before {\n  content: \"\\FA22\";\n}\n\n.mdi-zodiac-aquarius:before {\n  content: \"\\FA7C\";\n}\n\n.mdi-zodiac-aries:before {\n  content: \"\\FA7D\";\n}\n\n.mdi-zodiac-cancer:before {\n  content: \"\\FA7E\";\n}\n\n.mdi-zodiac-capricorn:before {\n  content: \"\\FA7F\";\n}\n\n.mdi-zodiac-gemini:before {\n  content: \"\\FA80\";\n}\n\n.mdi-zodiac-leo:before {\n  content: \"\\FA81\";\n}\n\n.mdi-zodiac-libra:before {\n  content: \"\\FA82\";\n}\n\n.mdi-zodiac-pisces:before {\n  content: \"\\FA83\";\n}\n\n.mdi-zodiac-sagittarius:before {\n  content: \"\\FA84\";\n}\n\n.mdi-zodiac-scorpio:before {\n  content: \"\\FA85\";\n}\n\n.mdi-zodiac-taurus:before {\n  content: \"\\FA86\";\n}\n\n.mdi-zodiac-virgo:before {\n  content: \"\\FA87\";\n}\n\n.mdi-blank:before {\n  content: \"\\F68C\";\n  visibility: hidden;\n}\n\n.mdi-18px.mdi-set, .mdi-18px.mdi:before {\n  font-size: 18px;\n}\n\n.mdi-24px.mdi-set, .mdi-24px.mdi:before {\n  font-size: 24px;\n}\n\n.mdi-36px.mdi-set, .mdi-36px.mdi:before {\n  font-size: 36px;\n}\n\n.mdi-48px.mdi-set, .mdi-48px.mdi:before {\n  font-size: 48px;\n}\n\n.mdi-dark:before {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mdi-dark.mdi-inactive:before {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.mdi-light:before {\n  color: white;\n}\n.mdi-light.mdi-inactive:before {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.mdi-rotate-45 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(45deg);\n      transform: scaleX(-1) rotate(45deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: scaleY(-1) rotate(45deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-45:before {\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.mdi-rotate-90 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(90deg);\n      transform: scaleX(-1) rotate(90deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(90deg);\n      -ms-transform: rotate(90deg);\n      transform: scaleY(-1) rotate(90deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-90:before {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.mdi-rotate-135 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(135deg);\n      transform: scaleX(-1) rotate(135deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(135deg);\n      -ms-transform: rotate(135deg);\n      transform: scaleY(-1) rotate(135deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-135:before {\n  -webkit-transform: rotate(135deg);\n  -ms-transform: rotate(135deg);\n  transform: rotate(135deg);\n}\n\n.mdi-rotate-180 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(180deg);\n      transform: scaleX(-1) rotate(180deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(180deg);\n      -ms-transform: rotate(180deg);\n      transform: scaleY(-1) rotate(180deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-180:before {\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.mdi-rotate-225 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(225deg);\n      transform: scaleX(-1) rotate(225deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(225deg);\n      -ms-transform: rotate(225deg);\n      transform: scaleY(-1) rotate(225deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-225:before {\n  -webkit-transform: rotate(225deg);\n  -ms-transform: rotate(225deg);\n  transform: rotate(225deg);\n}\n\n.mdi-rotate-270 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(270deg);\n      transform: scaleX(-1) rotate(270deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(270deg);\n      -ms-transform: rotate(270deg);\n      transform: scaleY(-1) rotate(270deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-270:before {\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n\n.mdi-rotate-315 {\n  /*\n  // Not included in production\n  &.mdi-flip-h:before {\n      -webkit-transform: scaleX(-1) rotate(315deg);\n      transform: scaleX(-1) rotate(315deg);\n      filter: FlipH;\n      -ms-filter: \"FlipH\";\n  }\n  &.mdi-flip-v:before {\n      -webkit-transform: scaleY(-1) rotate(315deg);\n      -ms-transform: rotate(315deg);\n      transform: scaleY(-1) rotate(315deg);\n      filter: FlipV;\n      -ms-filter: \"FlipV\";\n  }\n  */\n}\n.mdi-rotate-315:before {\n  -webkit-transform: rotate(315deg);\n  -ms-transform: rotate(315deg);\n  transform: rotate(315deg);\n}\n\n.mdi-flip-h:before {\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n\n.mdi-flip-v:before {\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n  filter: FlipV;\n  -ms-filter: \"FlipV\";\n}\n\n.mdi-spin:before {\n  -webkit-animation: mdi-spin 2s infinite linear;\n  animation: mdi-spin 2s infinite linear;\n}\n\n@-webkit-keyframes mdi-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes mdi-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/roboto-font/roboto-font.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/quasar-extras/roboto-font/roboto-font.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: url(" + escape(__webpack_require__(/*! ./web-font/KFOkCnqEu92Fr1MmgVxIIzQ.woff */ "./node_modules/quasar-extras/roboto-font/web-font/KFOkCnqEu92Fr1MmgVxIIzQ.woff")) + ") format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(" + escape(__webpack_require__(/*! ./web-font/KFOlCnqEu92Fr1MmSU5fBBc-.woff */ "./node_modules/quasar-extras/roboto-font/web-font/KFOlCnqEu92Fr1MmSU5fBBc-.woff")) + ") format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + escape(__webpack_require__(/*! ./web-font/KFOmCnqEu92Fr1Mu4mxM.woff */ "./node_modules/quasar-extras/roboto-font/web-font/KFOmCnqEu92Fr1Mu4mxM.woff")) + ") format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(" + escape(__webpack_require__(/*! ./web-font/KFOlCnqEu92Fr1MmEU9fBBc-.woff */ "./node_modules/quasar-extras/roboto-font/web-font/KFOlCnqEu92Fr1MmEU9fBBc-.woff")) + ") format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + escape(__webpack_require__(/*! ./web-font/KFOlCnqEu92Fr1MmWUlfBBc-.woff */ "./node_modules/quasar-extras/roboto-font/web-font/KFOlCnqEu92Fr1MmWUlfBBc-.woff")) + ") format('woff');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 900;\n  src: url(" + escape(__webpack_require__(/*! ./web-font/KFOlCnqEu92Fr1MmYUtfBBc-.woff */ "./node_modules/quasar-extras/roboto-font/web-font/KFOlCnqEu92Fr1MmYUtfBBc-.woff")) + ") format('woff');\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/stylus-loader/index.js!./node_modules/quasar-framework/dist/quasar.mat.styl":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/stylus-loader!./node_modules/quasar-framework/dist/quasar.mat.styl ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Quasar Framework v0.17.18\n * (c) 2016-present Razvan Stoenescu\n * Released under the MIT License.\n */\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  -webkit-tap-highlight-color: transparent;\n  -moz-tap-highlight-color: transparent;\n}\nhtml,\nbody,\n#q-app {\n  width: 100%;\n  direction: ltr;\n}\nhtml,\nbody {\n  margin: 0;\n  box-sizing: border-box;\n}\ninput[type='text'],\ninput[type='email'],\ninput[type='search'],\ninput[type='password'] {\n  -webkit-appearance: none;\n  -moz-appearance: none /* mobile firefox too! */;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\ndfn {\n  font-style: italic;\n}\nimg {\n  border-style: none;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n  margin: 0;\n}\noptgroup {\n  font-weight: bold;\n}\nbutton,\ninput,\nselect {\n  overflow: visible;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\nbutton:-moz-focusring,\ninput:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\ntextarea {\n  overflow: auto;\n}\ninput[type='search'] {\n  -webkit-appearance: textfield;\n}\ninput[type='search']::-webkit-search-cancel-button,\ninput[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n.q-icon {\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n.q-icon,\n.material-icons {\n  user-select: none;\n  cursor: inherit;\n  font-size: inherit;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n}\n.q-actionsheet-title {\n  min-height: 56px;\n  padding: 0 16px;\n  color: #777;\n  color: var(--q-color-faded);\n}\n.q-actionsheet-body {\n  max-height: 500px;\n}\n.q-actionsheet-grid {\n  padding: 8px 16px;\n}\n.q-actionsheet-grid .q-item-separator-component {\n  margin: 24px 0;\n}\n.q-actionsheet-grid-item {\n  padding: 8px 16px;\n  transition: background 0.3s;\n}\n.q-actionsheet-grid-item:hover,\n.q-actionsheet-grid-item:focus {\n  background: #d0d0d0;\n  outline: 0;\n}\n.q-actionsheet-grid-item i,\n.q-actionsheet-grid-item img {\n  font-size: 48px;\n  margin-bottom: 8px;\n}\n.q-actionsheet-grid-item .avatar {\n  width: 48px;\n  height: 48px;\n}\n.q-actionsheet-grid-item span {\n  color: #777;\n  color: var(--q-color-faded);\n}\n.q-loading-bar {\n  position: fixed;\n  z-index: 9998;\n  transition: transform 0.5s cubic-bezier(0, 0, 0.2, 1), opacity 0.5s;\n}\n.q-loading-bar.top {\n  left: 0 /* rtl:ignore */;\n  right: 0 /* rtl:ignore */;\n  top: 0;\n  width: 100%;\n}\n.q-loading-bar.bottom {\n  left: 0 /* rtl:ignore */;\n  right: 0 /* rtl:ignore */;\n  bottom: 0;\n  width: 100%;\n}\n.q-loading-bar.right {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n}\n.q-loading-bar.left {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n}\n.q-alert {\n  border-radius: 3px;\n  box-shadow: none;\n}\n.q-alert .avatar {\n  width: 32px;\n  height: 32px;\n}\n.q-alert-side,\n.q-alert-content {\n  padding: 12px;\n  font-size: 16px;\n  word-break: break-word;\n}\n.q-alert-side {\n  font-size: 24px;\n  background: rgba(0,0,0,0.1);\n}\n.q-alert-actions {\n  padding: 12px 12px 12px 0;\n}\n.q-alert-detail {\n  font-size: 12px;\n}\n.q-breadcrumbs .q-icon,\n.q-breadcrumbs .q-breadcrumbs-separator {\n  font-size: 150%;\n}\n.q-breadcrumbs-last a {\n  pointer-events: none;\n}\n[dir=rtl] .q-breadcrumbs-separator .q-icon {\n  transform: scaleX(-1) /* rtl:ignore */;\n}\n.q-btn {\n  outline: 0;\n  border: 0;\n  vertical-align: middle;\n  cursor: pointer;\n  padding: 4px 16px;\n  font-size: 14px;\n  text-decoration: none;\n  color: inherit;\n  background: transparent;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  min-height: 2.572em;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  font-weight: 500;\n  text-transform: uppercase;\n}\nbutton.q-btn {\n  -webkit-appearance: button;\n}\na.q-btn {\n  display: inline-flex;\n}\n.q-btn .q-icon,\n.q-btn .q-spinner {\n  font-size: 1.4em;\n}\n.q-btn .q-btn-inner:before {\n  content: '';\n}\n.q-btn.disabled {\n  opacity: 0.7 !important;\n}\n.q-btn:not(.disabled):not(.q-btn-flat):not(.q-btn-outline):not(.q-btn-push):before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: inherit;\n  z-index: -1;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.q-btn:not(.disabled):not(.q-btn-flat):not(.q-btn-outline):not(.q-btn-push):active:before,\n.q-btn:not(.disabled):not(.q-btn-flat):not(.q-btn-outline):not(.q-btn-push).active:before {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);\n}\n.q-btn-progress {\n  transition: all 0.3s;\n  height: 100%;\n  background: rgba(255,255,255,0.25);\n}\n.q-btn-progress.q-btn-dark-progress {\n  background: rgba(0,0,0,0.2);\n}\n.q-btn-no-uppercase {\n  text-transform: none;\n}\n.q-btn-rectangle {\n  border-radius: 3px;\n}\n.q-btn-outline {\n  border: 1px solid currentColor;\n  background: transparent !important;\n}\n.q-btn-push {\n  border-radius: 7px;\n  border-bottom: 3px solid rgba(0,0,0,0.15);\n}\n.q-btn-push:active:not(.disabled),\n.q-btn-push.active:not(.disabled) {\n  box-shadow: none;\n  transform: translateY(3px);\n  border-bottom-color: transparent;\n}\n.q-btn-push .q-focus-helper,\n.q-btn-push .q-ripple-container {\n  height: auto;\n  bottom: -3px;\n}\n.q-btn-rounded {\n  border-radius: 28px;\n}\n.q-btn-round {\n  border-radius: 50%;\n  padding: 0;\n  min-height: 0;\n  height: 3em;\n  width: 3em;\n}\n.q-btn-flat,\n.q-btn-outline {\n  box-shadow: none;\n}\n.q-btn-dense {\n  padding: 0.285em;\n  min-height: 2em;\n}\n.q-btn-dense.q-btn-round {\n  padding: 0;\n  height: 2.4em;\n  width: 2.4em;\n}\n.q-btn-dense .on-left {\n  margin-right: 6px;\n}\n.q-btn-dense .on-right {\n  margin-left: 6px;\n}\n.q-btn-fab .q-icon,\n.q-btn-fab-mini .q-icon {\n  font-size: 24px;\n}\n.q-btn-fab {\n  height: 56px;\n  width: 56px;\n}\n.q-btn-fab-mini {\n  height: 40px;\n  width: 40px;\n}\n.q-btn-dropdown-split .q-btn-dropdown-arrow {\n  padding: 0 4px;\n  border-left: 1px solid rgba(255,255,255,0.3);\n}\n.q-btn-group {\n  border-radius: 3px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  vertical-align: middle;\n}\n.q-btn-group > .q-btn-item {\n  box-shadow: none;\n}\n.q-btn-group > .q-btn-group > .q-btn:first-child {\n  border-top-left-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n.q-btn-group > .q-btn-group > .q-btn:last-child {\n  border-top-right-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n.q-btn-group > .q-btn-group:not(:first-child) > .q-btn:first-child {\n  border-left: 0;\n}\n.q-btn-group > .q-btn-group:not(:last-child) > .q-btn:last-child {\n  border-right: 0;\n}\n.q-btn-group > .q-btn-item:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.q-btn-group > .q-btn-item + .q-btn-item {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.q-btn-group-push {\n  border-radius: 7px;\n}\n.q-btn-group-push > .q-btn-push .q-btn-inner {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.q-btn-group-push > .q-btn-push:active:not(.disabled),\n.q-btn-group-push > .q-btn-push.active:not(.disabled) {\n  border-bottom-color: rgba(0,0,0,0.15);\n  transform: translateY(0);\n}\n.q-btn-group-push > .q-btn-push:active:not(.disabled) .q-btn-inner,\n.q-btn-group-push > .q-btn-push.active:not(.disabled) .q-btn-inner {\n  transform: translateY(3px);\n}\n.q-btn-group-rounded {\n  border-radius: 28px;\n}\n.q-btn-group-flat,\n.q-btn-group-outline {\n  box-shadow: none;\n}\n.q-btn-group-outline > .q-btn-item + .q-btn-item {\n  border-left: 0;\n}\n.q-btn-group-outline > .q-btn-item:not(:last-child) {\n  border-right: 0;\n}\n.q-card {\n  border-radius: 3px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  vertical-align: top;\n}\n.q-card > div:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.q-card > div:last-child {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n.q-card > .q-list {\n  border: 0;\n}\n.q-card-separator {\n  background: rgba(0,0,0,0.1);\n  height: 1px;\n}\n.q-card-separator.inset {\n  margin: 0 16px;\n}\n.q-card-container {\n  padding: 16px;\n}\n.q-card-title {\n  font-size: 18px;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 2rem;\n}\n.q-card-title:empty {\n  display: none;\n}\n.q-card-subtitle,\n.q-card-title-extra {\n  font-size: 14px;\n  color: rgba(0,0,0,0.4);\n}\n.q-card-subtitle .q-icon,\n.q-card-title-extra .q-icon {\n  font-size: 24px;\n}\n.q-card-main {\n  font-size: 14px;\n}\n.q-card-primary + .q-card-main {\n  padding-top: 0;\n}\n.q-card-actions {\n  padding: 8px;\n}\n.q-card-actions .q-btn {\n  padding: 0 8px;\n}\n.q-card-actions-horiz .q-btn + .q-btn {\n  margin-left: 8px;\n}\n.q-card-actions-vert .q-btn + .q-btn {\n  margin-top: 4px;\n}\n.q-card-media {\n  overflow: hidden;\n}\n.q-card-media > img {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  border: 0;\n}\n.q-card-media-overlay {\n  color: #fff;\n  background: rgba(0,0,0,0.47);\n}\n.q-card-media-overlay .q-card-subtitle {\n  color: #fff;\n}\n.q-card-dark .q-card-separator {\n  background: rgba(255,255,255,0.2);\n}\n.q-card-dark .q-card-subtitle,\n.q-card-dark .q-card-title-extra {\n  color: rgba(255,255,255,0.6);\n}\n.q-carousel {\n  overflow: hidden;\n  position: relative;\n}\n.q-carousel-inner {\n  position: relative;\n  height: 100%;\n}\n.q-carousel-slide {\n  flex: 0 0 100%;\n  margin: 0;\n  padding: 18px;\n}\n.q-carousel-track {\n  padding: 0;\n  margin: 0;\n  will-change: transform;\n  display: flex;\n  flex-wrap: nowrap;\n  height: 100%;\n}\n.q-carousel-track.infinite-left > div:nth-last-child(2) {\n  order: -1000;\n  margin-left: -100%;\n}\n.q-carousel-track.infinite-right > div:nth-child(2) {\n  order: 1000;\n}\n.q-carousel-left-arrow,\n.q-carousel-right-arrow {\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(0,0,0,0.3);\n}\n.q-carousel-left-arrow {\n  left: 5px;\n}\n.q-carousel-right-arrow {\n  right: 5px;\n}\n.q-carousel-quick-nav {\n  padding: 2px 0;\n  background: rgba(0,0,0,0.3);\n}\n.q-carousel-quick-nav .q-icon {\n  font-size: 18px !important;\n}\n.q-carousel-quick-nav .q-btn.inactive {\n  opacity: 0.5;\n}\n.q-carousel-quick-nav .q-btn.inactive .q-icon {\n  font-size: 14px !important;\n}\n.q-carousel-thumbnails {\n  will-change: transform;\n  transition: transform 0.3s;\n  transform: translateY(105%);\n  width: 100%;\n  height: auto;\n  max-height: 60%;\n  overflow: auto;\n  background: #000;\n  padding: 0.5rem;\n  text-align: center;\n  box-shadow: 0 -3px 6px rgba(0,0,0,0.16), 0 -5px 6px rgba(0,0,0,0.23);\n}\n.q-carousel-thumbnails.active {\n  transform: translateY(0);\n}\n.q-carousel-thumbnails img {\n  height: auto;\n  width: 100%;\n  display: block;\n  opacity: 0.5;\n  will-change: opacity;\n  transition: opacity 0.3s;\n  cursor: pointer;\n  border: 1px solid #000;\n}\n.q-carousel-thumbnails > div > div {\n  flex: 0 0 108px;\n}\n.q-carousel-thumbnails > div > div.active img,\n.q-carousel-thumbnails > div > div img.active {\n  opacity: 1;\n  border-color: #fff;\n}\n.q-carousel-thumbnail-btn {\n  background: rgba(0,0,0,0.3);\n  top: 5px;\n  right: 5px;\n}\nbody.desktop .q-carousel-thumbnails img:hover {\n  opacity: 1;\n}\n.q-message-name,\n.q-message-stamp,\n.q-message-label {\n  font-size: small;\n}\n.q-message-label {\n  margin: 24px 0;\n}\n.q-message-stamp {\n  color: inherit;\n  margin-top: 4px;\n  opacity: 0.6;\n  display: none;\n}\n.q-message-avatar {\n  border-radius: 50%;\n  width: 48px;\n  height: 48px;\n}\n.q-message {\n  margin-bottom: 8px;\n}\n.q-message:first-child .q-message-label {\n  margin-top: 0;\n}\n.q-message-received .q-message-avatar {\n  margin-right: 8px;\n}\n.q-message-received .q-message-text {\n  color: #81c784;\n  border-radius: 3px 3px 3px 0;\n}\n.q-message-received .q-message-text:last-child:before {\n  right: 100%;\n  border-right: 0 solid transparent;\n  border-left: 8px solid transparent;\n  border-bottom: 8px solid currentColor;\n}\n.q-message-received .q-message-text-content {\n  color: #000;\n}\n.q-message-sent .q-message-name {\n  text-align: right;\n}\n.q-message-sent .q-message-avatar {\n  margin-left: 8px;\n}\n.q-message-sent .q-message-container {\n  flex-direction: row-reverse;\n}\n.q-message-sent .q-message-text {\n  color: #e0e0e0;\n  border-radius: 3px 3px 0 3px;\n}\n.q-message-sent .q-message-text:last-child:before {\n  left: 100%;\n  border-left: 0 solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 8px solid currentColor;\n}\n.q-message-sent .q-message-text-content {\n  color: #000;\n}\n.q-message-text {\n  background: currentColor;\n  padding: 8px;\n  line-height: 1.2;\n  word-break: break-word;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n}\n.q-message-text + .q-message-text {\n  margin-top: 3px;\n}\n.q-message-text:last-child {\n  min-height: 48px;\n}\n.q-message-text:last-child .q-message-stamp {\n  display: block;\n}\n.q-message-text:last-child:before {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  width: 0;\n  height: 0;\n}\n.q-checkbox-icon {\n  height: 21px;\n  width: 21px;\n  font-size: 21px;\n  opacity: 0;\n}\n.q-chip {\n  min-height: 32px;\n  max-width: 100%;\n  padding: 0 12px;\n  font-size: 14px;\n  border: #e0e0e0;\n  border-radius: 2rem;\n  vertical-align: middle;\n  color: #000;\n  background: #eee;\n}\n.q-chip:focus .q-chip-close {\n  opacity: 0.8;\n}\n.q-chip .q-icon {\n  font-size: 24px;\n  line-height: 1;\n}\n.q-chip-main {\n  line-height: initial;\n  flex: 1 1 auto;\n}\n.q-chip-side {\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  min-width: 32px;\n  overflow: hidden;\n}\n.q-chip-side img {\n  width: 100%;\n  height: 100%;\n}\n.q-chip-left {\n  margin-left: -12px;\n  margin-right: 8px;\n}\n.q-chip-right {\n  margin-left: 2px;\n  margin-right: -12px;\n}\n.q-chip-square {\n  border-radius: 2px;\n}\n.q-chip-floating {\n  position: absolute;\n  top: -0.3em;\n  right: -0.3em;\n  pointer-events: none;\n  z-index: 1;\n}\n.q-chip-tag {\n  position: relative;\n  padding-left: 1.7rem;\n}\n.q-chip-tag:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 0.5rem;\n  margin-top: -0.25rem;\n  background: #fff;\n  width: 0.5rem;\n  height: 0.5rem;\n  box-shadow: 0 -1px 1px 0 rgba(0,0,0,0.3);\n  border-radius: 50%;\n}\n.q-chip-pointing {\n  position: relative;\n  z-index: 0;\n}\n.q-chip-pointing:before {\n  content: '';\n  z-index: -1;\n  background: inherit;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n}\n.q-chip-pointing-up {\n  margin-top: 0.8rem;\n}\n.q-chip-pointing-up:before {\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%) translateY(-22%) rotate(45deg);\n}\n.q-chip-pointing-down {\n  margin-bottom: 0.8rem;\n}\n.q-chip-pointing-down:before {\n  right: auto;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-78%) rotate(45deg);\n}\n.q-chip-pointing-right {\n  margin-right: 0.8rem;\n}\n.q-chip-pointing-right:before {\n  top: 50%;\n  right: 2px;\n  bottom: auto;\n  left: auto;\n  transform: translateX(33%) translateY(-50%) rotate(45deg);\n}\n.q-chip-pointing-left {\n  margin-left: 0.8rem;\n}\n.q-chip-pointing-left:before {\n  top: 50%;\n  left: 2px;\n  bottom: auto;\n  right: auto;\n  transform: translateX(-33%) translateY(-50%) rotate(45deg);\n}\n.q-chip-detail {\n  background: rgba(0,0,0,0.1);\n  opacity: 0.8;\n  padding: 0 5px;\n  border-radius: inherit;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.q-chip-small {\n  min-height: 26px;\n}\n.q-chip-small .q-chip-main {\n  padding: 4px 1px;\n  line-height: initial;\n}\n.q-chip-small .q-chip-side {\n  height: 26px;\n  width: 26px;\n  min-width: 26px;\n}\n.q-chip-small .q-chip-icon {\n  font-size: 16px;\n}\n.q-chip-dense {\n  min-height: 1px;\n  padding: 0 3px;\n  font-size: 12px;\n}\n.q-chip-dense.q-chip-tag {\n  padding-left: 1.3rem;\n}\n.q-chip-dense.q-chip-pointing:before {\n  width: 9px;\n  height: 9px;\n}\n.q-chip-dense .q-chip-main {\n  padding: 1px;\n}\n.q-chip-dense .q-chip-side {\n  height: 18px;\n  width: 18px;\n  min-width: 16px;\n  font-size: 14px;\n}\n.q-chip-dense .q-chip-left {\n  margin-left: -3px;\n  margin-right: 2px;\n}\n.q-chip-dense .q-chip-right {\n  margin-left: 2px;\n  margin-right: -2px;\n}\n.q-chip-dense .q-icon {\n  font-size: 16px;\n}\n.q-input-chips {\n  margin-top: -1px;\n  margin-bottom: -1px;\n}\n.q-input-chips .q-chip {\n  margin: 1px;\n}\n.q-input-chips input.q-input-target {\n  min-width: 70px !important;\n}\n.q-collapsible-sub-item {\n  padding: 8px 16px;\n}\n.q-collapsible-sub-item.indent {\n  padding-left: 48px;\n  padding-right: 0;\n}\n.q-collapsible-sub-item .q-card {\n  margin-bottom: 0;\n}\n.q-collapsible.router-link-active > .q-item {\n  background: rgba(189,189,189,0.4);\n}\n.q-collapsible {\n  transition: padding 0.5s;\n}\n.q-collapsible-popup-closed {\n  padding: 0 15px;\n}\n.q-collapsible-popup-closed .q-collapsible-inner {\n  border: 1px solid #e0e0e0;\n}\n.q-collapsible-popup-closed + .q-collapsible-popup-closed .q-collapsible-inner {\n  border-top: 0;\n}\n.q-collapsible-popup-opened {\n  padding: 15px 0;\n}\n.q-collapsible-popup-opened .q-collapsible-inner {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.q-collapsible-popup-opened + .q-collapsible-popup-opened,\n.q-collapsible-popup-opened:first-child {\n  padding-top: 0;\n}\n.q-collapsible-popup-opened:last-child {\n  padding-bottom: 0;\n}\n.q-collapsible-cursor-pointer > .q-collapsible-inner > .q-item {\n  cursor: pointer;\n}\n.q-collapsible-toggle-icon {\n  border-radius: 50%;\n  width: 1em;\n  text-align: center;\n}\n.q-color {\n  max-width: 100vw;\n  border: 1px solid #e0e0e0;\n  display: inline-block;\n  width: 100%;\n  background: #fff;\n}\n.q-color-saturation {\n  width: 100%;\n  height: 123px;\n}\n.q-color-saturation-white {\n  background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n}\n.q-color-saturation-black {\n  background: linear-gradient(to top, #000, rgba(0,0,0,0));\n}\n.q-color-saturation-circle {\n  width: 10px;\n  height: 10px;\n  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,0.3), 0 0 1px 2px rgba(0,0,0,0.4);\n  border-radius: 50%;\n  transform: translate(-5px, -5px);\n}\n.q-color-swatch,\n.q-color-alpha .q-slider-track {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==\") !important;\n}\n.q-color-swatch {\n  position: relative;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n}\n.q-color-hue .q-slider-track {\n  border-radius: 2px;\n  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n  opacity: 1;\n  height: 8px;\n}\n.q-color-hue .q-slider-track.active-track {\n  opacity: 0;\n}\n.q-color-alpha .q-slider-track {\n  position: relative;\n  background: #fff;\n  opacity: 1;\n  height: 8px;\n}\n.q-color-alpha .q-slider-track:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: linear-gradient(90deg, rgba(255,255,255,0), #757575);\n}\n.q-color-alpha .q-slider-track.active-track {\n  opacity: 0;\n}\n.q-color-sliders {\n  height: 56px;\n}\n.q-color-sliders .q-slider {\n  height: 20px;\n}\n.q-color-sliders .q-slider-handle {\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);\n}\n.q-color-sliders .q-slider-ring {\n  display: none;\n}\n.q-color-inputs {\n  font-size: 11px;\n  color: #757575;\n}\n.q-color-inputs input {\n  border: 1px solid #e0e0e0;\n  outline: 0;\n}\n.q-color-padding {\n  padding: 0 2px;\n}\n.q-color-label {\n  padding-top: 4px;\n}\n.q-color-dark {\n  background: #000;\n  border: 1px solid #424242;\n}\n.q-color-dark input {\n  background: #000;\n  color: #bdbdbd;\n  color: var(--q-color-light);\n  border: 1px solid #424242;\n  border: 1px solid var(--q-color-dark);\n}\n.q-color-dark .q-color-inputs {\n  color: #bdbdbd;\n  color: var(--q-color-light);\n}\n.q-color-dark .q-color-swatch {\n  border: 1px solid #424242;\n  border: 1px solid var(--q-color-dark);\n}\n.q-datetime-input {\n  min-width: 70px;\n}\n.q-datetime-controls {\n  padding: 0 10px 8px;\n}\n.q-datetime {\n  font-size: 12px;\n  text-align: center;\n  user-select: none;\n  line-height: initial;\n}\n.q-datetime .modal-buttons {\n  padding-top: 8px;\n}\n.q-datetime:not(.no-border):not(.q-datetime-dark) .q-datetime-content {\n  border: 1px solid #e0e0e0;\n}\n.q-datetime:not(.no-border).q-datetime-dark {\n  border: 1px solid #424242;\n  border: 1px solid var(--q-color-dark);\n}\n.q-datetime-header {\n  background: currentColor;\n}\n.q-datetime-header > div {\n  color: #fff;\n  width: 100%;\n}\n.modal-content > .q-datetime > .q-datetime-header,\n.q-popover > .q-datetime > .q-datetime-header {\n  min-width: 175px;\n}\n.q-datetime-weekdaystring {\n  font-size: 0.8rem;\n  background: rgba(0,0,0,0.1);\n  padding: 5px 0;\n}\n.q-datetime-time {\n  padding: 10px 0;\n  will-change: scroll-position;\n  overflow: auto;\n}\n.q-datetime-ampm {\n  font-size: 0.9rem;\n  padding: 5px;\n}\n.q-datetime-datestring {\n  padding: 10px 0;\n}\n.q-datetime-datestring .q-datetime-link {\n  font-size: 2.7rem;\n}\n.q-datetime-datestring .q-datetime-link span {\n  padding: 0 5px;\n  width: 100%;\n}\n.q-datetime-datestring .q-datetime-link.small {\n  margin: 0 5px;\n  font-size: 1.2rem;\n}\n.q-datetime-datestring .q-datetime-link.small span {\n  padding: 5px;\n}\n.q-datetime-link {\n  opacity: 0.6;\n}\n.q-datetime-link > span {\n  cursor: pointer;\n  display: inline-block;\n  outline: 0;\n}\n.q-datetime-link.active {\n  opacity: 1;\n}\n.q-datetime-clockstring {\n  min-width: 210px;\n  font-size: 2.7rem;\n  direction: ltr /* rtl:ignore */;\n}\n.q-datetime-selector {\n  min-width: 290px;\n  height: 310px;\n  overflow: auto;\n}\n.q-datetime-view-day {\n  width: 250px;\n  height: 285px;\n  color: #000;\n}\n.q-datetime-view-year > .q-btn:not(.active),\n.q-datetime-view-month > .q-btn:not(.active) {\n  color: #000;\n}\n.q-datetime-month-stamp {\n  font-size: 16px;\n}\n.q-datetime-weekdays {\n  margin-bottom: 5px;\n}\n.q-datetime-weekdays div {\n  opacity: 0.6;\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n  min-height: 0;\n  background: transparent;\n}\n.q-datetime-days div {\n  margin: 1px;\n  line-height: 33px;\n  width: 33px;\n  height: 33px;\n  border-radius: 50%;\n}\n.q-datetime-days div.q-datetime-day-active {\n  background: currentColor;\n}\n.q-datetime-days div.q-datetime-day-active > span {\n  color: #fff;\n}\n.q-datetime-days div.q-datetime-day-today {\n  color: currentColor;\n  font-size: 14px;\n  border: 1px solid currentColor;\n}\n.q-datetime-days div:not(.q-datetime-fillerday):not(.disabled):not(.q-datetime-day-active):hover {\n  background: #e0e0e0;\n}\n.q-datetime-btn {\n  font-weight: normal;\n}\n.q-datetime-btn.active {\n  font-size: 1.5rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.q-datetime-clock {\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  background: #e0e0e0;\n  padding: 24px;\n}\n.q-datetime-clock-circle {\n  position: relative;\n  animation: q-pop 0.5s /* rtl:ignore */;\n}\n.q-datetime-clock-center {\n  height: 6px;\n  width: 6px;\n  top: 0;\n  margin: auto;\n  border-radius: 50%;\n  min-height: 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: currentColor;\n}\n.q-datetime-clock-pointer {\n  width: 1px;\n  height: 50%;\n  margin: 0 auto;\n  transform-origin: top center /* rtl:ignore */;\n  min-height: 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: currentColor;\n}\n.q-datetime-clock-pointer span {\n  position: absolute;\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n  bottom: -8px;\n  left: 0;\n  min-width: 0;\n  min-height: 0;\n  transform: translate(-50%, -50%);\n  background: currentColor;\n}\n.q-datetime-arrow {\n  color: #757575;\n}\n.q-datetime-dark {\n  background: #424242;\n  background: var(--q-color-dark);\n}\n.q-datetime-dark .q-datetime-arrow {\n  color: #bdbdbd;\n  color: var(--q-color-light);\n}\n.q-datetime-dark .q-datetime-header,\n.q-datetime-dark .q-datetime-clock {\n  background: #616161;\n}\n.q-datetime-dark .q-datetime-view-day {\n  color: #fff;\n}\n.q-datetime-dark .q-datetime-view-year > .q-btn:not(.active),\n.q-datetime-dark .q-datetime-view-month > .q-btn:not(.active) {\n  color: #fff;\n}\n.q-datetime-dark .q-datetime-days div.q-datetime-day-active > span,\n.q-datetime-dark .q-datetime-days div:not(.q-datetime-fillerday):not(.disabled):not(.q-datetime-day-active):hover {\n  color: #000;\n}\nbody.desktop .q-datetime-clock-position:not(.active):hover {\n  background: #f5f5f5 !important;\n}\nbody.desktop .q-datetime-dark .q-datetime-clock-position:not(.active):hover {\n  color: #000;\n}\n.q-datetime-clock-position {\n  position: absolute;\n  min-height: 32px;\n  width: 32px;\n  height: 32px;\n  font-size: 12px;\n  line-height: 32px;\n  margin: 0;\n  padding: 0;\n  transform: translate(-50%, -50%) /* rtl:ignore */;\n  border-radius: 50%;\n}\n.q-datetime-clock-position:not(.active) {\n  color: #000;\n}\n.q-datetime-dark .q-datetime-clock-position:not(.active) {\n  color: #fff;\n}\n.q-datetime-clock-position.active {\n  background: currentColor;\n}\n.q-datetime-clock-position.active > span {\n  color: #fff;\n}\n.q-datetime-clock-pos-0 {\n  top: 0%;\n  left: 50% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-1 {\n  top: 6.7%;\n  left: 75% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-2 {\n  top: 25%;\n  left: 93.3% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-3 {\n  top: 50%;\n  left: 100% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-4 {\n  top: 75%;\n  left: 93.3% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-5 {\n  top: 93.3%;\n  left: 75% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-6 {\n  top: 100%;\n  left: 50% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-7 {\n  top: 93.3%;\n  left: 25% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-8 {\n  top: 75%;\n  left: 6.7% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-9 {\n  top: 50%;\n  left: 0% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-10 {\n  top: 25%;\n  left: 6.7% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-11 {\n  top: 6.7%;\n  left: 25% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-12 {\n  top: 0%;\n  left: 50% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-1.fmt24 {\n  top: 6.7%;\n  left: 75% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-2.fmt24 {\n  top: 25%;\n  left: 93.3% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-3.fmt24 {\n  top: 50%;\n  left: 100% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-4.fmt24 {\n  top: 75%;\n  left: 93.3% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-5.fmt24 {\n  top: 93.3%;\n  left: 75% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-6.fmt24 {\n  top: 100%;\n  left: 50% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-7.fmt24 {\n  top: 93.3%;\n  left: 25% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-8.fmt24 {\n  top: 75%;\n  left: 6.7% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-9.fmt24 {\n  top: 50%;\n  left: 0% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-10.fmt24 {\n  top: 25%;\n  left: 6.7% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-11.fmt24 {\n  top: 6.7%;\n  left: 25% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-12.fmt24 {\n  top: 0%;\n  left: 50% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-13.fmt24 {\n  top: 19.69%;\n  left: 67.5% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-14.fmt24 {\n  top: 32.5%;\n  left: 80.31% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-15.fmt24 {\n  top: 50%;\n  left: 85% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-16.fmt24 {\n  top: 67.5%;\n  left: 80.31% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-17.fmt24 {\n  top: 80.31%;\n  left: 67.5% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-18.fmt24 {\n  top: 85%;\n  left: 50% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-19.fmt24 {\n  top: 80.31%;\n  left: 32.5% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-20.fmt24 {\n  top: 67.5%;\n  left: 19.69% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-21.fmt24 {\n  top: 50%;\n  left: 15% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-22.fmt24 {\n  top: 32.5%;\n  left: 19.69% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-23.fmt24 {\n  top: 19.69%;\n  left: 32.5% /* rtl:ignore */;\n}\n.q-datetime-clock-pos-0.fmt24 {\n  top: 15%;\n  left: 50% /* rtl:ignore */;\n}\n.q-datetime-range.row .q-datetime-range-left {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.q-datetime-range.row .q-datetime-range-right {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.q-datetime-range.column > div + div {\n  margin-top: 10px;\n}\n@media (max-width: 767px) {\n  .q-datetime {\n    flex-direction: column !important;\n  }\n}\n@media (min-width: 768px) {\n  .q-datetime-header {\n    flex: 1 1 auto;\n  }\n  .q-datetime-content {\n    flex: 2 2 auto;\n  }\n}\n.q-dot {\n  position: absolute;\n  top: -2px;\n  right: -10px;\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  background: #f44336;\n  opacity: 0.8;\n}\n.q-editor {\n  border: 1px solid #ccc;\n}\n.q-editor.disabled {\n  border-style: dashed;\n}\n.q-editor.fullscreen {\n  border: 0 !important;\n}\n.q-editor-content {\n  outline: 0;\n  padding: 10px;\n  min-height: 10em;\n  background: #fff;\n}\n.q-editor-content hr {\n  border: 0;\n  outline: 0;\n  margin: 1px;\n  height: 1px;\n  background: #ccc;\n}\n.q-editor-toolbar-padding {\n  padding: 4px;\n}\n.q-editor-toolbar {\n  border-bottom: 1px solid #ccc;\n  background: #e0e0e0;\n  min-height: 37px;\n}\n.q-editor-toolbar .q-btn-group {\n  box-shadow: none;\n}\n.q-editor-toolbar .q-btn-group + .q-btn-group {\n  margin-left: 5px;\n}\n.q-editor-toolbar-separator .q-btn-group + .q-btn-group {\n  padding-left: 5px;\n}\n.q-editor-toolbar-separator .q-btn-group + .q-btn-group:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  width: 1px;\n  background: #ccc;\n}\n.q-editor-input input {\n  color: inherit;\n}\n.q-fab {\n  position: relative;\n  vertical-align: middle;\n}\n.z-fab {\n  z-index: 990;\n}\n.q-fab-opened .q-fab-actions {\n  opacity: 1;\n  transform: scaleX(1) scaleY(1) translateX(0) translateY(0);\n  pointer-events: all;\n}\n.q-fab-opened .q-fab-icon {\n  transform: rotate3d(0, 0, 1, 180deg);\n  opacity: 0;\n}\n.q-fab-opened .q-fab-active-icon {\n  transform: rotate3d(0, 0, 1, 0deg);\n  opacity: 1;\n}\n.q-fab-icon,\n.q-fab-active-icon {\n  transition: opacity 0.4s, transform 0.4s;\n}\n.q-fab-icon {\n  opacity: 1;\n  transform: rotate3d(0, 0, 1, 0deg);\n}\n.q-fab-active-icon {\n  opacity: 0;\n  transform: rotate3d(0, 0, 1, -180deg);\n}\n.q-fab-actions {\n  position: absolute;\n  opacity: 0;\n  transition: all 0.2s ease-in;\n  pointer-events: none;\n}\n.q-fab-actions .q-btn {\n  margin: 5px;\n}\n.q-fab-right {\n  transform: scaleX(0.4) scaleY(0.4) translateX(-100%);\n  top: 0;\n  bottom: 0;\n  left: 120%;\n}\n.q-fab-left {\n  transform: scaleX(0.4) scaleY(0.4) translateX(100%);\n  top: 0;\n  bottom: 0;\n  right: 120%;\n  flex-direction: row-reverse;\n}\n.q-fab-up {\n  transform: scaleX(0.4) scaleY(0.4) translateY(100%);\n  flex-direction: column-reverse;\n  justify-content: center;\n  bottom: 120%;\n  left: 0;\n  right: 0;\n}\n.q-fab-down {\n  transform: scaleX(0.4) scaleY(0.4) translateY(-100%);\n  flex-direction: column;\n  justify-content: center;\n  top: 120%;\n  left: 0;\n  right: 0;\n}\n.q-field-icon {\n  width: 28px;\n  height: 28px;\n  min-width: 28px;\n  font-size: 28px;\n  margin-right: 16px;\n  color: #979797;\n}\n.q-field-label {\n  padding-right: 8px;\n  color: #979797;\n}\n.q-field-label-inner {\n  min-height: 28px;\n}\n.q-field-label-hint {\n  padding-left: 8px;\n}\n.q-field-bottom {\n  font-size: 12px;\n  padding-top: 8px;\n  color: #979797;\n}\n.q-field-no-input .q-field-bottom {\n  margin-top: 8px;\n  border-top: 1px solid rgba(0,0,0,0.12);\n}\n.q-field-counter {\n  color: #979797;\n  padding-left: 8px;\n}\n.q-field-dark .q-field-label,\n.q-field-dark .q-field-icon,\n.q-field-dark .q-field-counter,\n.q-field-dark .q-field-bottom {\n  color: #a7a7a7;\n}\n.q-field-dark .q-field-no-input .q-field-bottom {\n  border-top: 1px solid #979797;\n}\n.q-field-with-error .q-field-icon,\n.q-field-with-error .q-field-label,\n.q-field-with-error .q-field-bottom {\n  color: #db2828;\n  color: var(--q-color-negative);\n}\n.q-field-with-error .q-field-no-input .q-field-bottom {\n  border-top: 1px solid #db2828;\n  border-top: 1px solid var(--q-color-negative);\n}\n.q-field-with-warning .q-field-icon,\n.q-field-with-warning .q-field-label,\n.q-field-with-warning .q-field-bottom {\n  color: #f2c037;\n  color: var(--q-color-warning);\n}\n.q-field-with-warning .q-field-no-input .q-field-bottom {\n  border-top: 1px solid #f2c037;\n  border-top: 1px solid var(--q-color-warning);\n}\n.q-field-margin {\n  margin-top: 5px;\n}\n.q-field-floating .q-field-margin {\n  margin-top: 23px;\n}\n.q-field-no-input .q-field-margin {\n  margin-top: 3px;\n}\n.q-field-content .q-if.q-if-has-label:not(.q-if-standard) {\n  margin-top: 9px;\n}\n.q-field-content .q-if-standard:not(.q-if-has-label) {\n  padding-top: 6px;\n}\n.q-field-content .q-option-group {\n  padding-top: 0;\n}\n.q-field-no-input .q-field-content {\n  padding-top: 6px;\n}\n.q-field-vertical:not(.q-field-no-label) .q-field-margin {\n  margin-top: 0;\n}\n.q-field-vertical:not(.q-field-no-label) .q-if-standard:not(.q-if-has-label) {\n  padding-top: 0;\n}\n.q-field-vertical:not(.q-field-no-label) .q-if.q-if-has-label:not(.q-if-standard) {\n  margin-top: 0px;\n}\n.q-field-vertical.q-field-no-label .q-field-label {\n  display: none;\n}\n@media (max-width: 575px) {\n  .q-field-responsive:not(.q-field-no-label) .q-field-margin {\n    margin-top: 0;\n  }\n  .q-field-responsive:not(.q-field-no-label) .q-if-standard:not(.q-if-has-label) {\n    padding-top: 0;\n  }\n  .q-field-responsive:not(.q-field-no-label) .q-if.q-if-has-label:not(.q-if-standard) {\n    margin-top: 0px;\n  }\n  .q-field-responsive.q-field-no-label .q-field-label {\n    display: none;\n  }\n}\n.q-inner-loading {\n  background: rgba(255,255,255,0.6);\n}\n.q-inner-loading.dark {\n  background: rgba(0,0,0,0.4);\n}\n.q-if,\n.q-if:before,\n.q-if-label,\n.q-if-addon,\n.q-field-icon,\n.q-field-label,\n.q-if-control,\n.q-field-bottom {\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1), display 0s 0s;\n}\n.q-if.q-if-hide-underline:before,\n.q-if.q-if-inverted:before,\n.q-if.q-if-hide-underline:after,\n.q-if.q-if-inverted:after {\n  content: none;\n}\n.q-if-inverted {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.q-if-inverted .q-if-inner {\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n.q-if-inverted.q-if-has-label .q-if-inner {\n  margin-top: 25px;\n}\n.q-if:before,\n.q-if:after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: 1px hidden currentColor;\n  border-bottom-style: solid;\n  background: transparent;\n  pointer-events: none;\n  content: '';\n}\n.q-if:before {\n  color: #bdbdbd;\n  color: var(--q-color-light);\n}\n.q-if:after {\n  border-width: 0;\n  transform-origin: center center 0;\n  transform: scaleX(0);\n}\n.q-if:not(.q-if-disabled):not(.q-if-error):not(.q-if-warning):hover:before,\n.q-if.q-if-readonly:not(.q-if-error):not(.q-if-warning):after {\n  color: #000;\n}\n.q-if-dark.q-if:not(.q-if-disabled):not(.q-if-error):not(.q-if-warning):hover:before,\n.q-if-dark.q-if.q-if-readonly:not(.q-if-error):not(.q-if-warning):after {\n  color: #fff;\n}\n.q-if-focused:after {\n  border-width: 2px;\n  transform: scaleX(1);\n  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1), border-left-width 0s 0.45s, border-right-width 0s 0.45s;\n}\n.q-if {\n  outline: 0;\n  align-items: center;\n  font-size: 1rem;\n}\n.q-if .q-if-inner {\n  min-height: 24px;\n}\n.q-if-standard {\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n.q-if-standard.q-if-has-label {\n  padding-top: 25px;\n}\n.q-if-hide-underline {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.q-if-hide-underline.q-if-has-label {\n  padding-top: 18px;\n}\n.q-if-standard .q-if-label,\n.q-if-inverted .q-if-label {\n  position: absolute;\n  left: 0;\n  transform-origin: top left;\n  transform: translate(0, 0);\n}\n.q-if-standard .q-if-label.q-if-label-above,\n.q-if-inverted .q-if-label.q-if-label-above {\n  font-size: 0.75rem;\n  transform: translate(0, -100%);\n  line-height: 18px;\n}\n.q-if-inverted {\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);\n  border-radius: 3px;\n}\n.q-if-inverted .q-if-label {\n  top: 50%;\n  transform: translate(0, -21px);\n}\n.q-if-inverted .q-if-label.q-if-label-above {\n  top: 4px;\n  transform: translate(0, -125%);\n}\n.q-if-inverted .q-input-target {\n  color: inherit;\n}\n.q-if-focused:not(.q-if-readonly) .q-if-label,\n.q-if-focused:not(.q-if-readonly) .q-if-addon,\n.q-if-focused:not(.q-if-readonly) .q-if-control {\n  color: currentColor;\n}\n.q-if-warning:before,\n.q-if-warning:after,\n.q-if-warning:not(.q-if-inverted) .q-if-label {\n  color: #f2c037;\n  color: var(--q-color-warning);\n}\n.q-if-warning:hover:before {\n  color: #f8dd93;\n  color: var(--q-color-warning-l);\n}\n.q-if-error:before,\n.q-if-error:after,\n.q-if-error:not(.q-if-inverted) .q-if-label {\n  color: #db2828;\n  color: var(--q-color-negative);\n}\n.q-if-error:hover:before {\n  color: #ec8b8b;\n  color: var(--q-color-negative-l);\n}\n.q-if-disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.q-if-disabled .q-if-label,\n.q-if-disabled .q-if-control,\n.q-if-disabled .q-input-target,\n.q-if-disabled .q-chip {\n  cursor: not-allowed;\n}\n.q-if-dark:not(.q-if-inverted-light) .q-input-target:not(.q-input-target-placeholder) {\n  color: #fff;\n}\n.q-if-focusable {\n  outline: 0;\n  cursor: pointer;\n}\n.q-if-label,\n.q-input-target,\n.q-input-target-placeholder {\n  line-height: 24px;\n}\n.q-if-control {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\n.q-if-control + .q-if-control,\n.q-if-control + .q-if-inner,\n.q-if-inner + .q-if-control {\n  margin-left: 4px;\n}\n.q-if-control:hover {\n  opacity: 0.7;\n}\n.q-if-baseline {\n  line-height: 24px;\n  width: 0;\n  color: transparent;\n}\n.q-if-label-inner,\n.q-if-label-spacer,\n.q-if-baseline {\n  pointer-events: none;\n  user-select: none;\n}\n.q-if-label-spacer {\n  visibility: hidden;\n  height: 0 !important;\n  white-space: nowrap;\n}\n.q-if-label {\n  cursor: text;\n  max-width: 100%;\n  overflow: hidden;\n}\n.q-if-label,\n.q-if-addon,\n.q-if-control {\n  color: #979797;\n  line-height: 24px;\n}\n.q-if-inverted .q-if-label,\n.q-if-inverted .q-if-addon,\n.q-if-inverted .q-if-control {\n  color: #ddd;\n}\n.q-if-inverted-light .q-if-label,\n.q-if-inverted-light .q-if-addon,\n.q-if-inverted-light .q-if-control {\n  color: #656565;\n}\n.q-if-addon {\n  opacity: 0;\n  cursor: inherit;\n}\n.q-if-addon:not(.q-if-addon-visible) {\n  display: none;\n}\n.q-if-addon-left {\n  padding-right: 1px;\n}\n.q-if-addon-right {\n  padding-left: 1px;\n}\n.q-if-addon-visible {\n  opacity: 1;\n}\n.q-input-target,\n.q-input-shadow {\n  border: 0;\n  outline: 0;\n  padding: 0;\n  background: transparent;\n  line-height: 24px;\n  font-size: inherit;\n  resize: none;\n  display: flex;\n  align-items: center;\n  color: #000;\n}\n.q-input-target:-webkit-autofill {\n  -webkit-animation-name: webkit-autofill-on;\n  -webkit-animation-fill-mode: both;\n}\n.q-input-target.q-input-autofill:not(:-webkit-autofill) {\n  -webkit-animation-name: webkit-autofill-off;\n  -webkit-animation-fill-mode: both;\n}\n.q-input-target::-ms-clear,\n.q-input-target::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n.q-input-target:invalid {\n  box-shadow: inherit;\n}\n.q-input-target:before {\n  content: '|';\n  line-height: 24px;\n  width: 0;\n  color: transparent;\n}\ninput.q-input-target {\n  height: 24px;\n  outline: 0;\n  display: inline-block;\n  -webkit-appearance: none;\n}\n.q-if .q-input-target-placeholder {\n  color: #979797 !important;\n}\n.q-if .q-input-target::-webkit-input-placeholder {\n  color: #979797 !important;\n}\n.q-if .q-input-target::-moz-placeholder {\n  color: #979797 !important;\n}\n.q-if .q-input-target:-ms-input-placeholder {\n  color: #979797 !important;\n}\n.q-if-dark .q-input-target-placeholder {\n  color: #979797 !important;\n}\n.q-if-dark .q-input-target::-webkit-input-placeholder {\n  color: #979797 !important;\n}\n.q-if-dark .q-input-target::-moz-placeholder {\n  color: #979797 !important;\n}\n.q-if-dark .q-input-target:-ms-input-placeholder {\n  color: #979797 !important;\n}\n.q-if-inverted:not(.q-if-inverted-light) .q-input-target-placeholder {\n  color: #ddd !important;\n}\n.q-if-inverted:not(.q-if-inverted-light) .q-input-target::-webkit-input-placeholder {\n  color: #ddd !important;\n}\n.q-if-inverted:not(.q-if-inverted-light) .q-input-target::-moz-placeholder {\n  color: #ddd !important;\n}\n.q-if-inverted:not(.q-if-inverted-light) .q-input-target:-ms-input-placeholder {\n  color: #ddd !important;\n}\n.q-input-shadow {\n  overflow: hidden;\n  visibility: hidden;\n  pointer-events: none;\n  height: auto;\n  width: 100% !important;\n}\n.q-jumbotron {\n  position: relative;\n  padding: 2rem 1rem;\n  border-radius: 3px;\n  background-color: #eee;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.q-jumbotron-dark {\n  color: #fff;\n  background-color: #757575;\n}\n.q-jumbotron-dark hr.q-hr {\n  background: rgba(255,255,255,0.36);\n}\n@media (min-width: 768px) {\n  .q-jumbotron {\n    padding: 4rem 2rem;\n  }\n}\n.q-knob,\n.q-knob > div {\n  position: relative;\n  display: inline-block;\n}\n.q-knob > div {\n  width: 100%;\n  height: 100%;\n}\n.q-knob-label {\n  width: 100%;\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.q-knob-label i {\n  font-size: 130%;\n}\n.q-layout {\n  width: 100%;\n  min-height: 100vh;\n}\n.q-layout-container .q-layout {\n  min-height: 100%;\n}\n.q-layout-container > div {\n  transform: translate3d(0, 0, 0);\n}\n.q-layout-container > div > div {\n  min-height: 0;\n  max-height: 100%;\n}\n.q-layout-header {\n  box-shadow: 0 1px 8px rgba(0,0,0,0.2), 0 3px 4px rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12);\n}\n.q-layout-header-hidden {\n  transform: translateY(-110%);\n}\n.q-layout-footer {\n  box-shadow: 0 -1px 8px rgba(0,0,0,0.2), 0 -3px 4px rgba(0,0,0,0.14), 0 -3px 3px -2px rgba(0,0,0,0.12);\n}\n.q-layout-footer-hidden {\n  transform: translateY(110%);\n}\n.q-layout-drawer {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background: #fff;\n  z-index: 1000;\n}\n.q-layout-drawer.on-top {\n  z-index: 3000;\n}\n.q-layout-drawer-delimiter {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 5px 8px rgba(0,0,0,0.14), 0 1px 14px rgba(0,0,0,0.12);\n}\n.q-layout-drawer-left {\n  left: 0;\n  transform: translateX(-100%);\n}\n.q-layout-drawer-right {\n  right: 0;\n  transform: translateX(100%);\n}\n.q-layout,\n.q-layout-header,\n.q-layout-footer,\n.q-layout-page {\n  position: relative;\n}\n.q-layout-header,\n.q-layout-footer {\n  z-index: 2000;\n}\n.q-layout-backdrop {\n  z-index: 2999 !important;\n  will-change: background-color;\n}\n.q-layout-drawer-mini {\n  padding: 0 !important;\n}\n.q-layout-drawer-mini .q-item,\n.q-layout-drawer-mini .q-item-side {\n  text-align: center;\n  justify-content: center;\n}\n.q-layout-drawer-mini .q-mini-drawer-hide,\n.q-layout-drawer-mini .q-collapsible-inner > div:last-of-type,\n.q-layout-drawer-mini .q-list-header,\n.q-layout-drawer-mini .q-item-main,\n.q-layout-drawer-mini .q-item-side-right {\n  display: none;\n}\n.q-layout-drawer-normal .q-mini-drawer-only {\n  display: none;\n}\n.q-layout-drawer-mobile .q-mini-drawer-only,\n.q-layout-drawer-mobile .q-mini-drawer-hide {\n  display: none;\n}\n.q-layout-drawer-opener {\n  z-index: 2001;\n  height: 100%;\n  width: 15px;\n  user-select: none;\n}\n.q-page-sticky-shrink {\n  pointer-events: none;\n}\n.q-page-sticky-shrink > span {\n  pointer-events: auto;\n}\nbody.q-ios-statusbar-padding .q-layout .q-layout-header > .q-toolbar:nth-child(2),\nbody.q-ios-statusbar-padding .q-layout .q-layout-header > .q-tabs:nth-child(2) .q-tabs-head,\nbody.q-ios-statusbar-padding .q-layout .q-layout-drawer.top-padding,\nbody.q-ios-statusbar-padding .modal:not(.minimized) .q-layout-header > .q-toolbar:nth-child(1) {\n  padding-top: 20px;\n  min-height: 70px;\n}\nbody.q-ios-statusbar-x .q-layout .q-layout-header > .q-toolbar:nth-child(2),\nbody.q-ios-statusbar-x .q-layout .q-layout-header > .q-tabs:nth-child(2) .q-tabs-head,\nbody.q-ios-statusbar-x .q-layout .q-layout-drawer.top-padding,\nbody.q-ios-statusbar-x .modal:not(.minimized) .q-layout-header > .q-toolbar:nth-child(1) {\n  padding-top: env(safe-area-inset-top);\n}\nbody.q-ios-statusbar-x .q-layout .q-layout-footer > .q-toolbar:last-child,\nbody.q-ios-statusbar-x .q-layout .q-layout-footer > .q-tabs:last-child .q-tabs-head,\nbody.q-ios-statusbar-x .q-layout .q-layout-drawer.top-padding,\nbody.q-ios-statusbar-x .modal:not(.minimized) .q-layout-footer > .q-toolbar:last-child {\n  padding-bottom: env(safe-area-inset-bottom);\n  min-height: 70px;\n}\n.q-layout-animate .q-layout-transition {\n  transition: all 0.12s ease-in !important;\n}\n.q-body-drawer-toggle {\n  overflow-x: hidden !important;\n}\n@media (max-width: 767px) {\n  .layout-padding {\n    padding: 1.5rem 0.5rem;\n  }\n  .layout-padding.horizontal {\n    padding: 0 0.5rem;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .layout-padding {\n    padding: 1.5rem 2rem;\n    margin: auto;\n  }\n  .layout-padding.horizontal {\n    padding: 0 2rem;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .layout-padding {\n    padding: 2.5rem 3rem;\n    margin: auto;\n  }\n  .layout-padding.horizontal {\n    padding: 0 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  .layout-padding {\n    padding: 3rem 4rem;\n    margin: auto;\n  }\n  .layout-padding.horizontal {\n    padding: 0 4rem;\n  }\n}\n.q-item-stamp {\n  font-size: 0.8rem;\n  line-height: 0.8rem;\n  white-space: nowrap;\n  margin: 0.3rem 0;\n}\n.q-item-side {\n  color: #737373;\n  flex: 0 0 auto;\n  min-width: 38px;\n}\n.q-item-side-right {\n  text-align: right;\n}\n.q-item-avatar,\n.q-item-avatar img {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n}\n.q-item-letter,\n.q-item-icon {\n  font-size: 24px;\n}\n.q-item-inverted {\n  border-radius: 50%;\n  color: #fff;\n  background: #737373;\n  height: 38px;\n  width: 38px;\n}\n.q-item-inverted,\n.q-item-inverted .q-icon {\n  font-size: 20px;\n}\n.q-item-main {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.q-item-main-inset {\n  margin-left: 48px;\n}\n.q-item-label {\n  line-height: 1.2;\n}\n.q-item-label > span {\n  color: #757575;\n}\n.q-item-sublabel {\n  color: #757575;\n  font-size: 90%;\n  margin-top: 0.2rem;\n}\n.q-item-sublabel > span {\n  font-weight: 500;\n}\n.q-item-section + .q-item-section {\n  margin-left: 10px;\n}\n.q-item {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  text-align: left;\n  padding: 8px 16px;\n  min-height: 40px;\n}\n.q-item.active,\n.q-item.router-link-active,\n.q-item:focus {\n  background: rgba(189,189,189,0.4);\n}\n.q-item:focus {\n  outline: 0;\n}\n.q-item-image {\n  min-width: 114px;\n  max-width: 114px;\n  max-height: 114px;\n}\n.q-list-multiline > .q-item,\n.q-item-multiline {\n  align-items: flex-start;\n}\n.q-list-link > .q-item,\n.q-item-link {\n  cursor: pointer;\n}\n.q-list-highlight > .q-item:hover,\n.q-item-highlight:hover,\n.q-list-link > .q-item:hover,\n.q-item-link:hover {\n  background: rgba(189,189,189,0.5);\n}\n.q-list-separator > .q-item-division + .q-item-division,\n.q-item-division + .q-item-separator {\n  border-top: 1px solid #e0e0e0;\n}\n.q-list-inset-separator > .q-item-division + .q-item-division:after,\n.q-item-division + .q-item-inset-separator:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 64px;\n  height: 1px;\n  background: #e0e0e0;\n}\n.q-list-dense > .q-item,\n.q-item-dense {\n  padding: 3px 16px;\n  min-height: 8px;\n}\n.q-list-sparse > .q-item,\n.q-item-sparse {\n  padding: 22.4px 16px;\n  min-height: 56px;\n}\n.q-list-striped > .q-item:nth-child(even) {\n  background-color: rgba(189,189,189,0.65);\n}\n.q-list-striped-odd > .q-item:nth-child(odd) {\n  background-color: rgba(189,189,189,0.65);\n}\n.q-list {\n  border: 1px solid #e0e0e0;\n  padding: 8px 0;\n}\n.q-item-separator-component {\n  margin: 8px 0;\n  height: 1px;\n  border: 0;\n  background-color: #e0e0e0;\n}\n.q-item-separator-component:last-child {\n  display: none;\n}\n.q-item-separator-component + .q-list-header {\n  margin-top: -8px;\n}\n.q-item-separator-inset-component {\n  margin-left: 64px;\n}\n.q-list-header {\n  color: #757575;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 18px;\n  min-height: 48px;\n  padding: 15px 16px;\n}\n.q-list-header-inset {\n  padding-left: 64px;\n}\n.q-list-dark .q-item-side,\n.q-item-dark .q-item-side {\n  color: #bbb;\n}\n.q-list-dark .q-item-inverted,\n.q-item-dark .q-item-inverted {\n  color: #000;\n  background: #bbb;\n}\n.q-list-dark .q-item-label > span,\n.q-item-dark .q-item-label > span,\n.q-list-dark .q-item-sublabel,\n.q-item-dark .q-item-sublabel {\n  color: #bdbdbd;\n}\n.q-list-dark .q-item,\n.q-item-dark .q-item {\n  color: #fff;\n}\n.q-list-dark .q-item.active,\n.q-item-dark .q-item.active,\n.q-list-dark .q-item.router-link-active,\n.q-item-dark .q-item.router-link-active,\n.q-list-dark .q-item:focus,\n.q-item-dark .q-item:focus {\n  background: rgba(117,117,117,0.2);\n}\n.q-list-dark {\n  border: 1px solid rgba(255,255,255,0.32);\n}\n.q-list-dark.q-list-separator > .q-item-division + .q-item-division,\n.q-list-dark .q-item-division + .q-item-separator {\n  border-top: 1px solid rgba(255,255,255,0.32);\n}\n.q-list-dark.q-list-inset-separator > .q-item-division + .q-item-division:after,\n.q-list-dark .q-item-division + .q-item-inset-separator:after {\n  background: rgba(255,255,255,0.32);\n}\n.q-list-dark.q-list-striped > .q-item:nth-child(even) {\n  background-color: rgba(117,117,117,0.45);\n}\n.q-list-dark.q-list-striped-odd > .q-item:nth-child(odd) {\n  background-color: rgba(117,117,117,0.45);\n}\n.q-list-dark .q-item-separator-component {\n  background-color: rgba(255,255,255,0.32);\n}\n.q-list-dark .q-list-header {\n  color: rgba(255,255,255,0.64);\n}\n.q-list-dark.q-list-highlight > .q-item:hover,\n.q-list-dark .q-item-highlight:hover,\n.q-list-dark.q-list-link > .q-item:hover,\n.q-list-dark .q-item-link:hover {\n  background: rgba(117,117,117,0.3);\n}\nbody.with-loading {\n  overflow: hidden;\n}\n.q-loading {\n  background: rgba(0,0,0,0.4);\n}\n.q-loading > div {\n  margin: 40px 20px 0;\n  max-width: 450px;\n  text-align: center;\n  text-shadow: 0 0 7px #000;\n}\n.modal-backdrop {\n  background: rgba(0,0,0,0.4);\n}\n.modal.maximized .modal-backdrop {\n  display: none;\n}\n.modal-content {\n  position: relative;\n  background: #fff;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  border-radius: 3px;\n  overflow-y: auto;\n  will-change: scroll-position;\n  min-width: 280px;\n  max-height: 80vh;\n  -webkit-backface-visibility: hidden;\n  outline: 0;\n}\n.modal {\n  z-index: 5000;\n}\n.modal.minimized .modal-content {\n  max-width: 80vw;\n  max-height: 80vh;\n}\n.modal.maximized .modal-content {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  border-radius: 0;\n}\n.modal.maximized .modal-content .q-layout-container {\n  min-height: 100vh !important;\n}\n.q-modal-enter,\n.q-modal-leave-active {\n  opacity: 0;\n}\n@media (min-width: 768px) {\n  .modal:not(.maximized).q-modal-enter .modal-content {\n    transform: scale(1.2);\n  }\n  .modal:not(.maximized).q-modal-leave-active .modal-content {\n    transform: scale(0.8);\n  }\n  .modal.maximized.q-modal-enter .modal-content,\n  .modal.maximized.q-modal-leave-active .modal-content {\n    transform: translateY(30%);\n  }\n}\n@media (max-width: 767px) {\n  .q-responsive-modal {\n    overflow: hidden;\n  }\n  .modal:not(.minimized) .modal-content {\n    width: 100%;\n    height: 100%;\n    max-width: 100%;\n    max-height: 100%;\n    border-radius: 0;\n  }\n  .modal:not(.minimized) .modal-content .q-layout-container {\n    min-height: 100vh !important;\n  }\n  .modal:not(.minimized).q-modal-enter .modal-content,\n  .modal:not(.minimized).q-modal-leave-active .modal-content {\n    transform: translateY(30%);\n  }\n  .modal.minimized.q-modal-enter .modal-content {\n    transform: scale(1.2);\n  }\n  .modal.minimized.q-modal-leave-active .modal-content {\n    transform: scale(0.8);\n  }\n}\n.q-maximized-modal {\n  overflow: hidden;\n}\n.modal,\n.modal-content {\n  transition: all 0.2s ease-in-out;\n}\n.modal-header {\n  text-align: left;\n  padding: 24px 24px 10px 24px;\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n.modal-body {\n  padding: 10px 24px;\n  color: rgba(0,0,0,0.5);\n}\n.small-modal-scroll,\n.modal-scroll,\n.big-modal-scroll {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  will-change: scroll-position;\n}\n.small-modal-scroll {\n  max-height: 156px;\n}\n.modal-scroll {\n  max-height: 240px;\n}\n.big-modal-scroll {\n  max-height: 480px;\n}\n.modal-buttons {\n  padding: 22px 8px 8px;\n  justify-content: flex-end;\n  color: #027be3;\n  color: var(--q-color-primary);\n}\n.modal-buttons.row .q-btn + .q-btn {\n  margin-left: 8px;\n}\n.modal-buttons.column {\n  align-items: flex-end;\n}\n.modal-buttons.column .q-btn + .q-btn {\n  margin-top: 8px;\n}\n.q-modal-bottom-enter,\n.q-modal-bottom-leave-active {\n  opacity: 0;\n}\n.q-modal-bottom-enter .modal-content,\n.q-modal-bottom-leave-active .modal-content {\n  transform: translateY(30%);\n}\n.q-modal-top-enter,\n.q-modal-top-leave-active {\n  opacity: 0;\n}\n.q-modal-top-enter .modal-content,\n.q-modal-top-leave-active .modal-content {\n  transform: translateY(-30%);\n}\n.q-modal-right-enter,\n.q-modal-right-leave-active {\n  opacity: 0;\n}\n.q-modal-right-enter .modal-content,\n.q-modal-right-leave-active .modal-content {\n  transform: translateX(30%);\n}\n.q-modal-left-enter,\n.q-modal-left-leave-active {\n  opacity: 0;\n}\n.q-modal-left-enter .modal-content,\n.q-modal-left-leave-active .modal-content {\n  transform: translateX(-30%);\n}\n.q-notifications > div {\n  z-index: 9500;\n}\n.q-notification-list {\n  pointer-events: none;\n  left: 0;\n  right: 0;\n  margin-bottom: 10px;\n  position: relative;\n}\n.q-notification-list-center {\n  top: 0;\n  bottom: 0;\n}\n.q-notification-list-top {\n  top: 0;\n}\n.q-notification-list-bottom {\n  bottom: 0;\n}\nbody.q-ios-statusbar-x .q-notification-list-center,\nbody.q-ios-statusbar-x .q-notification-list-top {\n  top: env(safe-area-inset-top);\n}\nbody.q-ios-statusbar-x .q-notification-list-center,\nbody.q-ios-statusbar-x .q-notification-list-bottom {\n  bottom: env(safe-area-inset-bottom);\n}\n.q-notification {\n  border-radius: 5px;\n  pointer-events: all;\n  display: inline-block;\n  margin: 10px 10px 0;\n  transition-property: transform, opacity;\n  transition-duration: 1s;\n  z-index: 9500;\n  max-width: 100%;\n}\n.q-notification-top-left-enter,\n.q-notification-top-left-leave-to,\n.q-notification-top-enter,\n.q-notification-top-leave-to,\n.q-notification-top-right-enter,\n.q-notification-top-right-leave-to {\n  opacity: 0;\n  transform: translateY(-50px);\n  z-index: 9499;\n}\n.q-notification-left-enter,\n.q-notification-left-leave-to,\n.q-notification-center-enter,\n.q-notification-center-leave-to,\n.q-notification-right-enter,\n.q-notification-right-leave-to,\n.q-notification-bottom-left-enter,\n.q-notification-bottom-left-leave-to,\n.q-notification-bottom-enter,\n.q-notification-bottom-leave-to,\n.q-notification-bottom-right-enter,\n.q-notification-bottom-right-leave-to {\n  opacity: 0;\n  transform: translateY(50px);\n  z-index: 9499;\n}\n.q-notification-top-left-leave-active,\n.q-notification-top-leave-active,\n.q-notification-top-right-leave-active,\n.q-notification-left-leave-active,\n.q-notification-center-leave-active,\n.q-notification-right-leave-active,\n.q-notification-bottom-left-leave-active,\n.q-notification-bottom-leave-active,\n.q-notification-bottom-right-leave-active {\n  position: absolute;\n  z-index: 9499;\n  margin-left: 0;\n  margin-right: 0;\n}\n.q-notification-top-leave-active,\n.q-notification-center-leave-active {\n  top: 0;\n}\n.q-notification-bottom-left-leave-active,\n.q-notification-bottom-leave-active,\n.q-notification-bottom-right-leave-active {\n  bottom: 0;\n}\n.q-option-inner {\n  display: inline-block;\n  line-height: 0;\n}\n.q-option-inner + .q-option-label {\n  margin-left: 8px;\n}\n.q-option {\n  vertical-align: middle;\n}\n.q-option input {\n  display: none !important;\n}\n.q-option.reverse .q-option-inner + .q-option-label {\n  margin-right: 8px;\n  margin-left: 0;\n}\n.q-option-group-inline-opts > div {\n  display: inline-flex;\n}\n.q-option-group {\n  margin: -5px;\n  padding: 5px 0;\n}\n.q-pagination input {\n  text-align: center;\n}\n.q-pagination .q-btn {\n  padding: 0 5px !important;\n}\n.q-pagination .q-btn.disabled {\n  color: #777;\n  color: var(--q-color-faded);\n}\n.q-parallax {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  border-radius: inherit;\n}\n.q-parallax-media > img,\n.q-parallax-media > video {\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  will-change: transform;\n}\n.q-parallax-text {\n  text-shadow: 0 0 5px #fff;\n}\n.q-popover {\n  position: fixed;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  border-radius: 3px;\n  background: #fff;\n  z-index: 8000;\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-width: 100vw;\n  outline: 0;\n}\n.q-popover > .q-list:only-child {\n  border: none;\n}\nbody div .q-popover {\n  display: none;\n}\n.q-progress {\n  position: relative;\n  height: 5px;\n  display: block;\n  width: 100%;\n  background-clip: padding-box;\n  overflow: hidden;\n}\n.q-progress-model {\n  background: currentColor;\n}\n.q-progress-model.animate {\n  animation: q-progress-stripes 2s linear infinite;\n}\n.q-progress-model:not(.indeterminate) {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  transition: width 0.3s linear;\n}\n.q-progress-model.indeterminate:before,\n.q-progress-model.indeterminate:after {\n  content: '';\n  position: absolute;\n  background: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n}\n.q-progress-model.indeterminate:before {\n  animation: q-progress-indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n.q-progress-model.indeterminate:after {\n  animation: q-progress-indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  animation-delay: 1.15s;\n}\n.q-progress-model.stripe,\n.q-progress-model.stripe:before,\n.q-progress-model.stripe:after {\n  background-image: linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent) !important;\n  background-size: 40px 40px !important;\n}\n.q-progress-track {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  transition: width 0.3s linear;\n}\n.q-progress-buffer {\n  top: 50%;\n  transform: translateY(-50%);\n  height: 4px;\n  right: 0;\n  transition: width 0.3s linear;\n  mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");\n}\n.q-progress-track,\n.q-progress-buffer {\n  background: currentColor;\n  opacity: 0.2;\n  position: absolute;\n}\n.pull-to-refresh {\n  position: relative;\n}\n.pull-to-refresh-message {\n  height: 65px;\n  font-size: 1rem;\n}\n.pull-to-refresh-message .q-icon {\n  font-size: 2rem;\n  margin-right: 15px;\n  transition: all 0.3s;\n}\n.q-radio-unchecked,\n.q-radio-checked,\n.q-radio .q-option-inner {\n  height: 21px;\n  width: 21px;\n  min-width: 21px;\n  font-size: 21px;\n  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  opacity: 1;\n}\n.q-radio-unchecked {\n  opacity: 1;\n}\n.q-radio-checked {\n  transform-origin: 50% 50% 0;\n  transform: scale(0);\n}\n.q-radio .q-option-inner.active .q-radio-unchecked {\n  opacity: 0;\n}\n.q-radio .q-option-inner.active .q-radio-checked {\n  transform: scale(1);\n}\n.q-rating {\n  color: #ffeb3b;\n  vertical-align: middle;\n}\n.q-rating span {\n  pointer-events: none;\n  display: inherit;\n}\n.q-rating i {\n  color: currentColor;\n  text-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  position: relative;\n  cursor: default;\n  opacity: 0.4;\n  pointer-events: all;\n}\n.q-rating i.hovered {\n  transform: scale(1.3);\n}\n.q-rating i.exselected {\n  opacity: 0.7;\n}\n.q-rating i.active {\n  opacity: 1;\n}\n.q-rating i + i {\n  margin-left: 0.3rem;\n}\n.q-rating.editable i {\n  cursor: pointer;\n}\n.q-rating:not(.editable) span,\n.q-rating i {\n  outline: 0;\n}\n.q-scrollarea-thumb {\n  background: #000;\n  width: 10px;\n  right: 0;\n  opacity: 0.2;\n  transition: opacity 0.3s;\n}\n.q-scrollarea-thumb.invisible-thumb {\n  opacity: 0 !important;\n}\n.q-scrollarea-thumb:hover {\n  opacity: 0.3;\n}\n.q-scrollarea-thumb:active {\n  opacity: 0.5;\n}\n.q-toolbar .q-search {\n  background: rgba(255,255,255,0.25);\n}\n.q-slider-track,\n.q-slider-mark {\n  opacity: 0.4;\n  background: currentColor;\n}\n.q-slider-track {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  height: 2px;\n  width: 100%;\n}\n.q-slider-track:not(.dragging) {\n  transition: all 0.3s ease;\n}\n.q-slider-track.active-track {\n  opacity: 1;\n}\n.q-slider-track.track-draggable.dragging {\n  height: 4px;\n  transition: height 0.3s ease;\n}\n.q-slider-track.handle-at-minimum {\n  background: transparent;\n}\n.q-slider-mark {\n  position: absolute;\n  top: 50%;\n  height: 10px;\n  width: 2px;\n  transform: translateX(-50%) translateY(-50%);\n}\n.q-slider-handle-container {\n  position: relative;\n  height: 100%;\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.q-slider-label {\n  top: 0;\n  left: 6px;\n  opacity: 0;\n  transform: translateX(-50%) translateY(0) scale(0);\n  transition: all 0.2s;\n  padding: 2px 4px;\n}\n.q-slider-label.label-always {\n  opacity: 1;\n  transform: translateX(-50%) translateY(-139%) scale(1);\n}\n.q-slider-handle {\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  transform-origin: center;\n  transition: all 0.3s ease;\n  width: 12px;\n  height: 12px;\n  outline: 0;\n  background: currentColor;\n}\n.q-slider-handle .q-chip {\n  max-width: unset;\n}\n.q-slider-handle.dragging {\n  transform: translate3d(-50%, -50%, 0) scale(1.3);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n.q-slider-handle.dragging .q-slider-label {\n  opacity: 1;\n  transform: translateX(-50%) translateY(-139%) scale(1);\n}\n.q-slider-handle.handle-at-minimum {\n  background: #fff;\n}\n.q-slider-handle.handle-at-minimum:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: transparent;\n  border-radius: inherit;\n  border: 2px solid currentColor;\n}\n.q-slider-ring {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  border-radius: inherit;\n  pointer-events: none;\n  opacity: 0;\n  transform: scale(0);\n  transition: all 0.2s ease-in;\n  background: currentColor;\n}\n.q-slider:not(.disabled):not(.readonly) .q-slider-handle.dragging .q-slider-ring,\n.q-slider:not(.disabled):not(.readonly) .q-slider-handle:focus .q-slider-ring,\nbody.desktop .q-slider:not(.disabled):not(.readonly):hover .q-slider-ring {\n  opacity: 0.4;\n  transform: scale(1);\n}\n.q-slider.disabled .q-slider-handle {\n  border: 2px solid #fff;\n}\n.q-slider.disabled .q-slider-handle.handle-at-minimum {\n  background: currentColor;\n}\n.q-slider {\n  height: 28px;\n  width: 100%;\n  color: #027be3;\n  color: var(--q-color-primary);\n  cursor: pointer;\n}\n.q-slider.label-always,\n.q-slider.with-padding {\n  padding: 36px 0 8px;\n  height: 64px;\n}\n.q-slider.has-error {\n  color: #db2828;\n  color: var(--q-color-negative);\n}\n.q-slider.has-warning {\n  color: #f2c037;\n  color: var(--q-color-warning);\n}\n.q-spinner {\n  vertical-align: middle;\n}\n.q-spinner-mat {\n  animation: q-spin 2s linear infinite /* rtl:ignore */;\n  transform-origin: center center /* rtl:ignore */;\n}\n.q-spinner-mat .path {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  stroke-linecap: round;\n  animation: q-mat-dash 1.5s ease-in-out infinite /* rtl:ignore */;\n}\n.q-stepper {\n  border-radius: 3px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.q-stepper-title {\n  font-size: 14px;\n}\n.q-stepper-subtitle {\n  font-size: 12px;\n  opacity: 0.7;\n}\n.q-stepper-dot {\n  margin-right: 8px;\n  font-size: 14px;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.q-stepper-dot span {\n  color: #fff;\n}\n.q-stepper-tab {\n  padding: 24px;\n  font-size: 14px;\n  flex-direction: row;\n  transition: color 0.28s, background 0.28s;\n}\n.q-stepper-tab.step-waiting {\n  color: #000;\n}\n.q-stepper-tab.step-waiting .q-stepper-dot {\n  color: rgba(0,0,0,0.42);\n}\n.q-stepper-tab.step-navigation {\n  user-select: none;\n  cursor: pointer;\n}\n.q-stepper-tab.step-color {\n  color: currentColor;\n}\n.q-stepper-tab.step-active .q-stepper-title {\n  font-weight: bold;\n}\n.q-stepper-tab.step-disabled {\n  color: rgba(0,0,0,0.42);\n}\n.q-stepper-tab.step-error {\n  color: #db2828;\n  color: var(--q-color-negative);\n}\n.q-stepper-tab.step-error .q-stepper-dot {\n  background: transparent;\n}\n.q-stepper-tab.step-error .q-stepper-dot span {\n  color: #db2828;\n  color: var(--q-color-negative);\n  font-size: 24px;\n}\n.q-stepper-header {\n  min-height: 72px;\n}\n.q-stepper-header:not(.alternative-labels) .q-stepper-tab {\n  justify-content: center;\n}\n.q-stepper-header:not(.alternative-labels) .q-stepper-dot:after {\n  display: none;\n}\n.q-stepper-header.alternative-labels {\n  min-height: 104px;\n}\n.q-stepper-header.alternative-labels .q-stepper-tab {\n  padding: 24px 32px;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.q-stepper-header.alternative-labels .q-stepper-dot {\n  margin-right: 0;\n}\n.q-stepper-header.alternative-labels .q-stepper-label {\n  margin-top: 8px;\n  text-align: center;\n}\n.q-stepper-header.alternative-labels .q-stepper-label:before,\n.q-stepper-header.alternative-labels .q-stepper-label:after {\n  display: none;\n}\n.q-stepper-step-content {\n  color: #000;\n}\n.q-stepper-horizontal > .q-stepper-header .q-stepper-tab {\n  overflow: hidden;\n}\n.q-stepper-horizontal > .q-stepper-header .q-stepper-first .q-stepper-dot:before,\n.q-stepper-horizontal > .q-stepper-header .q-stepper-last .q-stepper-label:after,\n.q-stepper-horizontal > .q-stepper-header .q-stepper-last .q-stepper-dot:after {\n  display: none;\n}\n.q-stepper-horizontal > .q-stepper-header .q-stepper-line:before,\n.q-stepper-horizontal > .q-stepper-header .q-stepper-line:after {\n  position: absolute;\n  top: 50%;\n  height: 1px;\n  width: 100vw;\n  background: rgba(0,0,0,0.12);\n}\n.q-stepper-horizontal > .q-stepper-header .q-stepper-label:after,\n.q-stepper-horizontal > .q-stepper-header .q-stepper-dot:after {\n  content: '';\n  left: 100%;\n  margin-left: 8px;\n}\n.q-stepper-horizontal > .q-stepper-header .q-stepper-dot:before {\n  content: '';\n  right: 100%;\n  margin-right: 8px;\n}\n.q-stepper-horizontal > .q-stepper-nav {\n  margin: 0 16px 8px;\n}\n.q-stepper-horizontal > .q-stepper-step .q-stepper-nav {\n  margin: 16px 0 0;\n}\n.q-stepper-horizontal > .q-stepper-step .q-stepper-nav > div.col {\n  display: none;\n}\n.q-stepper-horizontal > .q-stepper-step > .q-stepper-step-content > .q-stepper-step-inner {\n  padding: 24px;\n}\n.q-stepper-vertical {\n  padding: 8px 0 18px;\n}\n.q-stepper-vertical > .q-stepper-nav {\n  margin-top: 16px;\n}\n.q-stepper-vertical > .q-stepper-nav > div.col {\n  display: none;\n}\n.q-stepper-vertical > .q-stepper-step {\n  overflow: hidden;\n}\n.q-stepper-vertical > .q-stepper-step > .q-stepper-step-content > .q-stepper-step-inner {\n  padding: 0 24px 24px 48px;\n}\n.q-stepper-vertical > .q-stepper-step > .q-stepper-tab {\n  padding: 12px 16px;\n}\n.q-stepper-vertical > .q-stepper-step > .q-stepper-tab .q-stepper-dot:before,\n.q-stepper-vertical > .q-stepper-step > .q-stepper-tab .q-stepper-dot:after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  width: 1px;\n  height: 100vh;\n  background: rgba(0,0,0,0.12);\n}\n.q-stepper-vertical > .q-stepper-step > .q-stepper-tab .q-stepper-dot:before {\n  bottom: 100%;\n  margin-bottom: 8px;\n}\n.q-stepper-vertical > .q-stepper-step > .q-stepper-tab .q-stepper-dot:after {\n  top: 100%;\n  margin-top: 8px;\n}\n.q-stepper-vertical > .q-stepper-step > .q-stepper-tab .q-stepper-label {\n  padding-top: 4px;\n}\n.q-stepper-vertical > .q-stepper-step > .q-stepper-tab .q-stepper-label .q-stepper-title {\n  line-height: 18px;\n}\n.q-stepper-vertical > .q-stepper-step > .q-stepper-tab.q-stepper-first .q-stepper-dot:before,\n.q-stepper-vertical > .q-stepper-step > .q-stepper-tab.q-stepper-last .q-stepper-dot:after {\n  display: none;\n}\nbody.desktop .q-stepper-tab.step-navigation:hover {\n  background: rgba(0,0,0,0.05);\n}\n@media (max-width: 767px) {\n  .q-stepper-horizontal.q-stepper-contractable > .q-stepper-header {\n    min-height: 72px;\n  }\n  .q-stepper-horizontal.q-stepper-contractable > .q-stepper-header .q-stepper-tab {\n    padding: 24px 0;\n  }\n  .q-stepper-horizontal.q-stepper-contractable > .q-stepper-header .q-stepper-tab:not(:last-child) .q-stepper-dot:after {\n    display: block !important;\n  }\n  .q-stepper-horizontal.q-stepper-contractable > .q-stepper-header .q-stepper-dot {\n    margin: 0;\n  }\n  .q-stepper-horizontal.q-stepper-contractable > .q-stepper-header .q-stepper-label {\n    display: none;\n  }\n}\n.q-tabs {\n  flex-direction: column;\n  border-radius: 3px;\n}\n.q-layout-marginal .q-tabs {\n  border-radius: 0;\n}\n.q-tabs-scroller {\n  overflow: hidden;\n}\n.q-tab-pane {\n  padding: 12px;\n}\n.q-tabs-panes:empty {\n  display: none;\n}\n.q-tabs-normal .q-tab-icon,\n.q-tabs-normal .q-tab-label {\n  opacity: 0.7;\n}\n.q-tab {\n  cursor: pointer;\n  transition: color 0.3s, background 0.3s;\n  white-space: nowrap;\n  user-select: none;\n  padding: 8px 10px;\n  min-height: 48px;\n  text-transform: uppercase;\n}\n.q-tab .q-tab-icon-parent + .q-tab-label-parent {\n  margin-top: 4px;\n}\n.q-tab .q-chip {\n  top: -8px;\n  right: -10px;\n  left: auto;\n  min-height: auto;\n  color: #fff;\n  background: rgba(244,67,54,0.75);\n}\n.q-tab.active .q-tab-icon,\n.q-tab.active .q-tab-label {\n  opacity: 1;\n}\n.q-tab-label {\n  text-align: center;\n}\n.q-tab-icon {\n  font-size: 27px;\n}\n.q-tab-focus-helper {\n  z-index: -1;\n  outline: 0;\n}\n.q-tab-focus-helper:focus {\n  z-index: unset;\n  background: currentColor;\n  opacity: 0.1;\n}\n@media (max-width: 767px) {\n  .q-tab.hide-icon .q-tab-icon-parent,\n  .q-tab.hide-label .q-tab-label-parent {\n    display: none !important;\n  }\n  .q-tab.hide-icon .q-tab-label {\n    margin-top: 0;\n  }\n  .q-tab-full.hide-none .q-tab-label-parent .q-tab-meta {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .q-tab-full .q-tab-label-parent .q-tab-meta {\n    display: none;\n  }\n}\n@media (max-width: 991px) {\n  .q-tabs-head:not(.scrollable) .q-tabs-scroller,\n  .q-tabs-head:not(.scrollable) .q-tab {\n    flex: 1 1 auto;\n  }\n}\n@media (min-width: 992px) {\n  .q-tab {\n    padding-left: 25px;\n    padding-right: 25px;\n  }\n  .q-layout-marginal .q-tabs-head:not(.scrollable) {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n}\n.q-tabs-head {\n  min-height: 48px;\n  overflow: hidden;\n  font-size: 0.95rem;\n  font-weight: 500;\n  transition: color 0.18s ease-in, box-shadow 0.18s ease-in;\n  position: relative;\n}\n.q-tabs-head:not(.scrollable) .q-tabs-left-scroll,\n.q-tabs-head:not(.scrollable) .q-tabs-right-scroll {\n  display: none !important;\n}\n.q-tabs-left-scroll,\n.q-tabs-right-scroll {\n  position: absolute;\n  height: 100%;\n  cursor: pointer;\n  color: #fff;\n  top: 0;\n}\n.q-tabs-left-scroll .q-icon,\n.q-tabs-right-scroll .q-icon {\n  text-shadow: 0 0 10px #000;\n  font-size: 32.4px;\n  visibility: hidden;\n}\n.q-tabs-left-scroll.disabled,\n.q-tabs-right-scroll.disabled {\n  display: none;\n}\n.q-tabs:hover .q-tabs-left-scroll .q-icon,\n.q-tabs:hover .q-tabs-right-scroll .q-icon {\n  visibility: visible;\n}\n.q-tabs-left-scroll {\n  left: 0 /* rtl:ignore */;\n}\n.q-tabs-right-scroll {\n  right: 0 /* rtl:ignore */;\n}\n.q-tabs-align-justify .q-tabs-scroller,\n.q-tabs-align-justify .q-tab {\n  flex: 1 1 auto;\n}\n.q-tabs-align-center {\n  justify-content: center;\n}\n.q-tabs-align-right {\n  justify-content: flex-end;\n}\n.q-tabs-bar {\n  border: 2px solid currentColor;\n  border-width: 0;\n  position: absolute;\n  height: 0;\n  left: 0;\n  right: 0;\n}\n.q-tabs-global-bar {\n  width: 1px;\n  transform: scale(0);\n  transform-origin: left center;\n  transition: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.q-tabs-global-bar.contract {\n  transition-duration: 0.18s;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.q-tabs-global-bar-container.highlight > .q-tabs-global-bar {\n  display: none;\n}\n.q-tabs-two-lines .q-tab {\n  white-space: normal;\n}\n.q-tabs-two-lines .q-tab .q-tab-label {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.q-tabs-position-top > .q-tabs-head .q-tabs-bar {\n  bottom: 0;\n  border-bottom-width: 2px;\n}\n.q-tabs-position-bottom > .q-tabs-head .q-tabs-bar {\n  top: 0;\n  border-top-width: 2px;\n}\n.q-tabs-position-bottom > .q-tabs-panes {\n  order: -1;\n}\n.q-tabs-inverted .q-tabs-head {\n  background: #fff;\n}\n.q-tabs-inverted.q-tabs-position-top > .q-tabs-panes {\n  border-top: 1px solid rgba(0,0,0,0.1);\n}\n.q-tabs-inverted.q-tabs-position-top > .q-tab-pane {\n  border-top: 0;\n}\n.q-tabs-inverted.q-tabs-position-bottom > .q-tabs-panes {\n  border-bottom: 1px solid rgba(0,0,0,0.1);\n}\n.q-tabs-inverted.q-tabs-position-bottom > .q-tab-pane {\n  border-bottom: 0;\n}\nbody.mobile .q-tabs-scroller {\n  overflow-y: hidden;\n  overflow-x: auto;\n  will-change: scroll-position;\n  -webkit-overflow-scrolling: touch;\n}\nbody.desktop .q-tab:before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.1;\n  background: currentColor;\n}\nbody.desktop .q-tab:hover:before {\n  content: '';\n}\n.q-table-container {\n  border-radius: 3px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  position: relative;\n}\n.q-table-container.fullscreen {\n  background-color: inherit;\n}\n.q-table-top {\n  min-height: 64px;\n  padding: 8px 24px;\n}\n.q-table-top:before {\n  content: '';\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.2;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.q-table-top .q-table-control {\n  min-height: 36px;\n  padding: 8px 0;\n  flex-wrap: wrap;\n}\n.q-table-title {\n  font-size: 20px;\n  letter-spacing: 0.005em;\n  font-weight: 400;\n}\n.q-table-separator {\n  min-width: 8px !important;\n}\n.q-table-nodata .q-icon {\n  font-size: 200%;\n  padding-right: 15px;\n}\n.q-table-progress {\n  height: 0 !important;\n}\n.q-table-progress td {\n  padding: 0 !important;\n  border-bottom: 1px solid transparent !important;\n}\n.q-table-progress .q-progress {\n  position: absolute;\n  height: 2px;\n  bottom: 0;\n}\n.q-table-middle {\n  max-width: 100%;\n}\n.q-table-bottom {\n  min-height: 48px;\n  padding: 4px 14px 4px 24px;\n}\n.q-table-bottom,\n.q-table-bottom .q-if {\n  font-size: 12px;\n}\n.q-table-bottom .q-table-control {\n  min-height: 24px;\n}\n.q-table-control {\n  display: flex;\n  align-items: center;\n}\n.q-table-sort-icon {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  will-change: opacity, transform;\n  opacity: 0;\n  font-size: 120%;\n}\n.q-table-sort-icon-left,\n.q-table-sort-icon-center {\n  margin-left: 4px;\n}\n.q-table-sort-icon-right {\n  margin-right: 4px;\n}\n.q-table {\n  width: 100%;\n  max-width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.q-table thead tr {\n  height: 56px;\n}\n.q-table th {\n  font-weight: 500;\n  font-size: 12px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  user-select: none;\n}\n.q-table th.sortable {\n  cursor: pointer;\n}\n.q-table th.sortable:hover .q-table-sort-icon {\n  opacity: 0.5;\n}\n.q-table th.sorted .q-table-sort-icon {\n  opacity: 1 !important;\n}\n.q-table th.sort-desc .q-table-sort-icon {\n  transform: rotate(180deg);\n}\n.q-table tbody tr {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  will-change: background;\n}\n.q-table th,\n.q-table td {\n  white-space: nowrap;\n  padding: 7px 24px;\n  position: relative;\n}\n.q-table thead,\n.q-table td,\n.q-table th {\n  border-style: solid;\n  border-width: 0;\n}\n.q-table tbody td {\n  height: 48px;\n  font-weight: 400;\n  font-size: 13px;\n}\n.q-table-col-auto-width {\n  width: 1px;\n}\n.q-table-bottom-item {\n  margin-right: 24px;\n}\n.q-table-grid {\n  box-shadow: none;\n}\n.q-table-grid .q-table-bottom {\n  border-top: 0;\n}\n.q-table-grid .q-table {\n  height: 2px;\n}\n.q-table-grid .q-table thead {\n  border: 0;\n}\n.q-table-horizontal-separator thead,\n.q-table-horizontal-separator tbody td {\n  border-width: 0 0 1px 0;\n}\n.q-table-vertical-separator thead {\n  border-width: 0 0 1px 0;\n}\n.q-table-vertical-separator td {\n  border-width: 0 0 0 1px;\n}\n.q-table-vertical-separator td:first-child {\n  border-left: 0;\n}\n.q-table-cell-separator td {\n  border-width: 1px;\n}\n.q-table-cell-separator td:first-child {\n  border-left: 0;\n}\n.q-table-cell-separator td:last-child {\n  border-right: 0;\n}\n.q-table-dense .q-table-top {\n  min-height: 48px;\n}\n.q-table-dense .q-table-top,\n.q-table-dense .q-table-bottom {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.q-table-dense .q-table-bottom {\n  min-height: 42px;\n}\n.q-table-dense .q-table-sort-icon {\n  font-size: 110%;\n}\n.q-table-dense .q-table th,\n.q-table-dense .q-table td {\n  padding: 4px 8px;\n}\n.q-table-dense .q-table thead tr {\n  height: 40px;\n}\n.q-table-dense .q-table tbody td {\n  height: 28px;\n}\n.q-table-dense .q-table-bottom-item {\n  margin-right: 8px;\n}\n@media (max-width: 767px) {\n  .q-table-top {\n    min-height: 48px;\n  }\n  .q-table-top,\n  .q-table-bottom {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .q-table-bottom {\n    min-height: 42px;\n  }\n  .q-table-sort-icon {\n    font-size: 110%;\n  }\n  .q-table th,\n  .q-table td {\n    padding: 4px 8px;\n  }\n  .q-table thead tr {\n    height: 40px;\n  }\n  .q-table tbody td {\n    height: 28px;\n  }\n  .q-table-bottom-item {\n    margin-right: 8px;\n  }\n}\n.q-table-bottom {\n  color: rgba(0,0,0,0.54);\n  border-top: 1px solid rgba(0,0,0,0.12);\n}\n.q-table {\n  color: rgba(0,0,0,0.87);\n}\n.q-table thead,\n.q-table tr,\n.q-table th,\n.q-table td {\n  border-color: rgba(0,0,0,0.12);\n}\n.q-table th {\n  color: rgba(0,0,0,0.54);\n}\n.q-table th.sortable:hover,\n.q-table th.sorted {\n  color: rgba(0,0,0,0.87);\n}\n.q-table tbody tr.selected {\n  background: rgba(0,0,0,0.06);\n}\n.q-table tbody tr:hover {\n  background: rgba(0,0,0,0.03);\n}\n.q-table-dark {\n  color: #eee;\n}\n.q-table-dark .q-table-bottom,\n.q-table-dark .q-table-top {\n  color: rgba(255,255,255,0.64);\n  border-top: 1px solid rgba(255,255,255,0.12);\n}\n.q-table-dark thead,\n.q-table-dark tr,\n.q-table-dark th,\n.q-table-dark td {\n  border-color: rgba(255,255,255,0.12);\n}\n.q-table-dark th {\n  color: rgba(255,255,255,0.64);\n}\n.q-table-dark th.sortable:hover,\n.q-table-dark th.sorted {\n  color: #eee;\n}\n.q-table-dark tbody tr.selected {\n  background: rgba(255,255,255,0.2);\n}\n.q-table-dark tbody tr:hover {\n  background: rgba(255,255,255,0.1);\n}\n.q-timeline {\n  padding: 0;\n  width: 100%;\n  list-style: none;\n}\n.q-timeline h6 {\n  line-height: inherit;\n}\n.q-timeline-title {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.q-timeline-subtitle {\n  font-size: 12px;\n  margin-bottom: 8px;\n  opacity: 0.4;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n}\n.q-timeline-dot {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15px;\n}\n.q-timeline-dot:before,\n.q-timeline-dot:after {\n  content: '';\n  background: currentColor;\n  display: block;\n  position: absolute;\n}\n.q-timeline-dot:before {\n  border: 3px solid transparent;\n  border-radius: 100%;\n  height: 15px;\n  width: 15px;\n  top: 4px;\n  left: 0;\n  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;\n}\n.q-timeline-dot:after {\n  width: 3px;\n  opacity: 0.4;\n  top: 24px;\n  bottom: 0;\n  left: 6px;\n}\n.q-timeline-entry-with-icon .q-timeline-dot {\n  width: 31px;\n  left: -8px;\n}\n.q-timeline-entry-with-icon .q-timeline-dot:before {\n  height: 31px;\n  width: 31px;\n}\n.q-timeline-entry-with-icon .q-timeline-dot:after {\n  top: 41px;\n  left: 14px;\n}\n.q-timeline-entry-with-icon .q-timeline-subtitle {\n  padding-top: 8px;\n}\n.q-timeline-dot .q-icon {\n  position: absolute;\n  display: inline-flex;\n  top: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  height: 38px;\n  color: #fff;\n  transition: color 0.3s ease-in-out;\n}\n.q-timeline-dark {\n  color: #fff;\n}\n.q-timeline-dark .q-timeline-subtitle {\n  opacity: 0.7;\n}\n.q-timeline-entry {\n  padding-left: 40px;\n  position: relative;\n  line-height: 22px;\n}\n.q-timeline-entry:last-child {\n  padding-bottom: 0;\n}\n.q-timeline-entry:last-child .q-timeline-dot:after {\n  content: none;\n}\n.q-timeline-hover .q-timeline-entry:hover .q-timeline-dot:before {\n  background: transparent;\n  border: 3px solid currentColor;\n}\n.q-timeline-hover .q-timeline-entry.q-timeline-entry-with-icon:hover .q-timeline-dot .q-icon {\n  color: currentColor;\n}\n.q-timeline-content {\n  padding-bottom: 24px;\n}\n.q-timeline-heading {\n  position: relative;\n}\n.q-timeline-heading:first-child .q-timeline-heading-title {\n  padding-top: 0;\n}\n.q-timeline-heading:last-child .q-timeline-heading-title {\n  padding-bottom: 0;\n}\n.q-timeline-heading-title {\n  padding: 32px 0;\n  margin: 0;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .q-timeline-responsive .q-timeline-heading {\n    display: table-row;\n    font-size: 200%;\n  }\n  .q-timeline-responsive .q-timeline-heading > div {\n    display: table-cell;\n  }\n  .q-timeline-responsive .q-timeline-heading-title {\n    margin-left: -50px;\n  }\n  .q-timeline-responsive .q-timeline {\n    display: table;\n  }\n  .q-timeline-responsive .q-timeline-entry {\n    display: table-row;\n    padding: 0;\n  }\n  .q-timeline-responsive .q-timeline-subtitle,\n  .q-timeline-responsive .q-timeline-dot,\n  .q-timeline-responsive .q-timeline-content {\n    display: table-cell;\n    vertical-align: top;\n  }\n  .q-timeline-responsive .q-timeline-subtitle {\n    text-align: right;\n    width: 35%;\n  }\n  .q-timeline-responsive .q-timeline-dot {\n    position: relative;\n  }\n  .q-timeline-responsive .q-timeline-content {\n    padding-left: 30px;\n  }\n  .q-timeline-responsive .q-timeline-entry-with-icon .q-timeline-content {\n    padding-top: 8px;\n  }\n  .q-timeline-responsive .q-timeline-subtitle {\n    padding-right: 30px;\n  }\n}\n@media (min-width: 992px) {\n  .q-timeline-responsive .q-timeline-heading-title {\n    text-align: center;\n    margin-left: 0;\n  }\n  .q-timeline-responsive .q-timeline-entry,\n  .q-timeline-responsive .q-timeline-subtitle,\n  .q-timeline-responsive .q-timeline-dot,\n  .q-timeline-responsive .q-timeline-content {\n    display: block;\n    margin: 0;\n    padding: 0;\n  }\n  .q-timeline-responsive .q-timeline-dot {\n    position: absolute;\n    left: 50%;\n    margin-left: -7.15px;\n  }\n  .q-timeline-responsive .q-timeline-entry-with-icon .q-timeline-dot {\n    left: 50%;\n    margin-left: -15px;\n  }\n  .q-timeline-responsive .q-timeline-subtitle,\n  .q-timeline-responsive .q-timeline-content {\n    width: 50%;\n  }\n  .q-timeline-responsive .q-timeline-entry-left .q-timeline-content,\n  .q-timeline-responsive .q-timeline-entry-right .q-timeline-subtitle {\n    float: left;\n    padding-right: 30px;\n    text-align: right;\n  }\n  .q-timeline-responsive .q-timeline-entry-left .q-timeline-subtitle,\n  .q-timeline-responsive .q-timeline-entry-right .q-timeline-content {\n    float: right;\n    text-align: left;\n    padding-left: 30px;\n  }\n  .q-timeline-responsive .q-timeline-entry-with-icon .q-timeline-content {\n    padding-top: 8px;\n  }\n  .q-timeline-responsive .q-timeline-entry {\n    padding-bottom: 24px;\n    overflow: hidden;\n  }\n}\n.q-toggle-base {\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  width: 100%;\n  height: 12px;\n  border-radius: 30px;\n  background: currentColor;\n  opacity: 0.5;\n}\n.q-toggle-handle {\n  background: #f5f5f5;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1);\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 21px;\n  height: 21px;\n  line-height: 21px;\n}\n.q-toggle .q-option-inner {\n  height: 21px;\n  width: 40px;\n  min-width: 40px;\n  padding: 5px 0;\n}\n.q-toggle .q-option-inner.active .q-toggle-handle {\n  background: currentColor;\n  left: 19px;\n}\n.q-toggle .q-option-inner.active .q-toggle-icon {\n  color: #fff;\n}\n.q-toolbar {\n  padding: 4px 12px;\n  min-height: 50px;\n  overflow: hidden;\n  width: 100%;\n}\n.q-toolbar-inverted {\n  background: #fff;\n}\n.q-toolbar-title {\n  flex: 1 1 0%;\n  min-width: 1px;\n  max-width: 100%;\n  font-size: 18px;\n  font-weight: 500;\n  padding: 0 12px;\n}\n.q-toolbar-subtitle {\n  font-size: 12px;\n  opacity: 0.7;\n}\n.q-toolbar-title,\n.q-toolbar-subtitle {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.q-tooltip {\n  position: fixed;\n  font-size: 12px;\n  color: #fafafa;\n  background: #747474;\n  z-index: 9000;\n  padding: 10px;\n  border-radius: 3px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  pointer-events: none;\n}\n.q-tree-node {\n  margin: 0;\n  list-style-type: none;\n  position: relative;\n  padding: 0 0 3px 22px;\n}\n.q-tree-node:after {\n  content: '';\n  position: absolute;\n  top: -3px;\n  bottom: 0;\n  width: 1px;\n  right: auto;\n  left: -13px;\n  border-left: 1px solid currentColor;\n}\n.q-tree-node:last-child:after {\n  display: none;\n}\n.q-tree-node-header:before {\n  content: '';\n  position: absolute;\n  top: -3px;\n  bottom: 50%;\n  width: 35px;\n  left: -35px;\n  border-left: 1px solid currentColor;\n  border-bottom: 1px solid currentColor;\n}\n.q-tree-children {\n  padding-left: 25px;\n}\n.q-tree-children.disabled {\n  pointer-events: none;\n}\n.q-tree-node-body {\n  padding: 5px 0 8px 5px;\n}\n.q-tree-node-parent {\n  padding-left: 2px;\n}\n.q-tree-node-parent > .q-tree-node-header:before {\n  width: 15px;\n  left: -15px;\n}\n.q-tree-node-parent > .q-tree-node-collapsible > .q-tree-node-body {\n  padding: 5px 0 8px 27px;\n}\n.q-tree-node-parent > .q-tree-node-collapsible > .q-tree-node-body:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  right: auto;\n  left: 12px;\n  border-left: 1px solid currentColor;\n  bottom: 50px;\n}\n.q-tree-node-link {\n  cursor: pointer;\n}\n.q-tree-node-selected {\n  background: rgba(0,0,0,0.15);\n}\n.q-tree-dark .q-tree-node-selected {\n  background: rgba(255,255,255,0.4);\n}\nbody.desktop .q-tree-node-link:hover {\n  background: rgba(0,0,0,0.1);\n}\nbody.desktop .q-tree-dark .q-tree-node-link:hover {\n  background: rgba(255,255,255,0.3);\n}\n.q-tree-node-header {\n  padding: 4px;\n  margin-top: 3px;\n  border-radius: 3px;\n}\n.q-tree-node-header.disabled {\n  pointer-events: none;\n}\n.q-tree-icon {\n  font-size: 1.5em;\n}\n.q-tree-img {\n  height: 3em;\n}\n.q-tree-img.avatar {\n  width: 2em;\n  height: 2em;\n}\n.q-tree-arrow {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.q-tree-arrow-rotate {\n  transform: rotate(90deg);\n}\n[dir=rtl] .q-tree-arrow {\n  transform: rotate(180deg) /* rtl:ignore */;\n}\n[dir=rtl] .q-tree-arrow-rotate {\n  transform: rotate(90deg) /* rtl:ignore */;\n}\n.q-tree > .q-tree-node {\n  padding: 0;\n}\n.q-tree > .q-tree-node:after,\n.q-tree > .q-tree-node > .q-tree-node-header:before {\n  display: none;\n}\n.q-tree > .q-tree-node-child > .q-tree-node-header {\n  padding-left: 24px;\n}\n.q-uploader-expanded .q-if {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.q-uploader-input {\n  opacity: 0;\n  max-width: 100%;\n  height: 100%;\n  width: 100%;\n  font-size: 0;\n}\n.q-uploader-pick-button[disabled] .q-uploader-input {\n  display: none;\n}\n.q-uploader-files {\n  border: 1px solid #e0e0e0;\n  font-size: 14px;\n  max-height: 500px;\n}\n.q-uploader-files-no-border .q-uploader-files {\n  border-top: 0 !important;\n}\n.q-uploader-file:not(:last-child) {\n  border-bottom: 1px solid #e0e0e0;\n}\n.q-uploader-progress-bg,\n.q-uploader-progress-text {\n  pointer-events: none;\n}\n.q-uploader-progress-bg {\n  height: 100%;\n  opacity: 0.2;\n}\n.q-uploader-progress-text {\n  font-size: 40px;\n  opacity: 0.1;\n  right: 44px;\n  bottom: 0;\n}\n.q-uploader-dnd {\n  outline: 2px dashed currentColor;\n  outline-offset: -6px;\n  background: rgba(255,255,255,0.6);\n}\n.q-uploader-dnd.inverted {\n  background: rgba(0,0,0,0.3);\n}\n.q-uploader-dark .q-uploader-files {\n  color: #fff;\n  border: 1px solid #a7a7a7;\n}\n.q-uploader-dark .q-uploader-bg {\n  color: #fff;\n}\n.q-uploader-dark .q-uploader-progress-text {\n  opacity: 0.2;\n}\n.q-uploader-dark .q-uploader-file:not(:last-child) {\n  border-bottom: 1px solid #424242;\n  border-bottom: 1px solid var(--q-color-dark);\n}\nimg.responsive {\n  max-width: 100%;\n  height: auto;\n}\nimg.avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);\n  vertical-align: middle;\n}\n.q-video {\n  position: relative;\n  overflow: hidden;\n  border-radius: inherit;\n}\n.q-video iframe,\n.q-video object,\n.q-video embed {\n  width: 100%;\n  height: 100%;\n}\n:root {\n  --q-color-primary: #027be3;\n  --q-color-secondary: #26a69a;\n  --q-color-tertiary: #555;\n  --q-color-positive: #21ba45;\n  --q-color-negative: #db2828;\n  --q-color-negative-l: #ec8b8b;\n  --q-color-info: #31ccec;\n  --q-color-warning: #f2c037;\n  --q-color-warning-l: #f8dd93;\n  --q-color-light: #bdbdbd;\n  --q-color-light-d: #aaa;\n  --q-color-faded: #777;\n  --q-color-dark: #424242;\n}\n.text-primary {\n  color: #027be3 !important;\n  color: var(--q-color-primary) !important;\n}\n.bg-primary {\n  background: #027be3 !important;\n  background: var(--q-color-primary) !important;\n}\n.text-secondary {\n  color: #26a69a !important;\n  color: var(--q-color-secondary) !important;\n}\n.bg-secondary {\n  background: #26a69a !important;\n  background: var(--q-color-secondary) !important;\n}\n.text-tertiary {\n  color: #555 !important;\n  color: var(--q-color-tertiary) !important;\n}\n.bg-tertiary {\n  background: #555 !important;\n  background: var(--q-color-tertiary) !important;\n}\n.text-faded {\n  color: #777 !important;\n  color: var(--q-color-faded) !important;\n}\n.bg-faded {\n  background: #777 !important;\n  background: var(--q-color-faded) !important;\n}\n.text-positive {\n  color: #21ba45 !important;\n  color: var(--q-color-positive) !important;\n}\n.bg-positive {\n  background: #21ba45 !important;\n  background: var(--q-color-positive) !important;\n}\n.text-negative {\n  color: #db2828 !important;\n  color: var(--q-color-negative) !important;\n}\n.bg-negative {\n  background: #db2828 !important;\n  background: var(--q-color-negative) !important;\n}\n.text-info {\n  color: #31ccec !important;\n  color: var(--q-color-info) !important;\n}\n.bg-info {\n  background: #31ccec !important;\n  background: var(--q-color-info) !important;\n}\n.text-warning {\n  color: #f2c037 !important;\n  color: var(--q-color-warning) !important;\n}\n.bg-warning {\n  background: #f2c037 !important;\n  background: var(--q-color-warning) !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.bg-white {\n  background: #fff !important;\n}\n.text-black {\n  color: #000 !important;\n}\n.bg-black {\n  background: #000 !important;\n}\n.text-light {\n  color: #bdbdbd !important;\n  color: var(--q-color-light) !important;\n}\n.bg-light {\n  background: #bdbdbd !important;\n  background: var(--q-color-light) !important;\n}\n.text-dark {\n  color: #424242 !important;\n  color: var(--q-color-dark) !important;\n}\n.bg-dark {\n  background: #424242 !important;\n  background: var(--q-color-dark) !important;\n}\n.text-transparent {\n  color: transparent !important;\n}\n.bg-transparent {\n  background: transparent !important;\n}\n.text-red {\n  color: #f44336 !important;\n}\n.text-red-1 {\n  color: #ffebee !important;\n}\n.text-red-2 {\n  color: #ffcdd2 !important;\n}\n.text-red-3 {\n  color: #ef9a9a !important;\n}\n.text-red-4 {\n  color: #e57373 !important;\n}\n.text-red-5 {\n  color: #ef5350 !important;\n}\n.text-red-6 {\n  color: #f44336 !important;\n}\n.text-red-7 {\n  color: #e53935 !important;\n}\n.text-red-8 {\n  color: #d32f2f !important;\n}\n.text-red-9 {\n  color: #c62828 !important;\n}\n.text-red-10 {\n  color: #b71c1c !important;\n}\n.text-red-11 {\n  color: #ff8a80 !important;\n}\n.text-red-12 {\n  color: #ff5252 !important;\n}\n.text-red-13 {\n  color: #ff1744 !important;\n}\n.text-red-14 {\n  color: #d50000 !important;\n}\n.text-pink {\n  color: #e91e63 !important;\n}\n.text-pink-1 {\n  color: #fce4ec !important;\n}\n.text-pink-2 {\n  color: #f8bbd0 !important;\n}\n.text-pink-3 {\n  color: #f48fb1 !important;\n}\n.text-pink-4 {\n  color: #f06292 !important;\n}\n.text-pink-5 {\n  color: #ec407a !important;\n}\n.text-pink-6 {\n  color: #e91e63 !important;\n}\n.text-pink-7 {\n  color: #d81b60 !important;\n}\n.text-pink-8 {\n  color: #c2185b !important;\n}\n.text-pink-9 {\n  color: #ad1457 !important;\n}\n.text-pink-10 {\n  color: #880e4f !important;\n}\n.text-pink-11 {\n  color: #ff80ab !important;\n}\n.text-pink-12 {\n  color: #ff4081 !important;\n}\n.text-pink-13 {\n  color: #f50057 !important;\n}\n.text-pink-14 {\n  color: #c51162 !important;\n}\n.text-purple {\n  color: #9c27b0 !important;\n}\n.text-purple-1 {\n  color: #f3e5f5 !important;\n}\n.text-purple-2 {\n  color: #e1bee7 !important;\n}\n.text-purple-3 {\n  color: #ce93d8 !important;\n}\n.text-purple-4 {\n  color: #ba68c8 !important;\n}\n.text-purple-5 {\n  color: #ab47bc !important;\n}\n.text-purple-6 {\n  color: #9c27b0 !important;\n}\n.text-purple-7 {\n  color: #8e24aa !important;\n}\n.text-purple-8 {\n  color: #7b1fa2 !important;\n}\n.text-purple-9 {\n  color: #6a1b9a !important;\n}\n.text-purple-10 {\n  color: #4a148c !important;\n}\n.text-purple-11 {\n  color: #ea80fc !important;\n}\n.text-purple-12 {\n  color: #e040fb !important;\n}\n.text-purple-13 {\n  color: #d500f9 !important;\n}\n.text-purple-14 {\n  color: #a0f !important;\n}\n.text-deep-purple {\n  color: #673ab7 !important;\n}\n.text-deep-purple-1 {\n  color: #ede7f6 !important;\n}\n.text-deep-purple-2 {\n  color: #d1c4e9 !important;\n}\n.text-deep-purple-3 {\n  color: #b39ddb !important;\n}\n.text-deep-purple-4 {\n  color: #9575cd !important;\n}\n.text-deep-purple-5 {\n  color: #7e57c2 !important;\n}\n.text-deep-purple-6 {\n  color: #673ab7 !important;\n}\n.text-deep-purple-7 {\n  color: #5e35b1 !important;\n}\n.text-deep-purple-8 {\n  color: #512da8 !important;\n}\n.text-deep-purple-9 {\n  color: #4527a0 !important;\n}\n.text-deep-purple-10 {\n  color: #311b92 !important;\n}\n.text-deep-purple-11 {\n  color: #b388ff !important;\n}\n.text-deep-purple-12 {\n  color: #7c4dff !important;\n}\n.text-deep-purple-13 {\n  color: #651fff !important;\n}\n.text-deep-purple-14 {\n  color: #6200ea !important;\n}\n.text-indigo {\n  color: #3f51b5 !important;\n}\n.text-indigo-1 {\n  color: #e8eaf6 !important;\n}\n.text-indigo-2 {\n  color: #c5cae9 !important;\n}\n.text-indigo-3 {\n  color: #9fa8da !important;\n}\n.text-indigo-4 {\n  color: #7986cb !important;\n}\n.text-indigo-5 {\n  color: #5c6bc0 !important;\n}\n.text-indigo-6 {\n  color: #3f51b5 !important;\n}\n.text-indigo-7 {\n  color: #3949ab !important;\n}\n.text-indigo-8 {\n  color: #303f9f !important;\n}\n.text-indigo-9 {\n  color: #283593 !important;\n}\n.text-indigo-10 {\n  color: #1a237e !important;\n}\n.text-indigo-11 {\n  color: #8c9eff !important;\n}\n.text-indigo-12 {\n  color: #536dfe !important;\n}\n.text-indigo-13 {\n  color: #3d5afe !important;\n}\n.text-indigo-14 {\n  color: #304ffe !important;\n}\n.text-blue {\n  color: #2196f3 !important;\n}\n.text-blue-1 {\n  color: #e3f2fd !important;\n}\n.text-blue-2 {\n  color: #bbdefb !important;\n}\n.text-blue-3 {\n  color: #90caf9 !important;\n}\n.text-blue-4 {\n  color: #64b5f6 !important;\n}\n.text-blue-5 {\n  color: #42a5f5 !important;\n}\n.text-blue-6 {\n  color: #2196f3 !important;\n}\n.text-blue-7 {\n  color: #1e88e5 !important;\n}\n.text-blue-8 {\n  color: #1976d2 !important;\n}\n.text-blue-9 {\n  color: #1565c0 !important;\n}\n.text-blue-10 {\n  color: #0d47a1 !important;\n}\n.text-blue-11 {\n  color: #82b1ff !important;\n}\n.text-blue-12 {\n  color: #448aff !important;\n}\n.text-blue-13 {\n  color: #2979ff !important;\n}\n.text-blue-14 {\n  color: #2962ff !important;\n}\n.text-light-blue {\n  color: #03a9f4 !important;\n}\n.text-light-blue-1 {\n  color: #e1f5fe !important;\n}\n.text-light-blue-2 {\n  color: #b3e5fc !important;\n}\n.text-light-blue-3 {\n  color: #81d4fa !important;\n}\n.text-light-blue-4 {\n  color: #4fc3f7 !important;\n}\n.text-light-blue-5 {\n  color: #29b6f6 !important;\n}\n.text-light-blue-6 {\n  color: #03a9f4 !important;\n}\n.text-light-blue-7 {\n  color: #039be5 !important;\n}\n.text-light-blue-8 {\n  color: #0288d1 !important;\n}\n.text-light-blue-9 {\n  color: #0277bd !important;\n}\n.text-light-blue-10 {\n  color: #01579b !important;\n}\n.text-light-blue-11 {\n  color: #80d8ff !important;\n}\n.text-light-blue-12 {\n  color: #40c4ff !important;\n}\n.text-light-blue-13 {\n  color: #00b0ff !important;\n}\n.text-light-blue-14 {\n  color: #0091ea !important;\n}\n.text-cyan {\n  color: #00bcd4 !important;\n}\n.text-cyan-1 {\n  color: #e0f7fa !important;\n}\n.text-cyan-2 {\n  color: #b2ebf2 !important;\n}\n.text-cyan-3 {\n  color: #80deea !important;\n}\n.text-cyan-4 {\n  color: #4dd0e1 !important;\n}\n.text-cyan-5 {\n  color: #26c6da !important;\n}\n.text-cyan-6 {\n  color: #00bcd4 !important;\n}\n.text-cyan-7 {\n  color: #00acc1 !important;\n}\n.text-cyan-8 {\n  color: #0097a7 !important;\n}\n.text-cyan-9 {\n  color: #00838f !important;\n}\n.text-cyan-10 {\n  color: #006064 !important;\n}\n.text-cyan-11 {\n  color: #84ffff !important;\n}\n.text-cyan-12 {\n  color: #18ffff !important;\n}\n.text-cyan-13 {\n  color: #00e5ff !important;\n}\n.text-cyan-14 {\n  color: #00b8d4 !important;\n}\n.text-teal {\n  color: #009688 !important;\n}\n.text-teal-1 {\n  color: #e0f2f1 !important;\n}\n.text-teal-2 {\n  color: #b2dfdb !important;\n}\n.text-teal-3 {\n  color: #80cbc4 !important;\n}\n.text-teal-4 {\n  color: #4db6ac !important;\n}\n.text-teal-5 {\n  color: #26a69a !important;\n}\n.text-teal-6 {\n  color: #009688 !important;\n}\n.text-teal-7 {\n  color: #00897b !important;\n}\n.text-teal-8 {\n  color: #00796b !important;\n}\n.text-teal-9 {\n  color: #00695c !important;\n}\n.text-teal-10 {\n  color: #004d40 !important;\n}\n.text-teal-11 {\n  color: #a7ffeb !important;\n}\n.text-teal-12 {\n  color: #64ffda !important;\n}\n.text-teal-13 {\n  color: #1de9b6 !important;\n}\n.text-teal-14 {\n  color: #00bfa5 !important;\n}\n.text-green {\n  color: #4caf50 !important;\n}\n.text-green-1 {\n  color: #e8f5e9 !important;\n}\n.text-green-2 {\n  color: #c8e6c9 !important;\n}\n.text-green-3 {\n  color: #a5d6a7 !important;\n}\n.text-green-4 {\n  color: #81c784 !important;\n}\n.text-green-5 {\n  color: #66bb6a !important;\n}\n.text-green-6 {\n  color: #4caf50 !important;\n}\n.text-green-7 {\n  color: #43a047 !important;\n}\n.text-green-8 {\n  color: #388e3c !important;\n}\n.text-green-9 {\n  color: #2e7d32 !important;\n}\n.text-green-10 {\n  color: #1b5e20 !important;\n}\n.text-green-11 {\n  color: #b9f6ca !important;\n}\n.text-green-12 {\n  color: #69f0ae !important;\n}\n.text-green-13 {\n  color: #00e676 !important;\n}\n.text-green-14 {\n  color: #00c853 !important;\n}\n.text-light-green {\n  color: #8bc34a !important;\n}\n.text-light-green-1 {\n  color: #f1f8e9 !important;\n}\n.text-light-green-2 {\n  color: #dcedc8 !important;\n}\n.text-light-green-3 {\n  color: #c5e1a5 !important;\n}\n.text-light-green-4 {\n  color: #aed581 !important;\n}\n.text-light-green-5 {\n  color: #9ccc65 !important;\n}\n.text-light-green-6 {\n  color: #8bc34a !important;\n}\n.text-light-green-7 {\n  color: #7cb342 !important;\n}\n.text-light-green-8 {\n  color: #689f38 !important;\n}\n.text-light-green-9 {\n  color: #558b2f !important;\n}\n.text-light-green-10 {\n  color: #33691e !important;\n}\n.text-light-green-11 {\n  color: #ccff90 !important;\n}\n.text-light-green-12 {\n  color: #b2ff59 !important;\n}\n.text-light-green-13 {\n  color: #76ff03 !important;\n}\n.text-light-green-14 {\n  color: #64dd17 !important;\n}\n.text-lime {\n  color: #cddc39 !important;\n}\n.text-lime-1 {\n  color: #f9fbe7 !important;\n}\n.text-lime-2 {\n  color: #f0f4c3 !important;\n}\n.text-lime-3 {\n  color: #e6ee9c !important;\n}\n.text-lime-4 {\n  color: #dce775 !important;\n}\n.text-lime-5 {\n  color: #d4e157 !important;\n}\n.text-lime-6 {\n  color: #cddc39 !important;\n}\n.text-lime-7 {\n  color: #c0ca33 !important;\n}\n.text-lime-8 {\n  color: #afb42b !important;\n}\n.text-lime-9 {\n  color: #9e9d24 !important;\n}\n.text-lime-10 {\n  color: #827717 !important;\n}\n.text-lime-11 {\n  color: #f4ff81 !important;\n}\n.text-lime-12 {\n  color: #eeff41 !important;\n}\n.text-lime-13 {\n  color: #c6ff00 !important;\n}\n.text-lime-14 {\n  color: #aeea00 !important;\n}\n.text-yellow {\n  color: #ffeb3b !important;\n}\n.text-yellow-1 {\n  color: #fffde7 !important;\n}\n.text-yellow-2 {\n  color: #fff9c4 !important;\n}\n.text-yellow-3 {\n  color: #fff59d !important;\n}\n.text-yellow-4 {\n  color: #fff176 !important;\n}\n.text-yellow-5 {\n  color: #ffee58 !important;\n}\n.text-yellow-6 {\n  color: #ffeb3b !important;\n}\n.text-yellow-7 {\n  color: #fdd835 !important;\n}\n.text-yellow-8 {\n  color: #fbc02d !important;\n}\n.text-yellow-9 {\n  color: #f9a825 !important;\n}\n.text-yellow-10 {\n  color: #f57f17 !important;\n}\n.text-yellow-11 {\n  color: #ffff8d !important;\n}\n.text-yellow-12 {\n  color: #ff0 !important;\n}\n.text-yellow-13 {\n  color: #ffea00 !important;\n}\n.text-yellow-14 {\n  color: #ffd600 !important;\n}\n.text-amber {\n  color: #ffc107 !important;\n}\n.text-amber-1 {\n  color: #fff8e1 !important;\n}\n.text-amber-2 {\n  color: #ffecb3 !important;\n}\n.text-amber-3 {\n  color: #ffe082 !important;\n}\n.text-amber-4 {\n  color: #ffd54f !important;\n}\n.text-amber-5 {\n  color: #ffca28 !important;\n}\n.text-amber-6 {\n  color: #ffc107 !important;\n}\n.text-amber-7 {\n  color: #ffb300 !important;\n}\n.text-amber-8 {\n  color: #ffa000 !important;\n}\n.text-amber-9 {\n  color: #ff8f00 !important;\n}\n.text-amber-10 {\n  color: #ff6f00 !important;\n}\n.text-amber-11 {\n  color: #ffe57f !important;\n}\n.text-amber-12 {\n  color: #ffd740 !important;\n}\n.text-amber-13 {\n  color: #ffc400 !important;\n}\n.text-amber-14 {\n  color: #ffab00 !important;\n}\n.text-orange {\n  color: #ff9800 !important;\n}\n.text-orange-1 {\n  color: #fff3e0 !important;\n}\n.text-orange-2 {\n  color: #ffe0b2 !important;\n}\n.text-orange-3 {\n  color: #ffcc80 !important;\n}\n.text-orange-4 {\n  color: #ffb74d !important;\n}\n.text-orange-5 {\n  color: #ffa726 !important;\n}\n.text-orange-6 {\n  color: #ff9800 !important;\n}\n.text-orange-7 {\n  color: #fb8c00 !important;\n}\n.text-orange-8 {\n  color: #f57c00 !important;\n}\n.text-orange-9 {\n  color: #ef6c00 !important;\n}\n.text-orange-10 {\n  color: #e65100 !important;\n}\n.text-orange-11 {\n  color: #ffd180 !important;\n}\n.text-orange-12 {\n  color: #ffab40 !important;\n}\n.text-orange-13 {\n  color: #ff9100 !important;\n}\n.text-orange-14 {\n  color: #ff6d00 !important;\n}\n.text-deep-orange {\n  color: #ff5722 !important;\n}\n.text-deep-orange-1 {\n  color: #fbe9e7 !important;\n}\n.text-deep-orange-2 {\n  color: #ffccbc !important;\n}\n.text-deep-orange-3 {\n  color: #ffab91 !important;\n}\n.text-deep-orange-4 {\n  color: #ff8a65 !important;\n}\n.text-deep-orange-5 {\n  color: #ff7043 !important;\n}\n.text-deep-orange-6 {\n  color: #ff5722 !important;\n}\n.text-deep-orange-7 {\n  color: #f4511e !important;\n}\n.text-deep-orange-8 {\n  color: #e64a19 !important;\n}\n.text-deep-orange-9 {\n  color: #d84315 !important;\n}\n.text-deep-orange-10 {\n  color: #bf360c !important;\n}\n.text-deep-orange-11 {\n  color: #ff9e80 !important;\n}\n.text-deep-orange-12 {\n  color: #ff6e40 !important;\n}\n.text-deep-orange-13 {\n  color: #ff3d00 !important;\n}\n.text-deep-orange-14 {\n  color: #dd2c00 !important;\n}\n.text-brown {\n  color: #795548 !important;\n}\n.text-brown-1 {\n  color: #efebe9 !important;\n}\n.text-brown-2 {\n  color: #d7ccc8 !important;\n}\n.text-brown-3 {\n  color: #bcaaa4 !important;\n}\n.text-brown-4 {\n  color: #a1887f !important;\n}\n.text-brown-5 {\n  color: #8d6e63 !important;\n}\n.text-brown-6 {\n  color: #795548 !important;\n}\n.text-brown-7 {\n  color: #6d4c41 !important;\n}\n.text-brown-8 {\n  color: #5d4037 !important;\n}\n.text-brown-9 {\n  color: #4e342e !important;\n}\n.text-brown-10 {\n  color: #3e2723 !important;\n}\n.text-brown-11 {\n  color: #d7ccc8 !important;\n}\n.text-brown-12 {\n  color: #bcaaa4 !important;\n}\n.text-brown-13 {\n  color: #8d6e63 !important;\n}\n.text-brown-14 {\n  color: #5d4037 !important;\n}\n.text-grey {\n  color: #9e9e9e !important;\n}\n.text-grey-1 {\n  color: #fafafa !important;\n}\n.text-grey-2 {\n  color: #f5f5f5 !important;\n}\n.text-grey-3 {\n  color: #eee !important;\n}\n.text-grey-4 {\n  color: #e0e0e0 !important;\n}\n.text-grey-5 {\n  color: #bdbdbd !important;\n}\n.text-grey-6 {\n  color: #9e9e9e !important;\n}\n.text-grey-7 {\n  color: #757575 !important;\n}\n.text-grey-8 {\n  color: #616161 !important;\n}\n.text-grey-9 {\n  color: #424242 !important;\n}\n.text-grey-10 {\n  color: #212121 !important;\n}\n.text-grey-11 {\n  color: #f5f5f5 !important;\n}\n.text-grey-12 {\n  color: #eee !important;\n}\n.text-grey-13 {\n  color: #bdbdbd !important;\n}\n.text-grey-14 {\n  color: #616161 !important;\n}\n.text-blue-grey {\n  color: #607d8b !important;\n}\n.text-blue-grey-1 {\n  color: #eceff1 !important;\n}\n.text-blue-grey-2 {\n  color: #cfd8dc !important;\n}\n.text-blue-grey-3 {\n  color: #b0bec5 !important;\n}\n.text-blue-grey-4 {\n  color: #90a4ae !important;\n}\n.text-blue-grey-5 {\n  color: #78909c !important;\n}\n.text-blue-grey-6 {\n  color: #607d8b !important;\n}\n.text-blue-grey-7 {\n  color: #546e7a !important;\n}\n.text-blue-grey-8 {\n  color: #455a64 !important;\n}\n.text-blue-grey-9 {\n  color: #37474f !important;\n}\n.text-blue-grey-10 {\n  color: #263238 !important;\n}\n.text-blue-grey-11 {\n  color: #cfd8dc !important;\n}\n.text-blue-grey-12 {\n  color: #b0bec5 !important;\n}\n.text-blue-grey-13 {\n  color: #78909c !important;\n}\n.text-blue-grey-14 {\n  color: #455a64 !important;\n}\n.bg-red {\n  background: #f44336 !important;\n}\n.bg-red-1 {\n  background: #ffebee !important;\n}\n.bg-red-2 {\n  background: #ffcdd2 !important;\n}\n.bg-red-3 {\n  background: #ef9a9a !important;\n}\n.bg-red-4 {\n  background: #e57373 !important;\n}\n.bg-red-5 {\n  background: #ef5350 !important;\n}\n.bg-red-6 {\n  background: #f44336 !important;\n}\n.bg-red-7 {\n  background: #e53935 !important;\n}\n.bg-red-8 {\n  background: #d32f2f !important;\n}\n.bg-red-9 {\n  background: #c62828 !important;\n}\n.bg-red-10 {\n  background: #b71c1c !important;\n}\n.bg-red-11 {\n  background: #ff8a80 !important;\n}\n.bg-red-12 {\n  background: #ff5252 !important;\n}\n.bg-red-13 {\n  background: #ff1744 !important;\n}\n.bg-red-14 {\n  background: #d50000 !important;\n}\n.bg-pink {\n  background: #e91e63 !important;\n}\n.bg-pink-1 {\n  background: #fce4ec !important;\n}\n.bg-pink-2 {\n  background: #f8bbd0 !important;\n}\n.bg-pink-3 {\n  background: #f48fb1 !important;\n}\n.bg-pink-4 {\n  background: #f06292 !important;\n}\n.bg-pink-5 {\n  background: #ec407a !important;\n}\n.bg-pink-6 {\n  background: #e91e63 !important;\n}\n.bg-pink-7 {\n  background: #d81b60 !important;\n}\n.bg-pink-8 {\n  background: #c2185b !important;\n}\n.bg-pink-9 {\n  background: #ad1457 !important;\n}\n.bg-pink-10 {\n  background: #880e4f !important;\n}\n.bg-pink-11 {\n  background: #ff80ab !important;\n}\n.bg-pink-12 {\n  background: #ff4081 !important;\n}\n.bg-pink-13 {\n  background: #f50057 !important;\n}\n.bg-pink-14 {\n  background: #c51162 !important;\n}\n.bg-purple {\n  background: #9c27b0 !important;\n}\n.bg-purple-1 {\n  background: #f3e5f5 !important;\n}\n.bg-purple-2 {\n  background: #e1bee7 !important;\n}\n.bg-purple-3 {\n  background: #ce93d8 !important;\n}\n.bg-purple-4 {\n  background: #ba68c8 !important;\n}\n.bg-purple-5 {\n  background: #ab47bc !important;\n}\n.bg-purple-6 {\n  background: #9c27b0 !important;\n}\n.bg-purple-7 {\n  background: #8e24aa !important;\n}\n.bg-purple-8 {\n  background: #7b1fa2 !important;\n}\n.bg-purple-9 {\n  background: #6a1b9a !important;\n}\n.bg-purple-10 {\n  background: #4a148c !important;\n}\n.bg-purple-11 {\n  background: #ea80fc !important;\n}\n.bg-purple-12 {\n  background: #e040fb !important;\n}\n.bg-purple-13 {\n  background: #d500f9 !important;\n}\n.bg-purple-14 {\n  background: #a0f !important;\n}\n.bg-deep-purple {\n  background: #673ab7 !important;\n}\n.bg-deep-purple-1 {\n  background: #ede7f6 !important;\n}\n.bg-deep-purple-2 {\n  background: #d1c4e9 !important;\n}\n.bg-deep-purple-3 {\n  background: #b39ddb !important;\n}\n.bg-deep-purple-4 {\n  background: #9575cd !important;\n}\n.bg-deep-purple-5 {\n  background: #7e57c2 !important;\n}\n.bg-deep-purple-6 {\n  background: #673ab7 !important;\n}\n.bg-deep-purple-7 {\n  background: #5e35b1 !important;\n}\n.bg-deep-purple-8 {\n  background: #512da8 !important;\n}\n.bg-deep-purple-9 {\n  background: #4527a0 !important;\n}\n.bg-deep-purple-10 {\n  background: #311b92 !important;\n}\n.bg-deep-purple-11 {\n  background: #b388ff !important;\n}\n.bg-deep-purple-12 {\n  background: #7c4dff !important;\n}\n.bg-deep-purple-13 {\n  background: #651fff !important;\n}\n.bg-deep-purple-14 {\n  background: #6200ea !important;\n}\n.bg-indigo {\n  background: #3f51b5 !important;\n}\n.bg-indigo-1 {\n  background: #e8eaf6 !important;\n}\n.bg-indigo-2 {\n  background: #c5cae9 !important;\n}\n.bg-indigo-3 {\n  background: #9fa8da !important;\n}\n.bg-indigo-4 {\n  background: #7986cb !important;\n}\n.bg-indigo-5 {\n  background: #5c6bc0 !important;\n}\n.bg-indigo-6 {\n  background: #3f51b5 !important;\n}\n.bg-indigo-7 {\n  background: #3949ab !important;\n}\n.bg-indigo-8 {\n  background: #303f9f !important;\n}\n.bg-indigo-9 {\n  background: #283593 !important;\n}\n.bg-indigo-10 {\n  background: #1a237e !important;\n}\n.bg-indigo-11 {\n  background: #8c9eff !important;\n}\n.bg-indigo-12 {\n  background: #536dfe !important;\n}\n.bg-indigo-13 {\n  background: #3d5afe !important;\n}\n.bg-indigo-14 {\n  background: #304ffe !important;\n}\n.bg-blue {\n  background: #2196f3 !important;\n}\n.bg-blue-1 {\n  background: #e3f2fd !important;\n}\n.bg-blue-2 {\n  background: #bbdefb !important;\n}\n.bg-blue-3 {\n  background: #90caf9 !important;\n}\n.bg-blue-4 {\n  background: #64b5f6 !important;\n}\n.bg-blue-5 {\n  background: #42a5f5 !important;\n}\n.bg-blue-6 {\n  background: #2196f3 !important;\n}\n.bg-blue-7 {\n  background: #1e88e5 !important;\n}\n.bg-blue-8 {\n  background: #1976d2 !important;\n}\n.bg-blue-9 {\n  background: #1565c0 !important;\n}\n.bg-blue-10 {\n  background: #0d47a1 !important;\n}\n.bg-blue-11 {\n  background: #82b1ff !important;\n}\n.bg-blue-12 {\n  background: #448aff !important;\n}\n.bg-blue-13 {\n  background: #2979ff !important;\n}\n.bg-blue-14 {\n  background: #2962ff !important;\n}\n.bg-light-blue {\n  background: #03a9f4 !important;\n}\n.bg-light-blue-1 {\n  background: #e1f5fe !important;\n}\n.bg-light-blue-2 {\n  background: #b3e5fc !important;\n}\n.bg-light-blue-3 {\n  background: #81d4fa !important;\n}\n.bg-light-blue-4 {\n  background: #4fc3f7 !important;\n}\n.bg-light-blue-5 {\n  background: #29b6f6 !important;\n}\n.bg-light-blue-6 {\n  background: #03a9f4 !important;\n}\n.bg-light-blue-7 {\n  background: #039be5 !important;\n}\n.bg-light-blue-8 {\n  background: #0288d1 !important;\n}\n.bg-light-blue-9 {\n  background: #0277bd !important;\n}\n.bg-light-blue-10 {\n  background: #01579b !important;\n}\n.bg-light-blue-11 {\n  background: #80d8ff !important;\n}\n.bg-light-blue-12 {\n  background: #40c4ff !important;\n}\n.bg-light-blue-13 {\n  background: #00b0ff !important;\n}\n.bg-light-blue-14 {\n  background: #0091ea !important;\n}\n.bg-cyan {\n  background: #00bcd4 !important;\n}\n.bg-cyan-1 {\n  background: #e0f7fa !important;\n}\n.bg-cyan-2 {\n  background: #b2ebf2 !important;\n}\n.bg-cyan-3 {\n  background: #80deea !important;\n}\n.bg-cyan-4 {\n  background: #4dd0e1 !important;\n}\n.bg-cyan-5 {\n  background: #26c6da !important;\n}\n.bg-cyan-6 {\n  background: #00bcd4 !important;\n}\n.bg-cyan-7 {\n  background: #00acc1 !important;\n}\n.bg-cyan-8 {\n  background: #0097a7 !important;\n}\n.bg-cyan-9 {\n  background: #00838f !important;\n}\n.bg-cyan-10 {\n  background: #006064 !important;\n}\n.bg-cyan-11 {\n  background: #84ffff !important;\n}\n.bg-cyan-12 {\n  background: #18ffff !important;\n}\n.bg-cyan-13 {\n  background: #00e5ff !important;\n}\n.bg-cyan-14 {\n  background: #00b8d4 !important;\n}\n.bg-teal {\n  background: #009688 !important;\n}\n.bg-teal-1 {\n  background: #e0f2f1 !important;\n}\n.bg-teal-2 {\n  background: #b2dfdb !important;\n}\n.bg-teal-3 {\n  background: #80cbc4 !important;\n}\n.bg-teal-4 {\n  background: #4db6ac !important;\n}\n.bg-teal-5 {\n  background: #26a69a !important;\n}\n.bg-teal-6 {\n  background: #009688 !important;\n}\n.bg-teal-7 {\n  background: #00897b !important;\n}\n.bg-teal-8 {\n  background: #00796b !important;\n}\n.bg-teal-9 {\n  background: #00695c !important;\n}\n.bg-teal-10 {\n  background: #004d40 !important;\n}\n.bg-teal-11 {\n  background: #a7ffeb !important;\n}\n.bg-teal-12 {\n  background: #64ffda !important;\n}\n.bg-teal-13 {\n  background: #1de9b6 !important;\n}\n.bg-teal-14 {\n  background: #00bfa5 !important;\n}\n.bg-green {\n  background: #4caf50 !important;\n}\n.bg-green-1 {\n  background: #e8f5e9 !important;\n}\n.bg-green-2 {\n  background: #c8e6c9 !important;\n}\n.bg-green-3 {\n  background: #a5d6a7 !important;\n}\n.bg-green-4 {\n  background: #81c784 !important;\n}\n.bg-green-5 {\n  background: #66bb6a !important;\n}\n.bg-green-6 {\n  background: #4caf50 !important;\n}\n.bg-green-7 {\n  background: #43a047 !important;\n}\n.bg-green-8 {\n  background: #388e3c !important;\n}\n.bg-green-9 {\n  background: #2e7d32 !important;\n}\n.bg-green-10 {\n  background: #1b5e20 !important;\n}\n.bg-green-11 {\n  background: #b9f6ca !important;\n}\n.bg-green-12 {\n  background: #69f0ae !important;\n}\n.bg-green-13 {\n  background: #00e676 !important;\n}\n.bg-green-14 {\n  background: #00c853 !important;\n}\n.bg-light-green {\n  background: #8bc34a !important;\n}\n.bg-light-green-1 {\n  background: #f1f8e9 !important;\n}\n.bg-light-green-2 {\n  background: #dcedc8 !important;\n}\n.bg-light-green-3 {\n  background: #c5e1a5 !important;\n}\n.bg-light-green-4 {\n  background: #aed581 !important;\n}\n.bg-light-green-5 {\n  background: #9ccc65 !important;\n}\n.bg-light-green-6 {\n  background: #8bc34a !important;\n}\n.bg-light-green-7 {\n  background: #7cb342 !important;\n}\n.bg-light-green-8 {\n  background: #689f38 !important;\n}\n.bg-light-green-9 {\n  background: #558b2f !important;\n}\n.bg-light-green-10 {\n  background: #33691e !important;\n}\n.bg-light-green-11 {\n  background: #ccff90 !important;\n}\n.bg-light-green-12 {\n  background: #b2ff59 !important;\n}\n.bg-light-green-13 {\n  background: #76ff03 !important;\n}\n.bg-light-green-14 {\n  background: #64dd17 !important;\n}\n.bg-lime {\n  background: #cddc39 !important;\n}\n.bg-lime-1 {\n  background: #f9fbe7 !important;\n}\n.bg-lime-2 {\n  background: #f0f4c3 !important;\n}\n.bg-lime-3 {\n  background: #e6ee9c !important;\n}\n.bg-lime-4 {\n  background: #dce775 !important;\n}\n.bg-lime-5 {\n  background: #d4e157 !important;\n}\n.bg-lime-6 {\n  background: #cddc39 !important;\n}\n.bg-lime-7 {\n  background: #c0ca33 !important;\n}\n.bg-lime-8 {\n  background: #afb42b !important;\n}\n.bg-lime-9 {\n  background: #9e9d24 !important;\n}\n.bg-lime-10 {\n  background: #827717 !important;\n}\n.bg-lime-11 {\n  background: #f4ff81 !important;\n}\n.bg-lime-12 {\n  background: #eeff41 !important;\n}\n.bg-lime-13 {\n  background: #c6ff00 !important;\n}\n.bg-lime-14 {\n  background: #aeea00 !important;\n}\n.bg-yellow {\n  background: #ffeb3b !important;\n}\n.bg-yellow-1 {\n  background: #fffde7 !important;\n}\n.bg-yellow-2 {\n  background: #fff9c4 !important;\n}\n.bg-yellow-3 {\n  background: #fff59d !important;\n}\n.bg-yellow-4 {\n  background: #fff176 !important;\n}\n.bg-yellow-5 {\n  background: #ffee58 !important;\n}\n.bg-yellow-6 {\n  background: #ffeb3b !important;\n}\n.bg-yellow-7 {\n  background: #fdd835 !important;\n}\n.bg-yellow-8 {\n  background: #fbc02d !important;\n}\n.bg-yellow-9 {\n  background: #f9a825 !important;\n}\n.bg-yellow-10 {\n  background: #f57f17 !important;\n}\n.bg-yellow-11 {\n  background: #ffff8d !important;\n}\n.bg-yellow-12 {\n  background: #ff0 !important;\n}\n.bg-yellow-13 {\n  background: #ffea00 !important;\n}\n.bg-yellow-14 {\n  background: #ffd600 !important;\n}\n.bg-amber {\n  background: #ffc107 !important;\n}\n.bg-amber-1 {\n  background: #fff8e1 !important;\n}\n.bg-amber-2 {\n  background: #ffecb3 !important;\n}\n.bg-amber-3 {\n  background: #ffe082 !important;\n}\n.bg-amber-4 {\n  background: #ffd54f !important;\n}\n.bg-amber-5 {\n  background: #ffca28 !important;\n}\n.bg-amber-6 {\n  background: #ffc107 !important;\n}\n.bg-amber-7 {\n  background: #ffb300 !important;\n}\n.bg-amber-8 {\n  background: #ffa000 !important;\n}\n.bg-amber-9 {\n  background: #ff8f00 !important;\n}\n.bg-amber-10 {\n  background: #ff6f00 !important;\n}\n.bg-amber-11 {\n  background: #ffe57f !important;\n}\n.bg-amber-12 {\n  background: #ffd740 !important;\n}\n.bg-amber-13 {\n  background: #ffc400 !important;\n}\n.bg-amber-14 {\n  background: #ffab00 !important;\n}\n.bg-orange {\n  background: #ff9800 !important;\n}\n.bg-orange-1 {\n  background: #fff3e0 !important;\n}\n.bg-orange-2 {\n  background: #ffe0b2 !important;\n}\n.bg-orange-3 {\n  background: #ffcc80 !important;\n}\n.bg-orange-4 {\n  background: #ffb74d !important;\n}\n.bg-orange-5 {\n  background: #ffa726 !important;\n}\n.bg-orange-6 {\n  background: #ff9800 !important;\n}\n.bg-orange-7 {\n  background: #fb8c00 !important;\n}\n.bg-orange-8 {\n  background: #f57c00 !important;\n}\n.bg-orange-9 {\n  background: #ef6c00 !important;\n}\n.bg-orange-10 {\n  background: #e65100 !important;\n}\n.bg-orange-11 {\n  background: #ffd180 !important;\n}\n.bg-orange-12 {\n  background: #ffab40 !important;\n}\n.bg-orange-13 {\n  background: #ff9100 !important;\n}\n.bg-orange-14 {\n  background: #ff6d00 !important;\n}\n.bg-deep-orange {\n  background: #ff5722 !important;\n}\n.bg-deep-orange-1 {\n  background: #fbe9e7 !important;\n}\n.bg-deep-orange-2 {\n  background: #ffccbc !important;\n}\n.bg-deep-orange-3 {\n  background: #ffab91 !important;\n}\n.bg-deep-orange-4 {\n  background: #ff8a65 !important;\n}\n.bg-deep-orange-5 {\n  background: #ff7043 !important;\n}\n.bg-deep-orange-6 {\n  background: #ff5722 !important;\n}\n.bg-deep-orange-7 {\n  background: #f4511e !important;\n}\n.bg-deep-orange-8 {\n  background: #e64a19 !important;\n}\n.bg-deep-orange-9 {\n  background: #d84315 !important;\n}\n.bg-deep-orange-10 {\n  background: #bf360c !important;\n}\n.bg-deep-orange-11 {\n  background: #ff9e80 !important;\n}\n.bg-deep-orange-12 {\n  background: #ff6e40 !important;\n}\n.bg-deep-orange-13 {\n  background: #ff3d00 !important;\n}\n.bg-deep-orange-14 {\n  background: #dd2c00 !important;\n}\n.bg-brown {\n  background: #795548 !important;\n}\n.bg-brown-1 {\n  background: #efebe9 !important;\n}\n.bg-brown-2 {\n  background: #d7ccc8 !important;\n}\n.bg-brown-3 {\n  background: #bcaaa4 !important;\n}\n.bg-brown-4 {\n  background: #a1887f !important;\n}\n.bg-brown-5 {\n  background: #8d6e63 !important;\n}\n.bg-brown-6 {\n  background: #795548 !important;\n}\n.bg-brown-7 {\n  background: #6d4c41 !important;\n}\n.bg-brown-8 {\n  background: #5d4037 !important;\n}\n.bg-brown-9 {\n  background: #4e342e !important;\n}\n.bg-brown-10 {\n  background: #3e2723 !important;\n}\n.bg-brown-11 {\n  background: #d7ccc8 !important;\n}\n.bg-brown-12 {\n  background: #bcaaa4 !important;\n}\n.bg-brown-13 {\n  background: #8d6e63 !important;\n}\n.bg-brown-14 {\n  background: #5d4037 !important;\n}\n.bg-grey {\n  background: #9e9e9e !important;\n}\n.bg-grey-1 {\n  background: #fafafa !important;\n}\n.bg-grey-2 {\n  background: #f5f5f5 !important;\n}\n.bg-grey-3 {\n  background: #eee !important;\n}\n.bg-grey-4 {\n  background: #e0e0e0 !important;\n}\n.bg-grey-5 {\n  background: #bdbdbd !important;\n}\n.bg-grey-6 {\n  background: #9e9e9e !important;\n}\n.bg-grey-7 {\n  background: #757575 !important;\n}\n.bg-grey-8 {\n  background: #616161 !important;\n}\n.bg-grey-9 {\n  background: #424242 !important;\n}\n.bg-grey-10 {\n  background: #212121 !important;\n}\n.bg-grey-11 {\n  background: #f5f5f5 !important;\n}\n.bg-grey-12 {\n  background: #eee !important;\n}\n.bg-grey-13 {\n  background: #bdbdbd !important;\n}\n.bg-grey-14 {\n  background: #616161 !important;\n}\n.bg-blue-grey {\n  background: #607d8b !important;\n}\n.bg-blue-grey-1 {\n  background: #eceff1 !important;\n}\n.bg-blue-grey-2 {\n  background: #cfd8dc !important;\n}\n.bg-blue-grey-3 {\n  background: #b0bec5 !important;\n}\n.bg-blue-grey-4 {\n  background: #90a4ae !important;\n}\n.bg-blue-grey-5 {\n  background: #78909c !important;\n}\n.bg-blue-grey-6 {\n  background: #607d8b !important;\n}\n.bg-blue-grey-7 {\n  background: #546e7a !important;\n}\n.bg-blue-grey-8 {\n  background: #455a64 !important;\n}\n.bg-blue-grey-9 {\n  background: #37474f !important;\n}\n.bg-blue-grey-10 {\n  background: #263238 !important;\n}\n.bg-blue-grey-11 {\n  background: #cfd8dc !important;\n}\n.bg-blue-grey-12 {\n  background: #b0bec5 !important;\n}\n.bg-blue-grey-13 {\n  background: #78909c !important;\n}\n.bg-blue-grey-14 {\n  background: #455a64 !important;\n}\n.shadow-transition {\n  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n.shadow-1 {\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);\n}\n.shadow-up-1 {\n  box-shadow: 0 -1px 3px rgba(0,0,0,0.2), 0 -1px 1px rgba(0,0,0,0.14), 0 -2px 1px -1px rgba(0,0,0,0.12);\n}\n.shadow-2 {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.shadow-up-2 {\n  box-shadow: 0 -1px 5px rgba(0,0,0,0.2), 0 -2px 2px rgba(0,0,0,0.14), 0 -3px 1px -2px rgba(0,0,0,0.12);\n}\n.shadow-3 {\n  box-shadow: 0 1px 8px rgba(0,0,0,0.2), 0 3px 4px rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12);\n}\n.shadow-up-3 {\n  box-shadow: 0 -1px 8px rgba(0,0,0,0.2), 0 -3px 4px rgba(0,0,0,0.14), 0 -3px 3px -2px rgba(0,0,0,0.12);\n}\n.shadow-4 {\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n}\n.shadow-up-4 {\n  box-shadow: 0 -2px 4px -1px rgba(0,0,0,0.2), 0 -4px 5px rgba(0,0,0,0.14), 0 -1px 10px rgba(0,0,0,0.12);\n}\n.shadow-5 {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 5px 8px rgba(0,0,0,0.14), 0 1px 14px rgba(0,0,0,0.12);\n}\n.shadow-up-5 {\n  box-shadow: 0 -3px 5px -1px rgba(0,0,0,0.2), 0 -5px 8px rgba(0,0,0,0.14), 0 -1px 14px rgba(0,0,0,0.12);\n}\n.shadow-6 {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12);\n}\n.shadow-up-6 {\n  box-shadow: 0 -3px 5px -1px rgba(0,0,0,0.2), 0 -6px 10px rgba(0,0,0,0.14), 0 -1px 18px rgba(0,0,0,0.12);\n}\n.shadow-7 {\n  box-shadow: 0 4px 5px -2px rgba(0,0,0,0.2), 0 7px 10px 1px rgba(0,0,0,0.14), 0 2px 16px 1px rgba(0,0,0,0.12);\n}\n.shadow-up-7 {\n  box-shadow: 0 -4px 5px -2px rgba(0,0,0,0.2), 0 -7px 10px 1px rgba(0,0,0,0.14), 0 -2px 16px 1px rgba(0,0,0,0.12);\n}\n.shadow-8 {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);\n}\n.shadow-up-8 {\n  box-shadow: 0 -5px 5px -3px rgba(0,0,0,0.2), 0 -8px 10px 1px rgba(0,0,0,0.14), 0 -3px 14px 2px rgba(0,0,0,0.12);\n}\n.shadow-9 {\n  box-shadow: 0 5px 6px -3px rgba(0,0,0,0.2), 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12);\n}\n.shadow-up-9 {\n  box-shadow: 0 -5px 6px -3px rgba(0,0,0,0.2), 0 -9px 12px 1px rgba(0,0,0,0.14), 0 -3px 16px 2px rgba(0,0,0,0.12);\n}\n.shadow-10 {\n  box-shadow: 0 6px 6px -3px rgba(0,0,0,0.2), 0 10px 14px 1px rgba(0,0,0,0.14), 0 4px 18px 3px rgba(0,0,0,0.12);\n}\n.shadow-up-10 {\n  box-shadow: 0 -6px 6px -3px rgba(0,0,0,0.2), 0 -10px 14px 1px rgba(0,0,0,0.14), 0 -4px 18px 3px rgba(0,0,0,0.12);\n}\n.shadow-11 {\n  box-shadow: 0 6px 7px -4px rgba(0,0,0,0.2), 0 11px 15px 1px rgba(0,0,0,0.14), 0 4px 20px 3px rgba(0,0,0,0.12);\n}\n.shadow-up-11 {\n  box-shadow: 0 -6px 7px -4px rgba(0,0,0,0.2), 0 -11px 15px 1px rgba(0,0,0,0.14), 0 -4px 20px 3px rgba(0,0,0,0.12);\n}\n.shadow-12 {\n  box-shadow: 0 7px 8px -4px rgba(0,0,0,0.2), 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12);\n}\n.shadow-up-12 {\n  box-shadow: 0 -7px 8px -4px rgba(0,0,0,0.2), 0 -12px 17px 2px rgba(0,0,0,0.14), 0 -5px 22px 4px rgba(0,0,0,0.12);\n}\n.shadow-13 {\n  box-shadow: 0 7px 8px -4px rgba(0,0,0,0.2), 0 13px 19px 2px rgba(0,0,0,0.14), 0 5px 24px 4px rgba(0,0,0,0.12);\n}\n.shadow-up-13 {\n  box-shadow: 0 -7px 8px -4px rgba(0,0,0,0.2), 0 -13px 19px 2px rgba(0,0,0,0.14), 0 -5px 24px 4px rgba(0,0,0,0.12);\n}\n.shadow-14 {\n  box-shadow: 0 7px 9px -4px rgba(0,0,0,0.2), 0 14px 21px 2px rgba(0,0,0,0.14), 0 5px 26px 4px rgba(0,0,0,0.12);\n}\n.shadow-up-14 {\n  box-shadow: 0 -7px 9px -4px rgba(0,0,0,0.2), 0 -14px 21px 2px rgba(0,0,0,0.14), 0 -5px 26px 4px rgba(0,0,0,0.12);\n}\n.shadow-15 {\n  box-shadow: 0 8px 9px -5px rgba(0,0,0,0.2), 0 15px 22px 2px rgba(0,0,0,0.14), 0 6px 28px 5px rgba(0,0,0,0.12);\n}\n.shadow-up-15 {\n  box-shadow: 0 -8px 9px -5px rgba(0,0,0,0.2), 0 -15px 22px 2px rgba(0,0,0,0.14), 0 -6px 28px 5px rgba(0,0,0,0.12);\n}\n.shadow-16 {\n  box-shadow: 0 8px 10px -5px rgba(0,0,0,0.2), 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12);\n}\n.shadow-up-16 {\n  box-shadow: 0 -8px 10px -5px rgba(0,0,0,0.2), 0 -16px 24px 2px rgba(0,0,0,0.14), 0 -6px 30px 5px rgba(0,0,0,0.12);\n}\n.shadow-17 {\n  box-shadow: 0 8px 11px -5px rgba(0,0,0,0.2), 0 17px 26px 2px rgba(0,0,0,0.14), 0 6px 32px 5px rgba(0,0,0,0.12);\n}\n.shadow-up-17 {\n  box-shadow: 0 -8px 11px -5px rgba(0,0,0,0.2), 0 -17px 26px 2px rgba(0,0,0,0.14), 0 -6px 32px 5px rgba(0,0,0,0.12);\n}\n.shadow-18 {\n  box-shadow: 0 9px 11px -5px rgba(0,0,0,0.2), 0 18px 28px 2px rgba(0,0,0,0.14), 0 7px 34px 6px rgba(0,0,0,0.12);\n}\n.shadow-up-18 {\n  box-shadow: 0 -9px 11px -5px rgba(0,0,0,0.2), 0 -18px 28px 2px rgba(0,0,0,0.14), 0 -7px 34px 6px rgba(0,0,0,0.12);\n}\n.shadow-19 {\n  box-shadow: 0 9px 12px -6px rgba(0,0,0,0.2), 0 19px 29px 2px rgba(0,0,0,0.14), 0 7px 36px 6px rgba(0,0,0,0.12);\n}\n.shadow-up-19 {\n  box-shadow: 0 -9px 12px -6px rgba(0,0,0,0.2), 0 -19px 29px 2px rgba(0,0,0,0.14), 0 -7px 36px 6px rgba(0,0,0,0.12);\n}\n.shadow-20 {\n  box-shadow: 0 10px 13px -6px rgba(0,0,0,0.2), 0 20px 31px 3px rgba(0,0,0,0.14), 0 8px 38px 7px rgba(0,0,0,0.12);\n}\n.shadow-up-20 {\n  box-shadow: 0 -10px 13px -6px rgba(0,0,0,0.2), 0 -20px 31px 3px rgba(0,0,0,0.14), 0 -8px 38px 7px rgba(0,0,0,0.12);\n}\n.shadow-21 {\n  box-shadow: 0 10px 13px -6px rgba(0,0,0,0.2), 0 21px 33px 3px rgba(0,0,0,0.14), 0 8px 40px 7px rgba(0,0,0,0.12);\n}\n.shadow-up-21 {\n  box-shadow: 0 -10px 13px -6px rgba(0,0,0,0.2), 0 -21px 33px 3px rgba(0,0,0,0.14), 0 -8px 40px 7px rgba(0,0,0,0.12);\n}\n.shadow-22 {\n  box-shadow: 0 10px 14px -6px rgba(0,0,0,0.2), 0 22px 35px 3px rgba(0,0,0,0.14), 0 8px 42px 7px rgba(0,0,0,0.12);\n}\n.shadow-up-22 {\n  box-shadow: 0 -10px 14px -6px rgba(0,0,0,0.2), 0 -22px 35px 3px rgba(0,0,0,0.14), 0 -8px 42px 7px rgba(0,0,0,0.12);\n}\n.shadow-23 {\n  box-shadow: 0 11px 14px -7px rgba(0,0,0,0.2), 0 23px 36px 3px rgba(0,0,0,0.14), 0 9px 44px 8px rgba(0,0,0,0.12);\n}\n.shadow-up-23 {\n  box-shadow: 0 -11px 14px -7px rgba(0,0,0,0.2), 0 -23px 36px 3px rgba(0,0,0,0.14), 0 -9px 44px 8px rgba(0,0,0,0.12);\n}\n.shadow-24 {\n  box-shadow: 0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12);\n}\n.shadow-up-24 {\n  box-shadow: 0 -11px 15px -7px rgba(0,0,0,0.2), 0 -24px 38px 3px rgba(0,0,0,0.14), 0 -9px 46px 8px rgba(0,0,0,0.12);\n}\n.no-shadow,\n.shadow-0 {\n  box-shadow: none !important;\n}\n.inset-shadow {\n  box-shadow: 0 7px 9px -7px rgba(0,0,0,0.7) inset !important;\n}\n.z-marginals {\n  z-index: 2000;\n}\n.z-notify {\n  z-index: 9500;\n}\n.z-fullscreen {\n  z-index: 6000;\n}\n.z-inherit {\n  z-index: inherit !important;\n}\n.row,\n.column,\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n.row.inline,\n.column.inline,\n.flex.inline {\n  display: inline-flex;\n}\n.row.reverse {\n  flex-direction: row-reverse;\n}\n.column {\n  flex-direction: column;\n}\n.column.reverse {\n  flex-direction: column-reverse;\n}\n.wrap {\n  flex-wrap: wrap;\n}\n.no-wrap {\n  flex-wrap: nowrap;\n}\n.reverse-wrap {\n  flex-wrap: wrap-reverse;\n}\n.order-first {\n  order: -10000;\n}\n.order-last {\n  order: 10000;\n}\n.order-none {\n  order: 0;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center,\n.flex-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-around {\n  justify-content: space-around;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center,\n.flex-center {\n  align-items: center;\n}\n.items-baseline {\n  align-items: baseline;\n}\n.items-stretch {\n  align-items: stretch;\n}\n.content-start {\n  align-content: flex-start;\n}\n.content-end {\n  align-content: flex-end;\n}\n.content-center {\n  align-content: center;\n}\n.content-stretch {\n  align-content: stretch;\n}\n.content-between {\n  align-content: space-between;\n}\n.content-around {\n  align-content: space-around;\n}\n.self-start {\n  align-self: flex-start;\n}\n.self-end {\n  align-self: flex-end;\n}\n.self-center {\n  align-self: center;\n}\n.self-baseline {\n  align-self: baseline;\n}\n.self-stretch {\n  align-self: stretch;\n}\n.gutter-x-none,\n.gutter-none {\n  margin-left: 0;\n}\n.gutter-x-none > div,\n.gutter-none > div {\n  padding-left: 0;\n}\n.gutter-y-none,\n.gutter-none {\n  margin-top: 0;\n}\n.gutter-y-none > div,\n.gutter-none > div {\n  padding-top: 0;\n}\n.gutter-x-xs,\n.gutter-xs {\n  margin-left: -8px;\n}\n.gutter-x-xs > div,\n.gutter-xs > div {\n  padding-left: 8px;\n}\n.gutter-y-xs,\n.gutter-xs {\n  margin-top: -8px;\n}\n.gutter-y-xs > div,\n.gutter-xs > div {\n  padding-top: 8px;\n}\n.gutter-x-sm,\n.gutter-sm {\n  margin-left: -16px;\n}\n.gutter-x-sm > div,\n.gutter-sm > div {\n  padding-left: 16px;\n}\n.gutter-y-sm,\n.gutter-sm {\n  margin-top: -16px;\n}\n.gutter-y-sm > div,\n.gutter-sm > div {\n  padding-top: 16px;\n}\n.gutter-x-md,\n.gutter-md {\n  margin-left: -32px;\n}\n.gutter-x-md > div,\n.gutter-md > div {\n  padding-left: 32px;\n}\n.gutter-y-md,\n.gutter-md {\n  margin-top: -32px;\n}\n.gutter-y-md > div,\n.gutter-md > div {\n  padding-top: 32px;\n}\n.gutter-x-lg,\n.gutter-lg {\n  margin-left: -48px;\n}\n.gutter-x-lg > div,\n.gutter-lg > div {\n  padding-left: 48px;\n}\n.gutter-y-lg,\n.gutter-lg {\n  margin-top: -48px;\n}\n.gutter-y-lg > div,\n.gutter-lg > div {\n  padding-top: 48px;\n}\n.gutter-x-xl,\n.gutter-xl {\n  margin-left: -64px;\n}\n.gutter-x-xl > div,\n.gutter-xl > div {\n  padding-left: 64px;\n}\n.gutter-y-xl,\n.gutter-xl {\n  margin-top: -64px;\n}\n.gutter-y-xl > div,\n.gutter-xl > div {\n  padding-top: 64px;\n}\n@media (min-width: 0) {\n  .row > .col,\n  .row > .col-xs,\n  .row > .col-auto,\n  .row > .col-xs-auto,\n  .row > .col-grow,\n  .row > .col-xs-grow,\n  .row > .col-0,\n  .row > .col-xs-0,\n  .row > .col-1,\n  .row > .col-xs-1,\n  .row > .col-2,\n  .row > .col-xs-2,\n  .row > .col-3,\n  .row > .col-xs-3,\n  .row > .col-4,\n  .row > .col-xs-4,\n  .row > .col-5,\n  .row > .col-xs-5,\n  .row > .col-6,\n  .row > .col-xs-6,\n  .row > .col-7,\n  .row > .col-xs-7,\n  .row > .col-8,\n  .row > .col-xs-8,\n  .row > .col-9,\n  .row > .col-xs-9,\n  .row > .col-10,\n  .row > .col-xs-10,\n  .row > .col-11,\n  .row > .col-xs-11,\n  .row > .col-12,\n  .row > .col-xs-12,\n  .flex > .col,\n  .flex > .col-xs,\n  .flex > .col-auto,\n  .flex > .col-xs-auto,\n  .flex > .col-grow,\n  .flex > .col-xs-grow,\n  .flex > .col-0,\n  .flex > .col-xs-0,\n  .flex > .col-1,\n  .flex > .col-xs-1,\n  .flex > .col-2,\n  .flex > .col-xs-2,\n  .flex > .col-3,\n  .flex > .col-xs-3,\n  .flex > .col-4,\n  .flex > .col-xs-4,\n  .flex > .col-5,\n  .flex > .col-xs-5,\n  .flex > .col-6,\n  .flex > .col-xs-6,\n  .flex > .col-7,\n  .flex > .col-xs-7,\n  .flex > .col-8,\n  .flex > .col-xs-8,\n  .flex > .col-9,\n  .flex > .col-xs-9,\n  .flex > .col-10,\n  .flex > .col-xs-10,\n  .flex > .col-11,\n  .flex > .col-xs-11,\n  .flex > .col-12,\n  .flex > .col-xs-12 {\n    width: auto;\n    min-width: 0;\n    max-width: 100%;\n  }\n  .column > .col,\n  .column > .col-xs,\n  .column > .col-auto,\n  .column > .col-xs-auto,\n  .column > .col-grow,\n  .column > .col-xs-grow,\n  .column > .col-0,\n  .column > .col-xs-0,\n  .column > .col-1,\n  .column > .col-xs-1,\n  .column > .col-2,\n  .column > .col-xs-2,\n  .column > .col-3,\n  .column > .col-xs-3,\n  .column > .col-4,\n  .column > .col-xs-4,\n  .column > .col-5,\n  .column > .col-xs-5,\n  .column > .col-6,\n  .column > .col-xs-6,\n  .column > .col-7,\n  .column > .col-xs-7,\n  .column > .col-8,\n  .column > .col-xs-8,\n  .column > .col-9,\n  .column > .col-xs-9,\n  .column > .col-10,\n  .column > .col-xs-10,\n  .column > .col-11,\n  .column > .col-xs-11,\n  .column > .col-12,\n  .column > .col-xs-12,\n  .flex > .col,\n  .flex > .col-xs,\n  .flex > .col-auto,\n  .flex > .col-xs-auto,\n  .flex > .col-grow,\n  .flex > .col-xs-grow,\n  .flex > .col-0,\n  .flex > .col-xs-0,\n  .flex > .col-1,\n  .flex > .col-xs-1,\n  .flex > .col-2,\n  .flex > .col-xs-2,\n  .flex > .col-3,\n  .flex > .col-xs-3,\n  .flex > .col-4,\n  .flex > .col-xs-4,\n  .flex > .col-5,\n  .flex > .col-xs-5,\n  .flex > .col-6,\n  .flex > .col-xs-6,\n  .flex > .col-7,\n  .flex > .col-xs-7,\n  .flex > .col-8,\n  .flex > .col-xs-8,\n  .flex > .col-9,\n  .flex > .col-xs-9,\n  .flex > .col-10,\n  .flex > .col-xs-10,\n  .flex > .col-11,\n  .flex > .col-xs-11,\n  .flex > .col-12,\n  .flex > .col-xs-12 {\n    height: auto;\n    min-height: 0;\n    max-height: 100%;\n  }\n  .col,\n  .col-xs {\n    flex: 10000 1 0%;\n  }\n  .col-auto,\n  .col-xs-auto,\n  .col-0,\n  .col-xs-0,\n  .col-1,\n  .col-xs-1,\n  .col-2,\n  .col-xs-2,\n  .col-3,\n  .col-xs-3,\n  .col-4,\n  .col-xs-4,\n  .col-5,\n  .col-xs-5,\n  .col-6,\n  .col-xs-6,\n  .col-7,\n  .col-xs-7,\n  .col-8,\n  .col-xs-8,\n  .col-9,\n  .col-xs-9,\n  .col-10,\n  .col-xs-10,\n  .col-11,\n  .col-xs-11,\n  .col-12,\n  .col-xs-12 {\n    flex: 0 0 auto;\n  }\n  .col-grow,\n  .col-xs-grow {\n    flex: 1 0 auto;\n  }\n  .row > .col-0,\n  .row > .col-xs-0 {\n    height: auto;\n    width: 0%;\n  }\n  .row > .offset-0,\n  .row > .offset-xs-0 {\n    margin-left: 0%;\n  }\n  .column > .col-0,\n  .column > .col-xs-0 {\n    height: 0%;\n    width: auto;\n  }\n  .row > .col-1,\n  .row > .col-xs-1 {\n    height: auto;\n    width: 8.3333%;\n  }\n  .row > .offset-1,\n  .row > .offset-xs-1 {\n    margin-left: 8.3333%;\n  }\n  .column > .col-1,\n  .column > .col-xs-1 {\n    height: 8.3333%;\n    width: auto;\n  }\n  .row > .col-2,\n  .row > .col-xs-2 {\n    height: auto;\n    width: 16.6667%;\n  }\n  .row > .offset-2,\n  .row > .offset-xs-2 {\n    margin-left: 16.6667%;\n  }\n  .column > .col-2,\n  .column > .col-xs-2 {\n    height: 16.6667%;\n    width: auto;\n  }\n  .row > .col-3,\n  .row > .col-xs-3 {\n    height: auto;\n    width: 25%;\n  }\n  .row > .offset-3,\n  .row > .offset-xs-3 {\n    margin-left: 25%;\n  }\n  .column > .col-3,\n  .column > .col-xs-3 {\n    height: 25%;\n    width: auto;\n  }\n  .row > .col-4,\n  .row > .col-xs-4 {\n    height: auto;\n    width: 33.3333%;\n  }\n  .row > .offset-4,\n  .row > .offset-xs-4 {\n    margin-left: 33.3333%;\n  }\n  .column > .col-4,\n  .column > .col-xs-4 {\n    height: 33.3333%;\n    width: auto;\n  }\n  .row > .col-5,\n  .row > .col-xs-5 {\n    height: auto;\n    width: 41.6667%;\n  }\n  .row > .offset-5,\n  .row > .offset-xs-5 {\n    margin-left: 41.6667%;\n  }\n  .column > .col-5,\n  .column > .col-xs-5 {\n    height: 41.6667%;\n    width: auto;\n  }\n  .row > .col-6,\n  .row > .col-xs-6 {\n    height: auto;\n    width: 50%;\n  }\n  .row > .offset-6,\n  .row > .offset-xs-6 {\n    margin-left: 50%;\n  }\n  .column > .col-6,\n  .column > .col-xs-6 {\n    height: 50%;\n    width: auto;\n  }\n  .row > .col-7,\n  .row > .col-xs-7 {\n    height: auto;\n    width: 58.3333%;\n  }\n  .row > .offset-7,\n  .row > .offset-xs-7 {\n    margin-left: 58.3333%;\n  }\n  .column > .col-7,\n  .column > .col-xs-7 {\n    height: 58.3333%;\n    width: auto;\n  }\n  .row > .col-8,\n  .row > .col-xs-8 {\n    height: auto;\n    width: 66.6667%;\n  }\n  .row > .offset-8,\n  .row > .offset-xs-8 {\n    margin-left: 66.6667%;\n  }\n  .column > .col-8,\n  .column > .col-xs-8 {\n    height: 66.6667%;\n    width: auto;\n  }\n  .row > .col-9,\n  .row > .col-xs-9 {\n    height: auto;\n    width: 75%;\n  }\n  .row > .offset-9,\n  .row > .offset-xs-9 {\n    margin-left: 75%;\n  }\n  .column > .col-9,\n  .column > .col-xs-9 {\n    height: 75%;\n    width: auto;\n  }\n  .row > .col-10,\n  .row > .col-xs-10 {\n    height: auto;\n    width: 83.3333%;\n  }\n  .row > .offset-10,\n  .row > .offset-xs-10 {\n    margin-left: 83.3333%;\n  }\n  .column > .col-10,\n  .column > .col-xs-10 {\n    height: 83.3333%;\n    width: auto;\n  }\n  .row > .col-11,\n  .row > .col-xs-11 {\n    height: auto;\n    width: 91.6667%;\n  }\n  .row > .offset-11,\n  .row > .offset-xs-11 {\n    margin-left: 91.6667%;\n  }\n  .column > .col-11,\n  .column > .col-xs-11 {\n    height: 91.6667%;\n    width: auto;\n  }\n  .row > .col-12,\n  .row > .col-xs-12 {\n    height: auto;\n    width: 100%;\n  }\n  .row > .offset-12,\n  .row > .offset-xs-12 {\n    margin-left: 100%;\n  }\n  .column > .col-12,\n  .column > .col-xs-12 {\n    height: 100%;\n    width: auto;\n  }\n}\n@media (min-width: 576px) {\n  .row > .col-sm,\n  .row > .col-sm-auto,\n  .row > .col-sm-grow,\n  .row > .col-sm-0,\n  .row > .col-sm-1,\n  .row > .col-sm-2,\n  .row > .col-sm-3,\n  .row > .col-sm-4,\n  .row > .col-sm-5,\n  .row > .col-sm-6,\n  .row > .col-sm-7,\n  .row > .col-sm-8,\n  .row > .col-sm-9,\n  .row > .col-sm-10,\n  .row > .col-sm-11,\n  .row > .col-sm-12,\n  .flex > .col-sm,\n  .flex > .col-sm-auto,\n  .flex > .col-sm-grow,\n  .flex > .col-sm-0,\n  .flex > .col-sm-1,\n  .flex > .col-sm-2,\n  .flex > .col-sm-3,\n  .flex > .col-sm-4,\n  .flex > .col-sm-5,\n  .flex > .col-sm-6,\n  .flex > .col-sm-7,\n  .flex > .col-sm-8,\n  .flex > .col-sm-9,\n  .flex > .col-sm-10,\n  .flex > .col-sm-11,\n  .flex > .col-sm-12 {\n    width: auto;\n    min-width: 0;\n    max-width: 100%;\n  }\n  .column > .col-sm,\n  .column > .col-sm-auto,\n  .column > .col-sm-grow,\n  .column > .col-sm-0,\n  .column > .col-sm-1,\n  .column > .col-sm-2,\n  .column > .col-sm-3,\n  .column > .col-sm-4,\n  .column > .col-sm-5,\n  .column > .col-sm-6,\n  .column > .col-sm-7,\n  .column > .col-sm-8,\n  .column > .col-sm-9,\n  .column > .col-sm-10,\n  .column > .col-sm-11,\n  .column > .col-sm-12,\n  .flex > .col-sm,\n  .flex > .col-sm-auto,\n  .flex > .col-sm-grow,\n  .flex > .col-sm-0,\n  .flex > .col-sm-1,\n  .flex > .col-sm-2,\n  .flex > .col-sm-3,\n  .flex > .col-sm-4,\n  .flex > .col-sm-5,\n  .flex > .col-sm-6,\n  .flex > .col-sm-7,\n  .flex > .col-sm-8,\n  .flex > .col-sm-9,\n  .flex > .col-sm-10,\n  .flex > .col-sm-11,\n  .flex > .col-sm-12 {\n    height: auto;\n    min-height: 0;\n    max-height: 100%;\n  }\n  .col-sm {\n    flex: 10000 1 0%;\n  }\n  .col-sm-auto,\n  .col-sm-0,\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12 {\n    flex: 0 0 auto;\n  }\n  .col-sm-grow {\n    flex: 1 0 auto;\n  }\n  .row > .col-sm-0 {\n    height: auto;\n    width: 0%;\n  }\n  .row > .offset-sm-0 {\n    margin-left: 0%;\n  }\n  .column > .col-sm-0 {\n    height: 0%;\n    width: auto;\n  }\n  .row > .col-sm-1 {\n    height: auto;\n    width: 8.3333%;\n  }\n  .row > .offset-sm-1 {\n    margin-left: 8.3333%;\n  }\n  .column > .col-sm-1 {\n    height: 8.3333%;\n    width: auto;\n  }\n  .row > .col-sm-2 {\n    height: auto;\n    width: 16.6667%;\n  }\n  .row > .offset-sm-2 {\n    margin-left: 16.6667%;\n  }\n  .column > .col-sm-2 {\n    height: 16.6667%;\n    width: auto;\n  }\n  .row > .col-sm-3 {\n    height: auto;\n    width: 25%;\n  }\n  .row > .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .column > .col-sm-3 {\n    height: 25%;\n    width: auto;\n  }\n  .row > .col-sm-4 {\n    height: auto;\n    width: 33.3333%;\n  }\n  .row > .offset-sm-4 {\n    margin-left: 33.3333%;\n  }\n  .column > .col-sm-4 {\n    height: 33.3333%;\n    width: auto;\n  }\n  .row > .col-sm-5 {\n    height: auto;\n    width: 41.6667%;\n  }\n  .row > .offset-sm-5 {\n    margin-left: 41.6667%;\n  }\n  .column > .col-sm-5 {\n    height: 41.6667%;\n    width: auto;\n  }\n  .row > .col-sm-6 {\n    height: auto;\n    width: 50%;\n  }\n  .row > .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .column > .col-sm-6 {\n    height: 50%;\n    width: auto;\n  }\n  .row > .col-sm-7 {\n    height: auto;\n    width: 58.3333%;\n  }\n  .row > .offset-sm-7 {\n    margin-left: 58.3333%;\n  }\n  .column > .col-sm-7 {\n    height: 58.3333%;\n    width: auto;\n  }\n  .row > .col-sm-8 {\n    height: auto;\n    width: 66.6667%;\n  }\n  .row > .offset-sm-8 {\n    margin-left: 66.6667%;\n  }\n  .column > .col-sm-8 {\n    height: 66.6667%;\n    width: auto;\n  }\n  .row > .col-sm-9 {\n    height: auto;\n    width: 75%;\n  }\n  .row > .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .column > .col-sm-9 {\n    height: 75%;\n    width: auto;\n  }\n  .row > .col-sm-10 {\n    height: auto;\n    width: 83.3333%;\n  }\n  .row > .offset-sm-10 {\n    margin-left: 83.3333%;\n  }\n  .column > .col-sm-10 {\n    height: 83.3333%;\n    width: auto;\n  }\n  .row > .col-sm-11 {\n    height: auto;\n    width: 91.6667%;\n  }\n  .row > .offset-sm-11 {\n    margin-left: 91.6667%;\n  }\n  .column > .col-sm-11 {\n    height: 91.6667%;\n    width: auto;\n  }\n  .row > .col-sm-12 {\n    height: auto;\n    width: 100%;\n  }\n  .row > .offset-sm-12 {\n    margin-left: 100%;\n  }\n  .column > .col-sm-12 {\n    height: 100%;\n    width: auto;\n  }\n}\n@media (min-width: 768px) {\n  .row > .col-md,\n  .row > .col-md-auto,\n  .row > .col-md-grow,\n  .row > .col-md-0,\n  .row > .col-md-1,\n  .row > .col-md-2,\n  .row > .col-md-3,\n  .row > .col-md-4,\n  .row > .col-md-5,\n  .row > .col-md-6,\n  .row > .col-md-7,\n  .row > .col-md-8,\n  .row > .col-md-9,\n  .row > .col-md-10,\n  .row > .col-md-11,\n  .row > .col-md-12,\n  .flex > .col-md,\n  .flex > .col-md-auto,\n  .flex > .col-md-grow,\n  .flex > .col-md-0,\n  .flex > .col-md-1,\n  .flex > .col-md-2,\n  .flex > .col-md-3,\n  .flex > .col-md-4,\n  .flex > .col-md-5,\n  .flex > .col-md-6,\n  .flex > .col-md-7,\n  .flex > .col-md-8,\n  .flex > .col-md-9,\n  .flex > .col-md-10,\n  .flex > .col-md-11,\n  .flex > .col-md-12 {\n    width: auto;\n    min-width: 0;\n    max-width: 100%;\n  }\n  .column > .col-md,\n  .column > .col-md-auto,\n  .column > .col-md-grow,\n  .column > .col-md-0,\n  .column > .col-md-1,\n  .column > .col-md-2,\n  .column > .col-md-3,\n  .column > .col-md-4,\n  .column > .col-md-5,\n  .column > .col-md-6,\n  .column > .col-md-7,\n  .column > .col-md-8,\n  .column > .col-md-9,\n  .column > .col-md-10,\n  .column > .col-md-11,\n  .column > .col-md-12,\n  .flex > .col-md,\n  .flex > .col-md-auto,\n  .flex > .col-md-grow,\n  .flex > .col-md-0,\n  .flex > .col-md-1,\n  .flex > .col-md-2,\n  .flex > .col-md-3,\n  .flex > .col-md-4,\n  .flex > .col-md-5,\n  .flex > .col-md-6,\n  .flex > .col-md-7,\n  .flex > .col-md-8,\n  .flex > .col-md-9,\n  .flex > .col-md-10,\n  .flex > .col-md-11,\n  .flex > .col-md-12 {\n    height: auto;\n    min-height: 0;\n    max-height: 100%;\n  }\n  .col-md {\n    flex: 10000 1 0%;\n  }\n  .col-md-auto,\n  .col-md-0,\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12 {\n    flex: 0 0 auto;\n  }\n  .col-md-grow {\n    flex: 1 0 auto;\n  }\n  .row > .col-md-0 {\n    height: auto;\n    width: 0%;\n  }\n  .row > .offset-md-0 {\n    margin-left: 0%;\n  }\n  .column > .col-md-0 {\n    height: 0%;\n    width: auto;\n  }\n  .row > .col-md-1 {\n    height: auto;\n    width: 8.3333%;\n  }\n  .row > .offset-md-1 {\n    margin-left: 8.3333%;\n  }\n  .column > .col-md-1 {\n    height: 8.3333%;\n    width: auto;\n  }\n  .row > .col-md-2 {\n    height: auto;\n    width: 16.6667%;\n  }\n  .row > .offset-md-2 {\n    margin-left: 16.6667%;\n  }\n  .column > .col-md-2 {\n    height: 16.6667%;\n    width: auto;\n  }\n  .row > .col-md-3 {\n    height: auto;\n    width: 25%;\n  }\n  .row > .offset-md-3 {\n    margin-left: 25%;\n  }\n  .column > .col-md-3 {\n    height: 25%;\n    width: auto;\n  }\n  .row > .col-md-4 {\n    height: auto;\n    width: 33.3333%;\n  }\n  .row > .offset-md-4 {\n    margin-left: 33.3333%;\n  }\n  .column > .col-md-4 {\n    height: 33.3333%;\n    width: auto;\n  }\n  .row > .col-md-5 {\n    height: auto;\n    width: 41.6667%;\n  }\n  .row > .offset-md-5 {\n    margin-left: 41.6667%;\n  }\n  .column > .col-md-5 {\n    height: 41.6667%;\n    width: auto;\n  }\n  .row > .col-md-6 {\n    height: auto;\n    width: 50%;\n  }\n  .row > .offset-md-6 {\n    margin-left: 50%;\n  }\n  .column > .col-md-6 {\n    height: 50%;\n    width: auto;\n  }\n  .row > .col-md-7 {\n    height: auto;\n    width: 58.3333%;\n  }\n  .row > .offset-md-7 {\n    margin-left: 58.3333%;\n  }\n  .column > .col-md-7 {\n    height: 58.3333%;\n    width: auto;\n  }\n  .row > .col-md-8 {\n    height: auto;\n    width: 66.6667%;\n  }\n  .row > .offset-md-8 {\n    margin-left: 66.6667%;\n  }\n  .column > .col-md-8 {\n    height: 66.6667%;\n    width: auto;\n  }\n  .row > .col-md-9 {\n    height: auto;\n    width: 75%;\n  }\n  .row > .offset-md-9 {\n    margin-left: 75%;\n  }\n  .column > .col-md-9 {\n    height: 75%;\n    width: auto;\n  }\n  .row > .col-md-10 {\n    height: auto;\n    width: 83.3333%;\n  }\n  .row > .offset-md-10 {\n    margin-left: 83.3333%;\n  }\n  .column > .col-md-10 {\n    height: 83.3333%;\n    width: auto;\n  }\n  .row > .col-md-11 {\n    height: auto;\n    width: 91.6667%;\n  }\n  .row > .offset-md-11 {\n    margin-left: 91.6667%;\n  }\n  .column > .col-md-11 {\n    height: 91.6667%;\n    width: auto;\n  }\n  .row > .col-md-12 {\n    height: auto;\n    width: 100%;\n  }\n  .row > .offset-md-12 {\n    margin-left: 100%;\n  }\n  .column > .col-md-12 {\n    height: 100%;\n    width: auto;\n  }\n}\n@media (min-width: 992px) {\n  .row > .col-lg,\n  .row > .col-lg-auto,\n  .row > .col-lg-grow,\n  .row > .col-lg-0,\n  .row > .col-lg-1,\n  .row > .col-lg-2,\n  .row > .col-lg-3,\n  .row > .col-lg-4,\n  .row > .col-lg-5,\n  .row > .col-lg-6,\n  .row > .col-lg-7,\n  .row > .col-lg-8,\n  .row > .col-lg-9,\n  .row > .col-lg-10,\n  .row > .col-lg-11,\n  .row > .col-lg-12,\n  .flex > .col-lg,\n  .flex > .col-lg-auto,\n  .flex > .col-lg-grow,\n  .flex > .col-lg-0,\n  .flex > .col-lg-1,\n  .flex > .col-lg-2,\n  .flex > .col-lg-3,\n  .flex > .col-lg-4,\n  .flex > .col-lg-5,\n  .flex > .col-lg-6,\n  .flex > .col-lg-7,\n  .flex > .col-lg-8,\n  .flex > .col-lg-9,\n  .flex > .col-lg-10,\n  .flex > .col-lg-11,\n  .flex > .col-lg-12 {\n    width: auto;\n    min-width: 0;\n    max-width: 100%;\n  }\n  .column > .col-lg,\n  .column > .col-lg-auto,\n  .column > .col-lg-grow,\n  .column > .col-lg-0,\n  .column > .col-lg-1,\n  .column > .col-lg-2,\n  .column > .col-lg-3,\n  .column > .col-lg-4,\n  .column > .col-lg-5,\n  .column > .col-lg-6,\n  .column > .col-lg-7,\n  .column > .col-lg-8,\n  .column > .col-lg-9,\n  .column > .col-lg-10,\n  .column > .col-lg-11,\n  .column > .col-lg-12,\n  .flex > .col-lg,\n  .flex > .col-lg-auto,\n  .flex > .col-lg-grow,\n  .flex > .col-lg-0,\n  .flex > .col-lg-1,\n  .flex > .col-lg-2,\n  .flex > .col-lg-3,\n  .flex > .col-lg-4,\n  .flex > .col-lg-5,\n  .flex > .col-lg-6,\n  .flex > .col-lg-7,\n  .flex > .col-lg-8,\n  .flex > .col-lg-9,\n  .flex > .col-lg-10,\n  .flex > .col-lg-11,\n  .flex > .col-lg-12 {\n    height: auto;\n    min-height: 0;\n    max-height: 100%;\n  }\n  .col-lg {\n    flex: 10000 1 0%;\n  }\n  .col-lg-auto,\n  .col-lg-0,\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12 {\n    flex: 0 0 auto;\n  }\n  .col-lg-grow {\n    flex: 1 0 auto;\n  }\n  .row > .col-lg-0 {\n    height: auto;\n    width: 0%;\n  }\n  .row > .offset-lg-0 {\n    margin-left: 0%;\n  }\n  .column > .col-lg-0 {\n    height: 0%;\n    width: auto;\n  }\n  .row > .col-lg-1 {\n    height: auto;\n    width: 8.3333%;\n  }\n  .row > .offset-lg-1 {\n    margin-left: 8.3333%;\n  }\n  .column > .col-lg-1 {\n    height: 8.3333%;\n    width: auto;\n  }\n  .row > .col-lg-2 {\n    height: auto;\n    width: 16.6667%;\n  }\n  .row > .offset-lg-2 {\n    margin-left: 16.6667%;\n  }\n  .column > .col-lg-2 {\n    height: 16.6667%;\n    width: auto;\n  }\n  .row > .col-lg-3 {\n    height: auto;\n    width: 25%;\n  }\n  .row > .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .column > .col-lg-3 {\n    height: 25%;\n    width: auto;\n  }\n  .row > .col-lg-4 {\n    height: auto;\n    width: 33.3333%;\n  }\n  .row > .offset-lg-4 {\n    margin-left: 33.3333%;\n  }\n  .column > .col-lg-4 {\n    height: 33.3333%;\n    width: auto;\n  }\n  .row > .col-lg-5 {\n    height: auto;\n    width: 41.6667%;\n  }\n  .row > .offset-lg-5 {\n    margin-left: 41.6667%;\n  }\n  .column > .col-lg-5 {\n    height: 41.6667%;\n    width: auto;\n  }\n  .row > .col-lg-6 {\n    height: auto;\n    width: 50%;\n  }\n  .row > .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .column > .col-lg-6 {\n    height: 50%;\n    width: auto;\n  }\n  .row > .col-lg-7 {\n    height: auto;\n    width: 58.3333%;\n  }\n  .row > .offset-lg-7 {\n    margin-left: 58.3333%;\n  }\n  .column > .col-lg-7 {\n    height: 58.3333%;\n    width: auto;\n  }\n  .row > .col-lg-8 {\n    height: auto;\n    width: 66.6667%;\n  }\n  .row > .offset-lg-8 {\n    margin-left: 66.6667%;\n  }\n  .column > .col-lg-8 {\n    height: 66.6667%;\n    width: auto;\n  }\n  .row > .col-lg-9 {\n    height: auto;\n    width: 75%;\n  }\n  .row > .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .column > .col-lg-9 {\n    height: 75%;\n    width: auto;\n  }\n  .row > .col-lg-10 {\n    height: auto;\n    width: 83.3333%;\n  }\n  .row > .offset-lg-10 {\n    margin-left: 83.3333%;\n  }\n  .column > .col-lg-10 {\n    height: 83.3333%;\n    width: auto;\n  }\n  .row > .col-lg-11 {\n    height: auto;\n    width: 91.6667%;\n  }\n  .row > .offset-lg-11 {\n    margin-left: 91.6667%;\n  }\n  .column > .col-lg-11 {\n    height: 91.6667%;\n    width: auto;\n  }\n  .row > .col-lg-12 {\n    height: auto;\n    width: 100%;\n  }\n  .row > .offset-lg-12 {\n    margin-left: 100%;\n  }\n  .column > .col-lg-12 {\n    height: 100%;\n    width: auto;\n  }\n}\n@media (min-width: 1200px) {\n  .row > .col-xl,\n  .row > .col-xl-auto,\n  .row > .col-xl-grow,\n  .row > .col-xl-0,\n  .row > .col-xl-1,\n  .row > .col-xl-2,\n  .row > .col-xl-3,\n  .row > .col-xl-4,\n  .row > .col-xl-5,\n  .row > .col-xl-6,\n  .row > .col-xl-7,\n  .row > .col-xl-8,\n  .row > .col-xl-9,\n  .row > .col-xl-10,\n  .row > .col-xl-11,\n  .row > .col-xl-12,\n  .flex > .col-xl,\n  .flex > .col-xl-auto,\n  .flex > .col-xl-grow,\n  .flex > .col-xl-0,\n  .flex > .col-xl-1,\n  .flex > .col-xl-2,\n  .flex > .col-xl-3,\n  .flex > .col-xl-4,\n  .flex > .col-xl-5,\n  .flex > .col-xl-6,\n  .flex > .col-xl-7,\n  .flex > .col-xl-8,\n  .flex > .col-xl-9,\n  .flex > .col-xl-10,\n  .flex > .col-xl-11,\n  .flex > .col-xl-12 {\n    width: auto;\n    min-width: 0;\n    max-width: 100%;\n  }\n  .column > .col-xl,\n  .column > .col-xl-auto,\n  .column > .col-xl-grow,\n  .column > .col-xl-0,\n  .column > .col-xl-1,\n  .column > .col-xl-2,\n  .column > .col-xl-3,\n  .column > .col-xl-4,\n  .column > .col-xl-5,\n  .column > .col-xl-6,\n  .column > .col-xl-7,\n  .column > .col-xl-8,\n  .column > .col-xl-9,\n  .column > .col-xl-10,\n  .column > .col-xl-11,\n  .column > .col-xl-12,\n  .flex > .col-xl,\n  .flex > .col-xl-auto,\n  .flex > .col-xl-grow,\n  .flex > .col-xl-0,\n  .flex > .col-xl-1,\n  .flex > .col-xl-2,\n  .flex > .col-xl-3,\n  .flex > .col-xl-4,\n  .flex > .col-xl-5,\n  .flex > .col-xl-6,\n  .flex > .col-xl-7,\n  .flex > .col-xl-8,\n  .flex > .col-xl-9,\n  .flex > .col-xl-10,\n  .flex > .col-xl-11,\n  .flex > .col-xl-12 {\n    height: auto;\n    min-height: 0;\n    max-height: 100%;\n  }\n  .col-xl {\n    flex: 10000 1 0%;\n  }\n  .col-xl-auto,\n  .col-xl-0,\n  .col-xl-1,\n  .col-xl-2,\n  .col-xl-3,\n  .col-xl-4,\n  .col-xl-5,\n  .col-xl-6,\n  .col-xl-7,\n  .col-xl-8,\n  .col-xl-9,\n  .col-xl-10,\n  .col-xl-11,\n  .col-xl-12 {\n    flex: 0 0 auto;\n  }\n  .col-xl-grow {\n    flex: 1 0 auto;\n  }\n  .row > .col-xl-0 {\n    height: auto;\n    width: 0%;\n  }\n  .row > .offset-xl-0 {\n    margin-left: 0%;\n  }\n  .column > .col-xl-0 {\n    height: 0%;\n    width: auto;\n  }\n  .row > .col-xl-1 {\n    height: auto;\n    width: 8.3333%;\n  }\n  .row > .offset-xl-1 {\n    margin-left: 8.3333%;\n  }\n  .column > .col-xl-1 {\n    height: 8.3333%;\n    width: auto;\n  }\n  .row > .col-xl-2 {\n    height: auto;\n    width: 16.6667%;\n  }\n  .row > .offset-xl-2 {\n    margin-left: 16.6667%;\n  }\n  .column > .col-xl-2 {\n    height: 16.6667%;\n    width: auto;\n  }\n  .row > .col-xl-3 {\n    height: auto;\n    width: 25%;\n  }\n  .row > .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .column > .col-xl-3 {\n    height: 25%;\n    width: auto;\n  }\n  .row > .col-xl-4 {\n    height: auto;\n    width: 33.3333%;\n  }\n  .row > .offset-xl-4 {\n    margin-left: 33.3333%;\n  }\n  .column > .col-xl-4 {\n    height: 33.3333%;\n    width: auto;\n  }\n  .row > .col-xl-5 {\n    height: auto;\n    width: 41.6667%;\n  }\n  .row > .offset-xl-5 {\n    margin-left: 41.6667%;\n  }\n  .column > .col-xl-5 {\n    height: 41.6667%;\n    width: auto;\n  }\n  .row > .col-xl-6 {\n    height: auto;\n    width: 50%;\n  }\n  .row > .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .column > .col-xl-6 {\n    height: 50%;\n    width: auto;\n  }\n  .row > .col-xl-7 {\n    height: auto;\n    width: 58.3333%;\n  }\n  .row > .offset-xl-7 {\n    margin-left: 58.3333%;\n  }\n  .column > .col-xl-7 {\n    height: 58.3333%;\n    width: auto;\n  }\n  .row > .col-xl-8 {\n    height: auto;\n    width: 66.6667%;\n  }\n  .row > .offset-xl-8 {\n    margin-left: 66.6667%;\n  }\n  .column > .col-xl-8 {\n    height: 66.6667%;\n    width: auto;\n  }\n  .row > .col-xl-9 {\n    height: auto;\n    width: 75%;\n  }\n  .row > .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .column > .col-xl-9 {\n    height: 75%;\n    width: auto;\n  }\n  .row > .col-xl-10 {\n    height: auto;\n    width: 83.3333%;\n  }\n  .row > .offset-xl-10 {\n    margin-left: 83.3333%;\n  }\n  .column > .col-xl-10 {\n    height: 83.3333%;\n    width: auto;\n  }\n  .row > .col-xl-11 {\n    height: auto;\n    width: 91.6667%;\n  }\n  .row > .offset-xl-11 {\n    margin-left: 91.6667%;\n  }\n  .column > .col-xl-11 {\n    height: 91.6667%;\n    width: auto;\n  }\n  .row > .col-xl-12 {\n    height: auto;\n    width: 100%;\n  }\n  .row > .offset-xl-12 {\n    margin-left: 100%;\n  }\n  .column > .col-xl-12 {\n    height: 100%;\n    width: auto;\n  }\n}\n.backdrop {\n  display: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: transparent;\n  transition: background 0.28s ease-in;\n}\n.backdrop.active {\n  display: block;\n  background: rgba(0,0,0,0.3);\n}\n.round-borders {\n  border-radius: 3px !important;\n}\n.generic-margin,\n.group > * {\n  margin: 5px;\n}\n.no-transition {\n  transition: none !important;\n}\n.transition-0 {\n  transition: 0s !important;\n}\n.glossy {\n  background-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0) 50%, rgba(0,0,0,0.12) 51%, rgba(0,0,0,0.04)) !important;\n}\n.q-placeholder::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n.q-placeholder::-moz-placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n.q-placeholder:-ms-input-placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n.q-body-fullscreen-mixin,\n.q-body-prevent-scroll {\n  overflow: hidden !important;\n}\n.q-no-input-spinner {\n  -moz-appearance: textfield !important;\n}\n.q-no-input-spinner::-webkit-outer-spin-button,\n.q-no-input-spinner::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\na.q-link {\n  outline: 0;\n  color: inherit;\n  text-decoration: none;\n}\n.q-select-highlight {\n  background: rgba(189,189,189,0.5) !important;\n}\n.highlight-and-fade {\n  animation: q-highlight 2s /* rtl:ignore */;\n}\n.transition-generic {\n  transition: all 0.3s;\n}\n.animate-spin,\n.animate-spin-reverse {\n  animation: q-spin 2s infinite linear /* rtl:ignore */;\n}\n.animate-spin-reverse {\n  animation-direction: reverse;\n}\n.animate-blink {\n  animation: q-blink 1s steps(5, start) infinite /* rtl:ignore */;\n}\n.animate-pop {\n  animation: q-pop 0.2s /* rtl:ignore */;\n}\n.animate-scale {\n  animation: q-scale 0.2s /* rtl:ignore */;\n}\n.animate-fade {\n  animation: q-fade 0.2s /* rtl:ignore */;\n}\n.animate-bounce {\n  animation: q-bounce 2s infinite /* rtl:ignore */;\n}\n.animate-shake {\n  animation: q-shake 0.15s;\n  animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.animate-popup-up,\n.animate-popup-down {\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.animate-popup-up > *,\n.animate-popup-down > * {\n  animation: q-fade 0.82s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n.animate-popup-down {\n  animation: q-popup-down 0.36s /* rtl:ignore */;\n  transform-origin: left top 0px /* rtl:ignore */;\n}\n.animate-popup-up {\n  animation: q-popup-up 0.36s /* rtl:ignore */;\n  transform-origin: left bottom 0px /* rtl:ignore */;\n}\n.animate-fade-left {\n  animation: q-fade 0.36s cubic-bezier(0.785, 0.135, 0.15, 0.86), q-slide-left 0.36s ease;\n}\n.animate-fade-right {\n  animation: q-fade 0.36s cubic-bezier(0.785, 0.135, 0.15, 0.86), q-slide-right 0.36s ease;\n}\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.animated.infinite {\n  animation-iteration-count: infinite;\n}\n.animated.hinge {\n  animation-duration: 2s;\n}\n.animated.flipOutX,\n.animated.flipOutY,\n.animated.bounceIn,\n.animated.bounceOut {\n  animation-duration: 0.75s;\n}\n.non-selectable {\n  user-select: none !important;\n}\n.scroll {\n  overflow: auto;\n}\n.scroll,\n.scroll-x,\n.scroll-y {\n  -webkit-overflow-scrolling: touch;\n  will-change: scroll-position;\n}\n.scroll-x {\n  overflow-x: auto;\n}\n.scroll-y {\n  overflow-y: auto;\n}\n.no-scroll {\n  overflow: hidden !important;\n}\n.no-pointer-events {\n  pointer-events: none !important;\n}\n.all-pointer-events {\n  pointer-events: all !important;\n}\n.cursor-pointer {\n  cursor: pointer !important;\n}\n.cursor-not-allowed {\n  cursor: not-allowed !important;\n}\n.cursor-inherit {\n  cursor: inherit !important;\n}\n.rotate-45 {\n  transform: rotate(45deg) /* rtl:ignore */;\n}\n.rotate-90 {\n  transform: rotate(90deg) /* rtl:ignore */;\n}\n.rotate-135 {\n  transform: rotate(135deg) /* rtl:ignore */;\n}\n.rotate-180 {\n  transform: rotate(180deg) /* rtl:ignore */;\n}\n.rotate-205 {\n  transform: rotate(205deg) /* rtl:ignore */;\n}\n.rotate-270 {\n  transform: rotate(270deg) /* rtl:ignore */;\n}\n.rotate-315 {\n  transform: rotate(315deg) /* rtl:ignore */;\n}\n.flip-horizontal {\n  transform: scale(-1, 1);\n}\n.flip-vertical {\n  transform: scale(1, -1);\n}\n.float-left {\n  float: left;\n}\n.float-right {\n  float: right;\n}\n.relative-position {\n  position: relative;\n}\n.fixed,\n.fullscreen,\n.fixed-center,\n.fixed-bottom,\n.fixed-left,\n.fixed-right,\n.fixed-top,\n.fixed-top-left,\n.fixed-top-right,\n.fixed-bottom-left,\n.fixed-bottom-right {\n  position: fixed;\n}\n.absolute,\n.absolute-full,\n.absolute-center,\n.absolute-bottom,\n.absolute-left,\n.absolute-right,\n.absolute-top,\n.absolute-top-left,\n.absolute-top-right,\n.absolute-bottom-left,\n.absolute-bottom-right {\n  position: absolute;\n}\n.fixed-top,\n.absolute-top {\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.fixed-right,\n.absolute-right {\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n.fixed-bottom,\n.absolute-bottom {\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.fixed-left,\n.absolute-left {\n  top: 0;\n  bottom: 0;\n  left: 0;\n}\n.fixed-top-left,\n.absolute-top-left {\n  top: 0;\n  left: 0;\n}\n.fixed-top-right,\n.absolute-top-right {\n  top: 0;\n  right: 0;\n}\n.fixed-bottom-left,\n.absolute-bottom-left {\n  bottom: 0;\n  left: 0;\n}\n.fixed-bottom-right,\n.absolute-bottom-right {\n  bottom: 0;\n  right: 0;\n}\n.fullscreen {\n  z-index: 6000;\n  border-radius: 0 !important;\n  max-width: 100vw;\n  max-height: 100vh;\n}\n.absolute-full,\n.fullscreen {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.fixed-center,\n.absolute-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.vertical-top {\n  vertical-align: top !important;\n}\n.vertical-middle {\n  vertical-align: middle !important;\n}\n.vertical-bottom {\n  vertical-align: bottom !important;\n}\n.on-left {\n  margin-right: 12px;\n}\n.on-right {\n  margin-left: 12px;\n}\n.q-ripple-container {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  color: inherit;\n  border-radius: inherit;\n  overflow: hidden;\n  z-index: 0;\n  pointer-events: none;\n}\n.q-ripple-animation {\n  top: 0;\n  left: 0 /* rtl:ignore */;\n  opacity: 0;\n  color: inherit;\n  position: absolute;\n  border-radius: 50%;\n  background: currentColor;\n  transition: 0.3s transform cubic-bezier(0.2, 0.4, 0.4, 0.9), 0.3s opacity cubic-bezier(0.2, 0.4, 0.4, 0.1);\n  pointer-events: none;\n  overflow: hidden;\n  will-change: transform, opacity;\n}\n.q-ripple-animation-enter {\n  transition: none;\n}\n.q-ripple-animation-visible {\n  opacity: 0.15;\n}\n.q-radial-ripple {\n  overflow: hidden;\n  border-radius: 50%;\n  pointer-events: none;\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n}\n.q-radial-ripple:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: radial-gradient(circle, currentColor 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n.q-radial-ripple.active:after {\n  transform: scale(0, 0);\n  opacity: 0.4;\n  transition: 0s;\n}\n:root {\n  --q-size-xs: 0;\n  --q-size-sm: 576px;\n  --q-size-md: 768px;\n  --q-size-lg: 992px;\n  --q-size-xl: 1200px;\n}\n.fit {\n  width: 100% !important;\n  height: 100% !important;\n}\n.full-height {\n  height: 100% !important;\n}\n.full-width {\n  width: 100% !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n.window-height {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  height: 100vh !important;\n}\n.window-width {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  width: 100vw !important;\n}\n.block {\n  display: block !important;\n}\n.inline-block {\n  display: inline-block !important;\n}\n.q-pa-none {\n  padding: 0 0;\n}\n.q-pl-none,\n.q-px-none {\n  padding-left: 0;\n}\n.q-pr-none,\n.q-px-none {\n  padding-right: 0;\n}\n.q-pt-none,\n.q-py-none {\n  padding-top: 0;\n}\n.q-pb-none,\n.q-py-none {\n  padding-bottom: 0;\n}\n.q-ma-none {\n  margin: 0 0;\n}\n.q-ml-none,\n.q-mx-none {\n  margin-left: 0;\n}\n.q-mr-none,\n.q-mx-none {\n  margin-right: 0;\n}\n.q-mt-none,\n.q-my-none {\n  margin-top: 0;\n}\n.q-mb-none,\n.q-my-none {\n  margin-bottom: 0;\n}\n.q-pa-xs {\n  padding: 4px 4px;\n}\n.q-pl-xs,\n.q-px-xs {\n  padding-left: 4px;\n}\n.q-pr-xs,\n.q-px-xs {\n  padding-right: 4px;\n}\n.q-pt-xs,\n.q-py-xs {\n  padding-top: 4px;\n}\n.q-pb-xs,\n.q-py-xs {\n  padding-bottom: 4px;\n}\n.q-ma-xs {\n  margin: 4px 4px;\n}\n.q-ml-xs,\n.q-mx-xs {\n  margin-left: 4px;\n}\n.q-mr-xs,\n.q-mx-xs {\n  margin-right: 4px;\n}\n.q-mt-xs,\n.q-my-xs {\n  margin-top: 4px;\n}\n.q-mb-xs,\n.q-my-xs {\n  margin-bottom: 4px;\n}\n.q-pa-sm {\n  padding: 8px 8px;\n}\n.q-pl-sm,\n.q-px-sm {\n  padding-left: 8px;\n}\n.q-pr-sm,\n.q-px-sm {\n  padding-right: 8px;\n}\n.q-pt-sm,\n.q-py-sm {\n  padding-top: 8px;\n}\n.q-pb-sm,\n.q-py-sm {\n  padding-bottom: 8px;\n}\n.q-ma-sm {\n  margin: 8px 8px;\n}\n.q-ml-sm,\n.q-mx-sm {\n  margin-left: 8px;\n}\n.q-mr-sm,\n.q-mx-sm {\n  margin-right: 8px;\n}\n.q-mt-sm,\n.q-my-sm {\n  margin-top: 8px;\n}\n.q-mb-sm,\n.q-my-sm {\n  margin-bottom: 8px;\n}\n.q-pa-md {\n  padding: 16px 16px;\n}\n.q-pl-md,\n.q-px-md {\n  padding-left: 16px;\n}\n.q-pr-md,\n.q-px-md {\n  padding-right: 16px;\n}\n.q-pt-md,\n.q-py-md {\n  padding-top: 16px;\n}\n.q-pb-md,\n.q-py-md {\n  padding-bottom: 16px;\n}\n.q-ma-md {\n  margin: 16px 16px;\n}\n.q-ml-md,\n.q-mx-md {\n  margin-left: 16px;\n}\n.q-mr-md,\n.q-mx-md {\n  margin-right: 16px;\n}\n.q-mt-md,\n.q-my-md {\n  margin-top: 16px;\n}\n.q-mb-md,\n.q-my-md {\n  margin-bottom: 16px;\n}\n.q-pa-lg {\n  padding: 24px 24px;\n}\n.q-pl-lg,\n.q-px-lg {\n  padding-left: 24px;\n}\n.q-pr-lg,\n.q-px-lg {\n  padding-right: 24px;\n}\n.q-pt-lg,\n.q-py-lg {\n  padding-top: 24px;\n}\n.q-pb-lg,\n.q-py-lg {\n  padding-bottom: 24px;\n}\n.q-ma-lg {\n  margin: 24px 24px;\n}\n.q-ml-lg,\n.q-mx-lg {\n  margin-left: 24px;\n}\n.q-mr-lg,\n.q-mx-lg {\n  margin-right: 24px;\n}\n.q-mt-lg,\n.q-my-lg {\n  margin-top: 24px;\n}\n.q-mb-lg,\n.q-my-lg {\n  margin-bottom: 24px;\n}\n.q-pa-xl {\n  padding: 48px 48px;\n}\n.q-pl-xl,\n.q-px-xl {\n  padding-left: 48px;\n}\n.q-pr-xl,\n.q-px-xl {\n  padding-right: 48px;\n}\n.q-pt-xl,\n.q-py-xl {\n  padding-top: 48px;\n}\n.q-pb-xl,\n.q-py-xl {\n  padding-bottom: 48px;\n}\n.q-ma-xl {\n  margin: 48px 48px;\n}\n.q-ml-xl,\n.q-mx-xl {\n  margin-left: 48px;\n}\n.q-mr-xl,\n.q-mx-xl {\n  margin-right: 48px;\n}\n.q-mt-xl,\n.q-my-xl {\n  margin-top: 48px;\n}\n.q-mb-xl,\n.q-my-xl {\n  margin-bottom: 48px;\n}\n.q-ml-auto,\n.q-mx-auto {\n  margin-left: auto;\n}\n.q-mr-auto,\n.q-mx-auto {\n  margin-right: auto;\n}\n.q-my-form {\n  margin-top: 16px;\n  margin-bottom: 8px;\n}\n.q-touch {\n  user-select: none;\n  user-drag: none;\n  -khtml-user-drag: none;\n  -webkit-user-drag: none;\n}\n.q-touch-x {\n  touch-action: pan-x;\n}\n.q-touch-y {\n  touch-action: pan-y;\n}\nbody {\n  min-width: 100px;\n  font-family: 'Roboto', '-apple-system', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: antialiased;\n  background: #fff;\n  color: #0c0c0c;\n  min-height: 100vh;\n}\nh1 {\n  font-size: 112px;\n  font-weight: 300;\n  line-height: 1.12;\n  letter-spacing: -0.04em;\n}\n@media screen and (max-width: 767px) {\n  h1 {\n    font-size: 67.2px;\n  }\n}\nh2 {\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n}\n@media screen and (max-width: 767px) {\n  h2 {\n    font-size: 33.6px;\n  }\n}\nh3 {\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 48px;\n  letter-spacing: normal;\n}\n@media screen and (max-width: 767px) {\n  h3 {\n    font-size: 27px;\n  }\n}\nh4 {\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px;\n  letter-spacing: normal;\n}\n@media screen and (max-width: 767px) {\n  h4 {\n    font-size: 20.4px;\n  }\n}\nh5 {\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  letter-spacing: normal;\n}\n@media screen and (max-width: 767px) {\n  h5 {\n    font-size: 14.399999999999999px;\n  }\n}\nh6 {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1.12;\n  letter-spacing: 0.02em;\n}\n@media screen and (max-width: 767px) {\n  h6 {\n    font-size: 12px;\n  }\n}\n.q-display-4-opacity {\n  opacity: 0.54;\n}\n.q-display-4 {\n  font-size: 112px;\n  font-weight: 300;\n  line-height: 1.12;\n  letter-spacing: -0.04em;\n}\n.q-display-3-opacity {\n  opacity: 0.54;\n}\n.q-display-3 {\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n}\n.q-display-2-opacity {\n  opacity: 0.54;\n}\n.q-display-2 {\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 48px;\n  letter-spacing: normal;\n}\n.q-display-1-opacity {\n  opacity: 0.54;\n}\n.q-display-1 {\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px;\n  letter-spacing: normal;\n}\n.q-headline-opacity {\n  opacity: 0.87;\n}\n.q-headline {\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  letter-spacing: normal;\n}\n.q-title-opacity {\n  opacity: 0.87;\n}\n.q-title {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1.12;\n  letter-spacing: 0.02em;\n}\n.q-subheading-opacity {\n  opacity: 0.87;\n}\n.q-subheading {\n  font-size: 16px;\n  font-weight: 400;\n}\n.q-body-2-opacity {\n  opacity: 0.87;\n}\n.q-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n}\n.q-body-1-opacity {\n  opacity: 0.87;\n}\n.q-body-1 {\n  font-size: 14px;\n  font-weight: 400;\n}\n.q-caption-opacity {\n  opacity: 0.54;\n}\n.q-caption {\n  font-size: 12px;\n  font-weight: 400;\n}\np {\n  margin: 0 0 16px;\n}\n.caption {\n  color: #424242;\n  letter-spacing: 0;\n  line-height: 24px;\n  padding: 0;\n  font-weight: 300;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.lowercase {\n  text-transform: lowercase;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.text-center {\n  text-align: center;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-justify {\n  text-align: justify;\n  hyphens: auto;\n}\n.text-italic {\n  font-style: italic;\n}\n.text-bold {\n  font-weight: bold;\n}\n.text-no-wrap {\n  white-space: nowrap;\n}\n.text-weight-thin {\n  font-weight: 100;\n}\n.text-weight-light {\n  font-weight: 300;\n}\n.text-weight-regular {\n  font-weight: 400;\n}\n.text-weight-medium {\n  font-weight: 500;\n}\n.text-weight-bold {\n  font-weight: 700;\n}\n.text-weight-bolder {\n  font-weight: 900;\n}\nsmall {\n  font-size: 80%;\n}\nbig {\n  font-size: 170%;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\nblockquote {\n  padding: 8px 16px;\n  margin: 0;\n  font-size: 16px;\n  border-left: 4px solid #027be3;\n  border-left: 4px solid var(--q-color-primary);\n}\nblockquote.text-right {\n  padding-right: 16px;\n  padding-left: 0;\n  border-right: 4px solid #027be3;\n  border-right: 4px solid var(--q-color-primary);\n  border-left: 0;\n  text-align: right;\n}\nblockquote small {\n  display: block;\n  line-height: 1.4;\n  color: #777;\n  color: var(--q-color-faded);\n}\nblockquote small:before {\n  content: '\\2014   \\A0';\n}\n.quote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  border-left: 5px solid #027be3;\n  border-left: 5px solid var(--q-color-primary);\n}\n.quote.text-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #027be3;\n  border-right: 5px solid var(--q-color-primary);\n  border-left: 0;\n  text-align: right;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\ndt,\ndd {\n  line-height: 1.4;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndl.horizontal dt {\n  float: left;\n  width: 25%;\n  clear: left;\n  text-align: right;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\ndl.horizontal dd {\n  margin-left: 30%;\n}\nhr.q-hr,\nhr.q-hr-dark {\n  height: 1px;\n  min-height: 1px;\n  display: block;\n  border: none;\n  width: 100%;\n  background: rgba(0,0,0,0.12);\n}\nhr.q-hr-dark {\n  background: rgba(255,255,255,0.36);\n}\n.no-margin {\n  margin: 0 !important;\n}\n.no-padding {\n  padding: 0 !important;\n}\n.no-border {\n  border: 0 !important;\n}\n.no-border-radius {\n  border-radius: 0 !important;\n}\n.no-box-shadow {\n  box-shadow: none !important;\n}\n.no-outline {\n  outline: 0 !important;\n}\n.ellipsis {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.ellipsis-2-lines,\n.ellipsis-3-lines {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n.ellipsis-2-lines {\n  -webkit-line-clamp: 2;\n}\n.ellipsis-3-lines {\n  -webkit-line-clamp: 3;\n}\n.readonly {\n  cursor: default !important;\n}\n.disabled,\n[disabled],\n.disabled *,\n[disabled] * {\n  cursor: not-allowed !important;\n}\n.disabled,\n[disabled] {\n  opacity: 0.6 !important;\n}\n.hidden {\n  display: none !important;\n}\n.invisible {\n  visibility: hidden !important;\n}\n.transparent {\n  background: transparent !important;\n}\n.overflow-auto {\n  overflow: auto !important;\n}\n.overflow-hidden {\n  overflow: hidden !important;\n}\n.overflow-hidden-y {\n  overflow-y: hidden !important;\n}\n.dimmed:after,\n.light-dimmed:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.dimmed:after {\n  background: rgba(0,0,0,0.4) !important;\n}\n.light-dimmed:after {\n  background: rgba(255,255,255,0.6) !important;\n}\n.z-top {\n  z-index: 7000 !important;\n}\n.z-max {\n  z-index: 9998 !important;\n}\nbody:not(.desktop) .desktop-only,\nbody.desktop .desktop-hide {\n  display: none !important;\n}\nbody:not(.mobile) .mobile-only,\nbody.mobile .mobile-hide {\n  display: none !important;\n}\nbody:not(.cordova) .cordova-only,\nbody.cordova .cordova-hide {\n  display: none !important;\n}\nbody:not(.electron) .electron-only,\nbody.electron .electron-hide {\n  display: none !important;\n}\nbody:not(.ios) .ios-only,\nbody.ios .ios-hide {\n  display: none !important;\n}\nbody:not(.mat) .mat-only,\nbody.mat .mat-hide {\n  display: none !important;\n}\nbody:not(.touch) .touch-only,\nbody.touch .touch-hide {\n  display: none !important;\n}\nbody:not(.within-iframe) .within-iframe-only,\nbody.within-iframe .within-iframe-hide {\n  display: none !important;\n}\nbody:not(.platform-ios) .platform-ios-only,\nbody.platform-ios .platform-ios-hide {\n  display: none !important;\n}\nbody:not(.platform-android) .platform-android-only,\nbody.platform-android .platform-android-hide {\n  display: none !important;\n}\n@media all and (orientation: portrait) {\n  .orientation-landscape {\n    display: none !important;\n  }\n}\n@media all and (orientation: landscape) {\n  .orientation-portrait {\n    display: none !important;\n  }\n}\n@media screen {\n  .print-only {\n    display: none !important;\n  }\n}\n@media print {\n  .print-hide {\n    display: none !important;\n  }\n}\n@media (max-width: 575px) {\n  .xs-hide,\n  .gt-xs,\n  .sm,\n  .gt-sm,\n  .md,\n  .gt-md,\n  .lg,\n  .gt-lg,\n  .xl {\n    display: none !important;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .sm-hide,\n  .xs,\n  .lt-sm,\n  .gt-sm,\n  .md,\n  .gt-md,\n  .lg,\n  .gt-lg,\n  .xl {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .md-hide,\n  .xs,\n  .lt-sm,\n  .sm,\n  .lt-md,\n  .gt-md,\n  .lg,\n  .gt-lg,\n  .xl {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .lg-hide,\n  .xs,\n  .lt-sm,\n  .sm,\n  .lt-md,\n  .md,\n  .lt-lg,\n  .gt-lg,\n  .xl {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .xl-hide,\n  .xs,\n  .lt-sm,\n  .sm,\n  .lt-md,\n  .md,\n  .lt-lg,\n  .lg,\n  .lt-xl {\n    display: none !important;\n  }\n}\n.q-focus-helper {\n  position: absolute;\n  top: 0;\n  left: 0 /* rtl:ignore */;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  border-radius: inherit;\n  opacity: 0.15;\n  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.q-focus-helper-rounded {\n  border-radius: 3px;\n}\n.q-focus-helper-round {\n  border-radius: 50%;\n}\nbody.desktop .q-focusable:focus .q-focus-helper,\nbody.desktop .q-hoverable:hover .q-focus-helper {\n  background: currentColor;\n}\nbody.ios .q-hoverable:active .q-focus-helper {\n  background: currentColor;\n  opacity: 0.3;\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .q-if > .q-if-inner {\n    flex-basis: auto;\n    display: inline-flex;\n  }\n  .q-if > .q-if-inner > div > .q-input-target {\n    flex-basis: auto;\n  }\n  .q-if > .q-if-inner > div > input.q-input-target {\n    min-width: 6rem;\n    flex-basis: 0% !important;\n  }\n  .q-input-target:before {\n    display: block;\n  }\n  .q-editor-toolbar .q-btn-group.row.inline {\n    display: block;\n    white-space: nowrap;\n  }\n  .q-toolbar,\n  .q-actionsheet-title,\n  .q-field-label-inner {\n    height: 0px;\n  }\n  .q-carousel-slide {\n    max-width: 100%;\n  }\n  .row > .col.q-alert-content {\n    flex-basis: auto;\n  }\n  .q-slider-handle > .q-chip.inline.row {\n    display: table;\n  }\n  a.q-btn:not(.q-btn-round) {\n    height: 0px;\n  }\n  .q-btn .q-btn-inner {\n    flex-basis: auto;\n  }\n  .q-btn:active .q-btn-inner,\n  .q-btn.active .q-btn-inner {\n    margin: -1px 1px 1px -1px;\n  }\n  .q-btn:active.q-btn-push .q-btn-inner,\n  .q-btn.active.q-btn-push .q-btn-inner {\n    margin: 1px 1px -1px -1px;\n  }\n  .q-btn:active.q-btn-push.disabled .q-btn-inner,\n  .q-btn.active.q-btn-push.disabled .q-btn-inner {\n    margin: -1px 1px 1px -1px;\n  }\n  .q-btn-group > .q-btn.q-btn-push:not(.disabled):active .q-btn-inner,\n  .q-btn-group > .q-btn.q-btn-push:not(.disabled).active .q-btn-inner {\n    margin: 0;\n  }\n  .q-chip:not(.q-chip-small):not(.q-chip-dense) .q-chip-main {\n    line-height: 32px;\n  }\n  .q-btn .q-chip {\n    display: inline-block;\n  }\n  .q-tab .q-chip .q-chip-main {\n    line-height: normal;\n  }\n  .q-fab-actions.q-fab-left,\n  .q-fab-actions.q-fab-right {\n    display: block;\n    white-space: nowrap;\n  }\n  .q-item-main {\n    min-width: 1px;\n  }\n  .q-layout-drawer-mini .q-item {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .q-modal-layout {\n    min-height: 80vh !important;\n    overflow: hidden;\n  }\n}\n@supports (-ms-ime-align: auto) {\n  .q-if > .q-if-inner {\n    flex-basis: auto;\n    display: inline-flex;\n  }\n  .q-if > .q-if-inner > div > .q-input-target {\n    flex-basis: auto;\n  }\n  .q-if > .q-if-inner > div > input.q-input-target {\n    min-width: 6rem;\n    flex-basis: 0% !important;\n  }\n  .q-input-target:before {\n    display: block;\n  }\n  .q-editor-toolbar .q-btn-group.row.inline {\n    display: block;\n    white-space: nowrap;\n  }\n  .q-toolbar,\n  .q-actionsheet-title,\n  .q-field-label-inner {\n    height: 0px;\n  }\n  .q-carousel-slide {\n    max-width: 100%;\n  }\n  .row > .col.q-alert-content {\n    flex-basis: auto;\n  }\n  .q-slider-handle > .q-chip.inline.row {\n    display: table;\n  }\n  a.q-btn:not(.q-btn-round) {\n    height: 0px;\n  }\n  .q-btn .q-btn-inner {\n    flex-basis: auto;\n  }\n  .q-btn:active .q-btn-inner,\n  .q-btn.active .q-btn-inner {\n    margin: -1px 1px 1px -1px;\n  }\n  .q-btn:active.q-btn-push .q-btn-inner,\n  .q-btn.active.q-btn-push .q-btn-inner {\n    margin: 1px 1px -1px -1px;\n  }\n  .q-btn:active.q-btn-push.disabled .q-btn-inner,\n  .q-btn.active.q-btn-push.disabled .q-btn-inner {\n    margin: -1px 1px 1px -1px;\n  }\n  .q-btn-group > .q-btn.q-btn-push:not(.disabled):active .q-btn-inner,\n  .q-btn-group > .q-btn.q-btn-push:not(.disabled).active .q-btn-inner {\n    margin: 0;\n  }\n  .q-chip:not(.q-chip-small):not(.q-chip-dense) .q-chip-main {\n    line-height: 32px;\n  }\n  .q-btn .q-chip {\n    display: inline-block;\n  }\n  .q-tab .q-chip .q-chip-main {\n    line-height: normal;\n  }\n  .q-fab-actions.q-fab-left,\n  .q-fab-actions.q-fab-right {\n    display: block;\n    white-space: nowrap;\n  }\n  .q-item-main {\n    min-width: 1px;\n  }\n  .q-layout-drawer-mini .q-item {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .q-modal-layout {\n    min-height: 80vh !important;\n    overflow: hidden;\n  }\n}\n@-moz-keyframes webkit-autofill-on {\n  to {\n    background: transparent;\n    color: #ff9800;\n  }\n}\n@-webkit-keyframes webkit-autofill-on {\n  to {\n    background: transparent;\n    color: #ff9800;\n  }\n}\n@-o-keyframes webkit-autofill-on {\n  to {\n    background: transparent;\n    color: #ff9800;\n  }\n}\n@keyframes webkit-autofill-on {\n  to {\n    background: transparent;\n    color: #ff9800;\n  }\n}\n@-moz-keyframes webkit-autofill-off {\n  to {\n    background: transparent;\n  }\n}\n@-webkit-keyframes webkit-autofill-off {\n  to {\n    background: transparent;\n  }\n}\n@-o-keyframes webkit-autofill-off {\n  to {\n    background: transparent;\n  }\n}\n@keyframes webkit-autofill-off {\n  to {\n    background: transparent;\n  }\n}\n@-moz-keyframes q-progress-indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n@-webkit-keyframes q-progress-indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n@-o-keyframes q-progress-indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n@keyframes q-progress-indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n@-moz-keyframes q-progress-indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-webkit-keyframes q-progress-indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-o-keyframes q-progress-indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@keyframes q-progress-indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-moz-keyframes q-progress-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-webkit-keyframes q-progress-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-o-keyframes q-progress-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes q-progress-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-moz-keyframes q-mat-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n@-webkit-keyframes q-mat-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n@-o-keyframes q-mat-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n@keyframes q-mat-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n@-moz-keyframes q-highlight {\n  0% {\n    background: #cddc39;\n  }\n  100% {\n    background: transparent;\n  }\n}\n@-webkit-keyframes q-highlight {\n  0% {\n    background: #cddc39;\n  }\n  100% {\n    background: transparent;\n  }\n}\n@-o-keyframes q-highlight {\n  0% {\n    background: #cddc39;\n  }\n  100% {\n    background: transparent;\n  }\n}\n@keyframes q-highlight {\n  0% {\n    background: #cddc39;\n  }\n  100% {\n    background: transparent;\n  }\n}\n@-moz-keyframes q-rotate {\n  0% {\n    transform: rotate(0) /* rtl:ignore */;\n  }\n  25% {\n    transform: rotate(90deg) /* rtl:ignore */;\n  }\n  50% {\n    transform: rotate(180deg) /* rtl:ignore */;\n  }\n  75% {\n    transform: rotate(270deg) /* rtl:ignore */;\n  }\n  100% {\n    transform: rotate(360deg) /* rtl:ignore */;\n  }\n}\n@-webkit-keyframes q-rotate {\n  0% {\n    transform: rotate(0) /* rtl:ignore */;\n  }\n  25% {\n    transform: rotate(90deg) /* rtl:ignore */;\n  }\n  50% {\n    transform: rotate(180deg) /* rtl:ignore */;\n  }\n  75% {\n    transform: rotate(270deg) /* rtl:ignore */;\n  }\n  100% {\n    transform: rotate(360deg) /* rtl:ignore */;\n  }\n}\n@-o-keyframes q-rotate {\n  0% {\n    transform: rotate(0) /* rtl:ignore */;\n  }\n  25% {\n    transform: rotate(90deg) /* rtl:ignore */;\n  }\n  50% {\n    transform: rotate(180deg) /* rtl:ignore */;\n  }\n  75% {\n    transform: rotate(270deg) /* rtl:ignore */;\n  }\n  100% {\n    transform: rotate(360deg) /* rtl:ignore */;\n  }\n}\n@keyframes q-rotate {\n  0% {\n    transform: rotate(0) /* rtl:ignore */;\n  }\n  25% {\n    transform: rotate(90deg) /* rtl:ignore */;\n  }\n  50% {\n    transform: rotate(180deg) /* rtl:ignore */;\n  }\n  75% {\n    transform: rotate(270deg) /* rtl:ignore */;\n  }\n  100% {\n    transform: rotate(360deg) /* rtl:ignore */;\n  }\n}\n@-moz-keyframes q-blink {\n  to {\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes q-blink {\n  to {\n    visibility: hidden;\n  }\n}\n@-o-keyframes q-blink {\n  to {\n    visibility: hidden;\n  }\n}\n@keyframes q-blink {\n  to {\n    visibility: hidden;\n  }\n}\n@-moz-keyframes q-spin {\n  0% {\n    transform: rotate(0deg) /* rtl:ignore */;\n  }\n  100% {\n    transform: rotate(359deg) /* rtl:ignore */;\n  }\n}\n@-webkit-keyframes q-spin {\n  0% {\n    transform: rotate(0deg) /* rtl:ignore */;\n  }\n  100% {\n    transform: rotate(359deg) /* rtl:ignore */;\n  }\n}\n@-o-keyframes q-spin {\n  0% {\n    transform: rotate(0deg) /* rtl:ignore */;\n  }\n  100% {\n    transform: rotate(359deg) /* rtl:ignore */;\n  }\n}\n@keyframes q-spin {\n  0% {\n    transform: rotate(0deg) /* rtl:ignore */;\n  }\n  100% {\n    transform: rotate(359deg) /* rtl:ignore */;\n  }\n}\n@-moz-keyframes q-pop {\n  0% {\n    opacity: 0;\n    transform: scale(0.7);\n  }\n  70% {\n    opacity: 1;\n    transform: scale(1.07);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes q-pop {\n  0% {\n    opacity: 0;\n    transform: scale(0.7);\n  }\n  70% {\n    opacity: 1;\n    transform: scale(1.07);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-o-keyframes q-pop {\n  0% {\n    opacity: 0;\n    transform: scale(0.7);\n  }\n  70% {\n    opacity: 1;\n    transform: scale(1.07);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes q-pop {\n  0% {\n    opacity: 0;\n    transform: scale(0.7);\n  }\n  70% {\n    opacity: 1;\n    transform: scale(1.07);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-moz-keyframes q-fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes q-fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-o-keyframes q-fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes q-fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-moz-keyframes q-scale {\n  0% {\n    opacity: 0;\n    transform: scale(0.7);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes q-scale {\n  0% {\n    opacity: 0;\n    transform: scale(0.7);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@-o-keyframes q-scale {\n  0% {\n    opacity: 0;\n    transform: scale(0.7);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes q-scale {\n  0% {\n    opacity: 0;\n    transform: scale(0.7);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@-moz-keyframes q-bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n}\n@-webkit-keyframes q-bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n}\n@-o-keyframes q-bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n}\n@keyframes q-bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n}\n@-moz-keyframes q-shake {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.02);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes q-shake {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.02);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-o-keyframes q-shake {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.02);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes q-shake {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.02);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-moz-keyframes q-popup-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-10px) scaleY(0.3);\n    pointer-events: none;\n  }\n  30% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes q-popup-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-10px) scaleY(0.3);\n    pointer-events: none;\n  }\n  30% {\n    opacity: 1;\n  }\n}\n@-o-keyframes q-popup-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-10px) scaleY(0.3);\n    pointer-events: none;\n  }\n  30% {\n    opacity: 1;\n  }\n}\n@keyframes q-popup-down {\n  0% {\n    opacity: 0;\n    transform: translateY(-10px) scaleY(0.3);\n    pointer-events: none;\n  }\n  30% {\n    opacity: 1;\n  }\n}\n@-moz-keyframes q-popup-up {\n  0% {\n    opacity: 0;\n    transform: translateY(10px) scaleY(0.3);\n    pointer-events: none;\n  }\n  30% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes q-popup-up {\n  0% {\n    opacity: 0;\n    transform: translateY(10px) scaleY(0.3);\n    pointer-events: none;\n  }\n  30% {\n    opacity: 1;\n  }\n}\n@-o-keyframes q-popup-up {\n  0% {\n    opacity: 0;\n    transform: translateY(10px) scaleY(0.3);\n    pointer-events: none;\n  }\n  30% {\n    opacity: 1;\n  }\n}\n@keyframes q-popup-up {\n  0% {\n    opacity: 0;\n    transform: translateY(10px) scaleY(0.3);\n    pointer-events: none;\n  }\n  30% {\n    opacity: 1;\n  }\n}\n@-moz-keyframes q-slide-left {\n  0% {\n    transform: translateX(-70%);\n  }\n}\n@-webkit-keyframes q-slide-left {\n  0% {\n    transform: translateX(-70%);\n  }\n}\n@-o-keyframes q-slide-left {\n  0% {\n    transform: translateX(-70%);\n  }\n}\n@keyframes q-slide-left {\n  0% {\n    transform: translateX(-70%);\n  }\n}\n@-moz-keyframes q-slide-right {\n  0% {\n    transform: translateX(70%);\n  }\n}\n@-webkit-keyframes q-slide-right {\n  0% {\n    transform: translateX(70%);\n  }\n}\n@-o-keyframes q-slide-right {\n  0% {\n    transform: translateX(70%);\n  }\n}\n@keyframes q-slide-right {\n  0% {\n    transform: translateX(70%);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/quasar-extras/animate sync recursive ^\\.\\/.*\\.css$":
/*!***************************************************************!*\
  !*** ./node_modules/quasar-extras/animate sync ^\.\/.*\.css$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bounce.css": "./node_modules/quasar-extras/animate/bounce.css",
	"./bounceIn.css": "./node_modules/quasar-extras/animate/bounceIn.css",
	"./bounceInDown.css": "./node_modules/quasar-extras/animate/bounceInDown.css",
	"./bounceInLeft.css": "./node_modules/quasar-extras/animate/bounceInLeft.css",
	"./bounceInRight.css": "./node_modules/quasar-extras/animate/bounceInRight.css",
	"./bounceInUp.css": "./node_modules/quasar-extras/animate/bounceInUp.css",
	"./bounceOut.css": "./node_modules/quasar-extras/animate/bounceOut.css",
	"./bounceOutDown.css": "./node_modules/quasar-extras/animate/bounceOutDown.css",
	"./bounceOutLeft.css": "./node_modules/quasar-extras/animate/bounceOutLeft.css",
	"./bounceOutRight.css": "./node_modules/quasar-extras/animate/bounceOutRight.css",
	"./bounceOutUp.css": "./node_modules/quasar-extras/animate/bounceOutUp.css",
	"./fadeIn.css": "./node_modules/quasar-extras/animate/fadeIn.css",
	"./fadeInDown.css": "./node_modules/quasar-extras/animate/fadeInDown.css",
	"./fadeInDownBig.css": "./node_modules/quasar-extras/animate/fadeInDownBig.css",
	"./fadeInLeft.css": "./node_modules/quasar-extras/animate/fadeInLeft.css",
	"./fadeInLeftBig.css": "./node_modules/quasar-extras/animate/fadeInLeftBig.css",
	"./fadeInRight.css": "./node_modules/quasar-extras/animate/fadeInRight.css",
	"./fadeInRightBig.css": "./node_modules/quasar-extras/animate/fadeInRightBig.css",
	"./fadeInUp.css": "./node_modules/quasar-extras/animate/fadeInUp.css",
	"./fadeInUpBig.css": "./node_modules/quasar-extras/animate/fadeInUpBig.css",
	"./fadeOut.css": "./node_modules/quasar-extras/animate/fadeOut.css",
	"./fadeOutDown.css": "./node_modules/quasar-extras/animate/fadeOutDown.css",
	"./fadeOutDownBig.css": "./node_modules/quasar-extras/animate/fadeOutDownBig.css",
	"./fadeOutLeft.css": "./node_modules/quasar-extras/animate/fadeOutLeft.css",
	"./fadeOutLeftBig.css": "./node_modules/quasar-extras/animate/fadeOutLeftBig.css",
	"./fadeOutRight.css": "./node_modules/quasar-extras/animate/fadeOutRight.css",
	"./fadeOutRightBig.css": "./node_modules/quasar-extras/animate/fadeOutRightBig.css",
	"./fadeOutUp.css": "./node_modules/quasar-extras/animate/fadeOutUp.css",
	"./fadeOutUpBig.css": "./node_modules/quasar-extras/animate/fadeOutUpBig.css",
	"./flash.css": "./node_modules/quasar-extras/animate/flash.css",
	"./flip.css": "./node_modules/quasar-extras/animate/flip.css",
	"./flipInX.css": "./node_modules/quasar-extras/animate/flipInX.css",
	"./flipInY.css": "./node_modules/quasar-extras/animate/flipInY.css",
	"./flipOutX.css": "./node_modules/quasar-extras/animate/flipOutX.css",
	"./flipOutY.css": "./node_modules/quasar-extras/animate/flipOutY.css",
	"./headShake.css": "./node_modules/quasar-extras/animate/headShake.css",
	"./hinge.css": "./node_modules/quasar-extras/animate/hinge.css",
	"./jello.css": "./node_modules/quasar-extras/animate/jello.css",
	"./lightSpeedIn.css": "./node_modules/quasar-extras/animate/lightSpeedIn.css",
	"./lightSpeedOut.css": "./node_modules/quasar-extras/animate/lightSpeedOut.css",
	"./pulse.css": "./node_modules/quasar-extras/animate/pulse.css",
	"./rollIn.css": "./node_modules/quasar-extras/animate/rollIn.css",
	"./rollOut.css": "./node_modules/quasar-extras/animate/rollOut.css",
	"./rotateIn.css": "./node_modules/quasar-extras/animate/rotateIn.css",
	"./rotateInDownLeft.css": "./node_modules/quasar-extras/animate/rotateInDownLeft.css",
	"./rotateInDownRight.css": "./node_modules/quasar-extras/animate/rotateInDownRight.css",
	"./rotateInUpLeft.css": "./node_modules/quasar-extras/animate/rotateInUpLeft.css",
	"./rotateInUpRight.css": "./node_modules/quasar-extras/animate/rotateInUpRight.css",
	"./rotateOut.css": "./node_modules/quasar-extras/animate/rotateOut.css",
	"./rotateOutDownLeft.css": "./node_modules/quasar-extras/animate/rotateOutDownLeft.css",
	"./rotateOutDownRight.css": "./node_modules/quasar-extras/animate/rotateOutDownRight.css",
	"./rotateOutUpLeft.css": "./node_modules/quasar-extras/animate/rotateOutUpLeft.css",
	"./rotateOutUpRight.css": "./node_modules/quasar-extras/animate/rotateOutUpRight.css",
	"./rubberBand.css": "./node_modules/quasar-extras/animate/rubberBand.css",
	"./shake.css": "./node_modules/quasar-extras/animate/shake.css",
	"./slideInDown.css": "./node_modules/quasar-extras/animate/slideInDown.css",
	"./slideInLeft.css": "./node_modules/quasar-extras/animate/slideInLeft.css",
	"./slideInRight.css": "./node_modules/quasar-extras/animate/slideInRight.css",
	"./slideInUp.css": "./node_modules/quasar-extras/animate/slideInUp.css",
	"./slideOutDown.css": "./node_modules/quasar-extras/animate/slideOutDown.css",
	"./slideOutLeft.css": "./node_modules/quasar-extras/animate/slideOutLeft.css",
	"./slideOutRight.css": "./node_modules/quasar-extras/animate/slideOutRight.css",
	"./slideOutUp.css": "./node_modules/quasar-extras/animate/slideOutUp.css",
	"./swing.css": "./node_modules/quasar-extras/animate/swing.css",
	"./tada.css": "./node_modules/quasar-extras/animate/tada.css",
	"./wobble.css": "./node_modules/quasar-extras/animate/wobble.css",
	"./zoomIn.css": "./node_modules/quasar-extras/animate/zoomIn.css",
	"./zoomInDown.css": "./node_modules/quasar-extras/animate/zoomInDown.css",
	"./zoomInLeft.css": "./node_modules/quasar-extras/animate/zoomInLeft.css",
	"./zoomInRight.css": "./node_modules/quasar-extras/animate/zoomInRight.css",
	"./zoomInUp.css": "./node_modules/quasar-extras/animate/zoomInUp.css",
	"./zoomOut.css": "./node_modules/quasar-extras/animate/zoomOut.css",
	"./zoomOutDown.css": "./node_modules/quasar-extras/animate/zoomOutDown.css",
	"./zoomOutLeft.css": "./node_modules/quasar-extras/animate/zoomOutLeft.css",
	"./zoomOutRight.css": "./node_modules/quasar-extras/animate/zoomOutRight.css",
	"./zoomOutUp.css": "./node_modules/quasar-extras/animate/zoomOutUp.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/quasar-extras/animate sync recursive ^\\.\\/.*\\.css$";

/***/ }),

/***/ "./node_modules/quasar-extras/animate.js":
/*!***********************************************!*\
  !*** ./node_modules/quasar-extras/animate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function requireAll (r) { r.keys().forEach(r) }
requireAll(
  __webpack_require__("./node_modules/quasar-extras/animate sync recursive ^\\.\\/.*\\.css$")
)


/***/ }),

/***/ "./node_modules/quasar-extras/animate/bounce.css":
/*!*******************************************************!*\
  !*** ./node_modules/quasar-extras/animate/bounce.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./bounce.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounce.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/bounceIn.css":
/*!*********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/bounceIn.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./bounceIn.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceIn.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/bounceInDown.css":
/*!*************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/bounceInDown.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./bounceInDown.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceInDown.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/bounceInLeft.css":
/*!*************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/bounceInLeft.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./bounceInLeft.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceInLeft.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/bounceInRight.css":
/*!**************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/bounceInRight.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./bounceInRight.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceInRight.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/bounceInUp.css":
/*!***********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/bounceInUp.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./bounceInUp.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceInUp.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/bounceOut.css":
/*!**********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/bounceOut.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./bounceOut.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceOut.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/bounceOutDown.css":
/*!**************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/bounceOutDown.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./bounceOutDown.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceOutDown.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/bounceOutLeft.css":
/*!**************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/bounceOutLeft.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./bounceOutLeft.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceOutLeft.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/bounceOutRight.css":
/*!***************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/bounceOutRight.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./bounceOutRight.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceOutRight.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/bounceOutUp.css":
/*!************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/bounceOutUp.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./bounceOutUp.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/bounceOutUp.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeIn.css":
/*!*******************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeIn.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeIn.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeIn.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeInDown.css":
/*!***********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeInDown.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeInDown.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInDown.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeInDownBig.css":
/*!**************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeInDownBig.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeInDownBig.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInDownBig.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeInLeft.css":
/*!***********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeInLeft.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeInLeft.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInLeft.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeInLeftBig.css":
/*!**************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeInLeftBig.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeInLeftBig.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInLeftBig.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeInRight.css":
/*!************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeInRight.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeInRight.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInRight.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeInRightBig.css":
/*!***************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeInRightBig.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeInRightBig.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInRightBig.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeInUp.css":
/*!*********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeInUp.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeInUp.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInUp.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeInUpBig.css":
/*!************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeInUpBig.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeInUpBig.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeInUpBig.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeOut.css":
/*!********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeOut.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeOut.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOut.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeOutDown.css":
/*!************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeOutDown.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeOutDown.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutDown.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeOutDownBig.css":
/*!***************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeOutDownBig.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeOutDownBig.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutDownBig.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeOutLeft.css":
/*!************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeOutLeft.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeOutLeft.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutLeft.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeOutLeftBig.css":
/*!***************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeOutLeftBig.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeOutLeftBig.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutLeftBig.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeOutRight.css":
/*!*************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeOutRight.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeOutRight.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutRight.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeOutRightBig.css":
/*!****************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeOutRightBig.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeOutRightBig.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutRightBig.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeOutUp.css":
/*!**********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeOutUp.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeOutUp.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutUp.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/fadeOutUpBig.css":
/*!*************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/fadeOutUpBig.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fadeOutUpBig.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/fadeOutUpBig.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/flash.css":
/*!******************************************************!*\
  !*** ./node_modules/quasar-extras/animate/flash.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./flash.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/flash.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/flip.css":
/*!*****************************************************!*\
  !*** ./node_modules/quasar-extras/animate/flip.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./flip.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/flip.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/flipInX.css":
/*!********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/flipInX.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./flipInX.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/flipInX.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/flipInY.css":
/*!********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/flipInY.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./flipInY.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/flipInY.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/flipOutX.css":
/*!*********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/flipOutX.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./flipOutX.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/flipOutX.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/flipOutY.css":
/*!*********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/flipOutY.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./flipOutY.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/flipOutY.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/headShake.css":
/*!**********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/headShake.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./headShake.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/headShake.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/hinge.css":
/*!******************************************************!*\
  !*** ./node_modules/quasar-extras/animate/hinge.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./hinge.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/hinge.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/jello.css":
/*!******************************************************!*\
  !*** ./node_modules/quasar-extras/animate/jello.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./jello.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/jello.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/lightSpeedIn.css":
/*!*************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/lightSpeedIn.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./lightSpeedIn.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/lightSpeedIn.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/lightSpeedOut.css":
/*!**************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/lightSpeedOut.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./lightSpeedOut.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/lightSpeedOut.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/pulse.css":
/*!******************************************************!*\
  !*** ./node_modules/quasar-extras/animate/pulse.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./pulse.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/pulse.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/rollIn.css":
/*!*******************************************************!*\
  !*** ./node_modules/quasar-extras/animate/rollIn.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./rollIn.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rollIn.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/rollOut.css":
/*!********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/rollOut.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./rollOut.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rollOut.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/rotateIn.css":
/*!*********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/rotateIn.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./rotateIn.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateIn.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/rotateInDownLeft.css":
/*!*****************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/rotateInDownLeft.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./rotateInDownLeft.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateInDownLeft.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/rotateInDownRight.css":
/*!******************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/rotateInDownRight.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./rotateInDownRight.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateInDownRight.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/rotateInUpLeft.css":
/*!***************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/rotateInUpLeft.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./rotateInUpLeft.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateInUpLeft.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/rotateInUpRight.css":
/*!****************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/rotateInUpRight.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./rotateInUpRight.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateInUpRight.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/rotateOut.css":
/*!**********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/rotateOut.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./rotateOut.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateOut.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/rotateOutDownLeft.css":
/*!******************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/rotateOutDownLeft.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./rotateOutDownLeft.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateOutDownLeft.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/rotateOutDownRight.css":
/*!*******************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/rotateOutDownRight.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./rotateOutDownRight.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateOutDownRight.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/rotateOutUpLeft.css":
/*!****************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/rotateOutUpLeft.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./rotateOutUpLeft.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateOutUpLeft.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/rotateOutUpRight.css":
/*!*****************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/rotateOutUpRight.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./rotateOutUpRight.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rotateOutUpRight.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/rubberBand.css":
/*!***********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/rubberBand.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./rubberBand.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/rubberBand.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/shake.css":
/*!******************************************************!*\
  !*** ./node_modules/quasar-extras/animate/shake.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./shake.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/shake.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/slideInDown.css":
/*!************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/slideInDown.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./slideInDown.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideInDown.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/slideInLeft.css":
/*!************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/slideInLeft.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./slideInLeft.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideInLeft.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/slideInRight.css":
/*!*************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/slideInRight.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./slideInRight.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideInRight.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/slideInUp.css":
/*!**********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/slideInUp.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./slideInUp.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideInUp.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/slideOutDown.css":
/*!*************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/slideOutDown.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./slideOutDown.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideOutDown.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/slideOutLeft.css":
/*!*************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/slideOutLeft.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./slideOutLeft.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideOutLeft.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/slideOutRight.css":
/*!**************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/slideOutRight.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./slideOutRight.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideOutRight.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/slideOutUp.css":
/*!***********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/slideOutUp.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./slideOutUp.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/slideOutUp.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/swing.css":
/*!******************************************************!*\
  !*** ./node_modules/quasar-extras/animate/swing.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./swing.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/swing.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/tada.css":
/*!*****************************************************!*\
  !*** ./node_modules/quasar-extras/animate/tada.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./tada.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/tada.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/wobble.css":
/*!*******************************************************!*\
  !*** ./node_modules/quasar-extras/animate/wobble.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./wobble.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/wobble.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/zoomIn.css":
/*!*******************************************************!*\
  !*** ./node_modules/quasar-extras/animate/zoomIn.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./zoomIn.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomIn.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/zoomInDown.css":
/*!***********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/zoomInDown.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./zoomInDown.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomInDown.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/zoomInLeft.css":
/*!***********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/zoomInLeft.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./zoomInLeft.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomInLeft.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/zoomInRight.css":
/*!************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/zoomInRight.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./zoomInRight.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomInRight.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/zoomInUp.css":
/*!*********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/zoomInUp.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./zoomInUp.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomInUp.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/zoomOut.css":
/*!********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/zoomOut.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./zoomOut.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomOut.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/zoomOutDown.css":
/*!************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/zoomOutDown.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./zoomOutDown.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomOutDown.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/zoomOutLeft.css":
/*!************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/zoomOutLeft.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./zoomOutLeft.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomOutLeft.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/zoomOutRight.css":
/*!*************************************************************!*\
  !*** ./node_modules/quasar-extras/animate/zoomOutRight.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./zoomOutRight.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomOutRight.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/animate/zoomOutUp.css":
/*!**********************************************************!*\
  !*** ./node_modules/quasar-extras/animate/zoomOutUp.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./zoomOutUp.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/animate/zoomOutUp.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/fontawesome.js":
/*!***************************************************!*\
  !*** ./node_modules/quasar-extras/fontawesome.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./fontawesome/fontawesome.css */ "./node_modules/quasar-extras/fontawesome/fontawesome.css")


/***/ }),

/***/ "./node_modules/quasar-extras/fontawesome/fa-brands-400.woff":
/*!*******************************************************************!*\
  !*** ./node_modules/quasar-extras/fontawesome/fa-brands-400.woff ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8b7a9afd7b95f62e6ee8a72930bfb9ed.woff";

/***/ }),

/***/ "./node_modules/quasar-extras/fontawesome/fa-brands-400.woff2":
/*!********************************************************************!*\
  !*** ./node_modules/quasar-extras/fontawesome/fa-brands-400.woff2 ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "659c4d58b00226541ef95c3a76e169c5.woff2";

/***/ }),

/***/ "./node_modules/quasar-extras/fontawesome/fa-regular-400.woff":
/*!********************************************************************!*\
  !*** ./node_modules/quasar-extras/fontawesome/fa-regular-400.woff ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0b5e3a5451fc62d9023ccafc85bc89db.woff";

/***/ }),

/***/ "./node_modules/quasar-extras/fontawesome/fa-regular-400.woff2":
/*!*********************************************************************!*\
  !*** ./node_modules/quasar-extras/fontawesome/fa-regular-400.woff2 ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bdadb6ce95c5a2e7b673940721450d3c.woff2";

/***/ }),

/***/ "./node_modules/quasar-extras/fontawesome/fa-solid-900.woff":
/*!******************************************************************!*\
  !*** ./node_modules/quasar-extras/fontawesome/fa-solid-900.woff ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bcb927a742a8370b76642fd1a9a749c0.woff";

/***/ }),

/***/ "./node_modules/quasar-extras/fontawesome/fa-solid-900.woff2":
/*!*******************************************************************!*\
  !*** ./node_modules/quasar-extras/fontawesome/fa-solid-900.woff2 ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fb493903265cad425ccdf8e04fc2de61.woff2";

/***/ }),

/***/ "./node_modules/quasar-extras/fontawesome/fontawesome.css":
/*!****************************************************************!*\
  !*** ./node_modules/quasar-extras/fontawesome/fontawesome.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./fontawesome.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/fontawesome/fontawesome.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/ionicons.js":
/*!************************************************!*\
  !*** ./node_modules/quasar-extras/ionicons.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./ionicons/ionicons.css */ "./node_modules/quasar-extras/ionicons/ionicons.css")


/***/ }),

/***/ "./node_modules/quasar-extras/ionicons/ionicons.css":
/*!**********************************************************!*\
  !*** ./node_modules/quasar-extras/ionicons/ionicons.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./ionicons.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/ionicons/ionicons.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/ionicons/ionicons.woff":
/*!***********************************************************!*\
  !*** ./node_modules/quasar-extras/ionicons/ionicons.woff ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a21b9e1aad96623ef91bca7ecea7b169.woff";

/***/ }),

/***/ "./node_modules/quasar-extras/ionicons/ionicons.woff2":
/*!************************************************************!*\
  !*** ./node_modules/quasar-extras/ionicons/ionicons.woff2 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "43d5c718339efeb1177aff722d72669d.woff2";

/***/ }),

/***/ "./node_modules/quasar-extras/material-icons.js":
/*!******************************************************!*\
  !*** ./node_modules/quasar-extras/material-icons.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./material-icons/material-icons.css */ "./node_modules/quasar-extras/material-icons/material-icons.css")


/***/ }),

/***/ "./node_modules/quasar-extras/material-icons/material-icons.css":
/*!**********************************************************************!*\
  !*** ./node_modules/quasar-extras/material-icons/material-icons.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./material-icons.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/material-icons/material-icons.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/material-icons/web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff":
/*!**********************************************************************************************!*\
  !*** ./node_modules/quasar-extras/material-icons/web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c38ebd3cd38c98fbd16bf31d1d24ce64.woff";

/***/ }),

/***/ "./node_modules/quasar-extras/material-icons/web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/quasar-extras/material-icons/web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2 ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8a9a261c8b8dfe90db11f1817a9d22e1.woff2";

/***/ }),

/***/ "./node_modules/quasar-extras/mdi.js":
/*!*******************************************!*\
  !*** ./node_modules/quasar-extras/mdi.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./mdi/mdi.css */ "./node_modules/quasar-extras/mdi/mdi.css")


/***/ }),

/***/ "./node_modules/quasar-extras/mdi/mdi.css":
/*!************************************************!*\
  !*** ./node_modules/quasar-extras/mdi/mdi.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./mdi.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/mdi/mdi.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/mdi/mdi.woff":
/*!*************************************************!*\
  !*** ./node_modules/quasar-extras/mdi/mdi.woff ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5d43a6f507961589ab369ccc6f6d301b.woff";

/***/ }),

/***/ "./node_modules/quasar-extras/mdi/mdi.woff2":
/*!**************************************************!*\
  !*** ./node_modules/quasar-extras/mdi/mdi.woff2 ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6536e4067e72c89cd3f1530d83e9888c.woff2";

/***/ }),

/***/ "./node_modules/quasar-extras/roboto-font.js":
/*!***************************************************!*\
  !*** ./node_modules/quasar-extras/roboto-font.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./roboto-font/roboto-font.css */ "./node_modules/quasar-extras/roboto-font/roboto-font.css")


/***/ }),

/***/ "./node_modules/quasar-extras/roboto-font/roboto-font.css":
/*!****************************************************************!*\
  !*** ./node_modules/quasar-extras/roboto-font/roboto-font.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!./roboto-font.css */ "./node_modules/css-loader/index.js!./node_modules/quasar-extras/roboto-font/roboto-font.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/quasar-extras/roboto-font/web-font/KFOkCnqEu92Fr1MmgVxIIzQ.woff":
/*!**************************************************************************************!*\
  !*** ./node_modules/quasar-extras/roboto-font/web-font/KFOkCnqEu92Fr1MmgVxIIzQ.woff ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e9dbbe8a693dd275c16d32feb101f1c1.woff";

/***/ }),

/***/ "./node_modules/quasar-extras/roboto-font/web-font/KFOlCnqEu92Fr1MmEU9fBBc-.woff":
/*!***************************************************************************************!*\
  !*** ./node_modules/quasar-extras/roboto-font/web-font/KFOlCnqEu92Fr1MmEU9fBBc-.woff ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "de8b7431b74642e830af4d4f4b513ec9.woff";

/***/ }),

/***/ "./node_modules/quasar-extras/roboto-font/web-font/KFOlCnqEu92Fr1MmSU5fBBc-.woff":
/*!***************************************************************************************!*\
  !*** ./node_modules/quasar-extras/roboto-font/web-font/KFOlCnqEu92Fr1MmSU5fBBc-.woff ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a1471d1d6431c893582a5f6a250db3f9.woff";

/***/ }),

/***/ "./node_modules/quasar-extras/roboto-font/web-font/KFOlCnqEu92Fr1MmWUlfBBc-.woff":
/*!***************************************************************************************!*\
  !*** ./node_modules/quasar-extras/roboto-font/web-font/KFOlCnqEu92Fr1MmWUlfBBc-.woff ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cf6613d1adf490972c557a8e318e0868.woff";

/***/ }),

/***/ "./node_modules/quasar-extras/roboto-font/web-font/KFOlCnqEu92Fr1MmYUtfBBc-.woff":
/*!***************************************************************************************!*\
  !*** ./node_modules/quasar-extras/roboto-font/web-font/KFOlCnqEu92Fr1MmYUtfBBc-.woff ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8c2ade503b34e31430d6c98aa29a52a3.woff";

/***/ }),

/***/ "./node_modules/quasar-extras/roboto-font/web-font/KFOmCnqEu92Fr1Mu4mxM.woff":
/*!***********************************************************************************!*\
  !*** ./node_modules/quasar-extras/roboto-font/web-font/KFOmCnqEu92Fr1Mu4mxM.woff ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bafb105baeb22d965c70fe52ba6b49d9.woff";

/***/ }),

/***/ "./node_modules/quasar-framework/dist/quasar.mat.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/quasar-framework/dist/quasar.mat.esm.js ***!
  \**************************************************************/
/*! exports provided: default, QActionSheet, QAjaxBar, QAlert, QAutocomplete, QBreadcrumbs, QBreadcrumbsEl, QBtn, QBtnGroup, QBtnDropdown, QBtnToggle, QCard, QCardTitle, QCardMain, QCardActions, QCardMedia, QCardSeparator, QCarousel, QCarouselSlide, QCarouselControl, QChatMessage, QCheckbox, QChip, QChipsInput, QCollapsible, QColor, QColorPicker, QContextMenu, QDatetime, QDatetimePicker, QDialog, QEditor, QFab, QFabAction, QField, QIcon, QInfiniteScroll, QInnerLoading, QInput, QInputFrame, QJumbotron, QKnob, QLayout, QLayoutDrawer, QLayoutFooter, QLayoutHeader, QPage, QPageContainer, QPageSticky, QItem, QItemSeparator, QItemMain, QItemSide, QItemTile, QItemWrapper, QList, QListHeader, QModal, QModalLayout, QNoSsr, QResizeObservable, QScrollObservable, QWindowResizeObservable, QOptionGroup, QPagination, QParallax, QPopover, QPopupEdit, QProgress, QPullToRefresh, QRadio, QRange, QRating, QScrollArea, QSearch, QSelect, QSlideTransition, QSlider, QSpinner, QSpinnerAudio, QSpinnerBall, QSpinnerBars, QSpinnerCircles, QSpinnerComment, QSpinnerCube, QSpinnerDots, QSpinnerFacebook, QSpinnerGears, QSpinnerGrid, QSpinnerHearts, QSpinnerHourglass, QSpinnerInfinity, QSpinnerIos, QSpinnerMat, QSpinnerOval, QSpinnerPie, QSpinnerPuff, QSpinnerRadio, QSpinnerRings, QSpinnerTail, QStep, QStepper, QStepperNavigation, QRouteTab, QTab, QTabPane, QTabs, QTable, QTh, QTr, QTd, QTableColumns, QTimeline, QTimelineEntry, QToggle, QToolbar, QToolbarTitle, QTooltip, QTree, QUploader, QVideo, BackToTop, CloseOverlay, GoBack, Ripple, ScrollFire, Scroll, TouchHold, TouchPan, TouchSwipe, ActionSheet, AddressbarColor, AppFullscreen, AppVisibility, Cookies, Dialog, LoadingBar, Loading, Meta, Notify, Platform, Screen, LocalStorage, SessionStorage, animate, clone, colors, date, debounce, dom, easing, event, extend, filter, format, frameDebounce, noop, openURL, scroll, throttle, uid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QActionSheet", function() { return QActionSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QAjaxBar", function() { return QAjaxBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QAlert", function() { return QAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QAutocomplete", function() { return QAutocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QBreadcrumbs", function() { return QBreadcrumbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QBreadcrumbsEl", function() { return QBreadcrumbsEl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QBtn", function() { return QBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QBtnGroup", function() { return QBtnGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QBtnDropdown", function() { return QBtnDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QBtnToggle", function() { return QBtnToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QCard", function() { return QCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QCardTitle", function() { return QCardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QCardMain", function() { return QCardMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QCardActions", function() { return QCardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QCardMedia", function() { return QCardMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QCardSeparator", function() { return QCardSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QCarousel", function() { return QCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QCarouselSlide", function() { return QCarouselSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QCarouselControl", function() { return QCarouselControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QChatMessage", function() { return QChatMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QCheckbox", function() { return QCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QChip", function() { return QChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QChipsInput", function() { return QChipsInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QCollapsible", function() { return QCollapsible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QColor", function() { return QColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QColorPicker", function() { return QColorPicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QContextMenu", function() { return QContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QDatetime", function() { return QDatetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QDatetimePicker", function() { return QDatetimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QDialog", function() { return QDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QEditor", function() { return QEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QFab", function() { return QFab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QFabAction", function() { return QFabAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QField", function() { return QField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QIcon", function() { return QIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QInfiniteScroll", function() { return QInfiniteScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QInnerLoading", function() { return QInnerLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QInput", function() { return QInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QInputFrame", function() { return QInputFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QJumbotron", function() { return QJumbotron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QKnob", function() { return QKnob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QLayout", function() { return QLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QLayoutDrawer", function() { return QLayoutDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QLayoutFooter", function() { return QLayoutFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QLayoutHeader", function() { return QLayoutHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QPage", function() { return QPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QPageContainer", function() { return QPageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QPageSticky", function() { return QPageSticky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QItem", function() { return QItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QItemSeparator", function() { return QItemSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QItemMain", function() { return QItemMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QItemSide", function() { return QItemSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QItemTile", function() { return QItemTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QItemWrapper", function() { return QItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QList", function() { return QList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QListHeader", function() { return QListHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QModal", function() { return QModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QModalLayout", function() { return QModalLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QNoSsr", function() { return QNoSsr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QResizeObservable", function() { return QResizeObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QScrollObservable", function() { return QScrollObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QWindowResizeObservable", function() { return QWindowResizeObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QOptionGroup", function() { return QOptionGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QPagination", function() { return QPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QParallax", function() { return QParallax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QPopover", function() { return QPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QPopupEdit", function() { return QPopupEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QProgress", function() { return QProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QPullToRefresh", function() { return QPullToRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRadio", function() { return QRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRange", function() { return QRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRating", function() { return QRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QScrollArea", function() { return QScrollArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSearch", function() { return QSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSelect", function() { return QSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSlideTransition", function() { return QSlideTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSlider", function() { return QSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinner", function() { return QSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerAudio", function() { return QSpinnerAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerBall", function() { return QSpinnerBall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerBars", function() { return QSpinnerBars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerCircles", function() { return QSpinnerCircles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerComment", function() { return QSpinnerComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerCube", function() { return QSpinnerCube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerDots", function() { return QSpinnerDots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerFacebook", function() { return QSpinnerFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerGears", function() { return QSpinnerGears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerGrid", function() { return QSpinnerGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerHearts", function() { return QSpinnerHearts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerHourglass", function() { return QSpinnerHourglass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerInfinity", function() { return QSpinnerInfinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerIos", function() { return QSpinner_ios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerMat", function() { return DefaultSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerOval", function() { return QSpinnerOval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerPie", function() { return QSpinnerPie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerPuff", function() { return QSpinnerPuff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerRadio", function() { return QSpinnerRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerRings", function() { return QSpinnerRings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSpinnerTail", function() { return QSpinnerTail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QStep", function() { return QStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QStepper", function() { return QStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QStepperNavigation", function() { return QStepperNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRouteTab", function() { return QRouteTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QTab", function() { return QTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QTabPane", function() { return QTabPane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QTabs", function() { return QTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QTable", function() { return QTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QTh", function() { return QTh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QTr", function() { return QTr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QTd", function() { return QTd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QTableColumns", function() { return QTableColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QTimeline", function() { return QTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QTimelineEntry", function() { return QTimelineEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QToggle", function() { return QToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QToolbar", function() { return QToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QToolbarTitle", function() { return QToolbarTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QTooltip", function() { return QTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QTree", function() { return QTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUploader", function() { return QUploader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QVideo", function() { return QVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackToTop", function() { return backToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseOverlay", function() { return closeOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoBack", function() { return goBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollFire", function() { return scrollFire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scroll", function() { return scroll$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchHold", function() { return touchHold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchPan", function() { return TouchPan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchSwipe", function() { return TouchSwipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheet", function() { return actionSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressbarColor", function() { return addressbarColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFullscreen", function() { return appFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppVisibility", function() { return appVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cookies", function() { return cookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBar", function() { return loadingBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return loading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notify", function() { return notify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return screen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return localStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorage", function() { return sessionStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frameDebounce", function() { return frameDebounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openURL", function() { return openUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
/*!
 * Quasar Framework v0.17.18
 * (c) 2016-present Razvan Stoenescu
 * Released under the MIT License.
 */

/***/ }),

/***/ "./node_modules/quasar-framework/dist/quasar.mat.styl":
/*!************************************************************!*\
  !*** ./node_modules/quasar-framework/dist/quasar.mat.styl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../css-loader!../../stylus-loader!./quasar.mat.styl */ "./node_modules/css-loader/index.js!./node_modules/stylus-loader/index.js!./node_modules/quasar-framework/dist/quasar.mat.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/*!************************************************!*\
  !*** ./node_modules/style-loader/addStyles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.esm.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.esm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.21
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) { var repeat, classify, classifyRE, hasConsole; }

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (false) {}
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {}
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "production" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {}
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {}
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {}
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {}

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  
  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {}
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {}
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {}
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {}
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    try {
      return fn.apply(null, arguments)
    } finally {
      useMacroTask = false;    
    }
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (false) { var perf; }

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) { var getHandler, hasHandler, isBuiltInModifier, hasProxy, warnReservedPrefix, warnNonPresent, allowedGlobals; }

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) { var keyInLowerCase; }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }

      if (renderCompleted) {
        contexts.length = 0;
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? (undefined)
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) { var lowerCaseEvent; }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {}
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {} else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {}

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {}
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {}
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {}
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (false) {}
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? undefined
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) { var hyphenatedKey; } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {}
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {}

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {}
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (false) {}
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {}
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {}
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {} else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {}
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {}
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        if (!(key in hash) && !(camelizedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + camelizedKey)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (false) {}
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {}
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {}
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {} else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {} else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {}
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {}

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {} else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {}

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if (false
  ) {}
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {}

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {}
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {}
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.21';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {}

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {}
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {}
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {}

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (false) {}
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {}
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {}
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    false
  ) {}

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (false) {}

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (false) {}

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (false) { var binding, typeBinding, value$1; }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {}

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {}

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {}

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {}

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) { var name, opts; }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {}
    }
    if (false
    ) {}
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (false) { var res; }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (false) { var res; }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (false) {}
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (false
        ) {}
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "production" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (false) {}
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (false) {}
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (false) {}
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (false) { var parent, iterator; }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (false) {}
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (false) {}
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (false) {}
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (false) {}
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (false) {}
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (false) {}
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (
          false
        ) {}
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (false) {}
      }
    } else {
      // literal attribute
      if (false) { var res; }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      false
    ) {}
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (false) {}
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !(isReservedTag(el.tag) && !el.component); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "production" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (false
  ) {}

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (false) {}
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (false) {}

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (false) {}

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (false) {}

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (false) {}
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "production" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (false) {}
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (false) {}
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (false) {}

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (false) {}
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js */ "../../../../AppData/Roaming/npm/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/timers-browserify/main.js */ "../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./resources/assets/js/app.js":
/*!************************************!*\
  !*** ./resources/assets/js/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

var _vue2 = _interopRequireDefault(_vue);

__webpack_require__(/*! quasar-extras/material-icons */ "./node_modules/quasar-extras/material-icons.js");

__webpack_require__(/*! quasar-extras/fontawesome */ "./node_modules/quasar-extras/fontawesome.js");

__webpack_require__(/*! quasar-extras/mdi */ "./node_modules/quasar-extras/mdi.js");

__webpack_require__(/*! quasar-extras/ionicons */ "./node_modules/quasar-extras/ionicons.js");

__webpack_require__(/*! quasar-extras/roboto-font */ "./node_modules/quasar-extras/roboto-font.js");

__webpack_require__(/*! quasar-extras/animate */ "./node_modules/quasar-extras/animate.js");

__webpack_require__(/*! quasar-framework/dist/quasar.mat.styl */ "./node_modules/quasar-framework/dist/quasar.mat.styl");

var _quasarMat = __webpack_require__(/*! quasar-framework/dist/quasar.mat.esm */ "./node_modules/quasar-framework/dist/quasar.mat.esm.js");

var All = _interopRequireWildcard(_quasarMat);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Stilos de Quasar
// Quasar Styles
window.__THEME__ = 'mat';
_vue2.default.use(All.default, {
    components: All,
    directives: All,
    plugins: All,
    animations: All
});

new _vue2.default({
    el: 'main',
    data: function data() {
        return {
            vueMessage: 'Message from Vue'
        };
    },
    mounted: function mounted() {
        this.$q.notify('Message');
    }
});

/***/ })

/******/ });
//# sourceMappingURL=app.js.map