const Visual = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            {/* Blue Center */}
            <div className="relative bg-customBlue text-white p-8 rounded-lg w-1/3 h-1/4 shadow-customShadow">
                {/* Picture at left-up corner */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-cover bg-center rounded-tl-lg">
                    {/* Image */}
                    <img
                        src="https://i.imgur.com/Uh6IvcO.png"
                        alt="bitcoin"
                        className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5"
                    />
                </div>

                <div className="flex justify-between">
                    {/* Left */}
                    <div className="flex items-center justify-center w-1/2">
                        <p className="text-m">Hello</p>
                    </div>

                    {/* Right */}
                    <div className="flex items-center justify-center w-1/2">
                        <ul className="">
                            <li className="marker:text-customPink list-outside list-disc ml-6">Point 1</li>
                            <li className="marker:text-customGreen list-outside list-disc ml-6">Point 2 xxxx</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visual;