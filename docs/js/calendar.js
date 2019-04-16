// Load up stuff
$(".day .contentCard").append("<div class='info'><div class='sun'></div><div class='water'>");
$(".day").append("</div></div><div class='dayCard'></div>");
for (var i = 0; i < $(".day").length; i++) {
	$parent = ".day:nth-child(" + (i + 1) + ")";
	$modal = $parent + " .modal";
	$($parent + " .info .sun").append("<img src='/images/icons/sun.svg' height='32px'><p>" + $(".day:nth-child(" + (i + 1) + ")").attr("sunlight") + "</p>");
	$($parent + " .info .water").append("<img src='/images/icons/water.svg' height='32px'><p>" + $(".day:nth-child(" + (i + 1) + ")").attr("water") + "</p>");
	$($parent + " .info").append("<p class='date'>" + $(".day:nth-child(" + (i + 1) + ")").attr("date") + "</p>");
	$($parent + " .dayCard").append("<p>" + $(".day:nth-child(" + (i + 1) + ")").attr("date") + "</p>");
	$($modal).attr("water", $($parent).attr("water"));
	$($modal).attr("date", $($parent).attr("date"));
	$($modal).append("<div class='modalContent'></div>");
	$($modal + " .modalContent").append("<div class='title'><p>" + $($modal).attr("date") + "</p></div><div class='modalInfo'></div>");
	$($modal + " .modalInfo").append("<div class='img'><img src=" + $($parent).children(".contentCard").children("img").attr("src") + "><p>" + $($parent).attr("name") + "</p></div>");
	$($modal + " .modalInfo").append("<div class='table'><table><tr><td><img src='/images/icons/sun.svg' height='48px'><p>Natural Light</p></td><td><p>" + $($modal).attr("nLight") + "</p></td></tr><tr><td><img src='/images/icons/lightbulb.svg' height='48px'><p>Artificial Light</p></td><td><p>" + $($modal).attr("aLight") + "</p></td></tr><tr><td><img src='/images/icons/water.svg' height='48px'><p>Amount of Water</p></td><td><p>" + $($modal).attr("water") + "</p></td></tr></table></div>");
	$($modal + " .modalInfo").append("<div class='notes'><p>" + $($modal).attr("notes") + "</p></div>");
	$($modal).append("<p class='closeButton' onclick='closeModal(this)'>X</p>");
	$("#content").append($($modal));
}
$(".day").addClass("showContent");

// Flips all but card selected
function flip(card) {
	if ($(card).hasClass("showContent")) {
		for (var i = 0; i < $(".day").length; i++) {
			$myDay = $(".day:nth-child(" + (i + 1) + ")")
			if ($($myDay).is(card)) {
				$(".modal:nth-of-type(" + (i + 2) + ")").addClass("show");
			} else {
				$myDay.attr("class", "day showDate");
			}
		}
	}
}

function closeModal(x) {
	$modal = $(x).parent();
	for (var i = 0; i < $(".day").length; i++) {
		$myDay = $(".day:nth-child(" + (i + 1) + ")");
		if ($($myDay).hasClass("showDate")) {
			$myDay.attr("class", "day showContent");
		}
	}
	$modal.removeClass("show");
}
