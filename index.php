<!doctype html>
<!--[if IE 8]>    <html class="no-js ie ie8 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js ie ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
    <meta charset="utf-8">

    <title>NBgraph</title>

    <meta name="description" content="Grafer for søk i Nasjonalbiblioteket">
    <meta name="keywords" content="Nasjonalbiblioteket">
    <meta name="author" content="Knut Melvær">
    <meta name="viewport" content="width=device-width, initial-scale=1">


</head>

<body id="NBgraph">
<h1>NB Graph</h1>
     <div id="container">
             <input type="text" id="search" placeholder="Søkeord"/>
             <input type="button" id="button" value="Lag graf!" />
             <ul id="result"></ul>
        </div>
    <canvas id="myChart" width="960" height="720"></canvas>

    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="js/app.js" type="text/javascript"></script>
    <script src="bower_components/chartjs/Chart.min.js"></script>
</body>
</html>
