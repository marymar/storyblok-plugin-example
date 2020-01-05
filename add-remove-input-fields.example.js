const Fieldtype = {
  mixins: [window.Storyblok.plugin],
  template: `<div>
      <div class="uk-margin-bottom">
        <a @click="addField" class="uk-button uk-button-primary uk-button-small">Add reference</a>
      </div>
        
      <div class="tree__form" v-for="(field, index) in model.fields" :key="field +  index">
        <label class="uk-form-label"># {{ index + 1 }}</label>
        <div class="schema__option">
          <div class="input-group uk-flex">
            <div>
              <input placeholder="Example: 123" class="input-group__field" v-model="model.fields[index]">
            </div>
            <i class="input-group__item schema__trash uk-icon-trash" @click="() => deleteField(index)"></i>
          </div>
        </div>
      </div>
      
    </div>
  `,
  methods: {
    initWith() {
      return {
        plugin: 'example-plugin',
        fields: [],
      }
    },
    pluginCreated() {
      console.log('plugin:created')
    },
    addField() {
      this.model.fields.push('new val...')
    },
    deleteField(index) {
      this.model.fields.splice(index, 1)
    }
  },
  watch: {
    'model': {
      handler: function (value) {
        this.$emit('changed-model', value);
      },
      deep: true,
    },
  }
}
