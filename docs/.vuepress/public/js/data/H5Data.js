var host = "https://www.leachchen.com/h5website/"

var co= require('./Constant.js');

var dataList = []

var cssDataList = [
    //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 h5",type:co.H5_T_CSS,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
    // {
    //     thumbUrl: require("../../img/vue/vue00001.png"),
    //     previewUrl: "http://panjiachen.github.io/vue-element-admin",
    //     downloadUrl: "https://codeload.github.com/PanJiaChen/vue-element-admin/zip/master",
    //     description:"完整的Vue后台管理系统",
    //     type:co.VUE_T_FULL,
    //     author:"PanJiaChen",
    //     authorurl:"",
    //     repo:"vue-element-admin",
    //     fromauthor:"admin",
    //     fromauthorurl:"",
    //     from:co.FROM_GITHUB,
    //     sold:true
    //   },
];
  
var jekyllDataList = [
    //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 JEKYLL",type:co.H5_T_JEKYLL,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
];

var hexoDataList = [
    //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 HEXO",type:co.H5_T_HEXO,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
];

var phpDataList = [
    //{thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 PHP",type:co.H5_T_PHP,author:"leach-chen",authorurl:"",repo:"blog",fromauthor:"admin",fromauthorurl:"",from:co.FROM_GITHUB,sold:true},
];

function getH5AllData()
{
    dataList = cssDataList.concat(jekyllDataList).concat(hexoDataList).concat(phpDataList)
    return dataList
}


export
{
    cssDataList,
    jekyllDataList,
    hexoDataList,
    phpDataList,
    getH5AllData
}