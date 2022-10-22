<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script setup lang="ts" name="iframe">
import ( ref ) from "vue";

const props = defineProps({
  cid: {
    type: String,
    default: "",
  },
  aid: {
    type: String,
    default: "",
  },
  page: {
    type: String,
    default: "1",
  },
  as_wide: {
    type: String,
    default: "1",
  },
  high_quality: {
    type: String,
    default: "1",
  },
  danmaku: {
    type: String,
    default: "0",
  },
})

const { cid, aid, page, as_wide, high_quality, danmaku } = props;

const baseURL = "https://player.bilibili.com/player.html?";

const src = ref<String>(`${baseURL}cid=${cid}&aid=${aid}&page=${page}&as_wide=${as_wide}&high_quality=${high_quality}&danmaku=${danmaku}`);

</script>