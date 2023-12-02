let qty = 0;
let newPrice = 0
function incrementHandler(){
   qty++;
   document.getElementById('cartValue').innerHTML = qty;
}

function decrementHandler(){
    if(qty>0){
     qty--;
     document.getElementById('cartValue').innerHTML = qty;
    }
}

