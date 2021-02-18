const controler = document.querySelector('.control-tbn');
const tuples = document.querySelector('.tbl-content').children;
const control_pages = controler.querySelector('.pages');

let main_page = control_pages.querySelector('.active').textContent;
let num_pages = Number(main_page)*8;
closeTuples(num_pages);

for (let i=0; i<control_pages.children.length; i++) {
    control_pages.children[i].addEventListener('click', () => changePage(event));
}

window.addEventListener('resize', () => {
    console.log('h');
    if (window.innerWidth <= 1100) {
        closeTuples(num_pages);
    } else {
        for (let i = 0; i<tuples.length; i++) {
            tuples[i].style.display = 'table-row';
        }
    }
})

function changePage(event) {
    for (let i=0; i<control_pages.children.length; i++) {
        control_pages.children[i].classList.remove('active');
    }
    event.target.classList.add('active');

    num_pages = Number(event.target.textContent)*8;
    closeTuples(num_pages);
}

function closeTuples(el) {
    for (let i = 0; i<tuples.length; i++) {
        if (i>el-9 && i<el) {
            tuples[i].style.display = 'table-row';
            continue
        }
        tuples[i].style.display = 'none';
    }
}