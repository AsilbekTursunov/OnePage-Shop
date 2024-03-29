document.addEventListener(`DOMContentLoaded`, ()=>{
    const open = document.getElementById('open'),
    close = document.getElementById('close'),
    navItems = document.getElementById('navlink-main');

    function menu() {
        open.classList.toggle('hide')
        close.classList.toggle('hide')
    }

    open.addEventListener('click', ()=>{
        navItems.classList.add('translate')
        menu()
    })
    close.addEventListener('click', ()=>{
        navItems.classList.remove('translate')
        menu()
    })

    window.addEventListener('scroll', ()=>{
        if (document.documentElement.scrollTop > 100) {
            document.querySelector('header').style.position = 'fixed'
        }else{
            document.querySelector('header').style.position = 'relative'
        }
    })
    
})


    

