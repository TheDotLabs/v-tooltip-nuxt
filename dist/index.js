"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = void 0;
var path_1 = __importDefault(require("path"));
var myModule = function nuxtVTooltip(moduleOptions) {
    var options = Object.assign({}, this.options.VTooltip, moduleOptions);
    // Register plugin
    this.addPlugin({
        src: path_1.default.resolve(__dirname, 'plugin.js'),
        ssr: false,
        fileName: 'v-tooltip.js',
        options: options
    });
};
exports.default = myModule;
exports.meta = require('./package.json');
