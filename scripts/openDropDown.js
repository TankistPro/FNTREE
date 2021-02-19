const items = document.querySelectorAll(".dropdowm-block p");

items.forEach( item => {
    item.addEventListener('click', () => {
        const dropDowm = item.closest('.dropdowm-block');
        for (let i=0; i<dropDowm.parentElement.children.length; i++) {
            if (dropDowm != dropDowm.parentElement.children[i]) {
                dropDowm.parentElement.children[i].classList.remove("open");
            }
        }
        if (!dropDowm.classList.contains('open')) {
            dropDowm.classList.add("open");
        } else {
            dropDowm.classList.remove("open");
        }
    })
})