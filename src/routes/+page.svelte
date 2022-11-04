<script>
// @ts-nocheck

    import AudioPlayer, { stopAll } from './AudioPlayer.svelte'
    let audio = [
        'https://sveltejs.github.io/assets/music/strauss.mp3'
        , 'https://sveltejs.github.io/assets/music/holst.mp3'
        , 'https://sveltejs.github.io/assets/music/satie.mp3'
    ,'https://audio-previews.elements.envatousercontent.com/files/275650505/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22EYZKVKN-the-sad-minimal-piano-background.mp3%22',
    "https://www.vizzed.com/videogames/switch/music/Pok%C3%A9mon%20-%20Let's%20Go%20Pikachu!/13%20A%20Trainer%20Appears%20(Boy%20Version).mp3"]
    
    let current = 0
    let playing = false
    let currentAudio = audio[current]
    let Name = ['Strauss', 'Holst', 'Satie', 'Piano', 'Pokemon']
    let CurrentSongName = Name[current]

    function play() {
        playing = true
        currentAudio = audio[current]

        // stop all other players
        stopAll()

        // play the current one
        const player = document.querySelector('audio')
        player.play()
    }

    function pause() {
        playing = false
    
        // pause the current one

        const player = document.querySelector('audio')
        player.pause()
    }

    function next() {
        current = (current + 1) % audio.length
        currentAudio = audio[current]
        CurrentSongName = Name[current]
        play()
    }

    function prev() {
        current = (current - 1 + audio.length) % audio.length
        currentAudio = audio[current]
        CurrentSongName = Name[current]
        play()
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(audio.length));
    }
    function shuffle() {
        current = (getRandomInt(audio.length))
        currentAudio = audio[current]
        CurrentSongName = Name[current]
        play()
    }
    
</script>
<!-- svelte-ignore a11y-missing-attribute -->
<html>
<body>
<div class='player'>
<img src='https://source.unsplash.com/random/500x500/?music/' />
<h1>{CurrentSongName}</h1>
<div class='musicPlayer'>
    <AudioPlayer src={currentAudio} playing={playing} />
</div>
<div class='controls'>
    <button on:click={prev}>Prev</button>
    <button on:click={playing ? pause : play}>{playing ? 'Pause' : 'Play'}</button>
    <button on:click={shuffle}>shuffle</button>
    <button on:click={next}>Next</button>
</div>
</div>
</body>
</html>


<style>
    body {
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(to bottom right, #b968c5, skyblue);
    }
  
    button {
        /* center */
        border-radius: 5px;
        border: 1px solid #000;
        background-color: #fff;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }

    div {
      background-color: grey;
    }
    .musicPlayer {

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .controls {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .player{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: grey;
    }
</style>