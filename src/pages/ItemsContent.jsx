
import { Col,Card, Row, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Customizable from "../components/Filter";

const { Title } = Typography;
const { Option } = Select;

const itemData = {
  RECOMMENDED: [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ],
};

const selectedData = "RECOMMENDED";

function ItemsContent() {
  const [items, setItems] = useState(itemData[selectedData]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 100); 

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 992);
  };


  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const StyledSelect = styled.div`
    display: flex !important;
    justify-content: flex-end;
 
    
    .ant-select-selector {
      border: none !important;
      background-color: transparent !important;
    }

    .ant-select-selection-item {
      font-weight: bold;
    }
    .ant-select-focused .ant-select-selector {
      box-shadow: none !important;
      border-color: transparent !important;
    }

    .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
      border-color: transparent !important;
    }
  `;

  const StyledCard = styled(Card)`
    border-top: 0.01rem solid #D9D9D9;
    border-bottom: 0.01rem solid #D9D9D9;
    padding: 0.1rem 0;
    margin-bottom: 1rem;
    margin-top: 1rem;
    background-color: transparent !important;
    border-radius: 0 !important;

    
  `;

  return (
    <Row gutter={[16, 16]} align="middle" justify="space-between">
      <Col xs={24} sm={24} md={24} lg={16} xl={24} offset={{ lg: 4, xl: 0 }}>
        <StyledCard>
          <Row align="middle" gutter={[16, 16]}>
            {!isSmallScreen && (
              <Col>
                <Title level={4} style={{marginLeft:"2rem"}}>3452 Items</Title>
              </Col>
            )}
            <Col flex="auto">
              <Customizable />
            </Col>
            <StyledSelect>
              <Select defaultValue={selectedData}>
                {itemData[selectedData].map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            </StyledSelect>
          </Row>
        </StyledCard>
      </Col>
    </Row>
  );
}

export default ItemsContent;


