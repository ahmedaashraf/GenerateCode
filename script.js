function generate() {
    var input = document.getElementById("data").value;
    link = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl="+input;
    open(link);
}
