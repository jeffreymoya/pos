"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var Providers_1 = require("./Providers");
var App = function () {
    return (<Providers_1.default>
      <react_native_1.StatusBar barStyle="dark-content"/>
      <Home />
    </Providers_1.default>);
};
exports.default = App;
