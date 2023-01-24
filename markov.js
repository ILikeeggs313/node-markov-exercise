/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    //let's make a map to loop through it
    let markovChains = new Map();

    //a classic loop probably works
    for(let i = 0; i< this.words.length; i ++){
      let markovWord = this.words[i];
      //return a null if there is no next word
      let markovNextWord = this.words[i + 1] || null;

      if(markovChains.has(word)) markovChains.get(word).push(markovNextWord);
        else markovChains.set(word, [markovNextWord]);

    
    }
    this.markovChains = markovChains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    //we probably will want a random word/key to start?
    let keys = Array.from(this.markovChains.keys());
    let key = MarkovMachine.choice(keys);
    let outPut = [];
    //produce the chain until no words left
    //use a while loop
    while (outPut.length < numWords && key !== null){
      outPut.push(key);
      key = MarkovMachine.choice(this.markovChains.get(key));
    }
    return outPut.join('');
    }
}


//finally, we need to export
module.exports = { MarkovMachine};
let mm = new MarkovMachine("the cat in the hat");

