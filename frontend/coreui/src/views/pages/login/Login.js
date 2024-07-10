import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { api, BACKEND_URL } from 'src/plugins/api'
import swal from 'sweetalert'


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")){
      history.push('/user/dashboardUser')
    }
  }, []);

  // async function LoginUser(){
  //   let Credential = {username, password};
  //   console.warn(Credential);

  //   let result = await fetch("http://127.0.0.1:8000/api/login/", { 
  //       method:'POST',
  //       body: JSON.stringify(Credential),
  //       headers: {
  //         "content-type": "application/json",
  //         Accept: "application/json",
  //       },
  //   });
  //   result = await result.json();

  //   if (result.error){
  //     setError(result.error);
  //   } else {
  //     localStorage.setItem("user-info",JSON.stringify(result));
  //     history.push("/user/dashboardUser");
  //   }
  //   console.warn("result", result);

  // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let credential = {username, password};

    // let result = await fetch("http://127.0.0.1:8000/api/login/", { 
    //     method:'POST',
    //     body: JSON.stringify(credential),
    //     headers: {
    //       "content-type": "application/json",
    //       Accept: "application/json",
    //     },
    // });

    try{
      const response = await api.post('/login', {username, password});
      // login account
      if (response.data.user.id_account != null && response.data.user.id_admin == null) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', 'account');
        localStorage.setItem("user-info", JSON.stringify(response.data.user));
        localStorage.setItem("id_account",JSON.stringify(response.data.user.id_account));
        history.push("/user/dashboardUser");
        window.location.reload();
      // login admin
      } else if (response.data.user.id_account == null && response.data.user.id_admin != null){
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', 'admin');
        localStorage.setItem("user-info", JSON.stringify(response.data.user));
        localStorage.setItem("id_admin",JSON.stringify(response.data.user.id_admin));
        history.push("/admin/dashboardAdmin");
        window.location.reload();
      }
    } catch (error){
      swal("warning", "invalid credential", "warning");
      setError('invalid credential');
    }

  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6" xs="12">
            <CCardGroup>
              <CCard className="p-6">
                <CCardBody>
                  <CForm onSubmit={(e) => handleSubmit(e)}>
                    <h1 className="text-center">Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    {error &&(
                      <div className='alert alert-danger' role='alert'>
                        {error}
                      </div>
                    )}

                    {/* Username */}
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                        type="text" 
                        placeholder="Username" 
                        onChange={(e)=> setUsername(e.target.value)}
                        value={username} />
                    </CInputGroup>

                    {/* Password */}
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e)=> setPassword(e.target.value)}
                        value={password} />
                    </CInputGroup>

                    <CRow>
                      <CCol xs="6">
                        <CButton 
                          color="primary"
                          // onClick={LoginUser}
                          type='submit'
                          className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <Link to="/register">
                          <CButton color="primary" >Register Now!</CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Klik sign up untuk membuat akun baru anda.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
