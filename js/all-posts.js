// Getting the posts through Fetch

let postWrapper = document.querySelector('#post-holder');
let postForm = document.querySelector('#post-form');
let title = document.querySelector('#title');
let body = document.querySelector('#body');
let postBox = [];

function getAllPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            console.log(postBox)
            //    console.log(data)
            postBox = data
            postsUI(postBox)
        })


}

getAllPosts();

// Creating posts using POST method

postForm.addEventListener('submit', createSinglePost)

function createSinglePost(e) {
    e.preventDefault();
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
            postBox.unshift(data);
            let postHolder = '';
            postBox.forEach(post => {
                postHolder += `
                <div class="col-lg-4 col-md-6 mb-5">
                    <div class="posts-bodies">
                        <div class="img-post">
                            <img src="./img/post${post.id}.jpg" alt="post images" style="border-radius:15px; height: 33vmax !important;" class="img-fluid w-100 post-images">
                        </div>
                        <h5 class="post-title pt-2 pb-2 main-color fw-bold">${post.title}</h5>
                        <p class="post-body">${post.body}</p>
                        <div class="btn-div d-flex justify-content-between ">
                            <button class="btn btn-outline-dark" onclick="readMore(${post.id})">Read More</button>
                            <button onclick="updateSinglePost(${post.id})" class="btn btn-dark" > Update</button>
                            <button class="btn btn-outline-dark" onclick="deletePost(${post.id})">Delete</button>
                        </div>
                    </div>
                </div>
            `
            });
            postWrapper.innerHTML = postHolder;
        })
}

// Updating posts using PUT method

function updateSinglePost(id) {
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
            let postTitles = document.querySelectorAll('.post-title');
            let postBodies = document.querySelectorAll('.post-body');
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

// REad more page

function readMore(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('viewedPost', JSON.stringify(data))
            window.location.href = 'read-more.html';
        });
}

// Calling DELETE method for posts

function deletePost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => {
            postBox = postBox.filter(post => post.id !== id);
            postsUI(postBox);
        })

}

// Displaying the posts in the UI

function postsUI (keyds) {
    let postHolder = '';
            keyds.forEach(post => {
                postHolder += `
                    <div class="col-lg-4 col-md-6 mb-5">
                        <div class="post-bodies">
                            <div class="img-post">
                                <img src="./img/post${post.id}.jpg" alt="post images" style="border-radius:15px; height: 33vmax !important;" class="img-fluid w-100 post-images">
                            </div>
                            <h5 class="post-title pt-2 pb-2 main-color fw-bold">${post.title}</h5>
                            <p class="post-body">${post.body}</p>
                            <div class="btn-div d-flex justify-content-between ">
                                <button class="btn btn-outline-dark" onclick="readMore(${post.id})">Read More</button>
                                <button onclick="updateSinglePost(${post.id})" class="btn btn-dark" href="#form-section"> Update</button>
                                <button class="btn btn-outline-dark" onclick="deletePost(${post.id})">Delete</button>
                            </div>
                        </div>
                    </div>
                `
            });
            postWrapper.innerHTML = postHolder;

}

