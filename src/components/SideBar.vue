<template>
    <aside class='side-bar'>
        <header class='panel-header'>
           <router-link :to='{name:"UserRoute",params:{username:userInfo.loginname}}'> 
               <img :src="userInfo.avatar_url" :alt="userInfo.loginname" tag='a'>
           </router-link>
            <span v-cloak>{{articleAuthor}}</span>
        </header>
        <section class='panel-section'>
            <p><icon name='score' scale='5'></icon><span>{{userInfo.score}}</span></p>
            <p><icon name='github' scale='6'></icon><a>https://github.com/{{userInfo.githubUsername}}</a></p>
        </section>
    </aside>
</template>

<script>
    export default {
        data()
        {
            return {

            };
        },

        computed:{
            articleAuthor()
            {
                return this.$store.state.articleAuthor
            },
            userInfo()
            {
                return this.$store.state.userInfo;
            }
        },
    
        /*
        *Article detail组件加载时会初始化articleAuthor，sidebar组件同时加载，
        *但是获取到的是还没有被article detail组件修改的旧值，所以需要在检测到新值是去获取user数据
        */
        watch:{
            articleAuthor(val)
            {
                this.$store.dispatch('getUserInfo',{'username':val});
            }
        }
    }
</script>

<style>
    .side-bar{
        width: 20%;
        height: 18rem;
        border: 1px solid  #ddd;
        background-color: #E5E9F2;
        padding:2rem;
    }
    .panel-header
    {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
    }

    .panel-header img {
        margin-right: 1rem;
        width: 6rem;
        height: 6rem;
    }

    .panel-header span {
        font-size:2rem;
        color: #000;
    }

    .panel-section
    {
        margin-top:2rem;
        display: flex;
        flex-direction: column;
    }

     .panel-section p
     {
         padding:0;
         margin: 0;
         padding-right:2rem;
         width: 100%;
         text-align: left;
         display: flex;
         justify-content: flex-start;
         align-items: center
         ;
     }

     .panel-section p span {
         margin-left: 1.5rem;
     }
</style>