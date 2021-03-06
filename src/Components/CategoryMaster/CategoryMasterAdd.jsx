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
  CLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";

const CategoryMasterAdd = () => {
  const [categoryAdd, setCategoryAdd] = useState({});

  const fetchData = () => {
    console.log(categoryAdd);
    // return
    const formingData = new FormData();
    formingData.append("category_name", categoryAdd.categoryName);
    formingData.append("status", categoryAdd.status);
    axios
      .post("http://appstore.infoware.xyz/api/v1/category-master/", formingData)
      .then((response) => {
        console.log("success:", response);
        alert("Category has been added");
        window.location.href = "#/category-master";
        setCategoryAdd(response?.data);
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Something Went Wrong");
        window.location.reload();
      });
  };

  let [responseData, setResponseData] = React.useState("");
  const listOfdata = React.useCallback(() => {
    axios({
      method: "GET",
      url: "http://appstore.infoware.xyz/api/v1/category-master/",
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
    setCategoryAdd((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const sameName = () => {
    var sameCategoryName = responseData.data
      .filter((item) => item.category_name === categoryAdd.categoryName)
      .map((item) => item.category_name);
    debugger;
    console.log(sameCategoryName);
    if (sameCategoryName[0] === categoryAdd.categoryName) {
      alert("Category Name is Already Added");
      window.location.reload();
    } else fetchData();
  };

  return (
    <>
      <CRow>
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>Add Category Master</CCardHeader>
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
                      // customname="categoryName"
                      name="categoryName"
                      id="categoryName"
                      placeholder="Enter the Category Name"
                      onChange={handleChange}
                      required
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
                      <option>Select Status</option>
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

              <CLink to="/category-master">
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

export default CategoryMasterAdd;