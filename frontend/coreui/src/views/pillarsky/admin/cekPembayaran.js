import React from "react";
import { 
CCard,
CCardBody, 
CCardHeader, 
CCarousel,
CCarouselItem, 
CCarouselInner, 
CCol, 
CContainer, 
CListGroup,
CListGroupItem,
CHeader, CRow, CCarouselControl, CLabel, CButton, CBadge, CLink, CCardFooter, CCardText } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { useEffect, useState } from "react";
import { api } from "src/plugins/api";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import swal from "sweetalert";
import { array } from "prop-types";


const CekPembayaran = () => {
    const token = localStorage.getItem("token");

    const {id} = useParams();

    const history = useHistory();

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState([]);

    const validatePembayaran = (event) => {
        swal({
            title: "warning",
            text: "Anda Yakin Ingin Memverifikasi Pembayaran pada Transaksi Ini?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then(async (willDelete) => {
            if (willDelete) {
                api.post(`/editStatusPembayaranLunas/${id}`,{}, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                })
                .then(async response => {
                    await swal("Success", "Status Pembayaran Berhasil Diverifikasi!", "success");
                    history.push("/admin/manageTransaksi");
                    window.location.reload();
                })
                .catch(error => {
                    swal("Oops", "Status Pembayaran Gagal Diverifikasi", "warning");
                })
            } else {
                await swal("Verifikasi Pembayaran Dibatalkan!");
            }
        });
    }

    const getData = (event) => {
        api.get(`cekPembayaran/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(Response => {
            setData(Response.data.Pembayaran)
            setLoading(false)
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        getData();
    }, [id]);

    return(
        <>
            <CContainer fluid>
                <CCard>
                    <CCardHeader>
                        <CRow>
                            <CCol md="10">                           
                                <CLabel>
                                    <h4>{data.nama_properti}</h4>
                                </CLabel>
                            </CCol>
                            <CCol md="2" className="d-flex flex-column justify-content-center align-items-center">
                                <CLink to={{pathname: "/admin/manageTransaksi"}}>
                                    <CButton color="danger">Kembali</CButton>
                                </CLink>
                            </CCol>
                        </CRow>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md="12">
                                <CCarousel>
                                    <CCarouselItem>
                                        <img 
                                        className="d-block w-100"
                                        // src={`http://localhost/PILLLAR/backend/public/BuktiPembayaran/${data.image}`} //local path
                                        src={`https://api.pillarsky.biz.id/BuktiPembayaran/${data.image}`} //hosted path
                                        />
                                    </CCarouselItem>
                                </CCarousel>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
                {/* Validation Button */}
                <CButton color="primary" block onClick={validatePembayaran}>
                    Validate Pembayaran
                </CButton>

            </CContainer>
        </>
    );

};

export default CekPembayaran