import {getParams} from "../../libs/util";
const DEVICE_TYPE_MAP=[
  {
    id:1,
    name:'Power Supply'
  },
  {
    id:2,
    name:'Installation'
  },
  {
    id:3,
    name:'Internet Requirements'
  },
];
const QUESTION_CONTENT=[
  {
    id:1,
    order:1,
    question:'Does the Floodlight Cam have dusk-to-dawn feature？',
    answers:'Yes.Through the free reflection app.Yes.Through the free reflection app.Yes.Through the free reflection app.',
  },
  {id:2,
    order:2,
    question:'Does the Floodlight Cam have dusk-to-dawn feature？',
    answers:'Yes.Through the free reflection app.Yes.Through the free reflection app.Yes.Through the free reflection app.',
  },
  {
    id:3,
    order:3,
    question:'Does the Floodlight Cam have dusk-to-dawn feature？',
    answers:'Yes.Through the free reflection app.Yes.Through the free reflection app.Yes.Through the free reflection app.',

  },
];
export const getFqasItem=req=>{
  debugger
  req=getParams(req.url);
  return {
    code:200,
    data:QUESTION_CONTENT,
    msg:'操作成功',
    resCount:QUESTION_CONTENT.length
  }
};
export const getFqasList=req=>{
  debugger
  req=getParams(req.url);
  return {
    code:200,
    data:DEVICE_TYPE_MAP,
    msg:'操作成功',
    resCount:DEVICE_TYPE_MAP.length
  }
};
export const addFqasList=req=>{
  req=getParams(req.url);
  return{
    code:200,
    data:DEVICE_TYPE_MAP,
    msg:'删除成功'
  }
};
export const delFqasList=req=>{
  req=JSON.parse(req.body);
  return{
    code:200,
    data:DEVICE_TYPE_MAP,
    msg:'删除成功'
  }
};

export const addFqasListItem=req=>{
  req=JSON.parse(req.body);
  return{
    code:200,
    data:DEVICE_TYPE_MAP,
    msg:'操作成功'
  }
};
export const editFqasListItem=req=>{
  req=JSON.parse(req.body);
  return{
    code:200,
    data:DEVICE_TYPE_MAP,
    msg:'操作成功'
  }
};
export const delFqasListItem=req=>{
  req=getParams(req.url);
  return{
    code:200,
    data:DEVICE_TYPE_MAP,
    msg:'删除成功'
  }
};
