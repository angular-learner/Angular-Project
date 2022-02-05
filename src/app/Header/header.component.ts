import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})
export class HeaderComponent{
    @Output() onFeatureSelect  = new EventEmitter<string>();

    constructor(private dataService: DataStorageService){}

    onSaveData(){
        this.dataService.storeRecipes();
    }

    onFetchData(){
        this.dataService.fetchRecipes();
    }

    onSelect(feature: string){
        this.onFeatureSelect.emit(feature);

        

    }

}