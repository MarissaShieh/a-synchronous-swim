

setInterval((function() {

  const serverUrl = 'http://127.0.0.1:3000';

  $.get({
    url: serverUrl,
    type: 'GET',
    success: (direction) => {
      console.log(direction)
       SwimTeam.move(direction);
    },
    error: (err) => console.log("There has been an error! ", err)
  })

}),2000);
