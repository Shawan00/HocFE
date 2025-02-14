// default params
function sum (a = 0, b = 0) { 
    return a + b;
}
console.log(sum()); // nếu không truyền tham số thì mặc định bằng 0
console.log(sum(10));


// spread syntax
// ... + tên mảng sẽ cho ra kết quả là tất cả phần tử trong mảng
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [...arr1, 'abc', -12];

console.log(...arr1);
console.log(...arr2);
console.log(arr3);

var info1 = {
    name: "anquocviet",
    email: "viet@gmail.com"
}
var info2 = {
    phone: "012345",
    age: 22
}
var infoUser = { //ghép 2 đối tượng thành 1
    ...info1, ...info2
}
console.log(infoUser);