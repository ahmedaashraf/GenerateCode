function generate() {
    var phonenumber = document.getElementById("data").value;
    var message = document.getElementById("data2").value
    userAction(phonenumber,message)

}

const userAction = async (phonenumber,message) => {
    const response = await fetch('https://chart.googleapis.com/chart?', {
      method: 'POST',
      body: {
          "cht":"qr",
          "chs":"200x200",
          "chl": "wa.me/2"+phonenumber+"?text"+message
      }, 
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://ahmedaashraf.github.io/GenerateCode/QRcode.html',
        'Access-Control-Allow-Credentials':'true'
      }
    });
   
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson)
  }
