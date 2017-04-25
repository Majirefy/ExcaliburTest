(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var excalibur_1 = (typeof window !== "undefined" ? window['ex'] : typeof global !== "undefined" ? global['ex'] : null);
window.onload = function () {
    // WebFont.load({
    //     active: () => {
    //         const game = new Engine({ width: 500, height: 500 });
    //         const label = new Label();
    //         label.fontFamily = "SongTi, Arial, Sans-Serif";
    //         label.fontSize = 20;
    //         label.fontUnit = FontUnit.Em;
    //         label.text = "Nice";
    //         label.color = Color.White;
    //         game.add(label);
    //         game.backgroundColor = Color.Black;
    //         game.start();
    //     },
    //     custom: {
    //         families: ["SongTi"],
    //         urls: ["assets/fonts/font.css"],
    //     },
    // });
    var game = new excalibur_1.Engine({ width: 500, height: 500 });
    var label = new excalibur_1.Label();
    // label.fontFamily = "SongTi, Arial, Sans-Serif";
    label.fontSize = 20;
    label.fontUnit = excalibur_1.FontUnit.Em;
    label.text = "Nice";
    label.color = excalibur_1.Color.White;
    game.add(label);
    game.backgroundColor = excalibur_1.Color.Black;
    game.start();
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
