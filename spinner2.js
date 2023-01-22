process.stdout.write('hello from spinner1.js... \rheyyy\n');

const str = "|/-\\|/-\\|";

let counter = 100;
for (let char of str) {
  setTimeout( () => {
    process.stdout.write('\r' + char + "   ");
  }, counter += 200);
};