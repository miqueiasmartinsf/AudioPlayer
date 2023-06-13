import { listaMusicas } from "./music.js";

// Control Buttons
let shuffleButton = document.getElementById('shuffle');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let playButton = document.getElementById('play');
let likeButton = document.getElementById('like');
//

let albumImageContainer = document.querySelector('.albumimagecontainer');

//
let audioPlayer = document.getElementById('audioplayer');
let imagemAtualPlay = "../buttons/play.png"
let musicIndex = 0;
let shuffleVerify = false;
let musicTitle = document.getElementById('musictitle');
let musicDescription = document.getElementById('musicdescription');

//

playButton.addEventListener('click',function(){
    
    if(imagemAtualPlay == '../buttons/play.png'){
        playButton.innerHTML = '<img src="../buttons/pause.png" alt="Imagem2">';
        imagemAtualPlay = "../buttons/pause.png"

    }else {
        playButton.innerHTML = '<img src="../buttons/play.png" alt="Imagem1">'
        imagemAtualPlay = "../buttons/play.png"
    }

    audioPlayer.setAttribute('src',listaMusicas[musicIndex].url);

    audioPlayer.toggleAttribute('autoplay');
    console.log(audioPlayer);

    albumImageContainer.innerHTML = `<img src="${listaMusicas[musicIndex].img}" alt="Imagem2">`

    musicTitle.innerText = listaMusicas[musicIndex].nome;
    musicDescription.innerText = listaMusicas[musicIndex].artista

})

nextButton.addEventListener('click', () =>{
    if(musicIndex + 1 == listaMusicas.length){
        musicIndex = 0
        audioPlayer.setAttribute('src',listaMusicas[musicIndex].url);
    }else if(shuffleVerify == true){
        musicIndex = Math.floor(Math.random() * listaMusicas.length);
        audioPlayer.setAttribute('src',listaMusicas[musicIndex].url);
    }else{
        musicIndex++
        audioPlayer.setAttribute('src',listaMusicas[musicIndex].url);
    }
    
    albumImageContainer.innerHTML = `<img src="${listaMusicas[musicIndex].img}" alt="Imagem2">`

    musicTitle.innerText = listaMusicas[musicIndex].nome;
    musicDescription.innerText = listaMusicas[musicIndex].artista
    
});

prevButton.addEventListener('click', () =>{
    if(musicIndex - 1 < 0){
        musicIndex = listaMusicas.length - 1
        audioPlayer.setAttribute('src',listaMusicas[musicIndex].url);
    }else if(shuffleVerify == true){
        musicIndex = Math.floor(Math.random() * listaMusicas.length);
        audioPlayer.setAttribute('src',listaMusicas[musicIndex].url);
    }else{
        musicIndex--
        audioPlayer.setAttribute('src',listaMusicas[musicIndex].url);
    }

    albumImageContainer.innerHTML = `<img src="${listaMusicas[musicIndex].img}" alt="Imagem2">`

    musicTitle.innerText = listaMusicas[musicIndex].nome;
    musicDescription.innerText = listaMusicas[musicIndex].artista

})

shuffleButton.addEventListener('click',function(){
    if(this.style.backgroundColor == 'white'){
        this.style.backgroundColor = ''
    }else{
        this.style.backgroundColor = 'white'
    }
    if(shuffleVerify == false){
        shuffleVerify = true
    }else{
        shuffleVerify = false
    }
});


let imagemAtualLike = '../buttons/hearth.png'

likeButton.addEventListener('click',function(){
    if(imagemAtualLike == '../buttons/hearth.png'){
        likeButton.innerHTML = '<img src="../buttons/hearthblack.png" alt="Imagem2">';
        imagemAtualLike = "../buttons/hearthblack.png"

    }else {
        likeButton.innerHTML = '<img src="../buttons/hearth.png" alt="Imagem1">'
        imagemAtualLike = "../buttons/hearth.png"
    }

})
