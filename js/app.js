// FEATURED POSTS SECTION

// Creating Posts in The FeaturedPost Section with the help of fetch API

let postForm = document.querySelector("#post-form");
let title = document.querySelector("#title");
let body = document.querySelector("#body");
let recentPostBox = [];

postForm.addEventListener('submit', createPost)


function createPost(e) {
    e.preventDefault();
    // console.log(title.value, body.value)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            body: body.value,
            userId: 2
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            recentPostBox.unshift(data);
            let recentPostHolder = '';
            recentPostBox.forEach(post => {
                recentPostHolder += `
                    <div class="col-lg-4 col-md-6 mb-5">
                    <div class="post-body">
                        <div class="img-post">
                            <img src="img/post${post.id}.jpg" alt="post images" style="border-radius:15px; height: 33vmax !important;" class="img-fluid w-100 post-images">
                        </div>
                        <h5 class="post-title pt-2 pb-2 main-color fw-bold">${post.title}</h5>
                        <p class="post-body">${post.body}</p>
                        <div class="btn-div d-flex justify-content-between ">
                            <button class="btn btn-outline-dark" onclick="readMore(${post.id})">Read More</button>
                            <button onclick="updatePost(${post.id})" class="btn btn-dark" href="#form-section"> Update</button>
                            <button class="btn btn-outline-dark" onclick="deletePost(${post.id})">Delete</button>
                       </div>
                </div>
                                </div>
            `
            });
            recentPostWrapper.innerHTML = recentPostHolder;
        })
}


// Fetching JsonPlaceHolder for Featured Posts

let featuredWrapper = document.querySelector("#featured");



let featuredBox = [];

getFeaturedPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        featuredBox = data;
        featuredBox = featuredBox.slice(0, 2);
        featuredUI(featuredBox) ;
    })
    
}
getFeaturedPosts();



// Updating using PUT METHOD for Featured Posts


function updatePost(id) {
    console.log(id)

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            title: title.value,
            body: body.value,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            let postTitles = document.querySelectorAll('.post-title') // 100 post titles [0 -99]
            let postBodies = document.querySelectorAll('.post-body')
            console.log(postTitles)
            postTitles.forEach((postTitle, index) => {
                if (index + 1 === id) {
                    if (data.title !== "") {
                        postTitle.innerHTML = data.title
                    }
                }

            })

            postBodies.forEach((postBody, index) => {
                if (index + 1 === id) {
                    if (data.body !== "") {
                        postBody.innerHTML = data.body
                    }
                }

            })

        });
}


// Calling DELETE METHOD FOR Featured Posts

function featuredUI (postsUI) {
    let featuredPostHolder = "";
        console.log(featuredBox);

        postsUI.forEach(featuredPost => {
            featuredPostHolder += `
                <div class="col-lg-6 col-md-6 mb-5 d-flex justify-content-center align-items-center">
                    <div class="feature-img">
                        <img src="../img/featured${featuredPost.id}.png" alt="featiure" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 d-flex justify-content-center align-items-center mb-5">
                    <div class="text-div order-sm-last">
                        <h5 class="post-title" class="fw-bold pb-3">${featuredPost.title}</h5>
                        <p  class="post-body">${featuredPost.body}</p>
                        <div class="btn-div d-flex justify-content-between ">
                            <button class="btn btn-outline-dark" onclick="readMore(${featuredPost.id})">Read More</button>
                            <button onclick="updatePost(${featuredPost.id})" class="btn btn-dark" href="#form-section"> Update</button>
                            <button class="btn btn-outline-dark" onclick="deletePost(${featuredPost.id})">Delete</button>
                        </div>
                    </div>
                </div>
            `
        })

        featuredWrapper.innerHTML = featuredPostHolder;

}

function deletePost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            featuredBox = featuredBox.filter(featuredPost => featuredPost.id !== id)
            console.log(featuredBox)
            // use a function to display the UI
            featuredUI(featuredBox) ;
        })

}



//FETCHING JSONPLACEHOLDER FOR RECENT POSTS




let recentPostWrapper = document.querySelector("#recent-posts");
let recentBox = [];
const url ="https://jsonplaceholder.typicode.com/posts";

recentPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        recentBox = data;
        recentBox = recentBox.slice(0, 12);
        recentUI(recentBox) ;
    })
    
}
recentPosts();

// Updating Recent posts using PUT METHOD

function updateRecentPost(id) {
    console.log(id)

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            title: title.value,
            body: body.value,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            let postTitles = document.querySelectorAll('.recentPost-title') // 100 post titles [0 -99]
            let postBodies = document.querySelectorAll('.recentPost-body')
            console.log(postTitles)
            postTitles.forEach((postTitle, index) => {
                if (index + 1 === id) {
                    if (data.title !== "") {
                        postTitle.innerHTML = data.title
                    }
                }

            })

            postBodies.forEach((postBody, index) => {
                if (index + 1 === id) {
                    if (data.body !== "") {
                        postBody.innerHTML = data.body
                    }
                }

            })

        });
}

// Fetching DELETE METHOD for Recent Posts


function recentUI (postsUI) {
    let recentPostHolder = "";
        console.log(recentBox);

        postsUI.forEach(recentPost => {
            let wordLength = recentPost.body;
            wordLength = wordLength.slice(0, 90);

            let titleLength = recentPost.title;
            titleLength = titleLength.slice(0, 30);

            recentPostHolder += `
            <div class="col-lg-4 col-md-6 mb-5">
            <div class="post-body">
                <div class="img-post">
                    <img src="img/post${recentPost.id}.jpg" alt="post images" style="border-radius:15px; height: 33vmax !important;" class="img-fluid w-100 post-images">
                </div>
                <h5 class="recentPost-title pt-2 pb-2 main-color fw-bold">${titleLength}</h5>
                <p class="recentPost-body">${wordLength}</p>
                <div class="btn-div d-flex justify-content-between ">
                    <button class="btn btn-outline-dark" onclick="readMoreRecent(${recentPost.id})">Read More</button>
                    <button onclick="updateRecentPost(${recentPost.id})" class="btn btn-dark" href="#form-section"> Update</button>
                    <button class="btn btn-outline-dark" onclick="deletePostRecent(${recentPost.id})">Delete</button>
                </div>
            </div>
        </div>
            `
        })

        recentPostWrapper.innerHTML = recentPostHolder;
}

function deletePostRecent(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            recentBox = recentBox.filter(recentPost => recentPost.id !== id)
            console.log(recentBox)
            // use a function to display the UI
            recentUI(recentBox) ;
        })

}







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