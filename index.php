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
    <link rel="stylesheet" type="text/css" media="all" href="css/app.css">

</head>

<body id="NBgraph">
    <header>
        <h1>NB Graph</h1>
        <p>The problem: <a href="http://nb.no">nb.no</a> doesn't give you an overview of search results / year</p>
        <p>The solution: Use the <a href="http://www.nb.no/services/bibsok/search/v2/">API</a> and the nb:facet fields and deploy the data in a javascript graph</p>
        <p>The disclaimer: The API request isn't fine tuned. Use these numbers with some metaphorical grains of salt.</p>
    </header>
    <div id="container">
    <form>
        <input type="text" id="search" placeholder="Søkeord"/>
        <input type="button" id="button" value="Get me some statistics!" />
    </form>
        </div>
    <div id="highcharts"></div>
    <div id="results"></div>
    <footer>
    <p>NB Graph is developed by <a href="mailto:knut.melvaer@gmail.com">Knut Melvær</a> (<a href="https://twitter.com/kmelve">@kmelve</a>). NB Graph is a free service for education and research.</p>
    <p><a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">NB Graph</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://github.com/kmelve/nbgraph" property="cc:attributionName" rel="cc:attributionURL">Knut Melvær</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">CC-BY-NC-4.0</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="http://github.com/kmelve/nbgraph" rel="dct:source">http://github.com/kmelve/nbgraph</a>.</p>
    <p><a href="http://highcharts.com">Highcharts</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc/3.0/">CC-BY-NC-3.0</a>, which means you can use it for free for non-profit and with attribution.</p>


    </footer>

    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/highcharts/highcharts.js"></script>
    <script src="bower_components/highcharts/modules/exporting.js"></script>
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
