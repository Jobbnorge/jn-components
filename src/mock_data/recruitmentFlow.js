/* Assuming that API serves a list ordered by sortingId (or similar db-field) asc */
const flow = [
    {"title": "Ubehandlet", "flag": null},
    {"title": "Ikke kvalifisert", "flag": {"isQualified": false}},
    {"title": "Kvalifisert", "flag": {"isQualified": true}},
    {"title": "Intervju", "flag": {"hasInterview": true}},
    {"title": "Innstilt", "flag": {"priorityJustification": ''}},
    {"title": "Ansatt", "flag": {"isHired": true} }

]

export { flow as recruitmentFlow }; 