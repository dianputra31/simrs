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

export const CatalogService = `${API}/product/category/list`;
export const ProductCatalogUrl = `${API}/product/catalog`;
export const CatalogProductDetailUrl = `${API}/product/detail`;
export const ProductTopSubcategoryUrl = `${API}/product/top_subcategory`;
export const ProfileUrl = `${API}/profile`;
export const AddressList = `${API}/profile/address_list`;
<<<<<<< HEAD
export const SaveDefaultAddressUrl = `${API}/profile/save_default_address/`;
=======
export const SetDefaultAddress = `${API}/profile/save_default_address/`;
export const CartListUrl = `${API}/cart/list`;
export const AddCart = `${API}/cart`;
export const CheckoutCartUrl = `${API}/approval/checkout_cart`;
export const ApprovalUrl = `${API}/approval/submit`;
export const ApprovalListUrl = `${API}/approval/list`;
export const AddressListUrl = `${API}/approval/address_group`;
>>>>>>> 0c4924d1d26ca9ac68b53b73db4ccfdcd9fcd5f4
