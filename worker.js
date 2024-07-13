const {parentPort , workerData} = require('worker_threads');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
let x = workerData.port;
let z = workerData.addition;
app.listen(x , ()=>{
    console.log(`listening on http://localhost:${x}`)
})
// x=x+1
parentPort.postMessage(x);