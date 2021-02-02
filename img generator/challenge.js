




var divOne = document.querySelector('.div-1');
var divTwo = document.querySelector('.div-2');
var divThree = document.querySelector('.div-3');
var divFour = document.querySelector('.div-4');
var submit = document.querySelector('.submit-btn');
var randomImage = document.querySelector('.img-btn');
var emailInput = document.querySelector('#email-input');
var emailValue = "";
var responseURL = "";
var emailError = document.querySelector('.email-error');
var emailSuccess = document.querySelector('.email-success');
var imageError = document.querySelector('.image-error');
var emailArray = [];
var post = document.querySelector('.post-btn');
var imgClear = document.querySelector('#img');
var box = document.querySelector('.box');


 function getImage() {
    $.ajax({
        url:"https://source.unsplash.com/random/500x500",
        cache: false,
        xhrFields:{
            responseType:'blob'
        },
        success:function(data){
            const url = window.URL.createObjectURL(data)
            responseURL = url
            box.innerHTML = "<img src=\"" + responseURL + "\">";
        },
        error:function(error){
            console.log(error)
        }
    })
} 


function includes(container, value) {
    var returnValue = false;
    var position = container.indexOf(value);
    if (position >= 0) {
        returnValue = true;
    }
    return returnValue;
 }


randomImage.addEventListener('click', function(){
    if(emailValue.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)){
        getImage();
        imageError.style.display = "none";
    } else {
        alert("please enter email");
    }
});

submit.addEventListener('click', function(){
    if(emailInput.value.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)){
        emailValue = emailInput.value;
        emailSuccess.innerHTML = "<p>You have entered a valid email address!</p>";
        emailError.style.display = "none";
        emailSuccess.style.display = "block";
        console.log(emailValue);
    } else {
        emailError.innerHTML = "<p>Please enter a valid email address!</p>";
        alert("Please enter a valid email address!");
        emailSuccess.style.display = "none";
        emailError.style.display = "block";
    }
});

post.addEventListener('click', function(){
    if (responseURL == "" && emailValue == "") {
        alert("Please enter a valid email and generate a new image!");
    }
    if(responseURL == "" && emailValue != ""){
        imageError.innerHTML = "<p>Please click Get Random Image before continuing</p>";
        alert("Please click Get Random Image before continuing");
    }
    if(emailValue.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/) && responseURL != ""){
        imageError.style.display = "none";
    } else {
        imageError.style.display = "block";
    }

    if (emailValue.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/) && responseURL !="") {
        var newEntry = document.createElement('div');
        emailSuccess.style.display = "none";
        emailError.style.display = "none";
        imageError.style.display = "none";
        
        result = includes(emailArray, emailValue);
        index = emailArray.indexOf(emailValue);
        length = emailArray.length;
        if(result === false && index === -1){
            if (length === 0) {
                divOne.appendChild(newEntry);
                newEntry.innerHTML = "<p> \"" + emailValue + "\" </p> <br> <img src= \"" + responseURL + "\">";
                emailArray.push(emailValue);
                divOne.style.display = "block"
                emailValue = "";
                $('#form')[0].reset(); //resets the email input field.
            } else if(length === 1) {
                divTwo.appendChild(newEntry);
                newEntry.innerHTML = "<p> \"" + emailValue + "\" </p> <br> <img src= \"" + responseURL + "\">";
                emailArray.push(emailValue);
                divTwo.style.display = "block"
                emailValue = "";
                $('#form')[0].reset(); //resets the email input field.
            } else if(length === 2) {
                divThree.appendChild(newEntry);
                newEntry.innerHTML = "<p> \"" + emailValue + "\" </p> <br> <img src= \"" + responseURL + "\">";
                emailArray.push(emailValue);
                divThree.style.display = "block"
                emailValue = "";
                $('#form')[0].reset(); //resets the email input field.
            } else if (length === 3) {
                divFour.appendChild(newEntry);
                newEntry.innerHTML = "<p> \"" + emailValue + "\" </p> <br> <img src= \"" + responseURL + "\">";
                emailArray.push(emailValue);
                divFour.style.display = "block"
                emailValue = "";
                $('#form')[0].reset(); //resets the email input field.
            } else {
                alert("Too many emails in use, Please refresh or use an existing email!");
            }
        }
        
        if(result === true && index === 0){
            divOne.appendChild(newEntry);
            newEntry.innerHTML = "<img src=\"" + responseURL + "\">";
            emailValue = "";
            $('#form')[0].reset(); //resets the email input field.
        }
        if(result === true && index === 1){
            divTwo.appendChild(newEntry);
            newEntry.innerHTML = "<img src=\"" + responseURL + "\">";
            emailValue = "";
            $('#form')[0].reset(); //resets the email input field.
        }
        if(result === true && index === 2){
            divThree.appendChild(newEntry);
            newEntry.innerHTML = "<img src=\"" + responseURL + "\">";
            emailValue = "";
            $('#form')[0].reset(); //resets the email input field.
        }
        if(result === true && index === 3){
            divFour.appendChild(newEntry);
            newEntry.innerHTML = "<img src=\"" + responseURL + "\">";
            emailValue = "";
            $('#form')[0].reset(); //resets the email input field.
        }
    }
    imgClear.src = "";
    responseURL ="";
});

