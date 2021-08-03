export const API = 'https://f325879d-4252-4625-91d4-04031879b817.mock.pstmn.io';
// export const API = 'https://nest.app.narindo.com';

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




export const Login = `${API}/login`;








export const OtpService = `${API}/otp`;
export const CatalogService = `${API}/product/category/list`;
export const ProductCatalogUrl = `${API}/product/catalog`;
export const CatalogProductDetailUrl = `${API}/product/detail`;
export const ProductTopSubcategoryUrl = `${API}/product/top_subcategory`;
export const ProfileUrl = `${API}/profile`;
export const AddressList = `${API}/profile/address_list`;

/* PATH DOKTER START */
export const DokterList = `${API}/dokter/dokter_list`;
export const SpesialisasiList = `${API}/spesialisasi/spesialisasi_list`;
export const NewDokterSave = `${API}/dokter/create`;
export const ViewDokter = `${API}/dokter/dokter_view`;
/* PATH DOKTER END */

/* PATH KARYAWAN START */
export const KaryawanList = `${API}/karyawan/karyawan_list`;
export const NewKaryawanSave = `${API}/karyawan/create`;
/* PATH KARYAWAN END */



export const BankList = `${API}/bank/bank_list`;

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
export const HistoryMutation = `${API}/history/mutation`;
export const TagihanCompany = `${API}/history/invoice_list`;
export const InvoicePrint = `${API}/history/invoice_print`;
export const DashboardPerMonth = `${API}/dashboard/per_range`;
export const DashboardPerPurchaser = `${API}/dashboard/per_purchaser`;
export const DashboardPerProduct = `${API}/dashboard/per_product`;
export const EmailCs = 'cs.nest@narindo.com';
export const RateUrl = `${API}/transaction/rate`;

export const TRANSACTION_STATUS_DICT = {
	ORDERED: 'ORDERED',
	PENDING: 'PENDING',
	PROCESS: 'PROCESS',
	DELIVER: 'DELIVER',
	RECEIVED: 'RECEIVED',
	CLOSED: 'CLOSED',
	CANCEL: 'CANCEL',
	REJECTED: 'REJECTED',
	OUTOFSTOCK: 'OUTOFSTOCK',
	WAITING_RETURN: 'WAITING_RETURN',
};

export const MESSAGE_DICT = {
	ERROR_MESSAGE: 'Maaf, terjadi kesalahan teknis',
};

export function titleCase(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
