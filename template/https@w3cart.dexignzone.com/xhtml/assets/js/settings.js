
var currentURL = window.location.href;

function dzThemeSettings()
{
	var dzThemeSettings = `<div class="offcanvas offcanvas-bottom m-3 rounded"  tabindex="-1" id="offcanvasBottom">
        <div class="offcanvas-body small">
            <ul class="theme-color-settings">
                <li>
                    <input class="filled-in" id="primary_color_1" appLogo="logo1.svg" name="theme_color" type="radio" value="color-primary" />
					<label for="primary_color_1"></label>
                    <span>Default</span>
                </li>
                <li>
					<input class="filled-in" id="primary_color_2" appLogo="logo2.svg" name="theme_color" type="radio" value="color-green" />
					<label for="primary_color_2"></label>
                    <span>Green</span>
                </li>
                <li>
                    <input class="filled-in" id="primary_color_3" appLogo="logo3.svg" name="theme_color" type="radio" value="color-blue" />
					<label for="primary_color_3"></label>
                    <span>Blue</span>
                </li>
                <li>
                    <input class="filled-in" id="primary_color_4" appLogo="logo4.svg" name="theme_color" type="radio" value="color-pink" />
					<label for="primary_color_4"></label>
                    <span>Pink</span>
                </li>
                <li>
                    <input class="filled-in" id="primary_color_5" appLogo="logo5.svg" name="theme_color" type="radio" value="color-yellow" />
					<label for="primary_color_5"></label>
                    <span>Yellow</span>
                </li>
                <li>
                    <input class="filled-in" id="primary_color_6" appLogo="logo6.svg" name="theme_color" type="radio" value="color-orange" />
					<label for="primary_color_6"></label>
                    <span>Orange</span>
                </li>
                <li>
                    <input class="filled-in" id="primary_color_7" appLogo="logo7.svg" name="theme_color" type="radio" value="color-purple" />
					<label for="primary_color_7"></label>
                    <span>Purple</span>
                </li>
                <li>
					<input class="filled-in" id="primary_color_8" appLogo="logo8.svg" name="theme_color" type="radio" value="color-red" />
					<label for="primary_color_8"></label>
                    <span>Red</span>
                </li>
                <li>
					<input class="filled-in" id="primary_color_9" appLogo="logo9.svg" name="theme_color" type="radio" value="color-lightblue" />
					<label for="primary_color_9"></label>
                    <span>Lightblue</span>
                </li>
				<li>
                    <input class="filled-in" id="primary_color_10" appLogo="logo10.svg" name="theme_color" type="radio" value="color-teal" />
					<label for="primary_color_10"></label>
                    <span>Teal</span>
                </li>
                <li>
                    <input class="filled-in" id="primary_color_11" appLogo="logo11.svg" name="theme_color" type="radio" value="color-lime" />
					<label for="primary_color_11"></label>
                    <span>Lime</span>
                </li>
                <li>
                    <input class="filled-in" id="primary_color_12" appLogo="logo12.svg" name="theme_color" type="radio" value="color-deeporange" />
					<label for="primary_color_12"></label>
                    <span>Deeporange</span>
                </li>
            </ul>
        </div>
    </div>`;
	
	jQuery('body').append(dzThemeSettings);
}


    /* Theme Panel Save */
	var themeOption = ['themeColor','themeVersion','appLogo'];
	const body = $('body');
    const html = $('html');
	

/* Only For Tanam Package Kit */	
var isCookieSet = true;
	
if(
	currentURL.indexOf('ecommerce') > -1
	|| currentURL.indexOf('fruits') > -1
	|| currentURL.indexOf('meat') > -1
	|| currentURL.indexOf('milk') > -1
	|| currentURL.indexOf('restaurant') > -1 
){
	isCookieSet = false;
}
/* Only For Tanam Package Kit END */	

