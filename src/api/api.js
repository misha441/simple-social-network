import * as axios from "axios";

let instanse = axios.create({
    withCredentials: true,
    headers: {'API-KEY':'8e4e8245-e26f-4f04-aad8-74bedbfe3233'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {
    getUsers(currentPage, pageSize){
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId){
        return instanse.delete(`follow/${userId}`)
    },
    follow(userId){
        return instanse.post(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please use profileAPI method!!!Warn from api.js')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instanse.get(`profile/` +userId)
    },
    getStatus(userId){
        return instanse.get(`profile/status/`+ userId)
    },
    updateStatus(status){
        return instanse.put('profile/status', {status})
    }
}

export const authAPI = {
    me(){
        return instanse.get('auth/me')
    },
    login(email, password, rememberMe){
        return instanse.post(`auth/login`,{email, password, rememberMe});
    },
    logout(){
        return instanse.delete(`auth/login`);
    }
}