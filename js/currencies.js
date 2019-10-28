const currencies = {
  "AFN": {
    "description": "Afghanistan Afghani"
  },
  "ALL": {
    "description": "Albania Lek"
  },
  "DZD": {
    "description": "Algeria Dinar"
  },
  "AOA": {
    "description": "Angola Kwanza"
  },
  "ARS": {
    "description": "Argentina Peso"
  },
  "AMD": {
    "description": "Armenia Dram"
  },
  "AWG": {
    "description": "Aruba Florin"
  },
  "AUD": {
    "description": "Australia Dollar"
  },
  "AZN": {
    "description": "Azerbaijan New Manat"
  },
  "BSD": {
    "description": "Bahamas Dollar"
  },
  "BHD": {
    "description": "Bahrain Dinar"
  },
  "BDT": {
    "description": "Bangladesh Taka"
  },
  "BBD": {
    "description": "Barbados Dollar"
  },
  "BYR": {
    "description": "Belarus Ruble"
  },
  "BZD": {
    "description": "Belize Dollar"
  },
  "BMD": {
    "description": "Bermuda Dollar"
  },
  "BTN": {
    "description": "Bhutan Ngultrum"
  },
  "BOB": {
    "description": "Bolivia Boliviano"
  },
  "BAM": {
    "description": "Bosnia Mark"
  },
  "BWP": {
    "description": "Botswana Pula"
  },
  "BRL": {
    "description": "Brazil Real"
  },
  "GBP": {
    "description": "Great Britain Pound"
  },
  "BND": {
    "description": "Brunei Dollar"
  },
  "BGN": {
    "description": "Bulgaria Lev"
  },
  "BIF": {
    "description": "Burundi Franc"
  },
  "XOF": {
    "description": "CFA Franc BCEAO"
  },
  "XAF": {
    "description": "CFA Franc BEAC"
  },
  "XPF": {
    "description": "CFP Franc"
  },
  "KHR": {
    "description": "Cambodia Riel"
  },
  "CAD": {
    "description": "Canada Dollar"
  },
  "CVE": {
    "description": "Cape Verde Escudo"
  },
  "KYD": {
    "description": "Cayman Islands Dollar"
  },
  "CLP": {
    "description": "Chili Peso"
  },
  "CNY": {
    "description": "China Yuan/Renminbi"
  },
  "COP": {
    "description": "Colombia Peso"
  },
  "KMF": {
    "description": "Comoros Franc"
  },
  "CDF": {
    "description": "Congo Franc"
  },
  "CRC": {
    "description": "Costa Rica Colon"
  },
  "HRK": {
    "description": "Croatia Kuna"
  },
  "CUC": {
    "description": "Cuba Convertible Peso"
  },
  "CUP": {
    "description": "Cuba Peso"
  },
  "CZK": {
    "description": "Czech Koruna"
  },
  "DKK": {
    "description": "Denmark Krone"
  },
  "DJF": {
    "description": "Djibouti Franc"
  },
  "DOP": {
    "description": "Dominican Republich Peso"
  },
  "XCD": {
    "description": "East Caribbean Dollar"
  },
  "EGP": {
    "description": "Egypt Pound"
  },
  "SVC": {
    "description": "El Salvador Colon"
  },
  "ETB": {
    "description": "Ethiopia Birr"
  },
  "EUR": {
    "description": "Euro"
  },
  "FKP": {
    "description": "Falkland Islands Pound"
  },
  "FJD": {
    "description": "Fiji Dollar"
  },
  "GMD": {
    "description": "Gambia Dalasi"
  },
  "GEL": {
    "description": "Georgia Lari"
  },
  "GHS": {
    "description": "Ghana New Cedi"
  },
  "GIP": {
    "description": "Gibraltar Pound"
  },
  "GRD (EURO)": {
    "description": "Greece Drachma"
  },
  "GTQ": {
    "description": "Guatemala Quetzal"
  },
  "GNF": {
    "description": "Guinea Franc"
  },
  "GYD": {
    "description": "Guyana Dollar"
  },
  "HTG": {
    "description": "Haiti Gourde"
  },
  "HNL": {
    "description": "Honduras Lempira"
  },
  "HKD": {
    "description": "Hong Kong Dollar"
  },
  "HUF": {
    "description": "Hungary Forint"
  },
  "ISK": {
    "description": "Iceland Krona"
  },
  "INR": {
    "description": "India Rupee"
  },
  "IDR": {
    "description": "Indonesia Rupiah"
  },
  "IRR": {
    "description": "Iran Rial"
  },
  "IQD": {
    "description": "Iraq Dinar"
  },
  "ILS": {
    "description": "Israel New Shekel"
  },
  "JMD": {
    "description": "Jamaica Dollar"
  },
  "JPY": {
    "description": "Japan Yen"
  },
  "JOD": {
    "description": "Jordan Dinar"
  },
  "KZT": {
    "description": "Kazakhstan Tenge"
  },
  "KES": {
    "description": "Kenya Shilling"
  },
  "KWD": {
    "description": "Kuwait Dinar"
  },
  "KGS": {
    "description": "Kyrgyzstan Som"
  },
  "LAK": {
    "description": "Laos Kip"
  },
  "LBP": {
    "description": "Lebanon Pound"
  },
  "LSL": {
    "description": "Lesotho Loti"
  },
  "LRD": {
    "description": "Liberia Dollar"
  },
  "LYD": {
    "description": "Libya Dinar"
  },
  "MOP": {
    "description": "Macau Pataca"
  },
  "MKD": {
    "description": "Macedonia Denar"
  },
  "MGA": {
    "description": "Malagasy Ariary"
  },
  "MWK": {
    "description": "Malawi Kwacha"
  },
  "MYR": {
    "description": "Malaysia Ringgit"
  },
  "MVR": {
    "description": "Maldives Rufiyaa"
  },
  "MRO": {
    "description": "Mauritania Ouguiya"
  },
  "MUR": {
    "description": "Mauritius Rupee"
  },
  "MXN": {
    "description": "Mexico Peso"
  },
  "MDL": {
    "description": "Moldova Leu"
  },
  "MNT": {
    "description": "Mongolia Tugrik"
  },
  "MAD": {
    "description": "Morocco Dirham"
  },
  "MZN": {
    "description": "Mozambique New Metical"
  },
  "MMK": {
    "description": "Myanmar Kyat"
  },
  "ANG": {
    "description": "NL Antilles Guilder"
  },
  "NAD": {
    "description": "Namibia Dollar"
  },
  "NPR": {
    "description": "Nepal Rupee"
  },
  "NZD": {
    "description": "New Zealand Dollar"
  },
  "NIO": {
    "description": "Nicaragua Cordoba Oro"
  },
  "NGN": {
    "description": "Nigeria Naira"
  },
  "KPW": {
    "description": "North Korea Won"
  },
  "NOK": {
    "description": "Norway Kroner"
  },
  "OMR": {
    "description": "Oman Rial"
  },
  "PKR": {
    "description": "Pakistan Rupee"
  },
  "PAB": {
    "description": "Panama Balboa"
  },
  "PGK": {
    "description": "Papua New Guinea Kina"
  },
  "PYG": {
    "description": "Paraguay Guarani"
  },
  "PEN": {
    "description": "Peru Nuevo Sol"
  },
  "PHP": {
    "description": "Philippines Peso"
  },
  "PLN": {
    "description": "Poland Zloty"
  },
  "QAR": {
    "description": "Qatar Rial"
  },
  "RON": {
    "description": "Romania New Lei"
  },
  "RUB": {
    "description": "Russia Rouble"
  },
  "RWF": {
    "description": "Rwanda Franc"
  },
  "WST": {
    "description": "Samoa Tala"
  },
  "STD": {
    "description": "Sao Tome/Principe Dobra"
  },
  "SAR": {
    "description": "Saudi Arabia Riyal"
  },
  "RSD": {
    "description": "Serbia Dinar"
  },
  "SCR": {
    "description": "Seychelles Rupee"
  },
  "SLL": {
    "description": "Sierra Leone Leone"
  },
  "SGD": {
    "description": "Singapore Dollar"
  },
  "SBD": {
    "description": "Solomon Islands Dollar"
  },
  "SOS": {
    "description": "Somali Shilling"
  },
  "ZAR": {
    "description": "South Africa Rand"
  },
  "KRW": {
    "description": "South Korea Won"
  },
  "LKR": {
    "description": "Sri Lanka Rupee"
  },
  "SHP": {
    "description": "St Helena Pound"
  },
  "SDG": {
    "description": "Sudan Pound"
  },
  "SRD": {
    "description": "Suriname Dollar"
  },
  "SZL": {
    "description": "Swaziland Lilangeni"
  },
  "SEK": {
    "description": "Sweden Krona"
  },
  "CHF": {
    "description": "Switzerland Franc"
  },
  "SYP": {
    "description": "Syria Pound"
  },
  "TWD": {
    "description": "Taiwan Dollar"
  },
  "TZS": {
    "description": "Tanzania Shilling"
  },
  "THB": {
    "description": "Thailand Baht"
  },
  "TOP": {
    "description": "Tonga Pa'anga"
  },
  "TTD": {
    "description": "Trinidad/Tobago Dollar"
  },
  "TND": {
    "description": "Tunisia Dinar"
  },
  "TRY": {
    "description": "Turkish New Lira"
  },
  "TMM": {
    "description": "Turkmenistan Manat"
  },
  "USD": {
    "description": "USA Dollar"
  },
  "UGX": {
    "description": "Uganda Shilling"
  },
  "UAH": {
    "description": "Ukraine Hryvnia"
  },
  "UYU": {
    "description": "Uruguay Peso"
  },
  "AED": {
    "description": "United Arab Emirates Dirham"
  },
  "VUV": {
    "description": "Vanuatu Vatu"
  },
  "VEB": {
    "description": "Venezuela Bolivar"
  },
  "VND": {
    "description": "Vietnam Dong"
  },
  "YER": {
    "description": "Yemen Rial"
  },
  "ZMK": {
    "description": "Zambia Kwacha"
  },
  "ZWD": {
    "description": "Zimbabwe Dollar"
  }
};
