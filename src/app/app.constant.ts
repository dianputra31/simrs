export const API = 'http://172.16.204.6:8081';

export const RESPONSE = {
	SUCCESS: 1,
	GENERAL_FAILED: 2,
	INCORRECT_PARAMETERS: 3,
	UNAUTHORIZED_REQUEST: 4,
	SESSION_EXPIRED: 5,
	USER_NOT_FOUND: 10,
	USER_ALREADY_EXIST: 11,
	NOT_ALLOWED: 41,
	TIMEOUT: 49,
	SOMETHING_WRONG_BITCH: 99,
	BAD_REQUEST_DOUCHEBAG: 40,
};

export const HTTPSTATUS = {
	UNAUTHORIZED: 401,
};

export const CatalogService = `${API}/product/category/list`;
export const ProductCatalogUrl = `${API}/product/catalog`;
export const CatalogProductDetailUrl = `${API}/product/detail`;
export const ProductTopSubcategoryUrl = `${API}/product/top_subcategory`;
export const ProfileUrl = `${API}/profile`;
export const AddressList = `${API}/profile/address_list`;
export const SaveDefaultAddressUrl = `${API}/profile/save_default_address/`;
export const SetDefaultAddress = `${API}/profile/save_default_address/`;
export const CartListUrl = `${API}/cart/list`;
export const AddCart = `${API}/cart`;
export const CheckoutCartUrl = `${API}/approval/checkout_cart`;
export const ApprovalUrl = `${API}/approval/submit`;
export const ApprovalRejectUrl = `${API}/approval/reject`;
export const ApprovalListUrl = `${API}/approval/list`;
export const AddressListUrl = `${API}/approval/address_group`;
export const GetCompanyUsers = `${API}/user/company_users`;
export const ApproveUrl = `${API}/approval/approve`;
export const TransactionListUrl = `${API}/transaction/list`;
export const TransactionStatusOptionUrl = `${API}/transaction/status_option`;
export const ApprovalCount = `${API}/approval/approval_count`;
export const OpenTrxCount = `${API}/transaction/open_transaction_count`;
export const SearchProduct = `${API}/product/catalog`;
export const TransactionDetailUrl = `${API}/transaction`;
export const TransactionConfirmUrl = `${API}/transaction/confirm`;
export const AddressMasterProvinceUrl = `${API}/address/master_province`;
export const AddressMasterDistrictUrl = `${API}/address/master_district`;
export const AddressMasterSubDistrictUrl = `${API}/address/master_subdistrict`;
export const AddressMasterVillageUrl = `${API}/address/master_village`;
export const AddressCreateUrl = `${API}/address/create`;
export const AddressEditUrl = `${API}/address/edit`;
export const UserCompanyUsersUrl = `${API}/user/company_users`;
export const UserCreateUserUrl = `${API}/user`;
export const UserDeleteUrl = `${API}/user/delete`;
export const EditProfile = `${API}/user/edit/`;
export const DashboardPerMonth = `${API}/dashboard/per_month/`;
export const DashboardPerPurchaser = `${API}/dashboard/per_purchaser/`;
export const DashboardPerProduct = `${API}/dashboard/per_product/`;
export const HistoryMutation = `${API}/history/mutation/`;
