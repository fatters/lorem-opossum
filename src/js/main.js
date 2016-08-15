(function (window) {
	var opossum = window['opossum'] || {};

	opossum.main = (function () {
		var words = ['opossum', 'scratchy', 'marsupial', 'is', 'at', 'and', 'didelphimorph', 
		'snout', 'omnivore', 'prehensile', 'tail', 'solitary', 'nomadic', 'trees', 'dangle',
		'hunted', 'consumed', 'manicou', 'tlacuache', 'fur', 'oil', 'pelt', 'white', 'beast',
		'then', 'where', 'what', 'how', 'a', 'then', 'ears', 'fur', 'call', 'the', 'big',
		'one', 'bitey'];

		function generate() {
			$('#lorem-opossum').empty();
			
			for (var i = 0; i < 6; i++) {
				generateParagraph(i);
			}
		}

		function generateParagraph(pnum) {
			var paragraph = '<p>';

			for (var i = 0; i < 5; i++) {
				var sentence = i === 0 && pnum === 0 ? 'Lorem opossum ' + generateSentence(pnum, i) : generateSentence(pnum, i);
				sentence += i === 4 ? '.' : '. ';
				paragraph += sentence;
			}

			paragraph += '</p>';

			$('#lorem-opossum').append(paragraph);
		}

		function generateSentence(pnum, snum) {
			var sentence = '';
			var previousWord = '';
			var wordsInSentence = randomInt(8, 14);
			
			for (var i = 0; i < wordsInSentence; i++) {
				var word = generateWord();

				while (word === previousWord) {
					word = generateWord();
				}
				sentence += word + ' ';
				previousWord = word;
			}
			sentence = sentence.trim();
			return pnum === 0 && snum === 0 ? sentence : sentence.charAt(0).toUpperCase() + sentence.slice(1);
		}

		function generateWord() {
			return words[randomInt(0, words.length - 1)];
		}

		function randomInt(min, max)  {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		return {
			generate: generate
		};

	})();

	window['opossum'] = opossum;
})(window);