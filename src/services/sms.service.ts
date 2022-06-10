import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';

@Injectable()
export class SmsService {
  private accountSid: string = process.env.TWILIO_ACCOUNT_SID;
  private authToken: string = process.env.TWILIO_AUTH_TOKEN;
  private twilioNumber: string = process.env.TWILIO_PHONE_NUMBER;
  private twilioClient = new Twilio(this.accountSid, this.authToken);

  sendSms(to: string, body: string): void {
    this.twilioClient.messages
      .create({
        from: this.twilioNumber,
        to,
        body,
      })
      .then((message) => console.log(message.sid))
      .catch((error) => console.log(error));
  }
}
