// Marquee effect

(function () {
    const script = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    script.async = true;
    script.src = "https://api.adnan-tech.com/public/js/at.js";
    script.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(script, s0);

    script.onload = function () {
        at.loadMarquee("#marquee", `<h3 class="fw-bold flex-end text-white">Featured Posts</h3>`, {
            duration: 5, // seconds
            direction: "rtl"
        });
    };
})();

// Fetching JsonPlaceHolder for Featured Posts

let featuredWrapper = document.querySelector("#featured");

let featuredBox = [];

getFeaturedPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        featuredBox = data;
        featuredBox = featuredBox.slice(0, 2);
        let featuredPostHolder = "";
        console.log(featuredBox);
        for (let i = 0; i < featuredBox.length; i++){
            featuredPostHolder += `
                <div class="col-lg-6 col-md-6 mb-5 d-flex justify-content-center align-items-center">
                    <div class="feature-img">
                        <img src="../img/featured${[i]}.png" alt="featiure" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 d-flex justify-content-center align-items-center mb-5">
                    <div class="text-div order-sm-last">
                        <h5 id="featured-title" class="fw-bold pb-3">${featuredBox[i].title}</h5>
                        <p  id="featured-body">${featuredBox[i].body}</p>
                        <p  id="featured-body">${featuredBox[i].body}</p>
                        <div class="btn-div d-flex justify-content-between ">
                            <a href="#" class="btn btn-outline-dark">Read More</a>
                            
                            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal"> Update</button>
  
                            <!-- Modal for update button-->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Update the blog post</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form class="row">
                                            <div class="col-lg-12 pb-4">
                                                <label for="title-update" class="form-label">Title</label>
                                                <input type="text" class="form-control" id="title">
                                            </div>
                                            <div class="col-lg-12">
                                                <label for="body-update" class="form-label">Enter your text here</label>
                                                <textarea class="form-control" id="body-update" rows="5"></textarea>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-dark" id="update-post" >Update Post</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <button class="btn btn-outline-dark">Delete</button>
                        </div>
                    </div>
                </div>
            `
        }
        featuredWrapper.innerHTML = featuredPostHolder;
    })
    
}
getFeaturedPosts();

// Updating Featured Posts

let updatePost = document.querySelector("#update-post");





// let deletePost = document.querySelector("#delete-post");
// let post = document.querySelector(".img-post");
// deletePost = deletePost.addEventListener('click', () => {
//     post.remove();
// });




//FETCHING JSONPLACEHOLDER FOR RECENT POSTS

let recentPosts = document.querySelector("#recent-posts");
let recentBox = [];
const url ="https://jsonplaceholder.typicode.com/posts";
let recentPostHolder = "";

const recentPost = (posts) => {
    recentBox = posts;
        recentBox = recentBox.slice(0, 12);
        console.log(recentBox);
        for (let i = 0; i < recentBox.length; i++){
            let wordLength = recentBox[i].body;
            wordLength = wordLength.slice(0, 90);

            let titleLength = recentBox[i].title;
            titleLength = titleLength.slice(0, 30);

            recentPostHolder += `
                <div class="col-lg-4 col-md-6 mb-5">
                    <div class="img-post">
                        <img src="img/post${[i]}.jpg" alt="post images" style="border-radius:15px; height: 33vmax !important;" class="img-fluid w-100 post-images">
                    </div>
                    <h5 class="post-title pt-2 pb-2 main-color fw-bold">${titleLength}</h5>
                    <p class="post-body">${wordLength}</p>
                    <div class="post-links d-flex justify-content-between">
                        <a href="#" class="btn btn-outline-dark">Read More</a>
                        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal"> Update</button>
                        <button class="btn btn-outline-dark" id="delete-post">Delete</button>
                    </div>
                </div>
            `;
        }
        recentPosts.innerHTML = recentPostHolder;
}

getRecentPosts = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {recentPost(data)})
    recentPosts.addEventListener('click', () => {
        console.log("clicked");
    });
};
getRecentPosts();

// FETCHING DELETE METHOD FOR RECENT POSTS

// let deletePost = document.querySelector(".delete-btn");
// let postImages = document.querySelector(".post-images");
// deletePost = deletePost.addEventListener('click', deletePost);

// function deletePostApi() {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: 'DELETE',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         body: null     
//     })
//     .then(response => response.json())
//     .then(data => {
//         let postData = data;
//         console.log(postData);
        
//     })
// };
// deletePostApi()

