import React from "react";
import { 
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormGroup,
    CSelect,
CContainer,
CRow,
CButton,
CDataTable,
CBadge
 } from '@coreui/react'

import usersData from '../../users/UsersData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const fields = ['name','registered', 'role', 'status']

const halamanRiwayat = () => {
    return(
        <>
        <CContainer>
            <CCard>

                <CCardHeader>
                    <CRow>
                        <CCol sm="4">
                            <div style={{paddingLeft: "10px"}}>
                                 <h3> Riwayat Order</h3>
                            </div>
                        </CCol>
                        <CCol sm="8">
                            <div className="row justify-content-end" style={{paddingRight: "15px"}}>
                                <CFormGroup>
                                    <CSelect custom name="filterProperti">
                                        <option value="0">Tipe Properti</option>
                                        <option value="1">Ruko</option>
                                        <option value="2">Apartemen</option>
                                        <option value="3">Rumah</option>
                                    </CSelect>
                                </CFormGroup>
                            </div>
                        </CCol>
                    </CRow>
                </CCardHeader>

                <CCardBody>
                    <CRow>
                        {/* Button Download  (opsional)*/}
                        <CCol sm="12">
                            <div className="row justify-content-end" style={{paddingRight: "15px"}}>
                                <CButton>
                                    Download Riwayat
                                </CButton>
                            </div>
                        </CCol>

                        <CCol>
                            <CCard>
                                <CCardBody>
                                    <CDataTable
                                        items={usersData}
                                        fields={fields}
                                        hover
                                        itemsPerPage={5}
                                        pagination
                                        scopedSlots = {{
                                            'status':
                                              (item)=>(
                                                <td>
                                                  <CBadge color={getBadge(item.status)}>
                                                    {item.status}
                                                  </CBadge>
                                                </td>
                                              )
                                        }}
                                 
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>

                    </CRow>
                </CCardBody>
            </CCard>
        </CContainer>
        </>
    )
}

export default halamanRiwayat