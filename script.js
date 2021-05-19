function generate() {
    var phonenumber = document.getElementById("phonenumber").value;
    var message = document.getElementById("message").value
    var WAlink = "http://wa.me/2"+phonenumber+"?text="+message

    link = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl="+ WAlink;
    open(link);
}

