function iniciarCamara() {
	var tapEnabled = true; //enable tap take picture
	var dragEnabled = true; //enable preview box drag across the screen
	var toBack = true; //send preview box to the back of the webview
	var caja = document.getElementById('previewPicture');
	var vx = caja.offsetLeft;
	var vy = caja.offsetTop + 44;
	var rect = {x: vx, y: vy, width: 250, height:250};
	CameraPreview.startCamera(rect, "back", tapEnabled, dragEnabled, toBack);
}

function detenerCamara() {
	CameraPreview.stopCamera();
}

function tomarFoto() {
	CameraPreview.takePicture({maxWidth:640, maxHeight:640});
}

function initHandler()
{
	CameraPreview.setOnPictureTakenHandler(function(result){
	  document.getElementById('originalPicture').src = result[0];//originalPicturePath;
	  document.getElementById('previewPicture').src = result[1];//previewPicturePath;
	});
}

function cambiarCamara() {
	CameraPreview.switchCamera();
}

function show() {
	CameraPreview.show();
}

function hide() {
	CameraPreview.hide();
}

document.addEventListener('deviceready', function(){	
  initHandler();
}, false);