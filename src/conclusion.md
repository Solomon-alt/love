#第一个项目总结 ##项目所做经过

在本次项目之前 我先看了你的讲解，包括表单验证和路由守卫因此我先做了登录注册，在登录注册主要是发 post 求，和对 network 的使用，根据不同的返回信息做出相应的判断，做完登录注册我就做了公共路由和路由守卫，以及对页面进行布局，以上类容都是你讲过我只需要稍加变通拿来即可以使用。

上面的大部分都是现成的，后面需要自己的使用插件的能力和发请求能力，在首页中，主要是使用表格插件和发 get 请求在最下面的中间有个 todo list 这是需要花费一点脑力和时间才能解决，在发表文章三件套中，这个穿插了布局表单验证，传值，还有统计等问题，这个花费了我大量的时间，在统计这个我有了一些思路但是实行起来太过困难，我的思路是通过数组去重知道其中有哪些种类例如 vue 有三个 react 有四个 ，去重就可以知道有哪些种类 然后再找出每一个出现的次数 这样做成的新的数组再将这个新数组制成饼图就可以达成目标，这种方法试了一个多小时毫无进展废弃这种方法，也不知道这个办法成不成，标签页就是穿梭框而已不算太难，导出 excel 其中的难点在于分页和上面的那个搜索框，分页结合 element 和插件完成，搜索框我是通过 input 事件，想到过用 watch 来监听 但是因为 input 事件很久未用和相对来说简单一点所以采取这个办法。

图片上传在上传的位置在我详细读过需求才明白，退出系统也是全局做简单的页面，只是跳路由和发请求显示相应的内容还有清除做项目在 local storage 中存的类容用 remove 清除。

##项目心得
总体来说这个项目很简单，在前面简单地方我花费时间较少，在写作三件套中花费了将近一半的时间，将路由传值运用了几次，在发送 post 请求在 network 查看然后做出相应的判断有了一定的提高，这两个方面可能已经比较熟悉了,在退出登录时我原本做了跳路由这一步，删了也和原来的效果一样不知道会不会有什么问题，但是我旁边的人不跳转路由他们就在退出时不会到登录界面，这是我的问题还是他们的问题；有收获肯定就有不足，我阅读文档的能力还是太差，在这上面花费了很多时间，有很多可以用插件或者用 element 我选择的是自己手写，感觉自己在逃避这种问题，例如在公共路由上面的时间我是自己手写，老师提供插件我还是选择自己手写，还有很多地方代码重复，不精简，仅仅只是为了满足需求而已，这次还以一个较大的收获就是学会了一个 css 高级应用 calc。

##下一个项目展望，下一个项目吸收这次做项目经验，尽可能的做好每一个功能，由于这一个项目我尽量采用手写因此在下一个项目我选择用文档上的类容，奖没有用到的知识用到，每一处注释写详细。至少自己感觉比第一个项目要做的好有一定的提升。

做项目后的问题就是，也有一些问题；
*一个按钮可以有多个事件吗？倘若有 应该怎么用？
=====================================
*遇到自己不会的例如这次的这个统计，大部分同学都不会这个，没有一点儿思路，这时候应该做什么来解决这个问题。
=====================================
*这两天我在看掘金上面有 less 我以前在学习 css 时候自学过 less，也用 less 写过静态页面，这里面可以用么，可以用的话应该怎么用？
=====================================
*在后面时间我阅读了县一个项目需要用的 vant 组件 里面有 rem，在我的记忆里这个是媒体查询用来做屏幕宽度不同的时候，可以用 rem 来做单位，我们这个做移动端会不会用到
===================================== \*还有一个问题 侧边栏都设置了跳转路由，例如我在退出页面，点击首页就会跳到首页，但是我在首页再次点击侧边栏的首页就会报错不知这是什么原因
