import { deleteApi, getApi, patchApi, postApi } from "../customAxios"

export const getAccount = async({params,body})=>{
    const {data,error} = await getApi({params})
    return {data,error}
}

export const createAccount = async({params,body}) =>{
    const {data,error}  = await postApi({url:'/admin/signup',params,data:body})
    return{data,error}
}
export const loginAccount = async({params,body}) =>{
    const {data,error}  = await postApi({url:'/admin/login',params,data:body})
    return{data: data?.data,error}
}
export const logouAccount = async({params,body})=>{
    const {data,error} = await patchApi({params,data:body})
    return {data,error} 
}
