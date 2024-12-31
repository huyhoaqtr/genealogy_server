"use client";

import { makeStore } from "@/redux/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function AppProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef(makeStore());
    return <Provider store={storeRef.current}>{children}</Provider>;
}
