import { defineComponent, onMounted, ref } from "vue";
import "./index.less";

export const ZHeader = defineComponent({
  setup() {
    const count = ref(0);
    onMounted(() => {
      count.value = 1;
      console.log(count.value);
    });
    return () => (
      <div class="z-header">
        <div class={"left-menu"}>
          <div class={"logo"}></div>
          <div class={"welcom"}>Welcome ~~</div>
          <div class={"menu-item"}></div>
        </div>
        <div class={"right-menu"}>
          <div class={"link-icon"}>2</div>
        </div>
        <div class={"user-menu"}>3</div>
      </div>
    );
  },
});
