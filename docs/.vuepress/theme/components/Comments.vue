<template>
    <div class="vcomment" v-if="data.comments === true">
      <div id="vcomments"></div>
    </div>
</template>

<script>
import { isActive, hashRE, groupHeaders } from '../util'
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    },
  },
  mounted: function(){
    this.createValine()
  },
  
  methods: {
    createValine() {
      const Valine = require('valine');
      window.AV = require('leancloud-storage')
      const valine =  new Valine({
        el: '#vcomments',
        appId: 'kyG2zl9DjYp6euveXb9LkzK6-gzGzoHsz',
        appKey: '6MTKO60mO7igK2mNi1hgsWIp',
        notify: true,
        verify: true,
        avatar: 'monsterid',
        path: window.location.pathname,
        placeholder: '既然来了就留个脚印吧，不用登陆就能发表留言哦',
      });
      this.valineRefresh = false
    }
  },
  watch: {
    '$route' (to, from) {
      if(to.path !==  from.path){
        setTimeout(() => {
          //重新刷新valine
          this.createValine()
        }, 300)
      }
      
      /**
       * TODO:
       * 1. 使用其他方法更新评论组件 或者使用其他较为好用的评论组件
       * 2. 添加categories and tag
       * 3. 更换其他主题
       */
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#vcomments {
  max-width 740px
  padding 10px
  display block;
  margin-left auto;
  margin-right auto;
}
</style>


