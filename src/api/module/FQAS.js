import axios from '@/libs/api.request'

/**
 * 获取问题分类的Fqas列表
 * @param param
 * @returns {*|void|AxiosPromise<any>}
 */
export const getFqasList=(param)=>{
  return axios.request({
    url:'get_Fqas_list',
    params:param,
    method:'get'
  });
};
/**
 * 根据id 删除问题列表记录
 * @param param
 * @returns {*|void|AxiosPromise<any>}
 */
export const addFqasList=(param)=>{
  return axios.request({
    url:'add_Fqas_list',
    data:param,
    method:'post'
  });
};
/**
 * 根据id 删除问题列表记录
 * @param param
 * @returns {*|void|AxiosPromise<any>}
 */
export const delFqasList=(param)=>{
  return axios.request({
    url:'get_Fqas_list',
    params:param,
    method:'get'
  });
};
/**
 * 根据id 获取当前问题分类 下的所有问题
 * @param param
 * @returns {*|void|AxiosPromise<any>}
 */
export const getFqasItem=(param)=>{
  return axios.request({
    url:'get_Fqas_item',
    params:param,
    method:'get'
  });
};
/**
 * 添加问题列表item的分类
 * @param params
 * @returns {*|void|AxiosPromise<any>}
 */
export const addFqasListItem=(params)=>{
  return axios.request({
    url:'add_Fqas_item',
    method:'post',
    data:params
  });
};
/**
 * 编辑问题分类的item
 * @param params
 * @returns {*|void|AxiosPromise<any>}
 */
export const editFqasListItem=(params)=>{
  return axios.request({
    url:'edit_Fqas_item',
    data:params,
    method:'post'
  });
};
/**
 * 根据id删除问题列表item
 * @param params
 * @returns {*|void|AxiosPromise<any>}
 */
export const delFqasListItem=(params)=>{
  return axios.request({
    url:'del_Fqas_item',
    params:params,
    method:'delete'
  });
};
