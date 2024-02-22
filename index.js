require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8084;
app.use(bodyParser.json());

const PatientListReq = require("./src/patient-landing-page/patient-list-req.json");
const PatientListRes = require("./src/patient-landing-page/patient-list-res.json");
const DocumentListReq = require("./src/document-list/document-list-req.json");
const DocumentListRes = require("./src/document-list/document-list-res.json");
const SamplesJsonReq = require("./src/sample-json/sample-json-req.json");
const SampleJsonRes = require("./src/sample-json/sample-json-res.json");
const GridSettingsReq = require("./src/grid-settings/grid-settings-req.json");
const GridSettingsRes = require("./src/grid-settings/grid-settings-res.json");
const SearchWorkOrderReq = require("./src/search-work-order-json/search-work-order-json.req.json");
const SearchWorkOrderRes = require("./src/search-work-order-json/search-work-order-json.resp.json");
const SaveTaskReq = require("./src/save-tasks/save-tasks-req.json");
const SaveTaskRes = require("./src/save-tasks/save-tasks-res.json");
const AuditTrailPatientAccessReq = require("./src/audit-trail-patient-access/patient-access-req.json");
const AuditTrailPatientAccessRes = require("./src/audit-trail-patient-access/patient-access-resp.json");
const GetDocumentsReq = require("./src/document-get-document/get-document-req.json");
const GetDocumentsRes = require("./src/document-get-document/get-document-res.json");
const UploadDocReq = require("./src/upload-document/upload-document-req.json");
const UploadDocRes = require("./src/upload-document/upload-document-res.json");
const SaveDocumentReq = require("./src/save-attach-document/save-attach-document-req.json");
const SaveDocumentRes = require("./src/save-attach-document/save-attach-document-res.json");
const TrailTransactionReq = require("./src/audit-trail-tree-transaction/trail-transaction-tree-req.json");
const TrailTransactionRes = require("./src/audit-trail-tree-transaction/trail-transaction-tree-res.json");
const DocumentSaveHelpReq = require("./src/document-save-help/document-save-help-req.json");
const DocumentSaveHelpRes = require("./src/document-save-help/document-save-help-res.json");
const MarkAsMasterReq = require("./src/mark-master/mark-master-req.json");
const MarkAsMasterRes = require("./src/mark-master/mark-master-res.json");
const DocumentPathReq = require("./src/document-list-path/document-list-path-req.json");
const DocumentPathRes = require("./src/document-list-path/document-list-path-res.json");
const GetPatientDetailsResp = require("./src/get-patient-details/get-patient-details-resp.json");
const GetClientResp = require("./src/get-client-select-list/get-client-select-list-resp.json");
const GetClinicalSexResp = require("./src/get-clinical-sex/get-clinical-sex-res.json");
const GetGenderSelectResp = require("./src/get-gender-identity/get-gender-identity-resp.json");
const GetRaceSelectResp = require("./src/get-race-select/get-race-select-resp.json");
const GetEtheniCityResp = require("./src/get-ethnicity/get-ethnicity-resp.json");
const GetCaseWorkerResp = require("./src/get-case-worker/get-case-worker-resp.json");
const GetPhoneTypeResp = require("./src/get-phone-type/get-phone-type-resp.json");
const GetTaskJsonResp = require("./src/get-task-json/get-task-json.json");
const DropdownDepartmentListResp = require("./src/dropdown-department-list/dropdown-department-list-resp.json");
const ProcedureListResp = require("./src/procedure-list/procedure-list-resp.json");
const InstrumentListResp = require("./src/instrument-list/instrument-list-resp.json");
const GetPhoneLogContactListResp = require("./src/get-contact-list/get-contact-list-resp.json");
const GetTaskBatchResultsResp = require("./src/get-batchresult-task/get-batchresults-task-cc-resp.json");
const GetLabTaskOptionResp = require("./src/get-labtask-option/get-labtask-option-resp.json");
const ScheduleTaskReq = require("./src/schedule-tasks/schedule-tasks-req.json");
const ScheduleTaskResp = require("./src/schedule-tasks/schedule-tasks-resp.json");
const LabSiteSelectList = require("./src/get-labsite-select/get-labsite-select-resp.json");
const SampleDetailResultsData = require("./src/get-sample-results-data/get-sample-results-data-resp.json");
const GetUseList = require("./src/get-document-use-list/get-document-use-list-res.json");
const ColumnIdSelect = require("./src/columnid-select-list/columnid-select-list-resp.json");
const UserSelectList = require("./src/user-select-list/user-select-list-resp.json");
const FlagSetDestination = require("./src/comment-flags/comment-flags-resp.json");
const PredefinedComments = require("./src/predefined-comments/predefined-comments-resp.json");
const TaskSearchResults = require("./src/get-search-results-tasks/get-search-results-tasks-resp.json");
const EntityDataResp = require("./src/auxillary-entry-data/entity-data-resp.json");
const ContactDetailResp = require("./src/contact-detail/contact-detail-resp.json");
const InsuranceList = require("./src/insurance-list/insurance-list-resp.json");
const GetSexualIdentityResp = require("./src/get-sexual-identity/sexual-identity-resp.json")
const WorkOrdersResp = require("./src/patient-workorders/patient-workorders-tree-resp.json")
const WorkOrderDataResp = require("./src/work-order-data/work-order-data.resp.json")

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/Patient/WorkorderData", (req, res) => {
  res.send(WorkOrderDataResp);
});
app.get("/Patient/WorkordersTree", (req, res) => {
  res.send(WorkOrdersResp);
});
app.get("/Patient/InsuranceList", (req, res) => {
  res.send(InsuranceList);
});
app.get("/Contact/ContactDetail", (req, res) => {
  res.send(ContactDetailResp);
});
app.get("/AuxiliaryData/EntityData", (req, res) => {
  res.send(EntityDataResp);
});
app.get("/SharedData/GetTestSearchResultsForTask", (req, res) => {
  res.send(TaskSearchResults);
});
app.get("/Comments/PredefinedCommentSelectList", (req, res) => {
  res.send(PredefinedComments);
});
app.get("/Comments/FlagsetDefinition", (req, res) => {
  res.send(FlagSetDestination);
});
app.get("/DropdownList/UserSelectList", (req, res) => {
  res.send(UserSelectList);
});
app.get("/DropdownList/ColumnIdSelectList", (req, res) => {
  res.send(ColumnIdSelect);
});
app.get("/Document/GetUseList", (req, res) => {
  res.send(GetUseList);
});
app.get("/SampleDetail/ResultsData", (req, res) => {
  res.send(SampleDetailResultsData);
});
app.get("/DropdownList/LabSiteSelectList", (req, res) => {
  res.send(LabSiteSelectList);
});

