import { defineComponent, onMounted, ref } from "vue";
import "./index.less";
import { ZHeader } from "../../layout/header";
import { ZContent } from "../../layout/content";

export const MainPage = defineComponent({
  setup() {
    const count = ref(0);
    onMounted(() => {
      count.value = 1;
      console.log(count.value);
    });
    return () => (
      <div class={"main-page"}>
        <ZHeader></ZHeader>
        <ZContent></ZContent>
      </div>
    );
  },
});
