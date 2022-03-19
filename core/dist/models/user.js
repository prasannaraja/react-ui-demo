"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var email_1 = require("./email");
var User = /** @class */ (function () {
    function User(firstName, lastName, email) {
        if (isEmptyOrNull(firstName) || isEmptyOrNull(lastName)) {
            throw new Error("You must fill first name and last name");
        }
        this._email = new email_1.Email(email);
        this._firstName = firstName.toLocaleLowerCase();
        this._lastName = lastName.toLocaleLowerCase();
    }
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email.address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._firstName + " " + this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
function isEmptyOrNull(word) {
    return !word || word.trim().length === 0;
}
