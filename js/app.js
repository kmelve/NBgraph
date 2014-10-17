$(document).ready(function() {
    function search(){
        var searchstring = $("#search").val();

        $.ajax({
            url: 'js/content_proxy.php',
            data: "searchword="+searchstring,
            // {
            // searchword: searchstring
            // itemsPerPage: 2,
            // filter: "Bøker",
            // sort: "ASC",
            // freetext: "true",
            // facet: "year"
            //},
            datatype: 'json',
            type: 'get',
            success: function(output) {
                var ctx = document.getElementById("myChart").getContext("2d");
                var myLineChart = new Chart(ctx).Line(output, options);
                var options = {

                };
            }
        });
    }
    $("#button").click(function(){
        search();
    });
    $('#search').keyup(function(e) {
        if(e.keyCode == 13) {
            search();
        }
    });
 });