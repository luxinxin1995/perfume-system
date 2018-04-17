<template>
  <div class="knowledge">
    <div class="bg"></div>
    <div class="Notes">
      <div class="title">
        <p class="ChineseName">香调介绍</p>
        <p class="EnglishName">————————————Tone is Introduced————————————</p>
        <p class="info">一般香水的香味可以分为前调、中调和尾调三个部分。香水分三个香调是著名香水世家娇兰家族所创制，后来成为制作香水的原则。</p>
      </div>
      <div class="top">
        <div class="noteBG">
          <img src="../../assets/1.jpg" alt="">
        </div>
        <div class="desc">
          <p class="name">前调</p>
          <p class="detail">前调是香水最先透露的信息，也就是当你接触到香水的那么几十秒到几分钟之间所嗅到的，直达鼻内的昧道。前调通常是由挥发性的香精油所散发，味道一般较清新，大多为花香或柑橘类成分的香昧。只能维持几分钟的前调并不是一瓶香水的真正味道，但它是给人的第一印象。</p>
        </div>
      </div>
      <div class="top">
        <div class="desc">
          <p class="name">中调</p>
          <p class="detail">中调是香水中最重要的部分，它在前调消失之后开始散发出来，一般可持续数小时或者更久一些。中调是一款香水的精华所在，也就是说洒上香水的你就是带着这种味道示人，以这种味儿来表达自己其时的心境、情感等等信息。中味的调配是香水师最重要的责任，他除了要选择适当的香精组合来突出香水的特色以外，还要想法来使香水的味道能适当持久。通常这部分由含有某种特殊花香、木香、及微量辛辣刺激香制成，其气味无论清新或浓郁，都必须和前调完美衔接。</p>
        </div>
        <div class="noteBG">
          <img src="../../assets/2.jpg" alt="">
        </div>
      </div>
      <div class="top">
        <div class="noteBG">
          <img src="../../assets/3.jpg" alt="">
        </div>
        <div class="desc">
          <p class="name">尾调(基调)</p>
          <p class="detail">基调和尾调是同一个意思，也就是我们常所说的"余"香。通常用微量的动物性香精和雪松、檀香等芳香树脂所组成，它不仅只是散发香味，更兼具整合香味的功能。后味刚刚开始作用时，往往散发出来的称不上香，所以此时已近尾声的中调还会暂时担待着，但过一会儿以后，尾调的精致迷人香味便开始散发出来了。尾调的作用是给予香水一种绕梁三日不绝的深度，它持续的时候最长久，可达整曰或者数日之久，使用过香水隔天后还可以隐隐感到的香味就是香水的尾调。</p>
        </div>
      </div>
    </div>
    <div class="material">
      <div class="title">
        <p class="ChineseName">原料介绍</p>
        <p class="EnglishName">————————————Material is Introduced————————————</p>
      </div>
      <div class="Mcontent">
        <div class="material">
          <p class="name">动物原料</p>
          <div class="animal" v-for="(item,index) in material1" :key="index">
            <div class="Minfo">
              <p class="nameField">{{item.animal}}</p>
              <p class="intro">{{item.animaldesc}}</p>
            </div>
          </div>
        </div>
        <div class="material">
          <p class="name">植物原料</p>
          <div class="plant" v-for="(item,index) in material2" :key="index">
            <div class="Minfo">
              <p class="nameField">{{item.plant}}</p>
              <p class="intro">{{item.plantdesc}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="classify">
      <div class="title">
        <p class="ChineseName">分类介绍</p>
        <p class="EnglishName">————————————Classify is Introduced————————————</p>
      </div>
      <div class="odorType">
        <p class="headline">香型</p>
        <div v-for="(item,index) in classify" :key="index" class="content">
          <p class="nameField">{{item.odortype}}</p>
          <p class="intro">{{item.odortypeDesc}}</p>
        </div>
      </div>
      <div class="odorType">
        <p class="headline">味道</p>
        <div v-for="(item,index) in classify" :key="index" class="content">
          <p class="nameField">{{item.flavour}}</p>
          <p class="intro">{{item.flavourDesc}}</p>
        </div>
      </div>
      <div class="odorType">
        <p class="headline">浓度</p>
        <div v-for="(item,index) in classify" :key="index" class="content">
          <p class="nameField">{{item.concentration}}</p>
          <p class="intro"> {{item.concentrationDesc}}</p>
        </div>
      </div>
      <div class="odorType">
        <p class="headline">等级</p>
        <div v-for="(item,index) in classify" :key="index" class="content">
          <p class="nameField">{{item.rank}}</p>
          <p class="intro">{{item.rankDesc}}</p>
        </div>
      </div>
    </div>
    
  </div>
  </div>
</template>
<script>
import axios from "../../Api/api";

export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 100,
      classify: '',
      material1: '',
      material2: ''
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      // 获取所有分类
      axios.getclassifyAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          var data = res.data
          this.classify = data.filter(function(item) {
            return item.flavour !== '' || item.odortype !== '' || item.concentration !== '' || item.rank !== ''
          })
        }
      })
      // 获取所有原料1
      axios.getmaterialAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          var data = res.data
          this.material1 = data.filter(function(item) {
            return item.animal !== ''
          })
        }
      })
      // 获取所有原料2
      axios.getmaterial2All(this.pageIndex, this.pageSize, res => {
        if (res.code == "success") {
          var data = res.data
          this.material2 = data.filter(function(item) {
            return item.plant !== ''
          })
        }
      });
    },
  }
}
</script>
<style scoped>
.bg {
  width: 100%;
  height: 300px;
  background: url('../../assets/KBG.jpg') no-repeat scroll 0 0px transparent;
}

.Notes {
  margin-top: 30px;
  line-height: 35px;
}

.ChineseName {
  font-size: 28px;
}

.title {
  margin: 30px 0;
}

.EnglishName,
.info {
  color: gray;
  font-size: 12px;
  letter-spacing: 2px;
}

.top {
  margin-top: 50px;
  padding: 0 10%;
  display: flex;
  justify-content: space-around;
}

.noteBG img {
  width: 600px;
  box-shadow: 10px 10px 10px #eee;
}

.desc {
  text-align: left;
  width: 40%;
}

.desc .name {
  display: block;
  background-color: black;
  color: white;
  text-indent: 2em;
  margin-bottom: 20px;
}

.desc .detail {
  color: gray;
  font-size: 14px;
  line-height: 30px;
  text-indent: 2em;
}

.headline {
  display: block;
  background: black;
  color: white;
  height: 30px;
  line-height: 30px;
  padding: 0 30%;
  margin: 20px 0;
  font-size: 30px;
  font-family: "楷体"
}

.classify .odorType:nth-child(2n+1) .headline {
  text-align: left;
}

.classify .odorType:nth-child(2n) .headline {
  text-align: right;
}

.content {
  width: 50%;
  margin: 0 auto;
  padding: 0 20px;
  text-align: left;
  border-radius: 20px;
  border: 1px solid #eee;
}

.content p {
  display: block;
  margin: 20px 0;
  word-wrap: break-word;
}

 .nameField {
  font-size: 20px;
}

 .intro {
  font-size: 14px;
  color: gray;
}

.Mcontent .name {
  display: block;
  background: url('../../assets/bg.jpg');
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: white;
  width: 100%;
}
.Mcontent .material{
  width: 50%;
}
.Mcontent .material:nth-child(2){
  position: relative;
  margin-left: 50%;
}
.Mcontent .animal,.plant{
  padding: 10px 30px;
  text-align: left;
  line-height: 30px;
}
</style>

