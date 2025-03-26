import FloatingHeader from "../components/FloatingHeader";
import React from "react";
import NewsContainer from "../components/NewsContainer";

export default function NewsScreen() {
    return (
        <>
            <FloatingHeader text="NEWS"/>
            <NewsContainer title="TITLUL ANUNTULUI" description="Descrierea anuntului"/>
            <NewsContainer title="TITLUL ANUNTULUI" description="Descrierea anuntului"/>
            <NewsContainer title="TITLUL ANUNTULUI" description="Descrierea anuntului"/>
            <NewsContainer title="TITLUL ANUNTULUI" description="Descrierea anuntului"/>
        </>
    );
}