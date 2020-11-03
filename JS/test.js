const PASSWORD = "SMC20122";
const ID = "alsdn9396";
let USERNAME = prompt("ID", "아이디를 입력해주세요")
let PW = prompt("PASSWORD", "비밀번호를 입력해주세요");
if(PW === PASSWORD && USERNAME === ID) {
    alert("축하합니다 로그인 되었습니다");
} else if (PW!==PASSWORD){
    alert("죄송합니다 비밀번호가 틀려 로그인이 취소되었습니다");
} else if(USERNAME !== ID){
    alert("죄송합니다 아이디가 틀려 로그인이 취소되었습니다.");
} else if(PW!==PASSWORD && USERNAME !== ID) {
    alert("두개 틀려서 로그인이 취소되었습니다.");
}
