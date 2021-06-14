import { useParams } from "react-router-dom";
import Getman from './get_content'

const BlogDetails = (props) => {
    let {id: blog_id} = useParams();
    console.log(blog_id);

    let dts = Getman('http://localhost:8000/blogs/'+blog_id);
    console.log(dts);

    if (dts.pending) {
        return ('page loading');
    } else {
        return (
            <div>
                <div>Blog details preloading</div>
            </div>
        );
    }
}
 
export default BlogDetails;