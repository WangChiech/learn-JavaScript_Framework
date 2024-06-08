
<script>
export default {
  props: ['msg'],
  setup(props, ctx) {
    return function () {
      debugger
      console.dir(props.msg)
      return props.msg.val
    }
  }
}

</script>