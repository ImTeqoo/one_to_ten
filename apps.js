// One_To_Ten
var hero = 'Muffin Man';
var gender = 'Male';
var age = 32;
var weapon = 'Exploding chocolate muffins with percing macadamia nuts';
var pronoun; 
var xp;
// conditional to set pronoun
if(gender === 'Male'){
	pronoun = 'his'
}else if(gender === 'female'){
	pronoun = 'her'
}else{
	pronoun = 'their'
}

// conditional to set age 
if(age <= 18){
	xp = 'is just beginning';
}

if(age >= 21 && age <= 40){
	xp = 'has seen a few battles'
}

if(age > 40){
	xp = 'has lived through many epic battles'
}

// 1st statement
console.log(hero + 'is our lovable hero, who' xp + 'with his trusty' weapon + '!!!')

//1 Dish 2 Dish
var count;
var Food = 'spaghetti'

function dishHouse (s,t){
	count = s + t;
	console.log(count)
}
dishHouse (7,2)

//1 Dish 2 Dish (cont.)
	if(count > 2){
		console.log('we have to many' + food + 's.')
	}else{
		console.log('welcome to the club!!')
	}
//Assemble the Avengers
var hero = 'Hulk'

function avengersAssemble (g){
	if(hero = Hulk){
		console.log(Hulk + 'smash')
	}else if(hero = black widow){
		console.log(black widow + 'I cannot let you do that...')
	}else if(hero = ironman){
		console.log(ironman + 'So was I...')
	}else if(hero = captain america){
		console.log(captain america + 'He is my friend...')
	}else{
		console.log('HEY! YOU THERE! YAH! THERE! *whispers* youre not needed over there.')
	}
} 
avengersAssemble (Hulk)
//Lights Out
var lights = true 

function LightsOut (t){
	if(lights = true){
		console.log('And then there was light.')
	}else{
		console.log('Lights out.')
	}
}
//Vroom Vroom
var carType = Toyota 