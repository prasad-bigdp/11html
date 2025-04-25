//simple if
let name="prasad"
if (name == "raj")
{
    console.log("welcome to raj")
}

 
//if--else
let age = 20;
if (age >= 18)
{
 console.log("Eligible to vote")
}
else
{
    console.log("not eligible to vote")
}

// if else if ladder
let a = 0;
if (a > 0)
{
    console.log(`${a} is positive`)
}
else if (a < 0)
{
    console.log(`${a} is negitive`)
}
else
{
    console.log(`${a} is neither positive not negitive`)
}

// check the gender of person, only males who are above 18 are eligible for this job. use appropriates else cases
let gender = 'M', ag = 21;
    if (gender == "M")
    {
    if (age > 18)
    {
        console.log("you are eligible")
    }
    else
    {
        console.log("males less than 18 are not eligible")
    }
}
else
{
    console.log("females are not eligible")
}



// printing the day based on its number 0-sunday , 1- monday ....
let day = 4;
switch (day)
{
    case 0: console.log("sunday"); break;
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("saturday"); break;
    default: console.log("please enter value between 0-6"); 
}


































