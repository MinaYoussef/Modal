# Modal
Modal is a dialog prompts with the minimum required functionality and smart defaults. It can display pictures, PDF, external pages, a page element or even AJAX loaded content.
required a jQuery script
##API
```javascript
Modal("Display Text");
```
### Modal with all options
```javascript
Modal({
	top:5,
	width: 90,
	left: 5,
	title: "Please choose an image",
	showButton2 : true,
	showButton3 : true,
	showButton4 : true,
	button2: "Save",
	button3: "Reset",
	button4: "Back",
	body: '<h1>HTML content</h1>' 
   });
```
####Example
```javascript
Modal( "Please enter all required Fields." );

//or

Modal({
  body : "Please enter all required Fields."
});
```
##Ajax
Modal can accept ajax inside the "body" property
####Example
```javascript
   Modal({
          title : "My Ajax Title",
          top : 0,
          body: $.get("loremIpsum.txt",function(result){
				  $(".modal_body").html(result);
           })
   });
```
###Closing The Modal box
From inside the callback function, to close the modal you can call this function.
by default the button 1 "OK" close whenever clicked.
```javascript
CloseModal();
```
####Example
```javascript
$("button").click(function () {
    Modal({
        body: '<img class="modalImg" style="width: 100%; height:550px;"   src="BG4.png"/>',
        showButton2: true,
        button2: "Set Value",
    }, function () {
        /* some codes */
        window.location = "https://www.google.com/?gws_rd=ssl";
    }, function () {
        /* some codes */
        $("input").val("new value");
        CloseModal();
    });
});
```
