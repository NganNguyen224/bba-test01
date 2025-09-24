# JavaScript
## Phạm vi của biến
Phạm vi (scope) xác định nơi mà biến có thể truy cập

**1. Toàn cục (global)**: Biến được khai báo bên ngoài tất cả các hàm và khối lệnh
```javascript
    let globalLet = "Tôi cũng là biến toàn cục";
    function testFunction() {
    console.log(globalLet); // Truy cập được
    }
```
**2. Function scope (hàm)**: Biến được khai báo bên trong hàm
```javascript
    function myFunction() {
    let FunctionScoped = "Chỉ có thể truy cập trong hàm này";
    console.log(functionScoped); // OK
    }
    console.log(functionScoped); // Error: functionScoped is not defined
```
**3. Block scope (khối)**: Biến được khai báo bên trong khối {}
```javascript
if (true) {
var varVariable = "var không có block scope";
let letVariable = "let có block scope";
const constVariable = "const cũng có block scope";
}
console.log(varVariable); // OK - var không bị giới hạn bởi block
console.log(letVariable); // Error: letVariable is not defined
console.log(constVariable); // Error: constVariable is not defined
```

**Hoisting**:
JavaScript di chuyển các khai báo biến **lên đầu** phạm vi của chúng trước khi thực thi code.
```javascript
console.log(x); // undefined (không phải error)
var x = 5;
// Tương đương với:
var x;
console.log(x); // undefined
x = 5;
// Với let và const:
console.log(y); // Error: Cannot access 'y' before initialization
let y = 5;
```
- Do vậy, không nên dùng **var** để khai báo biến.

## Câu điều kiện nâng cao
### break

**Mục đích**: thoát hoàn toàn khỏi vòng lặp ngay lập tức
```javascript
// Thoát khi tìm thấy giá trị
for (let i = 0; i < 5; i++) {
if (i === 2) {
break; // Thoát vòng lặp khi i = 2
}
console.log(i);
}
// Output: 0, 1
```
### continue

**Mục đích**: dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo.
```javascript
// Bỏ qua số lẻ
for (let i = 0; i < 10; i++) {
if (i % 2 === 1) {
continue; // Bỏ qua số lẻ
}
console.log(i);
}
// Output: 0, 2, 4, 6, 8
```
### Câu điều kiện if...else

**Mục đích**: dùng để thực thi code khác nhau cho trường hợp *true* và *false* (chỉ có 2 trường hợp đúng hoặc sai)
```javascript
let score = 80;

if (score >= 50) {
console.log("Bạn đã qua môn");
} else {
console.log("Bạn cần học lại");
}
// Output: Bạn đã qua môn
```
### Câu điều kiện if...else...if
**Mục đích**: dùng để kiểm tra nhiều điều kiện theo thứ tự
```javascript
let score = 70;

if (score >= 90) {
console.log("Xuất sắc");
} else if (score >= 80) {
console.log("Giỏi");
} else if (score >= 70) {
console.log("Khá");
} else if (score >= 60) {
console.log("Trung bình");
} else {
console.log("Yếu");
}
// Output: Khá
```

### Toán tử điều kiện (Ternary operator)
**Mục đích**: cách viết ngắn gọn cho if...else đơn giản
```javascript
let age = 30;
let status = (age >= 65) ? "Nghỉ hưu" : "Lao động";
console.log(status);
// Output: Lao động
```
Không nên dùng phương pháp này khi có quá nhiều điều kiện dễ bị nhầm lẫn mặc dù cách viết ngắn gọn.
## Vòng lặp nâng cao
### for..in 
**Mục đích**: Dùng để duyệt qua các thuộc tính(properties) có thể đếm được của một object, bao gồm cả thuộc tính kế thừa.
#### Với Object
```javascript
const person = {
    name: "Anna",
    age: 39,
    city: "UK"
};
for (let property in person) {
    console.log(`Property: ${property}`);
    console.log(`Property value: ${person[property]}`);
}
// Output: 
// Property: name
// Property value: Anna
// Property: age
// Property value: 39
// Property: city
// Property value: UK
```
#### Với Array
```javascript
const arr2 = ["Anna", "Alice", "Mike"];
for (let i in arr2) {
    console.log(i + ": " + arr2[i]);
}
// Output: 
// 0: Anna
// 1: Alice
// 2: Mike
```
### for...of
```javascript
const arr = [30, 50, 60, 70, 80];
for (let number of arr) {
    if (number > 35) {
        console.log(number);
    }
}
// Output: 50, 60, 70, 80
```
### forEach
**Mục đích**: Method của Array để thực thi một function cho mỗi phần tử. Không thể dùng break hoặc continue.
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(value) {
console.log(value);
});
// Output: 1, 2, 3, 4, 5
```
## Utils function
### String utils
- `trim()`: cắt khoảng trắng hai đầu
- `trimLeft()`: cắt khoảng trắng bên trái
- `trimRight()`: cắt khoảng trắng bên phải
- `toLowerCase()`: chuyển chuỗi thành chữ thường
- `toUpperCase()`: chuyển chuỗi thành chữ hoa
- `replace(<chuỗi cần thay>, <chuỗi mới>)`: thay chuỗi có sẵn thành chuỗi mới
```javascript
let className = "  K18 Playwright ";
console.log(className.trim());
console.log(className.toLowerCase());
console.log(className.toUpperCase());
console.log(className.includes("K18"));
console.log(className.replace("Playwright", "Selenium"));

// Output:
// K18 Playwright
//  k18 playwright 
//  K18 PLAYWRIGHT
// true
//   K18 Selenium
```
- `includes(<substr>)`: kiểm tra chuỗi bao gồm chuỗi con <substr> không
- `split(<tách_bởi_gì>)`: tách chuỗi bởi 1 kí tự bất kì trong chuỗi
- `substring(<điểm_bắt_đầu>, <điểm_kết_thúc>)`: lấy 1 chuỗi con từ điểm bắt đầu tới điểm kết thúc
- `indexOf(<chuỗi kí tự>)`: tìm vị trí của chuỗi con
```javascript
let className1 = "  K18 Playwright, K17 Playwight, K18 Playwight ";
console.log(className1.includes("HW"));
console.log(className1.split("P"));
console.log(className.indexOf("wright"));
console.log(className.substring(2, 9));

// Output:
// false
// [ '  K18 ', 'laywright, K17 ', 'laywight, K18 ', 'laywight ' ]
// 9
// 18 Play
```

### Array utils
- `map((biến của mảng đã khai báo) => (công thức tạo mảng mới))`: Tạo mảng mới bằng cách áp dụng một hàm lên
từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài

```javascript
const numbers = [1, 2, 3, 4, 5];
const tripled = numbers.map(num => num * 3);
console.log(tripled); // [3, 6, 9, 12, 15]
console.log(numbers); // [1, 2, 3, 4, 5] - mảng
gốc không thay đổi
```
```javascript
const students = ['Hoa', 'Lan', 'Mai'];
const studentList = students.map((name, index) =>
({
id: index + 1,
name: name,
code: `SV${index + 1}`
}));

