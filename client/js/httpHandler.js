

setInterval((function() {

  const serverUrl = 'http://127.0.0.1:3000/directions';

  $.get({
    url: serverUrl,
    type: 'GET',
    success: (direction) => {
       //console.log(direction)
       SwimTeam.move(direction);
    },
    error: (err) => console.log("There has been an error getting commands! ", err)
  })

}),0);


setInterval((function() {

  const serverUrl = 'http://127.0.0.1:3000/background.jpg';

  $.get({
    url: serverUrl,
    type: 'GET',
    success: (imgUrl) => {
     // $(".bg").css("background-image", "url('/css/images/css.jpg')");
      console.log(imgUrl);
    },
    error: (err) => console.log("There has been an error getting images! ", err)
  })

}),3000);