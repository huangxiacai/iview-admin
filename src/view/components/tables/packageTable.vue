<!--封装带有header和footer的table-->
<template>
  <Table :data="tableData"
         :columns="columnsData"
         :stripe="stripe"
         :border="border"
         :show-header="showHeader"
         :height="getTableHeight"
         @on-selection-change="selectChange"
         class="packageTable"
         :loading="loading">
    <Row slot="header" v-show="showHeader" type="flex" justify="space-between">
      <Col>
        <template v-for="item in headBtnList">
          <Button @click="item.method" class="base_btn_item" :ref='item.ref' :type="item.btnType" :icon="item.icon" :loading="item.loading">
            {{item.text}}
          </Button>
        </template>
      </Col>
      <Col>
        <Button class="leftBtn" icon="search" @click="showSearchParel">{{$t('advanced_search')}}</Button>
      </Col>
    </Row>
    <div slot="footer"
         class="content_base_page"
         v-show="showFooter">
      <Page
        :total="tabletotallen"
        ref="pageRef"
        :page-size="tablePageSize"
        :current="tablePageIndex"
        size="small"
        @on-change="pageOnchange"
        @on-page-size-change="pageSizeChange"
        show-total show-elevator></Page>
    </div>
  </Table>
</template>

<script>
  export default {
    name: "packageTable",
    data() {
      return {}
    },
    props: {
      headBtnList: {//头部操作按钮list
        type: Array,
        default: function () {
          return [];
        }
      },
      tableData: {//表格数据
        type: Array,
        default: function () {
          return [];
        }
      },
      columnsData: {//表格列数据
        type: Array,
        default: function () {
          return [];
        }
      },
      stripe: {//是否显示间隔斑马纹
        type: Boolean,
        default: false
      },
      border: {//是否显示纵向边框
        type: Boolean,
        default: false,
      },
      showHeader: {//是否显示 表头
        type: Boolean,
        default: true,
      },
      showFooter: {//是否显示footer
        type: Boolean,
        default: true
      },
      height: {//表格高度
        type: Number,
      },
      loading: {//表格loading
        type: Boolean,
        default: false
      },
      tabletotallen: {//分页总数
        type: Number,
        default: 0
      },
      tablePageSize: {//分页尺寸
        type: Number,
        default: 15
      },
      tablePageIndex: {//分页index
        type: Number,
        default: 1
      },
      reduceheight: {//默认需要减去的高度
        type: Number,
        default: 100
      },

    },
    components: {},
    computed: {
      getTableHeight() {
        return this.$store.state.wh.innerHeight - this.reduceheight;
      }
    },
    methods: {
      pageOnchange(index) {
        this.$emit("pageonChange", index);
      },
      pageSizeChange() {

      },
      initcurrentPage() {
        //重置当前currentpage
        this.$refs.pageRef.currentPage = 1;
      },
      /**
       * 显示面板btn操作
       */
      showSearchParel() {
        this.$emit("showSearchParel");
      },
      //选择改变时触发
      selectChange(selection) {
        this.$emit("getSelect", selection);
      },
    }
  }
</script>

<style scoped>
  .content_base_page {
    display: flex;
    justify-content: center;
    border-top:1px solid #e8eaec;
  }
  .base_btn_item{
    margin-left:5px;
  }
  .leftBtn {
    margin-right: 20px;
  }

</style>
