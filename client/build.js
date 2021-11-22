const { exec } = require("child_process");
const nodeCron = require("node-cron");

const job = nodeCron.schedule("* * 0 * * *", function jobFunction() {
  exec("sh script.sh", (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });

  console.log(new Date().toLocaleString());
});

job.start();
