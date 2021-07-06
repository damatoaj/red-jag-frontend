import React from 'react'

import {
    Row,
    Container,
    Form,
    Button
} from 'react-bootstrap'

export default function TodoForm({ todoArray, todoFormString, setTodoFormString, setTodoArray }) {
    const inputTextHandler = (e) => {
        setTodoFormString(e.target.value);
    };

    const submitTodoHandler = (e) => {
        console.log('beginning of the function')
        e.preventDefault();
        if (!todoFormString || /^\s*$/.test(todoFormString)) {
            return;
        };
        
        setTodoArray([
            ...todoArray, { title:todoFormString, completed:false, id:Math.random()*10000, dueDate: new Date()}
        ]);
        setTodoFormString('');
        console.log('end of the function')
    }



    return (
        <Container className="todoContainer">
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Create a Todo:
                        </Form.Label>
                        <Form.Control value={todoFormString} type="text" onChange={inputTextHandler} />
                        <Button onClick={submitTodoHandler} type="submit">Create</Button>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    )
}