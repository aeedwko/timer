const input = process.argv.slice(2);
// ignore negative numbers and non numbers
const inputNumbers = input.map(element => Number(element));
const inputTimesFiltered = inputNumbers.filter(time => time > 0);

// beeps at the specified time
for (const time of inputTimesFiltered) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time);
}