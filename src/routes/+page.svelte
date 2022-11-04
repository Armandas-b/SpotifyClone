<script>
// @ts-nocheck

    import AudioPlayer, { stopAll } from './AudioPlayer.svelte'
    let audio = [
        'https://sveltejs.github.io/assets/music/strauss.mp3'
        , 'https://sveltejs.github.io/assets/music/holst.mp3'
        , 'https://sveltejs.github.io/assets/music/satie.mp3']
    
    let current = 0
    let playing = false
    let currentAudio = audio[current]

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
        play()
    }

    function prev() {
        current = (current - 1 + audio.length) % audio.length
        currentAudio = audio[current]
        play()
    }

    function onended() {
        next()

    }

    // progress bar of the music 

    let progress = 0

    function ontimeupdate() {
        const player = document.querySelector('audio')
        progress = player.currentTime / player.duration * 100
    }

    function onseeking() {
        const player = document.querySelector('audio')
        player.currentTime = player.duration * progress / 100
    }

    function onseeked() {
        const player = document.querySelector('audio')
        player.currentTime = player.duration * progress / 100
    }

    function onprogress() {
        const player = document.querySelector('audio')
        progress = player.currentTime / player.duration * 100
    }

</script>
<!-- svelte-ignore a11y-missing-attribute -->
<html>
<body>

<div class='musicPlayer'>
    <AudioPlayer src={currentAudio} playing={playing} />
</div>
<div>
    <!-- progress bar for music -->
    <div>
        <div style="width: {progress}%; background-color: #000; height: 5px;"></div>
    </div>
    <div class="buttonCluster">
    <button on:click={prev}>
        Prev
    </button>
    <button on:click={play}>
        Play

    </button>
    <button on:click={pause}>
        Pause

    </button>

    <button on:click={next}>
        Next
    </button>
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
    .buttonCluster{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>