// Michigan addresses dataset with pre-geocoded coordinates
const michiganAddresses = [
  {id: 0, street: "206 Edgewater Dr", city: "Algonac", full_address: "206 Edgewater Dr, Algonac, MI", lat: 42.6187, lon: -82.5311},
  {id: 1, street: "9834 Dixie Hwy", city: "Anchorville", full_address: "9834 Dixie Hwy, Anchorville, MI", lat: 42.6425, lon: -82.6189},
  {id: 2, street: "80720 Capac Road", city: "Armada", full_address: "80720 Capac Road, Armada, MI", lat: 42.8442, lon: -82.8847},
  {id: 3, street: "12501 State Street", city: "Atlanta", full_address: "12501 State Street, Atlanta, MI", lat: 45.0042, lon: -84.1447},
  {id: 4, street: "3300 Auburn Road", city: "Auburn Hills", full_address: "3300 Auburn Road, Auburn Hills, MI", lat: 42.6875, lon: -83.2341},
  {id: 5, street: "3400 Auburn Road Suite 235", city: "Auburn Hills", full_address: "3400 Auburn Road Suite 235, Auburn Hills, MI", lat: 42.6878, lon: -83.2355},
  {id: 6, street: "3300 Auburn Rd Suite 210", city: "Auburn Hills", full_address: "3300 Auburn Rd Suite 210, Auburn Hills, MI", lat: 42.6876, lon: -83.2342},
  {id: 7, street: "3313 Parkways Blvd", city: "Auburn Hills", full_address: "3313 Parkways Blvd, Auburn Hills, MI", lat: 42.6654, lon: -83.2398},
  {id: 8, street: "2985 12 Mile Rd", city: "Berkley", full_address: "2985 12 Mile Rd, Berkley, MI", lat: 42.5034, lon: -83.1856},
  {id: 9, street: "3311 W 12 Mile Rd", city: "Berkley", full_address: "3311 W 12 Mile Rd, Berkley, MI", lat: 42.5038, lon: -83.1912},
  {id: 10, street: "3500 W Eleven Mile Rd Ste-A", city: "Berkley", full_address: "3500 W Eleven Mile Rd Ste-A, Berkley, MI", lat: 42.4832, lon: -83.1945},
  {id: 11, street: "2626 Wakefield Rd", city: "Berkley", full_address: "2626 Wakefield Rd, Berkley, MI", lat: 42.4978, lon: -83.1834},
  {id: 12, street: "3814 Prairie", city: "Berkley", full_address: "3814 Prairie, Berkley, MI", lat: 42.4845, lon: -83.1812},
  {id: 13, street: "3311 West Twelve Mile Rd", city: "Berkley", full_address: "3311 West Twelve Mile Rd, Berkley, MI", lat: 42.5037, lon: -83.1911},
  {id: 14, street: "18129 Riverside Dr", city: "Beverly Hills", full_address: "18129 Riverside Dr, Beverly Hills, MI", lat: 42.5156, lon: -83.2234},
  {id: 15, street: "31455 Southfield Rd", city: "Beverly Hills", full_address: "31455 Southfield Rd, Beverly Hills, MI", lat: 42.5234, lon: -83.2456},
  {id: 16, street: "31333 Southfield Rd", city: "Beverly Hills", full_address: "31333 Southfield Rd, Beverly Hills, MI", lat: 42.5221, lon: -83.2453},
  {id: 17, street: "32355 Westlady", city: "Beverly Hills", full_address: "32355 Westlady, Beverly Hills, MI", lat: 42.5312, lon: -83.2401},
  {id: 18, street: "31333 Southfield Road Suite 250", city: "Beverly Hills", full_address: "31333 Southfield Road Suite 250, Beverly Hills, MI", lat: 42.5222, lon: -83.2454},
  {id: 19, street: "16973 Weatherby", city: "Beverly Hills", full_address: "16973 Weatherby, Beverly Hills, MI", lat: 42.5087, lon: -83.2167},
  {id: 20, street: "30400 Telegraph Road Suite 120", city: "Bingham Farms", full_address: "30400 Telegraph Road Suite 120, Bingham Farms, MI", lat: 42.5134, lon: -83.2678},
  {id: 21, street: "363 E. Maple Road", city: "Birmingham", full_address: "363 E. Maple Road, Birmingham, MI", lat: 42.5456, lon: -83.2112},
  {id: 22, street: "653 Wallace St", city: "Birmingham", full_address: "653 Wallace St, Birmingham, MI", lat: 42.5423, lon: -83.2087},
  {id: 23, street: "259 E Frank St", city: "Birmingham", full_address: "259 E Frank St, Birmingham, MI", lat: 42.5412, lon: -83.2095},
  {id: 24, street: "369 N Old Woodward Ave", city: "Birmingham", full_address: "369 N Old Woodward Ave, Birmingham, MI", lat: 42.5478, lon: -83.2134},
  {id: 25, street: "187 S. Old Woodward", city: "Birmingham", full_address: "187 S. Old Woodward, Birmingham, MI", lat: 42.5434, lon: -83.2138},
  {id: 26, street: "34222 Woodward Ave", city: "Birmingham", full_address: "34222 Woodward Ave, Birmingham, MI", lat: 42.5512, lon: -83.2156},
  {id: 27, street: "975 E Maple Rd suite 210", city: "Birmingham", full_address: "975 E Maple Rd suite 210, Birmingham, MI", lat: 42.5467, lon: -83.2034},
  {id: 28, street: "104 Willits Street", city: "Birmingham", full_address: "104 Willits Street, Birmingham, MI", lat: 42.5445, lon: -83.2121},
  {id: 29, street: "794 Southfield Rd", city: "Birmingham", full_address: "794 Southfield Rd, Birmingham, MI", lat: 42.5401, lon: -83.2234},
  {id: 30, street: "14 s old Woodward", city: "Birmingham", full_address: "14 s old Woodward, Birmingham, MI", lat: 42.5438, lon: -83.2136},
  {id: 31, street: "132 N. OLD WOODWARD AVE", city: "Birmingham", full_address: "132 N. OLD WOODWARD AVE, Birmingham, MI"},
  {id: 32, street: "2239 Cole Street", city: "Birmingham", full_address: "2239 Cole Street, Birmingham, MI"},
  {id: 33, street: "2007 Cole Street", city: "Birmingham", full_address: "2007 Cole Street, Birmingham, MI"},
  {id: 34, street: "1045 N Old Woodward Ave", city: "Birmingham", full_address: "1045 N Old Woodward Ave, Birmingham, MI"},
  {id: 35, street: "2253 cole st", city: "Birmingham", full_address: "2253 cole st, Birmingham, MI"},
  {id: 36, street: "339 Baldwin", city: "Birmingham", full_address: "339 Baldwin, Birmingham, MI"},
  {id: 37, street: "800 henley", city: "Birmingham", full_address: "800 henley, Birmingham, MI"},
  {id: 38, street: "405 S Eaton", city: "Birmingham", full_address: "405 S Eaton, Birmingham, MI"},
  {id: 39, street: "555 s Woodward", city: "Birmingham", full_address: "555 s Woodward, Birmingham, MI"},
  {id: 40, street: "2003 Cole St", city: "Birmingham", full_address: "2003 Cole St, Birmingham, MI"},
  {id: 41, street: "36801 Woodward Ave. suite 200", city: "Birmingham", full_address: "36801 Woodward Ave. suite 200, Birmingham, MI"},
  {id: 42, street: "237 Willits Alley", city: "Birmingham", full_address: "237 Willits Alley, Birmingham, MI"},
  {id: 43, street: "187 S Old Woodward", city: "Birmingham", full_address: "187 S Old Woodward, Birmingham, MI"},
  {id: 44, street: "880 S. Old Woodward Ave", city: "Birmingham", full_address: "880 S. Old Woodward Ave, Birmingham, MI"},
  {id: 45, street: "800 N Old Woodward Ave", city: "Birmingham", full_address: "800 N Old Woodward Ave, Birmingham, MI"},
  {id: 46, street: "1288 Dorchester", city: "Birmingham", full_address: "1288 Dorchester, Birmingham, MI"},
  {id: 47, street: "395 E. maple Road", city: "Birmingham", full_address: "395 E. maple Road, Birmingham, MI"},
  {id: 48, street: "107 Townsend Street", city: "Birmingham", full_address: "107 Townsend Street, Birmingham, MI"},
  {id: 49, street: "275 E Frank St", city: "Birmingham", full_address: "275 E Frank St, Birmingham, MI"},
  {id: 50, street: "950 E Maple Ste 204", city: "Birmingham", full_address: "950 E Maple Ste 204, Birmingham, MI"},
  {id: 51, street: "430 N Old Woodward Ave", city: "Birmingham", full_address: "430 N Old Woodward Ave, Birmingham, MI"},
  {id: 52, street: "1650 E Melton Rd", city: "Birmingham", full_address: "1650 E Melton Rd, Birmingham, MI"},
  {id: 53, street: "755 N Old Woodward Ave", city: "Birmingham", full_address: "755 N Old Woodward Ave, Birmingham, MI"},
  {id: 54, street: "111 S Old Woodward", city: "Birmingham", full_address: "111 S Old Woodward, Birmingham, MI"},
  {id: 55, street: "1716 Bellwood Ct", city: "Bloomfield", full_address: "1716 Bellwood Ct, Bloomfield, MI"},
  {id: 56, street: "42598 Woodward Ave", city: "Bloomfield Hills", full_address: "42598 Woodward Ave, Bloomfield Hills, MI"},
  {id: 57, street: "4653 Brightmore Rd.", city: "Bloomfield Hills", full_address: "4653 Brightmore Rd., Bloomfield Hills, MI"},
  {id: 58, street: "753 Fox River Dr", city: "Bloomfield Hills", full_address: "753 Fox River Dr, Bloomfield Hills, MI"},
  {id: 59, street: "267 Westbourne Dr", city: "Bloomfield Hills", full_address: "267 Westbourne Dr, Bloomfield Hills, MI"},
  {id: 60, street: "4210 Sandy Lane", city: "Bloomfield Hills", full_address: "4210 Sandy Lane, Bloomfield Hills, MI"},
  {id: 61, street: "40950 Woodward Ave.", city: "Bloomfield Hills", full_address: "40950 Woodward Ave., Bloomfield Hills, MI"},
  {id: 62, street: "42690 Woodward Ave Ste-180", city: "Bloomfield Hills", full_address: "42690 Woodward Ave Ste-180, Bloomfield Hills, MI"},
  {id: 63, street: "38525 Woodward ave", city: "Bloomfield Hills", full_address: "38525 Woodward ave, Bloomfield Hills, MI"},
  {id: 64, street: "36800 Woodward Ave 200", city: "Bloomfield Hills", full_address: "36800 Woodward Ave 200, Bloomfield Hills, MI"},
  {id: 65, street: "740 Wooddale Rd", city: "Bloomfield Hills", full_address: "740 Wooddale Rd, Bloomfield Hills, MI"},
  {id: 66, street: "106 Marlborough", city: "Bloomfield Hills", full_address: "106 Marlborough, Bloomfield Hills, MI"},
  {id: 67, street: "39533 Woodward Ave Ste-160", city: "Bloomfield Hills", full_address: "39533 Woodward Ave Ste-160, Bloomfield Hills, MI"},
  {id: 68, street: "5156 Crest Knolls Ct", city: "Bloomfield Hills", full_address: "5156 Crest Knolls Ct, Bloomfield Hills, MI"},
  {id: 69, street: "502 Westbourne Dr", city: "Bloomfield Hills", full_address: "502 Westbourne Dr, Bloomfield Hills, MI"},
  {id: 70, street: "1575 Oxford", city: "Bloomfield Hills", full_address: "1575 Oxford, Bloomfield Hills, MI"},
  {id: 71, street: "39400 Woodward Ave", city: "Bloomfield Hills", full_address: "39400 Woodward Ave, Bloomfield Hills, MI"},
  {id: 72, street: "36880 Woodward Ave", city: "Bloomfield Hills", full_address: "36880 Woodward Ave, Bloomfield Hills, MI"},
  {id: 73, street: "1253 Atkinson", city: "Bloomfield Hills", full_address: "1253 Atkinson, Bloomfield Hills, MI"},
  {id: 74, street: "2555 Telegraph Road", city: "Bloomfield Hills", full_address: "2555 Telegraph Road, Bloomfield Hills, MI"},
  {id: 75, street: "35980 Woodward Ave 150", city: "Bloomfield Hills", full_address: "35980 Woodward Ave 150, Bloomfield Hills, MI"},
  {id: 76, street: "7355 Parkstone Lane", city: "Bloomfield Hills", full_address: "7355 Parkstone Lane, Bloomfield Hills, MI"},
  {id: 77, street: "42359 Woodward Ave", city: "Bloomfield Hills", full_address: "42359 Woodward Ave, Bloomfield Hills, MI"},
  {id: 78, street: "43700 Woodward Ave Ste-104", city: "Bloomfield Hills", full_address: "43700 Woodward Ave Ste-104, Bloomfield Hills, MI"},
  {id: 79, street: "4050 Woodward", city: "Bloomfield Hills", full_address: "4050 Woodward, Bloomfield Hills, MI"},
  {id: 80, street: "200 E. Long Lake Road Suite 200", city: "Bloomfield Hills", full_address: "200 E. Long Lake Road Suite 200, Bloomfield Hills, MI"},
  {id: 81, street: "3883 South Telegraph", city: "Bloomfield Hills", full_address: "3883 South Telegraph, Bloomfield Hills, MI"},
  {id: 82, street: "330 Enterprise Ct.", city: "Bloomfield Twp.", full_address: "330 Enterprise Ct., Bloomfield Twp., MI"},
  {id: 83, street: "1005 Washington St", city: "Brighton", full_address: "1005 Washington St, Brighton, MI"},
  {id: 84, street: "3250 Church RD", city: "Casco", full_address: "3250 Church RD, Casco, MI"},
  {id: 85, street: "9376 Marine City Hwy", city: "Casco", full_address: "9376 Marine City Hwy, Casco, MI"},
  {id: 86, street: "6490 E. 10 Mile Road", city: "Center Line", full_address: "6490 E. 10 Mile Road, Center Line, MI"},
  {id: 87, street: "16989 18 Mile Rd", city: "Clinton Township", full_address: "16989 18 Mile Rd, Clinton Township, MI"},
  {id: 88, street: "5477 Boulderwood Ridge", city: "Clarkston", full_address: "5477 Boulderwood Ridge, Clarkston, MI"},
  {id: 89, street: "4435 Newcastle Dr", city: "Clarkston", full_address: "4435 Newcastle Dr, Clarkston, MI"},
  {id: 90, street: "9770 Sashabaw Rd", city: "Clarkston", full_address: "9770 Sashabaw Rd, Clarkston, MI"},
  {id: 91, street: "6306 Golf View Dr", city: "Clarkston", full_address: "6306 Golf View Dr, Clarkston, MI"},
  {id: 92, street: "114 Wompole Drive", city: "Clarkston", full_address: "114 Wompole Drive, Clarkston, MI"},
  {id: 93, street: "27 South Main Street", city: "Clarkston", full_address: "27 South Main Street, Clarkston, MI"},
  {id: 94, street: "6825 Dixie Hwy Ste-C", city: "Clarkston", full_address: "6825 Dixie Hwy Ste-C, Clarkston, MI"},
  {id: 95, street: "890 N Rochester Rd", city: "Clawson", full_address: "890 N Rochester Rd, Clawson, MI"},
  {id: 96, street: "291 E Elmwood Ave", city: "Clawson", full_address: "291 E Elmwood Ave, Clawson, MI"},
  {id: 97, street: "244 Kinross", city: "Clawson", full_address: "244 Kinross, Clawson, MI"},
  {id: 98, street: "850 N Crooks suite 200", city: "Clawson", full_address: "850 N Crooks suite 200, Clawson, MI"},
  {id: 99, street: "23940 Miles Road", city: "Cleveland", full_address: "23940 Miles Road, Cleveland, MI"},
  {id: 100, street: "44930 Vic Wertz Drive", city: "Clinton Township", full_address: "44930 Vic Wertz Drive, Clinton Township, MI"},
  {id: 101, street: "33827 Harper Ave", city: "Clinton Township", full_address: "33827 Harper Ave, Clinton Township, MI"},
  {id: 102, street: "17001 19 Mile Rd", city: "Clinton Township", full_address: "17001 19 Mile Rd, Clinton Township, MI"},
  {id: 103, street: "20448 Hall Rd", city: "Clinton Township", full_address: "20448 Hall Rd, Clinton Township, MI"},
  {id: 104, street: "17844 Merganser", city: "Clinton Township", full_address: "17844 Merganser, Clinton Township, MI"},
  {id: 105, street: "19015 E Fourteen Mile Rd", city: "Clinton Township", full_address: "19015 E Fourteen Mile Rd, Clinton Township, MI"},
  {id: 106, street: "39103 Garfield Rd", city: "Clinton Township", full_address: "39103 Garfield Rd, Clinton Township, MI"},
  {id: 107, street: "35480 Forton Ct", city: "Clinton Township", full_address: "35480 Forton Ct, Clinton Township, MI"},
  {id: 108, street: "24388 Sorrentino Ct", city: "Clinton Township", full_address: "24388 Sorrentino Ct, Clinton Township, MI"},
  {id: 109, street: "15307 Cornell", city: "Clinton Township", full_address: "15307 Cornell, Clinton Township, MI"},
  {id: 110, street: "36358 Garfield Rd", city: "Clinton Township", full_address: "36358 Garfield Rd, Clinton Township, MI"},
  {id: 111, street: "42490 Garfield Rd", city: "Clinton Township", full_address: "42490 Garfield Rd, Clinton Township, MI"},
  {id: 112, street: "40210 Hayes Rd", city: "Clinton Township", full_address: "40210 Hayes Rd, Clinton Township, MI"},
  {id: 113, street: "42526 Kingsley Dr", city: "Clinton Township", full_address: "42526 Kingsley Dr, Clinton Township, MI"},
  {id: 114, street: "16130 Vista Woods Court", city: "Clinton Township", full_address: "16130 Vista Woods Court, Clinton Township, MI"},
  {id: 115, street: "8348 Richardson Rd", city: "Commerce", full_address: "8348 Richardson Rd, Commerce, MI"},
  {id: 116, street: "9815 Creekwood Trail", city: "Davisburg", full_address: "9815 Creekwood Trail, Davisburg, MI"},
  {id: 117, street: "3305 Parker Rd", city: "Davisburg", full_address: "3305 Parker Rd, Davisburg, MI"},
  {id: 118, street: "835 Mason Street", city: "Dearborn", full_address: "835 Mason Street, Dearborn, MI"},
  {id: 119, street: "3011 W Grand Boulevard, Suite 1800", city: "Detroit", full_address: "3011 W Grand Boulevard, Suite 1800, Detroit, MI"},
  {id: 120, street: "607 Shelby Suite 702", city: "Detroit", full_address: "607 Shelby Suite 702, Detroit, MI"},
  {id: 121, street: "615 Griswold St", city: "Detroit", full_address: "615 Griswold St, Detroit, MI"},
  {id: 122, street: "630 Woodward Ave.", city: "Detroit", full_address: "630 Woodward Ave., Detroit, MI"},
  {id: 123, street: "114 Adams Ave W", city: "Detroit", full_address: "114 Adams Ave W, Detroit, MI"},
  {id: 124, street: "17437 Third St Ste-100", city: "Detroit", full_address: "17437 Third St Ste-100, Detroit, MI"},
  {id: 125, street: "28 West Adams Street suite 1400", city: "Detroit", full_address: "28 West Adams Street suite 1400, Detroit, MI"},
  {id: 126, street: "607 Shelby Street, Suite 731", city: "Detroit", full_address: "607 Shelby Street, Suite 731, Detroit, MI"},
  {id: 127, street: "1555 Broadway St Ste-200", city: "Detroit", full_address: "1555 Broadway St Ste-200, Detroit, MI"},
  {id: 128, street: "1051 Bellevue St", city: "Detroit", full_address: "1051 Bellevue St, Detroit, MI"},
  {id: 129, street: "2020 14th Street", city: "Detroit", full_address: "2020 14th Street, Detroit, MI"},
  {id: 130, street: "440 Selden St", city: "Detroit", full_address: "440 Selden St, Detroit, MI"},
  {id: 131, street: "1265 Griswold Street", city: "Detroit", full_address: "1265 Griswold Street, Detroit, MI"},
  {id: 132, street: "1435 Randolph Street Suite 200", city: "Detroit", full_address: "1435 Randolph Street Suite 200, Detroit, MI"},
  {id: 133, street: "15 East Kirby, Apt. 611", city: "Detroit", full_address: "15 East Kirby, Apt. 611, Detroit, MI"},
  {id: 134, street: "1111 Bellevue St", city: "Detroit", full_address: "1111 Bellevue St, Detroit, MI"},
  {id: 135, street: "11343 Schaefer Hwy", city: "Detroit", full_address: "11343 Schaefer Hwy, Detroit, MI"},
  {id: 136, street: "1938 Franklin St", city: "Detroit", full_address: "1938 Franklin St, Detroit, MI"},
  {id: 137, street: "3420 Cass", city: "Detroit", full_address: "3420 Cass, Detroit, MI"},
  {id: 138, street: "150 W. Jefferson Ave. suite 1300", city: "Detroit", full_address: "150 W. Jefferson Ave. suite 1300, Detroit, MI"},
  {id: 139, street: "1420 Washington Blvd", city: "Detroit", full_address: "1420 Washington Blvd, Detroit, MI"},
  {id: 140, street: "1150 Griswold St.", city: "Detroit", full_address: "1150 Griswold St., Detroit, MI"},
  {id: 141, street: "19 Clifford St Ste 8-101", city: "Detroit", full_address: "19 Clifford St Ste 8-101, Detroit, MI"},
  {id: 142, street: "4474 3rd St", city: "Detroit", full_address: "4474 3rd St, Detroit, MI"},
  {id: 143, street: "7451 third St", city: "Detroit", full_address: "7451 third St, Detroit, MI"},
  {id: 144, street: "300 Riverfront Drive", city: "Detroit", full_address: "300 Riverfront Drive, Detroit, MI"},
  {id: 145, street: "2727 2nd Ave", city: "Detroit", full_address: "2727 2nd Ave, Detroit, MI"},
  {id: 146, street: "333 W. fort street Suite 1350", city: "Detroit", full_address: "333 W. fort street Suite 1350, Detroit, MI"},
  {id: 147, street: "1700 1st St", city: "Detroit", full_address: "1700 1st St, Detroit, MI"},
  {id: 148, street: "2027-2079 Trumbull Ave", city: "Detroit", full_address: "2027-2079 Trumbull Ave, Detroit, MI"},
  {id: 149, street: "1938 franklin st suite 207", city: "Detroit", full_address: "1938 franklin st suite 207, Detroit, MI"},
  {id: 150, street: "1111 Bellevue Ste-201", city: "Detroit", full_address: "1111 Bellevue Ste-201, Detroit, MI"},
  {id: 151, street: "1230 W Grand River", city: "East Lansing", full_address: "1230 W Grand River, East Lansing, MI"},
  {id: 152, street: "17255 Stephens Dr", city: "Eastpointe", full_address: "17255 Stephens Dr, Eastpointe, MI"},
  {id: 153, street: "28825 Millbrook", city: "Farmington Hills", full_address: "28825 Millbrook, Farmington Hills, MI"},
  {id: 154, street: "24798 Crestview Ct", city: "Farmington Hills", full_address: "24798 Crestview Ct, Farmington Hills, MI"},
  {id: 155, street: "37680 Hills Tech Drive", city: "Farmington Hills", full_address: "37680 Hills Tech Drive, Farmington Hills, MI"},
  {id: 156, street: "24700 Drake Rd", city: "Farmington Hills", full_address: "24700 Drake Rd, Farmington Hills, MI"},
  {id: 157, street: "39255 Country Club Dr Suite B-11", city: "Farmington Hills", full_address: "39255 Country Club Dr Suite B-11, Farmington Hills, MI"},
  {id: 158, street: "39000 Country Club Dr", city: "Farmington Hills", full_address: "39000 Country Club Dr, Farmington Hills, MI"},
  {id: 159, street: "24585 Indoplex Cir", city: "Farmington Hills", full_address: "24585 Indoplex Cir, Farmington Hills, MI"},
  {id: 160, street: "31500 northwestern hwy suite 105", city: "Farmington Hills", full_address: "31500 northwestern hwy suite 105, Farmington Hills, MI"},
  {id: 161, street: "2870 Hilton", city: "Ferndale", full_address: "2870 Hilton, Ferndale, MI"},
  {id: 162, street: "1280 Hilton Rd", city: "Ferndale", full_address: "1280 Hilton Rd, Ferndale, MI"},
  {id: 163, street: "6335 State Rd", city: "Fort Gratiot Twp", full_address: "6335 State Rd, Fort Gratiot Twp, MI"},
  {id: 164, street: "31780 Groesbeck Hwy", city: "Fraser", full_address: "31780 Groesbeck Hwy, Fraser, MI"},
  {id: 165, street: "32205 Groesbeck", city: "Fraser", full_address: "32205 Groesbeck, Fraser, MI"},
  {id: 166, street: "18377 E 14 Mile Rd", city: "Fraser", full_address: "18377 E 14 Mile Rd, Fraser, MI"},
  {id: 167, street: "33405 Mulvey", city: "Fraser", full_address: "33405 Mulvey, Fraser, MI"},
  {id: 168, street: "34517 Utica Rd", city: "Fraser", full_address: "34517 Utica Rd, Fraser, MI"},
  {id: 169, street: "588 Lakeland St", city: "Grosse Pointe", full_address: "588 Lakeland St, Grosse Pointe, MI"},
  {id: 170, street: "27 Beacon Hill", city: "Grosse Pointe Farms", full_address: "27 Beacon Hill, Grosse Pointe Farms, MI"},
  {id: 171, street: "86 Kercheval", city: "Grosse Pointe Farms", full_address: "86 Kercheval, Grosse Pointe Farms, MI"},
  {id: 172, street: "34 Windemere Place", city: "Grosse Pointe Farms", full_address: "34 Windemere Place, Grosse Pointe Farms, MI"},
  {id: 173, street: "16840 St Paul Ave", city: "Grosse Pointe Park", full_address: "16840 St Paul Ave, Grosse Pointe Park, MI"},
  {id: 174, street: "1367 Cadieux Rd", city: "Grosse Pointe Park", full_address: "1367 Cadieux Rd, Grosse Pointe Park, MI"},
  {id: 175, street: "1013 nottingham", city: "Grosse Pointe Park", full_address: "1013 nottingham, Grosse Pointe Park, MI"},
  {id: 176, street: "1210 Grayson Street", city: "Grosse Pointe Park", full_address: "1210 Grayson Street, Grosse Pointe Park, MI"},
  {id: 177, street: "20445 Mack Avenue", city: "Grosse Pointe Woods", full_address: "20445 Mack Avenue, Grosse Pointe Woods, MI"},
  {id: 178, street: "758 Shoreham Dr", city: "Grosse Pointe Woods", full_address: "758 Shoreham Dr, Grosse Pointe Woods, MI"},
  {id: 179, street: "3105 Holbrook Ave", city: "Hamtramck", full_address: "3105 Holbrook Ave, Hamtramck, MI"},
  {id: 180, street: "20250 Harper Avenue", city: "Harper Woods", full_address: "20250 Harper Avenue, Harper Woods, MI"},
  {id: 181, street: "35370 Union Lake Road", city: "Harrison Twp", full_address: "35370 Union Lake Road, Harrison Twp, MI"},
  {id: 182, street: "737 E 9 Mile Road", city: "Hazel Park", full_address: "737 E 9 Mile Road, Hazel Park, MI"},
  {id: 183, street: "23617 John R", city: "Hazel Park", full_address: "23617 John R, Hazel Park, MI"},
  {id: 184, street: "24410 John R", city: "Hazel Park", full_address: "24410 John R, Hazel Park, MI"},
  {id: 185, street: "9965 Dixie Hwy.", city: "Ira", full_address: "9965 Dixie Hwy., Ira, MI"},
  {id: 186, street: "5139 Lapeer Rd", city: "Kimball", full_address: "5139 Lapeer Rd, Kimball, MI"},
  {id: 187, street: "102 Kirksway Lane", city: "Lake Orion", full_address: "102 Kirksway Lane, Lake Orion, MI"},
  {id: 188, street: "169 W Clarkston Rd 100", city: "Lake Orion", full_address: "169 W Clarkston Rd 100, Lake Orion, MI"},
  {id: 189, street: "321 Indianwood Rd", city: "Lake Orion", full_address: "321 Indianwood Rd, Lake Orion, MI"},
  {id: 190, street: "367 Clint Court", city: "Lake Orion", full_address: "367 Clint Court, Lake Orion, MI"},
  {id: 191, street: "1256 Parkland Rd", city: "Lake Orion", full_address: "1256 Parkland Rd, Lake Orion, MI"},
  {id: 192, street: "214 S. Broadway Suite 220", city: "Lake Orion", full_address: "214 S. Broadway Suite 220, Lake Orion, MI"},
  {id: 193, street: "1461 Marina Pointe Blvd", city: "Lake Orion", full_address: "1461 Marina Pointe Blvd, Lake Orion, MI"},
  {id: 194, street: "20371 Hall Rd", city: "Macomb", full_address: "20371 Hall Rd, Macomb, MI"},
  {id: 195, street: "51561 Industrial Drive", city: "Macomb", full_address: "51561 Industrial Drive, Macomb, MI"},
  {id: 196, street: "23035 Angel Park Dr", city: "Macomb", full_address: "23035 Angel Park Dr, Macomb, MI"},
  {id: 197, street: "19568 Bush", city: "Macomb", full_address: "19568 Bush, Macomb, MI"},
  {id: 198, street: "51410 Milano Drive", city: "Macomb", full_address: "51410 Milano Drive, Macomb, MI"},
  {id: 199, street: "24224 Chapman", city: "Macomb", full_address: "24224 Chapman, Macomb, MI"},
  {id: 200, street: "48895 Fairchild Rd", city: "Macomb", full_address: "48895 Fairchild Rd, Macomb, MI"},
  {id: 201, street: "51194 Romeo Plank Rd Ste-453", city: "Macomb", full_address: "51194 Romeo Plank Rd Ste-453, Macomb, MI"},
  {id: 202, street: "18137 Palmer", city: "Macomb Township", full_address: "18137 Palmer, Macomb Township, MI"},
  {id: 203, street: "50116 Madison", city: "Macomb Township", full_address: "50116 Madison, Macomb Township, MI"},
  {id: 204, street: "48358 Kingsgrove Drive", city: "Macomb Township", full_address: "48358 Kingsgrove Drive, Macomb Township, MI"},
  {id: 205, street: "930 W Eleven Mile Rd", city: "Madison Heights", full_address: "930 W Eleven Mile Rd, Madison Heights, MI"},
  {id: 206, street: "1100 E. Mandoline Ave.", city: "Madison Heights", full_address: "1100 E. Mandoline Ave., Madison Heights, MI"},
  {id: 207, street: "32090 John R", city: "Madison Heights", full_address: "32090 John R, Madison Heights, MI"},
  {id: 208, street: "30 W Barrett Ave", city: "Madison Heights", full_address: "30 W Barrett Ave, Madison Heights, MI"},
  {id: 209, street: "31100 Stephenson Hwy", city: "Madison Heights", full_address: "31100 Stephenson Hwy, Madison Heights, MI"},
  {id: 210, street: "876 Horace Brown Dr.", city: "Madison Heights", full_address: "876 Horace Brown Dr., Madison Heights, MI"},
  {id: 211, street: "411 13 Mile Suite 100", city: "Madison Heights", full_address: "411 13 Mile Suite 100, Madison Heights, MI"},
  {id: 212, street: "32022 Edward Ave.", city: "Madison Heights", full_address: "32022 Edward Ave., Madison Heights, MI"},
  {id: 213, street: "1642 E 11 Mile Road", city: "Madison Heights", full_address: "1642 E 11 Mile Road, Madison Heights, MI"},
  {id: 214, street: "32384 Edward", city: "Madison Heights", full_address: "32384 Edward, Madison Heights, MI"},
  {id: 215, street: "28184 Park Ct", city: "Madison Heights", full_address: "28184 Park Ct, Madison Heights, MI"},
  {id: 216, street: "928 Robertson", city: "Marine City", full_address: "928 Robertson, Marine City, MI"},
  {id: 217, street: "3341 Wynns Mill", city: "Metamora", full_address: "3341 Wynns Mill, Metamora, MI"},
  {id: 218, street: "3840 Sandy Dr", city: "Metamora", full_address: "3840 Sandy Dr, Metamora, MI"},
  {id: 219, street: "15649 S Telegraph Rd", city: "Monroe", full_address: "15649 S Telegraph Rd, Monroe, MI"},
  {id: 220, street: "70 Macomb Place Suite 220", city: "Mount Clemens", full_address: "70 Macomb Place Suite 220, Mount Clemens, MI"},
  {id: 221, street: "1030 Harrington Street", city: "Mount Clemens", full_address: "1030 Harrington Street, Mount Clemens, MI"},
  {id: 222, street: "65 Market Street Suite 200", city: "Mount Clemens", full_address: "65 Market Street Suite 200, Mount Clemens, MI"},
  {id: 223, street: "124 South Christine", city: "Mount Clemens", full_address: "124 South Christine, Mount Clemens, MI"},
  {id: 224, street: "65 Macomb Place Suite F", city: "Mount Clemens", full_address: "65 Macomb Place Suite F, Mount Clemens, MI"},
  {id: 225, street: "51 Smith", city: "Mount Clemens", full_address: "51 Smith, Mount Clemens, MI"},
  {id: 226, street: "17613 N Nunnaly Rd", city: "Mount Clemens", full_address: "17613 N Nunnaly Rd, Mount Clemens, MI"},
  {id: 227, street: "107 N Center St", city: "Northville", full_address: "107 N Center St, Northville, MI"},
  {id: 228, street: "18105 Cascade Drive", city: "Northville", full_address: "18105 Cascade Drive, Northville, MI"},
  {id: 229, street: "120 West main st", city: "Northville", full_address: "120 West main st, Northville, MI"},
  {id: 230, street: "18651 Sheldon Rd.", city: "Northville", full_address: "18651 Sheldon Rd., Northville, MI"},
  {id: 231, street: "46870 Seven Mile Road", city: "Northville", full_address: "46870 Seven Mile Road, Northville, MI"},
  {id: 232, street: "43155 Main St Ste-2202H", city: "Novi", full_address: "43155 Main St Ste-2202H, Novi, MI"},
  {id: 233, street: "24084 Chipmunk Trail", city: "Novi", full_address: "24084 Chipmunk Trail, Novi, MI"},
  {id: 234, street: "25498 Arcadia Dr", city: "Novi", full_address: "25498 Arcadia Dr, Novi, MI"},
  {id: 235, street: "21717 Republic Ave.", city: "Oak Park", full_address: "21717 Republic Ave., Oak Park, MI"},
  {id: 236, street: "1878 Vinsetta Ct", city: "Oakland Township", full_address: "1878 Vinsetta Ct, Oakland Township, MI"},
  {id: 237, street: "5125 Deer Run", city: "Orchard Lake", full_address: "5125 Deer Run, Orchard Lake, MI"},
  {id: 238, street: "1772 S Ortonville Rd", city: "Ortonville", full_address: "1772 S Ortonville Rd, Ortonville, MI"},
  {id: 239, street: "795 S Lapeer Rd", city: "Oxford", full_address: "795 S Lapeer Rd, Oxford, MI"},
  {id: 240, street: "7 South Perry St", city: "Pontiac", full_address: "7 South Perry St, Pontiac, MI"},
  {id: 241, street: "555 Friendly Street", city: "Pontiac", full_address: "555 Friendly Street, Pontiac, MI"},
  {id: 242, street: "150 N Saginaw", city: "Pontiac", full_address: "150 N Saginaw, Pontiac, MI"},
  {id: 243, street: "94 Mary Day Ave", city: "Pontiac", full_address: "94 Mary Day Ave, Pontiac, MI"},
  {id: 244, street: "40 W. Howard Street", city: "Pontiac", full_address: "40 W. Howard Street, Pontiac, MI"},
  {id: 245, street: "79 Oakland Avenue", city: "Pontiac", full_address: "79 Oakland Avenue, Pontiac, MI"},
  {id: 246, street: "487 N Saginaw St", city: "Pontiac", full_address: "487 N Saginaw St, Pontiac, MI"},
  {id: 247, street: "3390 Ravenswood Rd", city: "Port Huron", full_address: "3390 Ravenswood Rd, Port Huron, MI"},
  {id: 248, street: "209 Huron Avenue", city: "Port Huron", full_address: "209 Huron Avenue, Port Huron, MI"},
  {id: 249, street: "517 Bard St", city: "Port Huron", full_address: "517 Bard St, Port Huron, MI"},
  {id: 250, street: "737 Merchant St", city: "Port Huron", full_address: "737 Merchant St, Port Huron, MI"},
  {id: 251, street: "413 Bard Street", city: "Port Huron", full_address: "413 Bard Street, Port Huron, MI"},
  {id: 252, street: "303 E. Third Street", city: "Rochester", full_address: "303 E. Third Street, Rochester, MI"},
  {id: 253, street: "607 Woodward Street", city: "Rochester", full_address: "607 Woodward Street, Rochester, MI"},
  {id: 254, street: "312 East St", city: "Rochester", full_address: "312 East St, Rochester, MI"},
  {id: 255, street: "236 Mill Street", city: "Rochester", full_address: "236 Mill Street, Rochester, MI"},
  {id: 256, street: "322 W Second St", city: "Rochester", full_address: "322 W Second St, Rochester, MI"},
  {id: 257, street: "1429 N. Main St.", city: "Rochester", full_address: "1429 N. Main St., Rochester, MI"},
  {id: 258, street: "202 Walnut Blvd Ste-B", city: "Rochester", full_address: "202 Walnut Blvd Ste-B, Rochester, MI"},
  {id: 259, street: "331 Wilcox", city: "Rochester", full_address: "331 Wilcox, Rochester, MI"},
  {id: 260, street: "137 Griggs St", city: "Rochester", full_address: "137 Griggs St, Rochester, MI"},
  {id: 261, street: "155 Romeo Road", city: "Rochester", full_address: "155 Romeo Road, Rochester, MI"},
  {id: 262, street: "3871 White Tail Dr", city: "Rochester", full_address: "3871 White Tail Dr, Rochester, MI"},
  {id: 263, street: "5167 Stonehenge", city: "Rochester", full_address: "5167 Stonehenge, Rochester, MI"},
  {id: 264, street: "115 E 4th Street", city: "Rochester", full_address: "115 E 4th Street, Rochester, MI"},
  {id: 265, street: "1055 E. South Blvd", city: "Rochester Hills", full_address: "1055 E. South Blvd, Rochester Hills, MI"},
  {id: 266, street: "724 Millstone Dr", city: "Rochester Hills", full_address: "724 Millstone Dr, Rochester Hills, MI"},
  {id: 267, street: "1601 West Hamlin Road", city: "Rochester Hills", full_address: "1601 West Hamlin Road, Rochester Hills, MI"},
  {id: 268, street: "1160 Demar Dr", city: "Rochester Hills", full_address: "1160 Demar Dr, Rochester Hills, MI"},
  {id: 269, street: "441 S Livernois Rd", city: "Rochester Hills", full_address: "441 S Livernois Rd, Rochester Hills, MI"},
  {id: 270, street: "3675 Auburn Rd", city: "Rochester Hills", full_address: "3675 Auburn Rd, Rochester Hills, MI"},
  {id: 271, street: "1806 Rochester Industrial DR Suite 200", city: "Rochester Hills", full_address: "1806 Rochester Industrial DR Suite 200, Rochester Hills, MI"},
  {id: 272, street: "3770 S Rochester Rd", city: "Rochester Hills", full_address: "3770 S Rochester Rd, Rochester Hills, MI"},
  {id: 273, street: "1015 John R Rd", city: "Rochester Hills", full_address: "1015 John R Rd, Rochester Hills, MI"},
  {id: 274, street: "1816 June Ave", city: "Rochester Hills", full_address: "1816 June Ave, Rochester Hills, MI"},
  {id: 275, street: "2130 Warrington", city: "Rochester Hills", full_address: "2130 Warrington, Rochester Hills, MI"},
  {id: 276, street: "1055 E South Blv", city: "Rochester Hills", full_address: "1055 E South Blv, Rochester Hills, MI"},
  {id: 277, street: "1782 Mackwood Rd", city: "Rochester Hills", full_address: "1782 Mackwood Rd, Rochester Hills, MI"},
  {id: 278, street: "2945 Eagle Dr", city: "Rochester Hills", full_address: "2945 Eagle Dr, Rochester Hills, MI"},
  {id: 279, street: "2710 Harrington Rd", city: "Rochester Hills", full_address: "2710 Harrington Rd, Rochester Hills, MI"},
  {id: 280, street: "1850 S Rochester Rd", city: "Rochester Hills", full_address: "1850 S Rochester Rd, Rochester Hills, MI"},
  {id: 281, street: "20320 Cornillie Dr", city: "Roseville", full_address: "20320 Cornillie Dr, Roseville, MI"},
  {id: 282, street: "29975 Little Mack", city: "Roseville", full_address: "29975 Little Mack, Roseville, MI"},
  {id: 283, street: "27448 M-97", city: "Roseville", full_address: "27448 M-97, Roseville, MI"},
  {id: 284, street: "32218 Woodward Ave", city: "Royal Oak", full_address: "32218 Woodward Ave, Royal Oak, MI"},
  {id: 285, street: "1012 Owana Avenue", city: "Royal Oak", full_address: "1012 Owana Avenue, Royal Oak, MI"},
  {id: 286, street: "123 South Main Street", city: "Royal Oak", full_address: "123 South Main Street, Royal Oak, MI"},
  {id: 287, street: "4339 Delemere Ct", city: "Royal Oak", full_address: "4339 Delemere Ct, Royal Oak, MI"},
  {id: 288, street: "32128 N Woodward Ave", city: "Royal Oak", full_address: "32128 N Woodward Ave, Royal Oak, MI"},
  {id: 289, street: "1600 Rochester Road", city: "Royal Oak", full_address: "1600 Rochester Road, Royal Oak, MI"},
  {id: 290, street: "628 E Parent Ave 103", city: "Royal Oak", full_address: "628 E Parent Ave 103, Royal Oak, MI"},
  {id: 291, street: "832 W. 11 Mile Road", city: "Royal Oak", full_address: "832 W. 11 Mile Road, Royal Oak, MI"},
  {id: 292, street: "2021 Alicia Ln", city: "Royal Oak", full_address: "2021 Alicia Ln, Royal Oak, MI"},
  {id: 293, street: "322 E Lincoln Ave", city: "Royal Oak", full_address: "322 E Lincoln Ave, Royal Oak, MI"},
  {id: 294, street: "32314 Woodward Ave.", city: "Royal Oak", full_address: "32314 Woodward Ave., Royal Oak, MI"},
  {id: 295, street: "326 E 5th St", city: "Royal Oak", full_address: "326 E 5th St, Royal Oak, MI"},
  {id: 296, street: "28000 Woodward Ave", city: "Royal Oak", full_address: "28000 Woodward Ave, Royal Oak, MI"},
  {id: 297, street: "1041 South Main Street", city: "Royal Oak", full_address: "1041 South Main Street, Royal Oak, MI"},
  {id: 298, street: "1050 Iroquois", city: "Royal Oak", full_address: "1050 Iroquois, Royal Oak, MI"},
  {id: 299, street: "612 N. Main", city: "Royal Oak", full_address: "612 N. Main, Royal Oak, MI"},
  {id: 300, street: "32968 Woodward Ave.", city: "Royal Oak", full_address: "32968 Woodward Ave., Royal Oak, MI"},
  {id: 301, street: "4000 Crooks Road", city: "Royal Oak", full_address: "4000 Crooks Road, Royal Oak, MI"},
  {id: 302, street: "309 N. Main Street", city: "Royal Oak", full_address: "309 N. Main Street, Royal Oak, MI"},
  {id: 303, street: "317 E 4th St", city: "Royal Oak", full_address: "317 E 4th St, Royal Oak, MI"},
  {id: 304, street: "400 East Lincoln Ave, Suite A", city: "Royal Oak", full_address: "400 East Lincoln Ave, Suite A, Royal Oak, MI"},
  {id: 305, street: "433 N Washington Ave", city: "Royal Oak", full_address: "433 N Washington Ave, Royal Oak, MI"},
  {id: 306, street: "1527 N Main Street", city: "Royal Oak", full_address: "1527 N Main Street, Royal Oak, MI"},
  {id: 307, street: "4320-4398 Delemere Ct", city: "Royal Oak", full_address: "4320-4398 Delemere Ct, Royal Oak, MI"},
  {id: 308, street: "2725 Nakota Rd", city: "Royal Oak", full_address: "2725 Nakota Rd, Royal Oak, MI"},
  {id: 309, street: "2120 E Eleven Mile Rd", city: "Royal Oak", full_address: "2120 E Eleven Mile Rd, Royal Oak, MI"},
  {id: 310, street: "4535 Fernlee Ave", city: "Royal Oak", full_address: "4535 Fernlee Ave, Royal Oak, MI"},
  {id: 311, street: "4818 Leafdale Blvd", city: "Royal Oak", full_address: "4818 Leafdale Blvd, Royal Oak, MI"},
  {id: 312, street: "104 W. 4th Street", city: "Royal Oak", full_address: "104 W. 4th Street, Royal Oak, MI"},
  {id: 313, street: "210 W. Sixth Street", city: "Royal Oak", full_address: "210 W. Sixth Street, Royal Oak, MI"},
  {id: 314, street: "28454 Woodward Ave.", city: "Royal Oak", full_address: "28454 Woodward Ave., Royal Oak, MI"},
  {id: 315, street: "1117 S Washington Ave", city: "Royal Oak", full_address: "1117 S Washington Ave, Royal Oak, MI"},
  {id: 316, street: "28966 Woodward Ave", city: "Royal Oak", full_address: "28966 Woodward Ave, Royal Oak, MI"},
  {id: 317, street: "504 S. Washington", city: "Royal Oak", full_address: "504 S. Washington, Royal Oak, MI"},
  {id: 318, street: "1201 North Main Street", city: "Royal Oak", full_address: "1201 North Main Street, Royal Oak, MI"},
  {id: 319, street: "306 S Washington 200", city: "Royal Oak", full_address: "306 S Washington 200, Royal Oak, MI"},
  {id: 320, street: "306 S Washington Ave 200", city: "Royal Oak", full_address: "306 S Washington Ave 200, Royal Oak, MI"},
  {id: 321, street: "910 Bloomcrest Dr", city: "Royal Oak", full_address: "910 Bloomcrest Dr, Royal Oak, MI"},
  {id: 322, street: "5453 Auburn Rd", city: "Shelby Township", full_address: "5453 Auburn Rd, Shelby Township, MI"},
  {id: 323, street: "13085 23 Mile Rd", city: "Shelby Township", full_address: "13085 23 Mile Rd, Shelby Township, MI"},
  {id: 324, street: "51715 Schoenherr Rd", city: "Shelby Township", full_address: "51715 Schoenherr Rd, Shelby Township, MI"},
  {id: 325, street: "5227 Auburn Rd", city: "Shelby Township", full_address: "5227 Auburn Rd, Shelby Township, MI"},
  {id: 326, street: "51301 Schoenherr Road", city: "Shelby Township", full_address: "51301 Schoenherr Road, Shelby Township, MI"},
  {id: 327, street: "48701 Hayes Rd", city: "Shelby Township", full_address: "48701 Hayes Rd, Shelby Township, MI"},
  {id: 328, street: "54441 Arrowhead Drive", city: "Shelby Township", full_address: "54441 Arrowhead Drive, Shelby Township, MI"},
  {id: 329, street: "56756 Mound Rd", city: "Shelby Township", full_address: "56756 Mound Rd, Shelby Township, MI"},
  {id: 330, street: "50303 Hayes Rd", city: "Shelby Township", full_address: "50303 Hayes Rd, Shelby Township, MI"},
  {id: 331, street: "53661 Dryden", city: "Shelby Township", full_address: "53661 Dryden, Shelby Township, MI"},
  {id: 332, street: "3334 Stonewyck Ct", city: "Shelby Township", full_address: "3334 Stonewyck Ct, Shelby Township, MI"},
  {id: 333, street: "48709 Hayes", city: "Shelby Township", full_address: "48709 Hayes, Shelby Township, MI"},
  {id: 334, street: "51032 Dequindre Rd", city: "Shelby Township", full_address: "51032 Dequindre Rd, Shelby Township, MI"},
  {id: 335, street: "51455 Oro Road", city: "Shelby Township", full_address: "51455 Oro Road, Shelby Township, MI"},
  {id: 336, street: "50707 Otter Creek Dr", city: "Shelby Township", full_address: "50707 Otter Creek Dr, Shelby Township, MI"},
  {id: 337, street: "3675 Auburn Road", city: "Shelby Township", full_address: "3675 Auburn Road, Shelby Township, MI"},
  {id: 338, street: "46511 Van Dyke", city: "Shelby Township", full_address: "46511 Van Dyke, Shelby Township, MI"},
  {id: 339, street: "14240 Industrial Center Dr", city: "Shelby Township", full_address: "14240 Industrial Center Dr, Shelby Township, MI"},
  {id: 340, street: "50215 Schoenherr", city: "Shelby Township", full_address: "50215 Schoenherr, Shelby Township, MI"},
  {id: 341, street: "23450 Telegraph Road", city: "Southfield", full_address: "23450 Telegraph Road, Southfield, MI"},
  {id: 342, street: "28411 Northwestern Hwy.", city: "Southfield", full_address: "28411 Northwestern Hwy., Southfield, MI"},
  {id: 343, street: "18161 13 Mile Rd", city: "Southfield", full_address: "18161 13 Mile Rd, Southfield, MI"},
  {id: 344, street: "27777 Franklin Rd. Ste.1410", city: "Southfield", full_address: "27777 Franklin Rd. Ste.1410, Southfield, MI"},
  {id: 345, street: "24309 pierce st", city: "Southfield", full_address: "24309 pierce st, Southfield, MI"},
  {id: 346, street: "21492 Sherman Ave", city: "Southfield", full_address: "21492 Sherman Ave, Southfield, MI"},
  {id: 347, street: "29119 Telegraph Rd", city: "Southfield", full_address: "29119 Telegraph Rd, Southfield, MI"},
  {id: 348, street: "27110 Harper Ave", city: "St Clair Shores", full_address: "27110 Harper Ave, St Clair Shores, MI"},
  {id: 349, street: "20609 Maxine St", city: "St Clair Shores", full_address: "20609 Maxine St, St Clair Shores, MI"},
  {id: 350, street: "22536 Shorewood Dr", city: "St Clair Shores", full_address: "22536 Shorewood Dr, St Clair Shores, MI"},
  {id: 351, street: "27938 Worthington St", city: "St Clair Shores", full_address: "27938 Worthington St, St Clair Shores, MI"},
  {id: 352, street: "27521 Jefferson", city: "St Clair Shores", full_address: "27521 Jefferson, St Clair Shores, MI"},
  {id: 353, street: "20116 California Street", city: "St Clair Shores", full_address: "20116 California Street, St Clair Shores, MI"},
  {id: 354, street: "22918 Industrial Dr E", city: "St Clair Shores", full_address: "22918 Industrial Dr E, St Clair Shores, MI"},
  {id: 355, street: "31325 Harper Ave", city: "St Clair Shores", full_address: "31325 Harper Ave, St Clair Shores, MI"},
  {id: 356, street: "22330 Greater Mack", city: "St Clair Shores", full_address: "22330 Greater Mack, St Clair Shores, MI"},
  {id: 357, street: "20315 E Nine Mile Rd", city: "St Clair Shores", full_address: "20315 E Nine Mile Rd, St Clair Shores, MI"},
  {id: 358, street: "22127 Ridgeway St", city: "St Clair Shores", full_address: "22127 Ridgeway St, St Clair Shores, MI"},
  {id: 359, street: "24420 Harper Avenue", city: "St Clair Shores", full_address: "24420 Harper Avenue, St Clair Shores, MI"},
  {id: 360, street: "32303 Harper", city: "St Clair Shores", full_address: "32303 Harper, St Clair Shores, MI"},
  {id: 361, street: "4130 Gardner", city: "Sterling Heights", full_address: "4130 Gardner, Sterling Heights, MI"},
  {id: 362, street: "7341 Triangle Dr", city: "Sterling Heights", full_address: "7341 Triangle Dr, Sterling Heights, MI"},
  {id: 363, street: "42700 Mound", city: "Sterling Heights", full_address: "42700 Mound, Sterling Heights, MI"},
  {id: 364, street: "34800 Mound Road", city: "Sterling Heights", full_address: "34800 Mound Road, Sterling Heights, MI"},
  {id: 365, street: "34832 Mound Rd", city: "Sterling Heights", full_address: "34832 Mound Rd, Sterling Heights, MI"},
  {id: 366, street: "37527 Streamview", city: "Sterling Heights", full_address: "37527 Streamview, Sterling Heights, MI"},
  {id: 367, street: "43540 Hoptree Dr", city: "Sterling Heights", full_address: "43540 Hoptree Dr, Sterling Heights, MI"},
  {id: 368, street: "42886 Mound Road", city: "Sterling Heights", full_address: "42886 Mound Road, Sterling Heights, MI"},
  {id: 369, street: "5540 Bridgewood Dr", city: "Sterling Heights", full_address: "5540 Bridgewood Dr, Sterling Heights, MI"},
  {id: 370, street: "34234 Van Dyke Ave.", city: "Sterling Heights", full_address: "34234 Van Dyke Ave., Sterling Heights, MI"},
  {id: 371, street: "7235 19 Mile Road", city: "Sterling Heights", full_address: "7235 19 Mile Road, Sterling Heights, MI"},
  {id: 372, street: "5504 Seabreeze Ln", city: "Sterling Heights", full_address: "5504 Seabreeze Ln, Sterling Heights, MI"},
  {id: 373, street: "8810 George Bunker", city: "Sterling Heights", full_address: "8810 George Bunker, Sterling Heights, MI"},
  {id: 374, street: "6506 Cotter", city: "Sterling Heights", full_address: "6506 Cotter, Sterling Heights, MI"},
  {id: 375, street: "42730 Mound Rd", city: "Sterling Heights", full_address: "42730 Mound Rd, Sterling Heights, MI"},
  {id: 376, street: "5585 Meadowview St", city: "Sterling Heights", full_address: "5585 Meadowview St, Sterling Heights, MI"},
  {id: 377, street: "6405 19 Mile Rd", city: "Sterling Heights", full_address: "6405 19 Mile Rd, Sterling Heights, MI"},
  {id: 378, street: "189 E Big Beaver 200", city: "Troy", full_address: "189 E Big Beaver 200, Troy, MI"},
  {id: 379, street: "1605 Heatherwood", city: "Troy", full_address: "1605 Heatherwood, Troy, MI"},
  {id: 380, street: "1333 Rochester Rd", city: "Troy", full_address: "1333 Rochester Rd, Troy, MI"},
  {id: 381, street: "6257 Walker Dr", city: "Troy", full_address: "6257 Walker Dr, Troy, MI"},
  {id: 382, street: "1210 E Maple Rd", city: "Troy", full_address: "1210 E Maple Rd, Troy, MI"},
  {id: 383, street: "5755 New King Dr", city: "Troy", full_address: "5755 New King Dr, Troy, MI"},
  {id: 384, street: "803 West Big Beaver Suite 350", city: "Troy", full_address: "803 West Big Beaver Suite 350, Troy, MI"},
  {id: 385, street: "164 Indusco Ct", city: "Troy", full_address: "164 Indusco Ct, Troy, MI"},
  {id: 386, street: "1715 Larchwood Drive", city: "Troy", full_address: "1715 Larchwood Drive, Troy, MI"},
  {id: 387, street: "1700 W. Big Beaver Road Suite 120", city: "Troy", full_address: "1700 W. Big Beaver Road Suite 120, Troy, MI"},
  {id: 388, street: "392 Oliver Dr", city: "Troy", full_address: "392 Oliver Dr, Troy, MI"},
  {id: 389, street: "2145 Crooks Rd", city: "Troy", full_address: "2145 Crooks Rd, Troy, MI"},
  {id: 390, street: "2325 Alger Drive", city: "Troy", full_address: "2325 Alger Drive, Troy, MI"},
  {id: 391, street: "1441 W Long Lake Rd, Suite 200", city: "Troy", full_address: "1441 W Long Lake Rd, Suite 200, Troy, MI"},
  {id: 392, street: "4881 Riverchase Dr", city: "Troy", full_address: "4881 Riverchase Dr, Troy, MI"},
  {id: 393, street: "286 Ottawa", city: "Troy", full_address: "286 Ottawa, Troy, MI"},
  {id: 394, street: "2025 w long lake rd", city: "Troy", full_address: "2025 w long lake rd, Troy, MI"},
  {id: 395, street: "2430 Rochester Rd", city: "Troy", full_address: "2430 Rochester Rd, Troy, MI"},
  {id: 396, street: "61 Lesdale Dr", city: "Troy", full_address: "61 Lesdale Dr, Troy, MI"},
  {id: 397, street: "920 e long lake Rd", city: "Troy", full_address: "920 e long lake Rd, Troy, MI"},
  {id: 398, street: "4897 Rochester Rd", city: "Troy", full_address: "4897 Rochester Rd, Troy, MI"},
  {id: 399, street: "6449 Basswood", city: "Troy", full_address: "6449 Basswood, Troy, MI"},
  {id: 400, street: "972 Rankin", city: "Troy", full_address: "972 Rankin, Troy, MI"},
  {id: 401, street: "920 E Long Lake Rd", city: "Troy", full_address: "920 E Long Lake Rd, Troy, MI"},
  {id: 402, street: "2595 Bellingham", city: "Troy", full_address: "2595 Bellingham, Troy, MI"},
  {id: 403, street: "5845 Hunters Gate", city: "Troy", full_address: "5845 Hunters Gate, Troy, MI"},
  {id: 404, street: "1280 E Big beaver Road", city: "Troy", full_address: "1280 E Big beaver Road, Troy, MI"},
  {id: 405, street: "2430 Rochester Ct", city: "Troy", full_address: "2430 Rochester Ct, Troy, MI"},
  {id: 406, street: "759 E Square Lake Rd", city: "Troy", full_address: "759 E Square Lake Rd, Troy, MI"},
  {id: 407, street: "5075 Livernois Rd", city: "Troy", full_address: "5075 Livernois Rd, Troy, MI"},
  {id: 408, street: "1360 Big Beaver", city: "Troy", full_address: "1360 Big Beaver, Troy, MI"},
  {id: 409, street: "3619 Carmel Dr", city: "Troy", full_address: "3619 Carmel Dr, Troy, MI"},
  {id: 410, street: "2899 Bretby Dr", city: "Troy", full_address: "2899 Bretby Dr, Troy, MI"},
  {id: 411, street: "533 E Wattles Rd", city: "Troy", full_address: "533 E Wattles Rd, Troy, MI"},
  {id: 412, street: "1409 Allen Ste-E", city: "Troy", full_address: "1409 Allen Ste-E, Troy, MI"},
  {id: 413, street: "2608 Devonwood", city: "Troy", full_address: "2608 Devonwood, Troy, MI"},
  {id: 414, street: "6991 Auburn Rd", city: "Utica", full_address: "6991 Auburn Rd, Utica, MI"},
  {id: 415, street: "4454 22 Mile Rd", city: "Utica", full_address: "4454 22 Mile Rd, Utica, MI"},
  {id: 416, street: "861 n pontiac trail", city: "Walled Lake", full_address: "861 n pontiac trail, Walled Lake, MI"},
  {id: 417, street: "26087 Schoenherr Rd", city: "Warren", full_address: "26087 Schoenherr Rd, Warren, MI"},
  {id: 418, street: "26820 Dequindre", city: "Warren", full_address: "26820 Dequindre, Warren, MI"},
  {id: 419, street: "11020 E 9 Mile Rd", city: "Warren", full_address: "11020 E 9 Mile Rd, Warren, MI"},
  {id: 420, street: "5650 E 10 Mile Rd", city: "Warren", full_address: "5650 E 10 Mile Rd, Warren, MI"},
  {id: 421, street: "27656 Roan Dr", city: "Warren", full_address: "27656 Roan Dr, Warren, MI"},
  {id: 422, street: "14230 E Eleven Mile Rd", city: "Warren", full_address: "14230 E Eleven Mile Rd, Warren, MI"},
  {id: 423, street: "22740 van Dyke ave", city: "Warren", full_address: "22740 van Dyke ave, Warren, MI"},
  {id: 424, street: "23957 Ryan", city: "Warren", full_address: "23957 Ryan, Warren, MI"},
  {id: 425, street: "8569 Old 13 Mile Rd", city: "Warren", full_address: "8569 Old 13 Mile Rd, Warren, MI"},
  {id: 426, street: "2397 Old Kent Rd W", city: "Warren", full_address: "2397 Old Kent Rd W, Warren, MI"},
  {id: 427, street: "11800 East Nine Mile Rd", city: "Warren", full_address: "11800 East Nine Mile Rd, Warren, MI"},
  {id: 428, street: "31605 Ryan", city: "Warren", full_address: "31605 Ryan, Warren, MI"},
  {id: 429, street: "30000 Ryan Rd", city: "Warren", full_address: "30000 Ryan Rd, Warren, MI"},
  {id: 430, street: "30500 van dyke", city: "Warren", full_address: "30500 van dyke, Warren, MI"},
  {id: 431, street: "27270 Gloede", city: "Warren", full_address: "27270 Gloede, Warren, MI"},
  {id: 432, street: "6863 Carriage Creek Dr", city: "Washington Township", full_address: "6863 Carriage Creek Dr, Washington Township, MI"},
  {id: 433, street: "57076 Curtis St", city: "Washington Township", full_address: "57076 Curtis St, Washington Township, MI"},
  {id: 434, street: "62746 Somerset", city: "Washington Township", full_address: "62746 Somerset, Washington Township, MI"},
  {id: 435, street: "8384 Christopher St", city: "Washington Township", full_address: "8384 Christopher St, Washington Township, MI"},
  {id: 436, street: "61748 Glenwood Trail", city: "Washington Township", full_address: "61748 Glenwood Trail, Washington Township, MI"},
  {id: 437, street: "67491 Campground Rd", city: "Washington Township", full_address: "67491 Campground Rd, Washington Township, MI"},
  {id: 438, street: "2596 Sylvan Shores Dr", city: "Waterford", full_address: "2596 Sylvan Shores Dr, Waterford, MI"},
  {id: 439, street: "2874 Riverside Dr", city: "Waterford", full_address: "2874 Riverside Dr, Waterford, MI"},
  {id: 440, street: "3911 Covert Road", city: "Waterford Township", full_address: "3911 Covert Road, Waterford Township, MI"},
  {id: 441, street: "2303 Dixie Hwy", city: "Waterford Township", full_address: "2303 Dixie Hwy, Waterford Township, MI"},
  {id: 442, street: "7134 Danbrooke", city: "West Bloomfield", full_address: "7134 Danbrooke, West Bloomfield, MI"},
  {id: 443, street: "6775 Daly Road", city: "West Bloomfield", full_address: "6775 Daly Road, West Bloomfield, MI"},
  {id: 444, street: "6836 Heirloom Circle", city: "West Bloomfield", full_address: "6836 Heirloom Circle, West Bloomfield, MI"},
  {id: 445, street: "4040 Echo Dr", city: "West Bloomfield", full_address: "4040 Echo Dr, West Bloomfield, MI"},
  {id: 446, street: "7419 middle belt rd", city: "West Bloomfield", full_address: "7419 middle belt rd, West Bloomfield, MI"},
  {id: 447, street: "4330 Bunker Ave", city: "West Bloomfield", full_address: "4330 Bunker Ave, West Bloomfield, MI"},
  {id: 448, street: "5758 Reveton Rd", city: "West Bloomfield", full_address: "5758 Reveton Rd, West Bloomfield, MI"},
  {id: 449, street: "6501 Alden Dr", city: "West Bloomfield", full_address: "6501 Alden Dr, West Bloomfield, MI"},
  {id: 450, street: "4301 orchard lake rd", city: "West Bloomfield", full_address: "4301 orchard lake rd, West Bloomfield, MI"},
  {id: 451, street: "5760 Shillingham", city: "West Bloomfield", full_address: "5760 Shillingham, West Bloomfield, MI"},
  {id: 452, street: "1374 Chanticlair Dr", city: "Wixom", full_address: "1374 Chanticlair Dr, Wixom, MI"},
  {id: 453, street: "47904 Anna Ct Ste-A", city: "Wixom", full_address: "47904 Anna Ct Ste-A, Wixom, MI"},
  {id: 454, street: "29945 Beck Road", city: "Wixom", full_address: "29945 Beck Road, Wixom, MI"},
  {id: 455, street: "101S Main St", city: "Yale", full_address: "101S Main St, Yale, MI"}
];

