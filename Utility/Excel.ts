import * as fs from 'fs';
import * as XLSX from 'xlsx';

export class ExcelReader {
  private excelData: Map<string, any>;
  

  constructor(private filePath: string,private sheetName : string) {
    this.excelData = new Map<string, any>();
  }

  public readExcelData(): Map<string, any> {
    try {
      // Read the Excel file
    //   const workbook = XLSX.readFile(this.filePath);

      const workbook = XLSX.read(fs.readFileSync(this.filePath), { type: 'buffer' });

      // Assuming you want to read data from the first sheet
    //   const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[this.sheetName];

      // Parse the worksheet into JSON format
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Loop through the JSON data and store it in the map
      jsonData.forEach((row: any) => {
        Object.keys(row).forEach((key: string) => {
          this.excelData.set(key, row[key]);
        });
      });

      console.log("this.excelData"+this.excelData)

      return this.excelData;
    } catch (error) {
      console.error('Error reading Excel file:', error);
      throw error;
    }
  }
}
