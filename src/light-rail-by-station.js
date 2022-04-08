const lightRailInformation = require("./light-rail-information");

module.exports = lightRailInformationByStation()

function lightRailInformationByStation() {
   let result = {}
   lightRailInformation.forEach(item => {
      result[item.code] = item
   })

   return result
}