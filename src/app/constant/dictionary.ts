
//是否字典
export const yesNoOption = [
  {
    value: '是',
    key: 1
  },
  {
    value: '否',
    key: 0
  }
]//是否字典
export const LEVEL_OPTION = [
  {
    value: '一级',
    key: 1
  },
  {
    value: '二级',
    key: 2
  }
]

//性别字典
export const sexOption = [
  {
    value: '男',
    key: 1
  },
  {
    value: '女',
    key: 0
  }
]

//用户状态字典
export const userStatusOption = [
  {
    value: '删除',
    key: 0
  },
  {
    value: '在用',
    key: 1
  },
  {
    value: '冻结',
    key: 2
  },
]

export const GROUP_OPTION=[

]

//文章审核状态  /**审核状态 1-待审核  2-待修改 3--通过（主编）4-被采用（待发工资） 5-完成（发放）*/
export const ARTICLE_AUD_STATUS = [
  {
    value: '待审核',
    key: 1
  },
  {
    value: '待修改',
    key: 2
  },
  {
    value: '通过',
    key: 3
  },
  {
    value: '被采用',
    key: 4
  },
  {
    value: '完成',
    key: 5
  },
]

//文章审核状态  /**投稿状态 0-新建(草稿) 1-审核中（发布） 2-待修改 3-被采用*/
export const ARTICLE_PUB_STATUS = [
  {
    value: '新建（草稿）',
    key: 0
  },
  {
    value: '待审核',
    key: 1
  },
  {
    value: '待修改',
    key: 2
  },
  {
    value: '被采用',
    key: 3
  }
]

// 商家消费类型 1邀请奖励  2余额充值 3试用消费 。。。
export const MERCHANT_GOLD_TYPE = [
  {
    value: '邀请奖励',
    key: 1
  },
  {
    value: '余额充值',
    key: 2
  },
  {
    value: '试用消费',
    key: 3
  },
]

//试用活动状态 1待审核（新建）2通过 3不通过4已发布5已完成
export const ACTIVITY_AUDITING_STATUS = [
  {
    value: '待审核',
    key: 1
  },
  {
    value: '已通过',
    key: 2
  },
  {
    value: '不通过',
    key: 3
  },
  {
    value: '已发布',
    key: 4
  },
  {
    value: '已完成',
    key: 5
  },
]
//试用记录状态//status 0试用终止 1待审核 2待提交 3待修改 4待确认 5已完成 6审核不通过
export const ACTIVITY_APPLY_STATUS = [
  {
    value: '试用终止',
    key: 0
  },
  {
    value: '待审核',
    key: 1
  },
  {
    value: '待提交',
    key: 2
  },
  {
    value: '待修改',
    key: 3
  },
  {
    value: '待确认',
    key: 4
  },
  {
    value: '已完成',
    key: 5
  },
  {
    value: '不通过',
    key: 6
  },
]
// 店铺状态 1新建（待审核） 2通过(已审核) 3不通过 4-逻辑删除
export const SHOP_STATUS = [
  {
    value: '待审核',
    key: 1
  },
  {
    value: '已审核',
    key: 2
  },
  {
    value: '不通过',
    key: 3
  },
  {
    value: '已删除',
    key: 4
  },
]
// 店铺来源 1 淘宝 2 京东
export const SHOP_ORIGIN = [
  {
    value: '淘宝',
    key: 1
  },
  {
    value: '京东',
    key: 2
  },
  {
    value: '天猫',
    key: 3
  },
]
