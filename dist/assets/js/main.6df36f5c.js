"use strict";
(self["webpackChunkcodetest"] = self["webpackChunkcodetest"] || []).push([[179],{

/***/ 230:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(204);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/quarterback.scss
var quarterback = __webpack_require__(443);
;// CONCATENATED MODULE: ./src/styles/quarterback.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(quarterback/* default */.Z, options);




       /* harmony default export */ var styles_quarterback = (quarterback/* default */.Z && quarterback/* default.locals */.Z.locals ? quarterback/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(340);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(215);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(120);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(942);
;// CONCATENATED MODULE: ./src/components/QuarterbacksList.js
//Last Updated: Ben Ray 1/13/22


var QuarterbacksList = function QuarterbacksList(_ref) {
  var quarterbacks = _ref.quarterbacks,
      selectPlayer = _ref.selectPlayer,
      selectedQb = _ref.selectedQb;
  console.log(selectedQb);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "quarterbacks"
  }, quarterbacks && quarterbacks.map(function (player, i) {
    return /*#__PURE__*/react.createElement("div", {
      className: "quarterback ".concat(player.playerId === selectedQb.playerId ? 'selected' : '', " "),
      onClick: function onClick() {
        return selectPlayer(player);
      },
      key: i
    }, /*#__PURE__*/react.createElement("div", {
      className: "photo"
    }, /*#__PURE__*/react.createElement("img", {
      src: player.playerImage
    })), /*#__PURE__*/react.createElement("div", {
      className: "name"
    }, player.fullName));
  })));
};

/* harmony default export */ var components_QuarterbacksList = (QuarterbacksList);
;// CONCATENATED MODULE: ./src/components/QuarterbackTotals.js
//Last Updated: Ben Ray 1/13/22


var QuarterbackTotals = function QuarterbackTotals(_ref) {
  var qbStats = _ref.qbStats;
  var tableHeaders = ['G', 'ATT', 'COMP', 'PCT', 'YDS', 'YDS/ATT', 'TD', 'INT', 'SACK'];
  (0,react.useEffect)(function () {
    calculateTotals();
  });

  var calculateTotals = function calculateTotals() {
    var totalsObj = {}; //totalsObj.totalYards = 2000;

    totalsObj.totalAttempts = 25;
    totalsObj.totalCompletions = 20;
    totalsObj.totalAttempts = qbStats.reduce(function (sum, current) {
      return sum + current.Att;
    }, 0);
    totalsObj.totalCompletions = qbStats.reduce(function (sum, current) {
      return sum + current.Cmp;
    }, 0);
    totalsObj.totalCompPercent = qbStats.reduce(function (sum, current) {
      return sum + current.CmpPcnt;
    }, 0);
    totalsObj.totalYardsPerAttempt = qbStats.reduce(function (sum, current) {
      return sum + current.YdsPrAtt;
    }, 0);
    totalsObj.totalTouchdowns = qbStats.reduce(function (sum, current) {
      return sum + current.PsTD;
    }, 0);
    totalsObj.totalInterceptions = qbStats.reduce(function (sum, current) {
      return sum + current.Int;
    }, 0);
    totalsObj.totalSacks = qbStats.reduce(function (sum, current) {
      return sum + current.Sack;
    }, 0);
    totalsObj.totalYards = qbStats.reduce(function (sum, current) {
      return sum + current.PsYds;
    }, 0);
    totalsObj.games = qbStats.length;
    return totalsObj;
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "quarterback-total"
  }, /*#__PURE__*/react.createElement("div", {
    className: "headers"
  }, tableHeaders && tableHeaders.map(function (header, i) {
    return /*#__PURE__*/react.createElement("div", {
      className: "header"
    }, header);
  })), /*#__PURE__*/react.createElement("div", {
    className: "data-cells"
  }, /*#__PURE__*/react.createElement("div", {
    className: "data-cell"
  }, calculateTotals().games), /*#__PURE__*/react.createElement("div", {
    className: "data-cell"
  }, calculateTotals().totalAttempts), /*#__PURE__*/react.createElement("div", {
    className: "data-cell"
  }, calculateTotals().totalCompletions), /*#__PURE__*/react.createElement("div", {
    className: "data-cell"
  }, (calculateTotals().totalCompletions * 100 / calculateTotals().totalAttempts).toFixed(1), "%"), /*#__PURE__*/react.createElement("div", {
    className: "data-cell"
  }, calculateTotals().totalYards), /*#__PURE__*/react.createElement("div", {
    className: "data-cell"
  }, (calculateTotals().totalYards / calculateTotals().totalAttempts).toFixed(1)), /*#__PURE__*/react.createElement("div", {
    className: "data-cell"
  }, calculateTotals().totalTouchdowns), /*#__PURE__*/react.createElement("div", {
    className: "data-cell"
  }, calculateTotals().totalInterceptions), /*#__PURE__*/react.createElement("div", {
    className: "data-cell"
  }, calculateTotals().totalSacks))));
};

