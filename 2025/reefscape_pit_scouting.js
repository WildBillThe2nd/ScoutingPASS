var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "pitConfig": "true",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
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
        "t": "West Coast/Tank<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
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
    { "name": "Drivetrain Comments",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Coral Scoring",
      "code": "csl",
      "type": "radio",
      "choices": {
        "r1": "L1 Only<br>",
        "r2": "L1-L3<br>",
        "r3": "L2-L3 Only<br>",
        "r4": "L1-L4<br>",
        "x": "Cannot Score Coral"
      },
      "defaultValue": "x"
    },
    { "name": "Score in Processor",
      "code": "pro",
      "type": "bool"
    },
    { "name": "Score in Net",
      "code": "net",
      "type": "bool"
    },
    { "name": "Hang on Cage",
      "code": "efs",
      "type":"radio",
      "choices": {
        "sh": "Shallow (High) Cage<br>",
        "dh": "Deep (Low) Cage<br>",
        "bh": "Both Shallow & Deep<br>",
        "x": "Cannot Hang"
      },
      "defaultValue": "x"
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
    { "name": "Score in Auto",
      "code": "acl",
      "type": "bool"
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
    { "name": "Pgm. Language",
      "code": "pla",
       "type": "radio",
      "choices": {
        "ja": "Java<br>",
        "c": "C++<br>",
        "lv": "LabVIEW<br>",
        "py": "Python"
      },
      "defaultValue": "ja"
    },
    { "name": "RoboRIO",
      "code": "prr",
       "type": "radio",
      "choices": {
        "v1": "RIO 1<br>",
        "v2": "RIO 2<br>",
        "idk": "IDK"
      },
      "defaultValue": "idk"
    },
    { "name": "# of Cameras",
      "code": "pca",
      "type": "number"
    },
    { "name": "Vision Pipeline",
      "code": "pvp",
       "type": "radio",
      "choices": {
        "pv": "Photon Vision<br>",
        "ll": "Limelight<br>",
        "o": "Other<br>",
        "nv": "No Vision"
      },
      "defaultValue": "nv"
    },
    { "name": "Vision Coprocessor",
      "code": "pcp",
       "type": "radio",
      "choices": {
        "rp": "Raspberry Pi 5<br>",
        "op": "Orange Pi<br>",
        "o": "Other<br>",
        "nv": "No Vision"
      },
      "defaultValue": "nv"
    },
    { "name": "Vision Comments",
      "code": "pvc",
      "type": "text",
      "size": 20,
      "maxSize": 100
    },
      { "name": "Current Mgmt?<br>Preventing Brownout",
      "code": "ecm",
      "type": "text",
      "size": 20,
      "maxSize": 100
    },
      { "name": "Wiring Hacks?<br>Quick/Easy/Better",
      "code": "ewh",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Load Test Batteries?",
      "code": "elt",
      "type": "bool"
    },
    { "name": "How do you quantify<br>Your Outreach Impact?",
      "code": "oi",
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
