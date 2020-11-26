var max=61;
var duration = 1500;
var photos = [];
var photo;
var cnt=0;
var correct=0;

$(document).ready(function(){
	$('body').on('click', '#start', 	starter);
	$('body').on('click', '.wrap',	 	navigator);

	$("body" ).keypress(function(ev){
		if(ev.which != 32 && ev.which != 13) return;

		var src = $('img').attr('src').replace("images/","").replace(".jpg","") + "";
		console.log(photos.toString().match(new RegExp(src, 'g')).length);
		
		if(photos.toString().match(new RegExp(src, 'g')).length > 1){
			correct++;
			$('body').css({'background':'green'});
		}else{
			$('body').css({'background':'red'});
		}
		setTimeout(function(){ $('body').css({'background':'none'}) }, 300);
	});
});

function starter(ev){
	
	$(this).fadeOut();
	// map
	var timer = setInterval(randomx, duration);
	
	// randomizer func
	function randomx(){
		photo = Math.floor((Math.random() * max) + 1);;
		//console.log(photo);
		photos[cnt++] = photo + "";
		$('img').attr('src','images/'+ photo +'.jpg');
		$('img').fadeIn();
	}

	// stop randomizer
	setTimeout(function(){
		clearInterval(timer);
		$('img').fadeOut();
		$('#start').text(correct*100/max + "%").fadeIn();
	}, (max*1.5)*duration);
}

function navigator(ev){
	window.location.href = $(this).attr('data-href');
}