app.get("/Patient/Tasks/LabTaskStatusOptions", (req, res) => {
  res.send(GetLabTaskOptionResp);
});
app.get("/BatchResults/ResultsTaskConditionCodeOptions", (req, res) => {
  res.send(GetTaskBatchResultsResp);
});
app.get("/PhoneLog/GetContactList", (req, res) => {
  res.send(GetPhoneLogContactListResp);
});

app.get("/DropdownList/InstrumentSelectList", (req, res) => {
  res.send(InstrumentListResp);
});
app.get("/DropdownList/ProcedureSelectList", (req, res) => {
  res.send(ProcedureListResp);
});
app.get("/DropdownList/DepartmentSelectList", (req, res) => {
  res.send(DropdownDepartmentListResp);
});
app.get("/Patient/GetTasksJson", (req, res) => {
  res.send(GetTaskJsonResp);
});
app.get("/DropdownList/PhoneTypeSelectList", (req, res) => {
  res.send(GetPhoneTypeResp);
});
app.get("/DropdownList/ContactSelectList", (req, res) => {
  res.send(GetCaseWorkerResp);
});
app.get("/DropdownList/EthnicitySelectList", (req, res) => {
  res.send(GetEtheniCityResp);
});
app.get("/Patient/Race/Data", (req, res) => {
  res.send(GetRaceSelectResp);
});

