const availableSets = convertValueById("available-seats");

const allSeats = document.getElementsByClassName("seat");
const carts = convertValueById("cart-count");
const putCart = document.getElementById("cart-count").innerText;
const getTicketPrice = convertValueById("ticket-fare");

for (const seat of allSeats) {
  seat.addEventListener("click", function (event) {
    seat.classList.toggle("selected");
    const seatName = seat.innerText;
    const seatClass = String("Economy");
    const bdt = String(" ৳");
    const ticketPrice = getTicketPrice;
    const selectTblRow = document.getElementById("selected-tbl-row");

    const tblRow = document.createElement("tr");
    tblRow.classList.add("flex", "justify-between", "w-full");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const span = document.createElement("span");

    th1.innerText = seatName;
    th2.innerText = seatClass;
    th3.innerText = ticketPrice;

    span.innerText = bdt;
    selectTblRow.appendChild(tblRow);
    tblRow.appendChild(th1);
    tblRow.appendChild(th2);
    tblRow.appendChild(th3);
    th3.appendChild(span);

    updateTotalPrice(ticketPrice);
    grandTotalPrice();

    const cartCount = convertValueById("cart-count");
    if (cartCount < 4) {
      document.getElementById("cart-count").innerText = cartCount + 1;
    } else {
      alert("Your Seat limit exist");
    }
    const leftSeat = convertValueById("available-seats");
    document.getElementById("available-seats").innerText = leftSeat - 1;
  });
}

// Update Total price price
function updateTotalPrice(value) {
  const totalPrice = convertValueById("total-taka");

  const sum = totalPrice + parseInt(value);
  document.getElementById("total-taka").innerText = sum;
  return totalPrice;
}
// Summetion of total cart price
function grandTotalPrice(status) {
  const totalPrice = convertValueById("total-taka");
  if (status == undefined) {
    document.getElementById("g-price").innerText = totalPrice;
  } else {
    const couponCode = document.getElementById("couponInp").value;

    if (couponCode == "NEW15") {
      const discount = totalPrice * 0.15;
      document.getElementById("d-price").innerText = discount;
      document.getElementById("g-price").innerText = totalPrice - discount;
    } else {
      alert("You enter invalid coupon code");
    }
  }
}
// update Cart
function updateCart() {}
// Update Seats
function updateSeats() {}

// function hideTableRow() {
//   const discoutnPrice = convertValueById("d-price");
//   if (discoutnPrice <= 0) {
//     document.getElementById("hdide-tr").classList.add("hidden");
//     document.getElementById("hide-tr").classList.add("hidden");
//     document.querySelector("tr#hide-tr").style.border = "none";
//     document.querySelector("tr.t-price").style.border = "none";
//     document.querySelector("tr.t-price").style.border = "none";
//     document.querySelector("tr.t-price").style.marginBottom = "20px";
//   }
// }
// hideTableRow();

// Convert string to integer value
function convertValueById(id) {
  const strValue = document.getElementById(id).innerText;
  const intValue = parseInt(strValue);
  return intValue;
}
