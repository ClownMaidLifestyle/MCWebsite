"use strict";

//designed for future database implementation
let blogposts = [
    ["Second test post - 05/05/2023","This is a test post, this post tests the constructor function that will eventually use a backend database to construct new posts. This post is working if it is above the other test post (newest first)"]
]

function BlogObject(postTitle, postContent){
    this.title = postTitle;
    this.content = postContent;
    this.render();
}

BlogObject.prototype.render = function(){
    const blogContainer = document.getElementById("blogPostContainer");

    const newBlogpost = document.createElement("div");
    newBlogpost.setAttribute("class","blogpost");

    const newBlogtitle = document.createElement("h3")
    newBlogtitle.setAttribute("class","blogTitle");
    newBlogtitle.textContent = this.title;
    newBlogpost.appendChild(newBlogtitle);

    const newBlogContent = document.createElement("p");
    newBlogContent.textContent = this.content;
    newBlogpost.appendChild(newBlogContent);

    blogContainer.appendChild(newBlogpost);
}

function blogInit(){
    for(let i = 0; i < blogposts.length; i++){
        let newBlog = new BlogObject(blogposts[i,0],blogposts[i,1]);
    }
}