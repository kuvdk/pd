"use strict";
const utils_loading = require("../utils/loading.js");
const utils_constants = require("../utils/constants.js");
const production = {
  // 提交生产订单
  submitOrder(data) {
    return new Promise((resolve) => {
      utils_loading.loading.show("提交订单...");
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            id: Date.now(),
            status: utils_constants.ORDER_STATUS.PENDING,
            ...data
          }
        });
        utils_loading.loading.hide();
      }, 500);
    });
  },
  // 获取订单列表
  getOrders(params = {}) {
    return new Promise((resolve) => {
      utils_loading.loading.show("加载订单列表...");
      setTimeout(() => {
        resolve({
          data: {
            total: 25,
            list: [
              {
                id: "1",
                productCode: "MF-001",
                quantity: 100,
                unitPrice: 15.5,
                totalPrice: 1550,
                status: utils_constants.ORDER_STATUS.PENDING,
                createTime: "2024-01-20 10:30:00"
              }
              // ... 其他订单数据
            ]
          }
        });
        utils_loading.loading.hide();
      }, 500);
    });
  },
  // 获取统计数据
  getStats() {
    return new Promise((resolve) => {
      utils_loading.loading.show("加载统计数据...");
      setTimeout(() => {
        resolve({
          data: {
            today: 12,
            // 今日订单
            pending: 5,
            // 待处理
            finished: 45
            // 已完成
          }
        });
        utils_loading.loading.hide();
      }, 500);
    });
  }
};
exports.production = production;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/production.js.map
