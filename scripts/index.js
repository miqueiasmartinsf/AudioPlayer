import { listaMusicas } from "./music.js";

// Control Buttons
let shuffleButton = document.getElementById('shuffle');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let playButton = document.getElementById('play');
let likeButton = document.getElementById('like');
//

let albumImageContainer = document.querySelector('.albumimagecontainer');
let imagemAtualLike = '../buttons/hearth.png'
//
let audioPlayer = document.getElementById('audioplayer');
let imagemAtualPlay = "../buttons/play.png"
let musicIndex = 0;
let shuffleVerify = false;
let musicTitle = document.getElementById('musictitle');
let musicDescription = document.getElementById('musicdescription');

let musicPlayingVerify = false
//

// Musicas Curtidas

let musicasCurtidas = []

//

playButton.addEventListener('click',function(){

    if(musicPlayingVerify = false){
        musicPlayingVerify = true
    }else{
        musicPlayingVerify = false
    }

    if(imagemAtualPlay == '../buttons/play.png'){
        playButton.innerHTML = '<img src="../buttons/pause.png" alt="Imagem2">';
        imagemAtualPlay = "../buttons/pause.png"

    }else {
        playButton.innerHTML = '<img src="../buttons/play.png" alt="Imagem1">'
        imagemAtualPlay = "../buttons/play.png"
    }

    audioPlayer.setAttribute('src',listaMusicas[musicIndex].url);

    audioPlayer.toggleAttribute('autoplay');

    albumImageContainer.innerHTML = `<img src="${listaMusicas[musicIndex].img}" alt="Imagem2">`

    musicTitle.innerText = listaMusicas[musicIndex].nome;
    musicDescription.innerText = listaMusicas[musicIndex].artista

})

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        if(imagemAtualPlay == '../buttons/play.png'){
            playButton.innerHTML = '<img src="../buttons/pause.png" alt="Imagem2">';
            imagemAtualPlay = "../buttons/pause.png"
    
        }else {
            playButton.innerHTML = '<img src="../buttons/play.png" alt="Imagem1">'
            imagemAtualPlay = "../buttons/play.png"
        }
    
        audioPlayer.setAttribute('src',listaMusicas[musicIndex].url);
    
        audioPlayer.toggleAttribute('autoplay');
    
        albumImageContainer.innerHTML = `<img src="${listaMusicas[musicIndex].img}" alt="Imagem2">`
    
        musicTitle.innerText = listaMusicas[musicIndex].nome;
        musicDescription.innerText = listaMusicas[musicIndex].artista
    }
  }

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

    if(listaMusicas[musicIndex].favorite == false){
        likeButton.innerHTML = '<img src="../buttons/hearth.png" alt="Imagem1">'
        imagemAtualLike = "../buttons/hearth.png"
    }else{
        likeButton.innerHTML = '<img src="../buttons/hearthblack.png" alt="Imagem2">';
        imagemAtualLike = "../buttons/hearthblack.png"

    }
    

    
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

    if(listaMusicas[musicIndex].favorite == false){
        likeButton.innerHTML = '<img src="../buttons/hearth.png" alt="Imagem1">'
        imagemAtualLike = "../buttons/hearth.png"
    }else{
        likeButton.innerHTML = '<img src="../buttons/hearthblack.png" alt="Imagem2">';
        imagemAtualLike = "../buttons/hearthblack.png"
    }

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


