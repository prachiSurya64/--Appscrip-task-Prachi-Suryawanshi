
import { UpOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Typography } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const BtnStyle = styled.div`
  .custom-link-button {
    color: gray !important;
    text-decoration: underline !important;
  }
`;

const { Text } = Typography;

const SectionTitle = ({ title }) => (
  <Text
    label={3}
    style={{
      display: "flex",
      justifyContent: "space-between",
      fontWeight: 600,
    }}
  >
    {title}
    <UpOutlined />
  </Text>
);

const OptionSection = ({ title, options, checkedList, onChange }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "1rem",alignItems:"flex-start" }}>
    <Text>{title}</Text>
    <BtnStyle>
      <Button
        className="custom-link-button"
        size="small"
        type="text"
        style={{
          textDecoration: "underline",
          padding: "0rem",
          marginTop: "1rem",
        }}
        onClick={() => onChange([])}
      >
        Unselect All
      </Button>
    </BtnStyle>
    <div style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          value={option}
          checked={checkedList.includes(option)}
          onChange={(e) => {
            const newList = [...checkedList];
            if (e.target.checked) {
              newList.push(option);
            } else {
              const index = newList.indexOf(option);
              if (index !== -1) {
                newList.splice(index, 1);
              }
            }
            onChange(newList);
          }}
          style={{ marginBottom: "0.5rem" }}
        >
          {option}
        </Checkbox>
      ))}
    </div>
  </div>
);

function CutomizableBar() {
  const [checkedList, setCheckedList] = useState([]);
  const plainOptions = ["Apple", "Pear", "Orange"];

  const onChange = (list) => {
    setCheckedList(list);
  };

  return (
    <div>
      <Text strong style={{ display: "flex", justifyContent: "flex-start" }}>
        <Checkbox onChange={() => onChange([])}>CUSTOMIZABLE</Checkbox>
      </Text>
      <Divider />
      <SectionTitle title="IDEAL FOR" />
      <OptionSection
        title="All"
        options={plainOptions}
        checkedList={checkedList}
        onChange={onChange}
      />
            <Divider />
      <SectionTitle title="OCCASION" />
       <Text style={{display:"flex", justifyContent: "flex-start" }}>All</Text>
      <Divider />
      <SectionTitle title="WORK" />
      <Text style={{display:"flex", justifyContent: "flex-start" }}>All</Text>
      <Divider />
      <SectionTitle title="FABRIC" />
      <Text style={{display:"flex", justifyContent: "flex-start" }}>All</Text>
      <Divider />
      <SectionTitle title="SEGMENT" />
      <Text style={{display:"flex", justifyContent: "flex-start" }}>All</Text>
      <Divider />
      <SectionTitle title="SUITABLE FOR" />
      <Text style={{display:"flex", justifyContent: "flex-start" }}>All</Text>
      <Divider />
      <SectionTitle title="ROW MATERIAL" />
      <Text style={{display:"flex", justifyContent: "flex-start" }}>All</Text>
      <Divider />
      <SectionTitle title="PATTERN" />
      <Text style={{display:"flex", justifyContent: "flex-start" }}>All</Text>
      <Divider />
    </div>
  );
}

export default CutomizableBar;

