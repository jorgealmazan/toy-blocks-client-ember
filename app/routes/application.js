import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class ApplicationRoute extends Route {
  async model() {
    const nodes = [
      {
        url: 'https://thawing-springs-53971.herokuapp.com',
        online: false,
        name: 'Node 1',
        loading: false
      },
      {
        url: 'https://secret-lowlands-62331.herokuapp.com',
        online: false,
        name: 'Node 2',
        loading: false
      },
      {
        url: 'https://calm-anchorage-82141.herokuapp.com',
        online: false,
        name: 'Node 3',
        loading: false
      },
      {
        url: 'http://localhost:3002',
        online: false,
        name: 'Node 4',
        loading: false
      }
    ]

      for (var i = 0; i < nodes.length; i++) {
        try {
          let response = await fetch(nodes[i].url + '/api/v1/status');
          if(response){
            if (response.status >= 400) {
              nodes[i].online = false;
            } else {
              let data = await response.json();
              nodes[i].name = data.node_name;
              nodes[i].online = true;
              let blocks_response = await fetch(nodes[i].url + '/api/v1/blocks')
              let block_array = [];
              if (blocks_response){
                let blocks_data = await blocks_response.json();
                let test = blocks_data.data;
                test.forEach(x => {
                  let block = {};
                  block.index = (x.attributes.index / 100).toString().replace('.','');
                  block.data = x.attributes.data;
                  block_array.push(block);
                })
              }
              nodes[i].blocks = block_array;
            }
          }
        }catch(e){
          console.log(e)
      }
    }

    return nodes;

  }
}
