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


	<!-- scripts -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="bower_components/paper/dist/paper-full.min.js"></script>
	<script src="bower_components/jquery-pjax/jquery.pjax.js"></script>
	<script src="bower_components/velocity/velocity.min.js"></script>
	<!--<script src="js/jquery.ba-hashchange.min.js"></script>-->
	<script src="bower_components/typed.js/dist/typed.min.js"></script>
	<!--<script src="js/dynamicpage.js"></script>-->
	<script src="bower_components/waypoints/lib/jquery.waypoints.min.js"></script>

	<!-- typekit -->
	<script src="//use.typekit.net/haj7dxh.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>


	<!-- stylesheets -->
	<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/style.css">


</head>
<body>
<div id="scroll-trigger"></div>

	<div class="container">

		<div class="row">

			<nav class="col">
				<h1 class="nav-title">Matt Wujek<span id="indicator-circle"></span><span id="indicator-line"></span></h1>
				<h2>Interaction Designer</h2>
				<h2>San Francisco, CA</h2>
				<a class="menu-btn" href="#">Menu</a>

				<ul id="nav-list">
					<li><a href="index.html" ><span class="fa fa-circle fa-inverse menu-circle active-nav-link"></span>Home</a></li>
					<li><a href="work.html"><span class="fa fa-circle fa-inverse menu-circle"></span>Work</a></li>
					<li><a href="play.html"><span class="fa fa-circle fa-inverse menu-circle"></span>Play</a></li>
					<li><a href="blog.php"><span class="fa fa-circle fa-inverse menu-circle"></span>Blog</a></li>
					<li><a href="bio.html"><span class="fa fa-circle fa-inverse menu-circle"></span>Bio</a></li>
				</ul>
				<span class="fa fa-angle-up up-arrow">
			</nav>

			<div class="col text-container" id="ajax-container">
				<section id="content">
					<h1 class="section-title">Blog</h1>
					<div class="tag-list">
						<ul id="tag-ul">
							<li><span class="circle-tag tag-mobile"></span>mobile</li>
							<li><span class="circle-tag tag-proto"></span>prototyping</li>
							<li><span class="circle-tag tag-web"></span>web</li>
							<li><span class="circle-tag tag-d3"></span>d3.js</li>
							<li><span class="circle-tag tag-installation"></span>installation</li>
							<li><span class="circle-tag tag-framer"></span>framer</li>
							<li><span class="circle-tag tag-processing"></span>processing</li>
							<li class="filter-reset"><span class="fa fa-trash"></span>reset</li>
						</ul>

					</div>

					<div class="blog-roll">
						<?

				$xml = simplexml_load_file('http://designbywuj.tumblr.com/api/read?type=post&start=0&num=8');
				$posts = $xml->xpath("/tumblr/posts/post[@type='regular']");

				foreach($posts as $post) {?>
				<?echo '<article class="blog-roll">';?>
				<?echo '<div class="post-info">';?>
				<?echo '<h1 class="post-title">'.$post->{'regular-title'}.'</h1>';?>
				<?echo '<h2 class="date">'.date("F jS, Y",strtotime($post['date'])).'</h2>';?>
				<?echo '</div>';?>
				<?echo '<div class="post-body">';?>
				<?echo $post->{'regular-body'};?>
				<?echo '</div>';?>
				<?echo '</article>';?>

				<?}?>
					</div>
				</section>
			</div> <!-- end of ajax container -->

		</div> <!-- end of row -->
	</div> <!-- end of container -->



	<script src="js/wuj.js"></script>
</body>
</html>