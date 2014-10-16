<?php
header('Content-type: application/json');
if(function_exists("curl_init")){ // Check if cURL is available

    //I've struggled a bit to get UTF-8 input to work properly. I think urlencode fixes it.
    //$str = "?q=".urlencode($searchword)."%20(contentClasses:%22public%22)&ft=".$freetext."&itemsPerPage=".$itemsPerPage."&filter=".urlencode($filter)."&sort=".$sort;


    // In case I need these URLs several places, it's nice to have them as variables
    $searchbaseurl = "http://www.nb.no/services/search/v2/search";
    $nburnbaseurl = "http://urn.nb.no/";
    $downloadbaseurl = "http://www.nb.no/nbsok/content/pdf?urn=";
    //$url = $searchbaseurl.$str;
    $url = 'http://www.nb.no/services/search/v2/search/?q=spiritualitet&facet=year&itemsPerPage=10';


    $curl = curl_init(); // I find the setopt_array a bit more organized than the inline init

    curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER      => true,
            CURLOPT_URL                 => $url,
//          CURLOPT_PROGRESSFUNCTION    =>  "progress", // This is to be used for a progress bar
            CURLOPT_HTTPHEADER          => array('Content-Type: text/xml; charset="UTF-8"'),
            CURLOPT_ENCODING            => "UTF-8",
            CURLOPT_USERAGENT           => "NB PDF SØK",
            CURLOPT_NOPROGRESS          => false
        ));

        $data = curl_exec($curl); //takes the data from cURL and puts in it the $data variable
        $header  = curl_getinfo($curl); //headerinfo for debugging and so on



        curl_close($curl); // closes the cURL session [is that the right term, "session"?]

    } // end if curl_intit

    if(isset($data)) $doc = new SimpleXmlElement($data); // No need to run of $data isn't set for some reason
    //$xml = simplexml_load_string($doc);
        //echo $xml;

    $year = $doc->children('nb', TRUE);
    $json = json_encode($year);
 //        $array = json_decode($json,TRUE);
 //        //echo $arrray;
 //       //echo $buffered;



  print_r($json);
?>