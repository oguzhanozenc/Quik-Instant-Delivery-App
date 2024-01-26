import menuArray from "./data.js";

document.addEventListener("click", function (e) {
  const itemId = e.target.dataset.add || e.target.dataset.remove;
  if (itemId) {
    handleBasketButtonClick(itemId, e);
  }
});

const menuHTML = document.getElementById("menuHTML");

function getFeedHtml() {
  let feedHtml = ``;
  feedHtml += menuArray
    .map((item) => {
      return `
        <div class="shoppinglist">
          <div>
            <h3 class="emoji">${item.emoji}</h3>
          </div>
          <div class="iteminfo">
            <h3 data-itemname="${item.name}">${item.name}</h3>
            <p data-ingredients="${item.ingredients}">${item.ingredients.join(
        ", "
      )}</p>
            <h3 data-price="${item.price}">$${item.price}</h3>
          </div>
          
          <div id="cartbutton">
          <div>
          <i class="fa-regular fa-square-plus addbutton" data-add="${
            item.uuid
          }"></i>   </div>
        <div><h4 id="quantity_${item.uuid}"> ${item.quantity}</h4></div>
        <div> <i class="fa-regular fa-square-minus removebutton" data-remove="${
          item.uuid
        }"></i>     </div>
          </div>
          
          </div>
        `;
    })
    .join("");

  return feedHtml;
}

function handleBasketButtonClick(itemId, e) {
  const selectedItem = menuArray.find((item) => item.uuid === itemId);

  if (selectedItem) {
    if (e.target.dataset.add) {
      selectedItem.quantity++;
    } else if (e.target.dataset.remove && selectedItem.quantity > 0) {
      selectedItem.quantity--;
    }
  }

  render();
  updateOrderList();
}

const orderList = document.getElementById("orderlist");

function updateOrderList() {
  orderList.innerHTML = "";

  const orderedItems = menuArray.filter((item) => item.quantity > 0);

  if (orderedItems.length > 0) {
    const orderListHtml = orderedItems
      .map((item) => {
        return `<div id="orderlist"><p>${item.quantity} x ${item.name} 
        
        </br>$${item.price * item.quantity}</p></div>`;
      })
      .join("");

    const totalPrice = orderedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    orderList.innerHTML = `<h2><strong>Order List:</strong></h2>${orderListHtml}
    <div id="totalprice"><h3><strong>Total: $${totalPrice}</strong></h3></div>
    <div><button id="checkout">Check Out</button></div>
    
    `;

    checkOut();
    finalizeOrder();
  }
}

const mainElement = document.querySelector("main");
function checkOut() {
  const checkOut = document.getElementById("checkout");
  checkOut.addEventListener("click", function () {
    console.log("clicked");
    document.getElementById("creditCardForm").style.display = "block";
    mainElement.classList.add("checkout-bg");
  });
  closePayment();
}

function closePayment() {
  const closeBtn = document.getElementById("closebtn");
  closeBtn.addEventListener("click", function () {
    document.getElementById("creditCardForm").style.display = "none";
    mainElement.classList.remove("checkout-bg");
  });
}

function finalizeOrder() {
  const creditCardForm = document.getElementById("creditCardForm");
  creditCardForm.addEventListener("submit", function (e) {
    e.preventDefault();
    creditCardForm.innerHTML = ` <div id="closebtn"><i class="fa-solid fa-xmark"></i></div>
    <h2>Thanks for your order ${cardHolder.value}. We will get in touch with you soon!</h2>`;
    closePayment();
  });
}
function render() {
  console.log("Rendering...");
  menuHTML.innerHTML = getFeedHtml();
}

render();