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
    CLabel,
    CSelect,
    CTextarea,
    CInputFile,
} from "@coreui/react"
import { useState, useEffect } from "react";
import { api } from "src/plugins/api";
import swal from "sweetalert";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const EditProperti = () => {
    const token = localStorage.getItem('token');

    const {id} = useParams();

    const [image, setImage] = useState([]);

    const [data, setData] = useState({
        nama_properti: '',
        lokasi: '',
        link_maps: '',
        detail_properti: '',
    })

    const history = useHistory();

    const updateProperti = (event) => {
        event.preventDefault();
        api.put(`/property/${id}`,
        {
            nama_properti: data.nama_properti,
            lokasi: data.lokasi,
            link_maps: data.link_maps,
            detail_properti: data.detail_properti,
        }, {
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        })
        .then(async Response => {
            await swal("good job!", "update properti berhasil!", "success");
            history.push("/user/manageProperti")
        })
        .catch (error => {
            console.log(error);
        })
    }

    useEffect(() => {
        const getData = () => {
            api.get(`/property/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(Response => {
                setData(Response.data.property)
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
            title: `Konfirmasi Edit Profil anda:`,
            text: "anda yakin ingin mengubah informasi properti anda?",
            icon: "warning",
            buttons: true,
            dangerMode: false,
        })
        .then(async (willdelete) => {
            if (willdelete) {
                updateProperti(event)
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
                                    <h2> Halaman Edit Properti </h2>
                                </CCol>
                                <CCol md="2" xs="3" className="text-right">
                                    <CLink to={{pathname: "/user/manageProperti"}}>
                                        <CButton color="danger">Kembali</CButton>
                                    </CLink>
                                </CCol>
                            </CRow>
                        </CCardHeader>

                        <CCardBody>
                            <CForm method="post" onSubmit={(event) => konfirmasiEdit(event)}>
                                {/* tujuan properti */}
                                {/* <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Tujuan Properti</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CSelect
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        tujuan_properti: event.target.value,
                                                    });
                                                }}
                                                value={data.tujuan_properti}
                                            >
                                                <option value="" disabled hidden>
                                                    Tujuan Iklan
                                                </option>
                                                <option value="Jual">Jual</option>
                                                <option value="Sewa">Sewa</option>

                                            </CSelect>
                                        </CCol>
                                    </CInputGroup>
                                </CRow> */}

                                {/* {condition if Jual} */}
                                {/* {data.tujuan_properti === "Jual" && (
                                    <CRow>
                                        <CInputGroup className="mb-3">
                                            <CCol md="2">
                                                <CInputGroupText>Harga Jual</CInputGroupText>
                                            </CCol>
                                            <CCol>
                                                <CInput
                                                    type="text"
                                                    placeholder="Harga Jual Properti anda"
                                                    defaultValue={data.harga_jual}
                                                    onChange={(event) => {
                                                        setData({
                                                            ...data,
                                                            harga_jual: event.target.value,
                                                        });
                                                    }}
                                                ></CInput>
                                            </CCol>
                                        </CInputGroup>
                                    </CRow>
                                )} */}

                                {/* {condition if Sewa} */}
                                {/* {data.tujuan_properti === "Sewa" && (
                                    <CRow>
                                        <CInputGroup className="mb-3">
                                            <CCol md="2">
                                                <CInputGroupText>Harga Sewa</CInputGroupText>
                                            </CCol>
                                            <CCol>
                                                <CInput
                                                    type="text"
                                                    placeholder="Harga Sewa Properti Anda"
                                                    defaultValue={data.harga_sewa}
                                                    onChange={(event) => {
                                                        setData({
                                                            ...data,
                                                            harga_sewa: event.target.value,
                                                        });
                                                    }}
                                                ></CInput>
                                            </CCol>
                                        </CInputGroup>
                                    </CRow>
                                )} */}

                                {/* Kategori Properti */}
                                {/* <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Kategori Properti</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CSelect
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        kategori_properti: event.target.value,
                                                    });
                                                }}
                                                value={data.kategori_properti}
                                            >
                                                <option value="" disabled hidden>
                                                    Kategori Properti
                                                </option>
                                                <option value="Ruko">Ruko</option>
                                                <option value="Apartemen">Apartemen</option>
                                                <option value="Rumah">Rumah</option>
                                                <option value="Lainnya">Lainnya</option>

                                            </CSelect>
                                        </CCol>
                                    </CInputGroup>
                                </CRow> */}

                                 {/* Status */}
                                 {/* <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Status</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CSelect
                                               
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        status: event.target.value,
                                                    });
                                                }}
                                                value={data.status}
                                            >
                                                <option value="Tersedia">Tersedia</option>
                                                <option value="Diminati">Diminati</option>
                                                <option value="Tidak Tersedia">Tidak Tersedia</option>
                                            </CSelect>
                                        </CCol>
                                    </CInputGroup>
                                </CRow> */}

                                {/* Nama Properti */}
                                <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Nama Properti</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CInput
                                                type="text"
                                                placeholder="Nama Properti Anda"
                                                defaultValue={data.nama_properti}
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        nama_properti: event.target.value,
                                                    });
                                                }}
                                            ></CInput>
                                        </CCol>
                                    </CInputGroup>
                                </CRow>

                                {/* Lokasi */}
                                <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Lokasi</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CInput
                                                type="text"
                                                placeholder="Lokasi Properti Anda"
                                                defaultValue={data.lokasi}
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        lokasi: event.target.value,
                                                    });
                                                }}
                                            ></CInput>
                                        </CCol>
                                    </CInputGroup>
                                </CRow>

                                {/* Link Maps */}
                                <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Link Maps</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CInput
                                                type="text"
                                                placeholder="Link Maps Properti Anda"
                                                defaultValue={data.link_maps}
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        link_maps: event.target.value,
                                                    });
                                                }}
                                            ></CInput>
                                        </CCol>
                                    </CInputGroup>
                                </CRow>

                                {/* Luas */}
                                {/* <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Luas Properti</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CInput
                                                type="text"
                                                placeholder="Luas Properti Anda"
                                                defaultValue={data.luas}
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        luas: event.target.value,
                                                    });
                                                }}
                                            ></CInput>
                                        </CCol>
                                    </CInputGroup>
                                </CRow> */}

                                {/* Kamar Tidur */}
                                {/* <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Kamar Tidur</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CSelect
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        kamar_tidur: event.target.value,
                                                    });
                                                }}
                                                value={data.kamar_tidur}
                                            >
                                                <option value="" disabled hidden>
                                                    Jumlah Kamar
                                                </option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </CSelect>
                                        </CCol>
                                    </CInputGroup>
                                </CRow> */}

                                {/* Toilet */}
                                {/* <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Toilet</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CSelect
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        toilet: event.target.value,
                                                    });
                                                }}
                                                value={data.toilet}
                                            >
                                                <option value="" disabled hidden>
                                                    Toilet
                                                </option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </CSelect>
                                        </CCol>
                                    </CInputGroup>
                                </CRow> */}

                                 {/* Detail properti */}
                                 <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CInputGroupText>Detail Properti</CInputGroupText>
                                        </CCol>
                                        <CCol>
                                            <CTextarea
                                                type="text"
                                                placeholder="Luas Properti Anda"
                                                defaultValue={data.detail_properti}
                                                onChange={(event) => {
                                                    setData({
                                                        ...data,
                                                        detail_properti: event.target.value,
                                                    });
                                                }}
                                                value={data.detail_properti}
                                                className="form-control"
                                                rows="5"
                                            ></CTextarea>
                                        </CCol>
                                    </CInputGroup>
                                </CRow>

                                {/* Update image */}
                                {/* <CRow>
                                    <CInputGroup className="mb-3">
                                        <CCol md="2">
                                            <CLabel htmlFor="file-input">Upload Photo</CLabel>
                                        </CCol>
                                        <CCol>
                                            <CInputFile
                                                id="file-input"
                                                name="fileInput"
                                                accept=".png, .jpeg, .jpg"
                                                multiple
                                                onChange={(event) => {
                                                    const files = event.target.files;
                                                    setImage([...image, ...files]);
                                                }}
                                            />
                                        </CCol>

                                    </CInputGroup>
                                </CRow> */}

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
export default EditProperti;