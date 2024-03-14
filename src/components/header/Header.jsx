import profile from '../../images/profile.png';
 

const Header = () => {
    return (
        <div className='flex justify-between px-10 items-center border-b-2 h-[15vh]'>
            <div className="bg-purple-400 ">
                <h3 className="text-3xl font-bold">Knowledge Cafe</h3>
            </div>
            <div className='w-[60px] h-[60px] rounded-full'>
                <img src="https://i.ibb.co/KhHgGkb/pleasant-looking-caucasian-female-with-long-hair-wearing-yellow-casual-shirt-having-good-mood-lookin.jpg" alt="" className='w-full h-full rounded-full'/>
            </div>
        </div>
    );
};

export default Header;