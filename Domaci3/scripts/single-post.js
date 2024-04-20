

const postContainer = document.getElementById('post-container');

const params = new URLSearchParams(window.location.search);

console.log(params)

const id = Number(params.get('id'));

const postData = photographyBlogPosts.filter(post => post.id === id)[0];

function generateSinglePost(postData) {
    return `
    <div class="post-img-content">
        <div class="img-container">
            <img class="post-img" src="${postData.imageLink}" alt="${postData.title}" />
        </div>
        <p><i>Author:</i> ${postData.author}</p>
    </div>

    <div class="post-content">
        <h2 class="post-title">${postData.title}</h2>
        <p class="post-date"><i>Published on ${formatDate(postData.date)}</i></p>
        <p class="post-text">${postData.description}</p>
    </div>`
}

postContainer.innerHTML = generateSinglePost(postData);


