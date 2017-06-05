<template>
    <div class="header">
      <router-link to='/'><img src='../assets/cnodejs.svg' title='cnodejs.svg'> </router-link >
      <el-button type='text' @click='dialogVisible = true' class='about'>关于</el-button>
      <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        size="tiny"
        >
        <div class='body'>
           <span>作者:<a href=""> {{author}}</a></span><br>
           <span>源代码:<a href=""> GitHub</a> <strong class='star'>Star Star</strong></span> <br>
           <span>技术栈</span>
           <ul>
             <li>Vue.js</li>
             <li>Vue-router</li>
             <li>Vue-resource</li>
             <li>Element</li>
             <li>CnodeJS API</li>
           </ul>
        </div>
      </el-dialog>
     
    </div>
</template>
<script>
export default {
  name:'cnodeHeader',
  data () {
    return {
      dialogVisible:false,
      title:'Vue.js重写CnodeJS社区',
      author:'Joe'
    }
  }
}
</script>

<style>
  .header{
    width: 100%;
    height: 60px;
    text-align: left;
    background-color: #324057;
  }

  .header img {
        width: 10rem;
        height: 3.5rem;
        margin-left: 10rem;
    }
  
  .header button.about{
        float: right;
        line-height: 3.6rem;
        margin-right: 10rem;
        font-weight: bold;
        font-size: 20px;
        color: white;
        letter-spacing: 2px;
        padding-top: 0.2rem;
  }

  .body{
      font-size: 18px;
    font-weight: bold;
  }

  .body .star{
    color:#1D8CE0;
  }

  .body a {
    color: #58B7FF;
    text-decoration: none;
  }

  .body ul{
    margin: 0;
    padding: 0;
    padding-left: 1.2rem;
    font-weight: normal;
    font-size:.9rem;
  }
</style>


