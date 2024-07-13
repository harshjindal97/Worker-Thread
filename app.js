const express = require('express');
const app = express();
const cors = require('cors');
const {Worker }=  require('worker_threads');
app.use(cors());
let y = 8001;

const calc =()=>{
    const worker = new Worker('./worker.js' , {
        workerData: {port:y}
    });
    worker.on('message', (result) => {
        console.log(`Result from worker: ${result}`);
      });
    
      worker.on('error', (error) => {
        console.error(`Worker error: ${error}`);
      });
    
      worker.on('exit', (code) => {
        if (code !== 0) {
          console.error(`Worker stopped with exit code ${code}`);
        }
      });
      y += 1;
}


calc();
calc();
calc();
calc();
calc();
calc();
calc();


