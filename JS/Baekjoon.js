//1번문제
console.log("1번문제입니다");
let A = prompt("입력","A의값을 입력하세요");
let B = prompt("입력","B의값을 입력하세요");

if(A>B){
    console.log(">");
} else if (A<B){
    console.log("<");
} else if (A===B){
    console.log("==");
}

// 2번문제
console.log("2번문제입니다");
let score = prompt("입력","점수를 입력해주세요");

if(score>=90){
    console.log("A");
} else if(score>=80){
    console.log("B");
} else if(score>=70){
    console.log("C");
} else if(score>=60){
    console.log("D");
} else {
    console.log("F");
}

// 3번문제
console.log("3번문제입니다");
let year = prompt("입력","연도를 입력해주세요");

if(year%4===0 && year % 100 !== 0){
    console.log("1");
} else if(year % 400 === 0) {
    console.log("1");
} else {
    console.log("0");
}