/*
 * @Author: liutingting
 * @Date:   2018-03-09 18:08:18
 * @Last Modified by:   liutingting
 * @Last Modified time: 2018-03-12 14:25:00
 */
var app = new Vue({
    el: '#hdcms',
    data: {
        message: '后盾人',
        hd: 'red',
        title: '<p>https://www.baidu.com</p>'
    },
    methods: {
        greet: function(time) {
            return 'good' + time;
        }
    }
})