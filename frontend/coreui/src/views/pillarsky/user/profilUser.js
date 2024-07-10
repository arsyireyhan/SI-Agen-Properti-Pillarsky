import React from "react";
import{
    CContainer,
    CLink,
    CInput,
    CButton,
    CCard,
    CRow,
    CCol,
    CCardHeader,
    CCardGroup,
    CCardBody,
    CForm,
    CInputGroup,
    CInputGroupText,
} from "@coreui/react"
import { useState, useEffect } from "react";
import { api } from "src/plugins/api";
import swal from "sweetalert";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const ProfilUser = () => {
    const token = localStorage.getItem('token');
    const {id} = useParams();

    const [data, setData] = useState({
        nama_lengkap: '',
        email: '',
        no_hp: '',
        username: '',
        password: '',
    })

    const history = useHistory();

    const updateAccount = (event) => {
        event.preventDefault();

        api.put(`/account/${id}`,
        {
            nama_lengkap: data.nama_lengkap,
            email: data.email,
            no_hp: data.no_hp,
            username: data.username,
            password: data.password,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(async Response => {
            await swal("good job!", "update account berhasil!", "success");
            history.push("/user/dashboardUser")
        })
        .catch (error => {
            console.log(error);
        })
    }

    useEffect(() => {
        const getData = () => {
            api.get(`/user/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(Response => {
                setData(Response.data.account)
            })
            .catch(error => {
                console.log(error);
            })
        }
        getData();
    }, [id])

    const konfirmasiEdit = (event) => {
        event.preventDefault();

        swal({
            title: `Konfirmasi Edit Profil anda: ${data.username}`,
            text: `Nama Lengkap: ${data.nama_lengkap}\n 
                   email: ${data.email}\n
                   no_hp: ${data.no_hp}\n 
                   username: ${data.username}\n`,
            icon: "warning",
            buttons: true,
            dangerMode: false,
        })
        .then(async (willdelete) => {
            if (willdelete) {
                updateAccount(event)
            } else {
                await swal ("Edit Account Dibatalkan!");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return(
        <div>
        <CRow className="justify-content-center">
            <CCol>
                <CCardGroup>
                    <CCard>
                        <CCardHeader>
                            <CRow>
                                <CCol md="10" xs="9" >
                                    <h2> Halaman Profil </h2>
                                </CCol>
                                <CCol md="2" xs="3" className="text-right">
                                    <CLink to={{pathname: "/user/dashboardUser"}}>
                                        <CButton color="danger">Kembali</CButton>
                                    </CLink>
                                </CCol>
                            </CRow>
                        </CCardHeader>

                        <CCardBody>
                            <CForm method="post" onSubmit={(event) => konfirmasiEdit(event)}>
                                {/* Nama Lengkap */}
                                <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Nama Lengkap</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CInput
                                                type="text"
                                                placeholder= "nama lengkap anda"
                                                required
                                                defaultValue={data.nama_lengkap}
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        nama_lengkap: event.target.value,
                                                    });
                                                }}
                                            ></CInput>
                                        </CCol>
                                    </CInputGroup>
                                </CRow>

                                {/* Email */}
                                <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Email</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CInput
                                                type="text"
                                                placeholder="Email anda"
                                                required
                                                defaultValue={data.email}
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        email: event.target.value,
                                                    });
                                                }}
                                            ></CInput>
                                        </CCol>
                                    </CInputGroup>
                                </CRow>

                                {/* no_hp */}
                                <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>no_hp</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CInput
                                                type="text"
                                                placeholder="No HP anda"
                                                required
                                                defaultValue={data.no_hp}
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        no_hp: event.target.value,
                                                    });
                                                }}
                                            ></CInput>
                                        </CCol>
                                    </CInputGroup>
                                </CRow>

                                {/* Username */}
                                <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Username</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CInput
                                                type="text"
                                                placeholder="Username anda"
                                                required
                                                defaultValue={data.username}
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        username: event.target.value,
                                                    });
                                                }}
                                            ></CInput>
                                        </CCol>
                                    </CInputGroup>
                                </CRow>

                                {/* Password */}
                                <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Password</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CInput
                                                type="text"
                                                placeholder="Password anda"
                                                required
                                                defaultValue={data.password}
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        password: event.target.value,
                                                    });
                                                }}
                                            ></CInput>
                                        </CCol>
                                    </CInputGroup>
                                </CRow>

                                {/* Update Button */}
                                <CRow className="text-right">
                                    <CCol>
                                        <CButton color="success" className="px-4" type="submit">
                                            Update
                                        </CButton>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCardGroup>
            </CCol>
        </CRow>
    </div>

    )
} 
export default ProfilUser;