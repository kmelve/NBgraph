$(document).ready(function() {
    $( "#search" ).focus();
    $("form").submit(function(e){
        e.preventDefault();
        search();
    });
    var chart1; // globally available
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
            chart1 = new Highcharts.Chart({
                chart: {
                    renderTo: 'highcharts',
                    type: 'line'
                },
                title: {
                    text: 'Hits pr. year for “<em>'+searchstring+'</em>” in nb.no'
                },
                xAxis: {
                    categories: output.metadata.yearlabels
                },
                yAxis: {
                    title: {
                        text: 'Search results frequency'
                    }
                },
                series: [{
                    name: 'Search results',
                    data: output.metadata.yearcount
                }]
            });

    });
}
