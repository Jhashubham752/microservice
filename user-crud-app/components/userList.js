import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const UserList = ({usersData,errors}) => {
 
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="text-center mb-4">User List</h1>

          {/* Error handling */}
          {errors && <Alert variant="danger">{errors}</Alert>}

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No users found.
                  </td>
                </tr>
              ) : (
                usersData.map((user) => (
                  <tr key={user._id}>
                    <td>{user.user}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>
                      <Button
                        variant="info"
                        size="sm"
                        href={`/users/${user._id}`}
                        className="mr-2"
                      >
                        View Details
                      </Button>
                      <Button
                        variant="warning"
                        size="sm"
                        href={`/users/edit/${user._id}`}
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default UserList;
