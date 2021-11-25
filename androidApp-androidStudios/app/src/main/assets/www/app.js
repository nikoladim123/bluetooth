var testClas = document.getElementsByClassName('testClas');

var xhttp = new XMLHttpRequest();
    function sendData(dataX,dataY,dataZ,absolute) {

      xhttp.open("POST", "http://192.168.1.8:3000/123", true);
      xhttp.setRequestHeader("Content-Type", "application/json");
//      xhttp.send(JSON.stringify({name:"John Rambo", time:"2pm"}));
      xhttp.send(JSON.stringify({myDataX:dataX, myDataY:dataY, myDataZ:dataZ,absolute:absolute}));
      console.log(123);
    }
    xhttp.onreadystatechange = function() {
        console.log(this.responseText);
    }
          function handleOrientation(event) {
            var z    = event.alpha;
            var x = event.beta; // In degree in the range [-180,180)
            var y = event.gamma; // In degree in the range [-90,90)
            var absolute = event.absolute;
            sendData(Math.floor(x* 100) / 100, Math.floor(y* 100) / 100,Math.floor(z* 100) / 100,absolute);
            }

          window.addEventListener('deviceorientation', handleOrientation);

setInterval(function () {
  testClas[0].style.color = 'red';
//  sendData();

}, 1000);