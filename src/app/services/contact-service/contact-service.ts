import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Contact } from '../../models/contact';
import { firstValueFrom } from 'rxjs';

@Service()
export class ContactService {
    private readonly http = inject(HttpClient);

    private readonly apiUrl = 'https://contact.example.workers.dev/contact';

    send(contact: Contact): Promise<void> {
        return firstValueFrom(this.http.post<void>(this.apiUrl, contact));
    }
}
