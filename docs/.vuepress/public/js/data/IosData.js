var host = "https://leach-chen.github.io/storeios1/"

var co= require('./Constant.js');

var dataList = []

var adminname = "admin"
var adminurl =""

var fullIosDataList = [
 // {thumbUrl: host+"001/thumb/demo.png",previewUrl: host+"001/source/",downloadUrl: host+"001/download/before.zip",description:"旅游风格的H5网站 Ios",type:co.T_IOS_FULL,author:"leach-chen",authorurl:"",gitrepo:"blog",byauthor:"admin",byauthorurl:"",from:co.FROM_GITHUB,sold:true},

 {
  thumbUrl: host+"1/ios1_1_t.jpg",
  previewUrl: host+"1/ios1_1_p.jpg",
  downloadUrl: "https://codeload.github.com/Aufree/ESTMusicPlayer/zip/master",
  description:"一款IOS音乐播放器",
  type:co.T_IOS_FULL,
  author:"",
  authorurl:"",
  gitauthor:"Aufree",
  gitrepo:"ESTMusicPlayer",
  byauthor:adminname,
  byauthorurl:adminurl,
  sold:true
},
];


function getIosAllData()
{
  dataList = fullIosDataList
  return dataList
}

export
{
  fullIosDataList,
  getIosAllData
}