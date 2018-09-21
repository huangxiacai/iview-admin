import {getParams} from "../../libs/util";
//模拟设备
const DEVICE_TYPE_MAP=[
  {
    id:'1',
    serialNumber:1,
    questionCategory:'Power Supply',
    answersNumber:2
  },
  {
    id:'2',
    serialNumber:2,
    questionCategory:'Installation',
    answersNumber:2
  },
  {
    id:'2',
    serialNumber:3,
    questionCategory:'Internet Requirements',
    answersNumber:4
  },

];
//获取类型
export const getQuestionCategory=req=>{
  req=getParams(req.url);
  return {
    code:200,
    data:DEVICE_TYPE_MAP,
    msg:'操作成功',
    resCount:DEVICE_TYPE_MAP.length
  }
};
export const addQuestionCategory=req=>{
  req=JSON.parse(req.body);
  return{
    code:200,
    data:DEVICE_TYPE_MAP,
    msg:'操作成功'
  }
};
export const editQuestionCategory=req=>{
  req=JSON.parse(req.body);
  return{
    code:200,
    data:true,
    msg:'操作成功'
  }
};
/**
 * 删除操作
 * @param req
 * @returns {{code: number, data: boolean, msg: string}}
 */
export const delQuestionCategory=req=>{
  req=getParams(req.url);
  return{
    code:200,
    data:DEVICE_TYPE_MAP,
    msg:'删除成功'
  }
};
