var title = "The First Post";

function addpost() {
  var allposts = document.getElementById("posttitle").value;
  document.getElementById("title-text").innerHTML = allposts;
  var text_box = document.getElementById("text-box").value;
  document.getElementById("textofbox").innerHTML = text_box;
  var ImagePost = document.getElementById("image-post");
  console.log(ImagePost);
  readURL(ImagePost);

}


function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function (e) {
        var PostImage = document.getElementById("post-image");
        PostImage.setAttribute('src', e.target.result);

      }
      
      reader.readAsDataURL(input.files[0]);
  }
}

