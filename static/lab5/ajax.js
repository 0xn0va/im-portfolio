function loadList(){
  $.ajax({
    dataType: "jsonp",
    url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
  });
}

function jsonCallback(json)
{
  $.each(json, function(index, element) {
        $('body').append($('<div>', {
            text: element.name
        }));
        $('body').append($('<div>', {
            text: element.email
        }));
    });
}
