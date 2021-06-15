const DelF = (blog_id) => {
    fetch('http://localhost:8000/blogs/'+blog_id, { method: 'DELETE'});
    console.log('deleted')
}

let ojemba = {DelF};
 
export default ojemba;