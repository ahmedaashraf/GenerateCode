function generate() {
    var phonenumber = document.getElementById("data").value;
    var message = document.getElementById("data2").value
    userAction(phonenumber,message)

}

const userAction = async (phonenumber,message) => {
    const xhr = new XMLHttpRequest();
    const url = 'https://chart.googleapis.com/chart?';
    xhr.open('GET', url);
    xhr.send(phonenumber);
    xhr.send(message)
  }
