/** Command-line tool to generate Markov text. */

const fs = require('fs');
const markov = require('./markov');
const axios = require('axios');
//get process.env
const process = require('process');

//let's make a view func to generate text

function textGenerator(txt){
    let mm = new MarkovMachine(txt);
    console.log(mm.makeText());
}

//spit out txt files and return err in case it can't read
//using from node-files earlier

function makeText(){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.log(`can't read ${path} : ${err}`);
            process.exit(1);
        } else{
            textGenerator(data);
        }
    })
}

//view function to read the uRL of the txt

//we use async and await here since we use axios
async function getTextURL(url){
    let res;
    try{
        res = await axios.get(url);
       
    }   catch {
        console.log(`cannot read ${url}: ${err}`);
        process.exit(1);
    }

    //spit out text data for the result if no errors are found
    textGenerator(res.data);
}

