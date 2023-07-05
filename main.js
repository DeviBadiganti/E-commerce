
  //                       // cards start
  //      let cardsData=[
  //                    {id:1,name:"Sidharth Malhotra",title:"Frame 1",img:"Sidharth Malhotra.jfif",categeory:"Bollywood actor",price:"67 million",rating:4.9},
  //                    {id:2,name:"Sharukhan",title:"Frame 5",img:"shahrukhan.jfif",categeory:"Bollywood actor",price:"72 million",rating:4.3},
  //                    {id:3,name:"Vijay devarakonda",title:"Frame 3",img:"vijay 2.jfif",categeory:"Tollywood actor",price:"50 million",rating:4.8},
  //                    {id:4,name:"Prabhas",title:"Frame 4",img:"prabhas.jfif",categeory:"Tollywood actor",price:"52 million",rating:5.0},
  //                    {id:5,name:"Justin Bieber",title:"Frame 2",img:"just.jfif",categeory:"Singer",price:"65 million",rating:4.5},
  //                    {id:6,name:"Hrithik Roshan",title:"Frame 6",img:"hrithik roshan.jfif",categeory:"Bollywood actor",price:"84 million",rating:4.4},
  //                    {id:7,name:"Vijay thalapathy",title:"Frame 7",img:"vijay thalapathy.jfif",categeory:"kollywood actor",price:"54 million",rating:4.7},
  //                    {id:8,name:"Wahazali",title:"Frame 8",img:"wahalali.jfif",categeory:"Series actor",price:"45 million",rating:3.9},
  //                    {id:9,name:"Vikrant Massey",title:"Frame 9",img:"Vikrant Massey.jfif",categeory:"Ballywood actor",price:"50 million",rating:4.5},
  //                    {id:10,name:"Ronaldo",title:"Frame 10",img:"pic.jfif",categeory:"Sports",price:"60million",rating:4.9},
  //                    {id:11,name:"Hridhu Haroon",title:"Frame 11",img:"Hridhu Haroon.jfif",categeory:"Kollywood actor",price:"62 million",rating:4.7},
  //                    {id:12,name:"simbu",title:"Frame 12",img:"simbu1.jfif",categeory:"Kannada actor",price:"57 million",rating:4.9}
  //                   ];
                    

  //   let data ="";
  //   cardsData.map(function cardsFunction(items){
  //       data +=`
  //       <div class="col-lg-4" data-id="${items.id}">
  //       <div class="cards-data">
  //       <div class="cardsdiv">
  //        <img src="${items.img}">
  //       <h1><span>${items.name}</span></h1>
  //       </div>
  //       <div class="cardsdiv2">
  //       <h2><span>${items.title}</span></h2>
  //       <h4>Categeory:<span>${items.categeory}</span></h4>
  //       <h4>Price:<span>${items.price}</span></h4>
  //       <h4>Rating:<span>${items.rating}</span></h4>
  //       <button class="cartbtn" onclick="addToCart()">Add to cart</button>
  //       </div>
  //       </div>
  //       </div>`
  //       document.querySelector(".cards-ecommerce").innerHTML = data;
  // });















                        // cards start
       let cardsData=[
                     {id:1,name:"Men's Watch",title:"Binger Swiss",img:"binger swiss.webp",price:"67 million",rating:4.9},
                     {id:2,name:"Pendant",title:"Blue Stone Pendant",img:"blue stone pendant.webp",price:"72 million",rating:4.3},
                     {id:3,name:"Mobile Phone",title:"Cubot j8",img:"cubot j8.jpg",price:"50 million",rating:4.8},
                     {id:4,name:"Rings",title:"Deesar Platinum ",img:"deesar platinum.jpg",price:"52 million",rating:5.0},
                     {id:5,name:"Gown",title:"Kids Ball Gown ",img:"kids ball gown.jpg",price:"65 million",rating:4.5},
                     {id:6,name:"Tshirt",title:"Kids Tshirt",img:"kids Tshirt.avif", price:"84 million",rating:4.4},
                     {id:7,name:"Laptop",title:" Dell Laptop",img:"laptop.jpg",price:"54 million",rating:4.7},
                     {id:8,name:"Ear Rings",title:"Meenaz Jewellary",img:"meenaz jewellary ear rings.jpg",categeory:"Series actor",price:"45 million",rating:3.9},
                     {id:9,name:"saree",title:"Pothys Dresses",img:"pothys dresses.jpg",price:"50 million",rating:4.5},
                     {id:10,name:"Women's Watch",title:"Fossil Watch",img:"women watch -fossil.jfif",categeory:"Sports",price:"60million",rating:4.9},
                     {id:11,name:"Hand Bag",title:"Jercky Bags",img:"Hand bag.jfif",price:"62 million",rating:4.7},
                     {id:12,name:"Kid's Suit",title:"Stylist Suits",img:"stylish child suit.jpg",price:"57 million",rating:4.9}
                    ];
                    

    let data ="";
    cardsData.map(function cardsFunction(items){
        data +=`
        <div class="col-lg-4" data-id="${items.id}">
        <div class="cards-data">
        <div class="cardsdiv">
         <img src="${items.img}">
         </div>
        <div class="cardsdiv2">
        <h3><span>${items.title}</span></h3>
        <h4> Name:<span>${items.name}</span></h4>
        <h4>Price:<span>${items.price}</span></h4>
        <h4>Rating:<span>${items.rating}</span></h4>
        <button class="cartbtn" onclick="addToCart()">Add to cart</button>
        </div>
        </div>
        </div>`
        document.querySelector(".cards-ecommerce").innerHTML = data;
  });



    const cartItems = document.querySelector(".cart-items");
    let cartList = [];
    // let cartData = "";

    // function cartFunction(){
    // cartItems.classList.toggle("items-active");
    //   if(cartList.length === 0){
    //     document.querySelector(".listempty").innerHTML = "There is no items in the cart";
    //   }else{
    //     cartList.map(function cardsFunction(items){
    //       cartData +=`
    //       <div class="" data-id="${items.id}">
    //        <img src="${items.img}">
    //       <h1><span>${items.name}</span></h1>
    //       <h2><span>${items.title}</span></h2>
    //       <h4>Categeory:<span>${items.categeory}</span></h4>
    //       <h4>Price:<span>${items.price}</span></h4>
    //       <h4>Rating:<span>${items.rating}</span></h4>
    //       </div>
    //       `
    //       document.querySelector(".listempty").innerHTML= cartData;
    //     });
    //   }
    // };

  //   function addToCart(id){
  //     const filterItem = cardsData.find(function findFunction(items){
  //       return items.id === id;
  //   });
  //     console.log(id);
  //    cartList.push(filterItem);
  //     console.log(cartList);
  // }


  
