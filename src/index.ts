import data from './data.json';
import { capitalizeWords } from '@andrew_dominican/string-lib';
// import { D } from "@andrew_dominican/date-lib"; // Date library isn't typed so it's not working properly

// Challenge 1
data.forEach((person) => {
  person.first_name = capitalizeWords(person.first_name);
  person.last_name = capitalizeWords(person.last_name);
});

// Challenge 2
const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString(undefined, options);
}

// Challenge 3
function when(date1: Date, date2: Date): number {
  const months = (date2.getFullYear() - date1.getFullYear()) * 12;
  return months - date1.getMonth() + date2.getMonth();
}

// Challenge 4
export function formatPhone(phone: string): string {
  if (phone.length !== 10) {
    throw new Error('Phone number is too short, needs to be length of 10');
  } else if (isNaN(Number(phone))) {
    throw new Error('Phone number must be a number');
  }

  try {
    const areaCode = phone.slice(0, 3);
    const firstThree = phone.slice(3, 6);
    const lastFour = phone.slice(6, 10);
    return `(${areaCode}) ${firstThree}-${lastFour}`;
  } catch (error) {
    console.log(error);
    throw new Error('Error formatting phone number');
  }
}

// Console logs
data.forEach((person) => {
  console.log('--------------------');
  // Challenge 1
  console.log(person.first_name, person.last_name);

  // Challenge 2
  console.log('Purchased:', formatDate(person.purchased));

  // Challenge 3
  const monthsDiff = when(new Date(person.lastpayment), new Date());
  console.log('Last Payment:', `${monthsDiff} months ago`);

  // Challenge 4
  console.log('Phone:', formatPhone(person.phone));

  console.log('--------------------');
});
