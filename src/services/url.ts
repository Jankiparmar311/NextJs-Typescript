//Authentication
export const LOGIN = "/Authentication/LoginUser";
export const LOGOUT = "/Authentication/Logout";
export const VERIFY_AUTH = "/Authentication/verify-authentication";
export const RESEND_AUTH = "/Authentication/resend-authentication";
export const FORGOT_PASSWORD = "/Authentication/ForgotPassword";
export const RESET_PASSWORD = "/Authentication/ResetPassword";
export const CHANGE_PASSWORD = "/Authentication/ChangePassword";

//Jobs
export const LIST_ALL_JOBS = "/Job/GetAllJobList";
export const FETCH_ALL_JOBS_MASTER_DATA = "/Job/GetAllMasterDataForJob";
export const GET_JOBS_BY_ID = "/Job/GetJobById";
export const FETCH_DELIVERY_NOTE_BY_JOBS =
  "/Job/GetAllDeliveryNoteDetailsByJobId";
export const UPSERT_JOB = "/Job/UpsertJob";
export const CANCEL_JOB = "/Job/CancelJob";
export const GET_COMPLETE_SHOP_DETAILS = "/Job/GetCompleteShopDetails";
export const FETCH_JOB_TASK_PROGRESS = "/Job/GetEngineerTaskProgress";
export const RESCHEDULE_JOB = "/Job/RescheduleJob";
export const GET_TASK_DETAILS_BY_JOB = "/Job/GetEngineerAdditionalTaskByJobId";
export const GET_TASK_DETAILS_TEMPLATE = "/Task/GetAllTaskDetailsByJobId";
export const IMPORT_JOB = "/Job/ImportJob";
export const GET_ACTIVITY_LOGS_BY_JOB_ID = "/Job/GetActivityLogsByJobId";
export const EXPORT_JOBS_CARD_PDF = "/Job/GenerateJobCardPDF";
export const GET_CUSTOMERS_FEEDBACK = "/Job/GetCustomerFeedback";
export const FETCH_ACTIVITY_AND_EVENT_LOGS =
  "/POS/GetCombinedActivityAndEventLogsAsync";
export const GET_POS_EVENT_LOGS_ASYNC = "/POS/GetPOSEventLogsAsync";
//Notes
export const GET_ALL_NOTES = "/job/GetJobCardNotes";
export const UPSERT_JOB_CARD_NOTE = "/job/UpsertJobCardNote";
export const DELETE_JOB_CARD_NOTE = "/job/DeleteJobCardNote";

//Job Support
export const GET_SUPPORT_DETAILS = "/job/GetSupportDetails";
export const UPSERT_SUPPORT_DETAILS = "/job/UpsertSupportDetails";
export const CLOSE_JOB_SUPPORT = "/job/CloseJobSupport";
export const DELETE_SUPPORT_DETAILS = "/job/DeleteSupportDetails";
export const DOWNLOAD_SAMPLE_FILE_FOR_IMPORT_JOB_URL =
  "/SampleImportFiles/ImportJob.xlsx";

//Services
export const GET_ALL_SERVICE_LIST = "GetAllService";
export const UPSERT_SERVICE = "UpsertService";
export const DELETE_SERVICE = "DeleteService";
export const GET_SERVICE_BY_ID = "GetServiceById";
export const ARCHIVE_SERVICE_ASYNC = "ArchiveServiceAsync";

//Skills
export const GET_ALL_SKILLS = "GetAllSkills";
export const GET_SKILL_BY_ID = "GetSkillById";
export const UPSERT_SKILL = "UpsertSkill";
export const DELETE_SKILL = "DeleteSkill";
export const ACTIVE_SKILL = "ActiveSkill";

//Additional Details Master
export const GET_ALL_ADDITIONAL_DETAILS =
  "/AdditionalDetails/GetAllAdditionalDetails";
export const ADD_EDIT_ADDITIONAL_DETAIL =
  "/AdditionalDetails/UpsertAdditionalDetails";
export const DELETE_ADDITIONAL_DETAIL =
  "/AdditionalDetails/DeleteAdditionalDetails";

//Engineer
export const GET_ALL_ENGINEERS = "GetAllEngineers";
export const DELETE_ENGINEER = "DeleteEngineer";
export const UPSERT_ENGINEER = "Admin/UpsertEngineer";
export const BLOCK_ENGINEER = "BlockEngineerById";
export const GET_COMPANY_LIST = "GetCompanyList";
export const GET_ALL_SKILLS_LIST = "GetAllSkillsList";
export const GET_ENGINEERS_BY_ID = "GetEngineerAsyncById";
export const APPROVE_ENGINEER = "VerifyEngineerAsync";
export const JOBS_BY_ENGINEER_ID = "/Job/GetAllJobList";

