// =============LogIN & SignIn=================
const openSignPopup = () => {
    signInPopup.style.display = "flex";
    loginPopup.style.display = "none";
}

const openLogPopup = () => {
    signInPopup.style.display = "none";
    loginPopup.style.display = "flex";
}

const navButton = document.querySelector(".nav-block__right-btn"),
    userIcon = document.querySelector(".block-in"),
    loginPopup = document.querySelector(".login"),
    signInPopup = document.querySelector(".signin"),
    links = document.querySelectorAll(".modal-block__header-link"),
    closePopupIcons = document.querySelectorAll(".modal-block__close"),
    btnSigh = loginPopup.querySelector('.form-link'),
    btnLog = signInPopup.querySelector('.form-link');

btnLog.addEventListener("click", openLogPopup);
btnSigh.addEventListener("click", openSignPopup);

navButton.addEventListener("click", openSignPopup);

userIcon.addEventListener("click", openSignPopup);

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

// ============ Fortnite-package =================
const FpBtn = document.querySelectorAll(".fortnite-packages__slider__blocks__block");
console.log(FpBtn)
// vBucksOffersBtn.forEach(btn => {
//     btn.addEventListener("click", () => {
//         vBucksPopup.style.display = "flex";
//     })
// })