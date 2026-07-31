export const SITE = {
  shortName: "WIE-RISE 2027",
  fullName:
    "1st IEEE Conference on WIE-RISE: Revolutionizing Innovation in Smart Engineering",
  organizer:
    "National Institute of Technology (NIT) Jamshedpur, Department of Electrical Engineering",
  dates: "April 01–03, 2027",
  targetDate: "2027-04-01T09:00:00",
  venueShort: "NIT Jamshedpur, Jharkhand, India",
  venueAddress:
    "NIT Campus, Adityapur, Jamshedpur, Seraikela-Kharsawan, Jharkhand – 831014",
  emails: {
    nishant: "krnishant125@gmail.com",
    namrata: "namrata.ee@nitjsr.ac.in",
  },
  phone: "+91-9862882395",
  contactPerson: "Dr. Nishant Kumar",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "General Chair", to: "/general-chair" },
  {
    label: "Committee",
    children: [
      { label: "Advisory Committee", to: "/advisory-committee" },
      { label: "Organizing Committee", to: "/organizing-committee" },
      {
        label: "Technical Program Committee",
        to: "/technical-program-committee",
      },
    ],
  },
  {
    label: "Authors",
    children: [
      { label: "Call for Papers", to: "/call-for-papers" },
      { label: "Call for Special Session", to: "/special-sessions" },
      { label: "Important Dates", to: "/important-dates" },
      { label: "Paper Submission Guidelines", to: "/manuscript-submission" },
      { label: "Conference Program", to: "/conference-program" },
    ],
  },
  { label: "Speakers", to: "/speakers" },
  { label: "Awards", to: "/awards" },
  { label: "Sponsors", to: "/sponsorship" },
  { label: "Registration", to: "/registration" },
  { label: "Venue", to: "/venue" },
  { label: "Contact Us", to: "/contact" },
];

export const FOOTER_LINKS = {
  left: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Call for Papers", to: "/call-for-papers" },
    { label: "Organizing Committee", to: "/organizing-committee" },
  ],
  right: [
    { label: "Register Now", to: "/registration" },
    { label: "Key Attractions", to: "/venue" },
    { label: "FAQ", to: "/faq" },
    { label: "Support", to: "/support" },
  ],
};
