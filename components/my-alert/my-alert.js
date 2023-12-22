Component({
  properties: {
    text: {
      type: String,
      value: ""
    }
  },
  data: {},
  methods: {
    nothing: function() {},
    handleConfirm: function() {
      this.triggerEvent("close")
    }
  }
});