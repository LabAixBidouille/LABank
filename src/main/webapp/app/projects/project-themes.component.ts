import {ProjectService} from "./project.service";
import {Component, Output, EventEmitter} from "@angular/core";
import {CTheme} from "./CTheme";
/**
 * Created by Kandel HANAFI on 06/04/2017.
 */
@Component({
    selector: 'project-themes',
    templateUrl: './app/projects/project-theme.html',
    providers: [ProjectService]
})
export class ProjectThemesComponent{
    themes:Array<CTheme>;
    themesSelected  = new Array<CTheme>();
    @Output()
    selectedThemes = new EventEmitter<Array<CTheme>>();

    constructor(private projectService: ProjectService){
        this.projectService.getAllTheme().subscribe( (themes:Array<CTheme>) => this.themes = themes);
    }

    selectThemes(){
        this.selectedThemes.emit(this.themesSelected);
    }
}