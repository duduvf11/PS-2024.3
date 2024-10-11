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