

let item=[{item:1,price$:20}, {item:2,price$:30 }, {item:3,price$:10}];

let op=item.map((item)=>{
return{ item:(item.item),priceRs:(item.price$*80)}

})

console.log(op);




//convert's from array to object
// const object= Object.assign({}, op)
// console.log(object);
