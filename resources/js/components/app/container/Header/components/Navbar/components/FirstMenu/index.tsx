import React, { useState } from "react";

export default function FirstMenu(props: { isOpenTop: boolean }) {
    const { isOpenTop } = props;
    const [indexMenu, setIndexMenu] = useState(0);
    const FirstMenuTitle = [
        "Tư vấn thương hiệu",
        "Thiết kế thương hiệu",
        "Nhận diện thương hiệu số",
        "Ấn phẩm marketing",
        "Thiết kế bao bì nhãn mác",
        "Bản quyền, giấy phép",
    ];
    const FirstMenuDesc = [
        [
            {
                title: "agagagagagagaga",
            },
            {
                title: "Hihi",
            },
            {
                title: "hoho",
            },
            {
                title: "heheheh",
            },
        ],
        [
            {
                title: "ngungunugnugungunugn",
            },
            {
                title: "Hihi",
            },
            {
                title: "hoho",
            },
            {
                title: "heheheh",
            },
        ],
        [
            {
                title: "333333333333333333",
            },
            {
                title: "Hihi",
            },
            {
                title: "hoho",
            },
            {
                title: "heheheh",
            },
        ],
        [
            {
                title: "4444444444444444",
            },
            {
                title: "Hihi",
            },
            {
                title: "hoho",
            },
            {
                title: "heheheh",
            },
        ],
        [
            {
                title: "555555555555555555555555",
            },
            {
                title: "Hihi",
            },
            {
                title: "hoho",
            },
            {
                title: "heheheh",
            },
        ],
        [
            {
                title: "666666666666666666666666",
            },
            {
                title: "Hihi",
            },
            {
                title: "hoho",
            },
            {
                title: "heheheh",
            },
        ],
    ];
    return (
        <div
            className={`absolute left-0 right-0 top-[72px] bg-red-200 w-[1035px] m-auto z-1 transition-all ease-linear ${
                isOpenTop ? "opacity-1 visible" : "opacity-0 invisible"
            }`}
        >
            <div className="flex flex-col w-full rounded-lg absolute left-0 bg-yellow-100">
                <div className="flex">
                    {/* <div className="w-[30%]">
                        <p>Anh ey</p>
                    </div> */}
                    <div className="block w-[40%] py-8">
                        {FirstMenuTitle.map((menuTitle, i) => (
                            <div
                                className="w-full py-4 px-[45px] text-xl bg-gray-100 hover:bg-orange-200
                            
                            "
                                onMouseEnter={() => setIndexMenu(i)}
                            >
                                <p>{menuTitle}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col w-[60%] h-[500px]">
                        {/* <p>test 1</p>
                        <p>test 1</p>
                        <p>test 1</p>
                        <p>test 1</p>
                        <p>test 1</p> */}
                        {FirstMenuDesc[indexMenu].map((menuDesc) => (
                            <div>
                                <a href="">{menuDesc.title}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
