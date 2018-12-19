import { TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';
import { Message } from '../models/message';

describe('ChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  
  it('should be created', () => {
    const service: ChatService = TestBed.get(ChatService);
    expect(service).toBeTruthy();
  });
  
  it('add message properly', () => {
    const service: ChatService = TestBed.get(ChatService);
    const nbrMsg = service.messages.length;
    service.addMessage(new Message());
    expect(nbrMsg + 1).toEqual(service.messages.length);
  });
});
