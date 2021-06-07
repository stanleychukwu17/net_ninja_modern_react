const Bloglist = (props) => {
    const blogs = props.blogs;

    return (
        <div className="mkO_Bg_cvr">
            <div>All blogs</div>
            <div>
                {blogs.map((ech) => (
                    <div className="" key="{ech.id}">{ech.title}</div>
                ))}
            </div>
        </div>
    );
}

export default Bloglist;