function generate() {
    var phonenumber = document.getElementById("data").value;
    var message = document.getElementById("data2").value
    var WAlink = "wa.me/2"+phonenumber+"?text="+message
    
    link = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl="+WAlink;
    open(link);
    
}

