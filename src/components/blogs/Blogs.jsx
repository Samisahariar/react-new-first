import Blog from "../blog/Blog";

const Blogs = ({ blogs, handleBookMark, markAsReadContainer}) => {
    const data = blogs
    return (
        <div className="w-[60%]">
            <h3>bookmarks</h3>
            {
                data.map((blog, idx) => <Blog key={idx} blog={blog} handleBookMark={handleBookMark} markAsReadContainer={markAsReadContainer}></Blog>)
            }
        </div>
    );
};


export default Blogs;