
import React from 'react';
import { Platform } from 'react-native';

// 显示x.x万
export function transformNum(number) {
    if (number < 10000) {
        return number;
    }
    return `${parseInt(number / 1000) / 10}万`;
    // return (parseInt((number / 10000) * 10) / 10) + '万';

    // let num;
    // if (number < 10000) {
    // 	num = number;
    // } else if (number >= 10000) {
    // 	let tt = (number / 10000).toFixed(1);
    // 	let arrTT = tt.split('.');
    // 	if (arrTT[1] === '0') {
    // 		tt = arrTT[0];
    // 	}
    // 	num = `${tt} 万`;
    // }
    // return num;
}


// JSCore handle Date Different with JS engine, show NaN in devices;
// react-native/issue/15819
let jsCoreDateCreator = (dateString = '') => {
    // handle format like "YYYY-MM-DD HH:MM:SS"
    let dateParam = dateString.split(/[\s-:]/);
    dateParam[1] = (parseInt(dateParam[1], 10) - 1).toString();
    return new Date(...dateParam);
}
// 时间规则的封装处理
export function transformTime(timeStr, showTime) {
    const dateCreate = new jsCoreDateCreator(timeStr);   // 传入的时间
    const dateNow = new Date();				// 当前的时间
    const dayNum = 24 * 60 * 60 * 1000; // 一天的毫秒数
    const hourNum = 60 * 60 * 1000;		// 一小时的毫秒数
    const miniteNum = 60 * 1000;		// 一分钟的毫秒数
    const dateCha = dateNow.getTime() - dateCreate.getTime();	// 当前时间和创建时间的毫秒差

    const dateDayBei = dateCha / dayNum;		// 天的倍数
    const dateHourBei = dateCha / hourNum;		// 小时的倍数
    const dateMiniteBei = dateCha / miniteNum;	// 分钟的倍数

    let dateCreateYear = dateCreate.getFullYear();		// 创建时间的年份
    let dateCreateMonth = dateCreate.getMonth();		// 创建时间的月份
    let dateCreateDay = dateCreate.getDate();			// 创建时间的日期
    let dateCreateHour = dateCreate.getHours();			// 创建时间的小时
    // let dateCreateMinite = dateCreate.getMinutes() < 10 ? `0${dateCreate.getMinutes()}` : dateCreate.getMinutes();   // 创建时间的分钟
    let dateCreateMinite = dateCreate.getMinutes().toString()[1] ? dateCreate.getMinutes() : `0${dateCreate.getMinutes()}`;   // 创建时间的分钟
    let dateNowYear = dateNow.getFullYear();			// 当前时间的年份
    let day = '';								// 最终
    let time = '';
    let timeStrNew = '';						// 最终的返回时间
    if (dateNowYear !== dateCreateYear) {
        let timeStrFixed = `${dateCreateYear}-${dateCreateMonth}-${dateCreateDay}`;
        timeStrNew = showTime ? `${timeStrFixed} ${dateCreateHour}:${dateCreateMinite}` : timeStrFixed;
    } else {
        if (dateDayBei > 0 && dateDayBei < 1) {
            if (dateHourBei > 0 && dateHourBei < 1) {
                if (dateMiniteBei > 0 && dateMiniteBei < 1) {
                    timeStrNew = '刚刚';
                } else {
                    timeStrNew = `${dateMiniteBei.toFixed()}分钟前`;
                }
            } else {
                if (dateCreateDay < dateNow.getDate()) {
                    let timeStrFixed = `昨天  ${dateCreateHour}:${dateCreateMinite} `;
                    timeStrNew = showTime ? timeStrFixed : `昨天`;
                } else {
                    timeStrNew = `今天  ${dateCreateHour}:${dateCreateMinite} `;
                }
            }
        } else if (dateDayBei > 1 && dateDayBei < 2) {
            timeStrNew = showTime ? `昨天  ${dateCreateHour}:${dateCreateMinite} ` : '昨天';
        } else {
            let timeStrFixed = `${dateCreateMonth}-${dateCreateDay}`;
            timeStrNew = showTime ? `${timeStrFixed} ${dateCreateHour}:${dateCreateMinite}` : timeStrFixed;
        }
    }
    return timeStrNew;
}

// ios的适配
export function isIphoneX() {
    return Platform.OS === "ios" && width === 375 && height === 812;
}

export function isIPhone5() {
    return Platform.OS === 'ios' && width === 320 && height === 568;
}