/**
 * @file 路由相关辅助函数
 */

/**
 * 非开发模式路由懒加载
 * @param componentPath `./src/views`下的文件名
 */
export const lazyLoadHelper = (componentPath) => {
    if (process.env.NODE_ENV === 'development') {
        const comp = require(`@/views/${componentPath}.vue`);
        return comp.default || comp;
    }

    return () => import(/* webpackChunkName: "view-[request]-[index]" */ `@/views/${componentPath}.vue`);
};
