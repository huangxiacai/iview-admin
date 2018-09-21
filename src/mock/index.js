import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
import { getTableData } from './data'
import {getDeviceType,addDeviceType,editDeviceType,delDeviceType} from './module/deviceType'
import {getQuestionCategory,addQuestionCategory,editQuestionCategory,delQuestionCategory} from './module/questionCategory'
import {getFqasList,addFqasList,delFqasList,getFqasItem,addFqasListItem,editFqasListItem,delFqasListItem} from './module/FQAS'

// 登录相关和获取用户信息
Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/logout/, logout)
Mock.mock(/\/get_table_data/, getTableData)
//设备类型相关
Mock.mock(/\/get_device_type/,getDeviceType);
Mock.mock(/\/add_device_type/,addDeviceType);
Mock.mock(/\/edit_device_type/,editDeviceType);
Mock.mock(/\/del_device_type/,delDeviceType);
//问题分类相关
Mock.mock(/\/get_question_category/,getQuestionCategory);
Mock.mock(/\/add_question_category/,addQuestionCategory);
Mock.mock(/\/edit_question_category/,editQuestionCategory);
Mock.mock(/\/del_question_category/,delQuestionCategory);

//Fqas相关
Mock.mock(/\/get_Fqas_list/,getFqasList);
Mock.mock(/\/add_Fqas_list/,addFqasList);
Mock.mock(/\/del_Fqas_list/,delFqasList);
Mock.mock(/\/get_Fqas_item/,getFqasItem);
Mock.mock(/\/add_Fqas_item/,addFqasListItem);
Mock.mock(/\/edit_Fqas_item/,editFqasListItem);
Mock.mock(/\/del_Fqas_item/,delFqasListItem);

export default Mock
