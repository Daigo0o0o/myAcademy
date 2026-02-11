function addToCart(amount = 1) {
  // Get current cart count, or 0 if it doesn't exist
  let currentCount = parseInt(localStorage.getItem('cartCount')) || 0;
  
  // Add the amount
  currentCount += amount;
  
  // Save it back to localStorage
  localStorage.setItem('cartCount', currentCount);
  document.getElementById("cartCount").innerText = currentCount;
  document.getElementById("cartCount").style.opacity = 1;

  
  return currentCount; // optional, returns new count
}

document.getElementById("register")?.addEventListener("click", () => {
    const agree = confirm("آیا از ثبت نام خود مطمئن هستید؟");
    
    if (agree) {
        console.log("کاربر موافق است +");
        addToCart();
    } else {
        console.log("کاربر راضی نیست -");
    };
})
document.getElementById("cartLi")?.addEventListener("click", ()=> {
  if(localStorage.getItem('cartCount')) {

    const agree = confirm("سبد خالی شود؟");
    
    if (agree) {
      localStorage.removeItem("cartCount");
      location.reload();
    };
  }
})

const cartCount = localStorage.getItem('cartCount');

if (cartCount) {
    document.getElementById("cartCount").innerText = cartCount;
} else {
    document.getElementById("cartCount").style.opacity = 0;
}


const stars = document.getElementById("stars");

if(stars) {
  for (let i = 0; i < 5; i++) {
    stars.children[i].addEventListener("click", () => {
      window.alert(`Stars given: ${i+1}`)
    })
  }
}