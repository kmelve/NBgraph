<?php
header('Content-Type: application/json');
if(isset($_POST['searchword']) && !empty($_POST['searchword'])) {
    $searchword = $_POST['searchword'];
    $searchbaseurl = "http://www.nb.no/services/search/v2/search";
    $url = $searchbaseurl."?q=".$searchword;
    $data = file_get_contents($url);
    if(isset($data)) $doc = new SimpleXmlElement($data);
    $json = json_encode($doc);
    print_r($json);
    }
?>