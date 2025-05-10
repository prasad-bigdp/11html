const input = document.getElementById('inp');
const btn = document.getElementById('btn');
const output = document.getElementById('output')
//method1;
let num = input.value, rev = 0;
for (; num > 0; num /= 10)
{
    rev = rev*10 + num % 10;
}
//method 2
let num2 = input.value
let rev2 =  num2.toString().split('').reverse().join('')