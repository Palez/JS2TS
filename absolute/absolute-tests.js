"use strict";
exports.__esModule = true;
var absolute_1 = require("absolute");
var assert_1 = require("assert");
var x = absolute_1('/home/foo');
console.log(assert_1(x === true));
console.log(x);
