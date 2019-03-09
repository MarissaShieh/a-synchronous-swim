

setInterval((function() {

  const serverUrl = 'http://127.0.0.1:3000';

  $.get({
    url: serverUrl,
    type: 'GET',
    success: (direction) => {
       SwimTeam.move(direction);
    },
    error: () => console.log("There has been an error!")
  })

}),200);
