import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import Select from 'react-select';
import * as yup from 'yup';
import { useRouter } from 'next/router';  // Import useRouter for navigation

// Validation Schema
const schema = yup.object().shape({
  user: yup.string().required('User name is required'),
  interest: yup.array().of(yup.string()).min(1, 'At least one interest is required'),
  age: yup.number().typeError('Age must be a number').integer().required('Age is required'),
  mobile: yup.string().matches(/^\d{10}$/, 'Mobile number must be 10 digits').required('Mobile number is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
});

const interestOptions = [
  { value: 'Comics', label: 'Comics' },
  { value: 'Sports', label: 'Sports' },
  { value: 'Music', label: 'Music' },
  { value: 'Movies', label: 'Movies' },
];

const UserForm = ({ userData, onSubmitSuccess, onSubmit, apiResponseMessage }) => {
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();  // Initialize the useRouter hook

  useEffect(() => {
    if (userData) {
      reset(userData);  // Pre-fill form with existing user data
    }
  }, [userData, reset]);

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          {/* Back Button */}
          <Button variant="secondary" onClick={() => router.back()} className="mb-3">
            Back
          </Button>

          <Form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow bg-white">
            <h3 className="text-center mb-4">{userData ? 'Edit User' : 'Add New User'}</h3>

            {/* API Response Message */}
            {apiResponseMessage && (
              <Alert variant={apiResponseMessage.type}>
                {apiResponseMessage.message}
              </Alert>
            )}

            <Form.Group controlId="user">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                {...register('user')}
                placeholder="Enter your name"
                isInvalid={!!errors.user}
              />
              <Form.Control.Feedback type="invalid">{errors.user?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="interest" className="mt-3">
              <Form.Label>Interest</Form.Label>
              <Controller
                name="interest"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={interestOptions}
                    isMulti
                    onChange={(selected) => field.onChange(selected.map((option) => option.value))}
                    value={interestOptions.filter((option) => field?.value?.includes(option.value))}
                  />
                )}
              />
              {errors.interest && <div className="text-danger mt-1">{errors.interest.message}</div>}
            </Form.Group>

            <Form.Group controlId="age" className="mt-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                {...register('age')}
                placeholder="Enter your age"
                isInvalid={!!errors.age}
              />
              <Form.Control.Feedback type="invalid">{errors.age?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="mobile" className="mt-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                {...register('mobile')}
                placeholder="Enter your mobile number"
                isInvalid={!!errors.mobile}
              />
              <Form.Control.Feedback type="invalid">{errors.mobile?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register('email')}
                placeholder="Enter your email"
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-4 w-100">
              {userData ? 'Update User' : 'Submit'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserForm;
