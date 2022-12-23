document.getElementById('header-div').addEventListener('click',function(){
    console.log("clicked")
    window.location="article.html"
})

document.getElementById('btn-view').addEventListener('click',function(e){

    document.getElementById('card-container').innerHTML+=`
            <div class="card">
                <img src="./images/article-image-01.png" alt="image1">
                <p class="date-main">DEC 12,2022</p>
                <h2>Blog four</h2>
                <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </div>
            <div class="card">
                <img src="./images/article-image-02.png" alt="image2">
                <p class="date-main">DEC 12,2022</p>
                <h2>Blog five</h2>
                <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </div>
            <div class="card">
                <img src="./images/article-image-03.png" alt="image3">
                <p class="date-main">DEC 12,2022</p>
                <h2>Blog six</h2>
                <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </div>
    `

    document.getElementById('btn-view').style.display='none'
})


document.getElementById('ham').addEventListener('click',function(){
    document.getElementById('ul-links').classList.toggle('displayMenu')
})
