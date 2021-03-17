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
  CInputFile,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
const ImportCategory = () => {
  const [Importcategory, setImportCategory] = useState({});
  const fetchData = () => {
    const formData = new FormData();
    formData.append("upload_file", Importcategory.files);
    axios({
      method: "POST",
      url: "http://appstore.infoware.xyz/api/v1/upload-excel-category-master/",
      headers: {
        "content-type": "multipart/form-data",
      },
      data: formData,
    })
      .then((response) => {
        setImportCategory(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    debugger;
    setImportCategory((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.files[0],
    }));
  };
  return (
    <>
      <CRow>
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>Import Category</CCardHeader>
            <CCardBody>
              <CFormGroup
                row
                className="my-0"
                onSubmit={(e) => e.preventDefault()}
              >
                <CCol xs="6">
                  <CFormGroup>
                    <CInputFile
                      id="file-multiple-input"
                      name="files"
                      multiple
                      custom
                      onChange={handleChange}
                    />
                    <CLabel htmlFor="file-multiple-input" variant="custom-file">
                      Choose Files...
                    </CLabel>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
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

export default ImportCategory;