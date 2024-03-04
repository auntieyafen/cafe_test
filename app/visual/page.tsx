const Visual = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            {/* Blue Center */}
            <div className="relative bg-customBlue text-white p-8 rounded-[4px] w-[300px] h-[80px] shadow-customShadow">
                {/* Picture at left-up corner */}
                <div className="absolute top-0 left-0 w-16 h-16">
                    {/* Image */}
                    <img
                        src="https://i.imgur.com/Uh6IvcO.png"
                        alt="bitcoin"
                        className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-[16px]] h-[17px]"
                    />
                </div>

                <div className="flex justify-between">
                    {/* Left */}
                    <div className="flex items-center justify-center">
                        <p className="text-m text-xs">Hello</p>
                    </div>

                    {/* Right */}
                    <div className="flex items-center justify-center w-1/2">
                        <ul className="">
                            <li className="marker:text-customPink list-outside list-disc ml-6 text-xs">Point 1</li>
                            <li className="marker:text-customGreen list-outside list-disc ml-6 text-xs">Point 2 xxxx</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visual;