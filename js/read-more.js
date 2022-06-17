function readMorePost() {
    let newObject = localStorage.getItem('viewedPost')
    console.log(newObject);
    let post = JSON.parse(newObject)
    console.log(post)
    console.log(post.title)
    document.getElementById('post-title').innerHTML = post.title;
    document.getElementById('view-post').src = `./img/post${post.id}.jpg`;
    document.getElementById('post-body').innerHTML = post.body;
    document.getElementById('post-title2').innerHTML = post.title;
    document.getElementById('post-body2').innerHTML = post.body;
    document.getElementById('post-body3').innerHTML = post.body;
    document.getElementById('post-body4').innerHTML = post.body;
    document.getElementById('post-body5').innerHTML = post.body;
    document.getElementById('post-title3').innerHTML = post.title;
    document.getElementById('post-body6').innerHTML = post.body;

}

readMorePost();