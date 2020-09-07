import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    const nodes = [
      {
        url: 'https://thawing-springs-53971.herokuapp.com',
        online: false,
        name: 'Thawing Springs',
        loading: false
      },
      {
        url: 'https://secret-lowlands-62331.herokuapp.com',
        online: false,
        name: 'Secret Lowlands',
        loading: false
      },
      {
        url: 'https://calm-anchorage-82141.herokuapp.com',
        online: false,
        name: 'Calm Anchorage',
        loading: false
      },
      {
        url: 'http://localhost:3002',
        online: false,
        name: 'Node 4',
        loading: false
      }
    ]

    return nodes;
  }
}
