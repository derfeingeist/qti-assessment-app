import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement('qti-assessment-app')
export class QtiAssessmentApp extends LitElement {
  static styles = css``;

  @property()
  assessmentLink = '';

  @property()
  assessmentTest = '';

  private async fetchAssessmentTest() {
    await fetch(this.assessmentLink)
      .then((r) => r.text())
      .then((text) => (this.assessmentTest = text));
  }

  render() {
    this.fetchAssessmentTest();
    return html`${unsafeHTML(this.assessmentTest)}`;
  }
}
