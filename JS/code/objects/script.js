let obj = {
	name: "raj",
	age: 55,
	display: function () {
		console.log("hello world"+this.name)
	},
}
console.log(obj.name, obj['name'])
obj.display();
// object destructuring
// let name = obj.name
let { name, age } = obj;
//array destructuring
let arr = [5, 6];
let [a,b]=arr
console.log(name,age)