import { Component, inject, signal } from '@angular/core';
import { Contact } from '../../models/contact';
import { email, form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';
import { Section } from '../../components/section/section';
import { FieldErrors } from '../../components/field-errors/field-errors';
import { ContactService } from '../../services/contact-service/contact-service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorMessage } from '../../components/error-message/error-message';

@Component({
  imports: [FormField, Section, FormRoot, FieldErrors, ErrorMessage],
  selector: 'app-contact-page',
  styleUrl: './contact-page.css',
  templateUrl: './contact-page.html',
})
export class ContactPage {

  private readonly contactService = inject(ContactService);

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
        try {
          await this.contactService.send(f().value());
          this.submitted.set(true);
          f().reset({ ...this.initialValues });
          return;
        } catch (error) {
          const status = error instanceof HttpErrorResponse ? error.status : 0;
          return { kind: 'serverError', message: this.errorMessage(status) };
        }
      }
    }
  });

  private errorMessage(status: number): string {
    switch (status) {
      case 400: return 'Some fields are invalid. Please review them.';
      case 429: return 'Too many messages. Please try again later.';
      case 403: return "You can't send messages right now. Contact me on LinkedIn.";
      default: return 'Could not send your message. Check your connection and try again.';
    }
  }
}
