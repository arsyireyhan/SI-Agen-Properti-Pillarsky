import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CContainer,
  CFormGroup,
  CSelect,
  CRow,
  CLink,
  CPagination,
  CHeader,
  CBadge,
} from "@coreui/react";
import { api } from "src/plugins/api";
import { useHistory } from "react-router-dom";

const slides = [
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
];

// set jumlah item yang ingin ditampilkan pada 1 halaman
const items_per_page = 6;

const HalamanProperti = () => {
  const token = localStorage.getItem("token");

  const history = useHistory();

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(data.length / items_per_page);

  const [selectCategory, setSelectCategory] = useState("0")

  const getData = () => {
    api
      .get("/index-lunas", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((Response) => {
        if (Response.data.success) {
          const dataDescend = Response.data.propertys.sort((a, b) => 
            a.id_property > b.id_property ? -1 : 1
          );
          const filterCategory = selectCategory === "0"
            ? dataDescend
            : dataDescend.filter((property) => 
                property.tujuan_properti === selectCategory
            );

          setData(filterCategory);
          setLoading(false);
        } else {
          console.log("Pengambilan Data Properti Gagal!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, [selectCategory]);

  const handleCategory = (event) => {
    const newCategory = event.target.value;
    setSelectCategory(newCategory);
  };

  // const getStatus = (status) => {
  //   switch (status) {
  //     case 'Diminati':
  //       return 'warning'; // Set the color for the "Pending" status

  //     case 'Tersedia':
  //       return 'success'; // Set the color for the "Sold" status

  //     case 'Tidak Tersedia':
  //       return 'danger'; // Set the color for the "diminati" status
  //   }
  // };

  const itemDisplay = data.slice(
    (currentPage - 1) * items_per_page,
    currentPage * items_per_page
  );

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <CContainer fluid>
            <CCard>
              <CCardHeader>
                <CRow>
                  <CCol sm="3">
                    <div>
                      <h3> Halaman Properti </h3>
                    </div>
                  </CCol>
                  <CCol sm="9">
                    <div className="d-flex justify-content-lg-end">
                      <CFormGroup>
                        <CSelect 
                            custom
                            name="filterProperti"
                            value={selectCategory}
                            onChange={handleCategory}
                            >ph
                          <option value="0" disabled hidden>Tipe Properti</option>
                          <option value="0">All Property</option>
                          <option value="Jual">Jual</option>
                          <option value="Sewa">Sewa</option>
                        </CSelect>
                      </CFormGroup>
                    </div>
                  </CCol>
                </CRow>
              </CCardHeader>

              <CCardBody>
                <CRow>
                  {itemDisplay.map((property) => (
                    <CCol xs="12" md="4" key={property.id_property}>
                      {/* <CCarousel animate autoSlide={3000}>
                        <CCarouselIndicators />
                        <CCarouselInner>
                          {slides.map((slide, index) => (
                            <CCarouselItem key={index}>
                              <img
                                className="d-block w-100"
                                src={slide}
                                alt={`slide ${index + 1}`}
                              />
                            </CCarouselItem>
                          ))}
                        </CCarouselInner>
                        <CCarouselControl direction="prev" />
                        <CCarouselControl direction="next" />
                      </CCarousel> */}
                      <CCarousel>
                        <CCarouselInner>
                          <CCarouselItem>
                            <img
                            className="d-block w-100"
                            src={`http://localhost/PILLLAR/backend/public/ImageProperti/${property.image}`} //local path
                            // src={`https://api.pillarsky.biz.id/ImageProperti/${property.image}`} //hosted path
                            alt={``}
                            />
                          </CCarouselItem> 
                        </CCarouselInner>
                      </CCarousel>

                      <div>
                        <CCard>
                            <CHeader>
                                <CRow>
                                    <CCol md="auto" style={{ marginLeft: "10px" }}>
                                        <h5 id="traffic" className="card-title mb-0">
                                            {property.nama_properti}
                                        </h5>
                                        {/* <div class="subheading mb-1">
                                            <CBadge color={getStatus(property.status)} style={{marginTop: "5px"}}> 
                                                {property.status}
                                            </CBadge>
                                        </div> */}

                                        <div class="subheading mb-1">
                                          {/* condition if jual */}
                                          {property.tujuan_properti === "Jual" && (
                                            <div>                         
                                                RP. {property.harga_jual}
                                            </div>
                                          )}
                                          {/* condition if jual */}
                                          {property.tujuan_properti === "Sewa" && (
                                            <div>
                                                RP. {property.harga_sewa} / Bulan
                                            </div>
                                          )}
                                        </div>
                                        <div className="medium text-muted">
                                            {property.lokasi}
                                        </div>
                                    </CCol>
                                </CRow>
                                <CCol style={{ marginTop: "10px"}}>
                                    <div className="d-flex float-right" style={{ marginTop: "10px" }}>
                                        <CLink to={{ pathname: `/user/propertiSingle/${property.id_property}`}}>
                                            <CButton color="info"> Detail </CButton>
                                        </CLink>
                                    </div>
                                </CCol>
                            </CHeader>

                          <CCardBody style={{ padding: "20px" }}>
                            <CRow style={{ marginTop: "-10px" }}>
                              <CCol>
                                <div style={{ textAlign: "center" }}>
                                  <h6 class="card-info-title">Luas</h6>
                                  <div style={{ marginTop: "20px" }}>
                                    <span style={{ marginTop: "20px" }}>
                                      {property.luas}
                                    </span>
                                  </div>
                                </div>
                              </CCol>
                              <CCol>
                                <div style={{ textAlign: "center" }}>
                                  <h6 class="card-info-title">kamar</h6>
                                  <div style={{ marginTop: "20px" }}>
                                    <span style={{ marginTop: "20px" }}>
                                      {property.kamar_tidur}
                                    </span>
                                  </div>
                                </div>
                              </CCol>
                              <CCol>
                                <div style={{ textAlign: "center" }}>
                                  <h6 class="card-info-title">toilet</h6>
                                  <div style={{ marginTop: "20px" }}>
                                    <span style={{ marginTop: "20px" }}>
                                      {property.toilet}
                                    </span>
                                  </div>
                                </div>
                              </CCol>
                              {/* <CCol>
                                <div>
                                  <h6 class="card-info-title">Garasi</h6>
                                  <div style={{ marginTop: "20px" }}>
                                    <span style={{ marginTop: "20px" }}>
                                      {property.garasi}
                                    </span>
                                  </div>
                                </div>
                              </CCol> */}
                            </CRow>
                          </CCardBody>
                        </CCard>
                      </div>
                    </CCol>
                  ))}
                </CRow>
                {/* Pagination */}
                <CCol md="12">
                  <CPagination
                    activePage={currentPage}
                    align="end"
                    size="md"
                    pages={Math.ceil(data.length / items_per_page)}
                    onActivePageChange={setCurrentPage}
                  />
                </CCol>
              </CCardBody>
            </CCard>
          </CContainer>
        </div>
      )}
    </>
  );
};

export default HalamanProperti;
