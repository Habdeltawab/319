<html>

<head>
    <title>View Posts</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }

        #post {
            position: absolute;
            bottom: 30px;
            width: 500px;
        }

        #send {
            position: absolute;
            bottom: 30px;
            right: 100px;
        }
    </style>

</head>

<body>
    <table id="myTable">
    </table>
    <button onclick="window.location = 'makePost.php'" id="makePost">Make a post</button>
    <button onclick="window.location = 'login.php'">Logout</button>
    <?php
    if(isset($_POST["submit"])){
  date_default_timezone_set('America/Chicago');
  $date = date('m/d/Y h:i:s a', time());
  $username = file_get_contents("lastSignIn.txt");
  $title =$_POST["title"];
  $description = $_POST["description"];
  $post = $_POST["post"];
  $myFile = fopen("posts.txt", "a");
  $finalPost = "Username: " .$username.", Title: " .$title. ", Description: " .$description.
  ", Post: " .$post. ", Date and Time: " .$date."\n\n";
  fwrite($myFile, $finalPost);
  fclose($myFile);
}
   ?>

</body>
<script>
    $(document).ready(function() {
        $.ajax({
          url: "posts.txt",
          success: function(posts){
            finalPosts = posts.split('\n\n');
            for(var i = 0; i < finalPosts.length; ++i){
              $("#myTable").append("<tr><td>"+ finalPosts[i] +"</td></tr>")
        }
        }
      })
    })
</script>
</script>

</html>
