<template>
  <Card class="questionListWrapper">
    <h2>{{title}}</h2>
    <div>
      <div v-for="(item,index) in questionDataList" :key="index" class="questionListInner">
        <div class="questionInnerName" @click="clickQuestListItem(item.id)">{{item.name}}</div>
        <div>
          <Button @click="delQuestionItem(item.id)">删除</Button>
        </div>
      </div>
      <Button
        icon="ios-download-outline"
        @click="addQuestionBtn"
        class="addQuestionBtn"
        type="dashed">添加问题
      </Button>
    </div>
  </Card>
</template>

<script>
  import queestionCategoryForm from './questionCategoryForm'
  import {mapActions} from 'vuex'
  export default {
    name: "questionList",
    props: {
      title: {
        type: String,
        default: 'default title'
      },
      questionDataList: {
        type: Array,
        default: function () {
          return {};
        }
      }
    },
    comments:{
    },
    methods: {
      ...mapActions([
        'handleAddFQASList',
        'handleGetFQASList',
        'handleDelFQASList'
      ]),
      /**
       * 删除item
       * @param id
       */
      delQuestionItem(id) {
        this.$emit("delQuestionDataItem",id);
      },
      /**
       * 点击item时触发
       * @param id
       */
      clickQuestListItem(id) {
        this.$router.push({
          path: 'gg',
          query: {
            id: id
          }
        })
      },
      /**
       * 添加问题分类
       */
      addQuestionBtn() {
        let vm=this;
        this.$Modal.confirm({
          title:'添加问题分类',
          okText:'添加',
          cancalText:'取消',
          loading: true,
          render:(h)=>{
            return h(queestionCategoryForm,{
              ref:'queestionCategoryFormRef',
              props:{
                _vm:vm,
              }
            });
          },
          onOk(){
            const formObj=this.$refs.queestionCategoryFormRef;
            const getChectForm =formObj.checkForm();
            let getparams = formObj.params;
            getChectForm.validate(valid=>{
              if(valid){
                //验证后提交数据
                vm.handleAddFQASList(getparams).then(res => {
                  debugger
                  if (res.code === 200) {
                    vm.$Message.success(vm.$t('operation_success'));
                    vm.init();
                    vm.$Modal.remove();
                  } else {
                    vm.$Message.success(vm.$t('operation_fail'));
                  }
                })
              }else{
                this.buttonLoading = false
              }
            });
          }
        });
        console.log('添加问题分类');
        this.questionDataList.push({
          id: this.questionDataList.length+1,
          name: '333333'
        });
      },
    }
  }
</script>

<style scoped>
  .questionListWrapper {
    width: 100%;
    height: auto;
    overflow-y: auto;
  }
  .questionListWrapper h2{
    display: inline-block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #17233d;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .questionInnerName{
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor:pointer;
    flex:1;
  }
  .questionInnerName:link    {

  }
  .questionInnerName:visited {

  }
  .questionInnerName:hover   {
    background:#dcdcdc;
  }
  .questionInnerName:active  {
    background:#2d8cf0;
  }
  .questionListInner{
    display:flex;
    justify-content: space-between;
    margin-bottom:8px;
  }
</style>
