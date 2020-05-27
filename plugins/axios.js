export default function({ $axios, store }) {
  $axios.onRequest(config => {
    console.log("axios request");
    if (store.state.accessToken) {
      config.header.common["Authorization"] =
        "Bearer " + store.state.accessToken;
    }
    //config.header.common['Access-Control-Allow-Origin'] = '*'
    //config.header.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
  });

  $axios.onResponse(res => {
    console.log("axios response");
    //res.header('Access-Control-Allow-Origin', '*');
    //res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  });
}
