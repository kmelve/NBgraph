$(document).foundation();
  $.ajax({
        url: 'proxy.php',
        dataType: 'xml',
        success: function(xml) {  
           var json = $.xml2json(xml);
            //console.log(JSON.stringify(json));
            $.each(json, function(key, value) {
            	//console.log(value.feed.entry);
            	$.each(value, function(date, datedate) {
            		console.log(datedate);
            	
            	});

            });
            
  			

        }
      });


      //     $(xml).find('entry').each(function(){
      //       var year = $(this).find("year").text()
      //       console.log(year);
      //       $('#feed').append(year);
      //     });
      //   }
      // });

    // $('.feed').load("proxy.php", function(){
    // // Some callback functions
    // console.info("loaded");
    // });


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