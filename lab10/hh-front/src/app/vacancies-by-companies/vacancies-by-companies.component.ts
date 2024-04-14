import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {CommonModule, NgForOf, NgIf} from "@angular/common";

import {HHService} from "../hh.service";
import {Company, Vacancy} from '../models';


@Component({
  selector: 'app-vacancies-by-companies',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    CommonModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './vacancies-by-companies.component.html',
  styleUrl: './vacancies-by-companies.component.css'
})
export class VacanciesByCompaniesComponent implements OnInit{
  vacancies!:Vacancy[];
  company!:Company
  loaded:boolean=false
  newVacancy:Vacancy;
  constructor(private hhService:HHService,private route: ActivatedRoute) {

    this.newVacancy = {
      "id":0,
      "name":"",
      "description":"",
      "salary":0,
      "Company":{
        "id":0,
        "name":"",
        "description":"",
        "city":"",
        "address":""
      }
    }
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const companyId = params['companyId'];
      this.hhService.getCompany(companyId).subscribe(com=>this.company=com)
      this.newVacancy.Company=this.company
      this.getVacanciesByCompany(companyId)
    });

  }
  getVacanciesByCompany(id:number){
    this.loaded=false;
    this.hhService.getVacanciesByCompany(id).subscribe(vac=>this.vacancies=vac);
    this.loaded=true;
  }
  DeleteVacancy(id :number){
    this.hhService.deleteVacancy(id).subscribe(()=>{  this.vacancies = this.vacancies.filter(vac => vac.id !== id);
    })
  }
  CreateVacancy() {
    var copy: Vacancy = {
      id: 1,
      name: this.newVacancy.name,
      description: this.newVacancy.description,
      salary: this.newVacancy.salary,
      Company: this.newVacancy.Company
    };

    this.hhService.postVacancy(copy).subscribe((vaca) => {
      this.vacancies.unshift(vaca);
      this.newVacancy.name = '';
      this.newVacancy.description = '';
      this.newVacancy.salary = 0;
    });
  }

}
