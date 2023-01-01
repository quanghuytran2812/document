const $ = document.querySelector.bind(document);
const PLAYER_STORAGE_KEY = 'TRACK_PLAYER'

const heading = $('header h2');
const cdThumb = $('.cd .cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');

const cd = $('.cd')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            name: "Typa Girl",  
            singer: "BLACKPINK",
            path: "music/Typa Girl.mp3",
            image: "https://i.ytimg.com/vi/G888DDnYgU4/maxresdefault.jpg"
        },
        {
            name: "PHONG DẠ HÀNH",
            singer: "BT x LVT REMIX",
            path: "music/PHONG DẠ HÀNH.mp3",
            image: "https://wallpaperaccess.com/full/7312026.jpg"
        },
        {
            name: "Vicetone",
            singer: "Nevada ft Cozi Zuehlsdorff",   
            path:
                "music/Vicetone.mp3",
            image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
        },        
        {
            name: "Fearless",
            singer: "Lost Sky",   
            path:
                "music/Fearless ptII feat Chris Linton NCS Release.mp3",
            image: "https://4kwallpapers.com/images/walls/thumbs_2t/1003.jpg"
        },
        {
            name: "The Drum",
            singer: "Alan Walker",   
            path:
                "music/The Drum.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-r7Y_mFYyNZj-Bp0SKqFknfSRUwJ78cqHw&usqp=CAU"
        },
        {
            name: "Middle of the Night",
            singer: "Elley Duhé",   
            path:
                "music/Middle of the Night.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38hUQLVurHSUW8xI1fxxreQ81FvgXdXOctrttx4jeRmi6broSiccC3nYKI8JQ8kWeXwI&usqp=CAU"
        },
        {
            name: "renegade x under the influence x i was never there",
            singer: "The Weeknd x Chris brown x Aaryan shah",   
            path:
                "music/renegade x under the influence x i was never there.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEvvz5Dsv9ZPW-C_UXv3kDvQ4pzAJ1IR9mw&usqp=CAU"
        },
        {
            name: "MURDER IN MY MIND",
            singer: "KORDHELL",   
            path:
                "music/MURDER IN MY MIND.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQB4ZctQJwakhgOTzPoAACKyE_enhfR6yhg_HjYDXZtUE68A_Ap3io6Azz-A63dLcm28U&usqp=CAU"
        },
        {
            name: "WITH YOU (NGẪU HỨNG)",
            singer: "HOAPROX, NICK STRAND & MIO",   
            path:
                "music/WITH YOU NGẪU HỨNG.mp3",
            image: "https://i.pinimg.com/originals/a9/a6/4c/a9a64c54af8059a922d2432256c9b7e0.jpg"
        },
        {
            name: "PLAY",
            singer: "Alan Walker, K-391, Tungevaag, Mangoo",   
            path:
                "music/PLAY.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgMJXg0EWyO9HZwsrzLu2_KsohulyZCxTkuw&usqp=CAU"
        }
    ],

    setConfig: function(key, value){
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },

    render: function () {
        const htmls = this.songs.map((song,index) => {
            return `
            <div class="song ${index === this.currentIndex?"active":""}" data-index="${index}">
                <div class="thumb" 
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>`
        });

        playlist.innerHTML = htmls.join('');
    },

    defineProperties: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents: function(){
        const cdWidth = cd.offsetWidth
        const _this = this

        //Xử lí CD quay
        const cdThumbAnimation = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ],{
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimation.pause();
        //Xử lí phóng to thu nhỏ cd khi kéo list nhạc
        document.onscroll = function(){
            const scrollTop = window.screenY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop

            cd.style.width = newCdWidth>0?newCdWidth + 'px':0;
            cd.style.opacity = newCdWidth / cdWidth
        }

        //Xử lí khi play 
        playBtn.onclick = function(){
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        //Khi song play
        audio.onplay = function(){
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimation.play();
        }

        //Khi song pause 
        audio.onpause = function(){
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimation.pause();
        }

        //Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }
        }

        //Xử lí khi tua
        progress.onchange = function(){
            const seekTime = progress.value * audio.duration / 100;
            audio.currentTime = seekTime;
        }

        //Xử lí khi click vào btn next sẽ phát bài hát tiếp theo
        nextBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong();
            }else{
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }
        
        //Xử lí khi click vào btn prev sẽ phát bài hát phía sau
        prevBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong();
            }else{
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }

        //Xử lí khi click vao btn random sẽ phát ra những bài hát ngẫu nhiên
        randomBtn.onclick = function(){
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        //Xử lí khi bài hát kết thúc thì auto sang bài tiếp theo
        audio.onended = function(){
            if (_this.isRepeat) {
                audio.play();
            }else{
                nextBtn.click();
            }
        }

        //Xử lí lặp lại bài hát
        repeatBtn.onclick = function(){
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        //khi click vào bài hát
        playlist.onclick = function(e){
            const songNode = e.target.closest('.song:not(.active)');
            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index);
                _this.loadCurrentSong();
                _this.render();
                audio.play();
            }
        }
    },

    loadCurrentSong: function(){
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

    loadConfig: function(){
        this.isRandom = this.config.isRandom;

        this.isRepeat = this.config.isRepeat;
    },

    nextSong: function(){
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    prevSong: function(){
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1;
        }
        console.log(this.currentIndex);
        this.loadCurrentSong();
    },

    playRandomSong: function(){
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex);

        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    scrollToActiveSong:function(){
        setTimeout(()=>{
            $('.song.active').scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest"
            })
        }, 250)
    },

    start: function () {
        this.loadConfig();
        this.defineProperties();
        this.handleEvents();
        this.loadCurrentSong();
        this.render();

        //Hiển thị trạng thái ban đầu của button repeat and random
        randomBtn.classList.toggle('active', this.isRandom)
        repeatBtn.classList.toggle('active', this.isRepeat)
    }
}

app.start();