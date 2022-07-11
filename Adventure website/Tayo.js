function temmy(){
    var firstName = document.getElementById('input1').value;
    var lastName = document.getElementById('input2').value;
    var Email = document.getElementById('input3').value;
    var phoneNumber = document.getElementById('input4').value;
    var report = document.getElementById('report');
    var report1 = document.getElementById('report1');
    var report2 = document.getElementById('report2');
    var report3 = document.getElementById('report3');
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    var result = regex.test(Email);
    


    if(firstName==''){
        report.innerHTML = 'input can not be empty'
        return false

    }else {
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
    // if(Email.indexOf('@') <=0 ){
    //     report2.innerHTML = '** @ Invalid position'
    //     return false
    // }

    // if((Email.charAt(Email.length-4) != '.')  && (Email.charAt(Email.length-3) != '.')){
    //     report2.innerHTML = '** Invalid mail'
    //     return false
    // }

    // if(Email.charAt(Email.length) != '@'){
    //     report2.innerHTML = '** mail is not complete'
    //     return false
    // }



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

    if(phoneNumber.length == 11){
        report3.innerHTML = 'Phone number must be 11  d*igit only'
        return false 
    }else {
        report3.innerHTML = ''
        
    }

   




}