import React from "react";
import { Layout, Typography } from "antd";
import ItemsContent from "./ItemsContent";

const { Title, Text } = Typography;

function ContentHeading() {
  return (
    <>
      <Title level={2} style={{ }}>
        DISCOVER OUR PRODUCTS
      </Title>
      <Layout
        style={{
          width: "45.063",
          top: "23.75rem",
          left: "22.5rem",
          gap: "0px",
          opacity: "0px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography.Title
          label={6}
          style={{
            width: "100%",
            fontFamily: "Simplon Norm,sans-serif",
            fontSize: "1.375rem",
            fontWeight: 400,
            lineHeight: "2.5rem",
            textAlign:"center",
            overflow:"hidden",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          <br />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </Typography.Title>
      </Layout>

     <ItemsContent/>
    </>
  );
}

export default ContentHeading;
