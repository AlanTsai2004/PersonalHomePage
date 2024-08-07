const Content = document.getElementById('toolcontainer')
let Dom = {}
let alreadyloadmusicplayer = false;
let CurPage = "Main";
const MainContent = `
<div class="tool" id="minebtn" onclick="Mineshow()">
                <img src="./Public/toolicon/user.png" width="130px">
                我的
            </div>
            <div class="tool" onclick="FJUshow()">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnWeu2PehT18WHHH_a7c_4CNKz0tnxMXADw&s"
                    width="140px">
                輔大
            </div>
            <div class="tool" onclick="showforwardoptions()">
                <img src="./Public/toolicon/browser.png" width="130px">
                前端
            </div>
            <div class="tool" onclick="showvideooptions()">
                <img src="./Public/toolicon/youtube.png" width="130px">
                影音
            </div>
            <div class="tool" onclick="showreactoptions()">
                <img src="./Public/toolicon/structure.png" width="130px">
                ReactJS
            </div>
            <div class="tool" onclick="shownodejsoptions()">
                <img src="./Public/toolicon/nodejs.png" width="130px">
                NodeJS
            </div>
            <div class="tool" onclick="showtoolsoptions()">
                <img src="./Public/toolicon/tool-box.png" width="130px">
                工具
            </div>
            <div class="tool" id="diarybtn" onclick="showdiaryoptions()">
                <img src="./Public/toolicon/writing.png" width="130px">
                筆記
            </div>`;

const FJUContent = `
                    <div id="backbtn" onclick="backfun()"></div>
                    <div class="tool" onclick="showlogin()">
                        <img src="./Public/toolicon/fju/login.png" width="130px">
                        學生登入
                    </div>
                    <div class="tool" onclick="location.href='https://outline.fju.edu.tw/#/outLineSearch/searchView'">
                        <img src="./Public/toolicon/fju/teaching.png" width="130px">
                        選課資訊
                    </div>
                    <div class="tool" onclick="location.href='https://www.fju.edu.tw/article.jsp?articleID=7'">
                        <img src="./Public/toolicon/fju/advertisement.png" width="130px">
                        學校資訊
                    </div>
                    <div class="tool" onclick="showtuitfee()">
                        <img src="./Public/toolicon/fju/tuition.png" width="130px">
                        學費繳費
                    </div>
`;

const FJULoginContent = `
                    <div id="backbtn" onclick="backfun()"></div>
                    <div class="tool" onclick="location.href='https://portal.fju.edu.tw/student/Account/Login'">
                        <img src="./Public/toolicon/fju/login.png" width="130px">
                        學生登入
                    </div>
                    <div class="tool" onclick="location.href='http://smis.fju.edu.tw/freshman/'">
                        <img src="./Public/toolicon/fju/personal-information.png" width="130px">
                        個人資料管理登入
                    </div>
                    `;

const FJUTuitContent = `
                    <div id="backbtn" onclick="backfun()"></div>
                    <div class="tool" onclick="location.href='https://school.taishinbank.com.tw/PORTAL/Auth/Login.aspx'">
                        <img src="https://media.cakeresume.com/image/upload/s--SfW5-cVp--/c_pad,fl_png8,h_400,w_400/v1625217735/yes8jjpjueg9dkxhajxy.png" width="130px">
                        繳費入口
                    </div>
                    <div class="tool" onclick="location.href='https://sloan.bot.com.tw/customer/login/SLoanLogin.action'">
                        <img src="https://urbanrenewal.wealth.com.tw/uploads/1599982462.jpg" width="130px">
                        貸款入口
                    </div>
                    `;

const VideoContent = `
                    <div id="backbtn" onclick="backfun()"></div>
                    <div class="tool" onclick="location.href='https://www.bilibili.com/anime/'">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTriTpW5IWfJUwc_OugHvLHbJ9eV2BZvc1oKw&s" width="130px">
                        B站
                    </div>
                    <div class="tool" onclick="location.href='https://v.qq.com/'">
                        <img src="https://play-lh.googleusercontent.com/rzBkksm6LRJAC808D5uYGNV6JbdygSwPc81OTkobuBbivhz0CWm8vhnOi4O0JlHFQapu=w240-h480-rw" width="130px">
                        騰訊
                    </div>
                    <div class="tool" onclick="location.href='https://www.acgbox.link/'">
                        <img src="https://www.acgbox.link/wp-content/uploads/logo/86742914_p0.png" width="130px">
                        ACG盒子
                    </div>
                    <div class="tool" onclick="location.href='https://www.cycanime.com/show/20.html/'">
                        <img src="https://www.cycanime.com/upload/site/20240319-1/25e700991446a527804c82a744731b60.png" width="130px">
                        次元城
                    </div>
                    <div class="tool" onclick="location.href='https://sn-video.com/index.html/'">
                        <img src="https://sn-video.com/includes/vendor/images/logo_.png" width="130px">
                        星夜動漫
                    </div>                   
`;

