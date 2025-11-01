
let fetchapi = "https://fakestoreapi.com/products"

async function getapi(abc) {

   let response = await fetch(abc)

   let data = await response.json()

   console.log(data)

   let card = ""

   data.forEach(element => {

      card += 

      `
       <div class="card m-2" style="width: 18rem;">
        <img src=${element.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${element.title} </h5>
          <p class="card-text"><i> ${element.category} </i></p>
          <p class="card-text"><b>$ ${element.price} </b></p>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>

       `
      document.getElementById("all-products").innerHTML = card
   });

}

getapi(fetchapi)



// let fetchapi = "https://fakestoreapi.com/products"
// async function getapi(url) {

//    let response = await fetch(url)

//    let data = await response.json()

//    console.log(data)

//    let card = ""

//    data.forEach(element => {

//       card +=

//          `
//        <div class="card m-2" style="width: 18rem;">
//         <img src=${element.image} class="card-img-top" alt="...">
//         <div class="card-body">
//          <h5 class="card-title"> ${element.title} </h5>
//          <p class="card-text"><i> ${element.category} </i></p>
//           <p class="card-text"><b>$ ${element.price} </b></p>
//           <a href="#" class="btn btn-primary">Buy Now</a>
//          </div>
//        </div>

//       `
//   document.getElementById("all-products").innerHTML = card
//    });

// }

// getapi(fetchapi)