import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Icon } from '@iconify/react';

export default function AppMenu() {
    const activeStyle = { backgroundColor: "deepskyblue", color: "black" };
    const inActiveStyle = { backgroundColor: "inherit", color: "inherit" };
    return (
        <AppBar position="sticky">

            <Toolbar style={{ display: "flex", flex: 1 }}>
                <div style={{ display: "flex", flex: 7 }}>
                    <Button
                        component={NavLink}
                        to="/"
                    >
                        <Icon icon="ant-design:home-filled" fontSize={"20px"} style={{ color: "white" }} />
                    </Button>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", flex: 3 }}>
                    <Button
                        component={NavLink}
                        to="/Yun"
                        style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
                    >
                        Yun
                    </Button>

                    <Button
                        component={NavLink}
                        to="/Worker1"
                        style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
                    >
                        Worker1
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}
