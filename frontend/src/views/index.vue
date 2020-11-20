<template>
  <div>
   <h2>Data table</h2>
   <el-table :data="users" border stripe>
     <el-table-column prop="id" key="id" label="ID" > </el-table-column>
     <el-table-column prop="name" key="name" label="Name" > </el-table-column>
     <el-table-column prop="age" key="age" label="Age" > </el-table-column>
   </el-table>
   <el-button type="primary" size="default" @click="handleClick">go to login</el-button>
   
  </div>
</template>
<script>
export default {
    data(){
        return {
            users:[]
        }
    },
    methods: {
      async getUsers(){
        const {data}= await this.$http.get('/api/users')
        console.log(data)
        this.users=data
      },
      handleClick(){
        this.$router.push({
          name:'login'
        })
      }
    },
    mounted() {
        this.getUsers()
    }
}
</script>