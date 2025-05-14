import FloatingHeader from "./FloatingHeader";
import {ActivityIndicator} from "react-native";
import React from "react";

export default function LoadingView({headerText}) {
    return (
        <>
            <FloatingHeader text={headerText} />
            <ActivityIndicator size="small" style={{ flex: 1 }} />
        </>
    );
}