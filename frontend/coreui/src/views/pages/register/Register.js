import React, {useState, useEffect} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { api } from 'src/plugins/api';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Register = () => {

  const [nama_lengkap, setNamaLengkap] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [no_hp, setNoHp] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  // fungsi retrive Api dari laravel
  const SignUp = (event) => {

    event.preventDefault();
    
    api.post('/storeAccount',{
      nama_lengkap: nama_lengkap,
      username: username,
      email: email,
      no_hp: no_hp,
      password: password,
    })
    .then(async Response => {
      await swal("Account Berhasil Dibuat!", "success");
      history.push('/login')
    })
    .catch(error => {
      swal("Account Gagal Dibuat!", "warning");
    })

    // let item = {nama_lengkap, username, email, alamat, no_hp, umur, password};
    // console.warn(item);

    // let result = await fetch("http://127.0.0.1:8000/api/users/", { 
    //     method:'POST',
    //     body: JSON.stringify(item),
    //     headers: {
    //       "content-type": "application/json",
    //       Accept: "application/json",
    //     },
    // });
    // result = await result.json();
    // console.warn("result", result);
  }

  const konfirmasiAccount = (event) => {
    event.preventDefault();
    swal({
      title: "Konfirmasi untuk melanjutkan:",
      text:`Nama Lengkap: ${nama_lengkap}\n
            No_Hp: ${no_hp}\n
            Username: ${username}\n
            Password: ${password}\n`,
      icon: "warning",
      buttons: true,
      dangerMode: false,
    })
      .then(async (willDelete) => {
        if (willDelete) {
            SignUp(event)
        } else {
          await swal ("Pembuatan Account Dibatalkan!")
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">

                <CForm method='post' onSubmit={(event) => konfirmasiAccount(event)}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  {/* Nama Lengkap */}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                      type="text"
                      onChange={(event) => setNamaLengkap(event.target.value)}
                      value={nama_lengkap} 
                      className="form-control" 
                      placeholder="Nama Lengkap" 
                      autoComplete="nama lengkap" />
                  </CInputGroup>

                  {/* Username */}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                      type="text"
                      onChange={(event) => setUsername(event.target.value)} 
                      className="form-control"  
                      placeholder="Username" 
                      autoComplete="Username" />
                  </CInputGroup>

                  {/* Email */}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                      type="text"
                      onChange={(event) => setEmail(event.target.value)} 
                      className="form-control"  
                      placeholder="Email" 
                      autoComplete="Email" />
                  </CInputGroup>

                  {/* No Hp */}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user"/>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                      type="text"
                      onChange={(event) => setNoHp(event.target.value)} 
                      className="form-control"  
                      placeholder="No HP" />
                  </CInputGroup>

                  {/* Password */}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                      type="password"
                      onChange={(event) => setPassword(event.target.value)} 
                      className="form-control"  
                      placeholder="Password"
                      autoComplete="new-password" />
                  </CInputGroup>

                  {/* Button Submit */}
                  <CButton className="btn-primary" color='success' type='submit'>Create Account</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
