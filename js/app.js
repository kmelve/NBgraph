$(document).ready(function() {
    $( "#search" ).focus();
    $("form").submit(function(e){
        e.preventDefault();
        search();
    });
});
function search(){
    var searchstring = $.trim($("#search").val()).replace(' ', '+');
    $.ajax({
        url: 'js/content_proxy.php',
        data: "searchstring="+searchstring,
        datatype: 'json',
        type: 'get'
    })
    .done(function(output) {
        var ctx = document.getElementById("myChart").getContext("2d");
            var myLineChart = new Chart(ctx).Line(output, options);
            var options = {
            };

            var csvlist = output.metadata.yearlabels;
            var csvitems = ["year, ","frequency","<br />"];

            $.each(csvlist, function(i, item) {
                 csvitems.push(item + ", " + output.metadata.yearcount[i]+"<br />");
                 // console.log(metadata.yearlabels[i] + ":" + metadata.yearcount[i]);
             });
            $("#results").append().html(csvitems);
    });
}
