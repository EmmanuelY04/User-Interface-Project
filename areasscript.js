const boroughsByPostcode = {
            'RM8': 'Barking and Dagenham', 'RM9': 'Barking and Dagenham', 'RM10': 'Barking and Dagenham',
            'EN5': 'Barnet', 'N2': 'Barnet', 'N3': 'Barnet', 'N11': 'Barnet', 'N12': 'Barnet', 'N14': 'Barnet', 'N20': 'Barnet', 'NW2': 'Barnet', 'NW4': 'Barnet', 'NW7': 'Barnet', 'NW9': 'Barnet', 'NW11': 'Barnet', 'HA8': 'Barnet',
            'DA5': 'Bexley', 'DA6': 'Bexley', 'DA7': 'Bexley', 'DA8': 'Bexley', 'DA14': 'Bexley', 'DA15': 'Bexley', 'DA16': 'Bexley', 'DA17': 'Bexley',
            'NW2': 'Brent', 'NW6': 'Brent', 'NW9': 'Brent', 'NW10': 'Brent', 'HA0': 'Brent', 'HA1': 'Brent', 'HA3': 'Brent', 'HA9': 'Brent',
            'BR1': 'Bromley', 'BR2': 'Bromley', 'BR3': 'Bromley', 'BR4': 'Bromley', 'BR5': 'Bromley', 'BR6': 'Bromley', 'BR7': 'Bromley', 'SE20': 'Bromley',
            'NW1': 'Camden', 'NW3': 'Camden', 'NW5': 'Camden', 'NW6': 'Camden', 'NW8': 'Camden', 'W1': 'Camden', 'WC1': 'Camden', 'WC2': 'Camden',
            'CR0': 'Croydon', 'CR2': 'Croydon', 'CR4': 'Croydon', 'CR5': 'Croydon', 'CR7': 'Croydon', 'CR8': 'Croydon', 'CR9': 'Croydon',
            'W3': 'Ealing', 'W5': 'Ealing', 'W7': 'Ealing', 'W13': 'Ealing', 'NW10': 'Ealing', 'UB1': 'Ealing', 'UB2': 'Ealing', 'UB5': 'Ealing', 'UB6': 'Ealing',
            'EN1': 'Enfield', 'EN2': 'Enfield', 'EN3': 'Enfield', 'N9': 'Enfield', 'N11': 'Enfield', 'N13': 'Enfield', 'N14': 'Enfield', 'N18': 'Enfield', 'N21': 'Enfield',
            'SE3': 'Greenwich', 'SE7': 'Greenwich', 'SE8': 'Greenwich', 'SE9': 'Greenwich', 'SE10': 'Greenwich', 'SE18': 'Greenwich', 'SE28': 'Greenwich',
            'E2': 'Hackney', 'E5': 'Hackney', 'E8': 'Hackney', 'E9': 'Hackney', 'N1': 'Hackney', 'N4': 'Hackney', 'N16': 'Hackney',
            'W6': 'Hammersmith and Fulham', 'W12': 'Hammersmith and Fulham', 'W14': 'Hammersmith and Fulham', 'SW6': 'Hammersmith and Fulham',
            'N4': 'Haringey', 'N6': 'Haringey', 'N8': 'Haringey', 'N10': 'Haringey', 'N11': 'Haringey', 'N15': 'Haringey', 'N17': 'Haringey', 'N22': 'Haringey',
            'HA1': 'Harrow', 'HA2': 'Harrow', 'HA3': 'Harrow', 'HA5': 'Harrow', 'HA7': 'Harrow', 'HA8': 'Harrow',
            'RM1': 'Havering', 'RM2': 'Havering', 'RM3': 'Havering', 'RM4': 'Havering', 'RM5': 'Havering', 'RM7': 'Havering', 'RM11': 'Havering', 'RM12': 'Havering',
            'UB3': 'Hillingdon', 'UB4': 'Hillingdon', 'UB7': 'Hillingdon', 'UB8': 'Hillingdon', 'UB10': 'Hillingdon', 'HA4': 'Hillingdon', 'HA5': 'Hillingdon', 'HA6': 'Hillingdon',
            'TW3': 'Hounslow', 'TW4': 'Hounslow', 'TW5': 'Hounslow', 'TW7': 'Hounslow', 'TW8': 'Hounslow', 'W3': 'Hounslow', 'W4': 'Hounslow',
            'N1': 'Islington', 'N4': 'Islington', 'N5': 'Islington', 'N6': 'Islington', 'N7': 'Islington', 'N19': 'Islington', 'EC1': 'Islington', 'WC1': 'Islington',
            'W8': 'Kensington and Chelsea', 'W10': 'Kensington and Chelsea', 'W11': 'Kensington and Chelsea', 'W14': 'Kensington and Chelsea', 'SW3': 'Kensington and Chelsea', 'SW5': 'Kensington and Chelsea', 'SW7': 'Kensington and Chelsea', 'SW10': 'Kensington and Chelsea',
            'KT1': 'Kingston upon Thames', 'KT2': 'Kingston upon Thames',
            'SE1': 'Lambeth', 'SE5': 'Lambeth', 'SE11': 'Lambeth', 'SE17': 'Lambeth', 'SE19': 'Lambeth', 'SE21': 'Lambeth', 'SE24': 'Lambeth', 'SE27': 'Lambeth', 'SW2': 'Lambeth', 'SW4': 'Lambeth', 'SW8': 'Lambeth', 'SW9': 'Lambeth', 'SW12': 'Lambeth', 'SW16': 'Lambeth',
            'SE3': 'Lewisham', 'SE4': 'Lewisham', 'SE6': 'Lewisham', 'SE8': 'Lewisham', 'SE12': 'Lewisham', 'SE13': 'Lewisham', 'SE14': 'Lewisham', 'SE23': 'Lewisham',
            'SW19': 'Merton', 'SW20': 'Merton', 'CR4': 'Merton',
            'E6': 'Newham', 'E7': 'Newham', 'E12': 'Newham', 'E13': 'Newham', 'E15': 'Newham', 'E16': 'Newham',
            'IG1': 'Redbridge', 'IG2': 'Redbridge', 'IG3': 'Redbridge', 'IG4': 'Redbridge', 'IG5': 'Redbridge', 'IG6': 'Redbridge', 'E11': 'Redbridge', 'E12': 'Redbridge', 'E18': 'Redbridge',
            'TW1': 'Richmond upon Thames', 'TW2': 'Richmond upon Thames', 'TW9': 'Richmond upon Thames', 'TW10': 'Richmond upon Thames', 'TW11': 'Richmond upon Thames', 'SW13': 'Richmond upon Thames', 'SW14': 'Richmond upon Thames', 'SW15': 'Richmond upon Thames',
            'SE1': 'Southwark', 'SE5': 'Southwark', 'SE11': 'Southwark', 'SE15': 'Southwark', 'SE16': 'Southwark', 'SE17': 'Southwark', 'SE21': 'Southwark', 'SE22': 'Southwark', 'SE24': 'Southwark',
            'SM1': 'Sutton', 'SM2': 'Sutton', 'SM3': 'Sutton', 'SM5': 'Sutton',
            'E1': 'Tower Hamlets', 'E2': 'Tower Hamlets', 'E3': 'Tower Hamlets', 'E14': 'Tower Hamlets', 'E1W': 'Tower Hamlets',
            'E4': 'Waltham Forest', 'E10': 'Waltham Forest', 'E11': 'Waltham Forest', 'E17': 'Waltham Forest', 'E18': 'Waltham Forest',
            'SW8': 'Wandsworth', 'SW11': 'Wandsworth', 'SW12': 'Wandsworth', 'SW15': 'Wandsworth', 'SW17': 'Wandsworth', 'SW18': 'Wandsworth', 'SW19': 'Wandsworth',
            'W1': 'Westminster', 'W2': 'Westminster', 'W9': 'Westminster', 'WC2': 'Westminster', 'SW1': 'Westminster'
        };


function validateInput() {
    var input = document.getElementById("postcodeInput").value;
    input = input.replace(/[^a-zA-Z0-9]/g, ''); // This remove non-alphanumeric characters
    document.getElementById("postcodeInput").value = input.toUpperCase(); // This convert to uppercase
}

function findBorough() {
    var postcode = document.getElementById("postcodeInput").value.toUpperCase(); // This ensure input is uppercase
    var borough = boroughsByPostcode[postcode];
    if (borough) {
        document.getElementById("boroughResult").textContent = "Your borough: " + borough;
    } else {
        document.getElementById("boroughResult").textContent = "No matching borough found. Please ensure you entered the first part of your postcode correctly.";
    }
}
