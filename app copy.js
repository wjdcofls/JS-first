console.log("lalalala"); //print

const a = 6;//Making variable - const(constant) -means non change
console.log(a+2);
console.log(a*2);
console.log(a/2);

let myName = "ChallenJ";
console.log("Hello" + myName);

myName = "ChaeLin";
console.log("Your new name is" + myName);

//const & let -> What is difference between let and const
//const = constant = cannot change
//let = create

//Kind oF datatype -> null, undefine(선언만 하고 값은 할당하지 않은 변수를 출력할 때 undefine)
const amIFat = null;
let something;
console.log(something, amIFat);


//organize data -> array [ , , ,]
//list -> 같은 종류의 데이터
const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("meat"); //추가
console.log(toBuy);



// xxx.xx
const playerName = "JCL";
const playerPoints = 4394;
const playerBeautiful = true;
const palyerFat = "little bit";

const player_list = ["JCL", 4394, true, "little bit"]

//create object
const player = {
    name: "JCL",
    points: 10,
    fat: "flase"
}
console.log(player);
console.log(player.name);
console.log(player["name"]);
player.lastName = "potato";
player.points = 15;
console.log(player);


//Function -> 반복해서 사용할 수 있는 코드조각
function sayHello(nameOfPerson, age){
    console.log("Hello! My name is " + nameOfPerson + " and I'm " + age)
}
//Argument -> function을 실행하는 동안 정보를 function에게 보낼 수 있는 방법

sayHello("JCL", 25);
sayHello("JeongChaeLin", 26);


//calculator
function plus(a, b){
    console.log(a + b);
}
function divide(firstNum, secondNum){
    console.log(firstNum/secondNum);
}
plus(2020, 4394);
divide(2020, 4394)



const player2 = {
    name: "JCL",
    sayHello: function(otherPersonsName){
        console.log("hello! " + otherPersonsName + " nice to meet you!");
    },
};

console.log(player2.name)
player2.sayHello("JChaeLin");
player2.sayHello("YouBin");
console.log(player2,console);

const calculator = {
    plus: function(a,b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    times: function(a,b){
        console.log(a*b);
    },
    divide: function(a,b){
        console.log(a/b)
    },
    powerOf: function(a,b){
        console.log(a**b)
    }}

    calculator.plus(1,2);
    calculator.minus(1,2);
    calculator.times(1,2);
    calculator.divide(1,2);
    calculator.powerOf(1,2);

  //함수 내부에서 console.log 쓰지 않고 하기

const age = 97;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);

console.log(krAge);
    

//▽어떤 작업을 처리하고, 그 결과를 return하기 위해 function을 사용

    const calculator2 = {
        plus: function(a,b){
            return a+b;
        },
        minus: function(a,b){
            return a-b;
        },
        times: function(a,b){
            return a*b;
        },
        divide: function(a,b){
            return a/b;
        },
        powerOf: function(a,b){
            return a**b; 
        }
    };

// function 'calculator2'를 호출하는 코드가 그 function의 return값이 된다.(return값을 갖게 된다)
const plusResult = calculator2.plus(2,3);
console.log(plusResult);

const minusResult = calculator2.minus(plusResult,10);
const timesResult = calculator2.times(10, minusResult);
const divideResult = calculator2.divide(timesResult, plusResult);
const powerOfResult = calculator2.powerOf(divideResult, minusResult);

//조건문 (conditionals)
const age2 = parseInt(prompt("How old are you?"));  //prompt는 사용자에게 창을 띄울 수 있도록 해줌
// parseInt() = "25" -> 25
//console.log(typeof "15", typeof parseInt("15"));
console.log(age2);
console.log(isNaN(age2));

if (isNaN(age2)  || age2 < 0){
    alert("Please write a real positive number");
} else if(age2 < 18){
    alert("You are too young.");
} else if(age2 >= 18 && age2 <= 50){
    alert("You can drink");
}  else if(age2 > 51 && age2 <= 80){
    alert("You should exercise");
} else if(age2 > 80){
    alert("You can do whatever you want");
}



