// All copy below is sourced from the original adurojaiye.com site and kept intact.
// Only the presentation layer (components/UI) has been rebuilt.

export const brand = {
  name: "Ajibade Durojaiye & Co.",
  short: "ADC",
  tagline: "",
  // Original logo asset from adurojaiye.com. Swap for a locally hosted copy
  // in /public (see README "Using the original logo") once you've saved it.
  // Use the newly added local ADC logo in `public/` for all logo locations.
  // File: `public/adc-logo.jpg`
  logoUrl: "/adc-logo.jpg",
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
  eyebrow: "CHARTERED ACCOUNTANTS & BUSINESS ADVISERS",
  heading: "Audit, Tax and Advisory Expertise That Moves Your Business Forward",
  supporting:
    "For over 40 years, Ajibade Durojaiye & Co. has helped businesses strengthen financial controls, navigate compliance and make confident decisions for sustainable growth.",
  ctaPrimary: { label: "Book a Consultation", to: "/consult-us" },
  ctaSecondary: { label: "Explore Our Expertise", to: "/services" },
  image: "/Images/new%20hero.jfif",
};

export const homeIntro = {
  eyebrow: "Our Services Business Guide",
  body: "ADC is a hollistic business services company offering financial advice and management to businesses great and small.",
};

export const services = [
  {
    slug: "financial-and-systems-audit-assurance-engagements",
    title: "Financial and Systems Audit / Assurance Engagements",
    description:
      "Independent examination and evaluation of your organisation's financial records, internal control systems, and operational processes.",
    tags: ["Audit", "Assurance", "Internal Controls"],
    overview:
      "Independent examination and evaluation of your organisation's financial records, internal control systems, and operational processes to ensure accuracy, regulatory compliance, and risk mitigation.",
    offerings: [
      "Statutory & Internal Audits: Thorough reviews in strict compliance with statutory accounting frameworks and international reporting standards.",
      "Systems & Internal Control Reviews: Evaluating digital accounting systems and internal operational workflows to pinpoint vulnerabilities and prevent fraud.",
      "Due Diligence & Assurance: Objective reporting that gives investors, boards, and regulatory bodies complete confidence in your reported figures.",
    ],
    valueDelivered:
      "Greater transparency, minimized compliance risks, and robust financial controls that protect company assets.",
  },
  {
    slug: "corporate-tax-planning-and-advice",
    title: "Corporate Tax Planning and Advice",
    description:
      "Proactive, compliant tax advisory designed to optimize fiscal efficiency, eliminate avoidable penalties, and navigate statutory requirements.",
    tags: ["Tax Planning", "Compliance", "Advisory"],
    overview:
      "Proactive, compliant tax advisory designed to optimize fiscal efficiency, eliminate avoidable penalties, and navigate statutory requirements.",
    offerings: [
      "Corporate Tax & VAT Management: Strategic filing, calculation, and timely remittance of Value Added Tax and company income tax.",
      "Capital Gains & Withholding Tax Advisory: Structuring transactions legally to optimize liabilities on asset sales and operational contracts.",
      "Personal Income Tax & Payroll (PAYE): Seamless compliance for executive compensation, director taxes, and workforce payroll deductions.",
      "Tax Audit & Representation: Direct liaison with federal and state revenue authorities during audits, routine inspections, or disputed assessments.",
    ],
    valueDelivered:
      "Maximum tax efficiency, total statutory compliance, and zero exposure to regulatory penalties.",
  },
  {
    slug: "financial-training-services",
    title: "Financial Training Services",
    description:
      "Capacity-building programs tailored for management teams, finance departments, and non-finance executives to strengthen business literacy.",
    tags: ["Training", "Financial Literacy", "Capacity Building"],
    overview:
      "Capacity-building programs tailored for management teams, finance departments, and non-finance executives to strengthen business literacy and institutional decision-making.",
    offerings: [
      "Finance for Non-Finance Managers: Practical training that decodes balance sheets, cash flow dynamics, and budgeting tools for operational leaders.",
      "Statutory Compliance & Reporting Workshops: Up-to-date modules covering changes in tax laws, accounting standards, and regulatory mandates.",
      "Corporate Governance & Internal Control: Hands-on guidance for teams on expense management, risk monitoring, and audit-readiness.",
    ],
    valueDelivered:
      "Financially literate leadership, elevated team productivity, and better internal accountability across departments.",
  },
  {
    slug: "business-advisory-services",
    title: "Business Advisory Services",
    description:
      "Strategic and operational guidance to help growing enterprises diagnose performance bottlenecks and improve long-term profitability.",
    tags: ["Strategy", "Business Advisory", "Financial Management"],
    overview:
      "Strategic and operational guidance to help growing enterprises diagnose performance bottlenecks, seize expansion opportunities, and improve long-term profitability.",
    offerings: [
      "Financial Restructuring & Management: Cash flow optimization, working capital analysis, and cost-reduction strategies.",
      "Growth & Strategy Consulting: Feasibility assessments, business valuations, and performance benchmarking for market expansion.",
      "Capital & Investment Planning: Advisory on securing debt or equity financing, structuring bank facilities, and capital allocation.",
    ],
    valueDelivered:
      "Data-backed strategic direction, enhanced liquidity, and sustainable enterprise growth.",
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
    slug: "joseph-ademola-ajobade",
    name: "MR. JOSEPH ADEMOLA A. AJOBADE (DUROJAIYE)",
    credentials: "Bsc (Hons), FCA",
    bio: "Ademola presently is the senior partner, providing vision and capacity building for the workforce to ensure maximum product and service delivery. He holds a Bachelor of Science Degree (Hons.) in Accountancy from University of Ife (now Obafemi Awolowo University) and is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN). He trained with Ajibade Durojaiye & Co., Balogun, Ayanfalu Bidejo & Co. (now BDO) and later with Ernst & Young. Ademola also worked in the banking industry as pioneer staff of Commerce Bank and Guaranty Trust Bank and served as Chief Executive of Continental Finance Ltd (Bureau de Change).",
  },
  {
    slug: "kehinde-olajide-durojaiye",
    name: "MR. KEHINDE OLAJIDE DUROJAIYE",
    credentials: "B.A. (Hons), ACA, CISA, ACTI",
    bio: "Kehinde is the Managing Partner overseeing daily operations including finance, administration and client management. He is a Chartered Accountant and Associate of The Chartered Institute of Taxation of Nigeria (ACTI), and a graduate of the University of Lagos. He trained with Ajibade Durojaiye & Co. and Akintola Williams Deloitte & Touche, and has extensive experience in assurance (audit), information systems audit, tax and consulting across telecoms and financial services clients. He has acted as financial consultant to several international banks and is a member of ISACA.",
  },
];

