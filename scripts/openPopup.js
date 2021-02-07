// =============LogIN & SignIn=================
const navButton = document.querySelector(".nav-block__right-btn"),
    loginPopup = document.querySelector(".login"),
    signInPopup = document.querySelector(".signin"),
    links = document.querySelectorAll(".modal-block__header-link"),
    closePopupIcons = document.querySelectorAll(".modal-block__close");

navButton.addEventListener("click", () => {
    signInPopup.style.display = "flex";
});

closePopupIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.closest(".modal-wrapper").style.display = "none"
    })
});

links.forEach(link => {
    link.addEventListener("click", () => {
        let modal = link.closest(".modal-wrapper");
        if(modal.classList.contains("signin")){
            signInPopup.style.display = "none";
            loginPopup.style.display = "flex";
        } else {
            signInPopup.style.display = "flex";
            loginPopup.style.display = "none";
        }
    })
})


// ============ V-BUCKS =================
const vBucksOffersBtn = document.querySelectorAll(".offer-btn"),
    vBucksPopup = document.querySelector(".b-vbucks");

vBucksOffersBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        vBucksPopup.style.display = "flex";
    })
})