const obj = {
     "sort": 0,
     "label": "Pizza_type Type",
     "description": "",
     "validate": {
       "required": true,
       "options": [
         {
           "label": "Naples Style Pizza",
            "value": "naples",
            "description": "",
            "icon": ""
          },
          {
            "label": "New York Style Pizza",
            "value": "newyork",
            "description": "",
            "icon": ""
          }
        ],
        "defaultValue": "naples",
        "immutable": false
      }
} 

export default obj;