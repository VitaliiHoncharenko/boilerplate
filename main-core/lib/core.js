'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault$1(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = _interopDefault$1(require('react'));

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = '.auth_scss-test__3h4nv{margin-top:50px;color:#000;font-size:30px}';
var styles = {
  'scss-test': 'auth_scss-test__3h4nv'
};
styleInject(css);

var AuthContainer = function AuthContainer() {
  return React.createElement('div', {
    className: styles['scss-test']
  }, 'I am auth container');
};

var GamesContainer = function GamesContainer() {
  return React.createElement('div', null, 'I am games container');
};

var log = function log() {
  return console.log('log from core test');
};

exports.log = log;
exports.AuthContainer = AuthContainer;
exports.GamesContainer = GamesContainer;
