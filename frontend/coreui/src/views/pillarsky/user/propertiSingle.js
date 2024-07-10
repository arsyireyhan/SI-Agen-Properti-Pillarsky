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
CHeader, CRow, CCarouselControl, CLabel, CButton, CBadge, CLink } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { useEffect, useState } from "react";
import { api } from "src/plugins/api";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import swal from "sweetalert";
import { array } from "prop-types";

const slides = [
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  ];


const PropertiSingle = () => {
    // const image = data.image || []; 

    const token = localStorage.getItem("token");

    const role = localStorage.getItem("role")

    const {id} = useParams();

    const history = useHistory();

    const [data, setData] = useState([]);

    const [favorite, setFavorite] = useState([]);

    const [loading, setLoading] = useState(true);

    const [imageUrl, setImageUrl] = useState([]);

    const id_account = JSON.parse(localStorage.getItem("id_account"))

    const whatsappURL = `https://wa.me/${data.no_hp}`;

    const RedirectWhatsapp = () => {
        window.open(whatsappURL, '_blank', 'noopener,noreferrer');
      };

    const convertBlobToDataURL = (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };

    const fetchImageUrl = async () => {
        if (data.image && Array.isArray(data.image)){
            const urls = await Promise.all(data.image.map(convertBlobToDataURL));
            setImageUrl(urls);
            
        }
    };

    const addFavorite = () => {
        api.post("/favorite", {
            id_property: data.id_property,
            id_account: id_account,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(async (Response) => {
            await swal("good job!", "Item Berhasil Ditambahkan Ke Favorite", "success");
            history.push("/user/halamanFavorit")
        })
        .catch((error) => {
            swal("Item Gagal Diinputkan Ke Favorite", "warning");
        });
    };

    const deleteFavorite = (id_favorite) => {
        api.post(`/deletefavorite`,{
            id: id_favorite,
        },{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(async (Response) => {
            await swal("Successful!", "Item Berhasil Dihapus Dari Katalog Favorite", "success");
            history.push("/user/halamanFavorit")
        })
        .catch((error) => {
            swal("item Gagal Dihapus Dari Favorite", "warning");
        });
    };

    const isFavorite = () => {
        return favorite.some(
            (favorite) => 
            favorite.id_property === data.id_property && favorite.id_account === data.id_account && typeof favorite.id_favorite !== 'undefined'
        );
    };

    const handleFavorite = () => {
        if (!token || token === "") {
            handleGuest();
        } else if (isFavorite()) {
            const favoriteToDelete = favorite.find(
                (fav) => fav.id_property === data.id_property && fav.id_account === data.id_account
            );
            deleteFavorite(favoriteToDelete.id_favorite);
        } else {
            addFavorite();
        }
    };

    const getData = (event) => {
        api.get(`/property/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(Response => {
                setData(Response.data.property)
                setLoading(false)
        })
        .catch(error => {
            console.log(error);
        })
    }

    const getDataFavorite = (event) => {
        api.get('/favorite',{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(Response => {
            setFavorite(Response.data.favorite)
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGuest = () => {
        swal({
          title: `Anda Belum Melakukan Login Pada Website Pillarsky. Mohon untuk melakukan login sebelum melanjutkan`,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then(async (willDelete) => {
          if(willDelete){
            history.push("/login")
          } else {
            await swal ("Lakukan Login Untuk Melanjutkan!");
          }
        })
      }

    useEffect(() => {
        getData();
        getDataFavorite();
    }, [id]);

    const getStatus = (status) => {
        switch (status) {
          case 'Diminati':
            return 'warning'; // Set the color for the "Pending" status
    
          case 'Tersedia':
            return 'success'; // Set the color for the "Sold" status
    
          case 'Tidak Tersedia':
            return 'danger'; // Set the color for the "diminati" status
        }
      };

    return(
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <CContainer fluid>
                        <CCard>
                            <CCardHeader>
                                <CRow>
                                    <CCol md="10">                           
                                        <CLabel>
                                            <h2>{data.nama_properti}</h2>
                                        </CLabel>
                                        <div class="subheading mb-2">
                                            <CBadge color="info" style={{ fontSize: "15px", fontFamily: "sans-serif", marginRight: "10px"}}>                              
                                                {data.tujuan_properti}
                                            </CBadge>
                                            {/* <CBadge color="info" style={{ fontSize: "15px", fontFamily: "sans-serif", marginRight: "10px"}}>                              
                                                {data.kategori_properti}
                                            </CBadge>
                                            <CBadge color={getStatus(data.status)} style={{ fontSize: "15px", fontFamily: "sans-serif", marginRight: "10px"}}>                              
                                                {data.status}
                                            </CBadge> */}
                                        </div>
                                    </CCol>
                                    <CCol md="2" className="d-flex flex-column justify-content-center align-items-center">
                                        {role === 'account' && (
                                            <CLink to={{pathname: "/user/halamanProperti"}}>
                                                <CButton color="danger">Kembali</CButton>
                                            </CLink>
                                        )}
                                        {role === 'admin' && (
                                            <CLink to={{pathname: "/admin/manageTransaksi"}}>
                                                <CButton color="danger">Kembali</CButton>
                                            </CLink>
                                        )}
                                        {/* <CLink to={{pathname: "/user/halamanProperti"}}>
                                            <CButton color="danger">Kembali</CButton>
                                        </CLink> */}
                                    </CCol>
                                </CRow>
                            </CCardHeader>
                            
                            <CCardBody>
                                <CRow>
                                    {/* Img Page */}
                                    <CCol md="12">
                                        {/* <CCarousel controls animate autoSlide={3000}>
                                            <CCarouselInner>
                                                {slides.map((slide, index) => ( //ganti ke slides & slide dari imageurls & url
                                                    <CCarouselItem key={index}>
                                                        <img
                                                            className="d-block w-100"
                                                            src={slide}
                                                            alt={`slide ${index + 1}`}
                                                        />
                                                    </CCarouselItem>
                                                ))}    
                                            </CCarouselInner>
                                            <CCarouselControl direction="prev"/>
                                            <CCarouselControl direction="next"/>
                                        </CCarousel> */}
                                        <CCarousel>
                                            <CCarouselInner>
                                                <CCarouselItem>
                                                    <img
                                                    className="d-block w-100"
                                                    // src={`http://localhost/PILLLAR/backend/public/ImageProperti/${data.image}`} //local path
                                                    src={`https://api.pillarsky.biz.id/ImageProperti/${data.image}`} //hosted path
                                                    alt={``}
                                                    />
                                                </CCarouselItem>
                                            </CCarouselInner>
                                        </CCarousel>
                                    </CCol>

                                    <CCol md="4">
                                        <div style={{ marginTop: "20px"}}>
                                            <CIcon size="xl" name="cil-location-pin" style={{ color: "#2951A3"}}/>
                                            <CLabel  style={{ color: "#2951A3", fontFamily: "sans-serif"}}>
                                                <strong>
                                                  <a href={data.link_maps}target="_blank" style={{color: "#2951A3"}}>Lihat di Maps</a>
                                                </strong>
                                            </CLabel>
                                        </div>

                                    </CCol>
                                    <CCol md="8">
                                        <div style={{ marginRight: "15px"}}>
                                            <div class="row justify-content-lg-end" style={{marginTop: "20px"}}>                                          
                                                <CButton size="md" onClick={handleFavorite} style={{backgroundColor: "#ae0001", color: "#ffffff", fontFamily: "sans-serif"}}>
                                                    {isFavorite() ? "Hapus Favorit" : "Tambah Ke Favorit"}
                                                </CButton>
                                            </div>
                                        </div>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol sm="12">
                                        <div class="row justify-content-between">
                                            {/* Left Content */}
                                            <CCol lg="4" sm="4">
                                                    <h2 class="title-d" style={{ marginBottom: "20px"}}>Summary</h2>
                                                    {/* List Item Summary */}
                                                    <div class="summary-list">
                                                        <li class="d-flex justify-content-between">
                                                            <strong> Harga </strong>
                                                                <span> 
                                                                    {data.tujuan_properti === 'Sewa' ? `Rp. ${data.harga_sewa} / Bulan` : `RP. ${data.harga_jual}`}
                                                                </span>
                                                        </li> 
                                                        <li class="d-flex justify-content-between">
                                                            <strong> alamat </strong>
                                                                <span> {data.lokasi} </span>
                                                        </li> 
                                                        {/* <li class="d-flex justify-content-between">
                                                            <strong> kategori properti </strong>
                                                                <span> {data. kategori_properti} </span>
                                                        </li>  */}
                                                        <li class="d-flex justify-content-between">
                                                            <strong> luas Properti </strong>
                                                                <span> {data. luas} M </span>
                                                        </li> 
                                                        <li class="d-flex justify-content-between">
                                                            <strong> Kamar </strong>
                                                                <span> {data.kamar_tidur} </span>
                                                        </li> 
                                                        <li class="d-flex justify-content-between">
                                                            <strong> Toilet </strong>
                                                                <span> {data.toilet} </span>
                                                        </li> 
                                                    </div>
                                            </CCol>
                                            {/* Right Content */}
                                            <CCol lg="7" sm="5" >
                                                <h2>Deskripsi Properti</h2>
                                                <div class="property-description">
                                                    <p class="description color-text-a" style={{textAlign: "justify"}}>
                                                        {data.detail_properti}
                                                    </p>
                                                    {/* <p class="description color-text-a no-margin">
                                                        <strong> Sample paraf 2 </strong>
                                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget
                                                        malesuada. Quisque velit nisi,
                                                        pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
                                                    </p> */}
                                                </div>
                                                <div class="text-right">
                                                    <CButton color="success" style={{fontSize: "15px"}} onClick={RedirectWhatsapp}>
                                                        Whatsapp
                                                    </CButton>
                                                </div>

                                            </CCol>
                                        </div>
                                    </CCol>
                                </CRow>
                            </CCardBody>
                        </CCard>
                    </CContainer>
                </div>
            )}
        </>
    );
};

export default PropertiSingle

