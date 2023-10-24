import Constants from "./Constants";

const Endpoints = {
    CATEGORY_URL: `${Constants.BASE_URL}category`,
    SUB_CATEGORY_URL: `${Constants.BASE_URL}subcategory/`,
    PRODUCT_BY_CAT_ID_URL: `${Constants.BASE_URL}products/cat/`,
    PRODUCT_BY_ID: `${Constants.BASE_URL}products/`,
    REGISTER_URL: `${Constants.BASE_URL}auth/register`,
    LOGIN_URL: `${Constants.BASE_URL}auth/login`
}

export default Endpoints;