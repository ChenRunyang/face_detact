  <template>
  <div>
    <h4>实时考勤结果</h4>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="imgPath"
        label="图片路径"
        sortable
        width="180"
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
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="group"
        label="群组"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="isPass"
        label="是否考勤成功"
        width="180"
      >
      </el-table-column>

    </el-table>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [
        {
		  id: "2018-12-24",
          name: "池子健",
          sex: "男",
          group: "第7组",
          isPass: "是"
        },
        {
          id: "2018-12-24",
          
          name: "池子健",
          sex: "男",
          group: "第7组",
          isPass: "是"
        },
        {
          id: "2018-12-24",
          
          name: "池子健",
          sex: "男",
          group: "第7组",
          isPass: "是"
        },
        {
          id: "2018-12-24",
          
          name: "池子健",
          sex: "男",
          group: "第7组",
          isPass: "是"
        },
        {
          id: "2018-12-24",
          
          name: "池子健",
          sex: "男",
          group: "第7组",
          isPass: "是"
        },
        {
          id: "2018-12-24",
          
          name: "池子健",
          sex: "男",
          group: "第7组",
          isPass: "是"
        }
      ]
    };
  }
};
</script>