/* harmony default export */ var components_QuarterbackTotals = (QuarterbackTotals);
;// CONCATENATED MODULE: ./src/components/QuarterbackGamelog.js
//Last Updated: Ben Ray 1/13/22


var QuarterbackGamelog = function QuarterbackGamelog(_ref) {
  var qbStats = _ref.qbStats;
  var tableHeaders = ['WEEK', 'ATT', 'COMP', 'PCT', 'YDS', 'YDS/ATT', 'TD', 'INT', 'SACK'];
  (0,react.useEffect)(function () {
    calculateTotals();
  });

  var calculateTotals = function calculateTotals() {
    var totalsObj = {}; //totalsObj.totalYards = 2000;

    totalsObj.totalAttempts = 25;
    totalsObj.totalCompletions = 20;
    totalsObj.totalAttempts = qbStats.reduce(function (sum, current) {
      return sum + current.Att;
    }, 0);
    totalsObj.totalCompletions = qbStats.reduce(function (sum, current) {
      return sum + current.Cmp;
    }, 0);
    totalsObj.totalCompPercent = qbStats.reduce(function (sum, current) {
      return sum + current.CmpPcnt;
    }, 0);
    totalsObj.totalYardsPerAttempt = qbStats.reduce(function (sum, current) {
      return sum + current.YdsPrAtt;
    }, 0);
    totalsObj.totalTouchdowns = qbStats.reduce(function (sum, current) {
      return sum + current.PsTD;
    }, 0);
    totalsObj.totalInterceptions = qbStats.reduce(function (sum, current) {
      return sum + current.Int;
    }, 0);
    totalsObj.totalSacks = qbStats.reduce(function (sum, current) {
      return sum + current.Sack;
    }, 0);
    totalsObj.totalYards = qbStats.reduce(function (sum, current) {
      return sum + current.PsYds;
    }, 0);
    totalsObj.games = qbStats.length;
    return totalsObj;
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "gamelog-wrapper"
  }, /*#__PURE__*/react.createElement("h3", null, "Gamelog"), /*#__PURE__*/react.createElement("div", {
    className: "quarterback-total"
  }, /*#__PURE__*/react.createElement("div", {
    className: "headers"
  }, tableHeaders && tableHeaders.map(function (header, i) {
    return /*#__PURE__*/react.createElement("div", {
      className: "header"
    }, header);
  })), qbStats && qbStats.map(function (game, i) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
      className: "data-cells"
    }, /*#__PURE__*/react.createElement("div", {
      className: "data-cell"
    }, game.week), /*#__PURE__*/react.createElement("div", {
      className: "data-cell"
    }, game.Att), /*#__PURE__*/react.createElement("div", {
      className: "data-cell"
    }, game.Cmp), /*#__PURE__*/react.createElement("div", {
      className: "data-cell"
    }, game.CmpPcnt.toFixed(1)), /*#__PURE__*/react.createElement("div", {
      className: "data-cell"
    }, game.PsYds), /*#__PURE__*/react.createElement("div", {
      className: "data-cell"
    }, game.YdsPrAtt.toFixed(1)), /*#__PURE__*/react.createElement("div", {
      className: "data-cell"
    }, game.PsTD), /*#__PURE__*/react.createElement("div", {
      className: "data-cell"
    }, game.Int), /*#__PURE__*/react.createElement("div", {
      className: "data-cell"
    }, game.Sack)));
  }))));
};

/* harmony default export */ var components_QuarterbackGamelog = (QuarterbackGamelog);
// EXTERNAL MODULE: ./node_modules/chart.js/auto/auto.esm.js
var auto_esm = __webpack_require__(877);
// EXTERNAL MODULE: ./node_modules/react-chartjs-2/dist/index.modern.js
var index_modern = __webpack_require__(598);
;// CONCATENATED MODULE: ./src/components/LineGraph.js
//Last Updated: Ben Ray 1/18/22




