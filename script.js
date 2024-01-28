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
        <img class="imageurl" src="${item.imageurl}" alt="${item.name} Image"/>
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
          <i class="fa-solid fa-circle-plus addbutton" data-add="${
            item.uuid
          }"></i>   </div>
        
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
        return `
        <div>
          <div class="orderlist-info">
            
            <div class="iteminfo">
              <h4 data-itemname="${item.name}" id="itemnamebasket">${
          item.name
        }</h4>
           
        <div id="orderquantity">
        <h4 id="quantity_${item.uuid}">${item.quantity}</h4>     
        <i class="fa-regular fa-square-minus removebutton" data-remove="${
          item.uuid
        }"></i>
      </div>

              <h3 id="itempricebasket" data-price="${item.price}">$${
          item.price * item.quantity
        }</h3>
</div>
      
        <div id="orderingredients" >
      <small data-ingredients="${item.ingredients}">${item.ingredients.join(
          ", "
        )}</small>
      </div>
            
          
          </div>`;
      })
      .join("");

    const totalPrice = orderedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    orderList.innerHTML = `<h2><strong>Order List:</strong></h2>${orderListHtml}
    <div id="totalprice"><h3><strong>Total: $${totalPrice}</strong></h3></div>
    <div><button id="checkout">Check Out</button></div>`;

    checkOut();
    finalizeOrder();
  }
}

const mainElement = document.querySelector("main");
function checkOut() {
  const checkOutButton = document.getElementById("checkout");
  checkOutButton.addEventListener("click", function () {
    console.log("clicked");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

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
