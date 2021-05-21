var express = require('express');
var router = express.Router();
const app = express();
const cron = require('node-cron');


//Workshop #13: NodeJS: Cron Jobs :

router.post('/schedule', (req, res, next) => {
  try {
    var d = new Date();
    var min = d.getMinutes();
    var date= d.getDate();
    var month = d.getMonth();
    var hour = d.getHours();

    cron.schedule(`${min + 1} ${hour} ${date} ${month + 1} * `, () => {

      console.log(`Task Completed at ${hour}: ${min + 1}`);

    },
      {
        schedule: true,
        timezone: "Asia/Kolkata",
      }

    );

    res.status(201).json({ message: "job Scheduled" });
  }
  catch (error) {
    console.log(error);

    res.status(500).send('Server Error');
  }
    
});

module.exports = router;