// Global state
let geocodeCache = {};
let currentRoute = [];
let map;
let markers = [];
let routeLine;
let startLocation = null;
let availableLocations = [];

// Initialize map
function initMap() {
  map = L.map('map').setView([44.3148, -85.6024], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
}

// Haversine distance calculation (in miles)
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 3959; // Earth radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Geocode address using Nominatim API
async function geocodeAddress(address) {
  if (geocodeCache[address]) {
    return geocodeCache[address];
  }
  
  await new Promise(resolve => setTimeout(resolve, 1000)); // Rate limiting
  
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&countrycodes=us&limit=1`
    );
    const data = await response.json();
    
    if (data && data.length > 0) {
      const result = {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon)
      };
      geocodeCache[address] = result;
      return result;
    }
    return null;
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
}

// Nearest neighbor algorithm
function nearestNeighbor(start, locations) {
  const route = [start];
  const unvisited = [...locations];
  let current = start;
  
  while (unvisited.length > 0) {
    let nearest = null;
    let minDist = Infinity;
    let nearestIdx = -1;
    
    for (let i = 0; i < unvisited.length; i++) {
      const dist = haversineDistance(
        current.lat, current.lon,
        unvisited[i].lat, unvisited[i].lon
      );
      if (dist < minDist) {
        minDist = dist;
        nearest = unvisited[i];
        nearestIdx = i;
      }
    }
    
    route.push(nearest);
    unvisited.splice(nearestIdx, 1);
    current = nearest;
  }
  
  return route;
}

// 2-opt optimization
function twoOptOptimization(route) {
  let improved = true;
  let bestRoute = [...route];
  
  while (improved) {
    improved = false;
    
    for (let i = 1; i < bestRoute.length - 2; i++) {
      for (let j = i + 1; j < bestRoute.length - 1; j++) {
        const before = 
          haversineDistance(
            bestRoute[i].lat, bestRoute[i].lon,
            bestRoute[i+1].lat, bestRoute[i+1].lon
          ) +
          haversineDistance(
            bestRoute[j].lat, bestRoute[j].lon,
            bestRoute[j+1].lat, bestRoute[j+1].lon
          );
        
        const after = 
          haversineDistance(
            bestRoute[i].lat, bestRoute[i].lon,
            bestRoute[j].lat, bestRoute[j].lon
          ) +
          haversineDistance(
            bestRoute[i+1].lat, bestRoute[i+1].lon,
            bestRoute[j+1].lat, bestRoute[j+1].lon
          );
        
        if (after < before) {
          const segment = bestRoute.slice(i+1, j+1).reverse();
          bestRoute = [
            ...bestRoute.slice(0, i+1),
            ...segment,
            ...bestRoute.slice(j+1)
          ];
          improved = true;
        }
      }
    }
  }
  
  return bestRoute;
}

// Calculate total route distance
function calculateTotalDistance(route) {
  let total = 0;
  for (let i = 0; i < route.length - 1; i++) {
    total += haversineDistance(
      route[i].lat, route[i].lon,
      route[i+1].lat, route[i+1].lon
    );
  }
  return total;
}

// Update map with route
function updateMap() {
  // Clear existing markers and line
  markers.forEach(m => map.removeLayer(m));
  markers = [];
  if (routeLine) {
    map.removeLayer(routeLine);
  }
  
  if (currentRoute.length === 0) return;
  
  // Add markers
  currentRoute.forEach((location, idx) => {
    let icon;
    if (idx === 0) {
      icon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background: #22C55E; color: white; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">S</div>`,
        iconSize: [36, 36]
      });
    } else if (idx === currentRoute.length - 1) {
      icon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background: #C0152F; color: white; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">E</div>`,
        iconSize: [36, 36]
      });
    } else {
      icon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background: #FF6600; color: white; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">${idx}</div>`,
        iconSize: [36, 36]
      });
    }
    
    const marker = L.marker([location.lat, location.lon], { icon })
      .addTo(map)
      .bindPopup(`<b>${location.address}</b><br>Stop ${idx === 0 ? 'Start' : idx}`);
    markers.push(marker);
  });
  
  // Add route line
  const latlngs = currentRoute.map(loc => [loc.lat, loc.lon]);
  routeLine = L.polyline(latlngs, {
    color: '#FF6600',
    weight: 4,
    opacity: 0.8
  }).addTo(map);
  
  // Fit bounds
  map.fitBounds(routeLine.getBounds(), { padding: [50, 50] });
}

