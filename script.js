async function generate(e) {
    e.preventDefault();
    var phonenumber = document.getElementById("phonenumber").value;
    var message = document.getElementById("message").value;
    var file = document.getElementById("file").files[0];
    var size = 10
    console.log(file)

    var WAlink = "http://wa.me/2"+phonenumber+"?text="+message;
    var a = document.createElement("a");
    const formData = new FormData();
    
     if (file != null){
       formData.append('file_image', file);
    }
    
    
     await fetch('https://qrcodenotch.herokuapp.com/generate/api/v1.0/?size='+size+'&link='+WAlink, { 
	    method: 'POST',
	    mode: 'cors',
    	    cache: 'default',
	    body: formData, 
	    headers: {

		
	    }
	  }).then(
	    response => response.blob()// if the response is a JSON object
	  ).then(
	    blob => {
  		const objectURL = URL.createObjectURL(blob);
 		a.href = objectURL;
        	a.download = 'DownloadedQRCODE';
        	a.click();
        	window.URL.revokeObjectURL(objectURL);
 		}
	  ).catch(
	    error => console.log(error) // Handle the error response object
	  );

 
};


