console.log("The menu is:");
let menu={"1.pizza":200,"2.burger":300,"3.chicken Biryani":250,"4.apple juice":100,"5.idly":80,6:"Confirm Order"};
console.log(menu);
let totalPrice=0;
let choice=0;
do{
    choice=prompt("Enter the choice:");
    switch(choice){
        case 1:
            totalPrice+=menu["1.pizza"];
            break;
        case 2:
            totalPrice+=menu["2.burger"];
            break;
        case 3:
            totalPrice+=menu["3.chicken Biryani"];
            break;
        case 4:
            totalPrice+=menu["4.apple juice"];
            break;
        case 5:
            totalPrice+=menu["5.idly"];
            break;
            

    }
}while(choice!=6);
if(totalPrice>500){
    totalPrice=totalPrice*0.90;
}
console.log(totalPrice);