//Admin Module
export const GET_ADMIN_LIST = "/Admin/GetAllAdmins";
export const DELETE_ADMIN = "/Admin/DeleteAdmin";
export const BLOCK_ADMIN = "/Admin/BlockAdminById";
export const UPSERT_ADMIN = "/Admin/UpsertAdmin";
export const GET_MASTER_DATA_ADMIN = "/Admin/GetMasterDataForUpsertAdmin";
export const GET_MASTER_PERMISSION_PROFILE =
  "/Profile/GetPermissionProfileList";
export const GET_ADMIN_BY_ID = "/Admin/GetAdminAsyncById";
export const GET_ALL_COMPANIES = "/Company/GetCompanyList";

//Goods Receipt Module
export const GET_GOOD_RECEIPT_LIST = "/Product/GetAllGoodReceiptList";
export const GET_GOOD_RECEIPT_ITEMS_LIST = "/Product/GetAllGoodReceiptItem";
export const DELETE_GOOD_RECEIPT = "/Product/DeleteGoodReceiptById";
export const DELETE_GOOD_RECEIPT_ITEM_ID = "/Product/DeleteGoodReceiptItem";
// export const BLOCK_ADMIN = "/Admin/BlockAdminById";
export const UPSERT_GOODSRECEIPT = "/Product/UpsertGoodReceipt";
export const CHECK_PRODUCT_SERIAL_NUMBER_EXISTS =
  "/Product/CheckProductSerialNumberExists";
export const UPSERT_GOODSRECEIPT_ITEM = "/Product/UpsertGoodReceiptItem";
export const GET_MASTER_DATA_GOOD_RECEIPT =
  "/Product/GetMasterDataGoodReceipts";
// export const GET_ADMIN_BY_ID = "/Admin/GetAdminAsyncById";

export const DELETE_RECEIPT = "/Product/DeleteGoodReceipt";
export const GET_GOODS_RECEIPT_BY_ID = "/Product/GetGoodReceiptById";

//Products
export const GET_PRODUCT_LIST = "/Product/GetAllProducts";
export const GET_PRODUCT_COMPANIES_LIST = "/Product/GetCompanyProductQuantity";
export const DELETE_PRODUCT = "/Product/DeleteProduct";
export const UPSERT_PRODUCT = "/Product/UpsertProduct";
export const GET_PRODUCT_BY_ID = "/Product/GetProductById";
export const GET_ALL_SUPPLIER_LIST = "/Company/GetAllSupplierList";
export const ARCHIVE_PRODUCT = "/Product/ArchiveProduct";
export const GET_ALL_PRODUCTS = "/Product/GetAllProductsListWithCodeAsync";
export const CHECK_ALL_PRODUCT = "/Product/CheckProductCodeExists";
export const UPSERT_SERIAL_NUMBER = "/Product/UpsertSerialNumber";

//Stock Movement
export const GET_STOCK_MOVEMENT = "/StockMovement/GetStockMovements";
export const GET_STOCK_ITEMS_MOVEMENT =
  "/StockMovement/GetAllStockMovementDetailList";
export const UPSERT_STOCK_MOVEMENT = "/StockMovement/UpsertStockMovement";
export const UPSERT_STOCK_MOVEMENT_DETAILS =
  "/StockMovement/UpsertStockMovementDetails";
export const GET_STOCK_ITEM_DETAILS = "/StockMovement/GetStockMovementDetails";
export const GET_STOCK_ITEM_DETAILS_BY_ID =
  "/StockMovement/GetStockMovementById";
export const DELETE_STOCK_MOVEMENT_DETAIL =
  "/StockMovement/DeleteStockMovementDetail";
export const DELETE_STOCK_MOVEMENT = "/StockMovement/DeleteStockMovement";
export const UPSERT_STOCK_MOVEMENT_DETAIL_SERIAL_NUMBER =
  "/StockMovement/UpsertStockMovementDetailSerialNumber";
export const GET_STOCK_MOVEMENT_SERIAL_NUMBER_LIST =
  "/StockMovement/GetStockMovementSerialNumberList";
export const CHECK_ALL_STOCK_MOVEMENT =
  "/StockMovement/check-stock-movement-item";
export const DELETE_STOCK_MOVEMENT_ITEM =
  "/StockMovement/DeleteStockMovementDetail";

// Companies
export const ADD_COMPANY = "/Company/UpsertCompany";
export const LIST_COMPANIES = "/Company/GetAllCompanies";
export const GET_COMPANY_PRODUCTS = "/Company/GetCompanyProducts";
export const ADD_COMPANY_CONTACT = "/Company/UpsertCompanyContactDetail";
export const LIST_COMPANIES_CONTACT = "/Company/GetCompanyContactDetails";
export const DELETE_COMPANY_DETAILS = "/Company/deleteCompany";
export const SUSPEND_COMPANY_ = "/Company/SuspendCompany";
export const DELETE_COMPANY_CONTACT_DETAILS =
  "/Company/DeleteCompanyContactDetail";
