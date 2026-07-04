// Central place for editable site content. Update this file to change contact
// details, licenses, catalogue links, etc.

export const COMPANY = {
  name: "Thoroughbred Exports",
  shortName: "Thoroughbred",
  tagline: "Harnessing Trade Opportunities with Precision.",
  pillarsLine: "Clear Communication  ·  Great Quality  ·  Right Price  ·  Timely\u00A0Deliverance.",
  closer: "That's all we do!",
  phone: "+91-97697-19146",
  phoneHref: "tel:+919769719146",
  email: "shivendra@thoroughbredexports.com",
  emailHref: "mailto:shivendra@thoroughbredexports.com",
  linkedin: "https://www.linkedin.com/in/shivendra-rajeshwari-a11844142",
  addressLines: [
    "1201, Surya CHS, Gawand Baug,",
    "Pokharan Road 2, Thane West,",
    "Maharashtra 400610, India",
  ],
  addressSingleLine:
    "1201, Surya CHS, Gawand Baug, Pokharan Road 2, Thane West, Maharashtra 400610, India",
};

// Web3Forms access key — replace with the key from https://web3forms.com/
export const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";

export const PILLARS = [
  {
    title: "Clear Communication",
    body: "Responsive, transparent updates across every stage of the shipment — from enquiry to delivery.",
    image: "/images/img_16.jpg",
  },
  {
    title: "Great Quality",
    body: "Rigorous sourcing standards, farm-to-container traceability and inspection at every load.",
    image: "/images/img_17.jpg",
  },
  {
    title: "Right Price",
    body: "Fair, market-benchmarked pricing built on long-standing grower and supplier relationships.",
    image: "/images/img_18.jpg",
  },
  {
    title: "Timely Deliverance",
    body: "Reliable logistics execution — documentation, cold-chain and vessel schedules honoured to the day.",
    image: "/images/img_19.jpg",
  },
];

export const FRESH_PRODUCE = [
  { name: "Onions & Garlic", image: "/images/img_4.jpg" },
  { name: "Mangoes & Tropical Fruits", image: "/images/img_5.jpg" },
  { name: "Grapes & Pomegranates", image: "/images/img_6.jpg" },
  { name: "Bananas & Plantains", image: "/images/img_30.jpg" },
  { name: "Green Vegetables", image: "/images/img_8.jpg" },
  { name: "Root Vegetables", image: "/images/img_9.jpg" },
];

export const INGREDIENTS = [
  { name: "Whole & Ground Spices", image: "/images/img_10.jpg" },
  { name: "Pulses & Lentils", image: "/images/img_11.jpg" },
  { name: "Rice & Grains", image: "/images/img_12.jpg" },
  { name: "Oil Seeds", image: "/images/img_13.jpg" },
  { name: "Food Colours & Additives", image: "/images/img_14.jpg" },
  { name: "Herbal & Speciality Extracts", image: "/images/img_15.jpg" },
];

export const LICENSES = [
  {
    code: "IEC",
    name: "Importer Exporter Code",
    body: "Issued by the Directorate General of Foreign Trade (DGFT), Government of India — mandatory for all cross-border trade.",
  },
  {
    code: "APEDA",
    name: "Agricultural & Processed Food Products Export Development Authority",
    body: "Registered exporter of scheduled agricultural produce under the Ministry of Commerce & Industry.",
  },
  {
    code: "FIEO",
    name: "Federation of Indian Export Organisations",
    body: "Member of India's apex trade promotion body, connecting us to global buyers and trade missions.",
  },
  {
    code: "SPICES",
    name: "Spices Board of India",
    body: "Registered exporter with the Spices Board, Ministry of Commerce, for quality-certified spice exports.",
  },
  {
    code: "FSSAI",
    name: "Food Safety and Standards Authority of India",
    body: "Compliant with the food safety and hygiene standards governing all food-grade exports from India.",
  },
  {
    code: "MSME",
    name: "Udyam / MSME Registration",
    body: "Recognised under the Ministry of Micro, Small and Medium Enterprises, Government of India.",
  },
];

// Certificates that can be downloaded from the /licenses page.
// Drop the corresponding PDF files into /public_html/licenses/ on Bluehost
// (or /app/frontend/public/licenses/ locally). To add / remove entries,
// simply edit this array — the dropdown updates automatically.
export const CERTIFICATES = [
  { name: "IEC — Importer Exporter Code", file: "/licenses/iec.pdf" },
  { name: "APEDA Registration", file: "/licenses/apeda.pdf" },
  { name: "FSSAI License", file: "/licenses/fssai.pdf" },
];

// Catalogues shown on the /catalogues page dropdown.
// Drop the PDFs into /public_html/catalogues/ on Bluehost (or
// /app/frontend/public/catalogues/ locally). Add / remove entries here.
export const CATALOGUE_FILES = [
  { name: "Table Grapes", file: "/catalogues/table-grapes.pdf" },
  { name: "Pomegranates", file: "/catalogues/pomegranates.pdf" },
  { name: "Bananas", file: "/catalogues/bananas.pdf" },
  { name: "Indian Mangoes", file: "/catalogues/indian-mangoes.pdf" },
  { name: "Writeups", file: "/catalogues/writeups.pdf" },
  { name: "Circulars", file: "/catalogues/circulars.pdf" },
];

// Add / remove catalogue entries here. Files must be dropped into /public/pdfs/
// on the deployed site (or /app/frontend/public/pdfs/ in the repo).
export const CATALOGUES = [
  {
    title: "Fresh Produce Catalogue",
    description:
      "Seasonal availability, grade specifications and packaging options for our fruits and vegetables.",
    file: "/pdfs/fresh-produce-catalogue.pdf",
    category: "Catalogue",
  },
  {
    title: "Spices & Ingredients Catalogue",
    description:
      "Whole and ground spices, pulses, rice and speciality ingredients with quality parameters.",
    file: "/pdfs/spices-ingredients-catalogue.pdf",
    category: "Catalogue",
  },
  {
    title: "Company Profile",
    description:
      "A concise introduction to Thoroughbred Exports — our capabilities, markets and certifications.",
    file: "/pdfs/company-profile.pdf",
    category: "Writeup",
  },
  {
    title: "Season Circular — Latest",
    description:
      "Current-season pricing indications, availability windows and shipment schedules.",
    file: "/pdfs/season-circular-latest.pdf",
    category: "Circular",
  },
];
