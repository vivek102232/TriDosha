const USERS_KEY = "tridosha_users"
const SESSION_KEY = "tridosha_session"
const HISTORY_PREFIX = "tridosha_history_"

export const getUsers = () => {
  const raw = localStorage.getItem(USERS_KEY)
  return raw ? JSON.parse(raw) : []
}

export const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export const getSession = () => {
  const raw = localStorage.getItem(SESSION_KEY)
  return raw ? JSON.parse(raw) : null
}

export const setSession = (session) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
}

export const clearSession = () => {
  localStorage.removeItem(SESSION_KEY)
}

export const getHistory = (userId) => {
  const raw = localStorage.getItem(`${HISTORY_PREFIX}${userId}`)
  return raw ? JSON.parse(raw) : []
}

export const saveHistory = (userId, entries) => {
  localStorage.setItem(`${HISTORY_PREFIX}${userId}`, JSON.stringify(entries))
}
