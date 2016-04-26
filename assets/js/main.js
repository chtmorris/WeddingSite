$(document).ready(function () {
  console.log("yoyo");
  $('input[type=checkbox]').change(
    function(){
        if (this.checked) {
            console.log(this.name);
            $('#attending').val($('#attending').val()+this.name + " "); 
        }
    });
});
