import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Icon, Menu, Table, Button } from "semantic-ui-react";

export default function Read() {
  const setData = (data) => {
    let { id, name, description, productCount, enabled, url } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Category", name);
    localStorage.setItem("Description", description);
    localStorage.setItem("Product Count", productCount);
    localStorage.setItem("Enabled", enabled);
    localStorage.setItem("URL", url);
  };
  let [ecwidData, setEcwidData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://app.ecwid.com/api/v3/63690252/categories?token=secret_YKpSAeaaekKAeeSB5TZ69qhRh4RPAG2N"
      )
      .then((response) => {
        setEcwidData(response.data);
      })
      .catch((error) => {
        console.log(typeof response);
        console.log(error);
      });
  }, []);
  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Products count</Table.HeaderCell>
          <Table.HeaderCell>Enabled</Table.HeaderCell>
          <Table.HeaderCell>URL</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {ecwidData?.items?.map((data) => {
          return (
            <Table.Row>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.description}</Table.Cell>
              <Table.Cell>{data.productCount}</Table.Cell>
              <Table.Cell>{data.enabled ? "true" : "false"}</Table.Cell>
              <Table.Cell>{data.url}</Table.Cell>
              <Router>
                <Table.Cell>
                  <Link to="/update">
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Link>
                </Table.Cell>
              </Router>
            </Table.Row>
          );
        })}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
