import Getman from "./get_content";
import Bloglist from "./bloglist";
import ojemba from "./functions.json";

console.log(ojemba);

const Home = () => {
    let {data:blogs, pending, error} = Getman('http://localhost:8000/blogs');
    let deleteBlog = blog_id => {}

    return (
        <div>
            {error && <div className="errMan">{error}</div>}
            {pending && <div className="Loading">Loading blog...</div>}
            {blogs && <Bloglist delF={deleteBlog} blogs={blogs} title="All the blog"/>}
            {blogs && <Bloglist delF={deleteBlog} blogs={blogs.filter(ech => ech.author === 'mario')} title="Marios blog"/>}
        </div>
    );
}
 
export default Home;