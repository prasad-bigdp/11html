//import {a,sum} from './scritpt2.js' // named import
import * as obj from './scritpt2.js' // import alias
import display from './scritpt2.js'
console.log(obj.a)
console.log(obj.sum(5, 3))
// prasad()
class Student
{
    id; name; marks;
    constructor(a,b,c)
    {
        this.id = a;
        this.name = b;
        this.marks = c;
    }
    display ()
    {
        console.log(this.name,this.id,this.marks)
    }
}
class Topper extends Student
{
    rank;
}
let obj4 = new Topper();
console.log(obj4)

console.log(typeof Student, Student)
let obj2 = new Student(202,"prasad",95);
console.log(obj2)
let obj3 = new Student(203,"rupa",96)
console.log(obj3.name)


