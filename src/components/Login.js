import React, { useContext } from 'react';
import { Image, Dropdown } from 'react-bootstrap';
import swal from 'sweetalert';
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import initializeFirebaseApp from '../firebaseConfig';
import { LoggedInUser } from '../App';

export default function Login() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(initializeFirebaseApp);
  const authUserInfo = useContext(LoggedInUser);

  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        swal('Authenticate By Google', 'Google sign in success', 'success');
      })
      .catch((error) => {
        // Handle Errors here.
        swal('Error', error.message, 'error');
      });
  }

  function signOutUser() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        swal('Authenticate By Google', 'Sign-out successful', 'success');
      })
      .catch((error) => {
        // An error happened.
        swal('Error', error.message, 'error');
      });
  }

  return (
    <>
      {authUserInfo.photoURL ? (
        <Dropdown>
          <Image
            id="navbarDropdown"
            className="w-50 rounded-circle dropdown-toggle btn"
            src={authUserInfo.photoURL}
            alt="profile picture"
          />

          <div className="logout position-absolute">
            <button onClick={signOutUser} className="btn btn-danger">
              Logout
            </button>
          </div>
        </Dropdown>
      ) : (
        <button onClick={signInWithGoogle} className="btn btn-danger mx-2">
          <i className="bi bi-google me-2"></i>
          <span>SignIn With Google</span>
        </button>
      )}
    </>
  );
}
