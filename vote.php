<?php
	//$jsonReceiveData = json_encode($_POST);
    //echo $jsonReceiveData;

	$dir = 'votes';

	 // create new directory with 744 permissions if it does not exist yet
	 // owner will be the user/group the PHP script is run under
	 if ( !file_exists($dir) ) {
	     $oldmask = umask(0);  // helpful when used in linux server  
	     mkdir ($dir, 0744);
	 }

	 $filename = $dir . '/votes.tsv';



	function toLine($audio){
		$s = $audio->selected ? 'true' : 'false';
		return  $s . "\t" . $audio->audio . "\t" . $audio->source . "\t";		
	}
	
	try{
	$ip = $_SERVER['REMOTE_ADDR'];
	$uuid = $_REQUEST["uuid"];
	$votes = json_decode($_REQUEST["data"]);
	$file = fopen($filename,"a");
	foreach($votes as $vote){
		$line =  $ip . "\t" . $uuid . "\t" . toLine($vote->a) . toLine($vote->b) . "\n";
		
		$bytes = fwrite($file,$line);
		echo $bytes .":". $line;

	}	
	fclose($file);
	} catch(Exception $e){
		echo 'Erro: ' .$e->getMessage();
	}
	
	echo "ok"
	
?>