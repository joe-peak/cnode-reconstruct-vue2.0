<template>
    <div class='article'>
        <p class='basic-info'>发布于：<span v-text='dealCommentTime(article.create_at)'></span> 作者：<span v-text='article.author?article.author.loginname:""'></span> 浏览量：<span v-cloak>{{article.visit_count}}</span> 来自：<span v-cloak>{{article.tab}}</span></p>
        <h3>{{article.title}}</h3>
        <article class='article-content markdown-text' v-html="article.content" ></article>
        <article class="comment" v-for="item in article.replies" key='item.id'>
            <div class='comment-item'>
                <router-link  :to='{name:"UserRoute",params:{username:item.author.loginname}}'>
                    <img class='user-img' :src="item.author.avatar_url" :title='item.author.loginname' alt="item.author.loginname">
                </router-link>
                <div class='comment-content'>
                    <p><span v-text='item.author.loginname'></span> <span class='comment-time' v-text='dealCommentTime(item.create_at)'></span> <span v-if='item.ups.length>0' class='thumbs-up'><icon style="cursor:pointer;" name='thumbs-up' scale='2'></icon> <span >{{item.ups.length}}</span></span></p>
                    <p  v-html='item.content'></p>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                dialogVisible:false
            }
        },
        methods:{
             dealCommentTime(time) {
                return String(time).match(/.{16}/)?String(time).match(/.{16}/)[0].replace(/.{2}/, '').replace(/[T]/, ' '):"";
            }
        },
        computed:{
            article()
            {
                return this.$store.getters.getArticle;
            },

            userName()
            {
                if(this.article.author)
                {
                    return this.article.author.loginname;
                }
            }
        },
        created () {
            document.body.scrollTop=0;
            this.$store.dispatch('getArticle',{'articleId':this.$route.params.id});
        }
    }
</script>

<style>
@import url('../assets/markdown-github.css');
    .article{
        width: 60%;
        border:1px solid #ddd;
        margin:0;
        background-color: #F9FAFC;
        padding:2rem;
    }

    .basic-info{
        font-size: 17px;
        text-align: left;
        padding: 0;
        margin: 0;
    }
    .basic-info span {
        margin-right: 2rem;
    }

    .article h3{
        color:#2c3e50;
        text-align: left;
    }

    .article-content{
        text-align: left;
        background-color: #EFF2F7;
        padding:1.5rem 1rem;
        margin-bottom: 2rem;
    }

    .comment
    {
        display: flex;
        flex-direction: column;
    }

    .comment-item{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding:1.2rem 0;
        border-bottom: 2px solid #C0CCDA;
    }

    .user-img{
        width: 4rem;
        height: 4rem;   
    }
    .comment-content{
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        text-align: left;
        margin-left: 2rem;
        font-size: 1.2rem;
        width: 100%;
    }

    .comment-content p{
        margin: 0;
    }

    pre{
        overflow: auto !important;
    }

   .article-content a ,.comment-content a{
       text-decoration: none;
       font-size: 1rem;
       color:#4183c4;
   }

   .article-content img,.comment-content img
   {
       width: 100%;
       height: auto;
   }

   .comment-content .thumbs-up{
       float: right;
       margin-right: 1rem;
   }
   .comment-content .comment-time{
    font-size:.98rem;
    color:#8492A6;
   }

 /*   .comment-content p
    {
        text-align: left;
    }*/
</style>