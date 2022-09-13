$("ul.navbar-nav > li").hover(function() {
  $(this).children(".dropdown-menu").fadeToggle(150);
});

function setLocationInput() {
  $('form.loc_form input').css('width', (($('form.loc_form input').val().length + 1) * 7) + 'px');
}
setLocationInput();

var inputVal = $('form.loc_form input[type="text"]').val();
$('form.loc_form .change').click(function(e){
    e.preventDefault();
    $(this).hide()
    $('form.loc_form .explore').show().attr('disabled', 'disabled')
    $('form.loc_form input[type="text"]').removeAttr('readonly').val('').focus();
})
$('form.loc_form .explore').click(function(e){
    e.preventDefault();
    $(this).hide()
    $('form.loc_form .change').show()
    $('form.loc_form input[type="text"]').attr('readonly', 'readonly');
});

$('form.loc_form input[type="text"]').keypress(function() {
   if ($(this).val().length > 0) {
       $('form.loc_form button').removeAttr('disabled')
   }
});
$('form.loc_form input[type="text"]').blur(function() {
    if ($(this).val().length > 0) {
        inputVal = $('form.loc_form input[type="text"]').val();
        $(this).attr('readonly', 'readonly')
        $('form.loc_form .change').show()
        $('form.loc_form .explore').hide()
    } else {
        $(this).val(inputVal)
        $('form.loc_form .change').show()
        $('form.loc_form .explore').hide()
        $('form.loc_form input[type="text"]').attr('readonly', 'readonly');
    }
})