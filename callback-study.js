const posts = [
    { title: 'post one' , body: 'this is post one'},
    { title: 'post two' , body: 'this is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, )
}

function createPost(post, callback){
    setTimeout(() =>{
        posts.push(post);
        callback();
    }, 2000);
}


createPost({title: 'post three', body: 'this is post three'}, getPosts);
// createPost에서 만약 getPost보다 오랜 시간이 걸린다면, createPost는 진행되지 않는다.
// 따라서 callback함수를 이용하여 위 처럼 나타낼 수 있다.
// 하지만 공부했듯 callback함수 말고 promise를 이용하여 처리하는 방법도 가능하다.