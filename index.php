<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">

    <title>Teste Subjetivo para Síntese de Voz</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  
  
    <!-- Custom styles for this template -->
   
    <link href="app.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/underscore/underscore.js"></script>
    <script src="bower_components/backbone/backbone.js"></script>
    <script src="bower_components/backbone.radio/build/backbone.radio.js"></script>
    <script src="bower_components/backbone.marionette/lib/backbone.marionette.js"></script>
  </head>

  <body>

    

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Teste Subjetivo para Síntese de Voz</h1>
        <p>Abaixo são apresentados 20 pares de áudios. Os aúdios vieram de 2 sintetizadores diferentes (diferentes topologias de redes neurais). O objetivo do teste é descobrir qual sintetizador é melhor! Então, para isso, voce de votar, para cada par, qual aúdio é melhor (ou neutro, mas tente evitar). Divirta-se! </p>
       
      </div>
    </div>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xs-12" id="main-el">
                
            </div>          
        </div> 
     
    </div> <!-- /container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    


    <?php include "components/play/template.html"; ?>
    <?php include "components/pair/template.html"; ?>
    <?php include "components/votation/template.html"; ?>

    <script src="components/play/view.js"></script>
    <script src="components/pair/view.js"></script>
    <script src="components/votation/view.js"></script>


    <script src="config.js"></script>
    <script src="router.js"></script>
    <script src="app.js"></script>   

  </body>


</html>
