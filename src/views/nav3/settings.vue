<template>
  <div class="container">
    <h4>修改账号</h4>
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
    >
      <el-form-item label="账户名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="原密码">
        <el-input v-model="form.oldPassword" placeholder="请输入原密码"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="form.newPassword" placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item label="联系人名">
        <el-input v-model="form.contactName" placeholder="请输入联系人名字"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.contactWay" placeholder="请输入手机号/邮箱/QQ"></el-input>
      </el-form-item>
      <el-form-item label="用户角色">
        <el-input v-model="form.role" placeholder="请输入角色名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
          class="btn-1"
        >提交</el-button>
        <el-button
          type="primary"
          class="btn-2"
        >取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "池子健",
        oldPassword: "",
        newPassword: "",
        contactName: "",
        contactWay: "",
        role: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~scss_vars";
.container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 0px auto;
  width: 350px;
  height: 480px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .btn-1 {
    background-color: #ff6a6a;
    border: none;
    margin: 20px 30px;
  }
  .btn-2 {
    background-color: gray;
    border: none;
  }
}
</style>