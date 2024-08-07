

const DiaryOptionsContent = `
                            <div id="backbtn" onclick="backfun()"></div> 
                            <div id="diarytitle">筆記</div>       
                            <div id="diarycontainer">
                                <div id="diaryoperate">
                                    <div id="searcharea">
                                        <input type="text" id="searchinput" placeholder="搜尋筆記">
                                        <img src="./Public/toolicon/diary/search.png" id="searchbtn" draggable="false">  
                                    </div>
                                    <div class="operate" id="adddiarybtn">
                                        <img src="./Public/toolicon/diary/plus.png" draggable="false">
                                    </div> 
                                </div>
                                <div id="diarycontent"></div>
                            </div>   
                           `;

//創建筆記項目
function creatediaryutem(index, title, date) {
    const diaryitem = `
                <div class="diary">
                    <div class="diaryindex">${index + 1}.</div>
                    <div class="diarytitle">${title}</div>
                    <div class="diarydate">${date}</div>
                    <div class="diaryitemoperate">
                        <img src="./Public/toolicon/diary/pen.png" class="diaryedit" id="diary${index}edit" draggable="false">
                        <img src="./Public/toolicon/diary/delete.png" class="diarydelete" id="diary${index}delete" draggable="false">
                    </div>
                </div>
                `;
    document.getElementById("diarycontent").innerHTML += diaryitem;

    document.querySelectorAll(".diarydelete").forEach((item) => {
        item.onmouseover = () => { item.title = "刪除筆記"; }
    });

    document.querySelectorAll(".diaryedit").forEach((item) => {
        item.onmouseover = () => { item.title = "編輯筆記"; }
    });

    document.querySelectorAll(".diaryedit").forEach((item) => {
        let index = item.id.replace("diary", "").replace("edit", "");
        item.onclick = () => { editdiaryitem(index); }
    });

    document.querySelectorAll(".diarydelete").forEach((item) => {
        let index = item.id.replace("diary", "").replace("delete", "");
        item.onclick = () => { deletediaryitem(index); }
    });
}

//點擊編輯筆記項目
function editdiaryitem(index) {
    let edittarget = JSON.parse(localStorage.getItem("diaryitem"))[index];
    AccessEditor(edittarget, index);
}

//返回筆記選項
function backfundiary() {
    Content.innerHTML = DiaryOptionsContent;
    showdiaryoptions();
}

//刪除筆記項目
function deletediaryitem(index) {
    if (window.confirm("確定刪除此筆記嗎？")) {
        let diaryitems = JSON.parse(localStorage.getItem("diaryitem")) || [];
        diaryitems.splice(index, 1);
        localStorage.setItem("diaryitem", JSON.stringify(diaryitems));
        showdiaryoptions();
    }
}

//創建筆記視窗
function creatediaryforwindow() {
    let myinputtit = window.prompt("輸入筆記標題並按下確定");
    if (myinputtit != null) {
        let date = new Date().toISOString().slice(0, 10);
        date = date.replace(/-/g, "/");
        let diaryitemobjs = {
            title: myinputtit,
            date: date,
            content: "點擊頁面開始編輯"
        }
        let diaryitems = JSON.parse(localStorage.getItem("diaryitem")) || [];
        diaryitems.push(diaryitemobjs);
        localStorage.setItem("diaryitem", JSON.stringify(diaryitems));
        showdiaryoptions();
    }
}

//搜尋筆記
function searchdiary() {
    let searchinput = document.getElementById("searchinput").value;
    let diaryitems = JSON.parse(localStorage.getItem("diaryitem")) || 0;
    let searchresult = [];

    if (searchinput == "") {
        showdiaryoptions();
        return;
    }

    for (let i = 0; i < diaryitems.length; i++) {
        if (diaryitems[i].title.includes(searchinput)) {
            searchresult.push(diaryitems[i]);
        }
    }

    document.getElementById("diarycontent").innerHTML = "";
    for (let i = 0; i < searchresult.length; i++) {
        document.getElementById("diarycontent").innerHTML += `<div id="searchtit">以下是搜尋" ${searchinput} "的結果</div>`
        creatediaryutem(i, searchresult[i].title, searchresult[i].date);
    }
    if (searchresult.length == 0) {
        document.getElementById("diarycontent").innerHTML = "<div id='nodata'>沒有符合條件的筆記</div>";
    }
}

//顯示筆記選項UI介面
function showdiaryoptions() {
    Content.innerHTML = DiaryOptionsContent;

    let adddiarybtn = document.getElementById("adddiarybtn");
    let searchbtn = document.getElementById("searchbtn");
    adddiarybtn.onmouseover = function () {
        adddiarybtn.title = "新增筆記";
    }
    adddiarybtn.onclick = () => { creatediaryforwindow(); }

    //從localStorage取出筆記項目
    let diaryitems = JSON.parse(localStorage.getItem("diaryitem")) || 0;
    for (let i = 0; i < diaryitems.length; i++) {
        creatediaryutem(i, diaryitems[i].title, diaryitems[i].date);
    }
    setTimeout(() => {
        if (diaryitems.length == 0 || diaryitems == 0) {
            document.getElementById("diarycontent").innerHTML = "<div id='nodata'>目前沒有筆記，趕緊去創建吧！</div>";
        }
    })

    searchbtn.onclick = () => { searchdiary() }
    window.onkeyup = (e) => {
        if (e.key == "Enter") {
            searchdiary();
        }
    }
}

