const {compileUtil,renderAxiosFn} = require('./util')
var beautify = require('js-beautify').js
const fs = require('fs')
// 资源模块名
const resourceName = 'MICROINSURANCE'
//需提取出来的路径前缀
const accessPathPrefix = ''
//路径前缀正则
const pathPrefixReg = new RegExp(accessPathPrefix,'g')
//api文档信息地址
const apiDocsUrl= "http://safes-biz.tsg.cfpamf.com/v2/api-docs?group=%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F"

/**构建请求地址常量文件 */
function buildApiResource(apiList){
    let resourceFile=  `const ${resourceName} = {`
    for(var apiUrl in apiList){
        //需将公共部分提取出来
      apiUrl = apiUrl.replace(pathPrefixReg,'')
      resourceFile =resourceFile+ `
         "${compileUtil.getResouceName(apiUrl)}":"${apiUrl}",` 
    }
    //删除最后一个逗号
    resourceFile = resourceFile.substring(0,resourceFile.length-1)
    resourceFile = resourceFile +`}
    export default ${resourceName}
    `
    FileUtil.createDirAndFile('./resources.js',beautify(resourceFile,{ indent_size: 2, space_in_empty_paren: true }))
}
/**构建请求方法文件 */
function buildApiFile(apiList){
    const apiFuncArray = []
    const commonFn =`function dealApiParams(apiUrl,params){
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
   Object.keys(apiList).forEach(path=>{
       const resourcePath = path.replace(pathPrefixReg,'')
       for(let requestMethod in apiList[path]){
          const fn  = `
          //${apiList[path][requestMethod].summary}
          export function ${requestMethod}${compileUtil.getFunctionName(resourcePath)}(params){
                var apiUrl = ${resourceName}.${compileUtil.getResouceName(resourcePath)}
                apiUrl = dealApiParams(apiUrl,params)
                ${renderAxiosFn(requestMethod)}
}`
          apiFuncArray.push(fn)
       }
   })
   apiFuncArray.push(commonFn)
   let fileContent=  ''
   apiFuncArray.forEach(fn=>{
       fileContent =fileContent+fn+'\n'
   })
   FileUtil.createDirAndFile('./api.js',beautify(fileContent,{ indent_size: 2, space_in_empty_paren: true }))
}
