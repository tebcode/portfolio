/*!
    Coded with <3 by @h26k2
*/

/* ===== Hire Us ===== */

function hireUs(){
	showAlertModal("We are so glad that you are hiring us! Please fill the form below to start processing");
	alertSucces();
	gotoContactForm();
}

/* ===== Alert Modal ===== */

var alertModalText = document.getElementById("alert--text");
var alertModal = document.getElementsByClassName("alert--modal")[0];

function alertSucces(){
	alertModal.classList.add("alert--success");
	alertModal.classList.remove("alert--fail");
}

function alertFail(){
	alertModal.classList.add("alert--fail");
	alertModal.classList.remove("alert--success");
}

function hideAlertModal(){
	alertModal.classList.remove("alert--modal--show");
}

function showAlertModal(text){
	alertModal.innerHTML = text;
	alertModal.classList.add("alert--modal--show");
	setTimeout(hideAlertModal,4000);
}

/* ===== Background Movement ==== */

var bgContainer = document.getElementById("background-area");
var bgPicture = document.getElementById("background-picture");
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function moveBackground(event){

	var mouseX = event.clientX ; 
	var mouseY = event.clientY ;

	var calculatedX = mouseX / (windowWidth / 7);
	var calculatedY = mouseY / (windowHeight / 7);

	bgPicture.style.transform="translate(-"+calculatedX.toString()+"%,-"+calculatedY.toString()+"%)";

}

bgContainer.addEventListener("mousemove",moveBackground);


/* ===== Typed.js Code / Header Text ====  */

document.getElementsByClassName("code")[0].innerHTML = "";

var typed = new Typed('.code', {
  strings: ["We Code HTML", "We Code CSS", "We Code JavaScript", "We Code jQuery", "We Code Java", "We are tebCode!^5000"],
  typeSpeed: 100,
  showCursor: false,
  backSpeed: 100,
  loop:true,
  loopCount:10,
  StartDelay:100
});


/* ===== Navigation bar ===== */


var nav = document.getElementsByTagName('nav')
var toggleArea = document.getElementsByClassName("nav-toggler");
var toggleColorChanger = document.getElementsByClassName("nav-toggler-color--true");

function navToggle(toggleElement){
	toggleElement[0].classList.toggle("nav-slide-true");
	nav[0].classList.toggle("show-nav");
	toggleColorChanger[0].classList.toggle("nav-toggler-color--false");
}


/* ==== active link of nav bar ===== */

var aboutSection = document.getElementById("about--us");
var featureSection = document.getElementById("our--features");
var serviceSection = document.getElementById("our--services");
var teamSection = document.getElementById("our--team");
var pricingSection = document.getElementById("our--pricing");
var projectSection = document.getElementById("recent--projects");
var clientSection = document.getElementById("happy--clients");
var youtubeSection = document.getElementById("youtube--section");
var contacSection = document.getElementById("form--area");

aboutSection = aboutSection.offsetTop;
featureSection = featureSection.offsetTop;
serviceSection = serviceSection.offsetTop;
teamSection = teamSection.offsetTop;
pricingSection = pricingSection.offsetTop;
projectSection =  projectSection.offsetTop;
clientSection = clientSection.offsetTop;
youtubeSection =  youtubeSection.offsetTop;
contacSection = contacSection.offsetTop;

var activeLink = document.getElementsByClassName("nav-link");

function activeLinks(){
	
	var activelinkNum;

	if(window.pageYOffset+25 >= aboutSection && window.pageYOffset < featureSection-25){
		activelinkNum=0;
	}
	else if(window.pageYOffset+25 >= featureSection && window.pageYOffset < serviceSection-25){
		activelinkNum=1;
	}
	else if(window.pageYOffset+25 >= serviceSection && window.pageYOffset < teamSection-25){
		activelinkNum=2;
	}
	else if(window.pageYOffset+25 >= teamSection && window.pageYOffset < pricingSection-25){
		activelinkNum=3;
	}
	else if(window.pageYOffset+25 >= pricingSection && window.pageYOffset < projectSection-25){
		activelinkNum=4;
	}
	else if(window.pageYOffset+25 >= projectSection && window.pageYOffset < clientSection-25){
		activelinkNum=5;
	}
	else if(window.pageYOffset+25 >= clientSection && window.pageYOffset < youtubeSection-25){
		activelinkNum=6;
	}
	else if(window.pageYOffset+25 >= youtubeSection && window.pageYOffset < contacSection-350){
		activelinkNum=7;
	}
	else if(window.pageYOffset>=aboutSection){
		activelinkNum=8;
	}

	for(var a=0 ; a<activeLink.length ; a++){
		if( !(a==activelinkNum) ){
			activeLink[a].classList.remove("nav--link--active");
		}
		else{
			activeLink[a].classList.add("nav--link--active");
		}
	}
	
}


