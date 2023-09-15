import { Workbook, Worksheet } from "exceljs";

export async function readExcelSheet(filepath: string, sheetname: string) {
  let myMap: Map<String, String> = new Map();

  try {
    const workbook = new Workbook();
    await workbook.xlsx.readFile(filepath);

    const worksheet: Worksheet = workbook.getWorksheet(sheetname);

    const columnCount = worksheet.getRow(1).cellCount;

    for (let i = 0; i <= columnCount; i++) {
      let column_value: any = worksheet.getRow(1).getCell(i).value;

      let Cell_value: any = worksheet.getRow(2).getCell(i).value;

      myMap.set(column_value, Cell_value);
    }
  } catch (error) {
    console.error("Error:", error);
  }

  return myMap;
}
