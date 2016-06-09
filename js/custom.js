finishedTut();

checkIfVisited();

function checkIfVisited(){
	if ( window.location.pathname == '/' ){
// Index (home) page
if (localStorage.getItem("been here") === null) {
	return;
} else {
	window.location.assign("logo-guidelines.html");
	return;
}

} else if ( window.location.pathname == '/picture-guidelines.html' ){

	displayNav();
	localStorage.setItem('tut finished', 'yes');

} else {
// Other page
function populateStorage() {
	localStorage.setItem('been here', 'yes');
}
populateStorage();
}
}

function finishedTut(){ 
	if (localStorage.getItem("tut finished") === null){

	} else if (localStorage.getItem("tut finished") === null && window.location.pathname == '/picture-guidelines.html' ){

	alert("hi!");

}

	 else {
		displayNav();
	}
}

function displayNav(){
	$(".nav-hide").show();
}



var logo = {
	smallTri1:["M460.931,444.262 C460.931,444.262 644.112,444.262 644.112,444.262 C644.112,444.262 552.522,535.837 552.522,535.837 C552.522,535.837 460.931,444.262 460.931,444.262 Z","smallTri1Path"],

	smallTri2: ["M778.979,576.518 C778.979,576.518 778.979,759.638 778.979,759.638 C778.979,759.638 687.372,668.078 687.372,668.078 C687.372,668.078 778.979,576.518 778.979,576.518 Z","smallTri2Path"],

	bigTri1: ["M320.992,769.840 C320.992,769.840 320.992,329.845 320.992,329.845 C320.992,329.845 534.742,549.843 534.742,549.843 C534.742,549.843 320.992,769.840 320.992,769.840 Z","bigTri1Path"],

	bigTri2: ["M771.356,780.008 C771.356,780.008 331.213,780.008 331.213,780.008 C331.213,780.008 551.284,566.331 551.284,566.331 C551.284,566.331 771.356,780.008 771.356,780.008 Z","bigTri2Path"],

	mediumTri: ["M778.978,524.286 C778.978,524.286 573.643,319.020 573.643,319.020 C573.643,319.020 778.996,319.002 778.996,319.002 C778.996,319.002 778.978,524.286 778.978,524.286 Z","mediumTriPath"],

	diamond: ["M670.842,446.849 C670.842,446.849 773.846,549.818 773.846,549.818 C773.846,549.818 670.842,652.787 670.842,652.787 C670.842,652.787 567.839,549.818 567.839,549.818 C567.839,549.818 670.842,446.849 670.842,446.849 Z","diamondPath"],

	rhombus: ["M338.810,319.636 C338.810,319.636 539.810,319.636 539.810,319.636 C539.810,319.636 639.038,418.830 639.038,418.830 C639.038,418.830 438.038,418.830 438.038,418.830 C438.038,418.830 338.810,319.636 338.810,319.636 Z","rhombusPath"] 
};

var bear = {
	smallTri1:["M119.003,452.830 C119.003,452.830 248.532,323.301 248.532,323.301 C248.532,323.301 248.521,452.819 248.521,452.819 C248.521,452.819 119.003,452.830 119.003,452.830 Z","smallTri1Path"],

	smallTri2: ["M649.583,782.184 C649.583,782.184 779.002,652.765 779.002,652.765 C779.002,652.765 779.356,782.538 779.356,782.538 C779.356,782.538 649.583,782.184 649.583,782.184 Z","smallTri2Path"],

	bigTri1: ["M778.992,630.755 C778.992,630.755 467.869,319.631 467.869,319.631 C467.869,319.631 774.574,324.050 774.574,324.050 C774.574,324.050 778.992,630.755 778.992,630.755 Z", "bigTri1Path"],

	bigTri2: ["M807.992,758.013 C807.992,758.013 807.992,317.994 807.992,317.994 C807.992,317.994 1022.013,538.003 1022.013,538.003 C1022.013,538.003 807.992,758.013 807.992,758.013 Z","bigTri2Path"],

	mediumTri: ["M449.022,332.995 C449.022,332.995 654.013,537.980 654.013,537.980 C654.013,537.980 449.004,537.998 449.004,537.998 C449.004,537.998 449.022,332.995 449.022,332.995 Z","mediumTriPath"],

	diamond: ["M426.263,316.453 C426.263,316.453 426.266,462.119 426.266,462.119 C426.266,462.119 280.599,462.117 280.599,462.117 C280.599,462.117 280.596,316.450 280.596,316.450 C280.596,316.450 426.263,316.453 426.263,316.453 Z","diamondPath"],

	rhombus: ["M307.605,712.537 C307.605,712.537 449.630,570.512 449.630,570.512 C449.630,570.512 589.730,570.385 589.730,570.385 C589.730,570.385 447.705,712.410 447.705,712.410 C447.705,712.410 307.605,712.537 307.605,712.537 Z","rhombusPath"] 
};

