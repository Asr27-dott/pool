
console.log("Welcome to my portfolio");


document.addEventListener("DOMContentLoaded", function () {
  
  const checkbox = document.getElementById("subscribe");
  const response = document.getElementById("response");

  
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      response.classList.remove("hidden"); 
    } else {
      response.classList.add("hidden"); 
    }
  });
});
