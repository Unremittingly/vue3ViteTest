import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import { onUnmounted } from "vue";
import { unwatch } from "./permission";

export default defineComponent({
  name: "App",
  setup() {
    onUnmounted(() => {
      unwatch();
    });
    return () => <RouterView></RouterView>;
  },
});
