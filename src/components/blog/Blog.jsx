import PropTypes from 'prop-types';
import { IoBookmarkSharp } from "react-icons/io5";

const Blog = ({ blog, handleBookMark, markAsReadContainer}) => {
    const { cover, author_img, title, author, hashtags, reading_time, id } = blog
    return (
        <div className="mt-5 h-[83vh]">
            <img src={cover} alt="" className="h-[50%] w-full" />
            <div className="mt-4 flex justify-between items-center">
                <div className="flex gap-3">
                    <div className="inline-block">
                        <img src={author_img} alt="" className="h-[50px] w-[50px] rounded-full" />
                    </div>
                    <div>
                        <h3 className="font-semibold">{author}</h3>
                        <span className="text-xs">Mar 14(14 days ago)</span>
                    </div>
                </div>
                <div>
                    <span className='flex justify-center gap-3'>{reading_time}<button onClick={() => handleBookMark({blog})}><IoBookmarkSharp /></button></span>
                </div>

            </div>
            <h3 className='text-4xl font-bold mt-4'>{title}</h3>
            <div className='flex gap-2 text-sm'>
                {
                    hashtags.map(hash => <p>#{hash}</p>)
                }
            </div>
            <span className='underline text-blue-800 mt-4 cursor-pointer' onClick={() => markAsReadContainer(id)}>Mark as read</span>

        </div>

    );
};

export default Blog;