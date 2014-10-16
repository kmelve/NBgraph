$(document).ready(function() {
    function search(){
        var searchstring = $("#search").val();

        $.ajax({
            url: 'js/content_proxy.php',
            data: "searchword="+searchstring,
            datatype: 'json',
            type: 'post',
            success: function(output) {
                console.dir(output);
                var options = {

                };
                Chartist.Line('.ct-chart', output, options);
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

// {
//                 searchword: searchstring
//                 // itemsPerPage: 2,
//                 // filter: "Bøker",
//                 // sort: "ASC",
//                 // freetext: "true",
//                 // facet: "year"
//             },

//     $.getJSON("js/content_proxy.php",function(data){
//         var items = [];
//         var array = data.entry;
//         //console.log(data.link);
//         // console.log(data);
//         // console.log(data.updated);
//         // console.dir(data.link);
//         // var array = data['link'][1]['@attributes']['href'];
//         // console.log(array);
//         // var array = data['entry'][1]['title'];
//         console.dir(data);

//         $.each( array, function( key, val ) {
//             console.log(val.title);
//             items.push("<li>" + val.title + "</li>");

//             $.each(val, function(id, value) {
//                 if (id == "link") {

//                     //console.log(value["Object"].href);

//                 }
//             });
//         });
//      var results = items.join("");
//      $("#results").append(results);
//     });
 });


// var datatest = {
//   // A labels array that can contain any sort of values
//   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
//   // Our series array that contains series objects or in this case series data arrays
//   series: [
//     [5, 2, 4, 2, 0]
//   ]
// };

// In the global name space Chartist we call the Line function to initialize a line chart
// As a first parameter we pass in a selector where we would like to get our chart created
// Second parameter is the actual data object
//Chartist.Line('.ct-chart', datatest);