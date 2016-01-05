define({ "api": [  {    "type": "get",    "url": "/class/:term",    "title": "Request Class information for Term",    "name": "GetAllClasses",    "version": "0.1.0",    "group": "Classes",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "term",            "description": "<p>Class term unique ID.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "apikey",            "description": "<p>A required private Apikey distrubted by this site</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "Classes",            "description": "<p>Dictionary of classes sorted by class</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "Classes.Class",            "description": "<p>Class object that has all the information for a class</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.restrictions",            "description": "<p>Class restrictions or null if none</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.dates",            "description": "<p>Dates of the class for the quarter (Will be the same for all classes)</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.crenum",            "description": "<p>Number of credits for course</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.title",            "description": "<p>Title of class</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.prerequisites",            "description": "<p>Class prerequisites or null if none</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.crn",            "description": "<p>Course Reserve Number(CRN)</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "Classes.Class.cap",            "description": "<p>Class cap</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.time1",            "description": "<p>Meeting time</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.time2",            "description": "<p>Second meeting time or null if none</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.class",            "description": "<p>Class name with the subject and number (i.e. CSCI 101)</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "Classes.Class.avail",            "description": "<p>Number of available seats</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.gur",            "description": "<p>GUR/Course Attribute(s) or null if none</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.other",            "description": "<p>Other information or null if none</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.inst",            "description": "<p>Class instructor</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.room1",            "description": "<p>Classroom</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.room2",            "description": "<p>Second Classroom or null if none</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Classes.Class.addl",            "description": "<p>Additional Charges</p>"          },          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "Classes.Class.open",            "description": "<p>true if class is open, false if it is closed</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "Classes.Class.enrol",            "description": "<p>Class restrictions</p>"          }        ]      }    },    "filename": "API/bottleMain.py",    "groupTitle": "Classes"  },  {    "type": "get",    "url": "/menu",    "title": "Request Menu information",    "name": "GetWholeMenu",    "version": "0.1.0",    "group": "Menu",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "Term",            "description": "<p>Dictionary of the terms and their associated term number</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "End",            "description": "<p>Time options for when classes can end</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "GUR/Course",            "description": "<p>Attribute  Dictionary of the GURS and their associated acronyms</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "Begin",            "description": "<p>Time options for when classes can begin</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "Credit",            "description": "<p>Hours  Credit hour options</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "Instructor",            "description": "<p>Dictionary of the instructors and their associated instructor number</p>"          },          {            "group": "Success 200",            "type": "String[]",            "optional": false,            "field": "Subject",            "description": "<p>Dictionary of the subjects and their associated acronyms</p>"          }        ]      }    },    "filename": "API/bottleMain.py",    "groupTitle": "Menu",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "apikey",            "description": "<p>A required private Apikey distrubted by this site</p>"          }        ]      }    }  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "API/docs/main.js",    "group": "_Users_Bradndon_Documents_ClassFinder_API_API_docs_main_js",    "groupTitle": "_Users_Bradndon_Documents_ClassFinder_API_API_docs_main_js",    "name": ""  }] });
