// // consumer.service.ts
// // import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
// // import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

// // @Injectable()
// // export class ConsumerService implements OnModuleInit {
// //   constructor(
// //     @Inject('KAFKA_CONSUMER') private readonly kafkaConsumer: ClientKafka,
// //   ) {}

// //   async onModuleInit() {
// //     await this.kafkaConsumer.subscribeToResponseOf('message-topic');
// //     await this.kafkaConsumer.connect();
// //   }

// //   @MessagePattern('message-topic')
// //   async handleMessage(@Payload() message: any) {
// //     console.log(
// //       `Received message from topic "message-topic": ${message.value}`,
// //     );
// //   }
// // }
// // consumer.service.ts
// // import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
// // import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

// // @Injectable()
// // export class ConsumerService implements OnModuleInit {
// //   constructor(
// //     @Inject('KAFKA_CONSUMER') private readonly kafkaConsumer: ClientKafka,
// //   ) {}
// //   // constructor(private readonly kafkaConsumer: ClientKafka) {}

// //   async onModuleInit() {
// //     this.kafkaConsumer.subscribeToResponseOf('message-topic');
// //     await this.kafkaConsumer.connect();
// //   }

// //   @MessagePattern('message-topic')
// //   async handleMessage(@Payload() message: any) {
// //     console.log(
// //       `Received message from topic "message-topic": ${message.value}`,
// //     );
// //     // Process the received message here
// //   }
// // }
// import { Injectable } from '@nestjs/common';
// import { GetUserRequest } from './dto';

// @Injectable()
// export class ConsumerService {
//   // private readonly users: any[] = [
//   //   {
//   //     userId: '123',
//   //   },
//   //   {
//   //     userId: '345',
//   //   },
//   // ];

//   // getHello(): string {
//   //   return 'Hello World!';
//   // }

//   getUser() {
//     return 'hey';
//     // console.log(user);
//     // return this.users.find((user) => user.userId === getUserRequest.userId);
//   }
// }
