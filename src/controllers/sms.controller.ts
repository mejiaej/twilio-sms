import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { SmsRequestDto } from 'src/dto/smsRequest.dto';
import { SmsService } from 'src/services/sms.service';

@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Post()
  sendSms(@Res() res: Response, @Body() smsRequestDto: SmsRequestDto): void {
    this.smsService.sendSms(smsRequestDto.to, smsRequestDto.body);
    res.status(HttpStatus.OK).send();
  }

  @Get()
  getSms(): any {
    return { message: 'hello' };
  }
}
