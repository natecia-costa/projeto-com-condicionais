var res = document.getElementById('res')
var img = document.getElementById('imagem')
var horario = new Date()
var hora = horario.getHours() 
var minuto = horario.getMinutes()

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

