import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import fetch from 'fetch';


export default class NodeComponent extends Component {
    @tracked name = '';
    @tracked url = '';
    @tracked online = false;
    @tracked expanded = false;

    @action
    isNodeOnline(url) {
        fetch(url + '/api/v1/status').then(response => {
            if(response){
              if (response.status >= 400) {
                this.online = false;
              } else {
                const data = response.json();   
                this.name = data.node_name;
                this.online = true;
              }
            }
        }).catch(() => {
            this.online = false
        })
    }

    @action
    toggleExpansionState() {
        this.toggleProperty('expanded')
    }
}
