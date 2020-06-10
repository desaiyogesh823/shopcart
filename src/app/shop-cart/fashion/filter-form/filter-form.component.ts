import { Component, Inject, ViewEncapsulation, ViewChild, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';

@Component({
    selector: 'filter-form-dialog',
    templateUrl: 'filter-form.component.html',
    styleUrls: ['filter-form.component.scss']
})

export class filterFormComponent implements AfterViewInit {
    @Input() public AllLocationtypesList: any;
    @Input() public isAllSelected: any;

    filterlist: any[] = [
        {
            Id: 1,
            Label: 'Brand',
            isAllSelected: false
        },
        {
            Id: 2,
            Label: 'Price',
            isAllSelected: false
        },
        {
            Id: 3,
            Label: 'Size',
            isAllSelected: false
        },
        {
            Id: 4,
            Label: 'Color',
            isAllSelected: false
        },
        {
            Id: 5,
            Label: 'Discount',
            isAllSelected: false
        }
    ];

    brandList: any[] = [{
        id: 1,
        title: "Pepe jeans",
        isSelected: false,
    },
    {
        id: 2,
        title: "Wills lifestyle",
        isSelected: false,
    },
    {
        id: 3,
        title: "Monte Carlo",
        isSelected: false,
    }, {
        id: 2,
        title: "Levi’s",
        isSelected: false,
    },
    {
        id: 3,
        title: "Jack & Jones",
        isSelected: false,
    },
    {
        id: 3,
        title: "Nike",
        isSelected: false,
    }];

    filterOption: any[] = [];
    mat_selectedIndex: number = 0;
    isalllocationselected: boolean = false;
    constructor(
        private cd: ChangeDetectorRef,
        public modalCtrl: ModalController,
        private menu: MenuController
    ) { }

    ionViewDidEnter() {
        this.menu.enable(false);
        this.mat_selectedIndex = 0;
        this.filterOption = this.brandList;
    }

    async closeModal() {
        var data = {
            isAllSelected: this.filterlist[0].isAllSelected,
            AllLocationtypesList: this.AllLocationtypesList,
        }
        await this.modalCtrl.dismiss(data);
    }

    ngAfterViewInit(): void {
        this.cd.detectChanges();
    }

    Allselected: boolean = false;
    selectedOptions: string[];
    onNgModelChange(list: any, data?: any) {

    }


    textLabel: any;
    onLinkClick(event: any) {
        this.mat_selectedIndex = event.index;
        if (event.tab.textLabel === "Brand") {
            this.filterOption = this.brandList;
        } else {
            this.filterOption = [];
        }
    }


    resetAll() {
        this.filterlist.forEach(element => {
            element.isAllSelected = false;
        });
    }


    async  closeEmpty() {
        await this.modalCtrl.dismiss(false);
    }
}
