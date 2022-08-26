import React, { useEffect, useRef, useState } from "react";

const featuredProducts = [
    "assets/img/slide/slide1.png",
    "assets/img/slide/slide2.png",
];
const items: any = [
    {
        id: 0,
        h1: "SAO KIM BRANDING",
        h2: "Giải pháp xây dựng thương hiệu toàn diện",
        h3: "Thấu hiểu bối cảnh doanh nghiệp, đưa ra giải pháp tối ưu, Sao Kim sẵn sàng đồng hành cùng thương hiệu cất cánh.",
        img: "assets/img/slide/slide1.png",
    },
    {
        id: 1,
        h1: "SAO KIM BRANDING",
        h2: "Agency được nhiều khách hàng tin tưởng nhất",
        h3: "Sao Kim là sự đảm bảo thành công cho dự án của bạn với hơn 8000+ khách hàng tin tưởng.",
        img: "assets/img/slide/slide2.png",
    },
];
let count = 0;
let slideInterval: any;
export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef: any = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
        // eslint-disable-next-line
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 3500);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };
    const handleOnNextClick = () => {
        count = (count + 1) % items.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    const handleOnClick = (index: number) => {
        count = index;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    return (
        <div
            ref={slideRef}
            className="w-[100%] max-w-[1370px] m-auto select-none h-auto mt-[80px]"
        >
            <section className="pt-16 flex items-center justify-center h-auto md:h-[460px] max-h-[860px]">
                <div className="w-full md:w-[40%] items-center mx-[10px]">
                    <div className="w-full">
                        <h1>{items[currentIndex]["h1"]}</h1>
                        <h2 className="font-semibold text-4xl text-blueGray-600 text-center sm:text-left">
                            {items[currentIndex]["h2"]}
                        </h2>
                        <img
                            src={items[currentIndex]["img"]}
                            alt=""
                            className="w-[100%] max-h-[20%] px-[10%] md:w-0"
                        />
                        <p className="mt-4 text-lg leading-relaxed text-blueGray-500 text-center sm:text-left">
                            {items[currentIndex]["h3"]}{" "}
                            <a
                                href="#"
                                className="text-blueGray-600"
                                target="_blank"
                            >
                                Tailwind CSS
                            </a>
                            . It features multiple HTML elements and it comes
                            with dynamic components for ReactJS, Vue and
                            Angular.
                        </p>
                        <div className="mt-12 flex justify-center">
                            <a
                                href="#"
                                target="_blank"
                                className="get-started text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                            >
                                Get started
                            </a>
                            <a
                                href="#"
                                className="github-star ml-1 text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                target="_blank"
                            >
                                Github Star
                            </a>
                        </div>
                    </div>
                </div>
                <img
                    src={items[currentIndex]["img"]}
                    alt=""
                    className="w-0 md:w-[50%] md:max-h-[100%]"
                />
            </section>
            <div className="flex items-center justify-center mt-[10px]">
                {items.map((item: any) => (
                    <button
                        key={item.id}
                        className={`w-[15px] h-[15px] border rounded-full mx-[8px] ${
                            item.id === count ? "bg-green-200" : ""
                        }`}
                        onClick={() => handleOnClick(item.id)}
                    ></button>
                ))}
            </div>
        </div>
    );
}
