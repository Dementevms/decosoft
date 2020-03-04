const cookieparser = process.server ? require("cookieparser") : undefined;

export const state = () => {
  return {
    auth: null,
  };
};
export const mutations = {
  setAuth(state, auth) {
    state.auth = auth;
  },
};
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null;
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      if(parsed.auth) {
        commit("setAuth", parsed.auth);
      }
      // console.log('parsed', parsed);
      // try {
      //   // auth = JSON.parse(parsed.auth);
      //   console.log("auth", parsed.auth);
      // } catch (err) {
      //   console.log("err", err);
      //   // No valid cookie found
      // }
    }

  },
};
