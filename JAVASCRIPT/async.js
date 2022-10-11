async function loadposts() {
    document.getElementById("posts").innerHTML = 'Carregando...';
     

     let req = await fetch('https://jsonplaceholder.typicode.com/posts');
     let jason = await req.jason();
     montarBlog(jason);


}

function montarBlog(lista) {
    let html = '';

    for (let i=0;i<lista.length;i++) {
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'<br>';
        html += '<hr>';    
    }

    document.getElementById("posts").innerHTML = html;
} 
