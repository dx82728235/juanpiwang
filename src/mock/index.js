const Mock = require("mockjs");
const data = Mock.mock({
    "data|20":[{
        "goodsPic":"@Image('200*100')",
        "color1":"@color()",
        "color2":"@color()",
        "color3":"@color()",
        "logo":"@Image('77*77')",
        "goodsSmallPic":"@Image('85*43')",
        "goodsId|+1":1,
        "goodsTitle":"@ctitle(3,6)",
        "goodsDes":"@csentence",
        "goodsCount|1-7":1
    }]
})

export default data;