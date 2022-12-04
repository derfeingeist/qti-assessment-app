import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('qti-assessment-test')
export class QtiAssessmentTest extends LitElement {
  static styles = css`
    #test-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: #f5f5f5;
    }
  `;

  @property()
  identifier = '';

  @property()
  title = '';

  render() {
    return html`<div id="test-container">
      <h1>${this.title}</h1>
      <slot></slot>
    </div>`;
  }
}
