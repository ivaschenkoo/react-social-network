import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        ""
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
    }
}