// Display route list
function displayRouteList() {
  const routeList = document.getElementById('routeList');
  const routeSection = document.getElementById('routeSection');
  const emptyState = document.getElementById('emptyState');
  const addLocationSection = document.getElementById('addLocationSection');
  
  if (currentRoute.length === 0) {
    routeSection.classList.add('hidden');
    emptyState.classList.remove('hidden');
    addLocationSection.classList.add('hidden');
    return;
  }
  
  routeSection.classList.remove('hidden');
  emptyState.classList.add('hidden');
  addLocationSection.classList.remove('hidden');
  
  routeList.innerHTML = '';
  
  currentRoute.forEach((location, idx) => {
    const li = document.createElement('li');
    li.className = 'route-item';
    if (idx === 0) li.classList.add('start');
    if (idx === currentRoute.length - 1) li.classList.add('end');
    
    const distance = idx > 0 ? 
      haversineDistance(
        currentRoute[idx-1].lat, currentRoute[idx-1].lon,
        location.lat, location.lon
      ).toFixed(1) : '0.0';
    
    li.innerHTML = `
      <div class="route-number">${idx === 0 ? 'S' : (idx === currentRoute.length - 1 && currentRoute.length > 1 ? 'E' : idx)}</div>
      <div class="route-details">
        <div class="route-address">${location.address}</div>
        <div class="route-distance">${idx > 0 ? `${distance} mi from previous stop` : 'Starting point'}</div>
      </div>
      ${idx > 0 && idx < currentRoute.length - 1 ? `<button class="btn btn-remove" onclick="removeStop(${idx})">✕</button>` : ''}
    `;
    
    routeList.appendChild(li);
  });
  
  // Update summary
  const totalDistance = calculateTotalDistance(currentRoute);
  const estimatedTime = totalDistance / 35; // 35 mph average
  const hours = Math.floor(estimatedTime);
  const minutes = Math.round((estimatedTime - hours) * 60);
  
  document.getElementById('totalStops').textContent = currentRoute.length - 1;
  document.getElementById('totalDistance').textContent = `${totalDistance.toFixed(1)} mi`;
  document.getElementById('estimatedTime').textContent = `${hours}h ${minutes}m`;
  
  // Calculate efficiency (straight line distance vs actual route)
  if (currentRoute.length > 1) {
    const straightLine = haversineDistance(
      currentRoute[0].lat, currentRoute[0].lon,
      currentRoute[currentRoute.length-1].lat, currentRoute[currentRoute.length-1].lon
    );
    const efficiency = ((straightLine / totalDistance) * 100).toFixed(0);
    document.getElementById('efficiency').textContent = `${efficiency}%`;
  } else {
    document.getElementById('efficiency').textContent = '-';
  }
}

