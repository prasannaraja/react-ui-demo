"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// avoiding primitive obssession
// https://refactoring.guru/smells/primitive-obsession
var Email = /** @class */ (function () {
    function Email(address) {
        if (isInvalidAddress(address)) {
            throw new Error("Invalid email address");
        }
        else {
            this.address = address.toLowerCase();
        }
    }
    return Email;
}());
exports.Email = Email;
function isInvalidAddress(address) {
    var validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !validEmailRegex.test(address);
}