export const GET_COMPANY_DETAILS_BY_ID = "/Company/GetCompanyDetail";
export const GET_CONTACT_DETAILS_BY_ID = "/Company/GetCompanyContactDetailById";
export const CHECK_ALL_COMPANY = "/Company/CheckCompanyCodeExists";
export const UPLOAD_IMAGE = "/Authentication/UploadImage";

//Projects
export const LIST_PROJECTS = "/Project/GetAllProjects";
export const ADD_EDIT_PROJECTS = "/Project/UpsertProject";
export const DELETE_PROJECTS = "/Project/DeleteProject";
export const GET_PROJECT_BY_ID = "/Project/GetProjectById";

//Profile
export const GET_USER_PROFILE = "/Profile/GetAdminDetailProfile";
export const UPDATE_USER_PROFILE = "/Profile/EditProfile";
export const GET_DEPARTMENT_INFORMATION = "/Admin/GetMasterDataForUpsertAdmin";

// Supplier
export const LIST_SUPPLIERS = "/Company/GetAllSupplier";
export const ADD_EDIT_SUPPLIER = "/Company/UpsertSupplier";
export const GET_SUPPLIER_BY_ID = "/Company/GetSupplierById";
export const DELETE_SUPPLIER_BY_ID = "/Company/DeleteSupplier";

// Supplier Contact
export const GET_SUPPLIER_CONTACT = "/Company/GetAllSupplierContact";
export const ADD_EDIT_SUPPLIER_CONTACT = "/Company/UpsertSupplierContact";
export const DELETE_SUPPLIER_CONTACT_BY_ID = "/Company/DeleteSupplierContact";

//Templates
export const GET_ALL_TEMPLATES = "/Task/GetAllTaskTemplateHeaders";
export const GET_TEMPLATE_BY_ID = "/Task/GetTaskTemplateList";
export const DELETE_TEMPLATE_BY_ID = "/Task/DeleteTaskTemplate";
export const ARCHIVE_TEMPLATE_BY_ID = "/Task/ArchiveTaskTemplate";
export const UPSERT_TEMPLATE = "/Task/UpsertTaskTemplate";

//Permission
export const LIST_PERMISSION_PROFILE = "/Profile/GetAllPermissionProfileList";
export const GET_PERMISSION_PROFILE_LIST_BY_ID =
  "/Profile/GetPermissionProfileListById";
export const DELETE_PERMISSION_PROFILE = "/Profile/DeletePermissionProfile";
export const GET_ALL_ASSIGNED_USERS = "/Profile/AssignedAdminUsers";
export const ADD_EDIT_PERMISSION_PROFILE = "/Profile/UpsertPermissionProfile";
export const GET_ALL_MENU_LIST = "/Profile/GetAllMenuList";

// Customer Shop
export const GET_ALL_CUSTOMER_SHOP_LIST = "/Customer/GetAllCustomerShop";
export const GET_CUSTOMER_SHOP_BY_ID = "/Customer/ViewShop";
export const DELETE_SHOP_BY_ID = "/Customer/DeleteShop";
export const ADD_EDIT_CUSTOMER_SHOP = "/Customer/UpsertCustomerShop";
export const IMPORT_CUSTOMER_SHOP = "/Customer/ImportCustomerShop";
export const DOWNLOD_SAMPLE_FILE_FOR_IMPORT_SHOP_URL =
  "/SampleImportFiles/ImportCustomerShop.xlsx";

// Customer Shop Contact
export const GET_ALL_CUSTOMER_SHOP_CONTACT_LIST =
  "/Customer/GetAllCustomerShopContact";
export const UPSERT_CUSTOMER_SHOP_CONTACT =
  "/Customer/UpsertCustomerShopContact";

export const DELETE_CUSTOMER_SHOP_CONTACT_DETAILS =
  "/Customer/DeleteCustomerShopContact";

export const GET_ALL_CUSTOMER_SHOP_ADDITIONAL_LIST =
  "/Customer/GetCustomerShopAllAdditionalNotes";
export const GET_MASTER_DATA_FOR_ADDITIONAL_DETAIL =
  "/AdditionalDetails/GetAllAdditionalDetailsList";
export const UPSERT_CUSTOMER_SHOP_ADDITIONAL_DETAILS =
  "/Customer/UpsertCustomerShopAdditionalNotes";
export const DELETE_CUSTOMER_SHOP_ADDITIONAL_DETAILS =
  "/Customer/DeleteCustomerShopAdditionalNote";

