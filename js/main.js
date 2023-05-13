let All = document.querySelectorAll(".grid span");

var billInput = document.getElementById("input-value");
(peopleNumber = document.getElementById("number-people")),
  (tipNum = document.getElementById("tip-number")),
  (tipTotal = document.getElementById("total")),
  (error = document.querySelector("small")),
  (custom = document.getElementById("custom")),
  (submit = document.getElementById("submit"));

billInput.addEventListener("input", billInputValue);
peopleNumber.addEventListener("input", peopleInputValue);

peopleNumber.value = 1;

var billValue = 0.0,
  peopleValue = 1,
  tipValue = 0.0,
  tipCustom = 0.0;

function billInputValue() {
  billValue = parseFloat(billInput.value);
}

function peopleInputValue() {
  peopleValue = parseFloat(peopleNumber.value);
}

All.forEach(function (ele) {
  ele.onclick = function () {
    All.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
    tipValue = parseFloat(ele.textContent) / 100;
  };

  peopleNumber.addEventListener("keyup", calc);
});

function calc() {
  if (peopleValue >= 1) {
    let tipBill = (parseFloat(billValue * tipValue) / peopleValue).toFixed(2);

    let Total = (billValue + parseFloat(tipBill)) / peopleValue;

    tipNum.innerHTML = `$${tipBill}`;
    tipTotal.innerHTML = `$${Total.toFixed(2)}`;
  }
  custom.value = tipValue;
  if (billInput.value === "") {
    tipNum.innerHTML = `$0.00`;
    tipTotal.innerHTML = `$0.00`;
  }

  if (peopleNumber.value === "") {
    error.classList.remove("d-none");
  } else {
    error.classList.add("d-none");
  }
}

submit.addEventListener("click", () => {
  tipNum.innerHTML = `$0.00`;
  tipTotal.innerHTML = `$0.00`;
  billInput.value = "";
  custom.value = "";

  All.forEach(function (e) {
    e.classList.remove("active");
  });
  peopleNumber.value = 1;
});

//#################################################
