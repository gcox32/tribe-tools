import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

export function useUserData() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user.attributes);
      setUserData(user.attributes);
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };

  return userData;
}

