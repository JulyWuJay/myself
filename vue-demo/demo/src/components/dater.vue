<template>
  <div style="width:400px;height:48px;z-index:1000;position: relative;cursor: pointer;">
    <div v-if="showDate" class="dater-date">
      <div class="dater-date-up">
        <div class="dater-date-up-left">
          <div class="last-year" @click="lastYear"> &lt;&lt; </div>
          <div class="last-month" @click="lastMonth"> &lt; </div>
        </div>
        <div class="dater-date-up-middle">
          {{year}}年{{month}}月
        </div>
        <div class="dater-date-up-right">
          <div class="next-month" @click="nextMonth"> &gt; </div>
          <div class="next-year" @click="nextYear"> &gt;&gt; </div>
        </div>
      </div>
      <div class="dater-date-middle">
        <div v-for="item in days" v-bind:key="item" @click="choseDays(item)" v-bind:class="{'chosed': item === date}">{{item}}</div>
      </div>
      <div class="dater-date-down">
        <!--      <button class="btn-cancle" @click="cancle">取消</button>-->
        <button class="btn-confirm" @click="confirm">确认</button>
      </div>
    </div>
    <div class="dater-input-div ikea-border">
      <input @focus="focusEd" class="dater-input-input" type="text" v-model="dateInfo" placeholder="请选择生日">
    </div>
  </div>
</template>

<script>
export default {
  name: 'dater',
  props: ['inNum'],
  data () {
    return {
      showDate: false,
      year: 1996,
      month: 12,
      date: 12,
      days: [],
      dateInfo: ''
    }
  },
  watch: {
    year: function (newYear, oldYear) {
      let d = this.getDays(newYear, this.month)
      this.createDays(d)
    },
    month: function (newMonth, oldMonth) {
      let d = this.getDays(this.year, newMonth)
      this.createDays(d)
    }
  },
  mounted: function () {
    this.createDays(31)
  },
  methods: {
    getDays (year, month) {
      switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return 31
        case 4:
        case 6:
        case 9:
        case 11:
          return 30
        case 2:
          return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 29 : 28
      }
    },
    createDays (num) {
      this.days = []
      for (let i = 1; i <= num; i++) {
        this.days.push(i)
      }
    },
    focusEd () {
      // console.log('得到焦点')
      this.showDate = true
    },
    choseDays (e) {
      this.date = e
      console.log(e)
    },
    lastYear () {
      this.year--
    },
    lastMonth () {
      if (this.month > 1) {
        this.month--
      }
    },
    nextMonth () {
      if (this.month < 12) {
        this.month++
      }
    },
    nextYear () {
      let nowYear = new Date().getFullYear()
      if (this.year < nowYear) {
        this.year++
      }
    },
    confirm () {
      let date = this.year + '-' + this.month + '-' + this.date
      this.$emit('getDate', date)
      // 199785形式
      let dateNum = this.year + '' + this.month + '' + this.date
      this.$emit('getDateNum', dateNum)
      console.log(date)
      this.dateInfo = date
      this.showDate = false
    },
    cancle () {
      this.showDate = false
      this.dateInfo = ''
      this.date = ''
    }
  }
}
</script>

<style scoped>
  .ikea-border{
    border:1px solid #959595;
    border-radius: 2px;
  }
  .chosed-data{
    background: #007CC8;
    color: white;
  }
  .dater-input-div{
    width:100%;
    height: 100%;
    background: blue;
  }
  .dater-input-input{
    width: 100%;
    height:100%;
    border:none;
    padding: 4px 20px;
    font-size: 16px;
    color: #959595;
  }
  .dater-date{
    width: 100%;
    height: 200px;
    box-shadow: 0 0 10px #ededed;
    background: white;
    float: outside;
    position: absolute;
    top:-203px;
    transition: opacity 1s;
    animation: show 500ms ease-in-out;
    font-size: 14px;
  }
  .dater-date-up{
    width:  100%;
    height: 40px;
    border-bottom: 1px solid #ededed;
    display: flex;
    align-items: center;
  }
  .dater-date-up-left{
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .dater-date-up-left div{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  .dater-date-up-left div:hover{
    background: #007CC8;
    color: white;
  }
  .dater-date-up-middle{
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
  .dater-date-up-right{
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .dater-date-up-right div{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  .dater-date-up-right div:hover{
    background: #007CC8;
    color: white;
  }
  .dater-date-middle{
    width:  100%;
    height: 120px;
    /*background: blue;*/
    border-bottom: 1px solid #ededed;
    padding: 0 10%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .dater-date-middle div{
    width:45px;
    height:24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
  .dater-date-middle div:hover{
    background: #007CC8;
    color:white;
  }
  .dater-date-down{
    width:  100%;
    height: 40px;
    /*background: gold;*/
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  @keyframes show {
    from {
      height: 0;
      top: 0;
    }
    to{
      height: 200px;
      top: -203px;
    }
  }
  .chosed{
    background: #007CC8;
    color: white;
  }
  .btn-confirm{
    width:50px;
    height: 30px;
    background: #007CC8;
    color: white;
    border-radius: 2px;
    border:0;
    margin-right: 20px;
  }
  .btn-confirm:hover{
    opacity: 0.8;
  }
  .btn-cancle{
    width:50px;
    height: 30px;
    background: #808695;
    color:white;
    border-radius: 2px;
    border:0;
    margin-right: 20px;
  }
</style>
