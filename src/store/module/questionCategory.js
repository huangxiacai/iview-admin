//问题分类状态机模块
import {getQuestionCategory,
  addQuestionCategory,
  editQuestionCategory,
  delQuestionCategory} from '@/api/module/questionCategory'
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
     * @returns {Promise<any>}
     */
    handleGetQuestionCategory({commit},params){
      return new Promise((resolve,reject)=>{
        getQuestionCategory(params).then(res=>{
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
    handleAddQuestionCategory({commit},params){
      return new Promise((resolve,reject)=>{
        addQuestionCategory(params).then(res=>{
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
    handleEditQuestionCategory({commit},params){
      return new Promise((resolve,reject)=>{
        editQuestionCategory(params).then(res=>{
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
    handleDelQuestionCategory({commit},params){
      return new Promise((resolve,reject)=>{
        delQuestionCategory(params).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err)
        })
      });
    },
  }
}
