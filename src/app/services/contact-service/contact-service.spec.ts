import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ContactService } from './contact-service';
import { Contact } from '../../models/contact';

describe('ContactService', () => {
  let service: ContactService;
  let httpTesting: HttpTestingController;
  const contact: Contact = { name: 'Ana', email: 'ana@example.com', message: 'Hello there' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ContactService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());   // falla si queda alguna petición sin responder

  it('should POST the contact and resolve on success', async () => {
    const promise = service.send(contact);
    const req = httpTesting.expectOne({ method: 'POST' });
    expect(req.request.body).toEqual(contact);
    req.flush({ ok: true });
    await promise;
  });

  it('should reject with status 429 when rate limited', async () => {
    const promise = service.send(contact);
    httpTesting.expectOne({ method: 'POST' })
      .flush({ ok: false, error: 'rate_limited' }, { status: 429, statusText: 'Too Many Requests' });
    await expect(promise).rejects.toMatchObject({ status: 429 });
  });

  it('should reject with status 0 on network error', async () => {
    const promise = service.send(contact);
    httpTesting.expectOne({ method: 'POST' }).error(new ProgressEvent('error'));
    await expect(promise).rejects.toMatchObject({ status: 0 });
  });
});