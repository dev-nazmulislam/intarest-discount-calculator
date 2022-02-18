let calcChange = false;
function myNewFunction(sel) {
  const calcValue = sel.options[sel.selectedIndex].text;
  if (calcValue == "Calculate Intarest") {
    document.getElementById("visibility").style.display = "flex";
    document.getElementById("discount-intarest").innerText = "Intarest Amount";
    calcChange = true;
  } else {
    document.getElementById("visibility").style.display = "none";
    document.getElementById("discount-intarest").innerText = "Discount Amount";
    calcChange = false;
  }
}

function getValue(id) {
  const inputValue = document.getElementById(id);
  //   Error Handaling and return value if no Error
  if (isNaN(inputValue.value) || inputValue.value < 0) {
    inputValue.style.border = "2px solid red";
    alert(`"${id.toUpperCase()}" value is incoret.`);
    return "error";
  } else if (inputValue.value == "") {
    alert(`"${id.toUpperCase()}" value is empty.`);
    inputValue.style.border = "2px solid red";
    return 0;
  } else {
    inputValue.style.border = "1px solid black";
    return parseFloat(inputValue.value);
  }
}

document.querySelector(".calculate").addEventListener("click", (e) => {
  e.preventDefault();
  const inputAmount = getValue("amount");
  const parsentage = getValue("percentage");
  // update  Balance
  if (!(inputAmount == "error" || parsentage == "error")) {
    if (calcChange) {
      const time = getValue("time");
      const intarestAmount = (inputAmount * parsentage * time) / 100;
      document.getElementById("discount-amount").value = intarestAmount;
      document.getElementById("pay").value = inputAmount + intarestAmount;
    } else {
      const discount = (inputAmount * parsentage) / 100;
      document.getElementById("discount-amount").value = discount;
      document.getElementById("pay").value = inputAmount - discount;
    }
  }
  console.log(calcChange);
});
