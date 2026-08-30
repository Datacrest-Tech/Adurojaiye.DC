// All copy below is sourced from the original adurojaiye.com site and kept intact.
// Only the presentation layer (components/UI) has been rebuilt.

export const brand = {
  name: "Ajibade Durojaiye & Co.",
  short: "ADC",
  tagline: "",
  // Original logo asset from adurojaiye.com. Swap for a locally hosted copy
  // in /public (see README "Using the original logo") once you've saved it.
  logoUrl:
    "https://adurojaiye.com/wp-content/uploads/2019/10/cropped-adc-logo-2.jpg",
  phones: ["+2348034374541", "+2348039397760"],
  email: "info@adurojaiye.com",
  address: ["27, Ajayi Aina Street,", "Ifako Gbagada, Lagos.", "Nigeria."],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7160898882285!2d3.390298565907941!3d6.557479400574293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d6540a4537f%3A0x1ced0788487ba054!2s27%20Ajayi%20Aina%20St%2C%20Gbagada%20100242%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2suk!4v1571928489876!5m2!1sen!2suk",
  copyright: "© Copyright 2019 ADC Financial All Rights Reserved",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  {
    label: "About Us",
    to: "/about-us",
    children: [{ label: "Team Members", to: "/team-members" }],
  },
  {
    label: "Contact Us",
    to: "/contact-us",
    children: [{ label: "Consult Us", to: "/consult-us" }],
  },
];

export const hero = {
  eyebrow: "Building Stronger Businesses for Tomorrow",
  heading: "ADC helps businesses like yours to achieve long-term success.",
  ctaPrimary: { label: "Book a Consultation", to: "/consult-us" },
  ctaSecondary: { label: "Explore our services", to: "/services" },
  image: "/Images/hero-background.jfif",
};

export const homeIntro = {
  eyebrow: "Our Services Business Guide",
  body: "ADC is a hollistic business services company offering financial advice and management to businesses great and small.",
};

export const services = [
  {
    slug: "financial-and-systems-audit-assurance-engagements",
    title: "Financial and Systems Audit/Assurance engagements",
    description: "",
  },
  {
    slug: "rendering-corporate-tax-planning-and-advice",
    title: "Rendering Corporate Tax Planning and Advice",
    description:
      "We Render Corporate Tax Planning and Advice, VAT, Capital Gains Tax and Personal Income Tax Services to our clients in line with relevant statutory acts and relevant professional standards.",
  },
  {
    slug: "financial-training-services",
    title: "Financial Training Services",
    description: "",
  },
  {
    slug: "providing-business-advisory-services",
    title: "Providing Business Advisory Services",
    description: "",
  },
];

export const stageSection = {
  eyebrow: "A Business Sage At Every Stage",
  heading: "A Partner for every business",
  body: "At ADC, we understand that all businesses are in different stages of development – that's why we tailor all our services to the pertinent needs of your business; no one size fits all solutions here.",
  stages: ["Establishment", "Growth", "Expansion"],
  stageImages: [
    "/Images/establishmemt.jfif",
    "/Images/growth.jfif",
    "/Images/expansion.jfif",
  ],
  cta: { label: "Meet our business experts", to: "/team-members" },
};

export const aboutParagraphs = [
  "Ajibade Durojaiye & Co. is a firm of Chartered Accountants licensed by The Institute of Chartered accountants of Nigeria (ICAN), The Chartered Institute of Taxation of Nigeria (CITN) and registered with The Corporate Affairs Commission (CAC) to practice Accountancy, Auditing, Appraisal Of Accounting Systems, Taxation, Business Advisory and Financial Consultancy Services in Nigeria and Abroad. Our firm has over 40 years of experience, providing a wide range of financial and business advisory services to our clients within and outside Nigeria.",
  "We maintain utmost integrity and confidentiality as we help our clients identify and maximize business opportunities. We also deliver timely services and value what our clients care about by providing tailor-made services while ensuring our clients compete effectively in today\u2019s market by offering ICT based services.",
  "Over the years, we have built a value added mutual business relationship with our clients based on trust and dedication.",
];

export const workingWithHeading =
  "Working with Top businesses for over 40 years";
export const workingWithByline = "MR. KEHINDE DUROJAIYE – Managing Partner";

export const vision = {
  quote:
    "ADC\u2019s vision remains unchanged – To provide quality and timely services that will meet the peculiar needs of our clients while maintaining best practice methods in line with current accounting and Tax Guidelines.",
};

