



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
    const app = firebase.initializeApp(firebaseConfig);
    
    
    // FirebaseUI config.
    var uiConfig = {
        signInSuccessUrl: 'after.html',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //firebase.auth.GithubAuthProvider.PROVIDER_ID,
            //firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: 'after.html'
    };
    // firebase.auth().onAuthStateChanged(function (user) {
        //     if (user) {
            //         // User is signed in.
            //         // console.log("stay");
            //         const email = user.email;
            //         console.log(email)
            
            //         if (!email.includes('prosper-isd.net')) {
                
                //             // location = "/";
                //             window.close();
                //         }
                //     }
                //     })
                // if(email.includes(''))
                // }
                
                // Initialize the FirebaseUI Widget using Firebase.
                var ui = new firebaseui.auth.AuthUI(firebase.auth());
                // The start method will wait until the DOM is loaded.
                ui.start('#firebaseui-auth-container', uiConfig);
                
                
                
                
                var provider = new firebase.auth.GoogleAuthProvider();
                
                
                function googleSignInPopup(provider) {
                    // [START auth_google_signin_popup]
                    firebase.auth()
                    .signInWithPopup(provider)
                    .then((result) => {
                        /** @type {firebase.auth.OAuthCredential} */
                        var credential = result.credential;
                        
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = credential.accessToken;
                        // The signed-in user info.
                        var user = result.user;
                        // ...
                    }).catch((error) => {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
                    // [END auth_google_signin_popup]
                }
                // }
                var uiConfig = {
                    signInSuccessUrl: "after.html",
                    signInOptions: [
                        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    ],
                    tosUrl: null
                };
                
                
                var user = firebase.auth().currentUser;
                var gone = null;
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        // The user object has basic properties such as display name, email, etc.
                        const displayName = user.displayName;
                        const emailre = user.email;
                        // alert(firebase.auth().currentUser.email.includes('dday'))
                        // alert(emailre)
                        // alert(emailre);
                        // if (email.includes('@k12.prosper-isd.net') || email.includes('dday')) {
                            // if(email.includes('dday')) {
                            //     alert('reee');
                            // }
                        // if (email.includes('k12.prosper-isd.net')) {
                        if (firebase.auth().currentUser.email.includes('@k12.prosper-isd.net') === true || firebase.auth().currentUser.email.includes('dday') === true) {
                            location = "/after.html";
                        } else {
                            alert('your not a student!!!!!!!!!!');
                            location = "/";
                        }
                        // if(firebase.auth().currentUser.email.includes('dday') === true) {
                        //     // gone = false;
                        //     alert('hi');
                        //     // console.log(gone);
                        //     // console.log('reeeeee gone ree')
                        //     location = "/after.html";
                        // }
                        // if(email.includes(dday)) {
                        //     location = "/after.html";

                        // }
                        const photoURL = user.photoURL;
                        // const emailVerified = user.emailVerified;
                        // const uid = user.uid;
                        console.log(firebase.auth().currentUser.email)
                        console.log(firebase.auth().currentUser.photoURL)
                        console.log(firebase.auth().currentUser.displayName)
                        
                        // document.getElementById('signInContainer').style.display = "none";
                        console.log('already signed in');
                    } else {
                        console.log('user not')
                    }
                });
                
                // window.onload = function() {
                    pgTitleF();
                }
                function pgTitleF() {
                    document.title = "Classes";
                    var shortcuticon = document.getElementById('shortCutIcon');
                    document.getElementById('shortCutIcon').href = "https://ssl.gstatic.com/classroom/favicon.png";
                    // alert('Title and Favicon are now changed');
                }
                
                
                // if (firebase.auth().currentUser.email.includes('@k-12.prosper-isd.net')) {
                    //     //they are student
                    //     what_url = '/content/content.html'
                    //     // location = what_url;
                    //     console.log('content');
                    // }
                    // if (firebase.auth().currentUser.email.includes('@prosper-isd.net')) {
                        //     //they probaly are staff
                        //     what_url = '/admin/admin.html'
                        //     // location = what_url;
                        //     console.log('admin');
                        // }
                        // if (!firebase.auth().currentUser.email.includes('prosper-isd.net')) {
                            //     //they are not from the school
                            //     // location = "/";
                            // }
                            // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// FirebaseUI config.
// window.onload = function() {
//   redirect(user);
// }
// function redirect(user) {
// var what_url
// var user = firebase.auth().currentUser;
// alert(firebase.auth().currentUser);
// if(user) {
//     alert("firebase.auth().currentUser");
// }
// firebase.auth().onAuthStateChanged((user) => {
// if(firebase.auth().currentUser) {
//     // const email = user.email;
//     // localStorage.setItem('logedinBefore','');

//     // if(email.includes('k-12.prosper-isd.net')) {
//     //   //they are student
//     //   what_url = '/content/content.html'  
//     //   // location = what_url;
//     //   console.log('content');
//     // } else {
//     //   //they probaly are staff
//     //   what_url = '/admin/admin.html'
//     //   // location = what_url;
//     //   console.log('admin');
//     // }
//     // if(!email.includes('prosper-isd.net')) {
//     //   //they are not from the school
//     //   // location = "/";
//     // }
//     console.log('hi');
//     location = "/after.html";
// }
// });
// }
// var uiConfig = {
//   signInSuccessUrl: what_url,
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],
//   tosUrl: what_url
// };
// var uiConfig = {
//   signInSuccessUrl: '/content/content.html',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],
//   tosUrl: '/content/content.html'
// };
// alert(.email)

// Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);
// googleSignInPopup(provider)



// var provider = new firebase.auth.GoogleAuthProvider();


// function googleSignInPopup(provider) {
//     // [START auth_google_signin_popup]
//     firebase.auth()
//         .signInWithPopup(provider)
//         .then((result) => {
//             /** @type {firebase.auth.OAuthCredential} */
//             var credential = result.credential;

//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//             // alert(result.email)
//             // alert(credential.email)
//             // ...
//         }).catch((error) => {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             // console.log(email);
//             // alert(email)
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//         });
//     // [END auth_google_signin_popup]
// }