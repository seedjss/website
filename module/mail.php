<?php

$email=$_GET['email'];

$subject="Certificate for AndroCar and AI Workshop September,2019";

$message = "<div style=\"font-family:\'Droid Sans\',\'Lucida Grande\',\'Lucida Sans\',\'Sans-serif\';width:100%;border-radius:7px;border:3px solid rgb(130,130,255);padding:10px 25px 50px 25px;color:rgb(70,70,70);background-size: auto;background-position: center;background-image:url(\'https://seedjss.ml/images/logo_light.jpg\');background-repeat: no-repeat;font-size: 1.5rem;\">
	<div style=\"float: left;\">
		<img style=\"border-radius: 100%;height: 90px;width: 90px;margin:8px 0 0 15px;\" src=\"https://www.seedjss.ml/images/logo.jpeg\">
	</div>
	<div style=\"padding-left:18%;margin-bottom:20px;margin-top:10px;font-weight: bold;\">
		S.E.E.D<br>
		Society of Electrical and Electronics Department<br>
		JSS , Noida
	</div><br><br>
	<hr size=\"1\"><br>
	Dear Participant,<br>
	Thank you for being the part of the <strong>Androcar and Artifical Intelligence(AI) workshop</strong> conducted by Electrino <strong>from 23<sup>rd</sup> September,2019 to 27<sup>th</sup> September 2019.</strong><br><br>
	<strong>1.)</strong> Please find your certificate below in this E-mail.<br>
	<strong>2.)</strong> Long press to Download on your device<br><br>
	We will be looking for your active participation in our upcoming events too.<br><br>
	<strong>P.S -</strong><i> Recruitments Coming Soon.Stay updated with our </i><strong>facebook</strong> <i>and</i> <strong>Instagram</strong><i> handles and also our <a href=\"https://seedjss.ml\" target=\"_blank\">Website</a></i>.
	<br>
	<br>
	<br>
	<br>
	<img width=\"100%\" height=\"520\" src=\"data:image/jpg;base64,".base64_encode(file_get_contents("opimage.jpg"))."\">
</div>";

$headers = "From: androcar@seedjss.ml\r\n"."Reply-To:electrino@jssaten.ac.in\r\n"."MIME-Version: 1.0\r\n"."Content-Type: text/html;charset=UTF-8\r\n"."X-Mailer: PHP/" . phpversion();



$mailing=mail($email, $subject, $message, $headers);

echo "Mail sent successfully";

?>