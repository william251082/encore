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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/assets/js/RepLogApp.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/assets/js/RepLogApp.js":
/*!***************************************!*\
  !*** ./public/assets/js/RepLogApp.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Helper = __webpack_require__(/*! ./RepLogHelper */ \"./public/assets/js/RepLogHelper.js\");\n\n(function (window, $, Routing, swal) {\n  var HelperInstances = new WeakMap();\n\n  var RepLogApp =\n  /*#__PURE__*/\n  function () {\n    function RepLogApp($wrapper) {\n      _classCallCheck(this, RepLogApp);\n\n      this.$wrapper = $wrapper;\n      this.repLogs = [];\n      HelperInstances.set(this, new Helper(this.repLogs));\n      this.loadRepLogs();\n      this.$wrapper.on('click', '.js-delete-rep-log', this.handleRepLogDelete.bind(this));\n      this.$wrapper.on('click', 'tbody tr', this.handleRowClick.bind(this));\n      this.$wrapper.on('submit', RepLogApp._selectors.newRepForm, this.handleNewFormSubmit.bind(this));\n    }\n    /**\n     * Call like this.selectors\n     */\n\n\n    _createClass(RepLogApp, [{\n      key: \"loadRepLogs\",\n      value: function loadRepLogs() {\n        var _this = this;\n\n        $.ajax({\n          url: Routing.generate('rep_log_list')\n        }).then(function (data) {\n          var _iteratorNormalCompletion = true;\n          var _didIteratorError = false;\n          var _iteratorError = undefined;\n\n          try {\n            for (var _iterator = data.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n              var repLog = _step.value;\n\n              _this._addRow(repLog);\n            }\n          } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n          } finally {\n            try {\n              if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n                _iterator[\"return\"]();\n              }\n            } finally {\n              if (_didIteratorError) {\n                throw _iteratorError;\n              }\n            }\n          }\n        });\n      }\n    }, {\n      key: \"updateTotalWeightLifted\",\n      value: function updateTotalWeightLifted() {\n        this.$wrapper.find('.js-total-weight').html(HelperInstances.get(this).getTotalWeightString());\n      }\n    }, {\n      key: \"handleRepLogDelete\",\n      value: function handleRepLogDelete(e) {\n        var _this2 = this;\n\n        e.preventDefault();\n        var $link = $(e.currentTarget);\n        swal({\n          title: 'Delete this log?',\n          text: 'What? Did you not actually lift this?',\n          showCancelButton: true,\n          showLoaderOnConfirm: true,\n          preConfirm: function preConfirm() {\n            return _this2._deleteRepLog($link);\n          }\n        });\n      }\n    }, {\n      key: \"_deleteRepLog\",\n      value: function _deleteRepLog($link) {\n        var _this3 = this;\n\n        $link.addClass('text-danger');\n        $link.find('.fa').removeClass('fa-trash').addClass('fa-spinner').addClass('fa-spin');\n        var deleteUrl = $link.data('url');\n        var $row = $link.closest('tr');\n        return $.ajax({\n          url: deleteUrl,\n          method: 'DELETE'\n        }).then(function () {\n          $row.fadeOut('normal', function () {\n            // we need to remove the repLog from this.repLogs\n            // the \"key\" is the index to this repLog on this.repLogs\n            _this3.repLogs.splice($row.data('key'), 1);\n\n            $row.remove();\n\n            _this3.updateTotalWeightLifted();\n          });\n        });\n      }\n    }, {\n      key: \"handleRowClick\",\n      value: function handleRowClick() {\n        console.log('row clicked!');\n      }\n    }, {\n      key: \"handleNewFormSubmit\",\n      value: function handleNewFormSubmit(e) {\n        var _this4 = this;\n\n        e.preventDefault();\n        var $form = $(e.currentTarget);\n        var formData = {};\n        var _iteratorNormalCompletion2 = true;\n        var _didIteratorError2 = false;\n        var _iteratorError2 = undefined;\n\n        try {\n          for (var _iterator2 = $form.serializeArray()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n            var fieldData = _step2.value;\n            formData[fieldData.name] = fieldData.value;\n          }\n        } catch (err) {\n          _didIteratorError2 = true;\n          _iteratorError2 = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n              _iterator2[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError2) {\n              throw _iteratorError2;\n            }\n          }\n        }\n\n        this._saveRepLog(formData).then(function (data) {\n          _this4._clearForm();\n\n          _this4._addRow(data);\n        })[\"catch\"](function (errorData) {\n          _this4._mapErrorsToForm(errorData.errors);\n        });\n      }\n    }, {\n      key: \"_saveRepLog\",\n      value: function _saveRepLog(data) {\n        return new Promise(function (resolve, reject) {\n          var url = Routing.generate('rep_log_new');\n          $.ajax({\n            url: url,\n            method: 'POST',\n            data: JSON.stringify(data)\n          }).then(function (data, textStatus, jqXHR) {\n            $.ajax({\n              url: jqXHR.getResponseHeader('Location')\n            }).then(function (data) {\n              // we're finally done!\n              resolve(data);\n            });\n          })[\"catch\"](function (jqXHR) {\n            var errorData = JSON.parse(jqXHR.responseText);\n            reject(errorData);\n          });\n        });\n      }\n    }, {\n      key: \"_mapErrorsToForm\",\n      value: function _mapErrorsToForm(errorData) {\n        this._removeFormErrors();\n\n        var $form = this.$wrapper.find(RepLogApp._selectors.newRepForm);\n        var _iteratorNormalCompletion3 = true;\n        var _didIteratorError3 = false;\n        var _iteratorError3 = undefined;\n\n        try {\n          for (var _iterator3 = $form.find(':input')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n            var element = _step3.value;\n            var fieldName = $(element).attr('name');\n            var $wrapper = $(element).closest('.form-group');\n\n            if (!errorData[fieldName]) {\n              // no error!\n              return;\n            }\n\n            var $error = $('<span class=\"js-field-error help-block\"></span>');\n            $error.html(errorData[fieldName]);\n            $wrapper.append($error);\n            $wrapper.addClass('has-error');\n          }\n        } catch (err) {\n          _didIteratorError3 = true;\n          _iteratorError3 = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n              _iterator3[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError3) {\n              throw _iteratorError3;\n            }\n          }\n        }\n      }\n    }, {\n      key: \"_removeFormErrors\",\n      value: function _removeFormErrors() {\n        var $form = this.$wrapper.find(RepLogApp._selectors.newRepForm);\n        $form.find('.js-field-error').remove();\n        $form.find('.form-group').removeClass('has-error');\n      }\n    }, {\n      key: \"_clearForm\",\n      value: function _clearForm() {\n        this._removeFormErrors();\n\n        var $form = this.$wrapper.find(RepLogApp._selectors.newRepForm);\n        $form[0].reset();\n      }\n    }, {\n      key: \"_addRow\",\n      value: function _addRow(repLog) {\n        this.repLogs.push(repLog); // destructuring example\n        // let {id, itemLabel, reps, totallyMadeUpKey = 'whatever!'} = repLog;\n        // console.log(id, itemLabel, reps, totallyMadeUpKey);\n\n        var html = rowTemplate(repLog);\n        var $row = $($.parseHTML(html)); // store the repLogs index\n\n        $row.data('key', this.repLogs.length - 1);\n        this.$wrapper.find('tbody').append($row);\n        this.updateTotalWeightLifted();\n      }\n    }], [{\n      key: \"_selectors\",\n      get: function get() {\n        return {\n          newRepForm: '.js-new-rep-log-form'\n        };\n      }\n    }]);\n\n    return RepLogApp;\n  }();\n\n  var rowTemplate = function rowTemplate(repLog) {\n    return \"\\n<tr data-weight=\\\"\".concat(repLog.totalWeightLifted, \"\\\">\\n    <td>\").concat(repLog.itemLabel, \"</td>\\n    <td>\").concat(repLog.reps, \"</td>\\n    <td>\").concat(repLog.totalWeightLifted, \"</td>\\n    <td>\\n        <a href=\\\"#\\\"\\n           class=\\\"js-delete-rep-log\\\"\\n           data-url=\\\"\").concat(repLog.links._self, \"\\\"\\n        >\\n            <span class=\\\"fa fa-trash\\\"></span>\\n        </a>\\n    </td>\\n</tr>\\n\");\n  };\n\n  window.RepLogApp = RepLogApp;\n})(window, jQuery, Routing, swal);\n\n//# sourceURL=webpack:///./public/assets/js/RepLogApp.js?");

