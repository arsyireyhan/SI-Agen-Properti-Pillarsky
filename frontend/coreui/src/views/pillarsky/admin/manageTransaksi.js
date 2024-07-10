import React from "react";
import {
    CLink,
    CCard,
    CCardBody,
    CCardHeader,
    CDataTable,
    CCol,
    CRow,
    CTooltip,
    CButton,
    CInput,
    CInputGroup,
    CInputGroupAppend,
    CContainer,
    CBadge,
} from "@coreui/react";
import { api } from "src/plugins/api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import swal from 'sweetalert';
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const ManageTransaksi = () => {
    const token = localStorage.getItem("token");

    const history = useHistory();

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

    const [selectCategory, setSelectCategory] = useState("0")

    const id_account = JSON.parse(localStorage.getItem("id_account"))


    const getData = () => {
        api.get( '/transaksi_iklan',{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((Response) => {
            if (Response.data.success){
                const dataDescend = Response.data.transaksi.sort((a,b) => 
                    a.id_transaksi_iklan > b.id_transaksi_iklan ? -1 : 1
                );
                const filterStatus = selectCategory === "0"
                ? dataDescend
                : dataDescend.filter((transaksi) =>
                    transaksi.status === selectCategory
                );

                // const filterAccount = filterStatus.filter((transaksi) => 
                //     transaksi.id_account === id_account
                // );

                setData(filterStatus);
                setLoading(false);
            } else {
                console.log("pengambilan Data Gagal!");
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    const deleteProperti = (id, name) => {
        swal({
            title: `Anda Yakin Ingin Menghapus Properti ${name}?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then(async (willDelete) => {
            if(willDelete){
                api.post("/delete-properti", {
                    id: id
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then(async (response) => {
                    await swal({ icon: "success", text: "properti Berhasil Dihapus"});
                    window.location.reload();
                });
            } else {
                await swal("Delete Properti Dibatalkan!");
                window.location.reload();
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getData()
    }, []);

    const handleCategory = (event) => {
        const newCategory = event.target.value;
        setSelectCategory(newCategory)
    };

    const getStatus = (status) => {
        switch (status) {
            case 'Menunggu Pembayaran':
            return 'warning'; // Set the color for the "Pending" status

            case 'Lunas':
            return 'success'; // Set the color for the "Sold" status
        
            case 'Tidak Tersedia':
            return 'danger'; // Set the color for the "diminati" status

            default:
            return 'secondary';
        }
    };

    return(
        <>
            {loading ? (
                <h1>Loading...</h1>
            )  : (
                <div>
                    <CContainer fluid>
                        <CCard>
                            <CCardHeader>
                                <CRow>
                                    <CCol md="10">
                                        <h2>Manage Transaksi</h2>
                                    </CCol>
                                    <CCol md="2" className="d-flex flex-column justify-content-center align-items-center">
                                        <CLink to={{pathname: "/admin/dashboardAdmin"}}>
                                            <CButton color="danger">Kembali</CButton>
                                        </CLink>
                                    </CCol>
                                </CRow>
                            </CCardHeader>

                            <CCardBody>
                                {
                                    data == null ?
                                    <div>
                                        data tidak ditemukan
                                    </div>
                                    :
                                    <CDataTable
                                        items={data}
                                        fields={[
                                            {key: "No"},
                                            {key: "nama_properti"},
                                            {key: "pemilik"},
                                            {key: "status"},
                                            {key: "action"},
                                        ]}
                                        hover
                                        size="sm"
                                        itemsPerPage={5}
                                        pagination
                                        scopedSlots={{
                                            No: (item, i) => <td>{i + 1}</td>,
                                            nama_properti: (item) => <td>{item.nama_properti}</td>,
                                            pemilik: (item) => <td>{item.nama_lengkap}</td>,
                                            'status':
                                                (item)=>(
                                                    <td>
                                                        <CBadge color={getStatus(item.status)}>
                                                            {item.status}
                                                        </CBadge>
                                                    </td>
                                                ),
                                            'action':
                                                    (item)=>(
                                                        <td>
                                                            <CTooltip content="Detail Properti" placement="top">
                                                                <CLink className="card-header-action" to={{ pathname:`/admin/propertiSingle/${item.id_property}`}}>
                                                                    <CIcon content={freeSet.cilNewspaper}/>
                                                                </CLink>
                                                            </CTooltip>
                                                            <CTooltip content="Kirim Pesan" placement="top">
                                                                <CLink className="card-header-action" to={{ pathname:`/admin/halamanPesan/${item.id_transaksi_iklan}`}}>
                                                                    <CIcon content={freeSet.cilBullhorn}/>
                                                                </CLink>
                                                            </CTooltip>
                                                            {/* <CTooltip content="disable properti" placement="top">
                                                                <CLink className="card-header-action">
                                                                    <CIcon content={freeSet.cilTrash} onClick={(event) => deleteProperti(item.id_property, item.nama_properti)}/>
                                                                </CLink>
                                                            </CTooltip> */}
                                                            <CTooltip content="Ubah Status Pembayaran" placement="top">
                                                                <CLink className="card-header-action" to={{ pathname:`/admin/cekPembayaran/${item.id_transaksi_iklan}`}}>
                                                                    <CIcon content={freeSet.cilBank}/>
                                                                </CLink>
                                                            </CTooltip>
                                                        </td>
                                                    ),

                                        }}
                                    />
                                        
                                }
                            </CCardBody>

                        </CCard>
                    </CContainer>
                </div>  
            )}

        </>
    )

}

export default ManageTransaksi;