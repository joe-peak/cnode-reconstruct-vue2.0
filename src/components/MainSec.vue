<template>
  <div class='main'>
    <div class="article-item" v-for='article in articleLists' k='article.id'>
        <router-link :to='{name:"UserRoute",params:{username:article.author.loginname}}'><img :src="article.author.avatar_url" :alt="article.author.loginname" :title='article.author.loginname'></router-link>
        <div class='text'>
        <router-link :to='{name:"ArticleRoute",params:{id:article.id}}' tag='p'  v-cloak class='article-title'>
                {{article.title}}
        </router-link>
        <p class='article-info'>回复：<span v-cloak class='reply-time'>{{article.reply_count}}</span> &nbsp;&nbsp;创建于：<span class='create-time'>{{formatTime(article.create_at)}}</span></p>
        </div>
    </div>
  </div>
</template>

<script>
    export default
    {
        name:'MainSec',
        data(){
            return{

            }
        },
        computed: {
            articleLists()
            {
                return this.$store.getters.getArticleList;
            }
        },
        methods: {
            getArticleLists()
            {
                this.$store.dispatch('getArticleLists');
            },

           formatTime(timeObj)
            {
                let time=timeObj.toString();
                let charIndex=time.toString().toLowerCase().indexOf('t');
                if(time && charIndex!==-1)
                {
                    return time.toString().slice(0,charIndex);
                }
                return time;
            },

            scrollWin()
            {
                let sumH=document.body.scrollHeight;
                let clientH=document.documentElement.clientHeight;
                let scrollTop=document.body.scrollTop;
                if(sumH===clientH+scrollTop)
                {
                    this.getArticleLists();
                }
            }
        },
        created () {
            this.getArticleLists();
        },
        mounted () {
          /*  let _self=this;
            window.addEventListener('scroll',function()
            {
                _self.scrollWin();
            });*/
            window.addEventListener('scroll',this.scrollWin);
        }
    }
</script>

<style>
    .main{
        width: 60%;
        min-height: 30rem;
        border:1px solid #ddd;
        margin:0 auto;
        border-radius:5px;
        display: flex;
        flex-direction: column;
        padding:0.8rem;
    }

    .article-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 2px solid #C0CCDA;
        margin-bottom: 0.3rem;
    }

    .article-item .text{
        padding-left: 0.5rem;
    }

    .article-item .article-title{
        font-size: 1.4rem;
        color:#000;
        text-align: left;
        cursor: pointer;
    }

     .article-item .article-info{
        font-size: 1.1rem;
        text-align: left;
        line-height: 1rem;
        color:#8492A6;
    }

    .article-item img{
        width: 4rem;
        height: 4rem;
    }

    .reply-time{
        margin-right:1.2rem;
        display: inline-block;
        width:6rem;
    }

    .create-time{
        text-align: left;
    }
</style>