const Email = document.querySelector(".Email");
const SubmitBtn = document.querySelector(".btn-submit");
const errorMsg = document.querySelector(".error-msg")
SubmitBtn.addEventListener("click", () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(Email.value.match(mailformat))
      {
          errorMsg.innerHTML = ""; 
    }else{
        errorMsg.innerHTML = "Please enter a valid email adress"; 
    }
    console.log(errorMsg.value);
})