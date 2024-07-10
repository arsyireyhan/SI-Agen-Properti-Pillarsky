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
    CPopover,
} from "@coreui/react";
import { api } from "src/plugins/api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import swal from 'sweetalert';
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const ManageProperti = () => {
    const token = localStorage.getItem("token");

    const history = useHistory();

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

    const [selectCategory, setSelectCategory] = useState("0")

    const [isTriggered, setIsTriggered] = useState(false);

    const id_account = JSON.parse(localStorage.getItem("id_account"))


    const getData = () => {
        api.get( '/property',{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((Response) => {
            if (Response.data.success){
                const dataDescend = Response.data.propertys.sort((a,b) => 
                    a.id_property > b.id_property ? -1 : 1
                );
                const filterCategory = selectCategory === "0"
                ? dataDescend
                : dataDescend.filter((propertys) =>
                    propertys.tujuan_properti === selectCategory
                );

                const filterAccount = filterCategory.filter((propertys) => 
                    propertys.id_account === id_account
                );

                setData(filterAccount);
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

    const handleVisibleChange = (visible) => {
        setIsTriggered(visible);
      };

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

            default:
            return 'secondary';
        }
    };

    return(
        <>
            <div>
                <CContainer fluid>
                    <CCard>
                        <CCardHeader>
                            <CRow>
                                <CCol md="10">
                                    <h2>Manage Properti</h2>
                                </CCol>
                                <CCol md="2" className="d-flex flex-column justify-content-center align-items-center">
                                    <CLink to={{pathname: "/user/dashboardUser"}}>
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
                                        {key: "tujuan_properti"},
                                        // {key: "kategori_properti"},
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
                                        tujuan_properti: (item) => <td>{item.tujuan_properti}</td>,
                                        // kategori_properti: (item) => <td>{item.kategori_properti}</td>,
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
                                                            <CLink className="card-header-action" to={{ pathname:`/user/propertiSingle/${item.id_property}`}}>
                                                                <CIcon content={freeSet.cilNewspaper}/>
                                                            </CLink>
                                                        </CTooltip>
                                                        <CTooltip content="Edit Properti" placement="top">
                                                            <CLink className="card-header-action" to={{ pathname:`/user/editProperti/${item.id_property}`}}>
                                                                <CIcon content={freeSet.cilSettings}/>
                                                            </CLink>
                                                        </CTooltip>
                                                        {item.status !== 'Lunas' && (
                                                            <CTooltip content="Hapus Properti" placement="top">
                                                                <CLink className="card-header-action">
                                                                    <CIcon content={freeSet.cilTrash} onClick={(event) => deleteProperti(item.id_property, item.nama_properti)}/>
                                                                </CLink>
                                                            </CTooltip>
                                                        )}
                                                        <CTooltip content="Cek Pembayaran" placement="top">
                                                            <CLink className="card-header-action" to={{ pathname:`/user/halamanCheckout/${item.id_transaksi_iklan}`}}>
                                                                <CIcon content={freeSet.cilBank}/>
                                                            </CLink>
                                                        </CTooltip>
                                                        <CPopover 
                                                            header="Notifikasi"
                                                            content={`Notifikasi: ${item.broadcast_msg}`}
                                                            interactive={true} 
                                                            placement="right"
                                                            trigger="click"
                                                            visible={isTriggered}
                                                            onVisibleChange={handleVisibleChange}>
                                                                <div>
                                                                    <CIcon content={freeSet.cilBell}/>
                                                                    {item.broadcast_msg !== null && (
                                                                        <CBadge shape="pill" color="danger">1</CBadge>
                                                                    )}
                                                                </div>
                                                        </CPopover>
                                                    </td>
                                                ),
                                }}
                                />
                                    
                            }
                        </CCardBody>

                    </CCard>
                </CContainer>
            </div>
        </>
    )

}

export default ManageProperti;