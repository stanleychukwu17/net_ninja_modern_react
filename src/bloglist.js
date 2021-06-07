const Bloglist = (props) => {
    const blogs = props.blogs;

    return (
        <div className="mkO_Bg_cvr">
            <div><h2>{props.title}</h2></div>
            <div>
                {blogs.map((ech) => (
                    <div className="mkEchBg" key="{ech.id}">
                        <div><h3>{ech.title}</h3></div>
                        <div>By: {ech.author}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bloglist;