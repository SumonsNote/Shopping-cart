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
    calculateTotal()
}

function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}

// For phone
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

// for phone case
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber('case', 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber('case', 59, false);
});
