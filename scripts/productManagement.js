const baseProducts = [
  {
    id: "001",
    name: "Camel",
    description: "Strong and reliable desert companions",
    category: "animals",
    unitOfMeasure: "",
    price: 3599,
    weight: ""
  },
  {
    id: "002",
    name: "Palm Trees",
    description: "Bring a touch of oasis to your space",
    category: "plants",
    unitOfMeasure: "",
    price: 499,
    weight: ""
  },
  {
    id: "003",
    name: "Sand",
    description: "Fine desert sand for various uses",
    category: "home-garden",
    unitOfMeasure: "1 gallon",
    price: 20,
    weight: ""
  }
];

// Show specific form
function hideAllForms() {
  document.querySelectorAll('.product-form').forEach(form => {
    form.style.display = 'none';
  });
}

function hideForm(formId) {
  document.getElementById(formId).style.display = 'none';
}

document.getElementById('addProdBtn').addEventListener('click', function () {
  hideAllForms();
  document.getElementById('addProductForm').style.display = 'block';
});

document.getElementById('updateProdBtn').addEventListener('click', function () {
  hideAllForms();
  document.getElementById('updateProductForm').style.display = 'block';
});

document.getElementById('deleteProdBtn').addEventListener('click', function () {
  hideAllForms();
  document.getElementById('deleteProductForm').style.display = 'block';
});

// ADD PRODUCT

document.getElementById('addForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const id = document.getElementById('addId').value;
  const name = document.getElementById('addName').value;
  const category = document.getElementById('addCategory').value;
  const quantity = document.getElementById('addQuantity').value;
  const price = document.getElementById('addPrice').value;
  const description = document.getElementById('addDescription').value;

  baseProducts.push({
    id,
    name,
    category,
    unitOfMeasure: quantity,
    price: Number(price),
    description,
    weight: ''
  });

  alert(`PRODUCT ADDED SUCCESSFULLY!\n\nProduct ID: ${id}\nName: ${name}\nCategory: ${category}\nQuantity: ${quantity}\nPrice: $${price}\nDescription: ${description}`);

  this.reset();
  hideForm('addProductForm');
});

// UPDATE PRODUCT

document.getElementById('updateForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const id = document.getElementById('updateId').value;
  const name = document.getElementById('updateName').value;
  const category = document.getElementById('updateCategory').value;
  const quantity = document.getElementById('updateQuantity').value;
  const price = document.getElementById('updatePrice').value;
  const description = document.getElementById('updateDescription').value;

  const product = baseProducts.find(p => p.id === id);

  if (product) {
    product.name = name;
    product.category = category;
    product.unitOfMeasure = quantity;
    product.price = Number(price);
    product.description = description;

    alert(`PRODUCT UPDATED SUCCESSFULLY!\n\nProduct ID: ${id}\nName: ${name}\nCategory: ${category}\nQuantity: ${quantity}\nPrice: $${price}\nDescription: ${description}`);
  } else {
    alert(`Product with ID ${id} not found.`);
  }

  this.reset();
  hideForm('updateProductForm');
});

// DELETE PRODUCT

document.getElementById('deleteForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const id = document.getElementById('deleteId').value;
  const index = baseProducts.findIndex(product => product.id === id);

  if (index !== -1) {
    if (confirm('ARE YOU ABSOLUTELY SURE YOU WANT TO DELETE THIS PRODUCT?')) {
      baseProducts.splice(index, 1);
      alert('PRODUCT DELETED SUCCESSFULLY!');
    }
  } else {
    alert(`Product with ID ${id} not found.`);
  }

  this.reset();
  hideForm('deleteProductForm');
});

// SEARCH FUNCTIONALITY

$(document).ready(function () {
  $('#txt-search').keyup(function () {
    const searchField = $(this).val();
    if (searchField === '') {
      $('#filter-records').html('');
      return;
    }

    const regex = new RegExp(searchField, 'i');
    let output = '<div class="row">';
    let count = 1;

    baseProducts.forEach((val) => {
      if ((val.name.search(regex) !== -1) || (val.category.search(regex) !== -1)) {
        output += '<div class="col-md-6 well">';
        output += '<div class="col-md-12 justify-content-start">';
        output += `<p>Product ID: ${val.id}</p>`;
        output += `<p>Name: ${val.name}</p>`;
        output += `<p>Description: ${val.description}</p>`;
        output += `<p>Category: ${val.category}</p>`;
        output += `<p>Price: $${val.price}</p>`;
        output += '</div></div>';
        if (count % 2 === 0) {
          output += '</div><div class="row">';
        }
        count++;
      }
    });
    output += '</div>';
    $('#filter-records').html(output);
  });
});
