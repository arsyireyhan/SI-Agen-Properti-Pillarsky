import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CTextarea,
  CRow,
  CFormGroup,
  CLabel,
  CForm,

} from "@coreui/react";

import { api } from "src/plugins/api";
import swal from "sweetalert";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const HalamanPesan = () => {
    const token = localStorage.getItem("token");

    const { id } = useParams();

    const history = useHistory();

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [broadcast_msg, setBroadcast_msg] = useState("");

    const BroadcastMessage = (event) => {
        event.preventDefault();
        if (!id) {
            console.error("ID is undefined");
            return;
        }

        api.post(`/sendMessageTransaksi/${id}`,{
            broadcast_msg: broadcast_msg,
        },{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(async(Response) => {
            await swal ("Good Job", "Pesan Anda Berhasil Dikirimkan!", "success");
            history.push("/admin/manageTransaksi");
        })
        .catch(error => {
            swal("Pesan Anda Gagal Terkirim")
        })
    }

    const konfirmasiBroadcast = (event) => {
        event.preventDefault();
        swal({
            title: "Konfirmasi Pengiriman pesan!",
            icon: "warning",
            buttons: true,
            dangerMode: false,
        })
        .then(async(willDElete) => {
            if(willDElete) {
                BroadcastMessage(event)
            } else {
                await swal("Pengiriman Pesan Dibatalkan!")
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
        <div>
            <CContainer>
                <CCol>
                    <CCard>
                        <CCardHeader>
                            <h3>Broadcast Pesan</h3>
                        </CCardHeader>

                        <CCardBody>
                            <CForm method="post" onSubmit={(event) => konfirmasiBroadcast(event)}>
                                <CFormGroup row> 
                                    <CCol md="2">
                                        <CLabel htmlFor="textarea-input">Broadcast Pesan</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="10">
                                        <CTextarea
                                        type="text"
                                        onChange={(event) => setBroadcast_msg(event.target.value)}
                                        value={broadcast_msg}
                                        className="form-control"
                                        rows="5"
                                        placeholder="Content..."
                                        />
                                    </CCol>
                                </CFormGroup>
                                <div>
                                    <CButton type="submit" size="sm" color="success" className="btn-primary">
                                        Submit
                                    </CButton>
                                </div>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CContainer>
        </div>
        </>
    );
};

export default HalamanPesan;