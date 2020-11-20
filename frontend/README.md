# daotong-test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## 验证

采用了[element-ui-verify](https://aweiu.com/documents/element-ui-verify/)做为验证工具，默认支持的校验规则如下：

```
length: 校验文本长度
minLength: 校验文本最短长度
gt: 校验数字要大于某数
gte: 校验数字要大于等于某数
lt: 校验数字要小于某数
lte: 校验数字要小于等于某数
maxDecimalLength: 校验数字最大小数位
number: 校验是否为数字
int: 校验是否为整数
phone: 校验是否为手机号（随着号段的增加，未来可能需要更新）
email: 校验是否为电子邮件地址
verifyCode: 校验是否为 6 位数字验证码
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
