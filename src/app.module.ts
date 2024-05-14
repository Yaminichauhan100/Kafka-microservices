// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { KafkaConsumerController } from './consumer-microservice/consumer.controller';
// import { ClientKafka } from '@nestjs/microservices';
// import { ConsumerModule } from './consumer-microservice/consumer.module';
// import { ConsumerService } from './consumer-microservice/consumer.service';

// @Module({
//   imports: [ConsumerModule],
//   controllers: [AppController, KafkaConsumerController],
//   providers: [AppService, ClientKafka, ConsumerService],
// })
// export class AppModule {}
// app.module.ts
// import { Module } from '@nestjs/common';
// import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
// import { ConsumerService } from './consumer-microservice/consumer.service';

// @Module({
//   imports: [
//     //   ConsumerModule,
//     ClientsModule.register([
//       {
//         name: 'KAFKA_CONSUMER',
//         transport: Transport.KAFKA,
//         options: {
//           client: {
//             clientId: 'consumer',
//             brokers: ['localhost:9092'],
//           },
//           consumer: {
//             groupId: 'consumer-group',
//           },
//         },
//       },
//     ]),
//   ],

//   providers: [ConsumerService, ClientKafka],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumerController } from './consumer-microservice/consumer.controller';
// import { ConsumerService } from './consumer-microservice/consumer.service';

@Module({
  imports: [],
  controllers: [AppController, ConsumerController],
  providers: [AppService],
})
export class AppModule {}
