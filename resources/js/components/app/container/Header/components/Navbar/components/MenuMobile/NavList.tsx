import React, { useState } from "react";
import { firstMenuDesc } from "../../navData";

const NavList = (props: any) => {
    const { i, menuTitle } = props;
    const [isVisibleChild, setVisibleChild] = useState(false);
    const [indexChild, setIndexChild] = useState<number>(0);
    const handleVisibleChild = (event: any, i: number) => {
        event.preventDefault();
        setVisibleChild(!isVisibleChild);
        setIndexChild(i);
    };
    return (
        <>
            <div className="px-5 py-4 hover:bg-gray-600 cursor-pointer">
                <a href="">
                    <li className="flex justify-between">
                        {menuTitle}
                        <button
                            onClick={(e) => handleVisibleChild(e, i)}
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
                {isVisibleChild && indexChild === i
                    ? firstMenuDesc[indexChild].map((menuDesc, i): any => (
                          <div
                              className="px-10 py-3 hover:bg-gray-600 cursor-pointer "
                              key={i}
                          >
                              <li className="" key={i}>
                                  {menuDesc.title}
                              </li>
                          </div>
                      ))
                    : ""}
            </div>
        </>
    );
};

export default NavList;
