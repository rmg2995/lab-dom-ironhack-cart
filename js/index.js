// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText;
  let quantity= product.querySelector('.quantity input').value;
 let subtotalPrice = price * quantity//... your code goes here
 let subtotal = product.querySelector(".subtotal span");
 subtotal.innerHTML = subtotalPrice;
 
 return subtotalPrice
 
}
  


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2function
  let total= 0
  let allProducts = document.querySelectorAll('.product');
  allProducts.forEach((c) => {
    
    let subtotal = updateSubtotal(c)
    total += subtotal;


  });
     
                  //... your code goes here

  // ITERATION 3
  
  
  document.querySelector('#total-value span').innerHTML = total;

  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
