export const ITEM_AVAILABILITY_DICT = {
	AVAILABLE: 'AVAILABLE',
	LIMITED: 'LIMITED',
	OUT_OF_STOCK: 'OUT_OF_STOCK',
	COMING_SOON: 'COMING_SOON',
};

export const ITEM_AVAILABILITY = [
	{
		status: ITEM_AVAILABILITY_DICT.AVAILABLE,
		display: 'bisa dibeli',
	},
	{
		status: ITEM_AVAILABILITY_DICT.LIMITED,
		display: 'bisa dibeli',
	},
	{
		status: ITEM_AVAILABILITY_DICT.OUT_OF_STOCK,
		display: 'Stok Habis',
	},
	{
		status: ITEM_AVAILABILITY_DICT.COMING_SOON,
		display: 'Stok Habis',
	},
];
