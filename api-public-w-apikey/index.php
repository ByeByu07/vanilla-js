<?php 


$artist_name  = "sid";
$base_url     = "http://api.musixmatch.com/ws/1.1/track.search";
$api_key      = "d3eb9f66d4d6a5ea6e3d5fd5a4baa409";
$tracking_url = $base_url.'?q='.urlencode($artist_name).'&apikey='.urlencode($api_key);

$content  = file_get_contents($tracking_url, JSON_PRETTY_PRINT);
$content = json_decode($content);
var_dump($content);

echo '<pre>' . json_encode($content, JSON_PRETTY_PRINT) . '</pre>';

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List Music</title>
</head>

<body>
</body>

<script></script>

</html>