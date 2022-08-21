import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const featuredProducts = [
    "assets/img/slide/slide1.png",
    "assets/img/slide/slide2.png",
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
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    const handleOnClick = (index: number) => {
        count = index;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    return (
        <div ref={slideRef} className="w-[100%] select-none">
            <section className="pt-16 w-[100%] flex h-auto md:h-[460px] max-h-[860px] mt-[50px]">
                <div className="w-full md:w-[40%] items-center mx-[10px]">
                    <div className="w-full">
                        <h2 className="font-semibold text-4xl text-blueGray-600 text-center sm:text-left">
                            Notus React - A beautiful extension for Tailwind
                            CSS.
                        </h2>
                        <img
                            src={featuredProducts[currentIndex]}
                            alt=""
                            className="w-[100%] max-h-[20%] px-[10%] md:w-0"
                        />
                        <p className="mt-4 text-lg leading-relaxed text-blueGray-500 text-center sm:text-left">
                            Notus React is Free and Open Source. It does not
                            change any of the CSS from{" "}
                            <a
                                href="https://tailwindcss.com/?ref=creativetim"
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
                                href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                                target="_blank"
                                className="get-started text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                            >
                                Get started
                            </a>
                            <a
                                href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                                className="github-star ml-1 text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                target="_blank"
                            >
                                Github Star
                            </a>
                        </div>
                    </div>
                </div>
                <img
                    src={featuredProducts[currentIndex]}
                    alt=""
                    className="w-0 md:w-[40%] md:max-h-[80%] md:mx-[10%]"
                />
            </section>
            <div className="flex items-center justify-center mt-[10px] invisible md:visible">
                {featuredProducts.map((productsLength: any, index: number) => (
                    <button
                        key={index}
                        className={`w-[15px] h-[15px] border rounded-full mx-[8px] ${
                            index === count ? "bg-green-200" : ""
                        }`}
                        onClick={() => handleOnClick(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}
