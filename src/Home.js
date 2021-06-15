import Getman from "./get_content";
import Bloglist from "./bloglist";
import ojemba from "./funcs.js";

console.log(ojemba);

const Home = () => {
    let {data:blogs, pending, error} = Getman('http://localhost:8000/blogs');

    return (
        <div>
            {error && <div className="errMan">{error}</div>}
            {pending && <div className="Loading">Loading blog...</div>}
            {blogs && <Bloglist delF={ojemba.delF} blogs={blogs} title="All the blog"/>}
            {blogs && <Bloglist delF={ojemba.delF} blogs={blogs.filter(ech => ech.author === 'mario')} title="Marios blog"/>}
        </div>
    );
}
 
export default Home;