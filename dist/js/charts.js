/**
 * @author Perlou
 * @charts.js
 */

(function(){

'use strict';

var skillData = {
    feskill: { 
        chartId: 'feSkillChart',
        data: [{
            value: [4,4,4,4,4,4,5,5],
            name: '技能评分'            
        }],
        title: '前端开发相关技能',
        indicator: [
            {name: 'html+css页面布局(pc端/移动端)', max: 5},
            {name: 'javascript', max: 5},
            {name: 'html5标准', max: 5},
            {name: 'css3新特性和标准', max: 5},
            {name: 'photoshop', max: 5},
            {name: 'es6', max: 5},
            {name: '前端代码构建模块化，工程化(基于nodeJs开发)', max: 5},
            {name: '微信前端开发(公众号应用)', max: 5}
        ]      
    }, 
    fefskill: { 
        chartId: 'fefSkillChart',
        data: [{
            value: [4,4,4,4,4,4,5,5],
            name: '技能评分'            
        }],
        title: '前端开发相关技能',
        indicator: [
            {name: 'html+css页面布局(pc端/移动端)', max: 5},
            {name: 'javascript', max: 5},
            {name: 'html5标准', max: 5},
            {name: 'css3新特性和标准', max: 5},
            {name: 'photoshop', max: 5},
            {name: 'es6', max: 5},
            {name: '前端代码构建模块化，工程化(基于nodeJs开发)', max: 5},
            {name: '微信前端开发(公众号应用)', max: 5}
        ] 
    }, 
    fetskill: { 
        chartId: 'fetSkillChart',
        data: [{
            value: [4,4,4,4,4,4,5,5],
            name: '技能评分'            
        }],
        title: '前端开发相关技能',
        indicator: [
            {name: 'html+css页面布局(pc端/移动端)', max: 5},
            {name: 'javascript', max: 5},
            {name: 'html5标准', max: 5},
            {name: 'css3新特性和标准', max: 5},
            {name: 'photoshop', max: 5},
            {name: 'es6', max: 5},
            {name: '前端代码构建模块化，工程化(基于nodeJs开发)', max: 5},
            {name: '微信前端开发(公众号应用)', max: 5}
        ] 
    }, 
    beskill: { 
        chartId: 'beSkillChart',
        data: [{
            value: [4,4,4,4,4,4,5,5],
            name: '技能评分'            
        }],
        title: '前端开发相关技能',
        indicator: [
            {name: 'html+css页面布局(pc端/移动端)', max: 5},
            {name: 'javascript', max: 5},
            {name: 'html5标准', max: 5},
            {name: 'css3新特性和标准', max: 5},
            {name: 'photoshop', max: 5},
            {name: 'es6', max: 5},
            {name: '前端代码构建模块化，工程化(基于nodeJs开发)', max: 5},
            {name: '微信前端开发(公众号应用)', max: 5}
        ] 
    }, 
    otherskill: { 
        chartId: 'otherSkillChart',
        data: [{
            value: [4,4,4,4,4,4,5,5],
            name: '技能评分'            
        }],
        title: '前端开发相关技能',
        indicator: [
            {name: 'html+css页面布局(pc端/移动端)', max: 5},
            {name: 'javascript', max: 5},
            {name: 'html5标准', max: 5},
            {name: 'css3新特性和标准', max: 5},
            {name: 'photoshop', max: 5},
            {name: 'es6', max: 5},
            {name: '前端代码构建模块化，工程化(基于nodeJs开发)', max: 5},
            {name: '微信前端开发(公众号应用)', max: 5}
        ] 
    }
};

var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

for(var i in skillData){
    var thisChart = echarts.init(document.getElementById(skillData[i].chartId));
    var obj = {
        backgroundColor: 'none',
        title: {
            text: skillData[i].title,
            left: 'center',
            textStyle: {
                color: '#eee'
            }
        },
        tooltip:{
            trigger: 'item'
        },
        radar: {
            indicator: skillData[i].indicator,
            shape: 'circle',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: 'rgb(238, 197, 102)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [
            {
                name: '前端技能图',
                type: 'radar',
                lineStyle: lineStyle,
                data: skillData[i].data,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#F9713C'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            }
        ]        
    };
    thisChart.setOption(obj);

}

})();
