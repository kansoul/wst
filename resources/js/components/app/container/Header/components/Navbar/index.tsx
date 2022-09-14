import React, { useEffect, useState } from "react";
import FirstMenu from "./components/FirstMenu";
import MenuMobile from "./components/MenuMobile";
import SecondMenu from "./components/SecondMenu";

export default function Navbars() {
    const [isMobileScreen, setMobileScreen] = useState(false);
    const [isOpenTop, setOpenTop] = useState(false);
    const [isOpenSecondMenu, setOpenSecondMenu] = useState(false);

    useEffect(() => {
        window.innerWidth >= 960
            ? setMobileScreen(false)
            : setMobileScreen(true);
        window.addEventListener("resize", () =>
            window.innerWidth >= 960
                ? setMobileScreen(false)
                : setMobileScreen(true)
        );
    }, []);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 1) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    return (
        <div
            className={`py-2 px-[20px] lg:py-0 fixed top-0 items-center w-full divide-x-0 border-0 bg-white h-auto ${
                isVisible ? "shadow-lg" : "shadow-none"
            }`}
        >
            <div className="flex flex-row w-full lg:max-w-[1240px] m-auto">
                <h1 className="basis-1/12 bg-red-200 w-[120px]">LOGO</h1>
                {isMobileScreen === false ? (
                    <div className="basis-11/12 bg-blue-300 flex w-[700px]">
                        <ul className="basis-10/12 h-[80px] mb-4 mt-2 p-2 mx-10 flex flex-row items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-gray-900">
                            <li
                                className="basis-[14%] h-full pt-[20px] cursor-pointer flex"
                                onMouseEnter={() => setOpenTop(true)}
                                onMouseLeave={() => setOpenTop(false)}
                            >
                                <p> Test 1</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Layer_1"
                                    data-name="Layer 1"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M11.973,18c-.704,0-1.378-.301-1.848-.824L1.729,8H22.216l-8.401,9.183c-.464,.517-1.138,.817-1.842,.817Z" />
                                </svg>

                                <FirstMenu isOpenTop={isOpenTop} />
                            </li>
                            <li
                                className="basis-[14%] h-full pt-[20px] cursor-pointer flex"
                                onMouseEnter={() => setOpenSecondMenu(true)}
                                onMouseLeave={() => setOpenSecondMenu(false)}
                            >
                                <p> Test 2 </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Layer_1"
                                    data-name="Layer 1"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M11.973,18c-.704,0-1.378-.301-1.848-.824L1.729,8H22.216l-8.401,9.183c-.464,.517-1.138,.817-1.842,.817Z" />
                                </svg>

                                <SecondMenu
                                    isOpenSecondMenu={isOpenSecondMenu}
                                />
                            </li>
                            <div className="relative">
                                <li className="peer hover:text-red-500 ">
                                    <a href="">Menu3</a>
                                </li>
                                <div className="hidden top-10 absolute peer-hover:flex hover:flex  w-[200px] flex-col bg-white drop-shadow-lg">
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        About Us
                                    </a>
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        Contact Us
                                    </a>
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        Privacy Policy
                                    </a>
                                </div>
                            </div>
                            <div className="relative">
                                <li className="peer hover:text-red-500 ">
                                    <a href="">Menu4</a>
                                </li>
                                <div className="hidden top-10 absolute peer-hover:flex hover:flex  w-[200px] flex-col bg-white drop-shadow-lg">
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        About Us444444
                                    </a>
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        Contact Us4444444
                                    </a>
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        Privacy Policy44444444
                                    </a>
                                </div>
                            </div>
                            <div className="relative">
                                <li className="peer hover:text-red-500 ">
                                    <a href="">Menu5</a>
                                </li>
                                <div className="hidden top-10 absolute peer-hover:flex hover:flex  w-[200px] flex-col bg-white drop-shadow-lg">
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        About Us444444
                                    </a>
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        Contact Us4444444
                                    </a>
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        Privacy Policy44444444
                                    </a>
                                </div>
                            </div>
                            <div className="relative">
                                <li className="peer hover:text-red-500 ">
                                    <a href="">Menu6</a>
                                </li>
                                <div className="hidden top-10 absolute peer-hover:flex hover:flex  w-[200px] flex-col bg-white drop-shadow-lg">
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        About Us444444
                                    </a>
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        Contact Us4444444
                                    </a>
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        Privacy Policy44444444
                                    </a>
                                </div>
                            </div>
                            <div className="relative">
                                <li className="peer hover:text-red-500 ">
                                    <a href="">Menu7</a>
                                </li>
                                <div className="hidden top-10 absolute peer-hover:flex hover:flex  w-[200px] flex-col bg-white drop-shadow-lg">
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        About Us444444
                                    </a>
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        Contact Us4444444
                                    </a>
                                    <a
                                        className="px-5 py-3 hover:bg-gray-200"
                                        href="#"
                                    >
                                        Privacy Policy44444444
                                    </a>
                                </div>
                            </div>
                        </ul>
                        <button className="btn-blue basis-2/12">Hehe</button>
                    </div>
                ) : (
                    <MenuMobile />
                )}
            </div>
        </div>
    );
}
