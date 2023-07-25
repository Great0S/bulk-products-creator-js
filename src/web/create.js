import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

export default function Create() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [enabled, setCheckbox] = useState(false);
  const postData = () => {
    axios.post(
      "https://app.ecwid.com/api/v3/63690252/categories?token=secret_YKpSAeaaekKAeeSB5TZ69qhRh4RPAG2N",
      {
        name,
        description,
        enabled,
      }
    );
  };
  return (
    <Form className="form1">
      <Form.Field>
        <label>Name</label>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          placeholder="Category Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="Enable by default ?"
          onChange={() => setCheckbox(!enabled)}
        />
      </Form.Field>
      <Button onClick={postData} type="submit">
        Submit
      </Button>
    </Form>
  );
}
