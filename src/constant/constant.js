
const devUrl = "http://localhost:4000/"
const prodURL ="https://backend-h-asckathone.vercel.app/"

export const BASE_URL = prodURL


export const appRoutes = {
login : BASE_URL + "/api/auth/login",
register : BASE_URL + "api/auth/signup",
myinfo : BASE_URL + "auth/myinfo",
forgetpassword : BASE_URL + "auth/forgetpassword"
}