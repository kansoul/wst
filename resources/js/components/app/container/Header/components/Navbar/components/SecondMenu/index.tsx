import React, { useState } from "react";
import { firstMenuDesc, firstMenuTitle } from "../../navData";

export default function SecondMenu(props: { isOpenSecondMenu: boolean }) {
    const { isOpenSecondMenu } = props;
    const [indexMenu, setIndexMenu] = useState<number>(0);
    return (
        <div
            className={`absolute left-0 right-0 top-[72px] bg-red-200 w-[1035px] m-auto z-1 transition-all ease-linear ${
                isOpenSecondMenu
                    ? "opacity-1 visible duration-300"
                    : "opacity-0 invisible"
            }`}
        >
            <div className="flex flex-col w-full rounded-lg absolute left-0 bg-yellow-100">
                <div className="flex">
                    <div className="block w-[40%] py-8 bg-gray-100">
                        {firstMenuTitle.map((menuTitle, i): any => (
                            <div
                                key={i}
                                className="w-full py-4 px-[45px] text-xl  hover:bg-orange-200"
                                onMouseEnter={() => setIndexMenu(i)}
                            >
                                <p>{menuTitle}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap w-[60%] h-[500px] p-10">
                        <div className="w-full relative after:absolute after:bg-yellow-400 after:w-full after:h-[2px]">
                            <h2>Dich vu va giai phap toan dien</h2>
                        </div>
                        <div className="flex flex-row flex-wrap  h-[500px]  py-10">
                            {firstMenuDesc[indexMenu].map(
                                (menuDesc, i): any => (
                                    <div
                                        className="w-[50%] flex flex-auto"
                                        key={i}
                                    >
                                        <img
                                            className="w-4 h-4"
                                            src={menuDesc.img}
                                            alt=""
                                        />
                                        <div className="flex-col">
                                            <a
                                                className="hover:text-orange-500"
                                                href=""
                                            >
                                                {menuDesc.title}
                                            </a>
                                            <p>{menuDesc.desc}</p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
