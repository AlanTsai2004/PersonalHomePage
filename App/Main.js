//初始化運行主頁
function Init() {
    CurPage = "Main";
    Content.innerHTML = MainContent;
    Dom = {
        Mine: document.getElementById('minebtn'),
        FJU: document.getElementById('fjubtn'),
        Video: document.getElementById('videobtn'),
        Forward: document.getElementById('forwardbtn'),
        ReactJS: document.getElementById('reactbtn'),
        NodeJS: document.getElementById('nodebtn'),
        MyTools: document.getElementById('mytoolsbtn'),
        Diary: document.getElementById('diarybtn'),
    }
    let personimg = localStorage.getItem("personimg") === null ? "./Public/toolicon/user.png" : localStorage.getItem("personimg");
    Dom.Mine.querySelector('img').src = personimg;
}
Init();

//返回主頁
function backfun() {
    Init();
    alreadyloadmusicplayer = false;
}

function AddnewItem(CurPage) {
    console.log(CurPage);

    document.getElementById('dialogshow').innerHTML = `<dialog id="dialog">
                            <div id="dialogcontent">
                                    <div id="tit">新增捷徑</div>
                                    <div id="uploadsettingarea">
                                        <div id="settingleft">
                                             <img src="./Public/toolicon/add-image.png" id="previewimg">
                                             <p>上傳圖片</p>
                                            <input type="file" accept="image/png, image/jpeg" style="display:none;" name="itemicon" id="itemicon" required>
                                        </div>
                                        <div id="settingright">
                                            <div id="itemnamearea">
                                                 捷徑名稱   
                                                <input type="text" id="itemname" name="itemname" required>
                                            </div>
                                            <div id="itemsrcarea">
                                                 捷徑連結   
                                            <input type="text" id="itemsrc" name="itemsrc" required>
                                            </div>
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

    itemicon = document.getElementById('itemicon');
    previewimg = document.getElementById('previewimg');
    itemicon.onchange = () => {
        let reader = new FileReader();
        reader.readAsDataURL(itemicon.files[0]);
        reader.onload = function () {
            document.getElementById('settingleft').querySelector('p').style.display = 'none';
            previewimg.src = reader.result;
        }
    }

    document.getElementById('closebtn').onclick = () => {
        dialogforupload.close()
        document.getElementById('dialogshow').innerHTML = ""
    }
    document.getElementById('settingleft').onclick = () => {
        document.getElementById('itemicon').click();
    }

    document.getElementById('okuploadbtn').onclick = () => {
        dialogforupload.close()

        itemicon = document.getElementById('itemicon');

        if (itemicon.files.length !== 0 && itemicon.files[0].type.indexOf('image') === -1) {
            alert('請上傳圖片檔案');
            return;
        }

        if (itemicon.files.length === 0 || document.getElementById('itemname').value === "" || document.getElementById('itemsrc').value === "") {
            alert('請輸入物件名稱及連結');
            return;
        }


        let itemname = document.getElementById('itemname').value;
        let itemsrc = document.getElementById('itemsrc').value;

        let reader = new FileReader();

        reader.readAsDataURL(itemicon.files[0]);
        reader.onload = function () {
            let item = {
                icon: reader.result,
                name: itemname,
                src: itemsrc,
            }
            //存入localStorage
            let items = JSON.parse(localStorage.getItem(`${CurPage}`)) || [];
            items.push(item);
            localStorage.setItem(`${CurPage}`, JSON.stringify(items));
            if (CurPage === "ReactJS") {
                showreactoptions();
            } else if (CurPage === "NodeJS") {
                shownodejsoptions();
            } else if (CurPage === "VPS") {
                showvpsoption();
            } else if (CurPage === "MyToolsforimg") {
                showtoolimg();
            } else if (CurPage === "MyToolsforvideo") {
                showtoolvideo();
            } else if (CurPage === "MyToolsforreqport") {
                showtoolreqport()
            } else if (CurPage === "MyToolsformusic") {
                showtoolmusic()
            }

        }

    }
}





function FJUshow() {
    CurPage = "FJU";
    Content.innerHTML = FJUContent;
}

function showlogin() {
    CurPage = "FJULogin";
    Content.innerHTML = FJULoginContent;
}

function showtuitfee() {
    CurPage = "FJUTuit";
    Content.innerHTML = FJUTuitContent;
}

function showvideooptions() {
    CurPage = "Video";
    Content.innerHTML = VideoContent;
    let items = JSON.parse(localStorage.getItem('Video')) || [];
    items.forEach(item => {
        let newitem = `
        <div class="tool mycreated" onclick="location.href='${item.src}'">
            <img src="${item.icon}" width="130px">
            <p>${item.name}</p>
            </div>`;
        Content.innerHTML += newitem;
    });
    AddToolsBtnComponent(CurPage);
    document.querySelectorAll('.mycreated').forEach(item => {
        item.oncontextmenu = (e) => {
            e.preventDefault();
            showdeletemenu(e, CurPage);
        }
    })
}

function showforwardoptions() {
    CurPage = "Forward";
    Content.innerHTML = ForwardContent;
}

function showreactoptions() {
    CurPage = "ReactJS";
    Content.innerHTML = ReactContent;
    //從localStorage取出資料
    let items = JSON.parse(localStorage.getItem('ReactJS')) || [];
    items.forEach(item => {
        let newitem = `
        <div class="tool mycreated" onclick="location.href='${item.src}'">
            <img src="${item.icon}" width="130px">
            <p>${item.name}</p>
            </div>`;
        Content.innerHTML += newitem;
    });
    //新增工具按鈕
    AddToolsBtnComponent(CurPage);

    document.querySelectorAll('.mycreated').forEach(item => {
        item.oncontextmenu = (e) => {
            e.preventDefault();
            showdeletemenu(e, CurPage);
        }
    })
}

function shownodejsoptions() {
    CurPage = "NodeJS";
    Content.innerHTML = NodejsContent;
    let items = JSON.parse(localStorage.getItem('NodeJS')) || [];
    items.forEach(item => {
        let newitem = `
        <div class="tool mycreated" onclick="location.href='${item.src}'">
            <img src="${item.icon}" width="130px">
            <p>${item.name}</p>
            </div>`;
        Content.innerHTML += newitem;
    });
    AddToolsBtnComponent(CurPage);
    document.querySelectorAll('.mycreated').forEach(item => {
        item.oncontextmenu = (e) => {
            e.preventDefault();
            showdeletemenu(e, CurPage);
        }
    })
}

function showvpsoption() {
    CurPage = "VPS";
    Content.innerHTML = VPSContent;
    let items = JSON.parse(localStorage.getItem('VPS')) || [];
    items.forEach(item => {
        let newitem = `
        <div class="tool mycreated" onclick="location.href='${item.src}'">
            <img src="${item.icon}" width="130px">
            <p>${item.name}</p>
            </div>`;
        Content.innerHTML += newitem;
    });

    AddToolsBtnComponent(CurPage);
    document.querySelectorAll('.mycreated').forEach(item => {
        item.oncontextmenu = (e) => {
            e.preventDefault();
            showdeletemenu(e, CurPage);
        }
    })
}

function showdatabaseoptions() {
    CurPage = "Database";
    Content.innerHTML = DatabaseContent;
}

function showtoolsoptions() {
    CurPage = "MyTools";
    Content.innerHTML = MyToolsContent;
}

function showtoolimg() {
    CurPage = "MyToolsforimg";
    Content.innerHTML = MyToolsforimgContent;
    let items = JSON.parse(localStorage.getItem('MyToolsforimg')) || [];
    items.forEach(item => {
        let newitem = `
        <div class="tool mycreated" onclick="location.href='${item.src}'">
            <img src="${item.icon}" width="130px">
            <p>${item.name}</p>
            </div>`;
        Content.innerHTML += newitem;
    });
    AddToolsBtnComponent(CurPage);
    document.querySelectorAll('.mycreated').forEach(item => {
        item.oncontextmenu = (e) => {
            e.preventDefault();
            showdeletemenu(e, CurPage);
        }
    })
}

function showtoolvideo() {
    CurPage = "MyToolsforvideo";
    Content.innerHTML = MyToolsforvideoContent;
    let items = JSON.parse(localStorage.getItem('MyToolsforimg')) || [];
    items.forEach(item => {
        let newitem = `
        <div class="tool mycreated" onclick="location.href='${item.src}'">
            <img src="${item.icon}" width="130px">
            <p>${item.name}</p>
            </div>`;
        Content.innerHTML += newitem;
    });
    AddToolsBtnComponent(CurPage);
    document.querySelectorAll('.mycreated').forEach(item => {
        item.oncontextmenu = (e) => {
            e.preventDefault();
            showdeletemenu(e, CurPage);
        }
    })
}

function showtoolreqport() {
    CurPage = "MyToolsforreqport";
    Content.innerHTML = MyToolsforreportContent;
    let items = JSON.parse(localStorage.getItem('MyToolsforimg')) || [];
    items.forEach(item => {
        let newitem = `
        <div class="tool mycreated" onclick="location.href='${item.src}'">
            <img src="${item.icon}" width="130px">
            <p>${item.name}</p>
            </div>`;
        Content.innerHTML += newitem;
    });
    AddToolsBtnComponent(CurPage);
    document.querySelectorAll('.mycreated').forEach(item => {
        item.oncontextmenu = (e) => {
            e.preventDefault();
            showdeletemenu(e, CurPage);
        }
    })
}

function showtoolmusic() {
    CurPage = "MyToolsformusic";
    Content.innerHTML = MyToolsformusicContent;
    let items = JSON.parse(localStorage.getItem('MyToolsforimg')) || [];
    items.forEach(item => {
        let newitem = `
        <div class="tool mycreated" onclick="location.href='${item.src}'">
            <img src="${item.icon}" width="130px">
            <p>${item.name}</p>
            </div>`;
        Content.innerHTML += newitem;
    });
    AddToolsBtnComponent(CurPage);
    document.querySelectorAll('.mycreated').forEach(item => {
        item.oncontextmenu = (e) => {
            e.preventDefault();
            showdeletemenu(e, CurPage);
        }
    })
}

function showtooldesktop() {
    CurPage = "MyToolsfordesktop";
    Content.innerHTML = MyToolsfordesktopContent;
}








let deletemenuhasshow = false;
//滑鼠右鍵按下
function showdeletemenu(e, CurPage) {
    if (deletemenuhasshow) {
        document.getElementById('deletemenu').remove();
        deletemenuhasshow = false;
    }
    let deletemenu = document.createElement('div');
    deletemenu.className = 'menu';
    deletemenu.id = 'deletemenu';
    deletemenu.innerHTML = '刪除';
    deletemenu.style.top = e.clientY + 'px';
    deletemenu.style.left = e.clientX + 'px';
    document.body.appendChild(deletemenu);
    deletemenuhasshow = true;
    let item = e.target.parentNode === Content ? e.target : e.target.parentNode;
    deletemenu.onclick = () => {
        let items = JSON.parse(localStorage.getItem(`${CurPage}`));
        items = items.filter(i => i.name !== item.querySelector('p').innerText);
        localStorage.setItem(`${CurPage}`, JSON.stringify(items));
        item.remove();
        deletemenu.remove();
        deletemenuhasshow = false;
    }

    document.body.onclick = () => {
        document.querySelector('.menu').remove();
        deletemenuhasshow = false;
    }
}




