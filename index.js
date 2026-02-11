const cartCount = localStorage.getItem('cartCount');

if (cartCount) {
  document.getElementById("cartCount").innerText = cartCount;
} else {
  document.getElementById("cartCount").style.opacity = 0;
}

document.getElementById("cartLi")?.addEventListener("click", ()=> {
  if(localStorage.getItem('cartCount')) {

    const agree = confirm("سبد خالی شود؟");
    
    if (agree) {
      localStorage.removeItem("cartCount");
      location.reload();
    };
  };
});