$(document).foundation();

var movieObject = [];
$('#movieSubmit').on('click', function(e) {
  e.preventDefault();
  var movie  = $('#movie').val();
  var newMovie = movie.replace(/\s+/g, '');
  var requestUrl = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json'

  $.getJSON(requestUrl, function(data) {
    var poster     = data.Poster
    var title      = data.Title
    var rated      = data.Rated
    var released   = data.Released
    var actors     = data.Actors
    var plot       = data.Plot
    var imdbRating = data.imdbRating
    console.log(data);
    $('#output').html('<div class="callout large">' +
      '<img class="float-left" src="' + poster + '">' +
      '<h3>' + title + '</h3>' +
      '<span class="success label">Rating: ' + rated + '</span>' +
      '<p>Released Date: ' + released + '</p>' +
      '<p>Actors: ' + actors + '</p>' +
      '<p>IMDb rating: ' + imdbRating + '</p>' +
      '<p class="plot">Summary: ' + plot + '</p>' +
      '</div>');
    });
});
