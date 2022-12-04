import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('qti-assessment-app')
export class QtiAssessmentApp extends LitElement {
  static styles = css``;

  @property()
  assessmentLink = '';

  render() {
    return html`<p>I'm a qti assessment app.</p>`;
  }
}
