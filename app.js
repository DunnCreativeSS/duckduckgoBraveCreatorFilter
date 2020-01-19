var fs = require('fs');
sitess = ""
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./server_publisher_info.csv')
});
count = 0
lineReader.on('line', function (line) {
if (count > 0){
	split = line.split(',')
	sitess += '+site%3A'+split[0]
}
	count++
});
setTimeout(function(){
	
	fs.writeFile("./datanew.txt", sitess, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
}, 11000)