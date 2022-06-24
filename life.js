let  sign = prompt("Please enter your arithmetic operation")

if (sign === "+"){
    var firstNum = Number(prompt("Please enter the first number ")) 
    if (isNaN(firstNum)){
        alert("Please enter a number")}

    else{var secondNum = Number(prompt("Please enter the second number "))
        if(isNaN(secondNum)){
            alert("Please enter a number")}
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
    
