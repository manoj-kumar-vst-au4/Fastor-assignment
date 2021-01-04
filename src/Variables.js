export const GRAPHQL_ENDPOINT = 'https://api.spacex.land/graphql/';
export const QUERY = `{
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      ships {
        name
        home_port
        image
      }
    }
  }`;