var LineChart;

var LineGraph = function LineGraph(_ref) {
  var quarterback = _ref.quarterback,
      qbStats = _ref.qbStats,
      metric = _ref.metric;
  var graphLabels = [];
  var compPercentage = [];
  var yardsPerAttenmpt = [];
  var labels = qbStats.forEach(function (gameWeek) {
    graphLabels.push("week ".concat(gameWeek.week));
    compPercentage.push("".concat(Math.round(gameWeek.CmpPcnt)));
    yardsPerAttenmpt.push("".concat(Math.round(gameWeek.YdsPrAtt)));
  });
  var yardsPerAttenmptData = {
    label: "Yards Per Attenpt",
    data: yardsPerAttenmpt,
    fill: true,
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: "rgba(75,192,192,1)"
  };
  var compPercentageData = {
    label: "Completion Percentage",
    data: compPercentage,
    fill: true,
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: "rgba(75,192,192,1)"
  };
  var data = {
    labels: graphLabels
  };
  data.datasets = metric === "YdsPrAtt" ? [yardsPerAttenmptData] : [compPercentageData];
  return /*#__PURE__*/react.createElement("div", {
    className: "line-chart"
  }, /*#__PURE__*/react.createElement(index_modern/* Line */.x1, {
    data: data
  }));
};

/* harmony default export */ var components_LineGraph = (LineGraph);
;// CONCATENATED MODULE: ./src/components/QuarterbackStats.js
//Last Updated: Ben Ray 1/13/22





var QuarterbackStats = function QuarterbackStats(_ref) {
  var quarterback = _ref.quarterback,
      qbStats = _ref.qbStats;
  var chart = (0,react.useRef)();
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "quarterback-stats-wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "quarterback"
  }, /*#__PURE__*/react.createElement("img", {
    src: quarterback.playerImage
  }), /*#__PURE__*/react.createElement("div", {
    className: "player-info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "name"
  }, quarterback.fullName, " | QB"), /*#__PURE__*/react.createElement("div", {
    className: "totals"
  }, /*#__PURE__*/react.createElement("h3", null, "This Season"), /*#__PURE__*/react.createElement(components_QuarterbackTotals, {
    qbStats: qbStats
  })))), /*#__PURE__*/react.createElement("h3", null, "Weekly stats"), /*#__PURE__*/react.createElement("div", {
    className: "charts"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react.createElement(components_LineGraph, {
    qbStats: qbStats,
    metric: "YdsPrAtt"
  })), /*#__PURE__*/react.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react.createElement(components_LineGraph, {
    qbStats: qbStats,
    metric: "CmpPcnt"
  })))), /*#__PURE__*/react.createElement("div", {
    className: "gamelog"
  }, /*#__PURE__*/react.createElement(components_QuarterbackGamelog, {
    qbStats: qbStats
  })));
};

/* harmony default export */ var components_QuarterbackStats = (QuarterbackStats);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./src/constants/playerConstants.js
var TRUMEDIA_PROJECT_BASE_URL = "https://project.trumedianetworks.com";
var API_TOKEN = "c64d5a11-04f3-4086-b442-4929ea8dc960";
;// CONCATENATED MODULE: ./src/services/playerServices.js


//Last Updated: Ben Ray 1/18/22

/* get all players */

var fetchPlayers = /*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var results;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            results = fetch("".concat(TRUMEDIA_PROJECT_BASE_URL, "/api/nfl/players"), {
              method: 'get',
              headers: new Headers({
                'tempToken': API_TOKEN
              })
            });
            return _context.abrupt("return", results);

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", "Error: ".concat(_context.t0));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function fetchPlayers() {
    return _ref.apply(this, arguments);
  };
}();

var fetchPlayer = /*#__PURE__*/function () {
  var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
    var playerId,
        results,
        _args2 = arguments;
    return regenerator_default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            playerId = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 2543477;
            _context2.prev = 1;
            results = fetch("".concat(TRUMEDIA_PROJECT_BASE_URL, "/api/nfl/player/").concat(playerId), {
              method: 'get',
              headers: new Headers({
                'tempToken': API_TOKEN
              })
            });
            return _context2.abrupt("return", results);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", "Error: ".concat(_context2.t0));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 6]]);
  }));

  return function fetchPlayer() {
    return _ref2.apply(this, arguments);
  };
}();

