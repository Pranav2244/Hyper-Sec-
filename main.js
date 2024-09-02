$(document).ready(function() {
    $("#do_login").click(function() { 
       closeLoginInfo();
       $(this).parent().find('span').css("display","none");
       $(this).parent().find('span').removeClass("i-save");
       $(this).parent().find('span').removeClass("i-warning");
       $(this).parent().find('span').removeClass("i-close");
       
        var proceed = true;
        $("#login_form input").each(function(){
            
            if(!$.trim($(this).val())){
                $(this).parent().find('span').addClass("i-warning");
            	$(this).parent().find('span').css("display","block");  
                proceed = false;
            }
        });
       
        if(proceed) //everything looks good! proceed...
        {
            $(this).parent().find('span').addClass("i-save");
            $(this).parent().find('span').css("display","block");
        }
    });
    
    //reset previously results and hide all message on .keyup()
    $("#login_form input").keyup(function() { 
        $(this).parent().find('span').css("display","none");
    });
 
  openLoginInfo();
  setTimeout(closeLoginInfo, 1000);
});

function openLoginInfo() {
    $(document).ready(function(){ 
    	$('.b-form').css("opacity","0.01");
      $('.box-form').css("left","-37%");
      $('.box-info').css("right","-37%");
    });
}

function closeLoginInfo() {
    $(document).ready(function(){ 
    	$('.b-form').css("opacity","1");
    	$('.box-form').css("left","0px");
      $('.box-info').css("right","-5px"); 
    });
}

$(window).on('resize', function(){
      closeLoginInfo();
});

// Example JavaScript functions to handle login information toggle
function openLoginInfo() {
    document.querySelector('.box-info').style.display = 'block';
}

function closeLoginInfo() {
    document.querySelector('.box-info').style.display = 'none';
}

// Generate a simple CAPTCHA value
function generateCaptcha() {
    return Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
}

// Toggle CAPTCHA when checkbox is clicked
function toggleCaptcha() {
    const checkbox = document.getElementById('captchaCheckbox');
    const captchaDisplay = document.getElementById('captchaDisplay');

    if (checkbox.checked) {
        const captchaValue = generateCaptcha();
        captchaDisplay.value = captchaValue;
    } else {
        captchaDisplay.value = '';
    }
}

// Validate CAPTCHA tick box
document.getElementById('do_login').addEventListener('click', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    const captchaChecked = document.getElementById('captchaCheckbox').checked;
    const captchaDisplay = document.getElementById('captchaDisplay').value;
    
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else if (!captchaChecked || captchaDisplay === '') {
        document.getElementById('captchaError').innerText = 'Please confirm you are not a robot.';
    } else {
        // Add logic here for form submission, e.g., AJAX call
        alert('Form submitted successfully!');
    }
});