app.get("/test", (req, res) => {
  res.send(PatientListRes);
});
app.post("/GetPatientList", (req, res) => {
  let body = req.body;
  if (JSON.stringify(PatientListReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(PatientListRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match definition");
    res.status(400).send("Request does not match definition").end();
  }
});
app.post("/Patient/ScheduleTask", (req, res) => {
  let body = req.body;
  if (JSON.stringify(ScheduleTaskReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(ScheduleTaskResp);
    }, 2000);
  } else {
    console.log("Error: Request does not match definition");
    res.status(400).send("Request does not match definition").end();
  }
});
app.post("/Patient/GetSamplesJson", (req, res) => {
  let body = req.body;
  if (JSON.stringify(SamplesJsonReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(SampleJsonRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match definition");
    res.status(400).send("Request does not match definition").end();
  }
});
app.post("/UserSettings/SetDefaultGridSettings", (req, res) => {
  let body = req.body;
  if (JSON.stringify(GridSettingsReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(GridSettingsRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match definition");
    res.status(400).send("Request does not match definition").end();
  }
});
//patientrecords
app.post("/PatientRecord/GetPatientRecordWorkordersJson", (req, res) => {
  let body = req.body;
  if (JSON.stringify(SearchWorkOrderReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(SearchWorkOrderRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match definition");
    res.status(400).send("Request does not match definition").end();
  }
});
//save tasks
app.post("/Patient/SaveTasks", (req, res) => {
  let body = req.body;
  if (JSON.stringify(SaveTaskReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(SaveTaskRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match definition");
    res.status(400).send("Request does not match definition").end();
  }
});
app.post("/AuditTrail/GetPatientAccessList", (req, res) => {
  let body = req.body;
  if (JSON.stringify(AuditTrailPatientAccessReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(AuditTrailPatientAccessRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match definition");
    res.status(400).send("Request does not match definition").end();
  }
});
app.post("/AuditTrail/GetAuditTrailTransactionsTree", (req, res) => {
  let body = req.body;
  if (JSON.stringify(TrailTransactionReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(TrailTransactionRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match definition");
    res.status(400).send("Request does not match definition").end();
  }
});
app.post("/Document/GetDocuments", (req, res) => {
  let body = req.body;
  if (JSON.stringify(GetDocumentsReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(GetDocumentsRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match definition");
    res.status(400).send("Request does not match definition").end();
  }
});
app.post("/Document/SaveHelp", (req, res) => {
  let body = req.body;
  if (JSON.stringify(DocumentSaveHelpReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(DocumentSaveHelpRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match definition");
    res.status(400).send("Request does not match definition").end();
  }
});
app.post("/DocumentManagement/UploadFileToLocal", (req, res) => {
  let body = req.body;
  if (JSON.stringify(UploadDocReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(UploadDocRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match definition");
    res.status(400).send("Request does not match definition").end();
  }
});
app.post("/Document/ListData", (req, res) => {
  let body = req.body;
  if (JSON.stringify(DocumentListReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(DocumentListRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match definition");
    res.status(400).send("Request does not match definition").end();
  }
});

app.post("/Document/Save", (req, res) => {
  let body = req.body;
  if (JSON.stringify(SaveDocumentReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(SaveDocumentRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match definition");
    res.status(400).send("Request does not match definition").end();
  }
});

app.post("/Patient/MarkAsMaster", (req, res) => {
  let body = req.body;
  if (JSON.stringify(MarkAsMasterReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(MarkAsMasterRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match Document SOP Data Definition");
    return res.status(400).send("Request does not match Document SOP").end();
  }
});
app.post("/SaveTasks", (req, res) => {
  let body = req.body;
  if (JSON.stringify(MarkAsMasterReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(MarkAsMasterRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match Document SOP Data Definition");
    return res.status(400).send("Request does not match Document SOP").end();
  }
});
app.post("/Document/GetDocumentPath", (req, res) => {
  let body = req.body;
  if (JSON.stringify(DocumentPathReq) === JSON.stringify(body)) {
    setTimeout(() => {
      res.send(DocumentPathRes);
    }, 2000);
  } else {
    console.log("Error: Request does not match Document SOP Data Definition");
    return res.status(400).send("Request does not match Document SOP").end();
  }
});

app.get("/Patient/GetPatientDetails", (req, res) => {
  res.send(GetPatientDetailsResp);
});
app.get("/DropdownList/ClientSelectList", (req, res) => {
  res.send(GetClientResp);
});

app.get("/DropdownList/GenderAdminSelectList", (req, res) => {
  res.send(GetClinicalSexResp);
});

app.get("/DropdownList/GenderIdentitySelectList", (req, res) => {
  res.send(GetGenderSelectResp);
});

app.get("/DropdownList/SexualOrientationSelectList", (req, res) => {
  res.send(GetSexualIdentityResp);
});

app.listen(process.env.PORT, () => {
  console.log(`I am live ${PORT}`);
});
