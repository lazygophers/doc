---
pageType: home

hero:
  name: lazygophers
  text: 基于代码生成帮助快速开发
  actions:
    - theme: brand
      text: 快速开始
      link: /document/lazygophers
    - theme: alt
      text: Github
      link: https://github.com/lazygophers
#  image:
#    src: /rspress-icon.png
#    alt: lazygophers Logo
    
features:
  - title: 基于 protobuf
    details: protobuf 是一个对 Golang 友好的 rpc 协议，可以有效减少服务间传递数据的包大小
  - title: 支持 pb.go 自定义 struct tags
    details: 包括 gorm、validate 在内的众多包通过 struct tags 的方式提供配置。我们通过代码生成，使得 proto 定义的类型可以在需要 struct tags 的包中复用同一类型
  - title: 基于代码生成
    details: 通过代码生成，并内置了常见业务场景的代码生成模板，简化大量的、重复性的代码开发工作，提高业务开发效率
  - title: 丰富的插件
    details: 内置丰富的插件、模板，并允许用户自定义所需要的插件、参数等信息
  - title: 针对 CURD 优化
    details: 针对常用的 CURD 类型，有针对性的内置生成模版，提高 proto 编写效率与代码开发效率

---