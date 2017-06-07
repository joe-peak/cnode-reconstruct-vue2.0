import get from '@/assets/js/xhr.js'
import axios from 'axios'
export default {
   getArticleLists({commit,state})
   {
      commit('getArticleNumber');
      /*get('https://cnodejs.org/api/v1/topics',{
        limit:state.articleNumber,
        mdrender:'false',
        page:1
      }).then(res=>{
        commit('getArticleList',res.data);
        console.log(axios.get)
      }).catch(err=>{
       console.log('MaiSec.vue: ', res);
      })
    */
      axios.get(`https://cnodejs.org/api/v1/topics?`,
        {
          params: {
            limit:state.articleNumber,
            mdrender:'false',
            page:1
          }
        }
       ).then(res=>{
        commit('getArticleList',res.data.data);
      }).catch(err=>{
       console.log('MaiSec.vue: ', res);
      })
   },

   getArticle({commit,state},req)
   {
     let url=`https://cnodejs.org/api/v1/topic/${req.articleId}`;
     /*get(url).then((res)=>{
       if(res.success)
       {
        commit('getArticle',res.data);
        commit('getArticleAuthor',res.data.author.loginname);
       }
     }).catch((err)=>{
       console.log('AticleDetail',err);
     })*/

     axios.get(url).then((res)=>{
       if(res.data.success)
       {
        commit('getArticle',res.data.data);
        commit('getArticleAuthor',res.data.data.author.loginname);
       }
     }).catch((err)=>{
       console.log('AticleDetail',err);
     })
   },

   getUserInfo({commit,state},req)
   {
     if(!req.username)
     {
       throw new Error('username is required.');
     }

     let url=`https://cnodejs.org/api/v1/user/${req.username}`
      /*get(url).then((res)=>{
        if(res.success)
        {
          commit('getUserInfo',res.data);
        }
      }).catch((err)=>{
         console.log('AticleDetail',err);
      })*/
      axios.get(url).then((res)=>{
        if(res.data.success)
        {
          commit('getUserInfo',res.data.data);
        }
      }).catch((err)=>{
         console.log('AticleDetail',err);
      })
   }
}