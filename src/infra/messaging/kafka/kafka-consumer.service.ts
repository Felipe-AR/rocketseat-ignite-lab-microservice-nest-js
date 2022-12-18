import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['valid-coyote-5494-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dmFsaWQtY295b3RlLTU0OTQkR-GQBlsUihgl8QGdoWNcY7W0re5yGKTDBtaLZEQ',
          password:
            'vLxLwtA_hrfHu6p54aiDARMrQsgXlL30WtBRHteBmBSDK_o0AOT5UnVE35J8TqcqdfHJXw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
