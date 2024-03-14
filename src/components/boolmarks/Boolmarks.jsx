
const Boolmarks = ( {bookmarks} ) => {
    console.log(bookmarks)
    return (
        
        <div className="w-[40%]">
            <h3>Bookmarks : {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <p className="text-2xl p-4 border-2 mt-1 border-solid w-full">{bookmark.title}</p>)
            }        
        </div>
    );
};

export default Boolmarks;