
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';
 
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { AddClasseComponent } from './add-classe/add-classe.component';
import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { CommonModule } from '@angular/common';
import { SaveCourComponent } from './save-cour/save-cour.component';
import { UpdateCourComponent } from './update-cour/update-cour.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { ListCourComponent } from './list-cour/list-cour.component';
import { DownloadCourComponent } from './download-cour/download-cour.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { ListEnseignantComponent } from './list-enseignant/list-enseignant.component';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { DetailEnseignantComponent } from './detail-enseignant/detail-enseignant.component';
import { UpdateMatiereComponent } from './update-matiere/update-matiere.component';
import { DetailsMatiereComponent } from './details-matiere/details-matiere.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { DetailsDepartementComponent } from './details-departement/details-departement.component';
import { UpdateClasseComponent } from './update-classe/update-classe.component';
import { DetailsClasseComponent } from './details-classe/details-classe.component';
import { DetailsCourComponent } from './details-cour/details-cour.component';
import { AddInfoComponent } from './add-info/add-info.component';
import { DetailsInfoComponent } from './details-info/details-info.component';
import { UpdateInfoComponent } from './update-info/update-info.component';
import { ListInfoComponent } from './list-info/list-info.component';
import { DownloadinfoComponent } from './downloadinfo/downloadinfo.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';




 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarousselComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    AddDepartementComponent,
    ListDepartementComponent,
    AddClasseComponent,
    ListeClasseComponent,
    SaveCourComponent,
    UpdateCourComponent,
    ListCourComponent,
    DownloadCourComponent,
    ProfileComponent,
    AboutusComponent,
    AddMatiereComponent,
    AddEtudiantComponent,
    AddEnseignantComponent,
    ListEnseignantComponent,
    ListMatiereComponent,
    ListEtudiantComponent,
    UpdateEtudiantComponent,
    DetailEtudiantComponent,
    UpdateEnseignantComponent,
    DetailEnseignantComponent,
    UpdateMatiereComponent,
    DetailsMatiereComponent,
    UpdateDepartementComponent,
    DetailsDepartementComponent,
    UpdateClasseComponent,
    DetailsClasseComponent,
    DetailsCourComponent,
    AddInfoComponent,
    DetailsInfoComponent,
    UpdateInfoComponent,
    ListInfoComponent,
    DownloadinfoComponent,
    AddProfileComponent,
    UpdateProfileComponent,
    ListUserComponent,
    UpdateUserComponent,
    DetailUserComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule, ReactiveFormsModule,CommonModule
   
    
 

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