window.addEventListener("scroll",activeLinks);


/* ===== Our Services ===== */


var servicesDescHeading=["web development","YouTube tutorials"];
var servicesDescPara=["From a simple portfolio Website to a complex eCommerce or Content Managed System,"+
 "we offers the complete front-end website solutions.","We make tutorials on Youtube for beginner developers, "+
 "who are trying to hold a strong grip in the field of Web & Software Development."];

var serHeadElement = document.getElementById("ser-head");
var serParaElement = document.getElementById("ser-para");
var i;
var serClickIcon = document.getElementsByClassName("ser-icon");

function servicesContentToggle(event){

	if(window.innerWidth >= 768){

		for(i=0 ; i< serClickIcon.length ; i++){
			
			if(event.currentTarget == serClickIcon[i]){

				if(i==0){
					if(serClickIcon[0].className == "ser-icon"){
						serClickIcon[0].classList.add("ser-icon-active");
						serClickIcon[1].classList.remove("ser-icon-active");
					}
				}

				if(i==1){
					if(serClickIcon[1].className == "ser-icon"){
						serClickIcon[1].classList.add("ser-icon-active");
						serClickIcon[0].classList.remove("ser-icon-active");
					}
				}

				serHeadElement.innerHTML = servicesDescHeading[i];
				serParaElement.innerHTML = servicesDescPara[i];
			}
		}
	}
}


/* ===== Our Team (Box Swaping) ===== */

var teamContainerOne = document.getElementById("team-container-one");
var teamContainerTwo = document.getElementById("team-container-two");
var swap = true;

function swapTeamBoxes(){
	
	if(swap == true && window.innerWidth <= 991){

		var temp = teamContainerOne.innerHTML;
		teamContainerOne.innerHTML = teamContainerTwo.innerHTML;
		teamContainerTwo.innerHTML = temp;
		swap=false;
		
	}

	else if(swap ==false && window.innerWidth>= 992){

		var temp = teamContainerTwo.innerHTML;
		teamContainerTwo.innerHTML = teamContainerOne.innerHTML;
		teamContainerOne.innerHTML = temp;
		swap=true;
		
	}
	
}

window.addEventListener("resize",swapTeamBoxes);
window.addEventListener("load",swapTeamBoxes);


/* ===== Our Team (Developer Information Modal Content ) ===== */

var devDetailCode=["<h1><span class='heading-color'>hasnain</span> karim</h1> <h3>founder & web developer</h3> <p>Hey everyone ! "+
"This is Hasnain Karim. I am Founder and Front-end Web developer of Tebcode. I started to learn about Computer Programming "+
"in High School and in the very beginning stage i loved programming. Apart from learning programming in High School i used to "+
"spend hours and hours at the internet in learning new things related to Programming. I also started to learn about Web Develepment "+
"in a institute. My main focus or field of expertise is Web Development. I can Develope a Beautiful, Stunning  and Effective website "+
"for you.</p><div id='developer-social-handle'> <a href='https://www.facebook.com/hasnainkarim262' target='_blank'>"+
"<i class='fa fa-facebook fa-2x'></i></a><a href='https://www.twitter.com/hasnainkarim262' target='_blank'><i class='fa fa-twitter fa-2x'></i></a>"+
"<a href='https://www.codepen.io/h26k2' target='_blank'><i class='fa fa-codepen fa-2x'></i></a></div><div id='modal--close-toggle'"+
"onclick='devDetailHide()'></div>",

"<h1><span class='heading-color'>naji</span> ahmed</h1> <h3>uI / uX web developer</h3> <p>Hello there! "+
"My name is Naji Ahmed. I'm a Front-end Web developer , i got rich hand on SQL , C langauge, Java, JavaScript, HTML and CSS Skills. I'm 16 year old, little bit too young, eh? Don't worry, i'll get your work done.</p><div id='developer-social-handle'> <a href='https://www.facebook.com/BhaiVcmpi' target='_blank'>"+
"<i class='fa fa-facebook fa-2x'></i></a><a href='https://www.instagram.com/naji_47' target='_blank'><i class='fa fa-instagram fa-2x'></i></a>"+
"<a href='https://www.github.com/Bhai47' target='_blank'><i class='fa fa-github fa-2x'></i></a></div><div id='modal--close-toggle'"+
"onclick='devDetailHide()'></div>"];

