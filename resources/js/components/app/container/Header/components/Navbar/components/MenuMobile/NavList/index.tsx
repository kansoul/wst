import React, { useState } from "react";
import { firstMenuDesc } from "../../navData";
interface NavListProps {
    key: number;
    menuTitle: string;
    titleIndex: number;
}
const NavList = (props: NavListProps) => {
    const { titleIndex, menuTitle } = props;
    const [isVisibleChild, setVisibleChild] = useState(false);
    const [indexChild, setIndexChild] = useState<number>(0);
    const handleVisibleChild = (event: any) => {
        event.preventDefault();
        setVisibleChild(!isVisibleChild);
        setIndexChild(titleIndex);
    };
    return (
        <>
            <div className="px-5 py-4 hover:bg-gray-600 cursor-pointer">
                <a href="">
                    <li className="flex justify-between">
                        {menuTitle}
                        <button
                            onClick={(e) => handleVisibleChild(e)}
                            className="bg-red-400 px-2"
                        >
                            +
                        </button>
                    </li>
                </a>
            </div>
            <div
                className={`transition-all ease-linear ${
                    isVisibleChild ? "opacity-1 visible" : "opacity-0 invisible"
                }`}
            >
                {isVisibleChild &&
                    indexChild === titleIndex &&
                    firstMenuDesc[indexChild].map(
                        (menuDesc, indexMenuDesc): any => (
                            <div
                                className="px-10 py-3 hover:bg-gray-600 cursor-pointer "
                                key={indexMenuDesc}
                            >
                                <li className="">{menuDesc.title}</li>
                            </div>
                        )
                    )}
            </div>
        </>
    );
};

export default NavList;
