$(document).ready(function () {
  console.log("yoyo");
  $('input[type=checkbox]').change(
    function(){
        if (this.checked) {
            console.log(this.name);
            $('#attending').val($('#attending').val()+"I will be attending the " + this.name + "\n"); 
        }
    });
});