var bird = {
	smallTri1:["M470.004,330.483 C470.004,330.483 599.532,200.955 599.532,200.955 C599.532,200.955 599.522,330.473 599.522,330.473 C599.522,330.473 470.004,330.483 470.004,330.483 Z","smallTri1Path"],

	smallTri2: ["M768.013,906.010 C768.013,906.010 584.987,906.010 584.987,906.010 C584.987,906.010 676.500,813.997 676.500,813.997 C676.500,813.997 768.013,906.010 768.013,906.010 Z","smallTri2Path"],

	bigTri1: ["M291.403,778.523 C291.403,778.523 602.527,467.400 602.527,467.400 C602.527,467.400 598.109,774.105 598.109,774.105 C598.109,774.105 291.403,778.523 291.403,778.523 Z","bigTri1Path"],

	bigTri2: ["M628.992,820.013 C628.992,820.013 628.992,379.994 628.992,379.994 C628.992,379.994 843.013,600.003 843.013,600.003 C843.013,600.003 628.992,820.013 628.992,820.013 Z","bigTri2Path"],

	mediumTri: ["M851.978,564.005 C851.978,564.005 646.987,359.020 646.987,359.020 C646.987,359.020 851.996,359.002 851.996,359.002 C851.996,359.002 851.978,564.005 851.978,564.005 Z","mediumTriPath"],

	diamond: ["M628.896,181.914 C628.896,181.914 774.541,181.889 774.541,181.889 C774.541,181.889 774.516,327.534 774.516,327.534 C774.516,327.534 628.871,327.558 628.871,327.558 C628.871,327.558 628.896,181.914 628.896,181.914 Z","diamondPath"],

	rhombus: ["M555.002,807.011 C555.002,807.011 354.149,807.011 354.149,807.011 C354.149,807.011 254.993,905.987 254.993,905.987 C254.993,905.987 455.847,905.987 455.847,905.987 C455.847,905.987 555.002,807.011 555.002,807.011 Z","rhombusPath"] 
};

var cat = {
	smallTri1:["M197.012,356.006 C197.012,356.006 197.012,173.013 197.012,173.013 C197.012,173.013 288.994,264.510 288.994,264.510 C288.994,264.510 197.012,356.006 197.012,356.006 Z","smallTri1Path"],

	smallTri2: ["M431.010,172.987 C431.010,172.987 431.010,356.013 431.010,356.013 C431.010,356.013 338.997,264.500 338.997,264.500 C338.997,264.500 431.010,172.987 431.010,172.987 Z","smallTri2Path"],

	bigTri1: ["M669.992,769.997 C669.992,769.997 669.992,330.001 669.992,330.001 C669.992,330.001 883.992,549.999 883.992,549.999 C883.992,549.999 669.992,769.997 669.992,769.997 Z","bigTri1Path"],

	bigTri2: ["M587.837,883.160 C587.837,883.160 898.977,572.020 898.977,572.020 C898.977,572.020 894.742,878.925 894.742,878.925 C894.742,878.925 587.837,883.160 587.837,883.160 Z","bigTri2Path"],

	mediumTri: ["M647.956,338.012 C647.956,338.012 648.005,628.007 648.005,628.007 C648.005,628.007 503.004,482.985 503.004,482.985 C503.004,482.985 647.956,338.012 647.956,338.012 Z","mediumTriPath"],

	diamond: ["M312.998,274.005 C312.998,274.005 416.002,377.005 416.002,377.005 C416.002,377.005 312.998,480.006 312.998,480.006 C312.998,480.006 209.995,377.005 209.995,377.005 C209.995,377.005 312.998,274.005 312.998,274.005 Z","diamondPath"],

	rhombus: ["M626.001,335.991 C626.001,335.991 484.093,477.963 484.093,477.963 C484.093,477.963 344.004,477.987 344.004,477.987 C344.004,477.987 485.913,336.014 485.913,336.014 C485.913,336.014 626.001,335.991 626.001,335.991 Z","rhombusPath"] 
};

