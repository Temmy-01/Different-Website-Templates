function submitClick(){
    var firstName = document.getElementById('input1').value;
    var lastName = document.getElementById('input2').value;
    var Email = document.getElementById('userEmail').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var phoneNumber = document.getElementById('mobilePhone').value;
    var report = document.getElementById('report');
    var report1 = document.getElementById('report1');
    var report2 = document.getElementById('report2');
    var report3 = document.getElementById('report3');
    var report4 = document.getElementById('report4');

    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    var result = regex.test(Email);

    var pass = /(?=.*[!#$%&?^*@~() "])(?=.{8,})/
    var result2 = pass.test(password1)
    // var result3 = pass.test(password2)



    if(firstName==''){
        alert ('input can not be empty')
        return false
    }
    else {
        report.innerHTML = ''
        
    }

    if(lastName==''){
        report1.innerHTML = 'Please kindly fill the empty input'
        return false

    }else {
        report1.innerHTML = ''
        
    }

    if(Email==''){
        report2.innerHTML = 'Please kindly fill the Email field'
        return false 
    }else {
        report2.innerHTML = ''
        
    }

    if(!result){
        report2.innerHTML = 'The email is not correct'
        
    } else {
        report2.innerHTML = ''
        
    }


    if(phoneNumber==''){
        report3.innerHTML = 'Please kindly fill the Phone Number field'
        return false 
    }else {
        report3.innerHTML = ''
        
    }

    if(isNaN(phoneNumber)){
        report3.innerHTML = 'Phone number must be digit only'
        return false 
    }else {
        report3.innerHTML = ''
        
    }

    if(phoneNumber.length != 11){
        report3.innerHTML = 'Phone number must be 11  d*igit only'
        return false 
    }else {
        report3.innerHTML = ''
        
    }

    
    if(password1==''){
        report4.innerHTML = 'Please kindly fill the Password field'
        return false 
    } else {
        report4.innerHTML = ''
        
    }
    

    if(!result2){
        report4.innerHTML = 'password not complete'
        return false 

    }
    if (password1!=password2) {
        report4.innerHTML = 'password not match'
        return false 
    }
    





    else {
        let obj = {
            id: Math.floor(Math.random() * 100000),
            name: document.getElementById('input1').value,
            email: document.getElementById('userEmail').value,
            password: document.getElementById('password1').value,
            userType: 'Admin'
        
        }
    
        let arr =[];
        if(localStorage.getItem('users')==null){
            arr.push(obj)
        }
        else{
          arr = JSON.parse(localStorage.getItem('users'))
          if(arr.some(el => el.email == obj.email))
          {
            return alert('email already exit')
          }
          arr.push(obj)
          
        }
        
        localStorage.setItem('users', JSON.stringify(arr))
        window.location.assign("QuizLogin.html");
        
    }
   
    // Local storage computations
    
}


function showFace(p = 'password'){
    var show = document.getElementById('show')
    var hide = document.getElementById('hide')
    var input = document.getElementById("password1");

    if(p == 'text'){
       input.setAttribute('type', 'text') 
       show.classList.add('d-none')
       hide.classList.remove('d-none') 
    }
    else{
        input.setAttribute('type', 'password')
        show.classList.remove('d-none')
        hide.classList.add('d-none')
        
    }
}


function showFace2(cp = 'password'){
    var showCp = document.getElementById('showCp')
    var hideCp = document.getElementById('hideCp')
    var input2 = document.getElementById('password2');

    if (cp == 'text'){
        input2.setAttribute('type', 'text')
        showCp.classList.add('d-none')
        hideCp.classList.remove('d-none')
    }
    else{
        input2.setAttribute('type', 'password')
        showCp.classList.remove('d-none')
        hideCp.classList.add('d-none')
    }
}



