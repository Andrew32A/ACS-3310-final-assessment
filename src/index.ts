import data from "./data.json";
import { capitalizeWords } from "@andrew_dominican/string-lib";
// import { D } from "@andrew_dominican/date-lib"; // Date library isn't typed so it's not working properly

// Challenge 1
data.forEach((person) => {
  person.first_name = capitalizeWords(person.first_name);
  person.last_name = capitalizeWords(person.last_name);
});

data.forEach((person) => {
  console.log(person.first_name, person.last_name);
});

// Challenge 2
const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString(undefined, options);
}

data.forEach((person) => {
  console.log("Purchased:", formatDate(person.purchased));
});

// Challenge 3
function when(date1: Date, date2: Date): number {
  const months = (date2.getFullYear() - date1.getFullYear()) * 12;
  return months - date1.getMonth() + date2.getMonth();
}

data.forEach((person) => {
  const monthsDiff = when(new Date(person.lastpayment), new Date());
  console.log("Last Payment:", `${monthsDiff} months ago`);
});