const ForwardContent = `
                        <div id="backbtn" onclick="backfun()"></div>
                        <div class="tool" onclick="location.href='https://getbootstrap.com/'">
                            <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" width="130px">
                            Bootstrap
                        </div>
                        <div class="tool" onclick="location.href='https://tailwindcss.com/docs/guides/vite'">
                            <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" width="130px">
                            TailwindCSS
                        </div>
                        <div class="tool" onclick="location.href='https://flowbite-react.com/'">
                            <img src="https://flowbite-react.com/favicon.svg" width="130px">
                            Flowbite-React
                        </div>
                        <div class="tool" onclick="location.href='https://www.magicpattern.design/'">
                            <img src="https://pbs.twimg.com/profile_images/1387456092653903874/5FGL8ozv_400x400.jpg" width="130px">
                            MagicPattern
                        </div>
                        <div class="tool" onclick="location.href='https://react.semantic-ui.com/'">
                            <img src="https://react.semantic-ui.com/logo.png" width="130px">
                            SemanticUI
                        </div>
                        <div class="tool" onclick="location.href='https://react-icons.github.io/react-icons/search/#q='">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_x77yPK9Kj4Nx87mKoNKmB6jfjbccXz3vQ&s" width="130px">
                            React-Icons
                        </div>
                        <div class="tool" onclick="location.href='https://csscoco.com/inspiration/#/'">
                            <img src="https://csscoco.com/inspiration/images/logo2.png" width="130px">
                            CSS靈感
                        </div>
                        <div class="tool" onclick="location.href='https://www.flaticon.com/'">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZcZkHb1ryoSbKABkVp_5kVVOdb7dmN6R_Q&s" width="130px">
                            Flaticon
                        </div>
                       `;

const ReactContent = `
                        <div id="backbtn" onclick="backfun()"></div>
                        <div class="tool" onclick="location.href='https://ithelp.ithome.com.tw/users/20116826/ironman/2278'">
                            <img src="./Public/toolicon/structure.png" width="130px">
                            React基礎
                        </div>
                        <div class="tool" onclick="location.href='https://component-party.lainbo.com/'">
                            <img src="https://component-party.lainbo.com/popper.svg" width="130px">
                            JS語法框架對比
                        </div>
                     `;


function AddToolsBtnComponent(CurPage) {
    Content.innerHTML += `
                            <div class="tool" id="addcontentbtn" onclick="AddnewItem('${CurPage}')">
                                <img src="./Public/toolicon/add-image.png" width="130px">
                            新增     
                            </div>
                            `;
}

const NodejsContent = `
                        <div id="backbtn" onclick="backfun()"></div>
                        <div class="tool" onclick="location.href='https://www.expressjs.com.cn/'">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRztssUmVkQcDl8a8Jd4u8mZxOjX5jydMQA&s" width="130px">
                            Express基礎
                        </div>
                        <div class="tool" onclick="showvpsoption()">
                            <img src="https://static.vecteezy.com/system/resources/previews/029/339/640/original/vps-virtual-private-server-web-hosting-services-infrastructure-technology-stock-illustration-vector.jpg" width="130px">
                           免費服務器
                        </div>
                        <div class="tool" onclick="showdatabaseoptions()">
                            <img src="./Public/toolicon/database/database-storage.png" width="130px">
                            資料庫
                        </div>
                        `;

const VPSContent = `
                        <div id="backbtn" onclick="backfun()"></div>
                        <div class="tool" onclick="location.href='https://render.com/'">
                            <img src="https://global.discourse-cdn.com/business6/uploads/render/original/2X/1/11352202c8503f736bea5efb59684f678d7c860c.svg" width="130px">
                            Render
                        </div>
                        <div class="tool" onclick="location.href='https://vercel.com/'">
                            <img src="https://images.ctfassets.net/c63hsprlvlya/1zUViz84vavghFDIK1qmlm/8be7ec39bf58472414e212d7547e7f8b/Vercel__Zeit_.jpeg" width="130px">
                            Vercel
                        </div>
                        <div class="tool" onclick="location.href='https://dash.zeabur.com/'">
                            <img src="https://avatars.githubusercontent.com/u/107748533?s=280&v=4" width="130px">
                            Zeabur
                        </div>
                        `;

