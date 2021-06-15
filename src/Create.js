import {useState} from './react';

const CreateNewBlog = () => {
    let [title, setTitle] = useState('john is good');

    return (
        <div className="frm_Cvr">
            <div className="frm_hdr"><h2>For creating blog</h2></div>
            <div className="frm_inj2">
                <div className="frm_cnt"><p>Title of the blog</p> <p><input type="text" /></p></div>
                <div className="frm_cnt">
                    <p>Author of blog</p>
                    <p>
                        <select id="">
                            <option value="mario">mario</option>
                            <option value="ben">ben</option>
                            <option value="stanley">stanley</option>
                        </select>
                    </p>
                </div>
                <div className="frm_cnt"><p>Body of blog</p> <p><textarea></textarea></p></div>
                <div className="frm_btn"><button className="btn_blue">Save blog</button></div>
            </div>
        </div>
    );
}
 
export default CreateNewBlog;