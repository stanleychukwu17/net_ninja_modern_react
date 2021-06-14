const Home = () => {
    let {data:blogs, pending, error} = Getman('http://localhost:8000/blogs');
    let deleteBlog = blog_id => {}

    return (
        {error && <div className="errMan">{error}</div>}
        {pending && <div className="Loading">Loading blog...</div>}
        {blogs && <Bloglist delF={deleteBlog} blogs={blogs} title="All the blog"/>}
        {blogs && <Bloglist delF={deleteBlog} blogs={blogs.filter(ech => ech.author === 'mario')} title="Marios blog"/>}
    );
}
 
export default Home;