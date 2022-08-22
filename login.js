/////////////////////////////////////////
/////////////////////////////////

// TOGGLE LOGIN PAGE AND SIGNUP (REGISTER) PAGE

let successPopup = document.querySelector(".success-popup");
let loginForm = document.querySelector(".login-form");
let registerForm = document.querySelector(".register-form");
let loginPageLink = document.querySelector("#login-page-link");
let registerpageLInk = document.querySelector("#register-page-link");
let getUsersData = JSON.parse(localStorage.getItem("userdata"));

registerpageLInk.addEventListener("click", () => {
  loginForm.classList.toggle("hidden");
  registerForm.classList.toggle("hidden");
});
loginPageLink.addEventListener("click", () => {
  loginForm.classList.toggle("hidden");
  registerForm.classList.toggle("hidden");
});
let providerLogin = document.querySelector(".provider-login");
providerLogin.addEventListener("click", () => {
  let email = document.querySelector("#useremail");
  email.value = "provider123@gmail.com";
});

//////////////////////////////////////////////////
/////////////////////////

// LOGIN TO CHECK USERNAME AND PASSWORD

let loginFormData = document.getElementById("login-form-data");
loginFormData.addEventListener("submit", doLogin);
function doLogin(event) {
  event.preventDefault();
  let getUsersData = JSON.parse(localStorage.getItem("userdata"));
  let email = document.querySelector("#useremail").value;
  let password = document.querySelector("#userpassword").value;

  if (email == "provider123@gmail.com" && password == "admin") {
    return (window.location.href = "homepage.html");
  }
  let result = getUsersData.filter((val) => {
    if (email == val.useremail && password == val.userpassword) {
      window.location.href = "homepage.html";

      localStorage.setItem("currentUserLoginData", JSON.stringify(val));
      // email=password=''
    } else if (
      (email == val.useremail && password != val.userpassword) ||
      (email != val.useremail && password == val.userpassword)
    ) {
      showErrorPopup();
    } else {
      showErrorPopup("invalidData");
    }
  });
}
//////////////////////////////////////////
////////////////////

// SHOW ERROR POPUP (INAVALID USER , INCORRECT USERNAME OR PASSWORD);

function showErrorPopup(invalidUser) {
  let errorMsg = document.querySelector(".error-msg-text");
  if (invalidUser) {
    errorMsg.innerHTML = "Invalid Userdata, Please go to signup here";
  }
  let errorMsgPopup = document.querySelector(".error-popup");

  errorMsgPopup.classList.toggle("hidden");
  let errorMsgCloseBtn = document.querySelector(".error-msg-close");
  errorMsgCloseBtn.addEventListener("click", () => {
    errorMsgPopup.classList.add("hidden");
  });
}

////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// SUBMIT REGISTER (SIGNUP) FORM AND GET FORM DATA TO SET LOCAL STORAGE

let usersDataArr = [];
var form = document.getElementById("register-form-data");
form.addEventListener("submit", doSubmitRegisterFrom);

var userid = 1;
// console.log(userid);
function doSubmitRegisterFrom(event) {
  event.preventDefault();
  userid = String(userid).padStart(5, "0");

  let username = document.getElementById("username").value;
  let useremail = document.getElementById("uemail").value;
  let usernumber = document.getElementById("usernumber").value;
  let userpassword = document.getElementById("userpwd").value;
  let agree = document.getElementById("agree").checked;
  let data = {
    userid: userid,
    signupDetails: new Date().toLocaleString(),
    username: username,
    useremail: useremail,
    usernumber: usernumber,
    userpassword: userpassword,
  };

  if (
    username != "" &&
    useremail != "" &&
    usernumber != "" &&
    userpassword != "" &&
    agree == true
  ) {
    usersDataArr.push(data);

    localStorage.setItem("userdata", JSON.stringify(usersDataArr));
    successPopup.classList.toggle("hidden");
    userid++;
    localStorage.removeItem("patientData");
  }
  //  else{}
}

///////////////////////////////////////////

/// SUCCESFULLY SIGNUP(REGISTER) TO SHOW SUCCESS POPUP

let successBtnLink = document.querySelector(".success-btn");
let successPopuupCloseBtn = document.querySelector(".success-popup-closebtn");
successBtnLink.addEventListener("click", () => {
  successPopup.classList.toggle("hidden");
});
successPopuupCloseBtn.addEventListener("click", () => {
  successPopup.classList.add("hidden");
});

////////////////////////////
// SHOW AND HIDE PASSWORD

function showPassword(id) {
  var pwdInput = document.getElementById(`${id}`);
  if (pwdInput.type === "password") {
    pwdInput.type = "text";
  } else {
    pwdInput.type = "password";
  }
}

////////////////////////////////////
/////////////////////////////////////////////////

//reference
// let formData=new FormData(registerFormData);
// let dataObj={};
// for(let [key,value] of formData){
//   dataObj[key]=value;
// }

// let username=document.registerFrom.username.value;
// let useremail=document.registerFrom.useremail.value;
// let usernumber=(document.registerFrom.usernumber.value);
// let userpassword=document.registerFrom.userpassword.value;

// for(let val of registerFormData){
//   if(val.type=='checkbox'){
//     val.checked=false;
//   }
//   val.value='' }

// let getUsersData=JSON.parse( localStorage.getItem('userdata'));
// // console.log(JSON.parse(getUsersData));
// console.log(getUsersData['username']);

// console.log(data);
//  console.log(data);
// dataObj.usernamer!=''&&dataObj.useremailr!=''&&dataObj.usernumber!=''&&dataObj.userpassword!=''&& usersDataArr.push(dataObj);
