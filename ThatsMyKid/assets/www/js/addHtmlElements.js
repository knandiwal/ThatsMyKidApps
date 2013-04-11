function addElement() {
	console.info("In addElement: ");
  removeEmptyPicture();
  var ni = document.getElementById('stage');

  var numi = document.getElementById('anzBilder');

  var num = (document.getElementById('anzBilder').value -1)+ 2;

  numi.value = num;
  console.log("create Element: ");
  var newdiv = document.createElement('div');

  var divClassName = 'picture';

  newdiv.setAttribute('class', divClassName);
  
  var divIdName = 'picture' + num;
  
  newdiv.setAttribute('id', divIdName);
  
  var divStyleContent = 'background-image:url(DSC_0437.JPG);background-size: Auto 100%;background-position:center;';
	console.info("In addElement style hinzufuegen: " + divStyleContent);
  newdiv.setAttribute('style', divStyleContent);

	console.info("append Element: ");
  ni.appendChild(newdiv);
  addEmptyPicture();
  return divIdName;
}

function removeEmptyPicture() {

var ni = document.getElementById('stage');

var emptydiv = document.getElementById('emptyPicture');

ni.removeChild(emptydiv);

}

function addEmptyPicture() {
	var ni = document.getElementById('stage');

	var emptydiv = document.createElement('div');
	emptydiv.setAttribute('class', 'picture');
	emptydiv.setAttribute('id', 'emptyPicture');

	var img = document.createElement('img');
	
	img.setAttribute('id', 'fingerPicture');
	img.setAttribute('width', '60%');
	img.setAttribute('src', 'res/finger.png');
	
	emptydiv.appendChild(img);
	ni.appendChild(emptydiv);	
}