import { FaBookmark, FaShareAlt } from 'react-icons/fa';

function Card({ image, title, description, tag }) {

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const randomColor = getRandomColor();

    return (
        <div className="min-w-[330px]  bg-white aspect-[4/5] p-4 shadow-lg cursor-pointer  transform transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="h-full relative">
                <img src={image} alt={title} className="w-full h-full rounded-md" />
                <span className="absolute top-2 right-2 text-white font-semibold py-1 px-2 rounded-md uppercase text-[0.6rem]" style={{ backgroundColor: randomColor }}>{tag}</span>
                <div className="absolute top-12 right-2 flex flex-col space-y-4">
                    <FaBookmark className="w-6 h-6 cursor-pointer text-gray-500 hover:text-gray-700" />
                    <FaShareAlt className="w-6 h-6 cursor-pointer text-gray-500 hover:text-gray-700 " />
                </div>
            </div>
            <div className="absolute bottom-6 text-white p-4 flex flex-col gap-2">
                <h3 className="text-2xl font-medium">{title}</h3>
                <p className="text-base font-normal">{description}</p>
            </div>
        </div>
    )
}

export default Card
