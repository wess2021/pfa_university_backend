import { UpdateUserComponent } from './update-user/update-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { ListInfoComponent } from './list-info/list-info.component';
import { AddInfoComponent } from './add-info/add-info.component';
import { DownloadinfoComponent } from './downloadinfo/downloadinfo.component';
import { UpdateInfoComponent } from './update-info/update-info.component';
import { DetailsInfoComponent } from './details-info/details-info.component';
import { DetailsCourComponent } from './details-cour/details-cour.component';
import { DetailsClasseComponent } from './details-classe/details-classe.component';
import { DetailsMatiereComponent } from './details-matiere/details-matiere.component';
import { UpdateMatiereComponent } from './update-matiere/update-matiere.component';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';
import { DownloadCourComponent } from './download-cour/download-cour.component';
import { UpdateCourComponent } from './update-cour/update-cour.component';
import { SaveCourComponent } from './save-cour/save-cour.component';
import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { AddClasseComponent } from './add-classe/add-classe.component';

import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { ListEnseignantComponent } from './list-enseignant/list-enseignant.component';
import { ListCourComponent } from './list-cour/list-cour.component';
import { DetailEnseignantComponent } from './detail-enseignant/detail-enseignant.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { DetailsDepartementComponent } from './details-departement/details-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { UpdateClasseComponent } from './update-classe/update-classe.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
 
const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',redirectTo:"/home",pathMatch:"full"
          
 },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'add-departement',
        component: AddDepartementComponent
    },
    {
        path: 'list-departement',
        component: ListDepartementComponent
    },
    {
        path: 'add-etudiant',
        component: AddEtudiantComponent
    },
    {
        path: 'list-etudiants',
        component: ListEtudiantComponent
    },
    {
        path: 'list-classe',
        component: ListeClasseComponent
    },
    {
        path: 'add-classe',
        component: AddClasseComponent
    },
    {
        path: 'add-cour',
        component: SaveCourComponent
    },
    {
        path: 'list-cour',
        component: ListCourComponent
    },
    {
        path: 'add-matiere',
        component: AddMatiereComponent
    },
    {
        path: 'list-matieres',
        component: ListMatiereComponent
    },
    {
        path: 'list-users',
        component: ListUserComponent
    },
    {
        path: 'list-infos',
        component: ListInfoComponent
    },
    {
        path: 'add-enseignant',
        component: AddEnseignantComponent
    },
    {
        path: 'add-profile',
        component: AddProfileComponent
    },
    {
        path: 'add-info',
        component: AddInfoComponent
    },
    {
        path: 'list-enseignant',
        component: ListEnseignantComponent
    },
    
    {
        path: 'etudiantDetail/:id',
        component: DetailEtudiantComponent
    },
    {
        path: 'userDetail/:id',
        component: DetailUserComponent
    },
    {
        path: 'classeDetail/:id',
        component: DetailsClasseComponent
    },
    {
        path: 'infoDetail/:id',
        component: DetailsInfoComponent
    },
    {
        path: 'courDetail/:id',
        component: DetailsCourComponent
    },
    {
        path: 'matiereDetail/:id',
        component: DetailsMatiereComponent
    },
    {
        path: 'departementDetail/:id',
        component: DetailsDepartementComponent
    },
    {
        path: 'enseignantDetail/:id',
        component: DetailEnseignantComponent
    },
    {
        path: 'update-cour/:id',
        component: UpdateCourComponent
    },
    {
        path: 'update-user/:id',
        component: UpdateUserComponent
    },
    {
        path: 'update-info/:id',
        component: UpdateInfoComponent
    },
    {
        path: 'update-matiere/:id',
        component: UpdateMatiereComponent
    },
    {
        path: 'update-classe/:id',
        component: UpdateClasseComponent
    },
    {
        path: 'update-departement/:id',
        component: UpdateDepartementComponent
    },
    {
        path: 'update-etudiant/:id',
        component: UpdateEtudiantComponent
    },
    {
        path: 'update-enseignant/:id',
        component: UpdateEnseignantComponent
    },
    {
        path: 'update-profile/:id',
        component: UpdateProfileComponent
    },
    {
        path: 'download-cour/:file',
        component: DownloadCourComponent
    },
    {
        path: 'download-info/:file',
        component: DownloadinfoComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'aboutus',
        component: AboutusComponent
    },
    {
        path: '',redirectTo:"/home",pathMatch:"full"
          
 },
   
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
 
@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }