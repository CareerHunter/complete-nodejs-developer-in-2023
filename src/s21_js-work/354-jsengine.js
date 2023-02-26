  // Javsscript Engine
  function jsengine(code) {
    return code.split(/\s+/); // jsengine('var a =5'):  [ 'var', 'a', '=5' ]
  }

  console.log("jsengine('var a =5'): ", jsengine('var a =5'));


/**
 * Paste or drop some JavaScript here and explore
 * the syntax tree created by chosen parser.
 * You can use all the cool new features from ES6
 * and even more. Enjoy!
 */

let tips = [
    "Click on any AST node with a '+' to expand it",
  
    "Hovering over a node highlights the \
     corresponding location in the source code",
  
    "Shift click on an AST node to expand the whole subtree"
  ];
  
  function printTips() {
    tips.forEach((tip, i) => console.log(`Tip ${i}:` + tip));
  }
  
  printTips()


