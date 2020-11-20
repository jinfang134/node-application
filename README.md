## 目录结构
```
.
├── backend  #后端
│   ├── node_modules #依赖
│   ├── package.json 
│   ├── package-lock.json
│   └── src # 源文件
├── frontend
│   ├── babel.config.js # babel配置文件
│   ├── node_modules # 依赖
│   ├── package.json #项目配置文件
│   ├── README.md 
│   ├── src # 源文件
│   ├── vue.config.js # vue配置文件
│   └── yarn.lock # 不用管
└── README.md

```

## 开发步骤
### 启动后端
```
cd backend
npm run dev
```
`Example app listening at http://localhost:3000` 出现这个就是启动好了

**注意：** 后端修改代码以后，要重新启动一次，修改才会生效

### 启动前端
```
cd frontend
npm run dev
```
出现以下消息就是启动好了：
```
 App running at:
  - Local:   http://localhost:4000/ 
  - Network: http://172.26.142.153:4000/

  Note that the development build is not optimized.
  To create a production build, run yarn build.
```
前端代码修改以后，在页面上立马就可以看得到，所见即所得。

## 参考资料
- [element-ui](https://element.eleme.io/#/zh-CN/component/installation)
- [express](https://expressjs.com/en/starter/hello-world.html)
- [vuejs](https://cn.vuejs.org/v2/guide/)