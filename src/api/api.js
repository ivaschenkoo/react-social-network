import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "54fe6c1f-55cf-468b-ac25-d930b231a9f0"
    }
})

export const userAPI = {
    getUsers(currentPage, usersCount = 10) {
        return instance.get(`users?count=${usersCount}&page=${currentPage}`).then(response => response.data)
    },
    getFollowStatus(userId) {
        return instance.get(`follow/${userId}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    getUserInfo(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getUserStatus (userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    changeUserStatus (status) {
        return instance.put(`profile/status`, {status})
    }
}

export const headerAPI = {
    getLoginStatus () {
        return instance.get('auth/me').then(response => response.data)
    }
}