// pages/edit/[id].js

import React, { useEffect, useState } from 'react';
import { getUserById, updateUser } from '@/utils/api';
import { useRouter } from 'next/router';
import UserForm from '@/components/userForm';
import { Button } from 'react-bootstrap';

const EditUser = () => {
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const data = await getUserById(id);
          setUserData(data);  // Pre-fill the form with fetched user data
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      };
      fetchUser();
    }
  }, [id]);

  const onSubmitSuccess = () => {
    router.push('/users');  // Redirect to user list or another page after update
  };

  const [apiResponseMessage, setApiResponseMessage] = useState(null);

  const handleSubmit = async (data) => {
    try {
      const response = await updateUser(id,data); // Call your API function
      setApiResponseMessage({
        type: 'success',
        message: 'User updated successfully!',
      });
      // onSubmitSuccess()
    } catch (error) {
      setApiResponseMessage({
        type: 'danger',
        message: error.response?.data?.message || 'An error occurred.',
      });
    }
  };


  if (!userData) return <p>Loading...</p>;  // Loading state while fetching user data

  return (
    <div>
     
      {/* <h1>Edit User</h1> */}
      <UserForm 
        userData={userData} 
        onSubmit={handleSubmit} 
        onSubmitSuccess={onSubmitSuccess} 
        apiResponseMessage={apiResponseMessage} 
      />
    </div>
  );
};

export default EditUser;
