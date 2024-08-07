const Musicplayercontent = `
                           <div id="diarytitle">音樂</div>   
                           <div id="musicplayercontainer">
                                    <div id="musicplayerlist">
                                        <div id="musicplayerlisttitle">
                                        播放清單
                                        <div id="addmusicbtn">
                                        <img src="./Public/musicplayer/plus.png" width="30px" draggable="false">
                    
                                        </div>
                                        <input type="file" id="filemusic" accept="audio/mp3" style="display:none;" multiple>
                                        </div>
                                        <div id="musicplayerlistcontent">
                                            
                                            
                                        </div>  
                                    </div>
                                    <div id="musicplayer">
                                            <div id="musicplayerleft">
                                                <div id="musicplayericon"><img src="./Public/musicplayer/musicicon.png" width="100px" draggable="false"></div>
                                                <div id="musicplayername">無音樂</div>
                                            </div>
                                            <div id="musicplayermid">
                                                 <div id="musicplayercontrol">
                                                    <div id="musicplayercontrolup">
                                                        <div id="randomsongbtn" >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="CurrentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
                                                              <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"/>
                                                              <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"/>
                                                            </svg>
                                                        </div>
                                                        <div id="prevsongbtn" class="controlbtn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#333" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                                              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                                                            </svg>
                                                        </div>
                                                        <div id="playbtn" class="controlbtn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#333" class="bi bi-play-fill" viewBox="0 0 16 16">
                                                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                                              </svg>
                                                        </div>
                                                        <div id="nextsongbtn" class="controlbtn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#333" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                                            </svg>
                                                        </div>
                                                        <div id="repeatsongbtn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="CurrentColor" class="bi bi-repeat" viewBox="0 0 16 16">
                                                              <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
                                                            </svg>
                                                        </div>  

                                                    </div>
                                                    <div id="musicplayercontroldown">
                                                        <div id="musicplayercurrenttime">0:00</div>
                                                        <div id="musicplayerprogress">
                                                            <div id="musicplayerprogressbar"></div>
                                                        </div>  
                                                        <div id="musicplayerduration">3:00</div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div id="musicplayerright"></div>
                                    </div>  
                            </div>

                           `;

let Songs = [
];

let musicloop = false;
let randommusic = false;


function rendersongs() {
    let musicplayerlistcontent = document.getElementById('musicplayerlistcontent');
    let html = "";
    document.getElementById('addmusicbtn').title = "自訂添加音樂";
    document.getElementById('addmusicbtn').onclick = function () {
        document.getElementById('filemusic').click();
    };
    document.getElementById('filemusic').onchange = function () {
        uploadmusics();
    }

    Songs.forEach(song => {
        html += `
                <div class="musicplayerlistitem" id="${song.id}">
                    <div class="musicindex">${song.id + 1}</div>
                    <div class="musicicon"><img src="./Public/musicplayer/musicicon.png" width="50px" draggable="false"></div>
                    <div class="musicname">${song.name}</div>
                    <div class="musicduration">${song.duration}</div>
                </div>
                `;
    });

    setTimeout(() => {
        if (Songs.length <= 0) {
            document.getElementById('musicplayerlistcontent').innerHTML = `<div id="nomusic">目前沒有音樂，趕緊去添加吧！</div>`;
        }
    })

    musicplayerlistcontent.innerHTML = html;
}


let currentAudio = null;
let curplayersongs = [];
let curplayerindex = -1;


function showmusicplayer() {
    CurPage = "Musicplayer";
    if (alreadyloadmusicplayer === false) {
        Content.innerHTML = Musicplayercontent;
        rendersongs();
        document.querySelectorAll('.musicplayerlistitem').forEach(item => {
            let target = item;
            item.onclick = function () {
                handleclickmusic(target);
            };
        });
    }
    setTimeout(() => {
        alreadyloadmusicplayer = true;
    }, 100)

}

function handleclickmusic(target) {
    let targetIcon = target.querySelector('.musicicon');
    let targetName = target.querySelector('.musicname');
    let index = target.id;

    targetIcon.classList.add('playing');
    targetName.style.fontWeight = "bold";

    playmusic(index);

    document.querySelectorAll('.musicplayerlistitem').forEach(item => {
        if (item != target) {
            let icon = item.querySelector('.musicicon');
            let name = item.querySelector('.musicname');
            icon.classList.remove('playing');
            name.style.fontWeight = "normal";
        }
    });
}



