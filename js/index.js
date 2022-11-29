// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').textContent
  console.log("Price", price)
  const quantity = product.querySelector(".quantity input")
const quantityNumber = quantity.value
  console.log("Quantity", quantity)
  console.log("Quantity Number Value", quantityNumber)

  const subtotalAmount = price * quantityNumber
  console.log("Subtotal", subtotalAmount)

  const subtotalField = product.querySelector('.subtotal span')
  console.log("Subtotal Field", subtotalField)

  subtotalField.innerHTML = `${subtotalAmount}`
   
  return subtotalAmount
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  // ITERATION 2
  //... your code goes here

const productElementsObj = document.getElementsByClassName("product")
console.log("Product Elements Object", productElementsObj)

const arrayOfSubtotals = []

for (let i = 0; i < productElementsObj.length; i++){
  arrayOfSubtotals.push(updateSubtotal(productElementsObj[i]))
}
console.log("Subtotals Array", arrayOfSubtotals)


  // ITERATION 3
  //... your code goes here

const totalSum = arrayOfSubtotals.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log("totalSum", totalSum)
document.getElementById("total-value").innerHTML = `$${totalSum}`

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  // store parent node td

const removeButtonParent = target.parentNode

const removeProductRow = removeButtonParent.parentNode

const removeProductRowForReal = removeProductRow.parentNode



  console.log("remove Buttons",  removeButtonParent)

  removeProductRowForReal.removeChild(removeProductRow)

  calculateAll()

}

// ITERATION 5

function createProduct() {
  //... your code goes here

// 1. extract Value of Product Name
// 2. extract value of Unit Price
// 3. Create a new row under 2 existing rows
// 4. Set Product Name and Unit Price to input values
// 5. Ensure Calculation / remove functionalities

// const newProductName = document.getElementsByClassName("create-product")
// console.log(newProductName)


// This is Step 1 
const newProductName = document.querySelector("tfoot td input")
const newProductNameValue = newProductName.value 
console.log("input node product name", newProductName)
console.log("value of product name input field", newProductNameValue)


// This is Step 2
const newUnitPrice = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]")
console.log("New unit Price", newUnitPrice)
let newUnitPriceValue = newUnitPrice.value 
console.log("New unit Price Value", newUnitPriceValue)

if(newUnitPriceValue !== ".00"){
  newUnitPriceValue = `${newUnitPriceValue}.00`
}

// This is step 3
const trElement = document.createElement("tr")
trElement.setAttribute("class", "product")

//This is step 4

trElement.innerHTML =`
<td class="name">
  <span>${newProductNameValue}</span>
</td>
<td class="price">$<span>${newUnitPriceValue}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity">
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`


document.querySelector("tbody").appendChild(trElement)

//This is the failed reset attempt
// document.querySelector("tfoot td input")
// document.querySelector("tfoot td input").innerHTML = `type="text" placeholder="Product Name"`
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeProductButtons = document.getElementsByClassName("btn btn-remove")
console.log("remove Buttons", removeProductButtons)

for(let i = 0; i < removeProductButtons.length; i++){
  removeProductButtons[i].addEventListener("click", removeProduct)
}
});

const createProductBtn = document.getElementById("create")
createProductBtn.addEventListener("click", createProduct)