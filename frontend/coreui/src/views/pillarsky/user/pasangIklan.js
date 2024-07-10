import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CJumbotron,
  CTextarea,
  CRow,
  CFormGroup,
  CLabel,
  CInputRadio,
  CCardFooter,
  CForm,
  CSelect,
  CInput,
  CFormText,
  CInputFile,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import { api } from "src/plugins/api";
import swal from "sweetalert";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PasangIklan = () => {
  // const [account, setAccount] = useState( userInfo.id_account);
  const [tujuan_properti, setTujuanProperti] = useState("");
  // const [kategori_properti, setKategoriProperti] = useState("");
  const [nama_properti, setNamaProperti] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [link_maps, setLinkMaps] = useState("");
  const [luas, setLuas] = useState("");
  const [kamar_tidur, setKamarTidur] = useState("");
  const [toilet, setToilet] = useState("");
  const [detail_properti, setDetailProperti] = useState("");
  const [harga_jual, setHargaJual] = useState("");
  const [harga_sewa, setHargaSewa] = useState("");
  const [image, setImage] = useState([]);

  const history = useHistory();
  const token = localStorage.getItem("token");
  // const userInfo = JSON.parse(localStorage.getItem('user-info'));
  const userInfoJSON = localStorage.getItem("user-info");
  const accountInfo = parseInt(JSON.parse(localStorage.getItem("id_account")), 10);
  const userInfo = JSON.parse(userInfoJSON);
  const account = userInfo.id_account; //id jalan tapi id_account ga jalan????

  //API
  const DaftarIklan = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("id_account", accountInfo);
    formData.append("tujuan_properti", tujuan_properti);
    // formData.append("kategori_properti", kategori_properti);
    formData.append("nama_properti", nama_properti);
    formData.append("lokasi", lokasi);
    formData.append("link_maps", link_maps);
    formData.append("luas", luas);
    formData.append("kamar_tidur", kamar_tidur);
    formData.append("toilet", toilet);
    formData.append("detail_properti", detail_properti);
    formData.append("harga_jual", harga_jual);
    formData.append("harga_sewa", harga_sewa);

    for (let i = 0; i < image.length; i++) {
      formData.append("image", image[i]);
    }
    
    // store properti
    api
      .post(
        "/property",formData
        ,{
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(async (Response) => {
        await swal(
          "Pengisian Form Iklan Berhasil!, Lanjutkan Pembayaran di Checkout",
          "success"
        );
        history.push("/user/halamanCheckout");
      })
      .catch((error) => {
        swal("Pengisian Form Iklan Gagal!", "warning");
        console.error(error.response); // log the entire response for better debugging
      console.error("Request Data:", formData); // log the request data
      });
  };

  useEffect(() => {
    console.log(accountInfo);
  }, []);

  return (
    <>
      <CContainer fluid>
        <CCol>
          <CCard>
            <CCardHeader>
              <div>
                <h3> Form Pasang Iklan </h3>
              </div>
            </CCardHeader>

            <CCardBody>
              <CForm method="post" onSubmit={(event) => DaftarIklan(event)}>
                {/* Form Tujuan Iklan */}
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="Tujuan">Tujuan</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CSelect
                      onChange={(event) =>
                        setTujuanProperti(event.target.value)
                      }
                      value={tujuan_properti}
                      className="form_control"
                      required
                    >
                      <option value="" disabled hidden>
                        Tujuan Iklan
                      </option>
                      <option value="Jual">Jual</option>
                      <option value="Sewa">Sewa</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                {/* Conditional IF Jual */}
                {tujuan_properti === "Jual" && (
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="text-input">Harga Jual</CLabel>
                    </CCol>
                    <CCol xs="12" md="10">
                      <CInput
                        type="number"
                        onChange={(event) => setHargaJual(event.target.value)}
                        value={harga_jual}
                        className="form-control"
                        placeholder="Rp. "
                      />
                    </CCol>
                  </CFormGroup>
                )}

                {/* Conditional IF Sewa */}
                {tujuan_properti === "Sewa" && (
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="text-input">Harga Sewa</CLabel>
                    </CCol>
                    <CCol xs="12" md="10">
                      <CInput
                        type="number"
                        onChange={(event) => setHargaSewa(event.target.value)}
                        value={harga_sewa}
                        className="form-control"
                        placeholder="Rp. "
                      />
                    </CCol>
                  </CFormGroup>
                )}

                {/* form Kategori Properti */}
                {/* <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="Tujuan">Kateori Properti</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CSelect
                      onChange={(event) =>
                        setKategoriProperti(event.target.value)
                      }
                      value={kategori_properti}
                      className="form_control"
                      required
                    >
                      <option value="" disabled hidden>
                        Tipe Properti
                      </option>
                      <option value="Ruko">Ruko</option>
                      <option value="Apartemen">Apartemen</option>
                      <option value="Rumah">Rumah</option>
                      <option value="Lainnya">Lainnya</option>
                    </CSelect>
                  </CCol>
                </CFormGroup> */}

                {/* form Nama Properti */}
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">Nama Properti</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      type="text"
                      onChange={(event) => setNamaProperti(event.target.value)}
                      value={nama_properti}
                      className="form-control"
                      placeholder="Nama Properti Anda"
                    />
                  </CCol>
                </CFormGroup>

                {/* form lokasi */}
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">Lokasi</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      type="text"
                      onChange={(event) => setLokasi(event.target.value)}
                      value={lokasi}
                      className="form-control"
                      placeholder="Alamat"
                    />
                  </CCol>
                </CFormGroup>

                {/* form Link Gmaps */}
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">Link Google Maps</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      type="text"
                      onChange={(event) => setLinkMaps(event.target.value)}
                      value={link_maps}
                      className="form-control"
                      placeholder="Link/Url"
                    />
                  </CCol>
                </CFormGroup>

                {/* form Luas Bangunan */}
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="text-input">Luas Bangunan</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      type="text"
                      onChange={(event) => setLuas(event.target.value)}
                      value={luas}
                      className="form-control"
                      placeholder="Meter"
                    />
                  </CCol>
                </CFormGroup>

                {/* form Kamar Tidur */}
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="=kamarTidur">Kamar Tidur</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CSelect
                      onChange={(event) => setKamarTidur(event.target.value)}
                      value={kamar_tidur}
                      className="form_control"
                      // required
                    >
                      <option value="" disabled hidden>
                        Jumlah Kamar
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                {/* form Kamar Mandi */}
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="kamarMandi">Toilet</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CSelect
                      onChange={(event) => setToilet(event.target.value)}
                      value={toilet}
                      className="form_control"
                      // required
                    >
                      <option value="" disabled hidden>
                        Jumlah Toilet
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                {/* form Detail */}
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="textarea-input">Detail Properti</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CTextarea
                      type="text"
                      onChange={(event) =>
                        setDetailProperti(event.target.value)
                      }
                      value={detail_properti}
                      className="form-control"
                      rows="5"
                      placeholder="Content..."
                    />
                  </CCol>
                </CFormGroup>

                {/* form Photo */}
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel htmlFor="file-input">Upload Photo</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInputFile
                      id="file_input"
                      name="fileInput"
                      accept=".png, .jpeg, .jpg"
                      multiple
                      onChange={(event) => {
                        const files = event.target.files;
                        setImage([...image, ...files]);
                      }}
                      />
                  </CCol>
                </CFormGroup>

                <CButton
                  type="submit"
                  size="sm"
                  color="success"
                  className="btn-primary"
                >
                  Submit
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CContainer>
    </>
  );
};
export default PasangIklan;
