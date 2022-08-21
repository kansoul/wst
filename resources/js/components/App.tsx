import React, { Fragment, useState } from "react";
import Footer from "./app/container/Footer";
import Header from "./app/container/Header";

export interface IUser {
    name: string;
    age: number;
}
const App = () => {
    return (
        <>
        <Header />
        <Footer />
        </>
    );
};

export default App;