function playmusic(index) {

    let randomsongbtn = document.getElementById('randomsongbtn');

    // 如果有音樂正在播放，先暫停並歸零
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    curplayerindex = index;

    // 如果是隨機播放
    randomsongbtn.title = "隨機播放";
    randomsongbtn.onclick = function () {
        if (randommusic) {
            randommusic = false;
            randomsongbtn.style.color = "rgb(167, 167, 167)";
        } else {
            randommusic = true;
            randomsongbtn.style.color = "black";
        }
    }
    currentAudio = new Audio(Songs[index].url);
    currentAudio.play();
    currentAudio.loop = musicloop;
    curplayersongs = Songs;
    curplayerindex = index;

    // 處理播放按鈕
    let playbtn = document.getElementById('playbtn');
    let musicplayericon = document.getElementById('musicplayericon').querySelector('img');

    playbtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#333" class="bi bi-pause-fill" viewBox="0 0 16 16">
                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
                         </svg>`;
    musicplayericon.classList.add('playing');

    playbtn.onclick = function () {
        if (currentAudio.paused) {
            currentAudio.play();
            playbtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#333" class="bi bi-pause-fill" viewBox="0 0 16 16">
                                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
                                 </svg>`;
            musicplayericon.classList.add('playing');
        } else {
            currentAudio.pause();
            playbtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#333" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                 </svg>`;
            musicplayericon.classList.remove('playing');
        }
    };

    // 更新播放進度條
    let musicplayerprogress = document.getElementById('musicplayerprogress');
    let progressbar = document.getElementById('musicplayerprogressbar');
    let currenttime = document.getElementById('musicplayercurrenttime');
    let duration = document.getElementById('musicplayerduration');

    musicplayerprogress.onclick = function (e) {
        let pos = (e.offsetX / musicplayerprogress.offsetWidth) * currentAudio.duration;
        currentAudio.currentTime = pos;
    };

    currentAudio.addEventListener('timeupdate', function () {
        let progress = (currentAudio.currentTime / currentAudio.duration) * 100;
        progressbar.style.width = progress + "%";
        currenttime.innerHTML = formatTime(currentAudio.currentTime);
    });

    currentAudio.addEventListener('loadedmetadata', function () {
        duration.innerHTML = formatTime(currentAudio.duration);
    });

    // 上一首和下一首
    let nextbtn = document.getElementById('nextsongbtn');
    nextbtn.onclick = function () {
        if (curplayerindex < curplayersongs.length - 1) {
            curplayerindex++;
            playmusic(curplayerindex);
        } else {
            curplayerindex = 0;
            playmusic(curplayerindex);
        }

        if (randommusic) {
            let randomindex = Math.floor(Math.random() * curplayersongs.length);
            curplayerindex = randomindex;
            playmusic(curplayerindex);
        }

        let target = document.getElementById(curplayerindex);
        handleclickmusic(target);
    };

    let prevbtn = document.getElementById('prevsongbtn');
    prevbtn.onclick = function () {
        if (curplayerindex > 0) {
            curplayerindex--;
            playmusic(curplayerindex);
        } else {
            curplayerindex = curplayersongs.length - 1;
            playmusic(curplayerindex);
        }
        if (randommusic) {
            let randomindex = Math.floor(Math.random() * curplayersongs.length);
            curplayerindex = randomindex;
            playmusic(curplayerindex);
        }

        let target = document.getElementById(curplayerindex);
        handleclickmusic(target);

    };

    // 更新音樂名稱
    let musicplayername = document.getElementById('musicplayername');
    musicplayername.innerHTML = Songs[index].name;

    // 當音樂播放完畢，自動播放下一首
    currentAudio.addEventListener('ended', function () {
        if (curplayerindex < curplayersongs.length - 1) {
            curplayerindex++;
            playmusic(curplayerindex);
        } else {
            curplayerindex = 0;
            playmusic(curplayerindex);
        }
        if (randommusic) {
            let randomindex = Math.floor(Math.random() * curplayersongs.length);
            curplayerindex = randomindex;
            playmusic(curplayerindex);
        }
        let target = document.getElementById(curplayerindex);
        handleclickmusic(target);
    });

    let repeatsongbtn = document.getElementById('repeatsongbtn');
    repeatsongbtn.title = "目前列表循環";
    repeatsongbtn.onclick = function () {
        if (currentAudio.loop) {
            musicloop = false;
            currentAudio.loop = musicloop;
            repeatsongbtn.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="CurrentColor" class="bi bi-repeat" viewBox="0 0 16 16">
                                                              <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
                                                            </svg>`;
            repeatsongbtn.title = "目前列表循環";
        } else {
            musicloop = true;
            randommusic = false;
            currentAudio.loop = musicloop;
            randomsongbtn.style.color = "rgb(167, 167, 167)";
            repeatsongbtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-repeat-1" viewBox="0 0 16 16">
              <path d="M11 4v1.466a.25.25 0 0 0 .41.192l2.36-1.966a.25.25 0 0 0 0-.384l-2.36-1.966a.25.25 0 0 0-.41.192V3H5a5 5 0 0 0-4.48 7.223.5.5 0 0 0 .896-.446A4 4 0 0 1 5 4zm4.48 1.777a.5.5 0 0 0-.896.446A4 4 0 0 1 11 12H5.001v-1.466a.25.25 0 0 0-.41-.192l-2.36 1.966a.25.25 0 0 0 0 .384l2.36 1.966a.25.25 0 0 0 .41-.192V13h6a5 5 0 0 0 4.48-7.223Z"/>
              <path d="M9 5.5a.5.5 0 0 0-.854-.354l-1.75 1.75a.5.5 0 1 0 .708.708L8 6.707V10.5a.5.5 0 0 0 1 0z"/>
            </svg> `;
            repeatsongbtn.title = "目前單曲循環";
        }
    };
}

//時間格式化
function formatTime(time) {
    let hr = Math.floor(time / 3600);
    let min = Math.floor((time % 3600) / 60);
    let sec = Math.floor(time % 60);

    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (hr === 0) {
        return min + ":" + sec;
    } else {
        return hr + ":" + min + ":" + sec;
    }
}

//上傳音樂
function uploadmusics() {
    let files = document.getElementById('filemusic').files;
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let reader = new FileReader();
        reader.onload = function (e) {
            let url = e.target.result;
            let name = file.name.split('.')[0];

            // 取得音樂長度
            let audio = new Audio();
            audio.src = url;
            audio.addEventListener('loadedmetadata', function () {
                let duration = formatTime(audio.duration);
                let newSong = {
                    id: Songs.length,
                    name: name,
                    duration: duration,
                    url: url
                };
                Songs.push(newSong);
                rendersongs();
                document.querySelectorAll('.musicplayerlistitem').forEach(item => {
                    let target = item;
                    item.onclick = function () {
                        handleclickmusic(target);
                    };
                });
            });
        };
        reader.readAsDataURL(file);
    }


}







