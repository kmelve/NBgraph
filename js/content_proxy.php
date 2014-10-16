<?php
header('Content-type: application/json');

// In case I need these URLs several places, it's nice to have them as variables
$searchbaseurl = "http://www.nb.no/services/search/v2/search";
$nburnbaseurl = "http://urn.nb.no/";
$downloadbaseurl = "http://www.nb.no/nbsok/content/pdf?urn=";
//$url = $searchbaseurl.$str;
$url = 'http://www.nb.no/services/search/v2/search/?q=spiritualitet&facet=year&itemsPerPage=10';

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
            "series" => array("data" => $json_data))
    );

?>