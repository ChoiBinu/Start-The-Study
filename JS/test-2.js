const NUMBER = 21;
let totalnumber = 0;
    for(;;){
        let insertnumber = prompt("Number", "숫자를 입력해주세요") * 1;
        totalnumber+=insertnumber;
        if(totalnumber === NUMBER){
            alert("GAME WIN");
            break;
        } else if (totalnumber > NUMBER) {
            alert("GAME LOSE");
            break;
        }
    }   
    