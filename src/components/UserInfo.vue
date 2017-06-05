<template>
    <article class='userinfo-container'>
        <section class='basic-userinfo'>
           <section class='userinfo-header'>
                <img :src="userInfo.avatar_url" :alt="userInfo.loginname" :title='userInfo.loginname'>
                <aside>{{userInfo.loginname}}</aside>
           </section>
           <section class='userinfo-main'>
               <p>
                   <icon name='score' scale='4'></icon>
                   <span>积分: <em>{{userInfo.score}}</em></span>
               </p>
               <p>
                   <icon name='github' scale='4'></icon>
                   <span>Github: <em>https://github.com/{{userInfo.githubUsername}}</em></span>
               </p>
               <p>
                   <icon name='time' scale='4'></icon>
                  <span>注册时间: <em>{{userInfo.create_at}}</em></span>
               </p>
           </section>
        </section>
        <section class='recent-join-topic' v-if='userInfo.recent_replies.length>0'>
            <header class='list-header'>最近参与的话题</header>
            <section class='topic-item'  v-for='item in userInfo.recent_replies' key='$index'>
                <img :src="item.author.avatar_url" :alt="item.author.loginname" :title='item.author.loginname'>
               <router-link :to='{name:"ArticleRoute",params:{id:item.id}}'>
                    <p>{{item.title}}</p>
               </router-link>
            </section>
        </section>
        <section class='recent-create-topic' v-if='userInfo.recent_topics.length>0'>
            <header class='list-header'>最近创建的话题</header>
            <section class='topic-item'  v-for='item in userInfo.recent_topics' key='$index'>
                 <img :src="item.author.avatar_url" :alt="item.author.loginname" :title='item.author.loginname'>
                 <router-link :to='{name:"ArticleRoute",params:{id:item.id}}'>
                    <p>{{item.title}}</p>
                 </router-link>
            </section>
        </section>
    </article>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        computed:{
            userInfo(){
                return this.$store.state.userInfo;
            }
        },
        beforeCreate()
        {
            let params={username:this.$route.params.username};
            this.$store.dispatch('getUserInfo',params);
            console.log(this.$store);
        }
    }
</script>

<style>
    .userinfo-container{
        width: 60%;
        margin: 0;
    }

    .userinfo-container a {
        text-decoration: none;
        color: #000;
    }

    .basic-userinfo,.recent-create-topic,.recent-join-topic
    {
        margin-bottom: 2rem;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }

    .basic-userinfo .userinfo-header
    {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-end;
    }

    .userinfo-header img
    {
        margin-right: 1.5rem;
        width: 7.6rem;
        height: 7.6rem;
    }

    .basic-userinfo .userinfo-main p{
        align-items: center;
        margin: .4rem;
        display: flex;
        justify-content: flex-start;
    }

    .userinfo-main{
       margin-top:1rem;
     }

    .userinfo-main p span
    {
        margin-left: 0.5rem;
        font-weight: normal;
        font-size: 1rem;
        color:#000;
    }

    .userinfo-main p em
    {
        margin-left: 0.5rem;
        color:grey;
        font-size: 1.2rem;
        font-weight: 200
    }

    .basic-userinfo{
       background: #EFF2F7;
    }
    
    .recent-create-topic{
       background: #E5E9F2;
    }


    .recent-join-topic{
       background: #d3dce6;
    }

    .list-header{
        text-align: left;
        margin-bottom: 1.6em;
        color: #000;
        font-size: 1.2rem;
    }

    .recent-join-topic{
        display: flex;
        flex-direction: column;
        
    }
    .topic-item{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: #000;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #C0CCDA;
        margin:0.5rem 0;
        text-align: left;
    }

    .topic-item img{
        margin-right: 1.5rem;
        width: 5rem;
        height: 5rem;
    }

    .recent-create-topic .topic-item{
        border-bottom: 2px solid #99A9BF;
    }
</style>