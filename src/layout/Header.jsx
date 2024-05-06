import React, { useState, useEffect } from "react";
import {
  DownOutlined,
  HeartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Divider, Layout, Menu, Space, Typography, theme } from "antd";
import Logo from "../assets/logoapps.png";
import ContentHeading from "../pages/ContentHeading";
import MainContent from "../components/MainContent";
import FooterDesign from "./Footer";
import SideBarStyle from "./SideBar";

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

const HFComponents = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      if (isSmallScreen && !isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen, isSidebarOpen]);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout>
          <Header
            style={{
              position: "fixed",
              width: "100%",
              zIndex: "1",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#ffffff",
              padding: " 4rem 0 4rem 1rem",
              borderBottom: "0.1rem solid #E5E5E5",
            }}
          >
            <div
              style={{
                display: "flex",
                marginLeft: !isSidebarOpen ? "0rem" : "0rem",
                overflow: "hidden",
              }}
            >
              {isSmallScreen && (
                <div>
                  <Button
                    style={{ border: "none" }}
                    collapsible
                    icon={
                      isSidebarOpen ? (
                        <MenuUnfoldOutlined />
                      ) : (
                        <MenuFoldOutlined />
                      )
                    }
                    onClick={handleToggleSidebar}
                  />
                </div>
              )}
              <img
                src={Logo}
                alt="Logo"
                style={{
                  height:"1.5rem",
                  marginTop: "1.2rem",
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              />
            </div>

            <Title
              level={3}
              style={{
                margin: 0,
                fontFamily: "Inter, sans-serif",
                fontSize: "36px",
                fontWeight: 800,
                lineHeight: "43px",
                letterSpacing: "1px",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              LOGO
            </Title>
            <div>

              <div
                style={{
                  
                  gap: "0.1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  margin: isSmallScreen?"1rem 1rem 1rem 0rem" :"5rem 1rem 1rem 0rem ",
                  padding: isSmallScreen?"0rem" :"0rem 0rem 0rem 6rem ",
                }}
              >
                <SearchOutlined />
                <HeartOutlined />
                <ShoppingOutlined />
                {!isSmallScreen && (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <UserOutlined style={{ marginRight: "1rem" }} />
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        lineHeight: "1rem",
                        letterSpacing: "0.01rem",
                      }}
                    >
                      ENG <DownOutlined />
                    </span>
                  </div>
                )}
              </div>
              {!isSmallScreen && (
                <div
                  style={{
                    display: isSmallScreen ? "none" : "block",
                    width:"100%",
                    top: "180px",
                    left: "402px",
                    gap: "64px",
                    opacity: "0px",
          
                  }}
                >
                  <Text
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                    }}
                  >
                    SHOP
                  </Text>
                  <Text
                    style={{
                      fontSize: "20px",
                      lineHeight: "24px",
                      fontWeight: 700,
                    }}
                  >
                    SKILLS
                  </Text>
                  <Text
                    style={{
                      fontSize: "20px",
                      lineHeight: "24px",
                      fontWeight: 700,
                    }}
                  >
                    STORIES
                  </Text>
                  <Text
                    style={{
                      fontSize: "20px",
                      lineHeight: "24px",
                      fontWeight: 700,
                    }}
                  >
                    ABOUT
                  </Text>
                  <Text
                    style={{
                      fontSize: "20px",
                      lineHeight: "24px",
                      fontWeight: 700,
                    }}
                  >
                    CONTACT US
                  </Text>
                </div>
                
              )}
            </div>
          </Header>
          <SideBarStyle
            isSmallScreen={isSmallScreen}
            isSidebarOpen={isSidebarOpen}
            handleClose={handleToggleSidebar}
          />

          <Layout
            style={{
              marginLeft: isSmallScreen ? 0 : -200,
              transition: "margin-left 0.3s ease",
              marginTop: "8rem",
            }}
          >
            <Content
              className="site-layout-background"
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                marginTop: isSmallScreen ? "2rem" : "5rem",
                marginLeft: isSmallScreen ? "0rem" : "10rem",
                overflow: "hidden",
              }}
            >
              <ContentHeading />
              <MainContent />
            </Content>
          </Layout>
        </Layout>
      </Layout>

      <FooterDesign />
    </>
  );
};
export default HFComponents;
