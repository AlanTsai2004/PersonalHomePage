
let IsModify = false;
const MineContent = `
    <div id="backbtn" onclick="backfun()"></div>
    <div id="mytit">我的個人檔案</div>
    <div id="mycontainer">
        <div id="myimg" onclick="changemyimg()">
            <img src="./Public/toolicon/user.png" id="personimg">
            <input type="file" id="filepersonimg" style="display:none;" accept="image/png, image/jpeg">
        </div>
        <div id="myname" onclick="showmodifyinput()">
            <p></p>
            <input type="text" id="mynameinput" placeholder="輸入名稱" style="display:none;"> 
        </div> 
    </div>
`;

function Mineshow() {
    CurPage = "Mine";
    Content.innerHTML = MineContent;
    let personimg = localStorage.getItem("personimg") === null ? "./Public/toolicon/user.png" : localStorage.getItem("personimg");
    let nameitem = localStorage.getItem("name") === null ? "未命名" : localStorage.getItem("name");
    document.querySelector("#myname p").textContent = nameitem;
    document.querySelector("#personimg").src = personimg;
}

function showmodifyinput() {
    const nameElement = document.getElementById("myname");
    const nameInput = document.getElementById("mynameinput");
    const nameParagraph = nameElement.querySelector("p");

    nameParagraph.style.display = "none";
    nameInput.style.display = "block";
    nameInput.focus();
    IsModify = true;

    document.addEventListener('click', recoveroriange);
}

function recoveroriange(event) {
    const nameElement = document.getElementById("myname");
    const nameInput = document.getElementById("mynameinput");
    const nameParagraph = nameElement.querySelector("p");

    if (!nameElement.contains(event.target)) {
        nameParagraph.style.display = "block";
        nameInput.style.display = "none";
        IsModify = false;
        document.removeEventListener('click', recoveroriange);
    }

    nameInput.onchange = function () {
        nameParagraph.innerHTML = nameInput.value;
        nameElement.querySelector("p").textContent = nameInput.value;
        let nameitem = localStorage.setItem("name", nameInput.value);
    }
}


let cropper = null;

function changemyimg() {
    document.getElementById('dialogshow').innerHTML = `
    <dialog id="dialog">
        <div id="dialogcontent">
            <div id="tit">更換頭像</div>
            <div id="uploadsettingarea">
                <div id="settingleft" class="personimgmodifyarea" onclick="uploadpersonimg()">
                    <img src="./Public/toolicon/add-image.png" draggable="false">
                    <p>上傳頭像</p>
                    <input type="file" id="filepersonimg" style="display:none;" accept="image/png, image/jpeg">
                </div>
                <div class="box tailoring-box">
                    <img id="tailoringImg" src="">
                </div>
                <div class="previewcontainer">
                    <div id="previewImg"></div>
                </div>
            </div>
            <div id="dialogcontrol">
                <div id="okuploadbtn">上傳</div> 
                <div id="closebtn">取消</div>                              
            </div>
        </div>
    </dialog>`;

    let dialogforupload = document.getElementById('dialog');
    dialogforupload.showModal();

    let closebtn = document.getElementById('closebtn');
    closebtn.onclick = function () {
        dialogforupload.close();
        document.getElementById('dialogshow').innerHTML = "";
        if (cropper) {
            cropper.destroy();
            cropper = null;
        }
    }

    let filepersonimg = document.getElementById('filepersonimg');
    let tailoringImg = document.getElementById('tailoringImg');

    filepersonimg.onchange = function () {
        let file = filepersonimg.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (evt) {
                let imgSrc = evt.target.result;
                tailoringImg.src = imgSrc;
                if (cropper) {
                    cropper.destroy(); // 舊的清除
                }
                cropper = new Cropper(tailoringImg, {
                    aspectRatio: 1 / 1,
                    preview: '#previewImg',
                    guides: true,
                    autoCropArea: 0.5,
                    dragMode: 'crop',
                    cropBoxResizable: true,
                    movable: true,
                    zoomable: true,
                    rotatable: false,
                    zoomOnWheel: true,
                    zoomOnTouch: true,
                    ready: function (e) {
                        console.log('已經就緒!');
                    }
                });
            }
            reader.readAsDataURL(file);
        }
    };

    document.getElementById('okuploadbtn').onclick = function () {
        if (cropper) {
            let canvas = cropper.getCroppedCanvas();


            let ctx = canvas.getContext('2d');
            let backgroundColor = '#ffffff';
            let width = canvas.width;
            let height = canvas.height;


            let newCanvas = document.createElement('canvas');
            newCanvas.width = width;
            newCanvas.height = height;
            let newCtx = newCanvas.getContext('2d');


            newCtx.fillStyle = backgroundColor;
            newCtx.fillRect(0, 0, width, height);


            newCtx.drawImage(canvas, 0, 0);


            let base64 = newCanvas.toDataURL('image/jpeg');
            localStorage.setItem("personimg", base64);
            dialogforupload.close();
            document.getElementById('dialogshow').innerHTML = "";
            Mineshow();
        }
    };


    let settingleft = document.getElementById('settingleft');
    settingleft.ondragover = function (e) {
        e.preventDefault();
    }

    settingleft.ondrop = function (e) {
        e.preventDefault();
        let file = e.dataTransfer.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (evt) {
                let imgSrc = evt.target.result;
                tailoringImg.src = imgSrc;
                if (cropper) {
                    cropper.destroy();
                }
                cropper = new Cropper(tailoringImg, {
                    aspectRatio: 1 / 1,
                    preview: '#previewImg',
                    guides: true,
                    autoCropArea: 0.5,
                    dragMode: 'crop',
                    cropBoxResizable: true,
                    movable: true,
                    zoomable: true,
                    rotatable: false,
                    zoomOnWheel: true,
                    zoomOnTouch: true,
                    ready: function (e) {
                        console.log('已經就緒!');
                    }
                });
            }
            reader.readAsDataURL(file);
        }
    };
}

function uploadpersonimg() {
    document.getElementById('filepersonimg').click();
}


