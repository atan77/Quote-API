window.onload = quotes();

function quotes() {
  $.ajax({
    url: 'http://api.icndb.com/jokes/random',
    dataType: 'json',
    success: function(quote) {
      text = quote.value.joke;
      number = quote.value.id;
      $('#quoter').html(text);
      //          $('.number').html('Chuck Norris has roundhoused you quote ' + number + ' from the database, here are your words of wisdom');

    }
  });
}

$('#tweet').click(function(e) {

  e.preventDefault();

  var quote = $('#quoter').text();
  //create a new window with the twitter dialogue
  window.open('http://twitter.com/share?url=undefined&text=' + quote, 'twitterwindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 225) + ', left=' + $(window).width() / 2 + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
});
