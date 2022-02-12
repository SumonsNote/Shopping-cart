function updateProductNumber(product, price, isIncreasing) {
  const ProductInput = document.getElementById(product + "-number");
  let ProductNumber = ProductInput.value;
  if (isIncreasing) {
    ProductNumber = parseInt(ProductNumber) + 1;
  } else if (ProductNumber > 0) {
    ProductNumber = parseInt(ProductNumber) - 1;
  }
  ProductInput.value = ProductNumber;

  const ProductTotal = document.getElementById(product + "-total");
  ProductTotal.innerText = ProductNumber * price;
}
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber('case', 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber('case', 59, false);
});
