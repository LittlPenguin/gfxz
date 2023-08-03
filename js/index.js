window.addEventListener('load', () => {
    var light = document.querySelector('.light')
    var container = document.querySelector('.container')
    var container2 = document.querySelector('.container2')
    var time = document.querySelector('.time')
    var hour = document.querySelector('.hour')
    var min = document.querySelector('.min')
    var cent = document.querySelector('.cent')
    var dates = document.querySelector('.date')
    var span = document.querySelector('span')
    var srinput = document.querySelectorAll('.input')
    var jiesuanan = document.querySelector('.jiesuanan')
    var jieguojs = document.querySelector('.jieguojs')
    var zqxz = document.querySelector('.zqxz')
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    timer()
    function timer() {
        var date = new Date()
        h = date.getHours()
        h = h < 10 ? '0' + h : h
        m = date.getMinutes()
        m = m < 10 ? '0' + m : m
        var s = date.getSeconds()
        var pa = ''
        if (h < 12) {
            pa = 'Am'
        } else {
            pa = 'Pm'
        }
        hour.style.transform = `rotate(${h * 30}deg)`
        min.style.transform = `rotate(${m * 6}deg)`
        cent.style.transform = `rotate(${s * 6}deg)`
        time.innerHTML = h + ':' + m + ` ${pa}`

        dates.innerHTML = days[date.getDay()] + ', ' + month[date.getMonth()]
        span.innerHTML = date.getDate()
    }

    setInterval(timer, 1000)


    light.addEventListener('click', () => {
        container.classList.toggle('active')
        container2.classList.toggle('active')
        srinput[0].classList.toggle('inputcolor')
        srinput[1].classList.toggle('inputcolor')
        jiesuanan.classList.toggle('inputcolor')
        jiesuanan.classList.toggle('bsysdd')
        jieguojs.classList.toggle('inputcolor')
        zqxz.classList.toggle('inputcolor')
    })
})