// 1번문제
console.log("1번문제입니다");
for(let i = 1;i<=12;i++){
    console.log(`${i}월`);
}

// 2번문제
console.log("2번문제입니다");
for(let i = 1;i<=12;i++){
    if(i%2===0){
        console.log(`${i}월`);
    }
}

// 3번문제
console.log("3번문제입니다");
let firstNumber=1;
let secondNumber=1;
let sumNumber=0;

let scanNumber = prompt("입력", "피보나치 배열을 이용해 입력하시는 숫자보다 많아질때까지 출력하고싶은 수를 입력해주세요");
console.log(`${firstNumber},${secondNumber}`); 1,1,2,3
for(let i = 0 ; i<=sumNumber ; i++){
    sumNumber=firstNumber+secondNumber; 
    firstNumber=secondNumber;
    secondNumber=sumNumber;             
    console.log(`${secondNumber}`);   
    if(sumNumber>scanNumber){
        break;
    }  
}

// 4번문제
console.log("4번문제입니다");
const FIXED_PRICE = 1000;
const MANUFACTURE_PRICE_PER_ONE = 70;
const LIST_PRICE_PER_ONE = 100;

let maufactureCount = 0;

while (true){
    if(FIXED_PRICE + MANUFACTURE_PRICE_PER_ONE * maufactureCount < LIST_PRICE_PER_ONE * maufactureCount) {
        break;
    }
    maufactureCount++;
}
console.log(`${maufactureCount}대가손익분기점입니다`);

// 5번문제
console.log("5번문제입니다");
const FIVE = 5;
const THREE = 3;
let inputNumber = prompt("입력","상근이가 배달해야할 설탕의 Kg수를 정해주세요");
bag5kg = Math.floor(inputNumber / FIVE);
leftOver = inputNumber % FIVE;

bag3kg = Math.floor(leftOver / THREE);
leftOver = leftOver % THREE;

if(leftOver%THREE!==0){
    bag3kg++;
}

console.log(`5Kg봉지는${bag5kg}개,3Kg봉지는${bag3kg}개입니다`);

// 추가 문제
const TARGET_STRING = "AAABBBCCC";

let result = "";
let nowCharacter = "";
let nowCharacterCount = 0;

for (const char of TARGET_STRING) {
    console.log(char);
    if (!nowCharacter) {
        console.log(`Refresh ${char}`)
        nowCharacter = char;
        nowCharacterCount ++;
    } else {
        if (nowCharacter === char) {
            nowCharacterCount ++;
        }
        else {
            if (nowCharacterCount === 1) {
                result += `${nowCharacter}`;    
            }
            else {
                result += `${nowCharacterCount}${nowCharacter}`;
            }
            nowCharacter = char;
            nowCharacterCount = 1;
        }
    }
}
if (nowCharacterCount === 1) {
    result += `${nowCharacter}`;    
}
else {
    result += `${nowCharacterCount}${nowCharacter}`;
}

console.log(result);