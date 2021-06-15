const DelF = (blog_id) => {
    fetch('http://localhost:8000/blogs/'+blog_id, { method: 'DELETE'});
}

const NoPage = () => {
    return (
        <div>
            <div><h1>No page found</h1></div>
            <div><img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/03135659/Lhasa-Apso-puppies-laying-side-by-side.jpg" alt="" /></div>
        </div>
    );
}
 

let ojemba = {DelF, NoPage};
 
export default ojemba;