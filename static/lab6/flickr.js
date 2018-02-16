function load() {
  var tag = $('#tag').val();
  $(".row").html("");
  $.ajax({
    type: "POST",
    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
    dataType: 'jsonp',
    data: {
      "tags": tag,
      "format": "json"
    }
  });
};

function jsonFlickrFeed(json) {
  for (var x = 0; x < json.items.length; x++) {
    $(".row").append('<div class="cell" style="background:url(' + json.items[x].media.m + ') top no-repeat; background-size:cover;background-repeat:no-repeat;" class="img-responsive image"></div>');
  }
};
