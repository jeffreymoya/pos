"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/components/LoginScreen.tsx
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_relay_1 = require("react-relay");
var LoginMutation_1 = require("../../relay/mutations/LoginMutation");
var LoginScreen = function (_a) {
    var login = _a.login;
    var _b = (0, react_1.useState)(''), username = _b[0], setUsername = _b[1];
    var _c = (0, react_1.useState)(''), password = _c[0], setPassword = _c[1];
    var handleLogin = function () {
        (0, LoginMutation_1.default)(username, password, function () {
            // Handle successful login
        }, function (error) {
            // Handle login error
        });
    };
    return (<react_native_1.View>
      <react_native_1.TextInput placeholder="Username" value={username} onChangeText={setUsername}/>
      <react_native_1.TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry/>
      <react_native_1.Button title="Login" onPress={handleLogin}/>
    </react_native_1.View>);
};
exports.default = (0, react_relay_1.createFragmentContainer)(LoginScreen, {
    login: (0, react_relay_1.graphql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      fragment LoginScreen_login on RootQuery {\n          login(username: String!, password: String!) {\n              token\n              user {\n                  id\n                  username\n              }\n          }\n      }\n  "], ["\n      fragment LoginScreen_login on RootQuery {\n          login(username: String!, password: String!) {\n              token\n              user {\n                  id\n                  username\n              }\n          }\n      }\n  "]))),
});
var templateObject_1;
