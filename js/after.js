window.onload = function () {

    const firebaseConfig = {
        apiKey: "AIzaSyDoY1hJ3rHs7tSFxECLpV9uIdTTIKwQ9V8",
        authDomain: "retro-bowl-2.firebaseapp.com",
        projectId: "retro-bowl-2",
        storageBucket: "retro-bowl-2.appspot.com",
        messagingSenderId: "727949820686",
        appId: "1:727949820686:web:1dbc7401f67804b80e0d5f"
    };
    // Initialize Firebase

    console.log('firebase thing should be working i hope')
    // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    const app = firebase.initializeApp(firebaseConfig);

    var stay = null;


    var mainApp = {};
    setTimeout(function () {


        var logtout = function () {
            firebase.auth().signOut().then(function () {
                console.log('success');
                // window.location.replace("index.html");
                window.location.replace("/");

            }, function () { })
        }

        var init = function () {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    // User is signed in.
                    console.log("stay");
                    const email = user.email;
                    // console.log(email)
                    
                    if (firebase.auth().currentUser.email.includes('@k12.prosper-isd.net') === true || firebase.auth().currentUser.email.includes('dda') === true) {
                    } else {
                        alert('your not a student!!!!!!!!!!');
                        location = "/";
                    }
                    // if(email.includes(''))
                // }

                    stay = true;
                } else {
                    // No user is signed in.

                    console.log("redirect");
                    // window.location.replace("index.html");
                    window.location.replace("/");

                }
            });
        }

        init();

        mainApp.logout = logtout;
    }, 500);


window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});
pgTitleF();
}
// window.onload = function() {
// if(localStorage.getItem('kicked') === true) {
//     alert('kicked');
//     document.getElementById('auth_password_input').style.display = "none";
//     alert('sorry your bad');
// }
// }
document.oncontextmenu = rightClick;

function rightClick(e) {
    e.preventDefault();
}
function pgTitleF() {
    document.title = "Classes";
    var shortcuticon = document.getElementById('shortCutIcon');
    document.getElementById('shortCutIcon').href = "https://ssl.gstatic.com/classroom/favicon.png";
    // alert('Title and Favicon are now changed');
}
var p = 'cmV0cm8gYm93bCA2OQ==';
var u1 = 'aHR0cHM6Ly9kZWJiaWV3YXRlcm1hbnBoZC5jb20vdXBsb2Fkcy81LzUvNi83LzU1NjcxOTQvY3VzdG9tX3RoZW1lcy8yMzAxODgyOTI5MTAzMTg2NDEvZmlsZXMvcmIxLmh0bWw=';
// var u2 = 'aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J5YTFIaGdZRVdyNGZYS3Jpa2gwSDlBN1ZPTFZqbkNzVXpGa1lkWXJFQ1FCbkhBNFEvZXhlYw==';
var u2 = 'aHR0cHM6Ly9yYXdjZG4uZ2l0aGFjay5jb20vc2NoZW5nMTIzMzIxL3RtbS1odG1sNS1jZG4xL21hc3Rlci9zbG9wZS9pbmRleC5odG1s';
// var u3 = 'aHR0cHM6Ly9sYWJsb2NrZWRnYW1lcy5jb20vZnVuYmxvY2tlZC8xdjEtbG9sLTQvaW5kZXgucGhw';
var u3 = 'aHR0cHM6Ly90b29hZHZhbmNlZGZvcnNvY2lldHkuZ3EvdGFtLTF2MS1sb2wv';

// var u4 = 'aHR0cHM6Ly9ydW4zLmlvLw==';
// var u4 = 'aHR0cHM6Ly9sZWt1Zy5naXRodWIuaW8vdG42cFM5ZENmMzd4QWhrSnYvCg==';
// var u4 = 'aHR0cHM6Ly9wbGF5ZXIwMy5jb20vcnVuLzMvYmV0YS8=';
var u4 = 'aHR0cHM6Ly9jb29raWVkdWNrLmNvbS9nYW1lcy9ydW4zc291cmNlLw==';



