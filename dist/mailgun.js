/*! mailgun.js v3.4.0 */
/*! mailgun.js v3.4.0 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mailgun"] = factory();
	else
		root["mailgun"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/abort-controller/dist/abort-controller.js":
/*!****************************************************************!*\
  !*** ./node_modules/abort-controller/dist/abort-controller.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */


Object.defineProperty(exports, "__esModule", ({ value: true }));

var eventTargetShim = __webpack_require__(/*! event-target-shim */ "./node_modules/event-target-shim/dist/event-target-shim.js");

/**
 * The signal class.
 * @see https://dom.spec.whatwg.org/#abortsignal
 */
class AbortSignal extends eventTargetShim.EventTarget {
    /**
     * AbortSignal cannot be constructed directly.
     */
    constructor() {
        super();
        throw new TypeError("AbortSignal cannot be constructed directly");
    }
    /**
     * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.
     */
    get aborted() {
        const aborted = abortedFlags.get(this);
        if (typeof aborted !== "boolean") {
            throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
        }
        return aborted;
    }
}
eventTargetShim.defineEventAttribute(AbortSignal.prototype, "abort");
/**
 * Create an AbortSignal object.
 */
function createAbortSignal() {
    const signal = Object.create(AbortSignal.prototype);
    eventTargetShim.EventTarget.call(signal);
    abortedFlags.set(signal, false);
    return signal;
}
/**
 * Abort a given signal.
 */
function abortSignal(signal) {
    if (abortedFlags.get(signal) !== false) {
        return;
    }
    abortedFlags.set(signal, true);
    signal.dispatchEvent({ type: "abort" });
}
/**
 * Aborted flag for each instances.
 */
const abortedFlags = new WeakMap();
// Properties should be enumerable.
Object.defineProperties(AbortSignal.prototype, {
    aborted: { enumerable: true },
});
// `toString()` should return `"[object AbortSignal]"`
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
    Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortSignal",
    });
}

/**
 * The AbortController.
 * @see https://dom.spec.whatwg.org/#abortcontroller
 */
class AbortController {
    /**
     * Initialize this controller.
     */
    constructor() {
        signals.set(this, createAbortSignal());
    }
    /**
     * Returns the `AbortSignal` object associated with this object.
     */
    get signal() {
        return getSignal(this);
    }
    /**
     * Abort and signal to any observers that the associated activity is to be aborted.
     */
    abort() {
        abortSignal(getSignal(this));
    }
}
/**
 * Associated signals.
 */
const signals = new WeakMap();
/**
 * Get the associated signal of a given controller.
 */
function getSignal(controller) {
    const signal = signals.get(controller);
    if (signal == null) {
        throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? "null" : typeof controller}`);
    }
    return signal;
}
// Properties should be enumerable.
Object.defineProperties(AbortController.prototype, {
    signal: { enumerable: true },
    abort: { enumerable: true },
});
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
    Object.defineProperty(AbortController.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortController",
    });
}

exports.AbortController = AbortController;
exports.AbortSignal = AbortSignal;
exports.default = AbortController;

module.exports = AbortController
module.exports.AbortController = module.exports.default = AbortController
module.exports.AbortSignal = AbortSignal
//# sourceMappingURL=abort-controller.js.map


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var client_1 = __importDefault(__webpack_require__(/*! ./lib/client */ "./lib/client.ts"));

var Mailgun =
/** @class */
function () {
  function Mailgun(FormData) {
    this.formData = FormData;
  }

  Mailgun.prototype.client = function (options) {
    return new client_1.default(options, this.formData);
  };

  return Mailgun;
}();

exports.default = Mailgun;
;

/***/ }),

/***/ "./lib/client.ts":
/*!***********************!*\
  !*** ./lib/client.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var request_1 = __importDefault(__webpack_require__(/*! ./request */ "./lib/request.ts"));

var domains_1 = __importDefault(__webpack_require__(/*! ./domains */ "./lib/domains.ts"));

var events_1 = __importDefault(__webpack_require__(/*! ./events */ "./lib/events.ts"));

var stats_1 = __importDefault(__webpack_require__(/*! ./stats */ "./lib/stats.ts"));

var suppressions_1 = __importDefault(__webpack_require__(/*! ./suppressions */ "./lib/suppressions.ts"));

var webhooks_1 = __importDefault(__webpack_require__(/*! ./webhooks */ "./lib/webhooks.ts"));

var messages_1 = __importDefault(__webpack_require__(/*! ./messages */ "./lib/messages.ts"));

var routes_1 = __importDefault(__webpack_require__(/*! ./routes */ "./lib/routes.ts"));

var validate_1 = __importDefault(__webpack_require__(/*! ./validate */ "./lib/validate.ts"));

var parse_1 = __importDefault(__webpack_require__(/*! ./parse */ "./lib/parse.ts"));

var ips_1 = __importDefault(__webpack_require__(/*! ./ips */ "./lib/ips.ts"));

var ip_pools_1 = __importDefault(__webpack_require__(/*! ./ip-pools */ "./lib/ip-pools.ts"));

var lists_1 = __importDefault(__webpack_require__(/*! ./lists */ "./lib/lists.ts"));

var mailListMembers_1 = __importDefault(__webpack_require__(/*! ./mailListMembers */ "./lib/mailListMembers.ts"));

var Client =
/** @class */
function () {
  function Client(options, formData) {
    var config = __assign({}, options);

    if (!config.url) {
      config.url = 'https://api.mailgun.net';
    }

    if (!config.username) {
      throw new Error('Parameter "username" is required');
    }

    if (!config.key) {
      throw new Error('Parameter "key" is required');
    }
    /** @internal */


    this.request = new request_1.default(config, formData);
    var mailListsMembers = new mailListMembers_1.default(this.request);
    this.domains = new domains_1.default(this.request);
    this.webhooks = new webhooks_1.default(this.request);
    this.events = new events_1.default(this.request);
    this.stats = new stats_1.default(this.request);
    this.suppressions = new suppressions_1.default(this.request);
    this.messages = new messages_1.default(this.request);
    this.routes = new routes_1.default(this.request);
    this.ips = new ips_1.default(this.request);
    this.ip_pools = new ip_pools_1.default(this.request);
    this.lists = new lists_1.default(this.request, mailListsMembers);

    if (config.public_key) {
      config.key = config.public_key;
      this.public_request = new request_1.default(config, formData);
      this.validate = new validate_1.default(this.public_request);
      this.parse = new parse_1.default(this.public_request);
    }
  }

  return Client;
}();

exports.default = Client;

/***/ }),

/***/ "./lib/domains.ts":
/*!************************!*\
  !*** ./lib/domains.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var url_join_1 = __importDefault(__webpack_require__(/*! url-join */ "./node_modules/url-join/lib/url-join.js"));

var Domain =
/** @class */
function () {
  function Domain(data, receiving, sending) {
    this.name = data.name;
    this.require_tls = data.require_tls;
    this.skip_verification = data.skip_verification;
    this.state = data.state;
    this.wildcard = data.wildcard;
    this.spam_action = data.spam_action;
    this.created_at = data.created_at;
    this.smtp_password = data.smtp_password;
    this.smtp_login = data.smtp_login;
    this.type = data.type;
    this.receiving_dns_records = receiving || null;
    this.sending_dns_records = sending || null;
  }

  return Domain;
}();

var DomainClient =
/** @class */
function () {
  function DomainClient(request) {
    this.request = request;
  }

  DomainClient.prototype._parseMessage = function (response) {
    return response.body;
  };

  DomainClient.prototype._parseDomainList = function (response) {
    return response.body.items.map(function (item) {
      return new Domain(item);
    });
  };

  DomainClient.prototype._parseDomain = function (response) {
    return new Domain(response.body.domain, response.body.receiving_dns_records, response.body.sending_dns_records);
  };

  DomainClient.prototype._parseTrackingSettings = function (response) {
    return response.body.tracking;
  };

  DomainClient.prototype._parseTrackingUpdate = function (response) {
    return response.body;
  };

  DomainClient.prototype.list = function (query) {
    return this.request.get('/v2/domains', query).then(this._parseDomainList);
  };

  DomainClient.prototype.get = function (domain) {
    return this.request.get("/v2/domains/" + domain).then(this._parseDomain);
  };

  DomainClient.prototype.create = function (data) {
    return this.request.post('/v2/domains', data).then(this._parseDomain);
  };

  DomainClient.prototype.destroy = function (domain) {
    return this.request.delete("/v2/domains/" + domain).then(this._parseMessage);
  }; // Tracking


  DomainClient.prototype.getTracking = function (domain) {
    return this.request.get(url_join_1.default('/v2/domains', domain, 'tracking')).then(this._parseTrackingSettings);
  };

  DomainClient.prototype.updateTracking = function (domain, type, data) {
    return this.request.put(url_join_1.default('/v2/domains', domain, 'tracking', type), data).then(this._parseTrackingUpdate);
  }; // IPs


  DomainClient.prototype.getIps = function (domain) {
    return this.request.get(url_join_1.default('/v2/domains', domain, 'ips')).then(function (response) {
      var _a;

      return (_a = response === null || response === void 0 ? void 0 : response.body) === null || _a === void 0 ? void 0 : _a.items;
    });
  };

  DomainClient.prototype.assignIp = function (domain, ip) {
    return this.request.post(url_join_1.default('/v2/domains', domain, 'ips'), {
      ip: ip
    });
  };

  DomainClient.prototype.deleteIp = function (domain, ip) {
    return this.request.delete(url_join_1.default('/v2/domains', domain, 'ips', ip));
  };

  DomainClient.prototype.linkIpPool = function (domain, pool_id) {
    return this.request.post(url_join_1.default('/v2/domains', domain, 'ips'), {
      pool_id: pool_id
    });
  };

  DomainClient.prototype.unlinkIpPoll = function (domain, pool_id, ip) {
    return this.request.delete(url_join_1.default('/v2/domains', domain, 'ips', 'ip_pool'), {
      pool_id: pool_id,
      ip: ip
    });
  };

  return DomainClient;
}();

exports.default = DomainClient;

/***/ }),

/***/ "./lib/error.ts":
/*!**********************!*\
  !*** ./lib/error.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var APIError =
/** @class */
function (_super) {
  __extends(APIError, _super);

  function APIError(_a) {
    var status = _a.status,
        statusText = _a.statusText,
        message = _a.message,
        _b = _a.body,
        body = _b === void 0 ? {} : _b;

    var _this = this;

    var bodyMessage = body.message,
        error = body.error;
    _this = _super.call(this) || this;
    _this.stack = '';
    _this.status = status;
    _this.message = message || error || statusText;
    _this.details = bodyMessage;
    return _this;
  }

  return APIError;
}(Error);

exports.default = APIError;

/***/ }),

/***/ "./lib/events.ts":
/*!***********************!*\
  !*** ./lib/events.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var urljoin = __webpack_require__(/*! url-join */ "./node_modules/url-join/lib/url-join.js");

var MgRequest = __webpack_require__(/*! ./request */ "./lib/request.ts");

var EventClient =
/** @class */
function () {
  function EventClient(request) {
    this.request = request;
  }

  EventClient.prototype._parsePageNumber = function (url) {
    return url.split('/').pop();
  };

  EventClient.prototype._parsePage = function (id, url) {
    return {
      id: id,
      number: this._parsePageNumber(url),
      url: url
    };
  };

  EventClient.prototype._parsePageLinks = function (response) {
    var _this = this;

    var pages = Object.entries(response.body.paging);
    return pages.reduce(function (acc, _a) {
      var id = _a[0],
          url = _a[1];
      acc[id] = _this._parsePage(id, url);
      return acc;
    }, {});
  };

  EventClient.prototype._parseEventList = function (response) {
    return {
      items: response.body.items,
      pages: this._parsePageLinks(response)
    };
  };

  EventClient.prototype.get = function (domain, query) {
    var _this = this;

    var url;

    if (query && query.page) {
      url = urljoin('/v2', domain, 'events', query.page);
      delete query.page;
    } else {
      url = urljoin('/v2', domain, 'events');
    }

    return this.request.get(url, query).then(function (response) {
      return _this._parseEventList(response);
    });
  };

  return EventClient;
}();

exports.default = EventClient;

/***/ }),

/***/ "./lib/ip-pools.ts":
/*!*************************!*\
  !*** ./lib/ip-pools.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var MgRequest = __webpack_require__(/*! ./request */ "./lib/request.ts");

var IpPoolsClient =
/** @class */
function () {
  function IpPoolsClient(request) {
    this.request = request;
  }

  IpPoolsClient.prototype.list = function (query) {
    var _this = this;

    return this.request.get('/v1/ip_pools', query).then(function (response) {
      return _this.parseIpPoolsResponse(response);
    });
  };

  IpPoolsClient.prototype.create = function (data) {
    return this.request.post('/v1/ip_pools', data).then(function (response) {
      return response === null || response === void 0 ? void 0 : response.body;
    });
  };

  IpPoolsClient.prototype.update = function (poolId, data) {
    return this.request.patch("/v1/ip_pools/" + poolId, data).then(function (response) {
      return response === null || response === void 0 ? void 0 : response.body;
    });
  };

  IpPoolsClient.prototype.delete = function (poolId, data) {
    return this.request.delete("/v1/ip_pools/" + poolId, data).then(function (response) {
      return response === null || response === void 0 ? void 0 : response.body;
    });
  };

  IpPoolsClient.prototype.parseIpPoolsResponse = function (response) {
    return response.body.ip_pools;
  };

  return IpPoolsClient;
}();

exports.default = IpPoolsClient;

/***/ }),

/***/ "./lib/ips.ts":
/*!********************!*\
  !*** ./lib/ips.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var MgRequest = __webpack_require__(/*! ./request */ "./lib/request.ts");

var IpsClient =
/** @class */
function () {
  function IpsClient(request) {
    this.request = request;
  }

  IpsClient.prototype.list = function (query) {
    var _this = this;

    return this.request.get('/v3/ips', query).then(function (response) {
      return _this.parseIpsResponse(response);
    });
  };

  IpsClient.prototype.get = function (ip) {
    var _this = this;

    return this.request.get("/v3/ips/" + ip).then(function (response) {
      return _this.parseIpsResponse(response);
    });
  };

  IpsClient.prototype.parseIpsResponse = function (response) {
    return response.body;
  };

  return IpsClient;
}();

exports.default = IpsClient;

/***/ }),

/***/ "./lib/lists.ts":
/*!**********************!*\
  !*** ./lib/lists.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var ListsClient =
/** @class */
function () {
  function ListsClient(request, members) {
    this.request = request;
    this.baseRoute = '/v3/lists';
    this.members = members;
  }

  ListsClient.prototype.list = function (query) {
    return this.request.get(this.baseRoute + "/pages", query).then(function (response) {
      return response.body.items;
    });
  };

  ListsClient.prototype.get = function (mailListAddress) {
    return this.request.get(this.baseRoute + "/" + mailListAddress).then(function (response) {
      return response.body.list;
    });
  };

  ListsClient.prototype.create = function (data) {
    return this.request.postMulti(this.baseRoute, data).then(function (response) {
      return response.body.list;
    });
  };

  ListsClient.prototype.update = function (mailListAddress, data) {
    return this.request.putMulti(this.baseRoute + "/" + mailListAddress, data).then(function (response) {
      return response.body.list;
    });
  };

  ListsClient.prototype.destroy = function (mailListAddress) {
    return this.request.delete(this.baseRoute + "/" + mailListAddress).then(function (response) {
      return response.body;
    });
  };

  return ListsClient;
}();

exports.default = ListsClient;

/***/ }),

/***/ "./lib/mailListMembers.ts":
/*!********************************!*\
  !*** ./lib/mailListMembers.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var MailListsMembers =
/** @class */
function () {
  function MailListsMembers(request) {
    this.request = request;
    this.baseRoute = '/v3/lists';
  }

  MailListsMembers.prototype.checkAndUpdateData = function (data) {
    var newData = __assign({}, data);

    if (typeof data.vars === 'object') {
      newData.vars = JSON.stringify(newData.vars);
    }

    if (typeof data.subscribed === 'boolean') {
      newData.subscribed = data.subscribed ? 'yes' : 'no';
    }

    return newData;
  };

  MailListsMembers.prototype.listMembers = function (mailListAddress, query) {
    return this.request.get(this.baseRoute + "/" + mailListAddress + "/members/pages", query).then(function (response) {
      return response.body.items;
    });
  };

  MailListsMembers.prototype.getMember = function (mailListAddress, mailListMemberAddress) {
    return this.request.get(this.baseRoute + "/" + mailListAddress + "/members/" + mailListMemberAddress).then(function (response) {
      return response.body.member;
    });
  };

  MailListsMembers.prototype.createMember = function (mailListAddress, data) {
    var reqData = this.checkAndUpdateData(data);
    return this.request.postMulti(this.baseRoute + "/" + mailListAddress + "/members", reqData).then(function (response) {
      return response.body.member;
    });
  };

  MailListsMembers.prototype.createMembers = function (mailListAddress, data) {
    var newData = {
      members: Array.isArray(data.members) ? JSON.stringify(data.members) : data.members,
      upsert: data.upsert
    };
    return this.request.postMulti(this.baseRoute + "/" + mailListAddress + "/members.json", newData).then(function (response) {
      return response.body;
    });
  };

  MailListsMembers.prototype.updateMember = function (mailListAddress, mailListMemberAddress, data) {
    var reqData = this.checkAndUpdateData(data);
    return this.request.putMulti(this.baseRoute + "/" + mailListAddress + "/members/" + mailListMemberAddress, reqData).then(function (response) {
      return response.body.member;
    });
  };

  MailListsMembers.prototype.destroyMember = function (mailListAddress, mailListMemberAddress) {
    return this.request.delete(this.baseRoute + "/" + mailListAddress + "/members/" + mailListMemberAddress).then(function (response) {
      return response.body;
    });
  };

  return MailListsMembers;
}();

exports.default = MailListsMembers;

/***/ }),

/***/ "./lib/messages.ts":
/*!*************************!*\
  !*** ./lib/messages.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var MessagesClient =
/** @class */
function () {
  function MessagesClient(request) {
    this.request = request;
  }

  MessagesClient.prototype._parseResponse = function (response) {
    if (response.body) {
      return response.body;
    }

    return response;
  };

  MessagesClient.prototype.create = function (domain, data) {
    if (data.message) {
      return this.request.postMulti("/v3/" + domain + "/messages.mime", data).then(this._parseResponse);
    }

    return this.request.postMulti("/v3/" + domain + "/messages", data).then(this._parseResponse);
  };

  return MessagesClient;
}();

exports.default = MessagesClient;

/***/ }),

/***/ "./lib/parse.ts":
/*!**********************!*\
  !*** ./lib/parse.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var ParseClient =
/** @class */
function () {
  function ParseClient(request) {
    this.request = request;
  }

  ParseClient.prototype.get = function (addresses, enableDnsEspChecks) {
    var query = {};

    if (Array.isArray(addresses)) {
      addresses = addresses.join(',');
    }

    query.addresses = addresses;

    if (enableDnsEspChecks) {
      query.syntax_only = false;
    }

    return this.request.get('/v3/address/parse', query).then(function (response) {
      return response.body;
    });
  };

  return ParseClient;
}();

exports.default = ParseClient;

/***/ }),

/***/ "./lib/request.ts":
/*!************************!*\
  !*** ./lib/request.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var btoa_1 = __importDefault(__webpack_require__(/*! btoa */ "./node_modules/btoa/index.js"));

var url_join_1 = __importDefault(__webpack_require__(/*! url-join */ "./node_modules/url-join/lib/url-join.js"));

var ky_universal_1 = __importDefault(__webpack_require__(/*! ky-universal */ "./node_modules/ky-universal/index.js"));

var error_1 = __importDefault(__webpack_require__(/*! ./error */ "./lib/error.ts"));

var isStream = function (attachment) {
  return typeof attachment === 'object' && typeof attachment.pipe === 'function';
};

var getAttachmentOptions = function (item) {
  if (typeof item !== 'object' || isStream(item)) return {};
  var filename = item.filename,
      contentType = item.contentType,
      knownLength = item.knownLength;
  return __assign(__assign(__assign({}, filename ? {
    filename: filename
  } : {
    filename: 'file'
  }), contentType && {
    contentType: contentType
  }), knownLength && {
    knownLength: knownLength
  });
};

var streamToString = function (stream) {
  var chunks = [];
  return new Promise(function (resolve, reject) {
    stream.on('data', function (chunk) {
      return chunks.push(chunk);
    });
    stream.on('error', reject);
    stream.on('end', function () {
      return resolve(Buffer.concat(chunks).toString('utf8'));
    });
  });
};

var Request =
/** @class */
function () {
  function Request(options, formData) {
    this.username = options.username;
    this.key = options.key;
    this.url = options.url;
    this.timeout = options.timeout;
    this.headers = options.headers || {};
    this.formData = formData;
  }

  Request.prototype.objectToURLSearchParams = function (data) {
    var urlencodedData = new URLSearchParams();
    if (!data) return null;
    Object.entries(data).forEach(function (_a) {
      var key = _a[0],
          value = _a[1];
      return urlencodedData.append(key, value);
    });
    return urlencodedData;
  };

  Request.prototype.request = function (method, url, inputOptions) {
    return __awaiter(this, void 0, void 0, function () {
      var options, basic, headers, params, response, message, _a;

      var _b;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            options = __assign({}, inputOptions);
            basic = btoa_1.default(this.username + ":" + this.key);
            headers = __assign(__assign({
              Authorization: "Basic " + basic
            }, this.headers), options === null || options === void 0 ? void 0 : options.headers);
            options === null || options === void 0 ? true : delete options.headers;

            if (!headers['Content-Type']) {
              // for form-data it will be Null so we need to remove it
              delete headers['Content-Type'];
            }

            params = __assign({}, options);

            if ((options === null || options === void 0 ? void 0 : options.query) && Object.getOwnPropertyNames(options === null || options === void 0 ? void 0 : options.query).length > 0) {
              params.searchParams = options.query;
              delete params.query;
            }

            return [4
            /*yield*/
            , ky_universal_1.default(url_join_1.default(this.url, url), __assign({
              method: method.toLocaleUpperCase(),
              headers: headers,
              throwHttpErrors: false,
              timeout: this.timeout
            }, params))];

          case 1:
            response = _c.sent();
            if (!!(response === null || response === void 0 ? void 0 : response.ok)) return [3
            /*break*/
            , 6];
            if (!((response === null || response === void 0 ? void 0 : response.body) && isStream(response.body))) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , streamToString(response.body)];

          case 2:
            _a = _c.sent();
            return [3
            /*break*/
            , 5];

          case 3:
            return [4
            /*yield*/
            , response === null || response === void 0 ? void 0 : response.json()];

          case 4:
            _a = _c.sent();
            _c.label = 5;

          case 5:
            message = _a;
            throw new error_1.default({
              status: response === null || response === void 0 ? void 0 : response.status,
              statusText: response === null || response === void 0 ? void 0 : response.statusText,
              body: {
                message: message
              }
            });

          case 6:
            _b = {};
            return [4
            /*yield*/
            , response === null || response === void 0 ? void 0 : response.json()];

          case 7:
            return [2
            /*return*/
            , (_b.body = _c.sent(), _b.status = response === null || response === void 0 ? void 0 : response.status, _b)];
        }
      });
    });
  };

  Request.prototype.query = function (method, url, query, options) {
    return this.request(method, url, __assign({
      query: query
    }, options));
  };

  Request.prototype.command = function (method, url, data, options) {
    return this.request(method, url, __assign({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    }, options));
  };

  Request.prototype.get = function (url, query, options) {
    return this.query('get', url, query, options);
  };

  Request.prototype.head = function (url, query, options) {
    return this.query('head', url, query, options);
  };

  Request.prototype.options = function (url, query, options) {
    return this.query('options', url, query, options);
  };

  Request.prototype.post = function (url, data, options) {
    return this.command('post', url, this.objectToURLSearchParams(data), options);
  };

  Request.prototype.postMulti = function (url, data) {
    var params = {
      headers: {
        'Content-Type': null
      }
    };
    var formData = this.createFormData(data);
    return this.command('post', url, formData, params);
  };

  Request.prototype.putMulti = function (url, data) {
    var params = {
      headers: {
        'Content-Type': null
      }
    };
    var formData = this.createFormData(data);
    return this.command('put', url, formData, params);
  };

  Request.prototype.createFormData = function (data) {
    var formData = Object.keys(data).filter(function (key) {
      return data[key];
    }).reduce(function (formDataAcc, key) {
      if (key === 'attachment' || key === 'inline') {
        var obj = data[key];

        if (Array.isArray(obj)) {
          obj.forEach(function (item) {
            var itemData = isStream(item) ? item : item.data;
            var options = getAttachmentOptions(item);
            formDataAcc.append(key, itemData, options);
          });
        } else {
          var objData = isStream(obj) ? obj : obj.data;
          var options = getAttachmentOptions(obj);
          formDataAcc.append(key, objData, options);
        }

        return formDataAcc;
      }

      if (Array.isArray(data[key])) {
        data[key].forEach(function (item) {
          formDataAcc.append(key, item);
        });
      } else if (data[key] != null) {
        formDataAcc.append(key, data[key]);
      }

      return formDataAcc; // eslint-disable-next-line new-cap
    }, new this.formData());
    return formData;
  };

  Request.prototype.put = function (url, data, options) {
    return this.command('put', url, this.objectToURLSearchParams(data), options);
  };

  Request.prototype.patch = function (url, data, options) {
    return this.command('patch', url, this.objectToURLSearchParams(data), options);
  };

  Request.prototype.delete = function (url, data, options) {
    return this.command('delete', url, this.objectToURLSearchParams(data), options);
  };

  return Request;
}();

exports.default = Request;

/***/ }),

/***/ "./lib/routes.ts":
/*!***********************!*\
  !*** ./lib/routes.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var RoutesClient =
/** @class */
function () {
  function RoutesClient(request) {
    this.request = request;
  }

  RoutesClient.prototype.list = function (query) {
    return this.request.get('/v3/routes', query).then(function (response) {
      return response.body.items;
    });
  };

  RoutesClient.prototype.get = function (id) {
    return this.request.get("/v3/routes/" + id).then(function (response) {
      return response.body.route;
    });
  };

  RoutesClient.prototype.create = function (data) {
    return this.request.post('/v3/routes', data).then(function (response) {
      return response.body.route;
    });
  };

  RoutesClient.prototype.update = function (id, data) {
    return this.request.put("/v3/routes/" + id, data).then(function (response) {
      return response.body;
    });
  };

  RoutesClient.prototype.destroy = function (id) {
    return this.request.delete("/v3/routes/" + id).then(function (response) {
      return response.body;
    });
  };

  return RoutesClient;
}();

exports.default = RoutesClient;

/***/ }),

/***/ "./lib/stats.ts":
/*!**********************!*\
  !*** ./lib/stats.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var url_join_1 = __importDefault(__webpack_require__(/*! url-join */ "./node_modules/url-join/lib/url-join.js"));

var Stats =
/** @class */
function () {
  function Stats(data) {
    this.start = new Date(data.start);
    this.end = new Date(data.end);
    this.resolution = data.resolution;
    this.stats = data.stats.map(function (stat) {
      stat.time = new Date(stat.time);
      return stat;
    });
  }

  return Stats;
}();

var StatsClient =
/** @class */
function () {
  function StatsClient(request) {
    this.request = request;
  }

  StatsClient.prototype._parseStats = function (response) {
    return new Stats(response.body);
  };

  StatsClient.prototype.getDomain = function (domain, query) {
    return this.request.get(url_join_1.default('/v3', domain, 'stats/total'), query).then(this._parseStats);
  };

  StatsClient.prototype.getAccount = function (query) {
    return this.request.get('/v3/stats/total', query).then(this._parseStats);
  };

  return StatsClient;
}();

exports.default = StatsClient;

/***/ }),

/***/ "./lib/suppressions.ts":
/*!*****************************!*\
  !*** ./lib/suppressions.ts ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var url_1 = __importDefault(__webpack_require__(/*! url */ "url"));

var url_join_1 = __importDefault(__webpack_require__(/*! url-join */ "./node_modules/url-join/lib/url-join.js"));

var createOptions = {
  headers: {
    'Content-Type': 'application/json'
  }
};

var Bounce =
/** @class */
function () {
  function Bounce(data) {
    this.type = 'bounces';
    this.address = data.address;
    this.code = +data.code;
    this.error = data.error;
    this.created_at = new Date(data.created_at);
  }

  return Bounce;
}();

var Complaint =
/** @class */
function () {
  function Complaint(data) {
    this.type = 'complaints';
    this.address = data.address;
    this.created_at = new Date(data.created_at);
  }

  return Complaint;
}();

var Unsubscribe =
/** @class */
function () {
  function Unsubscribe(data) {
    this.type = 'unsubscribes';
    this.address = data.address;
    this.tags = data.tags;
    this.created_at = new Date(data.created_at);
  }

  return Unsubscribe;
}();

var SuppressionClient =
/** @class */
function () {
  function SuppressionClient(request) {
    this.request = request;
    this.models = {
      bounces: Bounce,
      complaints: Complaint,
      unsubscribes: Unsubscribe
    };
  }

  SuppressionClient.prototype._parsePage = function (id, pageUrl) {
    var parsedUrl = url_1.default.parse(pageUrl, true);
    var query = parsedUrl.query;
    return {
      id: id,
      page: query.page,
      address: query.address,
      url: pageUrl
    };
  };

  SuppressionClient.prototype._parsePageLinks = function (response) {
    var _this = this;

    var pages = Object.entries(response.body.paging);
    return pages.reduce(function (acc, _a) {
      var id = _a[0],
          url = _a[1];
      acc[id] = _this._parsePage(id, url);
      return acc;
    }, {});
  };

  SuppressionClient.prototype._parseList = function (response, Model) {
    var data = {};
    data.items = response.body.items.map(function (d) {
      return new Model(d);
    });
    data.pages = this._parsePageLinks(response);
    return data;
  };

  SuppressionClient.prototype._parseItem = function (response, Model) {
    return new Model(response.body);
  };

  SuppressionClient.prototype.list = function (domain, type, query) {
    var _this = this;

    var model = this.models[type];
    return this.request.get(url_join_1.default('v3', domain, type), query).then(function (response) {
      return _this._parseList(response, model);
    });
  };

  SuppressionClient.prototype.get = function (domain, type, address) {
    var _this = this;

    var model = this.models[type];
    return this.request.get(url_join_1.default('v3', domain, type, encodeURIComponent(address))).then(function (response) {
      return _this._parseItem(response, model);
    });
  };

  SuppressionClient.prototype.create = function (domain, type, data) {
    // supports adding multiple suppressions by default
    if (!Array.isArray(data)) {
      data = [data];
    }

    return this.request.post(url_join_1.default('v3', domain, type), data, createOptions).then(function (response) {
      return response.body;
    });
  };

  SuppressionClient.prototype.destroy = function (domain, type, address) {
    return this.request.delete(url_join_1.default('v3', domain, type, encodeURIComponent(address))).then(function (response) {
      return response.body;
    });
  };

  return SuppressionClient;
}();

exports.default = SuppressionClient;
module.exports = SuppressionClient;

/***/ }),

/***/ "./lib/validate.ts":
/*!*************************!*\
  !*** ./lib/validate.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var ValidateClient =
/** @class */
function () {
  function ValidateClient(request) {
    this.request = request;
  }

  ValidateClient.prototype.get = function (address) {
    return this.request.get('/v3/address/validate', {
      address: address
    }).then(function (response) {
      return response.body;
    });
  };

  return ValidateClient;
}();

exports.default = ValidateClient;

/***/ }),

/***/ "./lib/webhooks.ts":
/*!*************************!*\
  !*** ./lib/webhooks.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var url_join_1 = __importDefault(__webpack_require__(/*! url-join */ "./node_modules/url-join/lib/url-join.js"));

var Webhook =
/** @class */
function () {
  function Webhook(id, data) {
    this.id = id;
    this.url = data.url;
  }

  return Webhook;
}();

var WebhookClient =
/** @class */
function () {
  function WebhookClient(request) {
    this.request = request;
  }

  WebhookClient.prototype._parseWebhookList = function (response) {
    return response.body.webhooks;
  };

  WebhookClient.prototype._parseWebhookWithID = function (id) {
    return function (response) {
      return new Webhook(id, response.body.webhook);
    };
  };

  WebhookClient.prototype._parseWebhookTest = function (response) {
    return {
      code: response.body.code,
      message: response.body.message
    };
  };

  WebhookClient.prototype.list = function (domain, query) {
    return this.request.get(url_join_1.default('/v2/domains', domain, 'webhooks'), query).then(this._parseWebhookList);
  };

  WebhookClient.prototype.get = function (domain, id) {
    return this.request.get(url_join_1.default('/v2/domains', domain, 'webhooks', id)).then(this._parseWebhookWithID(id));
  };

  WebhookClient.prototype.create = function (domain, id, url, test) {
    if (test) {
      return this.request.put(url_join_1.default('/v2/domains', domain, 'webhooks', id, 'test'), {
        url: url
      }).then(this._parseWebhookTest);
    }

    return this.request.post(url_join_1.default('/v2/domains', domain, 'webhooks'), {
      id: id,
      url: url
    }).then(this._parseWebhookWithID(id));
  };

  WebhookClient.prototype.update = function (domain, id, url) {
    return this.request.put(url_join_1.default('/v2/domains', domain, 'webhooks', id), {
      url: url
    }).then(this._parseWebhookWithID(id));
  };

  WebhookClient.prototype.destroy = function (domain, id) {
    return this.request.delete(url_join_1.default('/v2/domains', domain, 'webhooks', id)).then(this._parseWebhookWithID(id));
  };

  return WebhookClient;
}();

exports.default = WebhookClient;

/***/ }),

/***/ "./node_modules/btoa/index.js":
/*!************************************!*\
  !*** ./node_modules/btoa/index.js ***!
  \************************************/
/***/ ((module) => {

(function () {
  "use strict";

  function btoa(str) {
    var buffer;

    if (str instanceof Buffer) {
      buffer = str;
    } else {
      buffer = Buffer.from(str.toString(), 'binary');
    }

    return buffer.toString('base64');
  }

  module.exports = btoa;
}());


/***/ }),

/***/ "./node_modules/data-uri-to-buffer/dist/src/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/data-uri-to-buffer/dist/src/index.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";

/**
 * Returns a `Buffer` instance from the given data URI `uri`.
 *
 * @param {String} uri Data URI to turn into a Buffer instance
 * @return {Buffer} Buffer instance from Data URI
 * @api public
 */
function dataUriToBuffer(uri) {
    if (!/^data:/i.test(uri)) {
        throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
    }
    // strip newlines
    uri = uri.replace(/\r?\n/g, '');
    // split the URI up into the "metadata" and the "data" portions
    const firstComma = uri.indexOf(',');
    if (firstComma === -1 || firstComma <= 4) {
        throw new TypeError('malformed data: URI');
    }
    // remove the "data:" scheme and parse the metadata
    const meta = uri.substring(5, firstComma).split(';');
    let charset = '';
    let base64 = false;
    const type = meta[0] || 'text/plain';
    let typeFull = type;
    for (let i = 1; i < meta.length; i++) {
        if (meta[i] === 'base64') {
            base64 = true;
        }
        else {
            typeFull += `;${meta[i]}`;
            if (meta[i].indexOf('charset=') === 0) {
                charset = meta[i].substring(8);
            }
        }
    }
    // defaults to US-ASCII only if type is not provided
    if (!meta[0] && !charset.length) {
        typeFull += ';charset=US-ASCII';
        charset = 'US-ASCII';
    }
    // get the encoded data portion and decode URI-encoded chars
    const encoding = base64 ? 'base64' : 'ascii';
    const data = unescape(uri.substring(firstComma + 1));
    const buffer = Buffer.from(data, encoding);
    // set `.type` and `.typeFull` properties to MIME type
    buffer.type = type;
    buffer.typeFull = typeFull;
    // set the `.charset` property
    buffer.charset = charset;
    return buffer;
}
module.exports = dataUriToBuffer;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/event-target-shim/dist/event-target-shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/event-target-shim/dist/event-target-shim.js ***!
  \******************************************************************/
/***/ ((module, exports) => {

"use strict";
/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * @typedef {object} PrivateData
 * @property {EventTarget} eventTarget The event target.
 * @property {{type:string}} event The original event object.
 * @property {number} eventPhase The current event phase.
 * @property {EventTarget|null} currentTarget The current event target.
 * @property {boolean} canceled The flag to prevent default.
 * @property {boolean} stopped The flag to stop propagation.
 * @property {boolean} immediateStopped The flag to stop propagation immediately.
 * @property {Function|null} passiveListener The listener if the current listener is passive. Otherwise this is null.
 * @property {number} timeStamp The unix time.
 * @private
 */

/**
 * Private data for event wrappers.
 * @type {WeakMap<Event, PrivateData>}
 * @private
 */
const privateData = new WeakMap();

/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */
const wrappers = new WeakMap();

/**
 * Get private data.
 * @param {Event} event The event object to get private data.
 * @returns {PrivateData} The private data of the event.
 * @private
 */
function pd(event) {
    const retv = privateData.get(event);
    console.assert(
        retv != null,
        "'this' is expected an Event object, but got",
        event
    );
    return retv
}

/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data {PrivateData} private data.
 */
function setCancelFlag(data) {
    if (data.passiveListener != null) {
        if (
            typeof console !== "undefined" &&
            typeof console.error === "function"
        ) {
            console.error(
                "Unable to preventDefault inside passive event listener invocation.",
                data.passiveListener
            );
        }
        return
    }
    if (!data.event.cancelable) {
        return
    }

    data.canceled = true;
    if (typeof data.event.preventDefault === "function") {
        data.event.preventDefault();
    }
}

/**
 * @see https://dom.spec.whatwg.org/#interface-event
 * @private
 */
/**
 * The event wrapper.
 * @constructor
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Event|{type:string}} event The original event to wrap.
 */
function Event(eventTarget, event) {
    privateData.set(this, {
        eventTarget,
        event,
        eventPhase: 2,
        currentTarget: eventTarget,
        canceled: false,
        stopped: false,
        immediateStopped: false,
        passiveListener: null,
        timeStamp: event.timeStamp || Date.now(),
    });

    // https://heycam.github.io/webidl/#Unforgeable
    Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });

    // Define accessors
    const keys = Object.keys(event);
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (!(key in this)) {
            Object.defineProperty(this, key, defineRedirectDescriptor(key));
        }
    }
}

// Should be enumerable, but class methods are not enumerable.
Event.prototype = {
    /**
     * The type of this event.
     * @type {string}
     */
    get type() {
        return pd(this).event.type
    },

    /**
     * The target of this event.
     * @type {EventTarget}
     */
    get target() {
        return pd(this).eventTarget
    },

    /**
     * The target of this event.
     * @type {EventTarget}
     */
    get currentTarget() {
        return pd(this).currentTarget
    },

    /**
     * @returns {EventTarget[]} The composed path of this event.
     */
    composedPath() {
        const currentTarget = pd(this).currentTarget;
        if (currentTarget == null) {
            return []
        }
        return [currentTarget]
    },

    /**
     * Constant of NONE.
     * @type {number}
     */
    get NONE() {
        return 0
    },

    /**
     * Constant of CAPTURING_PHASE.
     * @type {number}
     */
    get CAPTURING_PHASE() {
        return 1
    },

    /**
     * Constant of AT_TARGET.
     * @type {number}
     */
    get AT_TARGET() {
        return 2
    },

    /**
     * Constant of BUBBLING_PHASE.
     * @type {number}
     */
    get BUBBLING_PHASE() {
        return 3
    },

    /**
     * The target of this event.
     * @type {number}
     */
    get eventPhase() {
        return pd(this).eventPhase
    },

    /**
     * Stop event bubbling.
     * @returns {void}
     */
    stopPropagation() {
        const data = pd(this);

        data.stopped = true;
        if (typeof data.event.stopPropagation === "function") {
            data.event.stopPropagation();
        }
    },

    /**
     * Stop event bubbling.
     * @returns {void}
     */
    stopImmediatePropagation() {
        const data = pd(this);

        data.stopped = true;
        data.immediateStopped = true;
        if (typeof data.event.stopImmediatePropagation === "function") {
            data.event.stopImmediatePropagation();
        }
    },

    /**
     * The flag to be bubbling.
     * @type {boolean}
     */
    get bubbles() {
        return Boolean(pd(this).event.bubbles)
    },

    /**
     * The flag to be cancelable.
     * @type {boolean}
     */
    get cancelable() {
        return Boolean(pd(this).event.cancelable)
    },

    /**
     * Cancel this event.
     * @returns {void}
     */
    preventDefault() {
        setCancelFlag(pd(this));
    },

    /**
     * The flag to indicate cancellation state.
     * @type {boolean}
     */
    get defaultPrevented() {
        return pd(this).canceled
    },

    /**
     * The flag to be composed.
     * @type {boolean}
     */
    get composed() {
        return Boolean(pd(this).event.composed)
    },

    /**
     * The unix time of this event.
     * @type {number}
     */
    get timeStamp() {
        return pd(this).timeStamp
    },

    /**
     * The target of this event.
     * @type {EventTarget}
     * @deprecated
     */
    get srcElement() {
        return pd(this).eventTarget
    },

    /**
     * The flag to stop event bubbling.
     * @type {boolean}
     * @deprecated
     */
    get cancelBubble() {
        return pd(this).stopped
    },
    set cancelBubble(value) {
        if (!value) {
            return
        }
        const data = pd(this);

        data.stopped = true;
        if (typeof data.event.cancelBubble === "boolean") {
            data.event.cancelBubble = true;
        }
    },

    /**
     * The flag to indicate cancellation state.
     * @type {boolean}
     * @deprecated
     */
    get returnValue() {
        return !pd(this).canceled
    },
    set returnValue(value) {
        if (!value) {
            setCancelFlag(pd(this));
        }
    },

    /**
     * Initialize this event object. But do nothing under event dispatching.
     * @param {string} type The event type.
     * @param {boolean} [bubbles=false] The flag to be possible to bubble up.
     * @param {boolean} [cancelable=false] The flag to be possible to cancel.
     * @deprecated
     */
    initEvent() {
        // Do nothing.
    },
};

// `constructor` is not enumerable.
Object.defineProperty(Event.prototype, "constructor", {
    value: Event,
    configurable: true,
    writable: true,
});

// Ensure `event instanceof window.Event` is `true`.
if (typeof window !== "undefined" && typeof window.Event !== "undefined") {
    Object.setPrototypeOf(Event.prototype, window.Event.prototype);

    // Make association for wrappers.
    wrappers.set(window.Event.prototype, Event);
}

/**
 * Get the property descriptor to redirect a given property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to redirect the property.
 * @private
 */
function defineRedirectDescriptor(key) {
    return {
        get() {
            return pd(this).event[key]
        },
        set(value) {
            pd(this).event[key] = value;
        },
        configurable: true,
        enumerable: true,
    }
}

/**
 * Get the property descriptor to call a given method property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to call the method property.
 * @private
 */
function defineCallDescriptor(key) {
    return {
        value() {
            const event = pd(this).event;
            return event[key].apply(event, arguments)
        },
        configurable: true,
        enumerable: true,
    }
}

/**
 * Define new wrapper class.
 * @param {Function} BaseEvent The base wrapper class.
 * @param {Object} proto The prototype of the original event.
 * @returns {Function} The defined wrapper class.
 * @private
 */
function defineWrapper(BaseEvent, proto) {
    const keys = Object.keys(proto);
    if (keys.length === 0) {
        return BaseEvent
    }

    /** CustomEvent */
    function CustomEvent(eventTarget, event) {
        BaseEvent.call(this, eventTarget, event);
    }

    CustomEvent.prototype = Object.create(BaseEvent.prototype, {
        constructor: { value: CustomEvent, configurable: true, writable: true },
    });

    // Define accessors.
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        if (!(key in BaseEvent.prototype)) {
            const descriptor = Object.getOwnPropertyDescriptor(proto, key);
            const isFunc = typeof descriptor.value === "function";
            Object.defineProperty(
                CustomEvent.prototype,
                key,
                isFunc
                    ? defineCallDescriptor(key)
                    : defineRedirectDescriptor(key)
            );
        }
    }

    return CustomEvent
}

/**
 * Get the wrapper class of a given prototype.
 * @param {Object} proto The prototype of the original event to get its wrapper.
 * @returns {Function} The wrapper class.
 * @private
 */
function getWrapper(proto) {
    if (proto == null || proto === Object.prototype) {
        return Event
    }

    let wrapper = wrappers.get(proto);
    if (wrapper == null) {
        wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
        wrappers.set(proto, wrapper);
    }
    return wrapper
}

/**
 * Wrap a given event to management a dispatching.
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Object} event The event to wrap.
 * @returns {Event} The wrapper instance.
 * @private
 */
function wrapEvent(eventTarget, event) {
    const Wrapper = getWrapper(Object.getPrototypeOf(event));
    return new Wrapper(eventTarget, event)
}

/**
 * Get the immediateStopped flag of a given event.
 * @param {Event} event The event to get.
 * @returns {boolean} The flag to stop propagation immediately.
 * @private
 */
function isStopped(event) {
    return pd(event).immediateStopped
}

/**
 * Set the current event phase of a given event.
 * @param {Event} event The event to set current target.
 * @param {number} eventPhase New event phase.
 * @returns {void}
 * @private
 */
function setEventPhase(event, eventPhase) {
    pd(event).eventPhase = eventPhase;
}

/**
 * Set the current target of a given event.
 * @param {Event} event The event to set current target.
 * @param {EventTarget|null} currentTarget New current target.
 * @returns {void}
 * @private
 */
function setCurrentTarget(event, currentTarget) {
    pd(event).currentTarget = currentTarget;
}

/**
 * Set a passive listener of a given event.
 * @param {Event} event The event to set current target.
 * @param {Function|null} passiveListener New passive listener.
 * @returns {void}
 * @private
 */
function setPassiveListener(event, passiveListener) {
    pd(event).passiveListener = passiveListener;
}

/**
 * @typedef {object} ListenerNode
 * @property {Function} listener
 * @property {1|2|3} listenerType
 * @property {boolean} passive
 * @property {boolean} once
 * @property {ListenerNode|null} next
 * @private
 */

/**
 * @type {WeakMap<object, Map<string, ListenerNode>>}
 * @private
 */
const listenersMap = new WeakMap();

// Listener types
const CAPTURE = 1;
const BUBBLE = 2;
const ATTRIBUTE = 3;

/**
 * Check whether a given value is an object or not.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if the value is an object.
 */
function isObject(x) {
    return x !== null && typeof x === "object" //eslint-disable-line no-restricted-syntax
}

/**
 * Get listeners.
 * @param {EventTarget} eventTarget The event target to get.
 * @returns {Map<string, ListenerNode>} The listeners.
 * @private
 */
function getListeners(eventTarget) {
    const listeners = listenersMap.get(eventTarget);
    if (listeners == null) {
        throw new TypeError(
            "'this' is expected an EventTarget object, but got another value."
        )
    }
    return listeners
}

/**
 * Get the property descriptor for the event attribute of a given event.
 * @param {string} eventName The event name to get property descriptor.
 * @returns {PropertyDescriptor} The property descriptor.
 * @private
 */
function defineEventAttributeDescriptor(eventName) {
    return {
        get() {
            const listeners = getListeners(this);
            let node = listeners.get(eventName);
            while (node != null) {
                if (node.listenerType === ATTRIBUTE) {
                    return node.listener
                }
                node = node.next;
            }
            return null
        },

        set(listener) {
            if (typeof listener !== "function" && !isObject(listener)) {
                listener = null; // eslint-disable-line no-param-reassign
            }
            const listeners = getListeners(this);

            // Traverse to the tail while removing old value.
            let prev = null;
            let node = listeners.get(eventName);
            while (node != null) {
                if (node.listenerType === ATTRIBUTE) {
                    // Remove old value.
                    if (prev !== null) {
                        prev.next = node.next;
                    } else if (node.next !== null) {
                        listeners.set(eventName, node.next);
                    } else {
                        listeners.delete(eventName);
                    }
                } else {
                    prev = node;
                }

                node = node.next;
            }

            // Add new value.
            if (listener !== null) {
                const newNode = {
                    listener,
                    listenerType: ATTRIBUTE,
                    passive: false,
                    once: false,
                    next: null,
                };
                if (prev === null) {
                    listeners.set(eventName, newNode);
                } else {
                    prev.next = newNode;
                }
            }
        },
        configurable: true,
        enumerable: true,
    }
}

/**
 * Define an event attribute (e.g. `eventTarget.onclick`).
 * @param {Object} eventTargetPrototype The event target prototype to define an event attrbite.
 * @param {string} eventName The event name to define.
 * @returns {void}
 */
function defineEventAttribute(eventTargetPrototype, eventName) {
    Object.defineProperty(
        eventTargetPrototype,
        `on${eventName}`,
        defineEventAttributeDescriptor(eventName)
    );
}

/**
 * Define a custom EventTarget with event attributes.
 * @param {string[]} eventNames Event names for event attributes.
 * @returns {EventTarget} The custom EventTarget.
 * @private
 */
function defineCustomEventTarget(eventNames) {
    /** CustomEventTarget */
    function CustomEventTarget() {
        EventTarget.call(this);
    }

    CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
        constructor: {
            value: CustomEventTarget,
            configurable: true,
            writable: true,
        },
    });

    for (let i = 0; i < eventNames.length; ++i) {
        defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
    }

    return CustomEventTarget
}

/**
 * EventTarget.
 *
 * - This is constructor if no arguments.
 * - This is a function which returns a CustomEventTarget constructor if there are arguments.
 *
 * For example:
 *
 *     class A extends EventTarget {}
 *     class B extends EventTarget("message") {}
 *     class C extends EventTarget("message", "error") {}
 *     class D extends EventTarget(["message", "error"]) {}
 */
function EventTarget() {
    /*eslint-disable consistent-return */
    if (this instanceof EventTarget) {
        listenersMap.set(this, new Map());
        return
    }
    if (arguments.length === 1 && Array.isArray(arguments[0])) {
        return defineCustomEventTarget(arguments[0])
    }
    if (arguments.length > 0) {
        const types = new Array(arguments.length);
        for (let i = 0; i < arguments.length; ++i) {
            types[i] = arguments[i];
        }
        return defineCustomEventTarget(types)
    }
    throw new TypeError("Cannot call a class as a function")
    /*eslint-enable consistent-return */
}

// Should be enumerable, but class methods are not enumerable.
EventTarget.prototype = {
    /**
     * Add a given listener to this event target.
     * @param {string} eventName The event name to add.
     * @param {Function} listener The listener to add.
     * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
     * @returns {void}
     */
    addEventListener(eventName, listener, options) {
        if (listener == null) {
            return
        }
        if (typeof listener !== "function" && !isObject(listener)) {
            throw new TypeError("'listener' should be a function or an object.")
        }

        const listeners = getListeners(this);
        const optionsIsObj = isObject(options);
        const capture = optionsIsObj
            ? Boolean(options.capture)
            : Boolean(options);
        const listenerType = capture ? CAPTURE : BUBBLE;
        const newNode = {
            listener,
            listenerType,
            passive: optionsIsObj && Boolean(options.passive),
            once: optionsIsObj && Boolean(options.once),
            next: null,
        };

        // Set it as the first node if the first node is null.
        let node = listeners.get(eventName);
        if (node === undefined) {
            listeners.set(eventName, newNode);
            return
        }

        // Traverse to the tail while checking duplication..
        let prev = null;
        while (node != null) {
            if (
                node.listener === listener &&
                node.listenerType === listenerType
            ) {
                // Should ignore duplication.
                return
            }
            prev = node;
            node = node.next;
        }

        // Add it.
        prev.next = newNode;
    },

    /**
     * Remove a given listener from this event target.
     * @param {string} eventName The event name to remove.
     * @param {Function} listener The listener to remove.
     * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
     * @returns {void}
     */
    removeEventListener(eventName, listener, options) {
        if (listener == null) {
            return
        }

        const listeners = getListeners(this);
        const capture = isObject(options)
            ? Boolean(options.capture)
            : Boolean(options);
        const listenerType = capture ? CAPTURE : BUBBLE;

        let prev = null;
        let node = listeners.get(eventName);
        while (node != null) {
            if (
                node.listener === listener &&
                node.listenerType === listenerType
            ) {
                if (prev !== null) {
                    prev.next = node.next;
                } else if (node.next !== null) {
                    listeners.set(eventName, node.next);
                } else {
                    listeners.delete(eventName);
                }
                return
            }

            prev = node;
            node = node.next;
        }
    },

    /**
     * Dispatch a given event.
     * @param {Event|{type:string}} event The event to dispatch.
     * @returns {boolean} `false` if canceled.
     */
    dispatchEvent(event) {
        if (event == null || typeof event.type !== "string") {
            throw new TypeError('"event.type" should be a string.')
        }

        // If listeners aren't registered, terminate.
        const listeners = getListeners(this);
        const eventName = event.type;
        let node = listeners.get(eventName);
        if (node == null) {
            return true
        }

        // Since we cannot rewrite several properties, so wrap object.
        const wrappedEvent = wrapEvent(this, event);

        // This doesn't process capturing phase and bubbling phase.
        // This isn't participating in a tree.
        let prev = null;
        while (node != null) {
            // Remove this listener if it's once
            if (node.once) {
                if (prev !== null) {
                    prev.next = node.next;
                } else if (node.next !== null) {
                    listeners.set(eventName, node.next);
                } else {
                    listeners.delete(eventName);
                }
            } else {
                prev = node;
            }

            // Call this listener
            setPassiveListener(
                wrappedEvent,
                node.passive ? node.listener : null
            );
            if (typeof node.listener === "function") {
                try {
                    node.listener.call(this, wrappedEvent);
                } catch (err) {
                    if (
                        typeof console !== "undefined" &&
                        typeof console.error === "function"
                    ) {
                        console.error(err);
                    }
                }
            } else if (
                node.listenerType !== ATTRIBUTE &&
                typeof node.listener.handleEvent === "function"
            ) {
                node.listener.handleEvent(wrappedEvent);
            }

            // Break if `event.stopImmediatePropagation` was called.
            if (isStopped(wrappedEvent)) {
                break
            }

            node = node.next;
        }
        setPassiveListener(wrappedEvent, null);
        setEventPhase(wrappedEvent, 0);
        setCurrentTarget(wrappedEvent, null);

        return !wrappedEvent.defaultPrevented
    },
};

// `constructor` is not enumerable.
Object.defineProperty(EventTarget.prototype, "constructor", {
    value: EventTarget,
    configurable: true,
    writable: true,
});

// Ensure `eventTarget instanceof window.EventTarget` is `true`.
if (
    typeof window !== "undefined" &&
    typeof window.EventTarget !== "undefined"
) {
    Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}

exports.defineEventAttribute = defineEventAttribute;
exports.EventTarget = EventTarget;
exports.default = EventTarget;

module.exports = EventTarget
module.exports.EventTarget = module.exports.default = EventTarget
module.exports.defineEventAttribute = defineEventAttribute
//# sourceMappingURL=event-target-shim.js.map


/***/ }),

/***/ "./node_modules/fetch-blob/index.js":
/*!******************************************!*\
  !*** ./node_modules/fetch-blob/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {Readable} = __webpack_require__(/*! stream */ "stream");

/**
 * @type {WeakMap<Blob, {type: string, size: number, parts: (Blob | Buffer)[] }>}
 */
const wm = new WeakMap();

async function * read(parts) {
	for (const part of parts) {
		if ('stream' in part) {
			yield * part.stream();
		} else {
			yield part;
		}
	}
}

class Blob {
	/**
	 * The Blob() constructor returns a new Blob object. The content
	 * of the blob consists of the concatenation of the values given
	 * in the parameter array.
	 *
	 * @param {(ArrayBufferLike | ArrayBufferView | Blob | Buffer | string)[]} blobParts
	 * @param {{ type?: string }} [options]
	 */
	constructor(blobParts = [], options = {type: ''}) {
		let size = 0;

		const parts = blobParts.map(element => {
			let buffer;
			if (element instanceof Buffer) {
				buffer = element;
			} else if (ArrayBuffer.isView(element)) {
				buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
			} else if (element instanceof ArrayBuffer) {
				buffer = Buffer.from(element);
			} else if (element instanceof Blob) {
				buffer = element;
			} else {
				buffer = Buffer.from(typeof element === 'string' ? element : String(element));
			}

			size += buffer.length || buffer.size || 0;
			return buffer;
		});

		const type = options.type === undefined ? '' : String(options.type).toLowerCase();

		wm.set(this, {
			type: /[^\u0020-\u007E]/.test(type) ? '' : type,
			size,
			parts
		});
	}

	/**
	 * The Blob interface's size property returns the
	 * size of the Blob in bytes.
	 */
	get size() {
		return wm.get(this).size;
	}

	/**
	 * The type property of a Blob object returns the MIME type of the file.
	 */
	get type() {
		return wm.get(this).type;
	}

	/**
	 * The text() method in the Blob interface returns a Promise
	 * that resolves with a string containing the contents of
	 * the blob, interpreted as UTF-8.
	 *
	 * @return {Promise<string>}
	 */
	async text() {
		return Buffer.from(await this.arrayBuffer()).toString();
	}

	/**
	 * The arrayBuffer() method in the Blob interface returns a
	 * Promise that resolves with the contents of the blob as
	 * binary data contained in an ArrayBuffer.
	 *
	 * @return {Promise<ArrayBuffer>}
	 */
	async arrayBuffer() {
		const data = new Uint8Array(this.size);
		let offset = 0;
		for await (const chunk of this.stream()) {
			data.set(chunk, offset);
			offset += chunk.length;
		}

		return data.buffer;
	}

	/**
	 * The Blob interface's stream() method is difference from native
	 * and uses node streams instead of whatwg streams.
	 *
	 * @returns {Readable} Node readable stream
	 */
	stream() {
		return Readable.from(read(wm.get(this).parts));
	}

	/**
	 * The Blob interface's slice() method creates and returns a
	 * new Blob object which contains data from a subset of the
	 * blob on which it's called.
	 *
	 * @param {number} [start]
	 * @param {number} [end]
	 * @param {string} [type]
	 */
	slice(start = 0, end = this.size, type = '') {
		const {size} = this;

		let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
		let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);

		const span = Math.max(relativeEnd - relativeStart, 0);
		const parts = wm.get(this).parts.values();
		const blobParts = [];
		let added = 0;

		for (const part of parts) {
			const size = ArrayBuffer.isView(part) ? part.byteLength : part.size;
			if (relativeStart && size <= relativeStart) {
				// Skip the beginning and change the relative
				// start & end position as we skip the unwanted parts
				relativeStart -= size;
				relativeEnd -= size;
			} else {
				const chunk = part.slice(relativeStart, Math.min(size, relativeEnd));
				blobParts.push(chunk);
				added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
				relativeStart = 0; // All next sequental parts should start at 0

				// don't add the overflow to new blobParts
				if (added >= span) {
					break;
				}
			}
		}

		const blob = new Blob([], {type});
		Object.assign(wm.get(blob), {size: span, parts: blobParts});

		return blob;
	}

	get [Symbol.toStringTag]() {
		return 'Blob';
	}

	static [Symbol.hasInstance](object) {
		return (
			typeof object === 'object' &&
			typeof object.stream === 'function' &&
			object.stream.length === 0 &&
			typeof object.constructor === 'function' &&
			/^(Blob|File)$/.test(object[Symbol.toStringTag])
		);
	}
}

Object.defineProperties(Blob.prototype, {
	size: {enumerable: true},
	type: {enumerable: true},
	slice: {enumerable: true}
});

module.exports = Blob;


/***/ }),

/***/ "./node_modules/ky-universal/index.js":
/*!********************************************!*\
  !*** ./node_modules/ky-universal/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/dist/index.cjs");
const AbortController = __webpack_require__(/*! abort-controller */ "./node_modules/abort-controller/dist/abort-controller.js");

const TEN_MEGABYTES = 1000 * 1000 * 10;

if (!global.fetch) {
	global.fetch = (url, options) => fetch(url, {highWaterMark: TEN_MEGABYTES, ...options});
}

if (!global.Headers) {
	global.Headers = fetch.Headers;
}

if (!global.Request) {
	global.Request = fetch.Request;
}

if (!global.Response) {
	global.Response = fetch.Response;
}

if (!global.AbortController) {
	global.AbortController = AbortController;
}

if (!global.ReadableStream) {
	try {
		global.ReadableStream = __webpack_require__(/*! web-streams-polyfill/ponyfill/es2018 */ "./node_modules/web-streams-polyfill/dist/ponyfill.es2018.mjs");
	} catch (_) {}
}

module.exports = __webpack_require__(/*! ky/umd */ "./node_modules/ky/umd.js");


/***/ }),

/***/ "./node_modules/ky/umd.js":
/*!********************************!*\
  !*** ./node_modules/ky/umd.js ***!
  \********************************/
/***/ (function(module) {

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

	/*! MIT License © Sindre Sorhus */

	const globals = {};

	const getGlobal = property => {
		/* istanbul ignore next */
		if (typeof self !== 'undefined' && self && property in self) {
			return self;
		}

		/* istanbul ignore next */
		if (typeof window !== 'undefined' && window && property in window) {
			return window;
		}

		if (typeof global !== 'undefined' && global && property in global) {
			return global;
		}

		/* istanbul ignore next */
		if (typeof globalThis !== 'undefined' && globalThis) {
			return globalThis;
		}
	};

	const globalProperties = [
		'Headers',
		'Request',
		'Response',
		'ReadableStream',
		'fetch',
		'AbortController',
		'FormData'
	];

	for (const property of globalProperties) {
		Object.defineProperty(globals, property, {
			get() {
				const globalObject = getGlobal(property);
				const value = globalObject && globalObject[property];
				return typeof value === 'function' ? value.bind(globalObject) : value;
			}
		});
	}

	const isObject = value => value !== null && typeof value === 'object';
	const supportsAbortController = typeof globals.AbortController === 'function';
	const supportsStreams = typeof globals.ReadableStream === 'function';
	const supportsFormData = typeof globals.FormData === 'function';

	const mergeHeaders = (source1, source2) => {
		const result = new globals.Headers(source1 || {});
		const isHeadersInstance = source2 instanceof globals.Headers;
		const source = new globals.Headers(source2 || {});

		for (const [key, value] of source) {
			if ((isHeadersInstance && value === 'undefined') || value === undefined) {
				result.delete(key);
			} else {
				result.set(key, value);
			}
		}

		return result;
	};

	const deepMerge = (...sources) => {
		let returnValue = {};
		let headers = {};

		for (const source of sources) {
			if (Array.isArray(source)) {
				if (!(Array.isArray(returnValue))) {
					returnValue = [];
				}

				returnValue = [...returnValue, ...source];
			} else if (isObject(source)) {
				for (let [key, value] of Object.entries(source)) {
					if (isObject(value) && (key in returnValue)) {
						value = deepMerge(returnValue[key], value);
					}

					returnValue = {...returnValue, [key]: value};
				}

				if (isObject(source.headers)) {
					headers = mergeHeaders(headers, source.headers);
				}
			}

			returnValue.headers = headers;
		}

		return returnValue;
	};

	const requestMethods = [
		'get',
		'post',
		'put',
		'patch',
		'head',
		'delete'
	];

	const responseTypes = {
		json: 'application/json',
		text: 'text/*',
		formData: 'multipart/form-data',
		arrayBuffer: '*/*',
		blob: '*/*'
	};

	const retryMethods = [
		'get',
		'put',
		'head',
		'delete',
		'options',
		'trace'
	];

	const retryStatusCodes = [
		408,
		413,
		429,
		500,
		502,
		503,
		504
	];

	const retryAfterStatusCodes = [
		413,
		429,
		503
	];

	const stop = Symbol('stop');

	class HTTPError extends Error {
		constructor(response) {
			// Set the message to the status text, such as Unauthorized,
			// with some fallbacks. This message should never be undefined.
			super(
				response.statusText ||
				String(
					(response.status === 0 || response.status) ?
						response.status : 'Unknown response error'
				)
			);
			this.name = 'HTTPError';
			this.response = response;
		}
	}

	class TimeoutError extends Error {
		constructor(request) {
			super('Request timed out');
			this.name = 'TimeoutError';
			this.request = request;
		}
	}

	const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

	// `Promise.race()` workaround (#91)
	const timeout = (request, abortController, options) =>
		new Promise((resolve, reject) => {
			const timeoutID = setTimeout(() => {
				if (abortController) {
					abortController.abort();
				}

				reject(new TimeoutError(request));
			}, options.timeout);

			/* eslint-disable promise/prefer-await-to-then */
			options.fetch(request)
				.then(resolve)
				.catch(reject)
				.then(() => {
					clearTimeout(timeoutID);
				});
			/* eslint-enable promise/prefer-await-to-then */
		});

	const normalizeRequestMethod = input => requestMethods.includes(input) ? input.toUpperCase() : input;

	const defaultRetryOptions = {
		limit: 2,
		methods: retryMethods,
		statusCodes: retryStatusCodes,
		afterStatusCodes: retryAfterStatusCodes
	};

	const normalizeRetryOptions = (retry = {}) => {
		if (typeof retry === 'number') {
			return {
				...defaultRetryOptions,
				limit: retry
			};
		}

		if (retry.methods && !Array.isArray(retry.methods)) {
			throw new Error('retry.methods must be an array');
		}

		if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
			throw new Error('retry.statusCodes must be an array');
		}

		return {
			...defaultRetryOptions,
			...retry,
			afterStatusCodes: retryAfterStatusCodes
		};
	};

	// The maximum value of a 32bit int (see issue #117)
	const maxSafeTimeout = 2147483647;

	class Ky {
		constructor(input, options = {}) {
			this._retryCount = 0;
			this._input = input;
			this._options = {
				// TODO: credentials can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
				credentials: this._input.credentials || 'same-origin',
				...options,
				headers: mergeHeaders(this._input.headers, options.headers),
				hooks: deepMerge({
					beforeRequest: [],
					beforeRetry: [],
					afterResponse: []
				}, options.hooks),
				method: normalizeRequestMethod(options.method || this._input.method),
				prefixUrl: String(options.prefixUrl || ''),
				retry: normalizeRetryOptions(options.retry),
				throwHttpErrors: options.throwHttpErrors !== false,
				timeout: typeof options.timeout === 'undefined' ? 10000 : options.timeout,
				fetch: options.fetch || globals.fetch
			};

			if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globals.Request)) {
				throw new TypeError('`input` must be a string, URL, or Request');
			}

			if (this._options.prefixUrl && typeof this._input === 'string') {
				if (this._input.startsWith('/')) {
					throw new Error('`input` must not begin with a slash when using `prefixUrl`');
				}

				if (!this._options.prefixUrl.endsWith('/')) {
					this._options.prefixUrl += '/';
				}

				this._input = this._options.prefixUrl + this._input;
			}

			if (supportsAbortController) {
				this.abortController = new globals.AbortController();
				if (this._options.signal) {
					this._options.signal.addEventListener('abort', () => {
						this.abortController.abort();
					});
				}

				this._options.signal = this.abortController.signal;
			}

			this.request = new globals.Request(this._input, this._options);

			if (this._options.searchParams) {
				const searchParams = '?' + new URLSearchParams(this._options.searchParams).toString();
				const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);

				// To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one
				if (((supportsFormData && this._options.body instanceof globals.FormData) || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) {
					this.request.headers.delete('content-type');
				}

				this.request = new globals.Request(new globals.Request(url, this.request), this._options);
			}

			if (this._options.json !== undefined) {
				this._options.body = JSON.stringify(this._options.json);
				this.request.headers.set('content-type', 'application/json');
				this.request = new globals.Request(this.request, {body: this._options.body});
			}

			const fn = async () => {
				if (this._options.timeout > maxSafeTimeout) {
					throw new RangeError(`The \`timeout\` option cannot be greater than ${maxSafeTimeout}`);
				}

				await delay(1);
				let response = await this._fetch();

				for (const hook of this._options.hooks.afterResponse) {
					// eslint-disable-next-line no-await-in-loop
					const modifiedResponse = await hook(
						this.request,
						this._options,
						this._decorateResponse(response.clone())
					);

					if (modifiedResponse instanceof globals.Response) {
						response = modifiedResponse;
					}
				}

				this._decorateResponse(response);

				if (!response.ok && this._options.throwHttpErrors) {
					throw new HTTPError(response);
				}

				// If `onDownloadProgress` is passed, it uses the stream API internally
				/* istanbul ignore next */
				if (this._options.onDownloadProgress) {
					if (typeof this._options.onDownloadProgress !== 'function') {
						throw new TypeError('The `onDownloadProgress` option must be a function');
					}

					if (!supportsStreams) {
						throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
					}

					return this._stream(response.clone(), this._options.onDownloadProgress);
				}

				return response;
			};

			const isRetriableMethod = this._options.retry.methods.includes(this.request.method.toLowerCase());
			const result = isRetriableMethod ? this._retry(fn) : fn();

			for (const [type, mimeType] of Object.entries(responseTypes)) {
				result[type] = async () => {
					this.request.headers.set('accept', this.request.headers.get('accept') || mimeType);

					const response = (await result).clone();

					if (type === 'json') {
						if (response.status === 204) {
							return '';
						}

						if (options.parseJson) {
							return options.parseJson(await response.text());
						}
					}

					return response[type]();
				};
			}

			return result;
		}

		_calculateRetryDelay(error) {
			this._retryCount++;

			if (this._retryCount < this._options.retry.limit && !(error instanceof TimeoutError)) {
				if (error instanceof HTTPError) {
					if (!this._options.retry.statusCodes.includes(error.response.status)) {
						return 0;
					}

					const retryAfter = error.response.headers.get('Retry-After');
					if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
						let after = Number(retryAfter);
						if (Number.isNaN(after)) {
							after = Date.parse(retryAfter) - Date.now();
						} else {
							after *= 1000;
						}

						if (typeof this._options.retry.maxRetryAfter !== 'undefined' && after > this._options.retry.maxRetryAfter) {
							return 0;
						}

						return after;
					}

					if (error.response.status === 413) {
						return 0;
					}
				}

				const BACKOFF_FACTOR = 0.3;
				return BACKOFF_FACTOR * (2 ** (this._retryCount - 1)) * 1000;
			}

			return 0;
		}

		_decorateResponse(response) {
			if (this._options.parseJson) {
				response.json = async () => {
					return this._options.parseJson(await response.text());
				};
			}

			return response;
		}

		async _retry(fn) {
			try {
				return await fn();
			} catch (error) {
				const ms = Math.min(this._calculateRetryDelay(error), maxSafeTimeout);
				if (ms !== 0 && this._retryCount > 0) {
					await delay(ms);

					for (const hook of this._options.hooks.beforeRetry) {
						// eslint-disable-next-line no-await-in-loop
						const hookResult = await hook({
							request: this.request,
							options: this._options,
							error,
							retryCount: this._retryCount
						});

						// If `stop` is returned from the hook, the retry process is stopped
						if (hookResult === stop) {
							return;
						}
					}

					return this._retry(fn);
				}

				if (this._options.throwHttpErrors) {
					throw error;
				}
			}
		}

		async _fetch() {
			for (const hook of this._options.hooks.beforeRequest) {
				// eslint-disable-next-line no-await-in-loop
				const result = await hook(this.request, this._options);

				if (result instanceof Request) {
					this.request = result;
					break;
				}

				if (result instanceof Response) {
					return result;
				}
			}

			if (this._options.timeout === false) {
				return this._options.fetch(this.request.clone());
			}

			return timeout(this.request.clone(), this.abortController, this._options);
		}

		/* istanbul ignore next */
		_stream(response, onDownloadProgress) {
			const totalBytes = Number(response.headers.get('content-length')) || 0;
			let transferredBytes = 0;

			return new globals.Response(
				new globals.ReadableStream({
					start(controller) {
						const reader = response.body.getReader();

						if (onDownloadProgress) {
							onDownloadProgress({percent: 0, transferredBytes: 0, totalBytes}, new Uint8Array());
						}

						async function read() {
							const {done, value} = await reader.read();
							if (done) {
								controller.close();
								return;
							}

							if (onDownloadProgress) {
								transferredBytes += value.byteLength;
								const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
								onDownloadProgress({percent, transferredBytes, totalBytes}, value);
							}

							controller.enqueue(value);
							read();
						}

						read();
					}
				})
			);
		}
	}

	const validateAndMerge = (...sources) => {
		for (const source of sources) {
			if ((!isObject(source) || Array.isArray(source)) && typeof source !== 'undefined') {
				throw new TypeError('The `options` argument must be an object');
			}
		}

		return deepMerge({}, ...sources);
	};

	const createInstance = defaults => {
		const ky = (input, options) => new Ky(input, validateAndMerge(defaults, options));

		for (const method of requestMethods) {
			ky[method] = (input, options) => new Ky(input, validateAndMerge(defaults, options, {method}));
		}

		ky.HTTPError = HTTPError;
		ky.TimeoutError = TimeoutError;
		ky.create = newDefaults => createInstance(validateAndMerge(newDefaults));
		ky.extend = newDefaults => createInstance(validateAndMerge(defaults, newDefaults));
		ky.stop = stop;

		return ky;
	};

	var index = createInstance();

	return index;

})));


/***/ }),

/***/ "./node_modules/node-fetch/dist/index.cjs":
/*!************************************************!*\
  !*** ./node_modules/node-fetch/dist/index.cjs ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports = module.exports = fetch;

const http = __webpack_require__(/*! http */ "http");
const https = __webpack_require__(/*! https */ "https");
const zlib = __webpack_require__(/*! zlib */ "zlib");
const Stream = __webpack_require__(/*! stream */ "stream");
const dataUriToBuffer = __webpack_require__(/*! data-uri-to-buffer */ "./node_modules/data-uri-to-buffer/dist/src/index.js");
const util = __webpack_require__(/*! util */ "util");
const Blob = __webpack_require__(/*! fetch-blob */ "./node_modules/fetch-blob/index.js");
const crypto = __webpack_require__(/*! crypto */ "crypto");
const url = __webpack_require__(/*! url */ "url");

class FetchBaseError extends Error {
	constructor(message, type) {
		super(message);
		// Hide custom error implementation details from end-users
		Error.captureStackTrace(this, this.constructor);

		this.type = type;
	}

	get name() {
		return this.constructor.name;
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}
}

/**
 * @typedef {{ address?: string, code: string, dest?: string, errno: number, info?: object, message: string, path?: string, port?: number, syscall: string}} SystemError
*/

/**
 * FetchError interface for operational errors
 */
class FetchError extends FetchBaseError {
	/**
	 * @param  {string} message -      Error message for human
	 * @param  {string} [type] -        Error type for machine
	 * @param  {SystemError} [systemError] - For Node.js system error
	 */
	constructor(message, type, systemError) {
		super(message, type);
		// When err.type is `system`, err.erroredSysCall contains system error and err.code contains system error code
		if (systemError) {
			// eslint-disable-next-line no-multi-assign
			this.code = this.errno = systemError.code;
			this.erroredSysCall = systemError.syscall;
		}
	}
}

/**
 * Is.js
 *
 * Object type checks.
 */

const NAME = Symbol.toStringTag;

/**
 * Check if `obj` is a URLSearchParams object
 * ref: https://github.com/node-fetch/node-fetch/issues/296#issuecomment-307598143
 *
 * @param  {*} obj
 * @return {boolean}
 */
const isURLSearchParameters = object => {
	return (
		typeof object === 'object' &&
		typeof object.append === 'function' &&
		typeof object.delete === 'function' &&
		typeof object.get === 'function' &&
		typeof object.getAll === 'function' &&
		typeof object.has === 'function' &&
		typeof object.set === 'function' &&
		typeof object.sort === 'function' &&
		object[NAME] === 'URLSearchParams'
	);
};

/**
 * Check if `object` is a W3C `Blob` object (which `File` inherits from)
 *
 * @param  {*} obj
 * @return {boolean}
 */
const isBlob = object => {
	return (
		typeof object === 'object' &&
		typeof object.arrayBuffer === 'function' &&
		typeof object.type === 'string' &&
		typeof object.stream === 'function' &&
		typeof object.constructor === 'function' &&
		/^(Blob|File)$/.test(object[NAME])
	);
};

/**
 * Check if `obj` is a spec-compliant `FormData` object
 *
 * @param {*} object
 * @return {boolean}
 */
function isFormData(object) {
	return (
		typeof object === 'object' &&
		typeof object.append === 'function' &&
		typeof object.set === 'function' &&
		typeof object.get === 'function' &&
		typeof object.getAll === 'function' &&
		typeof object.delete === 'function' &&
		typeof object.keys === 'function' &&
		typeof object.values === 'function' &&
		typeof object.entries === 'function' &&
		typeof object.constructor === 'function' &&
		object[NAME] === 'FormData'
	);
}

/**
 * Check if `obj` is an instance of AbortSignal.
 *
 * @param  {*} obj
 * @return {boolean}
 */
const isAbortSignal = object => {
	return (
		typeof object === 'object' &&
		object[NAME] === 'AbortSignal'
	);
};

const carriage = '\r\n';
const dashes = '-'.repeat(2);
const carriageLength = Buffer.byteLength(carriage);

/**
 * @param {string} boundary
 */
const getFooter = boundary => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;

/**
 * @param {string} boundary
 * @param {string} name
 * @param {*} field
 *
 * @return {string}
 */
function getHeader(boundary, name, field) {
	let header = '';

	header += `${dashes}${boundary}${carriage}`;
	header += `Content-Disposition: form-data; name="${name}"`;

	if (isBlob(field)) {
		header += `; filename="${field.name}"${carriage}`;
		header += `Content-Type: ${field.type || 'application/octet-stream'}`;
	}

	return `${header}${carriage.repeat(2)}`;
}

/**
 * @return {string}
 */
const getBoundary = () => crypto.randomBytes(8).toString('hex');

/**
 * @param {FormData} form
 * @param {string} boundary
 */
async function * formDataIterator(form, boundary) {
	for (const [name, value] of form) {
		yield getHeader(boundary, name, value);

		if (isBlob(value)) {
			yield * value.stream();
		} else {
			yield value;
		}

		yield carriage;
	}

	yield getFooter(boundary);
}

/**
 * @param {FormData} form
 * @param {string} boundary
 */
function getFormDataLength(form, boundary) {
	let length = 0;

	for (const [name, value] of form) {
		length += Buffer.byteLength(getHeader(boundary, name, value));

		if (isBlob(value)) {
			length += value.size;
		} else {
			length += Buffer.byteLength(String(value));
		}

		length += carriageLength;
	}

	length += Buffer.byteLength(getFooter(boundary));

	return length;
}

const INTERNALS = Symbol('Body internals');

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Body {
	constructor(body, {
		size = 0
	} = {}) {
		let boundary = null;

		if (body === null) {
			// Body is undefined or null
			body = null;
		} else if (isURLSearchParameters(body)) {
		// Body is a URLSearchParams
			body = Buffer.from(body.toString());
		} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (util.types.isAnyArrayBuffer(body)) {
			// Body is ArrayBuffer
			body = Buffer.from(body);
		} else if (ArrayBuffer.isView(body)) {
			// Body is ArrayBufferView
			body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
		} else if (body instanceof Stream) ; else if (isFormData(body)) {
			// Body is an instance of formdata-node
			boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
			body = Stream.Readable.from(formDataIterator(body, boundary));
		} else {
			// None of the above
			// coerce to string then buffer
			body = Buffer.from(String(body));
		}

		this[INTERNALS] = {
			body,
			boundary,
			disturbed: false,
			error: null
		};
		this.size = size;

		if (body instanceof Stream) {
			body.on('error', err => {
				const error = err instanceof FetchBaseError ?
					err :
					new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, 'system', err);
				this[INTERNALS].error = error;
			});
		}
	}

	get body() {
		return this[INTERNALS].body;
	}

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	}

	/**
	 * Decode response as ArrayBuffer
	 *
	 * @return  Promise
	 */
	async arrayBuffer() {
		const {buffer, byteOffset, byteLength} = await consumeBody(this);
		return buffer.slice(byteOffset, byteOffset + byteLength);
	}

	/**
	 * Return raw response as Blob
	 *
	 * @return Promise
	 */
	async blob() {
		const ct = (this.headers && this.headers.get('content-type')) || (this[INTERNALS].body && this[INTERNALS].body.type) || '';
		const buf = await this.buffer();

		return new Blob([buf], {
			type: ct
		});
	}

	/**
	 * Decode response as json
	 *
	 * @return  Promise
	 */
	async json() {
		const buffer = await consumeBody(this);
		return JSON.parse(buffer.toString());
	}

	/**
	 * Decode response as text
	 *
	 * @return  Promise
	 */
	async text() {
		const buffer = await consumeBody(this);
		return buffer.toString();
	}

	/**
	 * Decode response as buffer (non-spec api)
	 *
	 * @return  Promise
	 */
	buffer() {
		return consumeBody(this);
	}
}

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: {enumerable: true},
	bodyUsed: {enumerable: true},
	arrayBuffer: {enumerable: true},
	blob: {enumerable: true},
	json: {enumerable: true},
	text: {enumerable: true}
});

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return Promise
 */
async function consumeBody(data) {
	if (data[INTERNALS].disturbed) {
		throw new TypeError(`body used already for: ${data.url}`);
	}

	data[INTERNALS].disturbed = true;

	if (data[INTERNALS].error) {
		throw data[INTERNALS].error;
	}

	let {body} = data;

	// Body is null
	if (body === null) {
		return Buffer.alloc(0);
	}

	// Body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// Body is buffer
	if (Buffer.isBuffer(body)) {
		return body;
	}

	/* c8 ignore next 3 */
	if (!(body instanceof Stream)) {
		return Buffer.alloc(0);
	}

	// Body is stream
	// get ready to actually consume the body
	const accum = [];
	let accumBytes = 0;

	try {
		for await (const chunk of body) {
			if (data.size > 0 && accumBytes + chunk.length > data.size) {
				const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, 'max-size');
				body.destroy(err);
				throw err;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		}
	} catch (error) {
		if (error instanceof FetchBaseError) {
			throw error;
		} else {
			// Other errors, such as incorrect content-encoding
			throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error.message}`, 'system', error);
		}
	}

	if (body.readableEnded === true || body._readableState.ended === true) {
		try {
			if (accum.every(c => typeof c === 'string')) {
				return Buffer.from(accum.join(''));
			}

			return Buffer.concat(accum, accumBytes);
		} catch (error) {
			throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error.message}`, 'system', error);
		}
	} else {
		throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
	}
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed   instance       Response or Request instance
 * @param   String  highWaterMark  highWaterMark for both PassThrough body streams
 * @return  Mixed
 */
const clone = (instance, highWaterMark) => {
	let p1;
	let p2;
	let {body} = instance;

	// Don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// Check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if ((body instanceof Stream) && (typeof body.getBoundary !== 'function')) {
		// Tee instance body
		p1 = new Stream.PassThrough({highWaterMark});
		p2 = new Stream.PassThrough({highWaterMark});
		body.pipe(p1);
		body.pipe(p2);
		// Set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
};

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param {any} body Any options.body input
 * @returns {string | null}
 */
const extractContentType = (body, request) => {
	// Body is null or undefined
	if (body === null) {
		return null;
	}

	// Body is string
	if (typeof body === 'string') {
		return 'text/plain;charset=UTF-8';
	}

	// Body is a URLSearchParams
	if (isURLSearchParameters(body)) {
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	}

	// Body is blob
	if (isBlob(body)) {
		return body.type || null;
	}

	// Body is a Buffer (Buffer, ArrayBuffer or ArrayBufferView)
	if (Buffer.isBuffer(body) || util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
		return null;
	}

	// Detect form data input from form-data module
	if (body && typeof body.getBoundary === 'function') {
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	}

	if (isFormData(body)) {
		return `multipart/form-data; boundary=${request[INTERNALS].boundary}`;
	}

	// Body is stream - can't really do much about this
	if (body instanceof Stream) {
		return null;
	}

	// Body constructor defaults other things to string
	return 'text/plain;charset=UTF-8';
};

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param {any} obj.body Body object from the Body instance.
 * @returns {number | null}
 */
const getTotalBytes = request => {
	const {body} = request;

	// Body is null or undefined
	if (body === null) {
		return 0;
	}

	// Body is Blob
	if (isBlob(body)) {
		return body.size;
	}

	// Body is Buffer
	if (Buffer.isBuffer(body)) {
		return body.length;
	}

	// Detect form data input from form-data module
	if (body && typeof body.getLengthSync === 'function') {
		return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
	}

	// Body is a spec-compliant form-data
	if (isFormData(body)) {
		return getFormDataLength(request[INTERNALS].boundary);
	}

	// Body is stream
	return null;
};

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param {Stream.Writable} dest The stream to write to.
 * @param obj.body Body object from the Body instance.
 * @returns {void}
 */
const writeToStream = (dest, {body}) => {
	if (body === null) {
		// Body is null
		dest.end();
	} else if (isBlob(body)) {
		// Body is Blob
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// Body is buffer
		dest.write(body);
		dest.end();
	} else {
		// Body is stream
		body.pipe(dest);
	}
};

/**
 * Headers.js
 *
 * Headers class offers convenient helpers
 */

const validateHeaderName = typeof http.validateHeaderName === 'function' ?
	http.validateHeaderName :
	name => {
		if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
			const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
			Object.defineProperty(err, 'code', {value: 'ERR_INVALID_HTTP_TOKEN'});
			throw err;
		}
	};

const validateHeaderValue = typeof http.validateHeaderValue === 'function' ?
	http.validateHeaderValue :
	(name, value) => {
		if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
			const err = new TypeError(`Invalid character in header content ["${name}"]`);
			Object.defineProperty(err, 'code', {value: 'ERR_INVALID_CHAR'});
			throw err;
		}
	};

/**
 * @typedef {Headers | Record<string, string> | Iterable<readonly [string, string]> | Iterable<Iterable<string>>} HeadersInit
 */

/**
 * This Fetch API interface allows you to perform various actions on HTTP request and response headers.
 * These actions include retrieving, setting, adding to, and removing.
 * A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.
 * You can add to this using methods like append() (see Examples.)
 * In all methods of this interface, header names are matched by case-insensitive byte sequence.
 *
 */
class Headers extends URLSearchParams {
	/**
	 * Headers class
	 *
	 * @constructor
	 * @param {HeadersInit} [init] - Response headers
	 */
	constructor(init) {
		// Validate and normalize init object in [name, value(s)][]
		/** @type {string[][]} */
		let result = [];
		if (init instanceof Headers) {
			const raw = init.raw();
			for (const [name, values] of Object.entries(raw)) {
				result.push(...values.map(value => [name, value]));
			}
		} else if (init == null) ; else if (typeof init === 'object' && !util.types.isBoxedPrimitive(init)) {
			const method = init[Symbol.iterator];
			// eslint-disable-next-line no-eq-null, eqeqeq
			if (method == null) {
				// Record<ByteString, ByteString>
				result.push(...Object.entries(init));
			} else {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// Sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				result = [...init]
					.map(pair => {
						if (
							typeof pair !== 'object' || util.types.isBoxedPrimitive(pair)
						) {
							throw new TypeError('Each header pair must be an iterable object');
						}

						return [...pair];
					}).map(pair => {
						if (pair.length !== 2) {
							throw new TypeError('Each header pair must be a name/value tuple');
						}

						return [...pair];
					});
			}
		} else {
			throw new TypeError('Failed to construct \'Headers\': The provided value is not of type \'(sequence<sequence<ByteString>> or record<ByteString, ByteString>)');
		}

		// Validate and lowercase
		result =
			result.length > 0 ?
				result.map(([name, value]) => {
					validateHeaderName(name);
					validateHeaderValue(name, String(value));
					return [String(name).toLowerCase(), String(value)];
				}) :
				undefined;

		super(result);

		// Returning a Proxy that will lowercase key names, validate parameters and sort keys
		// eslint-disable-next-line no-constructor-return
		return new Proxy(this, {
			get(target, p, receiver) {
				switch (p) {
					case 'append':
					case 'set':
						return (name, value) => {
							validateHeaderName(name);
							validateHeaderValue(name, String(value));
							return URLSearchParams.prototype[p].call(
								receiver,
								String(name).toLowerCase(),
								String(value)
							);
						};

					case 'delete':
					case 'has':
					case 'getAll':
						return name => {
							validateHeaderName(name);
							return URLSearchParams.prototype[p].call(
								receiver,
								String(name).toLowerCase()
							);
						};

					case 'keys':
						return () => {
							target.sort();
							return new Set(URLSearchParams.prototype.keys.call(target)).keys();
						};

					default:
						return Reflect.get(target, p, receiver);
				}
			}
			/* c8 ignore next */
		});
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}

	toString() {
		return Object.prototype.toString.call(this);
	}

	get(name) {
		const values = this.getAll(name);
		if (values.length === 0) {
			return null;
		}

		let value = values.join(', ');
		if (/^content-encoding$/i.test(name)) {
			value = value.toLowerCase();
		}

		return value;
	}

	forEach(callback) {
		for (const name of this.keys()) {
			callback(this.get(name), name);
		}
	}

	* values() {
		for (const name of this.keys()) {
			yield this.get(name);
		}
	}

	/**
	 * @type {() => IterableIterator<[string, string]>}
	 */
	* entries() {
		for (const name of this.keys()) {
			yield [name, this.get(name)];
		}
	}

	[Symbol.iterator]() {
		return this.entries();
	}

	/**
	 * Node-fetch non-spec method
	 * returning all headers and their values as array
	 * @returns {Record<string, string[]>}
	 */
	raw() {
		return [...this.keys()].reduce((result, key) => {
			result[key] = this.getAll(key);
			return result;
		}, {});
	}

	/**
	 * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
	 */
	[Symbol.for('nodejs.util.inspect.custom')]() {
		return [...this.keys()].reduce((result, key) => {
			const values = this.getAll(key);
			// Http.request() only supports string as Host header.
			// This hack makes specifying custom Host header possible.
			if (key === 'host') {
				result[key] = values[0];
			} else {
				result[key] = values.length > 1 ? values : values[0];
			}

			return result;
		}, {});
	}
}

/**
 * Re-shaping object for Web IDL tests
 * Only need to do it for overridden methods
 */
Object.defineProperties(
	Headers.prototype,
	['get', 'entries', 'forEach', 'values'].reduce((result, property) => {
		result[property] = {enumerable: true};
		return result;
	}, {})
);

/**
 * Create a Headers object from an http.IncomingMessage.rawHeaders, ignoring those that do
 * not conform to HTTP grammar productions.
 * @param {import('http').IncomingMessage['rawHeaders']} headers
 */
function fromRawHeaders(headers = []) {
	return new Headers(
		headers
			// Split into pairs
			.reduce((result, value, index, array) => {
				if (index % 2 === 0) {
					result.push(array.slice(index, index + 2));
				}

				return result;
			}, [])
			.filter(([name, value]) => {
				try {
					validateHeaderName(name);
					validateHeaderValue(name, String(value));
					return true;
				} catch {
					return false;
				}
			})

	);
}

const redirectStatus = new Set([301, 302, 303, 307, 308]);

/**
 * Redirect code matching
 *
 * @param {number} code - Status code
 * @return {boolean}
 */
const isRedirect = code => {
	return redirectStatus.has(code);
};

/**
 * Response.js
 *
 * Response class provides content decoding
 */

const INTERNALS$1 = Symbol('Response internals');

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response extends Body {
	constructor(body = null, options = {}) {
		super(body, options);

		const status = options.status || 200;
		const headers = new Headers(options.headers);

		if (body !== null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: options.url,
			status,
			statusText: options.statusText || '',
			headers,
			counter: options.counter,
			highWaterMark: options.highWaterMark
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
	 * Convenience property representing if the request ended normally
	 */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	get highWaterMark() {
		return this[INTERNALS$1].highWaterMark;
	}

	/**
	 * Clone this response
	 *
	 * @return  Response
	 */
	clone() {
		return new Response(clone(this, this.highWaterMark), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected,
			size: this.size
		});
	}

	/**
	 * @param {string} url    The URL that the new response is to originate from.
	 * @param {number} status An optional status code for the response (e.g., 302.)
	 * @returns {Response}    A Response object.
	 */
	static redirect(url, status = 302) {
		if (!isRedirect(status)) {
			throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
		}

		return new Response(null, {
			headers: {
				location: new URL(url).toString()
			},
			status
		});
	}

	get [Symbol.toStringTag]() {
		return 'Response';
	}
}

Object.defineProperties(Response.prototype, {
	url: {enumerable: true},
	status: {enumerable: true},
	ok: {enumerable: true},
	redirected: {enumerable: true},
	statusText: {enumerable: true},
	headers: {enumerable: true},
	clone: {enumerable: true}
});

const getSearch = parsedURL => {
	if (parsedURL.search) {
		return parsedURL.search;
	}

	const lastOffset = parsedURL.href.length - 1;
	const hash = parsedURL.hash || (parsedURL.href[lastOffset] === '#' ? '#' : '');
	return parsedURL.href[lastOffset - hash.length] === '?' ? '?' : '';
};

const INTERNALS$2 = Symbol('Request internals');

/**
 * Check if `obj` is an instance of Request.
 *
 * @param  {*} obj
 * @return {boolean}
 */
const isRequest = object => {
	return (
		typeof object === 'object' &&
		typeof object[INTERNALS$2] === 'object'
	);
};

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request extends Body {
	constructor(input, init = {}) {
		let parsedURL;

		// Normalize input and force URL to be encoded as UTF-8 (https://github.com/node-fetch/node-fetch/issues/245)
		if (isRequest(input)) {
			parsedURL = new URL(input.url);
		} else {
			parsedURL = new URL(input);
			input = {};
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		// eslint-disable-next-line no-eq-null, eqeqeq
		if (((init.body != null || isRequest(input)) && input.body !== null) &&
			(method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		const inputBody = init.body ?
			init.body :
			(isRequest(input) && input.body !== null ?
				clone(input) :
				null);

		super(inputBody, {
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody !== null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody, this);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ?
			input.signal :
			null;
		if ('signal' in init) {
			signal = init.signal;
		}

		if (signal !== null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// Node-fetch-only options
		this.follow = init.follow === undefined ? (input.follow === undefined ? 20 : input.follow) : init.follow;
		this.compress = init.compress === undefined ? (input.compress === undefined ? true : input.compress) : init.compress;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
		this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
		this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return url.format(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
	 * Clone this request
	 *
	 * @return  Request
	 */
	clone() {
		return new Request(this);
	}

	get [Symbol.toStringTag]() {
		return 'Request';
	}
}

Object.defineProperties(Request.prototype, {
	method: {enumerable: true},
	url: {enumerable: true},
	headers: {enumerable: true},
	redirect: {enumerable: true},
	clone: {enumerable: true},
	signal: {enumerable: true}
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
const getNodeRequestOptions = request => {
	const {parsedURL} = request[INTERNALS$2];
	const headers = new Headers(request[INTERNALS$2].headers);

	// Fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body === null && /^(post|put)$/i.test(request.method)) {
		contentLengthValue = '0';
	}

	if (request.body !== null) {
		const totalBytes = getTotalBytes(request);
		// Set Content-Length if totalBytes is a number (that is not NaN)
		if (typeof totalBytes === 'number' && !Number.isNaN(totalBytes)) {
			contentLengthValue = String(totalBytes);
		}
	}

	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate,br');
	}

	let {agent} = request;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	const search = getSearch(parsedURL);

	// Manually spread the URL object instead of spread syntax
	const requestOptions = {
		path: parsedURL.pathname + search,
		pathname: parsedURL.pathname,
		hostname: parsedURL.hostname,
		protocol: parsedURL.protocol,
		port: parsedURL.port,
		hash: parsedURL.hash,
		search: parsedURL.search,
		query: parsedURL.query,
		href: parsedURL.href,
		method: request.method,
		headers: headers[Symbol.for('nodejs.util.inspect.custom')](),
		insecureHTTPParser: request.insecureHTTPParser,
		agent
	};

	return requestOptions;
};

/**
 * AbortError interface for cancelled requests
 */
class AbortError extends FetchBaseError {
	constructor(message, type = 'aborted') {
		super(message, type);
	}
}

/**
 * Index.js
 *
 * a request API compatible with window.fetch
 *
 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
 */

const supportedSchemas = new Set(['data:', 'http:', 'https:']);

/**
 * Fetch function
 *
 * @param   {string | URL | import('./request').default} url - Absolute url or Request instance
 * @param   {*} [options_] - Fetch options
 * @return  {Promise<import('./response').default>}
 */
async function fetch(url, options_) {
	return new Promise((resolve, reject) => {
		// Build request object
		const request = new Request(url, options_);
		const options = getNodeRequestOptions(request);
		if (!supportedSchemas.has(options.protocol)) {
			throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options.protocol.replace(/:$/, '')}" is not supported.`);
		}

		if (options.protocol === 'data:') {
			const data = dataUriToBuffer(request.url);
			const response = new Response(data, {headers: {'Content-Type': data.typeFull}});
			resolve(response);
			return;
		}

		// Wrap http.request into fetch
		const send = (options.protocol === 'https:' ? https : http).request;
		const {signal} = request;
		let response = null;

		const abort = () => {
			const error = new AbortError('The operation was aborted.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}

			if (!response || !response.body) {
				return;
			}

			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = () => {
			abort();
			finalize();
		};

		// Send request
		const request_ = send(options);

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		const finalize = () => {
			request_.abort();
			if (signal) {
				signal.removeEventListener('abort', abortAndFinalize);
			}
		};

		request_.on('error', err => {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		request_.on('response', response_ => {
			request_.setTimeout(0);
			const headers = fromRawHeaders(response_.rawHeaders);

			// HTTP fetch step 5
			if (isRedirect(response_.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : new URL(location, request.url);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// Node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// Handle corrupted header
							try {
								headers.set('Location', locationURL);
								/* c8 ignore next 3 */
							} catch (error) {
								reject(error);
							}
						}

						break;
					case 'follow': {
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOptions = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (response_.statusCode !== 303 && request.body && options_.body instanceof Stream.Readable) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (response_.statusCode === 303 || ((response_.statusCode === 301 || response_.statusCode === 302) && request.method === 'POST')) {
							requestOptions.method = 'GET';
							requestOptions.body = undefined;
							requestOptions.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOptions)));
						finalize();
						return;
					}
					// Do nothing
				}
			}

			// Prepare response
			response_.once('end', () => {
				if (signal) {
					signal.removeEventListener('abort', abortAndFinalize);
				}
			});

			let body = Stream.pipeline(response_, new Stream.PassThrough(), error => {
				reject(error);
			});
			// see https://github.com/nodejs/node/pull/29376
			if (process.version < 'v12.10') {
				response_.on('aborted', abortAndFinalize);
			}

			const responseOptions = {
				url: request.url,
				status: response_.statusCode,
				statusText: response_.statusMessage,
				headers,
				size: request.size,
				counter: request.counter,
				highWaterMark: request.highWaterMark
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
				response = new Response(body, responseOptions);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// For gzip
			if (codings === 'gzip' || codings === 'x-gzip') {
				body = Stream.pipeline(body, zlib.createGunzip(zlibOptions), error => {
					reject(error);
				});
				response = new Response(body, responseOptions);
				resolve(response);
				return;
			}

			// For deflate
			if (codings === 'deflate' || codings === 'x-deflate') {
				// Handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = Stream.pipeline(response_, new Stream.PassThrough(), error => {
					reject(error);
				});
				raw.once('data', chunk => {
					// See http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = Stream.pipeline(body, zlib.createInflate(), error => {
							reject(error);
						});
					} else {
						body = Stream.pipeline(body, zlib.createInflateRaw(), error => {
							reject(error);
						});
					}

					response = new Response(body, responseOptions);
					resolve(response);
				});
				return;
			}

			// For br
			if (codings === 'br') {
				body = Stream.pipeline(body, zlib.createBrotliDecompress(), error => {
					reject(error);
				});
				response = new Response(body, responseOptions);
				resolve(response);
				return;
			}

			// Otherwise, use response as-is
			response = new Response(body, responseOptions);
			resolve(response);
		});

		writeToStream(request_, request);
	});
}

exports.AbortError = AbortError;
exports.FetchError = FetchError;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.default = fetch;
exports.isRedirect = isRedirect;
//# sourceMappingURL=index.cjs.map


/***/ }),

/***/ "./node_modules/url-join/lib/url-join.js":
/*!***********************************************!*\
  !*** ./node_modules/url-join/lib/url-join.js ***!
  \***********************************************/
/***/ ((module) => {

function normalize (str) {
  return str
          .replace(/[\/]+/g, '/')
          .replace(/\/\?/g, '?')
          .replace(/\/\#/g, '#')
          .replace(/\:\//g, '://');
}

module.exports = function () {
  var joined = [].slice.call(arguments, 0).join('/');
  return normalize(joined);
};

/***/ }),

/***/ "./node_modules/web-streams-polyfill/dist/ponyfill.es2018.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/web-streams-polyfill/dist/ponyfill.es2018.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByteLengthQueuingStrategy": () => /* binding */ ByteLengthQueuingStrategy,
/* harmony export */   "CountQueuingStrategy": () => /* binding */ CountQueuingStrategy,
/* harmony export */   "ReadableByteStreamController": () => /* binding */ ReadableByteStreamController,
/* harmony export */   "ReadableStream": () => /* binding */ ReadableStream,
/* harmony export */   "ReadableStreamBYOBReader": () => /* binding */ ReadableStreamBYOBReader,
/* harmony export */   "ReadableStreamBYOBRequest": () => /* binding */ ReadableStreamBYOBRequest,
/* harmony export */   "ReadableStreamDefaultController": () => /* binding */ ReadableStreamDefaultController,
/* harmony export */   "ReadableStreamDefaultReader": () => /* binding */ ReadableStreamDefaultReader,
/* harmony export */   "TransformStream": () => /* binding */ TransformStream,
/* harmony export */   "TransformStreamDefaultController": () => /* binding */ TransformStreamDefaultController,
/* harmony export */   "WritableStream": () => /* binding */ WritableStream,
/* harmony export */   "WritableStreamDefaultController": () => /* binding */ WritableStreamDefaultController,
/* harmony export */   "WritableStreamDefaultWriter": () => /* binding */ WritableStreamDefaultWriter
/* harmony export */ });
/**
 * web-streams-polyfill v3.0.1
 */
/// <reference lib="es2015.symbol" />
const SymbolPolyfill = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ?
    Symbol :
    description => `Symbol(${description})`;

/// <reference lib="dom" />
function noop() {
    // do nothing
}
function getGlobals() {
    if (typeof self !== 'undefined') {
        return self;
    }
    else if (typeof window !== 'undefined') {
        return window;
    }
    else if (typeof global !== 'undefined') {
        return global;
    }
    return undefined;
}
const globals = getGlobals();

function typeIsObject(x) {
    return (typeof x === 'object' && x !== null) || typeof x === 'function';
}
const rethrowAssertionErrorRejection =  noop;

const originalPromise = Promise;
const originalPromiseThen = Promise.prototype.then;
const originalPromiseResolve = Promise.resolve.bind(originalPromise);
const originalPromiseReject = Promise.reject.bind(originalPromise);
function newPromise(executor) {
    return new originalPromise(executor);
}
function promiseResolvedWith(value) {
    return originalPromiseResolve(value);
}
function promiseRejectedWith(reason) {
    return originalPromiseReject(reason);
}
function PerformPromiseThen(promise, onFulfilled, onRejected) {
    // There doesn't appear to be any way to correctly emulate the behaviour from JavaScript, so this is just an
    // approximation.
    return originalPromiseThen.call(promise, onFulfilled, onRejected);
}
function uponPromise(promise, onFulfilled, onRejected) {
    PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), undefined, rethrowAssertionErrorRejection);
}
function uponFulfillment(promise, onFulfilled) {
    uponPromise(promise, onFulfilled);
}
function uponRejection(promise, onRejected) {
    uponPromise(promise, undefined, onRejected);
}
function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
    return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
}
function setPromiseIsHandledToTrue(promise) {
    PerformPromiseThen(promise, undefined, rethrowAssertionErrorRejection);
}
const queueMicrotask = (() => {
    const globalQueueMicrotask = globals && globals.queueMicrotask;
    if (typeof globalQueueMicrotask === 'function') {
        return globalQueueMicrotask;
    }
    const resolvedPromise = promiseResolvedWith(undefined);
    return (fn) => PerformPromiseThen(resolvedPromise, fn);
})();
function reflectCall(F, V, args) {
    if (typeof F !== 'function') {
        throw new TypeError('Argument is not a function');
    }
    return Function.prototype.apply.call(F, V, args);
}
function promiseCall(F, V, args) {
    try {
        return promiseResolvedWith(reflectCall(F, V, args));
    }
    catch (value) {
        return promiseRejectedWith(value);
    }
}

// Original from Chromium
// https://chromium.googlesource.com/chromium/src/+/0aee4434a4dba42a42abaea9bfbc0cd196a63bc1/third_party/blink/renderer/core/streams/SimpleQueue.js
const QUEUE_MAX_ARRAY_SIZE = 16384;
/**
 * Simple queue structure.
 *
 * Avoids scalability issues with using a packed array directly by using
 * multiple arrays in a linked list and keeping the array size bounded.
 */
class SimpleQueue {
    constructor() {
        this._cursor = 0;
        this._size = 0;
        // _front and _back are always defined.
        this._front = {
            _elements: [],
            _next: undefined
        };
        this._back = this._front;
        // The cursor is used to avoid calling Array.shift().
        // It contains the index of the front element of the array inside the
        // front-most node. It is always in the range [0, QUEUE_MAX_ARRAY_SIZE).
        this._cursor = 0;
        // When there is only one node, size === elements.length - cursor.
        this._size = 0;
    }
    get length() {
        return this._size;
    }
    // For exception safety, this method is structured in order:
    // 1. Read state
    // 2. Calculate required state mutations
    // 3. Perform state mutations
    push(element) {
        const oldBack = this._back;
        let newBack = oldBack;
        if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
            newBack = {
                _elements: [],
                _next: undefined
            };
        }
        // push() is the mutation most likely to throw an exception, so it
        // goes first.
        oldBack._elements.push(element);
        if (newBack !== oldBack) {
            this._back = newBack;
            oldBack._next = newBack;
        }
        ++this._size;
    }
    // Like push(), shift() follows the read -> calculate -> mutate pattern for
    // exception safety.
    shift() { // must not be called on an empty queue
        const oldFront = this._front;
        let newFront = oldFront;
        const oldCursor = this._cursor;
        let newCursor = oldCursor + 1;
        const elements = oldFront._elements;
        const element = elements[oldCursor];
        if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
            newFront = oldFront._next;
            newCursor = 0;
        }
        // No mutations before this point.
        --this._size;
        this._cursor = newCursor;
        if (oldFront !== newFront) {
            this._front = newFront;
        }
        // Permit shifted element to be garbage collected.
        elements[oldCursor] = undefined;
        return element;
    }
    // The tricky thing about forEach() is that it can be called
    // re-entrantly. The queue may be mutated inside the callback. It is easy to
    // see that push() within the callback has no negative effects since the end
    // of the queue is checked for on every iteration. If shift() is called
    // repeatedly within the callback then the next iteration may return an
    // element that has been removed. In this case the callback will be called
    // with undefined values until we either "catch up" with elements that still
    // exist or reach the back of the queue.
    forEach(callback) {
        let i = this._cursor;
        let node = this._front;
        let elements = node._elements;
        while (i !== elements.length || node._next !== undefined) {
            if (i === elements.length) {
                node = node._next;
                elements = node._elements;
                i = 0;
                if (elements.length === 0) {
                    break;
                }
            }
            callback(elements[i]);
            ++i;
        }
    }
    // Return the element that would be returned if shift() was called now,
    // without modifying the queue.
    peek() { // must not be called on an empty queue
        const front = this._front;
        const cursor = this._cursor;
        return front._elements[cursor];
    }
}

function ReadableStreamReaderGenericInitialize(reader, stream) {
    reader._ownerReadableStream = stream;
    stream._reader = reader;
    if (stream._state === 'readable') {
        defaultReaderClosedPromiseInitialize(reader);
    }
    else if (stream._state === 'closed') {
        defaultReaderClosedPromiseInitializeAsResolved(reader);
    }
    else {
        defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
    }
}
// A client of ReadableStreamDefaultReader and ReadableStreamBYOBReader may use these functions directly to bypass state
// check.
function ReadableStreamReaderGenericCancel(reader, reason) {
    const stream = reader._ownerReadableStream;
    return ReadableStreamCancel(stream, reason);
}
function ReadableStreamReaderGenericRelease(reader) {
    if (reader._ownerReadableStream._state === 'readable') {
        defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
    }
    else {
        defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
    }
    reader._ownerReadableStream._reader = undefined;
    reader._ownerReadableStream = undefined;
}
// Helper functions for the readers.
function readerLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released reader');
}
// Helper functions for the ReadableStreamDefaultReader.
function defaultReaderClosedPromiseInitialize(reader) {
    reader._closedPromise = newPromise((resolve, reject) => {
        reader._closedPromise_resolve = resolve;
        reader._closedPromise_reject = reject;
    });
}
function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
    defaultReaderClosedPromiseInitialize(reader);
    defaultReaderClosedPromiseReject(reader, reason);
}
function defaultReaderClosedPromiseInitializeAsResolved(reader) {
    defaultReaderClosedPromiseInitialize(reader);
    defaultReaderClosedPromiseResolve(reader);
}
function defaultReaderClosedPromiseReject(reader, reason) {
    if (reader._closedPromise_reject === undefined) {
        return;
    }
    setPromiseIsHandledToTrue(reader._closedPromise);
    reader._closedPromise_reject(reason);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
}
function defaultReaderClosedPromiseResetToRejected(reader, reason) {
    defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
}
function defaultReaderClosedPromiseResolve(reader) {
    if (reader._closedPromise_resolve === undefined) {
        return;
    }
    reader._closedPromise_resolve(undefined);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
}

const AbortSteps = SymbolPolyfill('[[AbortSteps]]');
const ErrorSteps = SymbolPolyfill('[[ErrorSteps]]');
const CancelSteps = SymbolPolyfill('[[CancelSteps]]');
const PullSteps = SymbolPolyfill('[[PullSteps]]');

/// <reference lib="es2015.core" />
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
const NumberIsFinite = Number.isFinite || function (x) {
    return typeof x === 'number' && isFinite(x);
};

/// <reference lib="es2015.core" />
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
const MathTrunc = Math.trunc || function (v) {
    return v < 0 ? Math.ceil(v) : Math.floor(v);
};

// https://heycam.github.io/webidl/#idl-dictionaries
function isDictionary(x) {
    return typeof x === 'object' || typeof x === 'function';
}
function assertDictionary(obj, context) {
    if (obj !== undefined && !isDictionary(obj)) {
        throw new TypeError(`${context} is not an object.`);
    }
}
// https://heycam.github.io/webidl/#idl-callback-functions
function assertFunction(x, context) {
    if (typeof x !== 'function') {
        throw new TypeError(`${context} is not a function.`);
    }
}
// https://heycam.github.io/webidl/#idl-object
function isObject(x) {
    return (typeof x === 'object' && x !== null) || typeof x === 'function';
}
function assertObject(x, context) {
    if (!isObject(x)) {
        throw new TypeError(`${context} is not an object.`);
    }
}
function assertRequiredArgument(x, position, context) {
    if (x === undefined) {
        throw new TypeError(`Parameter ${position} is required in '${context}'.`);
    }
}
function assertRequiredField(x, field, context) {
    if (x === undefined) {
        throw new TypeError(`${field} is required in '${context}'.`);
    }
}
// https://heycam.github.io/webidl/#idl-unrestricted-double
function convertUnrestrictedDouble(value) {
    return Number(value);
}
function censorNegativeZero(x) {
    return x === 0 ? 0 : x;
}
function integerPart(x) {
    return censorNegativeZero(MathTrunc(x));
}
// https://heycam.github.io/webidl/#idl-unsigned-long-long
function convertUnsignedLongLongWithEnforceRange(value, context) {
    const lowerBound = 0;
    const upperBound = Number.MAX_SAFE_INTEGER;
    let x = Number(value);
    x = censorNegativeZero(x);
    if (!NumberIsFinite(x)) {
        throw new TypeError(`${context} is not a finite number`);
    }
    x = integerPart(x);
    if (x < lowerBound || x > upperBound) {
        throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
    }
    if (!NumberIsFinite(x) || x === 0) {
        return 0;
    }
    // TODO Use BigInt if supported?
    // let xBigInt = BigInt(integerPart(x));
    // xBigInt = BigInt.asUintN(64, xBigInt);
    // return Number(xBigInt);
    return x;
}

function assertReadableStream(x, context) {
    if (!IsReadableStream(x)) {
        throw new TypeError(`${context} is not a ReadableStream.`);
    }
}

// Abstract operations for the ReadableStream.
function AcquireReadableStreamDefaultReader(stream) {
    return new ReadableStreamDefaultReader(stream);
}
// ReadableStream API exposed for controllers.
function ReadableStreamAddReadRequest(stream, readRequest) {
    stream._reader._readRequests.push(readRequest);
}
function ReadableStreamFulfillReadRequest(stream, chunk, done) {
    const reader = stream._reader;
    const readRequest = reader._readRequests.shift();
    if (done) {
        readRequest._closeSteps();
    }
    else {
        readRequest._chunkSteps(chunk);
    }
}
function ReadableStreamGetNumReadRequests(stream) {
    return stream._reader._readRequests.length;
}
function ReadableStreamHasDefaultReader(stream) {
    const reader = stream._reader;
    if (reader === undefined) {
        return false;
    }
    if (!IsReadableStreamDefaultReader(reader)) {
        return false;
    }
    return true;
}
/**
 * A default reader vended by a {@link ReadableStream}.
 *
 * @public
 */
class ReadableStreamDefaultReader {
    constructor(stream) {
        assertRequiredArgument(stream, 1, 'ReadableStreamDefaultReader');
        assertReadableStream(stream, 'First parameter');
        if (IsReadableStreamLocked(stream)) {
            throw new TypeError('This stream has already been locked for exclusive reading by another reader');
        }
        ReadableStreamReaderGenericInitialize(this, stream);
        this._readRequests = new SimpleQueue();
    }
    /**
     * Returns a promise that will be fulfilled when the stream becomes closed,
     * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
     */
    get closed() {
        if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException('closed'));
        }
        return this._closedPromise;
    }
    /**
     * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
     */
    cancel(reason = undefined) {
        if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException('cancel'));
        }
        if (this._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('cancel'));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
    }
    /**
     * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
     *
     * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
     */
    read() {
        if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException('read'));
        }
        if (this._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('read from'));
        }
        let resolvePromise;
        let rejectPromise;
        const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
        });
        const readRequest = {
            _chunkSteps: chunk => resolvePromise({ value: chunk, done: false }),
            _closeSteps: () => resolvePromise({ value: undefined, done: true }),
            _errorSteps: e => rejectPromise(e)
        };
        ReadableStreamDefaultReaderRead(this, readRequest);
        return promise;
    }
    /**
     * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
     * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
     * from now on; otherwise, the reader will appear closed.
     *
     * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
     * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
     * do so will throw a `TypeError` and leave the reader locked to the stream.
     */
    releaseLock() {
        if (!IsReadableStreamDefaultReader(this)) {
            throw defaultReaderBrandCheckException('releaseLock');
        }
        if (this._ownerReadableStream === undefined) {
            return;
        }
        if (this._readRequests.length > 0) {
            throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }
        ReadableStreamReaderGenericRelease(this);
    }
}
Object.defineProperties(ReadableStreamDefaultReader.prototype, {
    cancel: { enumerable: true },
    read: { enumerable: true },
    releaseLock: { enumerable: true },
    closed: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStreamDefaultReader',
        configurable: true
    });
}
// Abstract operations for the readers.
function IsReadableStreamDefaultReader(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
        return false;
    }
    return true;
}
function ReadableStreamDefaultReaderRead(reader, readRequest) {
    const stream = reader._ownerReadableStream;
    stream._disturbed = true;
    if (stream._state === 'closed') {
        readRequest._closeSteps();
    }
    else if (stream._state === 'errored') {
        readRequest._errorSteps(stream._storedError);
    }
    else {
        stream._readableStreamController[PullSteps](readRequest);
    }
}
// Helper functions for the ReadableStreamDefaultReader.
function defaultReaderBrandCheckException(name) {
    return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
}

/// <reference lib="es2018.asynciterable" />
/* eslint-disable @typescript-eslint/no-empty-function */
const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () { }).prototype);

/// <reference lib="es2018.asynciterable" />
class ReadableStreamAsyncIteratorImpl {
    constructor(reader, preventCancel) {
        this._ongoingPromise = undefined;
        this._isFinished = false;
        this._reader = reader;
        this._preventCancel = preventCancel;
    }
    next() {
        const nextSteps = () => this._nextSteps();
        this._ongoingPromise = this._ongoingPromise ?
            transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) :
            nextSteps();
        return this._ongoingPromise;
    }
    return(value) {
        const returnSteps = () => this._returnSteps(value);
        return this._ongoingPromise ?
            transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) :
            returnSteps();
    }
    _nextSteps() {
        if (this._isFinished) {
            return Promise.resolve({ value: undefined, done: true });
        }
        const reader = this._reader;
        if (reader._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('iterate'));
        }
        let resolvePromise;
        let rejectPromise;
        const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
        });
        const readRequest = {
            _chunkSteps: chunk => {
                this._ongoingPromise = undefined;
                // This needs to be delayed by one microtask, otherwise we stop pulling too early which breaks a test.
                // FIXME Is this a bug in the specification, or in the test?
                queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
            },
            _closeSteps: () => {
                this._ongoingPromise = undefined;
                this._isFinished = true;
                ReadableStreamReaderGenericRelease(reader);
                resolvePromise({ value: undefined, done: true });
            },
            _errorSteps: reason => {
                this._ongoingPromise = undefined;
                this._isFinished = true;
                ReadableStreamReaderGenericRelease(reader);
                rejectPromise(reason);
            }
        };
        ReadableStreamDefaultReaderRead(reader, readRequest);
        return promise;
    }
    _returnSteps(value) {
        if (this._isFinished) {
            return Promise.resolve({ value, done: true });
        }
        this._isFinished = true;
        const reader = this._reader;
        if (reader._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('finish iterating'));
        }
        if (!this._preventCancel) {
            const result = ReadableStreamReaderGenericCancel(reader, value);
            ReadableStreamReaderGenericRelease(reader);
            return transformPromiseWith(result, () => ({ value, done: true }));
        }
        ReadableStreamReaderGenericRelease(reader);
        return promiseResolvedWith({ value, done: true });
    }
}
const ReadableStreamAsyncIteratorPrototype = {
    next() {
        if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(streamAsyncIteratorBrandCheckException('next'));
        }
        return this._asyncIteratorImpl.next();
    },
    return(value) {
        if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(streamAsyncIteratorBrandCheckException('return'));
        }
        return this._asyncIteratorImpl.return(value);
    }
};
if (AsyncIteratorPrototype !== undefined) {
    Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
}
// Abstract operations for the ReadableStream.
function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
    const reader = AcquireReadableStreamDefaultReader(stream);
    const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
    const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
    iterator._asyncIteratorImpl = impl;
    return iterator;
}
function IsReadableStreamAsyncIterator(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_asyncIteratorImpl')) {
        return false;
    }
    return true;
}
// Helper functions for the ReadableStream.
function streamAsyncIteratorBrandCheckException(name) {
    return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
}

/// <reference lib="es2015.core" />
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
const NumberIsNaN = Number.isNaN || function (x) {
    // eslint-disable-next-line no-self-compare
    return x !== x;
};

function IsFiniteNonNegativeNumber(v) {
    if (!IsNonNegativeNumber(v)) {
        return false;
    }
    if (v === Infinity) {
        return false;
    }
    return true;
}
function IsNonNegativeNumber(v) {
    if (typeof v !== 'number') {
        return false;
    }
    if (NumberIsNaN(v)) {
        return false;
    }
    if (v < 0) {
        return false;
    }
    return true;
}

function DequeueValue(container) {
    const pair = container._queue.shift();
    container._queueTotalSize -= pair.size;
    if (container._queueTotalSize < 0) {
        container._queueTotalSize = 0;
    }
    return pair.value;
}
function EnqueueValueWithSize(container, value, size) {
    size = Number(size);
    if (!IsFiniteNonNegativeNumber(size)) {
        throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
    }
    container._queue.push({ value, size });
    container._queueTotalSize += size;
}
function PeekQueueValue(container) {
    const pair = container._queue.peek();
    return pair.value;
}
function ResetQueue(container) {
    container._queue = new SimpleQueue();
    container._queueTotalSize = 0;
}

function CreateArrayFromList(elements) {
    // We use arrays to represent lists, so this is basically a no-op.
    // Do a slice though just in case we happen to depend on the unique-ness.
    return elements.slice();
}
function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
    new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
}
// Not implemented correctly
function TransferArrayBuffer(O) {
    return O;
}
// Not implemented correctly
function IsDetachedBuffer(O) {
    return false;
}

/**
 * A pull-into request in a {@link ReadableByteStreamController}.
 *
 * @public
 */
class ReadableStreamBYOBRequest {
    constructor() {
        throw new TypeError('Illegal constructor');
    }
    /**
     * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
     */
    get view() {
        if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException('view');
        }
        return this._view;
    }
    respond(bytesWritten) {
        if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException('respond');
        }
        assertRequiredArgument(bytesWritten, 1, 'respond');
        bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, 'First parameter');
        if (this._associatedReadableByteStreamController === undefined) {
            throw new TypeError('This BYOB request has been invalidated');
        }
        if (IsDetachedBuffer(this._view.buffer)) ;
        ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
    }
    respondWithNewView(view) {
        if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException('respondWithNewView');
        }
        assertRequiredArgument(view, 1, 'respondWithNewView');
        if (!ArrayBuffer.isView(view)) {
            throw new TypeError('You can only respond with array buffer views');
        }
        if (view.byteLength === 0) {
            throw new TypeError('chunk must have non-zero byteLength');
        }
        if (view.buffer.byteLength === 0) {
            throw new TypeError(`chunk's buffer must have non-zero byteLength`);
        }
        if (this._associatedReadableByteStreamController === undefined) {
            throw new TypeError('This BYOB request has been invalidated');
        }
        ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
    }
}
Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
    respond: { enumerable: true },
    respondWithNewView: { enumerable: true },
    view: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStreamBYOBRequest',
        configurable: true
    });
}
/**
 * Allows control of a {@link ReadableStream | readable byte stream}'s state and internal queue.
 *
 * @public
 */
class ReadableByteStreamController {
    constructor() {
        throw new TypeError('Illegal constructor');
    }
    /**
     * Returns the current BYOB pull request, or `null` if there isn't one.
     */
    get byobRequest() {
        if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException('byobRequest');
        }
        if (this._byobRequest === null && this._pendingPullIntos.length > 0) {
            const firstDescriptor = this._pendingPullIntos.peek();
            const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
            const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
            SetUpReadableStreamBYOBRequest(byobRequest, this, view);
            this._byobRequest = byobRequest;
        }
        return this._byobRequest;
    }
    /**
     * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
     * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
     */
    get desiredSize() {
        if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException('desiredSize');
        }
        return ReadableByteStreamControllerGetDesiredSize(this);
    }
    /**
     * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
     * the stream, but once those are read, the stream will become closed.
     */
    close() {
        if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException('close');
        }
        if (this._closeRequested) {
            throw new TypeError('The stream has already been closed; do not close it again!');
        }
        const state = this._controlledReadableByteStream._state;
        if (state !== 'readable') {
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
        }
        ReadableByteStreamControllerClose(this);
    }
    enqueue(chunk) {
        if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException('enqueue');
        }
        assertRequiredArgument(chunk, 1, 'enqueue');
        if (!ArrayBuffer.isView(chunk)) {
            throw new TypeError('chunk must be an array buffer view');
        }
        if (chunk.byteLength === 0) {
            throw new TypeError('chunk must have non-zero byteLength');
        }
        if (chunk.buffer.byteLength === 0) {
            throw new TypeError(`chunk's buffer must have non-zero byteLength`);
        }
        if (this._closeRequested) {
            throw new TypeError('stream is closed or draining');
        }
        const state = this._controlledReadableByteStream._state;
        if (state !== 'readable') {
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
        }
        ReadableByteStreamControllerEnqueue(this, chunk);
    }
    /**
     * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
     */
    error(e = undefined) {
        if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException('error');
        }
        ReadableByteStreamControllerError(this, e);
    }
    /** @internal */
    [CancelSteps](reason) {
        if (this._pendingPullIntos.length > 0) {
            const firstDescriptor = this._pendingPullIntos.peek();
            firstDescriptor.bytesFilled = 0;
        }
        ResetQueue(this);
        const result = this._cancelAlgorithm(reason);
        ReadableByteStreamControllerClearAlgorithms(this);
        return result;
    }
    /** @internal */
    [PullSteps](readRequest) {
        const stream = this._controlledReadableByteStream;
        if (this._queueTotalSize > 0) {
            const entry = this._queue.shift();
            this._queueTotalSize -= entry.byteLength;
            ReadableByteStreamControllerHandleQueueDrain(this);
            const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
            readRequest._chunkSteps(view);
            return;
        }
        const autoAllocateChunkSize = this._autoAllocateChunkSize;
        if (autoAllocateChunkSize !== undefined) {
            let buffer;
            try {
                buffer = new ArrayBuffer(autoAllocateChunkSize);
            }
            catch (bufferE) {
                readRequest._errorSteps(bufferE);
                return;
            }
            const pullIntoDescriptor = {
                buffer,
                byteOffset: 0,
                byteLength: autoAllocateChunkSize,
                bytesFilled: 0,
                elementSize: 1,
                viewConstructor: Uint8Array,
                readerType: 'default'
            };
            this._pendingPullIntos.push(pullIntoDescriptor);
        }
        ReadableStreamAddReadRequest(stream, readRequest);
        ReadableByteStreamControllerCallPullIfNeeded(this);
    }
}
Object.defineProperties(ReadableByteStreamController.prototype, {
    close: { enumerable: true },
    enqueue: { enumerable: true },
    error: { enumerable: true },
    byobRequest: { enumerable: true },
    desiredSize: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableByteStreamController',
        configurable: true
    });
}
// Abstract operations for the ReadableByteStreamController.
function IsReadableByteStreamController(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableByteStream')) {
        return false;
    }
    return true;
}
function IsReadableStreamBYOBRequest(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
        return false;
    }
    return true;
}
function ReadableByteStreamControllerCallPullIfNeeded(controller) {
    const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
    if (!shouldPull) {
        return;
    }
    if (controller._pulling) {
        controller._pullAgain = true;
        return;
    }
    controller._pulling = true;
    // TODO: Test controller argument
    const pullPromise = controller._pullAlgorithm();
    uponPromise(pullPromise, () => {
        controller._pulling = false;
        if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
    }, e => {
        ReadableByteStreamControllerError(controller, e);
    });
}
function ReadableByteStreamControllerClearPendingPullIntos(controller) {
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    controller._pendingPullIntos = new SimpleQueue();
}
function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
    let done = false;
    if (stream._state === 'closed') {
        done = true;
    }
    const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
    if (pullIntoDescriptor.readerType === 'default') {
        ReadableStreamFulfillReadRequest(stream, filledView, done);
    }
    else {
        ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
    }
}
function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
    const bytesFilled = pullIntoDescriptor.bytesFilled;
    const elementSize = pullIntoDescriptor.elementSize;
    return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
}
function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
    controller._queue.push({ buffer, byteOffset, byteLength });
    controller._queueTotalSize += byteLength;
}
function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
    const elementSize = pullIntoDescriptor.elementSize;
    const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
    const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
    const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
    const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
    let totalBytesToCopyRemaining = maxBytesToCopy;
    let ready = false;
    if (maxAlignedBytes > currentAlignedBytes) {
        totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
        ready = true;
    }
    const queue = controller._queue;
    while (totalBytesToCopyRemaining > 0) {
        const headOfQueue = queue.peek();
        const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
        const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
        CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
        if (headOfQueue.byteLength === bytesToCopy) {
            queue.shift();
        }
        else {
            headOfQueue.byteOffset += bytesToCopy;
            headOfQueue.byteLength -= bytesToCopy;
        }
        controller._queueTotalSize -= bytesToCopy;
        ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
        totalBytesToCopyRemaining -= bytesToCopy;
    }
    return ready;
}
function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    pullIntoDescriptor.bytesFilled += size;
}
function ReadableByteStreamControllerHandleQueueDrain(controller) {
    if (controller._queueTotalSize === 0 && controller._closeRequested) {
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamClose(controller._controlledReadableByteStream);
    }
    else {
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
}
function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
    if (controller._byobRequest === null) {
        return;
    }
    controller._byobRequest._associatedReadableByteStreamController = undefined;
    controller._byobRequest._view = null;
    controller._byobRequest = null;
}
function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
    while (controller._pendingPullIntos.length > 0) {
        if (controller._queueTotalSize === 0) {
            return;
        }
        const pullIntoDescriptor = controller._pendingPullIntos.peek();
        if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
            ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
        }
    }
}
function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
    const stream = controller._controlledReadableByteStream;
    let elementSize = 1;
    if (view.constructor !== DataView) {
        elementSize = view.constructor.BYTES_PER_ELEMENT;
    }
    const ctor = view.constructor;
    const buffer = TransferArrayBuffer(view.buffer);
    const pullIntoDescriptor = {
        buffer,
        byteOffset: view.byteOffset,
        byteLength: view.byteLength,
        bytesFilled: 0,
        elementSize,
        viewConstructor: ctor,
        readerType: 'byob'
    };
    if (controller._pendingPullIntos.length > 0) {
        controller._pendingPullIntos.push(pullIntoDescriptor);
        // No ReadableByteStreamControllerCallPullIfNeeded() call since:
        // - No change happens on desiredSize
        // - The source has already been notified of that there's at least 1 pending read(view)
        ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
        return;
    }
    if (stream._state === 'closed') {
        const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
        readIntoRequest._closeSteps(emptyView);
        return;
    }
    if (controller._queueTotalSize > 0) {
        if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
            const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
            ReadableByteStreamControllerHandleQueueDrain(controller);
            readIntoRequest._chunkSteps(filledView);
            return;
        }
        if (controller._closeRequested) {
            const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
            ReadableByteStreamControllerError(controller, e);
            readIntoRequest._errorSteps(e);
            return;
        }
    }
    controller._pendingPullIntos.push(pullIntoDescriptor);
    ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
    ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
    firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
    const stream = controller._controlledReadableByteStream;
    if (ReadableStreamHasBYOBReader(stream)) {
        while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
            const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
        }
    }
}
function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
    if (pullIntoDescriptor.bytesFilled + bytesWritten > pullIntoDescriptor.byteLength) {
        throw new RangeError('bytesWritten out of range');
    }
    ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
    if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
        // TODO: Figure out whether we should detach the buffer or not here.
        return;
    }
    ReadableByteStreamControllerShiftPendingPullInto(controller);
    const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
    if (remainderSize > 0) {
        const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
        const remainder = pullIntoDescriptor.buffer.slice(end - remainderSize, end);
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
    }
    pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
    pullIntoDescriptor.bytesFilled -= remainderSize;
    ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
    ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
}
function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
    const firstDescriptor = controller._pendingPullIntos.peek();
    const state = controller._controlledReadableByteStream._state;
    if (state === 'closed') {
        if (bytesWritten !== 0) {
            throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
        }
        ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor);
    }
    else {
        ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
    }
    ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerShiftPendingPullInto(controller) {
    const descriptor = controller._pendingPullIntos.shift();
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    return descriptor;
}
function ReadableByteStreamControllerShouldCallPull(controller) {
    const stream = controller._controlledReadableByteStream;
    if (stream._state !== 'readable') {
        return false;
    }
    if (controller._closeRequested) {
        return false;
    }
    if (!controller._started) {
        return false;
    }
    if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
        return true;
    }
    if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
        return true;
    }
    const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
    if (desiredSize > 0) {
        return true;
    }
    return false;
}
function ReadableByteStreamControllerClearAlgorithms(controller) {
    controller._pullAlgorithm = undefined;
    controller._cancelAlgorithm = undefined;
}
// A client of ReadableByteStreamController may use these functions directly to bypass state check.
function ReadableByteStreamControllerClose(controller) {
    const stream = controller._controlledReadableByteStream;
    if (controller._closeRequested || stream._state !== 'readable') {
        return;
    }
    if (controller._queueTotalSize > 0) {
        controller._closeRequested = true;
        return;
    }
    if (controller._pendingPullIntos.length > 0) {
        const firstPendingPullInto = controller._pendingPullIntos.peek();
        if (firstPendingPullInto.bytesFilled > 0) {
            const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
            ReadableByteStreamControllerError(controller, e);
            throw e;
        }
    }
    ReadableByteStreamControllerClearAlgorithms(controller);
    ReadableStreamClose(stream);
}
function ReadableByteStreamControllerEnqueue(controller, chunk) {
    const stream = controller._controlledReadableByteStream;
    if (controller._closeRequested || stream._state !== 'readable') {
        return;
    }
    const buffer = chunk.buffer;
    const byteOffset = chunk.byteOffset;
    const byteLength = chunk.byteLength;
    const transferredBuffer = TransferArrayBuffer(buffer);
    if (ReadableStreamHasDefaultReader(stream)) {
        if (ReadableStreamGetNumReadRequests(stream) === 0) {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        }
        else {
            const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
            ReadableStreamFulfillReadRequest(stream, transferredView, false);
        }
    }
    else if (ReadableStreamHasBYOBReader(stream)) {
        // TODO: Ideally in this branch detaching should happen only if the buffer is not consumed fully.
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    }
    else {
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    }
    ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerError(controller, e) {
    const stream = controller._controlledReadableByteStream;
    if (stream._state !== 'readable') {
        return;
    }
    ReadableByteStreamControllerClearPendingPullIntos(controller);
    ResetQueue(controller);
    ReadableByteStreamControllerClearAlgorithms(controller);
    ReadableStreamError(stream, e);
}
function ReadableByteStreamControllerGetDesiredSize(controller) {
    const state = controller._controlledReadableByteStream._state;
    if (state === 'errored') {
        return null;
    }
    if (state === 'closed') {
        return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
}
function ReadableByteStreamControllerRespond(controller, bytesWritten) {
    bytesWritten = Number(bytesWritten);
    if (!IsFiniteNonNegativeNumber(bytesWritten)) {
        throw new RangeError('bytesWritten must be a finite');
    }
    ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
}
function ReadableByteStreamControllerRespondWithNewView(controller, view) {
    const firstDescriptor = controller._pendingPullIntos.peek();
    if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
        throw new RangeError('The region specified by view does not match byobRequest');
    }
    if (firstDescriptor.byteLength !== view.byteLength) {
        throw new RangeError('The buffer of view has different capacity than byobRequest');
    }
    firstDescriptor.buffer = view.buffer;
    ReadableByteStreamControllerRespondInternal(controller, view.byteLength);
}
function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
    controller._controlledReadableByteStream = stream;
    controller._pullAgain = false;
    controller._pulling = false;
    controller._byobRequest = null;
    // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
    controller._queue = controller._queueTotalSize = undefined;
    ResetQueue(controller);
    controller._closeRequested = false;
    controller._started = false;
    controller._strategyHWM = highWaterMark;
    controller._pullAlgorithm = pullAlgorithm;
    controller._cancelAlgorithm = cancelAlgorithm;
    controller._autoAllocateChunkSize = autoAllocateChunkSize;
    controller._pendingPullIntos = new SimpleQueue();
    stream._readableStreamController = controller;
    const startResult = startAlgorithm();
    uponPromise(promiseResolvedWith(startResult), () => {
        controller._started = true;
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }, r => {
        ReadableByteStreamControllerError(controller, r);
    });
}
function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
    const controller = Object.create(ReadableByteStreamController.prototype);
    let startAlgorithm = () => undefined;
    let pullAlgorithm = () => promiseResolvedWith(undefined);
    let cancelAlgorithm = () => promiseResolvedWith(undefined);
    if (underlyingByteSource.start !== undefined) {
        startAlgorithm = () => underlyingByteSource.start(controller);
    }
    if (underlyingByteSource.pull !== undefined) {
        pullAlgorithm = () => underlyingByteSource.pull(controller);
    }
    if (underlyingByteSource.cancel !== undefined) {
        cancelAlgorithm = reason => underlyingByteSource.cancel(reason);
    }
    const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
    SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
}
function SetUpReadableStreamBYOBRequest(request, controller, view) {
    request._associatedReadableByteStreamController = controller;
    request._view = view;
}
// Helper functions for the ReadableStreamBYOBRequest.
function byobRequestBrandCheckException(name) {
    return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
}
// Helper functions for the ReadableByteStreamController.
function byteStreamControllerBrandCheckException(name) {
    return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
}

// Abstract operations for the ReadableStream.
function AcquireReadableStreamBYOBReader(stream) {
    return new ReadableStreamBYOBReader(stream);
}
// ReadableStream API exposed for controllers.
function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
    stream._reader._readIntoRequests.push(readIntoRequest);
}
function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
    const reader = stream._reader;
    const readIntoRequest = reader._readIntoRequests.shift();
    if (done) {
        readIntoRequest._closeSteps(chunk);
    }
    else {
        readIntoRequest._chunkSteps(chunk);
    }
}
function ReadableStreamGetNumReadIntoRequests(stream) {
    return stream._reader._readIntoRequests.length;
}
function ReadableStreamHasBYOBReader(stream) {
    const reader = stream._reader;
    if (reader === undefined) {
        return false;
    }
    if (!IsReadableStreamBYOBReader(reader)) {
        return false;
    }
    return true;
}
/**
 * A BYOB reader vended by a {@link ReadableStream}.
 *
 * @public
 */
class ReadableStreamBYOBReader {
    constructor(stream) {
        assertRequiredArgument(stream, 1, 'ReadableStreamBYOBReader');
        assertReadableStream(stream, 'First parameter');
        if (IsReadableStreamLocked(stream)) {
            throw new TypeError('This stream has already been locked for exclusive reading by another reader');
        }
        if (!IsReadableByteStreamController(stream._readableStreamController)) {
            throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' +
                'source');
        }
        ReadableStreamReaderGenericInitialize(this, stream);
        this._readIntoRequests = new SimpleQueue();
    }
    /**
     * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
     * the reader's lock is released before the stream finishes closing.
     */
    get closed() {
        if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException('closed'));
        }
        return this._closedPromise;
    }
    /**
     * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
     */
    cancel(reason = undefined) {
        if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException('cancel'));
        }
        if (this._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('cancel'));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
    }
    /**
     * Attempts to reads bytes into view, and returns a promise resolved with the result.
     *
     * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
     */
    read(view) {
        if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException('read'));
        }
        if (!ArrayBuffer.isView(view)) {
            return promiseRejectedWith(new TypeError('view must be an array buffer view'));
        }
        if (view.byteLength === 0) {
            return promiseRejectedWith(new TypeError('view must have non-zero byteLength'));
        }
        if (view.buffer.byteLength === 0) {
            return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
        }
        if (this._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('read from'));
        }
        let resolvePromise;
        let rejectPromise;
        const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
        });
        const readIntoRequest = {
            _chunkSteps: chunk => resolvePromise({ value: chunk, done: false }),
            _closeSteps: chunk => resolvePromise({ value: chunk, done: true }),
            _errorSteps: e => rejectPromise(e)
        };
        ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
        return promise;
    }
    /**
     * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
     * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
     * from now on; otherwise, the reader will appear closed.
     *
     * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
     * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
     * do so will throw a `TypeError` and leave the reader locked to the stream.
     */
    releaseLock() {
        if (!IsReadableStreamBYOBReader(this)) {
            throw byobReaderBrandCheckException('releaseLock');
        }
        if (this._ownerReadableStream === undefined) {
            return;
        }
        if (this._readIntoRequests.length > 0) {
            throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }
        ReadableStreamReaderGenericRelease(this);
    }
}
Object.defineProperties(ReadableStreamBYOBReader.prototype, {
    cancel: { enumerable: true },
    read: { enumerable: true },
    releaseLock: { enumerable: true },
    closed: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStreamBYOBReader',
        configurable: true
    });
}
// Abstract operations for the readers.
function IsReadableStreamBYOBReader(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
        return false;
    }
    return true;
}
function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
    const stream = reader._ownerReadableStream;
    stream._disturbed = true;
    if (stream._state === 'errored') {
        readIntoRequest._errorSteps(stream._storedError);
    }
    else {
        ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
    }
}
// Helper functions for the ReadableStreamBYOBReader.
function byobReaderBrandCheckException(name) {
    return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
}

function ExtractHighWaterMark(strategy, defaultHWM) {
    const { highWaterMark } = strategy;
    if (highWaterMark === undefined) {
        return defaultHWM;
    }
    if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
        throw new RangeError('Invalid highWaterMark');
    }
    return highWaterMark;
}
function ExtractSizeAlgorithm(strategy) {
    const { size } = strategy;
    if (!size) {
        return () => 1;
    }
    return size;
}

function convertQueuingStrategy(init, context) {
    assertDictionary(init, context);
    const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
    const size = init === null || init === void 0 ? void 0 : init.size;
    return {
        highWaterMark: highWaterMark === undefined ? undefined : convertUnrestrictedDouble(highWaterMark),
        size: size === undefined ? undefined : convertQueuingStrategySize(size, `${context} has member 'size' that`)
    };
}
function convertQueuingStrategySize(fn, context) {
    assertFunction(fn, context);
    return chunk => convertUnrestrictedDouble(fn(chunk));
}

function convertUnderlyingSink(original, context) {
    assertDictionary(original, context);
    const abort = original === null || original === void 0 ? void 0 : original.abort;
    const close = original === null || original === void 0 ? void 0 : original.close;
    const start = original === null || original === void 0 ? void 0 : original.start;
    const type = original === null || original === void 0 ? void 0 : original.type;
    const write = original === null || original === void 0 ? void 0 : original.write;
    return {
        abort: abort === undefined ?
            undefined :
            convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
        close: close === undefined ?
            undefined :
            convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
        start: start === undefined ?
            undefined :
            convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
        write: write === undefined ?
            undefined :
            convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
        type
    };
}
function convertUnderlyingSinkAbortCallback(fn, original, context) {
    assertFunction(fn, context);
    return (reason) => promiseCall(fn, original, [reason]);
}
function convertUnderlyingSinkCloseCallback(fn, original, context) {
    assertFunction(fn, context);
    return () => promiseCall(fn, original, []);
}
function convertUnderlyingSinkStartCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => reflectCall(fn, original, [controller]);
}
function convertUnderlyingSinkWriteCallback(fn, original, context) {
    assertFunction(fn, context);
    return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
}

function assertWritableStream(x, context) {
    if (!IsWritableStream(x)) {
        throw new TypeError(`${context} is not a WritableStream.`);
    }
}

/**
 * A writable stream represents a destination for data, into which you can write.
 *
 * @public
 */
class WritableStream {
    constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
        if (rawUnderlyingSink === undefined) {
            rawUnderlyingSink = null;
        }
        else {
            assertObject(rawUnderlyingSink, 'First parameter');
        }
        const strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
        const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, 'First parameter');
        InitializeWritableStream(this);
        const type = underlyingSink.type;
        if (type !== undefined) {
            throw new RangeError('Invalid type is specified');
        }
        const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
        const highWaterMark = ExtractHighWaterMark(strategy, 1);
        SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
    }
    /**
     * Returns whether or not the writable stream is locked to a writer.
     */
    get locked() {
        if (!IsWritableStream(this)) {
            throw streamBrandCheckException('locked');
        }
        return IsWritableStreamLocked(this);
    }
    /**
     * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
     * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
     * mechanism of the underlying sink.
     *
     * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
     * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
     * the stream) if the stream is currently locked.
     */
    abort(reason = undefined) {
        if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException('abort'));
        }
        if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError('Cannot abort a stream that already has a writer'));
        }
        return WritableStreamAbort(this, reason);
    }
    /**
     * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
     * close behavior. During this time any further attempts to write will fail (without erroring the stream).
     *
     * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
     * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
     * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
     */
    close() {
        if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException('close'));
        }
        if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError('Cannot close a stream that already has a writer'));
        }
        if (WritableStreamCloseQueuedOrInFlight(this)) {
            return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
        }
        return WritableStreamClose(this);
    }
    /**
     * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
     * is locked, no other writer can be acquired until this one is released.
     *
     * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
     * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
     * the same time, which would cause the resulting written data to be unpredictable and probably useless.
     */
    getWriter() {
        if (!IsWritableStream(this)) {
            throw streamBrandCheckException('getWriter');
        }
        return AcquireWritableStreamDefaultWriter(this);
    }
}
Object.defineProperties(WritableStream.prototype, {
    abort: { enumerable: true },
    close: { enumerable: true },
    getWriter: { enumerable: true },
    locked: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
        value: 'WritableStream',
        configurable: true
    });
}
// Abstract operations for the WritableStream.
function AcquireWritableStreamDefaultWriter(stream) {
    return new WritableStreamDefaultWriter(stream);
}
// Throws if and only if startAlgorithm throws.
function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
    const stream = Object.create(WritableStream.prototype);
    InitializeWritableStream(stream);
    const controller = Object.create(WritableStreamDefaultController.prototype);
    SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
    return stream;
}
function InitializeWritableStream(stream) {
    stream._state = 'writable';
    // The error that will be reported by new method calls once the state becomes errored. Only set when [[state]] is
    // 'erroring' or 'errored'. May be set to an undefined value.
    stream._storedError = undefined;
    stream._writer = undefined;
    // Initialize to undefined first because the constructor of the controller checks this
    // variable to validate the caller.
    stream._writableStreamController = undefined;
    // This queue is placed here instead of the writer class in order to allow for passing a writer to the next data
    // producer without waiting for the queued writes to finish.
    stream._writeRequests = new SimpleQueue();
    // Write requests are removed from _writeRequests when write() is called on the underlying sink. This prevents
    // them from being erroneously rejected on error. If a write() call is in-flight, the request is stored here.
    stream._inFlightWriteRequest = undefined;
    // The promise that was returned from writer.close(). Stored here because it may be fulfilled after the writer
    // has been detached.
    stream._closeRequest = undefined;
    // Close request is removed from _closeRequest when close() is called on the underlying sink. This prevents it
    // from being erroneously rejected on error. If a close() call is in-flight, the request is stored here.
    stream._inFlightCloseRequest = undefined;
    // The promise that was returned from writer.abort(). This may also be fulfilled after the writer has detached.
    stream._pendingAbortRequest = undefined;
    // The backpressure signal set by the controller.
    stream._backpressure = false;
}
function IsWritableStream(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
        return false;
    }
    return true;
}
function IsWritableStreamLocked(stream) {
    if (stream._writer === undefined) {
        return false;
    }
    return true;
}
function WritableStreamAbort(stream, reason) {
    const state = stream._state;
    if (state === 'closed' || state === 'errored') {
        return promiseResolvedWith(undefined);
    }
    if (stream._pendingAbortRequest !== undefined) {
        return stream._pendingAbortRequest._promise;
    }
    let wasAlreadyErroring = false;
    if (state === 'erroring') {
        wasAlreadyErroring = true;
        // reason will not be used, so don't keep a reference to it.
        reason = undefined;
    }
    const promise = newPromise((resolve, reject) => {
        stream._pendingAbortRequest = {
            _promise: undefined,
            _resolve: resolve,
            _reject: reject,
            _reason: reason,
            _wasAlreadyErroring: wasAlreadyErroring
        };
    });
    stream._pendingAbortRequest._promise = promise;
    if (!wasAlreadyErroring) {
        WritableStreamStartErroring(stream, reason);
    }
    return promise;
}
function WritableStreamClose(stream) {
    const state = stream._state;
    if (state === 'closed' || state === 'errored') {
        return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
    }
    const promise = newPromise((resolve, reject) => {
        const closeRequest = {
            _resolve: resolve,
            _reject: reject
        };
        stream._closeRequest = closeRequest;
    });
    const writer = stream._writer;
    if (writer !== undefined && stream._backpressure && state === 'writable') {
        defaultWriterReadyPromiseResolve(writer);
    }
    WritableStreamDefaultControllerClose(stream._writableStreamController);
    return promise;
}
// WritableStream API exposed for controllers.
function WritableStreamAddWriteRequest(stream) {
    const promise = newPromise((resolve, reject) => {
        const writeRequest = {
            _resolve: resolve,
            _reject: reject
        };
        stream._writeRequests.push(writeRequest);
    });
    return promise;
}
function WritableStreamDealWithRejection(stream, error) {
    const state = stream._state;
    if (state === 'writable') {
        WritableStreamStartErroring(stream, error);
        return;
    }
    WritableStreamFinishErroring(stream);
}
function WritableStreamStartErroring(stream, reason) {
    const controller = stream._writableStreamController;
    stream._state = 'erroring';
    stream._storedError = reason;
    const writer = stream._writer;
    if (writer !== undefined) {
        WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
    }
    if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
        WritableStreamFinishErroring(stream);
    }
}
function WritableStreamFinishErroring(stream) {
    stream._state = 'errored';
    stream._writableStreamController[ErrorSteps]();
    const storedError = stream._storedError;
    stream._writeRequests.forEach(writeRequest => {
        writeRequest._reject(storedError);
    });
    stream._writeRequests = new SimpleQueue();
    if (stream._pendingAbortRequest === undefined) {
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        return;
    }
    const abortRequest = stream._pendingAbortRequest;
    stream._pendingAbortRequest = undefined;
    if (abortRequest._wasAlreadyErroring) {
        abortRequest._reject(storedError);
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        return;
    }
    const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
    uponPromise(promise, () => {
        abortRequest._resolve();
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    }, (reason) => {
        abortRequest._reject(reason);
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    });
}
function WritableStreamFinishInFlightWrite(stream) {
    stream._inFlightWriteRequest._resolve(undefined);
    stream._inFlightWriteRequest = undefined;
}
function WritableStreamFinishInFlightWriteWithError(stream, error) {
    stream._inFlightWriteRequest._reject(error);
    stream._inFlightWriteRequest = undefined;
    WritableStreamDealWithRejection(stream, error);
}
function WritableStreamFinishInFlightClose(stream) {
    stream._inFlightCloseRequest._resolve(undefined);
    stream._inFlightCloseRequest = undefined;
    const state = stream._state;
    if (state === 'erroring') {
        // The error was too late to do anything, so it is ignored.
        stream._storedError = undefined;
        if (stream._pendingAbortRequest !== undefined) {
            stream._pendingAbortRequest._resolve();
            stream._pendingAbortRequest = undefined;
        }
    }
    stream._state = 'closed';
    const writer = stream._writer;
    if (writer !== undefined) {
        defaultWriterClosedPromiseResolve(writer);
    }
}
function WritableStreamFinishInFlightCloseWithError(stream, error) {
    stream._inFlightCloseRequest._reject(error);
    stream._inFlightCloseRequest = undefined;
    // Never execute sink abort() after sink close().
    if (stream._pendingAbortRequest !== undefined) {
        stream._pendingAbortRequest._reject(error);
        stream._pendingAbortRequest = undefined;
    }
    WritableStreamDealWithRejection(stream, error);
}
// TODO(ricea): Fix alphabetical order.
function WritableStreamCloseQueuedOrInFlight(stream) {
    if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
        return false;
    }
    return true;
}
function WritableStreamHasOperationMarkedInFlight(stream) {
    if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
        return false;
    }
    return true;
}
function WritableStreamMarkCloseRequestInFlight(stream) {
    stream._inFlightCloseRequest = stream._closeRequest;
    stream._closeRequest = undefined;
}
function WritableStreamMarkFirstWriteRequestInFlight(stream) {
    stream._inFlightWriteRequest = stream._writeRequests.shift();
}
function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
    if (stream._closeRequest !== undefined) {
        stream._closeRequest._reject(stream._storedError);
        stream._closeRequest = undefined;
    }
    const writer = stream._writer;
    if (writer !== undefined) {
        defaultWriterClosedPromiseReject(writer, stream._storedError);
    }
}
function WritableStreamUpdateBackpressure(stream, backpressure) {
    const writer = stream._writer;
    if (writer !== undefined && backpressure !== stream._backpressure) {
        if (backpressure) {
            defaultWriterReadyPromiseReset(writer);
        }
        else {
            defaultWriterReadyPromiseResolve(writer);
        }
    }
    stream._backpressure = backpressure;
}
/**
 * A default writer vended by a {@link WritableStream}.
 *
 * @public
 */
class WritableStreamDefaultWriter {
    constructor(stream) {
        assertRequiredArgument(stream, 1, 'WritableStreamDefaultWriter');
        assertWritableStream(stream, 'First parameter');
        if (IsWritableStreamLocked(stream)) {
            throw new TypeError('This stream has already been locked for exclusive writing by another writer');
        }
        this._ownerWritableStream = stream;
        stream._writer = this;
        const state = stream._state;
        if (state === 'writable') {
            if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
                defaultWriterReadyPromiseInitialize(this);
            }
            else {
                defaultWriterReadyPromiseInitializeAsResolved(this);
            }
            defaultWriterClosedPromiseInitialize(this);
        }
        else if (state === 'erroring') {
            defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
            defaultWriterClosedPromiseInitialize(this);
        }
        else if (state === 'closed') {
            defaultWriterReadyPromiseInitializeAsResolved(this);
            defaultWriterClosedPromiseInitializeAsResolved(this);
        }
        else {
            const storedError = stream._storedError;
            defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
            defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
        }
    }
    /**
     * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
     * the writer’s lock is released before the stream finishes closing.
     */
    get closed() {
        if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException('closed'));
        }
        return this._closedPromise;
    }
    /**
     * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
     * A producer can use this information to determine the right amount of data to write.
     *
     * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
     * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
     * the writer’s lock is released.
     */
    get desiredSize() {
        if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException('desiredSize');
        }
        if (this._ownerWritableStream === undefined) {
            throw defaultWriterLockException('desiredSize');
        }
        return WritableStreamDefaultWriterGetDesiredSize(this);
    }
    /**
     * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
     * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
     * back to zero or below, the getter will return a new promise that stays pending until the next transition.
     *
     * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
     * rejected.
     */
    get ready() {
        if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException('ready'));
        }
        return this._readyPromise;
    }
    /**
     * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
     */
    abort(reason = undefined) {
        if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException('abort'));
        }
        if (this._ownerWritableStream === undefined) {
            return promiseRejectedWith(defaultWriterLockException('abort'));
        }
        return WritableStreamDefaultWriterAbort(this, reason);
    }
    /**
     * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
     */
    close() {
        if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException('close'));
        }
        const stream = this._ownerWritableStream;
        if (stream === undefined) {
            return promiseRejectedWith(defaultWriterLockException('close'));
        }
        if (WritableStreamCloseQueuedOrInFlight(stream)) {
            return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
        }
        return WritableStreamDefaultWriterClose(this);
    }
    /**
     * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
     * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
     * now on; otherwise, the writer will appear closed.
     *
     * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
     * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
     * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
     * other producers from writing in an interleaved manner.
     */
    releaseLock() {
        if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException('releaseLock');
        }
        const stream = this._ownerWritableStream;
        if (stream === undefined) {
            return;
        }
        WritableStreamDefaultWriterRelease(this);
    }
    write(chunk = undefined) {
        if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException('write'));
        }
        if (this._ownerWritableStream === undefined) {
            return promiseRejectedWith(defaultWriterLockException('write to'));
        }
        return WritableStreamDefaultWriterWrite(this, chunk);
    }
}
Object.defineProperties(WritableStreamDefaultWriter.prototype, {
    abort: { enumerable: true },
    close: { enumerable: true },
    releaseLock: { enumerable: true },
    write: { enumerable: true },
    closed: { enumerable: true },
    desiredSize: { enumerable: true },
    ready: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
        value: 'WritableStreamDefaultWriter',
        configurable: true
    });
}
// Abstract operations for the WritableStreamDefaultWriter.
function IsWritableStreamDefaultWriter(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
        return false;
    }
    return true;
}
// A client of WritableStreamDefaultWriter may use these functions directly to bypass state check.
function WritableStreamDefaultWriterAbort(writer, reason) {
    const stream = writer._ownerWritableStream;
    return WritableStreamAbort(stream, reason);
}
function WritableStreamDefaultWriterClose(writer) {
    const stream = writer._ownerWritableStream;
    return WritableStreamClose(stream);
}
function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
    const stream = writer._ownerWritableStream;
    const state = stream._state;
    if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
        return promiseResolvedWith(undefined);
    }
    if (state === 'errored') {
        return promiseRejectedWith(stream._storedError);
    }
    return WritableStreamDefaultWriterClose(writer);
}
function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
    if (writer._closedPromiseState === 'pending') {
        defaultWriterClosedPromiseReject(writer, error);
    }
    else {
        defaultWriterClosedPromiseResetToRejected(writer, error);
    }
}
function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
    if (writer._readyPromiseState === 'pending') {
        defaultWriterReadyPromiseReject(writer, error);
    }
    else {
        defaultWriterReadyPromiseResetToRejected(writer, error);
    }
}
function WritableStreamDefaultWriterGetDesiredSize(writer) {
    const stream = writer._ownerWritableStream;
    const state = stream._state;
    if (state === 'errored' || state === 'erroring') {
        return null;
    }
    if (state === 'closed') {
        return 0;
    }
    return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
}
function WritableStreamDefaultWriterRelease(writer) {
    const stream = writer._ownerWritableStream;
    const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
    WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
    // The state transitions to "errored" before the sink abort() method runs, but the writer.closed promise is not
    // rejected until afterwards. This means that simply testing state will not work.
    WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
    stream._writer = undefined;
    writer._ownerWritableStream = undefined;
}
function WritableStreamDefaultWriterWrite(writer, chunk) {
    const stream = writer._ownerWritableStream;
    const controller = stream._writableStreamController;
    const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
    if (stream !== writer._ownerWritableStream) {
        return promiseRejectedWith(defaultWriterLockException('write to'));
    }
    const state = stream._state;
    if (state === 'errored') {
        return promiseRejectedWith(stream._storedError);
    }
    if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
        return promiseRejectedWith(new TypeError('The stream is closing or closed and cannot be written to'));
    }
    if (state === 'erroring') {
        return promiseRejectedWith(stream._storedError);
    }
    const promise = WritableStreamAddWriteRequest(stream);
    WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
    return promise;
}
const closeSentinel = {};
/**
 * Allows control of a {@link WritableStream | writable stream}'s state and internal queue.
 *
 * @public
 */
class WritableStreamDefaultController {
    constructor() {
        throw new TypeError('Illegal constructor');
    }
    /**
     * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
     *
     * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
     * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
     * normal lifecycle of interactions with the underlying sink.
     */
    error(e = undefined) {
        if (!IsWritableStreamDefaultController(this)) {
            throw new TypeError('WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController');
        }
        const state = this._controlledWritableStream._state;
        if (state !== 'writable') {
            // The stream is closed, errored or will be soon. The sink can't do anything useful if it gets an error here, so
            // just treat it as a no-op.
            return;
        }
        WritableStreamDefaultControllerError(this, e);
    }
    /** @internal */
    [AbortSteps](reason) {
        const result = this._abortAlgorithm(reason);
        WritableStreamDefaultControllerClearAlgorithms(this);
        return result;
    }
    /** @internal */
    [ErrorSteps]() {
        ResetQueue(this);
    }
}
Object.defineProperties(WritableStreamDefaultController.prototype, {
    error: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: 'WritableStreamDefaultController',
        configurable: true
    });
}
// Abstract operations implementing interface required by the WritableStream.
function IsWritableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledWritableStream')) {
        return false;
    }
    return true;
}
function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
    controller._controlledWritableStream = stream;
    stream._writableStreamController = controller;
    // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
    controller._queue = undefined;
    controller._queueTotalSize = undefined;
    ResetQueue(controller);
    controller._started = false;
    controller._strategySizeAlgorithm = sizeAlgorithm;
    controller._strategyHWM = highWaterMark;
    controller._writeAlgorithm = writeAlgorithm;
    controller._closeAlgorithm = closeAlgorithm;
    controller._abortAlgorithm = abortAlgorithm;
    const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
    WritableStreamUpdateBackpressure(stream, backpressure);
    const startResult = startAlgorithm();
    const startPromise = promiseResolvedWith(startResult);
    uponPromise(startPromise, () => {
        controller._started = true;
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }, r => {
        controller._started = true;
        WritableStreamDealWithRejection(stream, r);
    });
}
function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
    const controller = Object.create(WritableStreamDefaultController.prototype);
    let startAlgorithm = () => undefined;
    let writeAlgorithm = () => promiseResolvedWith(undefined);
    let closeAlgorithm = () => promiseResolvedWith(undefined);
    let abortAlgorithm = () => promiseResolvedWith(undefined);
    if (underlyingSink.start !== undefined) {
        startAlgorithm = () => underlyingSink.start(controller);
    }
    if (underlyingSink.write !== undefined) {
        writeAlgorithm = chunk => underlyingSink.write(chunk, controller);
    }
    if (underlyingSink.close !== undefined) {
        closeAlgorithm = () => underlyingSink.close();
    }
    if (underlyingSink.abort !== undefined) {
        abortAlgorithm = reason => underlyingSink.abort(reason);
    }
    SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
}
// ClearAlgorithms may be called twice. Erroring the same stream in multiple ways will often result in redundant calls.
function WritableStreamDefaultControllerClearAlgorithms(controller) {
    controller._writeAlgorithm = undefined;
    controller._closeAlgorithm = undefined;
    controller._abortAlgorithm = undefined;
    controller._strategySizeAlgorithm = undefined;
}
function WritableStreamDefaultControllerClose(controller) {
    EnqueueValueWithSize(controller, closeSentinel, 0);
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
}
function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
    try {
        return controller._strategySizeAlgorithm(chunk);
    }
    catch (chunkSizeE) {
        WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
        return 1;
    }
}
function WritableStreamDefaultControllerGetDesiredSize(controller) {
    return controller._strategyHWM - controller._queueTotalSize;
}
function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
    try {
        EnqueueValueWithSize(controller, chunk, chunkSize);
    }
    catch (enqueueE) {
        WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
        return;
    }
    const stream = controller._controlledWritableStream;
    if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === 'writable') {
        const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
    }
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
}
// Abstract operations for the WritableStreamDefaultController.
function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
    const stream = controller._controlledWritableStream;
    if (!controller._started) {
        return;
    }
    if (stream._inFlightWriteRequest !== undefined) {
        return;
    }
    const state = stream._state;
    if (state === 'erroring') {
        WritableStreamFinishErroring(stream);
        return;
    }
    if (controller._queue.length === 0) {
        return;
    }
    const value = PeekQueueValue(controller);
    if (value === closeSentinel) {
        WritableStreamDefaultControllerProcessClose(controller);
    }
    else {
        WritableStreamDefaultControllerProcessWrite(controller, value);
    }
}
function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
    if (controller._controlledWritableStream._state === 'writable') {
        WritableStreamDefaultControllerError(controller, error);
    }
}
function WritableStreamDefaultControllerProcessClose(controller) {
    const stream = controller._controlledWritableStream;
    WritableStreamMarkCloseRequestInFlight(stream);
    DequeueValue(controller);
    const sinkClosePromise = controller._closeAlgorithm();
    WritableStreamDefaultControllerClearAlgorithms(controller);
    uponPromise(sinkClosePromise, () => {
        WritableStreamFinishInFlightClose(stream);
    }, reason => {
        WritableStreamFinishInFlightCloseWithError(stream, reason);
    });
}
function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
    const stream = controller._controlledWritableStream;
    WritableStreamMarkFirstWriteRequestInFlight(stream);
    const sinkWritePromise = controller._writeAlgorithm(chunk);
    uponPromise(sinkWritePromise, () => {
        WritableStreamFinishInFlightWrite(stream);
        const state = stream._state;
        DequeueValue(controller);
        if (!WritableStreamCloseQueuedOrInFlight(stream) && state === 'writable') {
            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
        }
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }, reason => {
        if (stream._state === 'writable') {
            WritableStreamDefaultControllerClearAlgorithms(controller);
        }
        WritableStreamFinishInFlightWriteWithError(stream, reason);
    });
}
function WritableStreamDefaultControllerGetBackpressure(controller) {
    const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
    return desiredSize <= 0;
}
// A client of WritableStreamDefaultController may use these functions directly to bypass state check.
function WritableStreamDefaultControllerError(controller, error) {
    const stream = controller._controlledWritableStream;
    WritableStreamDefaultControllerClearAlgorithms(controller);
    WritableStreamStartErroring(stream, error);
}
// Helper functions for the WritableStream.
function streamBrandCheckException(name) {
    return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
}
// Helper functions for the WritableStreamDefaultWriter.
function defaultWriterBrandCheckException(name) {
    return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
}
function defaultWriterLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released writer');
}
function defaultWriterClosedPromiseInitialize(writer) {
    writer._closedPromise = newPromise((resolve, reject) => {
        writer._closedPromise_resolve = resolve;
        writer._closedPromise_reject = reject;
        writer._closedPromiseState = 'pending';
    });
}
function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
    defaultWriterClosedPromiseInitialize(writer);
    defaultWriterClosedPromiseReject(writer, reason);
}
function defaultWriterClosedPromiseInitializeAsResolved(writer) {
    defaultWriterClosedPromiseInitialize(writer);
    defaultWriterClosedPromiseResolve(writer);
}
function defaultWriterClosedPromiseReject(writer, reason) {
    if (writer._closedPromise_reject === undefined) {
        return;
    }
    setPromiseIsHandledToTrue(writer._closedPromise);
    writer._closedPromise_reject(reason);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'rejected';
}
function defaultWriterClosedPromiseResetToRejected(writer, reason) {
    defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
}
function defaultWriterClosedPromiseResolve(writer) {
    if (writer._closedPromise_resolve === undefined) {
        return;
    }
    writer._closedPromise_resolve(undefined);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'resolved';
}
function defaultWriterReadyPromiseInitialize(writer) {
    writer._readyPromise = newPromise((resolve, reject) => {
        writer._readyPromise_resolve = resolve;
        writer._readyPromise_reject = reject;
    });
    writer._readyPromiseState = 'pending';
}
function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
    defaultWriterReadyPromiseInitialize(writer);
    defaultWriterReadyPromiseReject(writer, reason);
}
function defaultWriterReadyPromiseInitializeAsResolved(writer) {
    defaultWriterReadyPromiseInitialize(writer);
    defaultWriterReadyPromiseResolve(writer);
}
function defaultWriterReadyPromiseReject(writer, reason) {
    if (writer._readyPromise_reject === undefined) {
        return;
    }
    setPromiseIsHandledToTrue(writer._readyPromise);
    writer._readyPromise_reject(reason);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'rejected';
}
function defaultWriterReadyPromiseReset(writer) {
    defaultWriterReadyPromiseInitialize(writer);
}
function defaultWriterReadyPromiseResetToRejected(writer, reason) {
    defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
}
function defaultWriterReadyPromiseResolve(writer) {
    if (writer._readyPromise_resolve === undefined) {
        return;
    }
    writer._readyPromise_resolve(undefined);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'fulfilled';
}

function isAbortSignal(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    try {
        return typeof value.aborted === 'boolean';
    }
    catch (_a) {
        // AbortSignal.prototype.aborted throws if its brand check fails
        return false;
    }
}

/// <reference lib="dom" />
const NativeDOMException = typeof DOMException !== 'undefined' ? DOMException : undefined;

/// <reference types="node" />
function isDOMExceptionConstructor(ctor) {
    if (!(typeof ctor === 'function' || typeof ctor === 'object')) {
        return false;
    }
    try {
        new ctor();
        return true;
    }
    catch (_a) {
        return false;
    }
}
function createDOMExceptionPolyfill() {
    const ctor = function DOMException(message, name) {
        this.message = message || '';
        this.name = name || 'Error';
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    };
    ctor.prototype = Object.create(Error.prototype);
    Object.defineProperty(ctor.prototype, 'constructor', { value: ctor, writable: true, configurable: true });
    return ctor;
}
const DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();

function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
    const reader = AcquireReadableStreamDefaultReader(source);
    const writer = AcquireWritableStreamDefaultWriter(dest);
    source._disturbed = true;
    let shuttingDown = false;
    // This is used to keep track of the spec's requirement that we wait for ongoing writes during shutdown.
    let currentWrite = promiseResolvedWith(undefined);
    return newPromise((resolve, reject) => {
        let abortAlgorithm;
        if (signal !== undefined) {
            abortAlgorithm = () => {
                const error = new DOMException$1('Aborted', 'AbortError');
                const actions = [];
                if (!preventAbort) {
                    actions.push(() => {
                        if (dest._state === 'writable') {
                            return WritableStreamAbort(dest, error);
                        }
                        return promiseResolvedWith(undefined);
                    });
                }
                if (!preventCancel) {
                    actions.push(() => {
                        if (source._state === 'readable') {
                            return ReadableStreamCancel(source, error);
                        }
                        return promiseResolvedWith(undefined);
                    });
                }
                shutdownWithAction(() => Promise.all(actions.map(action => action())), true, error);
            };
            if (signal.aborted) {
                abortAlgorithm();
                return;
            }
            signal.addEventListener('abort', abortAlgorithm);
        }
        // Using reader and writer, read all chunks from this and write them to dest
        // - Backpressure must be enforced
        // - Shutdown must stop all activity
        function pipeLoop() {
            return newPromise((resolveLoop, rejectLoop) => {
                function next(done) {
                    if (done) {
                        resolveLoop();
                    }
                    else {
                        // Use `PerformPromiseThen` instead of `uponPromise` to avoid
                        // adding unnecessary `.catch(rethrowAssertionErrorRejection)` handlers
                        PerformPromiseThen(pipeStep(), next, rejectLoop);
                    }
                }
                next(false);
            });
        }
        function pipeStep() {
            if (shuttingDown) {
                return promiseResolvedWith(true);
            }
            return PerformPromiseThen(writer._readyPromise, () => {
                return newPromise((resolveRead, rejectRead) => {
                    ReadableStreamDefaultReaderRead(reader, {
                        _chunkSteps: chunk => {
                            currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), undefined, noop);
                            resolveRead(false);
                        },
                        _closeSteps: () => resolveRead(true),
                        _errorSteps: rejectRead
                    });
                });
            });
        }
        // Errors must be propagated forward
        isOrBecomesErrored(source, reader._closedPromise, storedError => {
            if (!preventAbort) {
                shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
            }
            else {
                shutdown(true, storedError);
            }
        });
        // Errors must be propagated backward
        isOrBecomesErrored(dest, writer._closedPromise, storedError => {
            if (!preventCancel) {
                shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
            }
            else {
                shutdown(true, storedError);
            }
        });
        // Closing must be propagated forward
        isOrBecomesClosed(source, reader._closedPromise, () => {
            if (!preventClose) {
                shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
            }
            else {
                shutdown();
            }
        });
        // Closing must be propagated backward
        if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === 'closed') {
            const destClosed = new TypeError('the destination writable stream closed before all data could be piped to it');
            if (!preventCancel) {
                shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
            }
            else {
                shutdown(true, destClosed);
            }
        }
        setPromiseIsHandledToTrue(pipeLoop());
        function waitForWritesToFinish() {
            // Another write may have started while we were waiting on this currentWrite, so we have to be sure to wait
            // for that too.
            const oldCurrentWrite = currentWrite;
            return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined);
        }
        function isOrBecomesErrored(stream, promise, action) {
            if (stream._state === 'errored') {
                action(stream._storedError);
            }
            else {
                uponRejection(promise, action);
            }
        }
        function isOrBecomesClosed(stream, promise, action) {
            if (stream._state === 'closed') {
                action();
            }
            else {
                uponFulfillment(promise, action);
            }
        }
        function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown) {
                return;
            }
            shuttingDown = true;
            if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
                uponFulfillment(waitForWritesToFinish(), doTheRest);
            }
            else {
                doTheRest();
            }
            function doTheRest() {
                uponPromise(action(), () => finalize(originalIsError, originalError), newError => finalize(true, newError));
            }
        }
        function shutdown(isError, error) {
            if (shuttingDown) {
                return;
            }
            shuttingDown = true;
            if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
                uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error));
            }
            else {
                finalize(isError, error);
            }
        }
        function finalize(isError, error) {
            WritableStreamDefaultWriterRelease(writer);
            ReadableStreamReaderGenericRelease(reader);
            if (signal !== undefined) {
                signal.removeEventListener('abort', abortAlgorithm);
            }
            if (isError) {
                reject(error);
            }
            else {
                resolve(undefined);
            }
        }
    });
}

/**
 * Allows control of a {@link ReadableStream | readable stream}'s state and internal queue.
 *
 * @public
 */
class ReadableStreamDefaultController {
    constructor() {
        throw new TypeError('Illegal constructor');
    }
    /**
     * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
     * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
     */
    get desiredSize() {
        if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException('desiredSize');
        }
        return ReadableStreamDefaultControllerGetDesiredSize(this);
    }
    /**
     * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
     * the stream, but once those are read, the stream will become closed.
     */
    close() {
        if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException('close');
        }
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError('The stream is not in a state that permits close');
        }
        ReadableStreamDefaultControllerClose(this);
    }
    enqueue(chunk = undefined) {
        if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException('enqueue');
        }
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError('The stream is not in a state that permits enqueue');
        }
        return ReadableStreamDefaultControllerEnqueue(this, chunk);
    }
    /**
     * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
     */
    error(e = undefined) {
        if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException('error');
        }
        ReadableStreamDefaultControllerError(this, e);
    }
    /** @internal */
    [CancelSteps](reason) {
        ResetQueue(this);
        const result = this._cancelAlgorithm(reason);
        ReadableStreamDefaultControllerClearAlgorithms(this);
        return result;
    }
    /** @internal */
    [PullSteps](readRequest) {
        const stream = this._controlledReadableStream;
        if (this._queue.length > 0) {
            const chunk = DequeueValue(this);
            if (this._closeRequested && this._queue.length === 0) {
                ReadableStreamDefaultControllerClearAlgorithms(this);
                ReadableStreamClose(stream);
            }
            else {
                ReadableStreamDefaultControllerCallPullIfNeeded(this);
            }
            readRequest._chunkSteps(chunk);
        }
        else {
            ReadableStreamAddReadRequest(stream, readRequest);
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
        }
    }
}
Object.defineProperties(ReadableStreamDefaultController.prototype, {
    close: { enumerable: true },
    enqueue: { enumerable: true },
    error: { enumerable: true },
    desiredSize: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStreamDefaultController',
        configurable: true
    });
}
// Abstract operations for the ReadableStreamDefaultController.
function IsReadableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableStream')) {
        return false;
    }
    return true;
}
function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
    const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
    if (!shouldPull) {
        return;
    }
    if (controller._pulling) {
        controller._pullAgain = true;
        return;
    }
    controller._pulling = true;
    const pullPromise = controller._pullAlgorithm();
    uponPromise(pullPromise, () => {
        controller._pulling = false;
        if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
        }
    }, e => {
        ReadableStreamDefaultControllerError(controller, e);
    });
}
function ReadableStreamDefaultControllerShouldCallPull(controller) {
    const stream = controller._controlledReadableStream;
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
        return false;
    }
    if (!controller._started) {
        return false;
    }
    if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
        return true;
    }
    const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
    if (desiredSize > 0) {
        return true;
    }
    return false;
}
function ReadableStreamDefaultControllerClearAlgorithms(controller) {
    controller._pullAlgorithm = undefined;
    controller._cancelAlgorithm = undefined;
    controller._strategySizeAlgorithm = undefined;
}
// A client of ReadableStreamDefaultController may use these functions directly to bypass state check.
function ReadableStreamDefaultControllerClose(controller) {
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
        return;
    }
    const stream = controller._controlledReadableStream;
    controller._closeRequested = true;
    if (controller._queue.length === 0) {
        ReadableStreamDefaultControllerClearAlgorithms(controller);
        ReadableStreamClose(stream);
    }
}
function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
        return;
    }
    const stream = controller._controlledReadableStream;
    if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
        ReadableStreamFulfillReadRequest(stream, chunk, false);
    }
    else {
        let chunkSize;
        try {
            chunkSize = controller._strategySizeAlgorithm(chunk);
        }
        catch (chunkSizeE) {
            ReadableStreamDefaultControllerError(controller, chunkSizeE);
            throw chunkSizeE;
        }
        try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
        }
        catch (enqueueE) {
            ReadableStreamDefaultControllerError(controller, enqueueE);
            throw enqueueE;
        }
    }
    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
}
function ReadableStreamDefaultControllerError(controller, e) {
    const stream = controller._controlledReadableStream;
    if (stream._state !== 'readable') {
        return;
    }
    ResetQueue(controller);
    ReadableStreamDefaultControllerClearAlgorithms(controller);
    ReadableStreamError(stream, e);
}
function ReadableStreamDefaultControllerGetDesiredSize(controller) {
    const state = controller._controlledReadableStream._state;
    if (state === 'errored') {
        return null;
    }
    if (state === 'closed') {
        return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
}
// This is used in the implementation of TransformStream.
function ReadableStreamDefaultControllerHasBackpressure(controller) {
    if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
        return false;
    }
    return true;
}
function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
    const state = controller._controlledReadableStream._state;
    if (!controller._closeRequested && state === 'readable') {
        return true;
    }
    return false;
}
function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
    controller._controlledReadableStream = stream;
    controller._queue = undefined;
    controller._queueTotalSize = undefined;
    ResetQueue(controller);
    controller._started = false;
    controller._closeRequested = false;
    controller._pullAgain = false;
    controller._pulling = false;
    controller._strategySizeAlgorithm = sizeAlgorithm;
    controller._strategyHWM = highWaterMark;
    controller._pullAlgorithm = pullAlgorithm;
    controller._cancelAlgorithm = cancelAlgorithm;
    stream._readableStreamController = controller;
    const startResult = startAlgorithm();
    uponPromise(promiseResolvedWith(startResult), () => {
        controller._started = true;
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    }, r => {
        ReadableStreamDefaultControllerError(controller, r);
    });
}
function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
    const controller = Object.create(ReadableStreamDefaultController.prototype);
    let startAlgorithm = () => undefined;
    let pullAlgorithm = () => promiseResolvedWith(undefined);
    let cancelAlgorithm = () => promiseResolvedWith(undefined);
    if (underlyingSource.start !== undefined) {
        startAlgorithm = () => underlyingSource.start(controller);
    }
    if (underlyingSource.pull !== undefined) {
        pullAlgorithm = () => underlyingSource.pull(controller);
    }
    if (underlyingSource.cancel !== undefined) {
        cancelAlgorithm = reason => underlyingSource.cancel(reason);
    }
    SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
}
// Helper functions for the ReadableStreamDefaultController.
function defaultControllerBrandCheckException(name) {
    return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
}

function ReadableStreamTee(stream, cloneForBranch2) {
    const reader = AcquireReadableStreamDefaultReader(stream);
    let reading = false;
    let canceled1 = false;
    let canceled2 = false;
    let reason1;
    let reason2;
    let branch1;
    let branch2;
    let resolveCancelPromise;
    const cancelPromise = newPromise(resolve => {
        resolveCancelPromise = resolve;
    });
    function pullAlgorithm() {
        if (reading) {
            return promiseResolvedWith(undefined);
        }
        reading = true;
        const readRequest = {
            _chunkSteps: value => {
                // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                // successful synchronously-available reads get ahead of asynchronously-available errors.
                queueMicrotask(() => {
                    reading = false;
                    const value1 = value;
                    const value2 = value;
                    // There is no way to access the cloning code right now in the reference implementation.
                    // If we add one then we'll need an implementation for serializable objects.
                    // if (!canceled2 && cloneForBranch2) {
                    //   value2 = StructuredDeserialize(StructuredSerialize(value2));
                    // }
                    if (!canceled1) {
                        ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, value1);
                    }
                    if (!canceled2) {
                        ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, value2);
                    }
                    resolveCancelPromise(undefined);
                });
            },
            _closeSteps: () => {
                reading = false;
                if (!canceled1) {
                    ReadableStreamDefaultControllerClose(branch1._readableStreamController);
                }
                if (!canceled2) {
                    ReadableStreamDefaultControllerClose(branch2._readableStreamController);
                }
            },
            _errorSteps: () => {
                reading = false;
            }
        };
        ReadableStreamDefaultReaderRead(reader, readRequest);
        return promiseResolvedWith(undefined);
    }
    function cancel1Algorithm(reason) {
        canceled1 = true;
        reason1 = reason;
        if (canceled2) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
    }
    function cancel2Algorithm(reason) {
        canceled2 = true;
        reason2 = reason;
        if (canceled1) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
    }
    function startAlgorithm() {
        // do nothing
    }
    branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
    branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
    uponRejection(reader._closedPromise, (r) => {
        ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
        ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
        resolveCancelPromise(undefined);
    });
    return [branch1, branch2];
}

function convertUnderlyingDefaultOrByteSource(source, context) {
    assertDictionary(source, context);
    const original = source;
    const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
    const cancel = original === null || original === void 0 ? void 0 : original.cancel;
    const pull = original === null || original === void 0 ? void 0 : original.pull;
    const start = original === null || original === void 0 ? void 0 : original.start;
    const type = original === null || original === void 0 ? void 0 : original.type;
    return {
        autoAllocateChunkSize: autoAllocateChunkSize === undefined ?
            undefined :
            convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
        cancel: cancel === undefined ?
            undefined :
            convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
        pull: pull === undefined ?
            undefined :
            convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
        start: start === undefined ?
            undefined :
            convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
        type: type === undefined ? undefined : convertReadableStreamType(type, `${context} has member 'type' that`)
    };
}
function convertUnderlyingSourceCancelCallback(fn, original, context) {
    assertFunction(fn, context);
    return (reason) => promiseCall(fn, original, [reason]);
}
function convertUnderlyingSourcePullCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => promiseCall(fn, original, [controller]);
}
function convertUnderlyingSourceStartCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => reflectCall(fn, original, [controller]);
}
function convertReadableStreamType(type, context) {
    type = `${type}`;
    if (type !== 'bytes') {
        throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
    }
    return type;
}

function convertReaderOptions(options, context) {
    assertDictionary(options, context);
    const mode = options === null || options === void 0 ? void 0 : options.mode;
    return {
        mode: mode === undefined ? undefined : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
    };
}
function convertReadableStreamReaderMode(mode, context) {
    mode = `${mode}`;
    if (mode !== 'byob') {
        throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
    }
    return mode;
}

function convertIteratorOptions(options, context) {
    assertDictionary(options, context);
    const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
    return { preventCancel: Boolean(preventCancel) };
}

function convertPipeOptions(options, context) {
    assertDictionary(options, context);
    const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
    const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
    const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
    const signal = options === null || options === void 0 ? void 0 : options.signal;
    if (signal !== undefined) {
        assertAbortSignal(signal, `${context} has member 'signal' that`);
    }
    return {
        preventAbort: Boolean(preventAbort),
        preventCancel: Boolean(preventCancel),
        preventClose: Boolean(preventClose),
        signal
    };
}
function assertAbortSignal(signal, context) {
    if (!isAbortSignal(signal)) {
        throw new TypeError(`${context} is not an AbortSignal.`);
    }
}

function convertReadableWritablePair(pair, context) {
    assertDictionary(pair, context);
    const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
    assertRequiredField(readable, 'readable', 'ReadableWritablePair');
    assertReadableStream(readable, `${context} has member 'readable' that`);
    const writable = pair === null || pair === void 0 ? void 0 : pair.writable;
    assertRequiredField(writable, 'writable', 'ReadableWritablePair');
    assertWritableStream(writable, `${context} has member 'writable' that`);
    return { readable, writable };
}

/**
 * A readable stream represents a source of data, from which you can read.
 *
 * @public
 */
class ReadableStream {
    constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
        if (rawUnderlyingSource === undefined) {
            rawUnderlyingSource = null;
        }
        else {
            assertObject(rawUnderlyingSource, 'First parameter');
        }
        const strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
        const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, 'First parameter');
        InitializeReadableStream(this);
        if (underlyingSource.type === 'bytes') {
            if (strategy.size !== undefined) {
                throw new RangeError('The strategy for a byte stream cannot have a size function');
            }
            const highWaterMark = ExtractHighWaterMark(strategy, 0);
            SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
        }
        else {
            const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
            const highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
        }
    }
    /**
     * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
     */
    get locked() {
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('locked');
        }
        return IsReadableStreamLocked(this);
    }
    /**
     * Cancels the stream, signaling a loss of interest in the stream by a consumer.
     *
     * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
     * method, which might or might not use it.
     */
    cancel(reason = undefined) {
        if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1('cancel'));
        }
        if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError('Cannot cancel a stream that already has a reader'));
        }
        return ReadableStreamCancel(this, reason);
    }
    getReader(rawOptions = undefined) {
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('getReader');
        }
        const options = convertReaderOptions(rawOptions, 'First parameter');
        if (options.mode === undefined) {
            return AcquireReadableStreamDefaultReader(this);
        }
        return AcquireReadableStreamBYOBReader(this);
    }
    pipeThrough(rawTransform, rawOptions = {}) {
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('pipeThrough');
        }
        assertRequiredArgument(rawTransform, 1, 'pipeThrough');
        const transform = convertReadableWritablePair(rawTransform, 'First parameter');
        const options = convertPipeOptions(rawOptions, 'Second parameter');
        if (IsReadableStreamLocked(this)) {
            throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream');
        }
        if (IsWritableStreamLocked(transform.writable)) {
            throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream');
        }
        const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
        setPromiseIsHandledToTrue(promise);
        return transform.readable;
    }
    pipeTo(destination, rawOptions = {}) {
        if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1('pipeTo'));
        }
        if (destination === undefined) {
            return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
        }
        if (!IsWritableStream(destination)) {
            return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
        }
        let options;
        try {
            options = convertPipeOptions(rawOptions, 'Second parameter');
        }
        catch (e) {
            return promiseRejectedWith(e);
        }
        if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
        }
        if (IsWritableStreamLocked(destination)) {
            return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
        }
        return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
    }
    /**
     * Tees this readable stream, returning a two-element array containing the two resulting branches as
     * new {@link ReadableStream} instances.
     *
     * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
     * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
     * propagated to the stream's underlying source.
     *
     * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
     * this could allow interference between the two branches.
     */
    tee() {
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('tee');
        }
        const branches = ReadableStreamTee(this);
        return CreateArrayFromList(branches);
    }
    values(rawOptions = undefined) {
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('values');
        }
        const options = convertIteratorOptions(rawOptions, 'First parameter');
        return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
    }
}
Object.defineProperties(ReadableStream.prototype, {
    cancel: { enumerable: true },
    getReader: { enumerable: true },
    pipeThrough: { enumerable: true },
    pipeTo: { enumerable: true },
    tee: { enumerable: true },
    values: { enumerable: true },
    locked: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStream',
        configurable: true
    });
}
if (typeof SymbolPolyfill.asyncIterator === 'symbol') {
    Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.asyncIterator, {
        value: ReadableStream.prototype.values,
        writable: true,
        configurable: true
    });
}
// Abstract operations for the ReadableStream.
// Throws if and only if startAlgorithm throws.
function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
    const stream = Object.create(ReadableStream.prototype);
    InitializeReadableStream(stream);
    const controller = Object.create(ReadableStreamDefaultController.prototype);
    SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
    return stream;
}
function InitializeReadableStream(stream) {
    stream._state = 'readable';
    stream._reader = undefined;
    stream._storedError = undefined;
    stream._disturbed = false;
}
function IsReadableStream(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
        return false;
    }
    return true;
}
function IsReadableStreamLocked(stream) {
    if (stream._reader === undefined) {
        return false;
    }
    return true;
}
// ReadableStream API exposed for controllers.
function ReadableStreamCancel(stream, reason) {
    stream._disturbed = true;
    if (stream._state === 'closed') {
        return promiseResolvedWith(undefined);
    }
    if (stream._state === 'errored') {
        return promiseRejectedWith(stream._storedError);
    }
    ReadableStreamClose(stream);
    const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
    return transformPromiseWith(sourceCancelPromise, noop);
}
function ReadableStreamClose(stream) {
    stream._state = 'closed';
    const reader = stream._reader;
    if (reader === undefined) {
        return;
    }
    if (IsReadableStreamDefaultReader(reader)) {
        reader._readRequests.forEach(readRequest => {
            readRequest._closeSteps();
        });
        reader._readRequests = new SimpleQueue();
    }
    defaultReaderClosedPromiseResolve(reader);
}
function ReadableStreamError(stream, e) {
    stream._state = 'errored';
    stream._storedError = e;
    const reader = stream._reader;
    if (reader === undefined) {
        return;
    }
    if (IsReadableStreamDefaultReader(reader)) {
        reader._readRequests.forEach(readRequest => {
            readRequest._errorSteps(e);
        });
        reader._readRequests = new SimpleQueue();
    }
    else {
        reader._readIntoRequests.forEach(readIntoRequest => {
            readIntoRequest._errorSteps(e);
        });
        reader._readIntoRequests = new SimpleQueue();
    }
    defaultReaderClosedPromiseReject(reader, e);
}
// Helper functions for the ReadableStream.
function streamBrandCheckException$1(name) {
    return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
}

function convertQueuingStrategyInit(init, context) {
    assertDictionary(init, context);
    const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
    assertRequiredField(highWaterMark, 'highWaterMark', 'QueuingStrategyInit');
    return {
        highWaterMark: convertUnrestrictedDouble(highWaterMark)
    };
}

const byteLengthSizeFunction = function size(chunk) {
    return chunk.byteLength;
};
/**
 * A queuing strategy that counts the number of bytes in each chunk.
 *
 * @public
 */
class ByteLengthQueuingStrategy {
    constructor(options) {
        assertRequiredArgument(options, 1, 'ByteLengthQueuingStrategy');
        options = convertQueuingStrategyInit(options, 'First parameter');
        this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
    }
    /**
     * Returns the high water mark provided to the constructor.
     */
    get highWaterMark() {
        if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException('highWaterMark');
        }
        return this._byteLengthQueuingStrategyHighWaterMark;
    }
    /**
     * Measures the size of `chunk` by returning the value of its `byteLength` property.
     */
    get size() {
        if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException('size');
        }
        return byteLengthSizeFunction;
    }
}
Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
    highWaterMark: { enumerable: true },
    size: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
        value: 'ByteLengthQueuingStrategy',
        configurable: true
    });
}
// Helper functions for the ByteLengthQueuingStrategy.
function byteLengthBrandCheckException(name) {
    return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
}
function IsByteLengthQueuingStrategy(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_byteLengthQueuingStrategyHighWaterMark')) {
        return false;
    }
    return true;
}

const countSizeFunction = function size() {
    return 1;
};
/**
 * A queuing strategy that counts the number of chunks.
 *
 * @public
 */
class CountQueuingStrategy {
    constructor(options) {
        assertRequiredArgument(options, 1, 'CountQueuingStrategy');
        options = convertQueuingStrategyInit(options, 'First parameter');
        this._countQueuingStrategyHighWaterMark = options.highWaterMark;
    }
    /**
     * Returns the high water mark provided to the constructor.
     */
    get highWaterMark() {
        if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException('highWaterMark');
        }
        return this._countQueuingStrategyHighWaterMark;
    }
    /**
     * Measures the size of `chunk` by always returning 1.
     * This ensures that the total queue size is a count of the number of chunks in the queue.
     */
    get size() {
        if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException('size');
        }
        return countSizeFunction;
    }
}
Object.defineProperties(CountQueuingStrategy.prototype, {
    highWaterMark: { enumerable: true },
    size: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
        value: 'CountQueuingStrategy',
        configurable: true
    });
}
// Helper functions for the CountQueuingStrategy.
function countBrandCheckException(name) {
    return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
}
function IsCountQueuingStrategy(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_countQueuingStrategyHighWaterMark')) {
        return false;
    }
    return true;
}

function convertTransformer(original, context) {
    assertDictionary(original, context);
    const flush = original === null || original === void 0 ? void 0 : original.flush;
    const readableType = original === null || original === void 0 ? void 0 : original.readableType;
    const start = original === null || original === void 0 ? void 0 : original.start;
    const transform = original === null || original === void 0 ? void 0 : original.transform;
    const writableType = original === null || original === void 0 ? void 0 : original.writableType;
    return {
        flush: flush === undefined ?
            undefined :
            convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
        readableType,
        start: start === undefined ?
            undefined :
            convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
        transform: transform === undefined ?
            undefined :
            convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
        writableType
    };
}
function convertTransformerFlushCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => promiseCall(fn, original, [controller]);
}
function convertTransformerStartCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => reflectCall(fn, original, [controller]);
}
function convertTransformerTransformCallback(fn, original, context) {
    assertFunction(fn, context);
    return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
}

// Class TransformStream
/**
 * A transform stream consists of a pair of streams: a {@link WritableStream | writable stream},
 * known as its writable side, and a {@link ReadableStream | readable stream}, known as its readable side.
 * In a manner specific to the transform stream in question, writes to the writable side result in new data being
 * made available for reading from the readable side.
 *
 * @public
 */
class TransformStream {
    constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
        if (rawTransformer === undefined) {
            rawTransformer = null;
        }
        const writableStrategy = convertQueuingStrategy(rawWritableStrategy, 'Second parameter');
        const readableStrategy = convertQueuingStrategy(rawReadableStrategy, 'Third parameter');
        const transformer = convertTransformer(rawTransformer, 'First parameter');
        if (transformer.readableType !== undefined) {
            throw new RangeError('Invalid readableType specified');
        }
        if (transformer.writableType !== undefined) {
            throw new RangeError('Invalid writableType specified');
        }
        const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
        const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
        const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
        const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
        let startPromise_resolve;
        const startPromise = newPromise(resolve => {
            startPromise_resolve = resolve;
        });
        InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
        SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
        if (transformer.start !== undefined) {
            startPromise_resolve(transformer.start(this._transformStreamController));
        }
        else {
            startPromise_resolve(undefined);
        }
    }
    /**
     * The readable side of the transform stream.
     */
    get readable() {
        if (!IsTransformStream(this)) {
            throw streamBrandCheckException$2('readable');
        }
        return this._readable;
    }
    /**
     * The writable side of the transform stream.
     */
    get writable() {
        if (!IsTransformStream(this)) {
            throw streamBrandCheckException$2('writable');
        }
        return this._writable;
    }
}
Object.defineProperties(TransformStream.prototype, {
    readable: { enumerable: true },
    writable: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
        value: 'TransformStream',
        configurable: true
    });
}
function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
    function startAlgorithm() {
        return startPromise;
    }
    function writeAlgorithm(chunk) {
        return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
    }
    function abortAlgorithm(reason) {
        return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
    }
    function closeAlgorithm() {
        return TransformStreamDefaultSinkCloseAlgorithm(stream);
    }
    stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
    function pullAlgorithm() {
        return TransformStreamDefaultSourcePullAlgorithm(stream);
    }
    function cancelAlgorithm(reason) {
        TransformStreamErrorWritableAndUnblockWrite(stream, reason);
        return promiseResolvedWith(undefined);
    }
    stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
    // The [[backpressure]] slot is set to undefined so that it can be initialised by TransformStreamSetBackpressure.
    stream._backpressure = undefined;
    stream._backpressureChangePromise = undefined;
    stream._backpressureChangePromise_resolve = undefined;
    TransformStreamSetBackpressure(stream, true);
    stream._transformStreamController = undefined;
}
function IsTransformStream(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
        return false;
    }
    return true;
}
// This is a no-op if both sides are already errored.
function TransformStreamError(stream, e) {
    ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
    TransformStreamErrorWritableAndUnblockWrite(stream, e);
}
function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
    TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
    WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
    if (stream._backpressure) {
        // Pretend that pull() was called to permit any pending write() calls to complete. TransformStreamSetBackpressure()
        // cannot be called from enqueue() or pull() once the ReadableStream is errored, so this will will be the final time
        // _backpressure is set.
        TransformStreamSetBackpressure(stream, false);
    }
}
function TransformStreamSetBackpressure(stream, backpressure) {
    // Passes also when called during construction.
    if (stream._backpressureChangePromise !== undefined) {
        stream._backpressureChangePromise_resolve();
    }
    stream._backpressureChangePromise = newPromise(resolve => {
        stream._backpressureChangePromise_resolve = resolve;
    });
    stream._backpressure = backpressure;
}
// Class TransformStreamDefaultController
/**
 * Allows control of the {@link ReadableStream} and {@link WritableStream} of the associated {@link TransformStream}.
 *
 * @public
 */
class TransformStreamDefaultController {
    constructor() {
        throw new TypeError('Illegal constructor');
    }
    /**
     * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
     */
    get desiredSize() {
        if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1('desiredSize');
        }
        const readableController = this._controlledTransformStream._readable._readableStreamController;
        return ReadableStreamDefaultControllerGetDesiredSize(readableController);
    }
    enqueue(chunk = undefined) {
        if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1('enqueue');
        }
        TransformStreamDefaultControllerEnqueue(this, chunk);
    }
    /**
     * Errors both the readable side and the writable side of the controlled transform stream, making all future
     * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
     */
    error(reason = undefined) {
        if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1('error');
        }
        TransformStreamDefaultControllerError(this, reason);
    }
    /**
     * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
     * transformer only needs to consume a portion of the chunks written to the writable side.
     */
    terminate() {
        if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1('terminate');
        }
        TransformStreamDefaultControllerTerminate(this);
    }
}
Object.defineProperties(TransformStreamDefaultController.prototype, {
    enqueue: { enumerable: true },
    error: { enumerable: true },
    terminate: { enumerable: true },
    desiredSize: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: 'TransformStreamDefaultController',
        configurable: true
    });
}
// Transform Stream Default Controller Abstract Operations
function IsTransformStreamDefaultController(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
        return false;
    }
    return true;
}
function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
    controller._controlledTransformStream = stream;
    stream._transformStreamController = controller;
    controller._transformAlgorithm = transformAlgorithm;
    controller._flushAlgorithm = flushAlgorithm;
}
function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
    const controller = Object.create(TransformStreamDefaultController.prototype);
    let transformAlgorithm = (chunk) => {
        try {
            TransformStreamDefaultControllerEnqueue(controller, chunk);
            return promiseResolvedWith(undefined);
        }
        catch (transformResultE) {
            return promiseRejectedWith(transformResultE);
        }
    };
    let flushAlgorithm = () => promiseResolvedWith(undefined);
    if (transformer.transform !== undefined) {
        transformAlgorithm = chunk => transformer.transform(chunk, controller);
    }
    if (transformer.flush !== undefined) {
        flushAlgorithm = () => transformer.flush(controller);
    }
    SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
}
function TransformStreamDefaultControllerClearAlgorithms(controller) {
    controller._transformAlgorithm = undefined;
    controller._flushAlgorithm = undefined;
}
function TransformStreamDefaultControllerEnqueue(controller, chunk) {
    const stream = controller._controlledTransformStream;
    const readableController = stream._readable._readableStreamController;
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
        throw new TypeError('Readable side is not in a state that permits enqueue');
    }
    // We throttle transform invocations based on the backpressure of the ReadableStream, but we still
    // accept TransformStreamDefaultControllerEnqueue() calls.
    try {
        ReadableStreamDefaultControllerEnqueue(readableController, chunk);
    }
    catch (e) {
        // This happens when readableStrategy.size() throws.
        TransformStreamErrorWritableAndUnblockWrite(stream, e);
        throw stream._readable._storedError;
    }
    const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
    if (backpressure !== stream._backpressure) {
        TransformStreamSetBackpressure(stream, true);
    }
}
function TransformStreamDefaultControllerError(controller, e) {
    TransformStreamError(controller._controlledTransformStream, e);
}
function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
    const transformPromise = controller._transformAlgorithm(chunk);
    return transformPromiseWith(transformPromise, undefined, r => {
        TransformStreamError(controller._controlledTransformStream, r);
        throw r;
    });
}
function TransformStreamDefaultControllerTerminate(controller) {
    const stream = controller._controlledTransformStream;
    const readableController = stream._readable._readableStreamController;
    ReadableStreamDefaultControllerClose(readableController);
    const error = new TypeError('TransformStream terminated');
    TransformStreamErrorWritableAndUnblockWrite(stream, error);
}
// TransformStreamDefaultSink Algorithms
function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
    const controller = stream._transformStreamController;
    if (stream._backpressure) {
        const backpressureChangePromise = stream._backpressureChangePromise;
        return transformPromiseWith(backpressureChangePromise, () => {
            const writable = stream._writable;
            const state = writable._state;
            if (state === 'erroring') {
                throw writable._storedError;
            }
            return TransformStreamDefaultControllerPerformTransform(controller, chunk);
        });
    }
    return TransformStreamDefaultControllerPerformTransform(controller, chunk);
}
function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
    // abort() is not called synchronously, so it is possible for abort() to be called when the stream is already
    // errored.
    TransformStreamError(stream, reason);
    return promiseResolvedWith(undefined);
}
function TransformStreamDefaultSinkCloseAlgorithm(stream) {
    // stream._readable cannot change after construction, so caching it across a call to user code is safe.
    const readable = stream._readable;
    const controller = stream._transformStreamController;
    const flushPromise = controller._flushAlgorithm();
    TransformStreamDefaultControllerClearAlgorithms(controller);
    // Return a promise that is fulfilled with undefined on success.
    return transformPromiseWith(flushPromise, () => {
        if (readable._state === 'errored') {
            throw readable._storedError;
        }
        ReadableStreamDefaultControllerClose(readable._readableStreamController);
    }, r => {
        TransformStreamError(stream, r);
        throw readable._storedError;
    });
}
// TransformStreamDefaultSource Algorithms
function TransformStreamDefaultSourcePullAlgorithm(stream) {
    // Invariant. Enforced by the promises returned by start() and pull().
    TransformStreamSetBackpressure(stream, false);
    // Prevent the next pull() call until there is backpressure.
    return stream._backpressureChangePromise;
}
// Helper functions for the TransformStreamDefaultController.
function defaultControllerBrandCheckException$1(name) {
    return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
}
// Helper functions for the TransformStream.
function streamBrandCheckException$2(name) {
    return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
}


//# sourceMappingURL=ponyfill.es2018.mjs.map


/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./index.ts");
/******/ })()
.default;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWlsZ3VuL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9tYWlsZ3VuLy4vbm9kZV9tb2R1bGVzL2Fib3J0LWNvbnRyb2xsZXIvZGlzdC9hYm9ydC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL21haWxndW4vLi9pbmRleC50cyIsIndlYnBhY2s6Ly9tYWlsZ3VuLy4vbGliL2NsaWVudC50cyIsIndlYnBhY2s6Ly9tYWlsZ3VuLy4vbGliL2RvbWFpbnMudHMiLCJ3ZWJwYWNrOi8vbWFpbGd1bi8uL2xpYi9lcnJvci50cyIsIndlYnBhY2s6Ly9tYWlsZ3VuLy4vbGliL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9tYWlsZ3VuLy4vbGliL2lwLXBvb2xzLnRzIiwid2VicGFjazovL21haWxndW4vLi9saWIvaXBzLnRzIiwid2VicGFjazovL21haWxndW4vLi9saWIvbGlzdHMudHMiLCJ3ZWJwYWNrOi8vbWFpbGd1bi8uL2xpYi9tYWlsTGlzdE1lbWJlcnMudHMiLCJ3ZWJwYWNrOi8vbWFpbGd1bi8uL2xpYi9tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly9tYWlsZ3VuLy4vbGliL3BhcnNlLnRzIiwid2VicGFjazovL21haWxndW4vLi9saWIvcmVxdWVzdC50cyIsIndlYnBhY2s6Ly9tYWlsZ3VuLy4vbGliL3JvdXRlcy50cyIsIndlYnBhY2s6Ly9tYWlsZ3VuLy4vbGliL3N0YXRzLnRzIiwid2VicGFjazovL21haWxndW4vLi9saWIvc3VwcHJlc3Npb25zLnRzIiwid2VicGFjazovL21haWxndW4vLi9saWIvdmFsaWRhdGUudHMiLCJ3ZWJwYWNrOi8vbWFpbGd1bi8uL2xpYi93ZWJob29rcy50cyIsIndlYnBhY2s6Ly9tYWlsZ3VuLy4vbm9kZV9tb2R1bGVzL2J0b2EvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFpbGd1bi8uL25vZGVfbW9kdWxlcy9kYXRhLXVyaS10by1idWZmZXIvZGlzdC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFpbGd1bi8uL25vZGVfbW9kdWxlcy9ldmVudC10YXJnZXQtc2hpbS9kaXN0L2V2ZW50LXRhcmdldC1zaGltLmpzIiwid2VicGFjazovL21haWxndW4vLi9ub2RlX21vZHVsZXMvZmV0Y2gtYmxvYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9tYWlsZ3VuLy4vbm9kZV9tb2R1bGVzL2t5LXVuaXZlcnNhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9tYWlsZ3VuLy4vbm9kZV9tb2R1bGVzL2t5L3VtZC5qcyIsIndlYnBhY2s6Ly9tYWlsZ3VuLy4vbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvZGlzdC9pbmRleC5janMiLCJ3ZWJwYWNrOi8vbWFpbGd1bi8uL25vZGVfbW9kdWxlcy91cmwtam9pbi9saWIvdXJsLWpvaW4uanMiLCJ3ZWJwYWNrOi8vbWFpbGd1bi8uL25vZGVfbW9kdWxlcy93ZWItc3RyZWFtcy1wb2x5ZmlsbC9kaXN0L3BvbnlmaWxsLmVzMjAxOC5tanMiLCJ3ZWJwYWNrOi8vbWFpbGd1bi9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovL21haWxndW4vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vbWFpbGd1bi9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vbWFpbGd1bi9leHRlcm5hbCBcInN0cmVhbVwiIiwid2VicGFjazovL21haWxndW4vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly9tYWlsZ3VuL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovL21haWxndW4vZXh0ZXJuYWwgXCJ6bGliXCIiLCJ3ZWJwYWNrOi8vbWFpbGd1bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWlsZ3VuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWlsZ3VuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbGd1bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haWxndW4vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNhOztBQUViLDhDQUE2QyxDQUFDLGNBQWMsRUFBQzs7QUFFN0Qsc0JBQXNCLG1CQUFPLENBQUMscUZBQW1COztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEYscUNBQXFDO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQW1CO0FBQ2pDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLGlEQUFpRDtBQUMzSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsWUFBWSxtQkFBbUI7QUFDL0IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLHVCQUF1QjtB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O0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLGlCQUFpQixjQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QseUJBQXlCO0FBQy9FOztBQUVBO0FBQ0E7QUFDQSwyRUFBMkUsZUFBZTtBQUMxRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDRDQUE0QztBQUN2RTs7QUFFQTtBQUNBLGNBQWMsWUFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0NBQXNDO0FBQ2xFOztBQUVBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQixjQUFjLG1CQUFtQjtBQUNqQyxZQUFZLG1CQUFtQjtBQUMvQixrQkFBa0IsbUJBQW1CO0FBQ3JDLGtCQUFrQjtBQUNsQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUNBQWlDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxLQUFLO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxLQUFLO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscUJBQXFCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELG9E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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLE1BQU07QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsa0RBQWtEO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsNENBQTRDO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGlEQUFpRCxrREFBa0Q7QUFDbkcsdUZBQXVGO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQixZQUFZLG1CQUFtQjtBQUMvQixrQkFBa0IsbUJBQW1CO0FBQ3JDLFlBQVksbUJBQW1CO0FBQy9CLGFBQWEsbUJBQW1CO0FBQ2hDLGtCQUFrQixtQkFBbUI7QUFDckMsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1Q0FBdUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELEtBQUs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLEtBQUs7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxrREFBa0Q7QUFDNUc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx3QkFBd0IsdUNBQXVDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0IsY0FBYyxtQkFBbUI7QUFDakMsWUFBWSxtQkFBbUI7QUFDL0Isa0JBQWtCO0FBQ2xCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLEtBQUs7QUFDM0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4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QVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxLQUFLO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxLQUFLO0FBQzNEOztBQUU2VjtBQUM3Vjs7Ozs7Ozs7Ozs7O0FDaHVIQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haWxndW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtYWlsZ3VuXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1haWxndW5cIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvKipcbiAqIEBhdXRob3IgVG9ydSBOYWdhc2hpbWEgPGh0dHBzOi8vZ2l0aHViLmNvbS9teXN0aWNhdGVhPlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiByb290IGRpcmVjdG9yeSBmb3IgZnVsbCBsaWNlbnNlLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBldmVudFRhcmdldFNoaW0gPSByZXF1aXJlKCdldmVudC10YXJnZXQtc2hpbScpO1xuXG4vKipcbiAqIFRoZSBzaWduYWwgY2xhc3MuXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jYWJvcnRzaWduYWxcbiAqL1xuY2xhc3MgQWJvcnRTaWduYWwgZXh0ZW5kcyBldmVudFRhcmdldFNoaW0uRXZlbnRUYXJnZXQge1xuICAgIC8qKlxuICAgICAqIEFib3J0U2lnbmFsIGNhbm5vdCBiZSBjb25zdHJ1Y3RlZCBkaXJlY3RseS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFib3J0U2lnbmFsIGNhbm5vdCBiZSBjb25zdHJ1Y3RlZCBkaXJlY3RseVwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhpcyBgQWJvcnRTaWduYWxgJ3MgYEFib3J0Q29udHJvbGxlcmAgaGFzIHNpZ25hbGVkIHRvIGFib3J0LCBhbmQgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAgICovXG4gICAgZ2V0IGFib3J0ZWQoKSB7XG4gICAgICAgIGNvbnN0IGFib3J0ZWQgPSBhYm9ydGVkRmxhZ3MuZ2V0KHRoaXMpO1xuICAgICAgICBpZiAodHlwZW9mIGFib3J0ZWQgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCAndGhpcycgdG8gYmUgYW4gJ0Fib3J0U2lnbmFsJyBvYmplY3QsIGJ1dCBnb3QgJHt0aGlzID09PSBudWxsID8gXCJudWxsXCIgOiB0eXBlb2YgdGhpc31gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWJvcnRlZDtcbiAgICB9XG59XG5ldmVudFRhcmdldFNoaW0uZGVmaW5lRXZlbnRBdHRyaWJ1dGUoQWJvcnRTaWduYWwucHJvdG90eXBlLCBcImFib3J0XCIpO1xuLyoqXG4gKiBDcmVhdGUgYW4gQWJvcnRTaWduYWwgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjcmVhdGVBYm9ydFNpZ25hbCgpIHtcbiAgICBjb25zdCBzaWduYWwgPSBPYmplY3QuY3JlYXRlKEFib3J0U2lnbmFsLnByb3RvdHlwZSk7XG4gICAgZXZlbnRUYXJnZXRTaGltLkV2ZW50VGFyZ2V0LmNhbGwoc2lnbmFsKTtcbiAgICBhYm9ydGVkRmxhZ3Muc2V0KHNpZ25hbCwgZmFsc2UpO1xuICAgIHJldHVybiBzaWduYWw7XG59XG4vKipcbiAqIEFib3J0IGEgZ2l2ZW4gc2lnbmFsLlxuICovXG5mdW5jdGlvbiBhYm9ydFNpZ25hbChzaWduYWwpIHtcbiAgICBpZiAoYWJvcnRlZEZsYWdzLmdldChzaWduYWwpICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFib3J0ZWRGbGFncy5zZXQoc2lnbmFsLCB0cnVlKTtcbiAgICBzaWduYWwuZGlzcGF0Y2hFdmVudCh7IHR5cGU6IFwiYWJvcnRcIiB9KTtcbn1cbi8qKlxuICogQWJvcnRlZCBmbGFnIGZvciBlYWNoIGluc3RhbmNlcy5cbiAqL1xuY29uc3QgYWJvcnRlZEZsYWdzID0gbmV3IFdlYWtNYXAoKTtcbi8vIFByb3BlcnRpZXMgc2hvdWxkIGJlIGVudW1lcmFibGUuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhBYm9ydFNpZ25hbC5wcm90b3R5cGUsIHtcbiAgICBhYm9ydGVkOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbn0pO1xuLy8gYHRvU3RyaW5nKClgIHNob3VsZCByZXR1cm4gYFwiW29iamVjdCBBYm9ydFNpZ25hbF1cImBcbmlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gXCJzeW1ib2xcIikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYm9ydFNpZ25hbC5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBcIkFib3J0U2lnbmFsXCIsXG4gICAgfSk7XG59XG5cbi8qKlxuICogVGhlIEFib3J0Q29udHJvbGxlci5cbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNhYm9ydGNvbnRyb2xsZXJcbiAqL1xuY2xhc3MgQWJvcnRDb250cm9sbGVyIHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoaXMgY29udHJvbGxlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc2lnbmFscy5zZXQodGhpcywgY3JlYXRlQWJvcnRTaWduYWwoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGBBYm9ydFNpZ25hbGAgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGlzIG9iamVjdC5cbiAgICAgKi9cbiAgICBnZXQgc2lnbmFsKCkge1xuICAgICAgICByZXR1cm4gZ2V0U2lnbmFsKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBYm9ydCBhbmQgc2lnbmFsIHRvIGFueSBvYnNlcnZlcnMgdGhhdCB0aGUgYXNzb2NpYXRlZCBhY3Rpdml0eSBpcyB0byBiZSBhYm9ydGVkLlxuICAgICAqL1xuICAgIGFib3J0KCkge1xuICAgICAgICBhYm9ydFNpZ25hbChnZXRTaWduYWwodGhpcykpO1xuICAgIH1cbn1cbi8qKlxuICogQXNzb2NpYXRlZCBzaWduYWxzLlxuICovXG5jb25zdCBzaWduYWxzID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogR2V0IHRoZSBhc3NvY2lhdGVkIHNpZ25hbCBvZiBhIGdpdmVuIGNvbnRyb2xsZXIuXG4gKi9cbmZ1bmN0aW9uIGdldFNpZ25hbChjb250cm9sbGVyKSB7XG4gICAgY29uc3Qgc2lnbmFsID0gc2lnbmFscy5nZXQoY29udHJvbGxlcik7XG4gICAgaWYgKHNpZ25hbCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkICd0aGlzJyB0byBiZSBhbiAnQWJvcnRDb250cm9sbGVyJyBvYmplY3QsIGJ1dCBnb3QgJHtjb250cm9sbGVyID09PSBudWxsID8gXCJudWxsXCIgOiB0eXBlb2YgY29udHJvbGxlcn1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpZ25hbDtcbn1cbi8vIFByb3BlcnRpZXMgc2hvdWxkIGJlIGVudW1lcmFibGUuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhBYm9ydENvbnRyb2xsZXIucHJvdG90eXBlLCB7XG4gICAgc2lnbmFsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICBhYm9ydDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG59KTtcbmlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gXCJzeW1ib2xcIikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYm9ydENvbnRyb2xsZXIucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogXCJBYm9ydENvbnRyb2xsZXJcIixcbiAgICB9KTtcbn1cblxuZXhwb3J0cy5BYm9ydENvbnRyb2xsZXIgPSBBYm9ydENvbnRyb2xsZXI7XG5leHBvcnRzLkFib3J0U2lnbmFsID0gQWJvcnRTaWduYWw7XG5leHBvcnRzLmRlZmF1bHQgPSBBYm9ydENvbnRyb2xsZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gQWJvcnRDb250cm9sbGVyXG5tb2R1bGUuZXhwb3J0cy5BYm9ydENvbnRyb2xsZXIgPSBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBYm9ydENvbnRyb2xsZXJcbm1vZHVsZS5leHBvcnRzLkFib3J0U2lnbmFsID0gQWJvcnRTaWduYWxcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFib3J0LWNvbnRyb2xsZXIuanMubWFwXG4iLCJpbXBvcnQgQ2xpZW50IGZyb20gJy4vbGliL2NsaWVudCdcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vbGliL2ludGVyZmFjZXMvT3B0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxndW4ge1xuICBwcml2YXRlIGZvcm1EYXRhOiBuZXcgKCkgPT4gRm9ybURhdGFcblxuICBjb25zdHJ1Y3RvcihGb3JtRGF0YTogbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gRm9ybURhdGEpIHtcbiAgICB0aGlzLmZvcm1EYXRhID0gRm9ybURhdGE7XG4gIH1cblxuICBjbGllbnQob3B0aW9uczogT3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgQ2xpZW50KG9wdGlvbnMsIHRoaXMuZm9ybURhdGEpXG4gIH1cbn07IiwiaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0JztcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vaW50ZXJmYWNlcy9PcHRpb25zJztcbmltcG9ydCBSZXF1ZXN0T3B0aW9ucyBmcm9tICcuL2ludGVyZmFjZXMvUmVxdWVzdE9wdGlvbnMnO1xuXG5pbXBvcnQgRG9tYWluQ2xpZW50IGZyb20gJy4vZG9tYWlucyc7XG5pbXBvcnQgRXZlbnRDbGllbnQgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IFN0YXRzQ2xpZW50IGZyb20gJy4vc3RhdHMnO1xuaW1wb3J0IFN1cHByZXNzaW9uQ2xpZW50IGZyb20gJy4vc3VwcHJlc3Npb25zJztcbmltcG9ydCBXZWJob29rQ2xpZW50IGZyb20gJy4vd2ViaG9va3MnO1xuaW1wb3J0IE1lc3NhZ2VzQ2xpZW50IGZyb20gJy4vbWVzc2FnZXMnO1xuaW1wb3J0IFJvdXRlc0NsaWVudCBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgVmFsaWRhdGVDbGllbnQgZnJvbSAnLi92YWxpZGF0ZSc7XG5pbXBvcnQgUGFyc2VDbGllbnQgZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQgSXBzQ2xpZW50IGZyb20gJy4vaXBzJztcbmltcG9ydCBJcFBvb2xzQ2xpZW50IGZyb20gJy4vaXAtcG9vbHMnO1xuaW1wb3J0IExpc3RzQ2xpZW50IGZyb20gJy4vbGlzdHMnO1xuaW1wb3J0IE1haWxMaXN0c01lbWJlcnMgZnJvbSAnLi9tYWlsTGlzdE1lbWJlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnQge1xuICBwcml2YXRlIHJlcXVlc3Q7XG5cbiAgcHVibGljIGRvbWFpbnM7XG4gIHB1YmxpYyB3ZWJob29rcztcbiAgcHVibGljIGV2ZW50cztcbiAgcHVibGljIHN0YXRzO1xuICBwdWJsaWMgc3VwcHJlc3Npb25zO1xuICBwdWJsaWMgbWVzc2FnZXM7XG4gIHB1YmxpYyByb3V0ZXM7XG4gIHB1YmxpYyBwdWJsaWNfcmVxdWVzdDtcbiAgcHVibGljIHZhbGlkYXRlO1xuICBwdWJsaWMgcGFyc2U7XG4gIHB1YmxpYyBpcHM7XG4gIHB1YmxpYyBpcF9wb29scztcbiAgcHVibGljIGxpc3RzO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9wdGlvbnMsIGZvcm1EYXRhOiBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IGNvbmZpZzogUmVxdWVzdE9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfSBhcyBSZXF1ZXN0T3B0aW9ucztcblxuICAgIGlmICghY29uZmlnLnVybCkge1xuICAgICAgY29uZmlnLnVybCA9ICdodHRwczovL2FwaS5tYWlsZ3VuLm5ldCdcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZy51c2VybmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgXCJ1c2VybmFtZVwiIGlzIHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWcua2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBcImtleVwiIGlzIHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHRoaXMucmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGNvbmZpZywgZm9ybURhdGEpO1xuICAgIGNvbnN0IG1haWxMaXN0c01lbWJlcnMgPSBuZXcgTWFpbExpc3RzTWVtYmVycyh0aGlzLnJlcXVlc3QpO1xuXG4gICAgdGhpcy5kb21haW5zID0gbmV3IERvbWFpbkNsaWVudCh0aGlzLnJlcXVlc3QpO1xuICAgIHRoaXMud2ViaG9va3MgPSBuZXcgV2ViaG9va0NsaWVudCh0aGlzLnJlcXVlc3QpO1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50Q2xpZW50KHRoaXMucmVxdWVzdCk7XG4gICAgdGhpcy5zdGF0cyA9IG5ldyBTdGF0c0NsaWVudCh0aGlzLnJlcXVlc3QpO1xuICAgIHRoaXMuc3VwcHJlc3Npb25zID0gbmV3IFN1cHByZXNzaW9uQ2xpZW50KHRoaXMucmVxdWVzdCk7XG4gICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBNZXNzYWdlc0NsaWVudCh0aGlzLnJlcXVlc3QpO1xuICAgIHRoaXMucm91dGVzID0gbmV3IFJvdXRlc0NsaWVudCh0aGlzLnJlcXVlc3QpO1xuICAgIHRoaXMuaXBzID0gbmV3IElwc0NsaWVudCh0aGlzLnJlcXVlc3QpO1xuICAgIHRoaXMuaXBfcG9vbHMgPSBuZXcgSXBQb29sc0NsaWVudCh0aGlzLnJlcXVlc3QpO1xuICAgIHRoaXMubGlzdHMgPSBuZXcgTGlzdHNDbGllbnQodGhpcy5yZXF1ZXN0LCBtYWlsTGlzdHNNZW1iZXJzKTtcblxuICAgIGlmIChjb25maWcucHVibGljX2tleSkge1xuICAgICAgY29uZmlnLmtleSA9IGNvbmZpZy5wdWJsaWNfa2V5O1xuXG4gICAgICB0aGlzLnB1YmxpY19yZXF1ZXN0ID0gbmV3IFJlcXVlc3QoY29uZmlnLCBmb3JtRGF0YSk7XG4gICAgICB0aGlzLnZhbGlkYXRlID0gbmV3IFZhbGlkYXRlQ2xpZW50KHRoaXMucHVibGljX3JlcXVlc3QpO1xuICAgICAgdGhpcy5wYXJzZSA9IG5ldyBQYXJzZUNsaWVudCh0aGlzLnB1YmxpY19yZXF1ZXN0KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB1cmxqb2luIGZyb20gJ3VybC1qb2luJztcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4vcmVxdWVzdCc7XG5cbmludGVyZmFjZSBEb21haW5EYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICByZXF1aXJlX3RsczogYW55O1xuICBza2lwX3ZlcmlmaWNhdGlvbjogYW55O1xuICBzdGF0ZTogYW55O1xuICB3aWxkY2FyZDogYW55O1xuICBzcGFtX2FjdGlvbjogYW55O1xuICBjcmVhdGVkX2F0OiBzdHJpbmcgfCBEYXRlO1xuICBzbXRwX3Bhc3N3b3JkOiBzdHJpbmc7XG4gIHNtdHBfbG9naW46IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5jbGFzcyBEb21haW4ge1xuICBuYW1lOiBhbnk7XG4gIHJlcXVpcmVfdGxzOiBhbnk7XG4gIHNraXBfdmVyaWZpY2F0aW9uOiBhbnk7XG4gIHN0YXRlOiBhbnk7XG4gIHdpbGRjYXJkOiBhbnk7XG4gIHNwYW1fYWN0aW9uOiBhbnk7XG4gIGNyZWF0ZWRfYXQ6IGFueTtcbiAgc210cF9wYXNzd29yZDogYW55O1xuICBzbXRwX2xvZ2luOiBhbnk7XG4gIHR5cGU6IGFueTtcbiAgcmVjZWl2aW5nX2Ruc19yZWNvcmRzOiBhbnk7XG4gIHNlbmRpbmdfZG5zX3JlY29yZHM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBEb21haW5EYXRhLCByZWNlaXZpbmc/OiBhbnksIHNlbmRpbmc/OiBhbnkpIHtcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5yZXF1aXJlX3RscyA9IGRhdGEucmVxdWlyZV90bHM7XG4gICAgdGhpcy5za2lwX3ZlcmlmaWNhdGlvbiA9IGRhdGEuc2tpcF92ZXJpZmljYXRpb247XG4gICAgdGhpcy5zdGF0ZSA9IGRhdGEuc3RhdGU7XG4gICAgdGhpcy53aWxkY2FyZCA9IGRhdGEud2lsZGNhcmQ7XG4gICAgdGhpcy5zcGFtX2FjdGlvbiA9IGRhdGEuc3BhbV9hY3Rpb247XG4gICAgdGhpcy5jcmVhdGVkX2F0ID0gZGF0YS5jcmVhdGVkX2F0O1xuICAgIHRoaXMuc210cF9wYXNzd29yZCA9IGRhdGEuc210cF9wYXNzd29yZDtcbiAgICB0aGlzLnNtdHBfbG9naW4gPSBkYXRhLnNtdHBfbG9naW47XG4gICAgdGhpcy50eXBlID0gZGF0YS50eXBlO1xuXG4gICAgdGhpcy5yZWNlaXZpbmdfZG5zX3JlY29yZHMgPSByZWNlaXZpbmcgfHwgbnVsbDtcbiAgICB0aGlzLnNlbmRpbmdfZG5zX3JlY29yZHMgPSBzZW5kaW5nIHx8IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tYWluQ2xpZW50IHtcbiAgcmVxdWVzdDogUmVxdWVzdDtcblxuICBjb25zdHJ1Y3RvcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgfVxuXG4gIF9wYXJzZU1lc3NhZ2UocmVzcG9uc2U6IHsgYm9keTogYW55IH0pIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuYm9keTtcbiAgfVxuXG4gIF9wYXJzZURvbWFpbkxpc3QocmVzcG9uc2U6IHsgYm9keTogeyBpdGVtczogRG9tYWluRGF0YVtdIH0gfSkge1xuICAgIHJldHVybiByZXNwb25zZS5ib2R5Lml0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIG5ldyBEb21haW4oaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBfcGFyc2VEb21haW4ocmVzcG9uc2U6IHtcbiAgICBib2R5OiB7XG4gICAgICBkb21haW46IGFueSxcbiAgICAgIHJlY2VpdmluZ19kbnNfcmVjb3JkczogYW55LFxuICAgICAgc2VuZGluZ19kbnNfcmVjb3JkczogYW55XG4gICAgfVxuICB9KSB7XG4gICAgcmV0dXJuIG5ldyBEb21haW4oXG4gICAgICByZXNwb25zZS5ib2R5LmRvbWFpbixcbiAgICAgIHJlc3BvbnNlLmJvZHkucmVjZWl2aW5nX2Ruc19yZWNvcmRzLFxuICAgICAgcmVzcG9uc2UuYm9keS5zZW5kaW5nX2Ruc19yZWNvcmRzXG4gICAgKTtcbiAgfVxuXG4gIF9wYXJzZVRyYWNraW5nU2V0dGluZ3MocmVzcG9uc2U6IHsgYm9keTogeyB0cmFja2luZzogYW55IH0gfSkge1xuICAgIHJldHVybiByZXNwb25zZS5ib2R5LnRyYWNraW5nO1xuICB9XG5cbiAgX3BhcnNlVHJhY2tpbmdVcGRhdGUocmVzcG9uc2U6IHsgYm9keTogYW55IH0pIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuYm9keTtcbiAgfVxuXG4gIGxpc3QocXVlcnk6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QuZ2V0KCcvdjIvZG9tYWlucycsIHF1ZXJ5KVxuICAgICAgLnRoZW4odGhpcy5fcGFyc2VEb21haW5MaXN0KTtcbiAgfVxuXG4gIGdldChkb21haW46IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QuZ2V0KGAvdjIvZG9tYWlucy8ke2RvbWFpbn1gKVxuICAgICAgLnRoZW4odGhpcy5fcGFyc2VEb21haW4pO1xuICB9XG5cbiAgY3JlYXRlKGRhdGE6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QucG9zdCgnL3YyL2RvbWFpbnMnLCBkYXRhKVxuICAgICAgLnRoZW4odGhpcy5fcGFyc2VEb21haW4pO1xuICB9XG5cbiAgZGVzdHJveShkb21haW46IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QuZGVsZXRlKGAvdjIvZG9tYWlucy8ke2RvbWFpbn1gKVxuICAgICAgLnRoZW4odGhpcy5fcGFyc2VNZXNzYWdlKTtcbiAgfVxuXG4gIC8vIFRyYWNraW5nXG5cbiAgZ2V0VHJhY2tpbmcoZG9tYWluOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmdldCh1cmxqb2luKCcvdjIvZG9tYWlucycsIGRvbWFpbiwgJ3RyYWNraW5nJykpXG4gICAgICAudGhlbih0aGlzLl9wYXJzZVRyYWNraW5nU2V0dGluZ3MpO1xuICB9XG5cbiAgdXBkYXRlVHJhY2tpbmcoZG9tYWluOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgZGF0YTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5wdXQodXJsam9pbignL3YyL2RvbWFpbnMnLCBkb21haW4sICd0cmFja2luZycsIHR5cGUpLCBkYXRhKVxuICAgICAgLnRoZW4odGhpcy5fcGFyc2VUcmFja2luZ1VwZGF0ZSk7XG4gIH1cblxuICAvLyBJUHNcblxuICBnZXRJcHMoZG9tYWluOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmdldCh1cmxqb2luKCcvdjIvZG9tYWlucycsIGRvbWFpbiwgJ2lwcycpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiB7IGJvZHk6IHsgaXRlbXM6IHN0cmluZ1tdIH0gfSkgPT4gcmVzcG9uc2U/LmJvZHk/Lml0ZW1zKTtcbiAgfVxuXG4gIGFzc2lnbklwKGRvbWFpbjogc3RyaW5nLCBpcDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5wb3N0KHVybGpvaW4oJy92Mi9kb21haW5zJywgZG9tYWluLCAnaXBzJyksIHsgaXAgfSk7XG4gIH1cblxuICBkZWxldGVJcChkb21haW46IHN0cmluZywgaXA6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QuZGVsZXRlKHVybGpvaW4oJy92Mi9kb21haW5zJywgZG9tYWluLCAnaXBzJywgaXApKTtcbiAgfVxuXG4gIGxpbmtJcFBvb2woZG9tYWluOiBzdHJpbmcsIHBvb2xfaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QucG9zdCh1cmxqb2luKCcvdjIvZG9tYWlucycsIGRvbWFpbiwgJ2lwcycpLCB7IHBvb2xfaWQgfSk7XG4gIH1cblxuICB1bmxpbmtJcFBvbGwoZG9tYWluOiBzdHJpbmcsIHBvb2xfaWQ6IHN0cmluZywgaXA6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QuZGVsZXRlKHVybGpvaW4oJy92Mi9kb21haW5zJywgZG9tYWluLCAnaXBzJywgJ2lwX3Bvb2wnKSwgeyBwb29sX2lkLCBpcCB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IEFQSUVycm9yT3B0aW9ucyBmcm9tICcuL2ludGVyZmFjZXMvQVBJRXJyb3JPcHRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHN0YXR1czogbnVtYmVyIHwgc3RyaW5nO1xuICBzdGFjazogc3RyaW5nO1xuICBkZXRhaWxzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIHN0YXR1cyxcbiAgICBzdGF0dXNUZXh0LFxuICAgIG1lc3NhZ2UsXG4gICAgYm9keSA9IHt9XG4gIH06IEFQSUVycm9yT3B0aW9ucykge1xuICAgIGNvbnN0IHsgbWVzc2FnZTogYm9keU1lc3NhZ2UsIGVycm9yIH0gPSBib2R5O1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCBlcnJvciB8fCBzdGF0dXNUZXh0O1xuICAgIHRoaXMuZGV0YWlscyA9IGJvZHlNZXNzYWdlO1xuICB9XG59XG4iLCJjb25zdCB1cmxqb2luID0gcmVxdWlyZSgndXJsLWpvaW4nKTtcblxuY29uc3QgTWdSZXF1ZXN0ID0gcmVxdWlyZSgnLi9yZXF1ZXN0Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50Q2xpZW50IHtcbiAgcmVxdWVzdDogdHlwZW9mIE1nUmVxdWVzdDtcblxuICBjb25zdHJ1Y3RvcihyZXF1ZXN0OiB0eXBlb2YgTWdSZXF1ZXN0KSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgfVxuXG4gIF9wYXJzZVBhZ2VOdW1iZXIodXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdXJsLnNwbGl0KCcvJykucG9wKCk7XG4gIH1cblxuICBfcGFyc2VQYWdlKGlkOiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHsgaWQsIG51bWJlcjogdGhpcy5fcGFyc2VQYWdlTnVtYmVyKHVybCksIHVybCB9O1xuICB9XG5cbiAgX3BhcnNlUGFnZUxpbmtzKHJlc3BvbnNlOiB7IGJvZHk6IHsgcGFnaW5nOiBhbnkgfSB9KSB7XG4gICAgY29uc3QgcGFnZXMgPSBPYmplY3QuZW50cmllcyhyZXNwb25zZS5ib2R5LnBhZ2luZyk7XG4gICAgcmV0dXJuIHBhZ2VzLnJlZHVjZShcbiAgICAgIChhY2M6IGFueSwgW2lkLCB1cmxdOiBbdXJsOiBzdHJpbmcsIGlkOiBzdHJpbmddKSA9PiB7XG4gICAgICAgIGFjY1tpZF0gPSB0aGlzLl9wYXJzZVBhZ2UoaWQsIHVybClcbiAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgfSwge30pO1xuICB9XG5cbiAgX3BhcnNlRXZlbnRMaXN0KHJlc3BvbnNlOiB7IGJvZHk6IHsgaXRlbXM6IGFueSwgcGFnaW5nOiBhbnkgfSAgfSkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogcmVzcG9uc2UuYm9keS5pdGVtcyxcbiAgICAgIHBhZ2VzOiB0aGlzLl9wYXJzZVBhZ2VMaW5rcyhyZXNwb25zZSlcbiAgICB9O1xuICB9XG5cbiAgZ2V0KGRvbWFpbjogc3RyaW5nLCBxdWVyeTogeyBwYWdlOiBhbnkgfSkge1xuICAgIGxldCB1cmw7XG5cbiAgICBpZiAocXVlcnkgJiYgcXVlcnkucGFnZSkge1xuICAgICAgdXJsID0gdXJsam9pbignL3YyJywgZG9tYWluLCAnZXZlbnRzJywgcXVlcnkucGFnZSk7XG4gICAgICBkZWxldGUgcXVlcnkucGFnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gdXJsam9pbignL3YyJywgZG9tYWluLCAnZXZlbnRzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5nZXQodXJsLCBxdWVyeSlcbiAgICAgIC50aGVuKChyZXNwb25zZTogeyBib2R5OiB7IGl0ZW1zOiBhbnksIHBhZ2luZzogYW55IH0gfSkgPT4gdGhpcy5fcGFyc2VFdmVudExpc3QocmVzcG9uc2UpKTtcbiAgfVxufVxuIiwiY29uc3QgTWdSZXF1ZXN0ID0gcmVxdWlyZSgnLi9yZXF1ZXN0Jyk7XG5cbmltcG9ydCB7IElwUG9vbCB9IGZyb20gXCIuL2ludGVyZmFjZXMvSXBQb29sc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJcFBvb2xzQ2xpZW50IHtcbiAgcmVxdWVzdDogdHlwZW9mIE1nUmVxdWVzdDtcblxuICBjb25zdHJ1Y3RvcihyZXF1ZXN0OiB0eXBlb2YgTWdSZXF1ZXN0KSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgfVxuXG4gIGxpc3QocXVlcnk6IGFueSk6IElwUG9vbFtdIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmdldCgnL3YxL2lwX3Bvb2xzJywgcXVlcnkpXG4gICAgICAudGhlbigocmVzcG9uc2U6IHsgYm9keTogeyBpcF9wb29sczogSXBQb29sLCBtZXNzYWdlOiBzdHJpbmcgfSB9KSA9PiB0aGlzLnBhcnNlSXBQb29sc1Jlc3BvbnNlKHJlc3BvbnNlKSk7XG4gIH1cblxuICBjcmVhdGUoZGF0YTogeyBuYW1lOiBzdHJpbmcsIGRlc2NyaXB0aW9uPzogc3RyaW5nLCBpcHM/OiBzdHJpbmdbXSB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5wb3N0KCcvdjEvaXBfcG9vbHMnLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiB7IGJvZHk6IHsgbWVzc2FnZTogc3RyaW5nLCBwb29sX2lkOiBzdHJpbmcgfSB9KSA9PiByZXNwb25zZT8uYm9keSk7XG4gIH1cblxuICB1cGRhdGUocG9vbElkOiBzdHJpbmcsIGRhdGE6IHsgbmFtZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBhZGRfaXA6IHN0cmluZywgcmVtb3ZlX2lwOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QucGF0Y2goYC92MS9pcF9wb29scy8ke3Bvb2xJZH1gLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiB7IGJvZHk6IGFueSB9KSA9PiByZXNwb25zZT8uYm9keSk7XG4gIH1cblxuICBkZWxldGUocG9vbElkOiBzdHJpbmcsIGRhdGE6IHsgaWQ6IHN0cmluZywgcG9vbF9pZDogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmRlbGV0ZShgL3YxL2lwX3Bvb2xzLyR7cG9vbElkfWAsIGRhdGEpXG4gICAgICAudGhlbigocmVzcG9uc2U6IHsgYm9keTogYW55IH0pID0+IHJlc3BvbnNlPy5ib2R5KTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VJcFBvb2xzUmVzcG9uc2UocmVzcG9uc2U6IHsgYm9keTogYW55IHwgYW55IH0pIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuYm9keS5pcF9wb29scztcbiAgfVxufVxuIiwiY29uc3QgTWdSZXF1ZXN0ID0gcmVxdWlyZSgnLi9yZXF1ZXN0Jyk7XG5pbXBvcnQgeyBJcERhdGEsIElwc0xpc3RSZXNwb25zZUJvZHkgfSBmcm9tICcuL2ludGVyZmFjZXMvSXBzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXBzQ2xpZW50IHtcbiAgcmVxdWVzdDogdHlwZW9mIE1nUmVxdWVzdDtcblxuICBjb25zdHJ1Y3RvcihyZXF1ZXN0OiB0eXBlb2YgTWdSZXF1ZXN0KSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgfVxuXG4gIGxpc3QocXVlcnk6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QuZ2V0KCcvdjMvaXBzJywgcXVlcnkpXG4gICAgICAudGhlbigocmVzcG9uc2U6IHsgYm9keTogSXBzTGlzdFJlc3BvbnNlQm9keSB9KSA9PiB0aGlzLnBhcnNlSXBzUmVzcG9uc2UocmVzcG9uc2UpKTtcbiAgfVxuXG4gIGdldChpcDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5nZXQoYC92My9pcHMvJHtpcH1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiB7IGJvZHk6IElwRGF0YSB9KSA9PiB0aGlzLnBhcnNlSXBzUmVzcG9uc2UocmVzcG9uc2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VJcHNSZXNwb25zZShyZXNwb25zZTogeyBib2R5OiBJcHNMaXN0UmVzcG9uc2VCb2R5IHwgSXBEYXRhIH0pIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuYm9keTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0JztcbmltcG9ydCB7XG4gIExpc3RzUXVlcnksXG4gIENyZWF0ZVVwZGF0ZUxpc3QsXG4gIERlc3Ryb3llZExpc3QsXG4gIE1haWxpbmdMaXN0XG59IGZyb20gJy4vaW50ZXJmYWNlcy9saXN0cyc7XG5pbXBvcnQge0lNYWlsTGlzdHNNZW1iZXJzfSBmcm9tICcuL2ludGVyZmFjZXMvbWFpbExpc3RNZW1iZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdHNDbGllbnQge1xuICBiYXNlUm91dGU6IHN0cmluZztcbiAgcmVxdWVzdDogUmVxdWVzdDtcbiAgbWVtYmVyczogSU1haWxMaXN0c01lbWJlcnM7XG5cbiAgY29uc3RydWN0b3IocmVxdWVzdDogUmVxdWVzdCwgbWVtYmVyczpJTWFpbExpc3RzTWVtYmVycykge1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgdGhpcy5iYXNlUm91dGUgPSAnL3YzL2xpc3RzJztcbiAgICB0aGlzLm1lbWJlcnMgPSBtZW1iZXJzO1xuICB9XG5cbiAgbGlzdChxdWVyeT86IExpc3RzUXVlcnkpOiBQcm9taXNlPE1haWxpbmdMaXN0W10+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmdldChgJHt0aGlzLmJhc2VSb3V0ZX0vcGFnZXNgLCBxdWVyeSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuYm9keS5pdGVtcyBhcyBNYWlsaW5nTGlzdFtdKTtcbiAgfVxuXG4gIGdldChtYWlsTGlzdEFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8TWFpbGluZ0xpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmdldChgJHt0aGlzLmJhc2VSb3V0ZX0vJHttYWlsTGlzdEFkZHJlc3N9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuYm9keS5saXN0IGFzIE1haWxpbmdMaXN0KTtcbiAgfVxuXG4gIGNyZWF0ZShkYXRhOiBDcmVhdGVVcGRhdGVMaXN0KTogUHJvbWlzZTxNYWlsaW5nTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QucG9zdE11bHRpKHRoaXMuYmFzZVJvdXRlLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5ib2R5Lmxpc3QgYXMgTWFpbGluZ0xpc3QpO1xuICB9XG5cbiAgdXBkYXRlKG1haWxMaXN0QWRkcmVzczogc3RyaW5nLCBkYXRhOiBDcmVhdGVVcGRhdGVMaXN0KTogUHJvbWlzZTxNYWlsaW5nTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QucHV0TXVsdGkoYCR7dGhpcy5iYXNlUm91dGV9LyR7bWFpbExpc3RBZGRyZXNzfWAsIGRhdGEpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmJvZHkubGlzdCBhcyBNYWlsaW5nTGlzdCk7XG4gIH1cblxuICBkZXN0cm95KG1haWxMaXN0QWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTxEZXN0cm95ZWRMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5kZWxldGUoYCR7dGhpcy5iYXNlUm91dGV9LyR7bWFpbExpc3RBZGRyZXNzfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmJvZHkgYXMgRGVzdHJveWVkTGlzdCk7XG4gIH1cbn1cbiIsImltcG9ydCBSZXF1ZXN0IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQge1xuICBNYWlsTGlzdE1lbWJlcnNRdWVyeSxcbiAgSU1haWxMaXN0c01lbWJlcnMsXG4gIENyZWF0ZVVwZGF0ZU1haWxMaXN0TWVtYmVycyxcbiAgTWFpbExpc3RNZW1iZXIsXG4gIE11bHRpcGxlTWVtYmVyc0RhdGEsXG4gIE11bHRpcGxlTWVtYmVyc1JlcURhdGEsXG4gIERlbGV0ZWRNZW1iZXIsXG4gIENyZWF0ZVVwZGF0ZU1haWxMaXN0TWVtYmVyc1JlcSxcbiAgTmV3TXVsdGlwbGVNZW1iZXJzUmVzcG9uc2Vcbn0gZnJvbSAnLi9pbnRlcmZhY2VzL21haWxMaXN0TWVtYmVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxMaXN0c01lbWJlcnMgaW1wbGVtZW50cyBJTWFpbExpc3RzTWVtYmVycyB7XG4gIGJhc2VSb3V0ZTogc3RyaW5nO1xuICByZXF1ZXN0OiBSZXF1ZXN0O1xuXG4gIGNvbnN0cnVjdG9yKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICAgIHRoaXMuYmFzZVJvdXRlID0gJy92My9saXN0cyc7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQW5kVXBkYXRlRGF0YShkYXRhOiBDcmVhdGVVcGRhdGVNYWlsTGlzdE1lbWJlcnMpIHtcbiAgICBjb25zdCBuZXdEYXRhID0geyAuLi5kYXRhIH07XG5cbiAgICBpZiAodHlwZW9mIGRhdGEudmFycyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG5ld0RhdGEudmFycyA9IEpTT04uc3RyaW5naWZ5KG5ld0RhdGEudmFycyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkYXRhLnN1YnNjcmliZWQgPT09ICdib29sZWFuJykge1xuICAgICAgbmV3RGF0YS5zdWJzY3JpYmVkID0gZGF0YS5zdWJzY3JpYmVkID8gJ3llcycgOiAnbm8nO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdEYXRhIGFzIENyZWF0ZVVwZGF0ZU1haWxMaXN0TWVtYmVyc1JlcTtcbiAgfVxuXG4gIGxpc3RNZW1iZXJzKG1haWxMaXN0QWRkcmVzczogc3RyaW5nLCBxdWVyeT86IE1haWxMaXN0TWVtYmVyc1F1ZXJ5KTogUHJvbWlzZTxNYWlsTGlzdE1lbWJlcltdPiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5nZXQoYCR7dGhpcy5iYXNlUm91dGV9LyR7bWFpbExpc3RBZGRyZXNzfS9tZW1iZXJzL3BhZ2VzYCwgcXVlcnkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmJvZHkuaXRlbXMgYXMgTWFpbExpc3RNZW1iZXJbXSk7XG4gIH1cblxuICBnZXRNZW1iZXIobWFpbExpc3RBZGRyZXNzOiBzdHJpbmcsIG1haWxMaXN0TWVtYmVyQWRkcmVzczogc3RyaW5nKTogUHJvbWlzZTxNYWlsTGlzdE1lbWJlcj4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QuZ2V0KGAke3RoaXMuYmFzZVJvdXRlfS8ke21haWxMaXN0QWRkcmVzc30vbWVtYmVycy8ke21haWxMaXN0TWVtYmVyQWRkcmVzc31gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5ib2R5Lm1lbWJlciBhcyBNYWlsTGlzdE1lbWJlcik7XG4gIH1cblxuICBjcmVhdGVNZW1iZXIoXG4gICAgbWFpbExpc3RBZGRyZXNzOiBzdHJpbmcsXG4gICAgZGF0YTogQ3JlYXRlVXBkYXRlTWFpbExpc3RNZW1iZXJzXG4gICk6IFByb21pc2U8TWFpbExpc3RNZW1iZXI+IHtcbiAgICBjb25zdCByZXFEYXRhID0gdGhpcy5jaGVja0FuZFVwZGF0ZURhdGEoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5wb3N0TXVsdGkoYCR7dGhpcy5iYXNlUm91dGV9LyR7bWFpbExpc3RBZGRyZXNzfS9tZW1iZXJzYCwgcmVxRGF0YSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuYm9keS5tZW1iZXIgYXMgTWFpbExpc3RNZW1iZXIpO1xuICB9XG5cbiAgY3JlYXRlTWVtYmVycyhcbiAgICBtYWlsTGlzdEFkZHJlc3M6IHN0cmluZyxcbiAgICBkYXRhOiBNdWx0aXBsZU1lbWJlcnNEYXRhXG4gICk6IFByb21pc2U8TmV3TXVsdGlwbGVNZW1iZXJzUmVzcG9uc2U+IHtcbiAgICBjb25zdCBuZXdEYXRhOiBNdWx0aXBsZU1lbWJlcnNSZXFEYXRhID0ge1xuICAgICAgbWVtYmVyczogQXJyYXkuaXNBcnJheShkYXRhLm1lbWJlcnMpID8gSlNPTi5zdHJpbmdpZnkoZGF0YS5tZW1iZXJzKSA6IGRhdGEubWVtYmVycyxcbiAgICAgIHVwc2VydDogZGF0YS51cHNlcnRcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5wb3N0TXVsdGkoYCR7dGhpcy5iYXNlUm91dGV9LyR7bWFpbExpc3RBZGRyZXNzfS9tZW1iZXJzLmpzb25gLCBuZXdEYXRhKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5ib2R5IGFzIE5ld011bHRpcGxlTWVtYmVyc1Jlc3BvbnNlKTtcbiAgfVxuXG4gIHVwZGF0ZU1lbWJlcihcbiAgICBtYWlsTGlzdEFkZHJlc3M6IHN0cmluZyxcbiAgICBtYWlsTGlzdE1lbWJlckFkZHJlc3M6IHN0cmluZyxcbiAgICBkYXRhOiBDcmVhdGVVcGRhdGVNYWlsTGlzdE1lbWJlcnNcbiAgKTogUHJvbWlzZTxNYWlsTGlzdE1lbWJlcj4ge1xuICAgIGNvbnN0IHJlcURhdGEgPSB0aGlzLmNoZWNrQW5kVXBkYXRlRGF0YShkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LnB1dE11bHRpKGAke3RoaXMuYmFzZVJvdXRlfS8ke21haWxMaXN0QWRkcmVzc30vbWVtYmVycy8ke21haWxMaXN0TWVtYmVyQWRkcmVzc31gLCByZXFEYXRhKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5ib2R5Lm1lbWJlciBhcyBNYWlsTGlzdE1lbWJlcik7XG4gIH1cblxuICBkZXN0cm95TWVtYmVyKG1haWxMaXN0QWRkcmVzczogc3RyaW5nLCBtYWlsTGlzdE1lbWJlckFkZHJlc3M6IHN0cmluZykgOiBQcm9taXNlPERlbGV0ZWRNZW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VSb3V0ZX0vJHttYWlsTGlzdEFkZHJlc3N9L21lbWJlcnMvJHttYWlsTGlzdE1lbWJlckFkZHJlc3N9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuYm9keSBhcyBEZWxldGVkTWVtYmVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlc0NsaWVudCB7XG4gIHJlcXVlc3Q6IFJlcXVlc3Q7XG5cbiAgY29uc3RydWN0b3IocmVxdWVzdDogUmVxdWVzdCkge1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIH1cblxuICBfcGFyc2VSZXNwb25zZShyZXNwb25zZTogeyBib2R5OiBhbnkgfSkge1xuICAgIGlmIChyZXNwb25zZS5ib2R5KSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuYm9keTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBjcmVhdGUoZG9tYWluOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGlmIChkYXRhLm1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QucG9zdE11bHRpKGAvdjMvJHtkb21haW59L21lc3NhZ2VzLm1pbWVgLCBkYXRhKVxuICAgICAgLnRoZW4odGhpcy5fcGFyc2VSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5wb3N0TXVsdGkoYC92My8ke2RvbWFpbn0vbWVzc2FnZXNgLCBkYXRhKVxuICAgICAgLnRoZW4odGhpcy5fcGFyc2VSZXNwb25zZSk7XG4gIH1cbn1cbiIsImltcG9ydCBSZXF1ZXN0IGZyb20gJy4vcmVxdWVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlQ2xpZW50IHtcbiAgcmVxdWVzdDogUmVxdWVzdDtcblxuICBjb25zdHJ1Y3RvcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgfVxuXG4gIGdldChhZGRyZXNzZXM6IHN0cmluZ1tdIHwgc3RyaW5nLCBlbmFibGVEbnNFc3BDaGVja3M6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBxdWVyeSA9IHt9IGFzIHsgYWRkcmVzc2VzOiBzdHJpbmcsIHN5bnRheF9vbmx5OiBib29sZWFuIH07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhZGRyZXNzZXMpKSB7XG4gICAgICBhZGRyZXNzZXMgPSBhZGRyZXNzZXMuam9pbignLCcpO1xuICAgIH1cblxuICAgIHF1ZXJ5LmFkZHJlc3NlcyA9IGFkZHJlc3NlcztcblxuICAgIGlmIChlbmFibGVEbnNFc3BDaGVja3MpIHtcbiAgICAgIHF1ZXJ5LnN5bnRheF9vbmx5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5nZXQoJy92My9hZGRyZXNzL3BhcnNlJywgcXVlcnkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmJvZHkpO1xuICB9XG59XG4iLCJpbXBvcnQgQnRvYSBmcm9tICdidG9hJztcbmltcG9ydCB1cmxqb2luIGZyb20gJ3VybC1qb2luJztcbmltcG9ydCBreSBmcm9tICdreS11bml2ZXJzYWwnO1xuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4vZXJyb3InO1xuaW1wb3J0IFJlcXVlc3RPcHRpb25zIGZyb20gJy4vaW50ZXJmYWNlcy9SZXF1ZXN0T3B0aW9ucyc7XG5pbXBvcnQgQVBJRXJyb3JPcHRpb25zIGZyb20gJy4vaW50ZXJmYWNlcy9BUElFcnJvck9wdGlvbnMnO1xuXG5pbnRlcmZhY2UgQVBJUmVzcG9uc2Uge1xuICBzdGF0dXM6IG51bWJlcjtcbiAgYm9keTogYW55O1xufVxuY29uc3QgaXNTdHJlYW0gPSAoYXR0YWNobWVudDogYW55KSA9PiB0eXBlb2YgYXR0YWNobWVudCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGF0dGFjaG1lbnQucGlwZSA9PT0gJ2Z1bmN0aW9uJztcblxuY29uc3QgZ2V0QXR0YWNobWVudE9wdGlvbnMgPSAoaXRlbTogYW55KToge1xuICBmaWxlbmFtZT86IHN0cmluZyxcbiAgY29udGVudFR5cGU/OiBzdHJpbmcsXG4gIGtub3duTGVuZ3RoPzogbnVtYmVyXG59ID0+IHtcbiAgaWYgKHR5cGVvZiBpdGVtICE9PSAnb2JqZWN0JyB8fCBpc1N0cmVhbShpdGVtKSkgcmV0dXJuIHt9O1xuXG4gIGNvbnN0IHtcbiAgICBmaWxlbmFtZSxcbiAgICBjb250ZW50VHlwZSxcbiAgICBrbm93bkxlbmd0aFxuICB9ID0gaXRlbTtcblxuICByZXR1cm4ge1xuICAgIC4uLihmaWxlbmFtZSA/IHsgZmlsZW5hbWUgfSA6IHsgZmlsZW5hbWU6ICdmaWxlJyB9KSxcbiAgICAuLi4oY29udGVudFR5cGUgJiYgeyBjb250ZW50VHlwZSB9KSxcbiAgICAuLi4oa25vd25MZW5ndGggJiYgeyBrbm93bkxlbmd0aCB9KVxuICB9O1xufTtcblxuY29uc3Qgc3RyZWFtVG9TdHJpbmcgPSAoc3RyZWFtOiBhbnkpID0+IHtcbiAgY29uc3QgY2h1bmtzOiBhbnkgPSBbXTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzdHJlYW0ub24oJ2RhdGEnLCAoY2h1bms6IGFueSkgPT4gY2h1bmtzLnB1c2goY2h1bmspKTtcbiAgICBzdHJlYW0ub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgICBzdHJlYW0ub24oJ2VuZCcsICgpID0+IHJlc29sdmUoQnVmZmVyLmNvbmNhdChjaHVua3MpLnRvU3RyaW5nKCd1dGY4JykpKTtcbiAgfSk7XG59O1xuXG5jbGFzcyBSZXF1ZXN0IHtcbiAgcHJpdmF0ZSB1c2VybmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGtleTogc3RyaW5nO1xuICBwcml2YXRlIHVybDogc3RyaW5nO1xuICBwcml2YXRlIHRpbWVvdXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBoZWFkZXJzOiBhbnk7XG4gIHByaXZhdGUgZm9ybURhdGE6IG5ldyAoKSA9PiBGb3JtRGF0YTtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucywgZm9ybURhdGE6IG5ldyAoKSA9PiBGb3JtRGF0YSkge1xuICAgIHRoaXMudXNlcm5hbWUgPSBvcHRpb25zLnVzZXJuYW1lO1xuICAgIHRoaXMua2V5ID0gb3B0aW9ucy5rZXk7XG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCBhcyBzdHJpbmc7XG4gICAgdGhpcy50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICB0aGlzLmZvcm1EYXRhID0gZm9ybURhdGE7XG4gIH1cblxuICBwcml2YXRlIG9iamVjdFRvVVJMU2VhcmNoUGFyYW1zKGRhdGE6IGFueSk6IFVSTFNlYXJjaFBhcmFtcyB7XG4gICAgY29uc3QgdXJsZW5jb2RlZERhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdOiBhbnkpID0+XG4gICAgICB1cmxlbmNvZGVkRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHVybGVuY29kZWREYXRhXG4gIH1cblxuICBhc3luYyByZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgaW5wdXRPcHRpb25zPzogYW55KTogUHJvbWlzZTxBUElSZXNwb25zZT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IC4uLmlucHV0T3B0aW9ucyB9O1xuICAgIGNvbnN0IGJhc2ljID0gQnRvYShgJHt0aGlzLnVzZXJuYW1lfToke3RoaXMua2V5fWApO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtiYXNpY31gLFxuICAgICAgLi4udGhpcy5oZWFkZXJzLFxuICAgICAgLi4ub3B0aW9ucz8uaGVhZGVyc1xuICAgIH07XG5cbiAgICBkZWxldGUgb3B0aW9ucz8uaGVhZGVycztcblxuICAgIGlmICghaGVhZGVyc1snQ29udGVudC1UeXBlJ10pIHtcbiAgICAgIC8vIGZvciBmb3JtLWRhdGEgaXQgd2lsbCBiZSBOdWxsIHNvIHdlIG5lZWQgdG8gcmVtb3ZlIGl0XG4gICAgICBkZWxldGUgaGVhZGVyc1snQ29udGVudC1UeXBlJ107XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0geyAuLi5vcHRpb25zIH07XG5cbiAgICBpZiAob3B0aW9ucz8ucXVlcnkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob3B0aW9ucz8ucXVlcnkpLmxlbmd0aCA+IDApIHtcbiAgICAgIHBhcmFtcy5zZWFyY2hQYXJhbXMgPSBvcHRpb25zLnF1ZXJ5O1xuICAgICAgZGVsZXRlIHBhcmFtcy5xdWVyeTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGt5KFxuICAgICAgdXJsam9pbih0aGlzLnVybCwgdXJsKSxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBtZXRob2QudG9Mb2NhbGVVcHBlckNhc2UoKSxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgdGhyb3dIdHRwRXJyb3JzOiBmYWxzZSxcbiAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICAuLi5wYXJhbXNcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCFyZXNwb25zZT8ub2spIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZXNwb25zZT8uYm9keSAmJiBpc1N0cmVhbShyZXNwb25zZS5ib2R5KVxuICAgICAgICA/IGF3YWl0IHN0cmVhbVRvU3RyaW5nKHJlc3BvbnNlLmJvZHkpXG4gICAgICAgIDogYXdhaXQgcmVzcG9uc2U/Lmpzb24oKTtcblxuICAgICAgdGhyb3cgbmV3IEFQSUVycm9yKHtcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZT8uc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXNwb25zZT8uc3RhdHVzVGV4dCxcbiAgICAgICAgYm9keTogeyBtZXNzYWdlIH1cbiAgICAgIH0gYXMgQVBJRXJyb3JPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYm9keTogYXdhaXQgcmVzcG9uc2U/Lmpzb24oKSxcbiAgICAgIHN0YXR1czogcmVzcG9uc2U/LnN0YXR1c1xuICAgIH07XG4gIH1cblxuICBxdWVyeShtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIHF1ZXJ5OiBhbnksIG9wdGlvbnM/OiBhbnkpIDogUHJvbWlzZTxBUElSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWV0aG9kLCB1cmwsIHsgcXVlcnksIC4uLm9wdGlvbnMgfSk7XG4gIH1cblxuICBjb21tYW5kKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgZGF0YTogYW55LCBvcHRpb25zPzogYW55KSA6IFByb21pc2U8QVBJUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1ldGhvZCwgdXJsLCB7XG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxuICAgICAgYm9keTogZGF0YSxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9KTtcbiAgfVxuXG4gIGdldCh1cmw6IHN0cmluZywgcXVlcnk/OiBhbnksIG9wdGlvbnM/OiBhbnkpIDogUHJvbWlzZTxBUElSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KCdnZXQnLCB1cmwsIHF1ZXJ5LCBvcHRpb25zKTtcbiAgfVxuXG4gIGhlYWQodXJsOiBzdHJpbmcsIHF1ZXJ5OiBhbnksIG9wdGlvbnM6IGFueSkgOiBQcm9taXNlPEFQSVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkoJ2hlYWQnLCB1cmwsIHF1ZXJ5LCBvcHRpb25zKTtcbiAgfVxuXG4gIG9wdGlvbnModXJsOiBzdHJpbmcsIHF1ZXJ5OiBhbnksIG9wdGlvbnM6IGFueSkgOiBQcm9taXNlPEFQSVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkoJ29wdGlvbnMnLCB1cmwsIHF1ZXJ5LCBvcHRpb25zKTtcbiAgfVxuXG4gIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgb3B0aW9ucz86IGFueSkgOiBQcm9taXNlPEFQSVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbWFuZCgncG9zdCcsIHVybCwgdGhpcy5vYmplY3RUb1VSTFNlYXJjaFBhcmFtcyhkYXRhKSwgb3B0aW9ucyk7XG4gIH1cblxuICBwb3N0TXVsdGkodXJsOiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8QVBJUmVzcG9uc2U+IHtcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6IG51bGwgfVxuICAgIH07XG4gICAgY29uc3QgZm9ybURhdGEgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmNvbW1hbmQoJ3Bvc3QnLCB1cmwsIGZvcm1EYXRhLCBwYXJhbXMpO1xuICB9XG5cbiAgcHV0TXVsdGkodXJsOiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8QVBJUmVzcG9uc2U+IHtcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6IG51bGwgfVxuICAgIH07XG4gICAgY29uc3QgZm9ybURhdGEgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmNvbW1hbmQoJ3B1dCcsIHVybCwgZm9ybURhdGEsIHBhcmFtcyk7XG4gIH1cblxuICBjcmVhdGVGb3JtRGF0YShkYXRhOiBhbnkpOiBGb3JtRGF0YSB7XG4gICAgY29uc3QgZm9ybURhdGE6IEZvcm1EYXRhID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZGF0YVtrZXldOyB9KVxuICAgICAgLnJlZHVjZSgoZm9ybURhdGFBY2MsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09PSAnYXR0YWNobWVudCcgfHwga2V5ID09PSAnaW5saW5lJykge1xuICAgICAgICAgIGNvbnN0IG9iaiA9IGRhdGFba2V5XTtcblxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW1EYXRhID0gaXNTdHJlYW0oaXRlbSkgPyBpdGVtIDogaXRlbS5kYXRhO1xuICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZ2V0QXR0YWNobWVudE9wdGlvbnMoaXRlbSk7XG4gICAgICAgICAgICAgIChmb3JtRGF0YUFjYyBhcyBhbnkpLmFwcGVuZChrZXksIGl0ZW1EYXRhLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBvYmpEYXRhID0gaXNTdHJlYW0ob2JqKSA/IG9iaiA6IG9iai5kYXRhO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGdldEF0dGFjaG1lbnRPcHRpb25zKG9iaik7XG4gICAgICAgICAgICAoZm9ybURhdGFBY2MgYXMgYW55KS5hcHBlbmQoa2V5LCBvYmpEYXRhLCBvcHRpb25zKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZm9ybURhdGFBY2M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhW2tleV0pKSB7XG4gICAgICAgICAgZGF0YVtrZXldLmZvckVhY2goZnVuY3Rpb24gKGl0ZW06IGFueSkge1xuICAgICAgICAgICAgZm9ybURhdGFBY2MuYXBwZW5kKGtleSwgaXRlbSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YVtrZXldICE9IG51bGwpIHtcbiAgICAgICAgICBmb3JtRGF0YUFjYy5hcHBlbmQoa2V5LCBkYXRhW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtRGF0YUFjYztcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXctY2FwXG4gICAgICB9LCBuZXcgdGhpcy5mb3JtRGF0YSgpKTtcbiAgICByZXR1cm4gZm9ybURhdGE7XG4gIH1cblxuICBwdXQodXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgb3B0aW9ucz86IGFueSk6IFByb21pc2U8QVBJUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tYW5kKCdwdXQnLCB1cmwsIHRoaXMub2JqZWN0VG9VUkxTZWFyY2hQYXJhbXMoZGF0YSksIG9wdGlvbnMpO1xuICB9XG5cbiAgcGF0Y2godXJsOiBzdHJpbmcsIGRhdGE6IGFueSwgb3B0aW9ucz86IGFueSk6IFByb21pc2U8QVBJUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tYW5kKCdwYXRjaCcsIHVybCwgdGhpcy5vYmplY3RUb1VSTFNlYXJjaFBhcmFtcyhkYXRhKSwgb3B0aW9ucyk7XG4gIH1cblxuICBkZWxldGUodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIG9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPEFQSVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbWFuZCgnZGVsZXRlJywgdXJsLCB0aGlzLm9iamVjdFRvVVJMU2VhcmNoUGFyYW1zKGRhdGEpLCBvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0O1xuIiwiaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVzQ2xpZW50IHtcbiAgcmVxdWVzdDogUmVxdWVzdDtcblxuICBjb25zdHJ1Y3RvcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gICAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgfVxuXG4gIGxpc3QocXVlcnk6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QuZ2V0KCcvdjMvcm91dGVzJywgcXVlcnkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmJvZHkuaXRlbXMpO1xuICB9XG5cbiAgZ2V0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmdldChgL3YzL3JvdXRlcy8ke2lkfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmJvZHkucm91dGUpO1xuICB9XG5cbiAgY3JlYXRlKGRhdGE6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QucG9zdCgnL3YzL3JvdXRlcycsIGRhdGEpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmJvZHkucm91dGUpO1xuICB9XG5cbiAgdXBkYXRlKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QucHV0KGAvdjMvcm91dGVzLyR7aWR9YCwgZGF0YSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuYm9keSk7XG4gIH1cblxuICBkZXN0cm95KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmRlbGV0ZShgL3YzL3JvdXRlcy8ke2lkfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmJvZHkpO1xuICB9XG59XG4iLCJpbXBvcnQgdXJsam9pbiBmcm9tICd1cmwtam9pbic7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnO1xuaW1wb3J0IFN0YXRzT3B0aW9ucyBmcm9tICcuL2ludGVyZmFjZXMvU3RhdHNPcHRpb25zJztcblxuY2xhc3MgU3RhdHMge1xuICBzdGFydDogRGF0ZTtcbiAgZW5kOiBEYXRlO1xuICByZXNvbHV0aW9uOiBzdHJpbmc7XG4gIHN0YXRzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogU3RhdHNPcHRpb25zKSB7XG4gICAgdGhpcy5zdGFydCA9IG5ldyBEYXRlKGRhdGEuc3RhcnQpO1xuICAgIHRoaXMuZW5kID0gbmV3IERhdGUoZGF0YS5lbmQpO1xuICAgIHRoaXMucmVzb2x1dGlvbiA9IGRhdGEucmVzb2x1dGlvbjtcbiAgICB0aGlzLnN0YXRzID0gZGF0YS5zdGF0cy5tYXAoZnVuY3Rpb24gKHN0YXQ6IHsgdGltZTogc3RyaW5nIHwgRGF0ZSB9KSB7XG4gICAgICBzdGF0LnRpbWUgPSBuZXcgRGF0ZShzdGF0LnRpbWUpO1xuICAgICAgcmV0dXJuIHN0YXQ7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHNDbGllbnQge1xuICByZXF1ZXN0OiBSZXF1ZXN0O1xuXG4gIGNvbnN0cnVjdG9yKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICB9XG5cbiAgX3BhcnNlU3RhdHMocmVzcG9uc2U6IHsgYm9keTogU3RhdHNPcHRpb25zIH0pIHtcbiAgICByZXR1cm4gbmV3IFN0YXRzKHJlc3BvbnNlLmJvZHkpO1xuICB9XG5cbiAgZ2V0RG9tYWluKGRvbWFpbjogc3RyaW5nLCBxdWVyeTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5nZXQodXJsam9pbignL3YzJywgZG9tYWluLCAnc3RhdHMvdG90YWwnKSwgcXVlcnkpXG4gICAgICAudGhlbih0aGlzLl9wYXJzZVN0YXRzKTtcbiAgfVxuXG4gIGdldEFjY291bnQocXVlcnk6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QuZ2V0KCcvdjMvc3RhdHMvdG90YWwnLCBxdWVyeSlcbiAgICAgIC50aGVuKHRoaXMuX3BhcnNlU3RhdHMpO1xuICB9XG59XG4iLCJpbXBvcnQgdXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsam9pbiBmcm9tICd1cmwtam9pbic7XG5cbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQgeyBCb3VuY2VEYXRhLCBDb21wbGFpbnREYXRhLCBVbnN1YnNjcmliZURhdGEgfSBmcm9tICcuL2ludGVyZmFjZXMvU3VwcmVzc2lvbnMnO1xuXG50eXBlIFRNb2RlbCA9IHR5cGVvZiBCb3VuY2UgfCB0eXBlb2YgQ29tcGxhaW50IHwgdHlwZW9mIFVuc3Vic2NyaWJlO1xuXG5jb25zdCBjcmVhdGVPcHRpb25zID0ge1xuICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxufTtcblxuY2xhc3MgQm91bmNlIHtcbiAgdHlwZTogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNvZGU6IG51bWJlcjtcbiAgZXJyb3I6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogRGF0ZTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBCb3VuY2VEYXRhKSB7XG4gICAgdGhpcy50eXBlID0gJ2JvdW5jZXMnO1xuICAgIHRoaXMuYWRkcmVzcyA9IGRhdGEuYWRkcmVzcztcbiAgICB0aGlzLmNvZGUgPSArZGF0YS5jb2RlO1xuICAgIHRoaXMuZXJyb3IgPSBkYXRhLmVycm9yO1xuICAgIHRoaXMuY3JlYXRlZF9hdCA9IG5ldyBEYXRlKGRhdGEuY3JlYXRlZF9hdCk7XG4gIH1cbn1cblxuY2xhc3MgQ29tcGxhaW50IHtcbiAgdHlwZTogc3RyaW5nO1xuICBhZGRyZXNzOiBhbnk7XG4gIGNyZWF0ZWRfYXQ6IERhdGU7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogQ29tcGxhaW50RGF0YSkge1xuICAgIHRoaXMudHlwZSA9ICdjb21wbGFpbnRzJztcbiAgICB0aGlzLmFkZHJlc3MgPSBkYXRhLmFkZHJlc3M7XG4gICAgdGhpcy5jcmVhdGVkX2F0ID0gbmV3IERhdGUoZGF0YS5jcmVhdGVkX2F0KTtcbiAgfVxufVxuXG5jbGFzcyBVbnN1YnNjcmliZSB7XG4gIHR5cGU6IHN0cmluZztcbiAgYWRkcmVzczogc3RyaW5nO1xuICB0YWdzOiBhbnk7XG4gIGNyZWF0ZWRfYXQ6IERhdGU7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogVW5zdWJzY3JpYmVEYXRhKSB7XG4gICAgdGhpcy50eXBlID0gJ3Vuc3Vic2NyaWJlcyc7XG4gICAgdGhpcy5hZGRyZXNzID0gZGF0YS5hZGRyZXNzO1xuICAgIHRoaXMudGFncyA9IGRhdGEudGFncztcbiAgICB0aGlzLmNyZWF0ZWRfYXQgPSBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRfYXQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1cHByZXNzaW9uQ2xpZW50IHtcbiAgcmVxdWVzdDogYW55O1xuICBtb2RlbHM6IHtcbiAgICBib3VuY2VzOiB0eXBlb2YgQm91bmNlO1xuICAgIGNvbXBsYWludHM6IHR5cGVvZiBDb21wbGFpbnQ7XG4gICAgdW5zdWJzY3JpYmVzOiB0eXBlb2YgVW5zdWJzY3JpYmU7XG4gIH07XG5cbiAgY29uc3RydWN0b3IocmVxdWVzdDogUmVxdWVzdCkge1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgdGhpcy5tb2RlbHMgPSB7XG4gICAgICBib3VuY2VzOiBCb3VuY2UsXG4gICAgICBjb21wbGFpbnRzOiBDb21wbGFpbnQsXG4gICAgICB1bnN1YnNjcmliZXM6IFVuc3Vic2NyaWJlXG4gICAgfTtcbiAgfVxuXG4gIF9wYXJzZVBhZ2UoaWQ6IHN0cmluZywgcGFnZVVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyc2VkVXJsID0gdXJsLnBhcnNlKHBhZ2VVcmwsIHRydWUpO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHBhcnNlZFVybDtcblxuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIHBhZ2U6IHF1ZXJ5LnBhZ2UsXG4gICAgICBhZGRyZXNzOiBxdWVyeS5hZGRyZXNzLFxuICAgICAgdXJsOiBwYWdlVXJsXG4gICAgfTtcbiAgfVxuXG4gIF9wYXJzZVBhZ2VMaW5rcyhyZXNwb25zZTogeyBib2R5OiB7IHBhZ2luZzogYW55IH0gfSkge1xuICAgIGNvbnN0IHBhZ2VzID0gT2JqZWN0LmVudHJpZXMocmVzcG9uc2UuYm9keS5wYWdpbmcpO1xuICAgIHJldHVybiBwYWdlcy5yZWR1Y2UoXG4gICAgICAoYWNjOiBhbnksIFtpZCwgdXJsXTogW3VybDogc3RyaW5nLCBpZDogc3RyaW5nXSkgPT4ge1xuICAgICAgICBhY2NbaWRdID0gdGhpcy5fcGFyc2VQYWdlKGlkLCB1cmwpXG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH0sIHt9KTtcbiAgfVxuXG4gIF9wYXJzZUxpc3QocmVzcG9uc2U6IHsgYm9keTogeyBpdGVtczogYW55LCBwYWdpbmc6IGFueSB9IH0sIE1vZGVsOiBUTW9kZWwpIHtcbiAgICBjb25zdCBkYXRhID0ge30gYXMgYW55O1xuXG4gICAgZGF0YS5pdGVtcyA9IHJlc3BvbnNlLmJvZHkuaXRlbXMubWFwKChkOiBhbnkpID0+IG5ldyBNb2RlbChkKSk7XG5cbiAgICBkYXRhLnBhZ2VzID0gdGhpcy5fcGFyc2VQYWdlTGlua3MocmVzcG9uc2UpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBfcGFyc2VJdGVtKHJlc3BvbnNlOiB7IGJvZHk6IGFueSB9LCBNb2RlbDogVE1vZGVsKSB7XG4gICAgcmV0dXJuIG5ldyBNb2RlbChyZXNwb25zZS5ib2R5KTtcbiAgfVxuXG4gIGxpc3QoZG9tYWluOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgcXVlcnk6IGFueSkge1xuICAgIGNvbnN0IG1vZGVsID0gKHRoaXMubW9kZWxzIGFzIGFueSlbdHlwZV07XG5cbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0XG4gICAgICAuZ2V0KHVybGpvaW4oJ3YzJywgZG9tYWluLCB0eXBlKSwgcXVlcnkpXG4gICAgICAudGhlbigocmVzcG9uc2U6IHsgYm9keTogeyBpdGVtczogYW55LCBwYWdpbmc6IGFueSB9IH0pID0+IHRoaXMuX3BhcnNlTGlzdChyZXNwb25zZSwgbW9kZWwpKTtcbiAgfVxuXG4gIGdldChkb21haW46IHN0cmluZywgdHlwZTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2RlbCA9ICh0aGlzLm1vZGVscyBhcyBhbnkpW3R5cGVdO1xuXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFxuICAgICAgLmdldCh1cmxqb2luKCd2MycsIGRvbWFpbiwgdHlwZSwgZW5jb2RlVVJJQ29tcG9uZW50KGFkZHJlc3MpKSlcbiAgICAgIC50aGVuKChyZXNwb25zZTogeyBib2R5OiBhbnkgfSkgPT4gdGhpcy5fcGFyc2VJdGVtKHJlc3BvbnNlLCBtb2RlbCkpO1xuICB9XG5cbiAgY3JlYXRlKGRvbWFpbjogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIC8vIHN1cHBvcnRzIGFkZGluZyBtdWx0aXBsZSBzdXBwcmVzc2lvbnMgYnkgZGVmYXVsdFxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0XG4gICAgLnBvc3QodXJsam9pbigndjMnLCBkb21haW4sIHR5cGUpLCBkYXRhLCBjcmVhdGVPcHRpb25zKVxuICAgIC50aGVuKChyZXNwb25zZTogeyBib2R5OiBhbnkgfSkgPT4gcmVzcG9uc2UuYm9keSk7XG4gIH1cblxuICBkZXN0cm95KGRvbWFpbjogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RcbiAgICAuZGVsZXRlKHVybGpvaW4oJ3YzJywgZG9tYWluLCB0eXBlLCBlbmNvZGVVUklDb21wb25lbnQoYWRkcmVzcykpKVxuICAgIC50aGVuKChyZXNwb25zZTogeyBib2R5OiBhbnkgfSkgPT4gcmVzcG9uc2UuYm9keSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdXBwcmVzc2lvbkNsaWVudDtcbiIsIlxuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGVDbGllbnQge1xuICByZXF1ZXN0OiBSZXF1ZXN0O1xuXG4gIGNvbnN0cnVjdG9yKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICB9XG5cbiAgZ2V0KGFkZHJlc3M6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QuZ2V0KCcvdjMvYWRkcmVzcy92YWxpZGF0ZScsIHsgYWRkcmVzcyB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5ib2R5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHVybGpvaW4gZnJvbSAndXJsLWpvaW4nO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0JztcblxuY2xhc3MgV2ViaG9vayB7XG4gIGlkOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGRhdGE6IHsgdXJsOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnVybCA9IGRhdGEudXJsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYmhvb2tDbGllbnQge1xuICByZXF1ZXN0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocmVxdWVzdDogUmVxdWVzdCkge1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIH1cblxuICBfcGFyc2VXZWJob29rTGlzdChyZXNwb25zZTogeyBib2R5OiB7IHdlYmhvb2tzOiBhbnkgfSB9KSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmJvZHkud2ViaG9va3M7XG4gIH1cblxuICBfcGFyc2VXZWJob29rV2l0aElEKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNlOiB7IGJvZHk6IHsgd2ViaG9vazogYW55IH0gfSkge1xuICAgICAgcmV0dXJuIG5ldyBXZWJob29rKGlkLCByZXNwb25zZS5ib2R5LndlYmhvb2spO1xuICAgIH07XG4gIH1cblxuICBfcGFyc2VXZWJob29rVGVzdChyZXNwb25zZTogeyBib2R5OiB7IGNvZGU6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nIH0gfSkge1xuICAgIHJldHVybiB7IGNvZGU6IHJlc3BvbnNlLmJvZHkuY29kZSwgbWVzc2FnZTogcmVzcG9uc2UuYm9keS5tZXNzYWdlIH07XG4gIH1cblxuICBsaXN0KGRvbWFpbjogc3RyaW5nLCBxdWVyeTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5nZXQodXJsam9pbignL3YyL2RvbWFpbnMnLCBkb21haW4sICd3ZWJob29rcycpLCBxdWVyeSlcbiAgICAgIC50aGVuKHRoaXMuX3BhcnNlV2ViaG9va0xpc3QpO1xuICB9XG5cbiAgZ2V0KGRvbWFpbjogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5nZXQodXJsam9pbignL3YyL2RvbWFpbnMnLCBkb21haW4sICd3ZWJob29rcycsIGlkKSlcbiAgICAgIC50aGVuKHRoaXMuX3BhcnNlV2ViaG9va1dpdGhJRChpZCkpO1xuICB9XG5cbiAgY3JlYXRlKGRvbWFpbjogc3RyaW5nLCBpZDogc3RyaW5nLCB1cmw6IHN0cmluZywgdGVzdDogYm9vbGVhbikge1xuICAgIGlmICh0ZXN0KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LnB1dCh1cmxqb2luKCcvdjIvZG9tYWlucycsIGRvbWFpbiwgJ3dlYmhvb2tzJywgaWQsICd0ZXN0JyksIHsgdXJsIH0pXG4gICAgICAgIC50aGVuKHRoaXMuX3BhcnNlV2ViaG9va1Rlc3QpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QucG9zdCh1cmxqb2luKCcvdjIvZG9tYWlucycsIGRvbWFpbiwgJ3dlYmhvb2tzJyksIHsgaWQsIHVybCB9KVxuICAgICAgLnRoZW4odGhpcy5fcGFyc2VXZWJob29rV2l0aElEKGlkKSk7XG4gIH1cblxuICB1cGRhdGUoZG9tYWluOiBzdHJpbmcsIGlkOiBzdHJpbmcsIHVybDogc3RyaW5nLCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QucHV0KHVybGpvaW4oJy92Mi9kb21haW5zJywgZG9tYWluLCAnd2ViaG9va3MnLCBpZCksIHsgdXJsIH0pXG4gICAgICAudGhlbih0aGlzLl9wYXJzZVdlYmhvb2tXaXRoSUQoaWQpKTtcbiAgfVxuXG4gIGRlc3Ryb3koZG9tYWluOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmRlbGV0ZSh1cmxqb2luKCcvdjIvZG9tYWlucycsIGRvbWFpbiwgJ3dlYmhvb2tzJywgaWQpKVxuICAgICAgLnRoZW4odGhpcy5fcGFyc2VXZWJob29rV2l0aElEKGlkKSk7XG4gIH1cbn1cbiIsIihmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGZ1bmN0aW9uIGJ0b2Eoc3RyKSB7XG4gICAgdmFyIGJ1ZmZlcjtcblxuICAgIGlmIChzdHIgaW5zdGFuY2VvZiBCdWZmZXIpIHtcbiAgICAgIGJ1ZmZlciA9IHN0cjtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmZmVyID0gQnVmZmVyLmZyb20oc3RyLnRvU3RyaW5nKCksICdiaW5hcnknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzID0gYnRvYTtcbn0oKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogUmV0dXJucyBhIGBCdWZmZXJgIGluc3RhbmNlIGZyb20gdGhlIGdpdmVuIGRhdGEgVVJJIGB1cmlgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmkgRGF0YSBVUkkgdG8gdHVybiBpbnRvIGEgQnVmZmVyIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtCdWZmZXJ9IEJ1ZmZlciBpbnN0YW5jZSBmcm9tIERhdGEgVVJJXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBkYXRhVXJpVG9CdWZmZXIodXJpKSB7XG4gICAgaWYgKCEvXmRhdGE6L2kudGVzdCh1cmkpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2B1cmlgIGRvZXMgbm90IGFwcGVhciB0byBiZSBhIERhdGEgVVJJIChtdXN0IGJlZ2luIHdpdGggXCJkYXRhOlwiKScpO1xuICAgIH1cbiAgICAvLyBzdHJpcCBuZXdsaW5lc1xuICAgIHVyaSA9IHVyaS5yZXBsYWNlKC9cXHI/XFxuL2csICcnKTtcbiAgICAvLyBzcGxpdCB0aGUgVVJJIHVwIGludG8gdGhlIFwibWV0YWRhdGFcIiBhbmQgdGhlIFwiZGF0YVwiIHBvcnRpb25zXG4gICAgY29uc3QgZmlyc3RDb21tYSA9IHVyaS5pbmRleE9mKCcsJyk7XG4gICAgaWYgKGZpcnN0Q29tbWEgPT09IC0xIHx8IGZpcnN0Q29tbWEgPD0gNCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYWxmb3JtZWQgZGF0YTogVVJJJyk7XG4gICAgfVxuICAgIC8vIHJlbW92ZSB0aGUgXCJkYXRhOlwiIHNjaGVtZSBhbmQgcGFyc2UgdGhlIG1ldGFkYXRhXG4gICAgY29uc3QgbWV0YSA9IHVyaS5zdWJzdHJpbmcoNSwgZmlyc3RDb21tYSkuc3BsaXQoJzsnKTtcbiAgICBsZXQgY2hhcnNldCA9ICcnO1xuICAgIGxldCBiYXNlNjQgPSBmYWxzZTtcbiAgICBjb25zdCB0eXBlID0gbWV0YVswXSB8fCAndGV4dC9wbGFpbic7XG4gICAgbGV0IHR5cGVGdWxsID0gdHlwZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1ldGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1ldGFbaV0gPT09ICdiYXNlNjQnKSB7XG4gICAgICAgICAgICBiYXNlNjQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHlwZUZ1bGwgKz0gYDske21ldGFbaV19YDtcbiAgICAgICAgICAgIGlmIChtZXRhW2ldLmluZGV4T2YoJ2NoYXJzZXQ9JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjaGFyc2V0ID0gbWV0YVtpXS5zdWJzdHJpbmcoOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZGVmYXVsdHMgdG8gVVMtQVNDSUkgb25seSBpZiB0eXBlIGlzIG5vdCBwcm92aWRlZFxuICAgIGlmICghbWV0YVswXSAmJiAhY2hhcnNldC5sZW5ndGgpIHtcbiAgICAgICAgdHlwZUZ1bGwgKz0gJztjaGFyc2V0PVVTLUFTQ0lJJztcbiAgICAgICAgY2hhcnNldCA9ICdVUy1BU0NJSSc7XG4gICAgfVxuICAgIC8vIGdldCB0aGUgZW5jb2RlZCBkYXRhIHBvcnRpb24gYW5kIGRlY29kZSBVUkktZW5jb2RlZCBjaGFyc1xuICAgIGNvbnN0IGVuY29kaW5nID0gYmFzZTY0ID8gJ2Jhc2U2NCcgOiAnYXNjaWknO1xuICAgIGNvbnN0IGRhdGEgPSB1bmVzY2FwZSh1cmkuc3Vic3RyaW5nKGZpcnN0Q29tbWEgKyAxKSk7XG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oZGF0YSwgZW5jb2RpbmcpO1xuICAgIC8vIHNldCBgLnR5cGVgIGFuZCBgLnR5cGVGdWxsYCBwcm9wZXJ0aWVzIHRvIE1JTUUgdHlwZVxuICAgIGJ1ZmZlci50eXBlID0gdHlwZTtcbiAgICBidWZmZXIudHlwZUZ1bGwgPSB0eXBlRnVsbDtcbiAgICAvLyBzZXQgdGhlIGAuY2hhcnNldGAgcHJvcGVydHlcbiAgICBidWZmZXIuY2hhcnNldCA9IGNoYXJzZXQ7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZGF0YVVyaVRvQnVmZmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBAYXV0aG9yIFRvcnUgTmFnYXNoaW1hIDxodHRwczovL2dpdGh1Yi5jb20vbXlzdGljYXRlYT5cbiAqIEBjb3B5cmlnaHQgMjAxNSBUb3J1IE5hZ2FzaGltYS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gcm9vdCBkaXJlY3RvcnkgZm9yIGZ1bGwgbGljZW5zZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFByaXZhdGVEYXRhXG4gKiBAcHJvcGVydHkge0V2ZW50VGFyZ2V0fSBldmVudFRhcmdldCBUaGUgZXZlbnQgdGFyZ2V0LlxuICogQHByb3BlcnR5IHt7dHlwZTpzdHJpbmd9fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50UGhhc2UgVGhlIGN1cnJlbnQgZXZlbnQgcGhhc2UuXG4gKiBAcHJvcGVydHkge0V2ZW50VGFyZ2V0fG51bGx9IGN1cnJlbnRUYXJnZXQgVGhlIGN1cnJlbnQgZXZlbnQgdGFyZ2V0LlxuICogQHByb3BlcnR5IHtib29sZWFufSBjYW5jZWxlZCBUaGUgZmxhZyB0byBwcmV2ZW50IGRlZmF1bHQuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHN0b3BwZWQgVGhlIGZsYWcgdG8gc3RvcCBwcm9wYWdhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaW1tZWRpYXRlU3RvcHBlZCBUaGUgZmxhZyB0byBzdG9wIHByb3BhZ2F0aW9uIGltbWVkaWF0ZWx5LlxuICogQHByb3BlcnR5IHtGdW5jdGlvbnxudWxsfSBwYXNzaXZlTGlzdGVuZXIgVGhlIGxpc3RlbmVyIGlmIHRoZSBjdXJyZW50IGxpc3RlbmVyIGlzIHBhc3NpdmUuIE90aGVyd2lzZSB0aGlzIGlzIG51bGwuXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGltZVN0YW1wIFRoZSB1bml4IHRpbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogUHJpdmF0ZSBkYXRhIGZvciBldmVudCB3cmFwcGVycy5cbiAqIEB0eXBlIHtXZWFrTWFwPEV2ZW50LCBQcml2YXRlRGF0YT59XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBwcml2YXRlRGF0YSA9IG5ldyBXZWFrTWFwKCk7XG5cbi8qKlxuICogQ2FjaGUgZm9yIHdyYXBwZXIgY2xhc3Nlcy5cbiAqIEB0eXBlIHtXZWFrTWFwPE9iamVjdCwgRnVuY3Rpb24+fVxuICogQHByaXZhdGVcbiAqL1xuY29uc3Qgd3JhcHBlcnMgPSBuZXcgV2Vha01hcCgpO1xuXG4vKipcbiAqIEdldCBwcml2YXRlIGRhdGEuXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgb2JqZWN0IHRvIGdldCBwcml2YXRlIGRhdGEuXG4gKiBAcmV0dXJucyB7UHJpdmF0ZURhdGF9IFRoZSBwcml2YXRlIGRhdGEgb2YgdGhlIGV2ZW50LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGQoZXZlbnQpIHtcbiAgICBjb25zdCByZXR2ID0gcHJpdmF0ZURhdGEuZ2V0KGV2ZW50KTtcbiAgICBjb25zb2xlLmFzc2VydChcbiAgICAgICAgcmV0diAhPSBudWxsLFxuICAgICAgICBcIid0aGlzJyBpcyBleHBlY3RlZCBhbiBFdmVudCBvYmplY3QsIGJ1dCBnb3RcIixcbiAgICAgICAgZXZlbnRcbiAgICApO1xuICAgIHJldHVybiByZXR2XG59XG5cbi8qKlxuICogaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNzZXQtdGhlLWNhbmNlbGVkLWZsYWdcbiAqIEBwYXJhbSBkYXRhIHtQcml2YXRlRGF0YX0gcHJpdmF0ZSBkYXRhLlxuICovXG5mdW5jdGlvbiBzZXRDYW5jZWxGbGFnKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5wYXNzaXZlTGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgXCJVbmFibGUgdG8gcHJldmVudERlZmF1bHQgaW5zaWRlIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgaW52b2NhdGlvbi5cIixcbiAgICAgICAgICAgICAgICBkYXRhLnBhc3NpdmVMaXN0ZW5lclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKCFkYXRhLmV2ZW50LmNhbmNlbGFibGUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZGF0YS5jYW5jZWxlZCA9IHRydWU7XG4gICAgaWYgKHR5cGVvZiBkYXRhLmV2ZW50LnByZXZlbnREZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZGF0YS5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jaW50ZXJmYWNlLWV2ZW50XG4gKiBAcHJpdmF0ZVxuICovXG4vKipcbiAqIFRoZSBldmVudCB3cmFwcGVyLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBldmVudFRhcmdldCBUaGUgZXZlbnQgdGFyZ2V0IG9mIHRoaXMgZGlzcGF0Y2hpbmcuXG4gKiBAcGFyYW0ge0V2ZW50fHt0eXBlOnN0cmluZ319IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudCB0byB3cmFwLlxuICovXG5mdW5jdGlvbiBFdmVudChldmVudFRhcmdldCwgZXZlbnQpIHtcbiAgICBwcml2YXRlRGF0YS5zZXQodGhpcywge1xuICAgICAgICBldmVudFRhcmdldCxcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGV2ZW50UGhhc2U6IDIsXG4gICAgICAgIGN1cnJlbnRUYXJnZXQ6IGV2ZW50VGFyZ2V0LFxuICAgICAgICBjYW5jZWxlZDogZmFsc2UsXG4gICAgICAgIHN0b3BwZWQ6IGZhbHNlLFxuICAgICAgICBpbW1lZGlhdGVTdG9wcGVkOiBmYWxzZSxcbiAgICAgICAgcGFzc2l2ZUxpc3RlbmVyOiBudWxsLFxuICAgICAgICB0aW1lU3RhbXA6IGV2ZW50LnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpLFxuICAgIH0pO1xuXG4gICAgLy8gaHR0cHM6Ly9oZXljYW0uZ2l0aHViLmlvL3dlYmlkbC8jVW5mb3JnZWFibGVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc1RydXN0ZWRcIiwgeyB2YWx1ZTogZmFsc2UsIGVudW1lcmFibGU6IHRydWUgfSk7XG5cbiAgICAvLyBEZWZpbmUgYWNjZXNzb3JzXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMpKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCBkZWZpbmVSZWRpcmVjdERlc2NyaXB0b3Ioa2V5KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFNob3VsZCBiZSBlbnVtZXJhYmxlLCBidXQgY2xhc3MgbWV0aG9kcyBhcmUgbm90IGVudW1lcmFibGUuXG5FdmVudC5wcm90b3R5cGUgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhpcyBldmVudC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gcGQodGhpcykuZXZlbnQudHlwZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IG9mIHRoaXMgZXZlbnQuXG4gICAgICogQHR5cGUge0V2ZW50VGFyZ2V0fVxuICAgICAqL1xuICAgIGdldCB0YXJnZXQoKSB7XG4gICAgICAgIHJldHVybiBwZCh0aGlzKS5ldmVudFRhcmdldFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IG9mIHRoaXMgZXZlbnQuXG4gICAgICogQHR5cGUge0V2ZW50VGFyZ2V0fVxuICAgICAqL1xuICAgIGdldCBjdXJyZW50VGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gcGQodGhpcykuY3VycmVudFRhcmdldFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7RXZlbnRUYXJnZXRbXX0gVGhlIGNvbXBvc2VkIHBhdGggb2YgdGhpcyBldmVudC5cbiAgICAgKi9cbiAgICBjb21wb3NlZFBhdGgoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBwZCh0aGlzKS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBpZiAoY3VycmVudFRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2N1cnJlbnRUYXJnZXRdXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnN0YW50IG9mIE5PTkUuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgTk9ORSgpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uc3RhbnQgb2YgQ0FQVFVSSU5HX1BIQVNFLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IENBUFRVUklOR19QSEFTRSgpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uc3RhbnQgb2YgQVRfVEFSR0VULlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0IEFUX1RBUkdFVCgpIHtcbiAgICAgICAgcmV0dXJuIDJcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uc3RhbnQgb2YgQlVCQkxJTkdfUEhBU0UuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgQlVCQkxJTkdfUEhBU0UoKSB7XG4gICAgICAgIHJldHVybiAzXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgb2YgdGhpcyBldmVudC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldCBldmVudFBoYXNlKCkge1xuICAgICAgICByZXR1cm4gcGQodGhpcykuZXZlbnRQaGFzZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGV2ZW50IGJ1YmJsaW5nLlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHBkKHRoaXMpO1xuXG4gICAgICAgIGRhdGEuc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YS5ldmVudC5zdG9wUHJvcGFnYXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZGF0YS5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGV2ZW50IGJ1YmJsaW5nLlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHBkKHRoaXMpO1xuXG4gICAgICAgIGRhdGEuc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIGRhdGEuaW1tZWRpYXRlU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YS5ldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZGF0YS5ldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmxhZyB0byBiZSBidWJibGluZy5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgYnViYmxlcygpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocGQodGhpcykuZXZlbnQuYnViYmxlcylcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGZsYWcgdG8gYmUgY2FuY2VsYWJsZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY2FuY2VsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocGQodGhpcykuZXZlbnQuY2FuY2VsYWJsZSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FuY2VsIHRoaXMgZXZlbnQuXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJldmVudERlZmF1bHQoKSB7XG4gICAgICAgIHNldENhbmNlbEZsYWcocGQodGhpcykpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmxhZyB0byBpbmRpY2F0ZSBjYW5jZWxsYXRpb24gc3RhdGUuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IGRlZmF1bHRQcmV2ZW50ZWQoKSB7XG4gICAgICAgIHJldHVybiBwZCh0aGlzKS5jYW5jZWxlZFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmxhZyB0byBiZSBjb21wb3NlZC5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgY29tcG9zZWQoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHBkKHRoaXMpLmV2ZW50LmNvbXBvc2VkKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdW5peCB0aW1lIG9mIHRoaXMgZXZlbnQuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXQgdGltZVN0YW1wKCkge1xuICAgICAgICByZXR1cm4gcGQodGhpcykudGltZVN0YW1wXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgb2YgdGhpcyBldmVudC5cbiAgICAgKiBAdHlwZSB7RXZlbnRUYXJnZXR9XG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBnZXQgc3JjRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHBkKHRoaXMpLmV2ZW50VGFyZ2V0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBmbGFnIHRvIHN0b3AgZXZlbnQgYnViYmxpbmcuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBnZXQgY2FuY2VsQnViYmxlKCkge1xuICAgICAgICByZXR1cm4gcGQodGhpcykuc3RvcHBlZFxuICAgIH0sXG4gICAgc2V0IGNhbmNlbEJ1YmJsZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gcGQodGhpcyk7XG5cbiAgICAgICAgZGF0YS5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhLmV2ZW50LmNhbmNlbEJ1YmJsZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIGRhdGEuZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmxhZyB0byBpbmRpY2F0ZSBjYW5jZWxsYXRpb24gc3RhdGUuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBnZXQgcmV0dXJuVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiAhcGQodGhpcykuY2FuY2VsZWRcbiAgICB9LFxuICAgIHNldCByZXR1cm5WYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICBzZXRDYW5jZWxGbGFnKHBkKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoaXMgZXZlbnQgb2JqZWN0LiBCdXQgZG8gbm90aGluZyB1bmRlciBldmVudCBkaXNwYXRjaGluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgZXZlbnQgdHlwZS5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtidWJibGVzPWZhbHNlXSBUaGUgZmxhZyB0byBiZSBwb3NzaWJsZSB0byBidWJibGUgdXAuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbY2FuY2VsYWJsZT1mYWxzZV0gVGhlIGZsYWcgdG8gYmUgcG9zc2libGUgdG8gY2FuY2VsLlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgaW5pdEV2ZW50KCkge1xuICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgIH0sXG59O1xuXG4vLyBgY29uc3RydWN0b3JgIGlzIG5vdCBlbnVtZXJhYmxlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50LnByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEV2ZW50LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbn0pO1xuXG4vLyBFbnN1cmUgYGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LkV2ZW50YCBpcyBgdHJ1ZWAuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LkV2ZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKEV2ZW50LnByb3RvdHlwZSwgd2luZG93LkV2ZW50LnByb3RvdHlwZSk7XG5cbiAgICAvLyBNYWtlIGFzc29jaWF0aW9uIGZvciB3cmFwcGVycy5cbiAgICB3cmFwcGVycy5zZXQod2luZG93LkV2ZW50LnByb3RvdHlwZSwgRXZlbnQpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgcHJvcGVydHkgZGVzY3JpcHRvciB0byByZWRpcmVjdCBhIGdpdmVuIHByb3BlcnR5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBQcm9wZXJ0eSBuYW1lIHRvIGRlZmluZSBwcm9wZXJ0eSBkZXNjcmlwdG9yLlxuICogQHJldHVybnMge1Byb3BlcnR5RGVzY3JpcHRvcn0gVGhlIHByb3BlcnR5IGRlc2NyaXB0b3IgdG8gcmVkaXJlY3QgdGhlIHByb3BlcnR5LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVmaW5lUmVkaXJlY3REZXNjcmlwdG9yKGtleSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBwZCh0aGlzKS5ldmVudFtrZXldXG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgcGQodGhpcykuZXZlbnRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgcHJvcGVydHkgZGVzY3JpcHRvciB0byBjYWxsIGEgZ2l2ZW4gbWV0aG9kIHByb3BlcnR5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBQcm9wZXJ0eSBuYW1lIHRvIGRlZmluZSBwcm9wZXJ0eSBkZXNjcmlwdG9yLlxuICogQHJldHVybnMge1Byb3BlcnR5RGVzY3JpcHRvcn0gVGhlIHByb3BlcnR5IGRlc2NyaXB0b3IgdG8gY2FsbCB0aGUgbWV0aG9kIHByb3BlcnR5LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVmaW5lQ2FsbERlc2NyaXB0b3Ioa2V5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUoKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IHBkKHRoaXMpLmV2ZW50O1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50W2tleV0uYXBwbHkoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWZpbmUgbmV3IHdyYXBwZXIgY2xhc3MuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBCYXNlRXZlbnQgVGhlIGJhc2Ugd3JhcHBlciBjbGFzcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgcHJvdG90eXBlIG9mIHRoZSBvcmlnaW5hbCBldmVudC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVGhlIGRlZmluZWQgd3JhcHBlciBjbGFzcy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlZmluZVdyYXBwZXIoQmFzZUV2ZW50LCBwcm90bykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm90byk7XG4gICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCYXNlRXZlbnRcbiAgICB9XG5cbiAgICAvKiogQ3VzdG9tRXZlbnQgKi9cbiAgICBmdW5jdGlvbiBDdXN0b21FdmVudChldmVudFRhcmdldCwgZXZlbnQpIHtcbiAgICAgICAgQmFzZUV2ZW50LmNhbGwodGhpcywgZXZlbnRUYXJnZXQsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VFdmVudC5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHsgdmFsdWU6IEN1c3RvbUV2ZW50LCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgfSk7XG5cbiAgICAvLyBEZWZpbmUgYWNjZXNzb3JzLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBpZiAoIShrZXkgaW4gQmFzZUV2ZW50LnByb3RvdHlwZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpO1xuICAgICAgICAgICAgY29uc3QgaXNGdW5jID0gdHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICBDdXN0b21FdmVudC5wcm90b3R5cGUsXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGlzRnVuY1xuICAgICAgICAgICAgICAgICAgICA/IGRlZmluZUNhbGxEZXNjcmlwdG9yKGtleSlcbiAgICAgICAgICAgICAgICAgICAgOiBkZWZpbmVSZWRpcmVjdERlc2NyaXB0b3Ioa2V5KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBDdXN0b21FdmVudFxufVxuXG4vKipcbiAqIEdldCB0aGUgd3JhcHBlciBjbGFzcyBvZiBhIGdpdmVuIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgcHJvdG90eXBlIG9mIHRoZSBvcmlnaW5hbCBldmVudCB0byBnZXQgaXRzIHdyYXBwZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFRoZSB3cmFwcGVyIGNsYXNzLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0V3JhcHBlcihwcm90bykge1xuICAgIGlmIChwcm90byA9PSBudWxsIHx8IHByb3RvID09PSBPYmplY3QucHJvdG90eXBlKSB7XG4gICAgICAgIHJldHVybiBFdmVudFxuICAgIH1cblxuICAgIGxldCB3cmFwcGVyID0gd3JhcHBlcnMuZ2V0KHByb3RvKTtcbiAgICBpZiAod3JhcHBlciA9PSBudWxsKSB7XG4gICAgICAgIHdyYXBwZXIgPSBkZWZpbmVXcmFwcGVyKGdldFdyYXBwZXIoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSksIHByb3RvKTtcbiAgICAgICAgd3JhcHBlcnMuc2V0KHByb3RvLCB3cmFwcGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXBwZXJcbn1cblxuLyoqXG4gKiBXcmFwIGEgZ2l2ZW4gZXZlbnQgdG8gbWFuYWdlbWVudCBhIGRpc3BhdGNoaW5nLlxuICogQHBhcmFtIHtFdmVudFRhcmdldH0gZXZlbnRUYXJnZXQgVGhlIGV2ZW50IHRhcmdldCBvZiB0aGlzIGRpc3BhdGNoaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IFRoZSBldmVudCB0byB3cmFwLlxuICogQHJldHVybnMge0V2ZW50fSBUaGUgd3JhcHBlciBpbnN0YW5jZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHdyYXBFdmVudChldmVudFRhcmdldCwgZXZlbnQpIHtcbiAgICBjb25zdCBXcmFwcGVyID0gZ2V0V3JhcHBlcihPYmplY3QuZ2V0UHJvdG90eXBlT2YoZXZlbnQpKTtcbiAgICByZXR1cm4gbmV3IFdyYXBwZXIoZXZlbnRUYXJnZXQsIGV2ZW50KVxufVxuXG4vKipcbiAqIEdldCB0aGUgaW1tZWRpYXRlU3RvcHBlZCBmbGFnIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdG8gZ2V0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRoZSBmbGFnIHRvIHN0b3AgcHJvcGFnYXRpb24gaW1tZWRpYXRlbHkuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1N0b3BwZWQoZXZlbnQpIHtcbiAgICByZXR1cm4gcGQoZXZlbnQpLmltbWVkaWF0ZVN0b3BwZWRcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGN1cnJlbnQgZXZlbnQgcGhhc2Ugb2YgYSBnaXZlbiBldmVudC5cbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0byBzZXQgY3VycmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZXZlbnRQaGFzZSBOZXcgZXZlbnQgcGhhc2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldEV2ZW50UGhhc2UoZXZlbnQsIGV2ZW50UGhhc2UpIHtcbiAgICBwZChldmVudCkuZXZlbnRQaGFzZSA9IGV2ZW50UGhhc2U7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjdXJyZW50IHRhcmdldCBvZiBhIGdpdmVuIGV2ZW50LlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRvIHNldCBjdXJyZW50IHRhcmdldC5cbiAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8bnVsbH0gY3VycmVudFRhcmdldCBOZXcgY3VycmVudCB0YXJnZXQuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXJnZXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICBwZChldmVudCkuY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXQ7XG59XG5cbi8qKlxuICogU2V0IGEgcGFzc2l2ZSBsaXN0ZW5lciBvZiBhIGdpdmVuIGV2ZW50LlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRvIHNldCBjdXJyZW50IHRhcmdldC5cbiAqIEBwYXJhbSB7RnVuY3Rpb258bnVsbH0gcGFzc2l2ZUxpc3RlbmVyIE5ldyBwYXNzaXZlIGxpc3RlbmVyLlxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXRQYXNzaXZlTGlzdGVuZXIoZXZlbnQsIHBhc3NpdmVMaXN0ZW5lcikge1xuICAgIHBkKGV2ZW50KS5wYXNzaXZlTGlzdGVuZXIgPSBwYXNzaXZlTGlzdGVuZXI7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gTGlzdGVuZXJOb2RlXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICogQHByb3BlcnR5IHsxfDJ8M30gbGlzdGVuZXJUeXBlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHBhc3NpdmVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb25jZVxuICogQHByb3BlcnR5IHtMaXN0ZW5lck5vZGV8bnVsbH0gbmV4dFxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEB0eXBlIHtXZWFrTWFwPG9iamVjdCwgTWFwPHN0cmluZywgTGlzdGVuZXJOb2RlPj59XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBsaXN0ZW5lcnNNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG4vLyBMaXN0ZW5lciB0eXBlc1xuY29uc3QgQ0FQVFVSRSA9IDE7XG5jb25zdCBCVUJCTEUgPSAyO1xuY29uc3QgQVRUUklCVVRFID0gMztcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgZ2l2ZW4gdmFsdWUgaXMgYW4gb2JqZWN0IG9yIG5vdC5cbiAqIEBwYXJhbSB7YW55fSB4IFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiIC8vZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxufVxuXG4vKipcbiAqIEdldCBsaXN0ZW5lcnMuXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBldmVudFRhcmdldCBUaGUgZXZlbnQgdGFyZ2V0IHRvIGdldC5cbiAqIEByZXR1cm5zIHtNYXA8c3RyaW5nLCBMaXN0ZW5lck5vZGU+fSBUaGUgbGlzdGVuZXJzLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0TGlzdGVuZXJzKGV2ZW50VGFyZ2V0KSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gbGlzdGVuZXJzTWFwLmdldChldmVudFRhcmdldCk7XG4gICAgaWYgKGxpc3RlbmVycyA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICBcIid0aGlzJyBpcyBleHBlY3RlZCBhbiBFdmVudFRhcmdldCBvYmplY3QsIGJ1dCBnb3QgYW5vdGhlciB2YWx1ZS5cIlxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiBsaXN0ZW5lcnNcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByb3BlcnR5IGRlc2NyaXB0b3IgZm9yIHRoZSBldmVudCBhdHRyaWJ1dGUgb2YgYSBnaXZlbiBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgVGhlIGV2ZW50IG5hbWUgdG8gZ2V0IHByb3BlcnR5IGRlc2NyaXB0b3IuXG4gKiBAcmV0dXJucyB7UHJvcGVydHlEZXNjcmlwdG9yfSBUaGUgcHJvcGVydHkgZGVzY3JpcHRvci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlZmluZUV2ZW50QXR0cmlidXRlRGVzY3JpcHRvcihldmVudE5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBnZXRMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGxpc3RlbmVycy5nZXQoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5saXN0ZW5lclR5cGUgPT09IEFUVFJJQlVURSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5saXN0ZW5lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIiAmJiAhaXNPYmplY3QobGlzdGVuZXIpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBudWxsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBnZXRMaXN0ZW5lcnModGhpcyk7XG5cbiAgICAgICAgICAgIC8vIFRyYXZlcnNlIHRvIHRoZSB0YWlsIHdoaWxlIHJlbW92aW5nIG9sZCB2YWx1ZS5cbiAgICAgICAgICAgIGxldCBwcmV2ID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBub2RlID0gbGlzdGVuZXJzLmdldChldmVudE5hbWUpO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmxpc3RlbmVyVHlwZSA9PT0gQVRUUklCVVRFKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBvbGQgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2Lm5leHQgPSBub2RlLm5leHQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc2V0KGV2ZW50TmFtZSwgbm9kZS5uZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXYgPSBub2RlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBuZXcgdmFsdWUuXG4gICAgICAgICAgICBpZiAobGlzdGVuZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdOb2RlID0ge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJUeXBlOiBBVFRSSUJVVEUsXG4gICAgICAgICAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvbmNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChwcmV2ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zZXQoZXZlbnROYW1lLCBuZXdOb2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmV2Lm5leHQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWZpbmUgYW4gZXZlbnQgYXR0cmlidXRlIChlLmcuIGBldmVudFRhcmdldC5vbmNsaWNrYCkuXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRUYXJnZXRQcm90b3R5cGUgVGhlIGV2ZW50IHRhcmdldCBwcm90b3R5cGUgdG8gZGVmaW5lIGFuIGV2ZW50IGF0dHJiaXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgZXZlbnQgbmFtZSB0byBkZWZpbmUuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gZGVmaW5lRXZlbnRBdHRyaWJ1dGUoZXZlbnRUYXJnZXRQcm90b3R5cGUsIGV2ZW50TmFtZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgZXZlbnRUYXJnZXRQcm90b3R5cGUsXG4gICAgICAgIGBvbiR7ZXZlbnROYW1lfWAsXG4gICAgICAgIGRlZmluZUV2ZW50QXR0cmlidXRlRGVzY3JpcHRvcihldmVudE5hbWUpXG4gICAgKTtcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBjdXN0b20gRXZlbnRUYXJnZXQgd2l0aCBldmVudCBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gZXZlbnROYW1lcyBFdmVudCBuYW1lcyBmb3IgZXZlbnQgYXR0cmlidXRlcy5cbiAqIEByZXR1cm5zIHtFdmVudFRhcmdldH0gVGhlIGN1c3RvbSBFdmVudFRhcmdldC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUV2ZW50VGFyZ2V0KGV2ZW50TmFtZXMpIHtcbiAgICAvKiogQ3VzdG9tRXZlbnRUYXJnZXQgKi9cbiAgICBmdW5jdGlvbiBDdXN0b21FdmVudFRhcmdldCgpIHtcbiAgICAgICAgRXZlbnRUYXJnZXQuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBDdXN0b21FdmVudFRhcmdldC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50VGFyZ2V0LnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgdmFsdWU6IEN1c3RvbUV2ZW50VGFyZ2V0LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZGVmaW5lRXZlbnRBdHRyaWJ1dGUoQ3VzdG9tRXZlbnRUYXJnZXQucHJvdG90eXBlLCBldmVudE5hbWVzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQ3VzdG9tRXZlbnRUYXJnZXRcbn1cblxuLyoqXG4gKiBFdmVudFRhcmdldC5cbiAqXG4gKiAtIFRoaXMgaXMgY29uc3RydWN0b3IgaWYgbm8gYXJndW1lbnRzLlxuICogLSBUaGlzIGlzIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIEN1c3RvbUV2ZW50VGFyZ2V0IGNvbnN0cnVjdG9yIGlmIHRoZXJlIGFyZSBhcmd1bWVudHMuXG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKlxuICogICAgIGNsYXNzIEEgZXh0ZW5kcyBFdmVudFRhcmdldCB7fVxuICogICAgIGNsYXNzIEIgZXh0ZW5kcyBFdmVudFRhcmdldChcIm1lc3NhZ2VcIikge31cbiAqICAgICBjbGFzcyBDIGV4dGVuZHMgRXZlbnRUYXJnZXQoXCJtZXNzYWdlXCIsIFwiZXJyb3JcIikge31cbiAqICAgICBjbGFzcyBEIGV4dGVuZHMgRXZlbnRUYXJnZXQoW1wibWVzc2FnZVwiLCBcImVycm9yXCJdKSB7fVxuICovXG5mdW5jdGlvbiBFdmVudFRhcmdldCgpIHtcbiAgICAvKmVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBFdmVudFRhcmdldCkge1xuICAgICAgICBsaXN0ZW5lcnNNYXAuc2V0KHRoaXMsIG5ldyBNYXAoKSk7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZUN1c3RvbUV2ZW50VGFyZ2V0KGFyZ3VtZW50c1swXSlcbiAgICB9XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdHlwZXNbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmluZUN1c3RvbUV2ZW50VGFyZ2V0KHR5cGVzKVxuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpXG4gICAgLyplc2xpbnQtZW5hYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG59XG5cbi8vIFNob3VsZCBiZSBlbnVtZXJhYmxlLCBidXQgY2xhc3MgbWV0aG9kcyBhcmUgbm90IGVudW1lcmFibGUuXG5FdmVudFRhcmdldC5wcm90b3R5cGUgPSB7XG4gICAgLyoqXG4gICAgICogQWRkIGEgZ2l2ZW4gbGlzdGVuZXIgdG8gdGhpcyBldmVudCB0YXJnZXQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgZXZlbnQgbmFtZSB0byBhZGQuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHRvIGFkZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW58e2NhcHR1cmU/OmJvb2xlYW4scGFzc2l2ZT86Ym9vbGVhbixvbmNlPzpib29sZWFufX0gW29wdGlvbnNdIFRoZSBvcHRpb25zIGZvciB0aGlzIGxpc3RlbmVyLlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiICYmICFpc09iamVjdChsaXN0ZW5lcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCInbGlzdGVuZXInIHNob3VsZCBiZSBhIGZ1bmN0aW9uIG9yIGFuIG9iamVjdC5cIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IGdldExpc3RlbmVycyh0aGlzKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uc0lzT2JqID0gaXNPYmplY3Qob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IGNhcHR1cmUgPSBvcHRpb25zSXNPYmpcbiAgICAgICAgICAgID8gQm9vbGVhbihvcHRpb25zLmNhcHR1cmUpXG4gICAgICAgICAgICA6IEJvb2xlYW4ob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyVHlwZSA9IGNhcHR1cmUgPyBDQVBUVVJFIDogQlVCQkxFO1xuICAgICAgICBjb25zdCBuZXdOb2RlID0ge1xuICAgICAgICAgICAgbGlzdGVuZXIsXG4gICAgICAgICAgICBsaXN0ZW5lclR5cGUsXG4gICAgICAgICAgICBwYXNzaXZlOiBvcHRpb25zSXNPYmogJiYgQm9vbGVhbihvcHRpb25zLnBhc3NpdmUpLFxuICAgICAgICAgICAgb25jZTogb3B0aW9uc0lzT2JqICYmIEJvb2xlYW4ob3B0aW9ucy5vbmNlKSxcbiAgICAgICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2V0IGl0IGFzIHRoZSBmaXJzdCBub2RlIGlmIHRoZSBmaXJzdCBub2RlIGlzIG51bGwuXG4gICAgICAgIGxldCBub2RlID0gbGlzdGVuZXJzLmdldChldmVudE5hbWUpO1xuICAgICAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuc2V0KGV2ZW50TmFtZSwgbmV3Tm9kZSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyYXZlcnNlIHRvIHRoZSB0YWlsIHdoaWxlIGNoZWNraW5nIGR1cGxpY2F0aW9uLi5cbiAgICAgICAgbGV0IHByZXYgPSBudWxsO1xuICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbm9kZS5saXN0ZW5lciA9PT0gbGlzdGVuZXIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmxpc3RlbmVyVHlwZSA9PT0gbGlzdGVuZXJUeXBlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBTaG91bGQgaWdub3JlIGR1cGxpY2F0aW9uLlxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldiA9IG5vZGU7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGl0LlxuICAgICAgICBwcmV2Lm5leHQgPSBuZXdOb2RlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBnaXZlbiBsaXN0ZW5lciBmcm9tIHRoaXMgZXZlbnQgdGFyZ2V0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgVGhlIGV2ZW50IG5hbWUgdG8gcmVtb3ZlLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciB0byByZW1vdmUuXG4gICAgICogQHBhcmFtIHtib29sZWFufHtjYXB0dXJlPzpib29sZWFuLHBhc3NpdmU/OmJvb2xlYW4sb25jZT86Ym9vbGVhbn19IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBmb3IgdGhpcyBsaXN0ZW5lci5cbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGxpc3RlbmVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gZ2V0TGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICBjb25zdCBjYXB0dXJlID0gaXNPYmplY3Qob3B0aW9ucylcbiAgICAgICAgICAgID8gQm9vbGVhbihvcHRpb25zLmNhcHR1cmUpXG4gICAgICAgICAgICA6IEJvb2xlYW4ob3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyVHlwZSA9IGNhcHR1cmUgPyBDQVBUVVJFIDogQlVCQkxFO1xuXG4gICAgICAgIGxldCBwcmV2ID0gbnVsbDtcbiAgICAgICAgbGV0IG5vZGUgPSBsaXN0ZW5lcnMuZ2V0KGV2ZW50TmFtZSk7XG4gICAgICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBub2RlLmxpc3RlbmVyID09PSBsaXN0ZW5lciAmJlxuICAgICAgICAgICAgICAgIG5vZGUubGlzdGVuZXJUeXBlID09PSBsaXN0ZW5lclR5cGVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXYubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc2V0KGV2ZW50TmFtZSwgbm9kZS5uZXh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2ID0gbm9kZTtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYSBnaXZlbiBldmVudC5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fHt0eXBlOnN0cmluZ319IGV2ZW50IFRoZSBldmVudCB0byBkaXNwYXRjaC5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYGZhbHNlYCBpZiBjYW5jZWxlZC5cbiAgICAgKi9cbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCA9PSBudWxsIHx8IHR5cGVvZiBldmVudC50eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImV2ZW50LnR5cGVcIiBzaG91bGQgYmUgYSBzdHJpbmcuJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGxpc3RlbmVycyBhcmVuJ3QgcmVnaXN0ZXJlZCwgdGVybWluYXRlLlxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBnZXRMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50LnR5cGU7XG4gICAgICAgIGxldCBub2RlID0gbGlzdGVuZXJzLmdldChldmVudE5hbWUpO1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2luY2Ugd2UgY2Fubm90IHJld3JpdGUgc2V2ZXJhbCBwcm9wZXJ0aWVzLCBzbyB3cmFwIG9iamVjdC5cbiAgICAgICAgY29uc3Qgd3JhcHBlZEV2ZW50ID0gd3JhcEV2ZW50KHRoaXMsIGV2ZW50KTtcblxuICAgICAgICAvLyBUaGlzIGRvZXNuJ3QgcHJvY2VzcyBjYXB0dXJpbmcgcGhhc2UgYW5kIGJ1YmJsaW5nIHBoYXNlLlxuICAgICAgICAvLyBUaGlzIGlzbid0IHBhcnRpY2lwYXRpbmcgaW4gYSB0cmVlLlxuICAgICAgICBsZXQgcHJldiA9IG51bGw7XG4gICAgICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGlzIGxpc3RlbmVyIGlmIGl0J3Mgb25jZVxuICAgICAgICAgICAgaWYgKG5vZGUub25jZSkge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXYubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc2V0KGV2ZW50TmFtZSwgbm9kZS5uZXh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmV2ID0gbm9kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FsbCB0aGlzIGxpc3RlbmVyXG4gICAgICAgICAgICBzZXRQYXNzaXZlTGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgd3JhcHBlZEV2ZW50LFxuICAgICAgICAgICAgICAgIG5vZGUucGFzc2l2ZSA/IG5vZGUubGlzdGVuZXIgOiBudWxsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlLmxpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxpc3RlbmVyLmNhbGwodGhpcywgd3JhcHBlZEV2ZW50KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIG5vZGUubGlzdGVuZXJUeXBlICE9PSBBVFRSSUJVVEUgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2Ygbm9kZS5saXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBub2RlLmxpc3RlbmVyLmhhbmRsZUV2ZW50KHdyYXBwZWRFdmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJyZWFrIGlmIGBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb25gIHdhcyBjYWxsZWQuXG4gICAgICAgICAgICBpZiAoaXNTdG9wcGVkKHdyYXBwZWRFdmVudCkpIHtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHNldFBhc3NpdmVMaXN0ZW5lcih3cmFwcGVkRXZlbnQsIG51bGwpO1xuICAgICAgICBzZXRFdmVudFBoYXNlKHdyYXBwZWRFdmVudCwgMCk7XG4gICAgICAgIHNldEN1cnJlbnRUYXJnZXQod3JhcHBlZEV2ZW50LCBudWxsKTtcblxuICAgICAgICByZXR1cm4gIXdyYXBwZWRFdmVudC5kZWZhdWx0UHJldmVudGVkXG4gICAgfSxcbn07XG5cbi8vIGBjb25zdHJ1Y3RvcmAgaXMgbm90IGVudW1lcmFibGUuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRUYXJnZXQucHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogRXZlbnRUYXJnZXQsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxufSk7XG5cbi8vIEVuc3VyZSBgZXZlbnRUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuRXZlbnRUYXJnZXRgIGlzIGB0cnVlYC5cbmlmIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgdHlwZW9mIHdpbmRvdy5FdmVudFRhcmdldCAhPT0gXCJ1bmRlZmluZWRcIlxuKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKEV2ZW50VGFyZ2V0LnByb3RvdHlwZSwgd2luZG93LkV2ZW50VGFyZ2V0LnByb3RvdHlwZSk7XG59XG5cbmV4cG9ydHMuZGVmaW5lRXZlbnRBdHRyaWJ1dGUgPSBkZWZpbmVFdmVudEF0dHJpYnV0ZTtcbmV4cG9ydHMuRXZlbnRUYXJnZXQgPSBFdmVudFRhcmdldDtcbmV4cG9ydHMuZGVmYXVsdCA9IEV2ZW50VGFyZ2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50VGFyZ2V0XG5tb2R1bGUuZXhwb3J0cy5FdmVudFRhcmdldCA9IG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV2ZW50VGFyZ2V0XG5tb2R1bGUuZXhwb3J0cy5kZWZpbmVFdmVudEF0dHJpYnV0ZSA9IGRlZmluZUV2ZW50QXR0cmlidXRlXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudC10YXJnZXQtc2hpbS5qcy5tYXBcbiIsImNvbnN0IHtSZWFkYWJsZX0gPSByZXF1aXJlKCdzdHJlYW0nKTtcblxuLyoqXG4gKiBAdHlwZSB7V2Vha01hcDxCbG9iLCB7dHlwZTogc3RyaW5nLCBzaXplOiBudW1iZXIsIHBhcnRzOiAoQmxvYiB8IEJ1ZmZlcilbXSB9Pn1cbiAqL1xuY29uc3Qgd20gPSBuZXcgV2Vha01hcCgpO1xuXG5hc3luYyBmdW5jdGlvbiAqIHJlYWQocGFydHMpIHtcblx0Zm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSB7XG5cdFx0aWYgKCdzdHJlYW0nIGluIHBhcnQpIHtcblx0XHRcdHlpZWxkICogcGFydC5zdHJlYW0oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0eWllbGQgcGFydDtcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgQmxvYiB7XG5cdC8qKlxuXHQgKiBUaGUgQmxvYigpIGNvbnN0cnVjdG9yIHJldHVybnMgYSBuZXcgQmxvYiBvYmplY3QuIFRoZSBjb250ZW50XG5cdCAqIG9mIHRoZSBibG9iIGNvbnNpc3RzIG9mIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSB2YWx1ZXMgZ2l2ZW5cblx0ICogaW4gdGhlIHBhcmFtZXRlciBhcnJheS5cblx0ICpcblx0ICogQHBhcmFtIHsoQXJyYXlCdWZmZXJMaWtlIHwgQXJyYXlCdWZmZXJWaWV3IHwgQmxvYiB8IEJ1ZmZlciB8IHN0cmluZylbXX0gYmxvYlBhcnRzXG5cdCAqIEBwYXJhbSB7eyB0eXBlPzogc3RyaW5nIH19IFtvcHRpb25zXVxuXHQgKi9cblx0Y29uc3RydWN0b3IoYmxvYlBhcnRzID0gW10sIG9wdGlvbnMgPSB7dHlwZTogJyd9KSB7XG5cdFx0bGV0IHNpemUgPSAwO1xuXG5cdFx0Y29uc3QgcGFydHMgPSBibG9iUGFydHMubWFwKGVsZW1lbnQgPT4ge1xuXHRcdFx0bGV0IGJ1ZmZlcjtcblx0XHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgQnVmZmVyKSB7XG5cdFx0XHRcdGJ1ZmZlciA9IGVsZW1lbnQ7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhlbGVtZW50KSkge1xuXHRcdFx0XHRidWZmZXIgPSBCdWZmZXIuZnJvbShlbGVtZW50LmJ1ZmZlciwgZWxlbWVudC5ieXRlT2Zmc2V0LCBlbGVtZW50LmJ5dGVMZW5ndGgpO1xuXHRcdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcblx0XHRcdFx0YnVmZmVyID0gQnVmZmVyLmZyb20oZWxlbWVudCk7XG5cdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBCbG9iKSB7XG5cdFx0XHRcdGJ1ZmZlciA9IGVsZW1lbnQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRidWZmZXIgPSBCdWZmZXIuZnJvbSh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBlbGVtZW50IDogU3RyaW5nKGVsZW1lbnQpKTtcblx0XHRcdH1cblxuXHRcdFx0c2l6ZSArPSBidWZmZXIubGVuZ3RoIHx8IGJ1ZmZlci5zaXplIHx8IDA7XG5cdFx0XHRyZXR1cm4gYnVmZmVyO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZSA9PT0gdW5kZWZpbmVkID8gJycgOiBTdHJpbmcob3B0aW9ucy50eXBlKS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0d20uc2V0KHRoaXMsIHtcblx0XHRcdHR5cGU6IC9bXlxcdTAwMjAtXFx1MDA3RV0vLnRlc3QodHlwZSkgPyAnJyA6IHR5cGUsXG5cdFx0XHRzaXplLFxuXHRcdFx0cGFydHNcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgQmxvYiBpbnRlcmZhY2UncyBzaXplIHByb3BlcnR5IHJldHVybnMgdGhlXG5cdCAqIHNpemUgb2YgdGhlIEJsb2IgaW4gYnl0ZXMuXG5cdCAqL1xuXHRnZXQgc2l6ZSgpIHtcblx0XHRyZXR1cm4gd20uZ2V0KHRoaXMpLnNpemU7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHR5cGUgcHJvcGVydHkgb2YgYSBCbG9iIG9iamVjdCByZXR1cm5zIHRoZSBNSU1FIHR5cGUgb2YgdGhlIGZpbGUuXG5cdCAqL1xuXHRnZXQgdHlwZSgpIHtcblx0XHRyZXR1cm4gd20uZ2V0KHRoaXMpLnR5cGU7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHRleHQoKSBtZXRob2QgaW4gdGhlIEJsb2IgaW50ZXJmYWNlIHJldHVybnMgYSBQcm9taXNlXG5cdCAqIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHN0cmluZyBjb250YWluaW5nIHRoZSBjb250ZW50cyBvZlxuXHQgKiB0aGUgYmxvYiwgaW50ZXJwcmV0ZWQgYXMgVVRGLTguXG5cdCAqXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdGFzeW5jIHRleHQoKSB7XG5cdFx0cmV0dXJuIEJ1ZmZlci5mcm9tKGF3YWl0IHRoaXMuYXJyYXlCdWZmZXIoKSkudG9TdHJpbmcoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgYXJyYXlCdWZmZXIoKSBtZXRob2QgaW4gdGhlIEJsb2IgaW50ZXJmYWNlIHJldHVybnMgYVxuXHQgKiBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGJsb2IgYXNcblx0ICogYmluYXJ5IGRhdGEgY29udGFpbmVkIGluIGFuIEFycmF5QnVmZmVyLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyPn1cblx0ICovXG5cdGFzeW5jIGFycmF5QnVmZmVyKCkge1xuXHRcdGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLnNpemUpO1xuXHRcdGxldCBvZmZzZXQgPSAwO1xuXHRcdGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgdGhpcy5zdHJlYW0oKSkge1xuXHRcdFx0ZGF0YS5zZXQoY2h1bmssIG9mZnNldCk7XG5cdFx0XHRvZmZzZXQgKz0gY2h1bmsubGVuZ3RoO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhLmJ1ZmZlcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgQmxvYiBpbnRlcmZhY2UncyBzdHJlYW0oKSBtZXRob2QgaXMgZGlmZmVyZW5jZSBmcm9tIG5hdGl2ZVxuXHQgKiBhbmQgdXNlcyBub2RlIHN0cmVhbXMgaW5zdGVhZCBvZiB3aGF0d2cgc3RyZWFtcy5cblx0ICpcblx0ICogQHJldHVybnMge1JlYWRhYmxlfSBOb2RlIHJlYWRhYmxlIHN0cmVhbVxuXHQgKi9cblx0c3RyZWFtKCkge1xuXHRcdHJldHVybiBSZWFkYWJsZS5mcm9tKHJlYWQod20uZ2V0KHRoaXMpLnBhcnRzKSk7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIEJsb2IgaW50ZXJmYWNlJ3Mgc2xpY2UoKSBtZXRob2QgY3JlYXRlcyBhbmQgcmV0dXJucyBhXG5cdCAqIG5ldyBCbG9iIG9iamVjdCB3aGljaCBjb250YWlucyBkYXRhIGZyb20gYSBzdWJzZXQgb2YgdGhlXG5cdCAqIGJsb2Igb24gd2hpY2ggaXQncyBjYWxsZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRdXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kXVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdXG5cdCAqL1xuXHRzbGljZShzdGFydCA9IDAsIGVuZCA9IHRoaXMuc2l6ZSwgdHlwZSA9ICcnKSB7XG5cdFx0Y29uc3Qge3NpemV9ID0gdGhpcztcblxuXHRcdGxldCByZWxhdGl2ZVN0YXJ0ID0gc3RhcnQgPCAwID8gTWF0aC5tYXgoc2l6ZSArIHN0YXJ0LCAwKSA6IE1hdGgubWluKHN0YXJ0LCBzaXplKTtcblx0XHRsZXQgcmVsYXRpdmVFbmQgPSBlbmQgPCAwID8gTWF0aC5tYXgoc2l6ZSArIGVuZCwgMCkgOiBNYXRoLm1pbihlbmQsIHNpemUpO1xuXG5cdFx0Y29uc3Qgc3BhbiA9IE1hdGgubWF4KHJlbGF0aXZlRW5kIC0gcmVsYXRpdmVTdGFydCwgMCk7XG5cdFx0Y29uc3QgcGFydHMgPSB3bS5nZXQodGhpcykucGFydHMudmFsdWVzKCk7XG5cdFx0Y29uc3QgYmxvYlBhcnRzID0gW107XG5cdFx0bGV0IGFkZGVkID0gMDtcblxuXHRcdGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykge1xuXHRcdFx0Y29uc3Qgc2l6ZSA9IEFycmF5QnVmZmVyLmlzVmlldyhwYXJ0KSA/IHBhcnQuYnl0ZUxlbmd0aCA6IHBhcnQuc2l6ZTtcblx0XHRcdGlmIChyZWxhdGl2ZVN0YXJ0ICYmIHNpemUgPD0gcmVsYXRpdmVTdGFydCkge1xuXHRcdFx0XHQvLyBTa2lwIHRoZSBiZWdpbm5pbmcgYW5kIGNoYW5nZSB0aGUgcmVsYXRpdmVcblx0XHRcdFx0Ly8gc3RhcnQgJiBlbmQgcG9zaXRpb24gYXMgd2Ugc2tpcCB0aGUgdW53YW50ZWQgcGFydHNcblx0XHRcdFx0cmVsYXRpdmVTdGFydCAtPSBzaXplO1xuXHRcdFx0XHRyZWxhdGl2ZUVuZCAtPSBzaXplO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgY2h1bmsgPSBwYXJ0LnNsaWNlKHJlbGF0aXZlU3RhcnQsIE1hdGgubWluKHNpemUsIHJlbGF0aXZlRW5kKSk7XG5cdFx0XHRcdGJsb2JQYXJ0cy5wdXNoKGNodW5rKTtcblx0XHRcdFx0YWRkZWQgKz0gQXJyYXlCdWZmZXIuaXNWaWV3KGNodW5rKSA/IGNodW5rLmJ5dGVMZW5ndGggOiBjaHVuay5zaXplO1xuXHRcdFx0XHRyZWxhdGl2ZVN0YXJ0ID0gMDsgLy8gQWxsIG5leHQgc2VxdWVudGFsIHBhcnRzIHNob3VsZCBzdGFydCBhdCAwXG5cblx0XHRcdFx0Ly8gZG9uJ3QgYWRkIHRoZSBvdmVyZmxvdyB0byBuZXcgYmxvYlBhcnRzXG5cdFx0XHRcdGlmIChhZGRlZCA+PSBzcGFuKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBibG9iID0gbmV3IEJsb2IoW10sIHt0eXBlfSk7XG5cdFx0T2JqZWN0LmFzc2lnbih3bS5nZXQoYmxvYiksIHtzaXplOiBzcGFuLCBwYXJ0czogYmxvYlBhcnRzfSk7XG5cblx0XHRyZXR1cm4gYmxvYjtcblx0fVxuXG5cdGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcblx0XHRyZXR1cm4gJ0Jsb2InO1xuXHR9XG5cblx0c3RhdGljIFtTeW1ib2wuaGFzSW5zdGFuY2VdKG9iamVjdCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHR0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIG9iamVjdC5zdHJlYW0gPT09ICdmdW5jdGlvbicgJiZcblx0XHRcdG9iamVjdC5zdHJlYW0ubGVuZ3RoID09PSAwICYmXG5cdFx0XHR0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmXG5cdFx0XHQvXihCbG9ifEZpbGUpJC8udGVzdChvYmplY3RbU3ltYm9sLnRvU3RyaW5nVGFnXSlcblx0XHQpO1xuXHR9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEJsb2IucHJvdG90eXBlLCB7XG5cdHNpemU6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0dHlwZToge2VudW1lcmFibGU6IHRydWV9LFxuXHRzbGljZToge2VudW1lcmFibGU6IHRydWV9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCbG9iO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5jb25zdCBBYm9ydENvbnRyb2xsZXIgPSByZXF1aXJlKCdhYm9ydC1jb250cm9sbGVyJyk7XG5cbmNvbnN0IFRFTl9NRUdBQllURVMgPSAxMDAwICogMTAwMCAqIDEwO1xuXG5pZiAoIWdsb2JhbC5mZXRjaCkge1xuXHRnbG9iYWwuZmV0Y2ggPSAodXJsLCBvcHRpb25zKSA9PiBmZXRjaCh1cmwsIHtoaWdoV2F0ZXJNYXJrOiBURU5fTUVHQUJZVEVTLCAuLi5vcHRpb25zfSk7XG59XG5cbmlmICghZ2xvYmFsLkhlYWRlcnMpIHtcblx0Z2xvYmFsLkhlYWRlcnMgPSBmZXRjaC5IZWFkZXJzO1xufVxuXG5pZiAoIWdsb2JhbC5SZXF1ZXN0KSB7XG5cdGdsb2JhbC5SZXF1ZXN0ID0gZmV0Y2guUmVxdWVzdDtcbn1cblxuaWYgKCFnbG9iYWwuUmVzcG9uc2UpIHtcblx0Z2xvYmFsLlJlc3BvbnNlID0gZmV0Y2guUmVzcG9uc2U7XG59XG5cbmlmICghZ2xvYmFsLkFib3J0Q29udHJvbGxlcikge1xuXHRnbG9iYWwuQWJvcnRDb250cm9sbGVyID0gQWJvcnRDb250cm9sbGVyO1xufVxuXG5pZiAoIWdsb2JhbC5SZWFkYWJsZVN0cmVhbSkge1xuXHR0cnkge1xuXHRcdGdsb2JhbC5SZWFkYWJsZVN0cmVhbSA9IHJlcXVpcmUoJ3dlYi1zdHJlYW1zLXBvbHlmaWxsL3BvbnlmaWxsL2VzMjAxOCcpO1xuXHR9IGNhdGNoIChfKSB7fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2t5L3VtZCcpO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwua3kgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cblx0LyohIE1JVCBMaWNlbnNlIMKpIFNpbmRyZSBTb3JodXMgKi9cblxuXHRjb25zdCBnbG9iYWxzID0ge307XG5cblx0Y29uc3QgZ2V0R2xvYmFsID0gcHJvcGVydHkgPT4ge1xuXHRcdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdFx0aWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmICYmIHByb3BlcnR5IGluIHNlbGYpIHtcblx0XHRcdHJldHVybiBzZWxmO1xuXHRcdH1cblxuXHRcdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyAmJiBwcm9wZXJ0eSBpbiB3aW5kb3cpIHtcblx0XHRcdHJldHVybiB3aW5kb3c7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbCAmJiBwcm9wZXJ0eSBpbiBnbG9iYWwpIHtcblx0XHRcdHJldHVybiBnbG9iYWw7XG5cdFx0fVxuXG5cdFx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0XHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbFRoaXMpIHtcblx0XHRcdHJldHVybiBnbG9iYWxUaGlzO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBnbG9iYWxQcm9wZXJ0aWVzID0gW1xuXHRcdCdIZWFkZXJzJyxcblx0XHQnUmVxdWVzdCcsXG5cdFx0J1Jlc3BvbnNlJyxcblx0XHQnUmVhZGFibGVTdHJlYW0nLFxuXHRcdCdmZXRjaCcsXG5cdFx0J0Fib3J0Q29udHJvbGxlcicsXG5cdFx0J0Zvcm1EYXRhJ1xuXHRdO1xuXG5cdGZvciAoY29uc3QgcHJvcGVydHkgb2YgZ2xvYmFsUHJvcGVydGllcykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWxzLCBwcm9wZXJ0eSwge1xuXHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRjb25zdCBnbG9iYWxPYmplY3QgPSBnZXRHbG9iYWwocHJvcGVydHkpO1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGdsb2JhbE9iamVjdCAmJiBnbG9iYWxPYmplY3RbcHJvcGVydHldO1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUuYmluZChnbG9iYWxPYmplY3QpIDogdmFsdWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBpc09iamVjdCA9IHZhbHVlID0+IHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG5cdGNvbnN0IHN1cHBvcnRzQWJvcnRDb250cm9sbGVyID0gdHlwZW9mIGdsb2JhbHMuQWJvcnRDb250cm9sbGVyID09PSAnZnVuY3Rpb24nO1xuXHRjb25zdCBzdXBwb3J0c1N0cmVhbXMgPSB0eXBlb2YgZ2xvYmFscy5SZWFkYWJsZVN0cmVhbSA9PT0gJ2Z1bmN0aW9uJztcblx0Y29uc3Qgc3VwcG9ydHNGb3JtRGF0YSA9IHR5cGVvZiBnbG9iYWxzLkZvcm1EYXRhID09PSAnZnVuY3Rpb24nO1xuXG5cdGNvbnN0IG1lcmdlSGVhZGVycyA9IChzb3VyY2UxLCBzb3VyY2UyKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IGdsb2JhbHMuSGVhZGVycyhzb3VyY2UxIHx8IHt9KTtcblx0XHRjb25zdCBpc0hlYWRlcnNJbnN0YW5jZSA9IHNvdXJjZTIgaW5zdGFuY2VvZiBnbG9iYWxzLkhlYWRlcnM7XG5cdFx0Y29uc3Qgc291cmNlID0gbmV3IGdsb2JhbHMuSGVhZGVycyhzb3VyY2UyIHx8IHt9KTtcblxuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHNvdXJjZSkge1xuXHRcdFx0aWYgKChpc0hlYWRlcnNJbnN0YW5jZSAmJiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmVzdWx0LmRlbGV0ZShrZXkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnNldChrZXksIHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdGNvbnN0IGRlZXBNZXJnZSA9ICguLi5zb3VyY2VzKSA9PiB7XG5cdFx0bGV0IHJldHVyblZhbHVlID0ge307XG5cdFx0bGV0IGhlYWRlcnMgPSB7fTtcblxuXHRcdGZvciAoY29uc3Qgc291cmNlIG9mIHNvdXJjZXMpIHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcblx0XHRcdFx0aWYgKCEoQXJyYXkuaXNBcnJheShyZXR1cm5WYWx1ZSkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuVmFsdWUgPSBbXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVyblZhbHVlID0gWy4uLnJldHVyblZhbHVlLCAuLi5zb3VyY2VdO1xuXHRcdFx0fSBlbHNlIGlmIChpc09iamVjdChzb3VyY2UpKSB7XG5cdFx0XHRcdGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzb3VyY2UpKSB7XG5cdFx0XHRcdFx0aWYgKGlzT2JqZWN0KHZhbHVlKSAmJiAoa2V5IGluIHJldHVyblZhbHVlKSkge1xuXHRcdFx0XHRcdFx0dmFsdWUgPSBkZWVwTWVyZ2UocmV0dXJuVmFsdWVba2V5XSwgdmFsdWUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVyblZhbHVlID0gey4uLnJldHVyblZhbHVlLCBba2V5XTogdmFsdWV9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzT2JqZWN0KHNvdXJjZS5oZWFkZXJzKSkge1xuXHRcdFx0XHRcdGhlYWRlcnMgPSBtZXJnZUhlYWRlcnMoaGVhZGVycywgc291cmNlLmhlYWRlcnMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVyblZhbHVlLmhlYWRlcnMgPSBoZWFkZXJzO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXR1cm5WYWx1ZTtcblx0fTtcblxuXHRjb25zdCByZXF1ZXN0TWV0aG9kcyA9IFtcblx0XHQnZ2V0Jyxcblx0XHQncG9zdCcsXG5cdFx0J3B1dCcsXG5cdFx0J3BhdGNoJyxcblx0XHQnaGVhZCcsXG5cdFx0J2RlbGV0ZSdcblx0XTtcblxuXHRjb25zdCByZXNwb25zZVR5cGVzID0ge1xuXHRcdGpzb246ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHR0ZXh0OiAndGV4dC8qJyxcblx0XHRmb3JtRGF0YTogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuXHRcdGFycmF5QnVmZmVyOiAnKi8qJyxcblx0XHRibG9iOiAnKi8qJ1xuXHR9O1xuXG5cdGNvbnN0IHJldHJ5TWV0aG9kcyA9IFtcblx0XHQnZ2V0Jyxcblx0XHQncHV0Jyxcblx0XHQnaGVhZCcsXG5cdFx0J2RlbGV0ZScsXG5cdFx0J29wdGlvbnMnLFxuXHRcdCd0cmFjZSdcblx0XTtcblxuXHRjb25zdCByZXRyeVN0YXR1c0NvZGVzID0gW1xuXHRcdDQwOCxcblx0XHQ0MTMsXG5cdFx0NDI5LFxuXHRcdDUwMCxcblx0XHQ1MDIsXG5cdFx0NTAzLFxuXHRcdDUwNFxuXHRdO1xuXG5cdGNvbnN0IHJldHJ5QWZ0ZXJTdGF0dXNDb2RlcyA9IFtcblx0XHQ0MTMsXG5cdFx0NDI5LFxuXHRcdDUwM1xuXHRdO1xuXG5cdGNvbnN0IHN0b3AgPSBTeW1ib2woJ3N0b3AnKTtcblxuXHRjbGFzcyBIVFRQRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdFx0Y29uc3RydWN0b3IocmVzcG9uc2UpIHtcblx0XHRcdC8vIFNldCB0aGUgbWVzc2FnZSB0byB0aGUgc3RhdHVzIHRleHQsIHN1Y2ggYXMgVW5hdXRob3JpemVkLFxuXHRcdFx0Ly8gd2l0aCBzb21lIGZhbGxiYWNrcy4gVGhpcyBtZXNzYWdlIHNob3VsZCBuZXZlciBiZSB1bmRlZmluZWQuXG5cdFx0XHRzdXBlcihcblx0XHRcdFx0cmVzcG9uc2Uuc3RhdHVzVGV4dCB8fFxuXHRcdFx0XHRTdHJpbmcoXG5cdFx0XHRcdFx0KHJlc3BvbnNlLnN0YXR1cyA9PT0gMCB8fCByZXNwb25zZS5zdGF0dXMpID9cblx0XHRcdFx0XHRcdHJlc3BvbnNlLnN0YXR1cyA6ICdVbmtub3duIHJlc3BvbnNlIGVycm9yJ1xuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5uYW1lID0gJ0hUVFBFcnJvcic7XG5cdFx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cdFx0fVxuXHR9XG5cblx0Y2xhc3MgVGltZW91dEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRcdGNvbnN0cnVjdG9yKHJlcXVlc3QpIHtcblx0XHRcdHN1cGVyKCdSZXF1ZXN0IHRpbWVkIG91dCcpO1xuXHRcdFx0dGhpcy5uYW1lID0gJ1RpbWVvdXRFcnJvcic7XG5cdFx0XHR0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGRlbGF5ID0gbXMgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG5cblx0Ly8gYFByb21pc2UucmFjZSgpYCB3b3JrYXJvdW5kICgjOTEpXG5cdGNvbnN0IHRpbWVvdXQgPSAocmVxdWVzdCwgYWJvcnRDb250cm9sbGVyLCBvcHRpb25zKSA9PlxuXHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGNvbnN0IHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRpZiAoYWJvcnRDb250cm9sbGVyKSB7XG5cdFx0XHRcdFx0YWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZWplY3QobmV3IFRpbWVvdXRFcnJvcihyZXF1ZXN0KSk7XG5cdFx0XHR9LCBvcHRpb25zLnRpbWVvdXQpO1xuXG5cdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBwcm9taXNlL3ByZWZlci1hd2FpdC10by10aGVuICovXG5cdFx0XHRvcHRpb25zLmZldGNoKHJlcXVlc3QpXG5cdFx0XHRcdC50aGVuKHJlc29sdmUpXG5cdFx0XHRcdC5jYXRjaChyZWplY3QpXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dElEKTtcblx0XHRcdFx0fSk7XG5cdFx0XHQvKiBlc2xpbnQtZW5hYmxlIHByb21pc2UvcHJlZmVyLWF3YWl0LXRvLXRoZW4gKi9cblx0XHR9KTtcblxuXHRjb25zdCBub3JtYWxpemVSZXF1ZXN0TWV0aG9kID0gaW5wdXQgPT4gcmVxdWVzdE1ldGhvZHMuaW5jbHVkZXMoaW5wdXQpID8gaW5wdXQudG9VcHBlckNhc2UoKSA6IGlucHV0O1xuXG5cdGNvbnN0IGRlZmF1bHRSZXRyeU9wdGlvbnMgPSB7XG5cdFx0bGltaXQ6IDIsXG5cdFx0bWV0aG9kczogcmV0cnlNZXRob2RzLFxuXHRcdHN0YXR1c0NvZGVzOiByZXRyeVN0YXR1c0NvZGVzLFxuXHRcdGFmdGVyU3RhdHVzQ29kZXM6IHJldHJ5QWZ0ZXJTdGF0dXNDb2Rlc1xuXHR9O1xuXG5cdGNvbnN0IG5vcm1hbGl6ZVJldHJ5T3B0aW9ucyA9IChyZXRyeSA9IHt9KSA9PiB7XG5cdFx0aWYgKHR5cGVvZiByZXRyeSA9PT0gJ251bWJlcicpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLmRlZmF1bHRSZXRyeU9wdGlvbnMsXG5cdFx0XHRcdGxpbWl0OiByZXRyeVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAocmV0cnkubWV0aG9kcyAmJiAhQXJyYXkuaXNBcnJheShyZXRyeS5tZXRob2RzKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdyZXRyeS5tZXRob2RzIG11c3QgYmUgYW4gYXJyYXknKTtcblx0XHR9XG5cblx0XHRpZiAocmV0cnkuc3RhdHVzQ29kZXMgJiYgIUFycmF5LmlzQXJyYXkocmV0cnkuc3RhdHVzQ29kZXMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3JldHJ5LnN0YXR1c0NvZGVzIG11c3QgYmUgYW4gYXJyYXknKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uZGVmYXVsdFJldHJ5T3B0aW9ucyxcblx0XHRcdC4uLnJldHJ5LFxuXHRcdFx0YWZ0ZXJTdGF0dXNDb2RlczogcmV0cnlBZnRlclN0YXR1c0NvZGVzXG5cdFx0fTtcblx0fTtcblxuXHQvLyBUaGUgbWF4aW11bSB2YWx1ZSBvZiBhIDMyYml0IGludCAoc2VlIGlzc3VlICMxMTcpXG5cdGNvbnN0IG1heFNhZmVUaW1lb3V0ID0gMjE0NzQ4MzY0NztcblxuXHRjbGFzcyBLeSB7XG5cdFx0Y29uc3RydWN0b3IoaW5wdXQsIG9wdGlvbnMgPSB7fSkge1xuXHRcdFx0dGhpcy5fcmV0cnlDb3VudCA9IDA7XG5cdFx0XHR0aGlzLl9pbnB1dCA9IGlucHV0O1xuXHRcdFx0dGhpcy5fb3B0aW9ucyA9IHtcblx0XHRcdFx0Ly8gVE9ETzogY3JlZGVudGlhbHMgY2FuIGJlIHJlbW92ZWQgd2hlbiB0aGUgc3BlYyBjaGFuZ2UgaXMgaW1wbGVtZW50ZWQgaW4gYWxsIGJyb3dzZXJzLiBDb250ZXh0OiBodHRwczovL3d3dy5jaHJvbWVzdGF0dXMuY29tL2ZlYXR1cmUvNDUzOTQ3MzMxMjM1MDIwOFxuXHRcdFx0XHRjcmVkZW50aWFsczogdGhpcy5faW5wdXQuY3JlZGVudGlhbHMgfHwgJ3NhbWUtb3JpZ2luJyxcblx0XHRcdFx0Li4ub3B0aW9ucyxcblx0XHRcdFx0aGVhZGVyczogbWVyZ2VIZWFkZXJzKHRoaXMuX2lucHV0LmhlYWRlcnMsIG9wdGlvbnMuaGVhZGVycyksXG5cdFx0XHRcdGhvb2tzOiBkZWVwTWVyZ2Uoe1xuXHRcdFx0XHRcdGJlZm9yZVJlcXVlc3Q6IFtdLFxuXHRcdFx0XHRcdGJlZm9yZVJldHJ5OiBbXSxcblx0XHRcdFx0XHRhZnRlclJlc3BvbnNlOiBbXVxuXHRcdFx0XHR9LCBvcHRpb25zLmhvb2tzKSxcblx0XHRcdFx0bWV0aG9kOiBub3JtYWxpemVSZXF1ZXN0TWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMuX2lucHV0Lm1ldGhvZCksXG5cdFx0XHRcdHByZWZpeFVybDogU3RyaW5nKG9wdGlvbnMucHJlZml4VXJsIHx8ICcnKSxcblx0XHRcdFx0cmV0cnk6IG5vcm1hbGl6ZVJldHJ5T3B0aW9ucyhvcHRpb25zLnJldHJ5KSxcblx0XHRcdFx0dGhyb3dIdHRwRXJyb3JzOiBvcHRpb25zLnRocm93SHR0cEVycm9ycyAhPT0gZmFsc2UsXG5cdFx0XHRcdHRpbWVvdXQ6IHR5cGVvZiBvcHRpb25zLnRpbWVvdXQgPT09ICd1bmRlZmluZWQnID8gMTAwMDAgOiBvcHRpb25zLnRpbWVvdXQsXG5cdFx0XHRcdGZldGNoOiBvcHRpb25zLmZldGNoIHx8IGdsb2JhbHMuZmV0Y2hcblx0XHRcdH07XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5faW5wdXQgIT09ICdzdHJpbmcnICYmICEodGhpcy5faW5wdXQgaW5zdGFuY2VvZiBVUkwgfHwgdGhpcy5faW5wdXQgaW5zdGFuY2VvZiBnbG9iYWxzLlJlcXVlc3QpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2BpbnB1dGAgbXVzdCBiZSBhIHN0cmluZywgVVJMLCBvciBSZXF1ZXN0Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9vcHRpb25zLnByZWZpeFVybCAmJiB0eXBlb2YgdGhpcy5faW5wdXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9pbnB1dC5zdGFydHNXaXRoKCcvJykpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2BpbnB1dGAgbXVzdCBub3QgYmVnaW4gd2l0aCBhIHNsYXNoIHdoZW4gdXNpbmcgYHByZWZpeFVybGAnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghdGhpcy5fb3B0aW9ucy5wcmVmaXhVcmwuZW5kc1dpdGgoJy8nKSkge1xuXHRcdFx0XHRcdHRoaXMuX29wdGlvbnMucHJlZml4VXJsICs9ICcvJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2lucHV0ID0gdGhpcy5fb3B0aW9ucy5wcmVmaXhVcmwgKyB0aGlzLl9pbnB1dDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHN1cHBvcnRzQWJvcnRDb250cm9sbGVyKSB7XG5cdFx0XHRcdHRoaXMuYWJvcnRDb250cm9sbGVyID0gbmV3IGdsb2JhbHMuQWJvcnRDb250cm9sbGVyKCk7XG5cdFx0XHRcdGlmICh0aGlzLl9vcHRpb25zLnNpZ25hbCkge1xuXHRcdFx0XHRcdHRoaXMuX29wdGlvbnMuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5hYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX29wdGlvbnMuc2lnbmFsID0gdGhpcy5hYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnJlcXVlc3QgPSBuZXcgZ2xvYmFscy5SZXF1ZXN0KHRoaXMuX2lucHV0LCB0aGlzLl9vcHRpb25zKTtcblxuXHRcdFx0aWYgKHRoaXMuX29wdGlvbnMuc2VhcmNoUGFyYW1zKSB7XG5cdFx0XHRcdGNvbnN0IHNlYXJjaFBhcmFtcyA9ICc/JyArIG5ldyBVUkxTZWFyY2hQYXJhbXModGhpcy5fb3B0aW9ucy5zZWFyY2hQYXJhbXMpLnRvU3RyaW5nKCk7XG5cdFx0XHRcdGNvbnN0IHVybCA9IHRoaXMucmVxdWVzdC51cmwucmVwbGFjZSgvKD86XFw/Lio/KT8oPz0jfCQpLywgc2VhcmNoUGFyYW1zKTtcblxuXHRcdFx0XHQvLyBUbyBwcm92aWRlIGNvcnJlY3QgZm9ybSBib3VuZGFyeSwgQ29udGVudC1UeXBlIGhlYWRlciBzaG91bGQgYmUgZGVsZXRlZCBlYWNoIHRpbWUgd2hlbiBuZXcgUmVxdWVzdCBpbnN0YW50aWF0ZWQgZnJvbSBhbm90aGVyIG9uZVxuXHRcdFx0XHRpZiAoKChzdXBwb3J0c0Zvcm1EYXRhICYmIHRoaXMuX29wdGlvbnMuYm9keSBpbnN0YW5jZW9mIGdsb2JhbHMuRm9ybURhdGEpIHx8IHRoaXMuX29wdGlvbnMuYm9keSBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcykgJiYgISh0aGlzLl9vcHRpb25zLmhlYWRlcnMgJiYgdGhpcy5fb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSkpIHtcblx0XHRcdFx0XHR0aGlzLnJlcXVlc3QuaGVhZGVycy5kZWxldGUoJ2NvbnRlbnQtdHlwZScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5yZXF1ZXN0ID0gbmV3IGdsb2JhbHMuUmVxdWVzdChuZXcgZ2xvYmFscy5SZXF1ZXN0KHVybCwgdGhpcy5yZXF1ZXN0KSwgdGhpcy5fb3B0aW9ucyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9vcHRpb25zLmpzb24gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLl9vcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh0aGlzLl9vcHRpb25zLmpzb24pO1xuXHRcdFx0XHR0aGlzLnJlcXVlc3QuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0XHRcdHRoaXMucmVxdWVzdCA9IG5ldyBnbG9iYWxzLlJlcXVlc3QodGhpcy5yZXF1ZXN0LCB7Ym9keTogdGhpcy5fb3B0aW9ucy5ib2R5fSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGZuID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5fb3B0aW9ucy50aW1lb3V0ID4gbWF4U2FmZVRpbWVvdXQpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVGhlIFxcYHRpbWVvdXRcXGAgb3B0aW9uIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gJHttYXhTYWZlVGltZW91dH1gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGF3YWl0IGRlbGF5KDEpO1xuXHRcdFx0XHRsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9mZXRjaCgpO1xuXG5cdFx0XHRcdGZvciAoY29uc3QgaG9vayBvZiB0aGlzLl9vcHRpb25zLmhvb2tzLmFmdGVyUmVzcG9uc2UpIHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuXHRcdFx0XHRcdGNvbnN0IG1vZGlmaWVkUmVzcG9uc2UgPSBhd2FpdCBob29rKFxuXHRcdFx0XHRcdFx0dGhpcy5yZXF1ZXN0LFxuXHRcdFx0XHRcdFx0dGhpcy5fb3B0aW9ucyxcblx0XHRcdFx0XHRcdHRoaXMuX2RlY29yYXRlUmVzcG9uc2UocmVzcG9uc2UuY2xvbmUoKSlcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0aWYgKG1vZGlmaWVkUmVzcG9uc2UgaW5zdGFuY2VvZiBnbG9iYWxzLlJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9IG1vZGlmaWVkUmVzcG9uc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fZGVjb3JhdGVSZXNwb25zZShyZXNwb25zZSk7XG5cblx0XHRcdFx0aWYgKCFyZXNwb25zZS5vayAmJiB0aGlzLl9vcHRpb25zLnRocm93SHR0cEVycm9ycykge1xuXHRcdFx0XHRcdHRocm93IG5ldyBIVFRQRXJyb3IocmVzcG9uc2UpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgYG9uRG93bmxvYWRQcm9ncmVzc2AgaXMgcGFzc2VkLCBpdCB1c2VzIHRoZSBzdHJlYW0gQVBJIGludGVybmFsbHlcblx0XHRcdFx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0XHRcdFx0aWYgKHRoaXMuX29wdGlvbnMub25Eb3dubG9hZFByb2dyZXNzKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLl9vcHRpb25zLm9uRG93bmxvYWRQcm9ncmVzcyAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGBvbkRvd25sb2FkUHJvZ3Jlc3NgIG9wdGlvbiBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXN1cHBvcnRzU3RyZWFtcykge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdHJlYW1zIGFyZSBub3Qgc3VwcG9ydGVkIGluIHlvdXIgZW52aXJvbm1lbnQuIGBSZWFkYWJsZVN0cmVhbWAgaXMgbWlzc2luZy4nKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fc3RyZWFtKHJlc3BvbnNlLmNsb25lKCksIHRoaXMuX29wdGlvbnMub25Eb3dubG9hZFByb2dyZXNzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGlzUmV0cmlhYmxlTWV0aG9kID0gdGhpcy5fb3B0aW9ucy5yZXRyeS5tZXRob2RzLmluY2x1ZGVzKHRoaXMucmVxdWVzdC5tZXRob2QudG9Mb3dlckNhc2UoKSk7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBpc1JldHJpYWJsZU1ldGhvZCA/IHRoaXMuX3JldHJ5KGZuKSA6IGZuKCk7XG5cblx0XHRcdGZvciAoY29uc3QgW3R5cGUsIG1pbWVUeXBlXSBvZiBPYmplY3QuZW50cmllcyhyZXNwb25zZVR5cGVzKSkge1xuXHRcdFx0XHRyZXN1bHRbdHlwZV0gPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZXF1ZXN0LmhlYWRlcnMuc2V0KCdhY2NlcHQnLCB0aGlzLnJlcXVlc3QuaGVhZGVycy5nZXQoJ2FjY2VwdCcpIHx8IG1pbWVUeXBlKTtcblxuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHJlc3VsdCkuY2xvbmUoKTtcblxuXHRcdFx0XHRcdGlmICh0eXBlID09PSAnanNvbicpIHtcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLnBhcnNlSnNvbikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gb3B0aW9ucy5wYXJzZUpzb24oYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2VbdHlwZV0oKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRfY2FsY3VsYXRlUmV0cnlEZWxheShlcnJvcikge1xuXHRcdFx0dGhpcy5fcmV0cnlDb3VudCsrO1xuXG5cdFx0XHRpZiAodGhpcy5fcmV0cnlDb3VudCA8IHRoaXMuX29wdGlvbnMucmV0cnkubGltaXQgJiYgIShlcnJvciBpbnN0YW5jZW9mIFRpbWVvdXRFcnJvcikpIHtcblx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgSFRUUEVycm9yKSB7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLl9vcHRpb25zLnJldHJ5LnN0YXR1c0NvZGVzLmluY2x1ZGVzKGVycm9yLnJlc3BvbnNlLnN0YXR1cykpIHtcblx0XHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IHJldHJ5QWZ0ZXIgPSBlcnJvci5yZXNwb25zZS5oZWFkZXJzLmdldCgnUmV0cnktQWZ0ZXInKTtcblx0XHRcdFx0XHRpZiAocmV0cnlBZnRlciAmJiB0aGlzLl9vcHRpb25zLnJldHJ5LmFmdGVyU3RhdHVzQ29kZXMuaW5jbHVkZXMoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKSkge1xuXHRcdFx0XHRcdFx0bGV0IGFmdGVyID0gTnVtYmVyKHJldHJ5QWZ0ZXIpO1xuXHRcdFx0XHRcdFx0aWYgKE51bWJlci5pc05hTihhZnRlcikpIHtcblx0XHRcdFx0XHRcdFx0YWZ0ZXIgPSBEYXRlLnBhcnNlKHJldHJ5QWZ0ZXIpIC0gRGF0ZS5ub3coKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGFmdGVyICo9IDEwMDA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5fb3B0aW9ucy5yZXRyeS5tYXhSZXRyeUFmdGVyICE9PSAndW5kZWZpbmVkJyAmJiBhZnRlciA+IHRoaXMuX29wdGlvbnMucmV0cnkubWF4UmV0cnlBZnRlcikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIGFmdGVyO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQxMykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgQkFDS09GRl9GQUNUT1IgPSAwLjM7XG5cdFx0XHRcdHJldHVybiBCQUNLT0ZGX0ZBQ1RPUiAqICgyICoqICh0aGlzLl9yZXRyeUNvdW50IC0gMSkpICogMTAwMDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0X2RlY29yYXRlUmVzcG9uc2UocmVzcG9uc2UpIHtcblx0XHRcdGlmICh0aGlzLl9vcHRpb25zLnBhcnNlSnNvbikge1xuXHRcdFx0XHRyZXNwb25zZS5qc29uID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9vcHRpb25zLnBhcnNlSnNvbihhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0fVxuXG5cdFx0YXN5bmMgX3JldHJ5KGZuKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXR1cm4gYXdhaXQgZm4oKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnN0IG1zID0gTWF0aC5taW4odGhpcy5fY2FsY3VsYXRlUmV0cnlEZWxheShlcnJvciksIG1heFNhZmVUaW1lb3V0KTtcblx0XHRcdFx0aWYgKG1zICE9PSAwICYmIHRoaXMuX3JldHJ5Q291bnQgPiAwKSB7XG5cdFx0XHRcdFx0YXdhaXQgZGVsYXkobXMpO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBob29rIG9mIHRoaXMuX29wdGlvbnMuaG9va3MuYmVmb3JlUmV0cnkpIHtcblx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG5cdFx0XHRcdFx0XHRjb25zdCBob29rUmVzdWx0ID0gYXdhaXQgaG9vayh7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3Q6IHRoaXMucmVxdWVzdCxcblx0XHRcdFx0XHRcdFx0b3B0aW9uczogdGhpcy5fb3B0aW9ucyxcblx0XHRcdFx0XHRcdFx0ZXJyb3IsXG5cdFx0XHRcdFx0XHRcdHJldHJ5Q291bnQ6IHRoaXMuX3JldHJ5Q291bnRcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHQvLyBJZiBgc3RvcGAgaXMgcmV0dXJuZWQgZnJvbSB0aGUgaG9vaywgdGhlIHJldHJ5IHByb2Nlc3MgaXMgc3RvcHBlZFxuXHRcdFx0XHRcdFx0aWYgKGhvb2tSZXN1bHQgPT09IHN0b3ApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9yZXRyeShmbik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fb3B0aW9ucy50aHJvd0h0dHBFcnJvcnMpIHtcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGFzeW5jIF9mZXRjaCgpIHtcblx0XHRcdGZvciAoY29uc3QgaG9vayBvZiB0aGlzLl9vcHRpb25zLmhvb2tzLmJlZm9yZVJlcXVlc3QpIHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3Bcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgaG9vayh0aGlzLnJlcXVlc3QsIHRoaXMuX29wdGlvbnMpO1xuXG5cdFx0XHRcdGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5yZXF1ZXN0ID0gcmVzdWx0O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fb3B0aW9ucy50aW1lb3V0ID09PSBmYWxzZSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fb3B0aW9ucy5mZXRjaCh0aGlzLnJlcXVlc3QuY2xvbmUoKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aW1lb3V0KHRoaXMucmVxdWVzdC5jbG9uZSgpLCB0aGlzLmFib3J0Q29udHJvbGxlciwgdGhpcy5fb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0XHRfc3RyZWFtKHJlc3BvbnNlLCBvbkRvd25sb2FkUHJvZ3Jlc3MpIHtcblx0XHRcdGNvbnN0IHRvdGFsQnl0ZXMgPSBOdW1iZXIocmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtbGVuZ3RoJykpIHx8IDA7XG5cdFx0XHRsZXQgdHJhbnNmZXJyZWRCeXRlcyA9IDA7XG5cblx0XHRcdHJldHVybiBuZXcgZ2xvYmFscy5SZXNwb25zZShcblx0XHRcdFx0bmV3IGdsb2JhbHMuUmVhZGFibGVTdHJlYW0oe1xuXHRcdFx0XHRcdHN0YXJ0KGNvbnRyb2xsZXIpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG5cblx0XHRcdFx0XHRcdGlmIChvbkRvd25sb2FkUHJvZ3Jlc3MpIHtcblx0XHRcdFx0XHRcdFx0b25Eb3dubG9hZFByb2dyZXNzKHtwZXJjZW50OiAwLCB0cmFuc2ZlcnJlZEJ5dGVzOiAwLCB0b3RhbEJ5dGVzfSwgbmV3IFVpbnQ4QXJyYXkoKSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGFzeW5jIGZ1bmN0aW9uIHJlYWQoKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHtkb25lLCB2YWx1ZX0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuXHRcdFx0XHRcdFx0XHRpZiAoZG9uZSkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXIuY2xvc2UoKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAob25Eb3dubG9hZFByb2dyZXNzKSB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmZXJyZWRCeXRlcyArPSB2YWx1ZS5ieXRlTGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHBlcmNlbnQgPSB0b3RhbEJ5dGVzID09PSAwID8gMCA6IHRyYW5zZmVycmVkQnl0ZXMgLyB0b3RhbEJ5dGVzO1xuXHRcdFx0XHRcdFx0XHRcdG9uRG93bmxvYWRQcm9ncmVzcyh7cGVyY2VudCwgdHJhbnNmZXJyZWRCeXRlcywgdG90YWxCeXRlc30sIHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXIuZW5xdWV1ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHJlYWQoKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmVhZCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdmFsaWRhdGVBbmRNZXJnZSA9ICguLi5zb3VyY2VzKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xuXHRcdFx0aWYgKCghaXNPYmplY3Qoc291cmNlKSB8fCBBcnJheS5pc0FycmF5KHNvdXJjZSkpICYmIHR5cGVvZiBzb3VyY2UgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBgb3B0aW9uc2AgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZGVlcE1lcmdlKHt9LCAuLi5zb3VyY2VzKTtcblx0fTtcblxuXHRjb25zdCBjcmVhdGVJbnN0YW5jZSA9IGRlZmF1bHRzID0+IHtcblx0XHRjb25zdCBreSA9IChpbnB1dCwgb3B0aW9ucykgPT4gbmV3IEt5KGlucHV0LCB2YWxpZGF0ZUFuZE1lcmdlKGRlZmF1bHRzLCBvcHRpb25zKSk7XG5cblx0XHRmb3IgKGNvbnN0IG1ldGhvZCBvZiByZXF1ZXN0TWV0aG9kcykge1xuXHRcdFx0a3lbbWV0aG9kXSA9IChpbnB1dCwgb3B0aW9ucykgPT4gbmV3IEt5KGlucHV0LCB2YWxpZGF0ZUFuZE1lcmdlKGRlZmF1bHRzLCBvcHRpb25zLCB7bWV0aG9kfSkpO1xuXHRcdH1cblxuXHRcdGt5LkhUVFBFcnJvciA9IEhUVFBFcnJvcjtcblx0XHRreS5UaW1lb3V0RXJyb3IgPSBUaW1lb3V0RXJyb3I7XG5cdFx0a3kuY3JlYXRlID0gbmV3RGVmYXVsdHMgPT4gY3JlYXRlSW5zdGFuY2UodmFsaWRhdGVBbmRNZXJnZShuZXdEZWZhdWx0cykpO1xuXHRcdGt5LmV4dGVuZCA9IG5ld0RlZmF1bHRzID0+IGNyZWF0ZUluc3RhbmNlKHZhbGlkYXRlQW5kTWVyZ2UoZGVmYXVsdHMsIG5ld0RlZmF1bHRzKSk7XG5cdFx0a3kuc3RvcCA9IHN0b3A7XG5cblx0XHRyZXR1cm4ga3k7XG5cdH07XG5cblx0dmFyIGluZGV4ID0gY3JlYXRlSW5zdGFuY2UoKTtcblxuXHRyZXR1cm4gaW5kZXg7XG5cbn0pKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZldGNoO1xuXG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuY29uc3QgemxpYiA9IHJlcXVpcmUoJ3psaWInKTtcbmNvbnN0IFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuY29uc3QgZGF0YVVyaVRvQnVmZmVyID0gcmVxdWlyZSgnZGF0YS11cmktdG8tYnVmZmVyJyk7XG5jb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuY29uc3QgQmxvYiA9IHJlcXVpcmUoJ2ZldGNoLWJsb2InKTtcbmNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuY29uc3QgdXJsID0gcmVxdWlyZSgndXJsJyk7XG5cbmNsYXNzIEZldGNoQmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlLCB0eXBlKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0Ly8gSGlkZSBjdXN0b20gZXJyb3IgaW1wbGVtZW50YXRpb24gZGV0YWlscyBmcm9tIGVuZC11c2Vyc1xuXHRcdEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cdH1cblxuXHRnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcblx0fVxufVxuXG4vKipcbiAqIEB0eXBlZGVmIHt7IGFkZHJlc3M/OiBzdHJpbmcsIGNvZGU6IHN0cmluZywgZGVzdD86IHN0cmluZywgZXJybm86IG51bWJlciwgaW5mbz86IG9iamVjdCwgbWVzc2FnZTogc3RyaW5nLCBwYXRoPzogc3RyaW5nLCBwb3J0PzogbnVtYmVyLCBzeXNjYWxsOiBzdHJpbmd9fSBTeXN0ZW1FcnJvclxuKi9cblxuLyoqXG4gKiBGZXRjaEVycm9yIGludGVyZmFjZSBmb3Igb3BlcmF0aW9uYWwgZXJyb3JzXG4gKi9cbmNsYXNzIEZldGNoRXJyb3IgZXh0ZW5kcyBGZXRjaEJhc2VFcnJvciB7XG5cdC8qKlxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IG1lc3NhZ2UgLSAgICAgIEVycm9yIG1lc3NhZ2UgZm9yIGh1bWFuXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gW3R5cGVdIC0gICAgICAgIEVycm9yIHR5cGUgZm9yIG1hY2hpbmVcblx0ICogQHBhcmFtICB7U3lzdGVtRXJyb3J9IFtzeXN0ZW1FcnJvcl0gLSBGb3IgTm9kZS5qcyBzeXN0ZW0gZXJyb3Jcblx0ICovXG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHR5cGUsIHN5c3RlbUVycm9yKSB7XG5cdFx0c3VwZXIobWVzc2FnZSwgdHlwZSk7XG5cdFx0Ly8gV2hlbiBlcnIudHlwZSBpcyBgc3lzdGVtYCwgZXJyLmVycm9yZWRTeXNDYWxsIGNvbnRhaW5zIHN5c3RlbSBlcnJvciBhbmQgZXJyLmNvZGUgY29udGFpbnMgc3lzdGVtIGVycm9yIGNvZGVcblx0XHRpZiAoc3lzdGVtRXJyb3IpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tdWx0aS1hc3NpZ25cblx0XHRcdHRoaXMuY29kZSA9IHRoaXMuZXJybm8gPSBzeXN0ZW1FcnJvci5jb2RlO1xuXHRcdFx0dGhpcy5lcnJvcmVkU3lzQ2FsbCA9IHN5c3RlbUVycm9yLnN5c2NhbGw7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogSXMuanNcbiAqXG4gKiBPYmplY3QgdHlwZSBjaGVja3MuXG4gKi9cblxuY29uc3QgTkFNRSA9IFN5bWJvbC50b1N0cmluZ1RhZztcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL25vZGUtZmV0Y2gvbm9kZS1mZXRjaC9pc3N1ZXMvMjk2I2lzc3VlY29tbWVudC0zMDc1OTgxNDNcbiAqXG4gKiBAcGFyYW0gIHsqfSBvYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzVVJMU2VhcmNoUGFyYW1ldGVycyA9IG9iamVjdCA9PiB7XG5cdHJldHVybiAoXG5cdFx0dHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LmFwcGVuZCA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBvYmplY3QuZGVsZXRlID09PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIG9iamVjdC5nZXQgPT09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LmdldEFsbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBvYmplY3QuaGFzID09PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIG9iamVjdC5zZXQgPT09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LnNvcnQgPT09ICdmdW5jdGlvbicgJiZcblx0XHRvYmplY3RbTkFNRV0gPT09ICdVUkxTZWFyY2hQYXJhbXMnXG5cdCk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmplY3RgIGlzIGEgVzNDIGBCbG9iYCBvYmplY3QgKHdoaWNoIGBGaWxlYCBpbmhlcml0cyBmcm9tKVxuICpcbiAqIEBwYXJhbSAgeyp9IG9ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaXNCbG9iID0gb2JqZWN0ID0+IHtcblx0cmV0dXJuIChcblx0XHR0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuXHRcdHR5cGVvZiBvYmplY3QuYXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LnR5cGUgPT09ICdzdHJpbmcnICYmXG5cdFx0dHlwZW9mIG9iamVjdC5zdHJlYW0gPT09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmXG5cdFx0L14oQmxvYnxGaWxlKSQvLnRlc3Qob2JqZWN0W05BTUVdKVxuXHQpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIHNwZWMtY29tcGxpYW50IGBGb3JtRGF0YWAgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEob2JqZWN0KSB7XG5cdHJldHVybiAoXG5cdFx0dHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LmFwcGVuZCA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBvYmplY3Quc2V0ID09PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIG9iamVjdC5nZXQgPT09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LmdldEFsbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBvYmplY3QuZGVsZXRlID09PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIG9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIG9iamVjdC52YWx1ZXMgPT09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LmVudHJpZXMgPT09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmXG5cdFx0b2JqZWN0W05BTUVdID09PSAnRm9ybURhdGEnXG5cdCk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gaW5zdGFuY2Ugb2YgQWJvcnRTaWduYWwuXG4gKlxuICogQHBhcmFtICB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCBpc0Fib3J0U2lnbmFsID0gb2JqZWN0ID0+IHtcblx0cmV0dXJuIChcblx0XHR0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuXHRcdG9iamVjdFtOQU1FXSA9PT0gJ0Fib3J0U2lnbmFsJ1xuXHQpO1xufTtcblxuY29uc3QgY2FycmlhZ2UgPSAnXFxyXFxuJztcbmNvbnN0IGRhc2hlcyA9ICctJy5yZXBlYXQoMik7XG5jb25zdCBjYXJyaWFnZUxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGNhcnJpYWdlKTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gYm91bmRhcnlcbiAqL1xuY29uc3QgZ2V0Rm9vdGVyID0gYm91bmRhcnkgPT4gYCR7ZGFzaGVzfSR7Ym91bmRhcnl9JHtkYXNoZXN9JHtjYXJyaWFnZS5yZXBlYXQoMil9YDtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gYm91bmRhcnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IGZpZWxkXG4gKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRIZWFkZXIoYm91bmRhcnksIG5hbWUsIGZpZWxkKSB7XG5cdGxldCBoZWFkZXIgPSAnJztcblxuXHRoZWFkZXIgKz0gYCR7ZGFzaGVzfSR7Ym91bmRhcnl9JHtjYXJyaWFnZX1gO1xuXHRoZWFkZXIgKz0gYENvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIiR7bmFtZX1cImA7XG5cblx0aWYgKGlzQmxvYihmaWVsZCkpIHtcblx0XHRoZWFkZXIgKz0gYDsgZmlsZW5hbWU9XCIke2ZpZWxkLm5hbWV9XCIke2NhcnJpYWdlfWA7XG5cdFx0aGVhZGVyICs9IGBDb250ZW50LVR5cGU6ICR7ZmllbGQudHlwZSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ31gO1xuXHR9XG5cblx0cmV0dXJuIGAke2hlYWRlcn0ke2NhcnJpYWdlLnJlcGVhdCgyKX1gO1xufVxuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuY29uc3QgZ2V0Qm91bmRhcnkgPSAoKSA9PiBjcnlwdG8ucmFuZG9tQnl0ZXMoOCkudG9TdHJpbmcoJ2hleCcpO1xuXG4vKipcbiAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1cbiAqIEBwYXJhbSB7c3RyaW5nfSBib3VuZGFyeVxuICovXG5hc3luYyBmdW5jdGlvbiAqIGZvcm1EYXRhSXRlcmF0b3IoZm9ybSwgYm91bmRhcnkpIHtcblx0Zm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIGZvcm0pIHtcblx0XHR5aWVsZCBnZXRIZWFkZXIoYm91bmRhcnksIG5hbWUsIHZhbHVlKTtcblxuXHRcdGlmIChpc0Jsb2IodmFsdWUpKSB7XG5cdFx0XHR5aWVsZCAqIHZhbHVlLnN0cmVhbSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR5aWVsZCB2YWx1ZTtcblx0XHR9XG5cblx0XHR5aWVsZCBjYXJyaWFnZTtcblx0fVxuXG5cdHlpZWxkIGdldEZvb3Rlcihib3VuZGFyeSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybVxuICogQHBhcmFtIHtzdHJpbmd9IGJvdW5kYXJ5XG4gKi9cbmZ1bmN0aW9uIGdldEZvcm1EYXRhTGVuZ3RoKGZvcm0sIGJvdW5kYXJ5KSB7XG5cdGxldCBsZW5ndGggPSAwO1xuXG5cdGZvciAoY29uc3QgW25hbWUsIHZhbHVlXSBvZiBmb3JtKSB7XG5cdFx0bGVuZ3RoICs9IEJ1ZmZlci5ieXRlTGVuZ3RoKGdldEhlYWRlcihib3VuZGFyeSwgbmFtZSwgdmFsdWUpKTtcblxuXHRcdGlmIChpc0Jsb2IodmFsdWUpKSB7XG5cdFx0XHRsZW5ndGggKz0gdmFsdWUuc2l6ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGVuZ3RoICs9IEJ1ZmZlci5ieXRlTGVuZ3RoKFN0cmluZyh2YWx1ZSkpO1xuXHRcdH1cblxuXHRcdGxlbmd0aCArPSBjYXJyaWFnZUxlbmd0aDtcblx0fVxuXG5cdGxlbmd0aCArPSBCdWZmZXIuYnl0ZUxlbmd0aChnZXRGb290ZXIoYm91bmRhcnkpKTtcblxuXHRyZXR1cm4gbGVuZ3RoO1xufVxuXG5jb25zdCBJTlRFUk5BTFMgPSBTeW1ib2woJ0JvZHkgaW50ZXJuYWxzJyk7XG5cbi8qKlxuICogQm9keSBtaXhpblxuICpcbiAqIFJlZjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2JvZHlcbiAqXG4gKiBAcGFyYW0gICBTdHJlYW0gIGJvZHkgIFJlYWRhYmxlIHN0cmVhbVxuICogQHBhcmFtICAgT2JqZWN0ICBvcHRzICBSZXNwb25zZSBvcHRpb25zXG4gKiBAcmV0dXJuICBWb2lkXG4gKi9cbmNsYXNzIEJvZHkge1xuXHRjb25zdHJ1Y3Rvcihib2R5LCB7XG5cdFx0c2l6ZSA9IDBcblx0fSA9IHt9KSB7XG5cdFx0bGV0IGJvdW5kYXJ5ID0gbnVsbDtcblxuXHRcdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0XHQvLyBCb2R5IGlzIHVuZGVmaW5lZCBvciBudWxsXG5cdFx0XHRib2R5ID0gbnVsbDtcblx0XHR9IGVsc2UgaWYgKGlzVVJMU2VhcmNoUGFyYW1ldGVycyhib2R5KSkge1xuXHRcdC8vIEJvZHkgaXMgYSBVUkxTZWFyY2hQYXJhbXNcblx0XHRcdGJvZHkgPSBCdWZmZXIuZnJvbShib2R5LnRvU3RyaW5nKCkpO1xuXHRcdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSA7IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkgOyBlbHNlIGlmICh1dGlsLnR5cGVzLmlzQW55QXJyYXlCdWZmZXIoYm9keSkpIHtcblx0XHRcdC8vIEJvZHkgaXMgQXJyYXlCdWZmZXJcblx0XHRcdGJvZHkgPSBCdWZmZXIuZnJvbShib2R5KTtcblx0XHR9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSkge1xuXHRcdFx0Ly8gQm9keSBpcyBBcnJheUJ1ZmZlclZpZXdcblx0XHRcdGJvZHkgPSBCdWZmZXIuZnJvbShib2R5LmJ1ZmZlciwgYm9keS5ieXRlT2Zmc2V0LCBib2R5LmJ5dGVMZW5ndGgpO1xuXHRcdH0gZWxzZSBpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkgOyBlbHNlIGlmIChpc0Zvcm1EYXRhKGJvZHkpKSB7XG5cdFx0XHQvLyBCb2R5IGlzIGFuIGluc3RhbmNlIG9mIGZvcm1kYXRhLW5vZGVcblx0XHRcdGJvdW5kYXJ5ID0gYE5vZGVGZXRjaEZvcm1EYXRhQm91bmRhcnkke2dldEJvdW5kYXJ5KCl9YDtcblx0XHRcdGJvZHkgPSBTdHJlYW0uUmVhZGFibGUuZnJvbShmb3JtRGF0YUl0ZXJhdG9yKGJvZHksIGJvdW5kYXJ5KSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIE5vbmUgb2YgdGhlIGFib3ZlXG5cdFx0XHQvLyBjb2VyY2UgdG8gc3RyaW5nIHRoZW4gYnVmZmVyXG5cdFx0XHRib2R5ID0gQnVmZmVyLmZyb20oU3RyaW5nKGJvZHkpKTtcblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMU10gPSB7XG5cdFx0XHRib2R5LFxuXHRcdFx0Ym91bmRhcnksXG5cdFx0XHRkaXN0dXJiZWQ6IGZhbHNlLFxuXHRcdFx0ZXJyb3I6IG51bGxcblx0XHR9O1xuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XG5cblx0XHRpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkge1xuXHRcdFx0Ym9keS5vbignZXJyb3InLCBlcnIgPT4ge1xuXHRcdFx0XHRjb25zdCBlcnJvciA9IGVyciBpbnN0YW5jZW9mIEZldGNoQmFzZUVycm9yID9cblx0XHRcdFx0XHRlcnIgOlxuXHRcdFx0XHRcdG5ldyBGZXRjaEVycm9yKGBJbnZhbGlkIHJlc3BvbnNlIGJvZHkgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7dGhpcy51cmx9OiAke2Vyci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnIpO1xuXHRcdFx0XHR0aGlzW0lOVEVSTkFMU10uZXJyb3IgPSBlcnJvcjtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldCBib2R5KCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uYm9keTtcblx0fVxuXG5cdGdldCBib2R5VXNlZCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLmRpc3R1cmJlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWNvZGUgcmVzcG9uc2UgYXMgQXJyYXlCdWZmZXJcblx0ICpcblx0ICogQHJldHVybiAgUHJvbWlzZVxuXHQgKi9cblx0YXN5bmMgYXJyYXlCdWZmZXIoKSB7XG5cdFx0Y29uc3Qge2J1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aH0gPSBhd2FpdCBjb25zdW1lQm9keSh0aGlzKTtcblx0XHRyZXR1cm4gYnVmZmVyLnNsaWNlKGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBieXRlTGVuZ3RoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gcmF3IHJlc3BvbnNlIGFzIEJsb2Jcblx0ICpcblx0ICogQHJldHVybiBQcm9taXNlXG5cdCAqL1xuXHRhc3luYyBibG9iKCkge1xuXHRcdGNvbnN0IGN0ID0gKHRoaXMuaGVhZGVycyAmJiB0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkgfHwgKHRoaXNbSU5URVJOQUxTXS5ib2R5ICYmIHRoaXNbSU5URVJOQUxTXS5ib2R5LnR5cGUpIHx8ICcnO1xuXHRcdGNvbnN0IGJ1ZiA9IGF3YWl0IHRoaXMuYnVmZmVyKCk7XG5cblx0XHRyZXR1cm4gbmV3IEJsb2IoW2J1Zl0sIHtcblx0XHRcdHR5cGU6IGN0XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogRGVjb2RlIHJlc3BvbnNlIGFzIGpzb25cblx0ICpcblx0ICogQHJldHVybiAgUHJvbWlzZVxuXHQgKi9cblx0YXN5bmMganNvbigpIHtcblx0XHRjb25zdCBidWZmZXIgPSBhd2FpdCBjb25zdW1lQm9keSh0aGlzKTtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShidWZmZXIudG9TdHJpbmcoKSk7XG5cdH1cblxuXHQvKipcblx0ICogRGVjb2RlIHJlc3BvbnNlIGFzIHRleHRcblx0ICpcblx0ICogQHJldHVybiAgUHJvbWlzZVxuXHQgKi9cblx0YXN5bmMgdGV4dCgpIHtcblx0XHRjb25zdCBidWZmZXIgPSBhd2FpdCBjb25zdW1lQm9keSh0aGlzKTtcblx0XHRyZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCk7XG5cdH1cblxuXHQvKipcblx0ICogRGVjb2RlIHJlc3BvbnNlIGFzIGJ1ZmZlciAobm9uLXNwZWMgYXBpKVxuXHQgKlxuXHQgKiBAcmV0dXJuICBQcm9taXNlXG5cdCAqL1xuXHRidWZmZXIoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5KHRoaXMpO1xuXHR9XG59XG5cbi8vIEluIGJyb3dzZXJzLCBhbGwgcHJvcGVydGllcyBhcmUgZW51bWVyYWJsZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEJvZHkucHJvdG90eXBlLCB7XG5cdGJvZHk6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0Ym9keVVzZWQ6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0YXJyYXlCdWZmZXI6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0YmxvYjoge2VudW1lcmFibGU6IHRydWV9LFxuXHRqc29uOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdHRleHQ6IHtlbnVtZXJhYmxlOiB0cnVlfVxufSk7XG5cbi8qKlxuICogQ29uc3VtZSBhbmQgY29udmVydCBhbiBlbnRpcmUgQm9keSB0byBhIEJ1ZmZlci5cbiAqXG4gKiBSZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWJvZHktY29uc3VtZS1ib2R5XG4gKlxuICogQHJldHVybiBQcm9taXNlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvbnN1bWVCb2R5KGRhdGEpIHtcblx0aWYgKGRhdGFbSU5URVJOQUxTXS5kaXN0dXJiZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBib2R5IHVzZWQgYWxyZWFkeSBmb3I6ICR7ZGF0YS51cmx9YCk7XG5cdH1cblxuXHRkYXRhW0lOVEVSTkFMU10uZGlzdHVyYmVkID0gdHJ1ZTtcblxuXHRpZiAoZGF0YVtJTlRFUk5BTFNdLmVycm9yKSB7XG5cdFx0dGhyb3cgZGF0YVtJTlRFUk5BTFNdLmVycm9yO1xuXHR9XG5cblx0bGV0IHtib2R5fSA9IGRhdGE7XG5cblx0Ly8gQm9keSBpcyBudWxsXG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIEJ1ZmZlci5hbGxvYygwKTtcblx0fVxuXG5cdC8vIEJvZHkgaXMgYmxvYlxuXHRpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0Ym9keSA9IGJvZHkuc3RyZWFtKCk7XG5cdH1cblxuXHQvLyBCb2R5IGlzIGJ1ZmZlclxuXHRpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpKSB7XG5cdFx0cmV0dXJuIGJvZHk7XG5cdH1cblxuXHQvKiBjOCBpZ25vcmUgbmV4dCAzICovXG5cdGlmICghKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pKSB7XG5cdFx0cmV0dXJuIEJ1ZmZlci5hbGxvYygwKTtcblx0fVxuXG5cdC8vIEJvZHkgaXMgc3RyZWFtXG5cdC8vIGdldCByZWFkeSB0byBhY3R1YWxseSBjb25zdW1lIHRoZSBib2R5XG5cdGNvbnN0IGFjY3VtID0gW107XG5cdGxldCBhY2N1bUJ5dGVzID0gMDtcblxuXHR0cnkge1xuXHRcdGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgYm9keSkge1xuXHRcdFx0aWYgKGRhdGEuc2l6ZSA+IDAgJiYgYWNjdW1CeXRlcyArIGNodW5rLmxlbmd0aCA+IGRhdGEuc2l6ZSkge1xuXHRcdFx0XHRjb25zdCBlcnIgPSBuZXcgRmV0Y2hFcnJvcihgY29udGVudCBzaXplIGF0ICR7ZGF0YS51cmx9IG92ZXIgbGltaXQ6ICR7ZGF0YS5zaXplfWAsICdtYXgtc2l6ZScpO1xuXHRcdFx0XHRib2R5LmRlc3Ryb3koZXJyKTtcblx0XHRcdFx0dGhyb3cgZXJyO1xuXHRcdFx0fVxuXG5cdFx0XHRhY2N1bUJ5dGVzICs9IGNodW5rLmxlbmd0aDtcblx0XHRcdGFjY3VtLnB1c2goY2h1bmspO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBGZXRjaEJhc2VFcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIE90aGVyIGVycm9ycywgc3VjaCBhcyBpbmNvcnJlY3QgY29udGVudC1lbmNvZGluZ1xuXHRcdFx0dGhyb3cgbmV3IEZldGNoRXJyb3IoYEludmFsaWQgcmVzcG9uc2UgYm9keSB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJHtkYXRhLnVybH06ICR7ZXJyb3IubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChib2R5LnJlYWRhYmxlRW5kZWQgPT09IHRydWUgfHwgYm9keS5fcmVhZGFibGVTdGF0ZS5lbmRlZCA9PT0gdHJ1ZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoYWNjdW0uZXZlcnkoYyA9PiB0eXBlb2YgYyA9PT0gJ3N0cmluZycpKSB7XG5cdFx0XHRcdHJldHVybiBCdWZmZXIuZnJvbShhY2N1bS5qb2luKCcnKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBCdWZmZXIuY29uY2F0KGFjY3VtLCBhY2N1bUJ5dGVzKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgbmV3IEZldGNoRXJyb3IoYENvdWxkIG5vdCBjcmVhdGUgQnVmZmVyIGZyb20gcmVzcG9uc2UgYm9keSBmb3IgJHtkYXRhLnVybH06ICR7ZXJyb3IubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyb3IpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRmV0Y2hFcnJvcihgUHJlbWF0dXJlIGNsb3NlIG9mIHNlcnZlciByZXNwb25zZSB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJHtkYXRhLnVybH1gKTtcblx0fVxufVxuXG4vKipcbiAqIENsb25lIGJvZHkgZ2l2ZW4gUmVzL1JlcSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAgIE1peGVkICAgaW5zdGFuY2UgICAgICAgUmVzcG9uc2Ugb3IgUmVxdWVzdCBpbnN0YW5jZVxuICogQHBhcmFtICAgU3RyaW5nICBoaWdoV2F0ZXJNYXJrICBoaWdoV2F0ZXJNYXJrIGZvciBib3RoIFBhc3NUaHJvdWdoIGJvZHkgc3RyZWFtc1xuICogQHJldHVybiAgTWl4ZWRcbiAqL1xuY29uc3QgY2xvbmUgPSAoaW5zdGFuY2UsIGhpZ2hXYXRlck1hcmspID0+IHtcblx0bGV0IHAxO1xuXHRsZXQgcDI7XG5cdGxldCB7Ym9keX0gPSBpbnN0YW5jZTtcblxuXHQvLyBEb24ndCBhbGxvdyBjbG9uaW5nIGEgdXNlZCBib2R5XG5cdGlmIChpbnN0YW5jZS5ib2R5VXNlZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignY2Fubm90IGNsb25lIGJvZHkgYWZ0ZXIgaXQgaXMgdXNlZCcpO1xuXHR9XG5cblx0Ly8gQ2hlY2sgdGhhdCBib2R5IGlzIGEgc3RyZWFtIGFuZCBub3QgZm9ybS1kYXRhIG9iamVjdFxuXHQvLyBub3RlOiB3ZSBjYW4ndCBjbG9uZSB0aGUgZm9ybS1kYXRhIG9iamVjdCB3aXRob3V0IGhhdmluZyBpdCBhcyBhIGRlcGVuZGVuY3lcblx0aWYgKChib2R5IGluc3RhbmNlb2YgU3RyZWFtKSAmJiAodHlwZW9mIGJvZHkuZ2V0Qm91bmRhcnkgIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0Ly8gVGVlIGluc3RhbmNlIGJvZHlcblx0XHRwMSA9IG5ldyBTdHJlYW0uUGFzc1Rocm91Z2goe2hpZ2hXYXRlck1hcmt9KTtcblx0XHRwMiA9IG5ldyBTdHJlYW0uUGFzc1Rocm91Z2goe2hpZ2hXYXRlck1hcmt9KTtcblx0XHRib2R5LnBpcGUocDEpO1xuXHRcdGJvZHkucGlwZShwMik7XG5cdFx0Ly8gU2V0IGluc3RhbmNlIGJvZHkgdG8gdGVlZCBib2R5IGFuZCByZXR1cm4gdGhlIG90aGVyIHRlZWQgYm9keVxuXHRcdGluc3RhbmNlW0lOVEVSTkFMU10uYm9keSA9IHAxO1xuXHRcdGJvZHkgPSBwMjtcblx0fVxuXG5cdHJldHVybiBib2R5O1xufTtcblxuLyoqXG4gKiBQZXJmb3JtcyB0aGUgb3BlcmF0aW9uIFwiZXh0cmFjdCBhIGBDb250ZW50LVR5cGVgIHZhbHVlIGZyb20gfG9iamVjdHxcIiBhc1xuICogc3BlY2lmaWVkIGluIHRoZSBzcGVjaWZpY2F0aW9uOlxuICogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtYm9keWluaXQtZXh0cmFjdFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGluc3RhbmNlLmJvZHkgaXMgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge2FueX0gYm9keSBBbnkgb3B0aW9ucy5ib2R5IGlucHV0XG4gKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbH1cbiAqL1xuY29uc3QgZXh0cmFjdENvbnRlbnRUeXBlID0gKGJvZHksIHJlcXVlc3QpID0+IHtcblx0Ly8gQm9keSBpcyBudWxsIG9yIHVuZGVmaW5lZFxuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gQm9keSBpcyBzdHJpbmdcblx0aWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jztcblx0fVxuXG5cdC8vIEJvZHkgaXMgYSBVUkxTZWFyY2hQYXJhbXNcblx0aWYgKGlzVVJMU2VhcmNoUGFyYW1ldGVycyhib2R5KSkge1xuXHRcdHJldHVybiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnO1xuXHR9XG5cblx0Ly8gQm9keSBpcyBibG9iXG5cdGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHRyZXR1cm4gYm9keS50eXBlIHx8IG51bGw7XG5cdH1cblxuXHQvLyBCb2R5IGlzIGEgQnVmZmVyIChCdWZmZXIsIEFycmF5QnVmZmVyIG9yIEFycmF5QnVmZmVyVmlldylcblx0aWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSB8fCB1dGlsLnR5cGVzLmlzQW55QXJyYXlCdWZmZXIoYm9keSkgfHwgQXJyYXlCdWZmZXIuaXNWaWV3KGJvZHkpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBEZXRlY3QgZm9ybSBkYXRhIGlucHV0IGZyb20gZm9ybS1kYXRhIG1vZHVsZVxuXHRpZiAoYm9keSAmJiB0eXBlb2YgYm9keS5nZXRCb3VuZGFyeSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBgbXVsdGlwYXJ0L2Zvcm0tZGF0YTtib3VuZGFyeT0ke2JvZHkuZ2V0Qm91bmRhcnkoKX1gO1xuXHR9XG5cblx0aWYgKGlzRm9ybURhdGEoYm9keSkpIHtcblx0XHRyZXR1cm4gYG11bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PSR7cmVxdWVzdFtJTlRFUk5BTFNdLmJvdW5kYXJ5fWA7XG5cdH1cblxuXHQvLyBCb2R5IGlzIHN0cmVhbSAtIGNhbid0IHJlYWxseSBkbyBtdWNoIGFib3V0IHRoaXNcblx0aWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8vIEJvZHkgY29uc3RydWN0b3IgZGVmYXVsdHMgb3RoZXIgdGhpbmdzIHRvIHN0cmluZ1xuXHRyZXR1cm4gJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCc7XG59O1xuXG4vKipcbiAqIFRoZSBGZXRjaCBTdGFuZGFyZCB0cmVhdHMgdGhpcyBhcyBpZiBcInRvdGFsIGJ5dGVzXCIgaXMgYSBwcm9wZXJ0eSBvbiB0aGUgYm9keS5cbiAqIEZvciB1cywgd2UgaGF2ZSB0byBleHBsaWNpdGx5IGdldCBpdCB3aXRoIGEgZnVuY3Rpb24uXG4gKlxuICogcmVmOiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ib2R5LXRvdGFsLWJ5dGVzXG4gKlxuICogQHBhcmFtIHthbnl9IG9iai5ib2R5IEJvZHkgb2JqZWN0IGZyb20gdGhlIEJvZHkgaW5zdGFuY2UuXG4gKiBAcmV0dXJucyB7bnVtYmVyIHwgbnVsbH1cbiAqL1xuY29uc3QgZ2V0VG90YWxCeXRlcyA9IHJlcXVlc3QgPT4ge1xuXHRjb25zdCB7Ym9keX0gPSByZXF1ZXN0O1xuXG5cdC8vIEJvZHkgaXMgbnVsbCBvciB1bmRlZmluZWRcblx0aWYgKGJvZHkgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdC8vIEJvZHkgaXMgQmxvYlxuXHRpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0cmV0dXJuIGJvZHkuc2l6ZTtcblx0fVxuXG5cdC8vIEJvZHkgaXMgQnVmZmVyXG5cdGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHRyZXR1cm4gYm9keS5sZW5ndGg7XG5cdH1cblxuXHQvLyBEZXRlY3QgZm9ybSBkYXRhIGlucHV0IGZyb20gZm9ybS1kYXRhIG1vZHVsZVxuXHRpZiAoYm9keSAmJiB0eXBlb2YgYm9keS5nZXRMZW5ndGhTeW5jID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGJvZHkuaGFzS25vd25MZW5ndGggJiYgYm9keS5oYXNLbm93bkxlbmd0aCgpID8gYm9keS5nZXRMZW5ndGhTeW5jKCkgOiBudWxsO1xuXHR9XG5cblx0Ly8gQm9keSBpcyBhIHNwZWMtY29tcGxpYW50IGZvcm0tZGF0YVxuXHRpZiAoaXNGb3JtRGF0YShib2R5KSkge1xuXHRcdHJldHVybiBnZXRGb3JtRGF0YUxlbmd0aChyZXF1ZXN0W0lOVEVSTkFMU10uYm91bmRhcnkpO1xuXHR9XG5cblx0Ly8gQm9keSBpcyBzdHJlYW1cblx0cmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFdyaXRlIGEgQm9keSB0byBhIE5vZGUuanMgV3JpdGFibGVTdHJlYW0gKGUuZy4gaHR0cC5SZXF1ZXN0KSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtTdHJlYW0uV3JpdGFibGV9IGRlc3QgVGhlIHN0cmVhbSB0byB3cml0ZSB0by5cbiAqIEBwYXJhbSBvYmouYm9keSBCb2R5IG9iamVjdCBmcm9tIHRoZSBCb2R5IGluc3RhbmNlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmNvbnN0IHdyaXRlVG9TdHJlYW0gPSAoZGVzdCwge2JvZHl9KSA9PiB7XG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0Ly8gQm9keSBpcyBudWxsXG5cdFx0ZGVzdC5lbmQoKTtcblx0fSBlbHNlIGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHQvLyBCb2R5IGlzIEJsb2Jcblx0XHRib2R5LnN0cmVhbSgpLnBpcGUoZGVzdCk7XG5cdH0gZWxzZSBpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpKSB7XG5cdFx0Ly8gQm9keSBpcyBidWZmZXJcblx0XHRkZXN0LndyaXRlKGJvZHkpO1xuXHRcdGRlc3QuZW5kKCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQm9keSBpcyBzdHJlYW1cblx0XHRib2R5LnBpcGUoZGVzdCk7XG5cdH1cbn07XG5cbi8qKlxuICogSGVhZGVycy5qc1xuICpcbiAqIEhlYWRlcnMgY2xhc3Mgb2ZmZXJzIGNvbnZlbmllbnQgaGVscGVyc1xuICovXG5cbmNvbnN0IHZhbGlkYXRlSGVhZGVyTmFtZSA9IHR5cGVvZiBodHRwLnZhbGlkYXRlSGVhZGVyTmFtZSA9PT0gJ2Z1bmN0aW9uJyA/XG5cdGh0dHAudmFsaWRhdGVIZWFkZXJOYW1lIDpcblx0bmFtZSA9PiB7XG5cdFx0aWYgKCEvXltcXF5gXFwtXFx3ISMkJSYnKisufH5dKyQvLnRlc3QobmFtZSkpIHtcblx0XHRcdGNvbnN0IGVyciA9IG5ldyBUeXBlRXJyb3IoYEhlYWRlciBuYW1lIG11c3QgYmUgYSB2YWxpZCBIVFRQIHRva2VuIFske25hbWV9XWApO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgJ2NvZGUnLCB7dmFsdWU6ICdFUlJfSU5WQUxJRF9IVFRQX1RPS0VOJ30pO1xuXHRcdFx0dGhyb3cgZXJyO1xuXHRcdH1cblx0fTtcblxuY29uc3QgdmFsaWRhdGVIZWFkZXJWYWx1ZSA9IHR5cGVvZiBodHRwLnZhbGlkYXRlSGVhZGVyVmFsdWUgPT09ICdmdW5jdGlvbicgP1xuXHRodHRwLnZhbGlkYXRlSGVhZGVyVmFsdWUgOlxuXHQobmFtZSwgdmFsdWUpID0+IHtcblx0XHRpZiAoL1teXFx0XFx1MDAyMC1cXHUwMDdFXFx1MDA4MC1cXHUwMEZGXS8udGVzdCh2YWx1ZSkpIHtcblx0XHRcdGNvbnN0IGVyciA9IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBjb250ZW50IFtcIiR7bmFtZX1cIl1gKTtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsICdjb2RlJywge3ZhbHVlOiAnRVJSX0lOVkFMSURfQ0hBUid9KTtcblx0XHRcdHRocm93IGVycjtcblx0XHR9XG5cdH07XG5cbi8qKlxuICogQHR5cGVkZWYge0hlYWRlcnMgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgSXRlcmFibGU8cmVhZG9ubHkgW3N0cmluZywgc3RyaW5nXT4gfCBJdGVyYWJsZTxJdGVyYWJsZTxzdHJpbmc+Pn0gSGVhZGVyc0luaXRcbiAqL1xuXG4vKipcbiAqIFRoaXMgRmV0Y2ggQVBJIGludGVyZmFjZSBhbGxvd3MgeW91IHRvIHBlcmZvcm0gdmFyaW91cyBhY3Rpb25zIG9uIEhUVFAgcmVxdWVzdCBhbmQgcmVzcG9uc2UgaGVhZGVycy5cbiAqIFRoZXNlIGFjdGlvbnMgaW5jbHVkZSByZXRyaWV2aW5nLCBzZXR0aW5nLCBhZGRpbmcgdG8sIGFuZCByZW1vdmluZy5cbiAqIEEgSGVhZGVycyBvYmplY3QgaGFzIGFuIGFzc29jaWF0ZWQgaGVhZGVyIGxpc3QsIHdoaWNoIGlzIGluaXRpYWxseSBlbXB0eSBhbmQgY29uc2lzdHMgb2YgemVybyBvciBtb3JlIG5hbWUgYW5kIHZhbHVlIHBhaXJzLlxuICogWW91IGNhbiBhZGQgdG8gdGhpcyB1c2luZyBtZXRob2RzIGxpa2UgYXBwZW5kKCkgKHNlZSBFeGFtcGxlcy4pXG4gKiBJbiBhbGwgbWV0aG9kcyBvZiB0aGlzIGludGVyZmFjZSwgaGVhZGVyIG5hbWVzIGFyZSBtYXRjaGVkIGJ5IGNhc2UtaW5zZW5zaXRpdmUgYnl0ZSBzZXF1ZW5jZS5cbiAqXG4gKi9cbmNsYXNzIEhlYWRlcnMgZXh0ZW5kcyBVUkxTZWFyY2hQYXJhbXMge1xuXHQvKipcblx0ICogSGVhZGVycyBjbGFzc1xuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtIZWFkZXJzSW5pdH0gW2luaXRdIC0gUmVzcG9uc2UgaGVhZGVyc1xuXHQgKi9cblx0Y29uc3RydWN0b3IoaW5pdCkge1xuXHRcdC8vIFZhbGlkYXRlIGFuZCBub3JtYWxpemUgaW5pdCBvYmplY3QgaW4gW25hbWUsIHZhbHVlKHMpXVtdXG5cdFx0LyoqIEB0eXBlIHtzdHJpbmdbXVtdfSAqL1xuXHRcdGxldCByZXN1bHQgPSBbXTtcblx0XHRpZiAoaW5pdCBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcblx0XHRcdGNvbnN0IHJhdyA9IGluaXQucmF3KCk7XG5cdFx0XHRmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZXNdIG9mIE9iamVjdC5lbnRyaWVzKHJhdykpIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goLi4udmFsdWVzLm1hcCh2YWx1ZSA9PiBbbmFtZSwgdmFsdWVdKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpbml0ID09IG51bGwpIDsgZWxzZSBpZiAodHlwZW9mIGluaXQgPT09ICdvYmplY3QnICYmICF1dGlsLnR5cGVzLmlzQm94ZWRQcmltaXRpdmUoaW5pdCkpIHtcblx0XHRcdGNvbnN0IG1ldGhvZCA9IGluaXRbU3ltYm9sLml0ZXJhdG9yXTtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLCBlcWVxZXFcblx0XHRcdGlmIChtZXRob2QgPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBSZWNvcmQ8Qnl0ZVN0cmluZywgQnl0ZVN0cmluZz5cblx0XHRcdFx0cmVzdWx0LnB1c2goLi4uT2JqZWN0LmVudHJpZXMoaW5pdCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBtZXRob2QgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdIZWFkZXIgcGFpcnMgbXVzdCBiZSBpdGVyYWJsZScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU2VxdWVuY2U8c2VxdWVuY2U8Qnl0ZVN0cmluZz4+XG5cdFx0XHRcdC8vIE5vdGU6IHBlciBzcGVjIHdlIGhhdmUgdG8gZmlyc3QgZXhoYXVzdCB0aGUgbGlzdHMgdGhlbiBwcm9jZXNzIHRoZW1cblx0XHRcdFx0cmVzdWx0ID0gWy4uLmluaXRdXG5cdFx0XHRcdFx0Lm1hcChwYWlyID0+IHtcblx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0dHlwZW9mIHBhaXIgIT09ICdvYmplY3QnIHx8IHV0aWwudHlwZXMuaXNCb3hlZFByaW1pdGl2ZShwYWlyKVxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0VhY2ggaGVhZGVyIHBhaXIgbXVzdCBiZSBhbiBpdGVyYWJsZSBvYmplY3QnKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIFsuLi5wYWlyXTtcblx0XHRcdFx0XHR9KS5tYXAocGFpciA9PiB7XG5cdFx0XHRcdFx0XHRpZiAocGFpci5sZW5ndGggIT09IDIpIHtcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRWFjaCBoZWFkZXIgcGFpciBtdXN0IGJlIGEgbmFtZS92YWx1ZSB0dXBsZScpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gWy4uLnBhaXJdO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdGYWlsZWQgdG8gY29uc3RydWN0IFxcJ0hlYWRlcnNcXCc6IFRoZSBwcm92aWRlZCB2YWx1ZSBpcyBub3Qgb2YgdHlwZSBcXCcoc2VxdWVuY2U8c2VxdWVuY2U8Qnl0ZVN0cmluZz4+IG9yIHJlY29yZDxCeXRlU3RyaW5nLCBCeXRlU3RyaW5nPiknKTtcblx0XHR9XG5cblx0XHQvLyBWYWxpZGF0ZSBhbmQgbG93ZXJjYXNlXG5cdFx0cmVzdWx0ID1cblx0XHRcdHJlc3VsdC5sZW5ndGggPiAwID9cblx0XHRcdFx0cmVzdWx0Lm1hcCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuXHRcdFx0XHRcdHZhbGlkYXRlSGVhZGVyTmFtZShuYW1lKTtcblx0XHRcdFx0XHR2YWxpZGF0ZUhlYWRlclZhbHVlKG5hbWUsIFN0cmluZyh2YWx1ZSkpO1xuXHRcdFx0XHRcdHJldHVybiBbU3RyaW5nKG5hbWUpLnRvTG93ZXJDYXNlKCksIFN0cmluZyh2YWx1ZSldO1xuXHRcdFx0XHR9KSA6XG5cdFx0XHRcdHVuZGVmaW5lZDtcblxuXHRcdHN1cGVyKHJlc3VsdCk7XG5cblx0XHQvLyBSZXR1cm5pbmcgYSBQcm94eSB0aGF0IHdpbGwgbG93ZXJjYXNlIGtleSBuYW1lcywgdmFsaWRhdGUgcGFyYW1ldGVycyBhbmQgc29ydCBrZXlzXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0cnVjdG9yLXJldHVyblxuXHRcdHJldHVybiBuZXcgUHJveHkodGhpcywge1xuXHRcdFx0Z2V0KHRhcmdldCwgcCwgcmVjZWl2ZXIpIHtcblx0XHRcdFx0c3dpdGNoIChwKSB7XG5cdFx0XHRcdFx0Y2FzZSAnYXBwZW5kJzpcblx0XHRcdFx0XHRjYXNlICdzZXQnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIChuYW1lLCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHR2YWxpZGF0ZUhlYWRlck5hbWUobmFtZSk7XG5cdFx0XHRcdFx0XHRcdHZhbGlkYXRlSGVhZGVyVmFsdWUobmFtZSwgU3RyaW5nKHZhbHVlKSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlW3BdLmNhbGwoXG5cdFx0XHRcdFx0XHRcdFx0cmVjZWl2ZXIsXG5cdFx0XHRcdFx0XHRcdFx0U3RyaW5nKG5hbWUpLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdFx0XHRcdFx0U3RyaW5nKHZhbHVlKVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGNhc2UgJ2RlbGV0ZSc6XG5cdFx0XHRcdFx0Y2FzZSAnaGFzJzpcblx0XHRcdFx0XHRjYXNlICdnZXRBbGwnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIG5hbWUgPT4ge1xuXHRcdFx0XHRcdFx0XHR2YWxpZGF0ZUhlYWRlck5hbWUobmFtZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlW3BdLmNhbGwoXG5cdFx0XHRcdFx0XHRcdFx0cmVjZWl2ZXIsXG5cdFx0XHRcdFx0XHRcdFx0U3RyaW5nKG5hbWUpLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRjYXNlICdrZXlzJzpcblx0XHRcdFx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRhcmdldC5zb3J0KCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBuZXcgU2V0KFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUua2V5cy5jYWxsKHRhcmdldCkpLmtleXMoKTtcblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcCwgcmVjZWl2ZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvKiBjOCBpZ25vcmUgbmV4dCAqL1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMpO1xuXHR9XG5cblx0Z2V0KG5hbWUpIHtcblx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLmdldEFsbChuYW1lKTtcblx0XHRpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IHZhbHVlID0gdmFsdWVzLmpvaW4oJywgJyk7XG5cdFx0aWYgKC9eY29udGVudC1lbmNvZGluZyQvaS50ZXN0KG5hbWUpKSB7XG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0Zm9yRWFjaChjYWxsYmFjaykge1xuXHRcdGZvciAoY29uc3QgbmFtZSBvZiB0aGlzLmtleXMoKSkge1xuXHRcdFx0Y2FsbGJhY2sodGhpcy5nZXQobmFtZSksIG5hbWUpO1xuXHRcdH1cblx0fVxuXG5cdCogdmFsdWVzKCkge1xuXHRcdGZvciAoY29uc3QgbmFtZSBvZiB0aGlzLmtleXMoKSkge1xuXHRcdFx0eWllbGQgdGhpcy5nZXQobmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEB0eXBlIHsoKSA9PiBJdGVyYWJsZUl0ZXJhdG9yPFtzdHJpbmcsIHN0cmluZ10+fVxuXHQgKi9cblx0KiBlbnRyaWVzKCkge1xuXHRcdGZvciAoY29uc3QgbmFtZSBvZiB0aGlzLmtleXMoKSkge1xuXHRcdFx0eWllbGQgW25hbWUsIHRoaXMuZ2V0KG5hbWUpXTtcblx0XHR9XG5cdH1cblxuXHRbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbnRyaWVzKCk7XG5cdH1cblxuXHQvKipcblx0ICogTm9kZS1mZXRjaCBub24tc3BlYyBtZXRob2Rcblx0ICogcmV0dXJuaW5nIGFsbCBoZWFkZXJzIGFuZCB0aGVpciB2YWx1ZXMgYXMgYXJyYXlcblx0ICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIHN0cmluZ1tdPn1cblx0ICovXG5cdHJhdygpIHtcblx0XHRyZXR1cm4gWy4uLnRoaXMua2V5cygpXS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG5cdFx0XHRyZXN1bHRba2V5XSA9IHRoaXMuZ2V0QWxsKGtleSk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sIHt9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGb3IgYmV0dGVyIGNvbnNvbGUubG9nKGhlYWRlcnMpIGFuZCBhbHNvIHRvIGNvbnZlcnQgSGVhZGVycyBpbnRvIE5vZGUuanMgUmVxdWVzdCBjb21wYXRpYmxlIGZvcm1hdFxuXHQgKi9cblx0W1N5bWJvbC5mb3IoJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJyldKCkge1xuXHRcdHJldHVybiBbLi4udGhpcy5rZXlzKCldLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0QWxsKGtleSk7XG5cdFx0XHQvLyBIdHRwLnJlcXVlc3QoKSBvbmx5IHN1cHBvcnRzIHN0cmluZyBhcyBIb3N0IGhlYWRlci5cblx0XHRcdC8vIFRoaXMgaGFjayBtYWtlcyBzcGVjaWZ5aW5nIGN1c3RvbSBIb3N0IGhlYWRlciBwb3NzaWJsZS5cblx0XHRcdGlmIChrZXkgPT09ICdob3N0Jykge1xuXHRcdFx0XHRyZXN1bHRba2V5XSA9IHZhbHVlc1swXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gdmFsdWVzLmxlbmd0aCA+IDEgPyB2YWx1ZXMgOiB2YWx1ZXNbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSwge30pO1xuXHR9XG59XG5cbi8qKlxuICogUmUtc2hhcGluZyBvYmplY3QgZm9yIFdlYiBJREwgdGVzdHNcbiAqIE9ubHkgbmVlZCB0byBkbyBpdCBmb3Igb3ZlcnJpZGRlbiBtZXRob2RzXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuXHRIZWFkZXJzLnByb3RvdHlwZSxcblx0WydnZXQnLCAnZW50cmllcycsICdmb3JFYWNoJywgJ3ZhbHVlcyddLnJlZHVjZSgocmVzdWx0LCBwcm9wZXJ0eSkgPT4ge1xuXHRcdHJlc3VsdFtwcm9wZXJ0eV0gPSB7ZW51bWVyYWJsZTogdHJ1ZX07XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSwge30pXG4pO1xuXG4vKipcbiAqIENyZWF0ZSBhIEhlYWRlcnMgb2JqZWN0IGZyb20gYW4gaHR0cC5JbmNvbWluZ01lc3NhZ2UucmF3SGVhZGVycywgaWdub3JpbmcgdGhvc2UgdGhhdCBkb1xuICogbm90IGNvbmZvcm0gdG8gSFRUUCBncmFtbWFyIHByb2R1Y3Rpb25zLlxuICogQHBhcmFtIHtpbXBvcnQoJ2h0dHAnKS5JbmNvbWluZ01lc3NhZ2VbJ3Jhd0hlYWRlcnMnXX0gaGVhZGVyc1xuICovXG5mdW5jdGlvbiBmcm9tUmF3SGVhZGVycyhoZWFkZXJzID0gW10pIHtcblx0cmV0dXJuIG5ldyBIZWFkZXJzKFxuXHRcdGhlYWRlcnNcblx0XHRcdC8vIFNwbGl0IGludG8gcGFpcnNcblx0XHRcdC5yZWR1Y2UoKHJlc3VsdCwgdmFsdWUsIGluZGV4LCBhcnJheSkgPT4ge1xuXHRcdFx0XHRpZiAoaW5kZXggJSAyID09PSAwKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2goYXJyYXkuc2xpY2UoaW5kZXgsIGluZGV4ICsgMikpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0sIFtdKVxuXHRcdFx0LmZpbHRlcigoW25hbWUsIHZhbHVlXSkgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhbGlkYXRlSGVhZGVyTmFtZShuYW1lKTtcblx0XHRcdFx0XHR2YWxpZGF0ZUhlYWRlclZhbHVlKG5hbWUsIFN0cmluZyh2YWx1ZSkpO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cblx0KTtcbn1cblxuY29uc3QgcmVkaXJlY3RTdGF0dXMgPSBuZXcgU2V0KFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF0pO1xuXG4vKipcbiAqIFJlZGlyZWN0IGNvZGUgbWF0Y2hpbmdcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY29kZSAtIFN0YXR1cyBjb2RlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5jb25zdCBpc1JlZGlyZWN0ID0gY29kZSA9PiB7XG5cdHJldHVybiByZWRpcmVjdFN0YXR1cy5oYXMoY29kZSk7XG59O1xuXG4vKipcbiAqIFJlc3BvbnNlLmpzXG4gKlxuICogUmVzcG9uc2UgY2xhc3MgcHJvdmlkZXMgY29udGVudCBkZWNvZGluZ1xuICovXG5cbmNvbnN0IElOVEVSTkFMUyQxID0gU3ltYm9sKCdSZXNwb25zZSBpbnRlcm5hbHMnKTtcblxuLyoqXG4gKiBSZXNwb25zZSBjbGFzc1xuICpcbiAqIEBwYXJhbSAgIFN0cmVhbSAgYm9keSAgUmVhZGFibGUgc3RyZWFtXG4gKiBAcGFyYW0gICBPYmplY3QgIG9wdHMgIFJlc3BvbnNlIG9wdGlvbnNcbiAqIEByZXR1cm4gIFZvaWRcbiAqL1xuY2xhc3MgUmVzcG9uc2UgZXh0ZW5kcyBCb2R5IHtcblx0Y29uc3RydWN0b3IoYm9keSA9IG51bGwsIG9wdGlvbnMgPSB7fSkge1xuXHRcdHN1cGVyKGJvZHksIG9wdGlvbnMpO1xuXG5cdFx0Y29uc3Qgc3RhdHVzID0gb3B0aW9ucy5zdGF0dXMgfHwgMjAwO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpO1xuXG5cdFx0aWYgKGJvZHkgIT09IG51bGwgJiYgIWhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSkge1xuXHRcdFx0Y29uc3QgY29udGVudFR5cGUgPSBleHRyYWN0Q29udGVudFR5cGUoYm9keSk7XG5cdFx0XHRpZiAoY29udGVudFR5cGUpIHtcblx0XHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMUyQxXSA9IHtcblx0XHRcdHVybDogb3B0aW9ucy51cmwsXG5cdFx0XHRzdGF0dXMsXG5cdFx0XHRzdGF0dXNUZXh0OiBvcHRpb25zLnN0YXR1c1RleHQgfHwgJycsXG5cdFx0XHRoZWFkZXJzLFxuXHRcdFx0Y291bnRlcjogb3B0aW9ucy5jb3VudGVyLFxuXHRcdFx0aGlnaFdhdGVyTWFyazogb3B0aW9ucy5oaWdoV2F0ZXJNYXJrXG5cdFx0fTtcblx0fVxuXG5cdGdldCB1cmwoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLnVybCB8fCAnJztcblx0fVxuXG5cdGdldCBzdGF0dXMoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLnN0YXR1cztcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSByZXByZXNlbnRpbmcgaWYgdGhlIHJlcXVlc3QgZW5kZWQgbm9ybWFsbHlcblx0ICovXG5cdGdldCBvaygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0uc3RhdHVzID49IDIwMCAmJiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXMgPCAzMDA7XG5cdH1cblxuXHRnZXQgcmVkaXJlY3RlZCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0uY291bnRlciA+IDA7XG5cdH1cblxuXHRnZXQgc3RhdHVzVGV4dCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0uc3RhdHVzVGV4dDtcblx0fVxuXG5cdGdldCBoZWFkZXJzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5oZWFkZXJzO1xuXHR9XG5cblx0Z2V0IGhpZ2hXYXRlck1hcmsoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLmhpZ2hXYXRlck1hcms7XG5cdH1cblxuXHQvKipcblx0ICogQ2xvbmUgdGhpcyByZXNwb25zZVxuXHQgKlxuXHQgKiBAcmV0dXJuICBSZXNwb25zZVxuXHQgKi9cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyBSZXNwb25zZShjbG9uZSh0aGlzLCB0aGlzLmhpZ2hXYXRlck1hcmspLCB7XG5cdFx0XHR1cmw6IHRoaXMudXJsLFxuXHRcdFx0c3RhdHVzOiB0aGlzLnN0YXR1cyxcblx0XHRcdHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcblx0XHRcdGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcblx0XHRcdG9rOiB0aGlzLm9rLFxuXHRcdFx0cmVkaXJlY3RlZDogdGhpcy5yZWRpcmVjdGVkLFxuXHRcdFx0c2l6ZTogdGhpcy5zaXplXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICBUaGUgVVJMIHRoYXQgdGhlIG5ldyByZXNwb25zZSBpcyB0byBvcmlnaW5hdGUgZnJvbS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1cyBBbiBvcHRpb25hbCBzdGF0dXMgY29kZSBmb3IgdGhlIHJlc3BvbnNlIChlLmcuLCAzMDIuKVxuXHQgKiBAcmV0dXJucyB7UmVzcG9uc2V9ICAgIEEgUmVzcG9uc2Ugb2JqZWN0LlxuXHQgKi9cblx0c3RhdGljIHJlZGlyZWN0KHVybCwgc3RhdHVzID0gMzAyKSB7XG5cdFx0aWYgKCFpc1JlZGlyZWN0KHN0YXR1cykpIHtcblx0XHRcdHRocm93IG5ldyBSYW5nZUVycm9yKCdGYWlsZWQgdG8gZXhlY3V0ZSBcInJlZGlyZWN0XCIgb24gXCJyZXNwb25zZVwiOiBJbnZhbGlkIHN0YXR1cyBjb2RlJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdGxvY2F0aW9uOiBuZXcgVVJMKHVybCkudG9TdHJpbmcoKVxuXHRcdFx0fSxcblx0XHRcdHN0YXR1c1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuXHRcdHJldHVybiAnUmVzcG9uc2UnO1xuXHR9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlc3BvbnNlLnByb3RvdHlwZSwge1xuXHR1cmw6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0c3RhdHVzOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdG9rOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdHJlZGlyZWN0ZWQ6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0c3RhdHVzVGV4dDoge2VudW1lcmFibGU6IHRydWV9LFxuXHRoZWFkZXJzOiB7ZW51bWVyYWJsZTogdHJ1ZX0sXG5cdGNsb25lOiB7ZW51bWVyYWJsZTogdHJ1ZX1cbn0pO1xuXG5jb25zdCBnZXRTZWFyY2ggPSBwYXJzZWRVUkwgPT4ge1xuXHRpZiAocGFyc2VkVVJMLnNlYXJjaCkge1xuXHRcdHJldHVybiBwYXJzZWRVUkwuc2VhcmNoO1xuXHR9XG5cblx0Y29uc3QgbGFzdE9mZnNldCA9IHBhcnNlZFVSTC5ocmVmLmxlbmd0aCAtIDE7XG5cdGNvbnN0IGhhc2ggPSBwYXJzZWRVUkwuaGFzaCB8fCAocGFyc2VkVVJMLmhyZWZbbGFzdE9mZnNldF0gPT09ICcjJyA/ICcjJyA6ICcnKTtcblx0cmV0dXJuIHBhcnNlZFVSTC5ocmVmW2xhc3RPZmZzZXQgLSBoYXNoLmxlbmd0aF0gPT09ICc/JyA/ICc/JyA6ICcnO1xufTtcblxuY29uc3QgSU5URVJOQUxTJDIgPSBTeW1ib2woJ1JlcXVlc3QgaW50ZXJuYWxzJyk7XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gaW5zdGFuY2Ugb2YgUmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gIHsqfSBvYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzUmVxdWVzdCA9IG9iamVjdCA9PiB7XG5cdHJldHVybiAoXG5cdFx0dHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcblx0XHR0eXBlb2Ygb2JqZWN0W0lOVEVSTkFMUyQyXSA9PT0gJ29iamVjdCdcblx0KTtcbn07XG5cbi8qKlxuICogUmVxdWVzdCBjbGFzc1xuICpcbiAqIEBwYXJhbSAgIE1peGVkICAgaW5wdXQgIFVybCBvciBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcGFyYW0gICBPYmplY3QgIGluaXQgICBDdXN0b20gb3B0aW9uc1xuICogQHJldHVybiAgVm9pZFxuICovXG5jbGFzcyBSZXF1ZXN0IGV4dGVuZHMgQm9keSB7XG5cdGNvbnN0cnVjdG9yKGlucHV0LCBpbml0ID0ge30pIHtcblx0XHRsZXQgcGFyc2VkVVJMO1xuXG5cdFx0Ly8gTm9ybWFsaXplIGlucHV0IGFuZCBmb3JjZSBVUkwgdG8gYmUgZW5jb2RlZCBhcyBVVEYtOCAoaHR0cHM6Ly9naXRodWIuY29tL25vZGUtZmV0Y2gvbm9kZS1mZXRjaC9pc3N1ZXMvMjQ1KVxuXHRcdGlmIChpc1JlcXVlc3QoaW5wdXQpKSB7XG5cdFx0XHRwYXJzZWRVUkwgPSBuZXcgVVJMKGlucHV0LnVybCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhcnNlZFVSTCA9IG5ldyBVUkwoaW5wdXQpO1xuXHRcdFx0aW5wdXQgPSB7fTtcblx0XHR9XG5cblx0XHRsZXQgbWV0aG9kID0gaW5pdC5tZXRob2QgfHwgaW5wdXQubWV0aG9kIHx8ICdHRVQnO1xuXHRcdG1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsIGVxZXFlcVxuXHRcdGlmICgoKGluaXQuYm9keSAhPSBudWxsIHx8IGlzUmVxdWVzdChpbnB1dCkpICYmIGlucHV0LmJvZHkgIT09IG51bGwpICYmXG5cdFx0XHQobWV0aG9kID09PSAnR0VUJyB8fCBtZXRob2QgPT09ICdIRUFEJykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlcXVlc3Qgd2l0aCBHRVQvSEVBRCBtZXRob2QgY2Fubm90IGhhdmUgYm9keScpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlucHV0Qm9keSA9IGluaXQuYm9keSA/XG5cdFx0XHRpbml0LmJvZHkgOlxuXHRcdFx0KGlzUmVxdWVzdChpbnB1dCkgJiYgaW5wdXQuYm9keSAhPT0gbnVsbCA/XG5cdFx0XHRcdGNsb25lKGlucHV0KSA6XG5cdFx0XHRcdG51bGwpO1xuXG5cdFx0c3VwZXIoaW5wdXRCb2R5LCB7XG5cdFx0XHRzaXplOiBpbml0LnNpemUgfHwgaW5wdXQuc2l6ZSB8fCAwXG5cdFx0fSk7XG5cblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5pdC5oZWFkZXJzIHx8IGlucHV0LmhlYWRlcnMgfHwge30pO1xuXG5cdFx0aWYgKGlucHV0Qm9keSAhPT0gbnVsbCAmJiAhaGVhZGVycy5oYXMoJ0NvbnRlbnQtVHlwZScpKSB7XG5cdFx0XHRjb25zdCBjb250ZW50VHlwZSA9IGV4dHJhY3RDb250ZW50VHlwZShpbnB1dEJvZHksIHRoaXMpO1xuXHRcdFx0aWYgKGNvbnRlbnRUeXBlKSB7XG5cdFx0XHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHNpZ25hbCA9IGlzUmVxdWVzdChpbnB1dCkgP1xuXHRcdFx0aW5wdXQuc2lnbmFsIDpcblx0XHRcdG51bGw7XG5cdFx0aWYgKCdzaWduYWwnIGluIGluaXQpIHtcblx0XHRcdHNpZ25hbCA9IGluaXQuc2lnbmFsO1xuXHRcdH1cblxuXHRcdGlmIChzaWduYWwgIT09IG51bGwgJiYgIWlzQWJvcnRTaWduYWwoc2lnbmFsKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgc2lnbmFsIHRvIGJlIGFuIGluc3RhbmNlb2YgQWJvcnRTaWduYWwnKTtcblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMUyQyXSA9IHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdHJlZGlyZWN0OiBpbml0LnJlZGlyZWN0IHx8IGlucHV0LnJlZGlyZWN0IHx8ICdmb2xsb3cnLFxuXHRcdFx0aGVhZGVycyxcblx0XHRcdHBhcnNlZFVSTCxcblx0XHRcdHNpZ25hbFxuXHRcdH07XG5cblx0XHQvLyBOb2RlLWZldGNoLW9ubHkgb3B0aW9uc1xuXHRcdHRoaXMuZm9sbG93ID0gaW5pdC5mb2xsb3cgPT09IHVuZGVmaW5lZCA/IChpbnB1dC5mb2xsb3cgPT09IHVuZGVmaW5lZCA/IDIwIDogaW5wdXQuZm9sbG93KSA6IGluaXQuZm9sbG93O1xuXHRcdHRoaXMuY29tcHJlc3MgPSBpbml0LmNvbXByZXNzID09PSB1bmRlZmluZWQgPyAoaW5wdXQuY29tcHJlc3MgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBpbnB1dC5jb21wcmVzcykgOiBpbml0LmNvbXByZXNzO1xuXHRcdHRoaXMuY291bnRlciA9IGluaXQuY291bnRlciB8fCBpbnB1dC5jb3VudGVyIHx8IDA7XG5cdFx0dGhpcy5hZ2VudCA9IGluaXQuYWdlbnQgfHwgaW5wdXQuYWdlbnQ7XG5cdFx0dGhpcy5oaWdoV2F0ZXJNYXJrID0gaW5pdC5oaWdoV2F0ZXJNYXJrIHx8IGlucHV0LmhpZ2hXYXRlck1hcmsgfHwgMTYzODQ7XG5cdFx0dGhpcy5pbnNlY3VyZUhUVFBQYXJzZXIgPSBpbml0Lmluc2VjdXJlSFRUUFBhcnNlciB8fCBpbnB1dC5pbnNlY3VyZUhUVFBQYXJzZXIgfHwgZmFsc2U7XG5cdH1cblxuXHRnZXQgbWV0aG9kKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5tZXRob2Q7XG5cdH1cblxuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiB1cmwuZm9ybWF0KHRoaXNbSU5URVJOQUxTJDJdLnBhcnNlZFVSTCk7XG5cdH1cblxuXHRnZXQgaGVhZGVycygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMl0uaGVhZGVycztcblx0fVxuXG5cdGdldCByZWRpcmVjdCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMl0ucmVkaXJlY3Q7XG5cdH1cblxuXHRnZXQgc2lnbmFsKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5zaWduYWw7XG5cdH1cblxuXHQvKipcblx0ICogQ2xvbmUgdGhpcyByZXF1ZXN0XG5cdCAqXG5cdCAqIEByZXR1cm4gIFJlcXVlc3Rcblx0ICovXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgUmVxdWVzdCh0aGlzKTtcblx0fVxuXG5cdGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcblx0XHRyZXR1cm4gJ1JlcXVlc3QnO1xuXHR9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlcXVlc3QucHJvdG90eXBlLCB7XG5cdG1ldGhvZDoge2VudW1lcmFibGU6IHRydWV9LFxuXHR1cmw6IHtlbnVtZXJhYmxlOiB0cnVlfSxcblx0aGVhZGVyczoge2VudW1lcmFibGU6IHRydWV9LFxuXHRyZWRpcmVjdDoge2VudW1lcmFibGU6IHRydWV9LFxuXHRjbG9uZToge2VudW1lcmFibGU6IHRydWV9LFxuXHRzaWduYWw6IHtlbnVtZXJhYmxlOiB0cnVlfVxufSk7XG5cbi8qKlxuICogQ29udmVydCBhIFJlcXVlc3QgdG8gTm9kZS5qcyBodHRwIHJlcXVlc3Qgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gICBSZXF1ZXN0ICBBIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEByZXR1cm4gIE9iamVjdCAgIFRoZSBvcHRpb25zIG9iamVjdCB0byBiZSBwYXNzZWQgdG8gaHR0cC5yZXF1ZXN0XG4gKi9cbmNvbnN0IGdldE5vZGVSZXF1ZXN0T3B0aW9ucyA9IHJlcXVlc3QgPT4ge1xuXHRjb25zdCB7cGFyc2VkVVJMfSA9IHJlcXVlc3RbSU5URVJOQUxTJDJdO1xuXHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMocmVxdWVzdFtJTlRFUk5BTFMkMl0uaGVhZGVycyk7XG5cblx0Ly8gRmV0Y2ggc3RlcCAxLjNcblx0aWYgKCFoZWFkZXJzLmhhcygnQWNjZXB0JykpIHtcblx0XHRoZWFkZXJzLnNldCgnQWNjZXB0JywgJyovKicpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrLW9yLWNhY2hlIGZldGNoIHN0ZXBzIDIuNC0yLjdcblx0bGV0IGNvbnRlbnRMZW5ndGhWYWx1ZSA9IG51bGw7XG5cdGlmIChyZXF1ZXN0LmJvZHkgPT09IG51bGwgJiYgL14ocG9zdHxwdXQpJC9pLnRlc3QocmVxdWVzdC5tZXRob2QpKSB7XG5cdFx0Y29udGVudExlbmd0aFZhbHVlID0gJzAnO1xuXHR9XG5cblx0aWYgKHJlcXVlc3QuYm9keSAhPT0gbnVsbCkge1xuXHRcdGNvbnN0IHRvdGFsQnl0ZXMgPSBnZXRUb3RhbEJ5dGVzKHJlcXVlc3QpO1xuXHRcdC8vIFNldCBDb250ZW50LUxlbmd0aCBpZiB0b3RhbEJ5dGVzIGlzIGEgbnVtYmVyICh0aGF0IGlzIG5vdCBOYU4pXG5cdFx0aWYgKHR5cGVvZiB0b3RhbEJ5dGVzID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzTmFOKHRvdGFsQnl0ZXMpKSB7XG5cdFx0XHRjb250ZW50TGVuZ3RoVmFsdWUgPSBTdHJpbmcodG90YWxCeXRlcyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGNvbnRlbnRMZW5ndGhWYWx1ZSkge1xuXHRcdGhlYWRlcnMuc2V0KCdDb250ZW50LUxlbmd0aCcsIGNvbnRlbnRMZW5ndGhWYWx1ZSk7XG5cdH1cblxuXHQvLyBIVFRQLW5ldHdvcmstb3ItY2FjaGUgZmV0Y2ggc3RlcCAyLjExXG5cdGlmICghaGVhZGVycy5oYXMoJ1VzZXItQWdlbnQnKSkge1xuXHRcdGhlYWRlcnMuc2V0KCdVc2VyLUFnZW50JywgJ25vZGUtZmV0Y2gnKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yay1vci1jYWNoZSBmZXRjaCBzdGVwIDIuMTVcblx0aWYgKHJlcXVlc3QuY29tcHJlc3MgJiYgIWhlYWRlcnMuaGFzKCdBY2NlcHQtRW5jb2RpbmcnKSkge1xuXHRcdGhlYWRlcnMuc2V0KCdBY2NlcHQtRW5jb2RpbmcnLCAnZ3ppcCxkZWZsYXRlLGJyJyk7XG5cdH1cblxuXHRsZXQge2FnZW50fSA9IHJlcXVlc3Q7XG5cdGlmICh0eXBlb2YgYWdlbnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRhZ2VudCA9IGFnZW50KHBhcnNlZFVSTCk7XG5cdH1cblxuXHRpZiAoIWhlYWRlcnMuaGFzKCdDb25uZWN0aW9uJykgJiYgIWFnZW50KSB7XG5cdFx0aGVhZGVycy5zZXQoJ0Nvbm5lY3Rpb24nLCAnY2xvc2UnKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yayBmZXRjaCBzdGVwIDQuMlxuXHQvLyBjaHVua2VkIGVuY29kaW5nIGlzIGhhbmRsZWQgYnkgTm9kZS5qc1xuXG5cdGNvbnN0IHNlYXJjaCA9IGdldFNlYXJjaChwYXJzZWRVUkwpO1xuXG5cdC8vIE1hbnVhbGx5IHNwcmVhZCB0aGUgVVJMIG9iamVjdCBpbnN0ZWFkIG9mIHNwcmVhZCBzeW50YXhcblx0Y29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG5cdFx0cGF0aDogcGFyc2VkVVJMLnBhdGhuYW1lICsgc2VhcmNoLFxuXHRcdHBhdGhuYW1lOiBwYXJzZWRVUkwucGF0aG5hbWUsXG5cdFx0aG9zdG5hbWU6IHBhcnNlZFVSTC5ob3N0bmFtZSxcblx0XHRwcm90b2NvbDogcGFyc2VkVVJMLnByb3RvY29sLFxuXHRcdHBvcnQ6IHBhcnNlZFVSTC5wb3J0LFxuXHRcdGhhc2g6IHBhcnNlZFVSTC5oYXNoLFxuXHRcdHNlYXJjaDogcGFyc2VkVVJMLnNlYXJjaCxcblx0XHRxdWVyeTogcGFyc2VkVVJMLnF1ZXJ5LFxuXHRcdGhyZWY6IHBhcnNlZFVSTC5ocmVmLFxuXHRcdG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG5cdFx0aGVhZGVyczogaGVhZGVyc1tTeW1ib2wuZm9yKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpXSgpLFxuXHRcdGluc2VjdXJlSFRUUFBhcnNlcjogcmVxdWVzdC5pbnNlY3VyZUhUVFBQYXJzZXIsXG5cdFx0YWdlbnRcblx0fTtcblxuXHRyZXR1cm4gcmVxdWVzdE9wdGlvbnM7XG59O1xuXG4vKipcbiAqIEFib3J0RXJyb3IgaW50ZXJmYWNlIGZvciBjYW5jZWxsZWQgcmVxdWVzdHNcbiAqL1xuY2xhc3MgQWJvcnRFcnJvciBleHRlbmRzIEZldGNoQmFzZUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgdHlwZSA9ICdhYm9ydGVkJykge1xuXHRcdHN1cGVyKG1lc3NhZ2UsIHR5cGUpO1xuXHR9XG59XG5cbi8qKlxuICogSW5kZXguanNcbiAqXG4gKiBhIHJlcXVlc3QgQVBJIGNvbXBhdGlibGUgd2l0aCB3aW5kb3cuZmV0Y2hcbiAqXG4gKiBBbGwgc3BlYyBhbGdvcml0aG0gc3RlcCBudW1iZXJzIGFyZSBiYXNlZCBvbiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy9jb21taXQtc25hcHNob3RzL2FlNzE2ODIyY2IzYTYxODQzMjI2Y2QwOTBlZWZjNjU4OTQ0NmMxZDIvLlxuICovXG5cbmNvbnN0IHN1cHBvcnRlZFNjaGVtYXMgPSBuZXcgU2V0KFsnZGF0YTonLCAnaHR0cDonLCAnaHR0cHM6J10pO1xuXG4vKipcbiAqIEZldGNoIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtICAge3N0cmluZyB8IFVSTCB8IGltcG9ydCgnLi9yZXF1ZXN0JykuZGVmYXVsdH0gdXJsIC0gQWJzb2x1dGUgdXJsIG9yIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEBwYXJhbSAgIHsqfSBbb3B0aW9uc19dIC0gRmV0Y2ggb3B0aW9uc1xuICogQHJldHVybiAge1Byb21pc2U8aW1wb3J0KCcuL3Jlc3BvbnNlJykuZGVmYXVsdD59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoKHVybCwgb3B0aW9uc18pIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHQvLyBCdWlsZCByZXF1ZXN0IG9iamVjdFxuXHRcdGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwsIG9wdGlvbnNfKTtcblx0XHRjb25zdCBvcHRpb25zID0gZ2V0Tm9kZVJlcXVlc3RPcHRpb25zKHJlcXVlc3QpO1xuXHRcdGlmICghc3VwcG9ydGVkU2NoZW1hcy5oYXMob3B0aW9ucy5wcm90b2NvbCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYG5vZGUtZmV0Y2ggY2Fubm90IGxvYWQgJHt1cmx9LiBVUkwgc2NoZW1lIFwiJHtvcHRpb25zLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpfVwiIGlzIG5vdCBzdXBwb3J0ZWQuYCk7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbnMucHJvdG9jb2wgPT09ICdkYXRhOicpIHtcblx0XHRcdGNvbnN0IGRhdGEgPSBkYXRhVXJpVG9CdWZmZXIocmVxdWVzdC51cmwpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoZGF0YSwge2hlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogZGF0YS50eXBlRnVsbH19KTtcblx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFdyYXAgaHR0cC5yZXF1ZXN0IGludG8gZmV0Y2hcblx0XHRjb25zdCBzZW5kID0gKG9wdGlvbnMucHJvdG9jb2wgPT09ICdodHRwczonID8gaHR0cHMgOiBodHRwKS5yZXF1ZXN0O1xuXHRcdGNvbnN0IHtzaWduYWx9ID0gcmVxdWVzdDtcblx0XHRsZXQgcmVzcG9uc2UgPSBudWxsO1xuXG5cdFx0Y29uc3QgYWJvcnQgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBlcnJvciA9IG5ldyBBYm9ydEVycm9yKCdUaGUgb3BlcmF0aW9uIHdhcyBhYm9ydGVkLicpO1xuXHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdGlmIChyZXF1ZXN0LmJvZHkgJiYgcmVxdWVzdC5ib2R5IGluc3RhbmNlb2YgU3RyZWFtLlJlYWRhYmxlKSB7XG5cdFx0XHRcdHJlcXVlc3QuYm9keS5kZXN0cm95KGVycm9yKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UuYm9keSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHJlc3BvbnNlLmJvZHkuZW1pdCgnZXJyb3InLCBlcnJvcik7XG5cdFx0fTtcblxuXHRcdGlmIChzaWduYWwgJiYgc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRcdGFib3J0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWJvcnRBbmRGaW5hbGl6ZSA9ICgpID0+IHtcblx0XHRcdGFib3J0KCk7XG5cdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdH07XG5cblx0XHQvLyBTZW5kIHJlcXVlc3Rcblx0XHRjb25zdCByZXF1ZXN0XyA9IHNlbmQob3B0aW9ucyk7XG5cblx0XHRpZiAoc2lnbmFsKSB7XG5cdFx0XHRzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEFuZEZpbmFsaXplKTtcblx0XHR9XG5cblx0XHRjb25zdCBmaW5hbGl6ZSA9ICgpID0+IHtcblx0XHRcdHJlcXVlc3RfLmFib3J0KCk7XG5cdFx0XHRpZiAoc2lnbmFsKSB7XG5cdFx0XHRcdHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXF1ZXN0Xy5vbignZXJyb3InLCBlcnIgPT4ge1xuXHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGByZXF1ZXN0IHRvICR7cmVxdWVzdC51cmx9IGZhaWxlZCwgcmVhc29uOiAke2Vyci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnIpKTtcblx0XHRcdGZpbmFsaXplKCk7XG5cdFx0fSk7XG5cblx0XHRyZXF1ZXN0Xy5vbigncmVzcG9uc2UnLCByZXNwb25zZV8gPT4ge1xuXHRcdFx0cmVxdWVzdF8uc2V0VGltZW91dCgwKTtcblx0XHRcdGNvbnN0IGhlYWRlcnMgPSBmcm9tUmF3SGVhZGVycyhyZXNwb25zZV8ucmF3SGVhZGVycyk7XG5cblx0XHRcdC8vIEhUVFAgZmV0Y2ggc3RlcCA1XG5cdFx0XHRpZiAoaXNSZWRpcmVjdChyZXNwb25zZV8uc3RhdHVzQ29kZSkpIHtcblx0XHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDUuMlxuXHRcdFx0XHRjb25zdCBsb2NhdGlvbiA9IGhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpO1xuXG5cdFx0XHRcdC8vIEhUVFAgZmV0Y2ggc3RlcCA1LjNcblx0XHRcdFx0Y29uc3QgbG9jYXRpb25VUkwgPSBsb2NhdGlvbiA9PT0gbnVsbCA/IG51bGwgOiBuZXcgVVJMKGxvY2F0aW9uLCByZXF1ZXN0LnVybCk7XG5cblx0XHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDUuNVxuXHRcdFx0XHRzd2l0Y2ggKHJlcXVlc3QucmVkaXJlY3QpIHtcblx0XHRcdFx0XHRjYXNlICdlcnJvcic6XG5cdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYHVyaSByZXF1ZXN0ZWQgcmVzcG9uZHMgd2l0aCBhIHJlZGlyZWN0LCByZWRpcmVjdCBtb2RlIGlzIHNldCB0byBlcnJvcjogJHtyZXF1ZXN0LnVybH1gLCAnbm8tcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdGNhc2UgJ21hbnVhbCc6XG5cdFx0XHRcdFx0XHQvLyBOb2RlLWZldGNoLXNwZWNpZmljIHN0ZXA6IG1ha2UgbWFudWFsIHJlZGlyZWN0IGEgYml0IGVhc2llciB0byB1c2UgYnkgc2V0dGluZyB0aGUgTG9jYXRpb24gaGVhZGVyIHZhbHVlIHRvIHRoZSByZXNvbHZlZCBVUkwuXG5cdFx0XHRcdFx0XHRpZiAobG9jYXRpb25VUkwgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGNvcnJ1cHRlZCBoZWFkZXJcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRoZWFkZXJzLnNldCgnTG9jYXRpb24nLCBsb2NhdGlvblVSTCk7XG5cdFx0XHRcdFx0XHRcdFx0LyogYzggaWdub3JlIG5leHQgMyAqL1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnZm9sbG93Jzoge1xuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDJcblx0XHRcdFx0XHRcdGlmIChsb2NhdGlvblVSTCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDVcblx0XHRcdFx0XHRcdGlmIChyZXF1ZXN0LmNvdW50ZXIgPj0gcmVxdWVzdC5mb2xsb3cpIHtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBtYXhpbXVtIHJlZGlyZWN0IHJlYWNoZWQgYXQ6ICR7cmVxdWVzdC51cmx9YCwgJ21heC1yZWRpcmVjdCcpKTtcblx0XHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgNiAoY291bnRlciBpbmNyZW1lbnQpXG5cdFx0XHRcdFx0XHQvLyBDcmVhdGUgYSBuZXcgUmVxdWVzdCBvYmplY3QuXG5cdFx0XHRcdFx0XHRjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcblx0XHRcdFx0XHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMocmVxdWVzdC5oZWFkZXJzKSxcblx0XHRcdFx0XHRcdFx0Zm9sbG93OiByZXF1ZXN0LmZvbGxvdyxcblx0XHRcdFx0XHRcdFx0Y291bnRlcjogcmVxdWVzdC5jb3VudGVyICsgMSxcblx0XHRcdFx0XHRcdFx0YWdlbnQ6IHJlcXVlc3QuYWdlbnQsXG5cdFx0XHRcdFx0XHRcdGNvbXByZXNzOiByZXF1ZXN0LmNvbXByZXNzLFxuXHRcdFx0XHRcdFx0XHRtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuXHRcdFx0XHRcdFx0XHRib2R5OiByZXF1ZXN0LmJvZHksXG5cdFx0XHRcdFx0XHRcdHNpZ25hbDogcmVxdWVzdC5zaWduYWwsXG5cdFx0XHRcdFx0XHRcdHNpemU6IHJlcXVlc3Quc2l6ZVxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDlcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZV8uc3RhdHVzQ29kZSAhPT0gMzAzICYmIHJlcXVlc3QuYm9keSAmJiBvcHRpb25zXy5ib2R5IGluc3RhbmNlb2YgU3RyZWFtLlJlYWRhYmxlKSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcignQ2Fubm90IGZvbGxvdyByZWRpcmVjdCB3aXRoIGJvZHkgYmVpbmcgYSByZWFkYWJsZSBzdHJlYW0nLCAndW5zdXBwb3J0ZWQtcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDExXG5cdFx0XHRcdFx0XHRpZiAocmVzcG9uc2VfLnN0YXR1c0NvZGUgPT09IDMwMyB8fCAoKHJlc3BvbnNlXy5zdGF0dXNDb2RlID09PSAzMDEgfHwgcmVzcG9uc2VfLnN0YXR1c0NvZGUgPT09IDMwMikgJiYgcmVxdWVzdC5tZXRob2QgPT09ICdQT1NUJykpIHtcblx0XHRcdFx0XHRcdFx0cmVxdWVzdE9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRpb25zLmJvZHkgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRpb25zLmhlYWRlcnMuZGVsZXRlKCdjb250ZW50LWxlbmd0aCcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMTVcblx0XHRcdFx0XHRcdHJlc29sdmUoZmV0Y2gobmV3IFJlcXVlc3QobG9jYXRpb25VUkwsIHJlcXVlc3RPcHRpb25zKSkpO1xuXHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gRG8gbm90aGluZ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFByZXBhcmUgcmVzcG9uc2Vcblx0XHRcdHJlc3BvbnNlXy5vbmNlKCdlbmQnLCAoKSA9PiB7XG5cdFx0XHRcdGlmIChzaWduYWwpIHtcblx0XHRcdFx0XHRzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEFuZEZpbmFsaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGxldCBib2R5ID0gU3RyZWFtLnBpcGVsaW5lKHJlc3BvbnNlXywgbmV3IFN0cmVhbS5QYXNzVGhyb3VnaCgpLCBlcnJvciA9PiB7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9KTtcblx0XHRcdC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvcHVsbC8yOTM3NlxuXHRcdFx0aWYgKHByb2Nlc3MudmVyc2lvbiA8ICd2MTIuMTAnKSB7XG5cdFx0XHRcdHJlc3BvbnNlXy5vbignYWJvcnRlZCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXNwb25zZU9wdGlvbnMgPSB7XG5cdFx0XHRcdHVybDogcmVxdWVzdC51cmwsXG5cdFx0XHRcdHN0YXR1czogcmVzcG9uc2VfLnN0YXR1c0NvZGUsXG5cdFx0XHRcdHN0YXR1c1RleHQ6IHJlc3BvbnNlXy5zdGF0dXNNZXNzYWdlLFxuXHRcdFx0XHRoZWFkZXJzLFxuXHRcdFx0XHRzaXplOiByZXF1ZXN0LnNpemUsXG5cdFx0XHRcdGNvdW50ZXI6IHJlcXVlc3QuY291bnRlcixcblx0XHRcdFx0aGlnaFdhdGVyTWFyazogcmVxdWVzdC5oaWdoV2F0ZXJNYXJrXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBIVFRQLW5ldHdvcmsgZmV0Y2ggc3RlcCAxMi4xLjEuM1xuXHRcdFx0Y29uc3QgY29kaW5ncyA9IGhlYWRlcnMuZ2V0KCdDb250ZW50LUVuY29kaW5nJyk7XG5cblx0XHRcdC8vIEhUVFAtbmV0d29yayBmZXRjaCBzdGVwIDEyLjEuMS40OiBoYW5kbGUgY29udGVudCBjb2RpbmdzXG5cblx0XHRcdC8vIGluIGZvbGxvd2luZyBzY2VuYXJpb3Mgd2UgaWdub3JlIGNvbXByZXNzaW9uIHN1cHBvcnRcblx0XHRcdC8vIDEuIGNvbXByZXNzaW9uIHN1cHBvcnQgaXMgZGlzYWJsZWRcblx0XHRcdC8vIDIuIEhFQUQgcmVxdWVzdFxuXHRcdFx0Ly8gMy4gbm8gQ29udGVudC1FbmNvZGluZyBoZWFkZXJcblx0XHRcdC8vIDQuIG5vIGNvbnRlbnQgcmVzcG9uc2UgKDIwNClcblx0XHRcdC8vIDUuIGNvbnRlbnQgbm90IG1vZGlmaWVkIHJlc3BvbnNlICgzMDQpXG5cdFx0XHRpZiAoIXJlcXVlc3QuY29tcHJlc3MgfHwgcmVxdWVzdC5tZXRob2QgPT09ICdIRUFEJyB8fCBjb2RpbmdzID09PSBudWxsIHx8IHJlc3BvbnNlXy5zdGF0dXNDb2RlID09PSAyMDQgfHwgcmVzcG9uc2VfLnN0YXR1c0NvZGUgPT09IDMwNCkge1xuXHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZU9wdGlvbnMpO1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3IgTm9kZSB2Nitcblx0XHRcdC8vIEJlIGxlc3Mgc3RyaWN0IHdoZW4gZGVjb2RpbmcgY29tcHJlc3NlZCByZXNwb25zZXMsIHNpbmNlIHNvbWV0aW1lc1xuXHRcdFx0Ly8gc2VydmVycyBzZW5kIHNsaWdodGx5IGludmFsaWQgcmVzcG9uc2VzIHRoYXQgYXJlIHN0aWxsIGFjY2VwdGVkXG5cdFx0XHQvLyBieSBjb21tb24gYnJvd3NlcnMuXG5cdFx0XHQvLyBBbHdheXMgdXNpbmcgWl9TWU5DX0ZMVVNIIGlzIHdoYXQgY1VSTCBkb2VzLlxuXHRcdFx0Y29uc3QgemxpYk9wdGlvbnMgPSB7XG5cdFx0XHRcdGZsdXNoOiB6bGliLlpfU1lOQ19GTFVTSCxcblx0XHRcdFx0ZmluaXNoRmx1c2g6IHpsaWIuWl9TWU5DX0ZMVVNIXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBGb3IgZ3ppcFxuXHRcdFx0aWYgKGNvZGluZ3MgPT09ICdnemlwJyB8fCBjb2RpbmdzID09PSAneC1nemlwJykge1xuXHRcdFx0XHRib2R5ID0gU3RyZWFtLnBpcGVsaW5lKGJvZHksIHpsaWIuY3JlYXRlR3VuemlwKHpsaWJPcHRpb25zKSwgZXJyb3IgPT4ge1xuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZU9wdGlvbnMpO1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3IgZGVmbGF0ZVxuXHRcdFx0aWYgKGNvZGluZ3MgPT09ICdkZWZsYXRlJyB8fCBjb2RpbmdzID09PSAneC1kZWZsYXRlJykge1xuXHRcdFx0XHQvLyBIYW5kbGUgdGhlIGluZmFtb3VzIHJhdyBkZWZsYXRlIHJlc3BvbnNlIGZyb20gb2xkIHNlcnZlcnNcblx0XHRcdFx0Ly8gYSBoYWNrIGZvciBvbGQgSUlTIGFuZCBBcGFjaGUgc2VydmVyc1xuXHRcdFx0XHRjb25zdCByYXcgPSBTdHJlYW0ucGlwZWxpbmUocmVzcG9uc2VfLCBuZXcgU3RyZWFtLlBhc3NUaHJvdWdoKCksIGVycm9yID0+IHtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmF3Lm9uY2UoJ2RhdGEnLCBjaHVuayA9PiB7XG5cdFx0XHRcdFx0Ly8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzc1MTk4Mjhcblx0XHRcdFx0XHRpZiAoKGNodW5rWzBdICYgMHgwRikgPT09IDB4MDgpIHtcblx0XHRcdFx0XHRcdGJvZHkgPSBTdHJlYW0ucGlwZWxpbmUoYm9keSwgemxpYi5jcmVhdGVJbmZsYXRlKCksIGVycm9yID0+IHtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRib2R5ID0gU3RyZWFtLnBpcGVsaW5lKGJvZHksIHpsaWIuY3JlYXRlSW5mbGF0ZVJhdygpLCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZU9wdGlvbnMpO1xuXHRcdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3IgYnJcblx0XHRcdGlmIChjb2RpbmdzID09PSAnYnInKSB7XG5cdFx0XHRcdGJvZHkgPSBTdHJlYW0ucGlwZWxpbmUoYm9keSwgemxpYi5jcmVhdGVCcm90bGlEZWNvbXByZXNzKCksIGVycm9yID0+IHtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2VPcHRpb25zKTtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT3RoZXJ3aXNlLCB1c2UgcmVzcG9uc2UgYXMtaXNcblx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlT3B0aW9ucyk7XG5cdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHR9KTtcblxuXHRcdHdyaXRlVG9TdHJlYW0ocmVxdWVzdF8sIHJlcXVlc3QpO1xuXHR9KTtcbn1cblxuZXhwb3J0cy5BYm9ydEVycm9yID0gQWJvcnRFcnJvcjtcbmV4cG9ydHMuRmV0Y2hFcnJvciA9IEZldGNoRXJyb3I7XG5leHBvcnRzLkhlYWRlcnMgPSBIZWFkZXJzO1xuZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydHMuUmVzcG9uc2UgPSBSZXNwb25zZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZldGNoO1xuZXhwb3J0cy5pc1JlZGlyZWN0ID0gaXNSZWRpcmVjdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmNqcy5tYXBcbiIsImZ1bmN0aW9uIG5vcm1hbGl6ZSAoc3RyKSB7XG4gIHJldHVybiBzdHJcbiAgICAgICAgICAucmVwbGFjZSgvW1xcL10rL2csICcvJylcbiAgICAgICAgICAucmVwbGFjZSgvXFwvXFw/L2csICc/JylcbiAgICAgICAgICAucmVwbGFjZSgvXFwvXFwjL2csICcjJylcbiAgICAgICAgICAucmVwbGFjZSgvXFw6XFwvL2csICc6Ly8nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBqb2luZWQgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkuam9pbignLycpO1xuICByZXR1cm4gbm9ybWFsaXplKGpvaW5lZCk7XG59OyIsIi8qKlxuICogd2ViLXN0cmVhbXMtcG9seWZpbGwgdjMuMC4xXG4gKi9cbi8vLyA8cmVmZXJlbmNlIGxpYj1cImVzMjAxNS5zeW1ib2xcIiAvPlxuY29uc3QgU3ltYm9sUG9seWZpbGwgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnID9cbiAgICBTeW1ib2wgOlxuICAgIGRlc2NyaXB0aW9uID0+IGBTeW1ib2woJHtkZXNjcmlwdGlvbn0pYDtcblxuLy8vIDxyZWZlcmVuY2UgbGliPVwiZG9tXCIgLz5cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gICAgLy8gZG8gbm90aGluZ1xufVxuZnVuY3Rpb24gZ2V0R2xvYmFscygpIHtcbiAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZ2xvYmFsO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuY29uc3QgZ2xvYmFscyA9IGdldEdsb2JhbHMoKTtcblxuZnVuY3Rpb24gdHlwZUlzT2JqZWN0KHgpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsKSB8fCB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn1cbmNvbnN0IHJldGhyb3dBc3NlcnRpb25FcnJvclJlamVjdGlvbiA9ICBub29wO1xuXG5jb25zdCBvcmlnaW5hbFByb21pc2UgPSBQcm9taXNlO1xuY29uc3Qgb3JpZ2luYWxQcm9taXNlVGhlbiA9IFByb21pc2UucHJvdG90eXBlLnRoZW47XG5jb25zdCBvcmlnaW5hbFByb21pc2VSZXNvbHZlID0gUHJvbWlzZS5yZXNvbHZlLmJpbmQob3JpZ2luYWxQcm9taXNlKTtcbmNvbnN0IG9yaWdpbmFsUHJvbWlzZVJlamVjdCA9IFByb21pc2UucmVqZWN0LmJpbmQob3JpZ2luYWxQcm9taXNlKTtcbmZ1bmN0aW9uIG5ld1Byb21pc2UoZXhlY3V0b3IpIHtcbiAgICByZXR1cm4gbmV3IG9yaWdpbmFsUHJvbWlzZShleGVjdXRvcik7XG59XG5mdW5jdGlvbiBwcm9taXNlUmVzb2x2ZWRXaXRoKHZhbHVlKSB7XG4gICAgcmV0dXJuIG9yaWdpbmFsUHJvbWlzZVJlc29sdmUodmFsdWUpO1xufVxuZnVuY3Rpb24gcHJvbWlzZVJlamVjdGVkV2l0aChyZWFzb24pIHtcbiAgICByZXR1cm4gb3JpZ2luYWxQcm9taXNlUmVqZWN0KHJlYXNvbik7XG59XG5mdW5jdGlvbiBQZXJmb3JtUHJvbWlzZVRoZW4ocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAvLyBUaGVyZSBkb2Vzbid0IGFwcGVhciB0byBiZSBhbnkgd2F5IHRvIGNvcnJlY3RseSBlbXVsYXRlIHRoZSBiZWhhdmlvdXIgZnJvbSBKYXZhU2NyaXB0LCBzbyB0aGlzIGlzIGp1c3QgYW5cbiAgICAvLyBhcHByb3hpbWF0aW9uLlxuICAgIHJldHVybiBvcmlnaW5hbFByb21pc2VUaGVuLmNhbGwocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xufVxuZnVuY3Rpb24gdXBvblByb21pc2UocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICBQZXJmb3JtUHJvbWlzZVRoZW4oUGVyZm9ybVByb21pc2VUaGVuKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSwgdW5kZWZpbmVkLCByZXRocm93QXNzZXJ0aW9uRXJyb3JSZWplY3Rpb24pO1xufVxuZnVuY3Rpb24gdXBvbkZ1bGZpbGxtZW50KHByb21pc2UsIG9uRnVsZmlsbGVkKSB7XG4gICAgdXBvblByb21pc2UocHJvbWlzZSwgb25GdWxmaWxsZWQpO1xufVxuZnVuY3Rpb24gdXBvblJlamVjdGlvbihwcm9taXNlLCBvblJlamVjdGVkKSB7XG4gICAgdXBvblByb21pc2UocHJvbWlzZSwgdW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybVByb21pc2VXaXRoKHByb21pc2UsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcikge1xuICAgIHJldHVybiBQZXJmb3JtUHJvbWlzZVRoZW4ocHJvbWlzZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbn1cbmZ1bmN0aW9uIHNldFByb21pc2VJc0hhbmRsZWRUb1RydWUocHJvbWlzZSkge1xuICAgIFBlcmZvcm1Qcm9taXNlVGhlbihwcm9taXNlLCB1bmRlZmluZWQsIHJldGhyb3dBc3NlcnRpb25FcnJvclJlamVjdGlvbik7XG59XG5jb25zdCBxdWV1ZU1pY3JvdGFzayA9ICgoKSA9PiB7XG4gICAgY29uc3QgZ2xvYmFsUXVldWVNaWNyb3Rhc2sgPSBnbG9iYWxzICYmIGdsb2JhbHMucXVldWVNaWNyb3Rhc2s7XG4gICAgaWYgKHR5cGVvZiBnbG9iYWxRdWV1ZU1pY3JvdGFzayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZ2xvYmFsUXVldWVNaWNyb3Rhc2s7XG4gICAgfVxuICAgIGNvbnN0IHJlc29sdmVkUHJvbWlzZSA9IHByb21pc2VSZXNvbHZlZFdpdGgodW5kZWZpbmVkKTtcbiAgICByZXR1cm4gKGZuKSA9PiBQZXJmb3JtUHJvbWlzZVRoZW4ocmVzb2x2ZWRQcm9taXNlLCBmbik7XG59KSgpO1xuZnVuY3Rpb24gcmVmbGVjdENhbGwoRiwgViwgYXJncykge1xuICAgIGlmICh0eXBlb2YgRiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoRiwgViwgYXJncyk7XG59XG5mdW5jdGlvbiBwcm9taXNlQ2FsbChGLCBWLCBhcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlZFdpdGgocmVmbGVjdENhbGwoRiwgViwgYXJncykpO1xuICAgIH1cbiAgICBjYXRjaCAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgodmFsdWUpO1xuICAgIH1cbn1cblxuLy8gT3JpZ2luYWwgZnJvbSBDaHJvbWl1bVxuLy8gaHR0cHM6Ly9jaHJvbWl1bS5nb29nbGVzb3VyY2UuY29tL2Nocm9taXVtL3NyYy8rLzBhZWU0NDM0YTRkYmE0MmE0MmFiYWVhOWJmYmMwY2QxOTZhNjNiYzEvdGhpcmRfcGFydHkvYmxpbmsvcmVuZGVyZXIvY29yZS9zdHJlYW1zL1NpbXBsZVF1ZXVlLmpzXG5jb25zdCBRVUVVRV9NQVhfQVJSQVlfU0laRSA9IDE2Mzg0O1xuLyoqXG4gKiBTaW1wbGUgcXVldWUgc3RydWN0dXJlLlxuICpcbiAqIEF2b2lkcyBzY2FsYWJpbGl0eSBpc3N1ZXMgd2l0aCB1c2luZyBhIHBhY2tlZCBhcnJheSBkaXJlY3RseSBieSB1c2luZ1xuICogbXVsdGlwbGUgYXJyYXlzIGluIGEgbGlua2VkIGxpc3QgYW5kIGtlZXBpbmcgdGhlIGFycmF5IHNpemUgYm91bmRlZC5cbiAqL1xuY2xhc3MgU2ltcGxlUXVldWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9jdXJzb3IgPSAwO1xuICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgLy8gX2Zyb250IGFuZCBfYmFjayBhcmUgYWx3YXlzIGRlZmluZWQuXG4gICAgICAgIHRoaXMuX2Zyb250ID0ge1xuICAgICAgICAgICAgX2VsZW1lbnRzOiBbXSxcbiAgICAgICAgICAgIF9uZXh0OiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fYmFjayA9IHRoaXMuX2Zyb250O1xuICAgICAgICAvLyBUaGUgY3Vyc29yIGlzIHVzZWQgdG8gYXZvaWQgY2FsbGluZyBBcnJheS5zaGlmdCgpLlxuICAgICAgICAvLyBJdCBjb250YWlucyB0aGUgaW5kZXggb2YgdGhlIGZyb250IGVsZW1lbnQgb2YgdGhlIGFycmF5IGluc2lkZSB0aGVcbiAgICAgICAgLy8gZnJvbnQtbW9zdCBub2RlLiBJdCBpcyBhbHdheXMgaW4gdGhlIHJhbmdlIFswLCBRVUVVRV9NQVhfQVJSQVlfU0laRSkuXG4gICAgICAgIHRoaXMuX2N1cnNvciA9IDA7XG4gICAgICAgIC8vIFdoZW4gdGhlcmUgaXMgb25seSBvbmUgbm9kZSwgc2l6ZSA9PT0gZWxlbWVudHMubGVuZ3RoIC0gY3Vyc29yLlxuICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICB9XG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuICAgIC8vIEZvciBleGNlcHRpb24gc2FmZXR5LCB0aGlzIG1ldGhvZCBpcyBzdHJ1Y3R1cmVkIGluIG9yZGVyOlxuICAgIC8vIDEuIFJlYWQgc3RhdGVcbiAgICAvLyAyLiBDYWxjdWxhdGUgcmVxdWlyZWQgc3RhdGUgbXV0YXRpb25zXG4gICAgLy8gMy4gUGVyZm9ybSBzdGF0ZSBtdXRhdGlvbnNcbiAgICBwdXNoKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgb2xkQmFjayA9IHRoaXMuX2JhY2s7XG4gICAgICAgIGxldCBuZXdCYWNrID0gb2xkQmFjaztcbiAgICAgICAgaWYgKG9sZEJhY2suX2VsZW1lbnRzLmxlbmd0aCA9PT0gUVVFVUVfTUFYX0FSUkFZX1NJWkUgLSAxKSB7XG4gICAgICAgICAgICBuZXdCYWNrID0ge1xuICAgICAgICAgICAgICAgIF9lbGVtZW50czogW10sXG4gICAgICAgICAgICAgICAgX25leHQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwdXNoKCkgaXMgdGhlIG11dGF0aW9uIG1vc3QgbGlrZWx5IHRvIHRocm93IGFuIGV4Y2VwdGlvbiwgc28gaXRcbiAgICAgICAgLy8gZ29lcyBmaXJzdC5cbiAgICAgICAgb2xkQmFjay5fZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgaWYgKG5ld0JhY2sgIT09IG9sZEJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2JhY2sgPSBuZXdCYWNrO1xuICAgICAgICAgICAgb2xkQmFjay5fbmV4dCA9IG5ld0JhY2s7XG4gICAgICAgIH1cbiAgICAgICAgKyt0aGlzLl9zaXplO1xuICAgIH1cbiAgICAvLyBMaWtlIHB1c2goKSwgc2hpZnQoKSBmb2xsb3dzIHRoZSByZWFkIC0+IGNhbGN1bGF0ZSAtPiBtdXRhdGUgcGF0dGVybiBmb3JcbiAgICAvLyBleGNlcHRpb24gc2FmZXR5LlxuICAgIHNoaWZ0KCkgeyAvLyBtdXN0IG5vdCBiZSBjYWxsZWQgb24gYW4gZW1wdHkgcXVldWVcbiAgICAgICAgY29uc3Qgb2xkRnJvbnQgPSB0aGlzLl9mcm9udDtcbiAgICAgICAgbGV0IG5ld0Zyb250ID0gb2xkRnJvbnQ7XG4gICAgICAgIGNvbnN0IG9sZEN1cnNvciA9IHRoaXMuX2N1cnNvcjtcbiAgICAgICAgbGV0IG5ld0N1cnNvciA9IG9sZEN1cnNvciArIDE7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gb2xkRnJvbnQuX2VsZW1lbnRzO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbb2xkQ3Vyc29yXTtcbiAgICAgICAgaWYgKG5ld0N1cnNvciA9PT0gUVVFVUVfTUFYX0FSUkFZX1NJWkUpIHtcbiAgICAgICAgICAgIG5ld0Zyb250ID0gb2xkRnJvbnQuX25leHQ7XG4gICAgICAgICAgICBuZXdDdXJzb3IgPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vIG11dGF0aW9ucyBiZWZvcmUgdGhpcyBwb2ludC5cbiAgICAgICAgLS10aGlzLl9zaXplO1xuICAgICAgICB0aGlzLl9jdXJzb3IgPSBuZXdDdXJzb3I7XG4gICAgICAgIGlmIChvbGRGcm9udCAhPT0gbmV3RnJvbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Zyb250ID0gbmV3RnJvbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUGVybWl0IHNoaWZ0ZWQgZWxlbWVudCB0byBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbiAgICAgICAgZWxlbWVudHNbb2xkQ3Vyc29yXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIC8vIFRoZSB0cmlja3kgdGhpbmcgYWJvdXQgZm9yRWFjaCgpIGlzIHRoYXQgaXQgY2FuIGJlIGNhbGxlZFxuICAgIC8vIHJlLWVudHJhbnRseS4gVGhlIHF1ZXVlIG1heSBiZSBtdXRhdGVkIGluc2lkZSB0aGUgY2FsbGJhY2suIEl0IGlzIGVhc3kgdG9cbiAgICAvLyBzZWUgdGhhdCBwdXNoKCkgd2l0aGluIHRoZSBjYWxsYmFjayBoYXMgbm8gbmVnYXRpdmUgZWZmZWN0cyBzaW5jZSB0aGUgZW5kXG4gICAgLy8gb2YgdGhlIHF1ZXVlIGlzIGNoZWNrZWQgZm9yIG9uIGV2ZXJ5IGl0ZXJhdGlvbi4gSWYgc2hpZnQoKSBpcyBjYWxsZWRcbiAgICAvLyByZXBlYXRlZGx5IHdpdGhpbiB0aGUgY2FsbGJhY2sgdGhlbiB0aGUgbmV4dCBpdGVyYXRpb24gbWF5IHJldHVybiBhblxuICAgIC8vIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiByZW1vdmVkLiBJbiB0aGlzIGNhc2UgdGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkXG4gICAgLy8gd2l0aCB1bmRlZmluZWQgdmFsdWVzIHVudGlsIHdlIGVpdGhlciBcImNhdGNoIHVwXCIgd2l0aCBlbGVtZW50cyB0aGF0IHN0aWxsXG4gICAgLy8gZXhpc3Qgb3IgcmVhY2ggdGhlIGJhY2sgb2YgdGhlIHF1ZXVlLlxuICAgIGZvckVhY2goY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLl9jdXJzb3I7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5fZnJvbnQ7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IG5vZGUuX2VsZW1lbnRzO1xuICAgICAgICB3aGlsZSAoaSAhPT0gZWxlbWVudHMubGVuZ3RoIHx8IG5vZGUuX25leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGkgPT09IGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLl9uZXh0O1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gbm9kZS5fZWxlbWVudHM7XG4gICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50c1tpXSk7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmV0dXJuIHRoZSBlbGVtZW50IHRoYXQgd291bGQgYmUgcmV0dXJuZWQgaWYgc2hpZnQoKSB3YXMgY2FsbGVkIG5vdyxcbiAgICAvLyB3aXRob3V0IG1vZGlmeWluZyB0aGUgcXVldWUuXG4gICAgcGVlaygpIHsgLy8gbXVzdCBub3QgYmUgY2FsbGVkIG9uIGFuIGVtcHR5IHF1ZXVlXG4gICAgICAgIGNvbnN0IGZyb250ID0gdGhpcy5fZnJvbnQ7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IHRoaXMuX2N1cnNvcjtcbiAgICAgICAgcmV0dXJuIGZyb250Ll9lbGVtZW50c1tjdXJzb3JdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljSW5pdGlhbGl6ZShyZWFkZXIsIHN0cmVhbSkge1xuICAgIHJlYWRlci5fb3duZXJSZWFkYWJsZVN0cmVhbSA9IHN0cmVhbTtcbiAgICBzdHJlYW0uX3JlYWRlciA9IHJlYWRlcjtcbiAgICBpZiAoc3RyZWFtLl9zdGF0ZSA9PT0gJ3JlYWRhYmxlJykge1xuICAgICAgICBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemUocmVhZGVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RyZWFtLl9zdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VJbml0aWFsaXplQXNSZXNvbHZlZChyZWFkZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VJbml0aWFsaXplQXNSZWplY3RlZChyZWFkZXIsIHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgIH1cbn1cbi8vIEEgY2xpZW50IG9mIFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlciBhbmQgUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyIG1heSB1c2UgdGhlc2UgZnVuY3Rpb25zIGRpcmVjdGx5IHRvIGJ5cGFzcyBzdGF0ZVxuLy8gY2hlY2suXG5mdW5jdGlvbiBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNDYW5jZWwocmVhZGVyLCByZWFzb24pIHtcbiAgICBjb25zdCBzdHJlYW0gPSByZWFkZXIuX293bmVyUmVhZGFibGVTdHJlYW07XG4gICAgcmV0dXJuIFJlYWRhYmxlU3RyZWFtQ2FuY2VsKHN0cmVhbSwgcmVhc29uKTtcbn1cbmZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY1JlbGVhc2UocmVhZGVyKSB7XG4gICAgaWYgKHJlYWRlci5fb3duZXJSZWFkYWJsZVN0cmVhbS5fc3RhdGUgPT09ICdyZWFkYWJsZScpIHtcbiAgICAgICAgZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VSZWplY3QocmVhZGVyLCBuZXcgVHlwZUVycm9yKGBSZWFkZXIgd2FzIHJlbGVhc2VkIGFuZCBjYW4gbm8gbG9uZ2VyIGJlIHVzZWQgdG8gbW9uaXRvciB0aGUgc3RyZWFtJ3MgY2xvc2VkbmVzc2ApKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlUmVzZXRUb1JlamVjdGVkKHJlYWRlciwgbmV3IFR5cGVFcnJvcihgUmVhZGVyIHdhcyByZWxlYXNlZCBhbmQgY2FuIG5vIGxvbmdlciBiZSB1c2VkIHRvIG1vbml0b3IgdGhlIHN0cmVhbSdzIGNsb3NlZG5lc3NgKSk7XG4gICAgfVxuICAgIHJlYWRlci5fb3duZXJSZWFkYWJsZVN0cmVhbS5fcmVhZGVyID0gdW5kZWZpbmVkO1xuICAgIHJlYWRlci5fb3duZXJSZWFkYWJsZVN0cmVhbSA9IHVuZGVmaW5lZDtcbn1cbi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSByZWFkZXJzLlxuZnVuY3Rpb24gcmVhZGVyTG9ja0V4Y2VwdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCAnICsgbmFtZSArICcgYSBzdHJlYW0gdXNpbmcgYSByZWxlYXNlZCByZWFkZXInKTtcbn1cbi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIuXG5mdW5jdGlvbiBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemUocmVhZGVyKSB7XG4gICAgcmVhZGVyLl9jbG9zZWRQcm9taXNlID0gbmV3UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlYWRlci5fY2xvc2VkUHJvbWlzZV9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgcmVhZGVyLl9jbG9zZWRQcm9taXNlX3JlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZUFzUmVqZWN0ZWQocmVhZGVyLCByZWFzb24pIHtcbiAgICBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemUocmVhZGVyKTtcbiAgICBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZVJlamVjdChyZWFkZXIsIHJlYXNvbik7XG59XG5mdW5jdGlvbiBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemVBc1Jlc29sdmVkKHJlYWRlcikge1xuICAgIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZShyZWFkZXIpO1xuICAgIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlUmVzb2x2ZShyZWFkZXIpO1xufVxuZnVuY3Rpb24gZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VSZWplY3QocmVhZGVyLCByZWFzb24pIHtcbiAgICBpZiAocmVhZGVyLl9jbG9zZWRQcm9taXNlX3JlamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0UHJvbWlzZUlzSGFuZGxlZFRvVHJ1ZShyZWFkZXIuX2Nsb3NlZFByb21pc2UpO1xuICAgIHJlYWRlci5fY2xvc2VkUHJvbWlzZV9yZWplY3QocmVhc29uKTtcbiAgICByZWFkZXIuX2Nsb3NlZFByb21pc2VfcmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICByZWFkZXIuX2Nsb3NlZFByb21pc2VfcmVqZWN0ID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VSZXNldFRvUmVqZWN0ZWQocmVhZGVyLCByZWFzb24pIHtcbiAgICBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemVBc1JlamVjdGVkKHJlYWRlciwgcmVhc29uKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlUmVzb2x2ZShyZWFkZXIpIHtcbiAgICBpZiAocmVhZGVyLl9jbG9zZWRQcm9taXNlX3Jlc29sdmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlYWRlci5fY2xvc2VkUHJvbWlzZV9yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgcmVhZGVyLl9jbG9zZWRQcm9taXNlX3Jlc29sdmUgPSB1bmRlZmluZWQ7XG4gICAgcmVhZGVyLl9jbG9zZWRQcm9taXNlX3JlamVjdCA9IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgQWJvcnRTdGVwcyA9IFN5bWJvbFBvbHlmaWxsKCdbW0Fib3J0U3RlcHNdXScpO1xuY29uc3QgRXJyb3JTdGVwcyA9IFN5bWJvbFBvbHlmaWxsKCdbW0Vycm9yU3RlcHNdXScpO1xuY29uc3QgQ2FuY2VsU3RlcHMgPSBTeW1ib2xQb2x5ZmlsbCgnW1tDYW5jZWxTdGVwc11dJyk7XG5jb25zdCBQdWxsU3RlcHMgPSBTeW1ib2xQb2x5ZmlsbCgnW1tQdWxsU3RlcHNdXScpO1xuXG4vLy8gPHJlZmVyZW5jZSBsaWI9XCJlczIwMTUuY29yZVwiIC8+XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9OdW1iZXIvaXNGaW5pdGUjUG9seWZpbGxcbmNvbnN0IE51bWJlcklzRmluaXRlID0gTnVtYmVyLmlzRmluaXRlIHx8IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh4KTtcbn07XG5cbi8vLyA8cmVmZXJlbmNlIGxpYj1cImVzMjAxNS5jb3JlXCIgLz5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvdHJ1bmMjUG9seWZpbGxcbmNvbnN0IE1hdGhUcnVuYyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiA8IDAgPyBNYXRoLmNlaWwodikgOiBNYXRoLmZsb29yKHYpO1xufTtcblxuLy8gaHR0cHM6Ly9oZXljYW0uZ2l0aHViLmlvL3dlYmlkbC8jaWRsLWRpY3Rpb25hcmllc1xuZnVuY3Rpb24gaXNEaWN0aW9uYXJ5KHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnIHx8IHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYXNzZXJ0RGljdGlvbmFyeShvYmosIGNvbnRleHQpIHtcbiAgICBpZiAob2JqICE9PSB1bmRlZmluZWQgJiYgIWlzRGljdGlvbmFyeShvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gaXMgbm90IGFuIG9iamVjdC5gKTtcbiAgICB9XG59XG4vLyBodHRwczovL2hleWNhbS5naXRodWIuaW8vd2ViaWRsLyNpZGwtY2FsbGJhY2stZnVuY3Rpb25zXG5mdW5jdGlvbiBhc3NlcnRGdW5jdGlvbih4LCBjb250ZXh0KSB7XG4gICAgaWYgKHR5cGVvZiB4ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gaXMgbm90IGEgZnVuY3Rpb24uYCk7XG4gICAgfVxufVxuLy8gaHR0cHM6Ly9oZXljYW0uZ2l0aHViLmlvL3dlYmlkbC8jaWRsLW9iamVjdFxuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiAodHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGwpIHx8IHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYXNzZXJ0T2JqZWN0KHgsIGNvbnRleHQpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHgpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gaXMgbm90IGFuIG9iamVjdC5gKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhc3NlcnRSZXF1aXJlZEFyZ3VtZW50KHgsIHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBQYXJhbWV0ZXIgJHtwb3NpdGlvbn0gaXMgcmVxdWlyZWQgaW4gJyR7Y29udGV4dH0nLmApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFzc2VydFJlcXVpcmVkRmllbGQoeCwgZmllbGQsIGNvbnRleHQpIHtcbiAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7ZmllbGR9IGlzIHJlcXVpcmVkIGluICcke2NvbnRleHR9Jy5gKTtcbiAgICB9XG59XG4vLyBodHRwczovL2hleWNhbS5naXRodWIuaW8vd2ViaWRsLyNpZGwtdW5yZXN0cmljdGVkLWRvdWJsZVxuZnVuY3Rpb24gY29udmVydFVucmVzdHJpY3RlZERvdWJsZSh2YWx1ZSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsdWUpO1xufVxuZnVuY3Rpb24gY2Vuc29yTmVnYXRpdmVaZXJvKHgpIHtcbiAgICByZXR1cm4geCA9PT0gMCA/IDAgOiB4O1xufVxuZnVuY3Rpb24gaW50ZWdlclBhcnQoeCkge1xuICAgIHJldHVybiBjZW5zb3JOZWdhdGl2ZVplcm8oTWF0aFRydW5jKHgpKTtcbn1cbi8vIGh0dHBzOi8vaGV5Y2FtLmdpdGh1Yi5pby93ZWJpZGwvI2lkbC11bnNpZ25lZC1sb25nLWxvbmdcbmZ1bmN0aW9uIGNvbnZlcnRVbnNpZ25lZExvbmdMb25nV2l0aEVuZm9yY2VSYW5nZSh2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGxvd2VyQm91bmQgPSAwO1xuICAgIGNvbnN0IHVwcGVyQm91bmQgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICBsZXQgeCA9IE51bWJlcih2YWx1ZSk7XG4gICAgeCA9IGNlbnNvck5lZ2F0aXZlWmVybyh4KTtcbiAgICBpZiAoIU51bWJlcklzRmluaXRlKHgpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gaXMgbm90IGEgZmluaXRlIG51bWJlcmApO1xuICAgIH1cbiAgICB4ID0gaW50ZWdlclBhcnQoeCk7XG4gICAgaWYgKHggPCBsb3dlckJvdW5kIHx8IHggPiB1cHBlckJvdW5kKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gaXMgb3V0c2lkZSB0aGUgYWNjZXB0ZWQgcmFuZ2Ugb2YgJHtsb3dlckJvdW5kfSB0byAke3VwcGVyQm91bmR9LCBpbmNsdXNpdmVgKTtcbiAgICB9XG4gICAgaWYgKCFOdW1iZXJJc0Zpbml0ZSh4KSB8fCB4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICAvLyBUT0RPIFVzZSBCaWdJbnQgaWYgc3VwcG9ydGVkP1xuICAgIC8vIGxldCB4QmlnSW50ID0gQmlnSW50KGludGVnZXJQYXJ0KHgpKTtcbiAgICAvLyB4QmlnSW50ID0gQmlnSW50LmFzVWludE4oNjQsIHhCaWdJbnQpO1xuICAgIC8vIHJldHVybiBOdW1iZXIoeEJpZ0ludCk7XG4gICAgcmV0dXJuIHg7XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlYWRhYmxlU3RyZWFtKHgsIGNvbnRleHQpIHtcbiAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW0oeCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtjb250ZXh0fSBpcyBub3QgYSBSZWFkYWJsZVN0cmVhbS5gKTtcbiAgICB9XG59XG5cbi8vIEFic3RyYWN0IG9wZXJhdGlvbnMgZm9yIHRoZSBSZWFkYWJsZVN0cmVhbS5cbmZ1bmN0aW9uIEFjcXVpcmVSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIoc3RyZWFtKSB7XG4gICAgcmV0dXJuIG5ldyBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIoc3RyZWFtKTtcbn1cbi8vIFJlYWRhYmxlU3RyZWFtIEFQSSBleHBvc2VkIGZvciBjb250cm9sbGVycy5cbmZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtQWRkUmVhZFJlcXVlc3Qoc3RyZWFtLCByZWFkUmVxdWVzdCkge1xuICAgIHN0cmVhbS5fcmVhZGVyLl9yZWFkUmVxdWVzdHMucHVzaChyZWFkUmVxdWVzdCk7XG59XG5mdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUZ1bGZpbGxSZWFkUmVxdWVzdChzdHJlYW0sIGNodW5rLCBkb25lKSB7XG4gICAgY29uc3QgcmVhZGVyID0gc3RyZWFtLl9yZWFkZXI7XG4gICAgY29uc3QgcmVhZFJlcXVlc3QgPSByZWFkZXIuX3JlYWRSZXF1ZXN0cy5zaGlmdCgpO1xuICAgIGlmIChkb25lKSB7XG4gICAgICAgIHJlYWRSZXF1ZXN0Ll9jbG9zZVN0ZXBzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZWFkUmVxdWVzdC5fY2h1bmtTdGVwcyhjaHVuayk7XG4gICAgfVxufVxuZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1HZXROdW1SZWFkUmVxdWVzdHMoc3RyZWFtKSB7XG4gICAgcmV0dXJuIHN0cmVhbS5fcmVhZGVyLl9yZWFkUmVxdWVzdHMubGVuZ3RoO1xufVxuZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1IYXNEZWZhdWx0UmVhZGVyKHN0cmVhbSkge1xuICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5fcmVhZGVyO1xuICAgIGlmIChyZWFkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIocmVhZGVyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBBIGRlZmF1bHQgcmVhZGVyIHZlbmRlZCBieSBhIHtAbGluayBSZWFkYWJsZVN0cmVhbX0uXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKHN0cmVhbSkge1xuICAgICAgICBhc3NlcnRSZXF1aXJlZEFyZ3VtZW50KHN0cmVhbSwgMSwgJ1JlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcicpO1xuICAgICAgICBhc3NlcnRSZWFkYWJsZVN0cmVhbShzdHJlYW0sICdGaXJzdCBwYXJhbWV0ZXInKTtcbiAgICAgICAgaWYgKElzUmVhZGFibGVTdHJlYW1Mb2NrZWQoc3RyZWFtKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcyBzdHJlYW0gaGFzIGFscmVhZHkgYmVlbiBsb2NrZWQgZm9yIGV4Y2x1c2l2ZSByZWFkaW5nIGJ5IGFub3RoZXIgcmVhZGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljSW5pdGlhbGl6ZSh0aGlzLCBzdHJlYW0pO1xuICAgICAgICB0aGlzLl9yZWFkUmVxdWVzdHMgPSBuZXcgU2ltcGxlUXVldWUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIGJlIGZ1bGZpbGxlZCB3aGVuIHRoZSBzdHJlYW0gYmVjb21lcyBjbG9zZWQsXG4gICAgICogb3IgcmVqZWN0ZWQgaWYgdGhlIHN0cmVhbSBldmVyIGVycm9ycyBvciB0aGUgcmVhZGVyJ3MgbG9jayBpcyByZWxlYXNlZCBiZWZvcmUgdGhlIHN0cmVhbSBmaW5pc2hlcyBjbG9zaW5nLlxuICAgICAqL1xuICAgIGdldCBjbG9zZWQoKSB7XG4gICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGRlZmF1bHRSZWFkZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdjbG9zZWQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb3NlZFByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIHRoZSByZWFkZXIgaXMgYWN0aXZlLCBiZWhhdmVzIHRoZSBzYW1lIGFzIHtAbGluayBSZWFkYWJsZVN0cmVhbS5jYW5jZWwgfCBzdHJlYW0uY2FuY2VsKHJlYXNvbil9LlxuICAgICAqL1xuICAgIGNhbmNlbChyZWFzb24gPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcih0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZGVmYXVsdFJlYWRlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2NhbmNlbCcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fb3duZXJSZWFkYWJsZVN0cmVhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChyZWFkZXJMb2NrRXhjZXB0aW9uKCdjYW5jZWwnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY0NhbmNlbCh0aGlzLCByZWFzb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGFsbG93cyBhY2Nlc3MgdG8gdGhlIG5leHQgY2h1bmsgZnJvbSB0aGUgc3RyZWFtJ3MgaW50ZXJuYWwgcXVldWUsIGlmIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIElmIHJlYWRpbmcgYSBjaHVuayBjYXVzZXMgdGhlIHF1ZXVlIHRvIGJlY29tZSBlbXB0eSwgbW9yZSBkYXRhIHdpbGwgYmUgcHVsbGVkIGZyb20gdGhlIHVuZGVybHlpbmcgc291cmNlLlxuICAgICAqL1xuICAgIHJlYWQoKSB7XG4gICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGRlZmF1bHRSZWFkZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdyZWFkJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9vd25lclJlYWRhYmxlU3RyZWFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHJlYWRlckxvY2tFeGNlcHRpb24oJ3JlYWQgZnJvbScpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzb2x2ZVByb21pc2U7XG4gICAgICAgIGxldCByZWplY3RQcm9taXNlO1xuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgICAgICAgICByZWplY3RQcm9taXNlID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVhZFJlcXVlc3QgPSB7XG4gICAgICAgICAgICBfY2h1bmtTdGVwczogY2h1bmsgPT4gcmVzb2x2ZVByb21pc2UoeyB2YWx1ZTogY2h1bmssIGRvbmU6IGZhbHNlIH0pLFxuICAgICAgICAgICAgX2Nsb3NlU3RlcHM6ICgpID0+IHJlc29sdmVQcm9taXNlKHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9KSxcbiAgICAgICAgICAgIF9lcnJvclN0ZXBzOiBlID0+IHJlamVjdFByb21pc2UoZSlcbiAgICAgICAgfTtcbiAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyUmVhZCh0aGlzLCByZWFkUmVxdWVzdCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyB0aGUgcmVhZGVyJ3MgbG9jayBvbiB0aGUgY29ycmVzcG9uZGluZyBzdHJlYW0uIEFmdGVyIHRoZSBsb2NrIGlzIHJlbGVhc2VkLCB0aGUgcmVhZGVyIGlzIG5vIGxvbmdlciBhY3RpdmUuXG4gICAgICogSWYgdGhlIGFzc29jaWF0ZWQgc3RyZWFtIGlzIGVycm9yZWQgd2hlbiB0aGUgbG9jayBpcyByZWxlYXNlZCwgdGhlIHJlYWRlciB3aWxsIGFwcGVhciBlcnJvcmVkIGluIHRoZSBzYW1lIHdheVxuICAgICAqIGZyb20gbm93IG9uOyBvdGhlcndpc2UsIHRoZSByZWFkZXIgd2lsbCBhcHBlYXIgY2xvc2VkLlxuICAgICAqXG4gICAgICogQSByZWFkZXIncyBsb2NrIGNhbm5vdCBiZSByZWxlYXNlZCB3aGlsZSBpdCBzdGlsbCBoYXMgYSBwZW5kaW5nIHJlYWQgcmVxdWVzdCwgaS5lLiwgaWYgYSBwcm9taXNlIHJldHVybmVkIGJ5XG4gICAgICogdGhlIHJlYWRlcidzIHtAbGluayBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIucmVhZCB8IHJlYWQoKX0gbWV0aG9kIGhhcyBub3QgeWV0IGJlZW4gc2V0dGxlZC4gQXR0ZW1wdGluZyB0b1xuICAgICAqIGRvIHNvIHdpbGwgdGhyb3cgYSBgVHlwZUVycm9yYCBhbmQgbGVhdmUgdGhlIHJlYWRlciBsb2NrZWQgdG8gdGhlIHN0cmVhbS5cbiAgICAgKi9cbiAgICByZWxlYXNlTG9jaygpIHtcbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdFJlYWRlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ3JlbGVhc2VMb2NrJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX293bmVyUmVhZGFibGVTdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9yZWFkUmVxdWVzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVHJpZWQgdG8gcmVsZWFzZSBhIHJlYWRlciBsb2NrIHdoZW4gdGhhdCByZWFkZXIgaGFzIHBlbmRpbmcgcmVhZCgpIGNhbGxzIHVuLXNldHRsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNSZWxlYXNlKHRoaXMpO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlci5wcm90b3R5cGUsIHtcbiAgICBjYW5jZWw6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIHJlYWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIHJlbGVhc2VMb2NrOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICBjbG9zZWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcbmlmICh0eXBlb2YgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlci5wcm90b3R5cGUsIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiAnUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyJyxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG59XG4vLyBBYnN0cmFjdCBvcGVyYXRpb25zIGZvciB0aGUgcmVhZGVycy5cbmZ1bmN0aW9uIElzUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyKHgpIHtcbiAgICBpZiAoIXR5cGVJc09iamVjdCh4KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgsICdfcmVhZFJlcXVlc3RzJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlclJlYWQocmVhZGVyLCByZWFkUmVxdWVzdCkge1xuICAgIGNvbnN0IHN0cmVhbSA9IHJlYWRlci5fb3duZXJSZWFkYWJsZVN0cmVhbTtcbiAgICBzdHJlYW0uX2Rpc3R1cmJlZCA9IHRydWU7XG4gICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIHJlYWRSZXF1ZXN0Ll9jbG9zZVN0ZXBzKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0cmVhbS5fc3RhdGUgPT09ICdlcnJvcmVkJykge1xuICAgICAgICByZWFkUmVxdWVzdC5fZXJyb3JTdGVwcyhzdHJlYW0uX3N0b3JlZEVycm9yKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0cmVhbS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyW1B1bGxTdGVwc10ocmVhZFJlcXVlc3QpO1xuICAgIH1cbn1cbi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIuXG5mdW5jdGlvbiBkZWZhdWx0UmVhZGVyQnJhbmRDaGVja0V4Y2VwdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlci5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyYCk7XG59XG5cbi8vLyA8cmVmZXJlbmNlIGxpYj1cImVzMjAxOC5hc3luY2l0ZXJhYmxlXCIgLz5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvbiAqL1xuY29uc3QgQXN5bmNJdGVyYXRvclByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXN5bmMgZnVuY3Rpb24qICgpIHsgfSkucHJvdG90eXBlKTtcblxuLy8vIDxyZWZlcmVuY2UgbGliPVwiZXMyMDE4LmFzeW5jaXRlcmFibGVcIiAvPlxuY2xhc3MgUmVhZGFibGVTdHJlYW1Bc3luY0l0ZXJhdG9ySW1wbCB7XG4gICAgY29uc3RydWN0b3IocmVhZGVyLCBwcmV2ZW50Q2FuY2VsKSB7XG4gICAgICAgIHRoaXMuX29uZ29pbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9pc0ZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JlYWRlciA9IHJlYWRlcjtcbiAgICAgICAgdGhpcy5fcHJldmVudENhbmNlbCA9IHByZXZlbnRDYW5jZWw7XG4gICAgfVxuICAgIG5leHQoKSB7XG4gICAgICAgIGNvbnN0IG5leHRTdGVwcyA9ICgpID0+IHRoaXMuX25leHRTdGVwcygpO1xuICAgICAgICB0aGlzLl9vbmdvaW5nUHJvbWlzZSA9IHRoaXMuX29uZ29pbmdQcm9taXNlID9cbiAgICAgICAgICAgIHRyYW5zZm9ybVByb21pc2VXaXRoKHRoaXMuX29uZ29pbmdQcm9taXNlLCBuZXh0U3RlcHMsIG5leHRTdGVwcykgOlxuICAgICAgICAgICAgbmV4dFN0ZXBzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbmdvaW5nUHJvbWlzZTtcbiAgICB9XG4gICAgcmV0dXJuKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJldHVyblN0ZXBzID0gKCkgPT4gdGhpcy5fcmV0dXJuU3RlcHModmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5fb25nb2luZ1Byb21pc2UgP1xuICAgICAgICAgICAgdHJhbnNmb3JtUHJvbWlzZVdpdGgodGhpcy5fb25nb2luZ1Byb21pc2UsIHJldHVyblN0ZXBzLCByZXR1cm5TdGVwcykgOlxuICAgICAgICAgICAgcmV0dXJuU3RlcHMoKTtcbiAgICB9XG4gICAgX25leHRTdGVwcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRmluaXNoZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IHRoaXMuX3JlYWRlcjtcbiAgICAgICAgaWYgKHJlYWRlci5fb3duZXJSZWFkYWJsZVN0cmVhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChyZWFkZXJMb2NrRXhjZXB0aW9uKCdpdGVyYXRlJykpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvbHZlUHJvbWlzZTtcbiAgICAgICAgbGV0IHJlamVjdFByb21pc2U7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHJlamVjdFByb21pc2UgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZWFkUmVxdWVzdCA9IHtcbiAgICAgICAgICAgIF9jaHVua1N0ZXBzOiBjaHVuayA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25nb2luZ1Byb21pc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBuZWVkcyB0byBiZSBkZWxheWVkIGJ5IG9uZSBtaWNyb3Rhc2ssIG90aGVyd2lzZSB3ZSBzdG9wIHB1bGxpbmcgdG9vIGVhcmx5IHdoaWNoIGJyZWFrcyBhIHRlc3QuXG4gICAgICAgICAgICAgICAgLy8gRklYTUUgSXMgdGhpcyBhIGJ1ZyBpbiB0aGUgc3BlY2lmaWNhdGlvbiwgb3IgaW4gdGhlIHRlc3Q/XG4gICAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4gcmVzb2x2ZVByb21pc2UoeyB2YWx1ZTogY2h1bmssIGRvbmU6IGZhbHNlIH0pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfY2xvc2VTdGVwczogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uZ29pbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzRmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY1JlbGVhc2UocmVhZGVyKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZSh7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2Vycm9yU3RlcHM6IHJlYXNvbiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25nb2luZ1Byb21pc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNGaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljUmVsZWFzZShyZWFkZXIpO1xuICAgICAgICAgICAgICAgIHJlamVjdFByb21pc2UocmVhc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyUmVhZChyZWFkZXIsIHJlYWRSZXF1ZXN0KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIF9yZXR1cm5TdGVwcyh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5faXNGaW5pc2hlZCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IHZhbHVlLCBkb25lOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzRmluaXNoZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCByZWFkZXIgPSB0aGlzLl9yZWFkZXI7XG4gICAgICAgIGlmIChyZWFkZXIuX293bmVyUmVhZGFibGVTdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgocmVhZGVyTG9ja0V4Y2VwdGlvbignZmluaXNoIGl0ZXJhdGluZycpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX3ByZXZlbnRDYW5jZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY0NhbmNlbChyZWFkZXIsIHZhbHVlKTtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY1JlbGVhc2UocmVhZGVyKTtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9taXNlV2l0aChyZXN1bHQsICgpID0+ICh7IHZhbHVlLCBkb25lOiB0cnVlIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNSZWxlYXNlKHJlYWRlcik7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHsgdmFsdWUsIGRvbmU6IHRydWUgfSk7XG4gICAgfVxufVxuY29uc3QgUmVhZGFibGVTdHJlYW1Bc3luY0l0ZXJhdG9yUHJvdG90eXBlID0ge1xuICAgIG5leHQoKSB7XG4gICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3IodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbUFzeW5jSXRlcmF0b3JCcmFuZENoZWNrRXhjZXB0aW9uKCduZXh0JykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9hc3luY0l0ZXJhdG9ySW1wbC5uZXh0KCk7XG4gICAgfSxcbiAgICByZXR1cm4odmFsdWUpIHtcbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvcih0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoc3RyZWFtQXN5bmNJdGVyYXRvckJyYW5kQ2hlY2tFeGNlcHRpb24oJ3JldHVybicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYXN5bmNJdGVyYXRvckltcGwucmV0dXJuKHZhbHVlKTtcbiAgICB9XG59O1xuaWYgKEFzeW5jSXRlcmF0b3JQcm90b3R5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3JQcm90b3R5cGUsIEFzeW5jSXRlcmF0b3JQcm90b3R5cGUpO1xufVxuLy8gQWJzdHJhY3Qgb3BlcmF0aW9ucyBmb3IgdGhlIFJlYWRhYmxlU3RyZWFtLlxuZnVuY3Rpb24gQWNxdWlyZVJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvcihzdHJlYW0sIHByZXZlbnRDYW5jZWwpIHtcbiAgICBjb25zdCByZWFkZXIgPSBBY3F1aXJlUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyKHN0cmVhbSk7XG4gICAgY29uc3QgaW1wbCA9IG5ldyBSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3JJbXBsKHJlYWRlciwgcHJldmVudENhbmNlbCk7XG4gICAgY29uc3QgaXRlcmF0b3IgPSBPYmplY3QuY3JlYXRlKFJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvclByb3RvdHlwZSk7XG4gICAgaXRlcmF0b3IuX2FzeW5jSXRlcmF0b3JJbXBsID0gaW1wbDtcbiAgICByZXR1cm4gaXRlcmF0b3I7XG59XG5mdW5jdGlvbiBJc1JlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvcih4KSB7XG4gICAgaWYgKCF0eXBlSXNPYmplY3QoeCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnX2FzeW5jSXRlcmF0b3JJbXBsJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBSZWFkYWJsZVN0cmVhbS5cbmZ1bmN0aW9uIHN0cmVhbUFzeW5jSXRlcmF0b3JCcmFuZENoZWNrRXhjZXB0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgUmVhZGFibGVTdHJlYW1Bc3luY0l0ZXJhdG9yLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIFJlYWRhYmxlU3RlYW1Bc3luY0l0ZXJhdG9yYCk7XG59XG5cbi8vLyA8cmVmZXJlbmNlIGxpYj1cImVzMjAxNS5jb3JlXCIgLz5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL051bWJlci9pc05hTiNQb2x5ZmlsbFxuY29uc3QgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gKHgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgcmV0dXJuIHggIT09IHg7XG59O1xuXG5mdW5jdGlvbiBJc0Zpbml0ZU5vbk5lZ2F0aXZlTnVtYmVyKHYpIHtcbiAgICBpZiAoIUlzTm9uTmVnYXRpdmVOdW1iZXIodikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodiA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIElzTm9uTmVnYXRpdmVOdW1iZXIodikge1xuICAgIGlmICh0eXBlb2YgdiAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoTnVtYmVySXNOYU4odikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodiA8IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gRGVxdWV1ZVZhbHVlKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHBhaXIgPSBjb250YWluZXIuX3F1ZXVlLnNoaWZ0KCk7XG4gICAgY29udGFpbmVyLl9xdWV1ZVRvdGFsU2l6ZSAtPSBwYWlyLnNpemU7XG4gICAgaWYgKGNvbnRhaW5lci5fcXVldWVUb3RhbFNpemUgPCAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5fcXVldWVUb3RhbFNpemUgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gcGFpci52YWx1ZTtcbn1cbmZ1bmN0aW9uIEVucXVldWVWYWx1ZVdpdGhTaXplKGNvbnRhaW5lciwgdmFsdWUsIHNpemUpIHtcbiAgICBzaXplID0gTnVtYmVyKHNpemUpO1xuICAgIGlmICghSXNGaW5pdGVOb25OZWdhdGl2ZU51bWJlcihzaXplKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignU2l6ZSBtdXN0IGJlIGEgZmluaXRlLCBub24tTmFOLCBub24tbmVnYXRpdmUgbnVtYmVyLicpO1xuICAgIH1cbiAgICBjb250YWluZXIuX3F1ZXVlLnB1c2goeyB2YWx1ZSwgc2l6ZSB9KTtcbiAgICBjb250YWluZXIuX3F1ZXVlVG90YWxTaXplICs9IHNpemU7XG59XG5mdW5jdGlvbiBQZWVrUXVldWVWYWx1ZShjb250YWluZXIpIHtcbiAgICBjb25zdCBwYWlyID0gY29udGFpbmVyLl9xdWV1ZS5wZWVrKCk7XG4gICAgcmV0dXJuIHBhaXIudmFsdWU7XG59XG5mdW5jdGlvbiBSZXNldFF1ZXVlKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5fcXVldWUgPSBuZXcgU2ltcGxlUXVldWUoKTtcbiAgICBjb250YWluZXIuX3F1ZXVlVG90YWxTaXplID0gMDtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlQXJyYXlGcm9tTGlzdChlbGVtZW50cykge1xuICAgIC8vIFdlIHVzZSBhcnJheXMgdG8gcmVwcmVzZW50IGxpc3RzLCBzbyB0aGlzIGlzIGJhc2ljYWxseSBhIG5vLW9wLlxuICAgIC8vIERvIGEgc2xpY2UgdGhvdWdoIGp1c3QgaW4gY2FzZSB3ZSBoYXBwZW4gdG8gZGVwZW5kIG9uIHRoZSB1bmlxdWUtbmVzcy5cbiAgICByZXR1cm4gZWxlbWVudHMuc2xpY2UoKTtcbn1cbmZ1bmN0aW9uIENvcHlEYXRhQmxvY2tCeXRlcyhkZXN0LCBkZXN0T2Zmc2V0LCBzcmMsIHNyY09mZnNldCwgbikge1xuICAgIG5ldyBVaW50OEFycmF5KGRlc3QpLnNldChuZXcgVWludDhBcnJheShzcmMsIHNyY09mZnNldCwgbiksIGRlc3RPZmZzZXQpO1xufVxuLy8gTm90IGltcGxlbWVudGVkIGNvcnJlY3RseVxuZnVuY3Rpb24gVHJhbnNmZXJBcnJheUJ1ZmZlcihPKSB7XG4gICAgcmV0dXJuIE87XG59XG4vLyBOb3QgaW1wbGVtZW50ZWQgY29ycmVjdGx5XG5mdW5jdGlvbiBJc0RldGFjaGVkQnVmZmVyKE8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQSBwdWxsLWludG8gcmVxdWVzdCBpbiBhIHtAbGluayBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyfS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIFJlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZpZXcgZm9yIHdyaXRpbmcgaW4gdG8sIG9yIGBudWxsYCBpZiB0aGUgQllPQiByZXF1ZXN0IGhhcyBhbHJlYWR5IGJlZW4gcmVzcG9uZGVkIHRvLlxuICAgICAqL1xuICAgIGdldCB2aWV3KCkge1xuICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdCh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgYnlvYlJlcXVlc3RCcmFuZENoZWNrRXhjZXB0aW9uKCd2aWV3Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXc7XG4gICAgfVxuICAgIHJlc3BvbmQoYnl0ZXNXcml0dGVuKSB7XG4gICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0KHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBieW9iUmVxdWVzdEJyYW5kQ2hlY2tFeGNlcHRpb24oJ3Jlc3BvbmQnKTtcbiAgICAgICAgfVxuICAgICAgICBhc3NlcnRSZXF1aXJlZEFyZ3VtZW50KGJ5dGVzV3JpdHRlbiwgMSwgJ3Jlc3BvbmQnKTtcbiAgICAgICAgYnl0ZXNXcml0dGVuID0gY29udmVydFVuc2lnbmVkTG9uZ0xvbmdXaXRoRW5mb3JjZVJhbmdlKGJ5dGVzV3JpdHRlbiwgJ0ZpcnN0IHBhcmFtZXRlcicpO1xuICAgICAgICBpZiAodGhpcy5fYXNzb2NpYXRlZFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcyBCWU9CIHJlcXVlc3QgaGFzIGJlZW4gaW52YWxpZGF0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSXNEZXRhY2hlZEJ1ZmZlcih0aGlzLl92aWV3LmJ1ZmZlcikpIDtcbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmQodGhpcy5fYXNzb2NpYXRlZFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIsIGJ5dGVzV3JpdHRlbik7XG4gICAgfVxuICAgIHJlc3BvbmRXaXRoTmV3Vmlldyh2aWV3KSB7XG4gICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0KHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBieW9iUmVxdWVzdEJyYW5kQ2hlY2tFeGNlcHRpb24oJ3Jlc3BvbmRXaXRoTmV3VmlldycpO1xuICAgICAgICB9XG4gICAgICAgIGFzc2VydFJlcXVpcmVkQXJndW1lbnQodmlldywgMSwgJ3Jlc3BvbmRXaXRoTmV3VmlldycpO1xuICAgICAgICBpZiAoIUFycmF5QnVmZmVyLmlzVmlldyh2aWV3KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IGNhbiBvbmx5IHJlc3BvbmQgd2l0aCBhcnJheSBidWZmZXIgdmlld3MnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlldy5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjaHVuayBtdXN0IGhhdmUgbm9uLXplcm8gYnl0ZUxlbmd0aCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aWV3LmJ1ZmZlci5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBjaHVuaydzIGJ1ZmZlciBtdXN0IGhhdmUgbm9uLXplcm8gYnl0ZUxlbmd0aGApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9hc3NvY2lhdGVkUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlzIEJZT0IgcmVxdWVzdCBoYXMgYmVlbiBpbnZhbGlkYXRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kV2l0aE5ld1ZpZXcodGhpcy5fYXNzb2NpYXRlZFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIsIHZpZXcpO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3QucHJvdG90eXBlLCB7XG4gICAgcmVzcG9uZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgcmVzcG9uZFdpdGhOZXdWaWV3OiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICB2aWV3OiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5pZiAodHlwZW9mIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0LnByb3RvdHlwZSwgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgdmFsdWU6ICdSZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0JyxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG59XG4vKipcbiAqIEFsbG93cyBjb250cm9sIG9mIGEge0BsaW5rIFJlYWRhYmxlU3RyZWFtIHwgcmVhZGFibGUgYnl0ZSBzdHJlYW19J3Mgc3RhdGUgYW5kIGludGVybmFsIHF1ZXVlLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lsbGVnYWwgY29uc3RydWN0b3InKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBCWU9CIHB1bGwgcmVxdWVzdCwgb3IgYG51bGxgIGlmIHRoZXJlIGlzbid0IG9uZS5cbiAgICAgKi9cbiAgICBnZXQgYnlvYlJlcXVlc3QoKSB7XG4gICAgICAgIGlmICghSXNSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBieXRlU3RyZWFtQ29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2J5b2JSZXF1ZXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2J5b2JSZXF1ZXN0ID09PSBudWxsICYmIHRoaXMuX3BlbmRpbmdQdWxsSW50b3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3REZXNjcmlwdG9yID0gdGhpcy5fcGVuZGluZ1B1bGxJbnRvcy5wZWVrKCk7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoZmlyc3REZXNjcmlwdG9yLmJ1ZmZlciwgZmlyc3REZXNjcmlwdG9yLmJ5dGVPZmZzZXQgKyBmaXJzdERlc2NyaXB0b3IuYnl0ZXNGaWxsZWQsIGZpcnN0RGVzY3JpcHRvci5ieXRlTGVuZ3RoIC0gZmlyc3REZXNjcmlwdG9yLmJ5dGVzRmlsbGVkKTtcbiAgICAgICAgICAgIGNvbnN0IGJ5b2JSZXF1ZXN0ID0gT2JqZWN0LmNyZWF0ZShSZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0LnByb3RvdHlwZSk7XG4gICAgICAgICAgICBTZXRVcFJlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3QoYnlvYlJlcXVlc3QsIHRoaXMsIHZpZXcpO1xuICAgICAgICAgICAgdGhpcy5fYnlvYlJlcXVlc3QgPSBieW9iUmVxdWVzdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYnlvYlJlcXVlc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRlc2lyZWQgc2l6ZSB0byBmaWxsIHRoZSBjb250cm9sbGVkIHN0cmVhbSdzIGludGVybmFsIHF1ZXVlLiBJdCBjYW4gYmUgbmVnYXRpdmUsIGlmIHRoZSBxdWV1ZSBpc1xuICAgICAqIG92ZXItZnVsbC4gQW4gdW5kZXJseWluZyBieXRlIHNvdXJjZSBvdWdodCB0byB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBkZXRlcm1pbmUgd2hlbiBhbmQgaG93IHRvIGFwcGx5IGJhY2twcmVzc3VyZS5cbiAgICAgKi9cbiAgICBnZXQgZGVzaXJlZFNpemUoKSB7XG4gICAgICAgIGlmICghSXNSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBieXRlU3RyZWFtQ29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2Rlc2lyZWRTaXplJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJHZXREZXNpcmVkU2l6ZSh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBjb250cm9sbGVkIHJlYWRhYmxlIHN0cmVhbS4gQ29uc3VtZXJzIHdpbGwgc3RpbGwgYmUgYWJsZSB0byByZWFkIGFueSBwcmV2aW91c2x5LWVucXVldWVkIGNodW5rcyBmcm9tXG4gICAgICogdGhlIHN0cmVhbSwgYnV0IG9uY2UgdGhvc2UgYXJlIHJlYWQsIHRoZSBzdHJlYW0gd2lsbCBiZWNvbWUgY2xvc2VkLlxuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICBpZiAoIUlzUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgYnl0ZVN0cmVhbUNvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdjbG9zZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jbG9zZVJlcXVlc3RlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHN0cmVhbSBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZDsgZG8gbm90IGNsb3NlIGl0IGFnYWluIScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSAhPT0gJ3JlYWRhYmxlJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIHN0cmVhbSAoaW4gJHtzdGF0ZX0gc3RhdGUpIGlzIG5vdCBpbiB0aGUgcmVhZGFibGUgc3RhdGUgYW5kIGNhbm5vdCBiZSBjbG9zZWRgKTtcbiAgICAgICAgfVxuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2xvc2UodGhpcyk7XG4gICAgfVxuICAgIGVucXVldWUoY2h1bmspIHtcbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IGJ5dGVTdHJlYW1Db250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbignZW5xdWV1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGFzc2VydFJlcXVpcmVkQXJndW1lbnQoY2h1bmssIDEsICdlbnF1ZXVlJyk7XG4gICAgICAgIGlmICghQXJyYXlCdWZmZXIuaXNWaWV3KGNodW5rKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2h1bmsgbXVzdCBiZSBhbiBhcnJheSBidWZmZXIgdmlldycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaHVuay5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjaHVuayBtdXN0IGhhdmUgbm9uLXplcm8gYnl0ZUxlbmd0aCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaHVuay5idWZmZXIuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgY2h1bmsncyBidWZmZXIgbXVzdCBoYXZlIG5vbi16ZXJvIGJ5dGVMZW5ndGhgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY2xvc2VSZXF1ZXN0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3N0cmVhbSBpcyBjbG9zZWQgb3IgZHJhaW5pbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW0uX3N0YXRlO1xuICAgICAgICBpZiAoc3RhdGUgIT09ICdyZWFkYWJsZScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBzdHJlYW0gKGluICR7c3RhdGV9IHN0YXRlKSBpcyBub3QgaW4gdGhlIHJlYWRhYmxlIHN0YXRlIGFuZCBjYW5ub3QgYmUgZW5xdWV1ZWQgdG9gKTtcbiAgICAgICAgfVxuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRW5xdWV1ZSh0aGlzLCBjaHVuayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVycm9ycyB0aGUgY29udHJvbGxlZCByZWFkYWJsZSBzdHJlYW0sIG1ha2luZyBhbGwgZnV0dXJlIGludGVyYWN0aW9ucyB3aXRoIGl0IGZhaWwgd2l0aCB0aGUgZ2l2ZW4gZXJyb3IgYGVgLlxuICAgICAqL1xuICAgIGVycm9yKGUgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IGJ5dGVTdHJlYW1Db250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbignZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IodGhpcywgZSk7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBbQ2FuY2VsU3RlcHNdKHJlYXNvbikge1xuICAgICAgICBpZiAodGhpcy5fcGVuZGluZ1B1bGxJbnRvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdERlc2NyaXB0b3IgPSB0aGlzLl9wZW5kaW5nUHVsbEludG9zLnBlZWsoKTtcbiAgICAgICAgICAgIGZpcnN0RGVzY3JpcHRvci5ieXRlc0ZpbGxlZCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgUmVzZXRRdWV1ZSh0aGlzKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fY2FuY2VsQWxnb3JpdGhtKHJlYXNvbik7XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDbGVhckFsZ29yaXRobXModGhpcyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBbUHVsbFN0ZXBzXShyZWFkUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtO1xuICAgICAgICBpZiAodGhpcy5fcXVldWVUb3RhbFNpemUgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuX3F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZVRvdGFsU2l6ZSAtPSBlbnRyeS5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckhhbmRsZVF1ZXVlRHJhaW4odGhpcyk7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoZW50cnkuYnVmZmVyLCBlbnRyeS5ieXRlT2Zmc2V0LCBlbnRyeS5ieXRlTGVuZ3RoKTtcbiAgICAgICAgICAgIHJlYWRSZXF1ZXN0Ll9jaHVua1N0ZXBzKHZpZXcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF1dG9BbGxvY2F0ZUNodW5rU2l6ZSA9IHRoaXMuX2F1dG9BbGxvY2F0ZUNodW5rU2l6ZTtcbiAgICAgICAgaWYgKGF1dG9BbGxvY2F0ZUNodW5rU2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgYnVmZmVyO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYXV0b0FsbG9jYXRlQ2h1bmtTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChidWZmZXJFKSB7XG4gICAgICAgICAgICAgICAgcmVhZFJlcXVlc3QuX2Vycm9yU3RlcHMoYnVmZmVyRSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHVsbEludG9EZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgICAgIGJ1ZmZlcixcbiAgICAgICAgICAgICAgICBieXRlT2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGF1dG9BbGxvY2F0ZUNodW5rU2l6ZSxcbiAgICAgICAgICAgICAgICBieXRlc0ZpbGxlZDogMCxcbiAgICAgICAgICAgICAgICBlbGVtZW50U2l6ZTogMSxcbiAgICAgICAgICAgICAgICB2aWV3Q29uc3RydWN0b3I6IFVpbnQ4QXJyYXksXG4gICAgICAgICAgICAgICAgcmVhZGVyVHlwZTogJ2RlZmF1bHQnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1B1bGxJbnRvcy5wdXNoKHB1bGxJbnRvRGVzY3JpcHRvcik7XG4gICAgICAgIH1cbiAgICAgICAgUmVhZGFibGVTdHJlYW1BZGRSZWFkUmVxdWVzdChzdHJlYW0sIHJlYWRSZXF1ZXN0KTtcbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQodGhpcyk7XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlci5wcm90b3R5cGUsIHtcbiAgICBjbG9zZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgZW5xdWV1ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgZXJyb3I6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIGJ5b2JSZXF1ZXN0OiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICBkZXNpcmVkU2l6ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuaWYgKHR5cGVvZiBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCcpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlci5wcm90b3R5cGUsIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiAnUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlcicsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xufVxuLy8gQWJzdHJhY3Qgb3BlcmF0aW9ucyBmb3IgdGhlIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIuXG5mdW5jdGlvbiBJc1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIoeCkge1xuICAgIGlmICghdHlwZUlzT2JqZWN0KHgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeCwgJ19jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIElzUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdCh4KSB7XG4gICAgaWYgKCF0eXBlSXNPYmplY3QoeCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnX2Fzc29jaWF0ZWRSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDYWxsUHVsbElmTmVlZGVkKGNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBzaG91bGRQdWxsID0gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclNob3VsZENhbGxQdWxsKGNvbnRyb2xsZXIpO1xuICAgIGlmICghc2hvdWxkUHVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb250cm9sbGVyLl9wdWxsaW5nKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuX3B1bGxBZ2FpbiA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29udHJvbGxlci5fcHVsbGluZyA9IHRydWU7XG4gICAgLy8gVE9ETzogVGVzdCBjb250cm9sbGVyIGFyZ3VtZW50XG4gICAgY29uc3QgcHVsbFByb21pc2UgPSBjb250cm9sbGVyLl9wdWxsQWxnb3JpdGhtKCk7XG4gICAgdXBvblByb21pc2UocHVsbFByb21pc2UsICgpID0+IHtcbiAgICAgICAgY29udHJvbGxlci5fcHVsbGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoY29udHJvbGxlci5fcHVsbEFnYWluKSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLl9wdWxsQWdhaW4gPSBmYWxzZTtcbiAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDYWxsUHVsbElmTmVlZGVkKGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgfSwgZSA9PiB7XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCBlKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDbGVhclBlbmRpbmdQdWxsSW50b3MoY29udHJvbGxlcikge1xuICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJJbnZhbGlkYXRlQllPQlJlcXVlc3QoY29udHJvbGxlcik7XG4gICAgY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcyA9IG5ldyBTaW1wbGVRdWV1ZSgpO1xufVxuZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNvbW1pdFB1bGxJbnRvRGVzY3JpcHRvcihzdHJlYW0sIHB1bGxJbnRvRGVzY3JpcHRvcikge1xuICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBmaWxsZWRWaWV3ID0gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNvbnZlcnRQdWxsSW50b0Rlc2NyaXB0b3IocHVsbEludG9EZXNjcmlwdG9yKTtcbiAgICBpZiAocHVsbEludG9EZXNjcmlwdG9yLnJlYWRlclR5cGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICBSZWFkYWJsZVN0cmVhbUZ1bGZpbGxSZWFkUmVxdWVzdChzdHJlYW0sIGZpbGxlZFZpZXcsIGRvbmUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgUmVhZGFibGVTdHJlYW1GdWxmaWxsUmVhZEludG9SZXF1ZXN0KHN0cmVhbSwgZmlsbGVkVmlldywgZG9uZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNvbnZlcnRQdWxsSW50b0Rlc2NyaXB0b3IocHVsbEludG9EZXNjcmlwdG9yKSB7XG4gICAgY29uc3QgYnl0ZXNGaWxsZWQgPSBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQ7XG4gICAgY29uc3QgZWxlbWVudFNpemUgPSBwdWxsSW50b0Rlc2NyaXB0b3IuZWxlbWVudFNpemU7XG4gICAgcmV0dXJuIG5ldyBwdWxsSW50b0Rlc2NyaXB0b3Iudmlld0NvbnN0cnVjdG9yKHB1bGxJbnRvRGVzY3JpcHRvci5idWZmZXIsIHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlT2Zmc2V0LCBieXRlc0ZpbGxlZCAvIGVsZW1lbnRTaXplKTtcbn1cbmZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFbnF1ZXVlQ2h1bmtUb1F1ZXVlKGNvbnRyb2xsZXIsIGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCkge1xuICAgIGNvbnRyb2xsZXIuX3F1ZXVlLnB1c2goeyBidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGggfSk7XG4gICAgY29udHJvbGxlci5fcXVldWVUb3RhbFNpemUgKz0gYnl0ZUxlbmd0aDtcbn1cbmZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJGaWxsUHVsbEludG9EZXNjcmlwdG9yRnJvbVF1ZXVlKGNvbnRyb2xsZXIsIHB1bGxJbnRvRGVzY3JpcHRvcikge1xuICAgIGNvbnN0IGVsZW1lbnRTaXplID0gcHVsbEludG9EZXNjcmlwdG9yLmVsZW1lbnRTaXplO1xuICAgIGNvbnN0IGN1cnJlbnRBbGlnbmVkQnl0ZXMgPSBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQgLSBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQgJSBlbGVtZW50U2l6ZTtcbiAgICBjb25zdCBtYXhCeXRlc1RvQ29weSA9IE1hdGgubWluKGNvbnRyb2xsZXIuX3F1ZXVlVG90YWxTaXplLCBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZUxlbmd0aCAtIHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlc0ZpbGxlZCk7XG4gICAgY29uc3QgbWF4Qnl0ZXNGaWxsZWQgPSBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQgKyBtYXhCeXRlc1RvQ29weTtcbiAgICBjb25zdCBtYXhBbGlnbmVkQnl0ZXMgPSBtYXhCeXRlc0ZpbGxlZCAtIG1heEJ5dGVzRmlsbGVkICUgZWxlbWVudFNpemU7XG4gICAgbGV0IHRvdGFsQnl0ZXNUb0NvcHlSZW1haW5pbmcgPSBtYXhCeXRlc1RvQ29weTtcbiAgICBsZXQgcmVhZHkgPSBmYWxzZTtcbiAgICBpZiAobWF4QWxpZ25lZEJ5dGVzID4gY3VycmVudEFsaWduZWRCeXRlcykge1xuICAgICAgICB0b3RhbEJ5dGVzVG9Db3B5UmVtYWluaW5nID0gbWF4QWxpZ25lZEJ5dGVzIC0gcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVzRmlsbGVkO1xuICAgICAgICByZWFkeSA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHF1ZXVlID0gY29udHJvbGxlci5fcXVldWU7XG4gICAgd2hpbGUgKHRvdGFsQnl0ZXNUb0NvcHlSZW1haW5pbmcgPiAwKSB7XG4gICAgICAgIGNvbnN0IGhlYWRPZlF1ZXVlID0gcXVldWUucGVlaygpO1xuICAgICAgICBjb25zdCBieXRlc1RvQ29weSA9IE1hdGgubWluKHRvdGFsQnl0ZXNUb0NvcHlSZW1haW5pbmcsIGhlYWRPZlF1ZXVlLmJ5dGVMZW5ndGgpO1xuICAgICAgICBjb25zdCBkZXN0U3RhcnQgPSBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZU9mZnNldCArIHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlc0ZpbGxlZDtcbiAgICAgICAgQ29weURhdGFCbG9ja0J5dGVzKHB1bGxJbnRvRGVzY3JpcHRvci5idWZmZXIsIGRlc3RTdGFydCwgaGVhZE9mUXVldWUuYnVmZmVyLCBoZWFkT2ZRdWV1ZS5ieXRlT2Zmc2V0LCBieXRlc1RvQ29weSk7XG4gICAgICAgIGlmIChoZWFkT2ZRdWV1ZS5ieXRlTGVuZ3RoID09PSBieXRlc1RvQ29weSkge1xuICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhlYWRPZlF1ZXVlLmJ5dGVPZmZzZXQgKz0gYnl0ZXNUb0NvcHk7XG4gICAgICAgICAgICBoZWFkT2ZRdWV1ZS5ieXRlTGVuZ3RoIC09IGJ5dGVzVG9Db3B5O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xsZXIuX3F1ZXVlVG90YWxTaXplIC09IGJ5dGVzVG9Db3B5O1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRmlsbEhlYWRQdWxsSW50b0Rlc2NyaXB0b3IoY29udHJvbGxlciwgYnl0ZXNUb0NvcHksIHB1bGxJbnRvRGVzY3JpcHRvcik7XG4gICAgICAgIHRvdGFsQnl0ZXNUb0NvcHlSZW1haW5pbmcgLT0gYnl0ZXNUb0NvcHk7XG4gICAgfVxuICAgIHJldHVybiByZWFkeTtcbn1cbmZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJGaWxsSGVhZFB1bGxJbnRvRGVzY3JpcHRvcihjb250cm9sbGVyLCBzaXplLCBwdWxsSW50b0Rlc2NyaXB0b3IpIHtcbiAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVySW52YWxpZGF0ZUJZT0JSZXF1ZXN0KGNvbnRyb2xsZXIpO1xuICAgIHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlc0ZpbGxlZCArPSBzaXplO1xufVxuZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckhhbmRsZVF1ZXVlRHJhaW4oY29udHJvbGxlcikge1xuICAgIGlmIChjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSA9PT0gMCAmJiBjb250cm9sbGVyLl9jbG9zZVJlcXVlc3RlZCkge1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKGNvbnRyb2xsZXIpO1xuICAgICAgICBSZWFkYWJsZVN0cmVhbUNsb3NlKGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoY29udHJvbGxlcik7XG4gICAgfVxufVxuZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckludmFsaWRhdGVCWU9CUmVxdWVzdChjb250cm9sbGVyKSB7XG4gICAgaWYgKGNvbnRyb2xsZXIuX2J5b2JSZXF1ZXN0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29udHJvbGxlci5fYnlvYlJlcXVlc3QuX2Fzc29jaWF0ZWRSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyID0gdW5kZWZpbmVkO1xuICAgIGNvbnRyb2xsZXIuX2J5b2JSZXF1ZXN0Ll92aWV3ID0gbnVsbDtcbiAgICBjb250cm9sbGVyLl9ieW9iUmVxdWVzdCA9IG51bGw7XG59XG5mdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUHJvY2Vzc1B1bGxJbnRvRGVzY3JpcHRvcnNVc2luZ1F1ZXVlKGNvbnRyb2xsZXIpIHtcbiAgICB3aGlsZSAoY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHB1bGxJbnRvRGVzY3JpcHRvciA9IGNvbnRyb2xsZXIuX3BlbmRpbmdQdWxsSW50b3MucGVlaygpO1xuICAgICAgICBpZiAoUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckZpbGxQdWxsSW50b0Rlc2NyaXB0b3JGcm9tUXVldWUoY29udHJvbGxlciwgcHVsbEludG9EZXNjcmlwdG9yKSkge1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclNoaWZ0UGVuZGluZ1B1bGxJbnRvKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNvbW1pdFB1bGxJbnRvRGVzY3JpcHRvcihjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtLCBwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclB1bGxJbnRvKGNvbnRyb2xsZXIsIHZpZXcsIHJlYWRJbnRvUmVxdWVzdCkge1xuICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW07XG4gICAgbGV0IGVsZW1lbnRTaXplID0gMTtcbiAgICBpZiAodmlldy5jb25zdHJ1Y3RvciAhPT0gRGF0YVZpZXcpIHtcbiAgICAgICAgZWxlbWVudFNpemUgPSB2aWV3LmNvbnN0cnVjdG9yLkJZVEVTX1BFUl9FTEVNRU5UO1xuICAgIH1cbiAgICBjb25zdCBjdG9yID0gdmlldy5jb25zdHJ1Y3RvcjtcbiAgICBjb25zdCBidWZmZXIgPSBUcmFuc2ZlckFycmF5QnVmZmVyKHZpZXcuYnVmZmVyKTtcbiAgICBjb25zdCBwdWxsSW50b0Rlc2NyaXB0b3IgPSB7XG4gICAgICAgIGJ1ZmZlcixcbiAgICAgICAgYnl0ZU9mZnNldDogdmlldy5ieXRlT2Zmc2V0LFxuICAgICAgICBieXRlTGVuZ3RoOiB2aWV3LmJ5dGVMZW5ndGgsXG4gICAgICAgIGJ5dGVzRmlsbGVkOiAwLFxuICAgICAgICBlbGVtZW50U2l6ZSxcbiAgICAgICAgdmlld0NvbnN0cnVjdG9yOiBjdG9yLFxuICAgICAgICByZWFkZXJUeXBlOiAnYnlvYidcbiAgICB9O1xuICAgIGlmIChjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5wdXNoKHB1bGxJbnRvRGVzY3JpcHRvcik7XG4gICAgICAgIC8vIE5vIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDYWxsUHVsbElmTmVlZGVkKCkgY2FsbCBzaW5jZTpcbiAgICAgICAgLy8gLSBObyBjaGFuZ2UgaGFwcGVucyBvbiBkZXNpcmVkU2l6ZVxuICAgICAgICAvLyAtIFRoZSBzb3VyY2UgaGFzIGFscmVhZHkgYmVlbiBub3RpZmllZCBvZiB0aGF0IHRoZXJlJ3MgYXQgbGVhc3QgMSBwZW5kaW5nIHJlYWQodmlldylcbiAgICAgICAgUmVhZGFibGVTdHJlYW1BZGRSZWFkSW50b1JlcXVlc3Qoc3RyZWFtLCByZWFkSW50b1JlcXVlc3QpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzdHJlYW0uX3N0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgICBjb25zdCBlbXB0eVZpZXcgPSBuZXcgY3RvcihwdWxsSW50b0Rlc2NyaXB0b3IuYnVmZmVyLCBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZU9mZnNldCwgMCk7XG4gICAgICAgIHJlYWRJbnRvUmVxdWVzdC5fY2xvc2VTdGVwcyhlbXB0eVZpZXcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSA+IDApIHtcbiAgICAgICAgaWYgKFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJGaWxsUHVsbEludG9EZXNjcmlwdG9yRnJvbVF1ZXVlKGNvbnRyb2xsZXIsIHB1bGxJbnRvRGVzY3JpcHRvcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGxlZFZpZXcgPSBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ29udmVydFB1bGxJbnRvRGVzY3JpcHRvcihwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckhhbmRsZVF1ZXVlRHJhaW4oY29udHJvbGxlcik7XG4gICAgICAgICAgICByZWFkSW50b1JlcXVlc3QuX2NodW5rU3RlcHMoZmlsbGVkVmlldyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRyb2xsZXIuX2Nsb3NlUmVxdWVzdGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IFR5cGVFcnJvcignSW5zdWZmaWNpZW50IGJ5dGVzIHRvIGZpbGwgZWxlbWVudHMgaW4gdGhlIGdpdmVuIGJ1ZmZlcicpO1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVycm9yKGNvbnRyb2xsZXIsIGUpO1xuICAgICAgICAgICAgcmVhZEludG9SZXF1ZXN0Ll9lcnJvclN0ZXBzKGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnRyb2xsZXIuX3BlbmRpbmdQdWxsSW50b3MucHVzaChwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgIFJlYWRhYmxlU3RyZWFtQWRkUmVhZEludG9SZXF1ZXN0KHN0cmVhbSwgcmVhZEludG9SZXF1ZXN0KTtcbiAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZChjb250cm9sbGVyKTtcbn1cbmZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kSW5DbG9zZWRTdGF0ZShjb250cm9sbGVyLCBmaXJzdERlc2NyaXB0b3IpIHtcbiAgICBmaXJzdERlc2NyaXB0b3IuYnVmZmVyID0gVHJhbnNmZXJBcnJheUJ1ZmZlcihmaXJzdERlc2NyaXB0b3IuYnVmZmVyKTtcbiAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtO1xuICAgIGlmIChSZWFkYWJsZVN0cmVhbUhhc0JZT0JSZWFkZXIoc3RyZWFtKSkge1xuICAgICAgICB3aGlsZSAoUmVhZGFibGVTdHJlYW1HZXROdW1SZWFkSW50b1JlcXVlc3RzKHN0cmVhbSkgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBwdWxsSW50b0Rlc2NyaXB0b3IgPSBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyU2hpZnRQZW5kaW5nUHVsbEludG8oY29udHJvbGxlcik7XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ29tbWl0UHVsbEludG9EZXNjcmlwdG9yKHN0cmVhbSwgcHVsbEludG9EZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kSW5SZWFkYWJsZVN0YXRlKGNvbnRyb2xsZXIsIGJ5dGVzV3JpdHRlbiwgcHVsbEludG9EZXNjcmlwdG9yKSB7XG4gICAgaWYgKHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlc0ZpbGxlZCArIGJ5dGVzV3JpdHRlbiA+IHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdieXRlc1dyaXR0ZW4gb3V0IG9mIHJhbmdlJyk7XG4gICAgfVxuICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJGaWxsSGVhZFB1bGxJbnRvRGVzY3JpcHRvcihjb250cm9sbGVyLCBieXRlc1dyaXR0ZW4sIHB1bGxJbnRvRGVzY3JpcHRvcik7XG4gICAgaWYgKHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlc0ZpbGxlZCA8IHB1bGxJbnRvRGVzY3JpcHRvci5lbGVtZW50U2l6ZSkge1xuICAgICAgICAvLyBUT0RPOiBGaWd1cmUgb3V0IHdoZXRoZXIgd2Ugc2hvdWxkIGRldGFjaCB0aGUgYnVmZmVyIG9yIG5vdCBoZXJlLlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJTaGlmdFBlbmRpbmdQdWxsSW50byhjb250cm9sbGVyKTtcbiAgICBjb25zdCByZW1haW5kZXJTaXplID0gcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVzRmlsbGVkICUgcHVsbEludG9EZXNjcmlwdG9yLmVsZW1lbnRTaXplO1xuICAgIGlmIChyZW1haW5kZXJTaXplID4gMCkge1xuICAgICAgICBjb25zdCBlbmQgPSBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZU9mZnNldCArIHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlc0ZpbGxlZDtcbiAgICAgICAgY29uc3QgcmVtYWluZGVyID0gcHVsbEludG9EZXNjcmlwdG9yLmJ1ZmZlci5zbGljZShlbmQgLSByZW1haW5kZXJTaXplLCBlbmQpO1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRW5xdWV1ZUNodW5rVG9RdWV1ZShjb250cm9sbGVyLCByZW1haW5kZXIsIDAsIHJlbWFpbmRlci5ieXRlTGVuZ3RoKTtcbiAgICB9XG4gICAgcHVsbEludG9EZXNjcmlwdG9yLmJ1ZmZlciA9IFRyYW5zZmVyQXJyYXlCdWZmZXIocHVsbEludG9EZXNjcmlwdG9yLmJ1ZmZlcik7XG4gICAgcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVzRmlsbGVkIC09IHJlbWFpbmRlclNpemU7XG4gICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNvbW1pdFB1bGxJbnRvRGVzY3JpcHRvcihjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtLCBwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJQcm9jZXNzUHVsbEludG9EZXNjcmlwdG9yc1VzaW5nUXVldWUoY29udHJvbGxlcik7XG59XG5mdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZEludGVybmFsKGNvbnRyb2xsZXIsIGJ5dGVzV3JpdHRlbikge1xuICAgIGNvbnN0IGZpcnN0RGVzY3JpcHRvciA9IGNvbnRyb2xsZXIuX3BlbmRpbmdQdWxsSW50b3MucGVlaygpO1xuICAgIGNvbnN0IHN0YXRlID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbS5fc3RhdGU7XG4gICAgaWYgKHN0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgICBpZiAoYnl0ZXNXcml0dGVuICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdieXRlc1dyaXR0ZW4gbXVzdCBiZSAwIHdoZW4gY2FsbGluZyByZXNwb25kKCkgb24gYSBjbG9zZWQgc3RyZWFtJyk7XG4gICAgICAgIH1cbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmRJbkNsb3NlZFN0YXRlKGNvbnRyb2xsZXIsIGZpcnN0RGVzY3JpcHRvcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZEluUmVhZGFibGVTdGF0ZShjb250cm9sbGVyLCBieXRlc1dyaXR0ZW4sIGZpcnN0RGVzY3JpcHRvcik7XG4gICAgfVxuICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDYWxsUHVsbElmTmVlZGVkKGNvbnRyb2xsZXIpO1xufVxuZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclNoaWZ0UGVuZGluZ1B1bGxJbnRvKGNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0gY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5zaGlmdCgpO1xuICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJJbnZhbGlkYXRlQllPQlJlcXVlc3QoY29udHJvbGxlcik7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG59XG5mdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyU2hvdWxkQ2FsbFB1bGwoY29udHJvbGxlcikge1xuICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW07XG4gICAgaWYgKHN0cmVhbS5fc3RhdGUgIT09ICdyZWFkYWJsZScpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoY29udHJvbGxlci5fY2xvc2VSZXF1ZXN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWNvbnRyb2xsZXIuX3N0YXJ0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoUmVhZGFibGVTdHJlYW1IYXNEZWZhdWx0UmVhZGVyKHN0cmVhbSkgJiYgUmVhZGFibGVTdHJlYW1HZXROdW1SZWFkUmVxdWVzdHMoc3RyZWFtKSA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChSZWFkYWJsZVN0cmVhbUhhc0JZT0JSZWFkZXIoc3RyZWFtKSAmJiBSZWFkYWJsZVN0cmVhbUdldE51bVJlYWRJbnRvUmVxdWVzdHMoc3RyZWFtKSA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGRlc2lyZWRTaXplID0gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckdldERlc2lyZWRTaXplKGNvbnRyb2xsZXIpO1xuICAgIGlmIChkZXNpcmVkU2l6ZSA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcikge1xuICAgIGNvbnRyb2xsZXIuX3B1bGxBbGdvcml0aG0gPSB1bmRlZmluZWQ7XG4gICAgY29udHJvbGxlci5fY2FuY2VsQWxnb3JpdGhtID0gdW5kZWZpbmVkO1xufVxuLy8gQSBjbGllbnQgb2YgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlciBtYXkgdXNlIHRoZXNlIGZ1bmN0aW9ucyBkaXJlY3RseSB0byBieXBhc3Mgc3RhdGUgY2hlY2suXG5mdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2xvc2UoY29udHJvbGxlcikge1xuICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW07XG4gICAgaWYgKGNvbnRyb2xsZXIuX2Nsb3NlUmVxdWVzdGVkIHx8IHN0cmVhbS5fc3RhdGUgIT09ICdyZWFkYWJsZScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY29udHJvbGxlci5fcXVldWVUb3RhbFNpemUgPiAwKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuX2Nsb3NlUmVxdWVzdGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0UGVuZGluZ1B1bGxJbnRvID0gY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5wZWVrKCk7XG4gICAgICAgIGlmIChmaXJzdFBlbmRpbmdQdWxsSW50by5ieXRlc0ZpbGxlZCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgVHlwZUVycm9yKCdJbnN1ZmZpY2llbnQgYnl0ZXMgdG8gZmlsbCBlbGVtZW50cyBpbiB0aGUgZ2l2ZW4gYnVmZmVyJyk7XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgZSk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcik7XG4gICAgUmVhZGFibGVTdHJlYW1DbG9zZShzdHJlYW0pO1xufVxuZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVucXVldWUoY29udHJvbGxlciwgY2h1bmspIHtcbiAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtO1xuICAgIGlmIChjb250cm9sbGVyLl9jbG9zZVJlcXVlc3RlZCB8fCBzdHJlYW0uX3N0YXRlICE9PSAncmVhZGFibGUnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYnVmZmVyID0gY2h1bmsuYnVmZmVyO1xuICAgIGNvbnN0IGJ5dGVPZmZzZXQgPSBjaHVuay5ieXRlT2Zmc2V0O1xuICAgIGNvbnN0IGJ5dGVMZW5ndGggPSBjaHVuay5ieXRlTGVuZ3RoO1xuICAgIGNvbnN0IHRyYW5zZmVycmVkQnVmZmVyID0gVHJhbnNmZXJBcnJheUJ1ZmZlcihidWZmZXIpO1xuICAgIGlmIChSZWFkYWJsZVN0cmVhbUhhc0RlZmF1bHRSZWFkZXIoc3RyZWFtKSkge1xuICAgICAgICBpZiAoUmVhZGFibGVTdHJlYW1HZXROdW1SZWFkUmVxdWVzdHMoc3RyZWFtKSA9PT0gMCkge1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVucXVldWVDaHVua1RvUXVldWUoY29udHJvbGxlciwgdHJhbnNmZXJyZWRCdWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmZXJyZWRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkodHJhbnNmZXJyZWRCdWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1GdWxmaWxsUmVhZFJlcXVlc3Qoc3RyZWFtLCB0cmFuc2ZlcnJlZFZpZXcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChSZWFkYWJsZVN0cmVhbUhhc0JZT0JSZWFkZXIoc3RyZWFtKSkge1xuICAgICAgICAvLyBUT0RPOiBJZGVhbGx5IGluIHRoaXMgYnJhbmNoIGRldGFjaGluZyBzaG91bGQgaGFwcGVuIG9ubHkgaWYgdGhlIGJ1ZmZlciBpcyBub3QgY29uc3VtZWQgZnVsbHkuXG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFbnF1ZXVlQ2h1bmtUb1F1ZXVlKGNvbnRyb2xsZXIsIHRyYW5zZmVycmVkQnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclByb2Nlc3NQdWxsSW50b0Rlc2NyaXB0b3JzVXNpbmdRdWV1ZShjb250cm9sbGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFbnF1ZXVlQ2h1bmtUb1F1ZXVlKGNvbnRyb2xsZXIsIHRyYW5zZmVycmVkQnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcbiAgICB9XG4gICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoY29udHJvbGxlcik7XG59XG5mdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgZSkge1xuICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW07XG4gICAgaWYgKHN0cmVhbS5fc3RhdGUgIT09ICdyZWFkYWJsZScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2xlYXJQZW5kaW5nUHVsbEludG9zKGNvbnRyb2xsZXIpO1xuICAgIFJlc2V0UXVldWUoY29udHJvbGxlcik7XG4gICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKTtcbiAgICBSZWFkYWJsZVN0cmVhbUVycm9yKHN0cmVhbSwgZSk7XG59XG5mdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyR2V0RGVzaXJlZFNpemUoY29udHJvbGxlcikge1xuICAgIGNvbnN0IHN0YXRlID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbS5fc3RhdGU7XG4gICAgaWYgKHN0YXRlID09PSAnZXJyb3JlZCcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChzdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sbGVyLl9zdHJhdGVneUhXTSAtIGNvbnRyb2xsZXIuX3F1ZXVlVG90YWxTaXplO1xufVxuZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmQoY29udHJvbGxlciwgYnl0ZXNXcml0dGVuKSB7XG4gICAgYnl0ZXNXcml0dGVuID0gTnVtYmVyKGJ5dGVzV3JpdHRlbik7XG4gICAgaWYgKCFJc0Zpbml0ZU5vbk5lZ2F0aXZlTnVtYmVyKGJ5dGVzV3JpdHRlbikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2J5dGVzV3JpdHRlbiBtdXN0IGJlIGEgZmluaXRlJyk7XG4gICAgfVxuICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kSW50ZXJuYWwoY29udHJvbGxlciwgYnl0ZXNXcml0dGVuKTtcbn1cbmZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kV2l0aE5ld1ZpZXcoY29udHJvbGxlciwgdmlldykge1xuICAgIGNvbnN0IGZpcnN0RGVzY3JpcHRvciA9IGNvbnRyb2xsZXIuX3BlbmRpbmdQdWxsSW50b3MucGVlaygpO1xuICAgIGlmIChmaXJzdERlc2NyaXB0b3IuYnl0ZU9mZnNldCArIGZpcnN0RGVzY3JpcHRvci5ieXRlc0ZpbGxlZCAhPT0gdmlldy5ieXRlT2Zmc2V0KSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgcmVnaW9uIHNwZWNpZmllZCBieSB2aWV3IGRvZXMgbm90IG1hdGNoIGJ5b2JSZXF1ZXN0Jyk7XG4gICAgfVxuICAgIGlmIChmaXJzdERlc2NyaXB0b3IuYnl0ZUxlbmd0aCAhPT0gdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgYnVmZmVyIG9mIHZpZXcgaGFzIGRpZmZlcmVudCBjYXBhY2l0eSB0aGFuIGJ5b2JSZXF1ZXN0Jyk7XG4gICAgfVxuICAgIGZpcnN0RGVzY3JpcHRvci5idWZmZXIgPSB2aWV3LmJ1ZmZlcjtcbiAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZEludGVybmFsKGNvbnRyb2xsZXIsIHZpZXcuYnl0ZUxlbmd0aCk7XG59XG5mdW5jdGlvbiBTZXRVcFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIoc3RyZWFtLCBjb250cm9sbGVyLCBzdGFydEFsZ29yaXRobSwgcHVsbEFsZ29yaXRobSwgY2FuY2VsQWxnb3JpdGhtLCBoaWdoV2F0ZXJNYXJrLCBhdXRvQWxsb2NhdGVDaHVua1NpemUpIHtcbiAgICBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtID0gc3RyZWFtO1xuICAgIGNvbnRyb2xsZXIuX3B1bGxBZ2FpbiA9IGZhbHNlO1xuICAgIGNvbnRyb2xsZXIuX3B1bGxpbmcgPSBmYWxzZTtcbiAgICBjb250cm9sbGVyLl9ieW9iUmVxdWVzdCA9IG51bGw7XG4gICAgLy8gTmVlZCB0byBzZXQgdGhlIHNsb3RzIHNvIHRoYXQgdGhlIGFzc2VydCBkb2Vzbid0IGZpcmUuIEluIHRoZSBzcGVjIHRoZSBzbG90cyBhbHJlYWR5IGV4aXN0IGltcGxpY2l0bHkuXG4gICAgY29udHJvbGxlci5fcXVldWUgPSBjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICBSZXNldFF1ZXVlKGNvbnRyb2xsZXIpO1xuICAgIGNvbnRyb2xsZXIuX2Nsb3NlUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgY29udHJvbGxlci5fc3RhcnRlZCA9IGZhbHNlO1xuICAgIGNvbnRyb2xsZXIuX3N0cmF0ZWd5SFdNID0gaGlnaFdhdGVyTWFyaztcbiAgICBjb250cm9sbGVyLl9wdWxsQWxnb3JpdGhtID0gcHVsbEFsZ29yaXRobTtcbiAgICBjb250cm9sbGVyLl9jYW5jZWxBbGdvcml0aG0gPSBjYW5jZWxBbGdvcml0aG07XG4gICAgY29udHJvbGxlci5fYXV0b0FsbG9jYXRlQ2h1bmtTaXplID0gYXV0b0FsbG9jYXRlQ2h1bmtTaXplO1xuICAgIGNvbnRyb2xsZXIuX3BlbmRpbmdQdWxsSW50b3MgPSBuZXcgU2ltcGxlUXVldWUoKTtcbiAgICBzdHJlYW0uX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgY29uc3Qgc3RhcnRSZXN1bHQgPSBzdGFydEFsZ29yaXRobSgpO1xuICAgIHVwb25Qcm9taXNlKHByb21pc2VSZXNvbHZlZFdpdGgoc3RhcnRSZXN1bHQpLCAoKSA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXIuX3N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICB9LCByID0+IHtcbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVycm9yKGNvbnRyb2xsZXIsIHIpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gU2V0VXBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRnJvbVVuZGVybHlpbmdTb3VyY2Uoc3RyZWFtLCB1bmRlcmx5aW5nQnl0ZVNvdXJjZSwgaGlnaFdhdGVyTWFyaykge1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIucHJvdG90eXBlKTtcbiAgICBsZXQgc3RhcnRBbGdvcml0aG0gPSAoKSA9PiB1bmRlZmluZWQ7XG4gICAgbGV0IHB1bGxBbGdvcml0aG0gPSAoKSA9PiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgbGV0IGNhbmNlbEFsZ29yaXRobSA9ICgpID0+IHByb21pc2VSZXNvbHZlZFdpdGgodW5kZWZpbmVkKTtcbiAgICBpZiAodW5kZXJseWluZ0J5dGVTb3VyY2Uuc3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGFydEFsZ29yaXRobSA9ICgpID0+IHVuZGVybHlpbmdCeXRlU291cmNlLnN0YXJ0KGNvbnRyb2xsZXIpO1xuICAgIH1cbiAgICBpZiAodW5kZXJseWluZ0J5dGVTb3VyY2UucHVsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHB1bGxBbGdvcml0aG0gPSAoKSA9PiB1bmRlcmx5aW5nQnl0ZVNvdXJjZS5wdWxsKGNvbnRyb2xsZXIpO1xuICAgIH1cbiAgICBpZiAodW5kZXJseWluZ0J5dGVTb3VyY2UuY2FuY2VsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2FuY2VsQWxnb3JpdGhtID0gcmVhc29uID0+IHVuZGVybHlpbmdCeXRlU291cmNlLmNhbmNlbChyZWFzb24pO1xuICAgIH1cbiAgICBjb25zdCBhdXRvQWxsb2NhdGVDaHVua1NpemUgPSB1bmRlcmx5aW5nQnl0ZVNvdXJjZS5hdXRvQWxsb2NhdGVDaHVua1NpemU7XG4gICAgU2V0VXBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyKHN0cmVhbSwgY29udHJvbGxlciwgc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbEFsZ29yaXRobSwgaGlnaFdhdGVyTWFyaywgYXV0b0FsbG9jYXRlQ2h1bmtTaXplKTtcbn1cbmZ1bmN0aW9uIFNldFVwUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdChyZXF1ZXN0LCBjb250cm9sbGVyLCB2aWV3KSB7XG4gICAgcmVxdWVzdC5fYXNzb2NpYXRlZFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHJlcXVlc3QuX3ZpZXcgPSB2aWV3O1xufVxuLy8gSGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIFJlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3QuXG5mdW5jdGlvbiBieW9iUmVxdWVzdEJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKGBSZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0LnByb3RvdHlwZS4ke25hbWV9IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBSZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0YCk7XG59XG4vLyBIZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlci5cbmZ1bmN0aW9uIGJ5dGVTdHJlYW1Db250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIucHJvdG90eXBlLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJgKTtcbn1cblxuLy8gQWJzdHJhY3Qgb3BlcmF0aW9ucyBmb3IgdGhlIFJlYWRhYmxlU3RyZWFtLlxuZnVuY3Rpb24gQWNxdWlyZVJlYWRhYmxlU3RyZWFtQllPQlJlYWRlcihzdHJlYW0pIHtcbiAgICByZXR1cm4gbmV3IFJlYWRhYmxlU3RyZWFtQllPQlJlYWRlcihzdHJlYW0pO1xufVxuLy8gUmVhZGFibGVTdHJlYW0gQVBJIGV4cG9zZWQgZm9yIGNvbnRyb2xsZXJzLlxuZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1BZGRSZWFkSW50b1JlcXVlc3Qoc3RyZWFtLCByZWFkSW50b1JlcXVlc3QpIHtcbiAgICBzdHJlYW0uX3JlYWRlci5fcmVhZEludG9SZXF1ZXN0cy5wdXNoKHJlYWRJbnRvUmVxdWVzdCk7XG59XG5mdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUZ1bGZpbGxSZWFkSW50b1JlcXVlc3Qoc3RyZWFtLCBjaHVuaywgZG9uZSkge1xuICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5fcmVhZGVyO1xuICAgIGNvbnN0IHJlYWRJbnRvUmVxdWVzdCA9IHJlYWRlci5fcmVhZEludG9SZXF1ZXN0cy5zaGlmdCgpO1xuICAgIGlmIChkb25lKSB7XG4gICAgICAgIHJlYWRJbnRvUmVxdWVzdC5fY2xvc2VTdGVwcyhjaHVuayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZWFkSW50b1JlcXVlc3QuX2NodW5rU3RlcHMoY2h1bmspO1xuICAgIH1cbn1cbmZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtR2V0TnVtUmVhZEludG9SZXF1ZXN0cyhzdHJlYW0pIHtcbiAgICByZXR1cm4gc3RyZWFtLl9yZWFkZXIuX3JlYWRJbnRvUmVxdWVzdHMubGVuZ3RoO1xufVxuZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1IYXNCWU9CUmVhZGVyKHN0cmVhbSkge1xuICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5fcmVhZGVyO1xuICAgIGlmIChyZWFkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIocmVhZGVyKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBBIEJZT0IgcmVhZGVyIHZlbmRlZCBieSBhIHtAbGluayBSZWFkYWJsZVN0cmVhbX0uXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKHN0cmVhbSkge1xuICAgICAgICBhc3NlcnRSZXF1aXJlZEFyZ3VtZW50KHN0cmVhbSwgMSwgJ1JlYWRhYmxlU3RyZWFtQllPQlJlYWRlcicpO1xuICAgICAgICBhc3NlcnRSZWFkYWJsZVN0cmVhbShzdHJlYW0sICdGaXJzdCBwYXJhbWV0ZXInKTtcbiAgICAgICAgaWYgKElzUmVhZGFibGVTdHJlYW1Mb2NrZWQoc3RyZWFtKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcyBzdHJlYW0gaGFzIGFscmVhZHkgYmVlbiBsb2NrZWQgZm9yIGV4Y2x1c2l2ZSByZWFkaW5nIGJ5IGFub3RoZXIgcmVhZGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIoc3RyZWFtLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IGEgUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyIGZvciBhIHN0cmVhbSBub3QgY29uc3RydWN0ZWQgd2l0aCBhIGJ5dGUgJyArXG4gICAgICAgICAgICAgICAgJ3NvdXJjZScpO1xuICAgICAgICB9XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY0luaXRpYWxpemUodGhpcywgc3RyZWFtKTtcbiAgICAgICAgdGhpcy5fcmVhZEludG9SZXF1ZXN0cyA9IG5ldyBTaW1wbGVRdWV1ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmUgZnVsZmlsbGVkIHdoZW4gdGhlIHN0cmVhbSBiZWNvbWVzIGNsb3NlZCwgb3IgcmVqZWN0ZWQgaWYgdGhlIHN0cmVhbSBldmVyIGVycm9ycyBvclxuICAgICAqIHRoZSByZWFkZXIncyBsb2NrIGlzIHJlbGVhc2VkIGJlZm9yZSB0aGUgc3RyZWFtIGZpbmlzaGVzIGNsb3NpbmcuXG4gICAgICovXG4gICAgZ2V0IGNsb3NlZCgpIHtcbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtQllPQlJlYWRlcih0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoYnlvYlJlYWRlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2Nsb3NlZCcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2VkUHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgdGhlIHJlYWRlciBpcyBhY3RpdmUsIGJlaGF2ZXMgdGhlIHNhbWUgYXMge0BsaW5rIFJlYWRhYmxlU3RyZWFtLmNhbmNlbCB8IHN0cmVhbS5jYW5jZWwocmVhc29uKX0uXG4gICAgICovXG4gICAgY2FuY2VsKHJlYXNvbiA9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChieW9iUmVhZGVyQnJhbmRDaGVja0V4Y2VwdGlvbignY2FuY2VsJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9vd25lclJlYWRhYmxlU3RyZWFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHJlYWRlckxvY2tFeGNlcHRpb24oJ2NhbmNlbCcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljQ2FuY2VsKHRoaXMsIHJlYXNvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIHJlYWRzIGJ5dGVzIGludG8gdmlldywgYW5kIHJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHdpdGggdGhlIHJlc3VsdC5cbiAgICAgKlxuICAgICAqIElmIHJlYWRpbmcgYSBjaHVuayBjYXVzZXMgdGhlIHF1ZXVlIHRvIGJlY29tZSBlbXB0eSwgbW9yZSBkYXRhIHdpbGwgYmUgcHVsbGVkIGZyb20gdGhlIHVuZGVybHlpbmcgc291cmNlLlxuICAgICAqL1xuICAgIHJlYWQodmlldykge1xuICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChieW9iUmVhZGVyQnJhbmRDaGVja0V4Y2VwdGlvbigncmVhZCcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5QnVmZmVyLmlzVmlldyh2aWV3KSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFR5cGVFcnJvcigndmlldyBtdXN0IGJlIGFuIGFycmF5IGJ1ZmZlciB2aWV3JykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aWV3LmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKG5ldyBUeXBlRXJyb3IoJ3ZpZXcgbXVzdCBoYXZlIG5vbi16ZXJvIGJ5dGVMZW5ndGgnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpZXcuYnVmZmVyLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKG5ldyBUeXBlRXJyb3IoYHZpZXcncyBidWZmZXIgbXVzdCBoYXZlIG5vbi16ZXJvIGJ5dGVMZW5ndGhgKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX293bmVyUmVhZGFibGVTdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgocmVhZGVyTG9ja0V4Y2VwdGlvbigncmVhZCBmcm9tJykpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvbHZlUHJvbWlzZTtcbiAgICAgICAgbGV0IHJlamVjdFByb21pc2U7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHJlamVjdFByb21pc2UgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZWFkSW50b1JlcXVlc3QgPSB7XG4gICAgICAgICAgICBfY2h1bmtTdGVwczogY2h1bmsgPT4gcmVzb2x2ZVByb21pc2UoeyB2YWx1ZTogY2h1bmssIGRvbmU6IGZhbHNlIH0pLFxuICAgICAgICAgICAgX2Nsb3NlU3RlcHM6IGNodW5rID0+IHJlc29sdmVQcm9taXNlKHsgdmFsdWU6IGNodW5rLCBkb25lOiB0cnVlIH0pLFxuICAgICAgICAgICAgX2Vycm9yU3RlcHM6IGUgPT4gcmVqZWN0UHJvbWlzZShlKVxuICAgICAgICB9O1xuICAgICAgICBSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXJSZWFkKHRoaXMsIHZpZXcsIHJlYWRJbnRvUmVxdWVzdCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyB0aGUgcmVhZGVyJ3MgbG9jayBvbiB0aGUgY29ycmVzcG9uZGluZyBzdHJlYW0uIEFmdGVyIHRoZSBsb2NrIGlzIHJlbGVhc2VkLCB0aGUgcmVhZGVyIGlzIG5vIGxvbmdlciBhY3RpdmUuXG4gICAgICogSWYgdGhlIGFzc29jaWF0ZWQgc3RyZWFtIGlzIGVycm9yZWQgd2hlbiB0aGUgbG9jayBpcyByZWxlYXNlZCwgdGhlIHJlYWRlciB3aWxsIGFwcGVhciBlcnJvcmVkIGluIHRoZSBzYW1lIHdheVxuICAgICAqIGZyb20gbm93IG9uOyBvdGhlcndpc2UsIHRoZSByZWFkZXIgd2lsbCBhcHBlYXIgY2xvc2VkLlxuICAgICAqXG4gICAgICogQSByZWFkZXIncyBsb2NrIGNhbm5vdCBiZSByZWxlYXNlZCB3aGlsZSBpdCBzdGlsbCBoYXMgYSBwZW5kaW5nIHJlYWQgcmVxdWVzdCwgaS5lLiwgaWYgYSBwcm9taXNlIHJldHVybmVkIGJ5XG4gICAgICogdGhlIHJlYWRlcidzIHtAbGluayBSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIucmVhZCB8IHJlYWQoKX0gbWV0aG9kIGhhcyBub3QgeWV0IGJlZW4gc2V0dGxlZC4gQXR0ZW1wdGluZyB0b1xuICAgICAqIGRvIHNvIHdpbGwgdGhyb3cgYSBgVHlwZUVycm9yYCBhbmQgbGVhdmUgdGhlIHJlYWRlciBsb2NrZWQgdG8gdGhlIHN0cmVhbS5cbiAgICAgKi9cbiAgICByZWxlYXNlTG9jaygpIHtcbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtQllPQlJlYWRlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgYnlvYlJlYWRlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ3JlbGVhc2VMb2NrJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX293bmVyUmVhZGFibGVTdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9yZWFkSW50b1JlcXVlc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RyaWVkIHRvIHJlbGVhc2UgYSByZWFkZXIgbG9jayB3aGVuIHRoYXQgcmVhZGVyIGhhcyBwZW5kaW5nIHJlYWQoKSBjYWxscyB1bi1zZXR0bGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljUmVsZWFzZSh0aGlzKTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIucHJvdG90eXBlLCB7XG4gICAgY2FuY2VsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICByZWFkOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICByZWxlYXNlTG9jazogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgY2xvc2VkOiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5pZiAodHlwZW9mIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZywge1xuICAgICAgICB2YWx1ZTogJ1JlYWRhYmxlU3RyZWFtQllPQlJlYWRlcicsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xufVxuLy8gQWJzdHJhY3Qgb3BlcmF0aW9ucyBmb3IgdGhlIHJlYWRlcnMuXG5mdW5jdGlvbiBJc1JlYWRhYmxlU3RyZWFtQllPQlJlYWRlcih4KSB7XG4gICAgaWYgKCF0eXBlSXNPYmplY3QoeCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnX3JlYWRJbnRvUmVxdWVzdHMnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyUmVhZChyZWFkZXIsIHZpZXcsIHJlYWRJbnRvUmVxdWVzdCkge1xuICAgIGNvbnN0IHN0cmVhbSA9IHJlYWRlci5fb3duZXJSZWFkYWJsZVN0cmVhbTtcbiAgICBzdHJlYW0uX2Rpc3R1cmJlZCA9IHRydWU7XG4gICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09ICdlcnJvcmVkJykge1xuICAgICAgICByZWFkSW50b1JlcXVlc3QuX2Vycm9yU3RlcHMoc3RyZWFtLl9zdG9yZWRFcnJvcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUHVsbEludG8oc3RyZWFtLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIHZpZXcsIHJlYWRJbnRvUmVxdWVzdCk7XG4gICAgfVxufVxuLy8gSGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIFJlYWRhYmxlU3RyZWFtQllPQlJlYWRlci5cbmZ1bmN0aW9uIGJ5b2JSZWFkZXJCcmFuZENoZWNrRXhjZXB0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyLnByb3RvdHlwZS4ke25hbWV9IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXJgKTtcbn1cblxuZnVuY3Rpb24gRXh0cmFjdEhpZ2hXYXRlck1hcmsoc3RyYXRlZ3ksIGRlZmF1bHRIV00pIHtcbiAgICBjb25zdCB7IGhpZ2hXYXRlck1hcmsgfSA9IHN0cmF0ZWd5O1xuICAgIGlmIChoaWdoV2F0ZXJNYXJrID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRIV007XG4gICAgfVxuICAgIGlmIChOdW1iZXJJc05hTihoaWdoV2F0ZXJNYXJrKSB8fCBoaWdoV2F0ZXJNYXJrIDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBoaWdoV2F0ZXJNYXJrJyk7XG4gICAgfVxuICAgIHJldHVybiBoaWdoV2F0ZXJNYXJrO1xufVxuZnVuY3Rpb24gRXh0cmFjdFNpemVBbGdvcml0aG0oc3RyYXRlZ3kpIHtcbiAgICBjb25zdCB7IHNpemUgfSA9IHN0cmF0ZWd5O1xuICAgIGlmICghc2l6ZSkge1xuICAgICAgICByZXR1cm4gKCkgPT4gMTtcbiAgICB9XG4gICAgcmV0dXJuIHNpemU7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRRdWV1aW5nU3RyYXRlZ3koaW5pdCwgY29udGV4dCkge1xuICAgIGFzc2VydERpY3Rpb25hcnkoaW5pdCwgY29udGV4dCk7XG4gICAgY29uc3QgaGlnaFdhdGVyTWFyayA9IGluaXQgPT09IG51bGwgfHwgaW5pdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5pdC5oaWdoV2F0ZXJNYXJrO1xuICAgIGNvbnN0IHNpemUgPSBpbml0ID09PSBudWxsIHx8IGluaXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluaXQuc2l6ZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBoaWdoV2F0ZXJNYXJrOiBoaWdoV2F0ZXJNYXJrID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBjb252ZXJ0VW5yZXN0cmljdGVkRG91YmxlKGhpZ2hXYXRlck1hcmspLFxuICAgICAgICBzaXplOiBzaXplID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBjb252ZXJ0UXVldWluZ1N0cmF0ZWd5U2l6ZShzaXplLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdzaXplJyB0aGF0YClcbiAgICB9O1xufVxuZnVuY3Rpb24gY29udmVydFF1ZXVpbmdTdHJhdGVneVNpemUoZm4sIGNvbnRleHQpIHtcbiAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgcmV0dXJuIGNodW5rID0+IGNvbnZlcnRVbnJlc3RyaWN0ZWREb3VibGUoZm4oY2h1bmspKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFVuZGVybHlpbmdTaW5rKG9yaWdpbmFsLCBjb250ZXh0KSB7XG4gICAgYXNzZXJ0RGljdGlvbmFyeShvcmlnaW5hbCwgY29udGV4dCk7XG4gICAgY29uc3QgYWJvcnQgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwuYWJvcnQ7XG4gICAgY29uc3QgY2xvc2UgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwuY2xvc2U7XG4gICAgY29uc3Qgc3RhcnQgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwuc3RhcnQ7XG4gICAgY29uc3QgdHlwZSA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC50eXBlO1xuICAgIGNvbnN0IHdyaXRlID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLndyaXRlO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFib3J0OiBhYm9ydCA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICAgICBjb252ZXJ0VW5kZXJseWluZ1NpbmtBYm9ydENhbGxiYWNrKGFib3J0LCBvcmlnaW5hbCwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAnYWJvcnQnIHRoYXRgKSxcbiAgICAgICAgY2xvc2U6IGNsb3NlID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgdW5kZWZpbmVkIDpcbiAgICAgICAgICAgIGNvbnZlcnRVbmRlcmx5aW5nU2lua0Nsb3NlQ2FsbGJhY2soY2xvc2UsIG9yaWdpbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdjbG9zZScgdGhhdGApLFxuICAgICAgICBzdGFydDogc3RhcnQgPT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICB1bmRlZmluZWQgOlxuICAgICAgICAgICAgY29udmVydFVuZGVybHlpbmdTaW5rU3RhcnRDYWxsYmFjayhzdGFydCwgb3JpZ2luYWwsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ3N0YXJ0JyB0aGF0YCksXG4gICAgICAgIHdyaXRlOiB3cml0ZSA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICAgICBjb252ZXJ0VW5kZXJseWluZ1NpbmtXcml0ZUNhbGxiYWNrKHdyaXRlLCBvcmlnaW5hbCwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAnd3JpdGUnIHRoYXRgKSxcbiAgICAgICAgdHlwZVxuICAgIH07XG59XG5mdW5jdGlvbiBjb252ZXJ0VW5kZXJseWluZ1NpbmtBYm9ydENhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgIGFzc2VydEZ1bmN0aW9uKGZuLCBjb250ZXh0KTtcbiAgICByZXR1cm4gKHJlYXNvbikgPT4gcHJvbWlzZUNhbGwoZm4sIG9yaWdpbmFsLCBbcmVhc29uXSk7XG59XG5mdW5jdGlvbiBjb252ZXJ0VW5kZXJseWluZ1NpbmtDbG9zZUNhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgIGFzc2VydEZ1bmN0aW9uKGZuLCBjb250ZXh0KTtcbiAgICByZXR1cm4gKCkgPT4gcHJvbWlzZUNhbGwoZm4sIG9yaWdpbmFsLCBbXSk7XG59XG5mdW5jdGlvbiBjb252ZXJ0VW5kZXJseWluZ1NpbmtTdGFydENhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgIGFzc2VydEZ1bmN0aW9uKGZuLCBjb250ZXh0KTtcbiAgICByZXR1cm4gKGNvbnRyb2xsZXIpID0+IHJlZmxlY3RDYWxsKGZuLCBvcmlnaW5hbCwgW2NvbnRyb2xsZXJdKTtcbn1cbmZ1bmN0aW9uIGNvbnZlcnRVbmRlcmx5aW5nU2lua1dyaXRlQ2FsbGJhY2soZm4sIG9yaWdpbmFsLCBjb250ZXh0KSB7XG4gICAgYXNzZXJ0RnVuY3Rpb24oZm4sIGNvbnRleHQpO1xuICAgIHJldHVybiAoY2h1bmssIGNvbnRyb2xsZXIpID0+IHByb21pc2VDYWxsKGZuLCBvcmlnaW5hbCwgW2NodW5rLCBjb250cm9sbGVyXSk7XG59XG5cbmZ1bmN0aW9uIGFzc2VydFdyaXRhYmxlU3RyZWFtKHgsIGNvbnRleHQpIHtcbiAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW0oeCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtjb250ZXh0fSBpcyBub3QgYSBXcml0YWJsZVN0cmVhbS5gKTtcbiAgICB9XG59XG5cbi8qKlxuICogQSB3cml0YWJsZSBzdHJlYW0gcmVwcmVzZW50cyBhIGRlc3RpbmF0aW9uIGZvciBkYXRhLCBpbnRvIHdoaWNoIHlvdSBjYW4gd3JpdGUuXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBXcml0YWJsZVN0cmVhbSB7XG4gICAgY29uc3RydWN0b3IocmF3VW5kZXJseWluZ1NpbmsgPSB7fSwgcmF3U3RyYXRlZ3kgPSB7fSkge1xuICAgICAgICBpZiAocmF3VW5kZXJseWluZ1NpbmsgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmF3VW5kZXJseWluZ1NpbmsgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXNzZXJ0T2JqZWN0KHJhd1VuZGVybHlpbmdTaW5rLCAnRmlyc3QgcGFyYW1ldGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyYXRlZ3kgPSBjb252ZXJ0UXVldWluZ1N0cmF0ZWd5KHJhd1N0cmF0ZWd5LCAnU2Vjb25kIHBhcmFtZXRlcicpO1xuICAgICAgICBjb25zdCB1bmRlcmx5aW5nU2luayA9IGNvbnZlcnRVbmRlcmx5aW5nU2luayhyYXdVbmRlcmx5aW5nU2luaywgJ0ZpcnN0IHBhcmFtZXRlcicpO1xuICAgICAgICBJbml0aWFsaXplV3JpdGFibGVTdHJlYW0odGhpcyk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB1bmRlcmx5aW5nU2luay50eXBlO1xuICAgICAgICBpZiAodHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlIGlzIHNwZWNpZmllZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNpemVBbGdvcml0aG0gPSBFeHRyYWN0U2l6ZUFsZ29yaXRobShzdHJhdGVneSk7XG4gICAgICAgIGNvbnN0IGhpZ2hXYXRlck1hcmsgPSBFeHRyYWN0SGlnaFdhdGVyTWFyayhzdHJhdGVneSwgMSk7XG4gICAgICAgIFNldFVwV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckZyb21VbmRlcmx5aW5nU2luayh0aGlzLCB1bmRlcmx5aW5nU2luaywgaGlnaFdhdGVyTWFyaywgc2l6ZUFsZ29yaXRobSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHdyaXRhYmxlIHN0cmVhbSBpcyBsb2NrZWQgdG8gYSB3cml0ZXIuXG4gICAgICovXG4gICAgZ2V0IGxvY2tlZCgpIHtcbiAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uKCdsb2NrZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSXNXcml0YWJsZVN0cmVhbUxvY2tlZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWJvcnRzIHRoZSBzdHJlYW0sIHNpZ25hbGluZyB0aGF0IHRoZSBwcm9kdWNlciBjYW4gbm8gbG9uZ2VyIHN1Y2Nlc3NmdWxseSB3cml0ZSB0byB0aGUgc3RyZWFtIGFuZCBpdCBpcyB0byBiZVxuICAgICAqIGltbWVkaWF0ZWx5IG1vdmVkIHRvIGFuIGVycm9yZWQgc3RhdGUsIHdpdGggYW55IHF1ZXVlZC11cCB3cml0ZXMgZGlzY2FyZGVkLiBUaGlzIHdpbGwgYWxzbyBleGVjdXRlIGFueSBhYm9ydFxuICAgICAqIG1lY2hhbmlzbSBvZiB0aGUgdW5kZXJseWluZyBzaW5rLlxuICAgICAqXG4gICAgICogVGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBmdWxmaWxsIGlmIHRoZSBzdHJlYW0gc2h1dHMgZG93biBzdWNjZXNzZnVsbHksIG9yIHJlamVjdCBpZiB0aGUgdW5kZXJseWluZyBzaW5rIHNpZ25hbGVkXG4gICAgICogdGhhdCB0aGVyZSB3YXMgYW4gZXJyb3IgZG9pbmcgc28uIEFkZGl0aW9uYWxseSwgaXQgd2lsbCByZWplY3Qgd2l0aCBhIGBUeXBlRXJyb3JgICh3aXRob3V0IGF0dGVtcHRpbmcgdG8gY2FuY2VsXG4gICAgICogdGhlIHN0cmVhbSkgaWYgdGhlIHN0cmVhbSBpcyBjdXJyZW50bHkgbG9ja2VkLlxuICAgICAqL1xuICAgIGFib3J0KHJlYXNvbiA9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW0odGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24oJ2Fib3J0JykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChJc1dyaXRhYmxlU3RyZWFtTG9ja2VkKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKCdDYW5ub3QgYWJvcnQgYSBzdHJlYW0gdGhhdCBhbHJlYWR5IGhhcyBhIHdyaXRlcicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gV3JpdGFibGVTdHJlYW1BYm9ydCh0aGlzLCByZWFzb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIHN0cmVhbS4gVGhlIHVuZGVybHlpbmcgc2luayB3aWxsIGZpbmlzaCBwcm9jZXNzaW5nIGFueSBwcmV2aW91c2x5LXdyaXR0ZW4gY2h1bmtzLCBiZWZvcmUgaW52b2tpbmcgaXRzXG4gICAgICogY2xvc2UgYmVoYXZpb3IuIER1cmluZyB0aGlzIHRpbWUgYW55IGZ1cnRoZXIgYXR0ZW1wdHMgdG8gd3JpdGUgd2lsbCBmYWlsICh3aXRob3V0IGVycm9yaW5nIHRoZSBzdHJlYW0pLlxuICAgICAqXG4gICAgICogVGhlIG1ldGhvZCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgZnVsZmlsbCBpZiBhbGwgcmVtYWluaW5nIGNodW5rcyBhcmUgc3VjY2Vzc2Z1bGx5IHdyaXR0ZW4gYW5kIHRoZSBzdHJlYW1cbiAgICAgKiBzdWNjZXNzZnVsbHkgY2xvc2VzLCBvciByZWplY3RzIGlmIGFuIGVycm9yIGlzIGVuY291bnRlcmVkIGR1cmluZyB0aGlzIHByb2Nlc3MuIEFkZGl0aW9uYWxseSwgaXQgd2lsbCByZWplY3Qgd2l0aFxuICAgICAqIGEgYFR5cGVFcnJvcmAgKHdpdGhvdXQgYXR0ZW1wdGluZyB0byBjYW5jZWwgdGhlIHN0cmVhbSkgaWYgdGhlIHN0cmVhbSBpcyBjdXJyZW50bHkgbG9ja2VkLlxuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW0odGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24oJ2Nsb3NlJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChJc1dyaXRhYmxlU3RyZWFtTG9ja2VkKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2xvc2UgYSBzdHJlYW0gdGhhdCBhbHJlYWR5IGhhcyBhIHdyaXRlcicpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjbG9zZSBhbiBhbHJlYWR5LWNsb3Npbmcgc3RyZWFtJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBXcml0YWJsZVN0cmVhbUNsb3NlKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEge0BsaW5rIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlciB8IHdyaXRlcn0gYW5kIGxvY2tzIHRoZSBzdHJlYW0gdG8gdGhlIG5ldyB3cml0ZXIuIFdoaWxlIHRoZSBzdHJlYW1cbiAgICAgKiBpcyBsb2NrZWQsIG5vIG90aGVyIHdyaXRlciBjYW4gYmUgYWNxdWlyZWQgdW50aWwgdGhpcyBvbmUgaXMgcmVsZWFzZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uYWxpdHkgaXMgZXNwZWNpYWxseSB1c2VmdWwgZm9yIGNyZWF0aW5nIGFic3RyYWN0aW9ucyB0aGF0IGRlc2lyZSB0aGUgYWJpbGl0eSB0byB3cml0ZSB0byBhIHN0cmVhbVxuICAgICAqIHdpdGhvdXQgaW50ZXJydXB0aW9uIG9yIGludGVybGVhdmluZy4gQnkgZ2V0dGluZyBhIHdyaXRlciBmb3IgdGhlIHN0cmVhbSwgeW91IGNhbiBlbnN1cmUgbm9ib2R5IGVsc2UgY2FuIHdyaXRlIGF0XG4gICAgICogdGhlIHNhbWUgdGltZSwgd2hpY2ggd291bGQgY2F1c2UgdGhlIHJlc3VsdGluZyB3cml0dGVuIGRhdGEgdG8gYmUgdW5wcmVkaWN0YWJsZSBhbmQgcHJvYmFibHkgdXNlbGVzcy5cbiAgICAgKi9cbiAgICBnZXRXcml0ZXIoKSB7XG4gICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbSh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbignZ2V0V3JpdGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFjcXVpcmVXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIodGhpcyk7XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoV3JpdGFibGVTdHJlYW0ucHJvdG90eXBlLCB7XG4gICAgYWJvcnQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIGNsb3NlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICBnZXRXcml0ZXI6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIGxvY2tlZDogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuaWYgKHR5cGVvZiBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCcpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JpdGFibGVTdHJlYW0ucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZywge1xuICAgICAgICB2YWx1ZTogJ1dyaXRhYmxlU3RyZWFtJyxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG59XG4vLyBBYnN0cmFjdCBvcGVyYXRpb25zIGZvciB0aGUgV3JpdGFibGVTdHJlYW0uXG5mdW5jdGlvbiBBY3F1aXJlV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyKHN0cmVhbSkge1xuICAgIHJldHVybiBuZXcgV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyKHN0cmVhbSk7XG59XG4vLyBUaHJvd3MgaWYgYW5kIG9ubHkgaWYgc3RhcnRBbGdvcml0aG0gdGhyb3dzLlxuZnVuY3Rpb24gQ3JlYXRlV3JpdGFibGVTdHJlYW0oc3RhcnRBbGdvcml0aG0sIHdyaXRlQWxnb3JpdGhtLCBjbG9zZUFsZ29yaXRobSwgYWJvcnRBbGdvcml0aG0sIGhpZ2hXYXRlck1hcmsgPSAxLCBzaXplQWxnb3JpdGhtID0gKCkgPT4gMSkge1xuICAgIGNvbnN0IHN0cmVhbSA9IE9iamVjdC5jcmVhdGUoV3JpdGFibGVTdHJlYW0ucHJvdG90eXBlKTtcbiAgICBJbml0aWFsaXplV3JpdGFibGVTdHJlYW0oc3RyZWFtKTtcbiAgICBjb25zdCBjb250cm9sbGVyID0gT2JqZWN0LmNyZWF0ZShXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSk7XG4gICAgU2V0VXBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHN0cmVhbSwgY29udHJvbGxlciwgc3RhcnRBbGdvcml0aG0sIHdyaXRlQWxnb3JpdGhtLCBjbG9zZUFsZ29yaXRobSwgYWJvcnRBbGdvcml0aG0sIGhpZ2hXYXRlck1hcmssIHNpemVBbGdvcml0aG0pO1xuICAgIHJldHVybiBzdHJlYW07XG59XG5mdW5jdGlvbiBJbml0aWFsaXplV3JpdGFibGVTdHJlYW0oc3RyZWFtKSB7XG4gICAgc3RyZWFtLl9zdGF0ZSA9ICd3cml0YWJsZSc7XG4gICAgLy8gVGhlIGVycm9yIHRoYXQgd2lsbCBiZSByZXBvcnRlZCBieSBuZXcgbWV0aG9kIGNhbGxzIG9uY2UgdGhlIHN0YXRlIGJlY29tZXMgZXJyb3JlZC4gT25seSBzZXQgd2hlbiBbW3N0YXRlXV0gaXNcbiAgICAvLyAnZXJyb3JpbmcnIG9yICdlcnJvcmVkJy4gTWF5IGJlIHNldCB0byBhbiB1bmRlZmluZWQgdmFsdWUuXG4gICAgc3RyZWFtLl9zdG9yZWRFcnJvciA9IHVuZGVmaW5lZDtcbiAgICBzdHJlYW0uX3dyaXRlciA9IHVuZGVmaW5lZDtcbiAgICAvLyBJbml0aWFsaXplIHRvIHVuZGVmaW5lZCBmaXJzdCBiZWNhdXNlIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgY29udHJvbGxlciBjaGVja3MgdGhpc1xuICAgIC8vIHZhcmlhYmxlIHRvIHZhbGlkYXRlIHRoZSBjYWxsZXIuXG4gICAgc3RyZWFtLl93cml0YWJsZVN0cmVhbUNvbnRyb2xsZXIgPSB1bmRlZmluZWQ7XG4gICAgLy8gVGhpcyBxdWV1ZSBpcyBwbGFjZWQgaGVyZSBpbnN0ZWFkIG9mIHRoZSB3cml0ZXIgY2xhc3MgaW4gb3JkZXIgdG8gYWxsb3cgZm9yIHBhc3NpbmcgYSB3cml0ZXIgdG8gdGhlIG5leHQgZGF0YVxuICAgIC8vIHByb2R1Y2VyIHdpdGhvdXQgd2FpdGluZyBmb3IgdGhlIHF1ZXVlZCB3cml0ZXMgdG8gZmluaXNoLlxuICAgIHN0cmVhbS5fd3JpdGVSZXF1ZXN0cyA9IG5ldyBTaW1wbGVRdWV1ZSgpO1xuICAgIC8vIFdyaXRlIHJlcXVlc3RzIGFyZSByZW1vdmVkIGZyb20gX3dyaXRlUmVxdWVzdHMgd2hlbiB3cml0ZSgpIGlzIGNhbGxlZCBvbiB0aGUgdW5kZXJseWluZyBzaW5rLiBUaGlzIHByZXZlbnRzXG4gICAgLy8gdGhlbSBmcm9tIGJlaW5nIGVycm9uZW91c2x5IHJlamVjdGVkIG9uIGVycm9yLiBJZiBhIHdyaXRlKCkgY2FsbCBpcyBpbi1mbGlnaHQsIHRoZSByZXF1ZXN0IGlzIHN0b3JlZCBoZXJlLlxuICAgIHN0cmVhbS5faW5GbGlnaHRXcml0ZVJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgLy8gVGhlIHByb21pc2UgdGhhdCB3YXMgcmV0dXJuZWQgZnJvbSB3cml0ZXIuY2xvc2UoKS4gU3RvcmVkIGhlcmUgYmVjYXVzZSBpdCBtYXkgYmUgZnVsZmlsbGVkIGFmdGVyIHRoZSB3cml0ZXJcbiAgICAvLyBoYXMgYmVlbiBkZXRhY2hlZC5cbiAgICBzdHJlYW0uX2Nsb3NlUmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICAvLyBDbG9zZSByZXF1ZXN0IGlzIHJlbW92ZWQgZnJvbSBfY2xvc2VSZXF1ZXN0IHdoZW4gY2xvc2UoKSBpcyBjYWxsZWQgb24gdGhlIHVuZGVybHlpbmcgc2luay4gVGhpcyBwcmV2ZW50cyBpdFxuICAgIC8vIGZyb20gYmVpbmcgZXJyb25lb3VzbHkgcmVqZWN0ZWQgb24gZXJyb3IuIElmIGEgY2xvc2UoKSBjYWxsIGlzIGluLWZsaWdodCwgdGhlIHJlcXVlc3QgaXMgc3RvcmVkIGhlcmUuXG4gICAgc3RyZWFtLl9pbkZsaWdodENsb3NlUmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICAvLyBUaGUgcHJvbWlzZSB0aGF0IHdhcyByZXR1cm5lZCBmcm9tIHdyaXRlci5hYm9ydCgpLiBUaGlzIG1heSBhbHNvIGJlIGZ1bGZpbGxlZCBhZnRlciB0aGUgd3JpdGVyIGhhcyBkZXRhY2hlZC5cbiAgICBzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgLy8gVGhlIGJhY2twcmVzc3VyZSBzaWduYWwgc2V0IGJ5IHRoZSBjb250cm9sbGVyLlxuICAgIHN0cmVhbS5fYmFja3ByZXNzdXJlID0gZmFsc2U7XG59XG5mdW5jdGlvbiBJc1dyaXRhYmxlU3RyZWFtKHgpIHtcbiAgICBpZiAoIXR5cGVJc09iamVjdCh4KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgsICdfd3JpdGFibGVTdHJlYW1Db250cm9sbGVyJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIElzV3JpdGFibGVTdHJlYW1Mb2NrZWQoc3RyZWFtKSB7XG4gICAgaWYgKHN0cmVhbS5fd3JpdGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtQWJvcnQoc3RyZWFtLCByZWFzb24pIHtcbiAgICBjb25zdCBzdGF0ZSA9IHN0cmVhbS5fc3RhdGU7XG4gICAgaWYgKHN0YXRlID09PSAnY2xvc2VkJyB8fCBzdGF0ZSA9PT0gJ2Vycm9yZWQnKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGlmIChzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0Ll9wcm9taXNlO1xuICAgIH1cbiAgICBsZXQgd2FzQWxyZWFkeUVycm9yaW5nID0gZmFsc2U7XG4gICAgaWYgKHN0YXRlID09PSAnZXJyb3JpbmcnKSB7XG4gICAgICAgIHdhc0FscmVhZHlFcnJvcmluZyA9IHRydWU7XG4gICAgICAgIC8vIHJlYXNvbiB3aWxsIG5vdCBiZSB1c2VkLCBzbyBkb24ndCBrZWVwIGEgcmVmZXJlbmNlIHRvIGl0LlxuICAgICAgICByZWFzb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgX3Byb21pc2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIF9yZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgICAgX3JlamVjdDogcmVqZWN0LFxuICAgICAgICAgICAgX3JlYXNvbjogcmVhc29uLFxuICAgICAgICAgICAgX3dhc0FscmVhZHlFcnJvcmluZzogd2FzQWxyZWFkeUVycm9yaW5nXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0Ll9wcm9taXNlID0gcHJvbWlzZTtcbiAgICBpZiAoIXdhc0FscmVhZHlFcnJvcmluZykge1xuICAgICAgICBXcml0YWJsZVN0cmVhbVN0YXJ0RXJyb3Jpbmcoc3RyZWFtLCByZWFzb24pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtQ2xvc2Uoc3RyZWFtKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBzdHJlYW0uX3N0YXRlO1xuICAgIGlmIChzdGF0ZSA9PT0gJ2Nsb3NlZCcgfHwgc3RhdGUgPT09ICdlcnJvcmVkJykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKGBUaGUgc3RyZWFtIChpbiAke3N0YXRlfSBzdGF0ZSkgaXMgbm90IGluIHRoZSB3cml0YWJsZSBzdGF0ZSBhbmQgY2Fubm90IGJlIGNsb3NlZGApKTtcbiAgICB9XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ld1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBjbG9zZVJlcXVlc3QgPSB7XG4gICAgICAgICAgICBfcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICAgIF9yZWplY3Q6IHJlamVjdFxuICAgICAgICB9O1xuICAgICAgICBzdHJlYW0uX2Nsb3NlUmVxdWVzdCA9IGNsb3NlUmVxdWVzdDtcbiAgICB9KTtcbiAgICBjb25zdCB3cml0ZXIgPSBzdHJlYW0uX3dyaXRlcjtcbiAgICBpZiAod3JpdGVyICE9PSB1bmRlZmluZWQgJiYgc3RyZWFtLl9iYWNrcHJlc3N1cmUgJiYgc3RhdGUgPT09ICd3cml0YWJsZScpIHtcbiAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZVJlc29sdmUod3JpdGVyKTtcbiAgICB9XG4gICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsb3NlKHN0cmVhbS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbi8vIFdyaXRhYmxlU3RyZWFtIEFQSSBleHBvc2VkIGZvciBjb250cm9sbGVycy5cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtQWRkV3JpdGVSZXF1ZXN0KHN0cmVhbSkge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgd3JpdGVSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgX3Jlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgICBfcmVqZWN0OiByZWplY3RcbiAgICAgICAgfTtcbiAgICAgICAgc3RyZWFtLl93cml0ZVJlcXVlc3RzLnB1c2god3JpdGVSZXF1ZXN0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVhbFdpdGhSZWplY3Rpb24oc3RyZWFtLCBlcnJvcikge1xuICAgIGNvbnN0IHN0YXRlID0gc3RyZWFtLl9zdGF0ZTtcbiAgICBpZiAoc3RhdGUgPT09ICd3cml0YWJsZScpIHtcbiAgICAgICAgV3JpdGFibGVTdHJlYW1TdGFydEVycm9yaW5nKHN0cmVhbSwgZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFdyaXRhYmxlU3RyZWFtRmluaXNoRXJyb3Jpbmcoc3RyZWFtKTtcbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtU3RhcnRFcnJvcmluZyhzdHJlYW0sIHJlYXNvbikge1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBzdHJlYW0uX3dyaXRhYmxlU3RyZWFtQ29udHJvbGxlcjtcbiAgICBzdHJlYW0uX3N0YXRlID0gJ2Vycm9yaW5nJztcbiAgICBzdHJlYW0uX3N0b3JlZEVycm9yID0gcmVhc29uO1xuICAgIGNvbnN0IHdyaXRlciA9IHN0cmVhbS5fd3JpdGVyO1xuICAgIGlmICh3cml0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJFbnN1cmVSZWFkeVByb21pc2VSZWplY3RlZCh3cml0ZXIsIHJlYXNvbik7XG4gICAgfVxuICAgIGlmICghV3JpdGFibGVTdHJlYW1IYXNPcGVyYXRpb25NYXJrZWRJbkZsaWdodChzdHJlYW0pICYmIGNvbnRyb2xsZXIuX3N0YXJ0ZWQpIHtcbiAgICAgICAgV3JpdGFibGVTdHJlYW1GaW5pc2hFcnJvcmluZyhzdHJlYW0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRmluaXNoRXJyb3Jpbmcoc3RyZWFtKSB7XG4gICAgc3RyZWFtLl9zdGF0ZSA9ICdlcnJvcmVkJztcbiAgICBzdHJlYW0uX3dyaXRhYmxlU3RyZWFtQ29udHJvbGxlcltFcnJvclN0ZXBzXSgpO1xuICAgIGNvbnN0IHN0b3JlZEVycm9yID0gc3RyZWFtLl9zdG9yZWRFcnJvcjtcbiAgICBzdHJlYW0uX3dyaXRlUmVxdWVzdHMuZm9yRWFjaCh3cml0ZVJlcXVlc3QgPT4ge1xuICAgICAgICB3cml0ZVJlcXVlc3QuX3JlamVjdChzdG9yZWRFcnJvcik7XG4gICAgfSk7XG4gICAgc3RyZWFtLl93cml0ZVJlcXVlc3RzID0gbmV3IFNpbXBsZVF1ZXVlKCk7XG4gICAgaWYgKHN0cmVhbS5fcGVuZGluZ0Fib3J0UmVxdWVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtUmVqZWN0Q2xvc2VBbmRDbG9zZWRQcm9taXNlSWZOZWVkZWQoc3RyZWFtKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhYm9ydFJlcXVlc3QgPSBzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3Q7XG4gICAgc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChhYm9ydFJlcXVlc3QuX3dhc0FscmVhZHlFcnJvcmluZykge1xuICAgICAgICBhYm9ydFJlcXVlc3QuX3JlamVjdChzdG9yZWRFcnJvcik7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtUmVqZWN0Q2xvc2VBbmRDbG9zZWRQcm9taXNlSWZOZWVkZWQoc3RyZWFtKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcm9taXNlID0gc3RyZWFtLl93cml0YWJsZVN0cmVhbUNvbnRyb2xsZXJbQWJvcnRTdGVwc10oYWJvcnRSZXF1ZXN0Ll9yZWFzb24pO1xuICAgIHVwb25Qcm9taXNlKHByb21pc2UsICgpID0+IHtcbiAgICAgICAgYWJvcnRSZXF1ZXN0Ll9yZXNvbHZlKCk7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtUmVqZWN0Q2xvc2VBbmRDbG9zZWRQcm9taXNlSWZOZWVkZWQoc3RyZWFtKTtcbiAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgIGFib3J0UmVxdWVzdC5fcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtUmVqZWN0Q2xvc2VBbmRDbG9zZWRQcm9taXNlSWZOZWVkZWQoc3RyZWFtKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRmluaXNoSW5GbGlnaHRXcml0ZShzdHJlYW0pIHtcbiAgICBzdHJlYW0uX2luRmxpZ2h0V3JpdGVSZXF1ZXN0Ll9yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgc3RyZWFtLl9pbkZsaWdodFdyaXRlUmVxdWVzdCA9IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRmluaXNoSW5GbGlnaHRXcml0ZVdpdGhFcnJvcihzdHJlYW0sIGVycm9yKSB7XG4gICAgc3RyZWFtLl9pbkZsaWdodFdyaXRlUmVxdWVzdC5fcmVqZWN0KGVycm9yKTtcbiAgICBzdHJlYW0uX2luRmxpZ2h0V3JpdGVSZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgIFdyaXRhYmxlU3RyZWFtRGVhbFdpdGhSZWplY3Rpb24oc3RyZWFtLCBlcnJvcik7XG59XG5mdW5jdGlvbiBXcml0YWJsZVN0cmVhbUZpbmlzaEluRmxpZ2h0Q2xvc2Uoc3RyZWFtKSB7XG4gICAgc3RyZWFtLl9pbkZsaWdodENsb3NlUmVxdWVzdC5fcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIHN0cmVhbS5faW5GbGlnaHRDbG9zZVJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3RhdGUgPSBzdHJlYW0uX3N0YXRlO1xuICAgIGlmIChzdGF0ZSA9PT0gJ2Vycm9yaW5nJykge1xuICAgICAgICAvLyBUaGUgZXJyb3Igd2FzIHRvbyBsYXRlIHRvIGRvIGFueXRoaW5nLCBzbyBpdCBpcyBpZ25vcmVkLlxuICAgICAgICBzdHJlYW0uX3N0b3JlZEVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0cmVhbS5fcGVuZGluZ0Fib3J0UmVxdWVzdC5fcmVzb2x2ZSgpO1xuICAgICAgICAgICAgc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0cmVhbS5fc3RhdGUgPSAnY2xvc2VkJztcbiAgICBjb25zdCB3cml0ZXIgPSBzdHJlYW0uX3dyaXRlcjtcbiAgICBpZiAod3JpdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VSZXNvbHZlKHdyaXRlcik7XG4gICAgfVxufVxuZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1GaW5pc2hJbkZsaWdodENsb3NlV2l0aEVycm9yKHN0cmVhbSwgZXJyb3IpIHtcbiAgICBzdHJlYW0uX2luRmxpZ2h0Q2xvc2VSZXF1ZXN0Ll9yZWplY3QoZXJyb3IpO1xuICAgIHN0cmVhbS5faW5GbGlnaHRDbG9zZVJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgLy8gTmV2ZXIgZXhlY3V0ZSBzaW5rIGFib3J0KCkgYWZ0ZXIgc2luayBjbG9zZSgpLlxuICAgIGlmIChzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QuX3JlamVjdChlcnJvcik7XG4gICAgICAgIHN0cmVhbS5fcGVuZGluZ0Fib3J0UmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgV3JpdGFibGVTdHJlYW1EZWFsV2l0aFJlamVjdGlvbihzdHJlYW0sIGVycm9yKTtcbn1cbi8vIFRPRE8ocmljZWEpOiBGaXggYWxwaGFiZXRpY2FsIG9yZGVyLlxuZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoc3RyZWFtKSB7XG4gICAgaWYgKHN0cmVhbS5fY2xvc2VSZXF1ZXN0ID09PSB1bmRlZmluZWQgJiYgc3RyZWFtLl9pbkZsaWdodENsb3NlUmVxdWVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBXcml0YWJsZVN0cmVhbUhhc09wZXJhdGlvbk1hcmtlZEluRmxpZ2h0KHN0cmVhbSkge1xuICAgIGlmIChzdHJlYW0uX2luRmxpZ2h0V3JpdGVSZXF1ZXN0ID09PSB1bmRlZmluZWQgJiYgc3RyZWFtLl9pbkZsaWdodENsb3NlUmVxdWVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBXcml0YWJsZVN0cmVhbU1hcmtDbG9zZVJlcXVlc3RJbkZsaWdodChzdHJlYW0pIHtcbiAgICBzdHJlYW0uX2luRmxpZ2h0Q2xvc2VSZXF1ZXN0ID0gc3RyZWFtLl9jbG9zZVJlcXVlc3Q7XG4gICAgc3RyZWFtLl9jbG9zZVJlcXVlc3QgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBXcml0YWJsZVN0cmVhbU1hcmtGaXJzdFdyaXRlUmVxdWVzdEluRmxpZ2h0KHN0cmVhbSkge1xuICAgIHN0cmVhbS5faW5GbGlnaHRXcml0ZVJlcXVlc3QgPSBzdHJlYW0uX3dyaXRlUmVxdWVzdHMuc2hpZnQoKTtcbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtUmVqZWN0Q2xvc2VBbmRDbG9zZWRQcm9taXNlSWZOZWVkZWQoc3RyZWFtKSB7XG4gICAgaWYgKHN0cmVhbS5fY2xvc2VSZXF1ZXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RyZWFtLl9jbG9zZVJlcXVlc3QuX3JlamVjdChzdHJlYW0uX3N0b3JlZEVycm9yKTtcbiAgICAgICAgc3RyZWFtLl9jbG9zZVJlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHdyaXRlciA9IHN0cmVhbS5fd3JpdGVyO1xuICAgIGlmICh3cml0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZVJlamVjdCh3cml0ZXIsIHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtVXBkYXRlQmFja3ByZXNzdXJlKHN0cmVhbSwgYmFja3ByZXNzdXJlKSB7XG4gICAgY29uc3Qgd3JpdGVyID0gc3RyZWFtLl93cml0ZXI7XG4gICAgaWYgKHdyaXRlciAhPT0gdW5kZWZpbmVkICYmIGJhY2twcmVzc3VyZSAhPT0gc3RyZWFtLl9iYWNrcHJlc3N1cmUpIHtcbiAgICAgICAgaWYgKGJhY2twcmVzc3VyZSkge1xuICAgICAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZVJlc2V0KHdyaXRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlUmVzb2x2ZSh3cml0ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0cmVhbS5fYmFja3ByZXNzdXJlID0gYmFja3ByZXNzdXJlO1xufVxuLyoqXG4gKiBBIGRlZmF1bHQgd3JpdGVyIHZlbmRlZCBieSBhIHtAbGluayBXcml0YWJsZVN0cmVhbX0uXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHN0cmVhbSkge1xuICAgICAgICBhc3NlcnRSZXF1aXJlZEFyZ3VtZW50KHN0cmVhbSwgMSwgJ1dyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcicpO1xuICAgICAgICBhc3NlcnRXcml0YWJsZVN0cmVhbShzdHJlYW0sICdGaXJzdCBwYXJhbWV0ZXInKTtcbiAgICAgICAgaWYgKElzV3JpdGFibGVTdHJlYW1Mb2NrZWQoc3RyZWFtKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcyBzdHJlYW0gaGFzIGFscmVhZHkgYmVlbiBsb2NrZWQgZm9yIGV4Y2x1c2l2ZSB3cml0aW5nIGJ5IGFub3RoZXIgd3JpdGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb3duZXJXcml0YWJsZVN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgc3RyZWFtLl93cml0ZXIgPSB0aGlzO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ3dyaXRhYmxlJykge1xuICAgICAgICAgICAgaWYgKCFXcml0YWJsZVN0cmVhbUNsb3NlUXVldWVkT3JJbkZsaWdodChzdHJlYW0pICYmIHN0cmVhbS5fYmFja3ByZXNzdXJlKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZUluaXRpYWxpemUodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZUFzUmVzb2x2ZWQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09ICdlcnJvcmluZycpIHtcbiAgICAgICAgICAgIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VJbml0aWFsaXplQXNSZWplY3RlZCh0aGlzLCBzdHJlYW0uX3N0b3JlZEVycm9yKTtcbiAgICAgICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgICAgIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VJbml0aWFsaXplQXNSZXNvbHZlZCh0aGlzKTtcbiAgICAgICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZUFzUmVzb2x2ZWQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdG9yZWRFcnJvciA9IHN0cmVhbS5fc3RvcmVkRXJyb3I7XG4gICAgICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZUFzUmVqZWN0ZWQodGhpcywgc3RvcmVkRXJyb3IpO1xuICAgICAgICAgICAgZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VJbml0aWFsaXplQXNSZWplY3RlZCh0aGlzLCBzdG9yZWRFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIGJlIGZ1bGZpbGxlZCB3aGVuIHRoZSBzdHJlYW0gYmVjb21lcyBjbG9zZWQsIG9yIHJlamVjdGVkIGlmIHRoZSBzdHJlYW0gZXZlciBlcnJvcnMgb3JcbiAgICAgKiB0aGUgd3JpdGVy4oCZcyBsb2NrIGlzIHJlbGVhc2VkIGJlZm9yZSB0aGUgc3RyZWFtIGZpbmlzaGVzIGNsb3NpbmcuXG4gICAgICovXG4gICAgZ2V0IGNsb3NlZCgpIHtcbiAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcih0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZGVmYXVsdFdyaXRlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2Nsb3NlZCcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2VkUHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGVzaXJlZCBzaXplIHRvIGZpbGwgdGhlIHN0cmVhbeKAmXMgaW50ZXJuYWwgcXVldWUuIEl0IGNhbiBiZSBuZWdhdGl2ZSwgaWYgdGhlIHF1ZXVlIGlzIG92ZXItZnVsbC5cbiAgICAgKiBBIHByb2R1Y2VyIGNhbiB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBkZXRlcm1pbmUgdGhlIHJpZ2h0IGFtb3VudCBvZiBkYXRhIHRvIHdyaXRlLlxuICAgICAqXG4gICAgICogSXQgd2lsbCBiZSBgbnVsbGAgaWYgdGhlIHN0cmVhbSBjYW5ub3QgYmUgc3VjY2Vzc2Z1bGx5IHdyaXR0ZW4gdG8gKGR1ZSB0byBlaXRoZXIgYmVpbmcgZXJyb3JlZCwgb3IgaGF2aW5nIGFuIGFib3J0XG4gICAgICogcXVldWVkIHVwKS4gSXQgd2lsbCByZXR1cm4gemVybyBpZiB0aGUgc3RyZWFtIGlzIGNsb3NlZC4gQW5kIHRoZSBnZXR0ZXIgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgaW52b2tlZCB3aGVuXG4gICAgICogdGhlIHdyaXRlcuKAmXMgbG9jayBpcyByZWxlYXNlZC5cbiAgICAgKi9cbiAgICBnZXQgZGVzaXJlZFNpemUoKSB7XG4gICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IGRlZmF1bHRXcml0ZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdkZXNpcmVkU2l6ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9vd25lcldyaXRhYmxlU3RyZWFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IGRlZmF1bHRXcml0ZXJMb2NrRXhjZXB0aW9uKCdkZXNpcmVkU2l6ZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJHZXREZXNpcmVkU2l6ZSh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIGJlIGZ1bGZpbGxlZCB3aGVuIHRoZSBkZXNpcmVkIHNpemUgdG8gZmlsbCB0aGUgc3RyZWFt4oCZcyBpbnRlcm5hbCBxdWV1ZSB0cmFuc2l0aW9uc1xuICAgICAqIGZyb20gbm9uLXBvc2l0aXZlIHRvIHBvc2l0aXZlLCBzaWduYWxpbmcgdGhhdCBpdCBpcyBubyBsb25nZXIgYXBwbHlpbmcgYmFja3ByZXNzdXJlLiBPbmNlIHRoZSBkZXNpcmVkIHNpemUgZGlwc1xuICAgICAqIGJhY2sgdG8gemVybyBvciBiZWxvdywgdGhlIGdldHRlciB3aWxsIHJldHVybiBhIG5ldyBwcm9taXNlIHRoYXQgc3RheXMgcGVuZGluZyB1bnRpbCB0aGUgbmV4dCB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogSWYgdGhlIHN0cmVhbSBiZWNvbWVzIGVycm9yZWQgb3IgYWJvcnRlZCwgb3IgdGhlIHdyaXRlcuKAmXMgbG9jayBpcyByZWxlYXNlZCwgdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZWNvbWVcbiAgICAgKiByZWplY3RlZC5cbiAgICAgKi9cbiAgICBnZXQgcmVhZHkoKSB7XG4gICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGRlZmF1bHRXcml0ZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdyZWFkeScpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHlQcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgcmVhZGVyIGlzIGFjdGl2ZSwgYmVoYXZlcyB0aGUgc2FtZSBhcyB7QGxpbmsgV3JpdGFibGVTdHJlYW0uYWJvcnQgfCBzdHJlYW0uYWJvcnQocmVhc29uKX0uXG4gICAgICovXG4gICAgYWJvcnQocmVhc29uID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGRlZmF1bHRXcml0ZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdhYm9ydCcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fb3duZXJXcml0YWJsZVN0cmVhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChkZWZhdWx0V3JpdGVyTG9ja0V4Y2VwdGlvbignYWJvcnQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlckFib3J0KHRoaXMsIHJlYXNvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIHRoZSByZWFkZXIgaXMgYWN0aXZlLCBiZWhhdmVzIHRoZSBzYW1lIGFzIHtAbGluayBXcml0YWJsZVN0cmVhbS5jbG9zZSB8IHN0cmVhbS5jbG9zZSgpfS5cbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcih0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZGVmYXVsdFdyaXRlckJyYW5kQ2hlY2tFeGNlcHRpb24oJ2Nsb3NlJykpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuX293bmVyV3JpdGFibGVTdHJlYW07XG4gICAgICAgIGlmIChzdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZGVmYXVsdFdyaXRlckxvY2tFeGNlcHRpb24oJ2Nsb3NlJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChXcml0YWJsZVN0cmVhbUNsb3NlUXVldWVkT3JJbkZsaWdodChzdHJlYW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2xvc2UgYW4gYWxyZWFkeS1jbG9zaW5nIHN0cmVhbScpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyQ2xvc2UodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbGVhc2VzIHRoZSB3cml0ZXLigJlzIGxvY2sgb24gdGhlIGNvcnJlc3BvbmRpbmcgc3RyZWFtLiBBZnRlciB0aGUgbG9jayBpcyByZWxlYXNlZCwgdGhlIHdyaXRlciBpcyBubyBsb25nZXIgYWN0aXZlLlxuICAgICAqIElmIHRoZSBhc3NvY2lhdGVkIHN0cmVhbSBpcyBlcnJvcmVkIHdoZW4gdGhlIGxvY2sgaXMgcmVsZWFzZWQsIHRoZSB3cml0ZXIgd2lsbCBhcHBlYXIgZXJyb3JlZCBpbiB0aGUgc2FtZSB3YXkgZnJvbVxuICAgICAqIG5vdyBvbjsgb3RoZXJ3aXNlLCB0aGUgd3JpdGVyIHdpbGwgYXBwZWFyIGNsb3NlZC5cbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCB0aGUgbG9jayBjYW4gc3RpbGwgYmUgcmVsZWFzZWQgZXZlbiBpZiBzb21lIG9uZ29pbmcgd3JpdGVzIGhhdmUgbm90IHlldCBmaW5pc2hlZCAoaS5lLiBldmVuIGlmIHRoZVxuICAgICAqIHByb21pc2VzIHJldHVybmVkIGZyb20gcHJldmlvdXMgY2FsbHMgdG8ge0BsaW5rIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlci53cml0ZSB8IHdyaXRlKCl9IGhhdmUgbm90IHlldCBzZXR0bGVkKS5cbiAgICAgKiBJdOKAmXMgbm90IG5lY2Vzc2FyeSB0byBob2xkIHRoZSBsb2NrIG9uIHRoZSB3cml0ZXIgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgd3JpdGU7IHRoZSBsb2NrIGluc3RlYWQgc2ltcGx5IHByZXZlbnRzXG4gICAgICogb3RoZXIgcHJvZHVjZXJzIGZyb20gd3JpdGluZyBpbiBhbiBpbnRlcmxlYXZlZCBtYW5uZXIuXG4gICAgICovXG4gICAgcmVsZWFzZUxvY2soKSB7XG4gICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IGRlZmF1bHRXcml0ZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdyZWxlYXNlTG9jaycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuX293bmVyV3JpdGFibGVTdHJlYW07XG4gICAgICAgIGlmIChzdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlclJlbGVhc2UodGhpcyk7XG4gICAgfVxuICAgIHdyaXRlKGNodW5rID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGRlZmF1bHRXcml0ZXJCcmFuZENoZWNrRXhjZXB0aW9uKCd3cml0ZScpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fb3duZXJXcml0YWJsZVN0cmVhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChkZWZhdWx0V3JpdGVyTG9ja0V4Y2VwdGlvbignd3JpdGUgdG8nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcldyaXRlKHRoaXMsIGNodW5rKTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIucHJvdG90eXBlLCB7XG4gICAgYWJvcnQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIGNsb3NlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICByZWxlYXNlTG9jazogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgd3JpdGU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIGNsb3NlZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgZGVzaXJlZFNpemU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIHJlYWR5OiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5pZiAodHlwZW9mIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZywge1xuICAgICAgICB2YWx1ZTogJ1dyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcicsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xufVxuLy8gQWJzdHJhY3Qgb3BlcmF0aW9ucyBmb3IgdGhlIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlci5cbmZ1bmN0aW9uIElzV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyKHgpIHtcbiAgICBpZiAoIXR5cGVJc09iamVjdCh4KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgsICdfb3duZXJXcml0YWJsZVN0cmVhbScpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4vLyBBIGNsaWVudCBvZiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIgbWF5IHVzZSB0aGVzZSBmdW5jdGlvbnMgZGlyZWN0bHkgdG8gYnlwYXNzIHN0YXRlIGNoZWNrLlxuZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyQWJvcnQod3JpdGVyLCByZWFzb24pIHtcbiAgICBjb25zdCBzdHJlYW0gPSB3cml0ZXIuX293bmVyV3JpdGFibGVTdHJlYW07XG4gICAgcmV0dXJuIFdyaXRhYmxlU3RyZWFtQWJvcnQoc3RyZWFtLCByZWFzb24pO1xufVxuZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyQ2xvc2Uod3JpdGVyKSB7XG4gICAgY29uc3Qgc3RyZWFtID0gd3JpdGVyLl9vd25lcldyaXRhYmxlU3RyZWFtO1xuICAgIHJldHVybiBXcml0YWJsZVN0cmVhbUNsb3NlKHN0cmVhbSk7XG59XG5mdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJDbG9zZVdpdGhFcnJvclByb3BhZ2F0aW9uKHdyaXRlcikge1xuICAgIGNvbnN0IHN0cmVhbSA9IHdyaXRlci5fb3duZXJXcml0YWJsZVN0cmVhbTtcbiAgICBjb25zdCBzdGF0ZSA9IHN0cmVhbS5fc3RhdGU7XG4gICAgaWYgKFdyaXRhYmxlU3RyZWFtQ2xvc2VRdWV1ZWRPckluRmxpZ2h0KHN0cmVhbSkgfHwgc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGlmIChzdGF0ZSA9PT0gJ2Vycm9yZWQnKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyQ2xvc2Uod3JpdGVyKTtcbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlckVuc3VyZUNsb3NlZFByb21pc2VSZWplY3RlZCh3cml0ZXIsIGVycm9yKSB7XG4gICAgaWYgKHdyaXRlci5fY2xvc2VkUHJvbWlzZVN0YXRlID09PSAncGVuZGluZycpIHtcbiAgICAgICAgZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VSZWplY3Qod3JpdGVyLCBlcnJvcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZVJlc2V0VG9SZWplY3RlZCh3cml0ZXIsIGVycm9yKTtcbiAgICB9XG59XG5mdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJFbnN1cmVSZWFkeVByb21pc2VSZWplY3RlZCh3cml0ZXIsIGVycm9yKSB7XG4gICAgaWYgKHdyaXRlci5fcmVhZHlQcm9taXNlU3RhdGUgPT09ICdwZW5kaW5nJykge1xuICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlUmVqZWN0KHdyaXRlciwgZXJyb3IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZVJlc2V0VG9SZWplY3RlZCh3cml0ZXIsIGVycm9yKTtcbiAgICB9XG59XG5mdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJHZXREZXNpcmVkU2l6ZSh3cml0ZXIpIHtcbiAgICBjb25zdCBzdHJlYW0gPSB3cml0ZXIuX293bmVyV3JpdGFibGVTdHJlYW07XG4gICAgY29uc3Qgc3RhdGUgPSBzdHJlYW0uX3N0YXRlO1xuICAgIGlmIChzdGF0ZSA9PT0gJ2Vycm9yZWQnIHx8IHN0YXRlID09PSAnZXJyb3JpbmcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldERlc2lyZWRTaXplKHN0cmVhbS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyKTtcbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlclJlbGVhc2Uod3JpdGVyKSB7XG4gICAgY29uc3Qgc3RyZWFtID0gd3JpdGVyLl9vd25lcldyaXRhYmxlU3RyZWFtO1xuICAgIGNvbnN0IHJlbGVhc2VkRXJyb3IgPSBuZXcgVHlwZUVycm9yKGBXcml0ZXIgd2FzIHJlbGVhc2VkIGFuZCBjYW4gbm8gbG9uZ2VyIGJlIHVzZWQgdG8gbW9uaXRvciB0aGUgc3RyZWFtJ3MgY2xvc2VkbmVzc2ApO1xuICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlckVuc3VyZVJlYWR5UHJvbWlzZVJlamVjdGVkKHdyaXRlciwgcmVsZWFzZWRFcnJvcik7XG4gICAgLy8gVGhlIHN0YXRlIHRyYW5zaXRpb25zIHRvIFwiZXJyb3JlZFwiIGJlZm9yZSB0aGUgc2luayBhYm9ydCgpIG1ldGhvZCBydW5zLCBidXQgdGhlIHdyaXRlci5jbG9zZWQgcHJvbWlzZSBpcyBub3RcbiAgICAvLyByZWplY3RlZCB1bnRpbCBhZnRlcndhcmRzLiBUaGlzIG1lYW5zIHRoYXQgc2ltcGx5IHRlc3Rpbmcgc3RhdGUgd2lsbCBub3Qgd29yay5cbiAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJFbnN1cmVDbG9zZWRQcm9taXNlUmVqZWN0ZWQod3JpdGVyLCByZWxlYXNlZEVycm9yKTtcbiAgICBzdHJlYW0uX3dyaXRlciA9IHVuZGVmaW5lZDtcbiAgICB3cml0ZXIuX293bmVyV3JpdGFibGVTdHJlYW0gPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJXcml0ZSh3cml0ZXIsIGNodW5rKSB7XG4gICAgY29uc3Qgc3RyZWFtID0gd3JpdGVyLl9vd25lcldyaXRhYmxlU3RyZWFtO1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBzdHJlYW0uX3dyaXRhYmxlU3RyZWFtQ29udHJvbGxlcjtcbiAgICBjb25zdCBjaHVua1NpemUgPSBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyR2V0Q2h1bmtTaXplKGNvbnRyb2xsZXIsIGNodW5rKTtcbiAgICBpZiAoc3RyZWFtICE9PSB3cml0ZXIuX293bmVyV3JpdGFibGVTdHJlYW0pIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZGVmYXVsdFdyaXRlckxvY2tFeGNlcHRpb24oJ3dyaXRlIHRvJykpO1xuICAgIH1cbiAgICBjb25zdCBzdGF0ZSA9IHN0cmVhbS5fc3RhdGU7XG4gICAgaWYgKHN0YXRlID09PSAnZXJyb3JlZCcpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoc3RyZWFtLl9zdG9yZWRFcnJvcik7XG4gICAgfVxuICAgIGlmIChXcml0YWJsZVN0cmVhbUNsb3NlUXVldWVkT3JJbkZsaWdodChzdHJlYW0pIHx8IHN0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKCdUaGUgc3RyZWFtIGlzIGNsb3Npbmcgb3IgY2xvc2VkIGFuZCBjYW5ub3QgYmUgd3JpdHRlbiB0bycpKTtcbiAgICB9XG4gICAgaWYgKHN0YXRlID09PSAnZXJyb3JpbmcnKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgIH1cbiAgICBjb25zdCBwcm9taXNlID0gV3JpdGFibGVTdHJlYW1BZGRXcml0ZVJlcXVlc3Qoc3RyZWFtKTtcbiAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyV3JpdGUoY29udHJvbGxlciwgY2h1bmssIGNodW5rU2l6ZSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5jb25zdCBjbG9zZVNlbnRpbmVsID0ge307XG4vKipcbiAqIEFsbG93cyBjb250cm9sIG9mIGEge0BsaW5rIFdyaXRhYmxlU3RyZWFtIHwgd3JpdGFibGUgc3RyZWFtfSdzIHN0YXRlIGFuZCBpbnRlcm5hbCBxdWV1ZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgY29udHJvbGxlZCB3cml0YWJsZSBzdHJlYW0sIG1ha2luZyBhbGwgZnV0dXJlIGludGVyYWN0aW9ucyB3aXRoIGl0IGZhaWwgd2l0aCB0aGUgZ2l2ZW4gZXJyb3IgYGVgLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgcmFyZWx5IHVzZWQsIHNpbmNlIHVzdWFsbHkgaXQgc3VmZmljZXMgdG8gcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZSBmcm9tIG9uZSBvZiB0aGUgdW5kZXJseWluZ1xuICAgICAqIHNpbmsncyBtZXRob2RzLiBIb3dldmVyLCBpdCBjYW4gYmUgdXNlZnVsIGZvciBzdWRkZW5seSBzaHV0dGluZyBkb3duIGEgc3RyZWFtIGluIHJlc3BvbnNlIHRvIGFuIGV2ZW50IG91dHNpZGUgdGhlXG4gICAgICogbm9ybWFsIGxpZmVjeWNsZSBvZiBpbnRlcmFjdGlvbnMgd2l0aCB0aGUgdW5kZXJseWluZyBzaW5rLlxuICAgICAqL1xuICAgIGVycm9yKGUgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1dyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLmVycm9yIGNhbiBvbmx5IGJlIHVzZWQgb24gYSBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW0uX3N0YXRlO1xuICAgICAgICBpZiAoc3RhdGUgIT09ICd3cml0YWJsZScpIHtcbiAgICAgICAgICAgIC8vIFRoZSBzdHJlYW0gaXMgY2xvc2VkLCBlcnJvcmVkIG9yIHdpbGwgYmUgc29vbi4gVGhlIHNpbmsgY2FuJ3QgZG8gYW55dGhpbmcgdXNlZnVsIGlmIGl0IGdldHMgYW4gZXJyb3IgaGVyZSwgc29cbiAgICAgICAgICAgIC8vIGp1c3QgdHJlYXQgaXQgYXMgYSBuby1vcC5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IodGhpcywgZSk7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBbQWJvcnRTdGVwc10ocmVhc29uKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2Fib3J0QWxnb3JpdGhtKHJlYXNvbik7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbGVhckFsZ29yaXRobXModGhpcyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBbRXJyb3JTdGVwc10oKSB7XG4gICAgICAgIFJlc2V0UXVldWUodGhpcyk7XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlci5wcm90b3R5cGUsIHtcbiAgICBlcnJvcjogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuaWYgKHR5cGVvZiBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCcpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlci5wcm90b3R5cGUsIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiAnV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcicsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xufVxuLy8gQWJzdHJhY3Qgb3BlcmF0aW9ucyBpbXBsZW1lbnRpbmcgaW50ZXJmYWNlIHJlcXVpcmVkIGJ5IHRoZSBXcml0YWJsZVN0cmVhbS5cbmZ1bmN0aW9uIElzV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih4KSB7XG4gICAgaWYgKCF0eXBlSXNPYmplY3QoeCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnX2NvbnRyb2xsZWRXcml0YWJsZVN0cmVhbScpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBTZXRVcFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIoc3RyZWFtLCBjb250cm9sbGVyLCBzdGFydEFsZ29yaXRobSwgd3JpdGVBbGdvcml0aG0sIGNsb3NlQWxnb3JpdGhtLCBhYm9ydEFsZ29yaXRobSwgaGlnaFdhdGVyTWFyaywgc2l6ZUFsZ29yaXRobSkge1xuICAgIGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRXcml0YWJsZVN0cmVhbSA9IHN0cmVhbTtcbiAgICBzdHJlYW0uX3dyaXRhYmxlU3RyZWFtQ29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgLy8gTmVlZCB0byBzZXQgdGhlIHNsb3RzIHNvIHRoYXQgdGhlIGFzc2VydCBkb2Vzbid0IGZpcmUuIEluIHRoZSBzcGVjIHRoZSBzbG90cyBhbHJlYWR5IGV4aXN0IGltcGxpY2l0bHkuXG4gICAgY29udHJvbGxlci5fcXVldWUgPSB1bmRlZmluZWQ7XG4gICAgY29udHJvbGxlci5fcXVldWVUb3RhbFNpemUgPSB1bmRlZmluZWQ7XG4gICAgUmVzZXRRdWV1ZShjb250cm9sbGVyKTtcbiAgICBjb250cm9sbGVyLl9zdGFydGVkID0gZmFsc2U7XG4gICAgY29udHJvbGxlci5fc3RyYXRlZ3lTaXplQWxnb3JpdGhtID0gc2l6ZUFsZ29yaXRobTtcbiAgICBjb250cm9sbGVyLl9zdHJhdGVneUhXTSA9IGhpZ2hXYXRlck1hcms7XG4gICAgY29udHJvbGxlci5fd3JpdGVBbGdvcml0aG0gPSB3cml0ZUFsZ29yaXRobTtcbiAgICBjb250cm9sbGVyLl9jbG9zZUFsZ29yaXRobSA9IGNsb3NlQWxnb3JpdGhtO1xuICAgIGNvbnRyb2xsZXIuX2Fib3J0QWxnb3JpdGhtID0gYWJvcnRBbGdvcml0aG07XG4gICAgY29uc3QgYmFja3ByZXNzdXJlID0gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldEJhY2twcmVzc3VyZShjb250cm9sbGVyKTtcbiAgICBXcml0YWJsZVN0cmVhbVVwZGF0ZUJhY2twcmVzc3VyZShzdHJlYW0sIGJhY2twcmVzc3VyZSk7XG4gICAgY29uc3Qgc3RhcnRSZXN1bHQgPSBzdGFydEFsZ29yaXRobSgpO1xuICAgIGNvbnN0IHN0YXJ0UHJvbWlzZSA9IHByb21pc2VSZXNvbHZlZFdpdGgoc3RhcnRSZXN1bHQpO1xuICAgIHVwb25Qcm9taXNlKHN0YXJ0UHJvbWlzZSwgKCkgPT4ge1xuICAgICAgICBjb250cm9sbGVyLl9zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckFkdmFuY2VRdWV1ZUlmTmVlZGVkKGNvbnRyb2xsZXIpO1xuICAgIH0sIHIgPT4ge1xuICAgICAgICBjb250cm9sbGVyLl9zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgV3JpdGFibGVTdHJlYW1EZWFsV2l0aFJlamVjdGlvbihzdHJlYW0sIHIpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gU2V0VXBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRnJvbVVuZGVybHlpbmdTaW5rKHN0cmVhbSwgdW5kZXJseWluZ1NpbmssIGhpZ2hXYXRlck1hcmssIHNpemVBbGdvcml0aG0pIHtcbiAgICBjb25zdCBjb250cm9sbGVyID0gT2JqZWN0LmNyZWF0ZShXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSk7XG4gICAgbGV0IHN0YXJ0QWxnb3JpdGhtID0gKCkgPT4gdW5kZWZpbmVkO1xuICAgIGxldCB3cml0ZUFsZ29yaXRobSA9ICgpID0+IHByb21pc2VSZXNvbHZlZFdpdGgodW5kZWZpbmVkKTtcbiAgICBsZXQgY2xvc2VBbGdvcml0aG0gPSAoKSA9PiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgbGV0IGFib3J0QWxnb3JpdGhtID0gKCkgPT4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgIGlmICh1bmRlcmx5aW5nU2luay5zdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0YXJ0QWxnb3JpdGhtID0gKCkgPT4gdW5kZXJseWluZ1Npbmsuc3RhcnQoY29udHJvbGxlcik7XG4gICAgfVxuICAgIGlmICh1bmRlcmx5aW5nU2luay53cml0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHdyaXRlQWxnb3JpdGhtID0gY2h1bmsgPT4gdW5kZXJseWluZ1Npbmsud3JpdGUoY2h1bmssIGNvbnRyb2xsZXIpO1xuICAgIH1cbiAgICBpZiAodW5kZXJseWluZ1NpbmsuY2xvc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjbG9zZUFsZ29yaXRobSA9ICgpID0+IHVuZGVybHlpbmdTaW5rLmNsb3NlKCk7XG4gICAgfVxuICAgIGlmICh1bmRlcmx5aW5nU2luay5hYm9ydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFib3J0QWxnb3JpdGhtID0gcmVhc29uID0+IHVuZGVybHlpbmdTaW5rLmFib3J0KHJlYXNvbik7XG4gICAgfVxuICAgIFNldFVwV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcihzdHJlYW0sIGNvbnRyb2xsZXIsIHN0YXJ0QWxnb3JpdGhtLCB3cml0ZUFsZ29yaXRobSwgY2xvc2VBbGdvcml0aG0sIGFib3J0QWxnb3JpdGhtLCBoaWdoV2F0ZXJNYXJrLCBzaXplQWxnb3JpdGhtKTtcbn1cbi8vIENsZWFyQWxnb3JpdGhtcyBtYXkgYmUgY2FsbGVkIHR3aWNlLiBFcnJvcmluZyB0aGUgc2FtZSBzdHJlYW0gaW4gbXVsdGlwbGUgd2F5cyB3aWxsIG9mdGVuIHJlc3VsdCBpbiByZWR1bmRhbnQgY2FsbHMuXG5mdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKGNvbnRyb2xsZXIpIHtcbiAgICBjb250cm9sbGVyLl93cml0ZUFsZ29yaXRobSA9IHVuZGVmaW5lZDtcbiAgICBjb250cm9sbGVyLl9jbG9zZUFsZ29yaXRobSA9IHVuZGVmaW5lZDtcbiAgICBjb250cm9sbGVyLl9hYm9ydEFsZ29yaXRobSA9IHVuZGVmaW5lZDtcbiAgICBjb250cm9sbGVyLl9zdHJhdGVneVNpemVBbGdvcml0aG0gPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xvc2UoY29udHJvbGxlcikge1xuICAgIEVucXVldWVWYWx1ZVdpdGhTaXplKGNvbnRyb2xsZXIsIGNsb3NlU2VudGluZWwsIDApO1xuICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJBZHZhbmNlUXVldWVJZk5lZWRlZChjb250cm9sbGVyKTtcbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJHZXRDaHVua1NpemUoY29udHJvbGxlciwgY2h1bmspIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gY29udHJvbGxlci5fc3RyYXRlZ3lTaXplQWxnb3JpdGhtKGNodW5rKTtcbiAgICB9XG4gICAgY2F0Y2ggKGNodW5rU2l6ZUUpIHtcbiAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9ySWZOZWVkZWQoY29udHJvbGxlciwgY2h1bmtTaXplRSk7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJHZXREZXNpcmVkU2l6ZShjb250cm9sbGVyKSB7XG4gICAgcmV0dXJuIGNvbnRyb2xsZXIuX3N0cmF0ZWd5SFdNIC0gY29udHJvbGxlci5fcXVldWVUb3RhbFNpemU7XG59XG5mdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyV3JpdGUoY29udHJvbGxlciwgY2h1bmssIGNodW5rU2l6ZSkge1xuICAgIHRyeSB7XG4gICAgICAgIEVucXVldWVWYWx1ZVdpdGhTaXplKGNvbnRyb2xsZXIsIGNodW5rLCBjaHVua1NpemUpO1xuICAgIH1cbiAgICBjYXRjaCAoZW5xdWV1ZUUpIHtcbiAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9ySWZOZWVkZWQoY29udHJvbGxlciwgZW5xdWV1ZUUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRXcml0YWJsZVN0cmVhbTtcbiAgICBpZiAoIVdyaXRhYmxlU3RyZWFtQ2xvc2VRdWV1ZWRPckluRmxpZ2h0KHN0cmVhbSkgJiYgc3RyZWFtLl9zdGF0ZSA9PT0gJ3dyaXRhYmxlJykge1xuICAgICAgICBjb25zdCBiYWNrcHJlc3N1cmUgPSBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyR2V0QmFja3ByZXNzdXJlKGNvbnRyb2xsZXIpO1xuICAgICAgICBXcml0YWJsZVN0cmVhbVVwZGF0ZUJhY2twcmVzc3VyZShzdHJlYW0sIGJhY2twcmVzc3VyZSk7XG4gICAgfVxuICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJBZHZhbmNlUXVldWVJZk5lZWRlZChjb250cm9sbGVyKTtcbn1cbi8vIEFic3RyYWN0IG9wZXJhdGlvbnMgZm9yIHRoZSBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLlxuZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckFkdmFuY2VRdWV1ZUlmTmVlZGVkKGNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW07XG4gICAgaWYgKCFjb250cm9sbGVyLl9zdGFydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHN0cmVhbS5faW5GbGlnaHRXcml0ZVJlcXVlc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0YXRlID0gc3RyZWFtLl9zdGF0ZTtcbiAgICBpZiAoc3RhdGUgPT09ICdlcnJvcmluZycpIHtcbiAgICAgICAgV3JpdGFibGVTdHJlYW1GaW5pc2hFcnJvcmluZyhzdHJlYW0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb250cm9sbGVyLl9xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IFBlZWtRdWV1ZVZhbHVlKGNvbnRyb2xsZXIpO1xuICAgIGlmICh2YWx1ZSA9PT0gY2xvc2VTZW50aW5lbCkge1xuICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyUHJvY2Vzc0Nsb3NlKGNvbnRyb2xsZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlclByb2Nlc3NXcml0ZShjb250cm9sbGVyLCB2YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9ySWZOZWVkZWQoY29udHJvbGxlciwgZXJyb3IpIHtcbiAgICBpZiAoY29udHJvbGxlci5fY29udHJvbGxlZFdyaXRhYmxlU3RyZWFtLl9zdGF0ZSA9PT0gJ3dyaXRhYmxlJykge1xuICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgZXJyb3IpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJQcm9jZXNzQ2xvc2UoY29udHJvbGxlcikge1xuICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRXcml0YWJsZVN0cmVhbTtcbiAgICBXcml0YWJsZVN0cmVhbU1hcmtDbG9zZVJlcXVlc3RJbkZsaWdodChzdHJlYW0pO1xuICAgIERlcXVldWVWYWx1ZShjb250cm9sbGVyKTtcbiAgICBjb25zdCBzaW5rQ2xvc2VQcm9taXNlID0gY29udHJvbGxlci5fY2xvc2VBbGdvcml0aG0oKTtcbiAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKGNvbnRyb2xsZXIpO1xuICAgIHVwb25Qcm9taXNlKHNpbmtDbG9zZVByb21pc2UsICgpID0+IHtcbiAgICAgICAgV3JpdGFibGVTdHJlYW1GaW5pc2hJbkZsaWdodENsb3NlKHN0cmVhbSk7XG4gICAgfSwgcmVhc29uID0+IHtcbiAgICAgICAgV3JpdGFibGVTdHJlYW1GaW5pc2hJbkZsaWdodENsb3NlV2l0aEVycm9yKHN0cmVhbSwgcmVhc29uKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJQcm9jZXNzV3JpdGUoY29udHJvbGxlciwgY2h1bmspIHtcbiAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW07XG4gICAgV3JpdGFibGVTdHJlYW1NYXJrRmlyc3RXcml0ZVJlcXVlc3RJbkZsaWdodChzdHJlYW0pO1xuICAgIGNvbnN0IHNpbmtXcml0ZVByb21pc2UgPSBjb250cm9sbGVyLl93cml0ZUFsZ29yaXRobShjaHVuayk7XG4gICAgdXBvblByb21pc2Uoc2lua1dyaXRlUHJvbWlzZSwgKCkgPT4ge1xuICAgICAgICBXcml0YWJsZVN0cmVhbUZpbmlzaEluRmxpZ2h0V3JpdGUoc3RyZWFtKTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdHJlYW0uX3N0YXRlO1xuICAgICAgICBEZXF1ZXVlVmFsdWUoY29udHJvbGxlcik7XG4gICAgICAgIGlmICghV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoc3RyZWFtKSAmJiBzdGF0ZSA9PT0gJ3dyaXRhYmxlJykge1xuICAgICAgICAgICAgY29uc3QgYmFja3ByZXNzdXJlID0gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldEJhY2twcmVzc3VyZShjb250cm9sbGVyKTtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtVXBkYXRlQmFja3ByZXNzdXJlKHN0cmVhbSwgYmFja3ByZXNzdXJlKTtcbiAgICAgICAgfVxuICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQWR2YW5jZVF1ZXVlSWZOZWVkZWQoY29udHJvbGxlcik7XG4gICAgfSwgcmVhc29uID0+IHtcbiAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09ICd3cml0YWJsZScpIHtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgV3JpdGFibGVTdHJlYW1GaW5pc2hJbkZsaWdodFdyaXRlV2l0aEVycm9yKHN0cmVhbSwgcmVhc29uKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJHZXRCYWNrcHJlc3N1cmUoY29udHJvbGxlcikge1xuICAgIGNvbnN0IGRlc2lyZWRTaXplID0gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldERlc2lyZWRTaXplKGNvbnRyb2xsZXIpO1xuICAgIHJldHVybiBkZXNpcmVkU2l6ZSA8PSAwO1xufVxuLy8gQSBjbGllbnQgb2YgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlciBtYXkgdXNlIHRoZXNlIGZ1bmN0aW9ucyBkaXJlY3RseSB0byBieXBhc3Mgc3RhdGUgY2hlY2suXG5mdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgZXJyb3IpIHtcbiAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW07XG4gICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKTtcbiAgICBXcml0YWJsZVN0cmVhbVN0YXJ0RXJyb3Jpbmcoc3RyZWFtLCBlcnJvcik7XG59XG4vLyBIZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgV3JpdGFibGVTdHJlYW0uXG5mdW5jdGlvbiBzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgV3JpdGFibGVTdHJlYW0ucHJvdG90eXBlLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIFdyaXRhYmxlU3RyZWFtYCk7XG59XG4vLyBIZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyLlxuZnVuY3Rpb24gZGVmYXVsdFdyaXRlckJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKGBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIucHJvdG90eXBlLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdFdyaXRlckxvY2tFeGNlcHRpb24obmFtZSkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKCdDYW5ub3QgJyArIG5hbWUgKyAnIGEgc3RyZWFtIHVzaW5nIGEgcmVsZWFzZWQgd3JpdGVyJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemUod3JpdGVyKSB7XG4gICAgd3JpdGVyLl9jbG9zZWRQcm9taXNlID0gbmV3UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdyaXRlci5fY2xvc2VkUHJvbWlzZV9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgd3JpdGVyLl9jbG9zZWRQcm9taXNlX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgd3JpdGVyLl9jbG9zZWRQcm9taXNlU3RhdGUgPSAncGVuZGluZyc7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemVBc1JlamVjdGVkKHdyaXRlciwgcmVhc29uKSB7XG4gICAgZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VJbml0aWFsaXplKHdyaXRlcik7XG4gICAgZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VSZWplY3Qod3JpdGVyLCByZWFzb24pO1xufVxuZnVuY3Rpb24gZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VJbml0aWFsaXplQXNSZXNvbHZlZCh3cml0ZXIpIHtcbiAgICBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemUod3JpdGVyKTtcbiAgICBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZVJlc29sdmUod3JpdGVyKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlUmVqZWN0KHdyaXRlciwgcmVhc29uKSB7XG4gICAgaWYgKHdyaXRlci5fY2xvc2VkUHJvbWlzZV9yZWplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFByb21pc2VJc0hhbmRsZWRUb1RydWUod3JpdGVyLl9jbG9zZWRQcm9taXNlKTtcbiAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VfcmVqZWN0KHJlYXNvbik7XG4gICAgd3JpdGVyLl9jbG9zZWRQcm9taXNlX3Jlc29sdmUgPSB1bmRlZmluZWQ7XG4gICAgd3JpdGVyLl9jbG9zZWRQcm9taXNlX3JlamVjdCA9IHVuZGVmaW5lZDtcbiAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VTdGF0ZSA9ICdyZWplY3RlZCc7XG59XG5mdW5jdGlvbiBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZVJlc2V0VG9SZWplY3RlZCh3cml0ZXIsIHJlYXNvbikge1xuICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZUFzUmVqZWN0ZWQod3JpdGVyLCByZWFzb24pO1xufVxuZnVuY3Rpb24gZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VSZXNvbHZlKHdyaXRlcikge1xuICAgIGlmICh3cml0ZXIuX2Nsb3NlZFByb21pc2VfcmVzb2x2ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd3JpdGVyLl9jbG9zZWRQcm9taXNlX3Jlc29sdmUodW5kZWZpbmVkKTtcbiAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VfcmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VfcmVqZWN0ID0gdW5kZWZpbmVkO1xuICAgIHdyaXRlci5fY2xvc2VkUHJvbWlzZVN0YXRlID0gJ3Jlc29sdmVkJztcbn1cbmZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VJbml0aWFsaXplKHdyaXRlcikge1xuICAgIHdyaXRlci5fcmVhZHlQcm9taXNlID0gbmV3UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdyaXRlci5fcmVhZHlQcm9taXNlX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB3cml0ZXIuX3JlYWR5UHJvbWlzZV9yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG4gICAgd3JpdGVyLl9yZWFkeVByb21pc2VTdGF0ZSA9ICdwZW5kaW5nJztcbn1cbmZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VJbml0aWFsaXplQXNSZWplY3RlZCh3cml0ZXIsIHJlYXNvbikge1xuICAgIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VJbml0aWFsaXplKHdyaXRlcik7XG4gICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZVJlamVjdCh3cml0ZXIsIHJlYXNvbik7XG59XG5mdW5jdGlvbiBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZUFzUmVzb2x2ZWQod3JpdGVyKSB7XG4gICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZUluaXRpYWxpemUod3JpdGVyKTtcbiAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlUmVzb2x2ZSh3cml0ZXIpO1xufVxuZnVuY3Rpb24gZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZVJlamVjdCh3cml0ZXIsIHJlYXNvbikge1xuICAgIGlmICh3cml0ZXIuX3JlYWR5UHJvbWlzZV9yZWplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFByb21pc2VJc0hhbmRsZWRUb1RydWUod3JpdGVyLl9yZWFkeVByb21pc2UpO1xuICAgIHdyaXRlci5fcmVhZHlQcm9taXNlX3JlamVjdChyZWFzb24pO1xuICAgIHdyaXRlci5fcmVhZHlQcm9taXNlX3Jlc29sdmUgPSB1bmRlZmluZWQ7XG4gICAgd3JpdGVyLl9yZWFkeVByb21pc2VfcmVqZWN0ID0gdW5kZWZpbmVkO1xuICAgIHdyaXRlci5fcmVhZHlQcm9taXNlU3RhdGUgPSAncmVqZWN0ZWQnO1xufVxuZnVuY3Rpb24gZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZVJlc2V0KHdyaXRlcikge1xuICAgIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VJbml0aWFsaXplKHdyaXRlcik7XG59XG5mdW5jdGlvbiBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlUmVzZXRUb1JlamVjdGVkKHdyaXRlciwgcmVhc29uKSB7XG4gICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZUluaXRpYWxpemVBc1JlamVjdGVkKHdyaXRlciwgcmVhc29uKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VSZXNvbHZlKHdyaXRlcikge1xuICAgIGlmICh3cml0ZXIuX3JlYWR5UHJvbWlzZV9yZXNvbHZlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3cml0ZXIuX3JlYWR5UHJvbWlzZV9yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgd3JpdGVyLl9yZWFkeVByb21pc2VfcmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICB3cml0ZXIuX3JlYWR5UHJvbWlzZV9yZWplY3QgPSB1bmRlZmluZWQ7XG4gICAgd3JpdGVyLl9yZWFkeVByb21pc2VTdGF0ZSA9ICdmdWxmaWxsZWQnO1xufVxuXG5mdW5jdGlvbiBpc0Fib3J0U2lnbmFsKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlLmFib3J0ZWQgPT09ICdib29sZWFuJztcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIC8vIEFib3J0U2lnbmFsLnByb3RvdHlwZS5hYm9ydGVkIHRocm93cyBpZiBpdHMgYnJhbmQgY2hlY2sgZmFpbHNcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLy8vIDxyZWZlcmVuY2UgbGliPVwiZG9tXCIgLz5cbmNvbnN0IE5hdGl2ZURPTUV4Y2VwdGlvbiA9IHR5cGVvZiBET01FeGNlcHRpb24gIT09ICd1bmRlZmluZWQnID8gRE9NRXhjZXB0aW9uIDogdW5kZWZpbmVkO1xuXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cIm5vZGVcIiAvPlxuZnVuY3Rpb24gaXNET01FeGNlcHRpb25Db25zdHJ1Y3RvcihjdG9yKSB7XG4gICAgaWYgKCEodHlwZW9mIGN0b3IgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGN0b3IgPT09ICdvYmplY3QnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIG5ldyBjdG9yKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZURPTUV4Y2VwdGlvblBvbHlmaWxsKCkge1xuICAgIGNvbnN0IGN0b3IgPSBmdW5jdGlvbiBET01FeGNlcHRpb24obWVzc2FnZSwgbmFtZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lIHx8ICdFcnJvcic7XG4gICAgICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdG9yLnByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgeyB2YWx1ZTogY3Rvciwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICByZXR1cm4gY3Rvcjtcbn1cbmNvbnN0IERPTUV4Y2VwdGlvbiQxID0gaXNET01FeGNlcHRpb25Db25zdHJ1Y3RvcihOYXRpdmVET01FeGNlcHRpb24pID8gTmF0aXZlRE9NRXhjZXB0aW9uIDogY3JlYXRlRE9NRXhjZXB0aW9uUG9seWZpbGwoKTtcblxuZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1QaXBlVG8oc291cmNlLCBkZXN0LCBwcmV2ZW50Q2xvc2UsIHByZXZlbnRBYm9ydCwgcHJldmVudENhbmNlbCwgc2lnbmFsKSB7XG4gICAgY29uc3QgcmVhZGVyID0gQWNxdWlyZVJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcihzb3VyY2UpO1xuICAgIGNvbnN0IHdyaXRlciA9IEFjcXVpcmVXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIoZGVzdCk7XG4gICAgc291cmNlLl9kaXN0dXJiZWQgPSB0cnVlO1xuICAgIGxldCBzaHV0dGluZ0Rvd24gPSBmYWxzZTtcbiAgICAvLyBUaGlzIGlzIHVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgc3BlYydzIHJlcXVpcmVtZW50IHRoYXQgd2Ugd2FpdCBmb3Igb25nb2luZyB3cml0ZXMgZHVyaW5nIHNodXRkb3duLlxuICAgIGxldCBjdXJyZW50V3JpdGUgPSBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG5ld1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgYWJvcnRBbGdvcml0aG07XG4gICAgICAgIGlmIChzaWduYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWJvcnRBbGdvcml0aG0gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRE9NRXhjZXB0aW9uJDEoJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRBYm9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3QuX3N0YXRlID09PSAnd3JpdGFibGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFdyaXRhYmxlU3RyZWFtQWJvcnQoZGVzdCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlZFdpdGgodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghcHJldmVudENhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5fc3RhdGUgPT09ICdyZWFkYWJsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhZGFibGVTdHJlYW1DYW5jZWwoc291cmNlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2h1dGRvd25XaXRoQWN0aW9uKCgpID0+IFByb21pc2UuYWxsKGFjdGlvbnMubWFwKGFjdGlvbiA9PiBhY3Rpb24oKSkpLCB0cnVlLCBlcnJvcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgYWJvcnRBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEFsZ29yaXRobSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXNpbmcgcmVhZGVyIGFuZCB3cml0ZXIsIHJlYWQgYWxsIGNodW5rcyBmcm9tIHRoaXMgYW5kIHdyaXRlIHRoZW0gdG8gZGVzdFxuICAgICAgICAvLyAtIEJhY2twcmVzc3VyZSBtdXN0IGJlIGVuZm9yY2VkXG4gICAgICAgIC8vIC0gU2h1dGRvd24gbXVzdCBzdG9wIGFsbCBhY3Rpdml0eVxuICAgICAgICBmdW5jdGlvbiBwaXBlTG9vcCgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdQcm9taXNlKChyZXNvbHZlTG9vcCwgcmVqZWN0TG9vcCkgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG5leHQoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUxvb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSBgUGVyZm9ybVByb21pc2VUaGVuYCBpbnN0ZWFkIG9mIGB1cG9uUHJvbWlzZWAgdG8gYXZvaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZGluZyB1bm5lY2Vzc2FyeSBgLmNhdGNoKHJldGhyb3dBc3NlcnRpb25FcnJvclJlamVjdGlvbilgIGhhbmRsZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBQZXJmb3JtUHJvbWlzZVRoZW4ocGlwZVN0ZXAoKSwgbmV4dCwgcmVqZWN0TG9vcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dChmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwaXBlU3RlcCgpIHtcbiAgICAgICAgICAgIGlmIChzaHV0dGluZ0Rvd24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQZXJmb3JtUHJvbWlzZVRoZW4od3JpdGVyLl9yZWFkeVByb21pc2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3UHJvbWlzZSgocmVzb2x2ZVJlYWQsIHJlamVjdFJlYWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyUmVhZChyZWFkZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jaHVua1N0ZXBzOiBjaHVuayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFdyaXRlID0gUGVyZm9ybVByb21pc2VUaGVuKFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcldyaXRlKHdyaXRlciwgY2h1bmspLCB1bmRlZmluZWQsIG5vb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVSZWFkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfY2xvc2VTdGVwczogKCkgPT4gcmVzb2x2ZVJlYWQodHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfZXJyb3JTdGVwczogcmVqZWN0UmVhZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVycm9ycyBtdXN0IGJlIHByb3BhZ2F0ZWQgZm9yd2FyZFxuICAgICAgICBpc09yQmVjb21lc0Vycm9yZWQoc291cmNlLCByZWFkZXIuX2Nsb3NlZFByb21pc2UsIHN0b3JlZEVycm9yID0+IHtcbiAgICAgICAgICAgIGlmICghcHJldmVudEFib3J0KSB7XG4gICAgICAgICAgICAgICAgc2h1dGRvd25XaXRoQWN0aW9uKCgpID0+IFdyaXRhYmxlU3RyZWFtQWJvcnQoZGVzdCwgc3RvcmVkRXJyb3IpLCB0cnVlLCBzdG9yZWRFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaHV0ZG93bih0cnVlLCBzdG9yZWRFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBFcnJvcnMgbXVzdCBiZSBwcm9wYWdhdGVkIGJhY2t3YXJkXG4gICAgICAgIGlzT3JCZWNvbWVzRXJyb3JlZChkZXN0LCB3cml0ZXIuX2Nsb3NlZFByb21pc2UsIHN0b3JlZEVycm9yID0+IHtcbiAgICAgICAgICAgIGlmICghcHJldmVudENhbmNlbCkge1xuICAgICAgICAgICAgICAgIHNodXRkb3duV2l0aEFjdGlvbigoKSA9PiBSZWFkYWJsZVN0cmVhbUNhbmNlbChzb3VyY2UsIHN0b3JlZEVycm9yKSwgdHJ1ZSwgc3RvcmVkRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2h1dGRvd24odHJ1ZSwgc3RvcmVkRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ2xvc2luZyBtdXN0IGJlIHByb3BhZ2F0ZWQgZm9yd2FyZFxuICAgICAgICBpc09yQmVjb21lc0Nsb3NlZChzb3VyY2UsIHJlYWRlci5fY2xvc2VkUHJvbWlzZSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcmV2ZW50Q2xvc2UpIHtcbiAgICAgICAgICAgICAgICBzaHV0ZG93bldpdGhBY3Rpb24oKCkgPT4gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyQ2xvc2VXaXRoRXJyb3JQcm9wYWdhdGlvbih3cml0ZXIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNodXRkb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDbG9zaW5nIG11c3QgYmUgcHJvcGFnYXRlZCBiYWNrd2FyZFxuICAgICAgICBpZiAoV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoZGVzdCkgfHwgZGVzdC5fc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBkZXN0Q2xvc2VkID0gbmV3IFR5cGVFcnJvcigndGhlIGRlc3RpbmF0aW9uIHdyaXRhYmxlIHN0cmVhbSBjbG9zZWQgYmVmb3JlIGFsbCBkYXRhIGNvdWxkIGJlIHBpcGVkIHRvIGl0Jyk7XG4gICAgICAgICAgICBpZiAoIXByZXZlbnRDYW5jZWwpIHtcbiAgICAgICAgICAgICAgICBzaHV0ZG93bldpdGhBY3Rpb24oKCkgPT4gUmVhZGFibGVTdHJlYW1DYW5jZWwoc291cmNlLCBkZXN0Q2xvc2VkKSwgdHJ1ZSwgZGVzdENsb3NlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaHV0ZG93bih0cnVlLCBkZXN0Q2xvc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRQcm9taXNlSXNIYW5kbGVkVG9UcnVlKHBpcGVMb29wKCkpO1xuICAgICAgICBmdW5jdGlvbiB3YWl0Rm9yV3JpdGVzVG9GaW5pc2goKSB7XG4gICAgICAgICAgICAvLyBBbm90aGVyIHdyaXRlIG1heSBoYXZlIHN0YXJ0ZWQgd2hpbGUgd2Ugd2VyZSB3YWl0aW5nIG9uIHRoaXMgY3VycmVudFdyaXRlLCBzbyB3ZSBoYXZlIHRvIGJlIHN1cmUgdG8gd2FpdFxuICAgICAgICAgICAgLy8gZm9yIHRoYXQgdG9vLlxuICAgICAgICAgICAgY29uc3Qgb2xkQ3VycmVudFdyaXRlID0gY3VycmVudFdyaXRlO1xuICAgICAgICAgICAgcmV0dXJuIFBlcmZvcm1Qcm9taXNlVGhlbihjdXJyZW50V3JpdGUsICgpID0+IG9sZEN1cnJlbnRXcml0ZSAhPT0gY3VycmVudFdyaXRlID8gd2FpdEZvcldyaXRlc1RvRmluaXNoKCkgOiB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzT3JCZWNvbWVzRXJyb3JlZChzdHJlYW0sIHByb21pc2UsIGFjdGlvbikge1xuICAgICAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09ICdlcnJvcmVkJykge1xuICAgICAgICAgICAgICAgIGFjdGlvbihzdHJlYW0uX3N0b3JlZEVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwb25SZWplY3Rpb24ocHJvbWlzZSwgYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc09yQmVjb21lc0Nsb3NlZChzdHJlYW0sIHByb21pc2UsIGFjdGlvbikge1xuICAgICAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cG9uRnVsZmlsbG1lbnQocHJvbWlzZSwgYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzaHV0ZG93bldpdGhBY3Rpb24oYWN0aW9uLCBvcmlnaW5hbElzRXJyb3IsIG9yaWdpbmFsRXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChzaHV0dGluZ0Rvd24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaHV0dGluZ0Rvd24gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGRlc3QuX3N0YXRlID09PSAnd3JpdGFibGUnICYmICFXcml0YWJsZVN0cmVhbUNsb3NlUXVldWVkT3JJbkZsaWdodChkZXN0KSkge1xuICAgICAgICAgICAgICAgIHVwb25GdWxmaWxsbWVudCh3YWl0Rm9yV3JpdGVzVG9GaW5pc2goKSwgZG9UaGVSZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvVGhlUmVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZG9UaGVSZXN0KCkge1xuICAgICAgICAgICAgICAgIHVwb25Qcm9taXNlKGFjdGlvbigpLCAoKSA9PiBmaW5hbGl6ZShvcmlnaW5hbElzRXJyb3IsIG9yaWdpbmFsRXJyb3IpLCBuZXdFcnJvciA9PiBmaW5hbGl6ZSh0cnVlLCBuZXdFcnJvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNodXRkb3duKGlzRXJyb3IsIGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoc2h1dHRpbmdEb3duKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2h1dHRpbmdEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChkZXN0Ll9zdGF0ZSA9PT0gJ3dyaXRhYmxlJyAmJiAhV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoZGVzdCkpIHtcbiAgICAgICAgICAgICAgICB1cG9uRnVsZmlsbG1lbnQod2FpdEZvcldyaXRlc1RvRmluaXNoKCksICgpID0+IGZpbmFsaXplKGlzRXJyb3IsIGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaW5hbGl6ZShpc0Vycm9yLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZmluYWxpemUoaXNFcnJvciwgZXJyb3IpIHtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlclJlbGVhc2Uod3JpdGVyKTtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY1JlbGVhc2UocmVhZGVyKTtcbiAgICAgICAgICAgIGlmIChzaWduYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QWxnb3JpdGhtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIEFsbG93cyBjb250cm9sIG9mIGEge0BsaW5rIFJlYWRhYmxlU3RyZWFtIHwgcmVhZGFibGUgc3RyZWFtfSdzIHN0YXRlIGFuZCBpbnRlcm5hbCBxdWV1ZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRlc2lyZWQgc2l6ZSB0byBmaWxsIHRoZSBjb250cm9sbGVkIHN0cmVhbSdzIGludGVybmFsIHF1ZXVlLiBJdCBjYW4gYmUgbmVnYXRpdmUsIGlmIHRoZSBxdWV1ZSBpc1xuICAgICAqIG92ZXItZnVsbC4gQW4gdW5kZXJseWluZyBzb3VyY2Ugb3VnaHQgdG8gdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gZGV0ZXJtaW5lIHdoZW4gYW5kIGhvdyB0byBhcHBseSBiYWNrcHJlc3N1cmUuXG4gICAgICovXG4gICAgZ2V0IGRlc2lyZWRTaXplKCkge1xuICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdkZXNpcmVkU2l6ZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyR2V0RGVzaXJlZFNpemUodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgY29udHJvbGxlZCByZWFkYWJsZSBzdHJlYW0uIENvbnN1bWVycyB3aWxsIHN0aWxsIGJlIGFibGUgdG8gcmVhZCBhbnkgcHJldmlvdXNseS1lbnF1ZXVlZCBjaHVua3MgZnJvbVxuICAgICAqIHRoZSBzdHJlYW0sIGJ1dCBvbmNlIHRob3NlIGFyZSByZWFkLCB0aGUgc3RyZWFtIHdpbGwgYmVjb21lIGNsb3NlZC5cbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IGRlZmF1bHRDb250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbignY2xvc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDYW5DbG9zZU9yRW5xdWV1ZSh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHN0cmVhbSBpcyBub3QgaW4gYSBzdGF0ZSB0aGF0IHBlcm1pdHMgY2xvc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xvc2UodGhpcyk7XG4gICAgfVxuICAgIGVucXVldWUoY2h1bmsgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IGRlZmF1bHRDb250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbignZW5xdWV1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbkNsb3NlT3JFbnF1ZXVlKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgc3RyZWFtIGlzIG5vdCBpbiBhIHN0YXRlIHRoYXQgcGVybWl0cyBlbnF1ZXVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFbnF1ZXVlKHRoaXMsIGNodW5rKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXJyb3JzIHRoZSBjb250cm9sbGVkIHJlYWRhYmxlIHN0cmVhbSwgbWFraW5nIGFsbCBmdXR1cmUgaW50ZXJhY3Rpb25zIHdpdGggaXQgZmFpbCB3aXRoIHRoZSBnaXZlbiBlcnJvciBgZWAuXG4gICAgICovXG4gICAgZXJyb3IoZSA9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uKCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcih0aGlzLCBlKTtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIFtDYW5jZWxTdGVwc10ocmVhc29uKSB7XG4gICAgICAgIFJlc2V0UXVldWUodGhpcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2NhbmNlbEFsZ29yaXRobShyZWFzb24pO1xuICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKHRoaXMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgW1B1bGxTdGVwc10ocmVhZFJlcXVlc3QpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fY29udHJvbGxlZFJlYWRhYmxlU3RyZWFtO1xuICAgICAgICBpZiAodGhpcy5fcXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBEZXF1ZXVlVmFsdWUodGhpcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VSZXF1ZXN0ZWQgJiYgdGhpcy5fcXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyh0aGlzKTtcbiAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbUNsb3NlKHN0cmVhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWRSZXF1ZXN0Ll9jaHVua1N0ZXBzKGNodW5rKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtQWRkUmVhZFJlcXVlc3Qoc3RyZWFtLCByZWFkUmVxdWVzdCk7XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLCB7XG4gICAgY2xvc2U6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIGVucXVldWU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIGVycm9yOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICBkZXNpcmVkU2l6ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuaWYgKHR5cGVvZiBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCcpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlci5wcm90b3R5cGUsIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiAnUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcicsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xufVxuLy8gQWJzdHJhY3Qgb3BlcmF0aW9ucyBmb3IgdGhlIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIuXG5mdW5jdGlvbiBJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIoeCkge1xuICAgIGlmICghdHlwZUlzT2JqZWN0KHgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeCwgJ19jb250cm9sbGVkUmVhZGFibGVTdHJlYW0nKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoY29udHJvbGxlcikge1xuICAgIGNvbnN0IHNob3VsZFB1bGwgPSBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyU2hvdWxkQ2FsbFB1bGwoY29udHJvbGxlcik7XG4gICAgaWYgKCFzaG91bGRQdWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbnRyb2xsZXIuX3B1bGxpbmcpIHtcbiAgICAgICAgY29udHJvbGxlci5fcHVsbEFnYWluID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb250cm9sbGVyLl9wdWxsaW5nID0gdHJ1ZTtcbiAgICBjb25zdCBwdWxsUHJvbWlzZSA9IGNvbnRyb2xsZXIuX3B1bGxBbGdvcml0aG0oKTtcbiAgICB1cG9uUHJvbWlzZShwdWxsUHJvbWlzZSwgKCkgPT4ge1xuICAgICAgICBjb250cm9sbGVyLl9wdWxsaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9wdWxsQWdhaW4pIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuX3B1bGxBZ2FpbiA9IGZhbHNlO1xuICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoY29udHJvbGxlcik7XG4gICAgICAgIH1cbiAgICB9LCBlID0+IHtcbiAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9yKGNvbnRyb2xsZXIsIGUpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlclNob3VsZENhbGxQdWxsKGNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVTdHJlYW07XG4gICAgaWYgKCFSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FuQ2xvc2VPckVucXVldWUoY29udHJvbGxlcikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWNvbnRyb2xsZXIuX3N0YXJ0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoSXNSZWFkYWJsZVN0cmVhbUxvY2tlZChzdHJlYW0pICYmIFJlYWRhYmxlU3RyZWFtR2V0TnVtUmVhZFJlcXVlc3RzKHN0cmVhbSkgPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBkZXNpcmVkU2l6ZSA9IFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJHZXREZXNpcmVkU2l6ZShjb250cm9sbGVyKTtcbiAgICBpZiAoZGVzaXJlZFNpemUgPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKGNvbnRyb2xsZXIpIHtcbiAgICBjb250cm9sbGVyLl9wdWxsQWxnb3JpdGhtID0gdW5kZWZpbmVkO1xuICAgIGNvbnRyb2xsZXIuX2NhbmNlbEFsZ29yaXRobSA9IHVuZGVmaW5lZDtcbiAgICBjb250cm9sbGVyLl9zdHJhdGVneVNpemVBbGdvcml0aG0gPSB1bmRlZmluZWQ7XG59XG4vLyBBIGNsaWVudCBvZiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyIG1heSB1c2UgdGhlc2UgZnVuY3Rpb25zIGRpcmVjdGx5IHRvIGJ5cGFzcyBzdGF0ZSBjaGVjay5cbmZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbG9zZShjb250cm9sbGVyKSB7XG4gICAgaWYgKCFSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FuQ2xvc2VPckVucXVldWUoY29udHJvbGxlcikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVTdHJlYW07XG4gICAgY29udHJvbGxlci5fY2xvc2VSZXF1ZXN0ZWQgPSB0cnVlO1xuICAgIGlmIChjb250cm9sbGVyLl9xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKTtcbiAgICAgICAgUmVhZGFibGVTdHJlYW1DbG9zZShzdHJlYW0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFbnF1ZXVlKGNvbnRyb2xsZXIsIGNodW5rKSB7XG4gICAgaWYgKCFSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FuQ2xvc2VPckVucXVldWUoY29udHJvbGxlcikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVTdHJlYW07XG4gICAgaWYgKElzUmVhZGFibGVTdHJlYW1Mb2NrZWQoc3RyZWFtKSAmJiBSZWFkYWJsZVN0cmVhbUdldE51bVJlYWRSZXF1ZXN0cyhzdHJlYW0pID4gMCkge1xuICAgICAgICBSZWFkYWJsZVN0cmVhbUZ1bGZpbGxSZWFkUmVxdWVzdChzdHJlYW0sIGNodW5rLCBmYWxzZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgY2h1bmtTaXplO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2h1bmtTaXplID0gY29udHJvbGxlci5fc3RyYXRlZ3lTaXplQWxnb3JpdGhtKGNodW5rKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoY2h1bmtTaXplRSkge1xuICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9yKGNvbnRyb2xsZXIsIGNodW5rU2l6ZUUpO1xuICAgICAgICAgICAgdGhyb3cgY2h1bmtTaXplRTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgRW5xdWV1ZVZhbHVlV2l0aFNpemUoY29udHJvbGxlciwgY2h1bmssIGNodW5rU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVucXVldWVFKSB7XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgZW5xdWV1ZUUpO1xuICAgICAgICAgICAgdGhyb3cgZW5xdWV1ZUU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoY29udHJvbGxlcik7XG59XG5mdW5jdGlvbiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgZSkge1xuICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZVN0cmVhbTtcbiAgICBpZiAoc3RyZWFtLl9zdGF0ZSAhPT0gJ3JlYWRhYmxlJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFJlc2V0UXVldWUoY29udHJvbGxlcik7XG4gICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKTtcbiAgICBSZWFkYWJsZVN0cmVhbUVycm9yKHN0cmVhbSwgZSk7XG59XG5mdW5jdGlvbiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyR2V0RGVzaXJlZFNpemUoY29udHJvbGxlcikge1xuICAgIGNvbnN0IHN0YXRlID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlU3RyZWFtLl9zdGF0ZTtcbiAgICBpZiAoc3RhdGUgPT09ICdlcnJvcmVkJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHN0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2xsZXIuX3N0cmF0ZWd5SFdNIC0gY29udHJvbGxlci5fcXVldWVUb3RhbFNpemU7XG59XG4vLyBUaGlzIGlzIHVzZWQgaW4gdGhlIGltcGxlbWVudGF0aW9uIG9mIFRyYW5zZm9ybVN0cmVhbS5cbmZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJIYXNCYWNrcHJlc3N1cmUoY29udHJvbGxlcikge1xuICAgIGlmIChSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyU2hvdWxkQ2FsbFB1bGwoY29udHJvbGxlcikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDYW5DbG9zZU9yRW5xdWV1ZShjb250cm9sbGVyKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVTdHJlYW0uX3N0YXRlO1xuICAgIGlmICghY29udHJvbGxlci5fY2xvc2VSZXF1ZXN0ZWQgJiYgc3RhdGUgPT09ICdyZWFkYWJsZScpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIFNldFVwUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcihzdHJlYW0sIGNvbnRyb2xsZXIsIHN0YXJ0QWxnb3JpdGhtLCBwdWxsQWxnb3JpdGhtLCBjYW5jZWxBbGdvcml0aG0sIGhpZ2hXYXRlck1hcmssIHNpemVBbGdvcml0aG0pIHtcbiAgICBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVTdHJlYW0gPSBzdHJlYW07XG4gICAgY29udHJvbGxlci5fcXVldWUgPSB1bmRlZmluZWQ7XG4gICAgY29udHJvbGxlci5fcXVldWVUb3RhbFNpemUgPSB1bmRlZmluZWQ7XG4gICAgUmVzZXRRdWV1ZShjb250cm9sbGVyKTtcbiAgICBjb250cm9sbGVyLl9zdGFydGVkID0gZmFsc2U7XG4gICAgY29udHJvbGxlci5fY2xvc2VSZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICBjb250cm9sbGVyLl9wdWxsQWdhaW4gPSBmYWxzZTtcbiAgICBjb250cm9sbGVyLl9wdWxsaW5nID0gZmFsc2U7XG4gICAgY29udHJvbGxlci5fc3RyYXRlZ3lTaXplQWxnb3JpdGhtID0gc2l6ZUFsZ29yaXRobTtcbiAgICBjb250cm9sbGVyLl9zdHJhdGVneUhXTSA9IGhpZ2hXYXRlck1hcms7XG4gICAgY29udHJvbGxlci5fcHVsbEFsZ29yaXRobSA9IHB1bGxBbGdvcml0aG07XG4gICAgY29udHJvbGxlci5fY2FuY2VsQWxnb3JpdGhtID0gY2FuY2VsQWxnb3JpdGhtO1xuICAgIHN0cmVhbS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICBjb25zdCBzdGFydFJlc3VsdCA9IHN0YXJ0QWxnb3JpdGhtKCk7XG4gICAgdXBvblByb21pc2UocHJvbWlzZVJlc29sdmVkV2l0aChzdGFydFJlc3VsdCksICgpID0+IHtcbiAgICAgICAgY29udHJvbGxlci5fc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDYWxsUHVsbElmTmVlZGVkKGNvbnRyb2xsZXIpO1xuICAgIH0sIHIgPT4ge1xuICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgcik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBTZXRVcFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJGcm9tVW5kZXJseWluZ1NvdXJjZShzdHJlYW0sIHVuZGVybHlpbmdTb3VyY2UsIGhpZ2hXYXRlck1hcmssIHNpemVBbGdvcml0aG0pIHtcbiAgICBjb25zdCBjb250cm9sbGVyID0gT2JqZWN0LmNyZWF0ZShSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSk7XG4gICAgbGV0IHN0YXJ0QWxnb3JpdGhtID0gKCkgPT4gdW5kZWZpbmVkO1xuICAgIGxldCBwdWxsQWxnb3JpdGhtID0gKCkgPT4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgIGxldCBjYW5jZWxBbGdvcml0aG0gPSAoKSA9PiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgaWYgKHVuZGVybHlpbmdTb3VyY2Uuc3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGFydEFsZ29yaXRobSA9ICgpID0+IHVuZGVybHlpbmdTb3VyY2Uuc3RhcnQoY29udHJvbGxlcik7XG4gICAgfVxuICAgIGlmICh1bmRlcmx5aW5nU291cmNlLnB1bGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwdWxsQWxnb3JpdGhtID0gKCkgPT4gdW5kZXJseWluZ1NvdXJjZS5wdWxsKGNvbnRyb2xsZXIpO1xuICAgIH1cbiAgICBpZiAodW5kZXJseWluZ1NvdXJjZS5jYW5jZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjYW5jZWxBbGdvcml0aG0gPSByZWFzb24gPT4gdW5kZXJseWluZ1NvdXJjZS5jYW5jZWwocmVhc29uKTtcbiAgICB9XG4gICAgU2V0VXBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHN0cmVhbSwgY29udHJvbGxlciwgc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbEFsZ29yaXRobSwgaGlnaFdhdGVyTWFyaywgc2l6ZUFsZ29yaXRobSk7XG59XG4vLyBIZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlci5cbmZ1bmN0aW9uIGRlZmF1bHRDb250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJgKTtcbn1cblxuZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1UZWUoc3RyZWFtLCBjbG9uZUZvckJyYW5jaDIpIHtcbiAgICBjb25zdCByZWFkZXIgPSBBY3F1aXJlUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyKHN0cmVhbSk7XG4gICAgbGV0IHJlYWRpbmcgPSBmYWxzZTtcbiAgICBsZXQgY2FuY2VsZWQxID0gZmFsc2U7XG4gICAgbGV0IGNhbmNlbGVkMiA9IGZhbHNlO1xuICAgIGxldCByZWFzb24xO1xuICAgIGxldCByZWFzb24yO1xuICAgIGxldCBicmFuY2gxO1xuICAgIGxldCBicmFuY2gyO1xuICAgIGxldCByZXNvbHZlQ2FuY2VsUHJvbWlzZTtcbiAgICBjb25zdCBjYW5jZWxQcm9taXNlID0gbmV3UHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgcmVzb2x2ZUNhbmNlbFByb21pc2UgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHB1bGxBbGdvcml0aG0oKSB7XG4gICAgICAgIGlmIChyZWFkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJlYWRpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCByZWFkUmVxdWVzdCA9IHtcbiAgICAgICAgICAgIF9jaHVua1N0ZXBzOiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBuZWVkcyB0byBiZSBkZWxheWVkIGEgbWljcm90YXNrIGJlY2F1c2UgaXQgdGFrZXMgYXQgbGVhc3QgYSBtaWNyb3Rhc2sgdG8gZGV0ZWN0IGVycm9ycyAodXNpbmdcbiAgICAgICAgICAgICAgICAvLyByZWFkZXIuX2Nsb3NlZFByb21pc2UgYmVsb3cpLCBhbmQgd2Ugd2FudCBlcnJvcnMgaW4gc3RyZWFtIHRvIGVycm9yIGJvdGggYnJhbmNoZXMgaW1tZWRpYXRlbHkuIFdlIGNhbm5vdCBsZXRcbiAgICAgICAgICAgICAgICAvLyBzdWNjZXNzZnVsIHN5bmNocm9ub3VzbHktYXZhaWxhYmxlIHJlYWRzIGdldCBhaGVhZCBvZiBhc3luY2hyb25vdXNseS1hdmFpbGFibGUgZXJyb3JzLlxuICAgICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZTEgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZXJlIGlzIG5vIHdheSB0byBhY2Nlc3MgdGhlIGNsb25pbmcgY29kZSByaWdodCBub3cgaW4gdGhlIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgYWRkIG9uZSB0aGVuIHdlJ2xsIG5lZWQgYW4gaW1wbGVtZW50YXRpb24gZm9yIHNlcmlhbGl6YWJsZSBvYmplY3RzLlxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIWNhbmNlbGVkMiAmJiBjbG9uZUZvckJyYW5jaDIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB2YWx1ZTIgPSBTdHJ1Y3R1cmVkRGVzZXJpYWxpemUoU3RydWN0dXJlZFNlcmlhbGl6ZSh2YWx1ZTIpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGVkMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVucXVldWUoYnJhbmNoMS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCB2YWx1ZTEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsZWQyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRW5xdWV1ZShicmFuY2gyLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIHZhbHVlMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUNhbmNlbFByb21pc2UodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfY2xvc2VTdGVwczogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGVkMSkge1xuICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xvc2UoYnJhbmNoMS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxlZDIpIHtcbiAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsb3NlKGJyYW5jaDIuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9lcnJvclN0ZXBzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVhZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXJSZWFkKHJlYWRlciwgcmVhZFJlcXVlc3QpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjYW5jZWwxQWxnb3JpdGhtKHJlYXNvbikge1xuICAgICAgICBjYW5jZWxlZDEgPSB0cnVlO1xuICAgICAgICByZWFzb24xID0gcmVhc29uO1xuICAgICAgICBpZiAoY2FuY2VsZWQyKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb3NpdGVSZWFzb24gPSBDcmVhdGVBcnJheUZyb21MaXN0KFtyZWFzb24xLCByZWFzb24yXSk7XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxSZXN1bHQgPSBSZWFkYWJsZVN0cmVhbUNhbmNlbChzdHJlYW0sIGNvbXBvc2l0ZVJlYXNvbik7XG4gICAgICAgICAgICByZXNvbHZlQ2FuY2VsUHJvbWlzZShjYW5jZWxSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW5jZWxQcm9taXNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjYW5jZWwyQWxnb3JpdGhtKHJlYXNvbikge1xuICAgICAgICBjYW5jZWxlZDIgPSB0cnVlO1xuICAgICAgICByZWFzb24yID0gcmVhc29uO1xuICAgICAgICBpZiAoY2FuY2VsZWQxKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb3NpdGVSZWFzb24gPSBDcmVhdGVBcnJheUZyb21MaXN0KFtyZWFzb24xLCByZWFzb24yXSk7XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxSZXN1bHQgPSBSZWFkYWJsZVN0cmVhbUNhbmNlbChzdHJlYW0sIGNvbXBvc2l0ZVJlYXNvbik7XG4gICAgICAgICAgICByZXNvbHZlQ2FuY2VsUHJvbWlzZShjYW5jZWxSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW5jZWxQcm9taXNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdGFydEFsZ29yaXRobSgpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbiAgICBicmFuY2gxID0gQ3JlYXRlUmVhZGFibGVTdHJlYW0oc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbDFBbGdvcml0aG0pO1xuICAgIGJyYW5jaDIgPSBDcmVhdGVSZWFkYWJsZVN0cmVhbShzdGFydEFsZ29yaXRobSwgcHVsbEFsZ29yaXRobSwgY2FuY2VsMkFsZ29yaXRobSk7XG4gICAgdXBvblJlamVjdGlvbihyZWFkZXIuX2Nsb3NlZFByb21pc2UsIChyKSA9PiB7XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihicmFuY2gxLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIHIpO1xuICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IoYnJhbmNoMi5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCByKTtcbiAgICAgICAgcmVzb2x2ZUNhbmNlbFByb21pc2UodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2JyYW5jaDEsIGJyYW5jaDJdO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5kZXJseWluZ0RlZmF1bHRPckJ5dGVTb3VyY2Uoc291cmNlLCBjb250ZXh0KSB7XG4gICAgYXNzZXJ0RGljdGlvbmFyeShzb3VyY2UsIGNvbnRleHQpO1xuICAgIGNvbnN0IG9yaWdpbmFsID0gc291cmNlO1xuICAgIGNvbnN0IGF1dG9BbGxvY2F0ZUNodW5rU2l6ZSA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC5hdXRvQWxsb2NhdGVDaHVua1NpemU7XG4gICAgY29uc3QgY2FuY2VsID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLmNhbmNlbDtcbiAgICBjb25zdCBwdWxsID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLnB1bGw7XG4gICAgY29uc3Qgc3RhcnQgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwuc3RhcnQ7XG4gICAgY29uc3QgdHlwZSA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC50eXBlO1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dG9BbGxvY2F0ZUNodW5rU2l6ZTogYXV0b0FsbG9jYXRlQ2h1bmtTaXplID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgdW5kZWZpbmVkIDpcbiAgICAgICAgICAgIGNvbnZlcnRVbnNpZ25lZExvbmdMb25nV2l0aEVuZm9yY2VSYW5nZShhdXRvQWxsb2NhdGVDaHVua1NpemUsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ2F1dG9BbGxvY2F0ZUNodW5rU2l6ZScgdGhhdGApLFxuICAgICAgICBjYW5jZWw6IGNhbmNlbCA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICAgICBjb252ZXJ0VW5kZXJseWluZ1NvdXJjZUNhbmNlbENhbGxiYWNrKGNhbmNlbCwgb3JpZ2luYWwsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ2NhbmNlbCcgdGhhdGApLFxuICAgICAgICBwdWxsOiBwdWxsID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgdW5kZWZpbmVkIDpcbiAgICAgICAgICAgIGNvbnZlcnRVbmRlcmx5aW5nU291cmNlUHVsbENhbGxiYWNrKHB1bGwsIG9yaWdpbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdwdWxsJyB0aGF0YCksXG4gICAgICAgIHN0YXJ0OiBzdGFydCA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICAgICBjb252ZXJ0VW5kZXJseWluZ1NvdXJjZVN0YXJ0Q2FsbGJhY2soc3RhcnQsIG9yaWdpbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdzdGFydCcgdGhhdGApLFxuICAgICAgICB0eXBlOiB0eXBlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBjb252ZXJ0UmVhZGFibGVTdHJlYW1UeXBlKHR5cGUsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ3R5cGUnIHRoYXRgKVxuICAgIH07XG59XG5mdW5jdGlvbiBjb252ZXJ0VW5kZXJseWluZ1NvdXJjZUNhbmNlbENhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgIGFzc2VydEZ1bmN0aW9uKGZuLCBjb250ZXh0KTtcbiAgICByZXR1cm4gKHJlYXNvbikgPT4gcHJvbWlzZUNhbGwoZm4sIG9yaWdpbmFsLCBbcmVhc29uXSk7XG59XG5mdW5jdGlvbiBjb252ZXJ0VW5kZXJseWluZ1NvdXJjZVB1bGxDYWxsYmFjayhmbiwgb3JpZ2luYWwsIGNvbnRleHQpIHtcbiAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgcmV0dXJuIChjb250cm9sbGVyKSA9PiBwcm9taXNlQ2FsbChmbiwgb3JpZ2luYWwsIFtjb250cm9sbGVyXSk7XG59XG5mdW5jdGlvbiBjb252ZXJ0VW5kZXJseWluZ1NvdXJjZVN0YXJ0Q2FsbGJhY2soZm4sIG9yaWdpbmFsLCBjb250ZXh0KSB7XG4gICAgYXNzZXJ0RnVuY3Rpb24oZm4sIGNvbnRleHQpO1xuICAgIHJldHVybiAoY29udHJvbGxlcikgPT4gcmVmbGVjdENhbGwoZm4sIG9yaWdpbmFsLCBbY29udHJvbGxlcl0pO1xufVxuZnVuY3Rpb24gY29udmVydFJlYWRhYmxlU3RyZWFtVHlwZSh0eXBlLCBjb250ZXh0KSB7XG4gICAgdHlwZSA9IGAke3R5cGV9YDtcbiAgICBpZiAodHlwZSAhPT0gJ2J5dGVzJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke2NvbnRleHR9ICcke3R5cGV9JyBpcyBub3QgYSB2YWxpZCBlbnVtZXJhdGlvbiB2YWx1ZSBmb3IgUmVhZGFibGVTdHJlYW1UeXBlYCk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0UmVhZGVyT3B0aW9ucyhvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgYXNzZXJ0RGljdGlvbmFyeShvcHRpb25zLCBjb250ZXh0KTtcbiAgICBjb25zdCBtb2RlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm1vZGU7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbW9kZTogbW9kZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogY29udmVydFJlYWRhYmxlU3RyZWFtUmVhZGVyTW9kZShtb2RlLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdtb2RlJyB0aGF0YClcbiAgICB9O1xufVxuZnVuY3Rpb24gY29udmVydFJlYWRhYmxlU3RyZWFtUmVhZGVyTW9kZShtb2RlLCBjb250ZXh0KSB7XG4gICAgbW9kZSA9IGAke21vZGV9YDtcbiAgICBpZiAobW9kZSAhPT0gJ2J5b2InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gJyR7bW9kZX0nIGlzIG5vdCBhIHZhbGlkIGVudW1lcmF0aW9uIHZhbHVlIGZvciBSZWFkYWJsZVN0cmVhbVJlYWRlck1vZGVgKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGU7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRJdGVyYXRvck9wdGlvbnMob3B0aW9ucywgY29udGV4dCkge1xuICAgIGFzc2VydERpY3Rpb25hcnkob3B0aW9ucywgY29udGV4dCk7XG4gICAgY29uc3QgcHJldmVudENhbmNlbCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmV2ZW50Q2FuY2VsO1xuICAgIHJldHVybiB7IHByZXZlbnRDYW5jZWw6IEJvb2xlYW4ocHJldmVudENhbmNlbCkgfTtcbn1cblxuZnVuY3Rpb24gY29udmVydFBpcGVPcHRpb25zKG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICBhc3NlcnREaWN0aW9uYXJ5KG9wdGlvbnMsIGNvbnRleHQpO1xuICAgIGNvbnN0IHByZXZlbnRBYm9ydCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmV2ZW50QWJvcnQ7XG4gICAgY29uc3QgcHJldmVudENhbmNlbCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmV2ZW50Q2FuY2VsO1xuICAgIGNvbnN0IHByZXZlbnRDbG9zZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmV2ZW50Q2xvc2U7XG4gICAgY29uc3Qgc2lnbmFsID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpZ25hbDtcbiAgICBpZiAoc2lnbmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXNzZXJ0QWJvcnRTaWduYWwoc2lnbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdzaWduYWwnIHRoYXRgKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJldmVudEFib3J0OiBCb29sZWFuKHByZXZlbnRBYm9ydCksXG4gICAgICAgIHByZXZlbnRDYW5jZWw6IEJvb2xlYW4ocHJldmVudENhbmNlbCksXG4gICAgICAgIHByZXZlbnRDbG9zZTogQm9vbGVhbihwcmV2ZW50Q2xvc2UpLFxuICAgICAgICBzaWduYWxcbiAgICB9O1xufVxuZnVuY3Rpb24gYXNzZXJ0QWJvcnRTaWduYWwoc2lnbmFsLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc0Fib3J0U2lnbmFsKHNpZ25hbCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtjb250ZXh0fSBpcyBub3QgYW4gQWJvcnRTaWduYWwuYCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0UmVhZGFibGVXcml0YWJsZVBhaXIocGFpciwgY29udGV4dCkge1xuICAgIGFzc2VydERpY3Rpb25hcnkocGFpciwgY29udGV4dCk7XG4gICAgY29uc3QgcmVhZGFibGUgPSBwYWlyID09PSBudWxsIHx8IHBhaXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhaXIucmVhZGFibGU7XG4gICAgYXNzZXJ0UmVxdWlyZWRGaWVsZChyZWFkYWJsZSwgJ3JlYWRhYmxlJywgJ1JlYWRhYmxlV3JpdGFibGVQYWlyJyk7XG4gICAgYXNzZXJ0UmVhZGFibGVTdHJlYW0ocmVhZGFibGUsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ3JlYWRhYmxlJyB0aGF0YCk7XG4gICAgY29uc3Qgd3JpdGFibGUgPSBwYWlyID09PSBudWxsIHx8IHBhaXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhaXIud3JpdGFibGU7XG4gICAgYXNzZXJ0UmVxdWlyZWRGaWVsZCh3cml0YWJsZSwgJ3dyaXRhYmxlJywgJ1JlYWRhYmxlV3JpdGFibGVQYWlyJyk7XG4gICAgYXNzZXJ0V3JpdGFibGVTdHJlYW0od3JpdGFibGUsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ3dyaXRhYmxlJyB0aGF0YCk7XG4gICAgcmV0dXJuIHsgcmVhZGFibGUsIHdyaXRhYmxlIH07XG59XG5cbi8qKlxuICogQSByZWFkYWJsZSBzdHJlYW0gcmVwcmVzZW50cyBhIHNvdXJjZSBvZiBkYXRhLCBmcm9tIHdoaWNoIHlvdSBjYW4gcmVhZC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIFJlYWRhYmxlU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcihyYXdVbmRlcmx5aW5nU291cmNlID0ge30sIHJhd1N0cmF0ZWd5ID0ge30pIHtcbiAgICAgICAgaWYgKHJhd1VuZGVybHlpbmdTb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmF3VW5kZXJseWluZ1NvdXJjZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhc3NlcnRPYmplY3QocmF3VW5kZXJseWluZ1NvdXJjZSwgJ0ZpcnN0IHBhcmFtZXRlcicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0cmF0ZWd5ID0gY29udmVydFF1ZXVpbmdTdHJhdGVneShyYXdTdHJhdGVneSwgJ1NlY29uZCBwYXJhbWV0ZXInKTtcbiAgICAgICAgY29uc3QgdW5kZXJseWluZ1NvdXJjZSA9IGNvbnZlcnRVbmRlcmx5aW5nRGVmYXVsdE9yQnl0ZVNvdXJjZShyYXdVbmRlcmx5aW5nU291cmNlLCAnRmlyc3QgcGFyYW1ldGVyJyk7XG4gICAgICAgIEluaXRpYWxpemVSZWFkYWJsZVN0cmVhbSh0aGlzKTtcbiAgICAgICAgaWYgKHVuZGVybHlpbmdTb3VyY2UudHlwZSA9PT0gJ2J5dGVzJykge1xuICAgICAgICAgICAgaWYgKHN0cmF0ZWd5LnNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgc3RyYXRlZ3kgZm9yIGEgYnl0ZSBzdHJlYW0gY2Fubm90IGhhdmUgYSBzaXplIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoaWdoV2F0ZXJNYXJrID0gRXh0cmFjdEhpZ2hXYXRlck1hcmsoc3RyYXRlZ3ksIDApO1xuICAgICAgICAgICAgU2V0VXBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRnJvbVVuZGVybHlpbmdTb3VyY2UodGhpcywgdW5kZXJseWluZ1NvdXJjZSwgaGlnaFdhdGVyTWFyayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzaXplQWxnb3JpdGhtID0gRXh0cmFjdFNpemVBbGdvcml0aG0oc3RyYXRlZ3kpO1xuICAgICAgICAgICAgY29uc3QgaGlnaFdhdGVyTWFyayA9IEV4dHJhY3RIaWdoV2F0ZXJNYXJrKHN0cmF0ZWd5LCAxKTtcbiAgICAgICAgICAgIFNldFVwUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckZyb21VbmRlcmx5aW5nU291cmNlKHRoaXMsIHVuZGVybHlpbmdTb3VyY2UsIGhpZ2hXYXRlck1hcmssIHNpemVBbGdvcml0aG0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSByZWFkYWJsZSBzdHJlYW0gaXMgbG9ja2VkIHRvIGEge0BsaW5rIFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlciB8IHJlYWRlcn0uXG4gICAgICovXG4gICAgZ2V0IGxvY2tlZCgpIHtcbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uJDEoJ2xvY2tlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBJc1JlYWRhYmxlU3RyZWFtTG9ja2VkKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYW5jZWxzIHRoZSBzdHJlYW0sIHNpZ25hbGluZyBhIGxvc3Mgb2YgaW50ZXJlc3QgaW4gdGhlIHN0cmVhbSBieSBhIGNvbnN1bWVyLlxuICAgICAqXG4gICAgICogVGhlIHN1cHBsaWVkIGByZWFzb25gIGFyZ3VtZW50IHdpbGwgYmUgZ2l2ZW4gdG8gdGhlIHVuZGVybHlpbmcgc291cmNlJ3Mge0BsaW5rIFVuZGVybHlpbmdTb3VyY2UuY2FuY2VsIHwgY2FuY2VsKCl9XG4gICAgICogbWV0aG9kLCB3aGljaCBtaWdodCBvciBtaWdodCBub3QgdXNlIGl0LlxuICAgICAqL1xuICAgIGNhbmNlbChyZWFzb24gPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uJDEoJ2NhbmNlbCcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSXNSZWFkYWJsZVN0cmVhbUxvY2tlZCh0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbmNlbCBhIHN0cmVhbSB0aGF0IGFscmVhZHkgaGFzIGEgcmVhZGVyJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFkYWJsZVN0cmVhbUNhbmNlbCh0aGlzLCByZWFzb24pO1xuICAgIH1cbiAgICBnZXRSZWFkZXIocmF3T3B0aW9ucyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW0odGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24kMSgnZ2V0UmVhZGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnZlcnRSZWFkZXJPcHRpb25zKHJhd09wdGlvbnMsICdGaXJzdCBwYXJhbWV0ZXInKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gQWNxdWlyZVJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQWNxdWlyZVJlYWRhYmxlU3RyZWFtQllPQlJlYWRlcih0aGlzKTtcbiAgICB9XG4gICAgcGlwZVRocm91Z2gocmF3VHJhbnNmb3JtLCByYXdPcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uJDEoJ3BpcGVUaHJvdWdoJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXNzZXJ0UmVxdWlyZWRBcmd1bWVudChyYXdUcmFuc2Zvcm0sIDEsICdwaXBlVGhyb3VnaCcpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBjb252ZXJ0UmVhZGFibGVXcml0YWJsZVBhaXIocmF3VHJhbnNmb3JtLCAnRmlyc3QgcGFyYW1ldGVyJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb252ZXJ0UGlwZU9wdGlvbnMocmF3T3B0aW9ucywgJ1NlY29uZCBwYXJhbWV0ZXInKTtcbiAgICAgICAgaWYgKElzUmVhZGFibGVTdHJlYW1Mb2NrZWQodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlYWRhYmxlU3RyZWFtLnByb3RvdHlwZS5waXBlVGhyb3VnaCBjYW5ub3QgYmUgdXNlZCBvbiBhIGxvY2tlZCBSZWFkYWJsZVN0cmVhbScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChJc1dyaXRhYmxlU3RyZWFtTG9ja2VkKHRyYW5zZm9ybS53cml0YWJsZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlYWRhYmxlU3RyZWFtLnByb3RvdHlwZS5waXBlVGhyb3VnaCBjYW5ub3QgYmUgdXNlZCBvbiBhIGxvY2tlZCBXcml0YWJsZVN0cmVhbScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBSZWFkYWJsZVN0cmVhbVBpcGVUbyh0aGlzLCB0cmFuc2Zvcm0ud3JpdGFibGUsIG9wdGlvbnMucHJldmVudENsb3NlLCBvcHRpb25zLnByZXZlbnRBYm9ydCwgb3B0aW9ucy5wcmV2ZW50Q2FuY2VsLCBvcHRpb25zLnNpZ25hbCk7XG4gICAgICAgIHNldFByb21pc2VJc0hhbmRsZWRUb1RydWUocHJvbWlzZSk7XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm0ucmVhZGFibGU7XG4gICAgfVxuICAgIHBpcGVUbyhkZXN0aW5hdGlvbiwgcmF3T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbSh0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbiQxKCdwaXBlVG8nKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGBQYXJhbWV0ZXIgMSBpcyByZXF1aXJlZCBpbiAncGlwZVRvJy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW0oZGVzdGluYXRpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKGBSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUucGlwZVRvJ3MgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFdyaXRhYmxlU3RyZWFtYCkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvcHRpb25zO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IGNvbnZlcnRQaXBlT3B0aW9ucyhyYXdPcHRpb25zLCAnU2Vjb25kIHBhcmFtZXRlcicpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSXNSZWFkYWJsZVN0cmVhbUxvY2tlZCh0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFR5cGVFcnJvcignUmVhZGFibGVTdHJlYW0ucHJvdG90eXBlLnBpcGVUbyBjYW5ub3QgYmUgdXNlZCBvbiBhIGxvY2tlZCBSZWFkYWJsZVN0cmVhbScpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSXNXcml0YWJsZVN0cmVhbUxvY2tlZChkZXN0aW5hdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKG5ldyBUeXBlRXJyb3IoJ1JlYWRhYmxlU3RyZWFtLnByb3RvdHlwZS5waXBlVG8gY2Fubm90IGJlIHVzZWQgb24gYSBsb2NrZWQgV3JpdGFibGVTdHJlYW0nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWRhYmxlU3RyZWFtUGlwZVRvKHRoaXMsIGRlc3RpbmF0aW9uLCBvcHRpb25zLnByZXZlbnRDbG9zZSwgb3B0aW9ucy5wcmV2ZW50QWJvcnQsIG9wdGlvbnMucHJldmVudENhbmNlbCwgb3B0aW9ucy5zaWduYWwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUZWVzIHRoaXMgcmVhZGFibGUgc3RyZWFtLCByZXR1cm5pbmcgYSB0d28tZWxlbWVudCBhcnJheSBjb250YWluaW5nIHRoZSB0d28gcmVzdWx0aW5nIGJyYW5jaGVzIGFzXG4gICAgICogbmV3IHtAbGluayBSZWFkYWJsZVN0cmVhbX0gaW5zdGFuY2VzLlxuICAgICAqXG4gICAgICogVGVlaW5nIGEgc3RyZWFtIHdpbGwgbG9jayBpdCwgcHJldmVudGluZyBhbnkgb3RoZXIgY29uc3VtZXIgZnJvbSBhY3F1aXJpbmcgYSByZWFkZXIuXG4gICAgICogVG8gY2FuY2VsIHRoZSBzdHJlYW0sIGNhbmNlbCBib3RoIG9mIHRoZSByZXN1bHRpbmcgYnJhbmNoZXM7IGEgY29tcG9zaXRlIGNhbmNlbGxhdGlvbiByZWFzb24gd2lsbCB0aGVuIGJlXG4gICAgICogcHJvcGFnYXRlZCB0byB0aGUgc3RyZWFtJ3MgdW5kZXJseWluZyBzb3VyY2UuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgdGhlIGNodW5rcyBzZWVuIGluIGVhY2ggYnJhbmNoIHdpbGwgYmUgdGhlIHNhbWUgb2JqZWN0LiBJZiB0aGUgY2h1bmtzIGFyZSBub3QgaW1tdXRhYmxlLFxuICAgICAqIHRoaXMgY291bGQgYWxsb3cgaW50ZXJmZXJlbmNlIGJldHdlZW4gdGhlIHR3byBicmFuY2hlcy5cbiAgICAgKi9cbiAgICB0ZWUoKSB7XG4gICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbSh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbiQxKCd0ZWUnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBicmFuY2hlcyA9IFJlYWRhYmxlU3RyZWFtVGVlKHRoaXMpO1xuICAgICAgICByZXR1cm4gQ3JlYXRlQXJyYXlGcm9tTGlzdChicmFuY2hlcyk7XG4gICAgfVxuICAgIHZhbHVlcyhyYXdPcHRpb25zID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbSh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbiQxKCd2YWx1ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udmVydEl0ZXJhdG9yT3B0aW9ucyhyYXdPcHRpb25zLCAnRmlyc3QgcGFyYW1ldGVyJyk7XG4gICAgICAgIHJldHVybiBBY3F1aXJlUmVhZGFibGVTdHJlYW1Bc3luY0l0ZXJhdG9yKHRoaXMsIG9wdGlvbnMucHJldmVudENhbmNlbCk7XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUmVhZGFibGVTdHJlYW0ucHJvdG90eXBlLCB7XG4gICAgY2FuY2VsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICBnZXRSZWFkZXI6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIHBpcGVUaHJvdWdoOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICBwaXBlVG86IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIHRlZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgdmFsdWVzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICBsb2NrZWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcbmlmICh0eXBlb2YgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlU3RyZWFtLnByb3RvdHlwZSwgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgdmFsdWU6ICdSZWFkYWJsZVN0cmVhbScsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xufVxuaWYgKHR5cGVvZiBTeW1ib2xQb2x5ZmlsbC5hc3luY0l0ZXJhdG9yID09PSAnc3ltYm9sJykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUsIFN5bWJvbFBvbHlmaWxsLmFzeW5jSXRlcmF0b3IsIHtcbiAgICAgICAgdmFsdWU6IFJlYWRhYmxlU3RyZWFtLnByb3RvdHlwZS52YWx1ZXMsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbn1cbi8vIEFic3RyYWN0IG9wZXJhdGlvbnMgZm9yIHRoZSBSZWFkYWJsZVN0cmVhbS5cbi8vIFRocm93cyBpZiBhbmQgb25seSBpZiBzdGFydEFsZ29yaXRobSB0aHJvd3MuXG5mdW5jdGlvbiBDcmVhdGVSZWFkYWJsZVN0cmVhbShzdGFydEFsZ29yaXRobSwgcHVsbEFsZ29yaXRobSwgY2FuY2VsQWxnb3JpdGhtLCBoaWdoV2F0ZXJNYXJrID0gMSwgc2l6ZUFsZ29yaXRobSA9ICgpID0+IDEpIHtcbiAgICBjb25zdCBzdHJlYW0gPSBPYmplY3QuY3JlYXRlKFJlYWRhYmxlU3RyZWFtLnByb3RvdHlwZSk7XG4gICAgSW5pdGlhbGl6ZVJlYWRhYmxlU3RyZWFtKHN0cmVhbSk7XG4gICAgY29uc3QgY29udHJvbGxlciA9IE9iamVjdC5jcmVhdGUoUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlci5wcm90b3R5cGUpO1xuICAgIFNldFVwUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcihzdHJlYW0sIGNvbnRyb2xsZXIsIHN0YXJ0QWxnb3JpdGhtLCBwdWxsQWxnb3JpdGhtLCBjYW5jZWxBbGdvcml0aG0sIGhpZ2hXYXRlck1hcmssIHNpemVBbGdvcml0aG0pO1xuICAgIHJldHVybiBzdHJlYW07XG59XG5mdW5jdGlvbiBJbml0aWFsaXplUmVhZGFibGVTdHJlYW0oc3RyZWFtKSB7XG4gICAgc3RyZWFtLl9zdGF0ZSA9ICdyZWFkYWJsZSc7XG4gICAgc3RyZWFtLl9yZWFkZXIgPSB1bmRlZmluZWQ7XG4gICAgc3RyZWFtLl9zdG9yZWRFcnJvciA9IHVuZGVmaW5lZDtcbiAgICBzdHJlYW0uX2Rpc3R1cmJlZCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gSXNSZWFkYWJsZVN0cmVhbSh4KSB7XG4gICAgaWYgKCF0eXBlSXNPYmplY3QoeCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcicpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBJc1JlYWRhYmxlU3RyZWFtTG9ja2VkKHN0cmVhbSkge1xuICAgIGlmIChzdHJlYW0uX3JlYWRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4vLyBSZWFkYWJsZVN0cmVhbSBBUEkgZXhwb3NlZCBmb3IgY29udHJvbGxlcnMuXG5mdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUNhbmNlbChzdHJlYW0sIHJlYXNvbikge1xuICAgIHN0cmVhbS5fZGlzdHVyYmVkID0gdHJ1ZTtcbiAgICBpZiAoc3RyZWFtLl9zdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlZFdpdGgodW5kZWZpbmVkKTtcbiAgICB9XG4gICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09ICdlcnJvcmVkJykge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChzdHJlYW0uX3N0b3JlZEVycm9yKTtcbiAgICB9XG4gICAgUmVhZGFibGVTdHJlYW1DbG9zZShzdHJlYW0pO1xuICAgIGNvbnN0IHNvdXJjZUNhbmNlbFByb21pc2UgPSBzdHJlYW0uX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcltDYW5jZWxTdGVwc10ocmVhc29uKTtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvbWlzZVdpdGgoc291cmNlQ2FuY2VsUHJvbWlzZSwgbm9vcCk7XG59XG5mdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUNsb3NlKHN0cmVhbSkge1xuICAgIHN0cmVhbS5fc3RhdGUgPSAnY2xvc2VkJztcbiAgICBjb25zdCByZWFkZXIgPSBzdHJlYW0uX3JlYWRlcjtcbiAgICBpZiAocmVhZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIocmVhZGVyKSkge1xuICAgICAgICByZWFkZXIuX3JlYWRSZXF1ZXN0cy5mb3JFYWNoKHJlYWRSZXF1ZXN0ID0+IHtcbiAgICAgICAgICAgIHJlYWRSZXF1ZXN0Ll9jbG9zZVN0ZXBzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZWFkZXIuX3JlYWRSZXF1ZXN0cyA9IG5ldyBTaW1wbGVRdWV1ZSgpO1xuICAgIH1cbiAgICBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZVJlc29sdmUocmVhZGVyKTtcbn1cbmZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRXJyb3Ioc3RyZWFtLCBlKSB7XG4gICAgc3RyZWFtLl9zdGF0ZSA9ICdlcnJvcmVkJztcbiAgICBzdHJlYW0uX3N0b3JlZEVycm9yID0gZTtcbiAgICBjb25zdCByZWFkZXIgPSBzdHJlYW0uX3JlYWRlcjtcbiAgICBpZiAocmVhZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIocmVhZGVyKSkge1xuICAgICAgICByZWFkZXIuX3JlYWRSZXF1ZXN0cy5mb3JFYWNoKHJlYWRSZXF1ZXN0ID0+IHtcbiAgICAgICAgICAgIHJlYWRSZXF1ZXN0Ll9lcnJvclN0ZXBzKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVhZGVyLl9yZWFkUmVxdWVzdHMgPSBuZXcgU2ltcGxlUXVldWUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlYWRlci5fcmVhZEludG9SZXF1ZXN0cy5mb3JFYWNoKHJlYWRJbnRvUmVxdWVzdCA9PiB7XG4gICAgICAgICAgICByZWFkSW50b1JlcXVlc3QuX2Vycm9yU3RlcHMoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZWFkZXIuX3JlYWRJbnRvUmVxdWVzdHMgPSBuZXcgU2ltcGxlUXVldWUoKTtcbiAgICB9XG4gICAgZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VSZWplY3QocmVhZGVyLCBlKTtcbn1cbi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBSZWFkYWJsZVN0cmVhbS5cbmZ1bmN0aW9uIHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24kMShuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFJlYWRhYmxlU3RyZWFtLnByb3RvdHlwZS4ke25hbWV9IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBSZWFkYWJsZVN0cmVhbWApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0UXVldWluZ1N0cmF0ZWd5SW5pdChpbml0LCBjb250ZXh0KSB7XG4gICAgYXNzZXJ0RGljdGlvbmFyeShpbml0LCBjb250ZXh0KTtcbiAgICBjb25zdCBoaWdoV2F0ZXJNYXJrID0gaW5pdCA9PT0gbnVsbCB8fCBpbml0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbml0LmhpZ2hXYXRlck1hcms7XG4gICAgYXNzZXJ0UmVxdWlyZWRGaWVsZChoaWdoV2F0ZXJNYXJrLCAnaGlnaFdhdGVyTWFyaycsICdRdWV1aW5nU3RyYXRlZ3lJbml0Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGlnaFdhdGVyTWFyazogY29udmVydFVucmVzdHJpY3RlZERvdWJsZShoaWdoV2F0ZXJNYXJrKVxuICAgIH07XG59XG5cbmNvbnN0IGJ5dGVMZW5ndGhTaXplRnVuY3Rpb24gPSBmdW5jdGlvbiBzaXplKGNodW5rKSB7XG4gICAgcmV0dXJuIGNodW5rLmJ5dGVMZW5ndGg7XG59O1xuLyoqXG4gKiBBIHF1ZXVpbmcgc3RyYXRlZ3kgdGhhdCBjb3VudHMgdGhlIG51bWJlciBvZiBieXRlcyBpbiBlYWNoIGNodW5rLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBhc3NlcnRSZXF1aXJlZEFyZ3VtZW50KG9wdGlvbnMsIDEsICdCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5Jyk7XG4gICAgICAgIG9wdGlvbnMgPSBjb252ZXJ0UXVldWluZ1N0cmF0ZWd5SW5pdChvcHRpb25zLCAnRmlyc3QgcGFyYW1ldGVyJyk7XG4gICAgICAgIHRoaXMuX2J5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3lIaWdoV2F0ZXJNYXJrID0gb3B0aW9ucy5oaWdoV2F0ZXJNYXJrO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBoaWdoIHdhdGVyIG1hcmsgcHJvdmlkZWQgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIGdldCBoaWdoV2F0ZXJNYXJrKCkge1xuICAgICAgICBpZiAoIUlzQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneSh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgYnl0ZUxlbmd0aEJyYW5kQ2hlY2tFeGNlcHRpb24oJ2hpZ2hXYXRlck1hcmsnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneUhpZ2hXYXRlck1hcms7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1lYXN1cmVzIHRoZSBzaXplIG9mIGBjaHVua2AgYnkgcmV0dXJuaW5nIHRoZSB2YWx1ZSBvZiBpdHMgYGJ5dGVMZW5ndGhgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGdldCBzaXplKCkge1xuICAgICAgICBpZiAoIUlzQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneSh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgYnl0ZUxlbmd0aEJyYW5kQ2hlY2tFeGNlcHRpb24oJ3NpemUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnl0ZUxlbmd0aFNpemVGdW5jdGlvbjtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5LnByb3RvdHlwZSwge1xuICAgIGhpZ2hXYXRlck1hcms6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIHNpemU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcbmlmICh0eXBlb2YgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3kucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZywge1xuICAgICAgICB2YWx1ZTogJ0J5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3knLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbn1cbi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIHRoZSBCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5LlxuZnVuY3Rpb24gYnl0ZUxlbmd0aEJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKGBCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5LnByb3RvdHlwZS4ke25hbWV9IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5YCk7XG59XG5mdW5jdGlvbiBJc0J5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3koeCkge1xuICAgIGlmICghdHlwZUlzT2JqZWN0KHgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeCwgJ19ieXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5SGlnaFdhdGVyTWFyaycpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IGNvdW50U2l6ZUZ1bmN0aW9uID0gZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICByZXR1cm4gMTtcbn07XG4vKipcbiAqIEEgcXVldWluZyBzdHJhdGVneSB0aGF0IGNvdW50cyB0aGUgbnVtYmVyIG9mIGNodW5rcy5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIENvdW50UXVldWluZ1N0cmF0ZWd5IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIGFzc2VydFJlcXVpcmVkQXJndW1lbnQob3B0aW9ucywgMSwgJ0NvdW50UXVldWluZ1N0cmF0ZWd5Jyk7XG4gICAgICAgIG9wdGlvbnMgPSBjb252ZXJ0UXVldWluZ1N0cmF0ZWd5SW5pdChvcHRpb25zLCAnRmlyc3QgcGFyYW1ldGVyJyk7XG4gICAgICAgIHRoaXMuX2NvdW50UXVldWluZ1N0cmF0ZWd5SGlnaFdhdGVyTWFyayA9IG9wdGlvbnMuaGlnaFdhdGVyTWFyaztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaGlnaCB3YXRlciBtYXJrIHByb3ZpZGVkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICBnZXQgaGlnaFdhdGVyTWFyaygpIHtcbiAgICAgICAgaWYgKCFJc0NvdW50UXVldWluZ1N0cmF0ZWd5KHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBjb3VudEJyYW5kQ2hlY2tFeGNlcHRpb24oJ2hpZ2hXYXRlck1hcmsnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY291bnRRdWV1aW5nU3RyYXRlZ3lIaWdoV2F0ZXJNYXJrO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZWFzdXJlcyB0aGUgc2l6ZSBvZiBgY2h1bmtgIGJ5IGFsd2F5cyByZXR1cm5pbmcgMS5cbiAgICAgKiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgdG90YWwgcXVldWUgc2l6ZSBpcyBhIGNvdW50IG9mIHRoZSBudW1iZXIgb2YgY2h1bmtzIGluIHRoZSBxdWV1ZS5cbiAgICAgKi9cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgaWYgKCFJc0NvdW50UXVldWluZ1N0cmF0ZWd5KHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBjb3VudEJyYW5kQ2hlY2tFeGNlcHRpb24oJ3NpemUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY291bnRTaXplRnVuY3Rpb247XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ291bnRRdWV1aW5nU3RyYXRlZ3kucHJvdG90eXBlLCB7XG4gICAgaGlnaFdhdGVyTWFyazogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgc2l6ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuaWYgKHR5cGVvZiBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCcpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ291bnRRdWV1aW5nU3RyYXRlZ3kucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZywge1xuICAgICAgICB2YWx1ZTogJ0NvdW50UXVldWluZ1N0cmF0ZWd5JyxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG59XG4vLyBIZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgQ291bnRRdWV1aW5nU3RyYXRlZ3kuXG5mdW5jdGlvbiBjb3VudEJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKGBDb3VudFF1ZXVpbmdTdHJhdGVneS5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgQ291bnRRdWV1aW5nU3RyYXRlZ3lgKTtcbn1cbmZ1bmN0aW9uIElzQ291bnRRdWV1aW5nU3RyYXRlZ3koeCkge1xuICAgIGlmICghdHlwZUlzT2JqZWN0KHgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeCwgJ19jb3VudFF1ZXVpbmdTdHJhdGVneUhpZ2hXYXRlck1hcmsnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VHJhbnNmb3JtZXIob3JpZ2luYWwsIGNvbnRleHQpIHtcbiAgICBhc3NlcnREaWN0aW9uYXJ5KG9yaWdpbmFsLCBjb250ZXh0KTtcbiAgICBjb25zdCBmbHVzaCA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC5mbHVzaDtcbiAgICBjb25zdCByZWFkYWJsZVR5cGUgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwucmVhZGFibGVUeXBlO1xuICAgIGNvbnN0IHN0YXJ0ID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLnN0YXJ0O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC50cmFuc2Zvcm07XG4gICAgY29uc3Qgd3JpdGFibGVUeXBlID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLndyaXRhYmxlVHlwZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBmbHVzaDogZmx1c2ggPT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICB1bmRlZmluZWQgOlxuICAgICAgICAgICAgY29udmVydFRyYW5zZm9ybWVyRmx1c2hDYWxsYmFjayhmbHVzaCwgb3JpZ2luYWwsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ2ZsdXNoJyB0aGF0YCksXG4gICAgICAgIHJlYWRhYmxlVHlwZSxcbiAgICAgICAgc3RhcnQ6IHN0YXJ0ID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgdW5kZWZpbmVkIDpcbiAgICAgICAgICAgIGNvbnZlcnRUcmFuc2Zvcm1lclN0YXJ0Q2FsbGJhY2soc3RhcnQsIG9yaWdpbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdzdGFydCcgdGhhdGApLFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICAgICBjb252ZXJ0VHJhbnNmb3JtZXJUcmFuc2Zvcm1DYWxsYmFjayh0cmFuc2Zvcm0sIG9yaWdpbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICd0cmFuc2Zvcm0nIHRoYXRgKSxcbiAgICAgICAgd3JpdGFibGVUeXBlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNvbnZlcnRUcmFuc2Zvcm1lckZsdXNoQ2FsbGJhY2soZm4sIG9yaWdpbmFsLCBjb250ZXh0KSB7XG4gICAgYXNzZXJ0RnVuY3Rpb24oZm4sIGNvbnRleHQpO1xuICAgIHJldHVybiAoY29udHJvbGxlcikgPT4gcHJvbWlzZUNhbGwoZm4sIG9yaWdpbmFsLCBbY29udHJvbGxlcl0pO1xufVxuZnVuY3Rpb24gY29udmVydFRyYW5zZm9ybWVyU3RhcnRDYWxsYmFjayhmbiwgb3JpZ2luYWwsIGNvbnRleHQpIHtcbiAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgcmV0dXJuIChjb250cm9sbGVyKSA9PiByZWZsZWN0Q2FsbChmbiwgb3JpZ2luYWwsIFtjb250cm9sbGVyXSk7XG59XG5mdW5jdGlvbiBjb252ZXJ0VHJhbnNmb3JtZXJUcmFuc2Zvcm1DYWxsYmFjayhmbiwgb3JpZ2luYWwsIGNvbnRleHQpIHtcbiAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgcmV0dXJuIChjaHVuaywgY29udHJvbGxlcikgPT4gcHJvbWlzZUNhbGwoZm4sIG9yaWdpbmFsLCBbY2h1bmssIGNvbnRyb2xsZXJdKTtcbn1cblxuLy8gQ2xhc3MgVHJhbnNmb3JtU3RyZWFtXG4vKipcbiAqIEEgdHJhbnNmb3JtIHN0cmVhbSBjb25zaXN0cyBvZiBhIHBhaXIgb2Ygc3RyZWFtczogYSB7QGxpbmsgV3JpdGFibGVTdHJlYW0gfCB3cml0YWJsZSBzdHJlYW19LFxuICoga25vd24gYXMgaXRzIHdyaXRhYmxlIHNpZGUsIGFuZCBhIHtAbGluayBSZWFkYWJsZVN0cmVhbSB8IHJlYWRhYmxlIHN0cmVhbX0sIGtub3duIGFzIGl0cyByZWFkYWJsZSBzaWRlLlxuICogSW4gYSBtYW5uZXIgc3BlY2lmaWMgdG8gdGhlIHRyYW5zZm9ybSBzdHJlYW0gaW4gcXVlc3Rpb24sIHdyaXRlcyB0byB0aGUgd3JpdGFibGUgc2lkZSByZXN1bHQgaW4gbmV3IGRhdGEgYmVpbmdcbiAqIG1hZGUgYXZhaWxhYmxlIGZvciByZWFkaW5nIGZyb20gdGhlIHJlYWRhYmxlIHNpZGUuXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBUcmFuc2Zvcm1TdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKHJhd1RyYW5zZm9ybWVyID0ge30sIHJhd1dyaXRhYmxlU3RyYXRlZ3kgPSB7fSwgcmF3UmVhZGFibGVTdHJhdGVneSA9IHt9KSB7XG4gICAgICAgIGlmIChyYXdUcmFuc2Zvcm1lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByYXdUcmFuc2Zvcm1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd3JpdGFibGVTdHJhdGVneSA9IGNvbnZlcnRRdWV1aW5nU3RyYXRlZ3kocmF3V3JpdGFibGVTdHJhdGVneSwgJ1NlY29uZCBwYXJhbWV0ZXInKTtcbiAgICAgICAgY29uc3QgcmVhZGFibGVTdHJhdGVneSA9IGNvbnZlcnRRdWV1aW5nU3RyYXRlZ3kocmF3UmVhZGFibGVTdHJhdGVneSwgJ1RoaXJkIHBhcmFtZXRlcicpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1lciA9IGNvbnZlcnRUcmFuc2Zvcm1lcihyYXdUcmFuc2Zvcm1lciwgJ0ZpcnN0IHBhcmFtZXRlcicpO1xuICAgICAgICBpZiAodHJhbnNmb3JtZXIucmVhZGFibGVUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHJlYWRhYmxlVHlwZSBzcGVjaWZpZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhbnNmb3JtZXIud3JpdGFibGVUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHdyaXRhYmxlVHlwZSBzcGVjaWZpZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWFkYWJsZUhpZ2hXYXRlck1hcmsgPSBFeHRyYWN0SGlnaFdhdGVyTWFyayhyZWFkYWJsZVN0cmF0ZWd5LCAwKTtcbiAgICAgICAgY29uc3QgcmVhZGFibGVTaXplQWxnb3JpdGhtID0gRXh0cmFjdFNpemVBbGdvcml0aG0ocmVhZGFibGVTdHJhdGVneSk7XG4gICAgICAgIGNvbnN0IHdyaXRhYmxlSGlnaFdhdGVyTWFyayA9IEV4dHJhY3RIaWdoV2F0ZXJNYXJrKHdyaXRhYmxlU3RyYXRlZ3ksIDEpO1xuICAgICAgICBjb25zdCB3cml0YWJsZVNpemVBbGdvcml0aG0gPSBFeHRyYWN0U2l6ZUFsZ29yaXRobSh3cml0YWJsZVN0cmF0ZWd5KTtcbiAgICAgICAgbGV0IHN0YXJ0UHJvbWlzZV9yZXNvbHZlO1xuICAgICAgICBjb25zdCBzdGFydFByb21pc2UgPSBuZXdQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgc3RhcnRQcm9taXNlX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICAgICAgSW5pdGlhbGl6ZVRyYW5zZm9ybVN0cmVhbSh0aGlzLCBzdGFydFByb21pc2UsIHdyaXRhYmxlSGlnaFdhdGVyTWFyaywgd3JpdGFibGVTaXplQWxnb3JpdGhtLCByZWFkYWJsZUhpZ2hXYXRlck1hcmssIHJlYWRhYmxlU2l6ZUFsZ29yaXRobSk7XG4gICAgICAgIFNldFVwVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJGcm9tVHJhbnNmb3JtZXIodGhpcywgdHJhbnNmb3JtZXIpO1xuICAgICAgICBpZiAodHJhbnNmb3JtZXIuc3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3RhcnRQcm9taXNlX3Jlc29sdmUodHJhbnNmb3JtZXIuc3RhcnQodGhpcy5fdHJhbnNmb3JtU3RyZWFtQ29udHJvbGxlcikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRQcm9taXNlX3Jlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgcmVhZGFibGUgc2lkZSBvZiB0aGUgdHJhbnNmb3JtIHN0cmVhbS5cbiAgICAgKi9cbiAgICBnZXQgcmVhZGFibGUoKSB7XG4gICAgICAgIGlmICghSXNUcmFuc2Zvcm1TdHJlYW0odGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24kMigncmVhZGFibGUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZGFibGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSB3cml0YWJsZSBzaWRlIG9mIHRoZSB0cmFuc2Zvcm0gc3RyZWFtLlxuICAgICAqL1xuICAgIGdldCB3cml0YWJsZSgpIHtcbiAgICAgICAgaWYgKCFJc1RyYW5zZm9ybVN0cmVhbSh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbiQyKCd3cml0YWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl93cml0YWJsZTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhUcmFuc2Zvcm1TdHJlYW0ucHJvdG90eXBlLCB7XG4gICAgcmVhZGFibGU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIHdyaXRhYmxlOiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5pZiAodHlwZW9mIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2Zvcm1TdHJlYW0ucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZywge1xuICAgICAgICB2YWx1ZTogJ1RyYW5zZm9ybVN0cmVhbScsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gSW5pdGlhbGl6ZVRyYW5zZm9ybVN0cmVhbShzdHJlYW0sIHN0YXJ0UHJvbWlzZSwgd3JpdGFibGVIaWdoV2F0ZXJNYXJrLCB3cml0YWJsZVNpemVBbGdvcml0aG0sIHJlYWRhYmxlSGlnaFdhdGVyTWFyaywgcmVhZGFibGVTaXplQWxnb3JpdGhtKSB7XG4gICAgZnVuY3Rpb24gc3RhcnRBbGdvcml0aG0oKSB7XG4gICAgICAgIHJldHVybiBzdGFydFByb21pc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdyaXRlQWxnb3JpdGhtKGNodW5rKSB7XG4gICAgICAgIHJldHVybiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0U2lua1dyaXRlQWxnb3JpdGhtKHN0cmVhbSwgY2h1bmspO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhYm9ydEFsZ29yaXRobShyZWFzb24pIHtcbiAgICAgICAgcmV0dXJuIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRTaW5rQWJvcnRBbGdvcml0aG0oc3RyZWFtLCByZWFzb24pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZUFsZ29yaXRobSgpIHtcbiAgICAgICAgcmV0dXJuIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRTaW5rQ2xvc2VBbGdvcml0aG0oc3RyZWFtKTtcbiAgICB9XG4gICAgc3RyZWFtLl93cml0YWJsZSA9IENyZWF0ZVdyaXRhYmxlU3RyZWFtKHN0YXJ0QWxnb3JpdGhtLCB3cml0ZUFsZ29yaXRobSwgY2xvc2VBbGdvcml0aG0sIGFib3J0QWxnb3JpdGhtLCB3cml0YWJsZUhpZ2hXYXRlck1hcmssIHdyaXRhYmxlU2l6ZUFsZ29yaXRobSk7XG4gICAgZnVuY3Rpb24gcHVsbEFsZ29yaXRobSgpIHtcbiAgICAgICAgcmV0dXJuIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRTb3VyY2VQdWxsQWxnb3JpdGhtKHN0cmVhbSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhbmNlbEFsZ29yaXRobShyZWFzb24pIHtcbiAgICAgICAgVHJhbnNmb3JtU3RyZWFtRXJyb3JXcml0YWJsZUFuZFVuYmxvY2tXcml0ZShzdHJlYW0sIHJlYXNvbik7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHN0cmVhbS5fcmVhZGFibGUgPSBDcmVhdGVSZWFkYWJsZVN0cmVhbShzdGFydEFsZ29yaXRobSwgcHVsbEFsZ29yaXRobSwgY2FuY2VsQWxnb3JpdGhtLCByZWFkYWJsZUhpZ2hXYXRlck1hcmssIHJlYWRhYmxlU2l6ZUFsZ29yaXRobSk7XG4gICAgLy8gVGhlIFtbYmFja3ByZXNzdXJlXV0gc2xvdCBpcyBzZXQgdG8gdW5kZWZpbmVkIHNvIHRoYXQgaXQgY2FuIGJlIGluaXRpYWxpc2VkIGJ5IFRyYW5zZm9ybVN0cmVhbVNldEJhY2twcmVzc3VyZS5cbiAgICBzdHJlYW0uX2JhY2twcmVzc3VyZSA9IHVuZGVmaW5lZDtcbiAgICBzdHJlYW0uX2JhY2twcmVzc3VyZUNoYW5nZVByb21pc2UgPSB1bmRlZmluZWQ7XG4gICAgc3RyZWFtLl9iYWNrcHJlc3N1cmVDaGFuZ2VQcm9taXNlX3Jlc29sdmUgPSB1bmRlZmluZWQ7XG4gICAgVHJhbnNmb3JtU3RyZWFtU2V0QmFja3ByZXNzdXJlKHN0cmVhbSwgdHJ1ZSk7XG4gICAgc3RyZWFtLl90cmFuc2Zvcm1TdHJlYW1Db250cm9sbGVyID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gSXNUcmFuc2Zvcm1TdHJlYW0oeCkge1xuICAgIGlmICghdHlwZUlzT2JqZWN0KHgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeCwgJ190cmFuc2Zvcm1TdHJlYW1Db250cm9sbGVyJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8vIFRoaXMgaXMgYSBuby1vcCBpZiBib3RoIHNpZGVzIGFyZSBhbHJlYWR5IGVycm9yZWQuXG5mdW5jdGlvbiBUcmFuc2Zvcm1TdHJlYW1FcnJvcihzdHJlYW0sIGUpIHtcbiAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3Ioc3RyZWFtLl9yZWFkYWJsZS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCBlKTtcbiAgICBUcmFuc2Zvcm1TdHJlYW1FcnJvcldyaXRhYmxlQW5kVW5ibG9ja1dyaXRlKHN0cmVhbSwgZSk7XG59XG5mdW5jdGlvbiBUcmFuc2Zvcm1TdHJlYW1FcnJvcldyaXRhYmxlQW5kVW5ibG9ja1dyaXRlKHN0cmVhbSwgZSkge1xuICAgIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKHN0cmVhbS5fdHJhbnNmb3JtU3RyZWFtQ29udHJvbGxlcik7XG4gICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9ySWZOZWVkZWQoc3RyZWFtLl93cml0YWJsZS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyLCBlKTtcbiAgICBpZiAoc3RyZWFtLl9iYWNrcHJlc3N1cmUpIHtcbiAgICAgICAgLy8gUHJldGVuZCB0aGF0IHB1bGwoKSB3YXMgY2FsbGVkIHRvIHBlcm1pdCBhbnkgcGVuZGluZyB3cml0ZSgpIGNhbGxzIHRvIGNvbXBsZXRlLiBUcmFuc2Zvcm1TdHJlYW1TZXRCYWNrcHJlc3N1cmUoKVxuICAgICAgICAvLyBjYW5ub3QgYmUgY2FsbGVkIGZyb20gZW5xdWV1ZSgpIG9yIHB1bGwoKSBvbmNlIHRoZSBSZWFkYWJsZVN0cmVhbSBpcyBlcnJvcmVkLCBzbyB0aGlzIHdpbGwgd2lsbCBiZSB0aGUgZmluYWwgdGltZVxuICAgICAgICAvLyBfYmFja3ByZXNzdXJlIGlzIHNldC5cbiAgICAgICAgVHJhbnNmb3JtU3RyZWFtU2V0QmFja3ByZXNzdXJlKHN0cmVhbSwgZmFsc2UpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIFRyYW5zZm9ybVN0cmVhbVNldEJhY2twcmVzc3VyZShzdHJlYW0sIGJhY2twcmVzc3VyZSkge1xuICAgIC8vIFBhc3NlcyBhbHNvIHdoZW4gY2FsbGVkIGR1cmluZyBjb25zdHJ1Y3Rpb24uXG4gICAgaWYgKHN0cmVhbS5fYmFja3ByZXNzdXJlQ2hhbmdlUHJvbWlzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0cmVhbS5fYmFja3ByZXNzdXJlQ2hhbmdlUHJvbWlzZV9yZXNvbHZlKCk7XG4gICAgfVxuICAgIHN0cmVhbS5fYmFja3ByZXNzdXJlQ2hhbmdlUHJvbWlzZSA9IG5ld1Byb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHN0cmVhbS5fYmFja3ByZXNzdXJlQ2hhbmdlUHJvbWlzZV9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBzdHJlYW0uX2JhY2twcmVzc3VyZSA9IGJhY2twcmVzc3VyZTtcbn1cbi8vIENsYXNzIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyXG4vKipcbiAqIEFsbG93cyBjb250cm9sIG9mIHRoZSB7QGxpbmsgUmVhZGFibGVTdHJlYW19IGFuZCB7QGxpbmsgV3JpdGFibGVTdHJlYW19IG9mIHRoZSBhc3NvY2lhdGVkIHtAbGluayBUcmFuc2Zvcm1TdHJlYW19LlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRlc2lyZWQgc2l6ZSB0byBmaWxsIHRoZSByZWFkYWJsZSBzaWRl4oCZcyBpbnRlcm5hbCBxdWV1ZS4gSXQgY2FuIGJlIG5lZ2F0aXZlLCBpZiB0aGUgcXVldWUgaXMgb3Zlci1mdWxsLlxuICAgICAqL1xuICAgIGdldCBkZXNpcmVkU2l6ZSgpIHtcbiAgICAgICAgaWYgKCFJc1RyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBkZWZhdWx0Q29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24kMSgnZGVzaXJlZFNpemUnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWFkYWJsZUNvbnRyb2xsZXIgPSB0aGlzLl9jb250cm9sbGVkVHJhbnNmb3JtU3RyZWFtLl9yZWFkYWJsZS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyO1xuICAgICAgICByZXR1cm4gUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldERlc2lyZWRTaXplKHJlYWRhYmxlQ29udHJvbGxlcik7XG4gICAgfVxuICAgIGVucXVldWUoY2h1bmsgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFJc1RyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBkZWZhdWx0Q29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24kMSgnZW5xdWV1ZScpO1xuICAgICAgICB9XG4gICAgICAgIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyRW5xdWV1ZSh0aGlzLCBjaHVuayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVycm9ycyBib3RoIHRoZSByZWFkYWJsZSBzaWRlIGFuZCB0aGUgd3JpdGFibGUgc2lkZSBvZiB0aGUgY29udHJvbGxlZCB0cmFuc2Zvcm0gc3RyZWFtLCBtYWtpbmcgYWxsIGZ1dHVyZVxuICAgICAqIGludGVyYWN0aW9ucyB3aXRoIGl0IGZhaWwgd2l0aCB0aGUgZ2l2ZW4gZXJyb3IgYGVgLiBBbnkgY2h1bmtzIHF1ZXVlZCBmb3IgdHJhbnNmb3JtYXRpb24gd2lsbCBiZSBkaXNjYXJkZWQuXG4gICAgICovXG4gICAgZXJyb3IocmVhc29uID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghSXNUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uJDEoJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcih0aGlzLCByZWFzb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIHJlYWRhYmxlIHNpZGUgYW5kIGVycm9ycyB0aGUgd3JpdGFibGUgc2lkZSBvZiB0aGUgY29udHJvbGxlZCB0cmFuc2Zvcm0gc3RyZWFtLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHRoZVxuICAgICAqIHRyYW5zZm9ybWVyIG9ubHkgbmVlZHMgdG8gY29uc3VtZSBhIHBvcnRpb24gb2YgdGhlIGNodW5rcyB3cml0dGVuIHRvIHRoZSB3cml0YWJsZSBzaWRlLlxuICAgICAqL1xuICAgIHRlcm1pbmF0ZSgpIHtcbiAgICAgICAgaWYgKCFJc1RyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBkZWZhdWx0Q29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24kMSgndGVybWluYXRlJyk7XG4gICAgICAgIH1cbiAgICAgICAgVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJUZXJtaW5hdGUodGhpcyk7XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLCB7XG4gICAgZW5xdWV1ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgZXJyb3I6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgIHRlcm1pbmF0ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgZGVzaXJlZFNpemU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcbmlmICh0eXBlb2YgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSwgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgdmFsdWU6ICdUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlcicsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xufVxuLy8gVHJhbnNmb3JtIFN0cmVhbSBEZWZhdWx0IENvbnRyb2xsZXIgQWJzdHJhY3QgT3BlcmF0aW9uc1xuZnVuY3Rpb24gSXNUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlcih4KSB7XG4gICAgaWYgKCF0eXBlSXNPYmplY3QoeCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnX2NvbnRyb2xsZWRUcmFuc2Zvcm1TdHJlYW0nKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gU2V0VXBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlcihzdHJlYW0sIGNvbnRyb2xsZXIsIHRyYW5zZm9ybUFsZ29yaXRobSwgZmx1c2hBbGdvcml0aG0pIHtcbiAgICBjb250cm9sbGVyLl9jb250cm9sbGVkVHJhbnNmb3JtU3RyZWFtID0gc3RyZWFtO1xuICAgIHN0cmVhbS5fdHJhbnNmb3JtU3RyZWFtQ29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgY29udHJvbGxlci5fdHJhbnNmb3JtQWxnb3JpdGhtID0gdHJhbnNmb3JtQWxnb3JpdGhtO1xuICAgIGNvbnRyb2xsZXIuX2ZsdXNoQWxnb3JpdGhtID0gZmx1c2hBbGdvcml0aG07XG59XG5mdW5jdGlvbiBTZXRVcFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyRnJvbVRyYW5zZm9ybWVyKHN0cmVhbSwgdHJhbnNmb3JtZXIpIHtcbiAgICBjb25zdCBjb250cm9sbGVyID0gT2JqZWN0LmNyZWF0ZShUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlci5wcm90b3R5cGUpO1xuICAgIGxldCB0cmFuc2Zvcm1BbGdvcml0aG0gPSAoY2h1bmspID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyRW5xdWV1ZShjb250cm9sbGVyLCBjaHVuayk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoICh0cmFuc2Zvcm1SZXN1bHRFKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aCh0cmFuc2Zvcm1SZXN1bHRFKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGZsdXNoQWxnb3JpdGhtID0gKCkgPT4gcHJvbWlzZVJlc29sdmVkV2l0aCh1bmRlZmluZWQpO1xuICAgIGlmICh0cmFuc2Zvcm1lci50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0cmFuc2Zvcm1BbGdvcml0aG0gPSBjaHVuayA9PiB0cmFuc2Zvcm1lci50cmFuc2Zvcm0oY2h1bmssIGNvbnRyb2xsZXIpO1xuICAgIH1cbiAgICBpZiAodHJhbnNmb3JtZXIuZmx1c2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmbHVzaEFsZ29yaXRobSA9ICgpID0+IHRyYW5zZm9ybWVyLmZsdXNoKGNvbnRyb2xsZXIpO1xuICAgIH1cbiAgICBTZXRVcFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHN0cmVhbSwgY29udHJvbGxlciwgdHJhbnNmb3JtQWxnb3JpdGhtLCBmbHVzaEFsZ29yaXRobSk7XG59XG5mdW5jdGlvbiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKSB7XG4gICAgY29udHJvbGxlci5fdHJhbnNmb3JtQWxnb3JpdGhtID0gdW5kZWZpbmVkO1xuICAgIGNvbnRyb2xsZXIuX2ZsdXNoQWxnb3JpdGhtID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFbnF1ZXVlKGNvbnRyb2xsZXIsIGNodW5rKSB7XG4gICAgY29uc3Qgc3RyZWFtID0gY29udHJvbGxlci5fY29udHJvbGxlZFRyYW5zZm9ybVN0cmVhbTtcbiAgICBjb25zdCByZWFkYWJsZUNvbnRyb2xsZXIgPSBzdHJlYW0uX3JlYWRhYmxlLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXI7XG4gICAgaWYgKCFSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FuQ2xvc2VPckVucXVldWUocmVhZGFibGVDb250cm9sbGVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWFkYWJsZSBzaWRlIGlzIG5vdCBpbiBhIHN0YXRlIHRoYXQgcGVybWl0cyBlbnF1ZXVlJyk7XG4gICAgfVxuICAgIC8vIFdlIHRocm90dGxlIHRyYW5zZm9ybSBpbnZvY2F0aW9ucyBiYXNlZCBvbiB0aGUgYmFja3ByZXNzdXJlIG9mIHRoZSBSZWFkYWJsZVN0cmVhbSwgYnV0IHdlIHN0aWxsXG4gICAgLy8gYWNjZXB0IFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyRW5xdWV1ZSgpIGNhbGxzLlxuICAgIHRyeSB7XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFbnF1ZXVlKHJlYWRhYmxlQ29udHJvbGxlciwgY2h1bmspO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBUaGlzIGhhcHBlbnMgd2hlbiByZWFkYWJsZVN0cmF0ZWd5LnNpemUoKSB0aHJvd3MuXG4gICAgICAgIFRyYW5zZm9ybVN0cmVhbUVycm9yV3JpdGFibGVBbmRVbmJsb2NrV3JpdGUoc3RyZWFtLCBlKTtcbiAgICAgICAgdGhyb3cgc3RyZWFtLl9yZWFkYWJsZS5fc3RvcmVkRXJyb3I7XG4gICAgfVxuICAgIGNvbnN0IGJhY2twcmVzc3VyZSA9IFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJIYXNCYWNrcHJlc3N1cmUocmVhZGFibGVDb250cm9sbGVyKTtcbiAgICBpZiAoYmFja3ByZXNzdXJlICE9PSBzdHJlYW0uX2JhY2twcmVzc3VyZSkge1xuICAgICAgICBUcmFuc2Zvcm1TdHJlYW1TZXRCYWNrcHJlc3N1cmUoc3RyZWFtLCB0cnVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9yKGNvbnRyb2xsZXIsIGUpIHtcbiAgICBUcmFuc2Zvcm1TdHJlYW1FcnJvcihjb250cm9sbGVyLl9jb250cm9sbGVkVHJhbnNmb3JtU3RyZWFtLCBlKTtcbn1cbmZ1bmN0aW9uIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyUGVyZm9ybVRyYW5zZm9ybShjb250cm9sbGVyLCBjaHVuaykge1xuICAgIGNvbnN0IHRyYW5zZm9ybVByb21pc2UgPSBjb250cm9sbGVyLl90cmFuc2Zvcm1BbGdvcml0aG0oY2h1bmspO1xuICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9taXNlV2l0aCh0cmFuc2Zvcm1Qcm9taXNlLCB1bmRlZmluZWQsIHIgPT4ge1xuICAgICAgICBUcmFuc2Zvcm1TdHJlYW1FcnJvcihjb250cm9sbGVyLl9jb250cm9sbGVkVHJhbnNmb3JtU3RyZWFtLCByKTtcbiAgICAgICAgdGhyb3cgcjtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyVGVybWluYXRlKGNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkVHJhbnNmb3JtU3RyZWFtO1xuICAgIGNvbnN0IHJlYWRhYmxlQ29udHJvbGxlciA9IHN0cmVhbS5fcmVhZGFibGUuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcjtcbiAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xvc2UocmVhZGFibGVDb250cm9sbGVyKTtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBUeXBlRXJyb3IoJ1RyYW5zZm9ybVN0cmVhbSB0ZXJtaW5hdGVkJyk7XG4gICAgVHJhbnNmb3JtU3RyZWFtRXJyb3JXcml0YWJsZUFuZFVuYmxvY2tXcml0ZShzdHJlYW0sIGVycm9yKTtcbn1cbi8vIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRTaW5rIEFsZ29yaXRobXNcbmZ1bmN0aW9uIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRTaW5rV3JpdGVBbGdvcml0aG0oc3RyZWFtLCBjaHVuaykge1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBzdHJlYW0uX3RyYW5zZm9ybVN0cmVhbUNvbnRyb2xsZXI7XG4gICAgaWYgKHN0cmVhbS5fYmFja3ByZXNzdXJlKSB7XG4gICAgICAgIGNvbnN0IGJhY2twcmVzc3VyZUNoYW5nZVByb21pc2UgPSBzdHJlYW0uX2JhY2twcmVzc3VyZUNoYW5nZVByb21pc2U7XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9taXNlV2l0aChiYWNrcHJlc3N1cmVDaGFuZ2VQcm9taXNlLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3cml0YWJsZSA9IHN0cmVhbS5fd3JpdGFibGU7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdyaXRhYmxlLl9zdGF0ZTtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ2Vycm9yaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IHdyaXRhYmxlLl9zdG9yZWRFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlclBlcmZvcm1UcmFuc2Zvcm0oY29udHJvbGxlciwgY2h1bmspO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyUGVyZm9ybVRyYW5zZm9ybShjb250cm9sbGVyLCBjaHVuayk7XG59XG5mdW5jdGlvbiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0U2lua0Fib3J0QWxnb3JpdGhtKHN0cmVhbSwgcmVhc29uKSB7XG4gICAgLy8gYWJvcnQoKSBpcyBub3QgY2FsbGVkIHN5bmNocm9ub3VzbHksIHNvIGl0IGlzIHBvc3NpYmxlIGZvciBhYm9ydCgpIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBzdHJlYW0gaXMgYWxyZWFkeVxuICAgIC8vIGVycm9yZWQuXG4gICAgVHJhbnNmb3JtU3RyZWFtRXJyb3Ioc3RyZWFtLCByZWFzb24pO1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHVuZGVmaW5lZCk7XG59XG5mdW5jdGlvbiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0U2lua0Nsb3NlQWxnb3JpdGhtKHN0cmVhbSkge1xuICAgIC8vIHN0cmVhbS5fcmVhZGFibGUgY2Fubm90IGNoYW5nZSBhZnRlciBjb25zdHJ1Y3Rpb24sIHNvIGNhY2hpbmcgaXQgYWNyb3NzIGEgY2FsbCB0byB1c2VyIGNvZGUgaXMgc2FmZS5cbiAgICBjb25zdCByZWFkYWJsZSA9IHN0cmVhbS5fcmVhZGFibGU7XG4gICAgY29uc3QgY29udHJvbGxlciA9IHN0cmVhbS5fdHJhbnNmb3JtU3RyZWFtQ29udHJvbGxlcjtcbiAgICBjb25zdCBmbHVzaFByb21pc2UgPSBjb250cm9sbGVyLl9mbHVzaEFsZ29yaXRobSgpO1xuICAgIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKGNvbnRyb2xsZXIpO1xuICAgIC8vIFJldHVybiBhIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCB1bmRlZmluZWQgb24gc3VjY2Vzcy5cbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvbWlzZVdpdGgoZmx1c2hQcm9taXNlLCAoKSA9PiB7XG4gICAgICAgIGlmIChyZWFkYWJsZS5fc3RhdGUgPT09ICdlcnJvcmVkJykge1xuICAgICAgICAgICAgdGhyb3cgcmVhZGFibGUuX3N0b3JlZEVycm9yO1xuICAgICAgICB9XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbG9zZShyZWFkYWJsZS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyKTtcbiAgICB9LCByID0+IHtcbiAgICAgICAgVHJhbnNmb3JtU3RyZWFtRXJyb3Ioc3RyZWFtLCByKTtcbiAgICAgICAgdGhyb3cgcmVhZGFibGUuX3N0b3JlZEVycm9yO1xuICAgIH0pO1xufVxuLy8gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdFNvdXJjZSBBbGdvcml0aG1zXG5mdW5jdGlvbiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0U291cmNlUHVsbEFsZ29yaXRobShzdHJlYW0pIHtcbiAgICAvLyBJbnZhcmlhbnQuIEVuZm9yY2VkIGJ5IHRoZSBwcm9taXNlcyByZXR1cm5lZCBieSBzdGFydCgpIGFuZCBwdWxsKCkuXG4gICAgVHJhbnNmb3JtU3RyZWFtU2V0QmFja3ByZXNzdXJlKHN0cmVhbSwgZmFsc2UpO1xuICAgIC8vIFByZXZlbnQgdGhlIG5leHQgcHVsbCgpIGNhbGwgdW50aWwgdGhlcmUgaXMgYmFja3ByZXNzdXJlLlxuICAgIHJldHVybiBzdHJlYW0uX2JhY2twcmVzc3VyZUNoYW5nZVByb21pc2U7XG59XG4vLyBIZWxwZXIgZnVuY3Rpb25zIGZvciB0aGUgVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIuXG5mdW5jdGlvbiBkZWZhdWx0Q29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24kMShuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZS4ke25hbWV9IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlcmApO1xufVxuLy8gSGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIFRyYW5zZm9ybVN0cmVhbS5cbmZ1bmN0aW9uIHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24kMihuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFRyYW5zZm9ybVN0cmVhbS5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgVHJhbnNmb3JtU3RyZWFtYCk7XG59XG5cbmV4cG9ydCB7IEJ5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3ksIENvdW50UXVldWluZ1N0cmF0ZWd5LCBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyLCBSZWFkYWJsZVN0cmVhbSwgUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyLCBSZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0LCBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLCBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIsIFRyYW5zZm9ybVN0cmVhbSwgVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIsIFdyaXRhYmxlU3RyZWFtLCBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLCBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbnlmaWxsLmVzMjAxOC5tanMubWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiemxpYlwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=