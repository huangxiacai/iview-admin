import {getParams} from "../../libs/util";
//模拟设备
const DEVICE_TYPE_MAP=[
  {
    id:'1',
    deviceType:'Vela Floodlight',
    questTypeNum:1
  },
  {
    id:'2',
    deviceType:'device1',
    questTypeNum:3
  },
  {
    id:'3',
    deviceType:'device1',
    questTypeNum:2
  },
  {
    id:'1',
    deviceType:'Vela Floodlight',
    questTypeNum:1
  },
  {
    id:'2',
    deviceType:'device1',
    questTypeNum:3
  },
  {
    id:'3',
    deviceType:'device1',
    questTypeNum:2
  },
  {
    id:'1',
    deviceType:'Vela Floodlight',
    questTypeNum:1
  },
  {
    id:'2',
    deviceType:'device1',
    questTypeNum:3
  },
  {
    id:'3',
    deviceType:'device1',
    questTypeNum:2
  },
  {
    id:'1',
    deviceType:'Vela Floodlight',
    questTypeNum:1
  },
  {
    id:'2',
    deviceType:'device1',
    questTypeNum:3
  },
  {
    id:'3',
    deviceType:'device1',
    questTypeNum:2
  },
  {
    id:'1',
    deviceType:'Vela Floodlight',
    questTypeNum:1
  },
  {
    id:'2',
    deviceType:'device1',
    questTypeNum:3
  },
  {
    id:'3',
    deviceType:'device1',
    questTypeNum:2
  },
  {
    id:'1',
    deviceType:'Vela Floodlight',
    questTypeNum:1
  },
  {
    id:'2',
    deviceType:'device1',
    questTypeNum:3
  },
  {
    id:'3',
    deviceType:'device1',
    questTypeNum:2
  }
];
//获取类型
export const getDeviceType=req=>{
  req=getParams(req.url);
  return {
    code:200,
    data:DEVICE_TYPE_MAP,
    msg:'操作成功',
    resCount:DEVICE_TYPE_MAP.length
  }
};
export const addDeviceType=req=>{
  req=JSON.parse(req.body);
  return{
    code:200,
    data:DEVICE_TYPE_MAP,
    msg:'操作成功'
  }
};
export const editDeviceType=req=>{
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
export const delDeviceType=req=>{
  req=getParams(req.url);
  return{
    code:200,
    data:DEVICE_TYPE_MAP,
    msg:'删除成功'
  }
};
