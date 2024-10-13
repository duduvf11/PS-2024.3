function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuGreyView = document.querySelector('.grey-view')

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        menuGreyView.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
        menuGreyView.classList.add('open')
    }
}

const controls = document.querySelectorAll('.control');

let currentItem = 0;
const items = document.querySelectorAll('.card-item');
const maxItems = items.length;

controls.forEach(control =>{
    control.addEventListener('click', () =>{
        const isLeft = control.classList.contains("arrow-left")

        if(isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems){
            currentItem = 0;
        }

        if (currentItem < 0){
            currentItem = maxItems - 1;
        }

        items[currentItem].scrollIntoView({
            inline: "center"
        })
    })
})

