import { Component, signal } from '@angular/core';
import { Contact } from '../../models/contact';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';
import { Section } from '../../components/section/section';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [FormField, Section, JsonPipe],
  selector: 'app-contact-page',
  styleUrl: './contact-page.css',
  templateUrl: './contact-page.html',
})
export class ContactPage {
  private contactData = signal<Contact>({
    name: '',
    email: '',
    message: ''
  });
  protected readonly contactForm = form(this.contactData, (schemaPath) => {
    required(schemaPath.name, { message: 'Name is required' });
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.message, { message: 'Message is required' });
    minLength(schemaPath.message, 5, { message: 'Message length must be at least 5 characters' });
  });
}
