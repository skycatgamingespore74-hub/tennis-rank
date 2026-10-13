// adm8n/auth.js - shared auth helpers for admin pages
(function(){
  const AUTH_KEY = 'tr_admin_token';
  const CREDENTIALS = {
    'skycat74': 'Majoly.7473',
    'adm:tennisdev': '1515'
  };

  function setToken(user, ttlMinutes){
    const exp = Date.now() + (ttlMinutes||30)*60*1000;
    sessionStorage.setItem(AUTH_KEY, JSON.stringify({user:user, exp: exp}));
  }

  function clearToken(){ sessionStorage.removeItem(AUTH_KEY); }

  function getToken(){
    try{ const t = JSON.parse(sessionStorage.getItem(AUTH_KEY)); if(!t) return null; return t; }catch(e){return null}
  }

  function isAuthenticated(){
    const token = getToken();
    if(!token) return false;
    if(Date.now() > token.exp){ clearToken(); return false; }
    return true;
  }

  function requireAuth(){
    if(!isAuthenticated()){
      // redirect to main login
      window.location.href = '../Connect.html';
    }
  }

  // expose public API
  window.ADM = {
    CREDENTIALS: CREDENTIALS,
    setToken: setToken,
    clearToken: clearToken,
    isAuthenticated: isAuthenticated,
    requireAuth: requireAuth,
    authKey: AUTH_KEY
  };
})();
