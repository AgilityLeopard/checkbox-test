export default {
    name: "checkbox-component",
    props: {
      options: {
        text: String,
        disabled: Boolean,
        value: Boolean,
      },
    },
    data() {
      return {
        checked: this.options.value,
      };
    },
    methods: {
      onChange() {
        this.$emit("onChange", this.checked);
      },
    },
  };