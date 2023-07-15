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
      setUserData(user.attributes);
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };

  return userData;
}

export async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }