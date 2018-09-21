import axios from '@/libs/api.request'

export const getQuestionCategory=(param)=>{
  return axios.request({
    url:'get_question_category',
    params:param,
    method:'get'
  });
};
export const addQuestionCategory=(params)=>{
  return axios.request({
    url:'add_question_category',
    method:'post',
    data:params
  });
};
export const editQuestionCategory=(params)=>{
  return axios.request({
    url:'edit_question_category',
    data:params,
    method:'post'
  });
};
export const delQuestionCategory=(params)=>{
  return axios.request({
    url:'del_question_category',
    params:params,
    method:'delete'
  });
};
