/* //사용자로부터 입력받는 부분
var value = window.prompt("행운의 번호를 고르세요.");

//값 비교
if (value == "1") {
  document.write("당첨! 머그컵");
} else if (value == "2") {
  document.write("당첨! 비스포크 냉장고");
} else if (value == "3") {
  document.write("당첨! 3D 펜");
} else {
  document.write("꽝!!!!!");
}

//사용자로부터 입력받는 부분
var userID = window.prompt("아이디를 입력하세요.");
var userPW = window.prompt("패스워드를 입력하세요.");
//값 비교
if (userID == "KB" && userPW == "0209") {
  //연산자 우선순위 == 는 동등, && AND
  alert(userID + "님이 로그인 하셨습니다.");
} else if (userID == "KB") {
  alert("패스워드가 잘못 입력되었습니다.");
} else {
  alert("아이디가 잘못 입력되었습니다.");
}
*/
/* 
var userID = window.prompt("아이디를 입력하세요.");
if (userID == "KB") {  
    var userPW = window.prompt("패스워드를 입력하세요.");
  if (userPW == "0209") {    alert(`${userID} 님이 로그인하셨습니다`);  } 
  else {    alert("패스워드가 잘못 입력되었습니다");  }
} 

else {  alert("아이디가 잘못 입력되었습니다");} */

var ID = window.prompt("아이디");
if (ID == "KB") {
  var PW = window.prompt("비밀번호");
  if (PW == "0209") {
    alert(ID + "님이 로그인에 성공하였습니다.");
  } else {
    alert("비밀번호가 틀렸습니다.");
  }
} else {
  alert("아이디가 틀렸습니다.");
}
