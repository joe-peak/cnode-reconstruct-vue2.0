import _ from 'lodash'
console.log(_.clone)
export default {
    getArticleList(state,articleList)
    {
        state.articleList=articleList;
    },

    getArticleNumber(state,num)
    {
        state.articleNumber+=10;
    },

    getArticle(state,article)
    {
        state.article=article;
    },

    getArticleAuthor(state,author)
    {
        state.articleAuthor=author;
    },

    getUserInfo(state,userInfo)
    {
        state.userInfo=userInfo;
    }
}