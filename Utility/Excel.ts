import * as fs from "fs";
import * as XLSX from "xlsx";

export class ExcelReader {
  private excelData: Map<string, any>;

  constructor(private filePath: string, private sheetName: string) {
    this.excelData = new Map<string, any>();
  }

  public readExcelData(): Map<string, any> {
    try {
      const workbook = XLSX.read(fs.readFileSync(this.filePath));

      const worksheet = workbook.Sheets[this.sheetName];

      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      jsonData.forEach((row: any) => {
        Object.keys(row).forEach((key: string) => {
          this.excelData.set(key, row[key]);
        });
      });

      console.log("this.excelData" + this.excelData);

      return this.excelData;
    } catch (error) {
      console.error("Error reading Excel file:", error);
      throw error;
    }
  }
}
