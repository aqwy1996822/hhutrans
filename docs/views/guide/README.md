# 引言
写于2021年9月16日晚，欢迎来到河海大学交通所 徐鹏老师课题组

研究上，我们以通用人工智能作为最高圣杯，主要研究与学习的方向有，目标检测与追踪，视频流人车行为分析，视觉测距与姿态估计，视觉场景建图与自我定位，等

工程上，我们致力于将计算机视觉的前沿技术落地于交通相关的各个垂直领域，如航道、港口、列车、公路

近年来，随着数据量的爆发，硬件算力的发展，基于统计学习的深度神经网络在一些任务上达到乃至超过了人工水平

分类任务（几乎所有backbone）
目标检测与追踪（RCNN系列,YOLO系列,SSD）
语义分割（FCN,UNET)
实例分割(DEEPLAB系列,MaskRcnn)
人脸识别(arcface,facenet等)
关键点检测(shufflenet系列，alphapose,openpose)
对对联(seq2seq)
和人进行连续对话(GPT3)
由低帧视频生成高帧视频
由低分辨率图像生成高分辨率图像
根据文字描述绘图
看图说话
风格迁移
等等

深度学习原理简述

以回归一元1次方程为例
有一批散点，分布在二维平面上某条直线的附近，如何求这条线的表达式

首先，设模型为Y=kx+b
假设有1万个点
假设计算机的内存一次只能存放一千个点
如何对1W个点的模型做回归
对于



我们课题组的项目
# 理论部分
## 总体认识与入门
深度学习花书[pdf下载](https://github.com/exacity/deeplearningbook-chinese/releases/download/v0.5-beta/dlbook_cn_v0.5-beta.pdf)  
机器学习西瓜书[pdf下载](./xiguashu.pdf)  
CS231N斯坦福CV公开课[B站视频](https://www.bilibili.com/video/BV1bE411h7uW?from=search&seid=11432675580658195391)  
CS224N斯坦福NLP公开课[B站视频](https://www.bilibili.com/video/BV1pt411h7aT?from=search&seid=358164148806186343)  
## 方向模型论文精读
YOLO V1 [pdf下载](./yolov1.pdf)  
FCN [pdf下载](https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Long_Fully_Convolutional_Networks_2015_CVPR_paper.pdf)  
ALEXNET [pdf下载](http://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf)  
VGG [pdf下载](https://arxiv.org/pdf/1409.1556)  
DEEPSORT [pdf下载](https://arxiv.org/pdf/1703.07402.pdf)
# 实践部分
## Python基础
- 基本语法if else for while break 等
- 数据类型 列表 集合 字典 元组  
- Anaconda和Pycharm的配合使用
### 推荐教程
[廖雪峰](https://www.liaoxuefeng.com/wiki/1016959663602400)  
[小甲鱼](https://www.bilibili.com/video/av27789609/?spm_id_from=333.788.b_636f6d6d656e74.12)  
[Anaconda官网](https://www.anaconda.com/products/individual)  [Pycharm官网](https://www.jetbrains.com/pycharm/download/#section=windows)  注意请下载社区版，专业版要钱
## Numpy基础
- 矩阵的运算，处理  
### 推荐教程 
[莫烦numpy](https://www.bilibili.com/video/BV1Ex411L7oT?from=search&seid=1059292972133559422)
## Opencv基础
- 图片的裁剪，查找边缘，降噪，卷积核查找特征，等  
### 推荐教程
[B站](https://www.bilibili.com/video/BV1eW411C7sX?p=1)  
[官方教程](https://docs.opencv.org/master/d9/df8/tutorial_root.html)
## Tensorflow使用
### 类别
- 语言感情偏向分类  
能辨别一句话是积极或消极的
- 图像分类  
能分辨一张图像的主体是猫或狗，识别0-9数字图片
- 目标检测  
检测到车辆在图片中的位置并框选
- 目标语义分割  
检测到图片中哪些像素区域代表人，哪些代表车
- 实例分割  
在语义分割的基础上能把每个个体区分开来
- 回归分析  
对数据间的关系做回归预测
- 关键点检测  
检测人体的骨骼关键点
### 推荐教程
[吴恩达tensorflow实践](https://www.bilibili.com/video/BV1zE411T7nb)   
[吴恩达tensorflow部署](https://www.bilibili.com/video/BV1zE411T7nb)
[官网教程](https://tensorflow.google.cn/)
## Pytorch使用
pytorch和tensorflow都应当熟练使用，但只需精通一个
### 推荐教程
[官方教程](https://pytorch.org/tutorials/)


