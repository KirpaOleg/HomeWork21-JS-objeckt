
// 1
const person = {    
  name: 'Oleg', 
	surname: 'Kirpa',
  age: 30,
	country: 'Ukraine',
	city:'Kyiv',
	tel: '3248234444',
	mail: 'profix.ok@gmail.com',
	car: {
		model: 'Ford',
	},
	homeAnimal: {
		cat: 'non',
	},
};


// 2
const arrOfPersons = [
	{name: 'Alex' , age: 30},
	{name: 'Lera' , age: 30},
	{name: 'Maks' , age: 30},
	{name: 'Roma' , age: 30},
	{name: 'Vlad' , age: 30},
	{name: 'Boris' , age: 30},
];

console.log(arrOfPersons[3].name);
console.log(person.car.model);

let sumOfAge = 0;
// for (let i = 0; i < arrOfPersons.length; i++) {
// 	sumOfAge += arrOfPersons[i].age;
// }
// console.log(sumOfAge);	


// 3
arrOfPersons.forEach((item) => {
	sumOfAge += item.age;	
});

console.log(sumOfAge);	


// 4
const arrOfPersons1 = [
	{name: 'Alex' , age: 30},
	{name: 'Lera' , age: 30},
	{name: 'Maks' , age: 30},
	{name: 'Roma' , age: 30},
];

const arrOfPersons2 = [
	{name: 'Vlad' , age: 34},
	{name: 'Lera' , age: 32},
];

const sumOfAges = (array) => {
  let sumOfAge = 0;
  array.forEach((item) => {
    sumOfAge += item.age;
  });
  return sumOfAge;
};

const resultArr1 = sumOfAges(arrOfPersons1);
const resultArr2 = sumOfAges(arrOfPersons2);

console.log(resultArr1);
console.log(resultArr2);



// 5
const arrOfPersons3 = [
  {name: 'Alex', age: 30, family: [
    {name: 'Vova', age: 29}, 
    {name: 'Vova', age: 20},
    {name: 'Vova', age: 30},
  ]}, 
  {name: 'Lera', age: 22, family: [
    {name: 'Vova', age: 23}, 
    {name: 'Vova', age: 11},
  ]},
  {name: 'Maks', age: 24, family: [
    {name: 'Vova', age: 23}, 
    {name: 'Vova', age: 34},
    {name: 'Vova', age: 21},
  ]}, 
  {name: 'Roma', age: 28, family: [
    {name: 'Vova', age: 45}, 
    {name: 'Vova', age: 35},
    {name: 'Vova', age: 45},
    {name: 'Vova', age: 15},
  ]}, 
];

const familyAges = [
  {name: 'Alex', age: 30, familyAge: 2134},
  // ...
];

familyAges.push({name: 'Lera', age:  22, familyAge: 433})
console.log(familyAges);

arrOfPersons3.forEach((item) => {
	console.log(item);
		
});

// console.log(sumOfAge);	


const block = {
  heigth: 100,
  weight: 300,
  color: {
    bg: {
			pos: {
				text: 'red',
			},
		},
    text: 'red',
  },

  someProp: {
    top: 14,
    left: 10,
    right: 5,
    bottom: 10,
  },
  position: 'absolute',
};

// for (let key in block) {
//   if (typeof(block[key]) === 'object') {
//     for (let prop in block[key]) {
//       console.log(Свойство ${prop} со значением ${block[key][prop]});
//     }
//   }
// }

console.log(block.color.bg.pos.text);