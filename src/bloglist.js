import { Link } from 'react-router-dom';

const Bloglist = (props) => {
    const blogs = props.blogs;

    const ret_link = (link_id) => {
        return '/blogs/'+link_id;
    }

    let man_moved = (blog_id, ev) => {
        ev.target.classList.add('poper');
        ev.target.closest('.mkEchBg').remove();
    }

    return (
        <div className="mkO_Bg_cvr">
            <div><h2>{props.title}</h2></div>
            <div>
                {blogs.map((ech) => (
                    <div className="mkEchBg" data-id={ech.id} key="{ech.id}">
                        <div><h3><Link to={ret_link.bind(this, ech.id)}>{ech.title}</Link></h3></div>
                        <div>By: {ech.author}</div>
                        <div className="mkEBtn"><button onClick={(ev)=> {
                            props.delF(ech.id);
                            man_moved(ech.id, ev);
                        }}>delete blog</button></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bloglist;