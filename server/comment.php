<?php require("header.php"); 

if (isset($_GET['news_id'])) {
    $news_id = $_GET['news_id'];
};

?>


<script type="text/javascript">

$(document).ready(function() {

    $("#submitComment").on('click', function(){

        var news_id = <?php echo $news_id; ?>;
    	var cname = $("#news-title").val();
		var cbody = $("#news-content").val();

		var sendData = { name : cname, comment : cbody, news_id: news_id };

		console.log(sendData);

        $.ajax({
            url: 'api.php/comments',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data : JSON.stringify(sendData),
            success : function(result) {
            	alert("Comment leaved!");
                window.location = 'news.php?&news_id='+news_id;
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
    });

});
</script>

    <h3>Leave your comment:</h3>
    <form method="post" action="#">
    	<input type="text" id="news-title" name="news-title" class="news-title" placeholder="Name">
      	<textarea id="news-content" name="news-content" class="news-content" rows="10" placeholder="Comment"></textarea>
      	<input id="submitComment" type="submit" data-inline="true" value="Submit" data-theme="b">
    </form>

<?php require("footer.php"); ?>