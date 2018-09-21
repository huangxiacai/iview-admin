<template>
  <Row>
    <packageTable
      ref="contentBaseRef"
      :columnsData="columnsheader"
      :tableData="tableDataList"
      :reduceheight="reduceheight"
      :loading="tableLoading"
      :border="true"
      :tabletotallen="getPageTotal"
      :headBtnList="headBtnList"
      @pageonChange="pageonChange"
      @showSearchParel="showSearchParel"
      @getSelect="getSelectList">

    </packageTable>
  </Row>
</template>

<script>
  import packageTableMixins from '@/libs/mixins/packageTableMixins'
  import {mapActions} from 'vuex'
  import updateQuestionCategory from './components/updateQuestionCategory'

  export default {
    name: "index",
    mixins: [packageTableMixins],
    data() {
      return {
        columnsheader: [
          {
            fixed: 'left',
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: this.$t('table_column_serialNumber'),
            key: 'serialNumber',
            align: 'center'
          },
          {
            title: this.$t('table_column_questionCategory'),
            key: 'questionCategory',
            align: 'center'
          },
          {
            title: this.$t('table_column_answersNumber'),
            key: 'answersNumber',
            align: 'center'
          },
          {
            title: this.$t('table_column_operating'),
            key: 'operating',
            fixed: 'right',
            align: 'center',
            width: 200,
            render: (h, params) => {
              let vm = this;
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small',
                    icon: 'ios-create-outline'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.edit(params.row)
                    }
                  }
                }, vm.$t('btn_edit_text')),
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small',
                    icon: 'ios-trash-outline'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.delSingle(params.row.id)
                    }
                  }
                }, vm.$t('btn_del_text')),
              ])
            },
          }
        ],
        headBtnList: [
          {
            isshow: true,
            method: this.del,
            btnType: 'primary',
            icon: 'ios-trash-outline',
            text: this.$t("btn_del_text"),
            ref: 'delRef',
            loading: false
          },
          {
            isshow: true,
            method: this.add,
            btnType: 'primary',
            icon: 'ios-add',
            text: this.$t("btn_add_text")
          },


        ]
      }
    },
    components: {},
    computeed: {},
    methods: {
      ...mapActions([
        'handleGetQuestionCategory',
        'handleAddQuestionCategory',
        'handleEditQuestionCategory',
        'handleDelQuestionCategory'
      ]),

      init() {
        //重置一些参数
        this.resetData();
        //表单loading 加载 中
        this.tableLoading = true;
        this.handleGetQuestionCategory(this.reqBase).then(res => {
          this.initCallback(res);
        })
      },
      initCallback(res) {
        this.tableLoading = false;
        if (res.code === 200) {
          this.tableDataList = res.data;
          this.getPageTotal = res.resCount
        } else {
          this.tableDataList = [];
          this.getPageTotal = 0;
        }
      },
      /**
       *删除所选项(多个)
       */
      del() {
        if (!this.isSelect()) {
          this.$Message.error(this.$t("message_isDelete"));
        } else {
          //loading 加载中
          this.headBtnList[0].loading = true;
          let delArr = [];
          for (let i in this.selectTabelList) {
            delArr.push(this.selectTabelList[i].id);
          }
          this.delOperating(delArr);
        }
      },
      /**
       *删除单个所选项
       */
      delSingle(id) {
        this.delOperating([id]);
      },
      /**
       *删除请求封装
       */
      delOperating(params) {
        this.handleDelQuestionCategory(params).then(res => {
          if (res.code === 200) {
            console.log(res.data);
            this.$Message.success(this.$t('operation_success'));
            //刷新 当前列表
            this.init();
          } else {
            this.$Message.error(this.$t('operation_fail'));
          }
          this.headBtnList[0].loading = false
        });
      },
      /**
       *编辑单个
       */
      edit(row) {
        let vm = this;
        this.$Modal.confirm({
          title: this.$t('title_edit_questionCategory'),
          okText: this.$t('btn_edit_text'),
          cancelText: this.$t('btn_cancel_text'),
          loading: true,
          render: (h) => {
            return h(updateQuestionCategory, {
              ref: 'updateDeviceType',
              props: {
                initData: {...row},
                _vm: vm
              }

            })
          },
          onOk() {
            const formObj = this.$refs.updateDeviceType;
            let getparams = formObj.params;
            const getcheckForm = formObj.checkForm();
            getcheckForm.validate(valid => {
              if (valid) {
                //验证后提交数据
                vm.handleEditQuestionCategory(getparams).then(res => {
                  if (res.code === 200) {
                    vm.$Message.success(vm.$t('operation_success'));
                    vm.init();
                    vm.$Modal.remove();
                  } else {
                    vm.$Message.success(vm.$t('operation_fail'));
                  }
                })
              } else {
                this.buttonLoading = false
              }
            });
          },
          onCancel() {
            console.log('cancel');
          }
        });
      },
      /**
       *添加一条记录
       */
      add() {
        let vm = this;
        this.$Modal.confirm({
          title: this.$t('title_add_questionCategory'),
          okText: this.$t("btn_add_text"),
          cancelText: this.$t('btn_cancel_text'),
          loading: true,
          render: (h) => {
            return h(updateQuestionCategory, {
              ref: 'updateDeviceType',
              props: {
                initData: {},
                _vm: vm
              }
            })
          },
          onOk() {
            const formObj = this.$refs.updateDeviceType;
            let getparams = formObj.params;
            const getcheckForm = formObj.checkForm();
            getcheckForm.validate(valid => {
              if (valid) {
                //验证后提交数据
                vm.handleAddQuestionCategory(getparams).then(res => {
                  if (res.code === 200) {
                    vm.$Message.success(vm.$t('operation_success'));
                    vm.init();
                    vm.$Modal.remove();
                  } else {
                    vm.$Message.success(vm.$t('operation_fail'));
                  }
                })
              } else {
                this.buttonLoading = false
              }
            });
          },
          onCancel() {
            console.log('cancel');
          }
        });
      },
      /**
       * 是否选中
       * @returns {boolean}
       */
      isSelect() {
        if (this.selectTabelList && this.selectTabelList.length > 0) {
          return true;
        }
        return false
      },
      resetData() {
        this.selectTabelList = null;
      }


    },
    watch:{
      $route: {
        handler(newName, oldName){
          this.init();
        },
        deep:true
      }
    },
    mounted() {
      this.init();
    }
  }
</script>

<style scoped>
  .ggsmd {
    color: red;
  }
</style>
