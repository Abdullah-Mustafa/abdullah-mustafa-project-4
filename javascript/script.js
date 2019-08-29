  // Create app namespace to hold all methods
  const app = {};


 
	app.getNews = function (options, countryChosen) {
		$.ajax({
		     url: `https://newsapi.org/v2/top-headlines?country=${countryChosen}&category=${options}&apiKey=42ca1d3a90124a35a4b9169c2b910b10`,
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
		const htmlToPost = `<div class="last-section">
		<h2 class="title">${piece.author}</h2>
		<p class="paragraph">${piece.title}</p>
		<p>source : ${piece.source.name}</p>
		<img class="result-image" src=${piece.urlToImage}>
		</div>`;
	  $('#results').append(htmlToPost);
	 
	});
};


app.ticker = function(result){
	result.articles.forEach(function(item){
		const ticker = ` <div class="ticker">
		<div class="ticker__item">${item.description}</div>
		<div class="ticker__item">${item.source.name}</div>
		<div class="ticker__item">${item.title}</div>
		<div class="ticker__item">${item.description}</div>
		<div class="ticker__item">${item.description}</div>
		<div class="ticker__item">${item.source.name}</div>
		<div class="ticker__item">${item.title}</div>
		<div class="ticker__item">${item.description}</div>
		 </div>`;
		$('.ticker-wrap').append(ticker);
	})
}



app.changeoptions = function(){	
    $(':input').on('click', function(){
		const userCategory = $('#category option:selected').val();
		const userCountry = $('#country option:selected').val();
		$('#results').empty();
		app.getNews(userCategory, userCountry );
		console.log("test")
		
    })
}
  // Start app
  app.init = function() {
    app.changeoptions();
	app.getNews();
  }


$(document).ready(function(){
	app.init();

});
























































////////////////////Typed JS 

$(function(){
	$(".typed").typed({
        strings: ["the world","Politics", "Business", "Art", "Technology", "sport","Economy"],
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




