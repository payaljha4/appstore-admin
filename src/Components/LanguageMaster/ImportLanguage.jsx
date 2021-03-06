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
  CLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
const ImportLanguage = () => {
  const [Importlanguage, setImportLanguage] = useState({});
  const fetchData = () => {
   
    const formData = new FormData();
    formData.append("upload_file", Importlanguage.files);
    axios({
      method: "POST",
      url: "http://appstore.infoware.xyz/api/v1/upload-excel-language-master/",
      headers: {
        "content-type": "multipart/form-data",
      },
      data: formData,
    })
    .then((response) => {
      console.log("success:", response);
      alert('Language has been added')
      window.location.href="#/language-master"
      setImportLanguage(response?.data);
      window.location.reload()
    })
    .catch((error) => {
      console.log("Error",error);
      alert('Something Went Wrong')
      window.location.reload()
    });
  };

  const handleChange = (event) => {
    debugger;
    setImportLanguage((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.files[0],
    }));
  };
  return (
    <>
      <CRow>
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>Import Language</CCardHeader>
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
                      class="form-control"
                    />
                    {/* <CLabel htmlFor="file-multiple-input" variant="custom-file">
                      Choose Files...
                    </CLabel> */}
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
              
              <CLink to="/language-master">
              <CButton type="reset" size="sm" color="danger">
                <CIcon name="cil-ban" /> Cancel
              </CButton>
              </CLink>
              <CButton  role="button" class=" btn btn-info">
              <a href="Language-Master.xlsx" download="Language-Master.xlsx">
                Sample CSV
              </a>
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CRow></CRow>
    </>
  );
};

export default ImportLanguage;