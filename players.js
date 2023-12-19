// players.js
const players = [
    {
        "player_id":"CD_I1004592",
        "name":"Tim English",
        "dob":"1997-08-10",
        "team":"WB",
        "fantasy_average":118.7,
        "career_avg":88.6535,
        "rank":3,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1023261",
        "name":"Nick Daicos",
        "dob":"2003-01-03",
        "team":"CW",
        "fantasy_average":108.8,
        "career_avg":97.2381,
        "rank":0,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I297373",
        "name":"Marcus Bontempelli",
        "dob":"1995-11-24",
        "team":"WB",
        "fantasy_average":117.0,
        "career_avg":97.9804,
        "rank":11,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1013128",
        "name":"Errol Gulden",
        "dob":"2002-07-18",
        "team":"SY",
        "fantasy_average":112.5,
        "career_avg":91.0968,
        "rank":1,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I996701",
        "name":"Clayton Oliver",
        "dob":"1997-07-22",
        "team":"ME",
        "fantasy_average":113.8,
        "career_avg":102.9539,
        "rank":8,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1009528",
        "name":"Tom Green",
        "dob":"2001-01-23",
        "team":"GWS",
        "fantasy_average":110.6,
        "career_avg":86.0476,
        "rank":2,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I992016",
        "name":"Zach Merrett",
        "dob":"1995-10-03",
        "team":"ES",
        "fantasy_average":112.9,
        "career_avg":103.5297,
        "rank":13,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I293222",
        "name":"Rory Laird",
        "dob":"1993-12-29",
        "team":"AD",
        "fantasy_average":109.2,
        "career_avg":96.2212,
        "rank":21,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1009420",
        "name":"Caleb Serong",
        "dob":"2001-02-09",
        "team":"FR",
        "fantasy_average":108.1,
        "career_avg":88.1667,
        "rank":4,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I992468",
        "name":"Rowan Marshall",
        "dob":"1995-11-24",
        "team":"SK",
        "fantasy_average":115.8,
        "career_avg":92.9907,
        "rank":12,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1002232",
        "name":"Andrew Brayshaw",
        "dob":"1999-11-08",
        "team":"FR",
        "fantasy_average":110.3,
        "career_avg":91.3802,
        "rank":5,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I992242",
        "name":"Jordan Dawson",
        "dob":"1997-04-09",
        "team":"AD",
        "fantasy_average":113.4,
        "career_avg":90.8426,
        "rank":10,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1001299",
        "name":"Connor Rozee",
        "dob":"2000-01-22",
        "team":"PA",
        "fantasy_average":105.9,
        "career_avg":80.14,
        "rank":6,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1006121",
        "name":"Zak Butters",
        "dob":"2000-09-08",
        "team":"PA",
        "fantasy_average":99.5,
        "career_avg":78.023,
        "rank":7,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I998172",
        "name":"Tim Taranto",
        "dob":"1998-01-28",
        "team":"RI",
        "fantasy_average":112.4,
        "career_avg":97.9134,
        "rank":15,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1006094",
        "name":"Sam Walsh",
        "dob":"2000-07-02",
        "team":"CA",
        "fantasy_average":94.6,
        "career_avg":96.1146,
        "rank":9,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I295518",
        "name":"Sam Docherty",
        "dob":"1993-10-17",
        "team":"CA",
        "fantasy_average":104.5,
        "career_avg":93.2744,
        "rank":26,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I993817",
        "name":"Darcy Parish",
        "dob":"1997-07-25",
        "team":"ES",
        "fantasy_average":106.9,
        "career_avg":85.9184,
        "rank":19,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I993834",
        "name":"Josh Dunkley",
        "dob":"1997-01-09",
        "team":"BL",
        "fantasy_average":104.4,
        "career_avg":96.8254,
        "rank":20,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1023518",
        "name":"Harry Sheezel",
        "dob":"2004-10-13",
        "team":"NM",
        "fantasy_average":97.3,
        "career_avg":97.3478,
        "rank":14,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I298210",
        "name":"Christian Petracca",
        "dob":"1996-01-04",
        "team":"ME",
        "fantasy_average":106.0,
        "career_avg":88.4518,
        "rank":16,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I294307",
        "name":"Brad Crouch",
        "dob":"1994-01-14",
        "team":"SK",
        "fantasy_average":103.3,
        "career_avg":97.7468,
        "rank":22,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I994389",
        "name":"Jack Sinclair",
        "dob":"1995-02-12",
        "team":"SK",
        "fantasy_average":102.2,
        "career_avg":77.1481,
        "rank":17,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I297566",
        "name":"James Sicily",
        "dob":"1995-01-06",
        "team":"HW",
        "fantasy_average":104.5,
        "career_avg":83.0992,
        "rank":18,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I291790",
        "name":"Adam Treloar",
        "dob":"1993-03-09",
        "team":"WB",
        "fantasy_average":105.3,
        "career_avg":102.565,
        "rank":62,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I291969",
        "name":"Stephen Coniglio",
        "dob":"1993-12-15",
        "team":"GWS",
        "fantasy_average":101.6,
        "career_avg":94.2402,
        "rank":27,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I290799",
        "name":"Tom Liberatore",
        "dob":"1992-05-16",
        "team":"WB",
        "fantasy_average":103.3,
        "career_avg":87.6782,
        "rank":39,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1009199",
        "name":"Noah Anderson",
        "dob":"2001-02-17",
        "team":"GC",
        "fantasy_average":100.5,
        "career_avg":86.358,
        "rank":23,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I296205",
        "name":"Jack Steele",
        "dob":"1995-12-13",
        "team":"SK",
        "fantasy_average":97.9,
        "career_avg":97.3484,
        "rank":24,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I291902",
        "name":"Jack Viney",
        "dob":"1994-04-13",
        "team":"ME",
        "fantasy_average":100.0,
        "career_avg":87.3871,
        "rank":57,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I296347",
        "name":"Josh Kelly",
        "dob":"1995-02-12",
        "team":"GWS",
        "fantasy_average":97.9,
        "career_avg":95.776,
        "rank":25,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I298272",
        "name":"Touk Miller",
        "dob":"1996-02-22",
        "team":"GC",
        "fantasy_average":96.2,
        "career_avg":90.7514,
        "rank":46,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I293535",
        "name":"Lachie Neale",
        "dob":"1993-05-24",
        "team":"BL",
        "fantasy_average":97.0,
        "career_avg":99.0093,
        "rank":40,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1002267",
        "name":"Luke Davies-Uniacke",
        "dob":"1999-06-08",
        "team":"NM",
        "fantasy_average":97.4,
        "career_avg":76.2824,
        "rank":28,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I298174",
        "name":"Toby Nankervis",
        "dob":"1994-08-12",
        "team":"RI",
        "fantasy_average":102.3,
        "career_avg":84.0656,
        "rank":54,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1009260",
        "name":"Sam Flanders",
        "dob":"2001-07-24",
        "team":"GC",
        "fantasy_average":89.6,
        "career_avg":62.6977,
        "rank":29,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1002239",
        "name":"Adam Cerra",
        "dob":"1999-10-07",
        "team":"CA",
        "fantasy_average":96.6,
        "career_avg":75.9381,
        "rank":30,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1008550",
        "name":"Will Day",
        "dob":"2001-06-05",
        "team":"HW",
        "fantasy_average":95.3,
        "career_avg":74.7037,
        "rank":31,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1015507",
        "name":"Nasiah Wanganeen-Milera",
        "dob":"2003-02-22",
        "team":"SK",
        "fantasy_average":91.3,
        "career_avg":79.5897,
        "rank":32,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1009256",
        "name":"Hayden Young",
        "dob":"2001-04-11",
        "team":"FR",
        "fantasy_average":89.2,
        "career_avg":81.3455,
        "rank":33,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I295898",
        "name":"Tim Kelly",
        "dob":"1994-07-26",
        "team":"WC",
        "fantasy_average":98.7,
        "career_avg":88.5714,
        "rank":53,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I998659",
        "name":"Luke Ryan",
        "dob":"1996-02-06",
        "team":"FR",
        "fantasy_average":99.4,
        "career_avg":83.3154,
        "rank":34,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I297907",
        "name":"Nic Newman",
        "dob":"1993-01-15",
        "team":"CA",
        "fantasy_average":98.0,
        "career_avg":86.4231,
        "rank":35,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I291800",
        "name":"Tom Stewart",
        "dob":"1993-03-15",
        "team":"GE",
        "fantasy_average":96.3,
        "career_avg":86.4925,
        "rank":41,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I998145",
        "name":"Sean Darcy",
        "dob":"1998-06-12",
        "team":"FR",
        "fantasy_average":95.4,
        "career_avg":80.6771,
        "rank":36,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1020895",
        "name":"Jai Newcombe",
        "dob":"2001-08-02",
        "team":"HW",
        "fantasy_average":93.3,
        "career_avg":86.56,
        "rank":37,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1026850",
        "name":"Nic Martin",
        "dob":"2001-04-03",
        "team":"ES",
        "fantasy_average":85.2,
        "career_avg":82.5909,
        "rank":38,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I295467",
        "name":"Jack Macrae",
        "dob":"1994-08-03",
        "team":"WB",
        "fantasy_average":91.8,
        "career_avg":102.8716,
        "rank":26,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I290528",
        "name":"Max Gawn",
        "dob":"1991-12-30",
        "team":"ME",
        "fantasy_average":92.1,
        "career_avg":97.6032,
        "rank":56,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I298268",
        "name":"Liam Duggan",
        "dob":"1996-12-11",
        "team":"WC",
        "fantasy_average":96.3,
        "career_avg":71.7237,
        "rank":45,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I992049",
        "name":"Jayden Short",
        "dob":"1996-01-24",
        "team":"RI",
        "fantasy_average":92.5,
        "career_avg":79.0699,
        "rank":64,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1005054",
        "name":"Josh Daicos",
        "dob":"1998-11-26",
        "team":"CW",
        "fantasy_average":94.7,
        "career_avg":77.2421,
        "rank":42,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1012014",
        "name":"Chad Warner",
        "dob":"2001-05-19",
        "team":"SY",
        "fantasy_average":92.7,
        "career_avg":83.6182,
        "rank":43,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1009399",
        "name":"Luke Jackson",
        "dob":"2001-09-29",
        "team":"FR",
        "fantasy_average":84.7,
        "career_avg":70.0714,
        "rank":44,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I294305",
        "name":"Lachie Whitfield",
        "dob":"1994-07-18",
        "team":"GWS",
        "fantasy_average":94.7,
        "career_avg":90.4742,
        "rank":63,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I994295",
        "name":"Dan Houston",
        "dob":"1997-05-12",
        "team":"PA",
        "fantasy_average":92.7,
        "career_avg":81.0432,
        "rank":58,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1006130",
        "name":"Bailey Smith",
        "dob":"2000-12-07",
        "team":"WB",
        "fantasy_average":83.3,
        "career_avg":82.25,
        "rank":87,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1000978",
        "name":"Hugh McCluggage",
        "dob":"1998-03-03",
        "team":"BL",
        "fantasy_average":89.3,
        "career_avg":86.0979,
        "rank":50,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1009208",
        "name":"Matt Rowell",
        "dob":"2001-07-01",
        "team":"GC",
        "fantasy_average":92.0,
        "career_avg":77.1452,
        "rank":49,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I291856",
        "name":"Tom Mitchell",
        "dob":"1993-05-31",
        "team":"CW",
        "fantasy_average":91.8,
        "career_avg":106.0924,
        "rank":72,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I990704",
        "name":"Patrick Cripps",
        "dob":"1995-03-18",
        "team":"CA",
        "fantasy_average":88.4,
        "career_avg":93.0222,
        "rank":73,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I295136",
        "name":"Caleb Daniel",
        "dob":"1996-07-07",
        "team":"WB",
        "fantasy_average":89.9,
        "career_avg":81.0788,
        "rank":51,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I281065",
        "name":"Mitch Duncan",
        "dob":"1991-06-10",
        "team":"GE",
        "fantasy_average":91.3,
        "career_avg":95.9602,
        "rank":127,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I993993",
        "name":"Shai Bolton",
        "dob":"1998-12-08",
        "team":"RI",
        "fantasy_average":86.8,
        "career_avg":71.5333,
        "rank":52,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I290550",
        "name":"Cameron Guthrie",
        "dob":"1992-08-19",
        "team":"GE",
        "fantasy_average":86.8,
        "career_avg":80.6667,
        "rank":182,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I290778",
        "name":"Luke Parker",
        "dob":"1992-10-25",
        "team":"SY",
        "fantasy_average":89.9,
        "career_avg":96.5236,
        "rank":102,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I293957",
        "name":"Brodie Grundy",
        "dob":"1994-04-15",
        "team":"SY",
        "fantasy_average":75.0,
        "career_avg":98.0703,
        "rank":55,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I291975",
        "name":"Jarrod Witts",
        "dob":"1992-09-13",
        "team":"GC",
        "fantasy_average":90.8,
        "career_avg":84.2727,
        "rank":70,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1008436",
        "name":"Kieren Briggs",
        "dob":"1999-10-06",
        "team":"GWS",
        "fantasy_average":94.1,
        "career_avg":79.9565,
        "rank":67,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I993905",
        "name":"Callum Mills",
        "dob":"1997-04-02",
        "team":"SY",
        "fantasy_average":84.1,
        "career_avg":84.6259,
        "rank":86,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I295344",
        "name":"Toby Greene",
        "dob":"1993-09-25",
        "team":"GWS",
        "fantasy_average":88.5,
        "career_avg":85.7582,
        "rank":59,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006314",
        "name":"Dylan Moore",
        "dob":"1999-08-04",
        "team":"HW",
        "fantasy_average":88.0,
        "career_avg":80.5067,
        "rank":60,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I997078",
        "name":"Mason Redman",
        "dob":"1997-08-26",
        "team":"ES",
        "fantasy_average":85.8,
        "career_avg":72.0594,
        "rank":61,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I295342",
        "name":"Jake Lloyd",
        "dob":"1993-09-20",
        "team":"SY",
        "fantasy_average":89.7,
        "career_avg":89.932,
        "rank":71,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I297523",
        "name":"Reilly O'Brien",
        "dob":"1995-08-20",
        "team":"AD",
        "fantasy_average":88.4,
        "career_avg":89.66,
        "rank":96,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I996731",
        "name":"Charlie Curnow",
        "dob":"1997-02-03",
        "team":"CA",
        "fantasy_average":86.8,
        "career_avg":73.2523,
        "rank":65,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I295340",
        "name":"Mason Wood",
        "dob":"1993-09-13",
        "team":"SK",
        "fantasy_average":91.6,
        "career_avg":68.9211,
        "rank":104,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I290847",
        "name":"Dustin Martin",
        "dob":"1991-06-26",
        "team":"RI",
        "fantasy_average":90.0,
        "career_avg":95.6381,
        "rank":66,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I296296",
        "name":"Dom Sheed",
        "dob":"1995-04-10",
        "team":"WC",
        "fantasy_average":89.6,
        "career_avg":79.4552,
        "rank":95,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I297354",
        "name":"Karl Amon",
        "dob":"1995-08-19",
        "team":"HW",
        "fantasy_average":86.8,
        "career_avg":78.4071,
        "rank":74,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I990291",
        "name":"Darcy Cameron",
        "dob":"1995-07-18",
        "team":"CW",
        "fantasy_average":84.0,
        "career_avg":73.2813,
        "rank":68,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1004965",
        "name":"Tristan Xerri",
        "dob":"1999-03-15",
        "team":"NM",
        "fantasy_average":66.0,
        "career_avg":54.0303,
        "rank":69,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I297401",
        "name":"Matt Crouch",
        "dob":"1995-04-21",
        "team":"AD",
        "fantasy_average":89.3,
        "career_avg":93.5956,
        "rank":103,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I298279",
        "name":"Angus Brayshaw",
        "dob":"1996-01-09",
        "team":"ME",
        "fantasy_average":85.3,
        "career_avg":81.0506,
        "rank":88,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I296294",
        "name":"Blake Acres",
        "dob":"1995-10-07",
        "team":"CA",
        "fantasy_average":87.8,
        "career_avg":74.3714,
        "rank":83,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I260257",
        "name":"Scott Pendlebury",
        "dob":"1988-01-07",
        "team":"CW",
        "fantasy_average":88.0,
        "career_avg":100.1364,
        "rank":90,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I996708",
        "name":"Bailey Dale",
        "dob":"1996-07-22",
        "team":"WB",
        "fantasy_average":85.3,
        "career_avg":71.784,
        "rank":75,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I998215",
        "name":"Will Setterfield",
        "dob":"1998-02-05",
        "team":"ES",
        "fantasy_average":92.0,
        "career_avg":69.8333,
        "rank":143,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1002222",
        "name":"James Worpel",
        "dob":"1999-01-24",
        "team":"HW",
        "fantasy_average":86.3,
        "career_avg":80.35,
        "rank":76,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1023517",
        "name":"Will Ashcroft",
        "dob":"2004-05-06",
        "team":"BL",
        "fantasy_average":82.9,
        "career_avg":82.8889,
        "rank":77,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I994185",
        "name":"Jordan De Goey",
        "dob":"1996-03-15",
        "team":"CW",
        "fantasy_average":86.8,
        "career_avg":78.2621,
        "rank":78,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I993998",
        "name":"Jy Simpkin",
        "dob":"1998-03-05",
        "team":"NM",
        "fantasy_average":75.8,
        "career_avg":74.7985,
        "rank":79,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1017088",
        "name":"Ben Hobbs",
        "dob":"2003-09-16",
        "team":"ES",
        "fantasy_average":76.5,
        "career_avg":69.2353,
        "rank":80,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1011640",
        "name":"Jason Horne-Francis",
        "dob":"2003-06-21",
        "team":"PA",
        "fantasy_average":68.0,
        "career_avg":65.5641,
        "rank":81,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I293871",
        "name":"Jack Crisp",
        "dob":"1993-10-02",
        "team":"CW",
        "fantasy_average":82.9,
        "career_avg":89.0792,
        "rank":109,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1006058",
        "name":"Bailey Scott",
        "dob":"2000-07-09",
        "team":"NM",
        "fantasy_average":85.6,
        "career_avg":66.4935,
        "rank":82,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1005729",
        "name":"Tarryn Thomas",
        "dob":"2000-03-25",
        "team":"NM",
        "fantasy_average":79.3,
        "career_avg":65.6812,
        "rank":84,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I296733",
        "name":"Mark Blicavs",
        "dob":"1991-03-28",
        "team":"GE",
        "fantasy_average":81.5,
        "career_avg":74.7027,
        "rank":120,
        "positions":["MID", "RUC"]
    },
    {
        "player_id":"CD_I291776",
        "name":"Taylor Adams",
        "dob":"1993-09-20",
        "team":"SY",
        "fantasy_average":76.5,
        "career_avg":92.5525,
        "rank":85,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I261224",
        "name":"Dayne Zorko",
        "dob":"1989-02-09",
        "team":"BL",
        "fantasy_average":84.8,
        "career_avg":94.0676,
        "rank":94,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1015889",
        "name":"Max Holmes",
        "dob":"2002-08-29",
        "team":"GE",
        "fantasy_average":75.9,
        "career_avg":68.4091,
        "rank":87,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I296422",
        "name":"Callum Wilkie",
        "dob":"1996-03-10",
        "team":"SK",
        "fantasy_average":87.2,
        "career_avg":66.3302,
        "rank":136,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I293845",
        "name":"Jeremy Cameron",
        "dob":"1993-04-01",
        "team":"GE",
        "fantasy_average":83.0,
        "career_avg":72.9146,
        "rank":93,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006103",
        "name":"Jye Caldwell",
        "dob":"2000-09-28",
        "team":"ES",
        "fantasy_average":75.1,
        "career_avg":70.4444,
        "rank":89,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1009253",
        "name":"Lachie Ash",
        "dob":"2001-06-21",
        "team":"GWS",
        "fantasy_average":84.3,
        "career_avg":70.8533,
        "rank":91,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1023272",
        "name":"Mitch Owens",
        "dob":"2003-09-24",
        "team":"SK",
        "fantasy_average":73.9,
        "career_avg":68.7931,
        "rank":92,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I294674",
        "name":"Nick Vlastuin",
        "dob":"1994-04-19",
        "team":"RI",
        "fantasy_average":81.2,
        "career_avg":71.7538,
        "rank":129,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1005521",
        "name":"Oscar McInerney",
        "dob":"1994-07-10",
        "team":"BL",
        "fantasy_average":82.7,
        "career_avg":68.6957,
        "rank":118,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I998102",
        "name":"Andrew McGrath",
        "dob":"1998-06-02",
        "team":"ES",
        "fantasy_average":81.8,
        "career_avg":77.0305,
        "rank":97,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I998129",
        "name":"Will Brodie",
        "dob":"1998-08-23",
        "team":"FR",
        "fantasy_average":67.0,
        "career_avg":80.8824,
        "rank":300,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I298539",
        "name":"Isaac Heeney",
        "dob":"1996-05-05",
        "team":"SY",
        "fantasy_average":80.0,
        "career_avg":82.6319,
        "rank":98,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I298524",
        "name":"Lachie Weller",
        "dob":"1996-02-23",
        "team":"GC",
        "fantasy_average":83.8,
        "career_avg":72.8971,
        "rank":128,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I993946",
        "name":"Ben Keays",
        "dob":"1997-02-23",
        "team":"AD",
        "fantasy_average":77.3,
        "career_avg":79.1239,
        "rank":99,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1001026",
        "name":"Jordan Ridley",
        "dob":"1998-10-20",
        "team":"ES",
        "fantasy_average":80.8,
        "career_avg":75.619,
        "rank":100,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I290629",
        "name":"Dyson Heppell",
        "dob":"1992-05-14",
        "team":"ES",
        "fantasy_average":81.6,
        "career_avg":94.6489,
        "rank":131,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I294518",
        "name":"Joe Daniher",
        "dob":"1994-03-04",
        "team":"BL",
        "fantasy_average":76.2,
        "career_avg":67.6845,
        "rank":101,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1000981",
        "name":"Daniel Rioli",
        "dob":"1997-04-16",
        "team":"RI",
        "fantasy_average":80.3,
        "career_avg":61.9932,
        "rank":139,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I291748",
        "name":"Brodie Smith",
        "dob":"1992-01-14",
        "team":"AD",
        "fantasy_average":81.4,
        "career_avg":77.7961,
        "rank":132,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I294318",
        "name":"Ollie Wines",
        "dob":"1994-10-07",
        "team":"PA",
        "fantasy_average":77.7,
        "career_avg":92.0231,
        "rank":113,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1005988",
        "name":"Liam Henry",
        "dob":"2001-08-28",
        "team":"SK",
        "fantasy_average":76.8,
        "career_avg":53.381,
        "rank":105,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I994386",
        "name":"Tom Atkins",
        "dob":"1995-09-18",
        "team":"GE",
        "fantasy_average":79.9,
        "career_avg":67.3579,
        "rank":106,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I998128",
        "name":"Alex Witherden",
        "dob":"1998-09-10",
        "team":"WC",
        "fantasy_average":78.4,
        "career_avg":83.4,
        "rank":155,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1006059",
        "name":"Keidean Coleman",
        "dob":"2000-03-31",
        "team":"BL",
        "fantasy_average":69.6,
        "career_avg":62.9434,
        "rank":107,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1006126",
        "name":"James Rowbottom",
        "dob":"2000-09-19",
        "team":"SY",
        "fantasy_average":79.3,
        "career_avg":72.8046,
        "rank":116,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1008280",
        "name":"Ed Richards",
        "dob":"1999-07-03",
        "team":"WB",
        "fantasy_average":79.8,
        "career_avg":59.901,
        "rank":108,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1007124",
        "name":"Conor Nash",
        "dob":"1998-07-28",
        "team":"HW",
        "fantasy_average":82.0,
        "career_avg":63.1429,
        "rank":110,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I280506",
        "name":"Taylor Walker",
        "dob":"1990-04-25",
        "team":"AD",
        "fantasy_average":80.4,
        "career_avg":71.6772,
        "rank":177,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I993903",
        "name":"Jacob Hopper",
        "dob":"1997-02-06",
        "team":"RI",
        "fantasy_average":80.8,
        "career_avg":79.4103,
        "rank":111,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I290627",
        "name":"Dion Prestia",
        "dob":"1992-10-12",
        "team":"RI",
        "fantasy_average":75.9,
        "career_avg":89.9643,
        "rank":112,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1024272",
        "name":"Colby McKercher",
        "dob":"2005-04-12",
        "team":"NM",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":114,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I294557",
        "name":"Lachie Hunter",
        "dob":"1994-12-13",
        "team":"ME",
        "fantasy_average":79.2,
        "career_avg":87.4262,
        "rank":115,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1006152",
        "name":"Jordan Clark",
        "dob":"2000-10-16",
        "team":"FR",
        "fantasy_average":76.5,
        "career_avg":71.6892,
        "rank":124,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I270917",
        "name":"Patrick Dangerfield",
        "dob":"1990-04-05",
        "team":"GE",
        "fantasy_average":79.9,
        "career_avg":99.2749,
        "rank":180,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1000972",
        "name":"Willem Drew",
        "dob":"1998-10-01",
        "team":"PA",
        "fantasy_average":76.9,
        "career_avg":74.5263,
        "rank":117,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1007881",
        "name":"Wil Powell",
        "dob":"1999-08-26",
        "team":"GC",
        "fantasy_average":82.1,
        "career_avg":63.5747,
        "rank":119,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1001398",
        "name":"Matthew Kennedy",
        "dob":"1997-04-06",
        "team":"CA",
        "fantasy_average":74.6,
        "career_avg":72.6154,
        "rank":166,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1000072",
        "name":"John Noble",
        "dob":"1997-03-25",
        "team":"CW",
        "fantasy_average":81.0,
        "career_avg":72.1059,
        "rank":157,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I998529",
        "name":"Ivan Soldo",
        "dob":"1996-04-14",
        "team":"PA",
        "fantasy_average":78.6,
        "career_avg":59.9074,
        "rank":121,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I294036",
        "name":"George Hewett",
        "dob":"1995-12-29",
        "team":"CA",
        "fantasy_average":74.1,
        "career_avg":71.226,
        "rank":178,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1006114",
        "name":"Bailey J. Williams",
        "dob":"2000-04-17",
        "team":"WC",
        "fantasy_average":76.7,
        "career_avg":61.7755,
        "rank":122,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I293713",
        "name":"Brandon Ellis",
        "dob":"1993-08-03",
        "team":"GC",
        "fantasy_average":75.6,
        "career_avg":86.0829,
        "rank":159,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I993902",
        "name":"Matt Flynn",
        "dob":"1997-09-13",
        "team":"WC",
        "fantasy_average":73.8,
        "career_avg":70.4848,
        "rank":123,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I993794",
        "name":"Blake Hardwick",
        "dob":"1997-02-05",
        "team":"HW",
        "fantasy_average":81.0,
        "career_avg":68.6966,
        "rank":135,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I296359",
        "name":"Christian Salem",
        "dob":"1995-07-15",
        "team":"ME",
        "fantasy_average":77.5,
        "career_avg":76.5973,
        "rank":125,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1000963",
        "name":"Harry Morrison",
        "dob":"1998-11-12",
        "team":"HW",
        "fantasy_average":76.5,
        "career_avg":68.5795,
        "rank":161,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I993107",
        "name":"Harry Himmelberg",
        "dob":"1996-05-08",
        "team":"GWS",
        "fantasy_average":72.3,
        "career_avg":62.529,
        "rank":126,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I296254",
        "name":"Jarman Impey",
        "dob":"1995-07-09",
        "team":"HW",
        "fantasy_average":80.6,
        "career_avg":63.716,
        "rank":137,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I292128",
        "name":"Elliot Yeo",
        "dob":"1993-10-01",
        "team":"WC",
        "fantasy_average":70.1,
        "career_avg":82.9191,
        "rank":130,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I296355",
        "name":"Luke McDonald",
        "dob":"1995-02-09",
        "team":"NM",
        "fantasy_average":75.2,
        "career_avg":69.8523,
        "rank":183,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I280965",
        "name":"Steele Sidebottom",
        "dob":"1991-01-02",
        "team":"CW",
        "fantasy_average":78.8,
        "career_avg":95.2938,
        "rank":181,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1000860",
        "name":"Lachie Schultz",
        "dob":"1997-11-30",
        "team":"CW",
        "fantasy_average":78.5,
        "career_avg":62.6477,
        "rank":145,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1009378",
        "name":"Trent Rivers",
        "dob":"2001-07-30",
        "team":"ME",
        "fantasy_average":76.5,
        "career_avg":62.0714,
        "rank":133,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I298421",
        "name":"Jade Gresham",
        "dob":"1997-08-24",
        "team":"ES",
        "fantasy_average":73.6,
        "career_avg":72.2593,
        "rank":149,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023266",
        "name":"Finn Callaghan",
        "dob":"2003-04-26",
        "team":"GWS",
        "fantasy_average":75.8,
        "career_avg":71.087,
        "rank":134,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I280737",
        "name":"Liam Shiels",
        "dob":"1991-04-29",
        "team":"NM",
        "fantasy_average":77.3,
        "career_avg":85.2211,
        "rank":342,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I294613",
        "name":"Jaeger O'Meara",
        "dob":"1994-02-23",
        "team":"FR",
        "fantasy_average":75.4,
        "career_avg":88.2086,
        "rank":164,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1004863",
        "name":"Mitchell Hinge",
        "dob":"1998-06-26",
        "team":"AD",
        "fantasy_average":75.7,
        "career_avg":67.2558,
        "rank":160,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017051",
        "name":"Josh Rachele",
        "dob":"2003-04-11",
        "team":"AD",
        "fantasy_average":71.9,
        "career_avg":64.2941,
        "rank":138,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I998133",
        "name":"Jarrod Berry",
        "dob":"1998-02-05",
        "team":"BL",
        "fantasy_average":73.8,
        "career_avg":71.5702,
        "rank":184,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I998130",
        "name":"Ben Ainsworth",
        "dob":"1998-02-10",
        "team":"GC",
        "fantasy_average":74.1,
        "career_avg":67.7778,
        "rank":147,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023025",
        "name":"Reuben Ginbey",
        "dob":"2004-09-10",
        "team":"WC",
        "fantasy_average":57.9,
        "career_avg":57.9412,
        "rank":140,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I295067",
        "name":"James Aish",
        "dob":"1995-10-08",
        "team":"FR",
        "fantasy_average":73.5,
        "career_avg":68.8333,
        "rank":185,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1023477",
        "name":"George Wardlaw",
        "dob":"2004-06-11",
        "team":"NM",
        "fantasy_average":65.0,
        "career_avg":65.0,
        "rank":141,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I295461",
        "name":"Adam Saad",
        "dob":"1994-07-23",
        "team":"CA",
        "fantasy_average":73.9,
        "career_avg":67.422,
        "rank":172,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1023492",
        "name":"Harley Reid",
        "dob":"2005-04-17",
        "team":"WC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":142,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I295584",
        "name":"Bradley Hill",
        "dob":"1993-07-09",
        "team":"SK",
        "fantasy_average":74.5,
        "career_avg":74.7981,
        "rank":188,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1017094",
        "name":"Connor Macdonald",
        "dob":"2003-01-13",
        "team":"HW",
        "fantasy_average":70.7,
        "career_avg":63.775,
        "rank":144,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I992644",
        "name":"Braydon Preuss",
        "dob":"1995-06-16",
        "team":"GWS",
        "fantasy_average":0.0,
        "career_avg":69.25,
        "rank":648,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1004938",
        "name":"Gryan Miers",
        "dob":"1999-03-30",
        "team":"GE",
        "fantasy_average":75.5,
        "career_avg":66.6022,
        "rank":146,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1001195",
        "name":"Izak Rankine",
        "dob":"2000-04-23",
        "team":"AD",
        "fantasy_average":74.2,
        "career_avg":59.5882,
        "rank":148,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I296324",
        "name":"Jesse Hogan",
        "dob":"1995-02-12",
        "team":"GWS",
        "fantasy_average":73.9,
        "career_avg":74.8088,
        "rank":150,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I298630",
        "name":"Kyle Langford",
        "dob":"1996-12-01",
        "team":"ES",
        "fantasy_average":73.0,
        "career_avg":71.1783,
        "rank":151,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1017110",
        "name":"Josh Ward",
        "dob":"2003-08-15",
        "team":"HW",
        "fantasy_average":74.9,
        "career_avg":73.3667,
        "rank":153,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1002312",
        "name":"Zac Bailey",
        "dob":"1999-09-23",
        "team":"BL",
        "fantasy_average":72.4,
        "career_avg":65.0283,
        "rank":152,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I290832",
        "name":"David Swallow",
        "dob":"1992-11-19",
        "team":"GC",
        "fantasy_average":72.4,
        "career_avg":82.2941,
        "rank":230,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I293846",
        "name":"Sebastian Ross",
        "dob":"1993-05-07",
        "team":"SK",
        "fantasy_average":69.9,
        "career_avg":84.6031,
        "rank":247,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I999827",
        "name":"Zac Fisher",
        "dob":"1998-06-15",
        "team":"NM",
        "fantasy_average":69.0,
        "career_avg":62.2056,
        "rank":154,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I270963",
        "name":"Rory Sloane",
        "dob":"1990-03-17",
        "team":"AD",
        "fantasy_average":74.5,
        "career_avg":92.9427,
        "rank":351,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1023500",
        "name":"Bailey Humphrey",
        "dob":"2004-09-11",
        "team":"GC",
        "fantasy_average":51.3,
        "career_avg":51.3158,
        "rank":156,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I996464",
        "name":"Darcy Macpherson",
        "dob":"1997-10-29",
        "team":"GC",
        "fantasy_average":76.1,
        "career_avg":69.086,
        "rank":189,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1001396",
        "name":"Isaac Cumming",
        "dob":"1998-08-11",
        "team":"GWS",
        "fantasy_average":68.3,
        "career_avg":77.4571,
        "rank":175,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I992010",
        "name":"Brayden Maynard",
        "dob":"1996-09-20",
        "team":"CW",
        "fantasy_average":74.6,
        "career_avg":73.5407,
        "rank":158,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I291783",
        "name":"Dylan Shiel",
        "dob":"1993-03-09",
        "team":"ES",
        "fantasy_average":69.0,
        "career_avg":86.8842,
        "rank":256,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I997142",
        "name":"Peter Ladhams",
        "dob":"1998-01-14",
        "team":"SY",
        "fantasy_average":76.2,
        "career_avg":69.6458,
        "rank":227,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1004912",
        "name":"Tom De Koning",
        "dob":"1999-07-16",
        "team":"CA",
        "fantasy_average":66.3,
        "career_avg":59.5789,
        "rank":162,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I294472",
        "name":"Rory Atkins",
        "dob":"1994-07-12",
        "team":"GC",
        "fantasy_average":74.7,
        "career_avg":70.8819,
        "rank":163,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I280109",
        "name":"Callan Ward",
        "dob":"1990-04-10",
        "team":"GWS",
        "fantasy_average":71.9,
        "career_avg":88.8276,
        "rank":235,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I298111",
        "name":"Jeremy Finlayson",
        "dob":"1996-02-09",
        "team":"PA",
        "fantasy_average":72.6,
        "career_avg":63.7941,
        "rank":229,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1027033",
        "name":"Ethan Read ",
        "dob":"2005-07-07",
        "team":"GC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":165,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1003130",
        "name":"Patrick Lipinski",
        "dob":"1998-07-17",
        "team":"CW",
        "fantasy_average":69.7,
        "career_avg":70.4471,
        "rank":179,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I998205",
        "name":"Harry Perryman",
        "dob":"1998-12-19",
        "team":"GWS",
        "fantasy_average":70.5,
        "career_avg":73.8265,
        "rank":186,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1000223",
        "name":"Liam Baker",
        "dob":"1998-01-27",
        "team":"RI",
        "fantasy_average":69.8,
        "career_avg":67.3824,
        "rank":167,
        "positions":["DEF", "FWD"]
    },
    {
        "player_id":"CD_I1015873",
        "name":"Archie Perkins",
        "dob":"2002-03-26",
        "team":"ES",
        "fantasy_average":67.3,
        "career_avg":59.55,
        "rank":168,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023785",
        "name":"Elijah Tsatas",
        "dob":"2004-10-18",
        "team":"ES",
        "fantasy_average":64.3,
        "career_avg":64.25,
        "rank":169,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I271129",
        "name":"Todd Goldstein",
        "dob":"1988-07-01",
        "team":"ES",
        "fantasy_average":73.3,
        "career_avg":88.0175,
        "rank":202,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1000887",
        "name":"Mitch Lewis",
        "dob":"1998-10-14",
        "team":"HW",
        "fantasy_average":71.9,
        "career_avg":59.0606,
        "rank":170,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006028",
        "name":"Nick Blakey",
        "dob":"2000-02-27",
        "team":"SY",
        "fantasy_average":71.4,
        "career_avg":61.75,
        "rank":187,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1004095",
        "name":"Jack Lukosius",
        "dob":"2000-08-09",
        "team":"GC",
        "fantasy_average":72.1,
        "career_avg":68.0632,
        "rank":171,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I290188",
        "name":"Sam Reid",
        "dob":"1991-12-27",
        "team":"SY",
        "fantasy_average":0.0,
        "career_avg":64.3016,
        "rank":692,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1013133",
        "name":"Braeden Campbell",
        "dob":"2002-02-04",
        "team":"SY",
        "fantasy_average":65.2,
        "career_avg":57.4286,
        "rank":173,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I990882",
        "name":"Wayne Milera",
        "dob":"1997-09-14",
        "team":"AD",
        "fantasy_average":71.4,
        "career_avg":66.4583,
        "rank":174,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I993940",
        "name":"Corey Wagner",
        "dob":"1997-03-23",
        "team":"FR",
        "fantasy_average":72.8,
        "career_avg":54.1429,
        "rank":205,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I992059",
        "name":"Sam Switkowski",
        "dob":"1996-11-20",
        "team":"FR",
        "fantasy_average":63.1,
        "career_avg":59.8485,
        "rank":176,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I290801",
        "name":"Andrew Gaff",
        "dob":"1992-06-16",
        "team":"WC",
        "fantasy_average":71.7,
        "career_avg":92.6756,
        "rank":236,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I994385",
        "name":"Jayden Hunt",
        "dob":"1995-04-03",
        "team":"WC",
        "fantasy_average":76.7,
        "career_avg":59.1053,
        "rank":198,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I298264",
        "name":"Ed Langdon",
        "dob":"1996-02-01",
        "team":"ME",
        "fantasy_average":72.4,
        "career_avg":78.44,
        "rank":231,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I296420",
        "name":"Alex Neal-Bullen",
        "dob":"1996-01-09",
        "team":"ME",
        "fantasy_average":72.7,
        "career_avg":68.049,
        "rank":206,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I297452",
        "name":"Nick Hind",
        "dob":"1994-08-19",
        "team":"ES",
        "fantasy_average":69.1,
        "career_avg":69.325,
        "rank":203,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1011936",
        "name":"Justin McInerney",
        "dob":"2000-08-18",
        "team":"SY",
        "fantasy_average":70.8,
        "career_avg":66.3582,
        "rank":240,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I280711",
        "name":"Charlie Dixon",
        "dob":"1990-09-23",
        "team":"PA",
        "fantasy_average":72.3,
        "career_avg":66.0629,
        "rank":253,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I296351",
        "name":"Jack Billings",
        "dob":"1995-08-18",
        "team":"ME",
        "fantasy_average":60.7,
        "career_avg":83.4837,
        "rank":233,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I998103",
        "name":"Oliver Florent",
        "dob":"1998-07-22",
        "team":"SY",
        "fantasy_average":71.0,
        "career_avg":65.9779,
        "rank":197,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1005577",
        "name":"Sam Draper",
        "dob":"1998-09-28",
        "team":"ES",
        "fantasy_average":66.6,
        "career_avg":59.4107,
        "rank":190,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I294101",
        "name":"Jason Johannisen",
        "dob":"1992-11-08",
        "team":"WB",
        "fantasy_average":73.5,
        "career_avg":70.2151,
        "rank":191,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1020670",
        "name":"Elijah Hewett",
        "dob":"2004-05-27",
        "team":"WC",
        "fantasy_average":46.3,
        "career_avg":46.2857,
        "rank":192,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1009241",
        "name":"Brodie Kemp",
        "dob":"2001-05-01",
        "team":"CA",
        "fantasy_average":70.1,
        "career_avg":65.25,
        "rank":201,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1008089",
        "name":"Isaac Quaynor",
        "dob":"2000-01-15",
        "team":"CW",
        "fantasy_average":68.5,
        "career_avg":64.1688,
        "rank":193,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1002251",
        "name":"Brent Daniels",
        "dob":"1999-03-09",
        "team":"GWS",
        "fantasy_average":70.2,
        "career_avg":56.6267,
        "rank":207,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023270",
        "name":"Marcus Windhager",
        "dob":"2003-05-16",
        "team":"SK",
        "fantasy_average":63.2,
        "career_avg":57.1143,
        "rank":194,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I294685",
        "name":"Zac Williams",
        "dob":"1994-09-20",
        "team":"CA",
        "fantasy_average":0.0,
        "career_avg":74.728,
        "rank":623,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1013224",
        "name":"Heath Chapman",
        "dob":"2002-01-31",
        "team":"FR",
        "fantasy_average":60.3,
        "career_avg":64.6667,
        "rank":195,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1008312",
        "name":"Liam Stocker",
        "dob":"2000-01-23",
        "team":"SK",
        "fantasy_average":70.5,
        "career_avg":59.72,
        "rank":196,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I290826",
        "name":"Jamie Cripps",
        "dob":"1992-04-23",
        "team":"WC",
        "fantasy_average":69.4,
        "career_avg":69.495,
        "rank":255,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1008454",
        "name":"Connor Budarick",
        "dob":"2001-04-06",
        "team":"GC",
        "fantasy_average":73.5,
        "career_avg":50.4286,
        "rank":225,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1005992",
        "name":"Joel Jeffrey",
        "dob":"2002-03-12",
        "team":"GC",
        "fantasy_average":51.4,
        "career_avg":47.0,
        "rank":199,
        "positions":["DEF", "FWD"]
    },
    {
        "player_id":"CD_I1004870",
        "name":"Zach Guthrie",
        "dob":"1998-06-30",
        "team":"GE",
        "fantasy_average":70.1,
        "career_avg":60.3768,
        "rank":200,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1006133",
        "name":"Jack Ross",
        "dob":"2000-09-03",
        "team":"RI",
        "fantasy_average":71.6,
        "career_avg":62.7193,
        "rank":237,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I297255",
        "name":"Mitch McGovern",
        "dob":"1994-10-11",
        "team":"CA",
        "fantasy_average":70.7,
        "career_avg":60.4135,
        "rank":245,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I298144",
        "name":"Sam Naismith",
        "dob":"1992-07-16",
        "team":"RI",
        "fantasy_average":0.0,
        "career_avg":61.0,
        "rank":756,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I280317",
        "name":"Rhys Stanley",
        "dob":"1990-12-01",
        "team":"GE",
        "fantasy_average":71.3,
        "career_avg":68.9245,
        "rank":239,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1000864",
        "name":"Lachlan Bramble",
        "dob":"1998-04-19",
        "team":"WB",
        "fantasy_average":62.2,
        "career_avg":63.6,
        "rank":204,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I993799",
        "name":"Brayden Fiorini",
        "dob":"1997-08-22",
        "team":"GC",
        "fantasy_average":70.8,
        "career_avg":85.4505,
        "rank":241,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1000953",
        "name":"Harry McKay",
        "dob":"1997-12-24",
        "team":"CA",
        "fantasy_average":69.6,
        "career_avg":64.3238,
        "rank":212,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I292511",
        "name":"Zach Tuohy",
        "dob":"1989-12-10",
        "team":"GE",
        "fantasy_average":66.7,
        "career_avg":70.8829,
        "rank":283,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I294859",
        "name":"Jeremy McGovern",
        "dob":"1992-04-15",
        "team":"WC",
        "fantasy_average":70.3,
        "career_avg":67.8625,
        "rank":249,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I998484",
        "name":"Cameron Zurhaar",
        "dob":"1998-05-22",
        "team":"NM",
        "fantasy_average":64.5,
        "career_avg":58.2828,
        "rank":208,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1020137",
        "name":"Mattaes Phillipou",
        "dob":"2004-12-27",
        "team":"SK",
        "fantasy_average":52.2,
        "career_avg":52.2174,
        "rank":209,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I997033",
        "name":"Brennan Cox",
        "dob":"1998-08-13",
        "team":"FR",
        "fantasy_average":69.9,
        "career_avg":57.52,
        "rank":254,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1012218",
        "name":"Luke Pedlar",
        "dob":"2002-05-17",
        "team":"AD",
        "fantasy_average":58.2,
        "career_avg":54.8333,
        "rank":210,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I996554",
        "name":"Jake Waterman",
        "dob":"1998-05-06",
        "team":"WC",
        "fantasy_average":74.1,
        "career_avg":59.9125,
        "rank":211,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I281085",
        "name":"Steven May",
        "dob":"1992-01-10",
        "team":"ME",
        "fantasy_average":69.5,
        "career_avg":64.9792,
        "rank":252,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1002404",
        "name":"Aaron Naughton",
        "dob":"1999-11-30",
        "team":"WB",
        "fantasy_average":66.9,
        "career_avg":62.0172,
        "rank":213,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1008752",
        "name":"Kieran Strachan",
        "dob":"1995-10-05",
        "team":"AD",
        "fantasy_average":0.0,
        "career_avg":62.2,
        "rank":610,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I990827",
        "name":"Jack Graham",
        "dob":"1998-02-25",
        "team":"RI",
        "fantasy_average":61.0,
        "career_avg":70.7736,
        "rank":214,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1011659",
        "name":"Tom Powell",
        "dob":"2002-03-02",
        "team":"NM",
        "fantasy_average":57.4,
        "career_avg":59.8667,
        "rank":215,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I250365",
        "name":"Travis Boak",
        "dob":"1988-08-01",
        "team":"PA",
        "fantasy_average":62.2,
        "career_avg":91.6667,
        "rank":590,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1008384",
        "name":"Riley Thilthorpe",
        "dob":"2002-07-07",
        "team":"AD",
        "fantasy_average":52.9,
        "career_avg":53.413,
        "rank":216,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I293716",
        "name":"Jarryd Lyons",
        "dob":"1992-07-22",
        "team":"BL",
        "fantasy_average":50.6,
        "career_avg":87.0625,
        "rank":429,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1023494",
        "name":"Zane Duursma",
        "dob":"2005-08-28",
        "team":"NM",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":217,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1013409",
        "name":"James Jordon",
        "dob":"2000-12-20",
        "team":"SY",
        "fantasy_average":50.3,
        "career_avg":65.2,
        "rank":218,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1012805",
        "name":"Tanner Bruhn",
        "dob":"2002-05-27",
        "team":"GE",
        "fantasy_average":70.7,
        "career_avg":56.7174,
        "rank":246,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1012829",
        "name":"Will Phillips",
        "dob":"2002-05-22",
        "team":"NM",
        "fantasy_average":66.8,
        "career_avg":55.9667,
        "rank":219,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I293801",
        "name":"Jamie Elliott",
        "dob":"1992-08-21",
        "team":"CW",
        "fantasy_average":66.8,
        "career_avg":71.5294,
        "rank":266,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1017109",
        "name":"Jake Soligo",
        "dob":"2003-01-25",
        "team":"AD",
        "fantasy_average":67.6,
        "career_avg":63.4324,
        "rank":220,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I993832",
        "name":"Jacob Weitering",
        "dob":"1997-11-23",
        "team":"CA",
        "fantasy_average":70.4,
        "career_avg":59.8462,
        "rank":248,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I297899",
        "name":"James Harmes",
        "dob":"1995-10-05",
        "team":"WB",
        "fantasy_average":46.8,
        "career_avg":72.2324,
        "rank":221,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I998114",
        "name":"Jack Scrimshaw",
        "dob":"1998-09-04",
        "team":"HW",
        "fantasy_average":66.5,
        "career_avg":67.6386,
        "rank":244,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1001017",
        "name":"Nick Larkey",
        "dob":"1998-06-06",
        "team":"NM",
        "fantasy_average":60.0,
        "career_avg":51.9149,
        "rank":222,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I298289",
        "name":"Peter Wright",
        "dob":"1996-09-08",
        "team":"ES",
        "fantasy_average":58.0,
        "career_avg":65.9661,
        "rank":223,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006143",
        "name":"Max King",
        "dob":"2000-07-07",
        "team":"SK",
        "fantasy_average":57.7,
        "career_avg":54.3824,
        "rank":224,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I992128",
        "name":"Ryan Burton",
        "dob":"1997-01-31",
        "team":"PA",
        "fantasy_average":64.2,
        "career_avg":71.3077,
        "rank":272,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1001024",
        "name":"Ned Reeves",
        "dob":"1998-10-31",
        "team":"HW",
        "fantasy_average":60.9,
        "career_avg":61.3421,
        "rank":226,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1006136",
        "name":"Lachlan Sholl",
        "dob":"2000-03-07",
        "team":"AD",
        "fantasy_average":67.8,
        "career_avg":63.7308,
        "rank":258,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I992351",
        "name":"Bailey Williams",
        "dob":"1997-10-10",
        "team":"WB",
        "fantasy_average":69.9,
        "career_avg":65.2397,
        "rank":250,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I291570",
        "name":"Nat Fyfe",
        "dob":"1991-09-18",
        "team":"FR",
        "fantasy_average":49.3,
        "career_avg":92.6584,
        "rank":228,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I295203",
        "name":"Nathan Broad",
        "dob":"1993-04-15",
        "team":"RI",
        "fantasy_average":66.9,
        "career_avg":58.7105,
        "rank":264,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1006096",
        "name":"Xavier Duursma",
        "dob":"2000-07-07",
        "team":"ES",
        "fantasy_average":66.3,
        "career_avg":66.9104,
        "rank":232,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I999391",
        "name":"Tom Sparrow",
        "dob":"2000-05-31",
        "team":"ME",
        "fantasy_average":66.6,
        "career_avg":59.4839,
        "rank":271,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1004364",
        "name":"Liam Ryan",
        "dob":"1996-10-02",
        "team":"WC",
        "fantasy_average":72.3,
        "career_avg":57.5663,
        "rank":234,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I996765",
        "name":"Tom Papley",
        "dob":"1996-07-13",
        "team":"SY",
        "fantasy_average":66.2,
        "career_avg":67.6974,
        "rank":274,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I996059",
        "name":"Harris Andrews",
        "dob":"1996-12-11",
        "team":"BL",
        "fantasy_average":68.8,
        "career_avg":57.9138,
        "rank":259,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I261510",
        "name":"Tom Hawkins",
        "dob":"1988-07-21",
        "team":"GE",
        "fantasy_average":63.0,
        "career_avg":72.6786,
        "rank":292,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1020695",
        "name":"Tom Emmett",
        "dob":"2001-11-30",
        "team":"FR",
        "fantasy_average":71.5,
        "career_avg":71.5,
        "rank":238,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I998791",
        "name":"Jamaine Jones",
        "dob":"1998-09-29",
        "team":"WC",
        "fantasy_average":66.6,
        "career_avg":57.6154,
        "rank":273,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I298280",
        "name":"Jayden Laverde",
        "dob":"1996-04-12",
        "team":"ES",
        "fantasy_average":67.4,
        "career_avg":59.6111,
        "rank":261,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1002253",
        "name":"Kane Farrell",
        "dob":"1999-03-17",
        "team":"PA",
        "fantasy_average":64.5,
        "career_avg":56.1449,
        "rank":243,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I993820",
        "name":"Tom Cole",
        "dob":"1997-05-28",
        "team":"WC",
        "fantasy_average":65.9,
        "career_avg":54.3488,
        "rank":242,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1012807",
        "name":"Sam Berry",
        "dob":"2002-02-12",
        "team":"AD",
        "fantasy_average":49.3,
        "career_avg":62.6154,
        "rank":445,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1002264",
        "name":"Hunter Clark",
        "dob":"1999-03-26",
        "team":"SK",
        "fantasy_average":67.8,
        "career_avg":66.25,
        "rank":260,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I990609",
        "name":"Charlie Cameron",
        "dob":"1994-07-05",
        "team":"BL",
        "fantasy_average":63.6,
        "career_avg":62.918,
        "rank":284,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1008083",
        "name":"Connor Idun",
        "dob":"2000-07-29",
        "team":"GWS",
        "fantasy_average":67.0,
        "career_avg":58.6032,
        "rank":263,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I295265",
        "name":"Nick Haynes",
        "dob":"1992-05-18",
        "team":"GWS",
        "fantasy_average":66.5,
        "career_avg":68.4696,
        "rank":257,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I993979",
        "name":"Sam Powell-Pepper",
        "dob":"1998-01-08",
        "team":"PA",
        "fantasy_average":61.4,
        "career_avg":68.8258,
        "rank":309,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006203",
        "name":"Chayce Jones",
        "dob":"2000-01-14",
        "team":"AD",
        "fantasy_average":67.3,
        "career_avg":49.44,
        "rank":251,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I1001028",
        "name":"Jack Silvagni",
        "dob":"1997-12-17",
        "team":"CA",
        "fantasy_average":63.4,
        "career_avg":60.2783,
        "rank":285,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I997846",
        "name":"Conor McKenna",
        "dob":"1996-03-28",
        "team":"BL",
        "fantasy_average":65.1,
        "career_avg":62.99,
        "rank":277,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1003203",
        "name":"Hayden McLean",
        "dob":"1999-01-20",
        "team":"SY",
        "fantasy_average":65.6,
        "career_avg":57.7347,
        "rank":275,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I1031801",
        "name":"Ethan Stanley",
        "dob":"2003-11-13",
        "team":"FR",
        "fantasy_average":17.5,
        "career_avg":17.5,
        "rank":601,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1015822",
        "name":"Dominic Bedendo",
        "dob":"2002-07-09",
        "team":"WB",
        "fantasy_average":0.0,
        "career_avg":41.5,
        "rank":697,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1023533",
        "name":"Jaxon Binns",
        "dob":"2004-10-29",
        "team":"CA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":621,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1017065",
        "name":"Zac Taylor",
        "dob":"2003-01-31",
        "team":"AD",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":611,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1024187",
        "name":"Reece Torrent",
        "dob":"2005-08-03",
        "team":"BL",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":705,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1004848",
        "name":"Dylan Stephens",
        "dob":"2001-01-08",
        "team":"NM",
        "fantasy_average":54.9,
        "career_avg":56.0,
        "rank":262,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1002235",
        "name":"Cam Rayner",
        "dob":"1999-10-21",
        "team":"BL",
        "fantasy_average":63.7,
        "career_avg":57.4615,
        "rank":265,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1024057",
        "name":"Caiden Cleary",
        "dob":"2005-03-05",
        "team":"SY",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":766,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1027058",
        "name":"Indhi Kirk",
        "dob":"2004-08-31",
        "team":"SY",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":768,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1008825",
        "name":"Mitch Hardie",
        "dob":"1997-09-05",
        "team":"GE",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":641,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1020339",
        "name":"Angus Sheldrick",
        "dob":"2003-11-07",
        "team":"SY",
        "fantasy_average":62.4,
        "career_avg":58.125,
        "rank":267,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1017939",
        "name":"Ryley Sanders",
        "dob":"2005-01-21",
        "team":"WB",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":776,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1015810",
        "name":"Sam Durham",
        "dob":"2001-07-09",
        "team":"ES",
        "fantasy_average":63.0,
        "career_avg":59.1667,
        "rank":268,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1027673",
        "name":"Harry DeMattia",
        "dob":"2005-09-11",
        "team":"CW",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":712,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1016825",
        "name":"Matthew Johnson",
        "dob":"2003-03-16",
        "team":"FR",
        "fantasy_average":56.7,
        "career_avg":56.7222,
        "rank":269,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I293813",
        "name":"Tom Lynch",
        "dob":"1992-10-31",
        "team":"RI",
        "fantasy_average":51.8,
        "career_avg":70.5196,
        "rank":412,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1002256",
        "name":"Paddy Dow",
        "dob":"1999-10-16",
        "team":"SK",
        "fantasy_average":56.7,
        "career_avg":53.0857,
        "rank":270,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1004385",
        "name":"Oscar Allen",
        "dob":"1999-03-19",
        "team":"WC",
        "fantasy_average":64.1,
        "career_avg":58.6914,
        "rank":280,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1011633",
        "name":"James Willis",
        "dob":"2003-07-10",
        "team":"GE",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":640,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1024188",
        "name":"Clay Hall",
        "dob":"2005-05-12",
        "team":"WC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":769,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1027935",
        "name":"Josh Weddle",
        "dob":"2004-05-25",
        "team":"HW",
        "fantasy_average":64.5,
        "career_avg":64.4706,
        "rank":279,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I991930",
        "name":"Darcy Byrne-Jones",
        "dob":"1995-09-20",
        "team":"PA",
        "fantasy_average":61.2,
        "career_avg":70.5783,
        "rank":329,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1031829",
        "name":"James Trezise",
        "dob":"2002-06-15",
        "team":"RI",
        "fantasy_average":77.0,
        "career_avg":77.0,
        "rank":276,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1022915",
        "name":"Edward Allan",
        "dob":"2004-05-26",
        "team":"CW",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":626,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1002245",
        "name":"Noah Balta",
        "dob":"1999-10-23",
        "team":"RI",
        "fantasy_average":64.7,
        "career_avg":54.4875,
        "rank":278,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I998134",
        "name":"Josh Battle",
        "dob":"1998-09-01",
        "team":"SK",
        "fantasy_average":62.0,
        "career_avg":62.5521,
        "rank":593,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1023537",
        "name":"Jhye Clark",
        "dob":"2004-07-23",
        "team":"GE",
        "fantasy_average":36.0,
        "career_avg":36.0,
        "rank":544,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1015330",
        "name":"Hugh Jackson",
        "dob":"2003-05-03",
        "team":"PA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":669,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1008139",
        "name":"Toby Bedford",
        "dob":"2000-05-27",
        "team":"GWS",
        "fantasy_average":63.7,
        "career_avg":54.5385,
        "rank":281,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1018123",
        "name":"Jake Rogers",
        "dob":"2005-03-02",
        "team":"GC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":732,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1002227",
        "name":"Jack Higgins",
        "dob":"1999-03-19",
        "team":"SK",
        "fantasy_average":63.7,
        "career_avg":63.5253,
        "rank":282,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023680",
        "name":"Henry Hustwaite",
        "dob":"2004-07-20",
        "team":"HW",
        "fantasy_average":62.5,
        "career_avg":62.5,
        "rank":298,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1019916",
        "name":"Kane McAuliffe",
        "dob":"2005-03-01",
        "team":"RI",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":758,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1023681",
        "name":"George Stevens",
        "dob":"2005-04-14",
        "team":"GE",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":726,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I298288",
        "name":"Darcy Moore",
        "dob":"1996-01-25",
        "team":"CW",
        "fantasy_average":63.4,
        "career_avg":57.4071,
        "rank":286,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I291548",
        "name":"Ryan Lester",
        "dob":"1992-08-26",
        "team":"BL",
        "fantasy_average":63.1,
        "career_avg":61.0861,
        "rank":287,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I291313",
        "name":"Jeremy Howe",
        "dob":"1990-06-29",
        "team":"CW",
        "fantasy_average":62.9,
        "career_avg":73.8925,
        "rank":295,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1001438",
        "name":"Bayley Fritsch",
        "dob":"1996-12-06",
        "team":"ME",
        "fantasy_average":63.1,
        "career_avg":64.8889,
        "rank":288,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I997100",
        "name":"Will Hayward",
        "dob":"1998-10-26",
        "team":"SY",
        "fantasy_average":63.0,
        "career_avg":59.0923,
        "rank":293,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1008541",
        "name":"Kysaiah Pickett",
        "dob":"2001-06-02",
        "team":"ME",
        "fantasy_average":63.1,
        "career_avg":56.3333,
        "rank":289,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I290757",
        "name":"Jimmy Webster",
        "dob":"1993-06-28",
        "team":"SK",
        "fantasy_average":63.1,
        "career_avg":61.3624,
        "rank":290,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1018335",
        "name":"Brayden Cook",
        "dob":"2002-07-18",
        "team":"AD",
        "fantasy_average":63.0,
        "career_avg":44.0833,
        "rank":291,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1018016",
        "name":"Seamus Mitchell",
        "dob":"2002-07-03",
        "team":"HW",
        "fantasy_average":62.9,
        "career_avg":62.9286,
        "rank":296,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017087",
        "name":"Harvey Gallagher",
        "dob":"2003-09-26",
        "team":"WB",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":294,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I298419",
        "name":"Brandan Parfitt",
        "dob":"1998-04-27",
        "team":"GE",
        "fantasy_average":55.1,
        "career_avg":70.6542,
        "rank":379,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1000998",
        "name":"Lachlan Murphy",
        "dob":"1998-12-04",
        "team":"AD",
        "fantasy_average":62.5,
        "career_avg":53.4694,
        "rank":297,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006137",
        "name":"Curtis Taylor",
        "dob":"2000-04-06",
        "team":"NM",
        "fantasy_average":61.3,
        "career_avg":58.8209,
        "rank":327,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1008154",
        "name":"Matthew Cottrell",
        "dob":"2000-02-29",
        "team":"CA",
        "fantasy_average":62.3,
        "career_avg":58.0,
        "rank":299,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1028671",
        "name":"Charlie Edwards",
        "dob":"2005-05-18",
        "team":"AD",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":701,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I1009195",
        "name":"Dylan Williams",
        "dob":"2001-07-01",
        "team":"PA",
        "fantasy_average":60.0,
        "career_avg":58.619,
        "rank":307,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1021031",
        "name":"Luke Nankervis",
        "dob":"2003-05-25",
        "team":"AD",
        "fantasy_average":61.8,
        "career_avg":61.75,
        "rank":301,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1012825",
        "name":"Jake Bowey",
        "dob":"2002-09-12",
        "team":"ME",
        "fantasy_average":62.3,
        "career_avg":61.9048,
        "rank":303,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1010174",
        "name":"Mitch Georgiades",
        "dob":"2001-09-28",
        "team":"PA",
        "fantasy_average":61.5,
        "career_avg":53.3061,
        "rank":302,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1026960",
        "name":"Will Graham",
        "dob":"2005-07-27",
        "team":"GC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":730,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I1023167",
        "name":"Brady Hough",
        "dob":"2003-03-05",
        "team":"WC",
        "fantasy_average":61.5,
        "career_avg":56.1333,
        "rank":304,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1013464",
        "name":"Lawson Humphries",
        "dob":"2003-04-24",
        "team":"GE",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":725,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I1017067",
        "name":"Darcy Wilmot",
        "dob":"2003-12-31",
        "team":"BL",
        "fantasy_average":60.7,
        "career_avg":60.6957,
        "rank":305,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I290246",
        "name":"Tom Campbell",
        "dob":"1991-11-02",
        "team":"SK",
        "fantasy_average":0.0,
        "career_avg":59.9592,
        "rank":685,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I998260",
        "name":"Jack Bowes",
        "dob":"1998-01-26",
        "team":"GE",
        "fantasy_average":60.7,
        "career_avg":65.64,
        "rank":306,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1004998",
        "name":"Todd Marshall",
        "dob":"1998-10-08",
        "team":"PA",
        "fantasy_average":60.2,
        "career_avg":57.9213,
        "rank":337,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1009191",
        "name":"Miles Bergman",
        "dob":"2001-10-18",
        "team":"PA",
        "fantasy_average":60.0,
        "career_avg":63.4902,
        "rank":308,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I998390",
        "name":"Changkuoth Jiath",
        "dob":"1999-06-13",
        "team":"HW",
        "fantasy_average":56.5,
        "career_avg":62.8,
        "rank":310,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027678",
        "name":"Billy Wilson",
        "dob":"2005-06-16",
        "team":"CA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":708,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I1017118",
        "name":"Josh Goater",
        "dob":"2003-06-02",
        "team":"NM",
        "fantasy_average":54.5,
        "career_avg":57.0909,
        "rank":311,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027821",
        "name":"Caleb Windsor",
        "dob":"2005-06-09",
        "team":"ME",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":745,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1005247",
        "name":"Sam Taylor",
        "dob":"1999-05-05",
        "team":"GWS",
        "fantasy_average":55.9,
        "career_avg":55.5,
        "rank":312,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I281091",
        "name":"Hugh Greenwood",
        "dob":"1992-03-06",
        "team":"NM",
        "fantasy_average":59.3,
        "career_avg":76.8348,
        "rank":350,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1011583",
        "name":"Lachie Jones",
        "dob":"2002-04-09",
        "team":"PA",
        "fantasy_average":44.6,
        "career_avg":45.1875,
        "rank":313,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I293884",
        "name":"Jake Stringer",
        "dob":"1994-04-25",
        "team":"ES",
        "fantasy_average":62.0,
        "career_avg":64.1319,
        "rank":591,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1005144",
        "name":"Massimo D'Ambrosio",
        "dob":"2003-06-05",
        "team":"HW",
        "fantasy_average":41.8,
        "career_avg":47.9333,
        "rank":314,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I993878",
        "name":"Shaun Mannagh",
        "dob":"1997-08-06",
        "team":"GE",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":727,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1005717",
        "name":"Nick Coffield",
        "dob":"1999-10-23",
        "team":"WB",
        "fantasy_average":0.0,
        "career_avg":60.2,
        "rank":315,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1024096",
        "name":"Caleb Mitchell",
        "dob":"2004-08-10",
        "team":"SY",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":686,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I1024279",
        "name":"Arie Schoenmaker",
        "dob":"2005-01-07",
        "team":"SK",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":316,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027656",
        "name":"Cooper Simpson",
        "dob":"2005-02-13",
        "team":"FR",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":721,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I294508",
        "name":"Aidan Corr",
        "dob":"1994-05-17",
        "team":"NM",
        "fantasy_average":58.8,
        "career_avg":47.3636,
        "rank":317,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017089",
        "name":"Oskar Faulkhead",
        "dob":"2003-02-11",
        "team":"GC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":646,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1029261",
        "name":"Bailey Macdonald",
        "dob":"2004-08-04",
        "team":"HW",
        "fantasy_average":52.5,
        "career_avg":52.5,
        "rank":318,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1024023",
        "name":"Daniel Curtin",
        "dob":"2005-03-08",
        "team":"AD",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":700,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I1016268",
        "name":"Alex Cincotta",
        "dob":"1996-12-17",
        "team":"CA",
        "fantasy_average":48.1,
        "career_avg":48.0625,
        "rank":319,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027959",
        "name":"Olli Hotton",
        "dob":"2004-09-06",
        "team":"SK",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":684,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1017095",
        "name":"Miller Bergman",
        "dob":"2003-01-25",
        "team":"NM",
        "fantasy_average":44.9,
        "career_avg":41.6923,
        "rank":320,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1021353",
        "name":"Lachlan Cowan",
        "dob":"2004-12-01",
        "team":"CA",
        "fantasy_average":40.6,
        "career_avg":40.5714,
        "rank":321,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1011985",
        "name":"Hugo Ralphsmith",
        "dob":"2001-11-09",
        "team":"RI",
        "fantasy_average":38.9,
        "career_avg":44.3871,
        "rank":322,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027925",
        "name":"Harvey Thomas",
        "dob":"2005-08-08",
        "team":"GWS",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":738,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1011954",
        "name":"Nick Bryan",
        "dob":"2001-10-22",
        "team":"ES",
        "fantasy_average":54.9,
        "career_avg":52.3571,
        "rank":323,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1020057",
        "name":"Harry Barnett",
        "dob":"2004-01-22",
        "team":"WC",
        "fantasy_average":9.0,
        "career_avg":9.0,
        "rank":324,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I294596",
        "name":"Tim Membrey",
        "dob":"1994-05-26",
        "team":"SK",
        "fantasy_average":54.4,
        "career_avg":67.8228,
        "rank":392,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1013462",
        "name":"Jase Burgoyne",
        "dob":"2003-07-15",
        "team":"PA",
        "fantasy_average":35.8,
        "career_avg":50.0833,
        "rank":325,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1009317",
        "name":"Bruce Reville ",
        "dob":"2001-02-22",
        "team":"BL",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":706,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1020104",
        "name":"Jakob Ryan",
        "dob":"2004-09-20",
        "team":"CW",
        "fantasy_average":19.0,
        "career_avg":19.0,
        "rank":326,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1014013",
        "name":"Lachlan Charleson",
        "dob":"2005-01-29",
        "team":"PA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":753,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1019939",
        "name":"William Rowlands",
        "dob":"2005-06-19",
        "team":"GC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":734,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1002228",
        "name":"Lachie Fogarty",
        "dob":"1999-04-01",
        "team":"CA",
        "fantasy_average":61.2,
        "career_avg":59.4706,
        "rank":328,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1020881",
        "name":"Oliver Wiltshire",
        "dob":"2002-09-15",
        "team":"GE",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":728,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1023473",
        "name":"Nick Watson",
        "dob":"2005-02-24",
        "team":"HW",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":742,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1006135",
        "name":"Xavier O'Halloran",
        "dob":"2000-07-11",
        "team":"GWS",
        "fantasy_average":60.9,
        "career_avg":49.9524,
        "rank":330,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1029262",
        "name":"Will Lorenz",
        "dob":"2005-02-19",
        "team":"PA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":754,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I993816",
        "name":"Darcy Tucker",
        "dob":"1997-01-23",
        "team":"NM",
        "fantasy_average":60.8,
        "career_avg":62.3871,
        "rank":331,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I294592",
        "name":"Kamdyn McIntosh",
        "dob":"1994-04-03",
        "team":"RI",
        "fantasy_average":59.7,
        "career_avg":61.828,
        "rank":341,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I999331",
        "name":"Darcy Fogarty",
        "dob":"1999-09-25",
        "team":"AD",
        "fantasy_average":60.4,
        "career_avg":51.141,
        "rank":332,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I280744",
        "name":"Luke Breust",
        "dob":"1990-11-11",
        "team":"HW",
        "fantasy_average":60.4,
        "career_avg":69.8982,
        "rank":333,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I291962",
        "name":"Chad Wingard",
        "dob":"1993-07-29",
        "team":"HW",
        "fantasy_average":60.4,
        "career_avg":79.0829,
        "rank":334,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1005330",
        "name":"Kade Chandler",
        "dob":"2000-01-13",
        "team":"ME",
        "fantasy_average":59.0,
        "career_avg":51.3462,
        "rank":335,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1027875",
        "name":"Darcy Wilson",
        "dob":"2005-08-18",
        "team":"SK",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":763,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I291849",
        "name":"Brody Mihocek",
        "dob":"1993-02-04",
        "team":"CW",
        "fantasy_average":60.3,
        "career_avg":61.2768,
        "rank":336,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1015329",
        "name":"Billy Dowling",
        "dob":"2004-07-01",
        "team":"AD",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":608,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1008855",
        "name":"Oskar Baker",
        "dob":"1998-05-25",
        "team":"WB",
        "fantasy_average":60.2,
        "career_avg":58.5161,
        "rank":338,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1027704",
        "name":"Joel Freijah",
        "dob":"2005-11-14",
        "team":"WB",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":777,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1009301",
        "name":"Jamarra Ugle-Hagan",
        "dob":"2002-04-04",
        "team":"WB",
        "fantasy_average":60.0,
        "career_avg":53.5349,
        "rank":339,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I298470",
        "name":"Shane McAdam",
        "dob":"1995-05-28",
        "team":"ME",
        "fantasy_average":59.7,
        "career_avg":55.1,
        "rank":340,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1017970",
        "name":"Conrad Williams",
        "dob":"2004-11-30",
        "team":"FR",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":634,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1027969",
        "name":"Harvey Johnston",
        "dob":"2005-08-18",
        "team":"WC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":770,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I992330",
        "name":"Jordon Sweet",
        "dob":"1998-02-02",
        "team":"PA",
        "fantasy_average":0.0,
        "career_avg":61.0909,
        "rank":670,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I290307",
        "name":"Dane Rampe",
        "dob":"1990-06-02",
        "team":"SY",
        "fantasy_average":59.6,
        "career_avg":64.9619,
        "rank":343,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1023475",
        "name":"Blake Drury",
        "dob":"2004-01-11",
        "team":"NM",
        "fantasy_average":26.3,
        "career_avg":26.25,
        "rank":344,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1020032",
        "name":"Loch Rawlinson",
        "dob":"2005-06-01",
        "team":"WC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":772,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I998647",
        "name":"Mason Cox",
        "dob":"1991-03-14",
        "team":"CW",
        "fantasy_average":59.4,
        "career_avg":54.9604,
        "rank":345,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I1000980",
        "name":"Lloyd Meek",
        "dob":"1998-04-22",
        "team":"HW",
        "fantasy_average":59.4,
        "career_avg":54.4516,
        "rank":346,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1027949",
        "name":"Kynan Brown",
        "dob":"2005-01-13",
        "team":"ME",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":746,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I993953",
        "name":"Eric Hipwood",
        "dob":"1997-09-13",
        "team":"BL",
        "fantasy_average":59.3,
        "career_avg":53.8881,
        "rank":347,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1027790",
        "name":"Hugo Garcia",
        "dob":"2005-05-22",
        "team":"SK",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":764,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1007099",
        "name":"Harry Sharp",
        "dob":"2002-12-17",
        "team":"BL",
        "fantasy_average":59.3,
        "career_avg":37.2222,
        "rank":348,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1011994",
        "name":"Ryan Byrnes",
        "dob":"2001-05-03",
        "team":"SK",
        "fantasy_average":62.0,
        "career_avg":60.5116,
        "rank":594,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I993795",
        "name":"David Cuningham",
        "dob":"1997-03-30",
        "team":"CA",
        "fantasy_average":59.3,
        "career_avg":56.4118,
        "rank":349,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1011981",
        "name":"Josh Worrell",
        "dob":"2001-04-11",
        "team":"AD",
        "fantasy_average":59.1,
        "career_avg":54.4118,
        "rank":353,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I992374",
        "name":"Dan Butler",
        "dob":"1996-06-03",
        "team":"SK",
        "fantasy_average":59.2,
        "career_avg":56.0976,
        "rank":352,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I297473",
        "name":"Jake Kelly",
        "dob":"1995-01-21",
        "team":"ES",
        "fantasy_average":58.9,
        "career_avg":58.5724,
        "rank":354,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1007102",
        "name":"Mark O'Connor",
        "dob":"1997-01-17",
        "team":"GE",
        "fantasy_average":61.9,
        "career_avg":57.0722,
        "rank":595,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I298290",
        "name":"Marc Pittonet",
        "dob":"1996-06-03",
        "team":"CA",
        "fantasy_average":58.7,
        "career_avg":58.0357,
        "rank":355,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I990740",
        "name":"Rory Lobb",
        "dob":"1993-02-09",
        "team":"WB",
        "fantasy_average":58.5,
        "career_avg":65.0331,
        "rank":356,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I290838",
        "name":"Jack Darling",
        "dob":"1992-06-13",
        "team":"WC",
        "fantasy_average":58.4,
        "career_avg":68.1927,
        "rank":357,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1011803",
        "name":"Cody Weightman",
        "dob":"2001-01-15",
        "team":"WB",
        "fantasy_average":58.4,
        "career_avg":53.6364,
        "rank":358,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I991988",
        "name":"Zak Jones",
        "dob":"1995-03-15",
        "team":"SK",
        "fantasy_average":54.5,
        "career_avg":69.7008,
        "rank":389,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1023495",
        "name":"Oliver Hollands",
        "dob":"2004-01-16",
        "team":"CA",
        "fantasy_average":58.2,
        "career_avg":58.1765,
        "rank":359,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I999321",
        "name":"Michael Frederick",
        "dob":"2000-05-17",
        "team":"FR",
        "fantasy_average":58.1,
        "career_avg":51.9464,
        "rank":360,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1012833",
        "name":"Eddie Ford",
        "dob":"2002-06-21",
        "team":"NM",
        "fantasy_average":57.6,
        "career_avg":53.45,
        "rank":361,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1008882",
        "name":"Charlie Ballard",
        "dob":"1999-07-23",
        "team":"GC",
        "fantasy_average":57.3,
        "career_avg":53.6273,
        "rank":362,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1009708",
        "name":"Jack Buckley",
        "dob":"1997-12-17",
        "team":"GWS",
        "fantasy_average":57.2,
        "career_avg":53.9,
        "rank":363,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I297456",
        "name":"Nick Holman",
        "dob":"1995-05-29",
        "team":"GC",
        "fantasy_average":57.0,
        "career_avg":57.3091,
        "rank":364,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006232",
        "name":"Sam Wicks",
        "dob":"1999-09-14",
        "team":"SY",
        "fantasy_average":56.8,
        "career_avg":52.1277,
        "rank":365,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I997316",
        "name":"Lewis Young",
        "dob":"1998-12-20",
        "team":"CA",
        "fantasy_average":56.7,
        "career_avg":53.5636,
        "rank":366,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1011589",
        "name":"Caleb Poulter",
        "dob":"2002-10-12",
        "team":"WB",
        "fantasy_average":56.7,
        "career_avg":59.8571,
        "rank":367,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1013220",
        "name":"Nathan O'Driscoll",
        "dob":"2002-05-17",
        "team":"FR",
        "fantasy_average":56.5,
        "career_avg":59.3,
        "rank":368,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I298302",
        "name":"Caleb Marchbank",
        "dob":"1996-12-07",
        "team":"CA",
        "fantasy_average":56.0,
        "career_avg":56.3158,
        "rank":369,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017126",
        "name":"Sam Darcy",
        "dob":"2003-07-19",
        "team":"WB",
        "fantasy_average":20.0,
        "career_avg":41.1667,
        "rank":370,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I999326",
        "name":"Brad Close",
        "dob":"1998-07-30",
        "team":"GE",
        "fantasy_average":55.9,
        "career_avg":59.2,
        "rank":371,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1012860",
        "name":"Oliver Henry",
        "dob":"2002-07-29",
        "team":"GE",
        "fantasy_average":55.9,
        "career_avg":51.9333,
        "rank":372,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I293581",
        "name":"Lincoln McCarthy",
        "dob":"1993-10-22",
        "team":"BL",
        "fantasy_average":55.5,
        "career_avg":57.6614,
        "rank":373,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1000932",
        "name":"Tom Doedee",
        "dob":"1997-03-01",
        "team":"BL",
        "fantasy_average":55.5,
        "career_avg":62.9146,
        "rank":374,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I291720",
        "name":"Will Hoskin-Elliott",
        "dob":"1993-09-02",
        "team":"CW",
        "fantasy_average":55.5,
        "career_avg":64.7944,
        "rank":375,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1013268",
        "name":"Alex Davies",
        "dob":"2002-03-18",
        "team":"GC",
        "fantasy_average":55.4,
        "career_avg":48.76,
        "rank":376,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I281124",
        "name":"Levi Casboult",
        "dob":"1990-03-15",
        "team":"GC",
        "fantasy_average":55.4,
        "career_avg":55.8032,
        "rank":377,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I291848",
        "name":"Robbie Fox",
        "dob":"1993-04-16",
        "team":"SY",
        "fantasy_average":55.3,
        "career_avg":52.6667,
        "rank":378,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1009226",
        "name":"Thomson Dow",
        "dob":"2001-10-16",
        "team":"RI",
        "fantasy_average":55.0,
        "career_avg":45.9412,
        "rank":380,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I291978",
        "name":"Harry Cunningham",
        "dob":"1993-12-06",
        "team":"SY",
        "fantasy_average":55.0,
        "career_avg":63.0175,
        "rank":381,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I291351",
        "name":"Jack Gunston",
        "dob":"1991-10-16",
        "team":"HW",
        "fantasy_average":54.8,
        "career_avg":77.4924,
        "rank":382,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I296225",
        "name":"Willie Rioli",
        "dob":"1995-06-04",
        "team":"PA",
        "fantasy_average":54.8,
        "career_avg":56.6875,
        "rank":383,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I298281",
        "name":"Jake Lever",
        "dob":"1996-03-05",
        "team":"ME",
        "fantasy_average":54.7,
        "career_avg":57.6757,
        "rank":384,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1013230",
        "name":"Logan McDonald",
        "dob":"2002-04-04",
        "team":"SY",
        "fantasy_average":54.7,
        "career_avg":50.6098,
        "rank":385,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1008123",
        "name":"Jake Riccardi",
        "dob":"1999-11-07",
        "team":"GWS",
        "fantasy_average":54.6,
        "career_avg":54.8636,
        "rank":386,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I996580",
        "name":"Ethan Hughes",
        "dob":"1994-12-07",
        "team":"FR",
        "fantasy_average":54.5,
        "career_avg":57.51,
        "rank":387,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I291819",
        "name":"Adam Tomlinson",
        "dob":"1993-08-10",
        "team":"ME",
        "fantasy_average":54.5,
        "career_avg":64.8397,
        "rank":388,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I990290",
        "name":"Tom Barrass",
        "dob":"1995-10-08",
        "team":"WC",
        "fantasy_average":53.9,
        "career_avg":57.0569,
        "rank":396,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I295446",
        "name":"Sam Collins",
        "dob":"1994-06-15",
        "team":"GC",
        "fantasy_average":54.4,
        "career_avg":52.5577,
        "rank":390,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1004985",
        "name":"Ben Paton",
        "dob":"1998-10-19",
        "team":"SK",
        "fantasy_average":54.4,
        "career_avg":56.1692,
        "rank":391,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I296190",
        "name":"Jack Martin",
        "dob":"1995-01-29",
        "team":"CA",
        "fantasy_average":54.1,
        "career_avg":69.6781,
        "rank":393,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1021013",
        "name":"Ned Moyle",
        "dob":"2002-02-15",
        "team":"GC",
        "fantasy_average":54.0,
        "career_avg":54.0,
        "rank":394,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I997230",
        "name":"Tyson Stengle",
        "dob":"1998-10-19",
        "team":"GE",
        "fantasy_average":53.9,
        "career_avg":57.2456,
        "rank":395,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I297504",
        "name":"Daniel McStay",
        "dob":"1995-06-24",
        "team":"CW",
        "fantasy_average":53.8,
        "career_avg":52.1455,
        "rank":397,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006550",
        "name":"Jack Petruccelle",
        "dob":"1999-04-12",
        "team":"WC",
        "fantasy_average":53.8,
        "career_avg":49.1,
        "rank":398,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1009380",
        "name":"Jeremy Sharp",
        "dob":"2001-08-13",
        "team":"FR",
        "fantasy_average":0.0,
        "career_avg":54.2727,
        "rank":422,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1002240",
        "name":"Jaidyn Stephenson",
        "dob":"1999-01-15",
        "team":"NM",
        "fantasy_average":53.6,
        "career_avg":67.451,
        "rank":399,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1005000",
        "name":"Laitham Vandermeer",
        "dob":"1999-02-03",
        "team":"WB",
        "fantasy_average":53.1,
        "career_avg":47.5641,
        "rank":400,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1018075",
        "name":"Lachlan Gollant",
        "dob":"2001-09-12",
        "team":"AD",
        "fantasy_average":52.8,
        "career_avg":44.5,
        "rank":401,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1014038",
        "name":"Callum M. Brown",
        "dob":"2000-08-15",
        "team":"GWS",
        "fantasy_average":52.8,
        "career_avg":51.6957,
        "rank":402,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I993480",
        "name":"Dougal Howard",
        "dob":"1996-03-25",
        "team":"SK",
        "fantasy_average":52.8,
        "career_avg":51.4017,
        "rank":403,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1002143",
        "name":"Ben McKay",
        "dob":"1997-12-24",
        "team":"ES",
        "fantasy_average":52.6,
        "career_avg":43.6197,
        "rank":404,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I291533",
        "name":"Tom McDonald",
        "dob":"1992-09-18",
        "team":"ME",
        "fantasy_average":52.5,
        "career_avg":70.2556,
        "rank":405,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1015370",
        "name":"Max Michalanney",
        "dob":"2004-02-26",
        "team":"AD",
        "fantasy_average":52.4,
        "career_avg":52.3636,
        "rank":406,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1004757",
        "name":"Beau McCreery",
        "dob":"2001-04-19",
        "team":"CW",
        "fantasy_average":52.4,
        "career_avg":48.9038,
        "rank":407,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1012819",
        "name":"Josh Treacy",
        "dob":"2002-08-04",
        "team":"FR",
        "fantasy_average":52.3,
        "career_avg":46.6944,
        "rank":408,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1004034",
        "name":"Brandon Zerk-Thatcher",
        "dob":"1998-08-25",
        "team":"PA",
        "fantasy_average":52.2,
        "career_avg":47.7255,
        "rank":409,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I997933",
        "name":"Griffin Logue",
        "dob":"1998-04-13",
        "team":"NM",
        "fantasy_average":51.9,
        "career_avg":49.7532,
        "rank":410,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1008893",
        "name":"Harrison Petty",
        "dob":"1999-11-12",
        "team":"ME",
        "fantasy_average":51.8,
        "career_avg":44.7719,
        "rank":411,
        "positions":["DEF", "FWD"]
    },
    {
        "player_id":"CD_I1006127",
        "name":"Rhylee West",
        "dob":"2000-07-12",
        "team":"WB",
        "fantasy_average":51.7,
        "career_avg":51.5455,
        "rank":415,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I994599",
        "name":"Riley Bonner",
        "dob":"1997-03-07",
        "team":"SK",
        "fantasy_average":51.3,
        "career_avg":63.3146,
        "rank":420,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1020250",
        "name":"Neil Erasmus",
        "dob":"2003-12-02",
        "team":"FR",
        "fantasy_average":51.7,
        "career_avg":53.0,
        "rank":413,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1013197",
        "name":"Sam Banks",
        "dob":"2003-04-02",
        "team":"RI",
        "fantasy_average":51.7,
        "career_avg":51.6667,
        "rank":414,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017720",
        "name":"Jacob van Rooyen",
        "dob":"2003-04-16",
        "team":"ME",
        "fantasy_average":51.6,
        "career_avg":51.6316,
        "rank":416,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1013511",
        "name":"Tyler Brockman",
        "dob":"2002-11-22",
        "team":"WC",
        "fantasy_average":51.5,
        "career_avg":47.8462,
        "rank":417,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I290797",
        "name":"Alex Keath",
        "dob":"1992-01-20",
        "team":"WB",
        "fantasy_average":51.4,
        "career_avg":52.8788,
        "rank":418,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1021103",
        "name":"Mitch Knevitt",
        "dob":"2003-01-08",
        "team":"GE",
        "fantasy_average":51.3,
        "career_avg":50.0,
        "rank":419,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1012210",
        "name":"Matt Roberts",
        "dob":"2003-07-31",
        "team":"SY",
        "fantasy_average":30.8,
        "career_avg":27.2857,
        "rank":567,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1013974",
        "name":"Mark Keane",
        "dob":"2000-03-17",
        "team":"AD",
        "fantasy_average":51.2,
        "career_avg":47.9,
        "rank":421,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1012862",
        "name":"Elijah Hollands",
        "dob":"2002-04-25",
        "team":"CA",
        "fantasy_average":51.1,
        "career_avg":59.0,
        "rank":423,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I298437",
        "name":"Callum Ah Chee",
        "dob":"1997-10-09",
        "team":"BL",
        "fantasy_average":50.9,
        "career_avg":50.963,
        "rank":424,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1018106",
        "name":"Joshua Bennetts",
        "dob":"2004-08-09",
        "team":"HW",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":656,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I294469",
        "name":"Aliir Aliir",
        "dob":"1994-09-05",
        "team":"PA",
        "fantasy_average":50.9,
        "career_avg":58.1057,
        "rank":425,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1020424",
        "name":"Jaiden Hunter",
        "dob":"2002-04-20",
        "team":"ES",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":629,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1008091",
        "name":"Joel Amartey",
        "dob":"1999-09-02",
        "team":"SY",
        "fantasy_average":50.8,
        "career_avg":49.1111,
        "rank":426,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1029973",
        "name":"Oliver Sestan",
        "dob":"2004-04-15",
        "team":"ME",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":663,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1008543",
        "name":"Harry Schoenberg",
        "dob":"2001-02-21",
        "team":"AD",
        "fantasy_average":50.7,
        "career_avg":59.8246,
        "rank":427,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1017961",
        "name":"Jayden Davey",
        "dob":"2004-02-26",
        "team":"ES",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":630,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I291867",
        "name":"Ben Brown",
        "dob":"1992-11-20",
        "team":"ME",
        "fantasy_average":50.7,
        "career_avg":62.2675,
        "rank":428,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006193",
        "name":"Bigoa Nyuon",
        "dob":"2001-05-18",
        "team":"NM",
        "fantasy_average":0.0,
        "career_avg":23.0,
        "rank":666,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1013996",
        "name":"Jordan Croft ",
        "dob":"2005-05-12",
        "team":"WB",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":774,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1013973",
        "name":"Matthew Owies",
        "dob":"1997-03-19",
        "team":"CA",
        "fantasy_average":50.6,
        "career_avg":51.0,
        "rank":430,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I991773",
        "name":"Billy Frampton",
        "dob":"1996-11-20",
        "team":"CW",
        "fantasy_average":50.6,
        "career_avg":50.6923,
        "rank":431,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1015323",
        "name":"Isaac Keeler",
        "dob":"2004-04-23",
        "team":"SK",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":680,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I996232",
        "name":"Matt Guelfi",
        "dob":"1997-08-14",
        "team":"ES",
        "fantasy_average":50.5,
        "career_avg":55.5806,
        "rank":432,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I290085",
        "name":"Taylor Duryea",
        "dob":"1991-04-24",
        "team":"WB",
        "fantasy_average":50.5,
        "career_avg":64.8807,
        "rank":433,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1023144",
        "name":"Robert Hansen Jr",
        "dob":"2004-03-13",
        "team":"NM",
        "fantasy_average":19.0,
        "career_avg":19.0,
        "rank":596,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023784",
        "name":"Anthony Caminiti",
        "dob":"2003-12-09",
        "team":"SK",
        "fantasy_average":50.4,
        "career_avg":50.3529,
        "rank":434,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1028105",
        "name":"Shadeau Brain",
        "dob":"2004-02-13",
        "team":"BL",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":616,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023708",
        "name":"Jaspa Fletcher",
        "dob":"2004-02-24",
        "team":"BL",
        "fantasy_average":50.3,
        "career_avg":50.2727,
        "rank":435,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1000061",
        "name":"Callum Coleman-Jones",
        "dob":"1999-06-13",
        "team":"NM",
        "fantasy_average":50.3,
        "career_avg":53.9286,
        "rank":436,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1020097",
        "name":"Ashton Moir",
        "dob":"2005-04-15",
        "team":"CA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":709,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I291357",
        "name":"Gary Rohan",
        "dob":"1991-06-07",
        "team":"GE",
        "fantasy_average":50.2,
        "career_avg":51.7123,
        "rank":437,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023142",
        "name":"Tyrell Dewar",
        "dob":"2004-03-27",
        "team":"WC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":695,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I993771",
        "name":"Marlion Pickett",
        "dob":"1992-01-06",
        "team":"RI",
        "fantasy_average":50.2,
        "career_avg":56.7917,
        "rank":438,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1023640",
        "name":"Koltyn Tholstrup",
        "dob":"2005-06-28",
        "team":"ME",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":744,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006148",
        "name":"Bobby Hill",
        "dob":"2000-02-09",
        "team":"CW",
        "fantasy_average":50.1,
        "career_avg":47.4833,
        "rank":439,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1027899",
        "name":"Nate Caddy",
        "dob":"2005-07-14",
        "team":"ES",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":716,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1017700",
        "name":"Jesse Motlop",
        "dob":"2003-11-23",
        "team":"CA",
        "fantasy_average":49.7,
        "career_avg":45.8333,
        "rank":440,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1034066",
        "name":"Nathan Wardius",
        "dob":"2004-10-12",
        "team":"GWS",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":739,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I293738",
        "name":"Sam Frost",
        "dob":"1993-08-28",
        "team":"HW",
        "fantasy_average":49.6,
        "career_avg":50.3203,
        "rank":441,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1008510",
        "name":"Corey Durdin",
        "dob":"2002-04-14",
        "team":"CA",
        "fantasy_average":49.5,
        "career_avg":43.2353,
        "rank":442,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1020072",
        "name":"Harry Lemmey",
        "dob":"2004-01-30",
        "team":"CA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":619,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1000937",
        "name":"Jack Henry",
        "dob":"1998-08-29",
        "team":"GE",
        "fantasy_average":49.5,
        "career_avg":51.4519,
        "rank":443,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1023275",
        "name":"Seth Campbell",
        "dob":"2004-12-29",
        "team":"RI",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":677,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I281007",
        "name":"Michael Walters",
        "dob":"1991-01-07",
        "team":"FR",
        "fantasy_average":49.4,
        "career_avg":73.8021,
        "rank":444,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023542",
        "name":"Ted Clohesy",
        "dob":"2004-09-06",
        "team":"GE",
        "fantasy_average":18.0,
        "career_avg":18.0,
        "rank":599,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023736",
        "name":"Jed Walter",
        "dob":"2005-06-08",
        "team":"GC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":731,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1002401",
        "name":"Brandon Starcevich",
        "dob":"1999-07-24",
        "team":"BL",
        "fantasy_average":49.3,
        "career_avg":50.7011,
        "rank":446,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I296291",
        "name":"Jake Kolodjashnij",
        "dob":"1995-08-09",
        "team":"GE",
        "fantasy_average":49.3,
        "career_avg":50.7548,
        "rank":447,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1008239",
        "name":"Joe Richards",
        "dob":"1999-11-23",
        "team":"CW",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":627,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1029416",
        "name":"Ryan Maric",
        "dob":"2004-09-06",
        "team":"WC",
        "fantasy_average":49.3,
        "career_avg":49.3,
        "rank":448,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I298358",
        "name":"Oleg Markov",
        "dob":"1996-05-08",
        "team":"CW",
        "fantasy_average":49.1,
        "career_avg":57.4225,
        "rank":449,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I994077",
        "name":"Mabior Chol",
        "dob":"1997-01-29",
        "team":"HW",
        "fantasy_average":49.0,
        "career_avg":50.5667,
        "rank":450,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1027921",
        "name":"Max Gruzewski",
        "dob":"2004-07-21",
        "team":"GWS",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":651,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1017396",
        "name":"Mac Andrew",
        "dob":"2003-12-04",
        "team":"GC",
        "fantasy_average":48.9,
        "career_avg":48.8095,
        "rank":451,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I280824",
        "name":"Jake Melksham",
        "dob":"1991-08-29",
        "team":"ME",
        "fantasy_average":48.8,
        "career_avg":62.9032,
        "rank":452,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1019975",
        "name":"Jack Delean",
        "dob":"2005-04-15",
        "team":"FR",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":720,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006030",
        "name":"Jacob Koschitzke",
        "dob":"2000-07-11",
        "team":"RI",
        "fantasy_average":48.8,
        "career_avg":49.1915,
        "rank":453,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1020650",
        "name":"Darcy Jones",
        "dob":"2004-04-03",
        "team":"GWS",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":649,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023482",
        "name":"Cam Mackenzie",
        "dob":"2004-01-21",
        "team":"HW",
        "fantasy_average":48.6,
        "career_avg":48.6429,
        "rank":454,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023056",
        "name":"Steely Green",
        "dob":"2004-01-09",
        "team":"RI",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":678,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1002795",
        "name":"Jordan Boyd",
        "dob":"1998-09-22",
        "team":"CA",
        "fantasy_average":48.5,
        "career_avg":46.4,
        "rank":455,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1024064",
        "name":"Aiden O'Driscoll",
        "dob":"2005-07-22",
        "team":"WB",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":775,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I992048",
        "name":"Anthony Scott",
        "dob":"1995-02-28",
        "team":"WB",
        "fantasy_average":48.5,
        "career_avg":46.463,
        "rank":456,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1027965",
        "name":"Max Ramsden",
        "dob":"2003-04-19",
        "team":"HW",
        "fantasy_average":30.5,
        "career_avg":30.5,
        "rank":569,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1016433",
        "name":"Shannon Neale",
        "dob":"2002-07-25",
        "team":"GE",
        "fantasy_average":48.0,
        "career_avg":41.6,
        "rank":457,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1029158",
        "name":"Xavier Walsh",
        "dob":"2005-09-06",
        "team":"PA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":755,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1017063",
        "name":"Toby Conway",
        "dob":"2003-04-24",
        "team":"GE",
        "fantasy_average":48.0,
        "career_avg":48.0,
        "rank":458,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1035129",
        "name":"Rob Monahan",
        "dob":"2004-06-29",
        "team":"CA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":707,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006013",
        "name":"James Peatling",
        "dob":"2000-08-21",
        "team":"GWS",
        "fantasy_average":48.0,
        "career_avg":49.68,
        "rank":459,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1020594",
        "name":"Jye Amiss",
        "dob":"2003-07-31",
        "team":"FR",
        "fantasy_average":47.9,
        "career_avg":48.0435,
        "rank":460,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023486",
        "name":"Matthew Jefferson",
        "dob":"2004-03-08",
        "team":"ME",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":662,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1009229",
        "name":"Sam De Koning",
        "dob":"2001-02-26",
        "team":"GE",
        "fantasy_average":47.9,
        "career_avg":47.225,
        "rank":461,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I993806",
        "name":"Sam Weideman",
        "dob":"1997-06-26",
        "team":"ES",
        "fantasy_average":47.6,
        "career_avg":44.5833,
        "rank":462,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023787",
        "name":"Charlie Clarke",
        "dob":"2004-01-04",
        "team":"WB",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":696,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I998180",
        "name":"Bailey Banfield",
        "dob":"1998-02-26",
        "team":"FR",
        "fantasy_average":47.5,
        "career_avg":50.2857,
        "rank":463,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1028019",
        "name":"Logan Morris",
        "dob":"2005-05-10",
        "team":"BL",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":703,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1009189",
        "name":"Jack Mahony",
        "dob":"2001-11-12",
        "team":"GC",
        "fantasy_average":47.5,
        "career_avg":45.5814,
        "rank":464,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1032100",
        "name":"Calsher Dear",
        "dob":"2005-08-04",
        "team":"HW",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":743,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006576",
        "name":"Luke Edwards",
        "dob":"2002-01-12",
        "team":"WC",
        "fantasy_average":47.1,
        "career_avg":48.5833,
        "rank":465,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1012828",
        "name":"Finlay Macrae",
        "dob":"2002-03-13",
        "team":"CW",
        "fantasy_average":47.0,
        "career_avg":40.0,
        "rank":466,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1017093",
        "name":"Cooper Hamilton",
        "dob":"2003-09-24",
        "team":"GWS",
        "fantasy_average":47.0,
        "career_avg":51.0,
        "rank":467,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1012048",
        "name":"Sebit Kuek",
        "dob":"2000-11-11",
        "team":"FR",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":639,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1017091",
        "name":"Jai Serong",
        "dob":"2003-02-16",
        "team":"HW",
        "fantasy_average":47.0,
        "career_avg":40.75,
        "rank":468,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1022383",
        "name":"Liam Fawcett",
        "dob":"2005-04-22",
        "team":"RI",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":757,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1020959",
        "name":"Daniel Turner",
        "dob":"2002-01-28",
        "team":"ME",
        "fantasy_average":47.0,
        "career_avg":40.3333,
        "rank":469,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1023530",
        "name":"Jacob Konstanty",
        "dob":"2004-11-09",
        "team":"SY",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":689,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1010708",
        "name":"Sam Butler",
        "dob":"2003-02-10",
        "team":"HW",
        "fantasy_average":46.6,
        "career_avg":41.1176,
        "rank":470,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1012386",
        "name":"Samson Ryan",
        "dob":"2000-12-09",
        "team":"RI",
        "fantasy_average":46.6,
        "career_avg":43.4,
        "rank":471,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I1002347",
        "name":"Jack Payne",
        "dob":"1999-10-15",
        "team":"BL",
        "fantasy_average":46.5,
        "career_avg":48.7273,
        "rank":472,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1015714",
        "name":"Matthew Allison",
        "dob":"2002-01-29",
        "team":"SK",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":682,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023496",
        "name":"Noah Long",
        "dob":"2004-08-23",
        "team":"WC",
        "fantasy_average":46.5,
        "career_avg":46.4737,
        "rank":473,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1016140",
        "name":"Wade Derksen",
        "dob":"2001-06-18",
        "team":"GWS",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":653,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I997823",
        "name":"Josh Rotham",
        "dob":"1998-02-25",
        "team":"WC",
        "fantasy_average":46.4,
        "career_avg":57.1695,
        "rank":474,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1020066",
        "name":"Thomas Scully",
        "dob":"2004-11-02",
        "team":"PA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":672,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1017703",
        "name":"Judd McVee",
        "dob":"2003-08-07",
        "team":"ME",
        "fantasy_average":46.1,
        "career_avg":46.1304,
        "rank":475,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1032042",
        "name":"Phoenix Gothard",
        "dob":"2005-09-07",
        "team":"GWS",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":737,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1005199",
        "name":"Elliott Himmelberg",
        "dob":"1998-06-04",
        "team":"AD",
        "fantasy_average":46.0,
        "career_avg":50.439,
        "rank":476,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1013165",
        "name":"Andy Moniz-Wakefield",
        "dob":"2003-10-26",
        "team":"ME",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":658,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I997974",
        "name":"Ash Johnson",
        "dob":"1997-10-06",
        "team":"CW",
        "fantasy_average":45.7,
        "career_avg":48.2381,
        "rank":477,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1017959",
        "name":"Lance Collard",
        "dob":"2005-03-26",
        "team":"SK",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":762,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1012857",
        "name":"Jack Ginnivan",
        "dob":"2002-12-09",
        "team":"HW",
        "fantasy_average":45.7,
        "career_avg":49.0278,
        "rank":478,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1019945",
        "name":"Phoenix Foster",
        "dob":"2004-09-12",
        "team":"GE",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":643,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1008198",
        "name":"Tom McCartin",
        "dob":"1999-12-30",
        "team":"SY",
        "fantasy_average":45.7,
        "career_avg":45.6731,
        "rank":479,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027870",
        "name":"Tom Anastasopoulos",
        "dob":"2005-05-31",
        "team":"PA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":752,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1006144",
        "name":"Ben King",
        "dob":"2000-07-07",
        "team":"GC",
        "fantasy_average":45.6,
        "career_avg":44.2877,
        "rank":480,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1002282",
        "name":"Charlie Spargo",
        "dob":"1999-11-25",
        "team":"ME",
        "fantasy_average":45.5,
        "career_avg":52.0909,
        "rank":481,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1009392",
        "name":"Jack Buller",
        "dob":"2001-05-16",
        "team":"SY",
        "fantasy_average":19.0,
        "career_avg":19.0,
        "rank":597,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1002403",
        "name":"Ben Miller",
        "dob":"1999-08-31",
        "team":"RI",
        "fantasy_average":45.4,
        "career_avg":43.5417,
        "rank":482,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I1023531",
        "name":"Jack O'Sullivan",
        "dob":"2004-10-22",
        "team":"HW",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":655,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I298211",
        "name":"Darcy Fort",
        "dob":"1993-08-06",
        "team":"BL",
        "fantasy_average":45.3,
        "career_avg":53.375,
        "rank":483,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I1023544",
        "name":"Brayden George",
        "dob":"2004-01-13",
        "team":"NM",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":667,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I999824",
        "name":"Quinton Narkle",
        "dob":"1997-12-03",
        "team":"PA",
        "fantasy_average":45.3,
        "career_avg":55.7429,
        "rank":484,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1027985",
        "name":"Luke Lloyd",
        "dob":"2005-08-08",
        "team":"BL",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":704,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1005986",
        "name":"Malcolm Rosas",
        "dob":"2001-06-27",
        "team":"GC",
        "fantasy_average":45.2,
        "career_avg":44.2162,
        "rank":485,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1020979",
        "name":"Cooper Harvey",
        "dob":"2004-07-12",
        "team":"NM",
        "fantasy_average":44.7,
        "career_avg":44.6667,
        "rank":486,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1008185",
        "name":"Ned McHenry",
        "dob":"2000-07-13",
        "team":"AD",
        "fantasy_average":44.5,
        "career_avg":47.7333,
        "rank":487,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I990816",
        "name":"Aaron Francis",
        "dob":"1997-08-10",
        "team":"SY",
        "fantasy_average":44.5,
        "career_avg":48.5758,
        "rank":488,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1018018",
        "name":"Cooper Sharman",
        "dob":"2000-07-25",
        "team":"SK",
        "fantasy_average":44.4,
        "career_avg":46.8571,
        "rank":489,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1005107",
        "name":"Nathan Murphy",
        "dob":"1999-12-15",
        "team":"CW",
        "fantasy_average":44.2,
        "career_avg":44.7347,
        "rank":490,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1015827",
        "name":"Nik Cox",
        "dob":"2002-01-15",
        "team":"ES",
        "fantasy_average":44.2,
        "career_avg":52.5161,
        "rank":491,
        "positions":["DEF", "MID"]
    },
    {
        "player_id":"CD_I298409",
        "name":"Alex Pearce",
        "dob":"1995-06-09",
        "team":"FR",
        "fantasy_average":44.2,
        "career_avg":42.8762,
        "rank":492,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1015886",
        "name":"Max Heath",
        "dob":"2002-10-24",
        "team":"SK",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":683,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I1024666",
        "name":"Lloyd Johnston",
        "dob":"2004-09-21",
        "team":"GC",
        "fantasy_average":44.0,
        "career_avg":44.0,
        "rank":493,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1002947",
        "name":"Paul Curtis",
        "dob":"2003-03-04",
        "team":"NM",
        "fantasy_average":43.9,
        "career_avg":47.0278,
        "rank":494,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1013201",
        "name":"Jye Menzie",
        "dob":"2002-10-28",
        "team":"ES",
        "fantasy_average":43.8,
        "career_avg":43.6522,
        "rank":495,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I993917",
        "name":"Ben Long",
        "dob":"1997-08-21",
        "team":"GC",
        "fantasy_average":43.8,
        "career_avg":49.2747,
        "rank":496,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1022844",
        "name":"Oscar Steene",
        "dob":"2003-08-23",
        "team":"CW",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":628,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I295222",
        "name":"Joel Hamling",
        "dob":"1993-04-09",
        "team":"SY",
        "fantasy_average":43.8,
        "career_avg":49.0116,
        "rank":497,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1013153",
        "name":"Patrick Parnell",
        "dob":"2002-03-04",
        "team":"AD",
        "fantasy_average":43.6,
        "career_avg":46.5,
        "rank":498,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1009308",
        "name":"Noah Cumberland",
        "dob":"2001-03-15",
        "team":"RI",
        "fantasy_average":43.2,
        "career_avg":51.875,
        "rank":499,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1009386",
        "name":"Jaxon Prior",
        "dob":"2001-06-04",
        "team":"BL",
        "fantasy_average":43.0,
        "career_avg":47.9667,
        "rank":500,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1031792",
        "name":"Finnbar Maley",
        "dob":"2003-07-18",
        "team":"NM",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":751,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I1009421",
        "name":"Finn Maginness",
        "dob":"2001-02-23",
        "team":"HW",
        "fantasy_average":43.0,
        "career_avg":47.5313,
        "rank":501,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I990840",
        "name":"Jack Hayes",
        "dob":"1996-03-06",
        "team":"SK",
        "fantasy_average":43.0,
        "career_avg":58.0,
        "rank":502,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1013611",
        "name":"Sam Sturt",
        "dob":"2000-05-12",
        "team":"FR",
        "fantasy_average":42.9,
        "career_avg":41.3333,
        "rank":503,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1011755",
        "name":"Harrison Jones",
        "dob":"2001-02-25",
        "team":"ES",
        "fantasy_average":42.8,
        "career_avg":42.5161,
        "rank":504,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I281078",
        "name":"Liam Jones",
        "dob":"1991-02-24",
        "team":"WB",
        "fantasy_average":42.6,
        "career_avg":47.4085,
        "rank":505,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1016189",
        "name":"Henry Smith",
        "dob":"2002-09-24",
        "team":"BL",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":614,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I290527",
        "name":"Trent McKenzie",
        "dob":"1992-04-03",
        "team":"PA",
        "fantasy_average":42.5,
        "career_avg":59.4083,
        "rank":506,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017057",
        "name":"Campbell Chesser",
        "dob":"2003-04-27",
        "team":"WC",
        "fantasy_average":42.5,
        "career_avg":42.5,
        "rank":507,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1021660",
        "name":"Mate Colina",
        "dob":"1999-05-20",
        "team":"RI",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":676,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I294013",
        "name":"Sean Lemmens",
        "dob":"1994-11-02",
        "team":"GC",
        "fantasy_average":42.3,
        "career_avg":48.8483,
        "rank":508,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1008975",
        "name":"Kaine Baldwin",
        "dob":"2002-05-30",
        "team":"ES",
        "fantasy_average":42.0,
        "career_avg":38.5,
        "rank":509,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1004948",
        "name":"Cooper Stephens",
        "dob":"2001-01-17",
        "team":"HW",
        "fantasy_average":0.0,
        "career_avg":51.8,
        "rank":657,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1021200",
        "name":"Lachlan McAndrew",
        "dob":"2000-05-26",
        "team":"SY",
        "fantasy_average":42.0,
        "career_avg":42.0,
        "rank":510,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1027693",
        "name":"Archer Reid",
        "dob":"2005-09-19",
        "team":"WC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":771,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I293854",
        "name":"Matt Taberner",
        "dob":"1993-06-17",
        "team":"FR",
        "fantasy_average":41.3,
        "career_avg":59.547,
        "rank":511,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1004819",
        "name":"Jed McEntee",
        "dob":"2001-02-15",
        "team":"PA",
        "fantasy_average":41.3,
        "career_avg":40.75,
        "rank":512,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1028291",
        "name":"Coen Livingstone",
        "dob":"2005-05-25",
        "team":"WC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":773,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I1008478",
        "name":"Rhyan Mansell",
        "dob":"2000-06-04",
        "team":"RI",
        "fantasy_average":41.2,
        "career_avg":43.25,
        "rank":513,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1015781",
        "name":"Charlie Comben",
        "dob":"2001-07-20",
        "team":"NM",
        "fantasy_average":41.1,
        "career_avg":39.5556,
        "rank":514,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1020802",
        "name":"Jai Culley",
        "dob":"2003-02-24",
        "team":"WC",
        "fantasy_average":41.0,
        "career_avg":52.7778,
        "rank":515,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I996743",
        "name":"Lewis Melican",
        "dob":"1996-11-04",
        "team":"SY",
        "fantasy_average":40.9,
        "career_avg":43.6552,
        "rank":516,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1002220",
        "name":"Esava Ratugolea",
        "dob":"1998-07-24",
        "team":"PA",
        "fantasy_average":40.5,
        "career_avg":45.7571,
        "rank":517,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1011243",
        "name":"Callum Jamieson",
        "dob":"2000-07-31",
        "team":"WC",
        "fantasy_average":40.3,
        "career_avg":40.2308,
        "rank":518,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I293883",
        "name":"Jed Bews",
        "dob":"1993-12-14",
        "team":"GE",
        "fantasy_average":40.1,
        "career_avg":47.6689,
        "rank":519,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1008230",
        "name":"Nick Murray",
        "dob":"2000-12-18",
        "team":"AD",
        "fantasy_average":39.9,
        "career_avg":37.5814,
        "rank":520,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017128",
        "name":"Dante Visentini",
        "dob":"2003-02-13",
        "team":"PA",
        "fantasy_average":39.7,
        "career_avg":39.6667,
        "rank":521,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1017043",
        "name":"Judson Clarke",
        "dob":"2003-10-17",
        "team":"RI",
        "fantasy_average":39.7,
        "career_avg":40.1875,
        "rank":522,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I296269",
        "name":"Darcy Gardiner",
        "dob":"1995-09-22",
        "team":"BL",
        "fantasy_average":39.5,
        "career_avg":49.8446,
        "rank":523,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1015332",
        "name":"Harvey Harrison",
        "dob":"2003-11-10",
        "team":"CW",
        "fantasy_average":39.5,
        "career_avg":39.5,
        "rank":524,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I991939",
        "name":"Zaine Cordy",
        "dob":"1996-10-27",
        "team":"SK",
        "fantasy_average":39.2,
        "career_avg":43.8115,
        "rank":525,
        "positions":["DEF", "FWD"]
    },
    {
        "player_id":"CD_I1009029",
        "name":"James Borlase",
        "dob":"2002-07-18",
        "team":"AD",
        "fantasy_average":39.0,
        "career_avg":39.0,
        "rank":526,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017255",
        "name":"Francis Evans",
        "dob":"2001-08-23",
        "team":"PA",
        "fantasy_average":39.0,
        "career_avg":37.125,
        "rank":527,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1030866",
        "name":"Kyah Farris-White",
        "dob":"2004-01-02",
        "team":"ME",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":661,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1015777",
        "name":"Ryan Angwin",
        "dob":"2002-12-12",
        "team":"GWS",
        "fantasy_average":38.9,
        "career_avg":37.1875,
        "rank":528,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I997501",
        "name":"Ryan Gardner",
        "dob":"1997-06-01",
        "team":"WB",
        "fantasy_average":38.8,
        "career_avg":37.7292,
        "rank":529,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1018296",
        "name":"Kalin Lane",
        "dob":"2001-12-05",
        "team":"BL",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":615,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1012127",
        "name":"Brandon Ryan",
        "dob":"1997-11-07",
        "team":"BL",
        "fantasy_average":38.7,
        "career_avg":38.6667,
        "rank":530,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023446",
        "name":"Alex Mirkov",
        "dob":"1999-11-17",
        "team":"CA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":617,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1009385",
        "name":"Deven Robertson",
        "dob":"2001-06-30",
        "team":"BL",
        "fantasy_average":38.6,
        "career_avg":51.0909,
        "rank":531,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1023489",
        "name":"Hudson O'Keeffe",
        "dob":"2004-12-16",
        "team":"CA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":620,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1009410",
        "name":"Brandon Walker",
        "dob":"2002-10-17",
        "team":"FR",
        "fantasy_average":38.6,
        "career_avg":46.9302,
        "rank":532,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1009320",
        "name":"Hewago Oea",
        "dob":"2001-11-13",
        "team":"GC",
        "fantasy_average":38.5,
        "career_avg":38.5,
        "rank":533,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1027701",
        "name":"Max Knobel",
        "dob":"2004-06-27",
        "team":"FR",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":638,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1018425",
        "name":"Taj Woewodin",
        "dob":"2003-03-26",
        "team":"ME",
        "fantasy_average":38.5,
        "career_avg":38.5,
        "rank":534,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1027702",
        "name":"Lachlan Smith",
        "dob":"2005-10-05",
        "team":"WB",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":778,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1005053",
        "name":"Noah Answerth",
        "dob":"1999-08-06",
        "team":"BL",
        "fantasy_average":38.3,
        "career_avg":54.6863,
        "rank":535,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I296334",
        "name":"Orazio Fantasia",
        "dob":"1995-09-14",
        "team":"CA",
        "fantasy_average":37.7,
        "career_avg":64.2872,
        "rank":536,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1021015",
        "name":"Karl Worner",
        "dob":"2002-06-16",
        "team":"FR",
        "fantasy_average":37.5,
        "career_avg":37.5,
        "rank":537,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I280819",
        "name":"Dylan Grimes",
        "dob":"1991-07-16",
        "team":"RI",
        "fantasy_average":37.1,
        "career_avg":47.7513,
        "rank":538,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1020371",
        "name":"Jack Williams",
        "dob":"2003-12-01",
        "team":"WC",
        "fantasy_average":37.1,
        "career_avg":33.8182,
        "rank":539,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1028371",
        "name":"Odin Jones",
        "dob":"2005-09-20",
        "team":"FR",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":722,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1006533",
        "name":"Riley Garcia",
        "dob":"2001-01-30",
        "team":"WB",
        "fantasy_average":37.0,
        "career_avg":41.8889,
        "rank":540,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I999715",
        "name":"Jy Farrar",
        "dob":"1996-12-07",
        "team":"GC",
        "fantasy_average":36.9,
        "career_avg":49.1765,
        "rank":541,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1018433",
        "name":"Tylar Young",
        "dob":"1998-09-05",
        "team":"RI",
        "fantasy_average":36.9,
        "career_avg":36.8947,
        "rank":542,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027901",
        "name":"William Green",
        "dob":"2005-09-08",
        "team":"SY",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":767,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1003520",
        "name":"Darragh Joyce",
        "dob":"1997-04-23",
        "team":"BL",
        "fantasy_average":36.0,
        "career_avg":34.7647,
        "rank":543,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1005326",
        "name":"Jackson Mead",
        "dob":"2001-09-30",
        "team":"PA",
        "fantasy_average":35.9,
        "career_avg":42.8824,
        "rank":545,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1017933",
        "name":"Alwyn Davey Jnr",
        "dob":"2004-02-26",
        "team":"ES",
        "fantasy_average":35.8,
        "career_avg":35.8,
        "rank":546,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023346",
        "name":"Liam Reidy",
        "dob":"2000-06-14",
        "team":"FR",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":637,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1017114",
        "name":"Tyler Sonsie",
        "dob":"2003-01-27",
        "team":"RI",
        "fantasy_average":35.7,
        "career_avg":53.6667,
        "rank":547,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023743",
        "name":"Nicholas Madden",
        "dob":"2004-05-17",
        "team":"GWS",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":652,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1005547",
        "name":"Josh Corbett",
        "dob":"1996-04-23",
        "team":"FR",
        "fantasy_average":35.2,
        "career_avg":45.9744,
        "rank":548,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1035199",
        "name":"Oliver Hayes-Brown",
        "dob":"2000-04-28",
        "team":"RI",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":759,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I291753",
        "name":"Sam Day",
        "dob":"1992-09-06",
        "team":"GC",
        "fantasy_average":35.0,
        "career_avg":50.5781,
        "rank":549,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1012881",
        "name":"Ollie Lord",
        "dob":"2002-01-02",
        "team":"PA",
        "fantasy_average":35.0,
        "career_avg":35.0,
        "rank":550,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1027966",
        "name":"Vigo Visentini",
        "dob":"2005-09-05",
        "team":"ES",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":717,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1003546",
        "name":"Joel Smith",
        "dob":"1996-02-25",
        "team":"ME",
        "fantasy_average":34.8,
        "career_avg":36.5,
        "rank":551,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1012144",
        "name":"Kallan Dawson",
        "dob":"1998-07-22",
        "team":"NM",
        "fantasy_average":34.0,
        "career_avg":54.6,
        "rank":552,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I992472",
        "name":"Oscar McDonald",
        "dob":"1996-03-18",
        "team":"FR",
        "fantasy_average":0.0,
        "career_avg":50.0,
        "rank":718,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017751",
        "name":"Josh Fahey",
        "dob":"2003-11-11",
        "team":"GWS",
        "fantasy_average":33.7,
        "career_avg":33.7143,
        "rank":553,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1020586",
        "name":"Arthur Jones",
        "dob":"2003-07-18",
        "team":"WB",
        "fantasy_average":33.7,
        "career_avg":33.6923,
        "rank":554,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1011944",
        "name":"Joe Furphy",
        "dob":"1999-08-05",
        "team":"GE",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":723,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1011437",
        "name":"Harry Edwards",
        "dob":"2000-10-01",
        "team":"WC",
        "fantasy_average":33.5,
        "career_avg":45.6667,
        "rank":555,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1004995",
        "name":"Jordon Butts",
        "dob":"1999-12-31",
        "team":"AD",
        "fantasy_average":33.4,
        "career_avg":37.85,
        "rank":556,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1012852",
        "name":"Charlie Lazzaro",
        "dob":"2002-03-25",
        "team":"NM",
        "fantasy_average":33.3,
        "career_avg":38.12,
        "rank":557,
        "positions":["MID", "FWD"]
    },
    {
        "player_id":"CD_I1015473",
        "name":"Will Verrall",
        "dob":"2004-03-11",
        "team":"ME",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":665,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1008616",
        "name":"Matthew Coulthard",
        "dob":"2001-05-11",
        "team":"RI",
        "fantasy_average":33.3,
        "career_avg":33.25,
        "rank":558,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1032966",
        "name":"James O'Donnell",
        "dob":"2002-08-31",
        "team":"WB",
        "fantasy_average":33.1,
        "career_avg":33.0833,
        "rank":559,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027837",
        "name":"Clay Tucker",
        "dob":"2004-08-09",
        "team":"HW",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":654,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1006100",
        "name":"Thomas Berry",
        "dob":"2000-05-01",
        "team":"GC",
        "fantasy_average":33.0,
        "career_avg":31.85,
        "rank":560,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1031506",
        "name":"Taylor Goad",
        "dob":"2005-04-28",
        "team":"NM",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":750,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1025034",
        "name":"Oliver Dempsey",
        "dob":"2003-01-07",
        "team":"GE",
        "fantasy_average":32.8,
        "career_avg":31.8571,
        "rank":561,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1020627",
        "name":"Hamish Free",
        "dob":"1998-07-23",
        "team":"NM",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":668,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1020968",
        "name":"Jackson Archer",
        "dob":"2003-01-09",
        "team":"NM",
        "fantasy_average":32.8,
        "career_avg":37.25,
        "rank":562,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1024304",
        "name":"Mitchell Edwards",
        "dob":"2005-06-02",
        "team":"GE",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":729,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1014026",
        "name":"Kai Lohmann",
        "dob":"2003-05-06",
        "team":"BL",
        "fantasy_average":32.3,
        "career_avg":32.0,
        "rank":563,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I290314",
        "name":"Lachlan Keeffe",
        "dob":"1990-04-14",
        "team":"GWS",
        "fantasy_average":32.3,
        "career_avg":42.2,
        "rank":564,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1015929",
        "name":"Luke Cleary",
        "dob":"2002-03-05",
        "team":"WB",
        "fantasy_average":31.0,
        "career_avg":52.3333,
        "rank":565,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1024982",
        "name":"Oisin Mullin",
        "dob":"2000-02-11",
        "team":"GE",
        "fantasy_average":30.8,
        "career_avg":30.8333,
        "rank":566,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017665",
        "name":"Bodhi Uwland",
        "dob":"2003-07-25",
        "team":"GC",
        "fantasy_average":30.7,
        "career_avg":30.6667,
        "rank":568,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1008691",
        "name":"Leek Aleer",
        "dob":"2001-08-21",
        "team":"GWS",
        "fantasy_average":0.0,
        "career_avg":49.25,
        "rank":650,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1011449",
        "name":"Zane Trew",
        "dob":"2002-04-26",
        "team":"WC",
        "fantasy_average":30.5,
        "career_avg":32.5,
        "rank":570,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1017718",
        "name":"Rhett Bazzo",
        "dob":"2003-10-17",
        "team":"WC",
        "fantasy_average":30.3,
        "career_avg":37.7895,
        "rank":571,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1009551",
        "name":"Maurice Rioli",
        "dob":"2002-09-01",
        "team":"RI",
        "fantasy_average":29.7,
        "career_avg":35.5385,
        "rank":572,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1032017",
        "name":"Tew Jiath",
        "dob":"2005-03-02",
        "team":"CW",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":711,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1021122",
        "name":"Harry Rowston",
        "dob":"2004-08-12",
        "team":"GWS",
        "fantasy_average":29.4,
        "career_avg":29.4286,
        "rank":573,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1032629",
        "name":"Joe Fonti",
        "dob":"2004-12-24",
        "team":"GWS",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":736,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1004530",
        "name":"Jacob Wehr",
        "dob":"1998-07-05",
        "team":"GWS",
        "fantasy_average":28.8,
        "career_avg":50.2857,
        "rank":574,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1035198",
        "name":"Liam O'Connell",
        "dob":"2003-03-04",
        "team":"SK",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":760,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1009015",
        "name":"Lachlan McNeil",
        "dob":"2001-09-02",
        "team":"WB",
        "fantasy_average":27.5,
        "career_avg":39.4872,
        "rank":575,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I996692",
        "name":"Marty Hore",
        "dob":"1996-03-05",
        "team":"ME",
        "fantasy_average":0.0,
        "career_avg":61.8571,
        "rank":779,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I291509",
        "name":"Adam Kennedy",
        "dob":"1992-07-12",
        "team":"GWS",
        "fantasy_average":26.0,
        "career_avg":57.771,
        "rank":576,
        "positions":["DEF", "FWD"]
    },
    {
        "player_id":"CD_I1013093",
        "name":"Denver Grainger-Barras",
        "dob":"2002-04-17",
        "team":"HW",
        "fantasy_average":25.9,
        "career_avg":32.4286,
        "rank":577,
        "positions":["DEF", "FWD"]
    },
    {
        "player_id":"CD_I1017122",
        "name":"Blake Howes",
        "dob":"2003-04-07",
        "team":"ME",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":659,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I296280",
        "name":"James Tsitas",
        "dob":"1995-03-03",
        "team":"GC",
        "fantasy_average":25.8,
        "career_avg":25.2,
        "rank":578,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023547",
        "name":"James Van Es",
        "dob":"2004-08-07",
        "team":"SK",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":681,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027971",
        "name":"Toby McMullin",
        "dob":"2004-08-06",
        "team":"GWS",
        "fantasy_average":25.7,
        "career_avg":25.6667,
        "rank":579,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I993841",
        "name":"Josh Schache",
        "dob":"1997-08-21",
        "team":"ME",
        "fantasy_average":25.0,
        "career_avg":50.5147,
        "rank":580,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I294643",
        "name":"Alex Sexton",
        "dob":"1993-12-03",
        "team":"GC",
        "fantasy_average":24.8,
        "career_avg":53.9231,
        "rank":581,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I297767",
        "name":"Sam Durdin",
        "dob":"1996-06-06",
        "team":"CA",
        "fantasy_average":0.0,
        "career_avg":38.087,
        "rank":622,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1019038",
        "name":"Aaron Cadman",
        "dob":"2004-03-03",
        "team":"GWS",
        "fantasy_average":24.5,
        "career_avg":24.5,
        "rank":582,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1012826",
        "name":"Bailey Laurie",
        "dob":"2002-03-24",
        "team":"ME",
        "fantasy_average":24.5,
        "career_avg":24.5,
        "rank":583,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1008460",
        "name":"Harrison Arnold",
        "dob":"1999-04-08",
        "team":"SY",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":688,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1011839",
        "name":"James Blanck",
        "dob":"2000-11-20",
        "team":"HW",
        "fantasy_average":24.3,
        "career_avg":27.1739,
        "rank":584,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1015830",
        "name":"Domanic Akuei",
        "dob":"2002-05-12",
        "team":"CA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":618,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1021152",
        "name":"Jacob Bauer",
        "dob":"2002-06-04",
        "team":"RI",
        "fantasy_average":23.8,
        "career_avg":23.75,
        "rank":585,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1022999",
        "name":"Kaleb Smith",
        "dob":"2004-11-20",
        "team":"RI",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":675,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1000068",
        "name":"Chris Burgess",
        "dob":"1995-11-26",
        "team":"AD",
        "fantasy_average":22.0,
        "career_avg":45.3889,
        "rank":586,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023498",
        "name":"Cooper Vickery",
        "dob":"2004-12-16",
        "team":"SY",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":687,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1018424",
        "name":"Corey Warner",
        "dob":"2003-10-07",
        "team":"SY",
        "fantasy_average":20.7,
        "career_avg":20.6667,
        "rank":587,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1013278",
        "name":"Reef McInnes",
        "dob":"2002-12-12",
        "team":"CW",
        "fantasy_average":20.6,
        "career_avg":28.9,
        "rank":588,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1013257",
        "name":"Sam Clohesy",
        "dob":"2002-12-12",
        "team":"GC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":733,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017078",
        "name":"Josh Sinn",
        "dob":"2003-01-07",
        "team":"PA",
        "fantasy_average":19.7,
        "career_avg":23.75,
        "rank":589,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I1021296",
        "name":"Tom McCallum",
        "dob":"2004-09-15",
        "team":"PA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":673,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1022410",
        "name":"William McCabe",
        "dob":"2005-09-29",
        "team":"HW",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":740,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017086",
        "name":"Tom Brown",
        "dob":"2003-07-30",
        "team":"RI",
        "fantasy_average":62.0,
        "career_avg":62.0,
        "rank":592,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1023625",
        "name":"Riley Hardeman",
        "dob":"2005-02-27",
        "team":"NM",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":748,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1020668",
        "name":"Joshua Draper",
        "dob":"2004-02-08",
        "team":"FR",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":636,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1013978",
        "name":"James Madden",
        "dob":"1999-11-15",
        "team":"BL",
        "fantasy_average":18.0,
        "career_avg":38.3077,
        "rank":598,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1023534",
        "name":"Hugh Bond",
        "dob":"2004-09-25",
        "team":"AD",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":609,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1015862",
        "name":"Conor Stone",
        "dob":"2002-04-22",
        "team":"GWS",
        "fantasy_average":17.7,
        "career_avg":29.4286,
        "rank":600,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1027852",
        "name":"Oscar Murdoch",
        "dob":"2004-09-24",
        "team":"GE",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":642,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027877",
        "name":"Connor O'Sullivan",
        "dob":"2005-05-19",
        "team":"GE",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":724,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1021108",
        "name":"James Tunstill",
        "dob":"2003-07-18",
        "team":"BL",
        "fantasy_average":16.0,
        "career_avg":31.4,
        "rank":602,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1027893",
        "name":"Oscar Ryan",
        "dob":"2005-05-15",
        "team":"AD",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":699,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I294504",
        "name":"Tom Clurey",
        "dob":"1994-03-23",
        "team":"PA",
        "fantasy_average":16.0,
        "career_avg":50.281,
        "rank":603,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1002138",
        "name":"Toby Pink",
        "dob":"1998-08-11",
        "team":"NM",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":747,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I998782",
        "name":"Buku Khamis",
        "dob":"2000-03-24",
        "team":"WB",
        "fantasy_average":15.0,
        "career_avg":42.7,
        "rank":604,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1013260",
        "name":"Carter Michael",
        "dob":"2002-05-22",
        "team":"BL",
        "fantasy_average":0.0,
        "career_avg":47.0,
        "rank":613,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1013233",
        "name":"Jack Carroll",
        "dob":"2002-12-20",
        "team":"CA",
        "fantasy_average":13.0,
        "career_avg":46.0,
        "rank":605,
        "positions":["MID"]
    },
    {
        "player_id":"CD_I997254",
        "name":"Nathan Kreuger",
        "dob":"1999-06-25",
        "team":"CW",
        "fantasy_average":10.0,
        "career_avg":32.0,
        "rank":606,
        "positions":["RUC", "FWD"]
    },
    {
        "player_id":"CD_I1022927",
        "name":"Hugh Davies",
        "dob":"2004-09-28",
        "team":"FR",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":635,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027021",
        "name":"Josh Carmichael",
        "dob":"1999-09-23",
        "team":"CW",
        "fantasy_average":8.0,
        "career_avg":47.4286,
        "rank":607,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1023487",
        "name":"Lewis Hayes",
        "dob":"2004-12-17",
        "team":"ES",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":631,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017757",
        "name":"William Edwards",
        "dob":"2003-05-08",
        "team":"SY",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":691,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1021276",
        "name":"Kyle Marshall",
        "dob":"2004-04-10",
        "team":"PA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":671,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1022473",
        "name":"Bodie Ryan",
        "dob":"2005-04-20",
        "team":"HW",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":741,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1008159",
        "name":"Will Hamill",
        "dob":"2000-11-17",
        "team":"AD",
        "fantasy_average":0.0,
        "career_avg":37.1622,
        "rank":612,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1023174",
        "name":"Jed Adams",
        "dob":"2004-05-14",
        "team":"ME",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":660,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027990",
        "name":"Ollie Murphy",
        "dob":"2005-09-16",
        "team":"FR",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":719,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1032119",
        "name":"James Leake",
        "dob":"2005-10-02",
        "team":"GWS",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":735,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1020595",
        "name":"Jordyn Baker",
        "dob":"2004-05-10",
        "team":"WC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":694,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1009197",
        "name":"Charlie Dean",
        "dob":"2001-06-19",
        "team":"CW",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":625,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1017077",
        "name":"Angus McLennan",
        "dob":"2003-09-02",
        "team":"SK",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":679,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1023017",
        "name":"Jedd Busslinger",
        "dob":"2004-03-11",
        "team":"WB",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":698,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1015748",
        "name":"Aiden Begg",
        "dob":"2002-10-08",
        "team":"CW",
        "fantasy_average":0.0,
        "career_avg":43.6667,
        "rank":624,
        "positions":["RUC"]
    },
    {
        "player_id":"CD_I1013315",
        "name":"Sandy Brock",
        "dob":"2002-12-14",
        "team":"GC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":647,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1015457",
        "name":"Jaiden Magor",
        "dob":"2004-02-16",
        "team":"SY",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":690,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1023515",
        "name":"Archie Roberts",
        "dob":"2005-11-18",
        "team":"ES",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":715,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027706",
        "name":"Luamon Lual",
        "dob":"2005-03-28",
        "team":"ES",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":714,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027964",
        "name":"Matthew Carroll",
        "dob":"2005-11-28",
        "team":"CA",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":710,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1023502",
        "name":"Coby Burgiel",
        "dob":"2004-09-09",
        "team":"WC",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":693,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1027872",
        "name":"Angus Hastie",
        "dob":"2005-09-19",
        "team":"SK",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":761,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1012521",
        "name":"Tex Wanganeen",
        "dob":"2003-10-10",
        "team":"ES",
        "fantasy_average":0.0,
        "career_avg":22.0,
        "rank":632,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1012817",
        "name":"Zach Reid",
        "dob":"2002-03-02",
        "team":"ES",
        "fantasy_average":0.0,
        "career_avg":41.5,
        "rank":633,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1024685",
        "name":"Patrick Snell",
        "dob":"2005-07-18",
        "team":"SY",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":765,
        "positions":["DEF", "FWD"]
    },
    {
        "player_id":"CD_I1028551",
        "name":"Wil Dawson",
        "dob":"2005-12-20",
        "team":"NM",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":749,
        "positions":["DEF", "FWD"]
    },
    {
        "player_id":"CD_I1032650",
        "name":"Zane Zakostelsky",
        "dob":"2005-12-14",
        "team":"BL",
        "fantasy_average":0.0,
        "career_avg":0.0,
        "rank":702,
        "positions":["DEF", "RUC"]
    },
    {
        "player_id":"CD_I1005150",
        "name":"Emerson Jeka",
        "dob":"2001-09-18",
        "team":"GE",
        "fantasy_average":0.0,
        "career_avg":36.4286,
        "rank":644,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1006087",
        "name":"Caleb Graham",
        "dob":"2000-09-12",
        "team":"GC",
        "fantasy_average":0.0,
        "career_avg":36.2162,
        "rank":645,
        "positions":["DEF"]
    },
    {
        "player_id":"CD_I1013532",
        "name":"Tom Fullarton",
        "dob":"1999-02-23",
        "team":"ME",
        "fantasy_average":0.0,
        "career_avg":39.1333,
        "rank":664,
        "positions":["FWD"]
    },
    {
        "player_id":"CD_I1017059",
        "name":"Josh Gibcus",
        "dob":"2003-04-04",
        "team":"RI",
        "fantasy_average":0.0,
        "career_avg":40.4706,
        "rank":674,
        "positions":["DEF"]
    }
]