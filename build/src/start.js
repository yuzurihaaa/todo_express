"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ExampleServer_1 = tslib_1.__importDefault(require("./ExampleServer"));
const exampleServer = new ExampleServer_1.default();
exampleServer.start(3000);
