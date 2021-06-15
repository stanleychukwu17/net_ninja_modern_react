import {useState} from 'react';

const CreateNewBlog = () => {
    let [title, setTitle] = useState('john is good');
    let [author, setAuthor] = useState('stanley');
    let [body, setBody] = useState('for me man!');


    let save_form = () => {
        let john = document.querySelectorAll('input,select,textarea,button');
        john.forEach((el)=> { el.classList.add('poper'); el.setAttribute("disabled", true); });

        const kima = {title, author, body};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            'body': JSON.stringify(kima)
        }).then(ret => {
            john.forEach((el)=> { el.classList.remove('poper'); el.removeAttribute("disabled"); });
        })
    }

    return (
        <div className="frm_Cvr">
            <div className="frm_hdr"><h2>For creating blog</h2></div>
            <div className="frm_inj2">
                <div className="frm_cnt"><p>Title of the blog</p> <p><input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /></p></div>
                <div className="frm_cnt">
                    <p>Author of blog</p>
                    <p>
                        <select value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
                            <option value="mario">mario</option>
                            <option value="ben">ben</option>
                            <option value="stanley">stanley</option>
                        </select>
                    </p>
                </div>
                <div className="frm_cnt"><p>Body of blog</p> <p><textarea value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea></p></div>
                <div className="frm_btn"><button className="btn_blue" onClick={save_form}>Save blog</button></div>
            </div>
        </div>
    );
}
 
export default CreateNewBlog;