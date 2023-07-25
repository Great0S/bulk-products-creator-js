import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

export default function Update() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [enabled, setCheckbox] = useState(false);
  const [id, setID] = useState(null);
  const updateData = () => {
    axios.put(
      `https://app.ecwid.com/api/v3/63690252/categories/${id}?token=secret_YKpSAeaaekKAeeSB5TZ69qhRh4RPAG2N`,
      {
        name,
        description,
        enabled,
      }
    );
  };

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Category"));
    setDescription(localStorage.getItem("Description"));
    setCheckbox(localStorage.getItem("Enabled"));
  }, []);
  return (
    <div className="main">
      <h2>Update</h2>
      <Form className="form1">
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            placeholder="Category Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            name="enabled"
            label="Enable ?"
            checked={true}
            onChange={() => setCheckbox(!enabled)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateData}>
          Update
        </Button>
      </Form>
    </div>
  );
}
