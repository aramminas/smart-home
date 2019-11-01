import React,{ useState } from 'react';
import { Form, Button, Alert, Row, Col }  from 'react-bootstrap';
import useForm from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import Firebase  from "../../firebase_";



// used components
import Loader from 'react-loader-spinner';

function ContactsComponent() {

    // Component local data
    const [fbError, setFbError] = useState('');
    const [showLoader, setShowLoader] = useState(false);

    let val_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Form part
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        setShowLoader(true);
        console.log('message data', data);

    };
    // Form part END

    // Redirect to user page


    return (
        <>
            { showLoader &&
                <div className={"loader-content"}>
                    <Loader type="Triangle" color="#3ca6b9" height={150} width={150} />
                </div>
            }
            <div className={"contacts-body"}>
                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
                <Row>
                    <Col lg={6} md={6} sm={6} xs={12} className={"letter-container"}>
                        <div className={"letter-content"}>
                            <img src="/img/letter.svg" alt="letter"/>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12} className={"message-container"}>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <div className="message-title">
                                    - Enter your message -
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <Form id="message" onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group controlId="formMessageFirstName">
                                        <Form.Control type="text" placeholder="First Name" name="first_name"
                                                      ref={register({required: true})}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.first_name && 'First Name field is required.'}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="formMessageLastName">
                                        <Form.Control type="text" placeholder="Last Name" name="last_name"
                                                      ref={register({required: true})}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.last_name && 'Last Name field is required.'}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="formMessageEmail">
                                        <Form.Control type="email" placeholder="What's your email?" name="email"
                                                      ref={register({required: true, pattern: val_email})}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email && 'Incorrect email address.'}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="formMessageBody">
                                        <Form.Control as={"textarea"} type="text" placeholder="Your Message..." name="message"
                                                      ref={register({required: true})}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.message && 'Message field cannot be empty !'}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        {fbError !== '' &&
                                        <Alert key="fb-error" variant="danger">
                                            {fbError}
                                        </Alert>
                                        }
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="outline-info" type="submit" form="message" className={"send-message"}>Send Message</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className={"contacts-part"}>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={12}>
                        <div className={"contacts-info"}>
                            <div className="message-title">
                                - Phone Numbers -
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12}>
                        <div className={"contacts-info"}>
                            <div className="message-title">
                                - Address -
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );

}

export default ContactsComponent;