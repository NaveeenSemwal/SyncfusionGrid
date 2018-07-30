import { Component, OnInit,ViewChild  } from '@angular/core';
import { data } from './datasource';
import { PageSettingsModel } from '@syncfusion/ej2-grids';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-ng-grids';


@Component({
    selector: 'app-container',
    template: `<ejs-grid #grid  height=315 width=400 (rowSelected)='rowSelected($event)'  [dataSource]='data' [allowSorting]="true" [allowFiltering]="true" [allowPaging]="true" [pageSettings]='initialPage'>
                <e-columns>
                    <e-column type='checkbox'  [allowFiltering]='false' [allowSorting]='false' width='60'></e-column>                
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public initialPage: Object;
    public scrollSettings;
    

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.scrollSettings = { width: 400, height: 300 };
        this.data = data;

        this.initialPage = { pageSizes: true, pageCount: 4 };
    }

    rowSelected(args: RowSelectEventArgs) {
        
        let selectedrecords: Object[] = this.grid.getSelectedRecords();  // Get the selected records.
   
        console.log(selectedrecords);
    }
    
}