console.log(studentList);
// [
// { id: 1, name: 'Hoa', code: 'SV1' },
// { id: 2, name: 'Lan', code: 'SV2' },
// { id: 3, name: 'Mai', code: 'SV3' }
// ]
```
- `filer(<biến cần lọc> => <điều kiện lọc>)`: Tạo mảng mới chỉ chứa các phần tử thỏa
mãn điều kiện trong hàm callback. Trả về mảng đã được lọc
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2
=== 0);

console.log(evenNumbers); // [2, 4]
console.log(numbers); // [1, 2, 3, 4, 5] - mảng gốc không đổi
```
-`reduce()`: Duyệt qua mảng và tích lũy các phần tử
thành một giá trị duy nhất (số, chuỗi, object...) dựa
trên hàm callback
```javascript
const numbers = [1, 2, 3, 4, 5];

// Summing all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Finding the maximum value in the array
const max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
console.log(max); // Output: 5
```
- `some()`: Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện hay không. Trả về
true/false.
```javascript
const numbers = [1, 3, 5, 6, 7, 8, 9];
// Kiểm tra có số chẵn không?
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (vì có số 6 và số 8)
// Kiểm tra có số > 10 không?
const hasGreaterThan10 = numbers.some(num => num > 10);
console.log(hasGreaterThan10); // false
// Dừng ngay khi tìm thấy
const hasEvenWithLog = numbers.some(num => {
console.log(`Checking: ${num}`);
return num % 2 === 0;
});
// Checking: 1
// Checking: 3
// Checking: 5
// Checking: 6
// => Dừng, không kiểm tra 7
```
- `every()`: Kiểm tra xem tất cả phần tử trong mảng có thỏa mãn điều kiện hay không. Trả về true/false.
```javascript
const numbers = [2, 4, 6, 8, 10];
// Kiểm tra tất cả là số chẵn?
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true
// Kiểm tra tất cả > 0?
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true
// Kiểm tra tất cả > 5?
const allGreaterThan5 = numbers.every(num => num > 5);
console.log(allGreaterThan5); // false (2 và 4 không > 5)
// Dừng ngay khi gặp false
const checkWithLog = numbers.every(num => {
console.log(`Checking: ${num}`);
return num < 5;
});
// Checking: 2
// Checking: 4
// Checking: 6
// => Dừng tại 6, không kiểm tra 8, 10
console.log(checkWithLog); // false
```
-`sort()`: Sắp xếp các phần tử trong mảng theo thứ tự
(mặc định là alphabet/tăng dần). Thay đổi mảng gốc.
```javascript
// Sort chuỗi
const fruits = ['banana', 'apple', 'orange',
'grape'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'grape', 'orange']

// Dùng compare function -> Tăng dần
const numbers2 = [10, 5, 40, 25, 1000, 1];
numbers2.sort((a, b) => a - b); // tăng dần
console.log(numbers2); // [1, 5, 10, 25, 40,1000]

// Dùng compare function -> Giảm dần
const numbers3 = [10, 5, 40, 25, 1000, 1];
numbers3.sort((a, b) => b - a);
console.log(numbers3); // [1000, 40, 25, 10, 5, 1]
```
- `push()`: Thêm một hoặc nhiều phần tử vào cuối mảng. Thay đổi mảng gốc và trả về độ dài mới.
```javascript
const fruits = ['apple', 'banana'];
const newLength = fruits.push('orange');

console.log(fruits); // ['apple', 'banana', 'orange']
console.log(newLength); // 3 (độ dài mới)

// Push nhiều phần tử cùng lúc
fruits.push('grape', 'mango');
console.log(fruits); // ['apple', 'banana','orange', 'grape', 'mango']
```
- `pop()`: Xóa và trả về phần tử cuối cùng của mảng. Thay đổi mảng gốc và làm giảm độ dài.
```javascript
const fruits = ['apple', 'banana', 'orange', 'grape'];
const lastFruit = fruits.pop();

console.log(lastFruit); // 'grape' - phần tử bị xóa
console.log(fruits); // ['apple', 'banana', 'orange']
- mảng đã thay đổi

// Pop từ mảng rỗng
const empty = [];
const result = empty.pop();
console.log(result); // undefined
console.log(empty); // []
```
- `shift()`: Xóa và trả về phần tử đầu tiên của mảng. Thay đổi mảng gốc và làm giảm độ dài.
```javascript
const fruits = ['apple', 'banana', 'orange',
'grape'];
const firstFruit = fruits.shift();

console.log(firstFruit); // 'apple' - phần tử bị
xóa
console.log(fruits); // ['banana', 'orange', 'grape'] - mảng đã thay đổi

// Shift từ mảng rỗng
const empty = [];
const result = empty.shift();
console.log(result); // undefined
console.log(empty); // []
```
- `unshift()`: Thêm một hoặc nhiều phần tử vào đầu mảng. Thay đổi mảng gốc và trả về độ dài mới của mảng.
```javascript
const fruits = ['banana', 'orange'];
const newLength = fruits.unshift('apple');

console.log(fruits); // ['apple', 'banana', 'orange']
console.log(newLength); // 3 (độ dài mới)

// Unshift nhiều phần tử cùng lúc
fruits.unshift('grape', 'mango');
console.log(fruits); // ['grape', 'mango', 'apple', 'banana', 'orange']
```