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
  CLink
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import {Link} from 'react-router-dom';
const CountryMasterAdd = () => {
  const [countryAdd, setCountryAdd] = useState({});
  const fetchData = () => {
    
    console.log(countryAdd);
    const formingData = new FormData();
    formingData.append("country_name", countryAdd.countryName);
    formingData.append("status",  countryAdd.status);
    axios({
      method: "POST",
      url: "http://appstore.infoware.xyz/api/v1/country-master/",
      headers: {
        "content-type": 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
      },
      data:formingData,
    })
    .then((response) => {
      console.log("success:", response);
      alert('Country has been added')
      window.location.href="#/country-master"
      setCountryAdd(response?.data);
    })
    .catch((error) => {
      console.log("Error",error);
      alert('Something Went Wrong')
      window.location.reload()
    });
  };

  let [responseData, setResponseData] = React.useState("");
  const listOfdata = React.useCallback(() => {
    axios({
      method: "GET",
      url: "http://appstore.infoware.xyz/api/v1/country-master/",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        debugger;
        setResponseData({ data: response?.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  React.useEffect(() => {
    listOfdata();
  }, [listOfdata]);

  const handleChange = (event) => {
    setCountryAdd((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const sameName = () => {
    var sameCountryName = responseData.data
      .filter((item) => item.country_name === countryAdd.countryName)
      .map((item) => item.country_name);
    debugger;
    console.log(sameCountryName);
    if (sameCountryName[0] === countryAdd.countryName) {
      alert("Country Name is Already Added");
      window.location.reload();
    } else fetchData();
  };

  return (
    <>
      <CRow>
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>
              Add Country Master
              
            </CCardHeader>
            <CCardBody>
              <CFormGroup
                row
                className="my-0"
                onSubmit={(e) => e.preventDefault()}
              >
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Country Name</CLabel>
                    <CInput
                      custom
                      name="countryName"
                      id="countryName"
                      placeholder="Enter the Country Name"
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
                onClick={() => {
                  sameName();
                }}
              >
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
              
              <CLink to="/country-master">
              <CButton type="reset" size="sm" color="danger">
                <CIcon name="cil-ban" /> Cancel
              </CButton>
              </CLink>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CRow></CRow>
    </>
  );
};

export default CountryMasterAdd;