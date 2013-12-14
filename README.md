jquery.gourlhash.js
===================

这是一个蛋碎的插件，为了提供一个更好的锚跳转用户体验。如果你不知道锚是什么，建议先看一下：[锚点那些事儿](http://kai-lee.com/746.html)。

当你的网页中用到了锚跳转，但是头部又带有一个跟随滚动的导航条，是否会遇到下面这样的蛋碎的情况？！

![蛋碎的锚跳转](http://jiangshui.b0.upaiyun.com/works/gourlhash/1.png)

于是我就写了这个小插件（实际上是为了后面的 `fetoc` 插件做铺垫）。

##功能

基本功能如下：

1. 当用户打开你的带有锚的链接（例如：`http://localhost/index.html#h3`) 插件会按照你设置的参数滚动到这个位置。
2. 传递给插件头部跟随模块的选择器，妈妈从此不用担心跳转到对应位置的时候，内容被截断了。
3. 点击某个页内的用来锚跳转的 `a` 链接时，根据你设置的参数滚动过去而不是直接跳过去。
4. 。。。。。有待您的反馈和补充

##用法

推荐使用 `demo` 文件夹中的两个测试网页进行测试。

###让妈妈从此不用担心跳转到对应位置的时候，内容被截断了

使用类似下面代码将插件引用进去，注意放在 jQuery 后面加载：

    <script type="text/javascript" src="./js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="./js/jquery.gohashurl.min.js"></script>

使用下面代码启用，并设置头部跟随模块的选择器以及偏移量：

	$.gohashurl({
		topfixed: '.header',
		offset: 20
	});

上面的参数的意思是，当前网页的头部跟随模块为 `.header` 我想让锚跳转的时候，跳转目标的位置在这个跟随滚动模块下面的 20px 位置。之所以设置一个 20px 的偏移值，是为了避免锚文字跟滚动跟随模块黏在了一起。

如果你的顶部跟随模块高度不好界定或者你打算自己定义一个高度的话，无视 `topfixed` 参数，直接设置 `offset: 80` 这样的即可。

如果你不想要动画过渡效果，设置 `duration` 参数为 `0` 即可去掉动画效果和滚动时间。

###让我当前页面中的锚跳转不再生硬

如果你使用了 `toc` 这类的插件，会生成很多当前页面内容的锚跳转链接，点击这些链接跳转到对应的内容区域。使用如下代码，可以在点击链接的时候，不再立即跳转到对应位置，而是加上你设置的滚动效果和时长并且排除了头部跟随条的问题：

	$('.toc a').click(function(event) {
		$.gohashurl({
			target: $(this).attr('href'),
			topfixed: '.header',
			offset: 20
		});
	});	

这里对 `a` 的单击事件启用这个插件，使其跳转到目标的 `href` 。

###我需要让滚动变得更个性一点

滚动的过渡动画默认是 `linear` 线性变化的，你也可以使用其他效果，当然需要先加载 `jquery.easing.js` （不知道什么的看[这里](http://blog.wpjam.com/m/jquery-easing-plugin/)），注意，要加载到本插件的前面哦。然后这样设置：

	$.gohashurl({
		easing: 'easeInOutCirc',
		duration: 400
	});

`easing` 参数指定过渡效果的名称，`duration` 参数指定了动画过渡的时间。

##参数一览表

	target: ''        //目标位置
	topfixed: ''      //顶部跟随滚动的元素
	offset: 10        //顶部偏移量
	duration: 200     //滚动时间
	easing: 'linear'  //滚动过程中的效果

##使用协议

MIT