var devPicCode = ["src/images/hasnain.jpg",
"src/images/naji.jpg"];

var modalContainer = document.getElementsByClassName("developer-modal");
var devDetailContainer = document.getElementById("dev--detail");
var developerThumbnail = document.getElementsByClassName("team-thumbnails");
var i;
var devPicContainer = document.getElementById("dev--picture");

function devDetailShow(mouseEvent){
	
	for(i=0 ; i<developerThumbnail.length ; i++){

		if(mouseEvent.currentTarget == developerThumbnail[i]){
			modalContainer[0].classList.add("show--developer-modal");
			devDetailContainer.innerHTML = devDetailCode[i];
			devPicContainer.style.background="url('"+devPicCode[i]+"')";
			document.body.style.overflow="hidden";
		}
		
	}

}

/* ==== Our Team (Developer Modal hide code ) ===== */

function devDetailHide(){
	modalContainer[0].classList.remove("show--developer-modal");
	document.body.style.overflow="auto";
}


/* ===== Recent Project Slider / Slider Toggler ====== */

function projectToggler(toggleContainer,event,sliderContainer,projectImage){
	var toggleButtons = toggleContainer[0].getElementsByClassName("toggle--button");
	var currentbutton;
	var forRemove = false;
	for(var h=0 ; h<toggleButtons.length ; h++){
		if(event.target == toggleButtons[h]){
			toggleButtons[h].classList.add("active--project--toggle");
			sliderContainer[h].classList.add("project--visible--true");
			projectImage[h].classList.add("project--img--visible--true")

			currentbutton=h;
			forRemove = true;
			break;
		}
	}
	if(forRemove == true){
		for(var k=0 ; k<toggleButtons.length ; k++){
			if(k != currentbutton){
				toggleButtons[k].classList.remove("active--project--toggle");
				sliderContainer[k].classList.remove("project--visible--true");
				projectImage[k].classList.remove("project--img--visible--true")
			}
		}
	}
	

}

/* ===== Our Pricing / Customization Modal =====*/

document.getElementById("pageLength").value="";

function pricingModalShow(){
	 document.getElementsByClassName("pricing--modal--container")[0].classList.add("pricing--modal--show");
	 document.getElementsByClassName("pricing--modal--container")[0].classList.remove("pricing--modal--hide");
	 document.getElementsByClassName("pricing-modal")[0].classList.add("show--");
	 document.getElementsByClassName("pricing-modal")[0].classList.remove("hide--");
	 document.body.style.overflow="hidden";
}

function pricingModalHide(){
	document.getElementsByClassName("pricing--modal--container")[0].classList.add("pricing--modal--hide");
	 document.getElementsByClassName("pricing--modal--container")[0].classList.remove("pricing--modal--show");
	 document.getElementsByClassName("pricing-modal")[0].classList.add("--hide");
	 document.getElementsByClassName("pricing-modal")[0].classList.remove("--show");
	document.body.style.overflow="auto";
}

/* ===== Our Pricing / Customization Modal ==> Closing Events ==== */

function modalEvents(event,element){
	if(event.target == element){
		pricingModalHide();
	}
}


/* ===== Our Pricing / Customization Modal ==> Options Selection ===== */


function option(event,element){

	var options = element.getElementsByClassName("option");
	
	if(event.target == options[0]){
		options[0].classList.add("check");
		options[1].classList.remove("check");
	}

	else if(event.target == options[1]){
		options[1].classList.add("check");
		options[0].classList.remove("check");
	}	

}


