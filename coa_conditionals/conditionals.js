	// this is a single line comment
	/*
	 * this is a multi-line comment
	 */

	 //Prompt the user for their name and last name. 

	 var firstName = prompt("What is your first name?");
	 var lastName = prompt("What is your last name?");


	//Create a new variable called full name and store the users full name.
	var fullName = firstName + " " +lastName;
	

	//Print the full name to the console.
	console.log(fullName);
	

	//Prompt the user for their age.
	var userAge=prompt('What is your age?');
	

	//Add 10 to the age and print the output to the console.
	var newAge = parseInt(userAge) + 10;
	console.log(newAge);
	
	//Verify that the user is over 18 and print if they are a minor or adult to the console.
	if (userAge>18)
	{
		console.log(userAge);
	}
	else {
		console.log ("Sorry, you must be 18 to access");
	}
	
	//Verify if the first name is "General" and the last name is NOT "Assembly"

