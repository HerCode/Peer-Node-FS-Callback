var fs = require('fs');

function completeAudit(){
fs.readFile('numbers.txt', 'utf-8', function(err, fileContents){
  if(err){
    console.log(err);
  }

  var stringCollection = fileContents.split(',');
  var numberCollection = parseIntArr(stringCollection.length);
  for(i = 0; i <stringCollection.length; i++); 
  stringCollection = numberCollection[i];
  console.log(stringCollection);
  /*console.log('File Contents', fileContents);*/
  /*myNumber = parseInt(fileContents);
  myNumber++;*/

});
}

completeAudit();
