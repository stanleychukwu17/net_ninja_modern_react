import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import Getman from './get_content'

const BlogDetails = (props) => {
    let {id: blog_id} = useParams();

    let dts = Getman('http://localhost:8000/blogs/'+blog_id);
    console.log(dts);


    if (dts.pending) {
        return ('page loading');
    } else {
        return (
            <div>
                <div className="Bgh_title"><h2>Blog details ready</h2></div>
                <div className="Bgh_author">By: na mano</div>
                <div className="bgh_body"></div>
            </div>
        );
    }
}
 
export default BlogDetails;