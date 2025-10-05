function sayMyName()
{
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("A");
    console.log("L");
    console.log("I");

}

// sayMyName()

/*function addToNumbers(number1, number2)
{
    console.log(number1 + number2);
    
}
*/

//

function addToNumbers(number1, number2)
{
//    let result = number1 + number2
//    return result
    return number1 + number2
    
}
const result = addToNumbers(3,4)
console.log("Result:", result);

function loginUserMessage(username )
//here default value will be considered as sam and if block will never execeute 
// function loginUserMessage(username = "sam")
{
    // if(username === undefined)
    if(!username)
    {
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());
loginUserMessage()

function calculateCartPrice(...num1)
{
    return num1
}
console.log(calculateCartPrice(200, 400, 500))


const user = {
    username : "Shivanjali",
    prices: 199
}
function handleobject(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
    
}
// handleobject(user)

handleobject({
    username: "Hitesh",
    prices: 399
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));


console.log(returnSecondValue([200, 400, 500, 600]));