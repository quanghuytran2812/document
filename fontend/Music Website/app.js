const $ = document.querySelector.bind(document);

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];
let inputSearch = document.getElementsByTagName('input')[0];

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

// Functions of web music
const pic_music = $('#pic_music');
const title_music = $('#title_music');
const subtitle_music = $('.subtitle_music');
const audio_music = $('#audio_music');
const video_music = $('.video_song');
const playBtn = $('.bi-play-fill');
const wave = $('#wave');
const currentStart = $('#currentStart');
const currentEnd = $('#currentEnd');
const seek = $('#seek');
const bar2 = $('#bar2');
const dot = $('.dot');
const vol_icon = $('#vol_icon');
const vol = $('#vol');
const vol_bar = document.getElementsByClassName('vol_bar')[0];
const vol_dot = $('#vol_dot');
const prevbtn = $('#prevbtn');
const nextbtn = $('#nextbtn');
const download_music = $('#download_music');
const shuffle = document.getElementsByClassName('shuffle')[0];
const search_results = $('.search_results');
const menu_song = $('.menu_song');
const pop_songList = $('.pop_song');
const contentTitle_music = $('.contentTitle_music');
const contentSub_music = $('.contentSub_music');

const app = {
    currentIndex: 0,
    isRepeat: false,
    isRandom: false,
    songs: [
        {
            name: "Typa Girl",
            singer: "BLACKPINK",
            path: "music/Typa Girl.mp3",
            image: "https://i.ytimg.com/vi/G888DDnYgU4/maxresdefault.jpg",
            video: "video/10.mp4"
        },
        {
            name: "PHONG DẠ HÀNH",
            singer: "BT x LVT REMIX",
            path: "music/PHONG DẠ HÀNH.mp3",
            image: "https://wallpaperaccess.com/full/7312026.jpg",
            video: "video/3.mp4"
        },
        {
            name: "On My Way",
            singer: "Alan Walker",
            path: "music/Alan Walker Sabrina Carpenter  Farruko   On My Way.mp3",
            image: "https://upload.wikimedia.org/wikipedia/vi/2/27/Alan_Walker-B%C3%ACa_On_My_Way.png",
            video: "video/5.mp4"
        },
        {
            name: "Vicetone",
            singer: "Nevada ft Cozi Zuehlsdorff",
            path:
                "music/Vicetone.mp3",
            image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
            video: "video/12.mp4"
        },
        {
            name: "Fearless",
            singer: "Lost Sky",
            path:
                "music/Fearless ptII feat Chris Linton NCS Release.mp3",
            image: "https://4kwallpapers.com/images/walls/thumbs_2t/1003.jpg",
            video: "video/1.mp4"
        },
        {
            name: "The Drum",
            singer: "Alan Walker",
            path:
                "music/The Drum.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-r7Y_mFYyNZj-Bp0SKqFknfSRUwJ78cqHw&usqp=CAU",
            video: "video/2.mp4"
        },
        {
            name: "Middle of the Night",
            singer: "Elley Duhé",
            path:
                "music/Middle of the Night.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38hUQLVurHSUW8xI1fxxreQ81FvgXdXOctrttx4jeRmi6broSiccC3nYKI8JQ8kWeXwI&usqp=CAU",
            video: "video/4.mp4"
        },
        {
            name: "renegade x under the influence x i was never there",
            singer: "The Weeknd x Chris brown x Aaryan shah",
            path:
                "music/renegade x under the influence x i was never there.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEvvz5Dsv9ZPW-C_UXv3kDvQ4pzAJ1IR9mw&usqp=CAU",
            video: "video/11.mp4"
        },
        {
            name: "MURDER IN MY MIND",
            singer: "KORDHELL",
            path:
                "music/MURDER IN MY MIND.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQB4ZctQJwakhgOTzPoAACKyE_enhfR6yhg_HjYDXZtUE68A_Ap3io6Azz-A63dLcm28U&usqp=CAU",
            video: "video/Ghost of Tsushima Sakai_480p.mp4"
        },
        {
            name: "WITH YOU (NGẪU HỨNG)",
            singer: "HOAPROX, NICK STRAND & MIO",
            path:
                "music/WITH YOU NGẪU HỨNG.mp3",
            image: "https://i.pinimg.com/originals/a9/a6/4c/a9a64c54af8059a922d2432256c9b7e0.jpg",
            video: "video/Gin and Hotaru  Hotarubi no mori e edit gin disappears_480p.mp4"
        },
        {
            name: "PLAY",
            singer: "Alan Walker, K-391, Tungevaag, Mangoo",
            path:
                "music/PLAY.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgMJXg0EWyO9HZwsrzLu2_KsohulyZCxTkuw&usqp=CAU",
            video: "video/8.mp4"
        },
        {
            name: "Ánh Sao Và Bầu Trời",
            singer: "T.R.I x Cá",
            path:
                "music/Ánh-Sao-Và-Bầu-Trời-TRI-x-Cá-Official-Audio.mp3.mp3",
            image: "https://i.ytimg.com/vi/Y-ULEvLh9AY/maxresdefault.jpg",
            video: "video/7.mp4"
        },
        {
            name: "Royalty (ft. Neoni)",
            singer: "Egzod & Maestro Chives",
            path:
                "music/Egzod  Maestro Chives ft Neoni  Royalty   Slowed  Reverb.mp3",
            image: "https://i1.sndcdn.com/artworks-YDu3cQAsEin8CWGb-J7qSyw-t500x500.jpg",
            video: "video/9.mp4"
        },
        {
            name: "My Destiny",
            singer: "Lyn(린)",
            path: "music/My Destiny.mp3",
            image: "https://0.soompi.io/wp-content/uploads/2016/04/18131109/my-love-from-another-star-kdrama.jpg?s=900x600&e=t",
            video: "video/15.mp4"
        },
        {
            name: "I get a little bit lonely",
            singer: "Kim na young",
            path: "music/I get a little bit lonely MV.mp3",
            image: "https://ss-images.saostar.vn/2019/06/06/5358816/untitled-2.jpg",
            video: "video/16.mp4"
        }
    ],

    render: function () {
        let htmls = this.songs.map((song, index) => {
            return `
                <li class="songItem ${index === this.currentIndex ? 'active' : ""}" data-index="${index}">
                    <span>${index}</span>
                    <img src="${song.image}">
                    <h5>${song.name} <br>
                        <div class="subtitle">${song.singer}</div>
                    </h5>
                    <i class="bi ${index === this.currentIndex ? 'bi-pause-fill' : "bi-play-fill"}"></i>
                </li>
            `
        });

        $('.menu_song').innerHTML = htmls.join('');
    },

    renderPopularSong: function () {
        let htmls = this.songs.map((song, index) => {
            return `
                <li class="songItem ${index === this.currentIndex ? 'active' : ""}" data-index="${index}">
                    <div class="img_play">
                        <img src="${song.image}" alt="">
                        <i class="bi ${index === this.currentIndex ? 'bi-pause-fill' : "bi-play-fill"}"></i>
                    </div>          
                    <h5>${song.name} <br>
                        <div class="subtitle">${song.singer}</div>
                    </h5>
                </li>
            `
        });

        $('.pop_song').innerHTML = htmls.join('');
    },

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex];
            }
        })
    },

    loadCurrentSong: function () {
        pic_music.src = this.currentSong.image;
        title_music.textContent = this.currentSong.name;
        subtitle_music.textContent = this.currentSong.singer;
        audio_music.src = this.currentSong.path;
        video_music.src = this.currentSong.video;
        contentTitle_music.textContent = this.currentSong.name;
        contentSub_music.textContent = this.currentSong.singer;
    },

    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
        download_music.href = this.currentSong.path;
    },

    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
        download_music.href = this.currentSong.path;
    },

    playRandomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor((Math.random() * this.songs.length) + 1)
        } while (newIndex === this.currentIndex);

        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    loadsearch: function () {
        //Search data
        let htmls = this.songs.map((song, index) => {
            return `
            <a href="#${index}" class="card_Search">
            <img src="${song.image}">
                        <div class="content">
                            <h5>${song.name}</h5>
                            <div class="subtitle">${song.singer}</div>
                        </div>
            </a>
            `
        });

        $('.search_results').innerHTML = htmls.join('');
    },

    scrollToActiveSong: function () {
        setTimeout(() => {
            $('.songItem.active').scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest"
            })
        }, 250)
    },

    handleEvents: function () {
        const _this = this;

        playBtn.onclick = function () {
            if (audio_music.paused || audio_music.currentTime <= 0) {
                audio_music.play();
                wave.classList.add('active1');
                playBtn.classList.remove('bi-play-fill');
                playBtn.classList.add('bi-pause-fill');
            } else {
                audio_music.pause();
                wave.classList.remove('active1');
                playBtn.classList.remove('bi-pause-fill');
                playBtn.classList.add('bi-play-fill');
            }
        }

        inputSearch.onkeyup = function () {
            let input_value = inputSearch.value.toLowerCase();
            let items = document.getElementsByClassName('card_Search');

            for (let index = 0; index < items.length; index++) {
                let as = items[index].getElementsByClassName('content')[0];
                let text_value = as.textContent || as.innerHTML;

                if (text_value.toLowerCase().indexOf(input_value) > -1) {
                    items[index].style.display = "flex";
                } else {
                    items[index].style.display = "none";
                }

                if (input_value == 0) {
                    search_results.style.display = "none";
                } else {
                    search_results.style.display = "";
                }
            }
        }

        audio_music.ontimeupdate = function () {
            let music_curr = audio_music.currentTime;
            let music_dur = audio_music.duration;

            let min1 = Math.floor(music_dur / 60)
            let sec1 = Math.floor(music_dur % 60)

            if (sec1 < 10) {
                sec1 = `0${sec1}`;
            }
            currentEnd.innerText = `${min1}:${sec1}`

            let min2 = Math.floor(music_curr / 60)
            let sec2 = Math.floor(music_curr % 60)

            if (sec2 < 10) {
                sec2 = `0${sec2}`;
            }
            currentStart.innerText = `${min2}:${sec2}`

            let progressbar = parseInt((music_curr / music_dur) * 100)
            seek.value = progressbar;

            let seekbar = seek.value;
            bar2.style.width = `${seekbar}%`
            dot.style.left = `${seekbar}%`
        }

        seek.onchange = function () {
            audio_music.currentTime = seek.value * audio_music.duration / 100;
        }

        vol.onchange = function () {
            if (vol.value == 0) {
                vol_icon.classList.remove('bi-volume-down-fill');
                vol_icon.classList.remove('bi-volume-up-fill');
                vol_icon.classList.add('bi-volume-off-fill');
            }
            if (vol.value > 0) {
                vol_icon.classList.remove('bi-volume-up-fill');
                vol_icon.classList.remove('bi-volume-off-fill');
                vol_icon.classList.add('bi-volume-down-fill');
            }
            if (vol.value > 50) {
                vol_icon.classList.add('bi-volume-up-fill');
                vol_icon.classList.remove('bi-volume-down-fill');
                vol_icon.classList.remove('bi-volume-off-fill');
            }
            let vol_a = vol.value;
            vol_bar.style.width = `${vol_a}%`;
            vol_dot.style.left = `${vol_a}%`;
            audio_music.volume = vol_a / 100;
        }

        nextbtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong();
            }
            audio_music.play();
            wave.classList.add('active1');
            playBtn.classList.remove('bi-play-fill');
            playBtn.classList.add('bi-pause-fill');
            _this.render();
            _this.scrollToActiveSong();
        }

        prevbtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong();
            }
            audio_music.play();
            wave.classList.add('active1');
            playBtn.classList.remove('bi-play-fill');
            playBtn.classList.add('bi-pause-fill');
            _this.render();
            _this.scrollToActiveSong();
        }

        shuffle.onclick = function () {
            let musicI = shuffle.innerHTML;

            switch (musicI) {
                case "icon_music":
                    _this.isRepeat = !_this.isRepeat
                    shuffle.classList.add('bi-arrow-repeat');
                    shuffle.classList.remove('bi-music-note');
                    shuffle.classList.remove('bi-shuffle');
                    shuffle.innerHTML = 'repeat'
                    break;
                case "repeat":
                    _this.isRepeat = !_this.isRepeat
                    _this.isRandom = !_this.isRandom
                    shuffle.classList.remove('bi-arrow-repeat');
                    shuffle.classList.remove('bi-music-note');
                    shuffle.classList.add('bi-shuffle');
                    shuffle.innerHTML = 'random'
                    break;
                case "random":
                    _this.isRandom = !_this.isRandom
                    shuffle.classList.remove('bi-arrow-repeat');
                    shuffle.classList.add('bi-music-note');
                    shuffle.classList.remove('bi-shuffle');
                    shuffle.innerHTML = 'icon_music'
                    break;
            }
        }

        audio_music.onended = function () {
            if (_this.isRepeat) {
                audio_music.play();
            } else {
                nextbtn.click();
            }
        }

        menu_song.onclick = function (e) {
            const songNode = e.target.closest('.songItem:not(.active)');

            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index);
                _this.loadCurrentSong();
                _this.render();
                _this.renderPopularSong();
                playBtn.onclick();
                download_music.href = _this.currentSong.path;
                _this.scrollToActiveSong();
            }
        }

        pop_songList.onclick = function (e) {
            const songNode = e.target.closest('.songItem:not(.active)');

            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index);
                _this.loadCurrentSong();
                _this.renderPopularSong();
                _this.render();
                playBtn.onclick();
                download_music.href = _this.currentSong.path;
                _this.scrollToActiveSong();
            }
        }
    },

    start: function () {
        this.render();
        this.renderPopularSong();

        this.defineProperties();
        this.handleEvents();
        this.loadCurrentSong();
        this.loadsearch();
    }
}

app.start();
