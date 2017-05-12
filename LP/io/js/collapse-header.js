function makeCollapseHeader(){
	var isWindow = $(window),
		isHeader = $(".header");

	isWindow.scroll(function(){
		if(isWindow.scrollTop()==0){
			isHeader.removeClass("header--collapse");
		} else {
			isHeader.addClass("header--collapse");
		}
	})
}

$(function(){
	makeCollapseHeader();
})