/* Challenge 1:
Here are two awesome messages:
Hi, my name is Julia. I love cats. In my spare time, I like to play video
games.
Hi, my name is James. I love baseball. In my spare time, I like to read.
Declare and assign values to three variables for each part of the sentence that changes
(firstName, interest, and hobby).
Use your variables and string concatenation to create your own awesome message and store it in
an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.*/

var firstName = "Julia";
var interest = "cats";
var hobby = "play video games";
var awesomeMessage = "Hi, my name is "+firstName+". I love "+interest+". In my spare time, I like to "+hobby+".";
console.log(awesomeMessage);

/*Challenge 2:
To convert Celsius to Fahrenheit, you can use the following formula:
F=C×1.8+32
Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of
12°C.*/

    var c = 12;
    var f = c*1.8+32;
    console.log(f);

/*Challenge 3:
All animals will fall within one of the three consumer-based categories based on the types of food that
they eat.
 Animals that eat only plants are called herbivores
 Animals that eat only other animals are called carnivores
 Animals that eat both plants and animals are called omnivores
Write a series of ternary statements that sets the variable category equal to:
 "herbivore" if an animal eats plants
 "carnivore" if an animal eats animals
 "omnivore" if an animal eats plants and animals
 undefined if an animal doesn't eat plants or animals
Use the eatsPlants and eatsAnimals variables to test your code*/

    var eatsPlants = true;
    var eatsAnimals = false;

    var category = (eatsPlants && eatsAnimals)? "omnivore" : (eatsPlants && !eatsAnimals)? "herbivore" : (!eatsPlants && !eatsAnimals)?
        "carnivore" : undefined;
    console.log(category);

/*Challenge 4:
Write a for (note: not a function) loop that prints out the factorial of the number 12:
A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! Or "3
factorial" is 3 * 2 * 1 = 6
Save your final answer in a variable called solution and print it to the console.*/

    var solution = 1;
        for(var x=1 ; x<=12 ; x++){
            solution = solution*x;
        }
  console.log(solution);

/*Challenge 5:
Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to
return.
Here's an example of the output and how to call the function that you will write:
console.log(laugh(3));
Prints: "hahaha!"*/

function laugh(num){
    var laughing = "";
    for(var i=0 ; i<num ; i++ ){
        laughing = laughing+"ha";
    }
    return laughing+"!";
}
console.log(laugh(3));

/*Challenge 6:
For this quiz, you're going to create a function called buildTriangle() that will accept an input (the
triangle at its widest width) and will return the string representation of a triangle. See the example output
below.
buildTriangle(10);
Returns:
*
* *
* * *
* * * *
* * * * *
* * * * * *
* * * * * * *
* * * * * * * *
* * * * * * * * *
* * * * * * * * * *    */

function makeLine(num) {
  var star = "";
  for (var i = 1; i <= num; i++) {
    star += "* "
  }
 return star + "\n";
}

function buildTriangle(height){
  var triangle=""; 
  for (var j=1; j<=height; j++){
    triangle += (makeLine(j));
  }
  return triangle;
}
buildTriangle(10); 
console.log(buildTriangle(10));
/*Challenge 7:
loop over the following array and add 100 to each of the values if the value is divisible by 3.
test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148,
169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139]; */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148,
169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139]; 

test.forEach(function(element,index,array){
   if(element%3 ===0){
array[index] += 100;
}
});
console.log(test);

/*Challenge 8:
Create an object called facebookProfile. The object should have 3 properties:
1. your name
2. the number of friends you have, and
3. an array of messages you've posted (as strings)
4. The object should also have 4 methods:
1. postMessage(message) - adds a new message string to the array
2. deleteMessage(index) - removes the message corresponding to the index provided
3. addFriend() - increases the friend count by 1
4. removeFriend() - decreases the friend count by 1*/

var facebookProfile = {
	name:"Doaa",
	friends:150,
	messages:["hello there","1ST post","happy birthday"],
	postMessage(message){
		facebookProfile.messages.push(message);
	},
	deleteMessage(index){
		facebookProfile.messages.splice(index,1);
	},
	addFriend(){
		facebookProfile.friends +=1;
	},
	removeFriend(){
		facebookProfile.friends -=1;
	},
};
facebookProfile.removeFriend();
facebookProfile.friends;
console.log(facebookProfile);

/*Write a function called convertToRoman() that takes a number then convert it into a roman numeral.
All roman numerals answers should be provided in upper-case.*/

