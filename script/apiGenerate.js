const {compileUtil,renderAxiosFn} = require('./util')
var beautify = require('js-beautify').js
const lodash = require('lodash')
// 资源模块名
const resourceName = 'API_RESOURCE'
//需提取出来的路径前缀
const accessPathPrefix = ''
//路径前缀正则
const pathPrefixReg = new RegExp(accessPathPrefix,'g')

/**导出api请求常量 */
module.exports.renderApiConsts = function renderApiConsts(apiList){
    //去除重复的路径
    const uniqApiList = lodash.unionBy(apiList,'path')
     let apiConsts =`const ${resourceName}={\n`
     for(let api of uniqApiList){
         let note = api.operation.summary
         let apiPath = api.path
         apiPath = apiPath.replace(pathPrefixReg,'')
         apiConsts = apiConsts+`\t${compileUtil.getResouceName(apiPath)}:"${apiPath}",//${note}\n`
     }
     apiConsts+='}'
    return apiConsts
}
/**导出api请求方法 */
module.exports.renderApiFuns = function renderApiFuns(apiList){
    const apiFuncArray = []
    const commonFn =`
    //替换URL参数(重要，不要删除该方法)
    function dealApiParams(apiUrl,params){
        const reg= /\{.*?\}/g
        const matchResult = apiUrl.match(reg)
        // 如果匹配
        if(matchResult){
            matchResult.forEach(match=>{
                const replaceReg  = /[{}]/g
                //变量值
                const variate = match.replace(replaceReg,'')
                apiUrl = apiUrl.replace(match, params[variate])
            })
        }
        return apiUrl
   }`
   for(let api of apiList){
    let note = api.operation.summary //注释
    let requestMethod = api.method //请求方法
    let apiPath = api.path
    apiPath = apiPath.replace(pathPrefixReg,'')
    const fn  = `
    //${note}
    export function ${requestMethod}${compileUtil.getFunctionName(apiPath)}(params){
          var apiUrl = ${resourceName}.${compileUtil.getResouceName(apiPath)}
          apiUrl = dealApiParams(apiUrl,params)
          ${renderAxiosFn(requestMethod)}
   }`
   apiFuncArray.push(fn)

 }
   apiFuncArray.push(commonFn)
   let fileContent=  ''
   apiFuncArray.forEach(fn=>{
       fileContent =fileContent+fn+'\n'
   })
   return beautify(fileContent,{ indent_size: 2, space_in_empty_paren: true })
 }

