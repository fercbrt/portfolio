import { Component, signal } from '@angular/core';
import { Contact } from '../../models/contact';
import { email, form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';
import { Section } from '../../components/section/section';

@Component({
  imports: [FormField, Section, FormRoot],
  selector: 'app-contact-page',
  styleUrl: './contact-page.css',
  templateUrl: './contact-page.html',
})
export class ContactPage {

  private readonly initialValues: Contact = {
    name: '', email: '', message: ''
  };

  private readonly contactData = signal<Contact>({ ...this.initialValues});
  
  protected readonly submitted = signal(false);

  protected readonly contactForm = form(this.contactData, (schemaPath) => {
    required(schemaPath.name, { message: 'Name is required' });
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.message, { message: 'Message is required' });
    minLength(schemaPath.message, 5, { message: 'Message length must be at least 5 characters' });
  },
  {
    submission: {
      action: async (f) => {
        this.submitted.set(false);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        this.submitted.set(true);
        f().reset({ ...this.initialValues});
      }
    }
  });
}