/***/ }),

/***/ "./public/assets/js/RepLogHelper.js":
/*!******************************************!*\
  !*** ./public/assets/js/RepLogHelper.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Helper =\n/*#__PURE__*/\nfunction () {\n  \"use strict\";\n\n  function Helper(repLogs) {\n    _classCallCheck(this, Helper);\n\n    this.repLogs = repLogs;\n  }\n\n  _createClass(Helper, [{\n    key: \"calculateTotalWeight\",\n    value: function calculateTotalWeight() {\n      return Helper._calculateWeights(this.repLogs);\n    }\n  }, {\n    key: \"getTotalWeightString\",\n    value: function getTotalWeightString() {\n      var maxWeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;\n      var weight = this.calculateTotalWeight();\n\n      if (weight > maxWeight) {\n        weight = maxWeight + '+';\n      }\n\n      return weight + ' lbs';\n    }\n  }], [{\n    key: \"_calculateWeights\",\n    value: function _calculateWeights(repLogs) {\n      var totalWeight = 0;\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = repLogs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var repLog = _step.value;\n          totalWeight += repLog.totalWeightLifted;\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return totalWeight;\n    }\n  }]);\n\n  return Helper;\n}();\n\nmodule.exports = Helper;\n\n//# sourceURL=webpack:///./public/assets/js/RepLogHelper.js?");

/***/ })

/******/ });