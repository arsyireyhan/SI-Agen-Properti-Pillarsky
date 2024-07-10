import React from "react";
import {
  CCard,
  CCardHeader,
  CCol,
  CLink,
  CButton,
  CFormGroup,
  CSelect,
  CRow,
  CCardBody,
  CContainer,
  CCardGroup,
  CLabel,
  CListGroup,
  CListGroupItem,
  CInputFile,
  CForm,
  CBadge,
  CCollapse,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { api } from "src/plugins/api";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";


const HalamanCheckout = () => {

  const token = localStorage.getItem("token");

  const {id} = useParams();

  const history = useHistory();

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [accordion, setAccordion] = useState(1)

  const [image, setImage] = useState([]);

  const id_account = JSON.parse(localStorage.getItem("id_account"))

  const getData = (event) => {
      api.get(`/transaksi_iklan/${id}`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      })
      .then(Response => {
              setData(Response.data.transaksi_iklan)
              setLoading(false)
      })
      .catch(error => {
          console.log(error);
      })
  }

  const uploadPembayaran = (event) => {
    event.preventDefault();
    const formData = new FormData();
    
    for(let i = 0; i<image.length; i++){
      formData.append("image", image[i]);
    }

    api.post(`/transaksi_iklan/${id}`,formData,{
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then(async(Response) => {
      await swal(
        "Success", "Bukti Pembayaran Anda Berhasil Diinputkan!, Mohon Menunggu Validasi Dari Admin!","success"
      );
      history.push("/user/manageProperti");
    })
    .catch((error) => {
      swal("Bukti Pembayaran Anda Gagal Diinputkan!")
    });
  };

  const getStatus = (status) => {
    switch (status) {
      case 'Menunggu Pembayaran':
        return 'warning'; // Set the color for the "Pending" status

      case 'Diproses Verifikasi':
        return 'warning'; // Set the color for the "Pending" status

      case 'Lunas':
        return 'success'; // Set the color for the "Sold" status

      case 'Tidak Valid':
        return 'danger'; // Set the color for the "diminati" status
    }
  };

  useEffect(() => {
      getData();
  }, [id]);


  
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="c-default-layout flex-row align-items-center">
          <CContainer fluid>
            <CRow className="justify-content-center">
              <CCol md="8">
                <CCard>
                  <CCardHeader>
                    <CRow>
                      <CCol md="10">
                        <CLabel>
                          <h3> Detail Pemasangan Iklan</h3>
                        </CLabel>
                      </CCol>
                      <CCol
                        md="2"
                        className="d-flex flex-column justify-content-center align-items-center"
                      >
                        <CLink to={{ pathname: "/user/manageProperti" }}>
                          <CButton color="danger">Kembali</CButton>
                        </CLink>
                      </CCol>
                    </CRow>
                  </CCardHeader>
                  <CCardBody>
                    {/* <CRow>
                      <CCol sm="12">
                        <div class="row justify-content-between">
                          <CCol lg="6">
                            <div class="summary-list">
                              <li class="d-flex justify-content-between">
                                <strong> Harga </strong>
                                <span>harga</span>
                              </li>
                              <li class="d-flex justify-content-between">
                                <strong> alamat </strong>
                                <span> lokasi</span>
                              </li>
                              <li class="d-flex justify-content-between">
                                <strong> kategori properti </strong>
                                <span> kategori </span>
                              </li>
                              <li class="d-flex justify-content-between">
                                <strong> luas Properti </strong>
                                <span> luas </span>
                              </li>
                              <li class="d-flex justify-content-between">
                                <strong> Kamar </strong>
                                <span> kamar </span>
                              </li>
                              <li class="d-flex justify-content-between">
                                <strong> Toilet </strong>
                                <span> toilet </span>
                              </li>
                            </div>
                          </CCol>
                        </div>
                      </CCol>
                    </CRow> */}
                    <CListGroup flush>
                      <CListGroupItem className="d-flex justify-content-between align-items-center">
                        <strong> id transaksi </strong>
                        <span> {data.id_transaksi_iklan} </span>
                      </CListGroupItem>
                      <CListGroupItem className="d-flex justify-content-between align-items-center">
                        <strong> account </strong>
                        <span> {data.nama_lengkap} </span>
                      </CListGroupItem>
                      {/* <CListGroupItem className="d-flex justify-content-between align-items-center">
                        <strong> bundle </strong>
                        <span> .... </span>
                      </CListGroupItem> */}
                      <CListGroupItem className="d-flex justify-content-between align-items-center">
                        <strong> nama properti </strong>
                        <span> {data.nama_properti} </span>
                      </CListGroupItem>
                      <CListGroupItem className="d-flex justify-content-between align-items-center">
                        <strong> total pembayaran </strong>
                        <span> Rp 15,000.00 </span>
                      </CListGroupItem>
                      <CListGroupItem className="d-flex justify-content-between align-items-center">
                        <strong> status pembayaran </strong>
                        <CBadge color={getStatus(data.status)}>
                          {data.status}
                        </CBadge>
                      </CListGroupItem>
                    </CListGroup>
                  </CCardBody>
                </CCard>

                <CCard>
                  <CCardBody>
                    <div id="accordion">
                      <CCard>
                        <CCardHeader>
                          <CButton 
                            block
                            className="text-left m-0 p-0"
                            onClick={() => setAccordion(accordion === 0 ? null : 0)}
                            >
                            <h6 style={{ fontWeight: 'bold'}}> Langkah Pembayaran </h6>
                          </CButton>
                        </CCardHeader>
                        <CCollapse show={accordion === 0}>
                          <CCardBody>
                            metode pembayaran yang dapat dilakukan dengan mentransfer menuju rekening berikut: <br/>
                            Bank BCA: 0712837475 a/n Arsyi Reyhan Ramadhan <br/>
                            Bank BRI: 0829374758 a/n Arsyi Reyhan Ramadhan <br/>
                            QR Code: 081236183999 a/n Arsyireyhan <br/>
                            mohon upload bukti pembayaran di halaman ini. Terimakasih.
                          </CCardBody>
                        </CCollapse>
                      </CCard>
                    </div>

                    <CForm method="post" onSubmit={(event) => uploadPembayaran(event)}>
                      <CFormGroup row className="d-flex justify-content-between align-items-center">
                        <CCol md="9">
                          <strong>Upload Bukti Pembayaran</strong>
                        </CCol>
                        <CCol md="3">
                          <CInputFile 
                            id="file_input"
                            name="fileInput" 
                            multiple
                            accept=".png, .jpeg, .jpg"
                            onChange={(event) => {
                              const files = event.target.files;
                              setImage([...image, ...files]);
                            }}
                            />  
                        </CCol>  
                      </CFormGroup>
                      <div style={{ display: 'flex', justifyContent: 'flex-start'}}>
                        <CButton
                          type="submit"
                          size="sm"
                          color="success"
                          className="btn-primary"
                        >Submit</CButton>
                      </div>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      )}
      
    </>
    
  );
};

export default HalamanCheckout;
