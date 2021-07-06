import React from "react";
import "../../css/todo.css";
import { Row, Container, Form, Button, Col} from "react-bootstrap";

export default function TodoForm({
  todoArray,
  todoFormString,
  setTodoFormString,
  setTodoArray
}) {
  const inputTextHandler = (e) => {
    setTodoFormString(e.target.value);
  };

  const d = new Date();
  // console.log(`${d.getMonth() + 1}/${d.getDay()}/${d.getFullYear()}`);
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!todoFormString || /^\s*$/.test(todoFormString)) {
      return;
    }

    setTodoArray([
      ...todoArray,
      {
        title: todoFormString,
        completed: false,
        id: Math.random() * 10000,
        dueDate: `${d.getMonth() + 1}/${d.getDay()}/${d.getFullYear()}`
      }
    ]);
    setTodoFormString("");
  };

  return (
    // <Container>
      <Row className="todoBox1">
        <Form>
          <Form.Group>
            <Row>
              <Form.Label>Create a Todo:</Form.Label>
            </Row>
            <Row>
              <Col xs={4} className="jobFormInput">
                <Form.Control
                  value={todoFormString}
                  type="text"
                  onChange={inputTextHandler}
                />
              </Col>
              <Col>
                <Button onClick={submitTodoHandler} type="submit">
                  Create
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Row>
    // </Container>
  );
}
