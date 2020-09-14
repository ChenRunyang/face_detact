<template>
  <div class="container">
    <div class="left">
      <el-form
        ref="ruleForm2"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-container"
      >
    </el-form>
    </div>
    <div class="right">
      <div class="top">
        <div class="imgCon1" id="imgCon1">
        </div>
      </div>
    <div class="name">
      <h3 class="title">成员信息</h3>
      <a class="Username">姓名 :</a>
      <br></br>
      <input id="Username" type="text" style="border:none;"></input>
      <br></br>
      <a class="Username">性别 :</a>
      <br></br>
      <input id="Usersex" type="text" style="border:none;"></input>
      <br></br>
      <br></br>
      <h3 class="title">系统提示 :</h3>
      <input id="sysprint" type="text" style="border:none;"></input>
    </div>
      <div class="bottom">
        <el-form
          ref="ruleForm2"
          label-position="left"
          label-width="0px"
          class="demo-ruleForm login-container"
        >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 48
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
      .title {
        margin: 0px auto 40px auto;
        text-align: left;
        color: #505458;
      }
      .checkId {
        display: inline;
      }
      .remember {
        margin: 0px 0px 35px 0px;
      }
    }
  .name{
    position:absolute;
    left: 560px;
    top: 60px;
    height: 390px;
    width: 400px;
    .Username{
        margin:0 auto;
      }
  }
  .right {
    flex: 4;
    .top {
      height: 330px;
      .imgCon1 {
        clear: both;
        width: 400px;
        height: 400px;
        margin: 50px 10px 10px 100px;
        float: left;
        border: solid #eee 1px;
        border-radius: 10px;
        background-image: url("../../assets/face2.jpg");
      }
      .imgDesc {
        clear: both;
        width: 600px;
        height: 30px;
        color: #333;
        font-size: 12px;
        // text-align: center;
        margin-left: 300px;
      }
    }
  }
</style>

