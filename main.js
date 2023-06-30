
                        // cards start
let celebratiesFrames=[
                     {id:1,name:"Sidharth Malhotra",title:"Frame 1",img:"Sidharth Malhotra.jfif",categeory:"Bollywood actor",price:"67 million",rating:4.9},
                     {id:2,name:"Sharukhan",title:"Frame 5",img:"shahrukhan.jfif",categeory:"Bollywood actor",price:"72 million",rating:4.3},
                     {id:3,name:"Vijay devarakonda",title:"Frame 3",img:"vijay 2.jfif",categeory:"Tollywood actor",price:"50 million",rating:4.8},
                     {id:4,name:"Prabhas",title:"Frame 4",img:"prabhas.jfif",categeory:"Tollywood actor",price:"52 million",rating:5.0},
                     {id:5,name:"Justin Bieber",title:"Frame 2",img:"just.jfif",categeory:"Singer",price:"65 million",rating:4.5},
                     {id:6,name:"Hrithik Roshan",title:"Frame 6",img:"hrithik roshan.jfif",categeory:"Bollywood actor",price:"84 million",rating:4.4},
                     {id:7,name:"Vijay thalapathy",title:"Frame 7",img:"vijay thalapathy.jfif",categeory:"kollywood actor",price:"54 million",rating:4.7},
                     {id:8,name:"Wahazali",title:"Frame 8",img:"wahalali.jfif",categeory:"Series actor",price:"45 million",rating:3.9},
                     {id:9,name:"Vikrant Massey",title:"Frame 9",img:"Vikrant Massey.jfif",categeory:"Ballywood actor",price:"50 million",rating:4.5},
                     {id:10,name:"Ronaldo",title:"Frame 10",img:"pic.jfif",categeory:"Sports",price:"60million",rating:4.9},
                     {id:11,name:"Hridhu Haroon",title:"Frame 11",img:"Hridhu Haroon.jfif",categeory:"Kollywood actor",price:"62 million",rating:4.7},
                     {id:12,name:"Pravisht Mishra",title:"Frame 12",img:"Pravisht Mishra.jfif",categeory:"Serial actor",price:"57 million",rating:4.9}
                    ];
                    

    let data ="";
    celebratiesFrames.map(function cardsFunction(items){
        data +=`
        <div class="col-lg-4" data-id="${items.id}">
        <div class="cards-data">
        <div class="cardsdiv">
         <img src="${items.img}">
        <h1><span>${items.name}</span></h1>
        </div>
        <div class="cardsdiv2">
        <h2><span>${items.title}</span></h2>
        <h4>Categeory:<span>${items.categeory}</span></h4>
        <h4>Price:<span>${items.price}</span></h4>
        <h4>Rating:<span>${items.rating}</span></h4>
        <button class="cartbtn" onclick="addToCart()">Add to cart</button>
        </div>
        </div>
        </div>`
        document.querySelector(".cards-ecommerce").innerHTML = data;
  });



    const cartItems = document.querySelector(".space-hide");
    let cartList = [];
    let cartData = "";

    function cartFunction(){
    cartItems.classList.toggle("space-hide-active");
      if(cartList.length === 0){
        document.querySelector(".listempty").innerHTML ="There is no items in the cart";
      }else{
        cartList.map(function cardsFunction(items){
          cartData +=`
          <div class="" data-id="${items.id}">
          <div class="cards-data">
          <div class="cardsdiv">
           <img src="${items.img}">
          <h1><span>${items.name}</span></h1>
          </div>
          <div class="cardsdiv2">
          <h2><span>${items.title}</span></h2>
          <h4>Categeory:<span>${items.categeory}</span></h4>
          <h4>Price:<span>${items.price}</span></h4>
          <h4>Rating:<span>${items.rating}</span></h4>
          </div>
          </div>
          </div>
          `
          document.querySelector(".listempty").innerHTML= cartData ;
        });
      }
    };

    function addToCart(id){
      const filterItem = celebratiesFrames.find(function findFunction(items){
        return items.id === id;
    });
     console.log(id);
     cartList.push(filterItem);
     console.log(cartList);
  }





      // delete button
     function deleteButton(id){
     const deleteItems = document.querySelector(`[data-id="${id}"]`);
     deleteItems.style.display="none";
     const filterArray=cartList.filter(function filterFunction(items){
     return items.id !== id;
     });
     cartList = filterArray;
     console.log(celebratiesFrames);
    };


// //         // // spacehide
   const spaceHide=document.querySelector(".space-hide");
   function myFunction(){
   return spaceHide.classList.toggle("space-hide-active");
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

