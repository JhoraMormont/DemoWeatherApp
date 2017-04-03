const DarkSky = require('dark-sky')
const forecast = new DarkSky('51037766f3fa774b7daf29e67e0c7fa7');

module.exports = {

  getTiempo: (lat,lon) => {

    return forecast
      .latitude(lat)
      .longitude(lon)
      .exclude('minutely,hourly,daily,flags,alerts')
      .units('ca')
      .get()
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      })

  },

  getAll: (client,location) => {
    return client.hgetallAsync(location).then(function(res){
      return res;
    })
  },

  setError: (client,err) => {
    var d = new Date();
    
    client.hmset("api.errors",d.getTime().toString(),err.message,function(err,res){
      if(err){
        console.log(err);
      }else{
        console.log("Error pushed");
      }
    });

  }

}