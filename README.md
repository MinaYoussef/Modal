# Modal
Modal is streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults. It can display pictures, PDF, external pages, a page element or even AJAX loaded content.
required a jQuery script
##API
```javascript
Modal("Display Text");
```
### Modal with all options
```javascript
 DEV.Modal({
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
###Closing The Modal box
From inside the callback function, to close the modal you can call this function.
by default the button 1 "OK" close whenever clicked.
```javascript
DEV.CloseModal();
```
##Example
```javascript
DEV.Modal( "Please enter all required Fields." );

//or

DEV.Modal({
  body : "Please enter all required Fields."
});
```
##Ajax
```javascript
   DEV.Modal({
          title : "My Ajax Title",
          top : 0,
          body: $.get("loremIpsum.txt",function(result){
				  $(".modal_body").html(result);
           })
   });
```
