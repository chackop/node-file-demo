const grab = (flag) => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);

const [, , firstName, lastName] = process.argv;

console.log(`The Process id ${process.pid}`);
console.log(`3rd arg firstname ${firstName}`);
console.log(`4th arg lastname ${lastName}`);
console.log(`The Process id ${process.pid}`);
console.log(`The Process version node ${process.versions.node}`);
console.log(`The Process Arguments ${process.argv}`);
