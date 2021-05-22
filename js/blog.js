async function getPosts() {
    let json = await (await fetch('https://campagne-api.waba359.repl.co/posts.json')).json()
}
async function setPost(id) {
    let json = await (await fetch('https://campagne-api.waba359.repl.co/posts/'+id+'.json')).json()
    console.log(json)
    let imagediv = document.getElementById("images")
    let textdiv = document.getElementById("text")
    
}