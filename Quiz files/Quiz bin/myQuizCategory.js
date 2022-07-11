let category = document.getElementById('category');
let status = document.getElementById('quizReport');
let tbody = document.getElementById('tbody');
// let totalCategory = document.getElementById('totalCategory')

// to Modal input
let status2 = document.getElementById('status2');
let category1 = document.getElementById('category1');

let updateder =""




function fetchdata(){
    let countActive = 0;
    let countInActive = 0;
    
    let quizData = JSON.parse(localStorage.getItem('data')); 
    // alert(JSON.stringify(quizData))
    if(quizData !== null){
        tbody.innerHTML="";
        var i = 1;
        quizData.forEach((element, a)=>{
            if(element.status == 'Active') countActive++
            if(element.status == 'Inactive') countInActive++
            count = Number(a+1)
            tbody.innerHTML += `

                <td>${ a+1}</td>
                <td>${ element.Category}</td>
                <td>${ element.status}</td>


                <td class="dropdown">
                    <i class="fas fa-th"></i>
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" onclick="toModal(${element.id})" data-target ="#exampleModal2" data-toggle="modal"  href="#">Edit</a>
                    <a class="dropdown-item" onclick="deleteItems(${a})" href="#">Delete</a>
                    
                    
                </td>
                
                 
            `;
        
            
        });
        document.getElementById('totalCategory').innerHTML=quizData.length
        document.getElementById('YES').innerHTML=countActive
        document.getElementById('NO').innerHTML=countInActive
    }
}
fetchdata()

function pushData(){
    duplicate = false;
    if( category.value=='' || status.value=='' ){
        return alert('please select any Item')
    }

    else{
        let storage = {
            id: Math.floor(Math.random() * 100000),
            Category: category.value,
            status: status.value,
            userType:'Admin'
        }
       
 
 
        let holder=[]
         if (localStorage.getItem("data") === null) {
             holder.push(storage)
             console.log(holder);
             
         } else {
             holder = JSON.parse(localStorage.getItem('data'))
    
             holder.forEach (data =>{
                 if(storage.Title == data.Title && storage.Category == data.Category) {
                     duplicate=true;
                 }   
             })
          
             if(duplicate) {
              alert("Duplicate entry detected")
             } else {
                 holder.push(storage)
             }
         }
         
         localStorage.setItem('data', JSON.stringify(holder));
     
    }
     fetchdata()
}

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
           let quizData = JSON.parse(localStorage.getItem('data')); 
            if(quizData){
               quizData.splice(ind,1);
               localStorage.setItem('data', JSON.stringify(quizData));
            }
           
            swal("Poof! Your imaginary file has been deleted!", {
             icon: "success",
            });
            fetchdata()
        
        }else {
           fetchdata()
            swal("Your imaginary file is safe!");
        }

    });
     
}

function toModal(indMod) {
    
    let obj='';
    updateder = indMod;

    let quizData = JSON.parse(localStorage.getItem('data'));
    
    for(let index = 0; index < quizData.length; index++) {
        if(indMod==quizData[index].id) {
            obj = quizData[index]
        }
    }
    category1.value = obj.Category;
    status2.value = obj.status

    // localStorage.setItem('ItemData', JSON.stringify(quizData))
    
};

function update(){

    let quizData = JSON.parse(localStorage.getItem('data')); 
    // console.log(quizData)

    if(category1.value =="" || status2.value =="") {
        
        
        return alert("Please select any item") 
    }
    else{
        for (let i =0; i < quizData.length; i++){
        //  console.log(quizData)

        
         
        
            if (quizData[i].id == updateder){
                quizData[i].Category= category1.value
                quizData[i].status= status2.value
                
    
                
            }
        }

        category1.value=''
        status2.value=''

    }
    localStorage.setItem('data', JSON.stringify(quizData))

    fetchdata()
    
}



