import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, Spinner } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import { Formik } from 'formik';
import * as Yup from 'yup';
import firebase from '../Firebase';

const SignInOrUp = () => {

    const [loading, setLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const handleOnSubmit = (values) => {
        //spinner表示開始
        if (isMounted) setLoading(true);
        //サインイン（ログイン）処理
        firebase.auth().signInWithEmailAndPassword(values.email, values.password)
            .then(res => {
                //正常終了時
                this.props.history.push("/");
                if (isMounted) setLoading(false);
            })
            .catch(error => {
                //異常終了時
                if (isMounted) setLoading(false);
                alert(error);
            });
    }

    useEffect(() => {
      setIsMounted(true);
    },[]);

    useEffect(() => {
      setIsMounted(false);
    },[]);

    return (
        <div className="container">
            <div className="mx-auto" style={{ width: 400, background: '#eee', padding: 20, marginTop: 60 }}>
                <p style={{ textAlign: 'center' }}>サインイン</p>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => handleOnSubmit(values)}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email().required(),
                        password: Yup.string().required(),
                    })}
                >
                    {
                        ({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        invalid={touched.email && errors.email ? true : false}
                                    />
                                    <FormFeedback>
                                        {errors.email}
                                    </FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        invalid={touched.password && errors.password ? true : false}
                                    />
                                    <FormFeedback>
                                        {errors.password}
                                    </FormFeedback>
                                </FormGroup>
                                <div style={{ textAlign: 'center' }}>
                                    <Button color="primary" type="submit" disabled={loading}>
                                        <Spinner size="sm" color="light" style={{ marginRight: 5 }} hidden={!loading} />
                                        ログイン
                                    </Button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

export default withRouter(SignInOrUp);
