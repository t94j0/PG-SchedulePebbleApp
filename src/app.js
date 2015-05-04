console.log('PG-School Watch App');
simply.fullscreen(false);
simply.style("large");

simply.on('singleClick', function(e) {
  simply.body("Loading...");
  ajax({url:"http://pg-schedule.herokuapp.com/api/timeUntil"}, function(timeUntil){
    ajax({url:"http://pg-schedule.herokuapp.com/api/currentBlock"}, function(currentBlock){
      simply.text({
        subtitle:"Time \'till class ",
        body: timeUntil + " minutes until " + currentBlock + "ends"
      });
    });
  });
});

simply.text({
  subtitle: 'Time \'till class ',
  body: 'Press the center button to get the time left.',
}, true);

