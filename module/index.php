<html>
<head>
	<title>
		Certificate Module Generator
	</title>
	<style>
		@font-face {
			font-family: ctext1;
			src: url(certi.ttf);
		}
		@font-face {
			font-family: ctext2;
			src: url(cert2.ttf);
		}
		/* width */
		::-webkit-scrollbar {
			width: 10px;
		}

		/* Track */
		::-webkit-scrollbar-track {
			box-shadow: inset 0 0 5px grey; 
			border-radius: 10px;
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			background: #654321; 
			border-radius: 10px;
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
			background: #B5651D; 
		}
		

	</style>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<!-- Compiled and minified CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

	

	

</head>
<body>



	<!-- php for security check -->
	<?php

	$sup="";$batman="";

	if(isset($_POST['name']))
	{
		$name = $_POST['name'];
		$sup= sha1($name);
	// var_dump($name);
		$myfile = fopen("key", "r");
		$batman=fread($myfile,filesize("key"));
	// var_dump($batman);
	// if ($sup==$batman) {
	// 	# code...
	// 	echo "sucess bitch";
	// }
		fclose($myfile);
	}

	if($sup==$batman && isset($_POST['name']) && strlen($sup)>0)
	{
		?>

		<!-- php sends -->
		<div>
			<nav>
				<div class="nav-wrapper #5d4037 brown darken-2">
					<a href="#" class="brand-logo center" style="font-family: 'Roboto', sans-serif;">Certificate Module Generator</a>


					<img src="logo2.png" style="margin-left: 450px; max-height: 80px;max-height: 60px; margin-top: 5px;">
					<img src="logo2.png" style="margin-left: 490px; max-height: 80px;max-height: 60px; margin-top: 5px;">

				</div>
			</nav>

			<div class="container" >

				<div class="row">
					<br>

					<h4 class="col s3">Enter the name:</h4>
					<div class="input-field col s6">
						<input id="name" type="text" name="name" class="validate">

					</div>
				</div>
				<!-- for branch input -->
				<div class="row">

					<h4 class="col s3">Enter branch:</h4>

					<div class="input-field col s5">
						<select class="browser-default" id="branch" name="branch">
							<option value="" disabled selected>Choose your Branch</option>
							<option value="Electrical Engineering">EE</option>
							<option value="Electronics and Communication Engineering">ECE</option>
							<option value="Electrcial and Electronics Engineering">EEE</option>
							<option value="Computer Science Engineering">CSE</option>
							<option value="Information Technology">IT</option>
							<option value="Mechancial Engineering">M.E</option>
							<option value="Civil Engineering">C.E</option>
						</select>
					</div>




				</div>

				<!-- for button -->

				<div class="row">
					<br>

					<button class="btn waves-effect waves-light col s2 offset-s5 #6d4c41 brown darken-1" onclick="myFunction('no','no',0)" style="font-family: 'Roboto', sans-serif;" id="seed">Generate Image</button>
				</div>



				<div class="row">
					<div class="col s1" style="margin-top: 200px;">

						<button class="#6d4c41 brown darken-1" onclick="myFunction('yes','no',0)" id="square" style="display: none;"><i class="medium material-icons">arrow_back</i></button>
					</div>

					<div style="position:relative;">
						<img src="ipimage.jpg" class="col s10" id="demo" width="880" height="573">
						<span id="cr1" style="position:absolute;top:265px;left:348px;font-family: ctext1;font-size:26px;color:rgb(40,40,40);font-weight:bold"></span>
						<span id="cr2" style="position:absolute;top:325px;left:283px;font-family: ctext2;font-size:17px;color: black"></span>
					</div>

					<div class="col s1" style="margin-top: 200px;">
						<button class="#6d4c41 brown darken-1" onclick="myFunction('no','yes',0)" id="rectangle" style="display: none;"><i class="medium material-icons">arrow_forward</i></button>
					</div>



				</div>
				<!-- for finalize image -->
				<div class="row">
					<br>

					<button class="btn waves-effect waves-light col s2 offset-s5 #6d4c41 brown darken-1" onclick="myFunction('no','no', 1)" style="font-family: 'Roboto', sans-serif; display: none;" id="circle">Finalize Image</button>
				</div>

				<div class="row">
					<br>

					<h4 class="col s3" style="display: none;" id="element">Enter the email:</h4>
					<div class="input-field col s6" id="elements" style="display: none;">
						<form action="send.php" method="GET">
							<input id="email" type="text" name="email" class="validate">
						</div>
					</div>
					<!-- send email button -->

					<div class="row">
						<br>

						<button action="submit" class="btn waves-effect waves-light col s2 offset-s5 #6d4c41 brown darken-1" style="font-family: 'Roboto', sans-serif; display: none;" id="elementss">Send Email</button>
					</form>
				</div>





			</div>


			<script type="text/javascript">
				var str2="no";

				document.getElementById("circle").onclick = function() { 
					var namee=document.getElementById("name").value;
					var branchh=document.getElementById("branch").value;
					document.getElementById("circle").style.display = "none"; 
					document.getElementById("square").style.display = "none";
					document.getElementById("rectangle").style.display = "none";
					document.getElementById("element").style.display = "block";
					document.getElementById("elements").style.display = "block";
					document.getElementById("elementss").style.display = "block";

					document.getElementById("cr1").innerHTML = "";
					document.getElementById("cr2").innerHTML = "";
					console.log("aa gye");
					var xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function() 
					{
						if (this.readyState == 4 && this.status == 200) 
						{
							console.log(this.responseText);
							document.getElementById("demo").src ="certificate.jpg?t=" + new Date().getTime();
						}
					};
					xhttp.open("GET","run.php?name="+namee+"&branch="+branchh+"&left="+parseInt(tvalue.slice(0,3)), true);
					xhttp.send();

				} 

				var tvalue=document.getElementById("cr1").style.left;


				function myFunction(l,r) 

				{
					if(str2==l && str2==r) 
					{

						document.getElementById("seed").style.display = "none";
						document.getElementById("square").style.display = "block";
						document.getElementById("rectangle").style.display = "block";
						document.getElementById("circle").style.display = "block";

						var namee=document.getElementById("name").value;
						var branchh=document.getElementById("branch").value;

						document.getElementById("cr1").innerHTML = namee+"  of  "+branchh;
						document.getElementById("cr2").innerHTML = "";
					}


					if(r=="yes")
					{
						tvalue=(parseInt(tvalue.slice(0,3))+5)+"px";
						document.getElementById("cr1").style.left=tvalue;
					}
					if(l=="yes")
					{
						tvalue=(parseInt(tvalue.slice(0,3))-5)+"px";
						document.getElementById("cr1").style.left=tvalue;
					}


				}
			</script>
		</div>
		<?php
	}
	if(!isset($_POST['name']) || ($sup!=$batman))
	{
		?>
		<!-- security check -->
		<div class="content" style="max-width: 500px; margin: auto;">

			<h2>Security Check</h2>
			<?php
			if(isset($_POST['name']))
				echo "<span style=\"color:red;font-weight:bold\">not correct.Please retry.</span>";
			?>

			<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
				<input type="password" name="name"><br>
				<button>Submit</button><br>
			</form>

		</div>
		<!-- security check form ends -->

	<?php
	}
	?>
	<!-- Compiled and minified JavaScript -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="mat.js"></script>
	<script type="text/javascript">
	$(document).ready(function(){
			$('select').formSelect();
		});
	</script>
</body>
</html>