"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = __importDefault(require("./data.json"));
const string_lib_1 = require("@andrew_dominican/string-lib");
// import { D } from "@andrew_dominican/date-lib"; // Date library isn't typed so it's not working properly
// Challenge 1
data_json_1.default.forEach((person) => {
    person.first_name = (0, string_lib_1.capitalizeWords)(person.first_name);
    person.last_name = (0, string_lib_1.capitalizeWords)(person.last_name);
});
data_json_1.default.forEach((person) => {
    console.log(person.first_name, person.last_name);
});
// Challenge 2
const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
};
function formatDate(date) {
    return new Date(date).toLocaleDateString(undefined, options);
}
data_json_1.default.forEach((person) => {
    console.log("Purchased:", formatDate(person.purchased));
});
// Challenge 3
function when(date1, date2) {
    const months = (date2.getFullYear() - date1.getFullYear()) * 12;
    return months - date1.getMonth() + date2.getMonth();
}
data_json_1.default.forEach((person) => {
    const monthsDiff = when(new Date(person.lastpayment), new Date());
    console.log("Last Payment:", `${monthsDiff} months ago`);
});
