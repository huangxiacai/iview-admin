/*********封装packageTable mixins 的基本数据*******/
import packageTable from '@/view/components/tables/packageTable'
export default {
  data() {
    return {
      tableLoading:false,//tableloading 表格loading状态
      reduceheight:100,//默认需要 减去的高度
      selectTabelList:null,//table选中项
      reqBase: {//请求的base参数
        "IsPage": true,
        "PageIndex": 1,
        "PageSize": 15,
      },
      getPageTotal: 0,//页面数据总数量
      getadvancedSearchModal:false,//searchpanel 状态
      tableDataList:[],//填充的数据
    }
  },
  components: {
    packageTable
  },
  methods: {
    //选择所选项
    getSelectList(section) {
      this.selectTabelList = section;
    },
    //页码change
    pageonChange(index) {
      this.reqBase.PageIndex=index;
      this.init();
    },
    /**
     * 点击search
     */
    showSearchParel() {
      this.getadvancedSearchModal=true;
      this.$refs.filterBaseSearch.init();
    },
    /**
     * search 时请求参数的拼装
     * @param params
     */
    onSearch(params){
      //重置当前页为1
      this.reqBase.PageIndex=1;
      Object.assign(this.reqBase,params);
      //重置当前的page
      this.$refs.contentBaseRef.initcurrentPage();
      this.init();
    }
  }
}
