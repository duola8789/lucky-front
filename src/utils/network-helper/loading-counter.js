/**
 * 全局 loading 计数器
 */
import {useLoading} from '@/components/loading';

class LoadingCounter {
    count = 0;
    loadingInstance = useLoading();

    getLoadings() {
        return this.count;
    }

    addLoading() {
        this.count++;
        if (this.getLoadings() <= 1) {
            this.loadingInstance.show();
        }
    }

    subLoading() {
        this.count--;
        setTimeout(() => {
            if (this.getLoadings() === 0 && this.loadingInstance) {
                this.loadingInstance.close();
            }
        }, 50);
    }

    clearLoading() {
        this.count = 0;
        this.loadingInstance && this.loadingInstance.close();
    }
}

export const loadingCounter = new LoadingCounter();
