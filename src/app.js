console.log('PG-School Watch App');
simply.fullscreen(true);
simply.style("large");
simply.on('singleClick', function(e) {
  simply.body("Loading...");
  
  ajax({url:"http://pg-schedule.herokuapp.com/api/timeUntil"}, function(data){
    if(data==="-1"){
      simply.body("Must be break, or something");
    } else {
      simply.vibe();
      simply.body(data);
    }
  }, error());
  
});
function error(e){
  simply.text({
    title:"Error",
    body:"Please contact support"
  });
}

simply.text({
  subtitle: 'Time \'till class ',
  body: 'Press the center button to get the time left.',
}, true);

