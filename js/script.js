onload = () =>{
    document.body.classList.remove("container");
};

$(document).ready(function(){
    // Popup
    $('#popup').show();
    $('#playButton').click(function() {
      $('#popup').hide();
      $('#myAudio')[0].play();
});

$.scrollIt();

});