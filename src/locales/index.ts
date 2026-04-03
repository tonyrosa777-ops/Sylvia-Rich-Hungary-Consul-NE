/**
 * locales/index.ts — aggregates all translation namespaces
 * Statically imported so all translations are bundled with the client.
 * For a site this size (~28 files) bundling is the correct tradeoff.
 */

import enCommon from "./en/common.json";
import enHome from "./en/home.json";
import enAbout from "./en/about.json";
import enServices from "./en/services.json";
import enScope from "./en/scope.json";
import enGuide from "./en/guide.json";
import enCitizenship from "./en/citizenship.json";
import enVitalRecords from "./en/vital-records.json";
import enLegalization from "./en/legalization.json";
import enCertificates from "./en/certificates.json";
import enBooking from "./en/booking.json";
import enTestimonials from "./en/testimonials.json";
import enContact from "./en/contact.json";
import enStates from "./en/states.json";
import enBlog from "./en/blog.json";
import enShop from "./en/shop.json";
import enPricing from "./en/pricing.json";

import huCommon from "./hu/common.json";
import huHome from "./hu/home.json";
import huAbout from "./hu/about.json";
import huServices from "./hu/services.json";
import huScope from "./hu/scope.json";
import huGuide from "./hu/guide.json";
import huCitizenship from "./hu/citizenship.json";
import huVitalRecords from "./hu/vital-records.json";
import huLegalization from "./hu/legalization.json";
import huCertificates from "./hu/certificates.json";
import huBooking from "./hu/booking.json";
import huTestimonials from "./hu/testimonials.json";
import huContact from "./hu/contact.json";
import huStates from "./hu/states.json";
import huBlog from "./hu/blog.json";
import huShop from "./hu/shop.json";
import huPricing from "./hu/pricing.json";

const en = {
  common: enCommon,
  home: enHome,
  about: enAbout,
  services: enServices,
  scope: enScope,
  guide: enGuide,
  citizenship: enCitizenship,
  "vital-records": enVitalRecords,
  legalization: enLegalization,
  certificates: enCertificates,
  booking: enBooking,
  testimonials: enTestimonials,
  contact: enContact,
  states: enStates,
  blog: enBlog,
  shop: enShop,
  pricing: enPricing,
};

const hu = {
  common: huCommon,
  home: huHome,
  about: huAbout,
  services: huServices,
  scope: huScope,
  guide: huGuide,
  citizenship: huCitizenship,
  "vital-records": huVitalRecords,
  legalization: huLegalization,
  certificates: huCertificates,
  booking: huBooking,
  testimonials: huTestimonials,
  contact: huContact,
  states: huStates,
  blog: huBlog,
  shop: huShop,
  pricing: huPricing,
};

export const translations = { en, hu } as const;

export type Translations = typeof en;
