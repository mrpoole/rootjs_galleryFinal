/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	$("#gallery").sortable();	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	makeGallery(pictures);
	addModalCloseHandler();
}

function makeGallery(imageArray){
	//create a loop to go through the pictures
	for (var picIndex = 0; picIndex < imageArray.length; picIndex++) {

		var createdImg = $("<figure>").addClass("imageGallery col-xs-12 col-sm-6 col-md-4").css('background-image', 'url(' + imageArray[picIndex] + ')');
		var nameOfImage = imageArray[picIndex]; //gets the current image url
		var start = nameOfImage.indexOf("/"); // leaves you with /landscape-1.jpg);
		var end = nameOfImage.lastIndexOf("."); //cuts the .jpg or whatever
		var figCap = nameOfImage.slice(start+1, end); //leaves you with landscape-1 
		//var parsedUrl = imageArray[picIndex].match(/\/([a-z\-0-9.]*)/)[1];
		
		var createdFigCap = $("<figcaption>").text(figCap); //created the actual figure caption element

		$(createdFigCap).appendTo(createdImg); //attaches the caption to the image
		$(createdImg).click(displayImage); 
		$("#gallery").append(createdImg); //moves the image to #gallery
	}
}
	
	//use loops and jquery dom creation to make the html structure inside the #gallery section

	//create a loop to go through the pictures
		//create the elements needed for each picture, store the elements in variable

		//attach a click handler to the figure you create.  call the "displayImage" function.  

		//append the element to the #gallery section



function addModalCloseHandler(){
	$("img").click(function() {
		$("#galleryModal").modal("hide");
	});
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	
}

function displayImage(){
	var imgSrc = $(this).css('background-image'); //gets the direct url

	var firstCut = imgSrc.lastIndexOf("/"); //cuts before the / in the url
	var lastCut = imgSrc.lastIndexOf("g"); //gets to the g (right before the g?)
	var figureCaption = imgSrc.slice(firstCut+1, lastCut+1); //gets the correct caption by adding the two plus [1] for room

	var imageUrl = imgSrc.lastIndexOf("images"); //gives you everything after "images", so landscape-13.jpg for example
	var finalImage = imgSrc.slice(imageUrl, lastCut+1); //starts at images, ends at 'g'

	$('.modal-title').text(figureCaption); //changes the model-title text to the figure caption
	$('img').attr('src', finalImage); //gets the src attribute of image and sets it to finalImage
	$("#galleryModal").modal("show");
}

	//grab the direct url of the image

	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method

	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on

	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp





