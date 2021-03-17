import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CCardFooter,
  CButton,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import {Link} from 'react-router-dom';
const CategoryMasterAdd = () => {
  const [categoryAdd, setCategoryAdd] = useState({});
  const fetchData = () => {
    console.log(categoryAdd);
    const formingData = new FormData();
    formingData.append("category_name", categoryAdd.categoryName);
    formingData.append("status",  categoryAdd.status);
    axios({
      method: "POST",
      url: "http://appstore.infoware.xyz/api/v1/category-master/",
      headers: {
        "content-type": 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
      },
      data:formingData,
    })
      .then((response) => {
        setCategoryAdd(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setCategoryAdd((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <>
      <CRow>
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>
              Add Category Master
              <Link>
              <CButton to="/import-category" type="submit" size="sm" color="primary"> 
              Import
              </CButton>
              </Link>
            </CCardHeader>
            <CCardBody>
              <CFormGroup
                row
                className="my-0"
                onSubmit={(e) => e.preventDefault()}
              >
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Category Name</CLabel>
                    <CInput
                      custom
                      name="categoryName"
                      id="categoryName"
                      placeholder="Enter the Category Name"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    {/* <CLabel >Category Id</CLabel>
                    <CInput id="categoryId" placeholder="Enter your city"/> */}
                    <CLabel htmlFor="city">Status</CLabel>
                    <CSelect
                      custom
                      name="status"
                      id="status"
                      onChange={handleChange}
                    >
                       <option >Select Status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              {/* <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="file-input">Upload Image</CLabel>
                    <CInputFile id="file-input" name="file-input" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="city">Status</CLabel>
                    <CSelect custom name="status" id="status"  onChange={handleChange}>
                      <option value="1">Active</option>
                      <option value="2`">Inactive</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup> */}
            </CCardBody>
            <CCardFooter>
              <CButton
                type="submit"
                size="sm"
                color="primary"
                onClick={() => fetchData()}
              >
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
              <CButton type="reset" size="sm" color="danger">
                <CIcon name="cil-ban" /> Cancel
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CRow></CRow>
    </>
  );
};

export default CategoryMasterAdd;