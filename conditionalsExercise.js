let randomNum = Math.floor((Math.random() * 5) + 1);


if (randomNum>=4){
    console.log("Equal to or more than 4");
} else if (randomNum >= 2){
    console.log("Equal to or more than 2");
} else {
    console.log("Equal to 1");
}


if (randomNum != 3){
    console.log("Not equal to 3");
}



if (randomNum != (3 && 5)){
    console.log("Not equal to 3 AND  not equal to 5");
    console.log("Not equal to 3 AND 5");
}



if (randomNum === 2 || randomNum === 4){
    console.log("Equal to 2 or equal to 4");
}

randomNum >= 4 ? console.log("Equal to 4 or more"):
console.log("Less Than 4");


switch (randomNum){
    case 1:
        console.log("One");
    break;
    case 2:
        console.log("Two");
    break;
    case 3:
        console.log("Three");
    break;
    case 4:
        console.log("Four");
    break;
    default:
        console.log("Five");
}  