// let Name = "Saurabh";
// for(let i = 0;i < 1000;i++){
//     console.log(Name);
// }
// console.log("STOP")

// Promises , Async Await

// Promise
// const num = 10;
// const p1 = new Promise(function (res, rej) {
//   if (num % 2 == 0) {
//     res("Your Promise Is Resolved");
//   } else {
//     rej("Your Promise Is Rejected");
//   }
// });

// p1.then(function (data) {
//   console.log(data);
// }).catch(function (err) {
//   console.log(err);
// });

// Promise UseCases
// 1. APi CALLING
// 2. Database Operations
// 3. Asynchronous Operations and heavy computations

// Client -> Server -> Database
// Client <- Server <- Database (API)
// 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'

const productDiv = document.getElementById("productDiv");
const individualProduct = document.getElementById("individualDiv");

const id = new URLSearchParams(window.location.search);
const val = id.get("id");

const fetchProducts = (url) => {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      displayProducts(data.products);
    });
};
fetchProducts("https://dummyjson.com/products?limit=100");

const fetchSingleProduct = (url) => {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      displaySingleProduct(data);
    });
};

if (window.location.pathname.includes("/individualPage.html")) {
  fetchSingleProduct(`https://dummyjson.com/products/${val}`);
}
// Array Methods
const displayProducts = (arr) => {
  //[{},{},{},{}.....100]
  console.log(arr);
  arr.map((elem) => {
    return (productDiv.innerHTML += `
        <a href="./individualPage.html?id=${elem.id}">

<div class="bg-white rounded-lg shadow-lg p-4">
    <h1 class="text-xl font-semibold mb-2">${elem.title}</h1>
    <img src=${
      elem.thumbnail
    } alt="No Image" class="w-full h-48 object-cover rounded-t-lg mb-4" />
    <p class="text-gray-700 mb-2">${elem.category}</p>
    <p class="text-blue-600 font-bold text-lg mb-2">₹${Math.round(
      elem.price * 80
    )}</p>
    <p class="text-yellow-500">${elem.rating}</p>
</div>
        </a>
`);
  });
};

const displaySingleProduct = (obj) => {
    individualProduct.innerHTML = `<div class="flex items-start bg-white rounded-lg shadow-lg p-4 mb-6">
    <img src=${obj.thumbnail} alt="No Image" class="w-48 h-48 object-cover rounded-lg mr-4" />
    <div>
        <h1 class="text-2xl font-semibold mb-2">${obj.title}</h1>
        <p class="text-gray-700 mb-2">${obj.description}</p>
        <p class="text-blue-600 font-bold text-lg mb-2">₹${Math.round(obj.price * 80)}</p>
        <p class="text-green-500 font-semibold mb-4">⭐${obj.rating}</p>
        <div class="flex space-x-4">
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Now</button>
            <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add To Cart</button>
        </div>
    </div>
</div>

`;
};
