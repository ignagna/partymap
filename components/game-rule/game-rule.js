Component({
  properties: {
    antiphase: {
      type: Boolean,
      value: !1
    }
  },
  data: {},
  methods: {
    nothing: function() {},
    close: function() {
      this.triggerEvent("close")
    }
  }
});