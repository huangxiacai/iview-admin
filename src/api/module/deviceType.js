import axios from '@/libs/api.request'

export const getDeviceType=(param)=>{
  return axios.request({
    url:'get_device_type',
    params:param,
    method:'get'
  });
};
export const addDeviceType=(params)=>{
  return axios.request({
    url:'add_device_type',
    method:'post',
    data:params
  });
};
export const editDeviceType=(params)=>{
  return axios.request({
    url:'edit_device_type',
    data:params,
    method:'post'
  });
};
export const delDeviceType=(params)=>{
  return axios.request({
    url:'del_device_type',
    params:params,
    method:'delete'
  });
};
