export class ActivityInfo {
  shop_id: number
  postage_type: number = 1
  begin_at: Date = new Date()
  end_at: Date =new Date(new Date().setMonth(new Date().getMonth() + 1))
  title: string
  number_of: number
  taobao_id: string
  golds: number
  price: number
  content: string
  flow: string
  thumb: any[] = []
}
