/* Assuming that API serves a list ordered by sortingId (or similar db-field) asc 

baseURL/recruitmentFlow/{id}
*/
const flow = [
    {"title": "Ubehandlet", "flag": null},
    {"title": "Ikke kvalifisert", "flag": {"isQualified": false}},
    {"title": "Kvalifisert", "flag": {"isQualified": true}},
    {"title": "Intervju", "flag": {"hasInterview": true}},
    {"title": "Innstilt", "flag": {"priorityJustification": ''}},
    {"title": "Ansatt", "flag": {"isHired": true} }

]

export { flow as recruitmentFlow }; 

/**
 * Do something about this: 
 * {
    "clusterId": 1,
    "name": "Cluster A",
    "jobType": "Aspirantopptak",
    "isDefault": false,
    "applicationStatus": [
      {
        "applicationStatusId": 1,
        "name": "Interview"
        "action": "Interview"
      }
    ]
  }
 */