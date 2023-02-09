//1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라//

/* var x = 15;

if (10 < x < 20) {
  console.log(x);
} */

//2. 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.//

/* var i;

for (i = 0; i < 10; i++) {
  if (i % 2 === 1) continue;
  document.write(i + "<br>");
} */

//3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

/* var i;

for (i = 0; i < 10; i++) {
  if (i % 2 === 1) continue;
  document.write(i);
}

i = i.toString();
console.log(typeof i); */

//4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.//

/* var i;

for (i = 10; i > 0; i--) {
  if (i % 2 === 0) continue;
  document.write(i + "<br>");
} */

//5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

/* var i = 0;

while (i < 10) {
  if (i % 2 === 1) continue {
    document.write(i + "<br>");
  }
  i++;
} */

/* 
let a;
a = 0;
while (a < 10) {
  if (a % 2 === 0) {
    document.write(a);
  }
  a++;
}
 */

//6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

/* var i = 10;

while (i > 0) {
  if (i % 2 === 1) {
    document.write(i + "<br>");
  }
  i--;
}
 */
//7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.

/* var i;
var sum = 0;

for (i = 0; i < 10; i++) {
  sum += i;
}
document.write(sum); */

//8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

/* var i;
var sum = 0;

for (i = 1; i < 20; i++) {
  if (i % 2 === 0) continue;
  {
    if (i % 3 === 0) continue;
    {
      sum += i;
    }
  }
}
document.write(sum); */
//-----------------------------------//
/* var i;
var sum = 0;

for (i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) continue;

  {
    sum += i;
  }
}

document.write(sum);
 */
//9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

var i;
var sum = 0;

for (i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum += i;
  }
}
document.write(sum);