// Generate route with progress tracking
async function generateRoute() {
  const startLocationInput = document.getElementById('startLocation').value.trim();
  const numStops = parseInt(document.getElementById('numStops').value);
  const returnToStart = document.getElementById('returnToStart').checked;
  
  if (!startLocationInput) {
    showToast('Please enter a starting location', 'error');
    return;
  }
  
  if (numStops < 1 || numStops > 20) {
    showToast('Number of stops must be between 1 and 20', 'error');
    return;
  }
  
  showLoading('Generating Optimal Route');
  logActivity('Starting route optimization...', 'info');
  
  try {
    // Step 1: Validate Input
    updateStep(1, 'active');
    logActivity(`Validating starting location: ${startLocationInput}`, 'in-progress');
    await new Promise(resolve => setTimeout(resolve, 200));
    
    if (!startLocationInput.includes(',')) {
      logActivity('Warning: Address may need city and state for better accuracy', 'info');
    }
    
    updateStep(1, 'completed', '✓ Input validated');
    logActivity('✓ Input validated successfully', 'success');
    
    // Step 2: Geocode starting location ONLY
    updateStep(2, 'active');
    logActivity(`Geocoding starting location: ${startLocationInput}`, 'in-progress');
    
    const startCoords = await geocodeAddress(startLocationInput);
    if (!startCoords) {
      updateStep(2, 'error', '✕ Geocoding failed');
      logActivity('✕ Could not geocode starting location', 'error');
      hideLoading();
      showToast('Could not geocode starting location', 'error');
      return;
    }
    
    startLocation = {
      address: startLocationInput,
      lat: startCoords.lat,
      lon: startCoords.lon
    };
    
    updateStep(2, 'completed', `(${startCoords.lat.toFixed(4)}, ${startCoords.lon.toFixed(4)})`);
    logActivity(`✓ Starting location geocoded: (${startCoords.lat.toFixed(4)}, ${startCoords.lon.toFixed(4)})`, 'success');
    
    // Step 3: Load preloaded location database (INSTANT - already geocoded!)
    updateStep(3, 'active');
    logActivity('Loading pre-geocoded Michigan location database...', 'in-progress');
    await new Promise(resolve => setTimeout(resolve, 100));
    
    updateStep(3, 'completed', `${michiganAddresses.length} addresses with coordinates`);
    logActivity(`✓ Loaded ${michiganAddresses.length} Michigan addresses from embedded database`, 'success');
    logActivity('All addresses already have latitude/longitude coordinates!', 'info');
    
    // Step 4: Calculate distances (NO GEOCODING NEEDED - data already has coordinates!)
    updateStep(4, 'active');
    logActivity(`Calculating distances to preloaded locations...`, 'in-progress');
    
    const locationsWithDistance = [];
    
    for (const addr of michiganAddresses) {
      // Use pre-geocoded coordinates directly!
      if (addr.lat && addr.lon) {
        const dist = haversineDistance(
          startLocation.lat, startLocation.lon,
          addr.lat, addr.lon
        );
        locationsWithDistance.push({
          ...addr,
          address: addr.full_address,
          distanceFromStart: dist
        });
      }
    }
    
    updateStep(4, 'completed', `${locationsWithDistance.length} distances calculated`);
    logActivity(`✓ Calculated distances to ${locationsWithDistance.length} locations instantly`, 'success');
    
    // Step 5: Find closest locations
    updateStep(5, 'active');
    logActivity(`Finding ${numStops} closest locations to start...`, 'in-progress');
    await new Promise(resolve => setTimeout(resolve, 200));
    
    locationsWithDistance.sort((a, b) => a.distanceFromStart - b.distanceFromStart);
    const closestLocations = locationsWithDistance.slice(0, numStops);
    
    updateStep(5, 'completed', `${closestLocations.length} locations identified`);
    logActivity(`✓ Identified ${closestLocations.length} closest locations`, 'success');
    
    // Step 6: Build initial route
    updateStep(6, 'active');
    logActivity('Building initial route using nearest neighbor algorithm...', 'in-progress');
    
    let route = nearestNeighbor(startLocation, closestLocations);
    const initialDistance = calculateTotalDistance(route);
    
    updateStep(6, 'completed', `Initial distance: ${initialDistance.toFixed(1)} mi`);
    logActivity(`✓ Initial route distance: ${initialDistance.toFixed(1)} miles`, 'success');
    
    // Step 7: Optimize route with 2-opt
    updateStep(7, 'active');
    logActivity('Starting 2-Opt optimization algorithm...', 'in-progress');
    
    const routeBefore = [...route];
    route = twoOptOptimization(route);
    const optimizedDistance = calculateTotalDistance(route);
    const improvement = initialDistance - optimizedDistance;
    const improvementPercent = ((improvement / initialDistance) * 100).toFixed(1);
    
    updateStep(7, 'completed', `Improved by ${improvement.toFixed(1)} mi (${improvementPercent}%)`);
    logActivity(`✓ Optimization complete: Route improved by ${improvement.toFixed(1)} miles (${improvementPercent}%)`, 'success');
    logActivity(`Final route distance: ${optimizedDistance.toFixed(1)} miles`, 'info');
    
    // Add return to start if checked
    if (returnToStart) {
      logActivity('Adding return to starting location...', 'in-progress');
      route.push(startLocation);
      route = twoOptOptimization(route);
      logActivity('✓ Return route optimized', 'success');
    }
    
    currentRoute = route;
    availableLocations = locationsWithDistance.filter(
      loc => !closestLocations.some(cl => cl.id === loc.id)
    );
    
    // Step 8: Render map
    updateStep(8, 'active');
    logActivity('Rendering interactive map...', 'in-progress');
    await new Promise(resolve => setTimeout(resolve, 400));
    
    updateMap();
    displayRouteList();
    populateLocationSearch();
    
    updateStep(8, 'completed', '✓ Map rendered');
    logActivity('✓ Interactive map rendered with route visualization', 'success');
    
    // Step 9: Finalize
    updateStep(9, 'active');
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const totalTime = Math.floor((Date.now() - progressState.startTime) / 1000);
    updateStep(9, 'completed', '✓ Complete!');
    logActivity(`✓ Route generation complete in ${totalTime} seconds!`, 'success');
    logActivity(`Final stats: ${route.length} stops, ${optimizedDistance.toFixed(1)} miles`, 'info');
    logActivity(`⚡ Pre-geocoded database saved ${michiganAddresses.length} API calls!`, 'success');
    
    // Show view route button
    const viewBtn = document.getElementById('viewRouteBtn');
    if (viewBtn) {
      viewBtn.style.display = 'inline-flex';
    }
    
    // Auto-close after a moment
    setTimeout(() => {
      if (document.getElementById('loadingOverlay')) {
        hideLoading();
        showToast('Route generated successfully!', 'success');
      }
    }, 2000);
    
  } catch (error) {
    const currentStep = progressState.steps.find(s => s.status === 'active');
    if (currentStep) {
      updateStep(currentStep.id, 'error', '✕ Error occurred');
    }
    logActivity(`✕ Error: ${error.message}`, 'error');
    console.error('Error generating route:', error);
    showToast('Error generating route', 'error');
    
    setTimeout(() => {
      hideLoading();
    }, 3000);
  }
}