//Delivery Notes
export const GET_DELIVERY_NOTES_LIST = "/DeliveryNote/GetAllDeliveryNotes";
export const GET_SEARCH_DELIVERY_NOTES_LIST =
  "/DeliveryNote/SearchDeliveryNoteItems";
export const GET_DELIVERY_NOTES_ITEMS_LIST =
  "/DeliveryNote/GetAllDeliveryNoteDetailList";
export const GET_ADDITIONAL_NOTES_LIST =
  "/DeliveryNote/GetAllDeliveryNoteAdditionalNotes";
export const DELETE_DELIVERY_NOTES = "/DeliveryNote/DeleteDeliveryNotes";
export const DELETE_DELIVERY_ADDITIONAL_NOTES =
  "/DeliveryNote/DeleteDeliveryNoteAdditionalNote";

export const UPSERT_DELIVERY_NOTES = "/DeliveryNote/UpsertDeliveryNote";
export const UPSERT_DELIVERY_NOTES_ITEMS =
  "/DeliveryNote/UpsertDeliveryNoteDetails";
export const UPSERT_DELIVERY_NOTE_SERIAL_NUMBER =
  "/DeliveryNote/UpsertDeliveryNoteDetailSerialNumber";
export const UPSERT_DELIVERY_ADDITIONAL_NOTES =
  "/DeliveryNote/UpsertDeliveryNoteAdditionalNote";
export const GET_DELIVERY_NOTES_BY_ID = "/DeliveryNote/ViewDeliveryNotes";
export const ARCHIVE_DELIVERY_NOTES = "/DeliveryNote/ArchiveProduct";
export const GET_ALL_DELIVERY_NOTESS =
  "/DeliveryNote/GetAllProductsListWithCodeAsync";
export const CHECK_ALL_DELIVERY_NOTES =
  "/DeliveryNote/CheckDeliveryNoteItemExist";
export const GET_MASTER_DATA_DELIVERY_NOTES =
  "/DeliveryNote/GetMasterDataForUpsertDeliveryNote";
export const DELETE_DELIVERY_NOTES_ITEMS =
  "/DeliveryNote/DeleteDeliveryNoteDetails";
export const GENERATE_DELIVERY_NOTES = "/DeliveryNote/GenerateDeliveryNotePDF";
export const COMPLETE_DELIVERY_NOTES = "/DeliveryNote/CompleteDeliveryNote";

//Customer
export const GET_ALL_CUSTOMERS = "/Customer/GetAllCustomers";
export const DELETE_CUSTOMER = "/Customer/DeleteCustomer";
export const GET_CUSTOMER_BY_ID = "/Customer/GetCustomerById";
export const UPSERT_CUSTOMER = "/Customer/UpsertCustomer";
export const SUSPEND_CUSTOMER = "/Customer/SuspendCustomer";
export const IMPORT_CUSTOMER = "/Customer/ImportCustomer";
export const DOWNLOAD_SAMPLE_FILE_FOR_IMPORT_CUSTOMER_URL =
  "/SampleImportFiles/ImportCustomerAndShop.xlsx";

// ErrorBoundry
export const UPSERT_FRONTEND_LOGS = "/Customer/UpsertCustomer";

// Download Sheet
export const DOWNLOAD_ADDITIONAL_DETAIL_SHEET =
  "/SampleImportFiles/ImportAdditionalDetails.xlsx";
export const DOWNLOAD_CONTACT_SHEET =
  "/SampleImportFiles/ImportContactDetails.xlsx";
export const UPLOAD_CONTACT_SHEET = "/Customer/ImportContacts";
export const UPLOAD_ADDITIONAL_SHEET = "/Customer/ImportAdditionalDetails";
export const CUSTOMER_SHOP_STATUS = "/Customer/SuspendCustomerShop";

// Front-end logs
export const ADD_FRONT_END_ERROR_LOG_URL = "Authentication/UpsertFrontendLogs";

// Contact Us
export const CONTACT_US_URL = "/FAQ/ContactUs";

// Faq's
export const GET_FAQ_LIST = "/FAQ/GetAllFAQList";
export const UPSERT_FAQ = "/FAQ/UpsertFAQ";
export const DELETE_FAQ = "/FAQ/DeleteFAQ";

// Dashboard
export const GET_PRODUCT_DETAILS_CARD = "/Dashboard/GetProductDetailCards";
export const UPCOMING_JOBS = "/Dashboard/UpcomingJobs";
export const GET_TOP_ENGINEERS = "/Dashboard/GetTopEngineers";
export const GET_COMPLETE_JOB = "/Dashboard/GetCompleteJob";
export const GET_JOB_OVERVIEW_DATA = "/Dashboard/GetJobOverviewData";

// Activity log
export const GET_ALL_ACTIVITY_LOG = "/Authentication/GetActivitieLogs";

// Posts
export const GET_ALL_POSTS = "https://jsonplaceholder.typicode.com/posts";
