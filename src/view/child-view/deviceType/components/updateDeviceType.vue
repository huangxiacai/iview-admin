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
          deviceType: ''
        },
        rules: {
          deviceType: [
            {required: true, message: this._vm.$t('message_rules_deviceType'), trigger: 'blur'}
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
            prop: 'deviceType'
          },
          style: {
            width: "100%",
            marginTop: '12px'
          }
        }, [
          h('Input', {
            props: {
              value: this.params.deviceType,
              placeholder: vm._vm.$t('placeholder_input_deviceType'),
            },
            on:{
              input:(value)=>{
                vm.params.deviceType=value;
                vm.$set(vm.params,'deviceType',value)

              }
            }
          })
        ])
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
  }
</style>
