  
     //FEEDBACK FORM
  
  
  function submitData(){

    let username = document.getElementById("username").value 
    let email = document.getElementById("email").value
    let msg = document.getElementById("msg").value

     console.log(username);
     console.log(email);
     console.log(msg);

     username = document.getElementById("username").value = ""
     email = document.getElementById("email").value = ""
     msg = document.getElementById("msg").value = ""


}