{
    const buyTickets = document.querySelectorAll('.btn-ticket');
    const layout = document.querySelector('.layout');
    const closes = document.querySelectorAll('.btn-close')
    const layoutBox = document.querySelector('.layout__box')

    buyTickets.forEach((buyTicket) => {
        buyTicket.onclick = function() {
            layout.classList.add('layout--active')
        }
    })

    closes.forEach((close) =>{
        close.onclick = function () {
            layout.classList.remove('layout--active')
        }
    })

    layout.onclick = function() {
        layout.classList.remove('layout--active')
    }

    layoutBox.addEventListener('click', function(event) {
        event.stopPropagation()
    })

}

