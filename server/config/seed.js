
module.exports =  {

	generate: (client) =>{
		client.hmset("santiago",["lat","-33.45","lon","-70.6667"],function(err,res){
			if(err){
				Console.log(err);
			}else{
				console.log("Santiago populated: "+res);
			}
		});

		client.hmset("zurich",["lat","47.3666700","lon","8.5500000"],function(err,res){
			if(err){
				Console.log(err);
			}else{
				console.log("Zurich populated "+res);
			}
		});

		client.hmset("auckland",["lat","-36.8666700","lon","174.7666700"],function(err,res){
			if(err){
				Console.log(err);
			}else{
				console.log("Auckland populated "+res);
			}
		});

		client.hmset("sidney",["lat","-33.8678500","lon","151.2073200"],function(err,res){
			if(err){
				Console.log(err);
			}else{
				console.log("Sidney populated "+res);
			}
		});

		client.hmset("londres",["lat","51.5085300","lon","-0.1257400"],function(err,res){
			if(err){
				Console.log(err);
			}else{
				console.log("Londres populated "+res);
			}
		});

		client.hmset("georgia",["lat","33.7490000","lon","-84.3879800"],function(err,res){
			if(err){
				Console.log(err);
			}else{
				console.log("Georgia populated "+res);
			}
		});
	},

}
