const btn_sub = document.getElementsByClassName('discount')[0].getElementsByTagName('button')[0];
const sub_img = btn_sub.getElementsByTagName('img')[0];
const sub_p = btn_sub.getElementsByTagName('p')[0];

btn_sub.addEventListener('click', submit);

function submit() { 
    if (btn_sub.name == "success") {
        return
    }
    sub_p.style.opacity = "1";
    sub_img.style.opacity = "1";
    let i = 1;
    const intervalId = setInterval(() => {
        i-=0.2;
        sub_p.style.opacity = `${i}`;
        sub_img.style.opacity = `${i}`;

        if (i<=0) {
            sub_img.src = "./img/footer/send-yes.svg";
            sub_p.textContent = "SUCCESS";

            const intervalId2 = setInterval(() => {
                i+=0.2;
                sub_p.style.opacity = `${i}`;
                sub_img.style.opacity = `${i}`;
                if (i>=1) {
                    btn_sub.name = "success";
                    clearInterval(intervalId2);
                }
            }, 30);
            clearInterval(intervalId);
        }
    }, 30);
}