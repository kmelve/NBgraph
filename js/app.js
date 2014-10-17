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


var datac = {
    labels: [1733, 1909, 1911, 1913, 1914, 1922, 1926, 1932, 1941, 1945, 1954, 1961, 1963, 1964, 1968, 1969, 1970, 1971, 1972, 1973, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014],
    datasets: [
        {

            data: [1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 5, 3, 1, 2, 5, 7, 3, 1, 5, 7, 5, 4, 10, 4, 10, 5, 5, 9, 7, 15, 19, 25, 23, 26, 26, 32, 37, 33, 30, 50, 56, 74, 75, 63, 73, 43, 71, 41, 47, 50, 9]
        }
    ]
};