//fqas状态机模块
import {
  getFqasList,
  addFqasList,
  delFqasList,
  getFqasItem,
  addFqasListItem,
  editFqasListItem,
  delFqasListItem} from '@/api/module/FQAS'
export default{
  state:{

  },
  mutations:{

  },
  actions:{
    /**
     * 获取Fqas下的问题分类
     * @param commit
     * @param params
     * @returns {Promise<any>}
     */
    handleGetFqasList({commit},params){
      return new Promise((resolve,reject)=>{
        getFqasList(params).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err)
        })
      });
    },
    /**
     * 获取Fqas下的问题分类
     * @param commit
     * @param params
     * @returns {Promise<any>}
     */
    handleAddFQASList({commit},params){
      return new Promise((resolve,reject)=>{
           (params).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err)
        })
      });
    },
    /**
     * 根据id FQAS问题列表记录
     * @param commit
     * @param params
     * @returns {Promise<any>}
     */
    handleDelFQASList({commit},params){
      return new Promise((resolve,reject)=>{
        delFqasList(params).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err)
        })
      });
    },
    /**
     * 根据id 获取当前问题分类 下的所有问题
     * @param commit
     * @param params
     * @param callback
     * @returns {Promise<any>}
     */
    handleGetFQASListItem({commit},params){
      return new Promise((resolve,reject)=>{
        debugger
        getFqasItem(params).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err)
        })
      });
    },
    /**
     * 添加问题列表item的分类
     * @param commit
     * @param params
     * @param callback
     * @returns {Promise<any>}
     */
    handleAddFQASListItem({commit},params){
      return new Promise((resolve,reject)=>{
        addFqasListItem(params).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err)
        })
      });
    },
    /**
     * 编辑问题分类的item
     * @param commit
     * @param params
     * @returns {Promise<any>}
     */
    heandleEditFQASListItem({commit},params){
      return new Promise((resolve,reject)=>{
        editFqasListItem(params).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err)
        })
      });
    },
    /**
     * 根据id删除问题列表item
     * @param commit
     * @param params
     * @param callback
     * @returns {Promise<any>}
     */
    handleDelFQASListItem({commit},params){
      return new Promise((resolve,reject)=>{
        delFqasListItem(params).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err)
        })
      });
    },
  }
}
