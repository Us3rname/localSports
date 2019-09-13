import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../../graphql/queries';
import * as subscriptions from '../../../../graphql/subscriptions';
import { ToastController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.page.html',
  styleUrls: ['./team-list.page.scss'],
})
export class TeamListPage implements OnInit {

  public teams = new Array();

  constructor(
    private router: Router,
    public toastController: ToastController,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.loadTeams();

    // Subscribe for new teams when they create it through the app.
    API.graphql(
      graphqlOperation(subscriptions.onCreateTeam)
    ).subscribe({
      next: (teamData) => {
        this.teams.push(teamData.value.data.onCreateTeam);
        this.presentToast();
      }
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Edit',
          role: 'destructive',
          icon: 'create',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Team is aangemaakt.',
      duration: 2000,
      color: 'dark'
    });
    toast.present();
  }

  async loadTeams() {
    const allTeams = await API.graphql(graphqlOperation(queries.listTeams));

    if (allTeams) {
      this.teams = allTeams.data.listTeams.items;
    }
  }

  goToTeamCreatePage(event) {
    return this.router.navigate(['/team/create']);
  }
}
