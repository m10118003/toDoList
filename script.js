alert("複習 JS");

let age = 25;
age = 26;

console.log(age);

const pi = 3.14159;
// pi = 3.14; 常數被指定就不能修改
console.log(pi);

// 資料類型, 字串
let 城市 = "台中市";
let 街道 = "南屯 Costco";
let 地址 = 城市 + 街道;
console.log(`哈哈哈 ${地址}`);

let sentence = `我今天在 ${地址}`;
console.log(sentence.length);
console.log(sentence.replace("今天", "明天"));
console.log(sentence.slice(2, 5));

// 資料類型, 數字
let totalAmount = 10;
let productAmount = 20;
let average = totalAmount / productAmount;
console.log(average.toFixed(2));

average = Math.round(totalAmount / productAmount);
console.log(average);

// 資料類型, Boolean, 條件判斷, logical operators
let score = 80;
let pass = 60;
let passOrNot = score >= 60;
let attendanceRate = 0.87;
console.log(score == pass); // 僅比值
console.log(score === pass); // 先比值再比類型

if (score >= 100) {
  console.log("讚喔");
} else if (score >= pass) {
  console.log("恭喜及格~");
} else {
  console.log("再接再厲~");
}

if (score >= pass && attendanceRate >=0.8) {
  console.log("恭喜通過課程");
} else if (score >= pass) {
  console.log("恭喜你及格囉~");
} else {
  console.log("重修當學弟~");
}

// string, number, boolean 每次只能儲存一個值
// 因此 array 就能儲存多個值

let testScores = [80, 90, 100];
console.log("考試成績: ", testScores);
// console.log("抓出最後一位的成績 ", testScores.pop()); // 小心使用, 會移除值
console.log("抓出某分數位置 ", testScores.indexOf(80));
let count = testScores.push(60);
console.log("考試成績多一筆: ", count, testScores);
console.log("用 length 判斷考試成績筆數: ", testScores.length);
console.log("抓出某分數位置 ", testScores.indexOf(60))
console.log("抓出最後一位的成績 ", testScores.pop()); // 小心使用, 會移除值
console.log("有 pop 的話會移除最後的值 ", testScores); // 值被移除

// 迴圈
let anotherTestScores = [60, 80, 90, 100];
for (let i = 0; i < 4; i++) {
  console.log(`第 ${i + 1} 位的人, 成績為 ${anotherTestScores[i]}`);
}

// 函式定義後不會立即執行
function add(a, b) {
  return a + b;
}

// 會 ILFE, 限制作用域
(function invoke_now () {
console.log("Hello world, ILFE!")})()

// 箭頭函式, 傳參數
// 這樣是個 program
let hi =(name) => {
  console.log(`${name} Hi!`);
  return "Hi";
}

hi("鎮宇"); // 呼叫才會是個 process