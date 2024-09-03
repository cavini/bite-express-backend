import { CronJob } from 'cron';
import { IncomingMessage } from 'http';
import https from 'https';

// I can't afford a paid hosting service. The free tier allows for my app to be online for only a few minutes
// before being shut down. The script below calls the endpoint for my app every 10 minutes to make sure its live and
// running for recruiters and other people that might want to check out this project.

const backendUrl = `${process.env.BACKEND_PROD_URL}/health`;
const job = new CronJob('*/10 * * * *', function () {
  console.log('Restarting server');
  https
    .get(backendUrl, (res: IncomingMessage) => {
      if (res.statusCode == 200) {
        console.log('Server restarted');
      } else {
        console.error(`
     failed to restart server with status code: ${res.statusCode}`
        );
      }
    })
    .on('error', (err: { message: string; }) => {
      console.error('Error during Restart:', err.message);
    });
});

module.exports = { job: job }