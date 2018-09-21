import {getDeviceType,
  addDeviceType,
  editDeviceType,
  delDeviceType} from '@/api/module/deviceType'
export default{
  state:{

  },
  mutations:{

  },
  actions:{
    /**
     * 处理获取device type
     * @param commit
     * @param params
     * @param callback
     * @returns {Promise<any>}
     */
    handleGetDeviceType({commit},params){

      return new Promise((resolve,reject)=>{
        getDeviceType(params).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err)
        })
      });
    },
    /**
     * 处理add device type
     * @param commit
     * @param params
     * @param callback
     * @returns {Promise<any>}
     */
    handleAddDeviceType({commit},params){
      return new Promise((resolve,reject)=>{
        addDeviceType(params).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err)
        })
      });
    },
    /**
     * 处理edit device type
     * @param commit
     * @param params
     * @param callback
     * @returns {Promise<any>}
     */
    handleEditDeviceType({commit},params){
      return new Promise((resolve,reject)=>{
        editDeviceType(params).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err)
        })
      });
    },
    /**
     * 处理del device type
     * @param commit
     * @param params
     * @param callback
     * @returns {Promise<any>}
     */
    handleDelDeviceType({commit},params){
      return new Promise((resolve,reject)=>{
        delDeviceType(params).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err)
        })
      });
    },
  }
}
