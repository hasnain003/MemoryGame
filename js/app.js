let c = document.querySelectorAll('.card');
//c.classList.add("open","show");
//document.querySelector('.fa-star').style.backgroundColor = "red";
/*c.addEventListener("click", function(){
	c.classList.ahdd("open","show");
});

let displayCard = function(){
	c.classList.add('open','show');
}
*/
let count=0,type, elem;
for(let i=0;i<c.length;i++){
	
	c[i].addEventListener("click", function(){
		c[i].classList.add("open","show");
		if(count%2 ===0) {
			type=c[i].type;
			elem = c[i];
		}
		else 
			if(type === c[i].type) {
				this.classList.add("match");
				elem.classList.add("match");
				console.log(type);
			}
			else{
				this.classList.add("unmatch");
				elem.classList.add("unmatch");
				setTimeout(function() {
       				c[i].classList.remove("open","show","unmatch");
					elem.classList.remove("open","show","unmatch");
				}, 600);
				
			}
			
		count++;
	});
}




/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */