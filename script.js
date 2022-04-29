let items=[
    {
        price:"$16",
        name:"Nike A",
        image:"nikey1.jpg",
        size:30,
    },
    {
        price:"$18",
        name:"Nike B",
        image:"nikey2.jpg",
        size:34,
    },
    {
        price:"$22",
        name:"Nike C",
        image:"nikey3.jpg",
        size:28,
    },
    {
        price:"$7",
        name:"Nike D",
        image:"nikey4.jpg",
        size:30,
    },
    {
        price:"$10",
        name:"Nike E",
        image:"nikey5.jpg",
        size:32,
    },
    {
        price:"$25",
        name:"Nike F",
        image:"nikeypic1.png",
        size:33,
    }
];
function createItemcards(item){
    return`
    <div class="card col-lg-3  col-sm-6 mt-5 mx-5">
      <div class="card-header p-0 text-center">
        <h4>${item.name}</h4>
      </div>
      <div class=" card-body bg-image"
          style="
          background-image: url('${item.image}');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;">
      </div>  
      <div class="card-footer">
        <button type="button" class="w-100 btn btn-lg btn-outline-primary">${item.price} <span class="text-dark p-5"> ${item.size}</span></button>
      </div>
    </div>
    `;
}

function makeItems(items){
  let cards=items.map((item) => createItemcards(item));
  document.getElementById("root").innerHTML = cards.join("");
};

makeItems(items);


