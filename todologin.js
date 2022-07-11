function submitClick(){
    var Password = document.getElementById('pass').value;
    var email = document.getElementById('input-email').value;
    

    // var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    // var result = regex.test(email);
    


    // if(email=='' && Password==''){
    //     alert ('Fields can not be empty')
    //     return false
    // }

    // if(!result){
    //     alert ('email is not correct')

    // }
    


    
    var data = {
        email: document.getElementById('input-email').value,
        Password: document.getElementById('pass').value,
        confirmation: document.getElementById('confirmation').value,

    };

    let users = JSON.parse(localStorage.getItem('users'));
    let obj = {}
    let loginStatus = false
    
    
    users.some(el =>  {
        if(el.email == data.email && el.password == data.Password){
            localStorage.setItem("authUser", JSON.stringify(el))
            loginStatus = true
            obj = el
        }
    })
        
    if(loginStatus){
        confirmation.innerHTML += `<p>Correct login<i class="fas fa-check-circle"></i></p>`
        console.log('Yes')
        window.location.assign("todolist.html")

    }
    else{
        confirmation.innerHTML +=""
        alert("You don't have an account with us")
    }

}

function showFace(p='password'){
 var show = document.getElementById('show')
 var hide = document.getElementById('hide') 
 var pass = document.getElementById('pass') 

 if(p== 'text'){
    pass.setAttribute('type', 'text') 
    show.classList.add('d-none')
    hide.classList.remove('d-none')

 }
 else{
    pass.setAttribute('type', 'password') 
    show.classList.remove('d-none')
    hide.classList.add('d-none')
 }
}