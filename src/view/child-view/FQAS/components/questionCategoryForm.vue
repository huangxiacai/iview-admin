<script>
    export default {
        name: "questionCategoryForm",
      data(){
        return {
          ruleValidate:{
            name:[
              { required: true, message: 'Please fill in the question name', trigger: 'change' }
            ],
            order:[
              { required: true,type:'number', message: 'Please fill in the order', trigger: 'change' }
            ]
          },
          params:{
            name:null,
            order:null
          }
        }
      },
      props:{
        _vm:{

        },
        _ref:{

        }
      },

      methods:{
        checkForm() {
          let vm=this;
          return this.$refs.queestionCategoryFormRef;
        }
      },
      render(h){
          let vm=this;
          return h('Form',{
            ref:'queestionCategoryFormRef',
            props:{
              model:this.params,
              rules:this.ruleValidate,
              inline:true
            }
          },[
            h('FormItem',{
              props:{
                label:'问题分类名称',
                prop:'name'
              },
              style:{
                width:'100%'
              }
            },[
              h('Input',{
                props:{
                  placeholder:'请填写问题分类名称',
                  value:this.params.name
                },
                on:{
                  input:(value)=>{
                    vm.params.name=value;
                    vm.$set(vm.params,'name',value);
                  }
                }
              })
            ]),
            h('FormItem',{
              props:{
                label:'排序',
                prop:'order'
              },
              style:{
                width:'100%'
              }
            },[
              h('InputNumber',{
                props:{
                  placeholder:'请填写排序号',
                  value:this.params.order,
                },
                style:{
                  width:'100%'
                },
                on:{
                  input:(value)=>{
                    vm.params.order=value;
                    vm.$set(vm.params,'order',value);
                  }
                }
              })
            ])
          ]);
      }
    }
</script>

<style scoped>

</style>
