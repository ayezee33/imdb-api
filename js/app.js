$(document).foundation();

$('#movieSubmit').on('click', function(e) {
  e.preventDefault();
  getMovie();
});

$("input").keypress(function(e) {
  if (e.which == 13) {
      e.preventDefault();
      $("#movieSubmit").submit();
      getMovie();
  }
});

function getMovie () {
  var movie  = $('#movie').val();
  var newMovie = movie.replace(/\s+/g, '');
  var requestUrl = 'https://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json'

  $.getJSON(requestUrl, function(data) {
    var poster     = data.Poster
    var title      = data.Title
    var rated      = data.Rated
    var released   = data.Released
    var actors     = data.Actors
    var plot       = data.Plot
    var imdbRating = data.imdbRating
    console.log(data);
    if (imdbRating < 6 ) {
      ratingLabel = 'alert'
      ratingIcon = '<i class="fa fa-thumbs-down" aria-hidden="true"></i>'
    } else {
      ratingLabel = 'success'
      ratingIcon = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>'
    }

    $('#output').html('<div class="callout large">' +
      '<img class="float-left" src="' + poster + '">' +
      '<h3>' + title + '</h3>' +
      '<span class="sucess label">Rating: ' + rated + '</span>' +
      '<p>Released Date: ' + released + '</p>' +
      '<p>Actors: ' + actors + '</p>' +
      '<p>IMDb rating: <span class="' + ratingLabel + ' label">' + imdbRating + ratingIcon + '</span></p>' +
      '<p class="plot">Summary: ' + plot + '</p>' +
      '</div>');
    });
  }
