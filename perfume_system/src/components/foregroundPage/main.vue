<template>
  <div class="main">
    <el-carousel :interval="4000" arrow="always" height="635px">
      <el-carousel-item v-for="(item,index) in imgURL" :key="index">
        <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="title">
      <p class="Chinese">香 水 的 起 源</p>
      <p class="English">The Origin Of Perfume</p>
      <img src="../../assets/blank.png" alt="">
    </div>
    <div class="Egypt country">
      <div class="text">
        <p class="ChineseName">埃及</p>
        <p class="EnglishName English">Egypt</p>
        <p class="info">公元前三千年左右，埃及就开始使用香料，这远远比埃及其它的文明更早。</p>
        <p class="info">埃及人发明的可菲神香是人类最早的香水，就是但因当时还没有精炼高纯度酒精的技术，所以准确来说，这种香水应称叫香油，是由祭司和法老专门制成的。</p>
      </div>
      <div class="img">
        <img src="../../assets/Egypt.jpg" alt="">
      </div>
    </div>
    <div class="Zend country">
      <div class="img">
        <img src="../../assets/Zend.jpg" alt="">
      </div>
      <div class="text">
        <p class="ChineseName">古波斯</p>
        <p class="EnglishName English">Zend</p>
        <p class="info">在古波斯，香水象征着身份和地位。在皇宫里，皇上一定是最香的一个。</p>
        <p class="info">在古波斯文化里，香水更是身份地位的重要象征，据说在皇宫里，最香的必定是皇上（末药、乳香与麝香是那时最流行的香料），而在富贵人家的花园里，必种有最珍贵的香花如：茉莉、铃兰、紫罗兰，及一种特殊愈陈愈香的红玫瑰。</p>
      </div>
    </div>
    <div class="Greece country">
      <div class="text">
        <p class="ChineseName">希腊</p>
        <p class="EnglishName English">Greece</p>
        <p class="info">希腊人神化了香水，认为是众神发明了香水，闻到香味则代表着是众神的降临与祝福。</p>
        <p class="info">古希腊国民每年都会消费大量的香水，并且有在身体的不同位置使用不同香水的习惯。当时的雅典政治家，立法者，梭伦(Solon)认为国民上下香水使用泛滥，并通过立法禁止了香水的自由销售。但他并没有成功，香水依然是最热门的产品。由于当时人们对茉莉花的喜爱，还将茉莉花设立为希腊的国花。</p>
      </div>
      <div class="img">
        <img src="../../assets/Greece.jpg" alt="">
      </div>
    </div>
    <div class="Roman country">
      <div class="img">
        <img src="../../assets/Roman.jpg" alt="">
      </div>
      <div class="text">
        <p class="ChineseName">罗马</p>
        <p class="EnglishName English">Roman</p>
        <p class="info">较富裕的罗马人追求奢华风气，他们喜欢在地板和墙壁喷香水、喜欢给自己的宠物马和宠物狗擦香水、向凯旋军队的旗帜喷香水。</p>
        <p class="info">埃及人发明的可菲神香是人类最早的香水，就是但因当时还没有精炼高纯度酒精的技术，所以准确来说，这种香水应称叫香油，是由祭司和法老专门制成的。</p>
      </div>
    </div>
    <div class="Italy country">
      <div class="text">
        <p class="ChineseName">意大利</p>
        <p class="EnglishName English">Italy</p>
        <p class="info">十五世纪以后，香水被人们广泛使用，并开始使用了浓烈的动物脂香料。这种流行风尚很快就流传到法国、英国等欧洲国家。</p>
        <p class="info">十七世纪时，Paul Feminis配制出一种异香扑鼻的奇妙的液体，因他当时住在德国科隆，故命名为“科隆水”。</p>
        <p class="info">尔后，爱好服装和化妆品的法国人就特别热爱香水，香水继而成为了上流名媛手中不可少的时尚用品。</p>
      </div>
      <div class="img">
        <img src="../../assets/Italy.jpg" alt="">
      </div>
    </div>
    <div class="France country">
      <div class="img">
        <img src="../../assets/France.jpg" alt="">
      </div>
      <div class="text">
        <p class="ChineseName">法国</p>
        <p class="EnglishName English">France</p>
        <p class="info">九世纪下半叶起，香水制造技术比较成熟了，早期的蒸馏法被挥发性溶剂所代替，特别是人工合成香料在法国诞生，香水不再局限于天然香精，这使香水工业得到迅速发展。</p>
        <p class="info">由于法国人当时喜欢在皮革手套上加上香水，而要找这种手套最好就是前往格拉斯（Grasse），这个法国城市也因这种贸易而逐渐繁荣昌盛，并且它的香水业得到了很好的发展，法国很快就有了世界香水之都的称号。</p>
      </div>
    </div>
    <div class="topic">
      <div class="content" v-for="(item,index) in articles" :key="index">
        <p>{{item.title}}</p>
        <img :src="item.photo" alt="" width="500px;">
      </div>
    </div>
  </div>
</template>
<script>
import axios from "../../Api/api";

export default {
  data() {
    return {
      imgURL: [
        { src: require("../../assets/c1.jpg") },
        { src: require("../../assets/c2.jpg") },
        { src: require("../../assets/c3.jpg") },
        { src: require("../../assets/c4.png") },
        { src: require("../../assets/c5.jpg") },
        { src: require("../../assets/c4.jpg") }
      ],
      articles: '',
      pageIndex: 1,
      pageSize: 100
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      axios.getarticleAll(this.pageIndex, this.pageSize, res => {
        if (res.code == 'success') {
          var data = res.data
          this.articles = data.filter(function(item) {
            return item.title !== ''
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.title {
  margin-top: 50px;
}

.el-carousel {
  overflow: unset;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.carousel {
  width: 100%;
}

.carousel img {
  width: 100%;
  height: 100%;
}

.title .Chinese {
  font-size: 30px;
}

.English {
  color: lightgray;
}

.title img {
  margin-top: 10px;
}

.country {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  padding: 0 100px;
}

.country .text {
  width: 30%;
  text-align: justify;
}

.country .text .ChineseName {
  font-size: 24px;
}

.country .text .EnglishName {
  font-size: 14px;
}

.country .text .info {
  display: block;
  margin-top: 50px;
  color: gray;
  font-size: 14px;
}

.country img {
  width: 600px;
}
</style>

