function carregar(){
    var msg= document.getElementById('msg')
    var img=  document.getElementById('imagem')
    var data= new Date()
    var hora= data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML= `Agora são <strong>${hora}</strong> horas e<strong> ${minuto}</strong> minutos`

    if (hora >= 0 && hora < 6){
        img.src = 'img/madrugada.png'
        document.body.style.background = '#383A35'
        //Boa Madrugada

    } else if(hora>= 6 && hora < 12){
        img.src = 'img/manha.jpg'
        document.body.style.background = '#D2A458'

        //Bom dia
    } else if(hora>= 12 && hora <18){
        //Boa Tarde

        img.src = 'img/tarde.jpg'
        document.body.style.background = '#D7A70A'
        
    } else{
        img.src = 'img/noite.jpg'
        document.body.style.background = '#2D5490'
        //Boa Noite
    }

}