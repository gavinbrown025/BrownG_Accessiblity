(() => {

    const vm = new Vue({
        data:{
            isVideo: true,
            isPlaying: false,
            current: {},
            showlyrics: false,
            audioPlayer: new Audio(),
            index: 0,
            music:[
                {
                    name: "Interstate Love Song",
                    artist:"STP",
                    src: "STP_Interstate_Love_Song.mp3",
                    image: "STP.jpg",
                    lyrics:"Waiting On a Sunday afternoon For what I read between the lines Your lies Feelin' Like a hand in rusted shame So do you laugh or does it cry Reply Leavin' On a southern train Only yesterday You lied Promises Of what I seemed to be Only watched the time Go by All of these things you said to me Breathing Is the hardest thing to do With all I've said And all that's dead for…"
                },
                {
                    name: "Companion",
                    artist:"Wide Mouth Mason",
                    src: "Companion.mp3",
                    image: "WideMouthMason.jpg",
                    lyrics:"When I saw the reflection of the sky In the pools of water we drove by In the ditch on the side of the road On the way to the bridge where looking down just right Oh it felt like we were moving Then I caught the waves wrinkle the moon And they kissed my body just beyond the shore I talked you into a stone and skipped you across the water But it was me who was really sinking Lay me down Down on the bottom Come crashing over me Youll be a dancer as I walk beside you Then I saw the buildings leaning in To touch heads where the yellow lines run Looking down on the fool slowly walking What did he feel like he was proving Lay me down Down on the bottom Come crashing over me You'll be dancer as I try to catch you"
                },
            ],
            videos:[
                {
                    name: "Arrival",
                    source: "Arrival.mp4",
                    captions:"Arrival.vtt"
                },
                {
                    name: "Guardians of the Galaxy II",
                    source: "Guardians2.mp4",
                    captions:"Guardians2.vtt"
                },
            ]
        },
        created() {
            this.current = this.videos[0];
        },
        methods: {
            playVideo(video){
                this.pauseAudio();
                this.isVideo = true;
                this.current = video;
            },

            selectAudio(song,index){
                this.isVideo = false;
                this.current = song;
                this.index = index;

                this.audioPlayer.src = `audio/${song.src}`;
                this.audioPlayer.play();

                this.isPlaying = true;
            },
            prevAudio(){
                this.index--;
                if (this.index < 0) {
                    this.index = this.music.length - 1;
                }
                this.current = this.music[this.index];
                this.playAudio(this.music[this.index]);
                console.log(this.index);
            },
            nextAudio(){
                this.index++;
                if (this.index > this.music.length - 1) {
                    this.index = 0;
                }

                this.current = this.music[this.index];
                this.playAudio(this.current);
            },
            pauseAudio(){
                this.audioPlayer.pause();
                this.isPlaying = false;
            },
            playAudio(song){
                this.audioPlayer.src = `audio/${song.src}`;
                this.audioPlayer.play();

                this.isPlaying = true;
            },
            showLyrics(){
                this.showlyrics = this.showlyrics ? false : true;
            }
        },
    }).$mount("#app");


})();