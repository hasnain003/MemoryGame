let c = document.querySelectorAll('.card');

let cards=[...c];

let deck=document.querySelector('.deck');

let count=0,counter=0;
let moves=document.querySelector('.moves');



let stars=document.querySelector('.stars');

let starList=document.querySelectorAll('.fa-star');

let hour,min,sec,interval;
let timer=document.querySelector('.timer');

let openCards=[];
let type, elem;
//c.classList.add("open","show");
//document.querySelector('.fa-star').style.backgroundColor = "red";
/*c.addEventListener("click", function(){
	c.classList.ahdd("open","show");
});

let displayCard = function(){
	c.classList.add('open','show');
}
*/

const star=document.querySelector('.stars');

function displayCard(){
	this.classList.add("open","show","disable");
}

function cardOpen(){ 

//for(let i=0;i<c.length;i++){
	openCards.push(this);
	
/*	this.addEventListener("click", function(){
		this.classList.add("open","show","disable");
	}); */
	console.log(this.type);
	if(openCards.length === 2)
		{
			if(openCards[0].type === openCards[1].type) {
				movesCounter();
				openCards[0].classList.add("match");
				openCards[1].classList.add("match");
				openCards=[];
			}
			else{
				movesCounter();
				openCards[0].classList.add("unmatch");
				openCards[1].classList.add("unmatch");
				setTimeout(function() {
       				openCards[0].classList.remove("open","show","unmatch","disable");
					openCards[1].classList.remove("open","show","unmatch","disable");
					openCards=[];
				}, 700);
			}
		}
	/*else{
		
	}
	
	this.addEventListener("click", function(){
		this.classList.add("open","show","disable");
		if(count%2 ===0) {
			type=this.type;
			elem = this;
		}
		else 
			if(type === this.type) {
				movesCounter();
				this.classList.add("match");
				elem.classList.add("match");
				console.log(type);
			}
			else{
				movesCounter();
				this.classList.add("unmatch");
				elem.classList.add("unmatch");
				setTimeout(function() {
       				this.classList.remove("open","show","unmatch","disable");
					elem.classList.remove("open","show","unmatch","disable");
				}, 700);
				
			}
			
		count++;
	});
//	}*/
}
/*
function cardOpen(){
	cardOpen.push(this);
	len=cardOpen.length;
	if(len==2)
		{
			
		}
}
*/


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

document.body.onload=startGame();


function startGame(){
	c=shuffle(cards);
	
//	console.log(c);
	
	for(let i=0; i<c.length;i++)
		{
			deck.innerHTML = "";
			[].forEach.call(cards, function(item) {
				deck.appendChild(item);
			});
			c[i].classList.remove("open","show","match","disable");
		}
	
	for(let i=0;i<starList.length;i++)
		{
			starList[i].style.color= "#ffd700";
			starList[i].style.visibility="";
		}
	
	moves.innerHTML=count;

	sec=0;
	min=0;
	hour=0;
	timer.innerHTML=hour+" hour "+min+" min "+sec;
	clearInterval(interval);
}


function movesCounter(){
	counter++;
	moves.innerHTML=counter;
	if(counter === 1)
		{
			setTime();		    
		}
	if(counter === 13)
		{
			starList[2].style.color= "#000";
		}
	else if(counter === 18)
		{
			starList[1].style.color= "#000";
		}
}


function setTime(){
	interval = setInterval(function(){
		timer.innerHTML=hour+" hour "+min+" min "+sec;
		sec++;
		if(sec === 60){
			min++;
			sec= 0;
		}
		if(min === 60)
			{
				hour++;
				min= 0;
			}
	},1000);
}


for(i=0;i<c.length;i++)
	{
		c[i].addEventListener("click",displayCard);
		c[i].addEventListener("click",cardOpen);
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