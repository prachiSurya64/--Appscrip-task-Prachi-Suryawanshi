import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";

const { Sider } = Layout;

function SideBarStyle({ isSmallScreen, isSidebarOpen ,handleClose}) {



 

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        zIndex: 1,
        paddingTop: 64,
        display: isSmallScreen ? (isSidebarOpen ? "block" : "none") : "none",
        transition: "width 0.3s ease",
      }}
      collapsed={!isSidebarOpen}
    >
      <div className="logo" />
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
        <CloseOutlined onClick={handleClose} style={{ color: "#fff", fontSize: "1.5rem", cursor: "pointer" }} />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          SHOP
        </Menu.Item>
        <Menu.Item key="2">
          SKILLS
        </Menu.Item>
        <Menu.Item key="3">
          STORIES
        </Menu.Item>
        <Menu.Item key="4">
          ABOUT
        </Menu.Item>
        <Menu.Item key="5">
          CONTACT US
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideBarStyle;

