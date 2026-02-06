document.getElementsByClassName("hamberger-menu")[0].addEventListener("click", () => {
    document.getElementsByTagName("nav")[0].className = ""
})
document.getElementsByClassName("close-hamber")[0].addEventListener("click", () => {
    document.getElementsByTagName("nav")[0].className = "closedNav"
})
