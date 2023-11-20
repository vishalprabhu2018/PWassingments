/*
15. Calculate the percentage of the discount
A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
show customers how much they can save. Given the original price and the discounted price of a product,
implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
This function could be useful for the store's marketing team to create promotions and offers that attract
customers.
*/

// rs discount products 
// perctage ka discount to show them how much they can save
// original price //  discounted price 


let originalPrice=[20,30,40,50,89];
let discountedPrice=[18,24,23, 43,70];


function discountPercent(originalPrice,discountedPrice){
    // let difference=originalPrice-discountedPrice;
    // let discountPercent=(difference*100)/originalPrice

    
let arr=originalPrice.map((element,i)=>{
        let difference=element-discountedPrice[i];
       return element=(difference *100)/elemnt;
})
return arr;
}


console.log(discountPercent(originalPrice,discountedPrice))
// difference =originalPrice-discountPrice

// discountPercent=(difference*100)/originalPrice