(function($) {
    "use strict"
	dzThemeSettings();

    //get the DOM elements from right sidebar
    const versionSelect = $('#theme_version');
	
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
		return false;
	};
	
	var theme =  getUrlParameter('color-theme');
	var themeMode =  getUrlParameter('theme-mode');
	//console.log(theme);
	
    // Change the theme version controller
    jQuery('.theme-btn').on('click',function(){
        jQuery('body').toggleClass('theme-dark');
        jQuery('.theme-btn').toggleClass('active');
		var logoSrc = $(".app-logo").attr("src");
        if(jQuery('body').hasClass('theme-dark')){
           setCookie('themeVersion_value', 'theme-dark'); 
		   $(".app-logo").attr("src", logoSrc.replace('light','dark'))
        }else{
           setCookie('themeVersion_value', '');  
		   $(".app-logo").attr("src", logoSrc.replace('dark','light'))
        }
        
    });
	
	//change the primary color controller
    $('input[name="theme_color"]').on('click', function() {
		
        body.attr('data-theme-color',  this.value);
		var logoSrc = $(".app-logo").attr("src");
		const isDark = getCookie("themeVersion_value");
		if(isDark === "theme-dark"){
			$(".app-logo").attr("src", logoSrc.split('dark')[0]+"dark/"+$(this).attr("appLogo"))
		}else{
			$(".app-logo").attr("src", logoSrc.split('light')[0]+"light/"+$(this).attr("appLogo"))
		}
		
		if(isCookieSet){
			//console.log(22+'-'+this.value);
			setCookie('appLogo_value', $(this).attr("appLogo"));
			setCookie('themeColor_value', this.value);
		}
    });
	
	if(theme){
		body.attr('data-theme-color', theme);
		setCookie('themeColor_value', theme);
	}
	if(themeMode){
		if(themeMode == "dark"){
			jQuery('body').addClass('theme-dark');
			setCookie('themeVersion_value', 'theme-dark'); 
		}else if(themeMode == "light"){
			jQuery('body').removeClass('theme-dark');
			setCookie('themeVersion_value', ''); 
		}
	}
    
    
	/* Set Theme By Cookie */
	
		//console.log(444);
		//console.log(getCookie('themeColor_value'));
		setThemePanel();
	
	
	
    
    
	
})(jQuery);


/* Cookies Function */
function setCookie(cname, cvalue, exhours) 
{
    var d = new Date();
    d.setTime(d.getTime() + (30*60*1000)); /* 30 Minutes */
    var expires = "expires="+ d.toString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) 
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
	//console.log('decodedCookie');
	//console.log(decodedCookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function setThemePanel(){
    jQuery.each(themeOption, function(index, themeOptionItem) {
		themeOptionItemValue = getCookie(themeOptionItem+'_value');
		
		/* Only For Tanam Package Kit */
		if(!isCookieSet && themeOptionItem == 'themeColor'){
			return true;
		}
		/* Only For Tanam Package Kit END */
			
		
		if(themeOptionItemValue != '' && themeOptionItemValue != 1){
			console.log(themeOptionItemValue);
			if(themeOptionItem == 'themeColor'){
				body.attr('data-theme-color', themeOptionItemValue);
				
				
			}else if(themeOptionItem == 'appLogo'){
				console.log("1111")
				var logoSrc = $(".app-logo").attr("src");
				const isDark = getCookie("themeVersion_value");
				if(isDark === "theme-dark"){
					$(".app-logo").attr("src", logoSrc.split('dark')[0]+"dark/"+themeOptionItemValue)
				}else{
					$(".app-logo").attr("src", logoSrc.split('light')[0]+"light/"+themeOptionItemValue)
				}
				
			}else if(themeOptionItem == 'themeVersion'){
				body.addClass(themeOptionItemValue);
                jQuery('.theme-btn').addClass('active');
				var logoSrc = $(".app-logo").attr("src");
				if(themeOptionItemValue === "theme-dark"){
					$(".app-logo").attr("src", logoSrc.replace('light','dark'))
				}else{
					$(".app-logo").attr("src", logoSrc.replace('dark','light'))
				}
				
			}
		}
	});
}
/* Cookies Function End */