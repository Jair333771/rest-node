"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sleep = (sec) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, sec * 1000);
    });
};
const sleepWithReturn = (sec) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sec);
        }, sec * 1000);
    });
};
//Obsolet way
const run = () => {
    sleepWithReturn(2).then((value) => {
        console.log("run:  " + value);
    });
};
const runAsync = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sleep(3);
    console.log("runAsync");
});
const runWithReturnAsync = () => __awaiter(void 0, void 0, void 0, function* () {
    const value = yield sleepWithReturn(4);
    console.log("runWithReturnAsync: " + value);
});
run();
runAsync();
runWithReturnAsync();
