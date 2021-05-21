function generate() {
    var phonenumber = document.getElementById("phonenumber").value;
    var message = document.getElementById("message").value;
    var file = document.getElementById("file").files[0];


    var WAlink = "http://wa.me/2"+phonenumber+"?text="+message;

    const formData = new FormData();
    
    if (file != null){
       formData.append('file', file);
    }
    formData.append('link', WAlink);
    formData.append('size',10);
    
    getcode(formData);
 
};

async function getcode (formData) {
	    await fetch('https://qrcodenotch.herokuapp.com/generate/api/v1.0/', { 
	    method: 'POST',
	    headers: {

	    },
	    body: formData 
	  }).then(
	    response => response.json() // if the response is a JSON object
	  ).then(
	    success => console.log(success) // Handle the success response object
	  ).catch(
	    error => console.log(error) // Handle the error response object
	  );
 };
