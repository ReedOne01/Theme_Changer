let bg = document.querySelector(".cont");
let btn = document.getElementById("btn");
let darktheme = true;
btn.addEventListener("click", () => {
  console.log(btn);
  if (darktheme) {
    bg.style.backgroundColor = "white";
    btn.style.color = "white";
    btn.style.borderColor = "black";
    bg.style.color = "black";
    darktheme = false;
  } else {
    bg.style.backgroundColor = "black";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    btn.style.borderColor = "white";
    bg.style.color = "white";
    darktheme = true;
  }
});
