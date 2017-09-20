function checkWord(){
	var word = document.getElementById("wordInput").value;
	var wordLength = word.length;
	var counter = 0;
	//console.log(wordLength);
	for (var i = 0; i < Math.floor(wordLength/2); i++) {
			console.log('i: ' + word[i]);
			console.log('dlugosc minus i ' + word[parseInt(word.length) - i]);
		if (word[i] == word[word.length - i]) {
			counter = counter + 1;
		}
		console.log(counter + '' + Math.floor(wordLength/2));
		if (counter == Math.floor(wordLength/2)) {
			document.getElementById("result").innerHTML = 'YES!';
		}
		else { 
			document.getElementById("result").innerHTML = 'NO!';
		}
	}
}