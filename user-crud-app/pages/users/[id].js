import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getUserById } from '../../utils/api';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const data = await getUserById(id);
        setUser(data);
      };
      fetchUser();
    }
  }, [id]);

  if (!user) return <p>Loading...</p>;

  // Function to handle Edit button click
  const handleEdit = () => {
    router.push({
      pathname: `/users/edit/[id]`,
      query: { id: user._id }, // Pass user ID to edit page
    });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="text-center mb-4">User Details</h3>
              <Card.Title>{user.user}</Card.Title>
              <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
              <Card.Text><strong>Age:</strong> {user.age}</Card.Text>
              <Card.Text><strong>Interests:</strong> {user.interest.join(', ')}</Card.Text>
              <Card.Text><strong>Mobile:</strong> {user.mobile}</Card.Text>
              
              <Button variant="primary" onClick={handleEdit} className="w-100">
                Edit User
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetail;
