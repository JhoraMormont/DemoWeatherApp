
$(function(){

	let city = mobx.observable({
		timezone: null,
		temperature: null,
		hour: null
	});

	mobx.autorun(() => {
		$('#ciudad').text(city.timezone);
		$('#tiempo').text(city.temperature);
		$('#hora').text(city.hour);
	})


  	$("#askForm").submit(function(event){
 
  		let location = $('#location').val()

  	 	$.get("http://localhost:3000/temp/"+location, function(data, status){
  	 		if(status === 'success'){
  	 			let obj = JSON.parse(data);
  	 			city.temperature = obj.currently.temperature;
  	 			city.hour = moment.tz(obj.currently.time*1000, obj.timezone).format('LT');
  	 			city.timezone = obj.timezone;
  	 		}	
    	});	

    	event.preventDefault();
  	})



});
