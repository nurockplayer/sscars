export default function teamMembers() {
    return (
        <>
            {/* Team Section: Circle Photos With Title */}
            <div className="bg-white">
                <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
                    {/* Heading */}
                    <div className="text-center">
                        <div className="text-sm uppercase font-bold tracking-wider mb-1 text-blue-700">
                            Real People
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                            Meet our talented team
                        </h2>
                        <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
                            They are working nonstop behind the scenes to help
                            you build better products, web services and
                            websites.
                        </h3>
                    </div>
                    {/* END Heading */}

                    {/* Team */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-center">
                        <div>
                            <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
                                <img
                                    src="/members/136097321_846383366095715_215085181768770236_n.jpg"
                                    alt="User Avatar"
                                    className="inline-block w-28 h-28 rounded-full"
                                    fill
                                />
                            </span>
                            <h4 className="text-xl font-semibold mb-1">
                                喬伊
                            </h4>
                            <p className="text-gray-600 font-medium">
                                Chairman

                            </p>
                        </div>
                        <div>
                            <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
                                <img
                                    src="/members/23844388_1672606132761635_293302366728784636_n.jpg"
                                    alt="User Avatar"
                                    className="inline-block w-28 h-28 rounded-full"
                                    fill
                                />
                            </span>
                            <h4 className="text-xl font-semibold mb-1">
                                小施
                            </h4>
                            <p className="text-gray-600 font-medium">
                                Founder &amp; CEO

                            </p>
                        </div>
                        <div>
                            <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
                                <img
                                    src="/members/277577563_520233172802348_3578784958336157970_n.jpg"
                                    alt="User Avatar"
                                    className="inline-block w-28 h-28 rounded-full"
                                    fill
                                />
                            </span>
                            <h4 className="text-xl font-semibold mb-1">
                                科p
                            </h4>
                            <p className="text-gray-600 font-medium">
                                Co-founder
                            </p>
                        </div>
                        <div>
                            <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
                                <img
                                    src="/members/redhungdai0306-20211030_175442-249803213_1270430643369956_8681504931267478033_n.jpeg"
                                    alt="User Avatar"
                                    className="inline-block w-28 h-28 rounded-full"
                                    fill
                                />
                            </span>
                            <h4 className="text-xl font-semibold mb-1">
                                阿呆
                            </h4>
                            <p className="text-gray-600 font-medium">
                                Director
                            </p>
                        </div>
                        <div>
                            <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
                                <img
                                    src="/members/V4RvoL7h.jpeg"
                                    alt="User Avatar"
                                    className="inline-block w-28 h-28 rounded-full"
                                    fill
                                />
                            </span>
                            <h4 className="text-xl font-semibold mb-1">
                                泰山
                            </h4>
                            <p className="text-gray-600 font-medium">
                                Cinematographer
                            </p>
                        </div>
                        <div>
                            <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
                                <img
                                    src="/members/kikkooo666-20190923_014208-68688626_171732720621509_594731114856797913_n.jpeg"
                                    alt="User Avatar"
                                    className="inline-block w-28 h-28 rounded-full"
                                    fill
                                />
                            </span>
                            <h4 className="text-xl font-semibold mb-1">
                                苦瓜
                            </h4>
                            <p className="text-gray-600 font-medium">
                                Video editor
                            </p>
                        </div>
                    </div>
                    {/* END Team */}
                </div>
            </div>
            {/* END Team Section: Circle Photos With Title */}
        </>
    );
}
