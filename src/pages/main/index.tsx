import { defineComponent, onMounted, ref } from "vue";
import "./index.less";

export const MainPage = defineComponent({
  setup() {
    const count = ref(0);
    onMounted(() => {
      count.value = 1;
      console.log(count.value);
    });
    return () => <div class="text">123456</div>;
  },
});