export const team = [
  {
    slug: "joy-olatundun-ajibade",
    name: "MRS. JOY OLATUNDUN AJIBADE",
    credentials: "B.Sc. (Hons). FCA",
    bio: "Olatunde oversees Quality Assurance and Operational Standards to ensure best practice methods are maintained throughout the firm. She holds a B.Sc. (Hons) in Agriculture from University of Ife and is a Fellow of the Institute of Chartered Accountants, with over three decades of experience across external audit, systems development, internal audit and financial services, including roles as Chief Financial Officer in private and insurance sectors.",
  },
  {
    slug: "bola-durojaiye",
    name: "MRS. BOLA DUROJAIYE",
    credentials: "Bsc. (Hons), MBA, FCCA",
    bio: "Bola oversees business strategy, funds management and foreign relations. She is a Fellow of the Association of Chartered Certified Accountants (FCCA) and holds an MBA from Manchester Business School. With over fourteen years of professional experience in financial services, she led operations management and consultancy engagements at Standard Chartered Bank covering trade services, cash management, securities services and global markets across Africa, Europe and Asia.",
  },
  {
    slug: "john-fiagbey",
    name: "MR JOHN FIAGBEY",
    credentials: "B.Sc (Hons)",
    bio: "John is the Head of Audit/Assurance and Taxation Services. He holds a B.Sc. (Hons) in Accounting and is a member of the Chartered Institute of Accountants (Ghana). He trained with Olaniyi Akinwunmiju & Co. before joining Ajibade Durojaiye & Co., and has over twenty five years of experience delivering audit and assurance services across private and public sectors.",
  },
  {
    slug: "michael-adelugba",
    name: "MR. MICHEAL O. ADELUGBA",
    credentials: "ACA, ACTI",
    bio: "Micheal is a Chartered Accountant and Associate of the Chartered Institute of Taxation of Nigeria (ACTI) with many years of experience in tax management, planning, accounting and assurance. He is experienced in handling and resolving tax matters for clients to achieve favourable results. He graduated in Accounting from Olabisi Onabanjo University, Ogun State.",
  },
  {
    slug: "dauda-adebesin",
    name: "MR DAUDA ADEBESIN",
    credentials: "ACA ACTI",
    bio: "Dauda is an Associate of the Institute of Chartered Accountants of Nigeria (ICAN) and of The Chartered Institute of Taxation of Nigeria (ACTI). A University of Lagos accounting graduate trained at Ajibade Durojaiye & Co., he brings many years of tax management, planning, accounting and assurance experience and strong problem-solving capabilities on audit engagements.",
  },
  {
    slug: "monsurat-quadri",
    name: "MRS. MONSURAT QUADRI",
    credentials: "ACA, ACTI",
    bio: "Monsurat is a Chartered Accountant and Associate of the Chartered Institute of Taxation of Nigeria (ACTI) with several years of experience in tax management and planning, accounting and assurance/audit. She graduated in Accounting from the University of Ilorin, trained with HaffixEdu & Co., and is a member of the Nigerian Institute of Management.",
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
