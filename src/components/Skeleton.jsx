function Skeleton() {
    return (
        <div className="min-w-[264px] md:min-w-[330px] relative bg-gray-200 aspect-[4/5] p-4 animate-pulse">
            <div className="h-full relative">
                <div className="w-full h-full rounded-md bg-gray-200"></div>
                <span className="absolute top-2 right-2 text-white font-semibold py-1 px-6 rounded-md uppercase text-[0.6rem] bg-gray-400">&nbsp;</span>
                <div className="absolute top-12 right-2 flex flex-col space-y-4">
                    <div className="w-6 h-6 text-gray-500 bg-gray-300"></div>
                    <div className="w-6 h-6 text-gray-500 bg-gray-300"></div>
                </div>
            </div>
            <div className="absolute bottom-6 w-full text-white p-4 flex flex-col gap-2">
                <div className="text-2xl font-medium h-5 bg-gray-300 w-4/5"></div>
                <div className="text-base font-normal h-6 bg-gray-300 w-2/3"></div>
            </div>
        </div>
    );
}

export default Skeleton;