/* ===== OUR PRICING / CUSTOMIZATION MODAL SUBMIT ==== */

var customCalculatedPrice;

function customSubmit(){
	var container = document.getElementsByClassName("options--ol");
	var selectedOptions = container[0].getElementsByClassName("check");
	var inputtedPageLength = document.getElementById("pageLength");
	var customPlanUL = document.getElementById("custom--plan--ul");
	var customPlanLI = customPlanUL.getElementsByClassName("pricing-plan-list-span");

	for(var y=0 ; y<selectedOptions.length ; y++){
		customPlanLI[y].innerHTML = selectedOptions[y].innerHTML;
	}

	customPlanLI[customPlanLI.length-1].innerHTML = inputtedPageLength.value+" pages website";
	document.getElementById("cutom-btn-span").innerText = "Choose";
	document.getElementById("cstm-btn").value="custom_submit3";
	
	//pricing calculation

	customCalculatedPrice=0;

	(customPlanLI[0].innerHTML == "Standard logo") ? customCalculatedPrice+=2  : customCalculatedPrice+=8;
	(customPlanLI[1].innerHTML == "Simple Design") ? customCalculatedPrice+=3 : customCalculatedPrice+=7;
	(customPlanLI[2].innerHTML == "Responsive UI") ? customCalculatedPrice+=3 : customCalculatedPrice+=0;
	(customPlanLI[3].innerHTML == "SEO Friendly") ? customCalculatedPrice+=3 : customCalculatedPrice+=0;
	(customPlanLI[4].innerHTML == "Free Domain with hosting") ? customCalculatedPrice+=2 : customCalculatedPrice+=8;
	if(inputtedPageLength==1){
		customCalculatedPrice+=4;
	}
	else if(inputtedPageLength>1 && inputtedPageLength<=15){
		customCalculatedPrice+=16;
	}
	else if(inputtedPageLength>16 && inputtedPageLength<=35){
		customCalculatedPrice+=24;
	}
	else if(inputtedPageLength>36 && inputtedPageLength<=55){
		customCalculatedPrice+=48;
	}

	else if(inputtedPageLength>56){
		customCalculatedPrice+=80;
	}

	document.getElementById("cstm-price").innerHTML = "&dollar;"+customCalculatedPrice;
}

/* ===== Our Pricing / Custom Modal / Restore Default ===== */

function defaultPrice(){
	var customPlanUL = document.getElementById("custom--plan--ul");
	var customPlanLI = customPlanUL.getElementsByClassName("pricing-plan-list-span");
	
	var defaultOptions=[
		"Standard logo",
		"effective design",
		"responsive uI",
		"sEO friendly",
		"one page website",
		"free domain with hosting"
	];

	for(var h=0 ; h<customPlanLI.length ; h++){
		customPlanLI[h].innerHTML = defaultOptions[h];
	}

	document.getElementById("cstm-btn").value="customize";
	document.getElementById("cutom-btn-span").innerHTML="customize";
	document.getElementById("cstm-price").innerHTML="&dollar;15";

}


/* ==== Jump form pricing section to Contact form section ===== */

function gotoContactForm(){
	document.body.scrollTop = document.getElementById("form--area").offsetTop ;
	document.documentElement.scrollTop = document.getElementById("form--area").offsetTop;
}

/*===== Youtube Slider / Slider for featuring Youtube Videos =====*/

var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
var boxSliderContainer = document.getElementById("box--slider");
var initialTranslate = 0;
var slidingRatio = window.innerWidth/2;
var iw = window.innerWidth/2;
var bw = boxSliderContainer.offsetWidth;
var rate = bw - iw;

function moveSlider(event){
	
	if(event.currentTarget == nextButton){

		initialTranslate-=slidingRatio;
		if( -rate < initialTranslate){
			boxSliderContainer.style.transform="translateX("+initialTranslate+"px)";
		}
		else{
			initialTranslate = 0;
			boxSliderContainer.style.transform="translateX("+initialTranslate+"px)";
		}
	
		
	}

	else if(event.currentTarget == prevButton){

		initialTranslate+=slidingRatio;		
		if(initialTranslate >= slidingRatio ){
			initialTranslate = -(rate - slidingRatio);
		}

		boxSliderContainer.style.transform="translateX("+initialTranslate+"px)";	

	}
}


