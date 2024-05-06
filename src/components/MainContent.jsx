import React, { useEffect, useState } from "react";
import { Card, Typography, Space, Row, Col, Checkbox, Divider } from "antd";
import { DownSquareOutlined, HeartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import bag1 from "../assets/productImages/bag1.jpeg";
import beg2 from "../assets/productImages/beg2.jpeg";
import bag3 from "../assets/productImages/bag3.jpeg";
import bag4 from "../assets/productImages/bag4.jpeg";
import bag5 from "../assets/productImages/bag5.jpeg";
import bag6 from "../assets/productImages/bag6.jpeg";
import bag7 from "../assets/productImages/bag7.jpeg";
import bag8 from "../assets/productImages/bag8.jpeg";
import pic2 from "../assets/productImages/pic2.jpeg";
import pic3 from "../assets/productImages/pic3.jpeg";
import belt from "../assets/productImages/belt.jpeg";
import cap from "../assets/productImages/cap.jpeg";
import CutomizableBar from "./FilterLayout";

const CustomCardBody = styled.div`
  padding: 0 !important;
  margin: 0 !important;
`;

const { Text } = Typography;

function MainContent() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(-1);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHeartClick = (index) => {
    setIsHeartFilled(index);
  };

  const cardData = [
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: bag1,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: pic3,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: belt,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: cap,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: beg2,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: pic2,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: bag3,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: bag4,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: bag5,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: bag6,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: bag7,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: bag8,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: belt,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: pic3,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: cap,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: bag5,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: bag6,
    },
    {
      title: "PRODUCT NAME",
      subtitle: "Sign in or Create an account to see pricing",
      imageUrl: bag7,
    },
  ];
  return (
    <div style={{ padding: "4rem 1rem 1rem 1rem", backgroundColor: "#f0f2f5" }}>
      <Row gutter={[16, 16]}>
        {!isSmallScreen && (
          <Col xs={24} sm={24} md={24} lg={6}>
            <Card
              style={{
                border: "none",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                marginLeft: isSmallScreen ? 0 : "2rem",
              }}
            >
              <CustomCardBody className="ant-card-body">
                <CutomizableBar />
              </CustomCardBody>
            </Card>
          </Col>
        )}
        <Col xs={24} sm={24} md={24} lg={isSmallScreen ? 24 : 18}>
          <Row gutter={[16, 16]}>
            {cardData.map((data, index) => (
              <Col key={index} xs={12} sm={24} md={24} lg={8} xl={8}>
                <Card
                  style={{
                    border: "none",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    marginRight: isSmallScreen ? 0 : "0.5rem",
                    overflow:"hidden",
                  }}
                  cover={
                    <img
                      alt={data.title}
                      src={data.imageUrl}
                      style={{ width: "100%",overflow:"hidden", }}
                      
                    />
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      overflow:"hidden",
                    }}
                  >
                    <Text strong>{data.title}</Text>
                    <Text style={{ fontSize: "0.60rem" }}>{data.subtitle}</Text>
                  </div>
                  <HeartOutlined
                    style={{
                      position: "absolute",
                      bottom: 17,
                      right: 5,
                      color: isHeartFilled === index ? "red" : "inherit",
                    }}
                    onClick={() => handleHeartClick(index)}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default MainContent;
