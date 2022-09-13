import React, { useEffect, useRef, useState } from "react";
import { firstMenuDesc, firstMenuTitle } from "../../navData";
export default function MenuMobile() {
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    const [isVisibleChild, setVisibleChild] = useState(false);
    const [indexChild, setIndexChild] = useState<number>(0);

    const useComponentVisible = (
        openMenuMobile: boolean,
        setOpenMenuMobile: (value: boolean) => void
    ) => {
        const ref = useRef<any>(null);
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpenMenuMobile(false);
            }
        };

        useEffect(() => {
            document.addEventListener("click", handleClickOutside, true);
            return () => {
                document.removeEventListener("click", handleClickOutside, true);
            };
        }, [openMenuMobile]);
        return { ref };
    };
    const { ref } = useComponentVisible(openMenuMobile, setOpenMenuMobile);
    const handleVisibleChild = (event: any, i: number) => {
        event.preventDefault();
        console.log(i);

        setVisibleChild(!isVisibleChild);
        setIndexChild(i);
    };
    return (
        <div className="basis-11/12 ">
            <button
                className="absolute right-[30px]"
                type="button"
                onClick={() => setOpenMenuMobile(true)}
            >
                {openMenuMobile ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                )}
            </button>
            <div
                className={`${
                    openMenuMobile
                        ? "absolute h-screen w-screen transition-all ease-linear right-0 left-0 top-0 bg-[rgba(0,0,0,.8)]"
                        : ""
                }`}
            >
                <div
                    ref={ref}
                    className={`absolute top-0 transition-all ease-linear w-[70%] h-screen bg-gray-200 right-[-100] z-50 ${
                        openMenuMobile ? "right-0 duration-200" : "hidden"
                    }`}
                >
                    <div className="w-full">
                        <div className="bg-gray-500 h-10 flex items-center justify-between ">
                            <div className="flex items-center">LOGO</div>
                            <div
                                className="mr-10 cursor-pointer flex items-center "
                                onClick={() => setOpenMenuMobile(false)}
                            >
                                X
                            </div>
                        </div>
                        <ul>
                            {firstMenuTitle.map((menuTitle, i) => (
                                <div
                                    className="px-5 py-4 hover:bg-gray-600 cursor-pointer"
                                    key={i}
                                >
                                    <a href="">
                                        <li className="flex justify-between">
                                            {menuTitle}
                                            <button
                                                onClick={(e) =>
                                                    handleVisibleChild(e, i)
                                                }
                                                className="bg-red-400 px-2"
                                            >
                                                +
                                            </button>
                                        </li>
                                    </a>
                                </div>
                            ))}
                            {isVisibleChild
                                ? firstMenuDesc[indexChild].map(
                                      (menuDesc, i): any => (
                                          <div
                                              className="px-10 py-3 hover:bg-gray-600 cursor-pointer"
                                              key={i}
                                          >
                                              <li className="" key={i}>
                                                  {menuDesc.title}
                                              </li>
                                          </div>
                                      )
                                  )
                                : ""}
                        </ul>
                        <div className="text-center">
                            <button className="bg-orange-400 w-3/5 rounded-md py-2 m-4 text-white">
                                Contact
                            </button>
                        </div>
                        <div className="flex w-full">
                            <div className="w-10  bg-red-200  mx-5"></div>
                            <div>
                                <h2>Hotline:</h2>
                                <p>12345667</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
