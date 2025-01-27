var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Ratio",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "L1 (8.14:1)<br>",
        "2": "L2 (6.75:1)<br>",
        "3": "L3 (6.12:1)<br>",
        "4": "L4 (5.14:1)<br>",
        "o": "Other ratio (put in comments)<br>",
        "x": "Not Swerve"
      },
      "defaultValue":"x"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
        { "name": "Coral Scoring",
      "code": "csl",
      "type": "radio",
      "choices": {
        "r1": "Level 1<br>",
        "r2": "Level 2<br>",
        "r3": "Level 3<br>",
        "r4": "Level 4<br>",
        "x": "Cannot Score Coral"
      },
      "defaultValue": "x"
    },
        { "name": "Score in Processor",
      "code": "pro",
      "type": "bool"
    },
        { "name": "Score in Auto",
      "code": "acl",
      "type": "bool"
    },
        { "name": "Score in Net",
      "code": "net",
      "type": "bool"
    },
    { "name": "Coral pickup",
      "code": "fpu",
       "type": "radio",
      "choices": {
        "fl": "Floor<br>",
        "fd": "Feeder<br>",
        "b": "Floor & Feeder<br>",
        "x": "Cannot Pickup Coral"
      },
      "defaultValue": "x"
    },
    { "name": "Algae pickup",
      "code": "apu",
       "type": "radio",
      "choices": {
        "fl": "Floor<br>",
        "rf": "Reef<br>",
        "b": "Floor & Reef<br>",
        "x": "Cannot Pickup Algae"
      },
      "defaultValue": "x"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Scouting Method /<br>Program (ScoutingPASS?)",
      "code": "sct",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
