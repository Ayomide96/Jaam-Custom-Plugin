import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class EditableRepeatingSection extends LitElement {
    static properties = {
        who: {type: String},
      };
        
      constructor() {
        super();
        this.who = 'World';
      }						
                                
      render() {
        return html`<p>Hello ${this.who}<p/>`;
      }

      static getMetaConfig() {
        return {
          controlName: 'Editable Repeating Section',
          fallbackDisableSubmit: false,
          version: '1.0',
          properties: {
            who: {
              type: 'string',
              title: 'Who',
              description: 'Who to say hello to'
            }
          }
        };
      }
}

const elementName = 'jaam-repeat-section';
customElements.define(elementName, EditableRepeatingSection);
