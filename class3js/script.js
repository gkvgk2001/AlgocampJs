//Short circuiting in js

console.log(20 && 30);
console.log(0 && 20);

console.log("" && -0)

//short circuiting in 

console.log("or")
console.log(30 || 20);
console.log(0|| 10);
console.log("" || -0);


//comparision operator

console.log("Comparision operator")


console.log(10<=20);
console.log(10>=20);

console.log(9<=9);
console.log(12>17);

// strict and loose equality

console.log(" strict and loose equality")


console.log(10 == 10)
console.log(10 == "10");

console.log("strict equality")
console.log(10 === "10");

console.log(23 === 23);


// not equal to ;
console.log("not equal to")

console.log(20 != 20);
console.log("20" != 20)

console.log("stric not equal")
console.log(20 !== 20);
console.log(20 !== "20");

//conditionals

let usersigned = true;
let paiduser = true;


if (usersigned) {
    console.log("Dashboard loaded")
}
else{

    console.log("homepage liaded");
}


console.log("2nd condition checj");




if (usersigned == true && paiduser == true ) {
    console.log("Dashboard loaded")
}
else{

    console.log("homepage liaded");
}


//else if

console.log("else if block")

let usersubscription = "super";

if(usersubscription == "unsubsribed"){
    console.log("Show pricing page")
}
else if(usersubscription == "super"){
    console.log("Show only Hindi page")
}

else if(usersubscription == "premium"){
    console.log("Show all content")
}

//Nested if else

console.log("Nested if else")

let userhasprimesubscription = true;
let userliongatesubscription = false;

let userhassonysubscription = true;

if(userhasprimesubscription){

    if(userliongatesubscription){
        console.log("Show John wick")
    }
    else if (userhassonysubscription){
        console.log("Show Guradian")
    }
    else{
        console.log("Show Panchayat")
    }
}









