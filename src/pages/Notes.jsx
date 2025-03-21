import React, { useState } from "react";
import { Input, Card, Col, Row, Button } from "antd";
import { notes as rawData } from "../assets/data";
// to-do:
// add search function
// compact mode?? click and show the whole card in a new window? or popup
const Notes = () => {
  const [notes, setNotes] = useState(rawData);
  const [searchTearm, setSearchTerm] = useState("");

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSearchButtonClick = () => {
    console.log("search tearm: ", searchTearm);
    const newNotes = rawData.filter((e) => e.title?.includes(searchTearm));
    setNotes(newNotes);
    // setSearchTerm("");
  };

  const onClearButtonClick = () => {
    setNotes(rawData);
    setSearchTerm("");
  };

  return (
    <div
      style={{
        padding: "24px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        Search:{" "}
        <Input
          placeholder=""
          size={"small"}
          style={{ width: "200px" }}
          value={searchTearm}
          onChange={onSearchChange}
        ></Input>
        <Button size={"small"} onClick={onSearchButtonClick}>
          Search
        </Button>
        <Button size={"small"} onClick={onClearButtonClick}>
          Clear
        </Button>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "baseline" }}>
        目前包括的内容涵盖一下方面：{rawData.map((e) => e.title + ", ")}
      </div>
      <Row gutter={16} style={{ display: "flex", gap: "16px" }}>
        {notes.map((e) => (
          <Card
            key={e.title}
            // span={8}
            title={e.title}
            variant="borderless"
            style={{
              //   height: "200px",
              overflow: "hidden",
              paddingBottom: "8px",
            }}
            className="card-container"
          >
            {e.content}
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default Notes;
