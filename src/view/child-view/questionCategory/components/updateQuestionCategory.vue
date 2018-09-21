<script>

  export default {
    name: "updateDeviceType",
    props: {
      formRef: {
        type: String,
        default: 'DeviceTypeRef'
      },
      initData:{
        type:Object,
        default:function(){
          return {};
        }
      },
      _vm:{}
    },
    data() {
      return {
        params: {
          deviceType: null,
          serialNumber:null,
          questionCategory:null
        },
        rules: {
          deviceType: [
            {required: true, message: this._vm.$t('message_rules_deviceType'), trigger: 'blur'}
          ],
          serialNumber: [
            {required: true,type:'number', message: this._vm.$t('placeholder_input_serialNumber'), trigger: 'change'}
          ],
          questionCategory: [
            {required: true, message: this._vm.$t('placeholder_input_questionCategory'), trigger: 'blur'}
          ]
        },
      }
    },
    render(h) {
      let vm=this;
      return h("Form", {
        ref: this.formRef,
        props: {
          labelPosition: 'top',
          rules: this.rules,
          inline: true,
          class: 'show_area',
          model: this.params
        }
      }, [
        h('FormItem', {
          props: {
            label: vm._vm.$t('table_column_deviceType'),
            class: 'qdd_layout100',
          },
          style: {
            width: "100%",
            marginTop: '12px',
            marginBottom:'15px'
          }
        }, [
          h('Input', {
            props: {
              value: this.params.deviceType,
              placeholder: vm._vm.$t('placeholder_input_deviceType'),
              readonly:true,
            },
            style:{
              width:'100%'
            },
            on:{
              input:(value)=>{
                vm.params.deviceType=value;
                vm.$set(vm.params,'deviceType',value)
              }
            }
          })
        ]),
        h('FormItem',{
          props: {
            label: vm._vm.$t('table_column_serialNumber'),
            class: 'qdd_layout100',
            prop: 'serialNumber'
          },
          style: {
            width: "100%",
            marginTop: '12px',
            marginBottom:'15px'
          }
        },[
          h('InputNumber', {
            props: {
              value: this.params.serialNumber,
              placeholder: vm._vm.$t('placeholder_input_serialNumber'),
            },
            on:{
              'on-change':(value)=>{
                vm.params.serialNumber=value;
                vm.$set(vm.params,'serialNumber',value)

              }
            }
          })
        ]),
        h('FormItem',{
          props: {
            label: vm._vm.$t('table_column_questionCategory'),
            class: 'qdd_layout100',
            prop: 'questionCategory'
          },
          style: {
            width: "100%",
            marginTop: '12px',
            marginBottom:'15px'
          }
        },[
          h('Input', {
            props: {
              type:'textarea',
              value: this.params.questionCategory,
              placeholder: vm._vm.$t('placeholder_input_questionCategory'),
            },
            on:{
              input:(value)=>{
                vm.params.questionCategory=value;
                vm.$set(vm.params,'questionCategory',value)

              }
            }
          })
        ]),
      ])
    },
    methods: {
      checkForm() {
        let vm=this;
        return this.$refs.DeviceTypeRef;
      }
    },
    created(){
      this.params=Object.assign({},this.initData)
    }
  }
</script>

<style scoped>
  .qdd_layout100 {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>
