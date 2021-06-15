const CreateNewBlog = () => {
    return (
        <div>
            <div><h2>For creating blog</h2></div>
            <div>
                <div className=""><p>Title of the blog</p> <p><input type="text" /></p></div>
                <div className=""><p>Body of blog</p> <p><textarea></textarea></p></div>
                <div className="">
                    <p>Author of blog</p>
                    <p><textarea></textarea></p>
                </div>
                <div><button className="btn_blue">Save blog</button></div>
            </div>
        </div>
    );
}
 
export default CreateNewBlog;