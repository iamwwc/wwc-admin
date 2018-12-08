import Axios from 'axios'
import config from '~/config/api-server.config.js'


const adminPath = `${config.serverAdminPath}`

const axios = Axios.create({
    proxy: false,
    baseURL: adminPath
})

const api = {}

api.getLists = ({filter, options}) => {
    return axios.get()
}

function getPostById(id){

}

function getAllPosts(){

}