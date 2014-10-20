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
    <form>
        <input type="text" id="search" placeholder="Søkeord"/>
        <input type="button" id="button" value="Lag graf!" /> (tar foreløpig kun ett søkeord om gangen)
    </form>
        </div>
    <canvas id="myChart" width="960" height="720"></canvas>
    <h2>Rådata</h2>
    <div id="results"></div>

    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="bower_components/chartjs/Chart.min.js"></script>
    <script src="js/app.js" type="text/javascript"></script>
    <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-55914004-1', 'auto');
          ga('send', 'pageview');
    </script>
    <a href="https://github.com/kmelve/NBgraph"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a>
</body>
</html>