var logoClick = (function(){

	$(".image-button").on("click",function(){

		if (localStorage.getItem("tut finished") === null) {
			$("#picture-click").fadeIn();
		}


		clickedId = $(this).attr("id");

		if (clickedId === "cat"){

			$(".text-active").fadeOut("fast",function(){
				$(".text-active").removeClass("text-active");
				$(".cat-text-container").fadeIn("fast").addClass("text-active");
			});

			$(this).siblings().removeClass("active");
			$(this).addClass("active");

			var clickedId = cat;

		} else if (clickedId === "bear"){

			$(".text-active").fadeOut("fast",function(){
				$(".text-active").removeClass("text-active");
				$(".bear-text-container").fadeIn("fast").addClass("text-active");
			});

			$(this).siblings().removeClass("active");
			$(this).addClass("active");

			var clickedId = bear;

		} else if (clickedId === "bird"){

			$(".text-active").fadeOut("fast",function(){
				$(".text-active").removeClass("text-active");
				$(".bird-text-container").fadeIn("fast").addClass("text-active");
			});

			$(this).siblings().removeClass("active");
			$(this).addClass("active");

			var clickedId = bird;

		} else {

			$(".text-active").fadeOut("fast",function(){
				$(".text-active").removeClass("text-active");
				$(".logo-text-container").fadeIn("fast").addClass("text-active");
			});

			$(this).siblings().removeClass("active");
			$(this).addClass("active");

			var clickedId = logo;
		}

		for (var name in clickedId) {

// setTimeout(function(){},3000);

			if (clickedId.hasOwnProperty(name)) {

				console.log('This path ID is ' + clickedId[name][1] + '! Its path data is ' + clickedId[name][0]);

				$("#"+clickedId[name][1]).attr("d",clickedId[name][0]);

			} else {
				
				console.log(name); // toString or something else
			}
		}
	});
})();	

$(".logo-yellow").mouseenter(function(){
	$(".cls-6").css("fill","#f7cd00");
	$(".cls-4").css("fill","#000000");
});

$(".logo-yellow").mouseleave(function(){
	$(".cls-6").css("fill","#000000");
	$(".cls-4").css("fill","#ffffff");
});

$(".logo-white").mouseenter(function(){
	$(".cls-6").css("fill","#ffffff");
	$(".cls-4").css("fill","#025fa7");
});

$(".logo-white").mouseleave(function(){
	$(".cls-6").css("fill","#000000");
	$(".cls-4").css("fill","#ffffff");
});

function pictureButton(){
	$("#bad").on("click",function(){

		event.preventDefault()

		if ($(this).hasClass("bad")){
			$(this).removeClass("bad").text("The good...").addClass("good");
			$("i").fadeOut(200,function(){
				$("i").removeClass("fa-check").fadeIn(200).addClass("fa-times");
			})
			$("#picture-image").fadeOut(200,function(){
				$(this).attr("src","img/donts.png").fadeIn();
			});
		} else {
			$(this).removeClass("good").text("The bad...").addClass("bad");
			$("i").fadeOut(200,function(){
				$("i").removeClass("fa-times").fadeIn(200).addClass("fa-check");
			})
			$("#picture-image").fadeOut(200,function(){
				$(this).attr("src","img/dos.png").fadeIn();
			});
		}

	});
}

function demoReset(){
	$("#demo-button").on("click",function(){

		event.preventDefault()
		localStorage.clear();
		window.location.assign("/");

	})
}

demoReset();

pictureButton();

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});



//AJAX page transition!

// $('#start-button').on('click', function(e) {                 // User clicks nav link
//   e.preventDefault();                                // Stop loading new link
//   var url = this.href;                               // Get value of href

//   // $('nav a.current').removeClass('current');         // Clear current indicator
//   // $(this).addClass('current');                       // New current indicator

//   $('.all-container').remove();                          // Remove old content
//   $('#content').load(url + ' .all-container').hide().fadeIn('slow'); // New content
// });

// $('#picture-click').on('click', function(e) { 
// alert("hi");                // User clicks nav link
//   e.preventDefault();                                // Stop loading new link
//   var url = this.href;                               // Get value of href

//   // $('nav a.current').removeClass('current');         // Clear current indicator
//   // $(this).addClass('current');                       // New current indicator

//   $('.all-container').remove();                          // Remove old content
//   $('#content2').load(url + ' .all-container').hide().fadeIn('slow'); // New content
// });


