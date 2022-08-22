///////////////////////////////////////////////
//show and hide the profie tap

let profile = document.querySelector(".profile-logo");
let showProfile = document.querySelector(".show-profile");
profile.addEventListener("mouseover", showProfileDetails);
profile.addEventListener("click", showProfileDetails);
function showProfileDetails(e) {
  e.stopPropagation();
  showProfile.classList.toggle("visible");
  profile.classList.toggle("profile-logo-shadow");
}
document.body.addEventListener("click", () => {
  showProfile.classList.remove("visible");
  profile.classList.remove("profile-logo-shadow");
});

//////////////////////////////////////////////
// Set profie Name and Email in Profile tap

function getUserLoginId() {
  let currentUserData = JSON.parse(
    localStorage.getItem("currentUserLoginData")
  );
  let userProfileEmail = currentUserData.useremail;
  if (userProfileEmail) {
    let userProfileName = userProfileEmail.slice(
      0,
      userProfileEmail.indexOf("@")
    );
    let capitiliseName = userProfileName.replace(
      userProfileName[0],
      userProfileName[0].toUpperCase()
    );

    document.querySelector(".profile-name").innerHTML = capitiliseName;
    document.querySelector(".profile-email").innerHTML = userProfileEmail;
  }
}
getUserLoginId();

///////////////////////////////////////////////
// Set appoinment date and time min - max (form)
function minAppoinmentDateTime() {
  let appoinmentDate = document.getElementById("apmnttime");
  let currentDate_Time = new Date().toISOString().split("T");
  let currentDate = new Date().getDate();

  appoinmentDate.min = `${currentDate_Time[0].slice(0, -2)}${currentDate_Time[0]
    .slice(-2)
    .replace(currentDate, currentDate + 1)} ${currentDate_Time[1].slice(0, 5)}`;
}
minAppoinmentDateTime();
