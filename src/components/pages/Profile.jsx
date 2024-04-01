import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Card } from 'react-bootstrap';

const Profile = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      }).catch((err) => {
        console.error(err);
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes

  if (!userInfo) {
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <Card className="p-4">
          <Card.Body>
            <Card.Title id="welcome">Fetching user info ...</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
  console.log(userInfo);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <Card className="p-4">
        <Card.Body>
          <Card.Title id="welcome">Welcome, {userInfo.name}!</Card.Title>
          <br/>
          <table className="table">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{userInfo.given_name}</td>
              </tr>
              <tr>
                <td>Second Name</td>
                <td>{userInfo.family_name}</td>
              </tr>
              <tr>
                <td>Zone Info</td>
                <td>{userInfo.zoneinfo}</td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;