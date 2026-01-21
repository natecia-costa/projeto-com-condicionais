let res = document.getElementById('res')
let img = document.getElementById('imagem')
let horario = new Date()
let hora = horario.getHours() 
let minuto = horario.getMinutes()

res.innerHTML = `<p>Agora são ${hora}:${minuto}</p>`

if (hora >= 5 && hora < 12) {
    res.innerHTML += '<p>Bom dia!</p>'
    img.src = 'imagens/manha.jpg'    
}
else if (hora < 18) {
    res.innerHTML += '<p>Boa tarde!</p>'
    img.src = 'imagens/tarde.jpg'
}
else {
    res.innerHTML += '<p>Boa noite!</p>'
    img.src = 'imagens/noite.jpg'
}

