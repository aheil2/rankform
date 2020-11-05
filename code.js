$(document).ready(function () {
   $("form").submit(chooseClass);

   function chooseClass(event) {
       //prevent form from flashing
       event.preventDefault();

       var selectedClass = $("input[name=class]:checked").val();
       var selectedColor = $("input[name=class]:checked").data('color');
       var firstName = $("input[name=name-first]").val();
       var lastName = $("input[name=name-last]").val();

       //display class
       $("#displayClass").text("Welcome " + firstName + " " + lastName + ", the " + selectedClass + "!").css('color', selectedColor);
   }
});