import { useEffect, useState } from 'react';
import UserList from '../../components/UserList';
import { getUsers } from '@/utils/api';

export default function Home() {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to load users');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <UserList usersData={users} errors={error} />
    </div>
  );
}
