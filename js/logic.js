//variables
	//locators
var $menuB = $("#menuB"),
	$comsB = $("#comsB"),
	$nav = $("#main-nav"),
	//arrays
	classes = [],
	btns = $(".navBtn"),
	coms = true;
	//functions
	randoCoors = function() {
		rNum = String(Math.random());
		$("#span1").html(" " + rNum);
	},
	glitch = function() {
		$(document.body).css("-webkit-filter", "blur(0.6px)");
		window.setTimeout(function(){$(document.body).css("-webkit-filter", "none");}, 500);
	},
	showmenu = function() {
		if ($nav.hasClass("visible")) {
			$nav.removeClass("visible");
		}else{
			$nav.addClass("visible");
		};
	},
	closeDetails = function(event) {
		var target = event.target.parentElement.parentElement;
		console.log(target);
		if(((target.className).replace(/[\n\t]/g, " ").indexOf(" visible ") > -1 ) === false) {
			//console.log("has visible");
			target.className = "locDetails hudPanel";
		};
	},
	closeAllDetails = function(event) {
		arry = $(".locDetails");
		for (var i = 0; i < arry.length; i++) {
			if(((arry[i].className).replace(/[\n\t]/g, " ").indexOf(" visible ") > -1 ) === false) {
				//console.log("has visible");
				arry[i].className = "locDetails hudPanel";
			};
			
		};
	},
	comunicationsAudio = function() {
		if (coms) {
			document.getElementById("astroSound").pause();
			document.getElementById("spaceSound").pause();
			coms = false;
		} else {
			document.getElementById("astroSound").play();
			document.getElementById("spaceSound").play();
			coms = true;
		}
	},
	initScrolls = function() {
		scrolls = document.getElementsByClassName("customScroll");
		for (var i = 0; i < scrolls.length; i++) {
			Ps.initialize(scrolls[i], {
			  suppressScrollX: true
			});
		};
	};
//audio presets
 	$("#astroSound").prop('volume', 0.05);
 	$("#spaceSound").prop('volume', 0.3);
//
//
//scroll Plug In
initScrolls();

//eventos
$menuB.click(function() {
  showmenu();
  closeAllDetails();
})

$comsB.click(function() {
  comunicationsAudio();
})

$("#navBtn1").click(function() {
  console.log("NGC6503");
  /*$(document.body).fadeOut(500, function(){
  	$(document.body).css("background", "url('img/NGC6503.jpg') no-repeat center center fixed");
  	$(document.body).fadeIn(500);
  });*/
  closeAllDetails();
  $("#NGC6503").addClass("visible");
})

$("#navBtn2").click(function() {
  console.log("NGC1300");
  /*$(document.body).fadeOut(500, function(){
  	$(document.body).css("background", "url('img/NGC1300.jpg') no-repeat center center fixed");
  	$(document.body).fadeIn(500);
  });*/
  closeAllDetails();
  $("#NGC1300").addClass("visible");
})

$("#navBtn3").click(function() {
  console.log("M81");
  /*$(document.body).fadeOut(500, function(){
  	$(document.body).css("background", "url('img/M81.jpg') no-repeat center center fixed");
  	$(document.body).fadeIn(500);
  });*/
  closeAllDetails();
  $("#NGC3031").addClass("visible");
})

$("#navBtn4").click(function() {
  console.log("NGC3810");
  /*$(document.body).fadeOut(500, function(){
  	$(document.body).css("background", "url('img/NGC3810.jpg') no-repeat center center fixed");
  	$(document.body).fadeIn(500);
  });*/
  closeAllDetails();
  $("#NGC3351").addClass("visible");
})

$(".closer").click(function(event) {
  closeDetails(event);	
})


//intervalos
setInterval(function(){ randoCoors(); }, 200);
setInterval(function(){ glitch(); }, 2000);


/*traido desde nav logic por parent*/
/*hideSubNavs = function(event) {
		var target = event.target.parentElement;
		//console.log(target);
			if(((" " + target.className + " ").replace(/[\n\t]/g, " ").indexOf(" snd-link ") > -1 ) === false) {
				for (var i = 0; i < $secondLevelTabs.length; i++) {
					$secondLevelTabs[i].className = "snd-lvl";
				//$secondLevelTabs[i].className = "snd-lvl";
			};
		}
	};*/
/****/
