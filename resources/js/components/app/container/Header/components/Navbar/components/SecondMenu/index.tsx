import React from "react";

export default function SecondMenu(props: { isOpenSecondMenu: boolean }) {
    const { isOpenSecondMenu } = props;
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
                    <div className="w-[30%]">
                        <p>Second Menu</p>
                    </div>
                    <div className="flex flex-col w-[70%] h-[500px]">
                        <p>Second Menu 1</p>
                        <p>Second Menu 1</p>
                        <p>Second Menu 1</p>
                        <p>Second Menu 1</p>
                        <p>Second Menu 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
