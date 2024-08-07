let currentFontSize = '20px';  //預設大小

function AccessEditor(target, index) {
    let title = target.title;
    Content.innerHTML = `
                <div id="backbtn" onclick="backfundiary()"></div>
                <div id="diarytitle">${title}</div>
                
                <div id="editorcontainer">
                    <div id="edittools">
                        <div class="edittool" onclick="saveContent('${index}')"><img src="./Public/editor/save.png">儲存</div>
                        <div class="edittool" onclick="document.execCommand('undo')"><img src="./Public/editor/recover.png">復原</div>
                        <div class="edittool" onclick="document.execCommand('bold')"><img src="./Public/editor/bold.png">粗體</div>
                        <div class="edittool" onclick="document.execCommand('italic')"><img src="./Public/editor/italic.png">斜體</div>
                        <div class="edittool" onclick="document.execCommand('underline')"><img src="./Public/editor/line.png">底線</div>
                        <div class="edittool" onclick="document.execCommand('justifyLeft')"><img src="./Public/editor/align-left.png">左對齊</div>
                        <div class="edittool" onclick="document.execCommand('justifyCenter')"><img src="./Public/editor/format.png">置中</div>
                        <div class="edittool" onclick="document.execCommand('justifyRight')"><img src="./Public/editor/align-right.png">右對齊</div>
                        <div class="edittool" id="fontsizearea">
                            <select id="fontsizeselect" onchange="changeFontSize()">
                                ${generatefontsizeoption()}
                            </select>
                            大小
                        </div>
                        <div class="edittool" id="fontcolorarea">
                            <input type="color" id="fontcolorinput" value="#000" onchange="changeFontColor()">
                            顏色
                        </div>
                        <div class="edittool" id="fontselectarea">
                            <select id="fontselect" onchange="changeFontFamily()">
                                <option value="標楷體">標楷體</option>
                                <option value="微軟正黑體">微軟正黑體</option>
                                <option value="新細明體" selected>新細明體</option>
                                <option value="ZCOOL KuaiLe">俏皮字體</option>
                                <option value="Liu Jian Mao Cao">草書字體</option>
                            </select>
                            字體
                        </div>
                        <div class="edittool" onclick="showTableInsertDialog()"><img src="./Public/editor/table.png">表格</div>
                    </div>
                    <div id="editorareacontext" contenteditable="true">${target.content}</div>
                </div>
            `;
    document.getElementById('editorareacontext').focus();
    document.getElementById('editorareacontext').style.fontSize = currentFontSize;

    document.body.onkeydown = (e) => {
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            saveContent(index);
        }
    }

    document.getElementById('editorareacontext').addEventListener('mouseup', updateFontSize);
    document.getElementById('editorareacontext').addEventListener('keyup', updateFontSize);
}

const fontSizeMap = {
    "8": 1,
    "10": 2,
    "12": 3,
    "14": 4,
    "16": 5,
    "18": 6,
    "20": 7,
    "24": "24px",
    "28": "28px",
    "32": "32px",
    "36": "36px",
    "48": "48px",
    "60": "60px",
    "72": "72px",
    "96": "96px"
};



function generatefontsizeoption() {
    let option = "";
    for (let size in fontSizeMap) {
        option += `<option value="${size}" ${size == "12" ? 'selected' : ''}>${size}</option>`;
    }
    return option;
}

function changeFontColor() {
    let fontColor = document.getElementById('fontcolorinput').value;
    document.execCommand('foreColor', false, fontColor);
}

function changeFontFamily() {
    let fontFamily = document.getElementById('fontselect').value;
    document.execCommand('fontName', false, fontFamily);
}

function saveContent(index) {
    let content = document.getElementById('editorareacontext').innerHTML;
    let diaryitems = JSON.parse(localStorage.getItem("diaryitem")) || [];
    diaryitems[index].content = content;
    localStorage.setItem("diaryitem", JSON.stringify(diaryitems));
    alert("保存成功!");
}

function backfundiary() {
    Content.innerHTML = DiaryOptionsContent;
    showdiaryoptions();
}

function changeFontSize() {
    let fontSize = document.getElementById('fontsizeselect').value;
    let sizeValue = fontSizeMap[fontSize];
    if (typeof sizeValue === "number") {
        document.execCommand('fontSize', false, sizeValue);
    } else {
        document.execCommand('fontSize', false, "7");
        let fontElements = document.querySelectorAll('font[size="7"]');
        for (let i = 0; i < fontElements.length; i++) {
            fontElements[i].removeAttribute('size');
            fontElements[i].style.fontSize = sizeValue;
        }
    }
    updateFontSize();
}

function updateFontSize() {
    let selection = window.getSelection();
    if (selection.rangeCount > 0) {
        let range = selection.getRangeAt(0);
        let parentElement = range.commonAncestorContainer.parentElement;
        let computedFontSize = window.getComputedStyle(parentElement).fontSize;
        document.getElementById('fontsizeselect').value = parseInt(computedFontSize);
    }
}


/*插入表格 */
function showTableInsertDialog() {
    let dialog = document.createElement('div');
    dialog.innerHTML = `
        <div>
            <div>行數: <input type="number" id="table-rows" min="1" value="2"></div>
            <div>列數: <input type="number" id="table-cols" min="1" value="2"></div>
            <button onclick="insertTable()">插入表格</button>
            <button onclick="closeTableInsertDialog()">取消</button>
        </div>
    `;
    dialog.id = 'table-insert-dialog';
    dialog.style.position = 'fixed';
    dialog.style.width = '250px';
    dialog.style.height = '200px';
    dialog.style.outline = 'none';
    dialog.style.border = 'none';
    dialog.style.backgroundColor = 'white';
    dialog.style.display = 'flex';
    dialog.style.flexDirection = 'column';
    dialog.style.justifyContent = 'space-around';
    dialog.style.alignItems = 'center';
    dialog.style.top = '50%';
    dialog.style.left = '50%';
    dialog.style.transform = 'translate(-50%, -50%)';
    dialog.style.padding = '10px';
    dialog.style.zIndex = '1000';
    dialog.style.fontSize = '16px';
    dialog.style.borderRadius = '10px';
    dialog.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';


    dialog.querySelectorAll('input').forEach(input => {
        input.style.width = '100px';
        input.style.height = '30px';
        input.style.fontSize = '16px';
        input.style.margin = '5px';
    });

    dialog.querySelectorAll('button').forEach(button => {
        button.style.margin = '5px';
        button.style.width = '100px';
        button.style.height = '30px';
        button.style.border = 'none';
        button.style.outline = 'none';
        button.style.cursor = 'pointer';
        button.style.backgroundColor = 'lightblue';
        button.style.color = 'white';
        button.style.fontSize = '16px';
    });

    document.body.appendChild(dialog);
}

function closeTableInsertDialog() {
    let dialog = document.getElementById('table-insert-dialog');
    if (dialog) {
        document.body.removeChild(dialog);
    }
}
function insertTable() {
    let rows = document.getElementById('table-rows').value;
    let cols = document.getElementById('table-cols').value;
    let table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.style.border = '1px solid black';
            td.style.padding = '5px';
            td.style.width = `${100 / cols}%`;
            td.innerHTML = '&nbsp;';
            td.style.position = 'relative';
            td.style.resize = 'both';
            td.style.overflow = 'auto';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    let editor = document.getElementById('editorareacontext');
    editor.appendChild(table);

    closeTableInsertDialog();
}

