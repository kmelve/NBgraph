$(document).foundation();
$.ajax({
	type: "GET",
	url: "proxy.php",
	dataType: "xml",
	success: viewxml
});
function parseXml(xml)
{
  //find every Tutorial and print the author
  $(xml).find("entry").each(function()
  {
    $(".feed").append($(this).attr("title") + "<br />");
  });

  // Output:
  // The Reddest
  // The Hairiest
  // The Tallest
  // The Fattest
}
function viewxml(xml) {
	console.log(xml);
	var json = $.xml2json(xml);
	console.log(json);
	$.each(json.feed, function(i, item) {
		console.log(json.feed[i].entry);
	})

}