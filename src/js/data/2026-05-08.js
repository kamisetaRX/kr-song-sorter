dataSetVersion = "2026-05-08";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Era",
    key: "era",
    tooltip: "Check this to restrict which era.",
    checked: true,
    sub: [
      { name: "Showa",  key: "showa",  checked: true },
      { name: "Heisei Phase 1", key: "heisei", checked: true },
      { name: "Heisei Phase 2", key: "heisei2", checked: true },
      { name: "Reiwa",  key: "reiwa",  checked: true },
    ]
  },
  {
    name: "Filter by Type",
    key: "type",
    tooltip: "Check this to restrict song types.",
    checked: false,
    sub: [
      { name: "Opening",        key: "op",        checked: true },
      { name: "Ending",         key: "ed",        checked: true },
      { name: "Insert Song",    key: "insert",    checked: true },
      { name: "Character Song", key: "character", tooltip: "Filters character songs. Note: Many character songs are CD-exclusive, so you may want to uncheck that", checked: true },
      { name: "Movie Song",     key: "movie",     checked: true },
      { name: "Specials/Miniseries Songs",     key: "special",     checked: true },
    ]
  },
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict which series are included.",
    checked: false,
    sub: [
      // Showa
      { name: "Kamen Rider (1971)", key: "1971",     checked: false },
      { name: "Kamen Rider V3",     key: "v3",       checked: false },
      { name: "Kamen Rider X",      key: "x",        checked: false },
      { name: "Kamen Rider Amazon", key: "amazon",   checked: false },
      { name: "Kamen Rider Stronger", key: "stronger", checked: false },
      { name: "Kamen Rider (Skyrider)", key: "skyrider", checked: false },
      { name: "Kamen Rider Super-1", key: "super-1", checked: false },
      { name: "Kamen Rider ZX",     key: "ZX",       checked: false },
      { name: "Kamen Rider Black",  key: "black",    checked: false },
      { name: "Kamen Rider Black RX", key: "blackrx", checked: false},
      // Heisei Phase 1
      { name: "Kamen Rider Kuuga",  key: "kuuga",    checked: false },
      { name: "Kamen Rider Agito",  key: "agito",    checked: false },
      { name: "Kamen Rider Ryuki",  key: "ryuki",    checked: false },
      { name: "Kamen Rider 555",    key: "555",      checked: false },
      { name: "Kamen Rider Blade",  key: "blade",    checked: false },
      { name: "Kamen Rider Hibiki", key: "hibiki",   checked: false },
      { name: "Kamen Rider Kabuto", key: "kabuto",   checked: false },
      { name: "Kamen Rider Den-O",  key: "den-o",    checked: false },
      { name: "Kamen Rider Kiva",   key: "kiva",     checked: false },
      { name: "Kamen Rider Decade", key: "decade",   checked: false },
      //Heisei Phase 2
      { name: "Kamen Rider W",      key: "w",        checked: false },
      { name: "Kamen Rider OOO",    key: "ooo",      checked: false },
      { name: "Kamen Rider Fourze", key: "fourze",   checked: false },
      { name: "Kamen Rider Wizard", key: "wizard",   checked: false },
      { name: "Kamen Rider Gaim",   key: "gaim",     checked: false },
      { name: "Kamen Rider Drive",  key: "drive",    checked: false },
      { name: "Kamen Rider Ghost",  key: "ghost",    checked: false },
      { name: "Kamen Rider Ex-Aid", key: "ex-aid",   checked: false },
      { name: "Kamen Rider Build",  key: "build",    checked: false },
      { name: "Kamen Rider Zi-O",   key: "zi-o",     checked: false },
      // Reiwa
      { name: "Kamen Rider Zero-One", key: "zero_one", checked: false },
      { name: "Kamen Rider Saber",    key: "saber",    checked: false },
      { name: "Kamen Rider Revice",   key: "revice",   checked: false },
      { name: "Kamen Rider Geats",    key: "geats",    checked: false },
      { name: "Kamen Rider Gotchard", key: "gotchard", checked: false },
      { name: "Kamen Rider Gavv",     key: "gavv", checked: false },
      { name: "Kamen Rider Zeztz",    key: "zeztz", checked: false },

      // EX
      { name: "EX Seasons",  key: "exseason", tooltip: "Includes Amazons, Shinobi, Black Sun, Outsiders, Girls Remix, and Dragon Knight",  checked: false },
      { name: "EX Movies",  key: "exmovie", tooltip: "Includes Showa Trilogy, and The First/Next",  checked: false },
      { name: "Other",  key: "other", tooltip: "Extra Material, such as one-offs, games, or misc material",  checked: false },
    ]
  },
  {
    name: "Exclude CD-Only Songs",
    key: "cd_only",
    tooltip: "Check this to exclude songs that only appear on CD and were not used in the show.",
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Let's Go!! Rider Kick",
    img:  "1U_sXt3XlvQ",
    opts: {
      era:    ["showa"],
      type:   ["op"],
      series: ["1971"]
    }
  },
  {
    name: "Kamen Rider no Uta",
    img:  "CufNaC8LbY0",
    opts: {
      era:    ["showa"],
      type:   ["ed"],
      series: ["1971"]
    }
  },
  {
    name: "Rider Action",
    img:  "vGDmiRVFrk0",
    opts: {
      era:    ["showa"],
      type:   ["op", "ed"],
      series: ["1971"]
    }
  },
  {
    name: "Lonely Kamen Rider",
    img:  "4-qKHWPeZlA",
    opts: {
      era:    ["showa"],
      type:   ["ed"],
      series: ["1971"]
    }
  },
  {
    name: "Kaettekuru Rider",
    img:  "yDCe8W7h3cc",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["1971"]
    }
  },
  {
    name: "Tatakae! Cyclone",
    img:  "er0KMfN7KEQ",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["1971"],
      cd_only: true
    }
  },
  {
    name: "Akuma no Shocker",
    img:  "1g10j7sgXa0",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["1971"],
      cd_only: true
    }
  },
  {
    name: "Rider no Komoriuta",
    img:  "cmHxqPF2qb8",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["1971"],
      cd_only: true
    }
  },
  {
    name: "Kaijin no Uta",
    img:  "25wgI8S1SAw",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["1971"],
      cd_only: true
    }
  },
  {
    name: "Kamen Rider Kazoeuta",
    img:  "o85h9nYAAy4",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["1971"],
      cd_only: true
    }
  },
  {
    name: "Bokura no Kamen Rider",
    img:  "NUq68PYCbyY",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["1971"],
      cd_only: true
    }
  },
  {
    name: "Oh! Shocker",
    img:  "lwrNSFMGytc",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["1971"],
      cd_only: true
    }
  },
  {
    name: "Kamen Rider Christmas",
    img:  "Gg1rsreyFAA",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["1971"],
      cd_only: true
    }
  },
  {
    name: "Tatakae! Kamen Rider V3",
    img:  "Uf_CaPx3QqY",
    opts: {
      era:    ["showa"],
      type:   ["op"],
      series: ["v3"]
    }
  },
  {
    name: "Shōnen Kamen Rider Tai no Uta",
    img:  "NPxCgBSXDbE",
    opts: {
      era:    ["showa"],
      type:   ["ed"],
      series: ["v3"]
    }
  },
  {
    name: "Hashire Hurricane",
    img:  "I96w4OPI0Q4",
    opts: {
      era:    ["showa"],
      type:   ["ed"],
      series: ["v3"]
    }
  },
  {
    name: "V3 no Hitori Uta",
    img:  "bcU-p5-mNDc",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["v3"],
      cd_only: true
    }
  },
  {
    name: "V3 no Komori Uta",
    img:  "XCpExHpiGpM",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["v3"],
      cd_only: true
    }
  },
  {
    name: "V3 no March",
    img:  "YCgHzORqPjo",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["v3"],
      cd_only: true
    }
  },
  {
    name: "V3 Action",
    img:  "j1bIJqDR_-s",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["v3"],
      cd_only: true
    }
  },
  {
    name: "Destron Sanka",
    img:  "y0skFL9WKyc",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["v3"],
      cd_only: true
    }
  },
  {
    name: "Fujimi no Otoko",
    img:  "LhuiUJ-ic4I",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["v3"],
      cd_only: true
    }
  },
  {
    name: "Bokura no Kamen Rider V3",
    img:  "_mxUUaWU1mA",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["v3"],
      cd_only: true
    }
  },
  {
    name: "Bokura no Riderman",
    img:  "ZZS-gyfvWD0",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["v3"]
    }
  },
  {
    name: "Kamen Rider Sanka",
    img:  "27MDMnYctrE",
    opts: {
      era:    ["showa"],
      type:   ["insert"],
      series: ["v3"],
      cd_only: true
    }
  },
  {
    name: "Set Up! Kamen Rider X",
    img:  "e2d9GIMM7nA",
    opts: {
      era:    ["showa"],
      type:   ["op"],
      series: ["x"]
    }
  },
  {
    name: "Ore wa X X Rider",
    img:  "_OCISFdX-Fg",
    opts: {
      era:    ["showa"],
      type:   ["ed"],
      series: ["x"]
    }
  },
  {
    name: "Shiroi Dangan Cruiser",
    img: "a2TTqYve9EQ",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["x"],
    }
  },
  {
    name: "Totsugeki Kamen Rider X",
    img: "YeuIKu-hYEI",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["x"],
      cd_only: true
    }
  },
  {
    name: "X Rider Action",
    img: "r4UAWgwo_t8",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["x"],
    }
  },
  {
    name: "X Rider Bokura no Nakama",
    img: "nCC9QeYgmp4",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["x"],
      cd_only: true
    }
  },
  {
    name: "X Rider Shiritori Uta",
    img: "-NVKNaBXmRs",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["x"],
      cd_only: true
    }
  },
  {
    name: "X Mecha No Uta",
    img: "CjuJY31V2Ds",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["x"],
      cd_only: true
    }
  },
  {
    name: "Rider Sanka",
    img: "DZNXJ9obWyA",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["x"],
      cd_only: true
    }
  },
  {
    name: "G.O.D. no March",
    img: "-vKfc_czKqE",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["x"],
      cd_only: true
    }
  },
  {
    name: "Keisuke Jin No Uta",
    img: "rBwZm3bCBIM",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["x"],
      cd_only: true
    }
  },
  {
    name: "Amazon Rider Koko ni Ari",
    img: "AOw--Fy69EQ",
    opts: {
      era: ["showa"],
      type: ["op"],
      series: ["amazon"],
    }
  },
  {
    name: "Amazon Da-Da-Da!!",
    img: "I_zdqhVE_hU",
    opts: {
      era: ["showa"],
      type: ["ed"],
      series: ["amazon"],
    }
  },
  {
    name: "Amazon Rider Action",
    img: "NaGy3SGCSL4",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["amazon"],
      cd_only: true
    }
  },
  {
    name: "Amazon Hitori",
    img: "1IsHvuYeTZs",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["amazon"],
      cd_only: true
    }
  },
  {
    name: "Amazon Issho Ni Tatakaou",
    img: "AbSphX5kHnU",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["amazon"],
      cd_only: true
    }
  },
  {
    name: "Amazon Oshiete Okure",
    img: "ZSLUopo-oek",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["amazon"],
      cd_only: true
    }
  },
  {
    name: "Amazon Taose",
    img: "Fggt-NrVz0c",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["amazon"],
      cd_only: true
    }
  },
  {
    name: "Bokura no Amazon Rider",
    img: "xHRb3gG4fMk",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["amazon"],
      cd_only: true
    }
  },
  {
    name: "Sono Na Wa Amazon",
    img: "VAT5Dn9eHoM",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["amazon"],
      cd_only: true
    }
  },
  {
    name: "Hashire Honoo no Jungler",
    img: "ojNwovRSQYQ",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["amazon"],
      cd_only: true
    }
  },
  {
    name: "Tokyo Jungle",
    img: "UgiNMHQVtBk",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["amazon"],
      cd_only: true
    }
  },
  {
    name: "Ore Wa Tachibana Tobee",
    img: "EG2f8JPQufM",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["amazon"],
      cd_only: true
    }
  },
  {
    name: "Kamen Rider Stronger no Uta",
    img: "bu2XLS6ZieM",
    opts: {
      era: ["showa"],
      type: ["op"],
      series: ["stronger"],
    }
  },
  {
    name: "Kyō mo Tatakau Stronger",
    img: "xRobtrt1LeM",
    opts: {
      era: ["showa"],
      type: ["ed"],
      series: ["stronger"],
    }
  },
  {
    name: "Stronger Action",
    img: "K2fI23K3PKo",
    opts: {
      era: ["showa"],
      type: ["ed"],
      series: ["stronger"],
    }
  },
  {
    name: "Kabutorow Boogie",
    img: "FjjHomW5SVw",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["stronger"],
      cd_only: true
    }
  },
  {
    name: "Stronger Ekaki Uta",
    img: "KlUO4bVGC2k",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["stronger"],
      cd_only: true
    }
  },
  {
    name: "Stronger Kazoe Uta",
    img: "O5qFHG-jiDQ",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["stronger"],
      cd_only: true
    }
  },
  {
    name: "Miyo!! Kamen Rider Stronger",
    img: "krV3MnJ34Ak",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["stronger"],
      cd_only: true
    }
  },
  {
    name: "Mune Ni Kagayaku S Mark",
    img: "aKCh7GFLYkw",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["stronger"],
      cd_only: true
    }
  },
  {
    name: "Wahhahha! Tsukuru zo Kyōfu no Kuni Wo",
    img: "_CSdhC8v0Ws",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["stronger"],
      cd_only: true
    }
  },
  {
    name: "Bokura no Aniki, Jou Shigeru",
    img: "rP3aW14j8TQ",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["stronger"],
      cd_only: true
    }
  },
  {
    name: "Sore Yuke Tackle-Chan",
    img: "8rZDDDaISCE",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["stronger"],
      cd_only: true
    }
  },
  {
    name: "Tatakae! Shichinin Rider",
    img: "DO8mknnualA",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["stronger"],
      cd_only: true
    }
  },
  {
    name: "Moero! Kamen Rider",
    img: "Yo3XDcPzuRA",
    opts: {
      era: ["showa"],
      type: ["op"],
      series: ["skyrider"],
    }
  },
  {
    name: "Otoko no Na wa Kamen Rider",
    img: "kY8hH8VnyGU",
    opts: {
      era: ["showa"],
      type: ["op"],
      series: ["skyrider"],
    }
  },
  {
    name: "Haruka naru Ai ni Kakete",
    img: "Yd32La6XvGA",
    opts: {
      era: ["showa"],
      type: ["ed"],
      series: ["skyrider"],
    }
  },
  {
    name: "Kagayake! Hachinin Rider",
    img: "uIllWUFhzV4",
    opts: {
      era: ["showa"],
      type: ["ed", "movie"],
      series: ["skyrider"],
    }
  },
  {
    name: "Are Wa Kamen Rider",
    img: "kMz79ronSqI",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["skyrider"],
      cd_only: true
    }
  },
  {
    name: "Ima Tatakai no Hi Ga Noboru",
    img: "b7FQXtfWVn8",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["skyrider"],
      cd_only: true
    }
  },
  {
    name: "Henshin! Kamen Rider",
    img: "R0XF-3vk5g0",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["skyrider"],
      cd_only: true
    }
  },
  {
    name: "Chiheisen Kara Yatte Kita Otoko",
    img: "P6HDkRgcFOE",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["skyrider"],
      cd_only: true
    }
  },
  {
    name: "Oh Oh Kamen Rider",
    img: "a3yKMaGlEVo",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["skyrider"],
      cd_only: true
    }
  },
  {
    name: "Kamen Rider Super-1",
    img: "UadDhIztmG0",
    opts: {
      era: ["showa"],
      type: ["op"],
      series: ["super-1"],
      cd_only: false
    }
  },
  {
    name: "Hi o Fuku Rider Ken",
    img: "XZE0GP-y8pQ",
    opts: {
      era: ["showa"],
      type: ["ed"],
      series: ["super-1"],
      cd_only: false
    }
  },
  {
    name: "Junior Rider Tai no Uta",
    img: "MRg1YLqhs5Y",
    opts: {
      era: ["showa"],
      type: ["ed"],
      series: ["super-1"],
      cd_only: false
    }
  },
  {
    name: "Go! Super Machine",
    img: "u9SPz8Ivy7w",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["super-1"],
      cd_only: true
    }
  },
  {
    name: "Muteki no Yuusha Super-1",
    img: "zvjojvqBr2o",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["super-1"],
      cd_only: true
    }
  },
  {
    name: "Sekai Ni Hitori",
    img: "mBHHdsrO_H4",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["super-1"],
      cd_only: true
    }
  },
  {
    name: "Five Hands Rock",
    img: "GlCAGsxNfbw",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["super-1"],
      cd_only: true
    }
  },
  {
    name: "Yume No Nagareboshi",
    img: "KNbaJDF5nME",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["super-1"],
      cd_only: true
    }
  },
  {
    name: "Hiden Sekishin Shourin-Ken",
    img: "Q7m0mZ9jw90",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["super-1"],
      cd_only: true
    }
  },
  {
    name: "9-Nin Rider Eien Ni",
    img: "y6tbNk9Rzj4",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["super-1"],
      cd_only: true
    }
  },
  {
    name: "Dragon Road",
    img: "mta7atqmmGI",
    opts: {
      era: ["showa"],
      type: ["op"],
      series: ["ZX"],
    }
  },
  {
    name: "FORGET MEMORIES",
    img: "-W0djMzMi4w",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["ZX"],
      cd_only: true
    }
  },
  {
    name: "Stars On Kamen Rider",
    img: "YCnbUS8nXlU",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["ZX"],
      cd_only: true
    }
  },
  {
    name: "Kamen Rider BLACK",
    img: "jroiVYj7qEU",
    opts: {
      era: ["showa"],
      type: ["op"],
      series: ["black"]
    }
  },
  {
    name: "Long Long ago, 20th Century",
    img: "7EJ_1gPoJR8",
    opts: {
      era: ["showa"],
      type: ["ed"],
      series: ["black"]
    }
  },
  {
    name: "BLACK ACTION",
    img: "rVyELvA950k",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["black"]
    }
  },
  {
    name: "Gekisou! Ni Dai Machine",
    img: "CTb6oa8czyY",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["black"]
    }
  },
  {
    name: "Goal E Mukatte Hashire",
    img: "pDZrUMairT4",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["black"]
    }
  },
  {
    name: "Hoshi no Lullaby",
    img: "x3bGYP768jc",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["black"]
    }
  },
  {
    name: "Black Hole Message",
    img: "shZSO48cixQ",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["black"]
    }
  },
  {
    name: "Henshin! Rider Black",
    img: "SqfNJnKkN1Q",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["black"]
    }
  },
  {
    name: "Ore no Seishun",
    img: "DjeGFpplTOM",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["black"]
    }
  },
  {
    name: "Let's Fight Rider",
    img: "ArRCoPkWxhU",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["black"]
    }
  },
  {
    name: "Kamen Rider BLACK RX",
    img: "O5N3JoIh9Jk",
    opts: {
      era: ["showa"],
      type: ["op"],
      series: ["blackrx"]
    }
  },
  {
    name: "Dareka ga Kimi o Aishiteru",
    img: "asYg85MSvSU",
    opts: {
      era: ["showa"],
      type: ["ed"],
      series: ["blackrx"]
    }
  },
  {
    name: "Unmei no Senshi",
    img: "jIFEQYdOOWE",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["blackrx"]
    }
  },
  {
    name: "Senjou no Rider RX",
    img: "2FtCYgICuJo",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["blackrx"]
    }
  },
  {
    name: "Hikari no Senshi",
    img: "TC8-iLrnSFc",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["blackrx"]
    }
  },
  {
    name: "Gekishin RX",
    img: "8jQvA3gm-ns",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["blackrx"]
    }
  },
  {
    name: "Battle Oh! RX",
    img: "IDH6IHNOpnw",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["blackrx"]
    }
  },
  {
    name: "Towa no Tame Ni Kimi no Tame Ni",
    img: "T_IcdUAYmjg",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["blackrx"]
    }
  },
  {
    name: "Kuroi Yuusha",
    img: "EirUHrlRQmg",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["blackrx"]
    }
  },
  {
    name: "Subete wa Kimi wo Ai Suru Tame Ni",
    img: "f-5zAjeMP_4",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["blackrx"]
    }
  },
  {
    name: "11 Rider Dai-Senka",
    img: "Q86V3Yh0UUY",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["blackrx"],
      cd_only: true
    }
  },
  {
    name: "Forever",
    img: "aRIhYanro70",
    opts: {
      era: ["showa"],
      type: ["movie", "ed", "op"],
      series: ["exmovie"]
    }
  },
  {
    name: "Hohoemi no Yukue",
    img: "WlDzX_xXNNw",
    opts: {
      era: ["showa"],
      type: ["showa"],
      series: ["exmovie"]
    }
  },
  {
    name: "Ai ga Tomaranai",
    img: "28Fp_U80VEw",
    opts: {
      era: ["showa"],
      type: ["movie", "ed", "op"],
      series: ["exmovie"]
    }
  },
  {
    name: "Just One Love",
    img: "u3N76UUP23s",
    opts: {
      era: ["showa"],
      type: ["insert"],
      series: ["exmovie"]
    }
  },
  {
    name: "Kokoro Tsunagu Ai",
    img: "dxxAzmlKK2M",
    opts: {
      era: ["showa"],
      type: ["movie", "ed", "op"],
      series: ["exmovie"]
    }
  },
  {
    name: "Kamen Rider SD OP",
    img: "kpq76eaFp8E",
    opts: {
      era: ["showa"],
      type: ["op"],
      series: ["other"]
    }
  },
  {
    name: "Kamen Rider Kuuga!",
    img:  "_D1UZFuK13I",
    opts: {
      era:    ["heisei"],
      type:   ["op"],
      series: ["kuuga"]
    }
  },
  {
    name: "Aozora ni Naru",
    img:  "6QMnGSPPAEk",
    opts: {
      era:    ["heisei"],
      type:   ["ed"],
      series: ["kuuga"]
    }
  },
  {
    name: "TRY & CHASE",
    img:  "dAOhM80vnLE",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "power of soul",
    img:  "T0fZCJ3Tn5o",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "Red Desire",
    img:  "KnfFmkvXCMI",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "Blue Higher",
    img:  "8pwPGmKN4b0",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "Believe in Miracle",
    img:  "7QDbBGZQ2hc",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "Edge of Green",
    img:  "gpXdu6z2yl0",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "Bara no Okite",
    img:  "DNyIIMN2HlQ",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "PURPLE PRIDE",
    img:  "E4GeXyJIln0",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "Say Alright!",
    img:  "SqPJKfS-6m0",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "Kyuukyoku no Yami",
    img:  "OX9SUM3ylTE",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "Love is my life",
    img:  "94_ZfZsmuiU",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "BEATCHASER 2000",
    img:  "hVnuDXF8yiU",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "Rising your power to Gold",
    img:  "eLXGqwU5ku0",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "Soukouki GOURAM",
    img:  "czAevy4Onz0",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "Tanpopo no Ohana",
    img:  "Kl5FMO89HLg",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "It comes rain",
    img:  "fXBEc7IQ3LA",
    opts: {
      era:    ["heisei"],
      type:   ["insert"],
      series: ["kuuga"],
      cd_only: true
    }
  },
  {
    name: "Kamen Rider AGITO",
    img: "CApClxcp0uw",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["agito"],
      cd_only: false
    }
  },
  {
    name: "Kamen Rider AGITO ~24.7 version~",
    img: "qi_af9AbWI4",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["agito"],
      cd_only: false
    }
  },
  {
    name: "BELIEVE YOURSELF",
    img: "SJnbPjIsRuU",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["agito"],
      cd_only: false
    }
  },
  {
    name: "STRANGER IN THE DARK",
    img: "g1knL2k7u4M",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["agito"],
      cd_only: false
    }
  },
  {
    name: "MACHINE TORNADER",
    img: "9D5xfZtvOLo",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["agito"],
      cd_only: false
    }
  },
  {
    name: "DEEP BREATH",
    img: "Y8zcew69EDc",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["agito"],
      cd_only: false
    }
  },
  {
    name: "Mou Hitotsu no Kamen no Gikyoku",
    img: "L8uYLWS4p0E",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["agito"],
      cd_only: true
    }
  },
  {
    name: "Burnin' your heart",
    img: "3Wvd54aw8iQ",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["agito"],
      cd_only: true
    }
  },
  {
    name: "One & Only",
    img: "1od2xm7GL3w",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["agito"],
      cd_only: true
    }
  },
  {
    name: "The usual suspects",
    img: "m1IWLTCb8Qc",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["agito"],
      cd_only: true
    }
  },
  {
    name: "Home sweet home",
    img: "uW-EgRACIdA",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["agito"],
      cd_only: true
    }
  },
  {
    name: "Searching for myself",
    img: "CY5Ywi5YKP4",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["agito"],
      cd_only: true
    }
  },
  {
    name: "Overlord",
    img: "OE0BIuPcWoE",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["agito"],
      cd_only: true
    }
  },
  {
    name: "NEVER DIE",
    img: "ddAyMhVEbKU",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["agito"],
      cd_only: true
    }
  },
  {
    name: "Emergency! Guard Chaser",
    img: "vsO2ewqDBpE",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["agito"],
      cd_only: true
    }
  },
  {
    name: "Extremes meet",
    img: "YxFQbaag16s",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["agito"],
      cd_only: true
    }
  },
  {
    name: "Jiken Da!",
    img: "xHVMRDss7hw",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["agito"],
      cd_only: false
    }
  },
  {
    name: "Dramatic Heibon",
    img: "TXTtkCAP6kM",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["agito"],
      cd_only: false
    }
  },
  {
    name: "Alive A Life",
    img: "hX42r-BoTS4",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["ryuki"],
      cd_only: false
    }
  },
  {
    name: "Hatenaki Inochi",
    img: "b34U8gJudQ0",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["ryuki"],
      cd_only: false
    }
  },
  {
    name: "Revolution",
    img: "Dih0vokuZXY",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["ryuki"],
      cd_only: false
    }
  },
  {
    name: "Hateshinai Honoo no Naka e",
    img: "stbsDzO6N6s",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["ryuki"],
      cd_only: true
    }
  },
  {
    name: "reborn",
    img: "2JCYcpI9660",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["ryuki"],
      cd_only: true
    }
  },
  {
    name: "Finel editioin Dragranzer - Darkraider",
    img: "g8LFH_xCrm0",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["ryuki"],
      cd_only: true
    }
  },
  {
    name: "Lonely Soldier",
    img: "qf8MMvcJj_Q",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["ryuki"],
      cd_only: false
    }
  },
  {
    name: "Dear Friend",
    img: "c1ni-5VJbtw",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["ryuki"],
      cd_only: true
    }
  },
  {
    name: "spinnin' around",
    img: "44KDMBmYgkM",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["ryuki"],
      cd_only: true
    }
  },
  {
    name: "Kienai Niji",
    img: "KIiQC3dKcWI",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["ryuki"],
      cd_only: true
    }
  },
  {
    name: "INORI",
    img: "9KiZMK_hZLE",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["ryuki"],
      cd_only: true
    }
  },
  {
    name: "Saigo no Negai",
    img: "6SXJkGJ9R_Q",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["ryuki"],
      cd_only: true
    }
  },
  {
    name: "Alive A life (Advent Mix)",
    img: "HSH4eQ061OQ",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["ryuki"],
      cd_only: false
    }
  },
  {
    name: "Go! Now! ~Alive A life neo~",
    img: "71JORra7R6U",
    opts: {
      era: ["heisei"],
      type: ["special"],
      series: ["ryuki"],
      cd_only: false
    }
  },
  {
    name: "Justiφ's",
    img: "JgG4H0_mYzE",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["555"],
      cd_only: false
    }
  },
  {
    name: "Dead or alive",
    img: "PLc5NYf4-Ws",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["555"],
      cd_only: false
    }
  },
  {
    name: "The people with no name",
    img: "q6Qc09XRQSA",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["555"],
      cd_only: false
    }
  },
  {
    name: "EGO ~ eyes glazing over",
    img: "fobDk2lzvB4",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["555"],
      cd_only: false
    }
  },
  {
    name: "Justiφ's-Accel Mix-",
    img: "bY2j6-IubYQ",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["555"],
      cd_only: false
    }
  },
  {
    name: "Identiφ‘s",
    img: "kaDkenwgtH0",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["555"],
      cd_only: false
    }
  },
  {
    name: "Double Standard",
    img: "phwac9uKOKs",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["555"],
      cd_only: true
    }
  },
  {
    name: "Hang on",
    img: "SYtl9ikI2Qk",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["555"],
      cd_only: true
    }
  },
  {
    name: "I wish",
    img: "6JuNN2n7JgI",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["555"],
      cd_only: true
    }
  },
  {
    name: "Red rock",
    img: "FhptGPeYrrA",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["555"],
      cd_only: true
    }
  },
  {
    name: "cross a river",
    img: "2eaHr-yEwQg",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["555"],
      cd_only: true
    }
  },
  {
    name: "Pray for you",
    img: "0kCt9xrtE-s",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["555"],
      cd_only: true
    }
  },
  {
    name: "Yume no Kakera ~Romantico",
    img: "nMl4AJj3SVg",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["555"],
      cd_only: true
    }
  },
  {
    name: "My Name is Smart Lady",
    img: "1vBjPeYqO3w",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["555"],
      cd_only: true
    }
  },
  {
    name: "Taiyou no Kage Tsuki no Yoru",
    img: "_s_Wf6ubkPc",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["555"],
      cd_only: true
    }
  },
  {
    name: "Existence ~KAIXA-nized dice",
    img: "votQ1FtTPVY",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["555"],
      cd_only: true
    }
  },
  {
    name: "DELTA STRIP ~ White Ring",
    img: "VMR-0uRCbNo",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["555"],
      cd_only: true
    }
  },
  {
    name: "Round ZERO ~ BLADE BRAVE",
    img: "_ovilFvQ8_Y",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["blade"],
      cd_only: false
    }
  },
  {
    name: "ELEMENTS",
    img: "oh5ldP61tws",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["blade"],
      cd_only: false
    }
  },
  {
    name: "Kakusei",
    img: "P3BzWE68L94",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["blade"],
      cd_only: false
    }
  },
  {
    name: "Rebirth",
    img: "Nr_A1kje46w",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["blade"],
      cd_only: false
    }
  },
  {
    name: "take it a try",
    img: "PmcV5MQQikg",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["blade"],
      cd_only: false
    }
  },
  {
    name: "wanna be strong",
    img: "zah0vihvMJA",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["blade"],
      cd_only: true
    }
  },
  {
    name: "Be FREE!",
    img: "5k7GL-6UDRw",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["blade"],
      cd_only: true
    }
  },
  {
    name: "Kimi no Tonari de",
    img: "EO3O_9Sb29E",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["blade"],
      cd_only: true
    }
  },
  {
    name: "Shout it out",
    img: "M6YMPYk86Qc",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["blade"],
      cd_only: true
    }
  },
  {
    name: "HERO",
    img: "l7gdA_hVacM",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["blade"],
      cd_only: true
    }
  },
  {
    name: "someday somewhere",
    img: "dSKHLE7nrKM",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["blade"],
      cd_only: true
    }
  },
  {
    name: "Never too late",
    img: "UURgjj9Oub4",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["blade"],
      cd_only: true
    }
  },
  {
    name: "Neppu Rider",
    img: "lHF_In1iwpU",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["blade"],
      cd_only: true
    }
  },
  {
    name: "Hajimari no Kimi e",
    img: "-LBfp5ERCc4",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["hibiki"],
      cd_only: false
    }
  },
  {
    name: "Shonen Yo",
    img: "jt8bnWZnxDU",
    opts: {
      era: ["heisei"],
      type: ["ed"],
      series: ["hibiki"],
      cd_only: false
    }
  },
  {
    name: "Flashback",
    img: "ZiUmWPBZgxc",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["hibiki"],
      cd_only: false
    }
  },
  {
    name: "Kiwamereba Ongeki!!",
    img: "MMacndPNMLs",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["hibiki"],
      cd_only: true
    }
  },
  {
    name: "Hibiki Kenzan!!",
    img: "WjxA3abtC8A",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["hibiki"],
      cd_only: true
    }
  },
  {
    name: "Fuuga Yuuden",
    img: "MmSGOlXBtVg",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["hibiki"],
      cd_only: true
    }
  },
  {
    name: "Raibu Gougou",
    img: "vhZBUFwZEQU",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["hibiki"],
      cd_only: true
    }
  },
  {
    name: "NEXT LEVEL",
    img: "hHSSksH_W4E",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["kabuto"],
      cd_only: false
    }
  },
  {
    name: "FULL FORCE",
    img: "3EdUGFCKWPc",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["kabuto"],
      cd_only: false
    }
  },
  {
    name: "LORD OF THE SPEED",
    img: "kPca4H4KoeA",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["kabuto"],
      cd_only: false
    }
  },
  {
    name: "Bang!Bang!Revolution",
    img: "oOLcDBdEde8",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["kabuto"],
      cd_only: true
    }
  },
  {
    name: "ONE WORLD",
    img: "q-RobmNrJow",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["kabuto"],
      cd_only: false
    }
  },{
    name: "Climax Jump",
    img: "6iluW_e0GFs",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Climax Jump DEN-LINER form",
    img: "EF88eu4r_Ac",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Double-Action",
    img: "nVsM0dQ6Tlo",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Double-Action Rod form",
    img: "KvI_V8qZi0s",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Double-Action Ax form",
    img: "r0OyEzjVpMI",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Double-Action Gun form",
    img: "Yf0cm8dpJ6U",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Double-Action Wing form",
    img: "4h8NRCnTqU8",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Action-ZERO",
    img: "ecSbq7VXxR4",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Real-Action",
    img: "aeGfEdDy_TE",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Double-Action Gaoh form",
    img: "xShNla1u4ig",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Yume de Aeta Nara…",
    img: "Y9oNlT8-88k",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Double-Action Climax form",
    img: "UFWtam2KkAo",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Cho Climax Jump",
    img: "Koe84CkDeKA",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Action-ZERO 2010",
    img: "chGUyciEi9Q",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Double-Action Strike form",
    img: "CPE2Zyt1KMk",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Climax-Action ~ The Den-O History~",
    img: "23iEAsmX31g",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Double-Action Coffee form",
    img: "kz1qN6yWqJU",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["den-o"],
      cd_only: true
    }
  },
  {
    name: "Climax Jump the Final",
    img: "Lmm3cmZ2itk",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["den-o"],
      cd_only: false
    }
  },
  {
    name: "Break the Chain",
    img: "V6CG-s5WfVc",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["kiva"],
      cd_only: false
    }
  },
  {
    name: "Destiny's Play",
    img: "Gvtmt9eFfQ8",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["kiva"],
      cd_only: false
    }
  },
  {
    name: "Individual-System",
    img: "fdCDs9-3G5o",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["kiva"],
      cd_only: false
    }
  },
  {
    name: "Innocent Trap",
    img: "avEwqtu4MQk",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["kiva"],
      cd_only: false
    }
  },
  {
    name: "Shout in the Moonlight",
    img: "e4hUTEvXs70",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["kiva"],
      cd_only: false
    }
  },
  {
    name: "Supernova",
    img: "tXgY7IKXrIA",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["kiva"],
      cd_only: false
    }
  },
  {
    name: "Fight for Justice",
    img: "RxooA1gN3Ik",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: false
    }
  },
  {
    name: "Roots of the King",
    img: "fF145CKXDYc",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: false
    }
  },
  {
    name: "Message",
    img: "dlzarOFM__c",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "This love never ends",
    img: "lY_G8nw9s1Y",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "Don't lose yourself",
    img: "dwVgcxh4dhw",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "Feel the same",
    img: "umrMR0PKows",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "Inherited-System",
    img: "Q3q71nfugkM",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "Keep alive",
    img: "O9je_iS5KY4",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "Ixa-cise",
    img: "VA472hgrTfs",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "Mind Garden",
    img: "eySH2bWUv0w",
    opts: {
      era: ["heisei"],
      type: ["insert"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "Exterminate Time",
    img: "gkdJ5KbS_mU",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "Lightning to Heaven",
    img: "4d6WNmJo--E",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "Eternity Blood",
    img: "hh4wQMjabvM",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "Rainy Rose",
    img: "bzVna4mHFCg",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "Prayer~Message 2",
    img: "YCLv0EYiOdQ",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "No matter who You are",
    img: "fCFqjd1GMCw",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "Beginning~Message 3",
    img: "wcmMNDaXjxI",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["kiva"],
      cd_only: true
    }
  },
  {
    name: "Circle of Life",
    img: "baH3cc_FuDE",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["kiva"],
      cd_only: false
    }
  },
  {
    name: "Journey through the Decade",
    img: "D7T_Y49KrrQ",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["decade"],
      cd_only: false
    }
  },
  {
    name: "Ride the Wind",
    img: "ZLNWC0z4dBA",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["decade"],
      cd_only: false
    }
  },
  {
    name: "Treasure Sniper",
    img: "8YwUh4qr2to",
    opts: {
      era: ["heisei"],
      type: ["character"],
      series: ["decade"],
      cd_only: false
    }
  },
  {
    name: "The Next Decade",
    img: "FaO1Ncn6EKE",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["decade"],
      cd_only: false
    }
  },
  {
    name: "Stay the Ride Alive",
    img: "3n35dpICCLU",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["decade"],
      cd_only: false
    }
  },
  {
    name: "Jōnetsu ~We are Brothers~",
    img: "ictcm0rkbOs",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["fourze"],
      cd_only: false
    }
  },
  {
    name: "W-B-X ~ W-Boiled Extreme ~",
    img: "6TVgGhURh5Y",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Cyclone Effect",
    img: "6ejbsgUiDJE",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Free your Heat",
    img: "UmVLkDctnRk",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Finger on the Trigger",
    img: "cmV9lho9CtA",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Naturally",
    img: "8PdEilUrG4w",
    opts: {
      era: ["heisei2"],
      type: ["character"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Leave all Behind",
    img: "MbdRVle3_js",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Love♡Wars",
    img: "FFHNUy5Qwoo",
    opts: {
      era: ["heisei2"],
      type: ["character"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Nobody's Perfect",
    img: "UwzSKcelyV0",
    opts: {
      era: ["heisei2"],
      type: ["character"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Extreme Dream",
    img: "6FFShwzoQQA",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Cyclone Effect (acoustic edit.)",
    img: "ZoovQE_JqiI",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Glorious Street ~Eikō no Michi~",
    img: "-UvlaOuqzMc",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["w"],
      cd_only: true
    }
  },
  {
    name: "WIND WAVE",
    img: "Avd7hj305LU",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["w"],
      cd_only: true
    }
  },
  {
    name: "W",
    img: "f24q0uWNv6I",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Cod-E ~E no Ango~",
    img: "Jx14vVYMdRo",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Over Again",
    img: "OuPxf16yd7o",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["other"],
      cd_only: false
    }
  },
  {
    name: "Private Eye",
    img: "h-HSlpBApnQ",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "W-G-X ~ W Goes Next ~",
    img: "J12lO8Z2GvM",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Tsumi to Batsu to Underground",
    img: "VZXXz8BzI58",
    opts: {
      era: ["heisei2"],
      type: ["ed"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Niau Otoko ni Nare",
    img: "BVmpQg5DFhA",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "W-L-X ~ W got Lost in Matrix ~",
    img: "hIEjIZwvX9Q",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["w"],
      cd_only: false
    }
  },
  {
    name: "Anything Goes!",
    img: "Rd0tfHzFFgw",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["ooo"],
      cd_only: false
    }
  },
  {
    name: "Regret nothing ~Tighten Up~",
    img: "n-fcfmS5Jyw",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ooo"],
      cd_only: false
    }
  },
  {
    name: "Got to keep it real",
    img: "yidIvPzWMkc",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ooo"],
      cd_only: false
    }
  },
  {
    name: "Ride on Right time",
    img: "7mugFMcL0sk",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ooo"],
      cd_only: false
    }
  },
  {
    name: "Sun Goes Up",
    img: "ORv_6aw6wrU",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ooo"],
      cd_only: false
    }
  },
  {
    name: "Time Judged All",
    img: "8ARFFobjc6k",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ooo"],
      cd_only: false
    }
  },
  {
    name: "Shout Out",
    img: "5yB9LjmrCo8",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ooo"],
      cd_only: false
    }
  },
  {
    name: "POWER to TEARER",
    img: "Hl5ZIeLGPFg",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ooo"],
      cd_only: false
    }
  },
  {
    name: "Reverse/Re:birth",
    img: "ZJQsVAhEHvU",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ooo"],
      cd_only: false
    }
  },
  {
    name: "HEART∞BREAKER",
    img: "GDEPOISSVK0",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["w", "ooo"],
      cd_only: false
    }
  },
  {
    name: "Te wo Tsunagou ~Matsuken × Kamen Rider Samba~",
    img: "fpUVVGHbxIE",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["ooo"],
      cd_only: false
    }
  },
  {
    name: "Anything Goes! OOO 10th Mix…",
    img: "HrUKFSg41SA",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["ooo"],
      cd_only: false
    }
  },
  {
    name: "Switch On!",
    img: "O3AfPZ4NepI",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["fourze"],
      cd_only: false
    }
  },
  {
    name: "Giant Step",
    img: "aXM2-chWAfM",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["fourze"],
      cd_only: false
    }
  },
  {
    name: "ENDLESS PLAY",
    img: "IApMARqkA9s",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["fourze"],
      cd_only: false
    }
  },
  {
    name: "Shooting Star",
    img: "0cOXb-1XZHk",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["fourze"],
      cd_only: false
    }
  },
  {
    name: "Bounce Back",
    img: "N0ctdWjtiKM",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["fourze"],
      cd_only: false
    }
  },
  {
    name: "Evolvin' Storm",
    img: "weveUK7xUAw",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["fourze"],
      cd_only: false
    }
  },
  {
    name: "COSMIC MIND",
    img: "VVxWl-eRn7k",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["fourze"],
      cd_only: false
    }
  },
  {
    name: "Saite",
    img: "IOKoFRFm0lw",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["fourze"],
      cd_only: false
    }
  },
  {
    name: "SAMURAI STRONG STYLE",
    img: "lUDN7eahS6E",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["fourze", "ooo"],
      cd_only: false
    }
  },
  {
    name: "Voyagers",
    img: "2zdzMD-uZ4k",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["fourze"],
      cd_only: false
    }
  },
  {
    name: "Life is SHOW TIME",
    img: "V2rBLTDBHRc",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["wizard"],
      cd_only: false
    }
  },
  {
    name: "Last Engage",
    img: "vBs15uxswDs",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["wizard"],
      cd_only: false
    }
  },
  {
    name: "Mystic Liquid",
    img: "Kw0xk9w1_rg",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["wizard"],
      cd_only: false
    }
  },
  {
    name: "Blessed wind",
    img: "zQz6W8ZrWGc",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["wizard"],
      cd_only: false
    }
  },
  {
    name: "Stength of the Earth",
    img: "CeHR9iDWCTw",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["wizard"],
      cd_only: false
    }
  },
  {
    name: "Just the Beginning",
    img: "CIrj4ye6LfI",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["wizard"],
      cd_only: false
    }
  },
  {
    name: "BEASTBITE",
    img: "FKvfbHNQYSg",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["wizard"],
      cd_only: false
    }
  },
  {
    name: "Alteration",
    img: "1FOb50pi5og",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["wizard"],
      cd_only: false
    }
  },
  {
    name: "Missing Piece",
    img: "WYv3zNHFvG0",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["wizard"],
      cd_only: false
    }
  },
  {
    name: "FOREST OF ROCKS",
    img: "vP47E3ZG5xQ",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["wizard", "fourze"],
      cd_only: false
    }
  },
  {
    name: "The Finale Of The Finale",
    img: "44nuK9RF_VE",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["wizard"],
      cd_only: false
    }
  },
  {
    name: "Jōchaku ~We are Brothers~",
    img: "anRTD0oUbRY",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["wizard"],
      cd_only: false
    }
  },
  {
    name: "JUST LIVE MORE",
    img: "EnCREIxTYpA",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["gaim"],
      cd_only: false
    }
  },
  {
    name: "E-X-A (Exciting × Attitude)",
    img: "oZFOXNzJH2A",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["gaim"],
      cd_only: false
    }
  },
  {
    name: "Toki no Hana",
    img: "pifNGV23Q-A",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["gaim"],
      cd_only: false
    }
  },
  {
    name: "Never Surrender",
    img: "hxZyZHlLnC8",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["gaim"],
      cd_only: false
    }
  },
  {
    name: "Rise Up Your Flag",
    img: "lGt4cGGpQqM",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["gaim"],
      cd_only: false
    }
  },
  {
    name: "Ranbu Escalation",
    img: "ADuzoF5zyJU",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["gaim"],
      cd_only: false
    }
  },
  {
    name: "Point Of No Return",
    img: "DtJP4KOCtmk",
    opts: {
      era: ["heisei2"],
      type: ["character"],
      series: ["gaim"],
      cd_only: true
    }
  },
  {
    name: "TEPPEN STAR",
    img: "LxhACQwWWiI",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["gaim", "wizard"],
      cd_only: false
    }
  },
  {
    name: "YOUR SONG",
    img: "PuAOXQiz8Fk",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["gaim"],
      cd_only: false
    }
  },
  {
    name: "Unperfected World",
    img: "lxhjeNqVgX0",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["gaim"],
      cd_only: false
    }
  },
  {
    name: "Lights of My Wish",
    img: "oGLwC3UCUtY",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["gaim"],
      cd_only: false
    }
  },
  {
    name: "Dance With Me",
    img: "h4mGm4gAfPo",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["gaim"],
      cd_only: false
    }
  },
  {
    name: "You are the HERO",
    img: "yfg6VYU-zkA",
    opts: {
      era: ["heisei2"],
      type: ["special"],
      series: ["gaim"],
      cd_only: false
    }
  },
  {
    name: "Dragon Road 2014",
    img: "IIAd3g8bMEA",
    opts: {
      era: ["showa"],
      type: ["movie", "op"],
      series: ["ZX"],
      cd_only: false
    }
  },
  {
    name: "SURPRISE-DRIVE",
    img: "VoohGjK0w_s",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["drive"],
      cd_only: false
    }
  },
  {
    name: "Don't lose your mind",
    img: "1vVFOIC6yxM",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["drive"],
      cd_only: false
    }
  },
  {
    name: "Full throttle",
    img: "4_YZYbd6iUg",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["drive"],
      cd_only: false
    }
  },
  {
    name: "Unlimited Drive",
    img: "cXIQi1ungeM",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["drive"],
      cd_only: false
    }
  },
  {
    name: "Spinning Wheel",
    img: "ISrRlFF3x_A",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["drive"],
      cd_only: false
    }
  },
  {
    name: "Sing my song for you ~ Sayonara no Mukogawa Made",
    img: "DWy8t0zfQdk",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["drive"],
      cd_only: false
    }
  },
  {
    name: "Who's That Guy",
    img: "UKJJgihnGOM",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["drive"],
      cd_only: false
    }
  },
  {
    name: "time",
    img: "CKkTNssiyoY",
    opts: {
      era: ["heisei2"],
      type: ["special"],
      series: ["drive"],
      cd_only: false
    }
  },
  {
    name: "re-ray",
    img: "rzE5hbKE9O8",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["drive"],
      cd_only: false
    }
  },
  {
    name: "Good bye little moon",
    img: "GnBKSGUILN8",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["drive"],
      cd_only: false
    }
  },
  {
    name: "eternity (～from SURPRISE-DRIVE)",
    img: "f08dpVJk3sY",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["drive"],
      cd_only: false
    }
  },
  {
    name: "Warera Omou, Yue Ni Warera Ari",
    img: "LKcCTMVJKKs",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["ghost"],
      cd_only: false
    }
  },
  {
    name: "Go! Go! Ghost!",
    img: "o3H8mT6pfiA",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ghost"],
      cd_only: true
    }
  },
  {
    name: "Hajimari no Hi",
    img: "ODIK6OSdsSE",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["ghost", "drive"],
      cd_only: false
    }
  },
  {
    name: "TIMELESS BLUE…",
    img: "K9xNjoiee60",
    opts: {
      era: ["heisei2"],
      type: ["special"],
      series: ["ghost"],
      cd_only: false
    }
  },
  {
    name: "ABAYO",
    img: "TqX_b_KGlVo",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["ghost"],
      cd_only: false
    }
  },
  {
    name: "NEW WORLD",
    img: "9KVANB-_zk8",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["ghost"],
      cd_only: false
    }
  },
  {
    name: "EXCITE",
    img: "pA44jXweudw",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["ex-aid"],
      cd_only: false
    }
  },
  {
    name: "B.A.T.T.L.E G.A.M.E",
    img: "yfpapR2Ljqs",
    opts: {
      era: ["heisei2"],
      type: ["insert", "movie"],
      series: ["ex-aid"],
      cd_only: false
    }
  },
  {
    name: "Let's Try Together",
    img: "TzjywlYaBIk",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ex-aid"],
      cd_only: false
    }
  },
  {
    name: "Wish in the dark",
    img: "qrzJcLGdcRk",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ex-aid"],
      cd_only: false
    }
  },
  {
    name: "PEOPLE GAME",
    img: "XX9Xb3wF4CQ",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ex-aid"],
      cd_only: false
    }
  },
  {
    name: "REAL GAME",
    img: "EQgQysulOSY",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ex-aid"],
      cd_only: false
    }
  },
  {
    name: "Kaze no Mukou he",
    img: "VOekMW6_P1c",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ex-aid"],
      cd_only: true
    }
  },
  {
    name: "Stormy Story",
    img: "Sw3JpPy5Sy4",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ex-aid"],
      cd_only: true
    }
  },
  {
    name: "JUSTICE",
    img: "_TfzhT6yP64",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ex-aid"],
      cd_only: false
    }
  },
  {
    name: "Time of Victory",
    img: "w2jvEKlo1po",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["ex-aid"],
      cd_only: false
    }
  },
  {
    name: "hikari",
    img: "Yyk-6xXht3g",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["ex-aid", "ghost"],
      cd_only: false
    }
  },
  {
    name: "Life is Beautiful",
    img: "xwUAxMaSHRU",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["ex-aid"],
      cd_only: false
    }
  },
  {
    name: "Fellow Soldier",
    img: "FDV5SYahNtg",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["ex-aid"],
      cd_only: false
    }
  },
  {
    name: "Real Heart",
    img: "qZvu86lDnUE",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["ex-aid"],
      cd_only: false
    }
  },
  {
    name: "Believer",
    img: "CjQONoSD1QM",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["ex-aid"],
      cd_only: false
    }
  },
  {
    name: "ray of light",
    img: "GkZEHSpW1AA",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["ex-aid"],
      cd_only: false
    }
  },
  {
    name: "Be The One",
    img: "wH00658gyKo",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["build"],
      cd_only: false
    }
  },
  {
    name: "Ready Go!!",
    img: "bHVcWNRgJ4M",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["build"],
      cd_only: false
    }
  },
  {
    name: "Burning My Soul",
    img: "r3fq7cEJ41I",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["build"],
      cd_only: false
    }
  },
  {
    name: "Evolution",
    img: "ZboeU_mPfPU",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["build"],
      cd_only: false
    }
  },
  {
    name: "Build up",
    img: "kMdXDTF_mfM",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["build"],
      cd_only: false
    }
  },
  {
    name: "Law of the Victory",
    img: "62jYb7jOPBw",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["build"],
      cd_only: false
    }
  },
  {
    name: "Kamen Rider Heisei Generations Final Special Medley",
    img: "O9I1lPwPNrM",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["build", "ex-aid"],
      cd_only: false
    }
  },
  {
    name: "Everlasting Sky",
    img: "cNRe9j44KEI",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["build"],
      cd_only: false
    }
  },
  {
    name: "CROSS",
    img: "uRSVDd22rlE",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["build"],
      cd_only: false
    }
  },
  {
    name: "Perfect Triumph",
    img: "pI2raO2diIQ",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["build"],
      cd_only: false
    }
  },
  {
    name: "Over \"Quarzter\"",
    img: "lPzwZwzK8gs",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["zi-o"],
      cd_only: false
    }
  },
  {
    name: "IZANAGI",
    img: "K1y3o6JGoSQ",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["exseason"],
      cd_only: false
    }
  },
  {
    name: "Zi-O, Toki no Oja",
    img: "MER3iOWw23c",
    opts: {
      era: ["heisei2"],
      type: ["insert", "character"],
      series: ["zi-o"],
      cd_only: false
    }
  },
  {
    name: "FUTURE GUARDIAN",
    img: "QO4t0ZtwD9Q",
    opts: {
      era: ["heisei2"],
      type: ["insert", "character"],
      series: ["zi-o"],
      cd_only: false
    }
  },
  {
    name: "Tsuki no Michiru Toki",
    img: "LdIflbinATk",
    opts: {
      era: ["heisei2"],
      type: ["character"],
      series: ["zi-o"],
      cd_only: true
    }
  },
  {
    name: "Black & White",
    img: "qxgIPCTqNdM",
    opts: {
      era: ["heisei2"],
      type: ["character"],
      series: ["zi-o"],
      cd_only: false
    }
  },
  {
    name: "Revolutionize",
    img: "W7gXASQ7Nto",
    opts: {
      era: ["heisei2"],
      type: ["character"],
      series: ["zi-o"],
      cd_only: true
    }
  },
  {
    name: "Next New Wφrld",
    img: "B06_8KzUFyc",
    opts: {
      era: ["heisei2"],
      type: ["insert"],
      series: ["zi-o"],
      cd_only: false
    }
  },
  {
    name: "Kamen Rider Heisei Generations Forever Medley D.A. Re-Build Mix",
    img: "8PL6CsPh8O8",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["zi-o", "build"],
      cd_only: false
    }
  },
  {
    name: "P. A. R. T. Y. ~Universe Festival~",
    img: "Gbspmm82Nis",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["zi-o"],
      cd_only: false
    }
  },
  {
    name: "Brand New Day",
    img: "S8JpvxMcYdI",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["zi-o"],
      cd_only: false
    }
  },
  {
    name: "INSIDE-OUT ZI-O ver.",
    img: "PTLp6SA3idA",
    opts: {
      era: ["heisei2"],
      type: ["special"],
      series: ["zi-o", "decade"],
      cd_only: false
    }
  },
  {
    name: "INSIDE-OUT DECADE ver.",
    img: "skZ6sC2lUcI",
    opts: {
      era: ["heisei2"],
      type: ["special"],
      series: ["zi-o", "decade"],
      cd_only: false
    }
  },
  {
    name: "REAL×EYEZ",
    img: "gcFxf9Kz4oQ",
    opts: {
      era: ["reiwa"],
      type: ["op"],
      series: ["zero_one"],
      cd_only: false
    }
  },
  {
    name: "Omae o Tomerareru no wa Tada Hitori, Ore da! ~Find a new life",
    img: "kidBPd-QyJo",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["zero_one"],
      cd_only: false
    }
  },
  {
    name: "Hybridrise! Zero-One ~Rising sun",
    img: "BQb3tfSblLo",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["zero_one"],
      cd_only: false
    }
  },
  {
    name: "Henshin! Kamen Rider Zero-Two ~Now is the right time",
    img: "oEFFyo_Nieg",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["zero_one"],
      cd_only: false
    }
  },
  {
    name: "Humagear Anthem",
    img: "UBKNsANVgwo",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["zero_one"],
      cd_only: false
    }
  },
  {
    name: "Another Daybreak",
    img: "oriMgD0e_9I",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["zero_one"],
      cd_only: false
    }
  },
  {
    name: "A.I. ∴ All Imagination",
    img: "BUOmDL1L4XU",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["zero_one"],
      cd_only: false
    }
  },
  {
    name: "S.O.S.",
    img: "tAkFYjCyT3I",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["zero_one"],
      cd_only: false
    }
  },
  {
    name: "Fontier",
    img: "P36LY6X5OyA",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["zero_one"],
      cd_only: false
    }
  },
  {
    name: "ALMIGHTY ~ Kamen no Yakusoku",
    img: "Cu3cHPTVn0Q",
    opts: {
      era: ["reiwa"],
      type: ["op"],
      series: ["saber"],
      cd_only: false
    }
  },
  {
    name: "Kamen Rider Saber",
    img: "rSRczaxkcdk",
    opts: {
      era: ["reiwa"],
      type: ["ed"],
      series: ["saber"],
      cd_only: false
    }
  },
  {
    name: "Rewrite the Story",
    img: "MXxHbuLf_pM",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["saber"],
      cd_only: false
    }
  },
  {
    name: "Will save us",
    img: "Sl0m5dpQCAA",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["saber"],
      cd_only: false
    }
  },
  {
    name: "The story never ends",
    img: "ipF7C9N2YKw",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["saber"],
      cd_only: false
    }
  },
  {
    name: "Timeless Story",
    img: "bVUlHEQc89o",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["saber"],
      cd_only: false
    }
  },
  {
    name: "BOOK OF POWER",
    img: "dPNVv4kPCAI",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["saber"],
      cd_only: true
    }
  },
  {
    name: "Taju Roko",
    img: "7XyGeEoTUb8",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["saber"],
      cd_only: false
    }
  },
  {
    name: "SPARK",
    img: "C8a-phEteHU",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["saber"],
      cd_only: false
    }
  },
  {
    name: "Bittersweet",
    img: "EVRlq5MyCwY",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["saber"],
      cd_only: false
    }
  },
  {
    name: "liveDevil",
    img: "JTaSWxeEDS4",
    opts: {
      era: ["reiwa"],
      type: ["op"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "Come Alive",
    img: "En8-evsTI_o",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "Go with the flo",
    img: "d3ZPTztcVYA",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "VOLCANO",
    img: "U_p0Xm_v0ys",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "#GekiyaVice",
    img: "FefzhJteO8U",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "Mirage Mirror",
    img: "5pgxdNoItjo",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "My dream",
    img: "eDs0Vvbdi-4",
    opts: {
      era: ["reiwa"],
      type: ["special"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "Cherry-ish",
    img: "dGhmEHJeit8",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "George Karizaki's Rider System",
    img: "r2DzrWo9egI",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "Kimi wa Sono Mama de",
    img: "Dlw_okmE0Us",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "Promise",
    img: "37KXQ1RmPpc",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["revice", "saber"],
      cd_only: false
    }
  },
  {
    name: "Without you",
    img: "M053ac0kQtE",
    opts: {
      era: ["reiwa"],
      type: ["special"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "Without you (DEAR GAGA ver.)",
    img: "swuuKy3n2nQ",
    opts: {
      era: ["reiwa"],
      type: ["special"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "Dance Dance",
    img: "EQ6aCvJiCDU",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "Riot in bloom",
    img: "3lYmT9PPLrk",
    opts: {
      era: ["reiwa"],
      type: ["special"],
      series: ["revice", "exseason"],
      cd_only: false
    }
  },
  {
    name: "Love yourself",
    img: "vIlMveim0W4",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "Itoshi no Frenemy",
    img: "2h110Fyfj7A",
    opts: {
      era: ["reiwa"],
      type: ["special"],
      series: ["revice"],
      cd_only: false
    }
  },
  {
    name: "Trust・Last",
    img: "1HCwcLO4v8Q",
    opts: {
      era: ["reiwa"],
      type: ["op"],
      series: ["geats"],
      cd_only: false
    }
  },
  {
    name: "ROLLIN' ROLLIN' PUNK KING",
    img: "13ue2FmfWyg",
    opts: {
      era: ["reiwa"],
      type: ["special"],
      series: ["geats"],
      cd_only: false
    }
  },
  {
    name: "Dangerously",
    img: "-8g5UKEUj7E",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["geats"],
      cd_only: false
    }
  },
  {
    name: "Nichiyobi no Noraneko",
    img: "N1wOp_xeUhA",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["geats"],
      cd_only: false
    }
  },
  {
    name: "Negai",
    img: "BuSLtvZ5-xw",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["geats"],
      cd_only: false
    }
  },
  {
    name: "Chair",
    img: "B6POsTT2LK4",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["geats"],
      cd_only: false
    }
  },
  {
    name: "Star Of the Stars Of the Stars",
    img: "A6r-8tmftsk",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["geats"],
      cd_only: true
    }
  },
  {
    name: "I Peace",
    img: "iIXjXrncje4",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["geats"],
      cd_only: true
    }
  },
  {
    name: "Beat of My Life",
    img: "fhHZSfhUwtI",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["geats"],
      cd_only: true
    }
  },
  {
    name: "Undead Fire",
    img: "UCzf-GvbRMM",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["geats"],
      cd_only: true
    }
  },
  {
    name: "Live for the moment",
    img: "A2dTMhtb0D8",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["geats"],
      cd_only: false
    }
  },
  {
    name: "Desire Kyuden de Aimashou",
    img: "ahjhbjm6TAs",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["geats"],
      cd_only: true
    }
  },
  {
    name: "Odds n' Ends",
    img: "n2Tabq9AiSM",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["geats"],
      cd_only: true
    }
  },
  {
    name: "Non-fiction",
    img: "0J1eVRcbNC0",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["geats"],
      cd_only: true
    }
  },
  {
    name: "Change my future",
    img: "E8K6THZu2fE",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["geats", "revice"],
      cd_only: false
    }
  },
  {
    name: "Desire",
    img: "0TwsckGCF4g",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["geats"],
      cd_only: false
    }
  },
  {
    name: "CREATORs",
    img: "838l3OLK7RM",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["geats"],
      cd_only: false
    }
  },
  {
    name: "CHEMY×STORY",
    img: "3ZiiuyY-6lQ",
    opts: {
      era: ["reiwa"],
      type: ["op"],
      series: ["gotchard"],
      cd_only: false
    }
  },
  {
    name: "CHEMY×STORY (BACK-ON × FLOW ver.)",
    img: "ic9jVIjDAko",
    opts: {
      era: ["reiwa"],
      type: ["op"],
      series: ["gotchard"],
      cd_only: false
    }
  },
  {
    name: "Rising Fighter",
    img: "UlL2hpEQFps",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["gotchard"],
      cd_only: false
    }
  },
  {
    name: "What's your FIRE",
    img: "eyUSrqdpXE0",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["gotchard"],
      cd_only: false
    }
  },
  {
    name: "Kimi ni Zukkyun",
    img: "g1Ur498feGE",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gotchard"],
      cd_only: false
    }
  },
  {
    name: "Living Legend",
    img: "D4o3IHS1TaI",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gotchard"],
      cd_only: false
    }
  },
  {
    name: "THE SKY'S THE LIMIT",
    img: "VDyHlE6leNo",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["gotchard"],
      cd_only: false
    }
  },
  {
    name: "Gotcha! 101 Chemies",
    img: "MWl1w9jtc28",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gotchard"],
      cd_only: false
    }
  },
  {
    name: "We Are GIRLS!!!",
    img: "EkrR5JSBAUA",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["gotchard"],
      cd_only: false
    }
  },
  {
    name: "Dream Hoper",
    img: "uhapmUyELG4",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gotchard"],
      cd_only: true
    }
  },
  {
    name: "Blaze up",
    img: "Nt9ZRky7iAM",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gotchard"],
      cd_only: true
    }
  },
  {
    name: "One Hint",
    img: "9WW00RCaHH0",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gotchard"],
      cd_only: true
    }
  },
  {
    name: "Gotcha! Let's Go!",
    img: "5Eq65iCMSnc",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gotchard"],
      cd_only: true
    }
  },
  {
    name: "CRY SIS",
    img: "GkNpRtnV82Q",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gotchard"],
      cd_only: true
    }
  },
  {
    name: "God's Rain",
    img: "oPY9UyVZDDQ",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gotchard"],
      cd_only: true
    }
  },
  {
    name: "Kaze no Shugosha",
    img: "RVP2epl0GlA",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gotchard"],
      cd_only: false
    }
  },
  {
    name: "THE SUN",
    img: "ZNtWobHf--c",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gotchard"],
      cd_only: true
    }
  },
  {
    name: "All for Love",
    img: "M6KupjACTbE",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["gotchard", "geats"],
      cd_only: false
    }
  },
  {
    name: "THE FUTURE DAYBREAK",
    img: "dYVE4-V5z8E",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["gotchard"],
      cd_only: false
    }
  },
  {
    name: "Go As ONE",
    img: "d1vnVD_kJvM",
    opts: {
      era: ["reiwa"],
      type: ["special"],
      series: ["gotchard", "exseason"],
      cd_only: false
    }
  },
  {
    name: "GRADUATIONS",
    img: "0Ar0ws9cL10",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["gotchard"],
      cd_only: false
    }
  },
  {
    name: "Got Boost?",
    img: "9GPELfR2t8Y",
    opts: {
      era: ["reiwa"],
      type: ["op"],
      series: ["gavv"],
      cd_only: false
    }
  },
  {
    name: "Shake it off",
    img: "-oGgKhriIhw",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["gavv"],
      cd_only: false
    }
  },
  {
    name: "Bitter Poison",
    img: "9W6E9u-RDuY",
    opts: {
      era: ["reiwa"],
      type: ["special"],
      series: ["gavv"],
      cd_only: false
    }
  },
  {
    name: "HAPPY NOTE",
    img: "ayQLm-RUFDQ",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gavv"],
      cd_only: true
    }
  },
  {
    name: "Truth Hunter",
    img: "TzG3zxBF4tY",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gavv"],
      cd_only: true
    }
  },
  {
    name: "Happy Parade",
    img: "ahnatd4Nfj8",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gavv"],
      cd_only: true
    }
  },
  {
    name: "Hikentai no Shinka Ni Okeru Kosatsu",
    img: "ZK59Q7a0vFQ",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gavv"],
      cd_only: true
    }
  },
  {
    name: "A ray of light",
    img: "r9ZbplUwfqQ",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gavv"],
      cd_only: false
    }
  },
  {
    name: "Lost Symmetry",
    img: "Li8vtyDk4zM",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gavv"],
      cd_only: true
    }
  },
  {
    name: "The Formula",
    img: "Ze90kNpgB9k",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gavv"],
      cd_only: true
    }
  },
  {
    name: "One More Bite",
    img: "PKxi6qaGXKE",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["gavv"],
      cd_only: true
    }
  },
  {
    name: "Candy Blaze",
    img: "z-G6c6sujdQ",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["gavv"],
      cd_only: false
    }
  },
  {
    name: "Super Delicious",
    img: "ToEBg3438C4",
    opts: {
      era: ["reiwa"],
      type: ["movie"],
      series: ["gavv"],
      cd_only: false
    }
  },
  {
    name: "VISIONS",
    img: "0Wt0fEFBVeo",
    opts: {
      era: ["reiwa"],
      type: ["op"],
      series: ["zeztz"],
      cd_only: false
    }
  },
  {
    name: "PLAY BACK",
    img: "5F5VEBxlM6k",
    opts: {
      era: ["reiwa"],
      type: ["op"],
      series: ["zeztz"],
      cd_only: false
    }
  },
  {
    name: "MOVE! TAKE IT!",
    img: "95DzUX9sryU",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["zeztz"],
      cd_only: false
    }
  },
  {
    name: "NemNemNEMOTION",
    img: "y9GQI5Vqlq4",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["zeztz"],
      cd_only: false
    }
  },
  {
    name: "Kickstart",
    img: "dRmHPVqvDkU",
    opts: {
      era: ["reiwa"],
      type: ["insert"],
      series: ["zeztz"],
      cd_only: false
    }
  },
  {
    name: "Cheerful Policy!",
    img: "KskL7ep2Xrw",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["zeztz"],
      cd_only: true
    }
  },
  {
    name: "Dystopia's Dawn",
    img: "EbpD2GhJqp4",
    opts: {
      era: ["reiwa"],
      type: ["character"],
      series: ["zeztz"],
      cd_only: true
    }
  },
  {
    name: "Bright! our future",
    img: "wboDZPwarIM",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["exmovie"],
      cd_only: false
    }
  },
  {
    name: "Chosen Soldier",
    img: "DxNCaBq9HdY",
    opts: {
      era: ["heisei"],
      type: ["movie"],
      series: ["exmovie"],
      cd_only: false
    }
  },
  {
    name: "Reason for",
    img: "M3b2vDgr9-I",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["other"],
      cd_only: false
    }
  },
  {
    name: "Armour Zone",
    img: "hxzuBcuNqls",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["exseason"],
      cd_only: false
    }
  },
  {
    name: "DIE SET DOWN",
    img: "6Cpl3Fxc-SI",
    opts: {
      era: ["heisei2"],
      type: ["op"],
      series: ["exseason"],
      cd_only: false
    }
  },
  {
    name: "EAT, KILL ALL",
    img: "ERKwIwx8L5Q",
    opts: {
      era: ["heisei2"],
      type: ["movie"],
      series: ["exseason"],
      cd_only: false
    }
  },
  {
    name: "IZANAGI (Tycoon meets Shinobi)",
    img: "L8B3U_sdf70",
    opts: {
      era: ["reiwa"],
      type: ["op"],
      series: ["exseason", "geats"],
      cd_only: false
    }
  },
  {
    name: "Did you see the sunrise?",
    img: "r41R0BKosVw",
    opts: {
      era: ["reiwa"],
      type: ["op"],
      series: ["exseason"],
      cd_only: false
    }
  },
  {
    name: "GAME CHANGER",
    img: "8Y163CSSRhc",
    opts: {
      era: ["reiwa"],
      type: ["special"],
      series: ["exseason"],
      cd_only: false
    }
  },
  {
    name: "What's the Outsiders",
    img: "kU_DAU3OeZI",
    opts: {
      era: ["reiwa"],
      type: ["special"],
      series: ["exseasons"],
      cd_only: false
    }
  },
  {
    name: "Go As ONE Halloween Ver.",
    img: "fRLYna9fXlE",
    opts: {
      era: ["reiwa"],
      type: ["special"],
      series: ["exseason"],
      cd_only: false
    }
  },
  {
    name: "Red Re-born",
    img: "VjK5YX1dQww",
    opts: {
      era: ["reiwa"],
      type: ["special"],
      series: ["exseason"],
      cd_only: false
    }
  },
  {
    name: "Deteremined",
    img: "AjKabvaZgLI",
    opts: {
      era: ["reiwa"],
      type: ["special"],
      series: ["exseason"],
      cd_only: false
    }
  },
  {
    name: "GET BACK!!",
    img: "gdySE-paBpw",
    opts: {
      era: ["reiwa"],
      type: ["op"],
      series: ["other"],
      cd_only: false
    }
  },
  {
    name: "Let's Ride",
    img: "c57Cgms1_Ik",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["exseason"],
      cd_only: false
    }
  },
  {
    name: "DIVE INTO THE MIRROR",
    img: "ljHFZsyzALQ",
    opts: {
      era: ["heisei"],
      type: ["op"],
      series: ["exseason"],
      cd_only: false
    }
  }
];