// const cartItems = document.querySelector(".items"); 
// let cartList = [];
let cartData = "";

function cartFunction(){
cartItems.classList.toggle("items-active");
if(cartList.length === 0){
  document.querySelector(".listempty").innerHTML = "There is no items in the cart";
}else{
  cartList.map(function cardsFunction(items){
      cartData +=`
      
      <div class="" data-id="${items.id}">
      <div class="cards-data">
      <div class="cardsdiv">
       <img src="${items.img}">
       </div>
      <div class="cardsdiv2">
      <h3><span>${items.title}</span></h3>
      <h4> Name:<span>${items.name}</span></h4>
      <h4>Price:<span>${items.price}</span></h4>
      <h4>Rating:<span>${items.rating}</span></h4>
      <button class="cartbtn" onclick="addToCart()">Add to cart</button>
      </div>
      </div>
      </div>`
          document.querySelector(".listempty").innerHTML = cartData;
      });
}
};

function addToCart(id){
 const filterItem = cardsData.find(function findFunction(items){
      return items.id === id;
  });
  console.log(id);
  cartList.push(filterItem);
  console.log(cartList);
}




      // delete button
    //  function deleteButton(id){
    //  const deleteItems = document.querySelector(`[data-id="${id}"]`);
    //  deleteItems.style.display="none";
    //  const filterArray=cartList.filter(function filterFunction(items){
    //  return items.id !== id;
    //  });
    //  cartList = filterArray;
    //  console.log(celebratiesFrames);
    // };


// //         // // spacehide
   const spaceHide=document.querySelector(".items");
   function myFunction(){
   return spaceHide.classList.toggle("items-active");
    }


    // tap button
    const angleUp=document.querySelector(".tap-btn");
  window.addEventListener("scroll",function myFunction(){
    if(window.pageYOffset > 100){
      angleUp.classList.add("tap-btn-active")
    }else{
      angleUp.classList.remove("tap-btn-active")
    }
  });