var u5 = 'aHR0cHM6Ly95b3JveWFsZS5jb20v';
// var u6 = 'aHR0cHM6Ly90b29hZHZhbmNlZGZvcnNvY2lldHkuZ3EvdGFtLXZleC01Lw==';
// var u6 = 'aHR0cHM6Ly90b29hZHZhbmNlZGZvcnNvY2lldHkuZ3EvdGFtLXZleC01Lw==';
// var u6 = 'aHR0cHM6Ly9hcHAtMTcxMjgzLmdhbWVzLnMzLnlhbmRleC5uZXQvMTcxMjgzLzk1OTVuNHVidXMwNXFxa2diM2tyMW1hcHE1YXZrOTQ4L2luZGV4Lmh0bWw/YXBwLWlkPTE3MTI4MyNhcHAtaWQ9MTcxMjgzJmNhdGFsb2ctc2Vzc2lvbi11aWQ9Y2F0YWxvZy0zYTI0YWZiYi1mMDMxLTVkYzAtOGU2Ni01MzRiNTc2OGY4YzEtMTYzNjc1OTUxMzE0MS0yMjVhJnJ0eC1yZXFpZD02MjgyODM2NDcwMjE4NDcyMjE1JnBvcz0lN0IibGlzdFR5cGUiJTNBImNhdGVnb3JpemVkIiUyQyJ0YWJDYXRlZ29yeSIlM0EiY29tbW9uIiU3RCZvcmlnaW49aHR0cHMlM0ElMkYlMkZ5YW5kZXguZnImeWFuZGV4YXBwPWZhbHNlJmV4cEJveGVzQ3J5cHRlZD1yZGpzOHAtT2JOLWk5XzMtSGtIUW9oSnl6TVBuR2JvMSZleHBlcmltZW50cz0lN0IicHJvbXB0X3BvcHVwX2Rlc2t0b3AiJTNBMyUyQyJhdXRvcGxheV92aWRlb19maXJzdF9jYXJkIiUzQXRydWUlMkMiYWx3YXlzX2JhY2tfdG9fY2F0YWxvZyIlM0F0cnVlJTJDImludmFsaWRhdGVfZ2FtZXNfY2FjaGVfZnJvbSIlM0E3NzAxNzg1JTJDInJld2FyZGVkX3ZpZGVvX3RpbWVvdXQiJTNBMTAlMkMiYWx3YXlzX3Nob3dfZ3VhcmQiJTNBInRydWUiJTJDImdwdC1hZHYtYmxvY2siJTNBJTdCImZ1bGxzY3JlZW4iJTNBIiUyRjUwMDA4NDI5JTJGY2EtcHViLTQ0NjkyNzQxNzQ2MTA2MTQtdGFnJTJGR2FtZXMlMkZJbnN0cmVhbV82NjYzLTIiJTdEJTdEJmFwcC1pZD0xNzEyODM=';
var u6 = null;
var u7 = 'aHR0cHM6Ly9zaGVsbHNob2NrZXJzLndvcmxkLw==';
// var u8 = null;
// var u8 = 'nuaHR0cHM6Ly9vemguZ2l0aHViLmlvL2Nvb2tpZWNsaWNrZXIvll=='; encode and decode got mixed up lol
// var u8 = 'aHR0cHM6Ly9vemguZ2l0aHViLmlvL2Nvb2tpZWNsaWNrZXIv==';
// var u8 = 'aHR0cHM6Ly9vemguZ2l0aHViLmlvL2Nvb2tpZWNsaWNrZXIv';
var u8 = 'aHR0cHM6Ly9zdHJlc3NtaW5kLnh5ei9hcmNoaXZlL2cvY29va2llY2xpY2tlci9pbmRleC5odG1s';




