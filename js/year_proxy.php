<?php
header('Content-type: application/json');


    $searchword = $_GET["searchword"];
//     $itemsPerPage = $_GET["itemsPerPage"];
// //  $filter = "mediatype:B&oslash;ker";
//     $filter = "mediatype:".$_GET["filter"];
//     $sort = $_GET["sort"];
//     $freetext = $_GET["freetext"];
//     $facet = $_GET["facet"];

    //I've struggled a bit to get UTF-8 input to work properly. I think urlencode fixes it.
    //$str = "?q=".urlencode($searchword)."%20(contentClasses:%22public%22)&ft=".$freetext."&itemsPerPage=".$itemsPerPage."&filter=".urlencode($filter)."&sort=".$sort;
    $str = "?q=".$searchword;

    // In case I need these URLs several places, it's nice to have them as variables
    $searchbaseurl = "http://www.nb.no/services/search/v2/search";
    $nburnbaseurl = "http://urn.nb.no/";
    $downloadbaseurl = "http://www.nb.no/nbsok/content/pdf?urn=";
    $url = $searchbaseurl.$str;
    //$url = 'http://www.nb.no/services/search/v2/search/?q=spiritualitet&facet=year&itemsPerPage=10';
    $data = file_get_contents($url);
    if(isset($data)) $doc = new SimpleXmlElement($data); // No need to run of $data isn't set for some reason


        $year = $doc->children('nb', TRUE);
        $json = json_encode($year);
        print_r($json_year);






?>