/* ===== BUTTON EFFECTS / BUTTON ACTIONS ===== */


var planPrice;
var planFeatures;
var userClickPrice;


var formInputName = document.getElementById("form--name");
var formInputEmail = document.getElementById("form--email");
var formMessage = document.getElementById("form--message");

formInputName = formInputEmail = "";



function buttonEffect(element){
	
	var icon = element.getElementsByTagName("i");
	icon[0].style.transform="translate(25px,-25px)";

	var button = element;

	setTimeout(function(){
		button.style.filter="blur(2px)";
		button.classList.add("bt-clicked");
	},400);

	
	if(button.value == "customButtonSubmit" ){
		
		if(  document.getElementById("pageLength").value != "" ) {

			customSubmit();
			setTimeout(function(){
				pricingModalHide();
			},600);
			
			document.getElementById("pageLength").value="";

		}

		else{
			
		showAlertModal("Please do let me know the number of pages your website has");
		alertFail();
			
		}
		
	}


	if(button.value == "customize"){
		pricingModalShow();
	}
	
	if(button.value == "custom_submit1" || button.value == "custom_submit2" || button.value=="custom_submit3"){
		
		userClickPrice=true;

		setTimeout(function(){
			showAlertModal("Thanks for selecting this. Please fill the form below to start processing.");
			alertSucces();
			gotoContactForm();
		},400);

		var chosePlan = button.value;
		chosePlan = chosePlan.charAt( (chosePlan.length)-1 );
		planPrice = document.getElementsByClassName("price")[chosePlan-1].innerHTML;
		planFeatures = document.getElementsByClassName("pricing--plan--ul")[chosePlan-1].getElementsByClassName("pricing-plan-list-span");
		
	}

	if(button.value == "contact_submit"){
		var emailValidation = document.getElementById("form--email").value;
		var atPosition = emailValidation.indexOf("@");
		var dotpos = emailValidation.lastIndexOf(".");
	
		if(document.getElementById("form--name").value == "" || document.getElementById("form--email").value == "" ||
			atPosition<1 || dotpos < atPosition+2 || dotpos+2 >= emailValidation.length){
			showAlertModal("An Error Occured while submitting the form");
			alertFail();
		}

		else{
			showAlertModal("Thanks for getting in touch with us. We will reply to your query as soon as possible");
			alertSucces();
			UserFormSubmit();
			setTimeout(documentTop,400);
			
		}
		
	}


	//changing the button to its default layout / position

	setTimeout(function(){
		icon[0].style.transform="translate(0)";
		button.style.filter="blur(0)";
		button.classList.remove("bt-clicked");
	},1000);

}


/* ===== CONTACT US / GET IN TOUCH / PLAN SELETED  ==== */

var emailToBeSent="";

function UserFormSubmit(event){
	if(userClickPrice == true){
		//console.log("User selected this pricing feature \n ---------");
		emailToBeSent = "User Selected Plan Features\n";
		for(var r=0 ; r<planFeatures.length ; r++){
			//console.log((r+1)+") feature : "+planFeatures[r].innerHTML);
			emailToBeSent += (r+1)+") "+planFeatures[r].innerHTML;
		}
		//console.log("\n total price shown to user on screen : "+planPrice);
		emailToBeSent += "\n Total price shown to user : "+planPrice;
	}

	var userName = document.getElementById("form--email") ;
	var userEmail = document.getElementById("form--name") ;
	var userMsg = formMessage ;
	//console.log("user inputted email " +userName.value);
	//console.log("user inputted name "+userEmail.value);
	//console.log("user inputted messge"+userMsg.value);

	emailToBeSent += "\n Username is : "+userName.value+"\n User email is : "+userEmail.value +"\n User inputted msg is : "+userMsg.value;
	console.log(emailToBeSent);
	userName.value="";
	userEmail.value="";
	userMsg.value="";
	userClickPrice=false;

}



/* ===== Back To Top / Move to top of the document ===== */

function documentTop(){
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
}