var playerServices = {
  fetchPlayer: fetchPlayer,
  fetchPlayers: fetchPlayers
};
/* harmony default export */ var services_playerServices = (playerServices);
;// CONCATENATED MODULE: ./src/components/Quarterbacks.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//Last Updated: Ben Ray 1/18/22






var Quarterbacks = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(Quarterbacks, _Component);

  var _super = _createSuper(Quarterbacks);

  function Quarterbacks(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Quarterbacks);

    _this = _super.call(this, props);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "componentDidMount", function () {
      services_playerServices.fetchPlayers().then(function (res) {
        return res.json();
      }).then(function (result) {
        return result;
      }).then(function (result) {
        result.map(function (player, i) {
          if (i === 0) _this._selectQuarterback(player);
        });

        _this.setState({
          quarterbacks: result
        });
      }, function (error) {});
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_selectQuarterback", function (player) {
      _this.setState({
        selectedQb: player
      }); // get stats


      services_playerServices.fetchPlayer(player.playerId).then(function (res) {
        return res.json();
      }).then(function (result) {
        return result;
      }).then(function (result) {
        result.map(function (week) {
          week.YdsPrAtt = week.PsYds / week.Att;
          week.CmpPcnt = week.Cmp * 100 / week.Att;
        });
        console.log(result);

        _this.setState({
          qbStats: result
        });
      }, function (error) {});
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "render", function () {
      var _this$state = _this.state,
          quarterbacks = _this$state.quarterbacks,
          selectedQb = _this$state.selectedQb,
          qbStats = _this$state.qbStats;
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
        className: "quarterback-wrapper"
      }, /*#__PURE__*/react.createElement("h2", null, "Quarterback Stats"), /*#__PURE__*/react.createElement("div", {
        className: "quarterback-view"
      }, /*#__PURE__*/react.createElement("div", {
        className: "quarterback-list"
      }, /*#__PURE__*/react.createElement(components_QuarterbacksList, {
        quarterbacks: quarterbacks,
        selectPlayer: function selectPlayer(player) {
          return _this._selectQuarterback(player);
        },
        selectedQb: selectedQb
      })), /*#__PURE__*/react.createElement("div", {
        className: "quarterback-stats"
      }, /*#__PURE__*/react.createElement(components_QuarterbackStats, {
        qbStats: _this.state.qbStats,
        quarterback: selectedQb
      })))));
    });

    _this.state = {
      players: [],
      quarterbacks: [],
      selectedQb: {},
      qbStats: []
    };
    return _this;
  }

  return (0,createClass/* default */.Z)(Quarterbacks);
}(react.Component);

/* harmony default export */ var components_Quarterbacks = (Quarterbacks);
;// CONCATENATED MODULE: ./src/App.js



function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(components_Quarterbacks, null));
}

/* harmony default export */ var src_App = (App);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(890);
;// CONCATENATED MODULE: ./src/components/store/store.js


function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);

    default:
      return state;
  }
}

var store = (0,redux/* createStore */.MT)(todos, ['Use Redux']);
/* harmony default export */ var store_store = (store);
;// CONCATENATED MODULE: ./src/reportWebVitals.js
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/* import() */ 324).then(__webpack_require__.bind(__webpack_require__, 131)).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ var src_reportWebVitals = (reportWebVitals);
;// CONCATENATED MODULE: ./src/index.js







react_dom.render( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(es/* Provider */.zt, {
  store: store_store
}, /*#__PURE__*/react.createElement(src_App, null))), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

