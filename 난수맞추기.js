/* var n = window.prompt(" 1-50 중 생각나는 숫자를 입력하세요.");

if (n == "30") {
  document.write("짝짝짝 정답입니다!");
} else {
  if (n > 30) {
    window.prompt("정답이 아닙니다...." + n + "보다 더 작은 수를 입력하세요");
  } else {
    window.prompt("정답이 아닙니다...." + n + "보다 더 큰 수를 입력하세요");
  }
} */

/* var low = 0;
var high = 0;
var card = 0; //정답//

while (true) {
  var count = 0; //시도횟수//
  low = 0;
  high = 99;
  card = Math.floor(Math.random() * 100);
  alert("수를 결정하였습니다. 맞춰보세요.");

  while (true) {
    var n = 0;
    count++;
    alert(`${count}번째 시도입니다. `);
    window.prompt(`${low} - ${high} 사이 다시 맞춰보세요.`);
    n = window.prompt;
    if (n == card) {
      alert("정답입니다!!");
      break;
    } else {
      if (n > card && n < high) {
        window.prompt("틀렸습니다. 정답은 더 낮은 수 입니다.");
        n = high;
        count++;
      } else if (n < card && n > low) {
        window.prompt("틀렸습니다. 정답은 더 높은 수 입니다.");
        n = low;
        count++;
      } else if (n > high || n < low) {
        window.prompt("올바른 범위의 숫자가 아닙니다.");
        count++;
      }
    }
  }
}


let low = 0;
let high = 100;
let card = 0; //정답
let a = 0; // 입력
alert("난수 맞추기 게임을 시작합니다. 난수를 먼저 뽑겠습니다.")
let tryCount = 1; //시도횟수
card = Math.floor(Math.random() * 100); // 0-99까지 난수 생성
alert(`난수를 설정하였습니다. 지금부터 시작합니다.`)
while (true) {
  alert(`${tryCount}번째 시도입니다.`)
  alert(`범위는 ${low} - ${high} 입니다. 숫자를 입력하세요`)
  a = window.prompt()
  if (a == card) {
    alert(`축하합니다. 정답입니다.`)
    break;
  } else {
    if (a > card && a < high) {
      alert(`틀렸습니다. 정답은 더 낮은 수 입니다.`)
      high = a;
      tryCount++;
    } else if (a < card && a > low) {
      alert(`틀렸습니다. 정답은 더 높은 수 입니다.`)
      low = a;
      tryCount++;
    } else if (a > high || a < low) {
      alert(`잘못 입력하셨습니다. 다시 입력해주세요.`)
    }
  }
}
 */

/* var low = 0; //범위의 최소값
var high = 0; //범위의 최고값
var card = 0; //정답
//게임의 정답을 맞추기 위해서 무한루프를 돌고 있다.
while (true) {
  var count = 0; //사용자의 시도 횟수
  low = 0;
  high = 99;
  card = Math.floor(Math.random() * 100); //0~99까지의 난수를 발생
  alert("수를 결정하였습니다.맞춰 보세요.");
  //내부 루프의 경우는 정해진 난수를 맞출때까지 실행하는 것
  while (true) {
    var n = 0;
    alert(low + " - " + high); //값의 범위를 출력
    count++;
    alert("시도횟수 : " + count + "번째");
    n = prompt("숫자를 입력하세요!"); //사용자로부터 숫자를 입력받음
    n = parseInt(n);
    if (n > high || n < low) {
      alert("값의 범위를 벗어났어요.");
    } else {
      //정상적인 범위의 수가 입력된 경우
      if (n == card) {
        alert("정답입니다.짝짝짝!");
        break;
      } else if (n > card) {
        //입력된 값이 정답보다 높은 수라면...
        alert("정답은 더 낮은 수입니다.");
        high = n; //범위를 재지정을 하기 위해서 값을 대입을 하고 있다.
      } else {
        //입력된 값이 정답보다 낮은 수라면....
        alert("정답은 더 높은 수입니다.");
        low = n; //범위를 재지정을 하기 위해서 값을 대입을 하고 있다.
      }
    }
  }
  alert("시도횟수는 " + count + "입니다.");
  var con = confirm("다시 게임을 하시겠습니까?");
  //무한루프를 사용할 경우에는 반드시 빠져나갈 곳을 만들어 두어야 한다.
  if (con == false) {
    break;
  }
}

var n = 0; // 입력한 숫자
var low = 0;
var high = 99;
var card = Math.floor(Math.random() * 100); // 정답

alert("수를 결정하였습니다. 맞춰보세요");
var count = 1;

while (true) {
  n = window.prompt(`${count}번째 시도입니다. 
${low}-${high} 사이 숫자를 입력해 주세요`);

  if (n == card) {
    alert(`정답입니다!!`);
  } else if (n > card && n < high) {
    count++;
    alert(`정답은 더 작은 숫자입니다.`);
    high = n;
  } else if (n < card && n > low) {
    count++;
    low = n;
    alert(`정답은 더 큰 숫자입니다.`);
  } else {
    count++;
    alert(`범위의 숫자가 아닙니다.`);
  }
  alert("시도횟수는 " + count + "입니다.");
  var con = confirm("다시 게임을 하시겠습니까?");
  //무한루프를 사용할 경우에는 반드시 빠져나갈 곳을 만들어 두어야 한다.
  if (con == false) {
    break;
  }
} */

while (true) {
  var n = 0; // 입력한 숫자
  var low = 0;
  var high = 99;
  var card = Math.floor(Math.random() * 100); // 정답

  alert("수를 결정하였습니다. 맞춰보세요");
  var count = 1;

  while (true) {
    n = window.prompt(`${count}번째 시도입니다. 
${low}-${high} 사이 숫자를 입력해 주세요`);

    if (n == card) {
      alert(`정답입니다!!`);
      break;
    } else if (n > card && n < high) {
      count++;
      alert(`정답은 더 작은 숫자입니다.`);
      high = n;
    } else if (n < card && n > low) {
      count++;
      low = n;
      alert(`정답은 더 큰 숫자입니다.`);
    } else {
      count++;
      alert(`범위의 숫자가 아닙니다.`);
    }
  }
  alert("시도횟수는 " + count + "입니다.");
  var con = confirm("다시 게임을 하시겠습니까?");
  //무한루프를 사용할 경우에는 반드시 빠져나갈 곳을 만들어 두어야 한다.
  if (con == false) {
    break;
  }
}
