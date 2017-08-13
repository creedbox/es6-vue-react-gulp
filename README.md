## ES6项目构建


### 下载源码


从gitlab下载
```shell
git clone git@gitlab.com:imooc/es6-build.git
```

或者

从github下载
```shell
git clone git@github.com:cucygh/es6-vue-react-gulp.git
```

### 安装

1. 在当前目录执行

  ```shell
    npm install
  ```
2. 在server目录执行

  ```shell
    npm install
  ```
3. 在server目录修改app.js

  ```javascript
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(require('connect-livereload')());
  ```

  也就是增加<code>app.use(require('connect-livereload')());</code>语句，一定要注意这行代码的加入位置，如上述位置。
4. 在当前目录执行

  ```shell
    gulp --watch
  ```

### 访问

在Chrome浏览器输入http://localhost:3000，访问即可看到效果。
