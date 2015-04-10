<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="Matt Wujek" />
	<meta name="keywords" content="Matt Wujek graphic design student San Francisco Walla interaction web ux user experience"/>
	<meta name="description" content="Portfolio of Matt Wujek, interaction designer residing in San Francisco."/>
	<meta property="og:title" content="Matt Wujek &equiv; Portfolio" />
	<meta property="og:url" content="http://www.mattwujek.com/" />
	<meta property="og:image" content="http://mattwujek.com/fb.png"/>
	<meta property="og:site_name" content="Matt Wujek &equiv; Portfolio"/>
	<meta property="og:type"   content="website" /> 

	<link href='img/icon.ico' rel='shortcut icon' type='image/ico'>

	<title>just call me wuj</title>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

	<!-- typekit -->
	<script src="//use.typekit.net/taa5lrx.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>

	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/style.css">



</head>
<body>

	<div class="container">
		<div class="row">

			<nav class="col">
				<div class="nav-graphic">
					<h1>Matt Wujek</h1>
					<h2>Multimedia Designer</h2>
				</div>

				<a class="menu-btn" href="#">Menu</a>

				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="work.html">Work</a></li>
					<li><a href="blog.php" class="active-nav-link">Blog</a></li>
					<li><a href="bio.html">Bio</a></li>
				</ul>
			</nav>

			<div class="col text-container">
				<?

				$xml = simplexml_load_file('http://designbywuj.tumblr.com/api/read?type=post&start=0&num=8');
				$posts = $xml->xpath("/tumblr/posts/post[@type='regular']");

				foreach($posts as $post) {?>
				<?echo '<article class="blog-roll">';?>
				<?echo '<h1 class="post-title">'.$post->{'regular-title'}.'</h1>';?>
				<?echo '<h2 class="date">'.date("F jS, Y",strtotime($post['date'])).'</h2>';?>
				<?echo $post->{'regular-body'};?>
				<?echo '</article>';?>

				<?}?>
			</div>

		</div> <!-- end of row -->
	</div> <!-- end of container -->



	<script src="js/wuj.js"></script>
</body>
</html>