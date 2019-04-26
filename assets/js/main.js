$(document).ready(function() {
	
	
	// ======== MOBILE ==========
	if($('#icon-mobile').is(":visible")) {
			
		$("#favorite-image-1").click(function(event) {
			zoomFavoriteOne(event);
		});
		
		$("#favorite-image-2").click(function(event) {
			zoomFavoriteTwo(event);
		});
		
		$("#favorite-image-3").click(function(event) {
			zoomFavoriteThree(event);
		});
		
		$("#favorite-image-4").click(function(event) {
			zoomFavoriteFour(event);
		});
		
		
		// ====== CLOSE DIVS ON CLICK =======
		$(window).click(function(event) {
			if(!event.target.matches("#icon-mobile") && $("#list-nav-mobile").hasClass("show-dropmenu")) {
				closeDropMenu();
			}
			
			if(!event.target.matches(".div-zoom-favorite") && $(".div-zoom-favorite:visible").length > 0) {
				$(".div-zoom-favorite").each(function(){
					$(this).css("display", "none");
					$("#overlay-fullscreen").css("display", "none");
				});
			}
			
		});

		$("#icon-mobile").click(function(){
			if($("#list-nav-mobile").hasClass("show-dropmenu")) {
				closeDropMenu();
			} else {
				showDropMenu();
			}
			event.stopPropagation();
		}); 
	}
	
	
	
	// ============= MEDIUM SIZE ============
	
	if($(width).width() <= 1070) {
		$("#div-medium-image-left").hover(showOverlayMediumLeft, hideOverlayMediumLeft);

		$("#div-medium-image-center").hover(showOverlayMediumCenter, hideOverlayMediumCenter);

		$("#div-medium-image-right").hover(showOverlayMediumRight, hideOverlayMediumRight);
	}
	
	
	// ========= DESKTOP =========
	$("#div-bigger-image-left").hover(showOverlayBiggerLeft, hideOverlayBiggerLeft);
	
	$("#div-bigger-image-right").hover(showOverlayBiggerRight, hideOverlayBiggerRight);
});




function showDropMenu() {
  	$("#list-nav-mobile").addClass("show-dropmenu");
}

function closeDropMenu() {
	$("#list-nav-mobile").removeClass("show-dropmenu");
	$("#icon-nav").css("color", "black");
}

function showOverlayBiggerLeft() {
	$("#div-text-bigger-images-1").addClass("div-text-images-visible");
	$("#div-text-bigger-images-1").fadeTo(300, 1);
	$("#hover-state-bigger-left").addClass("hover-visible");
	$("#hover-state-bigger-left").fadeTo(300, 0.7);
}

function hideOverlayBiggerLeft() {
	$("#hover-state-bigger-left").fadeOut(300, function() {
		$("#div-text-bigger-images-1").removeClass("div-text-images-visible");
		$("#hover-state-bigger-left").removeClass("hover-visible");
	});
}

function showOverlayBiggerRight() {
	$("#div-text-bigger-images-2").addClass("div-text-images-visible");
	$("#div-text-bigger-images-2").fadeTo(300, 1);
	$("#hover-state-bigger-right").addClass("hover-visible");
	$("#hover-state-bigger-right").fadeTo(300, 0.7);
}

function hideOverlayBiggerRight() {
	$("#hover-state-bigger-right").fadeOut(300, function() {
		$("#div-text-bigger-images-2").removeClass("div-text-images-visible");
		$("#hover-state-bigger-right").removeClass("hover-visible");
	});
}

function showOverlayMediumLeft() {
	$("#div-text-medium-left").addClass("div-text-images-visible");
	$("#div-text-medium-left").fadeTo(300, 1);
	$("#hover-state-medium-left").addClass("hover-visible");
	$("#hover-state-medium-left").fadeTo(300, 0.7);
}

function hideOverlayMediumLeft() {
	$("#hover-state-medium-left").fadeOut(300, function() {
		$("#div-text-medium-left").removeClass("div-text-images-visible");
		$("#hover-state-medium-left").removeClass("hover-visible");
	});
}

function showOverlayMediumCenter() {
	$("#div-text-medium-center").addClass("div-text-images-visible");
	$("#div-text-medium-center").fadeTo(300, 1);
	$("#hover-state-medium-center").addClass("hover-visible");
	$("#hover-state-medium-center").fadeTo(300, 0.7);
}

function hideOverlayMediumCenter() {
	$("#hover-state-medium-center").fadeOut(300, function() {
		$("#div-text-medium-center").removeClass("div-text-images-visible");
		$("#hover-state-medium-center").removeClass("hover-visible");
	});
}

function showOverlayMediumRight() {
	$("#div-text-medium-right").addClass("div-text-images-visible");
	$("#div-text-medium-right").fadeTo(300, 1);
	$("#hover-state-medium-right").addClass("hover-visible");
	$("#hover-state-medium-right").fadeTo(300, 0.7);
}

function hideOverlayMediumRight() {
	$("#hover-state-medium-right").fadeOut(300, function() {
		$("#div-text-medium-right").removeClass("div-text-images-visible");
		$("#hover-state-medium-right").removeClass("hover-visible");
	});
}

function zoomFavoriteOne(e) {
	$("#overlay-fullscreen").css("display", "block");
	$("#zoom-favorite-1").css("display", "block");
	e.stopPropagation();
}

function zoomFavoriteTwo(e) {
	$("#overlay-fullscreen").css("display", "block");
	$("#zoom-favorite-2").css("display", "block");
	e.stopPropagation();
}

function zoomFavoriteThree(e) {
	$("#overlay-fullscreen").css("display", "block");
	$("#zoom-favorite-3").css("display", "block");
	e.stopPropagation();
}

function zoomFavoriteFour(e) {	
	$("#overlay-fullscreen").css("display", "block");
	$("#zoom-favorite-4").css("display", "block");
	e.stopPropagation();
}