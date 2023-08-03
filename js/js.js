$(() => {
    $('.qcgz').click(() => {
        localStorage.removeItem('xzjs')
    })
    $('.jiesuanan').click(() => {
        var dqgz = $('#gs').val() * $('#zgfyuan').val()
        $('.jieguojs').children('span').text(dqgz)
        var zgys = Number(localStorage.getItem('xzjs')) + Number(dqgz)
        $('.zqxz').children('span').text(zgys)
        localStorage.setItem('xzjs', zgys)
    })
})