// Remove stop from route
window.removeStop = function(index) {
  if (index <= 0 || index >= currentRoute.length) return;
  
  const removed = currentRoute.splice(index, 1)[0];
  availableLocations.push(removed);
  availableLocations.sort((a, b) => a.full_address.localeCompare(b.full_address));
  
  // Re-optimize
  if (currentRoute.length > 2) {
    currentRoute = twoOptOptimization(currentRoute);
  }
  
  updateMap();
  displayRouteList();
  populateLocationSearch();
  showToast('Stop removed and route re-optimized', 'success');
};

// Populate location search dropdown
function populateLocationSearch() {
  const searchInput = document.getElementById('locationSearch');
  searchInput.setAttribute('list', 'locationOptions');
  
  let datalist = document.getElementById('locationOptions');
  if (!datalist) {
    datalist = document.createElement('datalist');
    datalist.id = 'locationOptions';
    document.body.appendChild(datalist);
  }
  
  datalist.innerHTML = '';
  availableLocations.forEach(loc => {
    const option = document.createElement('option');
    option.value = loc.full_address;
    datalist.appendChild(option);
  });
}

// Add location to route
async function addLocation() {
  const searchValue = document.getElementById('locationSearch').value.trim();
  if (!searchValue) {
    showToast('Please select a location', 'error');
    return;
  }
  
  const location = availableLocations.find(loc => loc.full_address === searchValue);
  if (!location) {
    showToast('Location not found', 'error');
    return;
  }
  
  // Insert before the last stop (if return to start) or at the end
  const insertIndex = currentRoute.length - 1;
  currentRoute.splice(insertIndex, 0, location);
  
  // Remove from available
  availableLocations = availableLocations.filter(loc => loc.id !== location.id);
  
  // Re-optimize
  currentRoute = twoOptOptimization(currentRoute);
  
  updateMap();
  displayRouteList();
  populateLocationSearch();
  document.getElementById('locationSearch').value = '';
  
  showToast('Location added and route re-optimized', 'success');
}

