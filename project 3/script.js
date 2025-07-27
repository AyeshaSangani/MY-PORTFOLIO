let store = []

function addData(){
 
      let Id = document.getElementById("id").value
      let Name = document.getElementById("name").value
      let Email = document.getElementById("email").value
      let Number = document.getElementById("number").value  



      

         
                   // ============[{(METHOD IS DIFFERENT BUT BOTH WORKS SAME)}] =============


             //    !!!!!!!!!!!!!    JSONS NEW PATTERN    !!!!!!!!!!


    //   let newId = JSON.stringify(Id);
    //   let newName = JSON.stringify(Name);
    //   let newEmail= JSON.stringify(Email);
    //   let newNumber = JSON.stringify(Number);

    //   let imgProduct = {
    //        Id: newId ,
    //        Name:newName,
    //        Email:newEmail,
    //        Number:newNumber
    //   }
           
    //   store.push(imgProduct)

    //   console.log(store);


     let imgProduct ={
                Id: Id ,
                Name:Name,
               Email:Email,
               Number:Number 
            
     }

     store.push(imgProduct)

       console.log(store);

       let newData = JSON.stringify(store)
       localStorage.setItem("ProductData" , newData)
}


// ======= FOR DOWNLOADING THE DATA =========

function downloadData (){
    
     let data = localStorage.getItem("ProductData")
     
      let parseData = JSON.parse(data)

      let jsonData = JSON.stringify(parseData, null, 2)

      let blob = new Blob([jsonData],{type:'application/json'})

      let link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = 'ProductData.json'

      link.click()
}