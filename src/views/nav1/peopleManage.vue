<template>
  <div>
    <div>
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
      >
        <el-form-item class="item1">
          <el-input
            v-model="formInline.user"
            placeholder="输入搜索条件"
          ></el-input>
        </el-form-item>
        <el-form-item label="搜索功能">
          <el-select
            v-model="formInline.search"
            placeholder="用户搜索"
          >
            <el-option
              label="选择1"
              value="1"
            ></el-option>
            <el-option
              label="选择2"
              value="2"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="每页显示">
          <el-select
            v-model="formInline.region"
            placeholder="5"
          >
            <el-option
              label="1"
              value="1"
            ></el-option>
            <el-option
              label="2"
              value="2"
            ></el-option>
            <el-option
              label="3"
              value="3"
            ></el-option>
            <el-option
              label="4"
              value="4"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            class="btn"
          >搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <h4>用户列表</h4>
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="imgPath"
          label="用户缩略图"
          width="200"
        >
          <template slot-scope="scope">
            <img
              :src="scope.row.imgPath"
              alt=""
              style="width: 50px;height: 50px"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="contact"
          label="联系方式"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="group"
          label="群组"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="registerTime"
          label="注册时间"
          width="200"
        >
        </el-table-column>
      </el-table>
    </div>
     <el-button type="primary" class="addBtn" @click="clickHandler">添加人员</el-button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        search: ""
      },
      tableData: [
        {
          name: "池子健",
          sex: "男",
          contact: "20063549989",
          group: "第7组",
          isPass: "是",
          registerTime: "2018-12-24"
        },
        {
          name: "池子健",
          sex: "男",
          contact: "20063549989",
          group: "第7组",
          isPass: "是",
          registerTime: "2018-12-24"
        },
        {
          name: "池子健",
          sex: "男",
          contact: "20063549989",
          group: "第7组",
          isPass: "是",
          registerTime: "2018-12-24"
        },
        {
          name: "池子健",
          sex: "男",
          contact: "20063549989",
          group: "第7组",
          isPass: "是",
          registerTime: "2018-12-24"
        },
        {
          name: "池子健",
          sex: "男",
          contact: "20063549989",
          group: "第7组",
          isPass: "是",
          registerTime: "2018-12-24"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    clickHandler(){
       this.$router.push({ path: "/peopleInfo" });
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  background-color: #ff6a6a;
  border: none;
}
.item1 {
  margin-right: 200px;
}
.addBtn{
  background-color: #ff6a6a;
  border: none;
  float: right;
  margin-right: 150px;
  margin-top: 100px;
}
</style>
