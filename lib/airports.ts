// credit: https://github.com/jbrooksuk/JSON-Airports & https://github.com/mwgg/Airports

interface Airport {
  iata: string;
  name: string | null;
  city?: string;
}

export const airports: Airport[] = [
  {
    iata: "UTK",
    name: "Utirik Airport",
  },
  {
    iata: "FIV",
    name: "Five Finger CG Heliport",
  },
  {
    iata: "FAK",
    name: "False Island Seaplane Base",
  },
  {
    iata: "BWS",
    name: "Blaine Municipal Airport",
  },
  {
    iata: "WKK",
    name: "Aleknagik / New Airport",
  },
  {
    iata: "TSS",
    name: "East 34th Street Heliport",
  },
  {
    iata: "FOB",
    name: "Fort Bragg Airport",
    city: "Fort Bragg",
  },
  {
    iata: "ABP",
    name: "Atkamba Airport",
  },
  {
    iata: "ALV",
    name: "Andorra la Vella Heliport",
  },
  {
    iata: "ADC",
    name: "Andakombe Airport",
    city: "Andekombe",
  },
  {
    iata: "TJP",
    name: "Areopuerto Internacional Michael Gonzalez",
  },
  {
    iata: "AEE",
    name: "Adareil Airport",
  },
  {
    iata: "AEI",
    name: "Algeciras Heliport",
  },
  {
    iata: "AEK",
    name: "Aseki Airport",
  },
  {
    iata: "OLR",
    name: "Salerno Landing Zone Airport",
  },
  {
    iata: "AFR",
    name: "Afore Airstrip",
  },
  {
    iata: "AFT",
    name: "Afutara Aerodrome",
    city: "Bila",
  },
  {
    iata: "ATD",
    name: "Uru Harbour Airport",
    city: "Atoifi",
  },
  {
    iata: "VEV",
    name: "Barakoma Airport",
    city: "Barakoma",
  },
  {
    iata: "GEF",
    name: "Geva Airport",
    city: "Liangia",
  },
  {
    iata: "AGG",
    name: "Angoram Airport",
  },
  {
    iata: "AKS",
    name: "Auki Airport",
    city: "Auki",
  },
  {
    iata: "BAS",
    name: "Ballalae Airport",
    city: "Ballalae",
  },
  {
    iata: "FRE",
    name: "Fera/Maringe Airport",
    city: "Fera Island",
  },
  {
    iata: "HIR",
    name: "Honiara International Airport",
    city: "Honiara",
  },
  {
    iata: "MBU",
    name: "Babanakira Airport",
    city: "Mbambanakira",
  },
  {
    iata: "IRA",
    name: "Ngorangora Airport",
    city: "Kirakira",
  },
  {
    iata: "SCZ",
    name: "Santa Cruz/Graciosa Bay/Luova Airport",
    city: "Santa Cruz/Graciosa Bay/Luova",
  },
  {
    iata: "MUA",
    name: "Munda Airport",
    city: "",
  },
  {
    iata: "GZO",
    name: "Nusatupe Airport",
    city: "Gizo",
  },
  {
    iata: "MNY",
    name: "Mono Airport",
    city: "Stirling Island",
  },
  {
    iata: "PRS",
    name: "Parasi Airport",
    city: "Parasi",
  },
  {
    iata: "OTV",
    name: "Ontong Java Atoll Airstrip",
  },
  {
    iata: "RNL",
    name: "Rennell/Tingoa Airport",
    city: "Rennell Island",
  },
  {
    iata: "EGM",
    name: "Sege Airport",
    city: "Sege",
  },
  {
    iata: "RUS",
    name: "Marau Airport",
    city: "Marau",
  },
  {
    iata: "VAO",
    name: "Suavanao Airport",
    city: "Suavanao",
  },
  {
    iata: "AGK",
    name: "Kagua Airport",
  },
  {
    iata: "KGE",
    name: "Kagau Island Airport",
    city: "Kagau Island",
  },
  {
    iata: "AGL",
    name: "Wanigela Airport",
    city: "",
  },
  {
    iata: "RIN",
    name: "Ringi Cove Airport",
    city: "Ringi Cove",
  },
  {
    iata: "RBV",
    name: "Ramata Airport",
    city: "Ramata",
  },
  {
    iata: "AHT",
    name: "Amchitka Army Airfield",
  },
  {
    iata: "AHY",
    name: "Ambatolhy Airport",
  },
  {
    iata: "AIE",
    name: "Aiome Airport",
    city: "Aiome",
  },
  {
    iata: "AIH",
    name: "Aiambak Airport",
  },
  {
    iata: "AIP",
    name: "Ailinglaplap Airport",
    city: "",
  },
  {
    iata: "AOS",
    name: "Amook Bay Seaplane Base",
  },
  {
    iata: "AKM",
    name: "Zakuoma Airport",
  },
  {
    iata: "ALZ",
    name: "Alitak Seaplane Base",
  },
  {
    iata: "AMC",
    name: null,
    city: "Am Timan",
  },
  {
    iata: "AME",
    name: "Alto Molocue Airport",
  },
  {
    iata: "AMF",
    name: "AMA Airport",
  },
  {
    iata: "AMU",
    name: "Amanab Airport",
    city: "Amanab",
  },
  {
    iata: "AMY",
    name: "Ambatomainty Airport",
  },
  {
    iata: "ANH",
    name: "Anuha Island Resort Airport",
  },
  {
    iata: "INU",
    name: "Nauru International Airport",
    city: "Yaren District",
  },
  {
    iata: "ANL",
    name: "Andulo Airport",
  },
  {
    iata: "CNZ",
    name: "Cangamba Airport",
  },
  {
    iata: "DRC",
    name: "Dirico Airport",
  },
  {
    iata: "GGC",
    name: "Lumbala Airport",
  },
  {
    iata: "JMB",
    name: "Jamba Airport",
  },
  {
    iata: "KNP",
    name: "Capanda Airport",
  },
  {
    iata: "NDF",
    name: "Ndalatandos Airport",
  },
  {
    iata: "AOB",
    name: "Annanberg Airport",
  },
  {
    iata: "APP",
    name: "Asapa Airport",
  },
  {
    iata: "APR",
    name: "April River Airport",
  },
  {
    iata: "AQY",
    name: "Girdwood Airport",
  },
  {
    iata: "QRF",
    name: "Bragado Airport",
  },
  {
    iata: "CSZ",
    name: "Brigadier Hector Ruiz Airport",
    city: "Coronel Suarez",
  },
  {
    iata: "CVI",
    name: "Caleta Olivia Airport",
  },
  {
    iata: "CNT",
    name: "Charata Airport",
  },
  {
    iata: "VGS",
    name: "General Villegas Airport",
  },
  {
    iata: "LMD",
    name: "Los Menucos Airport",
  },
  {
    iata: "SZQ",
    name: null,
  },
  {
    iata: "VCF",
    name: "Valcheta Airport",
  },
  {
    iata: "VME",
    name: "Villa Mercedes Airport",
    city: "Villa Reynolds",
  },
  {
    iata: "NCJ",
    name: "Sunchales Aeroclub Airport",
    city: "Sunchales",
  },
  {
    iata: "CPG",
    name: "Carmen De Patagones Airport",
  },
  {
    iata: "PRQ",
    name: "Termal Airport",
    city: "Presidencia Roque Saenz Pena",
  },
  {
    iata: "ARP",
    name: "Aragip Airport",
  },
  {
    iata: "TAV",
    name: "Tau Airport",
  },
  {
    iata: "ASZ",
    name: "Asirim Airport",
  },
  {
    iata: "ATP",
    name: "Aitape Airport",
    city: "Aitape",
  },
  {
    iata: "AGW",
    name: "Agnew Airport",
  },
  {
    iata: "AYD",
    name: "Alroy Downs Airport",
  },
  {
    iata: "BCK",
    name: "Bolwarra Airport",
  },
  {
    iata: "BFC",
    name: "Bloomfield Airport",
  },
  {
    iata: "BVW",
    name: "Batavia Downs Airport",
  },
  {
    iata: "BYX",
    name: "Baniyala Airport",
  },
  {
    iata: "COB",
    name: "Coolibah Airport",
  },
  {
    iata: "CQP",
    name: "Cape Flattery Airport",
  },
  {
    iata: "CRJ",
    name: "Coorabie Airport",
  },
  {
    iata: "CRY",
    name: "Carlton Hill Airport",
  },
  {
    iata: "CSD",
    name: "Cresswell Downs Airport",
  },
  {
    iata: "CTR",
    name: "Cattle Creek Airport",
  },
  {
    iata: "DYM",
    name: "Diamantina Lakes Airport",
  },
  {
    iata: "EDD",
    name: "Erldunda Airport",
  },
  {
    iata: "EKD",
    name: "Elkedra Airport",
  },
  {
    iata: "HAT",
    name: "Heathlands Airport",
    city: "",
  },
  {
    iata: "HIG",
    name: "Highbury Airport",
    city: "",
  },
  {
    iata: "HIS",
    name: "Hayman Island Resort Seaplane Base",
  },
  {
    iata: "HLV",
    name: "Helenvale Airport",
  },
  {
    iata: "KBD",
    name: "Kimberley Downs Airport",
  },
  {
    iata: "KGR",
    name: "Kulgera Airport",
  },
  {
    iata: "KOH",
    name: "Koolatah Airport",
    city: "",
  },
  {
    iata: "KYF",
    name: "Yeelirrie Airport",
    city: "",
  },
  {
    iata: "LIB",
    name: "Limbunya Airport",
  },
  {
    iata: "MNW",
    name: "Macdonald Downs Airport",
    city: "",
  },
  {
    iata: "MUP",
    name: "Mulga Park Airport",
    city: "",
  },
  {
    iata: "MWY",
    name: "Miranda Downs Airport",
    city: "",
  },
  {
    iata: "MYO",
    name: "Camballin Airport",
    city: "",
  },
  {
    iata: "NKB",
    name: "Noonkanbah Airport",
  },
  {
    iata: "OKB",
    name: "Orchid Beach Airport",
  },
  {
    iata: "PEP",
    name: "Peppimenarti Airport",
  },
  {
    iata: "RDA",
    name: "Rockhampton Downs Airport",
  },
  {
    iata: "SSK",
    name: "Sturt Creek Airport",
  },
  {
    iata: "SWB",
    name: "Shaw River Airport",
  },
  {
    iata: "TPR",
    name: "Tom Price Airport",
    city: "Tom Price",
  },
  {
    iata: "TWP",
    name: "Torwood Airport",
  },
  {
    iata: "WRW",
    name: "Warrawagine Airport",
    city: "",
  },
  {
    iata: "WSY",
    name: "Whitsunday Airstrip",
  },
  {
    iata: "ZVG",
    name: "Springvale Airport",
  },
  {
    iata: "AUI",
    name: "Aua Island Airport",
  },
  {
    iata: "AUJ",
    name: "Ambunti Airport",
    city: "Ambunti",
  },
  {
    iata: "AUP",
    name: "Agaun Airport",
  },
  {
    iata: "AUV",
    name: "Aumo Airport",
  },
  {
    iata: "BUA",
    name: "Buka Airport",
    city: "Buka Island",
  },
  {
    iata: "CMU",
    name: "Chimbu Airport",
    city: "Kundiawa",
  },
  {
    iata: "DAU",
    name: "Daru Airport",
    city: "Daru",
  },
  {
    iata: "GKA",
    name: "Goroka Airport",
    city: "Goronka",
  },
  {
    iata: "GUR",
    name: "Gurney Airport",
    city: "Gurney",
  },
  {
    iata: "PNP",
    name: "Girua Airport",
    city: "Popondetta",
  },
  {
    iata: "HKN",
    name: "Kimbe Airport",
    city: "Hoskins",
  },
  {
    iata: "LSA",
    name: "Losuia Airport",
    city: "Losuia",
  },
  {
    iata: "UNG",
    name: "Kiunga Airport",
    city: "Kiunga",
  },
  {
    iata: "KRI",
    name: "Kikori Airport",
    city: "Kikori",
  },
  {
    iata: "KMA",
    name: "Kerema Airport",
    city: "Kerema",
  },
  {
    iata: "KVG",
    name: "Kavieng Airport",
    city: "Kavieng",
  },
  {
    iata: "LNV",
    name: "Londolovit Airport",
    city: "Londolovit",
  },
  {
    iata: "MAG",
    name: "Madang Airport",
    city: "Madang",
  },
  {
    iata: "HGU",
    name: "Mount Hagen Kagamuga Airport",
    city: "Mount Hagen",
  },
  {
    iata: "MDU",
    name: "Mendi Airport",
    city: "",
  },
  {
    iata: "MAS",
    name: "Momote Airport",
    city: "",
  },
  {
    iata: "MXH",
    name: "Moro Airport",
    city: "Moro",
  },
  {
    iata: "MIS",
    name: "Misima Island Airport",
    city: "Misima Island",
  },
  {
    iata: "LAE",
    name: "Lae Nadzab Airport",
    city: "Nadzab",
  },
  {
    iata: "POM",
    name: "Port Moresby Jacksons International Airport",
    city: "Port Moresby",
  },
  {
    iata: "TIZ",
    name: "Tari Airport",
    city: "Tari",
  },
  {
    iata: "TBG",
    name: "Tabubil Airport",
    city: "Tabubil",
  },
  {
    iata: "RAB",
    name: "Tokua Airport",
    city: "Tokua",
  },
  {
    iata: "AYU",
    name: "Aiyura Airport",
    city: "Aiyura Valley",
  },
  {
    iata: "VAI",
    name: "Vanimo Airport",
    city: "",
  },
  {
    iata: "WBM",
    name: "Wapenamanda Airport",
    city: "",
  },
  {
    iata: "WWK",
    name: "Wewak International Airport",
    city: "Wewak",
  },
  {
    iata: "AYY",
    name: "Arugam Bay SPB",
  },
  {
    iata: "AYZ",
    name: "Zahn's Airport",
  },
  {
    iata: "AZB",
    name: "Amazon Bay Airport",
  },
  {
    iata: "BCW",
    name: "Benguera Island Airport",
  },
  {
    iata: "HKV",
    name: "Haskovo Airport",
    city: "Haskovo",
  },
  {
    iata: "JAM",
    name: "Bezmer Air Base",
    city: "Yambol",
  },
  {
    iata: "SZR",
    name: "Stara Zagora Airport",
    city: "Stara Zagora",
  },
  {
    iata: "JEG",
    name: "Aasiaat Airport",
    city: "Aasiaat",
  },
  {
    iata: "AAP",
    name: "Aappilattoq (Qaasuitsup) Heliport",
    city: "Samarinda",
  },
  {
    iata: "AGM",
    name: "Tasiilaq Heliport",
  },
  {
    iata: "LLU",
    name: "Alluitsup Paa Heliport",
  },
  {
    iata: "QUV",
    name: "Aappilattoq (Kujalleq) Heliport",
  },
  {
    iata: "QUW",
    name: "Ammassivik Heliport",
  },
  {
    iata: "QGQ",
    name: "Attu Heliport",
  },
  {
    iata: "UAK",
    name: "Narsarsuaq Airport",
    city: "Narsarsuaq",
  },
  {
    iata: "JCH",
    name: "Qasigiannguit Heliport",
  },
  {
    iata: "CNP",
    name: "Neerlerit Inaat Airport",
    city: "Neerlerit Inaat",
  },
  {
    iata: "QFG",
    name: "Eqalugaarsuit Heliport",
  },
  {
    iata: "QFN",
    name: "Narsaq Kujalleq Heliport",
  },
  {
    iata: "JFR",
    name: "Paamiut Heliport",
    city: "Paamiut",
  },
  {
    iata: "GOH",
    name: "Godthaab / Nuuk Airport",
    city: "Nuuk",
  },
  {
    iata: "JGO",
    name: "Qeqertarsuaq Heliport",
  },
  {
    iata: "IKE",
    name: "Ikerasak Heliport",
  },
  {
    iata: "QFI",
    name: "Iginniarfik",
  },
  {
    iata: "XIQ",
    name: "Ilimanaq Heliport",
  },
  {
    iata: "INN",
    name: "Innarsuit Heliport",
    city: "Innsbruck",
  },
  {
    iata: "ISO",
    name: "Isortoq Heliport",
    city: "Kinston",
  },
  {
    iata: "QJI",
    name: "Ikamiut Heliport",
  },
  {
    iata: "JJU",
    name: "Qaqortoq Heliport",
  },
  {
    iata: "JAV",
    name: "Ilulissat Airport",
    city: "Ilulissat",
  },
  {
    iata: "QPW",
    name: "Kangaatsiaq Heliport",
  },
  {
    iata: "KUS",
    name: "Kulusuk Airport",
    city: "Kulusuk",
  },
  {
    iata: "UPK",
    name: "Upernavik Kujalleq Heliport",
  },
  {
    iata: "KMT",
    name: "Kuummiut Heliport",
  },
  {
    iata: "KLQ",
    name: "Kullorsuaq Heliport",
    city: "Keluang-Sumatra Island",
  },
  {
    iata: "KAQ",
    name: "Kangersuatsiaq Heliport",
  },
  {
    iata: "QJE",
    name: "Kitsissuarsuit Heliport",
  },
  {
    iata: "ILL",
    name: "Illorsuit Heliport",
    city: "Willmar",
  },
  {
    iata: "MOR",
    name: "Moriusaq Heliport",
    city: "Morristown",
  },
  {
    iata: "JSU",
    name: "Maniitsoq Airport",
    city: "Maniitsoq",
  },
  {
    iata: "QMK",
    name: "Niaqornaarsuk Heliport",
  },
  {
    iata: "JNN",
    name: "Nanortalik Heliport",
  },
  {
    iata: "NUG",
    name: "Nuugaatsiaq Heliport",
  },
  {
    iata: "JNS",
    name: "Narsaq Heliport",
  },
  {
    iata: "NIA",
    name: "Niaqornat Heliport",
    city: "Nimba",
  },
  {
    iata: "NUS",
    name: "Nuussuaq Heliport",
    city: "Norsup",
  },
  {
    iata: "JFR",
    name: "Paamiut Airport",
    city: "Paamiut",
  },
  {
    iata: "QQT",
    name: "Qeqertaq Heliport",
  },
  {
    iata: "NAQ",
    name: "Qaanaaq Airport",
    city: "Qaanaaq",
  },
  {
    iata: "OBY",
    name: "Ittoqqortoormiit Heliport",
  },
  {
    iata: "SFJ",
    name: "Kangerlussuaq Airport",
    city: "Kangerlussuaq",
  },
  {
    iata: "SMG",
    name: "Sermiligaaq Heliport",
    city: "Santa Maria",
  },
  {
    iata: "SIO",
    name: "Siorapaluk Heliport",
    city: "",
  },
  {
    iata: "QUP",
    name: "Saqqaq Heliport",
  },
  {
    iata: "JHS",
    name: "Sisimiut Airport",
    city: "Sisimiut",
  },
  {
    iata: "SAA",
    name: "Saattut Heliport",
    city: "Saratoga",
  },
  {
    iata: "SAV",
    name: "Savissivik Heliport",
    city: "Savannah",
  },
  {
    iata: "THU",
    name: "Thule Air Base",
    city: "Thule",
  },
  {
    iata: "TNT",
    name: "Tiniteqilaaq Heliport",
    city: "Miami",
  },
  {
    iata: "JUV",
    name: "Upernavik Airport",
    city: "Upernavik",
  },
  {
    iata: "UMD",
    name: "Uummannaq Heliport",
  },
  {
    iata: "JQA",
    name: "Qaarsut Airport",
    city: "Uummannaq",
  },
  {
    iata: "UKK",
    name: "Ukkusissat Heliport",
    city: "Ust Kamenogorsk",
  },
  {
    iata: "BHL",
    name: null,
  },
  {
    iata: "AEY",
    name: "Akureyri Airport",
    city: "Akureyri",
  },
  {
    iata: "BIU",
    name: "Bildudalur Airport",
    city: "Bildudalur",
  },
  {
    iata: "BGJ",
    name: null,
    city: "Borgarfjordur eystri",
  },
  {
    iata: "BJD",
    name: null,
    city: "Bakkafjordur",
  },
  {
    iata: "BLO",
    name: "Hjaltabakki Airport",
    city: "Blonduos",
  },
  {
    iata: "BQD",
    name: null,
    city: "Budardalur",
  },
  {
    iata: "BXV",
    name: null,
    city: "Breiddalsvik",
  },
  {
    iata: "DJU",
    name: null,
    city: "Djupivogur",
  },
  {
    iata: "EGS",
    name: null,
    city: "Egilsstadir",
  },
  {
    iata: "FAS",
    name: null,
    city: "Faskrudsfjordur",
  },
  {
    iata: "FAG",
    name: null,
    city: "Fagurholsmyri",
  },
  {
    iata: "GUU",
    name: null,
    city: "Grundarfjordur",
  },
  {
    iata: "GJR",
    name: null,
    city: "Gjogur",
  },
  {
    iata: "GRY",
    name: null,
    city: "Grimsey",
  },
  {
    iata: "HVK",
    name: null,
    city: "Holmavik",
  },
  {
    iata: "HFN",
    name: "Hornafjordur Airport",
    city: "Hornafjordur",
  },
  {
    iata: "FLI",
    name: "Holt Airport",
    city: "Flateyri",
  },
  {
    iata: "HZK",
    name: "Husavik Airport",
    city: "Husavik",
  },
  {
    iata: "HVM",
    name: null,
    city: "Hvammstangi",
  },
  {
    iata: "HLO",
    name: null,
    city: "Onundarfjordur",
  },
  {
    iata: "IFJ",
    name: null,
    city: "Isafjordur",
  },
  {
    iata: "KEF",
    name: "Keflavik International Airport",
    city: "Reykjavik",
  },
  {
    iata: "OPA",
    name: null,
    city: "Kopasker",
  },
  {
    iata: "SAK",
    name: null,
    city: "Saudarkrokur",
  },
  {
    iata: "NOR",
    name: null,
    city: "Nordfjordur",
  },
  {
    iata: "OFJ",
    name: null,
    city: "Olafsfjordur",
  },
  {
    iata: "PFJ",
    name: "Patreksfjordur Airport",
    city: "Patreksfjordur",
  },
  {
    iata: "RHA",
    name: null,
    city: "Reykholar",
  },
  {
    iata: "OLI",
    name: "Rif Airport",
    city: "Rif",
  },
  {
    iata: "RFN",
    name: null,
    city: "Raufarhofn",
  },
  {
    iata: "REK",
    name: "Reykjavik Airport",
  },
  {
    iata: "MVA",
    name: null,
    city: "Myvatn",
  },
  {
    iata: "SIJ",
    name: "Siglufjordur Airport",
    city: "Siglufjordur",
  },
  {
    iata: "SYK",
    name: null,
    city: "Stykkisholmur",
  },
  {
    iata: "TEY",
    name: null,
    city: "Tingeyri",
  },
  {
    iata: "THO",
    name: null,
    city: "Thorshofn",
  },
  {
    iata: "THO",
    name: "Thorshofn Airport",
    city: "Thorshofn",
  },
  {
    iata: "VEY",
    name: "Vestmannaeyjar Airport",
    city: "Vestmannaeyjar",
  },
  {
    iata: "VPN",
    name: null,
    city: "Vopnafjordur",
  },
  {
    iata: "BJE",
    name: "Baleela Airport",
  },
  {
    iata: "BJQ",
    name: "Bahja Airport",
  },
  {
    iata: "PRN",
    name: null,
    city: "Prishtina",
  },
  {
    iata: "BLM",
    name: "Bahia De Los Angelos South",
    city: "Belmar/Farmingdale",
  },
  {
    iata: "BMQ",
    name: "Bamburi Airport",
  },
  {
    iata: "RBQ",
    name: "Rurenabaque Airport",
    city: "Rurenabaque",
  },
  {
    iata: "BVL",
    name: "Baures Airport",
    city: "Baures",
  },
  {
    iata: "TUZ",
    name: null,
  },
  {
    iata: "ALT",
    name: "Alenquer Airport",
  },
  {
    iata: "SWM",
    name: "Suia-Missu Airport",
  },
  {
    iata: "NSB",
    name: "Bimini North Seaplane Base",
  },
  {
    iata: "HUK",
    name: "Hukuntsi Airport",
  },
  {
    iata: "BYV",
    name: "Beira Lake Seaplane Base",
  },
  {
    iata: "BCV",
    name: "Belmopan Airport",
  },
  {
    iata: "BGK",
    name: "Big Creek Airport",
  },
  {
    iata: "CUK",
    name: "Caye Caulker Airport",
  },
  {
    iata: "CYC",
    name: "Caye Chapel Airport",
  },
  {
    iata: "CZH",
    name: "Corozal Municipal Airport",
  },
  {
    iata: "DGA",
    name: "Dangriga Airport",
  },
  {
    iata: "INB",
    name: "Independence Airport",
  },
  {
    iata: "MDB",
    name: "Melinda Airport",
  },
  {
    iata: "ORZ",
    name: "Orange Walk Airport",
  },
  {
    iata: "PLJ",
    name: "Placencia Airport",
  },
  {
    iata: "PND",
    name: "Punta Gorda Airport",
  },
  {
    iata: "SJX",
    name: "Sartaneja Airport",
  },
  {
    iata: "SPR",
    name: "San Pedro Airport",
  },
  {
    iata: "SQS",
    name: "Matthew Spain Airport",
  },
  {
    iata: "STU",
    name: "Santa Cruz Airport",
  },
  {
    iata: "SVK",
    name: "Silver Creek Airport",
  },
  {
    iata: "TZA",
    name: "Belize City Municipal Airport",
  },
  {
    iata: "BZB",
    name: "Bazaruto Island Airport",
  },
  {
    iata: "YUJ",
    name: "Lady Franklin Point Airport",
  },
  {
    iata: "YWO",
    name: "Lupin Airport",
  },
  {
    iata: "YTJ",
    name: "Terrace Bay Airport",
  },
  {
    iata: "YMV",
    name: "Mary River Aerodrome",
  },
  {
    iata: "YBW",
    name: "Bedwell Harbour Seaplane Base",
  },
  {
    iata: "ZNA",
    name: "Nanaimo Harbour Water Airport",
  },
  {
    iata: "YZZ",
    name: "Trail Airport",
    city: "Trail",
  },
  {
    iata: "YWS",
    name: "Whistler/Green Lake Water Aerodrome",
  },
  {
    iata: "YPT",
    name: "Pender Harbour Seaplane Base",
  },
  {
    iata: "YAA",
    name: "Anahim Lake Airport",
    city: "Anahim Lake",
  },
  {
    iata: "JHL",
    name: "Fort MacKay/Albian Aerodrome",
    city: "Albian Village",
  },
  {
    iata: "YMU",
    name: "Mansons Landing Seaplane Base",
  },
  {
    iata: "YWM",
    name: "Williams Harbour Airport",
    city: "Williams Harbour",
  },
  {
    iata: "YFX",
    name: "St. Lewis (Fox Harbour) Airport",
    city: "St. Lewis",
  },
  {
    iata: "YHA",
    name: "Port Hope Simpson Airport",
    city: "Port Hope Simpson",
  },
  {
    iata: "YRG",
    name: "Rigolet Airport",
    city: "Rigolet",
  },
  {
    iata: "CDK",
    name: "George T Lewis Airport",
    city: "Cedar Key",
  },
  {
    iata: "YCK",
    name: "Colville Lake Airport",
    city: "Colville Lake",
  },
  {
    iata: "EE7",
    name: "Edmonton/Cooking Lake Seaplane Base",
  },
  {
    iata: "YLE",
    name: null,
    city: "Whati",
  },
  {
    iata: "NML",
    name: "Fort McMurray / Mildred Lake Airport",
    city: "Fort McMurray",
  },
  {
    iata: "DAS",
    name: "Great Bear Lake Airport",
    city: "Great Bear Lake",
  },
  {
    iata: "YFI",
    name: "Fort Mackay / Firebag",
    city: "Suncor Energy Site",
  },
  {
    iata: "OKG",
    name: "Okoyo Airport",
  },
  {
    iata: "CGA",
    name: "Craig Seaplane Base",
  },
  {
    iata: "SUR",
    name: "Summer Beaver Airport",
    city: "Summer Beaver",
  },
  {
    iata: "YAX",
    name: "Wapekeka Airport",
    city: "Angling Lake",
  },
  {
    iata: "WNN",
    name: "Wunnumin Lake Airport",
    city: "Wunnumin Lake",
  },
  {
    iata: "YNO",
    name: "North Spirit Lake Airport",
    city: "North Spirit Lake",
  },
  {
    iata: "CLG",
    name: "Coalinga Airport",
  },
  {
    iata: "OHE",
    name: "Gu-Lian Airport",
    city: "Mohe",
  },
  {
    iata: "FUO",
    name: "Foshan Shadi Airport",
    city: "Foshan",
  },
  {
    iata: "HUZ",
    name: "Huizhou Airport",
    city: "Huizhou",
  },
  {
    iata: "JGS",
    name: "Jinggangshan Airport",
    city: "Ji'an",
  },
  {
    iata: "AEB",
    name: "Tian Yang Air Base",
    city: "Baise",
  },
  {
    iata: "AAT",
    name: "Altay Air Base",
    city: "Altay",
  },
  {
    iata: "YZY",
    name: "Zhangye Southeast Air Base",
    city: "Mackenzie",
  },
  {
    iata: "DDG",
    name: "Dandong Airport",
    city: "Dandong",
  },
  {
    iata: "NTG",
    name: "Nantong Airport",
    city: "Nantong",
  },
  {
    iata: "XBE",
    name: "Bearskin Lake Airport",
    city: "Bearskin Lake",
  },
  {
    iata: "KIF",
    name: "Kingfisher Lake Airport",
    city: "Kingfisher Lake",
  },
  {
    iata: "YOG",
    name: "Ogoki Post Airport",
    city: "Ogoki Post",
  },
  {
    iata: "PRM",
    name: "Proma Heliport",
    city: "",
  },
  {
    iata: "ISG",
    name: "Isa Giron Heliport",
    city: "Ishigaki",
  },
  {
    iata: "API",
    name: "Apiay Airport",
    city: "Apiay",
  },
  {
    iata: "APO",
    name: null,
    city: "Carepa",
  },
  {
    iata: "ARQ",
    name: "El Troncal Airport",
  },
  {
    iata: "LCR",
    name: "La Chorrera Airport",
  },
  {
    iata: "SNT",
    name: "Las Cruces Airport",
  },
  {
    iata: "TCD",
    name: null,
  },
  {
    iata: "YEB",
    name: "Bar River Airport",
    city: "Bar River",
  },
  {
    iata: "YHP",
    name: "Poplar Hill Airport",
    city: "Poplar Hill",
  },
  {
    iata: "YNX",
    name: "Snap Lake Airport",
    city: "Snap Lake",
  },
  {
    iata: "YKU",
    name: "Chisasibi Airport",
    city: "Chisasibi",
  },
  {
    iata: "ZTB",
    name: null,
    city: "Tete-a-la-Baleine",
  },
  {
    iata: "YAU",
    name: "Donaldson Airport",
    city: "Kattiniq",
  },
  {
    iata: "TR7",
    name: "Ottawa / Rockcliffe Seaplane Base",
  },
  {
    iata: "ZLT",
    name: null,
    city: "La Tabatiere",
  },
  {
    iata: "PST",
    name: "Preston Airport",
  },
  {
    iata: "GEC",
    name: null,
  },
  {
    iata: "NIC",
    name: "Nicosia International Airport",
  },
  {
    iata: "YAC",
    name: "Cat Lake Airport",
    city: "Cat Lake",
  },
  {
    iata: "YAG",
    name: "Fort Frances Municipal Airport",
    city: "Fort Frances",
  },
  {
    iata: "YAH",
    name: "La Grande-4 Airport",
    city: "La Grande-4",
  },
  {
    iata: "YAL",
    name: "Alert Bay Airport",
    city: "Alert Bay",
  },
  {
    iata: "YAM",
    name: "Sault Ste Marie Airport",
    city: "Sault Ste Marie",
  },
  {
    iata: "XKS",
    name: "Kasabonika Airport",
    city: "Kasabonika",
  },
  {
    iata: "YKG",
    name: "Kangirsuk Airport",
    city: "Kangirsuk",
  },
  {
    iata: "YAT",
    name: "Attawapiskat Airport",
    city: "Attawapiskat",
  },
  {
    iata: "YAV",
    name: "Winnipeg / St. Andrews Airport",
  },
  {
    iata: "YAW",
    name: "Halifax / CFB Shearwater Heliport",
    city: "Halifax",
  },
  {
    iata: "YAX",
    name: "Lac Du Bonnet Airport",
    city: "Angling Lake",
  },
  {
    iata: "YAY",
    name: "St Anthony Airport",
    city: "St. Anthony",
  },
  {
    iata: "YAZ",
    name: "Tofino / Long Beach Airport",
    city: "Tofino",
  },
  {
    iata: "YBB",
    name: "Kugaaruk Airport",
    city: "Kugaaruk",
  },
  {
    iata: "YBC",
    name: "Baie Comeau Airport",
    city: "Baie-Comeau",
  },
  {
    iata: "QBC",
    name: "Bella Coola Airport",
    city: "Bella Coola",
  },
  {
    iata: "YBE",
    name: "Uranium City Airport",
    city: "Uranium City",
  },
  {
    iata: "YBY",
    name: "Bonnyville Airport",
    city: "Bonnyville",
  },
  {
    iata: "YBG",
    name: "CFB Bagotville",
    city: "Bagotville",
  },
  {
    iata: "YBK",
    name: "Baker Lake Airport",
    city: "Baker Lake",
  },
  {
    iata: "YBL",
    name: "Campbell River Airport",
    city: "Campbell River",
  },
  {
    iata: "YBN",
    name: "CFB Borden",
  },
  {
    iata: "XTL",
    name: "Tadoule Lake Airport",
    city: "Tadoule Lake",
  },
  {
    iata: "YBR",
    name: "Brandon Municipal Airport",
    city: "Brandon",
  },
  {
    iata: "YBT",
    name: "Brochet Airport",
    city: "Brochet",
  },
  {
    iata: "YBV",
    name: "Berens River Airport",
    city: "Berens River",
  },
  {
    iata: "YBX",
    name: "Lourdes de Blanc Sablon Airport",
    city: "Lourdes-De-Blanc-Sablon",
  },
  {
    iata: "YRF",
    name: "Cartwright Airport",
    city: "Cartwright",
  },
  {
    iata: "YCB",
    name: "Cambridge Bay Airport",
    city: "Cambridge Bay",
  },
  {
    iata: "YCC",
    name: "Cornwall Regional Airport",
    city: "Cornwall",
  },
  {
    iata: "YCD",
    name: "Nanaimo Airport",
    city: "Nanaimo",
  },
  {
    iata: "YCE",
    name: "James T. Field Memorial Aerodrome",
    city: "Centralia",
  },
  {
    iata: "YCG",
    name: "Castlegar/West Kootenay Regional Airport",
    city: "Castlegar",
  },
  {
    iata: "YCH",
    name: "Miramichi Airport",
    city: "Miramichi",
  },
  {
    iata: "YCL",
    name: "Charlo Airport",
    city: "Charlo",
  },
  {
    iata: "YCN",
    name: "Cochrane Airport",
    city: "Cochrane",
  },
  {
    iata: "YCO",
    name: "Kugluktuk Airport",
    city: "Kugluktuk",
  },
  {
    iata: "YCQ",
    name: "Chetwynd Airport",
    city: "Chetwynd",
  },
  {
    iata: "YCR",
    name: "Cross Lake (Charlie Sinclair Memorial) Airport",
    city: "Cross Lake",
  },
  {
    iata: "YCS",
    name: "Chesterfield Inlet Airport",
    city: "Chesterfield Inlet",
  },
  {
    iata: "YCV",
    name: "Cartierville Airport",
  },
  {
    iata: "YCX",
    name: "CFB Gagetown Heliport",
  },
  {
    iata: "YCY",
    name: "Clyde River Airport",
    city: "Clyde River",
  },
  {
    iata: "YCZ",
    name: "Fairmont Hot Springs Airport",
    city: "Fairmont Hot Springs",
  },
  {
    iata: "YDA",
    name: "Dawson City Airport",
    city: "Dawson City",
  },
  {
    iata: "YDB",
    name: "Burwash Airport",
    city: "Burwash",
  },
  {
    iata: "YDF",
    name: "Deer Lake Airport",
    city: "Deer Lake",
  },
  {
    iata: "YDM",
    name: "Ross River Airport",
    city: "Ross River",
  },
  {
    iata: "YDN",
    name: "Dauphin Barker Airport",
    city: "Dauphin",
  },
  {
    iata: "YDO",
    name: "Dolbeau St Felicien Airport",
    city: "Dolbeau-St-Felicien",
  },
  {
    iata: "YDP",
    name: "Nain Airport",
    city: "Nain",
  },
  {
    iata: "YDQ",
    name: "Dawson Creek Airport",
    city: "Dawson Creek",
  },
  {
    iata: "YED",
    name: "Edmonton (CFB Namao) Heliport",
  },
  {
    iata: "YEG",
    name: "Edmonton International Airport",
    city: "Edmonton",
  },
  {
    iata: "YEK",
    name: "Arviat Airport",
    city: "Arviat",
  },
  {
    iata: "YEL",
    name: "Elliot Lake Municipal Airport",
    city: "Elliot Lake",
  },
  {
    iata: "YEM",
    name: "Manitoulin East Municipal Airport",
    city: "Manitowaning",
  },
  {
    iata: "YEN",
    name: "Estevan Airport",
    city: "Estevan",
  },
  {
    iata: "YER",
    name: "Fort Severn Airport",
    city: "Fort Severn",
  },
  {
    iata: "YET",
    name: "Edson Airport",
    city: "Edson",
  },
  {
    iata: "YEU",
    name: "Eureka Airport",
    city: "Eureka",
  },
  {
    iata: "YEV",
    name: "Inuvik Mike Zubko Airport",
    city: "Inuvik",
  },
  {
    iata: "YEY",
    name: "Amos Magny Airport",
    city: "Amos",
  },
  {
    iata: "YFA",
    name: "Fort Albany Airport",
    city: "Fort Albany",
  },
  {
    iata: "YFB",
    name: "Iqaluit Airport",
    city: "Iqaluit",
  },
  {
    iata: "YFC",
    name: "Fredericton Airport",
    city: "Fredericton",
  },
  {
    iata: "YFE",
    name: "Forestville Airport",
    city: "Forestville",
  },
  {
    iata: "YFH",
    name: "Fort Hope Airport",
    city: "Fort Hope",
  },
  {
    iata: "YTM",
    name: "La Macaza / Mont-Tremblant International Inc Airport",
    city: "Riviere Rouge",
  },
  {
    iata: "YFO",
    name: "Flin Flon Airport",
    city: "Flin Flon",
  },
  {
    iata: "YFR",
    name: "Fort Resolution Airport",
    city: "Fort Resolution",
  },
  {
    iata: "YFS",
    name: "Fort Simpson Airport",
    city: "Fort Simpson",
  },
  {
    iata: "YMN",
    name: "Makkovik Airport",
    city: "Makkovik",
  },
  {
    iata: "YGB",
    name: "Texada Gillies Bay Airport",
    city: "Texada",
  },
  {
    iata: "YGD",
    name: "Goderich Airport",
    city: "Goderich",
  },
  {
    iata: "YGH",
    name: "Fort Good Hope Airport",
    city: "Fort Good Hope",
  },
  {
    iata: "YGK",
    name: "Kingston Norman Rogers Airport",
    city: "Kingston",
  },
  {
    iata: "YGL",
    name: null,
    city: "La Grande Riviere",
  },
  {
    iata: "YGM",
    name: "Gimli Industrial Park Airport",
    city: "Gimli",
  },
  {
    iata: "YGO",
    name: "Gods Lake Narrows Airport",
    city: "Gods Lake Narrows",
  },
  {
    iata: "YGP",
    name: null,
    city: "Gaspe",
  },
  {
    iata: "YGQ",
    name: "Geraldton Greenstone Regional Airport",
    city: "Geraldton",
  },
  {
    iata: "YGR",
    name: null,
    city: "Iles-de-la-Madeleine",
  },
  {
    iata: "YGT",
    name: "Igloolik Airport",
    city: "Igloolik",
  },
  {
    iata: "YGV",
    name: "Havre St Pierre Airport",
    city: "Havre St-Pierre",
  },
  {
    iata: "YGW",
    name: "Kuujjuarapik Airport",
    city: "Kuujjuarapik",
  },
  {
    iata: "YGX",
    name: "Gillam Airport",
    city: "Gillam",
  },
  {
    iata: "YGZ",
    name: "Grise Fiord Airport",
    city: "Grise Fiord",
  },
  {
    iata: "YQC",
    name: "Quaqtaq Airport",
    city: "Quaqtaq",
  },
  {
    iata: "CXH",
    name: "Vancouver Harbour Water Aerodrome",
  },
  {
    iata: "YHD",
    name: "Dryden Regional Airport",
    city: "Dryden",
  },
  {
    iata: "YHE",
    name: "Hope Airport",
    city: "Hope",
  },
  {
    iata: "YHF",
    name: null,
    city: "Hearst",
  },
  {
    iata: "YNS",
    name: "Nemiscau Airport",
    city: "Nemiscau",
  },
  {
    iata: "YHI",
    name: "Ulukhaktok Holman Airport",
    city: "Ulukhaktok",
  },
  {
    iata: "YHK",
    name: "Gjoa Haven Airport",
    city: "Gjoa Haven",
  },
  {
    iata: "YHM",
    name: "John C. Munro Hamilton International Airport",
    city: "Hamilton",
  },
  {
    iata: "YHN",
    name: "Hornepayne Municipal Airport",
    city: "Hornepayne",
  },
  {
    iata: "YHO",
    name: "Hopedale Airport",
    city: "Hopedale",
  },
  {
    iata: "YHR",
    name: "Chevery Airport",
    city: "Chevery",
  },
  {
    iata: "YHT",
    name: "Haines Junction Airport",
    city: "Haines Junction",
  },
  {
    iata: "YHU",
    name: null,
    city: "Montreal",
  },
  {
    iata: "YHY",
    name: "Hay River / Merlyn Carter Airport",
    city: "Hay River",
  },
  {
    iata: "YHZ",
    name: "Halifax / Stanfield International Airport",
    city: "Halifax",
  },
  {
    iata: "YIB",
    name: "Atikokan Municipal Airport",
    city: "Atikokan",
  },
  {
    iata: "YDG",
    name: "Digby / Annapolis Regional Airport",
    city: "Digby",
  },
  {
    iata: "YIF",
    name: "St Augustin Airport",
    city: "St-Augustin",
  },
  {
    iata: "YIK",
    name: "Ivujivik Airport",
    city: "Ivujivik",
  },
  {
    iata: "YIO",
    name: "Pond Inlet Airport",
    city: "Pond Inlet",
  },
  {
    iata: "YIV",
    name: "Island Lake Airport",
    city: "Island Lake",
  },
  {
    iata: "YJF",
    name: "Fort Liard Airport",
    city: "Fort Liard",
  },
  {
    iata: "YJN",
    name: "St Jean Airport",
    city: "St Jean",
  },
  {
    iata: "YJT",
    name: "Stephenville Airport",
    city: "Stephenville",
  },
  {
    iata: "YKA",
    name: "Kamloops Airport",
    city: "Kamloops",
  },
  {
    iata: "LAK",
    name: "Aklavik Airport",
    city: "Aklavik",
  },
  {
    iata: "YKF",
    name: "Waterloo Airport",
    city: "Kitchener",
  },
  {
    iata: "YKJ",
    name: "Key Lake Airport",
    city: "Key Lake",
  },
  {
    iata: "YKL",
    name: "Schefferville Airport",
    city: "Schefferville",
  },
  {
    iata: "AKV",
    name: "Akulivik Airport",
    city: "Akulivik",
  },
  {
    iata: "YKQ",
    name: "Waskaganish Airport",
    city: "Waskaganish",
  },
  {
    iata: "YKX",
    name: "Kirkland Lake Airport",
    city: "Kirkland Lake",
  },
  {
    iata: "YKY",
    name: "Kindersley Airport",
    city: "Kindersley",
  },
  {
    iata: "YKZ",
    name: "Buttonville Municipal Airport",
    city: "Toronto",
  },
  {
    iata: "YPJ",
    name: "Aupaluk Airport",
    city: "Aupaluk",
  },
  {
    iata: "YLC",
    name: "Kimmirut Airport",
    city: "Kimmirut",
  },
  {
    iata: "YLD",
    name: "Chapleau Airport",
    city: "Chapleau",
  },
  {
    iata: "YLH",
    name: "Lansdowne House Airport",
    city: "Lansdowne House",
  },
  {
    iata: "YLJ",
    name: "Meadow Lake Airport",
    city: "Meadow Lake",
  },
  {
    iata: "YSG",
    name: "Lutselk'e Airport",
    city: "Lutselk'e",
  },
  {
    iata: "YLL",
    name: "Lloydminster Airport",
    city: "Lloydminster",
  },
  {
    iata: "YLR",
    name: "Leaf Rapids Airport",
    city: "Leaf Rapids",
  },
  {
    iata: "YLT",
    name: "Alert Airport",
    city: "Alert",
  },
  {
    iata: "XGR",
    name: "Kangiqsualujjuaq (Georges River) Airport",
    city: "Kangiqsualujjuaq",
  },
  {
    iata: "YLW",
    name: "Kelowna Airport",
    city: "Kelowna",
  },
  {
    iata: "YMA",
    name: "Mayo Airport",
    city: "Mayo",
  },
  {
    iata: "YME",
    name: "Matane Airport",
    city: "Matane",
  },
  {
    iata: "YMG",
    name: "Manitouwadge Airport",
    city: "Manitouwadge",
  },
  {
    iata: "YMH",
    name: "Mary's Harbour Airport",
    city: "Mary's Harbour",
  },
  {
    iata: "YMJ",
    name: "Moose Jaw Air Vice Marshal C. M. McEwen Airport",
    city: "Moose Jaw",
  },
  {
    iata: "YML",
    name: "Charlevoix Airport",
    city: "Charlevoix",
  },
  {
    iata: "YMM",
    name: "Fort McMurray Airport",
    city: "Fort McMurray",
  },
  {
    iata: "YMO",
    name: "Moosonee Airport",
    city: "Moosonee",
  },
  {
    iata: "YMT",
    name: "Chapais Airport",
    city: "Chibougamau",
  },
  {
    iata: "YUD",
    name: "Umiujaq Airport",
    city: "Umiujaq",
  },
  {
    iata: "YMX",
    name: "Montreal International (Mirabel) Airport",
    city: "Montreal",
  },
  {
    iata: "YNA",
    name: "Natashquan Airport",
    city: "Natashquan",
  },
  {
    iata: "YNC",
    name: "Wemindji Airport",
    city: "Wemindji",
  },
  {
    iata: "YND",
    name: "Ottawa / Gatineau Airport",
    city: "Gatineau",
  },
  {
    iata: "YNE",
    name: "Norway House Airport",
    city: "Norway House",
  },
  {
    iata: "YNL",
    name: "Points North Landing Airport",
    city: "Points North Landing",
  },
  {
    iata: "YNM",
    name: "Matagami Airport",
    city: "Matagami",
  },
  {
    iata: "YNN",
    name: "Nejanilini Lake Airport",
    city: "Nejanilini Lake",
  },
  {
    iata: "HZP",
    name: "Fort Mackay / Horizon Airport",
    city: "Fort Mackay",
  },
  {
    iata: "YOA",
    name: "Ekati Airport",
    city: "Ekati",
  },
  {
    iata: "YOC",
    name: "Old Crow Airport",
    city: "Old Crow",
  },
  {
    iata: "YOD",
    name: "CFB Cold Lake",
    city: "Cold Lake",
  },
  {
    iata: "YOH",
    name: "Oxford House Airport",
    city: "Oxford House",
  },
  {
    iata: "YOJ",
    name: "High Level Airport",
    city: "High Level",
  },
  {
    iata: "YOO",
    name: "Oshawa Airport",
    city: "Oshawa",
  },
  {
    iata: "YOP",
    name: "Rainbow Lake Airport",
    city: "Rainbow Lake",
  },
  {
    iata: "YOS",
    name: "Owen Sound / Billy Bishop Regional Airport",
    city: "Owen Sound",
  },
  {
    iata: "YOW",
    name: "Ottawa Macdonald-Cartier International Airport",
    city: "Ottawa",
  },
  {
    iata: "YOY",
    name: "C J.H.L.(Joe) Lecomte) Heliport",
  },
  {
    iata: "YPA",
    name: "Prince Albert Glass Field",
    city: "Prince Albert",
  },
  {
    iata: "YPC",
    name: "Paulatuk (Nora Aliqatchialuk Ruben) Airport",
    city: "Paulatuk",
  },
  {
    iata: "YPS",
    name: "Port Hawkesbury Airport",
    city: "Port Hawkesbury",
  },
  {
    iata: "YPE",
    name: "Peace River Airport",
    city: "Peace River",
  },
  {
    iata: "YPG",
    name: "Southport Airport",
    city: "Portage",
  },
  {
    iata: "YPH",
    name: "Inukjuak Airport",
    city: "Inukjuak",
  },
  {
    iata: "YPL",
    name: "Pickle Lake Airport",
    city: "Pickle Lake",
  },
  {
    iata: "YPM",
    name: "Pikangikum Airport",
    city: "Pikangikum",
  },
  {
    iata: "YPN",
    name: "Port Menier Airport",
    city: "Port-Menier",
  },
  {
    iata: "YPO",
    name: "Peawanuck Airport",
    city: "Peawanuck",
  },
  {
    iata: "YPQ",
    name: "Peterborough Airport",
    city: "Peterborough",
  },
  {
    iata: "YPR",
    name: "Prince Rupert Airport",
    city: "Prince Rupert",
  },
  {
    iata: "YPW",
    name: "Powell River Airport",
    city: "Powell River",
  },
  {
    iata: "YPX",
    name: "Puvirnituq Airport",
    city: "Puvirnituq",
  },
  {
    iata: "YPY",
    name: "Fort Chipewyan Airport",
    city: "Fort Chipewyan",
  },
  {
    iata: "YQA",
    name: "Muskoka Airport",
    city: "Muskoka",
  },
  {
    iata: "YQB",
    name: "Quebec Jean Lesage International Airport",
    city: "Quebec",
  },
  {
    iata: "YQD",
    name: "The Pas Airport",
    city: "The Pas",
  },
  {
    iata: "YQF",
    name: "Red Deer Regional Airport",
    city: "Red Deer",
  },
  {
    iata: "YQG",
    name: "Windsor Airport",
    city: "Windsor",
  },
  {
    iata: "YQH",
    name: "Watson Lake Airport",
    city: "Watson Lake",
  },
  {
    iata: "YQI",
    name: "Yarmouth Airport",
    city: "Yarmouth",
  },
  {
    iata: "YQK",
    name: "Kenora Airport",
    city: "Kenora",
  },
  {
    iata: "YQL",
    name: "Lethbridge County Airport",
    city: "Lethbridge",
  },
  {
    iata: "YQM",
    name: "Greater Moncton International Airport",
    city: "Moncton",
  },
  {
    iata: "YQN",
    name: "Nakina Airport",
    city: "Nakina",
  },
  {
    iata: "YQQ",
    name: "Comox Airport",
    city: "Comox",
  },
  {
    iata: "YQR",
    name: "Regina International Airport",
    city: "Regina",
  },
  {
    iata: "YQS",
    name: "St Thomas Municipal Airport",
    city: "St Thomas",
  },
  {
    iata: "YQT",
    name: "Thunder Bay Airport",
    city: "Thunder Bay",
  },
  {
    iata: "YQU",
    name: "Grande Prairie Airport",
    city: "Grande Prairie",
  },
  {
    iata: "YQV",
    name: "Yorkton Municipal Airport",
    city: "Yorkton",
  },
  {
    iata: "YQW",
    name: "North Battleford Airport",
    city: "North Battleford",
  },
  {
    iata: "YQX",
    name: "Gander International Airport",
    city: "Gander",
  },
  {
    iata: "YQY",
    name: "Sydney / J.A. Douglas McCurdy Airport",
    city: "Sydney",
  },
  {
    iata: "YQZ",
    name: "Quesnel Airport",
    city: "Quesnel",
  },
  {
    iata: "YRA",
    name: "Rae Lakes Airport",
    city: "Gameti",
  },
  {
    iata: "YRB",
    name: "Resolute Bay Airport",
    city: "Resolute Bay",
  },
  {
    iata: "YRI",
    name: null,
    city: "Riviere-du-Loup",
  },
  {
    iata: "YRJ",
    name: "Roberval Airport",
    city: "Roberval",
  },
  {
    iata: "YRL",
    name: "Red Lake Airport",
    city: "Red Lake",
  },
  {
    iata: "YRO",
    name: "Ottawa / Rockcliffe Airport",
    city: "Ottawa",
  },
  {
    iata: "YRP",
    name: "Ottawa / Carp Airport",
    city: "Carp",
  },
  {
    iata: "YRQ",
    name: null,
    city: "Trois-Rivieres",
  },
  {
    iata: "YRS",
    name: "Red Sucker Lake Airport",
    city: "Red Sucker Lake",
  },
  {
    iata: "YRT",
    name: "Rankin Inlet Airport",
    city: "Rankin Inlet",
  },
  {
    iata: "YRV",
    name: "Revelstoke Airport",
    city: "Revelstoke",
  },
  {
    iata: "YSB",
    name: "Sudbury Airport",
    city: "Sudbury",
  },
  {
    iata: "YSC",
    name: "Sherbrooke Airport",
    city: "Sherbrooke",
  },
  {
    iata: "YSD",
    name: "Suffield Heliport",
  },
  {
    iata: "YSF",
    name: "Stony Rapids Airport",
    city: "Stony Rapids",
  },
  {
    iata: "YSH",
    name: "Smiths Falls-Montague (Russ Beach) Airport",
    city: "Smiths Falls",
  },
  {
    iata: "YSJ",
    name: "Saint John Airport",
    city: "Saint John",
  },
  {
    iata: "YSK",
    name: "Sanikiluaq Airport",
    city: "Sanikiluaq",
  },
  {
    iata: "YSL",
    name: "St Leonard Airport",
    city: "St Leonard",
  },
  {
    iata: "YSM",
    name: "Fort Smith Airport",
    city: "Fort Smith",
  },
  {
    iata: "YCM",
    name: "Niagara District Airport",
    city: "St Catharines",
  },
  {
    iata: "YSP",
    name: "Marathon Airport",
    city: "Marathon",
  },
  {
    iata: "YSR",
    name: "Nanisivik Airport",
  },
  {
    iata: "YST",
    name: "St. Theresa Point Airport",
    city: "St. Theresa Point",
  },
  {
    iata: "YSU",
    name: "Summerside Airport",
    city: "Summerside",
  },
  {
    iata: "YSY",
    name: "Sachs Harbour (David Nasogaluak Jr. Saaryuaq) Airport",
    city: "Sachs Harbour",
  },
  {
    iata: "YTA",
    name: "Pembroke Airport",
    city: "Pembroke",
  },
  {
    iata: "YTE",
    name: "Cape Dorset Airport",
    city: "Cape Dorset",
  },
  {
    iata: "YTF",
    name: "Alma Airport",
    city: "Alma",
  },
  {
    iata: "YTH",
    name: "Thompson Airport",
    city: "Thompson",
  },
  {
    iata: "YTL",
    name: "Big Trout Lake Airport",
    city: "Big Trout Lake",
  },
  {
    iata: "YTQ",
    name: "Tasiujaq Airport",
    city: "Tasiujaq",
  },
  {
    iata: "YTR",
    name: "CFB Trenton",
    city: "Trenton",
  },
  {
    iata: "YTS",
    name: "Timmins/Victor M. Power",
    city: "Timmins",
  },
  {
    iata: "YTZ",
    name: "Billy Bishop Toronto City Centre Airport",
    city: "Toronto",
  },
  {
    iata: "YUB",
    name: "Tuktoyaktuk Airport",
    city: "Tuktoyaktuk",
  },
  {
    iata: "YUL",
    name: "Montreal / Pierre Elliott Trudeau International Airport",
    city: "Montreal",
  },
  {
    iata: "YUT",
    name: "Repulse Bay Airport",
    city: "Repulse Bay",
  },
  {
    iata: "YUX",
    name: "Hall Beach Airport",
    city: "Hall Beach",
  },
  {
    iata: "YUY",
    name: "Rouyn Noranda Airport",
    city: "Rouyn-Noranda",
  },
  {
    iata: "YVB",
    name: "Bonaventure Airport",
    city: "Bonaventure",
  },
  {
    iata: "YVC",
    name: "La Ronge Airport",
    city: "La Ronge",
  },
  {
    iata: "YVD",
    name: "Virden/R.J. (Bob) Andrew Field Regional Aerodrome",
  },
  {
    iata: "YVE",
    name: "Vernon Airport",
    city: "Vernon",
  },
  {
    iata: "YVM",
    name: "Qikiqtarjuaq Airport",
    city: "Qikiqtarjuaq",
  },
  {
    iata: "YVO",
    name: "Val-d'Or Airport",
    city: "Val-d'Or",
  },
  {
    iata: "YVP",
    name: "Kuujjuaq Airport",
    city: "Kuujjuaq",
  },
  {
    iata: "YVQ",
    name: "Norman Wells Airport",
    city: "Norman Wells",
  },
  {
    iata: "YVR",
    name: "Vancouver International Airport",
    city: "Vancouver",
  },
  {
    iata: "YVT",
    name: "Buffalo Narrows Airport",
    city: "Buffalo Narrows",
  },
  {
    iata: "YVV",
    name: "Wiarton Airport",
    city: "Wiarton",
  },
  {
    iata: "YVZ",
    name: "Deer Lake Airport",
    city: "Deer Lake",
  },
  {
    iata: "YWA",
    name: "Petawawa Airport",
    city: "Petawawa",
  },
  {
    iata: "YWG",
    name: "Winnipeg / James Armstrong Richardson International Airport",
    city: "Winnipeg",
  },
  {
    iata: "YWH",
    name: "Victoria Harbour Seaplane Base",
  },
  {
    iata: "YWJ",
    name: null,
    city: "Deline",
  },
  {
    iata: "YWK",
    name: "Wabush Airport",
    city: "Wabush",
  },
  {
    iata: "YWL",
    name: "Williams Lake Airport",
    city: "Williams Lake",
  },
  {
    iata: "YWP",
    name: "Webequie Airport",
    city: "Webequie",
  },
  {
    iata: "YWY",
    name: "Wrigley Airport",
    city: "Wrigley",
  },
  {
    iata: "YXC",
    name: "Cranbrook Airport",
    city: "Cranbrook",
  },
  {
    iata: "YXD",
    name: "Edmonton City Centre (Blatchford Field) Airport",
    city: "Edmonton",
  },
  {
    iata: "YXE",
    name: "Saskatoon John G. Diefenbaker International Airport",
    city: "Saskatoon",
  },
  {
    iata: "YXH",
    name: "Medicine Hat Airport",
    city: "Medicine Hat",
  },
  {
    iata: "YXI",
    name: "Bonnechere Airport",
  },
  {
    iata: "YXJ",
    name: "Fort St John Airport",
    city: "Fort St.John",
  },
  {
    iata: "YXK",
    name: "Rimouski Airport",
    city: "Rimouski",
  },
  {
    iata: "YXL",
    name: "Sioux Lookout Airport",
    city: "Sioux Lookout",
  },
  {
    iata: "YXN",
    name: "Whale Cove Airport",
    city: "Whale Cove",
  },
  {
    iata: "YXP",
    name: "Pangnirtung Airport",
    city: "Pangnirtung",
  },
  {
    iata: "YXQ",
    name: "Beaver Creek Airport",
    city: "Beaver Creek",
  },
  {
    iata: "YXR",
    name: "Earlton (Timiskaming Regional) Airport",
    city: "Earlton",
  },
  {
    iata: "YXS",
    name: "Prince George Airport",
    city: "Prince George",
  },
  {
    iata: "YXT",
    name: "Terrace Airport",
    city: "Terrace",
  },
  {
    iata: "YXU",
    name: "London Airport",
    city: "London",
  },
  {
    iata: "YXX",
    name: "Abbotsford Airport",
    city: "Abbotsford",
  },
  {
    iata: "YXY",
    name: "Whitehorse / Erik Nielsen International Airport",
    city: "Whitehorse",
  },
  {
    iata: "YXZ",
    name: "Wawa Airport",
    city: "Wawa",
  },
  {
    iata: "YYB",
    name: "North Bay Airport",
    city: "North Bay",
  },
  {
    iata: "YYC",
    name: "Calgary International Airport",
    city: "Calgary",
  },
  {
    iata: "YYD",
    name: "Smithers Airport",
    city: "Smithers",
  },
  {
    iata: "YYE",
    name: "Fort Nelson Airport",
    city: "Fort Nelson",
  },
  {
    iata: "YYF",
    name: "Penticton Airport",
    city: "Penticton",
  },
  {
    iata: "YYG",
    name: "Charlottetown Airport",
    city: "Charlottetown",
  },
  {
    iata: "YYH",
    name: "Taloyoak Airport",
    city: "Taloyoak",
  },
  {
    iata: "YYJ",
    name: "Victoria International Airport",
    city: "Victoria",
  },
  {
    iata: "YYL",
    name: "Lynn Lake Airport",
    city: "Lynn Lake",
  },
  {
    iata: "YYN",
    name: "Swift Current Airport",
    city: "Swift Current",
  },
  {
    iata: "YYQ",
    name: "Churchill Airport",
    city: "Churchill",
  },
  {
    iata: "YYR",
    name: "Goose Bay Airport",
    city: "Goose Bay",
  },
  {
    iata: "YYT",
    name: "St Johns International Airport",
    city: "St. John's",
  },
  {
    iata: "YYU",
    name: "Kapuskasing Airport",
    city: "Kapuskasing",
  },
  {
    iata: "YYW",
    name: "Armstrong Airport",
    city: "Armstrong",
  },
  {
    iata: "YYY",
    name: "Mont Joli Airport",
    city: "Mont-Joli",
  },
  {
    iata: "YYZ",
    name: "Lester B. Pearson International Airport",
    city: "Toronto",
  },
  {
    iata: "YZD",
    name: "Downsview Airport",
    city: "Toronto",
  },
  {
    iata: "YZE",
    name: "Gore Bay Manitoulin Airport",
    city: "Gore Bay",
  },
  {
    iata: "YZF",
    name: "Yellowknife Airport",
    city: "Yellowknife",
  },
  {
    iata: "YZG",
    name: "Salluit Airport",
    city: "Salluit",
  },
  {
    iata: "YZH",
    name: "Slave Lake Airport",
    city: "Slave Lake",
  },
  {
    iata: "YZP",
    name: "Sandspit Airport",
    city: "Sandspit",
  },
  {
    iata: "YZR",
    name: "Chris Hadfield Airport",
    city: "Sarnia",
  },
  {
    iata: "YZS",
    name: "Coral Harbour Airport",
    city: "Coral Harbour",
  },
  {
    iata: "YZT",
    name: "Port Hardy Airport",
    city: "Port Hardy",
  },
  {
    iata: "YZU",
    name: "Whitecourt Airport",
    city: "Whitecourt",
  },
  {
    iata: "YZV",
    name: null,
    city: "Sept-Iles",
  },
  {
    iata: "YZW",
    name: "Teslin Airport",
    city: "Teslin",
  },
  {
    iata: "YZX",
    name: "CFB Greenwood",
    city: "Greenwood",
  },
  {
    iata: "YZY",
    name: "Mackenzie Airport",
    city: "Mackenzie",
  },
  {
    iata: "ZAC",
    name: "York Landing Airport",
    city: "York Landing",
  },
  {
    iata: "YSN",
    name: "Salmon Arm Airport",
    city: "Salmon Arm",
  },
  {
    iata: "YDT",
    name: "Burlington Executive",
    city: "Burlington",
  },
  {
    iata: "ZBD",
    name: "Boundary Bay Airport",
    city: "Boundary Bay",
  },
  {
    iata: "ZBF",
    name: "Ilford Airport",
    city: "Bathurst",
  },
  {
    iata: "ZBF",
    name: "Bathurst Airport",
    city: "Bathurst",
  },
  {
    iata: "ZBM",
    name: "Bromont Airport",
    city: "Bromont",
  },
  {
    iata: "ZEE",
    name: "Kelsey Airport",
    city: "Kelsey",
  },
  {
    iata: "ZEM",
    name: "Eastmain River Airport",
    city: "Eastmain River",
  },
  {
    iata: "ZFA",
    name: "Faro Airport",
    city: "Faro",
  },
  {
    iata: "ZFD",
    name: "Fond-Du-Lac Airport",
    city: "Fond-Du-Lac",
  },
  {
    iata: "ZFG",
    name: "Pukatawagan Airport",
    city: "Pukatawagan",
  },
  {
    iata: "ZFM",
    name: "Fort Mcpherson Airport",
    city: "Fort Mcpherson",
  },
  {
    iata: "ZFN",
    name: "Tulita Airport",
    city: "Tulita",
  },
  {
    iata: "ZGF",
    name: "Grand Forks Airport",
    city: "Grand Forks",
  },
  {
    iata: "ZGI",
    name: "Gods River Airport",
    city: "Gods River",
  },
  {
    iata: "ZGR",
    name: "Little Grand Rapids Airport",
    city: "Little Grand Rapids",
  },
  {
    iata: "ZJG",
    name: "Jenpeg Airport",
    city: "Jenpeg",
  },
  {
    iata: "ZJN",
    name: "Swan River Airport",
    city: "Swan River",
  },
  {
    iata: "ZKE",
    name: "Kashechewan Airport",
    city: "Kashechewan",
  },
  {
    iata: "YTD",
    name: "Thicket Portage Airport",
    city: "Thicket Portage",
  },
  {
    iata: "MSA",
    name: "Muskrat Dam Airport",
    city: "Muskrat Dam",
  },
  {
    iata: "PIW",
    name: "Pikwitonei Airport",
    city: "Pikwitonei",
  },
  {
    iata: "ZMT",
    name: "Masset Airport",
    city: "Masset",
  },
  {
    iata: "ZNG",
    name: "Poplar River Airport",
    city: "Poplar River",
  },
  {
    iata: "ZPB",
    name: "Sachigo Lake Airport",
    city: "Sachigo Lake",
  },
  {
    iata: "ZRJ",
    name: "Round Lake (Weagamow Lake) Airport",
    city: "Round Lake",
  },
  {
    iata: "ZSJ",
    name: "Sandy Lake Airport",
    city: "Sandy Lake",
  },
  {
    iata: "ZSN",
    name: "South Indian Lake Airport",
    city: "South Indian Lake",
  },
  {
    iata: "ZSW",
    name: "Prince Rupert/Seal Cove Seaplane Base",
  },
  {
    iata: "ZTM",
    name: "Shamattawa Airport",
    city: "Shamattawa",
  },
  {
    iata: "ZUC",
    name: "Ignace Municipal Airport",
    city: "Ignace",
  },
  {
    iata: "ZUM",
    name: "Churchill Falls Airport",
    city: "Churchill Falls",
  },
  {
    iata: "ZWH",
    name: "Lac Brochet Airport",
    city: "Lac Brochet",
  },
  {
    iata: "ZWL",
    name: "Wollaston Lake Airport",
    city: "Wollaston Lake",
  },
  {
    iata: "QLD",
    name: "Blida Airport",
    city: "",
  },
  {
    iata: "BUJ",
    name: "Bou Saada Airport",
    city: "",
  },
  {
    iata: "BJA",
    name: "Soummam Airport",
    city: "Bejaia",
  },
  {
    iata: "ALG",
    name: "Houari Boumediene Airport",
    city: "Algiers",
  },
  {
    iata: "DJG",
    name: "Djanet Inedbirene Airport",
    city: "Djanet",
  },
  {
    iata: "QFD",
    name: "Boufarik Airport",
    city: "",
  },
  {
    iata: "VVZ",
    name: "Illizi Takhamalt Airport",
    city: "Illizi",
  },
  {
    iata: "QSF",
    name: "Ain Arnat Airport",
    city: "Setif",
  },
  {
    iata: "TMR",
    name: null,
    city: "Tamanrasset",
  },
  {
    iata: "GJL",
    name: "Jijel Ferhat Abbas Airport",
    city: "Jijel",
  },
  {
    iata: "MZW",
    name: "Mecheria Airport",
    city: "Mecheria",
  },
  {
    iata: "QZN",
    name: "Relizane Airport",
    city: "",
  },
  {
    iata: "AAE",
    name: "Annaba Airport",
    city: "Annabah",
  },
  {
    iata: "CZL",
    name: "Mohamed Boudiaf International Airport",
    city: "Constantine",
  },
  {
    iata: "TEE",
    name: null,
    city: "Tebessi",
  },
  {
    iata: "BLJ",
    name: "Batna Airport",
    city: "Batna",
  },
  {
    iata: "HRM",
    name: "Hassi R'Mel Airport",
    city: "",
  },
  {
    iata: "TID",
    name: "Bou Chekif Airport",
    city: "Tiaret",
  },
  {
    iata: "TIN",
    name: "Tindouf Airport",
    city: "Tindouf",
  },
  {
    iata: "QAS",
    name: "Ech Cheliff Airport",
    city: "",
  },
  {
    iata: "TAF",
    name: "Tafaraoui Airport",
    city: "",
  },
  {
    iata: "TLM",
    name: null,
    city: "Tlemcen",
  },
  {
    iata: "ORN",
    name: "Es Senia Airport",
    city: "Oran",
  },
  {
    iata: "CBH",
    name: null,
    city: "Bechar",
  },
  {
    iata: "MUW",
    name: "Ghriss Airport",
    city: "",
  },
  {
    iata: "EBH",
    name: "El Bayadh Airport",
    city: "El Bayadh",
  },
  {
    iata: "INF",
    name: "In Guezzam Airport",
    city: "In Guezzam",
  },
  {
    iata: "BMW",
    name: "Bordj Badji Mokhtar Airport",
    city: "Bordj Badji Mokhtar",
  },
  {
    iata: "AZR",
    name: "Touat Cheikh Sidi Mohamed Belkebir Airport",
    city: "",
  },
  {
    iata: "BSK",
    name: "Biskra Airport",
    city: "Biskra",
  },
  {
    iata: "ELG",
    name: "El Golea Airport",
    city: "",
  },
  {
    iata: "GHA",
    name: null,
    city: "Ghardaia",
  },
  {
    iata: "HME",
    name: "Oued Irara Airport",
    city: "Hassi Messaoud",
  },
  {
    iata: "INZ",
    name: "In Salah Airport",
    city: "In Salah",
  },
  {
    iata: "TGR",
    name: "Touggourt Sidi Madhi Airport",
    city: "Touggourt",
  },
  {
    iata: "LOO",
    name: "Laghouat Airport",
    city: "Laghouat",
  },
  {
    iata: "ELU",
    name: "Guemar Airport",
    city: "Guemar",
  },
  {
    iata: "TMX",
    name: "Timimoun Airport",
    city: "Timimoun",
  },
  {
    iata: "OGX",
    name: "Ain el Beida Airport",
    city: "Ouargla",
  },
  {
    iata: "IAM",
    name: null,
    city: "Amenas",
  },
  {
    iata: "COO",
    name: "Cadjehoun Airport",
    city: "Cotonou",
  },
  {
    iata: "KDC",
    name: "Kandi Airport",
    city: "Kandi",
  },
  {
    iata: "NAE",
    name: "Natitingou Airport",
    city: "Natitingou",
  },
  {
    iata: "PKO",
    name: "Parakou Airport",
    city: "Parakou",
  },
  {
    iata: "SVF",
    name: null,
    city: "Save",
  },
  {
    iata: "DCG",
    name: "Dubai Creek SPB",
  },
  {
    iata: "XKY",
    name: "Kaya Airport",
    city: "Kaya",
  },
  {
    iata: "OUG",
    name: "Ouahigouya Airport",
    city: "Ouahigouya",
  },
  {
    iata: "XDJ",
    name: "Djibo Airport",
    city: "Djibo",
  },
  {
    iata: "XLU",
    name: "Leo Airport",
    city: "Leo",
  },
  {
    iata: "PUP",
    name: "Po Airport",
    city: "Po",
  },
  {
    iata: "XBO",
    name: "Boulsa Airport",
    city: "Boulsa",
  },
  {
    iata: "XBG",
    name: "Bogande Airport",
    city: "Bogande",
  },
  {
    iata: "DIP",
    name: "Diapaga Airport",
    city: "Diapaga",
  },
  {
    iata: "DOR",
    name: "Dori Airport",
    city: "Dori",
  },
  {
    iata: "FNG",
    name: "Fada N'gourma Airport",
    city: "Fada N'gourma",
  },
  {
    iata: "XGG",
    name: "Gorom-Gorom Airport",
    city: "Gorom-Gorom",
  },
  {
    iata: "XKA",
    name: "Kantchari Airport",
    city: "Kantchari",
  },
  {
    iata: "TMQ",
    name: "Tambao Airport",
    city: "Tambao",
  },
  {
    iata: "XPA",
    name: "Pama Airport",
    city: "Pama",
  },
  {
    iata: "ARL",
    name: "Arly Airport",
    city: "Arly",
  },
  {
    iata: "XSE",
    name: "Sebba Airport",
    city: "Sebba",
  },
  {
    iata: "TEG",
    name: "Tenkodogo Airport",
    city: "Tenkodogo",
  },
  {
    iata: "XZA",
    name: null,
    city: "Zabre",
  },
  {
    iata: "OUA",
    name: "Ouagadougou Airport",
    city: "Ouagadougou",
  },
  {
    iata: "BNR",
    name: "Banfora Airport",
    city: "Banfora",
  },
  {
    iata: "DGU",
    name: "Dedougou Airport",
    city: "Dedougou",
  },
  {
    iata: "XGA",
    name: "Gaoua Airport",
    city: "Gaoua",
  },
  {
    iata: "XNU",
    name: "Nouna Airport",
    city: "Nouna",
  },
  {
    iata: "BOY",
    name: "Bobo Dioulasso Airport",
    city: "Bobo Dioulasso",
  },
  {
    iata: "TUQ",
    name: "Tougan Airport",
    city: "Tougan",
  },
  {
    iata: "XDE",
    name: "Diebougou Airport",
    city: "Diebougou",
  },
  {
    iata: "XAR",
    name: "Aribinda Airport",
    city: "Aribinda",
  },
  {
    iata: "ACC",
    name: "Kotoka International Airport",
    city: "Accra",
  },
  {
    iata: "TML",
    name: "Tamale Airport",
    city: "Tamale",
  },
  {
    iata: "KMS",
    name: "Kumasi Airport",
    city: "Kumasi",
  },
  {
    iata: "NYI",
    name: "Sunyani Airport",
    city: "Sunyani",
  },
  {
    iata: "TKD",
    name: "Takoradi Airport",
    city: "Sekondi-Takoradi",
  },
  {
    iata: "DHB",
    name: "Deer Harbor SPB",
  },
  {
    iata: "ABJ",
    name: "Port Bouet Airport",
    city: "Abidjan",
  },
  {
    iata: "OGO",
    name: "Abengourou Airport",
    city: "Abengourou",
  },
  {
    iata: "BXI",
    name: "Boundiali Airport",
    city: "Boundiali",
  },
  {
    iata: "BYK",
    name: null,
    city: "",
  },
  {
    iata: "BQO",
    name: "Bouna Airport",
    city: "Bouna",
  },
  {
    iata: "BDK",
    name: "Soko Airport",
    city: "Bondoukou",
  },
  {
    iata: "DIM",
    name: "Dimbokro Airport",
    city: "Dimbokro",
  },
  {
    iata: "DJO",
    name: "Daloa Airport",
    city: "",
  },
  {
    iata: "FEK",
    name: "Ferkessedougou Airport",
    city: "Ferkessedougou",
  },
  {
    iata: "GGN",
    name: "Gagnoa Airport",
    city: "Gagnoa",
  },
  {
    iata: "GGO",
    name: "Guiglo Airport",
    city: "Guiglo",
  },
  {
    iata: "HGO",
    name: "Korhogo Airport",
    city: "",
  },
  {
    iata: "MJC",
    name: "Man Airport",
    city: "",
  },
  {
    iata: "KEO",
    name: "Odienne Airport",
    city: "Odienne",
  },
  {
    iata: "OFI",
    name: "Ouango Fitini Airport",
    city: "Ouango Fitini",
  },
  {
    iata: "SEO",
    name: "Seguela Airport",
    city: "Seguela",
  },
  {
    iata: "SPY",
    name: "San Pedro Airport",
    city: "",
  },
  {
    iata: "ZSS",
    name: "Sassandra Airport",
    city: "Sassandra",
  },
  {
    iata: "TXU",
    name: "Tabou Airport",
    city: "Tabou",
  },
  {
    iata: "ASK",
    name: "Yamoussoukro Airport",
    city: "Yamoussoukro",
  },
  {
    iata: "DKA",
    name: "Katsina Airport",
  },
  {
    iata: "ABV",
    name: "Nnamdi Azikiwe International Airport",
    city: "Abuja",
  },
  {
    iata: "AKR",
    name: "Akure Airport",
    city: "Akure",
  },
  {
    iata: "ABB",
    name: "Asaba International Airport",
    city: "Asaba",
  },
  {
    iata: "BNI",
    name: "Benin Airport",
    city: "Benin",
  },
  {
    iata: "CBQ",
    name: "Margaret Ekpo International Airport",
    city: "Calabar",
  },
  {
    iata: "ENU",
    name: "Akanu Ibiam International Airport",
    city: "Enegu",
  },
  {
    iata: "QUS",
    name: "Gusau Airport",
    city: "Gusau",
  },
  {
    iata: "IBA",
    name: "Ibadan Airport",
    city: "Ibadan",
  },
  {
    iata: "ILR",
    name: "Ilorin International Airport",
    city: "Ilorin",
  },
  {
    iata: "QOW",
    name: "Sam Mbakwe International Airport",
    city: "Owerri",
  },
  {
    iata: "JOS",
    name: "Yakubu Gowon Airport",
    city: "Jos",
  },
  {
    iata: "KAD",
    name: "Kaduna Airport",
    city: "Kaduna",
  },
  {
    iata: "KAN",
    name: "Mallam Aminu International Airport",
    city: "Kano",
  },
  {
    iata: "MIU",
    name: "Maiduguri International Airport",
    city: "Maiduguri",
  },
  {
    iata: "MDI",
    name: "Makurdi Airport",
    city: "Makurdi",
  },
  {
    iata: "LOS",
    name: "Murtala Muhammed International Airport",
    city: "Lagos",
  },
  {
    iata: "MXJ",
    name: "Minna Airport",
    city: "Minna",
  },
  {
    iata: "PHC",
    name: "Port Harcourt International Airport",
    city: "Port Harcourt",
  },
  {
    iata: "SKO",
    name: "Sadiq Abubakar III International Airport",
    city: "Sokoto",
  },
  {
    iata: "YOL",
    name: "Yola Airport",
    city: "Yola",
  },
  {
    iata: "ZAR",
    name: "Zaria Airport",
    city: "Zaria",
  },
  {
    iata: "STI",
    name: "Santiago Municipal Airport",
    city: "Santiago",
  },
  {
    iata: "DQA",
    name: "Saertu Airport",
    city: "Daqing Shi",
  },
  {
    iata: "MFQ",
    name: "Maradi Airport",
    city: "Maradi",
  },
  {
    iata: "NIM",
    name: "Diori Hamani International Airport",
    city: "Niamey",
  },
  {
    iata: "THZ",
    name: "Tahoua Airport",
    city: "Tahoua",
  },
  {
    iata: "AJY",
    name: "Mano Dayak International Airport",
    city: "Agadez",
  },
  {
    iata: "ZND",
    name: "Zinder Airport",
    city: "Zinder",
  },
  {
    iata: "TBJ",
    name: "Tabarka 7 Novembre Airport",
    city: "Tabarka",
  },
  {
    iata: "MIR",
    name: "Monastir Habib Bourguiba International Airport",
    city: "Monastir",
  },
  {
    iata: "TUN",
    name: "Tunis Carthage International Airport",
    city: "Tunis",
  },
  {
    iata: "OIZ",
    name: "Sidi Ahmed Air Base",
    city: "Sidi Ahmed",
  },
  {
    iata: "GAF",
    name: "Gafsa Ksar International Airport",
    city: "Gafsa",
  },
  {
    iata: "GAE",
    name: null,
    city: "Gabes",
  },
  {
    iata: "DJE",
    name: "Djerba Zarzis International Airport",
    city: "Djerba",
  },
  {
    iata: "EBM",
    name: "El Borma Airport",
    city: "El Borma",
  },
  {
    iata: "SFA",
    name: "Sfax Thyna International Airport",
    city: "Sfax",
  },
  {
    iata: "TOE",
    name: "Tozeur Nefta International Airport",
    city: "Tozeur",
  },
  {
    iata: "DWR",
    name: "Dywer Airbase",
  },
  {
    iata: "LRL",
    name: "Niamtougou International Airport",
    city: "Niamtougou",
  },
  {
    iata: "LFW",
    name: null,
    city: "Lome",
  },
  {
    iata: "ANR",
    name: "Antwerp International Airport (Deurne)",
    city: "Antwerp",
  },
  {
    iata: "BRU",
    name: "Brussels Airport",
    city: "Brussels",
  },
  {
    iata: "CRL",
    name: "Brussels South Charleroi Airport",
    city: "Brussels",
  },
  {
    iata: "KJK",
    name: "Wevelgem Airport",
    city: "Wevelgem",
  },
  {
    iata: "LGG",
    name: null,
    city: "Liege",
  },
  {
    iata: "QNM",
    name: null,
    city: "Namur",
  },
  {
    iata: "OST",
    name: "Ostend-Bruges International Airport",
    city: "Ostend",
  },
  {
    iata: "QHA",
    name: "Hasselt Airport",
    city: "Hasselt",
  },
  {
    iata: "OBL",
    name: "Oostmalle Air Base",
    city: "Zoersel",
  },
  {
    iata: "MZD",
    name: null,
  },
  {
    iata: "AOC",
    name: "Altenburg-Nobitz Airport",
    city: "Altenburg",
  },
  {
    iata: "HDF",
    name: "Heringsdorf Airport",
    city: "Heringsdorf",
  },
  {
    iata: "BBH",
    name: "Barth Airport",
    city: "",
  },
  {
    iata: "ZMG",
    name: "Magdeburg Airport",
    city: "Magdeburg",
  },
  {
    iata: "CBU",
    name: "Cottbus-Drewitz Airport",
    city: "Cottbus",
  },
  {
    iata: "SXF",
    name: null,
  },
  {
    iata: "DRS",
    name: "Dresden Airport",
    city: "Dresden",
  },
  {
    iata: "ERF",
    name: "Erfurt Airport",
    city: "Erfurt",
  },
  {
    iata: "FRA",
    name: "Frankfurt am Main International Airport",
    city: "Frankfurt-am-Main",
  },
  {
    iata: "FMO",
    name: "Muenster Osnabrueck Airport",
    city: "Munster",
  },
  {
    iata: "HAM",
    name: "Hamburg Airport",
    city: "Hamburg",
  },
  {
    iata: "THF",
    name: "Berlin-Tempelhof International Airport",
    city: "Berlin",
  },
  {
    iata: "CGN",
    name: "Cologne Bonn Airport",
    city: "Cologne",
  },
  {
    iata: "DUS",
    name: "Dusseldorf International Airport",
    city: "Dusseldorf",
  },
  {
    iata: "MUC",
    name: "Munich International Airport",
    city: "Munich",
  },
  {
    iata: "NUE",
    name: "Nuremberg Airport",
    city: "Nuremberg",
  },
  {
    iata: "LEJ",
    name: "Leipzig Halle Airport",
    city: "Leipzig",
  },
  {
    iata: "SCN",
    name: null,
    city: "Saarbrucken",
  },
  {
    iata: "STR",
    name: "Stuttgart Airport",
    city: "Stuttgart",
  },
  {
    iata: "TXL",
    name: "Berlin-Tegel International Airport",
    city: "Berlin",
  },
  {
    iata: "HAJ",
    name: "Hannover Airport",
    city: "Hannover",
  },
  {
    iata: "BRE",
    name: "Bremen Airport",
    city: "Bremen",
  },
  {
    iata: "QEF",
    name: "Frankfurt-Egelsbach Airport",
    city: "Egelsbach",
  },
  {
    iata: "HHN",
    name: "Frankfurt-Hahn Airport",
    city: "Hahn",
  },
  {
    iata: "MHG",
    name: "Mannheim-City Airport",
    city: "Mannheim",
  },
  {
    iata: "ZQV",
    name: "Worms Airport",
  },
  {
    iata: "QMZ",
    name: "Mainz-Finthen Airport",
    city: "Mainz",
  },
  {
    iata: "SGE",
    name: "Siegerland Airport",
    city: "",
  },
  {
    iata: "XFW",
    name: "Hamburg-Finkenwerder Airport",
    city: "Hamburg",
  },
  {
    iata: "KEL",
    name: "Kiel-Holtenau Airport",
    city: "Kiel",
  },
  {
    iata: "LBC",
    name: null,
    city: "Lubeck",
  },
  {
    iata: "EUM",
    name: null,
    city: "Neumunster",
  },
  {
    iata: "FMM",
    name: "Memmingen Allgau Airport",
    city: "Memmingen",
  },
  {
    iata: "AAH",
    name: null,
    city: "Aachen",
  },
  {
    iata: "ESS",
    name: "Essen Mulheim Airport",
    city: "",
  },
  {
    iata: "BFE",
    name: "Bielefeld Airport",
    city: "Bielefeld",
  },
  {
    iata: "MGL",
    name: null,
    city: "Monchengladbach",
  },
  {
    iata: "PAD",
    name: "Paderborn Lippstadt Airport",
    city: "Paderborn",
  },
  {
    iata: "NRN",
    name: "Niederrhein Airport",
    city: "Weeze",
  },
  {
    iata: "DTM",
    name: "Dortmund Airport",
    city: "Dortmund",
  },
  {
    iata: "AGB",
    name: "Augsburg Airport",
    city: "Augsburg",
  },
  {
    iata: "OBF",
    name: "Oberpfaffenhofen Airport",
    city: "",
  },
  {
    iata: "RBM",
    name: "Straubing Airport",
    city: "Straubing",
  },
  {
    iata: "FDH",
    name: "Friedrichshafen Airport",
    city: "Friedrichshafen",
  },
  {
    iata: "FRF",
    name: "Oschersleben Airport",
    city: "Oschersleben",
  },
  {
    iata: "SZW",
    name: "Schwerin Parchim Airport",
    city: "",
  },
  {
    iata: "BYU",
    name: "Bayreuth Airport",
    city: "Bayreuth",
  },
  {
    iata: "QOB",
    name: "Ansbach-Petersdorf Airport",
    city: "Ansbach",
  },
  {
    iata: "HOQ",
    name: "Hof-Plauen Airport",
    city: "Hof",
  },
  {
    iata: "BBJ",
    name: "Bitburg Airport",
    city: "Bitburg",
  },
  {
    iata: "ZQW",
    name: null,
    city: "Zweibrucken",
  },
  {
    iata: "FKB",
    name: "Karlsruhe Baden-Baden Airport",
    city: "Baden-Baden",
  },
  {
    iata: "ZQL",
    name: "Donaueschingen-Villingen Airport",
    city: "Donaueschingen",
  },
  {
    iata: "LHA",
    name: "Lahr Airport",
    city: "",
  },
  {
    iata: "BWE",
    name: "Braunschweig Wolfsburg Airport",
    city: "",
  },
  {
    iata: "KSF",
    name: "Kassel-Calden Airport",
    city: "Kassel",
  },
  {
    iata: "BRV",
    name: "Bremerhaven Airport",
    city: "Bremerhaven",
  },
  {
    iata: "XLW",
    name: "Lemwerder Airport",
    city: "Lemwerder",
  },
  {
    iata: "EME",
    name: "Emden Airport",
    city: "Emden",
  },
  {
    iata: "AGE",
    name: "Wangerooge Airport",
    city: "Wangerooge",
  },
  {
    iata: "WVN",
    name: "Wilhelmshaven-Mariensiel Airport",
    city: "Wilhelmshaven",
  },
  {
    iata: "JUI",
    name: "Juist Airport",
    city: "Juist",
  },
  {
    iata: "LGO",
    name: "Langeoog Airport",
    city: "Langeoog",
  },
  {
    iata: "ZOW",
    name: "Nordhorn-Lingen Airport",
    city: "Klausheide",
  },
  {
    iata: "BMK",
    name: "Borkum Airport",
    city: "Borkum",
  },
  {
    iata: "NOD",
    name: "Norden-Norddeich Airport",
    city: "Norddeich",
  },
  {
    iata: "VAC",
    name: "Varrelbusch Airport",
    city: "Cloppenburg",
  },
  {
    iata: "NRD",
    name: "Norderney Airport",
    city: "Norderney",
  },
  {
    iata: "BMR",
    name: "Baltrum Airport",
    city: "Baltrum",
  },
  {
    iata: "HEI",
    name: null,
    city: "Busum",
  },
  {
    iata: "FLF",
    name: null,
    city: "Flensburg",
  },
  {
    iata: "HGL",
    name: null,
    city: "Helgoland",
  },
  {
    iata: "PSH",
    name: "St. Peter-Ording Airport",
    city: "Sankt Peter-Ording",
  },
  {
    iata: "GWT",
    name: "Westerland Sylt Airport",
    city: "Westerland",
  },
  {
    iata: "OHR",
    name: null,
    city: "Wyk auf Fohr",
  },
  {
    iata: "KDL",
    name: null,
    city: "Kardla",
  },
  {
    iata: "URE",
    name: "Kuressaare Airport",
    city: "Kuressaare",
  },
  {
    iata: "EPU",
    name: null,
    city: "Parnu",
  },
  {
    iata: "TLL",
    name: "Tallinn Airport",
    city: "Tallinn",
  },
  {
    iata: "TAY",
    name: "Tartu Airport",
    city: "Tartu",
  },
  {
    iata: "ENF",
    name: "Enontekio Airport",
    city: "Enontekio",
  },
  {
    iata: "QVE",
    name: "Forssa Airport",
    city: "Forssa",
  },
  {
    iata: "KEV",
    name: "Halli Airport",
    city: "Halli / Kuorevesi",
  },
  {
    iata: "HEM",
    name: "Helsinki Malmi Airport",
    city: "Helsinki",
  },
  {
    iata: "HEL",
    name: "Helsinki Vantaa Airport",
    city: "Helsinki",
  },
  {
    iata: "HYV",
    name: "Hyvinkaa Airport",
    city: "",
  },
  {
    iata: "KTQ",
    name: "Kitee Airport",
    city: "",
  },
  {
    iata: "IVL",
    name: "Ivalo Airport",
    city: "Ivalo",
  },
  {
    iata: "JOE",
    name: "Joensuu Airport",
    city: "Joensuu / Liperi",
  },
  {
    iata: "JYV",
    name: "Jyvaskyla Airport",
    city: "Jyvaskylan Maalaiskunta",
  },
  {
    iata: "KAU",
    name: "Kauhava Airport",
    city: "Kauhava",
  },
  {
    iata: "KEM",
    name: "Kemi-Tornio Airport",
    city: "Kemi / Tornio",
  },
  {
    iata: "KAJ",
    name: "Kajaani Airport",
    city: "Kajaani",
  },
  {
    iata: "KHJ",
    name: "Kauhajoki Airport",
    city: "",
  },
  {
    iata: "KOK",
    name: "Kruunupyy Airport",
    city: "Kokkola / Kruunupyy",
  },
  {
    iata: "KAO",
    name: "Kuusamo Airport",
    city: "Kuusamo",
  },
  {
    iata: "KTT",
    name: "Kittila Airport",
    city: "Kittila",
  },
  {
    iata: "KUO",
    name: "Kuopio Airport",
    city: "Kuopio / Siilinjarvi",
  },
  {
    iata: "QLF",
    name: "Lahti Vesivehmaa Airport",
    city: "",
  },
  {
    iata: "LPP",
    name: "Lappeenranta Airport",
    city: "Lappeenranta",
  },
  {
    iata: "MHQ",
    name: "Mariehamn Airport",
    city: "",
  },
  {
    iata: "MIK",
    name: "Mikkeli Airport",
    city: "Mikkeli",
  },
  {
    iata: "OUL",
    name: "Oulu Airport",
    city: "Oulu / Oulunsalo",
  },
  {
    iata: "POR",
    name: "Pori Airport",
    city: "Pori",
  },
  {
    iata: "RVN",
    name: "Rovaniemi Airport",
    city: "Rovaniemi",
  },
  {
    iata: "SVL",
    name: "Savonlinna Airport",
    city: "Savonlinna",
  },
  {
    iata: "SJY",
    name: null,
    city: "Seinajoki / Ilmajoki",
  },
  {
    iata: "SOT",
    name: "Sodankyla Airport",
    city: "Sodankyla",
  },
  {
    iata: "TMP",
    name: "Tampere-Pirkkala Airport",
    city: "Tampere / Pirkkala",
  },
  {
    iata: "TKU",
    name: "Turku Airport",
    city: "Turku",
  },
  {
    iata: "UTI",
    name: "Utti Air Base",
    city: "Utti / Valkeala",
  },
  {
    iata: "VAA",
    name: "Vaasa Airport",
    city: "Vaasa",
  },
  {
    iata: "VRK",
    name: "Varkaus Airport",
    city: "Varkaus / Joroinen",
  },
  {
    iata: "YLI",
    name: "Ylivieska Airport",
    city: "",
  },
  {
    iata: "AUE",
    name: "Abu Rudeis Airport",
  },
  {
    iata: "BFS",
    name: "Belfast International Airport",
    city: "Belfast",
  },
  {
    iata: "ENK",
    name: "St Angelo Airport",
    city: "Enniskillen",
  },
  {
    iata: "BHD",
    name: "George Best Belfast City Airport",
    city: "Belfast",
  },
  {
    iata: "LDY",
    name: "City of Derry Airport",
    city: "Derry",
  },
  {
    iata: "BHX",
    name: "Birmingham International Airport",
    city: "Birmingham",
  },
  {
    iata: "CVT",
    name: "Coventry Airport",
    city: "Coventry",
  },
  {
    iata: "GLO",
    name: "Gloucestershire Airport",
    city: "Staverton",
  },
  {
    iata: "ORM",
    name: "Sywell Aerodrome",
    city: "Northampton",
  },
  {
    iata: "NQT",
    name: "Nottingham Airport",
    city: "Nottingham",
  },
  {
    iata: "MAN",
    name: "Manchester Airport",
    city: "Manchester",
  },
  {
    iata: "XXB",
    name: "Manchester Woodford Airport",
  },
  {
    iata: "DSA",
    name: "Robin Hood Doncaster Sheffield Airport",
    city: "Doncaster",
  },
  {
    iata: "LYE",
    name: "RAF Lyneham",
    city: "Lyneham",
  },
  {
    iata: "DGX",
    name: "MOD St. Athan",
    city: "St. Athan",
  },
  {
    iata: "YEO",
    name: "RNAS Yeovilton",
    city: "Yeovil",
  },
  {
    iata: "CAL",
    name: "Campbeltown Airport",
    city: "Campbeltown",
  },
  {
    iata: "EOI",
    name: "Eday Airport",
    city: "Eday",
  },
  {
    iata: "FIE",
    name: "Fair Isle Airport",
    city: "Fair Isle",
  },
  {
    iata: "WHS",
    name: "Whalsay Airport",
    city: "Whalsay",
  },
  {
    iata: "COL",
    name: "Coll Airport",
    city: "Coll Island",
  },
  {
    iata: "NRL",
    name: "North Ronaldsay Airport",
    city: "North Ronaldsay",
  },
  {
    iata: "OBN",
    name: "Oban Airport",
    city: "North Connel",
  },
  {
    iata: "PPW",
    name: "Papa Westray Airport",
    city: "Papa Westray",
  },
  {
    iata: "SOY",
    name: "Stronsay Airport",
    city: "Stronsay",
  },
  {
    iata: "NDY",
    name: "Sanday Airport",
    city: "Sanday",
  },
  {
    iata: "LWK",
    name: "Lerwick / Tingwall Airport",
    city: "Lerwick",
  },
  {
    iata: "WRY",
    name: "Westray Airport",
    city: "Westray",
  },
  {
    iata: "CSA",
    name: "Colonsay Airstrip",
    city: "Colonsay",
  },
  {
    iata: "HAW",
    name: "Haverfordwest Airport",
    city: "Haverfordwest",
  },
  {
    iata: "CWL",
    name: "Cardiff International Airport",
    city: "Cardiff",
  },
  {
    iata: "SWS",
    name: "Swansea Airport",
    city: "Swansea",
  },
  {
    iata: "BRS",
    name: "Bristol International Airport",
    city: "Bristol",
  },
  {
    iata: "LPL",
    name: "Liverpool John Lennon Airport",
    city: "Liverpool",
  },
  {
    iata: "LTN",
    name: "London Luton Airport",
    city: "London",
  },
  {
    iata: "LEQ",
    name: "Land's End Airport",
    city: "Land's End",
  },
  {
    iata: "PLH",
    name: "Plymouth City Airport",
    city: "Plymouth",
  },
  {
    iata: "ISC",
    name: "St. Mary's Airport",
    city: "St. Mary's",
  },
  {
    iata: "BOH",
    name: "Bournemouth Airport",
    city: "Bournemouth",
  },
  {
    iata: "SOU",
    name: "Southampton Airport",
    city: "Southampton",
  },
  {
    iata: "BBP",
    name: "Bembridge Airport",
    city: "Bembridge",
  },
  {
    iata: "PZE",
    name: "Penzance Heliport",
  },
  {
    iata: "QLA",
    name: "Lasham Airport",
    city: "Lasham",
  },
  {
    iata: "NQY",
    name: "Newquay Cornwall Airport",
    city: "Newquay",
  },
  {
    iata: "QUG",
    name: "Chichester/Goodwood Airport",
    city: "Chichester",
  },
  {
    iata: "ACI",
    name: "Alderney Airport",
    city: "Saint Anne",
  },
  {
    iata: "GCI",
    name: "Guernsey Airport",
    city: "Saint Peter Port",
  },
  {
    iata: "JER",
    name: "Jersey Airport",
    city: "Saint Helier",
  },
  {
    iata: "ESH",
    name: "Shoreham Airport",
    city: "Brighton",
  },
  {
    iata: "BQH",
    name: "London Biggin Hill Airport",
    city: "London",
  },
  {
    iata: "LGW",
    name: "London Gatwick Airport",
    city: "London",
  },
  {
    iata: "KRH",
    name: "Redhill Aerodrome",
    city: "Redhill",
  },
  {
    iata: "LCY",
    name: "London City Airport",
    city: "London",
  },
  {
    iata: "FAB",
    name: "Farnborough Airport",
    city: "Farnborough",
  },
  {
    iata: "BBS",
    name: "Blackbushe Airport",
    city: "Yateley",
  },
  {
    iata: "LHR",
    name: "London Heathrow Airport",
    city: "London",
  },
  {
    iata: "SEN",
    name: "Southend Airport",
    city: "Southend",
  },
  {
    iata: "LYX",
    name: "Lydd Airport",
    city: "Lydd",
  },
  {
    iata: "MSE",
    name: "Kent International Airport",
    city: "Manston",
  },
  {
    iata: "CAX",
    name: "Carlisle Airport",
    city: "Carlisle",
  },
  {
    iata: "BLK",
    name: "Blackpool International Airport",
    city: "Blackpool",
  },
  {
    iata: "HUY",
    name: "Humberside Airport",
    city: "Grimsby",
  },
  {
    iata: "BWF",
    name: "Barrow Walney Island Airport",
    city: "Barrow-in-Furness",
  },
  {
    iata: "LBA",
    name: "Leeds Bradford Airport",
    city: "Leeds",
  },
  {
    iata: "CEG",
    name: "Hawarden Airport",
    city: "Hawarden",
  },
  {
    iata: "IOM",
    name: "Isle of Man Airport",
    city: "Castletown",
  },
  {
    iata: "NCL",
    name: "Newcastle Airport",
    city: "Newcastle",
  },
  {
    iata: "MME",
    name: "Durham Tees Valley Airport",
    city: "Durham",
  },
  {
    iata: "EMA",
    name: "East Midlands Airport",
    city: "Nottingham",
  },
  {
    iata: "HLY",
    name: "Anglesey Airport",
    city: "Angelsey",
  },
  {
    iata: "KOI",
    name: "Kirkwall Airport",
    city: "Orkney Islands",
  },
  {
    iata: "LSI",
    name: "Sumburgh Airport",
    city: "Lerwick",
  },
  {
    iata: "WIC",
    name: "Wick Airport",
    city: "Wick",
  },
  {
    iata: "ABZ",
    name: "Aberdeen Dyce Airport",
    city: "Aberdeen",
  },
  {
    iata: "INV",
    name: "Inverness Airport",
    city: "Inverness",
  },
  {
    iata: "GLA",
    name: "Glasgow International Airport",
    city: "Glasgow",
  },
  {
    iata: "EDI",
    name: "Edinburgh Airport",
    city: "Edinburgh",
  },
  {
    iata: "ILY",
    name: "Islay Airport",
    city: "Port Ellen",
  },
  {
    iata: "PIK",
    name: "Glasgow Prestwick Airport",
    city: "Glasgow",
  },
  {
    iata: "BEB",
    name: "Benbecula Airport",
    city: "Balivanich",
  },
  {
    iata: "SCS",
    name: "Scatsta Airport",
    city: "Shetland Islands",
  },
  {
    iata: "DND",
    name: "Dundee Airport",
    city: "Dundee",
  },
  {
    iata: "SYY",
    name: "Stornoway Airport",
    city: "Stornoway",
  },
  {
    iata: "BRR",
    name: "Barra Airport",
    city: "Eoligarry",
  },
  {
    iata: "PSL",
    name: "Perth/Scone Airport",
    city: "Perth",
  },
  {
    iata: "TRE",
    name: "Tiree Airport",
    city: "Balemartine",
  },
  {
    iata: "UNT",
    name: "Unst Airport",
    city: "Shetland Islands",
  },
  {
    iata: "BOL",
    name: "Ballykelly Airport",
    city: "Ballykelly",
  },
  {
    iata: "FSS",
    name: "RAF Kinloss",
    city: "Kinloss",
  },
  {
    iata: "ADX",
    name: "RAF Leuchars",
    city: "St. Andrews",
  },
  {
    iata: "LMO",
    name: "RAF Lossiemouth",
    city: "Lossiemouth",
  },
  {
    iata: "CBG",
    name: "Cambridge Airport",
    city: "Cambridge",
  },
  {
    iata: "NWI",
    name: "Norwich International Airport",
    city: "Norwich",
  },
  {
    iata: "STN",
    name: "London Stansted Airport",
    city: "London",
  },
  {
    iata: "QFO",
    name: "Duxford Airport",
    city: "Duxford",
  },
  {
    iata: "SZE",
    name: "Sheffield City Heliport",
    city: "Semera",
  },
  {
    iata: "EXT",
    name: "Exeter International Airport",
    city: "Exeter",
  },
  {
    iata: "FRK",
    name: "Fairoaks Airport",
    city: "Fregate Island",
  },
  {
    iata: "FZO",
    name: "Bristol Filton Airport",
    city: "Bristol",
  },
  {
    iata: "OXF",
    name: "Oxford (Kidlington) Airport",
    city: "Kidlington",
  },
  {
    iata: "RCS",
    name: "Rochester Airport",
    city: "Rochester",
  },
  {
    iata: "BEX",
    name: "RAF Benson",
    city: "Benson",
  },
  {
    iata: "LKZ",
    name: "RAF Lakenheath",
    city: "Lakenheath",
  },
  {
    iata: "MHZ",
    name: "RAF Mildenhall",
    city: "Mildenhall",
  },
  {
    iata: "QUY",
    name: "RAF Wyton",
    city: "St. Ives",
  },
  {
    iata: "FFD",
    name: "RAF Fairford",
    city: "Fairford",
  },
  {
    iata: "BZZ",
    name: "RAF Brize Norton",
    city: "Brize Norton",
  },
  {
    iata: "ODH",
    name: "RAF Odiham",
    city: "Odiham",
  },
  {
    iata: "WXF",
    name: "Wethersfield Airport",
    city: "Wethersfield",
  },
  {
    iata: "ADV",
    name: "Andover Airfield",
  },
  {
    iata: "NHT",
    name: "RAF Northolt",
    city: "London",
  },
  {
    iata: "GSY",
    name: "Binbrook Airfield",
  },
  {
    iata: "QCY",
    name: "RAF Coningsby",
    city: "Coningsby",
  },
  {
    iata: "BEQ",
    name: "RAF Honington",
    city: "Thetford",
  },
  {
    iata: "OKH",
    name: "RAF Cottesmore",
    city: "Cottesmore",
  },
  {
    iata: "SQZ",
    name: "RAF Scampton",
    city: "Scampton",
  },
  {
    iata: "HRT",
    name: "RAF Linton-On-Ouse",
    city: "Linton-On-Ouse",
  },
  {
    iata: "WTN",
    name: "RAF Waddington",
    city: "Waddington",
  },
  {
    iata: "MRH",
    name: "RAF Marham",
    city: "Marham",
  },
  {
    iata: "MPN",
    name: "Mount Pleasant Airport",
    city: "Mount Pleasant",
  },
  {
    iata: "AMS",
    name: "Amsterdam Airport Schiphol",
    city: "Amsterdam",
  },
  {
    iata: "MST",
    name: "Maastricht Aachen Airport",
    city: "Maastricht",
  },
  {
    iata: "QAR",
    name: "Deelen Air Base",
    city: "Arnhem",
  },
  {
    iata: "EIN",
    name: "Eindhoven Airport",
    city: "Eindhoven",
  },
  {
    iata: "GRQ",
    name: "Eelde Airport",
    city: "Groningen",
  },
  {
    iata: "GLZ",
    name: "Gilze Rijen Air Base",
    city: "Breda",
  },
  {
    iata: "DHR",
    name: "De Kooy Airport",
    city: "Den Helder",
  },
  {
    iata: "LEY",
    name: "Lelystad Airport",
    city: "Lelystad",
  },
  {
    iata: "LWR",
    name: "Leeuwarden Air Base",
    city: "Leeuwarden",
  },
  {
    iata: "RTM",
    name: "Rotterdam Airport",
    city: "Rotterdam",
  },
  {
    iata: "UTC",
    name: "Soesterberg Air Base",
  },
  {
    iata: "ENS",
    name: "Twenthe Airport",
    city: "Enschede",
  },
  {
    iata: "LID",
    name: "Valkenburg Naval Air Base",
  },
  {
    iata: "UDE",
    name: "Volkel Air Base",
    city: "Uden",
  },
  {
    iata: "WOE",
    name: "Woensdrecht Air Base",
    city: "Bergen Op Zoom",
  },
  {
    iata: "BYT",
    name: "Bantry Aerodrome",
    city: "Bantry",
  },
  {
    iata: "BLY",
    name: "Belmullet Aerodrome",
    city: "Belmullet",
  },
  {
    iata: "NNR",
    name: "Connemara Regional Airport",
    city: "Inverin",
  },
  {
    iata: "CLB",
    name: "Castlebar Airport",
    city: "Castlebar",
  },
  {
    iata: "WEX",
    name: "Castlebridge Airport",
    city: "Wexford",
  },
  {
    iata: "ORK",
    name: "Cork Airport",
    city: "Cork",
  },
  {
    iata: "GWY",
    name: "Galway Airport",
    city: "Galway",
  },
  {
    iata: "CFN",
    name: "Donegal Airport",
    city: "Donegal",
  },
  {
    iata: "DUB",
    name: "Dublin Airport",
    city: "Dublin",
  },
  {
    iata: "IOR",
    name: "Inishmore Aerodrome",
    city: "Inis Mor",
  },
  {
    iata: "INQ",
    name: "Inisheer Aerodrome",
    city: "Inis Oirr",
  },
  {
    iata: "KKY",
    name: "Kilkenny Airport",
    city: "Kilkenny",
  },
  {
    iata: "NOC",
    name: "Ireland West Knock Airport",
    city: "Charleston",
  },
  {
    iata: "KIR",
    name: "Kerry Airport",
    city: "Killarney",
  },
  {
    iata: "LTR",
    name: "Letterkenny Airport",
    city: "Letterkenny",
  },
  {
    iata: "IIA",
    name: "Inishmaan Aerodrome",
    city: "Inis Meain",
  },
  {
    iata: "SNN",
    name: "Shannon Airport",
    city: "Shannon",
  },
  {
    iata: "SXL",
    name: "Sligo Airport",
    city: "Sligo",
  },
  {
    iata: "WAT",
    name: "Waterford Airport",
    city: "Waterford",
  },
  {
    iata: "AAR",
    name: "Aarhus Airport",
    city: "Aarhus",
  },
  {
    iata: "BLL",
    name: "Billund Airport",
    city: "Billund",
  },
  {
    iata: "CPH",
    name: "Copenhagen Kastrup Airport",
    city: "Copenhagen",
  },
  {
    iata: "EBJ",
    name: "Esbjerg Airport",
    city: "Esbjerg",
  },
  {
    iata: "KRP",
    name: "Karup Airport",
    city: "Karup",
  },
  {
    iata: "BYR",
    name: null,
    city: "Laeso",
  },
  {
    iata: "MRW",
    name: "Lolland Falster Maribo Airport",
    city: "Lolland Falster / Maribo",
  },
  {
    iata: "ODE",
    name: "Odense Airport",
    city: "Odense",
  },
  {
    iata: "RKE",
    name: "Copenhagen Roskilde Airport",
    city: "Copenhagen",
  },
  {
    iata: "RNN",
    name: "Bornholm Airport",
    city: "Ronne",
  },
  {
    iata: "SGD",
    name: null,
    city: "Sonderborg",
  },
  {
    iata: "CNL",
    name: "Sindal Airport",
    city: "Sindal",
  },
  {
    iata: "SKS",
    name: "Vojens Skrydstrup Airport",
    city: "Vojens",
  },
  {
    iata: "SQW",
    name: "Skive Airport",
    city: "Skive",
  },
  {
    iata: "TED",
    name: "Thisted Airport",
    city: "Thisted",
  },
  {
    iata: "VDP",
    name: "Kolding Vamdrup Airport",
    city: "",
  },
  {
    iata: "FAE",
    name: "Vagar Airport",
    city: "Vagar",
  },
  {
    iata: "STA",
    name: "Stauning Airport",
    city: "Skjern / Ringkobing",
  },
  {
    iata: "AAL",
    name: "Aalborg Airport",
    city: "Aalborg",
  },
  {
    iata: "LUX",
    name: "Luxembourg-Findel International Airport",
    city: "Luxembourg",
  },
  {
    iata: "AES",
    name: null,
    city: "Alesund",
  },
  {
    iata: "ANX",
    name: null,
    city: "Andenes",
  },
  {
    iata: "ALF",
    name: "Alta Airport",
    city: "Alta",
  },
  {
    iata: "FDE",
    name: "Bringeland Airport",
    city: "Forde",
  },
  {
    iata: "BNN",
    name: null,
    city: "Bronnoy",
  },
  {
    iata: "BOO",
    name: null,
    city: "Bodo",
  },
  {
    iata: "BGO",
    name: "Bergen Airport, Flesland",
    city: "Bergen",
  },
  {
    iata: "BJF",
    name: null,
    city: "Batsfjord",
  },
  {
    iata: "BVG",
    name: null,
    city: "Berlevag",
  },
  {
    iata: "KRS",
    name: "Kristiansand Airport",
    city: "Kjevik",
  },
  {
    iata: "DLD",
    name: "Geilo Airport Dagali",
    city: "Dagali",
  },
  {
    iata: "BDU",
    name: "Bardufoss Airport",
    city: "Malselv",
  },
  {
    iata: "EVE",
    name: "Harstad/Narvik Airport, Evenes",
    city: "Evenes",
  },
  {
    iata: "FBU",
    name: "Oslo, Fornebu Airport",
  },
  {
    iata: "VDB",
    name: "Leirin Airport",
    city: "",
  },
  {
    iata: "FRO",
    name: null,
    city: "Floro",
  },
  {
    iata: "OSL",
    name: "Oslo Gardermoen Airport",
    city: "Oslo",
  },
  {
    iata: "HMR",
    name: "Stafsberg Airport",
    city: "Hamar",
  },
  {
    iata: "HAU",
    name: "Haugesund Airport",
    city: "Karmoy",
  },
  {
    iata: "HFT",
    name: "Hammerfest Airport",
    city: "Hammerfest",
  },
  {
    iata: "HAA",
    name: "Hasvik Airport",
    city: "Hasvik",
  },
  {
    iata: "HVG",
    name: "Valan Airport",
    city: "Honningsvag",
  },
  {
    iata: "QKX",
    name: "Kautokeino Air Base",
    city: "",
  },
  {
    iata: "KSU",
    name: "Kristiansund Airport, Kvernberget",
    city: "Kvernberget",
  },
  {
    iata: "GLL",
    name: "Gol Airport",
    city: "Klanten",
  },
  {
    iata: "KKN",
    name: null,
    city: "Kirkenes",
  },
  {
    iata: "FAN",
    name: "Lista Airport",
    city: "Farsund",
  },
  {
    iata: "LKN",
    name: "Leknes Airport",
    city: "Leknes",
  },
  {
    iata: "MEH",
    name: "Mehamn Airport",
    city: "Mehamn",
  },
  {
    iata: "MOL",
    name: "Molde Airport",
    city: "Aro",
  },
  {
    iata: "MJF",
    name: null,
    city: "",
  },
  {
    iata: "LKL",
    name: "Banak Airport",
    city: "Lakselv",
  },
  {
    iata: "NVK",
    name: "Narvik Framnes Airport",
    city: "Narvik",
  },
  {
    iata: "OSY",
    name: null,
    city: "Namsos",
  },
  {
    iata: "NTB",
    name: "Notodden Airport",
    city: "",
  },
  {
    iata: "OLA",
    name: null,
    city: "Orland",
  },
  {
    iata: "HOV",
    name: null,
    city: "Orsta",
  },
  {
    iata: "MQN",
    name: null,
    city: "Mo i Rana",
  },
  {
    iata: "RVK",
    name: null,
    city: "Rorvik",
  },
  {
    iata: "RRS",
    name: null,
    city: "Roros",
  },
  {
    iata: "RET",
    name: null,
    city: "",
  },
  {
    iata: "RYG",
    name: "Moss Airport, Rygge",
    city: "Rygge",
  },
  {
    iata: "LYR",
    name: "Svalbard Airport, Longyear",
    city: "Longyearbyen",
  },
  {
    iata: "SDN",
    name: "Sandane Airport, Anda",
    city: "Sandane",
  },
  {
    iata: "SOG",
    name: "Sogndal Airport",
    city: "Sogndal",
  },
  {
    iata: "SVJ",
    name: null,
    city: "Svolvaer",
  },
  {
    iata: "SKN",
    name: "Stokmarknes Skagen Airport",
    city: "Hadsel",
  },
  {
    iata: "SKE",
    name: "Skien Airport",
    city: "Geiteryggen",
  },
  {
    iata: "SRP",
    name: "Stord Airport",
    city: "Svea",
  },
  {
    iata: "SOJ",
    name: null,
    city: "Sorkjosen",
  },
  {
    iata: "VAW",
    name: null,
    city: "Vardo",
  },
  {
    iata: "SSJ",
    name: null,
    city: "Alstahaug",
  },
  {
    iata: "TOS",
    name: null,
    city: "Tromso",
  },
  {
    iata: "TRF",
    name: "Sandefjord Airport, Torp",
    city: "Torp",
  },
  {
    iata: "TRD",
    name: null,
    city: "Trondheim",
  },
  {
    iata: "VDS",
    name: null,
    city: "Vadso",
  },
  {
    iata: "VRY",
    name: null,
  },
  {
    iata: "SVG",
    name: "Stavanger Airport, Sola",
    city: "Stavanger",
  },
  {
    iata: "QYY",
    name: "Bia?ystok-Krywlany Airport",
    city: "Bialystok",
  },
  {
    iata: "BZG",
    name: "Bydgoszcz Ignacy Jan Paderewski Airport",
    city: "Bydgoszcz",
  },
  {
    iata: "CZW",
    name: "Cz?stochowa-Rudniki",
    city: "Czestochowa",
  },
  {
    iata: "GDN",
    name: "Gda?sk Lech Wa??sa Airport",
    city: "Gdansk",
  },
  {
    iata: "QLC",
    name: "Gliwice Glider Airport",
    city: "",
  },
  {
    iata: "KRK",
    name: null,
    city: "Krakow",
  },
  {
    iata: "OSZ",
    name: "Koszalin Zegrze Airport",
    city: "",
  },
  {
    iata: "KTW",
    name: "Katowice International Airport",
    city: "Katowice",
  },
  {
    iata: "QEO",
    name: "Bielsko-Bialo Kaniow Airfield",
    city: "Czechowice-Dziedzice",
  },
  {
    iata: "LCJ",
    name: null,
    city: "Lodz",
  },
  {
    iata: "QLU",
    name: "Lublin Radwiec Airport",
    city: "",
  },
  {
    iata: "QWS",
    name: "Nowy Targ Airport",
    city: "Nowy Targ",
  },
  {
    iata: "QYD",
    name: "Gdynia-Babie Do?y Air Base",
    city: "Gdynia",
  },
  {
    iata: "QPM",
    name: "Opole-Polska Nowa Wie? Airport",
    city: "Opole",
  },
  {
    iata: "POZ",
    name: "Pozna?-?awica Airport",
    city: "Poznan",
  },
  {
    iata: "RZE",
    name: null,
    city: "Rzeszow",
  },
  {
    iata: "SZZ",
    name: null,
    city: "Goleniow",
  },
  {
    iata: "OSP",
    name: "Redzikowo Air Base",
  },
  {
    iata: "SZY",
    name: "Szczytno-Szymany International Airport",
    city: "Szymany",
  },
  {
    iata: "WAW",
    name: "Warsaw Chopin Airport",
    city: "Warsaw",
  },
  {
    iata: "WRO",
    name: "Copernicus Wroc?aw Airport",
    city: "Wroclaw",
  },
  {
    iata: "IEG",
    name: null,
    city: "Babimost",
  },
  {
    iata: "RNB",
    name: "Ronneby Airport",
    city: "",
  },
  {
    iata: "XWP",
    name: null,
    city: "Hassleholm",
  },
  {
    iata: "GOT",
    name: "Gothenburg-Landvetter Airport",
    city: "Gothenburg",
  },
  {
    iata: "JKG",
    name: null,
    city: "Jonkoping",
  },
  {
    iata: "LDK",
    name: null,
    city: "Lidkoping",
  },
  {
    iata: "GSE",
    name: "Gothenburg City Airport",
    city: "Gothenburg",
  },
  {
    iata: "KVB",
    name: null,
    city: "Skovde",
  },
  {
    iata: "THN",
    name: null,
    city: "Trollhattan",
  },
  {
    iata: "KSK",
    name: "Karlskoga Airport",
    city: "",
  },
  {
    iata: "MXX",
    name: "Mora Airport",
    city: "",
  },
  {
    iata: "NYO",
    name: "Stockholm Skavsta Airport",
    city: "Stockholm / Nykoping",
  },
  {
    iata: "KID",
    name: "Kristianstad Airport",
    city: "Kristianstad",
  },
  {
    iata: "OSK",
    name: "Oskarshamn Airport",
    city: "",
  },
  {
    iata: "KLR",
    name: "Kalmar Airport",
    city: "",
  },
  {
    iata: "MMX",
    name: null,
    city: "Malmo",
  },
  {
    iata: "HAD",
    name: "Halmstad Airport",
    city: "Halmstad",
  },
  {
    iata: "VXO",
    name: null,
    city: "Vaxjo",
  },
  {
    iata: "EVG",
    name: "Sveg Airport",
    city: "",
  },
  {
    iata: "GEV",
    name: null,
    city: "Gallivare",
  },
  {
    iata: "HUV",
    name: "Hudiksvall Airport",
  },
  {
    iata: "KRF",
    name: null,
    city: "Kramfors / Solleftea",
  },
  {
    iata: "LYC",
    name: "Lycksele Airport",
    city: "",
  },
  {
    iata: "SDL",
    name: null,
    city: "Sundsvall/ Harnosand",
  },
  {
    iata: "OER",
    name: null,
    city: "Ornskoldsvik",
  },
  {
    iata: "KRN",
    name: "Kiruna Airport",
    city: "",
  },
  {
    iata: "SFT",
    name: null,
    city: "Skelleftea",
  },
  {
    iata: "UME",
    name: null,
    city: "Umea",
  },
  {
    iata: "VHM",
    name: "Vilhelmina Airport",
    city: "",
  },
  {
    iata: "AJR",
    name: "Arvidsjaur Airport",
    city: "Arvidsjaur",
  },
  {
    iata: "SOO",
    name: null,
    city: "Soderhamn",
  },
  {
    iata: "OSD",
    name: null,
    city: "Ostersund",
  },
  {
    iata: "ORB",
    name: null,
    city: "Orebro",
  },
  {
    iata: "HFS",
    name: "Hagfors Airport",
    city: "",
  },
  {
    iata: "KSD",
    name: "Karlstad Airport",
    city: "Karlstad",
  },
  {
    iata: "VST",
    name: null,
    city: "Stockholm / Vasteras",
  },
  {
    iata: "LLA",
    name: null,
    city: "Lulea",
  },
  {
    iata: "ARN",
    name: "Stockholm-Arlanda Airport",
    city: "Stockholm",
  },
  {
    iata: "BMA",
    name: "Stockholm-Bromma Airport",
    city: "Stockholm",
  },
  {
    iata: "BLE",
    name: "Borlange Airport",
    city: "",
  },
  {
    iata: "HLF",
    name: "Hultsfred Airport",
    city: "",
  },
  {
    iata: "GVX",
    name: null,
    city: "Gavle / Sandviken",
  },
  {
    iata: "LPI",
    name: null,
    city: "Linkoping",
  },
  {
    iata: "NRK",
    name: null,
    city: "Norrkoping",
  },
  {
    iata: "TYF",
    name: "Torsby Airport",
    city: "",
  },
  {
    iata: "EKT",
    name: "Eskilstuna Airport",
    city: "Eskilstuna",
  },
  {
    iata: "VBY",
    name: "Visby Airport",
    city: "Visby",
  },
  {
    iata: "VVK",
    name: null,
    city: "Vastervik",
  },
  {
    iata: "AGH",
    name: null,
    city: "Angelholm",
  },
  {
    iata: "SQO",
    name: "Storuman Airport",
    city: "",
  },
  {
    iata: "IDB",
    name: "Idre Airport",
    city: "Idre",
  },
  {
    iata: "PJA",
    name: "Pajala Airport",
    city: "",
  },
  {
    iata: "HMV",
    name: "Hemavan Airport",
    city: "",
  },
  {
    iata: "GLC",
    name: "Geladi Airport",
  },
  {
    iata: "SHC",
    name: "Shire Inda Selassie Airport",
    city: "Shire",
  },
  {
    iata: "SPM",
    name: "Spangdahlem Air Base",
    city: "Trier",
  },
  {
    iata: "RMS",
    name: "Ramstein Air Base",
    city: "Ramstein",
  },
  {
    iata: "ZCD",
    name: "Bamberg-Breitenau Airport",
    city: "Bamberg",
  },
  {
    iata: "ZCN",
    name: "Celle Airport",
    city: "",
  },
  {
    iata: "ZPQ",
    name: "Rheine Bentlage Airport",
    city: "",
  },
  {
    iata: "FRZ",
    name: "Fritzlar Airport",
    city: "Fritzlar",
  },
  {
    iata: "ZNF",
    name: "Hanau Army Air Field",
    city: "",
  },
  {
    iata: "QHD",
    name: "Heidelberg Army Heliport",
  },
  {
    iata: "NDZ",
    name: "Nordholz Airport",
    city: "",
  },
  {
    iata: "GKE",
    name: "Geilenkirchen Airport",
    city: "",
  },
  {
    iata: "RLG",
    name: "Rostock-Laage Airport",
    city: "Rostock",
  },
  {
    iata: "QOE",
    name: "Norvenich Airport",
    city: "",
  },
  {
    iata: "WBG",
    name: "Schleswig Airport",
    city: "",
  },
  {
    iata: "FNB",
    name: "Neubrandenburg Airport",
    city: "",
  },
  {
    iata: "WIE",
    name: "Wiesbaden Army Airfield",
    city: "Wiesbaden",
  },
  {
    iata: "FEL",
    name: null,
    city: "Furstenfeldbruck",
  },
  {
    iata: "IGS",
    name: "Ingolstadt Manching Airport",
    city: "Manching",
  },
  {
    iata: "GUT",
    name: null,
    city: "Gutersloh",
  },
  {
    iata: "BGN",
    name: "Brugge Air Base",
    city: "Belaya Gora",
  },
  {
    iata: "LPX",
    name: "Liep?ja International Airport",
    city: "Liepaja",
  },
  {
    iata: "RIX",
    name: "Riga International Airport",
    city: "Riga",
  },
  {
    iata: "VNT",
    name: "Ventspils International Airport",
    city: "Ventspils",
  },
  {
    iata: "EXI",
    name: "Excursion Inlet Seaplane Base",
  },
  {
    iata: "KUN",
    name: "Kaunas International Airport",
    city: "Kaunas",
  },
  {
    iata: "KLJ",
    name: "Klaip?da Airport",
    city: "Klaipeda",
  },
  {
    iata: "PLQ",
    name: "Palanga International Airport",
    city: "Palanga",
  },
  {
    iata: "PNV",
    name: null,
    city: "Panevezys",
  },
  {
    iata: "SQQ",
    name: null,
    city: "Siauliai",
  },
  {
    iata: "HLJ",
    name: "Barysiai Airport",
    city: "Barysiai",
  },
  {
    iata: "VNO",
    name: "Vilnius International Airport",
    city: "Vilnius",
  },
  {
    iata: "ALJ",
    name: "Alexander Bay Airport",
    city: "Alexander Bay",
  },
  {
    iata: "AGZ",
    name: "Aggeneys Airport",
    city: "Aggeneys",
  },
  {
    iata: "ADY",
    name: "Alldays Airport",
    city: "Alldays",
  },
  {
    iata: "BIY",
    name: "Bisho Airport",
    city: "Bisho",
  },
  {
    iata: "BFN",
    name: "J B M Hertzog International Airport",
    city: "Bloemfontain",
  },
  {
    iata: "UTE",
    name: "Butterworth Airport",
    city: "Bultfontein",
  },
  {
    iata: "CDO",
    name: "Gradock Airport",
    city: "Cradock",
  },
  {
    iata: "CPT",
    name: "Cape Town International Airport",
    city: "Cape Town",
  },
  {
    iata: "DUK",
    name: "Mubatuba Airport",
    city: "Mubatuba",
  },
  {
    iata: "PZL",
    name: "Zulu Inyala Airport",
    city: "Phinda",
  },
  {
    iata: "ELS",
    name: "Ben Schoeman Airport",
    city: "East London",
  },
  {
    iata: "EMG",
    name: "Empangeni Airport",
    city: "Empangeni",
  },
  {
    iata: "ELL",
    name: "Ellisras Matimba Airport",
    city: "Ellisras",
  },
  {
    iata: "FCB",
    name: "Ficksburg Sentraoes Airport",
    city: "Ficksburg",
  },
  {
    iata: "GCJ",
    name: "Grand Central Airport",
    city: "Midrand",
  },
  {
    iata: "GRJ",
    name: "George Airport",
    city: "George",
  },
  {
    iata: "GIY",
    name: "Giyani Airport",
    city: "Giyani",
  },
  {
    iata: "QRA",
    name: "Rand Airport",
    city: "Johannesburg",
  },
  {
    iata: "HLW",
    name: "Hluhluwe Airport",
    city: "Hluhluwe",
  },
  {
    iata: "HRS",
    name: "Harrismith Airport",
    city: "Harrismith",
  },
  {
    iata: "HDS",
    name: "Hoedspruit Air Force Base Airport",
    city: "Hoedspruit",
  },
  {
    iata: "JNB",
    name: "OR Tambo International Airport",
    city: "Johannesburg",
  },
  {
    iata: "KXE",
    name: "P C Pelser Airport",
    city: "Klerksdorp",
  },
  {
    iata: "KIM",
    name: "Kimberley Airport",
    city: "Kimberley",
  },
  {
    iata: "MQP",
    name: "Kruger Mpumalanga International Airport",
    city: "Mpumalanga",
  },
  {
    iata: "KOF",
    name: "Komatipoort Airport",
    city: "Komatipoort",
  },
  {
    iata: "KMH",
    name: "Johan Pienaar Airport",
    city: "Kuruman",
  },
  {
    iata: "KLZ",
    name: "Kleinsee Airport",
    city: "Kleinsee",
  },
  {
    iata: "HLA",
    name: "Lanseria Airport",
    city: "Johannesburg",
  },
  {
    iata: "LMR",
    name: "Lime Acres Finsch Mine Airport",
    city: "Lime Acres",
  },
  {
    iata: "LDZ",
    name: "Londolozi Airport",
    city: "Londolozi",
  },
  {
    iata: "DUR",
    name: "King Shaka International Airport",
    city: "Durban",
  },
  {
    iata: "LUJ",
    name: "Lusikisiki Airport",
    city: "Lusikisiki",
  },
  {
    iata: "LCD",
    name: "Louis Trichardt Airport",
    city: "Louis Trichardt",
  },
  {
    iata: "LGE",
    name: "Langebaanweg Airport",
  },
  {
    iata: "LAY",
    name: "Ladysmith Airport",
    city: "Ladysmith",
  },
  {
    iata: "AAM",
    name: "Malamala Airport",
    city: "Malamala",
  },
  {
    iata: "MGH",
    name: "Margate Airport",
    city: "Margate",
  },
  {
    iata: "MBD",
    name: "Mmabatho International Airport",
    city: "Mafeking",
  },
  {
    iata: "LLE",
    name: "Riverside Airport",
    city: "Malelane",
  },
  {
    iata: "MZY",
    name: "Mossel Bay Airport",
    city: "Mossel Bay",
  },
  {
    iata: "MEZ",
    name: "Morningside Farm Airport",
    city: "Musina",
  },
  {
    iata: "MZQ",
    name: "Mkuze Airport",
    city: "Mkuze",
  },
  {
    iata: "NCS",
    name: "Newcastle Airport",
    city: "Newcastle",
  },
  {
    iata: "NGL",
    name: "Ngala Airport",
    city: "Ngala",
  },
  {
    iata: "NLP",
    name: "Nelspruit Airport",
    city: "Nelspruit",
  },
  {
    iata: "OVG",
    name: "Overberg Airport",
    city: "Overberg",
  },
  {
    iata: "OUH",
    name: "Oudtshoorn Airport",
    city: "Oudtshoorn",
  },
  {
    iata: "AFD",
    name: "Port Alfred Airport",
    city: "Port Alfred",
  },
  {
    iata: "PLZ",
    name: "Port Elizabeth Airport",
    city: "Port Elizabeth",
  },
  {
    iata: "PBZ",
    name: "Plettenberg Bay Airport",
    city: "Plettenberg Bay",
  },
  {
    iata: "PHW",
    name: "Hendrik Van Eck Airport",
    city: "Phalaborwa",
  },
  {
    iata: "PTG",
    name: "Pietersburg Municipal Airport",
    city: "Potgietersrus",
  },
  {
    iata: "JOH",
    name: "Port St Johns Airport",
    city: "Port St Johns",
  },
  {
    iata: "PRK",
    name: "Prieska Airport",
    city: "Prieska",
  },
  {
    iata: "PZB",
    name: "Pietermaritzburg Airport",
    city: "Pietermaritzburg",
  },
  {
    iata: "NTY",
    name: "Pilanesberg International Airport",
    city: "Pilanesberg",
  },
  {
    iata: "PTG",
    name: "Polokwane International Airport",
    city: "Potgietersrus",
  },
  {
    iata: "PCF",
    name: "Potchefstroom Airport",
    city: "Potchefstroom",
  },
  {
    iata: "UTW",
    name: "Queenstown Airport",
    city: "Queenstown",
  },
  {
    iata: "RCB",
    name: "Richards Bay Airport",
    city: "Richards Bay",
  },
  {
    iata: "RVO",
    name: "Reivilo Airport",
    city: "Reivilo",
  },
  {
    iata: "ROD",
    name: "Robertson Airport",
    city: "Robertson",
  },
  {
    iata: "SBU",
    name: "Springbok Airport",
    city: "Springbok",
  },
  {
    iata: "ZEC",
    name: "Secunda Airport",
    city: "Secunda",
  },
  {
    iata: "SDB",
    name: "Saldanha /Vredenburg Airport",
    city: "Langebaanweg",
  },
  {
    iata: "GSS",
    name: "Sabi Sabi Airport",
    city: "Belfast",
  },
  {
    iata: "SIS",
    name: "Sishen Airport",
    city: "Sishen",
  },
  {
    iata: "SZK",
    name: "Skukuza Airport",
    city: "Skukuza",
  },
  {
    iata: "THY",
    name: "Thohoyandou Airport",
    city: "Thohoyandou",
  },
  {
    iata: "TCU",
    name: "Thaba Nchu Tar Airport",
    city: "Homeward",
  },
  {
    iata: "LTA",
    name: "Tzaneen Airport",
    city: "Tzaneen",
  },
  {
    iata: "ULD",
    name: "Prince Mangosuthu Buthelezi Airport",
    city: "Ulundi",
  },
  {
    iata: "UTN",
    name: "Pierre Van Ryneveld Airport",
    city: "Upington",
  },
  {
    iata: "UTT",
    name: "K. D. Matanzima Airport",
    city: "Mthatha",
  },
  {
    iata: "VRU",
    name: "Vryburg Airport",
    city: "Vyrburg",
  },
  {
    iata: "VIR",
    name: "Virginia Airport",
    city: "Durban",
  },
  {
    iata: "VRE",
    name: "Vredendal Airport",
    city: "Vredendal",
  },
  {
    iata: "VYD",
    name: "Vryheid Airport",
    city: "Vryheid",
  },
  {
    iata: "PRY",
    name: "Wonderboom Airport",
    city: "Pretoria",
  },
  {
    iata: "AFB",
    name: "Waterkloof Air Force Base Airport",
  },
  {
    iata: "WEL",
    name: "Welkom Airport",
    city: "Welkom",
  },
  {
    iata: "FRW",
    name: "Francistown Airport",
    city: "Francistown",
  },
  {
    iata: "GNZ",
    name: "Ghanzi Airport",
    city: "Ghanzi",
  },
  {
    iata: "JWA",
    name: "Jwaneng Airport",
    city: "",
  },
  {
    iata: "BBK",
    name: "Kasane Airport",
    city: "Kasane",
  },
  {
    iata: "KHW",
    name: "Khwai River Lodge Airport",
    city: "Khwai River Lodge",
  },
  {
    iata: "MUB",
    name: "Maun Airport",
    city: "Maun",
  },
  {
    iata: "ORP",
    name: "Orapa Airport",
    city: "",
  },
  {
    iata: "QPH",
    name: "Palapye Airport",
    city: "Palapye",
  },
  {
    iata: "GBE",
    name: "Sir Seretse Khama International Airport",
    city: "Gaborone",
  },
  {
    iata: "SXN",
    name: "Sua Pan Airport",
    city: "",
  },
  {
    iata: "PKW",
    name: "Selebi Phikwe Airport",
    city: "",
  },
  {
    iata: "SWX",
    name: "Shakawe Airport",
    city: "Shakawe",
  },
  {
    iata: "TLD",
    name: "Limpopo Valley Airport",
    city: "Tuli Lodge",
  },
  {
    iata: "TBY",
    name: "Tshabong Airport",
    city: "Tshabong",
  },
  {
    iata: "BZV",
    name: "Maya-Maya Airport",
    city: "Brazzaville",
  },
  {
    iata: "DJM",
    name: "Djambala Airport",
    city: "Djambala",
  },
  {
    iata: "KNJ",
    name: "Kindamba Airport",
    city: "Kindamba",
  },
  {
    iata: "LCO",
    name: "Lague Airport",
    city: "Lague",
  },
  {
    iata: "MUY",
    name: "Mouyondzi Airport",
    city: "Mouyondzi",
  },
  {
    iata: "SIB",
    name: "Sibiti Airport",
    city: "Sibiti",
  },
  {
    iata: "NKY",
    name: "Yokangassi Airport",
    city: "Nkayi",
  },
  {
    iata: "ANJ",
    name: "Zanaga Airport",
    city: "Zanaga",
  },
  {
    iata: "MSX",
    name: "Mossendjo Airport",
    city: "Mossendjo",
  },
  {
    iata: "BOE",
    name: "Boundji Airport",
    city: "Boundji",
  },
  {
    iata: "EWO",
    name: "Ewo Airport",
    city: "Ewo",
  },
  {
    iata: "GMM",
    name: "Gamboma Airport",
    city: "Gamboma",
  },
  {
    iata: "ION",
    name: "Impfondo Airport",
    city: "Impfondo",
  },
  {
    iata: "KEE",
    name: "Kelle Airport",
    city: "Kelle",
  },
  {
    iata: "MKJ",
    name: "Makoua Airport",
    city: "Makoua",
  },
  {
    iata: "FTX",
    name: "Owando Airport",
    city: "Owando",
  },
  {
    iata: "SOE",
    name: "Souanke Airport",
    city: "Souanke",
  },
  {
    iata: "BTB",
    name: "Betou Airport",
    city: "Betou",
  },
  {
    iata: "OUE",
    name: "Ouesso Airport",
    city: "",
  },
  {
    iata: "KMK",
    name: "Makabana Airport",
    city: "Makabana",
  },
  {
    iata: "DIS",
    name: "Loubomo Airport",
    city: "Dolisie",
  },
  {
    iata: "PNR",
    name: "Pointe Noire Airport",
    city: "Pointe Noire",
  },
  {
    iata: "MTS",
    name: "Matsapha Airport",
    city: "Manzini",
  },
  {
    iata: "FEA",
    name: "Fetlar Airport",
  },
  {
    iata: "CRF",
    name: "Carnot Airport",
    city: "Carnot",
  },
  {
    iata: "BGF",
    name: "Bangui M'Poko International Airport",
    city: "Bangui",
  },
  {
    iata: "BGU",
    name: "Bangassou Airport",
    city: "Bangassou",
  },
  {
    iata: "IRO",
    name: "Birao Airport",
    city: "Birao",
  },
  {
    iata: "BEM",
    name: null,
    city: "Bossembele",
  },
  {
    iata: "BBY",
    name: "Bambari Airport",
    city: "Bambari",
  },
  {
    iata: "NDL",
    name: null,
    city: "N'Dele",
  },
  {
    iata: "BOP",
    name: "Bouar Airport",
    city: "Bouar",
  },
  {
    iata: "BIV",
    name: "Bria Airport",
    city: "Bria",
  },
  {
    iata: "BSN",
    name: "Bossangoa Airport",
    city: "Bossangoa",
  },
  {
    iata: "BBT",
    name: null,
    city: "Berberati",
  },
  {
    iata: "ODA",
    name: "Ouadda Airport",
    city: "Ouadda",
  },
  {
    iata: "AIG",
    name: "Yalinga Airport",
    city: "Yalinga",
  },
  {
    iata: "IMO",
    name: "Zemio Airport",
    city: "Zemio",
  },
  {
    iata: "MKI",
    name: "M'Boki Airport",
    city: "Mboki",
  },
  {
    iata: "BTG",
    name: "Batangafo Airport",
    city: "Batangafo",
  },
  {
    iata: "GDI",
    name: "Gordil Airport",
    city: "Melle",
  },
  {
    iata: "BMF",
    name: "Bakouma Airport",
    city: "Bakouma",
  },
  {
    iata: "ODJ",
    name: null,
    city: "Ouanda Djalle",
  },
  {
    iata: "RFA",
    name: null,
    city: "Rafai",
  },
  {
    iata: "BCF",
    name: "Bouca Airport",
    city: "Bouca",
  },
  {
    iata: "BOZ",
    name: "Bozoum Airport",
    city: "Bozoum",
  },
  {
    iata: "FEW",
    name: "Francis E Warren Air Force Base",
  },
  {
    iata: "BSG",
    name: "Bata Airport",
    city: "",
  },
  {
    iata: "SSG",
    name: "Malabo Airport",
    city: "Malabo",
  },
  {
    iata: "ASI",
    name: "RAF Ascension Island",
    city: "Ascension Island",
  },
  {
    iata: "MRU",
    name: "Sir Seewoosagur Ramgoolam International Airport",
    city: "Port Louis",
  },
  {
    iata: "RRG",
    name: "Sir Charles Gaetan Duval Airport",
    city: "Port Mathurin",
  },
  {
    iata: "FIN",
    name: "Finschhafen Airport",
    city: "Buki",
  },
  {
    iata: "NKW",
    name: "Diego Garcia Naval Support Facility",
    city: "Diego Garcia",
  },
  {
    iata: "NKS",
    name: "Nkongsamba Airport",
    city: "Nkongsamba",
  },
  {
    iata: "KBI",
    name: "Kribi Airport",
    city: "Kribi",
  },
  {
    iata: "TKC",
    name: "Tiko Airport",
    city: "Tiko",
  },
  {
    iata: "DLA",
    name: "Douala International Airport",
    city: "Douala",
  },
  {
    iata: "MMF",
    name: "Mamfe Airport",
    city: "Mamfe",
  },
  {
    iata: "KLE",
    name: null,
    city: "Kaele",
  },
  {
    iata: "OUR",
    name: "Batouri Airport",
    city: "Batouri",
  },
  {
    iata: "GXX",
    name: "Yagoua Airport",
    city: "Yagoua",
  },
  {
    iata: "MVR",
    name: "Salak Airport",
    city: "Maroua",
  },
  {
    iata: "FOM",
    name: "Foumban Nkounja Airport",
    city: "Foumban",
  },
  {
    iata: "NGE",
    name: null,
    city: "N'Gaoundere",
  },
  {
    iata: "BTA",
    name: "Bertoua Airport",
    city: "Bertoua",
  },
  {
    iata: "GOU",
    name: "Garoua International Airport",
    city: "Garoua",
  },
  {
    iata: "DSC",
    name: "Dschang Airport",
    city: "Dschang",
  },
  {
    iata: "BFX",
    name: "Bafoussam Airport",
    city: "Bafoussam",
  },
  {
    iata: "BPC",
    name: "Bamenda Airport",
    city: "Bamenda",
  },
  {
    iata: "EBW",
    name: "Ebolowa Airport",
    city: "Ebolowa",
  },
  {
    iata: "YAO",
    name: null,
    city: "Yaounde",
  },
  {
    iata: "NSI",
    name: null,
    city: "Yaounde",
  },
  {
    iata: "MMQ",
    name: "Mbala Airport",
    city: "Mbala",
  },
  {
    iata: "CIP",
    name: "Chipata Airport",
    city: "Chipata",
  },
  {
    iata: "ZKP",
    name: "Kasompe Airport",
    city: "Kasompe",
  },
  {
    iata: "KLB",
    name: "Kalabo Airport",
    city: "Kalabo",
  },
  {
    iata: "KMZ",
    name: "Kaoma Airport",
    city: "Kaoma",
  },
  {
    iata: "KAA",
    name: "Kasama Airport",
    city: "Kasama",
  },
  {
    iata: "ZKB",
    name: "Kasaba Bay Airport",
    city: "Kasaba Bay",
  },
  {
    iata: "LVI",
    name: "Livingstone Airport",
    city: "Livingstone",
  },
  {
    iata: "LXU",
    name: "Lukulu Airport",
    city: "Lukulu",
  },
  {
    iata: "LUN",
    name: "Lusaka International Airport",
    city: "Lusaka",
  },
  {
    iata: "MNS",
    name: "Mansa Airport",
    city: "Mansa",
  },
  {
    iata: "MFU",
    name: "Mfuwe Airport",
    city: "Mfuwe",
  },
  {
    iata: "MNR",
    name: "Mongu Airport",
    city: "Mongu",
  },
  {
    iata: "ZGM",
    name: "Ngoma Airport",
    city: "Ngoma",
  },
  {
    iata: "NLA",
    name: "Ndola Airport",
    city: "Ndola",
  },
  {
    iata: "SXG",
    name: "Senanga Airport",
    city: "Senanga",
  },
  {
    iata: "KIW",
    name: "Southdowns Airport",
    city: "Kitwe",
  },
  {
    iata: "SJQ",
    name: "Sesheke Airport",
    city: "Sesheke",
  },
  {
    iata: "SLI",
    name: "Solwesi Airport",
    city: "Solwesi",
  },
  {
    iata: "BBZ",
    name: "Zambezi Airport",
    city: "Zambezi",
  },
  {
    iata: "ULI",
    name: "Falalop Island Airport",
  },
  {
    iata: "HAH",
    name: "Prince Said Ibrahim International Airport",
    city: "Moroni",
  },
  {
    iata: "NWA",
    name: null,
    city: "",
  },
  {
    iata: "YVA",
    name: "Iconi Airport",
    city: "Moroni",
  },
  {
    iata: "AJN",
    name: "Ouani Airport",
    city: "Ouani",
  },
  {
    iata: "DZA",
    name: "Dzaoudzi Pamandzi International Airport",
    city: "Dzaoudzi",
  },
  {
    iata: "RUN",
    name: "Roland Garros Airport",
    city: "St Denis",
  },
  {
    iata: "ZSE",
    name: "Pierrefonds Airport",
    city: "St Pierre",
  },
  {
    iata: "WML",
    name: "Malaimbandy Airport",
    city: "Malaimbandy",
  },
  {
    iata: "ATJ",
    name: "Antsirabe Airport",
    city: "Antsirabe",
  },
  {
    iata: "WAQ",
    name: "Antsalova Airport",
    city: "Antsalova",
  },
  {
    iata: "VVB",
    name: "Mahanoro Airport",
    city: "Mahanoro",
  },
  {
    iata: "TNR",
    name: "Ivato Airport",
    city: "Antananarivo",
  },
  {
    iata: "JVA",
    name: "Ankavandra Airport",
    city: "Ankavandra",
  },
  {
    iata: "BMD",
    name: "Belo sur Tsiribihina Airport",
    city: "Belo sur Tsiribihina",
  },
  {
    iata: "ZVA",
    name: "Miandrivazo Airport",
    city: "",
  },
  {
    iata: "MXT",
    name: "Maintirano Airport",
    city: "Maintirano",
  },
  {
    iata: "ILK",
    name: "Atsinanana Airport",
    city: "Ilaka",
  },
  {
    iata: "TVA",
    name: "Morafenobe Airport",
    city: "Morafenobe",
  },
  {
    iata: "SMS",
    name: "Sainte Marie Airport",
    city: "",
  },
  {
    iata: "TMM",
    name: "Toamasina Airport",
    city: "",
  },
  {
    iata: "WTA",
    name: "Tambohorano Airport",
    city: "Tambohorano",
  },
  {
    iata: "MOQ",
    name: "Morondava Airport",
    city: "",
  },
  {
    iata: "WTS",
    name: "Tsiroanomandidy Airport",
    city: "Tsiroanomandidy",
  },
  {
    iata: "VAT",
    name: "Vatomandry Airport",
    city: "Vatomandry",
  },
  {
    iata: "WAM",
    name: "Ambatondrazaka Airport",
    city: "Ambatondrazaka",
  },
  {
    iata: "DIE",
    name: "Arrachart Airport",
    city: "",
  },
  {
    iata: "WMR",
    name: "Mananara Nord Airport",
    city: "Mananara Nord",
  },
  {
    iata: "ZWA",
    name: "Andapa Airport",
    city: "",
  },
  {
    iata: "AMB",
    name: "Ambilobe Airport",
    city: "",
  },
  {
    iata: "WBD",
    name: "Avaratra Airport",
    city: "Befandriana",
  },
  {
    iata: "WPB",
    name: null,
    city: "Port Berge",
  },
  {
    iata: "ANM",
    name: "Antsirabato Airport",
    city: "",
  },
  {
    iata: "IVA",
    name: "Ambanja Airport",
    city: "Ambanja",
  },
  {
    iata: "HVA",
    name: "Analalava Airport",
    city: "",
  },
  {
    iata: "MJN",
    name: "Amborovy Airport",
    city: "",
  },
  {
    iata: "NOS",
    name: "Fascene Airport",
    city: "Nosy Be",
  },
  {
    iata: "DWB",
    name: "Soalala Airport",
    city: "Soalala",
  },
  {
    iata: "WMP",
    name: "Mampikony Airport",
    city: "Mampikony",
  },
  {
    iata: "BPY",
    name: "Besalampy Airport",
    city: "",
  },
  {
    iata: "WMN",
    name: "Maroantsetra Airport",
    city: "",
  },
  {
    iata: "SVB",
    name: "Sambava Airport",
    city: "",
  },
  {
    iata: "TTS",
    name: "Tsaratanana Airport",
    city: "Tsaratanana",
  },
  {
    iata: "VOH",
    name: "Vohimarina Airport",
    city: "",
  },
  {
    iata: "WAI",
    name: "Ambalabe Airport",
    city: "Antsohihy",
  },
  {
    iata: "WMA",
    name: "Mandritsara Airport",
    city: "Mandritsara",
  },
  {
    iata: "WBO",
    name: "Antsoa Airport",
    city: "Beroroha",
  },
  {
    iata: "WMD",
    name: "Mandabe Airport",
    city: "Mandabe",
  },
  {
    iata: "FTU",
    name: null,
    city: "Tolanaro",
  },
  {
    iata: "WFI",
    name: "Fianarantsoa Airport",
    city: "",
  },
  {
    iata: "RVA",
    name: "Farafangana Airport",
    city: "",
  },
  {
    iata: "IHO",
    name: "Ihosy Airport",
    city: "Ihosy",
  },
  {
    iata: "MJA",
    name: "Manja Airport",
    city: "Manja",
  },
  {
    iata: "WVK",
    name: "Manakara Airport",
    city: "",
  },
  {
    iata: "OVA",
    name: "Bekily Airport",
    city: "Bekily",
  },
  {
    iata: "MNJ",
    name: "Mananjary Airport",
    city: "",
  },
  {
    iata: "TDV",
    name: "Samangoky Airport",
    city: "Tanandava",
  },
  {
    iata: "MXM",
    name: "Morombe Airport",
    city: "",
  },
  {
    iata: "TLE",
    name: "Toliara Airport",
    city: "",
  },
  {
    iata: "BKU",
    name: "Betioky Airport",
    city: "Betioky",
  },
  {
    iata: "AMP",
    name: "Ampanihy Airport",
    city: "Ampanihy",
  },
  {
    iata: "WAK",
    name: "Ankazoabo Airport",
    city: "Ankazoabo",
  },
  {
    iata: "AZZ",
    name: "Ambriz Airport",
    city: "Ambriz",
  },
  {
    iata: "SSY",
    name: "Mbanza Congo Airport",
    city: "Mbanza Congo",
  },
  {
    iata: "BUG",
    name: "Benguela Airport",
    city: "Benguela",
  },
  {
    iata: "CAB",
    name: "Cabinda Airport",
    city: "Cabinda",
  },
  {
    iata: "CFF",
    name: "Cafunfo Airport",
    city: "Cafunfo",
  },
  {
    iata: "PGI",
    name: "Chitato Airport",
    city: "Chitato",
  },
  {
    iata: "CBT",
    name: "Catumbela Airport",
    city: "Catumbela",
  },
  {
    iata: "CTI",
    name: "Cuito Cuanavale Airport",
    city: "Cuito Cuanavale",
  },
  {
    iata: "CXM",
    name: "Camaxilo Airport",
    city: "Camaxilo",
  },
  {
    iata: "CAV",
    name: "Cazombo Airport",
    city: "Cazombo",
  },
  {
    iata: "DUE",
    name: "Dundo Airport",
    city: "Chitato",
  },
  {
    iata: "VPE",
    name: "Ngjiva Pereira Airport",
    city: "Ngiva",
  },
  {
    iata: "NOV",
    name: "Nova Lisboa Airport",
    city: "Huambo",
  },
  {
    iata: "SVP",
    name: "Kuito Airport",
    city: "Kuito",
  },
  {
    iata: "LAD",
    name: "Quatro De Fevereiro Airport",
    city: "Luanda",
  },
  {
    iata: "MEG",
    name: "Malanje Airport",
    city: "Malanje",
  },
  {
    iata: "SPP",
    name: "Menongue Airport",
    city: "Menongue",
  },
  {
    iata: "MSZ",
    name: "Namibe Airport",
    city: "Namibe",
  },
  {
    iata: "GXG",
    name: "Negage Airport",
    city: "Negage",
  },
  {
    iata: "PBN",
    name: "Porto Amboim Airport",
    city: "Port Amboim",
  },
  {
    iata: "VHC",
    name: "Saurimo Airport",
    city: "Saurimo",
  },
  {
    iata: "SZA",
    name: "Soyo Airport",
    city: "Soyo",
  },
  {
    iata: "NDD",
    name: "Sumbe Airport",
    city: "Sumbe",
  },
  {
    iata: "UAL",
    name: "Luau Airport",
    city: "Luau",
  },
  {
    iata: "SDD",
    name: "Lubango Airport",
    city: "Lubango",
  },
  {
    iata: "LUO",
    name: "Luena Airport",
    city: "Luena",
  },
  {
    iata: "UGO",
    name: "Uige Airport",
    city: "Uige",
  },
  {
    iata: "CEO",
    name: "Waco Kungo Airport",
    city: "Waco Kungo",
  },
  {
    iata: "XGN",
    name: "Xangongo Airport",
    city: "Xangongo",
  },
  {
    iata: "ARZ",
    name: "N'zeto Airport",
    city: "N'zeto",
  },
  {
    iata: "BGB",
    name: "Booue Airport",
    city: "Booue",
  },
  {
    iata: "KDN",
    name: "Ndende Airport",
    city: "Ndende",
  },
  {
    iata: "FOU",
    name: "Fougamou Airport",
    city: "Fougamou",
  },
  {
    iata: "MBC",
    name: "M'Bigou Airport",
    city: "M'Bigou",
  },
  {
    iata: "MGX",
    name: "Moabi Airport",
    city: "Moabi",
  },
  {
    iata: "KDJ",
    name: "Ville Airport",
    city: "N'Djole",
  },
  {
    iata: "KOU",
    name: "Koulamoutou Airport",
    city: "Koulamoutou",
  },
  {
    iata: "MJL",
    name: "Mouilla Ville Airport",
    city: "Mouila",
  },
  {
    iata: "OYE",
    name: "Oyem Airport",
    city: "Oyem",
  },
  {
    iata: "OKN",
    name: "Okondja Airport",
    city: "Okondja",
  },
  {
    iata: "LBQ",
    name: "Lambarene Airport",
    city: "Lambarene",
  },
  {
    iata: "MVX",
    name: "Minvoul Airport",
    city: "Minvoul",
  },
  {
    iata: "BMM",
    name: "Bitam Airport",
    city: "Bitam",
  },
  {
    iata: "MFF",
    name: "Moanda Airport",
    city: "Moanda",
  },
  {
    iata: "MKB",
    name: "Mekambo Airport",
    city: "Mekambo",
  },
  {
    iata: "POG",
    name: "Port Gentil Airport",
    city: "Port Gentil",
  },
  {
    iata: "OMB",
    name: "Omboue Hopital Airport",
    city: "Omboue",
  },
  {
    iata: "MKU",
    name: "Makokou Airport",
    city: "Makokou",
  },
  {
    iata: "LBV",
    name: "Leon M Ba Airport",
    city: "Libreville",
  },
  {
    iata: "MZC",
    name: "Mitzic Airport",
    city: "Mitzic",
  },
  {
    iata: "MVB",
    name: "M'Vengue El Hadj Omar Bongo Ondimba International Airport",
    city: "Franceville",
  },
  {
    iata: "LTL",
    name: "Lastourville Airport",
    city: "Lastourville",
  },
  {
    iata: "ZKM",
    name: "Sette Cama Airport",
    city: "Sette Cama",
  },
  {
    iata: "TCH",
    name: "Tchibanga Airport",
    city: "Tchibanga",
  },
  {
    iata: "MYB",
    name: "Mayumba Airport",
    city: "Mayumba",
  },
  {
    iata: "PCP",
    name: "Principe Airport",
    city: "",
  },
  {
    iata: "TMS",
    name: null,
    city: "Sao Tome",
  },
  {
    iata: "ANO",
    name: "Angoche Airport",
    city: "Angoche",
  },
  {
    iata: "BEW",
    name: "Beira Airport",
    city: "Beira",
  },
  {
    iata: "FXO",
    name: "Cuamba Airport",
    city: "Cuamba",
  },
  {
    iata: "VPY",
    name: "Chimoio Airport",
    city: "Chimoio",
  },
  {
    iata: "IHC",
    name: "Inhaca Airport",
    city: "Inhaca",
  },
  {
    iata: "INH",
    name: "Inhambane Airport",
    city: "Inhambabe",
  },
  {
    iata: "VXC",
    name: "Lichinga Airport",
    city: "Lichinga",
  },
  {
    iata: "MPM",
    name: "Maputo Airport",
    city: "Maputo",
  },
  {
    iata: "MUD",
    name: "Mueda Airport",
    city: "Mueda",
  },
  {
    iata: "MZB",
    name: null,
    city: "Mocimboa da Praia",
  },
  {
    iata: "MNC",
    name: "Nacala Airport",
    city: "Nacala",
  },
  {
    iata: "APL",
    name: "Nampula Airport",
    city: "Nampula",
  },
  {
    iata: "POL",
    name: "Pemba Airport",
    city: "Pemba / Porto Amelia",
  },
  {
    iata: "UEL",
    name: "Quelimane Airport",
    city: "Quelimane",
  },
  {
    iata: "TET",
    name: "Chingozi Airport",
    city: "Tete",
  },
  {
    iata: "VNX",
    name: "Vilankulo Airport",
    city: "Vilanculo",
  },
  {
    iata: "VJB",
    name: "Xai-Xai Airport",
    city: "Xai-Xai",
  },
  {
    iata: "JCA",
    name: "Croisette Heliport",
  },
  {
    iata: "DES",
    name: "Desroches Airport",
    city: "Desroches Island",
  },
  {
    iata: "SEZ",
    name: "Seychelles International Airport",
    city: "Mahe Island",
  },
  {
    iata: "PRI",
    name: "Praslin Airport",
    city: "Praslin Island",
  },
  {
    iata: "BDI",
    name: "Bird Island Airport",
    city: "Bird Island",
  },
  {
    iata: "DEI",
    name: "Denis Island Airport",
    city: "Denis Island",
  },
  {
    iata: "FRK",
    name: null,
    city: "Fregate Island",
  },
  {
    iata: "SRH",
    name: "Sarh Airport",
    city: "Sarh",
  },
  {
    iata: "OGR",
    name: "Bongor Airport",
    city: "Bongor",
  },
  {
    iata: "AEH",
    name: "Abeche Airport",
    city: "",
  },
  {
    iata: "MQQ",
    name: "Moundou Airport",
    city: "",
  },
  {
    iata: "LTC",
    name: "Lai Airport",
    city: "Lai",
  },
  {
    iata: "ATV",
    name: "Ati Airport",
    city: "Ati",
  },
  {
    iata: "NDJ",
    name: "N'Djamena International Airport",
    city: "N'Djamena",
  },
  {
    iata: "BKR",
    name: "Bokoro Airport",
    city: "Bokoro",
  },
  {
    iata: "OTC",
    name: "Bol Airport",
    city: "Bol",
  },
  {
    iata: "MVO",
    name: "Mongo Airport",
    city: "Mongo",
  },
  {
    iata: "AMC",
    name: "Am Timan Airport",
    city: "Am Timan",
  },
  {
    iata: "PLF",
    name: "Pala Airport",
    city: "Pala",
  },
  {
    iata: "OUT",
    name: "Bousso Airport",
    city: "Bousso",
  },
  {
    iata: "AMO",
    name: "Mao Airport",
    city: "Mao",
  },
  {
    iata: "FYT",
    name: "Faya Largeau Airport",
    city: "",
  },
  {
    iata: "BUQ",
    name: "Joshua Mqabuko Nkomo International Airport",
    city: "Bulawayo",
  },
  {
    iata: "CHJ",
    name: "Chipinge Airport",
    city: "Chipinge",
  },
  {
    iata: "BFO",
    name: "Buffalo Range Airport",
    city: "Chiredzi",
  },
  {
    iata: "VFA",
    name: "Victoria Falls International Airport",
    city: "Victoria Falls",
  },
  {
    iata: "HRE",
    name: "Harare International Airport",
    city: "Harare",
  },
  {
    iata: "KAB",
    name: "Kariba International Airport",
    city: "Kariba",
  },
  {
    iata: "UTA",
    name: "Mutare Airport",
    city: "",
  },
  {
    iata: "MVZ",
    name: "Masvingo International Airport",
    city: "Masvingo",
  },
  {
    iata: "GWE",
    name: "Thornhill Air Base",
    city: "Gweru",
  },
  {
    iata: "HWN",
    name: "Hwange National Park Airport",
    city: "Hwange",
  },
  {
    iata: "WKI",
    name: "Hwange Airport",
    city: "Hwange",
  },
  {
    iata: "CEH",
    name: "Chelinda Malawi Airport",
    city: "",
  },
  {
    iata: "BLZ",
    name: "Chileka International Airport",
    city: "Blantyre",
  },
  {
    iata: "CMK",
    name: "Club Makokola Airport",
    city: "Club Makokola",
  },
  {
    iata: "DWA",
    name: "Dwangwa Airport",
    city: "Dwangwa",
  },
  {
    iata: "KGJ",
    name: "Karonga Airport",
    city: "Karonga",
  },
  {
    iata: "KBQ",
    name: "Kasungu Airport",
    city: "Kasungu",
  },
  {
    iata: "LLW",
    name: "Lilongwe International Airport",
    city: "Lilongwe",
  },
  {
    iata: "LIX",
    name: "Likoma Island Airport",
    city: "Likoma Island",
  },
  {
    iata: "MAI",
    name: "Mangochi Airport",
    city: "Mangochi",
  },
  {
    iata: "MYZ",
    name: "Monkey Bay Airport",
    city: "Monkey Bay",
  },
  {
    iata: "LMB",
    name: "Salima Airport",
    city: "Salima",
  },
  {
    iata: "ZZU",
    name: "Mzuzu Airport",
    city: "Mzuzu",
  },
  {
    iata: "LEF",
    name: "Lebakeng Airport",
    city: "Lebakeng",
  },
  {
    iata: "LRB",
    name: "Leribe Airport",
    city: "Leribe",
  },
  {
    iata: "LES",
    name: "Lesobeng Airport",
    city: "Lesobeng",
  },
  {
    iata: "MFC",
    name: "Mafeteng Airport",
    city: "Mafeteng",
  },
  {
    iata: "MKH",
    name: "Mokhotlong Airport",
    city: "Mokhotlong",
  },
  {
    iata: "MSU",
    name: "Moshoeshoe I International Airport",
    city: "Maseru",
  },
  {
    iata: "NKU",
    name: "Nkaus Airport",
    city: "Nkaus",
  },
  {
    iata: "PEL",
    name: "Pelaneng Airport",
    city: "Pelaneng",
  },
  {
    iata: "UTG",
    name: "Quthing Airport",
    city: "Quthing",
  },
  {
    iata: "UNE",
    name: "Qacha's Nek Airport",
    city: "Qacha's Nek",
  },
  {
    iata: "SHK",
    name: "Sehonghong Airport",
    city: "Sehonghong",
  },
  {
    iata: "SKQ",
    name: "Sekakes Airport",
    city: "Sekakes",
  },
  {
    iata: "SOK",
    name: "Semonkong Airport",
    city: "Semonkong",
  },
  {
    iata: "SHZ",
    name: "Seshutes Airport",
    city: "Seshutes",
  },
  {
    iata: "THB",
    name: "Thaba-Tseka Airport",
    city: "Thaba-Tseka",
  },
  {
    iata: "TKO",
    name: "Tlokoeng Airport",
    city: "Tlokoeng",
  },
  {
    iata: "ADI",
    name: "Arandis Airport",
    city: "Arandis",
  },
  {
    iata: "GOG",
    name: "Gobabis Airport",
    city: "Gobabis",
  },
  {
    iata: "GFY",
    name: "Grootfontein Airport",
    city: "Grootfontein",
  },
  {
    iata: "MPA",
    name: "Katima Mulilo Airport",
    city: "Mpacha",
  },
  {
    iata: "KMP",
    name: "Keetmanshoop Airport",
    city: "Keetmanshoop",
  },
  {
    iata: "LUD",
    name: "Luderitz Airport",
    city: "Luderitz",
  },
  {
    iata: "OKU",
    name: "Mokuti Lodge Airport",
    city: "Mokuti Lodge",
  },
  {
    iata: "NNI",
    name: "Namutoni Airport",
    city: "Namutoni",
  },
  {
    iata: "OND",
    name: "Ondangwa Airport",
    city: "Ondangwa",
  },
  {
    iata: "OMG",
    name: "Omega Airport",
    city: "Omega",
  },
  {
    iata: "OMD",
    name: "Oranjemund Airport",
    city: "Oranjemund",
  },
  {
    iata: "OKF",
    name: "Okaukuejo Airport",
    city: "Okaukuejo",
  },
  {
    iata: "NDU",
    name: "Rundu Airport",
    city: "Rundu",
  },
  {
    iata: "SWP",
    name: "Swakopmund Airport",
    city: "Swakopmund",
  },
  {
    iata: "TSB",
    name: "Tsumeb Airport",
    city: "Tsumeb",
  },
  {
    iata: "WVB",
    name: "Walvis Bay Airport",
    city: "Walvis Bay",
  },
  {
    iata: "ERS",
    name: "Eros Airport",
    city: "Windhoek",
  },
  {
    iata: "WDH",
    name: "Hosea Kutako International Airport",
    city: "Windhoek",
  },
  {
    iata: "FIH",
    name: "Ndjili International Airport",
    city: "Kinshasa",
  },
  {
    iata: "NLO",
    name: "Ndolo Airport",
    city: "",
  },
  {
    iata: "MNB",
    name: "Muanda Airport",
    city: "",
  },
  {
    iata: "BOA",
    name: "Boma Airport",
    city: "Boma",
  },
  {
    iata: "LZI",
    name: "Luozi Airport",
    city: "Luozi",
  },
  {
    iata: "MAT",
    name: "Tshimpi Airport",
    city: "Matadi",
  },
  {
    iata: "NKL",
    name: "Nkolo Fuma Airport",
    city: "Nkolo Fuma",
  },
  {
    iata: "INO",
    name: "Inongo Airport",
    city: "Inongo",
  },
  {
    iata: "NIO",
    name: "Nioki Airport",
    city: "Nioki",
  },
  {
    iata: "FDU",
    name: "Bandundu Airport",
    city: "",
  },
  {
    iata: "KRZ",
    name: "Basango Mboliasa Airport",
    city: "Kiri",
  },
  {
    iata: "KKW",
    name: "Kikwit Airport",
    city: "",
  },
  {
    iata: "IDF",
    name: "Idiofa Airport",
    city: "Idiofa",
  },
  {
    iata: "LUS",
    name: "Lusanga Airport",
    city: "Lusanga",
  },
  {
    iata: "MSM",
    name: "Masi Manimba Airport",
    city: "Masi Manimba",
  },
  {
    iata: "MDK",
    name: "Mbandaka Airport",
    city: "Mbandaka",
  },
  {
    iata: "BSU",
    name: "Basankusu Airport",
    city: "Basankusu",
  },
  {
    iata: "LIE",
    name: "Libenge Airport",
    city: "Libenge",
  },
  {
    iata: "BDT",
    name: "Gbadolite Airport",
    city: "",
  },
  {
    iata: "GMA",
    name: "Gemena Airport",
    city: "Gemena",
  },
  {
    iata: "KLI",
    name: "Kotakoli Airport",
    city: "",
  },
  {
    iata: "BMB",
    name: "Bumbar Airport",
    city: "Bumbar",
  },
  {
    iata: "LIQ",
    name: "Lisala Airport",
    city: "",
  },
  {
    iata: "BNB",
    name: "Boende Airport",
    city: "Boende",
  },
  {
    iata: "IKL",
    name: "Ikela Airport",
    city: "Ikela",
  },
  {
    iata: "FKI",
    name: "Bangoka International Airport",
    city: "Kisangani",
  },
  {
    iata: "YAN",
    name: "Yangambi Airport",
    city: "Yangambi",
  },
  {
    iata: "IRP",
    name: "Matari Airport",
    city: "",
  },
  {
    iata: "BUX",
    name: "Bunia Airport",
    city: "",
  },
  {
    iata: "BZU",
    name: "Buta Zega Airport",
    city: "",
  },
  {
    iata: "BKY",
    name: "Bukavu Kavumu Airport",
    city: "",
  },
  {
    iata: "GOM",
    name: "Goma International Airport",
    city: "Goma",
  },
  {
    iata: "BNC",
    name: "Beni Airport",
    city: "Beni",
  },
  {
    iata: "KND",
    name: "Kindu Airport",
    city: "Kindu",
  },
  {
    iata: "KLY",
    name: "Kinkungwa Airport",
    city: "Kalima",
  },
  {
    iata: "PUN",
    name: "Punia Airport",
    city: "Punia",
  },
  {
    iata: "FBM",
    name: "Lubumbashi International Airport",
    city: "Lubumbashi",
  },
  {
    iata: "PWO",
    name: "Pweto Airport",
    city: "Pweto",
  },
  {
    iata: "KEC",
    name: "Kasenga Airport",
    city: "Kasenga",
  },
  {
    iata: "KWZ",
    name: "Kolwezi Airport",
    city: "",
  },
  {
    iata: "MNO",
    name: "Manono Airport",
    city: "Manono",
  },
  {
    iata: "BDV",
    name: "Moba Airport",
    city: "Moba",
  },
  {
    iata: "FMI",
    name: "Kalemie Airport",
    city: "",
  },
  {
    iata: "KBO",
    name: "Kabalo Airport",
    city: "Kabalo",
  },
  {
    iata: "KOO",
    name: "Kongolo Airport",
    city: "Kongolo",
  },
  {
    iata: "KMN",
    name: "Kamina Base Airport",
    city: "",
  },
  {
    iata: "KAP",
    name: "Kapanga Airport",
    city: "Kapanga",
  },
  {
    iata: "KNM",
    name: "Kaniama Airport",
    city: "Kaniama",
  },
  {
    iata: "KGA",
    name: "Kananga Airport",
    city: "Kananga",
  },
  {
    iata: "LZA",
    name: "Luiza Airport",
    city: "Luiza",
  },
  {
    iata: "TSH",
    name: "Tshikapa Airport",
    city: "Tshikapa",
  },
  {
    iata: "LJA",
    name: "Lodja Airport",
    city: "Lodja",
  },
  {
    iata: "LBO",
    name: "Lusambo Airport",
    city: "Lusambo",
  },
  {
    iata: "MEW",
    name: "Mweka Airport",
    city: "Mweka",
  },
  {
    iata: "BAN",
    name: "Basongo Airport",
    city: "Basongo",
  },
  {
    iata: "PFR",
    name: "Ilebo Airport",
    city: "Ilebo",
  },
  {
    iata: "MJM",
    name: "Mbuji Mayi Airport",
    city: "Mbuji Mayi",
  },
  {
    iata: "GDJ",
    name: "Gandajika Airport",
    city: "Gandajika",
  },
  {
    iata: "KBN",
    name: "Tunta Airport",
    city: "Kabinda",
  },
  {
    iata: "AKE",
    name: "Akieni Airport",
  },
  {
    iata: "GAX",
    name: "Gamba Airport",
  },
  {
    iata: "BKO",
    name: "Senou Airport",
    city: "Senou",
  },
  {
    iata: "GUD",
    name: "Goundam Airport",
    city: "Goundam",
  },
  {
    iata: "GAQ",
    name: "Gao Airport",
    city: "",
  },
  {
    iata: "KNZ",
    name: "Kenieba Airport",
    city: "Kenieba",
  },
  {
    iata: "KTX",
    name: "Koutiala Airport",
    city: "Koutiala",
  },
  {
    iata: "KYS",
    name: "Kayes Dag Dag Airport",
    city: "",
  },
  {
    iata: "MZI",
    name: "Ambodedjo Airport",
    city: "",
  },
  {
    iata: "NRM",
    name: "Nara Airport",
    city: "Nara",
  },
  {
    iata: "NIX",
    name: "Nioro du Sahel Airport",
    city: "Nioro du Sahel",
  },
  {
    iata: "KSS",
    name: "Sikasso Airport",
    city: "Sikasso",
  },
  {
    iata: "TOM",
    name: "Timbuktu Airport",
    city: "Timbuktu",
  },
  {
    iata: "EYL",
    name: null,
    city: "Yelimane",
  },
  {
    iata: "DOC",
    name: "Dornoch Airport",
  },
  {
    iata: "FLH",
    name: "Flotta Isle Airport",
  },
  {
    iata: "FOA",
    name: "Foula Airport",
  },
  {
    iata: "OUK",
    name: "Outer Skerries Airport",
  },
  {
    iata: "PSV",
    name: "Papa Stour Airport",
  },
  {
    iata: "ULL",
    name: "Glenforsa Airfield",
  },
  {
    iata: "BJL",
    name: "Banjul International Airport",
    city: "Banjul",
  },
  {
    iata: "FUE",
    name: "Fuerteventura Airport",
    city: "Fuerteventura Island",
  },
  {
    iata: "GMZ",
    name: "La Gomera Airport",
    city: "Alajero",
  },
  {
    iata: "VDE",
    name: "Hierro Airport",
    city: "El Hierro Island",
  },
  {
    iata: "SPC",
    name: "La Palma Airport",
    city: "Sta Cruz de la Palma",
  },
  {
    iata: "LPA",
    name: "Gran Canaria Airport",
    city: "Gran Canaria Island",
  },
  {
    iata: "ACE",
    name: "Lanzarote Airport",
    city: "Lanzarote Island",
  },
  {
    iata: "TFS",
    name: "Tenerife South Airport",
    city: "Tenerife Island",
  },
  {
    iata: "TFN",
    name: "Tenerife Norte Airport",
    city: "Tenerife Island",
  },
  {
    iata: "JCU",
    name: "Ceuta Heliport",
  },
  {
    iata: "MLN",
    name: "Melilla Airport",
    city: "Melilla Island",
  },
  {
    iata: "BTE",
    name: "Sherbro International Airport",
    city: "Bonthe",
  },
  {
    iata: "KBS",
    name: "Bo Airport",
    city: "Bo",
  },
  {
    iata: "GBK",
    name: "Gbangbatok Airport",
    city: "Gbangbatok",
  },
  {
    iata: "HGS",
    name: "Hastings Airport",
    city: "Freetown",
  },
  {
    iata: "KBA",
    name: "Kabala Airport",
    city: "Kabala",
  },
  {
    iata: "KEN",
    name: "Kenema Airport",
    city: "Kenema",
  },
  {
    iata: "FNA",
    name: "Lungi International Airport",
    city: "Freetown",
  },
  {
    iata: "WYE",
    name: "Yengema Airport",
    city: "Yengema",
  },
  {
    iata: "BQE",
    name: "Bubaque Airport",
    city: "Bubaque",
  },
  {
    iata: "OXB",
    name: "Osvaldo Vieira International Airport",
    city: "Bissau",
  },
  {
    iata: "JGR",
    name: "Groennedal Heliport",
  },
  {
    iata: "QCU",
    name: "Akunaq Heliport",
  },
  {
    iata: "UCN",
    name: "Buchanan Airport",
    city: "Buchanan",
  },
  {
    iata: "CPA",
    name: "Cape Palmas Airport",
    city: "Harper",
  },
  {
    iata: "SNI",
    name: "Greenville Sinoe Airport",
    city: "Greenville",
  },
  {
    iata: "UCN",
    name: "Lamco Airport",
    city: "Buchanan",
  },
  {
    iata: "MLW",
    name: "Spriggs Payne Airport",
    city: "Monrovia",
  },
  {
    iata: "NIA",
    name: "Nimba Airport",
    city: "Nimba",
  },
  {
    iata: "ROB",
    name: "Roberts International Airport",
    city: "Monrovia",
  },
  {
    iata: "SAZ",
    name: "Sasstown Airport",
    city: "Sasstown",
  },
  {
    iata: "THC",
    name: "Tchien Airport",
    city: "Tchien",
  },
  {
    iata: "VOI",
    name: "Voinjama Airport",
    city: "Voinjama",
  },
  {
    iata: "AGA",
    name: "Al Massira Airport",
    city: "Agadir",
  },
  {
    iata: "TTA",
    name: "Tan Tan Airport",
    city: "Tan Tan",
  },
  {
    iata: "OZG",
    name: "Zagora Airport",
    city: "Zagora",
  },
  {
    iata: "UAR",
    name: "Bouarfa Airport",
    city: "Bouarfa",
  },
  {
    iata: "FEZ",
    name: null,
    city: "Fes",
  },
  {
    iata: "ERH",
    name: "Moulay Ali Cherif Airport",
    city: "Errachidia",
  },
  {
    iata: "MEK",
    name: "Bassatine Airport",
    city: "Meknes",
  },
  {
    iata: "OUD",
    name: "Angads Airport",
    city: "Oujda",
  },
  {
    iata: "SMW",
    name: "Smara Airport",
    city: "Smara",
  },
  {
    iata: "GMD",
    name: "Ben Slimane Airport",
    city: "Ben Slimane",
  },
  {
    iata: "CAS",
    name: "Anfa Airport",
    city: "Casablanca",
  },
  {
    iata: "RBA",
    name: null,
    city: "Rabat",
  },
  {
    iata: "SII",
    name: "Sidi Ifni Xx Airport",
    city: "Sidi Ifni",
  },
  {
    iata: "VIL",
    name: "Dakhla Airport",
    city: "Dakhla",
  },
  {
    iata: "ESU",
    name: "Mogador Airport",
    city: "Essaouira",
  },
  {
    iata: "EUN",
    name: "Hassan I Airport",
    city: "El Aaiun",
  },
  {
    iata: "CMN",
    name: "Mohammed V International Airport",
    city: "Casablanca",
  },
  {
    iata: "SFI",
    name: "Safi Airport",
    city: "Safi",
  },
  {
    iata: "NDR",
    name: "Nador International Airport",
    city: "Nador",
  },
  {
    iata: "RAK",
    name: "Menara Airport",
    city: "Marrakech",
  },
  {
    iata: "NNA",
    name: "Kenitra Airport",
    city: "",
  },
  {
    iata: "OZZ",
    name: "Ouarzazate Airport",
    city: "Ouarzazate",
  },
  {
    iata: "AHU",
    name: "Cherif Al Idrissi Airport",
    city: "Al Hoceima",
  },
  {
    iata: "TTU",
    name: "Saniat Rmel Airport",
    city: "",
  },
  {
    iata: "TNG",
    name: "Ibn Batouta Airport",
    city: "Tangier",
  },
  {
    iata: "GNU",
    name: "Goodnews Airport",
  },
  {
    iata: "KDA",
    name: "Kolda North Airport",
    city: "Kolda",
  },
  {
    iata: "ZIG",
    name: "Ziguinchor Airport",
    city: "Ziguinchor",
  },
  {
    iata: "CSK",
    name: "Cap Skirring Airport",
    city: "Cap Skirring",
  },
  {
    iata: "KLC",
    name: "Kaolack Airport",
    city: "Kaolack",
  },
  {
    iata: "DKR",
    name: null,
    city: "Dakar",
  },
  {
    iata: "MAX",
    name: "Ouro Sogui Airport",
    city: "Matam",
  },
  {
    iata: "POD",
    name: "Podor Airport",
    city: "Podor",
  },
  {
    iata: "RDT",
    name: "Richard Toll Airport",
    city: "Richard Toll",
  },
  {
    iata: "XLS",
    name: "Saint Louis Airport",
    city: "Saint Louis",
  },
  {
    iata: "BXE",
    name: "Bakel Airport",
    city: "Bakel",
  },
  {
    iata: "KGG",
    name: null,
    city: "Kedougou",
  },
  {
    iata: "SMY",
    name: "Simenti Airport",
    city: "Simenti",
  },
  {
    iata: "TUD",
    name: "Tambacounda Airport",
    city: "Tambacounda",
  },
  {
    iata: "AEO",
    name: "Aioun el Atrouss Airport",
    city: "Aioun El Atrouss",
  },
  {
    iata: "OTL",
    name: "Boutilimit Airport",
    city: "Boutilimit",
  },
  {
    iata: "THI",
    name: "Tichitt Airport",
    city: "Tichitt",
  },
  {
    iata: "TIY",
    name: "Tidjikja Airport",
    city: "Tidjikja",
  },
  {
    iata: "BGH",
    name: "Abbaye Airport",
    city: "Boghe",
  },
  {
    iata: "KFA",
    name: "Kiffa Airport",
    city: "Kiffa",
  },
  {
    iata: "TMD",
    name: "Timbedra Airport",
    city: "Timbedra",
  },
  {
    iata: "EMN",
    name: null,
    city: "Nema",
  },
  {
    iata: "AJJ",
    name: "Akjoujt Airport",
    city: "Akjoujt",
  },
  {
    iata: "KED",
    name: null,
    city: "Kaedi",
  },
  {
    iata: "MOM",
    name: "Letfotar Airport",
    city: "Moudjeria",
  },
  {
    iata: "NKC",
    name: "Nouakchott International Airport",
    city: "Nouakchott",
  },
  {
    iata: "SEY",
    name: null,
    city: "Selibaby",
  },
  {
    iata: "THT",
    name: "Tamchakett Airport",
    city: "Tamchakett",
  },
  {
    iata: "ATR",
    name: "Atar International Airport",
    city: "Atar",
  },
  {
    iata: "FGD",
    name: "Fderik Airport",
    city: "Fderik",
  },
  {
    iata: "NDB",
    name: "Nouadhibou International Airport",
    city: "Nouadhibou",
  },
  {
    iata: "OUZ",
    name: "Tazadit Airport",
    city: "Zouerate",
  },
  {
    iata: "JSS",
    name: "Spetsai Airport",
  },
  {
    iata: "CIQ",
    name: "Chiquimula Airport",
    city: "Chiquimula",
  },
  {
    iata: "DON",
    name: "Dos Lagunas Airport",
    city: "Dos Lagunas",
  },
  {
    iata: "ENJ",
    name: "El Naranjo Airport",
  },
  {
    iata: "PCG",
    name: "Paso Caballos Airport",
    city: "Paso Caballos",
  },
  {
    iata: "LCF",
    name: "Las Vegas Airport",
    city: "Rio Dulce",
  },
  {
    iata: "TKM",
    name: null,
  },
  {
    iata: "UAX",
    name: "Uaxactun Airport",
    city: "Uaxactun",
  },
  {
    iata: "PKJ",
    name: "Playa Grande Airport",
    city: "Playa Grande",
  },
  {
    iata: "GTZ",
    name: "Kirawira B Aerodrome",
  },
  {
    iata: "CKY",
    name: "Conakry Airport",
    city: "Conakry",
  },
  {
    iata: "FIG",
    name: "Fria Airport",
    city: "",
  },
  {
    iata: "FAA",
    name: "Faranah Airport",
    city: "",
  },
  {
    iata: "KSI",
    name: "Kissidougou Airport",
    city: "Kissidougou",
  },
  {
    iata: "LEK",
    name: "Labe Airport",
    city: "",
  },
  {
    iata: "MCA",
    name: "Macenta Airport",
    city: "Macenta",
  },
  {
    iata: "NZE",
    name: "Nzerekore Airport",
    city: "Nzerekore",
  },
  {
    iata: "BKJ",
    name: "Boke Airport",
    city: "Boke",
  },
  {
    iata: "SBI",
    name: "Sambailo Airport",
    city: "Koundara",
  },
  {
    iata: "GII",
    name: "Siguiri Airport",
    city: "Siguiri",
  },
  {
    iata: "KNN",
    name: "Kankan Airport",
    city: "Kankan",
  },
  {
    iata: "SID",
    name: null,
    city: "Espargos",
  },
  {
    iata: "NTO",
    name: "Agostinho Neto Airport",
    city: "Ponta do Sol",
  },
  {
    iata: "BVC",
    name: "Rabil Airport",
    city: "Rabil",
  },
  {
    iata: "MMO",
    name: "Maio Airport",
    city: "Vila do Maio",
  },
  {
    iata: "MTI",
    name: "Mosteiros Airport",
    city: "Vila do Mosteiros",
  },
  {
    iata: "RAI",
    name: "Praia International Airport",
    city: "Praia",
  },
  {
    iata: "SFL",
    name: null,
    city: "Sao Filipe",
  },
  {
    iata: "SNE",
    name: null,
    city: "Preguica",
  },
  {
    iata: "VXE",
    name: null,
    city: "Sao Pedro",
  },
  {
    iata: "EDG",
    name: "Gatow Airport",
  },
  {
    iata: "BCG",
    name: "Bemichi Airport",
    city: "Bemichi",
  },
  {
    iata: "BTO",
    name: "Botopasi Airport",
    city: "Botopasi",
  },
  {
    iata: "DOE",
    name: "Djumu-Djomoe Airport",
    city: "Djumu-Djomoe",
  },
  {
    iata: "LDO",
    name: "Ladouanie Airport",
    city: "Aurora",
  },
  {
    iata: "WSO",
    name: "Washabo Airport",
    city: "Washabo",
  },
  {
    iata: "ADD",
    name: "Bole International Airport",
    city: "Addis Ababa",
  },
  {
    iata: "AMH",
    name: "Arba Minch Airport",
    city: "",
  },
  {
    iata: "AXU",
    name: "Axum Airport",
    city: "",
  },
  {
    iata: "BCO",
    name: "Baco Airport",
    city: "Baco",
  },
  {
    iata: "BJR",
    name: "Bahir Dar Airport",
    city: "Bahir Dar",
  },
  {
    iata: "BEI",
    name: "Beica Airport",
    city: "Beica",
  },
  {
    iata: "DSE",
    name: "Combolcha Airport",
    city: "Dessie",
  },
  {
    iata: "DEM",
    name: "Dembidollo Airport",
    city: "Dembidollo",
  },
  {
    iata: "DBM",
    name: "Debra Marcos Airport",
    city: "Debra Marcos",
  },
  {
    iata: "DIR",
    name: "Aba Tenna Dejazmach Yilma International Airport",
    city: "Dire Dawa",
  },
  {
    iata: "DBT",
    name: "Debre Tabor Airport",
    city: "Debre Tabor",
  },
  {
    iata: "FNH",
    name: "Fincha Airport",
    city: "Fincha",
  },
  {
    iata: "GOB",
    name: "Robe Airport",
    city: "Goba",
  },
  {
    iata: "GNN",
    name: "Ghinnir Airport",
    city: "Ghinnir",
  },
  {
    iata: "GMB",
    name: "Gambella Airport",
    city: "Gambela",
  },
  {
    iata: "GDQ",
    name: "Gonder Airport",
    city: "Gondar",
  },
  {
    iata: "GDE",
    name: "Gode Airport",
    city: "Gode",
  },
  {
    iata: "GOR",
    name: "Gore Airport",
    city: "Gore",
  },
  {
    iata: "QHR",
    name: "Harar Meda Airport",
    city: "Debre Zeyit",
  },
  {
    iata: "HUE",
    name: "Humera Airport",
    city: "Humera",
  },
  {
    iata: "JIM",
    name: "Jimma Airport",
    city: "Jimma",
  },
  {
    iata: "ABK",
    name: "Kabri Dehar Airport",
    city: "Kabri Dehar",
  },
  {
    iata: "LFO",
    name: "Kelafo East Airport",
    city: "Kelafo",
  },
  {
    iata: "AWA",
    name: "Awassa Airport",
    city: "Awassa",
  },
  {
    iata: "LLI",
    name: "Lalibella Airport",
    city: "Lalibela",
  },
  {
    iata: "MQX",
    name: "Mekele Airport",
    city: "",
  },
  {
    iata: "NDM",
    name: "Mendi Airport",
    city: "Mendi",
  },
  {
    iata: "MTF",
    name: "Mizan Teferi Airport",
    city: "Mizan Teferi",
  },
  {
    iata: "NEJ",
    name: "Nejjo Airport",
    city: "Nejjo",
  },
  {
    iata: "NEK",
    name: "Nekemte Airport",
    city: "Nekemte",
  },
  {
    iata: "SXU",
    name: "Soddu Airport",
    city: "Soddu",
  },
  {
    iata: "ASO",
    name: "Asosa Airport",
    city: "Asosa",
  },
  {
    iata: "TIE",
    name: "Tippi Airport",
    city: "Tippi",
  },
  {
    iata: "WAC",
    name: "Waca Airport",
    city: "Waca",
  },
  {
    iata: "BJM",
    name: "Bujumbura International Airport",
    city: "Bujumbura",
  },
  {
    iata: "GID",
    name: "Gitega Airport",
    city: "Gitega",
  },
  {
    iata: "ALU",
    name: "Alula Airport",
    city: "Alula",
  },
  {
    iata: "BIB",
    name: "Baidoa Airport",
    city: "Baidoa",
  },
  {
    iata: "CXN",
    name: "Candala Airport",
    city: "Candala",
  },
  {
    iata: "HCM",
    name: "Eil Airport",
    city: "Eil",
  },
  {
    iata: "BSA",
    name: "Bosaso Airport",
    city: "Bosaso",
  },
  {
    iata: "GSR",
    name: "Gardo Airport",
    city: "Gardo",
  },
  {
    iata: "HGA",
    name: "Egal International Airport",
    city: "Hargeisa",
  },
  {
    iata: "BBO",
    name: "Berbera Airport",
    city: "Berbera",
  },
  {
    iata: "KMU",
    name: "Kisimayu Airport",
    city: "",
  },
  {
    iata: "MGQ",
    name: "Aden Adde International Airport",
    city: "Mogadishu",
  },
  {
    iata: "CMO",
    name: "Obbia Airport",
    city: "Obbia",
  },
  {
    iata: "GLK",
    name: "Galcaio Airport",
    city: "Galcaio",
  },
  {
    iata: "CMS",
    name: "Scusciuban Airport",
    city: "Scusciuban",
  },
  {
    iata: "ERA",
    name: "Erigavo Airport",
    city: "Erigavo",
  },
  {
    iata: "BUO",
    name: "Burao Airport",
    city: "Burao",
  },
  {
    iata: "JIB",
    name: "Djibouti-Ambouli Airport",
    city: "Djibouti City",
  },
  {
    iata: "AII",
    name: "Ali-Sabieh Airport",
    city: "Ali-Sabieh",
  },
  {
    iata: "MHI",
    name: "Moucha Airport",
    city: "Moucha Island",
  },
  {
    iata: "OBC",
    name: "Obock Airport",
    city: "Obock",
  },
  {
    iata: "TDJ",
    name: "Tadjoura Airport",
    city: "Tadjoura",
  },
  {
    iata: "SEW",
    name: "Siwa Oasis North Airport",
    city: "Siwa",
  },
  {
    iata: "DBB",
    name: "El Alamein International Airport",
    city: "El Alamein",
  },
  {
    iata: "AAC",
    name: "El Arish International Airport",
    city: "El Arish",
  },
  {
    iata: "ATZ",
    name: "Assiut International Airport",
    city: "Assiut",
  },
  {
    iata: "ALY",
    name: "El Nouzha Airport",
    city: "Alexandria",
  },
  {
    iata: "HBE",
    name: "Borg El Arab International Airport",
    city: "Alexandria",
  },
  {
    iata: "ABS",
    name: "Abu Simbel Airport",
    city: "Abu Simbel",
  },
  {
    iata: "CAI",
    name: "Cairo International Airport",
    city: "Cairo",
  },
  {
    iata: "CWE",
    name: "Cairo West Airport",
    city: "El Cairo",
  },
  {
    iata: "DAK",
    name: "Dakhla Airport",
    city: "",
  },
  {
    iata: "HRG",
    name: "Hurghada International Airport",
    city: "Hurghada",
  },
  {
    iata: "EGH",
    name: "El Gora Airport",
    city: "",
  },
  {
    iata: "UVL",
    name: "El Kharga Airport",
    city: "",
  },
  {
    iata: "LXR",
    name: "Luxor International Airport",
    city: "Luxor",
  },
  {
    iata: "RMF",
    name: "Marsa Alam International Airport",
    city: "Marsa Alam",
  },
  {
    iata: "HMB",
    name: "Sohag International Airport",
    city: "Sohag",
  },
  {
    iata: "MUH",
    name: "Mersa Matruh Airport",
    city: "Mersa Matruh",
  },
  {
    iata: "GSQ",
    name: "Shark El Oweinat International Airport",
    city: "",
  },
  {
    iata: "PSD",
    name: "Port Said Airport",
    city: "Port Said",
  },
  {
    iata: "SKV",
    name: "St Catherine International Airport",
    city: "",
  },
  {
    iata: "SSH",
    name: "Sharm El Sheikh International Airport",
    city: "Sharm el-Sheikh",
  },
  {
    iata: "ASW",
    name: "Aswan International Airport",
    city: "Aswan",
  },
  {
    iata: "TCP",
    name: "Taba International Airport",
    city: "Taba",
  },
  {
    iata: "ELT",
    name: "El Tor Airport",
    city: "",
  },
  {
    iata: "HGI",
    name: "Palogue Airport",
  },
  {
    iata: "ASM",
    name: "Asmara International Airport",
    city: "Asmara",
  },
  {
    iata: "MSW",
    name: "Massawa International Airport",
    city: "Massawa",
  },
  {
    iata: "ASA",
    name: "Assab International Airport",
    city: "Asab",
  },
  {
    iata: "TES",
    name: "Tessenei Airport",
    city: "Tessenei",
  },
  {
    iata: "HIA",
    name: "Lianshui Airport",
    city: "Huai'an",
  },
  {
    iata: "HIL",
    name: "Shilavo Airport",
  },
  {
    iata: "ASV",
    name: "Amboseli Airport",
    city: "Amboseli National Park",
  },
  {
    iata: "EDL",
    name: "Eldoret International Airport",
    city: "Eldoret",
  },
  {
    iata: "EYS",
    name: "Eliye Springs Airport",
    city: "Eliye Springs",
  },
  {
    iata: "KLK",
    name: "Kalokol Airport",
    city: "Kalokol",
  },
  {
    iata: "GAS",
    name: "Garissa Airport",
    city: "Garissa",
  },
  {
    iata: "HOA",
    name: "Hola Airport",
    city: "Hola",
  },
  {
    iata: "NBO",
    name: "Jomo Kenyatta International Airport",
    city: "Nairobi",
  },
  {
    iata: "GGM",
    name: "Kakamega Airport",
    city: "Kakamega",
  },
  {
    iata: "KIS",
    name: "Kisumu Airport",
    city: "Kisumu",
  },
  {
    iata: "ILU",
    name: "Kilaguni Airport",
    city: "Kilaguni",
  },
  {
    iata: "KEY",
    name: "Kericho Airport",
    city: "Kericho",
  },
  {
    iata: "KTL",
    name: "Kitale Airport",
    city: "Kitale",
  },
  {
    iata: "LKG",
    name: "Lokichoggio Airport",
    city: "Lokichoggio",
  },
  {
    iata: "LOK",
    name: "Lodwar Airport",
    city: "Lodwar",
  },
  {
    iata: "LAU",
    name: "Manda Airstrip",
    city: "Lamu",
  },
  {
    iata: "LOY",
    name: "Loyengalani Airport",
    city: "Loyengalani",
  },
  {
    iata: "NDE",
    name: "Mandera Airport",
    city: "Mandera",
  },
  {
    iata: "RBT",
    name: "Segel Airport",
    city: "Marsabit",
  },
  {
    iata: "MYD",
    name: "Malindi Airport",
    city: "Malindi",
  },
  {
    iata: "MBA",
    name: "Mombasa Moi International Airport",
    city: "Mombasa",
  },
  {
    iata: "MRE",
    name: "Mara Serena Lodge Airstrip",
    city: "Masai Mara",
  },
  {
    iata: "OYL",
    name: "Moyale Airport",
    city: "Moyale (Lower)",
  },
  {
    iata: "NYE",
    name: "Nyeri Airport",
    city: "Nyeri",
  },
  {
    iata: "NUU",
    name: "Nakuru Airport",
    city: "Nakuru",
  },
  {
    iata: "WIL",
    name: "Nairobi Wilson Airport",
    city: "Nairobi",
  },
  {
    iata: "NYK",
    name: "Nanyuki Airport",
    city: "Nanyuki",
  },
  {
    iata: "UAS",
    name: "Samburu South Airport",
    city: "Samburu South",
  },
  {
    iata: "UKA",
    name: "Ukunda Airstrip",
    city: "Ukunda",
  },
  {
    iata: "WJR",
    name: "Wajir Airport",
    city: "Wajir",
  },
  {
    iata: "SRX",
    name: "Gardabya Airport",
    city: "Sirt",
  },
  {
    iata: "TOB",
    name: "Gamal Abdel Nasser Airport",
    city: "Tobruk",
  },
  {
    iata: "GHT",
    name: "Ghat Airport",
    city: "Ghat",
  },
  {
    iata: "AKF",
    name: "Kufra Airport",
    city: "Kufra",
  },
  {
    iata: "BEN",
    name: "Benina International Airport",
    city: "Benghazi",
  },
  {
    iata: "MJI",
    name: "Mitiga Airport",
    city: "Tripoli",
  },
  {
    iata: "LAQ",
    name: "La Abraq Airport",
    city: "Al Bayda'",
  },
  {
    iata: "SEB",
    name: "Sabha Airport",
    city: "Sabha",
  },
  {
    iata: "TIP",
    name: "Tripoli International Airport",
    city: "Tripoli",
  },
  {
    iata: "LMQ",
    name: "Marsa Brega Airport",
    city: "",
  },
  {
    iata: "HUQ",
    name: "Hon Airport",
    city: "",
  },
  {
    iata: "LTD",
    name: "Ghadames East Airport",
    city: "Ghadames",
  },
  {
    iata: "WAX",
    name: "Zwara Airport",
    city: "Zuwara",
  },
  {
    iata: "GYI",
    name: "Gisenyi Airport",
    city: "Gisenyi",
  },
  {
    iata: "BTQ",
    name: "Butare Airport",
    city: "Butare",
  },
  {
    iata: "KGL",
    name: "Kigali International Airport",
    city: "Kigali",
  },
  {
    iata: "RHG",
    name: "Ruhengeri Airport",
    city: "Ruhengeri",
  },
  {
    iata: "KME",
    name: "Kamembe Airport",
    city: "Kamembe",
  },
  {
    iata: "ATB",
    name: "Atbara Airport",
    city: "Atbara",
  },
  {
    iata: "EDB",
    name: "El Debba Airport",
    city: "El Debba",
  },
  {
    iata: "DOG",
    name: "Dongola Airport",
    city: "Dongola",
  },
  {
    iata: "ELF",
    name: "El Fasher Airport",
    city: "El Fasher",
  },
  {
    iata: "GSU",
    name: "Azaza Airport",
    city: "Gedaref",
  },
  {
    iata: "DNX",
    name: "Galegu Airport",
    city: "Dinder",
  },
  {
    iata: "EGN",
    name: "Geneina Airport",
    city: "Geneina",
  },
  {
    iata: "KSL",
    name: "Kassala Airport",
    city: "Kassala",
  },
  {
    iata: "GBU",
    name: "Khashm El Girba Airport",
    city: "Khashm El Girba",
  },
  {
    iata: "KST",
    name: "Kosti Airport",
    city: "Kosti",
  },
  {
    iata: "KDX",
    name: "Kadugli Airport",
    city: "Kadugli",
  },
  {
    iata: "MWE",
    name: "Merowe Airport",
    city: "Merowe",
  },
  {
    iata: "NUD",
    name: "En Nahud Airport",
    city: "En Nahud",
  },
  {
    iata: "UYL",
    name: "Nyala Airport",
    city: "Nyala",
  },
  {
    iata: "NHF",
    name: "New Halfa Airport",
    city: "New Halfa",
  },
  {
    iata: "EBD",
    name: "El Obeid Airport",
    city: "Al-Ubayyid",
  },
  {
    iata: "PZU",
    name: "Port Sudan New International Airport",
    city: "Port Sudan",
  },
  {
    iata: "JUB",
    name: "Juba Airport",
    city: "Juba",
  },
  {
    iata: "MAK",
    name: "Malakal Airport",
    city: "Malakal",
  },
  {
    iata: "KRT",
    name: "Khartoum International Airport",
    city: "Khartoum",
  },
  {
    iata: "WHF",
    name: "Wadi Halfa Airport",
    city: "Wadi Halfa",
  },
  {
    iata: "WUU",
    name: "Wau Airport",
    city: "Wau",
  },
  {
    iata: "ARK",
    name: "Arusha Airport",
    city: "Arusha",
  },
  {
    iata: "BKZ",
    name: "Bukoba Airport",
    city: "Bukoba",
  },
  {
    iata: "DAR",
    name: "Mwalimu Julius K. Nyerere International Airport",
    city: "Dar es Salaam",
  },
  {
    iata: "DOD",
    name: "Dodoma Airport",
    city: "Dodoma",
  },
  {
    iata: "IRI",
    name: "Iringa Airport",
    city: "Nduli",
  },
  {
    iata: "TKQ",
    name: "Kigoma Airport",
    city: "Kigoma",
  },
  {
    iata: "KIY",
    name: "Kilwa Masoko Airport",
    city: "Kilwa Masoko",
  },
  {
    iata: "JRO",
    name: "Kilimanjaro International Airport",
    city: "Arusha",
  },
  {
    iata: "LDI",
    name: "Kikwetu Airport",
    city: "Lindi",
  },
  {
    iata: "LKY",
    name: "Lake Manyara Airport",
    city: "Lake Manyara National Park",
  },
  {
    iata: "MFA",
    name: "Mafia Island Airport",
    city: "Mafia Island",
  },
  {
    iata: "MBI",
    name: "Mbeya Airport",
    city: "Mbeya",
  },
  {
    iata: "MWN",
    name: "Mwadui Airport",
    city: "Mwadui",
  },
  {
    iata: "XMI",
    name: "Masasi Airport",
    city: "Masasi",
  },
  {
    iata: "QSI",
    name: "Moshi Airport",
    city: "Moshi",
  },
  {
    iata: "MYW",
    name: "Mtwara Airport",
    city: "Mtwara",
  },
  {
    iata: "MUZ",
    name: "Musoma Airport",
    city: "Musoma",
  },
  {
    iata: "MWZ",
    name: "Mwanza Airport",
    city: "Mwanza",
  },
  {
    iata: "NCH",
    name: "Nachingwea Airport",
    city: "Nachingwea",
  },
  {
    iata: "JOM",
    name: "Njombe Airport",
    city: "Njombe",
  },
  {
    iata: "PMA",
    name: "Pemba Airport",
    city: "Chake",
  },
  {
    iata: "SEU",
    name: "Seronera Airport",
    city: "Seronera",
  },
  {
    iata: "SGX",
    name: "Songea Airport",
    city: "Songea",
  },
  {
    iata: "SUT",
    name: "Sumbawanga Airport",
    city: "Sumbawanga",
  },
  {
    iata: "SHY",
    name: "Shinyanga Airport",
    city: "Shinyanga",
  },
  {
    iata: "TBO",
    name: "Tabora Airport",
    city: "Tabora",
  },
  {
    iata: "TGT",
    name: "Tanga Airport",
    city: "Tanga",
  },
  {
    iata: "ZNZ",
    name: "Zanzibar Airport",
    city: "Kiembi Samaki",
  },
  {
    iata: "RUA",
    name: "Arua Airport",
    city: "Arua",
  },
  {
    iata: "EBB",
    name: "Entebbe International Airport",
    city: "Kampala",
  },
  {
    iata: "ULU",
    name: "Gulu Airport",
    city: "Gulu",
  },
  {
    iata: "JIN",
    name: "Jinja Airport",
    city: "Jinja",
  },
  {
    iata: "KBG",
    name: "Kabalega Falls Airport",
    city: "Kabalega Falls",
  },
  {
    iata: "KSE",
    name: "Kasese Airport",
    city: "Kasese",
  },
  {
    iata: "MBQ",
    name: "Mbarara Airport",
    city: "Mbarara",
  },
  {
    iata: "KCU",
    name: "Masindi Airport",
    city: "Masindi",
  },
  {
    iata: "SRT",
    name: "Soroti Airport",
    city: "Soroti",
  },
  {
    iata: "TRY",
    name: "Tororo Airport",
    city: "Tororo",
  },
  {
    iata: "IBL",
    name: "Indigo Bay Lodge Airport",
  },
  {
    iata: "PPJ",
    name: "Pulau Panjang Airport",
    city: "Tjipara-Java Island",
  },
  {
    iata: "AAS",
    name: "Apalapsili Airport",
  },
  {
    iata: "AGD",
    name: "Anggi Airport",
  },
  {
    iata: "AKQ",
    name: "Gunung Batin Airport",
    city: "Menggala-Sumatra Island",
  },
  {
    iata: "AYW",
    name: "Ayawasi Airport",
  },
  {
    iata: "BJG",
    name: "Boalang Airport",
  },
  {
    iata: "BXM",
    name: "Batom Airport",
  },
  {
    iata: "DRH",
    name: "Dabra Airport",
  },
  {
    iata: "ELR",
    name: "Elelim Airport",
  },
  {
    iata: "EWE",
    name: "Ewer Airport",
  },
  {
    iata: "FOO",
    name: "Kornasoren Airfield",
    city: "Kornasoren-Numfoor Island",
  },
  {
    iata: "GAV",
    name: "Gag Island Airport",
  },
  {
    iata: "IUL",
    name: "Ilu Airport",
  },
  {
    iata: "KBF",
    name: "Karubaga Airport",
  },
  {
    iata: "KBX",
    name: "Kambuaya Airport",
  },
  {
    iata: "KCD",
    name: "Kamur Airport",
  },
  {
    iata: "KCI",
    name: "Kon Airport",
  },
  {
    iata: "KEA",
    name: "Keisah Airport",
  },
  {
    iata: "KMM",
    name: "Kiman Airport",
  },
  {
    iata: "KOD",
    name: "Kotabangun Airport",
  },
  {
    iata: "KRC",
    name: "Kerinici airport",
  },
  {
    iata: "KWB",
    name: "Karimunjawa Airport",
  },
  {
    iata: "LLN",
    name: "Kelila Airport",
  },
  {
    iata: "LWE",
    name: "Lewoleba Airport",
  },
  {
    iata: "LYK",
    name: "Lunyuk Airport",
  },
  {
    iata: "MJY",
    name: "Mangunjaya Airport",
  },
  {
    iata: "MPT",
    name: "Maliana airport",
    city: "Maliana",
  },
  {
    iata: "MSI",
    name: "Masalembo Airport",
  },
  {
    iata: "MUF",
    name: "Muting Airport",
  },
  {
    iata: "NAF",
    name: "Banaina Airport",
  },
  {
    iata: "NDA",
    name: "Bandanaira Airport",
    city: "Banda Island",
  },
  {
    iata: "OBD",
    name: "Obano Airport",
  },
  {
    iata: "PPJ",
    name: "Pulau Panjang Airport",
    city: "Tjipara-Java Island",
  },
  {
    iata: "PUM",
    name: "Pomala Airport",
  },
  {
    iata: "PWL",
    name: "Purwokerto Airport",
  },
  {
    iata: "RAQ",
    name: "Sugimanuru Airport",
  },
  {
    iata: "RKI",
    name: "Rokot Airport",
  },
  {
    iata: "RTI",
    name: "Roti Airport",
  },
  {
    iata: "RUF",
    name: "Yuruf Airport",
  },
  {
    iata: "RZS",
    name: "Sawan Airport",
  },
  {
    iata: "SAE",
    name: "Sangir Airport",
  },
  {
    iata: "TBM",
    name: "Tumbang Samba Airport",
  },
  {
    iata: "TMY",
    name: "Tiom Airport",
  },
  {
    iata: "ZEG",
    name: "Senggo Airport",
  },
  {
    iata: "ZGP",
    name: "Zugapa Airport",
  },
  {
    iata: "IOR",
    name: "Kilronan Airport",
    city: "Inis Mor",
  },
  {
    iata: "CHE",
    name: "Reeroe Airport",
  },
  {
    iata: "VDY",
    name: "Vijayanagar Aerodrome (JSW)",
    city: "",
  },
  {
    iata: "JGB",
    name: "Jagdalpur Airport",
  },
  {
    iata: "NVY",
    name: "Neyveli Airport",
  },
  {
    iata: "RJI",
    name: "Rajouri Airport",
  },
  {
    iata: "TEI",
    name: "Tezu Airport",
    city: "Tezu",
  },
  {
    iata: "KHA",
    name: "Khaneh Airport",
  },
  {
    iata: "GSM",
    name: "Gheshm Airport",
    city: "",
  },
  {
    iata: "TQR",
    name: "San Domino Island Heliport",
  },
  {
    iata: "JGD",
    name: "Jiagedaqi Airport",
  },
  {
    iata: "JIC",
    name: "Jinchuan Airport",
    city: "Jinchang",
  },
  {
    iata: "JIQ",
    name: "Qianjiang Wulingshan Airport",
    city: "Chongqing",
  },
  {
    iata: "JMC",
    name: "Commodore Center Heliport",
  },
  {
    iata: "JRA",
    name: "West 30th St. Heliport",
  },
  {
    iata: "AMK",
    name: "Animas Air Park",
    city: "Durango",
  },
  {
    iata: "RLA",
    name: "Rolla Downtown Airport",
  },
  {
    iata: "FID",
    name: "Elizabeth Field",
    city: "Fishers Island",
  },
  {
    iata: "AHD",
    name: "Ardmore Downtown Executive Airport",
  },
  {
    iata: "GCW",
    name: "Grand Canyon West Airport",
    city: "Peach Springs",
  },
  {
    iata: "RKC",
    name: "Montague-Yreka Rohrer Field",
    city: "Montague",
  },
  {
    iata: "GNF",
    name: "Gansner Field",
    city: "Quincy",
  },
  {
    iata: "AHF",
    name: "Arapahoe Municipal Airport",
  },
  {
    iata: "GTP",
    name: "Grants Pass Airport",
    city: "Grants Pass",
  },
  {
    iata: "GCD",
    name: "Grand Coulee Dam Airport",
    city: "Electric City",
  },
  {
    iata: "FPY",
    name: "Perry Foley Airport",
    city: "Perry",
  },
  {
    iata: "FHB",
    name: "Fernandina Beach Municipal Airport",
    city: "Fernandina Beach",
  },
  {
    iata: "BLD",
    name: "Boulder City Municipal Airport",
    city: "Boulder City",
  },
  {
    iata: "AAF",
    name: "Apalachicola Regional Airport",
    city: "Apalachicola",
  },
  {
    iata: "ABE",
    name: "Lehigh Valley International Airport",
    city: "Allentown",
  },
  {
    iata: "ABI",
    name: "Abilene Regional Airport",
    city: "Abilene",
  },
  {
    iata: "ABQ",
    name: "Albuquerque International Sunport Airport",
    city: "Albuquerque",
  },
  {
    iata: "ABR",
    name: "Aberdeen Regional Airport",
    city: "Aberdeen",
  },
  {
    iata: "ABY",
    name: "Southwest Georgia Regional Airport",
    city: "Albany",
  },
  {
    iata: "ACB",
    name: "Antrim County Airport",
    city: "Bellaire",
  },
  {
    iata: "ACK",
    name: "Nantucket Memorial Airport",
    city: "Nantucket",
  },
  {
    iata: "ACT",
    name: "Waco Regional Airport",
    city: "Waco",
  },
  {
    iata: "ACV",
    name: "Arcata Airport",
    city: "Arcata/Eureka",
  },
  {
    iata: "ACY",
    name: "Atlantic City International Airport",
    city: "Atlantic City",
  },
  {
    iata: "ADG",
    name: "Lenawee County Airport",
    city: "Adrian",
  },
  {
    iata: "ADT",
    name: "Ada Municipal Airport",
    city: "Ada",
  },
  {
    iata: "ADM",
    name: "Ardmore Municipal Airport",
    city: "Ardmore",
  },
  {
    iata: "ADS",
    name: "Addison Airport",
    city: "Dallas",
  },
  {
    iata: "ADW",
    name: "Andrews Air Force Base",
    city: "Camp Springs",
  },
  {
    iata: "KAE",
    name: "Kake Seaplane Base",
  },
  {
    iata: "AEL",
    name: "Albert Lea Municipal Airport",
    city: "Albert Lea",
  },
  {
    iata: "AEX",
    name: "Alexandria International Airport",
    city: "Alexandria",
  },
  {
    iata: "AFF",
    name: "USAF Academy Airfield",
    city: "Colorado Springs",
  },
  {
    iata: "WSG",
    name: "Washington County Airport",
    city: "Washington",
  },
  {
    iata: "AFN",
    name: "Jaffrey Airport Silver Ranch Airport",
    city: "Jaffrey",
  },
  {
    iata: "AFO",
    name: "Afton Municipal Airport",
    city: "Afton",
  },
  {
    iata: "AFW",
    name: "Fort Worth Alliance Airport",
    city: "Fort Worth",
  },
  {
    iata: "AGC",
    name: "Allegheny County Airport",
    city: "Pittsburgh",
  },
  {
    iata: "AGO",
    name: "Magnolia Municipal Airport",
    city: "Magnolia",
  },
  {
    iata: "AGS",
    name: "Augusta Regional At Bush Field",
    city: "Augusta",
  },
  {
    iata: "AHC",
    name: "Amedee Army Air Field",
    city: "Herlong",
  },
  {
    iata: "AHH",
    name: "Amery Municipal Airport",
    city: "Amery",
  },
  {
    iata: "AHN",
    name: "Athens Ben Epps Airport",
    city: "Athens",
  },
  {
    iata: "AIA",
    name: "Alliance Municipal Airport",
    city: "Alliance",
  },
  {
    iata: "AID",
    name: "Anderson Municipal Darlington Field",
    city: "Anderson",
  },
  {
    iata: "AIK",
    name: "Aiken Municipal Airport",
    city: "Aiken",
  },
  {
    iata: "AIO",
    name: "Atlantic Municipal Airport",
    city: "Atlantic",
  },
  {
    iata: "AIV",
    name: "George Downer Airport",
    city: "Aliceville",
  },
  {
    iata: "AIY",
    name: "Atlantic City Municipal Bader Field",
  },
  {
    iata: "AIZ",
    name: "Lee C Fine Memorial Airport",
    city: "Kaiser Lake Ozark",
  },
  {
    iata: "AKO",
    name: "Colorado Plains Regional Airport",
    city: "Akron",
  },
  {
    iata: "AKC",
    name: "Akron Fulton International Airport",
    city: "Akron",
  },
  {
    iata: "ALB",
    name: "Albany International Airport",
    city: "Albany",
  },
  {
    iata: "ALI",
    name: "Alice International Airport",
    city: "Alice",
  },
  {
    iata: "ALM",
    name: "Alamogordo White Sands Regional Airport",
    city: "Alamogordo",
  },
  {
    iata: "ALN",
    name: "St Louis Regional Airport",
    city: "Alton/St Louis",
  },
  {
    iata: "ALO",
    name: "Waterloo Regional Airport",
    city: "Waterloo",
  },
  {
    iata: "ALS",
    name: "San Luis Valley Regional Bergman Field",
    city: "Alamosa",
  },
  {
    iata: "ALW",
    name: "Walla Walla Regional Airport",
    city: "Walla Walla",
  },
  {
    iata: "ALX",
    name: "Thomas C Russell Field",
    city: "Alexander City",
  },
  {
    iata: "AMA",
    name: "Rick Husband Amarillo International Airport",
    city: "Amarillo",
  },
  {
    iata: "AMN",
    name: "RPD Airport",
    city: "Alma",
  },
  {
    iata: "AMW",
    name: "Ames Municipal Airport",
    city: "Ames",
  },
  {
    iata: "ANB",
    name: "Anniston Metropolitan Airport",
    city: "Anniston",
  },
  {
    iata: "AND",
    name: "Anderson Regional Airport",
    city: "Anderson",
  },
  {
    iata: "ANP",
    name: "Lee Airport",
    city: "Annapolis",
  },
  {
    iata: "ANQ",
    name: "Tri State Steuben County Airport",
    city: "Angola",
  },
  {
    iata: "ANW",
    name: "Ainsworth Municipal Airport",
    city: "Ainsworth",
  },
  {
    iata: "ANY",
    name: "Anthony Municipal Airport",
    city: "Anthony",
  },
  {
    iata: "AOH",
    name: "Lima Allen County Airport",
    city: "Lima",
  },
  {
    iata: "AOO",
    name: "Altoona Blair County Airport",
    city: "Altoona",
  },
  {
    iata: "APA",
    name: "Centennial Airport",
    city: "Denver",
  },
  {
    iata: "APC",
    name: "Napa County Airport",
    city: "Napa",
  },
  {
    iata: "APF",
    name: "Naples Municipal Airport",
    city: "Naples",
  },
  {
    iata: "APG",
    name: "Phillips Army Air Field",
    city: "Aberdeen Proving Grounds(Aberdeen)",
  },
  {
    iata: "APH",
    name: "A P Hill Aaf (Fort A P Hill) Airport",
    city: "Fort A. P. Hill",
  },
  {
    iata: "APN",
    name: "Alpena County Regional Airport",
    city: "Alpena",
  },
  {
    iata: "APT",
    name: "Marion County Brown Field",
    city: "Jasper",
  },
  {
    iata: "APV",
    name: "Apple Valley Airport",
    city: "Apple Valley",
  },
  {
    iata: "ARA",
    name: "Acadiana Regional Airport",
    city: "New Iberia",
  },
  {
    iata: "ARB",
    name: "Ann Arbor Municipal Airport",
    city: "Ann Arbor",
  },
  {
    iata: "ARG",
    name: "Walnut Ridge Regional Airport",
    city: "Walnut Ridge",
  },
  {
    iata: "ART",
    name: "Watertown International Airport",
    city: "Watertown",
  },
  {
    iata: "ATL",
    name: "Hartsfield Jackson Atlanta International Airport",
    city: "Atlanta",
  },
  {
    iata: "ATW",
    name: "Outagamie County Regional Airport",
    city: "Appleton",
  },
  {
    iata: "ATY",
    name: "Watertown Regional Airport",
    city: "Watertown",
  },
  {
    iata: "AUG",
    name: "Augusta State Airport",
    city: "Augusta",
  },
  {
    iata: "AUS",
    name: "Austin Bergstrom International Airport",
    city: "Austin",
  },
  {
    iata: "AVL",
    name: "Asheville Regional Airport",
    city: "Asheville",
  },
  {
    iata: "AVO",
    name: "Avon Park Executive Airport",
    city: "Avon Park",
  },
  {
    iata: "AVP",
    name: "Wilkes Barre Scranton International Airport",
    city: "Wilkes-Barre/Scranton",
  },
  {
    iata: "AWM",
    name: "West Memphis Municipal Airport",
    city: "West Memphis",
  },
  {
    iata: "AXN",
    name: "Chandler Field",
    city: "Alexandria",
  },
  {
    iata: "AXS",
    name: "Altus Quartz Mountain Regional Airport",
    city: "Altus",
  },
  {
    iata: "AXV",
    name: "Neil Armstrong Airport",
    city: "Wapakoneta",
  },
  {
    iata: "AXX",
    name: "Angel Fire Airport",
    city: "Angel Fire",
  },
  {
    iata: "AYE",
    name: "Ft Devens Moore Army Air Field",
  },
  {
    iata: "AYS",
    name: "Waycross Ware County Airport",
    city: "Waycross",
  },
  {
    iata: "AZO",
    name: "Kalamazoo Battle Creek International Airport",
    city: "Kalamazoo",
  },
  {
    iata: "BAB",
    name: "Beale Air Force Base",
    city: "Marysville",
  },
  {
    iata: "BAD",
    name: "Barksdale Air Force Base",
    city: "Bossier City",
  },
  {
    iata: "BAF",
    name: "Barnes Municipal Airport",
    city: "Westfield/Springfield",
  },
  {
    iata: "BDL",
    name: "Bradley International Airport",
    city: "Hartford",
  },
  {
    iata: "BDR",
    name: "Igor I Sikorsky Memorial Airport",
    city: "Bridgeport",
  },
  {
    iata: "BED",
    name: "Laurence G Hanscom Field",
    city: "Bedford",
  },
  {
    iata: "BFD",
    name: "Bradford Regional Airport",
    city: "Bradford",
  },
  {
    iata: "BFF",
    name: "Western Neb. Rgnl/William B. Heilig Airport",
    city: "Scottsbluff",
  },
  {
    iata: "BFI",
    name: "Boeing Field King County International Airport",
    city: "Seattle",
  },
  {
    iata: "BFL",
    name: "Meadows Field",
    city: "Bakersfield",
  },
  {
    iata: "BGM",
    name: "Greater Binghamton/Edwin A Link field",
    city: "Binghamton",
  },
  {
    iata: "BGR",
    name: "Bangor International Airport",
    city: "Bangor",
  },
  {
    iata: "BHB",
    name: "Hancock County-Bar Harbor Airport",
    city: "Bar Harbor",
  },
  {
    iata: "BHM",
    name: "Birmingham-Shuttlesworth International Airport",
    city: "Birmingham",
  },
  {
    iata: "BIL",
    name: "Billings Logan International Airport",
    city: "Billings",
  },
  {
    iata: "BIS",
    name: "Bismarck Municipal Airport",
    city: "Bismarck",
  },
  {
    iata: "BKL",
    name: "Burke Lakefront Airport",
    city: "Cleveland",
  },
  {
    iata: "BKW",
    name: "Raleigh County Memorial Airport",
    city: "Beckley",
  },
  {
    iata: "BKX",
    name: "Brookings Regional Airport",
    city: "Brookings",
  },
  {
    iata: "BLF",
    name: "Mercer County Airport",
    city: "Bluefield",
  },
  {
    iata: "BLI",
    name: "Bellingham International Airport",
    city: "Bellingham",
  },
  {
    iata: "BMG",
    name: "Monroe County Airport",
    city: "Bloomington",
  },
  {
    iata: "BMI",
    name: "Central Illinois Regional Airport at Bloomington-Normal",
    city: "Bloomington-Normal",
  },
  {
    iata: "BMT",
    name: "Beaumont Municipal Airport",
    city: "Beaumont",
  },
  {
    iata: "BNA",
    name: "Nashville International Airport",
    city: "Nashville",
  },
  {
    iata: "BOI",
    name: "Boise Air Terminal/Gowen field",
    city: "Boise",
  },
  {
    iata: "BOS",
    name: "General Edward Lawrence Logan International Airport",
    city: "Boston",
  },
  {
    iata: "BPT",
    name: "Southeast Texas Regional Airport",
    city: "Beaumont/Port Arthur",
  },
  {
    iata: "BQK",
    name: "Brunswick Golden Isles Airport",
    city: "Brunswick",
  },
  {
    iata: "BRL",
    name: "Southeast Iowa Regional Airport",
    city: "Burlington",
  },
  {
    iata: "BRO",
    name: "Brownsville South Padre Island International Airport",
    city: "Brownsville",
  },
  {
    iata: "BTM",
    name: "Bert Mooney Airport",
    city: "Butte",
  },
  {
    iata: "BTR",
    name: "Baton Rouge Metropolitan, Ryan Field",
    city: "Baton Rouge",
  },
  {
    iata: "BTV",
    name: "Burlington International Airport",
    city: "Burlington",
  },
  {
    iata: "BTY",
    name: "Beatty Airport",
    city: "Beatty",
  },
  {
    iata: "BUB",
    name: "Cram Field",
    city: "Burwell",
  },
  {
    iata: "BUF",
    name: "Buffalo Niagara International Airport",
    city: "Buffalo",
  },
  {
    iata: "BUM",
    name: "Butler Memorial Airport",
    city: "Butler",
  },
  {
    iata: "BUR",
    name: "Bob Hope Airport",
    city: "Burbank",
  },
  {
    iata: "BVO",
    name: "Bartlesville Municipal Airport",
    city: "Bartlesville",
  },
  {
    iata: "BVX",
    name: "Batesville Regional Airport",
    city: "Batesville",
  },
  {
    iata: "BVY",
    name: "Beverly Municipal Airport",
    city: "Beverly",
  },
  {
    iata: "BWC",
    name: "Brawley Municipal Airport",
    city: "Brawley",
  },
  {
    iata: "BWD",
    name: "Brownwood Regional Airport",
    city: "Brownwood",
  },
  {
    iata: "BWG",
    name: "Bowling Green Warren County Regional Airport",
    city: "Bowling Green",
  },
  {
    iata: "BWI",
    name: "Baltimore/Washington International Thurgood Marshal Airport",
    city: "Baltimore",
  },
  {
    iata: "BXA",
    name: "George R Carr Memorial Air Field",
    city: "Bogalusa",
  },
  {
    iata: "BXK",
    name: "Buckeye Municipal Airport",
    city: "Buckeye",
  },
  {
    iata: "BYS",
    name: "Bicycle Lake Army Air Field",
    city: "Fort Irwin/Barstow",
  },
  {
    iata: "BZN",
    name: "Gallatin Field",
    city: "Bozeman",
  },
  {
    iata: "CLG",
    name: "New Coalinga Municipal Airport",
  },
  {
    iata: "CAE",
    name: "Columbia Metropolitan Airport",
    city: "Columbia",
  },
  {
    iata: "CAK",
    name: "Akron Canton Regional Airport",
    city: "Akron",
  },
  {
    iata: "CDC",
    name: "Cedar City Regional Airport",
    city: "Cedar City",
  },
  {
    iata: "CEC",
    name: "Jack Mc Namara Field Airport",
    city: "Crescent City",
  },
  {
    iata: "CEF",
    name: "Westover ARB/Metropolitan Airport",
    city: "Springfield/Chicopee",
  },
  {
    iata: "CGI",
    name: "Cape Girardeau Regional Airport",
    city: "Cape Girardeau",
  },
  {
    iata: "CGX",
    name: "Chicago Meigs Airport",
  },
  {
    iata: "CHA",
    name: "Lovell Field",
    city: "Chattanooga",
  },
  {
    iata: "CHO",
    name: "Charlottesville Albemarle Airport",
    city: "Charlottesville",
  },
  {
    iata: "CHS",
    name: "Charleston Air Force Base-International Airport",
    city: "Charleston",
  },
  {
    iata: "CID",
    name: "The Eastern Iowa Airport",
    city: "Cedar Rapids",
  },
  {
    iata: "CIU",
    name: "Chippewa County International Airport",
    city: "Sault Ste Marie",
  },
  {
    iata: "CKB",
    name: "North Central West Virginia Airport",
    city: "Clarksburg",
  },
  {
    iata: "KCL",
    name: "Chignik Lagoon Airport",
  },
  {
    iata: "CLE",
    name: "Cleveland Hopkins International Airport",
    city: "Cleveland",
  },
  {
    iata: "CLL",
    name: "Easterwood Field",
    city: "College Station",
  },
  {
    iata: "CLM",
    name: "William R Fairchild International Airport",
    city: "Port Angeles",
  },
  {
    iata: "CLT",
    name: "Charlotte Douglas International Airport",
    city: "Charlotte",
  },
  {
    iata: "CMH",
    name: "Port Columbus International Airport",
    city: "Columbus",
  },
  {
    iata: "CMI",
    name: "University of Illinois Willard Airport",
    city: "Champaign/Urbana",
  },
  {
    iata: "CMX",
    name: "Houghton County Memorial Airport",
    city: "Hancock",
  },
  {
    iata: "CNM",
    name: "Cavern City Air Terminal",
    city: "Carlsbad",
  },
  {
    iata: "COS",
    name: "City of Colorado Springs Municipal Airport",
    city: "Colorado Springs",
  },
  {
    iata: "COU",
    name: "Columbia Regional Airport",
    city: "Columbia",
  },
  {
    iata: "CPR",
    name: "Casper-Natrona County International Airport",
    city: "Casper",
  },
  {
    iata: "CRO",
    name: "Corcoran Airport",
    city: "Corcoran",
  },
  {
    iata: "CRP",
    name: "Corpus Christi International Airport",
    city: "Corpus Christi",
  },
  {
    iata: "CRW",
    name: "Yeager Airport",
    city: "Charleston",
  },
  {
    iata: "CSG",
    name: "Columbus Metropolitan Airport",
    city: "Columbus",
  },
  {
    iata: "CVG",
    name: "Cincinnati Northern Kentucky International Airport",
    city: "Hebron",
  },
  {
    iata: "KIP",
    name: "Kickapoo Downtown Airport",
    city: "Wichita Falls",
  },
  {
    iata: "CWF",
    name: "Chennault International Airport",
    city: "Lake Charles",
  },
  {
    iata: "CYS",
    name: "Cheyenne Regional Jerry Olson Field",
    city: "Cheyenne",
  },
  {
    iata: "DAB",
    name: "Daytona Beach International Airport",
    city: "Daytona Beach",
  },
  {
    iata: "DAL",
    name: "Dallas Love Field",
    city: "Dallas",
  },
  {
    iata: "DAN",
    name: "Danville Regional Airport",
    city: "Danville",
  },
  {
    iata: "DAY",
    name: "James M Cox Dayton International Airport",
    city: "Dayton",
  },
  {
    iata: "DBQ",
    name: "Dubuque Regional Airport",
    city: "Dubuque",
  },
  {
    iata: "DCA",
    name: "Ronald Reagan Washington National Airport",
    city: "Washington",
  },
  {
    iata: "DDC",
    name: "Dodge City Regional Airport",
    city: "Dodge City",
  },
  {
    iata: "DEC",
    name: "Decatur Airport",
    city: "Decatur",
  },
  {
    iata: "DEN",
    name: "Denver International Airport",
    city: "Denver",
  },
  {
    iata: "DET",
    name: "Coleman A. Young Municipal Airport",
    city: "Detroit",
  },
  {
    iata: "DFW",
    name: "Dallas Fort Worth International Airport",
    city: "Dallas-Fort Worth",
  },
  {
    iata: "DHN",
    name: "Dothan Regional Airport",
    city: "Dothan",
  },
  {
    iata: "DLH",
    name: "Duluth International Airport",
    city: "Duluth",
  },
  {
    iata: "DNL",
    name: "Daniel Field",
    city: "Augusta",
  },
  {
    iata: "DSM",
    name: "Des Moines International Airport",
    city: "Des Moines",
  },
  {
    iata: "DTW",
    name: "Detroit Metropolitan Wayne County Airport",
    city: "Detroit",
  },
  {
    iata: "DUJ",
    name: "DuBois Regional Airport",
    city: "Dubois",
  },
  {
    iata: "JJM",
    name: "Mulika Lodge Airport",
    city: "Meru-Kinna",
  },
  {
    iata: "VPG",
    name: "Vipingo Estate Airport",
  },
  {
    iata: "KRV",
    name: "Kerio Valley Airport",
  },
  {
    iata: "KIU",
    name: "Kiunga Airport",
  },
  {
    iata: "LBK",
    name: "Liboi Airport",
  },
  {
    iata: "LBN",
    name: "Lake Baringo Airport",
  },
  {
    iata: "LKU",
    name: "Lake Rudolf Airport",
  },
  {
    iata: "MRE",
    name: "Mara Lodges Airport",
    city: "Masai Mara",
  },
  {
    iata: "MUM",
    name: "Mumias Airport",
  },
  {
    iata: "ALE",
    name: "Alpine Casparis Municipal Airport",
  },
  {
    iata: "BGT",
    name: "Bagdad Airport",
    city: "Bagdad",
  },
  {
    iata: "EAR",
    name: "Kearney Regional Airport",
    city: "Kearney",
  },
  {
    iata: "EAU",
    name: "Chippewa Valley Regional Airport",
    city: "Eau Claire",
  },
  {
    iata: "ECP",
    name: "Northwest Florida Beaches International Airport",
    city: "Panama City Beach",
  },
  {
    iata: "EEN",
    name: "Dillant Hopkins Airport",
    city: "Keene",
  },
  {
    iata: "EGE",
    name: "Eagle County Regional Airport",
    city: "Eagle",
  },
  {
    iata: "KEK",
    name: "Ekwok Airport",
  },
  {
    iata: "EKO",
    name: "Elko Regional Airport",
    city: "Elko",
  },
  {
    iata: "ELD",
    name: "South Arkansas Regional At Goodwin Field",
    city: "El Dorado",
  },
  {
    iata: "ELM",
    name: "Elmira Corning Regional Airport",
    city: "Elmira/Corning",
  },
  {
    iata: "ELP",
    name: "El Paso International Airport",
    city: "El Paso",
  },
  {
    iata: "ERI",
    name: "Erie International Tom Ridge Field",
    city: "Erie",
  },
  {
    iata: "EUG",
    name: "Mahlon Sweet Field",
    city: "Eugene",
  },
  {
    iata: "EVV",
    name: "Evansville Regional Airport",
    city: "Evansville",
  },
  {
    iata: "EWB",
    name: "New Bedford Regional Airport",
    city: "New Bedford",
  },
  {
    iata: "EWN",
    name: "Coastal Carolina Regional Airport",
    city: "New Bern",
  },
  {
    iata: "EWR",
    name: "Newark Liberty International Airport",
    city: "Newark",
  },
  {
    iata: "EYW",
    name: "Key West International Airport",
    city: "Key West",
  },
  {
    iata: "FAR",
    name: "Hector International Airport",
    city: "Fargo",
  },
  {
    iata: "FAT",
    name: "Fresno Yosemite International Airport",
    city: "Fresno",
  },
  {
    iata: "FAY",
    name: "Fayetteville Regional Grannis Field",
    city: "Fayetteville",
  },
  {
    iata: "FBG",
    name: "Simmons Army Air Field",
    city: "Fort Bragg",
  },
  {
    iata: "FCS",
    name: "Butts AAF (Fort Carson) Air Field",
    city: "Fort Carson",
  },
  {
    iata: "KFE",
    name: "Fortescue - Dave Forrest Aerodrome",
    city: "Cloudbreak Village",
  },
  {
    iata: "FRD",
    name: "Friday Harbor Airport",
    city: "Friday Harbor",
  },
  {
    iata: "FHU",
    name: "Sierra Vista Municipal Libby Army Air Field",
    city: "Fort Huachuca Sierra Vista",
  },
  {
    iata: "FLG",
    name: "Flagstaff Pulliam Airport",
    city: "Flagstaff",
  },
  {
    iata: "FLL",
    name: "Fort Lauderdale Hollywood International Airport",
    city: "Fort Lauderdale",
  },
  {
    iata: "FLO",
    name: "Florence Regional Airport",
    city: "Florence",
  },
  {
    iata: "FLU",
    name: "Flushing Airport",
  },
  {
    iata: "FNT",
    name: "Bishop International Airport",
    city: "Flint",
  },
  {
    iata: "FOD",
    name: "Fort Dodge Regional Airport",
    city: "Fort Dodge",
  },
  {
    iata: "FOE",
    name: "Forbes Field",
    city: "Topeka",
  },
  {
    iata: "FIL",
    name: "Fillmore Municipal Airport",
    city: "Fillmore",
  },
  {
    iata: "FPR",
    name: "St Lucie County International Airport",
    city: "Fort Pierce",
  },
  {
    iata: "FRH",
    name: "French Lick Municipal Airport",
    city: "French Lick",
  },
  {
    iata: "FRI",
    name: "Marshall Army Air Field",
    city: "Fort Riley(Junction City)",
  },
  {
    iata: "FRM",
    name: "Fairmont Municipal Airport",
    city: "Fairmont",
  },
  {
    iata: "FSD",
    name: "Joe Foss Field Airport",
    city: "Sioux Falls",
  },
  {
    iata: "FSM",
    name: "Fort Smith Regional Airport",
    city: "Fort Smith",
  },
  {
    iata: "FMS",
    name: "Fort Madison Municipal Airport",
    city: "Fort Madison",
  },
  {
    iata: "FTW",
    name: "Fort Worth Meacham International Airport",
    city: "Fort Worth",
  },
  {
    iata: "FWA",
    name: "Fort Wayne International Airport",
    city: "Fort Wayne",
  },
  {
    iata: "FYV",
    name: "Drake Field",
    city: "Fayetteville",
  },
  {
    iata: "GCK",
    name: "Garden City Regional Airport",
    city: "Garden City",
  },
  {
    iata: "GCN",
    name: "Grand Canyon National Park Airport",
    city: "Grand Canyon",
  },
  {
    iata: "GEG",
    name: "Spokane International Airport",
    city: "Spokane",
  },
  {
    iata: "GFK",
    name: "Grand Forks International Airport",
    city: "Grand Forks",
  },
  {
    iata: "GGG",
    name: "East Texas Regional Airport",
    city: "Longview",
  },
  {
    iata: "GGW",
    name: "Wokal Field Glasgow International Airport",
    city: "Glasgow",
  },
  {
    iata: "GJT",
    name: "Grand Junction Regional Airport",
    city: "Grand Junction",
  },
  {
    iata: "GLH",
    name: "Mid Delta Regional Airport",
    city: "Greenville",
  },
  {
    iata: "GLS",
    name: "Scholes International At Galveston Airport",
    city: "Galveston",
  },
  {
    iata: "GNV",
    name: "Gainesville Regional Airport",
    city: "Gainesville",
  },
  {
    iata: "GON",
    name: "Groton New London Airport",
    city: "Groton (New London)",
  },
  {
    iata: "FCA",
    name: "Glacier Park International Airport",
    city: "Kalispell",
  },
  {
    iata: "GPT",
    name: "Gulfport Biloxi International Airport",
    city: "Gulfport",
  },
  {
    iata: "GRB",
    name: "Austin Straubel International Airport",
    city: "Green Bay",
  },
  {
    iata: "GRI",
    name: "Central Nebraska Regional Airport",
    city: "Grand Island",
  },
  {
    iata: "GRK",
    name: "Robert Gray  Army Air Field Airport",
    city: "Fort Hood/Killeen",
  },
  {
    iata: "GRR",
    name: "Gerald R. Ford International Airport",
    city: "Grand Rapids",
  },
  {
    iata: "GSO",
    name: "Piedmont Triad International Airport",
    city: "Greensboro",
  },
  {
    iata: "GSP",
    name: "Greenville Spartanburg International Airport",
    city: "Greenville",
  },
  {
    iata: "GTF",
    name: "Great Falls International Airport",
    city: "Great Falls",
  },
  {
    iata: "GUP",
    name: "Gallup Municipal Airport",
    city: "Gallup",
  },
  {
    iata: "GVT",
    name: "Majors Airport",
    city: "Greenville",
  },
  {
    iata: "GVW",
    name: "Richards-Gebaur Air Force Base",
  },
  {
    iata: "GYY",
    name: "Gary Chicago International Airport",
    city: "Gary",
  },
  {
    iata: "HGR",
    name: "Hagerstown Regional Richard A Henson Field",
    city: "Hagerstown",
  },
  {
    iata: "HIB",
    name: "Chisholm Hibbing Airport",
    city: "Hibbing",
  },
  {
    iata: "HKY",
    name: "Hickory Regional Airport",
    city: "Hickory",
  },
  {
    iata: "HLN",
    name: "Helena Regional Airport",
    city: "Helena",
  },
  {
    iata: "HON",
    name: "Huron Regional Airport",
    city: "Huron",
  },
  {
    iata: "HOT",
    name: "Memorial Field",
    city: "Hot Springs",
  },
  {
    iata: "HOU",
    name: "William P Hobby Airport",
    city: "Houston",
  },
  {
    iata: "HPN",
    name: "Westchester County Airport",
    city: "White Plains",
  },
  {
    iata: "HRL",
    name: "Valley International Airport",
    city: "Harlingen",
  },
  {
    iata: "HRO",
    name: "Boone County Airport",
    city: "Harrison",
  },
  {
    iata: "HNC",
    name: "Billy Mitchell Airport",
    city: "Hatteras",
  },
  {
    iata: "HSV",
    name: "Huntsville International Carl T Jones Field",
    city: "Huntsville",
  },
  {
    iata: "HTS",
    name: "Tri-State/Milton J. Ferguson Field",
    city: "Huntington",
  },
  {
    iata: "HUF",
    name: "Terre Haute International Hulman Field",
    city: "Terre Haute",
  },
  {
    iata: "HVN",
    name: "Tweed New Haven Airport",
    city: "New Haven",
  },
  {
    iata: "HYA",
    name: "Barnstable Municipal Boardman Polando Field",
    city: "Hyannis",
  },
  {
    iata: "IAB",
    name: "Mc Connell Air Force Base",
    city: "Wichita",
  },
  {
    iata: "IAD",
    name: "Washington Dulles International Airport",
    city: "Dulles",
  },
  {
    iata: "IAG",
    name: "Niagara Falls International Airport",
    city: "Niagara Falls",
  },
  {
    iata: "IAH",
    name: "George Bush Intercontinental Houston Airport",
    city: "Houston",
  },
  {
    iata: "ICT",
    name: "Wichita Mid Continent Airport",
    city: "Wichita",
  },
  {
    iata: "IDA",
    name: "Idaho Falls Regional Airport",
    city: "Idaho Falls",
  },
  {
    iata: "IFP",
    name: "Laughlin Bullhead International Airport",
    city: "Bullhead City",
  },
  {
    iata: "IGM",
    name: "Kingman Airport",
    city: "Kingman",
  },
  {
    iata: "ILG",
    name: "New Castle Airport",
    city: "Wilmington",
  },
  {
    iata: "ILM",
    name: "Wilmington International Airport",
    city: "Wilmington",
  },
  {
    iata: "IND",
    name: "Indianapolis International Airport",
    city: "Indianapolis",
  },
  {
    iata: "INL",
    name: "Falls International Airport",
    city: "International Falls",
  },
  {
    iata: "INT",
    name: "Smith Reynolds Airport",
    city: "Winston Salem",
  },
  {
    iata: "IPT",
    name: "Williamsport Regional Airport",
    city: "Williamsport",
  },
  {
    iata: "IRK",
    name: "Kirksville Regional Airport",
    city: "Kirksville",
  },
  {
    iata: "ISP",
    name: "Long Island Mac Arthur Airport",
    city: "Islip",
  },
  {
    iata: "ITH",
    name: "Ithaca Tompkins Regional Airport",
    city: "Ithaca",
  },
  {
    iata: "AZA",
    name: "Phoenix-Mesa-Gateway Airport",
    city: "Phoenix",
  },
  {
    iata: "JAC",
    name: "Jackson Hole Airport",
    city: "Jackson",
  },
  {
    iata: "JAN",
    name: "Jackson Evers International Airport",
    city: "Jackson",
  },
  {
    iata: "JAX",
    name: "Jacksonville International Airport",
    city: "Jacksonville",
  },
  {
    iata: "JBR",
    name: "Jonesboro Municipal Airport",
    city: "Jonesboro",
  },
  {
    iata: "JFK",
    name: "John F Kennedy International Airport",
    city: "New York",
  },
  {
    iata: "JLN",
    name: "Joplin Regional Airport",
    city: "Joplin",
  },
  {
    iata: "JMS",
    name: "Jamestown Regional Airport",
    city: "Jamestown",
  },
  {
    iata: "JST",
    name: "John Murtha Johnstown Cambria County Airport",
    city: "Johnstown",
  },
  {
    iata: "LAF",
    name: "Purdue University Airport",
    city: "Lafayette",
  },
  {
    iata: "LAN",
    name: "Capital City Airport",
    city: "Lansing",
  },
  {
    iata: "LAR",
    name: "Laramie Regional Airport",
    city: "Laramie",
  },
  {
    iata: "LAS",
    name: "McCarran International Airport",
    city: "Las Vegas",
  },
  {
    iata: "LAX",
    name: "Los Angeles International Airport",
    city: "Los Angeles",
  },
  {
    iata: "LBB",
    name: "Lubbock Preston Smith International Airport",
    city: "Lubbock",
  },
  {
    iata: "LBE",
    name: "Arnold Palmer Regional Airport",
    city: "Latrobe",
  },
  {
    iata: "LBF",
    name: "North Platte Regional Airport Lee Bird Field",
    city: "North Platte",
  },
  {
    iata: "LBL",
    name: "Liberal Mid-America Regional Airport",
    city: "Liberal",
  },
  {
    iata: "LCH",
    name: "Lake Charles Regional Airport",
    city: "Lake Charles",
  },
  {
    iata: "LEB",
    name: "Lebanon Municipal Airport",
    city: "Lebanon",
  },
  {
    iata: "LEX",
    name: "Blue Grass Airport",
    city: "Lexington",
  },
  {
    iata: "LFT",
    name: "Lafayette Regional Airport",
    city: "Lafayette",
  },
  {
    iata: "LGA",
    name: "La Guardia Airport",
    city: "New York",
  },
  {
    iata: "LGB",
    name: "Long Beach /Daugherty Field/ Airport",
    city: "Long Beach",
  },
  {
    iata: "LHC",
    name: "Arlington Municipal Airport",
  },
  {
    iata: "LIT",
    name: "Adams Field",
    city: "Little Rock",
  },
  {
    iata: "LMT",
    name: "Klamath Falls Airport",
    city: "Klamath Falls",
  },
  {
    iata: "LNK",
    name: "Lincoln Airport",
    city: "Lincoln",
  },
  {
    iata: "LNS",
    name: "Lancaster Airport",
    city: "Lancaster",
  },
  {
    iata: "LRD",
    name: "Laredo International Airport",
    city: "Laredo",
  },
  {
    iata: "LRU",
    name: "Las Cruces International Airport",
    city: "Las Cruces",
  },
  {
    iata: "LSE",
    name: "La Crosse Municipal Airport",
    city: "La Crosse",
  },
  {
    iata: "LUK",
    name: "Cincinnati Municipal Airport Lunken Field",
    city: "Cincinnati",
  },
  {
    iata: "LWS",
    name: "Lewiston Nez Perce County Airport",
    city: "Lewiston",
  },
  {
    iata: "LWT",
    name: "Lewistown Municipal Airport",
    city: "Lewistown",
  },
  {
    iata: "LYH",
    name: "Lynchburg Regional Preston Glenn Field",
    city: "Lynchburg",
  },
  {
    iata: "MAF",
    name: "Midland International Airport",
    city: "Midland",
  },
  {
    iata: "MBS",
    name: "MBS International Airport",
    city: "Saginaw",
  },
  {
    iata: "MCE",
    name: "Merced Regional Macready Field",
    city: "Merced",
  },
  {
    iata: "MCI",
    name: "Kansas City International Airport",
    city: "Kansas City",
  },
  {
    iata: "MCN",
    name: "Middle Georgia Regional Airport",
    city: "Macon",
  },
  {
    iata: "MCO",
    name: "Orlando International Airport",
    city: "Orlando",
  },
  {
    iata: "MDH",
    name: "Southern Illinois Airport",
    city: "Carbondale/Murphysboro",
  },
  {
    iata: "MDT",
    name: "Harrisburg International Airport",
    city: "Harrisburg",
  },
  {
    iata: "MDW",
    name: "Chicago Midway International Airport",
    city: "Chicago",
  },
  {
    iata: "MEI",
    name: "Key Field",
    city: "Meridian",
  },
  {
    iata: "MEM",
    name: "Memphis International Airport",
    city: "Memphis",
  },
  {
    iata: "MFE",
    name: "Mc Allen Miller International Airport",
    city: "Mc Allen",
  },
  {
    iata: "MFR",
    name: "Rogue Valley International Medford Airport",
    city: "Medford",
  },
  {
    iata: "MGM",
    name: "Montgomery Regional (Dannelly Field) Airport",
    city: "Montgomery",
  },
  {
    iata: "MGW",
    name: "Morgantown Municipal Walter L. Bill Hart Field",
    city: "Morgantown",
  },
  {
    iata: "MHK",
    name: "Manhattan Regional Airport",
    city: "Manhattan",
  },
  {
    iata: "MHT",
    name: "Manchester Airport",
    city: "Manchester",
  },
  {
    iata: "MIA",
    name: "Miami International Airport",
    city: "Miami",
  },
  {
    iata: "MIE",
    name: "Delaware County Johnson Field",
    city: "Muncie",
  },
  {
    iata: "MKC",
    name: "Charles B. Wheeler Downtown Airport",
    city: "Kansas City",
  },
  {
    iata: "MKE",
    name: "General Mitchell International Airport",
    city: "Milwaukee",
  },
  {
    iata: "MKG",
    name: "Muskegon County Airport",
    city: "Muskegon",
  },
  {
    iata: "MKL",
    name: "Mc Kellar Sipes Regional Airport",
    city: "Jackson",
  },
  {
    iata: "MLB",
    name: "Melbourne International Airport",
    city: "Melbourne",
  },
  {
    iata: "MLI",
    name: "Quad City International Airport",
    city: "Moline",
  },
  {
    iata: "MLS",
    name: "Frank Wiley Field",
    city: "Miles City",
  },
  {
    iata: "MLU",
    name: "Monroe Regional Airport",
    city: "Monroe",
  },
  {
    iata: "KMM",
    name: "Kimaam Airport",
  },
  {
    iata: "MMU",
    name: "Morristown Municipal Airport",
    city: "Morristown",
  },
  {
    iata: "MOB",
    name: "Mobile Regional Airport",
    city: "Mobile",
  },
  {
    iata: "MOD",
    name: "Modesto City Co-Harry Sham Field",
    city: "Modesto",
  },
  {
    iata: "MOT",
    name: "Minot International Airport",
    city: "Minot",
  },
  {
    iata: "MRY",
    name: "Monterey Peninsula Airport",
    city: "Monterey",
  },
  {
    iata: "MSL",
    name: "Northwest Alabama Regional Airport",
    city: "Muscle Shoals",
  },
  {
    iata: "MSN",
    name: "Dane County Regional Truax Field",
    city: "Madison",
  },
  {
    iata: "MSO",
    name: "Missoula International Airport",
    city: "Missoula",
  },
  {
    iata: "MSP",
    name: "Minneapolis-St Paul International/Wold-Chamberlain Airport",
    city: "Minneapolis",
  },
  {
    iata: "MSS",
    name: "Massena International Richards Field",
    city: "Massena",
  },
  {
    iata: "MSY",
    name: "Louis Armstrong New Orleans International Airport",
    city: "New Orleans",
  },
  {
    iata: "MVY",
    name: "Martha's Vineyard Airport",
    city: "Martha's Vineyard",
  },
  {
    iata: "MYR",
    name: "Myrtle Beach International Airport",
    city: "Myrtle Beach",
  },
  {
    iata: "NEL",
    name: "Lakehurst NAES /Maxfield Field",
    city: "Lakehurst",
  },
  {
    iata: "NGZ",
    name: "Alameda Naval Air Station",
  },
  {
    iata: "NOP",
    name: "Floyd Bennett Field",
    city: "Sinop",
  },
  {
    iata: "YUM",
    name: "Yuma MCAS/Yuma International Airport",
    city: "Yuma",
  },
  {
    iata: "NVN",
    name: "Nervino Airport",
    city: "Beckwourth",
  },
  {
    iata: "ODC",
    name: "Oakdale Airport",
    city: "Oakdale",
  },
  {
    iata: "OAK",
    name: "Metropolitan Oakland International Airport",
    city: "Oakland",
  },
  {
    iata: "OAR",
    name: "Marina Municipal Airport",
    city: "Marina",
  },
  {
    iata: "OKC",
    name: "Will Rogers World Airport",
    city: "Oklahoma City",
  },
  {
    iata: "OLD",
    name: "Dewitt Field,Old Town Municipal Airport",
    city: "Old Town",
  },
  {
    iata: "OLM",
    name: "Olympia Regional Airport",
    city: "Olympia",
  },
  {
    iata: "OMA",
    name: "Eppley Airfield",
    city: "Omaha",
  },
  {
    iata: "ONT",
    name: "Ontario International Airport",
    city: "Ontario",
  },
  {
    iata: "ORD",
    name: "Chicago O'Hare International Airport",
    city: "Chicago",
  },
  {
    iata: "ORF",
    name: "Norfolk International Airport",
    city: "Norfolk",
  },
  {
    iata: "ORH",
    name: "Worcester Regional Airport",
    city: "Worcester",
  },
  {
    iata: "OSH",
    name: "Wittman Regional Airport",
    city: "Oshkosh",
  },
  {
    iata: "OTH",
    name: "Southwest Oregon Regional Airport",
    city: "North Bend",
  },
  {
    iata: "OTM",
    name: "Ottumwa Regional Airport",
    city: "Ottumwa",
  },
  {
    iata: "OWB",
    name: "Owensboro Daviess County Airport",
    city: "Owensboro",
  },
  {
    iata: "DSO",
    name: "Sondok Airport",
    city: "",
  },
  {
    iata: "HBK",
    name: "Holbrook Municipal Airport",
    city: "Holbrook",
  },
  {
    iata: "CWX",
    name: "Cochise County Airport",
    city: "Willcox",
  },
  {
    iata: "PAE",
    name: "Snohomish County (Paine Field) Airport",
    city: "Everett",
  },
  {
    iata: "PAH",
    name: "Barkley Regional Airport",
    city: "Paducah",
  },
  {
    iata: "PBG",
    name: "Plattsburgh International Airport",
    city: "Plattsburgh",
  },
  {
    iata: "PBI",
    name: "Palm Beach International Airport",
    city: "West Palm Beach",
  },
  {
    iata: "PCA",
    name: "Picacho Stagefield Heliport",
    city: "Portage Creek",
  },
  {
    iata: "PDK",
    name: "DeKalb Peachtree Airport",
    city: "Atlanta",
  },
  {
    iata: "PDX",
    name: "Portland International Airport",
    city: "Portland",
  },
  {
    iata: "PFN",
    name: "Panama City-Bay Co International Airport",
    city: "Panama City",
  },
  {
    iata: "PHF",
    name: "Newport News Williamsburg International Airport",
    city: "Newport News",
  },
  {
    iata: "ADR",
    name: "Robert F Swinnie Airport",
    city: "Andrews",
  },
  {
    iata: "PHL",
    name: "Philadelphia International Airport",
    city: "Philadelphia",
  },
  {
    iata: "PHX",
    name: "Phoenix Sky Harbor International Airport",
    city: "Phoenix",
  },
  {
    iata: "PIA",
    name: "Greater Peoria Regional Airport",
    city: "Peoria",
  },
  {
    iata: "PIB",
    name: "Hattiesburg Laurel Regional Airport",
    city: "Hattiesburg/Laurel",
  },
  {
    iata: "PIE",
    name: "St Petersburg Clearwater International Airport",
    city: "St Petersburg-Clearwater",
  },
  {
    iata: "PIH",
    name: "Pocatello Regional Airport",
    city: "Pocatello",
  },
  {
    iata: "PIR",
    name: "Pierre Regional Airport",
    city: "Pierre",
  },
  {
    iata: "PIT",
    name: "Pittsburgh International Airport",
    city: "Pittsburgh",
  },
  {
    iata: "PKB",
    name: "Mid Ohio Valley Regional Airport",
    city: "Parkersburg",
  },
  {
    iata: "PLB",
    name: "Clinton County Airport",
  },
  {
    iata: "PLN",
    name: "Pellston Regional Airport of Emmet County Airport",
    city: "Pellston",
  },
  {
    iata: "PMD",
    name: "Palmdale Regional/USAF Plant 42 Airport",
    city: "Palmdale",
  },
  {
    iata: "PNS",
    name: "Pensacola Regional Airport",
    city: "Pensacola",
  },
  {
    iata: "POU",
    name: "Dutchess County Airport",
    city: "Poughkeepsie",
  },
  {
    iata: "PQI",
    name: "Northern Maine Regional Airport at Presque Isle",
    city: "Presque Isle",
  },
  {
    iata: "PRC",
    name: "Ernest A. Love Field",
    city: "Prescott",
  },
  {
    iata: "PSC",
    name: "Tri Cities Airport",
    city: "Pasco",
  },
  {
    iata: "PSM",
    name: "Portsmouth International at Pease Airport",
    city: "Portsmouth",
  },
  {
    iata: "PSP",
    name: "Palm Springs International Airport",
    city: "Palm Springs",
  },
  {
    iata: "PUB",
    name: "Pueblo Memorial Airport",
    city: "Pueblo",
  },
  {
    iata: "PUW",
    name: "Pullman Moscow Regional Airport",
    city: "Pullman/Moscow",
  },
  {
    iata: "PVD",
    name: "Theodore Francis Green State Airport",
    city: "Providence",
  },
  {
    iata: "PWM",
    name: "Portland International Jetport Airport",
    city: "Portland",
  },
  {
    iata: "PWT",
    name: "Bremerton National Airport",
    city: "Bremerton",
  },
  {
    iata: "KQA",
    name: "Akutan Seaplane Base",
  },
  {
    iata: "RAP",
    name: "Rapid City Regional Airport",
    city: "Rapid City",
  },
  {
    iata: "RDD",
    name: "Redding Municipal Airport",
    city: "Redding",
  },
  {
    iata: "RDG",
    name: "Reading Regional Carl A Spaatz Field",
    city: "Reading",
  },
  {
    iata: "RDM",
    name: "Roberts Field",
    city: "Redmond",
  },
  {
    iata: "RDU",
    name: "Raleigh Durham International Airport",
    city: "Raleigh/Durham",
  },
  {
    iata: "RFD",
    name: "Chicago Rockford International Airport",
    city: "Chicago/Rockford",
  },
  {
    iata: "RHI",
    name: "Rhinelander Oneida County Airport",
    city: "Rhinelander",
  },
  {
    iata: "RIC",
    name: "Richmond International Airport",
    city: "Richmond",
  },
  {
    iata: "KRJ",
    name: "Karawari Airstrip",
    city: "",
  },
  {
    iata: "RKS",
    name: "Rock Springs Sweetwater County Airport",
    city: "Rock Springs",
  },
  {
    iata: "RNO",
    name: "Reno Tahoe International Airport",
    city: "Reno",
  },
  {
    iata: "ROA",
    name: "Roanoke Regional Woodrum Field",
    city: "Roanoke",
  },
  {
    iata: "ROC",
    name: "Greater Rochester International Airport",
    city: "Rochester",
  },
  {
    iata: "ROW",
    name: "Roswell International Air Center Airport",
    city: "Roswell",
  },
  {
    iata: "RQO",
    name: "El Reno Regional Airport",
    city: "El Reno",
  },
  {
    iata: "RST",
    name: "Rochester International Airport",
    city: "Rochester",
  },
  {
    iata: "RSW",
    name: "Southwest Florida International Airport",
    city: "Fort Myers",
  },
  {
    iata: "RUT",
    name: "Rutland - Southern Vermont Regional Airport",
    city: "Rutland",
  },
  {
    iata: "RWI",
    name: "Rocky Mount Wilson Regional Airport",
    city: "Rocky Mount",
  },
  {
    iata: "AHM",
    name: "Ashland Municipal Sumner Parker Field",
    city: "Ashland",
  },
  {
    iata: "SUO",
    name: "Sunriver Airport",
    city: "Sunriver",
  },
  {
    iata: "IDH",
    name: "Idaho County Airport",
    city: "Grangeville",
  },
  {
    iata: "VSK",
    name: "Vista Field",
    city: "Kennewick",
  },
  {
    iata: "SAN",
    name: "San Diego International Airport",
    city: "San Diego",
  },
  {
    iata: "SAT",
    name: "San Antonio International Airport",
    city: "San Antonio",
  },
  {
    iata: "SAV",
    name: "Savannah Hilton Head International Airport",
    city: "Savannah",
  },
  {
    iata: "SBA",
    name: "Santa Barbara Municipal Airport",
    city: "Santa Barbara",
  },
  {
    iata: "SBN",
    name: "South Bend Regional Airport",
    city: "South Bend",
  },
  {
    iata: "SBP",
    name: "San Luis County Regional Airport",
    city: "San Luis Obispo",
  },
  {
    iata: "SBY",
    name: "Salisbury Ocean City Wicomico Regional Airport",
    city: "Salisbury",
  },
  {
    iata: "SDF",
    name: "Louisville International Standiford Field",
    city: "Louisville",
  },
  {
    iata: "SEA",
    name: "Seattle Tacoma International Airport",
    city: "Seattle",
  },
  {
    iata: "SFB",
    name: "Orlando Sanford International Airport",
    city: "Orlando",
  },
  {
    iata: "SFO",
    name: "San Francisco International Airport",
    city: "San Francisco",
  },
  {
    iata: "SGF",
    name: "Springfield Branson National Airport",
    city: "Springfield",
  },
  {
    iata: "SHD",
    name: "Shenandoah Valley Regional Airport",
    city: "Staunton/Waynesboro/Harrisonburg",
  },
  {
    iata: "SHR",
    name: "Sheridan County Airport",
    city: "Sheridan",
  },
  {
    iata: "SHV",
    name: "Shreveport Regional Airport",
    city: "Shreveport",
  },
  {
    iata: "SJC",
    name: "Norman Y. Mineta San Jose International Airport",
    city: "San Jose",
  },
  {
    iata: "SJT",
    name: "San Angelo Regional Mathis Field",
    city: "San Angelo",
  },
  {
    iata: "SLC",
    name: "Salt Lake City International Airport",
    city: "Salt Lake City",
  },
  {
    iata: "SLK",
    name: "Adirondack Regional Airport",
    city: "Saranac Lake",
  },
  {
    iata: "SLN",
    name: "Salina Municipal Airport",
    city: "Salina",
  },
  {
    iata: "SMF",
    name: "Sacramento International Airport",
    city: "Sacramento",
  },
  {
    iata: "SMX",
    name: "Santa Maria Pub/Capt G Allan Hancock Field",
    city: "Santa Maria",
  },
  {
    iata: "SNA",
    name: "John Wayne Airport-Orange County Airport",
    city: "Santa Ana",
  },
  {
    iata: "SPI",
    name: "Abraham Lincoln Capital Airport",
    city: "Springfield",
  },
  {
    iata: "SPS",
    name: "Sheppard Air Force Base-Wichita Falls Municipal Airport",
    city: "Wichita Falls",
  },
  {
    iata: "SRQ",
    name: "Sarasota Bradenton International Airport",
    city: "Sarasota/Bradenton",
  },
  {
    iata: "STC",
    name: "St Cloud Regional Airport",
    city: "St Cloud",
  },
  {
    iata: "STL",
    name: "Lambert St Louis International Airport",
    city: "St Louis",
  },
  {
    iata: "STP",
    name: "St Paul Downtown Holman Field",
    city: "St Paul",
  },
  {
    iata: "SUN",
    name: "Friedman Memorial Airport",
    city: "Hailey",
  },
  {
    iata: "SUX",
    name: "Sioux Gateway Col. Bud Day Field",
    city: "Sioux City",
  },
  {
    iata: "SVC",
    name: "Grant County Airport",
    city: "Silver City",
  },
  {
    iata: "SWF",
    name: "Stewart International Airport",
    city: "Newburgh",
  },
  {
    iata: "SYR",
    name: "Syracuse Hancock International Airport",
    city: "Syracuse",
  },
  {
    iata: "TBN",
    name: "Waynesville-St. Robert Regional Forney field",
    city: "Fort Leonard Wood",
  },
  {
    iata: "TCL",
    name: "Tuscaloosa Regional Airport",
    city: "Tuscaloosa",
  },
  {
    iata: "TLH",
    name: "Tallahassee Regional Airport",
    city: "Tallahassee",
  },
  {
    iata: "OTK",
    name: "Tillamook Airport",
    city: "Tillamook",
  },
  {
    iata: "TOL",
    name: "Toledo Express Airport",
    city: "Toledo",
  },
  {
    iata: "TPA",
    name: "Tampa International Airport",
    city: "Tampa",
  },
  {
    iata: "TPL",
    name: "Draughon Miller Central Texas Regional Airport",
    city: "Temple",
  },
  {
    iata: "TRI",
    name: "Tri Cities Regional Tn Va Airport",
    city: "Bristol/Johnson/Kingsport",
  },
  {
    iata: "TTN",
    name: "Trenton Mercer Airport",
    city: "Trenton",
  },
  {
    iata: "TUL",
    name: "Tulsa International Airport",
    city: "Tulsa",
  },
  {
    iata: "TUP",
    name: "Tupelo Regional Airport",
    city: "Tupelo",
  },
  {
    iata: "TUS",
    name: "Tucson International Airport",
    city: "Tucson",
  },
  {
    iata: "TVC",
    name: "Cherry Capital Airport",
    city: "Traverse City",
  },
  {
    iata: "TVL",
    name: "Lake Tahoe Airport",
    city: "South Lake Tahoe",
  },
  {
    iata: "TWF",
    name: "Joslin Field Magic Valley Regional Airport",
    city: "Twin Falls",
  },
  {
    iata: "TXK",
    name: "Texarkana Regional Webb Field",
    city: "Texarkana",
  },
  {
    iata: "TYR",
    name: "Tyler Pounds Regional Airport",
    city: "Tyler",
  },
  {
    iata: "TYS",
    name: "McGhee Tyson Airport",
    city: "Knoxville",
  },
  {
    iata: "ICS",
    name: "Cascade Airport",
    city: "Cascade",
  },
  {
    iata: "UCA",
    name: "Oneida County Airport",
  },
  {
    iata: "UIN",
    name: "Quincy Regional Baldwin Field",
    city: "Quincy",
  },
  {
    iata: "UIZ",
    name: "Berz-Macomb Airport",
  },
  {
    iata: "SCE",
    name: "University Park Airport",
    city: "State College",
  },
  {
    iata: "VCT",
    name: "Victoria Regional Airport",
    city: "Victoria",
  },
  {
    iata: "VLD",
    name: "Valdosta Regional Airport",
    city: "Valdosta",
  },
  {
    iata: "VPS",
    name: "Eglin Air Force Base",
    city: "Valparaiso",
  },
  {
    iata: "VRB",
    name: "Vero Beach Municipal Airport",
    city: "Vero Beach",
  },
  {
    iata: "WRI",
    name: "Mc Guire Air Force Base",
    city: "Wrightstown",
  },
  {
    iata: "WRL",
    name: "Worland Municipal Airport",
    city: "Worland",
  },
  {
    iata: "KWY",
    name: "Kiwayu Airport",
  },
  {
    iata: "YIP",
    name: "Willow Run Airport",
    city: "Detroit",
  },
  {
    iata: "YKM",
    name: "Yakima Air Terminal McAllister Field",
    city: "Yakima",
  },
  {
    iata: "YNG",
    name: "Youngstown Warren Regional Airport",
    city: "Youngstown/Warren",
  },
  {
    iata: "DZN",
    name: "Dzhezkazgan Airport",
    city: "Zhezkazgan",
  },
  {
    iata: "TDK",
    name: "Taldykorgan Airport",
    city: "Taldy Kurgan",
  },
  {
    iata: "ATX",
    name: "Atbasar Airport",
  },
  {
    iata: "AVX",
    name: "Pebbly Beach Seaplane Base",
    city: "Avalon",
  },
  {
    iata: "LAC",
    name: "Swallow Reef Airstrip",
  },
  {
    iata: "TIA",
    name: "Tirana International Airport Mother Teresa",
    city: "Tirana",
  },
  {
    iata: "BOJ",
    name: "Burgas Airport",
    city: "Burgas",
  },
  {
    iata: "GOZ",
    name: "Gorna Oryahovitsa Airport",
    city: "Gorna Oryahovitsa",
  },
  {
    iata: "PDV",
    name: "Plovdiv International Airport",
    city: "Plovdiv",
  },
  {
    iata: "PVN",
    name: "Dolna Mitropoliya Air Base",
    city: "Dolna Mitropoliya",
  },
  {
    iata: "SOF",
    name: "Sofia Airport",
    city: "Sofia",
  },
  {
    iata: "SLS",
    name: "Silistra Polkovnik Lambrinovo Airfield",
    city: "Silistra",
  },
  {
    iata: "SZR",
    name: "Stara Zagora Airport",
    city: "Stara Zagora",
  },
  {
    iata: "VID",
    name: "Vidin Smurdan Airfield",
    city: "Vidin",
  },
  {
    iata: "VAR",
    name: "Varna Airport",
    city: "Varna",
  },
  {
    iata: "ECN",
    name: "Ercan International Airport",
    city: "Nicosia",
  },
  {
    iata: "LCA",
    name: "Larnaca International Airport",
    city: "Larnarca",
  },
  {
    iata: "LCP",
    name: "Loncopue Airport",
  },
  {
    iata: "PFO",
    name: "Paphos International Airport",
    city: "Paphos",
  },
  {
    iata: "AKT",
    name: "RAF Akrotiri",
    city: "",
  },
  {
    iata: "DBV",
    name: "Dubrovnik Airport",
    city: "Dubrovnik",
  },
  {
    iata: "LSZ",
    name: null,
    city: "Losinj",
  },
  {
    iata: "OSI",
    name: "Osijek Airport",
    city: "Osijek",
  },
  {
    iata: "PUY",
    name: "Pula Airport",
    city: "Pula",
  },
  {
    iata: "RJK",
    name: "Rijeka Airport",
    city: "Rijeka",
  },
  {
    iata: "BWK",
    name: "Bol Airport",
    city: "Brac Island",
  },
  {
    iata: "SPU",
    name: "Split Airport",
    city: "Split",
  },
  {
    iata: "ZAG",
    name: "Zagreb Airport",
    city: "Zagreb",
  },
  {
    iata: "ZAD",
    name: "Zemunik Airport",
    city: "Zadar",
  },
  {
    iata: "ABC",
    name: "Albacete-Los Llanos Airport",
    city: "Albacete",
  },
  {
    iata: "ALC",
    name: "Alicante International Airport",
    city: "Alicante",
  },
  {
    iata: "LEI",
    name: null,
    city: "Almeria",
  },
  {
    iata: "OVD",
    name: "Asturias Airport",
    city: "Ranon",
  },
  {
    iata: "ODB",
    name: null,
    city: "Cordoba",
  },
  {
    iata: "BIO",
    name: "Bilbao Airport",
    city: "Bilbao",
  },
  {
    iata: "RGS",
    name: "Burgos Airport",
    city: "Burgos",
  },
  {
    iata: "BCN",
    name: "Barcelona International Airport",
    city: "Barcelona",
  },
  {
    iata: "BJZ",
    name: "Badajoz Airport",
    city: "Badajoz",
  },
  {
    iata: "CDT",
    name: "Castellon De La Plana Airport",
    city: "Calamocha",
  },
  {
    iata: "LCG",
    name: null,
    city: "Culleredo",
  },
  {
    iata: "GRO",
    name: "Girona Airport",
    city: "Girona",
  },
  {
    iata: "GRX",
    name: "Federico Garcia Lorca Airport",
    city: "Granada",
  },
  {
    iata: "CCX",
    name: "Guadalupe Airport",
    city: "Caceres",
  },
  {
    iata: "IBZ",
    name: "Ibiza Airport",
    city: "Ibiza",
  },
  {
    iata: "XRY",
    name: "Jerez Airport",
    city: "Jerez de la Forntera",
  },
  {
    iata: "MJV",
    name: "San Javier Airport",
    city: "San Javier",
  },
  {
    iata: "QSA",
    name: "Sabadell Airport",
    city: "Sabadell",
  },
  {
    iata: "LEN",
    name: "Leon Airport",
    city: "Leon",
  },
  {
    iata: "RJL",
    name: null,
    city: "Logrono",
  },
  {
    iata: "MAD",
    name: "Madrid Barajas International Airport",
    city: "Madrid",
  },
  {
    iata: "HEV",
    name: null,
    city: "Gibraleon",
  },
  {
    iata: "AGP",
    name: null,
    city: "Malaga",
  },
  {
    iata: "MAH",
    name: "Menorca Airport",
    city: "Menorca Island",
  },
  {
    iata: "OZP",
    name: "Moron Air Base",
    city: "Moron",
  },
  {
    iata: "PMI",
    name: "Palma De Mallorca Airport",
    city: "Palma De Mallorca",
  },
  {
    iata: "PNA",
    name: "Pamplona Airport",
    city: "Pamplona",
  },
  {
    iata: "CQM",
    name: "Ciudad Real Central Airport",
  },
  {
    iata: "REU",
    name: "Reus Air Base",
    city: "Reus",
  },
  {
    iata: "SLM",
    name: "Salamanca Airport",
    city: "Salamanca",
  },
  {
    iata: "EAS",
    name: "San Sebastian Airport",
    city: "Hondarribia",
  },
  {
    iata: "SCQ",
    name: "Santiago de Compostela Airport",
    city: "Santiago de Compostela",
  },
  {
    iata: "LEU",
    name: null,
    city: "Montferrer / Castellbo",
  },
  {
    iata: "TOJ",
    name: null,
    city: "Madrid",
  },
  {
    iata: "VLC",
    name: "Valencia Airport",
    city: "Valencia",
  },
  {
    iata: "VLL",
    name: "Valladolid Airport",
    city: "Valladolid",
  },
  {
    iata: "VIT",
    name: "Vitoria/Foronda Airport",
    city: "Alava",
  },
  {
    iata: "VGO",
    name: "Vigo Airport",
    city: "Vigo",
  },
  {
    iata: "SDR",
    name: "Santander Airport",
    city: "Santander",
  },
  {
    iata: "ZAZ",
    name: "Zaragoza Air Base",
    city: "Zaragoza",
  },
  {
    iata: "SVQ",
    name: "Sevilla Airport",
    city: "Sevilla",
  },
  {
    iata: "DPE",
    name: "St Aubin Airport",
    city: "Dieppe",
  },
  {
    iata: "CQF",
    name: "Calais-Dunkerque Airport",
    city: "Marck",
  },
  {
    iata: "XCP",
    name: null,
    city: "Compiegne",
  },
  {
    iata: "XLN",
    name: "Laon - Chambry Airport",
    city: "Laon-Chambry",
  },
  {
    iata: "XSJ",
    name: null,
    city: "Peronne/Saint-Quentin",
  },
  {
    iata: "XDK",
    name: "Dunkerque les Moeres Airport",
    city: "Les Moeres",
  },
  {
    iata: "BYF",
    name: "Albert-Bray Airport",
    city: "Albert/Bray",
  },
  {
    iata: "LTQ",
    name: null,
    city: "Le Touquet-Paris-Plage",
  },
  {
    iata: "XVS",
    name: "Valenciennes-Denain Airport",
    city: "Valenciennes/Denain",
  },
  {
    iata: "QAM",
    name: "Amiens-Glisy Airport",
    city: "Amiens/Glisy",
  },
  {
    iata: "AGF",
    name: "Agen-La Garenne Airport",
    city: "Agen/La Garenne",
  },
  {
    iata: "BOD",
    name: null,
    city: "Bordeaux/Merignac",
  },
  {
    iata: "EGC",
    name: null,
    city: "Bergerac/Roumaniere",
  },
  {
    iata: "CNG",
    name: null,
    city: "Cognac/Chateaubernard",
  },
  {
    iata: "LRH",
    name: null,
    city: "La Rochelle/Ile de Re",
  },
  {
    iata: "PIS",
    name: "Poitiers-Biard Airport",
    city: "Poitiers/Biard",
  },
  {
    iata: "MCU",
    name: null,
    city: "Montlucon/Gueret",
  },
  {
    iata: "LIG",
    name: "Limoges Airport",
    city: "Limoges/Bellegarde",
  },
  {
    iata: "XMJ",
    name: "Mont-de-Marsan (BA 118) Air Base",
    city: "Mont-de-Marsan",
  },
  {
    iata: "NIT",
    name: null,
    city: "Niort/Souche",
  },
  {
    iata: "TLS",
    name: "Toulouse-Blagnac Airport",
    city: "Toulouse/Blagnac",
  },
  {
    iata: "PUF",
    name: null,
    city: "Pau/Pyrenees (Uzein)",
  },
  {
    iata: "LDE",
    name: null,
    city: "Tarbes/Lourdes/Pyrenees",
  },
  {
    iata: "ANG",
    name: null,
    city: "Angouleme/Brie/Champniers",
  },
  {
    iata: "BVE",
    name: "Brive-La Roche Airport",
    city: "Brive-la-Gaillarde",
  },
  {
    iata: "PGX",
    name: null,
    city: "Perigueux/Bassillac",
  },
  {
    iata: "XDA",
    name: "Dax Seyresse Airport",
    city: "Perigueux",
  },
  {
    iata: "BIQ",
    name: "Biarritz-Anglet-Bayonne Airport",
    city: "Biarritz/Anglet/Bayonne",
  },
  {
    iata: "XCX",
    name: null,
    city: "Biarritz",
  },
  {
    iata: "ZAO",
    name: "Cahors-Lalbenque Airport",
    city: "Cahors/Lalbenque",
  },
  {
    iata: "XGT",
    name: null,
    city: "Cahors",
  },
  {
    iata: "XAC",
    name: "Arcachon-La Teste-de-Buch Airport",
    city: "Arcachon/La Teste-de-Buch",
  },
  {
    iata: "LBI",
    name: null,
    city: "Albi/Le Sequestre",
  },
  {
    iata: "DCM",
    name: "Castres-Mazamet Airport",
    city: "Castres/Mazamet",
  },
  {
    iata: "RDZ",
    name: "Rodez-Marcillac Airport",
    city: "Rodez/Marcillac",
  },
  {
    iata: "RYN",
    name: null,
    city: "Royan/Medis",
  },
  {
    iata: "XMW",
    name: "Montauban Airport",
    city: "Montauban",
  },
  {
    iata: "XLR",
    name: "Libourne-Artigues-de-Lussac Airport",
    city: "Libourne/Artigues-de-Lussac",
  },
  {
    iata: "RCO",
    name: "Rochefort-Saint-Agnant (BA 721) Airport",
    city: "Rochefort/Saint-Agnant",
  },
  {
    iata: "XSL",
    name: "Sarlat Domme Airport",
    city: "Rochefort",
  },
  {
    iata: "XTB",
    name: null,
    city: "Rochefort",
  },
  {
    iata: "IDY",
    name: null,
    city: "Ile d'Yeu",
  },
  {
    iata: "CMR",
    name: "Colmar-Houssen Airport",
    city: "Colmar/Houssen",
  },
  {
    iata: "XBV",
    name: "Beaune-Challanges Airport",
    city: "Beaune/Challanges",
  },
  {
    iata: "DLE",
    name: "Dole-Tavaux Airport",
    city: "Dole/Tavaux",
  },
  {
    iata: "XVN",
    name: "Verdun-Le Rozelier Airport",
    city: "Verdun/Le Rozelier",
  },
  {
    iata: "MVV",
    name: null,
    city: "Verdun",
  },
  {
    iata: "OBS",
    name: null,
    city: "Aubenas/Ardeche Meridional",
  },
  {
    iata: "LPY",
    name: "Le Puy-Loudes Airport",
    city: "Le Puy/Loudes",
  },
  {
    iata: "AHZ",
    name: "L'alpe D'huez Airport",
    city: "Bourg",
  },
  {
    iata: "ETZ",
    name: "Metz-Nancy-Lorraine Airport",
    city: "Metz / Nancy",
  },
  {
    iata: "ANE",
    name: "Angers-Loire Airport",
    city: "Angers/Marce",
  },
  {
    iata: "BIA",
    name: "Bastia-Poretta Airport",
    city: "Bastia/Poretta",
  },
  {
    iata: "CLY",
    name: "Calvi-Sainte-Catherine Airport",
    city: "Calvi/Sainte-Catherine",
  },
  {
    iata: "FSC",
    name: "Figari Sud-Corse Airport",
    city: "Figari Sud-Corse",
  },
  {
    iata: "AJA",
    name: null,
    city: "Ajaccio/Napoleon Bonaparte",
  },
  {
    iata: "PRP",
    name: "Propriano Airport",
    city: "Propriano",
  },
  {
    iata: "SOZ",
    name: "Solenzara (BA 126) Air Base",
    city: "Solenzara",
  },
  {
    iata: "MFX",
    name: null,
    city: "Ajaccio",
  },
  {
    iata: "AUF",
    name: "Auxerre-Branches Airport",
    city: "Auxerre/Branches",
  },
  {
    iata: "CMF",
    name: null,
    city: "Chambery/Aix-les-Bains",
  },
  {
    iata: "CFE",
    name: "Clermont-Ferrand Auvergne Airport",
    city: "Clermont-Ferrand/Auvergne",
  },
  {
    iata: "BOU",
    name: "Bourges Airport",
    city: "Bourges",
  },
  {
    iata: "QNJ",
    name: "Annemasse Airport",
    city: "Annemasse",
  },
  {
    iata: "CVF",
    name: "Courchevel Airport",
    city: "Courcheval",
  },
  {
    iata: "LYS",
    name: null,
    city: "Lyon",
  },
  {
    iata: "QNX",
    name: null,
    city: "Macon/Charnay",
  },
  {
    iata: "SYT",
    name: "Saint-Yan Airport",
    city: "Saint-Yan",
  },
  {
    iata: "RNE",
    name: "Roanne-Renaison Airport",
    city: "Roanne/Renaison",
  },
  {
    iata: "NCY",
    name: "Annecy-Haute-Savoie-Mont Blanc Airport",
    city: "Annecy/Meythet",
  },
  {
    iata: "XMK",
    name: null,
    city: "Annecy",
  },
  {
    iata: "GNB",
    name: null,
    city: "Grenoble/Saint-Geoirs",
  },
  {
    iata: "MCU",
    name: null,
    city: "Montlucon/Gueret",
  },
  {
    iata: "VAF",
    name: "Valence-Chabeuil Airport",
    city: "Valence/Chabeuil",
  },
  {
    iata: "VHY",
    name: "Vichy-Charmeil Airport",
    city: "Vichy/Charmeil",
  },
  {
    iata: "AUR",
    name: "Aurillac Airport",
    city: "Aurillac",
  },
  {
    iata: "CHR",
    name: null,
    city: "Chateauroux/Deols",
  },
  {
    iata: "LYN",
    name: "Lyon-Bron Airport",
    city: "Lyon/Bron",
  },
  {
    iata: "CEQ",
    name: "Cannes-Mandelieu Airport",
    city: "Cannes/Mandelieu",
  },
  {
    iata: "EBU",
    name: null,
    city: "Saint-Etienne/Boutheon",
  },
  {
    iata: "QIE",
    name: null,
    city: "Istres/Le Tube",
  },
  {
    iata: "CCF",
    name: "Carcassonne Airport",
    city: "Carcassonne/Salvaza",
  },
  {
    iata: "MRS",
    name: "Marseille Provence Airport",
    city: "Marseille",
  },
  {
    iata: "NCE",
    name: null,
    city: "Nice",
  },
  {
    iata: "XOG",
    name: "Orange-Caritat (BA 115) Air Base",
    city: "Orange/Caritat",
  },
  {
    iata: "PGF",
    name: null,
    city: "Perpignan/Rivesaltes",
  },
  {
    iata: "CTT",
    name: "Le Castellet Airport",
    city: "Le Castellet",
  },
  {
    iata: "BAE",
    name: "Barcelonnette - Saint-Pons Airport",
    city: "Le Castellet",
  },
  {
    iata: "XAS",
    name: null,
    city: "Ales/Deaux",
  },
  {
    iata: "MPL",
    name: null,
    city: "Montpellier/Mediterranee",
  },
  {
    iata: "BZR",
    name: null,
    city: "Beziers/Vias",
  },
  {
    iata: "AVN",
    name: "Avignon-Caumont Airport",
    city: "Avignon/Caumont",
  },
  {
    iata: "GAT",
    name: "Gap - Tallard Airport",
    city: "Avignon",
  },
  {
    iata: "MEN",
    name: "Mende-Brenoux Airport",
    city: "Mende/Brenoux",
  },
  {
    iata: "SCP",
    name: null,
    city: "Mende",
  },
  {
    iata: "BVA",
    name: null,
    city: "Beauvais/Tille",
  },
  {
    iata: "XSU",
    name: "Saumur-Saint-Florent Airport",
    city: "Saumur/Saint-Florent",
  },
  {
    iata: "EVX",
    name: null,
    city: "Evreux/Fauville",
  },
  {
    iata: "XAN",
    name: null,
    city: "Evreux",
  },
  {
    iata: "LEH",
    name: "Le Havre Octeville Airport",
    city: "Le Havre/Octeville",
  },
  {
    iata: "XAB",
    name: "Abbeville-Buigny-Saint-Maclou Airport",
    city: "Abbeville (Buigny/Saint-Maclou)",
  },
  {
    iata: "ORE",
    name: null,
    city: "Orleans/Bricy",
  },
  {
    iata: "XCR",
    name: null,
    city: "Chalons/Vatry",
  },
  {
    iata: "LSO",
    name: "Les Sables-d'Olonne Talmont Airport",
    city: "Les Sables-d'Olonne",
  },
  {
    iata: "URO",
    name: "Rouen Airport",
    city: "Rouen/Vallee de Seine",
  },
  {
    iata: "XBQ",
    name: "Blois-Le Breuil Airport",
    city: "Blois/Le Breuil",
  },
  {
    iata: "QTJ",
    name: "Chartres Champhol Airport",
    city: "Blois",
  },
  {
    iata: "TUF",
    name: "Tours-Val-de-Loire Airport",
    city: "Tours/Val de Loire (Loire Valley)",
  },
  {
    iata: "CET",
    name: "Cholet Le Pontreau Airport",
    city: "Cholet/Le Pontreau",
  },
  {
    iata: "LVA",
    name: "Laval-Entrammes Airport",
    city: "Laval/Entrammes",
  },
  {
    iata: "LBG",
    name: "Paris-Le Bourget Airport",
    city: "Paris",
  },
  {
    iata: "CSF",
    name: "Creil Air Base",
    city: "Creil",
  },
  {
    iata: "CDG",
    name: "Charles de Gaulle International Airport",
    city: "Paris",
  },
  {
    iata: "JDP",
    name: "Paris Issy-les-Moulineaux Heliport",
  },
  {
    iata: "TNF",
    name: "Toussus-le-Noble Airport",
    city: "Toussus-le-Noble",
  },
  {
    iata: "ORY",
    name: "Paris-Orly Airport",
    city: "Paris",
  },
  {
    iata: "POX",
    name: "Pontoise - Cormeilles-en-Vexin Airport",
    city: "Pontoise",
  },
  {
    iata: "VIY",
    name: null,
    city: "Villacoublay/Velizy",
  },
  {
    iata: "QYR",
    name: "Troyes-Barberey Airport",
    city: "Troyes/Barberey",
  },
  {
    iata: "NVS",
    name: "Nevers-Fourchambault Airport",
    city: "Nevers/Fourchambault",
  },
  {
    iata: "XCB",
    name: null,
    city: "Cambrai/Epinoy",
  },
  {
    iata: "XME",
    name: null,
    city: "Maubeuge/Elesmes",
  },
  {
    iata: "LIL",
    name: "Lille-Lesquin Airport",
    city: "Lille/Lesquin",
  },
  {
    iata: "HZB",
    name: "Merville-Calonne Airport",
    city: "Merville/Calonne",
  },
  {
    iata: "XCZ",
    name: null,
    city: "Charleville-Mezieres",
  },
  {
    iata: "XVO",
    name: "Vesoul-Frotey Airport",
    city: "Vesoul/Frotey",
  },
  {
    iata: "BES",
    name: "Brest Bretagne Airport",
    city: "Brest/Guipavas",
  },
  {
    iata: "CER",
    name: "Cherbourg-Maupertus Airport",
    city: "Cherbourg/Maupertus",
  },
  {
    iata: "DNR",
    name: "Dinard-Pleurtuit-Saint-Malo Airport",
    city: "Dinard/Pleurtuit/Saint-Malo",
  },
  {
    iata: "LBY",
    name: "La Baule-Escoublac Airport",
    city: "La Baule-Escoublac",
  },
  {
    iata: "GFR",
    name: "Granville Airport",
    city: "Granville",
  },
  {
    iata: "DOL",
    name: "Deauville-Saint-Gatien Airport",
    city: "Deauville",
  },
  {
    iata: "LRT",
    name: "Lorient South Brittany (Bretagne Sud) Airport",
    city: "Lorient/Lann/Bihoue",
  },
  {
    iata: "EDM",
    name: "La Roche-sur-Yon Airport",
    city: "La Roche-sur-Yon/Les Ajoncs",
  },
  {
    iata: "LDV",
    name: "Landivisiau Air Base",
    city: "Landivisiau",
  },
  {
    iata: "CFR",
    name: "Caen-Carpiquet Airport",
    city: "Caen/Carpiquet",
  },
  {
    iata: "LME",
    name: "Le Mans-Arnage Airport",
    city: "Le Mans/Arnage",
  },
  {
    iata: "RNS",
    name: "Rennes-Saint-Jacques Airport",
    city: "Rennes/Saint-Jacques",
  },
  {
    iata: "LAI",
    name: null,
    city: "Lannion",
  },
  {
    iata: "UIP",
    name: "Quimper-Cornouaille Airport",
    city: "Quimper/Pluguffan",
  },
  {
    iata: "NTE",
    name: "Nantes Atlantique Airport",
    city: "Nantes",
  },
  {
    iata: "SBK",
    name: "Saint-Brieuc-Armor Airport",
    city: "Saint-Brieuc/Armor",
  },
  {
    iata: "MXN",
    name: "Morlaix-Ploujean Airport",
    city: "Morlaix/Ploujean",
  },
  {
    iata: "VNE",
    name: "Vannes-Meucon Airport",
    city: "Vannes/Meucon",
  },
  {
    iata: "SNR",
    name: "Saint-Nazaire-Montoir Airport",
    city: "Saint-Nazaire/Montoir",
  },
  {
    iata: "QBQ",
    name: null,
    city: "St Nazaire",
  },
  {
    iata: "BSL",
    name: "EuroAirport Basel-Mulhouse-Freiburg Airport",
    city: "Bale/Mulhouse",
  },
  {
    iata: "DIJ",
    name: "Dijon-Bourgogne Airport",
    city: "Dijon/Longvic",
  },
  {
    iata: "MZM",
    name: "Metz-Frescaty (BA 128) Air Base",
    city: "Metz/Frescaty",
  },
  {
    iata: "EPL",
    name: null,
    city: "Epinal/Mirecourt",
  },
  {
    iata: "XMF",
    name: null,
    city: "Montbeliard/Courcelles",
  },
  {
    iata: "ENC",
    name: "Nancy-Essey Airport",
    city: "Nancy/Essey",
  },
  {
    iata: "BOR",
    name: "Fontaine Airport",
    city: "Belfort",
  },
  {
    iata: "RHE",
    name: "Reims-Champagne (BA 112) Airport",
    city: "Reims/Champagne",
  },
  {
    iata: "SXB",
    name: "Strasbourg Airport",
    city: "Strasbourg",
  },
  {
    iata: "VTL",
    name: "Vittel Champ De Course Airport",
    city: "Luxeuil",
  },
  {
    iata: "XHE",
    name: null,
  },
  {
    iata: "FNI",
    name: null,
    city: "Nimes/Garons",
  },
  {
    iata: "LTT",
    name: null,
    city: "La Mole",
  },
  {
    iata: "MQC",
    name: "Miquelon Airport",
    city: "Miquelon",
  },
  {
    iata: "FSP",
    name: "St Pierre Airport",
    city: "Saint-Pierre",
  },
  {
    iata: "PYR",
    name: "Andravida Airport",
    city: "Andravida",
  },
  {
    iata: "AGQ",
    name: "Agrinion Airport",
    city: "Agrinion",
  },
  {
    iata: "AXD",
    name: "Dimokritos Airport",
    city: "Alexandroupolis",
  },
  {
    iata: "HEW",
    name: "Athen Helenikon Airport",
    city: "Athens",
  },
  {
    iata: "ATH",
    name: "Eleftherios Venizelos International Airport",
    city: "Athens",
  },
  {
    iata: "VOL",
    name: "Nea Anchialos Airport",
    city: "Nea Anchialos",
  },
  {
    iata: "JKH",
    name: "Chios Island National Airport",
    city: "Chios Island",
  },
  {
    iata: "PKH",
    name: "Porto Cheli Airport",
    city: "Porto Cheli",
  },
  {
    iata: "JIK",
    name: "Ikaria Airport",
    city: "Ikaria Island",
  },
  {
    iata: "IOA",
    name: "Ioannina Airport",
    city: "Ioannina",
  },
  {
    iata: "HER",
    name: "Heraklion International Nikos Kazantzakis Airport",
    city: "Heraklion",
  },
  {
    iata: "KSO",
    name: "Kastoria National Airport",
    city: "Kastoria",
  },
  {
    iata: "KIT",
    name: "Kithira Airport",
    city: "Kithira Island",
  },
  {
    iata: "EFL",
    name: "Kefallinia Airport",
    city: "Kefallinia Island",
  },
  {
    iata: "KZS",
    name: "Kastelorizo Airport",
    city: "Kastelorizo Island",
  },
  {
    iata: "KLX",
    name: "Kalamata Airport",
    city: "Kalamata",
  },
  {
    iata: "KGS",
    name: "Kos Airport",
    city: "Kos Island",
  },
  {
    iata: "AOK",
    name: "Karpathos Airport",
    city: "Karpathos Island",
  },
  {
    iata: "CFU",
    name: "Ioannis Kapodistrias International Airport",
    city: "Kerkyra Island",
  },
  {
    iata: "KSJ",
    name: "Kasos Airport",
    city: "Kasos Island",
  },
  {
    iata: "KVA",
    name: "Alexander the Great International Airport",
    city: "Kavala",
  },
  {
    iata: "KZI",
    name: "Filippos Airport",
    city: "Kozani",
  },
  {
    iata: "LRS",
    name: "Leros Airport",
    city: "Leros Island",
  },
  {
    iata: "LXS",
    name: "Limnos Airport",
    city: "Limnos Island",
  },
  {
    iata: "LRA",
    name: "Larisa Airport",
    city: "Larisa",
  },
  {
    iata: "JMK",
    name: "Mikonos Airport",
    city: "Mykonos Island",
  },
  {
    iata: "MLO",
    name: "Milos Airport",
    city: "Milos Island",
  },
  {
    iata: "MJT",
    name: "Mytilene International Airport",
    city: "Mytilene",
  },
  {
    iata: "JNX",
    name: "Naxos Airport",
    city: "Naxos Island",
  },
  {
    iata: "PAS",
    name: "Paros Airport",
    city: "Paros Island",
  },
  {
    iata: "JTY",
    name: "Astypalaia Airport",
    city: "Astypalaia Island",
  },
  {
    iata: "PVK",
    name: "Aktion National Airport",
    city: "Preveza/Lefkada",
  },
  {
    iata: "RHO",
    name: "Diagoras Airport",
    city: "Rodes Island",
  },
  {
    iata: "GPA",
    name: "Araxos Airport",
    city: "Patras",
  },
  {
    iata: "CHQ",
    name: "Chania International Airport",
    city: "Souda",
  },
  {
    iata: "JSI",
    name: "Skiathos Island National Airport",
    city: "Skiathos",
  },
  {
    iata: "SMI",
    name: "Samos Airport",
    city: "Samos Island",
  },
  {
    iata: "JSY",
    name: "Syros Airport",
    city: "Syros Island",
  },
  {
    iata: "SPJ",
    name: "Sparti Airport",
    city: "Sparti",
  },
  {
    iata: "JTR",
    name: "Santorini Airport",
    city: "Santorini Island",
  },
  {
    iata: "JSH",
    name: "Sitia Airport",
    city: "Crete Island",
  },
  {
    iata: "SKU",
    name: "Skiros Airport",
    city: "Skiros Island",
  },
  {
    iata: "SKG",
    name: "Thessaloniki Macedonia International Airport",
    city: "Thessaloniki",
  },
  {
    iata: "ZTH",
    name: "Dionysios Solomos Airport",
    city: "Zakynthos Island",
  },
  {
    iata: "BUD",
    name: "Budapest Listz Ferenc international Airport",
    city: "Budapest",
  },
  {
    iata: "DEB",
    name: "Debrecen International Airport",
    city: "Debrecen",
  },
  {
    iata: "MCQ",
    name: "Miskolc Airport",
    city: "Miskolc",
  },
  {
    iata: "PEV",
    name: null,
    city: "Pecs-Pogany",
  },
  {
    iata: "QGY",
    name: null,
    city: "Gyor",
  },
  {
    iata: "SOB",
    name: null,
    city: "Sarmellek",
  },
  {
    iata: "TZR",
    name: null,
    city: "Taszar",
  },
  {
    iata: "QZD",
    name: "Szeged Glider Airport",
    city: "Szeged",
  },
  {
    iata: "CRV",
    name: "Crotone Airport",
    city: "Crotone",
  },
  {
    iata: "BRI",
    name: "Bari / Palese International Airport",
    city: "Bari",
  },
  {
    iata: "FOG",
    name: "Foggia / Gino Lisa Airport",
    city: "Foggia",
  },
  {
    iata: "TAR",
    name: "Taranto / Grottaglie Airport",
    city: "Grottaglie",
  },
  {
    iata: "LCC",
    name: "Lecce Airport",
    city: "",
  },
  {
    iata: "PSR",
    name: "Pescara International Airport",
    city: "Pescara",
  },
  {
    iata: "BDS",
    name: "Brindisi / Casale Airport",
    city: "Brindisi",
  },
  {
    iata: "SUF",
    name: "Lamezia Terme Airport",
    city: "Lamezia Terme",
  },
  {
    iata: "CIY",
    name: 'Comiso Airport ""Vincenzo Magliocco""',
    city: "Comiso",
  },
  {
    iata: "CTA",
    name: "Catania / Fontanarossa Airport",
    city: "Catania",
  },
  {
    iata: "LMP",
    name: "Lampedusa Airport",
    city: "Lampedusa",
  },
  {
    iata: "PNL",
    name: "Pantelleria Airport",
    city: "Pantelleria",
  },
  {
    iata: "PMO",
    name: "Palermo / Punta Raisi Airport",
    city: "Palermo",
  },
  {
    iata: "REG",
    name: "Reggio Calabria Airport",
    city: "Reggio Calabria",
  },
  {
    iata: "TPS",
    name: "Trapani / Birgi Airport",
    city: "Trapani",
  },
  {
    iata: "NSY",
    name: "Sigonella Airport",
    city: "",
  },
  {
    iata: "BLX",
    name: "Belluno Airport",
    city: "Belluno",
  },
  {
    iata: "RAN",
    name: "Ravenna Airport",
    city: "Ravenna",
  },
  {
    iata: "ZIA",
    name: "Trento / Mattarello Airport",
    city: "Trento",
  },
  {
    iata: "AHO",
    name: "Alghero / Fertilia Airport",
    city: "Alghero",
  },
  {
    iata: "DCI",
    name: "Decimomannu Airport",
    city: "Decimomannu",
  },
  {
    iata: "CAG",
    name: "Cagliari / Elmas Airport",
    city: "Cagliari",
  },
  {
    iata: "OLB",
    name: "Olbia / Costa Smeralda Airport",
    city: "Olbia",
  },
  {
    iata: "TTB",
    name: "Tortoli' / Arbatax Airport",
    city: "Arbatax",
  },
  {
    iata: "QVA",
    name: "Varese / Venegono Airport",
    city: "Varese",
  },
  {
    iata: "QMM",
    name: "Massa Cinquale Airport",
    city: "Marina Di Massa",
  },
  {
    iata: "MXP",
    name: "Malpensa International Airport",
    city: "Milan",
  },
  {
    iata: "BGY",
    name: "Bergamo / Orio Al Serio Airport",
    city: "Bergamo",
  },
  {
    iata: "TRN",
    name: "Torino / Caselle International Airport",
    city: "Torino",
  },
  {
    iata: "ALL",
    name: "Villanova D'Albenga International Airport",
    city: "Albenga",
  },
  {
    iata: "GOA",
    name: "Genova / Sestri Cristoforo Colombo Airport",
    city: "Genova",
  },
  {
    iata: "LIN",
    name: "Linate Airport",
    city: "Milan",
  },
  {
    iata: "PMF",
    name: "Parma Airport",
    city: "Parma",
  },
  {
    iata: "QPZ",
    name: "Piacenza Airport",
    city: "Piacenza",
  },
  {
    iata: "AOT",
    name: "Aosta Airport",
    city: "Aosta",
  },
  {
    iata: "CUF",
    name: "Cuneo / Levaldigi Airport",
    city: "Cuneo",
  },
  {
    iata: "AVB",
    name: "Aviano Air Base",
    city: "Aviano",
  },
  {
    iata: "BZO",
    name: "Bolzano Airport",
    city: "Bolzano",
  },
  {
    iata: "UDN",
    name: "Udine / Campoformido Air Base",
    city: "Udine",
  },
  {
    iata: "BLQ",
    name: "Bologna / Borgo Panigale Airport",
    city: "Bologna",
  },
  {
    iata: "TSF",
    name: "Treviso / Sant'Angelo Airport",
    city: "Treviso",
  },
  {
    iata: "FRL",
    name: null,
    city: "Forli",
  },
  {
    iata: "VBS",
    name: "Brescia / Montichiari Airport",
    city: "Brescia",
  },
  {
    iata: "TRS",
    name: "Trieste / Ronchi Dei Legionari",
    city: "Trieste",
  },
  {
    iata: "RMI",
    name: "Rimini / Miramare - Federico Fellini International Airport",
    city: "Rimini",
  },
  {
    iata: "VIC",
    name: "Vicenza Airport",
    city: "Vicenza",
  },
  {
    iata: "QPA",
    name: "Padova Airport",
    city: "Padova",
  },
  {
    iata: "VRN",
    name: "Verona / Villafranca Airport",
    city: "Verona",
  },
  {
    iata: "AOI",
    name: "Ancona / Falconara Airport",
    city: "Ancona",
  },
  {
    iata: "VCE",
    name: "Venezia / Tessera -  Marco Polo Airport",
    city: "Venezia",
  },
  {
    iata: "QZO",
    name: "Arezzo Airport",
    city: "Arezzo",
  },
  {
    iata: "LCV",
    name: "Lucca / Tassignano Airport",
    city: "Lucca",
  },
  {
    iata: "QRT",
    name: "Rieti Airport",
    city: "Rieti",
  },
  {
    iata: "SAY",
    name: "Siena / Ampugnano Airport",
    city: "Siena",
  },
  {
    iata: "CIA",
    name: "Ciampino Airport",
    city: "Roma",
  },
  {
    iata: "FCO",
    name: "Leonardo Da Vinci (Fiumicino) International Airport",
    city: "Rome",
  },
  {
    iata: "QFR",
    name: "Frosinone Military Airport",
    city: "Frosinone",
  },
  {
    iata: "QSR",
    name: "Salerno / Pontecagnano Airport",
    city: "Salerno",
  },
  {
    iata: "EBA",
    name: "Marina Di Campo Airport",
    city: "Marina  Di Campo",
  },
  {
    iata: "QLT",
    name: "Latina Airport",
    city: "Latina",
  },
  {
    iata: "NAP",
    name: null,
    city: "Napoli",
  },
  {
    iata: "PSA",
    name: "Pisa / San Giusto - Galileo Galilei International Airport",
    city: "Pisa",
  },
  {
    iata: "FLR",
    name: "Firenze / Peretola Airport",
    city: "Firenze",
  },
  {
    iata: "GRS",
    name: "Grosseto Airport",
    city: "Grosetto",
  },
  {
    iata: "PEG",
    name: "Perugia / San Egidio Airport",
    city: "Perugia",
  },
  {
    iata: "LJU",
    name: null,
    city: "Ljubljana",
  },
  {
    iata: "MBX",
    name: "Maribor Airport",
    city: "",
  },
  {
    iata: "POW",
    name: "Portoroz Airport",
    city: "Portoroz",
  },
  {
    iata: "GTW",
    name: null,
    city: "Holesov",
  },
  {
    iata: "UHE",
    name: "Kunovice Airport",
    city: "Uherske Hradiste",
  },
  {
    iata: "KLV",
    name: "Karlovy Vary International Airport",
    city: "Karlovy Vary",
  },
  {
    iata: "MKA",
    name: null,
    city: "Marianske Lazne",
  },
  {
    iata: "OSR",
    name: null,
    city: "Ostrava",
  },
  {
    iata: "PED",
    name: "Pardubice Airport",
    city: "Pardubice",
  },
  {
    iata: "PRV",
    name: "P?erov Air Base",
    city: "Prerov",
  },
  {
    iata: "PRG",
    name: "Ruzyn? International Airport",
    city: "Prague",
  },
  {
    iata: "BRQ",
    name: "Brno-Tu?any Airport",
    city: "Brno",
  },
  {
    iata: "ZBE",
    name: "Zabreh Ostrava Airport",
    city: "Zabreh",
  },
  {
    iata: "GHK",
    name: "Gush Katif Airport",
  },
  {
    iata: "TLV",
    name: "Ben Gurion International Airport",
    city: "Tel Aviv",
  },
  {
    iata: "BEV",
    name: "Be'er Sheva (Teyman) Airport",
    city: "Beersheva",
  },
  {
    iata: "ETH",
    name: "Eilat Airport",
    city: "Eilat",
  },
  {
    iata: "EIY",
    name: "Ein Yahav Airfield",
    city: "Sapir",
  },
  {
    iata: "HFA",
    name: "Haifa International Airport",
    city: "Haifa",
  },
  {
    iata: "RPN",
    name: "Ben Ya'akov Airport",
    city: "Rosh Pina",
  },
  {
    iata: "JRS",
    name: "Atarot Airport",
  },
  {
    iata: "KSW",
    name: "Kiryat Shmona Airport",
    city: "Kiryat Shmona",
  },
  {
    iata: "MTZ",
    name: "Bar Yehuda Airfield",
    city: "Masada",
  },
  {
    iata: "VTM",
    name: "Nevatim Air Base",
    city: "Beersheba",
  },
  {
    iata: "VDA",
    name: "Ovda International Airport",
    city: "Eilat",
  },
  {
    iata: "MIP",
    name: "Ramon Air Base",
    city: "Mitzpe Ramon",
  },
  {
    iata: "SDV",
    name: "Sde Dov Airport",
    city: "Tel Aviv",
  },
  {
    iata: "YOT",
    name: "Yotvata Airfield",
    city: "Yotvata",
  },
  {
    iata: "GZM",
    name: "Xewkija Heliport",
  },
  {
    iata: "MLA",
    name: "Luqa Airport",
    city: "Luqa",
  },
  {
    iata: "HOH",
    name: "Hohenems-Dornbirn Airport",
    city: "Hohenems / Dornbirn",
  },
  {
    iata: "LOR",
    name: "Lowe AHP (Fort Rucker) Heliport",
  },
  {
    iata: "GRZ",
    name: "Graz Airport",
    city: "Graz",
  },
  {
    iata: "INN",
    name: "Innsbruck Airport",
    city: "Innsbruck",
  },
  {
    iata: "KLU",
    name: "Klagenfurt Airport",
    city: "Klagenfurt am Worthersee",
  },
  {
    iata: "LNZ",
    name: "Linz Airport",
    city: "Linz",
  },
  {
    iata: "SZG",
    name: "Salzburg Airport",
    city: "Salzburg",
  },
  {
    iata: "VIE",
    name: "Vienna International Airport",
    city: "Vienna",
  },
  {
    iata: "SMA",
    name: "Santa Maria Airport",
    city: "Vila do Porto",
  },
  {
    iata: "BGC",
    name: "Braganca Airport",
    city: "",
  },
  {
    iata: "BYJ",
    name: "Beja International Airport",
    city: "Beja",
  },
  {
    iata: "BGZ",
    name: "Braga Municipal Aerodrome",
    city: "Braga",
  },
  {
    iata: "CHV",
    name: "Chaves Airport",
    city: "Chaves",
  },
  {
    iata: "CBP",
    name: "Coimbra Airport",
    city: "",
  },
  {
    iata: "CVU",
    name: "Corvo Airport",
    city: "Corvo",
  },
  {
    iata: "COV",
    name: "Covilha Airport",
    city: "",
  },
  {
    iata: "FLW",
    name: "Flores Airport",
    city: "Santa Cruz das Flores",
  },
  {
    iata: "FAO",
    name: "Faro Airport",
    city: "Faro",
  },
  {
    iata: "GRW",
    name: "Graciosa Airport",
    city: "Santa Cruz da Graciosa",
  },
  {
    iata: "HOR",
    name: "Horta Airport",
    city: "Horta",
  },
  {
    iata: "TER",
    name: "Lajes Field",
    city: "Lajes",
  },
  {
    iata: "FNC",
    name: "Madeira Airport",
    city: "Funchal",
  },
  {
    iata: "PAF",
    name: "Montijo Airport",
    city: "",
  },
  {
    iata: "PDL",
    name: null,
    city: "Ponta Delgada",
  },
  {
    iata: "PIX",
    name: "Pico Airport",
    city: "Pico Island",
  },
  {
    iata: "PRM",
    name: "Portimao Airport",
    city: "",
  },
  {
    iata: "OPO",
    name: null,
    city: "Porto",
  },
  {
    iata: "PXO",
    name: "Porto Santo Airport",
    city: "Vila Baleira",
  },
  {
    iata: "LIS",
    name: "Lisbon Portela Airport",
    city: "Lisbon",
  },
  {
    iata: "SIE",
    name: "Sines Airport",
    city: "",
  },
  {
    iata: "SJZ",
    name: null,
    city: "Velas",
  },
  {
    iata: "VRL",
    name: "Vila Real Airport",
    city: "",
  },
  {
    iata: "VSE",
    name: "Viseu Airport",
    city: "",
  },
  {
    iata: "BNX",
    name: "Banja Luka International Airport",
    city: "Banja Luka",
  },
  {
    iata: "OMO",
    name: "Mostar International Airport",
    city: "Mostar",
  },
  {
    iata: "SJJ",
    name: "Sarajevo International Airport",
    city: "Sarajevo",
  },
  {
    iata: "TZL",
    name: "Tuzla International Airport",
    city: "Tuzla",
  },
  {
    iata: "ARW",
    name: "Arad International Airport",
    city: "Arad",
  },
  {
    iata: "BCM",
    name: "Bac?u Airport",
    city: "Bacau",
  },
  {
    iata: "BAY",
    name: "Tautii Magheraus Airport",
    city: "Baia Mare",
  },
  {
    iata: "BBU",
    name: "B?neasa International Airport",
    city: "Bucharest",
  },
  {
    iata: "CND",
    name: "Mihail Kog?lniceanu International Airport",
    city: "Constanta",
  },
  {
    iata: "CLJ",
    name: "Cluj-Napoca International Airport",
    city: "Cluj-Napoca",
  },
  {
    iata: "CSB",
    name: "Caransebe? Airport",
    city: "Caransebes",
  },
  {
    iata: "CRA",
    name: "Craiova Airport",
    city: "Craiova",
  },
  {
    iata: "IAS",
    name: "Ia?i Airport",
    city: "Iasi",
  },
  {
    iata: "LRO",
    name: "Sharpe AAF",
  },
  {
    iata: "OMR",
    name: "Oradea International Airport",
    city: "Oradea",
  },
  {
    iata: "OTP",
    name: "Henri Coand? International Airport",
    city: "Bucharest",
  },
  {
    iata: "SBZ",
    name: "Sibiu International Airport",
    city: "Sibiu",
  },
  {
    iata: "SUJ",
    name: "Satu Mare Airport",
    city: "Satu Mare",
  },
  {
    iata: "SCV",
    name: "Suceava Stefan cel Mare Airport",
    city: "Suceava",
  },
  {
    iata: "TCE",
    name: "Tulcea Airport",
    city: "Tulcea",
  },
  {
    iata: "TGM",
    name: null,
    city: "Targu Mures",
  },
  {
    iata: "TSR",
    name: "Timi?oara Traian Vuia Airport",
    city: "Timisoara",
  },
  {
    iata: "GVA",
    name: "Geneva Cointrin International Airport",
    city: "Geneva",
  },
  {
    iata: "QNC",
    name: "Neuchatel Airport",
    city: "",
  },
  {
    iata: "SIR",
    name: "Sion Airport",
    city: "Sion",
  },
  {
    iata: "ZIN",
    name: "Interlaken Air Base",
    city: "",
  },
  {
    iata: "LUG",
    name: "Lugano Airport",
    city: "Lugano",
  },
  {
    iata: "BRN",
    name: "Bern Belp Airport",
    city: "Bern",
  },
  {
    iata: "BXO",
    name: "Buochs Airport",
    city: "Buochs",
  },
  {
    iata: "ACO",
    name: "Ascona Airport",
  },
  {
    iata: "ZHI",
    name: "Grenchen Airport",
    city: "",
  },
  {
    iata: "ZRH",
    name: null,
    city: "Zurich",
  },
  {
    iata: "ZJI",
    name: "Locarno Airport",
    city: "",
  },
  {
    iata: "ACH",
    name: "St Gallen Altenrhein Airport",
    city: "Altenrhein",
  },
  {
    iata: "SMV",
    name: "Samedan Airport",
    city: "",
  },
  {
    iata: "GKD",
    name: "Imroz Airport",
    city: "Gokceada",
  },
  {
    iata: "ESB",
    name: "Esenbo?a International Airport",
    city: "Ankara",
  },
  {
    iata: "ANK",
    name: "Etimesgut Air Base",
    city: "Ankara",
  },
  {
    iata: "ADA",
    name: "Adana Airport",
    city: "Adana",
  },
  {
    iata: "UAB",
    name: "?ncirlik Air Base",
    city: "Adana",
  },
  {
    iata: "AFY",
    name: "Afyon Airport",
    city: "Afyonkarahisar",
  },
  {
    iata: "AYT",
    name: "Antalya International Airport",
    city: "Antalya",
  },
  {
    iata: "GZT",
    name: "Gaziantep International Airport",
    city: "Gaziantep",
  },
  {
    iata: "ISK",
    name: "?skenderun Airport",
    city: "Nashik",
  },
  {
    iata: "KFS",
    name: "Kastamonu Airport",
    city: "Kastamonu",
  },
  {
    iata: "KYA",
    name: "Konya Airport",
    city: "Konya",
  },
  {
    iata: "MZH",
    name: "Amasya Merzifon Airport",
    city: "Amasya",
  },
  {
    iata: "SSX",
    name: "Samsun Samair Airport",
    city: "Samsun",
  },
  {
    iata: "VAS",
    name: "Sivas Airport",
    city: "Sivas",
  },
  {
    iata: "ONQ",
    name: "Zonguldak Airport",
    city: "Zonguldak",
  },
  {
    iata: "MLX",
    name: null,
    city: "Malatya",
  },
  {
    iata: "ASR",
    name: "Kayseri Erkilet Airport",
    city: "Kayseri",
  },
  {
    iata: "TJK",
    name: "Tokat Airport",
    city: "Tokat",
  },
  {
    iata: "DNZ",
    name: null,
    city: "Denizli",
  },
  {
    iata: "NAV",
    name: "Nev?ehir Kapadokya International Airport",
    city: "Nevsehir",
  },
  {
    iata: "LTB",
    name: "Latrobe Airport",
  },
  {
    iata: "IST",
    name: null,
    city: "Arnavutkoy",
  },
  {
    iata: "BTZ",
    name: "Bursa Airport",
    city: "Bursa",
  },
  {
    iata: "BZI",
    name: "Bal?kesir Merkez Airport",
    city: "Balikesir",
  },
  {
    iata: "BDM",
    name: "Band?rma Airport",
    city: "Bandirma",
  },
  {
    iata: "CKZ",
    name: null,
    city: "Canakkale",
  },
  {
    iata: "ESK",
    name: "Eski?ehir Air Base",
    city: "Eskisehir",
  },
  {
    iata: "ADB",
    name: "Adnan Menderes International Airport",
    city: "Izmir",
  },
  {
    iata: "IGL",
    name: null,
    city: "Izmir",
  },
  {
    iata: "USQ",
    name: "U?ak Airport",
    city: "Usak",
  },
  {
    iata: "KCO",
    name: "Cengiz Topel Airport",
    city: "",
  },
  {
    iata: "YEI",
    name: "Bursa Yeni?ehir Airport",
    city: "Bursa",
  },
  {
    iata: "DLM",
    name: "Dalaman International Airport",
    city: "Dalaman",
  },
  {
    iata: "TEQ",
    name: null,
    city: "Corlu",
  },
  {
    iata: "BXN",
    name: "Ims?k Airport",
    city: "Bodrum",
  },
  {
    iata: "AOE",
    name: "Anadolu University Airport",
    city: "Eskisehir",
  },
  {
    iata: "EZS",
    name: "Elaz?? Airport",
    city: "Elazig",
  },
  {
    iata: "DIY",
    name: "Diyarbakir Airport",
    city: "Diyarbakir",
  },
  {
    iata: "ERC",
    name: "Erzincan Airport",
    city: "Erzincan",
  },
  {
    iata: "ERZ",
    name: "Erzurum International Airport",
    city: "Erzurum",
  },
  {
    iata: "KSY",
    name: "Kars Airport",
    city: "Kars",
  },
  {
    iata: "TZX",
    name: "Trabzon International Airport",
    city: "Trabzon",
  },
  {
    iata: "SFQ",
    name: "?anl?urfa Airport",
    city: "Sanliurfa",
  },
  {
    iata: "VAN",
    name: "Van Ferit Melen Airport",
    city: "Van",
  },
  {
    iata: "BAL",
    name: "Batman Airport",
    city: "Batman",
  },
  {
    iata: "MSR",
    name: "Mu? Airport",
    city: "Mus",
  },
  {
    iata: "SXZ",
    name: "Siirt Airport",
    city: "Siirt",
  },
  {
    iata: "SIC",
    name: "Sinop Airport",
  },
  {
    iata: "KCM",
    name: "Kahramanmara? Airport",
    city: "Kahramanmaras",
  },
  {
    iata: "AJI",
    name: "A?r? Airport",
    city: "Agri",
  },
  {
    iata: "ADF",
    name: "Ad?yaman Airport",
    city: "Adiyaman",
  },
  {
    iata: "MQM",
    name: "Mardin Airport",
    city: "Mardin",
  },
  {
    iata: "GNY",
    name: "?anl?urfa GAP Airport",
    city: "Sanliurfa",
  },
  {
    iata: "HTY",
    name: "Hatay Airport",
    city: "Hatay",
  },
  {
    iata: "ISE",
    name: null,
    city: "Isparta",
  },
  {
    iata: "EDO",
    name: null,
    city: "Edremit",
  },
  {
    iata: "BJV",
    name: "Milas Bodrum International Airport",
    city: "Bodrum",
  },
  {
    iata: "SZF",
    name: null,
    city: "Samsun",
  },
  {
    iata: "SAW",
    name: null,
    city: "Istanbul",
  },
  {
    iata: "GZP",
    name: "Gazipa?a Airport",
    city: "Gazipasa",
  },
  {
    iata: "BZY",
    name: "Balti International Airport",
    city: "Strymba",
  },
  {
    iata: "KIV",
    name: "Chi?in?u International Airport",
    city: "Chisinau",
  },
  {
    iata: "GZA",
    name: "Yasser Arafat International Airport",
  },
  {
    iata: "OHD",
    name: "Ohrid St. Paul the Apostle Airport",
    city: "Ohrid",
  },
  {
    iata: "SKP",
    name: "Skopje Alexander the Great Airport",
    city: "Skopje",
  },
  {
    iata: "GIB",
    name: "Gibraltar Airport",
    city: "Gibraltar",
  },
  {
    iata: "BCQ",
    name: "Brack Airport",
  },
  {
    iata: "DNF",
    name: "Martubah Airport",
  },
  {
    iata: "MRA",
    name: "Misratah Airport",
  },
  {
    iata: "QUB",
    name: "Ubari Airport",
  },
  {
    iata: "UZC",
    name: "Ponikve Airport",
    city: "Uzice",
  },
  {
    iata: "BEG",
    name: "Belgrade Nikola Tesla Airport",
    city: "Belgrad",
  },
  {
    iata: "LJB",
    name: "Airport Lisicji Jarak",
  },
  {
    iata: "IVG",
    name: "Berane Airport",
    city: "Berane",
  },
  {
    iata: "BJY",
    name: "Batajnica Air Base",
    city: "Batajnica",
  },
  {
    iata: "GJA",
    name: "?akovica Airfield",
    city: "Guanaja",
  },
  {
    iata: "KID",
    name: "Airport Drakslerov salas Kikinda",
    city: "Kristianstad",
  },
  {
    iata: "INI",
    name: "Nis Airport",
    city: "Nis",
  },
  {
    iata: "QND",
    name: "Cenej Airport",
    city: "Novi Sad",
  },
  {
    iata: "TGD",
    name: "Podgorica Airport",
    city: "Podgorica",
  },
  {
    iata: "TIV",
    name: "Tivat Airport",
    city: "Tivat",
  },
  {
    iata: "BTS",
    name: null,
    city: "Bratislava",
  },
  {
    iata: "KSC",
    name: null,
    city: "Kosice",
  },
  {
    iata: "LUE",
    name: "Lu?enec Airport",
    city: "Lucenec",
  },
  {
    iata: "PZY",
    name: null,
    city: "Piestany",
  },
  {
    iata: "POV",
    name: null,
    city: "Presov",
  },
  {
    iata: "SLD",
    name: "Slia? Airport",
    city: "Sliac",
  },
  {
    iata: "ILZ",
    name: null,
    city: "Zilina",
  },
  {
    iata: "GLN",
    name: "Goulimime Airport",
  },
  {
    iata: "GDT",
    name: "JAGS McCartney International Airport",
    city: "Cockburn Town",
  },
  {
    iata: "MDS",
    name: "Middle Caicos Airport",
    city: "Middle Caicos",
  },
  {
    iata: "NCA",
    name: "North Caicos Airport",
    city: "",
  },
  {
    iata: "PIC",
    name: "Pine Cay Airport",
    city: "Pine Cay",
  },
  {
    iata: "PLS",
    name: "Providenciales Airport",
    city: "Providenciales Island",
  },
  {
    iata: "XSC",
    name: "South Caicos Airport",
    city: "",
  },
  {
    iata: "SLX",
    name: "Salt Cay Airport",
    city: "Salt Cay",
  },
  {
    iata: "EPS",
    name: "Arroyo Barril International Airport",
    city: "Arroyo Barril",
  },
  {
    iata: "BRX",
    name: "Maria Montez International Airport",
    city: "Barahona",
  },
  {
    iata: "CBJ",
    name: "Cabo Rojo Airport",
    city: "Cabo Rojo",
  },
  {
    iata: "AZS",
    name: null,
    city: "Samana",
  },
  {
    iata: "COZ",
    name: "Constanza Dom Re Airport",
    city: "Costanza",
  },
  {
    iata: "HEX",
    name: "Herrera Airport",
  },
  {
    iata: "JBQ",
    name: "La Isabela International Airport",
    city: "La Isabela",
  },
  {
    iata: "LRM",
    name: "Casa De Campo International Airport",
    city: "La Romana",
  },
  {
    iata: "PUJ",
    name: "Punta Cana International Airport",
    city: "Punta Cana",
  },
  {
    iata: "POP",
    name: "Gregorio Luperon International Airport",
    city: "Puerto Plata",
  },
  {
    iata: "MDR",
    name: "Medfra Airport",
  },
  {
    iata: "SNX",
    name: "Sabana de Mar Airport",
    city: "Sabana de Mar",
  },
  {
    iata: "SDQ",
    name: null,
    city: "Santo Domingo",
  },
  {
    iata: "SJM",
    name: "San Juan Airport",
  },
  {
    iata: "STI",
    name: "Cibao International Airport",
    city: "Santiago",
  },
  {
    iata: "DOA",
    name: "Doany Airport",
  },
  {
    iata: "CBV",
    name: "Coban Airport",
    city: "Coban",
  },
  {
    iata: "CMM",
    name: "Carmelita Airport",
    city: "Carmelita",
  },
  {
    iata: "CTF",
    name: "Coatepeque Airport",
    city: "Coatepeque",
  },
  {
    iata: "GUA",
    name: "La Aurora Airport",
    city: "Guatemala City",
  },
  {
    iata: "HUG",
    name: "Huehuetenango Airport",
    city: "Huehuetenango",
  },
  {
    iata: "MCR",
    name: "Melchor de Mencos Airport",
    city: "Melchor de Mencos",
  },
  {
    iata: "PBR",
    name: "Puerto Barrios Airport",
    city: "Puerto Barrios",
  },
  {
    iata: "PON",
    name: null,
    city: "Poptun",
  },
  {
    iata: "AQB",
    name: "Santa Cruz del Quiche Airport",
    city: "Santa Cruz del Quiche",
  },
  {
    iata: "AAZ",
    name: "Quezaltenango Airport",
    city: "Quezaltenango",
  },
  {
    iata: "RUV",
    name: "Rubelsanto Airport",
    city: "Rubelsanto",
  },
  {
    iata: "RER",
    name: "Retalhuleu Airport",
    city: "Retalhuleu",
  },
  {
    iata: "GSJ",
    name: null,
    city: "Puerto San Jose",
  },
  {
    iata: "FRS",
    name: "Mundo Maya International Airport",
    city: "San Benito",
  },
  {
    iata: "AIM",
    name: "Ailuk Airport",
  },
  {
    iata: "AUL",
    name: "Aur Island Airport",
  },
  {
    iata: "BII",
    name: "Enyu Airfield",
  },
  {
    iata: "EBN",
    name: "Ebadon Airport",
  },
  {
    iata: "JAT",
    name: "Jabot Airport",
  },
  {
    iata: "JEJ",
    name: "Jeh Airport",
  },
  {
    iata: "KBT",
    name: "Kaben Airport",
  },
  {
    iata: "LIK",
    name: "Likiep Airport",
  },
  {
    iata: "LML",
    name: "Lae Island Airport",
  },
  {
    iata: "MAV",
    name: "Maloelap Island Airport",
  },
  {
    iata: "MJB",
    name: "Mejit Atoll Airport",
  },
  {
    iata: "MJE",
    name: "Majkin Airport",
  },
  {
    iata: "NDK",
    name: "Namorik Atoll Airport",
  },
  {
    iata: "RNP",
    name: "Rongelap Island Airport",
  },
  {
    iata: "TIC",
    name: "Tinak Airport",
  },
  {
    iata: "UIT",
    name: "Jaluit Airport",
  },
  {
    iata: "WJA",
    name: "Woja Airport",
  },
  {
    iata: "WTE",
    name: "Wotje Atoll Airport",
  },
  {
    iata: "WTO",
    name: "Wotho Island Airport",
  },
  {
    iata: "AHS",
    name: "Ahuas Airport",
    city: "Ahuas",
  },
  {
    iata: "BHG",
    name: "Brus Laguna Airport",
    city: "Brus Laguna",
  },
  {
    iata: "CAA",
    name: "Catacamas Airport",
    city: "Catacamas",
  },
  {
    iata: "CDD",
    name: "Cauquira Airport",
    city: "Cauquira",
  },
  {
    iata: "JUT",
    name: "Jutigalpa airport",
    city: "Jutigalpa",
  },
  {
    iata: "LCE",
    name: "Goloson International Airport",
    city: "La Ceiba",
  },
  {
    iata: "LEZ",
    name: "La Esperanza Airport",
    city: "La Esperanza",
  },
  {
    iata: "SAP",
    name: null,
    city: "La Mesa",
  },
  {
    iata: "GJA",
    name: "La Laguna Airport",
    city: "Guanaja",
  },
  {
    iata: "PEU",
    name: "Puerto Lempira Airport",
    city: "Puerto Lempira",
  },
  {
    iata: "RTB",
    name: "Juan Manuel Galvez International Airport",
    city: "Roatan Island",
  },
  {
    iata: "SDH",
    name: null,
    city: "Santa Rosa de Copan",
  },
  {
    iata: "RUY",
    name: "Copan Ruinas Airport",
    city: "Ruinas de Copan",
  },
  {
    iata: "XPL",
    name: "Coronel Enrique Soto Cano Air Base",
    city: "Comayagua",
  },
  {
    iata: "TEA",
    name: "Tela Airport",
    city: "Tela",
  },
  {
    iata: "TGU",
    name: null,
    city: "Tegucigalpa",
  },
  {
    iata: "TJI",
    name: "Trujillo Airport",
    city: "Trujillo",
  },
  {
    iata: "SCD",
    name: "Sulaco Airport",
    city: "Sulaco",
  },
  {
    iata: "UII",
    name: "Utila Airport",
    city: "Utila Island",
  },
  {
    iata: "MJG",
    name: "Areopuerto Internacional Michael Gonzalez",
    city: "Mayajigua",
  },
  {
    iata: "OCJ",
    name: "Boscobel Aerodrome",
    city: "Ocho Rios",
  },
  {
    iata: "KIN",
    name: "Norman Manley International Airport",
    city: "Kingston",
  },
  {
    iata: "MBJ",
    name: "Sangster International Airport",
    city: "Montego Bay",
  },
  {
    iata: "POT",
    name: "Ken Jones Airport",
    city: "Ken Jones",
  },
  {
    iata: "NEG",
    name: "Negril Airport",
    city: "Negril",
  },
  {
    iata: "KTP",
    name: "Tinson Pen Airport",
    city: "Tinson Pen",
  },
  {
    iata: "MIJ",
    name: "Mili Island Airport",
    city: "Mili Island",
  },
  {
    iata: "HEB",
    name: "Henzada Airport",
  },
  {
    iata: "ACA",
    name: "General Juan N Alvarez International Airport",
    city: "Acapulco",
  },
  {
    iata: "NTR",
    name: "Del Norte International Airport",
    city: "",
  },
  {
    iata: "AGU",
    name: "Jesus Teran International Airport",
    city: "Aguascalientes",
  },
  {
    iata: "HUX",
    name: null,
    city: "Huatulco",
  },
  {
    iata: "CNA",
    name: "Cananea Airport",
    city: "",
  },
  {
    iata: "CVJ",
    name: "General Mariano Matamoros Airport",
    city: "",
  },
  {
    iata: "ACN",
    name: null,
    city: "Ciudad Acuna",
  },
  {
    iata: "CME",
    name: "Ciudad del Carmen International Airport",
    city: "Ciudad del Carmen",
  },
  {
    iata: "NCG",
    name: "Nuevo Casas Grandes Airport",
    city: "",
  },
  {
    iata: "CUL",
    name: "Federal de Bachigualato International Airport",
    city: "Culiacan",
  },
  {
    iata: "CTM",
    name: "Chetumal International Airport",
    city: "Chetumal",
  },
  {
    iata: "CEN",
    name: null,
    city: "Ciudad Obregon",
  },
  {
    iata: "CJT",
    name: "Comitan Airport",
    city: "",
  },
  {
    iata: "CPE",
    name: null,
    city: "Campeche",
  },
  {
    iata: "CJS",
    name: null,
    city: "Ciudad Juarez",
  },
  {
    iata: "CZA",
    name: "Chichen Itza International Airport",
    city: "",
  },
  {
    iata: "CUU",
    name: "General Roberto Fierro Villalobos International Airport",
    city: "Chihuahua",
  },
  {
    iata: "CVM",
    name: "General Pedro Jose Mendez International Airport",
    city: "Ciudad Victoria",
  },
  {
    iata: "CYW",
    name: "Captain Rogelio Castillo National Airport",
    city: "Celaya",
  },
  {
    iata: "CZM",
    name: "Cozumel International Airport",
    city: "Cozumel",
  },
  {
    iata: "CUA",
    name: null,
    city: "Ciudad Constitucion",
  },
  {
    iata: "MMC",
    name: "Ciudad Mante National Airport",
    city: "Ciudad Mante",
  },
  {
    iata: "DGO",
    name: "General Guadalupe Victoria International Airport",
    city: "Durango",
  },
  {
    iata: "TPQ",
    name: "Amado Nervo National Airport",
    city: "Tepic",
  },
  {
    iata: "ESE",
    name: "Ensenada Airport",
    city: "",
  },
  {
    iata: "GDL",
    name: "Don Miguel Hidalgo Y Costilla International Airport",
    city: "Guadalajara",
  },
  {
    iata: "GYM",
    name: null,
    city: "Guaymas",
  },
  {
    iata: "GUB",
    name: "Guerrero Negro Airport",
    city: "Guerrero Negro",
  },
  {
    iata: "TCN",
    name: "Tehuacan Airport",
    city: "",
  },
  {
    iata: "HMO",
    name: "General Ignacio P. Garcia International Airport",
    city: "Hermosillo",
  },
  {
    iata: "CLQ",
    name: "Lic. Miguel de la Madrid Airport",
    city: "Colima",
  },
  {
    iata: "ISJ",
    name: "Isla Mujeres Airport",
    city: "",
  },
  {
    iata: "SLW",
    name: "Plan De Guadalupe International Airport",
    city: "Saltillo",
  },
  {
    iata: "IZT",
    name: "Ixtepec Airport",
    city: "",
  },
  {
    iata: "JAL",
    name: "El Lencero Airport",
    city: "Xalapa",
  },
  {
    iata: "AZP",
    name: "Atizapan De Zaragoza Airport",
    city: "",
  },
  {
    iata: "LZC",
    name: null,
    city: "Lazaro Cardenas",
  },
  {
    iata: "LMM",
    name: "Valle del Fuerte International Airport",
    city: "Los Mochis",
  },
  {
    iata: "BJX",
    name: null,
    city: "Silao",
  },
  {
    iata: "LAP",
    name: null,
    city: "La Paz",
  },
  {
    iata: "LTO",
    name: "Loreto International Airport",
    city: "Loreto",
  },
  {
    iata: "MAM",
    name: "General Servando Canales International Airport",
    city: "Matamoros",
  },
  {
    iata: "MID",
    name: "Licenciado Manuel Crescencio Rejon Int Airport",
    city: "Merida",
  },
  {
    iata: "MUG",
    name: "Mulege Airport",
    city: "Mulege",
  },
  {
    iata: "MXL",
    name: null,
    city: "Mexicali",
  },
  {
    iata: "MLM",
    name: "General Francisco J. Mujica International Airport",
    city: "Morelia",
  },
  {
    iata: "MTT",
    name: null,
    city: "Minatitlan",
  },
  {
    iata: "LOV",
    name: "Monclova International Airport",
    city: "",
  },
  {
    iata: "MEX",
    name: "Licenciado Benito Juarez International Airport",
    city: "Mexico City",
  },
  {
    iata: "MTY",
    name: "General Mariano Escobedo International Airport",
    city: "Monterrey",
  },
  {
    iata: "MZT",
    name: "General Rafael Buelna International Airport",
    city: "Mazatlan",
  },
  {
    iata: "NOG",
    name: "Nogales International Airport",
    city: "",
  },
  {
    iata: "NLD",
    name: null,
    city: "Nuevo Laredo",
  },
  {
    iata: "OAX",
    name: null,
    city: "Oaxaca",
  },
  {
    iata: "PAZ",
    name: null,
    city: "Poza Rica",
  },
  {
    iata: "PBC",
    name: null,
    city: "Puebla",
  },
  {
    iata: "PPE",
    name: "Puerto Penasco Airport",
    city: "Puerto Penasco",
  },
  {
    iata: "PDS",
    name: "Piedras Negras International Airport",
    city: "",
  },
  {
    iata: "UPN",
    name: "Licenciado y General Ignacio Lopez Rayon Airport",
    city: "",
  },
  {
    iata: "PQM",
    name: "Palenque International Airport",
    city: "",
  },
  {
    iata: "PVR",
    name: null,
    city: "Puerto Vallarta",
  },
  {
    iata: "PXM",
    name: "Puerto Escondido International Airport",
    city: "Puerto Escondido",
  },
  {
    iata: "QRO",
    name: null,
    city: "Queretaro",
  },
  {
    iata: "REX",
    name: "General Lucio Blanco International Airport",
    city: "Reynosa",
  },
  {
    iata: "SZT",
    name: "San Cristobal De Las Casas Airport",
    city: "",
  },
  {
    iata: "SJD",
    name: "Los Cabos International Airport",
    city: "San Jose del Cabo",
  },
  {
    iata: "SFH",
    name: "San Felipe International Airport",
    city: "",
  },
  {
    iata: "SLP",
    name: "Ponciano Arriaga International Airport",
    city: "San Luis Potosi",
  },
  {
    iata: "TGM",
    name: null,
    city: "Targu Mures",
  },
  {
    iata: "TRC",
    name: "Francisco Sarabia International Airport",
    city: "Torreon",
  },
  {
    iata: "TIJ",
    name: null,
    city: "Tijuana",
  },
  {
    iata: "TAM",
    name: "General Francisco Javier Mina International Airport",
    city: "Tampico",
  },
  {
    iata: "TSL",
    name: "Tamuin Airport",
    city: "",
  },
  {
    iata: "TLC",
    name: "Licenciado Adolfo Lopez Mateos International Airport",
    city: "Toluca",
  },
  {
    iata: "TAP",
    name: "Tapachula International Airport",
    city: "Tapachula",
  },
  {
    iata: "WIX",
    name: "Tuxpan Airport",
    city: "",
  },
  {
    iata: "CUN",
    name: null,
    city: "Cancun",
  },
  {
    iata: "VSA",
    name: null,
    city: "Villahermosa",
  },
  {
    iata: "VER",
    name: "General Heriberto Jara International Airport",
    city: "Veracruz",
  },
  {
    iata: "ZCL",
    name: "General Leobardo C. Ruiz International Airport",
    city: "Zacatecas",
  },
  {
    iata: "ZIH",
    name: "Ixtapa Zihuatanejo International Airport",
    city: "Ixtapa",
  },
  {
    iata: "ZMM",
    name: "Zamora Airport",
    city: "",
  },
  {
    iata: "ZLO",
    name: "Playa De Oro International Airport",
    city: "Manzanillo",
  },
  {
    iata: "MXW",
    name: "Mandalgobi Airport",
  },
  {
    iata: "ULG",
    name: null,
    city: "",
  },
  {
    iata: "ULZ",
    name: "Jibhalanta Airport",
  },
  {
    iata: "BEF",
    name: "Bluefields Airport",
    city: "Bluefileds",
  },
  {
    iata: "BZA",
    name: "San Pedro Airport",
    city: "Bonanza",
  },
  {
    iata: "RNI",
    name: "Corn Island",
    city: "Corn Island",
  },
  {
    iata: "MGA",
    name: "Augusto C. Sandino (Managua) International Airport",
    city: "Managua",
  },
  {
    iata: "NVG",
    name: "Nueva Guinea Airport",
    city: "Nueva Guinea",
  },
  {
    iata: "PUZ",
    name: "Puerto Cabezas Airport",
    city: "Puerto Cabezas",
  },
  {
    iata: "RFS",
    name: "Rosita Airport",
    city: "La Rosita",
  },
  {
    iata: "NCR",
    name: "San Carlos",
    city: "San Carlos",
  },
  {
    iata: "SIU",
    name: "Siuna",
    city: "Siuna",
  },
  {
    iata: "WSP",
    name: "Waspam Airport",
    city: "Waspam",
  },
  {
    iata: "BOC",
    name: "Bocas Del Toro International Airport",
    city: "Isla Colon",
  },
  {
    iata: "CTD",
    name: "Alonso Valderrama Airport",
    city: "Chitre",
  },
  {
    iata: "CHX",
    name: null,
    city: "Changuinola",
  },
  {
    iata: "DAV",
    name: "Enrique Malek International Airport",
    city: "David",
  },
  {
    iata: "ONX",
    name: "Enrique Adolfo Jimenez Airport",
    city: "Colon",
  },
  {
    iata: "BLB",
    name: "Howard Airport",
    city: "Panama City",
  },
  {
    iata: "JQE",
    name: null,
    city: "Jaque",
  },
  {
    iata: "PLP",
    name: "Captain Ramon Xatruch Airport",
    city: "La Palma",
  },
  {
    iata: "PAC",
    name: "Marcos A. Gelabert International Airport",
    city: "Albrook",
  },
  {
    iata: "SYP",
    name: "Ruben Cantu Airport",
    city: "Santiago",
  },
  {
    iata: "PTY",
    name: "Tocumen International Airport",
    city: "Tocumen",
  },
  {
    iata: "NBL",
    name: "San Blas Airport",
    city: "Wannukandi",
  },
  {
    iata: "FON",
    name: "Arenal Airport",
    city: "La Fortuna/San Carlos",
  },
  {
    iata: "TTQ",
    name: "Aerotortuguero Airport",
    city: "Roxana",
  },
  {
    iata: "BAI",
    name: "Buenos Aires Airport",
    city: "Punta Arenas",
  },
  {
    iata: "BCL",
    name: "Barra del Colorado Airport",
    city: "Pococi",
  },
  {
    iata: "CSC",
    name: "Codela Airport",
    city: "Guapiles",
  },
  {
    iata: "OTR",
    name: "Coto 47 Airport",
    city: "Corredores",
  },
  {
    iata: "RIK",
    name: "Carrillo Airport",
    city: "Nicoya",
  },
  {
    iata: "TNO",
    name: "Cabo Velas Airport",
    city: "Santa Cruz",
  },
  {
    iata: "FMG",
    name: "Flamingo Airport",
    city: "Brasilito",
  },
  {
    iata: "GLF",
    name: "Golfito Airport",
    city: "Golfito",
  },
  {
    iata: "GPL",
    name: "Guapiles Airport",
    city: "Pococi",
  },
  {
    iata: "PBP",
    name: "Islita Airport",
    city: "Nandayure",
  },
  {
    iata: "LIR",
    name: "Daniel Oduber Quiros International Airport",
    city: "Liberia",
  },
  {
    iata: "LSL",
    name: "Los Chiles Airport",
    city: "Los Chiles",
  },
  {
    iata: "LIO",
    name: "Limon International Airport",
    city: "Puerto Limon",
  },
  {
    iata: "NCT",
    name: "Guanacaste Airport",
    city: "Nicoya/Guanacate",
  },
  {
    iata: "NOM",
    name: "Nosara Airport",
  },
  {
    iata: "SJO",
    name: "Juan Santamaria International Airport",
    city: "San Jose",
  },
  {
    iata: "PJM",
    name: "Puerto Jimenez Airport",
    city: "Puerto Jimenez",
  },
  {
    iata: "PMZ",
    name: "Palmar Sur Airport",
    city: "Palmar Sur",
  },
  {
    iata: "SYQ",
    name: "Tobias Bolanos International Airport",
    city: "San Jose",
  },
  {
    iata: "XQP",
    name: "Quepos Managua Airport",
    city: "Quepos",
  },
  {
    iata: "RFR",
    name: "Rio Frio / Progreso Airport",
    city: "Rio Frio / Progreso",
  },
  {
    iata: "PLD",
    name: "Playa Samara Airport",
    city: "Playa Samara",
  },
  {
    iata: "TOO",
    name: "San Vito De Java Airport",
    city: "Coto Brus",
  },
  {
    iata: "TNO",
    name: "Tamarindo De Santa Cruz Airport",
    city: "Santa Cruz",
  },
  {
    iata: "TMU",
    name: "Tambor Airport",
    city: "Nicoya",
  },
  {
    iata: "UPL",
    name: "Upala Airport",
    city: "Upala",
  },
  {
    iata: "SAL",
    name: "El Salvador International Airport",
    city: "Santa Clara",
  },
  {
    iata: "CYA",
    name: "Les Cayes Airport",
    city: "Les Cayes",
  },
  {
    iata: "CAP",
    name: "Cap Haitien International Airport",
    city: "Cap Haitien",
  },
  {
    iata: "JAK",
    name: "Jacmel Airport",
    city: "Jacmel",
  },
  {
    iata: "JEE",
    name: null,
    city: "Jeremie",
  },
  {
    iata: "PAP",
    name: "Toussaint Louverture International Airport",
    city: "Port-au-Prince",
  },
  {
    iata: "PAX",
    name: "Port-de-Paix Airport",
    city: "Port-de-Paix",
  },
  {
    iata: "MTU",
    name: "Montepuez Airport",
  },
  {
    iata: "BCA",
    name: "Gustavo Rizo Airport",
    city: "Baracoa",
  },
  {
    iata: "BWW",
    name: "Las Brujas Airport",
    city: "Cayo Santa Maria",
  },
  {
    iata: "BYM",
    name: "Carlos Manuel de Cespedes Airport",
    city: "Bayamo",
  },
  {
    iata: "AVI",
    name: "Maximo Gomez Airport",
    city: "Ciego de Avila",
  },
  {
    iata: "CCC",
    name: "Jardines Del Rey Airport",
    city: "Cayo Coco",
  },
  {
    iata: "CFG",
    name: "Jaime Gonzalez Airport",
    city: "Cienfuegos",
  },
  {
    iata: "CYO",
    name: "Vilo Acuna International Airport",
    city: "Cayo Largo del Sur",
  },
  {
    iata: "CMW",
    name: "Ignacio Agramonte International Airport",
    city: "Camaguey",
  },
  {
    iata: "QCO",
    name: null,
    city: "Colon",
  },
  {
    iata: "SCU",
    name: "Antonio Maceo International Airport",
    city: "Santiago",
  },
  {
    iata: "NBW",
    name: "Leeward Point Field",
    city: "Guantanamo Bay Naval Station",
  },
  {
    iata: "GAO",
    name: "Mariana Grajales Airport",
    city: "Guantanamo",
  },
  {
    iata: "HAV",
    name: null,
    city: "Havana",
  },
  {
    iata: "HOG",
    name: "Frank Pais International Airport",
    city: "Holguin",
  },
  {
    iata: "VRO",
    name: "Kawama Airport",
    city: "Matanzas",
  },
  {
    iata: "LCL",
    name: "La Coloma Airport",
    city: "Pinar del Rio",
  },
  {
    iata: "UMA",
    name: "Punta de Maisi Airport",
    city: "Maisi",
  },
  {
    iata: "MJG",
    name: "Mayajigua Airport",
    city: "Mayajigua",
  },
  {
    iata: "MOA",
    name: "Orestes Acosta Airport",
    city: "Moa",
  },
  {
    iata: "MZO",
    name: "Sierra Maestra Airport",
    city: "Manzanillo",
  },
  {
    iata: "QSN",
    name: "San Nicolas De Bari Airport",
    city: "San Nicolas",
  },
  {
    iata: "ICR",
    name: "Nicaro Airport",
    city: "Nicaro",
  },
  {
    iata: "GER",
    name: "Rafael Cabrera Airport",
    city: "Nueva Gerona",
  },
  {
    iata: "UPB",
    name: "Playa Baracoa Airport",
    city: "Havana",
  },
  {
    iata: "QPD",
    name: "Pinar Del Rio Airport",
    city: "Pinar del Rio",
  },
  {
    iata: "SNU",
    name: "Abel Santamaria Airport",
    city: "Santa Clara",
  },
  {
    iata: "SNJ",
    name: "San Julian Air Base",
    city: "Pinar Del Rio",
  },
  {
    iata: "SZJ",
    name: "Siguanea Airport",
    city: "Isla de la Juventud",
  },
  {
    iata: "USS",
    name: "Sancti Spiritus Airport",
    city: "Sancti Spiritus",
  },
  {
    iata: "TND",
    name: "Alberto Delgado Airport",
    city: "Trinidad",
  },
  {
    iata: "VRA",
    name: "Juan Gualberto Gomez International Airport",
    city: "Varadero",
  },
  {
    iata: "VTU",
    name: "Hermanos Ameijeiras Airport",
    city: "Las Tunas",
  },
  {
    iata: "CYB",
    name: "Gerrard Smith International Airport",
    city: "Cayman Brac",
  },
  {
    iata: "LYB",
    name: "Edward Bodden Airfield",
    city: "Little Cayman",
  },
  {
    iata: "GCM",
    name: "Owen Roberts International Airport",
    city: "Georgetown",
  },
  {
    iata: "AJS",
    name: "Abreojos Airport",
  },
  {
    iata: "AZG",
    name: "Pablo L. Sidar Airport",
  },
  {
    iata: "CEO",
    name: "El Crucero Airport",
    city: "Waco Kungo",
  },
  {
    iata: "NVJ",
    name: "Navojoa Airport",
  },
  {
    iata: "PCM",
    name: "Playa del Carmen Airport",
  },
  {
    iata: "PCV",
    name: "Punta Chivato Airport",
  },
  {
    iata: "PNO",
    name: "Pinotepa Nacional Airport",
  },
  {
    iata: "SCX",
    name: "Salina Cruz Naval Air Station",
  },
  {
    iata: "SGM",
    name: "San Ignacio Airport",
  },
  {
    iata: "TUY",
    name: "Tulum Naval Air Station",
  },
  {
    iata: "UAC",
    name: null,
  },
  {
    iata: "XAL",
    name: null,
  },
  {
    iata: "GTB",
    name: "Genting Airport",
    city: "Fort Drum",
  },
  {
    iata: "GTK",
    name: "Sungei Tekai Airport",
  },
  {
    iata: "LBP",
    name: "Long Banga Airport",
  },
  {
    iata: "LLM",
    name: "Long Lama Airport",
  },
  {
    iata: "MZS",
    name: "Mostyn Airport",
  },
  {
    iata: "SPT",
    name: "Sipitang Airport",
  },
  {
    iata: "MAY",
    name: "Clarence A. Bain Airport",
    city: "Mangrove Cay",
  },
  {
    iata: "ASD",
    name: "Andros Town Airport",
    city: "",
  },
  {
    iata: "COX",
    name: "Congo Town Airport",
    city: "Andros",
  },
  {
    iata: "MHH",
    name: "Marsh Harbour International Airport",
    city: "Marsh Harbour",
  },
  {
    iata: "SAQ",
    name: "San Andros Airport",
    city: "Andros Island",
  },
  {
    iata: "AXP",
    name: "Spring Point Airport",
    city: "Spring Point",
  },
  {
    iata: "TCB",
    name: "Treasure Cay Airport",
    city: "Treasure Cay",
  },
  {
    iata: "WKR",
    name: "Abaco I Walker C Airport",
    city: "",
  },
  {
    iata: "CCZ",
    name: "Chub Cay Airport",
    city: "",
  },
  {
    iata: "GHC",
    name: "Great Harbour Cay Airport",
    city: "",
  },
  {
    iata: "BIM",
    name: "South Bimini Airport",
    city: "South Bimini",
  },
  {
    iata: "ATC",
    name: "Arthur's Town Airport",
    city: "Arthur's Town",
  },
  {
    iata: "CAT",
    name: "New Bight Airport",
    city: "",
  },
  {
    iata: "CXY",
    name: "Cat Cay Airport",
    city: "Cat Cay",
  },
  {
    iata: "CRI",
    name: "Colonel Hill Airport",
    city: "Colonel Hill",
  },
  {
    iata: "PWN",
    name: "Pitts Town Airport",
    city: "Pitts Town",
  },
  {
    iata: "GGT",
    name: "Exuma International Airport",
    city: "George Town",
  },
  {
    iata: "ELH",
    name: "North Eleuthera Airport",
    city: "North Eleuthera",
  },
  {
    iata: "GHB",
    name: "Governor's Harbour Airport",
    city: "Governor's Harbour",
  },
  {
    iata: "NMC",
    name: "Normans Cay Airport",
    city: "",
  },
  {
    iata: "RSD",
    name: "Rock Sound Airport",
    city: "Rock Sound",
  },
  {
    iata: "TYM",
    name: "Staniel Cay Airport",
    city: "",
  },
  {
    iata: "FPO",
    name: "Grand Bahama International Airport",
    city: "Freeport",
  },
  {
    iata: "WTD",
    name: "West End Airport",
    city: "West End",
  },
  {
    iata: "IGA",
    name: "Inagua Airport",
    city: "Matthew Town",
  },
  {
    iata: "LGI",
    name: "Deadman's Cay Airport",
    city: "Deadman's Cay",
  },
  {
    iata: "SML",
    name: "Stella Maris Airport",
    city: "Stella Maris",
  },
  {
    iata: "MYG",
    name: "Mayaguana Airport",
    city: "Mayaguana",
  },
  {
    iata: "NAS",
    name: "Lynden Pindling International Airport",
    city: "Nassau",
  },
  {
    iata: "PID",
    name: "Nassau Paradise Island Airport",
    city: "Nassau",
  },
  {
    iata: "DCT",
    name: "Duncan Town Airport",
    city: "",
  },
  {
    iata: "RCY",
    name: "Rum Cay Airport",
    city: "",
  },
  {
    iata: "ZSA",
    name: "San Salvador Airport",
    city: "San Salvador",
  },
  {
    iata: "MFW",
    name: "Magaruque Airport",
  },
  {
    iata: "TGS",
    name: null,
  },
  {
    iata: "BZE",
    name: "Philip S. W. Goldson International Airport",
    city: "Belize City",
  },
  {
    iata: "NBS",
    name: "Changbaishan Airport",
  },
  {
    iata: "AIT",
    name: "Aitutaki Airport",
    city: "Aitutaki",
  },
  {
    iata: "AIU",
    name: "Enua Airport",
    city: "Atiu Island",
  },
  {
    iata: "MGS",
    name: "Mangaia Island Airport",
    city: "Mangaia Island",
  },
  {
    iata: "MHX",
    name: "Manihiki Island Airport",
    city: "Manihiki Island",
  },
  {
    iata: "MUK",
    name: "Mauke Airport",
    city: "Mauke Island",
  },
  {
    iata: "MOI",
    name: "Mitiaro Island Airport",
    city: "Mitiaro Island",
  },
  {
    iata: "PYE",
    name: "Tongareva Airport",
    city: "Penrhyn Island",
  },
  {
    iata: "RAR",
    name: "Rarotonga International Airport",
    city: "Avarua",
  },
  {
    iata: "ICI",
    name: "Cicia Airport",
    city: "Cicia",
  },
  {
    iata: "NAN",
    name: "Nadi International Airport",
    city: "Nadi",
  },
  {
    iata: "PTF",
    name: "Malolo Lailai Island Airport",
    city: "Malolo Lailai Island",
  },
  {
    iata: "KDV",
    name: "Vunisea Airport",
    city: "Vunisea",
  },
  {
    iata: "MNF",
    name: "Mana Island Airport",
    city: "Mana Island",
  },
  {
    iata: "MFJ",
    name: "Moala Airport",
    city: "Moala",
  },
  {
    iata: "SUV",
    name: "Nausori International Airport",
    city: "Nausori",
  },
  {
    iata: "LEV",
    name: "Levuka Airfield",
    city: "Bureta",
  },
  {
    iata: "NGI",
    name: "Ngau Airport",
    city: "Ngau",
  },
  {
    iata: "LUC",
    name: "Laucala Island Airport",
    city: "Laucala Island",
  },
  {
    iata: "LKB",
    name: "Lakeba Island Airport",
    city: "Lakeba Island",
  },
  {
    iata: "LBS",
    name: "Labasa Airport",
    city: "",
  },
  {
    iata: "TVU",
    name: "Matei Airport",
    city: "Matei",
  },
  {
    iata: "KXF",
    name: "Koro Island Airport",
    city: "Koro Island",
  },
  {
    iata: "RTA",
    name: "Rotuma Airport",
    city: "Rotuma",
  },
  {
    iata: "SVU",
    name: "Savusavu Airport",
    city: "Savusavu",
  },
  {
    iata: "VAU",
    name: "Vatukoula Airport",
    city: "Vatukoula",
  },
  {
    iata: "KAY",
    name: "Wakaya Island Airport",
    city: "Wakaya Island",
  },
  {
    iata: "ONU",
    name: "Ono-I-Lau Airport",
    city: "Ono-I-Lau",
  },
  {
    iata: "YAS",
    name: "Yasawa Island Airport",
    city: "Yasawa Island",
  },
  {
    iata: "EUA",
    name: "Kaufana Airport",
    city: "Eua Island",
  },
  {
    iata: "TBU",
    name: "Fua'amotu International Airport",
    city: "Nuku'alofa",
  },
  {
    iata: "HPA",
    name: "Lifuka Island Airport",
    city: "Lifuka",
  },
  {
    iata: "NFO",
    name: "Mata'aho Airport",
  },
  {
    iata: "NTT",
    name: "Kuini Lavenia Airport",
    city: "Niuatoputapu",
  },
  {
    iata: "VAV",
    name: "Vava'u International Airport",
    city: "Vava'u Island",
  },
  {
    iata: "VBV",
    name: "Vanua Balavu Airport",
    city: "Vanua Balavu",
  },
  {
    iata: "VTF",
    name: "Vatulele Airport",
    city: "Vatulele",
  },
  {
    iata: "GMO",
    name: "Gombe Lawanti International Airport",
    city: "Gombe",
  },
  {
    iata: "PHG",
    name: "Port Harcourt City Airport",
  },
  {
    iata: "BCU",
    name: "Bauchi Airport",
  },
  {
    iata: "QRW",
    name: "Warri Airport",
  },
  {
    iata: "ABF",
    name: "Abaiang Airport",
    city: "Abaiang",
  },
  {
    iata: "BEZ",
    name: "Beru Airport",
    city: "Beru",
  },
  {
    iata: "FUN",
    name: "Funafuti International Airport",
    city: "Funafuti",
  },
  {
    iata: "KUC",
    name: "Kuria Airport",
    city: "Kuria",
  },
  {
    iata: "MNK",
    name: "Maiana Airport",
    city: "Maiana",
  },
  {
    iata: "MZK",
    name: "Marakei Airport",
    city: "Marakei",
  },
  {
    iata: "MTK",
    name: "Makin Island Airport",
    city: "Makin Island",
  },
  {
    iata: "NIG",
    name: "Nikunau Airport",
    city: "Nikunau",
  },
  {
    iata: "OOT",
    name: "Onotoa Airport",
    city: "Onotoa",
  },
  {
    iata: "TRW",
    name: "Bonriki International Airport",
    city: "Tarawa",
  },
  {
    iata: "AEA",
    name: "Abemama Atoll Airport",
    city: "Abemama Atoll",
  },
  {
    iata: "TBF",
    name: "Tabiteuea North Airport",
    city: "",
  },
  {
    iata: "TMN",
    name: "Tamana Island Airport",
    city: "Tamana Island",
  },
  {
    iata: "NON",
    name: "Nonouti Airport",
    city: "Nonouti",
  },
  {
    iata: "AIS",
    name: "Arorae Island Airport",
    city: "Arorae Island",
  },
  {
    iata: "TSU",
    name: "Tabiteuea South Airport",
    city: "Tabiteuea South",
  },
  {
    iata: "BBG",
    name: "Butaritari Atoll Airport",
    city: "Butaritari Atoll",
  },
  {
    iata: "AAK",
    name: "Buariki Airport",
    city: "Buariki",
  },
  {
    iata: "IUE",
    name: "Niue International Airport",
    city: "Alofi",
  },
  {
    iata: "FUT",
    name: "Pointe Vele Airport",
    city: "Futuna Island",
  },
  {
    iata: "WLS",
    name: "Hihifo Airport",
    city: "Wallis Island",
  },
  {
    iata: "MWP",
    name: "Mountain Airport",
  },
  {
    iata: "TPJ",
    name: "Taplejung Airport",
    city: "Taplejung",
  },
  {
    iata: "OFU",
    name: "Ofu Village Airport",
    city: "Ofu Village",
  },
  {
    iata: "AAU",
    name: "Asau Airport",
    city: "Asau",
  },
  {
    iata: "APW",
    name: "Faleolo International Airport",
    city: "Apia",
  },
  {
    iata: "FGI",
    name: "Fagali'i Airport",
    city: "Apia",
  },
  {
    iata: "FAQ",
    name: "Fitiuta Airport",
    city: "Frieda River",
  },
  {
    iata: "MXS",
    name: "Maota Airport",
    city: "Maota",
  },
  {
    iata: "PPG",
    name: "Pago Pago International Airport",
    city: "Pago Pago",
  },
  {
    iata: "PPT",
    name: "Faa'a International Airport",
    city: "Papeete",
  },
  {
    iata: "RUR",
    name: "Rurutu Airport",
    city: "",
  },
  {
    iata: "TUB",
    name: "Tubuai Airport",
    city: "",
  },
  {
    iata: "AAA",
    name: "Anaa Airport",
    city: "",
  },
  {
    iata: "FGU",
    name: "Fangatau Airport",
    city: "",
  },
  {
    iata: "TIH",
    name: "Tikehau Airport",
    city: "",
  },
  {
    iata: "APK",
    name: "Apataki Airport",
    city: "Apataki",
  },
  {
    iata: "REA",
    name: "Reao Airport",
    city: "",
  },
  {
    iata: "FAV",
    name: "Fakarava Airport",
    city: "",
  },
  {
    iata: "HHZ",
    name: "Hikueru Atoll Airport",
    city: "Hikueru Atoll",
  },
  {
    iata: "XMH",
    name: "Manihi Airport",
    city: "",
  },
  {
    iata: "GMR",
    name: "Totegegie Airport",
    city: "",
  },
  {
    iata: "KKR",
    name: "Kaukura Airport",
    city: "",
  },
  {
    iata: "MKP",
    name: "Makemo Airport",
    city: "",
  },
  {
    iata: "NAU",
    name: "Napuka Island Airport",
    city: "Napuka Island",
  },
  {
    iata: "TKV",
    name: "Tatakoto Airport",
    city: "Tatakoto",
  },
  {
    iata: "PKP",
    name: "Puka Puka Airport",
    city: "",
  },
  {
    iata: "PUK",
    name: "Pukarua Airport",
    city: "Pukarua",
  },
  {
    iata: "TKP",
    name: "Takapoto Airport",
    city: "",
  },
  {
    iata: "AXR",
    name: "Arutua Airport",
    city: "",
  },
  {
    iata: "MVT",
    name: "Mataiva Airport",
    city: "",
  },
  {
    iata: "NUK",
    name: "Nukutavake Airport",
    city: "Nukutavake",
  },
  {
    iata: "ZTA",
    name: "Tureia Airport",
    city: "",
  },
  {
    iata: "AHE",
    name: "Ahe Airport",
    city: "Ahe Atoll",
  },
  {
    iata: "KHZ",
    name: "Kauehi Airport",
    city: "Kauehi",
  },
  {
    iata: "FAC",
    name: "Faaite Airport",
    city: "",
  },
  {
    iata: "FHZ",
    name: "Fakahina Airport",
    city: "Fakahina",
  },
  {
    iata: "TKX",
    name: "Takaroa Airport",
    city: "",
  },
  {
    iata: "NHV",
    name: "Nuku Hiva Airport",
    city: "",
  },
  {
    iata: "AUQ",
    name: "Hiva Oa-Atuona Airport",
    city: "",
  },
  {
    iata: "UAP",
    name: "Ua Pou Airport",
    city: "Ua Pou",
  },
  {
    iata: "UAH",
    name: "Ua Huka Airport",
    city: "Ua Huka",
  },
  {
    iata: "BOB",
    name: "Bora Bora Airport",
    city: "Motu Mute",
  },
  {
    iata: "TTI",
    name: "Tetiaroa Airport",
    city: "Tetiaroa",
  },
  {
    iata: "RGI",
    name: "Rangiroa Airport",
    city: "",
  },
  {
    iata: "HUH",
    name: "Huahine-Fare Airport",
    city: "Fare",
  },
  {
    iata: "MOZ",
    name: "Moorea Airport",
    city: "",
  },
  {
    iata: "HOI",
    name: "Hao Airport",
    city: "",
  },
  {
    iata: "MAU",
    name: "Maupiti Airport",
    city: "",
  },
  {
    iata: "RFP",
    name: "Raiatea Airport",
    city: "Uturoa",
  },
  {
    iata: "VHZ",
    name: "Vahitahi Airport",
    city: "Vahitahi",
  },
  {
    iata: "MTV",
    name: "Mota Lava Airport",
    city: "Ablow",
  },
  {
    iata: "SLH",
    name: "Sola Airport",
    city: "Sola",
  },
  {
    iata: "TOH",
    name: "Torres Airstrip",
    city: "Loh/Linua",
  },
  {
    iata: "EAE",
    name: "Sangafa Airport",
    city: "Sangafa",
  },
  {
    iata: "CCV",
    name: "Craig Cove Airport",
    city: "Craig Cove",
  },
  {
    iata: "LOD",
    name: "Longana Airport",
    city: "Longana",
  },
  {
    iata: "SSR",
    name: "Sara Airport",
    city: "Pentecost Island",
  },
  {
    iata: "PBJ",
    name: "Tavie Airport",
    city: "Paama Island",
  },
  {
    iata: "LPM",
    name: "Lamap Airport",
    city: "Lamap",
  },
  {
    iata: "LNB",
    name: "Lamen Bay Airport",
    city: "Lamen Bay",
  },
  {
    iata: "MWF",
    name: "Naone Airport",
    city: "Maewo Island",
  },
  {
    iata: "LNE",
    name: "Lonorore Airport",
    city: "Lonorore",
  },
  {
    iata: "NUS",
    name: "Norsup Airport",
    city: "Norsup",
  },
  {
    iata: "ZGU",
    name: "Gaua Island Airport",
    city: "Gaua Island",
  },
  {
    iata: "RCL",
    name: "Redcliffe Airport",
    city: "Redcliffe",
  },
  {
    iata: "SON",
    name: "Santo Pekoa International Airport",
    city: "Luganville",
  },
  {
    iata: "TGH",
    name: "Tongoa Island Airport",
    city: "Tongoa Island",
  },
  {
    iata: "ULB",
    name: null,
    city: "Ambryn Island",
  },
  {
    iata: "VLS",
    name: "Valesdir Airport",
    city: "Valesdir",
  },
  {
    iata: "WLH",
    name: "Walaha Airport",
    city: "Walaha",
  },
  {
    iata: "SWJ",
    name: "Southwest Bay Airport",
    city: "Malekula Island",
  },
  {
    iata: "OLJ",
    name: "North West Santo Airport",
    city: "Olpoi",
  },
  {
    iata: "AUY",
    name: "Anelghowhat Airport",
    city: "Anelghowhat",
  },
  {
    iata: "AWD",
    name: "Aniwa Airport",
    city: "Aniwa",
  },
  {
    iata: "DLY",
    name: "Dillon's Bay Airport",
    city: "Dillon's Bay",
  },
  {
    iata: "FTA",
    name: "Futuna Airport",
    city: "Futuna Island",
  },
  {
    iata: "IPA",
    name: "Ipota Airport",
    city: "Ipota",
  },
  {
    iata: "UIQ",
    name: "Quion Hill Airport",
    city: "Quion Hill",
  },
  {
    iata: "VLI",
    name: "Port Vila Bauerfield Airport",
    city: "Port Vila",
  },
  {
    iata: "TAH",
    name: "Tanna Airport",
    city: "",
  },
  {
    iata: "TGJ",
    name: "Tiga Airport",
    city: "Tiga",
  },
  {
    iata: "BMY",
    name: null,
    city: "Waala",
  },
  {
    iata: "KNQ",
    name: null,
    city: "Kone",
  },
  {
    iata: "ILP",
    name: null,
    city: "Ile des Pins",
  },
  {
    iata: "HLU",
    name: "Nesson Airport",
    city: "Houailou",
  },
  {
    iata: "KOC",
    name: "Koumac Airport",
    city: "Koumac",
  },
  {
    iata: "LIF",
    name: "Lifou Airport",
    city: "Lifou",
  },
  {
    iata: "GEA",
    name: null,
    city: "Noumea",
  },
  {
    iata: "IOU",
    name: null,
    city: "Ile Ouen",
  },
  {
    iata: "PUV",
    name: "Poum Airport",
    city: "Poum",
  },
  {
    iata: "PDC",
    name: "Mueo Airport",
    city: "Mueo",
  },
  {
    iata: "MEE",
    name: null,
    city: "Mare",
  },
  {
    iata: "TOU",
    name: "Touho Airport",
    city: "Touho",
  },
  {
    iata: "UVE",
    name: null,
    city: "Ouvea",
  },
  {
    iata: "NOU",
    name: "La Tontouta International Airport",
    city: "Noumea",
  },
  {
    iata: "AKL",
    name: "Auckland International Airport",
    city: "Auckland",
  },
  {
    iata: "TUO",
    name: "Taupo Airport",
    city: "Taupo",
  },
  {
    iata: "AMZ",
    name: "Ardmore Airport",
    city: "Manurewa",
  },
  {
    iata: "ASG",
    name: "Ashburton Aerodrome",
    city: "",
  },
  {
    iata: "CHC",
    name: "Christchurch International Airport",
    city: "Christchurch",
  },
  {
    iata: "CHT",
    name: "Chatham Islands-Tuuta Airport",
    city: "Waitangi",
  },
  {
    iata: "CMV",
    name: "Coromandel Aerodrome",
    city: "",
  },
  {
    iata: "DGR",
    name: "Dargaville Aerodrome",
    city: "",
  },
  {
    iata: "DUD",
    name: "Dunedin Airport",
    city: "Dunedin",
  },
  {
    iata: "FGL",
    name: "Fox Heliport",
  },
  {
    iata: "WHO",
    name: "Franz Josef Aerodrome",
    city: "",
  },
  {
    iata: "GBZ",
    name: "Great Barrier Aerodrome",
    city: "Claris",
  },
  {
    iata: "GMN",
    name: "Greymouth Airport",
    city: "",
  },
  {
    iata: "GIS",
    name: "Gisborne Airport",
    city: "Gisborne",
  },
  {
    iata: "GTN",
    name: "Glentanner Airport",
    city: "Glentanner Station",
  },
  {
    iata: "HKK",
    name: "Hokitika Airfield",
    city: "",
  },
  {
    iata: "HLZ",
    name: "Hamilton International Airport",
    city: "Hamilton",
  },
  {
    iata: "WIK",
    name: "Waiheke Reeve Airport",
    city: "",
  },
  {
    iata: "KBZ",
    name: "Kaikoura Airport",
    city: "",
  },
  {
    iata: "KKE",
    name: "Kerikeri Airport",
    city: "Kerikeri",
  },
  {
    iata: "KKO",
    name: "Kaikohe Airport",
    city: "",
  },
  {
    iata: "KAT",
    name: "Kaitaia Airport",
    city: "Kaitaia",
  },
  {
    iata: "ALR",
    name: "Alexandra Airport",
    city: "Alexandra",
  },
  {
    iata: "MTA",
    name: "Matamata Glider Airport",
    city: "",
  },
  {
    iata: "MON",
    name: "Mount Cook Airport",
    city: "",
  },
  {
    iata: "MFN",
    name: "Milford Sound Airport",
    city: "",
  },
  {
    iata: "MZP",
    name: "Motueka Airport",
    city: "",
  },
  {
    iata: "TEU",
    name: "Manapouri Airport",
    city: "",
  },
  {
    iata: "MRO",
    name: "Hood Airport",
    city: "Masterton",
  },
  {
    iata: "NPL",
    name: "New Plymouth Airport",
    city: "New Plymouth",
  },
  {
    iata: "NPE",
    name: "Napier Airport",
    city: "",
  },
  {
    iata: "NSN",
    name: "Nelson Airport",
    city: "Nelson",
  },
  {
    iata: "IVC",
    name: "Invercargill Airport",
    city: "Invercargill",
  },
  {
    iata: "OHA",
    name: "RNZAF Base Ohakea",
    city: "",
  },
  {
    iata: "OAM",
    name: "Oamaru Airport",
    city: "",
  },
  {
    iata: "PMR",
    name: "Palmerston North Airport",
    city: "",
  },
  {
    iata: "PCN",
    name: "Picton Aerodrome",
    city: "Picton",
  },
  {
    iata: "PPQ",
    name: "Paraparaumu Airport",
    city: "",
  },
  {
    iata: "ZQN",
    name: "Queenstown International Airport",
    city: "Queenstown",
  },
  {
    iata: "RAG",
    name: "Raglan Airfield",
    city: "",
  },
  {
    iata: "SZS",
    name: "Ryans Creek Aerodrome",
    city: "Oban",
  },
  {
    iata: "ROT",
    name: "Rotorua Regional Airport",
    city: "Rotorua",
  },
  {
    iata: "TRG",
    name: "Tauranga Airport",
    city: "Tauranga",
  },
  {
    iata: "TMZ",
    name: "Thames Aerodrome",
    city: "",
  },
  {
    iata: "KTF",
    name: "Takaka Airport",
    city: "",
  },
  {
    iata: "TKZ",
    name: "Tokoroa Airfield",
    city: "Tokoroa",
  },
  {
    iata: "THH",
    name: "Taharoa Aerodrome",
    city: "Taharoa",
  },
  {
    iata: "TIU",
    name: "Timaru Airport",
    city: "",
  },
  {
    iata: "TWZ",
    name: "Pukaki Airport",
    city: "Twitzel",
  },
  {
    iata: "BHE",
    name: "Woodbourne Airport",
    city: "Blenheim",
  },
  {
    iata: "WKA",
    name: "Wanaka Airport",
    city: "",
  },
  {
    iata: "WHK",
    name: "Whakatane Airport",
    city: "",
  },
  {
    iata: "WLG",
    name: "Wellington International Airport",
    city: "Wellington",
  },
  {
    iata: "WIR",
    name: "Wairoa Airport",
    city: "Wairoa",
  },
  {
    iata: "WRE",
    name: "Whangarei Airport",
    city: "",
  },
  {
    iata: "WSZ",
    name: "Westport Airport",
    city: "",
  },
  {
    iata: "WTZ",
    name: "Whitianga Airport",
    city: "",
  },
  {
    iata: "WAG",
    name: "Wanganui Airport",
    city: "Wanganui",
  },
  {
    iata: "O62",
    name: "Carmel Valley",
  },
  {
    iata: "BZF",
    name: "Benton Field",
  },
  {
    iata: "OAA",
    name: "Shank Air Base",
  },
  {
    iata: "BIN",
    name: "Bamiyan Airport",
    city: "Bamiyan",
  },
  {
    iata: "BST",
    name: "Bost Airport",
    city: "Bost",
  },
  {
    iata: "CCN",
    name: "Chakcharan Airport",
    city: "Chakcharan",
  },
  {
    iata: "DAZ",
    name: "Darwaz Airport",
    city: "Darwaz",
  },
  {
    iata: "FAH",
    name: "Farah Airport",
    city: "Farah",
  },
  {
    iata: "FBD",
    name: "Faizabad Airport",
    city: "Faizabad",
  },
  {
    iata: "KWH",
    name: "Khwahan Airport",
    city: "Khwahan",
  },
  {
    iata: "HEA",
    name: "Herat Airport",
    city: "",
  },
  {
    iata: "OAI",
    name: "Bagram Air Base",
    city: "Bagram",
  },
  {
    iata: "JAA",
    name: "Jalalabad Airport",
    city: "",
  },
  {
    iata: "KBL",
    name: "Kabul International Airport",
    city: "Kabul",
  },
  {
    iata: "KDH",
    name: "Kandahar Airport",
    city: "",
  },
  {
    iata: "KHT",
    name: "Khost Airport",
    city: "Khost",
  },
  {
    iata: "MMZ",
    name: "Maimana Airport",
    city: "",
  },
  {
    iata: "MZR",
    name: "Mazar I Sharif Airport",
    city: "",
  },
  {
    iata: "LQN",
    name: "Qala-I-Naw Airport",
    city: "Qala-I-Naw",
  },
  {
    iata: "OAS",
    name: "Sharana Airstrip",
    city: "Sharana",
  },
  {
    iata: "OAH",
    name: "Shindand Airport",
    city: "",
  },
  {
    iata: "SGA",
    name: "Sheghnan Airport",
    city: "Sheghnan",
  },
  {
    iata: "TII",
    name: "Tereen Airport",
    city: "Tarin Kowt",
  },
  {
    iata: "UND",
    name: "Konduz Airport",
    city: "",
  },
  {
    iata: "OAZ",
    name: "Camp Bastion Airport",
    city: "",
  },
  {
    iata: "ZAJ",
    name: "Zaranj Airport",
    city: "Zaranj",
  },
  {
    iata: "BAH",
    name: "Bahrain International Airport",
    city: "Manama",
  },
  {
    iata: "OBK",
    name: "Sky Harbor Airport",
  },
  {
    iata: "AHB",
    name: "Abha Regional Airport",
    city: "Abha",
  },
  {
    iata: "HOF",
    name: "Al Ahsa Airport",
    city: "",
  },
  {
    iata: "ABT",
    name: "Al Baha Airport",
    city: "",
  },
  {
    iata: "BHH",
    name: "Bisha Airport",
    city: "",
  },
  {
    iata: "DMM",
    name: "King Fahd International Airport",
    city: "Ad Dammam",
  },
  {
    iata: "DHA",
    name: "King Abdulaziz Air Base",
    city: "",
  },
  {
    iata: "DWD",
    name: "Dawadmi Domestic Airport",
    city: "Dawadmi",
  },
  {
    iata: "GIZ",
    name: "Jizan Regional Airport",
    city: "Jizan",
  },
  {
    iata: "ELQ",
    name: "Gassim Airport",
    city: "",
  },
  {
    iata: "URY",
    name: "Guriat Domestic Airport",
    city: "",
  },
  {
    iata: "HAS",
    name: "Hail Airport",
    city: "",
  },
  {
    iata: "QJB",
    name: "Jubail Airport",
    city: "Jubail",
  },
  {
    iata: "JED",
    name: "King Abdulaziz International Airport",
    city: "Jeddah",
  },
  {
    iata: "HBT",
    name: "King Khaled Military City Airport",
    city: "King Khaled Military City",
  },
  {
    iata: "KMX",
    name: "King Khaled Air Base",
    city: "",
  },
  {
    iata: "MED",
    name: "Prince Mohammad Bin Abdulaziz Airport",
    city: "Medina",
  },
  {
    iata: "EAM",
    name: "Nejran Airport",
    city: "",
  },
  {
    iata: "AQI",
    name: "Hafr Al Batin Airport",
    city: "Qaisumah",
  },
  {
    iata: "AKH",
    name: "Prince Sultan Air Base",
    city: "",
  },
  {
    iata: "RAH",
    name: "Rafha Domestic Airport",
    city: "Rafha",
  },
  {
    iata: "RUH",
    name: "King Khaled International Airport",
    city: "Riyadh",
  },
  {
    iata: "RAE",
    name: "Arar Domestic Airport",
    city: "Arar",
  },
  {
    iata: "XXN",
    name: "Riyadh Air Base",
    city: "Riyadh",
  },
  {
    iata: "SHW",
    name: "Sharurah Airport",
    city: "",
  },
  {
    iata: "AJF",
    name: "Al-Jawf Domestic Airport",
    city: "Al-Jawf",
  },
  {
    iata: "SLF",
    name: "Sulayel Airport",
    city: "",
  },
  {
    iata: "TUU",
    name: "Tabuk Airport",
    city: "",
  },
  {
    iata: "TIF",
    name: "Taif Airport",
    city: "",
  },
  {
    iata: "TUI",
    name: "Turaif Domestic Airport",
    city: "",
  },
  {
    iata: "EWD",
    name: "Wadi Al Dawasir Airport",
  },
  {
    iata: "EJH",
    name: "Al Wajh Domestic Airport",
    city: "Al Wajh",
  },
  {
    iata: "YNB",
    name: "Yenbo Airport",
    city: "",
  },
  {
    iata: "ZUL",
    name: "Zilfi Airport",
    city: "Zilfi",
  },
  {
    iata: "OHE",
    name: "Gu-Lian Airport",
    city: "Mohe",
  },
  {
    iata: "ABD",
    name: "Abadan Airport",
    city: "Abadan",
  },
  {
    iata: "OMI",
    name: "Omidiyeh Airport",
    city: "Omidiyeh",
  },
  {
    iata: "MRX",
    name: "Mahshahr Airport",
    city: "",
  },
  {
    iata: "AWZ",
    name: "Ahwaz Airport",
    city: "Ahwaz",
  },
  {
    iata: "AEU",
    name: "Abumusa Island Airport",
    city: "",
  },
  {
    iata: "BUZ",
    name: "Bushehr Airport",
    city: "Bushehr",
  },
  {
    iata: "AOY",
    name: "Asaloyeh Airport",
    city: "Asaloyeh",
  },
  {
    iata: "KNR",
    name: "Jam Airport",
    city: "Kangan",
  },
  {
    iata: "KIH",
    name: "Kish International Airport",
    city: "Kish Island",
  },
  {
    iata: "BDH",
    name: "Bandar Lengeh Airport",
    city: "Bandar Lengeh",
  },
  {
    iata: "YEH",
    name: "Persian Gulf International Airport",
    city: "Asalouyeh",
  },
  {
    iata: "KHK",
    name: "Khark Island Airport",
    city: "",
  },
  {
    iata: "SXI",
    name: "Sirri Island Airport",
    city: "",
  },
  {
    iata: "LVP",
    name: "Lavan Island Airport",
    city: "",
  },
  {
    iata: "KSH",
    name: "Shahid Ashrafi Esfahani Airport",
    city: "Kermanshah",
  },
  {
    iata: "IIL",
    name: "Ilam Airport",
    city: "Ilam",
  },
  {
    iata: "KHD",
    name: "Khoram Abad Airport",
    city: "",
  },
  {
    iata: "SDG",
    name: "Sanandaj Airport",
    city: "",
  },
  {
    iata: "IFH",
    name: "Hesa Airport",
    city: "Hesa",
  },
  {
    iata: "IFN",
    name: "Esfahan Shahid Beheshti International Airport",
    city: "Isfahan",
  },
  {
    iata: "CQD",
    name: "Shahrekord Airport",
    city: "Shahrekord",
  },
  {
    iata: "RAS",
    name: "Rasht Airport",
    city: "Rasht",
  },
  {
    iata: "HDM",
    name: "Hamadan Airport",
    city: "Hamadan",
  },
  {
    iata: "AJK",
    name: "Arak Airport",
    city: "Araak",
  },
  {
    iata: "IKA",
    name: "Imam Khomeini International Airport",
    city: "Tehran",
  },
  {
    iata: "THR",
    name: "Mehrabad International Airport",
    city: "Tehran",
  },
  {
    iata: "BND",
    name: "Bandar Abbas International Airport",
    city: "Bandar Abbas",
  },
  {
    iata: "KER",
    name: "Kerman Airport",
    city: "Kerman",
  },
  {
    iata: "BXR",
    name: "Bam Airport",
    city: "",
  },
  {
    iata: "HDR",
    name: "Havadarya Airport",
    city: "Havadarya",
  },
  {
    iata: "RJN",
    name: "Rafsanjan Airport",
    city: "",
  },
  {
    iata: "SYJ",
    name: "Sirjan Airport",
    city: "",
  },
  {
    iata: "XBJ",
    name: "Birjand Airport",
    city: "Birjand",
  },
  {
    iata: "CKT",
    name: "Sarakhs Airport",
    city: "Sarakhs",
  },
  {
    iata: "MHD",
    name: "Mashhad International Airport",
    city: "Mashhad",
  },
  {
    iata: "BJB",
    name: "Bojnord Airport",
    city: "Bojnord",
  },
  {
    iata: "AFZ",
    name: "Sabzevar National Airport",
    city: "Sabzevar",
  },
  {
    iata: "TCX",
    name: "Tabas Airport",
    city: "Tabas",
  },
  {
    iata: "BBL",
    name: "Babolsar Airport",
    city: "Babolsar",
  },
  {
    iata: "GBT",
    name: "Gorgan Airport",
    city: "Gorgan",
  },
  {
    iata: "BSM",
    name: "Bishe Kola Air Base",
    city: "Amol",
  },
  {
    iata: "NSH",
    name: "Noshahr Airport",
    city: "",
  },
  {
    iata: "RZR",
    name: "Ramsar Airport",
    city: "",
  },
  {
    iata: "SRY",
    name: "Dasht-e Naz Airport",
    city: "Sari",
  },
  {
    iata: "FAZ",
    name: "Fasa Airport",
    city: "Fasa",
  },
  {
    iata: "LRR",
    name: "Lar Airport",
    city: "Lar",
  },
  {
    iata: "SYZ",
    name: "Shiraz Shahid Dastghaib International Airport",
    city: "Shiraz",
  },
  {
    iata: "KHY",
    name: "Khoy Airport",
    city: "Khoy",
  },
  {
    iata: "ADU",
    name: "Ardabil Airport",
    city: "Ardabil",
  },
  {
    iata: "ACP",
    name: "Sahand Airport",
    city: "Maragheh",
  },
  {
    iata: "PFQ",
    name: "Parsabade Moghan Airport",
    city: "Parsabad",
  },
  {
    iata: "OMH",
    name: "Urmia Airport",
    city: "Urmia",
  },
  {
    iata: "TBZ",
    name: "Tabriz International Airport",
    city: "Tabriz",
  },
  {
    iata: "AZD",
    name: "Shahid Sadooghi Airport",
    city: "Yazd",
  },
  {
    iata: "ACZ",
    name: "Zabol Airport",
    city: "",
  },
  {
    iata: "ZBR",
    name: "Konarak Airport",
    city: "Chabahar",
  },
  {
    iata: "ZAH",
    name: "Zahedan International Airport",
    city: "Zahedan",
  },
  {
    iata: "AMM",
    name: "Queen Alia International Airport",
    city: "Amman",
  },
  {
    iata: "ADJ",
    name: "Amman-Marka International Airport",
    city: "Amman",
  },
  {
    iata: "AQJ",
    name: "Aqaba King Hussein International Airport",
    city: "Aqaba",
  },
  {
    iata: "JRS",
    name: "Jerusalem Airport",
  },
  {
    iata: "OMF",
    name: "King Hussein Air College",
    city: "Mafraq",
  },
  {
    iata: "KWI",
    name: "Kuwait International Airport",
    city: "Kuwait City",
  },
  {
    iata: "BEY",
    name: "Beirut Rafic Hariri International Airport",
    city: "Beirut",
  },
  {
    iata: "KYE",
    name: "Rene Mouawad Air Base",
    city: "Tripoli",
  },
  {
    iata: "BYB",
    name: "Dibba Airport",
  },
  {
    iata: "AOM",
    name: "Adam Airport",
  },
  {
    iata: "AUH",
    name: "Abu Dhabi International Airport",
    city: "Abu Dhabi",
  },
  {
    iata: "AZI",
    name: "Bateen Airport",
    city: "",
  },
  {
    iata: "AAN",
    name: "Al Ain International Airport",
    city: "Al Ain",
  },
  {
    iata: "DXB",
    name: "Dubai International Airport",
    city: "Dubai",
  },
  {
    iata: "NHD",
    name: "Al Minhad Air Base",
    city: "Dubai",
  },
  {
    iata: "DWC",
    name: "Al Maktoum International Airport",
    city: "Jebel Ali",
  },
  {
    iata: "FJR",
    name: "Fujairah International Airport",
    city: "",
  },
  {
    iata: "RKT",
    name: "Ras Al Khaimah International Airport",
    city: "Ras Al Khaimah",
  },
  {
    iata: "SHJ",
    name: "Sharjah International Airport",
    city: "Sharjah",
  },
  {
    iata: "RMB",
    name: "Buraimi Airport",
    city: "Buraimi",
  },
  {
    iata: "KHS",
    name: "Khasab Air Base",
    city: "Khasab",
  },
  {
    iata: "MSH",
    name: "Masirah Air Base",
    city: "Masirah",
  },
  {
    iata: "MCT",
    name: "Muscat International Airport",
    city: "Muscat",
  },
  {
    iata: "OMM",
    name: "Marmul Airport",
    city: "Marmul",
  },
  {
    iata: "SLL",
    name: "Salalah Airport",
    city: "Salalah",
  },
  {
    iata: "SUH",
    name: "Sur Airport",
    city: "Sur",
  },
  {
    iata: "TTH",
    name: "Thumrait Air Base",
    city: "Thumrait",
  },
  {
    iata: "DDU",
    name: "Dadu West Airport",
    city: "Dadu",
  },
  {
    iata: "AAW",
    name: "Abbottabad Airport",
    city: "Abbottabad",
  },
  {
    iata: "BNP",
    name: "Bannu Airport",
    city: "Bannu",
  },
  {
    iata: "WGB",
    name: "Bahawalnagar Airport",
    city: "Bahawalnagar",
  },
  {
    iata: "BHV",
    name: "Bahawalpur Airport",
    city: "Bahawalpur",
  },
  {
    iata: "CJL",
    name: "Chitral Airport",
    city: "Chitral",
  },
  {
    iata: "CHB",
    name: "Chilas Airport",
    city: "Chilas",
  },
  {
    iata: "DBA",
    name: "Dalbandin Airport",
    city: "Dalbandin",
  },
  {
    iata: "DDU",
    name: "Dadu Airport",
    city: "Dadu",
  },
  {
    iata: "DEA",
    name: "Dera Ghazi Khan Airport",
    city: "Dera Ghazi Khan",
  },
  {
    iata: "DSK",
    name: "Dera Ismael Khan Airport",
    city: "Dera Ismael Khan",
  },
  {
    iata: "LYP",
    name: "Faisalabad International Airport",
    city: "Faisalabad",
  },
  {
    iata: "GWD",
    name: "Gwadar International Airport",
    city: "Gwadar",
  },
  {
    iata: "GIL",
    name: "Gilgit Airport",
    city: "Gilgit",
  },
  {
    iata: "JAG",
    name: "Shahbaz Air Base",
    city: "Jacobabad",
  },
  {
    iata: "JIW",
    name: "Jiwani Airport",
    city: "Jiwani",
  },
  {
    iata: "KHI",
    name: "Jinnah International Airport",
    city: "Karachi",
  },
  {
    iata: "HDD",
    name: "Hyderabad Airport",
    city: "Hyderabad",
  },
  {
    iata: "KDD",
    name: "Khuzdar Airport",
    city: "Khuzdar",
  },
  {
    iata: "KBH",
    name: "Kalat Airport",
    city: "Kalat",
  },
  {
    iata: "OHT",
    name: "Kohat Airport",
    city: "Kohat",
  },
  {
    iata: "LHE",
    name: "Alama Iqbal International Airport",
    city: "Lahore",
  },
  {
    iata: "LRG",
    name: "Loralai Airport",
    city: "Loralai",
  },
  {
    iata: "XJM",
    name: "Mangla Airport",
    city: "Mangla",
  },
  {
    iata: "MFG",
    name: "Muzaffarabad Airport",
    city: "Muzaffarabad",
  },
  {
    iata: "MWD",
    name: "Mianwali Air Base",
    city: "Mianwali",
  },
  {
    iata: "MJD",
    name: "Moenjodaro Airport",
    city: "Moenjodaro",
  },
  {
    iata: "MPD",
    name: "Mirpur Khas Air Base",
    city: "Sindhri",
  },
  {
    iata: "MPD",
    name: "Sindhri Tharparkar Airport",
    city: "Sindhri",
  },
  {
    iata: "MUX",
    name: "Multan International Airport",
    city: "Multan",
  },
  {
    iata: "WNS",
    name: "Nawabshah Airport",
    city: "Nawabash",
  },
  {
    iata: "NHS",
    name: "Nushki Airport",
    city: "Nushki",
  },
  {
    iata: "ORW",
    name: "Ormara Airport",
    city: "Ormara Raik",
  },
  {
    iata: "PAJ",
    name: "Parachinar Airport",
    city: "Parachinar",
  },
  {
    iata: "PJG",
    name: "Panjgur Airport",
    city: "Panjgur",
  },
  {
    iata: "PSI",
    name: "Pasni Airport",
    city: "Pasni",
  },
  {
    iata: "PEW",
    name: "Peshawar International Airport",
    city: "Peshawar",
  },
  {
    iata: "UET",
    name: "Quetta International Airport",
    city: "Quetta",
  },
  {
    iata: "RYK",
    name: "Shaikh Zaid Airport",
    city: "Rahim Yar Khan",
  },
  {
    iata: "ISB",
    name: "Benazir Bhutto International Airport",
    city: "Islamabad",
  },
  {
    iata: "RAZ",
    name: "Rawalakot Airport",
    city: "Rawalakot",
  },
  {
    iata: "SBQ",
    name: "Sibi Airport",
    city: "Sibi",
  },
  {
    iata: "KDU",
    name: "Skardu Airport",
    city: "Skardu",
  },
  {
    iata: "SKZ",
    name: "Sukkur Airport",
    city: "Mirpur Khas",
  },
  {
    iata: "SYW",
    name: "Sehwan Sharif Airport",
    city: "Sehwan Sharif",
  },
  {
    iata: "SGI",
    name: "Mushaf Air Base",
    city: "Sargodha",
  },
  {
    iata: "SDT",
    name: "Saidu Sharif Airport",
    city: "Saidu Sharif",
  },
  {
    iata: "SKT",
    name: "Sialkot Airport",
    city: "Sialkot",
  },
  {
    iata: "SUL",
    name: "Sui Airport",
    city: "Sui",
  },
  {
    iata: "SWN",
    name: "Sahiwal Airport",
    city: "Sahiwal",
  },
  {
    iata: "TLB",
    name: "Tarbela Dam Airport",
    city: "Tarbela",
  },
  {
    iata: "BDN",
    name: "Talhar Airport",
    city: "Badin",
  },
  {
    iata: "TFT",
    name: "Taftan Airport",
    city: "Taftan",
  },
  {
    iata: "TUK",
    name: "Turbat International Airport",
    city: "Turbat",
  },
  {
    iata: "WAF",
    name: "Wana Airport",
    city: "Waana",
  },
  {
    iata: "PZH",
    name: "Zhob Airport",
    city: "Fort Sandeman",
  },
  {
    iata: "IQA",
    name: "Al Asad Air Base",
    city: "Hit",
  },
  {
    iata: "BMN",
    name: "Bamarni Airport",
    city: "Bamarni",
  },
  {
    iata: "SDA",
    name: "Baghdad International Airport",
  },
  {
    iata: "OSB",
    name: "Mosul International Airport",
    city: "Mosul",
  },
  {
    iata: "EBL",
    name: "Erbil International Airport",
    city: "Arbil",
  },
  {
    iata: "KIK",
    name: "Kirkuk Air Base",
    city: "Kirkuk",
  },
  {
    iata: "BSR",
    name: "Basrah International Airport",
    city: "Basrah",
  },
  {
    iata: "OSO",
    name: "Sulaymaniyah International Airport",
    city: "",
  },
  {
    iata: "ALP",
    name: "Aleppo International Airport",
    city: "Aleppo",
  },
  {
    iata: "DAM",
    name: "Damascus International Airport",
    city: "Damascus",
  },
  {
    iata: "DEZ",
    name: "Deir ez-Zor Airport",
    city: "Deir ez-Zor",
  },
  {
    iata: "KAC",
    name: "Kamishly Airport",
    city: "Kamishly",
  },
  {
    iata: "LTK",
    name: "Bassel Al-Assad International Airport",
    city: "Latakia",
  },
  {
    iata: "PMS",
    name: "Palmyra Airport",
    city: "",
  },
  {
    iata: "DOH",
    name: "Doha International Airport",
    city: "Doha",
  },
  {
    iata: "IUD",
    name: "Al Udeid Air Base",
    city: "Ar Rayyan",
  },
  {
    iata: "OTT",
    name: "Andre Maggi Airport",
  },
  {
    iata: "ADE",
    name: "Aden International Airport",
    city: "Aden",
  },
  {
    iata: "EAB",
    name: "Abbse Airport",
  },
  {
    iata: "AXK",
    name: "Ataq Airport",
    city: "",
  },
  {
    iata: "BHN",
    name: "Beihan Airport",
    city: "",
  },
  {
    iata: "AAY",
    name: "Al Ghaidah International Airport",
    city: "",
  },
  {
    iata: "HOD",
    name: "Hodeidah International Airport",
    city: "Hodeida",
  },
  {
    iata: "MYN",
    name: "Mareb Airport",
    city: "Mareb",
  },
  {
    iata: "IHN",
    name: "Qishn Airport",
    city: "Qishn",
  },
  {
    iata: "RIY",
    name: "Mukalla International Airport",
    city: "Riyan",
  },
  {
    iata: "SYE",
    name: "Sadah Airport",
    city: "Sadah",
  },
  {
    iata: "SAH",
    name: "Sana'a International Airport",
    city: "Sana'a",
  },
  {
    iata: "SCT",
    name: "Socotra International Airport",
    city: "Socotra Islands",
  },
  {
    iata: "GXF",
    name: "Sayun International Airport",
    city: "Sayun",
  },
  {
    iata: "TAI",
    name: "Ta'izz International Airport",
    city: "Ta'izz",
  },
  {
    iata: "ACU",
    name: "Achutupo Airport",
  },
  {
    iata: "AIL",
    name: "Alligandi Airport",
  },
  {
    iata: "AML",
    name: "Puerto Armuelles Airport",
  },
  {
    iata: "BFQ",
    name: null,
  },
  {
    iata: "ELE",
    name: "EL Real Airport",
  },
  {
    iata: "OTD",
    name: "Contadora Airport",
  },
  {
    iata: "SAX",
    name: "Sambu Airport",
  },
  {
    iata: "AKB",
    name: "Atka Airport",
    city: "Atka",
  },
  {
    iata: "PTD",
    name: "Port Alexander Seaplane Base",
  },
  {
    iata: "PAQ",
    name: "Palmer Municipal Airport",
    city: "Palmer",
  },
  {
    iata: "BTI",
    name: "Barter Island Lrrs Airport",
    city: "Barter Island Lrrs",
  },
  {
    iata: "BET",
    name: "Bethel Airport",
    city: "Bethel",
  },
  {
    iata: "BVU",
    name: "Beluga Airport",
    city: "Beluga",
  },
  {
    iata: "BIG",
    name: "Allen Army Airfield",
    city: "Delta Junction Ft Greely",
  },
  {
    iata: "BKC",
    name: "Buckland Airport",
    city: "Buckland",
  },
  {
    iata: "BRW",
    name: "Wiley Post Will Rogers Memorial Airport",
    city: "Barrow",
  },
  {
    iata: "BTT",
    name: "Bettles Airport",
    city: "Bettles",
  },
  {
    iata: "CDB",
    name: "Cold Bay Airport",
    city: "Cold Bay",
  },
  {
    iata: "CLF",
    name: "Clear Airport",
  },
  {
    iata: "CDV",
    name: "Merle K (Mudhole) Smith Airport",
    city: "Cordova",
  },
  {
    iata: "CZF",
    name: "Cape Romanzof Lrrs Airport",
    city: "Cape Romanzof",
  },
  {
    iata: "DRG",
    name: "Deering Airport",
    city: "Deering",
  },
  {
    iata: "ADK",
    name: "Adak Airport",
    city: "Adak Island",
  },
  {
    iata: "DLG",
    name: "Dillingham Airport",
    city: "Dillingham",
  },
  {
    iata: "ADQ",
    name: "Kodiak Airport",
    city: "Kodiak",
  },
  {
    iata: "DUT",
    name: "Unalaska Airport",
    city: "Unalaska",
  },
  {
    iata: "EDF",
    name: "Elmendorf Air Force Base",
    city: "Anchorage",
  },
  {
    iata: "EEK",
    name: "Eek Airport",
    city: "Eek",
  },
  {
    iata: "EHM",
    name: "Cape Newenham Lrrs Airport",
    city: "Cape Newenham",
  },
  {
    iata: "EIL",
    name: "Eielson Air Force Base",
    city: "Fairbanks",
  },
  {
    iata: "ENM",
    name: "Emmonak Airport",
  },
  {
    iata: "ENA",
    name: "Kenai Municipal Airport",
    city: "Kenai",
  },
  {
    iata: "FAI",
    name: "Fairbanks International Airport",
    city: "Fairbanks",
  },
  {
    iata: "FBK",
    name: "Ladd AAF Airfield",
    city: "Fairbanks/Ft Wainwright",
  },
  {
    iata: "AFE",
    name: "Kake Airport",
    city: "Kake",
  },
  {
    iata: "ABL",
    name: "Ambler Airport",
    city: "Ambler",
  },
  {
    iata: "FRN",
    name: "Bryant Army Air Force Airport",
  },
  {
    iata: "FMC",
    name: "Five Mile Airport",
    city: "Five Mile",
  },
  {
    iata: "GAL",
    name: "Edward G. Pitka Sr Airport",
    city: "Galena",
  },
  {
    iata: "GKN",
    name: "Gulkana Airport",
    city: "Gulkana",
  },
  {
    iata: "GAM",
    name: "Gambell Airport",
    city: "Gambell",
  },
  {
    iata: "AGN",
    name: "Angoon Seaplane Base",
  },
  {
    iata: "GST",
    name: "Gustavus Airport",
    city: "Gustavus",
  },
  {
    iata: "SGY",
    name: "Skagway Airport",
    city: "Skagway",
  },
  {
    iata: "HCR",
    name: "Holy Cross Airport",
    city: "Holy Cross",
  },
  {
    iata: "HNS",
    name: "Haines Airport",
    city: "Haines",
  },
  {
    iata: "HOM",
    name: "Homer Airport",
    city: "Homer",
  },
  {
    iata: "HPB",
    name: "Hooper Bay Airport",
    city: "Hooper Bay",
  },
  {
    iata: "HYG",
    name: "Hydaburg Seaplane Base",
  },
  {
    iata: "IGG",
    name: "Igiugig Airport",
    city: "Igiugig",
  },
  {
    iata: "EII",
    name: "Egegik Airport",
  },
  {
    iata: "IAN",
    name: "Bob Baker Memorial Airport",
    city: "Kiana",
  },
  {
    iata: "ILI",
    name: "Iliamna Airport",
    city: "Iliamna",
  },
  {
    iata: "UTO",
    name: "Indian Mountain Lrrs Airport",
    city: "Utopia Creek",
  },
  {
    iata: "JNU",
    name: "Juneau International Airport",
    city: "Juneau",
  },
  {
    iata: "KFP",
    name: "False Pass Airport",
    city: "False Pass",
  },
  {
    iata: "AKK",
    name: "Akhiok Airport",
    city: "Akhiok",
  },
  {
    iata: "AKN",
    name: "King Salmon Airport",
    city: "King Salmon",
  },
  {
    iata: "IKO",
    name: "Nikolski Air Station",
    city: "Nikolski",
  },
  {
    iata: "AKP",
    name: "Anaktuvuk Pass Airport",
    city: "Anaktuvuk Pass",
  },
  {
    iata: "KTN",
    name: "Ketchikan International Airport",
    city: "Ketchikan",
  },
  {
    iata: "KAL",
    name: "Kaltag Airport",
    city: "Kaltag",
  },
  {
    iata: "AKW",
    name: "Klawock Airport",
    city: "",
  },
  {
    iata: "KLG",
    name: "Kalskag Airport",
    city: "Kalskag",
  },
  {
    iata: "LUR",
    name: "Cape Lisburne Lrrs Airport",
    city: "Cape Lisburne",
  },
  {
    iata: "MCG",
    name: "McGrath Airport",
    city: "McGrath",
  },
  {
    iata: "MOU",
    name: "Mountain Village Airport",
    city: "Mountain Village",
  },
  {
    iata: "MRI",
    name: "Merrill Field",
    city: "Anchorage",
  },
  {
    iata: "MYU",
    name: "Mekoryuk Airport",
    city: "Mekoryuk",
  },
  {
    iata: "WNA",
    name: "Napakiak Airport",
    city: "Napakiak",
  },
  {
    iata: "ANC",
    name: "Ted Stevens Anchorage International Airport",
    city: "Anchorage",
  },
  {
    iata: "ANI",
    name: "Aniak Airport",
    city: "Aniak",
  },
  {
    iata: "ENN",
    name: "Nenana Municipal Airport",
    city: "Nenana",
  },
  {
    iata: "ANN",
    name: "Annette Island Airport",
    city: "Annette",
  },
  {
    iata: "ANV",
    name: "Anvik Airport",
    city: "Anvik",
  },
  {
    iata: "KNW",
    name: "New Stuyahok Airport",
    city: "New Stuyahok",
  },
  {
    iata: "PCA",
    name: "Portage Creek Airport",
    city: "Portage Creek",
  },
  {
    iata: "HNH",
    name: "Hoonah Airport",
    city: "Hoonah",
  },
  {
    iata: "OME",
    name: "Nome Airport",
    city: "Nome",
  },
  {
    iata: "ORT",
    name: "Northway Airport",
    city: "Northway",
  },
  {
    iata: "OTZ",
    name: "Ralph Wien Memorial Airport",
    city: "Kotzebue",
  },
  {
    iata: "PBV",
    name: "St George Airport",
    city: "St George",
  },
  {
    iata: "KPC",
    name: "Port Clarence Coast Guard Station",
    city: "Port Clarence",
  },
  {
    iata: "PSG",
    name: "Petersburg James A Johnson Airport",
    city: "Petersburg",
  },
  {
    iata: "PTH",
    name: "Port Heiden Airport",
    city: "Port Heiden",
  },
  {
    iata: "PTU",
    name: "Platinum Airport",
    city: "Platinum",
  },
  {
    iata: "PHO",
    name: "Point Hope Airport",
    city: "Point Hope",
  },
  {
    iata: "NUI",
    name: "Nuiqsut Airport",
    city: "Nuiqsut",
  },
  {
    iata: "ARC",
    name: "Arctic Village Airport",
    city: "Arctic Village",
  },
  {
    iata: "RBY",
    name: "Ruby Airport",
    city: "Ruby",
  },
  {
    iata: "SVA",
    name: "Savoonga Airport",
    city: "Savoonga",
  },
  {
    iata: "SCC",
    name: "Deadhorse Airport",
    city: "Deadhorse",
  },
  {
    iata: "SDP",
    name: "Sand Point Airport",
    city: "Sand Point",
  },
  {
    iata: "SHH",
    name: "Shishmaref Airport",
    city: "Shishmaref",
  },
  {
    iata: "SIT",
    name: "Sitka Rocky Gutierrez Airport",
    city: "Sitka",
  },
  {
    iata: "KSM",
    name: "St Mary's Airport",
    city: "St Mary's",
  },
  {
    iata: "SNP",
    name: "St Paul Island Airport",
    city: "St Paul Island",
  },
  {
    iata: "SVW",
    name: "Sparrevohn Lrrs Airport",
    city: "Sparrevohn",
  },
  {
    iata: "SXQ",
    name: "Soldotna Airport",
    city: "Soldotna",
  },
  {
    iata: "SYA",
    name: "Eareckson Air Station",
    city: "Shemya",
  },
  {
    iata: "TOG",
    name: "Togiak Airport",
    city: "Togiak Village",
  },
  {
    iata: "TKJ",
    name: "Tok Airport",
    city: "Tok",
  },
  {
    iata: "TLJ",
    name: "Tatalina LRRS Airport",
    city: "Takotna",
  },
  {
    iata: "ATK",
    name: "Atqasuk Edward Burnell Sr Memorial Airport",
    city: "Atqasuk",
  },
  {
    iata: "VAK",
    name: "Chevak Airport",
    city: "Chevak",
  },
  {
    iata: "KVC",
    name: "King Cove Airport",
    city: "King Cove",
  },
  {
    iata: "VDZ",
    name: "Valdez Pioneer Field",
    city: "Valdez",
  },
  {
    iata: "KVL",
    name: "Kivalina Airport",
    city: "Kivalina",
  },
  {
    iata: "SWD",
    name: "Seward Airport",
    city: "Seward",
  },
  {
    iata: "WRG",
    name: "Wrangell Airport",
    city: "Wrangell",
  },
  {
    iata: "AIN",
    name: "Wainwright Airport",
    city: "Wainwright",
  },
  {
    iata: "WTK",
    name: "Noatak Airport",
    city: "Noatak",
  },
  {
    iata: "IYS",
    name: "Wasilla Airport",
    city: "Wasilla",
  },
  {
    iata: "CIS",
    name: "Canton Airport",
    city: "Abariringa",
  },
  {
    iata: "PCQ",
    name: "Bounneau Airport",
  },
  {
    iata: "MFT",
    name: "Machu Pichu Airport",
  },
  {
    iata: "AKI",
    name: "Akiak Airport",
    city: "Akiak",
  },
  {
    iata: "AET",
    name: "Allakaket Airport",
    city: "Allakaket",
  },
  {
    iata: "FYU",
    name: "Fort Yukon Airport",
    city: "Fort Yukon",
  },
  {
    iata: "AKG",
    name: "Anguganak Airport",
  },
  {
    iata: "AWB",
    name: "Awaba Airport",
    city: "Awaba",
  },
  {
    iata: "BAA",
    name: "Bialla Airport",
  },
  {
    iata: "CVB",
    name: "Chungribu Airport",
  },
  {
    iata: "GMI",
    name: "Gasmata Island Airport",
    city: "Gasmata Island",
  },
  {
    iata: "GVI",
    name: "Green River Airport",
    city: "Green River",
  },
  {
    iata: "HYF",
    name: "Hayfields Airport",
  },
  {
    iata: "IHU",
    name: "Ihu Airport",
  },
  {
    iata: "IIS",
    name: "Nissan Island Airport",
  },
  {
    iata: "JAQ",
    name: "Jacquinot Bay Airport",
  },
  {
    iata: "KDR",
    name: "Kandrian Airport",
    city: "Kandrian",
  },
  {
    iata: "KKD",
    name: "Kokoda Airport",
    city: "Kokoda",
  },
  {
    iata: "KUY",
    name: "Kamusi Airport",
  },
  {
    iata: "KWO",
    name: "Kawito Airport",
    city: "Kawito",
  },
  {
    iata: "KXR",
    name: "Karoola Airport",
  },
  {
    iata: "LMI",
    name: "Lumi Airport",
    city: "Lumi",
  },
  {
    iata: "LMY",
    name: "Lake Murray Airport",
    city: "Lake Murray",
  },
  {
    iata: "OBX",
    name: "Obo Airport",
  },
  {
    iata: "OPU",
    name: "Balimo Airport",
    city: "Balimo",
  },
  {
    iata: "SKC",
    name: "Suki Airport",
    city: "Suki",
  },
  {
    iata: "TFI",
    name: "Tufi Airport",
    city: "Tufi",
  },
  {
    iata: "TFM",
    name: "Telefomin Airport",
    city: "Telefomin",
  },
  {
    iata: "TLO",
    name: "Tol Airport",
  },
  {
    iata: "UKU",
    name: "Nuku Airport",
    city: "Nuku",
  },
  {
    iata: "ULE",
    name: "Sule Airport",
  },
  {
    iata: "VMU",
    name: "Baimuru Airport",
    city: "Baimuru",
  },
  {
    iata: "WPM",
    name: "Wipim Airport",
  },
  {
    iata: "ROP",
    name: "Rota International Airport",
    city: "Rota Island",
  },
  {
    iata: "SPN",
    name: "Francisco C. Ada Saipan International Airport",
    city: "Saipan Island",
  },
  {
    iata: "UAM",
    name: "Andersen Air Force Base",
    city: "Andersen",
  },
  {
    iata: "GUM",
    name: "Antonio B. Won Pat International Airport",
    city: "Hagatna",
  },
  {
    iata: "TIQ",
    name: "Tinian International Airport",
    city: "Tinian Island",
  },
  {
    iata: "ENI",
    name: "El Nido Airport",
    city: "El Nido",
  },
  {
    iata: "BKH",
    name: "Barking Sands Airport",
    city: "Kekaha",
  },
  {
    iata: "HDH",
    name: "Dillingham Airfield",
    city: "Mokuleia",
  },
  {
    iata: "PHG",
    name: "Port Harcourt City Airport",
  },
  {
    iata: "HHI",
    name: "Wheeler Army Airfield",
    city: "Wahiawa",
  },
  {
    iata: "HNM",
    name: "Hana Airport",
    city: "Hana",
  },
  {
    iata: "JHM",
    name: "Kapalua Airport",
    city: "Lahaina",
  },
  {
    iata: "JRF",
    name: "Kalaeloa (John Rodgers Field) Airport",
    city: "Kapolei",
  },
  {
    iata: "KOA",
    name: "Kona International At Keahole Airport",
    city: "Kailua/Kona",
  },
  {
    iata: "LIH",
    name: "Lihue Airport",
    city: "Lihue",
  },
  {
    iata: "LUP",
    name: "Kalaupapa Airport",
    city: "Kalaupapa",
  },
  {
    iata: "MKK",
    name: "Molokai Airport",
    city: "Kaunakakai",
  },
  {
    iata: "MUE",
    name: "Waimea Kohala Airport",
    city: "Kamuela",
  },
  {
    iata: "HNL",
    name: "Honolulu International Airport",
    city: "Honolulu",
  },
  {
    iata: "LNY",
    name: "Lanai Airport",
    city: "Lanai City",
  },
  {
    iata: "OGG",
    name: "Kahului Airport",
    city: "Kahului",
  },
  {
    iata: "ITO",
    name: "Hilo International Airport",
    city: "Hilo",
  },
  {
    iata: "UPP",
    name: "Upolu Airport",
    city: "Hawi",
  },
  {
    iata: "JON",
    name: "Johnston Atoll Airport",
  },
  {
    iata: "BHC",
    name: "Bhurban Heliport",
  },
  {
    iata: "CWP",
    name: "Campbellpore Airport",
  },
  {
    iata: "GRT",
    name: "Gujrat Airport",
  },
  {
    iata: "HRA",
    name: "Mansehra Airport",
  },
  {
    iata: "KCF",
    name: "Kadanwari Airport",
  },
  {
    iata: "REQ",
    name: "Reko Diq Airport",
    city: "Requena",
  },
  {
    iata: "RZS",
    name: "Sawan Airport",
  },
  {
    iata: "SWV",
    name: "Shikapur Airport",
    city: "Evensk",
  },
  {
    iata: "ENT",
    name: "Eniwetok Airport",
    city: "Eniwetok Atoll",
  },
  {
    iata: "MAJ",
    name: "Marshall Islands International Airport",
    city: "Majuro Atoll",
  },
  {
    iata: "KIA",
    name: "Kaieteur International Airport",
    city: "Kaieteur Falls",
  },
  {
    iata: "KWA",
    name: "Bucholz Army Air Field",
    city: "Kwajalein",
  },
  {
    iata: "CXI",
    name: "Cassidy International Airport",
    city: "Banana",
  },
  {
    iata: "TNV",
    name: "Tabuaeran Island Airport",
    city: "Tabuaeran Island",
  },
  {
    iata: "MDY",
    name: "Henderson Field",
    city: "Sand Island",
  },
  {
    iata: "PIZ",
    name: "Point Lay Lrrs Airport",
    city: "Point Lay",
  },
  {
    iata: "PQD",
    name: "Passikudah Helipad",
  },
  {
    iata: "DDP",
    name: "Dorado Beach Airport",
  },
  {
    iata: "HUC",
    name: "Humacao Airport",
  },
  {
    iata: "PPD",
    name: "Palmas del Mar Airstrip",
  },
  {
    iata: "TKK",
    name: "Chuuk International Airport",
    city: "Weno Island",
  },
  {
    iata: "PNI",
    name: "Pohnpei International Airport",
    city: "Pohnpei Island",
  },
  {
    iata: "ROR",
    name: "Babelthuap Airport",
    city: "Babelthuap Island",
  },
  {
    iata: "KSA",
    name: "Kosrae International Airport",
    city: "Okat",
  },
  {
    iata: "YAP",
    name: "Yap International Airport",
    city: "Yap Island",
  },
  {
    iata: "AWK",
    name: "Wake Island Airfield",
    city: "Wake Island",
  },
  {
    iata: "BFA",
    name: null,
    city: "Bahia Negra",
  },
  {
    iata: "OLK",
    name: "Fuerte Olimpo Airport",
    city: "Fuerte Olimpo",
  },
  {
    iata: "PBT",
    name: "Puerto Leda Airport",
  },
  {
    iata: "PCJ",
    name: "Puerto La Victoria Airport",
  },
  {
    iata: "KIO",
    name: "Kili Airport",
  },
  {
    iata: "QFX",
    name: "Igaliku Heliport",
  },
  {
    iata: "RAW",
    name: "Arawa Airport",
  },
  {
    iata: "KNH",
    name: "Kinmen Airport",
    city: "Shang-I",
  },
  {
    iata: "LZN",
    name: "Matsu Nangan Airport",
    city: "Nangang Island",
  },
  {
    iata: "TTT",
    name: "Taitung Airport",
    city: "Taitung City",
  },
  {
    iata: "GNI",
    name: "Lyudao Airport",
    city: "Lyudao",
  },
  {
    iata: "KHH",
    name: "Kaohsiung International Airport",
    city: "Kaohsiung City",
  },
  {
    iata: "CYI",
    name: "Chiayi Airport",
    city: "Chiayi City",
  },
  {
    iata: "HCN",
    name: "Hengchun Airport",
    city: "Hengchung",
  },
  {
    iata: "TXG",
    name: "Taichung Airport",
    city: "Taichung City",
  },
  {
    iata: "KYD",
    name: "Lanyu Airport",
    city: "Orchid Island",
  },
  {
    iata: "RMQ",
    name: "Taichung Ching Chuang Kang Airport",
    city: "Taichung City",
  },
  {
    iata: "MFK",
    name: "Matsu Beigan Airport",
    city: "Beigan Island",
  },
  {
    iata: "TNN",
    name: "Tainan Airport",
    city: "Tainan City",
  },
  {
    iata: "MZG",
    name: "Makung Airport",
    city: "Makung City",
  },
  {
    iata: "PIF",
    name: "Pingtung North Airport",
    city: "Pingtung",
  },
  {
    iata: "TSA",
    name: "Taipei Songshan Airport",
    city: "Taipei City",
  },
  {
    iata: "TPE",
    name: "Taiwan Taoyuan International Airport",
    city: "Taipei",
  },
  {
    iata: "WOT",
    name: "Wang-an Airport",
    city: "Wang-an",
  },
  {
    iata: "HUN",
    name: "Hualien Airport",
    city: "Hualien City",
  },
  {
    iata: "NRT",
    name: "Narita International Airport",
    city: "Tokyo",
  },
  {
    iata: "MMJ",
    name: "Matsumoto Airport",
    city: "Matsumoto",
  },
  {
    iata: "IBR",
    name: "Hyakuri Airport",
    city: "Omitama",
  },
  {
    iata: "MUS",
    name: "Minami Torishima Airport",
    city: "",
  },
  {
    iata: "IWO",
    name: "Iwo Jima Airport",
    city: "",
  },
  {
    iata: "KIX",
    name: "Kansai International Airport",
    city: "Osaka",
  },
  {
    iata: "SHM",
    name: "Nanki Shirahama Airport",
    city: "Shirahama",
  },
  {
    iata: "UKB",
    name: "Kobe Airport",
    city: "Kobe",
  },
  {
    iata: "HIW",
    name: "Hiroshimanishi Airport",
    city: "",
  },
  {
    iata: "TJH",
    name: "Tajima Airport",
    city: "Tajima",
  },
  {
    iata: "OBO",
    name: "Tokachi-Obihiro Airport",
    city: "Obihiro",
  },
  {
    iata: "CTS",
    name: "New Chitose Airport",
    city: "Chitose / Tomakomai",
  },
  {
    iata: "HKD",
    name: "Hakodate Airport",
    city: "Hakodate",
  },
  {
    iata: "KUH",
    name: "Kushiro Airport",
    city: "Kushiro",
  },
  {
    iata: "MMB",
    name: "Memanbetsu Airport",
    city: "Ozora",
  },
  {
    iata: "SHB",
    name: "Nakashibetsu Airport",
    city: "Nakashibetsu",
  },
  {
    iata: "OKD",
    name: "Okadama Airport",
    city: "Sapporo",
  },
  {
    iata: "RBJ",
    name: "Rebun Airport Airport",
    city: "",
  },
  {
    iata: "WKJ",
    name: "Wakkanai Airport",
    city: "Wakkanai",
  },
  {
    iata: "IKI",
    name: "Iki Airport",
    city: "Iki",
  },
  {
    iata: "UBJ",
    name: "Yamaguchi Ube Airport",
    city: "Ube",
  },
  {
    iata: "TSJ",
    name: "Tsushima Airport",
    city: "Tsushima",
  },
  {
    iata: "MBE",
    name: "Monbetsu Airport",
    city: "Monbetsu",
  },
  {
    iata: "AKJ",
    name: "Asahikawa Airport",
    city: "Asahikawa",
  },
  {
    iata: "OIR",
    name: "Okushiri Airport",
    city: "",
  },
  {
    iata: "RIS",
    name: "Rishiri Airport",
    city: "Rishiri",
  },
  {
    iata: "KUM",
    name: "Yakushima Airport",
    city: "",
  },
  {
    iata: "FUJ",
    name: "Fukue Airport",
    city: "Goto",
  },
  {
    iata: "FUK",
    name: "Fukuoka Airport",
    city: "Fukuoka",
  },
  {
    iata: "TNE",
    name: "New Tanegashima Airport",
    city: "",
  },
  {
    iata: "KOJ",
    name: "Kagoshima Airport",
    city: "Kagoshima",
  },
  {
    iata: "KMI",
    name: "Miyazaki Airport",
    city: "Miyazaki",
  },
  {
    iata: "OIT",
    name: "Oita Airport",
    city: "Oita",
  },
  {
    iata: "KKJ",
    name: "Kitaky?sh? Airport",
    city: "Kitakyushu",
  },
  {
    iata: "HSG",
    name: "Saga Airport",
    city: "Saga",
  },
  {
    iata: "KMJ",
    name: "Kumamoto Airport",
    city: "Kumamoto",
  },
  {
    iata: "NGS",
    name: "Nagasaki Airport",
    city: "Nagasaki",
  },
  {
    iata: "NGO",
    name: "Chubu Centrair International Airport",
    city: "Tokoname",
  },
  {
    iata: "ASJ",
    name: "Amami Airport",
    city: "Amami",
  },
  {
    iata: "OKE",
    name: "Okierabu Airport",
    city: "",
  },
  {
    iata: "KKX",
    name: "Kikai Airport",
    city: "",
  },
  {
    iata: "TKN",
    name: "Tokunoshima Airport",
    city: "Tokunoshima",
  },
  {
    iata: "NKM",
    name: "Nagoya Airport",
    city: "Nagoya",
  },
  {
    iata: "FKJ",
    name: "Fukui Airport",
    city: "",
  },
  {
    iata: "QGU",
    name: "Gifu Airport",
    city: "Gifu",
  },
  {
    iata: "KMQ",
    name: "Komatsu Airport",
    city: "Kanazawa",
  },
  {
    iata: "OKI",
    name: "Oki Airport",
    city: "Okinoshima",
  },
  {
    iata: "TOY",
    name: "Toyama Airport",
    city: "Toyama",
  },
  {
    iata: "NTQ",
    name: "Noto Airport",
    city: "Wajima",
  },
  {
    iata: "HIJ",
    name: "Hiroshima Airport",
    city: "Hiroshima",
  },
  {
    iata: "OKJ",
    name: "Okayama Airport",
    city: "Okayama City",
  },
  {
    iata: "IZO",
    name: "Izumo Airport",
    city: "Izumo",
  },
  {
    iata: "YGJ",
    name: "Miho Yonago Airport",
    city: "Yonago",
  },
  {
    iata: "KCZ",
    name: "K?chi Ry?ma Airport",
    city: "Nankoku",
  },
  {
    iata: "MYJ",
    name: "Matsuyama Airport",
    city: "Matsuyama",
  },
  {
    iata: "ITM",
    name: "Osaka International Airport",
    city: "Osaka",
  },
  {
    iata: "TTJ",
    name: "Tottori Airport",
    city: "Tottori",
  },
  {
    iata: "TKS",
    name: "Tokushima Airport",
    city: "Tokushima",
  },
  {
    iata: "TAK",
    name: "Takamatsu Airport",
    city: "Takamatsu",
  },
  {
    iata: "IWJ",
    name: "Iwami Airport",
    city: "Masuda",
  },
  {
    iata: "AOJ",
    name: "Aomori Airport",
    city: "Aomori",
  },
  {
    iata: "GAJ",
    name: "Yamagata Airport",
    city: "Yamagata",
  },
  {
    iata: "SDS",
    name: "Sado Airport",
    city: "",
  },
  {
    iata: "FKS",
    name: "Fukushima Airport",
    city: "Sukagawa",
  },
  {
    iata: "HHE",
    name: "Hachinohe Airport",
    city: "",
  },
  {
    iata: "HNA",
    name: "Hanamaki Airport",
    city: "",
  },
  {
    iata: "AXT",
    name: "Akita Airport",
    city: "Akita",
  },
  {
    iata: "MSJ",
    name: "Misawa Air Base",
    city: "Misawa",
  },
  {
    iata: "KIJ",
    name: "Niigata Airport",
    city: "Niigata",
  },
  {
    iata: "ONJ",
    name: "Odate Noshiro Airport",
    city: "Odate",
  },
  {
    iata: "SDJ",
    name: "Sendai Airport",
    city: "Sendai",
  },
  {
    iata: "SYO",
    name: "Shonai Airport",
    city: "Shonai",
  },
  {
    iata: "NJA",
    name: "Atsugi Naval Air Facility",
    city: "",
  },
  {
    iata: "HAC",
    name: "Hachijojima Airport",
    city: "Hachijojima",
  },
  {
    iata: "OIM",
    name: "Oshima Airport",
    city: "Izu Oshima",
  },
  {
    iata: "MYE",
    name: "Miyakejima Airport",
    city: "Miyakejima",
  },
  {
    iata: "HND",
    name: "Tokyo International Airport",
    city: "Tokyo",
  },
  {
    iata: "QUT",
    name: "Utsunomiya Airport",
    city: "",
  },
  {
    iata: "OKO",
    name: "Yokota Air Base",
    city: "Fussa",
  },
  {
    iata: "KWJ",
    name: "Gwangju Airport",
    city: "Gwangju",
  },
  {
    iata: "KUV",
    name: "Kunsan Air Base",
    city: "Kunsan",
  },
  {
    iata: "MPK",
    name: "Mokpo Airport",
  },
  {
    iata: "CHN",
    name: "Jeon Ju Airport",
    city: "Jeon Ju",
  },
  {
    iata: "RSU",
    name: "Yeosu Airport",
    city: "Yeosu",
  },
  {
    iata: "QUN",
    name: "A-306 Airport",
    city: "Chun Chon City",
  },
  {
    iata: "SHO",
    name: "Sokcho Airport",
    city: "",
  },
  {
    iata: "KAG",
    name: "Gangneung Airport",
    city: "",
  },
  {
    iata: "WJU",
    name: "Wonju Airport",
    city: "Wonju",
  },
  {
    iata: "YNY",
    name: "Yangyang International Airport",
    city: "Sokcho / Gangneung",
  },
  {
    iata: "CJU",
    name: "Jeju International Airport",
    city: "Jeju City",
  },
  {
    iata: "CHF",
    name: "Jinhae Airport",
    city: "Jinhae",
  },
  {
    iata: "PUS",
    name: "Gimhae International Airport",
    city: "Busan",
  },
  {
    iata: "HIN",
    name: "Sacheon Air Base",
    city: "Sacheon",
  },
  {
    iata: "USN",
    name: "Ulsan Airport",
    city: "Ulsan",
  },
  {
    iata: "ICN",
    name: "Incheon International Airport",
    city: "Seoul",
  },
  {
    iata: "SSN",
    name: "Seoul Air Base",
    city: "",
  },
  {
    iata: "OSN",
    name: "Osan Air Base",
    city: "",
  },
  {
    iata: "GMP",
    name: "Gimpo International Airport",
    city: "Seoul",
  },
  {
    iata: "SWU",
    name: "Suwon Airport",
    city: "",
  },
  {
    iata: "KPO",
    name: "Pohang Airport",
    city: "Pohang",
  },
  {
    iata: "TAE",
    name: "Daegu Airport",
    city: "Daegu",
  },
  {
    iata: "CJJ",
    name: "Cheongju International Airport",
    city: "Cheongju",
  },
  {
    iata: "YEC",
    name: "Yecheon Airport",
    city: "",
  },
  {
    iata: "OKA",
    name: "Naha Airport",
    city: "Naha",
  },
  {
    iata: "DNA",
    name: "Kadena Air Base",
    city: "",
  },
  {
    iata: "ISG",
    name: "Ishigaki Airport",
    city: "Ishigaki",
  },
  {
    iata: "UEO",
    name: "Kumejima Airport",
    city: "",
  },
  {
    iata: "KJP",
    name: "Kerama Airport",
    city: "Kerama",
  },
  {
    iata: "MMD",
    name: "Minami Daito Airport",
    city: "",
  },
  {
    iata: "MMY",
    name: "Miyako Airport",
    city: "Miyako City",
  },
  {
    iata: "AGJ",
    name: "Aguni Airport",
    city: "Aguni",
  },
  {
    iata: "IEJ",
    name: "Ie Jima Airport",
    city: "",
  },
  {
    iata: "HTR",
    name: "Hateruma Airport",
    city: "Hateruma",
  },
  {
    iata: "KTD",
    name: "Kitadaito Airport",
    city: "",
  },
  {
    iata: "SHI",
    name: "Shimojishima Airport",
    city: "",
  },
  {
    iata: "TRA",
    name: "Tarama Airport",
    city: "",
  },
  {
    iata: "RNJ",
    name: "Yoron Airport",
    city: "",
  },
  {
    iata: "OGN",
    name: "Yonaguni Airport",
    city: "",
  },
  {
    iata: "SFS",
    name: "Subic Bay International Airport",
    city: "Olongapo City",
  },
  {
    iata: "CRK",
    name: "Diosdado Macapagal International Airport",
    city: "Angeles City",
  },
  {
    iata: "LAO",
    name: "Laoag International Airport",
    city: "Laoag City",
  },
  {
    iata: "MNL",
    name: "Ninoy Aquino International Airport",
    city: "Manila",
  },
  {
    iata: "CYU",
    name: "Cuyo Airport",
    city: "Cuyo",
  },
  {
    iata: "LGP",
    name: "Legazpi City International Airport",
    city: "Legazpi City",
  },
  {
    iata: "NSP",
    name: "Sangley Point Air Base",
    city: "Cavite City",
  },
  {
    iata: "LBX",
    name: "Lubang Airport",
    city: "",
  },
  {
    iata: "AAV",
    name: "Allah Valley Airport",
    city: "Surallah",
  },
  {
    iata: "GES",
    name: "General Santos International Airport",
    city: "General Santos City",
  },
  {
    iata: "CBO",
    name: "Awang Airport",
    city: "Cotabato City",
  },
  {
    iata: "DVO",
    name: "Francisco Bangoy International Airport",
    city: "Davao City",
  },
  {
    iata: "BXU",
    name: "Bancasi Airport",
    city: "Butuan City",
  },
  {
    iata: "BPH",
    name: "Bislig Airport",
    city: "",
  },
  {
    iata: "DPL",
    name: "Dipolog Airport",
    city: "Dipolog City",
  },
  {
    iata: "CGM",
    name: "Camiguin Airport",
    city: "",
  },
  {
    iata: "IGN",
    name: "Iligan Airport",
    city: "",
  },
  {
    iata: "JOL",
    name: "Jolo Airport",
    city: "",
  },
  {
    iata: "CGY",
    name: "Cagayan De Oro Airport",
    city: "Cagayan De Oro City",
  },
  {
    iata: "MLP",
    name: "Malabang Airport",
    city: "Malabang",
  },
  {
    iata: "SGS",
    name: "Sanga Sanga Airport",
    city: "",
  },
  {
    iata: "OZC",
    name: "Labo Airport",
    city: "Ozamiz City",
  },
  {
    iata: "PAG",
    name: "Pagadian Airport",
    city: "Pagadian City",
  },
  {
    iata: "MXI",
    name: "Mati National Airport",
    city: "",
  },
  {
    iata: "SUG",
    name: "Surigao Airport",
    city: "Surigao City",
  },
  {
    iata: "CDY",
    name: "Cagayan de Sulu Airport",
    city: "Mapun",
  },
  {
    iata: "IPE",
    name: "Ipil Airport",
    city: "Ipil",
  },
  {
    iata: "TDG",
    name: "Tandag Airport",
    city: "",
  },
  {
    iata: "ZAM",
    name: "Zamboanga International Airport",
    city: "Zamboanga City",
  },
  {
    iata: "IAO",
    name: "Siargao Airport",
    city: "Del Carmen",
  },
  {
    iata: "BAG",
    name: "Loakan Airport",
    city: "Baguio City",
  },
  {
    iata: "DTE",
    name: "Daet Airport",
    city: "Daet",
  },
  {
    iata: "SJI",
    name: "San Jose Airport",
    city: "San Jose",
  },
  {
    iata: "MBO",
    name: "Mamburao Airport",
    city: "",
  },
  {
    iata: "WNP",
    name: "Naga Airport",
    city: "Naga",
  },
  {
    iata: "BSO",
    name: "Basco Airport",
    city: "Basco",
  },
  {
    iata: "BQA",
    name: "Dr.Juan C. Angara Airport",
    city: "Baler",
  },
  {
    iata: "SFE",
    name: "San Fernando Airport",
    city: "",
  },
  {
    iata: "TUG",
    name: "Tuguegarao Airport",
    city: "Tuguegarao City",
  },
  {
    iata: "VRC",
    name: "Virac Airport",
    city: "Virac",
  },
  {
    iata: "MRQ",
    name: "Marinduque Airport",
    city: "Gasan",
  },
  {
    iata: "CYZ",
    name: "Cauayan Airport",
    city: "Cauayan City",
  },
  {
    iata: "TAC",
    name: "Daniel Z. Romualdez Airport",
    city: "Tacloban City",
  },
  {
    iata: "BCD",
    name: "Bacolod-Silay City International Airport",
    city: "Bacolod City",
  },
  {
    iata: "CYP",
    name: "Calbayog Airport",
    city: "Calbayog City",
  },
  {
    iata: "DGT",
    name: "Sibulan Airport",
    city: "Dumaguete City",
  },
  {
    iata: "MPH",
    name: "Godofredo P. Ramos Airport",
    city: "Malay",
  },
  {
    iata: "CRM",
    name: "Catarman National Airport",
    city: "Catarman",
  },
  {
    iata: "GUI",
    name: "Guiuan Airport",
    city: "",
  },
  {
    iata: "ILO",
    name: "Iloilo International Airport",
    city: "Iloilo City",
  },
  {
    iata: "MBT",
    name: "Moises R. Espinosa Airport",
    city: "Masbate",
  },
  {
    iata: "KLO",
    name: "Kalibo International Airport",
    city: "Kalibo",
  },
  {
    iata: "CEB",
    name: "Mactan Cebu International Airport",
    city: "Lapu-Lapu City",
  },
  {
    iata: "OMC",
    name: "Ormoc Airport",
    city: "Ormoc City",
  },
  {
    iata: "PPS",
    name: "Puerto Princesa Airport",
    city: "Puerto Princesa City",
  },
  {
    iata: "RXS",
    name: "Roxas Airport",
    city: "Roxas City",
  },
  {
    iata: "EUQ",
    name: "Evelio Javier Airport",
    city: "San Jose",
  },
  {
    iata: "TAG",
    name: "Tagbilaran Airport",
    city: "Tagbilaran City",
  },
  {
    iata: "TBH",
    name: "Romblon Airport",
    city: "Romblon",
  },
  {
    iata: "USU",
    name: "Francisco B. Reyes Airport",
    city: "Coron",
  },
  {
    iata: "BPR",
    name: "Borongan Airport",
    city: "Borongan City",
  },
  {
    iata: "NGK",
    name: "Nogliki Airport",
  },
  {
    iata: "GRV",
    name: "Grozny North Airport",
    city: "Grozny",
  },
  {
    iata: "LNX",
    name: "Smolensk South Airport",
    city: "Smolensk",
  },
  {
    iata: "VUS",
    name: "Velikiy Ustyug Airport",
    city: "Velikiy Ustyug",
  },
  {
    iata: "LPS",
    name: "Lopez Island Airport",
  },
  {
    iata: "MJR",
    name: "Miramar Airport",
    city: "Miramar",
  },
  {
    iata: "CCT",
    name: "Colonia Catriel Airport",
    city: "Colonia Catriel",
  },
  {
    iata: "COC",
    name: "Comodoro Pierrestegui Airport",
    city: "Concordia",
  },
  {
    iata: "GHU",
    name: "Gualeguaychu Airport",
    city: "Gualeguaychu",
  },
  {
    iata: "JNI",
    name: "Junin Airport",
    city: "Junin",
  },
  {
    iata: "PRA",
    name: "General Urquiza Airport",
    city: "Parana",
  },
  {
    iata: "ROS",
    name: "Islas Malvinas Airport",
    city: "Rosario",
  },
  {
    iata: "SFN",
    name: "Sauce Viejo Airport",
    city: "Santa Fe",
  },
  {
    iata: "AEP",
    name: "Jorge Newbery Airpark",
    city: "Buenos Aires",
  },
  {
    iata: "LCM",
    name: "La Cumbre Airport",
    city: "La Cumbre",
  },
  {
    iata: "COR",
    name: "Ingeniero Ambrosio Taravella Airport",
    city: "Cordoba",
  },
  {
    iata: "FDO",
    name: "San Fernando Airport",
    city: "San Fernando",
  },
  {
    iata: "LPG",
    name: "La Plata Airport",
    city: "La Plata",
  },
  {
    iata: "EPA",
    name: "El Palomar Airport",
    city: "El Palomar",
  },
  {
    iata: "EZE",
    name: "Ministro Pistarini International Airport",
    city: "Ezeiza",
  },
  {
    iata: "HOS",
    name: "Chos Malal Airport",
    city: "Chos Malal",
  },
  {
    iata: "CVH",
    name: "Caviahue Airport",
    city: "Lafontaine",
  },
  {
    iata: "GNR",
    name: "Dr. Arturo H. Illia Airport",
    city: "General Roca",
  },
  {
    iata: "RDS",
    name: "Rincon De Los Sauces Airport",
    city: "Rincon de los Sauces",
  },
  {
    iata: "APZ",
    name: "Zapala Airport",
    city: "Zapala",
  },
  {
    iata: "MDZ",
    name: "El Plumerillo Airport",
    city: "Mendoza",
  },
  {
    iata: "LGS",
    name: null,
    city: "Malargue",
  },
  {
    iata: "AFA",
    name: "Suboficial Ay Santiago Germano Airport",
    city: "San Rafael",
  },
  {
    iata: "CTC",
    name: "Catamarca Airport",
    city: "Catamarca",
  },
  {
    iata: "SDE",
    name: null,
    city: "Santiago del Estero",
  },
  {
    iata: "RHD",
    name: "Las Termas Airport",
    city: "Rio Hondo",
  },
  {
    iata: "IRJ",
    name: "Capitan V A Almonacid Airport",
    city: "La Rioja",
  },
  {
    iata: "TUC",
    name: "Teniente Benjamin Matienzo Airport",
    city: "San Miguel de Tucuman",
  },
  {
    iata: "UAQ",
    name: "Domingo Faustino Sarmiento Airport",
    city: "San Juan",
  },
  {
    iata: "CRR",
    name: "Ceres Airport",
    city: "Ceres",
  },
  {
    iata: "RCU",
    name: "Area De Material Airport",
    city: "Rio Cuarto",
  },
  {
    iata: "VDR",
    name: "Villa Dolores Airport",
    city: "Villa Dolores",
  },
  {
    iata: "VME",
    name: "Villa Reynolds Airport",
    city: "Villa Reynolds",
  },
  {
    iata: "RLO",
    name: "Valle Del Conlara International Airport",
    city: "Merlo",
  },
  {
    iata: "LUQ",
    name: "Brigadier Mayor D Cesar Raul Ojeda Airport",
    city: "San Luis",
  },
  {
    iata: "CNQ",
    name: "Corrientes Airport",
    city: "Corrientes",
  },
  {
    iata: "RES",
    name: "Resistencia International Airport",
    city: "Resistencia",
  },
  {
    iata: "FMA",
    name: "Formosa Airport",
    city: "Formosa",
  },
  {
    iata: "IGR",
    name: null,
    city: "Puerto Iguazu",
  },
  {
    iata: "AOL",
    name: "Paso De Los Libres Airport",
    city: "Paso de los Libres",
  },
  {
    iata: "MCS",
    name: "Monte Caseros Airport",
    city: "Monte Caseros",
  },
  {
    iata: "PSS",
    name: "Libertador Gral D Jose De San Martin Airport",
    city: "Posadas",
  },
  {
    iata: "PSV",
    name: "Rovere Airport",
  },
  {
    iata: "SLA",
    name: "Martin Miguel De Guemes International Airport",
    city: "Salta",
  },
  {
    iata: "JUJ",
    name: "Gobernador Horacio Guzman International Airport",
    city: "San Salvador de Jujuy",
  },
  {
    iata: "ORA",
    name: null,
    city: "Oran",
  },
  {
    iata: "TTG",
    name: "General Enrique Mosconi Airport",
    city: "Tartagal",
  },
  {
    iata: "CLX",
    name: "Clorinda Airport",
    city: "Clorinda",
  },
  {
    iata: "ELO",
    name: "El Dorado Airport",
    city: "El Dorado",
  },
  {
    iata: "OYA",
    name: "Goya Airport",
    city: "Goya",
  },
  {
    iata: "LLS",
    name: "Alferez Armando Rodriguez Airport",
    city: "Las Lomitas",
  },
  {
    iata: "MDX",
    name: "Mercedes Airport",
    city: "Mercedes",
  },
  {
    iata: "RCQ",
    name: "Reconquista Airport",
    city: "Reconquista",
  },
  {
    iata: "UZU",
    name: "Curuzu Cuatia Airport",
    city: "Curuzu Cuatia",
  },
  {
    iata: "EHL",
    name: "El Bolson Airport",
    city: "El Bolson",
  },
  {
    iata: "CRD",
    name: "General E. Mosconi Airport",
    city: "Comodoro Rivadavia",
  },
  {
    iata: "EMX",
    name: "El Maiten Airport",
    city: "El Maiten",
  },
  {
    iata: "EQS",
    name: "Brigadier Antonio Parodi Airport",
    city: "Esquel",
  },
  {
    iata: "LHS",
    name: "Las Heras Airport",
    city: "Las Heras",
  },
  {
    iata: "IGB",
    name: null,
    city: "Ingeniero Jacobacci",
  },
  {
    iata: "OES",
    name: "Antoine De St Exupery Airport",
    city: "San Antonio Oeste",
  },
  {
    iata: "MQD",
    name: "Maquinchao Airport",
    city: "Maquinchao",
  },
  {
    iata: "ARR",
    name: "D. Casimiro Szlapelis Airport",
    city: "Alto Rio Senguerr",
  },
  {
    iata: "SGV",
    name: "Sierra Grande Airport",
    city: "Sierra Grande",
  },
  {
    iata: "REL",
    name: "Almirante Marco Andres Zar Airport",
    city: "Rawson",
  },
  {
    iata: "VDM",
    name: "Gobernador Castello Airport",
    city: "Viedma / Carmen de Patagones",
  },
  {
    iata: "PMY",
    name: "El Tehuelche Airport",
    city: "Puerto Madryn",
  },
  {
    iata: "ING",
    name: "Lago Argentino Airport",
    city: "El Calafate",
  },
  {
    iata: "FTE",
    name: "El Calafate Airport",
    city: "El Calafate",
  },
  {
    iata: "PUD",
    name: "Puerto Deseado Airport",
    city: "Puerto Deseado",
  },
  {
    iata: "RGA",
    name: "Hermes Quijada International Airport",
    city: "Rio Grande",
  },
  {
    iata: "RGL",
    name: null,
    city: "Rio Gallegos",
  },
  {
    iata: "USH",
    name: "Malvinas Argentinas Airport",
    city: "Ushuahia",
  },
  {
    iata: "ULA",
    name: "Capitan D Daniel Vazquez Airport",
    city: "San Julian",
  },
  {
    iata: "ROY",
    name: "Rio Mayo Airport",
    city: "Rio Mayo",
  },
  {
    iata: "PMQ",
    name: "Perito Moreno Airport",
    city: "Perito Moreno",
  },
  {
    iata: "GGS",
    name: "Gobernador Gregores Airport",
    city: "Gobernador Gregores",
  },
  {
    iata: "JSM",
    name: "Jose De San Martin Airport",
    city: "Chubut",
  },
  {
    iata: "RYO",
    name: "28 De Noviembre Airport",
    city: "El Turbio",
  },
  {
    iata: "RZA",
    name: "Santa Cruz Airport",
    city: "Santa Cruz",
  },
  {
    iata: "BHI",
    name: "Comandante Espora Airport",
    city: "Bahia Blanca",
  },
  {
    iata: "CSZ",
    name: "Brigadier D.H.E. Ruiz Airport",
    city: "Coronel Suarez",
  },
  {
    iata: "OVR",
    name: "Olavarria Airport",
    city: "Olavarria",
  },
  {
    iata: "GPO",
    name: "General Pico Airport",
    city: "General Pico",
  },
  {
    iata: "OYO",
    name: "Tres Arroyos Airport",
    city: "Tres Arroyos",
  },
  {
    iata: "SST",
    name: "Santa Teresita Airport",
    city: "Santa Teresita",
  },
  {
    iata: "MDQ",
    name: null,
    city: "Mar del Plata",
  },
  {
    iata: "NQN",
    name: "Presidente Peron Airport",
    city: "Neuquen",
  },
  {
    iata: "NEC",
    name: "Necochea Airport",
    city: "Necochea",
  },
  {
    iata: "PEH",
    name: "Comodoro Pedro Zanni Airport",
    city: "Pehuajo",
  },
  {
    iata: "RSA",
    name: "Santa Rosa Airport",
    city: "Santa Rosa",
  },
  {
    iata: "BRC",
    name: "San Carlos De Bariloche Airport",
    city: "San Carlos de Bariloche",
  },
  {
    iata: "TDL",
    name: null,
    city: "Tandil",
  },
  {
    iata: "VLG",
    name: "Villa Gesell Airport",
    city: "Villa Gesell",
  },
  {
    iata: "CUT",
    name: "Cutral-Co Airport",
    city: "Cutral-Co",
  },
  {
    iata: "CPC",
    name: "Aviador C. Campos Airport",
    city: "Chapelco/San Martin de los Andes",
  },
  {
    iata: "VIU",
    name: "Viru Harbour Airstrip",
  },
  {
    iata: "SB0",
    name: "Pirenopolis Centeral Airport",
  },
  {
    iata: "SB2",
    name: "Fazenda Bela Vista Airport",
  },
  {
    iata: "CDJ",
    name: null,
    city: "Conceicao Do Araguaia",
  },
  {
    iata: "APS",
    name: null,
    city: "Anapolis",
  },
  {
    iata: "AQA",
    name: "Araraquara Airport",
    city: "Araraquara",
  },
  {
    iata: "AJU",
    name: "Santa Maria Airport",
    city: "Aracaju",
  },
  {
    iata: "AFL",
    name: "Alta Floresta Airport",
    city: "Alta Floresta",
  },
  {
    iata: "ARU",
    name: "Dario Guarita Airport",
    city: "Aracatuba",
  },
  {
    iata: "AAX",
    name: null,
    city: "Araxa",
  },
  {
    iata: "BEL",
    name: "Val de Cans International Airport",
    city: "Belem",
  },
  {
    iata: "BGX",
    name: "Comandante Gustavo Kraemer Airport",
    city: "Bage",
  },
  {
    iata: "PLU",
    name: "Pampulha - Carlos Drummond de Andrade Airport",
    city: "Belo Horizonte",
  },
  {
    iata: "QAK",
    name: "Major Brigadeiro Doorgal Borges Airport",
    city: "Barbacena",
  },
  {
    iata: "BSB",
    name: "Presidente Juscelino Kubistschek International Airport",
    city: "Brasilia",
  },
  {
    iata: "BAT",
    name: "Chafei Amsei Airport",
    city: "Barretos",
  },
  {
    iata: "BAU",
    name: "Bauru Airport",
    city: "Bauru",
  },
  {
    iata: "BVB",
    name: "Atlas Brasil Cantanhede Airport",
    city: "Boa Vista",
  },
  {
    iata: "BPG",
    name: null,
    city: "Barra Do Garcas",
  },
  {
    iata: "BZC",
    name: "Umberto Modiano Airport",
    city: "Cabo Frio",
  },
  {
    iata: "CAC",
    name: "Cascavel Airport",
    city: "Cascavel",
  },
  {
    iata: "CFB",
    name: "Cabo Frio Airport",
    city: "Cabo Frio",
  },
  {
    iata: "ITB",
    name: "Cachimbo Airport",
    city: "Itaituba",
  },
  {
    iata: "CNF",
    name: "Tancredo Neves International Airport",
    city: "Belo Horizonte",
  },
  {
    iata: "CGR",
    name: "Campo Grande Airport",
    city: "Campo Grande",
  },
  {
    iata: "XAP",
    name: "Serafin Enoss Bertaso Airport",
    city: "Chapeco",
  },
  {
    iata: "CLN",
    name: "Brig. Lysias Augusto Rodrigues Airport",
    city: "Carolina",
  },
  {
    iata: "CKS",
    name: "Carajas Airport",
    city: "Carajas",
  },
  {
    iata: "CCM",
    name: "Diomicio Freitas Airport",
    city: "Criciuma",
  },
  {
    iata: "CLV",
    name: "Caldas Novas Airport",
    city: "Caldas Novas",
  },
  {
    iata: "QNS",
    name: "Canoas Airport",
    city: "Porto Alegre",
  },
  {
    iata: "CAW",
    name: "Bartolomeu Lisandro Airport",
    city: "Campos Dos Goytacazes",
  },
  {
    iata: "CMG",
    name: "Corumbá International Airport",
    city: "Corumba",
  },
  {
    iata: "CWB",
    name: "Afonso Pena Airport",
    city: "Curitiba",
  },
  {
    iata: "CRQ",
    name: "Caravelas Airport",
    city: "Caravelas",
  },
  {
    iata: "CXJ",
    name: "Campo dos Bugres Airport",
    city: "Caxias Do Sul",
  },
  {
    iata: "CGB",
    name: "Marechal Rondon Airport",
    city: "Cuiaba",
  },
  {
    iata: "CZS",
    name: "Cruzeiro do Sul Airport",
    city: "Cruzeiro Do Sul",
  },
  {
    iata: "PPB",
    name: "Presidente Prudente Airport",
    city: "Presidente Prudente",
  },
  {
    iata: "MAO",
    name: "Eduardo Gomes International Airport",
    city: "Manaus",
  },
  {
    iata: "JCR",
    name: "Jacareacanga Airport",
    city: "Jacareacanga",
  },
  {
    iata: "IGU",
    name: "Cataratas International Airport",
    city: "Foz Do Iguacu",
  },
  {
    iata: "FLN",
    name: "Hercílio Luz International Airport",
    city: "Florianopolis",
  },
  {
    iata: "FEN",
    name: "Fernando de Noronha Airport",
    city: "Fernando De Noronha",
  },
  {
    iata: "FOR",
    name: "Pinto Martins International Airport",
    city: "Fortaleza",
  },
  {
    iata: "GIG",
    name: "Tom Jobim International Airport",
    city: "Rio De Janeiro",
  },
  {
    iata: "GJM",
    name: "Guajara-Mirim Airport",
    city: "Guajara-Mirim",
  },
  {
    iata: "GYN",
    name: "Santa Genoveva Airport",
    city: "Goiania",
  },
  {
    iata: "GRU",
    name: "São Paulo International Airport",
    city: "Sao Paulo",
  },
  {
    iata: "GPB",
    name: "Tancredo Thomas de Faria Airport",
    city: "Guarapuava",
  },
  {
    iata: "GVR",
    name: "Governador Valadares Airport",
    city: "Governador Valadares",
  },
  {
    iata: "GUJ",
    name: "Guaratingueta Airport",
    city: "Guaratingueta",
  },
  {
    iata: "ATM",
    name: "Altamira Airport",
    city: "Altamira",
  },
  {
    iata: "ITA",
    name: "Itacoatiara Airport",
    city: "Itacoatiara",
  },
  {
    iata: "ITB",
    name: "Itaituba Airport",
    city: "Itaituba",
  },
  {
    iata: "IOS",
    name: "Bahia - Jorge Amado Airport",
    city: "Ilheus",
  },
  {
    iata: "IPN",
    name: "Usiminas Airport",
    city: "Ipatinga",
  },
  {
    iata: "IMP",
    name: "Prefeito Renato Moreira Airport",
    city: "Imperatriz",
  },
  {
    iata: "JDF",
    name: "Francisco de Assis Airport",
    city: "Juiz De Fora",
  },
  {
    iata: "JPA",
    name: "Presidente Castro Pinto Airport",
    city: "Joao Pessoa",
  },
  {
    iata: "JDO",
    name: "Orlando Bezerra de Menezes Airport",
    city: "Juazeiro Do Norte",
  },
  {
    iata: "JOI",
    name: "Lauro Carneiro de Loyola Airport",
    city: "Joinville",
  },
  {
    iata: "CPV",
    name: "Campina Grande Airport",
    city: "Campina Grande",
  },
  {
    iata: "VCP",
    name: "Viracopos International Airport",
    city: "Campinas",
  },
  {
    iata: "LEC",
    name: "Chapada Diamantina Airport",
    city: "Lencois",
  },
  {
    iata: "LAJ",
    name: "Lages Airport",
    city: "Lages",
  },
  {
    iata: "LIP",
    name: "Lins Airport",
    city: "Lins",
  },
  {
    iata: "LDB",
    name: "Governador José Richa Airport",
    city: "Londrina",
  },
  {
    iata: "LAZ",
    name: "Bom Jesus da Lapa Airport",
    city: "Bom Jesus Da Lapa",
  },
  {
    iata: "MAB",
    name: "João Correa da Rocha Airport",
    city: "Maraba",
  },
  {
    iata: "MQH",
    name: "Minaçu Airport",
    city: "Minacu",
  },
  {
    iata: "MEU",
    name: "Monte Dourado Airport",
    city: "Almeirim",
  },
  {
    iata: "MEA",
    name: "Benedito Lacerda Airport",
    city: "Macae",
  },
  {
    iata: "MGF",
    name: null,
    city: "Maringa",
  },
  {
    iata: "MOC",
    name: null,
    city: "Montes Claros",
  },
  {
    iata: "MII",
    name: null,
    city: "Marilia",
  },
  {
    iata: "PLL",
    name: "Ponta Pelada Airport",
    city: "Manaus",
  },
  {
    iata: "MCZ",
    name: "Zumbi dos Palmares Airport",
    city: "Maceio",
  },
  {
    iata: "MCP",
    name: "Alberto Alcolumbre Airport",
    city: "Macapa",
  },
  {
    iata: "MVF",
    name: "Dix-Sept Rosado Airport",
    city: "Mossoro",
  },
  {
    iata: "SAO",
    name: "Campo de Marte Airport",
    city: "Sao Paulo",
  },
  {
    iata: "MNX",
    name: null,
    city: "Manicore",
  },
  {
    iata: "NVT",
    name: "Ministro Victor Konder International Airport",
    city: "Navegantes",
  },
  {
    iata: "GEL",
    name: null,
    city: "Santo Angelo",
  },
  {
    iata: "NAT",
    name: "Augusto Severo Airport",
    city: "Natal",
  },
  {
    iata: "OYK",
    name: "Oiapoque Airport",
    city: "Oiapoque",
  },
  {
    iata: "POA",
    name: "Salgado Filho Airport",
    city: "Porto Alegre",
  },
  {
    iata: "PBB",
    name: null,
    city: "Paranaiba",
  },
  {
    iata: "POO",
    name: null,
    city: "Pocos De Caldas",
  },
  {
    iata: "PFB",
    name: "Lauro Kurtz Airport",
    city: "Passo Fundo",
  },
  {
    iata: "PMW",
    name: "Brigadeiro Lysias Rodrigues Airport",
    city: "Palmas",
  },
  {
    iata: "PET",
    name: "Pelotas Airport",
    city: "Pelotas",
  },
  {
    iata: "PNZ",
    name: "Senador Nilo Coelho Airport",
    city: "Petrolina",
  },
  {
    iata: "PNB",
    name: "Porto Nacional Airport",
    city: "Porto Nacional",
  },
  {
    iata: "PMG",
    name: null,
    city: "Ponta Pora",
  },
  {
    iata: "BPS",
    name: "Porto Seguro Airport",
    city: "Porto Seguro",
  },
  {
    iata: "PVH",
    name: "Governador Jorge Teixeira de Oliveira Airport",
    city: "Porto Velho",
  },
  {
    iata: "VDC",
    name: null,
    city: "Vitoria Da Conquista",
  },
  {
    iata: "RBR",
    name: "Plácido de Castro International Airport",
    city: "Rio Branco",
  },
  {
    iata: "REC",
    name: "Guararapes - Gilberto Freyre International Airport",
    city: "Recife",
  },
  {
    iata: "SDU",
    name: "Santos Dumont Airport",
    city: "Rio De Janeiro",
  },
  {
    iata: "RAO",
    name: "Leite Lopes Airport",
    city: "Ribeirao Preto",
  },
  {
    iata: "BRB",
    name: "Barreirinhas Airport",
    city: "",
  },
  {
    iata: "SNZ",
    name: "Santa Cruz Airport",
    city: "Rio De Janeiro",
  },
  {
    iata: "SJK",
    name: "Professor Urbano Ernesto Stumpf Airport",
    city: "Sao Jose Dos Campos",
  },
  {
    iata: "SLZ",
    name: "Marechal Cunha Machado International Airport",
    city: "Sao Luis",
  },
  {
    iata: "RIA",
    name: "Santa Maria Airport",
    city: "Santa Maria",
  },
  {
    iata: "STM",
    name: "Maestro Wilson Fonseca Airport",
    city: "Santarem",
  },
  {
    iata: "CGH",
    name: "Congonhas Airport",
    city: "Sao Paulo",
  },
  {
    iata: "SJP",
    name: null,
    city: "Sao Jose Do Rio Preto",
  },
  {
    iata: "SSZ",
    name: null,
    city: "Guaruja",
  },
  {
    iata: "SSA",
    name: "Deputado Luís Eduardo Magalhães International Airport",
    city: "Salvador",
  },
  {
    iata: "QHP",
    name: null,
    city: "Taubate",
  },
  {
    iata: "TMT",
    name: "Trombetas Airport",
    city: "Oriximina",
  },
  {
    iata: "UNA",
    name: null,
    city: "Una",
  },
  {
    iata: "TOW",
    name: "Toledo Airport",
    city: "Toledo",
  },
  {
    iata: "THE",
    name: null,
    city: "Teresina",
  },
  {
    iata: "TFF",
    name: null,
    city: "Tefe",
  },
  {
    iata: "TRQ",
    name: null,
    city: "Tarauaca",
  },
  {
    iata: "TEC",
    name: null,
    city: "Telemaco Borba",
  },
  {
    iata: "OBI",
    name: null,
    city: "Obidos",
  },
  {
    iata: "TBT",
    name: "Tabatinga Airport",
    city: "Tabatinga",
  },
  {
    iata: "TUR",
    name: null,
    city: "Tucurui",
  },
  {
    iata: "SJL",
    name: null,
    city: "Sao Gabriel Da Cachoeira",
  },
  {
    iata: "PAV",
    name: "Paulo Afonso Airport",
    city: "Paulo Afonso",
  },
  {
    iata: "URG",
    name: "Rubem Berta Airport",
    city: "Uruguaiana",
  },
  {
    iata: "UDI",
    name: null,
    city: "Uberlandia",
  },
  {
    iata: "UBA",
    name: null,
    city: "Uberaba",
  },
  {
    iata: "VAG",
    name: "Major Brigadeiro Trompowsky Airport",
    city: "Varginha",
  },
  {
    iata: "BVH",
    name: "Vilhena Airport",
    city: "Vilhena",
  },
  {
    iata: "VIX",
    name: "Eurico de Aguiar Salles Airport",
    city: "Vitoria",
  },
  {
    iata: "QPS",
    name: "Campo Fontenelle Airport",
    city: "Pirassununga",
  },
  {
    iata: "PRI",
    name: "Praslin Island Airport",
    city: "Praslin Island",
  },
  {
    iata: "PRI",
    name: "Praslin Island Airport",
    city: "Praslin Island",
  },
  {
    iata: "ZUD",
    name: "Pupelde Airport",
    city: "Ancud",
  },
  {
    iata: "LOB",
    name: "San Rafael Airport",
    city: "Los Andes",
  },
  {
    iata: "WAP",
    name: "Alto Palena Airport",
    city: "Alto Palena",
  },
  {
    iata: "ARI",
    name: "Chacalluta Airport",
    city: "Arica",
  },
  {
    iata: "WPA",
    name: null,
    city: "Puerto Aysen",
  },
  {
    iata: "DAT",
    name: "Desierto de Atacama Airport",
    city: "Datong",
  },
  {
    iata: "BBA",
    name: "Balmaceda Airport",
    city: "Balmaceda",
  },
  {
    iata: "TOQ",
    name: "Barriles Airport",
    city: "Tocopilla",
  },
  {
    iata: "CCH",
    name: "Chile Chico Airport",
    city: "Chile Chico",
  },
  {
    iata: "CJC",
    name: "El Loa Airport",
    city: "Calama",
  },
  {
    iata: "YAI",
    name: null,
    city: "Chillan",
  },
  {
    iata: "PUQ",
    name: null,
    city: "Punta Arenas",
  },
  {
    iata: "GXQ",
    name: "Teniente Vidal Airport",
    city: "Coyhaique",
  },
  {
    iata: "IQQ",
    name: "Diego Aracena Airport",
    city: "Iquique",
  },
  {
    iata: "SCL",
    name: "Arturo Merino Benitez International Airport",
    city: "Santiago",
  },
  {
    iata: "ESR",
    name: null,
    city: "El Salvador",
  },
  {
    iata: "FRT",
    name: "El Avellano Airport",
    city: "Frutillar",
  },
  {
    iata: "ANF",
    name: "Cerro Moreno Airport",
    city: "Antofagasta",
  },
  {
    iata: "WPR",
    name: "Capitan Fuentes Martinez Airport Airport",
    city: "Porvenir",
  },
  {
    iata: "FFU",
    name: null,
    city: "Futaleufu",
  },
  {
    iata: "LSQ",
    name: null,
    city: "Los Angeles",
  },
  {
    iata: "WPU",
    name: null,
    city: "Puerto Williams",
  },
  {
    iata: "CPO",
    name: "Chamonate Airport",
    city: "Copiapo",
  },
  {
    iata: "LGR",
    name: "Cochrane Airport",
    city: "Cochrane",
  },
  {
    iata: "CCP",
    name: "Carriel Sur Airport",
    city: "Concepcion",
  },
  {
    iata: "IPC",
    name: "Mataveri Airport",
    city: "Isla De Pascua",
  },
  {
    iata: "ZOS",
    name: null,
    city: "Osorno",
  },
  {
    iata: "VLR",
    name: "Vallenar Airport",
    city: "Vallenar",
  },
  {
    iata: "ZLR",
    name: "Municipal de Linares Airport",
    city: "Linares",
  },
  {
    iata: "PNT",
    name: "Tte. Julio Gallardo Airport",
    city: "Puerto Natales",
  },
  {
    iata: "OVL",
    name: "El Tuqui Airport",
    city: "Ovalle",
  },
  {
    iata: "ZPC",
    name: null,
    city: "Pucon",
  },
  {
    iata: "PUX",
    name: "El Mirador Airport",
    city: "Puerto Varas",
  },
  {
    iata: "CNR",
    name: null,
    city: "Chanaral",
  },
  {
    iata: "VAP",
    name: "Rodelillo Airport",
    city: "Vina Del Mar",
  },
  {
    iata: "QRC",
    name: "De La Independencia Airport",
    city: "Rancagua",
  },
  {
    iata: "SMB",
    name: "Franco Bianco Airport",
    city: "Cerro Sombrero",
  },
  {
    iata: "LSC",
    name: "La Florida Airport",
    city: "La Serena-Coquimbo",
  },
  {
    iata: "SSD",
    name: null,
    city: "San Felipe",
  },
  {
    iata: "WCA",
    name: "Gamboa Airport",
    city: "Castro",
  },
  {
    iata: "ZCO",
    name: "Maquehue Airport",
    city: "Temuco",
  },
  {
    iata: "PMC",
    name: "El Tepual Airport",
    city: "Puerto Montt",
  },
  {
    iata: "ULC",
    name: "Los Cerrillos Airport",
  },
  {
    iata: "TLX",
    name: "Panguilemo Airport",
    city: "Talca",
  },
  {
    iata: "WCH",
    name: null,
    city: "Chaiten",
  },
  {
    iata: "ZIC",
    name: "Victoria Airport",
    city: "Victoria",
  },
  {
    iata: "TTC",
    name: "Las Breas Airport",
    city: "Taltal",
  },
  {
    iata: "ZAL",
    name: "Pichoy Airport",
    city: "Valdivia",
  },
  {
    iata: "KNA",
    name: null,
    city: "Vina Del Mar",
  },
  {
    iata: "CPQ",
    name: "Amarais Airport",
    city: "Campinas",
  },
  {
    iata: "QCJ",
    name: "Botucatu Airport",
    city: "Botucatu",
  },
  {
    iata: "OLC",
    name: "Senadora Eunice Micheles Airport",
    city: "Sao Paulo De Olivenca",
  },
  {
    iata: "SOD",
    name: "Sorocaba Airport",
    city: "Sorocaba",
  },
  {
    iata: "QDC",
    name: "Dracena Airport",
    city: "Dracena",
  },
  {
    iata: "JLS",
    name: "Jales Airport",
    city: "Jales",
  },
  {
    iata: "QOA",
    name: "Mococa Airport",
    city: "Mococa",
  },
  {
    iata: "QGC",
    name: null,
    city: "Lencois Paulista",
  },
  {
    iata: "QNV",
    name: "Aeroclube Airport",
    city: "Nova Iguacu",
  },
  {
    iata: "OUS",
    name: "Ourinhos Airport",
    city: "Ourinhos",
  },
  {
    iata: "QHB",
    name: "Piracicaba Airport",
    city: "Piracicaba",
  },
  {
    iata: "QIQ",
    name: "Rio Claro Airport",
    city: "Rio Claro",
  },
  {
    iata: "QVP",
    name: null,
    city: "Avare",
  },
  {
    iata: "QRZ",
    name: "Resende Airport",
    city: "Resende",
  },
  {
    iata: "QSC",
    name: null,
    city: "Sao Carlos",
  },
  {
    iata: "UBT",
    name: "Ubatuba Airport",
    city: "Ubatuba",
  },
  {
    iata: "QGS",
    name: "Alagoinhas Airport",
    city: "Alagoinhas",
  },
  {
    iata: "VOT",
    name: "Votuporanga Airport",
    city: "Votuporanga",
  },
  {
    iata: "QGB",
    name: "Limeira Airport",
    city: "Limeira",
  },
  {
    iata: "IZA",
    name: "Zona da Mata Regional Airport",
    city: "Juiz De Fora",
  },
  {
    iata: "ATF",
    name: null,
    city: "Ambato",
  },
  {
    iata: "OCC",
    name: "Francisco De Orellana Airport",
    city: "Coca",
  },
  {
    iata: "CUE",
    name: "Mariscal Lamar Airport",
    city: "Cuenca",
  },
  {
    iata: "GPS",
    name: "Seymour Airport",
    city: "Baltra",
  },
  {
    iata: "GYE",
    name: "Simon Bolivar International Airport",
    city: "Guayaquil",
  },
  {
    iata: "IBB",
    name: "General Villamil Airport",
    city: "Isabela",
  },
  {
    iata: "JIP",
    name: "Jipijapa Airport",
    city: "Jipijapa",
  },
  {
    iata: "LTX",
    name: "Cotopaxi International Airport",
    city: "Latacunga",
  },
  {
    iata: "MRR",
    name: "Jose Maria Velasco Ibarra Airport",
    city: "Macara",
  },
  {
    iata: "XMS",
    name: "Coronel E Carvajal Airport",
    city: "Macas",
  },
  {
    iata: "MCH",
    name: "General Manuel Serrano Airport",
    city: "Machala",
  },
  {
    iata: "MEC",
    name: "Eloy Alfaro International Airport",
    city: "Manta",
  },
  {
    iata: "LGQ",
    name: "Nueva Loja Airport",
    city: "Lago Agrio",
  },
  {
    iata: "PYO",
    name: "Putumayo Airport",
    city: "Puerto Putumayo",
  },
  {
    iata: "PVO",
    name: "Reales Tamarindos Airport",
    city: "Portoviejo",
  },
  {
    iata: "UIO",
    name: "Mariscal Sucre International Airport",
    city: "Quito",
  },
  {
    iata: "ETR",
    name: "Coronel Artilleria Victor Larrea Airport",
    city: "Santa Rosa",
  },
  {
    iata: "SNC",
    name: "General Ulpiano Paez Airport",
    city: "Salinas",
  },
  {
    iata: "SUQ",
    name: "Sucua Airport",
    city: "Sucua",
  },
  {
    iata: "PTZ",
    name: "Rio Amazonas Airport",
    city: "Shell Mera",
  },
  {
    iata: "SCY",
    name: null,
    city: "San Cristobal",
  },
  {
    iata: "BHA",
    name: "Los Perales Airport",
    city: "Bahia de Caraquez",
  },
  {
    iata: "TSC",
    name: "Taisha Airport",
    city: "Taisha",
  },
  {
    iata: "TPN",
    name: "Tiputini Airport",
    city: "Tiputini",
  },
  {
    iata: "LOH",
    name: "Camilo Ponce Enriquez Airport",
    city: "La Toma (Catamayo)",
  },
  {
    iata: "ESM",
    name: "General Rivadeneira Airport",
    city: "Tachina",
  },
  {
    iata: "TPC",
    name: "Tarapoa Airport",
    city: "Tarapoa",
  },
  {
    iata: "TUA",
    name: "Teniente Coronel Luis a Mantilla Airport",
    city: "Tulcan",
  },
  {
    iata: "PSY",
    name: "Stanley Airport",
    city: "Stanley",
  },
  {
    iata: "ASU",
    name: "Silvio Pettirossi International Airport",
    city: "Asuncion",
  },
  {
    iata: "AYO",
    name: "Juan De Ayolas Airport",
    city: "Ayolas",
  },
  {
    iata: "CIO",
    name: "Teniente Col Carmelo Peralta Airport",
    city: "Concepcion",
  },
  {
    iata: "ENO",
    name: null,
    city: "Encarnacion",
  },
  {
    iata: "AGT",
    name: "Guarani International Airport",
    city: "Ciudad del Este",
  },
  {
    iata: "FLM",
    name: "Filadelfia Airport",
    city: "Filadelfia",
  },
  {
    iata: "ESG",
    name: null,
    city: "Mariscal Estigarribia",
  },
  {
    iata: "PIL",
    name: "Carlos Miguel Gimenez Airport",
    city: "Pilar",
  },
  {
    iata: "PJC",
    name: "Dr Augusto Roberto Fuster International Airport",
    city: "Pedro Juan Caballero",
  },
  {
    iata: "LVR",
    name: "Municipal Bom Futuro Airport",
    city: "Lucas do Rio Verde",
  },
  {
    iata: "FRC",
    name: "Franca Airport",
    city: "Franca",
  },
  {
    iata: "CFO",
    name: "Confresa Airport",
    city: "Confresa",
  },
  {
    iata: "JTC",
    name: "Bauru - Arealva Airport",
    city: "Bauru",
  },
  {
    iata: "ARS",
    name: "Usina Santa Cruz Airport",
    city: "Aragarcas",
  },
  {
    iata: "ACM",
    name: "Arica Airport",
  },
  {
    iata: "ACL",
    name: "Aguaclara Airport",
  },
  {
    iata: "NBB",
    name: "Barranco Minas Airport",
  },
  {
    iata: "AZT",
    name: "Zapatoca Airport",
  },
  {
    iata: "SQB",
    name: "Santa Ana Airport",
  },
  {
    iata: "ARF",
    name: "Acaricuara Airport",
  },
  {
    iata: "ACR",
    name: "Araracuara Airport",
    city: "Araracuara",
  },
  {
    iata: "ACD",
    name: null,
    city: "Acandi",
  },
  {
    iata: "AFI",
    name: "Amalfi Airport",
    city: "Amalfi",
  },
  {
    iata: "ADN",
    name: "Andes Airport",
    city: "Andes",
  },
  {
    iata: "APY",
    name: "Gomez Nino Apiay Air Base",
    city: "Alto Parnaiba",
  },
  {
    iata: "AXM",
    name: "El Eden Airport",
    city: "Armenia",
  },
  {
    iata: "PUU",
    name: "Tres De Mayo Airport",
    city: "Puerto Asis",
  },
  {
    iata: "ELB",
    name: "Las Flores Airport",
    city: "El Banco",
  },
  {
    iata: "BGA",
    name: "Palonegro Airport",
    city: "Bucaramanga",
  },
  {
    iata: "BOG",
    name: "El Dorado International Airport",
    city: "Bogota",
  },
  {
    iata: "BAQ",
    name: "Ernesto Cortissoz International Airport",
    city: "Barranquilla",
  },
  {
    iata: "BSC",
    name: null,
    city: "Bahia Solano",
  },
  {
    iata: "BUN",
    name: null,
    city: "Buenaventura",
  },
  {
    iata: "CPB",
    name: null,
    city: "Capurgana",
  },
  {
    iata: "CUC",
    name: "Camilo Daza International Airport",
    city: "Cucuta",
  },
  {
    iata: "COG",
    name: "Mandinga Airport",
    city: "Condoto",
  },
  {
    iata: "CTG",
    name: null,
    city: "Cartagena",
  },
  {
    iata: "CCO",
    name: "Carimagua Airport",
    city: "Puerto Lopez",
  },
  {
    iata: "CLO",
    name: "Alfonso Bonilla Aragon International Airport",
    city: "Cali",
  },
  {
    iata: "CIM",
    name: "Cimitarra Airport",
    city: "Cimitarra",
  },
  {
    iata: "RAV",
    name: "Cravo Norte Airport",
    city: "Cravo Norte",
  },
  {
    iata: "TCO",
    name: "La Florida Airport",
    city: "Tumaco",
  },
  {
    iata: "CUO",
    name: null,
    city: "Caruru",
  },
  {
    iata: "CAQ",
    name: "Juan H White Airport",
    city: "Caucasia",
  },
  {
    iata: "CVE",
    name: null,
    city: "Covenas",
  },
  {
    iata: "CZU",
    name: "Las Brujas Airport",
    city: "Corozal",
  },
  {
    iata: "EBG",
    name: "El Bagre Airport",
    city: "El Bagre",
  },
  {
    iata: "EJA",
    name: null,
    city: "Barrancabermeja",
  },
  {
    iata: "FLA",
    name: "Gustavo Artunduaga Paredes Airport",
    city: "Florencia",
  },
  {
    iata: "FDA",
    name: null,
    city: "Fundacion",
  },
  {
    iata: "GIR",
    name: "Santiago Vila Airport",
    city: "Girardot",
  },
  {
    iata: "CRC",
    name: "Santa Ana Airport",
    city: "Cartago",
  },
  {
    iata: "GPI",
    name: "Juan Casiano Airport",
    city: "Guapi",
  },
  {
    iata: "GLJ",
    name: null,
    city: "Garzon",
  },
  {
    iata: "CPL",
    name: "Chaparral Airport",
    city: "Chaparral",
  },
  {
    iata: "HTZ",
    name: "Hato Corozal Airport",
    city: "Hato Corozal",
  },
  {
    iata: "IBE",
    name: "Perales Airport",
    city: "Ibague",
  },
  {
    iata: "IGO",
    name: null,
    city: "Chigorodo",
  },
  {
    iata: "MMP",
    name: "Cicuco Airport",
    city: "Limon",
  },
  {
    iata: "IPI",
    name: "San Luis Airport",
    city: "Ipiales",
  },
  {
    iata: "LQM",
    name: "Caucaya Airport",
    city: "Puerto Leguizamo",
  },
  {
    iata: "MCJ",
    name: "Jorge Isaac Airport",
    city: "La Mina-Maicao",
  },
  {
    iata: "LPD",
    name: "La Pedrera Airport",
    city: "La Pedrera",
  },
  {
    iata: "LET",
    name: null,
    city: "Leticia",
  },
  {
    iata: "EOH",
    name: "Enrique Olaya Herrera Airport",
    city: "Medellin",
  },
  {
    iata: "MFS",
    name: "Miraflores Airport",
    city: "Miraflores",
  },
  {
    iata: "MGN",
    name: "Baracoa Airport",
    city: "Magangue",
  },
  {
    iata: "MCJ",
    name: "Maicao Airport",
    city: "La Mina-Maicao",
  },
  {
    iata: "MTB",
    name: "Montelibano Airport",
    city: "Montelibano",
  },
  {
    iata: "MTR",
    name: "Los Garzones Airport",
    city: "Monteria",
  },
  {
    iata: "MVP",
    name: "Fabio Alberto Leon Bentley Airport",
    city: "Mitu",
  },
  {
    iata: "MZL",
    name: "La Nubia Airport",
    city: "Manizales",
  },
  {
    iata: "NCI",
    name: "Necocli Airport",
    city: "Necocli",
  },
  {
    iata: "NQU",
    name: "Reyes Murillo Airport",
    city: "Nuqui",
  },
  {
    iata: "NVA",
    name: "Benito Salas Airport",
    city: "Neiva",
  },
  {
    iata: "OCV",
    name: "Aguas Claras Airport",
    city: "Ocana",
  },
  {
    iata: "ORC",
    name: "Orocue Airport",
    city: "Orocue",
  },
  {
    iata: "PCR",
    name: "German Olano Airport",
    city: "Puerto Carreno",
  },
  {
    iata: "PDA",
    name: "Obando Airport",
    city: "Puerto Inirida",
  },
  {
    iata: "PEI",
    name: null,
    city: "Pereira",
  },
  {
    iata: "PTX",
    name: "Pitalito Airport",
    city: "Pitalito",
  },
  {
    iata: "PLT",
    name: "Plato Airport",
    city: "Plato",
  },
  {
    iata: "NAR",
    name: "Puerto Nare Airport",
    city: "Armenia",
  },
  {
    iata: "PPN",
    name: null,
    city: "Popayan",
  },
  {
    iata: "PQE",
    name: "German Olano Air Base",
    city: "La Dorada",
  },
  {
    iata: "PBE",
    name: "Puerto Berrio Airport",
    city: "Puerto Berrio",
  },
  {
    iata: "PSO",
    name: "Antonio Narino Airport",
    city: "Pasto",
  },
  {
    iata: "PVA",
    name: "El Embrujo Airport",
    city: "Providencia",
  },
  {
    iata: "PZA",
    name: "Paz De Ariporo Airport",
    city: "Paz De Ariporo",
  },
  {
    iata: "MQU",
    name: "Jose Celestino Mutis Airport",
    city: "Mariquita",
  },
  {
    iata: "MDE",
    name: null,
    city: "Rionegro",
  },
  {
    iata: "RCH",
    name: "Almirante Padilla Airport",
    city: "Riohacha",
  },
  {
    iata: "SJE",
    name: "Jorge E. Gonzalez Torres Airport",
    city: "San Jose Del Guaviare",
  },
  {
    iata: "SMR",
    name: null,
    city: "Santa Marta",
  },
  {
    iata: "SOX",
    name: "Alberto Lleras Camargo Airport",
    city: "Sogamoso",
  },
  {
    iata: "ADZ",
    name: "Gustavo Rojas Pinilla International Airport",
    city: "San Andres",
  },
  {
    iata: "SVI",
    name: "Eduardo Falla Solano Airport",
    city: "San Vicente Del Caguan",
  },
  {
    iata: "TBU",
    name: null,
    city: "Nuku'alofa",
  },
  {
    iata: "TDA",
    name: "Trinidad Airport",
    city: "Trinidad",
  },
  {
    iata: "TLU",
    name: null,
    city: "Tolu",
  },
  {
    iata: "TME",
    name: "Gustavo Vargas Airport",
    city: "Tame",
  },
  {
    iata: "TQS",
    name: "Tres Esquinas Air Base",
    city: "Tres Esquinas",
  },
  {
    iata: "TRB",
    name: null,
    city: "Turbo",
  },
  {
    iata: "MQZ",
    name: null,
    city: "",
  },
  {
    iata: "AUC",
    name: "Santiago Perez Airport",
    city: "Arauca",
  },
  {
    iata: "UIB",
    name: null,
    city: "Quibdo",
  },
  {
    iata: "ULQ",
    name: "Farfan Airport",
    city: "Tulua",
  },
  {
    iata: "URR",
    name: "Urrao Airport",
    city: "Urrao",
  },
  {
    iata: "VUP",
    name: null,
    city: "Valledupar",
  },
  {
    iata: "VVC",
    name: "Vanguardia Airport",
    city: "Villavicencio",
  },
  {
    iata: "AYG",
    name: "Yaguara Airport",
    city: "San Vicente Del Caguan",
  },
  {
    iata: "EYP",
    name: "El Yopal Airport",
    city: "El Yopal",
  },
  {
    iata: "MHW",
    name: "Monteagudo Airport",
    city: "El Banado",
  },
  {
    iata: "APB",
    name: "Apolo Airport",
    city: "Apolo",
  },
  {
    iata: "ASC",
    name: null,
    city: "Ascension de Guarayos",
  },
  {
    iata: "BJO",
    name: "Bermejo Airport",
    city: "Bermejo",
  },
  {
    iata: "CAM",
    name: "Camiri Airport",
    city: "Camiri",
  },
  {
    iata: "CBB",
    name: "Jorge Wilsterman International Airport",
    city: "Cochabamba",
  },
  {
    iata: "CIJ",
    name: null,
    city: "Cobija",
  },
  {
    iata: "CEP",
    name: null,
    city: "Concepcion",
  },
  {
    iata: "SRZ",
    name: "El Trompillo Airport",
    city: "Santa Cruz",
  },
  {
    iata: "GYA",
    name: null,
    city: "Guayaramerin",
  },
  {
    iata: "BVK",
    name: "Huacaraje Airport",
    city: "Itenes",
  },
  {
    iata: "SJS",
    name: null,
    city: "San Jose de Chiquitos",
  },
  {
    iata: "SJB",
    name: null,
    city: "San Joaquin",
  },
  {
    iata: "SJV",
    name: "San Javier Airport",
    city: "San Javier",
  },
  {
    iata: "LPB",
    name: "El Alto International Airport",
    city: "La Paz / El Alto",
  },
  {
    iata: "MGD",
    name: "Magdalena Airport",
    city: "Magdalena",
  },
  {
    iata: "ORU",
    name: "Juan Mendoza Airport",
    city: "Oruro",
  },
  {
    iata: "POI",
    name: "Capitan Nicolas Rojas Airport",
    city: "Potosi",
  },
  {
    iata: "PUR",
    name: "Puerto Rico Airport",
    city: "Puerto Rico/Manuripi",
  },
  {
    iata: "PSZ",
    name: null,
    city: "Puerto Suarez",
  },
  {
    iata: "SRD",
    name: null,
    city: "San Ramon / Mamore",
  },
  {
    iata: "RBO",
    name: null,
    city: "Robore",
  },
  {
    iata: "RIB",
    name: null,
    city: "Riberalta",
  },
  {
    iata: "REY",
    name: "Reyes Airport",
    city: "Reyes",
  },
  {
    iata: "SBL",
    name: "Santa Ana Del Yacuma Airport",
    city: "Santa Ana del Yacuma",
  },
  {
    iata: "SRJ",
    name: null,
    city: "San Borja",
  },
  {
    iata: "SNG",
    name: null,
    city: "San Ignacio de Velasco",
  },
  {
    iata: "SNM",
    name: "San Ignacio de Moxos Airport",
    city: "San Ignacio de Moxos",
  },
  {
    iata: "SRB",
    name: "Santa Rosa De Yacuma Airport",
    city: "Santa Rosa",
  },
  {
    iata: "SRE",
    name: "Juana Azurduy De Padilla Airport",
    city: "Sucre",
  },
  {
    iata: "MQK",
    name: null,
    city: "San Matias",
  },
  {
    iata: "TJA",
    name: "Capitan Oriel Lea Plaza Airport",
    city: "Tarija",
  },
  {
    iata: "TDD",
    name: "Teniente Av. Jorge Henrich Arauz Airport",
    city: "Trinidad",
  },
  {
    iata: "UYU",
    name: "Uyuni Airport",
    city: "Quijarro",
  },
  {
    iata: "VAH",
    name: null,
    city: "Vallegrande",
  },
  {
    iata: "VLM",
    name: null,
    city: "Villamontes",
  },
  {
    iata: "VVI",
    name: "Viru Viru International Airport",
    city: "Santa Cruz",
  },
  {
    iata: "BYC",
    name: "Yacuiba Airport",
    city: "Yacuiba",
  },
  {
    iata: "ABN",
    name: "Albina Airport",
    city: "Albina",
  },
  {
    iata: "TOT",
    name: "Totness Airport",
    city: "Totness",
  },
  {
    iata: "DRJ",
    name: "Drietabbetje Airport",
    city: "Drietabbetje",
  },
  {
    iata: "PBM",
    name: "Johan Adolf Pengel International Airport",
    city: "Zandery",
  },
  {
    iata: "ICK",
    name: "Nieuw Nickerie Airport",
    city: "Nieuw Nickerie",
  },
  {
    iata: "OEM",
    name: "Vincent Fayks Airport",
    city: "Paloemeu",
  },
  {
    iata: "SMZ",
    name: "Stoelmanseiland Airport",
    city: "Stoelmanseiland",
  },
  {
    iata: "AGI",
    name: "Wageningen Airport Airport",
    city: "Wageningen Airport",
  },
  {
    iata: "ORG",
    name: "Zorg en Hoop Airport",
    city: "Paramaribo",
  },
  {
    iata: "APY",
    name: null,
    city: "Alto Parnaiba",
  },
  {
    iata: "APQ",
    name: "Arapiraca Airport",
    city: "Arapiraca",
  },
  {
    iata: "AMJ",
    name: null,
    city: "Almenara",
  },
  {
    iata: "AIF",
    name: "Marcelo Pires Halzhausen Airport",
    city: "Assis",
  },
  {
    iata: "BDC",
    name: "Barra do Corda Airport",
    city: "Barra Do Corda",
  },
  {
    iata: "BVM",
    name: "Belmonte Airport",
    city: "Belmonte",
  },
  {
    iata: "BRA",
    name: "Barreiras Airport",
    city: "Barreiras",
  },
  {
    iata: "BSS",
    name: "Balsas Airport",
    city: "Balsas",
  },
  {
    iata: "BMS",
    name: null,
    city: "Brumado",
  },
  {
    iata: "BQQ",
    name: "Barra Airport",
    city: "Barra",
  },
  {
    iata: "CTP",
    name: "Carutapera Airport",
    city: "Carutapera",
  },
  {
    iata: "CPU",
    name: "Cururupu Airport",
    city: "Cururupu",
  },
  {
    iata: "QCH",
    name: "Colatina Airport",
    city: "Colatina",
  },
  {
    iata: "RDC",
    name: null,
    city: "Redencao",
  },
  {
    iata: "LEP",
    name: "Leopoldina Airport",
    city: "Leopoldina",
  },
  {
    iata: "DIQ",
    name: null,
    city: "Divinopolis",
  },
  {
    iata: "CNV",
    name: "Canavieiras Airport",
    city: "Canavieiras",
  },
  {
    iata: "SXX",
    name: null,
    city: "Sao Felix Do Xingu",
  },
  {
    iata: "ODL",
    name: "Guarapari Airport",
    city: "Cordillo Downs",
  },
  {
    iata: "GDP",
    name: "Guadalupe Airport",
    city: "Guadalupe",
  },
  {
    iata: "GNM",
    name: "Guanambi Airport",
    city: "Guanambi",
  },
  {
    iata: "GMS",
    name: null,
    city: "Uberlandia",
  },
  {
    iata: "QGP",
    name: "Garanhuns Airport",
    city: "Garanhuns",
  },
  {
    iata: "ITN",
    name: "Itabuna Airport",
  },
  {
    iata: "IRE",
    name: null,
    city: "Irece",
  },
  {
    iata: "QIG",
    name: "Iguatu Airport",
    city: "Iguatu",
  },
  {
    iata: "QIT",
    name: "Itapetinga Airport",
    city: "Itapetinga",
  },
  {
    iata: "IPU",
    name: null,
    city: "Ipiau",
  },
  {
    iata: "JCM",
    name: "Jacobina Airport",
    city: "Jacobina",
  },
  {
    iata: "FEC",
    name: null,
    city: "Feira De Santana",
  },
  {
    iata: "JEQ",
    name: null,
    city: "Jequie",
  },
  {
    iata: "JNA",
    name: null,
    city: "Januaria",
  },
  {
    iata: "JDR",
    name: null,
    city: "Sao Joao Del Rei",
  },
  {
    iata: "CMP",
    name: "Santana do Araguaia Airport",
    city: "Santana Do Araguaia",
  },
  {
    iata: "QDF",
    name: "Conselheiro Lafaiete Airport",
    city: "Conselheiro Lafaiete",
  },
  {
    iata: "QXD",
    name: "Cachoeiro do Itapemirim Airport",
  },
  {
    iata: "QCP",
    name: "Currais Novos Airport",
    city: "Currais Novos",
  },
  {
    iata: "LVB",
    name: "Livramento do Brumado Airport",
    city: "Livramento Do Brumado",
  },
  {
    iata: "SSO",
    name: null,
    city: "Sao Lourenco",
  },
  {
    iata: "MTE",
    name: "Monte Alegre Airport",
    city: "Monte Alegre",
  },
  {
    iata: "MVS",
    name: "Mucuri Airport",
    city: "Mucuri",
  },
  {
    iata: "SBJ",
    name: null,
    city: "Sao Mateus",
  },
  {
    iata: "PTQ",
    name: "Porto de Moz Airport",
    city: "Porto De Moz",
  },
  {
    iata: "NNU",
    name: "Nanuque Airport",
    city: "Nanuque",
  },
  {
    iata: "QBX",
    name: "Sobral Airport",
    city: "Sobral",
  },
  {
    iata: "PSW",
    name: null,
    city: "Passos",
  },
  {
    iata: "ORX",
    name: null,
    city: "Oriximina",
  },
  {
    iata: "PCS",
    name: "Picos Airport",
    city: "Picos",
  },
  {
    iata: "POJ",
    name: "Patos de Minas Airport",
    city: "Patos De Minas",
  },
  {
    iata: "PIV",
    name: "Pirapora Airport",
    city: "Pirapora",
  },
  {
    iata: "FLB",
    name: "Cangapara Airport",
    city: "Floriano",
  },
  {
    iata: "JDO",
    name: "Colina Verde Heliport",
    city: "Juazeiro Do Norte",
  },
  {
    iata: "PIV",
    name: null,
    city: "Pirapora",
  },
  {
    iata: "PDF",
    name: "Prado Airport",
    city: "Prado",
  },
  {
    iata: "CAU",
    name: "Caruaru Airport",
    city: "Caruaru",
  },
  {
    iata: "SFK",
    name: "Soure Airport",
    city: "Soure",
  },
  {
    iata: "OBI",
    name: null,
    city: "Obidos",
  },
  {
    iata: "TFL",
    name: "Juscelino Kubitscheck Airport",
    city: "Teofilo Otoni",
  },
  {
    iata: "VAL",
    name: null,
    city: "Valenca",
  },
  {
    iata: "QID",
    name: null,
    city: "Tres Coracoes",
  },
  {
    iata: "BVS",
    name: "Breves Airport",
    city: "Breves",
  },
  {
    iata: "CMC",
    name: "Camocim Airport",
    city: "Camocim",
  },
  {
    iata: "QXC",
    name: null,
    city: "Barra De Santo Antonio",
  },
  {
    iata: "PHI",
    name: "Pinheiro Airport",
    city: "Pinheiro",
  },
  {
    iata: "ITI",
    name: null,
    city: "Cumaru Do Norte",
  },
  {
    iata: "PPY",
    name: "Pouso Alegre Airport",
    city: "Pouso Alegre",
  },
  {
    iata: "BXX",
    name: "Boorama Airport",
  },
  {
    iata: "GTA",
    name: "Gatokae Airport",
    city: "Gatokae",
  },
  {
    iata: "CAY",
    name: "Cayenne-Rochambeau Airport",
    city: "Cayenne / Rochambeau",
  },
  {
    iata: "MPY",
    name: "Maripasoula Airport",
    city: "Maripasoula",
  },
  {
    iata: "OXP",
    name: "Saint-Georges-de-l'Oyapock Airport",
    city: "Saint-Georges-de-l'Oyapock Airport",
  },
  {
    iata: "LDX",
    name: "Saint-Laurent-du-Maroni Airport",
    city: "Saint-Laurent-du-Maroni",
  },
  {
    iata: "REI",
    name: "Regina Airport",
    city: "Regina",
  },
  {
    iata: "XAU",
    name: null,
    city: "Saul",
  },
  {
    iata: "APE",
    name: "San Juan Aposento Airport",
    city: "San Juan Aposento",
  },
  {
    iata: "ALD",
    name: "Alerta Airport",
    city: "Fortaleza",
  },
  {
    iata: "AOP",
    name: "Alferez FAP Alfredo Vladimir Sara Bauer Airport",
    city: "Andoas",
  },
  {
    iata: "ATG",
    name: null,
    city: "Atalaya",
  },
  {
    iata: "MBP",
    name: "Moyobamba Airport",
    city: "Moyobamba",
  },
  {
    iata: "LHC",
    name: "Caballococha Airport",
  },
  {
    iata: "BLP",
    name: "Huallaga Airport",
    city: "Bellavista",
  },
  {
    iata: "IBP",
    name: "Iberia Airport",
    city: "Iberia",
  },
  {
    iata: "TCG",
    name: "Tocache Airport",
    city: "Tacheng",
  },
  {
    iata: "PCL",
    name: "Cap FAP David Abenzur Rengifo International Airport",
    city: "Pucallpa",
  },
  {
    iata: "CTF",
    name: "Contamana Airport",
    city: "Coatepeque",
  },
  {
    iata: "CHM",
    name: "Teniente FAP Jaime A De Montreuil Morales Airport",
    city: "Chimbote",
  },
  {
    iata: "TGI",
    name: "Tingo Maria Airport",
    city: "Tingo Maria",
  },
  {
    iata: "CIX",
    name: "Capitan FAP Jose A Quinones Gonzales International Airport",
    city: "Chiclayo",
  },
  {
    iata: "AYP",
    name: "Coronel FAP Alfredo Mendivil Duarte Airport",
    city: "Ayacucho",
  },
  {
    iata: "ANS",
    name: "Andahuaylas Airport",
    city: "Andahuaylas",
  },
  {
    iata: "ATA",
    name: "Comandante FAP German Arias Graziani Airport",
    city: "Anta",
  },
  {
    iata: "UMI",
    name: "Quince Air Base",
    city: "Quince Mil",
  },
  {
    iata: "LIM",
    name: null,
    city: "Lima",
  },
  {
    iata: "SFK",
    name: "Satipo Airport",
    city: "Soure",
  },
  {
    iata: "UCZ",
    name: "Uchiza Airport",
    city: "Uchiza",
  },
  {
    iata: "RIJ",
    name: "Juan Simons Vela Airport",
    city: "Rioja",
  },
  {
    iata: "JJI",
    name: "Juanjui Airport",
    city: "Juanjui",
  },
  {
    iata: "JAU",
    name: "Francisco Carle Airport",
    city: "Jauja",
  },
  {
    iata: "JUL",
    name: "Inca Manco Capac International Airport",
    city: "Juliaca",
  },
  {
    iata: "SJA",
    name: "San Juan de Marcona Airport",
    city: "San Juan de Marcona",
  },
  {
    iata: "CJA",
    name: "Mayor General FAP Armando Revoredo Iglesias Airport",
    city: "Cajamarca",
  },
  {
    iata: "RIM",
    name: "San Nicolas Airport",
    city: "Rodriguez de Mendoza",
  },
  {
    iata: "ILQ",
    name: "Ilo Airport",
    city: "Ilo",
  },
  {
    iata: "LIM",
    name: "Las Palmas Airport",
    city: "Lima",
  },
  {
    iata: "TBP",
    name: "Capitan FAP Pedro Canga Rodriguez Airport",
    city: "Tumbes",
  },
  {
    iata: "CHM",
    name: "Manuel Prado Ugarteche Airport",
    city: "Chimbote",
  },
  {
    iata: "SMG",
    name: "Santa Maria Airport",
    city: "Santa Maria",
  },
  {
    iata: "YMS",
    name: "Moises Benzaquen Rengifo Airport",
    city: "Yurimaguas",
  },
  {
    iata: "HUU",
    name: "Alferez Fap David Figueroa Fernandini Airport",
    city: "Huanuco",
  },
  {
    iata: "SQU",
    name: "Saposoa Airport",
    city: "Plaza Saposoa",
  },
  {
    iata: "SYC",
    name: "Shiringayoc/Hacienda Hda Mejia Airport",
    city: "Shiringayoc",
  },
  {
    iata: "CHH",
    name: "Chachapoyas Airport",
    city: "Chachapoyas",
  },
  {
    iata: "REQ",
    name: "Requena Airport",
    city: "Requena",
  },
  {
    iata: "IQT",
    name: "Coronel FAP Francisco Secada Vignetta International Airport",
    city: "Iquitos",
  },
  {
    iata: "AQP",
    name: null,
    city: "Arequipa",
  },
  {
    iata: "TRU",
    name: "Capitan FAP Carlos Martinez De Pinillos International Airport",
    city: "Trujillo",
  },
  {
    iata: "SQD",
    name: "San Francisco Airport",
    city: "San Francisco de Yeso",
  },
  {
    iata: "PIO",
    name: null,
    city: "Pisco",
  },
  {
    iata: "TPP",
    name: "Cadete FAP Guillermo Del Castillo Paredes Airport",
    city: "Tarapoto",
  },
  {
    iata: "SYC",
    name: "Shiringayoc Airport",
    city: "Shiringayoc",
  },
  {
    iata: "TCQ",
    name: "Coronel FAP Carlos Ciriani Santa Rosa International Airport",
    city: "Tacna",
  },
  {
    iata: "PEM",
    name: "Padre Aldamiz International Airport",
    city: "Puerto Maldonado",
  },
  {
    iata: "PIU",
    name: null,
    city: "Piura",
  },
  {
    iata: "TYL",
    name: "Capitan Montes Airport",
    city: "",
  },
  {
    iata: "NZA",
    name: "Maria Reiche Neuman Airport",
    city: "Nzagi",
  },
  {
    iata: "CUZ",
    name: "Alejandro Velasco Astete International Airport",
    city: "Cusco",
  },
  {
    iata: "AAJ",
    name: "Cayana Airstrip",
    city: "Awaradam",
  },
  {
    iata: "KCB",
    name: "Tepoe Airstrip",
    city: "Kasikasima",
  },
  {
    iata: "APU",
    name: "Apucarana Airport",
    city: "Apucarana",
  },
  {
    iata: "BNU",
    name: "Blumenau Airport",
    city: "Blumenau",
  },
  {
    iata: "CCI",
    name: null,
    city: "Concordia",
  },
  {
    iata: "QCN",
    name: "Canela Airport",
    city: "Canela",
  },
  {
    iata: "CKO",
    name: null,
    city: "Cornelio Procopio",
  },
  {
    iata: "DOU",
    name: "Dourados Airport",
    city: "Dourados",
  },
  {
    iata: "ERM",
    name: "Erechim Airport",
    city: "Erechim",
  },
  {
    iata: "FBE",
    name: null,
    city: "Francisco Beltrao",
  },
  {
    iata: "QGA",
    name: null,
    city: "Guaira",
  },
  {
    iata: "IJU",
    name: null,
    city: "Ijui",
  },
  {
    iata: "ITQ",
    name: "Itaqui Airport",
    city: "Itaqui",
  },
  {
    iata: "JCB",
    name: "Santa Terezinha Airport",
    city: "Joacaba",
  },
  {
    iata: "QDB",
    name: "Cachoeira do Sul Airport",
    city: "Cachoeira Do Sul",
  },
  {
    iata: "QCR",
    name: "Curitibanos Airport",
    city: "Curitibanos",
  },
  {
    iata: "QRE",
    name: "Carazinho Airport",
  },
  {
    iata: "ALQ",
    name: "Alegrete Novo Airport",
    city: "Alegrete",
  },
  {
    iata: "QMF",
    name: "Mafra Airport",
    city: "Mafra",
  },
  {
    iata: "QGF",
    name: "Montenegro Airport",
    city: "Montenegro",
  },
  {
    iata: "QHV",
    name: "Novo Hamburgo Airport",
    city: "Novo Hamburgo",
  },
  {
    iata: "SQX",
    name: null,
    city: "Sao Miguel Do Oeste",
  },
  {
    iata: "APX",
    name: "Arapongas Airport",
    city: "Arapongas",
  },
  {
    iata: "PTO",
    name: "Pato Branco Airport",
    city: "Pato Branco",
  },
  {
    iata: "PNG",
    name: null,
    city: "Paranagua",
  },
  {
    iata: "PVI",
    name: null,
    city: "Paranavai",
  },
  {
    iata: "PBB",
    name: null,
    city: "Paranaiba",
  },
  {
    iata: "QAC",
    name: "Castro Airport",
    city: "Castro",
  },
  {
    iata: "SQY",
    name: null,
    city: "Sao Lourenco Do Sul",
  },
  {
    iata: "QOJ",
    name: null,
    city: "Sao Borja",
  },
  {
    iata: "CSU",
    name: "Santa Cruz do Sul Airport",
    city: "Santa Cruz Do Sul",
  },
  {
    iata: "UMU",
    name: "Umuarama Airport",
    city: "Umuarama",
  },
  {
    iata: "QVB",
    name: null,
    city: "Uniao Da Vitoria",
  },
  {
    iata: "VIA",
    name: "Videira Airport",
    city: "Videira",
  },
  {
    iata: "CTQ",
    name: null,
    city: "Santa Vitoria Do Palmar",
  },
  {
    iata: "AXE",
    name: null,
    city: "Xanxere",
  },
  {
    iata: "AAG",
    name: "Arapoti Airport",
    city: "Arapoti",
  },
  {
    iata: "SRA",
    name: "Santa Rosa Airport",
    city: "Santa Rosa",
  },
  {
    iata: "PGZ",
    name: "Ponta Grossa Airport",
    city: "Ponta Grossa",
  },
  {
    iata: "ATI",
    name: "Artigas International Airport",
    city: "Artigas",
  },
  {
    iata: "BUV",
    name: "Bella Union Airport",
  },
  {
    iata: "CYR",
    name: "Laguna de Los Patos International Airport",
    city: "Colonia",
  },
  {
    iata: "CAR",
    name: "Carmelo International Airport",
    city: "Caribou",
  },
  {
    iata: "DZO",
    name: "Santa Bernardina International Airport",
    city: "Durazno",
  },
  {
    iata: "PDP",
    name: "Capitan Corbeta CA Curbelo International Airport",
    city: "Punta del Este",
  },
  {
    iata: "MER",
    name: "Ricardo de Tomasi International Airport",
    city: "Merced",
  },
  {
    iata: "MLZ",
    name: "Cerro Largo International Airport",
    city: "Melo",
  },
  {
    iata: "MVD",
    name: "Carrasco International /General C L Berisso Airport",
    city: "Montevideo",
  },
  {
    iata: "MDO",
    name: "El Jaguel / Punta del Este Airport",
    city: "Middleton Island",
  },
  {
    iata: "PDU",
    name: "Tydeo Larre Borges Airport",
    city: "Paysandu",
  },
  {
    iata: "RVY",
    name: "Presidente General Don Oscar D. Gestido International Airport",
    city: "Rivera",
  },
  {
    iata: "STY",
    name: "Nueva Hesperides International Airport",
    city: "Salto",
  },
  {
    iata: "TAW",
    name: "Tacuarembo Airport",
    city: "Tacuarembo",
  },
  {
    iata: "TYT",
    name: "Treinta y Tres Airport",
    city: "Treinta y Tres",
  },
  {
    iata: "VCH",
    name: "Vichadero Airport",
    city: "Vichadero",
  },
  {
    iata: "AGV",
    name: "Oswaldo Guevara Mujica Airport",
    city: "Acarigua",
  },
  {
    iata: "AAO",
    name: "Anaco Airport",
    city: "Anaco",
  },
  {
    iata: "LPJ",
    name: "Armando Schwarck Airport",
    city: "Guayabal",
  },
  {
    iata: "BLA",
    name: "General Jose Antonio Anzoategui International Airport",
    city: "Barcelona",
  },
  {
    iata: "BNS",
    name: "Barinas Airport",
    city: "Barinas",
  },
  {
    iata: "ELR",
    name: "El Libertador Airbase",
  },
  {
    iata: "BRM",
    name: "Barquisimeto International Airport",
    city: "Barquisimeto",
  },
  {
    iata: "MYC",
    name: "Escuela Mariscal Sucre Airport",
    city: "Maracay",
  },
  {
    iata: "CBL",
    name: null,
    city: "",
  },
  {
    iata: "CXA",
    name: "Caicara del Orinoco Airport",
    city: "",
  },
  {
    iata: "CUV",
    name: "Casigua El Cubo Airport",
    city: "Casigua El Cubo",
  },
  {
    iata: "CLZ",
    name: "Calabozo Airport",
    city: "Guarico",
  },
  {
    iata: "CAJ",
    name: "Canaima Airport",
    city: "Canaima",
  },
  {
    iata: "VCR",
    name: "Carora Airport",
    city: "Carora",
  },
  {
    iata: "CUP",
    name: null,
    city: "Carupano",
  },
  {
    iata: "CZE",
    name: null,
    city: "Coro",
  },
  {
    iata: "CUM",
    name: null,
    city: "",
  },
  {
    iata: "isl",
    name: "La Tortuga Punta Delgada Airport",
    city: "Isla La Tortuga",
  },
  {
    iata: "EOR",
    name: "El Dorado Airport",
    city: "Bolivar",
  },
  {
    iata: "EOZ",
    name: "Elorza Airport",
    city: "",
  },
  {
    iata: "GDO",
    name: "Guasdalito Airport",
    city: "",
  },
  {
    iata: "GUI",
    name: "Guiria Airport",
    city: "",
  },
  {
    iata: "GUQ",
    name: "Guanare Airport",
    city: "Guanare",
  },
  {
    iata: "ICA",
    name: null,
    city: "",
  },
  {
    iata: "LSP",
    name: "Josefa Camejo International Airport",
    city: "Paraguana",
  },
  {
    iata: "KAV",
    name: "Kavanayen Airport",
    city: "",
  },
  {
    iata: "LFR",
    name: "La Fria Airport",
    city: "",
  },
  {
    iata: "MAR",
    name: "La Chinita International Airport",
    city: "Maracaibo",
  },
  {
    iata: "MRD",
    name: "Alberto Carnevalli Airport",
    city: "Merida",
  },
  {
    iata: "PMV",
    name: null,
    city: "Isla Margarita",
  },
  {
    iata: "CCS",
    name: null,
    city: "Caracas",
  },
  {
    iata: "MUN",
    name: null,
    city: "",
  },
  {
    iata: "CBS",
    name: "Oro Negro Airport",
    city: "Cabimas",
  },
  {
    iata: "PYH",
    name: "Cacique Aramare Airport",
    city: "",
  },
  {
    iata: "PBL",
    name: "General Bartolome Salom International Airport",
    city: "",
  },
  {
    iata: "PDZ",
    name: "Pedernales Airport",
    city: "",
  },
  {
    iata: "PPH",
    name: "Perai Tepuy Airport",
    city: "",
  },
  {
    iata: "SCI",
    name: "Paramillo Airport",
    city: "",
  },
  {
    iata: "PZO",
    name: "General Manuel Carlos Piar International Airport",
    city: "Puerto Ordaz-Ciudad Guayana",
  },
  {
    iata: "PTM",
    name: "Palmarito Airport",
    city: "Palmarito",
  },
  {
    iata: "LRV",
    name: "Gran Roque Airport",
    city: "Los Roques",
  },
  {
    iata: "SVZ",
    name: "San Antonio Del Tachira Airport",
    city: "",
  },
  {
    iata: "SBB",
    name: null,
    city: "Santa Barbara",
  },
  {
    iata: "SNV",
    name: "Santa Elena de Uairen Airport",
    city: "",
  },
  {
    iata: "STD",
    name: "Mayor Buenaventura Vivas International Airport",
    city: "Santo Domingo",
  },
  {
    iata: "SNF",
    name: "Sub Teniente Nestor Arias Airport",
    city: "San Felipe",
  },
  {
    iata: "SFD",
    name: "San Fernando De Apure Airport",
    city: "Inglaterra",
  },
  {
    iata: "SOM",
    name: "San Tome Airport",
    city: "",
  },
  {
    iata: "STB",
    name: null,
    city: "",
  },
  {
    iata: "TUV",
    name: "Tucupita Airport",
    city: "Tucupita",
  },
  {
    iata: "TMO",
    name: "Tumeremo Airport",
    city: "",
  },
  {
    iata: "URM",
    name: "Uriman Airport",
    city: "",
  },
  {
    iata: "VLN",
    name: "Arturo Michelena International Airport",
    city: "Valencia",
  },
  {
    iata: "VIG",
    name: null,
    city: "El Vigia",
  },
  {
    iata: "VLV",
    name: null,
    city: "Valera",
  },
  {
    iata: "VDP",
    name: "Valle de La Pascua Airport",
    city: "",
  },
  {
    iata: "BAZ",
    name: "Barcelos Airport",
    city: "Barcelos",
  },
  {
    iata: "RBB",
    name: "Borba Airport",
    city: "Borba",
  },
  {
    iata: "CAF",
    name: "Carauari Airport",
    city: "Carauari",
  },
  {
    iata: "CQS",
    name: "Costa Marques Airport",
    city: "Costa Marques",
  },
  {
    iata: "DMT",
    name: "Diamantino Airport",
    city: "Diamantino",
  },
  {
    iata: "DNO",
    name: null,
    city: "Dianopolis",
  },
  {
    iata: "ARS",
    name: null,
    city: "Aragarcas",
  },
  {
    iata: "ERN",
    name: null,
    city: "Eirunepe",
  },
  {
    iata: "CQA",
    name: "Canarana Airport",
    city: "Canarana",
  },
  {
    iata: "FEJ",
    name: null,
    city: "Feijo",
  },
  {
    iata: "SXO",
    name: null,
    city: "Sao Felix Do Araguaia",
  },
  {
    iata: "GRP",
    name: "Gurupi Airport",
    city: "Gurupi",
  },
  {
    iata: "AUX",
    name: null,
    city: "Araguaina",
  },
  {
    iata: "IPG",
    name: "Ipiranga Airport",
    city: "Santo Antonio Do Ica",
  },
  {
    iata: "IDO",
    name: "Santa Izabel do Morro Airport",
    city: "Cristalandia",
  },
  {
    iata: "JPR",
    name: null,
    city: "Ji-Parana",
  },
  {
    iata: "JIA",
    name: null,
    city: "Juina",
  },
  {
    iata: "JRN",
    name: "Juruena Airport",
    city: "Juruena",
  },
  {
    iata: "CCX",
    name: null,
    city: "Caceres",
  },
  {
    iata: "CIZ",
    name: "Coari Airport",
    city: "Coari",
  },
  {
    iata: "TLZ",
    name: null,
    city: "Catalao",
  },
  {
    iata: "LBR",
    name: null,
    city: "Labrea",
  },
  {
    iata: "RVD",
    name: "General Leite de Castro Airport",
    city: "Rio Verde",
  },
  {
    iata: "MBZ",
    name: null,
    city: "Maues",
  },
  {
    iata: "NVP",
    name: null,
    city: "Novo Aripuana",
  },
  {
    iata: "AQM",
    name: "Nova Vida Airport",
    city: "Ariquemes",
  },
  {
    iata: "BCR",
    name: "Novo Campo Airport",
    city: "Boca Do Acre",
  },
  {
    iata: "NQL",
    name: null,
    city: "Niquelandia",
  },
  {
    iata: "APS",
    name: null,
    city: "Anapolis",
  },
  {
    iata: "PIN",
    name: "Parintins Airport",
    city: "Parintins",
  },
  {
    iata: "PMW",
    name: null,
    city: "Palmas",
  },
  {
    iata: "PBQ",
    name: "Pimenta Bueno Airport",
    city: "Pimenta Bueno",
  },
  {
    iata: "AAI",
    name: "Arraias Airport",
    city: "Arraias",
  },
  {
    iata: "ROO",
    name: null,
    city: "Rondonopolis",
  },
  {
    iata: "AIR",
    name: null,
    city: "Paracatu",
  },
  {
    iata: "OPS",
    name: null,
    city: "Sinop",
  },
  {
    iata: "STZ",
    name: "Santa Terezinha Airport",
    city: "Santa Terezinha",
  },
  {
    iata: "IRZ",
    name: "Tapuruquara Airport",
    city: "Santa Isabel Do Rio Negro",
  },
  {
    iata: "AZL",
    name: null,
    city: "Sapezal",
  },
  {
    iata: "QHN",
    name: "Taguatinga Airport",
    city: "Taguatinga",
  },
  {
    iata: "SQM",
    name: null,
    city: "Sao Miguel Do Araguaia",
  },
  {
    iata: "VLP",
    name: "Vila Rica Airport",
    city: "Vila Rica",
  },
  {
    iata: "MBK",
    name: "Regional Orlando Villas Boas Airport",
    city: "Matupa",
  },
  {
    iata: "NOK",
    name: "Xavantina Airport",
    city: "Nova Xavantina",
  },
  {
    iata: "AHL",
    name: "Aishalton Airport",
    city: "Aishalton",
  },
  {
    iata: "NAI",
    name: "Annai Airport",
    city: "Annai",
  },
  {
    iata: "BMJ",
    name: "Baramita Airport",
    city: "Baramita",
  },
  {
    iata: "GFO",
    name: "Bartica A Airport",
    city: "Bartica",
  },
  {
    iata: "GEO",
    name: "Cheddi Jagan International Airport",
    city: "Georgetown",
  },
  {
    iata: "OGL",
    name: "Ogle Airport",
    city: "Ogle",
  },
  {
    iata: "IMB",
    name: "Imbaimadai Airport",
    city: "Imbaimadai",
  },
  {
    iata: "KAR",
    name: "Kamarang Airport",
    city: "Kamarang",
  },
  {
    iata: "KRM",
    name: "Karanambo Airport",
    city: "Karanambo",
  },
  {
    iata: "KRG",
    name: "Karasabai Airport",
    city: "Karasabai",
  },
  {
    iata: "KTO",
    name: "Kato Airport",
    city: "Kato",
  },
  {
    iata: "LUB",
    name: "Lumid Pau Airport",
    city: "Lumid Pau",
  },
  {
    iata: "LTM",
    name: "Lethem Airport",
    city: "Lethem",
  },
  {
    iata: "USI",
    name: "Mabaruma Airport",
    city: "Mabaruma",
  },
  {
    iata: "MHA",
    name: "Mahdia Airport",
    city: "Mahdia",
  },
  {
    iata: "MYM",
    name: "Monkey Mountain Airport",
    city: "Monkey Mountain",
  },
  {
    iata: "QSX",
    name: "New Amsterdam Airport",
    city: "New Amsterdam",
  },
  {
    iata: "ORJ",
    name: "Orinduik Airport",
    city: "Orinduik",
  },
  {
    iata: "PRR",
    name: "Paruma Airport",
    city: "Paruma",
  },
  {
    iata: "SZN",
    name: "Santa Cruz Island Airport",
    city: "Santa Barbara",
  },
  {
    iata: "ANU",
    name: "V.C. Bird International Airport",
    city: "St. George",
  },
  {
    iata: "BBQ",
    name: "Codrington Airport",
    city: "Codrington",
  },
  {
    iata: "BGI",
    name: "Sir Grantley Adams International Airport",
    city: "Bridgetown",
  },
  {
    iata: "DCF",
    name: "Canefield Airport",
    city: "Canefield",
  },
  {
    iata: "DOM",
    name: "Melville Hall Airport",
    city: "Marigot",
  },
  {
    iata: "DSD",
    name: null,
    city: "Grande Anse",
  },
  {
    iata: "BBR",
    name: "Baillif Airport",
    city: "Basse Terre",
  },
  {
    iata: "SFC",
    name: null,
    city: "St-Francois",
  },
  {
    iata: "FDF",
    name: null,
    city: "Fort-de-France",
  },
  {
    iata: "SFG",
    name: null,
    city: "Grand Case",
  },
  {
    iata: "SBH",
    name: "Gustaf III Airport",
    city: "Gustavia",
  },
  {
    iata: "GBJ",
    name: "Les Bases Airport",
    city: "Grand Bourg",
  },
  {
    iata: "PTP",
    name: null,
    city: "Pointe-a-Pitre Le Raizet",
  },
  {
    iata: "LSS",
    name: "Terre-de-Haut Airport",
    city: "Les Saintes",
  },
  {
    iata: "GND",
    name: "Point Salines International Airport",
    city: "Saint George's",
  },
  {
    iata: "CRU",
    name: "Lauriston Airport",
    city: "Carriacou Island",
  },
  {
    iata: "STT",
    name: "Cyril E. King Airport",
    city: "Charlotte Amalie",
  },
  {
    iata: "STX",
    name: "Henry E Rohlsen Airport",
    city: "Christiansted",
  },
  {
    iata: "ARE",
    name: "Antonio Nery Juarbe Pol Airport",
    city: "Arecibo",
  },
  {
    iata: "BQN",
    name: "Rafael Hernandez Airport",
    city: "Aguadilla",
  },
  {
    iata: "VQS",
    name: "Vieques Airport",
    city: "Vieques Island",
  },
  {
    iata: "CPX",
    name: "Benjamin Rivera Noriega Airport",
    city: "Culebra Island",
  },
  {
    iata: "FAJ",
    name: "Diego Jimenez Torres Airport",
    city: "Fajardo",
  },
  {
    iata: "SIG",
    name: "Fernando Luis Ribas Dominicci Airport",
    city: "San Juan",
  },
  {
    iata: "MAZ",
    name: "Eugenio Maria De Hostos Airport",
    city: "Mayaguez",
  },
  {
    iata: "PSE",
    name: "Mercedita Airport",
    city: "Ponce",
  },
  {
    iata: "SJU",
    name: "Luis Munoz Marin International Airport",
    city: "San Juan",
  },
  {
    iata: "SKB",
    name: "Robert L. Bradshaw International Airport",
    city: "Basseterre",
  },
  {
    iata: "NEV",
    name: "Vance W. Amory International Airport",
    city: "Charlestown",
  },
  {
    iata: "SLU",
    name: "George F. L. Charles Airport",
    city: "Castries",
  },
  {
    iata: "UVF",
    name: "Hewanorra International Airport",
    city: "Vieux Fort",
  },
  {
    iata: "NBE",
    name: "Enfidha Zine El Abidine Ben Ali International Airport",
    city: "Enfidha",
  },
  {
    iata: "AUA",
    name: "Queen Beatrix International Airport",
    city: "Oranjestad",
  },
  {
    iata: "BON",
    name: "Flamingo International Airport",
    city: "Kralendijk",
  },
  {
    iata: "CUR",
    name: "Hato International Airport",
    city: "Willemstad",
  },
  {
    iata: "EUX",
    name: "F. D. Roosevelt Airport",
    city: "Sint Eustatius",
  },
  {
    iata: "SXM",
    name: "Princess Juliana International Airport",
    city: "Saint Martin",
  },
  {
    iata: "SAB",
    name: "Juancho E. Yrausquin Airport",
    city: "Saba",
  },
  {
    iata: "AXA",
    name: "Wallblake Airport",
    city: "The Valley",
  },
  {
    iata: "MNI",
    name: "John A. Osborne Airport",
    city: "Gerald's Park",
  },
  {
    iata: "TAB",
    name: "Tobago-Crown Point Airport",
    city: "Scarborough",
  },
  {
    iata: "POS",
    name: "Piarco International Airport",
    city: "Port of Spain",
  },
  {
    iata: "NGD",
    name: "Captain Auguste George Airport",
    city: "Anegada",
  },
  {
    iata: "EIS",
    name: "Terrance B. Lettsome International Airport",
    city: "Road Town",
  },
  {
    iata: "VIJ",
    name: "Virgin Gorda Airport",
    city: "Spanish Town",
  },
  {
    iata: "BR-",
    name: "Tucuma Airport",
  },
  {
    iata: "BQU",
    name: "J F Mitchell Airport",
    city: "Bequia",
  },
  {
    iata: "CIW",
    name: "Canouan Airport",
    city: "Canouan",
  },
  {
    iata: "MQS",
    name: "Mustique Airport",
    city: "Mustique Island",
  },
  {
    iata: "UNI",
    name: "Union Island International Airport",
    city: "Union Island",
  },
  {
    iata: "SVD",
    name: "E. T. Joshua Airport",
    city: "Kingstown",
  },
  {
    iata: "CMJ",
    name: "Chi Mei Airport",
  },
  {
    iata: "TWH",
    name: "Two Harbors Amphibious Terminal",
  },
  {
    iata: "BDA",
    name: "L.F. Wade International International Airport",
    city: "Hamilton",
  },
  {
    iata: "GIT",
    name: "Geita Airport",
  },
  {
    iata: "LUY",
    name: "Lushoto Airport",
  },
  {
    iata: "ALA",
    name: "Almaty Airport",
    city: "Almaty",
  },
  {
    iata: "BXH",
    name: "Balkhash Airport",
    city: "Balkhash",
  },
  {
    iata: "BXJ",
    name: "Boralday Airport",
    city: "Aima Ata",
  },
  {
    iata: "TSE",
    name: "Astana International Airport",
  },
  {
    iata: "KOV",
    name: "Kokshetau Airport",
    city: "Kokshetau",
  },
  {
    iata: "PPK",
    name: "Petropavlosk South Airport",
    city: "Petropavlosk",
  },
  {
    iata: "DMB",
    name: "Taraz Airport",
    city: "Taraz",
  },
  {
    iata: "UAE",
    name: "Mount Aue Airport",
  },
  {
    iata: "FRU",
    name: "Manas International Airport",
    city: "Bishkek",
  },
  {
    iata: "OSS",
    name: "Osh Airport",
    city: "Osh",
  },
  {
    iata: "CIT",
    name: "Shymkent Airport",
    city: "Shymkent",
  },
  {
    iata: "DZN",
    name: "Zhezkazgan Airport",
    city: "Zhezkazgan",
  },
  {
    iata: "KGF",
    name: "Sary-Arka Airport",
    city: "Karaganda",
  },
  {
    iata: "KZO",
    name: "Kzyl-Orda Southwest Airport",
    city: "Kzyl-Orda",
  },
  {
    iata: "URA",
    name: "Uralsk Airport",
    city: "Uralsk",
  },
  {
    iata: "EKB",
    name: "Ekibastuz Airport",
    city: "Ekibastuz",
  },
  {
    iata: "UKK",
    name: "Ust-Kamennogorsk Airport",
    city: "Ust Kamenogorsk",
  },
  {
    iata: "PWQ",
    name: "Pavlodar Airport",
    city: "Pavlodar",
  },
  {
    iata: "DLX",
    name: "Semipalatinsk Airport",
  },
  {
    iata: "SCO",
    name: "Aktau Airport",
    city: "Aktau",
  },
  {
    iata: "GUW",
    name: "Atyrau Airport",
    city: "Atyrau",
  },
  {
    iata: "AKX",
    name: "Aktobe Airport",
    city: "Aktyubinsk",
  },
  {
    iata: "AYK",
    name: "Arkalyk North Airport",
    city: "Arkalyk",
  },
  {
    iata: "KSN",
    name: "Kostanay West Airport",
    city: "Kostanay",
  },
  {
    iata: "GYD",
    name: "Heydar Aliyev International Airport",
    city: "Baku",
  },
  {
    iata: "KVD",
    name: "Ganja Airport",
  },
  {
    iata: "NAJ",
    name: "Nakhchivan Airport",
    city: "Nakhchivan",
  },
  {
    iata: "GBB",
    name: "Gabala International Airport",
    city: "Gabala",
  },
  {
    iata: "ZTU",
    name: "Zaqatala International Airport",
    city: "Zaqatala",
  },
  {
    iata: "LWN",
    name: "Gyumri Shirak Airport",
    city: "Gyumri",
  },
  {
    iata: "EVN",
    name: "Zvartnots International Airport",
    city: "Yerevan",
  },
  {
    iata: "ADH",
    name: "Aldan Airport",
    city: "Aldan",
  },
  {
    iata: "YKS",
    name: "Yakutsk Airport",
    city: "Yakutsk",
  },
  {
    iata: "CNN",
    name: "Chulman Airport",
    city: "Chulman",
  },
  {
    iata: "ULK",
    name: "Lensk Airport",
    city: "Lensk",
  },
  {
    iata: "PYJ",
    name: "Polyarny Airport",
    city: "Yakutia",
  },
  {
    iata: "MJZ",
    name: "Mirny Airport",
    city: "Mirny",
  },
  {
    iata: "CKH",
    name: "Chokurdakh Airport",
    city: "Chokurdah",
  },
  {
    iata: "CYX",
    name: "Cherskiy Airport",
    city: "Cherskiy",
  },
  {
    iata: "IKS",
    name: "Tiksi Airport",
    city: "Tiksi",
  },
  {
    iata: "ENK",
    name: "Zyryanka Airport",
    city: "Enniskillen",
  },
  {
    iata: "OYG",
    name: "Moyo Airport",
  },
  {
    iata: "UGB",
    name: "Ugashik Bay Airport",
  },
  {
    iata: "KUT",
    name: "Kopitnari Airport",
    city: "Kutaisi",
  },
  {
    iata: "BUS",
    name: "Batumi International Airport",
    city: "Batumi",
  },
  {
    iata: "SUI",
    name: "Sukhumi Dranda Airport",
    city: "Sukhumi",
  },
  {
    iata: "TBS",
    name: "Tbilisi International Airport",
    city: "Tbilisi",
  },
  {
    iata: "BQS",
    name: "Ignatyevo Airport",
    city: "Blagoveschensk",
  },
  {
    iata: "GDG",
    name: "Magdagachi Airport",
    city: "Magdagachi",
  },
  {
    iata: "TYD",
    name: "Tynda Airport",
    city: "Tynda",
  },
  {
    iata: "KHV",
    name: "Khabarovsk-Novy Airport",
    city: "Khabarovsk",
  },
  {
    iata: "KXK",
    name: "Komsomolsk-on-Amur Airport",
    city: "Komsomolsk-on-Amur",
  },
  {
    iata: "DYR",
    name: "Ugolny Airport",
    city: "Anadyr",
  },
  {
    iata: "PVS",
    name: "Provideniya Bay Airport",
    city: "Chukotka",
  },
  {
    iata: "GDX",
    name: "Sokol Airport",
    city: "Magadan",
  },
  {
    iata: "PWE",
    name: "Pevek Airport",
    city: "Pevek",
  },
  {
    iata: "BQG",
    name: "Bogorodskoye Airport",
    city: "Bogorodskoye",
  },
  {
    iata: "OHO",
    name: "Okhotsk Airport",
    city: "Okhotsk",
  },
  {
    iata: "PKC",
    name: "Yelizovo Airport",
    city: "Petropavlovsk-Kamchatsky",
  },
  {
    iata: "OHH",
    name: "Okha Airport",
    city: "Okha",
  },
  {
    iata: "EKS",
    name: "Shakhtyorsk Airport",
    city: "Shakhtersk",
  },
  {
    iata: "DEE",
    name: "Mendeleyevo Airport",
    city: "Kunashir Island",
  },
  {
    iata: "ZZO",
    name: "Zonalnoye Airport",
    city: "Tymovskoye",
  },
  {
    iata: "UUS",
    name: "Yuzhno-Sakhalinsk Airport",
    city: "Yuzhno-Sakhalinsk",
  },
  {
    iata: "VVO",
    name: "Vladivostok International Airport",
    city: "Vladivostok",
  },
  {
    iata: "HTA",
    name: "Chita-Kadala Airport",
    city: "Chita",
  },
  {
    iata: "BTK",
    name: "Bratsk Airport",
    city: "Bratsk",
  },
  {
    iata: "UIK",
    name: "Ust-Ilimsk Airport",
    city: "Ust-Ilimsk",
  },
  {
    iata: "IKT",
    name: "Irkutsk Airport",
    city: "Irkutsk",
  },
  {
    iata: "ODO",
    name: "Bodaybo Airport",
    city: "Bodaybo",
  },
  {
    iata: "ERG",
    name: "Yerbogachen Airport",
    city: "Erbogachen",
  },
  {
    iata: "UKX",
    name: "Ust-Kut Airport",
    city: "Ust-Kut",
  },
  {
    iata: "UUD",
    name: "Ulan-Ude Airport (Mukhino)",
    city: "Ulan Ude",
  },
  {
    iata: "UJE",
    name: "Ujae Atoll Airport",
    city: "Ujae Atoll",
  },
  {
    iata: "UJN",
    name: "Uljin Airport",
  },
  {
    iata: "KBP",
    name: "Boryspil International Airport",
    city: "Kiev",
  },
  {
    iata: "DOK",
    name: "Donetsk International Airport",
    city: "Donetsk",
  },
  {
    iata: "KRQ",
    name: "Kramatorsk Airport",
    city: "Kramatorsk",
  },
  {
    iata: "MPW",
    name: "Mariupol International Airport",
    city: "Mariupol",
  },
  {
    iata: "SEV",
    name: "Sievierodonetsk Airport",
    city: "Sievierodonetsk",
  },
  {
    iata: "VSG",
    name: "Luhansk International Airport",
    city: "Luhansk",
  },
  {
    iata: "ERD",
    name: "Berdyansk Airport",
    city: "Berdyansk",
  },
  {
    iata: "DNK",
    name: "Dnipropetrovsk International Airport",
    city: "Dnipropetrovsk",
  },
  {
    iata: "OZH",
    name: "Zaporizhzhia International Airport",
    city: "Zaporizhia",
  },
  {
    iata: "KWG",
    name: "Kryvyi Rih International Airport",
    city: "Kryvyi Rih",
  },
  {
    iata: "UKS",
    name: "Belbek Airport",
    city: "Sevastopol",
  },
  {
    iata: "SIP",
    name: "Simferopol International Airport",
    city: "Simferopol",
  },
  {
    iata: "KHC",
    name: "Kerch Airport",
    city: "Kerch",
  },
  {
    iata: "UKH",
    name: "Mukhaizna Airport",
  },
  {
    iata: "HRK",
    name: "Kharkiv International Airport",
    city: "Kharkiv",
  },
  {
    iata: "PLV",
    name: "Suprunovka Airport",
    city: "Poltava",
  },
  {
    iata: "UMY",
    name: "Sumy Airport",
    city: "Sumy",
  },
  {
    iata: "CKC",
    name: "Cherkasy International Airport",
    city: "Cherkasy",
  },
  {
    iata: "KGO",
    name: "Kirovograd Airport",
    city: "Kirovograd",
  },
  {
    iata: "IEV",
    name: "Kiev Zhuliany International Airport",
    city: "Kiev",
  },
  {
    iata: "GML",
    name: "Gostomel Airport",
    city: "Kiev",
  },
  {
    iata: "UCK",
    name: "Lutsk Airport",
    city: "Lutsk",
  },
  {
    iata: "HMJ",
    name: "Khmelnytskyi Airport",
    city: "Khmelnytskyi",
  },
  {
    iata: "IFO",
    name: "Ivano-Frankivsk International Airport",
    city: "Ivano-Frankivsk",
  },
  {
    iata: "LWO",
    name: "Lviv International Airport",
    city: "Lviv",
  },
  {
    iata: "CWC",
    name: "Chernivtsi International Airport",
    city: "Chernivtsi",
  },
  {
    iata: "RWN",
    name: "Rivne International Airport",
    city: "Rivne",
  },
  {
    iata: "TNL",
    name: "Ternopil International Airport",
    city: "Ternopil",
  },
  {
    iata: "UDJ",
    name: "Uzhhorod International Airport",
    city: "Uzhhorod",
  },
  {
    iata: "KHE",
    name: "Chernobayevka Airport",
    city: "Kherson",
  },
  {
    iata: "NLV",
    name: "Mykolaiv International Airport",
    city: "Nikolayev",
  },
  {
    iata: "ODS",
    name: "Odessa International Airport",
    city: "Odessa",
  },
  {
    iata: "VIN",
    name: "Vinnytsia/Gavyryshivka Airport",
    city: "Vinnitsa",
  },
  {
    iata: "ARH",
    name: "Talagi Airport",
    city: "Archangelsk",
  },
  {
    iata: "NNM",
    name: "Naryan Mar Airport",
    city: "Naryan Mar",
  },
  {
    iata: "CSH",
    name: "Solovki Airport",
    city: "Solovetsky Islands",
  },
  {
    iata: "CEE",
    name: "Cherepovets Airport",
    city: "Cherepovets",
  },
  {
    iata: "AMV",
    name: "Amderma Airport",
    city: "Amderma",
  },
  {
    iata: "ULH",
    name: "Majeed Bin Abdulaziz Airport",
    city: "Al-'Ula",
  },
  {
    iata: "KSZ",
    name: "Kotlas Airport",
    city: "Kotlas",
  },
  {
    iata: "LED",
    name: "Pulkovo Airport",
    city: "St. Petersburg",
  },
  {
    iata: "KVK",
    name: "Kirovsk-Apatity Airport",
    city: "Apatity",
  },
  {
    iata: "MMK",
    name: "Murmansk Airport",
    city: "Murmansk",
  },
  {
    iata: "NVR",
    name: "Novgorod Airport",
  },
  {
    iata: "VLU",
    name: "Velikiye Luki Airport",
    city: "Velikiye Luki",
  },
  {
    iata: "PKV",
    name: "Pskov Airport",
    city: "Pskov",
  },
  {
    iata: "PES",
    name: "Petrozavodsk Airport",
    city: "Petrozavodsk",
  },
  {
    iata: "RVH",
    name: "Rzhevka Airport",
  },
  {
    iata: "VGD",
    name: "Vologda Airport",
    city: "Vologda",
  },
  {
    iata: "BQT",
    name: "Brest Airport",
    city: "Brest",
  },
  {
    iata: "GME",
    name: "Gomel Airport",
    city: "Gomel",
  },
  {
    iata: "VTB",
    name: "Vitebsk East Airport",
    city: "Vitebsk",
  },
  {
    iata: "KGD",
    name: "Khrabrovo Airport",
    city: "Kaliningrad",
  },
  {
    iata: "GNA",
    name: "Hrodna Airport",
    city: "Hrodna",
  },
  {
    iata: "MHP",
    name: "Minsk 1 Airport",
    city: "Minsk",
  },
  {
    iata: "MSQ",
    name: "Minsk International Airport",
    city: "Minsk",
  },
  {
    iata: "MVQ",
    name: "Mogilev Airport",
    city: "Mogilev",
  },
  {
    iata: "ABA",
    name: "Abakan Airport",
    city: "Abakan",
  },
  {
    iata: "BAX",
    name: "Barnaul Airport",
    city: "Barnaul",
  },
  {
    iata: "KEJ",
    name: "Kemerovo Airport",
    city: "Kemerovo",
  },
  {
    iata: "EIE",
    name: "Yeniseysk Airport",
    city: "Yeniseysk",
  },
  {
    iata: "KJA",
    name: "Yemelyanovo Airport",
    city: "Krasnoyarsk",
  },
  {
    iata: "ACS",
    name: "Achinsk Airport",
    city: "Achinsk",
  },
  {
    iata: "KYZ",
    name: "Kyzyl Airport",
    city: "Kyzyl",
  },
  {
    iata: "OVB",
    name: "Tolmachevo Airport",
    city: "Novosibirsk",
  },
  {
    iata: "OMS",
    name: "Omsk Central Airport",
    city: "Omsk",
  },
  {
    iata: "TOF",
    name: "Bogashevo Airport",
    city: "Tomsk",
  },
  {
    iata: "NOZ",
    name: "Spichenkovo Airport",
    city: "Novokuznetsk",
  },
  {
    iata: "DKS",
    name: "Dikson Airport",
    city: "Dikson",
  },
  {
    iata: "HTG",
    name: "Khatanga Airport",
    city: "Khatanga",
  },
  {
    iata: "IAA",
    name: "Igarka Airport",
    city: "Igarka",
  },
  {
    iata: "NSK",
    name: "Norilsk-Alykel Airport",
    city: "Norilsk",
  },
  {
    iata: "AAQ",
    name: "Anapa Airport",
    city: "Anapa",
  },
  {
    iata: "EIK",
    name: "Yeysk Airport",
    city: "Yeysk",
  },
  {
    iata: "GDZ",
    name: "Gelendzhik Airport",
    city: "Gelendzhik",
  },
  {
    iata: "KRR",
    name: "Krasnodar International Airport",
    city: "Krasnodar",
  },
  {
    iata: "MCX",
    name: "Uytash Airport",
    city: "Makhachkala",
  },
  {
    iata: "MRV",
    name: "Mineralnyye Vody Airport",
    city: "Mineralnyye Vody",
  },
  {
    iata: "NAL",
    name: "Nalchik Airport",
    city: "Nalchik",
  },
  {
    iata: "OGZ",
    name: "Beslan Airport",
    city: "Beslan",
  },
  {
    iata: "IGT",
    name: "Magas Airport",
    city: "Magas",
  },
  {
    iata: "STW",
    name: "Stavropol Shpakovskoye Airport",
    city: "Stavropol",
  },
  {
    iata: "ROV",
    name: "Rostov-na-Donu Airport",
    city: "Rostov-on-Don",
  },
  {
    iata: "VLK",
    name: "Volgodonsk Airport",
    city: "",
  },
  {
    iata: "AER",
    name: "Sochi International Airport",
    city: "Sochi",
  },
  {
    iata: "ASF",
    name: "Astrakhan Airport",
    city: "Astrakhan",
  },
  {
    iata: "ESL",
    name: "Elista Airport",
    city: "Elista",
  },
  {
    iata: "VOG",
    name: "Volgograd International Airport",
    city: "Volgograd",
  },
  {
    iata: "AHT",
    name: "Amchitka Army Airfield",
  },
  {
    iata: "CEK",
    name: "Chelyabinsk Balandino Airport",
    city: "Chelyabinsk",
  },
  {
    iata: "MQF",
    name: "Magnitogorsk International Airport",
    city: "Magnitogorsk",
  },
  {
    iata: "SLY",
    name: "Salekhard Airport",
    city: "Salekhard",
  },
  {
    iata: "YMK",
    name: "Mys Kamenny Airport",
    city: "Mys Kamennyi",
  },
  {
    iata: "UEN",
    name: "Urengoy Airport",
    city: "Urengoy",
  },
  {
    iata: "EZV",
    name: "Berezovo Airport",
    city: "",
  },
  {
    iata: "HMA",
    name: "Khanty Mansiysk Airport",
    city: "Khanty-Mansiysk",
  },
  {
    iata: "IRM",
    name: "Igrim Airport",
    city: "",
  },
  {
    iata: "NYA",
    name: "Nyagan Airport",
    city: "Nyagan",
  },
  {
    iata: "OVS",
    name: "Sovetskiy Airport",
    city: "Sovetskiy",
  },
  {
    iata: "URJ",
    name: "Uray Airport",
    city: "Uray",
  },
  {
    iata: "EYK",
    name: "Beloyarskiy Airport",
  },
  {
    iata: "IJK",
    name: "Izhevsk Airport",
    city: "Izhevsk",
  },
  {
    iata: "KVX",
    name: "Pobedilovo Airport",
    city: "Kirov",
  },
  {
    iata: "NYM",
    name: "Nadym Airport",
    city: "Nadym",
  },
  {
    iata: "NUX",
    name: "Novy Urengoy Airport",
    city: "Novy Urengoy",
  },
  {
    iata: "NJC",
    name: "Nizhnevartovsk Airport",
    city: "Nizhnevartovsk",
  },
  {
    iata: "RAT",
    name: "Raduzhny Airport",
  },
  {
    iata: "PEE",
    name: "Bolshoye Savino Airport",
    city: "Perm",
  },
  {
    iata: "KGP",
    name: "Kogalym International Airport",
    city: "Kogalym",
  },
  {
    iata: "NFG",
    name: "Nefteyugansk Airport",
    city: "Nefteyugansk",
  },
  {
    iata: "NOJ",
    name: "Noyabrsk Airport",
    city: "Noyabrsk",
  },
  {
    iata: "SGC",
    name: "Surgut Airport",
    city: "Surgut",
  },
  {
    iata: "SVX",
    name: "Koltsovo Airport",
    city: "Yekaterinburg",
  },
  {
    iata: "TOX",
    name: "Tobolsk Airport",
    city: "Tobolsk",
  },
  {
    iata: "TJM",
    name: "Roshchino International Airport",
    city: "Tyumen",
  },
  {
    iata: "KRO",
    name: "Kurgan Airport",
    city: "Kurgan",
  },
  {
    iata: "ASB",
    name: "Ashgabat Airport",
    city: "Ashgabat",
  },
  {
    iata: "KRW",
    name: "Turkmenbashi Airport",
    city: "Krasnovodsk",
  },
  {
    iata: "MYP",
    name: "Mary Airport",
    city: "Mary",
  },
  {
    iata: "TAZ",
    name: "Da?oguz Airport",
    city: "Dashoguz",
  },
  {
    iata: "CRZ",
    name: "Turkmenabat Airport",
    city: "Turkmenabat",
  },
  {
    iata: "DYU",
    name: "Dushanbe Airport",
    city: "Dushanbe",
  },
  {
    iata: "TJU",
    name: "Kulob Airport",
    city: "Kulyab",
  },
  {
    iata: "LBD",
    name: "Khudzhand Airport",
    city: "Khudzhand",
  },
  {
    iata: "KQT",
    name: "Qurghonteppa International Airport",
    city: "Kurgan-Tyube",
  },
  {
    iata: "AZN",
    name: "Andizhan Airport",
    city: "Andizhan",
  },
  {
    iata: "FEG",
    name: "Fergana Airport",
    city: "Fergana",
  },
  {
    iata: "NMA",
    name: "Namangan Airport",
    city: "Namangan",
  },
  {
    iata: "NCU",
    name: "Nukus Airport",
    city: "Nukus",
  },
  {
    iata: "UGC",
    name: "Urgench Airport",
    city: "Urgench",
  },
  {
    iata: "NVI",
    name: "Navoi Airport",
    city: "Navoi",
  },
  {
    iata: "BHK",
    name: "Bukhara Airport",
    city: "Bukhara",
  },
  {
    iata: "KSQ",
    name: "Karshi Khanabad Airport",
    city: "Karshi",
  },
  {
    iata: "AFS",
    name: "Sugraly Airport",
    city: "Zarafshan",
  },
  {
    iata: "SKD",
    name: "Samarkand Airport",
    city: "Samarkand",
  },
  {
    iata: "TMJ",
    name: "Termez Airport",
    city: "Termez",
  },
  {
    iata: "TAS",
    name: "Tashkent International Airport",
    city: "Tashkent",
  },
  {
    iata: "KMW",
    name: "Kostroma Sokerkino Airport",
    city: "Kostroma",
  },
  {
    iata: "BKA",
    name: "Bykovo Airport",
    city: "Moscow",
  },
  {
    iata: "IWA",
    name: "Ivanovo South Airport",
    city: "Ivanovo",
  },
  {
    iata: "RYB",
    name: "Staroselye Airport",
    city: "Rybinsk",
  },
  {
    iata: "BZK",
    name: "Bryansk Airport",
    city: "Bryansk",
  },
  {
    iata: "DME",
    name: "Domodedovo International Airport",
    city: "Moscow",
  },
  {
    iata: "IAR",
    name: "Tunoshna Airport",
    city: "",
  },
  {
    iata: "SVO",
    name: "Sheremetyevo International Airport",
    city: "Moscow",
  },
  {
    iata: "KLD",
    name: "Migalovo Air Base",
    city: "Tver",
  },
  {
    iata: "EGO",
    name: "Belgorod International Airport",
    city: "Belgorod",
  },
  {
    iata: "URS",
    name: "Kursk East Airport",
    city: "Kursk",
  },
  {
    iata: "LPK",
    name: "Lipetsk Airport",
    city: "Lipetsk",
  },
  {
    iata: "VOZ",
    name: "Voronezh International Airport",
    city: "Voronezh",
  },
  {
    iata: "OEL",
    name: "Oryol Yuzhny Airport",
    city: "Orel",
  },
  {
    iata: "TBW",
    name: "Donskoye Airport",
    city: "Tambov",
  },
  {
    iata: "RZN",
    name: "Turlatovo Airport",
    city: "Ryazan",
  },
  {
    iata: "VKO",
    name: "Vnukovo International Airport",
    city: "Moscow",
  },
  {
    iata: "UCT",
    name: "Ukhta Airport",
    city: "Ukhta",
  },
  {
    iata: "INA",
    name: "Inta Airport",
    city: "Inta",
  },
  {
    iata: "PEX",
    name: "Pechora Airport",
    city: "Pechora",
  },
  {
    iata: "USK",
    name: "Usinsk Airport",
    city: "Usinsk",
  },
  {
    iata: "VKT",
    name: "Vorkuta Airport",
    city: "Vorkuta",
  },
  {
    iata: "UTS",
    name: "Ust-Tsylma Airport",
    city: "Ust-Tsylma",
  },
  {
    iata: "SCW",
    name: "Syktyvkar Airport",
    city: "Syktyvkar",
  },
  {
    iata: "GOJ",
    name: "Nizhny Novgorod International Airport",
    city: "Nizhny Novgorod",
  },
  {
    iata: "UUA",
    name: "Bugulma Airport",
    city: "Bugulma",
  },
  {
    iata: "KZN",
    name: "Kazan International Airport",
    city: "Kazan",
  },
  {
    iata: "NBC",
    name: "Begishevo Airport",
    city: "Nizhnekamsk",
  },
  {
    iata: "JOK",
    name: "Yoshkar-Ola Airport",
    city: "Yoshkar-Ola",
  },
  {
    iata: "CSY",
    name: "Cheboksary Airport",
    city: "Cheboksary",
  },
  {
    iata: "ULV",
    name: "Ulyanovsk Baratayevka Airport",
    city: "Ulyanovsk",
  },
  {
    iata: "ULY",
    name: "Ulyanovsk East Airport",
    city: "Ulyanovsk",
  },
  {
    iata: "REN",
    name: "Orenburg Central Airport",
    city: "Orenburg",
  },
  {
    iata: "OSW",
    name: "Orsk Airport",
    city: "Orsk",
  },
  {
    iata: "PEZ",
    name: "Penza Airport",
    city: "Penza",
  },
  {
    iata: "SKX",
    name: "Saransk Airport",
    city: "Saransk",
  },
  {
    iata: "BWO",
    name: "Balakovo Airport",
    city: "Balakovo",
  },
  {
    iata: "RTW",
    name: "Saratov Central Airport",
    city: "Saratov",
  },
  {
    iata: "BCX",
    name: "Beloretsk Airport",
    city: "Beloretsk",
  },
  {
    iata: "NEF",
    name: "Neftekamsk Airport",
    city: "Neftekamsk",
  },
  {
    iata: "OKT",
    name: "Oktyabrskiy Airport",
    city: "Kzyl-Yar",
  },
  {
    iata: "UFA",
    name: "Ufa International Airport",
    city: "Ufa",
  },
  {
    iata: "KUF",
    name: "Kurumoch International Airport",
    city: "Samara",
  },
  {
    iata: "FZB",
    name: "Fray Bentos Airport",
  },
  {
    iata: "RCH",
    name: "Rocha Airport",
    city: "Riohacha",
  },
  {
    iata: "DIU",
    name: "Diu Airport",
    city: "Diu",
  },
  {
    iata: "AMD",
    name: "Sardar Vallabhbhai Patel International Airport",
    city: "Ahmedabad",
  },
  {
    iata: "AKD",
    name: "Akola Airport",
    city: "",
  },
  {
    iata: "IXU",
    name: "Aurangabad Airport",
    city: "Aurangabad",
  },
  {
    iata: "BOM",
    name: "Chhatrapati Shivaji International Airport",
    city: "Mumbai",
  },
  {
    iata: "PAB",
    name: "Bilaspur Airport",
    city: "",
  },
  {
    iata: "BHJ",
    name: "Bhuj Airport",
    city: "Bhuj",
  },
  {
    iata: "IXG",
    name: "Belgaum Airport",
    city: "",
  },
  {
    iata: "BDQ",
    name: "Vadodara Airport",
    city: "Vadodara",
  },
  {
    iata: "BHO",
    name: "Bhopal Airport",
    city: "Bhopal",
  },
  {
    iata: "BHU",
    name: "Bhavnagar Airport",
    city: "Bhavnagar",
  },
  {
    iata: "NMB",
    name: "Daman Airport",
    city: "",
  },
  {
    iata: "GUX",
    name: "Guna Airport",
    city: "",
  },
  {
    iata: "GOI",
    name: "Dabolim Airport",
    city: "Dabolim",
  },
  {
    iata: "HBX",
    name: "Hubli Airport",
    city: "Hubli",
  },
  {
    iata: "IDR",
    name: "Devi Ahilyabai Holkar Airport",
    city: "Indore",
  },
  {
    iata: "JLR",
    name: "Jabalpur Airport",
    city: "",
  },
  {
    iata: "JGA",
    name: "Jamnagar Airport",
    city: "Jamnagar",
  },
  {
    iata: "IXY",
    name: "Kandla Airport",
    city: "Kandla",
  },
  {
    iata: "HJR",
    name: "Khajuraho Airport",
    city: "Khajuraho",
  },
  {
    iata: "KLH",
    name: "Kolhapur Airport",
    city: "",
  },
  {
    iata: "IXK",
    name: "Keshod Airport",
    city: "",
  },
  {
    iata: "NDC",
    name: "Nanded Airport",
    city: "Nanded",
  },
  {
    iata: "NAG",
    name: "Dr. Babasaheb Ambedkar International Airport",
    city: "Naqpur",
  },
  {
    iata: "ISK",
    name: "Gandhinagar Airport",
    city: "Nashik",
  },
  {
    iata: "PNQ",
    name: "Pune Airport",
    city: "Pune",
  },
  {
    iata: "PBD",
    name: "Porbandar Airport",
    city: "Porbandar",
  },
  {
    iata: "RTC",
    name: "Ratnagiri Airport",
    city: "",
  },
  {
    iata: "RAJ",
    name: "Rajkot Airport",
    city: "Rajkot",
  },
  {
    iata: "RPR",
    name: "Raipur Airport",
    city: "Raipur",
  },
  {
    iata: "SSE",
    name: "Solapur Airport",
    city: "Solapur",
  },
  {
    iata: "STV",
    name: "Surat Airport",
    city: "",
  },
  {
    iata: "UDR",
    name: "Maharana Pratap Airport",
    city: "Udaipur",
  },
  {
    iata: "CMB",
    name: "Bandaranaike International Colombo Airport",
    city: "Colombo",
  },
  {
    iata: "ACJ",
    name: "Anuradhapura Air Force Base",
    city: "Anuradhapura",
  },
  {
    iata: "BTC",
    name: "Batticaloa Airport",
    city: "Batticaloa",
  },
  {
    iata: "RML",
    name: "Colombo Ratmalana Airport",
    city: "Colombo",
  },
  {
    iata: "GOY",
    name: "Amparai Airport",
    city: "Amparai",
  },
  {
    iata: "MNH",
    name: "Hingurakgoda Air Force Base",
    city: "Al Muladdah",
  },
  {
    iata: "JAF",
    name: "Kankesanturai Airport",
    city: "Jaffna",
  },
  {
    iata: "KCT",
    name: "Koggala Airport",
    city: "Galle",
  },
  {
    iata: "GIU",
    name: "Sigiriya Air Force Base",
    city: "Sigiriya",
  },
  {
    iata: "TRR",
    name: "China Bay Airport",
    city: "Trincomalee",
  },
  {
    iata: "WRZ",
    name: "Weerawila International Airport",
    city: "Weerawila",
  },
  {
    iata: "BBM",
    name: "Battambang Airport",
    city: "Battambang",
  },
  {
    iata: "KZC",
    name: "Kampong Chhnang Airport",
    city: "",
  },
  {
    iata: "KKZ",
    name: "Kaoh Kong Airport",
    city: "Kaoh Kong",
  },
  {
    iata: "KTI",
    name: "Kratie Airport",
    city: "Kratie",
  },
  {
    iata: "PNH",
    name: "Phnom Penh International Airport",
    city: "Phnom Penh",
  },
  {
    iata: "RBE",
    name: "Ratanakiri Airport",
    city: "Ratanakiri",
  },
  {
    iata: "REP",
    name: "Angkor International Airport",
    city: "Siem Reap",
  },
  {
    iata: "TNX",
    name: "Stung Treng Airport",
    city: "Stung Treng",
  },
  {
    iata: "KOS",
    name: "Sihanoukville International Airport",
    city: "Sihanukville",
  },
  {
    iata: "ELX",
    name: "Isla de Tigre  Heliport",
  },
  {
    iata: "LGY",
    name: "Lagunillas Airport",
  },
  {
    iata: "KTV",
    name: "Kamarata Airport",
  },
  {
    iata: "LAG",
    name: "La Guaira Airport",
  },
  {
    iata: "SFX",
    name: "San Felix Airport",
  },
  {
    iata: "SVV",
    name: "San Salvador de Paul Airport",
  },
  {
    iata: "WOK",
    name: "Wonken Airport",
  },
  {
    iata: "IXV",
    name: "Along Airport",
    city: "",
  },
  {
    iata: "IXA",
    name: "Agartala Airport",
    city: "Agartala",
  },
  {
    iata: "AJL",
    name: "Tuirial Airport",
    city: "Aizawl",
  },
  {
    iata: "IXB",
    name: "Bagdogra Airport",
    city: "Siliguri",
  },
  {
    iata: "RGH",
    name: "Balurghat Airport",
    city: "Balurghat",
  },
  {
    iata: "SHL",
    name: "Shillong Airport",
    city: "Shillong",
  },
  {
    iata: "BBI",
    name: "Biju Patnaik Airport",
    city: "Bhubaneswar",
  },
  {
    iata: "CCU",
    name: "Netaji Subhash Chandra Bose International Airport",
    city: "Kolkata",
  },
  {
    iata: "COH",
    name: "Cooch Behar Airport",
    city: "",
  },
  {
    iata: "DBD",
    name: "Dhanbad Airport",
    city: "",
  },
  {
    iata: "DAE",
    name: "Daporijo Airport",
    city: "",
  },
  {
    iata: "GOP",
    name: "Gorakhpur Airport",
    city: "Gorakhpur",
  },
  {
    iata: "GAU",
    name: "Lokpriya Gopinath Bordoloi International Airport",
    city: "Guwahati",
  },
  {
    iata: "GAY",
    name: "Gaya Airport",
    city: "",
  },
  {
    iata: "IMF",
    name: "Imphal Airport",
    city: "Imphal",
  },
  {
    iata: "PYB",
    name: "Jeypore Airport",
    city: "Jeypore",
  },
  {
    iata: "IXW",
    name: "Jamshedpur Airport",
    city: "",
  },
  {
    iata: "JRH",
    name: "Jorhat Airport",
    city: "Jorhat",
  },
  {
    iata: "IXQ",
    name: "Kamalpur Airport",
    city: "",
  },
  {
    iata: "IXH",
    name: "Kailashahar Airport",
    city: "",
  },
  {
    iata: "IXS",
    name: "Silchar Airport",
    city: "Silchar",
  },
  {
    iata: "IXN",
    name: "Khowai Airport",
    city: "Khowai",
  },
  {
    iata: "AJL",
    name: "Lengpui Airport",
    city: "Aizawl",
  },
  {
    iata: "IXI",
    name: "North Lakhimpur Airport",
    city: "Lilabari",
  },
  {
    iata: "LDA",
    name: "Malda Airport",
    city: "Malda",
  },
  {
    iata: "DIB",
    name: "Dibrugarh Airport",
    city: "Dibrugarh",
  },
  {
    iata: "DMU",
    name: "Dimapur Airport",
    city: "Dimapur",
  },
  {
    iata: "MZU",
    name: "Muzaffarpur Airport",
    city: "",
  },
  {
    iata: "IXT",
    name: "Pasighat Airport",
    city: "Pasighat",
  },
  {
    iata: "PAT",
    name: "Lok Nayak Jayaprakash Airport",
    city: "Patna",
  },
  {
    iata: "IXR",
    name: "Birsa Munda Airport",
    city: "Ranchi",
  },
  {
    iata: "RRK",
    name: "Rourkela Airport",
    city: "",
  },
  {
    iata: "RUP",
    name: "Rupsi India Airport",
    city: "",
  },
  {
    iata: "TEZ",
    name: "Tezpur Airport",
    city: "",
  },
  {
    iata: "VTZ",
    name: "Vishakhapatnam Airport",
    city: "Visakhapatnam",
  },
  {
    iata: "ZER",
    name: "Zero Airport",
    city: "",
  },
  {
    iata: "BZL",
    name: "Barisal Airport",
    city: "Barisal",
  },
  {
    iata: "CXB",
    name: "Cox's Bazar Airport",
    city: "Cox's Bazar",
  },
  {
    iata: "CLA",
    name: "Comilla Airport",
    city: "Comilla",
  },
  {
    iata: "CGP",
    name: "Shah Amanat International Airport",
    city: "Chittagong",
  },
  {
    iata: "IRD",
    name: "Ishurdi Airport",
    city: "Ishurdi",
  },
  {
    iata: "JSR",
    name: "Jessore Airport",
    city: "Jashahor",
  },
  {
    iata: "LLJ",
    name: "Lalmonirhat Airport",
    city: "Lalmonirhat",
  },
  {
    iata: "RJH",
    name: "Shah Mokhdum Airport",
    city: "Rajshahi",
  },
  {
    iata: "SPD",
    name: "Saidpur Airport",
    city: "Saidpur",
  },
  {
    iata: "TKR",
    name: "Thakurgaon Airport",
    city: "Thakurgaon",
  },
  {
    iata: "ZHM",
    name: "Shamshernagar Airport",
    city: "Shamshernagar",
  },
  {
    iata: "ZYL",
    name: "Osmany International Airport",
    city: "Sylhet",
  },
  {
    iata: "DAC",
    name: "Dhaka / Hazrat Shahjalal International Airport",
    city: "Dhaka",
  },
  {
    iata: "HKG",
    name: "Chek Lap Kok International Airport",
    city: "Hong Kong",
  },
  {
    iata: "HKG",
    name: "Hong Kong International Airport Kai Tak",
    city: "Hong Kong",
  },
  {
    iata: "HHP",
    name: "Shun Tak Heliport",
  },
  {
    iata: "SPB",
    name: "Charlotte Amalie Harbor Seaplane Base",
  },
  {
    iata: "SSB",
    name: "Christiansted Harbor Seaplane Base",
  },
  {
    iata: "AGR",
    name: "Agra Airport",
    city: "",
  },
  {
    iata: "IXD",
    name: "Allahabad Airport",
    city: "Allahabad",
  },
  {
    iata: "ATQ",
    name: "Sri Guru Ram Dass Jee International Airport, Amritsar",
    city: "Amritsar",
  },
  {
    iata: "BKB",
    name: "Nal Airport",
    city: "Bikaner",
  },
  {
    iata: "VNS",
    name: "Lal Bahadur Shastri Airport",
    city: "Varanasi",
  },
  {
    iata: "KUU",
    name: "Kullu Manali Airport",
    city: "",
  },
  {
    iata: "BUP",
    name: "Bhatinda Air Force Station",
    city: "",
  },
  {
    iata: "IXC",
    name: "Chandigarh Airport",
    city: "Chandigarh",
  },
  {
    iata: "DED",
    name: "Dehradun Airport",
    city: "Dehradun",
  },
  {
    iata: "DEL",
    name: "Indira Gandhi International Airport",
    city: "New Delhi",
  },
  {
    iata: "DHM",
    name: "Kangra Airport",
    city: "",
  },
  {
    iata: "GWL",
    name: "Gwalior Airport",
    city: "Gwalior",
  },
  {
    iata: "HSS",
    name: "Hissar Airport",
    city: "",
  },
  {
    iata: "JDH",
    name: "Jodhpur Airport",
    city: "Jodhpur",
  },
  {
    iata: "JAI",
    name: "Jaipur International Airport",
    city: "Jaipur",
  },
  {
    iata: "JSA",
    name: "Jaisalmer Airport",
    city: "",
  },
  {
    iata: "IXJ",
    name: "Jammu Airport",
    city: "Jammu",
  },
  {
    iata: "KNU",
    name: "Kanpur Airport",
    city: "",
  },
  {
    iata: "KTU",
    name: "Kota Airport",
    city: "",
  },
  {
    iata: "LUH",
    name: "Ludhiana Airport",
    city: "",
  },
  {
    iata: "IXL",
    name: "Leh Kushok Bakula Rimpochee Airport",
    city: "Leh",
  },
  {
    iata: "LKO",
    name: "Chaudhary Charan Singh International Airport",
    city: "Lucknow",
  },
  {
    iata: "IXP",
    name: "Pathankot Air Force Station",
    city: "",
  },
  {
    iata: "PGH",
    name: "Pantnagar Airport",
    city: "Pantnagar",
  },
  {
    iata: "SLV",
    name: "Shimla Airport",
    city: "",
  },
  {
    iata: "SXR",
    name: "Sheikh ul Alam Airport",
    city: "Srinagar",
  },
  {
    iata: "TNI",
    name: "Satna Airport",
    city: "",
  },
  {
    iata: "AOU",
    name: "Attopeu Airport",
    city: "Attopeu",
  },
  {
    iata: "OUI",
    name: "Ban Huoeisay Airport",
    city: "",
  },
  {
    iata: "LPQ",
    name: "Luang Phabang International Airport",
    city: "Luang Phabang",
  },
  {
    iata: "LXG",
    name: "Luang Namtha Airport",
    city: "Luang Namtha",
  },
  {
    iata: "ODY",
    name: "Oudomsay Airport",
    city: "Oudomsay",
  },
  {
    iata: "PKZ",
    name: "Pakse International Airport",
    city: "Pakse",
  },
  {
    iata: "ZBY",
    name: "Sayaboury Airport",
    city: "Sayaboury",
  },
  {
    iata: "ZVK",
    name: "Savannakhet Airport",
    city: "",
  },
  {
    iata: "NEU",
    name: "Sam Neua Airport",
    city: "",
  },
  {
    iata: "VNA",
    name: "Saravane Airport",
    city: "Saravane",
  },
  {
    iata: "THK",
    name: "Thakhek Airport",
    city: "Thakhek",
  },
  {
    iata: "VTE",
    name: "Wattay International Airport",
    city: "Vientiane",
  },
  {
    iata: "XKH",
    name: "Xieng Khouang Airport",
    city: "Xieng Khouang",
  },
  {
    iata: "VMI",
    name: "Dr Juan Plate Airport",
  },
  {
    iata: "MFM",
    name: "Macau International Airport",
    city: "Taipa",
  },
  {
    iata: "VDH",
    name: "Dong Hoi Airport",
    city: "Dong Hoi",
  },
  {
    iata: "KON",
    name: "Kontum Airport",
  },
  {
    iata: "BJH",
    name: "Bajhang Airport",
    city: "Bajhang",
  },
  {
    iata: "BHP",
    name: "Bhojpur Airport",
    city: "Bhojpur",
  },
  {
    iata: "BGL",
    name: "Baglung Airport",
    city: "Baglung",
  },
  {
    iata: "BHR",
    name: "Bharatpur Airport",
    city: "Bharatpur",
  },
  {
    iata: "BJU",
    name: "Bajura Airport",
    city: "Bajura",
  },
  {
    iata: "BIT",
    name: "Baitadi Airport",
    city: "Baitadi",
  },
  {
    iata: "BWA",
    name: "Bhairahawa Airport",
    city: "Bhairawa",
  },
  {
    iata: "BDP",
    name: "Bhadrapur Airport",
    city: "Bhadrapur",
  },
  {
    iata: "DNP",
    name: "Tulsipur Airport",
    city: "Dang",
  },
  {
    iata: "DHI",
    name: "Dhangarhi Airport",
    city: "Dhangarhi",
  },
  {
    iata: "DAP",
    name: "Darchula Airport",
    city: "Darchula",
  },
  {
    iata: "DOP",
    name: "Dolpa Airport",
    city: "Dolpa",
  },
  {
    iata: "SIH",
    name: "Silgadi Doti Airport",
    city: "Silgadi Doti",
  },
  {
    iata: "GKH",
    name: "Gorkha Airport",
    city: "Gorkha",
  },
  {
    iata: "JIR",
    name: "Jiri Airport",
    city: "Jiri",
  },
  {
    iata: "JUM",
    name: "Jumla Airport",
    city: "Jumla",
  },
  {
    iata: "JKR",
    name: "Janakpur Airport",
    city: "Janakpur",
  },
  {
    iata: "KTM",
    name: "Tribhuvan International Airport",
    city: "Kathmandu",
  },
  {
    iata: "LDN",
    name: "Lamidanda Airport",
    city: "Lamidanda",
  },
  {
    iata: "LUA",
    name: "Lukla Airport",
    city: "Lukla",
  },
  {
    iata: "LTG",
    name: "Langtang Airport",
    city: "Langtang",
  },
  {
    iata: "NGX",
    name: "Manang Airport",
    city: "Ngawal",
  },
  {
    iata: "MEY",
    name: "Meghauli Airport",
    city: "Meghauli",
  },
  {
    iata: "XMG",
    name: "Mahendranagar Airport",
    city: "Mahendranagar",
  },
  {
    iata: "KEP",
    name: "Nepalgunj Airport",
    city: "Nepalgunj",
  },
  {
    iata: "PKR",
    name: "Pokhara Airport",
    city: "Pokhara",
  },
  {
    iata: "PPL",
    name: "Phaplu Airport",
    city: "Phaplu",
  },
  {
    iata: "RJB",
    name: "Rajbiraj Airport",
    city: "Rajbiraj",
  },
  {
    iata: "RHP",
    name: "Ramechhap Airport",
    city: "Ramechhap",
  },
  {
    iata: "RUK",
    name: "Rukumkot Airport",
    city: "Rukumkot",
  },
  {
    iata: "RUM",
    name: "Rumjatar Airport",
    city: "Rumjatar",
  },
  {
    iata: "SIF",
    name: "Simara Airport",
    city: "Simara",
  },
  {
    iata: "SKH",
    name: "Surkhet Airport",
    city: "Surkhet",
  },
  {
    iata: "FEB",
    name: "Sanfebagar Airport",
    city: "Sanfebagar",
  },
  {
    iata: "IMK",
    name: "Simikot Airport",
    city: "Simikot",
  },
  {
    iata: "TMI",
    name: "Tumling Tar Airport",
    city: "Tumling Tar",
  },
  {
    iata: "BIR",
    name: "Biratnagar Airport",
    city: "Biratnagar",
  },
  {
    iata: "LTU",
    name: "Murod Kond Airport",
    city: "Latur",
  },
  {
    iata: "AGX",
    name: "Agatti Airport",
    city: "",
  },
  {
    iata: "BEP",
    name: "Bellary Airport",
    city: "Bellary",
  },
  {
    iata: "BLR",
    name: "Bengaluru International Airport",
    city: "Bangalore",
  },
  {
    iata: "VGA",
    name: "Vijayawada Airport",
    city: "",
  },
  {
    iata: "CJB",
    name: "Coimbatore International Airport",
    city: "Coimbatore",
  },
  {
    iata: "COK",
    name: "Cochin International Airport",
    city: "Cochin",
  },
  {
    iata: "CCJ",
    name: "Calicut International Airport",
    city: "Calicut",
  },
  {
    iata: "CDP",
    name: "Cuddapah Airport",
    city: "",
  },
  {
    iata: "CBD",
    name: "Car Nicobar Air Force Station",
    city: "",
  },
  {
    iata: "HYD",
    name: "Rajiv Gandhi International Airport, Shamshabad",
    city: "Hyderabad",
  },
  {
    iata: "IXM",
    name: "Madurai Airport",
    city: "Madurai",
  },
  {
    iata: "IXE",
    name: "Mangalore International Airport",
    city: "Mangalore",
  },
  {
    iata: "MAA",
    name: "Chennai International Airport",
    city: "Chennai",
  },
  {
    iata: "MYQ",
    name: "Mysore Airport",
    city: "Mysore",
  },
  {
    iata: "IXZ",
    name: "Vir Savarkar International Airport",
    city: "Port Blair",
  },
  {
    iata: "PNY",
    name: "Pondicherry Airport",
    city: "",
  },
  {
    iata: "HYD",
    name: "Rajiv Gandhi Airport",
    city: "Hyderabad",
  },
  {
    iata: "RJA",
    name: "Rajahmundry Airport",
    city: "Rajahmundry",
  },
  {
    iata: "SXV",
    name: "Salem Airport",
    city: "",
  },
  {
    iata: "TJV",
    name: "Tanjore Air Force Base",
    city: "Thanjavur",
  },
  {
    iata: "TIR",
    name: "Tirupati Airport",
    city: "Tirupati",
  },
  {
    iata: "TRZ",
    name: "Tiruchirapally Civil Airport Airport",
    city: "Tiruchirappally",
  },
  {
    iata: "TRV",
    name: "Trivandrum International Airport",
    city: "Trivandrum",
  },
  {
    iata: "WGC",
    name: "Warangal Airport",
    city: "Warrangal",
  },
  {
    iata: "PBH",
    name: "Paro Airport",
    city: "Paro",
  },
  {
    iata: "FVM",
    name: "Fuvahmulah Airport",
    city: "Fuvahmulah Island",
  },
  {
    iata: "GAN",
    name: "Gan International Airport",
    city: "Gan",
  },
  {
    iata: "HAQ",
    name: "Hanimaadhoo Airport",
    city: "Haa Dhaalu Atoll",
  },
  {
    iata: "KDO",
    name: "Kadhdhoo Airport",
    city: "Kadhdhoo",
  },
  {
    iata: "MLE",
    name: null,
    city: "Male",
  },
  {
    iata: "KDM",
    name: "Kaadedhdhoo Airport",
    city: "Huvadhu Atoll",
  },
  {
    iata: "VAM",
    name: "Villa Airport",
    city: "Maamigili",
  },
  {
    iata: "DMK",
    name: "Don Mueang International Airport",
    city: "Bangkok",
  },
  {
    iata: "KKM",
    name: "Sa Pran Nak Airport",
    city: "",
  },
  {
    iata: "KKM",
    name: "Khok Kathiam Airport",
    city: "",
  },
  {
    iata: "TDX",
    name: "Trat Airport",
    city: "",
  },
  {
    iata: "BKK",
    name: "Suvarnabhumi Airport",
    city: "Bangkok",
  },
  {
    iata: "UTP",
    name: "U-Tapao International Airport",
    city: "Rayong",
  },
  {
    iata: "CNX",
    name: "Chiang Mai International Airport",
    city: "Chiang Mai",
  },
  {
    iata: "HGN",
    name: "Mae Hong Son Airport",
    city: "",
  },
  {
    iata: "PYY",
    name: "Mae Hong Son Airport",
    city: "Mae Hong Son",
  },
  {
    iata: "LPT",
    name: "Lampang Airport",
    city: "",
  },
  {
    iata: "NNT",
    name: "Nan Airport",
    city: "",
  },
  {
    iata: "PRH",
    name: "Phrae Airport",
    city: "",
  },
  {
    iata: "CEI",
    name: "Chiang Rai International Airport",
    city: "Chiang Rai",
  },
  {
    iata: "BAO",
    name: "Udorn Air Base",
    city: "Ban Mak Khaen",
  },
  {
    iata: "PHY",
    name: "Phetchabun Airport",
    city: "",
  },
  {
    iata: "HHQ",
    name: "Hua Hin Airport",
    city: "Hua Hin",
  },
  {
    iata: "TKH",
    name: "Takhli Airport",
    city: "",
  },
  {
    iata: "MAQ",
    name: "Mae Sot Airport",
    city: "",
  },
  {
    iata: "THS",
    name: "Sukhothai Airport",
    city: "",
  },
  {
    iata: "PHS",
    name: "Phitsanulok Airport",
    city: "",
  },
  {
    iata: "TKT",
    name: "Tak Airport",
    city: "",
  },
  {
    iata: "UTR",
    name: "Uttaradit Airport",
    city: "Uttaradit",
  },
  {
    iata: "URT",
    name: "Surat Thani Airport",
    city: "Surat Thani",
  },
  {
    iata: "NAW",
    name: "Narathiwat Airport",
    city: "",
  },
  {
    iata: "CJM",
    name: "Chumphon Airport",
    city: "",
  },
  {
    iata: "NST",
    name: "Nakhon Si Thammarat Airport",
    city: "Nakhon Si Thammarat",
  },
  {
    iata: "KBV",
    name: "Krabi Airport",
    city: "Krabi",
  },
  {
    iata: "SGZ",
    name: "Songkhla Airport",
    city: "",
  },
  {
    iata: "PAN",
    name: "Pattani Airport",
    city: "",
  },
  {
    iata: "USM",
    name: "Samui Airport",
    city: "Na Thon (Ko Samui Island)",
  },
  {
    iata: "NST",
    name: "Cha Ian Airport",
    city: "Nakhon Si Thammarat",
  },
  {
    iata: "HKT",
    name: "Phuket International Airport",
    city: "Phuket",
  },
  {
    iata: "UNN",
    name: "Ranong Airport",
    city: "",
  },
  {
    iata: "HDY",
    name: "Hat Yai International Airport",
    city: "Hat Yai",
  },
  {
    iata: "TST",
    name: "Trang Airport",
    city: "",
  },
  {
    iata: "UTH",
    name: "Udon Thani Airport",
    city: "Udon Thani",
  },
  {
    iata: "SNO",
    name: "Sakon Nakhon Airport",
    city: "",
  },
  {
    iata: "KKC",
    name: "Khon Kaen Airport",
    city: "Khon Kaen",
  },
  {
    iata: "LOE",
    name: "Loei Airport",
    city: "",
  },
  {
    iata: "BFV",
    name: "Buri Ram Airport",
    city: "",
  },
  {
    iata: "NAK",
    name: "Nakhon Ratchasima Airport",
    city: "",
  },
  {
    iata: "UBP",
    name: "Ubon Ratchathani Airport",
    city: "Ubon Ratchathani",
  },
  {
    iata: "ROI",
    name: "Roi Et Airport",
    city: "",
  },
  {
    iata: "KOP",
    name: "Nakhon Phanom Airport",
    city: "",
  },
  {
    iata: "VUU",
    name: "Mvuu Camp Airport",
  },
  {
    iata: "BMV",
    name: "Buon Ma Thuot Airport",
    city: "Buon Ma Thuot",
  },
  {
    iata: "VCL",
    name: "Chu Lai International Airport",
    city: "Dung Quat Bay",
  },
  {
    iata: "HPH",
    name: "Cat Bi International Airport",
    city: "Haiphong",
  },
  {
    iata: "CXR",
    name: "Cam Ranh Airport",
    city: "Nha Trang",
  },
  {
    iata: "VCS",
    name: "Co Ong Airport",
    city: "Con Ong",
  },
  {
    iata: "VCA",
    name: null,
    city: "Can Tho",
  },
  {
    iata: "DIN",
    name: "Dien Bien Phu Airport",
    city: "Dien Bien Phu",
  },
  {
    iata: "DLI",
    name: "Lien Khuong Airport",
    city: "Dalat",
  },
  {
    iata: "DAD",
    name: "Da Nang International Airport",
    city: "Da Nang",
  },
  {
    iata: "VVN",
    name: "Malvinas Airport",
  },
  {
    iata: "HAN",
    name: "Noi Bai International Airport",
    city: "Hanoi",
  },
  {
    iata: "SQH",
    name: "Na-San Airport",
    city: "Son-La",
  },
  {
    iata: "NHA",
    name: "Nha Trang Air Base",
    city: "Nha Trang",
  },
  {
    iata: "HUI",
    name: "Phu Bai Airport",
    city: "Hue",
  },
  {
    iata: "UIH",
    name: "Phu Cat Airport",
    city: "Quy Nohn",
  },
  {
    iata: "PXU",
    name: "Pleiku Airport",
    city: "Pleiku",
  },
  {
    iata: "PQC",
    name: "Phu Quoc Airport",
    city: "Duong Dong",
  },
  {
    iata: "PHA",
    name: "Phan Rang Airport",
    city: "Phan Rang",
  },
  {
    iata: "PHH",
    name: "Phan Thiet Airport",
    city: "Phan Thiet",
  },
  {
    iata: "VKG",
    name: "Rach Gia Airport",
    city: "Rach Gia",
  },
  {
    iata: "TBB",
    name: "Dong Tac Airport",
    city: "Tuy Hoa",
  },
  {
    iata: "SGN",
    name: "Tan Son Nhat International Airport",
    city: "Ho Chi Minh City",
  },
  {
    iata: "VII",
    name: "Vinh Airport",
    city: "Vinh",
  },
  {
    iata: "VTG",
    name: "Vung Tau Airport",
    city: "Vung Tau",
  },
  {
    iata: "NYU",
    name: "Bagan Airport",
    city: "Nyaung U",
  },
  {
    iata: "BMO",
    name: "Banmaw Airport",
    city: "Banmaw",
  },
  {
    iata: "TVY",
    name: "Dawei Airport",
    city: "Dawei",
  },
  {
    iata: "NYT",
    name: "Naypyidaw Airport",
    city: "Pyinmana",
  },
  {
    iata: "GAW",
    name: "Gangaw Airport",
    city: "Gangaw",
  },
  {
    iata: "GWA",
    name: "Gwa Airport",
    city: "Gwa",
  },
  {
    iata: "HEH",
    name: "Heho Airport",
    city: "Heho",
  },
  {
    iata: "HOX",
    name: "Hommalinn Airport",
    city: "Hommalinn",
  },
  {
    iata: "TIO",
    name: "Tilin Airport",
    city: "Tilin",
  },
  {
    iata: "KET",
    name: "Kengtung Airport",
    city: "Kengtung",
  },
  {
    iata: "KHM",
    name: "Kanti Airport",
    city: "Kanti",
  },
  {
    iata: "KMV",
    name: "Kalay Airport",
    city: "Kalemyo",
  },
  {
    iata: "KYP",
    name: "Kyaukpyu Airport",
    city: "Kyaukpyu",
  },
  {
    iata: "KAW",
    name: "Kawthoung Airport",
    city: "Kawthoung",
  },
  {
    iata: "KYT",
    name: "Kyauktu Airport",
    city: "Kyauktu",
  },
  {
    iata: "LIW",
    name: "Loikaw Airport",
    city: "Loikaw",
  },
  {
    iata: "LSH",
    name: "Lashio Airport",
    city: "Lashio",
  },
  {
    iata: "MDL",
    name: "Mandalay International Airport",
    city: "Mandalay",
  },
  {
    iata: "MGZ",
    name: "Myeik Airport",
    city: "Mkeik",
  },
  {
    iata: "MYT",
    name: "Myitkyina Airport",
    city: "Myitkyina",
  },
  {
    iata: "MNU",
    name: "Mawlamyine Airport",
    city: "Mawlamyine",
  },
  {
    iata: "MGU",
    name: "Manaung Airport",
    city: "Manaung",
  },
  {
    iata: "MOE",
    name: "Momeik Airport",
    city: "",
  },
  {
    iata: "MOG",
    name: "Mong Hsat Airport",
    city: "Mong Hsat",
  },
  {
    iata: "MGK",
    name: "Mong Tong Airport",
    city: "Mong Tong",
  },
  {
    iata: "MWQ",
    name: "Magway Airport",
    city: "Magway",
  },
  {
    iata: "NMS",
    name: "Namsang Airport",
    city: "Namsang",
  },
  {
    iata: "NMT",
    name: "Namtu Airport",
    city: "Namtu",
  },
  {
    iata: "PAA",
    name: "Hpa-N Airport",
    city: "Hpa-N",
  },
  {
    iata: "PAU",
    name: "Pauk Airport",
    city: "Pauk",
  },
  {
    iata: "BSX",
    name: "Pathein Airport",
    city: "Pathein",
  },
  {
    iata: "PPU",
    name: "Hpapun Airport",
    city: "Pa Pun",
  },
  {
    iata: "PBU",
    name: "Putao Airport",
    city: "Putao",
  },
  {
    iata: "PKK",
    name: "Pakhokku Airport",
    city: "Pakhokku",
  },
  {
    iata: "PRU",
    name: "Pyay Airport",
    city: "Pye",
  },
  {
    iata: "AKY",
    name: "Sittwe Airport",
    city: "Sittwe",
  },
  {
    iata: "SNW",
    name: "Thandwe Airport",
    city: "Thandwe",
  },
  {
    iata: "THL",
    name: "Tachileik Airport",
    city: "Tachileik",
  },
  {
    iata: "XYE",
    name: "Ye Airport",
    city: "Ye",
  },
  {
    iata: "RGN",
    name: "Yangon International Airport",
    city: "Yangon",
  },
  {
    iata: "FBS",
    name: "Friday Harbor Seaplane Base",
  },
  {
    iata: "UPG",
    name: "Hasanuddin International Airport",
    city: "Ujung Pandang-Celebes Island",
  },
  {
    iata: "MJU",
    name: "Tampa Padang Airport",
    city: "Mamuju-Celebes Island",
  },
  {
    iata: "BIK",
    name: "Frans Kaisiepo Airport",
    city: "Biak-Supiori Island",
  },
  {
    iata: "ONI",
    name: "Moanamani Airport",
    city: "Moanamani-Papua Island",
  },
  {
    iata: "WET",
    name: "Wagethe Airport",
    city: "Wagethe-Papua Island",
  },
  {
    iata: "NBX",
    name: "Nabire Airport",
    city: "Nabire-Papua Island",
  },
  {
    iata: "ILA",
    name: "Illaga Airport",
    city: "Illaga-Papua Island",
  },
  {
    iata: "KOX",
    name: "Kokonau Airport",
    city: "Kokonau-Papua Island",
  },
  {
    iata: "ZRI",
    name: "Serui Airport",
    city: "Serui-Japen Island",
  },
  {
    iata: "TIM",
    name: "Moses Kilangin Airport",
    city: "Timika-Papua Island",
  },
  {
    iata: "EWI",
    name: "Enarotali Airport",
    city: "Enarotali-Papua Island",
  },
  {
    iata: "AMI",
    name: "Selaparang Airport",
    city: "Mataram-Lombok Island",
  },
  {
    iata: "BMU",
    name: "Muhammad Salahuddin Airport",
    city: "Bima-Sumbawa Island",
  },
  {
    iata: "DPS",
    name: "Ngurah Rai (Bali) International Airport",
    city: "Denpasar-Bali Island",
  },
  {
    iata: "LOP",
    name: "Bandara International Lombok Airport",
    city: "Mataram",
  },
  {
    iata: "SWQ",
    name: "Sumbawa Besar Airport",
    city: "Sumbawa Island",
  },
  {
    iata: "TMC",
    name: "Tambolaka Airport",
    city: "Waikabubak-Sumba Island",
  },
  {
    iata: "WGP",
    name: "Waingapu Airport",
    city: "Waingapu-Sumba Island",
  },
  {
    iata: "ARJ",
    name: "Arso Airport",
    city: "Arso-Papua Island",
  },
  {
    iata: "BUI",
    name: "Bokondini Airport",
    city: "Bokondini-Papua Island",
  },
  {
    iata: "ZRM",
    name: "Sarmi Airport",
    city: "Sarmi-Papua Island",
  },
  {
    iata: "DJJ",
    name: "Sentani Airport",
    city: "Jayapura-Papua Island",
  },
  {
    iata: "LHI",
    name: "Lereh Airport",
    city: "Lereh-Papua Island",
  },
  {
    iata: "LII",
    name: "Mulia Airport",
    city: "Mulia-Papua Island",
  },
  {
    iata: "OKL",
    name: "Oksibil Airport",
    city: "Oksibil-Papua Island",
  },
  {
    iata: "WAR",
    name: "Waris Airport",
    city: "Waris-Papua Island",
  },
  {
    iata: "SEH",
    name: "Senggeh Airport",
    city: "Senggeh-Papua Island",
  },
  {
    iata: "UBR",
    name: "Ubrub Airport",
    city: "Ubrub-Papua Island",
  },
  {
    iata: "WMX",
    name: "Wamena Airport",
    city: "Wamena-Papua Island",
  },
  {
    iata: "MDP",
    name: "Mindiptana Airport",
    city: "Mindiptana-Papua Island",
  },
  {
    iata: "BXD",
    name: "Bade Airport",
    city: "Bade-Papua Island",
  },
  {
    iata: "MKQ",
    name: "Mopah Airport",
    city: "Merauke-Papua Island",
  },
  {
    iata: "OKQ",
    name: "Okaba Airport",
    city: "Okaba-Papua Island",
  },
  {
    iata: "KEI",
    name: "Kepi Airport",
    city: "Kepi-Papua Island",
  },
  {
    iata: "TMH",
    name: "Tanah Merah Airport",
    city: "Tanah Merah-Papua Island",
  },
  {
    iata: "TJS",
    name: "Tanjung Harapan Airport",
    city: "Tanjung Selor-Borneo Island",
  },
  {
    iata: "DTD",
    name: "Datadawai Airport",
    city: "Datadawai-Borneo Island",
  },
  {
    iata: "BEJ",
    name: "Barau(Kalimaru) Airport",
    city: "Tanjung Redep-Borneo Island",
  },
  {
    iata: "BPN",
    name: "Sepinggan International Airport",
    city: "Balikpapan-Borneo Island",
  },
  {
    iata: "TRK",
    name: "Juwata Airport",
    city: "Tarakan Island",
  },
  {
    iata: "SRI",
    name: "Temindung Airport",
  },
  {
    iata: "TSX",
    name: "Tanjung Santan Airport",
    city: "Santan-Borneo Island",
  },
  {
    iata: "BYQ",
    name: "Bunyu Airport",
    city: "Bunju Island",
  },
  {
    iata: "GLX",
    name: "Gamarmalamo Airport",
    city: "Galela-Celebes Island",
  },
  {
    iata: "GTO",
    name: "Jalaluddin Airport",
    city: "Gorontalo-Celebes Island",
  },
  {
    iata: "NAH",
    name: "Naha Airport",
    city: "Tahuna-Sangihe Island",
  },
  {
    iata: "TLI",
    name: "Toli Toli Airport",
    city: "Toli Toli-Celebes Island",
  },
  {
    iata: "GEB",
    name: "Gebe Airport",
    city: "Gebe Island",
  },
  {
    iata: "KAZ",
    name: "Kao Airport",
    city: "Kao-Celebes Island",
  },
  {
    iata: "PLW",
    name: "Mutiara Airport",
    city: "Palu-Celebes Island",
  },
  {
    iata: "MDC",
    name: "Sam Ratulangi Airport",
    city: "Manado-Celebes Island",
  },
  {
    iata: "MNA",
    name: "Melangguane Airport",
    city: "Karakelong Island",
  },
  {
    iata: "PSJ",
    name: "Kasiguncu Airport",
    city: "Poso-Celebes Island",
  },
  {
    iata: "OTI",
    name: "Pitu Airport",
    city: "Gotalalamo-Morotai Island",
  },
  {
    iata: "TTE",
    name: "Sultan Khairun Babullah Airport",
    city: "Sango-Ternate Island",
  },
  {
    iata: "LUW",
    name: "Bubung Airport",
    city: "Luwok-Celebes Island",
  },
  {
    iata: "UOL",
    name: "Buol Airport",
    city: "Buol-Celebes Island",
  },
  {
    iata: "BTW",
    name: "Batu Licin Airport",
    city: "Batu Licin-Borneo Island",
  },
  {
    iata: "PKN",
    name: "Iskandar Airport",
    city: "Pangkalanbun-Borneo Island",
  },
  {
    iata: "KBU",
    name: "Stagen Airport",
    city: "Laut Island",
  },
  {
    iata: "MTW",
    name: "Beringin Airport",
    city: "Manitowoc",
  },
  {
    iata: "TJG",
    name: "Warukin Airport",
    city: "Tanta-Tabalong-Borneo Island",
  },
  {
    iata: "BDJ",
    name: "Syamsudin Noor Airport",
    city: "Banjarmasin-Borneo Island",
  },
  {
    iata: "PKY",
    name: "Tjilik Riwut Airport",
    city: "Palangkaraya-Kalimantan Tengah",
  },
  {
    iata: "SMQ",
    name: "Sampit(Hasan) Airport",
    city: "Sampit-Borneo Island",
  },
  {
    iata: "AHI",
    name: "Amahai Airport",
    city: "Amahai-Seram Island",
  },
  {
    iata: "DOB",
    name: "Dobo Airport",
    city: "Dobo-Kobror Island",
  },
  {
    iata: "MAL",
    name: "Mangole Airport, Falabisahaya",
    city: "Mangole Island",
  },
  {
    iata: "NRE",
    name: "Namrole Airport",
    city: "Namrole-Buru Island",
  },
  {
    iata: "LAH",
    name: "Oesman Sadik Airport, Labuha",
    city: "Labuha-Halmahera Island",
  },
  {
    iata: "SXK",
    name: "Saumlaki Airport",
    city: "Saumlaki-Yamdena Island",
  },
  {
    iata: "BJK",
    name: "Nangasuri Airport",
    city: "Maikoor Island",
  },
  {
    iata: "LUV",
    name: "Dumatumbun Airport",
    city: "Langgur-Seram Island",
  },
  {
    iata: "SQN",
    name: "Emalamo Sanana Airport",
    city: "Sanana-Seram Island",
  },
  {
    iata: "AMQ",
    name: "Pattimura Airport, Ambon",
    city: "Ambon",
  },
  {
    iata: "NAM",
    name: "Namlea Airport",
    city: "Namlea-Buru Island",
  },
  {
    iata: "TAX",
    name: "Taliabu Island Airport",
    city: "Tikong-Taliabu Island",
  },
  {
    iata: "MLG",
    name: "Abdul Rachman Saleh Airport",
    city: "Malang-Java Island",
  },
  {
    iata: "CPF",
    name: "Cepu Airport",
    city: "Tjepu-Java Island",
  },
  {
    iata: "JOG",
    name: "Adi Sutjipto International Airport",
    city: "Yogyakarta-Java Island",
  },
  {
    iata: "SOC",
    name: "Adi Sumarmo Wiryokusumo Airport",
    city: "Sukarata(Solo)-Java Island",
  },
  {
    iata: "SUB",
    name: "Juanda International Airport",
    city: "Surabaya",
  },
  {
    iata: "SRG",
    name: "Achmad Yani Airport",
    city: "Semarang-Java Island",
  },
  {
    iata: "SUP",
    name: "Trunojoyo Airport",
    city: "Sumenep-Madura Island",
  },
  {
    iata: "NTI",
    name: "Stenkol Airport",
    city: "Bintuni-Papua Island",
  },
  {
    iata: "RSK",
    name: "Abresso Airport",
    city: "Ransiki-Papua Island",
  },
  {
    iata: "KEQ",
    name: "Kebar Airport",
    city: "Kebar-Papua Island",
  },
  {
    iata: "FKQ",
    name: "Fakfak Airport",
    city: "Fakfak-Papua Island",
  },
  {
    iata: "INX",
    name: "Inanwatan Airport",
    city: "Inanwatan Airport-Papua Island",
  },
  {
    iata: "KNG",
    name: "Kaimana Airport",
    city: "Kaimana-Papua Island",
  },
  {
    iata: "RDE",
    name: "Merdei Airport",
    city: "Merdei-Papua Island",
  },
  {
    iata: "BXB",
    name: "Babo Airport",
    city: "Babo-Papua Island",
  },
  {
    iata: "MKW",
    name: "Rendani Airport",
    city: "Manokwari-Papua Island",
  },
  {
    iata: "SOQ",
    name: "Sorong (Jefman) Airport",
    city: "Sorong-Papua Island",
  },
  {
    iata: "TXM",
    name: "Teminabuan Airport",
    city: "Atinjoe-Papua Island",
  },
  {
    iata: "WSR",
    name: "Wasior Airport",
    city: "Wasior-Papua Island",
  },
  {
    iata: "BJW",
    name: "Bajawa Padhameleda Airport",
    city: "Bajawa",
  },
  {
    iata: "MOF",
    name: "Maumere(Wai Oti) Airport",
    city: "Maumere-Flores Island",
  },
  {
    iata: "ENE",
    name: "Ende (H Hasan Aroeboesman) Airport",
    city: "Ende-Flores Island",
  },
  {
    iata: "RTG",
    name: "Satar Tacik Airport",
    city: "Satar Tacik-Flores Island",
  },
  {
    iata: "ARD",
    name: "Mali Airport",
    city: "Alor Island",
  },
  {
    iata: "LBJ",
    name: "Komodo (Mutiara II) Airport",
    city: "Labuan Bajo-Flores Island",
  },
  {
    iata: "KOE",
    name: "El Tari Airport",
    city: "Kupang-Timor Island",
  },
  {
    iata: "BUW",
    name: "Betoambari Airport",
    city: "Bau Bau-Butung Island",
  },
  {
    iata: "MXB",
    name: "Andi Jemma Airport",
    city: "Masamba-Celebes Island",
  },
  {
    iata: "SQR",
    name: "Soroako Airport",
    city: "Soroako-Celebes Island",
  },
  {
    iata: "TTR",
    name: "Pongtiku Airport",
    city: "Tanah Toraja-Celebes Island",
  },
  {
    iata: "KDI",
    name: "Wolter Monginsidi Airport",
    city: "Kendari-Celebes Island",
  },
  {
    iata: "BTU",
    name: "Bintulu Airport",
    city: "Bintulu",
  },
  {
    iata: "BLG",
    name: "Belaga Airport",
    city: "Belaga",
  },
  {
    iata: "LSM",
    name: "Long Semado Airport",
    city: "Long Semado",
  },
  {
    iata: "LGL",
    name: "Long Lellang Airport",
    city: "Long Datih",
  },
  {
    iata: "KCH",
    name: "Kuching International Airport",
    city: "Kuching",
  },
  {
    iata: "ODN",
    name: "Long Seridan Airport",
    city: "Long Seridan",
  },
  {
    iata: "LMN",
    name: "Limbang Airport",
    city: "Limbang",
  },
  {
    iata: "MKM",
    name: "Mukah Airport",
    city: "Mukah",
  },
  {
    iata: "LKH",
    name: "Long Akah Airport",
    city: "Long Akah",
  },
  {
    iata: "MUR",
    name: "Marudi Airport",
    city: "Marudi",
  },
  {
    iata: "BSE",
    name: "Sematan Airport",
    city: "Sematan",
  },
  {
    iata: "KPI",
    name: "Kapit Airport",
    city: "Kapit",
  },
  {
    iata: "BKM",
    name: "Bakalalan Airport",
    city: "Bakalalan",
  },
  {
    iata: "MYY",
    name: "Miri Airport",
    city: "Miri",
  },
  {
    iata: "SBW",
    name: "Sibu Airport",
    city: "Sibu",
  },
  {
    iata: "TGC",
    name: "Tanjung Manis Airport",
    city: "Tanjung Manis",
  },
  {
    iata: "LSU",
    name: "Long Sukang Airport",
    city: "Long Sukang",
  },
  {
    iata: "LWY",
    name: "Lawas Airport",
    city: "Lawas",
  },
  {
    iata: "SGG",
    name: "Simanggang Airport",
    city: "Simanggang",
  },
  {
    iata: "BBN",
    name: "Bario Airport",
    city: "Bario",
  },
  {
    iata: "SMM",
    name: "Semporna Airport",
    city: "Semporna",
  },
  {
    iata: "LDU",
    name: "Lahad Datu Airport",
    city: "Lahad Datu",
  },
  {
    iata: "TEL",
    name: "Telupid Airport",
    city: "Telupid",
  },
  {
    iata: "KGU",
    name: "Keningau Airport",
    city: "Keningau",
  },
  {
    iata: "SXS",
    name: "Sahabat [Sahabat 16] Airport",
    city: "Sahabat",
  },
  {
    iata: "BKI",
    name: "Kota Kinabalu International Airport",
    city: "Kota Kinabalu",
  },
  {
    iata: "LBU",
    name: "Labuan Airport",
    city: "Labuan",
  },
  {
    iata: "TMG",
    name: "Tomanggong Airport",
    city: "Tomanggong",
  },
  {
    iata: "GSA",
    name: "Long Pasia Airport",
    city: "Long Miau",
  },
  {
    iata: "SPE",
    name: "Sepulot Airport",
    city: "Sepulot",
  },
  {
    iata: "PAY",
    name: "Pamol Airport",
    city: "Pamol",
  },
  {
    iata: "RNU",
    name: "Ranau Airport",
    city: "Ranau",
  },
  {
    iata: "SDK",
    name: "Sandakan Airport",
    city: "Sandakan",
  },
  {
    iata: "KUD",
    name: "Kudat Airport",
    city: "Kudat",
  },
  {
    iata: "TWU",
    name: "Tawau Airport",
    city: "Tawau",
  },
  {
    iata: "MZV",
    name: "Mulu Airport",
    city: "Mulu",
  },
  {
    iata: "BWN",
    name: "Brunei International Airport",
    city: "Bandar Seri Begawan",
  },
  {
    iata: "TKG",
    name: "Radin Inten II (Branti) Airport",
    city: "Bandar Lampung-Sumatra Island",
  },
  {
    iata: "PKU",
    name: "Sultan Syarif Kasim Ii (Simpang Tiga) Airport",
    city: "Pekanbaru-Sumatra Island",
  },
  {
    iata: "DUM",
    name: "Pinang Kampai Airport",
    city: "Dumai-Sumatra Island",
  },
  {
    iata: "RKO",
    name: "Rokot Airport",
    city: "Sipora Island",
  },
  {
    iata: "SEQ",
    name: "Sungai Pakning Bengkalis Airport",
    city: "Bengkalis-Sumatra Island",
  },
  {
    iata: "TJB",
    name: "Tanjung Balai Airport",
    city: "Karinmunbesar Island",
  },
  {
    iata: "BDO",
    name: "Husein Sastranegara International Airport",
    city: "Bandung-Java Island",
  },
  {
    iata: "CBN",
    name: "Penggung Airport",
    city: "Cirebon-Java Island",
  },
  {
    iata: "TSY",
    name: "Cibeureum Airport",
    city: "Tasikmalaya-Java Island",
  },
  {
    iata: "BTH",
    name: "Hang Nadim Airport",
    city: "Batam Island",
  },
  {
    iata: "PPR",
    name: "Pasir Pangaraan Airport",
    city: "Pasir Pengarayan-Sumatra Island",
  },
  {
    iata: "TNJ",
    name: "Kijang Airport",
    city: "Tanjung Pinang-Bintan Island",
  },
  {
    iata: "SIQ",
    name: "Dabo Airport",
    city: "Pasirkuning-Singkep Island",
  },
  {
    iata: "HLP",
    name: "Halim Perdanakusuma International Airport",
    city: "Jakarta",
  },
  {
    iata: "CXP",
    name: "Tunggul Wulung Airport",
    city: "Cilacap-Java Island",
  },
  {
    iata: "PCB",
    name: "Pondok Cabe Air Base",
    city: "Jakarta",
  },
  {
    iata: "CGK",
    name: "Soekarno-Hatta International Airport",
    city: "Jakarta",
  },
  {
    iata: "LLG",
    name: "Silampari Airport",
    city: "",
  },
  {
    iata: "GNS",
    name: "Binaka Airport",
    city: "Gunung Sitoli-Nias Island",
  },
  {
    iata: "AEG",
    name: "Aek Godang Airport",
    city: "Padang Sidempuan-Sumatra Island",
  },
  {
    iata: "PDG",
    name: "Tabing Airport",
    city: "Ketaping/Padang-Sumatra Island",
  },
  {
    iata: "MES",
    name: "Polonia International Airport",
    city: "Medan",
  },
  {
    iata: "TJQ",
    name: "Buluh Tumbang (H A S Hanandjoeddin) Airport",
    city: "Tanjung Pandan-Belitung Island",
  },
  {
    iata: "NPO",
    name: "Nanga Pinoh I Airport",
    city: "Nanga Pinoh-Borneo Island",
  },
  {
    iata: "KTG",
    name: "Ketapang(Rahadi Usman) Airport",
    city: "Ketapang-Borneo Island",
  },
  {
    iata: "MWK",
    name: "Tarempa Airport",
    city: "Matak Island",
  },
  {
    iata: "NTX",
    name: "Ranai Airport",
    city: "Ranai-Natuna Besar Island",
  },
  {
    iata: "PNK",
    name: "Supadio Airport",
    city: "Pontianak-Borneo Island",
  },
  {
    iata: "PSU",
    name: "Pangsuma Airport",
    city: "Putussibau-Borneo Island",
  },
  {
    iata: "SQG",
    name: "Sintang(Susilo) Airport",
    city: "Sintang-Borneo Island",
  },
  {
    iata: "DJB",
    name: "Sultan Thaha Airport",
    city: "Jambi-Sumatra Island",
  },
  {
    iata: "PGK",
    name: "Pangkal Pinang (Depati Amir) Airport",
    city: "Pangkal Pinang-Palaubangka Island",
  },
  {
    iata: "BKS",
    name: "Padang Kemiling (Fatmawati Soekarno) Airport",
    city: "Bengkulu-Sumatra Island",
  },
  {
    iata: "PLM",
    name: "Sultan Mahmud Badaruddin Ii Airport",
    city: "Palembang-Sumatra Island",
  },
  {
    iata: "PDO",
    name: "Pendopo Airport",
    city: "Talang Gudang-Sumatra Island",
  },
  {
    iata: "RGT",
    name: "Japura Airport",
    city: "Rengat-Sumatra Island",
  },
  {
    iata: "PDG",
    name: "Minangkabau Airport",
    city: "Ketaping/Padang-Sumatra Island",
  },
  {
    iata: "MPC",
    name: "Muko Muko Airport",
    city: "Muko Muko-Sumatra Island",
  },
  {
    iata: "KLQ",
    name: "Keluang Airport",
    city: "Keluang-Sumatra Island",
  },
  {
    iata: "TPK",
    name: "Teuku Cut Ali Airport",
    city: "Tapak Tuan-Sumatra Island",
  },
  {
    iata: "SBG",
    name: "Maimun Saleh Airport",
    city: "Sabang-We Island",
  },
  {
    iata: "MEQ",
    name: "Seunagan Airport",
    city: "Peureumeue-Sumatra Island",
  },
  {
    iata: "LSX",
    name: "Lhok Sukon Airport",
    city: "Lhok Sukon-Sumatra Island",
  },
  {
    iata: "LSW",
    name: "Malikus Saleh Airport",
    city: "Lhok Seumawe-Sumatra Island",
  },
  {
    iata: "BTJ",
    name: "Sultan Iskandarmuda Airport",
    city: "Banda Aceh-Sumatra Island",
  },
  {
    iata: "SXT",
    name: "Sungai Tiang Airport",
    city: "Taman Negara",
  },
  {
    iata: "MEP",
    name: "Mersing Airport",
    city: "Mersing",
  },
  {
    iata: "SWY",
    name: "Sitiawan Airport",
    city: "Sitiawan",
  },
  {
    iata: "TPG",
    name: "Taiping (Tekah) Airport",
    city: "Taiping",
  },
  {
    iata: "TOD",
    name: "Pulau Tioman Airport",
    city: "Pulau Tioman",
  },
  {
    iata: "AOR",
    name: "Sultan Abdul Halim Airport",
    city: "Alor Satar",
  },
  {
    iata: "BWH",
    name: "Butterworth Airport",
    city: "Butterworth",
  },
  {
    iata: "KBR",
    name: "Sultan Ismail Petra Airport",
    city: "Kota Baharu",
  },
  {
    iata: "KUA",
    name: "Kuantan Airport",
    city: "Kuantan",
  },
  {
    iata: "KTE",
    name: "Kerteh Airport",
    city: "Kerteh",
  },
  {
    iata: "IPH",
    name: "Sultan Azlan Shah Airport",
    city: "Ipoh",
  },
  {
    iata: "JHB",
    name: "Senai International Airport",
    city: "Senai",
  },
  {
    iata: "KUL",
    name: "Kuala Lumpur International Airport",
    city: "Kuala Lumpur",
  },
  {
    iata: "LGK",
    name: "Langkawi International Airport",
    city: "Langkawi",
  },
  {
    iata: "MKZ",
    name: "Malacca Airport",
    city: "Malacca",
  },
  {
    iata: "TGG",
    name: "Sultan Mahmud Airport",
    city: "Kuala Terengganu",
  },
  {
    iata: "PEN",
    name: "Penang International Airport",
    city: "Penang",
  },
  {
    iata: "PKG",
    name: "Pulau Pangkor Airport",
    city: "Pangkor Island",
  },
  {
    iata: "RDN",
    name: "LTS Pulau Redang Airport",
    city: "Redang",
  },
  {
    iata: "SZB",
    name: "Sultan Abdul Aziz Shah International Airport",
    city: "Subang",
  },
  {
    iata: "AUT",
    name: "Atauro Airport",
    city: "Atauro",
  },
  {
    iata: "UAI",
    name: "Suai Airport",
    city: "Suai",
  },
  {
    iata: "DIC",
    name: "Dili City Heliport",
  },
  {
    iata: "DIL",
    name: "Presidente Nicolau Lobato International Airport",
    city: "Dili",
  },
  {
    iata: "BCH",
    name: "Cakung Airport",
    city: "Baucau",
  },
  {
    iata: "MPT",
    name: "Maliana Airport",
    city: "Maliana",
  },
  {
    iata: "OEC",
    name: "Oecussi Airport",
    city: "Oecussi-Ambeno",
  },
  {
    iata: "VIQ",
    name: "Viqueque Airport",
    city: "Viqueque",
  },
  {
    iata: "ABU",
    name: "Haliwen Airport",
    city: "Atambua-Timor Island",
  },
  {
    iata: "BJW",
    name: "Padhameleda Airport",
    city: "Bajawa",
  },
  {
    iata: "LKA",
    name: "Gewayentana Airport",
    city: "Larantuka-Flores Island",
  },
  {
    iata: "SAU",
    name: "Sawu Airport",
    city: "Sawu-Sawu Island",
  },
  {
    iata: "SGQ",
    name: "Sanggata Airport",
    city: "Sanggata-Timor Island",
  },
  {
    iata: "LBW",
    name: "Long Bawan Airport",
    city: "Long Bawan-Borneo Island",
  },
  {
    iata: "BXT",
    name: "Bontang Airport",
    city: "Bontang-Borneo Island",
  },
  {
    iata: "NNX",
    name: "Nunukan Airport",
    city: "Nunukan-Nunukan Island",
  },
  {
    iata: "TNB",
    name: "Tanah Grogot Airport",
    city: "Tanah Grogot-Borneo Island",
  },
  {
    iata: "LPU",
    name: "Long Apung Airport",
    city: "Long Apung-Borneo Island",
  },
  {
    iata: "SZH",
    name: "Senipah Airport",
  },
  {
    iata: "QPG",
    name: "Paya Lebar Air Base",
    city: "",
  },
  {
    iata: "TGA",
    name: "Tengah Air Base",
    city: "",
  },
  {
    iata: "XSP",
    name: "Seletar Airport",
    city: "Seletar",
  },
  {
    iata: "SIN",
    name: "Singapore Changi International Airport",
    city: "Singapore",
  },
  {
    iata: "WWT",
    name: "Newtok Seaplane Base",
    city: "Newtok",
  },
  {
    iata: "BCD",
    name: "Bacolod City Domestic Airport",
    city: "Bacolod City",
  },
  {
    iata: "MNI",
    name: "W. H. Bramble Airport",
    city: "Gerald's Park",
  },
  {
    iata: "SKL",
    name: "Skye Bridge Ashaig Airport",
    city: "Broadford",
  },
  {
    iata: "MUC",
    name: "Munich-Reim Airport",
    city: "Munich",
  },
  {
    iata: "ALH",
    name: "Albany Airport",
    city: "Albany",
  },
  {
    iata: "ABG",
    name: "Abingdon Downs Airport",
    city: "",
  },
  {
    iata: "AWN",
    name: "Alton Downs Airport",
    city: "",
  },
  {
    iata: "AUD",
    name: "Augustus Downs Airport",
    city: "",
  },
  {
    iata: "MRP",
    name: "Marla Airport",
    city: "",
  },
  {
    iata: "AXL",
    name: "Alexandria Homestead Airport",
    city: "",
  },
  {
    iata: "AXC",
    name: "Aramac Airport",
    city: "",
  },
  {
    iata: "ADO",
    name: "Andamooka Airport",
    city: "",
  },
  {
    iata: "AMX",
    name: "Ammaroo Airport",
    city: "",
  },
  {
    iata: "AMT",
    name: "Amata Airport",
    city: "",
  },
  {
    iata: "AYL",
    name: "Anthony Lagoon Airport",
    city: "",
  },
  {
    iata: "ABH",
    name: "Alpha Airport",
    city: "",
  },
  {
    iata: "ARY",
    name: "Ararat Airport",
    city: "",
  },
  {
    iata: "GYL",
    name: "Argyle Airport",
    city: "",
  },
  {
    iata: "ARM",
    name: "Armidale Airport",
    city: "Armidale",
  },
  {
    iata: "AAB",
    name: "Arrabury Airport",
    city: "",
  },
  {
    iata: "AUU",
    name: "Aurukun Airport",
    city: "",
  },
  {
    iata: "AWP",
    name: "Austral Downs Airport",
    city: "",
  },
  {
    iata: "AVG",
    name: "Auvergne Airport",
    city: "",
  },
  {
    iata: "AYQ",
    name: "Ayers Rock Connellan Airport",
    city: "Ayers Rock",
  },
  {
    iata: "AYR",
    name: "Ayr Airport",
    city: "",
  },
  {
    iata: "ACF",
    name: "Brisbane Archerfield Airport",
    city: "Brisbane",
  },
  {
    iata: "ABM",
    name: "Bamaga Injinoo Airport",
    city: "",
  },
  {
    iata: "BCI",
    name: "Barcaldine Airport",
    city: "Barcaldine",
  },
  {
    iata: "ASP",
    name: "Alice Springs Airport",
    city: "Alice Springs",
  },
  {
    iata: "BDD",
    name: "Badu Island Airport",
    city: "",
  },
  {
    iata: "BBE",
    name: "Big Bell Airport",
    city: "Big Bell",
  },
  {
    iata: "BNE",
    name: "Brisbane International Airport",
    city: "Brisbane",
  },
  {
    iata: "OOL",
    name: "Gold Coast Airport",
    city: "Gold Coast",
  },
  {
    iata: "BKQ",
    name: "Blackall Airport",
    city: "Blackall",
  },
  {
    iata: "CNS",
    name: "Cairns International Airport",
    city: "Cairns",
  },
  {
    iata: "CTL",
    name: "Charleville Airport",
    city: "Charleville",
  },
  {
    iata: "BXG",
    name: "Bendigo Airport",
    city: "",
  },
  {
    iata: "BVI",
    name: "Birdsville Airport",
    city: "",
  },
  {
    iata: "BTX",
    name: "Betoota Airport",
    city: "",
  },
  {
    iata: "BQW",
    name: "Balgo Hill Airport",
    city: "",
  },
  {
    iata: "BHQ",
    name: "Broken Hill Airport",
    city: "Broken Hill",
  },
  {
    iata: "HTI",
    name: "Hamilton Island Airport",
    city: "Hamilton Island",
  },
  {
    iata: "BEU",
    name: "Bedourie Airport",
    city: "",
  },
  {
    iata: "BRK",
    name: "Bourke Airport",
    city: "",
  },
  {
    iata: "BUC",
    name: "Burketown Airport",
    city: "",
  },
  {
    iata: "BLN",
    name: "Benalla Airport",
    city: "",
  },
  {
    iata: "LCN",
    name: "Balcanoona Airport",
    city: "",
  },
  {
    iata: "BLS",
    name: "Bollon Airport",
    city: "",
  },
  {
    iata: "BQB",
    name: "Busselton Regional Airport",
    city: "Busselton",
  },
  {
    iata: "ISA",
    name: "Mount Isa Airport",
    city: "Mount Isa",
  },
  {
    iata: "MCY",
    name: "Sunshine Coast Airport",
    city: "Maroochydore",
  },
  {
    iata: "MKY",
    name: "Mackay Airport",
    city: "Mackay",
  },
  {
    iata: "BNK",
    name: "Ballina Byron Gateway Airport",
    city: "Ballina",
  },
  {
    iata: "BSJ",
    name: "Bairnsdale Airport",
    city: "",
  },
  {
    iata: "GIC",
    name: "Boigu Airport",
    city: "",
  },
  {
    iata: "OKY",
    name: "Oakey Airport",
    city: "",
  },
  {
    iata: "BQL",
    name: "Boulia Airport",
    city: "",
  },
  {
    iata: "BMP",
    name: "Brampton Island Airport",
    city: "",
  },
  {
    iata: "PPP",
    name: "Proserpine Whitsunday Coast Airport",
    city: "Proserpine",
  },
  {
    iata: "ROK",
    name: "Rockhampton Airport",
    city: "Rockhampton",
  },
  {
    iata: "BOX",
    name: "Borroloola Airport",
    city: "",
  },
  {
    iata: "BME",
    name: "Broome International Airport",
    city: "Broome",
  },
  {
    iata: "BZD",
    name: "Balranald Airport",
    city: "",
  },
  {
    iata: "BWQ",
    name: "Brewarrina Airport",
    city: "",
  },
  {
    iata: "BHS",
    name: "Bathurst Airport",
    city: "Bathurst",
  },
  {
    iata: "BRT",
    name: "Bathurst Island Airport",
    city: "",
  },
  {
    iata: "TSV",
    name: "Townsville Airport",
    city: "Townsville",
  },
  {
    iata: "BLT",
    name: "Blackwater Airport",
    city: "",
  },
  {
    iata: "BDB",
    name: "Bundaberg Airport",
    city: "Bundaberg",
  },
  {
    iata: "BUY",
    name: "Bunbury Airport",
    city: "",
  },
  {
    iata: "ZBO",
    name: "Bowen Airport",
    city: "",
  },
  {
    iata: "WEI",
    name: "Weipa Airport",
    city: "Weipa",
  },
  {
    iata: "BWB",
    name: "Barrow Island Airport",
    city: "",
  },
  {
    iata: "BVZ",
    name: "Beverley Springs Airport",
    city: "",
  },
  {
    iata: "CGV",
    name: "Caiguna Airport",
    city: "",
  },
  {
    iata: "CLH",
    name: "Coolah Airport",
    city: "",
  },
  {
    iata: "CVQ",
    name: "Carnarvon Airport",
    city: "",
  },
  {
    iata: "CSI",
    name: "Casino Airport",
    city: "",
  },
  {
    iata: "CAZ",
    name: "Cobar Airport",
    city: "",
  },
  {
    iata: "COJ",
    name: "Coonabarabran Airport",
    city: "",
  },
  {
    iata: "CBY",
    name: "Canobie Airport",
    city: "Canobie",
  },
  {
    iata: "CBI",
    name: "Cape Barren Island Airport",
    city: "",
  },
  {
    iata: "CPD",
    name: "Coober Pedy Airport",
    city: "",
  },
  {
    iata: "CRB",
    name: "Collarenebri Airport",
    city: "",
  },
  {
    iata: "CCL",
    name: "Chinchilla Airport",
    city: "",
  },
  {
    iata: "CNC",
    name: "Coconut Island Airport",
    city: "",
  },
  {
    iata: "CNJ",
    name: "Cloncurry Airport",
    city: "Cloncurry",
  },
  {
    iata: "CBX",
    name: "Condobolin Airport",
    city: "",
  },
  {
    iata: "CUD",
    name: "Caloundra Airport",
    city: "",
  },
  {
    iata: "CED",
    name: "Ceduna Airport",
    city: "",
  },
  {
    iata: "CVC",
    name: "Cleve Airport",
    city: "",
  },
  {
    iata: "CFI",
    name: "Camfield Airport",
    city: "",
  },
  {
    iata: "LLG",
    name: "Chillagoe Airport",
    city: "",
  },
  {
    iata: "CXT",
    name: "Charters Towers Airport",
    city: "",
  },
  {
    iata: "CKI",
    name: "Croker Island Airport",
    city: "",
  },
  {
    iata: "CTN",
    name: "Cooktown Airport",
    city: "",
  },
  {
    iata: "CMQ",
    name: "Clermont Airport",
    city: "",
  },
  {
    iata: "CMA",
    name: "Cunnamulla Airport",
    city: "",
  },
  {
    iata: "CML",
    name: "Camooweal Airport",
    city: "",
  },
  {
    iata: "NIF",
    name: "Camp Nifty Airport",
    city: "",
  },
  {
    iata: "CES",
    name: "Cessnock Airport",
    city: "",
  },
  {
    iata: "CNB",
    name: "Coonamble Airport",
    city: "",
  },
  {
    iata: "ODL",
    name: "Cordillo Downs Airport",
    city: "Cordillo Downs",
  },
  {
    iata: "CUQ",
    name: "Coen Airport",
    city: "",
  },
  {
    iata: "OOM",
    name: "Cooma Snowy Mountains Airport",
    city: "Cooma",
  },
  {
    iata: "CDA",
    name: "Cooinda Airport",
    city: "",
  },
  {
    iata: "CWW",
    name: "Corowa Airport",
    city: "",
  },
  {
    iata: "CYG",
    name: "Corryong Airport",
    city: "",
  },
  {
    iata: "CDQ",
    name: "Croydon Airport",
    city: "",
  },
  {
    iata: "KCE",
    name: "Collinsville Airport",
    city: "",
  },
  {
    iata: "CMD",
    name: "Cootamundra Airport",
    city: "",
  },
  {
    iata: "CUG",
    name: "Cudal Airport",
    city: "",
  },
  {
    iata: "CUY",
    name: "Cue Airport",
    city: "",
  },
  {
    iata: "CWR",
    name: "Cowarie Airport",
    city: "",
  },
  {
    iata: "CCW",
    name: "Cowell Airport",
    city: "",
  },
  {
    iata: "CWT",
    name: "Cowra Airport",
    city: "",
  },
  {
    iata: "DJR",
    name: "Dajarra Airport",
    city: "",
  },
  {
    iata: "DBY",
    name: "Dalby Airport",
    city: "",
  },
  {
    iata: "DRN",
    name: "Dirranbandi Airport",
    city: "",
  },
  {
    iata: "DNB",
    name: "Dunbar Airport",
    city: "",
  },
  {
    iata: "DRB",
    name: "Derby Airport",
    city: "",
  },
  {
    iata: "DFP",
    name: "Drumduff Airport",
    city: "Drumduff",
  },
  {
    iata: "DLK",
    name: "Dulkaninna Airport",
    city: "Dulkaninna",
  },
  {
    iata: "DDN",
    name: "Delta Downs Airport",
    city: "",
  },
  {
    iata: "DLV",
    name: "Delissaville Airport",
    city: "",
  },
  {
    iata: "DMD",
    name: "Doomadgee Airport",
    city: "",
  },
  {
    iata: "DVR",
    name: "Daly River Airport",
    city: "",
  },
  {
    iata: "NLF",
    name: "Darnley Island Airport",
    city: "Darnley Island",
  },
  {
    iata: "DRD",
    name: "Dorunda Airport",
    city: "",
  },
  {
    iata: "DVP",
    name: "Davenport Downs Airport",
    city: "",
  },
  {
    iata: "DPO",
    name: "Devonport Airport",
    city: "Devonport",
  },
  {
    iata: "DHD",
    name: "Durham Downs Airport",
    city: "",
  },
  {
    iata: "DRR",
    name: "Durrie Airport",
    city: "",
  },
  {
    iata: "DKV",
    name: "Docker River Airport",
    city: "",
  },
  {
    iata: "DYA",
    name: "Dysart Airport",
    city: "",
  },
  {
    iata: "WDA",
    name: "Wadi Ain Airport",
  },
  {
    iata: "ECH",
    name: "Echuca Airport",
    city: "",
  },
  {
    iata: "EUC",
    name: "Eucla Airport",
    city: "",
  },
  {
    iata: "ETD",
    name: "Etadunna Airport",
    city: "Etadunna",
  },
  {
    iata: "ENB",
    name: "Eneabba Airport",
    city: "Eneabba",
  },
  {
    iata: "EIH",
    name: "Einasleigh Airport",
    city: "Einasleigh",
  },
  {
    iata: "ELC",
    name: "Elcho Island Airport",
    city: "Elcho Island",
  },
  {
    iata: "EMD",
    name: "Emerald Airport",
    city: "Emerald",
  },
  {
    iata: "ERB",
    name: "Ernabella Airport",
    city: "",
  },
  {
    iata: "EPR",
    name: "Esperance Airport",
    city: "",
  },
  {
    iata: "EVD",
    name: "Eva Downs Airport",
    city: "Eva Downs",
  },
  {
    iata: "EVH",
    name: "Evans Head Aerodrome",
    city: "",
  },
  {
    iata: "EXM",
    name: "Exmouth Airport",
    city: "",
  },
  {
    iata: "FRB",
    name: "Forbes Airport",
    city: "Forbes",
  },
  {
    iata: "KFE",
    name: "Fortescue - Dave Forrest Aerodrome",
    city: "Cloudbreak Village",
  },
  {
    iata: "FLY",
    name: "Finley Airport",
    city: "",
  },
  {
    iata: "FLS",
    name: "Flinders Island Airport",
    city: "",
  },
  {
    iata: "FVL",
    name: "Flora Valley Airport",
    city: "",
  },
  {
    iata: "FIK",
    name: "Finke Airport",
    city: "Finke",
  },
  {
    iata: "FOS",
    name: "Forrest Airport",
    city: "",
  },
  {
    iata: "FOT",
    name: "Forster (Wallis Is) Airport",
    city: "",
  },
  {
    iata: "FIZ",
    name: "Fitzroy Crossing Airport",
    city: "",
  },
  {
    iata: "GAH",
    name: "Gayndah Airport",
    city: "",
  },
  {
    iata: "GBL",
    name: "South Goulburn Is Airport",
    city: "",
  },
  {
    iata: "GUH",
    name: "Gunnedah Airport",
    city: "",
  },
  {
    iata: "GOO",
    name: "Goondiwindi Airport",
    city: "",
  },
  {
    iata: "GDD",
    name: "Gordon Downs Airport",
    city: "Gordon Downs",
  },
  {
    iata: "GGD",
    name: "Gregory Downs Airport",
    city: "",
  },
  {
    iata: "GTS",
    name: "Granite Downs Airport",
    city: "",
  },
  {
    iata: "GET",
    name: "Geraldton Airport",
    city: "",
  },
  {
    iata: "GFN",
    name: "Grafton Airport",
    city: "",
  },
  {
    iata: "GBV",
    name: "Gibb River Airport",
    city: "",
  },
  {
    iata: "GLT",
    name: "Gladstone Airport",
    city: "Gladstone",
  },
  {
    iata: "GUL",
    name: "Goulburn Airport",
    city: "",
  },
  {
    iata: "GLG",
    name: "Glengyle Airport",
    city: "",
  },
  {
    iata: "GEX",
    name: "Geelong Airport",
    city: "",
  },
  {
    iata: "GLI",
    name: "Glen Innes Airport",
    city: "",
  },
  {
    iata: "GLM",
    name: "Glenormiston Airport",
    city: "",
  },
  {
    iata: "GVP",
    name: "Greenvale Airport",
    city: "",
  },
  {
    iata: "GPN",
    name: "Garden Point Airport",
    city: "",
  },
  {
    iata: "GTE",
    name: "Groote Eylandt Airport",
    city: "Groote Eylandt",
  },
  {
    iata: "GFF",
    name: "Griffith Airport",
    city: "Griffith",
  },
  {
    iata: "GTT",
    name: "Georgetown Airport",
    city: "",
  },
  {
    iata: "GEE",
    name: "Georgetown (Tas) Airport",
    city: "",
  },
  {
    iata: "GYP",
    name: "Gympie Airport",
    city: "",
  },
  {
    iata: "HWK",
    name: "Wilpena Pound Airport",
    city: "Hawker",
  },
  {
    iata: "HXX",
    name: "Hay Airport",
    city: "",
  },
  {
    iata: "HVB",
    name: "Hervey Bay Airport",
    city: "Hervey Bay",
  },
  {
    iata: "HUB",
    name: "Humbert River Airport",
    city: "",
  },
  {
    iata: "HIP",
    name: "Headingly Airport",
    city: "",
  },
  {
    iata: "HID",
    name: "Horn Island Airport",
    city: "Horn Island",
  },
  {
    iata: "HCQ",
    name: "Halls Creek Airport",
    city: "",
  },
  {
    iata: "HMG",
    name: "Hermannsburg Airport",
    city: "",
  },
  {
    iata: "HLT",
    name: "Hamilton Airport",
    city: "",
  },
  {
    iata: "HOK",
    name: "Hooker Creek Airport",
    city: "",
  },
  {
    iata: "MHU",
    name: "Mount Hotham Airport",
    city: "Mount Hotham",
  },
  {
    iata: "HTU",
    name: "Hopetoun Airport",
    city: "",
  },
  {
    iata: "HSM",
    name: "Horsham Airport",
    city: "",
  },
  {
    iata: "HGD",
    name: "Hughenden Airport",
    city: "",
  },
  {
    iata: "IDK",
    name: "Indulkana Airport",
    city: "",
  },
  {
    iata: "IFL",
    name: "Innisfail Airport",
    city: "",
  },
  {
    iata: "IFF",
    name: "Iffley Airport",
    city: "",
  },
  {
    iata: "IGH",
    name: "Ingham Airport",
    city: "",
  },
  {
    iata: "IKP",
    name: "Inkerman Airport",
    city: "",
  },
  {
    iata: "INJ",
    name: "Injune Airport",
    city: "",
  },
  {
    iata: "INM",
    name: "Innamincka Airport",
    city: "",
  },
  {
    iata: "IVW",
    name: "Inverway Airport",
    city: "Inverway",
  },
  {
    iata: "ISI",
    name: "Isisford Airport",
    city: "",
  },
  {
    iata: "IVR",
    name: "Inverell Airport",
    city: "",
  },
  {
    iata: "JAB",
    name: "Jabiru Airport",
    city: "",
  },
  {
    iata: "JUN",
    name: "Jundah Airport",
    city: "",
  },
  {
    iata: "QJD",
    name: "Jindabyne Airport",
    city: "",
  },
  {
    iata: "JCK",
    name: "Julia Creek Airport",
    city: "",
  },
  {
    iata: "JUR",
    name: "Jurien Bay Airport",
    city: "",
  },
  {
    iata: "UBU",
    name: "Kalumburu Airport",
    city: "",
  },
  {
    iata: "KAX",
    name: "Kalbarri Airport",
    city: "",
  },
  {
    iata: "KBY",
    name: "Streaky Bay Airport",
    city: "",
  },
  {
    iata: "KCS",
    name: "Kings Creek Airport",
    city: "",
  },
  {
    iata: "KRA",
    name: "Kerang Airport",
    city: "",
  },
  {
    iata: "KNS",
    name: "King Island Airport",
    city: "",
  },
  {
    iata: "KBB",
    name: "Kirkimbie Station Airport",
    city: "Kirkimbie",
  },
  {
    iata: "KFG",
    name: "Kalkgurung Airport",
    city: "",
  },
  {
    iata: "KKP",
    name: "Koolburra Airport",
    city: "Koolburra",
  },
  {
    iata: "KRB",
    name: "Karumba Airport",
    city: "",
  },
  {
    iata: "KML",
    name: "Kamileroi Airport",
    city: "",
  },
  {
    iata: "KPS",
    name: "Kempsey Airport",
    city: "",
  },
  {
    iata: "KNI",
    name: "Katanning Airport",
    city: "",
  },
  {
    iata: "KWM",
    name: "Kowanyama Airport",
    city: "Kowanyama",
  },
  {
    iata: "KGY",
    name: "Kingaroy Airport",
    city: "",
  },
  {
    iata: "KGC",
    name: "Kingscote Airport",
    city: "",
  },
  {
    iata: "KUG",
    name: "Kubin Airport",
    city: "",
  },
  {
    iata: "LWH",
    name: "Lawn Hill Airport",
    city: "",
  },
  {
    iata: "LGH",
    name: "Leigh Creek Airport",
    city: "",
  },
  {
    iata: "LNO",
    name: "Leonora Airport",
    city: "Leonora",
  },
  {
    iata: "LEL",
    name: "Lake Evella Airport",
    city: "",
  },
  {
    iata: "LDH",
    name: "Lord Howe Island Airport",
    city: "Lord Howe Island",
  },
  {
    iata: "IRG",
    name: "Lockhart River Airport",
    city: "",
  },
  {
    iata: "LTP",
    name: "Lyndhurst Airport",
    city: "Lyndhurst",
  },
  {
    iata: "LDC",
    name: "Lindeman Island Airport",
    city: "Lindeman Island",
  },
  {
    iata: "LSY",
    name: "Lismore Airport",
    city: "Lismore",
  },
  {
    iata: "LOC",
    name: "Lock Airport",
    city: "Lock",
  },
  {
    iata: "LOA",
    name: "Lorraine Airport",
    city: "",
  },
  {
    iata: "LTV",
    name: "Lotus Vale Airport",
    city: "Lotus Vale",
  },
  {
    iata: "LUU",
    name: "Laura Airport",
    city: "",
  },
  {
    iata: "LHG",
    name: "Lightning Ridge Airport",
    city: "",
  },
  {
    iata: "LRE",
    name: "Longreach Airport",
    city: "Longreach",
  },
  {
    iata: "LUT",
    name: "New Laura Airport",
    city: "",
  },
  {
    iata: "LER",
    name: "Leinster Airport",
    city: "",
  },
  {
    iata: "LVO",
    name: "Laverton Airport",
    city: "",
  },
  {
    iata: "TGN",
    name: "Latrobe Valley Airport",
    city: "",
  },
  {
    iata: "LZR",
    name: "Lizard Island Airport",
    city: "",
  },
  {
    iata: "UBB",
    name: "Mabuiag Island Airport",
    city: "Mabuiag Island",
  },
  {
    iata: "AVV",
    name: "Avalon Airport",
    city: "Melbourne",
  },
  {
    iata: "ABX",
    name: "Albury Airport",
    city: "Albury",
  },
  {
    iata: "MRG",
    name: "Mareeba Airport",
    city: "",
  },
  {
    iata: "MBB",
    name: "Marble Bar Airport",
    city: "",
  },
  {
    iata: "XMC",
    name: "Mallacoota Airport",
    city: "",
  },
  {
    iata: "MFP",
    name: "Manners Creek Airport",
    city: "",
  },
  {
    iata: "MLR",
    name: "Millicent Airport",
    city: "",
  },
  {
    iata: "DGE",
    name: "Mudgee Airport",
    city: "Mudgee",
  },
  {
    iata: "MQA",
    name: "Mandora Airport",
    city: "Mandora",
  },
  {
    iata: "MKR",
    name: "Meekatharra Airport",
    city: "",
  },
  {
    iata: "MEB",
    name: "Melbourne Essendon Airport",
    city: "",
  },
  {
    iata: "MIM",
    name: "Merimbula Airport",
    city: "Merimbula",
  },
  {
    iata: "SXE",
    name: "RAAF Base East Sale",
    city: "",
  },
  {
    iata: "MGT",
    name: "Milingimbi Airport",
    city: "Milingimbi Island",
  },
  {
    iata: "MNG",
    name: "Maningrida Airport",
    city: "Maningrida",
  },
  {
    iata: "GSN",
    name: "Mount Gunson Airport",
    city: "Mount Gunson",
  },
  {
    iata: "MGV",
    name: "Margaret River (Station) Airport",
    city: "",
  },
  {
    iata: "MQZ",
    name: "Margaret River Airport",
    city: "",
  },
  {
    iata: "HBA",
    name: "Hobart International Airport",
    city: "Hobart",
  },
  {
    iata: "MHO",
    name: "Mount House Airport",
    city: "",
  },
  {
    iata: "MCV",
    name: "McArthur River Mine Airport",
    city: "McArthur River Mine",
  },
  {
    iata: "MQL",
    name: "Mildura Airport",
    city: "Mildura",
  },
  {
    iata: "XML",
    name: "Minlaton Airport",
    city: "",
  },
  {
    iata: "MIH",
    name: "Mitchell Plateau Airport",
    city: "Mitchell Plateau",
  },
  {
    iata: "MTQ",
    name: "Mitchell Airport",
    city: "",
  },
  {
    iata: "MJP",
    name: "Manjimup Airport",
    city: "",
  },
  {
    iata: "LST",
    name: "Launceston Airport",
    city: "Launceston",
  },
  {
    iata: "MBW",
    name: "Melbourne Moorabbin Airport",
    city: "Melbourne",
  },
  {
    iata: "MEL",
    name: "Melbourne International Airport",
    city: "Melbourne",
  },
  {
    iata: "MMM",
    name: "Middlemount Airport",
    city: "",
  },
  {
    iata: "MTL",
    name: "Maitland Airport",
    city: "",
  },
  {
    iata: "WME",
    name: "Mount Keith Airport",
    city: "",
  },
  {
    iata: "ONR",
    name: "Monkira Airport",
    city: "",
  },
  {
    iata: "OXY",
    name: "Morney Airport",
    city: "",
  },
  {
    iata: "MMG",
    name: "Mount Magnet Airport",
    city: "",
  },
  {
    iata: "OOR",
    name: "Mooraberree Airport",
    city: "",
  },
  {
    iata: "MRZ",
    name: "Moree Airport",
    city: "Moree",
  },
  {
    iata: "MET",
    name: "Moreton Airport",
    city: "Moreton",
  },
  {
    iata: "MIN",
    name: "Minnipa Airport",
    city: "",
  },
  {
    iata: "MQE",
    name: "Marqua Airport",
    city: "Marqua",
  },
  {
    iata: "MOV",
    name: "Moranbah Airport",
    city: "Moranbah",
  },
  {
    iata: "RRE",
    name: "Marree Airport",
    city: "",
  },
  {
    iata: "MWB",
    name: "Morawa Airport",
    city: "",
  },
  {
    iata: "MYA",
    name: "Moruya Airport",
    city: "Moruya",
  },
  {
    iata: "MTD",
    name: "Mount Sanford Station Airport",
    city: "",
  },
  {
    iata: "UTB",
    name: "Muttaburra Airport",
    city: "",
  },
  {
    iata: "MGB",
    name: "Mount Gambier Airport",
    city: "",
  },
  {
    iata: "ONG",
    name: "Mornington Island Airport",
    city: "",
  },
  {
    iata: "MNQ",
    name: "Monto Airport",
    city: "",
  },
  {
    iata: "MUQ",
    name: "Muccan Station Airport",
    city: "Muccan Station",
  },
  {
    iata: "MNE",
    name: "Mungeranie Airport",
    city: "Mungeranie",
  },
  {
    iata: "MYI",
    name: "Murray Island Airport",
    city: "Murray Island",
  },
  {
    iata: "MVK",
    name: "Mulka Airport",
    city: "Mulka",
  },
  {
    iata: "MXU",
    name: "Mullewa Airport",
    city: "",
  },
  {
    iata: "MXD",
    name: "Marion Downs Airport",
    city: "",
  },
  {
    iata: "MBH",
    name: "Maryborough Airport",
    city: "",
  },
  {
    iata: "RTY",
    name: "Merty Merty Airport",
    city: "",
  },
  {
    iata: "NMR",
    name: "Nappa Merrie Airport",
    city: "",
  },
  {
    iata: "NRA",
    name: "Narrandera Airport",
    city: "Narrandera",
  },
  {
    iata: "NAA",
    name: "Narrabri Airport",
    city: "Narrabri",
  },
  {
    iata: "RPM",
    name: "Ngukurr Airport",
    city: "",
  },
  {
    iata: "NBH",
    name: "Nambucca Heads Airport",
    city: "Nambucca Heads",
  },
  {
    iata: "NLS",
    name: "Nicholson Airport",
    city: "",
  },
  {
    iata: "NAC",
    name: "Naracoorte Airport",
    city: "",
  },
  {
    iata: "QRM",
    name: "Narromine Airport",
    city: "",
  },
  {
    iata: "RVT",
    name: "Ravensthorpe Airport",
    city: "",
  },
  {
    iata: "NSV",
    name: "Noosa Airport",
    city: "",
  },
  {
    iata: "NSM",
    name: "Norseman Airport",
    city: "",
  },
  {
    iata: "NTN",
    name: "Normanton Airport",
    city: "",
  },
  {
    iata: "NUR",
    name: "Nullabor Motel Airport",
    city: "",
  },
  {
    iata: "NLL",
    name: "Nullagine Airport",
    city: "",
  },
  {
    iata: "NUB",
    name: "Numbulwar Airport",
    city: "",
  },
  {
    iata: "ZNE",
    name: "Newman Airport",
    city: "Newman",
  },
  {
    iata: "NYN",
    name: "Nyngan Airport",
    city: "",
  },
  {
    iata: "OPI",
    name: "Oenpelli Airport",
    city: "",
  },
  {
    iata: "YOI",
    name: "Opinaca Aerodrome",
  },
  {
    iata: "XCO",
    name: "Colac Airport",
    city: "",
  },
  {
    iata: "OLP",
    name: "Olympic Dam Airport",
    city: "Olympic Dam",
  },
  {
    iata: "ODD",
    name: "Oodnadatta Airport",
    city: "",
  },
  {
    iata: "MOO",
    name: "Moomba Airport",
    city: "",
  },
  {
    iata: "RBS",
    name: "Orbost Airport",
    city: "",
  },
  {
    iata: "OAG",
    name: "Orange Airport",
    city: "Orange",
  },
  {
    iata: "ODR",
    name: "Ord River Airport",
    city: "Ord River",
  },
  {
    iata: "OSO",
    name: "Osborne Mine Airport",
    city: "",
  },
  {
    iata: "OYN",
    name: "Ouyen Airport",
    city: "",
  },
  {
    iata: "ADL",
    name: "Adelaide International Airport",
    city: "Adelaide",
  },
  {
    iata: "PUG",
    name: "Port Augusta Airport",
    city: "",
  },
  {
    iata: "PMK",
    name: "Palm Island Airport",
    city: "",
  },
  {
    iata: "PBO",
    name: "Paraburdoo Airport",
    city: "Paraburdoo",
  },
  {
    iata: "CCK",
    name: "Cocos (Keeling) Islands Airport",
    city: "Cocos (Keeling) Islands",
  },
  {
    iata: "PDE",
    name: "Pandie Pandie Airport",
    city: "",
  },
  {
    iata: "DRW",
    name: "Darwin International Airport",
    city: "Darwin",
  },
  {
    iata: "PRD",
    name: "Pardoo Airport",
    city: "Pardoo",
  },
  {
    iata: "BEO",
    name: "Aeropelican Airport",
    city: "",
  },
  {
    iata: "GOV",
    name: "Gove Airport",
    city: "Nhulunbuy",
  },
  {
    iata: "PPI",
    name: "Port Pirie Airport",
    city: "",
  },
  {
    iata: "JAD",
    name: "Perth Jandakot Airport",
    city: "Perth",
  },
  {
    iata: "KTA",
    name: "Karratha Airport",
    city: "Karratha",
  },
  {
    iata: "KGI",
    name: "Kalgoorlie Boulder Airport",
    city: "Kalgoorlie",
  },
  {
    iata: "PKE",
    name: "Parkes Airport",
    city: "Parkes",
  },
  {
    iata: "PKT",
    name: "Port Keats Airport",
    city: "",
  },
  {
    iata: "KNX",
    name: "Kununurra Airport",
    city: "Kununurra",
  },
  {
    iata: "PLO",
    name: "Port Lincoln Airport",
    city: "Port Lincoln",
  },
  {
    iata: "LEA",
    name: "Learmonth Airport",
    city: "Exmouth",
  },
  {
    iata: "EDR",
    name: "Pormpuraaw Airport",
    city: "",
  },
  {
    iata: "PQQ",
    name: "Port Macquarie Airport",
    city: "Port Macquarie",
  },
  {
    iata: "PTJ",
    name: "Portland Airport",
    city: "",
  },
  {
    iata: "PHE",
    name: "Port Hedland International Airport",
    city: "Port Hedland",
  },
  {
    iata: "PER",
    name: "Perth International Airport",
    city: "Perth",
  },
  {
    iata: "PEA",
    name: "Penneshaw Airport",
    city: "Ironstone",
  },
  {
    iata: "KTR",
    name: "Tindal Airport",
    city: "",
  },
  {
    iata: "UMR",
    name: "Woomera Airfield",
    city: "Woomera",
  },
  {
    iata: "XCH",
    name: "Christmas Island Airport",
    city: "Christmas Island",
  },
  {
    iata: "UIR",
    name: "Quirindi Airport",
    city: "",
  },
  {
    iata: "ULP",
    name: "Quilpie Airport",
    city: "",
  },
  {
    iata: "UEE",
    name: "Queenstown Airport",
    city: "",
  },
  {
    iata: "RMK",
    name: "Renmark Airport",
    city: "",
  },
  {
    iata: "RCM",
    name: "Richmond Airport",
    city: "",
  },
  {
    iata: "RAM",
    name: "Ramingining Airport",
    city: "",
  },
  {
    iata: "ROH",
    name: "Robinhood Airport",
    city: "",
  },
  {
    iata: "RBU",
    name: "Roebourne Airport",
    city: "Roebourne",
  },
  {
    iata: "RBC",
    name: "Robinvale Airport",
    city: "",
  },
  {
    iata: "RMA",
    name: "Roma Airport",
    city: "Roma",
  },
  {
    iata: "RSB",
    name: "Roseberth Airport",
    city: "",
  },
  {
    iata: "RTS",
    name: "Rottnest Island Airport",
    city: "",
  },
  {
    iata: "RTP",
    name: "Rutland Plains Airport",
    city: "",
  },
  {
    iata: "RHL",
    name: "Roy Hill Station Airport",
    city: "",
  },
  {
    iata: "NDS",
    name: "Sandstone Airport",
    city: "Sandstone",
  },
  {
    iata: "BWU",
    name: "Sydney Bankstown Airport",
    city: "Sydney",
  },
  {
    iata: "CBR",
    name: "Canberra International Airport",
    city: "Canberra",
  },
  {
    iata: "CFS",
    name: "Coffs Harbour Airport",
    city: "Coffs Harbour",
  },
  {
    iata: "CDU",
    name: "Camden Airport",
    city: "",
  },
  {
    iata: "NSO",
    name: "Scone Airport",
    city: "",
  },
  {
    iata: "SQC",
    name: "Southern Cross Airport",
    city: "",
  },
  {
    iata: "DBO",
    name: "Dubbo City Regional Airport",
    city: "Dubbo",
  },
  {
    iata: "SGO",
    name: "St George Airport",
    city: "",
  },
  {
    iata: "SIX",
    name: "Singleton Airport",
    city: "Singleton",
  },
  {
    iata: "ZGL",
    name: "South Galway Airport",
    city: "",
  },
  {
    iata: "SGP",
    name: "Shay Gap Airport",
    city: "Shay Gap",
  },
  {
    iata: "DNM",
    name: "Shark Bay Airport",
  },
  {
    iata: "JHQ",
    name: "Shute Harbour Airport",
    city: "",
  },
  {
    iata: "SHT",
    name: "Shepparton Airport",
    city: "",
  },
  {
    iata: "SBR",
    name: "Saibai Island Airport",
    city: "Saibai Island",
  },
  {
    iata: "SIO",
    name: "Smithton Airport",
    city: "",
  },
  {
    iata: "SHU",
    name: "Smith Point Airport",
    city: "",
  },
  {
    iata: "STH",
    name: "Strathmore Airport",
    city: "",
  },
  {
    iata: "SNB",
    name: "Snake Bay Airport",
    city: "",
  },
  {
    iata: "NLK",
    name: "Norfolk Island International Airport",
    city: "Burnt Pine",
  },
  {
    iata: "NOA",
    name: "Nowra Airport",
    city: "",
  },
  {
    iata: "SNH",
    name: "Stanthorpe Airport",
    city: "",
  },
  {
    iata: "SCG",
    name: "Spring Creek Airport",
    city: "",
  },
  {
    iata: "SHQ",
    name: "Southport Airport",
    city: "",
  },
  {
    iata: "KSV",
    name: "Springvale Airport",
    city: "",
  },
  {
    iata: "SRN",
    name: "Strahan Airport",
    city: "",
  },
  {
    iata: "SYD",
    name: "Sydney Kingsford Smith International Airport",
    city: "Sydney",
  },
  {
    iata: "HLS",
    name: "St Helens Airport",
    city: "",
  },
  {
    iata: "TMW",
    name: "Tamworth Airport",
    city: "Tamworth",
  },
  {
    iata: "WGA",
    name: "Wagga Wagga City Airport",
    city: "Wagga Wagga",
  },
  {
    iata: "SWH",
    name: "Swan Hill Airport",
    city: "",
  },
  {
    iata: "SWC",
    name: "Stawell Airport",
    city: "",
  },
  {
    iata: "XTR",
    name: "Tara Airport",
    city: "",
  },
  {
    iata: "TBL",
    name: "Tableland Homestead Airport",
    city: "",
  },
  {
    iata: "XTO",
    name: "Taroom Airport",
    city: "",
  },
  {
    iata: "TAQ",
    name: "Tarcoola Airport",
    city: "Tarcoola",
  },
  {
    iata: "TBK",
    name: "Timber Creek Airport",
    city: "",
  },
  {
    iata: "TDR",
    name: "Theodore Airport",
    city: "",
  },
  {
    iata: "TEF",
    name: "Telfer Airport",
    city: "",
  },
  {
    iata: "TEM",
    name: "Temora Airport",
    city: "",
  },
  {
    iata: "TAN",
    name: "Tangalooma Airport",
    city: "",
  },
  {
    iata: "XTG",
    name: "Thargomindah Airport",
    city: "",
  },
  {
    iata: "TYG",
    name: "Thylungra Airport",
    city: "",
  },
  {
    iata: "TYB",
    name: "Tibooburra Airport",
    city: "",
  },
  {
    iata: "TKY",
    name: "Turkey Creek Airport",
    city: "Turkey Creek",
  },
  {
    iata: "TUM",
    name: "Tumut Airport",
    city: "",
  },
  {
    iata: "TYP",
    name: "Tobermorey Airport",
    city: "Tobermorey",
  },
  {
    iata: "THG",
    name: "Thangool Airport",
    city: "Biloela",
  },
  {
    iata: "TCA",
    name: "Tennant Creek Airport",
    city: "Tennant Creek",
  },
  {
    iata: "TCW",
    name: "Tocumwal Airport",
    city: "",
  },
  {
    iata: "TRO",
    name: "Taree Airport",
    city: "Taree",
  },
  {
    iata: "YTU",
    name: "Tasu Water Aerodrome",
  },
  {
    iata: "TWB",
    name: "Toowoomba Airport",
    city: "",
  },
  {
    iata: "UDA",
    name: "Undara Airport",
    city: "",
  },
  {
    iata: "CZY",
    name: "Cluny Airport",
    city: "",
  },
  {
    iata: "USL",
    name: "Useless Loop Airport",
    city: "",
  },
  {
    iata: "VCD",
    name: "Victoria River Downs Airport",
    city: "",
  },
  {
    iata: "VNR",
    name: "Vanrook Station Airport",
    city: "",
  },
  {
    iata: "WLA",
    name: "Wallal Airport",
    city: "Wallal",
  },
  {
    iata: "WAV",
    name: "Wave Hill Airport",
    city: "",
  },
  {
    iata: "WMB",
    name: "Warrnambool Airport",
    city: "",
  },
  {
    iata: "SYU",
    name: "Warraber Island Airport",
    city: "Sue Islet",
  },
  {
    iata: "WIO",
    name: "Wilcannia Airport",
    city: "",
  },
  {
    iata: "WLC",
    name: "Walcha Airport",
    city: "",
  },
  {
    iata: "WAZ",
    name: "Warwick Airport",
    city: "",
  },
  {
    iata: "WND",
    name: "Windarra Airport",
    city: "",
  },
  {
    iata: "WNR",
    name: "Windorah Airport",
    city: "",
  },
  {
    iata: "WGT",
    name: "Wangaratta Airport",
    city: "",
  },
  {
    iata: "WYA",
    name: "Whyalla Airport",
    city: "Whyalla",
  },
  {
    iata: "WIT",
    name: "Wittenoom Airport",
    city: "",
  },
  {
    iata: "WKB",
    name: "Warracknabeal Airport",
    city: "",
  },
  {
    iata: "WGE",
    name: "Walgett Airport",
    city: "",
  },
  {
    iata: "NTL",
    name: "Newcastle Airport",
    city: "Williamtown",
  },
  {
    iata: "WUN",
    name: "Wiluna Airport",
    city: "",
  },
  {
    iata: "WPK",
    name: "Wrotham Park Airport",
    city: "",
  },
  {
    iata: "WDI",
    name: "Wondai Airport",
    city: "",
  },
  {
    iata: "WOL",
    name: "Wollongong Airport",
    city: "",
  },
  {
    iata: "QRR",
    name: "Warren Airport",
    city: "",
  },
  {
    iata: "WLO",
    name: "Waterloo Airport",
    city: "",
  },
  {
    iata: "WIN",
    name: "Winton Airport",
    city: "",
  },
  {
    iata: "WUD",
    name: "Wudinna Airport",
    city: "",
  },
  {
    iata: "WEW",
    name: "Wee Waa Airport",
    city: "",
  },
  {
    iata: "WRW",
    name: "Warrawagine Airport",
    city: "",
  },
  {
    iata: "WWI",
    name: "Woodie Woodie Airport",
    city: "Woodie Woodie",
  },
  {
    iata: "WYN",
    name: "Wyndham Airport",
    city: "",
  },
  {
    iata: "BWT",
    name: "Wynyard Airport",
    city: "Burnie",
  },
  {
    iata: "YLG",
    name: "Yalgoo Airport",
    city: "Yalgoo",
  },
  {
    iata: "OKR",
    name: "Yorke Island Airport",
    city: "Yorke Island",
  },
  {
    iata: "KYF",
    name: "Yeelirrie Airport",
    city: "",
  },
  {
    iata: "XMY",
    name: "Yam Island Airport",
    city: "Yam Island",
  },
  {
    iata: "YUE",
    name: "Yuendumu Airport",
    city: "",
  },
  {
    iata: "NGA",
    name: "Young Airport",
    city: "",
  },
  {
    iata: "ORR",
    name: "Yorketown Airport",
    city: "",
  },
  {
    iata: "KYI",
    name: "Yalata Mission Airport",
    city: "Yalata Mission",
  },
  {
    iata: "HPR",
    name: "Pretoria Central Heliport",
  },
  {
    iata: "ULX",
    name: "Ulusaba Airport",
    city: "Ulusaba",
  },
  {
    iata: "TDT",
    name: "Tanda Tula Airport",
    city: "Welverdiend",
  },
  {
    iata: "HZV",
    name: "Hazyview Airport",
  },
  {
    iata: "KHO",
    name: "Khoka Moya Airport",
  },
  {
    iata: "MBM",
    name: "Mkambati Airport",
  },
  {
    iata: "INY",
    name: "Inyati Airport",
  },
  {
    iata: "TSD",
    name: "Tshipise Airport",
  },
  {
    iata: "KIG",
    name: "Koingnaas Airport",
  },
  {
    iata: "PEK",
    name: "Beijing Capital International Airport",
    city: "Beijing",
  },
  {
    iata: "CIF",
    name: "Chifeng Airport",
    city: "Chifeng",
  },
  {
    iata: "CIH",
    name: "Changzhi Airport",
    city: "Changzhi",
  },
  {
    iata: "DSN",
    name: "Ordos Ejin Horo Airport",
    city: "Ordos",
  },
  {
    iata: "DAT",
    name: "Datong Airport",
    city: "Datong",
  },
  {
    iata: "ERL",
    name: "Erenhot Saiwusu International Airport",
    city: "Erenhot",
  },
  {
    iata: "HDG",
    name: "Handan Airport",
    city: "Handan",
  },
  {
    iata: "HET",
    name: "Baita International Airport",
    city: "Hohhot",
  },
  {
    iata: "ZBK",
    name: null,
  },
  {
    iata: "HLD",
    name: "Dongshan Airport",
    city: "Hailar",
  },
  {
    iata: "NAY",
    name: "Beijing Nanyuan Airport",
    city: "Beijing",
  },
  {
    iata: "BAV",
    name: "Baotou Airport",
    city: "Baotou",
  },
  {
    iata: "SHP",
    name: "Shanhaiguan Airport",
    city: "Qinhuangdao",
  },
  {
    iata: "SJW",
    name: "Shijiazhuang Daguocun International Airport",
    city: "Shijiazhuang",
  },
  {
    iata: "TSN",
    name: "Tianjin Binhai International Airport",
    city: "Tianjin",
  },
  {
    iata: "TGO",
    name: "Tongliao Airport",
    city: "Tongliao",
  },
  {
    iata: "HLH",
    name: "Ulanhot Airport",
    city: "Ulanhot",
  },
  {
    iata: "XIL",
    name: "Xilinhot Airport",
    city: "Xilinhot",
  },
  {
    iata: "YCU",
    name: "Yuncheng Guangong Airport",
    city: "Yuncheng",
  },
  {
    iata: "TYN",
    name: "Taiyuan Wusu Airport",
    city: "Taiyuan",
  },
  {
    iata: "BHY",
    name: "Beihai Airport",
    city: "Beihai",
  },
  {
    iata: "CGD",
    name: "Changde Airport",
    city: "Changde",
  },
  {
    iata: "HJJ",
    name: "Zhijiang Airport",
    city: "Huaihua",
  },
  {
    iata: "DYG",
    name: "Dayong Airport",
    city: "Dayong",
  },
  {
    iata: "CAN",
    name: "Guangzhou Baiyun International Airport",
    city: "Guangzhou",
  },
  {
    iata: "CSX",
    name: "Changsha Huanghua Airport",
    city: "Changsha",
  },
  {
    iata: "HNY",
    name: "Hengyang Airport",
    city: "Hengyang",
  },
  {
    iata: "KWL",
    name: "Guilin Liangjiang International Airport",
    city: "Guilin City",
  },
  {
    iata: "MXZ",
    name: "Meixian Airport",
    city: "Meixian",
  },
  {
    iata: "NNG",
    name: "Nanning Wuxu Airport",
    city: "Nanning",
  },
  {
    iata: "SWA",
    name: "Shantou Waisha Airport",
    city: "Shantou",
  },
  {
    iata: "ZUH",
    name: "Zhuhai Airport",
    city: "Zhuhai",
  },
  {
    iata: "SZX",
    name: "Shenzhen Bao'an International Airport",
    city: "Shenzhen",
  },
  {
    iata: "WUZ",
    name: "Changzhoudao Airport",
    city: "Wuzhou",
  },
  {
    iata: "XIN",
    name: "Xingning Airport",
    city: "Xingning",
  },
  {
    iata: "LZH",
    name: "Bailian Airport",
    city: "Liuzhou",
  },
  {
    iata: "ZHA",
    name: "Zhanjiang Airport",
    city: "Zhanjiang",
  },
  {
    iata: "AYN",
    name: "Anyang Airport",
    city: "Anyang",
  },
  {
    iata: "CGO",
    name: "Xinzheng Airport",
    city: "Zhengzhou",
  },
  {
    iata: "ENH",
    name: "Enshi Airport",
    city: "Enshi",
  },
  {
    iata: "LHK",
    name: "Guangzhou MR Air Base",
    city: "Guanghua",
  },
  {
    iata: "WUH",
    name: "Wuhan Tianhe International Airport",
    city: "Wuhan",
  },
  {
    iata: "LYA",
    name: "Luoyang Airport",
    city: "Luoyang",
  },
  {
    iata: "NNY",
    name: "Nanyang Airport",
    city: "Nanyang",
  },
  {
    iata: "SHS",
    name: "Shashi Airport",
    city: "Shashi",
  },
  {
    iata: "XFN",
    name: "Xiangfan Airport",
    city: "Xiangfan",
  },
  {
    iata: "YIH",
    name: "Yichang Airport",
    city: "Yichang",
  },
  {
    iata: "ZIZ",
    name: "Zamzama Heliport",
  },
  {
    iata: "HAK",
    name: "Haikou Meilan International Airport",
    city: "Haikou",
  },
  {
    iata: "SYX",
    name: "Sanya Phoenix International Airport",
    city: "Sanya",
  },
  {
    iata: "FNJ",
    name: "Sunan International Airport",
    city: "Pyongyang",
  },
  {
    iata: "AKA",
    name: "Ankang Airport",
    city: "Ankang",
  },
  {
    iata: "LHW",
    name: "Lanzhou City Airport",
    city: "Lanzhou",
  },
  {
    iata: "DNH",
    name: "Dunhuang Airport",
    city: "Dunhuang",
  },
  {
    iata: "GOQ",
    name: "Golmud Airport",
    city: "Golmud",
  },
  {
    iata: "GYU",
    name: "Guyuan Liupanshan Airport",
    city: "Guyuan",
  },
  {
    iata: "HZG",
    name: "Hanzhong Airport",
    city: "Hanzhong",
  },
  {
    iata: "INC",
    name: "Yinchuan Airport",
    city: "Yinchuan",
  },
  {
    iata: "JNG",
    name: "Jining Qufu Airport",
    city: "Jining",
  },
  {
    iata: "JGN",
    name: "Jiayuguan Airport",
    city: "Jiayuguan",
  },
  {
    iata: "ZGC",
    name: "Lanzhou Zhongchuan Airport",
  },
  {
    iata: "IQN",
    name: "Qingyang Airport",
    city: "Qingyang",
  },
  {
    iata: "SIA",
    name: "Xiguan Airport",
    city: "Xi'an",
  },
  {
    iata: "XNN",
    name: "Xining Caojiabu Airport",
    city: "Xining",
  },
  {
    iata: "XIY",
    name: "Xi'an Xianyang International Airport",
    city: "Xianyang",
  },
  {
    iata: "ENY",
    name: "Yan'an Airport",
    city: "Yan'an",
  },
  {
    iata: "UYN",
    name: "Yulin Airport",
    city: "Yulin",
  },
  {
    iata: "CGJ",
    name: "Chingola Airport",
  },
  {
    iata: "AVK",
    name: "Arvaikheer Airport",
    city: "Arvaikheer",
  },
  {
    iata: "LTI",
    name: "Altai Airport",
    city: "Altai",
  },
  {
    iata: "BYN",
    name: "Bayankhongor Airport",
    city: "Bayankhongor",
  },
  {
    iata: "UGA",
    name: "Bulgan Airport",
    city: "Bulgan",
  },
  {
    iata: "UGT",
    name: "Bulagtai Resort Airport",
    city: "Umnugobitour",
  },
  {
    iata: "HBU",
    name: "Bulgan Sum Airport",
    city: "",
  },
  {
    iata: "UUN",
    name: "Baruun Urt Airport",
    city: "",
  },
  {
    iata: "COQ",
    name: "Choibalsan Airport",
    city: "",
  },
  {
    iata: "DLZ",
    name: "Dalanzadgad Airport",
    city: "Dalanzadgad",
  },
  {
    iata: "HVD",
    name: "Khovd Airport",
    city: "Khovd",
  },
  {
    iata: "MXV",
    name: null,
    city: "Moron",
  },
  {
    iata: "ULN",
    name: "Chinggis Khaan International Airport",
    city: "Ulan Bator",
  },
  {
    iata: "ULG",
    name: "Ulgii Mongolei Airport",
    city: "",
  },
  {
    iata: "DLU",
    name: "Dali Airport",
    city: "Xiaguan",
  },
  {
    iata: "DIG",
    name: "Diqing Airport",
    city: "Shangri-La",
  },
  {
    iata: "JHG",
    name: "Xishuangbanna Gasa Airport",
    city: "Jinghong",
  },
  {
    iata: "LJG",
    name: "Lijiang Airport",
    city: "Lijiang",
  },
  {
    iata: "LUM",
    name: "Mangshi Airport",
    city: "Luxi",
  },
  {
    iata: "KMG",
    name: "Kunming Wujiaba International Airport",
    city: "Kunming",
  },
  {
    iata: "SYM",
    name: "Simao Airport",
    city: "Simao",
  },
  {
    iata: "ZAT",
    name: "Zhaotong Airport",
    city: "Zhaotong",
  },
  {
    iata: "XMN",
    name: "Xiamen Gaoqi International Airport",
    city: "Xiamen",
  },
  {
    iata: "AQG",
    name: "Anqing Airport",
    city: "Anqing",
  },
  {
    iata: "CZX",
    name: "Changzhou Airport",
    city: "Changzhou",
  },
  {
    iata: "KHN",
    name: "Nanchang Changbei International Airport",
    city: "Nanchang",
  },
  {
    iata: "FOC",
    name: "Fuzhou Changle International Airport",
    city: "Fuzhou",
  },
  {
    iata: "KOW",
    name: "Ganzhou Airport",
    city: "Ganzhou",
  },
  {
    iata: "HGH",
    name: "Hangzhou Xiaoshan International Airport",
    city: "Hangzhou",
  },
  {
    iata: "JDZ",
    name: "Jingdezhen Airport",
    city: "Jingdezhen",
  },
  {
    iata: "JIU",
    name: "Jiujiang Lushan Airport",
    city: "Jiujiang",
  },
  {
    iata: "TNA",
    name: "Yaoqiang Airport",
    city: "Jinan",
  },
  {
    iata: "JUZ",
    name: "Quzhou Airport",
    city: "Quzhou",
  },
  {
    iata: "LCX",
    name: "Longyan Guanzhishan Airport",
    city: "Longyan",
  },
  {
    iata: "LYG",
    name: "Lianyungang Airport",
    city: "Lianyungang",
  },
  {
    iata: "HYN",
    name: "Huangyan Luqiao Airport",
    city: "Huangyan",
  },
  {
    iata: "LYI",
    name: "Shubuling Airport",
    city: "Linyi",
  },
  {
    iata: "NGB",
    name: "Ningbo Lishe International Airport",
    city: "Ningbo",
  },
  {
    iata: "NKG",
    name: "Nanjing Lukou Airport",
    city: "Nanjing",
  },
  {
    iata: "HFE",
    name: "Hefei Luogang International Airport",
    city: "Hefei",
  },
  {
    iata: "PVG",
    name: "Shanghai Pudong International Airport",
    city: "Shanghai",
  },
  {
    iata: "TAO",
    name: "Liuting Airport",
    city: "Qingdao",
  },
  {
    iata: "JJN",
    name: "Quanzhou Airport",
    city: "Quanzhou",
  },
  {
    iata: "RUG",
    name: "Rugao Air Base",
    city: "Rugao",
  },
  {
    iata: "SHA",
    name: "Shanghai Hongqiao International Airport",
    city: "Shanghai",
  },
  {
    iata: "SZV",
    name: "Guangfu Airport",
    city: "Suzhou",
  },
  {
    iata: "TXN",
    name: "Tunxi International Airport",
    city: "Huangshan",
  },
  {
    iata: "WEF",
    name: "Weifang Airport",
    city: "Weifang",
  },
  {
    iata: "WEH",
    name: "Weihai Airport",
    city: "Weihai",
  },
  {
    iata: "WHU",
    name: "Wuhu Air Base",
    city: "Wuhu",
  },
  {
    iata: "WUX",
    name: "Sunan Shuofang International Airport",
    city: "Wuxi",
  },
  {
    iata: "WUS",
    name: "Nanping Wuyishan Airport",
    city: "Wuyishan",
  },
  {
    iata: "WNZ",
    name: "Wenzhou Yongqiang Airport",
    city: "Wenzhou",
  },
  {
    iata: "XUZ",
    name: "Xuzhou Guanyin Airport",
    city: "Xuzhou",
  },
  {
    iata: "YNZ",
    name: "Yancheng Airport",
    city: "Yancheng",
  },
  {
    iata: "YNT",
    name: "Yantai Laishan Airport",
    city: "Yantai",
  },
  {
    iata: "YIW",
    name: "Yiwu Airport",
    city: "Yiwu",
  },
  {
    iata: "HSN",
    name: "Zhoushan Airport",
    city: "Zhoushan",
  },
  {
    iata: "NGQ",
    name: "Ngari Gunsa Airport",
    city: "Shiquanhe",
  },
  {
    iata: "AVA",
    name: "Anshun Huangguoshu Airport",
    city: "Anshun",
  },
  {
    iata: "BPX",
    name: "Qamdo Bangda Airport",
    city: "Bangda",
  },
  {
    iata: "CKG",
    name: "Chongqing Jiangbei International Airport",
    city: "Chongqing",
  },
  {
    iata: "DAX",
    name: "Dachuan Airport",
    city: "Dazhou",
  },
  {
    iata: "GYS",
    name: "Guangyuan Airport",
    city: "Guangyuan",
  },
  {
    iata: "KWE",
    name: "Longdongbao Airport",
    city: "Guiyang",
  },
  {
    iata: "JZH",
    name: "Jiuzhai Huanglong Airport",
    city: "Jiuzhaigou",
  },
  {
    iata: "LIA",
    name: "Liangping Airport",
    city: "Liangping",
  },
  {
    iata: "LXA",
    name: "Lhasa Gonggar Airport",
    city: "Lhasa",
  },
  {
    iata: "LZO",
    name: "Luzhou Airport",
    city: "Luzhou",
  },
  {
    iata: "MIG",
    name: "Mianyang Airport",
    city: "Mianyang",
  },
  {
    iata: "NAO",
    name: "Nanchong Airport",
    city: "Nanchong",
  },
  {
    iata: "LZY",
    name: "Nyingchi Airport",
    city: "Nyingchi",
  },
  {
    iata: "TCZ",
    name: "Tengchong Tuofeng Airport",
    city: "Tengchong",
  },
  {
    iata: "CTU",
    name: "Chengdu Shuangliu International Airport",
    city: "Chengdu",
  },
  {
    iata: "WXN",
    name: "Wanxian Airport",
    city: "Wanxian",
  },
  {
    iata: "XIC",
    name: "Xichang Qingshan Airport",
    city: "Xichang",
  },
  {
    iata: "YBP",
    name: "Yibin Caiba Airport",
    city: "Yibin",
  },
  {
    iata: "ACX",
    name: "Xingyi Airport",
    city: "Xingyi",
  },
  {
    iata: "AKU",
    name: "Aksu Airport",
    city: "Aksu",
  },
  {
    iata: "BPL",
    name: "Alashankou Bole (Bortala) airport",
    city: "Bole",
  },
  {
    iata: "IQM",
    name: "Qiemo Airport",
    city: "Qiemo",
  },
  {
    iata: "HMI",
    name: "Hami Airport",
    city: "Hami",
  },
  {
    iata: "KCA",
    name: "Kuqa Airport",
    city: "Kuqa",
  },
  {
    iata: "KRL",
    name: "Korla Airport",
    city: "Korla",
  },
  {
    iata: "KRY",
    name: "Karamay Airport",
    city: "Karamay",
  },
  {
    iata: "KHG",
    name: "Kashgar Airport",
    city: "Kashgar",
  },
  {
    iata: "SXJ",
    name: "Shanshan Airport",
    city: "Shanshan",
  },
  {
    iata: "TCG",
    name: "Tacheng Airport",
    city: "Tacheng",
  },
  {
    iata: "HTN",
    name: "Hotan Airport",
    city: "Hotan",
  },
  {
    iata: "URC",
    name: null,
    city: "Urumqi",
  },
  {
    iata: "YIN",
    name: "Yining Airport",
    city: "Yining",
  },
  {
    iata: "AOG",
    name: "Anshan Air Base",
    city: "Anshan",
  },
  {
    iata: "CGQ",
    name: "Longjia Airport",
    city: "Changchun",
  },
  {
    iata: "CNI",
    name: "Changhai Airport",
    city: "Changhai",
  },
  {
    iata: "CHG",
    name: "Chaoyang Airport",
    city: "Chaoyang",
  },
  {
    iata: "HRB",
    name: "Taiping Airport",
    city: "Harbin",
  },
  {
    iata: "HEK",
    name: "Heihe Airport",
    city: "Heihe",
  },
  {
    iata: "JIL",
    name: "Jilin Airport",
    city: "Jilin",
  },
  {
    iata: "JMU",
    name: "Jiamusi Airport",
    city: "Jiamusi",
  },
  {
    iata: "JNZ",
    name: "Jinzhou Airport",
    city: "Jinzhou",
  },
  {
    iata: "YUS",
    name: "Yushu Batang Airport",
    city: "Yushu",
  },
  {
    iata: "MDG",
    name: "Mudanjiang Hailang International Airport",
    city: "Mudanjiang",
  },
  {
    iata: "OHE",
    name: "Gu-Lian Airport",
    city: "Mohe",
  },
  {
    iata: "NDG",
    name: "Qiqihar Sanjiazi Airport",
    city: "Qiqihar",
  },
  {
    iata: "DLC",
    name: "Zhoushuizi Airport",
    city: "Dalian",
  },
  {
    iata: "SHE",
    name: "Taoxian Airport",
    city: "Shenyang",
  },
  {
    iata: "YNJ",
    name: "Yanji Chaoyangchuan Airport",
    city: "Yanji",
  },
];
