# node-markov-exercise
# should be easy to understand, just implement the view function to generate text, join text,
# can implement a command-line on how to interpret the code
let [method, path] = process.argv.slice(2);

if (method === "file") {
  makeText(path);
}

else if (method === "url") {
  makeURLText(path);
}

else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}
