import { GoogleOutlined } from '@ant-design/icons';
import { Flex, Form, Typography, message } from 'antd';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/cordova';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components';
import { auth, googleProvider } from '../../config/firebaseConfig';
import { useAuth } from '../../context/auth';
import { useLoader } from '../../context/loader';
import nasaLogo from '../../assets/nasa.svg';
const Auth = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  useEffect(() => {
    if (userLoggedIn) {
      navigate('/home');
    }
  }, [userLoggedIn]);
  
  // const onLogin = () => {
  //     const values = form.getFieldsValue();
  //     signInWithEmailAndPassword(auth, values.email, values.password)
  //         .then((userCredential) => {
  //             // Signed in
  //             const user = userCredential.user;
  //             navigate("/home")
  //             console.log(user);
  //         })
  //         .catch((error) => {
  //             const errorCode = error.code;
  //             const errorMessage = error.message;
  //             console.log(errorCode, errorMessage)
  //         });

  // }

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        localStorage.setItem('token', token);

        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        message.error(errorMessage);
      });
  };

  const { isLoading } = useLoader();

  return (
    <>
      {
        !isLoading && (
          <Flex
            style={{ height: '100vh', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          >
            <img src={nasaLogo} width={140} />
            <PrimaryButton
              icon={<GoogleOutlined />}
              buttontext="Authenticate with Google"
              onClick={handleGoogle}
            />
          </Flex>
        )
      }
    </>
  );
};

export default Auth;
