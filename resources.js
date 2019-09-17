const MICROINSURANCE = {
  "ACTIVITY_SETTING": "/activity/setting",
  "ACTIVITY_SETTING_SAID": "/activity/setting/{saId}",
  "ACTIVITY_SETTING_SAID_STATUS": "/activity/setting/{saId}/status",
  "ACTIVITY_SETTINGS": "/activity/settings",
  "AGENT": "/agent",
  "AGENT_ACCOUNT_EMPLOYEE": "/agent/account/employee",
  "AGENT_ACCOUNT_ORG": "/agent/account/org",
  "AGENT_CMS_SETTING": "/agent/cms/setting",
  "AGENT_DOWNLOAD": "/agent/download",
  "AGENT_ORDER": "/agent/order",
  "AGENT_ORDER_CMS": "/agent/order/cms",
  "AGENT_ORDER_CMS_DOWNLOAD": "/agent/order/cms/download",
  "AGENT_ORDER_DOWNLOAD": "/agent/order/download",
  "AGENT_ORDER_SMY": "/agent/order/smy",
  "AGENT_SETTING_LEVEL": "/agent/setting/level",
  "AGENT_SETTING_LEVEL_LEVELID": "/agent/setting/level/{levelId}",
  "AGENT_STATUS": "/agent/status",
  "AGENT_TEAM": "/agent/team",
  "AGENT_TEAM_DOWNLOAD": "/agent/team/download",
  "AGENT_TEAM_ORDER": "/agent/team/order",
  "AGENT_TEAM_ORDER_DOWNLOAD": "/agent/team/order/download",
  "AGENT_TEAM_ORDER_SMY": "/agent/team/order/smy",
  "AGENT_TEAM_TEAMID": "/agent/team/{teamId}",
  "AGENT_TEAM_TEAMID_ORDER": "/agent/team/{teamId}/order",
  "AGENT_AGENTID": "/agent/{agentId}",
  "AGENT_AGENTID_ORDER": "/agent/{agentId}/order",
  "API_V1_ORDER_CALLBACK": "/api/v1/order/callback",
  "API_V1_ORDER_CIC_PAYCALLBACK": "/api/v1/order/cic/payCallback",
  "API_V1_ORDER_CIC_PAYREDIRECT": "/api/v1/order/cic/payRedirect",
  "API_V1_ORDER_COMMISSION_DOWNLOAD": "/api/v1/order/commission/download",
  "API_V1_ORDER_CORRECT": "/api/v1/order/correct",
  "API_V1_ORDER_CORRECT_FIELDS": "/api/v1/order/correct/fields",
  "API_V1_ORDER_DOWNLOAD": "/api/v1/order/download",
  "API_V1_ORDER_FH_PAYREDIRECT": "/api/v1/order/fh/payRedirect",
  "API_V1_ORDER_ORDER_ID": "/api/v1/order/order/{id}",
  "API_V1_ORDER_QUERY": "/api/v1/order/query",
  "API_V1_ORDER_QUERY_COMMISSION": "/api/v1/order/query/commission",
  "API_V1_ORDER_QUERY_COMMISSION_SMY": "/api/v1/order/query/commission/smy",
  "API_V1_ORDER_QUERY_SMY": "/api/v1/order/query/smy",
  "API_V1_ORDER_SUPPLEMENT": "/api/v1/order/supplement",
  "API_V1_ORDER_UPDATE_BATCH": "/api/v1/order/update/batch",
  "CLAIM": "/claim",
  "CLAIM_DOWNLOAD": "/claim/download",
  "CLAIM_HASTEN": "/claim/hasten",
  "CLAIM_HASTEN_DOWNLOAD": "/claim/hasten/download",
  "CLAIM_SETTLEMENT": "/claim/settlement",
  "CLAIM_SUMMARY_ORG": "/claim/summary/org",
  "CLAIM_SUMMARY_ORG_DOWNLOAD": "/claim/summary/org/download",
  "CLAIM_SUMMARY_PRODUCT": "/claim/summary/product",
  "CLAIM_SUMMARY_PRODUCT_DOWNLOAD": "/claim/summary/product/download",
  "CLAIM_SUMMARY_REGION": "/claim/summary/region",
  "CLAIM_SUMMARY_REGION_DOWNLOAD": "/claim/summary/region/download",
  "CLAIM_CLAIMID": "/claim/{claimId}",
  "CLAIM_CLAIMID_EXPRESS": "/claim/{claimId}/express",
  "CLAIM_CLAIMID_FILE": "/claim/{claimId}/file",
  "CLAIM_CLAIMID_FILE_DOWNLOAD": "/claim/{claimId}/file/download",
  "CLAIM_CLAIMID_PROGRESS": "/claim/{claimId}/progress",
  "CLAIM_CLAIMID_RESULT": "/claim/{claimId}/result",
  "CLAIM_CLAIMID_RISKTYPE": "/claim/{claimId}/riskType",
  "CLAIM_CLAIMID_SETTLEMENT": "/claim/{claimId}/settlement",
  "COMMISSIONSETTING": "/commissionSetting",
  "COMMISSIONSETTING_ID": "/commissionSetting/{id}",
  "COMPANY": "/company",
  "COMPANY_SETTING": "/company/setting",
  "COMPANY_SETTING_OCCUPLCATEGORY_GROUP": "/company/setting/occuplCategory/group",
  "COMPANY_SETTING_ID": "/company/setting/{id}",
  "COMPANY_ID": "/company/{id}",
  "COMPANY_ID_OCCUPLCATEGORY_IMPORT": "/company/{id}/occuplCategory/import",
  "COMPANY_ID_REGION_IMPORT": "/company/{id}/region/import",
  "COMPANY_ID_SETTING_IMPORT": "/company/{id}/setting/import",
  "COMPANY_ID_SETTING_REGION": "/company/{id}/setting/region",
  "CUSTOMER": "/customer",
  "CUSTOMER_ADMIN": "/customer/admin",
  "CUSTOMER_DOWNLOAD": "/customer/download",
  "CUSTOMER_POLICY": "/customer/policy",
  "CUSTOMER_ID": "/customer/{id}",
  "DICTIONARY": "/dictionary",
  "DICTIONARY_ID": "/dictionary/{id}",
  "FILE": "/file",
  "FILE_LIST": "/file/list",
  "FILE_UPLOAD": "/file/upload",
  "FILE_FILEID": "/file/{fileId}",
  "LOG": "/log",
  "LOG_MODULES": "/log/modules",
  "ORDER_CALLBACK": "/order/callback",
  "ORDER_CIC_PAYCALLBACK": "/order/cic/payCallback",
  "ORDER_CIC_PAYREDIRECT": "/order/cic/payRedirect",
  "ORDER_COMMISSION_DOWNLOAD": "/order/commission/download",
  "ORDER_CORRECT": "/order/correct",
  "ORDER_CORRECT_FIELDS": "/order/correct/fields",
  "ORDER_DOWNLOAD": "/order/download",
  "ORDER_FH_PAYREDIRECT": "/order/fh/payRedirect",
  "ORDER_ORDER_ID": "/order/order/{id}",
  "ORDER_QUERY": "/order/query",
  "ORDER_QUERY_COMMISSION": "/order/query/commission",
  "ORDER_QUERY_COMMISSION_SMY": "/order/query/commission/smy",
  "ORDER_QUERY_SMY": "/order/query/smy",
  "ORDER_SUPPLEMENT": "/order/supplement",
  "ORDER_UPDATE_BATCH": "/order/update/batch",
  "PRODUCT_ATTENTIONS": "/product/attentions",
  "PRODUCT_ATTR": "/product/attr",
  "PRODUCT_BACKEND": "/product/backend",
  "PRODUCT_BASIC": "/product/basic",
  "PRODUCT_CHANNEL": "/product/channel",
  "PRODUCT_HEALTHNOTIFICATION": "/product/healthNotification",
  "PRODUCT_INSUREFORM": "/product/insureForm",
  "PRODUCT_PLAN": "/product/plan",
  "PRODUCT_PLAN_FACTOR_PRICE": "/product/plan/factor/price",
  "PRODUCT_POSTER": "/product/poster",
  "PRODUCT_POSTER_ID": "/product/poster/{id}",
  "PRODUCT_PRICE_FACTOR_OPTIONALS": "/product/price/factor/optionals",
  "PRODUCT_PRICE_FACTORS": "/product/price/factors",
  "PRODUCT_RENEW": "/product/renew",
  "PRODUCT_SALES_ORG": "/product/sales/org",
  "PRODUCT_SIMPLE": "/product/simple",
  "PRODUCT_UPLOAD": "/product/upload",
  "PRODUCT_ID_ATTENTIONS": "/product/{id}/attentions",
  "PRODUCT_ID_BASIC": "/product/{id}/basic",
  "PRODUCT_ID_CHANGE_STATUS": "/product/{id}/change/{status}",
  "PRODUCT_ID_CLAUSE": "/product/{id}/clause",
  "PRODUCT_ID_HEALTHNOTIFICATION": "/product/{id}/healthNotification",
  "PRODUCT_ID_INSUREFORM": "/product/{id}/insureForm",
  "PRODUCT_ID_INTRODUCE": "/product/{id}/introduce",
  "PRODUCT_ID_NOTICE": "/product/{id}/notice",
  "PRODUCT_ID_PLAN": "/product/{id}/plan",
  "PRODUCT_ID_PLAN_PRICE_FACTOR": "/product/{id}/plan/price/factor",
  "PRODUCT_ID_PLAN_PLANID": "/product/{id}/plan/{planId}",
  "PRODUCT_ID_PRICE_FACTOR_OPTIONALS": "/product/{id}/price/factor/optionals",
  "PRODUCT_ID_PRICE_FACTOR_SELECT": "/product/{id}/price/factor/select",
  "PRODUCT_ID_RENEW": "/product/{id}/renew",
  "PRODUCT_ID_SALES_ORG": "/product/{id}/sales/org",
  "PRODUCT_PRODUCTID_COVERAGE": "/product/{productId}/coverage",
  "PRODUCT_PRODUCTID_COVERAGE_AMOUNT": "/product/{productId}/coverage/amount",
  "PRODUCT_PRODUCTID_COVERAGE_AMOUNT_SPCAID": "/product/{productId}/coverage/amount/{spcaId}",
  "PRODUCT_PRODUCTID_COVERAGE_DISCOUNT": "/product/{productId}/coverage/discount",
  "PRODUCT_PRODUCTID_COVERAGE_DISCOUNT_SPCDID": "/product/{productId}/coverage/discount/{spcdId}",
  "PRODUCT_PRODUCTID_COVERAGE_PREMIUM": "/product/{productId}/coverage/premium",
  "PRODUCT_PRODUCTID_COVERAGE_PREMIUM_GENERATE": "/product/{productId}/coverage/premium/generate",
  "PRODUCT_PRODUCTID_COVERAGE_PREMIUM_IMPORT": "/product/{productId}/coverage/premium/import",
  "PRODUCT_PRODUCTID_COVERAGE_PREMIUM_TEMPLATE": "/product/{productId}/coverage/premium/template",
  "PRODUCT_PRODUCTID_COVERAGE_SPCID": "/product/{productId}/coverage/{spcId}",
  "PRODUCT_PRODUCTID_QUOTE_LIMIT": "/product/{productId}/quote/limit",
  "PRODUCT_PRODUCTID_QUOTE_LIMIT_SPQLID": "/product/{productId}/quote/limit/{spqlId}",
  "PUSH_SETTING_SPSID": "/push/setting/{spsId}",
  "PUSH_SETTING_SPSID_STATUS": "/push/setting/{spsId}/status",
  "PUSH_SETTINGS_DATETYPE": "/push/settings/dateType",
  "PUSH_SETTINGS_PUSHTYPE": "/push/settings/{pushType}",
  "PUSH_SETTINGS_PUSHTYPE_SPSID": "/push/settings/{pushType}/{spsId}",
  "REPORT_CUSTTRANSFER_LIST": "/report/custTransfer/list",
  "REPORT_CUSTTRANSFER_LIST_DOWNLOAD": "/report/custTransfer/list/download",
  "REPORT_CUSTTRANSFER_ORG": "/report/custTransfer/org",
  "REPORT_CUSTTRANSFER_ORG_DOWNLOAD": "/report/custTransfer/org/download",
  "REPORT_CUSTTRANSFER_REGION": "/report/custTransfer/region",
  "REPORT_CUSTTRANSFER_REGION_DOWNLOAD": "/report/custTransfer/region/download",
  "REPORT_DASHBOARD_REGION_TREND": "/report/dashboard/region/trend",
  "REPORT_DASHBOARD_SALES_SMY": "/report/dashboard/sales/smy",
  "REPORT_DASHBOARD_SALES_TOP": "/report/dashboard/sales/top",
  "REPORT_DASHBOARD_SALES_TREND": "/report/dashboard/sales/trend",
  "REPORT_EMPLOYEE": "/report/employee",
  "REPORT_EMPLOYEE_DOWNLOAD": "/report/employee/download",
  "REPORT_ORG": "/report/org",
  "REPORT_ORG_DOWNLOAD": "/report/org/download",
  "REPORT_PRODUCT": "/report/product",
  "REPORT_PRODUCT_DOWNLOAD": "/report/product/download",
  "REPORT_REGION": "/report/region",
  "REPORT_REGION_DOWNLOAD": "/report/region/download",
  "SYSTEM_SETTING": "/system/setting",
  "SYSTEM_SETTING_ID": "/system/setting/{id}",
  "SYSTEM_SETTING_TYPE": "/system/setting/{type}",
  "USER": "/user",
  "USER_DOWNLOAD": "/user/download",
  "USER_LIST": "/user/list",
  "USER_ORGPIC": "/user/orgPic",
  "USER_ORGPIC_IMPORT": "/user/orgPic/import",
  "USER_ORGPIC_ID": "/user/orgPic/{id}",
  "USER_SYNC": "/user/sync",
  "USER_ID": "/user/{id}",
  "USER_ID_UNBIND": "/user/{id}/unbind"
}
export default MICROINSURANCE