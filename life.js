// Enter your arithmetic operation
let  sign = prompt("Please enter your arithmetic operation")

// Check for your arithmetic operation
if (sign === "+"){

    // Takes the user input of the first number and converts it to a number
    var firstNum = Number(prompt("Please enter the first number ")) 

    //  Check if the user input is a number
    if (isNaN(firstNum)){

        //  if not a number prompt the user to enter a number
        alert("Please enter a number")}

        // Takes the user input of the second number and converts it to a number
    else{var secondNum = Number(prompt("Please enter the second number "))

        //  Check if the user input is a number
        
        if(isNaN(secondNum)){

            //  if not prompt the user to enter a number
            alert("Please enter a number")}
            
            //  if not prompt the user to enter a number
            else{alert(firstNum + secondNum)}  
        }
        
} else if (sign === "-"){
    var firstNum = Number(prompt("Please enter the first number ")) 
    if (isNaN(firstNum)){
        alert("Please enter a number")}

    else{var secondNum = Number(prompt("Please enter the second number "))
        if(isNaN(secondNum)){
            alert("Please enter a number")}
            else{alert(firstNum - secondNum)}  
        }

} else if (sign === "*"){
    var firstNum = Number(prompt("Please enter the first number ")) 
    if (isNaN(firstNum)){
        alert("Please enter a number")}

    else{var secondNum = Number(prompt("Please enter the second number "))
        if(isNaN(secondNum)){
            alert("Please enter a number")}
            else{alert(firstNum * secondNum)}  
        }

} else if (sign === "/"){
    var firstNum = Number(prompt("Please enter the first number ")) 
    if (isNaN(firstNum)){
        alert("Please enter a number")}

    else{var secondNum = Number(prompt("Please enter the second number "))
        if(isNaN(secondNum)){
            alert("Please enter a number")}
            else{alert(firstNum / secondNum)}  
        }
} else{
    alert("Enter an arithmetic operation")
}
    
