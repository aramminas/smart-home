import React,{ useState } from 'react';
import { Modal, Form, Button }  from 'react-bootstrap';
import useForm from "react-hook-form";
import { useListener } from 'react-bus';

function LogIn  ()  {
    // Component local data
    const [show, setShow] = useState(false);

    // Event bus
    const showModal = React.useCallback(function (show) {
        setShow(show);
    }, []);

    useListener('show-login-modal', showModal);
    // Event bus part end

    // Form part
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    // Form part END

    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="login-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="login-title">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="login" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formLoginEmail">
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})}/>
                            <Form.Control.Feedback type="invalid" >
                                {errors.email && 'Incorrect email address.'}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formLoginPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: true, minLength: 6, maxLength: 32 })}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.password && 'Invalid password. Password must be longer than 6 characters !'}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-secondary' onClick={() => setShow(false)}>Cancel</Button>
                    <Button variant="primary" type="submit" form="login">Login</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

};
export default LogIn;