const DatabaseContent = `
                        <div id="backbtn" onclick="backfun()"></div>
                        <div class="tool" onclick="location.href='https://account.mongodb.com/account/login?n=https%3A%2F%2Fcloud.mongodb.com%2Fv2%2F64cdaaad6bf4b206363f560e&nextHash=%23metrics%2FreplicaSet%2F64cdab4af97d4a35c329c369%2Fexplorer%2Ftest%2Fusers%2Ffind&signedOut=true'">
                            <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" width="130px">
                            MongoDB
                        </div>
                        <div class="tool" onclick="location.href='https://console.firebase.google.com/'">
                            <img src="https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png" width="130px">
                            Firebase
                        </div>
                        `;

const MyToolsContent = `
                        <div id="backbtn" onclick="backfun()"></div>
                        <div class="tool" onclick="showtoolimg()">
                            <img src="./Public/toolicon/tools/image-processing.png" width="130px">
                            圖片相關
                        </div>
                        <div class="tool" onclick="showtoolvideo()">
                            <img src="./Public/toolicon/tools/video-editor.png" width="130px">
                            影片相關
                        </div>
                        <div class="tool" onclick="showtoolreqport()">
                            <img src="./Public/toolicon/tools/assessment.png" width="130px">
                            簡報相關
                        </div>
                        <div class="tool" onclick="showtoolmusic()">
                            <img src="./Public/toolicon/tools/creative.png" width="130px">
                            音樂相關
                        </div>
                        <div class="tool" onclick="showtooldesktop()">
                            <img src="./Public/toolicon/tools/repair.png" width="130px">
                            桌布相關
                        </div>
                    `;

const MyToolsforimgContent = `
                            <div id="backbtn" onclick="backfun()"></div>
                            <div class="tool" onclick="location.href='https://ezgif.com/effects?err=expired/'">
                                <img src="https://ezgif.com/logo.svg" width="130px">
                                GIF製作
                            </div>
                            <div class="tool" onclick="location.href='https://picwish.com/tw/photo-enhancer/'">
                                <img src="https://cfcdn.apowersoft.info/astro/picwish/_astro/logo-en.9dfbfa39.svg" width="130px">
                                AI修復畫質
                            </div>
                             <div class="tool" onclick="location.href='https://haiper.ai/'">
                                <img src="https://cdnvb1.haiper.ai/_u/65eb9667b2085ab81904df49/o5SStPY8lrs3rMZBjpGmx/LOGO_edited.png" width="130px">
                                Haiper製圖
                            </div>
                        `;

const MyToolsforvideoContent = `
                                 <div id="backbtn" onclick="backfun()"></div>
                                <div class="tool" onclick="location.href='https://online-video-cutter.com/tw/'">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFLicHq4_943wJOHUFQXYG0IO3jxeyvJcNw&s" width="130px">
                                    影片裁切
                                </div>
                                `;

const MyToolsforreportContent = `
                                 <div id="backbtn" onclick="backfun()"></div>
                                <div class="tool" onclick="location.href='https://gamma.app/'">
                                    <img src="https://image-cdn.learnin.tw/bnextmedia/image/album/2023-06/img-1686282172-58442.jpg?w=600&output=webp" width="130px">
                                    Gamma簡報生成
                                </div>
                                `;

const MyToolsformusicContent = `
                                <div id="backbtn" onclick="backfun()"></div>
                                <div class="tool" onclick="location.href='https://suno.com/'">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RoE2uu-2iA06t9_qu9XdDwmWF2L00lle6Q&s" width="130px">
                                    Suno音樂生成
                                </div>
                                `;

const MyToolsfordesktopContent = `
                                <div id="backbtn" onclick="backfun()"></div>
                                <div class="tool" onclick="location.href='https://steamcommunity.com/workshop/browse?appid=431960/'">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1200px-Steam_icon_logo.svg.png" width="130px">
                                    桌布下載
                                </div>
                                 <div class="tool" onclick="location.href='https://ggntw.com/steam/'">
                                    <img src="https://static.ggntw.com/web/logo.png" width="130px">
                                    桌布轉檔
                                </div>
                                `;