const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } else {
      input.value = "";
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        if (index > 0) inputs[index - 1].focus();
      } else {
        input.value = "";
      }
    }
  });

  input.addEventListener("paste", (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, inputs.length);
    paste.split("").forEach((digit, i) => {
      if (inputs[i]) inputs[i].value = digit;
    });
    if (paste.length < inputs.length) {
      inputs[paste.length].focus();
    } else {
      inputs[inputs.length - 1].focus();
    }
  });
});
