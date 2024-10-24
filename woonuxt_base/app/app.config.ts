/**
 * App configuration.
 * This file is used to configure the app settings.
 * Below are the default values.
 */
export default defineAppConfig({
  siteName: 'Omi.lt - Korėjietiškos kosmetikos internetinė parduotuvė',
  shortDescription: 'Mūsu parduotuvėje rasite kokybiškos Korėjietiškos kosmetikos puikiomis kainomis.',
  description: `Mūsų internetinė parduotuvė siūlo aukštos kokybės ir prieinamomis kainomis korėjietišką odos priežiūrą. Čia rasite platų originalių, odą puoselėjančių produktų asortimentą, kurie praturtinti natūraliais ingredientais ir sukurti pagal naujausias grožio tendencijas. Leiskite savo odai švytėti su kruopščiai atrinktais korėjietiškos kosmetikos perlais!`,
  baseUrl: 'https://omi.lt',
  storeSettings: {
    autoOpenCart: false,
    showReviews: true,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: true,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: true,
    showMoveToWishlist: true,
    hideBillingAddressForVirtualProducts: false,
    initStoreOnUserActionToReduceServerLoad: true,
    saleBadge: 'percent', // 'percent', 'onSale' or 'hidden'
  },
});
