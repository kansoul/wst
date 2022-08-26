import React from "react";

export default function FirstMenu(props: { isOpenTop: boolean }) {
    const { isOpenTop } = props;
    return (
        <div
            className={`absolute left-0 right-0 top-[72px] bg-red-200 w-[1035px] m-auto z-1 transition-all ease-linear ${
                isOpenTop ? "opacity-1 visible" : "opacity-0 invisible"
            }`}
        >
            <div className="flex flex-col w-full rounded-lg absolute left-0 bg-yellow-100">
                <div className="flex">
                    <div className="w-[30%]">
                        <p>Anh ey</p>
                    </div>
                    <div className="flex flex-col w-[70%] h-[500px]">
                        <p>test 1</p>
                        <p>test 1</p>
                        <p>test 1</p>
                        <p>test 1</p>
                        <p>test 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
