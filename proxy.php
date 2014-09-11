<?php
// Set your return content type
header('Content-type: application/xml');

// Website url to open
$url = 'http://feeds.feedburner.com/jQueryHowto';
$url2 = 'http://www.nb.no/services/search/v2/search?q=hamsun';
// Get that website's content
$handle = fopen($url2, "r");

// If there is something, read and return
if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;

    }
    fclose($handle);
}
?>
