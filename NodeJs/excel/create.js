// exceljs application
const ExcelJS = require('exceljs')
const http = require('./http.js')

// 创建excel文件
const createExcel =async (wirteFilePath) => {
	const workbook = new ExcelJS.Workbook();
	const sheet = workbook.addWorksheet('网段导入模板');
	sheet.addRow(['项目编号', '资产名称', '可用区域', '网段']);
	sheet.getRow(1).font = { bold: true };
	const rows = new Array(50)
	rows.fill([])
	sheet.addRows(rows)
	const proList = await getProList()
	console.log('proList', proList)
	setValidation(sheet, 'C', {
		type: 'list',
		allowBlank: false,
		formulae: ['"shyc2_region_1"']
	})
	setValidation(sheet, 'A', {
		type: 'list',
		allowBlank: false,
		formulae: [`"${proList}"`]
	})
	// sheet.getColumn('C').eachCell({ includeEmpty: true }, function (cell, rowNumber) {
	// 	if (rowNumber <= 1) {
	// 		return
	// 	}
	// 	cell.dataValidation = {
	// 		type: 'list',

	// 		allowBlank: false,
	// 		formulae: ['"shyc2_region_1"']
	// 	};
	// })
	workbook.xlsx.writeFile(wirteFilePath)
      .then(function() {
          console.log(`${wirteFilePath} write done`)
      });
}

const getProList = async (type='id') => {
	let res = await http({
		method: 'get',
		url: '/api/v1/user/project-list?page=1&size=9999&order=id'
	})
	if (type === 'id') {
		return res.data.map(item=>item.id).join(',')
	}
	return res.data
}

const setValidation = (sheet, cells, validation) => {
	sheet.getColumn(cells).eachCell({ includeEmpty: true }, function (cell, rowNumber) {
		if (rowNumber <= 1) {
			return
		}
		cell.dataValidation = validation
	})
}
module.exports = createExcel