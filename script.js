
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");
const email = document.getElementById("email");
const errors = document.getElementById("error-msg");
const sentTo = document.getElementById("sent-to")
const dismissMsg = document.getElementById("dismiss");

form.addEventListener('submit',(e)=>{
    let errorMessages =[];
    e.preventDefault();

    if(email.value === "" || email.value === null){
        errorMessages.push("email must not be empty!");
    } else if (!email.value.includes("@")){
        errorMessages.push("invalid Email");
    


    } 
    if (errorMessages.length > 0) {
        errors.innerText = errorMessages.join(", ");
    } else window.location.href = 'page2.html';
    
});

function dismiss(){
    window.location.href = 'index.html'
}
dismissMsg.addEventListener(click,dismiss() )
