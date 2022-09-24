import React from "react";
import AppMenu from "./AppMenu";
export default function Main() {
    return (
        <>
            <AppMenu />
            <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
                <h1>我是首頁！</h1>
                <p>Medical-Services-Team/ReactTeamTest</p>
            </div>
        </>
    );
}