export const coreValues = [
  {
    title: "Integrity",
    body: "We believe strong business relationships are founded on honest and transparent practice.",
  },
  {
    title: "Commitment",
    body: "We are strongly committed to providing the best solution readily suited for your business",
  },
  {
    title: "Professional Excellence",
    body: "Our ever-evolving approach to problem solving yields results and sets us apart from the pack.",
  },
  {
    title: "Dedication",
    body: "Relevant and precise communication enriches our client relationships and builds better businesses.",
  },
  {
    title: "Client Focus",
    body: "We listen carefully and attentively to our client needs and develop strategies to meet them.",
  },
];

export const leadership = [
  {
    slug: "joseph-ademola-ajibade",
    name: "PASTOR JOSEPH ADEMOLA A. AJIBADE (DUROJAIYE)",
    credentials: "Bsc (Hons), FCA",
    bio: "Ademola presently is the senior partner, providing vision and capacity building for the workforce so as to ensure maximum product and service delivery.",
  },
  {
    slug: "kehinde-olajide-durojaiye",
    name: "MR KEHINDE OLAJIDE DUROJAIYE",
    credentials: "B.A. (Hons). ACA, CISA, ACTI",
    bio: "Kehinde is the Managing Partner overseeing the daily operations of the form including: Finance, Administration and Client Management.",
  },
];

export const team = [
  {
    slug: "joy-olatundun-ajibade",
    name: "MRS. JOY OLATUNDUN AJIBADE",
    credentials: "B.Sc. (Hons). FCA",
    bio: "Olatunde oversees Quality Assurance and Operational Standards to ensure best practice methods are maintained all through the firm.",
  },
  {
    slug: "bola-durojaiye",
    name: "MRS. BOLA DUROJAIYE",
    credentials: "Bsc. (Hons), MBA, FCCA",
    bio: "Bola oversees Business Strategy, Funds Management and Foreign Relations aspects of the firm. She is a Fellow of the Association of Certified Chartered Accountants, Uk and also holds a Masters Degree from Manchester Business School.",
  },
  {
    slug: "michael-adelugba",
    name: "MR. MICHAEL O. ADELUGBA",
    credentials: "ACA, ACTI",
    bio: "Michael is a Chartered Accountant and an Associate of the Chartered Institute of Taxation of Nigeria (ACTI) with many years of relevant Tax Management and Planning, Accounting and Assurance/Audit experience.",
  },
  {
    slug: "dauda-adebesin",
    name: "MR DAUDA ADEBESIN",
    credentials: "ACA ACTI",
    bio: "Dauda is an Associate of the Institute of Chartered Accountants of Nigeria (ICAN) and Associate of The Chartered Institute of Taxation of Nigeria (ACTI) with many years of relevant Tax Management and Planning, Accounting and Assurance/Audit experience.",
  },
  {
    slug: "monsurat-quadri",
    name: "MRS. MONSURAT QUADRI",
    credentials: "ACA, ACTI",
    bio: "Monsurat is a Chartered Accountant and Associate of the Chartered Institute of Taxation of Nigeria (ACTI) with several years of relevant experience in Tax Management and Planning, Accounting and Assurance/Audit. Graduate of Accounting from the University of Ilorin and a member of the Nigerian Institute of Management.",
  },
];

export const clientSectors = [
  { name: "Construction", image: "/Images/construction.jfif" },
  {
    name: "Insurance and Pension Funds",
    image: "/Images/Insurance%20and%20Pension%20Funds.jfif",
  },
  {
    name: "Health Management",
    image: "/Images/health%20management.jfif",
  },
  { name: "Oil Services", image: "/Images/oil%20services.jfif" },
  { name: "Power", image: "/Images/power.jfif" },
  {
    name: "Security Management",
    image: "/Images/security%20management.jfif",
  },
  { name: "Mining", image: "/Images/mining.jfif" },
  // Keep the original sector copy and show the matched image for the client grid
  { name: "Maritime – Shipping", image: "/Images/maritime.jfif" },
];

export const clientsEyebrow = "Our Clients Testifies Results";
export const clientsIntro =
  "Our clientele covers various sector of the economy such as";

export const closingCta = {
  heading: "Ready to reach higher in business?",
  body: "Financial management and much more – speak to a Partner associate today.",
};

export const contactPage = {
  heading: "Contact Us",
  findUsHeading: "Find Us on Google Map",
};

export const consultPage = {
  eyebrow: "Let's tailor the right solution for your business",
  heading: "Arrange A Consultation",
};