src_reportWebVitals();

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".quarterback-wrapper{margin:0 auto;width:835px}.quarterback-wrapper h2{padding:0 0 0 10px;margin:15px 0 20px 0;font-weight:bold;font-size:18px;text-align:left}.quarterback-wrapper h3{padding:0 0 0 10px;margin:15px 0 0 0;font-weight:normal;font-size:16px;text-align:left}.quarterback-wrapper .quarterback-view{display:block}.quarterback-wrapper .quarterback-list{width:100%;border-left:1px solid #ccc}.quarterback-wrapper .quarterback-list .quarterbacks{display:flex}.quarterback-wrapper .quarterback-list .quarterbacks .quarterback{background:#ccc;text-align:left;padding:10px 20px 5px 10px;border:1px solid #efefef;border-bottom:0;width:200px;cursor:pointer;display:flex}.quarterback-wrapper .quarterback-list .quarterbacks .quarterback.selected{background:#eee}.quarterback-wrapper .quarterback-list .quarterbacks .quarterback .photo img{height:30px;width:30px;border-radius:50%;border:1px solid #999;margin:0}.quarterback-wrapper .quarterback-list .quarterbacks .quarterback .name{padding:7px 0 0 13px}.quarterback-wrapper .quarterback-stats{width:100%;border-left:1px solid #ccc;border-right:1px solid #ccc;border-bottom:1px solid #ccc;border-top:1px solid #efefef;margin-bottom:50px}.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper img{margin-top:10px}.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .quarterback{background-image:linear-gradient(#eee, #ccc);text-align:left;display:flex;height:150px;position:relative}.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .quarterback .player-info{margin-left:20px}.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .quarterback .player-info .name{font-size:30px;margin:20px 0 0 10px}.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .quarterback .player-info .quarterback-total{margin:5px 0 0 10px;background:#fff;border:1px solid #333;width:100%}.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .quarterback .player-info .quarterback-total .headers,.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .quarterback .player-info .quarterback-total .data-cells{display:flex}.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .quarterback .player-info .quarterback-total .headers{background:#eee}.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .quarterback .player-info .quarterback-total .header,.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .quarterback .player-info .quarterback-total .data-cell{width:65px;font-size:12px;padding:2px}.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .quarterback .player-info .quarterback-total .header{font-weight:600}.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .charts{display:flex}.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .charts .left{margin:10px 0 10px 10px;border:1px solid #333}.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .charts .right{margin:10px;border:1px solid #333}.quarterback-wrapper .quarterback-stats .quarterback-stats-wrapper .line-chart{width:400px;background:#fff;border:1px solid silver}.quarterback-wrapper .quarterback-stats .gamelog .gamelog-wrapper{text-align:left}.quarterback-wrapper .quarterback-stats .gamelog .quarterback-total{margin:5px 0 10px 10px;width:815px;background:#fff;border:1px solid #333}.quarterback-wrapper .quarterback-stats .gamelog .quarterback-total .headers,.quarterback-wrapper .quarterback-stats .gamelog .quarterback-total .data-cells{display:flex}.quarterback-wrapper .quarterback-stats .gamelog .quarterback-total .headers{background:#eee}.quarterback-wrapper .quarterback-stats .gamelog .quarterback-total .header,.quarterback-wrapper .quarterback-stats .gamelog .quarterback-total .data-cell{width:85px;font-size:12px;padding:7px 4px 7px 4px;border-bottom:1px solid silver}.quarterback-wrapper .quarterback-stats .gamelog .quarterback-total .header{font-weight:600}", "",{"version":3,"sources":["webpack://./src/styles/quarterback.scss"],"names":[],"mappings":"AAAA,qBACE,aAAA,CACA,WAAA,CACA,wBACE,kBAAA,CACA,oBAAA,CACA,gBAAA,CACA,cAAA,CACA,eAAA,CAEF,wBACE,kBAAA,CACA,iBAAA,CACA,kBAAA,CACA,cAAA,CACA,eAAA,CAEF,uCACE,aAAA,CAEF,uCACE,UAAA,CACA,0BAAA,CACA,qDACE,YAAA,CACA,kEACE,eAAA,CACA,eAAA,CACA,0BAAA,CACA,wBAAA,CACA,eAAA,CACA,WAAA,CACA,cAAA,CACA,YAAA,CACA,2EACE,eAAA,CAGA,6EACE,WAAA,CACA,UAAA,CACA,iBAAA,CACA,qBAAA,CACA,QAAA,CAGJ,wEACG,oBAAA,CAKT,wCACE,UAAA,CACA,0BAAA,CACA,2BAAA,CACA,4BAAA,CACA,4BAAA,CACA,kBAAA,CAGE,uEACI,eAAA,CAEJ,gFACE,4CAAA,CACA,eAAA,CACA,YAAA,CACA,YAAA,CACA,iBAAA,CACA,6FACE,gBAAA,CACA,mGACE,cAAA,CACA,oBAAA,CAGF,gHACE,mBAAA,CACA,eAAA,CACA,qBAAA,CACA,UAAA,CACA,qPACE,YAAA,CAEF,yHACI,eAAA,CAEJ,mPACE,UAAA,CACA,cAAA,CACA,WAAA,CAEF,wHACE,eAAA,CAOR,2EACE,YAAA,CACA,iFACE,uBAAA,CACA,qBAAA,CAEF,kFACE,WAAA,CACA,qBAAA,CAIJ,+EACI,WAAA,CACA,eAAA,CACA,uBAAA,CAKJ,kEACE,eAAA,CAEF,oEACE,sBAAA,CACA,WAAA,CACA,eAAA,CACA,qBAAA,CAEA,6JACE,YAAA,CAEF,6EACI,eAAA,CAEJ,2JACE,UAAA,CACA,cAAA,CACA,uBAAA,CACA,8BAAA,CAEF,4EACE,eAAA","sourcesContent":[".quarterback-wrapper {\n  margin:  0 auto;\n  width: 835px;\n  h2 {\n    padding: 0 0 0 10px;\n    margin: 15px 0 20px 0;\n    font-weight: bold;\n    font-size: 18px;\n    text-align: left; \n  }\n  h3 {\n    padding: 0 0 0 10px;\n    margin: 15px 0 0 0;\n    font-weight: normal;\n    font-size: 16px;\n    text-align: left;\n  }\n  .quarterback-view {\n    display: block;\n  }  \n  .quarterback-list {\n    width: 100%;\n    border-left: 1px solid #ccc;\n    .quarterbacks {\n      display: flex;\n      .quarterback {\n        background: #ccc;\n        text-align: left;\n        padding: 10px 20px 5px 10px;\n        border: 1px solid #efefef;\n        border-bottom: 0;\n        width: 200px;\n        cursor: pointer;\n        display: flex;\n        &.selected {\n          background: #eee;\n        }\n        .photo {\n          img { \n            height: 30px; \n            width: 30px; \n            border-radius: 50%;\n            border: 1px solid #999;\n            margin: 0;\n          }\n        }\n        .name {\n           padding: 7px 0 0 13px; \n        }\n      }\n    }\n  }  \n  .quarterback-stats {\n    width: 100%;\n    border-left: 1px solid #ccc;\n    border-right: 1px solid #ccc;\n    border-bottom: 1px solid #ccc;\n    border-top: 1px solid #efefef;\n    margin-bottom: 50px;\n\n    .quarterback-stats-wrapper {\n      img {\n          margin-top: 10px;\n      }\n      .quarterback {\n        background-image: linear-gradient(#eee, #ccc);\n        text-align: left;\n        display: flex;\n        height: 150px;\n        position: relative;\n        .player-info {\n          margin-left: 20px;\n          .name {\n            font-size: 30px;\n            margin: 20px 0 0 10px;\n          }\n\n          .quarterback-total {\n            margin: 5px 0 0 10px;\n            background: #fff;\n            border: 1px solid #333;\n            width: 100%;\n            .headers, .data-cells {\n              display: flex;\n            }\n            .headers {\n                background: #eee;\n            }\n            .header, .data-cell {\n              width: 65px;\n              font-size: 12px;\n              padding: 2px;\n            }\n            .header {\n              font-weight: 600;\n            }\n          }\n        }\n\n      }\n     \n      .charts {\n        display: flex;\n        .left {\n          margin: 10px 0 10px 10px;\n          border: 1px solid #333;\n        }\n        .right {\n          margin: 10px;\n          border: 1px solid #333;\n        }\n      }\n      \n      .line-chart {\n          width:400px;\n          background: white;\n          border: 1px solid silver;\n      }\n    }\n\n    .gamelog {\n      .gamelog-wrapper {\n        text-align: left;\n      }\n      .quarterback-total {\n        margin: 5px 0 10px 10px;\n        width: 815px;\n        background: #fff;\n        border: 1px solid #333;\n        \n        .headers, .data-cells {\n          display: flex;\n        } \n        .headers {\n            background: #eee;\n        }\n        .header, .data-cell {\n          width: 85px;\n          font-size: 12px;\n          padding: 7px 4px 7px 4px;\n          border-bottom: 1px solid silver;\n        }\n        .header {\n          font-weight: 600;\n        }\n      }\n    }  \n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [508,578,852,357,905,698,743,532,190,805,279,410,898,353,183], function() { return __webpack_exec__(230); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.6df36f5c.js.map