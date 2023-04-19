import dayjs from "dayjs";
export default function (app) {
  app.directive("format-time", {
    mounted(el, bindings) {
      let formatString = bindings.value;
      if (!formatString) {
        formatString = "YYYY-MM-DD hh:mm:ss";
      }

      const textContent = el.textContent;
      console.log(el);
      let timeStamp = parseInt(textContent);
      if (textContent.length == 10) {
        timeStamp = timeStamp * 1000;
      }

      el.textContent = dayjs(timeStamp).format(formatString);
    },
  });
}
