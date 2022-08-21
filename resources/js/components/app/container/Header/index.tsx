/*eslint-disable*/
import React from "react";
import Slider from "./components/Slide";

export default function Header() {
    return (
        <>
            <div className="flex">
                <h1 className="peer w-[200px] bg-green-600 hover:bg-green-700 text-white pointer-events-auto">
                    Dropdown
                </h1>
                <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg absolute transition-all duration-500">
                    <a className="px-5 py-3 hover:bg-gray-200" href="#">
                        About Us
                    </a>
                    <a className="px-5 py-3 hover:bg-gray-200" href="#">
                        Contact Us
                    </a>
                    <a className="px-5 py-3 hover:bg-gray-200" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>
            <Slider/>
        </>
    );
}
