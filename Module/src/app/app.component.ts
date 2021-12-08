import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Module';
  history = [
    {
      id: 1,
      label: "Analytics for Judge Margaret Catharine Rodgers (Federal District Court)",
      contentType:"As updates are available",
      term:"none",
      jurisdiction:"All Jurisdictions",
      practiceAreasTopics:"All Practice Areas and Topics",
      frequency:"bs updates are available",
      createdDate:"2021-11-15 17:17:30.0",
      updatedDate:Date(),
      client:"Litigation Analytics Search"
    },
    {
      id: 2,
      label: "PERRY v. SCHWARZENEGGER, 2010 U.S. 9th Cir. Briefs LEXIS 186", 
      contentType:"bAs updates are available",
      term:"none",
      jurisdiction:"All Jurisdictions",
      practiceAreasTopics:"All Practice Areas and Topics",
      frequency:"As updates are available",
      createdDate:"2021-11-18 17:17:30.0",
      updatedDate:Date(),
      client:"Litigation Analytics Search"
    }
  ]
  add(arg1 = 1, arg2 = 2) {
    if (1) {
      var result;
      result = arg1 + arg2;
      return result;
    } else {
      return 2;
    }
  }
  sortByValues(sortby:any){
    if(sortby == "dateNew"){
      this.history = this.history.sort((a, b) => <any>new Date(b.createdDate) - <any>new Date(a.createdDate));
    }else if(sortby == "dateOld"){
      this.history = this.history.sort((a, b) => <any>new Date(a.createdDate) - <any>new Date(b.createdDate));
    }else if(sortby == "titleNew"){
      this.history = this.history.sort((a, b) => a.label.localeCompare(b.label));
      console.log(this.history);
    }else if(sortby == "titleOld"){
      this.history = this.history.sort((a, b) => b.label.localeCompare(a.label));
      console.log(this.history);
    }else if(sortby == "typeNew"){
      this.history = this.history.sort((a, b) => a.contentType.localeCompare(b.contentType));
      console.log(this.history);
    }else if(sortby == "typeOld"){
      this.history = this.history.sort((a, b) => b.contentType.localeCompare(a.contentType));
      console.log(this.history);
    }else if(sortby == "clientNew"){
      this.history = this.history.sort((a, b) => a.client.localeCompare(b.client));
    }else if(sortby == "clientOld"){
      this.history = this.history.sort((a, b) => b.client.localeCompare(a.client));
    }
  }
}
