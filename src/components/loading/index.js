/**
 * Created by zh on 2020/9/17.
 */
import {h, render, mergeProps} from 'vue';
import Loading from './index.vue';

let _instance = null;
export const useLoading = function(options) {
    if (!_instance) {
        const container = document.createDocumentFragment();

        // 直接根据组件生成 VNode
        _instance = h(Loading);

        // 合并参数
        _instance.props = mergeProps(_instance.props, {
            msg: '',
            ...options
        });

        // 渲染组件，并插入 body 之中
        render(_instance, container);
        document.body.appendChild(container);

        // 在组件添加一个 remove 方法用来销毁组件
        _instance.component.ctx.remove = function() {
            render(null, container);
            _instance = null;
        };
    }

    // 将组件直接暴露出去
    return _instance.component.ctx;
};
