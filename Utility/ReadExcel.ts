import { Workbook, Worksheet } from 'exceljs';
// import { remote } from 'webdriverio';

// export class ReadExcel{

//     constructor() {

//     }



export async function readExcelSheet(filepath:string,sheetname:string) {

  let myMap: Map<String, String> = new Map();

  try {
       // Load the Excel workbook
    const workbook = new Workbook();
    await workbook.xlsx.readFile(filepath);

    // Access the desired worksheet
    const worksheet: Worksheet = workbook.getWorksheet(sheetname); 

    // Read data from the worksheet (example: reading data from cell A1)

    const columnCount = worksheet.getRow(1).cellCount;

   

    for(let i=0;i<=columnCount;i++){
       

        let column_value : any = worksheet.getRow(1).getCell(i).value;

        let Cell_value : any= worksheet.getRow(2).getCell(i).value;

        myMap.set(column_value, Cell_value);

    }
  } catch (error) {
    console.error('Error:', error);
  } 

  return myMap;
}