// Export to CSV
function exportToCsv() {
  if (currentRoute.length === 0) return;
  
  let csv = 'Stop Number,Address,Latitude,Longitude,Distance from Previous (mi)\n';
  
  currentRoute.forEach((loc, idx) => {
    const distance = idx > 0 ? 
      haversineDistance(
        currentRoute[idx-1].lat, currentRoute[idx-1].lon,
        loc.lat, loc.lon
      ).toFixed(2) : '0';
    
    csv += `${idx},"${loc.address}",${loc.lat},${loc.lon},${distance}\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'route.csv';
  a.click();
  window.URL.revokeObjectURL(url);
  
  showToast('Route exported to CSV', 'success');
}

// Copy addresses to clipboard
function copyAddresses() {
  if (currentRoute.length === 0) return;
  
  const addresses = currentRoute.map((loc, idx) => `${idx}. ${loc.address}`).join('\n');
  
  navigator.clipboard.writeText(addresses).then(() => {
    showToast('Addresses copied to clipboard', 'success');
  }).catch(() => {
    showToast('Failed to copy addresses', 'error');
  });
}

// Progress tracking state
let progressState = {
  steps: [
    { id: 1, name: 'Validating Input', status: 'pending', description: '' },
    { id: 2, name: 'Geocoding Starting Location', status: 'pending', description: '' },
    { id: 3, name: 'Loading Location Database', status: 'pending', description: '' },
    { id: 4, name: 'Calculating Distances', status: 'pending', description: '' },
    { id: 5, name: 'Finding Closest Locations', status: 'pending', description: '' },
    { id: 6, name: 'Building Initial Route', status: 'pending', description: '' },
    { id: 7, name: 'Optimizing Route (2-Opt)', status: 'pending', description: '' },
    { id: 8, name: 'Rendering Map', status: 'pending', description: '' },
    { id: 9, name: 'Finalizing Route', status: 'pending', description: '' }
  ],
  percentage: 0,
  startTime: null,
  logs: []
};

// Log activity message
function logActivity(message, type = 'info') {
  const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
  progressState.logs.push({ timestamp, message, type });
  
  const logContainer = document.querySelector('.activity-log');
  if (logContainer) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `
      <span class="log-timestamp">[${timestamp}]</span>
      <span class="log-message ${type}">${message}</span>
    `;
    logContainer.appendChild(entry);
    logContainer.scrollTop = logContainer.scrollHeight;
  }
}

// Update step status
function updateStep(stepId, status, description = '') {
  const step = progressState.steps.find(s => s.id === stepId);
  if (step) {
    step.status = status;
    step.description = description;
    renderSteps();
    
    // Update percentage
    const completedSteps = progressState.steps.filter(s => s.status === 'completed').length;
    progressState.percentage = Math.round((completedSteps / progressState.steps.length) * 100);
    updateProgress();
  }
}

// Render steps list
function renderSteps() {
  const stepsContainer = document.querySelector('.loading-steps');
  if (!stepsContainer) return;
  
  stepsContainer.innerHTML = progressState.steps.map(step => {
    let icon = '';
    if (step.status === 'pending') {
      icon = '<div class="step-icon pending"></div>';
    } else if (step.status === 'active') {
      icon = '<div class="step-icon active"><div class="spinner-small"></div></div>';
    } else if (step.status === 'completed') {
      icon = '<div class="step-icon completed checkmark-animation">✓</div>';
    } else if (step.status === 'error') {
      icon = '<div class="step-icon error">✕</div>';
    }
    
    return `
      <div class="step-item ${step.status}">
        ${icon}
        <div class="step-details">
          <div class="step-name">${step.name}</div>
          ${step.description ? `<div class="step-description">${step.description}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// Update progress bar and stats
function updateProgress() {
  const progressBar = document.querySelector('.progress-bar');
  const progressPercentage = document.querySelector('.progress-percentage');
  const progressTime = document.querySelector('.progress-time');
  
  if (progressBar) {
    progressBar.style.width = `${progressState.percentage}%`;
  }
  
  if (progressPercentage) {
    progressPercentage.textContent = `${progressState.percentage}%`;
  }
  
  if (progressTime && progressState.startTime) {
    const elapsed = Math.floor((Date.now() - progressState.startTime) / 1000);
    progressTime.textContent = `Elapsed: ${elapsed}s`;
  }
}

// Show enhanced loading overlay
function showLoading(title) {
  progressState.startTime = Date.now();
  progressState.logs = [];
  progressState.percentage = 0;
  progressState.steps.forEach(step => {
    step.status = 'pending';
    step.description = '';
  });
  
  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  overlay.id = 'loadingOverlay';
  overlay.innerHTML = `
    <div class="loading-content">
      <div class="loading-header">
        <h2>Generating Optimal Route</h2>
        <div class="loading-subtitle">
          <span>🚗</span>
          <span>Calculating best route through Michigan...</span>
        </div>
      </div>
      
      <div class="loading-body">
        <div class="loading-steps"></div>
        
        <div class="loading-main">
          <div class="progress-section">
            <div class="progress-header">
              <div class="progress-percentage">0%</div>
              <div class="progress-time">Elapsed: 0s</div>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar pulsing" style="width: 0%"></div>
            </div>
          </div>
          
          <div class="activity-log-section">
            <div class="activity-header">
              <h3>Activity Log</h3>
              <div class="activity-controls">
                <button class="btn-icon" onclick="copyLog()">📋 Copy</button>
              </div>
            </div>
            <div class="activity-log"></div>
          </div>
        </div>
      </div>
      
      <div class="loading-footer">
        <button class="btn btn-secondary" onclick="cancelRoute()">Cancel</button>
        <button class="btn btn-primary" id="viewRouteBtn" style="display: none;" onclick="hideLoading()">View Route</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(overlay);
  renderSteps();
  
  // Start elapsed time counter
  const timeInterval = setInterval(() => {
    if (document.getElementById('loadingOverlay')) {
      updateProgress();
    } else {
      clearInterval(timeInterval);
    }
  }, 1000);
}

// Hide loading overlay
function hideLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) {
    overlay.remove();
  }
}

// Copy log to clipboard
window.copyLog = function() {
  const logText = progressState.logs.map(log => 
    `[${log.timestamp}] ${log.message}`
  ).join('\n');
  
  navigator.clipboard.writeText(logText).then(() => {
    showToast('Log copied to clipboard', 'success');
  }).catch(() => {
    showToast('Failed to copy log', 'error');
  });
};

// Cancel route generation
window.cancelRoute = function() {
  hideLoading();
  showToast('Route generation cancelled', 'error');
};

// Show toast notification
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : '✕'}</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  // Ensure all coordinates are filled
  fillMissingCoordinates();
  
  initMap();
  
  document.getElementById('generateBtn').addEventListener('click', generateRoute);
  document.getElementById('addLocationBtn').addEventListener('click', addLocation);
  document.getElementById('exportCsvBtn').addEventListener('click', exportToCsv);
  document.getElementById('copyAddressesBtn').addEventListener('click', copyAddresses);
  
  // Enter key support
  document.getElementById('startLocation').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') generateRoute();
  });
  
  document.getElementById('numStops').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') generateRoute();
  });
});