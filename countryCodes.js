// File countryCodes.js
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {},
    };
    factory(mod.exports);
    global.countryCodes = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  const countryListAllIsoData = [
    { code: "AF", code3: "AFG", name: "Afghanistan" },
    { code: "AL", code3: "ALB", name: "Albania" },
    { code: "DZ", code3: "DZA", name: "Algeria" },
    { code: "AS", code3: "ASM", name: "American Samoa" },
    { code: "AD", code3: "AND", name: "Andorra" },
    { code: "AO", code3: "AGO", name: "Angola" },
    { code: "AI", code3: "AIA", name: "Anguilla" },
    { code: "AG", code3: "ATG", name: "Antigua & Barbuda" },
    { code: "AR", code3: "ARG", name: "Argentina" },
    { code: "AM", code3: "ARM", name: "Armenia" },
    { code: "AW", code3: "ABW", name: "Aruba" },
    { code: "AT", code3: "AUT", name: "Austria" },
    { code: "AZ", code3: "AZE", name: "Azerbaijan Republic" },
    { code: "BS", code3: "BHS", name: "Bahamas" },
    { code: "BH", code3: "BHR", name: "Bahrain" },
    { code: "BD", code3: "BGD", name: "Bangladesh" },
    { code: "BB", code3: "BRB", name: "Barbados" },
    { code: "BY", code3: "BLR", name: "Belarus" },
    { code: "BE", code3: "BEL", name: "Belgium" },
    { code: "BZ", code3: "BLZ", name: "Belize" },
    { code: "BJ", code3: "BEN", name: "Benin" },
    { code: "BM", code3: "BMU", name: "Bermuda" },
    { code: "BT", code3: "BTN", name: "Bhutan" },
    { code: "BO", code3: "BOL", name: "Bolivia" },
    { code: "BA", code3: "BIH", name: "Bosnia & Herzegovina" },
    { code: "BW", code3: "BWA", name: "Botswana" },
    { code: "VG", code3: "VGB", name: "British Virgin Islands" },
    { code: "BN", code3: "BRN", name: "Brunei" },
    { code: "BG", code3: "BGR", name: "Bulgaria" },
    { code: "BF", code3: "BFA", name: "Burkina Faso" },
    { code: "BI", code3: "BDI", name: "Burundi" },
    { code: "KH", code3: "KHM", name: "Cambodia" },
    { code: "CM", code3: "CMR", name: "Cameroon" },
    { code: "CA", code3: "CAN", name: "Canada" },
    { code: "CV", code3: "CPV", name: "Cape Verde" },
    { code: "KY", code3: "CYM", name: "Cayman Islands" },
    { code: "TD", code3: "TCD", name: "Chad" },
    { code: "CL", code3: "CHL", name: "Chile" },
    { code: "CO", code3: "COL", name: "Columbia" },
    { code: "KM", code3: "COM", name: "Comoros" },
    { code: "CK", code3: "COK", name: "Cook Islands" },
    { code: "CR", code3: "CRI", name: "Costa Rica" },
    { code: "HR", code3: "HRV", name: "Croatia" },
    { code: "CY", code3: "CYP", name: "Cyprus" },
    { code: "CD", code3: "COD", name: "Democratic Republic of the Congo" },
    { code: "DM", code3: "DMA", name: "Dominica" },
    { code: "DJ", code3: "DJI", name: "Djibouti" },
    { code: "DO", code3: "DOM", name: "Dominican Republic" },
    { code: "EC", code3: "ECU", name: "Ecuador" },
    { code: "EG", code3: "EGY", name: "Egypt" },
    { code: "SV", code3: "SLV", name: "El Salvador" },
    { code: "ER", code3: "ERI", name: "Eritrea" },
    { code: "ET", code3: "ETH", name: "Ethiopia" },
    { code: "FK", code3: "FLK", name: "Falkland Islands" },
    { code: "FO", code3: "FRO", name: "Faroe Islands" },
    { code: "FJ", code3: "FJI", name: "Fiji" },
    { code: "PF", code3: "PYF", name: "French Polynesia" },
    { code: "GA", code3: "GAB", name: "Gabon" },
    { code: "GM", code3: "GMB", name: "Gambia" },
    { code: "GE", code3: "GEO", name: "Georgia" },
    { code: "GL", code3: "GRL", name: "Greenland" },
    { code: "GD", code3: "GRD", name: "Grenada" },
    { code: "GT", code3: "GTM", name: "Guatemala" },
    { code: "GW", code3: "GNB", name: "Guinea-Bissau" },
    { code: "GY", code3: "GUY", name: "Guyana" },
    { code: "HN", code3: "HND", name: "Honduras" },
    { code: "IS", code3: "ISL", name: "Iceland" },
    { code: "ID", code3: "IDN", name: "Indonesia" },
    { code: "JM", code3: "JAM", name: "Jamaica" },
    { code: "JO", code3: "JOR", name: "Jordan" },
    { code: "KZ", code3: "KAZ", name: "Kazakhstan" },
    { code: "KE", code3: "KEN", name: "Kenya" },
    { code: "KI", code3: "KIR", name: "Kiribati" },
    { code: "KW", code3: "KWT", name: "Kuwait" },
    { code: "KG", code3: "KGZ", name: "Kyrgyzstan" },
    { code: "LA", code3: "LAO", name: "Laos" },
    { code: "LS", code3: "LSO", name: "Lesotho" },
    { code: "LI", code3: "LIE", name: "Liechtenstein" },
    { code: "MK", code3: "MKD", name: "Macedonia" },
    { code: "MG", code3: "MDG", name: "Madagascar" },
    { code: "MW", code3: "MWI", name: "Malawi" },
    { code: "MY", code3: "MYS", name: "Malaysia" },
    { code: "MV", code3: "MDV", name: "Maldives" },
    { code: "ML", code3: "MLI", name: "Mali" },
    { code: "MH", code3: "MHL", name: "Marshall Islands" },
    { code: "MR", code3: "MRT", name: "Mauritania" },
    { code: "MU", code3: "MUS", name: "Mauritius" },
    { code: "MD", code3: "MDA", name: "Moldova" },
    { code: "MC", code3: "MCO", name: "Monaco" },
    { code: "MN", code3: "MNG", name: "Mongolia" },
    { code: "ME", code3: "MNE", name: "Montenegro" },
    { code: "MS", code3: "MSR", name: "Montserrat" },
    { code: "MA", code3: "MAR", name: "Morocco" },
    { code: "MZ", code3: "MOZ", name: "Mozambique" },
    { code: "NA", code3: "NAM", name: "Namibia" },
    { code: "NR", code3: "NRU", name: "Nauru" },
    { code: "NP", code3: "NPL", name: "Nepal" },
    { code: "AN", code3: "ANT", name: "Netherlands Antilles" },
    { code: "NC", code3: "NCL", name: "New Caledonia" },
    { code: "NZ", code3: "NZL", name: "New Zealand" },
    { code: "NC", code3: "NIC", name: "Nicaragua" },
    { code: "NE", code3: "NER", name: "Niger" },
    { code: "NG", code3: "NGA", name: "Nigeria" },
    { code: "NU", code3: "NIU", name: "Niue" },
    { code: "NF", code3: "NFK", name: "Norfolk Island" },
    { code: "OM", code3: "OMN", name: "Oman" },
    { code: "PW", code3: "PLW", name: "Palau" },
    { code: "PA", code3: "PAN", name: "Panama" },
    { code: "PG", code3: "PNG", name: "Papua New Guinea" },
    { code: "PY", code3: "PRY", name: "Paraguay" },
    { code: "PE", code3: "PER", name: "Peru" },
    { code: "PH", code3: "PHL", name: "Philippines" },
    { code: "PN", code3: "PCN", name: "Pitcairn Islands" },
    { code: "QA", code3: "QAT", name: "Qatar" },
    { code: "CG", code3: "COG", name: "Republic of the Congo" },
    { code: "RW", code3: "RWA", name: "Rwanda" },
    { code: "SH", code3: "SHN", name: "Saint Helena" },
    { code: "KN", code3: "KNA", name: "Saint Kitts & Nevis" },
    { code: "LC", code3: "LCA", name: "Saint Lucia" },
    { code: "PM", code3: "SPM", name: "Saint Pierre & Miquelon" },
    { code: "VC", code3: "VCT", name: "Saint Vincent & Grenadines" },
    { code: "WS", code3: "WSM", name: "Samoa" },
    { code: "ST", code3: "STP", name: "Sao Tome & Principe" },
    { code: "SA", code3: "SAU", name: "Saudi Arabia" },
    { code: "SN", code3: "SEN", name: "Senegal" },
    { code: "RS", code3: "SRB", name: "Serbia" },
    { code: "SC", code3: "SYC", name: "Seychelles" },
    { code: "SL", code3: "SLE", name: "Sierra Leone" },
    { code: "SG", code3: "SGP", name: "Singapore" },
    { code: "SB", code3: "SLB", name: "Solomon Islands" },
    { code: "SO", code3: "SOM", name: "Somalia" },
    { code: "ZA", code3: "ZAF", name: "South Africa" },
    { code: "LK", code3: "LKA", name: "Sri Lanka" },
    { code: "SR", code3: "SUR", name: "Suriname" },
    { code: "SJ", code3: "SJM", name: "Svalbard & Jan Mayen" },
    { code: "SZ", code3: "SWZ", name: "Swaziland" },
    { code: "TJ", code3: "TJK", name: "Tajikistan" },
    { code: "TZ", code3: "TZA", name: "Tanzania" },
    { code: "TG", code3: "TGO", name: "Togo" },
    { code: "TO", code3: "TON", name: "Tonga" },
    { code: "TT", code3: "TTO", name: "Trinidad & Tobago" },
    { code: "TN", code3: "TUN", name: "Tunisia" },
    { code: "TM", code3: "TKM", name: "Turkmenistan" },
    { code: "TC", code3: "TCA", name: "Turks & Caicos Islands" },
    { code: "TV", code3: "TUV", name: "Tuvalu" },
    { code: "UG", code3: "UGA", name: "Uganda" },
    { code: "UA", code3: "UKR", name: "Ukraine" },
    { code: "AR", code3: "ARE", name: "United Arab Emirates" },
    { code: "UY", code3: "URY", name: "Uruguay" },
    { code: "VU", code3: "VUT", name: "Vanuatu" },
    { code: "VE", code3: "VEN", name: "Venezuela" },
    { code: "WF", code3: "WLF", name: "Wallis & Futuna Islands" },
    { code: "YE", code3: "YEM", name: "Yemen" },
    { code: "ZM", code3: "ZMB", name: "Zambia" },
    { code: "ZW", code3: "ZWE", name: "Zimbabwe" },
    { code: "CZ", code3: "CZE", name: "Czech Republic" },
    { code: "DK", code3: "DNK", name: "Denmark" },
    { code: "EE", code3: "EST", name: "Estonia" },
    { code: "FI", code3: "FIN", name: "Finland" },
    { code: "FR", code3: "FRA", name: "France" },
    { code: "DE", code3: "DEU", name: "Germany" },
    { code: "GR", code3: "GRC", name: "Greece" },
    { code: "HU", code3: "HUN", name: "Hungary" },
    { code: "IE", code3: "IRL", name: "Ireland" },
    { code: "IT", code3: "ITA", name: "Italy" },
    { code: "CI", code3: "CIV", name: "Ivory Coast" },
    { code: "LV", code3: "LVA", name: "Latvia" },
    { code: "LT", code3: "LTU", name: "Lithuania" },
    { code: "LU", code3: "LUX", name: "Luxembourg" },
    { code: "MT", code3: "MLT", name: "Malta" },
    { code: "FM", code3: "FSM", name: "Micronesia" },
    { code: "NL", code3: "NLD", name: "Netherlands" },
    { code: "PL", code3: "POL", name: "Poland" },
    { code: "PT", code3: "PRT", name: "Portugal" },
    { code: "RO", code3: "ROU", name: "Romania" },
    { code: "SM", code3: "SMR", name: "San Marino" },
    { code: "SK", code3: "SVK", name: "Slovakia" },
    { code: "SI", code3: "SVN", name: "Slovenia" },
    { code: "ES", code3: "ESP", name: "Spain" },
    { code: "SE", code3: "SWE", name: "Sweden" },
    { code: "GB", code3: "GBR", name: "United Kingdom" },
    { code: "US", code3: "USA", name: "United States" },
  ];

  function countryToCode(countryName) {
    let entry = countryListAllIsoData.find(
      (list) => list["name"] === countryName
    );
    return entry ? entry.code : "n/a";
  }

  function countryToCode3(countryName) {
    let entry = countryListAllIsoData.find(
      (list) => list["name"] === countryName
    );
    return entry ? entry.code3 : "n/a";
  }

  function codeToCountry(code) {
    let entry = countryListAllIsoData.find((list) => list["code"] === code);
    return entry ? entry.name : "n/a";
  }

  function code3ToCountry(code) {
    let entry = countryListAllIsoData.find((list) => list["code3"] === code);
    return entry ? entry.name : "n/a";
  }

  function code3ToCode(code) {
    let entry = countryListAllIsoData.find((list) => list["code3"] === code);
    return entry ? entry.code : "n/a";
  }

  function codeToCode3(code) {
    let entry = countryListAllIsoData.find((list) => list["code"] === code);
    return entry ? entry.code3 : "n/a";
  }

  // Expose to other modules.
  exports.countryToCode = countryToCode;
  exports.countryToCode3 = countryToCode3;
  exports.codeToCountry = codeToCountry;
  exports.code3ToCountry = code3ToCountry;
  exports.code3ToCode = code3ToCode;
  exports.codeToCode3 = codeToCode3;
});
