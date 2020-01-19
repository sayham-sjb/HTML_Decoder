function decode(encodedStr) {
    var TextArea = document.createElement('TextArea');
    TextArea.innerHTML = encodedStr;
    return TextArea.value;
}
$('YourButton').click(function () {
    $('YourTextarea').val(decode($('YourTextarea').val()));
});