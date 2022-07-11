let itemsData = [
    {item: 'Bread', price: 500, Brand: 'Nigeria'},
    {item: 'Milo', price: 1500 , Brand: 'Italy'},
    {item: 'Apple', price: 600, Brand: 'U.S'},
    {item: 'Ekpa Apo meji', price: 400, Brand: 'Ghana'},
    {item: 'Egusi Oniru', price: 600, Brand: 'Russia'},
    {item: 'Eran Ogunfe', price: 1000, Brand: 'UK'},
];

let selectField = document.querySelector('#select');
let priceInput = document.getElementById('price');
let brand = document.getElementById('brand');
let option1 = document.getElementById('opt1');
let priceInput1 = document.getElementById('price1');
let brand1 = document.getElementById('brand1');
let total = document.getElementById('cal')
let table = document.getElementById('table')
let printItems=[];
let updateder =""


for (let i = itemsData.length -1; i >= 0; i--) {

    selectField.innerHTML +=`<option value="${itemsData[i].item}">${itemsData[i].item}</option>`;
    option1.innerHTML +=`<option value="${itemsData[i].item}">${itemsData[i].item}</option>`;
    
}

function getItemPrice(event){
   let price =""
   let brander =""

    for (let i = 0; i < itemsData.length; i++) {
      if(itemsData[i].item == event.target.value) {
        price=itemsData[i].price
        brander=itemsData[i].Brand

      }
    }
    priceInput.value = price
    brand.value = brander

    // console.log(price);  
    
}


function myList() {
    let duplicateStatus=false
   if(selectField.value == "" || priceInput.value =="") {
      return alert("Please select any item") 
   } 

   for (let i = 0; i < printItems.length; i++) {
       if(selectField.value == printItems[i].item){
        duplicateStatus=true;
       }     
    }

   if(duplicateStatus) {
    alert("Duplicate entry detected")
   } 
   else {
       printItems.push({
            item: selectField.value,
            price: priceInput.value,
            Brand: brand.value,
            quantity:Number(1)
        })




        // console.log(printItems);
        let storage = {
            id: Math.floor(Math.random() * 100000),
            item: selectField.value,
            price: priceInput.value,
            Brand: brand.value,
            quantity:Number(1)
        }
        
        if (localStorage.getItem("cartsData") === null) {
            holder =[]
            
        } else {
            holder = JSON.parse(localStorage.getItem('cartsData'))
        }
        holder.push(storage)
        localStorage.setItem('cartsData', JSON.stringify(holder));

        
    }
    fetchdata()


    
    
}
fetchdata()

function fetchdata(){
    table.innerHTML=""
    let totalvalue=0
    let cartData = JSON.parse(localStorage.getItem('cartsData')); 
    // alert(JSON.stringify(cartData))
    for(i=0; i<cartData.length; i++){
        table.innerHTML += `
            <td style="padding-left: 0px;">${i+1}</td>
            <td style="padding-left: 20px;">${ cartData[i].item}</td>
            <td style="padding-left: 50px;">${ cartData[i].price}</td>
            <td style="padding-left: 50px;">${ cartData[i].Brand}</td>

            <td style="padding-left: 15px;">

                <button><i class="fas fa-minus" onclick="decrement(${i})"></i></button>
                    <span id="plus" >${cartData[i].quantity}</span>
                <button><i class="fas fa-plus" onclick="increment(${i})"></i></button>
           
                
            </td>

            <td style="padding-left: 50px;">
                <span><i class="fas fa-trash" onclick="deleteItems(${i})">d</i></span>
                <i class="fas fa-pen" arial-hidden ="true" onclick="toModal(${cartData[i].id})" data-toggle="modal"  data-target="#exampleModal"></i>

            </td>
    
        `;
     totalvalue += parseInt(cartData[i].price);
   
     
        
    };
    // console.log(total);

    total.value=totalvalue
      localStorage.setItem('total', JSON.stringify(totalvalue))

}
// fetchdata()


function deleteItems (ind) {

    
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
        let cartData = JSON.parse(localStorage.getItem('cartsData')); 
        if(cartData){
            cartData.splice(ind,1);
             localStorage.setItem('cartsData', JSON.stringify(cartData));

        }

        swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
        });
        
        fetchdata()
        }
        else {
        fetchdata()
        swal("Your imaginary file is safe!");

        }

    });
     
}

function toModal(indMod) {
    let cartData = JSON.parse(localStorage.getItem('cartsData')); 

    updateder = indMod
    let obj={}
    for(let index = 0; index < cartData.length; index++) {
        if(indMod==cartData[index].id) {
            obj = cartData[index]
        }
    }
    option1.value = obj.item;
    priceInput1.value = obj.price;
    brand1.value = obj.Brand


    localStorage.setItem('itemData', JSON.stringify(cartData))

}



function getItemPrice2 (event){
    let price2 =""
    let brand2 =""
    for (let i = 0; i < itemsData.length; i++) {
      if(itemsData[i].item == event.target.value) {
        price2=itemsData[i].price
        brand2=itemsData[i].Brand

      }
    }
    priceInput1.value = price2
    brand1.value = brand2

}

function update(){
    let cartData = JSON.parse(localStorage.getItem('cartsData')); 
    // console.log(cartData)

    if(option1.value == "" || priceInput1.value =="") {
        
        
        return alert("Please select any item") 
    }
    else{
        for (let i =0; i < cartData.length; i++){
        //  console.log(cartData)

        
         
        
            if (cartData[i].id==updateder){
                // console.log(cartData[i]);
                cartData[i].item = option1.value
                cartData[i].price= priceInput1.value
                cartData[i].Brand= brand1.value
                
    
                
            }
        }
    }
    localStorage.setItem('cartsData', JSON.stringify(cartData))

    fetchdata()
    
}



function increment(ind){
    let cartData = JSON.parse(localStorage.getItem('cartsData')); 


    for (let i = 0; i < cartData.length; i++) {
        if(ind == i) {
            cartData[i].quantity++
            let actualPrice = itemsData.find(el => el.item == cartData[i].item).price
            // console.log(actualPrice);
            cartData[i].price =Number(cartData[i].price) + Number(actualPrice)
            
        } 
        localStorage.setItem('cartsData', JSON.stringify(cartData))

        fetchdata()
    }
    

      
};


function decrement(ind){ 

    let cartData = JSON.parse(localStorage.getItem('cartsData')); 

    
    for (let i = 0; i < cartData.length; i++) {

        if(ind == i && cartData[i].quantity > 1) {

            cartData[i].quantity--
            let actualPrice = itemsData.find(el => el.item == cartData[i].item).price
            // console.log(actualPrice);
            cartData[i].price =Number(cartData[i].price) - Number(actualPrice)
            

        }

        // else if(ind< 1){
        //     alert('i am not')
        // }
            localStorage.setItem('cartsData', JSON.stringify(cartData))

        fetchdata()
        
    } 


};





let displayName = document.getElementById('displayName');
let auth = JSON.parse(localStorage.getItem('authUser'));
console.log(auth);
if(auth){
    displayName.innerHTML = 'Welcome' + ' ' + auth.name
    console.log(auth.name)
} 
else{
    window.location.assign ('todoRefSignup.html')
}





