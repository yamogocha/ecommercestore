// var pokemonArray=['pikachu', 'squirtle', 'charmander']
//  // console.log(pokemonArray[0].length)
//  // console.log(pokemonArray.reverse())
//  // console.log(pokemonArray[0].split('').reverse().join(''))
//  console.log(pokemonArray.sort())

// var numArray=[13, 90, 135]

// console.log(numArray.sort())

// //  console.log(pokemonArray[1]+' is '+pokemonArray[1].length+' characters')

// //  for(var i=0; i<pokemonArray.length; i++){
// //  	console.log(pokemonArray[i]+' is '+pokemonArray[i].length+" characters")
// //  }

// // var str="string"
// // console.log(str.length)

// // var bool=false
// // console.log(bool.length)

// // var num=43434
// // console.log(num.length)

// // var obj={
// // 	make:"toyota",
// // 	year: 2013,
// // 	driver: "Angel"
// // }
// // console.log(obj.length)

// var array =["cat", "dog", "hamster", "bird", "rabbit"]

// console.log(array.reverse())

// var array =[34, 8, 20, 100, 83]

// console.log(array.sort())

// var array=["cat", "dog", "hamster", "bird", "rabbit"]

// console.log(array.sort())
// array.push("snake")

// console.log(array)

// array.pop()

// console.log(array)

// array.unshift("Tiger")

// console.log(array)

// array.shift()

// console.log(array)

// var animals=[
// 	{
// 		animal:"cat",
// 		color:"black",
// 		weight:"12Ib"
// 	},
// 	{
// 		animal:"bird",
// 		color:"green",
// 		weight:"4Ib"
// 	},
// 	{
// 		animal:"dog",
// 		color:"brown",
// 		weight:"9Ib"
// 	}
// ]

// // animals.unshift({animal:"rabbit", color:"cream", weight:"6Ib"})

// // console.log(animals)

// animals.shift()

// console.log(animals)

// var Andy={
// 	name:"Andy's",
// 	seats:15,
// 	food:"dim sum",
// 	booked:10,
// 	seatLeft:function(){
// 		return(this.seats-this.booked)
// 	}
// }	

// var brickhouse={
// 	name:"brickhouse",
// 	seats:25,
// 	food:"burgers",
// 	booked:10,
// 	seatLeft:function(){
// 		return(this.seats-this.booked)
// 	}
// }

// var skool={
// 	name:"skool",
// 	seats:20,
// 	food:"japaness fusion",
// 	booked:10,
// 	seatLeft:function(){
// 		return(this.seats-this.booked)
// 	}
// }
// console.log(brickhouse.seatLeft())

// function Restaurant(name, seats, food, booked){
// 	this.name=name
// 	this.seats=seats
// 	this.food=food
// 	this.booked=booked
// 	this.seatLeft= function(){
// 		return(this.seats-this.booked)
// 	}
// }

// var andy=new Restaurant("Andy's", 15, "dim sum", 10)
// var brickhouse=new Restaurant("Brickhouse", 25, "burgers", 10)
// var skool=new Restaurant("Skool", 20, "japaness fusion", 10)

// console.log(brickhouse)
// console.log(brickhouse.name)
// console.log(brickhouse.seats)
// console.log(brickhouse.food)
// console.log(brickhouse.seatLeft())


// function Transportation(name, cost, seats){
// 	this.name=name
// 	this.cost=cost
// 	this.seats=seats
// }

// var bart=new Transportation('Bart', 5.80, 120)

// var muni=new Transportation('Muni', 2.25, 50)

// var trolley=new Transportation('Trolley', 7, 25)

// console.log(bart)
// console.log(bart.name)
// console.log(bart.cost)
// console.log(bart.seats)



function Jacket(image, name, cost, color, size){
	this.image=image
	this.name=name
	this.cost=cost
	this.color=color
	this.size=size
}

var Jackets=[

	new Jacket('img/denim.jpg', 'Denim', 150, 'Blue', 'S, M, L'),

	new Jacket('img/denim.jpg', 'Denim', 150, 'White', 'S, M'),

	new Jacket('img/leather.jpg', 'Leather', 320, 'Black', 'S, M, L'),

	new Jacket('img/leather.jpg', 'Leather', 320, 'Brown', 'M, L'),

	new Jacket('img/parka.jpg', 'Parka', 90, 'Black', 'S, L'),

	new Jacket('img/parka.jpg', 'Parka', 90, 'Green', 'S, M, L'),

	new Jacket('img/rain.jpg', 'Rain', 120, 'Navy', 'S, L')
]

for(i=0; i<Jackets.length; i++){
	var tContainer=document.createElement('div')
	tContainer.className='col-sm-4 padding'
	document.getElementById('shirt').appendChild(tContainer)

	var tImage=document.createElement('img')
	// tImage.className='img-responsive'
	tImage.src=Jackets[i].image
	tImage.height='300'
	tImage.style.borderRadius='20px'
	tContainer.appendChild(tImage)

	var tName=document.createElement('h1')
	var nameTxt=document.createTextNode(Jackets[i].name)
	tName.appendChild(nameTxt)
	tContainer.appendChild(tName)

	var tCost=document.createElement('h4')
	var costTxt=document.createTextNode('$ '+Jackets[i].cost)
	tCost.appendChild(costTxt)
	tContainer.appendChild(tCost)

	var tColor=document.createElement('h4')
	var colorTxt=document.createTextNode('Color: '+Jackets[i].color)
	tColor.appendChild(colorTxt)
	tContainer.appendChild(tColor)

	var tSize=document.createElement('h4')
	var sizeTxt=document.createTextNode('Size: '+Jackets[i].size)
	tSize.appendChild(sizeTxt)
	tContainer.appendChild(tSize)

	var tButton=document.createElement('button')
	tButton.className="btn btn-primary btn-lg"
	tButton.innerHTML='Buy Now'
	tContainer.appendChild(tButton)
}



