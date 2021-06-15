import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import Getman from './get_content'

const BlogDetails = (props) => {
    let {id: blog_id} = useParams();

    let {data, pending, error} = Getman('http://localhost:8000/blogs/'+blog_id);

    if (pending) {
        return ('page loading');
    } else {
        return (
            <div className="container">
                <div className="Bgh_title"><h2>{data.title}</h2></div>
                <div className="Bgh_author">By: {data.author}</div>
                <div className="bgh_body">{data.body}</div>
            </div>
        );
    }
}
 
export default BlogDetails;