const Bloglist = (props) => {
    const blogs = props.blogs;

    return (
        <div className="mkO_Bg_cvr">
            <div><h2>{props.title}</h2></div>
            <div>
                {blogs.map((ech) => (
                    <div className="mkEchBg" data-id={ech.id} key="{ech.id}">
                        <div><h3>{ech.title}</h3></div>
                        <div>By: {ech.author}</div>
                        <div><button onClick={props.delF.bind(this, ech.id)}>delete blog</button></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bloglist;