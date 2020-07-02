<template xmlns:table="http://www.w3.org/1999/html">
  <div id = "building">
    <!--拉丝车间标题-->
    <div style="margin-top: 2%;width: 47%;height: 2%;margin-left: 2%">
      <i class="el-icon-s-data" style="font-size: 30px"></i>
      <span style="width: 80%;font-size: 25px;color: darkslategray;" class="word">拉    丝    车    间</span>
    </div>
    <div style="width: 47%;height: 80%;margin-top: 2%;margin-left: 2%;float: left">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label" style="font-weight: bold"><i class="el-icon-date"></i> 车间机台工作状态</span>
          <table class="word">
            <tr>
              <td class="td">机台编号</td>
              <td class="td" style="width: 31.5%">半径</td>
              <td class="td">长度</td>
              <td class="td">状态</td>
            </tr>
          </table>
        <br/>
          <vue-seamless-scroll :data="listData" :class-option="optionHover" class="seamless-warp">
              <!--<li v-for="item in listData">-->
                <!--<span class="id" v-text="item.id"></span>-->
                <!--<span class="radius" v-text="item.radius"></span>-->
                <!--<span class="weight" v-text="item.weight"></span>-->
                <!--<span class="state" v-text="item.state"></span>-->
              <!--</li>-->
            <el-table
              :data="listData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="id"
                width="180">
              </el-table-column>
              <el-table-column
                prop="radius"
                width="180">
              </el-table-column>
              <el-table-column
                prop="length"
                width="180">
              </el-table-column>
              <el-table-column
                prop="state">
              </el-table-column>
            </el-table>
          </vue-seamless-scroll>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!--铜丝完成状态-->
    <div style="width: 47%;height: 20%;margin-top: 0%;margin-left:2%;float: left">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label" style="font-weight: bold"><i class="el-icon-date"></i> 生产信息</span>
            <table>
              <tr>
                <td style="font-weight: bold">未完成</td>
                <td><el-divider direction="vertical"></el-divider></td>
                <td width="100">{{stateNow[0].waiting}}</td>
                <th width="500" ><el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress></th>
              </tr>
              <tr>
                <td style="font-weight: bold">半成品</td>
                <td><el-divider direction="vertical"></el-divider></td>
                <td width="100">{{stateNow[0].semi}}</td>
                <th width="500" ><el-progress :text-inside="true" :stroke-width="20" :percentage="50"></el-progress></th>
              </tr>
              <tr>
                <td style="font-weight: bold">成品</td>
                <td><el-divider direction="vertical"></el-divider></td>
                <td width="100">{{stateNow[0].fini}}</td>
                <th width="500" ><el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="success"></el-progress></th>
              </tr>
            </table>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!--包漆车间信息-->
    <div style="margin-top: 1%;width: 47%;height: 2%;margin-left: 2%;float: left">
      <i class="el-icon-s-data" style="font-size: 30px;color: #2c3e50"></i>
      <!--#b3d8ff-->
      <span style="width: 80%;font-size: 25px;color: #2c3e50;" class="word">包    漆    车    间</span>
    </div>
    <div style="width: 47%;height:50%;margin-left: 2%;margin-top:2%;float: left">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label" style="font-weight: bold"><i class="el-icon-date"></i> 车间机台工作状态</span>
          <table class="word">
            <tr>
              <td class="td">机台编号</td>
              <td class="td" style="width: 31.5%">半径</td>
              <td class="td">长度</td>
              <td class="td">状态</td>
            </tr>
          </table>
          <br/>
          <vue-seamless-scroll :data="listData" :class-option="optionHover" class="seamless-warp2">
            <!--<li v-for="item in listData">-->
            <!--<span class="id" v-text="item.id"></span>-->
            <!--<span class="radius" v-text="item.radius"></span>-->
            <!--<span class="weight" v-text="item.weight"></span>-->
            <!--<span class="state" v-text="item.state"></span>-->
            <!--</li>-->
            <el-table
              :data="listData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="id"
                width="180">
              </el-table-column>
              <el-table-column
                prop="radius"
                width="180">
              </el-table-column>
              <el-table-column
                prop="length"
                width="180">
              </el-table-column>
              <el-table-column
                prop="state">
              </el-table-column>
            </el-table>
          </vue-seamless-scroll>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div style="width: 100%;height:5%;margin-top:2%;float: left">
      <div class="text-center">
        <span style="color: white">©2020 ChenXun. All rights reserved</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      methods:{
        // format(percentage) {
        //   return percentage === 100 ? '满' : `${percentage}%`;
        // }
      },
      data() {
        return {
          listData: [{
            id: '2016-05-02',
            radius: '0.5',
            length: '2',
            state: '未完成'
          }, {
            id: '2016-05-02',
            radius: '0.5',
            length: '2',
            state: '未完成'
          }, {
            id: '2016-05-02',
            radius: '0.5',
            length: '2',
            state: '未完成'
          }, {
            id: '2016-05-02',
            radius: '0.5',
            length: '2',
            state: '未完成'
          },{
            id: '2016-05-02',
            radius: '0.5',
            length: '2',
            state: '未完成'
          }, {
            id: '2016-05-02',
            radius: '0.5',
            length: '2',
            state: '未完成'
          }, {
            id: '2016-05-02',
            radius: '0.5',
            length: '2',
            state: '未完成'
          }],
          stateNow:[{
            waiting:'50',
            semi:'23',
            fini:'70'
          }]
        };
      },
      computed: {
        optionHover () {
          return {
            hoverStop: true,
            step:0.5
          }
        }
      }
    }
</script>

<style  scoped>
  #building {
    background:url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593596095434&di=4725e34be434cb4bee43617bcacf0c6c&imgtype=0&src=http%3A%2F%2Fimg.ewebweb.com%2Fuploads%2F20190905%2F11%2F1567652580-orUqbWJHam.jpg");
    opacity: 50%;
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: 100% 100%;
  }
  .seamless-warp {
    height: 450px;
    overflow: hidden;
    openWatch:true;
  }
  .seamless-warp2{
    height: 275px;
    overflow: hidden;
    openWatch:true;
  }
  .word{
    font-size: 15px;
    font-family: "PingFang SC";
    font-weight: bold;
  }
  .td{
    width: 31.5%;
    text-align: left;
  }
</style>
