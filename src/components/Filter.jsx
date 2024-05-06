import { Button, Collapse } from "antd";
import React, { useState } from "react";
import { styled } from "styled-components";
import CutomizableBar from "./FilterLayout";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function Customizable() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;

    .ant-btn {
      cursor: pointer;
      color: #000000;
      activecolor: "#000000";
    }

    .underline {
      border-bottom: 0.06rem solid #d9d9d9;
    }
  `;

  return (
    <>
      <div>
        {isFilterVisible ? (
          <ButtonWrapper>
            <Button
              type="link"
              className="underline"
              onClick={toggleFilterVisibility}
            >
              <LeftOutlined /> Hide Filter
            </Button>
          </ButtonWrapper>
        ) : (
          <ButtonWrapper>
            <Button
              type="link"
              className="underline"
              onClick={toggleFilterVisibility}
            >
              <RightOutlined /> Show Filter
            </Button>
          </ButtonWrapper>
        )}
      </div>
      {isFilterVisible && (
        <Collapse
          bordered={false}
          style={{ marginTop: "1rem" }}
          activeKey={isFilterVisible ? "block" : ""}
        >
          <CutomizableBar />
        </Collapse>
      )}
    </>
  );
}

export default Customizable;
