import faqsData from '../fixtures/faq.json';

import React from 'react';
import Accordion from '../components/accordion';
import OptForm from '../components/opt-form';

function FaqContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptForm>
        <OptForm.Input placeholder='Email address' />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Text>
          Ready to watch? Enter your email to creat e or restart your membership
        </OptForm.Text>

        <OptForm.Break />
      </OptForm>
    </Accordion>
  );
}

export default FaqContainer;
