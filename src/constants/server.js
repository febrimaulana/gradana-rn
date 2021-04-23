const mainAkses = {
  dev: {
    dummy: 'https://dummyapi.io/data/api/',
    appID: '608179e0bd1dc5a9f3551017',
    daerah: 'https://dev.farizdotid.com/api/daerahindonesia/',
  },
  prod: {
    dummy: 'https://dummyapi.io/data/api/',
    appID: '608179e0bd1dc5a9f3551017',
    daerah: 'https://dev.farizdotid.com/api/daerahindonesia/',
  },
};

export const server = {
  BASE_URL: mainAkses.dev.dummy,
  appID: mainAkses.dev.appID,
  daerah: mainAkses.dev.daerah,
};
