const controler = document.querySelector('.control-tbn');
const tuples = document.querySelector('.tbl-content').children;
const control_pages = controler.querySelector('.pages');

let main_page = control_pages.querySelector('.active').textContent;

let num_pages = Number(main_page)*8;

function closeTuples(num_pages) {
    for (let i = 0; i<tuples.length; i++) {
        if (i>num_pages-9 && i<num_pages) {
            tuples[i].style.display = 'table-row';
            continue
        }
        tuples[i].style.display = 'none';
    }
}

for (let i=0; i<control_pages.children.length; i++) {
    control_pages.children[i].addEventListener('click', (event) => {
        for (let i=0; i<control_pages.children.length; i++) {
            control_pages.children[i].classList.remove('active');
        }
        event.target.classList.add('active');

        let num_pages = Number(event.target.textContent)*8;
        closeTuples(num_pages);
    })
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1100) {
        for (let i = 0; i<tuples.length; i++) {
            if (i>num_pages-9 && i<num_pages) {
                continue
            }
            tuples[i].style.display = 'none';
        }
    } else {
        for (let i = 0; i<tuples.length; i++) {
            tuples[i].style.display = 'table-row';
        }
    }
})