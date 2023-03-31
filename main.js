const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
console.log();

const eMail = document.getElementById("exampleInputEmail1");
const personalInfo = document.querySelector(".personal-info");
const formEmail = document.querySelector(".formEmail");
const submit = document.getElementById("submit");
const formGetEmail = document.getElementById("formGetEmail");

const viewMore = document.getElementsByClassName("viewMore");

const jobInfo = document.getElementsByClassName("job-info");

const job = document.getElementsByClassName("job");
const jobTitle = document.getElementsByClassName("job-title");
console.log(viewMore);

//Sumbit

formGetEmail.addEventListener("submit", function (event) {
  event.preventDefault();
  checkMail(eMail.value);
});

function checkMail(mail) {
  let x = eMail.value;

  if (regex.test(x)) {
    personalInfo.classList.remove("hide-info");
    formEmail.classList.add("hide-info");
  } else {
    alert("email thì là không hợp lệ");
  }
}
for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener("click", function () {
    jobInfo[i].classList.toggle("hide-info");
    job[i].classList.toggle("border-job");
    jobTitle[i].classList.toggle("border-job");
    jobInfo[i].classList.contains("hide-info")
      ? (viewMore[i].innerHTML = "&#x2764; view more")
      : (viewMore[i].innerHTML = "&#x1F53A; View Less");

    // viewMore[i].textContent === "&#x1F53A; View Less"
    //   ? (viewMore[i].innerHTML = "&#x2764; view more")
    //   : (viewMore[i].innerHTML = "&#x1F53A; View Less");
  });
}
