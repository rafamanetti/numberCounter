function count() {
    var ini =  document.getElementById('txti')
    var fim =  document.getElementById('txtf')
    var passo =  document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossible to count!'  
} else {
    res.innerHTML = ' Counting: <br> '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
        window.alert('´[ERROR] Step must be above 0 | Changing Step to value 1')
        p = 1
    }

    if (i < f) {
        // Growing count
        for (let c = i ; c <= f ; c+= p){
            res.innerHTML += `${c} \u{1F449}`
    }
        res.innerHTML += `\u{1F3C1}`
    } else {
        // Descending count
        for (let c = i ; c >=f ; c -=p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
        
    } 

}