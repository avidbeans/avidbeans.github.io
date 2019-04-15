main();

function main() {
	loadStuff();
}

function loadStuff() {
	$("nav").load("/docs/pages/nav.html")
}

$(window).on("load", function(){
	$("#cover").addClass("gone");
});
