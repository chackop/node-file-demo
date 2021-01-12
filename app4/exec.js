const cp = require("child_process");

// cp.exec("ls", (err, data, stderr) => {
//   console.log(data);
// });

cp.exec("node readStream", (err, data, stderr) => {
  console.log(data);
});
