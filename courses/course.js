document.getElementById("register").addEventListener("click", () => {
    const agree = confirm("آیا از ثبت نام خود مطمئن هستید؟");
    
    if (agree) {
        console.log("کاربر موافق است +");
    } else {
        console.log("کاربر راضی نیست -");
    };
})