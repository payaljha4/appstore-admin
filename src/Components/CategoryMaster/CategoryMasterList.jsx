import React from "react";
import { Link } from "react-router-dom";
import "./CategoryMaster.css";
import MUIDataTable from "mui-datatables";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import axios from "axios";

const CategoryMasterList = () => {
  let [responseData, setResponseData] = React.useState("");
  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: "http://appstore.infoware.xyz/api/v1/category-master/",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setResponseData({ data: response?.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(responseData.data);
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const columns = [
    {
      name: "category_name",
      label: "Category Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Action",
      label: "Action",
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
        // noMatch: responseData?.data
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
            Category Master List
            <Link to="/category-master-add" className="link-head">
              <button class="btn btn-primary btn-sm" type="button">
                Add Category
              </button>
            </Link>
          </CCardHeader>
          <CCardBody>
            <MUIDataTable
              title={"Category List"}
              data={responseData.data}
              columns={columns}
              options={options}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CategoryMasterList;