likeButton.addEventListener('click',function(){

    
    if(imagemAtualLike == '../buttons/hearth.png'){
        likeButton.innerHTML = '<img src="../buttons/hearthblack.png" alt="Imagem2">';
        imagemAtualLike = "../buttons/hearthblack.png"

    }else {
        likeButton.innerHTML = '<img src="../buttons/hearth.png" alt="Imagem1">'
        imagemAtualLike = "../buttons/hearth.png"
    }

    
    let musicList = document.querySelector('.musiclist');

    let musicLibraryDiv = document.createElement('div');

    let nomeMusicaDiv = document.createElement('div');

    let nomeMusicaDivH1 = document.createElement('h1');

    let nomeAutor = document.createElement('p');


    let playButtonMusicDiv = document.createElement('div')


    let nomeAutorDiv = document.createElement('div');

    if( listaMusicas[musicIndex].favorite == false){
        listaMusicas[musicIndex].favorite = true
        let likedMusic = listaMusicas[musicIndex].nome;
        musicasCurtidas.push(likedMusic);

        nomeMusicaDivH1.innerText = listaMusicas[musicIndex].nome

        nomeMusicaDivH1.className = 'musictitle'


        nomeMusicaDiv.appendChild(nomeMusicaDivH1);


        musicLibraryDiv.className = 'music';
        
        musicLibraryDiv.id = listaMusicas[musicIndex].nome

        nomeAutor.innerText = listaMusicas[musicIndex].artista
        nomeAutorDiv.appendChild(nomeAutor);
        nomeAutorDiv.className = 'nomeautor'


        //Play Music Button

        playButtonMusicDiv.className = 'playbuttonmusicdiv'

        let playButtonMusic = document.createElement('div');

        playButtonMusic.className = 'plaubuttonmusic'

        playButtonMusicDiv.appendChild(playButtonMusic);


        playButtonMusic.innerHTML = '<img src="../buttons/play.png" alt="Imagem1">'

        let imagemAtualPlayMusic = '../buttons/play.png'


        playButtonMusic.addEventListener('click',function(){
            

        for(let i = 0; i < listaMusicas.length; i++){
            if(listaMusicas[i].nome ==  musicLibraryDiv.id){
                if(musicPlayingVerify == true){
                    audioPlayer.setAttribute('src',listaMusicas[i].url);
                    audioPlayer.toggleAttribute('autoplay');
                    musicPlayingVerify = true
                }else{
                    audioPlayer.toggleAttribute('autoplay');
                    audioPlayer.setAttribute('src',listaMusicas[i].url);
                    audioPlayer.toggleAttribute('autoplay');
                    musicPlayingVerify = true
                }

            
            }
        }

        })

        musicLibraryDiv.appendChild(playButtonMusicDiv);
        musicLibraryDiv.appendChild(nomeMusicaDiv);
        musicLibraryDiv.appendChild(nomeAutorDiv);


        musicList.appendChild(musicLibraryDiv);
        
    }else{

        let removeId = listaMusicas[musicIndex].nome

        let removeMusic = document.getElementById(removeId);

        removeMusic.remove();



	
		listaMusicas[musicIndex].favorite = false
		
        for(let i = 0; i < musicasCurtidas.length; i++){
            if(listaMusicas[musicIndex].nome == musicasCurtidas[i]){
                musicasCurtidas.splice(i,1);
            }

        }}  
});


// Menu Buttons 

let musicPlayerButton = document.getElementById('musicplayerbutton');

let libraryButton = document.getElementById('librarybutton');

musicPlayerButton.addEventListener('click',function(){
    let musicPlayerContainer = document.querySelector('.maincontainer');
    let libraryContainer = document.querySelector('.libraycontainer');
    
    
    libraryContainer.style.display = 'none';
    musicPlayerContainer.style.display = 'block'
});

libraryButton.addEventListener('click', function(){
    let musicPlayerContainer = document.querySelector('.maincontainer');
    let libraryContainer = document.querySelector('.libraycontainer');
    
    libraryContainer.style.display = 'block';
    musicPlayerContainer.style.display = 'none'
})

//Library 

let musicasCurtidasPlayList = document.getElementById('musicascurtidas');

musicasCurtidasPlayList.addEventListener('click',function(){
    let playListContainer = document.querySelector('.playlistcontainer');
    let musicListContainer = document.querySelector('.musiclist');

    playListContainer.style.display = 'none'
    musicListContainer.style.display = 'block'

})

let prevLibraryButton = document.getElementById('prevlibrary');

prevLibraryButton.addEventListener('click',function(){
    let playListContainer = document.querySelector('.playlistcontainer');
    let musicListContainer = document.querySelector('.musiclist');
    playListContainer.style.display = 'block'
    musicListContainer.style.display = 'none'


    
});