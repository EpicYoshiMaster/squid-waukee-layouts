// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"41g4H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BeRightBack", ()=>BeRightBack);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _client = require("react-dom/client");
var _breakScreen = require("./components/BreakScreen");
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
function BeRightBack() {
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(Wrapper, {
        __source: {
            fileName: "src/graphics/BeRightBack.tsx",
            lineNumber: 6,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _breakScreen.BreakScreen), {
        message: "We'll be right back!",
        __source: {
            fileName: "src/graphics/BeRightBack.tsx",
            lineNumber: 7,
            columnNumber: 4
        },
        __self: this
    }));
}
const Wrapper = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "BeRightBack__Wrapper",
    componentId: "sc-1en7pso-0"
})([
    ""
]);
const root = (0, _client.createRoot)(document.getElementById('root'));
root.render(/*#__PURE__*/ (0, _reactDefault.default).createElement(BeRightBack, {
    __source: {
        fileName: "src/graphics/BeRightBack.tsx",
        lineNumber: 15,
        columnNumber: 13
    },
    __self: undefined
}));

},{"react":"bH1AQ","react-dom/client":"i5cPj","./components/BreakScreen":"knVSC","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"knVSC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BreakScreen", ()=>BreakScreen);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _background = require("./Background");
var _reactHooks = require("@nodecg/react-hooks");
var _carouselComponent = require("./CarouselComponent");
var _utils = require("../../helpers/utils");
const BreakScreen = ({ message })=>{
    const [eventData] = (0, _reactHooks.useReplicant)('eventData', {
        bundle: 'squidwest-layout-controls'
    });
    const [socials] = (0, _reactHooks.useReplicant)('socials', {
        bundle: 'squidwest-layout-controls'
    });
    const [currentEvent, setCurrentEvent] = (0, _react.useState)({
        name: "Current Event Name",
        location: "Event Location",
        number: 1,
        date: "Today"
    });
    (0, _react.useEffect)(()=>{
        if (!eventData) return;
        setCurrentEvent(eventData.currentEvent);
    }, [
        eventData
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledBreakScreen, {
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 31,
            columnNumber: 10
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _background.Background), {
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 32,
            columnNumber: 4
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Content, {
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 33,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoArea, {
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 34,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(SWLogo, {
        src: "/bundles/squid-waukee-layouts/images/SW_Logo.png",
        alt: "SquidWest Logo",
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 35,
            columnNumber: 6
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(TextArea, {
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 37,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselWrapper, {
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 38,
            columnNumber: 6
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _carouselComponent.CarouselComponent), {
        speed: 15000,
        transitionSpeed: 3000,
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 39,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselItem, {
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 40,
            columnNumber: 8
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TitleText, {
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 41,
            columnNumber: 9
        },
        __self: undefined
    }, "SquidWest"), /*#__PURE__*/ (0, _reactDefault.default).createElement(SubtitleText, {
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 42,
            columnNumber: 9
        },
        __self: undefined
    }, "MidWest Splatoon Players")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselItem, {
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 44,
            columnNumber: 8
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TitleText, {
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 45,
            columnNumber: 8
        },
        __self: undefined
    }, currentEvent.name, " ", currentEvent.number > 0 ? '#' + currentEvent.number : ''), /*#__PURE__*/ (0, _reactDefault.default).createElement(SubtitleText, {
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 46,
            columnNumber: 9
        },
        __self: undefined
    }, message)))), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _carouselComponent.CarouselComponent), {
        speed: 10000,
        transitionSpeed: 3000,
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 50,
            columnNumber: 6
        },
        __self: undefined
    }, socials && socials.map((group, groupIndex)=>/*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselItem, {
            key: groupIndex,
            __source: {
                fileName: "src/graphics/components/BreakScreen.tsx",
                lineNumber: 51,
                columnNumber: 54
            },
            __self: undefined
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(SocialsRow, {
            __source: {
                fileName: "src/graphics/components/BreakScreen.tsx",
                lineNumber: 52,
                columnNumber: 9
            },
            __self: undefined
        }, group.items.map((entry, entryIndex)=>/*#__PURE__*/ (0, _reactDefault.default).createElement(SocialsItem, {
                key: entryIndex,
                __source: {
                    fileName: "src/graphics/components/BreakScreen.tsx",
                    lineNumber: 53,
                    columnNumber: 50
                },
                __self: undefined
            }, (0, _utils.getSocialPlatformIcon)(entry.platform), /*#__PURE__*/ (0, _reactDefault.default).createElement(SocialsText, {
                __source: {
                    fileName: "src/graphics/components/BreakScreen.tsx",
                    lineNumber: 55,
                    columnNumber: 12
                },
                __self: undefined
            }, entry.social)))))), !socials && /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        __source: {
            fileName: "src/graphics/components/BreakScreen.tsx",
            lineNumber: 59,
            columnNumber: 20
        },
        __self: undefined
    })))));
};
const StyledBreakScreen = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "BreakScreen__StyledBreakScreen",
    componentId: "sc-1nocr3o-0"
})([
    "position:relative;width:1920px;height:1080px;"
]);
const Content = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "BreakScreen__Content",
    componentId: "sc-1nocr3o-1"
})([
    "position:relative;font-family:'Saira Extra',Saira,'Lucida Sans','Lucida Sans Regular','Lucida Grande','Lucida Sans Unicode',Geneva,Verdana,sans-serif;width:100%;height:100%;display:grid;grid-template-rows:1fr max-content;"
]);
const LogoArea = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "BreakScreen__LogoArea",
    componentId: "sc-1nocr3o-2"
})([
    "position:relative;width:100%;display:flex;justify-content:center;"
]);
const TextArea = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "BreakScreen__TextArea",
    componentId: "sc-1nocr3o-3"
})([
    "position:relative;width:100%;display:flex;flex-direction:column;text-align:center;"
]);
const CarouselWrapper = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "BreakScreen__CarouselWrapper",
    componentId: "sc-1nocr3o-4"
})([
    "position:relative;"
]);
const CarouselItem = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "BreakScreen__CarouselItem",
    componentId: "sc-1nocr3o-5"
})([
    "position:relative;"
]);
const TitleText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "BreakScreen__TitleText",
    componentId: "sc-1nocr3o-6"
})([
    "font-size:8rem;color:var(--break-main-text);-webkit-text-stroke:3px var(--break-main-outline);"
]);
const SubtitleText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "BreakScreen__SubtitleText",
    componentId: "sc-1nocr3o-7"
})([
    "font-size:6rem;color:var(--break-main-text);-webkit-text-stroke:2px var(--break-main-outline);"
]);
const SocialsText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "BreakScreen__SocialsText",
    componentId: "sc-1nocr3o-8"
})([
    "-webkit-text-stroke:2px var(--break-socials-outline);"
]);
const SocialsRow = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "BreakScreen__SocialsRow",
    componentId: "sc-1nocr3o-9"
})([
    "position:relative;display:flex;flex-direction:row;justify-content:space-evenly;font-size:2.75rem;color:var(--break-socials-text);"
]);
const SocialsItem = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "BreakScreen__SocialsItem",
    componentId: "sc-1nocr3o-10"
})([
    "position:relative;display:flex;flex-direction:row;align-items:center;"
]);
const SWLogo = (0, _styledComponentsDefault.default).img.withConfig({
    displayName: "BreakScreen__SWLogo",
    componentId: "sc-1nocr3o-11"
})([
    "object-fit:contain;"
]);

},{"react":"bH1AQ","styled-components":"9xpRL","./Background":"n2E1c","@nodecg/react-hooks":"audz3","./CarouselComponent":"3ZV6n","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG","../../helpers/utils":"9zR4Y"}],"n2E1c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Background", ()=>Background);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
const Background = ()=>{
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledBackground, {
        __source: {
            fileName: "src/graphics/components/Background.tsx",
            lineNumber: 4,
            columnNumber: 10
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledVideo, {
        autoPlay: true,
        muted: true,
        loop: true,
        __source: {
            fileName: "src/graphics/components/Background.tsx",
            lineNumber: 5,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("source", {
        src: "/bundles/squid-waukee-layouts/images/backgrounds/Background.webm",
        type: "video/mp4",
        __source: {
            fileName: "src/graphics/components/Background.tsx",
            lineNumber: 6,
            columnNumber: 5
        },
        __self: undefined
    })));
};
const StyledBackground = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Background__StyledBackground",
    componentId: "sc-1e30ve5-0"
})([
    "position:absolute;width:100%;height:100%;padding:0px;margin:0px;"
]);
const StyledVideo = (0, _styledComponentsDefault.default).video.withConfig({
    displayName: "Background__StyledVideo",
    componentId: "sc-1e30ve5-1"
})([
    "position:relative;width:100%;height:100%;object-fit:fill;vertical-align:top;"
]);

},{"react":"bH1AQ","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"3ZV6n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CarouselComponent", ()=>CarouselComponent);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
const DEFAULT_SPEED = 5000;
const DEFAULT_TRANSITION_SPEED = 1000;
const CarouselComponent = ({ children, playing = true, speed, transitionSpeed, once, startIndex })=>{
    const [carouselIndex, setCarouselIndex] = (0, _react.useState)(startIndex || 0);
    const carouselIntervalId = (0, _react.useRef)(null);
    const activeCarouselIndexRef = (0, _react.useRef)(startIndex || 0);
    const childElements = (0, _react.useMemo)(()=>{
        return (0, _reactDefault.default).Children.toArray(children);
    }, [
        children
    ]);
    (0, _react.useEffect)(()=>{
        if (playing && childElements.length > 1) {
            //Force it to the last element
            if (activeCarouselIndexRef.current >= childElements.length) {
                setCarouselIndex(childElements.length - 1);
                activeCarouselIndexRef.current = childElements.length - 1;
            }
            //Function ID from Set Interval, to clear it later
            carouselIntervalId.current = window.setInterval(()=>{
                if (!playing) return;
                if (once && activeCarouselIndexRef.current + 1 >= childElements.length) {
                    if (carouselIntervalId.current) clearInterval(carouselIntervalId.current);
                    return;
                }
                const nextIndex = (activeCarouselIndexRef.current + 1) % childElements.length;
                setCarouselIndex(nextIndex);
                activeCarouselIndexRef.current = nextIndex;
            }, speed || DEFAULT_SPEED);
        } else if (playing) {
            setCarouselIndex(0);
            activeCarouselIndexRef.current = 0;
        }
        return ()=>{
            if (carouselIntervalId.current) clearInterval(carouselIntervalId.current);
        };
    }, [
        playing,
        childElements.length
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselContainer, {
        __source: {
            fileName: "src/graphics/components/CarouselComponent.tsx",
            lineNumber: 54,
            columnNumber: 10
        },
        __self: undefined
    }, childElements.map((child, index, array)=>/*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselItem, {
            key: index,
            $active: index === carouselIndex,
            $isRelative: index === array.length - 1,
            speed: (transitionSpeed ? transitionSpeed : DEFAULT_TRANSITION_SPEED) / 2,
            __source: {
                fileName: "src/graphics/components/CarouselComponent.tsx",
                lineNumber: 55,
                columnNumber: 57
            },
            __self: undefined
        }, child)));
};
const CarouselContainer = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "CarouselComponent__CarouselContainer",
    componentId: "sc-c6brei-0"
})([
    "position:relative;width:100%;height:100%;"
]);
const CarouselItem = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "CarouselComponent__CarouselItem",
    componentId: "sc-c6brei-1"
})([
    "position:",
    ";max-height:100%;width:100%;height:100%;opacity:",
    ";transition:opacity ",
    "ms linear;transition-delay:",
    "ms;"
], (props)=>props.$isRelative ? `relative` : `absolute`, (props)=>props.$active ? 1 : 0, (props)=>props.speed, (props)=>props.$active ? props.speed : 0);

},{"react":"bH1AQ","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}]},["41g4H"], "41g4H", "parcelRequire94c2")

//# sourceMappingURL=berightback.0f5edcff.js.map
