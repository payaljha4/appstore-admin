import React from "react";
import {Link} from "react-router-dom";
import FilesDemo from "../ImportFiles/ImportFiles";
import "./AppMaster.css";
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
import { useState } from "react";
const AppMasterAdd = () => {
  const [AppData, setAppData] = useState({});
  const fetchData = () => {
    const formingData = new FormData();
    formingData.append("app_id", AppData.appId);
    formingData.append("app_name", AppData.appName);
    formingData.append("age_group", AppData.ageGroup);
    formingData.append("device_type", AppData.deviceType);
    formingData.append("device_os", AppData.deviceOs);
    formingData.append("keywords", AppData.keywords);
    formingData.append("country", AppData.country);
    formingData.append("category", AppData.category);
    formingData.append("sub_category", AppData.subCategory);
    formingData.append("language", AppData.language);
    formingData.append("developed_by", AppData.developedBy);
    formingData.append("app_url", AppData.appUrl);
    formingData.append("app_support", AppData.appSupport);
    formingData.append("short_description", AppData.shortDescription);
    formingData.append("long_description", AppData.longDescription);
    formingData.append("app_icon",AppData.files);
    formingData.append("media_1_url", AppData.media1Url);
    formingData.append("media_2_url", AppData.media2Url);
    formingData.append(" media_3_url", AppData.media3Url);
    axios({
      method: "POST",
      url: "http://appstore.infoware.xyz/api/v1/app-master/",
      headers: {
        // "Content-Type": "application/json",
        "content-type": 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
      },
      data: formingData,
      // {
      //   formingData,
        // app_id:AppData.appId,
        // app_name:AppData.appName,
        // age_group:AppData.ageGroup,
        // device_type:AppData.deviceType,
        // device_os:AppData.deviceOs,
        // keywords:AppData.keywords,
        // sub_category:AppData.subCategory,
        // language:AppData.language,
        // app_url:AppData.appUrl,
        // long_description:AppData.longDescription,
        // short_description:AppData.shortDescription,
        // app_icon:AppData.appIcon,
        // developed_by:AppData.developedBy,
        // app_support:AppData.appSupport,
        // media_1_url:AppData.media1Url,
        // media_2_url:AppData.media2Url,
        // media_3_url:AppData.media3Url,
      //   category:AppData.category,
      //   country:AppData.country
      // },
    })
      .then((response) => {
        setAppData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (event) => {
    setAppData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  let [formData, setformData] = React.useState("");
  const fetchingData = React.useCallback(() => {
    axios({
      method: "GET",
      url: "http://appstore.infoware.xyz/api/v1/category-master/",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setformData({ data: response?.data });
      })
      .catch((error) => {
        console.log(error);
      });
      }, []);
    React.useEffect(() => {
      fetchingData();
    }, [fetchingData]);
    let [formData1, setformData1] = React.useState("");
  const fetchingData1 = React.useCallback(() => {
    axios({
      method: "GET",
      url: "http://appstore.infoware.xyz/api/v1/sub-category-master/",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setformData1({ data: response?.data });
      })
      .catch((error) => {
        console.log(error);
      });
      }, []);
    React.useEffect(() => {
      fetchingData1();
    }, [fetchingData1]);
  
    let [formData2, setformData2] = React.useState("");
    const fetchingData2 = React.useCallback(() => {
      axios({
        method: "GET",
        url: "http://appstore.infoware.xyz/api/v1/os-master/",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => {
          setformData2({ data: response?.data });
        })
        .catch((error) => {
          console.log(error);
        });
        }, []);
      React.useEffect(() => {
        fetchingData2();
      }, [fetchingData2]);
    
      let [formData3, setformData3] = React.useState("");
      const fetchingData3 = React.useCallback(() => {
        axios({
          method: "GET",
          url: "http://appstore.infoware.xyz/api/v1/location-master/",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((response) => {
            setformData3({ data: response?.data });
          })
          .catch((error) => {
            console.log(error);
          });
          }, []);
        React.useEffect(() => {
          fetchingData3();
        }, [fetchingData3]);
      
        let [formData4, setformData4] = React.useState("");
        const fetchingData4 = React.useCallback(() => {
          axios({
            method: "GET",
            url: "http://appstore.infoware.xyz/api/v1/language-master/",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((response) => {
              setformData4({ data: response?.data });
            })
            .catch((error) => {
              console.log(error);
            });
            }, []);
          React.useEffect(() => {
            fetchingData4();
          }, [fetchingData4]);
          
  const handleChange1 = (event) => {
    setAppData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.files[0],
    }));
  };
  return (
    <>
      <CRow>
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>
              Add App Master
            <Link to="/import-app-master" className="link-head">
            <CButton type="submit" size="sm" color="primary"><FilesDemo /></CButton>
            </Link>  
            </CCardHeader>

            <CCardBody onSubmit={(e) => e.preventDefault()}>
              <CFormGroup row className="my-0 ">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>App Id</CLabel>
                    <CInput
                      id="appId"
                      custom
                      name="appId"
                      placeholder="Enter the App Id"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>App Name</CLabel>
                    <CInput
                      id="appName"
                      custom
                      name="appName"
                      placeholder="Enter the App name"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Age Group</CLabel>
                    <CInput
                      id="ageGroup"
                      custom
                      name="ageGroup"
                      placeholder="Age Group"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Device type</CLabel>
                    <CInput
                      id=" deviceType"
                      custom
                      name="deviceType"
                      placeholder="Enter the Device type"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Device OS</CLabel>
                    <CSelect
                      custom
                      name="deviceOs"
                      id="deviceOs"
                      value={formData2.data?.id}
                      onChange={handleChange}
                    >
                      <option value="0">select OS</option>
                      {formData2?.data !== undefined &&
                      formData2?.data !== null &&
                      formData2?.data !== [] &&
                      formData2?.data.length > 0
                        ? formData2?.data.map((os) =>
                            formData2?.data?.id === os.id ? (
                              <option
                                key={os.id}
                                value={os.id}
                                selected
                              >
                                {os.os_name}
                              </option>
                            ) : (
                              <option key={os.id} value={os.id}>
                                {os.os_name}
                              </option>
                            )
                          )
                        : null}
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="keywords">Keywords</CLabel>
                    <CInput
                      id="keywords"
                      placeholder="keywords"
                      custom
                      name="keywords"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel > Country </CLabel>
                    <CSelect
                      custom
                      name="country"
                      id="country"
                      value={formData3.data?.id}
                      onChange={handleChange}
                    >
                      <option value="0">select Country</option>
                      {formData3?.data !== undefined &&
                      formData3?.data !== null &&
                      formData3?.data !== [] &&
                      formData3?.data.length > 0
                        ? formData3?.data.map((country) =>
                            formData3?.data?.id === country.id ? (
                              <option
                                key={country.id}
                                value={country.id}
                                selected
                              >
                                {country.country}
                              </option>
                            ) : (
                              <option key={country.id} value={country.id}>
                                {country.country}
                              </option>
                            )
                          )
                        : null}
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="category">Category</CLabel>
                    <CSelect
                      custom
                      name="category"
                      id="category"
                      value={formData.data?.id}
                      onChange={handleChange}
                    >
                      <option value="0">select Category</option>
                      {formData?.data !== undefined &&
                      formData?.data !== null &&
                      formData?.data !== [] &&
                      formData?.data.length > 0
                        ? formData?.data.map((category) =>
                            formData?.data?.id === category.id ? (
                              <option
                                key={category.id}
                                value={category.id}
                                selected
                              >
                                {category.category_name}
                              </option>
                            ) : (
                              <option key={category.id} value={category.id}>
                                {category.category_name}
                              </option>
                            )
                          )
                        : null}
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>SubCategory</CLabel>
                    <CSelect
                      custom
                      name="subCategory"
                      id="select"
                      value={formData1.data?.id}
                      onChange={handleChange}
                    >
                      <option value="0">select Sub Category</option>
                      {formData1?.data !== undefined &&
                      formData1?.data !== null &&
                      formData1?.data !== [] &&
                      formData1?.data.length > 0
                        ? formData1?.data.map((subcategory) =>
                            formData1?.data?.id === subcategory.id ? (
                              <option
                                key={subcategory.id}
                                value={subcategory.id}
                                selected
                              >
                                {subcategory.sub_category_name}
                              </option>
                            ) : (
                              <option key={subcategory.id} value={subcategory.id}>
                                {subcategory.sub_category_name}
                              </option>
                            )
                          )
                        : null}
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="language">Language</CLabel>
                    <CSelect
                      custom
                      name="language"
                      id="language"
                      value={formData4.data?.id}
                      onChange={handleChange}
                    >
                      <option value="0">select Language</option>
                      {formData4?.data !== undefined &&
                      formData4?.data !== null &&
                      formData4?.data !== [] &&
                      formData4?.data.length > 0
                        ? formData4?.data.map((language) =>
                            formData4?.data?.id === language.id ? (
                              <option
                                key={language.id}
                                value={language.id}
                                selected
                              >
                                {language.language_name}
                              </option>
                            ) : (
                              <option key={language.id} value={language.id}>
                                {language.language_name}
                              </option>
                            )
                          )
                        : null}
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Developed By</CLabel>
                    <CInput
                      id="developedBy"
                      custom
                      name="developedBy"
                      placeholder="developed By"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>App Url</CLabel>
                    <CInput
                      id="appUrl"
                      custom
                      name="appUrl"
                      placeholder="app url"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>App Support</CLabel>
                    <CInput
                      id="appSupport"
                      custom
                      name="appSupport"
                      placeholder="app support"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Long Description</CLabel>
                    <CInput
                      id="longDescription"
                      placeholder="long description"
                      custom
                      name="longDescription"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Short Description</CLabel>
                    <CInput
                      id="shortDescription"
                      custom
                      name="shortDescription"
                      placeholder="short Description"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>App Icon</CLabel>
                      <CInputFile
                      id="file-multiple-input"
                      name="files"
                      multiple
                      custom
                      onChange={handleChange1}
                    />
                    <CLabel htmlFor="file-multiple-input" variant="custom-file">
                      Choose Files...
                    </CLabel>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Media 1 URL</CLabel>
                    <CInput
                      id="media1Url"
                      custom
                      name="media1Url"
                      placeholder="media 1 url"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Media 2 URL</CLabel>
                    <CInput
                      id="media2Url"
                      custom
                      name="media2Url"
                      placeholder="media 2 url"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Media 3 URL</CLabel>
                    <CInput
                      id="media3Url"
                      custom
                      name="media3Url"
                      placeholder="media 3 url"
                      onChange={handleChange}
                    />
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

export default AppMasterAdd;