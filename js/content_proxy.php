<?php
if(isset($_GET['searchstring']) && !empty($_GET['searchstring'])) {
    header('Content-type: application/json');
    $searchstring = $_GET['searchstring'];
    $searchbaseurl = "http://www.nb.no/services/search/v2/search?q=";
    $url = $searchbaseurl.$searchstring."&(contentClasses:'restricted'%20OR%20contentClasses:'public'%20OR%20contentClasses:'bokhylla'%20OR%20metadataClasses:'public'%20OR%20metadataClasses:'restricted')&ft=true&facet=year&itemsPerPage=1";
    // $searchparameters = "%20(contentClasses:%22public%22)&ft=all";
    // $url = $searchbaseurl."?q=".$searchstring."%20".$searchparameters;
    // $url = "http://www.nb.no/services/search/v2/search?q=hamsun%20facet=year%20itemsPerPage=1"
    // $url = 'http://www.nb.no/services/search/v2/search/?q='.$searchstring.'&facet=year&itemsPerPage=10';
    // $str = "?q=".urlencode($searchstring)."%20(contentClasses:%22public%22)&ft=".$freetext."&itemsPerPage=".$itemsPerPage."&filter=".urlencode($filter)."&sort=".$sort;
    //$url = 'http://www.nb.no/services/search/v2/search/?q='.urlencode($searchstring).'&facet=year&itemsPerPage=10';
    $data = file_get_contents($url);

    $data_split = explode("<nb:values>", $data);
    $data_split2 = explode("</nb:values>", $data_split[1]);
    $data_splitted = $data_split2[0];
    $data_lines = explode("</nb:value>", $data_splitted);

    $dataArray = array();
    foreach($data_lines as $line) {
        if (strlen($line) > 1)  { // to avoid the last line, which is empty
            $matches = array();
            $t = preg_match('/"(.*?)"/s', $line, $matches);
            $count = intval($matches[1]);
            $year = substr($line, -4);
            $dataArray[$year] = $count;
        }
    }

    ksort($dataArray); // sort data by year (i.e. sort array by key)

    $json_data = array();
    $json_labels = array();
    foreach ($dataArray as $year => $count) {
        $json_data[] = $count;
        $json_labels[] = $year;
    }

    echo json_encode(
            array("labels" => $json_labels,
                "datasets" =>
                    array(
                        array(
                            "label" => "NB",
                            "fillColor" => "rgba(220,220,220,0.6)",
                            "strokeColor" => "rgba(213, 2, 7, 1)",
                            "pointColor" => "rgba(213, 2, 7, 0.7)",
                            "pointStrokeColor" => "#fff",
                            "pointHighlightFill" => "rgba(213, 2, 7, 0.4)",
                            "pointHighlightStroke" => "rgba(220,220,220,1)",
                            "data" => $json_data
                        )
                    ),
                    "metadata" => array(
                        "yearlabels" => $json_labels,
                        "yearcount" => $json_data,
                        "seachstring" => $searchstring
                    )
            )
        );
}
?>