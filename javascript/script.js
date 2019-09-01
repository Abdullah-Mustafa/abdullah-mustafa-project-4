  // Create app namespace to hold all methods
  const app = {};
 
	app.getNews = function (options, countryChosen) {
		$.ajax({
			url: `https://newsapi.org/v2/top-headlines?country=${countryChosen}&category=${options}&pageSize=3&apiKey=36036aa88c3a4c4c81c706cc7d0135e7`,
			 method: 'GET',
			 dataType: 'json',
			 data: {
				key: app.apiKey,
				format: 'json',
				category: options, 
				country : countryChosen
			 }
		})
		.then(function(result){
			 app.ticker(result);
			 app.displayNews(result); 
			console.log("Object",result);
			
		})
	}

// Display data on the page
app.displayNews= function(result){
    result.articles.forEach(function(piece){ 
	
		const htmlToPost = `
		<div class="col-1-of-3">
		   <div class="card">
			 <div class="card__side card__side--front">
			  <div class="card__picture card__picture--1">
				 <img src=${piece.urlToImage} alt="Photo is not avialable on your device">
			  </div>
			  <h4 class="card__heading">
				<span class="card__heading-span card__heading-span--1">${piece.source.name}</span>
			  </h4>
			  <div class="card__details">
			  <p class="card__details--paragraph">${piece.description}</p>
			  </div>
			 </div>
			 <div class="card__side card__side--back card__side--back-1">
			  <div class="card__cta">
				<div class="card__price-box">
				   <h4 class="card__price-box--heading">Check Full story</h4>
				   <h4 class="card__price-box--heading">below</h4>
				</div>
				<a href="#popup" class="read-more">Read more</a>
			  </div>
			</div>
		   </div>
		</div>`
	  $('#results').append(htmlToPost).addClass("row");
	 
	});
};


app.ticker = function(result){
	result.articles.forEach(function(item){
		const ticker = ` <div class="ticker">
		<div class="ticker__item">${item.description}</div>
		<div class="ticker__item">${item.source.name}</div>
		<div class="ticker__item">${item.content}</div>
		<div class="ticker__item">${item.description}</div>
		<div class="ticker__item">${item.title}</div>
		<div class="ticker__item">${item.source.name}</div>
	
		 </div>`;
		$('.ticker-wrap').append(ticker);
	})
}
$('.btn').on('click', function(event) {
	event.preventDefault();

	$('html, body').stop().animate({
		scrollTop: $('.results-button').offset().top -400

	}, 1000);
	return false;
})


app.changeoptions = function(){	
    $('input').on('click', function(){
		const userCategory = $('#category option:selected').val();
		const userCountry = $('#country option:selected').val();
		$('#results').empty();
		app.getNews(userCategory, userCountry );
		console.log("test")
		
	})
	$('input').on('click', function (event) {
		event.preventDefault();

		$('html, body').stop().animate({
			scrollTop: $('#results').offset().top

		}, 1800);
		return false;
	})
}

$('.reset').on('click', function () {
	location.reload();
});
  // Start app
  app.init = function() {
    app.changeoptions();
	app.getNews();
  }


$(document).ready(function(){
	app.init();


});





///////////////// scroll top 
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});







































////////////////////Typed JS 

$(function(){
	$(".typed").typed({
        strings: ["the world","Politics", "Business", "Art", "Technology", "Sports","Economy", "Science", "entertainment","the world" ],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 70,
		// time before typing starts
		startDelay: 1300,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});




