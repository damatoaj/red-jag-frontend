import React from "react";
import "../../css/todo.css";
import { Row, Form, Button, Col} from "react-bootstrap";

export default function TodoForm({
  todoArray,
  todoFormString,
  setTodoFormString,
  setTodoArray,
  currentUser
}) {
  const inputTextHandler = (e) => {
    setTodoFormString(e.target.value);
  };

  const d = new Date();
 
  const submitTodoHandler = (e) => {
    console.log('click 1')
    e.preventDefault();
    if (!todoFormString || /^\s*$/.test(todoFormString)) {
      return;
    };
    console.log('click 2')

    setTodoArray([
      ...todoArray,
      {
        title: todoFormString,
        completed: false,
        id: Math.random() * 10000,
        dueDate: `${d.getMonth() + 1}/${d.getDay()}/${d.getFullYear()}`
      }
    ]);
    console.log(todoArray)
    console.log(currentUser.todo)
    setTodoFormString("");
  };

  return (
    <Row className="todoBox1">
      <Form >
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
              <Button onClick={submitTodoHandler}>
                Create
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Row>
  );
}
