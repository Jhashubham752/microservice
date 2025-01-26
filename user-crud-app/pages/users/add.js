import { useRouter } from 'next/router';
import UserForm from './../../components/userForm';
import { createUser } from '@/utils/api';
import { useState } from 'react';

export default function AddUser() {
  const router = useRouter();

  const onSubmitSuccess = () => {
    router.push('/users'); // Redirect to the users list page after successful form submission
  };

  const [apiResponseMessage, setApiResponseMessage] = useState(null);

  const handleSubmit = async (data) => {
    try {
      const response = await createUser(data); // Or your API call for create/edit
      setApiResponseMessage({
        type: 'success',
        message: 'User created successfully!',
      });
      // Optionally reset the form after success
      onSubmitSuccess();
    } catch (error) {
      setApiResponseMessage({
        type: 'danger',
        message: error.response?.data?.message || 'Error occurred while creating user',
      });
    }
  };
  


  return (
    <div>
      {/* <h1>Add User</h1> */}
      <UserForm 
        onSubmit={handleSubmit} 
        onSubmitSuccess={onSubmitSuccess} 
        apiResponseMessage={apiResponseMessage} 
      />

    </div>
  );
}