var u9 = 'aHR0cHM6Ly93d3cubWF0aHBsYXlncm91bmQuY29tL21vYmlsZV9ibG9ja190aGVfcGlnLw==';

var password = "retro bowl 68"
var dp = atob(p);
function auth_password() {
    if (document.getElementById('auth_password_input').value === dp) {
        document.getElementById('auth_password_div').style.display = "none";
        document.getElementById('game_select_container').style.display = "flex";
        document.getElementById('stealth_options_container').style.display = "flex";
    }
    if (document.getElementById('auth_password_input').value === password) {
        localStorage.setItem('kicked', true);
        // location.reload();
    }
}
function choose_game() {
    // alert('hi');
    if (document.getElementById('game_select').value === '1') {
        document.getElementById('game').innerHTML = `<iframe src="${atob(u1)}" width="100%" height="100%">`;
    }
    if (document.getElementById('game_select').value === '2') {
        document.getElementById('game').innerHTML = `<iframe src="${atob(u2)}" width="100%" height="100%">`;
    }
    if (document.getElementById('game_select').value === '3') {
        document.getElementById('game').innerHTML = `<iframe src="${atob(u3)}" width="100%" height="100%">`;
    }
    if (document.getElementById('game_select').value === '4') {
        document.getElementById('game').innerHTML = `<iframe src="${atob(u4)}" width="100%" height="100%">`;
    }
    if (document.getElementById('game_select').value === '5') {
        document.getElementById('game').innerHTML = `<iframe src="${atob(u5)}" width="100%" height="100%">`;
    }
    if (document.getElementById('game_select').value === '6') {
        document.getElementById('game').innerHTML = `<iframe src="${atob(u6)}" width="100%" height="100%">`;
    }
    if (document.getElementById('game_select').value === '7') {
        document.getElementById('game').innerHTML = `<iframe src="${atob(u7)}" width="100%" height="100%">`;
    }
    if (document.getElementById('game_select').value === '8') {
        document.getElementById('game').innerHTML = `<iframe src="${atob(u8)}" width="100%" height="100%">`;
    }
    if (document.getElementById('game_select').value === '9') {
        document.getElementById('game').innerHTML = `<iframe src="${atob(u9)}" width="100%" height="100%">`;
    }
}

var shortcuticon = document.getElementById('shortCutIcon');
function pgTitleA() {
    document.title = "Inbox (4) - Gmail";
    var shortcuticon = document.getElementById('shortCutIcon');
    shortcuticon.href = "https://www.google.com/a/cpanel/k12.prosper-isd.net/images/favicon.ico";
    // alert('Title and Favicon are now changed');
}
function pgTitleB() {
    document.title = "My Drive - Google Drive";
var shortcuticon = document.getElementById('shortCutIcon');
    shortcuticon.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
    // alert('Title and Favicon are now changed');
}
function pgTitleC() {
    document.title = "Google Slides";
    var shortcuticon = document.getElementById('shortCutIcon');
    shortcuticon.href = "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico";
    // alert('Title and Favicon are now changed');
}
function pgTitleD() {
    var shortcuticon = document.getElementById('shortCutIcon');
    document.title = "Google Docs";
    shortcuticon.href = "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico";
    // alert('Title and Favicon are now changed');
}
function pgTitleE() {
    document.title = "Classes";
    var shortcuticon = document.getElementById('shortCutIcon');
    document.getElementById('shortCutIcon').href = "https://ssl.gstatic.com/classroom/favicon.png";
    // alert('Title and Favicon are now changed');
}
var elem = document.getElementById("content");
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
var isgone = false
document.addEventListener("keydown", function (event) {
    if (event.code === 'Enter' && isgone === true) {
        // alert('Enter is pressed!');
        // if(isgone === true) {
            document.body.style.display = "block";
        // }
    }
});

function gone() {
    // alert('still working on this');
    document.body.style.display = "none";
    isgone = true;
}