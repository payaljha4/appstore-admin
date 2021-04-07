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
  CLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import { useState } from "react";
const AppMasterAdd = () => {
  const [AppData, setAppData] = useState({});
  const fetchData = () => {
    
    const formingData = new FormData();
    formingData.append("app_id", AppData.app_id);
    formingData.append("app_name", AppData.app_name);
    formingData.append("age_group", AppData.age_group);
    formingData.append("device_type", AppData.device_type);
    formingData.append("device_os", AppData.device_os);
    formingData.append("keywords", AppData.keywords);
    formingData.append("country", AppData.country);
    formingData.append("category", AppData.category);
    formingData.append("sub_category", AppData.sub_category);
    formingData.append("language", AppData.language);
    formingData.append("developed_by", AppData.developed_by);
    formingData.append("app_url", AppData.app_url);
    formingData.append("app_support", AppData.app_support);
    formingData.append("short_description", AppData.short_description);
    formingData.append("long_description", AppData.long_description);
    formingData.append("app_icon",AppData.files);
    formingData.append("media_1_url", AppData.media_1_url);
    formingData.append("media_2_url", AppData.media_2_url);
    formingData.append(" media_3_url", AppData.media_3_url);
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
      console.log("success:", response);
      alert('App has been added')
      window.location.href="#/app-master"
      setAppData(response?.data);
      window.location.reload()
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
      url: "http://appstore.infoware.xyz/api/v1/app-master/",
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
    setAppData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const sameName = () => {
    var sameAppName = responseData.data
      .filter((item) => item.app_name === AppData.app_name)
      .map((item) => item.app_name);
    debugger;
    console.log(sameAppName);
    if (sameAppName[0] === AppData.app_name) {
      alert("App Name is Already Added");
      window.location.reload();
    } else fetchData();
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
          url: "http://appstore.infoware.xyz/api/v1/country-master/",
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
          
            </CCardHeader>

            <CCardBody onSubmit={(e) => e.preventDefault()}>
              <CFormGroup row className="my-0 ">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>App Id</CLabel>
                    <CInput
                      id="appId"
                      custom
                      name="app_id"
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
                      name="app_name"
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
                      name="age_group"
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
                      name="device_type"
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
                      name="device_os"
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
                                {country.country_name}
                              </option>
                            ) : (
                              <option key={country.id} value={country.id}>
                                {country.country_name}
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
                      name="sub_category"
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
                      id="developed_by"
                      custom
                      name="developed_by"
                      placeholder="developed By"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>App Url</CLabel>
                    <CInput
                      id="app_url"
                      custom
                      name="app_url"
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
                      id="app_support"
                      custom
                      name="app_support"
                      placeholder="app support"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Long Description</CLabel>
                    <CInput
                      id="long_description"
                      placeholder="long description"
                      custom
                      name="long_description"
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
                      id="short_description"
                      custom
                      name="short_description"
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
                      class="form-control"
                    />
                    
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              
              <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Media 1 URL</CLabel>
                    <CInput
                      id="media_1_url"
                      custom
                      name="media_1_url"
                      placeholder="media 1 url"
                      onChange={handleChange}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel>Media 2 URL</CLabel>
                    <CInput
                      id="media_2_url"
                      custom
                      name="media_2_url"
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
                      id="media_3_url"
                      custom
                      name="media_3_url"
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
                onClick={() => {
                  sameName();
                }}
              >
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
             
              <CLink to="/app-master">
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

export default AppMasterAdd;