//保存系统活动
export function postActivitySetting(params) {
  var apiUrl = MICROINSURANCE.ACTIVITY_SETTING
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询系统活动详情
export function getActivitySetting(params) {
  var apiUrl = MICROINSURANCE.ACTIVITY_SETTING_SAID
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//删除系统活动
export function deleteActivitySetting(params) {
  var apiUrl = MICROINSURANCE.ACTIVITY_SETTING_SAID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//修改系统活动启用状态
export function putActivitySettingStatus(params) {
  var apiUrl = MICROINSURANCE.ACTIVITY_SETTING_SAID_STATUS
  apiUrl = dealApiParams(apiUrl, params)
  axios.put(apiUrl, params)
}

//查询系统活动
export function getActivitySettings(params) {
  var apiUrl = MICROINSURANCE.ACTIVITY_SETTINGS
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询代理人分页列表
export function getAgent(params) {
  var apiUrl = MICROINSURANCE.AGENT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//开通单个内部员工代理人账号
export function postAgentAccountEmployee(params) {
  var apiUrl = MICROINSURANCE.AGENT_ACCOUNT_EMPLOYEE
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//开通试点区域内部员工代理人账号
export function postAgentAccountOrg(params) {
  var apiUrl = MICROINSURANCE.AGENT_ACCOUNT_ORG
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询代理人分佣比例设置
export function getAgentCmsSetting(params) {
  var apiUrl = MICROINSURANCE.AGENT_CMS_SETTING
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存代理人分佣比例设置
export function postAgentCmsSetting(params) {
  var apiUrl = MICROINSURANCE.AGENT_CMS_SETTING
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//下载代理人列表
export function getAgentDownload(params) {
  var apiUrl = MICROINSURANCE.AGENT_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询代理人业绩列表
export function getAgentOrder(params) {
  var apiUrl = MICROINSURANCE.AGENT_ORDER
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询代理人佣金
export function getAgentOrderCms(params) {
  var apiUrl = MICROINSURANCE.AGENT_ORDER_CMS
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载代理人佣金
export function getAgentOrderCmsDownload(params) {
  var apiUrl = MICROINSURANCE.AGENT_ORDER_CMS_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载代理人业绩列表
export function getAgentOrderDownload(params) {
  var apiUrl = MICROINSURANCE.AGENT_ORDER_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询代理人业绩汇总
export function getAgentOrderSmy(params) {
  var apiUrl = MICROINSURANCE.AGENT_ORDER_SMY
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询代理等级管理津贴设置
export function getAgentSettingLevel(params) {
  var apiUrl = MICROINSURANCE.AGENT_SETTING_LEVEL
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存代理等级管理津贴设置
export function postAgentSettingLevel(params) {
  var apiUrl = MICROINSURANCE.AGENT_SETTING_LEVEL
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//删除代理等级管理津贴设置
export function deleteAgentSettingLevel(params) {
  var apiUrl = MICROINSURANCE.AGENT_SETTING_LEVEL_LEVELID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//变更代理人状态
export function postAgentStatus(params) {
  var apiUrl = MICROINSURANCE.AGENT_STATUS
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询代理团队分页列表
export function getAgentTeam(params) {
  var apiUrl = MICROINSURANCE.AGENT_TEAM
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载代理团队列表
export function getAgentTeamDownload(params) {
  var apiUrl = MICROINSURANCE.AGENT_TEAM_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询代理团队业绩列表
export function getAgentTeamOrder(params) {
  var apiUrl = MICROINSURANCE.AGENT_TEAM_ORDER
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载代理团队业绩列表
export function getAgentTeamOrderDownload(params) {
  var apiUrl = MICROINSURANCE.AGENT_TEAM_ORDER_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询代理团队业绩汇总
export function getAgentTeamOrderSmy(params) {
  var apiUrl = MICROINSURANCE.AGENT_TEAM_ORDER_SMY
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询单个代理团队详情
export function getAgentTeam(params) {
  var apiUrl = MICROINSURANCE.AGENT_TEAM_TEAMID
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询代理团队业绩明细
export function getAgentTeamOrder(params) {
  var apiUrl = MICROINSURANCE.AGENT_TEAM_TEAMID_ORDER
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询单个代理人详情
export function getAgent(params) {
  var apiUrl = MICROINSURANCE.AGENT_AGENTID
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询代理人业绩明细
export function getAgentOrder(params) {
  var apiUrl = MICROINSURANCE.AGENT_AGENTID_ORDER
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//泛华小额保险支付回调接口
export function postApiV1OrderCallback(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_CALLBACK
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//中华联合小额保险支付回调接口
export function postApiV1OrderCicPaycallback(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_CIC_PAYCALLBACK
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//中华保险支付POST重定向
export function postApiV1OrderCicPayredirect(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_CIC_PAYREDIRECT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//下载小额保险提成
export function getApiV1OrderCommissionDownload(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_COMMISSION_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询订单批改记录列表
export function getApiV1OrderCorrect(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_CORRECT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//订单批改接口
export function postApiV1OrderCorrect(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_CORRECT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//订单批改项目列表
export function getApiV1OrderCorrectFields(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_CORRECT_FIELDS
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载小额保险订单
export function getApiV1OrderDownload(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//泛华支付GET重定向
export function getApiV1OrderFhPayredirect(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_FH_PAYREDIRECT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//更新订单与泛华同步
export function postApiV1OrderOrder(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_ORDER_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询订单分页列表
export function postApiV1OrderQuery(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_QUERY
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询小额保险提成页列表
export function postApiV1OrderQueryCommission(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_QUERY_COMMISSION
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询小额保险提成列表汇总
export function postApiV1OrderQueryCommissionSmy(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_QUERY_COMMISSION_SMY
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询订单分页列表汇总
export function postApiV1OrderQuerySmy(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_QUERY_SMY
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询补单记录
export function getApiV1OrderSupplement(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_SUPPLEMENT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//订单补单同步到系统
export function postApiV1OrderSupplement(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_SUPPLEMENT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//批量更新订单与泛华同步
export function postApiV1OrderUpdateBatch(params) {
  var apiUrl = MICROINSURANCE.API_V1_ORDER_UPDATE_BATCH
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询订单理赔列表
export function getClaim(params) {
  var apiUrl = MICROINSURANCE.CLAIM
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//订单理赔列表下载
export function getClaimDownload(params) {
  var apiUrl = MICROINSURANCE.CLAIM_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//催办列表
export function getClaimHasten(params) {
  var apiUrl = MICROINSURANCE.CLAIM_HASTEN
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//催办 批量催办
export function postClaimHasten(params) {
  var apiUrl = MICROINSURANCE.CLAIM_HASTEN
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//催办列表下载
export function getClaimHastenDownload(params) {
  var apiUrl = MICROINSURANCE.CLAIM_HASTEN_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询订单理赔详理赔专员列表
export function getClaimSettlement(params) {
  var apiUrl = MICROINSURANCE.CLAIM_SETTLEMENT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询订单理赔报表-机构理赔数据
export function getClaimSummaryOrg(params) {
  var apiUrl = MICROINSURANCE.CLAIM_SUMMARY_ORG
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询订单理赔报表-机构理赔数据下载
export function getClaimSummaryOrgDownload(params) {
  var apiUrl = MICROINSURANCE.CLAIM_SUMMARY_ORG_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询订单理赔-产品报表
export function getClaimSummaryProduct(params) {
  var apiUrl = MICROINSURANCE.CLAIM_SUMMARY_PRODUCT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询订单理赔报表-产品下载
export function getClaimSummaryProductDownload(params) {
  var apiUrl = MICROINSURANCE.CLAIM_SUMMARY_PRODUCT_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询订单理赔报表-区域理赔数据
export function getClaimSummaryRegion(params) {
  var apiUrl = MICROINSURANCE.CLAIM_SUMMARY_REGION
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询订单理赔报表-区域理赔数据下载
export function getClaimSummaryRegionDownload(params) {
  var apiUrl = MICROINSURANCE.CLAIM_SUMMARY_REGION_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询订单理赔详情
export function getClaim(params) {
  var apiUrl = MICROINSURANCE.CLAIM_CLAIMID
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//修改理赔备注
export function postClaim(params) {
  var apiUrl = MICROINSURANCE.CLAIM_CLAIMID
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询订单理赔详情快递信息
export function getClaimExpress(params) {
  var apiUrl = MICROINSURANCE.CLAIM_CLAIMID_EXPRESS
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询订单理赔文件详情
export function getClaimFile(params) {
  var apiUrl = MICROINSURANCE.CLAIM_CLAIMID_FILE
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载理赔文件
export function getClaimFileDownload(params) {
  var apiUrl = MICROINSURANCE.CLAIM_CLAIMID_FILE_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询理赔历史流程和下一步流程
export function getClaimProgress(params) {
  var apiUrl = MICROINSURANCE.CLAIM_CLAIMID_PROGRESS
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//操作理赔流程
export function postClaimProgress(params) {
  var apiUrl = MICROINSURANCE.CLAIM_CLAIMID_PROGRESS
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//更改结案结果
export function putClaimResult(params) {
  var apiUrl = MICROINSURANCE.CLAIM_CLAIMID_RESULT
  apiUrl = dealApiParams(apiUrl, params)
  axios.put(apiUrl, params)
}

//修改理赔出险类型
export function putClaimRisktype(params) {
  var apiUrl = MICROINSURANCE.CLAIM_CLAIMID_RISKTYPE
  apiUrl = dealApiParams(apiUrl, params)
  axios.put(apiUrl, params)
}

//修改理赔专员
export function putClaimSettlement(params) {
  var apiUrl = MICROINSURANCE.CLAIM_CLAIMID_SETTLEMENT
  apiUrl = dealApiParams(apiUrl, params)
  axios.put(apiUrl, params)
}

//查询产品提成列表
export function getCommissionsetting(params) {
  var apiUrl = MICROINSURANCE.COMMISSIONSETTING
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存产品提成
export function postCommissionsetting(params) {
  var apiUrl = MICROINSURANCE.COMMISSIONSETTING
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//修改产品提成
export function putCommissionsetting(params) {
  var apiUrl = MICROINSURANCE.COMMISSIONSETTING_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.put(apiUrl, params)
}

//删除产品提成
export function deleteCommissionsetting(params) {
  var apiUrl = MICROINSURANCE.COMMISSIONSETTING_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//查询保险公司分页列表
export function getCompany(params) {
  var apiUrl = MICROINSURANCE.COMPANY
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存保险公司
export function postCompany(params) {
  var apiUrl = MICROINSURANCE.COMPANY
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//修改保险公司
export function putCompany(params) {
  var apiUrl = MICROINSURANCE.COMPANY
  apiUrl = dealApiParams(apiUrl, params)
  axios.put(apiUrl, params)
}

//查询保险公司参数配置分页列表
export function getCompanySetting(params) {
  var apiUrl = MICROINSURANCE.COMPANY_SETTING
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存保险公司参数配置
export function postCompanySetting(params) {
  var apiUrl = MICROINSURANCE.COMPANY_SETTING
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询保险职业列表分组代码
export function getCompanySettingOccuplcategoryGroup(params) {
  var apiUrl = MICROINSURANCE.COMPANY_SETTING_OCCUPLCATEGORY_GROUP
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//删除保险公司参数配置
export function deleteCompanySetting(params) {
  var apiUrl = MICROINSURANCE.COMPANY_SETTING_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//删除保险公司
export function deleteCompany(params) {
  var apiUrl = MICROINSURANCE.COMPANY_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//导入保险公司职业列表
export function postCompanyOccuplcategoryImport(params) {
  var apiUrl = MICROINSURANCE.COMPANY_ID_OCCUPLCATEGORY_IMPORT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//导入保险公司地区列表
export function postCompanyRegionImport(params) {
  var apiUrl = MICROINSURANCE.COMPANY_ID_REGION_IMPORT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//导入保险公司参数列表
export function postCompanySettingImport(params) {
  var apiUrl = MICROINSURANCE.COMPANY_ID_SETTING_IMPORT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询保险公司地区列表
export function getCompanySettingRegion(params) {
  var apiUrl = MICROINSURANCE.COMPANY_ID_SETTING_REGION
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询客户列表
export function getCustomer(params) {
  var apiUrl = MICROINSURANCE.CUSTOMER
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//变更客户负责人
export function postCustomerAdmin(params) {
  var apiUrl = MICROINSURANCE.CUSTOMER_ADMIN
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询客户列表下载
export function getCustomerDownload(params) {
  var apiUrl = MICROINSURANCE.CUSTOMER_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询客户保单信息
export function getCustomerPolicy(params) {
  var apiUrl = MICROINSURANCE.CUSTOMER_POLICY
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询客户详情
export function getCustomer(params) {
  var apiUrl = MICROINSURANCE.CUSTOMER_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询字典分页列表
export function getDictionary(params) {
  var apiUrl = MICROINSURANCE.DICTIONARY
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存字典
export function postDictionary(params) {
  var apiUrl = MICROINSURANCE.DICTIONARY
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//保存字典
export function putDictionary(params) {
  var apiUrl = MICROINSURANCE.DICTIONARY_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.put(apiUrl, params)
}

//删除字典
export function deleteDictionary(params) {
  var apiUrl = MICROINSURANCE.DICTIONARY_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//新建文件
export function postFile(params) {
  var apiUrl = MICROINSURANCE.FILE
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//删除文件
export function deleteFile(params) {
  var apiUrl = MICROINSURANCE.FILE
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//查询文件列表
export function getFileList(params) {
  var apiUrl = MICROINSURANCE.FILE_LIST
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//文件上传
export function postFileUpload(params) {
  var apiUrl = MICROINSURANCE.FILE_UPLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//修改文件名称
export function putFile(params) {
  var apiUrl = MICROINSURANCE.FILE_FILEID
  apiUrl = dealApiParams(apiUrl, params)
  axios.put(apiUrl, params)
}

//查询系统日志
export function getLog(params) {
  var apiUrl = MICROINSURANCE.LOG
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询系统操作模块
export function getLogModules(params) {
  var apiUrl = MICROINSURANCE.LOG_MODULES
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//泛华小额保险支付回调接口
export function postOrderCallback(params) {
  var apiUrl = MICROINSURANCE.ORDER_CALLBACK
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//中华联合小额保险支付回调接口
export function postOrderCicPaycallback(params) {
  var apiUrl = MICROINSURANCE.ORDER_CIC_PAYCALLBACK
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//中华保险支付POST重定向
export function postOrderCicPayredirect(params) {
  var apiUrl = MICROINSURANCE.ORDER_CIC_PAYREDIRECT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//下载小额保险提成
export function getOrderCommissionDownload(params) {
  var apiUrl = MICROINSURANCE.ORDER_COMMISSION_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询订单批改记录列表
export function getOrderCorrect(params) {
  var apiUrl = MICROINSURANCE.ORDER_CORRECT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//订单批改接口
export function postOrderCorrect(params) {
  var apiUrl = MICROINSURANCE.ORDER_CORRECT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//订单批改项目列表
export function getOrderCorrectFields(params) {
  var apiUrl = MICROINSURANCE.ORDER_CORRECT_FIELDS
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载小额保险订单
export function getOrderDownload(params) {
  var apiUrl = MICROINSURANCE.ORDER_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//泛华支付GET重定向
export function getOrderFhPayredirect(params) {
  var apiUrl = MICROINSURANCE.ORDER_FH_PAYREDIRECT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//更新订单与泛华同步
export function postOrderOrder(params) {
  var apiUrl = MICROINSURANCE.ORDER_ORDER_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询订单分页列表
export function postOrderQuery(params) {
  var apiUrl = MICROINSURANCE.ORDER_QUERY
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询小额保险提成页列表
export function postOrderQueryCommission(params) {
  var apiUrl = MICROINSURANCE.ORDER_QUERY_COMMISSION
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询小额保险提成列表汇总
export function postOrderQueryCommissionSmy(params) {
  var apiUrl = MICROINSURANCE.ORDER_QUERY_COMMISSION_SMY
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询订单分页列表汇总
export function postOrderQuerySmy(params) {
  var apiUrl = MICROINSURANCE.ORDER_QUERY_SMY
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询补单记录
export function getOrderSupplement(params) {
  var apiUrl = MICROINSURANCE.ORDER_SUPPLEMENT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//订单补单同步到系统
export function postOrderSupplement(params) {
  var apiUrl = MICROINSURANCE.ORDER_SUPPLEMENT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//批量更新订单与泛华同步
export function postOrderUpdateBatch(params) {
  var apiUrl = MICROINSURANCE.ORDER_UPDATE_BATCH
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//保存产品常见问题
export function postProductAttentions(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ATTENTIONS
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询产品类别
export function getProductAttr(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ATTR
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询管理后端产品列表
export function postProductBackend(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_BACKEND
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//保存产品基本信息
export function postProductBasic(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_BASIC
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询产品渠道
export function getProductChannel(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_CHANNEL
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存产品健康告知
export function postProductHealthnotification(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_HEALTHNOTIFICATION
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//保存产品投保信息录入列表
export function postProductInsureform(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_INSUREFORM
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询所有产品计划列表
export function getProductPlan(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PLAN
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存产品计划价格费率表
export function postProductPlanFactorPrice(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PLAN_FACTOR_PRICE
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询海报列表
export function getProductPoster(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_POSTER
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存产品海报
export function postProductPoster(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_POSTER
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询产品海报详情
export function getProductPoster(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_POSTER_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//删除产品海报
export function deleteProductPoster(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_POSTER_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//保存产品价格因素可选值
export function postProductPriceFactorOptionals(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRICE_FACTOR_OPTIONALS
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询价格因素IdName对应关系
export function getProductPriceFactors(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRICE_FACTORS
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询所有产品续保列表
export function getProductRenew(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_RENEW
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询所有产品销售区域列表
export function getProductSalesOrg(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_SALES_ORG
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存产品销售区域列表
export function postProductSalesOrg(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_SALES_ORG
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询活动产品列表
export function postProductSimple(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_SIMPLE
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//产品图片文件上传
export function postProductUpload(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_UPLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询产品常见问题
export function getProductAttentions(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_ATTENTIONS
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询产品详情基本信息
export function getProductBasic(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_BASIC
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//修改保险产品状态
export function putProductChange(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_CHANGE_STATUS
  apiUrl = dealApiParams(apiUrl, params)
  axios.put(apiUrl, params)
}

//查询产品保险条款
export function getProductClause(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_CLAUSE
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存产品保险条款
export function postProductClause(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_CLAUSE
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询产品健康告知
export function getProductHealthnotification(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_HEALTHNOTIFICATION
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询产品投保信息录入列表
export function getProductInsureform(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_INSUREFORM
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询团险产品介绍
export function getProductIntroduce(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_INTRODUCE
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存团险产品介绍
export function postProductIntroduce(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_INTRODUCE
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询团险产品投保须知
export function getProductNotice(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_NOTICE
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存团险产品投保须知
export function postProductNotice(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_NOTICE
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询产品计划
export function getProductPlan(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_PLAN
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存产品计划
export function postProductPlan(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_PLAN
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询产品计划价格费率表
export function getProductPlanPriceFactor(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_PLAN_PRICE_FACTOR
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//删除产品计划
export function deleteProductPlan(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_PLAN_PLANID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//查询产品保险价格选项
export function getProductPriceFactorOptionals(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_PRICE_FACTOR_OPTIONALS
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询产品价格因素字段code
export function getProductPriceFactorSelect(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_PRICE_FACTOR_SELECT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存产品价格因素code
export function postProductPriceFactorSelect(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_PRICE_FACTOR_SELECT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询单个产品续保列表
export function getProductRenew(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_RENEW
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存产品续保列表
export function postProductRenew(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_RENEW
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询单个产品销售区域列表
export function getProductSalesOrg(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_ID_SALES_ORG
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询产品保障项目
export function getProductCoverage(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存产品保障项目
export function postProductCoverage(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询产品保障项目保额
export function getProductCoverageAmount(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE_AMOUNT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存产品保障项目保额
export function postProductCoverageAmount(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE_AMOUNT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//删除产品保障项目保额
export function deleteProductCoverageAmount(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE_AMOUNT_SPCAID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//查询团险产品保费折扣比例
export function getProductCoverageDiscount(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE_DISCOUNT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存团险产品保费折扣比例
export function postProductCoverageDiscount(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE_DISCOUNT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//删除团险产品保费折扣比例
export function deleteProductCoverageDiscount(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE_DISCOUNT_SPCDID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//查询产品保障项目保费
export function getProductCoveragePremium(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE_PREMIUM
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存产品保障项目保费
export function postProductCoveragePremium(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE_PREMIUM
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//生成产品保障项目保费
export function getProductCoveragePremiumGenerate(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE_PREMIUM_GENERATE
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//导入品保障项目保费
export function postProductCoveragePremiumImport(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE_PREMIUM_IMPORT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//品保障项目保费模板下载
export function getProductCoveragePremiumTemplate(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE_PREMIUM_TEMPLATE
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//删除产品保障项目
export function deleteProductCoverage(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_COVERAGE_SPCID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//查询团险产品报价限制
export function getProductQuoteLimit(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_QUOTE_LIMIT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存团险产品报价限制
export function postProductQuoteLimit(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_QUOTE_LIMIT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//保存团险产品报价限制
export function deleteProductQuoteLimit(params) {
  var apiUrl = MICROINSURANCE.PRODUCT_PRODUCTID_QUOTE_LIMIT_SPQLID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//删除系统推送设置
export function deletePushSetting(params) {
  var apiUrl = MICROINSURANCE.PUSH_SETTING_SPSID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//修改系统推送设置启用状态
export function putPushSettingStatus(params) {
  var apiUrl = MICROINSURANCE.PUSH_SETTING_SPSID_STATUS
  apiUrl = dealApiParams(apiUrl, params)
  axios.put(apiUrl, params)
}

//查询推送统计时间段type列表
export function getPushSettingsDatetype(params) {
  var apiUrl = MICROINSURANCE.PUSH_SETTINGS_DATETYPE
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询系统推送设置
export function getPushSettings(params) {
  var apiUrl = MICROINSURANCE.PUSH_SETTINGS_PUSHTYPE
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存系统推送设置
export function postPushSettings(params) {
  var apiUrl = MICROINSURANCE.PUSH_SETTINGS_PUSHTYPE
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//查询系统推送详情
export function getPushSettings(params) {
  var apiUrl = MICROINSURANCE.PUSH_SETTINGS_PUSHTYPE_SPSID
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询保险信贷转化数据报表
export function getReportCusttransferList(params) {
  var apiUrl = MICROINSURANCE.REPORT_CUSTTRANSFER_LIST
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载保险信贷转化数据报表
export function getReportCusttransferListDownload(params) {
  var apiUrl = MICROINSURANCE.REPORT_CUSTTRANSFER_LIST_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询保险客户分支转化统计报表
export function getReportCusttransferOrg(params) {
  var apiUrl = MICROINSURANCE.REPORT_CUSTTRANSFER_ORG
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载保险客户分支转化统计报表
export function getReportCusttransferOrgDownload(params) {
  var apiUrl = MICROINSURANCE.REPORT_CUSTTRANSFER_ORG_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询保险客户区域转化统计报表
export function getReportCusttransferRegion(params) {
  var apiUrl = MICROINSURANCE.REPORT_CUSTTRANSFER_REGION
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载保险客户区域转化统计报表
export function getReportCusttransferRegionDownload(params) {
  var apiUrl = MICROINSURANCE.REPORT_CUSTTRANSFER_REGION_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//小额保险-区域销售分析
export function getReportDashboardRegionTrend(params) {
  var apiUrl = MICROINSURANCE.REPORT_DASHBOARD_REGION_TREND
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//小额保险-今日昨日累计汇总
export function getReportDashboardSalesSmy(params) {
  var apiUrl = MICROINSURANCE.REPORT_DASHBOARD_SALES_SMY
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//小额保险-销售排行
export function getReportDashboardSalesTop(params) {
  var apiUrl = MICROINSURANCE.REPORT_DASHBOARD_SALES_TOP
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//小额保险-销售趋势汇总
export function getReportDashboardSalesTrend(params) {
  var apiUrl = MICROINSURANCE.REPORT_DASHBOARD_SALES_TREND
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询按人员统计报表
export function getReportEmployee(params) {
  var apiUrl = MICROINSURANCE.REPORT_EMPLOYEE
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载按人员统计报表
export function getReportEmployeeDownload(params) {
  var apiUrl = MICROINSURANCE.REPORT_EMPLOYEE_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询按分支统计报表
export function getReportOrg(params) {
  var apiUrl = MICROINSURANCE.REPORT_ORG
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载按区域统计报表
export function getReportOrgDownload(params) {
  var apiUrl = MICROINSURANCE.REPORT_ORG_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询按产品统计报表
export function getReportProduct(params) {
  var apiUrl = MICROINSURANCE.REPORT_PRODUCT
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载按产品统计报表
export function getReportProductDownload(params) {
  var apiUrl = MICROINSURANCE.REPORT_PRODUCT_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询按区域统计报表
export function getReportRegion(params) {
  var apiUrl = MICROINSURANCE.REPORT_REGION
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//下载按区域统计报表
export function getReportRegionDownload(params) {
  var apiUrl = MICROINSURANCE.REPORT_REGION_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询轮播图设置分页列表
export function getSystemSetting(params) {
  var apiUrl = MICROINSURANCE.SYSTEM_SETTING
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//保存轮播图设置
export function postSystemSetting(params) {
  var apiUrl = MICROINSURANCE.SYSTEM_SETTING
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//删除轮播图设置
export function deleteSystemSetting(params) {
  var apiUrl = MICROINSURANCE.SYSTEM_SETTING_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//批量保存轮播图设置
export function postSystemSetting(params) {
  var apiUrl = MICROINSURANCE.SYSTEM_SETTING_TYPE
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//新建用户
export function postUser(params) {
  var apiUrl = MICROINSURANCE.USER
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//微信绑定用户下载
export function getUserDownload(params) {
  var apiUrl = MICROINSURANCE.USER_DOWNLOAD
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//查询用户分页列表
export function getUserList(params) {
  var apiUrl = MICROINSURANCE.USER_LIST
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//机构创新业务对接人分页查询
export function getUserOrgpic(params) {
  var apiUrl = MICROINSURANCE.USER_ORGPIC
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//新建机构创新业务对接人
export function postUserOrgpic(params) {
  var apiUrl = MICROINSURANCE.USER_ORGPIC
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//导入机构创新业务对接人与负责人信息表
export function postUserOrgpicImport(params) {
  var apiUrl = MICROINSURANCE.USER_ORGPIC_IMPORT
  apiUrl = dealApiParams(apiUrl, params)
  axios.post(apiUrl, params)
}

//更新机构创新业务对接人
export function putUserOrgpic(params) {
  var apiUrl = MICROINSURANCE.USER_ORGPIC_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.put(apiUrl, params)
}

//删除机构创新业务对接人
export function deleteUserOrgpic(params) {
  var apiUrl = MICROINSURANCE.USER_ORGPIC_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//同步用户信息
export function getUserSync(params) {
  var apiUrl = MICROINSURANCE.USER_SYNC
  apiUrl = dealApiParams(apiUrl, params)
  axios.get(apiUrl, {
    params
  })
}

//修改用户
export function putUser(params) {
  var apiUrl = MICROINSURANCE.USER_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.put(apiUrl, params)
}

//删除用户
export function deleteUser(params) {
  var apiUrl = MICROINSURANCE.USER_ID
  apiUrl = dealApiParams(apiUrl, params)
  axios.delete(apiUrl, {
    params
  })
}

//微信用户解绑
export function putUserUnbind(params) {
  var apiUrl = MICROINSURANCE.USER_ID_UNBIND
  apiUrl = dealApiParams(apiUrl, params)
  axios.put(apiUrl, params)
}

function dealApiParams(apiUrl, params) {
  const reg = /{.*?}/g
  const matchResult = apiUrl.match(reg)
  // 如果匹配
  if (matchResult) {
    matchResult.forEach(match => {
      const replaceReg = /[{}]/g
      //变量值
      const variate = match.replace(replaceReg, '')
      apiUrl = apiUrl.replace(match, params[variate])
    })
  }
  return apiUrl
}