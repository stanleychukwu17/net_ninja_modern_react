import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Getman from './get_content'

const BlogDetails = (props) => {
    let {id: blog_id} = useParams();

    let dts = Getman('http://localhost:8000/blogs/'+blog_id);

    useEffect(() => {
        console.log(render, 'rendering', dts);
        return () => {}
    });

    if (dts.pending) {
        return ('page loading');
    } else {
        return (
            <div>
                <div>Blog details ready</div>
            </div>
        );
    }
}
 
export default BlogDetails;