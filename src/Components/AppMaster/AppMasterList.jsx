import React, { useState,useEffect} from 'react';
import './AppMaster.css';
import {Link} from "react-router-dom";
import axios from'axios';
import MUIDataTable from "mui-datatables";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'

const AppMasterList = () => {
  let [responseData, setResponseData] = React.useState('');
  const fetchData = React.useCallback(() => {
    axios({
     method: "GET",
      url: "http://appstore.infoware.xyz/api/v1/app-master/",
      headers: {
        "content-type": "application/json",
      }, 
    })
    .then((response) => {
      debugger
      setResponseData({data: response?.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const columns = [
    {
      name: "id",
      label: "App Id",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "app_name",
      label: "App Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "age_group",
      label: "Age Group",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "device_type",
      label: "Device Type",
      options: {
        filter: true,
        sort: true,
      },
    },
   
    {
      name: "keywords",
      label: "Keywords",
      options: {
        filter: true,
        sort: true,
      },
    },
    
    {
      name: "developed_by",
      label: "Developed By",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "app_url",
      label: "App Url",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "app_support",
      label: "App Support",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "short_description",
      label: "Short Description",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "long_description",
      label: "Long Description",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "app_icon",
      label: "App Icon",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "media_1_url",
      label: "Media 1 URL",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "media_2_url",
      label: "Media 2 URL",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "media_3_url",
      label: "Media 3 URL",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];
  const options = {
    filterType: "dropdown",
    viewColumns: false,
    print: false,
    download: true,
    selectableRows: "none",
    textLabels: {
      body: {
        // noMatch: this.state.isSaving
        //   ? "Loading data..!"
        //   : "Sorry, No Category Found",
        toolTip: "Sort",
        columnHeaderTooltip: (column) => `Sort for ${column.label}`,
      },
    },
  };
    return (
        <CRow>
        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
             App Master List
             <Link to="/app-master-add" className="link-head">
             <button class="btn btn-primary btn-sm" type="button">Add App</button>
             </Link>
            </CCardHeader>
            <CCardBody>
            <MUIDataTable
            className="mui_table_css"
              title={"App List"}
              data={responseData.data}
              columns={columns}
              options={options}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
}

export default AppMasterList;