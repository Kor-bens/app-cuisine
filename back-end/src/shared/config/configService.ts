import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  get isProduction(): boolean {
    return this.environment === 'production';
  }

  get isDevelopment(): boolean {
    return this.environment === 'development';
  }

  get isTest(): boolean {
    return this.environment === 'test';
  }

  private get environment(): string {
    console.log(`env : ${this.configService.get<string>('NODE_ENV')}`);
    return this.configService.get<string>('NODE_ENV');
  }
}
